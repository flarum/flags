<?php

/*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Flarum\Flags\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Api\Serializer\PostSerializer;
use Symfony\Component\Translation\TranslatorInterface;

class FlagSerializer extends AbstractSerializer
{
    /**
     * {@inheritdoc}
     */
    protected $type = 'flags';
    
    /**
     * @var TranslatorInterface
     */
    private $translator;

    /**
     * @param TranslatorInterface $translator
     */
    public function __construct(TranslatorInterface $translator)
    {
        $this->translator = $translator;
    }

    /**
     * {@inheritdoc}
     */
    protected function getDefaultAttributes($flag)
    {
        return [
            'type'         => $flag->type,
            'reason'       => $this->translateReasonName($flag->reason),
            'reasonDetail' => $this->translateReasonDetail($flag->reason_detail),
            'createdAt'    => $this->formatDate($flag->created_at),
        ];
    }

    /**
     * @return \Tobscure\JsonApi\Relationship
     */
    protected function post($flag)
    {
        return $this->hasOne($flag, PostSerializer::class);
    }

    /**
     * @return \Tobscure\JsonApi\Relationship
     */
    protected function user($flag)
    {
        return $this->hasOne($flag, BasicUserSerializer::class);
    }

    /**
     * @param string $name
     * @return string
     */
    private function translateReasonName($name)
    {
        $translation = $this->translator->trans($key = 'flarum-flags.forum.flag_post.reason_'.strtolower($name).'_label');

        if ($translation !== $key) {
            return $translation;
        }

        return $name;
    }

    /**
     * @param string $name
     * @return string
     */
    private function translateReasonDetail($name)
    {
        $translation = $this->translator->trans($key = 'flarum-flags.forum.flag_post.reason_'.strtolower($name).'_text');

        if ($translation !== $key) {
            return $translation;
        }

        return $name;
    }
}
