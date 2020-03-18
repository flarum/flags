import Modal from 'flarum/components/Modal';
import ItemList from 'flarum/utils/ItemList';

/**
 * Dismissed Flags Modal
 */
export default class DismissedFlagsModal extends Modal {
  init() {
    super.init();
  }

  className() {
    return 'DismissedFlagsModal';
  }

  title() {
    return app.translator.trans('flarum-flags.admin.dismissed.title');
  }


  fields() {
    const items = new ItemList();

    const { flag } = this.props;

    if (flag.reason()) {
      items.add(
        'reason',
        <div>
          <h3>{app.translator.trans('flarum-flags.admin.dismissed.fields.reason')}</h3>
          <p>{flag.reason()}</p>
        </div>
      );
    }

    if (flag.reasonDetail()) {
      items.add(
        'reason-detail',
        <div>
          <h3>{app.translator.trans('flarum-flags.admin.dismissed.fields.reason_detail')}</h3>
          <p>{flag.reasonDetail()}</p>
        </div>
      );
    }

    return items;
  }

  content() {
    const { flag } = this.props;

    return (
      <div className="Modal-body">{this.fields().toArray()}</div>
    );
  }
}
