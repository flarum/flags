System.register('flarum/flags/addFlagControl', ['flarum/extend', 'flarum/app', 'flarum/utils/PostControls', 'flarum/components/Button', 'flarum/flags/components/FlagPostModal'], function (_export) {
  'use strict';

  var extend, app, PostControls, Button, FlagPostModal;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp['default'];
    }, function (_flarumUtilsPostControls) {
      PostControls = _flarumUtilsPostControls['default'];
    }, function (_flarumComponentsButton) {
      Button = _flarumComponentsButton['default'];
    }, function (_flarumFlagsComponentsFlagPostModal) {
      FlagPostModal = _flarumFlagsComponentsFlagPostModal['default'];
    }],
    execute: function () {
      _export('default', function () {
        extend(PostControls, 'userControls', function (items, post) {
          if (post.isHidden() || post.contentType() !== 'comment' || !post.canFlag() || post.user() === app.session.user) return;

          items.add('flag', m(
            Button,
            { icon: 'flag', onclick: function () {
                return app.modal.show(new FlagPostModal({ post: post }));
              } },
            'Flag'
          ));
        });
      });
    }
  };
});;System.register('flarum/flags/addFlagsDropdown', ['flarum/extend', 'flarum/app', 'flarum/components/HeaderSecondary', 'flarum/flags/components/FlagsDropdown'], function (_export) {
  'use strict';

  var extend, app, HeaderSecondary, FlagsDropdown;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp['default'];
    }, function (_flarumComponentsHeaderSecondary) {
      HeaderSecondary = _flarumComponentsHeaderSecondary['default'];
    }, function (_flarumFlagsComponentsFlagsDropdown) {
      FlagsDropdown = _flarumFlagsComponentsFlagsDropdown['default'];
    }],
    execute: function () {
      _export('default', function () {
        extend(HeaderSecondary.prototype, 'items', function (items) {
          if (app.forum.attribute('canViewFlags')) {
            items.add('flags', m(FlagsDropdown, null), 15);
          }
        });
      });
    }
  };
});;System.register('flarum/flags/addFlagsToPosts', ['flarum/extend', 'flarum/app', 'flarum/components/CommentPost', 'flarum/components/Button', 'flarum/helpers/punctuate', 'flarum/helpers/username', 'flarum/utils/ItemList', 'flarum/utils/PostControls'], function (_export) {
  'use strict';

  var extend, app, CommentPost, Button, punctuate, username, ItemList, PostControls;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp['default'];
    }, function (_flarumComponentsCommentPost) {
      CommentPost = _flarumComponentsCommentPost['default'];
    }, function (_flarumComponentsButton) {
      Button = _flarumComponentsButton['default'];
    }, function (_flarumHelpersPunctuate) {
      punctuate = _flarumHelpersPunctuate['default'];
    }, function (_flarumHelpersUsername) {
      username = _flarumHelpersUsername['default'];
    }, function (_flarumUtilsItemList) {
      ItemList = _flarumUtilsItemList['default'];
    }, function (_flarumUtilsPostControls) {
      PostControls = _flarumUtilsPostControls['default'];
    }],
    execute: function () {
      _export('default', function () {
        extend(CommentPost.prototype, 'attrs', function (attrs) {
          if (this.props.post.flags().length) {
            attrs.className += ' Post--flagged';
          }
        });

        CommentPost.prototype.dismissFlag = function (data) {
          var post = this.props.post;

          delete post.data.relationships.flags;

          this.subtree.invalidate();

          if (app.cache.flags) {
            app.cache.flags.some(function (flag, i) {
              if (flag.post() === post) {
                app.cache.flags.splice(i, 1);

                if (app.cache.flagIndex === post) {
                  var next = app.cache.flags[i];

                  if (!next) next = app.cache.flags[0];

                  if (next) {
                    var nextPost = next.post();
                    app.cache.flagIndex = nextPost;
                    m.route(app.route.post(nextPost));
                  }
                }

                return true;
              }
            });
          }

          return app.request({
            url: app.forum.attribute('apiUrl') + post.apiEndpoint() + '/flags',
            method: 'DELETE',
            data: data
          });
        };

        CommentPost.prototype.flagActionItems = function () {
          var _this = this;

          var items = new ItemList();

          var controls = PostControls.destructiveControls(this.props.post);

          Object.keys(controls).forEach(function (k) {
            var props = controls[k].content.props;

            props.className = 'Button';

            extend(props, 'onclick', function () {
              return _this.dismissFlag();
            });
          });

          items.merge(controls);

          items.add('dismiss', m(Button, { className: 'Button Button--icon Button--link', icon: 'times', onclick: this.dismissFlag.bind(this), title: 'Dismiss Flag' }), -100);

          return items;
        };

        extend(CommentPost.prototype, 'content', function (vdom) {
          var _this2 = this;

          var post = this.props.post;
          var flags = post.flags();

          if (!flags.length) return;

          if (post.isHidden()) this.revealContent = true;

          vdom.unshift(m(
            'div',
            { className: 'Post-flagged' },
            m(
              'div',
              { className: 'Post-flagged-flags' },
              flags.map(function (flag) {
                return m(
                  'div',
                  { className: 'Post-flagged-flag' },
                  _this2.flagReason(flag)
                );
              })
            ),
            m(
              'div',
              { className: 'Post-flagged-actions' },
              this.flagActionItems().toArray()
            )
          ));
        });

        CommentPost.prototype.flagReason = function (flag) {
          if (flag.type() === 'user') {
            var user = flag.user();
            var reason = flag.reason();
            var detail = flag.reasonDetail();

            return [app.trans(reason ? 'flarum-flags.forum.flagged_by_with_reason' : 'flarum-flags.forum.flagged_by', { user: user, reason: reason }), detail ? m(
              'span',
              { className: 'Post-flagged-detail' },
              detail
            ) : ''];
          }
        };
      });
    }
  };
});;System.register('flarum/flags/main', ['flarum/app', 'flarum/Model', 'flarum/flags/models/Flag', 'flarum/flags/components/FlagsPage', 'flarum/flags/addFlagControl', 'flarum/flags/addFlagsDropdown', 'flarum/flags/addFlagsToPosts'], function (_export) {
  'use strict';

  var app, Model, Flag, FlagsPage, addFlagControl, addFlagsDropdown, addFlagsToPosts;
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp['default'];
    }, function (_flarumModel) {
      Model = _flarumModel['default'];
    }, function (_flarumFlagsModelsFlag) {
      Flag = _flarumFlagsModelsFlag['default'];
    }, function (_flarumFlagsComponentsFlagsPage) {
      FlagsPage = _flarumFlagsComponentsFlagsPage['default'];
    }, function (_flarumFlagsAddFlagControl) {
      addFlagControl = _flarumFlagsAddFlagControl['default'];
    }, function (_flarumFlagsAddFlagsDropdown) {
      addFlagsDropdown = _flarumFlagsAddFlagsDropdown['default'];
    }, function (_flarumFlagsAddFlagsToPosts) {
      addFlagsToPosts = _flarumFlagsAddFlagsToPosts['default'];
    }],
    execute: function () {

      app.initializers.add('flarum-flags', function () {
        app.store.models.posts.prototype.flags = Model.hasMany('flags');
        app.store.models.posts.prototype.canFlag = Model.attribute('canFlag');

        app.store.models.flags = Flag;

        app.routes.flags = { path: '/flags', component: m(FlagsPage, null) };

        addFlagControl();
        addFlagsDropdown();
        addFlagsToPosts();
      });
    }
  };
});;System.register('flarum/flags/components/FlagList', ['flarum/Component', 'flarum/components/LoadingIndicator', 'flarum/helpers/avatar', 'flarum/helpers/username', 'flarum/helpers/icon', 'flarum/helpers/humanTime'], function (_export) {
  'use strict';

  var Component, LoadingIndicator, avatar, username, icon, humanTime, FlagList;
  return {
    setters: [function (_flarumComponent) {
      Component = _flarumComponent['default'];
    }, function (_flarumComponentsLoadingIndicator) {
      LoadingIndicator = _flarumComponentsLoadingIndicator['default'];
    }, function (_flarumHelpersAvatar) {
      avatar = _flarumHelpersAvatar['default'];
    }, function (_flarumHelpersUsername) {
      username = _flarumHelpersUsername['default'];
    }, function (_flarumHelpersIcon) {
      icon = _flarumHelpersIcon['default'];
    }, function (_flarumHelpersHumanTime) {
      humanTime = _flarumHelpersHumanTime['default'];
    }],
    execute: function () {
      FlagList = (function (_Component) {
        babelHelpers.inherits(FlagList, _Component);

        function FlagList() {
          babelHelpers.classCallCheck(this, FlagList);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          babelHelpers.get(Object.getPrototypeOf(FlagList.prototype), 'constructor', this).apply(this, args);

          /**
           * Whether or not the notifications are loading.
           *
           * @type {Boolean}
           */
          this.loading = false;
        }

        babelHelpers.createClass(FlagList, [{
          key: 'view',
          value: function view() {
            var flags = app.cache.flags || [];

            return m(
              'div',
              { className: 'NotificationList FlagList' },
              m(
                'div',
                { className: 'NotificationList-header' },
                m(
                  'h4',
                  { className: 'App-titleControl App-titleControl--text' },
                  'Flagged Posts'
                )
              ),
              m(
                'div',
                { className: 'NotificationList-content' },
                m(
                  'ul',
                  { className: 'NotificationGroup-content' },
                  flags.length ? flags.map(function (flag) {
                    var post = flag.post();

                    return m(
                      'li',
                      null,
                      m(
                        'a',
                        { href: app.route.post(post), className: 'Notification Flag', config: function (element, isInitialized) {
                            m.route.apply(this, arguments);

                            if (!isInitialized) $(element).on('click', function () {
                              return app.cache.flagIndex = post;
                            });
                          } },
                        avatar(post.user()),
                        icon('flag', { className: 'Notification-icon' }),
                        m(
                          'span',
                          { className: 'Notification-content' },
                          username(post.user()),
                          ' in ',
                          m(
                            'em',
                            null,
                            post.discussion().title()
                          )
                        ),
                        humanTime(flag.time()),
                        m(
                          'div',
                          { className: 'Notification-excerpt' },
                          post.contentPlain()
                        )
                      )
                    );
                  }) : !this.loading ? m(
                    'div',
                    { className: 'NotificationList-empty' },
                    app.trans('flarum-flags.forum.no_flags')
                  ) : LoadingIndicator.component({ className: 'LoadingIndicator--block' })
                )
              )
            );
          }

          /**
           * Load flags into the application's cache if they haven't already
           * been loaded.
           */
        }, {
          key: 'load',
          value: function load() {
            var _this = this;

            if (app.cache.flags && !app.forum.attribute('unreadFlagsCount')) {
              return;
            }

            this.loading = true;
            m.redraw();

            app.store.find('flags').then(function (flags) {
              app.forum.pushAttributes({ unreadFlagsCount: 0 });
              app.cache.flags = flags.sort(function (a, b) {
                return b.time() - a.time();
              });

              _this.loading = false;
              m.redraw();
            });
          }
        }]);
        return FlagList;
      })(Component);

      _export('default', FlagList);
    }
  };
});;System.register('flarum/flags/components/FlagPostModal', ['flarum/components/Modal', 'flarum/components/Button'], function (_export) {
  'use strict';

  var Modal, Button, FlagPostModal;
  return {
    setters: [function (_flarumComponentsModal) {
      Modal = _flarumComponentsModal['default'];
    }, function (_flarumComponentsButton) {
      Button = _flarumComponentsButton['default'];
    }],
    execute: function () {
      FlagPostModal = (function (_Modal) {
        babelHelpers.inherits(FlagPostModal, _Modal);

        function FlagPostModal() {
          babelHelpers.classCallCheck(this, FlagPostModal);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          babelHelpers.get(Object.getPrototypeOf(FlagPostModal.prototype), 'constructor', this).apply(this, args);

          this.reason = m.prop('');
          this.reasonDetail = m.prop('');
        }

        babelHelpers.createClass(FlagPostModal, [{
          key: 'className',
          value: function className() {
            return 'FlagPostModal Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return 'Flag Post';
          }
        }, {
          key: 'content',
          value: function content() {
            return m(
              'div',
              { className: 'Modal-body' },
              m(
                'div',
                { className: 'Form' },
                m(
                  'div',
                  { className: 'Form-group' },
                  m(
                    'label',
                    null,
                    'Choose a Reason'
                  ),
                  m(
                    'div',
                    null,
                    m(
                      'label',
                      { className: 'checkbox' },
                      m('input', { type: 'radio', name: 'reason', checked: this.reason() === 'off_topic', value: 'off_topic', onclick: m.withAttr('value', this.reason) }),
                      'Off-topic'
                    ),
                    m(
                      'label',
                      { className: 'checkbox' },
                      m('input', { type: 'radio', name: 'reason', checked: this.reason() === 'inappropriate', value: 'inappropriate', onclick: m.withAttr('value', this.reason) }),
                      'Inappropriate'
                    ),
                    m(
                      'label',
                      { className: 'checkbox' },
                      m('input', { type: 'radio', name: 'reason', checked: this.reason() === 'spam', value: 'spam', onclick: m.withAttr('value', this.reason) }),
                      'Spam'
                    ),
                    m(
                      'label',
                      { className: 'checkbox' },
                      m('input', { type: 'radio', name: 'reason', checked: this.reason() === 'other', value: 'other', onclick: m.withAttr('value', this.reason) }),
                      'Other',
                      this.reason() === 'other' ? m('textarea', { className: 'FormControl', value: this.reasonDetail(), oninput: m.withAttr('value', this.reasonDetail) }) : ''
                    )
                  )
                ),
                m(
                  'div',
                  { className: 'Form-group' },
                  m(
                    Button,
                    {
                      className: 'Button Button--primary',
                      type: 'submit',
                      loading: this.loading,
                      disabled: !this.reason() },
                    'Flag Post'
                  )
                )
              )
            );
          }
        }, {
          key: 'onsubmit',
          value: function onsubmit(e) {
            var _this = this;

            e.preventDefault();

            this.loading = true;

            app.store.createRecord('flags').save({
              reason: this.reason() === 'other' ? null : this.reason(),
              reasonDetail: this.reasonDetail(),
              relationships: {
                user: app.session.user,
                post: this.props.post
              }
            }).then(function () {
              return _this.hide();
            }, function () {
              _this.loading = false;
              m.redraw();
            });
          }
        }]);
        return FlagPostModal;
      })(Modal);

      _export('default', FlagPostModal);
    }
  };
});;System.register('flarum/flags/components/FlagsDropdown', ['flarum/components/NotificationsDropdown', 'flarum/flags/components/FlagList'], function (_export) {
  'use strict';

  var NotificationsDropdown, FlagList, FlagsDropdown;
  return {
    setters: [function (_flarumComponentsNotificationsDropdown) {
      NotificationsDropdown = _flarumComponentsNotificationsDropdown['default'];
    }, function (_flarumFlagsComponentsFlagList) {
      FlagList = _flarumFlagsComponentsFlagList['default'];
    }],
    execute: function () {
      FlagsDropdown = (function (_NotificationsDropdown) {
        babelHelpers.inherits(FlagsDropdown, _NotificationsDropdown);
        babelHelpers.createClass(FlagsDropdown, null, [{
          key: 'initProps',
          value: function initProps(props) {
            props.label = props.label || 'Flagged Posts';
            props.icon = props.icon || 'flag';

            babelHelpers.get(Object.getPrototypeOf(FlagsDropdown), 'initProps', this).call(this, props);
          }
        }]);

        function FlagsDropdown() {
          babelHelpers.classCallCheck(this, FlagsDropdown);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          babelHelpers.get(Object.getPrototypeOf(FlagsDropdown.prototype), 'constructor', this).apply(this, args);

          this.list = new FlagList();
        }

        babelHelpers.createClass(FlagsDropdown, [{
          key: 'goToRoute',
          value: function goToRoute() {
            m.route(app.route('flags'));
          }
        }, {
          key: 'getUnreadCount',
          value: function getUnreadCount() {
            return app.forum.attribute('unreadFlagsCount');
          }
        }, {
          key: 'getNewCount',
          value: function getNewCount() {
            return app.forum.attribute('newFlagsCount');
          }
        }]);
        return FlagsDropdown;
      })(NotificationsDropdown);

      _export('default', FlagsDropdown);
    }
  };
});;System.register('flarum/flags/components/FlagsPage', ['flarum/components/Page', 'flarum/flags/components/FlagList'], function (_export) {

  /**
   * The `FlagsPage` component shows the flags list. It is only
   * used on mobile devices where the flags dropdown is within the drawer.
   */
  'use strict';

  var Page, FlagList, FlagsPage;
  return {
    setters: [function (_flarumComponentsPage) {
      Page = _flarumComponentsPage['default'];
    }, function (_flarumFlagsComponentsFlagList) {
      FlagList = _flarumFlagsComponentsFlagList['default'];
    }],
    execute: function () {
      FlagsPage = (function (_Page) {
        babelHelpers.inherits(FlagsPage, _Page);

        function FlagsPage() {
          babelHelpers.classCallCheck(this, FlagsPage);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          babelHelpers.get(Object.getPrototypeOf(FlagsPage.prototype), 'constructor', this).apply(this, args);

          app.history.push('flags');

          this.list = new FlagList();
          this.list.load();

          this.bodyClass = 'App--flags';
        }

        babelHelpers.createClass(FlagsPage, [{
          key: 'view',
          value: function view() {
            return m(
              'div',
              { className: 'FlagsPage' },
              this.list.render()
            );
          }
        }]);
        return FlagsPage;
      })(Page);

      _export('default', FlagsPage);
    }
  };
});;System.register('flarum/flags/models/Flag', ['flarum/Model', 'flarum/utils/mixin'], function (_export) {
  'use strict';

  var Model, mixin, Flag;
  return {
    setters: [function (_flarumModel) {
      Model = _flarumModel['default'];
    }, function (_flarumUtilsMixin) {
      mixin = _flarumUtilsMixin['default'];
    }],
    execute: function () {
      Flag = (function (_Model) {
        babelHelpers.inherits(Flag, _Model);

        function Flag() {
          babelHelpers.classCallCheck(this, Flag);
          babelHelpers.get(Object.getPrototypeOf(Flag.prototype), 'constructor', this).apply(this, arguments);
        }

        return Flag;
      })(Model);

      babelHelpers._extends(Flag.prototype, {
        type: Model.attribute('type'),
        reason: Model.attribute('reason'),
        reasonDetail: Model.attribute('reasonDetail'),
        time: Model.attribute('time', Model.transformDate),

        post: Model.hasOne('post'),
        user: Model.hasOne('user')
      });

      _export('default', Flag);
    }
  };
});