import Page from 'flarum/components/Page';
import DismissedFlagsTable from './DismissedFlagsTable';

export default class DismissedFlagsPage extends Page {
  view() {
    return (
      <div className="DismissedFlagsPage">
        <div className="DismissedFlagsPage-header">
          <div className="container">
            <h1>{app.translator.trans('flarum-flags.admin.dismissed.title')}</h1>
            <p>{app.translator.trans('flarum-flags.admin.dismissed.description')}</p>
          </div>
        </div>
        <DismissedFlagsTable />
      </div>
    );
  }
}