"use strict";

var e = require("assert");

var t = require("os");

var r = require("fs");

var o = require("path");

var s = require("http");

var n = require("https");

require("net");

var i = require("tls");

var a = require("events");

var u = require("util");

var c = require("stream");

var l = require("url");

var p = require("zlib");

var d = require("child_process");

function f(e) {
    return e && typeof e === "object" && "default" in e ? e : {
        default: e
    };
}

var m = f(e);

var h = f(t);

var g = f(r);

var b = f(o);

var w = f(s);

var y = f(n);

var v = f(i);

var T = f(a);

var E = f(u);

var _ = f(c);

var O = f(l);

var P = f(p);

var k = f(d);

var S = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};

function A(e) {
    if (e.__esModule) return e;
    var t = Object.defineProperty({}, "__esModule", {
        value: true
    });
    Object.keys(e).forEach((function(r) {
        var o = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(t, r, o.get ? o : {
            enumerable: true,
            get: function() {
                return e[r];
            }
        });
    }));
    return t;
}

function G(e) {
    var t = {
        exports: {}
    };
    return e(t, t.exports), t.exports;
}

function C(e) {
    if (e === null || e === undefined) {
        return "";
    } else if (typeof e === "string" || e instanceof String) {
        return e;
    }
    return JSON.stringify(e);
}

var j = C;

var R = Object.defineProperty({
    toCommandValue: j
}, "__esModule", {
    value: true
});

var x = S && S.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (e != null) for (var r in e) if (Object.hasOwnProperty.call(e, r)) t[r] = e[r];
    t["default"] = e;
    return t;
};

const F = x(h["default"]);

function U(e, t, r) {
    const o = new B(e, t, r);
    process.stdout.write(o.toString() + F.EOL);
}

var D = U;

function $(e, t = "") {
    U(e, {}, t);
}

var q = $;

const L = "::";

class B {
    constructor(e, t, r) {
        if (!e) {
            e = "missing.command";
        }
        this.command = e;
        this.properties = t;
        this.message = r;
    }
    toString() {
        let e = L + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            e += " ";
            let t = true;
            for (const r in this.properties) {
                if (this.properties.hasOwnProperty(r)) {
                    const o = this.properties[r];
                    if (o) {
                        if (t) {
                            t = false;
                        } else {
                            e += ",";
                        }
                        e += `${r}=${z(o)}`;
                    }
                }
            }
        }
        e += `${L}${I(this.message)}`;
        return e;
    }
}

function I(e) {
    return R.toCommandValue(e).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A");
}

function z(e) {
    return R.toCommandValue(e).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A").replace(/:/g, "%3A").replace(/,/g, "%2C");
}

var H = Object.defineProperty({
    issueCommand: D,
    issue: q
}, "__esModule", {
    value: true
});

var M = S && S.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (e != null) for (var r in e) if (Object.hasOwnProperty.call(e, r)) t[r] = e[r];
    t["default"] = e;
    return t;
};

const N = M(g["default"]);

const W = M(h["default"]);

function V(e, t) {
    const r = process.env[`GITHUB_${e}`];
    if (!r) {
        throw new Error(`Unable to find environment variable for file command ${e}`);
    }
    if (!N.existsSync(r)) {
        throw new Error(`Missing file at path: ${r}`);
    }
    N.appendFileSync(r, `${R.toCommandValue(t)}${W.EOL}`, {
        encoding: "utf8"
    });
}

var J = V;

var K = Object.defineProperty({
    issueCommand: J
}, "__esModule", {
    value: true
});

var Y = G((function(e, t) {
    var r = S && S.__awaiter || function(e, t, r, o) {
        function s(e) {
            return e instanceof r ? e : new r((function(t) {
                t(e);
            }));
        }
        return new (r || (r = Promise))((function(r, n) {
            function i(e) {
                try {
                    u(o.next(e));
                } catch (e) {
                    n(e);
                }
            }
            function a(e) {
                try {
                    u(o["throw"](e));
                } catch (e) {
                    n(e);
                }
            }
            function u(e) {
                e.done ? r(e.value) : s(e.value).then(i, a);
            }
            u((o = o.apply(e, t || [])).next());
        }));
    };
    var o = S && S.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) for (var r in e) if (Object.hasOwnProperty.call(e, r)) t[r] = e[r];
        t["default"] = e;
        return t;
    };
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    const s = o(h["default"]);
    const n = o(b["default"]);
    var i;
    (function(e) {
        e[e["Success"] = 0] = "Success";
        e[e["Failure"] = 1] = "Failure";
    })(i = t.ExitCode || (t.ExitCode = {}));
    function a(e, t) {
        const r = R.toCommandValue(t);
        process.env[e] = r;
        const o = process.env["GITHUB_ENV"] || "";
        if (o) {
            const t = "_GitHubActionsFileCommandDelimeter_";
            const o = `${e}<<${t}${s.EOL}${r}${s.EOL}${t}`;
            K.issueCommand("ENV", o);
        } else {
            H.issueCommand("set-env", {
                name: e
            }, r);
        }
    }
    t.exportVariable = a;
    function u(e) {
        H.issueCommand("add-mask", {}, e);
    }
    t.setSecret = u;
    function c(e) {
        const t = process.env["GITHUB_PATH"] || "";
        if (t) {
            K.issueCommand("PATH", e);
        } else {
            H.issueCommand("add-path", {}, e);
        }
        process.env["PATH"] = `${e}${n.delimiter}${process.env["PATH"]}`;
    }
    t.addPath = c;
    function l(e, t) {
        const r = process.env[`INPUT_${e.replace(/ /g, "_").toUpperCase()}`] || "";
        if (t && t.required && !r) {
            throw new Error(`Input required and not supplied: ${e}`);
        }
        return r.trim();
    }
    t.getInput = l;
    function p(e, t) {
        H.issueCommand("set-output", {
            name: e
        }, t);
    }
    t.setOutput = p;
    function d(e) {
        H.issue("echo", e ? "on" : "off");
    }
    t.setCommandEcho = d;
    function f(e) {
        process.exitCode = i.Failure;
        w(e);
    }
    t.setFailed = f;
    function m() {
        return process.env["RUNNER_DEBUG"] === "1";
    }
    t.isDebug = m;
    function g(e) {
        H.issueCommand("debug", {}, e);
    }
    t.debug = g;
    function w(e) {
        H.issue("error", e instanceof Error ? e.toString() : e);
    }
    t.error = w;
    function y(e) {
        H.issue("warning", e instanceof Error ? e.toString() : e);
    }
    t.warning = y;
    function v(e) {
        process.stdout.write(e + s.EOL);
    }
    t.info = v;
    function T(e) {
        H.issue("group", e);
    }
    t.startGroup = T;
    function E() {
        H.issue("endgroup");
    }
    t.endGroup = E;
    function _(e, t) {
        return r(this, void 0, void 0, (function*() {
            T(e);
            let r;
            try {
                r = yield t();
            } finally {
                E();
            }
            return r;
        }));
    }
    t.group = _;
    function O(e, t) {
        H.issueCommand("save-state", {
            name: e
        }, t);
    }
    t.saveState = O;
    function P(e) {
        return process.env[`STATE_${e}`] || "";
    }
    t.getState = P;
}));

var Z = G((function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    t.Context = void 0;
    class r {
        constructor() {
            this.payload = {};
            if (process.env.GITHUB_EVENT_PATH) {
                if (g["default"].existsSync(process.env.GITHUB_EVENT_PATH)) {
                    this.payload = JSON.parse(g["default"].readFileSync(process.env.GITHUB_EVENT_PATH, {
                        encoding: "utf8"
                    }));
                } else {
                    const e = process.env.GITHUB_EVENT_PATH;
                    process.stdout.write(`GITHUB_EVENT_PATH ${e} does not exist${h["default"].EOL}`);
                }
            }
            this.eventName = process.env.GITHUB_EVENT_NAME;
            this.sha = process.env.GITHUB_SHA;
            this.ref = process.env.GITHUB_REF;
            this.workflow = process.env.GITHUB_WORKFLOW;
            this.action = process.env.GITHUB_ACTION;
            this.actor = process.env.GITHUB_ACTOR;
            this.job = process.env.GITHUB_JOB;
            this.runNumber = parseInt(process.env.GITHUB_RUN_NUMBER, 10);
            this.runId = parseInt(process.env.GITHUB_RUN_ID, 10);
        }
        get issue() {
            const e = this.payload;
            return Object.assign(Object.assign({}, this.repo), {
                number: (e.issue || e.pull_request || e).number
            });
        }
        get repo() {
            if (process.env.GITHUB_REPOSITORY) {
                const [e, t] = process.env.GITHUB_REPOSITORY.split("/");
                return {
                    owner: e,
                    repo: t
                };
            }
            if (this.payload.repository) {
                return {
                    owner: this.payload.repository.owner.login,
                    repo: this.payload.repository.name
                };
            }
            throw new Error("context.repo requires a GITHUB_REPOSITORY environment variable like 'owner/repo'");
        }
    }
    t.Context = r;
}));

function Q(e) {
    let t = e.protocol === "https:";
    let r;
    if (ee(e)) {
        return r;
    }
    let o;
    if (t) {
        o = process.env["https_proxy"] || process.env["HTTPS_PROXY"];
    } else {
        o = process.env["http_proxy"] || process.env["HTTP_PROXY"];
    }
    if (o) {
        r = new URL(o);
    }
    return r;
}

var X = Q;

function ee(e) {
    if (!e.hostname) {
        return false;
    }
    let t = process.env["no_proxy"] || process.env["NO_PROXY"] || "";
    if (!t) {
        return false;
    }
    let r;
    if (e.port) {
        r = Number(e.port);
    } else if (e.protocol === "http:") {
        r = 80;
    } else if (e.protocol === "https:") {
        r = 443;
    }
    let o = [ e.hostname.toUpperCase() ];
    if (typeof r === "number") {
        o.push(`${o[0]}:${r}`);
    }
    for (let e of t.split(",").map((e => e.trim().toUpperCase())).filter((e => e))) {
        if (o.some((t => t === e))) {
            return true;
        }
    }
    return false;
}

var te = ee;

var re = Object.defineProperty({
    getProxyUrl: X,
    checkBypass: te
}, "__esModule", {
    value: true
});

var oe = ae;

var se = ue;

var ne = ce;

var ie = le;

function ae(e) {
    var t = new pe(e);
    t.request = w["default"].request;
    return t;
}

function ue(e) {
    var t = new pe(e);
    t.request = w["default"].request;
    t.createSocket = de;
    t.defaultPort = 443;
    return t;
}

function ce(e) {
    var t = new pe(e);
    t.request = y["default"].request;
    return t;
}

function le(e) {
    var t = new pe(e);
    t.request = y["default"].request;
    t.createSocket = de;
    t.defaultPort = 443;
    return t;
}

function pe(e) {
    var t = this;
    t.options = e || {};
    t.proxyOptions = t.options.proxy || {};
    t.maxSockets = t.options.maxSockets || w["default"].Agent.defaultMaxSockets;
    t.requests = [];
    t.sockets = [];
    t.on("free", (function e(r, o, s, n) {
        var i = fe(o, s, n);
        for (var a = 0, u = t.requests.length; a < u; ++a) {
            var c = t.requests[a];
            if (c.host === i.host && c.port === i.port) {
                t.requests.splice(a, 1);
                c.request.onSocket(r);
                return;
            }
        }
        r.destroy();
        t.removeSocket(r);
    }));
}

E["default"].inherits(pe, T["default"].EventEmitter);

pe.prototype.addRequest = function e(t, r, o, s) {
    var n = this;
    var i = me({
        request: t
    }, n.options, fe(r, o, s));
    if (n.sockets.length >= this.maxSockets) {
        n.requests.push(i);
        return;
    }
    n.createSocket(i, (function(e) {
        e.on("free", r);
        e.on("close", o);
        e.on("agentRemove", o);
        t.onSocket(e);
        function r() {
            n.emit("free", e, i);
        }
        function o(t) {
            n.removeSocket(e);
            e.removeListener("free", r);
            e.removeListener("close", o);
            e.removeListener("agentRemove", o);
        }
    }));
};

pe.prototype.createSocket = function e(t, r) {
    var o = this;
    var s = {};
    o.sockets.push(s);
    var n = me({}, o.proxyOptions, {
        method: "CONNECT",
        path: t.host + ":" + t.port,
        agent: false,
        headers: {
            host: t.host + ":" + t.port
        }
    });
    if (t.localAddress) {
        n.localAddress = t.localAddress;
    }
    if (n.proxyAuth) {
        n.headers = n.headers || {};
        n.headers["Proxy-Authorization"] = "Basic " + new Buffer(n.proxyAuth).toString("base64");
    }
    he("making CONNECT request");
    var i = o.request(n);
    i.useChunkedEncodingByDefault = false;
    i.once("response", a);
    i.once("upgrade", u);
    i.once("connect", c);
    i.once("error", l);
    i.end();
    function a(e) {
        e.upgrade = true;
    }
    function u(e, t, r) {
        process.nextTick((function() {
            c(e, t, r);
        }));
    }
    function c(e, n, a) {
        i.removeAllListeners();
        n.removeAllListeners();
        if (e.statusCode !== 200) {
            he("tunneling socket could not be established, statusCode=%d", e.statusCode);
            n.destroy();
            var u = new Error("tunneling socket could not be established, " + "statusCode=" + e.statusCode);
            u.code = "ECONNRESET";
            t.request.emit("error", u);
            o.removeSocket(s);
            return;
        }
        if (a.length > 0) {
            he("got illegal response body from proxy");
            n.destroy();
            var u = new Error("got illegal response body from proxy");
            u.code = "ECONNRESET";
            t.request.emit("error", u);
            o.removeSocket(s);
            return;
        }
        he("tunneling connection has established");
        o.sockets[o.sockets.indexOf(s)] = n;
        return r(n);
    }
    function l(e) {
        i.removeAllListeners();
        he("tunneling socket could not be established, cause=%s\n", e.message, e.stack);
        var r = new Error("tunneling socket could not be established, " + "cause=" + e.message);
        r.code = "ECONNRESET";
        t.request.emit("error", r);
        o.removeSocket(s);
    }
};

pe.prototype.removeSocket = function e(t) {
    var r = this.sockets.indexOf(t);
    if (r === -1) {
        return;
    }
    this.sockets.splice(r, 1);
    var o = this.requests.shift();
    if (o) {
        this.createSocket(o, (function(e) {
            o.request.onSocket(e);
        }));
    }
};

function de(e, t) {
    var r = this;
    pe.prototype.createSocket.call(r, e, (function(o) {
        var s = e.request.getHeader("host");
        var n = me({}, r.options, {
            socket: o,
            servername: s ? s.replace(/:.*$/, "") : e.host
        });
        var i = v["default"].connect(0, n);
        r.sockets[r.sockets.indexOf(o)] = i;
        t(i);
    }));
}

function fe(e, t, r) {
    if (typeof e === "string") {
        return {
            host: e,
            port: t,
            localAddress: r
        };
    }
    return e;
}

function me(e) {
    for (var t = 1, r = arguments.length; t < r; ++t) {
        var o = arguments[t];
        if (typeof o === "object") {
            var s = Object.keys(o);
            for (var n = 0, i = s.length; n < i; ++n) {
                var a = s[n];
                if (o[a] !== undefined) {
                    e[a] = o[a];
                }
            }
        }
    }
    return e;
}

var he;

if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
    he = function() {
        var e = Array.prototype.slice.call(arguments);
        if (typeof e[0] === "string") {
            e[0] = "TUNNEL: " + e[0];
        } else {
            e.unshift("TUNNEL:");
        }
        console.error.apply(console, e);
    };
} else {
    he = function() {};
}

var ge = he;

var be = {
    httpOverHttp: oe,
    httpsOverHttp: se,
    httpOverHttps: ne,
    httpsOverHttps: ie,
    debug: ge
};

var we = be;

var ye = G((function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    let r;
    var o;
    (function(e) {
        e[e["OK"] = 200] = "OK";
        e[e["MultipleChoices"] = 300] = "MultipleChoices";
        e[e["MovedPermanently"] = 301] = "MovedPermanently";
        e[e["ResourceMoved"] = 302] = "ResourceMoved";
        e[e["SeeOther"] = 303] = "SeeOther";
        e[e["NotModified"] = 304] = "NotModified";
        e[e["UseProxy"] = 305] = "UseProxy";
        e[e["SwitchProxy"] = 306] = "SwitchProxy";
        e[e["TemporaryRedirect"] = 307] = "TemporaryRedirect";
        e[e["PermanentRedirect"] = 308] = "PermanentRedirect";
        e[e["BadRequest"] = 400] = "BadRequest";
        e[e["Unauthorized"] = 401] = "Unauthorized";
        e[e["PaymentRequired"] = 402] = "PaymentRequired";
        e[e["Forbidden"] = 403] = "Forbidden";
        e[e["NotFound"] = 404] = "NotFound";
        e[e["MethodNotAllowed"] = 405] = "MethodNotAllowed";
        e[e["NotAcceptable"] = 406] = "NotAcceptable";
        e[e["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
        e[e["RequestTimeout"] = 408] = "RequestTimeout";
        e[e["Conflict"] = 409] = "Conflict";
        e[e["Gone"] = 410] = "Gone";
        e[e["TooManyRequests"] = 429] = "TooManyRequests";
        e[e["InternalServerError"] = 500] = "InternalServerError";
        e[e["NotImplemented"] = 501] = "NotImplemented";
        e[e["BadGateway"] = 502] = "BadGateway";
        e[e["ServiceUnavailable"] = 503] = "ServiceUnavailable";
        e[e["GatewayTimeout"] = 504] = "GatewayTimeout";
    })(o = t.HttpCodes || (t.HttpCodes = {}));
    var s;
    (function(e) {
        e["Accept"] = "accept";
        e["ContentType"] = "content-type";
    })(s = t.Headers || (t.Headers = {}));
    var n;
    (function(e) {
        e["ApplicationJson"] = "application/json";
    })(n = t.MediaTypes || (t.MediaTypes = {}));
    function i(e) {
        let t = re.getProxyUrl(new URL(e));
        return t ? t.href : "";
    }
    t.getProxyUrl = i;
    const a = [ o.MovedPermanently, o.ResourceMoved, o.SeeOther, o.TemporaryRedirect, o.PermanentRedirect ];
    const u = [ o.BadGateway, o.ServiceUnavailable, o.GatewayTimeout ];
    const c = [ "OPTIONS", "GET", "DELETE", "HEAD" ];
    const l = 10;
    const p = 5;
    class d extends Error {
        constructor(e, t) {
            super(e);
            this.name = "HttpClientError";
            this.statusCode = t;
            Object.setPrototypeOf(this, d.prototype);
        }
    }
    t.HttpClientError = d;
    class f {
        constructor(e) {
            this.message = e;
        }
        readBody() {
            return new Promise((async (e, t) => {
                let r = Buffer.alloc(0);
                this.message.on("data", (e => {
                    r = Buffer.concat([ r, e ]);
                }));
                this.message.on("end", (() => {
                    e(r.toString());
                }));
            }));
        }
    }
    t.HttpClientResponse = f;
    function m(e) {
        let t = new URL(e);
        return t.protocol === "https:";
    }
    t.isHttps = m;
    class h {
        constructor(e, t, r) {
            this._ignoreSslError = false;
            this._allowRedirects = true;
            this._allowRedirectDowngrade = false;
            this._maxRedirects = 50;
            this._allowRetries = false;
            this._maxRetries = 1;
            this._keepAlive = false;
            this._disposed = false;
            this.userAgent = e;
            this.handlers = t || [];
            this.requestOptions = r;
            if (r) {
                if (r.ignoreSslError != null) {
                    this._ignoreSslError = r.ignoreSslError;
                }
                this._socketTimeout = r.socketTimeout;
                if (r.allowRedirects != null) {
                    this._allowRedirects = r.allowRedirects;
                }
                if (r.allowRedirectDowngrade != null) {
                    this._allowRedirectDowngrade = r.allowRedirectDowngrade;
                }
                if (r.maxRedirects != null) {
                    this._maxRedirects = Math.max(r.maxRedirects, 0);
                }
                if (r.keepAlive != null) {
                    this._keepAlive = r.keepAlive;
                }
                if (r.allowRetries != null) {
                    this._allowRetries = r.allowRetries;
                }
                if (r.maxRetries != null) {
                    this._maxRetries = r.maxRetries;
                }
            }
        }
        options(e, t) {
            return this.request("OPTIONS", e, null, t || {});
        }
        get(e, t) {
            return this.request("GET", e, null, t || {});
        }
        del(e, t) {
            return this.request("DELETE", e, null, t || {});
        }
        post(e, t, r) {
            return this.request("POST", e, t, r || {});
        }
        patch(e, t, r) {
            return this.request("PATCH", e, t, r || {});
        }
        put(e, t, r) {
            return this.request("PUT", e, t, r || {});
        }
        head(e, t) {
            return this.request("HEAD", e, null, t || {});
        }
        sendStream(e, t, r, o) {
            return this.request(e, t, r, o);
        }
        async getJson(e, t = {}) {
            t[s.Accept] = this._getExistingOrDefaultHeader(t, s.Accept, n.ApplicationJson);
            let r = await this.get(e, t);
            return this._processResponse(r, this.requestOptions);
        }
        async postJson(e, t, r = {}) {
            let o = JSON.stringify(t, null, 2);
            r[s.Accept] = this._getExistingOrDefaultHeader(r, s.Accept, n.ApplicationJson);
            r[s.ContentType] = this._getExistingOrDefaultHeader(r, s.ContentType, n.ApplicationJson);
            let i = await this.post(e, o, r);
            return this._processResponse(i, this.requestOptions);
        }
        async putJson(e, t, r = {}) {
            let o = JSON.stringify(t, null, 2);
            r[s.Accept] = this._getExistingOrDefaultHeader(r, s.Accept, n.ApplicationJson);
            r[s.ContentType] = this._getExistingOrDefaultHeader(r, s.ContentType, n.ApplicationJson);
            let i = await this.put(e, o, r);
            return this._processResponse(i, this.requestOptions);
        }
        async patchJson(e, t, r = {}) {
            let o = JSON.stringify(t, null, 2);
            r[s.Accept] = this._getExistingOrDefaultHeader(r, s.Accept, n.ApplicationJson);
            r[s.ContentType] = this._getExistingOrDefaultHeader(r, s.ContentType, n.ApplicationJson);
            let i = await this.patch(e, o, r);
            return this._processResponse(i, this.requestOptions);
        }
        async request(e, t, r, s) {
            if (this._disposed) {
                throw new Error("Client has already been disposed.");
            }
            let n = new URL(t);
            let i = this._prepareRequest(e, n, s);
            let l = this._allowRetries && c.indexOf(e) != -1 ? this._maxRetries + 1 : 1;
            let p = 0;
            let d;
            while (p < l) {
                d = await this.requestRaw(i, r);
                if (d && d.message && d.message.statusCode === o.Unauthorized) {
                    let e;
                    for (let t = 0; t < this.handlers.length; t++) {
                        if (this.handlers[t].canHandleAuthentication(d)) {
                            e = this.handlers[t];
                            break;
                        }
                    }
                    if (e) {
                        return e.handleAuthentication(this, i, r);
                    } else {
                        return d;
                    }
                }
                let t = this._maxRedirects;
                while (a.indexOf(d.message.statusCode) != -1 && this._allowRedirects && t > 0) {
                    const o = d.message.headers["location"];
                    if (!o) {
                        break;
                    }
                    let a = new URL(o);
                    if (n.protocol == "https:" && n.protocol != a.protocol && !this._allowRedirectDowngrade) {
                        throw new Error("Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.");
                    }
                    await d.readBody();
                    if (a.hostname !== n.hostname) {
                        for (let e in s) {
                            if (e.toLowerCase() === "authorization") {
                                delete s[e];
                            }
                        }
                    }
                    i = this._prepareRequest(e, a, s);
                    d = await this.requestRaw(i, r);
                    t--;
                }
                if (u.indexOf(d.message.statusCode) == -1) {
                    return d;
                }
                p += 1;
                if (p < l) {
                    await d.readBody();
                    await this._performExponentialBackoff(p);
                }
            }
            return d;
        }
        dispose() {
            if (this._agent) {
                this._agent.destroy();
            }
            this._disposed = true;
        }
        requestRaw(e, t) {
            return new Promise(((r, o) => {
                let s = function(e, t) {
                    if (e) {
                        o(e);
                    }
                    r(t);
                };
                this.requestRawWithCallback(e, t, s);
            }));
        }
        requestRawWithCallback(e, t, r) {
            let o;
            if (typeof t === "string") {
                e.options.headers["Content-Length"] = Buffer.byteLength(t, "utf8");
            }
            let s = false;
            let n = (e, t) => {
                if (!s) {
                    s = true;
                    r(e, t);
                }
            };
            let i = e.httpModule.request(e.options, (e => {
                let t = new f(e);
                n(null, t);
            }));
            i.on("socket", (e => {
                o = e;
            }));
            i.setTimeout(this._socketTimeout || 3 * 6e4, (() => {
                if (o) {
                    o.end();
                }
                n(new Error("Request timeout: " + e.options.path), null);
            }));
            i.on("error", (function(e) {
                n(e, null);
            }));
            if (t && typeof t === "string") {
                i.write(t, "utf8");
            }
            if (t && typeof t !== "string") {
                t.on("close", (function() {
                    i.end();
                }));
                t.pipe(i);
            } else {
                i.end();
            }
        }
        getAgent(e) {
            let t = new URL(e);
            return this._getAgent(t);
        }
        _prepareRequest(e, t, r) {
            const o = {};
            o.parsedUrl = t;
            const s = o.parsedUrl.protocol === "https:";
            o.httpModule = s ? y["default"] : w["default"];
            const n = s ? 443 : 80;
            o.options = {};
            o.options.host = o.parsedUrl.hostname;
            o.options.port = o.parsedUrl.port ? parseInt(o.parsedUrl.port) : n;
            o.options.path = (o.parsedUrl.pathname || "") + (o.parsedUrl.search || "");
            o.options.method = e;
            o.options.headers = this._mergeHeaders(r);
            if (this.userAgent != null) {
                o.options.headers["user-agent"] = this.userAgent;
            }
            o.options.agent = this._getAgent(o.parsedUrl);
            if (this.handlers) {
                this.handlers.forEach((e => {
                    e.prepareRequest(o.options);
                }));
            }
            return o;
        }
        _mergeHeaders(e) {
            const t = e => Object.keys(e).reduce(((t, r) => (t[r.toLowerCase()] = e[r], t)), {});
            if (this.requestOptions && this.requestOptions.headers) {
                return Object.assign({}, t(this.requestOptions.headers), t(e));
            }
            return t(e || {});
        }
        _getExistingOrDefaultHeader(e, t, r) {
            const o = e => Object.keys(e).reduce(((t, r) => (t[r.toLowerCase()] = e[r], t)), {});
            let s;
            if (this.requestOptions && this.requestOptions.headers) {
                s = o(this.requestOptions.headers)[t];
            }
            return e[t] || s || r;
        }
        _getAgent(e) {
            let t;
            let o = re.getProxyUrl(e);
            let s = o && o.hostname;
            if (this._keepAlive && s) {
                t = this._proxyAgent;
            }
            if (this._keepAlive && !s) {
                t = this._agent;
            }
            if (!!t) {
                return t;
            }
            const n = e.protocol === "https:";
            let i = 100;
            if (!!this.requestOptions) {
                i = this.requestOptions.maxSockets || w["default"].globalAgent.maxSockets;
            }
            if (s) {
                if (!r) {
                    r = we;
                }
                const e = {
                    maxSockets: i,
                    keepAlive: this._keepAlive,
                    proxy: {
                        proxyAuth: `${o.username}:${o.password}`,
                        host: o.hostname,
                        port: o.port
                    }
                };
                let s;
                const a = o.protocol === "https:";
                if (n) {
                    s = a ? r.httpsOverHttps : r.httpsOverHttp;
                } else {
                    s = a ? r.httpOverHttps : r.httpOverHttp;
                }
                t = s(e);
                this._proxyAgent = t;
            }
            if (this._keepAlive && !t) {
                const e = {
                    keepAlive: this._keepAlive,
                    maxSockets: i
                };
                t = n ? new y["default"].Agent(e) : new w["default"].Agent(e);
                this._agent = t;
            }
            if (!t) {
                t = n ? y["default"].globalAgent : w["default"].globalAgent;
            }
            if (n && this._ignoreSslError) {
                t.options = Object.assign(t.options || {}, {
                    rejectUnauthorized: false
                });
            }
            return t;
        }
        _performExponentialBackoff(e) {
            e = Math.min(l, e);
            const t = p * Math.pow(2, e);
            return new Promise((e => setTimeout((() => e()), t)));
        }
        static dateTimeDeserializer(e, t) {
            if (typeof t === "string") {
                let e = new Date(t);
                if (!isNaN(e.valueOf())) {
                    return e;
                }
            }
            return t;
        }
        async _processResponse(e, t) {
            return new Promise((async (r, s) => {
                const n = e.message.statusCode;
                const i = {
                    statusCode: n,
                    result: null,
                    headers: {}
                };
                if (n == o.NotFound) {
                    r(i);
                }
                let a;
                let u;
                try {
                    u = await e.readBody();
                    if (u && u.length > 0) {
                        if (t && t.deserializeDates) {
                            a = JSON.parse(u, h.dateTimeDeserializer);
                        } else {
                            a = JSON.parse(u);
                        }
                        i.result = a;
                    }
                    i.headers = e.message.headers;
                } catch (e) {}
                if (n > 299) {
                    let e;
                    if (a && a.message) {
                        e = a.message;
                    } else if (u && u.length > 0) {
                        e = u;
                    } else {
                        e = "Failed request: (" + n + ")";
                    }
                    let t = new d(e, n);
                    t.result = i.result;
                    s(t);
                } else {
                    r(i);
                }
            }));
        }
    }
    t.HttpClient = h;
}));

var ve = G((function(e, t) {
    var r = S && S.__createBinding || (Object.create ? function(e, t, r, o) {
        if (o === undefined) o = r;
        Object.defineProperty(e, o, {
            enumerable: true,
            get: function() {
                return t[r];
            }
        });
    } : function(e, t, r, o) {
        if (o === undefined) o = r;
        e[o] = t[r];
    });
    var o = S && S.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: true,
            value: t
        });
    } : function(e, t) {
        e["default"] = t;
    });
    var s = S && S.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) for (var s in e) if (Object.hasOwnProperty.call(e, s)) r(t, e, s);
        o(t, e);
        return t;
    };
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    t.getApiBaseUrl = t.getProxyAgent = t.getAuthString = void 0;
    const n = s(ye);
    function i(e, t) {
        if (!e && !t.auth) {
            throw new Error("Parameter token or opts.auth is required");
        } else if (e && t.auth) {
            throw new Error("Parameters token and opts.auth may not both be specified");
        }
        return typeof t.auth === "string" ? t.auth : `token ${e}`;
    }
    t.getAuthString = i;
    function a(e) {
        const t = new n.HttpClient;
        return t.getAgent(e);
    }
    t.getProxyAgent = a;
    function u() {
        return process.env["GITHUB_API_URL"] || "https://api.github.com";
    }
    t.getApiBaseUrl = u;
}));

