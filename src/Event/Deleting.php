<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Flags\Event;

use Flarum\Flags\Flag;
use Flarum\User\User;

class Deleting
{
    /**
     * @var Flag
     */
    public $flag;

    /**
     * @var User
     */
    public $actor;

    /**
     * @param Flag $flag
     * @param User $actor
     */
    public function __construct(Flag $flag, User $actor)
    {
        $this->flag = $flag;
        $this->actor = $actor;
    }
}
