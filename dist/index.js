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

var d = require("string_decoder");

var f = require("child_process");

var m = require("timers");

function h(e) {
    return e && typeof e === "object" && "default" in e ? e : {
        default: e
    };
}

var g = h(e);

var b = h(t);

var w = h(r);

var v = h(o);

var y = h(s);

var T = h(n);

var E = h(i);

var _ = h(a);

var O = h(u);

var P = h(c);

var k = h(l);

var S = h(p);

var A = h(d);

var G = h(f);

var j = h(m);

var C = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};

function R(e) {
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

function x(e) {
    var t = {
        exports: {}
    };
    return e(t, t.exports), t.exports;
}

var F = x((function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    t.toCommandValue = void 0;
    function r(e) {
        if (e === null || e === undefined) {
            return "";
        } else if (typeof e === "string" || e instanceof String) {
            return e;
        }
        return JSON.stringify(e);
    }
    t.toCommandValue = r;
}));

var U = x((function(e, t) {
    var r = C && C.__createBinding || (Object.create ? function(e, t, r, o) {
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
    var o = C && C.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: true,
            value: t
        });
    } : function(e, t) {
        e["default"] = t;
    });
    var s = C && C.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) for (var s in e) if (s !== "default" && Object.hasOwnProperty.call(e, s)) r(t, e, s);
        o(t, e);
        return t;
    };
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    t.issue = t.issueCommand = void 0;
    const n = s(b["default"]);
    function i(e, t, r) {
        const o = new c(e, t, r);
        process.stdout.write(o.toString() + n.EOL);
    }
    t.issueCommand = i;
    function a(e, t = "") {
        i(e, {}, t);
    }
    t.issue = a;
    const u = "::";
    class c {
        constructor(e, t, r) {
            if (!e) {
                e = "missing.command";
            }
            this.command = e;
            this.properties = t;
            this.message = r;
        }
        toString() {
            let e = u + this.command;
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
                            e += `${r}=${p(o)}`;
                        }
                    }
                }
            }
            e += `${u}${l(this.message)}`;
            return e;
        }
    }
    function l(e) {
        return F.toCommandValue(e).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A");
    }
    function p(e) {
        return F.toCommandValue(e).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A").replace(/:/g, "%3A").replace(/,/g, "%2C");
    }
}));

var D = x((function(e, t) {
    var r = C && C.__createBinding || (Object.create ? function(e, t, r, o) {
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
    var o = C && C.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: true,
            value: t
        });
    } : function(e, t) {
        e["default"] = t;
    });
    var s = C && C.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) for (var s in e) if (s !== "default" && Object.hasOwnProperty.call(e, s)) r(t, e, s);
        o(t, e);
        return t;
    };
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    t.issueCommand = void 0;
    const n = s(w["default"]);
    const i = s(b["default"]);
    function a(e, t) {
        const r = process.env[`GITHUB_${e}`];
        if (!r) {
            throw new Error(`Unable to find environment variable for file command ${e}`);
        }
        if (!n.existsSync(r)) {
            throw new Error(`Missing file at path: ${r}`);
        }
        n.appendFileSync(r, `${F.toCommandValue(t)}${i.EOL}`, {
            encoding: "utf8"
        });
    }
    t.issueCommand = a;
}));

var $ = x((function(e, t) {
    var r = C && C.__createBinding || (Object.create ? function(e, t, r, o) {
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
    var o = C && C.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: true,
            value: t
        });
    } : function(e, t) {
        e["default"] = t;
    });
    var s = C && C.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) for (var s in e) if (s !== "default" && Object.hasOwnProperty.call(e, s)) r(t, e, s);
        o(t, e);
        return t;
    };
    var n = C && C.__awaiter || function(e, t, r, o) {
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
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    t.getState = t.saveState = t.group = t.endGroup = t.startGroup = t.info = t.warning = t.error = t.debug = t.isDebug = t.setFailed = t.setCommandEcho = t.setOutput = t.getBooleanInput = t.getMultilineInput = t.getInput = t.addPath = t.setSecret = t.exportVariable = t.ExitCode = void 0;
    const i = s(b["default"]);
    const a = s(v["default"]);
    var u;
    (function(e) {
        e[e["Success"] = 0] = "Success";
        e[e["Failure"] = 1] = "Failure";
    })(u = t.ExitCode || (t.ExitCode = {}));
    function c(e, t) {
        const r = F.toCommandValue(t);
        process.env[e] = r;
        const o = process.env["GITHUB_ENV"] || "";
        if (o) {
            const t = "_GitHubActionsFileCommandDelimeter_";
            const o = `${e}<<${t}${i.EOL}${r}${i.EOL}${t}`;
            D.issueCommand("ENV", o);
        } else {
            U.issueCommand("set-env", {
                name: e
            }, r);
        }
    }
    t.exportVariable = c;
    function l(e) {
        U.issueCommand("add-mask", {}, e);
    }
    t.setSecret = l;
    function p(e) {
        const t = process.env["GITHUB_PATH"] || "";
        if (t) {
            D.issueCommand("PATH", e);
        } else {
            U.issueCommand("add-path", {}, e);
        }
        process.env["PATH"] = `${e}${a.delimiter}${process.env["PATH"]}`;
    }
    t.addPath = p;
    function d(e, t) {
        const r = process.env[`INPUT_${e.replace(/ /g, "_").toUpperCase()}`] || "";
        if (t && t.required && !r) {
            throw new Error(`Input required and not supplied: ${e}`);
        }
        if (t && t.trimWhitespace === false) {
            return r;
        }
        return r.trim();
    }
    t.getInput = d;
    function f(e, t) {
        const r = d(e, t).split("\n").filter((e => e !== ""));
        return r;
    }
    t.getMultilineInput = f;
    function m(e, t) {
        const r = [ "true", "True", "TRUE" ];
        const o = [ "false", "False", "FALSE" ];
        const s = d(e, t);
        if (r.includes(s)) return true;
        if (o.includes(s)) return false;
        throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${e}\n` + `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
    }
    t.getBooleanInput = m;
    function h(e, t) {
        process.stdout.write(i.EOL);
        U.issueCommand("set-output", {
            name: e
        }, t);
    }
    t.setOutput = h;
    function g(e) {
        U.issue("echo", e ? "on" : "off");
    }
    t.setCommandEcho = g;
    function w(e) {
        process.exitCode = u.Failure;
        E(e);
    }
    t.setFailed = w;
    function y() {
        return process.env["RUNNER_DEBUG"] === "1";
    }
    t.isDebug = y;
    function T(e) {
        U.issueCommand("debug", {}, e);
    }
    t.debug = T;
    function E(e) {
        U.issue("error", e instanceof Error ? e.toString() : e);
    }
    t.error = E;
    function _(e) {
        U.issue("warning", e instanceof Error ? e.toString() : e);
    }
    t.warning = _;
    function O(e) {
        process.stdout.write(e + i.EOL);
    }
    t.info = O;
    function P(e) {
        U.issue("group", e);
    }
    t.startGroup = P;
    function k() {
        U.issue("endgroup");
    }
    t.endGroup = k;
    function S(e, t) {
        return n(this, void 0, void 0, (function*() {
            P(e);
            let r;
            try {
                r = yield t();
            } finally {
                k();
            }
            return r;
        }));
    }
    t.group = S;
    function A(e, t) {
        U.issueCommand("save-state", {
            name: e
        }, t);
    }
    t.saveState = A;
    function G(e) {
        return process.env[`STATE_${e}`] || "";
    }
    t.getState = G;
}));