function Te() {
    if (typeof navigator === "object" && "userAgent" in navigator) {
        return navigator.userAgent;
    }
    if (typeof process === "object" && "version" in process) {
        return `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`;
    }
    return "<environment undetectable>";
}

var Ee = _e;

function _e(e, t, r, o) {
    if (typeof r !== "function") {
        throw new Error("method for before hook must be a function");
    }
    if (!o) {
        o = {};
    }
    if (Array.isArray(t)) {
        return t.reverse().reduce((function(t, r) {
            return _e.bind(null, e, r, t, o);
        }), r)();
    }
    return Promise.resolve().then((function() {
        if (!e.registry[t]) {
            return r(o);
        }
        return e.registry[t].reduce((function(e, t) {
            return t.hook.bind(null, e, o);
        }), r)();
    }));
}

var Oe = Pe;

function Pe(e, t, r, o) {
    var s = o;
    if (!e.registry[r]) {
        e.registry[r] = [];
    }
    if (t === "before") {
        o = function(e, t) {
            return Promise.resolve().then(s.bind(null, t)).then(e.bind(null, t));
        };
    }
    if (t === "after") {
        o = function(e, t) {
            var r;
            return Promise.resolve().then(e.bind(null, t)).then((function(e) {
                r = e;
                return s(r, t);
            })).then((function() {
                return r;
            }));
        };
    }
    if (t === "error") {
        o = function(e, t) {
            return Promise.resolve().then(e.bind(null, t)).catch((function(e) {
                return s(e, t);
            }));
        };
    }
    e.registry[r].push({
        hook: o,
        orig: s
    });
}

var ke = Se;

function Se(e, t, r) {
    if (!e.registry[t]) {
        return;
    }
    var o = e.registry[t].map((function(e) {
        return e.orig;
    })).indexOf(r);
    if (o === -1) {
        return;
    }
    e.registry[t].splice(o, 1);
}

var Ae = Function.bind;

var Ge = Ae.bind(Ae);

function Ce(e, t, r) {
    var o = Ge(ke, null).apply(null, r ? [ t, r ] : [ t ]);
    e.api = {
        remove: o
    };
    e.remove = o;
    [ "before", "error", "after", "wrap" ].forEach((function(o) {
        var s = r ? [ t, o, r ] : [ t, o ];
        e[o] = e.api[o] = Ge(Oe, null).apply(null, s);
    }));
}

function je() {
    var e = "h";
    var t = {
        registry: {}
    };
    var r = Ee.bind(null, t, e);
    Ce(r, t, e);
    return r;
}

function Re() {
    var e = {
        registry: {}
    };
    var t = Ee.bind(null, e);
    Ce(t, e);
    return t;
}

var xe = false;

function Fe() {
    if (!xe) {
        console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4');
        xe = true;
    }
    return Re();
}

Fe.Singular = je.bind();

Fe.Collection = Re.bind();

var Ue = Fe;

var De = Fe;

var $e = Fe.Singular;

var qe = Fe.Collection;

Ue.Hook = De;

Ue.Singular = $e;

Ue.Collection = qe;

/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ function Le(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
}

function Be(e) {
    var t, r;
    if (Le(e) === false) return false;
    t = e.constructor;
    if (t === undefined) return true;
    r = t.prototype;
    if (Le(r) === false) return false;
    if (r.hasOwnProperty("isPrototypeOf") === false) {
        return false;
    }
    return true;
}

function Ie(e) {
    if (!e) {
        return {};
    }
    return Object.keys(e).reduce(((t, r) => {
        t[r.toLowerCase()] = e[r];
        return t;
    }), {});
}

function ze(e, t) {
    const r = Object.assign({}, e);
    Object.keys(t).forEach((o => {
        if (Be(t[o])) {
            if (!(o in e)) Object.assign(r, {
                [o]: t[o]
            }); else r[o] = ze(e[o], t[o]);
        } else {
            Object.assign(r, {
                [o]: t[o]
            });
        }
    }));
    return r;
}

function He(e) {
    for (const t in e) {
        if (e[t] === undefined) {
            delete e[t];
        }
    }
    return e;
}

function Me(e, t, r) {
    if (typeof t === "string") {
        let [e, o] = t.split(" ");
        r = Object.assign(o ? {
            method: e,
            url: o
        } : {
            url: e
        }, r);
    } else {
        r = Object.assign({}, t);
    }
    r.headers = Ie(r.headers);
    He(r);
    He(r.headers);
    const o = ze(e || {}, r);
    if (e && e.mediaType.previews.length) {
        o.mediaType.previews = e.mediaType.previews.filter((e => !o.mediaType.previews.includes(e))).concat(o.mediaType.previews);
    }
    o.mediaType.previews = o.mediaType.previews.map((e => e.replace(/-preview/, "")));
    return o;
}

function Ne(e, t) {
    const r = /\?/.test(e) ? "&" : "?";
    const o = Object.keys(t);
    if (o.length === 0) {
        return e;
    }
    return e + r + o.map((e => {
        if (e === "q") {
            return "q=" + t.q.split("+").map(encodeURIComponent).join("+");
        }
        return `${e}=${encodeURIComponent(t[e])}`;
    })).join("&");
}

const We = /\{[^}]+\}/g;

function Ve(e) {
    return e.replace(/^\W+|\W+$/g, "").split(/,/);
}

function Je(e) {
    const t = e.match(We);
    if (!t) {
        return [];
    }
    return t.map(Ve).reduce(((e, t) => e.concat(t)), []);
}

function Ke(e, t) {
    return Object.keys(e).filter((e => !t.includes(e))).reduce(((t, r) => {
        t[r] = e[r];
        return t;
    }), {});
}

function Ye(e) {
    return e.split(/(%[0-9A-Fa-f]{2})/g).map((function(e) {
        if (!/%[0-9A-Fa-f]/.test(e)) {
            e = encodeURI(e).replace(/%5B/g, "[").replace(/%5D/g, "]");
        }
        return e;
    })).join("");
}

function Ze(e) {
    return encodeURIComponent(e).replace(/[!'()*]/g, (function(e) {
        return "%" + e.charCodeAt(0).toString(16).toUpperCase();
    }));
}

function Qe(e, t, r) {
    t = e === "+" || e === "#" ? Ye(t) : Ze(t);
    if (r) {
        return Ze(r) + "=" + t;
    } else {
        return t;
    }
}

function Xe(e) {
    return e !== undefined && e !== null;
}

function et(e) {
    return e === ";" || e === "&" || e === "?";
}

function tt(e, t, r, o) {
    var s = e[r], n = [];
    if (Xe(s) && s !== "") {
        if (typeof s === "string" || typeof s === "number" || typeof s === "boolean") {
            s = s.toString();
            if (o && o !== "*") {
                s = s.substring(0, parseInt(o, 10));
            }
            n.push(Qe(t, s, et(t) ? r : ""));
        } else {
            if (o === "*") {
                if (Array.isArray(s)) {
                    s.filter(Xe).forEach((function(e) {
                        n.push(Qe(t, e, et(t) ? r : ""));
                    }));
                } else {
                    Object.keys(s).forEach((function(e) {
                        if (Xe(s[e])) {
                            n.push(Qe(t, s[e], e));
                        }
                    }));
                }
            } else {
                const e = [];
                if (Array.isArray(s)) {
                    s.filter(Xe).forEach((function(r) {
                        e.push(Qe(t, r));
                    }));
                } else {
                    Object.keys(s).forEach((function(r) {
                        if (Xe(s[r])) {
                            e.push(Ze(r));
                            e.push(Qe(t, s[r].toString()));
                        }
                    }));
                }
                if (et(t)) {
                    n.push(Ze(r) + "=" + e.join(","));
                } else if (e.length !== 0) {
                    n.push(e.join(","));
                }
            }
        }
    } else {
        if (t === ";") {
            if (Xe(s)) {
                n.push(Ze(r));
            }
        } else if (s === "" && (t === "&" || t === "?")) {
            n.push(Ze(r) + "=");
        } else if (s === "") {
            n.push("");
        }
    }
    return n;
}

function rt(e) {
    return {
        expand: ot.bind(null, e)
    };
}

function ot(e, t) {
    var r = [ "+", "#", ".", "/", ";", "?", "&" ];
    return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, (function(e, o, s) {
        if (o) {
            let e = "";
            const s = [];
            if (r.indexOf(o.charAt(0)) !== -1) {
                e = o.charAt(0);
                o = o.substr(1);
            }
            o.split(/,/g).forEach((function(r) {
                var o = /([^:\*]*)(?::(\d+)|(\*))?/.exec(r);
                s.push(tt(t, e, o[1], o[2] || o[3]));
            }));
            if (e && e !== "+") {
                var n = ",";
                if (e === "?") {
                    n = "&";
                } else if (e !== "#") {
                    n = e;
                }
                return (s.length !== 0 ? e : "") + s.join(n);
            } else {
                return s.join(",");
            }
        } else {
            return Ye(s);
        }
    }));
}

function st(e) {
    let t = e.method.toUpperCase();
    let r = (e.url || "/").replace(/:([a-z]\w+)/g, "{$1}");
    let o = Object.assign({}, e.headers);
    let s;
    let n = Ke(e, [ "method", "baseUrl", "url", "headers", "request", "mediaType" ]);
    const i = Je(r);
    r = rt(r).expand(n);
    if (!/^http/.test(r)) {
        r = e.baseUrl + r;
    }
    const a = Object.keys(e).filter((e => i.includes(e))).concat("baseUrl");
    const u = Ke(n, a);
    const c = /application\/octet-stream/i.test(o.accept);
    if (!c) {
        if (e.mediaType.format) {
            o.accept = o.accept.split(/,/).map((t => t.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, `application/vnd$1$2.${e.mediaType.format}`))).join(",");
        }
        if (e.mediaType.previews.length) {
            const t = o.accept.match(/[\w-]+(?=-preview)/g) || [];
            o.accept = t.concat(e.mediaType.previews).map((t => {
                const r = e.mediaType.format ? `.${e.mediaType.format}` : "+json";
                return `application/vnd.github.${t}-preview${r}`;
            })).join(",");
        }
    }
    if ([ "GET", "HEAD" ].includes(t)) {
        r = Ne(r, u);
    } else {
        if ("data" in u) {
            s = u.data;
        } else {
            if (Object.keys(u).length) {
                s = u;
            } else {
                o["content-length"] = 0;
            }
        }
    }
    if (!o["content-type"] && typeof s !== "undefined") {
        o["content-type"] = "application/json; charset=utf-8";
    }
    if ([ "PATCH", "PUT" ].includes(t) && typeof s === "undefined") {
        s = "";
    }
    return Object.assign({
        method: t,
        url: r,
        headers: o
    }, typeof s !== "undefined" ? {
        body: s
    } : null, e.request ? {
        request: e.request
    } : null);
}

function nt(e, t, r) {
    return st(Me(e, t, r));
}

function it(e, t) {
    const r = Me(e, t);
    const o = nt.bind(null, r);
    return Object.assign(o, {
        DEFAULTS: r,
        defaults: it.bind(null, r),
        merge: Me.bind(null, r),
        parse: st
    });
}

const at = "6.0.10";

const ut = `octokit-endpoint.js/${at} ${Te()}`;

const ct = {
    method: "GET",
    baseUrl: "https://api.github.com",
    headers: {
        accept: "application/vnd.github.v3+json",
        "user-agent": ut
    },
    mediaType: {
        format: "",
        previews: []
    }
};

const lt = it(null, ct);

const pt = _["default"].Readable;

const dt = Symbol("buffer");

const ft = Symbol("type");

class mt {
    constructor() {
        this[ft] = "";
        const e = arguments[0];
        const t = arguments[1];
        const r = [];
        let o = 0;
        if (e) {
            const t = e;
            const s = Number(t.length);
            for (let e = 0; e < s; e++) {
                const s = t[e];
                let n;
                if (s instanceof Buffer) {
                    n = s;
                } else if (ArrayBuffer.isView(s)) {
                    n = Buffer.from(s.buffer, s.byteOffset, s.byteLength);
                } else if (s instanceof ArrayBuffer) {
                    n = Buffer.from(s);
                } else if (s instanceof mt) {
                    n = s[dt];
                } else {
                    n = Buffer.from(typeof s === "string" ? s : String(s));
                }
                o += n.length;
                r.push(n);
            }
        }
        this[dt] = Buffer.concat(r);
        let s = t && t.type !== undefined && String(t.type).toLowerCase();
        if (s && !/[^\u0020-\u007E]/.test(s)) {
            this[ft] = s;
        }
    }
    get size() {
        return this[dt].length;
    }
    get type() {
        return this[ft];
    }
    text() {
        return Promise.resolve(this[dt].toString());
    }
    arrayBuffer() {
        const e = this[dt];
        const t = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
        return Promise.resolve(t);
    }
    stream() {
        const e = new pt;
        e._read = function() {};
        e.push(this[dt]);
        e.push(null);
        return e;
    }
    toString() {
        return "[object Blob]";
    }
    slice() {
        const e = this.size;
        const t = arguments[0];
        const r = arguments[1];
        let o, s;
        if (t === undefined) {
            o = 0;
        } else if (t < 0) {
            o = Math.max(e + t, 0);
        } else {
            o = Math.min(t, e);
        }
        if (r === undefined) {
            s = e;
        } else if (r < 0) {
            s = Math.max(e + r, 0);
        } else {
            s = Math.min(r, e);
        }
        const n = Math.max(s - o, 0);
        const i = this[dt];
        const a = i.slice(o, o + n);
        const u = new mt([], {
            type: arguments[2]
        });
        u[dt] = a;
        return u;
    }
}

Object.defineProperties(mt.prototype, {
    size: {
        enumerable: true
    },
    type: {
        enumerable: true
    },
    slice: {
        enumerable: true
    }
});

Object.defineProperty(mt.prototype, Symbol.toStringTag, {
    value: "Blob",
    writable: false,
    enumerable: false,
    configurable: true
});

function ht(e, t, r) {
    Error.call(this, e);
    this.message = e;
    this.type = t;
    if (r) {
        this.code = this.errno = r.code;
    }
    Error.captureStackTrace(this, this.constructor);
}

ht.prototype = Object.create(Error.prototype);

ht.prototype.constructor = ht;

ht.prototype.name = "FetchError";

let gt;

try {
    gt = require("encoding").convert;
} catch (e) {}

const bt = Symbol("Body internals");

const wt = _["default"].PassThrough;

function yt(e) {
    var t = this;
    var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, o = r.size;
    let s = o === undefined ? 0 : o;
    var n = r.timeout;
    let i = n === undefined ? 0 : n;
    if (e == null) {
        e = null;
    } else if (Et(e)) {
        e = Buffer.from(e.toString());
    } else if (_t(e)) ; else if (Buffer.isBuffer(e)) ; else if (Object.prototype.toString.call(e) === "[object ArrayBuffer]") {
        e = Buffer.from(e);
    } else if (ArrayBuffer.isView(e)) {
        e = Buffer.from(e.buffer, e.byteOffset, e.byteLength);
    } else if (e instanceof _["default"]) ; else {
        e = Buffer.from(String(e));
    }
    this[bt] = {
        body: e,
        disturbed: false,
        error: null
    };
    this.size = s;
    this.timeout = i;
    if (e instanceof _["default"]) {
        e.on("error", (function(e) {
            const r = e.name === "AbortError" ? e : new ht(`Invalid response body while trying to fetch ${t.url}: ${e.message}`, "system", e);
            t[bt].error = r;
        }));
    }
}

yt.prototype = {
    get body() {
        return this[bt].body;
    },
    get bodyUsed() {
        return this[bt].disturbed;
    },
    arrayBuffer() {
        return vt.call(this).then((function(e) {
            return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
        }));
    },
    blob() {
        let e = this.headers && this.headers.get("content-type") || "";
        return vt.call(this).then((function(t) {
            return Object.assign(new mt([], {
                type: e.toLowerCase()
            }), {
                [dt]: t
            });
        }));
    },
    json() {
        var e = this;
        return vt.call(this).then((function(t) {
            try {
                return JSON.parse(t.toString());
            } catch (t) {
                return yt.Promise.reject(new ht(`invalid json response body at ${e.url} reason: ${t.message}`, "invalid-json"));
            }
        }));
    },
    text() {
        return vt.call(this).then((function(e) {
            return e.toString();
        }));
    },
    buffer() {
        return vt.call(this);
    },
    textConverted() {
        var e = this;
        return vt.call(this).then((function(t) {
            return Tt(t, e.headers);
        }));
    }
};

Object.defineProperties(yt.prototype, {
    body: {
        enumerable: true
    },
    bodyUsed: {
        enumerable: true
    },
    arrayBuffer: {
        enumerable: true
    },
    blob: {
        enumerable: true
    },
    json: {
        enumerable: true
    },
    text: {
        enumerable: true
    }
});

yt.mixIn = function(e) {
    for (const t of Object.getOwnPropertyNames(yt.prototype)) {
        if (!(t in e)) {
            const r = Object.getOwnPropertyDescriptor(yt.prototype, t);
            Object.defineProperty(e, t, r);
        }
    }
};

