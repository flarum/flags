<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        $schema->table('flags', function (Blueprint $table) {
            $table->dateTime('dismissed_at')->nullable();
            $table->integer('dismissed_by_user_id')->unsigned()->nullable();

            $table->index('dismissed_by_user_id');

            $table->foreign('dismissed_by_user_id')->references('id')->on('users')->onDelete('cascade');
        });
    },

    'down' => function (Builder $schema) {
        $schema->table('flags', function (Blueprint $table) {
            $table->dropColumn('dismissed_at');
            $table->dropColumn('dismissed_by_user_id');

            $table->dropIndex('dismissed_by_user_id');

            $table->dropForeign('dismissed_by_user_id');
        });
    }
];
