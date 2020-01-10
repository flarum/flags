<?php

/*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Flarum\Flags\Command;

use Flarum\Flags\Flag;
use Flarum\Foundation\ValidationException;
use Flarum\Post\CommentPost;
use Flarum\Post\PostRepository;
use Flarum\User\AssertPermissionTrait;
use Symfony\Component\Translation\TranslatorInterface;
use Tobscure\JsonApi\Exception\InvalidParameterException;

class CreateFlagHandler
{
    use AssertPermissionTrait;

    /**
     * @var PostRepository
     */
    protected $posts;

        /**
     * @var TranslatorInterface
     */
    protected $translator;

    /**
     * @param PostRepository $posts
     * @param TranslatorInterface $translator
     */
    public function __construct(PostRepository $posts, TranslatorInterface $translator)
    {
        $this->posts = $posts;
        $this->translator = $translator;
    }

    /**
     * @param CreateFlag $command
     * @return Flag
     * @throws InvalidParameterException
     * @throws ValidationException
     */
    public function handle(CreateFlag $command)
    {
        $actor = $command->actor;
        $data = $command->data;

        $postId = array_get($data, 'relationships.post.data.id');
        $post = $this->posts->findOrFail($postId, $actor);

        if (! ($post instanceof CommentPost)) {
            throw new InvalidParameterException;
        }

        $this->assertCan($actor, 'flag', $post);

        if (array_get($data, 'attributes.reason') === null && array_get($data, 'attributes.reasonDetail') === '') {
            throw new ValidationException([
                'message' => $this->translator->trans('flarum-flags.forum.post.reason-needed')
                ]);
        }

        Flag::unguard();

        $flag = Flag::firstOrNew([
            'post_id' => $post->id,
            'user_id' => $actor->id
        ]);

        $flag->post_id = $post->id;
        $flag->user_id = $actor->id;
        $flag->type = 'user';
        $flag->reason = array_get($data, 'attributes.reason');
        $flag->reason_detail = array_get($data, 'attributes.reasonDetail');
        $flag->created_at = time();

        $flag->save();

        return $flag;
    }
}