function vt() {
    var e = this;
    if (this[bt].disturbed) {
        return yt.Promise.reject(new TypeError(`body used already for: ${this.url}`));
    }
    this[bt].disturbed = true;
    if (this[bt].error) {
        return yt.Promise.reject(this[bt].error);
    }
    let t = this.body;
    if (t === null) {
        return yt.Promise.resolve(Buffer.alloc(0));
    }
    if (_t(t)) {
        t = t.stream();
    }
    if (Buffer.isBuffer(t)) {
        return yt.Promise.resolve(t);
    }
    if (!(t instanceof _["default"])) {
        return yt.Promise.resolve(Buffer.alloc(0));
    }
    let r = [];
    let o = 0;
    let s = false;
    return new yt.Promise((function(n, i) {
        let a;
        if (e.timeout) {
            a = setTimeout((function() {
                s = true;
                i(new ht(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`, "body-timeout"));
            }), e.timeout);
        }
        t.on("error", (function(t) {
            if (t.name === "AbortError") {
                s = true;
                i(t);
            } else {
                i(new ht(`Invalid response body while trying to fetch ${e.url}: ${t.message}`, "system", t));
            }
        }));
        t.on("data", (function(t) {
            if (s || t === null) {
                return;
            }
            if (e.size && o + t.length > e.size) {
                s = true;
                i(new ht(`content size at ${e.url} over limit: ${e.size}`, "max-size"));
                return;
            }
            o += t.length;
            r.push(t);
        }));
        t.on("end", (function() {
            if (s) {
                return;
            }
            clearTimeout(a);
            try {
                n(Buffer.concat(r, o));
            } catch (t) {
                i(new ht(`Could not create Buffer from response body for ${e.url}: ${t.message}`, "system", t));
            }
        }));
    }));
}

function Tt(e, t) {
    if (typeof gt !== "function") {
        throw new Error("The package `encoding` must be installed to use the textConverted() function");
    }
    const r = t.get("content-type");
    let o = "utf-8";
    let s, n;
    if (r) {
        s = /charset=([^;]*)/i.exec(r);
    }
    n = e.slice(0, 1024).toString();
    if (!s && n) {
        s = /<meta.+?charset=(['"])(.+?)\1/i.exec(n);
    }
    if (!s && n) {
        s = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(n);
        if (!s) {
            s = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(n);
            if (s) {
                s.pop();
            }
        }
        if (s) {
            s = /charset=(.*)/i.exec(s.pop());
        }
    }
    if (!s && n) {
        s = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(n);
    }
    if (s) {
        o = s.pop();
        if (o === "gb2312" || o === "gbk") {
            o = "gb18030";
        }
    }
    return gt(e, "UTF-8", o).toString();
}

function Et(e) {
    if (typeof e !== "object" || typeof e.append !== "function" || typeof e.delete !== "function" || typeof e.get !== "function" || typeof e.getAll !== "function" || typeof e.has !== "function" || typeof e.set !== "function") {
        return false;
    }
    return e.constructor.name === "URLSearchParams" || Object.prototype.toString.call(e) === "[object URLSearchParams]" || typeof e.sort === "function";
}

function _t(e) {
    return typeof e === "object" && typeof e.arrayBuffer === "function" && typeof e.type === "string" && typeof e.stream === "function" && typeof e.constructor === "function" && typeof e.constructor.name === "string" && /^(Blob|File)$/.test(e.constructor.name) && /^(Blob|File)$/.test(e[Symbol.toStringTag]);
}

function Ot(e) {
    let t, r;
    let o = e.body;
    if (e.bodyUsed) {
        throw new Error("cannot clone body after it is used");
    }
    if (o instanceof _["default"] && typeof o.getBoundary !== "function") {
        t = new wt;
        r = new wt;
        o.pipe(t);
        o.pipe(r);
        e[bt].body = t;
        o = r;
    }
    return o;
}

function Pt(e) {
    if (e === null) {
        return null;
    } else if (typeof e === "string") {
        return "text/plain;charset=UTF-8";
    } else if (Et(e)) {
        return "application/x-www-form-urlencoded;charset=UTF-8";
    } else if (_t(e)) {
        return e.type || null;
    } else if (Buffer.isBuffer(e)) {
        return null;
    } else if (Object.prototype.toString.call(e) === "[object ArrayBuffer]") {
        return null;
    } else if (ArrayBuffer.isView(e)) {
        return null;
    } else if (typeof e.getBoundary === "function") {
        return `multipart/form-data;boundary=${e.getBoundary()}`;
    } else if (e instanceof _["default"]) {
        return null;
    } else {
        return "text/plain;charset=UTF-8";
    }
}

function kt(e) {
    const t = e.body;
    if (t === null) {
        return 0;
    } else if (_t(t)) {
        return t.size;
    } else if (Buffer.isBuffer(t)) {
        return t.length;
    } else if (t && typeof t.getLengthSync === "function") {
        if (t._lengthRetrievers && t._lengthRetrievers.length == 0 || t.hasKnownLength && t.hasKnownLength()) {
            return t.getLengthSync();
        }
        return null;
    } else {
        return null;
    }
}

function St(e, t) {
    const r = t.body;
    if (r === null) {
        e.end();
    } else if (_t(r)) {
        r.stream().pipe(e);
    } else if (Buffer.isBuffer(r)) {
        e.write(r);
        e.end();
    } else {
        r.pipe(e);
    }
}

yt.Promise = global.Promise;

const At = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;

const Gt = /[^\t\x20-\x7e\x80-\xff]/;

function Ct(e) {
    e = `${e}`;
    if (At.test(e) || e === "") {
        throw new TypeError(`${e} is not a legal HTTP header name`);
    }
}

function jt(e) {
    e = `${e}`;
    if (Gt.test(e)) {
        throw new TypeError(`${e} is not a legal HTTP header value`);
    }
}

function Rt(e, t) {
    t = t.toLowerCase();
    for (const r in e) {
        if (r.toLowerCase() === t) {
            return r;
        }
    }
    return undefined;
}

const xt = Symbol("map");

class Ft {
    constructor() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        this[xt] = Object.create(null);
        if (e instanceof Ft) {
            const t = e.raw();
            const r = Object.keys(t);
            for (const e of r) {
                for (const r of t[e]) {
                    this.append(e, r);
                }
            }
            return;
        }
        if (e == null) ; else if (typeof e === "object") {
            const t = e[Symbol.iterator];
            if (t != null) {
                if (typeof t !== "function") {
                    throw new TypeError("Header pairs must be iterable");
                }
                const r = [];
                for (const t of e) {
                    if (typeof t !== "object" || typeof t[Symbol.iterator] !== "function") {
                        throw new TypeError("Each header pair must be iterable");
                    }
                    r.push(Array.from(t));
                }
                for (const e of r) {
                    if (e.length !== 2) {
                        throw new TypeError("Each header pair must be a name/value tuple");
                    }
                    this.append(e[0], e[1]);
                }
            } else {
                for (const t of Object.keys(e)) {
                    const r = e[t];
                    this.append(t, r);
                }
            }
        } else {
            throw new TypeError("Provided initializer must be an object");
        }
    }
    get(e) {
        e = `${e}`;
        Ct(e);
        const t = Rt(this[xt], e);
        if (t === undefined) {
            return null;
        }
        return this[xt][t].join(", ");
    }
    forEach(e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        let r = Ut(this);
        let o = 0;
        while (o < r.length) {
            var s = r[o];
            const n = s[0], i = s[1];
            e.call(t, i, n, this);
            r = Ut(this);
            o++;
        }
    }
    set(e, t) {
        e = `${e}`;
        t = `${t}`;
        Ct(e);
        jt(t);
        const r = Rt(this[xt], e);
        this[xt][r !== undefined ? r : e] = [ t ];
    }
    append(e, t) {
        e = `${e}`;
        t = `${t}`;
        Ct(e);
        jt(t);
        const r = Rt(this[xt], e);
        if (r !== undefined) {
            this[xt][r].push(t);
        } else {
            this[xt][e] = [ t ];
        }
    }
    has(e) {
        e = `${e}`;
        Ct(e);
        return Rt(this[xt], e) !== undefined;
    }
    delete(e) {
        e = `${e}`;
        Ct(e);
        const t = Rt(this[xt], e);
        if (t !== undefined) {
            delete this[xt][t];
        }
    }
    raw() {
        return this[xt];
    }
    keys() {
        return $t(this, "key");
    }
    values() {
        return $t(this, "value");
    }
    [Symbol.iterator]() {
        return $t(this, "key+value");
    }
}

Ft.prototype.entries = Ft.prototype[Symbol.iterator];

Object.defineProperty(Ft.prototype, Symbol.toStringTag, {
    value: "Headers",
    writable: false,
    enumerable: false,
    configurable: true
});

Object.defineProperties(Ft.prototype, {
    get: {
        enumerable: true
    },
    forEach: {
        enumerable: true
    },
    set: {
        enumerable: true
    },
    append: {
        enumerable: true
    },
    has: {
        enumerable: true
    },
    delete: {
        enumerable: true
    },
    keys: {
        enumerable: true
    },
    values: {
        enumerable: true
    },
    entries: {
        enumerable: true
    }
});

function Ut(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "key+value";
    const r = Object.keys(e[xt]).sort();
    return r.map(t === "key" ? function(e) {
        return e.toLowerCase();
    } : t === "value" ? function(t) {
        return e[xt][t].join(", ");
    } : function(t) {
        return [ t.toLowerCase(), e[xt][t].join(", ") ];
    });
}

const Dt = Symbol("internal");

function $t(e, t) {
    const r = Object.create(qt);
    r[Dt] = {
        target: e,
        kind: t,
        index: 0
    };
    return r;
}

const qt = Object.setPrototypeOf({
    next() {
        if (!this || Object.getPrototypeOf(this) !== qt) {
            throw new TypeError("Value of `this` is not a HeadersIterator");
        }
        var e = this[Dt];
        const t = e.target, r = e.kind, o = e.index;
        const s = Ut(t, r);
        const n = s.length;
        if (o >= n) {
            return {
                value: undefined,
                done: true
            };
        }
        this[Dt].index = o + 1;
        return {
            value: s[o],
            done: false
        };
    }
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(qt, Symbol.toStringTag, {
    value: "HeadersIterator",
    writable: false,
    enumerable: false,
    configurable: true
});

function Lt(e) {
    const t = Object.assign({
        __proto__: null
    }, e[xt]);
    const r = Rt(e[xt], "Host");
    if (r !== undefined) {
        t[r] = t[r][0];
    }
    return t;
}

function Bt(e) {
    const t = new Ft;
    for (const r of Object.keys(e)) {
        if (At.test(r)) {
            continue;
        }
        if (Array.isArray(e[r])) {
            for (const o of e[r]) {
                if (Gt.test(o)) {
                    continue;
                }
                if (t[xt][r] === undefined) {
                    t[xt][r] = [ o ];
                } else {
                    t[xt][r].push(o);
                }
            }
        } else if (!Gt.test(e[r])) {
            t[xt][r] = [ e[r] ];
        }
    }
    return t;
}

const It = Symbol("Response internals");

const zt = w["default"].STATUS_CODES;

class Ht {
    constructor() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        yt.call(this, e, t);
        const r = t.status || 200;
        const o = new Ft(t.headers);
        if (e != null && !o.has("Content-Type")) {
            const t = Pt(e);
            if (t) {
                o.append("Content-Type", t);
            }
        }
        this[It] = {
            url: t.url,
            status: r,
            statusText: t.statusText || zt[r],
            headers: o,
            counter: t.counter
        };
    }
    get url() {
        return this[It].url || "";
    }
    get status() {
        return this[It].status;
    }
    get ok() {
        return this[It].status >= 200 && this[It].status < 300;
    }
    get redirected() {
        return this[It].counter > 0;
    }
    get statusText() {
        return this[It].statusText;
    }
    get headers() {
        return this[It].headers;
    }
    clone() {
        return new Ht(Ot(this), {
            url: this.url,
            status: this.status,
            statusText: this.statusText,
            headers: this.headers,
            ok: this.ok,
            redirected: this.redirected
        });
    }
}

yt.mixIn(Ht.prototype);

Object.defineProperties(Ht.prototype, {
    url: {
        enumerable: true
    },
    status: {
        enumerable: true
    },
    ok: {
        enumerable: true
    },
    redirected: {
        enumerable: true
    },
    statusText: {
        enumerable: true
    },
    headers: {
        enumerable: true
    },
    clone: {
        enumerable: true
    }
});

Object.defineProperty(Ht.prototype, Symbol.toStringTag, {
    value: "Response",
    writable: false,
    enumerable: false,
    configurable: true
});

const Mt = Symbol("Request internals");

const Nt = O["default"].parse;

const Wt = O["default"].format;

const Vt = "destroy" in _["default"].Readable.prototype;

function Jt(e) {
    return typeof e === "object" && typeof e[Mt] === "object";
}

function Kt(e) {
    const t = e && typeof e === "object" && Object.getPrototypeOf(e);
    return !!(t && t.constructor.name === "AbortSignal");
}

class Yt {
    constructor(e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        let r;
        if (!Jt(e)) {
            if (e && e.href) {
                r = Nt(e.href);
            } else {
                r = Nt(`${e}`);
            }
            e = {};
        } else {
            r = Nt(e.url);
        }
        let o = t.method || e.method || "GET";
        o = o.toUpperCase();
        if ((t.body != null || Jt(e) && e.body !== null) && (o === "GET" || o === "HEAD")) {
            throw new TypeError("Request with GET/HEAD method cannot have body");
        }
        let s = t.body != null ? t.body : Jt(e) && e.body !== null ? Ot(e) : null;
        yt.call(this, s, {
            timeout: t.timeout || e.timeout || 0,
            size: t.size || e.size || 0
        });
        const n = new Ft(t.headers || e.headers || {});
        if (s != null && !n.has("Content-Type")) {
            const e = Pt(s);
            if (e) {
                n.append("Content-Type", e);
            }
        }
        let i = Jt(e) ? e.signal : null;
        if ("signal" in t) i = t.signal;
        if (i != null && !Kt(i)) {
            throw new TypeError("Expected signal to be an instanceof AbortSignal");
        }
        this[Mt] = {
            method: o,
            redirect: t.redirect || e.redirect || "follow",
            headers: n,
            parsedURL: r,
            signal: i
        };
        this.follow = t.follow !== undefined ? t.follow : e.follow !== undefined ? e.follow : 20;
        this.compress = t.compress !== undefined ? t.compress : e.compress !== undefined ? e.compress : true;
        this.counter = t.counter || e.counter || 0;
        this.agent = t.agent || e.agent;
    }
    get method() {
        return this[Mt].method;
    }
    get url() {
        return Wt(this[Mt].parsedURL);
    }
    get headers() {
        return this[Mt].headers;
    }
    get redirect() {
        return this[Mt].redirect;
    }
    get signal() {
        return this[Mt].signal;
    }
    clone() {
        return new Yt(this);
    }
}

yt.mixIn(Yt.prototype);

Object.defineProperty(Yt.prototype, Symbol.toStringTag, {
    value: "Request",
    writable: false,
    enumerable: false,
    configurable: true
});

Object.defineProperties(Yt.prototype, {
    method: {
        enumerable: true
    },
    url: {
        enumerable: true
    },
    headers: {
        enumerable: true
    },
    redirect: {
        enumerable: true
    },
    clone: {
        enumerable: true
    },
    signal: {
        enumerable: true
    }
});

function Zt(e) {
    const t = e[Mt].parsedURL;
    const r = new Ft(e[Mt].headers);
    if (!r.has("Accept")) {
        r.set("Accept", "*/*");
    }
    if (!t.protocol || !t.hostname) {
        throw new TypeError("Only absolute URLs are supported");
    }
    if (!/^https?:$/.test(t.protocol)) {
        throw new TypeError("Only HTTP(S) protocols are supported");
    }
    if (e.signal && e.body instanceof _["default"].Readable && !Vt) {
        throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");
    }
    let o = null;
    if (e.body == null && /^(POST|PUT)$/i.test(e.method)) {
        o = "0";
    }
    if (e.body != null) {
        const t = kt(e);
        if (typeof t === "number") {
            o = String(t);
        }
    }
    if (o) {
        r.set("Content-Length", o);
    }
    if (!r.has("User-Agent")) {
        r.set("User-Agent", "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)");
    }
    if (e.compress && !r.has("Accept-Encoding")) {
        r.set("Accept-Encoding", "gzip,deflate");
    }
    let s = e.agent;
    if (typeof s === "function") {
        s = s(t);
    }
    if (!r.has("Connection") && !s) {
        r.set("Connection", "close");
    }
    return Object.assign({}, t, {
        method: e.method,
        headers: Lt(r),
        agent: s
    });
}

function Qt(e) {
    Error.call(this, e);
    this.type = "aborted";
    this.message = e;
    Error.captureStackTrace(this, this.constructor);
}

Qt.prototype = Object.create(Error.prototype);

Qt.prototype.constructor = Qt;

Qt.prototype.name = "AbortError";

const Xt = _["default"].PassThrough;

const er = O["default"].resolve;

function tr(e, t) {
    if (!tr.Promise) {
        throw new Error("native promise missing, set fetch.Promise to your favorite alternative");
    }
    yt.Promise = tr.Promise;
    return new tr.Promise((function(r, o) {
        const s = new Yt(e, t);
        const n = Zt(s);
        const i = (n.protocol === "https:" ? y["default"] : w["default"]).request;
        const a = s.signal;
        let u = null;
        const c = function e() {
            let t = new Qt("The user aborted a request.");
            o(t);
            if (s.body && s.body instanceof _["default"].Readable) {
                s.body.destroy(t);
            }
            if (!u || !u.body) return;
            u.body.emit("error", t);
        };
        if (a && a.aborted) {
            c();
            return;
        }
        const l = function e() {
            c();
            f();
        };
        const p = i(n);
        let d;
        if (a) {
            a.addEventListener("abort", l);
        }
        function f() {
            p.abort();
            if (a) a.removeEventListener("abort", l);
            clearTimeout(d);
        }
        if (s.timeout) {
            p.once("socket", (function(e) {
                d = setTimeout((function() {
                    o(new ht(`network timeout at: ${s.url}`, "request-timeout"));
                    f();
                }), s.timeout);
            }));
        }
        p.on("error", (function(e) {
            o(new ht(`request to ${s.url} failed, reason: ${e.message}`, "system", e));
            f();
        }));
        p.on("response", (function(e) {
            clearTimeout(d);
            const t = Bt(e.headers);
            if (tr.isRedirect(e.statusCode)) {
                const n = t.get("Location");
                const i = n === null ? null : er(s.url, n);
                switch (s.redirect) {
                  case "error":
                    o(new ht(`uri requested responds with a redirect, redirect mode is set to error: ${s.url}`, "no-redirect"));
                    f();
                    return;

                  case "manual":
                    if (i !== null) {
                        try {
                            t.set("Location", i);
                        } catch (e) {
                            o(e);
                        }
                    }
                    break;

                  case "follow":
                    if (i === null) {
                        break;
                    }
                    if (s.counter >= s.follow) {
                        o(new ht(`maximum redirect reached at: ${s.url}`, "max-redirect"));
                        f();
                        return;
                    }
                    const n = {
                        headers: new Ft(s.headers),
                        follow: s.follow,
                        counter: s.counter + 1,
                        agent: s.agent,
                        compress: s.compress,
                        method: s.method,
                        body: s.body,
                        signal: s.signal,
                        timeout: s.timeout,
                        size: s.size
                    };
                    if (e.statusCode !== 303 && s.body && kt(s) === null) {
                        o(new ht("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
                        f();
                        return;
                    }
                    if (e.statusCode === 303 || (e.statusCode === 301 || e.statusCode === 302) && s.method === "POST") {
                        n.method = "GET";
                        n.body = undefined;
                        n.headers.delete("content-length");
                    }
                    r(tr(new Yt(i, n)));
                    f();
                    return;
                }
            }
            e.once("end", (function() {
                if (a) a.removeEventListener("abort", l);
            }));
            let n = e.pipe(new Xt);
            const i = {
                url: s.url,
                status: e.statusCode,
                statusText: e.statusMessage,
                headers: t,
                size: s.size,
                timeout: s.timeout,
                counter: s.counter
            };
            const c = t.get("Content-Encoding");
            if (!s.compress || s.method === "HEAD" || c === null || e.statusCode === 204 || e.statusCode === 304) {
                u = new Ht(n, i);
                r(u);
                return;
            }
            const p = {
                flush: P["default"].Z_SYNC_FLUSH,
                finishFlush: P["default"].Z_SYNC_FLUSH
            };
            if (c == "gzip" || c == "x-gzip") {
                n = n.pipe(P["default"].createGunzip(p));
                u = new Ht(n, i);
                r(u);
                return;
            }
            if (c == "deflate" || c == "x-deflate") {
                const t = e.pipe(new Xt);
                t.once("data", (function(e) {
                    if ((e[0] & 15) === 8) {
                        n = n.pipe(P["default"].createInflate());
                    } else {
                        n = n.pipe(P["default"].createInflateRaw());
                    }
                    u = new Ht(n, i);
                    r(u);
                }));
                return;
            }
            if (c == "br" && typeof P["default"].createBrotliDecompress === "function") {
                n = n.pipe(P["default"].createBrotliDecompress());
                u = new Ht(n, i);
                r(u);
                return;
            }
            u = new Ht(n, i);
            r(u);
        }));
        St(p, s);
    }));
}

tr.isRedirect = function(e) {
    return e === 301 || e === 302 || e === 303 || e === 307 || e === 308;
};

tr.Promise = global.Promise;

class rr extends Error {
    constructor(e) {
        super(e);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
        this.name = "Deprecation";
    }
}

var or = sr;

function sr(e, t) {
    if (e && t) return sr(e)(t);
    if (typeof e !== "function") throw new TypeError("need wrapper function");
    Object.keys(e).forEach((function(t) {
        r[t] = e[t];
    }));
    return r;
    function r() {
        var t = new Array(arguments.length);
        for (var r = 0; r < t.length; r++) {
            t[r] = arguments[r];
        }
        var o = e.apply(this, t);
        var s = t[t.length - 1];
        if (typeof o === "function" && o !== s) {
            Object.keys(s).forEach((function(e) {
                o[e] = s[e];
            }));
        }
        return o;
    }
}

var nr = or(ar);

var ir = or(ur);

ar.proto = ar((function() {
    Object.defineProperty(Function.prototype, "once", {
        value: function() {
            return ar(this);
        },
        configurable: true
    });
    Object.defineProperty(Function.prototype, "onceStrict", {
        value: function() {
            return ur(this);
        },
        configurable: true
    });
}));

function ar(e) {
    var t = function() {
        if (t.called) return t.value;
        t.called = true;
        return t.value = e.apply(this, arguments);
    };
    t.called = false;
    return t;
}

function ur(e) {
    var t = function() {
        if (t.called) throw new Error(t.onceError);
        t.called = true;
        return t.value = e.apply(this, arguments);
    };
    var r = e.name || "Function wrapped with `once`";
    t.onceError = r + " shouldn't be called more than once";
    t.called = false;
    return t;
}

nr.strict = ir;

const cr = nr((e => console.warn(e)));

class lr extends Error {
    constructor(e, t, r) {
        super(e);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
        this.name = "HttpError";
        this.status = t;
        Object.defineProperty(this, "code", {
            get() {
                cr(new rr("[@octokit/request-error] `error.code` is deprecated, use `error.status`."));
                return t;
            }
        });
        this.headers = r.headers || {};
        const o = Object.assign({}, r.request);
        if (r.request.headers.authorization) {
            o.headers = Object.assign({}, r.request.headers, {
                authorization: r.request.headers.authorization.replace(/ .*$/, " [REDACTED]")
            });
        }
        o.url = o.url.replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]").replace(/\baccess_token=\w+/g, "access_token=[REDACTED]");
        this.request = o;
    }
}

const pr = "5.4.12";

function dr(e) {
    return e.arrayBuffer();
}

function fr(e) {
    if (Be(e.body) || Array.isArray(e.body)) {
        e.body = JSON.stringify(e.body);
    }
    let t = {};
    let r;
    let o;
    const s = e.request && e.request.fetch || tr;
    return s(e.url, Object.assign({
        method: e.method,
        body: e.body,
        headers: e.headers,
        redirect: e.redirect
    }, e.request)).then((s => {
        o = s.url;
        r = s.status;
        for (const e of s.headers) {
            t[e[0]] = e[1];
        }
        if (r === 204 || r === 205) {
            return;
        }
        if (e.method === "HEAD") {
            if (r < 400) {
                return;
            }
            throw new lr(s.statusText, r, {
                headers: t,
                request: e
            });
        }
        if (r === 304) {
            throw new lr("Not modified", r, {
                headers: t,
                request: e
            });
        }
        if (r >= 400) {
            return s.text().then((o => {
                const s = new lr(o, r, {
                    headers: t,
                    request: e
                });
                try {
                    let e = JSON.parse(s.message);
                    Object.assign(s, e);
                    let t = e.errors;
                    s.message = s.message + ": " + t.map(JSON.stringify).join(", ");
                } catch (e) {}
                throw s;
            }));
        }
        const n = s.headers.get("content-type");
        if (/application\/json/.test(n)) {
            return s.json();
        }
        if (!n || /^text\/|charset=utf-8$/.test(n)) {
            return s.text();
        }
        return dr(s);
    })).then((e => ({
        status: r,
        url: o,
        headers: t,
        data: e
    }))).catch((r => {
        if (r instanceof lr) {
            throw r;
        }
        throw new lr(r.message, 500, {
            headers: t,
            request: e
        });
    }));
}

function mr(e, t) {
    const r = e.defaults(t);
    const o = function(e, t) {
        const o = r.merge(e, t);
        if (!o.request || !o.request.hook) {
            return fr(r.parse(o));
        }
        const s = (e, t) => fr(r.parse(r.merge(e, t)));
        Object.assign(s, {
            endpoint: r,
            defaults: mr.bind(null, r)
        });
        return o.request.hook(s, o);
    };
    return Object.assign(o, {
        endpoint: r,
        defaults: mr.bind(null, r)
    });
}

const hr = mr(lt, {
    headers: {
        "user-agent": `octokit-request.js/${pr} ${Te()}`
    }
});

const gr = "4.5.8";

class br extends Error {
    constructor(e, t) {
        const r = t.data.errors[0].message;
        super(r);
        Object.assign(this, t.data);
        Object.assign(this, {
            headers: t.headers
        });
        this.name = "GraphqlError";
        this.request = e;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

const wr = [ "method", "baseUrl", "url", "headers", "request", "query", "mediaType" ];

const yr = /\/api\/v3\/?$/;

function vr(e, t, r) {
    if (typeof t === "string" && r && "query" in r) {
        return Promise.reject(new Error(`[@octokit/graphql] "query" cannot be used as variable name`));
    }
    const o = typeof t === "string" ? Object.assign({
        query: t
    }, r) : t;
    const s = Object.keys(o).reduce(((e, t) => {
        if (wr.includes(t)) {
            e[t] = o[t];
            return e;
        }
        if (!e.variables) {
            e.variables = {};
        }
        e.variables[t] = o[t];
        return e;
    }), {});
    const n = o.baseUrl || e.endpoint.DEFAULTS.baseUrl;
    if (yr.test(n)) {
        s.url = n.replace(yr, "/api/graphql");
    }
    return e(s).then((e => {
        if (e.data.errors) {
            const t = {};
            for (const r of Object.keys(e.headers)) {
                t[r] = e.headers[r];
            }
            throw new br(s, {
                headers: t,
                data: e.data
            });
        }
        return e.data.data;
    }));
}

function Tr(e, t) {
    const r = e.defaults(t);
    const o = (e, t) => vr(r, e, t);
    return Object.assign(o, {
        defaults: Tr.bind(null, r),
        endpoint: hr.endpoint
    });
}

const Er = Tr(hr, {
    headers: {
        "user-agent": `octokit-graphql.js/${gr} ${Te()}`
    },
    method: "POST",
    url: "/graphql"
});

function _r(e) {
    return Tr(e, {
        method: "POST",
        url: "/graphql"
    });
}

async function Or(e) {
    const t = e.split(/\./).length === 3 ? "app" : /^v\d+\./.test(e) ? "installation" : "oauth";
    return {
        type: "token",
        token: e,
        tokenType: t
    };
}

function Pr(e) {
    if (e.split(/\./).length === 3) {
        return `bearer ${e}`;
    }
    return `token ${e}`;
}

async function kr(e, t, r, o) {
    const s = t.endpoint.merge(r, o);
    s.headers.authorization = Pr(e);
    return t(s);
}

const Sr = function e(t) {
    if (!t) {
        throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
    }
    if (typeof t !== "string") {
        throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");
    }
    t = t.replace(/^(token|bearer) +/i, "");
    return Object.assign(Or.bind(null, t), {
        hook: kr.bind(null, t)
    });
};

const Ar = "3.2.4";

class Gr {
    constructor(e = {}) {
        const t = new qe;
        const r = {
            baseUrl: hr.endpoint.DEFAULTS.baseUrl,
            headers: {},
            request: Object.assign({}, e.request, {
                hook: t.bind(null, "request")
            }),
            mediaType: {
                previews: [],
                format: ""
            }
        };
        r.headers["user-agent"] = [ e.userAgent, `octokit-core.js/${Ar} ${Te()}` ].filter(Boolean).join(" ");
        if (e.baseUrl) {
            r.baseUrl = e.baseUrl;
        }
        if (e.previews) {
            r.mediaType.previews = e.previews;
        }
        if (e.timeZone) {
            r.headers["time-zone"] = e.timeZone;
        }
        this.request = hr.defaults(r);
        this.graphql = _r(this.request).defaults(r);
        this.log = Object.assign({
            debug: () => {},
            info: () => {},
            warn: console.warn.bind(console),
            error: console.error.bind(console)
        }, e.log);
        this.hook = t;
        if (!e.authStrategy) {
            if (!e.auth) {
                this.auth = async () => ({
                    type: "unauthenticated"
                });
            } else {
                const r = Sr(e.auth);
                t.wrap("request", r.hook);
                this.auth = r;
            }
        } else {
            const {authStrategy: r, ...o} = e;
            const s = r(Object.assign({
                request: this.request,
                log: this.log,
                octokit: this,
                octokitOptions: o
            }, e.auth));
            t.wrap("request", s.hook);
            this.auth = s;
        }
        const o = this.constructor;
        o.plugins.forEach((t => {
            Object.assign(this, t(this, e));
        }));
    }
    static defaults(e) {
        const t = class extends(this){
            constructor(...t) {
                const r = t[0] || {};
                if (typeof e === "function") {
                    super(e(r));
                    return;
                }
                super(Object.assign({}, e, r, r.userAgent && e.userAgent ? {
                    userAgent: `${r.userAgent} ${e.userAgent}`
                } : null));
            }
        };
        return t;
    }
    static plugin(...e) {
        var t;
        const r = this.plugins;
        const o = (t = class extends(this){}, t.plugins = r.concat(e.filter((e => !r.includes(e)))), 
        t);
        return o;
    }
}

Gr.VERSION = Ar;

Gr.plugins = [];

var Cr = Object.freeze({
    __proto__: null,
    Octokit: Gr
});

const jr = {
    actions: {
        addSelectedRepoToOrgSecret: [ "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}" ],
        cancelWorkflowRun: [ "POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel" ],
        createOrUpdateOrgSecret: [ "PUT /orgs/{org}/actions/secrets/{secret_name}" ],
        createOrUpdateRepoSecret: [ "PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}" ],
        createRegistrationTokenForOrg: [ "POST /orgs/{org}/actions/runners/registration-token" ],
        createRegistrationTokenForRepo: [ "POST /repos/{owner}/{repo}/actions/runners/registration-token" ],
        createRemoveTokenForOrg: [ "POST /orgs/{org}/actions/runners/remove-token" ],
        createRemoveTokenForRepo: [ "POST /repos/{owner}/{repo}/actions/runners/remove-token" ],
        createWorkflowDispatch: [ "POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches" ],
        deleteArtifact: [ "DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}" ],
        deleteOrgSecret: [ "DELETE /orgs/{org}/actions/secrets/{secret_name}" ],
        deleteRepoSecret: [ "DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}" ],
        deleteSelfHostedRunnerFromOrg: [ "DELETE /orgs/{org}/actions/runners/{runner_id}" ],
        deleteSelfHostedRunnerFromRepo: [ "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}" ],
        deleteWorkflowRun: [ "DELETE /repos/{owner}/{repo}/actions/runs/{run_id}" ],
        deleteWorkflowRunLogs: [ "DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs" ],
        disableSelectedRepositoryGithubActionsOrganization: [ "DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}" ],
        disableWorkflow: [ "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable" ],
        downloadArtifact: [ "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}" ],
        downloadJobLogsForWorkflowRun: [ "GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs" ],
        downloadWorkflowRunLogs: [ "GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs" ],
        enableSelectedRepositoryGithubActionsOrganization: [ "PUT /orgs/{org}/actions/permissions/repositories/{repository_id}" ],
        enableWorkflow: [ "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable" ],
        getAllowedActionsOrganization: [ "GET /orgs/{org}/actions/permissions/selected-actions" ],
        getAllowedActionsRepository: [ "GET /repos/{owner}/{repo}/actions/permissions/selected-actions" ],
        getArtifact: [ "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}" ],
        getGithubActionsPermissionsOrganization: [ "GET /orgs/{org}/actions/permissions" ],
        getGithubActionsPermissionsRepository: [ "GET /repos/{owner}/{repo}/actions/permissions" ],
        getJobForWorkflowRun: [ "GET /repos/{owner}/{repo}/actions/jobs/{job_id}" ],
        getOrgPublicKey: [ "GET /orgs/{org}/actions/secrets/public-key" ],
        getOrgSecret: [ "GET /orgs/{org}/actions/secrets/{secret_name}" ],
        getRepoPermissions: [ "GET /repos/{owner}/{repo}/actions/permissions", {}, {
            renamed: [ "actions", "getGithubActionsPermissionsRepository" ]
        } ],
        getRepoPublicKey: [ "GET /repos/{owner}/{repo}/actions/secrets/public-key" ],
        getRepoSecret: [ "GET /repos/{owner}/{repo}/actions/secrets/{secret_name}" ],
        getSelfHostedRunnerForOrg: [ "GET /orgs/{org}/actions/runners/{runner_id}" ],
        getSelfHostedRunnerForRepo: [ "GET /repos/{owner}/{repo}/actions/runners/{runner_id}" ],
        getWorkflow: [ "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}" ],
        getWorkflowRun: [ "GET /repos/{owner}/{repo}/actions/runs/{run_id}" ],
        getWorkflowRunUsage: [ "GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing" ],
        getWorkflowUsage: [ "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing" ],
        listArtifactsForRepo: [ "GET /repos/{owner}/{repo}/actions/artifacts" ],
        listJobsForWorkflowRun: [ "GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs" ],
        listOrgSecrets: [ "GET /orgs/{org}/actions/secrets" ],
        listRepoSecrets: [ "GET /repos/{owner}/{repo}/actions/secrets" ],
        listRepoWorkflows: [ "GET /repos/{owner}/{repo}/actions/workflows" ],
        listRunnerApplicationsForOrg: [ "GET /orgs/{org}/actions/runners/downloads" ],
        listRunnerApplicationsForRepo: [ "GET /repos/{owner}/{repo}/actions/runners/downloads" ],
        listSelectedReposForOrgSecret: [ "GET /orgs/{org}/actions/secrets/{secret_name}/repositories" ],
        listSelectedRepositoriesEnabledGithubActionsOrganization: [ "GET /orgs/{org}/actions/permissions/repositories" ],
        listSelfHostedRunnersForOrg: [ "GET /orgs/{org}/actions/runners" ],
        listSelfHostedRunnersForRepo: [ "GET /repos/{owner}/{repo}/actions/runners" ],
        listWorkflowRunArtifacts: [ "GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts" ],
        listWorkflowRuns: [ "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs" ],
        listWorkflowRunsForRepo: [ "GET /repos/{owner}/{repo}/actions/runs" ],
        reRunWorkflow: [ "POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun" ],
        removeSelectedRepoFromOrgSecret: [ "DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}" ],
        setAllowedActionsOrganization: [ "PUT /orgs/{org}/actions/permissions/selected-actions" ],
        setAllowedActionsRepository: [ "PUT /repos/{owner}/{repo}/actions/permissions/selected-actions" ],
        setGithubActionsPermissionsOrganization: [ "PUT /orgs/{org}/actions/permissions" ],
        setGithubActionsPermissionsRepository: [ "PUT /repos/{owner}/{repo}/actions/permissions" ],
        setSelectedReposForOrgSecret: [ "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories" ],
        setSelectedRepositoriesEnabledGithubActionsOrganization: [ "PUT /orgs/{org}/actions/permissions/repositories" ]
    },
    activity: {
        checkRepoIsStarredByAuthenticatedUser: [ "GET /user/starred/{owner}/{repo}" ],
        deleteRepoSubscription: [ "DELETE /repos/{owner}/{repo}/subscription" ],
        deleteThreadSubscription: [ "DELETE /notifications/threads/{thread_id}/subscription" ],
        getFeeds: [ "GET /feeds" ],
        getRepoSubscription: [ "GET /repos/{owner}/{repo}/subscription" ],
        getThread: [ "GET /notifications/threads/{thread_id}" ],
        getThreadSubscriptionForAuthenticatedUser: [ "GET /notifications/threads/{thread_id}/subscription" ],
        listEventsForAuthenticatedUser: [ "GET /users/{username}/events" ],
        listNotificationsForAuthenticatedUser: [ "GET /notifications" ],
        listOrgEventsForAuthenticatedUser: [ "GET /users/{username}/events/orgs/{org}" ],
        listPublicEvents: [ "GET /events" ],
        listPublicEventsForRepoNetwork: [ "GET /networks/{owner}/{repo}/events" ],
        listPublicEventsForUser: [ "GET /users/{username}/events/public" ],
        listPublicOrgEvents: [ "GET /orgs/{org}/events" ],
        listReceivedEventsForUser: [ "GET /users/{username}/received_events" ],
        listReceivedPublicEventsForUser: [ "GET /users/{username}/received_events/public" ],
        listRepoEvents: [ "GET /repos/{owner}/{repo}/events" ],
        listRepoNotificationsForAuthenticatedUser: [ "GET /repos/{owner}/{repo}/notifications" ],
        listReposStarredByAuthenticatedUser: [ "GET /user/starred" ],
        listReposStarredByUser: [ "GET /users/{username}/starred" ],
        listReposWatchedByUser: [ "GET /users/{username}/subscriptions" ],
        listStargazersForRepo: [ "GET /repos/{owner}/{repo}/stargazers" ],
        listWatchedReposForAuthenticatedUser: [ "GET /user/subscriptions" ],
        listWatchersForRepo: [ "GET /repos/{owner}/{repo}/subscribers" ],
        markNotificationsAsRead: [ "PUT /notifications" ],
        markRepoNotificationsAsRead: [ "PUT /repos/{owner}/{repo}/notifications" ],
        markThreadAsRead: [ "PATCH /notifications/threads/{thread_id}" ],
        setRepoSubscription: [ "PUT /repos/{owner}/{repo}/subscription" ],
        setThreadSubscription: [ "PUT /notifications/threads/{thread_id}/subscription" ],
        starRepoForAuthenticatedUser: [ "PUT /user/starred/{owner}/{repo}" ],
        unstarRepoForAuthenticatedUser: [ "DELETE /user/starred/{owner}/{repo}" ]
    },
    apps: {
        addRepoToInstallation: [ "PUT /user/installations/{installation_id}/repositories/{repository_id}" ],
        checkToken: [ "POST /applications/{client_id}/token" ],
        createContentAttachment: [ "POST /content_references/{content_reference_id}/attachments", {
            mediaType: {
                previews: [ "corsair" ]
            }
        } ],
        createFromManifest: [ "POST /app-manifests/{code}/conversions" ],
        createInstallationAccessToken: [ "POST /app/installations/{installation_id}/access_tokens" ],
        deleteAuthorization: [ "DELETE /applications/{client_id}/grant" ],
        deleteInstallation: [ "DELETE /app/installations/{installation_id}" ],
        deleteToken: [ "DELETE /applications/{client_id}/token" ],
        getAuthenticated: [ "GET /app" ],
        getBySlug: [ "GET /apps/{app_slug}" ],
        getInstallation: [ "GET /app/installations/{installation_id}" ],
        getOrgInstallation: [ "GET /orgs/{org}/installation" ],
        getRepoInstallation: [ "GET /repos/{owner}/{repo}/installation" ],
        getSubscriptionPlanForAccount: [ "GET /marketplace_listing/accounts/{account_id}" ],
        getSubscriptionPlanForAccountStubbed: [ "GET /marketplace_listing/stubbed/accounts/{account_id}" ],
        getUserInstallation: [ "GET /users/{username}/installation" ],
        getWebhookConfigForApp: [ "GET /app/hook/config" ],
        listAccountsForPlan: [ "GET /marketplace_listing/plans/{plan_id}/accounts" ],
        listAccountsForPlanStubbed: [ "GET /marketplace_listing/stubbed/plans/{plan_id}/accounts" ],
        listInstallationReposForAuthenticatedUser: [ "GET /user/installations/{installation_id}/repositories" ],
        listInstallations: [ "GET /app/installations" ],
        listInstallationsForAuthenticatedUser: [ "GET /user/installations" ],
        listPlans: [ "GET /marketplace_listing/plans" ],
        listPlansStubbed: [ "GET /marketplace_listing/stubbed/plans" ],
        listReposAccessibleToInstallation: [ "GET /installation/repositories" ],
        listSubscriptionsForAuthenticatedUser: [ "GET /user/marketplace_purchases" ],
        listSubscriptionsForAuthenticatedUserStubbed: [ "GET /user/marketplace_purchases/stubbed" ],
        removeRepoFromInstallation: [ "DELETE /user/installations/{installation_id}/repositories/{repository_id}" ],
        resetToken: [ "PATCH /applications/{client_id}/token" ],
        revokeInstallationAccessToken: [ "DELETE /installation/token" ],
        suspendInstallation: [ "PUT /app/installations/{installation_id}/suspended" ],
        unsuspendInstallation: [ "DELETE /app/installations/{installation_id}/suspended" ],
        updateWebhookConfigForApp: [ "PATCH /app/hook/config" ]
    },
    billing: {
        getGithubActionsBillingOrg: [ "GET /orgs/{org}/settings/billing/actions" ],
        getGithubActionsBillingUser: [ "GET /users/{username}/settings/billing/actions" ],
        getGithubPackagesBillingOrg: [ "GET /orgs/{org}/settings/billing/packages" ],
        getGithubPackagesBillingUser: [ "GET /users/{username}/settings/billing/packages" ],
        getSharedStorageBillingOrg: [ "GET /orgs/{org}/settings/billing/shared-storage" ],
        getSharedStorageBillingUser: [ "GET /users/{username}/settings/billing/shared-storage" ]
    },
    checks: {
        create: [ "POST /repos/{owner}/{repo}/check-runs" ],
        createSuite: [ "POST /repos/{owner}/{repo}/check-suites" ],
        get: [ "GET /repos/{owner}/{repo}/check-runs/{check_run_id}" ],
        getSuite: [ "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}" ],
        listAnnotations: [ "GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations" ],
        listForRef: [ "GET /repos/{owner}/{repo}/commits/{ref}/check-runs" ],
        listForSuite: [ "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs" ],
        listSuitesForRef: [ "GET /repos/{owner}/{repo}/commits/{ref}/check-suites" ],
        rerequestSuite: [ "POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest" ],
        setSuitesPreferences: [ "PATCH /repos/{owner}/{repo}/check-suites/preferences" ],
        update: [ "PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}" ]
    },
    codeScanning: {
        getAlert: [ "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}", {}, {
            renamedParameters: {
                alert_id: "alert_number"
            }
        } ],
        listAlertsForRepo: [ "GET /repos/{owner}/{repo}/code-scanning/alerts" ],
        listRecentAnalyses: [ "GET /repos/{owner}/{repo}/code-scanning/analyses" ],
        updateAlert: [ "PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}" ],
        uploadSarif: [ "POST /repos/{owner}/{repo}/code-scanning/sarifs" ]
    },
    codesOfConduct: {
        getAllCodesOfConduct: [ "GET /codes_of_conduct", {
            mediaType: {
                previews: [ "scarlet-witch" ]
            }
        } ],
        getConductCode: [ "GET /codes_of_conduct/{key}", {
            mediaType: {
                previews: [ "scarlet-witch" ]
            }
        } ],
        getForRepo: [ "GET /repos/{owner}/{repo}/community/code_of_conduct", {
            mediaType: {
                previews: [ "scarlet-witch" ]
            }
        } ]
    },
    emojis: {
        get: [ "GET /emojis" ]
    },
    enterpriseAdmin: {
        disableSelectedOrganizationGithubActionsEnterprise: [ "DELETE /enterprises/{enterprise}/actions/permissions/organizations/{org_id}" ],
        enableSelectedOrganizationGithubActionsEnterprise: [ "PUT /enterprises/{enterprise}/actions/permissions/organizations/{org_id}" ],
        getAllowedActionsEnterprise: [ "GET /enterprises/{enterprise}/actions/permissions/selected-actions" ],
        getGithubActionsPermissionsEnterprise: [ "GET /enterprises/{enterprise}/actions/permissions" ],
        listSelectedOrganizationsEnabledGithubActionsEnterprise: [ "GET /enterprises/{enterprise}/actions/permissions/organizations" ],
        setAllowedActionsEnterprise: [ "PUT /enterprises/{enterprise}/actions/permissions/selected-actions" ],
        setGithubActionsPermissionsEnterprise: [ "PUT /enterprises/{enterprise}/actions/permissions" ],
        setSelectedOrganizationsEnabledGithubActionsEnterprise: [ "PUT /enterprises/{enterprise}/actions/permissions/organizations" ]
    },
    gists: {
        checkIsStarred: [ "GET /gists/{gist_id}/star" ],
        create: [ "POST /gists" ],
        createComment: [ "POST /gists/{gist_id}/comments" ],
        delete: [ "DELETE /gists/{gist_id}" ],
        deleteComment: [ "DELETE /gists/{gist_id}/comments/{comment_id}" ],
        fork: [ "POST /gists/{gist_id}/forks" ],
        get: [ "GET /gists/{gist_id}" ],
        getComment: [ "GET /gists/{gist_id}/comments/{comment_id}" ],
        getRevision: [ "GET /gists/{gist_id}/{sha}" ],
        list: [ "GET /gists" ],
        listComments: [ "GET /gists/{gist_id}/comments" ],
        listCommits: [ "GET /gists/{gist_id}/commits" ],
        listForUser: [ "GET /users/{username}/gists" ],
        listForks: [ "GET /gists/{gist_id}/forks" ],
        listPublic: [ "GET /gists/public" ],
        listStarred: [ "GET /gists/starred" ],
        star: [ "PUT /gists/{gist_id}/star" ],
        unstar: [ "DELETE /gists/{gist_id}/star" ],
        update: [ "PATCH /gists/{gist_id}" ],
        updateComment: [ "PATCH /gists/{gist_id}/comments/{comment_id}" ]
    },
    git: {
        createBlob: [ "POST /repos/{owner}/{repo}/git/blobs" ],
        createCommit: [ "POST /repos/{owner}/{repo}/git/commits" ],
        createRef: [ "POST /repos/{owner}/{repo}/git/refs" ],
        createTag: [ "POST /repos/{owner}/{repo}/git/tags" ],
        createTree: [ "POST /repos/{owner}/{repo}/git/trees" ],
        deleteRef: [ "DELETE /repos/{owner}/{repo}/git/refs/{ref}" ],
        getBlob: [ "GET /repos/{owner}/{repo}/git/blobs/{file_sha}" ],
        getCommit: [ "GET /repos/{owner}/{repo}/git/commits/{commit_sha}" ],
        getRef: [ "GET /repos/{owner}/{repo}/git/ref/{ref}" ],
        getTag: [ "GET /repos/{owner}/{repo}/git/tags/{tag_sha}" ],
        getTree: [ "GET /repos/{owner}/{repo}/git/trees/{tree_sha}" ],
        listMatchingRefs: [ "GET /repos/{owner}/{repo}/git/matching-refs/{ref}" ],
        updateRef: [ "PATCH /repos/{owner}/{repo}/git/refs/{ref}" ]
    },
    gitignore: {
        getAllTemplates: [ "GET /gitignore/templates" ],
        getTemplate: [ "GET /gitignore/templates/{name}" ]
    },
    interactions: {
        getRestrictionsForOrg: [ "GET /orgs/{org}/interaction-limits" ],
        getRestrictionsForRepo: [ "GET /repos/{owner}/{repo}/interaction-limits" ],
        getRestrictionsForYourPublicRepos: [ "GET /user/interaction-limits" ],
        removeRestrictionsForOrg: [ "DELETE /orgs/{org}/interaction-limits" ],
        removeRestrictionsForRepo: [ "DELETE /repos/{owner}/{repo}/interaction-limits" ],
        removeRestrictionsForYourPublicRepos: [ "DELETE /user/interaction-limits" ],
        setRestrictionsForOrg: [ "PUT /orgs/{org}/interaction-limits" ],
        setRestrictionsForRepo: [ "PUT /repos/{owner}/{repo}/interaction-limits" ],
        setRestrictionsForYourPublicRepos: [ "PUT /user/interaction-limits" ]
    },
    issues: {
        addAssignees: [ "POST /repos/{owner}/{repo}/issues/{issue_number}/assignees" ],
        addLabels: [ "POST /repos/{owner}/{repo}/issues/{issue_number}/labels" ],
        checkUserCanBeAssigned: [ "GET /repos/{owner}/{repo}/assignees/{assignee}" ],
        create: [ "POST /repos/{owner}/{repo}/issues" ],
        createComment: [ "POST /repos/{owner}/{repo}/issues/{issue_number}/comments" ],
        createLabel: [ "POST /repos/{owner}/{repo}/labels" ],
        createMilestone: [ "POST /repos/{owner}/{repo}/milestones" ],
        deleteComment: [ "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}" ],
        deleteLabel: [ "DELETE /repos/{owner}/{repo}/labels/{name}" ],
        deleteMilestone: [ "DELETE /repos/{owner}/{repo}/milestones/{milestone_number}" ],
        get: [ "GET /repos/{owner}/{repo}/issues/{issue_number}" ],
        getComment: [ "GET /repos/{owner}/{repo}/issues/comments/{comment_id}" ],
        getEvent: [ "GET /repos/{owner}/{repo}/issues/events/{event_id}" ],
        getLabel: [ "GET /repos/{owner}/{repo}/labels/{name}" ],
        getMilestone: [ "GET /repos/{owner}/{repo}/milestones/{milestone_number}" ],
        list: [ "GET /issues" ],
        listAssignees: [ "GET /repos/{owner}/{repo}/assignees" ],
        listComments: [ "GET /repos/{owner}/{repo}/issues/{issue_number}/comments" ],
        listCommentsForRepo: [ "GET /repos/{owner}/{repo}/issues/comments" ],
        listEvents: [ "GET /repos/{owner}/{repo}/issues/{issue_number}/events" ],
        listEventsForRepo: [ "GET /repos/{owner}/{repo}/issues/events" ],
        listEventsForTimeline: [ "GET /repos/{owner}/{repo}/issues/{issue_number}/timeline", {
            mediaType: {
                previews: [ "mockingbird" ]
            }
        } ],
        listForAuthenticatedUser: [ "GET /user/issues" ],
        listForOrg: [ "GET /orgs/{org}/issues" ],
        listForRepo: [ "GET /repos/{owner}/{repo}/issues" ],
        listLabelsForMilestone: [ "GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels" ],
        listLabelsForRepo: [ "GET /repos/{owner}/{repo}/labels" ],
        listLabelsOnIssue: [ "GET /repos/{owner}/{repo}/issues/{issue_number}/labels" ],
        listMilestones: [ "GET /repos/{owner}/{repo}/milestones" ],
        lock: [ "PUT /repos/{owner}/{repo}/issues/{issue_number}/lock" ],
        removeAllLabels: [ "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels" ],
        removeAssignees: [ "DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees" ],
        removeLabel: [ "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}" ],
        setLabels: [ "PUT /repos/{owner}/{repo}/issues/{issue_number}/labels" ],
        unlock: [ "DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock" ],
        update: [ "PATCH /repos/{owner}/{repo}/issues/{issue_number}" ],
        updateComment: [ "PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}" ],
        updateLabel: [ "PATCH /repos/{owner}/{repo}/labels/{name}" ],
        updateMilestone: [ "PATCH /repos/{owner}/{repo}/milestones/{milestone_number}" ]
    },
    licenses: {
        get: [ "GET /licenses/{license}" ],
        getAllCommonlyUsed: [ "GET /licenses" ],
        getForRepo: [ "GET /repos/{owner}/{repo}/license" ]
    },
    markdown: {
        render: [ "POST /markdown" ],
        renderRaw: [ "POST /markdown/raw", {
            headers: {
                "content-type": "text/plain; charset=utf-8"
            }
        } ]
    },
    meta: {
        get: [ "GET /meta" ],
        getOctocat: [ "GET /octocat" ],
        getZen: [ "GET /zen" ],
        root: [ "GET /" ]
    },
    migrations: {
        cancelImport: [ "DELETE /repos/{owner}/{repo}/import" ],
        deleteArchiveForAuthenticatedUser: [ "DELETE /user/migrations/{migration_id}/archive", {
            mediaType: {
                previews: [ "wyandotte" ]
            }
        } ],
        deleteArchiveForOrg: [ "DELETE /orgs/{org}/migrations/{migration_id}/archive", {
            mediaType: {
                previews: [ "wyandotte" ]
            }
        } ],
        downloadArchiveForOrg: [ "GET /orgs/{org}/migrations/{migration_id}/archive", {
            mediaType: {
                previews: [ "wyandotte" ]
            }
        } ],
        getArchiveForAuthenticatedUser: [ "GET /user/migrations/{migration_id}/archive", {
            mediaType: {
                previews: [ "wyandotte" ]
            }
        } ],
        getCommitAuthors: [ "GET /repos/{owner}/{repo}/import/authors" ],
        getImportStatus: [ "GET /repos/{owner}/{repo}/import" ],
        getLargeFiles: [ "GET /repos/{owner}/{repo}/import/large_files" ],
        getStatusForAuthenticatedUser: [ "GET /user/migrations/{migration_id}", {
            mediaType: {
                previews: [ "wyandotte" ]
            }
        } ],
        getStatusForOrg: [ "GET /orgs/{org}/migrations/{migration_id}", {
            mediaType: {
                previews: [ "wyandotte" ]
            }
        } ],
        listForAuthenticatedUser: [ "GET /user/migrations", {
            mediaType: {
                previews: [ "wyandotte" ]
            }
        } ],
        listForOrg: [ "GET /orgs/{org}/migrations", {
            mediaType: {
                previews: [ "wyandotte" ]
            }
        } ],
        listReposForOrg: [ "GET /orgs/{org}/migrations/{migration_id}/repositories", {
            mediaType: {
                previews: [ "wyandotte" ]
            }
        } ],
        listReposForUser: [ "GET /user/migrations/{migration_id}/repositories", {
            mediaType: {
                previews: [ "wyandotte" ]
            }
        } ],
        mapCommitAuthor: [ "PATCH /repos/{owner}/{repo}/import/authors/{author_id}" ],
        setLfsPreference: [ "PATCH /repos/{owner}/{repo}/import/lfs" ],
        startForAuthenticatedUser: [ "POST /user/migrations" ],
        startForOrg: [ "POST /orgs/{org}/migrations" ],
        startImport: [ "PUT /repos/{owner}/{repo}/import" ],
        unlockRepoForAuthenticatedUser: [ "DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock", {
            mediaType: {
                previews: [ "wyandotte" ]
            }
        } ],
        unlockRepoForOrg: [ "DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock", {
            mediaType: {
                previews: [ "wyandotte" ]
            }
        } ],
        updateImport: [ "PATCH /repos/{owner}/{repo}/import" ]
    },
    orgs: {
        blockUser: [ "PUT /orgs/{org}/blocks/{username}" ],
        checkBlockedUser: [ "GET /orgs/{org}/blocks/{username}" ],
        checkMembershipForUser: [ "GET /orgs/{org}/members/{username}" ],
        checkPublicMembershipForUser: [ "GET /orgs/{org}/public_members/{username}" ],
        convertMemberToOutsideCollaborator: [ "PUT /orgs/{org}/outside_collaborators/{username}" ],
        createInvitation: [ "POST /orgs/{org}/invitations" ],
        createWebhook: [ "POST /orgs/{org}/hooks" ],
        deleteWebhook: [ "DELETE /orgs/{org}/hooks/{hook_id}" ],
        get: [ "GET /orgs/{org}" ],
        getMembershipForAuthenticatedUser: [ "GET /user/memberships/orgs/{org}" ],
        getMembershipForUser: [ "GET /orgs/{org}/memberships/{username}" ],
        getWebhook: [ "GET /orgs/{org}/hooks/{hook_id}" ],
        getWebhookConfigForOrg: [ "GET /orgs/{org}/hooks/{hook_id}/config" ],
        list: [ "GET /organizations" ],
        listAppInstallations: [ "GET /orgs/{org}/installations" ],
        listBlockedUsers: [ "GET /orgs/{org}/blocks" ],
        listForAuthenticatedUser: [ "GET /user/orgs" ],
        listForUser: [ "GET /users/{username}/orgs" ],
        listInvitationTeams: [ "GET /orgs/{org}/invitations/{invitation_id}/teams" ],
        listMembers: [ "GET /orgs/{org}/members" ],
        listMembershipsForAuthenticatedUser: [ "GET /user/memberships/orgs" ],
        listOutsideCollaborators: [ "GET /orgs/{org}/outside_collaborators" ],
        listPendingInvitations: [ "GET /orgs/{org}/invitations" ],
        listPublicMembers: [ "GET /orgs/{org}/public_members" ],
        listWebhooks: [ "GET /orgs/{org}/hooks" ],
        pingWebhook: [ "POST /orgs/{org}/hooks/{hook_id}/pings" ],
        removeMember: [ "DELETE /orgs/{org}/members/{username}" ],
        removeMembershipForUser: [ "DELETE /orgs/{org}/memberships/{username}" ],
        removeOutsideCollaborator: [ "DELETE /orgs/{org}/outside_collaborators/{username}" ],
        removePublicMembershipForAuthenticatedUser: [ "DELETE /orgs/{org}/public_members/{username}" ],
        setMembershipForUser: [ "PUT /orgs/{org}/memberships/{username}" ],
        setPublicMembershipForAuthenticatedUser: [ "PUT /orgs/{org}/public_members/{username}" ],
        unblockUser: [ "DELETE /orgs/{org}/blocks/{username}" ],
        update: [ "PATCH /orgs/{org}" ],
        updateMembershipForAuthenticatedUser: [ "PATCH /user/memberships/orgs/{org}" ],
        updateWebhook: [ "PATCH /orgs/{org}/hooks/{hook_id}" ],
        updateWebhookConfigForOrg: [ "PATCH /orgs/{org}/hooks/{hook_id}/config" ]
    },
    projects: {
        addCollaborator: [ "PUT /projects/{project_id}/collaborators/{username}", {
            mediaType: {
                previews: [ "inertia" ]
            }
        } ],
        createCard: [ "POST /projects/columns/{column_id}/cards", {
            mediaType: {
                previews: [ "inertia" ]
            }
        } ],
        createColumn: [ "POST /projects/{project_id}/columns", {
            mediaType: {
                previews: [ "inertia" ]
            }
        } ],
        createForAuthenticatedUser: [ "POST /user/projects", {
            mediaType: {
                previews: [ "inertia" ]
            }
        } ],
        createForOrg: [ "POST /orgs/{org}/projects", {
            mediaType: {
                previews: [ "inertia" ]
            }
        } ],
        createForRepo: [ "POST /repos/{owner}/{repo}/projects", {
            mediaType: {
                previews: [ "inertia" ]
            }
        } ],
        delete: [ "DELETE /projects/{project_id}", {
            mediaType: {
                previews: [ "inertia" ]
            }
        } ],
        deleteCard: [ "DELETE /projects/columns/cards/{card_id}", {
            mediaType: {
                previews: [ "inertia" ]
            }
        } ],
        deleteColumn: [ "DELETE /projects/columns/{column_id}", {
            mediaType: {
                previews: [ "inertia" ]
            }
        } ],
        get: [ "GET /projects/{project_id}", {
            mediaType: {
                previews: [ "inertia" ]
            }
        } ],
        getCard: [ "GET /projects/columns/cards/{card_id}", {
            mediaType: {
                previews: [ "inertia" ]
            }
        } ],
        getColumn: [ "GET /projects/columns/{column_id}", {
            mediaType: {
                previews: [ "inertia" ]
            }
        } ],
        getPermissionForUser: [ "GET /projects/{project_id}/collaborators/{username}/permission", {
            mediaType: {
                previews: [ "inertia" ]
            }
        } ],
        listCards: [ "GET /projects/columns/{column_id}/cards", {
            mediaType: {
                previews: [ "inertia" ]
            }
        } ],
        listCollaborators: [ "GET /projects/{project_id}/collaborators", {
            mediaType: {
                previews: [ "inertia" ]
            }
        } ],
        listColumns: [ "GET /projects/{project_id}/columns", {
            mediaType: {
                previews: [ "inertia" ]
            }
        } ],
        listForOrg: [ "GET /orgs/{org}/projects", {
            mediaType: {
                previews: [ "inertia" ]
            }
        } ],
        listForRepo: [ "GET /repos/{owner}/{repo}/projects", {
            mediaType: {
                previews: [ "inertia" ]
            }
        } ],
        listForUser: [ "GET /users/{username}/projects", {
            mediaType: {
                previews: [ "inertia" ]
            }
        } ],
        moveCard: [ "POST /projects/columns/cards/{card_id}/moves", {
            mediaType: {
                previews: [ "inertia" ]
            }
        } ],
        moveColumn: [ "POST /projects/columns/{column_id}/moves", {
            mediaType: {
                previews: [ "inertia" ]
            }
        } ],
        removeCollaborator: [ "DELETE /projects/{project_id}/collaborators/{username}", {
            mediaType: {
                previews: [ "inertia" ]
            }
        } ],
        update: [ "PATCH /projects/{project_id}", {
            mediaType: {
                previews: [ "inertia" ]
            }
        } ],
        updateCard: [ "PATCH /projects/columns/cards/{card_id}", {
            mediaType: {
                previews: [ "inertia" ]
            }
        } ],
        updateColumn: [ "PATCH /projects/columns/{column_id}", {
            mediaType: {
                previews: [ "inertia" ]
            }
        } ]
    },
    pulls: {
        checkIfMerged: [ "GET /repos/{owner}/{repo}/pulls/{pull_number}/merge" ],
        create: [ "POST /repos/{owner}/{repo}/pulls" ],
        createReplyForReviewComment: [ "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies" ],
        createReview: [ "POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews" ],
        createReviewComment: [ "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments" ],
        deletePendingReview: [ "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}" ],
        deleteReviewComment: [ "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}" ],
        dismissReview: [ "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals" ],
        get: [ "GET /repos/{owner}/{repo}/pulls/{pull_number}" ],
        getReview: [ "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}" ],
        getReviewComment: [ "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}" ],
        list: [ "GET /repos/{owner}/{repo}/pulls" ],
        listCommentsForReview: [ "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments" ],
        listCommits: [ "GET /repos/{owner}/{repo}/pulls/{pull_number}/commits" ],
        listFiles: [ "GET /repos/{owner}/{repo}/pulls/{pull_number}/files" ],
        listRequestedReviewers: [ "GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers" ],
        listReviewComments: [ "GET /repos/{owner}/{repo}/pulls/{pull_number}/comments" ],
        listReviewCommentsForRepo: [ "GET /repos/{owner}/{repo}/pulls/comments" ],
        listReviews: [ "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews" ],
        merge: [ "PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge" ],
        removeRequestedReviewers: [ "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers" ],
        requestReviewers: [ "POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers" ],
        submitReview: [ "POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events" ],
        update: [ "PATCH /repos/{owner}/{repo}/pulls/{pull_number}" ],
        updateBranch: [ "PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch", {
            mediaType: {
                previews: [ "lydian" ]
            }
        } ],
        updateReview: [ "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}" ],
        updateReviewComment: [ "PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}" ]
    },
    rateLimit: {
        get: [ "GET /rate_limit" ]
    },
    reactions: {
        createForCommitComment: [ "POST /repos/{owner}/{repo}/comments/{comment_id}/reactions", {
            mediaType: {
                previews: [ "squirrel-girl" ]
            }
        } ],
        createForIssue: [ "POST /repos/{owner}/{repo}/issues/{issue_number}/reactions", {
            mediaType: {
                previews: [ "squirrel-girl" ]
            }
        } ],
        createForIssueComment: [ "POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", {
            mediaType: {
                previews: [ "squirrel-girl" ]
            }
        } ],
        createForPullRequestReviewComment: [ "POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", {
            mediaType: {
                previews: [ "squirrel-girl" ]
            }
        } ],
        createForTeamDiscussionCommentInOrg: [ "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", {
            mediaType: {
                previews: [ "squirrel-girl" ]
            }
        } ],
        createForTeamDiscussionInOrg: [ "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", {
            mediaType: {
                previews: [ "squirrel-girl" ]
            }
        } ],
        deleteForCommitComment: [ "DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}", {
            mediaType: {
                previews: [ "squirrel-girl" ]
            }
        } ],
        deleteForIssue: [ "DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}", {
            mediaType: {
                previews: [ "squirrel-girl" ]
            }
        } ],
        deleteForIssueComment: [ "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}", {
            mediaType: {
                previews: [ "squirrel-girl" ]
            }
        } ],
        deleteForPullRequestComment: [ "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}", {
            mediaType: {
                previews: [ "squirrel-girl" ]
            }
        } ],
        deleteForTeamDiscussion: [ "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}", {
            mediaType: {
                previews: [ "squirrel-girl" ]
            }
        } ],
        deleteForTeamDiscussionComment: [ "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}", {
            mediaType: {
                previews: [ "squirrel-girl" ]
            }
        } ],
        deleteLegacy: [ "DELETE /reactions/{reaction_id}", {
            mediaType: {
                previews: [ "squirrel-girl" ]
            }
        }, {
            deprecated: "octokit.reactions.deleteLegacy() is deprecated, see https://docs.github.com/v3/reactions/#delete-a-reaction-legacy"
        } ],
        listForCommitComment: [ "GET /repos/{owner}/{repo}/comments/{comment_id}/reactions", {
            mediaType: {
                previews: [ "squirrel-girl" ]
            }
        } ],
        listForIssue: [ "GET /repos/{owner}/{repo}/issues/{issue_number}/reactions", {
            mediaType: {
                previews: [ "squirrel-girl" ]
            }
        } ],
        listForIssueComment: [ "GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", {
            mediaType: {
                previews: [ "squirrel-girl" ]
            }
        } ],
        listForPullRequestReviewComment: [ "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", {
            mediaType: {
                previews: [ "squirrel-girl" ]
            }
        } ],
        listForTeamDiscussionCommentInOrg: [ "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", {
            mediaType: {
                previews: [ "squirrel-girl" ]
            }
        } ],
        listForTeamDiscussionInOrg: [ "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", {
            mediaType: {
                previews: [ "squirrel-girl" ]
            }
        } ]
    },
    repos: {
        acceptInvitation: [ "PATCH /user/repository_invitations/{invitation_id}" ],
        addAppAccessRestrictions: [ "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", {}, {
            mapToData: "apps"
        } ],
        addCollaborator: [ "PUT /repos/{owner}/{repo}/collaborators/{username}" ],
        addStatusCheckContexts: [ "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", {}, {
            mapToData: "contexts"
        } ],
        addTeamAccessRestrictions: [ "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", {}, {
            mapToData: "teams"
        } ],
        addUserAccessRestrictions: [ "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", {}, {
            mapToData: "users"
        } ],
        checkCollaborator: [ "GET /repos/{owner}/{repo}/collaborators/{username}" ],
        checkVulnerabilityAlerts: [ "GET /repos/{owner}/{repo}/vulnerability-alerts", {
            mediaType: {
                previews: [ "dorian" ]
            }
        } ],
        compareCommits: [ "GET /repos/{owner}/{repo}/compare/{base}...{head}" ],
        createCommitComment: [ "POST /repos/{owner}/{repo}/commits/{commit_sha}/comments" ],
        createCommitSignatureProtection: [ "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", {
            mediaType: {
                previews: [ "zzzax" ]
            }
        } ],
        createCommitStatus: [ "POST /repos/{owner}/{repo}/statuses/{sha}" ],
        createDeployKey: [ "POST /repos/{owner}/{repo}/keys" ],
        createDeployment: [ "POST /repos/{owner}/{repo}/deployments" ],
        createDeploymentStatus: [ "POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses" ],
        createDispatchEvent: [ "POST /repos/{owner}/{repo}/dispatches" ],
        createForAuthenticatedUser: [ "POST /user/repos" ],
        createFork: [ "POST /repos/{owner}/{repo}/forks" ],
        createInOrg: [ "POST /orgs/{org}/repos" ],
        createOrUpdateFileContents: [ "PUT /repos/{owner}/{repo}/contents/{path}" ],
        createPagesSite: [ "POST /repos/{owner}/{repo}/pages", {
            mediaType: {
                previews: [ "switcheroo" ]
            }
        } ],
        createRelease: [ "POST /repos/{owner}/{repo}/releases" ],
        createUsingTemplate: [ "POST /repos/{template_owner}/{template_repo}/generate", {
            mediaType: {
                previews: [ "baptiste" ]
            }
        } ],
        createWebhook: [ "POST /repos/{owner}/{repo}/hooks" ],
        declineInvitation: [ "DELETE /user/repository_invitations/{invitation_id}" ],
        delete: [ "DELETE /repos/{owner}/{repo}" ],
        deleteAccessRestrictions: [ "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions" ],
        deleteAdminBranchProtection: [ "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins" ],
        deleteBranchProtection: [ "DELETE /repos/{owner}/{repo}/branches/{branch}/protection" ],
        deleteCommitComment: [ "DELETE /repos/{owner}/{repo}/comments/{comment_id}" ],
        deleteCommitSignatureProtection: [ "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", {
            mediaType: {
                previews: [ "zzzax" ]
            }
        } ],
        deleteDeployKey: [ "DELETE /repos/{owner}/{repo}/keys/{key_id}" ],
        deleteDeployment: [ "DELETE /repos/{owner}/{repo}/deployments/{deployment_id}" ],
        deleteFile: [ "DELETE /repos/{owner}/{repo}/contents/{path}" ],
        deleteInvitation: [ "DELETE /repos/{owner}/{repo}/invitations/{invitation_id}" ],
        deletePagesSite: [ "DELETE /repos/{owner}/{repo}/pages", {
            mediaType: {
                previews: [ "switcheroo" ]
            }
        } ],
        deletePullRequestReviewProtection: [ "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews" ],
        deleteRelease: [ "DELETE /repos/{owner}/{repo}/releases/{release_id}" ],
        deleteReleaseAsset: [ "DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}" ],
        deleteWebhook: [ "DELETE /repos/{owner}/{repo}/hooks/{hook_id}" ],
        disableAutomatedSecurityFixes: [ "DELETE /repos/{owner}/{repo}/automated-security-fixes", {
            mediaType: {
                previews: [ "london" ]
            }
        } ],
        disableVulnerabilityAlerts: [ "DELETE /repos/{owner}/{repo}/vulnerability-alerts", {
            mediaType: {
                previews: [ "dorian" ]
            }
        } ],
        downloadArchive: [ "GET /repos/{owner}/{repo}/zipball/{ref}", {}, {
            renamed: [ "repos", "downloadZipballArchive" ]
        } ],
        downloadTarballArchive: [ "GET /repos/{owner}/{repo}/tarball/{ref}" ],
        downloadZipballArchive: [ "GET /repos/{owner}/{repo}/zipball/{ref}" ],
        enableAutomatedSecurityFixes: [ "PUT /repos/{owner}/{repo}/automated-security-fixes", {
            mediaType: {
                previews: [ "london" ]
            }
        } ],
        enableVulnerabilityAlerts: [ "PUT /repos/{owner}/{repo}/vulnerability-alerts", {
            mediaType: {
                previews: [ "dorian" ]
            }
        } ],
        get: [ "GET /repos/{owner}/{repo}" ],
        getAccessRestrictions: [ "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions" ],
        getAdminBranchProtection: [ "GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins" ],
        getAllStatusCheckContexts: [ "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts" ],
        getAllTopics: [ "GET /repos/{owner}/{repo}/topics", {
            mediaType: {
                previews: [ "mercy" ]
            }
        } ],
        getAppsWithAccessToProtectedBranch: [ "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps" ],
        getBranch: [ "GET /repos/{owner}/{repo}/branches/{branch}" ],
        getBranchProtection: [ "GET /repos/{owner}/{repo}/branches/{branch}/protection" ],
        getClones: [ "GET /repos/{owner}/{repo}/traffic/clones" ],
        getCodeFrequencyStats: [ "GET /repos/{owner}/{repo}/stats/code_frequency" ],
        getCollaboratorPermissionLevel: [ "GET /repos/{owner}/{repo}/collaborators/{username}/permission" ],
        getCombinedStatusForRef: [ "GET /repos/{owner}/{repo}/commits/{ref}/status" ],
        getCommit: [ "GET /repos/{owner}/{repo}/commits/{ref}" ],
        getCommitActivityStats: [ "GET /repos/{owner}/{repo}/stats/commit_activity" ],
        getCommitComment: [ "GET /repos/{owner}/{repo}/comments/{comment_id}" ],
        getCommitSignatureProtection: [ "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", {
            mediaType: {
                previews: [ "zzzax" ]
            }
        } ],
        getCommunityProfileMetrics: [ "GET /repos/{owner}/{repo}/community/profile" ],
        getContent: [ "GET /repos/{owner}/{repo}/contents/{path}" ],
        getContributorsStats: [ "GET /repos/{owner}/{repo}/stats/contributors" ],
        getDeployKey: [ "GET /repos/{owner}/{repo}/keys/{key_id}" ],
        getDeployment: [ "GET /repos/{owner}/{repo}/deployments/{deployment_id}" ],
        getDeploymentStatus: [ "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}" ],
        getLatestPagesBuild: [ "GET /repos/{owner}/{repo}/pages/builds/latest" ],
        getLatestRelease: [ "GET /repos/{owner}/{repo}/releases/latest" ],
        getPages: [ "GET /repos/{owner}/{repo}/pages" ],
        getPagesBuild: [ "GET /repos/{owner}/{repo}/pages/builds/{build_id}" ],
        getParticipationStats: [ "GET /repos/{owner}/{repo}/stats/participation" ],
        getPullRequestReviewProtection: [ "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews" ],
        getPunchCardStats: [ "GET /repos/{owner}/{repo}/stats/punch_card" ],
        getReadme: [ "GET /repos/{owner}/{repo}/readme" ],
        getRelease: [ "GET /repos/{owner}/{repo}/releases/{release_id}" ],
        getReleaseAsset: [ "GET /repos/{owner}/{repo}/releases/assets/{asset_id}" ],
        getReleaseByTag: [ "GET /repos/{owner}/{repo}/releases/tags/{tag}" ],
        getStatusChecksProtection: [ "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks" ],
        getTeamsWithAccessToProtectedBranch: [ "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams" ],
        getTopPaths: [ "GET /repos/{owner}/{repo}/traffic/popular/paths" ],
        getTopReferrers: [ "GET /repos/{owner}/{repo}/traffic/popular/referrers" ],
        getUsersWithAccessToProtectedBranch: [ "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users" ],
        getViews: [ "GET /repos/{owner}/{repo}/traffic/views" ],
        getWebhook: [ "GET /repos/{owner}/{repo}/hooks/{hook_id}" ],
        getWebhookConfigForRepo: [ "GET /repos/{owner}/{repo}/hooks/{hook_id}/config" ],
        listBranches: [ "GET /repos/{owner}/{repo}/branches" ],
        listBranchesForHeadCommit: [ "GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head", {
            mediaType: {
                previews: [ "groot" ]
            }
        } ],
        listCollaborators: [ "GET /repos/{owner}/{repo}/collaborators" ],
        listCommentsForCommit: [ "GET /repos/{owner}/{repo}/commits/{commit_sha}/comments" ],
        listCommitCommentsForRepo: [ "GET /repos/{owner}/{repo}/comments" ],
        listCommitStatusesForRef: [ "GET /repos/{owner}/{repo}/commits/{ref}/statuses" ],
        listCommits: [ "GET /repos/{owner}/{repo}/commits" ],
        listContributors: [ "GET /repos/{owner}/{repo}/contributors" ],
        listDeployKeys: [ "GET /repos/{owner}/{repo}/keys" ],
        listDeploymentStatuses: [ "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses" ],
        listDeployments: [ "GET /repos/{owner}/{repo}/deployments" ],
        listForAuthenticatedUser: [ "GET /user/repos" ],
        listForOrg: [ "GET /orgs/{org}/repos" ],
        listForUser: [ "GET /users/{username}/repos" ],
        listForks: [ "GET /repos/{owner}/{repo}/forks" ],
        listInvitations: [ "GET /repos/{owner}/{repo}/invitations" ],
        listInvitationsForAuthenticatedUser: [ "GET /user/repository_invitations" ],
        listLanguages: [ "GET /repos/{owner}/{repo}/languages" ],
        listPagesBuilds: [ "GET /repos/{owner}/{repo}/pages/builds" ],
        listPublic: [ "GET /repositories" ],
        listPullRequestsAssociatedWithCommit: [ "GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls", {
            mediaType: {
                previews: [ "groot" ]
            }
        } ],
        listReleaseAssets: [ "GET /repos/{owner}/{repo}/releases/{release_id}/assets" ],
        listReleases: [ "GET /repos/{owner}/{repo}/releases" ],
        listTags: [ "GET /repos/{owner}/{repo}/tags" ],
        listTeams: [ "GET /repos/{owner}/{repo}/teams" ],
        listWebhooks: [ "GET /repos/{owner}/{repo}/hooks" ],
        merge: [ "POST /repos/{owner}/{repo}/merges" ],
        pingWebhook: [ "POST /repos/{owner}/{repo}/hooks/{hook_id}/pings" ],
        removeAppAccessRestrictions: [ "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", {}, {
            mapToData: "apps"
        } ],
        removeCollaborator: [ "DELETE /repos/{owner}/{repo}/collaborators/{username}" ],
        removeStatusCheckContexts: [ "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", {}, {
            mapToData: "contexts"
        } ],
        removeStatusCheckProtection: [ "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks" ],
        removeTeamAccessRestrictions: [ "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", {}, {
            mapToData: "teams"
        } ],
        removeUserAccessRestrictions: [ "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", {}, {
            mapToData: "users"
        } ],
        replaceAllTopics: [ "PUT /repos/{owner}/{repo}/topics", {
            mediaType: {
                previews: [ "mercy" ]
            }
        } ],
        requestPagesBuild: [ "POST /repos/{owner}/{repo}/pages/builds" ],
        setAdminBranchProtection: [ "POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins" ],
        setAppAccessRestrictions: [ "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", {}, {
            mapToData: "apps"
        } ],
        setStatusCheckContexts: [ "PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", {}, {
            mapToData: "contexts"
        } ],
        setTeamAccessRestrictions: [ "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", {}, {
            mapToData: "teams"
        } ],
        setUserAccessRestrictions: [ "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", {}, {
            mapToData: "users"
        } ],
        testPushWebhook: [ "POST /repos/{owner}/{repo}/hooks/{hook_id}/tests" ],
        transfer: [ "POST /repos/{owner}/{repo}/transfer" ],
        update: [ "PATCH /repos/{owner}/{repo}" ],
        updateBranchProtection: [ "PUT /repos/{owner}/{repo}/branches/{branch}/protection" ],
        updateCommitComment: [ "PATCH /repos/{owner}/{repo}/comments/{comment_id}" ],
        updateInformationAboutPagesSite: [ "PUT /repos/{owner}/{repo}/pages" ],
        updateInvitation: [ "PATCH /repos/{owner}/{repo}/invitations/{invitation_id}" ],
        updatePullRequestReviewProtection: [ "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews" ],
        updateRelease: [ "PATCH /repos/{owner}/{repo}/releases/{release_id}" ],
        updateReleaseAsset: [ "PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}" ],
        updateStatusCheckPotection: [ "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", {}, {
            renamed: [ "repos", "updateStatusCheckProtection" ]
        } ],
        updateStatusCheckProtection: [ "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks" ],
        updateWebhook: [ "PATCH /repos/{owner}/{repo}/hooks/{hook_id}" ],
        updateWebhookConfigForRepo: [ "PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config" ],
        uploadReleaseAsset: [ "POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}", {
            baseUrl: "https://uploads.github.com"
        } ]
    },
    search: {
        code: [ "GET /search/code" ],
        commits: [ "GET /search/commits", {
            mediaType: {
                previews: [ "cloak" ]
            }
        } ],
        issuesAndPullRequests: [ "GET /search/issues" ],
        labels: [ "GET /search/labels" ],
        repos: [ "GET /search/repositories" ],
        topics: [ "GET /search/topics", {
            mediaType: {
                previews: [ "mercy" ]
            }
        } ],
        users: [ "GET /search/users" ]
    },
    secretScanning: {
        getAlert: [ "GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}" ],
        listAlertsForRepo: [ "GET /repos/{owner}/{repo}/secret-scanning/alerts" ],
        updateAlert: [ "PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}" ]
    },
    teams: {
        addOrUpdateMembershipForUserInOrg: [ "PUT /orgs/{org}/teams/{team_slug}/memberships/{username}" ],
        addOrUpdateProjectPermissionsInOrg: [ "PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}", {
            mediaType: {
                previews: [ "inertia" ]
            }
        } ],
        addOrUpdateRepoPermissionsInOrg: [ "PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}" ],
        checkPermissionsForProjectInOrg: [ "GET /orgs/{org}/teams/{team_slug}/projects/{project_id}", {
            mediaType: {
                previews: [ "inertia" ]
            }
        } ],
        checkPermissionsForRepoInOrg: [ "GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}" ],
        create: [ "POST /orgs/{org}/teams" ],
        createDiscussionCommentInOrg: [ "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments" ],
        createDiscussionInOrg: [ "POST /orgs/{org}/teams/{team_slug}/discussions" ],
        deleteDiscussionCommentInOrg: [ "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}" ],
        deleteDiscussionInOrg: [ "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}" ],
        deleteInOrg: [ "DELETE /orgs/{org}/teams/{team_slug}" ],
        getByName: [ "GET /orgs/{org}/teams/{team_slug}" ],
        getDiscussionCommentInOrg: [ "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}" ],
        getDiscussionInOrg: [ "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}" ],
        getMembershipForUserInOrg: [ "GET /orgs/{org}/teams/{team_slug}/memberships/{username}" ],
        list: [ "GET /orgs/{org}/teams" ],
        listChildInOrg: [ "GET /orgs/{org}/teams/{team_slug}/teams" ],
        listDiscussionCommentsInOrg: [ "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments" ],
        listDiscussionsInOrg: [ "GET /orgs/{org}/teams/{team_slug}/discussions" ],
        listForAuthenticatedUser: [ "GET /user/teams" ],
        listMembersInOrg: [ "GET /orgs/{org}/teams/{team_slug}/members" ],
        listPendingInvitationsInOrg: [ "GET /orgs/{org}/teams/{team_slug}/invitations" ],
        listProjectsInOrg: [ "GET /orgs/{org}/teams/{team_slug}/projects", {
            mediaType: {
                previews: [ "inertia" ]
            }
        } ],
        listReposInOrg: [ "GET /orgs/{org}/teams/{team_slug}/repos" ],
        removeMembershipForUserInOrg: [ "DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}" ],
        removeProjectInOrg: [ "DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}" ],
        removeRepoInOrg: [ "DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}" ],
        updateDiscussionCommentInOrg: [ "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}" ],
        updateDiscussionInOrg: [ "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}" ],
        updateInOrg: [ "PATCH /orgs/{org}/teams/{team_slug}" ]
    },
    users: {
        addEmailForAuthenticated: [ "POST /user/emails" ],
        block: [ "PUT /user/blocks/{username}" ],
        checkBlocked: [ "GET /user/blocks/{username}" ],
        checkFollowingForUser: [ "GET /users/{username}/following/{target_user}" ],
        checkPersonIsFollowedByAuthenticated: [ "GET /user/following/{username}" ],
        createGpgKeyForAuthenticated: [ "POST /user/gpg_keys" ],
        createPublicSshKeyForAuthenticated: [ "POST /user/keys" ],
        deleteEmailForAuthenticated: [ "DELETE /user/emails" ],
        deleteGpgKeyForAuthenticated: [ "DELETE /user/gpg_keys/{gpg_key_id}" ],
        deletePublicSshKeyForAuthenticated: [ "DELETE /user/keys/{key_id}" ],
        follow: [ "PUT /user/following/{username}" ],
        getAuthenticated: [ "GET /user" ],
        getByUsername: [ "GET /users/{username}" ],
        getContextForUser: [ "GET /users/{username}/hovercard" ],
        getGpgKeyForAuthenticated: [ "GET /user/gpg_keys/{gpg_key_id}" ],
        getPublicSshKeyForAuthenticated: [ "GET /user/keys/{key_id}" ],
        list: [ "GET /users" ],
        listBlockedByAuthenticated: [ "GET /user/blocks" ],
        listEmailsForAuthenticated: [ "GET /user/emails" ],
        listFollowedByAuthenticated: [ "GET /user/following" ],
        listFollowersForAuthenticatedUser: [ "GET /user/followers" ],
        listFollowersForUser: [ "GET /users/{username}/followers" ],
        listFollowingForUser: [ "GET /users/{username}/following" ],
        listGpgKeysForAuthenticated: [ "GET /user/gpg_keys" ],
        listGpgKeysForUser: [ "GET /users/{username}/gpg_keys" ],
        listPublicEmailsForAuthenticated: [ "GET /user/public_emails" ],
        listPublicKeysForUser: [ "GET /users/{username}/keys" ],
        listPublicSshKeysForAuthenticated: [ "GET /user/keys" ],
        setPrimaryEmailVisibilityForAuthenticated: [ "PATCH /user/email/visibility" ],
        unblock: [ "DELETE /user/blocks/{username}" ],
        unfollow: [ "DELETE /user/following/{username}" ],
        updateAuthenticated: [ "PATCH /user" ]
    }
};

const Rr = "4.4.1";

function xr(e, t) {
    const r = {};
    for (const [o, s] of Object.entries(t)) {
        for (const [t, n] of Object.entries(s)) {
            const [s, i, a] = n;
            const [u, c] = s.split(/ /);
            const l = Object.assign({
                method: u,
                url: c
            }, i);
            if (!r[o]) {
                r[o] = {};
            }
            const p = r[o];
            if (a) {
                p[t] = Fr(e, o, t, l, a);
                continue;
            }
            p[t] = e.request.defaults(l);
        }
    }
    return r;
}

function Fr(e, t, r, o, s) {
    const n = e.request.defaults(o);
    function i(...o) {
        let i = n.endpoint.merge(...o);
        if (s.mapToData) {
            i = Object.assign({}, i, {
                data: i[s.mapToData],
                [s.mapToData]: undefined
            });
            return n(i);
        }
        if (s.renamed) {
            const [o, n] = s.renamed;
            e.log.warn(`octokit.${t}.${r}() has been renamed to octokit.${o}.${n}()`);
        }
        if (s.deprecated) {
            e.log.warn(s.deprecated);
        }
        if (s.renamedParameters) {
            const i = n.endpoint.merge(...o);
            for (const [o, n] of Object.entries(s.renamedParameters)) {
                if (o in i) {
                    e.log.warn(`"${o}" parameter is deprecated for "octokit.${t}.${r}()". Use "${n}" instead`);
                    if (!(n in i)) {
                        i[n] = i[o];
                    }
                    delete i[o];
                }
            }
            return n(i);
        }
        return n(...o);
    }
    return Object.assign(i, n);
}

function Ur(e) {
    return xr(e, jr);
}

Ur.VERSION = Rr;

var Dr = Object.freeze({
    __proto__: null,
    restEndpointMethods: Ur
});

const $r = "2.6.2";

function qr(e) {
    const t = "total_count" in e.data && !("url" in e.data);
    if (!t) return e;
    const r = e.data.incomplete_results;
    const o = e.data.repository_selection;
    const s = e.data.total_count;
    delete e.data.incomplete_results;
    delete e.data.repository_selection;
    delete e.data.total_count;
    const n = Object.keys(e.data)[0];
    const i = e.data[n];
    e.data = i;
    if (typeof r !== "undefined") {
        e.data.incomplete_results = r;
    }
    if (typeof o !== "undefined") {
        e.data.repository_selection = o;
    }
    e.data.total_count = s;
    return e;
}

function Lr(e, t, r) {
    const o = typeof t === "function" ? t.endpoint(r) : e.request.endpoint(t, r);
    const s = typeof t === "function" ? t : e.request;
    const n = o.method;
    const i = o.headers;
    let a = o.url;
    return {
        [Symbol.asyncIterator]: () => ({
            async next() {
                if (!a) return {
                    done: true
                };
                const e = await s({
                    method: n,
                    url: a,
                    headers: i
                });
                const t = qr(e);
                a = ((t.headers.link || "").match(/<([^>]+)>;\s*rel="next"/) || [])[1];
                return {
                    value: t
                };
            }
        })
    };
}

function Br(e, t, r, o) {
    if (typeof r === "function") {
        o = r;
        r = undefined;
    }
    return Ir(e, [], Lr(e, t, r)[Symbol.asyncIterator](), o);
}

function Ir(e, t, r, o) {
    return r.next().then((s => {
        if (s.done) {
            return t;
        }
        let n = false;
        function i() {
            n = true;
        }
        t = t.concat(o ? o(s.value, i) : s.value.data);
        if (n) {
            return t;
        }
        return Ir(e, t, r, o);
    }));
}

const zr = Object.assign(Br, {
    iterator: Lr
});

function Hr(e) {
    return {
        paginate: Object.assign(Br.bind(null, e), {
            iterator: Lr.bind(null, e)
        })
    };
}

Hr.VERSION = $r;

var Mr = Object.freeze({
    __proto__: null,
    composePaginateRest: zr,
    paginateRest: Hr
});

var Nr = A(Cr);

var Wr = A(Dr);

var Vr = A(Mr);

var Jr = G((function(e, t) {
    var r = S && S.__createBinding || (Object.create ? function(e, t, r, o) {
        if (o === undefined) o = r;
        Object.defineProperty(e, o, {
            enumerable: true,
            get: function() {
                return t[r];
            }
        });
    } : function(e, t, r, o) {
        if (o === undefined) o = r;
        e[o] = t[r];
    });
    var o = S && S.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: true,
            value: t
        });
    } : function(e, t) {
        e["default"] = t;
    });
    var s = S && S.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) for (var s in e) if (Object.hasOwnProperty.call(e, s)) r(t, e, s);
        o(t, e);
        return t;
    };
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    t.getOctokitOptions = t.GitHub = t.context = void 0;
    const n = s(Z);
    const i = s(ve);
    t.context = new n.Context;
    const a = i.getApiBaseUrl();
    const u = {
        baseUrl: a,
        request: {
            agent: i.getProxyAgent(a)
        }
    };
    t.GitHub = Nr.Octokit.plugin(Wr.restEndpointMethods, Vr.paginateRest).defaults(u);
    function c(e, t) {
        const r = Object.assign({}, t || {});
        const o = i.getAuthString(e, r);
        if (o) {
            r.auth = o;
        }
        return r;
    }
    t.getOctokitOptions = c;
}));

var Kr = G((function(e, t) {
    var r = S && S.__createBinding || (Object.create ? function(e, t, r, o) {
        if (o === undefined) o = r;
        Object.defineProperty(e, o, {
            enumerable: true,
            get: function() {
                return t[r];
            }
        });
    } : function(e, t, r, o) {
        if (o === undefined) o = r;
        e[o] = t[r];
    });
    var o = S && S.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: true,
            value: t
        });
    } : function(e, t) {
        e["default"] = t;
    });
    var s = S && S.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) for (var s in e) if (Object.hasOwnProperty.call(e, s)) r(t, e, s);
        o(t, e);
        return t;
    };
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    t.getOctokit = t.context = void 0;
    const n = s(Z);
    t.context = new n.Context;
    function i(e, t) {
        return new Jr.GitHub(Jr.getOctokitOptions(e, t));
    }
    t.getOctokit = i;
}));

const Yr = e => `\`${e}\``;

const Zr = (e, t) => `[${e}](${t})`;

const Qr = e => `<sub>${e}</sub>`;

const Xr = e => `<sup>${e}</sup>`;

const eo = e => `**${e}**`;

async function to({token: e, commentSignature: t, repo: r, prNumber: o, body: s}) {
    Y.startGroup("Comment on PR");
    s += `\n\n${t}`;
    const n = Kr.getOctokit(e);
    Y.info("Getting list of comments");
    const {data: i} = await n.issues.listComments({
        ...r,
        issue_number: o
    });
    const a = i.find((e => e.body.endsWith(t)));
    if (a) {
        Y.info(`Updating previous comment ID ${a.id}`);
        await n.issues.updateComment({
            ...r,
            comment_id: a.id,
            body: s
        });
    } else {
        Y.info("Posting new comment");
        await n.issues.createComment({
            ...r,
            issue_number: o,
            body: s
        });
    }
    Y.endGroup();
}

var ro = G((function(e, t) {
    (function(t, r) {
        e.exports = r();
    })(S, (function() {
        let e = {};
        const t = new WeakMap;
        class r {
            constructor(r, o) {
                o = Object.assign({
                    units: "metric",
                    precision: 1
                }, e, o);
                t.set(this, o);
                const s = {
                    metric: [ {
                        from: 0,
                        to: 1e3,
                        unit: "B",
                        long: "bytes"
                    }, {
                        from: 1e3,
                        to: 1e6,
                        unit: "kB",
                        long: "kilobytes"
                    }, {
                        from: 1e6,
                        to: 1e9,
                        unit: "MB",
                        long: "megabytes"
                    }, {
                        from: 1e9,
                        to: 1e12,
                        unit: "GB",
                        long: "gigabytes"
                    }, {
                        from: 1e12,
                        to: 1e15,
                        unit: "TB",
                        long: "terabytes"
                    }, {
                        from: 1e15,
                        to: 1e18,
                        unit: "PB",
                        long: "petabytes"
                    }, {
                        from: 1e18,
                        to: 1e21,
                        unit: "EB",
                        long: "exabytes"
                    }, {
                        from: 1e21,
                        to: 1e24,
                        unit: "ZB",
                        long: "zettabytes"
                    }, {
                        from: 1e24,
                        to: 1e27,
                        unit: "YB",
                        long: "yottabytes"
                    } ],
                    metric_octet: [ {
                        from: 0,
                        to: 1e3,
                        unit: "o",
                        long: "octets"
                    }, {
                        from: 1e3,
                        to: 1e6,
                        unit: "ko",
                        long: "kilooctets"
                    }, {
                        from: 1e6,
                        to: 1e9,
                        unit: "Mo",
                        long: "megaoctets"
                    }, {
                        from: 1e9,
                        to: 1e12,
                        unit: "Go",
                        long: "gigaoctets"
                    }, {
                        from: 1e12,
                        to: 1e15,
                        unit: "To",
                        long: "teraoctets"
                    }, {
                        from: 1e15,
                        to: 1e18,
                        unit: "Po",
                        long: "petaoctets"
                    }, {
                        from: 1e18,
                        to: 1e21,
                        unit: "Eo",
                        long: "exaoctets"
                    }, {
                        from: 1e21,
                        to: 1e24,
                        unit: "Zo",
                        long: "zettaoctets"
                    }, {
                        from: 1e24,
                        to: 1e27,
                        unit: "Yo",
                        long: "yottaoctets"
                    } ],
                    iec: [ {
                        from: 0,
                        to: Math.pow(1024, 1),
                        unit: "B",
                        long: "bytes"
                    }, {
                        from: Math.pow(1024, 1),
                        to: Math.pow(1024, 2),
                        unit: "KiB",
                        long: "kibibytes"
                    }, {
                        from: Math.pow(1024, 2),
                        to: Math.pow(1024, 3),
                        unit: "MiB",
                        long: "mebibytes"
                    }, {
                        from: Math.pow(1024, 3),
                        to: Math.pow(1024, 4),
                        unit: "GiB",
                        long: "gibibytes"
                    }, {
                        from: Math.pow(1024, 4),
                        to: Math.pow(1024, 5),
                        unit: "TiB",
                        long: "tebibytes"
                    }, {
                        from: Math.pow(1024, 5),
                        to: Math.pow(1024, 6),
                        unit: "PiB",
                        long: "pebibytes"
                    }, {
                        from: Math.pow(1024, 6),
                        to: Math.pow(1024, 7),
                        unit: "EiB",
                        long: "exbibytes"
                    }, {
                        from: Math.pow(1024, 7),
                        to: Math.pow(1024, 8),
                        unit: "ZiB",
                        long: "zebibytes"
                    }, {
                        from: Math.pow(1024, 8),
                        to: Math.pow(1024, 9),
                        unit: "YiB",
                        long: "yobibytes"
                    } ],
                    iec_octet: [ {
                        from: 0,
                        to: Math.pow(1024, 1),
                        unit: "o",
                        long: "octets"
                    }, {
                        from: Math.pow(1024, 1),
                        to: Math.pow(1024, 2),
                        unit: "Kio",
                        long: "kibioctets"
                    }, {
                        from: Math.pow(1024, 2),
                        to: Math.pow(1024, 3),
                        unit: "Mio",
                        long: "mebioctets"
                    }, {
                        from: Math.pow(1024, 3),
                        to: Math.pow(1024, 4),
                        unit: "Gio",
                        long: "gibioctets"
                    }, {
                        from: Math.pow(1024, 4),
                        to: Math.pow(1024, 5),
                        unit: "Tio",
                        long: "tebioctets"
                    }, {
                        from: Math.pow(1024, 5),
                        to: Math.pow(1024, 6),
                        unit: "Pio",
                        long: "pebioctets"
                    }, {
                        from: Math.pow(1024, 6),
                        to: Math.pow(1024, 7),
                        unit: "Eio",
                        long: "exbioctets"
                    }, {
                        from: Math.pow(1024, 7),
                        to: Math.pow(1024, 8),
                        unit: "Zio",
                        long: "zebioctets"
                    }, {
                        from: Math.pow(1024, 8),
                        to: Math.pow(1024, 9),
                        unit: "Yio",
                        long: "yobioctets"
                    } ]
                };
                Object.assign(s, o.customUnits);
                const n = r < 0 ? "-" : "";
                r = Math.abs(r);
                const i = s[o.units];
                if (i) {
                    const e = i.find((e => r >= e.from && r < e.to));
                    if (e) {
                        const t = e.from === 0 ? n + r : n + (r / e.from).toFixed(o.precision);
                        this.value = t;
                        this.unit = e.unit;
                        this.long = e.long;
                    } else {
                        this.value = n + r;
                        this.unit = "";
                        this.long = "";
                    }
                } else {
                    throw new Error(`Invalid units specified: ${o.units}`);
                }
            }
            toString() {
                const e = t.get(this);
                return e.toStringFn ? e.toStringFn.bind(this)() : `${this.value} ${this.unit}`;
            }
        }
        function o(e, t) {
            return new r(e, t);
        }
        o.defaultOptions = function(t) {
            e = t;
        };
        return o;
    }));
}));

/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */ var oo = "";

var so;

var no = io;

function io(e, t) {
    if (typeof e !== "string") {
        throw new TypeError("expected a string");
    }
    if (t === 1) return e;
    if (t === 2) return e + e;
    var r = e.length * t;
    if (so !== e || typeof so === "undefined") {
        so = e;
        oo = "";
    } else if (oo.length >= r) {
        return oo.substr(0, r);
    }
    while (r > oo.length && t > 1) {
        if (t & 1) {
            oo += e;
        }
        t >>= 1;
        e += e;
    }
    oo += e;
    oo = oo.substr(0, r);
    return oo;
}

var ao = Eo;

var uo = / +$/;

var co = " ";

var lo = "\n";

var po = "-";

var fo = ":";

var mo = "|";

var ho = 0;

var go = 67;

var bo = 76;

var wo = 82;

var yo = 99;

var vo = 108;

var To = 114;

function Eo(e, t) {
    var r = t || {};
    var o = r.padding !== false;
    var s = r.delimiterStart !== false;
    var n = r.delimiterEnd !== false;
    var i = (r.align || []).concat();
    var a = r.alignDelimiters !== false;
    var u = [];
    var c = r.stringLength || Oo;
    var l = -1;
    var p = e.length;
    var d = [];
    var f = [];
    var m = [];
    var h = [];
    var g = [];
    var b = 0;
    var w;
    var y;
    var v;
    var T;
    var E;
    var _;
    var O;
    var P;
    var k;
    var S;
    var A;
    while (++l < p) {
        w = e[l];
        y = -1;
        v = w.length;
        m = [];
        h = [];
        if (v > b) {
            b = v;
        }
        while (++y < v) {
            _ = _o(w[y]);
            if (a === true) {
                E = c(_);
                h[y] = E;
                T = g[y];
                if (T === undefined || E > T) {
                    g[y] = E;
                }
            }
            m.push(_);
        }
        d[l] = m;
        f[l] = h;
    }
    y = -1;
    v = b;
    if (typeof i === "object" && "length" in i) {
        while (++y < v) {
            u[y] = Po(i[y]);
        }
    } else {
        A = Po(i);
        while (++y < v) {
            u[y] = A;
        }
    }
    y = -1;
    v = b;
    m = [];
    h = [];
    while (++y < v) {
        A = u[y];
        k = "";
        S = "";
        if (A === vo) {
            k = fo;
        } else if (A === To) {
            S = fo;
        } else if (A === yo) {
            k = fo;
            S = fo;
        }
        E = a ? Math.max(1, g[y] - k.length - S.length) : 1;
        _ = k + no(po, E) + S;
        if (a === true) {
            E = k.length + E + S.length;
            if (E > g[y]) {
                g[y] = E;
            }
            h[y] = E;
        }
        m[y] = _;
    }
    d.splice(1, 0, m);
    f.splice(1, 0, h);
    l = -1;
    p = d.length;
    O = [];
    while (++l < p) {
        m = d[l];
        h = f[l];
        y = -1;
        v = b;
        P = [];
        while (++y < v) {
            _ = m[y] || "";
            k = "";
            S = "";
            if (a === true) {
                E = g[y] - (h[y] || 0);
                A = u[y];
                if (A === To) {
                    k = no(co, E);
                } else if (A === yo) {
                    if (E % 2 === 0) {
                        k = no(co, E / 2);
                        S = k;
                    } else {
                        k = no(co, E / 2 + .5);
                        S = no(co, E / 2 - .5);
                    }
                } else {
                    S = no(co, E);
                }
            }
            if (s === true && y === 0) {
                P.push(mo);
            }
            if (o === true && !(a === false && _ === "") && (s === true || y !== 0)) {
                P.push(co);
            }
            if (a === true) {
                P.push(k);
            }
            P.push(_);
            if (a === true) {
                P.push(S);
            }
            if (o === true) {
                P.push(co);
            }
            if (n === true || y !== v - 1) {
                P.push(mo);
            }
        }
        P = P.join("");
        if (n === false) {
            P = P.replace(uo, "");
        }
        O.push(P);
    }
    return O.join(lo);
}

function _o(e) {
    return e === null || e === undefined ? "" : String(e);
}

function Oo(e) {
    return e.length;
}

function Po(e) {
    var t = typeof e === "string" ? e.charCodeAt(0) : ho;
    return t === bo || t === vo ? vo : t === wo || t === To ? To : t === go || t === yo ? yo : ho;
}

function ko() {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
        e[t] = arguments[t];
    }
}

function So() {
    if (typeof WeakMap !== "undefined") {
        return new WeakMap;
    } else {
        return Ao();
    }
}

function Ao() {
    return {
        add: ko,
        delete: ko,
        get: ko,
        set: ko,
        has: function(e) {
            return false;
        }
    };
}

var Go = Object.prototype.hasOwnProperty;

var Co = function(e, t) {
    return Go.call(e, t);
};

function jo(e, t) {
    for (var r in t) {
        if (Co(t, r)) {
            e[r] = t[r];
        }
    }
    return e;
}

var Ro = /^[ \t]*(?:\r\n|\r|\n)/;

var xo = /(?:\r\n|\r|\n)[ \t]*$/;

var Fo = /^(?:[\r\n]|$)/;

var Uo = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/;

var Do = /^[ \t]*[\r\n][ \t\r\n]*$/;

function $o(e, t, r) {
    var o = 0;
    var s = e[0].match(Uo);
    if (s) {
        o = s[1].length;
    }
    var n = "(\\r\\n|\\r|\\n).{0," + o + "}";
    var i = new RegExp(n, "g");
    if (t) {
        e = e.slice(1);
    }
    var a = r.newline, u = r.trimLeadingNewline, c = r.trimTrailingNewline;
    var l = typeof a === "string";
    var p = e.length;
    var d = e.map((function(e, t) {
        e = e.replace(i, "$1");
        if (t === 0 && u) {
            e = e.replace(Ro, "");
        }
        if (t === p - 1 && c) {
            e = e.replace(xo, "");
        }
        if (l) {
            e = e.replace(/\r\n|\n|\r/g, (function(e) {
                return a;
            }));
        }
        return e;
    }));
    return d;
}

function qo(e, t) {
    var r = "";
    for (var o = 0, s = e.length; o < s; o++) {
        r += e[o];
        if (o < s - 1) {
            r += t[o];
        }
    }
    return r;
}

function Lo(e) {
    return Co(e, "raw") && Co(e, "length");
}

function Bo(e) {
    var t = So();
    var r = So();
    function o(s) {
        var n = [];
        for (var i = 1; i < arguments.length; i++) {
            n[i - 1] = arguments[i];
        }
        if (Lo(s)) {
            var a = s;
            var u = (n[0] === o || n[0] === Io) && Do.test(a[0]) && Fo.test(a[1]);
            var c = u ? r : t;
            var l = c.get(a);
            if (!l) {
                l = $o(a, u, e);
                c.set(a, l);
            }
            if (n.length === 0) {
                return l[0];
            }
            var p = qo(l, u ? n.slice(1) : n);
            return p;
        } else {
            return Bo(jo(jo({}, e), s || {}));
        }
    }
    var s = jo(o, {
        string: function(t) {
            return $o([ t ], false, e)[0];
        }
    });
    return s;
}

var Io = Bo({
    trimLeadingNewline: true,
    trimTrailingNewline: true
});

if (typeof module !== "undefined") {
    try {
        module.exports = Io;
        Object.defineProperty(Io, "__esModule", {
            value: true
        });
        Io.default = Io;
        Io.outdent = Io;
    } catch (e) {}
}

var zo = typeof global == "object" && global && global.Object === Object && global;

var Ho = typeof self == "object" && self && self.Object === Object && self;

var Mo = zo || Ho || Function("return this")();

var No = Mo.Symbol;

var Wo = Object.prototype;

var Vo = Wo.hasOwnProperty;

var Jo = Wo.toString;

var Ko = No ? No.toStringTag : undefined;

function Yo(e) {
    var t = Vo.call(e, Ko), r = e[Ko];
    try {
        e[Ko] = undefined;
        var o = true;
    } catch (e) {}
    var s = Jo.call(e);
    if (o) {
        if (t) {
            e[Ko] = r;
        } else {
            delete e[Ko];
        }
    }
    return s;
}

var Zo = Object.prototype;

var Qo = Zo.toString;

function Xo(e) {
    return Qo.call(e);
}

var es = "[object Null]", ts = "[object Undefined]";

var rs = No ? No.toStringTag : undefined;

function os(e) {
    if (e == null) {
        return e === undefined ? ts : es;
    }
    return rs && rs in Object(e) ? Yo(e) : Xo(e);
}

function ss(e) {
    return e != null && typeof e == "object";
}

var ns = "[object Symbol]";

function is(e) {
    return typeof e == "symbol" || ss(e) && os(e) == ns;
}

function as(e, t) {
    var r = -1, o = e == null ? 0 : e.length, s = Array(o);
    while (++r < o) {
        s[r] = t(e[r], r, e);
    }
    return s;
}

var us = Array.isArray;

var cs = 1 / 0;

var ls = No ? No.prototype : undefined, ps = ls ? ls.toString : undefined;

function ds(e) {
    if (typeof e == "string") {
        return e;
    }
    if (us(e)) {
        return as(e, ds) + "";
    }
    if (is(e)) {
        return ps ? ps.call(e) : "";
    }
    var t = e + "";
    return t == "0" && 1 / e == -cs ? "-0" : t;
}

function fs(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
}

var ms = 0 / 0;

var hs = /^\s+|\s+$/g;

var gs = /^[-+]0x[0-9a-f]+$/i;

var bs = /^0b[01]+$/i;

var ws = /^0o[0-7]+$/i;

var ys = parseInt;

function vs(e) {
    if (typeof e == "number") {
        return e;
    }
    if (is(e)) {
        return ms;
    }
    if (fs(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = fs(t) ? t + "" : t;
    }
    if (typeof e != "string") {
        return e === 0 ? e : +e;
    }
    e = e.replace(hs, "");
    var r = bs.test(e);
    return r || ws.test(e) ? ys(e.slice(2), r ? 2 : 8) : gs.test(e) ? ms : +e;
}

var Ts = 1 / 0, Es = 17976931348623157e292;

function _s(e) {
    if (!e) {
        return e === 0 ? e : 0;
    }
    e = vs(e);
    if (e === Ts || e === -Ts) {
        var t = e < 0 ? -1 : 1;
        return t * Es;
    }
    return e === e ? e : 0;
}

function Os(e) {
    var t = _s(e), r = t % 1;
    return t === t ? r ? t - r : t : 0;
}

function Ps(e) {
    return e;
}

var ks = "[object AsyncFunction]", Ss = "[object Function]", As = "[object GeneratorFunction]", Gs = "[object Proxy]";

function Cs(e) {
    if (!fs(e)) {
        return false;
    }
    var t = os(e);
    return t == Ss || t == As || t == ks || t == Gs;
}

var js = Mo["__core-js_shared__"];

var Rs = function() {
    var e = /[^.]+$/.exec(js && js.keys && js.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
}();

function xs(e) {
    return !!Rs && Rs in e;
}

var Fs = Function.prototype;

var Us = Fs.toString;

function Ds(e) {
    if (e != null) {
        try {
            return Us.call(e);
        } catch (e) {}
        try {
            return e + "";
        } catch (e) {}
    }
    return "";
}

var $s = /[\\^$.*+?()[\]{}|]/g;

var qs = /^\[object .+?Constructor\]$/;

var Ls = Function.prototype, Bs = Object.prototype;

var Is = Ls.toString;

var zs = Bs.hasOwnProperty;

var Hs = RegExp("^" + Is.call(zs).replace($s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function Ms(e) {
    if (!fs(e) || xs(e)) {
        return false;
    }
    var t = Cs(e) ? Hs : qs;
    return t.test(Ds(e));
}

function Ns(e, t) {
    return e == null ? undefined : e[t];
}

function Ws(e, t) {
    var r = Ns(e, t);
    return Ms(r) ? r : undefined;
}

var Vs = Ws(Mo, "WeakMap");

var Js = 9007199254740991;

var Ks = /^(?:0|[1-9]\d*)$/;

function Ys(e, t) {
    var r = typeof e;
    t = t == null ? Js : t;
    return !!t && (r == "number" || r != "symbol" && Ks.test(e)) && (e > -1 && e % 1 == 0 && e < t);
}

function Zs(e, t) {
    return e === t || e !== e && t !== t;
}

var Qs = 9007199254740991;

function Xs(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Qs;
}

function en(e) {
    return e != null && Xs(e.length) && !Cs(e);
}

var tn = Object.prototype;

function rn(e) {
    var t = e && e.constructor, r = typeof t == "function" && t.prototype || tn;
    return e === r;
}

function on(e, t) {
    var r = -1, o = Array(e);
    while (++r < e) {
        o[r] = t(r);
    }
    return o;
}

var sn = "[object Arguments]";

function nn(e) {
    return ss(e) && os(e) == sn;
}

var an = Object.prototype;

var un = an.hasOwnProperty;

var cn = an.propertyIsEnumerable;

var ln = nn(function() {
    return arguments;
}()) ? nn : function(e) {
    return ss(e) && un.call(e, "callee") && !cn.call(e, "callee");
};

function pn() {
    return false;
}

var dn = typeof exports == "object" && exports && !exports.nodeType && exports;

var fn = dn && typeof module == "object" && module && !module.nodeType && module;

var mn = fn && fn.exports === dn;

var hn = mn ? Mo.Buffer : undefined;

var gn = hn ? hn.isBuffer : undefined;

var bn = gn || pn;

var wn = "[object Arguments]", yn = "[object Array]", vn = "[object Boolean]", Tn = "[object Date]", En = "[object Error]", _n = "[object Function]", On = "[object Map]", Pn = "[object Number]", kn = "[object Object]", Sn = "[object RegExp]", An = "[object Set]", Gn = "[object String]", Cn = "[object WeakMap]";

var jn = "[object ArrayBuffer]", Rn = "[object DataView]", xn = "[object Float32Array]", Fn = "[object Float64Array]", Un = "[object Int8Array]", Dn = "[object Int16Array]", $n = "[object Int32Array]", qn = "[object Uint8Array]", Ln = "[object Uint8ClampedArray]", Bn = "[object Uint16Array]", In = "[object Uint32Array]";

var zn = {};

zn[xn] = zn[Fn] = zn[Un] = zn[Dn] = zn[$n] = zn[qn] = zn[Ln] = zn[Bn] = zn[In] = true;

zn[wn] = zn[yn] = zn[jn] = zn[vn] = zn[Rn] = zn[Tn] = zn[En] = zn[_n] = zn[On] = zn[Pn] = zn[kn] = zn[Sn] = zn[An] = zn[Gn] = zn[Cn] = false;

function Hn(e) {
    return ss(e) && Xs(e.length) && !!zn[os(e)];
}

function Mn(e) {
    return function(t) {
        return e(t);
    };
}

var Nn = typeof exports == "object" && exports && !exports.nodeType && exports;

var Wn = Nn && typeof module == "object" && module && !module.nodeType && module;

var Vn = Wn && Wn.exports === Nn;

var Jn = Vn && zo.process;

var Kn = function() {
    try {
        var e = Wn && Wn.require && Wn.require("util").types;
        if (e) {
            return e;
        }
        return Jn && Jn.binding && Jn.binding("util");
    } catch (e) {}
}();

var Yn = Kn && Kn.isTypedArray;

var Zn = Yn ? Mn(Yn) : Hn;

var Qn = Object.prototype;

var Xn = Qn.hasOwnProperty;

function ei(e, t) {
    var r = us(e), o = !r && ln(e), s = !r && !o && bn(e), n = !r && !o && !s && Zn(e), i = r || o || s || n, a = i ? on(e.length, String) : [], u = a.length;
    for (var c in e) {
        if ((t || Xn.call(e, c)) && !(i && (c == "length" || s && (c == "offset" || c == "parent") || n && (c == "buffer" || c == "byteLength" || c == "byteOffset") || Ys(c, u)))) {
            a.push(c);
        }
    }
    return a;
}

function ti(e, t) {
    return function(r) {
        return e(t(r));
    };
}

var ri = ti(Object.keys, Object);

var oi = Object.prototype;

var si = oi.hasOwnProperty;

function ni(e) {
    if (!rn(e)) {
        return ri(e);
    }
    var t = [];
    for (var r in Object(e)) {
        if (si.call(e, r) && r != "constructor") {
            t.push(r);
        }
    }
    return t;
}

function ii(e) {
    return en(e) ? ei(e) : ni(e);
}

var ai = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ui = /^\w*$/;

function ci(e, t) {
    if (us(e)) {
        return false;
    }
    var r = typeof e;
    if (r == "number" || r == "symbol" || r == "boolean" || e == null || is(e)) {
        return true;
    }
    return ui.test(e) || !ai.test(e) || t != null && e in Object(t);
}

var li = Ws(Object, "create");

function pi() {
    this.__data__ = li ? li(null) : {};
    this.size = 0;
}

function di(e) {
    var t = this.has(e) && delete this.__data__[e];
    this.size -= t ? 1 : 0;
    return t;
}

var fi = "__lodash_hash_undefined__";

var mi = Object.prototype;

var hi = mi.hasOwnProperty;

function gi(e) {
    var t = this.__data__;
    if (li) {
        var r = t[e];
        return r === fi ? undefined : r;
    }
    return hi.call(t, e) ? t[e] : undefined;
}

var bi = Object.prototype;

var wi = bi.hasOwnProperty;

function yi(e) {
    var t = this.__data__;
    return li ? t[e] !== undefined : wi.call(t, e);
}

var vi = "__lodash_hash_undefined__";

function Ti(e, t) {
    var r = this.__data__;
    this.size += this.has(e) ? 0 : 1;
    r[e] = li && t === undefined ? vi : t;
    return this;
}

function Ei(e) {
    var t = -1, r = e == null ? 0 : e.length;
    this.clear();
    while (++t < r) {
        var o = e[t];
        this.set(o[0], o[1]);
    }
}

Ei.prototype.clear = pi;

Ei.prototype["delete"] = di;

Ei.prototype.get = gi;

Ei.prototype.has = yi;

Ei.prototype.set = Ti;

function _i() {
    this.__data__ = [];
    this.size = 0;
}

function Oi(e, t) {
    var r = e.length;
    while (r--) {
        if (Zs(e[r][0], t)) {
            return r;
        }
    }
    return -1;
}

var Pi = Array.prototype;

var ki = Pi.splice;

function Si(e) {
    var t = this.__data__, r = Oi(t, e);
    if (r < 0) {
        return false;
    }
    var o = t.length - 1;
    if (r == o) {
        t.pop();
    } else {
        ki.call(t, r, 1);
    }
    --this.size;
    return true;
}

function Ai(e) {
    var t = this.__data__, r = Oi(t, e);
    return r < 0 ? undefined : t[r][1];
}

function Gi(e) {
    return Oi(this.__data__, e) > -1;
}

function Ci(e, t) {
    var r = this.__data__, o = Oi(r, e);
    if (o < 0) {
        ++this.size;
        r.push([ e, t ]);
    } else {
        r[o][1] = t;
    }
    return this;
}

function ji(e) {
    var t = -1, r = e == null ? 0 : e.length;
    this.clear();
    while (++t < r) {
        var o = e[t];
        this.set(o[0], o[1]);
    }
}

ji.prototype.clear = _i;

ji.prototype["delete"] = Si;

ji.prototype.get = Ai;

ji.prototype.has = Gi;

ji.prototype.set = Ci;

var Ri = Ws(Mo, "Map");

function xi() {
    this.size = 0;
    this.__data__ = {
        hash: new Ei,
        map: new (Ri || ji),
        string: new Ei
    };
}

function Fi(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}

function Ui(e, t) {
    var r = e.__data__;
    return Fi(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}

function Di(e) {
    var t = Ui(this, e)["delete"](e);
    this.size -= t ? 1 : 0;
    return t;
}

function $i(e) {
    return Ui(this, e).get(e);
}

function qi(e) {
    return Ui(this, e).has(e);
}

function Li(e, t) {
    var r = Ui(this, e), o = r.size;
    r.set(e, t);
    this.size += r.size == o ? 0 : 1;
    return this;
}

function Bi(e) {
    var t = -1, r = e == null ? 0 : e.length;
    this.clear();
    while (++t < r) {
        var o = e[t];
        this.set(o[0], o[1]);
    }
}

Bi.prototype.clear = xi;

Bi.prototype["delete"] = Di;

Bi.prototype.get = $i;

Bi.prototype.has = qi;

Bi.prototype.set = Li;

var Ii = "Expected a function";

function zi(e, t) {
    if (typeof e != "function" || t != null && typeof t != "function") {
        throw new TypeError(Ii);
    }
    var r = function() {
        var o = arguments, s = t ? t.apply(this, o) : o[0], n = r.cache;
        if (n.has(s)) {
            return n.get(s);
        }
        var i = e.apply(this, o);
        r.cache = n.set(s, i) || n;
        return i;
    };
    r.cache = new (zi.Cache || Bi);
    return r;
}

zi.Cache = Bi;

var Hi = 500;

function Mi(e) {
    var t = zi(e, (function(e) {
        if (r.size === Hi) {
            r.clear();
        }
        return e;
    }));
    var r = t.cache;
    return t;
}

var Ni = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

var Wi = /\\(\\)?/g;

var Vi = Mi((function(e) {
    var t = [];
    if (e.charCodeAt(0) === 46) {
        t.push("");
    }
    e.replace(Ni, (function(e, r, o, s) {
        t.push(o ? s.replace(Wi, "$1") : r || e);
    }));
    return t;
}));

function Ji(e) {
    return e == null ? "" : ds(e);
}

function Ki(e, t) {
    if (us(e)) {
        return e;
    }
    return ci(e, t) ? [ e ] : Vi(Ji(e));
}

var Yi = 1 / 0;

function Zi(e) {
    if (typeof e == "string" || is(e)) {
        return e;
    }
    var t = e + "";
    return t == "0" && 1 / e == -Yi ? "-0" : t;
}

function Qi(e, t) {
    t = Ki(t, e);
    var r = 0, o = t.length;
    while (e != null && r < o) {
        e = e[Zi(t[r++])];
    }
    return r && r == o ? e : undefined;
}

function Xi(e, t, r) {
    var o = e == null ? undefined : Qi(e, t);
    return o === undefined ? r : o;
}

function ea(e, t) {
    var r = -1, o = t.length, s = e.length;
    while (++r < o) {
        e[s + r] = t[r];
    }
    return e;
}

var ta = Mo.isFinite, ra = Math.min;

function oa(e) {
    var t = Math[e];
    return function(e, r) {
        e = vs(e);
        r = r == null ? 0 : ra(Os(r), 292);
        if (r && ta(e)) {
            var o = (Ji(e) + "e").split("e"), s = t(o[0] + "e" + (+o[1] + r));
            o = (Ji(s) + "e").split("e");
            return +(o[0] + "e" + (+o[1] - r));
        }
        return t(e);
    };
}

function sa() {
    this.__data__ = new ji;
    this.size = 0;
}

function na(e) {
    var t = this.__data__, r = t["delete"](e);
    this.size = t.size;
    return r;
}

function ia(e) {
    return this.__data__.get(e);
}

function aa(e) {
    return this.__data__.has(e);
}

var ua = 200;

function ca(e, t) {
    var r = this.__data__;
    if (r instanceof ji) {
        var o = r.__data__;
        if (!Ri || o.length < ua - 1) {
            o.push([ e, t ]);
            this.size = ++r.size;
            return this;
        }
        r = this.__data__ = new Bi(o);
    }
    r.set(e, t);
    this.size = r.size;
    return this;
}

function la(e) {
    var t = this.__data__ = new ji(e);
    this.size = t.size;
}

la.prototype.clear = sa;

la.prototype["delete"] = na;

la.prototype.get = ia;

la.prototype.has = aa;

la.prototype.set = ca;

function pa(e, t) {
    var r = -1, o = e == null ? 0 : e.length, s = 0, n = [];
    while (++r < o) {
        var i = e[r];
        if (t(i, r, e)) {
            n[s++] = i;
        }
    }
    return n;
}

function da() {
    return [];
}

var fa = Object.prototype;

var ma = fa.propertyIsEnumerable;

var ha = Object.getOwnPropertySymbols;

var ga = !ha ? da : function(e) {
    if (e == null) {
        return [];
    }
    e = Object(e);
    return pa(ha(e), (function(t) {
        return ma.call(e, t);
    }));
};

function ba(e, t, r) {
    var o = t(e);
    return us(e) ? o : ea(o, r(e));
}

function wa(e) {
    return ba(e, ii, ga);
}

var ya = Ws(Mo, "DataView");

var va = Ws(Mo, "Promise");

var Ta = Ws(Mo, "Set");

var Ea = "[object Map]", _a = "[object Object]", Oa = "[object Promise]", Pa = "[object Set]", ka = "[object WeakMap]";

var Sa = "[object DataView]";

var Aa = Ds(ya), Ga = Ds(Ri), Ca = Ds(va), ja = Ds(Ta), Ra = Ds(Vs);

var xa = os;

if (ya && xa(new ya(new ArrayBuffer(1))) != Sa || Ri && xa(new Ri) != Ea || va && xa(va.resolve()) != Oa || Ta && xa(new Ta) != Pa || Vs && xa(new Vs) != ka) {
    xa = function(e) {
        var t = os(e), r = t == _a ? e.constructor : undefined, o = r ? Ds(r) : "";
        if (o) {
            switch (o) {
              case Aa:
                return Sa;

              case Ga:
                return Ea;

              case Ca:
                return Oa;

              case ja:
                return Pa;

              case Ra:
                return ka;
            }
        }
        return t;
    };
}

var Fa = xa;

var Ua = Mo.Uint8Array;

var Da = "__lodash_hash_undefined__";

function $a(e) {
    this.__data__.set(e, Da);
    return this;
}

function qa(e) {
    return this.__data__.has(e);
}

function La(e) {
    var t = -1, r = e == null ? 0 : e.length;
    this.__data__ = new Bi;
    while (++t < r) {
        this.add(e[t]);
    }
}

La.prototype.add = La.prototype.push = $a;

La.prototype.has = qa;

function Ba(e, t) {
    var r = -1, o = e == null ? 0 : e.length;
    while (++r < o) {
        if (t(e[r], r, e)) {
            return true;
        }
    }
    return false;
}

function Ia(e, t) {
    return e.has(t);
}

var za = 1, Ha = 2;

function Ma(e, t, r, o, s, n) {
    var i = r & za, a = e.length, u = t.length;
    if (a != u && !(i && u > a)) {
        return false;
    }
    var c = n.get(e);
    var l = n.get(t);
    if (c && l) {
        return c == t && l == e;
    }
    var p = -1, d = true, f = r & Ha ? new La : undefined;
    n.set(e, t);
    n.set(t, e);
    while (++p < a) {
        var m = e[p], h = t[p];
        if (o) {
            var g = i ? o(h, m, p, t, e, n) : o(m, h, p, e, t, n);
        }
        if (g !== undefined) {
            if (g) {
                continue;
            }
            d = false;
            break;
        }
        if (f) {
            if (!Ba(t, (function(e, t) {
                if (!Ia(f, t) && (m === e || s(m, e, r, o, n))) {
                    return f.push(t);
                }
            }))) {
                d = false;
                break;
            }
        } else if (!(m === h || s(m, h, r, o, n))) {
            d = false;
            break;
        }
    }
    n["delete"](e);
    n["delete"](t);
    return d;
}

function Na(e) {
    var t = -1, r = Array(e.size);
    e.forEach((function(e, o) {
        r[++t] = [ o, e ];
    }));
    return r;
}

function Wa(e) {
    var t = -1, r = Array(e.size);
    e.forEach((function(e) {
        r[++t] = e;
    }));
    return r;
}

var Va = 1, Ja = 2;

var Ka = "[object Boolean]", Ya = "[object Date]", Za = "[object Error]", Qa = "[object Map]", Xa = "[object Number]", eu = "[object RegExp]", tu = "[object Set]", ru = "[object String]", ou = "[object Symbol]";

var su = "[object ArrayBuffer]", nu = "[object DataView]";

var iu = No ? No.prototype : undefined, au = iu ? iu.valueOf : undefined;

function uu(e, t, r, o, s, n, i) {
    switch (r) {
      case nu:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) {
            return false;
        }
        e = e.buffer;
        t = t.buffer;

      case su:
        if (e.byteLength != t.byteLength || !n(new Ua(e), new Ua(t))) {
            return false;
        }
        return true;

      case Ka:
      case Ya:
      case Xa:
        return Zs(+e, +t);

      case Za:
        return e.name == t.name && e.message == t.message;

      case eu:
      case ru:
        return e == t + "";

      case Qa:
        var a = Na;

      case tu:
        var u = o & Va;
        a || (a = Wa);
        if (e.size != t.size && !u) {
            return false;
        }
        var c = i.get(e);
        if (c) {
            return c == t;
        }
        o |= Ja;
        i.set(e, t);
        var l = Ma(a(e), a(t), o, s, n, i);
        i["delete"](e);
        return l;

      case ou:
        if (au) {
            return au.call(e) == au.call(t);
        }
    }
    return false;
}

var cu = 1;

var lu = Object.prototype;

var pu = lu.hasOwnProperty;

function du(e, t, r, o, s, n) {
    var i = r & cu, a = wa(e), u = a.length, c = wa(t), l = c.length;
    if (u != l && !i) {
        return false;
    }
    var p = u;
    while (p--) {
        var d = a[p];
        if (!(i ? d in t : pu.call(t, d))) {
            return false;
        }
    }
    var f = n.get(e);
    var m = n.get(t);
    if (f && m) {
        return f == t && m == e;
    }
    var h = true;
    n.set(e, t);
    n.set(t, e);
    var g = i;
    while (++p < u) {
        d = a[p];
        var b = e[d], w = t[d];
        if (o) {
            var y = i ? o(w, b, d, t, e, n) : o(b, w, d, e, t, n);
        }
        if (!(y === undefined ? b === w || s(b, w, r, o, n) : y)) {
            h = false;
            break;
        }
        g || (g = d == "constructor");
    }
    if (h && !g) {
        var v = e.constructor, T = t.constructor;
        if (v != T && ("constructor" in e && "constructor" in t) && !(typeof v == "function" && v instanceof v && typeof T == "function" && T instanceof T)) {
            h = false;
        }
    }
    n["delete"](e);
    n["delete"](t);
    return h;
}

var fu = 1;

var mu = "[object Arguments]", hu = "[object Array]", gu = "[object Object]";

var bu = Object.prototype;

var wu = bu.hasOwnProperty;

function yu(e, t, r, o, s, n) {
    var i = us(e), a = us(t), u = i ? hu : Fa(e), c = a ? hu : Fa(t);
    u = u == mu ? gu : u;
    c = c == mu ? gu : c;
    var l = u == gu, p = c == gu, d = u == c;
    if (d && bn(e)) {
        if (!bn(t)) {
            return false;
        }
        i = true;
        l = false;
    }
    if (d && !l) {
        n || (n = new la);
        return i || Zn(e) ? Ma(e, t, r, o, s, n) : uu(e, t, u, r, o, s, n);
    }
    if (!(r & fu)) {
        var f = l && wu.call(e, "__wrapped__"), m = p && wu.call(t, "__wrapped__");
        if (f || m) {
            var h = f ? e.value() : e, g = m ? t.value() : t;
            n || (n = new la);
            return s(h, g, r, o, n);
        }
    }
    if (!d) {
        return false;
    }
    n || (n = new la);
    return du(e, t, r, o, s, n);
}

function vu(e, t, r, o, s) {
    if (e === t) {
        return true;
    }
    if (e == null || t == null || !ss(e) && !ss(t)) {
        return e !== e && t !== t;
    }
    return yu(e, t, r, o, vu, s);
}

var Tu = 1, Eu = 2;

function _u(e, t, r, o) {
    var s = r.length, n = s, i = !o;
    if (e == null) {
        return !n;
    }
    e = Object(e);
    while (s--) {
        var a = r[s];
        if (i && a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) {
            return false;
        }
    }
    while (++s < n) {
        a = r[s];
        var u = a[0], c = e[u], l = a[1];
        if (i && a[2]) {
            if (c === undefined && !(u in e)) {
                return false;
            }
        } else {
            var p = new la;
            if (o) {
                var d = o(c, l, u, e, t, p);
            }
            if (!(d === undefined ? vu(l, c, Tu | Eu, o, p) : d)) {
                return false;
            }
        }
    }
    return true;
}

function Ou(e) {
    return e === e && !fs(e);
}

function Pu(e) {
    var t = ii(e), r = t.length;
    while (r--) {
        var o = t[r], s = e[o];
        t[r] = [ o, s, Ou(s) ];
    }
    return t;
}

function ku(e, t) {
    return function(r) {
        if (r == null) {
            return false;
        }
        return r[e] === t && (t !== undefined || e in Object(r));
    };
}

function Su(e) {
    var t = Pu(e);
    if (t.length == 1 && t[0][2]) {
        return ku(t[0][0], t[0][1]);
    }
    return function(r) {
        return r === e || _u(r, e, t);
    };
}

function Au(e, t) {
    return e != null && t in Object(e);
}

function Gu(e, t, r) {
    t = Ki(t, e);
    var o = -1, s = t.length, n = false;
    while (++o < s) {
        var i = Zi(t[o]);
        if (!(n = e != null && r(e, i))) {
            break;
        }
        e = e[i];
    }
    if (n || ++o != s) {
        return n;
    }
    s = e == null ? 0 : e.length;
    return !!s && Xs(s) && Ys(i, s) && (us(e) || ln(e));
}

function Cu(e, t) {
    return e != null && Gu(e, t, Au);
}

var ju = 1, Ru = 2;

function xu(e, t) {
    if (ci(e) && Ou(t)) {
        return ku(Zi(e), t);
    }
    return function(r) {
        var o = Xi(r, e);
        return o === undefined && o === t ? Cu(r, e) : vu(t, o, ju | Ru);
    };
}

function Fu(e) {
    return function(t) {
        return t == null ? undefined : t[e];
    };
}

function Uu(e) {
    return function(t) {
        return Qi(t, e);
    };
}

function Du(e) {
    return ci(e) ? Fu(Zi(e)) : Uu(e);
}

function $u(e) {
    if (typeof e == "function") {
        return e;
    }
    if (e == null) {
        return Ps;
    }
    if (typeof e == "object") {
        return us(e) ? xu(e[0], e[1]) : Su(e);
    }
    return Du(e);
}

function qu(e, t, r, o) {
    var s = -1, n = e == null ? 0 : e.length;
    while (++s < n) {
        var i = e[s];
        t(o, i, r(i), e);
    }
    return o;
}

function Lu(e) {
    return function(t, r, o) {
        var s = -1, n = Object(t), i = o(t), a = i.length;
        while (a--) {
            var u = i[e ? a : ++s];
            if (r(n[u], u, n) === false) {
                break;
            }
        }
        return t;
    };
}

var Bu = Lu();

function Iu(e, t) {
    return e && Bu(e, t, ii);
}

function zu(e, t) {
    return function(r, o) {
        if (r == null) {
            return r;
        }
        if (!en(r)) {
            return e(r, o);
        }
        var s = r.length, n = t ? s : -1, i = Object(r);
        while (t ? n-- : ++n < s) {
            if (o(i[n], n, i) === false) {
                break;
            }
        }
        return r;
    };
}

var Hu = zu(Iu);

function Mu(e, t, r, o) {
    Hu(e, (function(e, s, n) {
        t(o, e, r(e), n);
    }));
    return o;
}

function Nu(e, t) {
    return function(r, o) {
        var s = us(r) ? qu : Mu, n = t ? t() : {};
        return s(r, e, $u(o), n);
    };
}

var Wu = Nu((function(e, t, r) {
    e[r ? 0 : 1].push(t);
}), (function() {
    return [ [], [] ];
}));

var Vu = oa("round");

var Ju = function(e, t) {
    if (typeof e !== "string") {
        throw new TypeError("Expected a string");
    }
    var r = String(e);
    var o = "";
    var s = t ? !!t.extended : false;
    var n = t ? !!t.globstar : false;
    var i = false;
    var a = t && typeof t.flags === "string" ? t.flags : "";
    var u;
    for (var c = 0, l = r.length; c < l; c++) {
        u = r[c];
        switch (u) {
          case "/":
          case "$":
          case "^":
          case "+":
          case ".":
          case "(":
          case ")":
          case "=":
          case "!":
          case "|":
            o += "\\" + u;
            break;

          case "?":
            if (s) {
                o += ".";
                break;
            }

          case "[":
          case "]":
            if (s) {
                o += u;
                break;
            }

          case "{":
            if (s) {
                i = true;
                o += "(";
                break;
            }

          case "}":
            if (s) {
                i = false;
                o += ")";
                break;
            }

          case ",":
            if (i) {
                o += "|";
                break;
            }
            o += "\\" + u;
            break;

          case "*":
            var p = r[c - 1];
            var d = 1;
            while (r[c + 1] === "*") {
                d++;
                c++;
            }
            var f = r[c + 1];
            if (!n) {
                o += ".*";
            } else {
                var m = d > 1 && (p === "/" || p === undefined) && (f === "/" || f === undefined);
                if (m) {
                    o += "((?:[^/]*(?:/|$))*)";
                    c++;
                } else {
                    o += "([^/]*)";
                }
            }
            break;

          default:
            o += u;
        }
    }
    if (!a || !~a.indexOf("g")) {
        o = "^" + o + "$";
    }
    return new RegExp(o, a);
};

function Ku(e, t) {
    if (!e) {
        return [ [], t ];
    }
    const r = Ju(e, {
        extended: true
    });
    return Wu(t, (e => r.test(e.path)));
}

function Yu(e) {
    if (e.length === 1 && e[0].property === "size") {
        return "";
    }
    return ` (${e.map((e => e.label)).join(" / ")})`;
}

const Zu = {
    uncompressed: {
        label: "Size",
        property: "size"
    },
    gzip: {
        label: "Gzip",
        property: "sizeGzip"
    },
    brotli: {
        label: "Brotli",
        property: "sizeBrotli"
    }
};

function Qu(e) {
    return e.split(",").map((e => e.trim())).filter((e => Zu.hasOwnProperty(e))).map((e => Zu[e]));
}

const Xu = (e, t) => e.map((({property: e}) => t(e))).join(" / ");

function ec(e, t, r) {
    e.sort(((e, r) => r[t] - e[t] || e.path.localeCompare(r.path)));
    if (r === "asc") {
        e.reverse();
    }
}

const tc = e => {
    if (e < .001) {
        e = Vu(e, 4);
    } else if (e < .01) {
        e = Vu(e, 3);
    } else {
        e = Vu(e, 2);
    }
    return e.toLocaleString(undefined, {
        style: "percent",
        maximumSignificantDigits: 3
    });
};

function rc(e, t, r) {
    const o = e[r] - t[r];
    return {
        delta: o,
        percent: tc(o / t[r])
    };
}

function oc(e, t) {
    return {
        size: rc(e, t, "size"),
        sizeGzip: rc(e, t, "sizeGzip"),
        sizeBrotli: rc(e, t, "sizeBrotli")
    };
}

function sc(e, t, r) {
    r.files.forEach((r => {
        if (!e[r.path]) {
            e[r.path] = {
                path: r.path,
                label: r.label
            };
        }
        const o = e[r.path];
        o[t] = r;
        if (o.head && o.base) {
            o.diff = oc(o.head, o.base);
        }
    }));
}

function nc(e, t, {sortBy: r, sortOrder: o, hideFiles: s} = {}) {
    const n = {};
    sc(n, "head", e);
    sc(n, "base", t);
    const i = Object.values(n);
    ec(i, r, o);
    const [a, u] = Ku(s, i);
    const [c, l] = Wu(u, (e => e.diff && e.diff.size.delta === 0));
    return {
        head: e,
        base: t,
        diff: {
            ...oc(e, t),
            tarballSize: rc(e, t, "tarballSize")
        },
        files: {
            changed: l,
            unchanged: c,
            hidden: a
        }
    };
}

const ic = e => {
    if (e < 0) {
        return "↓";
    }
    if (e > 0) {
        return "↑";
    }
    return "";
};

const ac = ({delta: e, percent: t}) => e ? t + ic(e) : "";

function uc({headPkgData: e, basePkgData: t, sortBy: r, sortOrder: o, hideFiles: s, unchangedFiles: n, displaySize: i}) {
    const a = nc(e, t, {
        sortBy: r,
        sortOrder: o,
        hideFiles: s
    });
    Y.setOutput("regressionData", a);
    const {changed: u, unchanged: c, hidden: l} = a.files;
    const p = Qu(i);
    const d = Yu(p);
    const f = ao([ [ "File", `Before${d}`, `After${d}` ], ...[ ...u, ...n === "show" ? c : [] ].map((e => [ e.label, e.base && e.base.size ? Xu(p, (t => Yr(ro(e.base[t])))) : "—", e.head && e.head.size ? Xu(p, (t => (e.base && e.base[t] ? Xr(ac(e.diff[t])) : "") + Yr(ro(e.head[t])))) : "—" ])), [ `${eo("Total")} ${n === "show" ? "" : Qr("_(Includes all files)_")}`, Xu(p, (e => Yr(ro(a.base[e])))), Xu(p, (e => Xr(ac(a.diff[e])) + Yr(ro(a.head[e])))) ], [ eo("Tarball size"), Yr(ro(a.base.tarballSize)), Xr(ac(a.diff.tarballSize)) + Yr(ro(a.head.tarballSize)) ] ], {
        align: [ "", "r", "r" ]
    });
    let m = "";
    if (n === "collapse" && c.length > 0) {
        m = ao([ [ "File", `Size${d}` ], ...c.map((e => [ e.label, Xu(p, (t => Yr(ro(e.base[t])))) ])) ], {
            align: [ "", "r" ]
        });
        m = `<details><summary>Unchanged files</summary>\n\n${m}\n</details>`;
    }
    let h = "";
    if (l.length > 0) {
        h = ao([ [ "File", `Before${d}`, `After${d}` ], ...l.map((e => [ e.label, e.base && e.base.size ? Xu(p, (t => Yr(ro(e.base[t])))) : "—", e.head && e.head.size ? Xu(p, (t => (e.base && e.base[t] ? Xr(ac(e.diff[t])) : "") + Yr(ro(e.head[t])))) : "—" ])) ], {
            align: [ "", "r", "r" ]
        });
        h = `<details><summary>Hidden files</summary>\n\n${h}\n</details>`;
    }
    return Io`
	### 📊 Package size report&nbsp;&nbsp;&nbsp;<kbd>${ac(a.diff.size) || "No changes"}</kbd>

	${f}

	${m}

	${h}
	`;
}

function cc({headPkgData: e, hideFiles: t, displaySize: r, sortBy: o, sortOrder: s}) {
    const n = Qu(r);
    const i = Yu(n);
    ec(e.files, o, s);
    const [a, u] = Ku(t, e.files);
    const c = ao([ [ "File", `Size${i}` ], ...u.map((e => [ e.label, Xu(n, (t => Yr(ro(e[t])))) ])), [ eo("Total"), Xu(n, (t => Yr(ro(e[t])))) ], [ eo("Tarball size"), Yr(ro(e.tarballSize)) ] ], {
        align: [ "", "r" ]
    });
    let l = "";
    if (a.length > 0) {
        l = ao([ [ "File", `Size${i}` ], ...a.map((e => [ e.label, Xu(n, (t => Yr(ro(e[t])))) ])) ], {
            align: [ "", "r" ]
        });
        l = `<details><summary>Hidden files</summary>\n\n${l}\n</details>`;
    }
    return Io`
	### 📊 Package size report

	${c}

	${l}
	`;
}

var lc = G((function(e, t) {
    var r = S && S.__awaiter || function(e, t, r, o) {
        function s(e) {
            return e instanceof r ? e : new r((function(t) {
                t(e);
            }));
        }
        return new (r || (r = Promise))((function(r, n) {
            function i(e) {
                try {
                    u(o.next(e));
                } catch (e) {
                    n(e);
                }
            }
            function a(e) {
                try {
                    u(o["throw"](e));
                } catch (e) {
                    n(e);
                }
            }
            function u(e) {
                e.done ? r(e.value) : s(e.value).then(i, a);
            }
            u((o = o.apply(e, t || [])).next());
        }));
    };
    var o;
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    o = g["default"].promises, t.chmod = o.chmod, t.copyFile = o.copyFile, t.lstat = o.lstat, 
    t.mkdir = o.mkdir, t.readdir = o.readdir, t.readlink = o.readlink, t.rename = o.rename, 
    t.rmdir = o.rmdir, t.stat = o.stat, t.symlink = o.symlink, t.unlink = o.unlink;
    t.IS_WINDOWS = process.platform === "win32";
    function s(e) {
        return r(this, void 0, void 0, (function*() {
            try {
                yield t.stat(e);
            } catch (e) {
                if (e.code === "ENOENT") {
                    return false;
                }
                throw e;
            }
            return true;
        }));
    }
    t.exists = s;
    function n(e, o = false) {
        return r(this, void 0, void 0, (function*() {
            const r = o ? yield t.stat(e) : yield t.lstat(e);
            return r.isDirectory();
        }));
    }
    t.isDirectory = n;
    function i(e) {
        e = c(e);
        if (!e) {
            throw new Error('isRooted() parameter "p" cannot be empty');
        }
        if (t.IS_WINDOWS) {
            return e.startsWith("\\") || /^[A-Z]:/i.test(e);
        }
        return e.startsWith("/");
    }
    t.isRooted = i;
    function a(e, o = 1e3, s = 1) {
        return r(this, void 0, void 0, (function*() {
            m["default"].ok(e, "a path argument must be provided");
            e = b["default"].resolve(e);
            if (s >= o) return t.mkdir(e);
            try {
                yield t.mkdir(e);
                return;
            } catch (r) {
                switch (r.code) {
                  case "ENOENT":
                    {
                        yield a(b["default"].dirname(e), o, s + 1);
                        yield t.mkdir(e);
                        return;
                    }

                  default:
                    {
                        let o;
                        try {
                            o = yield t.stat(e);
                        } catch (e) {
                            throw r;
                        }
                        if (!o.isDirectory()) throw r;
                    }
                }
            }
        }));
    }
    t.mkdirP = a;
    function u(e, o) {
        return r(this, void 0, void 0, (function*() {
            let r = undefined;
            try {
                r = yield t.stat(e);
            } catch (t) {
                if (t.code !== "ENOENT") {
                    console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${t}`);
                }
            }
            if (r && r.isFile()) {
                if (t.IS_WINDOWS) {
                    const t = b["default"].extname(e).toUpperCase();
                    if (o.some((e => e.toUpperCase() === t))) {
                        return e;
                    }
                } else {
                    if (l(r)) {
                        return e;
                    }
                }
            }
            const s = e;
            for (const n of o) {
                e = s + n;
                r = undefined;
                try {
                    r = yield t.stat(e);
                } catch (t) {
                    if (t.code !== "ENOENT") {
                        console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${t}`);
                    }
                }
                if (r && r.isFile()) {
                    if (t.IS_WINDOWS) {
                        try {
                            const r = b["default"].dirname(e);
                            const o = b["default"].basename(e).toUpperCase();
                            for (const s of yield t.readdir(r)) {
                                if (o === s.toUpperCase()) {
                                    e = b["default"].join(r, s);
                                    break;
                                }
                            }
                        } catch (t) {
                            console.log(`Unexpected error attempting to determine the actual case of the file '${e}': ${t}`);
                        }
                        return e;
                    } else {
                        if (l(r)) {
                            return e;
                        }
                    }
                }
            }
            return "";
        }));
    }
    t.tryGetExecutablePath = u;
    function c(e) {
        e = e || "";
        if (t.IS_WINDOWS) {
            e = e.replace(/\//g, "\\");
            return e.replace(/\\\\+/g, "\\");
        }
        return e.replace(/\/\/+/g, "/");
    }
    function l(e) {
        return (e.mode & 1) > 0 || (e.mode & 8) > 0 && e.gid === process.getgid() || (e.mode & 64) > 0 && e.uid === process.getuid();
    }
}));

var pc = S && S.__awaiter || function(e, t, r, o) {
    function s(e) {
        return e instanceof r ? e : new r((function(t) {
            t(e);
        }));
    }
    return new (r || (r = Promise))((function(r, n) {
        function i(e) {
            try {
                u(o.next(e));
            } catch (e) {
                n(e);
            }
        }
        function a(e) {
            try {
                u(o["throw"](e));
            } catch (e) {
                n(e);
            }
        }
        function u(e) {
            e.done ? r(e.value) : s(e.value).then(i, a);
        }
        u((o = o.apply(e, t || [])).next());
    }));
};

const dc = E["default"].promisify(k["default"].exec);

function fc(e, t, r = {}) {
    return pc(this, void 0, void 0, (function*() {
        const {force: o, recursive: s} = _c(r);
        const n = (yield lc.exists(t)) ? yield lc.stat(t) : null;
        if (n && n.isFile() && !o) {
            return;
        }
        const i = n && n.isDirectory() ? b["default"].join(t, b["default"].basename(e)) : t;
        if (!(yield lc.exists(e))) {
            throw new Error(`no such file or directory: ${e}`);
        }
        const a = yield lc.stat(e);
        if (a.isDirectory()) {
            if (!s) {
                throw new Error(`Failed to copy. ${e} is a directory, but tried to copy without recursive flag.`);
            } else {
                yield Oc(e, i, 0, o);
            }
        } else {
            if (b["default"].relative(e, i) === "") {
                throw new Error(`'${i}' and '${e}' are the same file`);
            }
            yield Pc(e, i, o);
        }
    }));
}

var mc = fc;

function hc(e, t, r = {}) {
    return pc(this, void 0, void 0, (function*() {
        if (yield lc.exists(t)) {
            let o = true;
            if (yield lc.isDirectory(t)) {
                t = b["default"].join(t, b["default"].basename(e));
                o = yield lc.exists(t);
            }
            if (o) {
                if (r.force == null || r.force) {
                    yield bc(t);
                } else {
                    throw new Error("Destination already exists");
                }
            }
        }
        yield yc(b["default"].dirname(t));
        yield lc.rename(e, t);
    }));
}

var gc = hc;

function bc(e) {
    return pc(this, void 0, void 0, (function*() {
        if (lc.IS_WINDOWS) {
            try {
                if (yield lc.isDirectory(e, true)) {
                    yield dc(`rd /s /q "${e}"`);
                } else {
                    yield dc(`del /f /a "${e}"`);
                }
            } catch (e) {
                if (e.code !== "ENOENT") throw e;
            }
            try {
                yield lc.unlink(e);
            } catch (e) {
                if (e.code !== "ENOENT") throw e;
            }
        } else {
            let t = false;
            try {
                t = yield lc.isDirectory(e);
            } catch (e) {
                if (e.code !== "ENOENT") throw e;
                return;
            }
            if (t) {
                yield dc(`rm -rf "${e}"`);
            } else {
                yield lc.unlink(e);
            }
        }
    }));
}

var wc = bc;

function yc(e) {
    return pc(this, void 0, void 0, (function*() {
        yield lc.mkdirP(e);
    }));
}

var vc = yc;

function Tc(e, t) {
    return pc(this, void 0, void 0, (function*() {
        if (!e) {
            throw new Error("parameter 'tool' is required");
        }
        if (t) {
            const t = yield Tc(e, false);
            if (!t) {
                if (lc.IS_WINDOWS) {
                    throw new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`);
                } else {
                    throw new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`);
                }
            }
        }
        try {
            const t = [];
            if (lc.IS_WINDOWS && process.env.PATHEXT) {
                for (const e of process.env.PATHEXT.split(b["default"].delimiter)) {
                    if (e) {
                        t.push(e);
                    }
                }
            }
            if (lc.isRooted(e)) {
                const r = yield lc.tryGetExecutablePath(e, t);
                if (r) {
                    return r;
                }
                return "";
            }
            if (e.includes("/") || lc.IS_WINDOWS && e.includes("\\")) {
                return "";
            }
            const r = [];
            if (process.env.PATH) {
                for (const e of process.env.PATH.split(b["default"].delimiter)) {
                    if (e) {
                        r.push(e);
                    }
                }
            }
            for (const o of r) {
                const r = yield lc.tryGetExecutablePath(o + b["default"].sep + e, t);
                if (r) {
                    return r;
                }
            }
            return "";
        } catch (e) {
            throw new Error(`which failed with message ${e.message}`);
        }
    }));
}

var Ec = Tc;

function _c(e) {
    const t = e.force == null ? true : e.force;
    const r = Boolean(e.recursive);
    return {
        force: t,
        recursive: r
    };
}

function Oc(e, t, r, o) {
    return pc(this, void 0, void 0, (function*() {
        if (r >= 255) return;
        r++;
        yield yc(t);
        const s = yield lc.readdir(e);
        for (const n of s) {
            const s = `${e}/${n}`;
            const i = `${t}/${n}`;
            const a = yield lc.lstat(s);
            if (a.isDirectory()) {
                yield Oc(s, i, r, o);
            } else {
                yield Pc(s, i, o);
            }
        }
        yield lc.chmod(t, (yield lc.stat(e)).mode);
    }));
}

function Pc(e, t, r) {
    return pc(this, void 0, void 0, (function*() {
        if ((yield lc.lstat(e)).isSymbolicLink()) {
            try {
                yield lc.lstat(t);
                yield lc.unlink(t);
            } catch (e) {
                if (e.code === "EPERM") {
                    yield lc.chmod(t, "0666");
                    yield lc.unlink(t);
                }
            }
            const r = yield lc.readlink(e);
            yield lc.symlink(r, t, lc.IS_WINDOWS ? "junction" : null);
        } else if (!(yield lc.exists(t)) || r) {
            yield lc.copyFile(e, t);
        }
    }));
}

var kc = Object.defineProperty({
    cp: mc,
    mv: gc,
    rmRF: wc,
    mkdirP: vc,
    which: Ec
}, "__esModule", {
    value: true
});

var Sc = S && S.__awaiter || function(e, t, r, o) {
    function s(e) {
        return e instanceof r ? e : new r((function(t) {
            t(e);
        }));
    }
    return new (r || (r = Promise))((function(r, n) {
        function i(e) {
            try {
                u(o.next(e));
            } catch (e) {
                n(e);
            }
        }
        function a(e) {
            try {
                u(o["throw"](e));
            } catch (e) {
                n(e);
            }
        }
        function u(e) {
            e.done ? r(e.value) : s(e.value).then(i, a);
        }
        u((o = o.apply(e, t || [])).next());
    }));
};

var Ac = S && S.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (e != null) for (var r in e) if (Object.hasOwnProperty.call(e, r)) t[r] = e[r];
    t["default"] = e;
    return t;
};

const Gc = Ac(h["default"]);

const Cc = Ac(T["default"]);

const jc = Ac(k["default"]);

const Rc = Ac(b["default"]);

const xc = Ac(kc);

const Fc = Ac(lc);

const Uc = process.platform === "win32";

class Dc extends Cc.EventEmitter {
    constructor(e, t, r) {
        super();
        if (!e) {
            throw new Error("Parameter 'toolPath' cannot be null or empty.");
        }
        this.toolPath = e;
        this.args = t || [];
        this.options = r || {};
    }
    _debug(e) {
        if (this.options.listeners && this.options.listeners.debug) {
            this.options.listeners.debug(e);
        }
    }
    _getCommandString(e, t) {
        const r = this._getSpawnFileName();
        const o = this._getSpawnArgs(e);
        let s = t ? "" : "[command]";
        if (Uc) {
            if (this._isCmdFile()) {
                s += r;
                for (const e of o) {
                    s += ` ${e}`;
                }
            } else if (e.windowsVerbatimArguments) {
                s += `"${r}"`;
                for (const e of o) {
                    s += ` ${e}`;
                }
            } else {
                s += this._windowsQuoteCmdArg(r);
                for (const e of o) {
                    s += ` ${this._windowsQuoteCmdArg(e)}`;
                }
            }
        } else {
            s += r;
            for (const e of o) {
                s += ` ${e}`;
            }
        }
        return s;
    }
    _processLineBuffer(e, t, r) {
        try {
            let o = t + e.toString();
            let s = o.indexOf(Gc.EOL);
            while (s > -1) {
                const e = o.substring(0, s);
                r(e);
                o = o.substring(s + Gc.EOL.length);
                s = o.indexOf(Gc.EOL);
            }
            t = o;
        } catch (e) {
            this._debug(`error processing line. Failed with error ${e}`);
        }
    }
    _getSpawnFileName() {
        if (Uc) {
            if (this._isCmdFile()) {
                return process.env["COMSPEC"] || "cmd.exe";
            }
        }
        return this.toolPath;
    }
    _getSpawnArgs(e) {
        if (Uc) {
            if (this._isCmdFile()) {
                let t = `/D /S /C "${this._windowsQuoteCmdArg(this.toolPath)}`;
                for (const r of this.args) {
                    t += " ";
                    t += e.windowsVerbatimArguments ? r : this._windowsQuoteCmdArg(r);
                }
                t += '"';
                return [ t ];
            }
        }
        return this.args;
    }
    _endsWith(e, t) {
        return e.endsWith(t);
    }
    _isCmdFile() {
        const e = this.toolPath.toUpperCase();
        return this._endsWith(e, ".CMD") || this._endsWith(e, ".BAT");
    }
    _windowsQuoteCmdArg(e) {
        if (!this._isCmdFile()) {
            return this._uvQuoteCmdArg(e);
        }
        if (!e) {
            return '""';
        }
        const t = [ " ", "\t", "&", "(", ")", "[", "]", "{", "}", "^", "=", ";", "!", "'", "+", ",", "`", "~", "|", "<", ">", '"' ];
        let r = false;
        for (const o of e) {
            if (t.some((e => e === o))) {
                r = true;
                break;
            }
        }
        if (!r) {
            return e;
        }
        let o = '"';
        let s = true;
        for (let t = e.length; t > 0; t--) {
            o += e[t - 1];
            if (s && e[t - 1] === "\\") {
                o += "\\";
            } else if (e[t - 1] === '"') {
                s = true;
                o += '"';
            } else {
                s = false;
            }
        }
        o += '"';
        return o.split("").reverse().join("");
    }
    _uvQuoteCmdArg(e) {
        if (!e) {
            return '""';
        }
        if (!e.includes(" ") && !e.includes("\t") && !e.includes('"')) {
            return e;
        }
        if (!e.includes('"') && !e.includes("\\")) {
            return `"${e}"`;
        }
        let t = '"';
        let r = true;
        for (let o = e.length; o > 0; o--) {
            t += e[o - 1];
            if (r && e[o - 1] === "\\") {
                t += "\\";
            } else if (e[o - 1] === '"') {
                r = true;
                t += "\\";
            } else {
                r = false;
            }
        }
        t += '"';
        return t.split("").reverse().join("");
    }
    _cloneExecOptions(e) {
        e = e || {};
        const t = {
            cwd: e.cwd || process.cwd(),
            env: e.env || process.env,
            silent: e.silent || false,
            windowsVerbatimArguments: e.windowsVerbatimArguments || false,
            failOnStdErr: e.failOnStdErr || false,
            ignoreReturnCode: e.ignoreReturnCode || false,
            delay: e.delay || 1e4
        };
        t.outStream = e.outStream || process.stdout;
        t.errStream = e.errStream || process.stderr;
        return t;
    }
    _getSpawnOptions(e, t) {
        e = e || {};
        const r = {};
        r.cwd = e.cwd;
        r.env = e.env;
        r["windowsVerbatimArguments"] = e.windowsVerbatimArguments || this._isCmdFile();
        if (e.windowsVerbatimArguments) {
            r.argv0 = `"${t}"`;
        }
        return r;
    }
    exec() {
        return Sc(this, void 0, void 0, (function*() {
            if (!Fc.isRooted(this.toolPath) && (this.toolPath.includes("/") || Uc && this.toolPath.includes("\\"))) {
                this.toolPath = Rc.resolve(process.cwd(), this.options.cwd || process.cwd(), this.toolPath);
            }
            this.toolPath = yield xc.which(this.toolPath, true);
            return new Promise(((e, t) => {
                this._debug(`exec tool: ${this.toolPath}`);
                this._debug("arguments:");
                for (const e of this.args) {
                    this._debug(`   ${e}`);
                }
                const r = this._cloneExecOptions(this.options);
                if (!r.silent && r.outStream) {
                    r.outStream.write(this._getCommandString(r) + Gc.EOL);
                }
                const o = new Bc(r, this.toolPath);
                o.on("debug", (e => {
                    this._debug(e);
                }));
                const s = this._getSpawnFileName();
                const n = jc.spawn(s, this._getSpawnArgs(r), this._getSpawnOptions(this.options, s));
                const i = "";
                if (n.stdout) {
                    n.stdout.on("data", (e => {
                        if (this.options.listeners && this.options.listeners.stdout) {
                            this.options.listeners.stdout(e);
                        }
                        if (!r.silent && r.outStream) {
                            r.outStream.write(e);
                        }
                        this._processLineBuffer(e, i, (e => {
                            if (this.options.listeners && this.options.listeners.stdline) {
                                this.options.listeners.stdline(e);
                            }
                        }));
                    }));
                }
                const a = "";
                if (n.stderr) {
                    n.stderr.on("data", (e => {
                        o.processStderr = true;
                        if (this.options.listeners && this.options.listeners.stderr) {
                            this.options.listeners.stderr(e);
                        }
                        if (!r.silent && r.errStream && r.outStream) {
                            const t = r.failOnStdErr ? r.errStream : r.outStream;
                            t.write(e);
                        }
                        this._processLineBuffer(e, a, (e => {
                            if (this.options.listeners && this.options.listeners.errline) {
                                this.options.listeners.errline(e);
                            }
                        }));
                    }));
                }
                n.on("error", (e => {
                    o.processError = e.message;
                    o.processExited = true;
                    o.processClosed = true;
                    o.CheckComplete();
                }));
                n.on("exit", (e => {
                    o.processExitCode = e;
                    o.processExited = true;
                    this._debug(`Exit code ${e} received from tool '${this.toolPath}'`);
                    o.CheckComplete();
                }));
                n.on("close", (e => {
                    o.processExitCode = e;
                    o.processExited = true;
                    o.processClosed = true;
                    this._debug(`STDIO streams have closed for tool '${this.toolPath}'`);
                    o.CheckComplete();
                }));
                o.on("done", ((r, o) => {
                    if (i.length > 0) {
                        this.emit("stdline", i);
                    }
                    if (a.length > 0) {
                        this.emit("errline", a);
                    }
                    n.removeAllListeners();
                    if (r) {
                        t(r);
                    } else {
                        e(o);
                    }
                }));
                if (this.options.input) {
                    if (!n.stdin) {
                        throw new Error("child process missing stdin");
                    }
                    n.stdin.end(this.options.input);
                }
            }));
        }));
    }
}

var $c = Dc;

function qc(e) {
    const t = [];
    let r = false;
    let o = false;
    let s = "";
    function n(e) {
        if (o && e !== '"') {
            s += "\\";
        }
        s += e;
        o = false;
    }
    for (let i = 0; i < e.length; i++) {
        const a = e.charAt(i);
        if (a === '"') {
            if (!o) {
                r = !r;
            } else {
                n(a);
            }
            continue;
        }
        if (a === "\\" && o) {
            n(a);
            continue;
        }
        if (a === "\\" && r) {
            o = true;
            continue;
        }
        if (a === " " && !r) {
            if (s.length > 0) {
                t.push(s);
                s = "";
            }
            continue;
        }
        n(a);
    }
    if (s.length > 0) {
        t.push(s.trim());
    }
    return t;
}

var Lc = qc;

class Bc extends Cc.EventEmitter {
    constructor(e, t) {
        super();
        this.processClosed = false;
        this.processError = "";
        this.processExitCode = 0;
        this.processExited = false;
        this.processStderr = false;
        this.delay = 1e4;
        this.done = false;
        this.timeout = null;
        if (!t) {
            throw new Error("toolPath must not be empty");
        }
        this.options = e;
        this.toolPath = t;
        if (e.delay) {
            this.delay = e.delay;
        }
    }
    CheckComplete() {
        if (this.done) {
            return;
        }
        if (this.processClosed) {
            this._setResult();
        } else if (this.processExited) {
            this.timeout = setTimeout(Bc.HandleTimeout, this.delay, this);
        }
    }
    _debug(e) {
        this.emit("debug", e);
    }
    _setResult() {
        let e;
        if (this.processExited) {
            if (this.processError) {
                e = new Error(`There was an error when attempting to execute the process '${this.toolPath}'. This may indicate the process failed to start. Error: ${this.processError}`);
            } else if (this.processExitCode !== 0 && !this.options.ignoreReturnCode) {
                e = new Error(`The process '${this.toolPath}' failed with exit code ${this.processExitCode}`);
            } else if (this.processStderr && this.options.failOnStdErr) {
                e = new Error(`The process '${this.toolPath}' failed because one or more lines were written to the STDERR stream`);
            }
        }
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
        this.done = true;
        this.emit("done", e, this.processExitCode);
    }
    static HandleTimeout(e) {
        if (e.done) {
            return;
        }
        if (!e.processClosed && e.processExited) {
            const t = `The STDIO streams did not close within ${e.delay / 1e3} seconds of the exit event from process '${e.toolPath}'. This may indicate a child process inherited the STDIO streams and has not yet exited.`;
            e._debug(t);
        }
        e._setResult();
    }
}

var Ic = Object.defineProperty({
    ToolRunner: $c,
    argStringToArray: Lc
}, "__esModule", {
    value: true
});

var zc = S && S.__awaiter || function(e, t, r, o) {
    function s(e) {
        return e instanceof r ? e : new r((function(t) {
            t(e);
        }));
    }
    return new (r || (r = Promise))((function(r, n) {
        function i(e) {
            try {
                u(o.next(e));
            } catch (e) {
                n(e);
            }
        }
        function a(e) {
            try {
                u(o["throw"](e));
            } catch (e) {
                n(e);
            }
        }
        function u(e) {
            e.done ? r(e.value) : s(e.value).then(i, a);
        }
        u((o = o.apply(e, t || [])).next());
    }));
};

var Hc = S && S.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (e != null) for (var r in e) if (Object.hasOwnProperty.call(e, r)) t[r] = e[r];
    t["default"] = e;
    return t;
};

const Mc = Hc(Ic);

function Nc(e, t, r) {
    return zc(this, void 0, void 0, (function*() {
        const o = Mc.argStringToArray(e);
        if (o.length === 0) {
            throw new Error(`Parameter 'commandLine' cannot be null or empty.`);
        }
        const s = o[0];
        t = o.slice(1).concat(t || []);
        const n = new Mc.ToolRunner(s, t, r);
        return n.exec();
    }));
}

var Wc = Nc;

async function Vc(e, t) {
    let r = "";
    let o = "";
    const s = Date.now();
    const n = await Wc(e, null, {
        ...t,
        silent: true,
        listeners: {
            stdout(e) {
                r += e.toString();
            },
            stderr(e) {
                o += e.toString();
            }
        }
    });
    const i = Date.now() - s;
    return {
        exitCode: n,
        duration: i,
        stdout: r,
        stderr: o
    };
}

async function Jc(e) {
    try {
        await Vc(`git fetch origin ${e} --depth=1`);
    } catch (t) {
        throw new Error(`Failed to git fetch ${e} ${t.message}`);
    }
    const {exitCode: t} = await Vc(`git diff --quiet origin/${e}`, {
        ignoreReturnCode: true
    });
    return t !== 0;
}

async function Kc({cwd: e} = {}) {
    if (g["default"].existsSync("node_modules")) {
        Y.info("Cleaning node_modules");
        await wc(b["default"].join(e, "node_modules"));
    }
    const t = {
        cwd: e,
        ignoreReturnCode: true
    };
    let r = "";
    if (g["default"].existsSync("package-lock.json")) {
        Y.info("Installing dependencies with npm");
        r = "npm ci";
    } else if (g["default"].existsSync("yarn.lock")) {
        Y.info("Installing dependencies with yarn");
        r = "yarn install --frozen-lockfile";
    } else if (g["default"].existsSync("pnpm-lock.yaml")) {
        Y.info("Installing dependencies with pnpm");
        r = "npx pnpm i --frozen-lockfile";
    } else {
        Y.info("No lock file detected. Installing dependencies with npm");
        r = "npm i";
    }
    const {exitCode: o, stdout: s, stderr: n} = await Vc(r, t);
    if (o > 0) {
        throw new Error(`${n}\n${s}`);
    }
}

async function Yc(e) {
    const {exitCode: t} = await Vc(`git ls-files --error-unmatch ${e}`, {
        ignoreReturnCode: true
    });
    return t === 0;
}

let Zc = false;

async function Qc({checkoutRef: e, refData: t, buildCommand: r}) {
    const o = process.cwd();
    Y.info(`Current working directory: ${o}`);
    if (e) {
        Y.info(`Checking out ref '${e}'`);
        await Vc(`git checkout -f ${e}`);
    }
    if (r !== "false") {
        if (!r) {
            let e;
            try {
                e = JSON.parse(g["default"].readFileSync("./package.json"));
            } catch (e) {
                Y.warning("Error reading package.json", e);
            }
            if (e && e.scripts && e.scripts.build) {
                Y.info("Build script found in package.json");
                r = "npm run build";
            }
        }
        if (r) {
            await Kc({
                cwd: o
            }).catch((e => {
                throw new Error(`Failed to install dependencies:\n${e.message}`);
            }));
            Y.info(`Running build command: ${r}`);
            const e = Date.now();
            await Vc(r, {
                cwd: o
            }).catch((e => {
                throw new Error(`Failed to run build command: ${r}\n${e.message}`);
            }));
            Y.info(`Build completed in ${(Date.now() - e) / 1e3}s`);
        }
    }
    if (!Zc) {
        Y.info("Installing pkg-size globally");
        await Vc("yarn global add pkg-size");
        Y.addPath((await Vc("yarn global bin")).stdout.trim());
        Zc = true;
    }
    Y.info("Getting package size");
    const s = await Vc("pkg-size --json", {
        cwd: o
    }).catch((e => {
        throw new Error(`Failed to determine package size: ${e.message}`);
    }));
    Y.debug(JSON.stringify(s, null, 4));
    const n = {
        ...JSON.parse(s.stdout),
        ref: t,
        size: 0,
        sizeGzip: 0,
        sizeBrotli: 0
    };
    await Promise.all(n.files.map((async e => {
        n.size += e.size;
        n.sizeGzip += e.sizeGzip;
        n.sizeBrotli += e.sizeBrotli;
        const r = await Yc(e.path);
        e.isTracked = r;
        e.label = r ? Zr(Yr(e.path), `${t.repo.html_url}/blob/${t.ref}/${e.path}`) : Yr(e.path);
    })));
    Y.info("Cleaning up");
    await Vc("git reset --hard");
    const {stdout: i} = await Vc("git clean -dfx");
    Y.debug(i);
    return n;
}

async function Xc({pr: e, buildCommand: t, commentReport: r, mode: o, unchangedFiles: s, hideFiles: n, sortBy: i, sortOrder: a, displaySize: u}) {
    Y.startGroup("Build HEAD");
    const c = await Qc({
        refData: e.head,
        buildCommand: t
    });
    Y.setOutput("headPkgData", c);
    Y.endGroup();
    if (o === "head-only") {
        if (r !== "false") {
            return cc({
                headPkgData: c,
                displaySize: u,
                sortBy: i,
                sortOrder: a,
                hideFiles: n
            });
        }
        return false;
    }
    const {ref: l} = e.base;
    let p;
    if (await Jc(l)) {
        Y.info("HEAD is different from BASE. Triggering build.");
        Y.startGroup("Build BASE");
        p = await Qc({
            checkoutRef: l,
            refData: e.base,
            buildCommand: t
        });
        Y.endGroup();
    } else {
        Y.info("HEAD is identical to BASE. Skipping base build.");
        p = {
            ...c,
            ref: e.base
        };
    }
    Y.setOutput("basePkgData", p);
    if (r !== "false") {
        return uc({
            headPkgData: c,
            basePkgData: p,
            displaySize: u,
            sortBy: i,
            sortOrder: a,
            hideFiles: n,
            unchangedFiles: s
        });
    }
    return false;
}

const el = Qr("🤖 This report was automatically generated by [pkg-size-action](https://github.com/pkg-size/action/)");

(async () => {
    const {GITHUB_TOKEN: e} = process.env;
    m["default"](e, 'Environment variable "GITHUB_TOKEN" not set. Required for accessing and reporting on the PR.');
    const {pull_request: t} = Kr.context.payload;
    const r = await Xc({
        pr: t,
        buildCommand: Y.getInput("build-command"),
        commentReport: Y.getInput("comment-report"),
        mode: Y.getInput("mode") || "regression",
        unchangedFiles: Y.getInput("unchanged-files") || "collapse",
        hideFiles: Y.getInput("hide-files"),
        sortBy: Y.getInput("sort-by") || "delta",
        sortOrder: Y.getInput("sort-order") || "desc",
        displaySize: Y.getInput("display-size") || "uncompressed"
    });
    await Vc(`git checkout -f ${Kr.context.sha}`);
    if (r) {
        await to({
            token: e,
            commentSignature: el,
            repo: Kr.context.repo,
            prNumber: t.number,
            body: r
        });
    }
})().catch((e => {
    Y.setFailed(e.message);
    Y.warning(e.stack);
}));