var q = x((function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    t.Context = void 0;
    class r {
        constructor() {
            this.payload = {};
            if (process.env.GITHUB_EVENT_PATH) {
                if (w["default"].existsSync(process.env.GITHUB_EVENT_PATH)) {
                    this.payload = JSON.parse(w["default"].readFileSync(process.env.GITHUB_EVENT_PATH, {
                        encoding: "utf8"
                    }));
                } else {
                    const e = process.env.GITHUB_EVENT_PATH;
                    process.stdout.write(`GITHUB_EVENT_PATH ${e} does not exist${b["default"].EOL}`);
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

function B(e) {
    let t = e.protocol === "https:";
    let r;
    if (I(e)) {
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

var L = B;

function I(e) {
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

var z = I;

var M = Object.defineProperty({
    getProxyUrl: L,
    checkBypass: z
}, "__esModule", {
    value: true
});

var H = J;

var N = K;

var W = Y;

var V = Z;

function J(e) {
    var t = new Q(e);
    t.request = y["default"].request;
    return t;
}

function K(e) {
    var t = new Q(e);
    t.request = y["default"].request;
    t.createSocket = X;
    t.defaultPort = 443;
    return t;
}

function Y(e) {
    var t = new Q(e);
    t.request = T["default"].request;
    return t;
}

function Z(e) {
    var t = new Q(e);
    t.request = T["default"].request;
    t.createSocket = X;
    t.defaultPort = 443;
    return t;
}

function Q(e) {
    var t = this;
    t.options = e || {};
    t.proxyOptions = t.options.proxy || {};
    t.maxSockets = t.options.maxSockets || y["default"].Agent.defaultMaxSockets;
    t.requests = [];
    t.sockets = [];
    t.on("free", (function e(r, o, s, n) {
        var i = ee(o, s, n);
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

O["default"].inherits(Q, _["default"].EventEmitter);

Q.prototype.addRequest = function e(t, r, o, s) {
    var n = this;
    var i = te({
        request: t
    }, n.options, ee(r, o, s));
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

Q.prototype.createSocket = function e(t, r) {
    var o = this;
    var s = {};
    o.sockets.push(s);
    var n = te({}, o.proxyOptions, {
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
    re("making CONNECT request");
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
            re("tunneling socket could not be established, statusCode=%d", e.statusCode);
            n.destroy();
            var u = new Error("tunneling socket could not be established, " + "statusCode=" + e.statusCode);
            u.code = "ECONNRESET";
            t.request.emit("error", u);
            o.removeSocket(s);
            return;
        }
        if (a.length > 0) {
            re("got illegal response body from proxy");
            n.destroy();
            var u = new Error("got illegal response body from proxy");
            u.code = "ECONNRESET";
            t.request.emit("error", u);
            o.removeSocket(s);
            return;
        }
        re("tunneling connection has established");
        o.sockets[o.sockets.indexOf(s)] = n;
        return r(n);
    }
    function l(e) {
        i.removeAllListeners();
        re("tunneling socket could not be established, cause=%s\n", e.message, e.stack);
        var r = new Error("tunneling socket could not be established, " + "cause=" + e.message);
        r.code = "ECONNRESET";
        t.request.emit("error", r);
        o.removeSocket(s);
    }
};

Q.prototype.removeSocket = function e(t) {
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

function X(e, t) {
    var r = this;
    Q.prototype.createSocket.call(r, e, (function(o) {
        var s = e.request.getHeader("host");
        var n = te({}, r.options, {
            socket: o,
            servername: s ? s.replace(/:.*$/, "") : e.host
        });
        var i = E["default"].connect(0, n);
        r.sockets[r.sockets.indexOf(o)] = i;
        t(i);
    }));
}

function ee(e, t, r) {
    if (typeof e === "string") {
        return {
            host: e,
            port: t,
            localAddress: r
        };
    }
    return e;
}

function te(e) {
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

var re;

if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
    re = function() {
        var e = Array.prototype.slice.call(arguments);
        if (typeof e[0] === "string") {
            e[0] = "TUNNEL: " + e[0];
        } else {
            e.unshift("TUNNEL:");
        }
        console.error.apply(console, e);
    };
} else {
    re = function() {};
}

var oe = re;

var se = {
    httpOverHttp: H,
    httpsOverHttp: N,
    httpOverHttps: W,
    httpsOverHttps: V,
    debug: oe
};

var ne = se;

var ie = x((function(e, t) {
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
        let t = M.getProxyUrl(new URL(e));
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
            o.httpModule = s ? T["default"] : y["default"];
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
            let o = M.getProxyUrl(e);
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
                i = this.requestOptions.maxSockets || y["default"].globalAgent.maxSockets;
            }
            if (s) {
                if (!r) {
                    r = ne;
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
                t = n ? new T["default"].Agent(e) : new y["default"].Agent(e);
                this._agent = t;
            }
            if (!t) {
                t = n ? T["default"].globalAgent : y["default"].globalAgent;
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

var ae = x((function(e, t) {
    var r = C && C.__createBinding || (Object.create ? function(e, t, r, o) {
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
    var o = C && C.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: true,
            value: t
        });
    } : function(e, t) {
        e["default"] = t;
    });
    var s = C && C.__importStar || function(e) {
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
    const n = s(ie);
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

function ue() {
    if (typeof navigator === "object" && "userAgent" in navigator) {
        return navigator.userAgent;
    }
    if (typeof process === "object" && "version" in process) {
        return `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`;
    }
    return "<environment undetectable>";
}

var ce = le;

function le(e, t, r, o) {
    if (typeof r !== "function") {
        throw new Error("method for before hook must be a function");
    }
    if (!o) {
        o = {};
    }
    if (Array.isArray(t)) {
        return t.reverse().reduce((function(t, r) {
            return le.bind(null, e, r, t, o);
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

var pe = de;

function de(e, t, r, o) {
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

var fe = me;

function me(e, t, r) {
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

var he = Function.bind;

var ge = he.bind(he);

function be(e, t, r) {
    var o = ge(fe, null).apply(null, r ? [ t, r ] : [ t ]);
    e.api = {
        remove: o
    };
    e.remove = o;
    [ "before", "error", "after", "wrap" ].forEach((function(o) {
        var s = r ? [ t, o, r ] : [ t, o ];
        e[o] = e.api[o] = ge(pe, null).apply(null, s);
    }));
}

function we() {
    var e = "h";
    var t = {
        registry: {}
    };
    var r = ce.bind(null, t, e);
    be(r, t, e);
    return r;
}

function ve() {
    var e = {
        registry: {}
    };
    var t = ce.bind(null, e);
    be(t, e);
    return t;
}

var ye = false;

function Te() {
    if (!ye) {
        console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4');
        ye = true;
    }
    return ve();
}

Te.Singular = we.bind();

Te.Collection = ve.bind();

var Ee = Te;

var _e = Te;

var Oe = Te.Singular;

var Pe = Te.Collection;

Ee.Hook = _e;

Ee.Singular = Oe;

Ee.Collection = Pe;

/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ function ke(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
}

function Se(e) {
    var t, r;
    if (ke(e) === false) return false;
    t = e.constructor;
    if (t === undefined) return true;
    r = t.prototype;
    if (ke(r) === false) return false;
    if (r.hasOwnProperty("isPrototypeOf") === false) {
        return false;
    }
    return true;
}

function Ae(e) {
    if (!e) {
        return {};
    }
    return Object.keys(e).reduce(((t, r) => {
        t[r.toLowerCase()] = e[r];
        return t;
    }), {});
}

function Ge(e, t) {
    const r = Object.assign({}, e);
    Object.keys(t).forEach((o => {
        if (Se(t[o])) {
            if (!(o in e)) Object.assign(r, {
                [o]: t[o]
            }); else r[o] = Ge(e[o], t[o]);
        } else {
            Object.assign(r, {
                [o]: t[o]
            });
        }
    }));
    return r;
}

function je(e) {
    for (const t in e) {
        if (e[t] === undefined) {
            delete e[t];
        }
    }
    return e;
}

function Ce(e, t, r) {
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
    r.headers = Ae(r.headers);
    je(r);
    je(r.headers);
    const o = Ge(e || {}, r);
    if (e && e.mediaType.previews.length) {
        o.mediaType.previews = e.mediaType.previews.filter((e => !o.mediaType.previews.includes(e))).concat(o.mediaType.previews);
    }
    o.mediaType.previews = o.mediaType.previews.map((e => e.replace(/-preview/, "")));
    return o;
}

function Re(e, t) {
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

const xe = /\{[^}]+\}/g;

function Fe(e) {
    return e.replace(/^\W+|\W+$/g, "").split(/,/);
}

function Ue(e) {
    const t = e.match(xe);
    if (!t) {
        return [];
    }
    return t.map(Fe).reduce(((e, t) => e.concat(t)), []);
}

function De(e, t) {
    return Object.keys(e).filter((e => !t.includes(e))).reduce(((t, r) => {
        t[r] = e[r];
        return t;
    }), {});
}

function $e(e) {
    return e.split(/(%[0-9A-Fa-f]{2})/g).map((function(e) {
        if (!/%[0-9A-Fa-f]/.test(e)) {
            e = encodeURI(e).replace(/%5B/g, "[").replace(/%5D/g, "]");
        }
        return e;
    })).join("");
}

function qe(e) {
    return encodeURIComponent(e).replace(/[!'()*]/g, (function(e) {
        return "%" + e.charCodeAt(0).toString(16).toUpperCase();
    }));
}

function Be(e, t, r) {
    t = e === "+" || e === "#" ? $e(t) : qe(t);
    if (r) {
        return qe(r) + "=" + t;
    } else {
        return t;
    }
}

function Le(e) {
    return e !== undefined && e !== null;
}

function Ie(e) {
    return e === ";" || e === "&" || e === "?";
}

function ze(e, t, r, o) {
    var s = e[r], n = [];
    if (Le(s) && s !== "") {
        if (typeof s === "string" || typeof s === "number" || typeof s === "boolean") {
            s = s.toString();
            if (o && o !== "*") {
                s = s.substring(0, parseInt(o, 10));
            }
            n.push(Be(t, s, Ie(t) ? r : ""));
        } else {
            if (o === "*") {
                if (Array.isArray(s)) {
                    s.filter(Le).forEach((function(e) {
                        n.push(Be(t, e, Ie(t) ? r : ""));
                    }));
                } else {
                    Object.keys(s).forEach((function(e) {
                        if (Le(s[e])) {
                            n.push(Be(t, s[e], e));
                        }
                    }));
                }
            } else {
                const e = [];
                if (Array.isArray(s)) {
                    s.filter(Le).forEach((function(r) {
                        e.push(Be(t, r));
                    }));
                } else {
                    Object.keys(s).forEach((function(r) {
                        if (Le(s[r])) {
                            e.push(qe(r));
                            e.push(Be(t, s[r].toString()));
                        }
                    }));
                }
                if (Ie(t)) {
                    n.push(qe(r) + "=" + e.join(","));
                } else if (e.length !== 0) {
                    n.push(e.join(","));
                }
            }
        }
    } else {
        if (t === ";") {
            if (Le(s)) {
                n.push(qe(r));
            }
        } else if (s === "" && (t === "&" || t === "?")) {
            n.push(qe(r) + "=");
        } else if (s === "") {
            n.push("");
        }
    }
    return n;
}

function Me(e) {
    return {
        expand: He.bind(null, e)
    };
}

function He(e, t) {
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
                s.push(ze(t, e, o[1], o[2] || o[3]));
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
            return $e(s);
        }
    }));
}

function Ne(e) {
    let t = e.method.toUpperCase();
    let r = (e.url || "/").replace(/:([a-z]\w+)/g, "{$1}");
    let o = Object.assign({}, e.headers);
    let s;
    let n = De(e, [ "method", "baseUrl", "url", "headers", "request", "mediaType" ]);
    const i = Ue(r);
    r = Me(r).expand(n);
    if (!/^http/.test(r)) {
        r = e.baseUrl + r;
    }
    const a = Object.keys(e).filter((e => i.includes(e))).concat("baseUrl");
    const u = De(n, a);
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
        r = Re(r, u);
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

function We(e, t, r) {
    return Ne(Ce(e, t, r));
}

function Ve(e, t) {
    const r = Ce(e, t);
    const o = We.bind(null, r);
    return Object.assign(o, {
        DEFAULTS: r,
        defaults: Ve.bind(null, r),
        merge: Ce.bind(null, r),
        parse: Ne
    });
}

const Je = "6.0.10";

const Ke = `octokit-endpoint.js/${Je} ${ue()}`;

const Ye = {
    method: "GET",
    baseUrl: "https://api.github.com",
    headers: {
        accept: "application/vnd.github.v3+json",
        "user-agent": Ke
    },
    mediaType: {
        format: "",
        previews: []
    }
};

const Ze = Ve(null, Ye);

const Qe = P["default"].Readable;

const Xe = Symbol("buffer");

const et = Symbol("type");

class tt {
    constructor() {
        this[et] = "";
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
                } else if (s instanceof tt) {
                    n = s[Xe];
                } else {
                    n = Buffer.from(typeof s === "string" ? s : String(s));
                }
                o += n.length;
                r.push(n);
            }
        }
        this[Xe] = Buffer.concat(r);
        let s = t && t.type !== undefined && String(t.type).toLowerCase();
        if (s && !/[^\u0020-\u007E]/.test(s)) {
            this[et] = s;
        }
    }
    get size() {
        return this[Xe].length;
    }
    get type() {
        return this[et];
    }
    text() {
        return Promise.resolve(this[Xe].toString());
    }
    arrayBuffer() {
        const e = this[Xe];
        const t = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
        return Promise.resolve(t);
    }
    stream() {
        const e = new Qe;
        e._read = function() {};
        e.push(this[Xe]);
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
        const i = this[Xe];
        const a = i.slice(o, o + n);
        const u = new tt([], {
            type: arguments[2]
        });
        u[Xe] = a;
        return u;
    }
}

Object.defineProperties(tt.prototype, {
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

Object.defineProperty(tt.prototype, Symbol.toStringTag, {
    value: "Blob",
    writable: false,
    enumerable: false,
    configurable: true
});

function rt(e, t, r) {
    Error.call(this, e);
    this.message = e;
    this.type = t;
    if (r) {
        this.code = this.errno = r.code;
    }
    Error.captureStackTrace(this, this.constructor);
}

rt.prototype = Object.create(Error.prototype);

rt.prototype.constructor = rt;

rt.prototype.name = "FetchError";

let ot;

try {
    ot = require("encoding").convert;
} catch (e) {}

const st = Symbol("Body internals");

const nt = P["default"].PassThrough;

function it(e) {
    var t = this;
    var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, o = r.size;
    let s = o === undefined ? 0 : o;
    var n = r.timeout;
    let i = n === undefined ? 0 : n;
    if (e == null) {
        e = null;
    } else if (ct(e)) {
        e = Buffer.from(e.toString());
    } else if (lt(e)) ; else if (Buffer.isBuffer(e)) ; else if (Object.prototype.toString.call(e) === "[object ArrayBuffer]") {
        e = Buffer.from(e);
    } else if (ArrayBuffer.isView(e)) {
        e = Buffer.from(e.buffer, e.byteOffset, e.byteLength);
    } else if (e instanceof P["default"]) ; else {
        e = Buffer.from(String(e));
    }
    this[st] = {
        body: e,
        disturbed: false,
        error: null
    };
    this.size = s;
    this.timeout = i;
    if (e instanceof P["default"]) {
        e.on("error", (function(e) {
            const r = e.name === "AbortError" ? e : new rt(`Invalid response body while trying to fetch ${t.url}: ${e.message}`, "system", e);
            t[st].error = r;
        }));
    }
}

it.prototype = {
    get body() {
        return this[st].body;
    },
    get bodyUsed() {
        return this[st].disturbed;
    },
    arrayBuffer() {
        return at.call(this).then((function(e) {
            return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
        }));
    },
    blob() {
        let e = this.headers && this.headers.get("content-type") || "";
        return at.call(this).then((function(t) {
            return Object.assign(new tt([], {
                type: e.toLowerCase()
            }), {
                [Xe]: t
            });
        }));
    },
    json() {
        var e = this;
        return at.call(this).then((function(t) {
            try {
                return JSON.parse(t.toString());
            } catch (t) {
                return it.Promise.reject(new rt(`invalid json response body at ${e.url} reason: ${t.message}`, "invalid-json"));
            }
        }));
    },
    text() {
        return at.call(this).then((function(e) {
            return e.toString();
        }));
    },
    buffer() {
        return at.call(this);
    },
    textConverted() {
        var e = this;
        return at.call(this).then((function(t) {
            return ut(t, e.headers);
        }));
    }
};

Object.defineProperties(it.prototype, {
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

it.mixIn = function(e) {
    for (const t of Object.getOwnPropertyNames(it.prototype)) {
        if (!(t in e)) {
            const r = Object.getOwnPropertyDescriptor(it.prototype, t);
            Object.defineProperty(e, t, r);
        }
    }
};

function at() {
    var e = this;
    if (this[st].disturbed) {
        return it.Promise.reject(new TypeError(`body used already for: ${this.url}`));
    }
    this[st].disturbed = true;
    if (this[st].error) {
        return it.Promise.reject(this[st].error);
    }
    let t = this.body;
    if (t === null) {
        return it.Promise.resolve(Buffer.alloc(0));
    }
    if (lt(t)) {
        t = t.stream();
    }
    if (Buffer.isBuffer(t)) {
        return it.Promise.resolve(t);
    }
    if (!(t instanceof P["default"])) {
        return it.Promise.resolve(Buffer.alloc(0));
    }
    let r = [];
    let o = 0;
    let s = false;
    return new it.Promise((function(n, i) {
        let a;
        if (e.timeout) {
            a = setTimeout((function() {
                s = true;
                i(new rt(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`, "body-timeout"));
            }), e.timeout);
        }
        t.on("error", (function(t) {
            if (t.name === "AbortError") {
                s = true;
                i(t);
            } else {
                i(new rt(`Invalid response body while trying to fetch ${e.url}: ${t.message}`, "system", t));
            }
        }));
        t.on("data", (function(t) {
            if (s || t === null) {
                return;
            }
            if (e.size && o + t.length > e.size) {
                s = true;
                i(new rt(`content size at ${e.url} over limit: ${e.size}`, "max-size"));
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
                i(new rt(`Could not create Buffer from response body for ${e.url}: ${t.message}`, "system", t));
            }
        }));
    }));
}

function ut(e, t) {
    if (typeof ot !== "function") {
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
    return ot(e, "UTF-8", o).toString();
}

function ct(e) {
    if (typeof e !== "object" || typeof e.append !== "function" || typeof e.delete !== "function" || typeof e.get !== "function" || typeof e.getAll !== "function" || typeof e.has !== "function" || typeof e.set !== "function") {
        return false;
    }
    return e.constructor.name === "URLSearchParams" || Object.prototype.toString.call(e) === "[object URLSearchParams]" || typeof e.sort === "function";
}

function lt(e) {
    return typeof e === "object" && typeof e.arrayBuffer === "function" && typeof e.type === "string" && typeof e.stream === "function" && typeof e.constructor === "function" && typeof e.constructor.name === "string" && /^(Blob|File)$/.test(e.constructor.name) && /^(Blob|File)$/.test(e[Symbol.toStringTag]);
}

function pt(e) {
    let t, r;
    let o = e.body;
    if (e.bodyUsed) {
        throw new Error("cannot clone body after it is used");
    }
    if (o instanceof P["default"] && typeof o.getBoundary !== "function") {
        t = new nt;
        r = new nt;
        o.pipe(t);
        o.pipe(r);
        e[st].body = t;
        o = r;
    }
    return o;
}

function dt(e) {
    if (e === null) {
        return null;
    } else if (typeof e === "string") {
        return "text/plain;charset=UTF-8";
    } else if (ct(e)) {
        return "application/x-www-form-urlencoded;charset=UTF-8";
    } else if (lt(e)) {
        return e.type || null;
    } else if (Buffer.isBuffer(e)) {
        return null;
    } else if (Object.prototype.toString.call(e) === "[object ArrayBuffer]") {
        return null;
    } else if (ArrayBuffer.isView(e)) {
        return null;
    } else if (typeof e.getBoundary === "function") {
        return `multipart/form-data;boundary=${e.getBoundary()}`;
    } else if (e instanceof P["default"]) {
        return null;
    } else {
        return "text/plain;charset=UTF-8";
    }
}

function ft(e) {
    const t = e.body;
    if (t === null) {
        return 0;
    } else if (lt(t)) {
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

function mt(e, t) {
    const r = t.body;
    if (r === null) {
        e.end();
    } else if (lt(r)) {
        r.stream().pipe(e);
    } else if (Buffer.isBuffer(r)) {
        e.write(r);
        e.end();
    } else {
        r.pipe(e);
    }
}

it.Promise = global.Promise;

const ht = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;

const gt = /[^\t\x20-\x7e\x80-\xff]/;

function bt(e) {
    e = `${e}`;
    if (ht.test(e) || e === "") {
        throw new TypeError(`${e} is not a legal HTTP header name`);
    }
}

function wt(e) {
    e = `${e}`;
    if (gt.test(e)) {
        throw new TypeError(`${e} is not a legal HTTP header value`);
    }
}

function vt(e, t) {
    t = t.toLowerCase();
    for (const r in e) {
        if (r.toLowerCase() === t) {
            return r;
        }
    }
    return undefined;
}

const yt = Symbol("map");

class Tt {
    constructor() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        this[yt] = Object.create(null);
        if (e instanceof Tt) {
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
        bt(e);
        const t = vt(this[yt], e);
        if (t === undefined) {
            return null;
        }
        return this[yt][t].join(", ");
    }
    forEach(e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        let r = Et(this);
        let o = 0;
        while (o < r.length) {
            var s = r[o];
            const n = s[0], i = s[1];
            e.call(t, i, n, this);
            r = Et(this);
            o++;
        }
    }
    set(e, t) {
        e = `${e}`;
        t = `${t}`;
        bt(e);
        wt(t);
        const r = vt(this[yt], e);
        this[yt][r !== undefined ? r : e] = [ t ];
    }
    append(e, t) {
        e = `${e}`;
        t = `${t}`;
        bt(e);
        wt(t);
        const r = vt(this[yt], e);
        if (r !== undefined) {
            this[yt][r].push(t);
        } else {
            this[yt][e] = [ t ];
        }
    }
    has(e) {
        e = `${e}`;
        bt(e);
        return vt(this[yt], e) !== undefined;
    }
    delete(e) {
        e = `${e}`;
        bt(e);
        const t = vt(this[yt], e);
        if (t !== undefined) {
            delete this[yt][t];
        }
    }
    raw() {
        return this[yt];
    }
    keys() {
        return Ot(this, "key");
    }
    values() {
        return Ot(this, "value");
    }
    [Symbol.iterator]() {
        return Ot(this, "key+value");
    }
}

Tt.prototype.entries = Tt.prototype[Symbol.iterator];

Object.defineProperty(Tt.prototype, Symbol.toStringTag, {
    value: "Headers",
    writable: false,
    enumerable: false,
    configurable: true
});

Object.defineProperties(Tt.prototype, {
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

function Et(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "key+value";
    const r = Object.keys(e[yt]).sort();
    return r.map(t === "key" ? function(e) {
        return e.toLowerCase();
    } : t === "value" ? function(t) {
        return e[yt][t].join(", ");
    } : function(t) {
        return [ t.toLowerCase(), e[yt][t].join(", ") ];
    });
}

const _t = Symbol("internal");

function Ot(e, t) {
    const r = Object.create(Pt);
    r[_t] = {
        target: e,
        kind: t,
        index: 0
    };
    return r;
}

const Pt = Object.setPrototypeOf({
    next() {
        if (!this || Object.getPrototypeOf(this) !== Pt) {
            throw new TypeError("Value of `this` is not a HeadersIterator");
        }
        var e = this[_t];
        const t = e.target, r = e.kind, o = e.index;
        const s = Et(t, r);
        const n = s.length;
        if (o >= n) {
            return {
                value: undefined,
                done: true
            };
        }
        this[_t].index = o + 1;
        return {
            value: s[o],
            done: false
        };
    }
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(Pt, Symbol.toStringTag, {
    value: "HeadersIterator",
    writable: false,
    enumerable: false,
    configurable: true
});

function kt(e) {
    const t = Object.assign({
        __proto__: null
    }, e[yt]);
    const r = vt(e[yt], "Host");
    if (r !== undefined) {
        t[r] = t[r][0];
    }
    return t;
}

function St(e) {
    const t = new Tt;
    for (const r of Object.keys(e)) {
        if (ht.test(r)) {
            continue;
        }
        if (Array.isArray(e[r])) {
            for (const o of e[r]) {
                if (gt.test(o)) {
                    continue;
                }
                if (t[yt][r] === undefined) {
                    t[yt][r] = [ o ];
                } else {
                    t[yt][r].push(o);
                }
            }
        } else if (!gt.test(e[r])) {
            t[yt][r] = [ e[r] ];
        }
    }
    return t;
}

const At = Symbol("Response internals");

const Gt = y["default"].STATUS_CODES;

class jt {
    constructor() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        it.call(this, e, t);
        const r = t.status || 200;
        const o = new Tt(t.headers);
        if (e != null && !o.has("Content-Type")) {
            const t = dt(e);
            if (t) {
                o.append("Content-Type", t);
            }
        }
        this[At] = {
            url: t.url,
            status: r,
            statusText: t.statusText || Gt[r],
            headers: o,
            counter: t.counter
        };
    }
    get url() {
        return this[At].url || "";
    }
    get status() {
        return this[At].status;
    }
    get ok() {
        return this[At].status >= 200 && this[At].status < 300;
    }
    get redirected() {
        return this[At].counter > 0;
    }
    get statusText() {
        return this[At].statusText;
    }
    get headers() {
        return this[At].headers;
    }
    clone() {
        return new jt(pt(this), {
            url: this.url,
            status: this.status,
            statusText: this.statusText,
            headers: this.headers,
            ok: this.ok,
            redirected: this.redirected
        });
    }
}

it.mixIn(jt.prototype);

Object.defineProperties(jt.prototype, {
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

Object.defineProperty(jt.prototype, Symbol.toStringTag, {
    value: "Response",
    writable: false,
    enumerable: false,
    configurable: true
});

const Ct = Symbol("Request internals");

const Rt = k["default"].parse;

const xt = k["default"].format;

const Ft = "destroy" in P["default"].Readable.prototype;

function Ut(e) {
    return typeof e === "object" && typeof e[Ct] === "object";
}

function Dt(e) {
    const t = e && typeof e === "object" && Object.getPrototypeOf(e);
    return !!(t && t.constructor.name === "AbortSignal");
}

class $t {
    constructor(e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        let r;
        if (!Ut(e)) {
            if (e && e.href) {
                r = Rt(e.href);
            } else {
                r = Rt(`${e}`);
            }
            e = {};
        } else {
            r = Rt(e.url);
        }
        let o = t.method || e.method || "GET";
        o = o.toUpperCase();
        if ((t.body != null || Ut(e) && e.body !== null) && (o === "GET" || o === "HEAD")) {
            throw new TypeError("Request with GET/HEAD method cannot have body");
        }
        let s = t.body != null ? t.body : Ut(e) && e.body !== null ? pt(e) : null;
        it.call(this, s, {
            timeout: t.timeout || e.timeout || 0,
            size: t.size || e.size || 0
        });
        const n = new Tt(t.headers || e.headers || {});
        if (s != null && !n.has("Content-Type")) {
            const e = dt(s);
            if (e) {
                n.append("Content-Type", e);
            }
        }
        let i = Ut(e) ? e.signal : null;
        if ("signal" in t) i = t.signal;
        if (i != null && !Dt(i)) {
            throw new TypeError("Expected signal to be an instanceof AbortSignal");
        }
        this[Ct] = {
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
        return this[Ct].method;
    }
    get url() {
        return xt(this[Ct].parsedURL);
    }
    get headers() {
        return this[Ct].headers;
    }
    get redirect() {
        return this[Ct].redirect;
    }
    get signal() {
        return this[Ct].signal;
    }
    clone() {
        return new $t(this);
    }
}

it.mixIn($t.prototype);

Object.defineProperty($t.prototype, Symbol.toStringTag, {
    value: "Request",
    writable: false,
    enumerable: false,
    configurable: true
});

Object.defineProperties($t.prototype, {
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

function qt(e) {
    const t = e[Ct].parsedURL;
    const r = new Tt(e[Ct].headers);
    if (!r.has("Accept")) {
        r.set("Accept", "*/*");
    }
    if (!t.protocol || !t.hostname) {
        throw new TypeError("Only absolute URLs are supported");
    }
    if (!/^https?:$/.test(t.protocol)) {
        throw new TypeError("Only HTTP(S) protocols are supported");
    }
    if (e.signal && e.body instanceof P["default"].Readable && !Ft) {
        throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");
    }
    let o = null;
    if (e.body == null && /^(POST|PUT)$/i.test(e.method)) {
        o = "0";
    }
    if (e.body != null) {
        const t = ft(e);
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
        headers: kt(r),
        agent: s
    });
}

function Bt(e) {
    Error.call(this, e);
    this.type = "aborted";
    this.message = e;
    Error.captureStackTrace(this, this.constructor);
}

Bt.prototype = Object.create(Error.prototype);

Bt.prototype.constructor = Bt;

Bt.prototype.name = "AbortError";

const Lt = P["default"].PassThrough;

const It = k["default"].resolve;

function zt(e, t) {
    if (!zt.Promise) {
        throw new Error("native promise missing, set fetch.Promise to your favorite alternative");
    }
    it.Promise = zt.Promise;
    return new zt.Promise((function(r, o) {
        const s = new $t(e, t);
        const n = qt(s);
        const i = (n.protocol === "https:" ? T["default"] : y["default"]).request;
        const a = s.signal;
        let u = null;
        const c = function e() {
            let t = new Bt("The user aborted a request.");
            o(t);
            if (s.body && s.body instanceof P["default"].Readable) {
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
                    o(new rt(`network timeout at: ${s.url}`, "request-timeout"));
                    f();
                }), s.timeout);
            }));
        }
        p.on("error", (function(e) {
            o(new rt(`request to ${s.url} failed, reason: ${e.message}`, "system", e));
            f();
        }));
        p.on("response", (function(e) {
            clearTimeout(d);
            const t = St(e.headers);
            if (zt.isRedirect(e.statusCode)) {
                const n = t.get("Location");
                const i = n === null ? null : It(s.url, n);
                switch (s.redirect) {
                  case "error":
                    o(new rt(`uri requested responds with a redirect, redirect mode is set to error: ${s.url}`, "no-redirect"));
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
                        o(new rt(`maximum redirect reached at: ${s.url}`, "max-redirect"));
                        f();
                        return;
                    }
                    const n = {
                        headers: new Tt(s.headers),
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
                    if (e.statusCode !== 303 && s.body && ft(s) === null) {
                        o(new rt("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
                        f();
                        return;
                    }
                    if (e.statusCode === 303 || (e.statusCode === 301 || e.statusCode === 302) && s.method === "POST") {
                        n.method = "GET";
                        n.body = undefined;
                        n.headers.delete("content-length");
                    }
                    r(zt(new $t(i, n)));
                    f();
                    return;
                }
            }
            e.once("end", (function() {
                if (a) a.removeEventListener("abort", l);
            }));
            let n = e.pipe(new Lt);
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
                u = new jt(n, i);
                r(u);
                return;
            }
            const p = {
                flush: S["default"].Z_SYNC_FLUSH,
                finishFlush: S["default"].Z_SYNC_FLUSH
            };
            if (c == "gzip" || c == "x-gzip") {
                n = n.pipe(S["default"].createGunzip(p));
                u = new jt(n, i);
                r(u);
                return;
            }
            if (c == "deflate" || c == "x-deflate") {
                const t = e.pipe(new Lt);
                t.once("data", (function(e) {
                    if ((e[0] & 15) === 8) {
                        n = n.pipe(S["default"].createInflate());
                    } else {
                        n = n.pipe(S["default"].createInflateRaw());
                    }
                    u = new jt(n, i);
                    r(u);
                }));
                return;
            }
            if (c == "br" && typeof S["default"].createBrotliDecompress === "function") {
                n = n.pipe(S["default"].createBrotliDecompress());
                u = new jt(n, i);
                r(u);
                return;
            }
            u = new jt(n, i);
            r(u);
        }));
        mt(p, s);
    }));
}

zt.isRedirect = function(e) {
    return e === 301 || e === 302 || e === 303 || e === 307 || e === 308;
};

zt.Promise = global.Promise;

class Mt extends Error {
    constructor(e) {
        super(e);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
        this.name = "Deprecation";
    }
}

var Ht = Nt;

function Nt(e, t) {
    if (e && t) return Nt(e)(t);
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

var Wt = Ht(Jt);

var Vt = Ht(Kt);

Jt.proto = Jt((function() {
    Object.defineProperty(Function.prototype, "once", {
        value: function() {
            return Jt(this);
        },
        configurable: true
    });
    Object.defineProperty(Function.prototype, "onceStrict", {
        value: function() {
            return Kt(this);
        },
        configurable: true
    });
}));

function Jt(e) {
    var t = function() {
        if (t.called) return t.value;
        t.called = true;
        return t.value = e.apply(this, arguments);
    };
    t.called = false;
    return t;
}

function Kt(e) {
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

Wt.strict = Vt;

const Yt = Wt((e => console.warn(e)));

class Zt extends Error {
    constructor(e, t, r) {
        super(e);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
        this.name = "HttpError";
        this.status = t;
        Object.defineProperty(this, "code", {
            get() {
                Yt(new Mt("[@octokit/request-error] `error.code` is deprecated, use `error.status`."));
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

const Qt = "5.4.12";

function Xt(e) {
    return e.arrayBuffer();
}

function er(e) {
    if (Se(e.body) || Array.isArray(e.body)) {
        e.body = JSON.stringify(e.body);
    }
    let t = {};
    let r;
    let o;
    const s = e.request && e.request.fetch || zt;
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
            throw new Zt(s.statusText, r, {
                headers: t,
                request: e
            });
        }
        if (r === 304) {
            throw new Zt("Not modified", r, {
                headers: t,
                request: e
            });
        }
        if (r >= 400) {
            return s.text().then((o => {
                const s = new Zt(o, r, {
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
        return Xt(s);
    })).then((e => ({
        status: r,
        url: o,
        headers: t,
        data: e
    }))).catch((r => {
        if (r instanceof Zt) {
            throw r;
        }
        throw new Zt(r.message, 500, {
            headers: t,
            request: e
        });
    }));
}

function tr(e, t) {
    const r = e.defaults(t);
    const o = function(e, t) {
        const o = r.merge(e, t);
        if (!o.request || !o.request.hook) {
            return er(r.parse(o));
        }
        const s = (e, t) => er(r.parse(r.merge(e, t)));
        Object.assign(s, {
            endpoint: r,
            defaults: tr.bind(null, r)
        });
        return o.request.hook(s, o);
    };
    return Object.assign(o, {
        endpoint: r,
        defaults: tr.bind(null, r)
    });
}

const rr = tr(Ze, {
    headers: {
        "user-agent": `octokit-request.js/${Qt} ${ue()}`
    }
});

const or = "4.5.8";

class sr extends Error {
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

const nr = [ "method", "baseUrl", "url", "headers", "request", "query", "mediaType" ];

const ir = /\/api\/v3\/?$/;

function ar(e, t, r) {
    if (typeof t === "string" && r && "query" in r) {
        return Promise.reject(new Error(`[@octokit/graphql] "query" cannot be used as variable name`));
    }
    const o = typeof t === "string" ? Object.assign({
        query: t
    }, r) : t;
    const s = Object.keys(o).reduce(((e, t) => {
        if (nr.includes(t)) {
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
    if (ir.test(n)) {
        s.url = n.replace(ir, "/api/graphql");
    }
    return e(s).then((e => {
        if (e.data.errors) {
            const t = {};
            for (const r of Object.keys(e.headers)) {
                t[r] = e.headers[r];
            }
            throw new sr(s, {
                headers: t,
                data: e.data
            });
        }
        return e.data.data;
    }));
}

function ur(e, t) {
    const r = e.defaults(t);
    const o = (e, t) => ar(r, e, t);
    return Object.assign(o, {
        defaults: ur.bind(null, r),
        endpoint: rr.endpoint
    });
}

ur(rr, {
    headers: {
        "user-agent": `octokit-graphql.js/${or} ${ue()}`
    },
    method: "POST",
    url: "/graphql"
});

function cr(e) {
    return ur(e, {
        method: "POST",
        url: "/graphql"
    });
}

async function lr(e) {
    const t = e.split(/\./).length === 3 ? "app" : /^v\d+\./.test(e) ? "installation" : "oauth";
    return {
        type: "token",
        token: e,
        tokenType: t
    };
}

function pr(e) {
    if (e.split(/\./).length === 3) {
        return `bearer ${e}`;
    }
    return `token ${e}`;
}

async function dr(e, t, r, o) {
    const s = t.endpoint.merge(r, o);
    s.headers.authorization = pr(e);
    return t(s);
}

const fr = function e(t) {
    if (!t) {
        throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
    }
    if (typeof t !== "string") {
        throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");
    }
    t = t.replace(/^(token|bearer) +/i, "");
    return Object.assign(lr.bind(null, t), {
        hook: dr.bind(null, t)
    });
};

const mr = "3.2.4";

class hr {
    constructor(e = {}) {
        const t = new Pe;
        const r = {
            baseUrl: rr.endpoint.DEFAULTS.baseUrl,
            headers: {},
            request: Object.assign({}, e.request, {
                hook: t.bind(null, "request")
            }),
            mediaType: {
                previews: [],
                format: ""
            }
        };
        r.headers["user-agent"] = [ e.userAgent, `octokit-core.js/${mr} ${ue()}` ].filter(Boolean).join(" ");
        if (e.baseUrl) {
            r.baseUrl = e.baseUrl;
        }
        if (e.previews) {
            r.mediaType.previews = e.previews;
        }
        if (e.timeZone) {
            r.headers["time-zone"] = e.timeZone;
        }
        this.request = rr.defaults(r);
        this.graphql = cr(this.request).defaults(r);
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
                const r = fr(e.auth);
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

hr.VERSION = mr;

hr.plugins = [];

var gr = Object.freeze({
    __proto__: null,
    Octokit: hr
});

const br = {
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

const wr = "4.4.1";

function vr(e, t) {
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
                p[t] = yr(e, o, t, l, a);
                continue;
            }
            p[t] = e.request.defaults(l);
        }
    }
    return r;
}

function yr(e, t, r, o, s) {
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

function Tr(e) {
    return vr(e, br);
}

Tr.VERSION = wr;

var Er = Object.freeze({
    __proto__: null,
    restEndpointMethods: Tr
});

const _r = "2.6.2";

function Or(e) {
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

function Pr(e, t, r) {
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
                const t = Or(e);
                a = ((t.headers.link || "").match(/<([^>]+)>;\s*rel="next"/) || [])[1];
                return {
                    value: t
                };
            }
        })
    };
}

function kr(e, t, r, o) {
    if (typeof r === "function") {
        o = r;
        r = undefined;
    }
    return Sr(e, [], Pr(e, t, r)[Symbol.asyncIterator](), o);
}

function Sr(e, t, r, o) {
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
        return Sr(e, t, r, o);
    }));
}

const Ar = Object.assign(kr, {
    iterator: Pr
});

function Gr(e) {
    return {
        paginate: Object.assign(kr.bind(null, e), {
            iterator: Pr.bind(null, e)
        })
    };
}

Gr.VERSION = _r;

var jr = Object.freeze({
    __proto__: null,
    composePaginateRest: Ar,
    paginateRest: Gr
});

var Cr = R(gr);

var Rr = R(Er);

var xr = R(jr);

var Fr = x((function(e, t) {
    var r = C && C.__createBinding || (Object.create ? function(e, t, r, o) {
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
    var o = C && C.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: true,
            value: t
        });
    } : function(e, t) {
        e["default"] = t;
    });
    var s = C && C.__importStar || function(e) {
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
    const n = s(q);
    const i = s(ae);
    t.context = new n.Context;
    const a = i.getApiBaseUrl();
    const u = {
        baseUrl: a,
        request: {
            agent: i.getProxyAgent(a)
        }
    };
    t.GitHub = Cr.Octokit.plugin(Rr.restEndpointMethods, xr.paginateRest).defaults(u);
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

var Ur = x((function(e, t) {
    var r = C && C.__createBinding || (Object.create ? function(e, t, r, o) {
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
    var o = C && C.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: true,
            value: t
        });
    } : function(e, t) {
        e["default"] = t;
    });
    var s = C && C.__importStar || function(e) {
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
    const n = s(q);
    t.context = new n.Context;
    function i(e, t) {
        return new Fr.GitHub(Fr.getOctokitOptions(e, t));
    }
    t.getOctokit = i;
}));

const Dr = e => `\`${e}\``;

const $r = (e, t) => `[${e}](${t})`;

const qr = e => `<sub>${e}</sub>`;

const Br = e => `<sup>${e}</sup>`;

const Lr = e => `**${e}**`;

async function Ir({token: e, commentSignature: t, repo: r, prNumber: o, body: s}) {
    $.startGroup("Comment on PR");
    s += `\n\n${t}`;
    const n = Ur.getOctokit(e);
    $.info("Getting list of comments");
    const {data: i} = await n.issues.listComments({
        ...r,
        issue_number: o
    });
    const a = i.find((e => e.body.endsWith(t)));
    if (a) {
        $.info(`Updating previous comment ID ${a.id}`);
        await n.issues.updateComment({
            ...r,
            comment_id: a.id,
            body: s
        });
    } else {
        $.info("Posting new comment");
        await n.issues.createComment({
            ...r,
            issue_number: o,
            body: s
        });
    }
    $.endGroup();
}

var zr = x((function(e, t) {
    (function(t, r) {
        e.exports = r();
    })(C, (function() {
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
 */ var Mr = "";

var Hr;

var Nr = Wr;

function Wr(e, t) {
    if (typeof e !== "string") {
        throw new TypeError("expected a string");
    }
    if (t === 1) return e;
    if (t === 2) return e + e;
    var r = e.length * t;
    if (Hr !== e || typeof Hr === "undefined") {
        Hr = e;
        Mr = "";
    } else if (Mr.length >= r) {
        return Mr.substr(0, r);
    }
    while (r > Mr.length && t > 1) {
        if (t & 1) {
            Mr += e;
        }
        t >>= 1;
        e += e;
    }
    Mr += e;
    Mr = Mr.substr(0, r);
    return Mr;
}

var Vr = ao;

var Jr = / +$/;

var Kr = " ";

var Yr = "\n";

var Zr = "-";

var Qr = ":";

var Xr = "|";

var eo = 0;

var to = 67;

var ro = 76;

var oo = 82;

var so = 99;

var no = 108;

var io = 114;

function ao(e, t) {
    var r = t || {};
    var o = r.padding !== false;
    var s = r.delimiterStart !== false;
    var n = r.delimiterEnd !== false;
    var i = (r.align || []).concat();
    var a = r.alignDelimiters !== false;
    var u = [];
    var c = r.stringLength || co;
    var l = -1;
    var p = e.length;
    var d = [];
    var f = [];
    var m = [];
    var h = [];
    var g = [];
    var b = 0;
    var w;
    var v;
    var y;
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
        v = -1;
        y = w.length;
        m = [];
        h = [];
        if (y > b) {
            b = y;
        }
        while (++v < y) {
            _ = uo(w[v]);
            if (a === true) {
                E = c(_);
                h[v] = E;
                T = g[v];
                if (T === undefined || E > T) {
                    g[v] = E;
                }
            }
            m.push(_);
        }
        d[l] = m;
        f[l] = h;
    }
    v = -1;
    y = b;
    if (typeof i === "object" && "length" in i) {
        while (++v < y) {
            u[v] = lo(i[v]);
        }
    } else {
        A = lo(i);
        while (++v < y) {
            u[v] = A;
        }
    }
    v = -1;
    y = b;
    m = [];
    h = [];
    while (++v < y) {
        A = u[v];
        k = "";
        S = "";
        if (A === no) {
            k = Qr;
        } else if (A === io) {
            S = Qr;
        } else if (A === so) {
            k = Qr;
            S = Qr;
        }
        E = a ? Math.max(1, g[v] - k.length - S.length) : 1;
        _ = k + Nr(Zr, E) + S;
        if (a === true) {
            E = k.length + E + S.length;
            if (E > g[v]) {
                g[v] = E;
            }
            h[v] = E;
        }
        m[v] = _;
    }
    d.splice(1, 0, m);
    f.splice(1, 0, h);
    l = -1;
    p = d.length;
    O = [];
    while (++l < p) {
        m = d[l];
        h = f[l];
        v = -1;
        y = b;
        P = [];
        while (++v < y) {
            _ = m[v] || "";
            k = "";
            S = "";
            if (a === true) {
                E = g[v] - (h[v] || 0);
                A = u[v];
                if (A === io) {
                    k = Nr(Kr, E);
                } else if (A === so) {
                    if (E % 2 === 0) {
                        k = Nr(Kr, E / 2);
                        S = k;
                    } else {
                        k = Nr(Kr, E / 2 + .5);
                        S = Nr(Kr, E / 2 - .5);
                    }
                } else {
                    S = Nr(Kr, E);
                }
            }
            if (s === true && v === 0) {
                P.push(Xr);
            }
            if (o === true && !(a === false && _ === "") && (s === true || v !== 0)) {
                P.push(Kr);
            }
            if (a === true) {
                P.push(k);
            }
            P.push(_);
            if (a === true) {
                P.push(S);
            }
            if (o === true) {
                P.push(Kr);
            }
            if (n === true || v !== y - 1) {
                P.push(Xr);
            }
        }
        P = P.join("");
        if (n === false) {
            P = P.replace(Jr, "");
        }
        O.push(P);
    }
    return O.join(Yr);
}

function uo(e) {
    return e === null || e === undefined ? "" : String(e);
}

function co(e) {
    return e.length;
}

function lo(e) {
    var t = typeof e === "string" ? e.charCodeAt(0) : eo;
    return t === ro || t === no ? no : t === oo || t === io ? io : t === to || t === so ? so : eo;
}

function po() {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
        e[t] = arguments[t];
    }
}

function fo() {
    if (typeof WeakMap !== "undefined") {
        return new WeakMap;
    } else {
        return mo();
    }
}

function mo() {
    return {
        add: po,
        delete: po,
        get: po,
        set: po,
        has: function(e) {
            return false;
        }
    };
}

var ho = Object.prototype.hasOwnProperty;

var go = function(e, t) {
    return ho.call(e, t);
};

function bo(e, t) {
    for (var r in t) {
        if (go(t, r)) {
            e[r] = t[r];
        }
    }
    return e;
}

var wo = /^[ \t]*(?:\r\n|\r|\n)/;

var vo = /(?:\r\n|\r|\n)[ \t]*$/;

var yo = /^(?:[\r\n]|$)/;

var To = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/;

var Eo = /^[ \t]*[\r\n][ \t\r\n]*$/;

function _o(e, t, r) {
    var o = 0;
    var s = e[0].match(To);
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
            e = e.replace(wo, "");
        }
        if (t === p - 1 && c) {
            e = e.replace(vo, "");
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

function Oo(e, t) {
    var r = "";
    for (var o = 0, s = e.length; o < s; o++) {
        r += e[o];
        if (o < s - 1) {
            r += t[o];
        }
    }
    return r;
}

function Po(e) {
    return go(e, "raw") && go(e, "length");
}

function ko(e) {
    var t = fo();
    var r = fo();
    function o(s) {
        var n = [];
        for (var i = 1; i < arguments.length; i++) {
            n[i - 1] = arguments[i];
        }
        if (Po(s)) {
            var a = s;
            var u = (n[0] === o || n[0] === So) && Eo.test(a[0]) && yo.test(a[1]);
            var c = u ? r : t;
            var l = c.get(a);
            if (!l) {
                l = _o(a, u, e);
                c.set(a, l);
            }
            if (n.length === 0) {
                return l[0];
            }
            var p = Oo(l, u ? n.slice(1) : n);
            return p;
        } else {
            return ko(bo(bo({}, e), s || {}));
        }
    }
    var s = bo(o, {
        string: function(t) {
            return _o([ t ], false, e)[0];
        }
    });
    return s;
}

var So = ko({
    trimLeadingNewline: true,
    trimTrailingNewline: true
});

if (typeof module !== "undefined") {
    try {
        module.exports = So;
        Object.defineProperty(So, "__esModule", {
            value: true
        });
        So.default = So;
        So.outdent = So;
    } catch (e) {}
}

var Ao = typeof global == "object" && global && global.Object === Object && global;

var Go = Ao;

var jo = typeof self == "object" && self && self.Object === Object && self;

var Co = Go || jo || Function("return this")();

var Ro = Co;

var xo = Ro.Symbol;

var Fo = xo;

var Uo = Object.prototype;

var Do = Uo.hasOwnProperty;

var $o = Uo.toString;

var qo = Fo ? Fo.toStringTag : undefined;

function Bo(e) {
    var t = Do.call(e, qo), r = e[qo];
    try {
        e[qo] = undefined;
        var o = true;
    } catch (e) {}
    var s = $o.call(e);
    if (o) {
        if (t) {
            e[qo] = r;
        } else {
            delete e[qo];
        }
    }
    return s;
}

var Lo = Object.prototype;

var Io = Lo.toString;

function zo(e) {
    return Io.call(e);
}

var Mo = "[object Null]", Ho = "[object Undefined]";

var No = Fo ? Fo.toStringTag : undefined;

function Wo(e) {
    if (e == null) {
        return e === undefined ? Ho : Mo;
    }
    return No && No in Object(e) ? Bo(e) : zo(e);
}

function Vo(e) {
    return e != null && typeof e == "object";
}

var Jo = "[object Symbol]";

function Ko(e) {
    return typeof e == "symbol" || Vo(e) && Wo(e) == Jo;
}

function Yo(e, t) {
    var r = -1, o = e == null ? 0 : e.length, s = Array(o);
    while (++r < o) {
        s[r] = t(e[r], r, e);
    }
    return s;
}

var Zo = Array.isArray;

var Qo = Zo;

var Xo = 1 / 0;

var es = Fo ? Fo.prototype : undefined, ts = es ? es.toString : undefined;

function rs(e) {
    if (typeof e == "string") {
        return e;
    }
    if (Qo(e)) {
        return Yo(e, rs) + "";
    }
    if (Ko(e)) {
        return ts ? ts.call(e) : "";
    }
    var t = e + "";
    return t == "0" && 1 / e == -Xo ? "-0" : t;
}

var os = /\s/;

function ss(e) {
    var t = e.length;
    while (t-- && os.test(e.charAt(t))) {}
    return t;
}

var ns = /^\s+/;

function is(e) {
    return e ? e.slice(0, ss(e) + 1).replace(ns, "") : e;
}

function as(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
}

var us = 0 / 0;

var cs = /^[-+]0x[0-9a-f]+$/i;

var ls = /^0b[01]+$/i;

var ps = /^0o[0-7]+$/i;

var ds = parseInt;

function fs(e) {
    if (typeof e == "number") {
        return e;
    }
    if (Ko(e)) {
        return us;
    }
    if (as(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = as(t) ? t + "" : t;
    }
    if (typeof e != "string") {
        return e === 0 ? e : +e;
    }
    e = is(e);
    var r = ls.test(e);
    return r || ps.test(e) ? ds(e.slice(2), r ? 2 : 8) : cs.test(e) ? us : +e;
}

var ms = 1 / 0, hs = 17976931348623157e292;

function gs(e) {
    if (!e) {
        return e === 0 ? e : 0;
    }
    e = fs(e);
    if (e === ms || e === -ms) {
        var t = e < 0 ? -1 : 1;
        return t * hs;
    }
    return e === e ? e : 0;
}

function bs(e) {
    var t = gs(e), r = t % 1;
    return t === t ? r ? t - r : t : 0;
}

function ws(e) {
    return e;
}

var vs = "[object AsyncFunction]", ys = "[object Function]", Ts = "[object GeneratorFunction]", Es = "[object Proxy]";

function _s(e) {
    if (!as(e)) {
        return false;
    }
    var t = Wo(e);
    return t == ys || t == Ts || t == vs || t == Es;
}

var Os = Ro["__core-js_shared__"];

var Ps = Os;

var ks = function() {
    var e = /[^.]+$/.exec(Ps && Ps.keys && Ps.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
}();

function Ss(e) {
    return !!ks && ks in e;
}

var As = Function.prototype;

var Gs = As.toString;

function js(e) {
    if (e != null) {
        try {
            return Gs.call(e);
        } catch (e) {}
        try {
            return e + "";
        } catch (e) {}
    }
    return "";
}

var Cs = /[\\^$.*+?()[\]{}|]/g;

var Rs = /^\[object .+?Constructor\]$/;

var xs = Function.prototype, Fs = Object.prototype;

var Us = xs.toString;

var Ds = Fs.hasOwnProperty;

var $s = RegExp("^" + Us.call(Ds).replace(Cs, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function qs(e) {
    if (!as(e) || Ss(e)) {
        return false;
    }
    var t = _s(e) ? $s : Rs;
    return t.test(js(e));
}

function Bs(e, t) {
    return e == null ? undefined : e[t];
}

function Ls(e, t) {
    var r = Bs(e, t);
    return qs(r) ? r : undefined;
}

var Is = Ls(Ro, "WeakMap");

var zs = Is;

var Ms = 9007199254740991;

var Hs = /^(?:0|[1-9]\d*)$/;

function Ns(e, t) {
    var r = typeof e;
    t = t == null ? Ms : t;
    return !!t && (r == "number" || r != "symbol" && Hs.test(e)) && (e > -1 && e % 1 == 0 && e < t);
}

function Ws(e, t) {
    return e === t || e !== e && t !== t;
}

var Vs = 9007199254740991;

function Js(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Vs;
}

function Ks(e) {
    return e != null && Js(e.length) && !_s(e);
}

var Ys = Object.prototype;

function Zs(e) {
    var t = e && e.constructor, r = typeof t == "function" && t.prototype || Ys;
    return e === r;
}

function Qs(e, t) {
    var r = -1, o = Array(e);
    while (++r < e) {
        o[r] = t(r);
    }
    return o;
}

var Xs = "[object Arguments]";

function en(e) {
    return Vo(e) && Wo(e) == Xs;
}

var tn = Object.prototype;

var rn = tn.hasOwnProperty;

var on = tn.propertyIsEnumerable;

var sn = en(function() {
    return arguments;
}()) ? en : function(e) {
    return Vo(e) && rn.call(e, "callee") && !on.call(e, "callee");
};

var nn = sn;

function an() {
    return false;
}

var un = typeof exports == "object" && exports && !exports.nodeType && exports;

var cn = un && typeof module == "object" && module && !module.nodeType && module;

var ln = cn && cn.exports === un;

var pn = ln ? Ro.Buffer : undefined;

var dn = pn ? pn.isBuffer : undefined;

var fn = dn || an;

var mn = fn;

var hn = "[object Arguments]", gn = "[object Array]", bn = "[object Boolean]", wn = "[object Date]", vn = "[object Error]", yn = "[object Function]", Tn = "[object Map]", En = "[object Number]", _n = "[object Object]", On = "[object RegExp]", Pn = "[object Set]", kn = "[object String]", Sn = "[object WeakMap]";

var An = "[object ArrayBuffer]", Gn = "[object DataView]", jn = "[object Float32Array]", Cn = "[object Float64Array]", Rn = "[object Int8Array]", xn = "[object Int16Array]", Fn = "[object Int32Array]", Un = "[object Uint8Array]", Dn = "[object Uint8ClampedArray]", $n = "[object Uint16Array]", qn = "[object Uint32Array]";

var Bn = {};

Bn[jn] = Bn[Cn] = Bn[Rn] = Bn[xn] = Bn[Fn] = Bn[Un] = Bn[Dn] = Bn[$n] = Bn[qn] = true;

Bn[hn] = Bn[gn] = Bn[An] = Bn[bn] = Bn[Gn] = Bn[wn] = Bn[vn] = Bn[yn] = Bn[Tn] = Bn[En] = Bn[_n] = Bn[On] = Bn[Pn] = Bn[kn] = Bn[Sn] = false;

function Ln(e) {
    return Vo(e) && Js(e.length) && !!Bn[Wo(e)];
}

function In(e) {
    return function(t) {
        return e(t);
    };
}

var zn = typeof exports == "object" && exports && !exports.nodeType && exports;

var Mn = zn && typeof module == "object" && module && !module.nodeType && module;

var Hn = Mn && Mn.exports === zn;

var Nn = Hn && Go.process;

var Wn = function() {
    try {
        var e = Mn && Mn.require && Mn.require("util").types;
        if (e) {
            return e;
        }
        return Nn && Nn.binding && Nn.binding("util");
    } catch (e) {}
}();

var Vn = Wn;

var Jn = Vn && Vn.isTypedArray;

var Kn = Jn ? In(Jn) : Ln;

var Yn = Kn;

var Zn = Object.prototype;

var Qn = Zn.hasOwnProperty;

function Xn(e, t) {
    var r = Qo(e), o = !r && nn(e), s = !r && !o && mn(e), n = !r && !o && !s && Yn(e), i = r || o || s || n, a = i ? Qs(e.length, String) : [], u = a.length;
    for (var c in e) {
        if ((t || Qn.call(e, c)) && !(i && (c == "length" || s && (c == "offset" || c == "parent") || n && (c == "buffer" || c == "byteLength" || c == "byteOffset") || Ns(c, u)))) {
            a.push(c);
        }
    }
    return a;
}

function ei(e, t) {
    return function(r) {
        return e(t(r));
    };
}

var ti = ei(Object.keys, Object);

var ri = ti;

var oi = Object.prototype;

var si = oi.hasOwnProperty;

function ni(e) {
    if (!Zs(e)) {
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
    return Ks(e) ? Xn(e) : ni(e);
}

var ai = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ui = /^\w*$/;

function ci(e, t) {
    if (Qo(e)) {
        return false;
    }
    var r = typeof e;
    if (r == "number" || r == "symbol" || r == "boolean" || e == null || Ko(e)) {
        return true;
    }
    return ui.test(e) || !ai.test(e) || t != null && e in Object(t);
}

var li = Ls(Object, "create");

var pi = li;

function di() {
    this.__data__ = pi ? pi(null) : {};
    this.size = 0;
}

function fi(e) {
    var t = this.has(e) && delete this.__data__[e];
    this.size -= t ? 1 : 0;
    return t;
}

var mi = "__lodash_hash_undefined__";

var hi = Object.prototype;

var gi = hi.hasOwnProperty;

function bi(e) {
    var t = this.__data__;
    if (pi) {
        var r = t[e];
        return r === mi ? undefined : r;
    }
    return gi.call(t, e) ? t[e] : undefined;
}

var wi = Object.prototype;

var vi = wi.hasOwnProperty;

function yi(e) {
    var t = this.__data__;
    return pi ? t[e] !== undefined : vi.call(t, e);
}

var Ti = "__lodash_hash_undefined__";

function Ei(e, t) {
    var r = this.__data__;
    this.size += this.has(e) ? 0 : 1;
    r[e] = pi && t === undefined ? Ti : t;
    return this;
}

function _i(e) {
    var t = -1, r = e == null ? 0 : e.length;
    this.clear();
    while (++t < r) {
        var o = e[t];
        this.set(o[0], o[1]);
    }
}

_i.prototype.clear = di;

_i.prototype["delete"] = fi;

_i.prototype.get = bi;

_i.prototype.has = yi;

_i.prototype.set = Ei;

function Oi() {
    this.__data__ = [];
    this.size = 0;
}

function Pi(e, t) {
    var r = e.length;
    while (r--) {
        if (Ws(e[r][0], t)) {
            return r;
        }
    }
    return -1;
}

var ki = Array.prototype;

var Si = ki.splice;

function Ai(e) {
    var t = this.__data__, r = Pi(t, e);
    if (r < 0) {
        return false;
    }
    var o = t.length - 1;
    if (r == o) {
        t.pop();
    } else {
        Si.call(t, r, 1);
    }
    --this.size;
    return true;
}

function Gi(e) {
    var t = this.__data__, r = Pi(t, e);
    return r < 0 ? undefined : t[r][1];
}

function ji(e) {
    return Pi(this.__data__, e) > -1;
}

function Ci(e, t) {
    var r = this.__data__, o = Pi(r, e);
    if (o < 0) {
        ++this.size;
        r.push([ e, t ]);
    } else {
        r[o][1] = t;
    }
    return this;
}

function Ri(e) {
    var t = -1, r = e == null ? 0 : e.length;
    this.clear();
    while (++t < r) {
        var o = e[t];
        this.set(o[0], o[1]);
    }
}

Ri.prototype.clear = Oi;

Ri.prototype["delete"] = Ai;

Ri.prototype.get = Gi;

Ri.prototype.has = ji;

Ri.prototype.set = Ci;

var xi = Ls(Ro, "Map");

var Fi = xi;

function Ui() {
    this.size = 0;
    this.__data__ = {
        hash: new _i,
        map: new (Fi || Ri),
        string: new _i
    };
}

function Di(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}

function $i(e, t) {
    var r = e.__data__;
    return Di(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}

function qi(e) {
    var t = $i(this, e)["delete"](e);
    this.size -= t ? 1 : 0;
    return t;
}

function Bi(e) {
    return $i(this, e).get(e);
}

function Li(e) {
    return $i(this, e).has(e);
}

function Ii(e, t) {
    var r = $i(this, e), o = r.size;
    r.set(e, t);
    this.size += r.size == o ? 0 : 1;
    return this;
}

function zi(e) {
    var t = -1, r = e == null ? 0 : e.length;
    this.clear();
    while (++t < r) {
        var o = e[t];
        this.set(o[0], o[1]);
    }
}

zi.prototype.clear = Ui;

zi.prototype["delete"] = qi;

zi.prototype.get = Bi;

zi.prototype.has = Li;

zi.prototype.set = Ii;

var Mi = "Expected a function";

function Hi(e, t) {
    if (typeof e != "function" || t != null && typeof t != "function") {
        throw new TypeError(Mi);
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
    r.cache = new (Hi.Cache || zi);
    return r;
}

Hi.Cache = zi;

var Ni = 500;

function Wi(e) {
    var t = Hi(e, (function(e) {
        if (r.size === Ni) {
            r.clear();
        }
        return e;
    }));
    var r = t.cache;
    return t;
}

var Vi = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

var Ji = /\\(\\)?/g;

var Ki = Wi((function(e) {
    var t = [];
    if (e.charCodeAt(0) === 46) {
        t.push("");
    }
    e.replace(Vi, (function(e, r, o, s) {
        t.push(o ? s.replace(Ji, "$1") : r || e);
    }));
    return t;
}));

var Yi = Ki;

function Zi(e) {
    return e == null ? "" : rs(e);
}

function Qi(e, t) {
    if (Qo(e)) {
        return e;
    }
    return ci(e, t) ? [ e ] : Yi(Zi(e));
}

var Xi = 1 / 0;

function ea(e) {
    if (typeof e == "string" || Ko(e)) {
        return e;
    }
    var t = e + "";
    return t == "0" && 1 / e == -Xi ? "-0" : t;
}

function ta(e, t) {
    t = Qi(t, e);
    var r = 0, o = t.length;
    while (e != null && r < o) {
        e = e[ea(t[r++])];
    }
    return r && r == o ? e : undefined;
}

function ra(e, t, r) {
    var o = e == null ? undefined : ta(e, t);
    return o === undefined ? r : o;
}

function oa(e, t) {
    var r = -1, o = t.length, s = e.length;
    while (++r < o) {
        e[s + r] = t[r];
    }
    return e;
}

var sa = Ro.isFinite, na = Math.min;

function ia(e) {
    var t = Math[e];
    return function(e, r) {
        e = fs(e);
        r = r == null ? 0 : na(bs(r), 292);
        if (r && sa(e)) {
            var o = (Zi(e) + "e").split("e"), s = t(o[0] + "e" + (+o[1] + r));
            o = (Zi(s) + "e").split("e");
            return +(o[0] + "e" + (+o[1] - r));
        }
        return t(e);
    };
}

function aa() {
    this.__data__ = new Ri;
    this.size = 0;
}

function ua(e) {
    var t = this.__data__, r = t["delete"](e);
    this.size = t.size;
    return r;
}

function ca(e) {
    return this.__data__.get(e);
}

function la(e) {
    return this.__data__.has(e);
}

var pa = 200;

function da(e, t) {
    var r = this.__data__;
    if (r instanceof Ri) {
        var o = r.__data__;
        if (!Fi || o.length < pa - 1) {
            o.push([ e, t ]);
            this.size = ++r.size;
            return this;
        }
        r = this.__data__ = new zi(o);
    }
    r.set(e, t);
    this.size = r.size;
    return this;
}

function fa(e) {
    var t = this.__data__ = new Ri(e);
    this.size = t.size;
}

fa.prototype.clear = aa;

fa.prototype["delete"] = ua;

fa.prototype.get = ca;

fa.prototype.has = la;

fa.prototype.set = da;

function ma(e, t) {
    var r = -1, o = e == null ? 0 : e.length, s = 0, n = [];
    while (++r < o) {
        var i = e[r];
        if (t(i, r, e)) {
            n[s++] = i;
        }
    }
    return n;
}

function ha() {
    return [];
}

var ga = Object.prototype;

var ba = ga.propertyIsEnumerable;

var wa = Object.getOwnPropertySymbols;

var va = !wa ? ha : function(e) {
    if (e == null) {
        return [];
    }
    e = Object(e);
    return ma(wa(e), (function(t) {
        return ba.call(e, t);
    }));
};

var ya = va;

function Ta(e, t, r) {
    var o = t(e);
    return Qo(e) ? o : oa(o, r(e));
}

function Ea(e) {
    return Ta(e, ii, ya);
}

var _a = Ls(Ro, "DataView");

var Oa = _a;

var Pa = Ls(Ro, "Promise");

var ka = Pa;

var Sa = Ls(Ro, "Set");

var Aa = Sa;

var Ga = "[object Map]", ja = "[object Object]", Ca = "[object Promise]", Ra = "[object Set]", xa = "[object WeakMap]";

var Fa = "[object DataView]";

var Ua = js(Oa), Da = js(Fi), $a = js(ka), qa = js(Aa), Ba = js(zs);

var La = Wo;

if (Oa && La(new Oa(new ArrayBuffer(1))) != Fa || Fi && La(new Fi) != Ga || ka && La(ka.resolve()) != Ca || Aa && La(new Aa) != Ra || zs && La(new zs) != xa) {
    La = function(e) {
        var t = Wo(e), r = t == ja ? e.constructor : undefined, o = r ? js(r) : "";
        if (o) {
            switch (o) {
              case Ua:
                return Fa;

              case Da:
                return Ga;

              case $a:
                return Ca;

              case qa:
                return Ra;

              case Ba:
                return xa;
            }
        }
        return t;
    };
}

var Ia = La;

var za = Ro.Uint8Array;

var Ma = za;

var Ha = "__lodash_hash_undefined__";

function Na(e) {
    this.__data__.set(e, Ha);
    return this;
}

function Wa(e) {
    return this.__data__.has(e);
}

function Va(e) {
    var t = -1, r = e == null ? 0 : e.length;
    this.__data__ = new zi;
    while (++t < r) {
        this.add(e[t]);
    }
}

Va.prototype.add = Va.prototype.push = Na;

Va.prototype.has = Wa;

function Ja(e, t) {
    var r = -1, o = e == null ? 0 : e.length;
    while (++r < o) {
        if (t(e[r], r, e)) {
            return true;
        }
    }
    return false;
}

function Ka(e, t) {
    return e.has(t);
}

var Ya = 1, Za = 2;

function Qa(e, t, r, o, s, n) {
    var i = r & Ya, a = e.length, u = t.length;
    if (a != u && !(i && u > a)) {
        return false;
    }
    var c = n.get(e);
    var l = n.get(t);
    if (c && l) {
        return c == t && l == e;
    }
    var p = -1, d = true, f = r & Za ? new Va : undefined;
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
            if (!Ja(t, (function(e, t) {
                if (!Ka(f, t) && (m === e || s(m, e, r, o, n))) {
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

function Xa(e) {
    var t = -1, r = Array(e.size);
    e.forEach((function(e, o) {
        r[++t] = [ o, e ];
    }));
    return r;
}

function eu(e) {
    var t = -1, r = Array(e.size);
    e.forEach((function(e) {
        r[++t] = e;
    }));
    return r;
}

var tu = 1, ru = 2;

var ou = "[object Boolean]", su = "[object Date]", nu = "[object Error]", iu = "[object Map]", au = "[object Number]", uu = "[object RegExp]", cu = "[object Set]", lu = "[object String]", pu = "[object Symbol]";

var du = "[object ArrayBuffer]", fu = "[object DataView]";

var mu = Fo ? Fo.prototype : undefined, hu = mu ? mu.valueOf : undefined;

function gu(e, t, r, o, s, n, i) {
    switch (r) {
      case fu:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) {
            return false;
        }
        e = e.buffer;
        t = t.buffer;

      case du:
        if (e.byteLength != t.byteLength || !n(new Ma(e), new Ma(t))) {
            return false;
        }
        return true;

      case ou:
      case su:
      case au:
        return Ws(+e, +t);

      case nu:
        return e.name == t.name && e.message == t.message;

      case uu:
      case lu:
        return e == t + "";

      case iu:
        var a = Xa;

      case cu:
        var u = o & tu;
        a || (a = eu);
        if (e.size != t.size && !u) {
            return false;
        }
        var c = i.get(e);
        if (c) {
            return c == t;
        }
        o |= ru;
        i.set(e, t);
        var l = Qa(a(e), a(t), o, s, n, i);
        i["delete"](e);
        return l;

      case pu:
        if (hu) {
            return hu.call(e) == hu.call(t);
        }
    }
    return false;
}

var bu = 1;

var wu = Object.prototype;

var vu = wu.hasOwnProperty;

function yu(e, t, r, o, s, n) {
    var i = r & bu, a = Ea(e), u = a.length, c = Ea(t), l = c.length;
    if (u != l && !i) {
        return false;
    }
    var p = u;
    while (p--) {
        var d = a[p];
        if (!(i ? d in t : vu.call(t, d))) {
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
            var v = i ? o(w, b, d, t, e, n) : o(b, w, d, e, t, n);
        }
        if (!(v === undefined ? b === w || s(b, w, r, o, n) : v)) {
            h = false;
            break;
        }
        g || (g = d == "constructor");
    }
    if (h && !g) {
        var y = e.constructor, T = t.constructor;
        if (y != T && ("constructor" in e && "constructor" in t) && !(typeof y == "function" && y instanceof y && typeof T == "function" && T instanceof T)) {
            h = false;
        }
    }
    n["delete"](e);
    n["delete"](t);
    return h;
}

var Tu = 1;

var Eu = "[object Arguments]", _u = "[object Array]", Ou = "[object Object]";

var Pu = Object.prototype;

var ku = Pu.hasOwnProperty;

function Su(e, t, r, o, s, n) {
    var i = Qo(e), a = Qo(t), u = i ? _u : Ia(e), c = a ? _u : Ia(t);
    u = u == Eu ? Ou : u;
    c = c == Eu ? Ou : c;
    var l = u == Ou, p = c == Ou, d = u == c;
    if (d && mn(e)) {
        if (!mn(t)) {
            return false;
        }
        i = true;
        l = false;
    }
    if (d && !l) {
        n || (n = new fa);
        return i || Yn(e) ? Qa(e, t, r, o, s, n) : gu(e, t, u, r, o, s, n);
    }
    if (!(r & Tu)) {
        var f = l && ku.call(e, "__wrapped__"), m = p && ku.call(t, "__wrapped__");
        if (f || m) {
            var h = f ? e.value() : e, g = m ? t.value() : t;
            n || (n = new fa);
            return s(h, g, r, o, n);
        }
    }
    if (!d) {
        return false;
    }
    n || (n = new fa);
    return yu(e, t, r, o, s, n);
}

function Au(e, t, r, o, s) {
    if (e === t) {
        return true;
    }
    if (e == null || t == null || !Vo(e) && !Vo(t)) {
        return e !== e && t !== t;
    }
    return Su(e, t, r, o, Au, s);
}

var Gu = 1, ju = 2;

function Cu(e, t, r, o) {
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
            var p = new fa;
            if (o) {
                var d = o(c, l, u, e, t, p);
            }
            if (!(d === undefined ? Au(l, c, Gu | ju, o, p) : d)) {
                return false;
            }
        }
    }
    return true;
}

function Ru(e) {
    return e === e && !as(e);
}

function xu(e) {
    var t = ii(e), r = t.length;
    while (r--) {
        var o = t[r], s = e[o];
        t[r] = [ o, s, Ru(s) ];
    }
    return t;
}

function Fu(e, t) {
    return function(r) {
        if (r == null) {
            return false;
        }
        return r[e] === t && (t !== undefined || e in Object(r));
    };
}

function Uu(e) {
    var t = xu(e);
    if (t.length == 1 && t[0][2]) {
        return Fu(t[0][0], t[0][1]);
    }
    return function(r) {
        return r === e || Cu(r, e, t);
    };
}

function Du(e, t) {
    return e != null && t in Object(e);
}

function $u(e, t, r) {
    t = Qi(t, e);
    var o = -1, s = t.length, n = false;
    while (++o < s) {
        var i = ea(t[o]);
        if (!(n = e != null && r(e, i))) {
            break;
        }
        e = e[i];
    }
    if (n || ++o != s) {
        return n;
    }
    s = e == null ? 0 : e.length;
    return !!s && Js(s) && Ns(i, s) && (Qo(e) || nn(e));
}

function qu(e, t) {
    return e != null && $u(e, t, Du);
}

var Bu = 1, Lu = 2;

function Iu(e, t) {
    if (ci(e) && Ru(t)) {
        return Fu(ea(e), t);
    }
    return function(r) {
        var o = ra(r, e);
        return o === undefined && o === t ? qu(r, e) : Au(t, o, Bu | Lu);
    };
}

function zu(e) {
    return function(t) {
        return t == null ? undefined : t[e];
    };
}

function Mu(e) {
    return function(t) {
        return ta(t, e);
    };
}

function Hu(e) {
    return ci(e) ? zu(ea(e)) : Mu(e);
}

function Nu(e) {
    if (typeof e == "function") {
        return e;
    }
    if (e == null) {
        return ws;
    }
    if (typeof e == "object") {
        return Qo(e) ? Iu(e[0], e[1]) : Uu(e);
    }
    return Hu(e);
}

function Wu(e, t, r, o) {
    var s = -1, n = e == null ? 0 : e.length;
    while (++s < n) {
        var i = e[s];
        t(o, i, r(i), e);
    }
    return o;
}

function Vu(e) {
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

var Ju = Vu();

var Ku = Ju;

function Yu(e, t) {
    return e && Ku(e, t, ii);
}

function Zu(e, t) {
    return function(r, o) {
        if (r == null) {
            return r;
        }
        if (!Ks(r)) {
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

var Qu = Zu(Yu);

var Xu = Qu;

function ec(e, t, r, o) {
    Xu(e, (function(e, s, n) {
        t(o, e, r(e), n);
    }));
    return o;
}

function tc(e, t) {
    return function(r, o) {
        var s = Qo(r) ? Wu : ec, n = t ? t() : {};
        return s(r, e, Nu(o), n);
    };
}

var rc = tc((function(e, t, r) {
    e[r ? 0 : 1].push(t);
}), (function() {
    return [ [], [] ];
}));

var oc = rc;

var sc = ia("round");

var nc = sc;

var ic = function(e, t) {
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

function ac(e, t) {
    if (!e) {
        return [ [], t ];
    }
    const r = ic(e, {
        extended: true
    });
    return oc(t, (e => r.test(e.path)));
}

function uc(e) {
    if (e.length === 1 && e[0].property === "size") {
        return "";
    }
    return ` (${e.map((e => e.label)).join(" / ")})`;
}

const cc = {
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

function lc(e) {
    return e.split(",").map((e => e.trim())).filter((e => cc.hasOwnProperty(e))).map((e => cc[e]));
}

const pc = (e, t) => e.map((({property: e}) => t(e))).join(" / ");

function dc(e, t, r) {
    e.sort(((e, r) => r[t] - e[t] || e.path.localeCompare(r.path)));
    if (r === "asc") {
        e.reverse();
    }
}

const fc = e => {
    if (e < .001) {
        e = nc(e, 4);
    } else if (e < .01) {
        e = nc(e, 3);
    } else {
        e = nc(e, 2);
    }
    return e.toLocaleString(undefined, {
        style: "percent",
        maximumSignificantDigits: 3
    });
};

function mc(e, t, r) {
    const o = e[r] - t[r];
    return {
        delta: o,
        percent: fc(o / t[r])
    };
}

function hc(e, t) {
    return {
        size: mc(e, t, "size"),
        sizeGzip: mc(e, t, "sizeGzip"),
        sizeBrotli: mc(e, t, "sizeBrotli")
    };
}

function gc(e, t, r) {
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
            o.diff = hc(o.head, o.base);
        }
    }));
}

function bc(e, t, {sortBy: r, sortOrder: o, hideFiles: s} = {}) {
    const n = {};
    gc(n, "head", e);
    gc(n, "base", t);
    const i = Object.values(n);
    dc(i, r, o);
    const [a, u] = ac(s, i);
    const [c, l] = oc(u, (e => e.diff && e.diff.size.delta === 0));
    return {
        head: e,
        base: t,
        diff: {
            ...hc(e, t),
            tarballSize: mc(e, t, "tarballSize")
        },
        files: {
            changed: l,
            unchanged: c,
            hidden: a
        }
    };
}

const wc = e => {
    if (e < 0) {
        return "↓";
    }
    if (e > 0) {
        return "↑";
    }
    return "";
};

const vc = ({delta: e, percent: t}) => e ? t + wc(e) : "";

function yc({headPkgData: e, basePkgData: t, sortBy: r, sortOrder: o, hideFiles: s, unchangedFiles: n, displaySize: i}) {
    const a = bc(e, t, {
        sortBy: r,
        sortOrder: o,
        hideFiles: s
    });
    $.setOutput("regressionData", a);
    const {changed: u, unchanged: c, hidden: l} = a.files;
    const p = lc(i);
    const d = uc(p);
    const f = Vr([ [ "File", `Before${d}`, `After${d}` ], ...[ ...u, ...n === "show" ? c : [] ].map((e => [ e.label, e.base && e.base.size ? pc(p, (t => Dr(zr(e.base[t])))) : "—", e.head && e.head.size ? pc(p, (t => (e.base && e.base[t] ? Br(vc(e.diff[t])) : "") + Dr(zr(e.head[t])))) : "—" ])), [ `${Lr("Total")} ${n === "show" ? "" : qr("_(Includes all files)_")}`, pc(p, (e => Dr(zr(a.base[e])))), pc(p, (e => Br(vc(a.diff[e])) + Dr(zr(a.head[e])))) ], [ Lr("Tarball size"), Dr(zr(a.base.tarballSize)), Br(vc(a.diff.tarballSize)) + Dr(zr(a.head.tarballSize)) ] ], {
        align: [ "", "r", "r" ]
    });
    let m = "";
    if (n === "collapse" && c.length > 0) {
        m = Vr([ [ "File", `Size${d}` ], ...c.map((e => [ e.label, pc(p, (t => Dr(zr(e.base[t])))) ])) ], {
            align: [ "", "r" ]
        });
        m = `<details><summary>Unchanged files</summary>\n\n${m}\n</details>`;
    }
    let h = "";
    if (l.length > 0) {
        h = Vr([ [ "File", `Before${d}`, `After${d}` ], ...l.map((e => [ e.label, e.base && e.base.size ? pc(p, (t => Dr(zr(e.base[t])))) : "—", e.head && e.head.size ? pc(p, (t => (e.base && e.base[t] ? Br(vc(e.diff[t])) : "") + Dr(zr(e.head[t])))) : "—" ])) ], {
            align: [ "", "r", "r" ]
        });
        h = `<details><summary>Hidden files</summary>\n\n${h}\n</details>`;
    }
    return So`
	### 📊 Package size report&nbsp;&nbsp;&nbsp;<kbd>${vc(a.diff.size) || "No changes"}</kbd>

	${f}

	${m}

	${h}
	`;
}

function Tc({headPkgData: e, hideFiles: t, displaySize: r, sortBy: o, sortOrder: s}) {
    const n = lc(r);
    const i = uc(n);
    dc(e.files, o, s);
    const [a, u] = ac(t, e.files);
    const c = Vr([ [ "File", `Size${i}` ], ...u.map((e => [ e.label, pc(n, (t => Dr(zr(e[t])))) ])), [ Lr("Total"), pc(n, (t => Dr(zr(e[t])))) ], [ Lr("Tarball size"), Dr(zr(e.tarballSize)) ] ], {
        align: [ "", "r" ]
    });
    let l = "";
    if (a.length > 0) {
        l = Vr([ [ "File", `Size${i}` ], ...a.map((e => [ e.label, pc(n, (t => Dr(zr(e[t])))) ])) ], {
            align: [ "", "r" ]
        });
        l = `<details><summary>Hidden files</summary>\n\n${l}\n</details>`;
    }
    return So`
	### 📊 Package size report

	${c}

	${l}
	`;
}

var Ec = x((function(e, t) {
    var r = C && C.__createBinding || (Object.create ? function(e, t, r, o) {
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
    var o = C && C.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: true,
            value: t
        });
    } : function(e, t) {
        e["default"] = t;
    });
    var s = C && C.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) for (var s in e) if (s !== "default" && Object.hasOwnProperty.call(e, s)) r(t, e, s);
        o(t, e);
        return t;
    };
    var n = C && C.__awaiter || function(e, t, r, o) {
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
    var i;
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    t.getCmdPath = t.tryGetExecutablePath = t.isRooted = t.isDirectory = t.exists = t.IS_WINDOWS = t.unlink = t.symlink = t.stat = t.rmdir = t.rename = t.readlink = t.readdir = t.mkdir = t.lstat = t.copyFile = t.chmod = void 0;
    const a = s(w["default"]);
    const u = s(v["default"]);
    i = a.promises, t.chmod = i.chmod, t.copyFile = i.copyFile, t.lstat = i.lstat, t.mkdir = i.mkdir, 
    t.readdir = i.readdir, t.readlink = i.readlink, t.rename = i.rename, t.rmdir = i.rmdir, 
    t.stat = i.stat, t.symlink = i.symlink, t.unlink = i.unlink;
    t.IS_WINDOWS = process.platform === "win32";
    function c(e) {
        return n(this, void 0, void 0, (function*() {
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
    t.exists = c;
    function l(e, r = false) {
        return n(this, void 0, void 0, (function*() {
            const o = r ? yield t.stat(e) : yield t.lstat(e);
            return o.isDirectory();
        }));
    }
    t.isDirectory = l;
    function p(e) {
        e = f(e);
        if (!e) {
            throw new Error('isRooted() parameter "p" cannot be empty');
        }
        if (t.IS_WINDOWS) {
            return e.startsWith("\\") || /^[A-Z]:/i.test(e);
        }
        return e.startsWith("/");
    }
    t.isRooted = p;
    function d(e, r) {
        return n(this, void 0, void 0, (function*() {
            let o = undefined;
            try {
                o = yield t.stat(e);
            } catch (t) {
                if (t.code !== "ENOENT") {
                    console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${t}`);
                }
            }
            if (o && o.isFile()) {
                if (t.IS_WINDOWS) {
                    const t = u.extname(e).toUpperCase();
                    if (r.some((e => e.toUpperCase() === t))) {
                        return e;
                    }
                } else {
                    if (m(o)) {
                        return e;
                    }
                }
            }
            const s = e;
            for (const n of r) {
                e = s + n;
                o = undefined;
                try {
                    o = yield t.stat(e);
                } catch (t) {
                    if (t.code !== "ENOENT") {
                        console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${t}`);
                    }
                }
                if (o && o.isFile()) {
                    if (t.IS_WINDOWS) {
                        try {
                            const r = u.dirname(e);
                            const o = u.basename(e).toUpperCase();
                            for (const s of yield t.readdir(r)) {
                                if (o === s.toUpperCase()) {
                                    e = u.join(r, s);
                                    break;
                                }
                            }
                        } catch (t) {
                            console.log(`Unexpected error attempting to determine the actual case of the file '${e}': ${t}`);
                        }
                        return e;
                    } else {
                        if (m(o)) {
                            return e;
                        }
                    }
                }
            }
            return "";
        }));
    }
    t.tryGetExecutablePath = d;
    function f(e) {
        e = e || "";
        if (t.IS_WINDOWS) {
            e = e.replace(/\//g, "\\");
            return e.replace(/\\\\+/g, "\\");
        }
        return e.replace(/\/\/+/g, "/");
    }
    function m(e) {
        return (e.mode & 1) > 0 || (e.mode & 8) > 0 && e.gid === process.getgid() || (e.mode & 64) > 0 && e.uid === process.getuid();
    }
    function h() {
        var e;
        return (e = process.env["COMSPEC"]) !== null && e !== void 0 ? e : `cmd.exe`;
    }
    t.getCmdPath = h;
}));

var _c = x((function(e, t) {
    var r = C && C.__createBinding || (Object.create ? function(e, t, r, o) {
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
    var o = C && C.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: true,
            value: t
        });
    } : function(e, t) {
        e["default"] = t;
    });
    var s = C && C.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) for (var s in e) if (s !== "default" && Object.hasOwnProperty.call(e, s)) r(t, e, s);
        o(t, e);
        return t;
    };
    var n = C && C.__awaiter || function(e, t, r, o) {
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
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    t.findInPath = t.which = t.mkdirP = t.rmRF = t.mv = t.cp = void 0;
    const i = s(G["default"]);
    const a = s(v["default"]);
    const u = s(Ec);
    const c = O["default"].promisify(i.exec);
    const l = O["default"].promisify(i.execFile);
    function p(e, t, r = {}) {
        return n(this, void 0, void 0, (function*() {
            const {force: o, recursive: s, copySourceDirectory: n} = w(r);
            const i = (yield u.exists(t)) ? yield u.stat(t) : null;
            if (i && i.isFile() && !o) {
                return;
            }
            const c = i && i.isDirectory() && n ? a.join(t, a.basename(e)) : t;
            if (!(yield u.exists(e))) {
                throw new Error(`no such file or directory: ${e}`);
            }
            const l = yield u.stat(e);
            if (l.isDirectory()) {
                if (!s) {
                    throw new Error(`Failed to copy. ${e} is a directory, but tried to copy without recursive flag.`);
                } else {
                    yield y(e, c, 0, o);
                }
            } else {
                if (a.relative(e, c) === "") {
                    throw new Error(`'${c}' and '${e}' are the same file`);
                }
                yield T(e, c, o);
            }
        }));
    }
    t.cp = p;
    function d(e, t, r = {}) {
        return n(this, void 0, void 0, (function*() {
            if (yield u.exists(t)) {
                let o = true;
                if (yield u.isDirectory(t)) {
                    t = a.join(t, a.basename(e));
                    o = yield u.exists(t);
                }
                if (o) {
                    if (r.force == null || r.force) {
                        yield f(t);
                    } else {
                        throw new Error("Destination already exists");
                    }
                }
            }
            yield m(a.dirname(t));
            yield u.rename(e, t);
        }));
    }
    t.mv = d;
    function f(e) {
        return n(this, void 0, void 0, (function*() {
            if (u.IS_WINDOWS) {
                if (/[*"<>|]/.test(e)) {
                    throw new Error('File path must not contain `*`, `"`, `<`, `>` or `|` on Windows');
                }
                try {
                    const t = u.getCmdPath();
                    if (yield u.isDirectory(e, true)) {
                        yield c(`${t} /s /c "rd /s /q "%inputPath%""`, {
                            env: {
                                inputPath: e
                            }
                        });
                    } else {
                        yield c(`${t} /s /c "del /f /a "%inputPath%""`, {
                            env: {
                                inputPath: e
                            }
                        });
                    }
                } catch (e) {
                    if (e.code !== "ENOENT") throw e;
                }
                try {
                    yield u.unlink(e);
                } catch (e) {
                    if (e.code !== "ENOENT") throw e;
                }
            } else {
                let t = false;
                try {
                    t = yield u.isDirectory(e);
                } catch (e) {
                    if (e.code !== "ENOENT") throw e;
                    return;
                }
                if (t) {
                    yield l(`rm`, [ `-rf`, `${e}` ]);
                } else {
                    yield u.unlink(e);
                }
            }
        }));
    }
    t.rmRF = f;
    function m(e) {
        return n(this, void 0, void 0, (function*() {
            g["default"].ok(e, "a path argument must be provided");
            yield u.mkdir(e, {
                recursive: true
            });
        }));
    }
    t.mkdirP = m;
    function h(e, t) {
        return n(this, void 0, void 0, (function*() {
            if (!e) {
                throw new Error("parameter 'tool' is required");
            }
            if (t) {
                const t = yield h(e, false);
                if (!t) {
                    if (u.IS_WINDOWS) {
                        throw new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`);
                    } else {
                        throw new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`);
                    }
                }
                return t;
            }
            const r = yield b(e);
            if (r && r.length > 0) {
                return r[0];
            }
            return "";
        }));
    }
    t.which = h;
    function b(e) {
        return n(this, void 0, void 0, (function*() {
            if (!e) {
                throw new Error("parameter 'tool' is required");
            }
            const t = [];
            if (u.IS_WINDOWS && process.env["PATHEXT"]) {
                for (const e of process.env["PATHEXT"].split(a.delimiter)) {
                    if (e) {
                        t.push(e);
                    }
                }
            }
            if (u.isRooted(e)) {
                const r = yield u.tryGetExecutablePath(e, t);
                if (r) {
                    return [ r ];
                }
                return [];
            }
            if (e.includes(a.sep)) {
                return [];
            }
            const r = [];
            if (process.env.PATH) {
                for (const e of process.env.PATH.split(a.delimiter)) {
                    if (e) {
                        r.push(e);
                    }
                }
            }
            const o = [];
            for (const s of r) {
                const r = yield u.tryGetExecutablePath(a.join(s, e), t);
                if (r) {
                    o.push(r);
                }
            }
            return o;
        }));
    }
    t.findInPath = b;
    function w(e) {
        const t = e.force == null ? true : e.force;
        const r = Boolean(e.recursive);
        const o = e.copySourceDirectory == null ? true : Boolean(e.copySourceDirectory);
        return {
            force: t,
            recursive: r,
            copySourceDirectory: o
        };
    }
    function y(e, t, r, o) {
        return n(this, void 0, void 0, (function*() {
            if (r >= 255) return;
            r++;
            yield m(t);
            const s = yield u.readdir(e);
            for (const n of s) {
                const s = `${e}/${n}`;
                const i = `${t}/${n}`;
                const a = yield u.lstat(s);
                if (a.isDirectory()) {
                    yield y(s, i, r, o);
                } else {
                    yield T(s, i, o);
                }
            }
            yield u.chmod(t, (yield u.stat(e)).mode);
        }));
    }
    function T(e, t, r) {
        return n(this, void 0, void 0, (function*() {
            if ((yield u.lstat(e)).isSymbolicLink()) {
                try {
                    yield u.lstat(t);
                    yield u.unlink(t);
                } catch (e) {
                    if (e.code === "EPERM") {
                        yield u.chmod(t, "0666");
                        yield u.unlink(t);
                    }
                }
                const r = yield u.readlink(e);
                yield u.symlink(r, t, u.IS_WINDOWS ? "junction" : null);
            } else if (!(yield u.exists(t)) || r) {
                yield u.copyFile(e, t);
            }
        }));
    }
}));

var Oc = x((function(e, t) {
    var r = C && C.__createBinding || (Object.create ? function(e, t, r, o) {
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
    var o = C && C.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: true,
            value: t
        });
    } : function(e, t) {
        e["default"] = t;
    });
    var s = C && C.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) for (var s in e) if (s !== "default" && Object.hasOwnProperty.call(e, s)) r(t, e, s);
        o(t, e);
        return t;
    };
    var n = C && C.__awaiter || function(e, t, r, o) {
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
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    t.argStringToArray = t.ToolRunner = void 0;
    const i = s(b["default"]);
    const a = s(_["default"]);
    const u = s(G["default"]);
    const c = s(v["default"]);
    const l = s(_c);
    const p = s(Ec);
    const d = process.platform === "win32";
    class f extends a.EventEmitter {
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
            if (d) {
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
                let s = o.indexOf(i.EOL);
                while (s > -1) {
                    const e = o.substring(0, s);
                    r(e);
                    o = o.substring(s + i.EOL.length);
                    s = o.indexOf(i.EOL);
                }
                return o;
            } catch (e) {
                this._debug(`error processing line. Failed with error ${e}`);
                return "";
            }
        }
        _getSpawnFileName() {
            if (d) {
                if (this._isCmdFile()) {
                    return process.env["COMSPEC"] || "cmd.exe";
                }
            }
            return this.toolPath;
        }
        _getSpawnArgs(e) {
            if (d) {
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
            return n(this, void 0, void 0, (function*() {
                if (!p.isRooted(this.toolPath) && (this.toolPath.includes("/") || d && this.toolPath.includes("\\"))) {
                    this.toolPath = c.resolve(process.cwd(), this.options.cwd || process.cwd(), this.toolPath);
                }
                this.toolPath = yield l.which(this.toolPath, true);
                return new Promise(((e, t) => n(this, void 0, void 0, (function*() {
                    this._debug(`exec tool: ${this.toolPath}`);
                    this._debug("arguments:");
                    for (const e of this.args) {
                        this._debug(`   ${e}`);
                    }
                    const r = this._cloneExecOptions(this.options);
                    if (!r.silent && r.outStream) {
                        r.outStream.write(this._getCommandString(r) + i.EOL);
                    }
                    const o = new h(r, this.toolPath);
                    o.on("debug", (e => {
                        this._debug(e);
                    }));
                    if (this.options.cwd && !(yield p.exists(this.options.cwd))) {
                        return t(new Error(`The cwd: ${this.options.cwd} does not exist!`));
                    }
                    const s = this._getSpawnFileName();
                    const n = u.spawn(s, this._getSpawnArgs(r), this._getSpawnOptions(this.options, s));
                    let a = "";
                    if (n.stdout) {
                        n.stdout.on("data", (e => {
                            if (this.options.listeners && this.options.listeners.stdout) {
                                this.options.listeners.stdout(e);
                            }
                            if (!r.silent && r.outStream) {
                                r.outStream.write(e);
                            }
                            a = this._processLineBuffer(e, a, (e => {
                                if (this.options.listeners && this.options.listeners.stdline) {
                                    this.options.listeners.stdline(e);
                                }
                            }));
                        }));
                    }
                    let c = "";
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
                            c = this._processLineBuffer(e, c, (e => {
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
                        if (a.length > 0) {
                            this.emit("stdline", a);
                        }
                        if (c.length > 0) {
                            this.emit("errline", c);
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
                }))));
            }));
        }
    }
    t.ToolRunner = f;
    function m(e) {
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
    t.argStringToArray = m;
    class h extends a.EventEmitter {
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
                this.timeout = j["default"].setTimeout(h.HandleTimeout, this.delay, this);
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
}));

var Pc = x((function(e, t) {
    var r = C && C.__createBinding || (Object.create ? function(e, t, r, o) {
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
    var o = C && C.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: true,
            value: t
        });
    } : function(e, t) {
        e["default"] = t;
    });
    var s = C && C.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) for (var s in e) if (s !== "default" && Object.hasOwnProperty.call(e, s)) r(t, e, s);
        o(t, e);
        return t;
    };
    var n = C && C.__awaiter || function(e, t, r, o) {
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
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    t.getExecOutput = t.exec = void 0;
    const i = s(Oc);
    function a(e, t, r) {
        return n(this, void 0, void 0, (function*() {
            const o = i.argStringToArray(e);
            if (o.length === 0) {
                throw new Error(`Parameter 'commandLine' cannot be null or empty.`);
            }
            const s = o[0];
            t = o.slice(1).concat(t || []);
            const n = new i.ToolRunner(s, t, r);
            return n.exec();
        }));
    }
    t.exec = a;
    function u(e, t, r) {
        var o, s;
        return n(this, void 0, void 0, (function*() {
            let n = "";
            let i = "";
            const u = new A["default"].StringDecoder("utf8");
            const c = new A["default"].StringDecoder("utf8");
            const l = (o = r === null || r === void 0 ? void 0 : r.listeners) === null || o === void 0 ? void 0 : o.stdout;
            const p = (s = r === null || r === void 0 ? void 0 : r.listeners) === null || s === void 0 ? void 0 : s.stderr;
            const d = e => {
                i += c.write(e);
                if (p) {
                    p(e);
                }
            };
            const f = e => {
                n += u.write(e);
                if (l) {
                    l(e);
                }
            };
            const m = Object.assign(Object.assign({}, r === null || r === void 0 ? void 0 : r.listeners), {
                stdout: f,
                stderr: d
            });
            const h = yield a(e, t, Object.assign(Object.assign({}, r), {
                listeners: m
            }));
            n += u.end();
            i += c.end();
            return {
                exitCode: h,
                stdout: n,
                stderr: i
            };
        }));
    }
    t.getExecOutput = u;
}));

async function kc(e, t) {
    let r = "";
    let o = "";
    const s = Date.now();
    const n = await Pc.exec(e, null, {
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

async function Sc(e) {
    try {
        await kc(`git fetch origin ${e} --depth=1`);
    } catch (t) {
        throw new Error(`Failed to git fetch ${e} ${t.message}`);
    }
    const {exitCode: t} = await kc(`git diff --quiet origin/${e}`, {
        ignoreReturnCode: true
    });
    return t !== 0;
}

async function Ac({cwd: e} = {}) {
    if (w["default"].existsSync("node_modules")) {
        $.info("Cleaning node_modules");
        await _c.rmRF(v["default"].join(e, "node_modules"));
    }
    const t = {
        cwd: e,
        ignoreReturnCode: true
    };
    let r = "";
    if (w["default"].existsSync("package-lock.json")) {
        $.info("Installing dependencies with npm");
        r = "npm ci";
    } else if (w["default"].existsSync("yarn.lock")) {
        $.info("Installing dependencies with yarn");
        r = "yarn install --frozen-lockfile";
    } else if (w["default"].existsSync("pnpm-lock.yaml")) {
        $.info("Installing dependencies with pnpm");
        r = "npx pnpm i --frozen-lockfile";
    } else {
        $.info("No lock file detected. Installing dependencies with npm");
        r = "npm i";
    }
    const {exitCode: o, stdout: s, stderr: n} = await kc(r, t);
    if (o > 0) {
        throw new Error(`${n}\n${s}`);
    }
}

async function Gc(e) {
    const {exitCode: t} = await kc(`git ls-files --error-unmatch ${e}`, {
        ignoreReturnCode: true
    });
    return t === 0;
}

let jc = false;

async function Cc({checkoutRef: e, refData: t, buildCommand: r}) {
    const o = process.cwd();
    $.info(`Current working directory: ${o}`);
    if (e) {
        $.info(`Checking out ref '${e}'`);
        await kc(`git checkout -f ${e}`);
    }
    if (r !== "false") {
        if (!r) {
            let e;
            try {
                e = JSON.parse(w["default"].readFileSync("./package.json"));
            } catch (e) {
                $.warning("Error reading package.json", e);
            }
            if (e && e.scripts && e.scripts.build) {
                $.info("Build script found in package.json");
                r = "npm run build";
            }
        }
        if (r) {
            await Ac({
                cwd: o
            }).catch((e => {
                throw new Error(`Failed to install dependencies:\n${e.message}`);
            }));
            $.info(`Running build command: ${r}`);
            const e = Date.now();
            await kc(r, {
                cwd: o
            }).catch((e => {
                throw new Error(`Failed to run build command: ${r}\n${e.message}`);
            }));
            $.info(`Build completed in ${(Date.now() - e) / 1e3}s`);
        }
    }
    if (!jc) {
        $.info("Installing pkg-size globally");
        await kc("npm i -g pkg-size");
        jc = true;
    }
    $.info("Getting package size");
    const s = await kc("pkg-size --json", {
        cwd: o
    }).catch((e => {
        throw new Error(`Failed to determine package size: ${e.message}`);
    }));
    $.debug(JSON.stringify(s, null, 4));
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
        const r = await Gc(e.path);
        e.isTracked = r;
        e.label = r ? $r(Dr(e.path), `${t.repo.html_url}/blob/${t.ref}/${e.path}`) : Dr(e.path);
    })));
    $.info("Cleaning up");
    await kc("git reset --hard");
    const {stdout: i} = await kc("git clean -dfx");
    $.debug(i);
    return n;
}

async function Rc({pr: e, buildCommand: t, commentReport: r, mode: o, unchangedFiles: s, hideFiles: n, sortBy: i, sortOrder: a, displaySize: u}) {
    $.startGroup("Build HEAD");
    const c = await Cc({
        refData: e.head,
        buildCommand: t
    });
    $.setOutput("headPkgData", c);
    $.endGroup();
    if (o === "head-only") {
        if (r !== "false") {
            return Tc({
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
    if (await Sc(l)) {
        $.info("HEAD is different from BASE. Triggering build.");
        $.startGroup("Build BASE");
        p = await Cc({
            checkoutRef: l,
            refData: e.base,
            buildCommand: t
        });
        $.endGroup();
    } else {
        $.info("HEAD is identical to BASE. Skipping base build.");
        p = {
            ...c,
            ref: e.base
        };
    }
    $.setOutput("basePkgData", p);
    if (r !== "false") {
        return yc({
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

const xc = qr("🤖 This report was automatically generated by [pkg-size-action](https://github.com/pkg-size/action/)");

(async () => {
    const {GITHUB_TOKEN: e} = process.env;
    g["default"](e, 'Environment variable "GITHUB_TOKEN" not set. Required for accessing and reporting on the PR.');
    const {pull_request: t} = Ur.context.payload;
    const r = await Rc({
        pr: t,
        buildCommand: $.getInput("build-command"),
        commentReport: $.getInput("comment-report"),
        mode: $.getInput("mode") || "regression",
        unchangedFiles: $.getInput("unchanged-files") || "collapse",
        hideFiles: $.getInput("hide-files"),
        sortBy: $.getInput("sort-by") || "delta",
        sortOrder: $.getInput("sort-order") || "desc",
        displaySize: $.getInput("display-size") || "uncompressed"
    });
    await kc(`git checkout -f ${Ur.context.sha}`);
    if (r) {
        await Ir({
            token: e,
            commentSignature: xc,
            repo: Ur.context.repo,
            prNumber: t.number,
            body: r
        });
    }
})().catch((e => {
    $.setFailed(e.message);
    $.warning(e.stack);
}));
