export default class FlagListState {
  constructor(app) {
    this.app = app;

    /**
     * Whether or not the notifications are loading.
     *
     * @type {Boolean}
     */
    this.loading = false;

    this.cache = [];
  }

  /**
   * Load flags into the application's cache if they haven't already
   * been loaded.
   */
  load() {
    if (this.cache.length && !app.session.user.attribute('newFlagCount')) {
      return;
    }

    this.loading = true;
    m.redraw();

    app.store.find('flags')
      .then(flags => {
        app.session.user.pushAttributes({ newFlagCount: 0 });
        this.cache = flags.sort((a, b) => b.createdAt() - a.createdAt());
      })
      .catch(() => { })
      .then(() => {
        this.loading = false;
        m.redraw();
      });
  }
}
