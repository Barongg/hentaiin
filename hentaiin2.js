var Sentry = function(t) {
    var e = function(t, n) {
        return e = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        ,
        e(t, n)
    };
    function n(t, n) {
        function r() {
            this.constructor = t
        }
        e(t, n),
        t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
        new r)
    }
    var r, i, o, a, s, c = function() {
        return c = Object.assign || function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var i in e = arguments[n])
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        }
        ,
        c.apply(this, arguments)
    };
    function u(t, e) {
        var n = {};
        for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
                e.indexOf(r[i]) < 0 && (n[r[i]] = t[r[i]])
        }
        return n
    }
    function p(t) {
        var e = "function" == typeof Symbol && t[Symbol.iterator]
          , n = 0;
        return e ? e.call(t) : {
            next: function() {
                return t && n >= t.length && (t = void 0),
                {
                    value: t && t[n++],
                    done: !t
                }
            }
        }
    }
    function l(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n)
            return t;
        var r, i, o = n.call(t), a = [];
        try {
            for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
                a.push(r.value)
        } catch (t) {
            i = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = o.return) && n.call(o)
            } finally {
                if (i)
                    throw i.error
            }
        }
        return a
    }
    function d() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(l(arguments[e]));
        return t
    }
    function h(t) {
        switch (Object.prototype.toString.call(t)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
            return !0;
        default:
            return E(t, Error)
        }
    }
    function f(t) {
        return "[object ErrorEvent]" === Object.prototype.toString.call(t)
    }
    function v(t) {
        return "[object DOMError]" === Object.prototype.toString.call(t)
    }
    function _(t) {
        return "[object String]" === Object.prototype.toString.call(t)
    }
    function m(t) {
        return null === t || "object" != typeof t && "function" != typeof t
    }
    function y(t) {
        return "[object Object]" === Object.prototype.toString.call(t)
    }
    function g(t) {
        return "undefined" != typeof Event && E(t, Event)
    }
    function b(t) {
        return "undefined" != typeof Element && E(t, Element)
    }
    function S(t) {
        return Boolean(t && t.then && "function" == typeof t.then)
    }
    function E(t, e) {
        try {
            return t instanceof e
        } catch (t) {
            return !1
        }
    }
    function x(t) {
        try {
            for (var e = t, n = [], r = 0, i = 0, o = " > ".length, a = void 0; e && r++ < 5 && !("html" === (a = T(e)) || r > 1 && i + n.length * o + a.length >= 80); )
                n.push(a),
                i += a.length,
                e = e.parentNode;
            return n.reverse().join(" > ")
        } catch (t) {
            return "<unknown>"
        }
    }
    function T(t) {
        var e, n, r, i, o, a = t, s = [];
        if (!a || !a.tagName)
            return "";
        if (s.push(a.tagName.toLowerCase()),
        a.id && s.push("#" + a.id),
        (e = a.className) && _(e))
            for (n = e.split(/\s+/),
            o = 0; o < n.length; o++)
                s.push("." + n[o]);
        var c = ["type", "name", "title", "alt"];
        for (o = 0; o < c.length; o++)
            r = c[o],
            (i = a.getAttribute(r)) && s.push("[" + r + '="' + i + '"]');
        return s.join("")
    }
    !function(t) {
        t[t.None = 0] = "None",
        t[t.Error = 1] = "Error",
        t[t.Debug = 2] = "Debug",
        t[t.Verbose = 3] = "Verbose"
    }(r || (r = {})),
    function(t) {
        t.Ok = "ok",
        t.Exited = "exited",
        t.Crashed = "crashed",
        t.Abnormal = "abnormal"
    }(i || (i = {})),
    (o = t.Severity || (t.Severity = {})).Fatal = "fatal",
    o.Error = "error",
    o.Warning = "warning",
    o.Log = "log",
    o.Info = "info",
    o.Debug = "debug",
    o.Critical = "critical",
    function(t) {
        t.fromString = function(e) {
            switch (e) {
            case "debug":
                return t.Debug;
            case "info":
                return t.Info;
            case "warn":
            case "warning":
                return t.Warning;
            case "error":
                return t.Error;
            case "fatal":
                return t.Fatal;
            case "critical":
                return t.Critical;
            default:
                return t.Log
            }
        }
    }(t.Severity || (t.Severity = {})),
    (a = t.Status || (t.Status = {})).Unknown = "unknown",
    a.Skipped = "skipped",
    a.Success = "success",
    a.RateLimit = "rate_limit",
    a.Invalid = "invalid",
    a.Failed = "failed",
    function(t) {
        t.fromHttpCode = function(e) {
            return e >= 200 && e < 300 ? t.Success : 429 === e ? t.RateLimit : e >= 400 && e < 500 ? t.Invalid : e >= 500 ? t.Failed : t.Unknown
        }
    }(t.Status || (t.Status = {})),
    function(t) {
        t.Explicit = "explicitly_set",
        t.Sampler = "client_sampler",
        t.Rate = "client_rate",
        t.Inheritance = "inheritance"
    }(s || (s = {}));
    var w = Object.setPrototypeOf || ({
        __proto__: []
    }instanceof Array ? function(t, e) {
        return t.__proto__ = e,
        t
    }
    : function(t, e) {
        for (var n in e)
            t.hasOwnProperty(n) || (t[n] = e[n]);
        return t
    }
    );
    var k = function(t) {
        function e(e) {
            var n = this.constructor
              , r = t.call(this, e) || this;
            return r.message = e,
            r.name = n.prototype.constructor.name,
            w(r, n.prototype),
            r
        }
        return n(e, t),
        e
    }(Error)
      , O = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/
      , I = "Invalid Dsn"
      , R = function() {
        function t(t) {
            "string" == typeof t ? this._fromString(t) : this._fromComponents(t),
            this._validate()
        }
        return t.prototype.toString = function(t) {
            void 0 === t && (t = !1);
            var e = this
              , n = e.host
              , r = e.path
              , i = e.pass
              , o = e.port
              , a = e.projectId;
            return e.protocol + "://" + e.publicKey + (t && i ? ":" + i : "") + "@" + n + (o ? ":" + o : "") + "/" + (r ? r + "/" : r) + a
        }
        ,
        t.prototype._fromString = function(t) {
            var e = O.exec(t);
            if (!e)
                throw new k(I);
            var n = l(e.slice(1), 6)
              , r = n[0]
              , i = n[1]
              , o = n[2]
              , a = void 0 === o ? "" : o
              , s = n[3]
              , c = n[4]
              , u = void 0 === c ? "" : c
              , p = ""
              , d = n[5]
              , h = d.split("/");
            if (h.length > 1 && (p = h.slice(0, -1).join("/"),
            d = h.pop()),
            d) {
                var f = d.match(/^\d+/);
                f && (d = f[0])
            }
            this._fromComponents({
                host: s,
                pass: a,
                path: p,
                projectId: d,
                port: u,
                protocol: r,
                publicKey: i
            })
        }
        ,
        t.prototype._fromComponents = function(t) {
            "user"in t && !("publicKey"in t) && (t.publicKey = t.user),
            this.user = t.publicKey || "",
            this.protocol = t.protocol,
            this.publicKey = t.publicKey || "",
            this.pass = t.pass || "",
            this.host = t.host,
            this.port = t.port || "",
            this.path = t.path || "",
            this.projectId = t.projectId
        }
        ,
        t.prototype._validate = function() {
            var t = this;
            if (["protocol", "publicKey", "host", "projectId"].forEach((function(e) {
                if (!t[e])
                    throw new k("Invalid Dsn: " + e + " missing")
            }
            )),
            !this.projectId.match(/^\d+$/))
                throw new k("Invalid Dsn: Invalid projectId " + this.projectId);
            if ("http" !== this.protocol && "https" !== this.protocol)
                throw new k("Invalid Dsn: Invalid protocol " + this.protocol);
            if (this.port && isNaN(parseInt(this.port, 10)))
                throw new k("Invalid Dsn: Invalid port " + this.port)
        }
        ,
        t
    }();
    function C() {
        return "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0)
    }
    function j(t, e) {
        return void 0 === e && (e = 0),
        "string" != typeof t || 0 === e || t.length <= e ? t : t.substr(0, e) + "..."
    }
    function D(t, e) {
        if (!Array.isArray(t))
            return "";
        for (var n = [], r = 0; r < t.length; r++) {
            var i = t[r];
            try {
                n.push(String(i))
            } catch (t) {
                n.push("[value cannot be serialized]")
            }
        }
        return n.join(e)
    }
    function N(t, e) {
        return !!_(t) && (n = e,
        "[object RegExp]" === Object.prototype.toString.call(n) ? e.test(t) : "string" == typeof e && -1 !== t.indexOf(e));
        var n
    }
    var L = {};
    function A() {
        return C() ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : L
    }
    function F() {
        var t = A()
          , e = t.crypto || t.msCrypto;
        if (void 0 !== e && e.getRandomValues) {
            var n = new Uint16Array(8);
            e.getRandomValues(n),
            n[3] = 4095 & n[3] | 16384,
            n[4] = 16383 & n[4] | 32768;
            var r = function(t) {
                for (var e = t.toString(16); e.length < 4; )
                    e = "0" + e;
                return e
            };
            return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7])
        }
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
            var e = 16 * Math.random() | 0;
            return ("x" === t ? e : 3 & e | 8).toString(16)
        }
        ))
    }
    function U(t) {
        if (!t)
            return {};
        var e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!e)
            return {};
        var n = e[6] || ""
          , r = e[8] || "";
        return {
            host: e[4],
            path: e[5],
            protocol: e[2],
            relative: e[5] + n + r
        }
    }
    function P(t) {
        if (t.message)
            return t.message;
        if (t.exception && t.exception.values && t.exception.values[0]) {
            var e = t.exception.values[0];
            return e.type && e.value ? e.type + ": " + e.value : e.type || e.value || t.event_id || "<unknown>"
        }
        return t.event_id || "<unknown>"
    }
    function M(t) {
        var e = A();
        if (!("console"in e))
            return t();
        var n = e.console
          , r = {};
        ["debug", "info", "warn", "error", "log", "assert"].forEach((function(t) {
            t in e.console && n[t].__sentry_original__ && (r[t] = n[t],
            n[t] = n[t].__sentry_original__)
        }
        ));
        var i = t();
        return Object.keys(r).forEach((function(t) {
            n[t] = r[t]
        }
        )),
        i
    }
    function H(t, e, n) {
        t.exception = t.exception || {},
        t.exception.values = t.exception.values || [],
        t.exception.values[0] = t.exception.values[0] || {},
        t.exception.values[0].value = t.exception.values[0].value || e || "",
        t.exception.values[0].type = t.exception.values[0].type || n || "Error"
    }
    function B(t, e) {
        void 0 === e && (e = {});
        try {
            t.exception.values[0].mechanism = t.exception.values[0].mechanism || {},
            Object.keys(e).forEach((function(n) {
                t.exception.values[0].mechanism[n] = e[n]
            }
            ))
        } catch (t) {}
    }
    var q = A()
      , W = "Sentry Logger "
      , Y = function() {
        function t() {
            this._enabled = !1
        }
        return t.prototype.disable = function() {
            this._enabled = !1
        }
        ,
        t.prototype.enable = function() {
            this._enabled = !0
        }
        ,
        t.prototype.log = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            this._enabled && M((function() {
                q.console.log(W + "[Log]: " + t.join(" "))
            }
            ))
        }
        ,
        t.prototype.warn = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            this._enabled && M((function() {
                q.console.warn(W + "[Warn]: " + t.join(" "))
            }
            ))
        }
        ,
        t.prototype.error = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            this._enabled && M((function() {
                q.console.error(W + "[Error]: " + t.join(" "))
            }
            ))
        }
        ,
        t
    }();
    q.__SENTRY__ = q.__SENTRY__ || {};
    var z = q.__SENTRY__.logger || (q.__SENTRY__.logger = new Y)
      , J = function() {
        function t() {
            this._hasWeakSet = "function" == typeof WeakSet,
            this._inner = this._hasWeakSet ? new WeakSet : []
        }
        return t.prototype.memoize = function(t) {
            if (this._hasWeakSet)
                return !!this._inner.has(t) || (this._inner.add(t),
                !1);
            for (var e = 0; e < this._inner.length; e++) {
                if (this._inner[e] === t)
                    return !0
            }
            return this._inner.push(t),
            !1
        }
        ,
        t.prototype.unmemoize = function(t) {
            if (this._hasWeakSet)
                this._inner.delete(t);
            else
                for (var e = 0; e < this._inner.length; e++)
                    if (this._inner[e] === t) {
                        this._inner.splice(e, 1);
                        break
                    }
        }
        ,
        t
    }()
      , G = "<anonymous>";
    function X(t) {
        try {
            return t && "function" == typeof t && t.name || G
        } catch (t) {
            return G
        }
    }
    function K(t, e, n) {
        if (e in t) {
            var r = t[e]
              , i = n(r);
            if ("function" == typeof i)
                try {
                    i.prototype = i.prototype || {},
                    Object.defineProperties(i, {
                        __sentry_original__: {
                            enumerable: !1,
                            value: r
                        }
                    })
                } catch (t) {}
            t[e] = i
        }
    }
    function V(t) {
        if (h(t)) {
            var e = t
              , n = {
                message: e.message,
                name: e.name,
                stack: e.stack
            };
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }
        if (g(t)) {
            var i = t
              , o = {};
            o.type = i.type;
            try {
                o.target = b(i.target) ? x(i.target) : Object.prototype.toString.call(i.target)
            } catch (t) {
                o.target = "<unknown>"
            }
            try {
                o.currentTarget = b(i.currentTarget) ? x(i.currentTarget) : Object.prototype.toString.call(i.currentTarget)
            } catch (t) {
                o.currentTarget = "<unknown>"
            }
            for (var r in "undefined" != typeof CustomEvent && E(t, CustomEvent) && (o.detail = i.detail),
            i)
                Object.prototype.hasOwnProperty.call(i, r) && (o[r] = i);
            return o
        }
        return t
    }
    function $(t) {
        return function(t) {
            return ~-encodeURI(t).split(/%..|./).length
        }(JSON.stringify(t))
    }
    function Q(t, e, n) {
        void 0 === e && (e = 3),
        void 0 === n && (n = 102400);
        var r = et(t, e);
        return $(r) > n ? Q(t, e - 1, n) : r
    }
    function Z(t, e) {
        return "domain" === e && t && "object" == typeof t && t._events ? "[Domain]" : "domainEmitter" === e ? "[DomainEmitter]" : "undefined" != typeof global && t === global ? "[Global]" : "undefined" != typeof window && t === window ? "[Window]" : "undefined" != typeof document && t === document ? "[Document]" : y(n = t) && "nativeEvent"in n && "preventDefault"in n && "stopPropagation"in n ? "[SyntheticEvent]" : "number" == typeof t && t != t ? "[NaN]" : void 0 === t ? "[undefined]" : "function" == typeof t ? "[Function: " + X(t) + "]" : "symbol" == typeof t ? "[" + String(t) + "]" : "bigint" == typeof t ? "[BigInt: " + String(t) + "]" : t;
        var n
    }
    function tt(t, e, n, r) {
        if (void 0 === n && (n = 1 / 0),
        void 0 === r && (r = new J),
        0 === n)
            return function(t) {
                var e = Object.prototype.toString.call(t);
                if ("string" == typeof t)
                    return t;
                if ("[object Object]" === e)
                    return "[Object]";
                if ("[object Array]" === e)
                    return "[Array]";
                var n = Z(t);
                return m(n) ? n : e
            }(e);
        if (null != e && "function" == typeof e.toJSON)
            return e.toJSON();
        var i = Z(e, t);
        if (m(i))
            return i;
        var o = V(e)
          , a = Array.isArray(e) ? [] : {};
        if (r.memoize(e))
            return "[Circular ~]";
        for (var s in o)
            Object.prototype.hasOwnProperty.call(o, s) && (a[s] = tt(s, o[s], n - 1, r));
        return r.unmemoize(e),
        a
    }
    function et(t, e) {
        try {
            return JSON.parse(JSON.stringify(t, (function(t, n) {
                return tt(t, n, e)
            }
            )))
        } catch (t) {
            return "**non-serializable**"
        }
    }
    function nt(t, e) {
        void 0 === e && (e = 40);
        var n = Object.keys(V(t));
        if (n.sort(),
        !n.length)
            return "[object has no keys]";
        if (n[0].length >= e)
            return j(n[0], e);
        for (var r = n.length; r > 0; r--) {
            var i = n.slice(0, r).join(", ");
            if (!(i.length > e))
                return r === n.length ? i : j(i, e)
        }
        return ""
    }
    function rt(t) {
        var e, n;
        if (y(t)) {
            var r = t
              , i = {};
            try {
                for (var o = p(Object.keys(r)), a = o.next(); !a.done; a = o.next()) {
                    var s = a.value;
                    void 0 !== r[s] && (i[s] = rt(r[s]))
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    a && !a.done && (n = o.return) && n.call(o)
                } finally {
                    if (e)
                        throw e.error
                }
            }
            return i
        }
        return Array.isArray(t) ? t.map(rt) : t
    }
    function it() {
        if (!("fetch"in A()))
            return !1;
        try {
            return new Headers,
            new Request(""),
            new Response,
            !0
        } catch (t) {
            return !1
        }
    }
    function ot(t) {
        return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
    }
    function at() {
        if (!it())
            return !1;
        try {
            return new Request("_",{
                referrerPolicy: "origin"
            }),
            !0
        } catch (t) {
            return !1
        }
    }
    var st, ct = A(), ut = {}, pt = {};
    function lt(t) {
        if (!pt[t])
            switch (pt[t] = !0,
            t) {
            case "console":
                !function() {
                    if (!("console"in ct))
                        return;
                    ["debug", "info", "warn", "error", "log", "assert"].forEach((function(t) {
                        t in ct.console && K(ct.console, t, (function(e) {
                            return function() {
                                for (var n = [], r = 0; r < arguments.length; r++)
                                    n[r] = arguments[r];
                                ht("console", {
                                    args: n,
                                    level: t
                                }),
                                e && Function.prototype.apply.call(e, ct.console, n)
                            }
                        }
                        ))
                    }
                    ))
                }();
                break;
            case "dom":
                !function() {
                    if (!("document"in ct))
                        return;
                    var t = ht.bind(null, "dom")
                      , e = yt(t, !0);
                    ct.document.addEventListener("click", e, !1),
                    ct.document.addEventListener("keypress", e, !1),
                    ["EventTarget", "Node"].forEach((function(e) {
                        var n = ct[e] && ct[e].prototype;
                        n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (K(n, "addEventListener", (function(e) {
                            return function(n, r, i) {
                                if ("click" === n || "keypress" == n)
                                    try {
                                        var o = this
                                          , a = o.__sentry_instrumentation_handlers__ = o.__sentry_instrumentation_handlers__ || {}
                                          , s = a[n] = a[n] || {
                                            refCount: 0
                                        };
                                        if (!s.handler) {
                                            var c = yt(t);
                                            s.handler = c,
                                            e.call(this, n, c, i)
                                        }
                                        s.refCount += 1
                                    } catch (t) {}
                                return e.call(this, n, r, i)
                            }
                        }
                        )),
                        K(n, "removeEventListener", (function(t) {
                            return function(e, n, r) {
                                if ("click" === e || "keypress" == e)
                                    try {
                                        var i = this
                                          , o = i.__sentry_instrumentation_handlers__ || {}
                                          , a = o[e];
                                        a && (a.refCount -= 1,
                                        a.refCount <= 0 && (t.call(this, e, a.handler, r),
                                        a.handler = void 0,
                                        delete o[e]),
                                        0 === Object.keys(o).length && delete i.__sentry_instrumentation_handlers__)
                                    } catch (t) {}
                                return t.call(this, e, n, r)
                            }
                        }
                        )))
                    }
                    ))
                }();
                break;
            case "xhr":
                !function() {
                    if (!("XMLHttpRequest"in ct))
                        return;
                    var t = []
                      , e = []
                      , n = XMLHttpRequest.prototype;
                    K(n, "open", (function(n) {
                        return function() {
                            for (var r = [], i = 0; i < arguments.length; i++)
                                r[i] = arguments[i];
                            var o = this
                              , a = r[1];
                            o.__sentry_xhr__ = {
                                method: _(r[0]) ? r[0].toUpperCase() : r[0],
                                url: r[1]
                            },
                            _(a) && "POST" === o.__sentry_xhr__.method && a.match(/sentry_key/) && (o.__sentry_own_request__ = !0);
                            var s = function() {
                                if (4 === o.readyState) {
                                    try {
                                        o.__sentry_xhr__ && (o.__sentry_xhr__.status_code = o.status)
                                    } catch (t) {}
                                    try {
                                        var n = t.indexOf(o);
                                        if (-1 !== n) {
                                            t.splice(n);
                                            var i = e.splice(n)[0];
                                            o.__sentry_xhr__ && void 0 !== i[0] && (o.__sentry_xhr__.body = i[0])
                                        }
                                    } catch (t) {}
                                    ht("xhr", {
                                        args: r,
                                        endTimestamp: Date.now(),
                                        startTimestamp: Date.now(),
                                        xhr: o
                                    })
                                }
                            };
                            return "onreadystatechange"in o && "function" == typeof o.onreadystatechange ? K(o, "onreadystatechange", (function(t) {
                                return function() {
                                    for (var e = [], n = 0; n < arguments.length; n++)
                                        e[n] = arguments[n];
                                    return s(),
                                    t.apply(o, e)
                                }
                            }
                            )) : o.addEventListener("readystatechange", s),
                            n.apply(o, r)
                        }
                    }
                    )),
                    K(n, "send", (function(n) {
                        return function() {
                            for (var r = [], i = 0; i < arguments.length; i++)
                                r[i] = arguments[i];
                            return t.push(this),
                            e.push(r),
                            ht("xhr", {
                                args: r,
                                startTimestamp: Date.now(),
                                xhr: this
                            }),
                            n.apply(this, r)
                        }
                    }
                    ))
                }();
                break;
            case "fetch":
                !function() {
                    if (!function() {
                        if (!it())
                            return !1;
                        var t = A();
                        if (ot(t.fetch))
                            return !0;
                        var e = !1
                          , n = t.document;
                        if (n && "function" == typeof n.createElement)
                            try {
                                var r = n.createElement("iframe");
                                r.hidden = !0,
                                n.head.appendChild(r),
                                r.contentWindow && r.contentWindow.fetch && (e = ot(r.contentWindow.fetch)),
                                n.head.removeChild(r)
                            } catch (t) {
                                z.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
                            }
                        return e
                    }())
                        return;
                    K(ct, "fetch", (function(t) {
                        return function() {
                            for (var e = [], n = 0; n < arguments.length; n++)
                                e[n] = arguments[n];
                            var r = {
                                args: e,
                                fetchData: {
                                    method: ft(e),
                                    url: vt(e)
                                },
                                startTimestamp: Date.now()
                            };
                            return ht("fetch", c({}, r)),
                            t.apply(ct, e).then((function(t) {
                                return ht("fetch", c(c({}, r), {
                                    endTimestamp: Date.now(),
                                    response: t
                                })),
                                t
                            }
                            ), (function(t) {
                                throw ht("fetch", c(c({}, r), {
                                    endTimestamp: Date.now(),
                                    error: t
                                })),
                                t
                            }
                            ))
                        }
                    }
                    ))
                }();
                break;
            case "history":
                !function() {
                    if (!function() {
                        var t = A()
                          , e = t.chrome
                          , n = e && e.app && e.app.runtime
                          , r = "history"in t && !!t.history.pushState && !!t.history.replaceState;
                        return !n && r
                    }())
                        return;
                    var t = ct.onpopstate;
                    function e(t) {
                        return function() {
                            for (var e = [], n = 0; n < arguments.length; n++)
                                e[n] = arguments[n];
                            var r = e.length > 2 ? e[2] : void 0;
                            if (r) {
                                var i = st
                                  , o = String(r);
                                st = o,
                                ht("history", {
                                    from: i,
                                    to: o
                                })
                            }
                            return t.apply(this, e)
                        }
                    }
                    ct.onpopstate = function() {
                        for (var e = [], n = 0; n < arguments.length; n++)
                            e[n] = arguments[n];
                        var r = ct.location.href
                          , i = st;
                        if (st = r,
                        ht("history", {
                            from: i,
                            to: r
                        }),
                        t)
                            try {
                                return t.apply(this, e)
                            } catch (t) {}
                    }
                    ,
                    K(ct.history, "pushState", e),
                    K(ct.history, "replaceState", e)
                }();
                break;
            case "error":
                gt = ct.onerror,
                ct.onerror = function(t, e, n, r, i) {
                    return ht("error", {
                        column: r,
                        error: i,
                        line: n,
                        msg: t,
                        url: e
                    }),
                    !!gt && gt.apply(this, arguments)
                }
                ;
                break;
            case "unhandledrejection":
                St = ct.onunhandledrejection,
                ct.onunhandledrejection = function(t) {
                    return ht("unhandledrejection", t),
                    !St || St.apply(this, arguments)
                }
                ;
                break;
            default:
                z.warn("unknown instrumentation type:", t)
            }
    }
    function dt(t) {
        t && "string" == typeof t.type && "function" == typeof t.callback && (ut[t.type] = ut[t.type] || [],
        ut[t.type].push(t.callback),
        lt(t.type))
    }
    function ht(t, e) {
        var n, r;
        if (t && ut[t])
            try {
                for (var i = p(ut[t] || []), o = i.next(); !o.done; o = i.next()) {
                    var a = o.value;
                    try {
                        a(e)
                    } catch (e) {
                        z.error("Error while triggering instrumentation handler.\nType: " + t + "\nName: " + X(a) + "\nError: " + e)
                    }
                }
            } catch (t) {
                n = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = i.return) && r.call(i)
                } finally {
                    if (n)
                        throw n.error
                }
            }
    }
    function ft(t) {
        return void 0 === t && (t = []),
        "Request"in ct && E(t[0], Request) && t[0].method ? String(t[0].method).toUpperCase() : t[1] && t[1].method ? String(t[1].method).toUpperCase() : "GET"
    }
    function vt(t) {
        return void 0 === t && (t = []),
        "string" == typeof t[0] ? t[0] : "Request"in ct && E(t[0], Request) ? t[0].url : String(t[0])
    }
    var _t, mt;
    function yt(t, e) {
        return void 0 === e && (e = !1),
        function(n) {
            if (n && mt !== n && !function(t) {
                if ("keypress" !== t.type)
                    return !1;
                try {
                    var e = t.target;
                    if (!e || !e.tagName)
                        return !0;
                    if ("INPUT" === e.tagName || "TEXTAREA" === e.tagName || e.isContentEditable)
                        return !1
                } catch (t) {}
                return !0
            }(n)) {
                var r = "keypress" === n.type ? "input" : n.type;
                (void 0 === _t || function(t, e) {
                    if (!t)
                        return !0;
                    if (t.type !== e.type)
                        return !0;
                    try {
                        if (t.target !== e.target)
                            return !0
                    } catch (t) {}
                    return !1
                }(mt, n)) && (t({
                    event: n,
                    name: r,
                    global: e
                }),
                mt = n),
                clearTimeout(_t),
                _t = ct.setTimeout((function() {
                    _t = void 0
                }
                ), 1e3)
            }
        }
    }
    var gt = null;
    var bt, St = null;
    !function(t) {
        t.PENDING = "PENDING",
        t.RESOLVED = "RESOLVED",
        t.REJECTED = "REJECTED"
    }(bt || (bt = {}));
    var Et = function() {
        function t(t) {
            var e = this;
            this._state = bt.PENDING,
            this._handlers = [],
            this._resolve = function(t) {
                e._setResult(bt.RESOLVED, t)
            }
            ,
            this._reject = function(t) {
                e._setResult(bt.REJECTED, t)
            }
            ,
            this._setResult = function(t, n) {
                e._state === bt.PENDING && (S(n) ? n.then(e._resolve, e._reject) : (e._state = t,
                e._value = n,
                e._executeHandlers()))
            }
            ,
            this._attachHandler = function(t) {
                e._handlers = e._handlers.concat(t),
                e._executeHandlers()
            }
            ,
            this._executeHandlers = function() {
                if (e._state !== bt.PENDING) {
                    var t = e._handlers.slice();
                    e._handlers = [],
                    t.forEach((function(t) {
                        t.done || (e._state === bt.RESOLVED && t.onfulfilled && t.onfulfilled(e._value),
                        e._state === bt.REJECTED && t.onrejected && t.onrejected(e._value),
                        t.done = !0)
                    }
                    ))
                }
            }
            ;
            try {
                t(this._resolve, this._reject)
            } catch (t) {
                this._reject(t)
            }
        }
        return t.resolve = function(e) {
            return new t((function(t) {
                t(e)
            }
            ))
        }
        ,
        t.reject = function(e) {
            return new t((function(t, n) {
                n(e)
            }
            ))
        }
        ,
        t.all = function(e) {
            return new t((function(n, r) {
                if (Array.isArray(e))
                    if (0 !== e.length) {
                        var i = e.length
                          , o = [];
                        e.forEach((function(e, a) {
                            t.resolve(e).then((function(t) {
                                o[a] = t,
                                0 === (i -= 1) && n(o)
                            }
                            )).then(null, r)
                        }
                        ))
                    } else
                        n([]);
                else
                    r(new TypeError("Promise.all requires an array as input."))
            }
            ))
        }
        ,
        t.prototype.then = function(e, n) {
            var r = this;
            return new t((function(t, i) {
                r._attachHandler({
                    done: !1,
                    onfulfilled: function(n) {
                        if (e)
                            try {
                                return void t(e(n))
                            } catch (t) {
                                return void i(t)
                            }
                        else
                            t(n)
                    },
                    onrejected: function(e) {
                        if (n)
                            try {
                                return void t(n(e))
                            } catch (t) {
                                return void i(t)
                            }
                        else
                            i(e)
                    }
                })
            }
            ))
        }
        ,
        t.prototype.catch = function(t) {
            return this.then((function(t) {
                return t
            }
            ), t)
        }
        ,
        t.prototype.finally = function(e) {
            var n = this;
            return new t((function(t, r) {
                var i, o;
                return n.then((function(t) {
                    o = !1,
                    i = t,
                    e && e()
                }
                ), (function(t) {
                    o = !0,
                    i = t,
                    e && e()
                }
                )).then((function() {
                    o ? r(i) : t(i)
                }
                ))
            }
            ))
        }
        ,
        t.prototype.toString = function() {
            return "[object SyncPromise]"
        }
        ,
        t
    }()
      , xt = function() {
        function t(t) {
            this._limit = t,
            this._buffer = []
        }
        return t.prototype.isReady = function() {
            return void 0 === this._limit || this.length() < this._limit
        }
        ,
        t.prototype.add = function(t) {
            var e = this;
            return this.isReady() ? (-1 === this._buffer.indexOf(t) && this._buffer.push(t),
            t.then((function() {
                return e.remove(t)
            }
            )).then(null, (function() {
                return e.remove(t).then(null, (function() {}
                ))
            }
            )),
            t) : Et.reject(new k("Not adding Promise due to buffer limit reached."))
        }
        ,
        t.prototype.remove = function(t) {
            return this._buffer.splice(this._buffer.indexOf(t), 1)[0]
        }
        ,
        t.prototype.length = function() {
            return this._buffer.length
        }
        ,
        t.prototype.drain = function(t) {
            var e = this;
            return new Et((function(n) {
                var r = setTimeout((function() {
                    t && t > 0 && n(!1)
                }
                ), t);
                Et.all(e._buffer).then((function() {
                    clearTimeout(r),
                    n(!0)
                }
                )).then(null, (function() {
                    n(!0)
                }
                ))
            }
            ))
        }
        ,
        t
    }()
      , Tt = {
        nowSeconds: function() {
            return Date.now() / 1e3
        }
    };
    var wt = C() ? function() {
        try {
            return (t = module,
            e = "perf_hooks",
            t.require(e)).performance
        } catch (t) {
            return
        }
        var t, e
    }() : function() {
        var t = A().performance;
        if (t && t.now)
            return {
                now: function() {
                    return t.now()
                },
                timeOrigin: Date.now() - t.now()
            }
    }()
      , kt = void 0 === wt ? Tt : {
        nowSeconds: function() {
            return (wt.timeOrigin + wt.now()) / 1e3
        }
    }
      , Ot = Tt.nowSeconds.bind(Tt)
      , It = kt.nowSeconds.bind(kt)
      , Rt = function() {
        var t = A().performance;
        if (t) {
            var e = 36e5
              , n = t.now()
              , r = Date.now()
              , i = t.timeOrigin ? Math.abs(t.timeOrigin + n - r) : e
              , o = i < e
              , a = t.timing && t.timing.navigationStart
              , s = "number" == typeof a ? Math.abs(a + n - r) : e;
            return o || s < e ? i <= s ? t.timeOrigin : a : r
        }
    }()
      , Ct = function() {
        function t() {
            this._notifyingListeners = !1,
            this._scopeListeners = [],
            this._eventProcessors = [],
            this._breadcrumbs = [],
            this._user = {},
            this._tags = {},
            this._extra = {},
            this._contexts = {}
        }
        return t.clone = function(e) {
            var n = new t;
            return e && (n._breadcrumbs = d(e._breadcrumbs),
            n._tags = c({}, e._tags),
            n._extra = c({}, e._extra),
            n._contexts = c({}, e._contexts),
            n._user = e._user,
            n._level = e._level,
            n._span = e._span,
            n._session = e._session,
            n._transactionName = e._transactionName,
            n._fingerprint = e._fingerprint,
            n._eventProcessors = d(e._eventProcessors)),
            n
        }
        ,
        t.prototype.addScopeListener = function(t) {
            this._scopeListeners.push(t)
        }
        ,
        t.prototype.addEventProcessor = function(t) {
            return this._eventProcessors.push(t),
            this
        }
        ,
        t.prototype.setUser = function(t) {
            return this._user = t || {},
            this._session && this._session.update({
                user: t
            }),
            this._notifyScopeListeners(),
            this
        }
        ,
        t.prototype.getUser = function() {
            return this._user
        }
        ,
        t.prototype.setTags = function(t) {
            return this._tags = c(c({}, this._tags), t),
            this._notifyScopeListeners(),
            this
        }
        ,
        t.prototype.setTag = function(t, e) {
            var n;
            return this._tags = c(c({}, this._tags), ((n = {})[t] = e,
            n)),
            this._notifyScopeListeners(),
            this
        }
        ,
        t.prototype.setExtras = function(t) {
            return this._extra = c(c({}, this._extra), t),
            this._notifyScopeListeners(),
            this
        }
        ,
        t.prototype.setExtra = function(t, e) {
            var n;
            return this._extra = c(c({}, this._extra), ((n = {})[t] = e,
            n)),
            this._notifyScopeListeners(),
            this
        }
        ,
        t.prototype.setFingerprint = function(t) {
            return this._fingerprint = t,
            this._notifyScopeListeners(),
            this
        }
        ,
        t.prototype.setLevel = function(t) {
            return this._level = t,
            this._notifyScopeListeners(),
            this
        }
        ,
        t.prototype.setTransactionName = function(t) {
            return this._transactionName = t,
            this._notifyScopeListeners(),
            this
        }
        ,
        t.prototype.setTransaction = function(t) {
            return this.setTransactionName(t)
        }
        ,
        t.prototype.setContext = function(t, e) {
            var n;
            return null === e ? delete this._contexts[t] : this._contexts = c(c({}, this._contexts), ((n = {})[t] = e,
            n)),
            this._notifyScopeListeners(),
            this
        }
        ,
        t.prototype.setSpan = function(t) {
            return this._span = t,
            this._notifyScopeListeners(),
            this
        }
        ,
        t.prototype.getSpan = function() {
            return this._span
        }
        ,
        t.prototype.getTransaction = function() {
            var t, e, n, r, i = this.getSpan();
            return (null === (t = i) || void 0 === t ? void 0 : t.transaction) ? null === (e = i) || void 0 === e ? void 0 : e.transaction : (null === (r = null === (n = i) || void 0 === n ? void 0 : n.spanRecorder) || void 0 === r ? void 0 : r.spans[0]) ? i.spanRecorder.spans[0] : void 0
        }
        ,
        t.prototype.setSession = function(t) {
            return t ? this._session = t : delete this._session,
            this._notifyScopeListeners(),
            this
        }
        ,
        t.prototype.getSession = function() {
            return this._session
        }
        ,
        t.prototype.update = function(e) {
            if (!e)
                return this;
            if ("function" == typeof e) {
                var n = e(this);
                return n instanceof t ? n : this
            }
            return e instanceof t ? (this._tags = c(c({}, this._tags), e._tags),
            this._extra = c(c({}, this._extra), e._extra),
            this._contexts = c(c({}, this._contexts), e._contexts),
            e._user && Object.keys(e._user).length && (this._user = e._user),
            e._level && (this._level = e._level),
            e._fingerprint && (this._fingerprint = e._fingerprint)) : y(e) && (e = e,
            this._tags = c(c({}, this._tags), e.tags),
            this._extra = c(c({}, this._extra), e.extra),
            this._contexts = c(c({}, this._contexts), e.contexts),
            e.user && (this._user = e.user),
            e.level && (this._level = e.level),
            e.fingerprint && (this._fingerprint = e.fingerprint)),
            this
        }
        ,
        t.prototype.clear = function() {
            return this._breadcrumbs = [],
            this._tags = {},
            this._extra = {},
            this._user = {},
            this._contexts = {},
            this._level = void 0,
            this._transactionName = void 0,
            this._fingerprint = void 0,
            this._span = void 0,
            this._session = void 0,
            this._notifyScopeListeners(),
            this
        }
        ,
        t.prototype.addBreadcrumb = function(t, e) {
            var n = c({
                timestamp: Ot()
            }, t);
            return this._breadcrumbs = void 0 !== e && e >= 0 ? d(this._breadcrumbs, [n]).slice(-e) : d(this._breadcrumbs, [n]),
            this._notifyScopeListeners(),
            this
        }
        ,
        t.prototype.clearBreadcrumbs = function() {
            return this._breadcrumbs = [],
            this._notifyScopeListeners(),
            this
        }
        ,
        t.prototype.applyToEvent = function(t, e) {
            var n;
            if (this._extra && Object.keys(this._extra).length && (t.extra = c(c({}, this._extra), t.extra)),
            this._tags && Object.keys(this._tags).length && (t.tags = c(c({}, this._tags), t.tags)),
            this._user && Object.keys(this._user).length && (t.user = c(c({}, this._user), t.user)),
            this._contexts && Object.keys(this._contexts).length && (t.contexts = c(c({}, this._contexts), t.contexts)),
            this._level && (t.level = this._level),
            this._transactionName && (t.transaction = this._transactionName),
            this._span) {
                t.contexts = c({
                    trace: this._span.getTraceContext()
                }, t.contexts);
                var r = null === (n = this._span.transaction) || void 0 === n ? void 0 : n.name;
                r && (t.tags = c({
                    transaction: r
                }, t.tags))
            }
            return this._applyFingerprint(t),
            t.breadcrumbs = d(t.breadcrumbs || [], this._breadcrumbs),
            t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0,
            this._notifyEventProcessors(d(jt(), this._eventProcessors), t, e)
        }
        ,
        t.prototype._notifyEventProcessors = function(t, e, n, r) {
            var i = this;
            return void 0 === r && (r = 0),
            new Et((function(o, a) {
                var s = t[r];
                if (null === e || "function" != typeof s)
                    o(e);
                else {
                    var u = s(c({}, e), n);
                    S(u) ? u.then((function(e) {
                        return i._notifyEventProcessors(t, e, n, r + 1).then(o)
                    }
                    )).then(null, a) : i._notifyEventProcessors(t, u, n, r + 1).then(o).then(null, a)
                }
            }
            ))
        }
        ,
        t.prototype._notifyScopeListeners = function() {
            var t = this;
            this._notifyingListeners || (this._notifyingListeners = !0,
            this._scopeListeners.forEach((function(e) {
                e(t)
            }
            )),
            this._notifyingListeners = !1)
        }
        ,
        t.prototype._applyFingerprint = function(t) {
            t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [],
            this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
            t.fingerprint && !t.fingerprint.length && delete t.fingerprint
        }
        ,
        t
    }();
    function jt() {
        var t = A();
        return t.__SENTRY__ = t.__SENTRY__ || {},
        t.__SENTRY__.globalEventProcessors = t.__SENTRY__.globalEventProcessors || [],
        t.__SENTRY__.globalEventProcessors
    }
    function Dt(t) {
        jt().push(t)
    }
    var Nt = function() {
        function t(t) {
            this.errors = 0,
            this.sid = F(),
            this.timestamp = Date.now(),
            this.started = Date.now(),
            this.duration = 0,
            this.status = i.Ok,
            this.init = !0,
            t && this.update(t)
        }
        return t.prototype.update = function(t) {
            void 0 === t && (t = {}),
            t.user && (t.user.ip_address && (this.ipAddress = t.user.ip_address),
            t.did || (this.did = t.user.id || t.user.email || t.user.username)),
            this.timestamp = t.timestamp || Date.now(),
            t.sid && (this.sid = 32 === t.sid.length ? t.sid : F()),
            void 0 !== t.init && (this.init = t.init),
            t.did && (this.did = "" + t.did),
            "number" == typeof t.started && (this.started = t.started),
            "number" == typeof t.duration ? this.duration = t.duration : this.duration = this.timestamp - this.started,
            t.release && (this.release = t.release),
            t.environment && (this.environment = t.environment),
            t.ipAddress && (this.ipAddress = t.ipAddress),
            t.userAgent && (this.userAgent = t.userAgent),
            "number" == typeof t.errors && (this.errors = t.errors),
            t.status && (this.status = t.status)
        }
        ,
        t.prototype.close = function(t) {
            t ? this.update({
                status: t
            }) : this.status === i.Ok ? this.update({
                status: i.Exited
            }) : this.update()
        }
        ,
        t.prototype.toJSON = function() {
            return rt({
                sid: "" + this.sid,
                init: this.init,
                started: new Date(this.started).toISOString(),
                timestamp: new Date(this.timestamp).toISOString(),
                status: this.status,
                errors: this.errors,
                did: "number" == typeof this.did || "string" == typeof this.did ? "" + this.did : void 0,
                duration: this.duration,
                attrs: rt({
                    release: this.release,
                    environment: this.environment,
                    ip_address: this.ipAddress,
                    user_agent: this.userAgent
                })
            })
        }
        ,
        t
    }()
      , Lt = function() {
        function t(t, e, n) {
            void 0 === e && (e = new Ct),
            void 0 === n && (n = 3),
            this._version = n,
            this._stack = [{}],
            this.getStackTop().scope = e,
            this.bindClient(t)
        }
        return t.prototype.isOlderThan = function(t) {
            return this._version < t
        }
        ,
        t.prototype.bindClient = function(t) {
            this.getStackTop().client = t,
            t && t.setupIntegrations && t.setupIntegrations()
        }
        ,
        t.prototype.pushScope = function() {
            var t = Ct.clone(this.getScope());
            return this.getStack().push({
                client: this.getClient(),
                scope: t
            }),
            t
        }
        ,
        t.prototype.popScope = function() {
            return !(this.getStack().length <= 1) && !!this.getStack().pop()
        }
        ,
        t.prototype.withScope = function(t) {
            var e = this.pushScope();
            try {
                t(e)
            } finally {
                this.popScope()
            }
        }
        ,
        t.prototype.getClient = function() {
            return this.getStackTop().client
        }
        ,
        t.prototype.getScope = function() {
            return this.getStackTop().scope
        }
        ,
        t.prototype.getStack = function() {
            return this._stack
        }
        ,
        t.prototype.getStackTop = function() {
            return this._stack[this._stack.length - 1]
        }
        ,
        t.prototype.captureException = function(t, e) {
            var n = this._lastEventId = F()
              , r = e;
            if (!e) {
                var i = void 0;
                try {
                    throw new Error("Sentry syntheticException")
                } catch (t) {
                    i = t
                }
                r = {
                    originalException: t,
                    syntheticException: i
                }
            }
            return this._invokeClient("captureException", t, c(c({}, r), {
                event_id: n
            })),
            n
        }
        ,
        t.prototype.captureMessage = function(t, e, n) {
            var r = this._lastEventId = F()
              , i = n;
            if (!n) {
                var o = void 0;
                try {
                    throw new Error(t)
                } catch (t) {
                    o = t
                }
                i = {
                    originalException: t,
                    syntheticException: o
                }
            }
            return this._invokeClient("captureMessage", t, e, c(c({}, i), {
                event_id: r
            })),
            r
        }
        ,
        t.prototype.captureEvent = function(t, e) {
            var n = this._lastEventId = F();
            return this._invokeClient("captureEvent", t, c(c({}, e), {
                event_id: n
            })),
            n
        }
        ,
        t.prototype.lastEventId = function() {
            return this._lastEventId
        }
        ,
        t.prototype.addBreadcrumb = function(t, e) {
            var n = this.getStackTop()
              , r = n.scope
              , i = n.client;
            if (r && i) {
                var o = i.getOptions && i.getOptions() || {}
                  , a = o.beforeBreadcrumb
                  , s = void 0 === a ? null : a
                  , u = o.maxBreadcrumbs
                  , p = void 0 === u ? 100 : u;
                if (!(p <= 0)) {
                    var l = Ot()
                      , d = c({
                        timestamp: l
                    }, t)
                      , h = s ? M((function() {
                        return s(d, e)
                    }
                    )) : d;
                    null !== h && r.addBreadcrumb(h, Math.min(p, 100))
                }
            }
        }
        ,
        t.prototype.setUser = function(t) {
            var e = this.getScope();
            e && e.setUser(t)
        }
        ,
        t.prototype.setTags = function(t) {
            var e = this.getScope();
            e && e.setTags(t)
        }
        ,
        t.prototype.setExtras = function(t) {
            var e = this.getScope();
            e && e.setExtras(t)
        }
        ,
        t.prototype.setTag = function(t, e) {
            var n = this.getScope();
            n && n.setTag(t, e)
        }
        ,
        t.prototype.setExtra = function(t, e) {
            var n = this.getScope();
            n && n.setExtra(t, e)
        }
        ,
        t.prototype.setContext = function(t, e) {
            var n = this.getScope();
            n && n.setContext(t, e)
        }
        ,
        t.prototype.configureScope = function(t) {
            var e = this.getStackTop()
              , n = e.scope
              , r = e.client;
            n && r && t(n)
        }
        ,
        t.prototype.run = function(t) {
            var e = Ft(this);
            try {
                t(this)
            } finally {
                Ft(e)
            }
        }
        ,
        t.prototype.getIntegration = function(t) {
            var e = this.getClient();
            if (!e)
                return null;
            try {
                return e.getIntegration(t)
            } catch (e) {
                return z.warn("Cannot retrieve integration " + t.id + " from the current Hub"),
                null
            }
        }
        ,
        t.prototype.startSpan = function(t) {
            return this._callExtensionMethod("startSpan", t)
        }
        ,
        t.prototype.startTransaction = function(t, e) {
            return this._callExtensionMethod("startTransaction", t, e)
        }
        ,
        t.prototype.traceHeaders = function() {
            return this._callExtensionMethod("traceHeaders")
        }
        ,
        t.prototype.captureSession = function(t) {
            if (void 0 === t && (t = !1),
            t)
                return this.endSession();
            this._sendSessionUpdate()
        }
        ,
        t.prototype.endSession = function() {
            var t, e, n, r, i;
            null === (n = null === (e = null === (t = this.getStackTop()) || void 0 === t ? void 0 : t.scope) || void 0 === e ? void 0 : e.getSession()) || void 0 === n || n.close(),
            this._sendSessionUpdate(),
            null === (i = null === (r = this.getStackTop()) || void 0 === r ? void 0 : r.scope) || void 0 === i || i.setSession()
        }
        ,
        t.prototype.startSession = function(t) {
            var e = this.getStackTop()
              , n = e.scope
              , r = e.client
              , o = r && r.getOptions() || {}
              , a = o.release
              , s = o.environment
              , u = new Nt(c(c({
                release: a,
                environment: s
            }, n && {
                user: n.getUser()
            }), t));
            if (n) {
                var p = n.getSession && n.getSession();
                p && p.status === i.Ok && p.update({
                    status: i.Exited
                }),
                this.endSession(),
                n.setSession(u)
            }
            return u
        }
        ,
        t.prototype._sendSessionUpdate = function() {
            var t = this.getStackTop()
              , e = t.scope
              , n = t.client;
            if (e) {
                var r = e.getSession && e.getSession();
                r && n && n.captureSession && n.captureSession(r)
            }
        }
        ,
        t.prototype._invokeClient = function(t) {
            for (var e, n = [], r = 1; r < arguments.length; r++)
                n[r - 1] = arguments[r];
            var i = this.getStackTop()
              , o = i.scope
              , a = i.client;
            a && a[t] && (e = a)[t].apply(e, d(n, [o]))
        }
        ,
        t.prototype._callExtensionMethod = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
            var r = At()
              , i = r.__SENTRY__;
            if (i && i.extensions && "function" == typeof i.extensions[t])
                return i.extensions[t].apply(this, e);
            z.warn("Extension method " + t + " couldn't be found, doing nothing.")
        }
        ,
        t
    }();
    function At() {
        var t = A();
        return t.__SENTRY__ = t.__SENTRY__ || {
            extensions: {},
            hub: void 0
        },
        t
    }
    function Ft(t) {
        var e = At()
          , n = Mt(e);
        return Ht(e, t),
        n
    }
    function Ut() {
        var t = At();
        return Pt(t) && !Mt(t).isOlderThan(3) || Ht(t, new Lt),
        C() ? function(t) {
            var e, n, r;
            try {
                var i = null === (r = null === (n = null === (e = At().__SENTRY__) || void 0 === e ? void 0 : e.extensions) || void 0 === n ? void 0 : n.domain) || void 0 === r ? void 0 : r.active;
                if (!i)
                    return Mt(t);
                if (!Pt(i) || Mt(i).isOlderThan(3)) {
                    var o = Mt(t).getStackTop();
                    Ht(i, new Lt(o.client,Ct.clone(o.scope)))
                }
                return Mt(i)
            } catch (e) {
                return Mt(t)
            }
        }(t) : Mt(t)
    }
    function Pt(t) {
        return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
    }
    function Mt(t) {
        return t && t.__SENTRY__ && t.__SENTRY__.hub || (t.__SENTRY__ = t.__SENTRY__ || {},
        t.__SENTRY__.hub = new Lt),
        t.__SENTRY__.hub
    }
    function Ht(t, e) {
        return !!t && (t.__SENTRY__ = t.__SENTRY__ || {},
        t.__SENTRY__.hub = e,
        !0)
    }
    function Bt(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
        var r = Ut();
        if (r && r[t])
            return r[t].apply(r, d(e));
        throw new Error("No hub defined or " + t + " was not found on the hub, please open a bug report.")
    }
    function qt(t, e) {
        var n;
        try {
            throw new Error("Sentry syntheticException")
        } catch (t) {
            n = t
        }
        return Bt("captureException", t, {
            captureContext: e,
            originalException: t,
            syntheticException: n
        })
    }
    function Wt(t) {
        Bt("withScope", t)
    }
    var Yt = function() {
        function t(t, e) {
            void 0 === e && (e = {}),
            this.dsn = t,
            this._dsnObject = new R(t),
            this.metadata = e
        }
        return t.prototype.getDsn = function() {
            return this._dsnObject
        }
        ,
        t.prototype.getBaseApiEndpoint = function() {
            var t = this._dsnObject
              , e = t.protocol ? t.protocol + ":" : ""
              , n = t.port ? ":" + t.port : "";
            return e + "//" + t.host + n + (t.path ? "/" + t.path : "") + "/api/"
        }
        ,
        t.prototype.getStoreEndpoint = function() {
            return this._getIngestEndpoint("store")
        }
        ,
        t.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
            return this.getStoreEndpoint() + "?" + this._encodedAuth()
        }
        ,
        t.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function() {
            return this._getEnvelopeEndpoint() + "?" + this._encodedAuth()
        }
        ,
        t.prototype.getStoreEndpointPath = function() {
            var t = this._dsnObject;
            return (t.path ? "/" + t.path : "") + "/api/" + t.projectId + "/store/"
        }
        ,
        t.prototype.getRequestHeaders = function(t, e) {
            var n = this._dsnObject
              , r = ["Sentry sentry_version=7"];
            return r.push("sentry_client=" + t + "/" + e),
            r.push("sentry_key=" + n.publicKey),
            n.pass && r.push("sentry_secret=" + n.pass),
            {
                "Content-Type": "application/json",
                "X-Sentry-Auth": r.join(", ")
            }
        }
        ,
        t.prototype.getReportDialogEndpoint = function(t) {
            void 0 === t && (t = {});
            var e = this._dsnObject
              , n = this.getBaseApiEndpoint() + "embed/error-page/"
              , r = [];
            for (var i in r.push("dsn=" + e.toString()),
            t)
                if ("dsn" !== i)
                    if ("user" === i) {
                        if (!t.user)
                            continue;
                        t.user.name && r.push("name=" + encodeURIComponent(t.user.name)),
                        t.user.email && r.push("email=" + encodeURIComponent(t.user.email))
                    } else
                        r.push(encodeURIComponent(i) + "=" + encodeURIComponent(t[i]));
            return r.length ? n + "?" + r.join("&") : n
        }
        ,
        t.prototype._getEnvelopeEndpoint = function() {
            return this._getIngestEndpoint("envelope")
        }
        ,
        t.prototype._getIngestEndpoint = function(t) {
            return "" + this.getBaseApiEndpoint() + this._dsnObject.projectId + "/" + t + "/"
        }
        ,
        t.prototype._encodedAuth = function() {
            var t, e = {
                sentry_key: this._dsnObject.publicKey,
                sentry_version: "7"
            };
            return t = e,
            Object.keys(t).map((function(e) {
                return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
            }
            )).join("&")
        }
        ,
        t
    }()
      , zt = [];
    function Jt(t) {
        var e = {};
        return function(t) {
            var e = t.defaultIntegrations && d(t.defaultIntegrations) || []
              , n = t.integrations
              , r = [];
            if (Array.isArray(n)) {
                var i = n.map((function(t) {
                    return t.name
                }
                ))
                  , o = [];
                e.forEach((function(t) {
                    -1 === i.indexOf(t.name) && -1 === o.indexOf(t.name) && (r.push(t),
                    o.push(t.name))
                }
                )),
                n.forEach((function(t) {
                    -1 === o.indexOf(t.name) && (r.push(t),
                    o.push(t.name))
                }
                ))
            } else
                "function" == typeof n ? (r = n(e),
                r = Array.isArray(r) ? r : [r]) : r = d(e);
            var a = r.map((function(t) {
                return t.name
            }
            ))
              , s = "Debug";
            return -1 !== a.indexOf(s) && r.push.apply(r, d(r.splice(a.indexOf(s), 1))),
            r
        }(t).forEach((function(t) {
            e[t.name] = t,
            function(t) {
                -1 === zt.indexOf(t.name) && (t.setupOnce(Dt, Ut),
                zt.push(t.name),
                z.log("Integration installed: " + t.name))
            }(t)
        }
        )),
        e
    }
    var Gt = function() {
        function t(t, e) {
            this._integrations = {},
            this._processing = 0,
            this._backend = new t(e),
            this._options = e,
            e.dsn && (this._dsn = new R(e.dsn))
        }
        return t.prototype.captureException = function(t, e, n) {
            var r = this
              , i = e && e.event_id;
            return this._process(this._getBackend().eventFromException(t, e).then((function(t) {
                return r._captureEvent(t, e, n)
            }
            )).then((function(t) {
                i = t
            }
            ))),
            i
        }
        ,
        t.prototype.captureMessage = function(t, e, n, r) {
            var i = this
              , o = n && n.event_id
              , a = m(t) ? this._getBackend().eventFromMessage(String(t), e, n) : this._getBackend().eventFromException(t, n);
            return this._process(a.then((function(t) {
                return i._captureEvent(t, n, r)
            }
            )).then((function(t) {
                o = t
            }
            ))),
            o
        }
        ,
        t.prototype.captureEvent = function(t, e, n) {
            var r = e && e.event_id;
            return this._process(this._captureEvent(t, e, n).then((function(t) {
                r = t
            }
            ))),
            r
        }
        ,
        t.prototype.captureSession = function(t) {
            "string" != typeof t.release ? z.warn("Discarded session because of missing or non-string release") : (this._sendSession(t),
            t.update({
                init: !1
            }))
        }
        ,
        t.prototype.getDsn = function() {
            return this._dsn
        }
        ,
        t.prototype.getOptions = function() {
            return this._options
        }
        ,
        t.prototype.flush = function(t) {
            var e = this;
            return this._isClientProcessing(t).then((function(n) {
                return e._getBackend().getTransport().close(t).then((function(t) {
                    return n && t
                }
                ))
            }
            ))
        }
        ,
        t.prototype.close = function(t) {
            var e = this;
            return this.flush(t).then((function(t) {
                return e.getOptions().enabled = !1,
                t
            }
            ))
        }
        ,
        t.prototype.setupIntegrations = function() {
            this._isEnabled() && (this._integrations = Jt(this._options))
        }
        ,
        t.prototype.getIntegration = function(t) {
            try {
                return this._integrations[t.id] || null
            } catch (e) {
                return z.warn("Cannot retrieve integration " + t.id + " from the current Client"),
                null
            }
        }
        ,
        t.prototype._updateSessionFromEvent = function(t, e) {
            var n, r, o, a = !1, s = !1, u = e.exception && e.exception.values;
            if (u) {
                s = !0;
                try {
                    for (var l = p(u), d = l.next(); !d.done; d = l.next()) {
                        var h = d.value.mechanism;
                        if (h && !1 === h.handled) {
                            a = !0;
                            break
                        }
                    }
                } catch (t) {
                    n = {
                        error: t
                    }
                } finally {
                    try {
                        d && !d.done && (r = l.return) && r.call(l)
                    } finally {
                        if (n)
                            throw n.error
                    }
                }
            }
            var f = e.user;
            if (!t.userAgent) {
                var v = e.request ? e.request.headers : {};
                for (var _ in v)
                    if ("user-agent" === _.toLowerCase()) {
                        o = v[_];
                        break
                    }
            }
            t.update(c(c({}, a && {
                status: i.Crashed
            }), {
                user: f,
                userAgent: o,
                errors: t.errors + Number(s || a)
            })),
            this.captureSession(t)
        }
        ,
        t.prototype._sendSession = function(t) {
            this._getBackend().sendSession(t)
        }
        ,
        t.prototype._isClientProcessing = function(t) {
            var e = this;
            return new Et((function(n) {
                var r = 0
                  , i = setInterval((function() {
                    0 == e._processing ? (clearInterval(i),
                    n(!0)) : (r += 1,
                    t && r >= t && (clearInterval(i),
                    n(!1)))
                }
                ), 1)
            }
            ))
        }
        ,
        t.prototype._getBackend = function() {
            return this._backend
        }
        ,
        t.prototype._isEnabled = function() {
            return !1 !== this.getOptions().enabled && void 0 !== this._dsn
        }
        ,
        t.prototype._prepareEvent = function(t, e, n) {
            var r = this
              , i = this.getOptions().normalizeDepth
              , o = void 0 === i ? 3 : i
              , a = c(c({}, t), {
                event_id: t.event_id || (n && n.event_id ? n.event_id : F()),
                timestamp: t.timestamp || Ot()
            });
            this._applyClientOptions(a),
            this._applyIntegrationsMetadata(a);
            var s = e;
            n && n.captureContext && (s = Ct.clone(s).update(n.captureContext));
            var u = Et.resolve(a);
            return s && (u = s.applyToEvent(a, n)),
            u.then((function(t) {
                return "number" == typeof o && o > 0 ? r._normalizeEvent(t, o) : t
            }
            ))
        }
        ,
        t.prototype._normalizeEvent = function(t, e) {
            if (!t)
                return null;
            var n = c(c(c(c(c({}, t), t.breadcrumbs && {
                breadcrumbs: t.breadcrumbs.map((function(t) {
                    return c(c({}, t), t.data && {
                        data: et(t.data, e)
                    })
                }
                ))
            }), t.user && {
                user: et(t.user, e)
            }), t.contexts && {
                contexts: et(t.contexts, e)
            }), t.extra && {
                extra: et(t.extra, e)
            });
            return t.contexts && t.contexts.trace && (n.contexts.trace = t.contexts.trace),
            n
        }
        ,
        t.prototype._applyClientOptions = function(t) {
            var e = this.getOptions()
              , n = e.environment
              , r = e.release
              , i = e.dist
              , o = e.maxValueLength
              , a = void 0 === o ? 250 : o;
            "environment"in t || (t.environment = "environment"in e ? n : "production"),
            void 0 === t.release && void 0 !== r && (t.release = r),
            void 0 === t.dist && void 0 !== i && (t.dist = i),
            t.message && (t.message = j(t.message, a));
            var s = t.exception && t.exception.values && t.exception.values[0];
            s && s.value && (s.value = j(s.value, a));
            var c = t.request;
            c && c.url && (c.url = j(c.url, a))
        }
        ,
        t.prototype._applyIntegrationsMetadata = function(t) {
            var e = Object.keys(this._integrations);
            e.length > 0 && (t.sdk = t.sdk || {},
            t.sdk.integrations = d(t.sdk.integrations || [], e))
        }
        ,
        t.prototype._sendEvent = function(t) {
            this._getBackend().sendEvent(t)
        }
        ,
        t.prototype._captureEvent = function(t, e, n) {
            return this._processEvent(t, e, n).then((function(t) {
                return t.event_id
            }
            ), (function(t) {
                z.error(t)
            }
            ))
        }
        ,
        t.prototype._processEvent = function(t, e, n) {
            var r = this
              , i = this.getOptions()
              , o = i.beforeSend
              , a = i.sampleRate;
            if (!this._isEnabled())
                return Et.reject(new k("SDK not enabled, will not send event."));
            var s = "transaction" === t.type;
            return !s && "number" == typeof a && Math.random() > a ? Et.reject(new k("Discarding event because it's not included in the random sample (sampling rate = " + a + ")")) : this._prepareEvent(t, n, e).then((function(t) {
                if (null === t)
                    throw new k("An event processor returned null, will not send event.");
                if (e && e.data && !0 === e.data.__sentry__ || s || !o)
                    return t;
                var n = o(t, e);
                if (void 0 === n)
                    throw new k("`beforeSend` method has to return `null` or a valid event.");
                return S(n) ? n.then((function(t) {
                    return t
                }
                ), (function(t) {
                    throw new k("beforeSend rejected with " + t)
                }
                )) : n
            }
            )).then((function(t) {
                if (null === t)
                    throw new k("`beforeSend` returned `null`, will not send event.");
                var e = n && n.getSession && n.getSession();
                return !s && e && r._updateSessionFromEvent(e, t),
                r._sendEvent(t),
                t
            }
            )).then(null, (function(t) {
                if (t instanceof k)
                    throw t;
                throw r.captureException(t, {
                    data: {
                        __sentry__: !0
                    },
                    originalException: t
                }),
                new k("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + t)
            }
            ))
        }
        ,
        t.prototype._process = function(t) {
            var e = this;
            this._processing += 1,
            t.then((function(t) {
                return e._processing -= 1,
                t
            }
            ), (function(t) {
                return e._processing -= 1,
                t
            }
            ))
        }
        ,
        t
    }()
      , Xt = function() {
        function e() {}
        return e.prototype.sendEvent = function(e) {
            return Et.resolve({
                reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                status: t.Status.Skipped
            })
        }
        ,
        e.prototype.close = function(t) {
            return Et.resolve(!0)
        }
        ,
        e
    }()
      , Kt = function() {
        function t(t) {
            this._options = t,
            this._options.dsn || z.warn("No DSN provided, backend will not do anything."),
            this._transport = this._setupTransport()
        }
        return t.prototype.eventFromException = function(t, e) {
            throw new k("Backend has to implement `eventFromException` method")
        }
        ,
        t.prototype.eventFromMessage = function(t, e, n) {
            throw new k("Backend has to implement `eventFromMessage` method")
        }
        ,
        t.prototype.sendEvent = function(t) {
            this._transport.sendEvent(t).then(null, (function(t) {
                z.error("Error while sending event: " + t)
            }
            ))
        }
        ,
        t.prototype.sendSession = function(t) {
            this._transport.sendSession ? this._transport.sendSession(t).then(null, (function(t) {
                z.error("Error while sending session: " + t)
            }
            )) : z.warn("Dropping session because custom transport doesn't implement sendSession")
        }
        ,
        t.prototype.getTransport = function() {
            return this._transport
        }
        ,
        t.prototype._setupTransport = function() {
            return new Xt
        }
        ,
        t
    }();
    function Vt(t) {
        if (t.metadata && t.metadata.sdk) {
            var e = t.metadata.sdk;
            return {
                name: e.name,
                version: e.version
            }
        }
    }
    function $t(t, e) {
        return e ? (t.sdk = t.sdk || {},
        t.sdk.name = t.sdk.name || e.name,
        t.sdk.version = t.sdk.version || e.version,
        t.sdk.integrations = d(t.sdk.integrations || [], e.integrations || []),
        t.sdk.packages = d(t.sdk.packages || [], e.packages || []),
        t) : t
    }
    function Qt(t, e) {
        var n = Vt(e);
        return {
            body: JSON.stringify(c({
                sent_at: (new Date).toISOString()
            }, n && {
                sdk: n
            })) + "\n" + JSON.stringify({
                type: "session"
            }) + "\n" + JSON.stringify(t),
            type: "session",
            url: e.getEnvelopeEndpointWithUrlEncodedAuth()
        }
    }
    function Zt(t, e) {
        var n = Vt(e)
          , r = t.type || "event"
          , i = "transaction" === r
          , o = t.debug_meta || {}
          , a = o.transactionSampling
          , s = u(o, ["transactionSampling"])
          , p = a || {}
          , l = p.method
          , d = p.rate;
        0 === Object.keys(s).length ? delete t.debug_meta : t.debug_meta = s;
        var h = {
            body: JSON.stringify(n ? $t(t, e.metadata.sdk) : t),
            type: r,
            url: i ? e.getEnvelopeEndpointWithUrlEncodedAuth() : e.getStoreEndpointWithUrlEncodedAuth()
        };
        if (i) {
            var f = JSON.stringify(c({
                event_id: t.event_id,
                sent_at: (new Date).toISOString()
            }, n && {
                sdk: n
            })) + "\n" + JSON.stringify({
                type: t.type,
                sample_rates: [{
                    id: l,
                    rate: d
                }]
            }) + "\n" + h.body;
            h.body = f
        }
        return h
    }
    var te, ee = "6.3.5", ne = function() {
        function t() {
            this.name = t.id
        }
        return t.prototype.setupOnce = function() {
            te = Function.prototype.toString,
            Function.prototype.toString = function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                var n = this.__sentry_original__ || this;
                return te.apply(n, t)
            }
        }
        ,
        t.id = "FunctionToString",
        t
    }(), re = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/], ie = function() {
        function t(e) {
            void 0 === e && (e = {}),
            this._options = e,
            this.name = t.id
        }
        return t.prototype.setupOnce = function() {
            Dt((function(e) {
                var n = Ut();
                if (!n)
                    return e;
                var r = n.getIntegration(t);
                if (r) {
                    var i = n.getClient()
                      , o = i ? i.getOptions() : {}
                      , a = "function" == typeof r._mergeOptions ? r._mergeOptions(o) : {};
                    return "function" != typeof r._shouldDropEvent ? e : r._shouldDropEvent(e, a) ? null : e
                }
                return e
            }
            ))
        }
        ,
        t.prototype._shouldDropEvent = function(t, e) {
            return this._isSentryError(t, e) ? (z.warn("Event dropped due to being internal Sentry Error.\nEvent: " + P(t)),
            !0) : this._isIgnoredError(t, e) ? (z.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + P(t)),
            !0) : this._isDeniedUrl(t, e) ? (z.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + P(t) + ".\nUrl: " + this._getEventFilterUrl(t)),
            !0) : !this._isAllowedUrl(t, e) && (z.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + P(t) + ".\nUrl: " + this._getEventFilterUrl(t)),
            !0)
        }
        ,
        t.prototype._isSentryError = function(t, e) {
            if (!e.ignoreInternal)
                return !1;
            try {
                return t && t.exception && t.exception.values && t.exception.values[0] && "SentryError" === t.exception.values[0].type || !1
            } catch (t) {
                return !1
            }
        }
        ,
        t.prototype._isIgnoredError = function(t, e) {
            return !(!e.ignoreErrors || !e.ignoreErrors.length) && this._getPossibleEventMessages(t).some((function(t) {
                return e.ignoreErrors.some((function(e) {
                    return N(t, e)
                }
                ))
            }
            ))
        }
        ,
        t.prototype._isDeniedUrl = function(t, e) {
            if (!e.denyUrls || !e.denyUrls.length)
                return !1;
            var n = this._getEventFilterUrl(t);
            return !!n && e.denyUrls.some((function(t) {
                return N(n, t)
            }
            ))
        }
        ,
        t.prototype._isAllowedUrl = function(t, e) {
            if (!e.allowUrls || !e.allowUrls.length)
                return !0;
            var n = this._getEventFilterUrl(t);
            return !n || e.allowUrls.some((function(t) {
                return N(n, t)
            }
            ))
        }
        ,
        t.prototype._mergeOptions = function(t) {
            return void 0 === t && (t = {}),
            {
                allowUrls: d(this._options.whitelistUrls || [], this._options.allowUrls || [], t.whitelistUrls || [], t.allowUrls || []),
                denyUrls: d(this._options.blacklistUrls || [], this._options.denyUrls || [], t.blacklistUrls || [], t.denyUrls || []),
                ignoreErrors: d(this._options.ignoreErrors || [], t.ignoreErrors || [], re),
                ignoreInternal: void 0 === this._options.ignoreInternal || this._options.ignoreInternal
            }
        }
        ,
        t.prototype._getPossibleEventMessages = function(t) {
            if (t.message)
                return [t.message];
            if (t.exception)
                try {
                    var e = t.exception.values && t.exception.values[0] || {}
                      , n = e.type
                      , r = void 0 === n ? "" : n
                      , i = e.value
                      , o = void 0 === i ? "" : i;
                    return ["" + o, r + ": " + o]
                } catch (e) {
                    return z.error("Cannot extract message for event " + P(t)),
                    []
                }
            return []
        }
        ,
        t.prototype._getEventFilterUrl = function(t) {
            try {
                if (t.stacktrace) {
                    var e = t.stacktrace.frames;
                    return e && e[e.length - 1].filename || null
                }
                if (t.exception) {
                    var n = t.exception.values && t.exception.values[0].stacktrace && t.exception.values[0].stacktrace.frames;
                    return n && n[n.length - 1].filename || null
                }
                return null
            } catch (e) {
                return z.error("Cannot extract url for event " + P(t)),
                null
            }
        }
        ,
        t.id = "InboundFilters",
        t
    }(), oe = Object.freeze({
        __proto__: null,
        FunctionToString: ne,
        InboundFilters: ie
    }), ae = "?", se = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, ce = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, ue = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, pe = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, le = /\((\S*)(?::(\d+))(?::(\d+))\)/, de = /Minified React error #\d+;/i;
    function he(t) {
        var e = null
          , n = 0;
        t && ("number" == typeof t.framesToPop ? n = t.framesToPop : de.test(t.message) && (n = 1));
        try {
            if (e = function(t) {
                if (!t || !t.stacktrace)
                    return null;
                for (var e, n = t.stacktrace, r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, i = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i, o = n.split("\n"), a = [], s = 0; s < o.length; s += 2) {
                    var c = null;
                    (e = r.exec(o[s])) ? c = {
                        url: e[2],
                        func: e[3],
                        args: [],
                        line: +e[1],
                        column: null
                    } : (e = i.exec(o[s])) && (c = {
                        url: e[6],
                        func: e[3] || e[4],
                        args: e[5] ? e[5].split(",") : [],
                        line: +e[1],
                        column: +e[2]
                    }),
                    c && (!c.func && c.line && (c.func = ae),
                    a.push(c))
                }
                if (!a.length)
                    return null;
                return {
                    message: ve(t),
                    name: t.name,
                    stack: a
                }
            }(t),
            e)
                return fe(e, n)
        } catch (t) {}
        try {
            if (e = function(t) {
                if (!t || !t.stack)
                    return null;
                for (var e, n, r, i = [], o = t.stack.split("\n"), a = 0; a < o.length; ++a) {
                    if (n = se.exec(o[a])) {
                        var s = n[2] && 0 === n[2].indexOf("native");
                        n[2] && 0 === n[2].indexOf("eval") && (e = le.exec(n[2])) && (n[2] = e[1],
                        n[3] = e[2],
                        n[4] = e[3]);
                        var c = n[2] && 0 === n[2].indexOf("address at ") ? n[2].substr("address at ".length) : n[2]
                          , u = n[1] || ae
                          , p = -1 !== u.indexOf("safari-extension")
                          , l = -1 !== u.indexOf("safari-web-extension");
                        (p || l) && (u = -1 !== u.indexOf("@") ? u.split("@")[0] : ae,
                        c = p ? "safari-extension:" + c : "safari-web-extension:" + c),
                        r = {
                            url: c,
                            func: u,
                            args: s ? [n[2]] : [],
                            line: n[3] ? +n[3] : null,
                            column: n[4] ? +n[4] : null
                        }
                    } else if (n = ue.exec(o[a]))
                        r = {
                            url: n[2],
                            func: n[1] || ae,
                            args: [],
                            line: +n[3],
                            column: n[4] ? +n[4] : null
                        };
                    else {
                        if (!(n = ce.exec(o[a])))
                            continue;
                        n[3] && n[3].indexOf(" > eval") > -1 && (e = pe.exec(n[3])) ? (n[1] = n[1] || "eval",
                        n[3] = e[1],
                        n[4] = e[2],
                        n[5] = "") : 0 !== a || n[5] || void 0 === t.columnNumber || (i[0].column = t.columnNumber + 1),
                        r = {
                            url: n[3],
                            func: n[1] || ae,
                            args: n[2] ? n[2].split(",") : [],
                            line: n[4] ? +n[4] : null,
                            column: n[5] ? +n[5] : null
                        }
                    }
                    !r.func && r.line && (r.func = ae),
                    i.push(r)
                }
                if (!i.length)
                    return null;
                return {
                    message: ve(t),
                    name: t.name,
                    stack: i
                }
            }(t),
            e)
                return fe(e, n)
        } catch (t) {}
        return {
            message: ve(t),
            name: t && t.name,
            stack: [],
            failed: !0
        }
    }
    function fe(t, e) {
        try {
            return c(c({}, t), {
                stack: t.stack.slice(e)
            })
        } catch (e) {
            return t
        }
    }
    function ve(t) {
        var e = t && t.message;
        return e ? e.error && "string" == typeof e.error.message ? e.error.message : e : "No error message"
    }
    function _e(t) {
        var e = ye(t.stack)
          , n = {
            type: t.name,
            value: t.message
        };
        return e && e.length && (n.stacktrace = {
            frames: e
        }),
        void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught"),
        n
    }
    function me(t) {
        return {
            exception: {
                values: [_e(t)]
            }
        }
    }
    function ye(t) {
        if (!t || !t.length)
            return [];
        var e = t
          , n = e[0].func || ""
          , r = e[e.length - 1].func || "";
        return -1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException") || (e = e.slice(1)),
        -1 !== r.indexOf("sentryWrapped") && (e = e.slice(0, -1)),
        e.slice(0, 50).map((function(t) {
            return {
                colno: null === t.column ? void 0 : t.column,
                filename: t.url || e[0].url,
                function: t.func || "?",
                in_app: !0,
                lineno: null === t.line ? void 0 : t.line
            }
        }
        )).reverse()
    }
    function ge(t, e, n) {
        var r, i;
        if (void 0 === n && (n = {}),
        f(t) && t.error)
            return r = me(he(t = t.error));
        if (v(t) || (i = t,
        "[object DOMException]" === Object.prototype.toString.call(i))) {
            var o = t
              , a = o.name || (v(o) ? "DOMError" : "DOMException")
              , s = o.message ? a + ": " + o.message : a;
            return H(r = be(s, e, n), s),
            "code"in o && (r.tags = c(c({}, r.tags), {
                "DOMException.code": "" + o.code
            })),
            r
        }
        return h(t) ? r = me(he(t)) : y(t) || g(t) ? (r = function(t, e, n) {
            var r = {
                exception: {
                    values: [{
                        type: g(t) ? t.constructor.name : n ? "UnhandledRejection" : "Error",
                        value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + nt(t)
                    }]
                },
                extra: {
                    __serialized__: Q(t)
                }
            };
            if (e) {
                var i = ye(he(e).stack);
                r.stacktrace = {
                    frames: i
                }
            }
            return r
        }(t, e, n.rejection),
        B(r, {
            synthetic: !0
        }),
        r) : (H(r = be(t, e, n), "" + t, void 0),
        B(r, {
            synthetic: !0
        }),
        r)
    }
    function be(t, e, n) {
        void 0 === n && (n = {});
        var r = {
            message: t
        };
        if (n.attachStacktrace && e) {
            var i = ye(he(e).stack);
            r.stacktrace = {
                frames: i
            }
        }
        return r
    }
    var Se = {
        event: "error",
        transaction: "transaction",
        session: "session"
    }
      , Ee = function() {
        function e(t) {
            this.options = t,
            this._buffer = new xt(30),
            this._rateLimits = {},
            this._api = new Yt(t.dsn,t._metadata),
            this.url = this._api.getStoreEndpointWithUrlEncodedAuth()
        }
        return e.prototype.sendEvent = function(t) {
            throw new k("Transport Class has to implement `sendEvent` method")
        }
        ,
        e.prototype.close = function(t) {
            return this._buffer.drain(t)
        }
        ,
        e.prototype._handleResponse = function(e) {
            var n = e.requestType
              , r = e.response
              , i = e.headers
              , o = e.resolve
              , a = e.reject
              , s = t.Status.fromHttpCode(r.status);
            this._handleRateLimit(i) && z.warn("Too many requests, backing off until: " + this._disabledUntil(n)),
            s !== t.Status.Success ? a(r) : o({
                status: s
            })
        }
        ,
        e.prototype._disabledUntil = function(t) {
            var e = Se[t];
            return this._rateLimits[e] || this._rateLimits.all
        }
        ,
        e.prototype._isRateLimited = function(t) {
            return this._disabledUntil(t) > new Date(Date.now())
        }
        ,
        e.prototype._handleRateLimit = function(t) {
            var e, n, r, i, o = Date.now(), a = t["x-sentry-rate-limits"], s = t["retry-after"];
            if (a) {
                try {
                    for (var c = p(a.trim().split(",")), u = c.next(); !u.done; u = c.next()) {
                        var l = u.value.split(":", 2)
                          , d = parseInt(l[0], 10)
                          , h = 1e3 * (isNaN(d) ? 60 : d);
                        try {
                            for (var f = (r = void 0,
                            p(l[1].split(";"))), v = f.next(); !v.done; v = f.next()) {
                                var _ = v.value;
                                this._rateLimits[_ || "all"] = new Date(o + h)
                            }
                        } catch (t) {
                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                v && !v.done && (i = f.return) && i.call(f)
                            } finally {
                                if (r)
                                    throw r.error
                            }
                        }
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        u && !u.done && (n = c.return) && n.call(c)
                    } finally {
                        if (e)
                            throw e.error
                    }
                }
                return !0
            }
            return !!s && (this._rateLimits.all = new Date(o + function(t, e) {
                if (!e)
                    return 6e4;
                var n = parseInt("" + e, 10);
                if (!isNaN(n))
                    return 1e3 * n;
                var r = Date.parse("" + e);
                return isNaN(r) ? 6e4 : r - t
            }(o, s)),
            !0)
        }
        ,
        e
    }();
    var xe = function(t) {
        function e(e, n) {
            void 0 === n && (n = function() {
                var t, e, n = A();
                if (ot(n.fetch))
                    return n.fetch.bind(n);
                var r = n.document
                  , i = n.fetch;
                if ("function" == typeof (null === (t = r) || void 0 === t ? void 0 : t.createElement))
                    try {
                        var o = r.createElement("iframe");
                        o.hidden = !0,
                        r.head.appendChild(o),
                        (null === (e = o.contentWindow) || void 0 === e ? void 0 : e.fetch) && (i = o.contentWindow.fetch),
                        r.head.removeChild(o)
                    } catch (t) {
                        z.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
                    }
                return i.bind(n)
            }());
            var r = t.call(this, e) || this;
            return r._fetch = n,
            r
        }
        return n(e, t),
        e.prototype.sendEvent = function(t) {
            return this._sendRequest(Zt(t, this._api), t)
        }
        ,
        e.prototype.sendSession = function(t) {
            return this._sendRequest(Qt(t, this._api), t)
        }
        ,
        e.prototype._sendRequest = function(t, e) {
            var n = this;
            if (this._isRateLimited(t.type))
                return Promise.reject({
                    event: e,
                    type: t.type,
                    reason: "Transport locked till " + this._disabledUntil(t.type) + " due to too many requests.",
                    status: 429
                });
            var r = {
                body: t.body,
                method: "POST",
                referrerPolicy: at() ? "origin" : ""
            };
            return void 0 !== this.options.fetchParameters && Object.assign(r, this.options.fetchParameters),
            void 0 !== this.options.headers && (r.headers = this.options.headers),
            this._buffer.add(new Et((function(e, i) {
                n._fetch(t.url, r).then((function(r) {
                    var o = {
                        "x-sentry-rate-limits": r.headers.get("X-Sentry-Rate-Limits"),
                        "retry-after": r.headers.get("Retry-After")
                    };
                    n._handleResponse({
                        requestType: t.type,
                        response: r,
                        headers: o,
                        resolve: e,
                        reject: i
                    })
                }
                )).catch(i)
            }
            )))
        }
        ,
        e
    }(Ee)
      , Te = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t),
        e.prototype.sendEvent = function(t) {
            return this._sendRequest(Zt(t, this._api), t)
        }
        ,
        e.prototype.sendSession = function(t) {
            return this._sendRequest(Qt(t, this._api), t)
        }
        ,
        e.prototype._sendRequest = function(t, e) {
            var n = this;
            return this._isRateLimited(t.type) ? Promise.reject({
                event: e,
                type: t.type,
                reason: "Transport locked till " + this._disabledUntil(t.type) + " due to too many requests.",
                status: 429
            }) : this._buffer.add(new Et((function(e, r) {
                var i = new XMLHttpRequest;
                for (var o in i.onreadystatechange = function() {
                    if (4 === i.readyState) {
                        var o = {
                            "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
                            "retry-after": i.getResponseHeader("Retry-After")
                        };
                        n._handleResponse({
                            requestType: t.type,
                            response: i,
                            headers: o,
                            resolve: e,
                            reject: r
                        })
                    }
                }
                ,
                i.open("POST", t.url),
                n.options.headers)
                    n.options.headers.hasOwnProperty(o) && i.setRequestHeader(o, n.options.headers[o]);
                i.send(t.body)
            }
            )))
        }
        ,
        e
    }(Ee)
      , we = Object.freeze({
        __proto__: null,
        BaseTransport: Ee,
        FetchTransport: xe,
        XHRTransport: Te
    })
      , ke = function(e) {
        function r() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n(r, e),
        r.prototype.eventFromException = function(e, n) {
            return function(e, n, r) {
                var i = ge(n, r && r.syntheticException || void 0, {
                    attachStacktrace: e.attachStacktrace
                });
                return B(i, {
                    handled: !0,
                    type: "generic"
                }),
                i.level = t.Severity.Error,
                r && r.event_id && (i.event_id = r.event_id),
                Et.resolve(i)
            }(this._options, e, n)
        }
        ,
        r.prototype.eventFromMessage = function(e, n, r) {
            return void 0 === n && (n = t.Severity.Info),
            function(e, n, r, i) {
                void 0 === r && (r = t.Severity.Info);
                var o = be(n, i && i.syntheticException || void 0, {
                    attachStacktrace: e.attachStacktrace
                });
                return o.level = r,
                i && i.event_id && (o.event_id = i.event_id),
                Et.resolve(o)
            }(this._options, e, n, r)
        }
        ,
        r.prototype._setupTransport = function() {
            if (!this._options.dsn)
                return e.prototype._setupTransport.call(this);
            var t = c(c({}, this._options.transportOptions), {
                dsn: this._options.dsn,
                _metadata: this._options._metadata
            });
            return this._options.transport ? new this._options.transport(t) : it() ? new xe(t) : new Te(t)
        }
        ,
        r
    }(Kt)
      , Oe = 0;
    function Ie() {
        return Oe > 0
    }
    function Re() {
        Oe += 1,
        setTimeout((function() {
            Oe -= 1
        }
        ))
    }
    function Ce(t, e, n) {
        if (void 0 === e && (e = {}),
        "function" != typeof t)
            return t;
        try {
            if (t.__sentry__)
                return t;
            if (t.__sentry_wrapped__)
                return t.__sentry_wrapped__
        } catch (e) {
            return t
        }
        var r = function() {
            var r = Array.prototype.slice.call(arguments);
            try {
                n && "function" == typeof n && n.apply(this, arguments);
                var i = r.map((function(t) {
                    return Ce(t, e)
                }
                ));
                return t.handleEvent ? t.handleEvent.apply(this, i) : t.apply(this, i)
            } catch (t) {
                throw Re(),
                Wt((function(n) {
                    n.addEventProcessor((function(t) {
                        var n = c({}, t);
                        return e.mechanism && (H(n, void 0, void 0),
                        B(n, e.mechanism)),
                        n.extra = c(c({}, n.extra), {
                            arguments: r
                        }),
                        n
                    }
                    )),
                    qt(t)
                }
                )),
                t
            }
        };
        try {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i])
        } catch (t) {}
        t.prototype = t.prototype || {},
        r.prototype = t.prototype,
        Object.defineProperty(t, "__sentry_wrapped__", {
            enumerable: !1,
            value: r
        }),
        Object.defineProperties(r, {
            __sentry__: {
                enumerable: !1,
                value: !0
            },
            __sentry_original__: {
                enumerable: !1,
                value: t
            }
        });
        try {
            Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
                get: function() {
                    return t.name
                }
            })
        } catch (t) {}
        return r
    }
    function je(t) {
        if (void 0 === t && (t = {}),
        t.eventId)
            if (t.dsn) {
                var e = document.createElement("script");
                e.async = !0,
                e.src = new Yt(t.dsn).getReportDialogEndpoint(t),
                t.onLoad && (e.onload = t.onLoad),
                (document.head || document.body).appendChild(e)
            } else
                z.error("Missing dsn option in showReportDialog call");
        else
            z.error("Missing eventId option in showReportDialog call")
    }
    var De = function() {
        function e(t) {
            this.name = e.id,
            this._onErrorHandlerInstalled = !1,
            this._onUnhandledRejectionHandlerInstalled = !1,
            this._options = c({
                onerror: !0,
                onunhandledrejection: !0
            }, t)
        }
        return e.prototype.setupOnce = function() {
            Error.stackTraceLimit = 50,
            this._options.onerror && (z.log("Global Handler attached: onerror"),
            this._installGlobalOnErrorHandler()),
            this._options.onunhandledrejection && (z.log("Global Handler attached: onunhandledrejection"),
            this._installGlobalOnUnhandledRejectionHandler())
        }
        ,
        e.prototype._installGlobalOnErrorHandler = function() {
            var t = this;
            this._onErrorHandlerInstalled || (dt({
                callback: function(n) {
                    var r = n.error
                      , i = Ut()
                      , o = i.getIntegration(e)
                      , a = r && !0 === r.__sentry_own_request__;
                    if (o && !Ie() && !a) {
                        var s = i.getClient()
                          , c = m(r) ? t._eventFromIncompleteOnError(n.msg, n.url, n.line, n.column) : t._enhanceEventWithInitialFrame(ge(r, void 0, {
                            attachStacktrace: s && s.getOptions().attachStacktrace,
                            rejection: !1
                        }), n.url, n.line, n.column);
                        B(c, {
                            handled: !1,
                            type: "onerror"
                        }),
                        i.captureEvent(c, {
                            originalException: r
                        })
                    }
                },
                type: "error"
            }),
            this._onErrorHandlerInstalled = !0)
        }
        ,
        e.prototype._installGlobalOnUnhandledRejectionHandler = function() {
            var n = this;
            this._onUnhandledRejectionHandlerInstalled || (dt({
                callback: function(r) {
                    var i = r;
                    try {
                        "reason"in r ? i = r.reason : "detail"in r && "reason"in r.detail && (i = r.detail.reason)
                    } catch (t) {}
                    var o = Ut()
                      , a = o.getIntegration(e)
                      , s = i && !0 === i.__sentry_own_request__;
                    if (!a || Ie() || s)
                        return !0;
                    var c = o.getClient()
                      , u = m(i) ? n._eventFromRejectionWithPrimitive(i) : ge(i, void 0, {
                        attachStacktrace: c && c.getOptions().attachStacktrace,
                        rejection: !0
                    });
                    u.level = t.Severity.Error,
                    B(u, {
                        handled: !1,
                        type: "onunhandledrejection"
                    }),
                    o.captureEvent(u, {
                        originalException: i
                    })
                },
                type: "unhandledrejection"
            }),
            this._onUnhandledRejectionHandlerInstalled = !0)
        }
        ,
        e.prototype._eventFromIncompleteOnError = function(t, e, n, r) {
            var i, o = f(t) ? t.message : t;
            if (_(o)) {
                var a = o.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                a && (i = a[1],
                o = a[2])
            }
            var s = {
                exception: {
                    values: [{
                        type: i || "Error",
                        value: o
                    }]
                }
            };
            return this._enhanceEventWithInitialFrame(s, e, n, r)
        }
        ,
        e.prototype._eventFromRejectionWithPrimitive = function(t) {
            return {
                exception: {
                    values: [{
                        type: "UnhandledRejection",
                        value: "Non-Error promise rejection captured with value: " + String(t)
                    }]
                }
            }
        }
        ,
        e.prototype._enhanceEventWithInitialFrame = function(t, e, n, r) {
            t.exception = t.exception || {},
            t.exception.values = t.exception.values || [],
            t.exception.values[0] = t.exception.values[0] || {},
            t.exception.values[0].stacktrace = t.exception.values[0].stacktrace || {},
            t.exception.values[0].stacktrace.frames = t.exception.values[0].stacktrace.frames || [];
            var i = isNaN(parseInt(r, 10)) ? void 0 : r
              , o = isNaN(parseInt(n, 10)) ? void 0 : n
              , a = _(e) && e.length > 0 ? e : function() {
                try {
                    return document.location.href
                } catch (t) {
                    return ""
                }
            }();
            return 0 === t.exception.values[0].stacktrace.frames.length && t.exception.values[0].stacktrace.frames.push({
                colno: i,
                filename: a,
                function: "?",
                in_app: !0,
                lineno: o
            }),
            t
        }
        ,
        e.id = "GlobalHandlers",
        e
    }()
      , Ne = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"]
      , Le = function() {
        function t(e) {
            this.name = t.id,
            this._options = c({
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0
            }, e)
        }
        return t.prototype.setupOnce = function() {
            var t = A();
            (this._options.setTimeout && K(t, "setTimeout", this._wrapTimeFunction.bind(this)),
            this._options.setInterval && K(t, "setInterval", this._wrapTimeFunction.bind(this)),
            this._options.requestAnimationFrame && K(t, "requestAnimationFrame", this._wrapRAF.bind(this)),
            this._options.XMLHttpRequest && "XMLHttpRequest"in t && K(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this)),
            this._options.eventTarget) && (Array.isArray(this._options.eventTarget) ? this._options.eventTarget : Ne).forEach(this._wrapEventTarget.bind(this))
        }
        ,
        t.prototype._wrapTimeFunction = function(t) {
            return function() {
                for (var e = [], n = 0; n < arguments.length; n++)
                    e[n] = arguments[n];
                var r = e[0];
                return e[0] = Ce(r, {
                    mechanism: {
                        data: {
                            function: X(t)
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }),
                t.apply(this, e)
            }
        }
        ,
        t.prototype._wrapRAF = function(t) {
            return function(e) {
                return t.call(this, Ce(e, {
                    mechanism: {
                        data: {
                            function: "requestAnimationFrame",
                            handler: X(t)
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }))
            }
        }
        ,
        t.prototype._wrapEventTarget = function(t) {
            var e = A()
              , n = e[t] && e[t].prototype;
            n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (K(n, "addEventListener", (function(e) {
                return function(n, r, i) {
                    try {
                        "function" == typeof r.handleEvent && (r.handleEvent = Ce(r.handleEvent.bind(r), {
                            mechanism: {
                                data: {
                                    function: "handleEvent",
                                    handler: X(r),
                                    target: t
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }))
                    } catch (t) {}
                    return e.call(this, n, Ce(r, {
                        mechanism: {
                            data: {
                                function: "addEventListener",
                                handler: X(r),
                                target: t
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }), i)
                }
            }
            )),
            K(n, "removeEventListener", (function(t) {
                return function(e, n, r) {
                    var i, o = n;
                    try {
                        var a = null === (i = o) || void 0 === i ? void 0 : i.__sentry_wrapped__;
                        a && t.call(this, e, a, r)
                    } catch (t) {}
                    return t.call(this, e, o, r)
                }
            }
            )))
        }
        ,
        t.prototype._wrapXHR = function(t) {
            return function() {
                for (var e = [], n = 0; n < arguments.length; n++)
                    e[n] = arguments[n];
                var r = this
                  , i = ["onload", "onerror", "onprogress", "onreadystatechange"];
                return i.forEach((function(t) {
                    t in r && "function" == typeof r[t] && K(r, t, (function(e) {
                        var n = {
                            mechanism: {
                                data: {
                                    function: t,
                                    handler: X(e)
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        };
                        return e.__sentry_original__ && (n.mechanism.data.handler = X(e.__sentry_original__)),
                        Ce(e, n)
                    }
                    ))
                }
                )),
                t.apply(this, e)
            }
        }
        ,
        t.id = "TryCatch",
        t
    }()
      , Ae = function() {
        function e(t) {
            this.name = e.id,
            this._options = c({
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0
            }, t)
        }
        return e.prototype.addSentryBreadcrumb = function(t) {
            this._options.sentry && Ut().addBreadcrumb({
                category: "sentry." + ("transaction" === t.type ? "transaction" : "event"),
                event_id: t.event_id,
                level: t.level,
                message: P(t)
            }, {
                event: t
            })
        }
        ,
        e.prototype.setupOnce = function() {
            var t = this;
            this._options.console && dt({
                callback: function() {
                    for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                    t._consoleBreadcrumb.apply(t, d(e))
                },
                type: "console"
            }),
            this._options.dom && dt({
                callback: function() {
                    for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                    t._domBreadcrumb.apply(t, d(e))
                },
                type: "dom"
            }),
            this._options.xhr && dt({
                callback: function() {
                    for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                    t._xhrBreadcrumb.apply(t, d(e))
                },
                type: "xhr"
            }),
            this._options.fetch && dt({
                callback: function() {
                    for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                    t._fetchBreadcrumb.apply(t, d(e))
                },
                type: "fetch"
            }),
            this._options.history && dt({
                callback: function() {
                    for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                    t._historyBreadcrumb.apply(t, d(e))
                },
                type: "history"
            })
        }
        ,
        e.prototype._consoleBreadcrumb = function(e) {
            var n = {
                category: "console",
                data: {
                    arguments: e.args,
                    logger: "console"
                },
                level: t.Severity.fromString(e.level),
                message: D(e.args, " ")
            };
            if ("assert" === e.level) {
                if (!1 !== e.args[0])
                    return;
                n.message = "Assertion failed: " + (D(e.args.slice(1), " ") || "console.assert"),
                n.data.arguments = e.args.slice(1)
            }
            Ut().addBreadcrumb(n, {
                input: e.args,
                level: e.level
            })
        }
        ,
        e.prototype._domBreadcrumb = function(t) {
            var e;
            try {
                e = t.event.target ? x(t.event.target) : x(t.event)
            } catch (t) {
                e = "<unknown>"
            }
            0 !== e.length && Ut().addBreadcrumb({
                category: "ui." + t.name,
                message: e
            }, {
                event: t.event,
                name: t.name,
                global: t.global
            })
        }
        ,
        e.prototype._xhrBreadcrumb = function(t) {
            if (t.endTimestamp) {
                if (t.xhr.__sentry_own_request__)
                    return;
                var e = t.xhr.__sentry_xhr__ || {}
                  , n = e.method
                  , r = e.url
                  , i = e.status_code
                  , o = e.body;
                Ut().addBreadcrumb({
                    category: "xhr",
                    data: {
                        method: n,
                        url: r,
                        status_code: i
                    },
                    type: "http"
                }, {
                    xhr: t.xhr,
                    input: o
                })
            } else
                ;
        }
        ,
        e.prototype._fetchBreadcrumb = function(e) {
            e.endTimestamp && (e.fetchData.url.match(/sentry_key/) && "POST" === e.fetchData.method || (e.error ? Ut().addBreadcrumb({
                category: "fetch",
                data: e.fetchData,
                level: t.Severity.Error,
                type: "http"
            }, {
                data: e.error,
                input: e.args
            }) : Ut().addBreadcrumb({
                category: "fetch",
                data: c(c({}, e.fetchData), {
                    status_code: e.response.status
                }),
                type: "http"
            }, {
                input: e.args,
                response: e.response
            })))
        }
        ,
        e.prototype._historyBreadcrumb = function(t) {
            var e = A()
              , n = t.from
              , r = t.to
              , i = U(e.location.href)
              , o = U(n)
              , a = U(r);
            o.path || (o = i),
            i.protocol === a.protocol && i.host === a.host && (r = a.relative),
            i.protocol === o.protocol && i.host === o.host && (n = o.relative),
            Ut().addBreadcrumb({
                category: "navigation",
                data: {
                    from: n,
                    to: r
                }
            })
        }
        ,
        e.id = "Breadcrumbs",
        e
    }()
      , Fe = function() {
        function t(e) {
            void 0 === e && (e = {}),
            this.name = t.id,
            this._key = e.key || "cause",
            this._limit = e.limit || 5
        }
        return t.prototype.setupOnce = function() {
            Dt((function(e, n) {
                var r = Ut().getIntegration(t);
                return r ? r._handler(e, n) : e
            }
            ))
        }
        ,
        t.prototype._handler = function(t, e) {
            if (!(t.exception && t.exception.values && e && E(e.originalException, Error)))
                return t;
            var n = this._walkErrorTree(e.originalException, this._key);
            return t.exception.values = d(n, t.exception.values),
            t
        }
        ,
        t.prototype._walkErrorTree = function(t, e, n) {
            if (void 0 === n && (n = []),
            !E(t[e], Error) || n.length + 1 >= this._limit)
                return n;
            var r = _e(he(t[e]));
            return this._walkErrorTree(t[e], e, d([r], n))
        }
        ,
        t.id = "LinkedErrors",
        t
    }()
      , Ue = A()
      , Pe = function() {
        function t() {
            this.name = t.id
        }
        return t.prototype.setupOnce = function() {
            Dt((function(e) {
                var n, r, i;
                if (Ut().getIntegration(t)) {
                    if (!Ue.navigator && !Ue.location && !Ue.document)
                        return e;
                    var o = (null === (n = e.request) || void 0 === n ? void 0 : n.url) || (null === (r = Ue.location) || void 0 === r ? void 0 : r.href)
                      , a = (Ue.document || {}).referrer
                      , s = (Ue.navigator || {}).userAgent
                      , u = c(c(c({}, null === (i = e.request) || void 0 === i ? void 0 : i.headers), a && {
                        Referer: a
                    }), s && {
                        "User-Agent": s
                    })
                      , p = c(c({}, o && {
                        url: o
                    }), {
                        headers: u
                    });
                    return c(c({}, e), {
                        request: p
                    })
                }
                return e
            }
            ))
        }
        ,
        t.id = "UserAgent",
        t
    }()
      , Me = Object.freeze({
        __proto__: null,
        GlobalHandlers: De,
        TryCatch: Le,
        Breadcrumbs: Ae,
        LinkedErrors: Fe,
        UserAgent: Pe
    })
      , He = function(t) {
        function e(e) {
            void 0 === e && (e = {});
            return e._metadata = e._metadata || {},
            e._metadata.sdk = e._metadata.sdk || {
                name: "sentry.javascript.browser",
                packages: [{
                    name: "npm:@sentry/browser",
                    version: ee
                }],
                version: ee
            },
            t.call(this, ke, e) || this
        }
        return n(e, t),
        e.prototype.showReportDialog = function(t) {
            void 0 === t && (t = {}),
            A().document && (this._isEnabled() ? je(c(c({}, t), {
                dsn: t.dsn || this.getDsn()
            })) : z.error("Trying to call showReportDialog with Sentry Client disabled"))
        }
        ,
        e.prototype._prepareEvent = function(e, n, r) {
            return e.platform = e.platform || "javascript",
            t.prototype._prepareEvent.call(this, e, n, r)
        }
        ,
        e.prototype._sendEvent = function(e) {
            var n = this.getIntegration(Ae);
            n && n.addSentryBreadcrumb(e),
            t.prototype._sendEvent.call(this, e)
        }
        ,
        e
    }(Gt)
      , Be = [new ie, new ne, new Le, new Ae, new De, new Fe, new Pe];
    var qe = {}
      , We = A();
    We.Sentry && We.Sentry.Integrations && (qe = We.Sentry.Integrations);
    var Ye, ze = c(c(c({}, qe), oe), Me);
    !function(t) {
        t.Ok = "ok",
        t.DeadlineExceeded = "deadline_exceeded",
        t.Unauthenticated = "unauthenticated",
        t.PermissionDenied = "permission_denied",
        t.NotFound = "not_found",
        t.ResourceExhausted = "resource_exhausted",
        t.InvalidArgument = "invalid_argument",
        t.Unimplemented = "unimplemented",
        t.Unavailable = "unavailable",
        t.InternalError = "internal_error",
        t.UnknownError = "unknown_error",
        t.Cancelled = "cancelled",
        t.AlreadyExists = "already_exists",
        t.FailedPrecondition = "failed_precondition",
        t.Aborted = "aborted",
        t.OutOfRange = "out_of_range",
        t.DataLoss = "data_loss"
    }(Ye || (Ye = {})),
    function(t) {
        t.fromHttpCode = function(e) {
            if (e < 400)
                return t.Ok;
            if (e >= 400 && e < 500)
                switch (e) {
                case 401:
                    return t.Unauthenticated;
                case 403:
                    return t.PermissionDenied;
                case 404:
                    return t.NotFound;
                case 409:
                    return t.AlreadyExists;
                case 413:
                    return t.FailedPrecondition;
                case 429:
                    return t.ResourceExhausted;
                default:
                    return t.InvalidArgument
                }
            if (e >= 500 && e < 600)
                switch (e) {
                case 501:
                    return t.Unimplemented;
                case 503:
                    return t.Unavailable;
                case 504:
                    return t.DeadlineExceeded;
                default:
                    return t.InternalError
                }
            return t.UnknownError
        }
    }(Ye || (Ye = {}));
    var Je = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
    function Ge(t) {
        return "tracesSampleRate"in t || "tracesSampler"in t
    }
    function Xe(t) {
        var e, n;
        return void 0 === t && (t = Ut()),
        null === (n = null === (e = t) || void 0 === e ? void 0 : e.getScope()) || void 0 === n ? void 0 : n.getTransaction()
    }
    function Ke(t) {
        return t / 1e3
    }
    function Ve() {
        var t = Xe();
        t && (z.log("[Tracing] Transaction: " + Ye.InternalError + " -> Global error occured"),
        t.setStatus(Ye.InternalError))
    }
    var $e = function() {
        function t(t) {
            void 0 === t && (t = 1e3),
            this.spans = [],
            this._maxlen = t
        }
        return t.prototype.add = function(t) {
            this.spans.length > this._maxlen ? t.spanRecorder = void 0 : this.spans.push(t)
        }
        ,
        t
    }()
      , Qe = function() {
        function t(t) {
            if (this.traceId = F(),
            this.spanId = F().substring(16),
            this.startTimestamp = It(),
            this.tags = {},
            this.data = {},
            !t)
                return this;
            t.traceId && (this.traceId = t.traceId),
            t.spanId && (this.spanId = t.spanId),
            t.parentSpanId && (this.parentSpanId = t.parentSpanId),
            "sampled"in t && (this.sampled = t.sampled),
            t.op && (this.op = t.op),
            t.description && (this.description = t.description),
            t.data && (this.data = t.data),
            t.tags && (this.tags = t.tags),
            t.status && (this.status = t.status),
            t.startTimestamp && (this.startTimestamp = t.startTimestamp),
            t.endTimestamp && (this.endTimestamp = t.endTimestamp)
        }
        return t.prototype.child = function(t) {
            return this.startChild(t)
        }
        ,
        t.prototype.startChild = function(e) {
            var n = new t(c(c({}, e), {
                parentSpanId: this.spanId,
                sampled: this.sampled,
                traceId: this.traceId
            }));
            return n.spanRecorder = this.spanRecorder,
            n.spanRecorder && n.spanRecorder.add(n),
            n.transaction = this.transaction,
            n
        }
        ,
        t.prototype.setTag = function(t, e) {
            var n;
            return this.tags = c(c({}, this.tags), ((n = {})[t] = e,
            n)),
            this
        }
        ,
        t.prototype.setData = function(t, e) {
            var n;
            return this.data = c(c({}, this.data), ((n = {})[t] = e,
            n)),
            this
        }
        ,
        t.prototype.setStatus = function(t) {
            return this.status = t,
            this
        }
        ,
        t.prototype.setHttpStatus = function(t) {
            this.setTag("http.status_code", String(t));
            var e = Ye.fromHttpCode(t);
            return e !== Ye.UnknownError && this.setStatus(e),
            this
        }
        ,
        t.prototype.isSuccess = function() {
            return this.status === Ye.Ok
        }
        ,
        t.prototype.finish = function(t) {
            this.endTimestamp = "number" == typeof t ? t : It()
        }
        ,
        t.prototype.toTraceparent = function() {
            var t = "";
            return void 0 !== this.sampled && (t = this.sampled ? "-1" : "-0"),
            this.traceId + "-" + this.spanId + t
        }
        ,
        t.prototype.toContext = function() {
            return rt({
                data: this.data,
                description: this.description,
                endTimestamp: this.endTimestamp,
                op: this.op,
                parentSpanId: this.parentSpanId,
                sampled: this.sampled,
                spanId: this.spanId,
                startTimestamp: this.startTimestamp,
                status: this.status,
                tags: this.tags,
                traceId: this.traceId
            })
        }
        ,
        t.prototype.updateWithContext = function(t) {
            var e, n, r, i, o;
            return this.data = null != (e = t.data) ? e : {},
            this.description = t.description,
            this.endTimestamp = t.endTimestamp,
            this.op = t.op,
            this.parentSpanId = t.parentSpanId,
            this.sampled = t.sampled,
            this.spanId = null != (n = t.spanId) ? n : this.spanId,
            this.startTimestamp = null != (r = t.startTimestamp) ? r : this.startTimestamp,
            this.status = t.status,
            this.tags = null != (i = t.tags) ? i : {},
            this.traceId = null != (o = t.traceId) ? o : this.traceId,
            this
        }
        ,
        t.prototype.getTraceContext = function() {
            return rt({
                data: Object.keys(this.data).length > 0 ? this.data : void 0,
                description: this.description,
                op: this.op,
                parent_span_id: this.parentSpanId,
                span_id: this.spanId,
                status: this.status,
                tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                trace_id: this.traceId
            })
        }
        ,
        t.prototype.toJSON = function() {
            return rt({
                data: Object.keys(this.data).length > 0 ? this.data : void 0,
                description: this.description,
                op: this.op,
                parent_span_id: this.parentSpanId,
                span_id: this.spanId,
                start_timestamp: this.startTimestamp,
                status: this.status,
                tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                timestamp: this.endTimestamp,
                trace_id: this.traceId
            })
        }
        ,
        t
    }()
      , Ze = function(t) {
        function e(e, n) {
            var r = t.call(this, e) || this;
            return r._metadata = {},
            r._measurements = {},
            r._hub = Ut(),
            E(n, Lt) && (r._hub = n),
            r.name = e.name || "",
            r._trimEnd = e.trimEnd,
            r.transaction = r,
            r
        }
        return n(e, t),
        e.prototype.setName = function(t) {
            this.name = t
        }
        ,
        e.prototype.initSpanRecorder = function(t) {
            void 0 === t && (t = 1e3),
            this.spanRecorder || (this.spanRecorder = new $e(t)),
            this.spanRecorder.add(this)
        }
        ,
        e.prototype.setMeasurements = function(t) {
            this._measurements = c({}, t)
        }
        ,
        e.prototype.setMetadata = function(t) {
            this._metadata = c(c({}, this._metadata), t)
        }
        ,
        e.prototype.finish = function(e) {
            var n = this;
            if (void 0 === this.endTimestamp) {
                if (this.name || (z.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),
                this.name = "<unlabeled transaction>"),
                t.prototype.finish.call(this, e),
                !0 === this.sampled) {
                    var r = this.spanRecorder ? this.spanRecorder.spans.filter((function(t) {
                        return t !== n && t.endTimestamp
                    }
                    )) : [];
                    this._trimEnd && r.length > 0 && (this.endTimestamp = r.reduce((function(t, e) {
                        return t.endTimestamp && e.endTimestamp ? t.endTimestamp > e.endTimestamp ? t : e : t
                    }
                    )).endTimestamp);
                    var i = {
                        contexts: {
                            trace: this.getTraceContext()
                        },
                        spans: r,
                        start_timestamp: this.startTimestamp,
                        tags: this.tags,
                        timestamp: this.endTimestamp,
                        transaction: this.name,
                        type: "transaction",
                        debug_meta: this._metadata
                    };
                    return Object.keys(this._measurements).length > 0 && (z.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)),
                    i.measurements = this._measurements),
                    z.log("[Tracing] Finishing " + this.op + " transaction: " + this.name + "."),
                    this._hub.captureEvent(i)
                }
                z.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.")
            }
        }
        ,
        e.prototype.toContext = function() {
            var e = t.prototype.toContext.call(this);
            return rt(c(c({}, e), {
                name: this.name,
                trimEnd: this._trimEnd
            }))
        }
        ,
        e.prototype.updateWithContext = function(e) {
            var n;
            return t.prototype.updateWithContext.call(this, e),
            this.name = null != (n = e.name) ? n : "",
            this._trimEnd = e.trimEnd,
            this
        }
        ,
        e
    }(Qe)
      , tn = function(t) {
        function e(e, n, r, i) {
            void 0 === r && (r = "");
            var o = t.call(this, i) || this;
            return o._pushActivity = e,
            o._popActivity = n,
            o.transactionSpanId = r,
            o
        }
        return n(e, t),
        e.prototype.add = function(e) {
            var n = this;
            e.spanId !== this.transactionSpanId && (e.finish = function(t) {
                e.endTimestamp = "number" == typeof t ? t : It(),
                n._popActivity(e.spanId)
            }
            ,
            void 0 === e.endTimestamp && this._pushActivity(e.spanId)),
            t.prototype.add.call(this, e)
        }
        ,
        e
    }($e)
      , en = function(t) {
        function e(e, n, r, i) {
            void 0 === r && (r = 1e3),
            void 0 === i && (i = !1);
            var o = t.call(this, e, n) || this;
            return o._idleHub = n,
            o._idleTimeout = r,
            o._onScope = i,
            o.activities = {},
            o._heartbeatTimer = 0,
            o._heartbeatCounter = 0,
            o._finished = !1,
            o._beforeFinishCallbacks = [],
            n && i && (nn(n),
            z.log("Setting idle transaction on scope. Span ID: " + o.spanId),
            n.configureScope((function(t) {
                return t.setSpan(o)
            }
            ))),
            o._initTimeout = setTimeout((function() {
                o._finished || o.finish()
            }
            ), o._idleTimeout),
            o
        }
        return n(e, t),
        e.prototype.finish = function(e) {
            var n, r, i = this;
            if (void 0 === e && (e = It()),
            this._finished = !0,
            this.activities = {},
            this.spanRecorder) {
                z.log("[Tracing] finishing IdleTransaction", new Date(1e3 * e).toISOString(), this.op);
                try {
                    for (var o = p(this._beforeFinishCallbacks), a = o.next(); !a.done; a = o.next()) {
                        (0,
                        a.value)(this, e)
                    }
                } catch (t) {
                    n = {
                        error: t
                    }
                } finally {
                    try {
                        a && !a.done && (r = o.return) && r.call(o)
                    } finally {
                        if (n)
                            throw n.error
                    }
                }
                this.spanRecorder.spans = this.spanRecorder.spans.filter((function(t) {
                    if (t.spanId === i.spanId)
                        return !0;
                    t.endTimestamp || (t.endTimestamp = e,
                    t.setStatus(Ye.Cancelled),
                    z.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(t, void 0, 2)));
                    var n = t.startTimestamp < e;
                    return n || z.log("[Tracing] discarding Span since it happened after Transaction was finished", JSON.stringify(t, void 0, 2)),
                    n
                }
                )),
                z.log("[Tracing] flushing IdleTransaction")
            } else
                z.log("[Tracing] No active IdleTransaction");
            return this._onScope && nn(this._idleHub),
            t.prototype.finish.call(this, e)
        }
        ,
        e.prototype.registerBeforeFinishCallback = function(t) {
            this._beforeFinishCallbacks.push(t)
        }
        ,
        e.prototype.initSpanRecorder = function(t) {
            var e = this;
            if (!this.spanRecorder) {
                this.spanRecorder = new tn((function(t) {
                    e._finished || e._pushActivity(t)
                }
                ),(function(t) {
                    e._finished || e._popActivity(t)
                }
                ),this.spanId,t),
                z.log("Starting heartbeat"),
                this._pingHeartbeat()
            }
            this.spanRecorder.add(this)
        }
        ,
        e.prototype._pushActivity = function(t) {
            this._initTimeout && (clearTimeout(this._initTimeout),
            this._initTimeout = void 0),
            z.log("[Tracing] pushActivity: " + t),
            this.activities[t] = !0,
            z.log("[Tracing] new activities count", Object.keys(this.activities).length)
        }
        ,
        e.prototype._popActivity = function(t) {
            var e = this;
            if (this.activities[t] && (z.log("[Tracing] popActivity " + t),
            delete this.activities[t],
            z.log("[Tracing] new activities count", Object.keys(this.activities).length)),
            0 === Object.keys(this.activities).length) {
                var n = this._idleTimeout
                  , r = It() + n / 1e3;
                setTimeout((function() {
                    e._finished || e.finish(r)
                }
                ), n)
            }
        }
        ,
        e.prototype._beat = function() {
            if (clearTimeout(this._heartbeatTimer),
            !this._finished) {
                var t = Object.keys(this.activities)
                  , e = t.length ? t.reduce((function(t, e) {
                    return t + e
                }
                )) : "";
                e === this._prevHeartbeatString ? this._heartbeatCounter += 1 : this._heartbeatCounter = 1,
                this._prevHeartbeatString = e,
                this._heartbeatCounter >= 3 ? (z.log("[Tracing] Transaction finished because of no change for 3 heart beats"),
                this.setStatus(Ye.DeadlineExceeded),
                this.setTag("heartbeat", "failed"),
                this.finish()) : this._pingHeartbeat()
            }
        }
        ,
        e.prototype._pingHeartbeat = function() {
            var t = this;
            z.log("pinging Heartbeat -> current counter: " + this._heartbeatCounter),
            this._heartbeatTimer = setTimeout((function() {
                t._beat()
            }
            ), 5e3)
        }
        ,
        e
    }(Ze);
    function nn(t) {
        if (t) {
            var e = t.getScope();
            if (e)
                e.getTransaction() && e.setSpan(void 0)
        }
    }
    function rn() {
        var t = this.getScope();
        if (t) {
            var e = t.getSpan();
            if (e)
                return {
                    "sentry-trace": e.toTraceparent()
                }
        }
        return {}
    }
    function on(t, e, n) {
        return Ge(e) ? void 0 !== t.sampled ? (t.setMetadata({
            transactionSampling: {
                method: s.Explicit
            }
        }),
        t) : ("function" == typeof e.tracesSampler ? (r = e.tracesSampler(n),
        t.setMetadata({
            transactionSampling: {
                method: s.Sampler,
                rate: Number(r)
            }
        })) : void 0 !== n.parentSampled ? (r = n.parentSampled,
        t.setMetadata({
            transactionSampling: {
                method: s.Inheritance
            }
        })) : (r = e.tracesSampleRate,
        t.setMetadata({
            transactionSampling: {
                method: s.Rate,
                rate: Number(r)
            }
        })),
        function(t) {
            if (isNaN(t) || "number" != typeof t && "boolean" != typeof t)
                return z.warn("[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got " + JSON.stringify(t) + " of type " + JSON.stringify(typeof t) + "."),
                !1;
            if (t < 0 || t > 1)
                return z.warn("[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got " + t + "."),
                !1;
            return !0
        }(r) ? r ? (t.sampled = Math.random() < r,
        t.sampled ? (z.log("[Tracing] starting " + t.op + " transaction - " + t.name),
        t) : (z.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " + Number(r) + ")"),
        t)) : (z.log("[Tracing] Discarding transaction because " + ("function" == typeof e.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")),
        t.sampled = !1,
        t) : (z.warn("[Tracing] Discarding transaction because of invalid sample rate."),
        t.sampled = !1,
        t)) : (t.sampled = !1,
        t);
        var r
    }
    function an(t, e) {
        var n, r, i = (null === (n = this.getClient()) || void 0 === n ? void 0 : n.getOptions()) || {}, o = new Ze(t,this);
        return (o = on(o, i, c({
            parentSampled: t.parentSampled,
            transactionContext: t
        }, e))).sampled && o.initSpanRecorder(null === (r = i._experiments) || void 0 === r ? void 0 : r.maxSpans),
        o
    }
    function sn() {
        var t;
        (t = At()).__SENTRY__ && (t.__SENTRY__.extensions = t.__SENTRY__.extensions || {},
        t.__SENTRY__.extensions.startTransaction || (t.__SENTRY__.extensions.startTransaction = an),
        t.__SENTRY__.extensions.traceHeaders || (t.__SENTRY__.extensions.traceHeaders = rn)),
        dt({
            callback: Ve,
            type: "error"
        }),
        dt({
            callback: Ve,
            type: "unhandledrejection"
        })
    }
    var cn = A();
    var un, pn, ln = function(t, e, n, r) {
        var i;
        return function() {
            n && e.isFinal && n.disconnect(),
            e.value >= 0 && (r || e.isFinal || "hidden" === document.visibilityState) && (e.delta = e.value - (i || 0),
            (e.delta || e.isFinal || void 0 === i) && (t(e),
            i = e.value))
        }
    }, dn = function(t, e) {
        return void 0 === e && (e = -1),
        {
            name: t,
            value: e,
            delta: 0,
            entries: [],
            id: Date.now() + "-" + (Math.floor(8999999999999 * Math.random()) + 1e12),
            isFinal: !1
        }
    }, hn = function(t, e) {
        try {
            if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                var n = new PerformanceObserver((function(t) {
                    return t.getEntries().map(e)
                }
                ));
                return n.observe({
                    type: t,
                    buffered: !0
                }),
                n
            }
        } catch (t) {}
    }, fn = !1, vn = !1, _n = function(t) {
        fn = !t.persisted
    }, mn = function(t, e) {
        void 0 === e && (e = !1),
        vn || (addEventListener("pagehide", _n),
        addEventListener("beforeunload", (function() {}
        )),
        vn = !0),
        addEventListener("visibilitychange", (function(e) {
            var n = e.timeStamp;
            "hidden" === document.visibilityState && t({
                timeStamp: n,
                isUnloading: fn
            })
        }
        ), {
            capture: !0,
            once: e
        })
    }, yn = function() {
        return void 0 === un && (un = "hidden" === document.visibilityState ? 0 : 1 / 0,
        mn((function(t) {
            var e = t.timeStamp;
            return un = e
        }
        ), !0)),
        {
            get timeStamp() {
                return un
            }
        }
    }, gn = function(t, e) {
        void 0 === e && (e = !1);
        var n, r = dn("LCP"), i = yn(), o = function(t) {
            var e = t.startTime;
            e < i.timeStamp ? (r.value = e,
            r.entries.push(t)) : r.isFinal = !0,
            n()
        }, a = hn("largest-contentful-paint", o);
        if (a) {
            n = ln(t, r, a, e);
            var s = function() {
                r.isFinal || (a.takeRecords().map(o),
                r.isFinal = !0,
                n())
            };
            (pn || (pn = new Promise((function(t) {
                return ["scroll", "keydown", "pointerdown"].map((function(e) {
                    addEventListener(e, t, {
                        once: !0,
                        passive: !0,
                        capture: !0
                    })
                }
                ))
            }
            ))),
            pn).then(s),
            mn(s, !0)
        }
    }, bn = A(), Sn = function(t) {
        var e, n = dn("TTFB");
        e = function() {
            try {
                var e = bn.performance.getEntriesByType("navigation")[0] || function() {
                    var t = bn.performance.timing
                      , e = {
                        entryType: "navigation",
                        startTime: 0
                    };
                    for (var n in t)
                        "navigationStart" !== n && "toJSON" !== n && (e[n] = Math.max(t[n] - t.navigationStart, 0));
                    return e
                }();
                n.value = n.delta = e.responseStart,
                n.entries = [e],
                t(n)
            } catch (t) {}
        }
        ,
        "complete" === document.readyState ? setTimeout(e, 0) : addEventListener("pageshow", e)
    }, En = A(), xn = function() {
        function t() {
            this._measurements = {},
            this._performanceCursor = 0,
            En && En.performance && (En.performance.mark && En.performance.mark("sentry-tracing-init"),
            this._trackCLS(),
            this._trackLCP(),
            this._trackFID(),
            this._trackTTFB())
        }
        return t.prototype.addPerformanceEntries = function(t) {
            var e = this;
            if (En && En.performance && En.performance.getEntries && Rt) {
                z.log("[Tracing] Adding & adjusting spans using Performance API");
                var n, r, i, o = Ke(Rt);
                if (En.document)
                    for (var a = 0; a < document.scripts.length; a++)
                        if ("true" === document.scripts[a].dataset.entry) {
                            n = document.scripts[a].src;
                            break
                        }
                if (En.performance.getEntries().slice(this._performanceCursor).forEach((function(a) {
                    var s = Ke(a.startTime)
                      , c = Ke(a.duration);
                    if (!("navigation" === t.op && o + s < t.startTimestamp))
                        switch (a.entryType) {
                        case "navigation":
                            !function(t, e, n) {
                                Tn({
                                    transaction: t,
                                    entry: e,
                                    event: "unloadEvent",
                                    timeOrigin: n
                                }),
                                Tn({
                                    transaction: t,
                                    entry: e,
                                    event: "redirect",
                                    timeOrigin: n
                                }),
                                Tn({
                                    transaction: t,
                                    entry: e,
                                    event: "domContentLoadedEvent",
                                    timeOrigin: n
                                }),
                                Tn({
                                    transaction: t,
                                    entry: e,
                                    event: "loadEvent",
                                    timeOrigin: n
                                }),
                                Tn({
                                    transaction: t,
                                    entry: e,
                                    event: "connect",
                                    timeOrigin: n
                                }),
                                Tn({
                                    transaction: t,
                                    entry: e,
                                    event: "secureConnection",
                                    timeOrigin: n,
                                    eventEnd: "connectEnd",
                                    description: "TLS/SSL"
                                }),
                                Tn({
                                    transaction: t,
                                    entry: e,
                                    event: "fetch",
                                    timeOrigin: n,
                                    eventEnd: "domainLookupStart",
                                    description: "cache"
                                }),
                                Tn({
                                    transaction: t,
                                    entry: e,
                                    event: "domainLookup",
                                    timeOrigin: n,
                                    description: "DNS"
                                }),
                                function(t, e, n) {
                                    wn(t, {
                                        op: "browser",
                                        description: "request",
                                        startTimestamp: n + Ke(e.requestStart),
                                        endTimestamp: n + Ke(e.responseEnd)
                                    }),
                                    wn(t, {
                                        op: "browser",
                                        description: "response",
                                        startTimestamp: n + Ke(e.responseStart),
                                        endTimestamp: n + Ke(e.responseEnd)
                                    })
                                }(t, e, n)
                            }(t, a, o);
                            break;
                        case "mark":
                        case "paint":
                        case "measure":
                            var u = function(t, e, n, r, i) {
                                var o = i + n
                                  , a = o + r;
                                return wn(t, {
                                    description: e.name,
                                    endTimestamp: a,
                                    op: e.entryType,
                                    startTimestamp: o
                                }),
                                o
                            }(t, a, s, c, o);
                            void 0 === i && "sentry-tracing-init" === a.name && (i = u);
                            var p = yn()
                              , l = a.startTime < p.timeStamp;
                            "first-paint" === a.name && l && (z.log("[Measurements] Adding FP"),
                            e._measurements.fp = {
                                value: a.startTime
                            },
                            e._measurements["mark.fp"] = {
                                value: u
                            }),
                            "first-contentful-paint" === a.name && l && (z.log("[Measurements] Adding FCP"),
                            e._measurements.fcp = {
                                value: a.startTime
                            },
                            e._measurements["mark.fcp"] = {
                                value: u
                            });
                            break;
                        case "resource":
                            var d = a.name.replace(window.location.origin, "")
                              , h = function(t, e, n, r, i, o) {
                                if ("xmlhttprequest" === e.initiatorType || "fetch" === e.initiatorType)
                                    return;
                                var a = {};
                                "transferSize"in e && (a["Transfer Size"] = e.transferSize);
                                "encodedBodySize"in e && (a["Encoded Body Size"] = e.encodedBodySize);
                                "decodedBodySize"in e && (a["Decoded Body Size"] = e.decodedBodySize);
                                var s = o + r
                                  , c = s + i;
                                return wn(t, {
                                    description: n,
                                    endTimestamp: c,
                                    op: e.initiatorType ? "resource." + e.initiatorType : "resource",
                                    startTimestamp: s,
                                    data: a
                                }),
                                c
                            }(t, a, d, s, c, o);
                            void 0 === r && (n || "").indexOf(d) > -1 && (r = h)
                        }
                }
                )),
                void 0 !== r && void 0 !== i && wn(t, {
                    description: "evaluation",
                    endTimestamp: i,
                    op: "script",
                    startTimestamp: r
                }),
                this._performanceCursor = Math.max(performance.getEntries().length - 1, 0),
                this._trackNavigator(t),
                "pageload" === t.op) {
                    var s = Ke(Rt);
                    ["fcp", "fp", "lcp", "ttfb"].forEach((function(n) {
                        if (e._measurements[n] && !(s >= t.startTimestamp)) {
                            var r = e._measurements[n].value
                              , i = s + Ke(r)
                              , o = Math.abs(1e3 * (i - t.startTimestamp))
                              , a = o - r;
                            z.log("[Measurements] Normalized " + n + " from " + r + " to " + o + " (" + a + ")"),
                            e._measurements[n].value = o
                        }
                    }
                    )),
                    this._measurements["mark.fid"] && this._measurements.fid && wn(t, {
                        description: "first input delay",
                        endTimestamp: this._measurements["mark.fid"].value + Ke(this._measurements.fid.value),
                        op: "web.vitals",
                        startTimestamp: this._measurements["mark.fid"].value
                    }),
                    t.setMeasurements(this._measurements),
                    this._lcpEntry && (z.log("[Measurements] Adding LCP Data"),
                    this._lcpEntry.element && t.setTag("lcp.element", x(this._lcpEntry.element)),
                    this._lcpEntry.id && t.setTag("lcp.id", this._lcpEntry.id),
                    this._lcpEntry.url && t.setTag("lcp.url", this._lcpEntry.url.trim().slice(0, 200)),
                    t.setTag("lcp.size", this._lcpEntry.size))
                }
            }
        }
        ,
        t.prototype._trackCLS = function() {
            var t = this;
            !function(t, e) {
                void 0 === e && (e = !1);
                var n, r = dn("CLS", 0), i = function(t) {
                    t.hadRecentInput || (r.value += t.value,
                    r.entries.push(t),
                    n())
                }, o = hn("layout-shift", i);
                o && (n = ln(t, r, o, e),
                mn((function(t) {
                    var e = t.isUnloading;
                    o.takeRecords().map(i),
                    e && (r.isFinal = !0),
                    n()
                }
                )))
            }((function(e) {
                e.entries.pop() && (z.log("[Measurements] Adding CLS"),
                t._measurements.cls = {
                    value: e.value
                })
            }
            ))
        }
        ,
        t.prototype._trackNavigator = function(t) {
            var e = En.navigator;
            if (e) {
                var n = e.connection;
                n && (n.effectiveType && t.setTag("effectiveConnectionType", n.effectiveType),
                n.type && t.setTag("connectionType", n.type),
                kn(n.rtt) && (this._measurements["connection.rtt"] = {
                    value: n.rtt
                }),
                kn(n.downlink) && (this._measurements["connection.downlink"] = {
                    value: n.downlink
                })),
                kn(e.deviceMemory) && t.setTag("deviceMemory", String(e.deviceMemory)),
                kn(e.hardwareConcurrency) && t.setTag("hardwareConcurrency", String(e.hardwareConcurrency))
            }
        }
        ,
        t.prototype._trackLCP = function() {
            var t = this;
            gn((function(e) {
                var n = e.entries.pop();
                if (n) {
                    var r = Ke(Rt)
                      , i = Ke(n.startTime);
                    z.log("[Measurements] Adding LCP"),
                    t._measurements.lcp = {
                        value: e.value
                    },
                    t._measurements["mark.lcp"] = {
                        value: r + i
                    },
                    t._lcpEntry = n
                }
            }
            ))
        }
        ,
        t.prototype._trackFID = function() {
            var t, e, n, r, i, o, a = this;
            t = function(t) {
                var e = t.entries.pop();
                if (e) {
                    var n = Ke(Rt)
                      , r = Ke(e.startTime);
                    z.log("[Measurements] Adding FID"),
                    a._measurements.fid = {
                        value: t.value
                    },
                    a._measurements["mark.fid"] = {
                        value: n + r
                    }
                }
            }
            ,
            e = dn("FID"),
            n = yn(),
            i = hn("first-input", r = function(t) {
                t.startTime < n.timeStamp && (e.value = t.processingStart - t.startTime,
                e.entries.push(t),
                e.isFinal = !0,
                o())
            }
            ),
            o = ln(t, e, i),
            i ? mn((function() {
                i.takeRecords().map(r),
                i.disconnect()
            }
            ), !0) : window.perfMetrics && window.perfMetrics.onFirstInputDelay && window.perfMetrics.onFirstInputDelay((function(t, r) {
                r.timeStamp < n.timeStamp && (e.value = t,
                e.isFinal = !0,
                e.entries = [{
                    entryType: "first-input",
                    name: r.type,
                    target: r.target,
                    cancelable: r.cancelable,
                    startTime: r.timeStamp,
                    processingStart: r.timeStamp + t
                }],
                o())
            }
            ))
        }
        ,
        t.prototype._trackTTFB = function() {
            var t = this;
            Sn((function(e) {
                var n, r = e.entries.pop();
                if (r) {
                    z.log("[Measurements] Adding TTFB"),
                    t._measurements.ttfb = {
                        value: e.value
                    };
                    var i = e.value - (n = e.entries[0],
                    null != n ? n : r).requestStart;
                    t._measurements["ttfb.requestTime"] = {
                        value: i
                    }
                }
            }
            ))
        }
        ,
        t
    }();
    function Tn(t) {
        var e = t.transaction
          , n = t.entry
          , r = t.event
          , i = t.timeOrigin
          , o = t.eventEnd
          , a = t.description
          , s = o ? n[o] : n[r + "End"]
          , c = n[r + "Start"];
        c && s && wn(e, {
            op: "browser",
            description: null != a ? a : r,
            startTimestamp: i + Ke(c),
            endTimestamp: i + Ke(s)
        })
    }
    function wn(t, e) {
        var n = e.startTimestamp
          , r = u(e, ["startTimestamp"]);
        return n && t.startTimestamp > n && (t.startTimestamp = n),
        t.startChild(c({
            startTimestamp: n
        }, r))
    }
    function kn(t) {
        return "number" == typeof t && isFinite(t)
    }
    var On = {
        traceFetch: !0,
        traceXHR: !0,
        tracingOrigins: ["localhost", /^\//]
    };
    function In(t) {
        var e = c(c({}, On), t)
          , n = e.traceFetch
          , r = e.traceXHR
          , i = e.tracingOrigins
          , o = e.shouldCreateSpanForRequest
          , a = {}
          , s = function(t) {
            if (a[t])
                return a[t];
            var e = i;
            return a[t] = e.some((function(e) {
                return N(t, e)
            }
            )) && !N(t, "sentry_key"),
            a[t]
        }
          , u = s;
        "function" == typeof o && (u = function(t) {
            return s(t) && o(t)
        }
        );
        var p = {};
        n && dt({
            callback: function(t) {
                !function(t, e, n) {
                    var r, i = null === (r = Ut().getClient()) || void 0 === r ? void 0 : r.getOptions();
                    if (!(i && Ge(i) && t.fetchData && e(t.fetchData.url)))
                        return;
                    if (t.endTimestamp && t.fetchData.__span) {
                        return void ((a = n[t.fetchData.__span]) && (t.response ? a.setHttpStatus(t.response.status) : t.error && a.setStatus(Ye.InternalError),
                        a.finish(),
                        delete n[t.fetchData.__span]))
                    }
                    var o = Xe();
                    if (o) {
                        var a = o.startChild({
                            data: c(c({}, t.fetchData), {
                                type: "fetch"
                            }),
                            description: t.fetchData.method + " " + t.fetchData.url,
                            op: "http"
                        });
                        t.fetchData.__span = a.spanId,
                        n[a.spanId] = a;
                        var s = t.args[0] = t.args[0]
                          , u = t.args[1] = t.args[1] || {}
                          , p = u.headers;
                        E(s, Request) && (p = s.headers),
                        p ? "function" == typeof p.append ? p.append("sentry-trace", a.toTraceparent()) : p = Array.isArray(p) ? d(p, [["sentry-trace", a.toTraceparent()]]) : c(c({}, p), {
                            "sentry-trace": a.toTraceparent()
                        }) : p = {
                            "sentry-trace": a.toTraceparent()
                        },
                        u.headers = p
                    }
                }(t, u, p)
            },
            type: "fetch"
        }),
        r && dt({
            callback: function(t) {
                !function(t, e, n) {
                    var r, i = null === (r = Ut().getClient()) || void 0 === r ? void 0 : r.getOptions();
                    if (!i || !Ge(i) || !(t.xhr && t.xhr.__sentry_xhr__ && e(t.xhr.__sentry_xhr__.url)) || t.xhr.__sentry_own_request__)
                        return;
                    var o = t.xhr.__sentry_xhr__;
                    if (t.endTimestamp && t.xhr.__sentry_xhr_span_id__) {
                        return void ((s = n[t.xhr.__sentry_xhr_span_id__]) && (s.setHttpStatus(o.status_code),
                        s.finish(),
                        delete n[t.xhr.__sentry_xhr_span_id__]))
                    }
                    var a = Xe();
                    if (a) {
                        var s = a.startChild({
                            data: c(c({}, o.data), {
                                type: "xhr",
                                method: o.method,
                                url: o.url
                            }),
                            description: o.method + " " + o.url,
                            op: "http"
                        });
                        if (t.xhr.__sentry_xhr_span_id__ = s.spanId,
                        n[t.xhr.__sentry_xhr_span_id__] = s,
                        t.xhr.setRequestHeader)
                            try {
                                t.xhr.setRequestHeader("sentry-trace", s.toTraceparent())
                            } catch (t) {}
                    }
                }(t, u, p)
            },
            type: "xhr"
        })
    }
    var Rn = A();
    var Cn = c({
        idleTimeout: 1e3,
        markBackgroundTransactions: !0,
        maxTransactionDuration: 600,
        routingInstrumentation: function(t, e, n) {
            if (void 0 === e && (e = !0),
            void 0 === n && (n = !0),
            Rn && Rn.location) {
                var r, i = Rn.location.href;
                e && (r = t({
                    name: Rn.location.pathname,
                    op: "pageload"
                })),
                n && dt({
                    callback: function(e) {
                        var n = e.to
                          , o = e.from;
                        void 0 === o && i && -1 !== i.indexOf(n) ? i = void 0 : o !== n && (i = void 0,
                        r && (z.log("[Tracing] Finishing current transaction with op: " + r.op),
                        r.finish()),
                        r = t({
                            name: Rn.location.pathname,
                            op: "navigation"
                        }))
                    },
                    type: "history"
                })
            } else
                z.warn("Could not initialize routing instrumentation due to invalid location")
        },
        startTransactionOnLocationChange: !0,
        startTransactionOnPageLoad: !0
    }, On)
      , jn = function() {
        function t(e) {
            this.name = t.id,
            this._metrics = new xn,
            this._emitOptionsWarning = !1;
            var n = On.tracingOrigins;
            e && e.tracingOrigins && Array.isArray(e.tracingOrigins) && 0 !== e.tracingOrigins.length ? n = e.tracingOrigins : this._emitOptionsWarning = !0,
            this.options = c(c(c({}, Cn), e), {
                tracingOrigins: n
            })
        }
        return t.prototype.setupOnce = function(t, e) {
            var n = this;
            this._getCurrentHub = e,
            this._emitOptionsWarning && (z.warn("[Tracing] You need to define `tracingOrigins` in the options. Set an array of urls or patterns to trace."),
            z.warn("[Tracing] We added a reasonable default for you: " + On.tracingOrigins));
            var r = this.options
              , i = r.routingInstrumentation
              , o = r.startTransactionOnLocationChange
              , a = r.startTransactionOnPageLoad
              , s = r.markBackgroundTransactions
              , c = r.traceFetch
              , u = r.traceXHR
              , p = r.tracingOrigins
              , l = r.shouldCreateSpanForRequest;
            i((function(t) {
                return n._createRouteTransaction(t)
            }
            ), a, o),
            s && (cn && cn.document ? cn.document.addEventListener("visibilitychange", (function() {
                var t = Xe();
                cn.document.hidden && t && (z.log("[Tracing] Transaction: " + Ye.Cancelled + " -> since tab moved to the background, op: " + t.op),
                t.status || t.setStatus(Ye.Cancelled),
                t.setTag("visibilitychange", "document.hidden"),
                t.finish())
            }
            )) : z.warn("[Tracing] Could not set up background tab detection due to lack of global document")),
            In({
                traceFetch: c,
                traceXHR: u,
                tracingOrigins: p,
                shouldCreateSpanForRequest: l
            })
        }
        ,
        t.prototype._createRouteTransaction = function(t) {
            var e = this;
            if (this._getCurrentHub) {
                var n = this.options
                  , r = n.beforeNavigate
                  , i = n.idleTimeout
                  , o = n.maxTransactionDuration
                  , a = "pageload" === t.op ? function() {
                    var t = (e = "sentry-trace",
                    n = document.querySelector("meta[name=" + e + "]"),
                    n ? n.getAttribute("content") : null);
                    var e, n;
                    if (t)
                        return function(t) {
                            var e = t.match(Je);
                            if (e) {
                                var n = void 0;
                                return "1" === e[3] ? n = !0 : "0" === e[3] && (n = !1),
                                {
                                    traceId: e[1],
                                    parentSampled: n,
                                    parentSpanId: e[2]
                                }
                            }
                        }(t);
                    return
                }() : void 0
                  , s = c(c(c({}, t), a), {
                    trimEnd: !0
                })
                  , u = "function" == typeof r ? r(s) : s
                  , p = void 0 === u ? c(c({}, s), {
                    sampled: !1
                }) : u;
                !1 === p.sampled && z.log("[Tracing] Will not send " + p.op + " transaction because of beforeNavigate."),
                z.log("[Tracing] Starting " + p.op + " transaction on scope");
                var l = function(t, e, n, r, i) {
                    var o, a, s = (null === (o = t.getClient()) || void 0 === o ? void 0 : o.getOptions()) || {}, u = new en(e,t,n,r);
                    return (u = on(u, s, c({
                        parentSampled: e.parentSampled,
                        transactionContext: e
                    }, i))).sampled && u.initSpanRecorder(null === (a = s._experiments) || void 0 === a ? void 0 : a.maxSpans),
                    u
                }(this._getCurrentHub(), p, i, !0, {
                    location: A().location
                });
                return l.registerBeforeFinishCallback((function(t, n) {
                    e._metrics.addPerformanceEntries(t),
                    function(t, e, n) {
                        var r = n - e.startTimestamp;
                        n && (r > t || r < 0) && (e.setStatus(Ye.DeadlineExceeded),
                        e.setTag("maxTransactionDurationExceeded", "true"))
                    }(1e3 * o, t, n)
                }
                )),
                l
            }
            z.warn("[Tracing] Did not create " + t.op + " transaction because _getCurrentHub is invalid.")
        }
        ,
        t.id = "BrowserTracing",
        t
    }();
    var Dn = {}
      , Nn = A();
    Nn.Sentry && Nn.Sentry.Integrations && (Dn = Nn.Sentry.Integrations);
    var Ln = c(c(c({}, Dn), ze), {
        BrowserTracing: jn
    });
    return sn(),
    t.BrowserClient = He,
    t.Hub = Lt,
    t.Integrations = Ln,
    t.SDK_NAME = "sentry.javascript.browser",
    t.SDK_VERSION = ee,
    t.Scope = Ct,
    t.Span = Qe,
    t.Transports = we,
    t.addBreadcrumb = function(t) {
        Bt("addBreadcrumb", t)
    }
    ,
    t.addExtensionMethods = sn,
    t.addGlobalEventProcessor = Dt,
    t.captureEvent = function(t) {
        return Bt("captureEvent", t)
    }
    ,
    t.captureException = qt,
    t.captureMessage = function(t, e) {
        var n;
        try {
            throw new Error(t)
        } catch (t) {
            n = t
        }
        return Bt("captureMessage", t, "string" == typeof e ? e : void 0, c({
            originalException: t,
            syntheticException: n
        }, "string" != typeof e ? {
            captureContext: e
        } : void 0))
    }
    ,
    t.close = function(t) {
        var e = Ut().getClient();
        return e ? e.close(t) : Et.reject(!1)
    }
    ,
    t.configureScope = function(t) {
        Bt("configureScope", t)
    }
    ,
    t.defaultIntegrations = Be,
    t.flush = function(t) {
        var e = Ut().getClient();
        return e ? e.flush(t) : Et.reject(!1)
    }
    ,
    t.forceLoad = function() {}
    ,
    t.getCurrentHub = Ut,
    t.getHubFromCarrier = Mt,
    t.init = function(t) {
        if (void 0 === t && (t = {}),
        void 0 === t.defaultIntegrations && (t.defaultIntegrations = Be),
        void 0 === t.release) {
            var e = A();
            e.SENTRY_RELEASE && e.SENTRY_RELEASE.id && (t.release = e.SENTRY_RELEASE.id)
        }
        void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0),
        function(t, e) {
            !0 === e.debug && z.enable();
            var n = Ut()
              , r = new t(e);
            n.bindClient(r)
        }(He, t),
        t.autoSessionTracking && function() {
            if (void 0 === A().document)
                return void z.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
            var t = Ut();
            if ("function" != typeof t.startSession || "function" != typeof t.captureSession)
                return;
            t.startSession(),
            t.captureSession(),
            dt({
                callback: function() {
                    t.startSession(),
                    t.captureSession()
                },
                type: "history"
            })
        }()
    }
    ,
    t.lastEventId = function() {
        return Ut().lastEventId()
    }
    ,
    t.onLoad = function(t) {
        t()
    }
    ,
    t.setContext = function(t, e) {
        Bt("setContext", t, e)
    }
    ,
    t.setExtra = function(t, e) {
        Bt("setExtra", t, e)
    }
    ,
    t.setExtras = function(t) {
        Bt("setExtras", t)
    }
    ,
    t.setTag = function(t, e) {
        Bt("setTag", t, e)
    }
    ,
    t.setTags = function(t) {
        Bt("setTags", t)
    }
    ,
    t.setUser = function(t) {
        Bt("setUser", t)
    }
    ,
    t.showReportDialog = function(t) {
        void 0 === t && (t = {}),
        t.eventId || (t.eventId = Ut().lastEventId());
        var e = Ut().getClient();
        e && e.showReportDialog(t)
    }
    ,
    t.startTransaction = function(t, e) {
        return Bt("startTransaction", c({}, t), e)
    }
    ,
    t.withScope = Wt,
    t.wrap = function(t) {
        return Ce(t)()
    }
    ,
    t
}({});
Sentry.init({
    dsn: "https://b3e6ce464a0b45a6b66826dc3b88d45d@c.3hentai.net/23",
    integrations: [new Sentry.Integrations.BrowserTracing],
    tracesSampleRate: .1,
    allowUrls: [/https?:\/\/([a-z0-9]\.)?3hentai\.net/i],
    ignoreErrors: [/^Cannot redefine property: BetterJsPop/i, /Can't find variable: FoxbrowserToolsLoaded/i, /Can't find variable: QK_middlewareReadModePageDetect/i, /Can't find variable: instantSearchSDKJSBridgeClearHighlight/i, /Can't find variable: MyAppGetLinkHREFAtPoint/i, /Can't find variable: MyAppGetLinkTitleNameAtPoint/i, /Can't find variable: SeMobFillFormTool/i, /Can't find variable: UC_NEWS_PAUSE_ALL_VIDEOS/i, /Can't find variable: $UCBrowser/i, /GM_getValue is not defined/i, /ibFindAllVideos/i]
});
