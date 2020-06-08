import Button from 'flarum/components/Button';
import Component from 'flarum/Component';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import DismissedFlagsModal from './DismissedFlagsModal';
import humanTime from 'flarum/helpers/humanTime';
import username from 'flarum/helpers/username';
import avatar from 'flarum/helpers/avatar';

export default class DismissedFlagsTable extends Component {
  init() {
    this.data = [];
    this.loading = true;

    app.store.find('flags', { dismissed: true, sort: 'dismissedAt' }).then(res => {
      this.data = res.payload.data;
      this.loading = false;

      m.redraw();
    });

    console.log($('time').tooltip())
  }

  view() {
    if (this.loading) {
      return <LoadingIndicator />;
    }

    return (
      <div className="DismissedFlagsPage">
      <table className="DismissedFlagsPage-results">
          <thead>
            <th>{app.translator.trans('flarum-flags.admin.dismissed.fields.username')}</th>
            <th>{app.translator.trans('flarum-flags.admin.dismissed.fields.discussion')}</th>
            <th>{app.translator.trans('flarum-flags.admin.dismissed.fields.created_at')}</th>
            <th>{app.translator.trans('flarum-flags.admin.dismissed.fields.dismissed_at')}</th>
            <th>{app.translator.trans('flarum-flags.admin.dismissed.fields.dismissed_by')}</th>
            <th></th>
          </thead>
          <tbody>
            {this.data.map(data => {
              const flag = app.store.getById('flags', data.id);
              const id = flag.post().discussion().id();
              const near = flag.post().number();
              const flagUser = flag.post().user();
              const flagDismisser = flag.dismisser();

              return (
                <tr>
                  <td>
                    <a className="DismissedFlagsTable-user" href={this.getUserUrl(flagUser)} config={m.route}>
                      {avatar(flagUser, { loading: 'lazy' })} {username(flagUser)}
                    </a>
                  </td>
                  <td>
                    <a href={app.route('discussion.near', { id, near })}>
                      {flag.post().discussion().title()}
                    </a>
                  </td>
                  <td>{humanTime(flag.createdAt())}</td>
                  <td>{humanTime(flag.dismissedAt())}</td>
                  <td>
                    <a className="DismissedFlagsTable-user" href={this.getUserUrl(flagDismisser)} config={m.route}>
                      {avatar(flagDismisser, { loading: 'lazy' })} {username(flagDismisser)}
                    </a>
                  </td>
                  <td className="DismissedFlagsPage-results-actions">
                    <Button className="Button" onclick={() => app.modal.show(new DismissedFlagsModal({ flag }))}>
                      <i className="fas fa-info-circle"></i>
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>


    );
  }

  getUserUrl(user) {
    return app.forum.attribute('baseUrl') + "\/u\/" + username(user);
  }
}
