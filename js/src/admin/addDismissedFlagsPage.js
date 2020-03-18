import { extend } from 'flarum/extend';
import AdminLinkButton from 'flarum/components/AdminLinkButton';
import AdminNav from 'flarum/components/AdminNav';
import DismissedFlagsPage from './components/DismissedFlagsPage';

export default () => {
  app.routes['dismissed-flags'] = {
    path: 'dismissed-flags',
    component: DismissedFlagsPage.component()
  };

  app.routes['discussion.near'] = {
    path: '/d/:id/:near', //TODO: Why is this route needed?
  };

  extend(AdminNav.prototype, 'items', items => {
    items.add(
      'dismissed-flags',
      AdminLinkButton.component({
        href: app.route('dismissed-flags'),
        icon: 'fas fa-flag',
        children: app.translator.trans('flarum-flags.admin.dismissed.title'),
        description: app.translator.trans('flarum-flags.admin.dismissed.description')
      })
    );
  });
};