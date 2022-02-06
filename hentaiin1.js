!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Tagify = t()
}(this, (function() {
    "use strict";
    function e(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, i)
        }
        return n
    }
    function t(t) {
        for (var n = 1; n < arguments.length; n++) {
            var r = null != arguments[n] ? arguments[n] : {};
            n % 2 ? e(Object(r), !0).forEach((function(e) {
                i(t, e, r[e])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : e(Object(r)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }
            ))
        }
        return t
    }
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function r(e) {
        return function(e) {
            if (Array.isArray(e))
                return a(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }(e) || o(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function o(e, t) {
        if (e) {
            if ("string" == typeof e)
                return a(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
        }
    }
    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++)
            i[n] = e[n];
        return i
    }
    var s = function(e, t, n, i) {
        return e = "" + e,
        t = "" + t,
        i && (e = e.trim(),
        t = t.trim()),
        n ? e == t : e.toLowerCase() == t.toLowerCase()
    };
    function l(e, t) {
        var n, i = {};
        for (n in e)
            t.indexOf(n) < 0 && (i[n] = e[n]);
        return i
    }
    function u(e) {
        var t = document.createElement("div");
        return e.replace(/\&#?[0-9a-z]+;/gi, (function(e) {
            return t.innerHTML = e,
            t.innerText
        }
        ))
    }
    function c(e, t) {
        for (t = t || "previous"; e = e[t + "Sibling"]; )
            if (3 == e.nodeType)
                return e
    }
    function d(e) {
        return "string" == typeof e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/`|'/g, "&#039;") : e
    }
    function f(e) {
        var t = Object.prototype.toString.call(e).split(" ")[1].slice(0, -1);
        return e === Object(e) && "Array" != t && "Function" != t && "RegExp" != t && "HTMLUnknownElement" != t
    }
    function p(e, t, n) {
        function i(e, t) {
            for (var n in t)
                if (t.hasOwnProperty(n)) {
                    if (f(t[n])) {
                        f(e[n]) ? i(e[n], t[n]) : e[n] = Object.assign({}, t[n]);
                        continue
                    }
                    if (Array.isArray(t[n])) {
                        e[n] = Object.assign([], t[n]);
                        continue
                    }
                    e[n] = t[n]
                }
        }
        return e instanceof Object || (e = {}),
        i(e, t),
        n && i(e, n),
        e
    }
    function h(e) {
        return String.prototype.normalize ? "string" == typeof e ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : void 0 : e
    }
    var g = function() {
        return /(?=.*chrome)(?=.*android)/i.test(navigator.userAgent)
    }
      , m = {
        delimiters: ",",
        pattern: null,
        tagTextProp: "value",
        maxTags: 1 / 0,
        callbacks: {},
        addTagOnBlur: !0,
        duplicates: !1,
        whitelist: [],
        blacklist: [],
        enforceWhitelist: !1,
        keepInvalidTags: !1,
        mixTagsAllowedAfter: /,|\.|\:|\s/,
        mixTagsInterpolator: ["[[", "]]"],
        backspace: !0,
        skipInvalid: !1,
        pasteAsTags: !0,
        editTags: {
            clicks: 2,
            keepInvalid: !0
        },
        transformTag: function() {},
        trim: !0,
        a11y: {
            focusableTags: !1
        },
        mixMode: {
            insertAfterTag: " "
        },
        autoComplete: {
            enabled: !0,
            rightKey: !1
        },
        classNames: {
            namespace: "tagify",
            mixMode: "tagify--mix",
            selectMode: "tagify--select",
            input: "tagify__input",
            focus: "tagify--focus",
            tag: "tagify__tag",
            tagNoAnimation: "tagify--noAnim",
            tagInvalid: "tagify--invalid",
            tagNotAllowed: "tagify--notAllowed",
            inputInvalid: "tagify__input--invalid",
            tagX: "tagify__tag__removeBtn",
            tagText: "tagify__tag-text",
            dropdown: "tagify__dropdown",
            dropdownWrapper: "tagify__dropdown__wrapper",
            dropdownItem: "tagify__dropdown__item",
            dropdownItemActive: "tagify__dropdown__item--active",
            dropdownInital: "tagify__dropdown--initial",
            scopeLoading: "tagify--loading",
            tagLoading: "tagify__tag--loading",
            tagEditing: "tagify__tag--editable",
            tagFlash: "tagify__tag--flash",
            tagHide: "tagify__tag--hide",
            hasMaxTags: "tagify--hasMaxTags",
            hasNoTags: "tagify--noTags",
            empty: "tagify--empty"
        },
        dropdown: {
            classname: "",
            enabled: 2,
            maxItems: 10,
            searchKeys: ["value", "searchBy"],
            fuzzySearch: !0,
            caseSensitive: !1,
            accentedSearch: !0,
            highlightFirst: !1,
            closeOnSelect: !0,
            clearOnSelect: !0,
            position: "all",
            appendTarget: null
        },
        hooks: {
            beforeRemoveTag: function() {
                return Promise.resolve()
            },
            beforePaste: function() {
                return Promise.resolve()
            },
            suggestionClick: function() {
                return Promise.resolve()
            }
        }
    };
    function v() {
        for (var e in this.dropdown = {},
        this._dropdown)
            this.dropdown[e] = "function" == typeof this._dropdown[e] ? this._dropdown[e].bind(this) : this._dropdown[e];
        this.settings.dropdown.enabled >= 0 && this.dropdown.init()
    }
    var y, b = {
        init: function() {
            this.DOM.dropdown = this.parseTemplate("dropdown", [this.settings]),
            this.DOM.dropdown.content = this.DOM.dropdown.querySelector(this.settings.classNames.dropdownWrapperSelector)
        },
        show: function(e) {
            var t, n, i, r = this, o = this.settings, a = "mix" == o.mode && !o.enforceWhitelist, l = !o.whitelist || !o.whitelist.length, u = "manual" == o.dropdown.position;
            if (e = void 0 === e ? this.state.inputText : e,
            (!l || a || o.templates.dropdownItemNoMatch) && !1 !== o.dropdown.enable && !this.state.isLoading) {
                if (clearTimeout(this.dropdownHide__bindEventsTimeout),
                this.suggestedListItems = this.dropdown.filterListItems(e),
                e && !this.suggestedListItems.length && (this.trigger("dropdown:noMatch", e),
                o.templates.dropdownItemNoMatch && (i = o.templates.dropdownItemNoMatch.call(this, {
                    value: e
                }))),
                !i) {
                    if (this.suggestedListItems.length)
                        e && a && !this.state.editing.scope && !s(this.suggestedListItems[0].value, e) && this.suggestedListItems.unshift({
                            value: e
                        });
                    else {
                        if (!e || !a || this.state.editing.scope)
                            return this.input.autocomplete.suggest.call(this),
                            void this.dropdown.hide();
                        this.suggestedListItems = [{
                            value: e
                        }]
                    }
                    n = "" + (f(t = this.suggestedListItems[0]) ? t.value : t),
                    o.autoComplete && n && 0 == n.indexOf(e) && this.input.autocomplete.suggest.call(this, t)
                }
                this.dropdown.fill(i),
                o.dropdown.highlightFirst && this.dropdown.highlightOption(this.DOM.dropdown.content.children[0]),
                this.state.dropdown.visible || setTimeout(this.dropdown.events.binding.bind(this)),
                this.state.dropdown.visible = e || !0,
                this.state.dropdown.query = e,
                this.setStateSelection(),
                u || setTimeout((function() {
                    r.dropdown.position(),
                    r.dropdown.render()
                }
                )),
                setTimeout((function() {
                    r.trigger("dropdown:show", r.DOM.dropdown)
                }
                ))
            }
        },
        hide: function(e) {
            var t = this
              , n = this.DOM
              , i = n.scope
              , r = n.dropdown
              , o = "manual" == this.settings.dropdown.position && !e;
            if (r && document.body.contains(r) && !o)
                return window.removeEventListener("resize", this.dropdown.position),
                this.dropdown.events.binding.call(this, !1),
                i.setAttribute("aria-expanded", !1),
                r.parentNode.removeChild(r),
                setTimeout((function() {
                    t.state.dropdown.visible = !1
                }
                ), 100),
                this.state.dropdown.query = this.state.ddItemData = this.state.ddItemElm = this.state.selection = null,
                this.state.tag && this.state.tag.value.length && (this.state.flaggedTags[this.state.tag.baseOffset] = this.state.tag),
                this.trigger("dropdown:hide", r),
                this
        },
        render: function() {
            var e, t, n = this, i = ((t = this.DOM.dropdown.cloneNode(!0)).style.cssText = "position:fixed; top:-9999px; opacity:0",
            document.body.appendChild(t),
            e = t.clientHeight,
            t.parentNode.removeChild(t),
            e), r = this.settings;
            return this.DOM.scope.setAttribute("aria-expanded", !0),
            document.body.contains(this.DOM.dropdown) || (this.DOM.dropdown.classList.add(r.classNames.dropdownInital),
            this.dropdown.position(i),
            r.dropdown.appendTarget.appendChild(this.DOM.dropdown),
            setTimeout((function() {
                return n.DOM.dropdown.classList.remove(r.classNames.dropdownInital)
            }
            ))),
            this
        },
        fill: function(e) {
            var t;
            e = "string" == typeof e ? e : this.dropdown.createListHTML(e || this.suggestedListItems),
            this.DOM.dropdown.content.innerHTML = (t = e) ? t.replace(/\>[\r\n ]+\</g, "><").replace(/(<.*?>)|\s+/g, (function(e, t) {
                return t || " "
            }
            )) : ""
        },
        refilter: function(e) {
            e = e || this.state.dropdown.query || "",
            this.suggestedListItems = this.dropdown.filterListItems(e),
            this.dropdown.fill(),
            this.suggestedListItems.length || this.dropdown.hide(),
            this.trigger("dropdown:updated", this.DOM.dropdown)
        },
        position: function(e) {
            var t = this.settings.dropdown;
            if ("manual" != t.position) {
                var n, i, r, o, a, s, l = this.DOM.dropdown, u = t.placeAbove, c = document.documentElement.clientHeight, d = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 480 ? t.position : "all", f = this.DOM["input" == d ? "input" : "scope"];
                e = e || l.clientHeight,
                this.state.dropdown.visible && ("text" == d ? (r = (n = this.getCaretGlobalPosition()).bottom,
                i = n.top,
                o = n.left,
                a = "auto") : (s = function(e) {
                    for (var t = 0, n = 0; e; )
                        t += e.offsetLeft || 0,
                        n += e.offsetTop || 0,
                        e = e.parentNode;
                    return {
                        left: t,
                        top: n
                    }
                }(this.settings.dropdown.appendTarget),
                i = (n = f.getBoundingClientRect()).top - s.top,
                r = n.bottom - 1 - s.top,
                o = n.left - s.left,
                a = n.width + "px"),
                i = Math.floor(i),
                r = Math.ceil(r),
                u = void 0 === u ? c - n.bottom < e : u,
                l.style.cssText = "left:" + (o + window.pageXOffset) + "px; width:" + a + ";" + (u ? "top: " + (i + window.pageYOffset) + "px" : "top: " + (r + window.pageYOffset) + "px"),
                l.setAttribute("placement", u ? "top" : "bottom"),
                l.setAttribute("position", d))
            }
        },
        events: {
            binding: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                  , t = this.dropdown.events.callbacks
                  , n = this.listeners.dropdown = this.listeners.dropdown || {
                    position: this.dropdown.position.bind(this),
                    onKeyDown: t.onKeyDown.bind(this),
                    onMouseOver: t.onMouseOver.bind(this),
                    onMouseLeave: t.onMouseLeave.bind(this),
                    onClick: t.onClick.bind(this),
                    onScroll: t.onScroll.bind(this)
                }
                  , i = e ? "addEventListener" : "removeEventListener";
                "manual" != this.settings.dropdown.position && (window[i]("resize", n.position),
                window[i]("keydown", n.onKeyDown)),
                this.DOM.dropdown[i]("mouseover", n.onMouseOver),
                this.DOM.dropdown[i]("mouseleave", n.onMouseLeave),
                this.DOM.dropdown[i]("mousedown", n.onClick),
                this.DOM.dropdown.content[i]("scroll", n.onScroll)
            },
            callbacks: {
                onKeyDown: function(e) {
                    var t = this
                      , n = this.DOM.dropdown.querySelector(this.settings.classNames.dropdownItemActiveSelector)
                      , i = this.dropdown.getSuggestionDataByNode(n);
                    switch (e.key) {
                    case "ArrowDown":
                    case "ArrowUp":
                    case "Down":
                    case "Up":
                        var r;
                        e.preventDefault(),
                        n && (n = n[("ArrowUp" == e.key || "Up" == e.key ? "previous" : "next") + "ElementSibling"]),
                        n || (r = this.DOM.dropdown.content.children,
                        n = r["ArrowUp" == e.key || "Up" == e.key ? r.length - 1 : 0]),
                        i = this.dropdown.getSuggestionDataByNode(n),
                        this.dropdown.highlightOption(n, !0);
                        break;
                    case "Escape":
                    case "Esc":
                        this.dropdown.hide();
                        break;
                    case "ArrowRight":
                        if (this.state.actions.ArrowLeft)
                            return;
                    case "Tab":
                        if ("mix" != this.settings.mode && n && !this.settings.autoComplete.rightKey && !this.state.editing) {
                            e.preventDefault();
                            var o = this.dropdown.getMappedValue(i);
                            return this.input.autocomplete.set.call(this, o),
                            !1
                        }
                        return !0;
                    case "Enter":
                        e.preventDefault(),
                        this.settings.hooks.suggestionClick(e, {
                            tagify: this,
                            tagData: i,
                            suggestionElm: n
                        }).then((function() {
                            if (n)
                                return t.dropdown.selectOption(n);
                            t.dropdown.hide(),
                            "mix" != t.settings.mode && t.addTags(t.state.inputText.trim(), !0)
                        }
                        )).catch((function(e) {
                            return e
                        }
                        ));
                        break;
                    case "Backspace":
                        if ("mix" == this.settings.mode || this.state.editing.scope)
                            return;
                        var a = this.state.inputText.trim();
                        "" != a && 8203 != a.charCodeAt(0) || (!0 === this.settings.backspace ? this.removeTags() : "edit" == this.settings.backspace && setTimeout(this.editTag.bind(this), 0))
                    }
                },
                onMouseOver: function(e) {
                    var t = e.target.closest(this.settings.classNames.dropdownItemSelector);
                    t && this.dropdown.highlightOption(t)
                },
                onMouseLeave: function(e) {
                    this.dropdown.highlightOption()
                },
                onClick: function(e) {
                    var t = this;
                    if (0 == e.button && e.target != this.DOM.dropdown && e.target != this.DOM.dropdown.content) {
                        var n = e.target.closest(this.settings.classNames.dropdownItemSelector)
                          , i = this.dropdown.getSuggestionDataByNode(n);
                        this.state.actions.selectOption = !0,
                        setTimeout((function() {
                            return t.state.actions.selectOption = !1
                        }
                        ), 50),
                        this.settings.hooks.suggestionClick(e, {
                            tagify: this,
                            tagData: i,
                            suggestionElm: n
                        }).then((function() {
                            n ? t.dropdown.selectOption(n) : t.dropdown.hide()
                        }
                        )).catch((function(e) {
                            return e
                        }
                        ))
                    }
                },
                onScroll: function(e) {
                    var t = e.target
                      , n = t.scrollTop / (t.scrollHeight - t.parentNode.clientHeight) * 100;
                    this.trigger("dropdown:scroll", {
                        percentage: Math.round(n)
                    })
                }
            }
        },
        getSuggestionDataByNode: function(e) {
            var t = e ? +e.getAttribute("tagifySuggestionIdx") : -1;
            return this.suggestedListItems[t] || null
        },
        highlightOption: function(e, t) {
            var n, i = this.settings.classNames.dropdownItemActive;
            if (this.state.ddItemElm && (this.state.ddItemElm.classList.remove(i),
            this.state.ddItemElm.removeAttribute("aria-selected")),
            !e)
                return this.state.ddItemData = null,
                this.state.ddItemElm = null,
                void this.input.autocomplete.suggest.call(this);
            n = this.suggestedListItems[this.getNodeIndex(e)],
            this.state.ddItemData = n,
            this.state.ddItemElm = e,
            e.classList.add(i),
            e.setAttribute("aria-selected", !0),
            t && (e.parentNode.scrollTop = e.clientHeight + e.offsetTop - e.parentNode.clientHeight),
            this.settings.autoComplete && (this.input.autocomplete.suggest.call(this, n),
            this.dropdown.position())
        },
        selectOption: function(e) {
            var t, n = this, i = this.settings.dropdown, r = i.clearOnSelect, o = i.closeOnSelect;
            if (!e)
                return t = this.addTags(this.state.inputText, !0),
                void (o && this.dropdown.hide());
            var a = e.getAttribute("tagifySuggestionIdx")
              , s = this.suggestedListItems[+a];
            this.trigger("dropdown:select", {
                data: s,
                elm: e
            }),
            a && s ? (this.state.editing ? this.onEditTagDone(null, p({
                __isValid: !0
            }, s)) : t = this["mix" == this.settings.mode ? "addMixTags" : "addTags"]([s], r),
            this.DOM.input.parentNode && (setTimeout((function() {
                n.DOM.input.focus(),
                n.toggleFocusClass(!0),
                n.placeCaretAfterNode(t)
            }
            )),
            o ? setTimeout(this.dropdown.hide.bind(this)) : this.dropdown.refilter())) : this.dropdown.hide()
        },
        selectAll: function() {
            return this.suggestedListItems.length = 0,
            this.dropdown.hide(),
            this.addTags(this.dropdown.filterListItems(""), !0),
            this
        },
        filterListItems: function(e, t) {
            var n, i, r, o, a, s = this, l = this.settings, u = l.dropdown, c = (t = t || {},
            e = "select" == l.mode && this.value.length && this.value[0][l.tagTextProp] == e ? "" : e,
            []), d = l.whitelist, p = u.maxItems || 1 / 0, g = u.searchKeys, m = 0;
            if (!e || !g.length)
                return (l.duplicates ? d : d.filter((function(e) {
                    return !s.isTagDuplicate(f(e) ? e.value : e)
                }
                ))).slice(0, p);
            function v(e, t) {
                return t.toLowerCase().split(" ").every((function(t) {
                    return e.includes(t.toLowerCase())
                }
                ))
            }
            for (a = u.caseSensitive ? "" + e : ("" + e).toLowerCase(); m < d.length; m++) {
                n = d[m]instanceof Object ? d[m] : {
                    value: d[m]
                };
                var y = Object.keys(n).some((function(e) {
                    return g.includes(e)
                }
                )) ? g : ["value"];
                if (u.fuzzySearch && !t.exact ? (r = y.reduce((function(e, t) {
                    return e + " " + (n[t] || "")
                }
                ), "").toLowerCase(),
                u.accentedSearch && (r = h(r),
                a = h(a)),
                i = v(r, a)) : i = y.some((function(e) {
                    var i = "" + (n[e] || "");
                    return u.accentedSearch && (i = h(i),
                    a = h(a)),
                    u.caseSensitive || (i = i.toLowerCase()),
                    t.exact ? i == a : 0 == i.indexOf(a)
                }
                )),
                o = !l.duplicates && this.isTagDuplicate(f(n) ? n.value : n),
                i && !o && p-- && c.push(n),
                0 == p)
                    break
            }
            return c
        },
        getMappedValue: function(e) {
            var t = this.settings.dropdown.mapValueTo;
            return t ? "function" == typeof t ? t(e) : e[t] || e.value : e.value
        },
        createListHTML: function(e) {
            var t = this;
            return p([], e).map((function(e, n) {
                "string" != typeof e && "number" != typeof e || (e = {
                    value: e
                });
                var i = t.dropdown.getMappedValue(e);
                e.value = i && "string" == typeof i ? d(i) : i;
                var r = t.settings.templates.dropdownItem.apply(t, [e, t]);
                return r.replace(/\s*tagifySuggestionIdx=(["'])(.*?)\1/gim, "").replace(">", ' tagifySuggestionIdx="'.concat(n, '">'))
            }
            )).join("")
        }
    }, w = {
        empty: "empty",
        exceed: "number of tags exceeded",
        pattern: "pattern mismatch",
        duplicate: "already exists",
        notAllowed: "not allowed"
    }, x = {
        customBinding: function() {
            var e = this;
            this.customEventsList.forEach((function(t) {
                e.on(t, e.settings.callbacks[t])
            }
            ))
        },
        binding: function() {
            var e, t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], n = this.events.callbacks, i = t ? "addEventListener" : "removeEventListener";
            if (!this.state.mainEvents || !t)
                for (var r in this.state.mainEvents = t,
                t && !this.listeners.main && (this.events.bindGlobal.call(this),
                this.settings.isJQueryPlugin && jQuery(this.DOM.originalInput).on("tagify.removeAllTags", this.removeAllTags.bind(this))),
                e = this.listeners.main = this.listeners.main || {
                    focus: ["input", n.onFocusBlur.bind(this)],
                    keydown: ["input", n.onKeydown.bind(this)],
                    click: ["scope", n.onClickScope.bind(this)],
                    dblclick: ["scope", n.onDoubleClickScope.bind(this)],
                    paste: ["input", n.onPaste.bind(this)]
                })
                    this.DOM[e[r][0]][i](r, e[r][1])
        },
        bindGlobal: function(e) {
            var t, n = this.events.callbacks, i = e ? "removeEventListener" : "addEventListener";
            if (e || !this.listeners.global) {
                this.listeners.global = this.listeners && this.listeners.global || [{
                    type: this.isIE ? "keydown" : "input",
                    target: this.DOM.input,
                    cb: n[this.isIE ? "onInputIE" : "onInput"].bind(this)
                }, {
                    type: "keydown",
                    target: window,
                    cb: n.onWindowKeyDown.bind(this)
                }, {
                    type: "blur",
                    target: this.DOM.input,
                    cb: n.onFocusBlur.bind(this)
                }];
                var r, a = function(e, t) {
                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!n) {
                        if (Array.isArray(e) || (n = o(e))) {
                            n && (e = n);
                            var i = 0
                              , r = function() {};
                            return {
                                s: r,
                                n: function() {
                                    return i >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[i++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: r
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var a, s = !0, l = !1;
                    return {
                        s: function() {
                            n = n.call(e)
                        },
                        n: function() {
                            var e = n.next();
                            return s = e.done,
                            e
                        },
                        e: function(e) {
                            l = !0,
                            a = e
                        },
                        f: function() {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (l)
                                    throw a
                            }
                        }
                    }
                }(this.listeners.global);
                try {
                    for (a.s(); !(r = a.n()).done; )
                        (t = r.value).target[i](t.type, t.cb)
                } catch (e) {
                    a.e(e)
                } finally {
                    a.f()
                }
            }
        },
        unbindGlobal: function() {
            this.events.bindGlobal.call(this, !0)
        },
        callbacks: {
            onFocusBlur: function(e) {
                var t = e.target ? this.trim(e.target.textContent) : ""
                  , n = this.settings
                  , i = e.type
                  , r = n.dropdown.enabled >= 0
                  , o = {
                    relatedTarget: e.relatedTarget
                }
                  , a = this.state.actions.selectOption && (r || !n.dropdown.closeOnSelect)
                  , s = this.state.actions.addNew && r
                  , l = e.relatedTarget && e.relatedTarget.classList.contains(n.classNames.tag) && this.DOM.scope.contains(e.relatedTarget);
                if ("blur" == i) {
                    if (e.relatedTarget === this.DOM.scope)
                        return this.dropdown.hide(),
                        void this.DOM.input.focus();
                    this.postUpdate(),
                    this.triggerChangeEvent()
                }
                if (!a && !s)
                    if (this.state.hasFocus = "focus" == i && +new Date,
                    this.toggleFocusClass(this.state.hasFocus),
                    "mix" != n.mode) {
                        if ("focus" == i)
                            return this.trigger("focus", o),
                            void (0 === n.dropdown.enabled && this.dropdown.show());
                        "blur" == i && (this.trigger("blur", o),
                        this.loading(!1),
                        "select" == this.settings.mode && l && (t = ""),
                        ("select" == this.settings.mode && t ? !this.value.length || this.value[0].value != t : t && !this.state.actions.selectOption && n.addTagOnBlur) && this.addTags(t, !0),
                        "select" != this.settings.mode || t || this.removeTags()),
                        this.DOM.input.removeAttribute("style"),
                        this.dropdown.hide()
                    } else
                        "focus" == i ? this.trigger("focus", o) : "blur" == e.type && (this.trigger("blur", o),
                        this.loading(!1),
                        this.dropdown.hide(),
                        this.state.dropdown.visible = void 0,
                        this.setStateSelection())
            },
            onWindowKeyDown: function(e) {
                var t, n = document.activeElement;
                if (n.classList.contains(this.settings.classNames.tag) && this.DOM.scope.contains(document.activeElement))
                    switch (t = n.nextElementSibling,
                    e.key) {
                    case "Backspace":
                        this.removeTags(n),
                        (t || this.DOM.input).focus();
                        break;
                    case "Enter":
                        setTimeout(this.editTag.bind(this), 0, n)
                    }
            },
            onKeydown: function(e) {
                var t = this
                  , n = this.trim(e.target.textContent);
                if (this.trigger("keydown", {
                    originalEvent: this.cloneEvent(e)
                }),
                "mix" == this.settings.mode) {
                    switch (e.key) {
                    case "Left":
                    case "ArrowLeft":
                        this.state.actions.ArrowLeft = !0;
                        break;
                    case "Delete":
                    case "Backspace":
                        if (this.state.editing)
                            return;
                        var i, r, o, a = document.getSelection(), s = "Delete" == e.key && a.anchorOffset == (a.anchorNode.length || 0), l = 1 == a.anchorNode.nodeType || !a.anchorOffset && a.anchorNode.previousElementSibling, d = u(this.DOM.input.innerHTML), f = this.getTagElms();
                        if ("edit" == this.settings.backspace && l)
                            return i = 1 == a.anchorNode.nodeType ? null : a.anchorNode.previousElementSibling,
                            setTimeout(this.editTag.bind(this), 0, i),
                            void e.preventDefault();
                        if (g() && l)
                            return o = c(l),
                            l.hasAttribute("readonly") || l.remove(),
                            this.DOM.input.focus(),
                            void setTimeout((function() {
                                t.placeCaretAfterNode(o),
                                t.DOM.input.click()
                            }
                            ));
                        if ("BR" == a.anchorNode.nodeName)
                            return;
                        if ((s || l) && 1 == a.anchorNode.nodeType ? r = 0 == a.anchorOffset ? s ? f[0] : null : f[a.anchorOffset - 1] : s ? r = a.anchorNode.nextElementSibling : l && (r = l),
                        3 == a.anchorNode.nodeType && !a.anchorNode.nodeValue && a.anchorNode.previousElementSibling && e.preventDefault(),
                        (l || s) && !this.settings.backspace)
                            return void e.preventDefault();
                        if ("Range" != a.type && !a.anchorOffset && a.anchorNode == this.DOM.input && "Delete" != e.key)
                            return void e.preventDefault();
                        if ("Range" != a.type && r && r.hasAttribute("readonly"))
                            return void this.placeCaretAfterNode(c(r));
                        clearTimeout(y),
                        y = setTimeout((function() {
                            var e = document.getSelection()
                              , n = u(t.DOM.input.innerHTML)
                              , i = e.anchorNode.previousElementSibling;
                            if (!g() && n.length >= d.length && i && !i.hasAttribute("readonly") && (t.removeTags(i),
                            t.fixFirefoxLastTagNoCaret(),
                            2 == t.DOM.input.children.length && "BR" == t.DOM.input.children[1].tagName))
                                return t.DOM.input.innerHTML = "",
                                t.value.length = 0,
                                !0;
                            t.value = [].map.call(f, (function(e, n) {
                                var i = t.tagData(e);
                                if (e.parentNode || i.readonly)
                                    return i;
                                t.trigger("remove", {
                                    tag: e,
                                    index: n,
                                    data: i
                                })
                            }
                            )).filter((function(e) {
                                return e
                            }
                            ))
                        }
                        ), 20)
                    }
                    return !0
                }
                switch (e.key) {
                case "Backspace":
                    this.state.dropdown.visible && "manual" != this.settings.dropdown.position || "" != n && 8203 != n.charCodeAt(0) || (!0 === this.settings.backspace ? this.removeTags() : "edit" == this.settings.backspace && setTimeout(this.editTag.bind(this), 0));
                    break;
                case "Esc":
                case "Escape":
                    if (this.state.dropdown.visible)
                        return;
                    e.target.blur();
                    break;
                case "Down":
                case "ArrowDown":
                    this.state.dropdown.visible || this.dropdown.show();
                    break;
                case "ArrowRight":
                    var p = this.state.inputSuggestion || this.state.ddItemData;
                    if (p && this.settings.autoComplete.rightKey)
                        return void this.addTags([p], !0);
                    break;
                case "Tab":
                    var h = "select" == this.settings.mode;
                    if (!n || h)
                        return !0;
                    e.preventDefault();
                case "Enter":
                    if (this.state.dropdown.visible || 229 == e.keyCode)
                        return;
                    e.preventDefault(),
                    setTimeout((function() {
                        t.state.actions.selectOption || t.addTags(n, !0)
                    }
                    ))
                }
            },
            onInput: function(e) {
                if ("mix" == this.settings.mode)
                    return this.events.callbacks.onMixTagsInput.call(this, e);
                var t = this.input.normalize.call(this)
                  , n = t.length >= this.settings.dropdown.enabled
                  , i = {
                    value: t,
                    inputElm: this.DOM.input
                };
                i.isValid = this.validateTag({
                    value: t
                }),
                this.state.inputText != t && (this.input.set.call(this, t, !1),
                -1 != t.search(this.settings.delimiters) ? this.addTags(t) && this.input.set.call(this) : this.settings.dropdown.enabled >= 0 && this.dropdown[n ? "show" : "hide"](t),
                this.trigger("input", i))
            },
            onMixTagsInput: function(e) {
                var t, n, i, r, o, a, s, l, u = this, c = this.settings, d = this.value.length, f = this.getTagElms(), h = document.createDocumentFragment(), m = window.getSelection().getRangeAt(0), v = [].map.call(f, (function(e) {
                    return u.tagData(e).value
                }
                ));
                if ("deleteContentBackward" == e.inputType && g() && this.events.callbacks.onKeydown.call(this, {
                    target: e.target,
                    key: "Backspace"
                }),
                this.value.slice().forEach((function(e) {
                    e.readonly && !v.includes(e.value) && h.appendChild(u.createTagElem(e))
                }
                )),
                h.childNodes.length && (m.insertNode(h),
                this.setRangeAtStartEnd(!1, h.lastChild)),
                f.length != d)
                    return this.value = [].map.call(this.getTagElms(), (function(e) {
                        return u.tagData(e)
                    }
                    )),
                    void this.update({
                        withoutChangeEvent: !0
                    });
                if (this.hasMaxTags())
                    return !0;
                if (window.getSelection && (a = window.getSelection()).rangeCount > 0 && 3 == a.anchorNode.nodeType) {
                    if ((m = a.getRangeAt(0).cloneRange()).collapse(!0),
                    m.setStart(a.focusNode, 0),
                    i = (t = m.toString().slice(0, m.endOffset)).split(c.pattern).length - 1,
                    (n = t.match(c.pattern)) && (r = t.slice(t.lastIndexOf(n[n.length - 1]))),
                    r) {
                        if (this.state.actions.ArrowLeft = !1,
                        this.state.tag = {
                            prefix: r.match(c.pattern)[0],
                            value: r.replace(c.pattern, "")
                        },
                        this.state.tag.baseOffset = a.baseOffset - this.state.tag.value.length,
                        l = this.state.tag.value.match(c.delimiters))
                            return this.state.tag.value = this.state.tag.value.replace(c.delimiters, ""),
                            this.state.tag.delimiters = l[0],
                            this.addTags(this.state.tag.value, c.dropdown.clearOnSelect),
                            void this.dropdown.hide();
                        o = this.state.tag.value.length >= c.dropdown.enabled;
                        try {
                            s = (s = this.state.flaggedTags[this.state.tag.baseOffset]).prefix == this.state.tag.prefix && s.value[0] == this.state.tag.value[0],
                            this.state.flaggedTags[this.state.tag.baseOffset] && !this.state.tag.value && delete this.state.flaggedTags[this.state.tag.baseOffset]
                        } catch (e) {}
                        (s || i < this.state.mixMode.matchedPatternCount) && (o = !1)
                    } else
                        this.state.flaggedTags = {};
                    this.state.mixMode.matchedPatternCount = i
                }
                setTimeout((function() {
                    u.update({
                        withoutChangeEvent: !0
                    }),
                    u.trigger("input", p({}, u.state.tag, {
                        textContent: u.DOM.input.textContent
                    })),
                    u.state.tag && u.dropdown[o ? "show" : "hide"](u.state.tag.value)
                }
                ), 10)
            },
            onInputIE: function(e) {
                var t = this;
                setTimeout((function() {
                    t.events.callbacks.onInput.call(t, e)
                }
                ))
            },
            onClickScope: function(e) {
                var t = this.settings
                  , n = e.target.closest("." + t.classNames.tag)
                  , i = +new Date - this.state.hasFocus;
                if (e.target != this.DOM.scope) {
                    if (!e.target.classList.contains(t.classNames.tagX))
                        return n ? (this.trigger("click", {
                            tag: n,
                            index: this.getNodeIndex(n),
                            data: this.tagData(n),
                            originalEvent: this.cloneEvent(e)
                        }),
                        void (1 !== t.editTags && 1 !== t.editTags.clicks || this.events.callbacks.onDoubleClickScope.call(this, e))) : void (e.target == this.DOM.input && ("mix" == t.mode && this.fixFirefoxLastTagNoCaret(),
                        i > 500) ? this.state.dropdown.visible ? this.dropdown.hide() : 0 === t.dropdown.enabled && "mix" != t.mode && this.dropdown.show() : "select" == t.mode && !this.state.dropdown.visible && this.dropdown.show());
                    this.removeTags(e.target.parentNode)
                } else
                    this.state.hasFocus || this.DOM.input.focus()
            },
            onPaste: function(e) {
                var t, n, i = this;
                e.preventDefault(),
                this.settings.readonly || (t = e.clipboardData || window.clipboardData,
                n = t.getData("Text"),
                this.settings.hooks.beforePaste(e, {
                    tagify: this,
                    pastedText: n,
                    clipboardData: t
                }).then((function(t) {
                    void 0 === t && (t = n),
                    t && (i.injectAtCaret(t, window.getSelection().getRangeAt(0)),
                    "mix" == i.settings.mode ? i.events.callbacks.onMixTagsInput.call(i, e) : i.settings.pasteAsTags ? i.addTags(t, !0) : i.state.inputText = t)
                }
                )).catch((function(e) {
                    return e
                }
                )))
            },
            onEditTagInput: function(e, t) {
                var n = e.closest("." + this.settings.classNames.tag)
                  , r = this.getNodeIndex(n)
                  , o = this.tagData(n)
                  , a = this.input.normalize.call(this, e)
                  , s = n.innerHTML != n.__tagifyTagData.__originalHTML
                  , l = this.validateTag(i({}, this.settings.tagTextProp, a));
                s || !0 !== e.originalIsValid || (l = !0),
                n.classList.toggle(this.settings.classNames.tagInvalid, !0 !== l),
                o.__isValid = l,
                n.title = !0 === l ? o.title || o.value : l,
                a.length >= this.settings.dropdown.enabled && (this.state.editing && (this.state.editing.value = a),
                this.dropdown.show(a)),
                this.trigger("edit:input", {
                    tag: n,
                    index: r,
                    data: p({}, this.value[r], {
                        newValue: a
                    }),
                    originalEvent: this.cloneEvent(t)
                })
            },
            onEditTagFocus: function(e) {
                this.state.editing = {
                    scope: e,
                    input: e.querySelector("[contenteditable]")
                }
            },
            onEditTagBlur: function(e) {
                var t;
                if (this.state.hasFocus || this.toggleFocusClass(),
                this.DOM.scope.contains(e)) {
                    var n, r, o = this.settings, a = e.closest("." + o.classNames.tag), s = this.input.normalize.call(this, e), l = this.tagData(a).__originalData, u = a.innerHTML != a.__tagifyTagData.__originalHTML, c = this.validateTag(i({}, o.tagTextProp, s));
                    if (s)
                        if (u) {
                            if (n = this.hasMaxTags(),
                            r = this.getWhitelistItem(s) || p({}, l, (i(t = {}, o.tagTextProp, s),
                            i(t, "value", s),
                            i(t, "__isValid", c),
                            t)),
                            o.transformTag.call(this, r, l),
                            !0 !== (c = !n && this.validateTag(i({}, o.tagTextProp, r[o.tagTextProp])))) {
                                if (this.trigger("invalid", {
                                    data: r,
                                    tag: a,
                                    message: c
                                }),
                                o.editTags.keepInvalid)
                                    return;
                                o.keepInvalidTags ? r.__isValid = c : r = l
                            } else
                                o.keepInvalidTags && (delete r.title,
                                delete r["aria-invalid"],
                                delete r.class);
                            this.onEditTagDone(a, r)
                        } else
                            this.onEditTagDone(a, l);
                    else
                        this.onEditTagDone(a)
                }
            },
            onEditTagkeydown: function(e, t) {
                switch (this.trigger("edit:keydown", {
                    originalEvent: this.cloneEvent(e)
                }),
                e.key) {
                case "Esc":
                case "Escape":
                    t.innerHTML = t.__tagifyTagData.__originalHTML;
                case "Enter":
                case "Tab":
                    e.preventDefault(),
                    e.target.blur()
                }
            },
            onDoubleClickScope: function(e) {
                var t, n, i = e.target.closest("." + this.settings.classNames.tag), r = this.settings;
                i && (t = i.classList.contains(this.settings.classNames.tagEditing),
                n = i.hasAttribute("readonly"),
                "select" == r.mode || r.readonly || t || n || !this.settings.editTags || this.editTag(i),
                this.toggleFocusClass(!0),
                this.trigger("dblclick", {
                    tag: i,
                    index: this.getNodeIndex(i),
                    data: this.tagData(i)
                }))
            }
        }
    };
    function T(e, t) {
        return e ? e.previousElementSibling && e.previousElementSibling.classList.contains("tagify") ? (console.warn("Tagify: ", "input element is already Tagified", e),
        this) : (p(this, function(e) {
            var t = document.createTextNode("");
            function i(e, n, i) {
                i && n.split(/\s+/g).forEach((function(n) {
                    return t[e + "EventListener"].call(t, n, i)
                }
                ))
            }
            return {
                off: function(e, t) {
                    return i("remove", e, t),
                    this
                },
                on: function(e, t) {
                    return t && "function" == typeof t && i("add", e, t),
                    this
                },
                trigger: function(i, r, o) {
                    var a;
                    if (o = o || {
                        cloneData: !0
                    },
                    i)
                        if (e.settings.isJQueryPlugin)
                            "remove" == i && (i = "removeTag"),
                            jQuery(e.DOM.originalInput).triggerHandler(i, [r]);
                        else {
                            try {
                                var s = "object" === n(r) ? r : {
                                    value: r
                                };
                                if ((s = o.cloneData ? p({}, s) : s).tagify = this,
                                r instanceof Object)
                                    for (var l in r)
                                        r[l]instanceof HTMLElement && (s[l] = r[l]);
                                a = new CustomEvent(i,{
                                    detail: s
                                })
                            } catch (e) {
                                console.warn(e)
                            }
                            t.dispatchEvent(a)
                        }
                }
            }
        }(this)),
        this.isFirefox = "undefined" != typeof InstallTrigger,
        this.isIE = window.document.documentMode,
        this.applySettings(e, t || {}),
        this.state = {
            inputText: "",
            editing: !1,
            actions: {},
            mixMode: {},
            dropdown: {},
            flaggedTags: {}
        },
        this.value = [],
        this.listeners = {},
        this.DOM = {},
        this.build(e),
        v.call(this),
        this.getCSSVars(),
        this.loadOriginalValues(),
        this.events.customBinding.call(this),
        this.events.binding.call(this),
        void (e.autofocus && this.DOM.input.focus())) : (console.warn("Tagify: ", "input element not found", e),
        this)
    }
    return T.prototype = {
        _dropdown: b,
        customEventsList: ["change", "add", "remove", "invalid", "input", "click", "keydown", "focus", "blur", "edit:input", "edit:beforeUpdate", "edit:updated", "edit:start", "edit:keydown", "dropdown:show", "dropdown:hide", "dropdown:select", "dropdown:updated", "dropdown:noMatch", "dropdown:scroll"],
        dataProps: ["__isValid", "__removed", "__originalData", "__originalHTML", "__tagId"],
        trim: function(e) {
            return this.settings.trim && e && "string" == typeof e ? e.trim() : e
        },
        parseHTML: function(e) {
            return (new DOMParser).parseFromString(e.trim(), "text/html").body.firstElementChild
        },
        templates: {
            wrapper: function(e, t) {
                return '<tags class="'.concat(t.classNames.namespace, " ").concat(t.mode ? "".concat(t.classNames[t.mode + "Mode"]) : "", " ").concat(e.className, '"\n                    ').concat(t.readonly ? "readonly" : "", "\n                    ").concat(t.disabled ? "disabled" : "", "\n                    ").concat(t.required ? "required" : "", '\n                    tabIndex="-1">\n            <span ').concat(t.readonly && "mix" == t.mode ? "" : "contenteditable", ' data-placeholder="').concat(t.placeholder || "&#8203;", '" aria-placeholder="').concat(t.placeholder || "", '"\n                class="').concat(t.classNames.input, '"\n                role="textbox"\n                aria-autocomplete="both"\n                aria-multiline="').concat("mix" == t.mode, '"></span>\n        </tags>')
            },
            tag: function(e, t) {
                var n = this.settings;
                return '<tag title="'.concat(e.title || e.value, "\"\n                    contenteditable='false'\n                    spellcheck='false'\n                    tabIndex=\"").concat(n.a11y.focusableTags ? 0 : -1, '"\n                    class="').concat(n.classNames.tag, " ").concat(e.class || "", '"\n                    ').concat(this.getAttributes(e), ">\n            <x title='' class=\"").concat(n.classNames.tagX, "\" role='button' aria-label='remove tag'></x>\n            <div>\n                <span class=\"").concat(n.classNames.tagText, '">').concat(e[n.tagTextProp] || e.value, "</span>\n            </div>\n        </tag>")
            },
            dropdown: function(e) {
                var t = e.dropdown
                  , n = "manual" == t.position
                  , i = "".concat(e.classNames.dropdown);
                return '<div class="'.concat(n ? "" : i, " ").concat(t.classname, '" role="listbox" aria-labelledby="dropdown">\n                    <div class="').concat(e.classNames.dropdownWrapper, '"></div>\n                </div>')
            },
            dropdownItem: function(e, t) {
                return "<div ".concat(this.getAttributes(e), "\n                    class='").concat(this.settings.classNames.dropdownItem, " ").concat(e.class ? e.class : "", '\'\n                    tabindex="0"\n                    role="option">').concat(e.value, "</div>")
            },
            dropdownItemNoMatch: null
        },
        parseTemplate: function(e, t) {
            return e = this.settings.templates[e] || e,
            this.parseHTML(e.apply(this, t))
        },
        set whitelist(e) {
            this.settings.whitelist = e && Array.isArray(e) ? e : []
        },
        get whitelist() {
            return this.settings.whitelist
        },
        applySettings: function(e, n) {
            m.templates = this.templates;
            var i = this.settings = p({}, m, n);
            i.disabled = e.hasAttribute("disabled"),
            i.readonly = e.hasAttribute("readonly"),
            i.placeholder = e.getAttribute("placeholder") || i.placeholder || "",
            i.required = e.hasAttribute("required");
            var r = function(e) {
                Object.defineProperty(i.classNames, e + "Selector", {
                    get: function() {
                        return "." + this[e].split(" ")[0]
                    }
                })
            };
            for (var o in i.classNames)
                r(o);
            if (this.isIE && (i.autoComplete = !1),
            ["whitelist", "blacklist"].forEach((function(t) {
                var n = e.getAttribute("data-" + t);
                n && (n = n.split(i.delimiters))instanceof Array && (i[t] = n)
            }
            )),
            "autoComplete"in n && !f(n.autoComplete) && (i.autoComplete = m.autoComplete,
            i.autoComplete.enabled = n.autoComplete),
            "mix" == i.mode && (i.autoComplete.rightKey = !0,
            i.delimiters = n.delimiters || null,
            i.tagTextProp && !i.dropdown.searchKeys.includes(i.tagTextProp) && i.dropdown.searchKeys.push(i.tagTextProp)),
            e.pattern)
                try {
                    i.pattern = new RegExp(e.pattern)
                } catch (e) {}
            if (this.settings.delimiters)
                try {
                    i.delimiters = new RegExp(this.settings.delimiters,"g")
                } catch (e) {}
            this.TEXTS = t(t({}, w), i.texts || {}),
            "select" == i.mode && (i.dropdown.enabled = 0),
            i.dropdown.appendTarget = n.dropdown && n.dropdown.appendTarget ? n.dropdown.appendTarget : document.body
        },
        getAttributes: function(e) {
            var t, n = this.getCustomAttributes(e), i = "";
            for (t in n)
                i += " " + t + (void 0 !== e[t] ? '="'.concat(n[t], '"') : "");
            return i
        },
        getCustomAttributes: function(e) {
            if (!f(e))
                return "";
            var t, n = {};
            for (t in e)
                "__" != t.slice(0, 2) && "class" != t && e.hasOwnProperty(t) && void 0 !== e[t] && (n[t] = d(e[t]));
            return n
        },
        setStateSelection: function() {
            var e = window.getSelection()
              , t = {
                anchorOffset: e.anchorOffset,
                anchorNode: e.anchorNode,
                range: e.getRangeAt && e.rangeCount && e.getRangeAt(0)
            };
            return this.state.selection = t,
            t
        },
        getCaretGlobalPosition: function() {
            var e = document.getSelection();
            if (e.rangeCount) {
                var t, n, i = e.getRangeAt(0), r = i.startContainer, o = i.startOffset;
                if (o > 0)
                    return (n = document.createRange()).setStart(r, o - 1),
                    n.setEnd(r, o),
                    {
                        left: (t = n.getBoundingClientRect()).right,
                        top: t.top,
                        bottom: t.bottom
                    };
                if (r.getBoundingClientRect)
                    return r.getBoundingClientRect()
            }
            return {
                left: -9999,
                top: -9999
            }
        },
        getCSSVars: function() {
            var e, t, n = getComputedStyle(this.DOM.scope, null);
            this.CSSVars = {
                tagHideTransition: (e = function(e) {
                    if (!e)
                        return {};
                    var t = (e = e.trim().split(" ")[0]).split(/\d+/g).filter((function(e) {
                        return e
                    }
                    )).pop().trim();
                    return {
                        value: +e.split(t).filter((function(e) {
                            return e
                        }
                        ))[0].trim(),
                        unit: t
                    }
                }(("tag-hide-transition",
                n.getPropertyValue("--tag-hide-transition"))),
                t = e.value,
                "s" == e.unit ? 1e3 * t : t)
            }
        },
        build: function(e) {
            var t = this.DOM;
            this.settings.mixMode.integrated ? (t.originalInput = null,
            t.scope = e,
            t.input = e) : (t.originalInput = e,
            t.scope = this.parseTemplate("wrapper", [e, this.settings]),
            t.input = t.scope.querySelector(this.settings.classNames.inputSelector),
            e.parentNode.insertBefore(t.scope, e))
        },
        destroy: function() {
            this.events.unbindGlobal.call(this),
            this.DOM.scope.parentNode.removeChild(this.DOM.scope),
            this.dropdown.hide(!0),
            clearTimeout(this.dropdownHide__bindEventsTimeout)
        },
        loadOriginalValues: function(e) {
            var t, n = this.settings;
            if (void 0 === e && (e = n.mixMode.integrated ? this.DOM.input.textContent : this.DOM.originalInput.value),
            this.removeAllTags({
                withoutChangeEvent: !0
            }),
            e)
                if ("mix" == n.mode)
                    this.parseMixTags(e.trim()),
                    (t = this.DOM.input.lastChild) && "BR" == t.tagName || this.DOM.input.insertAdjacentHTML("beforeend", "<br>");
                else {
                    try {
                        JSON.parse(e)instanceof Array && (e = JSON.parse(e))
                    } catch (e) {}
                    this.addTags(e).forEach((function(e) {
                        return e && e.classList.add(n.classNames.tagNoAnimation)
                    }
                    ))
                }
            else
                this.postUpdate();
            this.state.lastOriginalValueReported = n.mixMode.integrated ? "" : this.DOM.originalInput.value,
            this.state.loadedOriginalValues = !0
        },
        cloneEvent: function(e) {
            var t = {};
            for (var n in e)
                t[n] = e[n];
            return t
        },
        loading: function(e) {
            return this.state.isLoading = e,
            this.DOM.scope.classList[e ? "add" : "remove"](this.settings.classNames.scopeLoading),
            this
        },
        tagLoading: function(e, t) {
            return e && e.classList[t ? "add" : "remove"](this.settings.classNames.tagLoading),
            this
        },
        toggleClass: function(e, t) {
            "string" == typeof e && this.DOM.scope.classList.toggle(e, t)
        },
        toggleFocusClass: function(e) {
            this.toggleClass(this.settings.classNames.focus, !!e)
        },
        triggerChangeEvent: function() {
            if (!this.settings.mixMode.integrated) {
                var e = this.DOM.originalInput
                  , t = this.state.lastOriginalValueReported !== e.value
                  , n = new CustomEvent("change",{
                    bubbles: !0
                });
                t && (this.state.lastOriginalValueReported = e.value,
                n.simulated = !0,
                e._valueTracker && e._valueTracker.setValue(Math.random()),
                e.dispatchEvent(n),
                this.trigger("change", this.state.lastOriginalValueReported),
                e.value = this.state.lastOriginalValueReported)
            }
        },
        events: x,
        fixFirefoxLastTagNoCaret: function() {},
        placeCaretAfterNode: function(e) {
            if (e && e.parentNode) {
                var t = e.nextSibling
                  , n = window.getSelection()
                  , i = n.getRangeAt(0);
                n.rangeCount && (i.setStartBefore(t || e),
                i.setEndBefore(t || e),
                n.removeAllRanges(),
                n.addRange(i))
            }
        },
        insertAfterTag: function(e, t) {
            if (t = t || this.settings.mixMode.insertAfterTag,
            e && e.parentNode && t)
                return t = "string" == typeof t ? document.createTextNode(t) : t,
                e.parentNode.insertBefore(t, e.nextSibling),
                t
        },
        editTag: function(e, t) {
            var n = this;
            e = e || this.getLastTag(),
            t = t || {},
            this.dropdown.hide();
            var i = this.settings;
            function r() {
                return e.querySelector(i.classNames.tagTextSelector)
            }
            var o = r()
              , a = this.getNodeIndex(e)
              , s = this.tagData(e)
              , l = this.events.callbacks
              , u = this
              , c = !0;
            if (o) {
                if (!(s instanceof Object && "editable"in s) || s.editable)
                    return o.setAttribute("contenteditable", !0),
                    e.classList.add(i.classNames.tagEditing),
                    this.tagData(e, {
                        __originalData: p({}, s),
                        __originalHTML: e.innerHTML
                    }),
                    o.addEventListener("focus", l.onEditTagFocus.bind(this, e)),
                    o.addEventListener("blur", (function() {
                        setTimeout((function() {
                            return l.onEditTagBlur.call(u, r())
                        }
                        ))
                    }
                    )),
                    o.addEventListener("input", l.onEditTagInput.bind(this, o)),
                    o.addEventListener("keydown", (function(t) {
                        return l.onEditTagkeydown.call(n, t, e)
                    }
                    )),
                    o.focus(),
                    this.setRangeAtStartEnd(!1, o),
                    t.skipValidation || (c = this.editTagToggleValidity(e)),
                    o.originalIsValid = c,
                    this.trigger("edit:start", {
                        tag: e,
                        index: a,
                        data: s,
                        isValid: c
                    }),
                    this
            } else
                console.warn("Cannot find element in Tag template: .", i.classNames.tagTextSelector)
        },
        editTagToggleValidity: function(e, t) {
            var n;
            if (t = t || this.tagData(e))
                return (n = !("__isValid"in t) || !0 === t.__isValid) || this.removeTagsFromValue(e),
                this.update(),
                e.classList.toggle(this.settings.classNames.tagNotAllowed, !n),
                t.__isValid;
            console.warn("tag has no data: ", e, t)
        },
        onEditTagDone: function(e, t) {
            t = t || {};
            var n = {
                tag: e = e || this.state.editing.scope,
                index: this.getNodeIndex(e),
                previousData: this.tagData(e),
                data: t
            };
            this.trigger("edit:beforeUpdate", n, {
                cloneData: !1
            }),
            this.state.editing = !1,
            delete t.__originalData,
            delete t.__originalHTML,
            e && t[this.settings.tagTextProp] ? (e = this.replaceTag(e, t),
            this.editTagToggleValidity(e, t),
            this.settings.a11y.focusableTags && e.focus()) : e && this.removeTags(e),
            this.trigger("edit:updated", n),
            this.dropdown.hide(),
            this.settings.keepInvalidTags && this.reCheckInvalidTags()
        },
        replaceTag: function(e, t) {
            t && t.value || (t = e.__tagifyTagData),
            t.__isValid && 1 != t.__isValid && p(t, this.getInvalidTagAttrs(t, t.__isValid));
            var n = this.createTagElem(t);
            return e.parentNode.replaceChild(n, e),
            this.updateValueByDOMTags(),
            n
        },
        updateValueByDOMTags: function() {
            var e = this;
            this.value.length = 0,
            [].forEach.call(this.getTagElms(), (function(t) {
                t.classList.contains(e.settings.classNames.tagNotAllowed.split(" ")[0]) || e.value.push(e.tagData(t))
            }
            )),
            this.update()
        },
        setRangeAtStartEnd: function(e, t) {
            e = "number" == typeof e ? e : !!e,
            t = (t = t || this.DOM.input).lastChild || t;
            var n = document.getSelection();
            try {
                n.rangeCount >= 1 && ["Start", "End"].forEach((function(i) {
                    return n.getRangeAt(0)["set" + i](t, e || t.length)
                }
                ))
            } catch (e) {
                console.warn("Tagify: ", e)
            }
        },
        injectAtCaret: function(e, t) {
            if (t = t || this.state.selection.range)
                return "string" == typeof e && (e = document.createTextNode(e)),
                t.deleteContents(),
                t.insertNode(e),
                this.setRangeAtStartEnd(!1, e),
                this.updateValueByDOMTags(),
                this.update(),
                this
        },
        input: {
            set: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                  , n = this.settings.dropdown.closeOnSelect;
                this.state.inputText = e,
                t && (this.DOM.input.innerHTML = d("" + e)),
                !e && n && this.dropdown.hide.bind(this),
                this.input.autocomplete.suggest.call(this),
                this.input.validate.call(this)
            },
            validate: function() {
                var e = !this.state.inputText || !0 === this.validateTag({
                    value: this.state.inputText
                });
                return this.DOM.input.classList.toggle(this.settings.classNames.inputInvalid, !e),
                e
            },
            normalize: function(e) {
                var t = e || this.DOM.input
                  , n = [];
                t.childNodes.forEach((function(e) {
                    return 3 == e.nodeType && n.push(e.nodeValue)
                }
                )),
                n = n.join("\n");
                try {
                    n = n.replace(/(?:\r\n|\r|\n)/g, this.settings.delimiters.source.charAt(0))
                } catch (e) {}
                return n = n.replace(/\s/g, " "),
                this.settings.trim && (n = n.replace(/^\s+/, "")),
                n
            },
            autocomplete: {
                suggest: function(e) {
                    if (this.settings.autoComplete.enabled) {
                        "string" == typeof (e = e || {}) && (e = {
                            value: e
                        });
                        var t = e.value ? "" + e.value : ""
                          , n = t.substr(0, this.state.inputText.length).toLowerCase()
                          , i = t.substring(this.state.inputText.length);
                        t && this.state.inputText && n == this.state.inputText.toLowerCase() ? (this.DOM.input.setAttribute("data-suggest", i),
                        this.state.inputSuggestion = e) : (this.DOM.input.removeAttribute("data-suggest"),
                        delete this.state.inputSuggestion)
                    }
                },
                set: function(e) {
                    var t = this.DOM.input.getAttribute("data-suggest")
                      , n = e || (t ? this.state.inputText + t : null);
                    return !!n && ("mix" == this.settings.mode ? this.replaceTextWithNode(document.createTextNode(this.state.tag.prefix + n)) : (this.input.set.call(this, n),
                    this.setRangeAtStartEnd()),
                    this.input.autocomplete.suggest.call(this),
                    this.dropdown.hide(),
                    !0)
                }
            }
        },
        getTagIdx: function(e) {
            return this.value.findIndex((function(t) {
                return t.__tagId == (e || {}).__tagId
            }
            ))
        },
        getNodeIndex: function(e) {
            var t = 0;
            if (e)
                for (; e = e.previousElementSibling; )
                    t++;
            return t
        },
        getTagElms: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            var i = "." + [].concat(r(this.settings.classNames.tag.split(" ")), t).join(".");
            return [].slice.call(this.DOM.scope.querySelectorAll(i))
        },
        getLastTag: function() {
            var e = this.DOM.scope.querySelectorAll("".concat(this.settings.classNames.tagSelector, ":not(.").concat(this.settings.classNames.tagHide, "):not([readonly])"));
            return e[e.length - 1]
        },
        tagData: function(e, t, n) {
            return e ? (t && (e.__tagifyTagData = n ? t : p({}, e.__tagifyTagData || {}, t)),
            e.__tagifyTagData) : (console.warn("tag elment doesn't exist", e, t),
            t)
        },
        isTagDuplicate: function(e, t) {
            var n = this
              , i = this.settings;
            return "select" != i.mode && this.value.reduce((function(r, o) {
                return s(n.trim("" + e), o.value, t || i.dropdown.caseSensitive) ? r + 1 : r
            }
            ), 0)
        },
        getTagIndexByValue: function(e) {
            var t = this
              , n = [];
            return this.getTagElms().forEach((function(i, r) {
                s(t.trim(i.textContent), e, t.settings.dropdown.caseSensitive) && n.push(r)
            }
            )),
            n
        },
        getTagElmByValue: function(e) {
            var t = this.getTagIndexByValue(e)[0];
            return this.getTagElms()[t]
        },
        flashTag: function(e) {
            var t = this;
            e && (e.classList.add(this.settings.classNames.tagFlash),
            setTimeout((function() {
                e.classList.remove(t.settings.classNames.tagFlash)
            }
            ), 100))
        },
        isTagBlacklisted: function(e) {
            return e = this.trim(e.toLowerCase()),
            this.settings.blacklist.filter((function(t) {
                return ("" + t).toLowerCase() == e
            }
            )).length
        },
        isTagWhitelisted: function(e) {
            return !!this.getWhitelistItem(e)
        },
        getWhitelistItem: function(e, t, n) {
            t = t || "value";
            var i, r = this.settings;
            return (n = n || r.whitelist).some((function(n) {
                var o = "string" == typeof n ? n : n[t] || n.value;
                if (s(o, e, r.dropdown.caseSensitive, r.trim))
                    return i = "string" == typeof n ? {
                        value: n
                    } : n,
                    !0
            }
            )),
            i || "value" != t || "value" == r.tagTextProp || (i = this.getWhitelistItem(e, r.tagTextProp, n)),
            i
        },
        validateTag: function(e) {
            var t = this.settings
              , n = "value"in e ? "value" : t.tagTextProp
              , i = this.trim(e[n] + "");
            return (e[n] + "").trim() ? t.pattern && t.pattern instanceof RegExp && !t.pattern.test(i) ? this.TEXTS.pattern : !t.duplicates && this.isTagDuplicate(i, this.state.editing) ? this.TEXTS.duplicate : this.isTagBlacklisted(i) || t.enforceWhitelist && !this.isTagWhitelisted(i) ? this.TEXTS.notAllowed : !t.validate || t.validate(e) : this.TEXTS.empty
        },
        getInvalidTagAttrs: function(e, t) {
            return {
                "aria-invalid": !0,
                class: "".concat(e.class || "", " ").concat(this.settings.classNames.tagNotAllowed).trim(),
                title: t
            }
        },
        hasMaxTags: function() {
            return this.value.length >= this.settings.maxTags && this.TEXTS.exceed
        },
        setReadonly: function(e, t) {
            var n = this.settings;
            document.activeElement.blur(),
            n[t || "readonly"] = e,
            this.DOM.scope[(e ? "set" : "remove") + "Attribute"](t || "readonly", !0),
            "mix" == n.mode && (this.DOM.input.contentEditable = !e)
        },
        setDisabled: function(e) {
            this.setReadonly(e, "disabled")
        },
        normalizeTags: function(e) {
            var t = this
              , n = this.settings
              , o = n.whitelist
              , a = n.delimiters
              , s = n.mode
              , l = n.tagTextProp;
            n.enforceWhitelist;
            var u = []
              , c = !!o && o[0]instanceof Object
              , d = e instanceof Array
              , f = function(e) {
                return (e + "").split(a).filter((function(e) {
                    return e
                }
                )).map((function(e) {
                    var n;
                    return i(n = {}, l, t.trim(e)),
                    i(n, "value", t.trim(e)),
                    n
                }
                ))
            };
            if ("number" == typeof e && (e = e.toString()),
            "string" == typeof e) {
                if (!e.trim())
                    return [];
                e = f(e)
            } else if (d) {
                var p;
                e = (p = []).concat.apply(p, r(e.map((function(e) {
                    return e.value ? e : f(e)
                }
                ))))
            }
            return c && (e.forEach((function(e) {
                var n = u.map((function(e) {
                    return e.value
                }
                ))
                  , i = t.dropdown.filterListItems.call(t, e[l], {
                    exact: !0
                }).filter((function(e) {
                    return !n.includes(e.value)
                }
                ))
                  , r = i.length > 1 ? t.getWhitelistItem(e[l], l, i) : i[0];
                r && r instanceof Object ? u.push(r) : "mix" != s && (null == e.value && (e.value = e[l]),
                u.push(e))
            }
            )),
            e = u),
            e
        },
        parseMixTags: function(e) {
            var t = this
              , n = this.settings
              , i = n.mixTagsInterpolator
              , r = n.duplicates
              , o = n.transformTag
              , a = n.enforceWhitelist
              , s = n.maxTags
              , l = n.tagTextProp
              , u = [];
            return e = e.split(i[0]).map((function(e, n) {
                var c, d, f, p = e.split(i[1]), h = p[0], g = u.length == s;
                try {
                    if (h == +h)
                        throw Error;
                    d = JSON.parse(h)
                } catch (e) {
                    d = t.normalizeTags(h)[0] || {
                        value: h
                    }
                }
                if (g || !(p.length > 1) || a && !t.isTagWhitelisted(d.value) || !r && t.isTagDuplicate(d.value)) {
                    if (e)
                        return n ? i[0] + e : e
                } else
                    o.call(t, d),
                    d[c = d[l] ? l : "value"] = t.trim(d[c]),
                    f = t.createTagElem(d),
                    u.push(d),
                    f.classList.add(t.settings.classNames.tagNoAnimation),
                    p[0] = f.outerHTML,
                    t.value.push(d);
                return p.join("")
            }
            )).join(""),
            this.DOM.input.innerHTML = e,
            this.DOM.input.appendChild(document.createTextNode("")),
            this.DOM.input.normalize(),
            this.getTagElms().forEach((function(e, n) {
                return t.tagData(e, u[n])
            }
            )),
            this.update({
                withoutChangeEvent: !0
            }),
            e
        },
        replaceTextWithNode: function(e, t) {
            if (this.state.tag || t) {
                t = t || this.state.tag.prefix + this.state.tag.value;
                var n, i, r = window.getSelection(), o = r.anchorNode, a = this.state.tag.delimiters ? this.state.tag.delimiters.length : 0;
                return o.splitText(r.anchorOffset - a),
                n = o.nodeValue.lastIndexOf(t),
                i = o.splitText(n),
                e && o.parentNode.replaceChild(e, i),
                !0
            }
        },
        selectTag: function(e, t) {
            if (!this.settings.enforceWhitelist || this.isTagWhitelisted(t.value)) {
                this.input.set.call(this, t[this.settings.tagTextProp || "value"], !0),
                this.state.actions.selectOption && setTimeout(this.setRangeAtStartEnd.bind(this));
                var n = this.getLastTag();
                return n ? this.replaceTag(n, t) : this.appendTag(e),
                this.value[0] = t,
                this.trigger("add", {
                    tag: e,
                    data: t
                }),
                this.update(),
                [e]
            }
        },
        addEmptyTag: function(e) {
            var t = p({
                value: ""
            }, e || {})
              , n = this.createTagElem(t);
            this.tagData(n, t),
            this.appendTag(n),
            this.editTag(n, {
                skipValidation: !0
            })
        },
        addTags: function(e, t) {
            var n = this
              , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.settings.skipInvalid
              , r = []
              , o = this.settings
              , a = document.createDocumentFragment();
            return e && 0 != e.length ? (e = this.normalizeTags(e),
            "mix" == o.mode ? this.addMixTags(e) : ("select" == o.mode && (t = !1),
            this.DOM.input.removeAttribute("style"),
            e.forEach((function(e) {
                var t, s = {}, l = Object.assign({}, e, {
                    value: e.value + ""
                });
                if ((e = Object.assign({}, l)).__isValid = n.hasMaxTags() || n.validateTag(e),
                o.transformTag.call(n, e),
                !0 !== e.__isValid) {
                    if (i)
                        return;
                    p(s, n.getInvalidTagAttrs(e, e.__isValid), {
                        __preInvalidData: l
                    }),
                    e.__isValid == n.TEXTS.duplicate && n.flashTag(n.getTagElmByValue(e.value))
                }
                if (e.readonly && (s["aria-readonly"] = !0),
                t = n.createTagElem(e, s),
                r.push(t),
                "select" == o.mode)
                    return n.selectTag(t, e);
                a.appendChild(t),
                e.__isValid && !0 === e.__isValid ? (n.value.push(e),
                n.trigger("add", {
                    tag: t,
                    index: n.value.length - 1,
                    data: e
                })) : (n.trigger("invalid", {
                    data: e,
                    index: n.value.length,
                    tag: t,
                    message: e.__isValid
                }),
                o.keepInvalidTags || setTimeout((function() {
                    return n.removeTags(t, !0)
                }
                ), 1e3)),
                n.dropdown.position()
            }
            )),
            this.appendTag(a),
            this.update(),
            e.length && t && this.input.set.call(this),
            this.dropdown.refilter(),
            r)) : ("select" == o.mode && this.removeAllTags(),
            r)
        },
        addMixTags: function(e) {
            var t = this;
            if (e[0].prefix || this.state.tag)
                return this.prefixedTextToTag(e[0]);
            "string" == typeof e && (e = [{
                value: e
            }]);
            var n = !!this.state.selection
              , i = document.createDocumentFragment();
            return e.forEach((function(e) {
                var n = t.createTagElem(e);
                i.appendChild(n),
                t.insertAfterTag(n)
            }
            )),
            n ? this.injectAtCaret(i) : (this.DOM.input.focus(),
            (n = this.setStateSelection()).range.setStart(this.DOM.input, n.range.endOffset),
            n.range.setEnd(this.DOM.input, n.range.endOffset),
            this.DOM.input.appendChild(i),
            this.updateValueByDOMTags(),
            this.update()),
            i
        },
        prefixedTextToTag: function(e) {
            var t, n = this, i = this.settings, r = this.state.tag.delimiters;
            if (i.transformTag.call(this, e),
            e.prefix = e.prefix || this.state.tag ? this.state.tag.prefix : (i.pattern.source || i.pattern)[0],
            t = this.createTagElem(e),
            this.replaceTextWithNode(t) || this.DOM.input.appendChild(t),
            setTimeout((function() {
                return t.classList.add(n.settings.classNames.tagNoAnimation)
            }
            ), 300),
            this.value.push(e),
            this.update(),
            !r) {
                var o = this.insertAfterTag(t) || t;
                this.placeCaretAfterNode(o)
            }
            return this.state.tag = null,
            this.trigger("add", p({}, {
                tag: t
            }, {
                data: e
            })),
            t
        },
        appendTag: function(e) {
            var t = this.DOM
              , n = t.scope.lastElementChild;
            n === t.input ? t.scope.insertBefore(e, n) : t.scope.appendChild(e)
        },
        createTagElem: function(e, n) {
            e.__tagId = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (function(e) {
                return (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
            }
            ));
            var i, r = p({}, e, t({
                value: d(e.value + "")
            }, n));
            return function(e) {
                for (var t, n = document.createNodeIterator(e, NodeFilter.SHOW_TEXT, null, !1); t = n.nextNode(); )
                    t.textContent.trim() || t.parentNode.removeChild(t)
            }(i = this.parseTemplate("tag", [r])),
            this.tagData(i, e),
            i
        },
        reCheckInvalidTags: function() {
            var e = this
              , t = this.settings;
            this.getTagElms(t.classNames.tagNotAllowed).forEach((function(t, n) {
                var i = e.tagData(t)
                  , r = e.hasMaxTags()
                  , o = e.validateTag(i);
                if (!0 === o && !r)
                    return i = i.__preInvalidData ? i.__preInvalidData : {
                        value: i.value
                    },
                    e.replaceTag(t, i);
                t.title = r || o
            }
            ))
        },
        removeTags: function(e, t, n) {
            var i, r = this;
            e = e && e instanceof HTMLElement ? [e] : e instanceof Array ? e : e ? [e] : [this.getLastTag()],
            i = e.reduce((function(e, t) {
                return t && "string" == typeof t && (t = r.getTagElmByValue(t)),
                t && r.tagData(t) && e.push({
                    node: t,
                    idx: r.getTagIdx(r.tagData(t)),
                    data: r.tagData(t, {
                        __removed: !0
                    })
                }),
                e
            }
            ), []),
            n = "number" == typeof n ? n : this.CSSVars.tagHideTransition,
            "select" == this.settings.mode && (n = 0,
            this.input.set.call(this)),
            1 == i.length && i[0].node.classList.contains(this.settings.classNames.tagNotAllowed) && (t = !0),
            i.length && this.settings.hooks.beforeRemoveTag(i, {
                tagify: this
            }).then((function() {
                function e(e) {
                    e.node.parentNode && (e.node.parentNode.removeChild(e.node),
                    t ? this.settings.keepInvalidTags && this.trigger("remove", {
                        tag: e.node,
                        index: e.idx
                    }) : (this.trigger("remove", {
                        tag: e.node,
                        index: e.idx,
                        data: e.data
                    }),
                    this.dropdown.refilter(),
                    this.dropdown.position(),
                    this.DOM.input.normalize(),
                    this.settings.keepInvalidTags && this.reCheckInvalidTags()))
                }
                n && n > 10 && 1 == i.length ? function(t) {
                    t.node.style.width = parseFloat(window.getComputedStyle(t.node).width) + "px",
                    document.body.clientTop,
                    t.node.classList.add(this.settings.classNames.tagHide),
                    setTimeout(e.bind(this), n, t)
                }
                .call(r, i[0]) : i.forEach(e.bind(r)),
                t || (r.removeTagsFromValue(i.map((function(e) {
                    return e.node
                }
                ))),
                r.update())
            }
            )).catch((function(e) {}
            ))
        },
        removeTagsFromDOM: function() {
            [].slice.call(this.getTagElms()).forEach((function(e) {
                return e.parentNode.removeChild(e)
            }
            ))
        },
        removeTagsFromValue: function(e) {
            var t = this;
            (e = Array.isArray(e) ? e : [e]).forEach((function(e) {
                var n = t.tagData(e)
                  , i = t.getTagIdx(n);
                i > -1 && t.value.splice(i, 1)
            }
            ))
        },
        removeAllTags: function(e) {
            e = e || {},
            this.value = [],
            "mix" == this.settings.mode ? this.DOM.input.innerHTML = "" : this.removeTagsFromDOM(),
            this.dropdown.position(),
            "select" == this.settings.mode && this.input.set.call(this),
            this.update(e)
        },
        postUpdate: function() {
            var e = this.settings.classNames
              , t = "mix" == this.settings.mode ? this.settings.mixMode.integrated ? this.DOM.input.textContent : this.DOM.originalInput.value : this.value.length;
            this.toggleClass(e.hasMaxTags, this.value.length >= this.settings.maxTags),
            this.toggleClass(e.hasNoTags, !this.value.length),
            this.toggleClass(e.empty, !t)
        },
        update: function(e) {
            var t = this.DOM.originalInput;
            this.settings.mixMode.integrated || (t.value = this.getInputValue()),
            this.postUpdate(),
            !(e || {}).withoutChangeEvent && this.state.loadedOriginalValues && this.triggerChangeEvent()
        },
        getInputValue: function() {
            var e = this.getCleanValue();
            return "mix" == this.settings.mode ? this.getMixedTagsAsString(e) : e.length ? this.settings.originalInputValueFormat ? this.settings.originalInputValueFormat(e) : JSON.stringify(e) : ""
        },
        getCleanValue: function(e) {
            return t = e || this.value,
            n = this.dataProps,
            t && Array.isArray(t) && t.map((function(e) {
                return l(e, n)
            }
            ));
            var t, n
        },
        getMixedTagsAsString: function() {
            var e = ""
              , t = this
              , n = this.settings.mixTagsInterpolator;
            return function i(r) {
                r.childNodes.forEach((function(r) {
                    if (1 == r.nodeType) {
                        var o = t.tagData(r);
                        if (r.classList.contains(t.settings.classNames.tag) && o) {
                            if (o.__removed)
                                return;
                            return void (e += n[0] + JSON.stringify(l(o, t.dataProps)) + n[1])
                        }
                        "BR" != r.tagName || r.parentNode != t.DOM.input && 1 != r.parentNode.childNodes.length ? "DIV" != r.tagName && "P" != r.tagName || (e += "\r\n",
                        i(r)) : e += "\r\n"
                    } else
                        e += r.textContent
                }
                ))
            }(this.DOM.input),
            e
        }
    },
    T.prototype.removeTag = T.prototype.removeTags,
    T
}
)),
function(e) {
    "function" == typeof define && define.amd ? define(e) : e()
}((function() {
    "use strict";
    function e(e, t) {
        t = t || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };
        var n = document.createEvent("CustomEvent");
        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
        n
    }
    function t(e) {
        return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    var n;
    "".trim || (String.prototype.trim = function() {
        return this.replace(/^[\s﻿]+|[\s﻿]+$/g, "")
    }
    ),
    window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach),
    Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", {
        value: function(e) {
            if (null == this)
                throw new TypeError('"this" is null or not defined');
            var t = Object(this)
              , n = t.length >>> 0;
            if ("function" != typeof e)
                throw new TypeError("predicate must be a function");
            for (var i = arguments[1], r = 0; r < n; ) {
                var o = t[r];
                if (e.call(i, o, r, t))
                    return r;
                r++
            }
            return -1
        },
        configurable: !0,
        writable: !0
    }),
    Array.prototype.includes || (Array.prototype.includes = function(e) {
        return !!~this.indexOf(e)
    }
    ),
    Array.prototype.some || (Array.prototype.some = function(e, t) {
        if (null == this)
            throw new TypeError("Array.prototype.some called on null or undefined");
        if ("function" != typeof e)
            throw new TypeError;
        for (var n = Object(this), i = n.length >>> 0, r = 0; r < i; r++)
            if (r in n && e.call(t, n[r], r, n))
                return !0;
        return !1
    }
    ),
    String.prototype.includes || (String.prototype.includes = function(e, t) {
        return "number" != typeof t && (t = 0),
        !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
    }
    ),
    "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
        value: function(e, t) {
            if (null == e)
                throw new TypeError("Cannot convert undefined or null to object");
            for (var n = Object(e), i = 1; i < arguments.length; i++) {
                var r = arguments[i];
                if (null != r)
                    for (var o in r)
                        Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o])
            }
            return n
        },
        writable: !0,
        configurable: !0
    }),
    e.prototype = window.Event.prototype,
    "function" != typeof window.CustomEvent && (window.CustomEvent = e),
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
    Element.prototype.closest || (Element.prototype.closest = function(e) {
        var t = this;
        if (!document.documentElement.contains(t))
            return null;
        do {
            if (t.matches(e))
                return t;
            t = t.parentElement || t.parentNode
        } while (null !== t && 1 === t.nodeType);
        return null
    }
    ),
    document.execCommand("AutoUrlDetect", !1, !1),
    "document"in self && ((!("classList"in document.createElement("_")) || document.createElementNS && !("classList"in document.createElementNS("http://www.w3.org/2000/svg", "g"))) && function(e) {
        if ("Element"in e) {
            var t = "classList"
              , n = e.Element.prototype
              , i = Object
              , r = String.prototype.trim || function() {
                return this.replace(/^\s+|\s+$/g, "")
            }
              , o = Array.prototype.indexOf || function(e) {
                for (var t = 0, n = this.length; t < n; t++)
                    if (t in this && this[t] === e)
                        return t;
                return -1
            }
              , a = function(e, t) {
                this.name = e,
                this.code = DOMException[e],
                this.message = t
            }
              , s = function(e, t) {
                if ("" === t)
                    throw new a("SYNTAX_ERR","The token must not be empty.");
                if (/\s/.test(t))
                    throw new a("INVALID_CHARACTER_ERR","The token must not contain space characters.");
                return o.call(e, t)
            }
              , l = function(e) {
                for (var t = r.call(e.getAttribute("class") || ""), n = t ? t.split(/\s+/) : [], i = 0, o = n.length; i < o; i++)
                    this.push(n[i]);
                this._updateClassName = function() {
                    e.setAttribute("class", this.toString())
                }
            }
              , u = l.prototype = []
              , c = function() {
                return new l(this)
            };
            if (a.prototype = Error.prototype,
            u.item = function(e) {
                return this[e] || null
            }
            ,
            u.contains = function(e) {
                return ~s(this, e + "")
            }
            ,
            u.add = function() {
                var e, t = arguments, n = 0, i = t.length, r = !1;
                do {
                    e = t[n] + "",
                    ~s(this, e) || (this.push(e),
                    r = !0)
                } while (++n < i);
                r && this._updateClassName()
            }
            ,
            u.remove = function() {
                var e, t, n = arguments, i = 0, r = n.length, o = !1;
                do {
                    for (e = n[i] + "",
                    t = s(this, e); ~t; )
                        this.splice(t, 1),
                        o = !0,
                        t = s(this, e)
                } while (++i < r);
                o && this._updateClassName()
            }
            ,
            u.toggle = function(e, t) {
                var n = this.contains(e)
                  , i = n ? !0 !== t && "remove" : !1 !== t && "add";
                return i && this[i](e),
                !0 === t || !1 === t ? t : !n
            }
            ,
            u.replace = function(e, t) {
                var n = s(e + "");
                ~n && (this.splice(n, 1, t),
                this._updateClassName())
            }
            ,
            u.toString = function() {
                return this.join(" ")
            }
            ,
            i.defineProperty) {
                var d = {
                    get: c,
                    enumerable: !0,
                    configurable: !0
                };
                try {
                    i.defineProperty(n, t, d)
                } catch (e) {
                    void 0 !== e.number && -2146823252 !== e.number || (d.enumerable = !1,
                    i.defineProperty(n, t, d))
                }
            } else
                i.prototype.__defineGetter__ && n.__defineGetter__(t, c)
        }
    }(self),
    function() {
        var e = document.createElement("_");
        if (e.classList.add("c1", "c2"),
        !e.classList.contains("c2")) {
            var t = function(e) {
                var t = DOMTokenList.prototype[e];
                DOMTokenList.prototype[e] = function(e) {
                    var n, i = arguments.length;
                    for (n = 0; n < i; n++)
                        e = arguments[n],
                        t.call(this, e)
                }
            };
            t("add"),
            t("remove")
        }
        if (e.classList.toggle("c3", !1),
        e.classList.contains("c3")) {
            var n = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(e, t) {
                return 1 in arguments && !this.contains(e) == !t ? t : n.call(this, e)
            }
        }
        "replace"in document.createElement("_").classList || (DOMTokenList.prototype.replace = function(e, t) {
            var n = this.toString().split(" ")
              , i = n.indexOf(e + "");
            ~i && (n = n.slice(i),
            this.remove.apply(this, n),
            this.add(t),
            this.add.apply(this, n.slice(1)))
        }
        ),
        e = null
    }()),
    n = function() {
        function e(e) {
            var t = this.constructor;
            return this.then((function(n) {
                return t.resolve(e()).then((function() {
                    return n
                }
                ))
            }
            ), (function(n) {
                return t.resolve(e()).then((function() {
                    return t.reject(n)
                }
                ))
            }
            ))
        }
        function n(e) {
            return new this((function(n, i) {
                if (!e || void 0 === e.length)
                    return i(new TypeError(t(e) + " " + e + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
                var r = Array.prototype.slice.call(e);
                if (0 === r.length)
                    return n([]);
                var o = r.length;
                function a(e, i) {
                    if (i && ("object" === t(i) || "function" == typeof i)) {
                        var s = i.then;
                        if ("function" == typeof s)
                            return void s.call(i, (function(t) {
                                a(e, t)
                            }
                            ), (function(t) {
                                r[e] = {
                                    status: "rejected",
                                    reason: t
                                },
                                0 == --o && n(r)
                            }
                            ))
                    }
                    r[e] = {
                        status: "fulfilled",
                        value: i
                    },
                    0 == --o && n(r)
                }
                for (var s = 0; s < r.length; s++)
                    a(s, r[s])
            }
            ))
        }
        var i = setTimeout;
        function r(e) {
            return Boolean(e && void 0 !== e.length)
        }
        function o() {}
        function a(e) {
            if (!(this instanceof a))
                throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e)
                throw new TypeError("not a function");
            this._state = 0,
            this._handled = !1,
            this._value = void 0,
            this._deferreds = [],
            f(e, this)
        }
        function s(e, t) {
            for (; 3 === e._state; )
                e = e._value;
            0 !== e._state ? (e._handled = !0,
            a._immediateFn((function() {
                var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                if (null !== n) {
                    var i;
                    try {
                        i = n(e._value)
                    } catch (e) {
                        return void u(t.promise, e)
                    }
                    l(t.promise, i)
                } else
                    (1 === e._state ? l : u)(t.promise, e._value)
            }
            ))) : e._deferreds.push(t)
        }
        function l(e, n) {
            try {
                if (n === e)
                    throw new TypeError("A promise cannot be resolved with itself.");
                if (n && ("object" === t(n) || "function" == typeof n)) {
                    var i = n.then;
                    if (n instanceof a)
                        return e._state = 3,
                        e._value = n,
                        void c(e);
                    if ("function" == typeof i)
                        return void f((r = i,
                        o = n,
                        function() {
                            r.apply(o, arguments)
                        }
                        ), e)
                }
                e._state = 1,
                e._value = n,
                c(e)
            } catch (t) {
                u(e, t)
            }
            var r, o
        }
        function u(e, t) {
            e._state = 2,
            e._value = t,
            c(e)
        }
        function c(e) {
            2 === e._state && 0 === e._deferreds.length && a._immediateFn((function() {
                e._handled || a._unhandledRejectionFn(e._value)
            }
            ));
            for (var t = 0, n = e._deferreds.length; t < n; t++)
                s(e, e._deferreds[t]);
            e._deferreds = null
        }
        function d(e, t, n) {
            this.onFulfilled = "function" == typeof e ? e : null,
            this.onRejected = "function" == typeof t ? t : null,
            this.promise = n
        }
        function f(e, t) {
            var n = !1;
            try {
                e((function(e) {
                    n || (n = !0,
                    l(t, e))
                }
                ), (function(e) {
                    n || (n = !0,
                    u(t, e))
                }
                ))
            } catch (e) {
                if (n)
                    return;
                n = !0,
                u(t, e)
            }
        }
        a.prototype.catch = function(e) {
            return this.then(null, e)
        }
        ,
        a.prototype.then = function(e, t) {
            var n = new this.constructor(o);
            return s(this, new d(e,t,n)),
            n
        }
        ,
        a.prototype.finally = e,
        a.all = function(e) {
            return new a((function(n, i) {
                if (!r(e))
                    return i(new TypeError("Promise.all accepts an array"));
                var o = Array.prototype.slice.call(e);
                if (0 === o.length)
                    return n([]);
                var a = o.length;
                function s(e, r) {
                    try {
                        if (r && ("object" === t(r) || "function" == typeof r)) {
                            var l = r.then;
                            if ("function" == typeof l)
                                return void l.call(r, (function(t) {
                                    s(e, t)
                                }
                                ), i)
                        }
                        o[e] = r,
                        0 == --a && n(o)
                    } catch (e) {
                        i(e)
                    }
                }
                for (var l = 0; l < o.length; l++)
                    s(l, o[l])
            }
            ))
        }
        ,
        a.allSettled = n,
        a.resolve = function(e) {
            return e && "object" === t(e) && e.constructor === a ? e : new a((function(t) {
                t(e)
            }
            ))
        }
        ,
        a.reject = function(e) {
            return new a((function(t, n) {
                n(e)
            }
            ))
        }
        ,
        a.race = function(e) {
            return new a((function(t, n) {
                if (!r(e))
                    return n(new TypeError("Promise.race accepts an array"));
                for (var i = 0, o = e.length; i < o; i++)
                    a.resolve(e[i]).then(t, n)
            }
            ))
        }
        ,
        a._immediateFn = "function" == typeof setImmediate && function(e) {
            setImmediate(e)
        }
        || function(e) {
            i(e, 0)
        }
        ,
        a._unhandledRejectionFn = function(e) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
        }
        ;
        var p = function() {
            if ("undefined" != typeof self)
                return self;
            if ("undefined" != typeof window)
                return window;
            if ("undefined" != typeof global)
                return global;
            throw new Error("unable to locate global object")
        }();
        "function" != typeof p.Promise ? p.Promise = a : p.Promise.prototype.finally ? p.Promise.allSettled || (p.Promise.allSettled = n) : p.Promise.prototype.finally = e
    }
    ,
    "object" === ("undefined" == typeof exports ? "undefined" : t(exports)) && "undefined" != typeof module ? n() : "function" == typeof define && define.amd ? define(n) : n()
}
)),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).LazyLoad = t()
}(this, (function() {
    "use strict";
    function e() {
        return e = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }
        ,
        e.apply(this, arguments)
    }
    var t = "undefined" != typeof window
      , n = t && !("onscroll"in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)
      , i = t && "IntersectionObserver"in window
      , r = t && "classList"in document.createElement("p")
      , o = t && window.devicePixelRatio > 1
      , a = {
        elements_selector: ".lazy",
        container: n || t ? document : null,
        threshold: 300,
        thresholds: null,
        data_src: "src",
        data_srcset: "srcset",
        data_sizes: "sizes",
        data_bg: "bg",
        data_bg_hidpi: "bg-hidpi",
        data_bg_multi: "bg-multi",
        data_bg_multi_hidpi: "bg-multi-hidpi",
        data_poster: "poster",
        class_applied: "applied",
        class_loading: "loading",
        class_loaded: "loaded",
        class_error: "error",
        class_entered: "entered",
        class_exited: "exited",
        unobserve_completed: !0,
        unobserve_entered: !1,
        cancel_on_exit: !0,
        callback_enter: null,
        callback_exit: null,
        callback_applied: null,
        callback_loading: null,
        callback_loaded: null,
        callback_error: null,
        callback_finish: null,
        callback_cancel: null,
        use_native: !1
    }
      , s = function(t) {
        return e({}, a, t)
    }
      , l = function(e, t) {
        var n, i = "LazyLoad::Initialized", r = new e(t);
        try {
            n = new CustomEvent(i,{
                detail: {
                    instance: r
                }
            })
        } catch (e) {
            (n = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
                instance: r
            })
        }
        window.dispatchEvent(n)
    }
      , u = "loading"
      , c = "loaded"
      , d = "applied"
      , f = "error"
      , p = "native"
      , h = "data-"
      , g = "ll-status"
      , m = function(e, t) {
        return e.getAttribute(h + t)
    }
      , v = function(e) {
        return m(e, g)
    }
      , y = function(e, t) {
        return function(e, t, n) {
            var i = h + t;
            null !== n ? e.setAttribute(i, n) : e.removeAttribute(i)
        }(e, g, t)
    }
      , b = function(e) {
        return y(e, null)
    }
      , w = function(e) {
        return null === v(e)
    }
      , x = function(e) {
        return v(e) === p
    }
      , T = [u, c, d, f]
      , _ = function(e, t, n, i) {
        e && (void 0 === i ? void 0 === n ? e(t) : e(t, n) : e(t, n, i))
    }
      , E = function(e, t) {
        r ? e.classList.add(t) : e.className += (e.className ? " " : "") + t
    }
      , C = function(e, t) {
        r ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
    }
      , S = function(e) {
        return e.llTempImage
    }
      , D = function(e, t) {
        if (t) {
            var n = t._observer;
            n && n.unobserve(e)
        }
    }
      , A = function(e, t) {
        e && (e.loadingCount += t)
    }
      , N = function(e, t) {
        e && (e.toLoadCount = t)
    }
      , k = function(e) {
        for (var t, n = [], i = 0; t = e.children[i]; i += 1)
            "SOURCE" === t.tagName && n.push(t);
        return n
    }
      , O = function(e, t, n) {
        n && e.setAttribute(t, n)
    }
      , j = function(e, t) {
        e.removeAttribute(t)
    }
      , I = function(e) {
        return !!e.llOriginalAttrs
    }
      , L = function(e) {
        if (!I(e)) {
            var t = {};
            t.src = e.getAttribute("src"),
            t.srcset = e.getAttribute("srcset"),
            t.sizes = e.getAttribute("sizes"),
            e.llOriginalAttrs = t
        }
    }
      , M = function(e) {
        if (I(e)) {
            var t = e.llOriginalAttrs;
            O(e, "src", t.src),
            O(e, "srcset", t.srcset),
            O(e, "sizes", t.sizes)
        }
    }
      , P = function(e, t) {
        O(e, "sizes", m(e, t.data_sizes)),
        O(e, "srcset", m(e, t.data_srcset)),
        O(e, "src", m(e, t.data_src))
    }
      , R = function(e) {
        j(e, "src"),
        j(e, "srcset"),
        j(e, "sizes")
    }
      , q = function(e, t) {
        var n = e.parentNode;
        n && "PICTURE" === n.tagName && k(n).forEach(t)
    }
      , H = {
        IMG: function(e, t) {
            q(e, (function(e) {
                L(e),
                P(e, t)
            }
            )),
            L(e),
            P(e, t)
        },
        IFRAME: function(e, t) {
            O(e, "src", m(e, t.data_src))
        },
        VIDEO: function(e, t) {
            !function(e, t) {
                k(e).forEach(t)
            }(e, (function(e) {
                O(e, "src", m(e, t.data_src))
            }
            )),
            O(e, "poster", m(e, t.data_poster)),
            O(e, "src", m(e, t.data_src)),
            e.load()
        }
    }
      , F = function(e, t) {
        var n = H[e.tagName];
        n && n(e, t)
    }
      , B = function(e, t, n) {
        E(e, t.class_applied),
        y(e, d),
        t.unobserve_completed && D(e, t),
        _(t.callback_applied, e, n)
    }
      , W = function(e, t, n) {
        A(n, 1),
        E(e, t.class_loading),
        y(e, u),
        _(t.callback_loading, e, n)
    }
      , z = ["IMG", "IFRAME", "VIDEO"]
      , V = function(e, t) {
        !t || function(e) {
            return e.loadingCount > 0
        }(t) || function(e) {
            return e.toLoadCount > 0
        }(t) || _(e.callback_finish, t)
    }
      , U = function(e, t, n) {
        e.addEventListener(t, n),
        e.llEvLisnrs[t] = n
    }
      , $ = function(e, t, n) {
        e.removeEventListener(t, n)
    }
      , X = function(e) {
        return !!e.llEvLisnrs
    }
      , Q = function(e) {
        if (X(e)) {
            var t = e.llEvLisnrs;
            for (var n in t) {
                var i = t[n];
                $(e, n, i)
            }
            delete e.llEvLisnrs
        }
    }
      , G = function(e, t, n) {
        !function(e) {
            delete e.llTempImage
        }(e),
        A(n, -1),
        function(e) {
            e && (e.toLoadCount -= 1)
        }(n),
        C(e, t.class_loading),
        t.unobserve_completed && D(e, n)
    }
      , Y = function(e, t, n) {
        var i = S(e) || e;
        if (!X(i)) {
            !function(e, t, n) {
                X(e) || (e.llEvLisnrs = {});
                var i = "VIDEO" === e.tagName ? "loadeddata" : "load";
                U(e, i, t),
                U(e, "error", n)
            }(i, (function(r) {
                !function(e, t, n, i) {
                    var r = x(t);
                    G(t, n, i),
                    E(t, n.class_loaded),
                    y(t, c),
                    _(n.callback_loaded, t, i),
                    r || V(n, i)
                }(0, e, t, n),
                Q(i)
            }
            ), (function(r) {
                !function(e, t, n, i) {
                    var r = x(t);
                    G(t, n, i),
                    E(t, n.class_error),
                    y(t, f),
                    _(n.callback_error, t, i),
                    r || V(n, i)
                }(0, e, t, n),
                Q(i)
            }
            ))
        }
    }
      , K = function(e, t, n) {
        !function(e) {
            e.llTempImage = document.createElement("IMG")
        }(e),
        Y(e, t, n),
        function(e, t, n) {
            var i = m(e, t.data_bg)
              , r = m(e, t.data_bg_hidpi)
              , a = o && r ? r : i;
            a && (e.style.backgroundImage = 'url("'.concat(a, '")'),
            S(e).setAttribute("src", a),
            W(e, t, n))
        }(e, t, n),
        function(e, t, n) {
            var i = m(e, t.data_bg_multi)
              , r = m(e, t.data_bg_multi_hidpi)
              , a = o && r ? r : i;
            a && (e.style.backgroundImage = a,
            B(e, t, n))
        }(e, t, n)
    }
      , J = function(e, t, n) {
        !function(e) {
            return z.indexOf(e.tagName) > -1
        }(e) ? K(e, t, n) : function(e, t, n) {
            Y(e, t, n),
            F(e, t),
            W(e, t, n)
        }(e, t, n)
    }
      , Z = function(e, t, n, i) {
        n.cancel_on_exit && function(e) {
            return v(e) === u
        }(e) && "IMG" === e.tagName && (Q(e),
        function(e) {
            q(e, (function(e) {
                R(e)
            }
            )),
            R(e)
        }(e),
        function(e) {
            q(e, (function(e) {
                M(e)
            }
            )),
            M(e)
        }(e),
        C(e, n.class_loading),
        A(i, -1),
        b(e),
        _(n.callback_cancel, e, t, i))
    }
      , ee = function(e, t, n, i) {
        y(e, "entered"),
        E(e, n.class_entered),
        C(e, n.class_exited),
        function(e, t, n) {
            t.unobserve_entered && D(e, n)
        }(e, n, i),
        _(n.callback_enter, e, t, i),
        function(e) {
            return T.indexOf(v(e)) >= 0
        }(e) || J(e, n, i)
    }
      , te = ["IMG", "IFRAME"]
      , ne = function(e) {
        return e.use_native && "loading"in HTMLImageElement.prototype
    }
      , ie = function(e, t, n) {
        e.forEach((function(e) {
            -1 !== te.indexOf(e.tagName) && (e.setAttribute("loading", "lazy"),
            function(e, t, n) {
                Y(e, t, n),
                F(e, t),
                y(e, p)
            }(e, t, n))
        }
        )),
        N(n, 0)
    }
      , re = function(e, t, n) {
        e.forEach((function(e) {
            return function(e) {
                return e.isIntersecting || e.intersectionRatio > 0
            }(e) ? ee(e.target, e, t, n) : function(e, t, n, i) {
                w(e) || (E(e, n.class_exited),
                Z(e, t, n, i),
                _(n.callback_exit, e, t, i))
            }(e.target, e, t, n)
        }
        ))
    }
      , oe = function(e, t) {
        i && !ne(e) && (t._observer = new IntersectionObserver((function(n) {
            re(n, e, t)
        }
        ),function(e) {
            return {
                root: e.container === document ? null : e.container,
                rootMargin: e.thresholds || e.threshold + "px"
            }
        }(e)))
    }
      , ae = function(e) {
        return Array.prototype.slice.call(e)
    }
      , se = function(e) {
        return e.container.querySelectorAll(e.elements_selector)
    }
      , le = function(e) {
        return function(e) {
            return v(e) === f
        }(e)
    }
      , ue = function(e, t) {
        return function(e) {
            return ae(e).filter(w)
        }(e || se(t))
    }
      , ce = function(e, t) {
        var n;
        (n = se(e),
        ae(n).filter(le)).forEach((function(t) {
            C(t, e.class_error),
            b(t)
        }
        )),
        t.update()
    }
      , de = function(e, n) {
        var i = s(e);
        this._settings = i,
        this.loadingCount = 0,
        oe(i, this),
        function(e, n) {
            t && window.addEventListener("online", (function() {
                ce(e, n)
            }
            ))
        }(i, this),
        this.update(n)
    };
    return de.prototype = {
        update: function(e) {
            var t, r, o = this._settings, a = ue(e, o);
            (N(this, a.length),
            !n && i) ? ne(o) ? ie(a, o, this) : (t = this._observer,
            r = a,
            function(e) {
                e.disconnect()
            }(t),
            function(e, t) {
                t.forEach((function(t) {
                    e.observe(t)
                }
                ))
            }(t, r)) : this.loadAll(a)
        },
        destroy: function() {
            this._observer && this._observer.disconnect(),
            se(this._settings).forEach((function(e) {
                delete e.llOriginalAttrs
            }
            )),
            delete this._observer,
            delete this._settings,
            delete this.loadingCount,
            delete this.toLoadCount
        },
        loadAll: function(e) {
            var t = this
              , n = this._settings;
            ue(e, n).forEach((function(e) {
                D(e, t),
                J(e, n, t)
            }
            ))
        }
    },
    de.load = function(e, t) {
        var n = s(t);
        J(e, n)
    }
    ,
    de.resetStatus = function(e) {
        b(e)
    }
    ,
    t && function(e, t) {
        if (t)
            if (t.length)
                for (var n, i = 0; n = t[i]; i += 1)
                    l(e, n);
            else
                l(e, t)
    }(de, window.lazyLoadOptions),
    de
}
)),
function(e) {
    var t;
    if ("function" == typeof define && define.amd && (define(e),
    t = !0),
    "object" == typeof exports && (module.exports = e(),
    t = !0),
    !t) {
        var n = window.Cookies
          , i = window.Cookies = e();
        i.noConflict = function() {
            return window.Cookies = n,
            i
        }
    }
}((function() {
    function e() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
                t[i] = n[i]
        }
        return t
    }
    function t(e) {
        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
    }
    return function n(i) {
        function r() {}
        function o(t, n, o) {
            if ("undefined" != typeof document) {
                "number" == typeof (o = e({
                    path: "/"
                }, r.defaults, o)).expires && (o.expires = new Date(1 * new Date + 864e5 * o.expires)),
                o.expires = o.expires ? o.expires.toUTCString() : "";
                try {
                    var a = JSON.stringify(n);
                    /^[\{\[]/.test(a) && (n = a)
                } catch (e) {}
                n = i.write ? i.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                var s = "";
                for (var l in o)
                    o[l] && (s += "; " + l,
                    !0 !== o[l] && (s += "=" + o[l].split(";")[0]));
                return document.cookie = t + "=" + n + s
            }
        }
        function a(e, n) {
            if ("undefined" != typeof document) {
                for (var r = {}, o = document.cookie ? document.cookie.split("; ") : [], a = 0; a < o.length; a++) {
                    var s = o[a].split("=")
                      , l = s.slice(1).join("=");
                    n || '"' !== l.charAt(0) || (l = l.slice(1, -1));
                    try {
                        var u = t(s[0]);
                        if (l = (i.read || i)(l, u) || t(l),
                        n)
                            try {
                                l = JSON.parse(l)
                            } catch (e) {}
                        if (r[u] = l,
                        e === u)
                            break
                    } catch (e) {}
                }
                return e ? r[e] : r
            }
        }
        return r.set = o,
        r.get = function(e) {
            return a(e, !1)
        }
        ,
        r.getJSON = function(e) {
            return a(e, !0)
        }
        ,
        r.remove = function(t, n) {
            o(t, "", e(n, {
                expires: -1
            }))
        }
        ,
        r.defaults = {},
        r.withConverter = n,
        r
    }((function() {}
    ))
}
)),
function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
    "use strict";
    var n = []
      , i = Object.getPrototypeOf
      , r = n.slice
      , o = n.flat ? function(e) {
        return n.flat.call(e)
    }
    : function(e) {
        return n.concat.apply([], e)
    }
      , a = n.push
      , s = n.indexOf
      , l = {}
      , u = l.toString
      , c = l.hasOwnProperty
      , d = c.toString
      , f = d.call(Object)
      , p = {}
      , h = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }
      , g = function(e) {
        return null != e && e === e.window
    }
      , m = e.document
      , v = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function y(e, t, n) {
        var i, r, o = (n = n || m).createElement("script");
        if (o.text = e,
        t)
            for (i in v)
                (r = t[i] || t.getAttribute && t.getAttribute(i)) && o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[u.call(e)] || "object" : typeof e
    }
    var w = "3.6.0"
      , x = function(e, t) {
        return new x.fn.init(e,t)
    };
    function T(e) {
        var t = !!e && "length"in e && e.length
          , n = b(e);
        return !h(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    x.fn = x.prototype = {
        jquery: w,
        constructor: x,
        length: 0,
        toArray: function() {
            return r.call(this)
        },
        get: function(e) {
            return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return x.each(this, e)
        },
        map: function(e) {
            return this.pushStack(x.map(this, (function(t, n) {
                return e.call(t, n, t)
            }
            )))
        },
        slice: function() {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(x.grep(this, (function(e, t) {
                return (t + 1) % 2
            }
            )))
        },
        odd: function() {
            return this.pushStack(x.grep(this, (function(e, t) {
                return t % 2
            }
            )))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    },
    x.extend = x.fn.extend = function() {
        var e, t, n, i, r, o, a = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof a && (u = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || h(a) || (a = {}),
        s === l && (a = this,
        s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    i = e[t],
                    "__proto__" !== t && a !== i && (u && i && (x.isPlainObject(i) || (r = Array.isArray(i))) ? (n = a[t],
                    o = r && !Array.isArray(n) ? [] : r || x.isPlainObject(n) ? n : {},
                    r = !1,
                    a[t] = x.extend(u, o, i)) : void 0 !== i && (a[t] = i));
        return a
    }
    ,
    x.extend({
        expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== u.call(e)) && (!(t = i(e)) || "function" == typeof (n = c.call(t, "constructor") && t.constructor) && d.call(n) === f)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            y(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, i = 0;
            if (T(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                    ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (T(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : s.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                e[r++] = t[i];
            return e.length = r,
            e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, a = !n; r < o; r++)
                !t(e[r], r) !== a && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var i, r, a = 0, s = [];
            if (T(e))
                for (i = e.length; a < i; a++)
                    null != (r = t(e[a], a, n)) && s.push(r);
            else
                for (a in e)
                    null != (r = t(e[a], a, n)) && s.push(r);
            return o(s)
        },
        guid: 1,
        support: p
    }),
    "function" == typeof Symbol && (x.fn[Symbol.iterator] = n[Symbol.iterator]),
    x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    }
    ));
    var _ = function(e) {
        var t, n, i, r, o, a, s, l, u, c, d, f, p, h, g, m, v, y, b, w = "sizzle" + 1 * new Date, x = e.document, T = 0, _ = 0, E = le(), C = le(), S = le(), D = le(), A = function(e, t) {
            return e === t && (d = !0),
            0
        }, N = {}.hasOwnProperty, k = [], O = k.pop, j = k.push, I = k.push, L = k.slice, M = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", R = "[\\x20\\t\\r\\n\\f]", q = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", H = "\\[[\\x20\\t\\r\\n\\f]*(" + q + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + R + "*\\]", F = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)", B = new RegExp(R + "+","g"), W = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$","g"), z = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"), V = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"), U = new RegExp(R + "|>"), $ = new RegExp(F), X = new RegExp("^" + q + "$"), Q = {
            ID: new RegExp("^#(" + q + ")"),
            CLASS: new RegExp("^\\.(" + q + ")"),
            TAG: new RegExp("^(" + q + "|[*])"),
            ATTR: new RegExp("^" + H),
            PSEUDO: new RegExp("^" + F),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)","i"),
            bool: new RegExp("^(?:" + P + ")$","i"),
            needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)","i")
        }, G = /HTML$/i, Y = /^(?:input|select|textarea|button)$/i, K = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, re = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, oe = function() {
            f()
        }, ae = we((function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }
        ), {
            dir: "parentNode",
            next: "legend"
        });
        try {
            I.apply(k = L.call(x.childNodes), x.childNodes),
            k[x.childNodes.length].nodeType
        } catch (e) {
            I = {
                apply: k.length ? function(e, t) {
                    j.apply(e, L.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(e, t, i, r) {
            var o, s, u, c, d, h, v, y = t && t.ownerDocument, x = t ? t.nodeType : 9;
            if (i = i || [],
            "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x)
                return i;
            if (!r && (f(t),
            t = t || p,
            g)) {
                if (11 !== x && (d = Z.exec(e)))
                    if (o = d[1]) {
                        if (9 === x) {
                            if (!(u = t.getElementById(o)))
                                return i;
                            if (u.id === o)
                                return i.push(u),
                                i
                        } else if (y && (u = y.getElementById(o)) && b(t, u) && u.id === o)
                            return i.push(u),
                            i
                    } else {
                        if (d[2])
                            return I.apply(i, t.getElementsByTagName(e)),
                            i;
                        if ((o = d[3]) && n.getElementsByClassName && t.getElementsByClassName)
                            return I.apply(i, t.getElementsByClassName(o)),
                            i
                    }
                if (n.qsa && !D[e + " "] && (!m || !m.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
                    if (v = e,
                    y = t,
                    1 === x && (U.test(e) || V.test(e))) {
                        for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(ie, re) : t.setAttribute("id", c = w)),
                        s = (h = a(e)).length; s--; )
                            h[s] = (c ? "#" + c : ":scope") + " " + be(h[s]);
                        v = h.join(",")
                    }
                    try {
                        return I.apply(i, y.querySelectorAll(v)),
                        i
                    } catch (t) {
                        D(e, !0)
                    } finally {
                        c === w && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(W, "$1"), t, i, r)
        }
        function le() {
            var e = [];
            return function t(n, r) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                t[n + " "] = r
            }
        }
        function ue(e) {
            return e[w] = !0,
            e
        }
        function ce(e) {
            var t = p.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function de(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                i.attrHandle[n[r]] = t
        }
        function fe(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function pe(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function he(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function ge(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function me(e) {
            return ue((function(t) {
                return t = +t,
                ue((function(n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--; )
                        n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                }
                ))
            }
            ))
        }
        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = se.support = {},
        o = se.isXML = function(e) {
            var t = e && e.namespaceURI
              , n = e && (e.ownerDocument || e).documentElement;
            return !G.test(t || n && n.nodeName || "HTML")
        }
        ,
        f = se.setDocument = function(e) {
            var t, r, a = e ? e.ownerDocument || e : x;
            return a != p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement,
            g = !o(p),
            x != p && (r = p.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", oe, !1) : r.attachEvent && r.attachEvent("onunload", oe)),
            n.scope = ce((function(e) {
                return h.appendChild(e).appendChild(p.createElement("div")),
                void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }
            )),
            n.attributes = ce((function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }
            )),
            n.getElementsByTagName = ce((function(e) {
                return e.appendChild(p.createComment("")),
                !e.getElementsByTagName("*").length
            }
            )),
            n.getElementsByClassName = J.test(p.getElementsByClassName),
            n.getById = ce((function(e) {
                return h.appendChild(e).id = w,
                !p.getElementsByName || !p.getElementsByName(w).length
            }
            )),
            n.getById ? (i.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            i.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (i.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            i.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n, i, r, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        for (r = t.getElementsByName(e),
                        i = 0; o = r[i++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            i.find.TAG = n.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }
            ,
            i.find.CLASS = n.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && g)
                    return t.getElementsByClassName(e)
            }
            ,
            v = [],
            m = [],
            (n.qsa = J.test(p.querySelectorAll)) && (ce((function(e) {
                var t;
                h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || m.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + P + ")"),
                e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="),
                (t = p.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || m.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || m.push(":checked"),
                e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                m.push("[\\r\\n\\f]")
            }
            )),
            ce((function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = p.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                h.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                m.push(",.*:")
            }
            ))),
            (n.matchesSelector = J.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce((function(e) {
                n.disconnectedMatch = y.call(e, "*"),
                y.call(e, "[s!='']:x"),
                v.push("!=", F)
            }
            )),
            m = m.length && new RegExp(m.join("|")),
            v = v.length && new RegExp(v.join("|")),
            t = J.test(h.compareDocumentPosition),
            b = t || J.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            A = t ? function(e, t) {
                if (e === t)
                    return d = !0,
                    0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == p || e.ownerDocument == x && b(x, e) ? -1 : t == p || t.ownerDocument == x && b(x, t) ? 1 : c ? M(c, e) - M(c, t) : 0 : 4 & i ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return d = !0,
                    0;
                var n, i = 0, r = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!r || !o)
                    return e == p ? -1 : t == p ? 1 : r ? -1 : o ? 1 : c ? M(c, e) - M(c, t) : 0;
                if (r === o)
                    return fe(e, t);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (n = t; n = n.parentNode; )
                    s.unshift(n);
                for (; a[i] === s[i]; )
                    i++;
                return i ? fe(a[i], s[i]) : a[i] == x ? -1 : s[i] == x ? 1 : 0
            }
            ,
            p) : p
        }
        ,
        se.matches = function(e, t) {
            return se(e, null, null, t)
        }
        ,
        se.matchesSelector = function(e, t) {
            if (f(e),
            n.matchesSelector && g && !D[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t)))
                try {
                    var i = y.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return i
                } catch (e) {
                    D(t, !0)
                }
            return se(t, p, null, [e]).length > 0
        }
        ,
        se.contains = function(e, t) {
            return (e.ownerDocument || e) != p && f(e),
            b(e, t)
        }
        ,
        se.attr = function(e, t) {
            (e.ownerDocument || e) != p && f(e);
            var r = i.attrHandle[t.toLowerCase()]
              , o = r && N.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }
        ,
        se.escape = function(e) {
            return (e + "").replace(ie, re)
        }
        ,
        se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        se.uniqueSort = function(e) {
            var t, i = [], r = 0, o = 0;
            if (d = !n.detectDuplicates,
            c = !n.sortStable && e.slice(0),
            e.sort(A),
            d) {
                for (; t = e[o++]; )
                    t === e[o] && (r = i.push(o));
                for (; r--; )
                    e.splice(i[r], 1)
            }
            return c = null,
            e
        }
        ,
        r = se.getText = function(e) {
            var t, n = "", i = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += r(e)
                } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += r(t);
            return n
        }
        ,
        i = se.selectors = {
            cacheLength: 50,
            createPseudo: ue,
            match: Q,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && $.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = E[e + " "];
                    return t || (t = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "(" + R + "|$)")) && E(e, (function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    }
                    ))
                },
                ATTR: function(e, t, n) {
                    return function(i) {
                        var r = se.attr(i, e);
                        return null == r ? "!=" === t : !t || (r += "",
                        "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var u, c, d, f, p, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !l && !s, b = !1;
                        if (m) {
                            if (o) {
                                for (; g; ) {
                                    for (f = t; f = f[g]; )
                                        if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild],
                            a && y) {
                                for (b = (p = (u = (c = (d = (f = m)[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === T && u[1]) && u[2],
                                f = p && m.childNodes[p]; f = ++p && f && f[g] || (b = p = 0) || h.pop(); )
                                    if (1 === f.nodeType && ++b && f === t) {
                                        c[e] = [T, p, b];
                                        break
                                    }
                            } else if (y && (b = p = (u = (c = (d = (f = t)[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === T && u[1]),
                            !1 === b)
                                for (; (f = ++p && f && f[g] || (b = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && ((c = (d = f[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [T, b]),
                                f !== t)); )
                                    ;
                            return (b -= r) === i || b % i == 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return r[w] ? r(t) : r.length > 1 ? (n = [e, e, "", t],
                    i.setFilters.hasOwnProperty(e.toLowerCase()) ? ue((function(e, n) {
                        for (var i, o = r(e, t), a = o.length; a--; )
                            e[i = M(e, o[a])] = !(n[i] = o[a])
                    }
                    )) : function(e) {
                        return r(e, 0, n)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: ue((function(e) {
                    var t = []
                      , n = []
                      , i = s(e.replace(W, "$1"));
                    return i[w] ? ue((function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--; )
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }
                    )) : function(e, r, o) {
                        return t[0] = e,
                        i(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }
                )),
                has: ue((function(e) {
                    return function(t) {
                        return se(e, t).length > 0
                    }
                }
                )),
                contains: ue((function(e) {
                    return e = e.replace(te, ne),
                    function(t) {
                        return (t.textContent || r(t)).indexOf(e) > -1
                    }
                }
                )),
                lang: ue((function(e) {
                    return X.test(e || "") || se.error("unsupported lang: " + e),
                    e = e.replace(te, ne).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }
                )),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !i.pseudos.empty(e)
                },
                header: function(e) {
                    return K.test(e.nodeName)
                },
                input: function(e) {
                    return Y.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: me((function() {
                    return [0]
                }
                )),
                last: me((function(e, t) {
                    return [t - 1]
                }
                )),
                eq: me((function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }
                )),
                even: me((function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }
                )),
                odd: me((function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }
                )),
                lt: me((function(e, t, n) {
                    for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; )
                        e.push(i);
                    return e
                }
                )),
                gt: me((function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                }
                ))
            }
        },
        i.pseudos.nth = i.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            i.pseudos[t] = pe(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            i.pseudos[t] = he(t);
        function ye() {}
        function be(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++)
                i += e[t].value;
            return i
        }
        function we(e, t, n) {
            var i = t.dir
              , r = t.next
              , o = r || i
              , a = n && "parentNode" === o
              , s = _++;
            return t.first ? function(t, n, r) {
                for (; t = t[i]; )
                    if (1 === t.nodeType || a)
                        return e(t, n, r);
                return !1
            }
            : function(t, n, l) {
                var u, c, d, f = [T, s];
                if (l) {
                    for (; t = t[i]; )
                        if ((1 === t.nodeType || a) && e(t, n, l))
                            return !0
                } else
                    for (; t = t[i]; )
                        if (1 === t.nodeType || a)
                            if (c = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {}),
                            r && r === t.nodeName.toLowerCase())
                                t = t[i] || t;
                            else {
                                if ((u = c[o]) && u[0] === T && u[1] === s)
                                    return f[2] = u[2];
                                if (c[o] = f,
                                f[2] = e(t, n, l))
                                    return !0
                            }
                return !1
            }
        }
        function xe(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--; )
                    if (!e[r](t, n, i))
                        return !1;
                return !0
            }
            : e[0]
        }
        function Te(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)
                (o = e[s]) && (n && !n(o, i, r) || (a.push(o),
                u && t.push(s)));
            return a
        }
        function _e(e, t, n, i, r, o) {
            return i && !i[w] && (i = _e(i)),
            r && !r[w] && (r = _e(r, o)),
            ue((function(o, a, s, l) {
                var u, c, d, f = [], p = [], h = a.length, g = o || function(e, t, n) {
                    for (var i = 0, r = t.length; i < r; i++)
                        se(e, t[i], n);
                    return n
                }(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : Te(g, f, e, s, l), v = n ? r || (o ? e : h || i) ? [] : a : m;
                if (n && n(m, v, s, l),
                i)
                    for (u = Te(v, p),
                    i(u, [], s, l),
                    c = u.length; c--; )
                        (d = u[c]) && (v[p[c]] = !(m[p[c]] = d));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (u = [],
                            c = v.length; c--; )
                                (d = v[c]) && u.push(m[c] = d);
                            r(null, v = [], u, l)
                        }
                        for (c = v.length; c--; )
                            (d = v[c]) && (u = r ? M(o, d) : f[c]) > -1 && (o[u] = !(a[u] = d))
                    }
                } else
                    v = Te(v === a ? v.splice(h, v.length) : v),
                    r ? r(null, a, v, l) : I.apply(a, v)
            }
            ))
        }
        function Ee(e) {
            for (var t, n, r, o = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], l = a ? 1 : 0, c = we((function(e) {
                return e === t
            }
            ), s, !0), d = we((function(e) {
                return M(t, e) > -1
            }
            ), s, !0), f = [function(e, n, i) {
                var r = !a && (i || n !== u) || ((t = n).nodeType ? c(e, n, i) : d(e, n, i));
                return t = null,
                r
            }
            ]; l < o; l++)
                if (n = i.relative[e[l].type])
                    f = [we(xe(f), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                        for (r = ++l; r < o && !i.relative[e[r].type]; r++)
                            ;
                        return _e(l > 1 && xe(f), l > 1 && be(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(W, "$1"), n, l < r && Ee(e.slice(l, r)), r < o && Ee(e = e.slice(r)), r < o && be(e))
                    }
                    f.push(n)
                }
            return xe(f)
        }
        return ye.prototype = i.filters = i.pseudos,
        i.setFilters = new ye,
        a = se.tokenize = function(e, t) {
            var n, r, o, a, s, l, u, c = C[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            for (s = e,
            l = [],
            u = i.preFilter; s; ) {
                for (a in n && !(r = z.exec(s)) || (r && (s = s.slice(r[0].length) || s),
                l.push(o = [])),
                n = !1,
                (r = V.exec(s)) && (n = r.shift(),
                o.push({
                    value: n,
                    type: r[0].replace(W, " ")
                }),
                s = s.slice(n.length)),
                i.filter)
                    !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(),
                    o.push({
                        value: n,
                        type: a,
                        matches: r
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return t ? s.length : s ? se.error(e) : C(e, l).slice(0)
        }
        ,
        s = se.compile = function(e, t) {
            var n, r = [], o = [], s = S[e + " "];
            if (!s) {
                for (t || (t = a(e)),
                n = t.length; n--; )
                    (s = Ee(t[n]))[w] ? r.push(s) : o.push(s);
                s = S(e, function(e, t) {
                    var n = t.length > 0
                      , r = e.length > 0
                      , o = function(o, a, s, l, c) {
                        var d, h, m, v = 0, y = "0", b = o && [], w = [], x = u, _ = o || r && i.find.TAG("*", c), E = T += null == x ? 1 : Math.random() || .1, C = _.length;
                        for (c && (u = a == p || a || c); y !== C && null != (d = _[y]); y++) {
                            if (r && d) {
                                for (h = 0,
                                a || d.ownerDocument == p || (f(d),
                                s = !g); m = e[h++]; )
                                    if (m(d, a || p, s)) {
                                        l.push(d);
                                        break
                                    }
                                c && (T = E)
                            }
                            n && ((d = !m && d) && v--,
                            o && b.push(d))
                        }
                        if (v += y,
                        n && y !== v) {
                            for (h = 0; m = t[h++]; )
                                m(b, w, a, s);
                            if (o) {
                                if (v > 0)
                                    for (; y--; )
                                        b[y] || w[y] || (w[y] = O.call(l));
                                w = Te(w)
                            }
                            I.apply(l, w),
                            c && !o && w.length > 0 && v + t.length > 1 && se.uniqueSort(l)
                        }
                        return c && (T = E,
                        u = x),
                        b
                    };
                    return n ? ue(o) : o
                }(o, r)),
                s.selector = e
            }
            return s
        }
        ,
        l = se.select = function(e, t, n, r) {
            var o, l, u, c, d, f = "function" == typeof e && e, p = !r && a(e = f.selector || e);
            if (n = n || [],
            1 === p.length) {
                if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(u.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                    f && (t = t.parentNode),
                    e = e.slice(l.shift().value.length)
                }
                for (o = Q.needsContext.test(e) ? 0 : l.length; o-- && (u = l[o],
                !i.relative[c = u.type]); )
                    if ((d = i.find[c]) && (r = d(u.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                        if (l.splice(o, 1),
                        !(e = r.length && be(l)))
                            return I.apply(n, r),
                            n;
                        break
                    }
            }
            return (f || s(e, p))(r, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t),
            n
        }
        ,
        n.sortStable = w.split("").sort(A).join("") === w,
        n.detectDuplicates = !!d,
        f(),
        n.sortDetached = ce((function(e) {
            return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
        }
        )),
        ce((function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }
        )) || de("type|href|height|width", (function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }
        )),
        n.attributes && ce((function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }
        )) || de("value", (function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }
        )),
        ce((function(e) {
            return null == e.getAttribute("disabled")
        }
        )) || de(P, (function(e, t, n) {
            var i;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }
        )),
        se
    }(e);
    x.find = _,
    x.expr = _.selectors,
    x.expr[":"] = x.expr.pseudos,
    x.uniqueSort = x.unique = _.uniqueSort,
    x.text = _.getText,
    x.isXMLDoc = _.isXML,
    x.contains = _.contains,
    x.escapeSelector = _.escape;
    var E = function(e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (r && x(e).is(n))
                    break;
                i.push(e)
            }
        return i
    }
      , C = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , S = x.expr.match.needsContext;
    function D(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function N(e, t, n) {
        return h(t) ? x.grep(e, (function(e, i) {
            return !!t.call(e, i, e) !== n
        }
        )) : t.nodeType ? x.grep(e, (function(e) {
            return e === t !== n
        }
        )) : "string" != typeof t ? x.grep(e, (function(e) {
            return s.call(t, e) > -1 !== n
        }
        )) : x.filter(t, e, n)
    }
    x.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? x.find.matchesSelector(i, e) ? [i] : [] : x.find.matches(e, x.grep(t, (function(e) {
            return 1 === e.nodeType
        }
        )))
    }
    ,
    x.fn.extend({
        find: function(e) {
            var t, n, i = this.length, r = this;
            if ("string" != typeof e)
                return this.pushStack(x(e).filter((function() {
                    for (t = 0; t < i; t++)
                        if (x.contains(r[t], this))
                            return !0
                }
                )));
            for (n = this.pushStack([]),
            t = 0; t < i; t++)
                x.find(e, r[t], n);
            return i > 1 ? x.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(N(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(N(this, e || [], !0))
        },
        is: function(e) {
            return !!N(this, "string" == typeof e && S.test(e) ? x(e) : e || [], !1).length
        }
    });
    var k, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (x.fn.init = function(e, t, n) {
        var i, r;
        if (!e)
            return this;
        if (n = n || k,
        "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : O.exec(e)) || !i[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof x ? t[0] : t,
                x.merge(this, x.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : m, !0)),
                A.test(i[1]) && x.isPlainObject(t))
                    for (i in t)
                        h(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (r = m.getElementById(i[2])) && (this[0] = r,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : h(e) ? void 0 !== n.ready ? n.ready(e) : e(x) : x.makeArray(e, this)
    }
    ).prototype = x.fn,
    k = x(m);
    var j = /^(?:parents|prev(?:Until|All))/
      , I = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function L(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    x.fn.extend({
        has: function(e) {
            var t = x(e, this)
              , n = t.length;
            return this.filter((function() {
                for (var e = 0; e < n; e++)
                    if (x.contains(this, t[e]))
                        return !0
            }
            ))
        },
        closest: function(e, t) {
            var n, i = 0, r = this.length, o = [], a = "string" != typeof e && x(e);
            if (!S.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? x.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? s.call(x(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return E(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return E(e, "parentNode", n)
        },
        next: function(e) {
            return L(e, "nextSibling")
        },
        prev: function(e) {
            return L(e, "previousSibling")
        },
        nextAll: function(e) {
            return E(e, "nextSibling")
        },
        prevAll: function(e) {
            return E(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return E(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return E(e, "previousSibling", n)
        },
        siblings: function(e) {
            return C((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return C(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (D(e, "template") && (e = e.content || e),
            x.merge([], e.childNodes))
        }
    }, (function(e, t) {
        x.fn[e] = function(n, i) {
            var r = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (r = x.filter(i, r)),
            this.length > 1 && (I[e] || x.uniqueSort(r),
            j.test(e) && r.reverse()),
            this.pushStack(r)
        }
    }
    ));
    var M = /[^\x20\t\r\n\f]+/g;
    function P(e) {
        return e
    }
    function R(e) {
        throw e
    }
    function q(e, t, n, i) {
        var r;
        try {
            e && h(r = e.promise) ? r.call(e).done(t).fail(n) : e && h(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    x.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
            var t = {};
            return x.each(e.match(M) || [], (function(e, n) {
                t[n] = !0
            }
            )),
            t
        }(e) : x.extend({}, e);
        var t, n, i, r, o = [], a = [], s = -1, l = function() {
            for (r = r || e.once,
            i = t = !0; a.length; s = -1)
                for (n = a.shift(); ++s < o.length; )
                    !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length,
                    n = !1);
            e.memory || (n = !1),
            t = !1,
            r && (o = n ? [] : "")
        }, u = {
            add: function() {
                return o && (n && !t && (s = o.length - 1,
                a.push(n)),
                function t(n) {
                    x.each(n, (function(n, i) {
                        h(i) ? e.unique && u.has(i) || o.push(i) : i && i.length && "string" !== b(i) && t(i)
                    }
                    ))
                }(arguments),
                n && !t && l()),
                this
            },
            remove: function() {
                return x.each(arguments, (function(e, t) {
                    for (var n; (n = x.inArray(t, o, n)) > -1; )
                        o.splice(n, 1),
                        n <= s && s--
                }
                )),
                this
            },
            has: function(e) {
                return e ? x.inArray(e, o) > -1 : o.length > 0
            },
            empty: function() {
                return o && (o = []),
                this
            },
            disable: function() {
                return r = a = [],
                o = n = "",
                this
            },
            disabled: function() {
                return !o
            },
            lock: function() {
                return r = a = [],
                n || t || (o = n = ""),
                this
            },
            locked: function() {
                return !!r
            },
            fireWith: function(e, n) {
                return r || (n = [e, (n = n || []).slice ? n.slice() : n],
                a.push(n),
                t || l()),
                this
            },
            fire: function() {
                return u.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return u
    }
    ,
    x.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2], ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , r = {
                state: function() {
                    return i
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return r.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return x.Deferred((function(t) {
                        x.each(n, (function(n, i) {
                            var r = h(e[i[4]]) && e[i[4]];
                            o[i[1]]((function() {
                                var e = r && r.apply(this, arguments);
                                e && h(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                            }
                            ))
                        }
                        )),
                        e = null
                    }
                    )).promise()
                },
                then: function(t, i, r) {
                    var o = 0;
                    function a(t, n, i, r) {
                        return function() {
                            var s = this
                              , l = arguments
                              , u = function() {
                                var e, u;
                                if (!(t < o)) {
                                    if ((e = i.apply(s, l)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    u = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    h(u) ? r ? u.call(e, a(o, n, P, r), a(o, n, R, r)) : (o++,
                                    u.call(e, a(o, n, P, r), a(o, n, R, r), a(o, n, P, n.notifyWith))) : (i !== P && (s = void 0,
                                    l = [e]),
                                    (r || n.resolveWith)(s, l))
                                }
                            }
                              , c = r ? u : function() {
                                try {
                                    u()
                                } catch (e) {
                                    x.Deferred.exceptionHook && x.Deferred.exceptionHook(e, c.stackTrace),
                                    t + 1 >= o && (i !== R && (s = void 0,
                                    l = [e]),
                                    n.rejectWith(s, l))
                                }
                            }
                            ;
                            t ? c() : (x.Deferred.getStackHook && (c.stackTrace = x.Deferred.getStackHook()),
                            e.setTimeout(c))
                        }
                    }
                    return x.Deferred((function(e) {
                        n[0][3].add(a(0, e, h(r) ? r : P, e.notifyWith)),
                        n[1][3].add(a(0, e, h(t) ? t : P)),
                        n[2][3].add(a(0, e, h(i) ? i : R))
                    }
                    )).promise()
                },
                promise: function(e) {
                    return null != e ? x.extend(e, r) : r
                }
            }
              , o = {};
            return x.each(n, (function(e, t) {
                var a = t[2]
                  , s = t[5];
                r[t[1]] = a.add,
                s && a.add((function() {
                    i = s
                }
                ), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                a.add(t[3].fire),
                o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                }
                ,
                o[t[0] + "With"] = a.fireWith
            }
            )),
            r.promise(o),
            t && t.call(o, o),
            o
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , i = Array(n)
              , o = r.call(arguments)
              , a = x.Deferred()
              , s = function(e) {
                return function(n) {
                    i[e] = this,
                    o[e] = arguments.length > 1 ? r.call(arguments) : n,
                    --t || a.resolveWith(i, o)
                }
            };
            if (t <= 1 && (q(e, a.done(s(n)).resolve, a.reject, !t),
            "pending" === a.state() || h(o[n] && o[n].then)))
                return a.then();
            for (; n--; )
                q(o[n], s(n), a.reject);
            return a.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    x.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && H.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    x.readyException = function(t) {
        e.setTimeout((function() {
            throw t
        }
        ))
    }
    ;
    var F = x.Deferred();
    function B() {
        m.removeEventListener("DOMContentLoaded", B),
        e.removeEventListener("load", B),
        x.ready()
    }
    x.fn.ready = function(e) {
        return F.then(e).catch((function(e) {
            x.readyException(e)
        }
        )),
        this
    }
    ,
    x.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --x.readyWait : x.isReady) || (x.isReady = !0,
            !0 !== e && --x.readyWait > 0 || F.resolveWith(m, [x]))
        }
    }),
    x.ready.then = F.then,
    "complete" === m.readyState || "loading" !== m.readyState && !m.documentElement.doScroll ? e.setTimeout(x.ready) : (m.addEventListener("DOMContentLoaded", B),
    e.addEventListener("load", B));
    var W = function(e, t, n, i, r, o, a) {
        var s = 0
          , l = e.length
          , u = null == n;
        if ("object" === b(n))
            for (s in r = !0,
            n)
                W(e, t, s, n[s], !0, o, a);
        else if (void 0 !== i && (r = !0,
        h(i) || (a = !0),
        u && (a ? (t.call(e, i),
        t = null) : (u = t,
        t = function(e, t, n) {
            return u.call(x(e), n)
        }
        )),
        t))
            for (; s < l; s++)
                t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
    }
      , z = /^-ms-/
      , V = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase()
    }
    function $(e) {
        return e.replace(z, "ms-").replace(V, U)
    }
    var X = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function Q() {
        this.expando = x.expando + Q.uid++
    }
    Q.uid = 1,
    Q.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t)
                r[$(t)] = n;
            else
                for (i in t)
                    r[$(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][$(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map($) : (t = $(t))in i ? [t] : t.match(M) || []).length;
                    for (; n--; )
                        delete i[t[n]]
                }
                (void 0 === t || x.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !x.isEmptyObject(t)
        }
    };
    var G = new Q
      , Y = new Q
      , K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , J = /[A-Z]/g;
    function Z(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(J, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = function(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : K.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {}
                Y.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    x.extend({
        hasData: function(e) {
            return Y.hasData(e) || G.hasData(e)
        },
        data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        removeData: function(e, t) {
            Y.remove(e, t)
        },
        _data: function(e, t, n) {
            return G.access(e, t, n)
        },
        _removeData: function(e, t) {
            G.remove(e, t)
        }
    }),
    x.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = Y.get(o),
                1 === o.nodeType && !G.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = $(i.slice(5)),
                        Z(o, i, r[i]));
                    G.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each((function() {
                Y.set(this, e)
            }
            )) : W(this, (function(t) {
                var n;
                if (o && void 0 === t)
                    return void 0 !== (n = Y.get(o, e)) || void 0 !== (n = Z(o, e)) ? n : void 0;
                this.each((function() {
                    Y.set(this, e, t)
                }
                ))
            }
            ), null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each((function() {
                Y.remove(this, e)
            }
            ))
        }
    }),
    x.extend({
        queue: function(e, t, n) {
            var i;
            if (e)
                return t = (t || "fx") + "queue",
                i = G.get(e, t),
                n && (!i || Array.isArray(n) ? i = G.access(e, t, x.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t)
              , i = n.length
              , r = n.shift()
              , o = x._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(),
            i--),
            r && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(e, (function() {
                x.dequeue(e, t)
            }
            ), o)),
            !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return G.get(e, n) || G.access(e, n, {
                empty: x.Callbacks("once memory").add((function() {
                    G.remove(e, [t + "queue", n])
                }
                ))
            })
        }
    }),
    x.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? x.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                var n = x.queue(this, e, t);
                x._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e)
            }
            ))
        },
        dequeue: function(e) {
            return this.each((function() {
                x.dequeue(this, e)
            }
            ))
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1, r = x.Deferred(), o = this, a = this.length, s = function() {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (n = G.get(o[a], e + "queueHooks")) && n.empty && (i++,
                n.empty.add(s));
            return s(),
            r.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$","i")
      , ne = ["Top", "Right", "Bottom", "Left"]
      , ie = m.documentElement
      , re = function(e) {
        return x.contains(e.ownerDocument, e)
    }
      , oe = {
        composed: !0
    };
    ie.getRootNode && (re = function(e) {
        return x.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    }
    );
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && re(e) && "none" === x.css(e, "display")
    };
    function se(e, t, n, i) {
        var r, o, a = 20, s = i ? function() {
            return i.cur()
        }
        : function() {
            return x.css(e, t, "")
        }
        , l = s(), u = n && n[3] || (x.cssNumber[t] ? "" : "px"), c = e.nodeType && (x.cssNumber[t] || "px" !== u && +l) && te.exec(x.css(e, t));
        if (c && c[3] !== u) {
            for (l /= 2,
            u = u || c[3],
            c = +l || 1; a--; )
                x.style(e, t, c + u),
                (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            x.style(e, t, c + u),
            n = n || []
        }
        return n && (c = +c || +l || 0,
        r = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        i && (i.unit = u,
        i.start = c,
        i.end = r)),
        r
    }
    var le = {};
    function ue(e) {
        var t, n = e.ownerDocument, i = e.nodeName, r = le[i];
        return r || (t = n.body.appendChild(n.createElement(i)),
        r = x.css(t, "display"),
        t.parentNode.removeChild(t),
        "none" === r && (r = "block"),
        le[i] = r,
        r)
    }
    function ce(e, t) {
        for (var n, i, r = [], o = 0, a = e.length; o < a; o++)
            (i = e[o]).style && (n = i.style.display,
            t ? ("none" === n && (r[o] = G.get(i, "display") || null,
            r[o] || (i.style.display = "")),
            "" === i.style.display && ae(i) && (r[o] = ue(i))) : "none" !== n && (r[o] = "none",
            G.set(i, "display", n)));
        for (o = 0; o < a; o++)
            null != r[o] && (e[o].style.display = r[o]);
        return e
    }
    x.fn.extend({
        show: function() {
            return ce(this, !0)
        },
        hide: function() {
            return ce(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                ae(this) ? x(this).show() : x(this).hide()
            }
            ))
        }
    });
    var de, fe, pe = /^(?:checkbox|radio)$/i, he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, ge = /^$|^module$|\/(?:java|ecma)script/i;
    de = m.createDocumentFragment().appendChild(m.createElement("div")),
    (fe = m.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    de.appendChild(fe),
    p.checkClone = de.cloneNode(!0).cloneNode(!0).lastChild.checked,
    de.innerHTML = "<textarea>x</textarea>",
    p.noCloneChecked = !!de.cloneNode(!0).lastChild.defaultValue,
    de.innerHTML = "<option></option>",
    p.option = !!de.lastChild;
    var me = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ve(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && D(e, t) ? x.merge([e], n) : n
    }
    function ye(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"))
    }
    me.tbody = me.tfoot = me.colgroup = me.caption = me.thead,
    me.th = me.td,
    p.option || (me.optgroup = me.option = [1, "<select multiple='multiple'>", "</select>"]);
    var be = /<|&#?\w+;/;
    function we(e, t, n, i, r) {
        for (var o, a, s, l, u, c, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === b(o))
                    x.merge(f, o.nodeType ? [o] : o);
                else if (be.test(o)) {
                    for (a = a || d.appendChild(t.createElement("div")),
                    s = (he.exec(o) || ["", ""])[1].toLowerCase(),
                    l = me[s] || me._default,
                    a.innerHTML = l[1] + x.htmlPrefilter(o) + l[2],
                    c = l[0]; c--; )
                        a = a.lastChild;
                    x.merge(f, a.childNodes),
                    (a = d.firstChild).textContent = ""
                } else
                    f.push(t.createTextNode(o));
        for (d.textContent = "",
        p = 0; o = f[p++]; )
            if (i && x.inArray(o, i) > -1)
                r && r.push(o);
            else if (u = re(o),
            a = ve(d.appendChild(o), "script"),
            u && ye(a),
            n)
                for (c = 0; o = a[c++]; )
                    ge.test(o.type || "") && n.push(o);
        return d
    }
    var xe = /^([^.]*)(?:\.(.+)|)/;
    function Te() {
        return !0
    }
    function _e() {
        return !1
    }
    function Ee(e, t) {
        return e === function() {
            try {
                return m.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function Ce(e, t, n, i, r, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (i = i || n,
            n = void 0),
            t)
                Ce(e, s, n, i, t[s], o);
            return e
        }
        if (null == i && null == r ? (r = n,
        i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
        i = void 0) : (r = i,
        i = n,
        n = void 0)),
        !1 === r)
            r = _e;
        else if (!r)
            return e;
        return 1 === o && (a = r,
        r = function(e) {
            return x().off(e),
            a.apply(this, arguments)
        }
        ,
        r.guid = a.guid || (a.guid = x.guid++)),
        e.each((function() {
            x.event.add(this, t, r, i, n)
        }
        ))
    }
    function Se(e, t, n) {
        n ? (G.set(e, t, !1),
        x.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var i, o, a = G.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (a.length)
                        (x.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (a = r.call(arguments),
                    G.set(this, t, a),
                    i = n(this, t),
                    this[t](),
                    a !== (o = G.get(this, t)) || i ? G.set(this, t, !1) : o = {},
                    a !== o)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        o && o.value
                } else
                    a.length && (G.set(this, t, {
                        value: x.event.trigger(x.extend(a[0], x.Event.prototype), a.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === G.get(e, t) && x.event.add(e, t, Te)
    }
    x.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, a, s, l, u, c, d, f, p, h, g, m = G.get(e);
            if (X(e))
                for (n.handler && (n = (o = n).handler,
                r = o.selector),
                r && x.find.matchesSelector(ie, r),
                n.guid || (n.guid = x.guid++),
                (l = m.events) || (l = m.events = Object.create(null)),
                (a = m.handle) || (a = m.handle = function(t) {
                    return void 0 !== x && x.event.triggered !== t.type ? x.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                u = (t = (t || "").match(M) || [""]).length; u--; )
                    p = g = (s = xe.exec(t[u]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    p && (d = x.event.special[p] || {},
                    p = (r ? d.delegateType : d.bindType) || p,
                    d = x.event.special[p] || {},
                    c = x.extend({
                        type: p,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && x.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    }, o),
                    (f = l[p]) || ((f = l[p] = []).delegateCount = 0,
                    d.setup && !1 !== d.setup.call(e, i, h, a) || e.addEventListener && e.addEventListener(p, a)),
                    d.add && (d.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    r ? f.splice(f.delegateCount++, 0, c) : f.push(c),
                    x.event.global[p] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, a, s, l, u, c, d, f, p, h, g, m = G.hasData(e) && G.get(e);
            if (m && (l = m.events)) {
                for (u = (t = (t || "").match(M) || [""]).length; u--; )
                    if (p = g = (s = xe.exec(t[u]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    p) {
                        for (d = x.event.special[p] || {},
                        f = l[p = (i ? d.delegateType : d.bindType) || p] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = f.length; o--; )
                            c = f[o],
                            !r && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(o, 1),
                            c.selector && f.delegateCount--,
                            d.remove && d.remove.call(e, c));
                        a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || x.removeEvent(e, p, m.handle),
                        delete l[p])
                    } else
                        for (p in l)
                            x.event.remove(e, p + t[u], n, i, !0);
                x.isEmptyObject(l) && G.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, a, s = new Array(arguments.length), l = x.event.fix(e), u = (G.get(this, "events") || Object.create(null))[l.type] || [], c = x.event.special[l.type] || {};
            for (s[0] = l,
            t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (l.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
                for (a = x.event.handlers.call(this, l, u),
                t = 0; (r = a[t++]) && !l.isPropagationStopped(); )
                    for (l.currentTarget = r.elem,
                    n = 0; (o = r.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                        l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o,
                        l.data = o.data,
                        void 0 !== (i = ((x.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s)) && !1 === (l.result = i) && (l.preventDefault(),
                        l.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, l),
                l.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, a, s = [], l = t.delegateCount, u = e.target;
            if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < l; n++)
                            void 0 === a[r = (i = t[n]).selector + " "] && (a[r] = i.needsContext ? x(r, this).index(u) > -1 : x.find(r, this, null, [u]).length),
                            a[r] && o.push(i);
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return u = this,
            l < t.length && s.push({
                elem: u,
                handlers: t.slice(l)
            }),
            s
        },
        addProp: function(e, t) {
            Object.defineProperty(x.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: h(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[x.expando] ? e : new x.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && D(t, "input") && Se(t, "click", Te),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && D(t, "input") && Se(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && D(t, "input") && G.get(t, "click") || D(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    x.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    x.Event = function(e, t) {
        if (!(this instanceof x.Event))
            return new x.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : _e,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && x.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[x.expando] = !0
    }
    ,
    x.Event.prototype = {
        constructor: x.Event,
        isDefaultPrevented: _e,
        isPropagationStopped: _e,
        isImmediatePropagationStopped: _e,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Te,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Te,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Te,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    x.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, x.event.addProp),
    x.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        x.event.special[e] = {
            setup: function() {
                return Se(this, e, Ee),
                !1
            },
            trigger: function() {
                return Se(this, e),
                !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    }
    )),
    x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this, r = e.relatedTarget, o = e.handleObj;
                return r && (r === i || x.contains(i, r)) || (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }
    )),
    x.fn.extend({
        on: function(e, t, n, i) {
            return Ce(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return Ce(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof e) {
                for (r in e)
                    this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = _e),
            this.each((function() {
                x.event.remove(this, e, n, t)
            }
            ))
        }
    });
    var De = /<script|<style|<link/i
      , Ae = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function ke(e, t) {
        return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && x(e).children("tbody")[0] || e
    }
    function Oe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function je(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Ie(e, t) {
        var n, i, r, o, a, s;
        if (1 === t.nodeType) {
            if (G.hasData(e) && (s = G.get(e).events))
                for (r in G.remove(t, "handle events"),
                s)
                    for (n = 0,
                    i = s[r].length; n < i; n++)
                        x.event.add(t, r, s[r][n]);
            Y.hasData(e) && (o = Y.access(e),
            a = x.extend({}, o),
            Y.set(t, a))
        }
    }
    function Le(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function Me(e, t, n, i) {
        t = o(t);
        var r, a, s, l, u, c, d = 0, f = e.length, g = f - 1, m = t[0], v = h(m);
        if (v || f > 1 && "string" == typeof m && !p.checkClone && Ae.test(m))
            return e.each((function(r) {
                var o = e.eq(r);
                v && (t[0] = m.call(this, r, o.html())),
                Me(o, t, n, i)
            }
            ));
        if (f && (a = (r = we(t, e[0].ownerDocument, !1, e, i)).firstChild,
        1 === r.childNodes.length && (r = a),
        a || i)) {
            for (l = (s = x.map(ve(r, "script"), Oe)).length; d < f; d++)
                u = r,
                d !== g && (u = x.clone(u, !0, !0),
                l && x.merge(s, ve(u, "script"))),
                n.call(e[d], u, d);
            if (l)
                for (c = s[s.length - 1].ownerDocument,
                x.map(s, je),
                d = 0; d < l; d++)
                    u = s[d],
                    ge.test(u.type || "") && !G.access(u, "globalEval") && x.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? x._evalUrl && !u.noModule && x._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, c) : y(u.textContent.replace(Ne, ""), u, c))
        }
        return e
    }
    function Pe(e, t, n) {
        for (var i, r = t ? x.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
            n || 1 !== i.nodeType || x.cleanData(ve(i)),
            i.parentNode && (n && re(i) && ye(ve(i, "script")),
            i.parentNode.removeChild(i));
        return e
    }
    x.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var i, r, o, a, s = e.cloneNode(!0), l = re(e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (a = ve(s),
                i = 0,
                r = (o = ve(e)).length; i < r; i++)
                    Le(o[i], a[i]);
            if (t)
                if (n)
                    for (o = o || ve(e),
                    a = a || ve(s),
                    i = 0,
                    r = o.length; i < r; i++)
                        Ie(o[i], a[i]);
                else
                    Ie(e, s);
            return (a = ve(s, "script")).length > 0 && ye(a, !l && ve(e, "script")),
            s
        },
        cleanData: function(e) {
            for (var t, n, i, r = x.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (X(n)) {
                    if (t = n[G.expando]) {
                        if (t.events)
                            for (i in t.events)
                                r[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
                        n[G.expando] = void 0
                    }
                    n[Y.expando] && (n[Y.expando] = void 0)
                }
        }
    }),
    x.fn.extend({
        detach: function(e) {
            return Pe(this, e, !0)
        },
        remove: function(e) {
            return Pe(this, e)
        },
        text: function(e) {
            return W(this, (function(e) {
                return void 0 === e ? x.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }
                ))
            }
            ), null, e, arguments.length)
        },
        append: function() {
            return Me(this, arguments, (function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ke(this, e).appendChild(e)
            }
            ))
        },
        prepend: function() {
            return Me(this, arguments, (function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ke(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }
            ))
        },
        before: function() {
            return Me(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }
            ))
        },
        after: function() {
            return Me(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }
            ))
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (x.cleanData(ve(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map((function() {
                return x.clone(this, e, t)
            }
            ))
        },
        html: function(e) {
            return W(this, (function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !De.test(e) && !me[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = x.htmlPrefilter(e);
                    try {
                        for (; n < i; n++)
                            1 === (t = this[n] || {}).nodeType && (x.cleanData(ve(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }
            ), null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Me(this, arguments, (function(t) {
                var n = this.parentNode;
                x.inArray(this, e) < 0 && (x.cleanData(ve(this)),
                n && n.replaceChild(t, this))
            }
            ), e)
        }
    }),
    x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(e, t) {
        x.fn[e] = function(e) {
            for (var n, i = [], r = x(e), o = r.length - 1, s = 0; s <= o; s++)
                n = s === o ? this : this.clone(!0),
                x(r[s])[t](n),
                a.apply(i, n.get());
            return this.pushStack(i)
        }
    }
    ));
    var Re = new RegExp("^(" + ee + ")(?!px)[a-z%]+$","i")
      , qe = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
      , He = function(e, t, n) {
        var i, r, o = {};
        for (r in t)
            o[r] = e.style[r],
            e.style[r] = t[r];
        for (r in i = n.call(e),
        t)
            e.style[r] = o[r];
        return i
    }
      , Fe = new RegExp(ne.join("|"),"i");
    function Be(e, t, n) {
        var i, r, o, a, s = e.style;
        return (n = n || qe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || re(e) || (a = x.style(e, t)),
        !p.pixelBoxStyles() && Re.test(a) && Fe.test(t) && (i = s.width,
        r = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = i,
        s.minWidth = r,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function We(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function t() {
            if (c) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                ie.appendChild(u).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top,
                l = 12 === n(t.marginLeft),
                c.style.right = "60%",
                a = 36 === n(t.right),
                r = 36 === n(t.width),
                c.style.position = "absolute",
                o = 12 === n(c.offsetWidth / 3),
                ie.removeChild(u),
                c = null
            }
        }
        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, r, o, a, s, l, u = m.createElement("div"), c = m.createElement("div");
        c.style && (c.style.backgroundClip = "content-box",
        c.cloneNode(!0).style.backgroundClip = "",
        p.clearCloneStyle = "content-box" === c.style.backgroundClip,
        x.extend(p, {
            boxSizingReliable: function() {
                return t(),
                r
            },
            pixelBoxStyles: function() {
                return t(),
                a
            },
            pixelPosition: function() {
                return t(),
                i
            },
            reliableMarginLeft: function() {
                return t(),
                l
            },
            scrollboxSize: function() {
                return t(),
                o
            },
            reliableTrDimensions: function() {
                var t, n, i, r;
                return null == s && (t = m.createElement("table"),
                n = m.createElement("tr"),
                i = m.createElement("div"),
                t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                n.style.cssText = "border:1px solid",
                n.style.height = "1px",
                i.style.height = "9px",
                i.style.display = "block",
                ie.appendChild(t).appendChild(n).appendChild(i),
                r = e.getComputedStyle(n),
                s = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === n.offsetHeight,
                ie.removeChild(t)),
                s
            }
        }))
    }();
    var ze = ["Webkit", "Moz", "ms"]
      , Ve = m.createElement("div").style
      , Ue = {};
    function $e(e) {
        var t = x.cssProps[e] || Ue[e];
        return t || (e in Ve ? e : Ue[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = ze.length; n--; )
                if ((e = ze[n] + t)in Ve)
                    return e
        }(e) || e)
    }
    var Xe = /^(none|table(?!-c[ea]).+)/
      , Qe = /^--/
      , Ge = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ye = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Ke(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }
    function Je(e, t, n, i, r, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , l = 0;
        if (n === (i ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (l += x.css(e, n + ne[a], !0, r)),
            i ? ("content" === n && (l -= x.css(e, "padding" + ne[a], !0, r)),
            "margin" !== n && (l -= x.css(e, "border" + ne[a] + "Width", !0, r))) : (l += x.css(e, "padding" + ne[a], !0, r),
            "padding" !== n ? l += x.css(e, "border" + ne[a] + "Width", !0, r) : s += x.css(e, "border" + ne[a] + "Width", !0, r));
        return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5)) || 0),
        l
    }
    function Ze(e, t, n) {
        var i = qe(e)
          , r = (!p.boxSizingReliable() || n) && "border-box" === x.css(e, "boxSizing", !1, i)
          , o = r
          , a = Be(e, t, i)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Re.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!p.boxSizingReliable() && r || !p.reliableTrDimensions() && D(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === x.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === x.css(e, "boxSizing", !1, i),
        (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + Je(e, t, n || (r ? "border" : "content"), o, i, a) + "px"
    }
    function et(e, t, n, i, r) {
        return new et.prototype.init(e,t,n,i,r)
    }
    x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = $(t), l = Qe.test(t), u = e.style;
                if (l || (t = $e(s)),
                a = x.cssHooks[t] || x.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (r = a.get(e, !1, i)) ? r : u[t];
                "string" === (o = typeof n) && (r = te.exec(n)) && r[1] && (n = se(e, t, r),
                o = "number"),
                null != n && n == n && ("number" !== o || l || (n += r && r[3] || (x.cssNumber[s] ? "" : "px")),
                p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var r, o, a, s = $(t);
            return Qe.test(t) || (t = $e(s)),
            (a = x.cssHooks[t] || x.cssHooks[s]) && "get"in a && (r = a.get(e, !0, n)),
            void 0 === r && (r = Be(e, t, i)),
            "normal" === r && t in Ye && (r = Ye[t]),
            "" === n || n ? (o = parseFloat(r),
            !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }),
    x.each(["height", "width"], (function(e, t) {
        x.cssHooks[t] = {
            get: function(e, n, i) {
                if (n)
                    return !Xe.test(x.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, t, i) : He(e, Ge, (function() {
                        return Ze(e, t, i)
                    }
                    ))
            },
            set: function(e, n, i) {
                var r, o = qe(e), a = !p.scrollboxSize() && "absolute" === o.position, s = (a || i) && "border-box" === x.css(e, "boxSizing", !1, o), l = i ? Je(e, t, i, s, o) : 0;
                return s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Je(e, t, "border", !1, o) - .5)),
                l && (r = te.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n,
                n = x.css(e, t)),
                Ke(0, n, l)
            }
        }
    }
    )),
    x.cssHooks.marginLeft = We(p.reliableMarginLeft, (function(e, t) {
        if (t)
            return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - He(e, {
                marginLeft: 0
            }, (function() {
                return e.getBoundingClientRect().left
            }
            ))) + "px"
    }
    )),
    x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                    r[e + ne[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        },
        "margin" !== e && (x.cssHooks[e + t].set = Ke)
    }
    )),
    x.fn.extend({
        css: function(e, t) {
            return W(this, (function(e, t, n) {
                var i, r, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (i = qe(e),
                    r = t.length; a < r; a++)
                        o[t[a]] = x.css(e, t[a], !1, i);
                    return o
                }
                return void 0 !== n ? x.style(e, t, n) : x.css(e, t)
            }
            ), e, t, arguments.length > 1)
        }
    }),
    x.Tween = et,
    et.prototype = {
        constructor: et,
        init: function(e, t, n, i, r, o) {
            this.elem = e,
            this.prop = n,
            this.easing = r || x.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = o || (x.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : et.propHooks._default.set(this),
            this
        }
    },
    et.prototype.init.prototype = et.prototype,
    et.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = x.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !x.cssHooks[e.prop] && null == e.elem.style[$e(e.prop)] ? e.elem[e.prop] = e.now : x.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    et.propHooks.scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    x.fx = et.prototype.init,
    x.fx.step = {};
    var tt, nt, it = /^(?:toggle|show|hide)$/, rt = /queueHooks$/;
    function ot() {
        nt && (!1 === m.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(ot) : e.setTimeout(ot, x.fx.interval),
        x.fx.tick())
    }
    function at() {
        return e.setTimeout((function() {
            tt = void 0
        }
        )),
        tt = Date.now()
    }
    function st(e, t) {
        var n, i = 0, r = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            r["margin" + (n = ne[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function lt(e, t, n) {
        for (var i, r = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), o = 0, a = r.length; o < a; o++)
            if (i = r[o].call(n, t, e))
                return i
    }
    function ut(e, t, n) {
        var i, r, o = 0, a = ut.prefilters.length, s = x.Deferred().always((function() {
            delete l.elem
        }
        )), l = function() {
            if (r)
                return !1;
            for (var t = tt || at(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++)
                u.tweens[o].run(i);
            return s.notifyWith(e, [u, i, n]),
            i < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]),
            s.resolveWith(e, [u]),
            !1)
        }, u = s.promise({
            elem: e,
            props: x.extend({}, t),
            opts: x.extend(!0, {
                specialEasing: {},
                easing: x.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: tt || at(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(i),
                i
            },
            stop: function(t) {
                var n = 0
                  , i = t ? u.tweens.length : 0;
                if (r)
                    return this;
                for (r = !0; n < i; n++)
                    u.tweens[n].run(1);
                return t ? (s.notifyWith(e, [u, 1, 0]),
                s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]),
                this
            }
        }), c = u.props;
        for (!function(e, t) {
            var n, i, r, o, a;
            for (n in e)
                if (r = t[i = $(n)],
                o = e[n],
                Array.isArray(o) && (r = o[1],
                o = e[n] = o[0]),
                n !== i && (e[i] = o,
                delete e[n]),
                (a = x.cssHooks[i]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[i],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = r);
                else
                    t[i] = r
        }(c, u.opts.specialEasing); o < a; o++)
            if (i = ut.prefilters[o].call(u, e, c, u.opts))
                return h(i.stop) && (x._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)),
                i;
        return x.map(c, lt, u),
        h(u.opts.start) && u.opts.start.call(e, u),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
        x.fx.timer(x.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })),
        u
    }
    x.Animation = x.extend(ut, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            h(e) ? (t = e,
            e = ["*"]) : e = e.match(M);
            for (var n, i = 0, r = e.length; i < r; i++)
                n = e[i],
                ut.tweeners[n] = ut.tweeners[n] || [],
                ut.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, r, o, a, s, l, u, c, d = "width"in t || "height"in t, f = this, p = {}, h = e.style, g = e.nodeType && ae(e), m = G.get(e, "fxshow");
            for (i in n.queue || (null == (a = x._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            f.always((function() {
                f.always((function() {
                    a.unqueued--,
                    x.queue(e, "fx").length || a.empty.fire()
                }
                ))
            }
            ))),
            t)
                if (r = t[i],
                it.test(r)) {
                    if (delete t[i],
                    o = o || "toggle" === r,
                    r === (g ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i])
                            continue;
                        g = !0
                    }
                    p[i] = m && m[i] || x.style(e, i)
                }
            if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(p))
                for (i in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (u = m && m.display) && (u = G.get(e, "display")),
                "none" === (c = x.css(e, "display")) && (u ? c = u : (ce([e], !0),
                u = e.style.display || u,
                c = x.css(e, "display"),
                ce([e]))),
                ("inline" === c || "inline-block" === c && null != u) && "none" === x.css(e, "float") && (l || (f.done((function() {
                    h.display = u
                }
                )),
                null == u && (c = h.display,
                u = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                f.always((function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                }
                ))),
                l = !1,
                p)
                    l || (m ? "hidden"in m && (g = m.hidden) : m = G.access(e, "fxshow", {
                        display: u
                    }),
                    o && (m.hidden = !g),
                    g && ce([e], !0),
                    f.done((function() {
                        for (i in g || ce([e]),
                        G.remove(e, "fxshow"),
                        p)
                            x.style(e, i, p[i])
                    }
                    ))),
                    l = lt(g ? m[i] : 0, i, f),
                    i in m || (m[i] = l.start,
                    g && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
        }
    }),
    x.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || h(e) && e,
            duration: e,
            easing: n && t || t && !h(t) && t
        };
        return x.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in x.fx.speeds ? i.duration = x.fx.speeds[i.duration] : i.duration = x.fx.speeds._default),
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            h(i.old) && i.old.call(this),
            i.queue && x.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    x.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var r = x.isEmptyObject(e)
              , o = x.speed(t, n, i)
              , a = function() {
                var t = ut(this, x.extend({}, e), o);
                (r || G.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && this.queue(e || "fx", []),
            this.each((function() {
                var t = !0
                  , r = null != e && e + "queueHooks"
                  , o = x.timers
                  , a = G.get(this);
                if (r)
                    a[r] && a[r].stop && i(a[r]);
                else
                    for (r in a)
                        a[r] && a[r].stop && rt.test(r) && i(a[r]);
                for (r = o.length; r--; )
                    o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n),
                    t = !1,
                    o.splice(r, 1));
                !t && n || x.dequeue(this, e)
            }
            ))
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each((function() {
                var t, n = G.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = x.timers, a = i ? i.length : 0;
                for (n.finish = !0,
                x.queue(this, e, []),
                r && r.stop && r.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; t < a; t++)
                    i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            }
            ))
        }
    }),
    x.each(["toggle", "show", "hide"], (function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(st(t, !0), e, i, r)
        }
    }
    )),
    x.each({
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, (function(e, t) {
        x.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }
    )),
    x.timers = [],
    x.fx.tick = function() {
        var e, t = 0, n = x.timers;
        for (tt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || x.fx.stop(),
        tt = void 0
    }
    ,
    x.fx.timer = function(e) {
        x.timers.push(e),
        x.fx.start()
    }
    ,
    x.fx.interval = 13,
    x.fx.start = function() {
        nt || (nt = !0,
        ot())
    }
    ,
    x.fx.stop = function() {
        nt = null
    }
    ,
    x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    x.fn.delay = function(t, n) {
        return t = x.fx && x.fx.speeds[t] || t,
        n = n || "fx",
        this.queue(n, (function(n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(r)
            }
        }
        ))
    }
    ,
    function() {
        var e = m.createElement("input")
          , t = m.createElement("select").appendChild(m.createElement("option"));
        e.type = "checkbox",
        p.checkOn = "" !== e.value,
        p.optSelected = t.selected,
        (e = m.createElement("input")).value = "t",
        e.type = "radio",
        p.radioValue = "t" === e.value
    }();
    var ct, dt = x.expr.attrHandle;
    x.fn.extend({
        attr: function(e, t) {
            return W(this, x.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each((function() {
                x.removeAttr(this, e)
            }
            ))
        }
    }),
    x.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? x.prop(e, t, n) : (1 === o && x.isXMLDoc(e) || (r = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? ct : void 0)),
                void 0 !== n ? null === n ? void x.removeAttr(e, t) : r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : r && "get"in r && null !== (i = r.get(e, t)) ? i : null == (i = x.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!p.radioValue && "radio" === t && D(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0, r = t && t.match(M);
            if (r && 1 === e.nodeType)
                for (; n = r[i++]; )
                    e.removeAttribute(n)
        }
    }),
    ct = {
        set: function(e, t, n) {
            return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    x.each(x.expr.match.bool.source.match(/\w+/g), (function(e, t) {
        var n = dt[t] || x.find.attr;
        dt[t] = function(e, t, i) {
            var r, o, a = t.toLowerCase();
            return i || (o = dt[a],
            dt[a] = r,
            r = null != n(e, t, i) ? a : null,
            dt[a] = o),
            r
        }
    }
    ));
    var ft = /^(?:input|select|textarea|button)$/i
      , pt = /^(?:a|area)$/i;
    function ht(e) {
        return (e.match(M) || []).join(" ")
    }
    function gt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(M) || []
    }
    x.fn.extend({
        prop: function(e, t) {
            return W(this, x.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each((function() {
                delete this[x.propFix[e] || e]
            }
            ))
        }
    }),
    x.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && x.isXMLDoc(e) || (t = x.propFix[t] || t,
                r = x.propHooks[t]),
                void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get"in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ft.test(e.nodeName) || pt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    p.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        x.propFix[this.toLowerCase()] = this
    }
    )),
    x.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, a, s, l = 0;
            if (h(e))
                return this.each((function(t) {
                    x(this).addClass(e.call(this, t, gt(this)))
                }
                ));
            if ((t = mt(e)).length)
                for (; n = this[l++]; )
                    if (r = gt(n),
                    i = 1 === n.nodeType && " " + ht(r) + " ") {
                        for (a = 0; o = t[a++]; )
                            i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (s = ht(i)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, a, s, l = 0;
            if (h(e))
                return this.each((function(t) {
                    x(this).removeClass(e.call(this, t, gt(this)))
                }
                ));
            if (!arguments.length)
                return this.attr("class", "");
            if ((t = mt(e)).length)
                for (; n = this[l++]; )
                    if (r = gt(n),
                    i = 1 === n.nodeType && " " + ht(r) + " ") {
                        for (a = 0; o = t[a++]; )
                            for (; i.indexOf(" " + o + " ") > -1; )
                                i = i.replace(" " + o + " ", " ");
                        r !== (s = ht(i)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : h(e) ? this.each((function(n) {
                x(this).toggleClass(e.call(this, n, gt(this), t), t)
            }
            )) : this.each((function() {
                var t, r, o, a;
                if (i)
                    for (r = 0,
                    o = x(this),
                    a = mt(e); t = a[r++]; )
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || ((t = gt(this)) && G.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : G.get(this, "__className__") || ""))
            }
            ))
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++]; )
                if (1 === n.nodeType && (" " + ht(gt(n)) + " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var vt = /\r/g;
    x.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = h(e),
            this.each((function(n) {
                var r;
                1 === this.nodeType && (null == (r = i ? e.call(this, n, x(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = x.map(r, (function(e) {
                    return null == e ? "" : e + ""
                }
                ))),
                (t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            }
            ))) : r ? (t = x.valHooks[r.type] || x.valHooks[r.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(vt, "") : null == n ? "" : n : void 0
        }
    }),
    x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : ht(x.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], l = a ? o + 1 : r.length;
                    for (i = o < 0 ? l : a ? o : 0; i < l; i++)
                        if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                            if (t = x(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = x.makeArray(t), a = r.length; a--; )
                        ((i = r[a]).selected = x.inArray(x.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    x.each(["radio", "checkbox"], (function() {
        x.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = x.inArray(x(e).val(), t) > -1
            }
        },
        p.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }
    )),
    p.focusin = "onfocusin"in e;
    var yt = /^(?:focusinfocus|focusoutblur)$/
      , bt = function(e) {
        e.stopPropagation()
    };
    x.extend(x.event, {
        trigger: function(t, n, i, r) {
            var o, a, s, l, u, d, f, p, v = [i || m], y = c.call(t, "type") ? t.type : t, b = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = p = s = i = i || m,
            3 !== i.nodeType && 8 !== i.nodeType && !yt.test(y + x.event.triggered) && (y.indexOf(".") > -1 && (b = y.split("."),
            y = b.shift(),
            b.sort()),
            u = y.indexOf(":") < 0 && "on" + y,
            (t = t[x.expando] ? t : new x.Event(y,"object" == typeof t && t)).isTrigger = r ? 2 : 3,
            t.namespace = b.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = i),
            n = null == n ? [t] : x.makeArray(n, [t]),
            f = x.event.special[y] || {},
            r || !f.trigger || !1 !== f.trigger.apply(i, n))) {
                if (!r && !f.noBubble && !g(i)) {
                    for (l = f.delegateType || y,
                    yt.test(l + y) || (a = a.parentNode); a; a = a.parentNode)
                        v.push(a),
                        s = a;
                    s === (i.ownerDocument || m) && v.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0; (a = v[o++]) && !t.isPropagationStopped(); )
                    p = a,
                    t.type = o > 1 ? l : f.bindType || y,
                    (d = (G.get(a, "events") || Object.create(null))[t.type] && G.get(a, "handle")) && d.apply(a, n),
                    (d = u && a[u]) && d.apply && X(a) && (t.result = d.apply(a, n),
                    !1 === t.result && t.preventDefault());
                return t.type = y,
                r || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(v.pop(), n) || !X(i) || u && h(i[y]) && !g(i) && ((s = i[u]) && (i[u] = null),
                x.event.triggered = y,
                t.isPropagationStopped() && p.addEventListener(y, bt),
                i[y](),
                t.isPropagationStopped() && p.removeEventListener(y, bt),
                x.event.triggered = void 0,
                s && (i[u] = s)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var i = x.extend(new x.Event, n, {
                type: e,
                isSimulated: !0
            });
            x.event.trigger(i, null, t)
        }
    }),
    x.fn.extend({
        trigger: function(e, t) {
            return this.each((function() {
                x.event.trigger(e, t, this)
            }
            ))
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return x.event.trigger(e, t, n, !0)
        }
    }),
    p.focusin || x.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        var n = function(e) {
            x.event.simulate(t, e.target, x.event.fix(e))
        };
        x.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this.document || this
                  , r = G.access(i, t);
                r || i.addEventListener(e, n, !0),
                G.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this.document || this
                  , r = G.access(i, t) - 1;
                r ? G.access(i, t, r) : (i.removeEventListener(e, n, !0),
                G.remove(i, t))
            }
        }
    }
    ));
    var wt = e.location
      , xt = {
        guid: Date.now()
    }
      , Tt = /\?/;
    x.parseXML = function(t) {
        var n, i;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {}
        return i = n && n.getElementsByTagName("parsererror")[0],
        n && !i || x.error("Invalid XML: " + (i ? x.map(i.childNodes, (function(e) {
            return e.textContent
        }
        )).join("\n") : t)),
        n
    }
    ;
    var _t = /\[\]$/
      , Et = /\r?\n/g
      , Ct = /^(?:submit|button|image|reset|file)$/i
      , St = /^(?:input|select|textarea|keygen)/i;
    function Dt(e, t, n, i) {
        var r;
        if (Array.isArray(t))
            x.each(t, (function(t, r) {
                n || _t.test(e) ? i(e, r) : Dt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
            }
            ));
        else if (n || "object" !== b(t))
            i(e, t);
        else
            for (r in t)
                Dt(e + "[" + r + "]", t[r], n, i)
    }
    x.param = function(e, t) {
        var n, i = [], r = function(e, t) {
            var n = h(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !x.isPlainObject(e))
            x.each(e, (function() {
                r(this.name, this.value)
            }
            ));
        else
            for (n in e)
                Dt(n, e[n], t, r);
        return i.join("&")
    }
    ,
    x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }
            )).filter((function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && St.test(this.nodeName) && !Ct.test(e) && (this.checked || !pe.test(e))
            }
            )).map((function(e, t) {
                var n = x(this).val();
                return null == n ? null : Array.isArray(n) ? x.map(n, (function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Et, "\r\n")
                    }
                }
                )) : {
                    name: t.name,
                    value: n.replace(Et, "\r\n")
                }
            }
            )).get()
        }
    });
    var At = /%20/g
      , Nt = /#.*$/
      , kt = /([?&])_=[^&]*/
      , Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , jt = /^(?:GET|HEAD)$/
      , It = /^\/\//
      , Lt = {}
      , Mt = {}
      , Pt = "*/".concat("*")
      , Rt = m.createElement("a");
    function qt(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var i, r = 0, o = t.toLowerCase().match(M) || [];
            if (h(n))
                for (; i = o[r++]; )
                    "+" === i[0] ? (i = i.slice(1) || "*",
                    (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }
    function Ht(e, t, n, i) {
        var r = {}
          , o = e === Mt;
        function a(s) {
            var l;
            return r[s] = !0,
            x.each(e[s] || [], (function(e, s) {
                var u = s(t, n, i);
                return "string" != typeof u || o || r[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u),
                a(u),
                !1)
            }
            )),
            l
        }
        return a(t.dataTypes[0]) || !r["*"] && a("*")
    }
    function Ft(e, t) {
        var n, i, r = x.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && x.extend(!0, e, i),
        e
    }
    Rt.href = wt.href,
    x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: wt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Pt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ft(Ft(e, x.ajaxSettings), t) : Ft(x.ajaxSettings, e)
        },
        ajaxPrefilter: qt(Lt),
        ajaxTransport: qt(Mt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var i, r, o, a, s, l, u, c, d, f, p = x.ajaxSetup({}, n), h = p.context || p, g = p.context && (h.nodeType || h.jquery) ? x(h) : x.event, v = x.Deferred(), y = x.Callbacks("once memory"), b = p.statusCode || {}, w = {}, T = {}, _ = "canceled", E = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (u) {
                        if (!a)
                            for (a = {}; t = Ot.exec(o); )
                                a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = a[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return u ? o : null
                },
                setRequestHeader: function(e, t) {
                    return null == u && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e,
                    w[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == u && (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (u)
                            E.always(e[E.status]);
                        else
                            for (t in e)
                                b[t] = [b[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || _;
                    return i && i.abort(t),
                    C(0, t),
                    this
                }
            };
            if (v.promise(E),
            p.url = ((t || p.url || wt.href) + "").replace(It, wt.protocol + "//"),
            p.type = n.method || n.type || p.method || p.type,
            p.dataTypes = (p.dataType || "*").toLowerCase().match(M) || [""],
            null == p.crossDomain) {
                l = m.createElement("a");
                try {
                    l.href = p.url,
                    l.href = l.href,
                    p.crossDomain = Rt.protocol + "//" + Rt.host != l.protocol + "//" + l.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)),
            Ht(Lt, p, n, E),
            u)
                return E;
            for (d in (c = x.event && p.global) && 0 == x.active++ && x.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !jt.test(p.type),
            r = p.url.replace(Nt, ""),
            p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(At, "+")) : (f = p.url.slice(r.length),
            p.data && (p.processData || "string" == typeof p.data) && (r += (Tt.test(r) ? "&" : "?") + p.data,
            delete p.data),
            !1 === p.cache && (r = r.replace(kt, "$1"),
            f = (Tt.test(r) ? "&" : "?") + "_=" + xt.guid++ + f),
            p.url = r + f),
            p.ifModified && (x.lastModified[r] && E.setRequestHeader("If-Modified-Since", x.lastModified[r]),
            x.etag[r] && E.setRequestHeader("If-None-Match", x.etag[r])),
            (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && E.setRequestHeader("Content-Type", p.contentType),
            E.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Pt + "; q=0.01" : "") : p.accepts["*"]),
            p.headers)
                E.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (!1 === p.beforeSend.call(h, E, p) || u))
                return E.abort();
            if (_ = "abort",
            y.add(p.complete),
            E.done(p.success),
            E.fail(p.error),
            i = Ht(Mt, p, n, E)) {
                if (E.readyState = 1,
                c && g.trigger("ajaxSend", [E, p]),
                u)
                    return E;
                p.async && p.timeout > 0 && (s = e.setTimeout((function() {
                    E.abort("timeout")
                }
                ), p.timeout));
                try {
                    u = !1,
                    i.send(w, C)
                } catch (e) {
                    if (u)
                        throw e;
                    C(-1, e)
                }
            } else
                C(-1, "No Transport");
            function C(t, n, a, l) {
                var d, f, m, w, T, _ = n;
                u || (u = !0,
                s && e.clearTimeout(s),
                i = void 0,
                o = l || "",
                E.readyState = t > 0 ? 4 : 0,
                d = t >= 200 && t < 300 || 304 === t,
                a && (w = function(e, t, n) {
                    for (var i, r, o, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in s)
                            if (s[r] && s[r].test(i)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0]in n)
                        o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            a || (a = r)
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== l[0] && l.unshift(o),
                        n[o]
                }(p, E, a)),
                !d && x.inArray("script", p.dataTypes) > -1 && x.inArray("json", p.dataTypes) < 0 && (p.converters["text script"] = function() {}
                ),
                w = function(e, t, n, i) {
                    var r, o, a, s, l, u = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            u[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o; )
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = o,
                        o = c.shift())
                            if ("*" === o)
                                o = l;
                            else if ("*" !== l && l !== o) {
                                if (!(a = u[l + " " + o] || u["* " + o]))
                                    for (r in u)
                                        if ((s = r.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                            !0 === a ? a = u[r] : !0 !== u[r] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws)
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + l + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(p, w, E, d),
                d ? (p.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (x.lastModified[r] = T),
                (T = E.getResponseHeader("etag")) && (x.etag[r] = T)),
                204 === t || "HEAD" === p.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (_ = w.state,
                f = w.data,
                d = !(m = w.error))) : (m = _,
                !t && _ || (_ = "error",
                t < 0 && (t = 0))),
                E.status = t,
                E.statusText = (n || _) + "",
                d ? v.resolveWith(h, [f, _, E]) : v.rejectWith(h, [E, _, m]),
                E.statusCode(b),
                b = void 0,
                c && g.trigger(d ? "ajaxSuccess" : "ajaxError", [E, p, d ? f : m]),
                y.fireWith(h, [E, _]),
                c && (g.trigger("ajaxComplete", [E, p]),
                --x.active || x.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return x.get(e, void 0, t, "script")
        }
    }),
    x.each(["get", "post"], (function(e, t) {
        x[t] = function(e, n, i, r) {
            return h(n) && (r = r || i,
            i = n,
            n = void 0),
            x.ajax(x.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, x.isPlainObject(e) && e))
        }
    }
    )),
    x.ajaxPrefilter((function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }
    )),
    x._evalUrl = function(e, t, n) {
        return x.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                x.globalEval(e, t, n)
            }
        })
    }
    ,
    x.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (h(e) && (e = e.call(this[0])),
            t = x(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map((function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }
            )).append(this)),
            this
        },
        wrapInner: function(e) {
            return h(e) ? this.each((function(t) {
                x(this).wrapInner(e.call(this, t))
            }
            )) : this.each((function() {
                var t = x(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }
            ))
        },
        wrap: function(e) {
            var t = h(e);
            return this.each((function(n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            }
            ))
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each((function() {
                x(this).replaceWith(this.childNodes)
            }
            )),
            this
        }
    }),
    x.expr.pseudos.hidden = function(e) {
        return !x.expr.pseudos.visible(e)
    }
    ,
    x.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    x.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Bt = {
        0: 200,
        1223: 204
    }
      , Wt = x.ajaxSettings.xhr();
    p.cors = !!Wt && "withCredentials"in Wt,
    p.ajax = Wt = !!Wt,
    x.ajaxTransport((function(t) {
        var n, i;
        if (p.cors || Wt && !t.crossDomain)
            return {
                send: function(r, o) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (a in t.xhrFields)
                            s[a] = t.xhrFields[a];
                    for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                    t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"),
                    r)
                        s.setRequestHeader(a, r[a]);
                    n = function(e) {
                        return function() {
                            n && (n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                            "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Bt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }
                    ,
                    s.onload = n(),
                    i = s.onerror = s.ontimeout = n("error"),
                    void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout((function() {
                            n && i()
                        }
                        ))
                    }
                    ,
                    n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n)
                            throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }
    )),
    x.ajaxPrefilter((function(e) {
        e.crossDomain && (e.contents.script = !1)
    }
    )),
    x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e),
                e
            }
        }
    }),
    x.ajaxPrefilter("script", (function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }
    )),
    x.ajaxTransport("script", (function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs)
            return {
                send: function(i, r) {
                    t = x("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && r("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    m.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
    }
    ));
    var zt, Vt = [], Ut = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Vt.pop() || x.expando + "_" + xt.guid++;
            return this[e] = !0,
            e
        }
    }),
    x.ajaxPrefilter("json jsonp", (function(t, n, i) {
        var r, o, a, s = !1 !== t.jsonp && (Ut.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return r = t.jsonpCallback = h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(Ut, "$1" + r) : !1 !== t.jsonp && (t.url += (Tt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
            t.converters["script json"] = function() {
                return a || x.error(r + " was not called"),
                a[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = e[r],
            e[r] = function() {
                a = arguments
            }
            ,
            i.always((function() {
                void 0 === o ? x(e).removeProp(r) : e[r] = o,
                t[r] && (t.jsonpCallback = n.jsonpCallback,
                Vt.push(r)),
                a && h(o) && o(a[0]),
                a = o = void 0
            }
            )),
            "script"
    }
    )),
    p.createHTMLDocument = ((zt = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === zt.childNodes.length),
    x.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (p.createHTMLDocument ? ((i = (t = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href,
        t.head.appendChild(i)) : t = m),
        o = !n && [],
        (r = A.exec(e)) ? [t.createElement(r[1])] : (r = we([e], t, o),
        o && o.length && x(o).remove(),
        x.merge([], r.childNodes)));
        var i, r, o
    }
    ,
    x.fn.load = function(e, t, n) {
        var i, r, o, a = this, s = e.indexOf(" ");
        return s > -1 && (i = ht(e.slice(s)),
        e = e.slice(0, s)),
        h(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (r = "POST"),
        a.length > 0 && x.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done((function(e) {
            o = arguments,
            a.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        }
        )).always(n && function(e, t) {
            a.each((function() {
                n.apply(this, o || [e.responseText, t, e])
            }
            ))
        }
        ),
        this
    }
    ,
    x.expr.pseudos.animated = function(e) {
        return x.grep(x.timers, (function(t) {
            return e === t.elem
        }
        )).length
    }
    ,
    x.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, a, s, l, u = x.css(e, "position"), c = x(e), d = {};
            "static" === u && (e.style.position = "relative"),
            s = c.offset(),
            o = x.css(e, "top"),
            l = x.css(e, "left"),
            ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (a = (i = c.position()).top,
            r = i.left) : (a = parseFloat(o) || 0,
            r = parseFloat(l) || 0),
            h(t) && (t = t.call(e, n, x.extend({}, s))),
            null != t.top && (d.top = t.top - s.top + a),
            null != t.left && (d.left = t.left - s.left + r),
            "using"in t ? t.using.call(e, d) : c.css(d)
        }
    },
    x.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each((function(t) {
                    x.offset.setOffset(this, e, t)
                }
                ));
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(),
            n = i.ownerDocument.defaultView,
            {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0], r = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === x.css(i, "position"))
                    t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === x.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = x(e).offset()).top += x.css(e, "borderTopWidth", !0),
                    r.left += x.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - x.css(i, "marginTop", !0),
                    left: t.left - r.left - x.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var e = this.offsetParent; e && "static" === x.css(e, "position"); )
                    e = e.offsetParent;
                return e || ie
            }
            ))
        }
    }),
    x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(e, t) {
        var n = "pageYOffset" === t;
        x.fn[e] = function(i) {
            return W(this, (function(e, i, r) {
                var o;
                if (g(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                void 0 === r)
                    return o ? o[t] : e[i];
                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
            }
            ), e, i, arguments.length)
        }
    }
    )),
    x.each(["top", "left"], (function(e, t) {
        x.cssHooks[t] = We(p.pixelPosition, (function(e, n) {
            if (n)
                return n = Be(e, t),
                Re.test(n) ? x(e).position()[t] + "px" : n
        }
        ))
    }
    )),
    x.each({
        Height: "height",
        Width: "width"
    }, (function(e, t) {
        x.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function(n, i) {
            x.fn[i] = function(r, o) {
                var a = arguments.length && (n || "boolean" != typeof r)
                  , s = n || (!0 === r || !0 === o ? "margin" : "border");
                return W(this, (function(t, n, r) {
                    var o;
                    return g(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? x.css(t, n, s) : x.style(t, n, r, s)
                }
                ), t, a ? r : void 0, a)
            }
        }
        ))
    }
    )),
    x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    }
    )),
    x.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
        x.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }
    ));
    var $t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    x.proxy = function(e, t) {
        var n, i, o;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        h(e))
            return i = r.call(arguments, 2),
            o = function() {
                return e.apply(t || this, i.concat(r.call(arguments)))
            }
            ,
            o.guid = e.guid = e.guid || x.guid++,
            o
    }
    ,
    x.holdReady = function(e) {
        e ? x.readyWait++ : x.ready(!0)
    }
    ,
    x.isArray = Array.isArray,
    x.parseJSON = JSON.parse,
    x.nodeName = D,
    x.isFunction = h,
    x.isWindow = g,
    x.camelCase = $,
    x.type = b,
    x.now = Date.now,
    x.isNumeric = function(e) {
        var t = x.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    x.trim = function(e) {
        return null == e ? "" : (e + "").replace($t, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], (function() {
        return x
    }
    ));
    var Xt = e.jQuery
      , Qt = e.$;
    return x.noConflict = function(t) {
        return e.$ === x && (e.$ = Qt),
        t && e.jQuery === x && (e.jQuery = Xt),
        x
    }
    ,
    void 0 === t && (e.jQuery = e.$ = x),
    x
}
)),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, (function() {
    "use strict";
    function e(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }
    function t(e, t) {
        if (1 !== e.nodeType)
            return [];
        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? n[t] : n
    }
    function n(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }
    function i(e) {
        if (!e)
            return document.body;
        switch (e.nodeName) {
        case "HTML":
        case "BODY":
            return e.ownerDocument.body;
        case "#document":
            return e.body
        }
        var r = t(e)
          , o = r.overflow
          , a = r.overflowX
          , s = r.overflowY;
        return /(auto|scroll|overlay)/.test(o + s + a) ? e : i(n(e))
    }
    function r(e) {
        return e && e.referenceNode ? e.referenceNode : e
    }
    function o(e) {
        return 11 === e ? Y : 10 === e ? K : Y || K
    }
    function a(e) {
        if (!e)
            return document.documentElement;
        for (var n = o(10) ? document.body : null, i = e.offsetParent || null; i === n && e.nextElementSibling; )
            i = (e = e.nextElementSibling).offsetParent;
        var r = i && i.nodeName;
        return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TH", "TD", "TABLE"].indexOf(i.nodeName) && "static" === t(i, "position") ? a(i) : i : e ? e.ownerDocument.documentElement : document.documentElement
    }
    function s(e) {
        return null === e.parentNode ? e : s(e.parentNode)
    }
    function l(e, t) {
        if (!(e && e.nodeType && t && t.nodeType))
            return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
          , i = n ? e : t
          , r = n ? t : e
          , o = document.createRange();
        o.setStart(i, 0),
        o.setEnd(r, 0);
        var u = o.commonAncestorContainer;
        if (e !== u && t !== u || i.contains(r))
            return function(e) {
                var t = e.nodeName;
                return "BODY" !== t && ("HTML" === t || a(e.firstElementChild) === e)
            }(u) ? u : a(u);
        var c = s(e);
        return c.host ? l(c.host, t) : l(e, s(t).host)
    }
    function u(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top"
          , n = "top" === t ? "scrollTop" : "scrollLeft"
          , i = e.nodeName;
        if ("BODY" === i || "HTML" === i) {
            var r = e.ownerDocument.documentElement
              , o = e.ownerDocument.scrollingElement || r;
            return o[n]
        }
        return e[n]
    }
    function c(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , i = u(t, "top")
          , r = u(t, "left")
          , o = n ? -1 : 1;
        return e.top += i * o,
        e.bottom += i * o,
        e.left += r * o,
        e.right += r * o,
        e
    }
    function d(e, t) {
        var n = "x" === t ? "Left" : "Top"
          , i = "Left" == n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + i + "Width"])
    }
    function f(e, t, n, i) {
        return $(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], o(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }
    function p(e) {
        var t = e.body
          , n = e.documentElement
          , i = o(10) && getComputedStyle(n);
        return {
            height: f("Height", t, n, i),
            width: f("Width", t, n, i)
        }
    }
    function h(e) {
        return te({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    function g(e) {
        var n = {};
        try {
            if (o(10)) {
                n = e.getBoundingClientRect();
                var i = u(e, "top")
                  , r = u(e, "left");
                n.top += i,
                n.left += r,
                n.bottom += i,
                n.right += r
            } else
                n = e.getBoundingClientRect()
        } catch (e) {}
        var a = {
            left: n.left,
            top: n.top,
            width: n.right - n.left,
            height: n.bottom - n.top
        }
          , s = "HTML" === e.nodeName ? p(e.ownerDocument) : {}
          , l = s.width || e.clientWidth || a.width
          , c = s.height || e.clientHeight || a.height
          , f = e.offsetWidth - l
          , g = e.offsetHeight - c;
        if (f || g) {
            var m = t(e);
            f -= d(m, "x"),
            g -= d(m, "y"),
            a.width -= f,
            a.height -= g
        }
        return h(a)
    }
    function m(e, n) {
        var r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , a = o(10)
          , s = "HTML" === n.nodeName
          , l = g(e)
          , u = g(n)
          , d = i(e)
          , f = t(n)
          , p = parseFloat(f.borderTopWidth)
          , m = parseFloat(f.borderLeftWidth);
        r && s && (u.top = $(u.top, 0),
        u.left = $(u.left, 0));
        var v = h({
            top: l.top - u.top - p,
            left: l.left - u.left - m,
            width: l.width,
            height: l.height
        });
        if (v.marginTop = 0,
        v.marginLeft = 0,
        !a && s) {
            var y = parseFloat(f.marginTop)
              , b = parseFloat(f.marginLeft);
            v.top -= p - y,
            v.bottom -= p - y,
            v.left -= m - b,
            v.right -= m - b,
            v.marginTop = y,
            v.marginLeft = b
        }
        return (a && !r ? n.contains(d) : n === d && "BODY" !== d.nodeName) && (v = c(v, n)),
        v
    }
    function v(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , n = e.ownerDocument.documentElement
          , i = m(e, n)
          , r = $(n.clientWidth, window.innerWidth || 0)
          , o = $(n.clientHeight, window.innerHeight || 0)
          , a = t ? 0 : u(n)
          , s = t ? 0 : u(n, "left")
          , l = {
            top: a - i.top + i.marginTop,
            left: s - i.left + i.marginLeft,
            width: r,
            height: o
        };
        return h(l)
    }
    function y(e) {
        var i = e.nodeName;
        if ("BODY" === i || "HTML" === i)
            return !1;
        if ("fixed" === t(e, "position"))
            return !0;
        var r = n(e);
        return !!r && y(r)
    }
    function b(e) {
        if (!e || !e.parentElement || o())
            return document.documentElement;
        for (var n = e.parentElement; n && "none" === t(n, "transform"); )
            n = n.parentElement;
        return n || document.documentElement
    }
    function w(e, t, o, a) {
        var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4]
          , u = {
            top: 0,
            left: 0
        }
          , c = s ? b(e) : l(e, r(t));
        if ("viewport" === a)
            u = v(c, s);
        else {
            var d;
            "scrollParent" === a ? "BODY" === (d = i(n(t))).nodeName && (d = e.ownerDocument.documentElement) : d = "window" === a ? e.ownerDocument.documentElement : a;
            var f = m(d, c, s);
            if ("HTML" !== d.nodeName || y(c))
                u = f;
            else {
                var h = p(e.ownerDocument)
                  , g = h.height
                  , w = h.width;
                u.top += f.top - f.marginTop,
                u.bottom = g + f.top,
                u.left += f.left - f.marginLeft,
                u.right = w + f.left
            }
        }
        var x = "number" == typeof (o = o || 0);
        return u.left += x ? o : o.left || 0,
        u.top += x ? o : o.top || 0,
        u.right -= x ? o : o.right || 0,
        u.bottom -= x ? o : o.bottom || 0,
        u
    }
    function x(e) {
        return e.width * e.height
    }
    function T(e, t, n, i, r) {
        var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto"))
            return e;
        var a = w(n, i, o, r)
          , s = {
            top: {
                width: a.width,
                height: t.top - a.top
            },
            right: {
                width: a.right - t.right,
                height: a.height
            },
            bottom: {
                width: a.width,
                height: a.bottom - t.bottom
            },
            left: {
                width: t.left - a.left,
                height: a.height
            }
        }
          , l = Object.keys(s).map((function(e) {
            return te({
                key: e
            }, s[e], {
                area: x(s[e])
            })
        }
        )).sort((function(e, t) {
            return t.area - e.area
        }
        ))
          , u = l.filter((function(e) {
            var t = e.width
              , i = e.height;
            return t >= n.clientWidth && i >= n.clientHeight
        }
        ))
          , c = 0 < u.length ? u[0].key : l[0].key
          , d = e.split("-")[1];
        return c + (d ? "-" + d : "")
    }
    function _(e, t, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null
          , o = i ? b(t) : l(t, r(n));
        return m(n, o, i)
    }
    function E(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e)
          , n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0)
          , i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }
    function C(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, (function(e) {
            return t[e]
        }
        ))
    }
    function S(e, t, n) {
        n = n.split("-")[0];
        var i = E(e)
          , r = {
            width: i.width,
            height: i.height
        }
          , o = -1 !== ["right", "left"].indexOf(n)
          , a = o ? "top" : "left"
          , s = o ? "left" : "top"
          , l = o ? "height" : "width"
          , u = o ? "width" : "height";
        return r[a] = t[a] + t[l] / 2 - i[l] / 2,
        r[s] = n === s ? t[s] - i[u] : t[C(s)],
        r
    }
    function D(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function A(t, n, i) {
        var r = void 0 === i ? t : t.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex)
                return e.findIndex((function(e) {
                    return e[t] === n
                }
                ));
            var i = D(e, (function(e) {
                return e[t] === n
            }
            ));
            return e.indexOf(i)
        }(t, "name", i));
        return r.forEach((function(t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var i = t.function || t.fn;
            t.enabled && e(i) && (n.offsets.popper = h(n.offsets.popper),
            n.offsets.reference = h(n.offsets.reference),
            n = i(n, t))
        }
        )),
        n
    }
    function N() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = _(this.state, this.popper, this.reference, this.options.positionFixed),
            e.placement = T(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
            e.originalPlacement = e.placement,
            e.positionFixed = this.options.positionFixed,
            e.offsets.popper = S(this.popper, e.offsets.reference, e.placement),
            e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
            e = A(this.modifiers, e),
            this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
            this.options.onCreate(e))
        }
    }
    function k(e, t) {
        return e.some((function(e) {
            var n = e.name;
            return e.enabled && n === t
        }
        ))
    }
    function O(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var r = t[i]
              , o = r ? "" + r + n : e;
            if (void 0 !== document.body.style[o])
                return o
        }
        return null
    }
    function j() {
        return this.state.isDestroyed = !0,
        k(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
        this.popper.style.position = "",
        this.popper.style.top = "",
        this.popper.style.left = "",
        this.popper.style.right = "",
        this.popper.style.bottom = "",
        this.popper.style.willChange = "",
        this.popper.style[O("transform")] = ""),
        this.disableEventListeners(),
        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
        this
    }
    function I(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }
    function L(e, t, n, r) {
        var o = "BODY" === e.nodeName
          , a = o ? e.ownerDocument.defaultView : e;
        a.addEventListener(t, n, {
            passive: !0
        }),
        o || L(i(a.parentNode), t, n, r),
        r.push(a)
    }
    function M(e, t, n, r) {
        n.updateBound = r,
        I(e).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var o = i(e);
        return L(o, "scroll", n.updateBound, n.scrollParents),
        n.scrollElement = o,
        n.eventsEnabled = !0,
        n
    }
    function P() {
        this.state.eventsEnabled || (this.state = M(this.reference, this.options, this.state, this.scheduleUpdate))
    }
    function R() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
        this.state = function(e, t) {
            return I(e).removeEventListener("resize", t.updateBound),
            t.scrollParents.forEach((function(e) {
                e.removeEventListener("scroll", t.updateBound)
            }
            )),
            t.updateBound = null,
            t.scrollParents = [],
            t.scrollElement = null,
            t.eventsEnabled = !1,
            t
        }(this.reference, this.state))
    }
    function q(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function H(e, t) {
        Object.keys(t).forEach((function(n) {
            var i = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && q(t[n]) && (i = "px"),
            e.style[n] = t[n] + i
        }
        ))
    }
    function F(e, t, n) {
        var i = D(e, (function(e) {
            return e.name === t
        }
        ))
          , r = !!i && e.some((function(e) {
            return e.name === n && e.enabled && e.order < i.order
        }
        ));
        if (!r) {
            var o = "`" + t + "`";
            console.warn("`" + n + "` modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }
    function B(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , n = re.indexOf(e)
          , i = re.slice(n + 1).concat(re.slice(0, n));
        return t ? i.reverse() : i
    }
    function W(e, t, n, i) {
        var r = [0, 0]
          , o = -1 !== ["right", "left"].indexOf(i)
          , a = e.split(/(\+|\-)/).map((function(e) {
            return e.trim()
        }
        ))
          , s = a.indexOf(D(a, (function(e) {
            return -1 !== e.search(/,|\s/)
        }
        )));
        a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/
          , u = -1 === s ? [a] : [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))];
        return u = u.map((function(e, i) {
            var r = (1 === i ? !o : o) ? "height" : "width"
              , a = !1;
            return e.reduce((function(e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t,
                a = !0,
                e) : a ? (e[e.length - 1] += t,
                a = !1,
                e) : e.concat(t)
            }
            ), []).map((function(e) {
                return function(e, t, n, i) {
                    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
                      , o = +r[1]
                      , a = r[2];
                    if (!o)
                        return e;
                    if (0 === a.indexOf("%")) {
                        return h("%p" === a ? n : i)[t] / 100 * o
                    }
                    return "vh" === a || "vw" === a ? ("vh" === a ? $(document.documentElement.clientHeight, window.innerHeight || 0) : $(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o : o
                }(e, r, t, n)
            }
            ))
        }
        )),
        u.forEach((function(e, t) {
            e.forEach((function(n, i) {
                q(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
            }
            ))
        }
        )),
        r
    }
    var z = Math.min
      , V = Math.floor
      , U = Math.round
      , $ = Math.max
      , X = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator
      , Q = function() {
        for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
            if (X && 0 <= navigator.userAgent.indexOf(e[t]))
                return 1;
        return 0
    }()
      , G = X && window.Promise ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            window.Promise.resolve().then((function() {
                t = !1,
                e()
            }
            )))
        }
    }
    : function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            setTimeout((function() {
                t = !1,
                e()
            }
            ), Q))
        }
    }
      , Y = X && !(!window.MSInputMethodContext || !document.documentMode)
      , K = X && /MSIE 10/.test(navigator.userAgent)
      , J = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
      , Z = function() {
        function e(e, t) {
            for (var n, i = 0; i < t.length; i++)
                (n = t[i]).enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , ee = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
      , te = Object.assign || function(e) {
        for (var t, n = 1; n < arguments.length; n++)
            for (var i in t = arguments[n])
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e
    }
      , ne = X && /Firefox/i.test(navigator.userAgent)
      , ie = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
      , re = ie.slice(3)
      , oe = "flip"
      , ae = "clockwise"
      , se = "counterclockwise"
      , le = function() {
        function t(n, i) {
            var r = this
              , o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            J(this, t),
            this.scheduleUpdate = function() {
                return requestAnimationFrame(r.update)
            }
            ,
            this.update = G(this.update.bind(this)),
            this.options = te({}, t.Defaults, o),
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            },
            this.reference = n && n.jquery ? n[0] : n,
            this.popper = i && i.jquery ? i[0] : i,
            this.options.modifiers = {},
            Object.keys(te({}, t.Defaults.modifiers, o.modifiers)).forEach((function(e) {
                r.options.modifiers[e] = te({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {})
            }
            )),
            this.modifiers = Object.keys(this.options.modifiers).map((function(e) {
                return te({
                    name: e
                }, r.options.modifiers[e])
            }
            )).sort((function(e, t) {
                return e.order - t.order
            }
            )),
            this.modifiers.forEach((function(t) {
                t.enabled && e(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state)
            }
            )),
            this.update();
            var a = this.options.eventsEnabled;
            a && this.enableEventListeners(),
            this.state.eventsEnabled = a
        }
        return Z(t, [{
            key: "update",
            value: function() {
                return N.call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return j.call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return P.call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return R.call(this)
            }
        }]),
        t
    }();
    return le.Utils = ("undefined" == typeof window ? global : window).PopperUtils,
    le.placements = ie,
    le.Defaults = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement
                      , n = t.split("-")[0]
                      , i = t.split("-")[1];
                    if (i) {
                        var r = e.offsets
                          , o = r.reference
                          , a = r.popper
                          , s = -1 !== ["bottom", "top"].indexOf(n)
                          , l = s ? "left" : "top"
                          , u = s ? "width" : "height"
                          , c = {
                            start: ee({}, l, o[l]),
                            end: ee({}, l, o[l] + o[u] - a[u])
                        };
                        e.offsets.popper = te({}, a, c[i])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var n, i = t.offset, r = e.placement, o = e.offsets, a = o.popper, s = o.reference, l = r.split("-")[0];
                    return n = q(+i) ? [+i, 0] : W(i, a, s, l),
                    "left" === l ? (a.top += n[0],
                    a.left -= n[1]) : "right" === l ? (a.top += n[0],
                    a.left += n[1]) : "top" === l ? (a.left += n[0],
                    a.top -= n[1]) : "bottom" === l && (a.left += n[0],
                    a.top += n[1]),
                    e.popper = a,
                    e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.boundariesElement || a(e.instance.popper);
                    e.instance.reference === n && (n = a(n));
                    var i = O("transform")
                      , r = e.instance.popper.style
                      , o = r.top
                      , s = r.left
                      , l = r[i];
                    r.top = "",
                    r.left = "",
                    r[i] = "";
                    var u = w(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                    r.top = o,
                    r.left = s,
                    r[i] = l,
                    t.boundaries = u;
                    var c = t.priority
                      , d = e.offsets.popper
                      , f = {
                        primary: function(e) {
                            var n = d[e];
                            return d[e] < u[e] && !t.escapeWithReference && (n = $(d[e], u[e])),
                            ee({}, e, n)
                        },
                        secondary: function(e) {
                            var n = "right" === e ? "left" : "top"
                              , i = d[n];
                            return d[e] > u[e] && !t.escapeWithReference && (i = z(d[n], u[e] - ("right" === e ? d.width : d.height))),
                            ee({}, n, i)
                        }
                    };
                    return c.forEach((function(e) {
                        var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                        d = te({}, d, f[t](e))
                    }
                    )),
                    e.offsets.popper = d,
                    e
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets
                      , n = t.popper
                      , i = t.reference
                      , r = e.placement.split("-")[0]
                      , o = V
                      , a = -1 !== ["top", "bottom"].indexOf(r)
                      , s = a ? "right" : "bottom"
                      , l = a ? "left" : "top"
                      , u = a ? "width" : "height";
                    return n[s] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[u]),
                    n[l] > o(i[s]) && (e.offsets.popper[l] = o(i[s])),
                    e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, n) {
                    var i;
                    if (!F(e.instance.modifiers, "arrow", "keepTogether"))
                        return e;
                    var r = n.element;
                    if ("string" == typeof r) {
                        if (!(r = e.instance.popper.querySelector(r)))
                            return e
                    } else if (!e.instance.popper.contains(r))
                        return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                        e;
                    var o = e.placement.split("-")[0]
                      , a = e.offsets
                      , s = a.popper
                      , l = a.reference
                      , u = -1 !== ["left", "right"].indexOf(o)
                      , c = u ? "height" : "width"
                      , d = u ? "Top" : "Left"
                      , f = d.toLowerCase()
                      , p = u ? "left" : "top"
                      , g = u ? "bottom" : "right"
                      , m = E(r)[c];
                    l[g] - m < s[f] && (e.offsets.popper[f] -= s[f] - (l[g] - m)),
                    l[f] + m > s[g] && (e.offsets.popper[f] += l[f] + m - s[g]),
                    e.offsets.popper = h(e.offsets.popper);
                    var v = l[f] + l[c] / 2 - m / 2
                      , y = t(e.instance.popper)
                      , b = parseFloat(y["margin" + d])
                      , w = parseFloat(y["border" + d + "Width"])
                      , x = v - e.offsets.popper[f] - b - w;
                    return x = $(z(s[c] - m, x), 0),
                    e.arrowElement = r,
                    e.offsets.arrow = (ee(i = {}, f, U(x)),
                    ee(i, p, ""),
                    i),
                    e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (k(e.instance.modifiers, "inner"))
                        return e;
                    if (e.flipped && e.placement === e.originalPlacement)
                        return e;
                    var n = w(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed)
                      , i = e.placement.split("-")[0]
                      , r = C(i)
                      , o = e.placement.split("-")[1] || ""
                      , a = [];
                    switch (t.behavior) {
                    case oe:
                        a = [i, r];
                        break;
                    case ae:
                        a = B(i);
                        break;
                    case se:
                        a = B(i, !0);
                        break;
                    default:
                        a = t.behavior
                    }
                    return a.forEach((function(s, l) {
                        if (i !== s || a.length === l + 1)
                            return e;
                        i = e.placement.split("-")[0],
                        r = C(i);
                        var u = e.offsets.popper
                          , c = e.offsets.reference
                          , d = V
                          , f = "left" === i && d(u.right) > d(c.left) || "right" === i && d(u.left) < d(c.right) || "top" === i && d(u.bottom) > d(c.top) || "bottom" === i && d(u.top) < d(c.bottom)
                          , p = d(u.left) < d(n.left)
                          , h = d(u.right) > d(n.right)
                          , g = d(u.top) < d(n.top)
                          , m = d(u.bottom) > d(n.bottom)
                          , v = "left" === i && p || "right" === i && h || "top" === i && g || "bottom" === i && m
                          , y = -1 !== ["top", "bottom"].indexOf(i)
                          , b = !!t.flipVariations && (y && "start" === o && p || y && "end" === o && h || !y && "start" === o && g || !y && "end" === o && m)
                          , w = !!t.flipVariationsByContent && (y && "start" === o && h || y && "end" === o && p || !y && "start" === o && m || !y && "end" === o && g)
                          , x = b || w;
                        (f || v || x) && (e.flipped = !0,
                        (f || v) && (i = a[l + 1]),
                        x && (o = function(e) {
                            return "end" === e ? "start" : "start" === e ? "end" : e
                        }(o)),
                        e.placement = i + (o ? "-" + o : ""),
                        e.offsets.popper = te({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)),
                        e = A(e.instance.modifiers, e, "flip"))
                    }
                    )),
                    e
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport",
                flipVariations: !1,
                flipVariationsByContent: !1
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement
                      , n = t.split("-")[0]
                      , i = e.offsets
                      , r = i.popper
                      , o = i.reference
                      , a = -1 !== ["left", "right"].indexOf(n)
                      , s = -1 === ["top", "left"].indexOf(n);
                    return r[a ? "left" : "top"] = o[n] - (s ? r[a ? "width" : "height"] : 0),
                    e.placement = C(t),
                    e.offsets.popper = h(r),
                    e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!F(e.instance.modifiers, "hide", "preventOverflow"))
                        return e;
                    var t = e.offsets.reference
                      , n = D(e.instance.modifiers, (function(e) {
                        return "preventOverflow" === e.name
                    }
                    )).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide)
                            return e;
                        e.hide = !0,
                        e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide)
                            return e;
                        e.hide = !1,
                        e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.x
                      , i = t.y
                      , r = e.offsets.popper
                      , o = D(e.instance.modifiers, (function(e) {
                        return "applyStyle" === e.name
                    }
                    )).gpuAcceleration;
                    void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s, l, u = void 0 === o ? t.gpuAcceleration : o, c = a(e.instance.popper), d = g(c), f = {
                        position: r.position
                    }, p = function(e, t) {
                        var n = e.offsets
                          , i = n.popper
                          , r = n.reference
                          , o = U
                          , a = function(e) {
                            return e
                        }
                          , s = o(r.width)
                          , l = o(i.width)
                          , u = -1 !== ["left", "right"].indexOf(e.placement)
                          , c = -1 !== e.placement.indexOf("-")
                          , d = t ? u || c || s % 2 == l % 2 ? o : V : a
                          , f = t ? o : a;
                        return {
                            left: d(1 == s % 2 && 1 == l % 2 && !c && t ? i.left - 1 : i.left),
                            top: f(i.top),
                            bottom: f(i.bottom),
                            right: d(i.right)
                        }
                    }(e, 2 > window.devicePixelRatio || !ne), h = "bottom" === n ? "top" : "bottom", m = "right" === i ? "left" : "right", v = O("transform");
                    if (l = "bottom" == h ? "HTML" === c.nodeName ? -c.clientHeight + p.bottom : -d.height + p.bottom : p.top,
                    s = "right" == m ? "HTML" === c.nodeName ? -c.clientWidth + p.right : -d.width + p.right : p.left,
                    u && v)
                        f[v] = "translate3d(" + s + "px, " + l + "px, 0)",
                        f[h] = 0,
                        f[m] = 0,
                        f.willChange = "transform";
                    else {
                        var y = "bottom" == h ? -1 : 1
                          , b = "right" == m ? -1 : 1;
                        f[h] = l * y,
                        f[m] = s * b,
                        f.willChange = h + ", " + m
                    }
                    var w = {
                        "x-placement": e.placement
                    };
                    return e.attributes = te({}, w, e.attributes),
                    e.styles = te({}, f, e.styles),
                    e.arrowStyles = te({}, e.offsets.arrow, e.arrowStyles),
                    e
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return H(e.instance.popper, e.styles),
                    function(e, t) {
                        Object.keys(t).forEach((function(n) {
                            !1 === t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n])
                        }
                        ))
                    }(e.instance.popper, e.attributes),
                    e.arrowElement && Object.keys(e.arrowStyles).length && H(e.arrowElement, e.arrowStyles),
                    e
                },
                onLoad: function(e, t, n, i, r) {
                    var o = _(r, t, e, n.positionFixed)
                      , a = T(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", a),
                    H(t, {
                        position: n.positionFixed ? "fixed" : "absolute"
                    }),
                    n
                },
                gpuAcceleration: void 0
            }
        }
    },
    le
}
)),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Util = t(e.jQuery)
}(this, (function(e) {
    "use strict";
    function t(e) {
        return e && "object" == typeof e && "default"in e ? e : {
            default: e
        }
    }
    var n = t(e)
      , i = "transitionend";
    function r(e) {
        var t = this
          , i = !1;
        return n.default(this).one(o.TRANSITION_END, (function() {
            i = !0
        }
        )),
        setTimeout((function() {
            i || o.triggerTransitionEnd(t)
        }
        ), e),
        this
    }
    var o = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            do {
                e += ~~(1e6 * Math.random())
            } while (document.getElementById(e));
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e)
                return 0;
            var t = n.default(e).css("transition-duration")
              , i = n.default(e).css("transition-delay")
              , r = parseFloat(t)
              , o = parseFloat(i);
            return r || o ? (t = t.split(",")[0],
            i = i.split(",")[0],
            1e3 * (parseFloat(t) + parseFloat(i))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            n.default(e).trigger(i)
        },
        supportsTransitionEnd: function() {
            return Boolean(i)
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var r = n[i]
                      , a = t[i]
                      , s = a && o.isElement(a) ? "element" : null == (l = a) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(r).test(s))
                        throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                }
            var l
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow)
                return null;
            if ("function" == typeof e.getRootNode) {
                var t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null
            }
            return e instanceof ShadowRoot ? e : e.parentNode ? o.findShadowRoot(e.parentNode) : null
        },
        jQueryDetection: function() {
            if (void 0 === n.default)
                throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = n.default.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4)
                throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    };
    return o.jQueryDetection(),
    n.default.fn.emulateTransitionEnd = r,
    n.default.event.special[o.TRANSITION_END] = {
        bindType: i,
        delegateType: i,
        handle: function(e) {
            if (n.default(e.target).is(this))
                return e.handleObj.handler.apply(this, arguments)
        }
    },
    o
}
)),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "./util"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Collapse = t(e.jQuery, e.Util)
}(this, (function(e, t) {
    "use strict";
    function n(e) {
        return e && "object" == typeof e && "default"in e ? e : {
            default: e
        }
    }
    var i = n(e)
      , r = n(t);
    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function a() {
        return a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }
        ,
        a.apply(this, arguments)
    }
    var s = "collapse"
      , l = "bs.collapse"
      , u = i.default.fn[s]
      , c = {
        toggle: !0,
        parent: ""
    }
      , d = {
        toggle: "boolean",
        parent: "(string|element)"
    }
      , f = "show"
      , p = "collapse"
      , h = "collapsing"
      , g = "collapsed"
      , m = "width"
      , v = '[data-toggle="collapse"]'
      , y = function() {
        function e(e, t) {
            this._isTransitioning = !1,
            this._element = e,
            this._config = this._getConfig(t),
            this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
            for (var n = [].slice.call(document.querySelectorAll(v)), i = 0, o = n.length; i < o; i++) {
                var a = n[i]
                  , s = r.default.getSelectorFromElement(a)
                  , l = [].slice.call(document.querySelectorAll(s)).filter((function(t) {
                    return t === e
                }
                ));
                null !== s && l.length > 0 && (this._selector = s,
                this._triggerArray.push(a))
            }
            this._parent = this._config.parent ? this._getParent() : null,
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
        }
        var t, n, u, y = e.prototype;
        return y.toggle = function() {
            i.default(this._element).hasClass(f) ? this.hide() : this.show()
        }
        ,
        y.show = function() {
            var t, n, o = this;
            if (!this._isTransitioning && !i.default(this._element).hasClass(f) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(e) {
                return "string" == typeof o._config.parent ? e.getAttribute("data-parent") === o._config.parent : e.classList.contains(p)
            }
            ))).length && (t = null),
            !(t && (n = i.default(t).not(this._selector).data(l)) && n._isTransitioning))) {
                var a = i.default.Event("show.bs.collapse");
                if (i.default(this._element).trigger(a),
                !a.isDefaultPrevented()) {
                    t && (e._jQueryInterface.call(i.default(t).not(this._selector), "hide"),
                    n || i.default(t).data(l, null));
                    var s = this._getDimension();
                    i.default(this._element).removeClass(p).addClass(h),
                    this._element.style[s] = 0,
                    this._triggerArray.length && i.default(this._triggerArray).removeClass(g).attr("aria-expanded", !0),
                    this.setTransitioning(!0);
                    var u = "scroll" + (s[0].toUpperCase() + s.slice(1))
                      , c = r.default.getTransitionDurationFromElement(this._element);
                    i.default(this._element).one(r.default.TRANSITION_END, (function() {
                        i.default(o._element).removeClass(h).addClass("collapse show"),
                        o._element.style[s] = "",
                        o.setTransitioning(!1),
                        i.default(o._element).trigger("shown.bs.collapse")
                    }
                    )).emulateTransitionEnd(c),
                    this._element.style[s] = this._element[u] + "px"
                }
            }
        }
        ,
        y.hide = function() {
            var e = this;
            if (!this._isTransitioning && i.default(this._element).hasClass(f)) {
                var t = i.default.Event("hide.bs.collapse");
                if (i.default(this._element).trigger(t),
                !t.isDefaultPrevented()) {
                    var n = this._getDimension();
                    this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                    r.default.reflow(this._element),
                    i.default(this._element).addClass(h).removeClass("collapse show");
                    var o = this._triggerArray.length;
                    if (o > 0)
                        for (var a = 0; a < o; a++) {
                            var s = this._triggerArray[a]
                              , l = r.default.getSelectorFromElement(s);
                            if (null !== l)
                                i.default([].slice.call(document.querySelectorAll(l))).hasClass(f) || i.default(s).addClass(g).attr("aria-expanded", !1)
                        }
                    this.setTransitioning(!0);
                    this._element.style[n] = "";
                    var u = r.default.getTransitionDurationFromElement(this._element);
                    i.default(this._element).one(r.default.TRANSITION_END, (function() {
                        e.setTransitioning(!1),
                        i.default(e._element).removeClass(h).addClass(p).trigger("hidden.bs.collapse")
                    }
                    )).emulateTransitionEnd(u)
                }
            }
        }
        ,
        y.setTransitioning = function(e) {
            this._isTransitioning = e
        }
        ,
        y.dispose = function() {
            i.default.removeData(this._element, l),
            this._config = null,
            this._parent = null,
            this._element = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        ,
        y._getConfig = function(e) {
            return (e = a({}, c, e)).toggle = Boolean(e.toggle),
            r.default.typeCheckConfig(s, e, d),
            e
        }
        ,
        y._getDimension = function() {
            return i.default(this._element).hasClass(m) ? m : "height"
        }
        ,
        y._getParent = function() {
            var t, n = this;
            r.default.isElement(this._config.parent) ? (t = this._config.parent,
            void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
            var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'
              , a = [].slice.call(t.querySelectorAll(o));
            return i.default(a).each((function(t, i) {
                n._addAriaAndCollapsedClass(e._getTargetFromElement(i), [i])
            }
            )),
            t
        }
        ,
        y._addAriaAndCollapsedClass = function(e, t) {
            var n = i.default(e).hasClass(f);
            t.length && i.default(t).toggleClass(g, !n).attr("aria-expanded", n)
        }
        ,
        e._getTargetFromElement = function(e) {
            var t = r.default.getSelectorFromElement(e);
            return t ? document.querySelector(t) : null
        }
        ,
        e._jQueryInterface = function(t) {
            return this.each((function() {
                var n = i.default(this)
                  , r = n.data(l)
                  , o = a({}, c, n.data(), "object" == typeof t && t ? t : {});
                if (!r && o.toggle && "string" == typeof t && /show|hide/.test(t) && (o.toggle = !1),
                r || (r = new e(this,o),
                n.data(l, r)),
                "string" == typeof t) {
                    if (void 0 === r[t])
                        throw new TypeError('No method named "' + t + '"');
                    r[t]()
                }
            }
            ))
        }
        ,
        t = e,
        u = [{
            key: "VERSION",
            get: function() {
                return "4.6.0"
            }
        }, {
            key: "Default",
            get: function() {
                return c
            }
        }],
        (n = null) && o(t.prototype, n),
        u && o(t, u),
        e
    }();
    return i.default(document).on("click.bs.collapse.data-api", v, (function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var t = i.default(this)
          , n = r.default.getSelectorFromElement(this)
          , o = [].slice.call(document.querySelectorAll(n));
        i.default(o).each((function() {
            var e = i.default(this)
              , n = e.data(l) ? "toggle" : t.data();
            y._jQueryInterface.call(e, n)
        }
        ))
    }
    )),
    i.default.fn[s] = y._jQueryInterface,
    i.default.fn[s].Constructor = y,
    i.default.fn[s].noConflict = function() {
        return i.default.fn[s] = u,
        y._jQueryInterface
    }
    ,
    y
}
)),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "./util"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Modal = t(e.jQuery, e.Util)
}(this, (function(e, t) {
    "use strict";
    function n(e) {
        return e && "object" == typeof e && "default"in e ? e : {
            default: e
        }
    }
    var i = n(e)
      , r = n(t);
    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function a() {
        return a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }
        ,
        a.apply(this, arguments)
    }
    var s = "modal"
      , l = "bs.modal"
      , u = ".bs.modal"
      , c = i.default.fn.modal
      , d = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }
      , f = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }
      , p = "hidden.bs.modal"
      , h = "show.bs.modal"
      , g = "focusin.bs.modal"
      , m = "resize.bs.modal"
      , v = "click.dismiss.bs.modal"
      , y = "keydown.dismiss.bs.modal"
      , b = "mousedown.dismiss.bs.modal"
      , w = "modal-open"
      , x = "fade"
      , T = "show"
      , _ = "modal-static"
      , E = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , C = ".sticky-top"
      , S = function() {
        function e(e, t) {
            this._config = this._getConfig(t),
            this._element = e,
            this._dialog = e.querySelector(".modal-dialog"),
            this._backdrop = null,
            this._isShown = !1,
            this._isBodyOverflowing = !1,
            this._ignoreBackdropClick = !1,
            this._isTransitioning = !1,
            this._scrollbarWidth = 0
        }
        var t, n, c, S = e.prototype;
        return S.toggle = function(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        ,
        S.show = function(e) {
            var t = this;
            if (!this._isShown && !this._isTransitioning) {
                i.default(this._element).hasClass(x) && (this._isTransitioning = !0);
                var n = i.default.Event(h, {
                    relatedTarget: e
                });
                i.default(this._element).trigger(n),
                this._isShown || n.isDefaultPrevented() || (this._isShown = !0,
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                i.default(this._element).on(v, '[data-dismiss="modal"]', (function(e) {
                    return t.hide(e)
                }
                )),
                i.default(this._dialog).on(b, (function() {
                    i.default(t._element).one("mouseup.dismiss.bs.modal", (function(e) {
                        i.default(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                    }
                    ))
                }
                )),
                this._showBackdrop((function() {
                    return t._showElement(e)
                }
                )))
            }
        }
        ,
        S.hide = function(e) {
            var t = this;
            if (e && e.preventDefault(),
            this._isShown && !this._isTransitioning) {
                var n = i.default.Event("hide.bs.modal");
                if (i.default(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented()) {
                    this._isShown = !1;
                    var o = i.default(this._element).hasClass(x);
                    if (o && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    i.default(document).off(g),
                    i.default(this._element).removeClass(T),
                    i.default(this._element).off(v),
                    i.default(this._dialog).off(b),
                    o) {
                        var a = r.default.getTransitionDurationFromElement(this._element);
                        i.default(this._element).one(r.default.TRANSITION_END, (function(e) {
                            return t._hideModal(e)
                        }
                        )).emulateTransitionEnd(a)
                    } else
                        this._hideModal()
                }
            }
        }
        ,
        S.dispose = function() {
            [window, this._element, this._dialog].forEach((function(e) {
                return i.default(e).off(u)
            }
            )),
            i.default(document).off(g),
            i.default.removeData(this._element, l),
            this._config = null,
            this._element = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._isTransitioning = null,
            this._scrollbarWidth = null
        }
        ,
        S.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        S._getConfig = function(e) {
            return e = a({}, d, e),
            r.default.typeCheckConfig(s, e, f),
            e
        }
        ,
        S._triggerBackdropTransition = function() {
            var e = this
              , t = i.default.Event("hidePrevented.bs.modal");
            if (i.default(this._element).trigger(t),
            !t.isDefaultPrevented()) {
                var n = this._element.scrollHeight > document.documentElement.clientHeight;
                n || (this._element.style.overflowY = "hidden"),
                this._element.classList.add(_);
                var o = r.default.getTransitionDurationFromElement(this._dialog);
                i.default(this._element).off(r.default.TRANSITION_END),
                i.default(this._element).one(r.default.TRANSITION_END, (function() {
                    e._element.classList.remove(_),
                    n || i.default(e._element).one(r.default.TRANSITION_END, (function() {
                        e._element.style.overflowY = ""
                    }
                    )).emulateTransitionEnd(e._element, o)
                }
                )).emulateTransitionEnd(o),
                this._element.focus()
            }
        }
        ,
        S._showElement = function(e) {
            var t = this
              , n = i.default(this._element).hasClass(x)
              , o = this._dialog ? this._dialog.querySelector(".modal-body") : null;
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            i.default(this._dialog).hasClass("modal-dialog-scrollable") && o ? o.scrollTop = 0 : this._element.scrollTop = 0,
            n && r.default.reflow(this._element),
            i.default(this._element).addClass(T),
            this._config.focus && this._enforceFocus();
            var a = i.default.Event("shown.bs.modal", {
                relatedTarget: e
            })
              , s = function() {
                t._config.focus && t._element.focus(),
                t._isTransitioning = !1,
                i.default(t._element).trigger(a)
            };
            if (n) {
                var l = r.default.getTransitionDurationFromElement(this._dialog);
                i.default(this._dialog).one(r.default.TRANSITION_END, s).emulateTransitionEnd(l)
            } else
                s()
        }
        ,
        S._enforceFocus = function() {
            var e = this;
            i.default(document).off(g).on(g, (function(t) {
                document !== t.target && e._element !== t.target && 0 === i.default(e._element).has(t.target).length && e._element.focus()
            }
            ))
        }
        ,
        S._setEscapeEvent = function() {
            var e = this;
            this._isShown ? i.default(this._element).on(y, (function(t) {
                e._config.keyboard && 27 === t.which ? (t.preventDefault(),
                e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition()
            }
            )) : this._isShown || i.default(this._element).off(y)
        }
        ,
        S._setResizeEvent = function() {
            var e = this;
            this._isShown ? i.default(window).on(m, (function(t) {
                return e.handleUpdate(t)
            }
            )) : i.default(window).off(m)
        }
        ,
        S._hideModal = function() {
            var e = this;
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._showBackdrop((function() {
                i.default(document.body).removeClass(w),
                e._resetAdjustments(),
                e._resetScrollbar(),
                i.default(e._element).trigger(p)
            }
            ))
        }
        ,
        S._removeBackdrop = function() {
            this._backdrop && (i.default(this._backdrop).remove(),
            this._backdrop = null)
        }
        ,
        S._showBackdrop = function(e) {
            var t = this
              , n = i.default(this._element).hasClass(x) ? x : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = "modal-backdrop",
                n && this._backdrop.classList.add(n),
                i.default(this._backdrop).appendTo(document.body),
                i.default(this._element).on(v, (function(e) {
                    t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._triggerBackdropTransition() : t.hide())
                }
                )),
                n && r.default.reflow(this._backdrop),
                i.default(this._backdrop).addClass(T),
                !e)
                    return;
                if (!n)
                    return void e();
                var o = r.default.getTransitionDurationFromElement(this._backdrop);
                i.default(this._backdrop).one(r.default.TRANSITION_END, e).emulateTransitionEnd(o)
            } else if (!this._isShown && this._backdrop) {
                i.default(this._backdrop).removeClass(T);
                var a = function() {
                    t._removeBackdrop(),
                    e && e()
                };
                if (i.default(this._element).hasClass(x)) {
                    var s = r.default.getTransitionDurationFromElement(this._backdrop);
                    i.default(this._backdrop).one(r.default.TRANSITION_END, a).emulateTransitionEnd(s)
                } else
                    a()
            } else
                e && e()
        }
        ,
        S._adjustDialog = function() {
            var e = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        S._resetAdjustments = function() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        ,
        S._checkScrollbar = function() {
            var e = document.body.getBoundingClientRect();
            this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        S._setScrollbar = function() {
            var e = this;
            if (this._isBodyOverflowing) {
                var t = [].slice.call(document.querySelectorAll(E))
                  , n = [].slice.call(document.querySelectorAll(C));
                i.default(t).each((function(t, n) {
                    var r = n.style.paddingRight
                      , o = i.default(n).css("padding-right");
                    i.default(n).data("padding-right", r).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                }
                )),
                i.default(n).each((function(t, n) {
                    var r = n.style.marginRight
                      , o = i.default(n).css("margin-right");
                    i.default(n).data("margin-right", r).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                }
                ));
                var r = document.body.style.paddingRight
                  , o = i.default(document.body).css("padding-right");
                i.default(document.body).data("padding-right", r).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
            }
            i.default(document.body).addClass(w)
        }
        ,
        S._resetScrollbar = function() {
            var e = [].slice.call(document.querySelectorAll(E));
            i.default(e).each((function(e, t) {
                var n = i.default(t).data("padding-right");
                i.default(t).removeData("padding-right"),
                t.style.paddingRight = n || ""
            }
            ));
            var t = [].slice.call(document.querySelectorAll(".sticky-top"));
            i.default(t).each((function(e, t) {
                var n = i.default(t).data("margin-right");
                void 0 !== n && i.default(t).css("margin-right", n).removeData("margin-right")
            }
            ));
            var n = i.default(document.body).data("padding-right");
            i.default(document.body).removeData("padding-right"),
            document.body.style.paddingRight = n || ""
        }
        ,
        S._getScrollbarWidth = function() {
            var e = document.createElement("div");
            e.className = "modal-scrollbar-measure",
            document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e),
            t
        }
        ,
        e._jQueryInterface = function(t, n) {
            return this.each((function() {
                var r = i.default(this).data(l)
                  , o = a({}, d, i.default(this).data(), "object" == typeof t && t ? t : {});
                if (r || (r = new e(this,o),
                i.default(this).data(l, r)),
                "string" == typeof t) {
                    if (void 0 === r[t])
                        throw new TypeError('No method named "' + t + '"');
                    r[t](n)
                } else
                    o.show && r.show(n)
            }
            ))
        }
        ,
        t = e,
        c = [{
            key: "VERSION",
            get: function() {
                return "4.6.0"
            }
        }, {
            key: "Default",
            get: function() {
                return d
            }
        }],
        (n = null) && o(t.prototype, n),
        c && o(t, c),
        e
    }();
    return i.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function(e) {
        var t, n = this, o = r.default.getSelectorFromElement(this);
        o && (t = document.querySelector(o));
        var s = i.default(t).data(l) ? "toggle" : a({}, i.default(t).data(), i.default(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var u = i.default(t).one(h, (function(e) {
            e.isDefaultPrevented() || u.one(p, (function() {
                i.default(n).is(":visible") && n.focus()
            }
            ))
        }
        ));
        S._jQueryInterface.call(i.default(t), s, this)
    }
    )),
    i.default.fn.modal = S._jQueryInterface,
    i.default.fn.modal.Constructor = S,
    i.default.fn.modal.noConflict = function() {
        return i.default.fn.modal = c,
        S._jQueryInterface
    }
    ,
    S
}
)),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery"), require("popper.js"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "popper.js", "./util"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Dropdown = t(e.jQuery, e.Popper, e.Util)
}(this, (function(e, t, n) {
    "use strict";
    function i(e) {
        return e && "object" == typeof e && "default"in e ? e : {
            default: e
        }
    }
    var r = i(e)
      , o = i(t)
      , a = i(n);
    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function l() {
        return l = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }
        ,
        l.apply(this, arguments)
    }
    var u = "dropdown"
      , c = "bs.dropdown"
      , d = "." + c
      , f = r.default.fn[u]
      , p = new RegExp("38|40|27")
      , h = "hide" + d
      , g = "hidden" + d
      , m = "click.bs.dropdown.data-api"
      , v = "keydown.bs.dropdown.data-api"
      , y = "disabled"
      , b = "show"
      , w = "dropdown-menu-right"
      , x = '[data-toggle="dropdown"]'
      , T = ".dropdown-menu"
      , _ = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
    }
      , E = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)"
    }
      , C = function() {
        function e(e, t) {
            this._element = e,
            this._popper = null,
            this._config = this._getConfig(t),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar(),
            this._addEventListeners()
        }
        var t, n, i, f = e.prototype;
        return f.toggle = function() {
            if (!this._element.disabled && !r.default(this._element).hasClass(y)) {
                var t = r.default(this._menu).hasClass(b);
                e._clearMenus(),
                t || this.show(!0)
            }
        }
        ,
        f.show = function(t) {
            if (void 0 === t && (t = !1),
            !(this._element.disabled || r.default(this._element).hasClass(y) || r.default(this._menu).hasClass(b))) {
                var n = {
                    relatedTarget: this._element
                }
                  , i = r.default.Event("show.bs.dropdown", n)
                  , s = e._getParentFromElement(this._element);
                if (r.default(s).trigger(i),
                !i.isDefaultPrevented()) {
                    if (!this._inNavbar && t) {
                        if (void 0 === o.default)
                            throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                        var l = this._element;
                        "parent" === this._config.reference ? l = s : a.default.isElement(this._config.reference) && (l = this._config.reference,
                        void 0 !== this._config.reference.jquery && (l = this._config.reference[0])),
                        "scrollParent" !== this._config.boundary && r.default(s).addClass("position-static"),
                        this._popper = new o.default(l,this._menu,this._getPopperConfig())
                    }
                    "ontouchstart"in document.documentElement && 0 === r.default(s).closest(".navbar-nav").length && r.default(document.body).children().on("mouseover", null, r.default.noop),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    r.default(this._menu).toggleClass(b),
                    r.default(s).toggleClass(b).trigger(r.default.Event("shown.bs.dropdown", n))
                }
            }
        }
        ,
        f.hide = function() {
            if (!this._element.disabled && !r.default(this._element).hasClass(y) && r.default(this._menu).hasClass(b)) {
                var t = {
                    relatedTarget: this._element
                }
                  , n = r.default.Event(h, t)
                  , i = e._getParentFromElement(this._element);
                r.default(i).trigger(n),
                n.isDefaultPrevented() || (this._popper && this._popper.destroy(),
                r.default(this._menu).toggleClass(b),
                r.default(i).toggleClass(b).trigger(r.default.Event(g, t)))
            }
        }
        ,
        f.dispose = function() {
            r.default.removeData(this._element, c),
            r.default(this._element).off(d),
            this._element = null,
            this._menu = null,
            null !== this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        f.update = function() {
            this._inNavbar = this._detectNavbar(),
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        f._addEventListeners = function() {
            var e = this;
            r.default(this._element).on("click.bs.dropdown", (function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                e.toggle()
            }
            ))
        }
        ,
        f._getConfig = function(e) {
            return e = l({}, this.constructor.Default, r.default(this._element).data(), e),
            a.default.typeCheckConfig(u, e, this.constructor.DefaultType),
            e
        }
        ,
        f._getMenuElement = function() {
            if (!this._menu) {
                var t = e._getParentFromElement(this._element);
                t && (this._menu = t.querySelector(T))
            }
            return this._menu
        }
        ,
        f._getPlacement = function() {
            var e = r.default(this._element.parentNode)
              , t = "bottom-start";
            return e.hasClass("dropup") ? t = r.default(this._menu).hasClass(w) ? "top-end" : "top-start" : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : r.default(this._menu).hasClass(w) && (t = "bottom-end"),
            t
        }
        ,
        f._detectNavbar = function() {
            return r.default(this._element).closest(".navbar").length > 0
        }
        ,
        f._getOffset = function() {
            var e = this
              , t = {};
            return "function" == typeof this._config.offset ? t.fn = function(t) {
                return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}),
                t
            }
            : t.offset = this._config.offset,
            t
        }
        ,
        f._getPopperConfig = function() {
            var e = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (e.modifiers.applyStyle = {
                enabled: !1
            }),
            l({}, e, this._config.popperConfig)
        }
        ,
        e._jQueryInterface = function(t) {
            return this.each((function() {
                var n = r.default(this).data(c);
                if (n || (n = new e(this,"object" == typeof t ? t : null),
                r.default(this).data(c, n)),
                "string" == typeof t) {
                    if (void 0 === n[t])
                        throw new TypeError('No method named "' + t + '"');
                    n[t]()
                }
            }
            ))
        }
        ,
        e._clearMenus = function(t) {
            if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                for (var n = [].slice.call(document.querySelectorAll(x)), i = 0, o = n.length; i < o; i++) {
                    var a = e._getParentFromElement(n[i])
                      , s = r.default(n[i]).data(c)
                      , l = {
                        relatedTarget: n[i]
                    };
                    if (t && "click" === t.type && (l.clickEvent = t),
                    s) {
                        var u = s._menu;
                        if (r.default(a).hasClass(b) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && r.default.contains(a, t.target))) {
                            var d = r.default.Event(h, l);
                            r.default(a).trigger(d),
                            d.isDefaultPrevented() || ("ontouchstart"in document.documentElement && r.default(document.body).children().off("mouseover", null, r.default.noop),
                            n[i].setAttribute("aria-expanded", "false"),
                            s._popper && s._popper.destroy(),
                            r.default(u).removeClass(b),
                            r.default(a).removeClass(b).trigger(r.default.Event(g, l)))
                        }
                    }
                }
        }
        ,
        e._getParentFromElement = function(e) {
            var t, n = a.default.getSelectorFromElement(e);
            return n && (t = document.querySelector(n)),
            t || e.parentNode
        }
        ,
        e._dataApiKeydownHandler = function(t) {
            if (!(/input|textarea/i.test(t.target.tagName) ? 32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || r.default(t.target).closest(T).length) : !p.test(t.which)) && !this.disabled && !r.default(this).hasClass(y)) {
                var n = e._getParentFromElement(this)
                  , i = r.default(n).hasClass(b);
                if (i || 27 !== t.which) {
                    if (t.preventDefault(),
                    t.stopPropagation(),
                    !i || 27 === t.which || 32 === t.which)
                        return 27 === t.which && r.default(n.querySelector(x)).trigger("focus"),
                        void r.default(this).trigger("click");
                    var o = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(e) {
                        return r.default(e).is(":visible")
                    }
                    ));
                    if (0 !== o.length) {
                        var a = o.indexOf(t.target);
                        38 === t.which && a > 0 && a--,
                        40 === t.which && a < o.length - 1 && a++,
                        a < 0 && (a = 0),
                        o[a].focus()
                    }
                }
            }
        }
        ,
        t = e,
        i = [{
            key: "VERSION",
            get: function() {
                return "4.6.0"
            }
        }, {
            key: "Default",
            get: function() {
                return _
            }
        }, {
            key: "DefaultType",
            get: function() {
                return E
            }
        }],
        (n = null) && s(t.prototype, n),
        i && s(t, i),
        e
    }();
    return r.default(document).on(v, x, C._dataApiKeydownHandler).on(v, T, C._dataApiKeydownHandler).on(m + " keyup.bs.dropdown.data-api", C._clearMenus).on(m, x, (function(e) {
        e.preventDefault(),
        e.stopPropagation(),
        C._jQueryInterface.call(r.default(this), "toggle")
    }
    )).on(m, ".dropdown form", (function(e) {
        e.stopPropagation()
    }
    )),
    r.default.fn[u] = C._jQueryInterface,
    r.default.fn[u].Constructor = C,
    r.default.fn[u].noConflict = function() {
        return r.default.fn[u] = f,
        C._jQueryInterface
    }
    ,
    C
}
));
var lazyLoadInstance = new LazyLoad;
jQuery(document).ready((function(e) {
    var t = /(.+)\.3hentai\.co/i.test(window.location.hostname) ? ".3hentai.co" : ".3hentai.net";
    e("#global-warning-adult-only").length > 0 && "0" != Cookies.get("show_modal_warn_adult") && (e("#global-warning-adult-only").on("shown.bs.modal", (function() {
        e(".modal-backdrop").css("opacity", "0.99")
    }
    )),
    e("#global-warning-adult-only").on("hidden.bs.modal", (function() {
        e("#global-warning-adult-only").remove(),
        Cookies.set("show_modal_warn_adult", "0", {
            secure: !0,
            expires: 365,
            domain: t,
            path: "/"
        })
    }
    )),
    e("#global-warning-adult-only").modal("show")),
    lazyLoadInstance.update();
    var n = function(e) {
        for (var t = 0; t < e.length; t++) {
            (new Image).src = e[t]
        }
    };
    e("div#header-ban-agsy").length > 0 && function(t) {
        if (e("div#header-ban-agsy").html(""),
        t > 800) {
            var n = '<script type="text/javascript" data-cfasync="false" async src="https://poweredby.jads.co/js/jads.js"><\/script><ins id="955224" data-width="728" data-height="102"></ins><script type="text/javascript" data-cfasync="false" async>(adsbyjuicy = window.adsbyjuicy || []).push({\'adzone\':955224});<\/script>';
            e("div#header-ban-agsy").html(n)
        } else
            n = '<script type="text/javascript" data-cfasync="false" async src="https://poweredby.jads.co/js/jads.js"><\/script><ins id="943058" data-width="300" data-height="262"></ins><script type="text/javascript" data-cfasync="false" async>(adsbyjuicy = window.adsbyjuicy || []).push({\'adzone\':943058});<\/script>',
            e("div#header-ban-agsy").html(n)
    }(e(window).width());
    e("div#middle-ban-agsy").html(e(window).width() > 800 ? '<script type="text/javascript" data-cfasync="false" async src="https://poweredby.jads.co/js/jads.js"><\/script> <ins id="929874" data-width="728" data-height="102"></ins> <script type="text/javascript" data-cfasync="false" async>(adsbyjuicy = window.adsbyjuicy || []).push({\'adzone\':929874});<\/script>' : '<script type="text/javascript" data-cfasync="false" async src="https://poweredby.jads.co/js/jads.js"><\/script> <ins id="930108" data-width="300" data-height="262"></ins> <script type="text/javascript" data-cfasync="false" async>(adsbyjuicy = window.adsbyjuicy || []).push({\'adzone\':930108});<\/script>');
    e("div#footer-ban-agsy").html(function(e) {
        return e > 800 ? '<script type="text/javascript" data-cfasync="false" async src="https://poweredby.jads.co/js/jads.js"><\/script> <ins id="939435" data-width="728" data-height="102"></ins> <script type="text/javascript" data-cfasync="false" async>(adsbyjuicy = window.adsbyjuicy || []).push({\'adzone\':939435});<\/script>' : '<script type="text/javascript" data-cfasync="false" async src="https://poweredby.jads.co/js/jads.js"><\/script> <ins id="940279" data-width="300" data-height="262"></ins><script type="text/javascript" data-cfasync="false" async>(adsbyjuicy = window.adsbyjuicy || []).push({\'adzone\':940279});<\/script>'
    }(e(window).width()));
    var i = function(e, t, n, i, r) {
        var o = n.top.outerHeight / 2 + n.top.screenY - r / 2
          , a = n.top.outerWidth / 2 + n.top.screenX - i / 2;
        return n.open(e, t, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=no, width=" + i + ", height=" + r + ", top=" + o + ", left=" + a + ", noopener=yes, noreferrer=yes")
    };
    if ("undefined" != typeof show_popup && 1 == show_popup ? "0" != Cookies.get("show_popup_ads") && e("a").one("click", (function() {
        i("https://" + window.location.hostname + "/ask_inventory", "", window, 800, 600)
    }
    )) : 1 == /\?is\_landing/i.test(window.location.href) && (null != navigator.userAgent && /Firefox/i.test(navigator.userAgent) && setTimeout((function() {
        i("https://" + window.location.hostname + "/ask_inventory", "", window, 800, 600)
    }
    ), 1500),
    e("body").prepend('<a class="init_tmp" href="javascript:;" style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; z-index: 999"></a>'),
    e(".init_tmp").on("click", (function() {
        i("https://" + window.location.hostname + "/ask_inventory", "", window, 800, 600),
        e(this).remove()
    }
    ))),
    1 == e(".js-form-register").length) {
        var r = !1;
        e(".js-form-register").submit((function(t) {
            if (0 == r && "" == e.trim(e(this).find("[type=email]").val()))
                return t.preventDefault(),
                t.stopPropagation(),
                e("#register-nomail-recovery").modal("show"),
                !1
        }
        )),
        e(".js-confirm-register-warn").on("click", (function() {
            r = !0
        }
        ))
    }
    if (e(".js-toggle-favorite").length > 0 && e(document).on("click", ".js-toggle-favorite", (function() {
        var t = e(this);
        t.prop("disabled", !0),
        e.post(t.attr("data-url"), {
            _token: t.attr("data-csrf"),
            id: t.attr("data-id"),
            type: t.attr("data-type")
        }).done((function(e) {
            t.replaceWith(e)
        }
        )).always((function() {
            t.prop("disabled", !1)
        }
        ))
    }
    )),
    e(".js-tagify[data-ajax-url]").length > 0 && e(".js-tagify[data-ajax-url]").each((function() {
        var t = [];
        try {
            t = JSON.parse(atob(e(this).attr("data-base-tags")))
        } catch (e) {}
        var n = new Tagify(this,{
            enforceWhitelist: !0,
            whitelist: t,
            editTags: !1,
            autoComplete: {
                enabled: !1
            },
            dropdown: {
                position: "all",
                enabled: 0,
                placeAbove: !1
            }
        }).on("input", function(t) {
            n.settings.whitelist.length = 0,
            n.loading(!0),
            n.dropdown.hide(),
            e.post(e(n.DOM.originalInput).attr("data-ajax-url"), {
                search: t.detail.value,
                _token: e('input[name="_token"]').val()
            }, (function(e) {
                var t = e.concat(n.value);
                n.settings.whitelist = t,
                n.loading(!1),
                n.dropdown.show()
            }
            )).fail((function() {
                n.loading(!1)
            }
            ))
        }
        .bind({
            tagify: n
        }));
        n.addTags(t)
    }
    )),
    "undefined" != typeof readerPages && null != readerPages) {
        var o = null;
        readerSettings.nbPreloadImg = parseInt(readerSettings.nbPreloadImg, 10),
        isNaN(readerSettings.nbPreloadImg) && (readerSettings.nbPreloadImg = 3);
        for (var a = parseInt(e(".js-current").first().text(), 10), s = Math.min(readerPages.lastPage, a + readerSettings.nbPreloadImg), l = [], u = Math.max(1, a - readerSettings.nbPreloadImg); u <= s; u++)
            l.push(readerPages.baseUriImg.replace("%s", readerPages.pages[u].f));
        n(l),
        e("#reader-modal-settings").on("show.bs.modal updateModalForm", (function() {
            e(this).find('select[name="nbPreloadImg"]').val(readerSettings.nbPreloadImg),
            e(this).find('select[name="turningPages"]').val(readerSettings.turningPages),
            e(this).find('select[name="scalingImageMode"]').val(readerSettings.scalingImageMode),
            e(this).find('select[name="zoom"]').val(readerSettings.zoom)
        }
        )),
        e(document).on("click", ".js-reader-settings-save", (function() {
            readerSettings.nbPreloadImg = e(".js-reader-settings-nb-preload-img").val(),
            readerSettings.turningPages = e(".js-reader-settings-turning-pages").val(),
            readerSettings.scalingImageMode = e(".js-reader-settings-scaling-img").val(),
            readerSettings.zoom = e(".js-reader-settings-zoom").val(),
            e(document).trigger("savepref"),
            "fit_screen" == readerSettings.scalingImageMode ? e(".reader-image, .reader-settings").addClass("fit-screen") : e(".reader-image, .reader-settings").removeClass("fit-screen"),
            e(document).trigger("readerZoom", readerSettings.zoom)
        }
        )),
        e(document).on("click", ".js-main-img", (function(t) {
            var n = e(this)
              , i = t.pageX - n.offset().left
              , r = (t.pageY,
            n.offset().top,
            !1);
            "right_to_next" == readerSettings.turningPages ? i > n.width() / 2 && (r = !0) : "left_to_next" == readerSettings.turningPages ? i <= n.width() / 2 && (r = !0) : r = !0,
            1 == r ? parseInt(e(".js-current").first().text(), 10) == parseInt(e(".js-last").first().attr("data-page"), 10) ? window.location.href = e(".reader-go-back").attr("href") : e(".js-next").first().trigger("changepage") : e(".js-prev").first().trigger("changepage")
        }
        )),
        e(document).on("keydown", (function(t) {
            if (e(t.target).is("input"))
                return !0;
            var n = t.keyCode || t.which;
            37 != n && 65 != n ? 39 != n && 68 != n ? (107 != n && 61 != n || (readerSettings.zoom = parseInt(readerSettings.zoom, 10) + 20,
            readerSettings.zoom = Math.min(readerSettings.zoom, 300),
            e(document).trigger("readerZoom", readerSettings.zoom),
            e(document).trigger("savepref")),
            109 != n && 54 != n || (readerSettings.zoom = parseInt(readerSettings.zoom, 10) - 20,
            readerSettings.zoom = Math.max(readerSettings.zoom, 100),
            e(document).trigger("readerZoom", readerSettings.zoom),
            e(document).trigger("savepref")),
            70 == n && ("fit_screen" == readerSettings.scalingImageMode ? (readerSettings.scalingImageMode = "fit_pages",
            e(".reader-image, .reader-settings").removeClass("fit-screen"),
            e(document).trigger("savepref")) : (readerSettings.scalingImageMode = "fit_screen",
            e(".reader-image, .reader-settings").addClass("fit-screen"),
            e(document).trigger("savepref")))) : e(".js-next").first().trigger("changepage") : e(".js-prev").first().trigger("changepage")
        }
        )),
        e(document).on("click", ".js-reader-zoom-in", (function() {
            readerSettings.zoom = parseInt(readerSettings.zoom, 10) + 20,
            readerSettings.zoom = Math.min(readerSettings.zoom, 300),
            e(document).trigger("readerZoom", readerSettings.zoom),
            e(document).trigger("savepref")
        }
        )),
        e(document).on("click", ".js-reader-zoom-out", (function() {
            readerSettings.zoom = parseInt(readerSettings.zoom, 10) - 20,
            readerSettings.zoom = Math.max(readerSettings.zoom, 100),
            e(document).trigger("readerZoom", readerSettings.zoom),
            e(document).trigger("savepref")
        }
        )),
        e(document).on("click", ".js-change-page-modal", (function(t) {
            var n = parseInt(e(".js-change-page-value").val(), 10);
            isNaN(n) || null == n || (n = Math.max(n, 1),
            n = Math.min(n, readerPages.lastPage),
            e(".js-change-page-value").val(""),
            e(".js-change-page-hidden-value").attr("data-page", n).trigger("changepage"))
        }
        ));
        var c = !1;
        e(document).on("click changepage", ".js-change-page", (function(t) {
            t.preventDefault(),
            t.stopPropagation();
            var i = parseInt(e(this).attr("data-page"), 10);
            if (0 == !(!window.history || !history.replaceState))
                return window.location.href = readerPages.baseUri.replace("%s", i),
                !0;
            if (null == o && (o = setTimeout((function() {
                o = null
            }
            ), 4e3)),
            0 == c) {
                c = !0,
                setTimeout((function() {
                    c = !1
                }
                ), 500);
                try {
                    window.history.replaceState("s", readerPages.title.replace("{:page}", i), i)
                } catch (t) {
                    return window.location.href = readerPages.baseUri.replace("%s", i),
                    !0
                }
            }
            document.title = readerPages.title.replace("{:page}", i),
            i <= 1 ? e(".js-first, .js-prev").css("visibility", "hidden") : (e(".js-prev").attr({
                href: readerPages.baseUri.replace("%s", i - 1),
                "data-page": i - 1
            }),
            e(".js-first, .js-prev").css("visibility", "visible")),
            i >= readerPages.lastPage ? e(".js-last, .js-next").css("visibility", "hidden") : (e(".js-next").attr({
                href: readerPages.baseUri.replace("%s", i + 1),
                "data-page": i + 1
            }),
            e(".js-last, .js-next").css("visibility", "visible")),
            e(".js-current").text(i);
            for (var r = Math.min(readerPages.lastPage, i + readerSettings.nbPreloadImg), a = [], s = Math.max(1, i - readerSettings.nbPreloadImg); s <= r; s++)
                a.push(readerPages.baseUriImg.replace("%s", readerPages.pages[s].f));
            n(a);
            var l = readerPages.pages[i].w
              , u = readerPages.pages[i].h
              , d = readerPages.pages[i].f;
            e(window).scrollTop(e(".reader-nav").first().offset().top);
            var f = new Image;
            f.src = readerPages.baseUriImg.replace("%s", d),
            0 == f.complete && e(".js-main-img").removeAttr("src").attr("src", "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
            e(".js-main-img").attr({
                src: readerPages.baseUriImg.replace("%s", d),
                width: parseInt(l * (readerSettings.zoom / 100), 10),
                height: parseInt(u * (readerSettings.zoom / 100), 10)
            })
        }
        )),
        e(document).on("readerZoom", (function(t, n) {
            var i = ""
              , r = [100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300];
            for (var o in r)
                i += "zoom-" + r[o] + " ";
            e(".reader-image").removeClass(i).addClass("zoom-" + n);
            var a = parseInt(e(".js-current").first().text(), 10)
              , s = readerPages.pages[a].w
              , l = readerPages.pages[a].h;
            e(".js-main-img").attr({
                width: parseInt(s * (n / 100), 10),
                height: parseInt(l * (n / 100), 10)
            }),
            e(".js-reader-zoom-value span").text(parseFloat(n / 100).toFixed(1))
        }
        ))
    } else
        e(document).on("click", ".js-reader-settings-save", (function() {
            readerSettings.nbPreloadImg = e(".js-reader-settings-nb-preload-img").val(),
            readerSettings.turningPages = e(".js-reader-settings-turning-pages").val(),
            readerSettings.scalingImageMode = e(".js-reader-settings-scaling-img").val(),
            readerSettings.zoom = e(".js-reader-settings-zoom").val(),
            e(document).trigger("savepref")
        }
        ));
    e(document).on("savepref", (function() {
        var n = btoa(JSON.stringify(readerSettings));
        Cookies.set("reading_settings", n, {
            secure: !0,
            expires: 1825,
            domain: t,
            path: "/"
        }),
        e("#reader-modal-settings").trigger("updateModalForm"),
        null != e("#reader-modal-settings").attr("data-url") && e.post(e("#reader-modal-settings").attr("data-url"), {
            reading_settings: n,
            _token: e("#reader-modal-settings").attr("data-csrf")
        }, (function(t) {
            e("#reader-modal-settings").attr("data-csrf", t)
        }
        ))
    }
    ))
}
));
