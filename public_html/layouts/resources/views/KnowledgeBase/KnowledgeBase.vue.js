!(function () {
	'use strict';
	function t(t, e, i, n, o, a, r, s, c, l) {
		'boolean' != typeof r && ((c = s), (s = r), (r = !1));
		var d,
			u = 'function' == typeof i ? i.options : i;
		if (
			(t &&
				t.render &&
				((u.render = t.render), (u.staticRenderFns = t.staticRenderFns), (u._compiled = !0), o && (u.functional = !0)),
			n && (u._scopeId = n),
			a
				? ((d = function (t) {
						(t =
							t ||
							(this.$vnode && this.$vnode.ssrContext) ||
							(this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
							'undefined' == typeof __VUE_SSR_CONTEXT__ ||
							(t = __VUE_SSR_CONTEXT__),
							e && e.call(this, c(t)),
							t && t._registeredComponents && t._registeredComponents.add(a);
				  }),
				  (u._ssrRegister = d))
				: e &&
				  (d = r
						? function (t) {
								e.call(this, l(t, this.$root.$options.shadowRoot));
						  }
						: function (t) {
								e.call(this, s(t));
						  }),
			d)
		)
			if (u.functional) {
				var h = u.render;
				u.render = function (t, e) {
					return d.call(e), h(t, e);
				};
			} else {
				var m = u.beforeCreate;
				u.beforeCreate = m ? [].concat(m, d) : [d];
			}
		return i;
	}
	var e,
		i = t(
			{
				render: function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i(
						'div',
						{ staticClass: 'flex' },
						[
							/^mdi|^fa/.test(t.icon)
								? i('q-icon', { key: 'icon-lib', attrs: { name: t.icon, size: t.size, dense: '' } })
								: t.icon.includes('/')
								? i(
										'q-avatar',
										{ key: 'icon-img', attrs: { size: t.size } },
										[i('q-img', { attrs: { src: t.icon } })],
										1
								  )
								: i('q-icon', {
										key: 'icon-yf',
										class: [t.icon, 'q-icon'],
										style: { 'font-size': t.size ? t.size : '1.4em' }
								  })
						],
						1
					);
				},
				staticRenderFns: []
			},
			void 0,
			{ name: 'YfIcon', props: { icon: { type: String, required: !0 }, size: { type: String, required: !1 } } },
			'data-v-115259f9',
			!1,
			void 0,
			!1,
			void 0,
			void 0,
			void 0
		),
		n = t(
			{
				render: function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i(
						'div',
						{ staticClass: 'flex' },
						[
							i('q-icon', {
								class: ['cursor-pointer', t.tooltipId],
								style: 'font-size: ' + t.options.iconSize + ';',
								attrs: { name: t.searchInfoShow ? 'mdi-information' : 'mdi-information-outline' },
								on: {
									click: function (e) {
										e.preventDefault(), (t.searchInfoShow = !t.searchInfoShow);
									}
								}
							}),
							t._v(' '),
							i(
								'div',
								[
									i(
										'q-tooltip',
										{
											attrs: {
												'content-style': 'font-size: ' + t.options.tooltipFont,
												'content-class': [t.options.backgroundClass, t.tooltipId, 'all-pointer-events']
											},
											model: {
												value: t.searchInfoShow,
												callback: function (e) {
													t.searchInfoShow = e;
												},
												expression: 'searchInfoShow'
											}
										},
										[t._t('default')],
										2
									)
								],
								1
							)
						],
						1
					);
				},
				staticRenderFns: []
			},
			void 0,
			{
				name: 'IconInfo',
				props: {
					customOptions: {
						type: Object,
						default: function () {
							return {};
						}
					}
				},
				data: function () {
					return {
						searchInfoShow: !1,
						options: { iconSize: 'inherit', tooltipFont: '14px', backgroundClass: 'bg-primary' },
						tooltipId: 'tooltip-id-' + Quasar.utils.uid()
					};
				},
				created: function () {
					var t = this;
					(this.options = Object.assign(this.options, this.customOptions)),
						document.addEventListener('click', function (e) {
							!t.searchInfoShow ||
								e.target.offsetParent.classList.contains(t.tooltipId) ||
								e.target.classList.contains(t.tooltipId) ||
								(t.searchInfoShow = !1);
						});
				}
			},
			'data-v-2f8d7154',
			!1,
			void 0,
			!1,
			void 0,
			void 0,
			void 0
		),
		o = { name: 'ColumnsGrid', props: { columnBlocks: { type: Array, required: !0 } } },
		a = 'undefined' != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
	function r(t) {
		return function (t, i) {
			return (function (t, i) {
				var n = a ? i.media || 'default' : t,
					o = s[n] || (s[n] = { ids: new Set(), styles: [] });
				if (!o.ids.has(t)) {
					o.ids.add(t);
					var r = i.source;
					if (
						(i.map &&
							((r += '\n/*# sourceURL=' + i.map.sources[0] + ' */'),
							(r +=
								'\n/*# sourceMappingURL=data:application/json;base64,' +
								btoa(unescape(encodeURIComponent(JSON.stringify(i.map)))) +
								' */')),
						o.element ||
							((o.element = document.createElement('style')),
							(o.element.type = 'text/css'),
							i.media && o.element.setAttribute('media', i.media),
							void 0 === e && (e = document.head || document.getElementsByTagName('head')[0]),
							e.appendChild(o.element)),
						'styleSheet' in o.element)
					)
						o.styles.push(r), (o.element.styleSheet.cssText = o.styles.filter(Boolean).join('\n'));
					else {
						var c = o.ids.size - 1,
							l = document.createTextNode(r),
							d = o.element.childNodes;
						d[c] && o.element.removeChild(d[c]), d.length ? o.element.insertBefore(l, d[c]) : o.element.appendChild(l);
					}
				}
			})(t, i);
		};
	}
	var s = {};
	var c = t(
			{
				render: function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i(
						'div',
						{
							staticClass: 'columns-grid__container',
							style: {
								'-webkit-column-count': t.columnBlocks.length,
								'-moz-column-count': t.columnBlocks.length,
								'column-count': t.columnBlocks.length
							}
						},
						[
							t._l(t.columnBlocks, function (e) {
								return [
									i(
										'div',
										{ key: e, staticClass: 'columns-grid__block' },
										[t._t('default', null, { relatedBlock: e })],
										2
									)
								];
							})
						],
						2
					);
				},
				staticRenderFns: []
			},
			function (t) {
				t &&
					t('data-v-5e6f0e35_0', {
						source:
							'.columns-grid__container[data-v-5e6f0e35]{-webkit-column-width:27rem;-moz-column-width:27rem;column-width:27rem}.columns-grid__block[data-v-5e6f0e35]{width:100%;padding-bottom:16px;-webkit-column-break-inside:avoid;page-break-inside:avoid;break-inside:avoid-column}',
						map: void 0,
						media: void 0
					});
			},
			o,
			'data-v-5e6f0e35',
			!1,
			void 0,
			!1,
			r,
			void 0,
			void 0
		),
		l = t(
			{
				render: function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i(
						'div',
						[
							i(
								'q-carousel',
								{
									ref: 'carousel',
									class: ['quasar-reset shadow-1 rounded-borders', t.fullscreen ? '' : 'carousel-height'],
									attrs: {
										fullscreen: t.fullscreen,
										'transition-prev': 'scale',
										'transition-next': 'scale',
										swipeable: '',
										animated: '',
										'control-color': 'black',
										navigation: '',
										padding: '',
										arrows: ''
									},
									on: {
										'update:fullscreen': function (e) {
											t.fullscreen = e;
										},
										transition: t.onTransition
									},
									scopedSlots: t._u([
										{
											key: 'control',
											fn: function () {
												return [
													i(
														'q-carousel-control',
														{ attrs: { position: 'bottom-right', offset: [18, 18] } },
														[
															i('q-btn', {
																attrs: {
																	icon: t.fullscreen ? 'mdi-fullscreen-exit' : 'mdi-fullscreen',
																	push: '',
																	round: '',
																	dense: '',
																	color: 'white',
																	'text-color': 'primary'
																},
																on: {
																	click: function (e) {
																		t.fullscreen = !t.fullscreen;
																	}
																}
															})
														],
														1
													)
												];
											},
											proxy: !0
										}
									]),
									model: {
										value: t.slide,
										callback: function (e) {
											t.slide = e;
										},
										expression: 'slide'
									}
								},
								t._l(t.record.content, function (e, n) {
									return i(
										'q-carousel-slide',
										{
											key: n,
											staticClass: 'column no-wrap flex-center',
											attrs: { name: n, fullscreen: t.fullscreen },
											on: {
												'update:fullscreen': function (e) {
													t.fullscreen = e;
												}
											}
										},
										[i('div', { staticClass: 'full-height', domProps: { innerHTML: t._s(e) } })]
									);
								}),
								1
							)
						],
						1
					);
				},
				staticRenderFns: []
			},
			function (t) {
				t &&
					t('data-v-27ed671c_0', {
						source: '.carousel-height[data-v-27ed671c]{height:max-content;min-height:calc(100vh - 31.14px)}',
						map: void 0,
						media: void 0
					});
			},
			{
				name: 'Carousel',
				data: function () {
					return { slide: 0, height: '90vh', report: 0, fullscreen: !1 };
				},
				props: { record: { type: Object, required: !0 } },
				watch: {
					fullscreen: function (t) {
						t ? this.$q.fullscreen.request() : this.$q.fullscreen.exit();
					},
					'$q.fullscreen.isActive': function (t) {
						this.fullscreen = t;
					}
				},
				methods: {
					onTransition: function (t) {
						$(this.$refs.carousel.$el)
							.find('img')
							.css('max-width', $(this.$refs.carousel.$el).width() - 17);
					}
				}
			},
			'data-v-27ed671c',
			!1,
			void 0,
			!1,
			r,
			void 0,
			void 0
		),
		d =
			'undefined' != typeof global
				? global
				: 'undefined' != typeof self
				? self
				: 'undefined' != typeof window
				? window
				: {};
	'function' == typeof d.setTimeout && setTimeout, 'function' == typeof d.clearTimeout && clearTimeout;
	function u(t, e) {
		(this.fun = t), (this.array = e);
	}
	u.prototype.run = function () {
		this.fun.apply(null, this.array);
	};
	var h = d.performance || {};
	h.now || h.mozNow || h.msNow || h.oNow || h.webkitNow;
	new Date();
	var m = {};
	/*!
	 * vuex v3.5.1
	 * (c) 2020 Evan You
	 * @license MIT
	 */ var p = ('undefined' != typeof window ? window : void 0 !== d ? d : {}).__VUE_DEVTOOLS_GLOBAL_HOOK__;
	function f(t, e) {
		if ((void 0 === e && (e = []), null === t || 'object' != typeof t)) return t;
		var i,
			n =
				((i = function (e) {
					return e.original === t;
				}),
				e.filter(i)[0]);
		if (n) return n.copy;
		var o = Array.isArray(t) ? [] : {};
		return (
			e.push({ original: t, copy: o }),
			Object.keys(t).forEach(function (i) {
				o[i] = f(t[i], e);
			}),
			o
		);
	}
	function v(t, e) {
		Object.keys(t).forEach(function (i) {
			return e(t[i], i);
		});
	}
	function g(t) {
		return null !== t && 'object' == typeof t;
	}
	function w(t, e) {
		if (!t) throw new Error('[vuex] ' + e);
	}
	var b = function (t, e) {
			(this.runtime = e), (this._children = Object.create(null)), (this._rawModule = t);
			var i = t.state;
			this.state = ('function' == typeof i ? i() : i) || {};
		},
		_ = { namespaced: { configurable: !0 } };
	(_.namespaced.get = function () {
		return !!this._rawModule.namespaced;
	}),
		(b.prototype.addChild = function (t, e) {
			this._children[t] = e;
		}),
		(b.prototype.removeChild = function (t) {
			delete this._children[t];
		}),
		(b.prototype.getChild = function (t) {
			return this._children[t];
		}),
		(b.prototype.hasChild = function (t) {
			return t in this._children;
		}),
		(b.prototype.update = function (t) {
			(this._rawModule.namespaced = t.namespaced),
				t.actions && (this._rawModule.actions = t.actions),
				t.mutations && (this._rawModule.mutations = t.mutations),
				t.getters && (this._rawModule.getters = t.getters);
		}),
		(b.prototype.forEachChild = function (t) {
			v(this._children, t);
		}),
		(b.prototype.forEachGetter = function (t) {
			this._rawModule.getters && v(this._rawModule.getters, t);
		}),
		(b.prototype.forEachAction = function (t) {
			this._rawModule.actions && v(this._rawModule.actions, t);
		}),
		(b.prototype.forEachMutation = function (t) {
			this._rawModule.mutations && v(this._rawModule.mutations, t);
		}),
		Object.defineProperties(b.prototype, _);
	var y = function (t) {
		this.register([], t, !1);
	};
	(y.prototype.get = function (t) {
		return t.reduce(function (t, e) {
			return t.getChild(e);
		}, this.root);
	}),
		(y.prototype.getNamespace = function (t) {
			var e = this.root;
			return t.reduce(function (t, i) {
				return t + ((e = e.getChild(i)).namespaced ? i + '/' : '');
			}, '');
		}),
		(y.prototype.update = function (t) {
			!(function t(e, i, n) {
				if ((S(e, n), i.update(n), n.modules))
					for (var o in n.modules) {
						if (!i.getChild(o))
							return void console.warn(
								"[vuex] trying to add a new module '" + o + "' on hot reloading, manual reload is needed"
							);
						t(e.concat(o), i.getChild(o), n.modules[o]);
					}
			})([], this.root, t);
		}),
		(y.prototype.register = function (t, e, i) {
			var n = this;
			void 0 === i && (i = !0), S(t, e);
			var o = new b(e, i);
			0 === t.length ? (this.root = o) : this.get(t.slice(0, -1)).addChild(t[t.length - 1], o);
			e.modules &&
				v(e.modules, function (e, o) {
					n.register(t.concat(o), e, i);
				});
		}),
		(y.prototype.unregister = function (t) {
			var e = this.get(t.slice(0, -1)),
				i = t[t.length - 1],
				n = e.getChild(i);
			n
				? n.runtime && e.removeChild(i)
				: console.warn("[vuex] trying to unregister module '" + i + "', which is not registered");
		}),
		(y.prototype.isRegistered = function (t) {
			var e = this.get(t.slice(0, -1)),
				i = t[t.length - 1];
			return e.hasChild(i);
		});
	var x,
		C = {
			assert: function (t) {
				return 'function' == typeof t;
			},
			expected: 'function'
		},
		k = {
			getters: C,
			mutations: C,
			actions: {
				assert: function (t) {
					return 'function' == typeof t || ('object' == typeof t && 'function' == typeof t.handler);
				},
				expected: 'function or object with "handler" function'
			}
		};
	function S(t, e) {
		Object.keys(k).forEach(function (i) {
			if (e[i]) {
				var n = k[i];
				v(e[i], function (e, o) {
					w(
						n.assert(e),
						(function (t, e, i, n, o) {
							var a = e + ' should be ' + o + ' but "' + e + '.' + i + '"';
							t.length > 0 && (a += ' in module "' + t.join('.') + '"');
							return (a += ' is ' + JSON.stringify(n) + '.');
						})(t, i, o, e, n.expected)
					);
				});
			}
		});
	}
	var q = function t(e) {
			var i = this;
			void 0 === e && (e = {}),
				!x && 'undefined' != typeof window && window.Vue && M(window.Vue),
				w(x, 'must call Vue.use(Vuex) before creating a store instance.'),
				w('undefined' != typeof Promise, 'vuex requires a Promise polyfill in this browser.'),
				w(this instanceof t, 'store must be called with the new operator.');
			var n = e.plugins;
			void 0 === n && (n = []);
			var o = e.strict;
			void 0 === o && (o = !1),
				(this._committing = !1),
				(this._actions = Object.create(null)),
				(this._actionSubscribers = []),
				(this._mutations = Object.create(null)),
				(this._wrappedGetters = Object.create(null)),
				(this._modules = new y(e)),
				(this._modulesNamespaceMap = Object.create(null)),
				(this._subscribers = []),
				(this._watcherVM = new x()),
				(this._makeLocalGettersCache = Object.create(null));
			var a = this,
				r = this.dispatch,
				s = this.commit;
			(this.dispatch = function (t, e) {
				return r.call(a, t, e);
			}),
				(this.commit = function (t, e, i) {
					return s.call(a, t, e, i);
				}),
				(this.strict = o);
			var c = this._modules.root.state;
			E(this, c, [], this._modules.root),
				R(this, c),
				n.forEach(function (t) {
					return t(i);
				}),
				(void 0 !== e.devtools ? e.devtools : x.config.devtools) &&
					(function (t) {
						p &&
							((t._devtoolHook = p),
							p.emit('vuex:init', t),
							p.on('vuex:travel-to-state', function (e) {
								t.replaceState(e);
							}),
							t.subscribe(
								function (t, e) {
									p.emit('vuex:mutation', t, e);
								},
								{ prepend: !0 }
							),
							t.subscribeAction(
								function (t, e) {
									p.emit('vuex:action', t, e);
								},
								{ prepend: !0 }
							));
					})(this);
		},
		z = { state: { configurable: !0 } };
	function A(t, e, i) {
		return (
			e.indexOf(t) < 0 && (i && i.prepend ? e.unshift(t) : e.push(t)),
			function () {
				var i = e.indexOf(t);
				i > -1 && e.splice(i, 1);
			}
		);
	}
	function D(t, e) {
		(t._actions = Object.create(null)),
			(t._mutations = Object.create(null)),
			(t._wrappedGetters = Object.create(null)),
			(t._modulesNamespaceMap = Object.create(null));
		var i = t.state;
		E(t, i, [], t._modules.root, !0), R(t, i, e);
	}
	function R(t, e, i) {
		var n = t._vm;
		(t.getters = {}), (t._makeLocalGettersCache = Object.create(null));
		var o = t._wrappedGetters,
			a = {};
		v(o, function (e, i) {
			(a[i] = (function (t, e) {
				return function () {
					return t(e);
				};
			})(e, t)),
				Object.defineProperty(t.getters, i, {
					get: function () {
						return t._vm[i];
					},
					enumerable: !0
				});
		});
		var r = x.config.silent;
		(x.config.silent = !0),
			(t._vm = new x({ data: { $$state: e }, computed: a })),
			(x.config.silent = r),
			t.strict &&
				(function (t) {
					t._vm.$watch(
						function () {
							return this._data.$$state;
						},
						function () {
							w(t._committing, 'do not mutate vuex store state outside mutation handlers.');
						},
						{ deep: !0, sync: !0 }
					);
				})(t),
			n &&
				(i &&
					t._withCommit(function () {
						n._data.$$state = null;
					}),
				x.nextTick(function () {
					return n.$destroy();
				}));
	}
	function E(t, e, i, n, o) {
		var a = !i.length,
			r = t._modules.getNamespace(i);
		if (
			(n.namespaced &&
				(t._modulesNamespaceMap[r] &&
					'production' !== m.NODE_ENV &&
					console.error('[vuex] duplicate namespace ' + r + ' for the namespaced module ' + i.join('/')),
				(t._modulesNamespaceMap[r] = n)),
			!a && !o)
		) {
			var s = B(e, i.slice(0, -1)),
				c = i[i.length - 1];
			t._withCommit(function () {
				c in s &&
					console.warn(
						'[vuex] state field "' + c + '" was overridden by a module with the same name at "' + i.join('.') + '"'
					),
					x.set(s, c, n.state);
			});
		}
		var l = (n.context = (function (t, e, i) {
			var n = '' === e,
				o = {
					dispatch: n
						? t.dispatch
						: function (i, n, o) {
								var a = L(i, n, o),
									r = a.payload,
									s = a.options,
									c = a.type;
								if ((s && s.root) || ((c = e + c), t._actions[c])) return t.dispatch(c, r);
								console.error('[vuex] unknown local action type: ' + a.type + ', global type: ' + c);
						  },
					commit: n
						? t.commit
						: function (i, n, o) {
								var a = L(i, n, o),
									r = a.payload,
									s = a.options,
									c = a.type;
								(s && s.root) || ((c = e + c), t._mutations[c])
									? t.commit(c, r, s)
									: console.error('[vuex] unknown local mutation type: ' + a.type + ', global type: ' + c);
						  }
				};
			return (
				Object.defineProperties(o, {
					getters: {
						get: n
							? function () {
									return t.getters;
							  }
							: function () {
									return (function (t, e) {
										if (!t._makeLocalGettersCache[e]) {
											var i = {},
												n = e.length;
											Object.keys(t.getters).forEach(function (o) {
												if (o.slice(0, n) === e) {
													var a = o.slice(n);
													Object.defineProperty(i, a, {
														get: function () {
															return t.getters[o];
														},
														enumerable: !0
													});
												}
											}),
												(t._makeLocalGettersCache[e] = i);
										}
										return t._makeLocalGettersCache[e];
									})(t, e);
							  }
					},
					state: {
						get: function () {
							return B(t.state, i);
						}
					}
				}),
				o
			);
		})(t, r, i));
		n.forEachMutation(function (e, i) {
			!(function (t, e, i, n) {
				(t._mutations[e] || (t._mutations[e] = [])).push(function (e) {
					i.call(t, n.state, e);
				});
			})(t, r + i, e, l);
		}),
			n.forEachAction(function (e, i) {
				var n = e.root ? i : r + i,
					o = e.handler || e;
				!(function (t, e, i, n) {
					(t._actions[e] || (t._actions[e] = [])).push(function (e) {
						var o,
							a = i.call(
								t,
								{
									dispatch: n.dispatch,
									commit: n.commit,
									getters: n.getters,
									state: n.state,
									rootGetters: t.getters,
									rootState: t.state
								},
								e
							);
						return (
							((o = a) && 'function' == typeof o.then) || (a = Promise.resolve(a)),
							t._devtoolHook
								? a.catch(function (e) {
										throw (t._devtoolHook.emit('vuex:error', e), e);
								  })
								: a
						);
					});
				})(t, n, o, l);
			}),
			n.forEachGetter(function (e, i) {
				!(function (t, e, i, n) {
					if (t._wrappedGetters[e]) return void console.error('[vuex] duplicate getter key: ' + e);
					t._wrappedGetters[e] = function (t) {
						return i(n.state, n.getters, t.state, t.getters);
					};
				})(t, r + i, e, l);
			}),
			n.forEachChild(function (n, a) {
				E(t, e, i.concat(a), n, o);
			});
	}
	function B(t, e) {
		return e.reduce(function (t, e) {
			return t[e];
		}, t);
	}
	function L(t, e, i) {
		return (
			g(t) && t.type && ((i = e), (e = t), (t = t.type)),
			w('string' == typeof t, 'expects string as the type, but found ' + typeof t + '.'),
			{ type: t, payload: e, options: i }
		);
	}
	function M(t) {
		x && t === x
			? console.error('[vuex] already installed. Vue.use(Vuex) should be called only once.')
			: (function (t) {
					if (Number(t.version.split('.')[0]) >= 2) t.mixin({ beforeCreate: i });
					else {
						var e = t.prototype._init;
						t.prototype._init = function (t) {
							void 0 === t && (t = {}), (t.init = t.init ? [i].concat(t.init) : i), e.call(this, t);
						};
					}
					function i() {
						var t = this.$options;
						t.store
							? (this.$store = 'function' == typeof t.store ? t.store() : t.store)
							: t.parent && t.parent.$store && (this.$store = t.parent.$store);
					}
			  })((x = t));
	}
	(z.state.get = function () {
		return this._vm._data.$$state;
	}),
		(z.state.set = function (t) {
			w(!1, 'use store.replaceState() to explicit replace store state.');
		}),
		(q.prototype.commit = function (t, e, i) {
			var n = this,
				o = L(t, e, i),
				a = o.type,
				r = o.payload,
				s = o.options,
				c = { type: a, payload: r },
				l = this._mutations[a];
			l
				? (this._withCommit(function () {
						l.forEach(function (t) {
							t(r);
						});
				  }),
				  this._subscribers.slice().forEach(function (t) {
						return t(c, n.state);
				  }),
				  s &&
						s.silent &&
						console.warn(
							'[vuex] mutation type: ' +
								a +
								'. Silent option has been removed. Use the filter functionality in the vue-devtools'
						))
				: console.error('[vuex] unknown mutation type: ' + a);
		}),
		(q.prototype.dispatch = function (t, e) {
			var i = this,
				n = L(t, e),
				o = n.type,
				a = n.payload,
				r = { type: o, payload: a },
				s = this._actions[o];
			if (s) {
				try {
					this._actionSubscribers
						.slice()
						.filter(function (t) {
							return t.before;
						})
						.forEach(function (t) {
							return t.before(r, i.state);
						});
				} catch (t) {
					console.warn('[vuex] error in before action subscribers: '), console.error(t);
				}
				var c =
					s.length > 1
						? Promise.all(
								s.map(function (t) {
									return t(a);
								})
						  )
						: s[0](a);
				return new Promise(function (t, e) {
					c.then(
						function (e) {
							try {
								i._actionSubscribers
									.filter(function (t) {
										return t.after;
									})
									.forEach(function (t) {
										return t.after(r, i.state);
									});
							} catch (t) {
								console.warn('[vuex] error in after action subscribers: '), console.error(t);
							}
							t(e);
						},
						function (t) {
							try {
								i._actionSubscribers
									.filter(function (t) {
										return t.error;
									})
									.forEach(function (e) {
										return e.error(r, i.state, t);
									});
							} catch (t) {
								console.warn('[vuex] error in error action subscribers: '), console.error(t);
							}
							e(t);
						}
					);
				});
			}
			console.error('[vuex] unknown action type: ' + o);
		}),
		(q.prototype.subscribe = function (t, e) {
			return A(t, this._subscribers, e);
		}),
		(q.prototype.subscribeAction = function (t, e) {
			return A('function' == typeof t ? { before: t } : t, this._actionSubscribers, e);
		}),
		(q.prototype.watch = function (t, e, i) {
			var n = this;
			return (
				w('function' == typeof t, 'store.watch only accepts a function.'),
				this._watcherVM.$watch(
					function () {
						return t(n.state, n.getters);
					},
					e,
					i
				)
			);
		}),
		(q.prototype.replaceState = function (t) {
			var e = this;
			this._withCommit(function () {
				e._vm._data.$$state = t;
			});
		}),
		(q.prototype.registerModule = function (t, e, i) {
			void 0 === i && (i = {}),
				'string' == typeof t && (t = [t]),
				w(Array.isArray(t), 'module path must be a string or an Array.'),
				w(t.length > 0, 'cannot register the root module by using registerModule.'),
				this._modules.register(t, e),
				E(this, this.state, t, this._modules.get(t), i.preserveState),
				R(this, this.state);
		}),
		(q.prototype.unregisterModule = function (t) {
			var e = this;
			'string' == typeof t && (t = [t]),
				w(Array.isArray(t), 'module path must be a string or an Array.'),
				this._modules.unregister(t),
				this._withCommit(function () {
					var i = B(e.state, t.slice(0, -1));
					x.delete(i, t[t.length - 1]);
				}),
				D(this);
		}),
		(q.prototype.hasModule = function (t) {
			return (
				'string' == typeof t && (t = [t]),
				w(Array.isArray(t), 'module path must be a string or an Array.'),
				this._modules.isRegistered(t)
			);
		}),
		(q.prototype.hotUpdate = function (t) {
			this._modules.update(t), D(this, !0);
		}),
		(q.prototype._withCommit = function (t) {
			var e = this._committing;
			(this._committing = !0), t(), (this._committing = e);
		}),
		Object.defineProperties(q.prototype, z);
	var T = K(function (t, e) {
			var i = {};
			return (
				H(e) || console.error('[vuex] mapState: mapper parameter must be either an Array or an Object'),
				P(e).forEach(function (e) {
					var n = e.key,
						o = e.val;
					(i[n] = function () {
						var e = this.$store.state,
							i = this.$store.getters;
						if (t) {
							var n = Y(this.$store, 'mapState', t);
							if (!n) return;
							(e = n.context.state), (i = n.context.getters);
						}
						return 'function' == typeof o ? o.call(this, e, i) : e[o];
					}),
						(i[n].vuex = !0);
				}),
				i
			);
		}),
		O = K(function (t, e) {
			var i = {};
			return (
				H(e) || console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object'),
				P(e).forEach(function (e) {
					var n = e.key,
						o = e.val;
					i[n] = function () {
						for (var e = arguments, i = [], n = arguments.length; n--; ) i[n] = e[n];
						var a = this.$store.commit;
						if (t) {
							var r = Y(this.$store, 'mapMutations', t);
							if (!r) return;
							a = r.context.commit;
						}
						return 'function' == typeof o ? o.apply(this, [a].concat(i)) : a.apply(this.$store, [o].concat(i));
					};
				}),
				i
			);
		}),
		I = K(function (t, e) {
			var i = {};
			return (
				H(e) || console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object'),
				P(e).forEach(function (e) {
					var n = e.key,
						o = e.val;
					(o = t + o),
						(i[n] = function () {
							if (!t || Y(this.$store, 'mapGetters', t)) {
								if (o in this.$store.getters) return this.$store.getters[o];
								console.error('[vuex] unknown getter: ' + o);
							}
						}),
						(i[n].vuex = !0);
				}),
				i
			);
		}),
		N = K(function (t, e) {
			var i = {};
			return (
				H(e) || console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object'),
				P(e).forEach(function (e) {
					var n = e.key,
						o = e.val;
					i[n] = function () {
						for (var e = arguments, i = [], n = arguments.length; n--; ) i[n] = e[n];
						var a = this.$store.dispatch;
						if (t) {
							var r = Y(this.$store, 'mapActions', t);
							if (!r) return;
							a = r.context.dispatch;
						}
						return 'function' == typeof o ? o.apply(this, [a].concat(i)) : a.apply(this.$store, [o].concat(i));
					};
				}),
				i
			);
		}),
		j = function (t) {
			return {
				mapState: T.bind(null, t),
				mapGetters: I.bind(null, t),
				mapMutations: O.bind(null, t),
				mapActions: N.bind(null, t)
			};
		};
	function P(t) {
		return H(t)
			? Array.isArray(t)
				? t.map(function (t) {
						return { key: t, val: t };
				  })
				: Object.keys(t).map(function (e) {
						return { key: e, val: t[e] };
				  })
			: [];
	}
	function H(t) {
		return Array.isArray(t) || g(t);
	}
	function K(t) {
		return function (e, i) {
			return 'string' != typeof e ? ((i = e), (e = '')) : '/' !== e.charAt(e.length - 1) && (e += '/'), t(e, i);
		};
	}
	function Y(t, e, i) {
		var n = t._modulesNamespaceMap[i];
		return n || console.error('[vuex] module namespace not found in ' + e + '(): ' + i), n;
	}
	function G(t, e, i) {
		var n = i ? t.groupCollapsed : t.group;
		try {
			n.call(t, e);
		} catch (i) {
			t.log(e);
		}
	}
	function F(t) {
		try {
			t.groupEnd();
		} catch (e) {
			t.log('—— log end ——');
		}
	}
	function X() {
		var t = new Date();
		return (
			' @ ' +
			J(t.getHours(), 2) +
			':' +
			J(t.getMinutes(), 2) +
			':' +
			J(t.getSeconds(), 2) +
			'.' +
			J(t.getMilliseconds(), 3)
		);
	}
	function J(t, e) {
		return (i = '0'), (n = e - t.toString().length), new Array(n + 1).join(i) + t;
		var i, n;
	}
	var W = {
			Store: q,
			install: M,
			version: '3.5.1',
			mapState: T,
			mapMutations: O,
			mapGetters: I,
			mapActions: N,
			createNamespacedHelpers: j,
			createLogger: function (t) {
				void 0 === t && (t = {});
				var e = t.collapsed;
				void 0 === e && (e = !0);
				var i = t.filter;
				void 0 === i &&
					(i = function (t, e, i) {
						return !0;
					});
				var n = t.transformer;
				void 0 === n &&
					(n = function (t) {
						return t;
					});
				var o = t.mutationTransformer;
				void 0 === o &&
					(o = function (t) {
						return t;
					});
				var a = t.actionFilter;
				void 0 === a &&
					(a = function (t, e) {
						return !0;
					});
				var r = t.actionTransformer;
				void 0 === r &&
					(r = function (t) {
						return t;
					});
				var s = t.logMutations;
				void 0 === s && (s = !0);
				var c = t.logActions;
				void 0 === c && (c = !0);
				var l = t.logger;
				return (
					void 0 === l && (l = console),
					function (t) {
						var d = f(t.state);
						void 0 !== l &&
							(s &&
								t.subscribe(function (t, a) {
									var r = f(a);
									if (i(t, d, r)) {
										var s = X(),
											c = o(t),
											u = 'mutation ' + t.type + s;
										G(l, u, e),
											l.log('%c prev state', 'color: #9E9E9E; font-weight: bold', n(d)),
											l.log('%c mutation', 'color: #03A9F4; font-weight: bold', c),
											l.log('%c next state', 'color: #4CAF50; font-weight: bold', n(r)),
											F(l);
									}
									d = r;
								}),
							c &&
								t.subscribeAction(function (t, i) {
									if (a(t, i)) {
										var n = X(),
											o = r(t),
											s = 'action ' + t.type + n;
										G(l, s, e), l.log('%c action', 'color: #03A9F4; font-weight: bold', o), F(l);
									}
								}));
					}
				);
			}
		},
		V = j('KnowledgeBase'),
		U = V.mapGetters,
		Q = V.mapActions,
		Z = t(
			{
				render: function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i(
						'div',
						{ staticClass: 'KnowledgeBase__ArticlesList' },
						[
							i('q-table', {
								attrs: {
									data: t.data,
									columns: t.columns,
									pagination: t.pagination,
									title: t.title,
									'row-key': 'subject',
									grid: '',
									'hide-header': ''
								},
								on: {
									'update:pagination': function (e) {
										t.pagination = e;
									}
								},
								scopedSlots: t._u([
									{
										key: 'item',
										fn: function (e) {
											return [
												i(
													'q-list',
													{
														staticClass: 'full-width',
														attrs: { padding: '' },
														on: {
															click: function (i) {
																return i.preventDefault(), t.onClickRecord(e.row.id);
															}
														}
													},
													[
														i(
															'q-item',
															{ attrs: { clickable: '' } },
															[
																i(
																	'q-item-section',
																	{ attrs: { avatar: '' } },
																	[i('q-icon', { attrs: { name: 'mdi-text' } })],
																	1
																),
																t._v(' '),
																i(
																	'q-item-section',
																	[
																		i('q-item-label', { staticClass: 'text-primary' }, [
																			i(
																				'a',
																				{
																					staticClass: 'js-popover-tooltip--record',
																					attrs: {
																						href: 'index.php?module=' + t.moduleName + '&view=Detail&record=' + e.row.id
																					}
																				},
																				[t._v('\n                ' + t._s(e.row.subject) + '\n              ')]
																			)
																		]),
																		t._v(' '),
																		i(
																			'q-item-label',
																			{ staticClass: 'flex items-center', attrs: { overline: '' } },
																			[
																				i(
																					'q-breadcrumbs',
																					{ staticClass: 'mr-2 text-grey-8', attrs: { 'active-color': 'grey-8' } },
																					[
																						t._l(t.tree.categories[e.row.category].parentTree, function (e) {
																							return i(
																								'q-breadcrumbs-el',
																								{ key: t.tree.categories[e].label },
																								[
																									t.tree.categories[e].icon
																										? i('YfIcon', {
																												staticClass: 'q-mr-sm',
																												attrs: { size: t.iconSize, icon: t.tree.categories[e].icon }
																										  })
																										: t._e(),
																									t._v(
																										'\n                  ' +
																											t._s(t.tree.categories[e].label) +
																											'\n                '
																									)
																								],
																								1
																							);
																						}),
																						t._v(' '),
																						i('q-tooltip', [
																							t._v(
																								'\n                  ' +
																									t._s(t.translate('JS_KB_CATEGORY')) +
																									'\n                '
																							)
																						])
																					],
																					2
																				),
																				t._v(
																					'\n              | ' +
																						t._s(t.translate('JS_KB_AUTHORED_BY')) +
																						':\n              '
																				),
																				i('span', {
																					staticClass: 'q-ml-sm',
																					domProps: { innerHTML: t._s(e.row.assigned_user_id) }
																				})
																			],
																			1
																		),
																		t._v(' '),
																		i('q-item-label', { attrs: { caption: '' } }, [t._v(t._s(e.row.introduction))])
																	],
																	1
																),
																t._v(' '),
																i(
																	'q-item-section',
																	{ attrs: { side: '', top: '' } },
																	[
																		i('q-item-label', { attrs: { caption: '' } }, [t._v(t._s(e.row.short_time))]),
																		t._v(' '),
																		i('q-tooltip', [
																			t._v('\n              ' + t._s(e.row.full_time) + '\n            ')
																		])
																	],
																	1
																)
															],
															1
														)
													],
													1
												)
											];
										}
									},
									{ key: 'bottom', fn: function (t) {} }
								])
							}),
							t._v(' '),
							i(
								'div',
								{ class: ['flex items-center q-px-lg q-py-sm', t.hasData ? 'hidden' : ''] },
								[
									i('q-icon', { staticClass: 'q-mr-sm', attrs: { name: 'mdi-alert-outline' } }),
									t._v('\n    ' + t._s(t.translate('JS_NO_RESULTS_FOUND')) + '\n  ')
								],
								1
							)
						],
						1
					);
				},
				staticRenderFns: []
			},
			function (t) {
				t &&
					t('data-v-633cce41_0', {
						source: '.KnowledgeBase__ArticlesList .q-table__bottom{display:none!important}',
						map: void 0,
						media: void 0
					});
			},
			{
				name: 'ArticlesList',
				components: { YfIcon: i },
				props: { data: { type: Array, default: [] }, title: { type: String, default: '' } },
				data: function () {
					return {
						pagination: { rowsPerPage: 0 },
						columns: [
							{
								name: 'desc',
								required: !0,
								label: 'Title',
								align: 'left',
								field: function (t) {
									return t.subject;
								},
								format: function (t) {
									return '' + t;
								},
								sortable: !0
							},
							{ name: 'short_time', align: 'center', label: 'Short time', field: 'short_time', sortable: !0 },
							{ name: 'introduction', align: 'center', label: 'Introduction', field: 'introduction', sortable: !0 }
						]
					};
				},
				computed: Object.assign({}, U(['tree', 'iconSize', 'moduleName']), {
					hasData: function () {
						return this.data.length;
					}
				}),
				methods: Object.assign({}, Q(['fetchRecord']), {
					onClickRecord: function (t) {
						var e = this;
						this.fetchRecord(t).then(function () {
							e.$emit('onClickRecord', t);
						});
					}
				})
			},
			void 0,
			!1,
			void 0,
			!1,
			r,
			void 0,
			void 0
		),
		tt = { t: 'top', m: 'marginTop', b: 'bottom' },
		et = { l: 'left', m: 'marginLeft', r: 'right' },
		it = t(
			{
				render: function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i(
						'div',
						[
							t.$q.platform.is.desktop
								? i(
										'vue-drag-resize',
										{
											key: 'desktop',
											ref: 'resize',
											class: [t.maximized ? 'fit position-static' : 'modal-mini', 'overflow-hidden'],
											attrs: {
												preventActiveBehavior: '',
												isResizable: '',
												isActive: t.active,
												isDraggable: !t.maximized,
												dragHandle: '.js-drag',
												sticks: t.sticks,
												x: t.coordinates.left,
												y: t.coordinates.top,
												w: t.coordinates.width,
												h: t.coordinates.height,
												minh: t.minHeight,
												minw: t.minWidth
											},
											on: {
												resizing: t.resize,
												dragging: t.resize,
												activated: t.onActivated,
												dragstop: t.correctCoordinates,
												resizestop: t.correctCoordinates
											}
										},
										[i('div', { staticClass: 'fit' }, [t._t('default')], 2)]
								  )
								: i('div', { key: 'mobile', staticClass: 'fit' }, [t._t('default')], 2)
						],
						1
					);
				},
				staticRenderFns: []
			},
			function (t) {
				t &&
					t('data-v-169f269f_0', {
						source:
							'.modal-mini{max-height:unset!important;max-width:unset!important;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px rgba(0,0,0,.14),0 1px 10px rgba(0,0,0,.12)}.vdr.active{font-weight:unset}.modal-mini .vdr-stick{display:inline-flex}',
						map: void 0,
						media: void 0
					});
			},
			{
				name: 'DragResize',
				mixins: [
					{
						methods: {
							keepElementInWindow: function () {
								this.correctCoordinates(this.coordinates);
							}
						},
						mounted: function () {
							this.keepElementInWindow(this.coordinates), window.addEventListener('resize', this.keepElementInWindow);
						}
					}
				],
				components: {
					VueDragResize: t(
						{
							render: function () {
								var t = this,
									e = t.$createElement,
									i = t._self._c || e;
								return i(
									'div',
									{
										staticClass: 'vdr',
										class:
											(t.active || t.isActive ? 'active' : 'inactive') + ' ' + (t.contentClass ? t.contentClass : ''),
										style: t.style,
										on: {
											mousedown: function (e) {
												return t.bodyDown(e);
											},
											touchstart: function (e) {
												return t.bodyDown(e);
											},
											touchend: function (e) {
												return t.up(e);
											}
										}
									},
									[
										t._t('default'),
										t._v(' '),
										t._l(t.sticks, function (e) {
											return i('div', {
												staticClass: 'vdr-stick',
												class: ['vdr-stick-' + e, t.isResizable ? '' : 'not-resizable'],
												style: t.vdrStick(e),
												on: {
													mousedown: function (i) {
														return i.stopPropagation(), i.preventDefault(), t.stickDown(e, i);
													},
													touchstart: function (i) {
														return i.stopPropagation(), i.preventDefault(), t.stickDown(e, i);
													}
												}
											});
										})
									],
									2
								);
							},
							staticRenderFns: []
						},
						function (t) {
							t &&
								t('data-v-6aa1835c_0', {
									source:
										".vdr{position:absolute;box-sizing:border-box}.vdr.active:before{content:'';width:100%;height:100%;position:absolute;top:0;left:0;box-sizing:border-box;outline:1px dashed #d6d6d6}.vdr-stick{box-sizing:border-box;position:absolute;font-size:1px;background:#fff;border:1px solid #6c6c6c;box-shadow:0 0 2px #bbb}.inactive .vdr-stick{display:none}.vdr-stick-br,.vdr-stick-tl{cursor:nwse-resize}.vdr-stick-bm,.vdr-stick-tm{left:50%;cursor:ns-resize}.vdr-stick-bl,.vdr-stick-tr{cursor:nesw-resize}.vdr-stick-ml,.vdr-stick-mr{top:50%;cursor:ew-resize}.vdr-stick.not-resizable{display:none}",
									map: void 0,
									media: void 0
								});
						},
						{
							name: 'vue-drag-resize',
							props: {
								stickSize: { type: Number, default: 8 },
								parentScaleX: { type: Number, default: 1 },
								parentScaleY: { type: Number, default: 1 },
								isActive: { type: Boolean, default: !1 },
								preventActiveBehavior: { type: Boolean, default: !1 },
								isDraggable: { type: Boolean, default: !0 },
								isResizable: { type: Boolean, default: !0 },
								aspectRatio: { type: Boolean, default: !1 },
								parentLimitation: { type: Boolean, default: !1 },
								snapToGrid: { type: Boolean, default: !1 },
								gridX: {
									type: Number,
									default: 50,
									validator: function (t) {
										return t > 0;
									}
								},
								gridY: {
									type: Number,
									default: 50,
									validator: function (t) {
										return t > 0;
									}
								},
								parentW: {
									type: Number,
									default: 0,
									validator: function (t) {
										return t >= 0;
									}
								},
								parentH: {
									type: Number,
									default: 0,
									validator: function (t) {
										return t >= 0;
									}
								},
								w: {
									type: Number,
									default: 100,
									validator: function (t) {
										return t > 0;
									}
								},
								h: {
									type: Number,
									default: 100,
									validator: function (t) {
										return t > 0;
									}
								},
								minw: {
									type: Number,
									default: 50,
									validator: function (t) {
										return t > 0;
									}
								},
								minh: {
									type: Number,
									default: 50,
									validator: function (t) {
										return t > 0;
									}
								},
								x: {
									type: Number,
									default: 0,
									validator: function (t) {
										return 'number' == typeof t;
									}
								},
								y: {
									type: Number,
									default: 0,
									validator: function (t) {
										return 'number' == typeof t;
									}
								},
								z: {
									type: [String, Number],
									default: 'auto',
									validator: function (t) {
										return 'string' == typeof t ? 'auto' === t : t >= 0;
									}
								},
								dragHandle: { type: String, default: null },
								dragCancel: { type: String, default: null },
								sticks: {
									type: Array,
									default: function () {
										return ['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml'];
									}
								},
								axis: {
									type: String,
									default: 'both',
									validator: function (t) {
										return -1 !== ['x', 'y', 'both', 'none'].indexOf(t);
									}
								},
								contentClass: { type: String, required: !1, default: '' }
							},
							data: function () {
								return {
									active: this.isActive,
									rawWidth: this.w,
									rawHeight: this.h,
									rawLeft: this.x,
									rawTop: this.y,
									rawRight: null,
									rawBottom: null,
									zIndex: this.z,
									aspectFactor: this.w / this.h,
									parentWidth: null,
									parentHeight: null,
									left: this.x,
									top: this.y,
									right: null,
									bottom: null,
									minWidth: this.minw,
									minHeight: this.minh
								};
							},
							created: function () {
								(this.stickDrag = !1),
									(this.bodyDrag = !1),
									(this.stickAxis = null),
									(this.stickStartPos = { mouseX: 0, mouseY: 0, x: 0, y: 0, w: 0, h: 0 }),
									(this.limits = {
										minLeft: null,
										maxLeft: null,
										minRight: null,
										maxRight: null,
										minTop: null,
										maxTop: null,
										minBottom: null,
										maxBottom: null
									}),
									(this.currentStick = []);
							},
							mounted: function () {
								if (
									((this.parentElement = this.$el.parentNode),
									(this.parentWidth = this.parentW ? this.parentW : this.parentElement.clientWidth),
									(this.parentHeight = this.parentH ? this.parentH : this.parentElement.clientHeight),
									(this.rawRight = this.parentWidth - this.rawWidth - this.rawLeft),
									(this.rawBottom = this.parentHeight - this.rawHeight - this.rawTop),
									document.documentElement.addEventListener('mousemove', this.move),
									document.documentElement.addEventListener('mouseup', this.up),
									document.documentElement.addEventListener('mouseleave', this.up),
									document.documentElement.addEventListener('mousedown', this.deselect),
									document.documentElement.addEventListener('touchmove', this.move, !0),
									document.documentElement.addEventListener('touchend', this.up, !0),
									document.documentElement.addEventListener('touchcancel', this.up, !0),
									document.documentElement.addEventListener('touchstart', this.up, !0),
									this.dragHandle)
								) {
									var t = Array.prototype.slice.call(this.$el.querySelectorAll(this.dragHandle));
									for (var e in t) t[e].setAttribute('data-drag-handle', this._uid);
								}
								if (this.dragCancel) {
									var i = Array.prototype.slice.call(this.$el.querySelectorAll(this.dragCancel));
									for (var n in i) i[n].setAttribute('data-drag-cancel', this._uid);
								}
							},
							beforeDestroy: function () {
								document.documentElement.removeEventListener('mousemove', this.move),
									document.documentElement.removeEventListener('mouseup', this.up),
									document.documentElement.removeEventListener('mouseleave', this.up),
									document.documentElement.removeEventListener('mousedown', this.deselect),
									document.documentElement.removeEventListener('touchmove', this.move, !0),
									document.documentElement.removeEventListener('touchend', this.up, !0),
									document.documentElement.removeEventListener('touchcancel', this.up, !0),
									document.documentElement.removeEventListener('touchstart', this.up, !0);
							},
							methods: {
								deselect: function () {
									this.preventActiveBehavior || (this.active = !1);
								},
								move: function (t) {
									(this.stickDrag || this.bodyDrag) &&
										(t.stopPropagation(), this.stickDrag && this.stickMove(t), this.bodyDrag && this.bodyMove(t));
								},
								up: function (t) {
									this.stickDrag && this.stickUp(t), this.bodyDrag && this.bodyUp(t);
								},
								bodyDown: function (t) {
									var e = t.target || t.srcElement;
									this.preventActiveBehavior || (this.active = !0),
										(t.button && 0 !== t.button) ||
											(this.$emit('clicked', t),
											this.active &&
												((this.dragHandle && e.getAttribute('data-drag-handle') !== this._uid.toString()) ||
													(this.dragCancel && e.getAttribute('data-drag-cancel') === this._uid.toString()) ||
													(t.stopPropagation(),
													t.preventDefault(),
													this.isDraggable && (this.bodyDrag = !0),
													(this.stickStartPos.mouseX = void 0 !== t.pageX ? t.pageX : t.touches[0].pageX),
													(this.stickStartPos.mouseY = void 0 !== t.pageY ? t.pageY : t.touches[0].pageY),
													(this.stickStartPos.left = this.left),
													(this.stickStartPos.right = this.right),
													(this.stickStartPos.top = this.top),
													(this.stickStartPos.bottom = this.bottom),
													this.parentLimitation && (this.limits = this.calcDragLimitation()))));
								},
								calcDragLimitation: function () {
									var t = this.parentWidth,
										e = this.parentHeight;
									return {
										minLeft: 0,
										maxLeft: t - this.width,
										minRight: 0,
										maxRight: t - this.width,
										minTop: 0,
										maxTop: e - this.height,
										minBottom: 0,
										maxBottom: e - this.height
									};
								},
								bodyMove: function (t) {
									var e = this.stickStartPos,
										i = this.parentWidth,
										n = this.parentHeight,
										o = this.gridX,
										a = this.gridY,
										r = this.width,
										s = this.height,
										c = void 0 !== t.pageX ? t.pageX : t.touches[0].pageX,
										l = void 0 !== t.pageY ? t.pageY : t.touches[0].pageY,
										d = ('y' !== this.axis && 'none' !== this.axis ? e.mouseX - c : 0) / this.parentScaleX,
										u = ('x' !== this.axis && 'none' !== this.axis ? e.mouseY - l : 0) / this.parentScaleY,
										h = e.top - u,
										m = e.bottom + u,
										p = e.left - d,
										f = e.right + d;
									if (this.snapToGrid) {
										var v = !0,
											g = !0,
											w = h - Math.floor(h / a) * a,
											b = n - m - Math.floor((n - m) / a) * a,
											_ = p - Math.floor(p / o) * o,
											y = i - f - Math.floor((i - f) / o) * o;
										w > a / 2 && (w -= a),
											b > a / 2 && (b -= a),
											_ > o / 2 && (_ -= o),
											y > o / 2 && (y -= o),
											Math.abs(b) < Math.abs(w) && (v = !1),
											Math.abs(y) < Math.abs(_) && (g = !1),
											(m = n - s - (h -= v ? w : b)),
											(f = i - r - (p -= g ? _ : y));
									}
									(this.rawTop = h),
										(this.rawBottom = m),
										(this.rawLeft = p),
										(this.rawRight = f),
										this.$emit('dragging', this.rect);
								},
								bodyUp: function () {
									(this.bodyDrag = !1),
										this.$emit('dragging', this.rect),
										this.$emit('dragstop', this.rect),
										(this.stickStartPos = { mouseX: 0, mouseY: 0, x: 0, y: 0, w: 0, h: 0 }),
										(this.limits = {
											minLeft: null,
											maxLeft: null,
											minRight: null,
											maxRight: null,
											minTop: null,
											maxTop: null,
											minBottom: null,
											maxBottom: null
										});
								},
								stickDown: function (t, e) {
									if (this.isResizable && this.active) {
										switch (
											((this.stickDrag = !0),
											(this.stickStartPos.mouseX = void 0 !== e.pageX ? e.pageX : e.touches[0].pageX),
											(this.stickStartPos.mouseY = void 0 !== e.pageY ? e.pageY : e.touches[0].pageY),
											(this.stickStartPos.left = this.left),
											(this.stickStartPos.right = this.right),
											(this.stickStartPos.top = this.top),
											(this.stickStartPos.bottom = this.bottom),
											(this.currentStick = t.split('')),
											(this.stickAxis = null),
											this.currentStick[0])
										) {
											case 'b':
											case 't':
												this.stickAxis = 'y';
										}
										switch (this.currentStick[1]) {
											case 'r':
											case 'l':
												this.stickAxis = 'y' === this.stickAxis ? 'xy' : 'x';
										}
										this.limits = this.calcResizeLimitation();
									}
								},
								calcResizeLimitation: function () {
									var t = this.minWidth,
										e = this.minHeight,
										i = this.aspectFactor,
										n = this.width,
										o = this.height,
										a = this.bottom,
										r = this.top,
										s = this.left,
										c = this.right,
										l = this.stickAxis,
										d = this.parentLimitation ? 0 : null;
									this.aspectRatio && (t / e > i ? (e = t / i) : (t = i * e));
									var u = {
										minLeft: d,
										maxLeft: s + (n - t),
										minRight: d,
										maxRight: c + (n - t),
										minTop: d,
										maxTop: r + (o - e),
										minBottom: d,
										maxBottom: a + (o - e)
									};
									if (this.aspectRatio) {
										var h = {
											minLeft: s - Math.min(r, a) * i * 2,
											maxLeft: s + ((o - e) / 2) * i * 2,
											minRight: c - Math.min(r, a) * i * 2,
											maxRight: c + ((o - e) / 2) * i * 2,
											minTop: r - (Math.min(s, c) / i) * 2,
											maxTop: r + ((n - t) / 2 / i) * 2,
											minBottom: a - (Math.min(s, c) / i) * 2,
											maxBottom: a + ((n - t) / 2 / i) * 2
										};
										'x' === l
											? (u = {
													minLeft: Math.max(u.minLeft, h.minLeft),
													maxLeft: Math.min(u.maxLeft, h.maxLeft),
													minRight: Math.max(u.minRight, h.minRight),
													maxRight: Math.min(u.maxRight, h.maxRight)
											  })
											: 'y' === l &&
											  (u = {
													minTop: Math.max(u.minTop, h.minTop),
													maxTop: Math.min(u.maxTop, h.maxTop),
													minBottom: Math.max(u.minBottom, h.minBottom),
													maxBottom: Math.min(u.maxBottom, h.maxBottom)
											  });
									}
									return u;
								},
								stickMove: function (t) {
									var e = this.stickStartPos,
										i = void 0 !== t.pageX ? t.pageX : t.touches[0].pageX,
										n = void 0 !== t.pageY ? t.pageY : t.touches[0].pageY,
										o = (e.mouseX - i) / this.parentScaleX,
										a = (e.mouseY - n) / this.parentScaleY,
										r = e.top - a,
										s = e.bottom + a,
										c = e.left - o,
										l = e.right + o;
									switch (this.currentStick[0]) {
										case 'b':
											this.snapToGrid &&
												(s = this.parentHeight - Math.round((this.parentHeight - s) / this.gridY) * this.gridY),
												(this.rawBottom = s);
											break;
										case 't':
											this.snapToGrid && (r = Math.round(r / this.gridY) * this.gridY), (this.rawTop = r);
									}
									switch (this.currentStick[1]) {
										case 'r':
											this.snapToGrid &&
												(l = this.parentWidth - Math.round((this.parentWidth - l) / this.gridX) * this.gridX),
												(this.rawRight = l);
											break;
										case 'l':
											this.snapToGrid && (c = Math.round(c / this.gridX) * this.gridX), (this.rawLeft = c);
									}
									this.$emit('resizing', this.rect);
								},
								stickUp: function () {
									(this.stickDrag = !1),
										(this.stickStartPos = { mouseX: 0, mouseY: 0, x: 0, y: 0, w: 0, h: 0 }),
										(this.limits = {
											minLeft: null,
											maxLeft: null,
											minRight: null,
											maxRight: null,
											minTop: null,
											maxTop: null,
											minBottom: null,
											maxBottom: null
										}),
										(this.rawTop = this.top),
										(this.rawBottom = this.bottom),
										(this.rawLeft = this.left),
										(this.rawRight = this.right),
										(this.stickAxis = null),
										this.$emit('resizing', this.rect),
										this.$emit('resizestop', this.rect);
								},
								aspectRatioCorrection: function () {
									if (this.aspectRatio) {
										var t = this.bottom,
											e = this.top,
											i = this.left,
											n = this.right,
											o = this.width,
											a = this.height,
											r = this.aspectFactor,
											s = this.currentStick;
										if (o / a > r) {
											var c = r * a;
											'l' === s[1] ? (this.left = i + o - c) : (this.right = n + o - c);
										} else {
											var l = o / r;
											't' === s[0] ? (this.top = e + a - l) : (this.bottom = t + a - l);
										}
									}
								}
							},
							computed: {
								style: function () {
									return {
										top: this.top + 'px',
										left: this.left + 'px',
										width: this.width + 'px',
										height: this.height + 'px',
										zIndex: this.zIndex
									};
								},
								vdrStick: function () {
									var t = this;
									return function (e) {
										var i = { width: t.stickSize / t.parentScaleX + 'px', height: t.stickSize / t.parentScaleY + 'px' };
										return (
											(i[tt[e[0]]] = t.stickSize / t.parentScaleX / -2 + 'px'),
											(i[et[e[1]]] = t.stickSize / t.parentScaleX / -2 + 'px'),
											i
										);
									};
								},
								width: function () {
									return this.parentWidth - this.left - this.right;
								},
								height: function () {
									return this.parentHeight - this.top - this.bottom;
								},
								rect: function () {
									return {
										left: Math.round(this.left),
										top: Math.round(this.top),
										width: Math.round(this.width),
										height: Math.round(this.height)
									};
								}
							},
							watch: {
								rawLeft: function (t) {
									var e = this.limits,
										i = this.stickAxis,
										n = this.aspectFactor,
										o = this.aspectRatio,
										a = this.left,
										r = this.bottom,
										s = this.top;
									if (
										(null !== e.minLeft && t < e.minLeft
											? (t = e.minLeft)
											: null !== e.maxLeft && e.maxLeft < t && (t = e.maxLeft),
										o && 'x' === i)
									) {
										var c = a - t;
										(this.rawTop = s - c / n / 2), (this.rawBottom = r - c / n / 2);
									}
									this.left = t;
								},
								rawRight: function (t) {
									var e = this.limits,
										i = this.stickAxis,
										n = this.aspectFactor,
										o = this.aspectRatio,
										a = this.right,
										r = this.bottom,
										s = this.top;
									if (
										(null !== e.minRight && t < e.minRight
											? (t = e.minRight)
											: null !== e.maxRight && e.maxRight < t && (t = e.maxRight),
										o && 'x' === i)
									) {
										var c = a - t;
										(this.rawTop = s - c / n / 2), (this.rawBottom = r - c / n / 2);
									}
									this.right = t;
								},
								rawTop: function (t) {
									var e = this.limits,
										i = this.stickAxis,
										n = this.aspectFactor,
										o = this.aspectRatio,
										a = this.right,
										r = this.left,
										s = this.top;
									if (
										(null !== e.minTop && t < e.minTop
											? (t = e.minTop)
											: null !== e.maxTop && e.maxTop < t && (t = e.maxTop),
										o && 'y' === i)
									) {
										var c = s - t;
										(this.rawLeft = r - (c * n) / 2), (this.rawRight = a - (c * n) / 2);
									}
									this.top = t;
								},
								rawBottom: function (t) {
									var e = this.limits,
										i = this.stickAxis,
										n = this.aspectFactor,
										o = this.aspectRatio,
										a = this.right,
										r = this.left,
										s = this.bottom;
									if (
										(null !== e.minBottom && t < e.minBottom
											? (t = e.minBottom)
											: null !== e.maxBottom && e.maxBottom < t && (t = e.maxBottom),
										o && 'y' === i)
									) {
										var c = s - t;
										(this.rawLeft = r - (c * n) / 2), (this.rawRight = a - (c * n) / 2);
									}
									this.bottom = t;
								},
								width: function () {
									this.aspectRatioCorrection();
								},
								height: function () {
									this.aspectRatioCorrection();
								},
								active: function (t) {
									t ? this.$emit('activated') : this.$emit('deactivated');
								},
								isActive: function (t) {
									this.active = t;
								},
								z: function (t) {
									(t >= 0 || 'auto' === t) && (this.zIndex = t);
								},
								aspectRatio: function (t) {
									t && (this.aspectFactor = this.width / this.height);
								},
								minw: function (t) {
									t > 0 && t <= this.width && (this.minWidth = t);
								},
								minh: function (t) {
									t > 0 && t <= this.height && (this.minHeight = t);
								},
								x: function () {
									if (!this.stickDrag && !this.bodyDrag) {
										this.parentLimitation && (this.limits = this.calcDragLimitation());
										var t = this.x - this.left;
										(this.rawLeft = this.x), (this.rawRight = this.right - t);
									}
								},
								y: function () {
									if (!this.stickDrag && !this.bodyDrag) {
										this.parentLimitation && (this.limits = this.calcDragLimitation());
										var t = this.y - this.top;
										(this.rawTop = this.y), (this.rawBottom = this.bottom - t);
									}
								},
								w: function () {
									if (!this.stickDrag && !this.bodyDrag) {
										(this.currentStick = ['m', 'r']),
											(this.stickAxis = 'x'),
											this.parentLimitation && (this.limits = this.calcResizeLimitation());
										var t = this.width - this.w;
										this.rawRight = this.right + t;
									}
								},
								h: function () {
									if (!this.stickDrag && !this.bodyDrag) {
										(this.currentStick = ['b', 'm']),
											(this.stickAxis = 'y'),
											this.parentLimitation && (this.limits = this.calcResizeLimitation());
										var t = this.height - this.h;
										this.rawBottom = this.bottom + t;
									}
								},
								parentW: function (t) {
									(this.right = t - this.width - this.left), (this.parentWidth = t);
								},
								parentH: function (t) {
									(this.bottom = t - this.height - this.top), (this.parentHeight = t);
								}
							}
						},
						void 0,
						!1,
						void 0,
						!1,
						r,
						void 0,
						void 0
					)
				},
				props: {
					maximized: { type: Boolean, required: !0 },
					coordinates: { type: Object, required: !0 },
					sticks: {
						type: Array,
						default: function () {
							return ['br', 'bl', 'tr', 'tl'];
						}
					},
					stickStyle: {
						type: Object,
						default: function () {
							return {
								height: '15px',
								width: '15px',
								border: 'none',
								'box-shadow': 'none',
								'background-color': 'transparent'
							};
						}
					}
				},
				data: function () {
					return { active: !1, minHeight: 300, minWidth: 300, minVisibleHeight: 32, minVisibleWidth: 120 };
				},
				methods: {
					resize: function (t, e) {
						this.$emit('update:coordinates', { width: t.width, height: t.height, top: t.top, left: t.left });
					},
					correctCoordinates: function (t) {
						var e = Object.assign({}, t);
						t.width > window.innerWidth
							? ((e.width = window.innerWidth), (e.left = 0))
							: t.left + t.width - this.minVisibleWidth < 0
							? (e.left = this.minVisibleWidth - t.width)
							: t.width + t.left > window.innerWidth && (e.left = window.innerWidth - t.width),
							t.height > window.innerHeight
								? ((e.height = window.innerHeight), (e.top = 0))
								: t.top < 0
								? (e.top = 0)
								: t.top > window.innerHeight - this.minVisibleHeight &&
								  (e.top = window.innerHeight - this.minVisibleHeight),
							this.$emit('update:coordinates', e),
							this.$emit('dragstop', !0);
					},
					onActivated: function () {
						var t = this,
							e = this.$refs.resize.$el.querySelectorAll('.vdr-stick');
						Array.prototype.map.call(e, function (e) {
							for (var i in t.stickStyle) e.style[i] = t.stickStyle[i];
						});
					}
				},
				mounted: function () {
					this.active = !0;
				}
			},
			void 0,
			!1,
			void 0,
			!1,
			r,
			void 0,
			void 0
		),
		nt = j('KnowledgeBase'),
		ot = nt.mapGetters,
		at = nt.mapActions,
		rt = t(
			{
				render: function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i(
						'q-card',
						{ staticClass: 'KnowledgeBase__ArticlePreview fit' },
						[
							i(
								'q-bar',
								{ staticClass: 'bg-yeti text-white dialog-header', attrs: { dark: '' } },
								[
									i('div', { staticClass: 'flex items-center' }, [
										i(
											'div',
											{ staticClass: 'flex items-center no-wrap ellipsis q-mr-sm-sm' },
											[
												i('q-icon', { staticClass: 'q-mr-sm', attrs: { name: 'mdi-text' } }),
												t._v('\n        ' + t._s(t.record.subject) + '\n      ')
											],
											1
										),
										t._v(' '),
										i(
											'div',
											{ staticClass: 'flex items-center text-grey-4 small' },
											[
												i(
													'div',
													{ staticClass: 'flex items-center' },
													[
														i('q-icon', { attrs: { name: t.tree.topCategory.icon, size: '15px' } }),
														t._v(' '),
														i('q-icon', { attrs: { size: '1.5em', name: 'mdi-chevron-right' } }),
														t._v(' '),
														i('span', {
															staticClass: 'flex items-center',
															domProps: { innerHTML: t._s(t.record.category) }
														}),
														t._v(' '),
														i('q-tooltip', [
															t._v('\n            ' + t._s(t.translate('JS_KB_CATEGORY')) + '\n          ')
														])
													],
													1
												),
												t._v(' '),
												i('q-separator', { attrs: { dark: '', vertical: '', spaced: '' } }),
												t._v(' '),
												i(
													'div',
													[
														i('q-icon', { attrs: { name: 'mdi-calendar-clock', size: '15px' } }),
														t._v('\n          ' + t._s(t.record.short_createdtime) + '\n          '),
														i('q-tooltip', [
															t._v(
																'\n            ' +
																	t._s(t.translate('JS_KB_CREATED') + ': ' + t.record.full_createdtime) +
																	'\n          '
															)
														])
													],
													1
												),
												t._v(' '),
												t.record.short_modifiedtime
													? [
															i('q-separator', { attrs: { dark: '', vertical: '', spaced: '' } }),
															t._v(' '),
															i(
																'div',
																[
																	i('q-icon', { attrs: { name: 'mdi-square-edit-outline', size: '15px' } }),
																	t._v('\n            ' + t._s(t.record.short_modifiedtime) + '\n            '),
																	i('q-tooltip', [
																		t._v(
																			'\n              ' +
																				t._s(t.translate('JS_KB_MODIFIED') + ': ' + t.record.full_modifiedtime) +
																				'\n            '
																		)
																	])
																],
																1
															)
													  ]
													: t._e(),
												t._v(' '),
												t.record.accountId
													? [
															i('q-separator', { attrs: { dark: '', vertical: '', spaced: '' } }),
															t._v(' '),
															i('YfIcon', { attrs: { icon: 'yfm-Accounts', size: '15px' } }),
															t._v(' '),
															i(
																'a',
																{
																	staticClass: 'js-popover-tooltip--record ellipsis q-ml-xs text-grey-4',
																	attrs: { href: 'index.php?module=Accounts&view=Detail&record=' + t.record.accountId }
																},
																[t._v(t._s(t.record.accountName) + '\n          ')]
															)
													  ]
													: t._e()
											],
											2
										)
									]),
									t._v(' '),
									i('q-space'),
									t._v(' '),
									t._t('headerRight', [
										t.$q.platform.is.desktop
											? [
													i(
														'a',
														{
															directives: [
																{
																	name: 'show',
																	rawName: 'v-show',
																	value: !t.previewMaximized,
																	expression: '!previewMaximized'
																}
															],
															staticClass: 'flex grabbable text-decoration-none text-white',
															attrs: { href: '#' }
														},
														[i('q-icon', { staticClass: 'js-drag', attrs: { name: 'mdi-drag', size: '19px' } })],
														1
													),
													t._v(' '),
													i(
														'q-btn',
														{
															attrs: {
																icon: t.previewMaximized ? 'mdi-window-restore' : 'mdi-window-maximize',
																dense: '',
																flat: ''
															},
															on: {
																click: function (e) {
																	return t.toggleMaximized();
																}
															}
														},
														[
															i('q-tooltip', [
																t._v(t._s(t.previewMaximized ? t.translate('JS_MINIMIZE') : t.translate('JS_MAXIMIZE')))
															])
														],
														1
													)
											  ]
											: t._e(),
										t._v(' '),
										i(
											'q-btn',
											{
												directives: [{ name: 'close-popup', rawName: 'v-close-popup' }],
												attrs: { dense: '', flat: '', icon: 'mdi-close' }
											},
											[i('q-tooltip', [t._v(t._s(t.translate('JS_CLOSE')))])],
											1
										)
									])
								],
								2
							),
							t._v(' '),
							i(
								'q-card-section',
								{
									class: ['scroll', t.previewMaximized ? 'modal-full-height' : ''],
									style: t.height ? { 'max-height': t.height - 31.14 + 'px' } : {}
								},
								[
									i(
										'div',
										{
											directives: [
												{
													name: 'show',
													rawName: 'v-show',
													value: t.record.introduction,
													expression: 'record.introduction'
												}
											]
										},
										[i('div', { staticClass: 'text-subtitle2 text-bold' }, [t._v(t._s(t.record.introduction))])]
									),
									t._v(' '),
									i(
										'div',
										{
											directives: [
												{ name: 'show', rawName: 'v-show', value: t.record.content, expression: 'record.content' }
											]
										},
										[
											i('q-resize-observer', { on: { resize: t.onResize } }),
											t._v(' '),
											i(
												'div',
												{ ref: 'content' },
												[
													'PLL_PRESENTATION' === t.record.view && t.record.content.length > 1
														? i('carousel', { attrs: { record: t.record } })
														: i(
																'div',
																[
																	i('q-separator'),
																	t._v(' '),
																	i('div', {
																		domProps: {
																			innerHTML: t._s(
																				'object' == typeof t.record.content ? t.record.content[0] : t.record.content
																			)
																		}
																	})
																],
																1
														  )
												],
												1
											)
										],
										1
									),
									t._v(' '),
									t.hasRelatedComments
										? i(
												'div',
												[
													i('q-separator'),
													t._v(' '),
													i('div', { staticClass: 'q-pa-md q-table__title' }, [
														t._v(t._s(t.translate('JS_KB_COMMENTS')))
													]),
													t._v(' '),
													i(
														'q-list',
														{ attrs: { padding: '' } },
														t._l(t.record.related.base.ModComments, function (e, n) {
															return i(
																'q-item',
																{ key: n },
																[
																	i(
																		'q-item-section',
																		{ attrs: { avatar: '', top: '' } },
																		[
																			i(
																				'q-avatar',
																				{ attrs: { size: 'iconSize' } },
																				[
																					void 0 !== e.avatar.url
																						? i('img', { attrs: { src: e.avatar.url, alt: 'user image' } })
																						: i('q-icon', { attrs: { name: 'mdi-account' } })
																				],
																				1
																			)
																		],
																		1
																	),
																	t._v(' '),
																	i(
																		'q-item-section',
																		[
																			i('q-item-label', [
																				i(
																					'a',
																					{
																						staticClass: 'js-popover-tooltip--record',
																						attrs: { href: 'index.php?module=Users&view=Detail&record=' + e.userid }
																					},
																					[t._v(t._s(e.userName) + '\n              ')]
																				)
																			]),
																			t._v(' '),
																			i('q-item-label', [i('div', { domProps: { innerHTML: t._s(e.comment) } })])
																		],
																		1
																	),
																	t._v(' '),
																	i(
																		'q-item-section',
																		{ attrs: { side: '', top: '' } },
																		[
																			i('q-item-label', { attrs: { caption: '' } }, [t._v(t._s(e.modifiedShort))]),
																			t._v(' '),
																			i('q-tooltip', { attrs: { anchor: 'top middle', self: 'center middle' } }, [
																				t._v(
																					'\n              ' +
																						t._s(t.translate('JS_KB_MODIFIED') + ': ' + e.modifiedFull) +
																						'\n            '
																				)
																			])
																		],
																		1
																	)
																],
																1
															);
														}),
														1
													)
												],
												1
										  )
										: t._e(),
									t._v(' '),
									t.hasRelatedArticles
										? i(
												'div',
												[
													i('q-separator'),
													t._v(' '),
													t.record.related
														? i('articles-list', {
																attrs: {
																	data: t.record.related.base.Articles,
																	title: t.translate('JS_KB_RELATED_ARTICLES')
																}
														  })
														: t._e()
												],
												1
										  )
										: t._e(),
									t._v(' '),
									i(
										'div',
										{
											directives: [
												{
													name: 'show',
													rawName: 'v-show',
													value: t.relatedRecords.length,
													expression: 'relatedRecords.length'
												}
											]
										},
										[
											i('q-separator'),
											t._v(' '),
											i('div', { staticClass: 'q-pa-md q-table__title' }, [
												t._v(t._s(t.translate('JS_KB_RELATED_RECORDS')))
											]),
											t._v(' '),
											i('columns-grid', {
												attrs: { columnBlocks: t.relatedRecords },
												scopedSlots: t._u([
													{
														key: 'default',
														fn: function (e) {
															return [
																i(
																	'q-list',
																	{ attrs: { bordered: '', padding: '', dense: '' } },
																	[
																		i(
																			'q-item',
																			{ staticClass: 'text-black flex', attrs: { header: '', clickable: '' } },
																			[
																				i('YfIcon', {
																					staticClass: 'mr-2',
																					attrs: { icon: 'yfm-' + e.relatedBlock, size: t.iconSize }
																				}),
																				t._v(
																					'\n              ' +
																						t._s(t.record.translations[e.relatedBlock]) +
																						'\n            '
																				)
																			],
																			1
																		),
																		t._v(' '),
																		t._l(t.record.related.dynamic[e.relatedBlock], function (n, o) {
																			return i(
																				'q-item',
																				{
																					directives: [{ name: 'ripple', rawName: 'v-ripple' }],
																					key: o,
																					staticClass: 'text-subtitle2',
																					attrs: { clickable: '' }
																				},
																				[
																					i(
																						'q-item-section',
																						{
																							staticClass: 'align-items-center flex-row no-wrap justify-content-start'
																						},
																						[
																							i(
																								'a',
																								{
																									staticClass: 'js-popover-tooltip--record ellipsis',
																									attrs: {
																										href:
																											'index.php?module=' + e.relatedBlock + '&view=Detail&record=' + o
																									}
																								},
																								[t._v('\n                  ' + t._s(n) + '\n                ')]
																							)
																						]
																					)
																				],
																				1
																			);
																		})
																	],
																	2
																)
															];
														}
													}
												])
											})
										],
										1
									)
								]
							)
						],
						1
					);
				},
				staticRenderFns: []
			},
			function (t) {
				t &&
					t('data-v-05e6897a_0', {
						source:
							'.dialog-header{padding-top:3px!important;padding-bottom:3px!important;height:unset!important}.modal-full-height{max-height:calc(100vh - 31.14px)!important}.grabbable:hover{cursor:move;cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.grabbable:active{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.contrast-50{filter:contrast(50%)}',
						map: void 0,
						media: void 0
					});
			},
			{
				name: 'ArticlePreviewContent',
				components: { YfIcon: i, Carousel: l, ArticlesList: Z, ColumnsGrid: c },
				props: { height: { type: Number, default: 0 }, previewMaximized: { type: Boolean } },
				computed: Object.assign({}, ot(['tree', 'record', 'iconSize']), {
					relatedRecords: function () {
						var t = this;
						return this.record
							? Object.keys(this.record.related.dynamic)
									.map(function (e) {
										return 0 !== t.record.related.dynamic[e].length && e;
									})
									.filter(function (t) {
										return 'string' == typeof t;
									})
							: [];
					},
					hasRelatedArticles: function () {
						return !!this.record && 0 !== this.record.related.base.Articles.length;
					},
					hasRelatedComments: function () {
						return !!this.record && 0 !== this.record.related.base.ModComments.length;
					}
				}),
				methods: Object.assign({}, at(['fetchCategories', 'fetchRecord', 'initState']), {
					onResize: function (t) {
						void 0 !== this.$refs.content && $(this.$refs.content).find('img').css('max-width', t.width);
					},
					toggleMaximized: function () {
						this.$emit('update:previewMaximized', !this.previewMaximized);
					}
				})
			},
			void 0,
			!1,
			void 0,
			!1,
			r,
			void 0,
			void 0
		),
		st =
			(j('KnowledgeBase'),
			t(
				{
					render: function () {
						var t = this,
							e = t.$createElement,
							i = t._self._c || e;
						return i(
							'q-dialog',
							{
								attrs: {
									maximized: !!t.maximizedOnly || t.previewMaximized,
									'transition-show': 'slide-up',
									'transition-hide': 'slide-down',
									'content-class': 'quasar-reset'
								},
								model: {
									value: t.dialog,
									callback: function (e) {
										t.dialog = e;
									},
									expression: 'dialog'
								}
							},
							[
								t.isDragResize
									? i(
											'drag-resize',
											{
												attrs: { coordinates: t.coordinates, maximized: t.previewMaximized },
												on: {
													'update:coordinates': function (e) {
														t.coordinates = e;
													}
												}
											},
											[
												i('article-preview-content', {
													attrs: { height: t.coordinates.height, previewMaximized: t.previewMaximized },
													on: {
														'update:previewMaximized': function (e) {
															t.previewMaximized = e;
														},
														'update:preview-maximized': function (e) {
															t.previewMaximized = e;
														}
													}
												})
											],
											1
									  )
									: i('article-preview-content', {
											scopedSlots: t._u(
												[
													{
														key: 'headerRight',
														fn: function () {
															return [t._t('headerRight')];
														},
														proxy: !0
													}
												],
												null,
												!0
											)
									  })
							],
							1
						);
					},
					staticRenderFns: []
				},
				void 0,
				{
					name: 'ArticlePreview',
					components: { ArticlePreviewContent: rt, DragResize: it },
					props: {
						isDragResize: { type: Boolean, default: !0 },
						maximizedOnly: { type: Boolean, default: !1 },
						previewDialog: { type: Boolean, default: !1 }
					},
					data: function () {
						return {
							coordinates: {
								width: Quasar.plugins.Screen.width - 100,
								height: Quasar.plugins.Screen.height - 100,
								top: 0,
								left: Quasar.plugins.Screen.width - (Quasar.plugins.Screen.width - 50)
							},
							previewMaximized: !0
						};
					},
					computed: {
						dialog: {
							get: function () {
								return this.previewDialog;
							},
							set: function (t) {
								this.$emit('update:previewDialog', t);
							}
						}
					}
				},
				void 0,
				!1,
				void 0,
				!1,
				void 0,
				void 0,
				void 0
			)),
		ct = j('KnowledgeBase').mapGetters,
		lt = t(
			{
				render: function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i(
						'transition',
						{
							attrs: {
								'enter-active-class': 'animated ' + t.animationIn,
								'leave-active-class': 'animated ' + t.animationOut
							}
						},
						[
							i(
								'q-list',
								{ directives: [{ name: 'show', rawName: 'v-show', value: t.show, expression: 'show' }] },
								[
									i(
										'q-item',
										{
											directives: [
												{
													name: 'show',
													rawName: 'v-show',
													value: '' === t.activeCategoryDelayed,
													expression: "activeCategoryDelayed === ''"
												}
											],
											attrs: { active: '' }
										},
										[
											i(
												'q-item-section',
												{ attrs: { avatar: '' } },
												[i('q-icon', { attrs: { name: t.tree.topCategory.icon, size: t.iconSize } })],
												1
											),
											t._v(' '),
											i('q-item-section', [t._v(t._s(t.translate(t.tree.topCategory.label)))])
										],
										1
									),
									t._v(' '),
									'' !== t.activeCategoryDelayed
										? i(
												'q-item',
												{
													attrs: { clickable: '', active: '' },
													on: {
														click: function (e) {
															return t.fetchParentCategoryData();
														}
													}
												},
												[
													i(
														'q-item-section',
														{ attrs: { avatar: '' } },
														[
															i('YfIcon', {
																attrs: {
																	size: t.iconSize,
																	icon: t.tree.categories[t.activeCategoryDelayed].icon || t.defaultTreeIcon
																}
															})
														],
														1
													),
													t._v(' '),
													i('q-item-section', [t._v(t._s(t.tree.categories[t.activeCategoryDelayed].label))]),
													t._v(' '),
													i(
														'q-item-section',
														{ attrs: { avatar: '' } },
														[i('q-icon', { attrs: { name: 'mdi-chevron-left' } })],
														1
													)
												],
												1
										  )
										: t._e(),
									t._v(' '),
									t._l(t.data.categories, function (e, n) {
										return i(
											'q-item',
											{
												directives: [{ name: 'ripple', rawName: 'v-ripple' }],
												key: n,
												attrs: { clickable: '' },
												on: {
													click: function (i) {
														return t.fetchChildCategoryData(e);
													}
												}
											},
											[
												i(
													'q-item-section',
													{ attrs: { avatar: '' } },
													[
														i('YfIcon', {
															attrs: { size: t.iconSize, icon: t.tree.categories[e].icon || t.defaultTreeIcon }
														})
													],
													1
												),
												t._v(' '),
												i('q-item-section', [t._v(t._s(t.tree.categories[e].label))]),
												t._v(' '),
												i(
													'q-item-section',
													{ attrs: { avatar: '' } },
													[i('q-icon', { attrs: { name: 'mdi-chevron-right' } })],
													1
												)
											],
											1
										);
									})
								],
								2
							)
						],
						1
					);
				},
				staticRenderFns: []
			},
			void 0,
			{
				name: 'CategoriesList',
				components: { YfIcon: i },
				data: function () {
					return {
						show: !0,
						animationIn: 'slideInLeft',
						animationOut: 'slideOutRight',
						animationChildClassIn: 'slideInRight',
						animationChildClassOut: 'slideOutLeft',
						animationParentClassIn: 'slideInLeft',
						animationParentClassOut: 'slideOutRight',
						activeCategoryDelayed: ''
					};
				},
				props: { activeCategory: { type: String, required: !0 }, data: { type: Object, required: !0 } },
				computed: Object.assign({}, ct(['tree', 'iconSize', 'defaultTreeIcon'])),
				watch: {
					data: function () {
						(this.activeCategoryDelayed = this.activeCategory), (this.show = !0);
					}
				},
				methods: {
					fetchParentCategoryData: function () {
						(this.animationIn = this.animationParentClassIn),
							(this.animationOut = this.animationParentClassOut),
							(this.show = !1),
							(this.data.categories = []);
						var t = '',
							e = this.tree.categories[this.activeCategory].parentTree;
						1 !== e.length && (t = e[e.length - 2]), this.$emit('fetchData', t);
					},
					fetchChildCategoryData: function (t) {
						(this.animationIn = this.animationChildClassIn),
							(this.animationOut = this.animationChildClassOut),
							(this.show = !1),
							(this.data.categories = []),
							this.$emit('fetchData', t);
					}
				},
				mounted: function () {
					this.activeCategoryDelayed = this.activeCategory;
				}
			},
			void 0,
			!1,
			void 0,
			!1,
			void 0,
			void 0,
			void 0
		),
		dt = j('KnowledgeBase'),
		ut = dt.mapGetters,
		ht = dt.mapActions,
		mt = t(
			{
				render: function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i(
						'div',
						{ staticClass: 'KnowledgeBase h-100' },
						[
							i(
								'q-layout',
								{
									staticClass: 'absolute',
									style:
										t.coordinates.height && !t.maximized ? { 'max-height': t.coordinates.height - 31.14 + 'px' } : {},
									attrs: { view: 'hHh Lpr fFf', container: '' }
								},
								[
									i(
										'q-header',
										{ staticClass: 'bg-white text-primary', attrs: { elevated: '' } },
										[
											i(
												'q-toolbar',
												{
													staticClass:
														'flex-md-nowrap flex-wrap items-center q-gutter-x-md q-gutter-y-sm q-pl-md q-pr-none q-py-xs'
												},
												[
													i(
														'div',
														{
															class: [
																'flex items-center no-wrap flex-md-grow-1 q-mr-sm-sm',
																t.searchData ? 'invisible' : ''
															]
														},
														[
															i(
																'q-btn',
																{
																	attrs: { dense: '', round: '', push: '', icon: 'mdi-menu' },
																	on: {
																		click: function (e) {
																			return t.toggleDrawer();
																		}
																	}
																},
																[i('q-tooltip', [t._v(t._s(t.translate('JS_KB_TOGGLE_CATEGORY_MENU')))])],
																1
															),
															t._v(' '),
															i(
																'q-breadcrumbs',
																{
																	directives: [
																		{
																			name: 'show',
																			rawName: 'v-show',
																			value: 'categories' === t.tab,
																			expression: "tab === 'categories'"
																		}
																	],
																	staticClass: 'ml-2',
																	scopedSlots: t._u([
																		{
																			key: 'separator',
																			fn: function () {
																				return [i('q-icon', { attrs: { size: '1.5em', name: 'mdi-chevron-right' } })];
																			},
																			proxy: !0
																		}
																	])
																},
																[
																	t._v(' '),
																	i('q-breadcrumbs-el', {
																		class: ['' === t.activeCategory ? 'text-black' : 'cursor-pointer'],
																		attrs: {
																			icon: t.tree.topCategory.icon,
																			label: t.translate(t.tree.topCategory.label)
																		},
																		on: {
																			click: function (e) {
																				'' !== t.activeCategory && t.fetchData();
																			}
																		}
																	}),
																	t._v(' '),
																	'' !== t.activeCategory
																		? t._l(t.tree.categories[t.activeCategory].parentTree, function (e, n) {
																				return i(
																					'q-breadcrumbs-el',
																					{
																						key: n,
																						class: [
																							n === t.tree.categories[t.activeCategory].parentTree.length - 1
																								? 'text-black'
																								: 'cursor-pointer'
																						],
																						on: {
																							click: function (i) {
																								n !== t.tree.categories[t.activeCategory].parentTree.length - 1 &&
																									t.fetchData(e);
																							}
																						}
																					},
																					[
																						t.tree.categories[e].icon
																							? i('YfIcon', {
																									staticClass: 'q-mr-sm',
																									attrs: { size: t.iconSize, icon: t.tree.categories[e].icon }
																							  })
																							: t._e(),
																						t._v(
																							'\n                ' +
																								t._s(t.tree.categories[e].label) +
																								'\n              '
																						)
																					],
																					1
																				);
																		  })
																		: t._e()
																],
																2
															),
															t._v(' '),
															i(
																'q-breadcrumbs',
																{
																	directives: [
																		{
																			name: 'show',
																			rawName: 'v-show',
																			value: 'accounts' === t.tab,
																			expression: "tab === 'accounts'"
																		}
																	],
																	staticClass: 'ml-2'
																},
																[
																	'' !== t.activeAccount
																		? i(
																				'q-breadcrumbs-el',
																				{ staticClass: 'text-black' },
																				[
																					i('YfIcon', {
																						staticClass: 'q-mr-sm',
																						attrs: { size: t.iconSize, icon: 'yfm-Accounts' }
																					}),
																					t._v('\n              ' + t._s(t.activeAccount) + '\n            ')
																				],
																				1
																		  )
																		: t._e()
																],
																1
															)
														],
														1
													),
													t._v(' '),
													i(
														'div',
														{ staticClass: 'tree-search flex flex-grow-1 no-wrap order-sm-none order-xs-last' },
														[
															i('q-input', {
																staticClass: 'full-width',
																attrs: {
																	placeholder: t.translate('JS_KB_SEARCH_PLACEHOLDER'),
																	rounded: '',
																	outlined: '',
																	type: 'search',
																	autofocus: ''
																},
																on: { input: t.search },
																scopedSlots: t._u([
																	{
																		key: 'prepend',
																		fn: function () {
																			return [
																				i('q-icon', { attrs: { name: 'mdi-magnify' } }),
																				t._v(' '),
																				i(
																					'q-tooltip',
																					{
																						attrs: { anchor: 'top middle', self: 'center middle' },
																						model: {
																							value: t.inputFocus,
																							callback: function (e) {
																								t.inputFocus = e;
																							},
																							expression: 'inputFocus'
																						}
																					},
																					[t._v(t._s(t.translate('JS_INPUT_TOO_SHORT').replace('_LENGTH_', '3')))]
																				)
																			];
																		},
																		proxy: !0
																	},
																	{
																		key: 'append',
																		fn: function () {
																			return [
																				'' !== t.filter
																					? i('q-icon', {
																							staticClass: 'cursor-pointer',
																							attrs: { name: 'mdi-close' },
																							on: {
																								click: function (e) {
																									return e.stopPropagation(), t.clearSearch();
																								}
																							}
																					  })
																					: t._e(),
																				t._v(' '),
																				i(
																					'div',
																					{ staticClass: 'flex items-center q-ml-sm' },
																					[
																						i('icon-info', { attrs: { customOptions: { iconSize: '21px' } } }, [
																							i('div', {
																								staticStyle: { 'white-space': 'pre-line' },
																								domProps: { innerHTML: t._s(t.translate('JS_FULL_TEXT_SEARCH_INFO')) }
																							})
																						])
																					],
																					1
																				),
																				t._v(' '),
																				i(
																					'div',
																					{
																						directives: [
																							{
																								name: 'show',
																								rawName: 'v-show',
																								value: '' !== t.activeCategory,
																								expression: "activeCategory !== ''"
																							}
																						],
																						staticClass: 'flex'
																					},
																					[
																						i('q-toggle', {
																							attrs: { icon: 'mdi-file-tree' },
																							model: {
																								value: t.categorySearch,
																								callback: function (e) {
																									t.categorySearch = e;
																								},
																								expression: 'categorySearch'
																							}
																						}),
																						t._v(' '),
																						i('q-tooltip', [t._v(t._s(t.translate('JS_KB_SEARCH_CURRENT_CATEGORY')))])
																					],
																					1
																				)
																			];
																		},
																		proxy: !0
																	}
																]),
																model: {
																	value: t.filter,
																	callback: function (e) {
																		t.filter = e;
																	},
																	expression: 'filter'
																}
															})
														],
														1
													),
													t._v(' '),
													i(
														'div',
														{ staticClass: 'flex-md-grow-1 flex justify-end q-ml-sm-sm' },
														[
															i(
																'q-btn',
																{
																	attrs: {
																		round: '',
																		dense: '',
																		color: 'white',
																		'text-color': 'primary',
																		icon: 'mdi-plus'
																	},
																	on: {
																		click: function (e) {
																			return t.openQuickCreateModal();
																		}
																	}
																},
																[i('q-tooltip', [t._v(t._s(t.translate('JS_KB_QUICK_CREATE')))])],
																1
															)
														],
														1
													)
												]
											)
										],
										1
									),
									t._v(' '),
									i(
										'q-drawer',
										{
											directives: [
												{ name: 'show', rawName: 'v-show', value: !t.searchData, expression: '!searchData' }
											],
											ref: 'drawer',
											attrs: {
												mini: t.miniState,
												width: t.searchData ? 0 : 250,
												breakpoint: 700,
												side: 'left',
												elevated: '',
												'content-class': 'bg-white text-black',
												'content-style': 'overflow: hidden !important'
											},
											model: {
												value: t.left,
												callback: function (e) {
													t.left = e;
												},
												expression: 'left'
											}
										},
										[
											t.showAccounts
												? [
														i(
															'q-tabs',
															{
																staticClass: 'text-grey',
																attrs: {
																	dense: '',
																	'active-color': 'primary',
																	'indicator-color': 'primary',
																	align: 'justify',
																	'narrow-indicator': ''
																},
																on: { input: t.onTabChange },
																model: {
																	value: t.tab,
																	callback: function (e) {
																		t.tab = e;
																	},
																	expression: 'tab'
																}
															},
															[
																i('q-tab', { attrs: { name: 'categories', label: t.translate('JS_KB_CATEGORIES') } }),
																t._v(' '),
																i('q-tab', { attrs: { name: 'accounts', label: t.translate('JS_KB_ACCOUNTS') } })
															],
															1
														),
														t._v(' '),
														i(
															'q-tab-panels',
															{
																staticStyle: { height: 'calc(100% - 36px)' },
																attrs: { animated: '' },
																model: {
																	value: t.tab,
																	callback: function (e) {
																		t.tab = e;
																	},
																	expression: 'tab'
																}
															},
															[
																i(
																	'q-tab-panel',
																	{ attrs: { name: 'categories' } },
																	[
																		i(
																			'q-scroll-area',
																			{ staticClass: 'fit' },
																			[
																				i('categories-list', {
																					attrs: { data: t.data, activeCategory: t.activeCategory },
																					on: { fetchData: t.fetchData }
																				})
																			],
																			1
																		)
																	],
																	1
																),
																t._v(' '),
																i(
																	'q-tab-panel',
																	{ attrs: { name: 'accounts' } },
																	[
																		i(
																			'div',
																			{ staticClass: 'q-px-sm' },
																			[
																				i('q-input', {
																					attrs: { placeholder: t.translate('JS_KB_SEARCH_PLACEHOLDER'), dense: '' },
																					scopedSlots: t._u(
																						[
																							{
																								key: 'prepend',
																								fn: function () {
																									return [
																										i('q-icon', { attrs: { name: 'mdi-magnify', size: '16px' } })
																									];
																								},
																								proxy: !0
																							},
																							{
																								key: 'append',
																								fn: function () {
																									return [
																										i('q-icon', {
																											directives: [
																												{
																													name: 'show',
																													rawName: 'v-show',
																													value: '' !== t.accountSearch,
																													expression: "accountSearch !== ''"
																												}
																											],
																											staticClass: 'cursor-pointer',
																											attrs: { name: 'mdi-close', size: '16px' },
																											on: {
																												click: function (e) {
																													t.accountSearch = '';
																												}
																											}
																										})
																									];
																								},
																								proxy: !0
																							}
																						],
																						null,
																						!1,
																						107416869
																					),
																					model: {
																						value: t.accountSearch,
																						callback: function (e) {
																							t.accountSearch = e;
																						},
																						expression: 'accountSearch'
																					}
																				})
																			],
																			1
																		),
																		t._v(' '),
																		i(
																			'q-scroll-area',
																			{ staticStyle: { height: 'calc(100% - 56px)' } },
																			[
																				i(
																					'q-list',
																					t._l(t.accountsList, function (e) {
																						return i(
																							'q-item',
																							{
																								key: e.id,
																								attrs: { active: t.activeAccount === e.name, clickable: '' },
																								on: {
																									click: function (i) {
																										t.fetchData(null, e.id), (t.activeAccount = e.name);
																									}
																								}
																							},
																							[
																								i('q-item-section', [t._v(t._s(e.name))]),
																								t._v(' '),
																								i('q-item-section', { attrs: { avatar: '' } }, [
																									i(
																										'a',
																										{
																											staticClass: 'js-popover-tooltip--record ellipsis',
																											attrs: {
																												href: 'index.php?module=Accounts&view=Detail&record=' + e.id
																											},
																											on: {
																												click: function (t) {
																													t.preventDefault();
																												}
																											}
																										},
																										[i('q-icon', { attrs: { name: 'mdi-link' } })],
																										1
																									)
																								])
																							],
																							1
																						);
																					}),
																					1
																				)
																			],
																			1
																		)
																	],
																	1
																)
															],
															1
														)
												  ]
												: i(
														'q-scroll-area',
														{ staticClass: 'fit' },
														[
															i('categories-list', {
																attrs: { data: t.data, activeCategory: t.activeCategory },
																on: { fetchData: t.fetchData }
															})
														],
														1
												  )
										],
										2
									),
									t._v(' '),
									i(
										'q-page-container',
										[
											i(
												'q-page',
												{ staticClass: 'q-pa-sm' },
												[
													i(
														'div',
														{
															directives: [
																{ name: 'show', rawName: 'v-show', value: !t.searchData, expression: '!searchData' }
															]
														},
														[
															i('columns-grid', {
																directives: [
																	{
																		name: 'show',
																		rawName: 'v-show',
																		value: t.featuredCategories.length,
																		expression: 'featuredCategories.length'
																	}
																],
																staticClass: 'q-pa-sm',
																attrs: { columnBlocks: t.featuredCategories },
																scopedSlots: t._u([
																	{
																		key: 'default',
																		fn: function (e) {
																			return [
																				i(
																					'q-list',
																					{ attrs: { bordered: '', padding: '', dense: '' } },
																					[
																						i(
																							'q-item',
																							{
																								staticClass: 'text-black flex',
																								attrs: { header: '', clickable: '' },
																								on: {
																									click: function (i) {
																										return t.fetchData(e.relatedBlock);
																									}
																								}
																							},
																							[
																								i('YfIcon', {
																									staticClass: 'mr-2',
																									attrs: {
																										icon: t.tree.categories[e.relatedBlock].icon,
																										size: t.iconSize
																									}
																								}),
																								t._v(
																									'\n                  ' +
																										t._s(t.tree.categories[e.relatedBlock].label) +
																										'\n                '
																								)
																							],
																							1
																						),
																						t._v(' '),
																						t._l(t.selectedTabData.featured[e.relatedBlock], function (e) {
																							return i(
																								'q-item',
																								{
																									directives: [{ name: 'ripple', rawName: 'v-ripple' }],
																									key: e.id,
																									staticClass: 'text-subtitle2',
																									attrs: { clickable: '' },
																									on: {
																										click: function (i) {
																											return i.preventDefault(), t.showArticlePreview(e.id);
																										}
																									}
																								},
																								[
																									i(
																										'q-item-section',
																										{
																											staticClass:
																												'align-items-center flex-row no-wrap justify-content-start'
																										},
																										[
																											i('q-icon', {
																												staticClass: 'mr-2',
																												attrs: { name: 'mdi-star', size: t.iconSize }
																											}),
																											t._v(' '),
																											i(
																												'a',
																												{
																													staticClass: 'js-popover-tooltip--record ellipsis',
																													attrs: {
																														href:
																															'index.php?module=' +
																															t.moduleName +
																															'&view=Detail&record=' +
																															e.id
																													}
																												},
																												[t._v(t._s(e.subject))]
																											)
																										],
																										1
																									)
																								],
																								1
																							);
																						})
																					],
																					2
																				)
																			];
																		}
																	}
																])
															}),
															t._v(' '),
															i(
																'div',
																{
																	directives: [
																		{
																			name: 'show',
																			rawName: 'v-show',
																			value: '' !== t.activeCategory || 'accounts' === t.tab,
																			expression: "activeCategory !== '' || tab === 'accounts'"
																		}
																	]
																},
																[
																	i('q-separator', {
																		directives: [
																			{
																				name: 'show',
																				rawName: 'v-show',
																				value: t.featuredCategories.length,
																				expression: 'featuredCategories.length'
																			}
																		]
																	}),
																	t._v(' '),
																	i('articles-list', {
																		attrs: { data: t.selectedTabData.records, title: t.translate('JS_KB_ARTICLES') },
																		on: {
																			onClickRecord: function (e) {
																				t.previewDialog = !0;
																			}
																		}
																	})
																],
																1
															)
														],
														1
													),
													t._v(' '),
													i('articles-list', {
														directives: [
															{ name: 'show', rawName: 'v-show', value: t.searchData, expression: 'searchData' }
														],
														attrs: { data: t.searchDataArray, title: t.translate('JS_KB_ARTICLES') },
														on: {
															onClickRecord: function (e) {
																t.previewDialog = !0;
															}
														}
													})
												],
												1
											)
										],
										1
									)
								],
								1
							),
							t._v(' '),
							i('article-preview', {
								attrs: { isDragResize: '', previewDialog: t.previewDialog },
								on: {
									'update:previewDialog': function (e) {
										t.previewDialog = e;
									},
									'update:preview-dialog': function (e) {
										t.previewDialog = e;
									},
									onDialogToggle: t.onDialogToggle
								}
							})
						],
						1
					);
				},
				staticRenderFns: []
			},
			function (t) {
				t &&
					t('data-v-b02583d4_0', {
						source:
							'.tree-search{min-width:320px;width:50%}.tree-search .q-field__control,.tree-search .q-field__marginal{height:40px}',
						map: void 0,
						media: void 0
					});
			},
			{
				name: 'KnowledgeBase',
				components: {
					YfIcon: i,
					IconInfo: n,
					Carousel: l,
					ArticlesList: Z,
					ArticlePreview: st,
					ColumnsGrid: c,
					CategoriesList: lt
				},
				props: {
					coordinates: {
						type: Object,
						default: function () {
							return { width: 0, height: 0, top: 0, left: 0 };
						}
					}
				},
				data: function () {
					return {
						drawerBehaviour: 'desktop',
						miniState: !1,
						left: !0,
						filter: '',
						accountSearch: '',
						categorySearch: !1,
						searchData: !1,
						activeCategory: '',
						activeAccount: '',
						previewDialog: !1,
						tab: 'categories',
						showAccounts: !1,
						data: { categories: [], records: [], featured: {} },
						accountsData: { categories: [], records: [], featured: {} },
						accounts: []
					};
				},
				computed: Object.assign({}, ut(['tree', 'record', 'iconSize', 'moduleName', 'maximized', 'defaultTreeIcon']), {
					accountsList: function () {
						var t = this;
						return '' === this.accountSearch
							? this.accounts
							: this.accounts.filter(function (e) {
									return e.name.toLowerCase().includes(t.accountSearch.toLowerCase());
							  });
					},
					selectedTabData: function () {
						return 'categories' === this.tab ? this.data : this.accountsData;
					},
					searchDataArray: function () {
						return this.searchData ? this.searchData : [];
					},
					featuredCategories: function () {
						var t = this;
						return void 0 === this.selectedTabData.featured.length && this.selectedTabData.categories
							? this.selectedTabData.categories
									.map(function (e) {
										return !!t.selectedTabData.featured[e] && e;
									})
									.filter(function (t) {
										return 'string' == typeof t;
									})
							: [];
					},
					inputFocus: {
						set: function (t) {
							return !1;
						},
						get: function () {
							return this.filter.length > 0;
						}
					}
				}),
				methods: Object.assign({}, ht(['fetchRecord', 'fetchCategories']), {
					onTabChange: function (t) {
						0 === this.accounts.length && 'accounts' === t && this.fetchAccounts();
					},
					fetchAccounts: function () {
						var t = this,
							e = $.Deferred(),
							i = $.progressIndicator({ blockInfo: { enabled: !0 } });
						return AppConnector.request({
							module: this.moduleName,
							action: 'KnowledgeBaseAjax',
							mode: 'getAccounts'
						}).done(function (n) {
							var o = n.result;
							o &&
								(o = Object.keys(o).map(function (t) {
									return { name: o[t], id: t };
								})),
								(t.accounts = o),
								i.progressIndicator({ mode: 'hide' }),
								e.resolve(o);
						});
					},
					search: function () {
						this.filter.length >= 3 ? this.debouncedSearch() : (this.searchData = !1);
					},
					clearSearch: function () {
						(this.filter = ''), (this.searchData = !1);
					},
					fetchData: function (t, e) {
						var i = this;
						void 0 === t && (t = ''), void 0 === e && (e = '');
						var n = $.Deferred();
						null !== t && (this.activeCategory = t);
						var o = $.progressIndicator({ blockInfo: { enabled: !0 } });
						return AppConnector.request({
							module: this.moduleName,
							action: 'KnowledgeBaseAjax',
							mode: 'list',
							category: t,
							accountid: e
						}).done(function (t) {
							var a = t.result;
							a.showAccounts && (i.showAccounts = !0),
								a.records &&
									(a.records = Object.keys(a.records).map(function (t) {
										return Object.assign({}, a.records[t], { id: t });
									})),
								'' !== e ? (i.accountsData = a) : (i.data = a),
								o.progressIndicator({ mode: 'hide' }),
								n.resolve(a);
						});
					},
					openQuickCreateModal: function () {
						new window.Vtiger_Header_Js().quickCreateModule(this.moduleName);
					},
					showArticlePreview: function (t) {
						var e = this;
						this.fetchRecord(t).then(function () {
							e.previewDialog = !0;
						});
					},
					toggleDrawer: function () {
						this.$refs.drawer.belowBreakpoint ? (this.left = !this.left) : (this.miniState = !this.miniState);
					},
					onDialogToggle: function (t) {
						this.previewDialog = t;
					}
				}),
				created: function () {
					var t = this;
					this.fetchCategories().then(function (e) {
						t.fetchData();
					});
				},
				mounted: function () {
					var t = this;
					this.debouncedSearch = Quasar.utils.debounce(function () {
						if (!(t.filter.length < 3)) {
							var e = $.Deferred(),
								i = $.progressIndicator({ blockInfo: { enabled: !0 } });
							AppConnector.request({
								module: t.moduleName,
								action: 'KnowledgeBaseAjax',
								mode: 'search',
								value: t.filter,
								category: t.categorySearch ? t.activeCategory : ''
							}).done(function (n) {
								var o = n.result;
								return (
									o &&
										(o = Object.keys(o).map(function (t) {
											return Object.assign({}, o[t], { id: t });
										})),
									(t.searchData = o),
									e.resolve(o),
									i.progressIndicator({ mode: 'hide' }),
									o
								);
							});
						}
					}, 1e3);
				}
			},
			void 0,
			!1,
			void 0,
			!1,
			r,
			void 0,
			void 0
		),
		pt = t(
			{
				render: function () {
					var t = this.$createElement,
						e = this._self._c || t;
					return e(
						'a',
						{ class: ['grabbable text-decoration-none', this.linkClass], attrs: { href: '#' } },
						[e('q-icon', { class: [this.grabClass], attrs: { size: this.size, name: 'mdi-drag' } })],
						1
					);
				},
				staticRenderFns: []
			},
			function (t) {
				t &&
					t('data-v-eae52636_0', {
						source:
							'.grabbable[data-v-eae52636]:hover{cursor:move;cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.grabbable[data-v-eae52636]:active{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}',
						map: void 0,
						media: void 0
					});
			},
			{
				name: 'ButtonGrab',
				props: {
					grabClass: { type: String },
					size: { type: String, required: !1 },
					linkClass: { type: String, default: 'q-px-xs' }
				}
			},
			'data-v-eae52636',
			!1,
			void 0,
			!1,
			r,
			void 0,
			void 0
		),
		ft = j('KnowledgeBase'),
		vt = ft.mapGetters,
		gt = ft.mapActions,
		wt = t(
			{
				render: function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i(
						'q-dialog',
						{
							attrs: {
								maximized: t.maximized,
								'transition-show': 'slide-up',
								'transition-hide': 'slide-down',
								'content-class': 'quasar-reset'
							},
							model: {
								value: t.dialog,
								callback: function (e) {
									t.dialog = e;
								},
								expression: 'dialog'
							}
						},
						[
							i(
								'drag-resize',
								{
									attrs: { coordinates: t.coordinates, maximized: t.maximized },
									on: {
										'update:coordinates': function (e) {
											t.coordinates = e;
										}
									}
								},
								[
									i(
										'q-card',
										{ staticClass: 'KnowledgeBaseModal full-height' },
										[
											i('q-bar', { staticClass: 'bg-yeti text-white dialog-header', attrs: { dark: '' } }, [
												i(
													'div',
													{ staticClass: 'flex items-center no-wrap full-width js-drag' },
													[
														i('div', { staticClass: 'flex items-center' }, [
															i('div', { staticClass: 'flex items-center no-wrap ellipsis q-mr-sm-sm' }, [
																i('span', { class: ['yfm-' + t.moduleName, 'q-mr-sm'] }),
																t._v(
																	'\n              ' +
																		t._s(t.translate('JS_' + t.moduleName.toUpperCase())) +
																		'\n            '
																)
															])
														]),
														t._v(' '),
														i('q-space'),
														t._v(' '),
														t.$q.platform.is.desktop
															? [
																	i('ButtonGrab', {
																		directives: [
																			{ name: 'show', rawName: 'v-show', value: !t.maximized, expression: '!maximized' }
																		],
																		staticClass: 'flex text-white',
																		attrs: { grabClass: 'js-drag', size: '19px' }
																	}),
																	t._v(' '),
																	i(
																		'q-btn',
																		{
																			attrs: {
																				dense: '',
																				flat: '',
																				icon: t.maximized ? 'mdi-window-restore' : 'mdi-window-maximize'
																			},
																			on: {
																				click: function (e) {
																					t.maximized = !t.maximized;
																				}
																			}
																		},
																		[
																			i('q-tooltip', [
																				t._v(
																					t._s(t.maximized ? t.translate('JS_MINIMIZE') : t.translate('JS_MAXIMIZE'))
																				)
																			])
																		],
																		1
																	)
															  ]
															: t._e(),
														t._v(' '),
														i(
															'q-btn',
															{
																directives: [{ name: 'close-popup', rawName: 'v-close-popup' }],
																attrs: { dense: '', flat: '', icon: 'mdi-close' }
															},
															[i('q-tooltip', [t._v(t._s(t.translate('JS_CLOSE')))])],
															1
														)
													],
													2
												)
											]),
											t._v(' '),
											i('div', [i('knowledge-base', { attrs: { coordinates: t.coordinates } })], 1)
										],
										1
									)
								],
								1
							)
						],
						1
					);
				},
				staticRenderFns: []
			},
			function (t) {
				t &&
					t('data-v-43790be1_0', {
						source:
							'.dialog-header{padding-top:3px!important;padding-bottom:3px!important;height:unset!important}.modal-full-height{max-height:calc(100vh - 31.14px)!important}.contrast-50{filter:contrast(50%)}',
						map: void 0,
						media: void 0
					});
			},
			{
				name: 'KnowledgeBaseModal',
				components: { KnowledgeBase: mt, DragResize: it, ButtonGrab: pt },
				data: function () {
					return {
						coordinates: {
							width: Quasar.plugins.Screen.width - 100,
							height: Quasar.plugins.Screen.height - 100,
							top: 0,
							left: Quasar.plugins.Screen.width - (Quasar.plugins.Screen.width - 50)
						}
					};
				},
				computed: Object.assign({}, vt(['maximized', 'moduleName']), {
					dialog: {
						set: function (t) {
							this.$store.commit('KnowledgeBase/setDialog', t);
						},
						get: function () {
							return this.$store.getters['KnowledgeBase/dialog'];
						}
					},
					maximized: {
						set: function (t) {
							this.$store.commit('KnowledgeBase/setMaximized', t);
						},
						get: function () {
							return this.$store.getters['KnowledgeBase/maximized'];
						}
					}
				}),
				methods: Object.assign({}, gt(['fetchCategories', 'initState'])),
				created: function () {
					this.initState(this.$options.state);
				}
			},
			void 0,
			!1,
			void 0,
			!1,
			r,
			void 0,
			void 0
		),
		bt = j('KnowledgeBase').mapActions,
		_t = t(
			{
				render: function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i('article-preview', {
						attrs: { isDragResize: !1, maximizedOnly: '', previewDialog: '' },
						scopedSlots: t._u([
							{
								key: 'headerRight',
								fn: function () {
									return [
										i(
											'q-btn',
											{ attrs: { dense: '', flat: '', icon: 'mdi-close' }, on: { click: t.hideModal } },
											[i('q-tooltip', [t._v(t._s(t.translate('JS_CLOSE')))])],
											1
										)
									];
								},
								proxy: !0
							}
						])
					});
				},
				staticRenderFns: []
			},
			void 0,
			{
				name: 'ArticlePreviewModal',
				components: { ArticlePreview: st },
				created: function () {
					var t = this;
					this.initState(this.$options.state),
						this.fetchCategories(),
						this.fetchRecord(this.$options.state.recordId),
						document.addEventListener('keyup', function (e) {
							27 === e.keyCode && t.hideModal();
						});
				},
				methods: Object.assign(
					{},
					{
						hideModal: function () {
							app.hideModalWindow(), this.initState({ record: !1 }), this.$destroy();
						}
					},
					bt(['fetchCategories', 'fetchRecord', 'initState'])
				)
			},
			void 0,
			!1,
			void 0,
			!1,
			void 0,
			void 0,
			void 0
		);
	Vue.use(W);
	var yt = 'production' !== m.NODE_ENV;
	void 0 === window.vuexStore && (window.vuexStore = new W.Store({ strict: yt }));
	var xt = window.vuexStore,
		Ct = {
			namespaced: !0,
			state: {
				defaultTreeIcon: 'mdi-subdirectory-arrow-right',
				record: !1,
				dialog: !1,
				maximized: !0,
				moduleName: '',
				iconSize: '18px',
				tree: { topCategory: { icon: 'mdi-file-tree', label: 'JS_KB_MAIN_CATEGORIES' }, categories: {} }
			},
			getters: {
				moduleName: function (t) {
					return t.moduleName;
				},
				record: function (t) {
					return t.record;
				},
				dialog: function (t) {
					return t.dialog;
				},
				maximized: function (t) {
					return t.maximized;
				},
				previewDialog: function (t) {
					return t.previewDialog;
				},
				previewMaximized: function (t) {
					return t.previewMaximized;
				},
				coordinates: function (t) {
					return t.coordinates;
				},
				iconSize: function (t) {
					return t.iconSize;
				},
				tree: function (t) {
					return t.tree;
				},
				defaultTreeIcon: function (t) {
					return t.defaultTreeIcon;
				}
			},
			actions: {
				fetchRecord: function (t, e) {
					t.state;
					var i = t.commit,
						n = t.getters,
						o = $.Deferred(),
						a = $.progressIndicator({ blockInfo: { enabled: !0 } });
					return AppConnector.request({
						module: n.moduleName,
						action: 'KnowledgeBaseAjax',
						mode: 'detail',
						record: e
					}).done(function (t) {
						var e = t.result;
						e.related.base.Articles &&
							(e.related.base.Articles = Object.keys(e.related.base.Articles).map(function (t) {
								return Object.assign({}, e.related.base.Articles[t], { id: t });
							})),
							i('setRecord', e),
							a.progressIndicator({ mode: 'hide' }),
							o.resolve(e);
					});
				},
				fetchCategories: function (t) {
					t.state;
					var e = t.commit,
						i = t.getters,
						n = $.Deferred();
					return AppConnector.request({ module: i.moduleName, action: 'KnowledgeBaseAjax', mode: 'categories' }).done(
						function (t) {
							e('setTreeCategories', t.result), n.resolve(t.result);
						}
					);
				},
				initState: function (t, e) {
					t.state;
					(0, t.commit)('setState', e);
				}
			},
			mutations: {
				setState: function (t, e) {
					t = Object.assign(t, e);
				},
				setRecord: function (t, e) {
					t.record = e;
				},
				setDialog: function (t, e) {
					t.dialog = e;
				},
				setMaximized: function (t, e) {
					t.maximized = e;
				},
				setCoordinates: function (t, e) {
					t.coordinates = e;
				},
				setTreeCategories: function (t, e) {
					t.tree.categories = e;
				}
			}
		};
	/**
	 * Knowledge base module
	 *
	 * @description Knowledge base vuex module
	 * @license YetiForce Public License 3.0
	 * @author Tomasz Poradzewski <t.poradzewski@yetiforce.com>
	 */
	/**
	 * KnowledgeBase components initializations
	 *
	 * @description KnowledgeBase views' instances
	 * @license YetiForce Public License 3.0
	 * @author Tomasz Poradzewski <t.poradzewski@yetiforce.com>
	 */
	Vue.config.productionTip = !1;
	var kt = j('KnowledgeBase').mapActions;
	xt.registerModule('KnowledgeBase', Ct),
		Vue.mixin({
			methods: {
				translate: function (t) {
					return app.vtranslate(t);
				}
			}
		}),
		(window.KnowledgeBase = {
			component: mt,
			mount: function (t) {
				return (
					(mt.state = t.state),
					new Vue({
						store: xt,
						render: function (t) {
							return t(mt);
						},
						methods: Object.assign({}, kt(['fetchCategories', 'initState'])),
						created: function () {
							this.initState(t.state);
						}
					}).$mount(t.el)
				);
			}
		}),
		(window.ArticlePreviewVueComponent = {
			component: _t,
			mount: function (t) {
				return (
					(_t.state = t.state),
					new Vue({
						store: xt,
						render: function (t) {
							return t(_t);
						}
					}).$mount(t.el)
				);
			}
		}),
		(window.KnowledgeBaseModalVueComponent = {
			component: wt,
			mount: function (t) {
				return (
					(wt.state = t.state),
					new Vue({
						store: xt,
						render: function (t) {
							return t(wt);
						}
					}).$mount(t.el)
				);
			}
		});
})();
//# sourceMappingURL=KnowledgeBase.vue.js.map
