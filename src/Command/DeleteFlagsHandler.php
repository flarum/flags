<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Flags\Command;

use Flarum\Flags\Event\FlagsWillBeDeleted;
use Flarum\Flags\Flag;
use Flarum\Post\PostRepository;
use Flarum\User\AssertPermissionTrait;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Carbon;

class DeleteFlagsHandler
{
    use AssertPermissionTrait;

    /**
     * @var PostRepository
     */
    protected $posts;

    /**
     * @var Dispatcher
     */
    protected $events;

    /**
     * @param PostRepository $posts
     * @param Dispatcher $events
     */
    public function __construct(PostRepository $posts, Dispatcher $events)
    {
        $this->posts = $posts;
        $this->events = $events;
    }

    /**
     * @param DeleteFlags $command
     * @return Flag
     */
    public function handle(DeleteFlags $command)
    {
        $actor = $command->actor;

        $post = $this->posts->findOrFail($command->postId, $actor);

        $this->assertCan($actor, 'viewFlags', $post->discussion);

        $this->events->dispatch(new FlagsWillBeDeleted($post, $actor, $command->data));

        $flags = $post->flags()->get();

        $flags->update([
            'dismissed_at'          => Carbon::now(),
            'dismissed_by_user_id'  => $actor->id
        ]);

        return $post;
    }
}
