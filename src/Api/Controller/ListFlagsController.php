<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Flags\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Flarum\Flags\Api\Serializer\FlagSerializer;
use Flarum\Flags\Flag;
use Flarum\User\AssertPermissionTrait;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class ListFlagsController extends AbstractListController
{
    use AssertPermissionTrait;

    /**
     * {@inheritdoc}
     */
    public $serializer = FlagSerializer::class;

    /**
     * @var array
     */
    public $sort = ['created_at' => 'asc'];

    /**
     * @var array
     */
    public $sortFields = ['createdAt', 'dismissedAt'];

    /**
     * {@inheritdoc}
     */
    public $include = [
        'user',
        'post',
        'dismisser',
        'post.user',
        'post.discussion'
    ];

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = $request->getAttribute('actor');

        $this->assertRegistered($actor);

        $onlyDismissed = Arr::get($request->getQueryParams(), 'dismissed', false);

        if (! $onlyDismissed) {
            $actor->read_flags_at = time();
            $actor->save();
        }

        $flag = Flag::whereVisibleTo($actor);
        $flag->with($this->extractInclude($request));
        if ($onlyDismissed) {
            $flag->whereNotNull('flags.dismissed_at');
        } else {
            $flag->whereNull('flags.dismissed_at');
            $flag->groupBy('post_id');
        }

        $sort = $this->extractSort($request);
        foreach ($sort as $field => $order) {
            $flag->orderBy(snake_case($field), $order);
        }

        return $flag->get();
    }
}
