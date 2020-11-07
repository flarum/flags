import app from 'flarum/app';
import ExtensionData from "flarum/utils/ExtensionData";

app.initializers.add('flarum-flags', () => {
  new ExtensionData('flarum-flags')
    .registerData('settings',
      {
        'flarum-flags.guidelines_url':
          {
            type: 'text',
            label: app.translator.trans('flarum-flags.admin.settings.guidelines_url_label')
          },
        'flarum-flags.can_flag_own':
          {
            type: 'boolean',
            label: app.translator.trans('flarum-flags.admin.settings.flag_own_posts_label')
          }
      }
    )
    .registerData('permissions',
      {
        icon: 'fas fa-flag',
        label: app.translator.trans('flarum-flags.admin.permissions.view_flags_label'),
        permission: 'discussion.viewFlags'
      }, 'moderate', 65)

    .registerData('permissions',
      {
        icon: 'fas fa-flag',
        label: app.translator.trans('flarum-flags.admin.permissions.flag_posts_label'),
        permission: 'discussion.flagPosts'
      }, 'reply', 65);
});
