"use strict";
var B = Object.getOwnPropertySymbols;
var q = Object.prototype.hasOwnProperty, z = Object.prototype.propertyIsEnumerable;
var x = (e, t) => {
  var r = {};
  for (var n in e)
    q.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && B)
    for (var n of B(e))
      t.indexOf(n) < 0 && z.call(e, n) && (r[n] = e[n]);
  return r;
};
var assert_1 = require("assert"), require$$0 = require("os"), fs = require("fs"), require$$1 = require("path"), http = require("http"), https = require("https");
require("net");
var tls = require("tls"), events = require("events"), util_1 = require("util"), Stream = require("stream"), Url = require("url"), zlib = require("zlib"), string_decoder_1 = require("string_decoder"), require$$0$1 = require("child_process"), timers_1 = require("timers");
function _interopDefaultLegacy(e) {
  return e && typeof e == "object" && "default" in e ? e : { default: e };
}
var assert_1__default = /* @__PURE__ */ _interopDefaultLegacy(assert_1), require$$0__default = /* @__PURE__ */ _interopDefaultLegacy(require$$0), fs__default = /* @__PURE__ */ _interopDefaultLegacy(fs), require$$1__default = /* @__PURE__ */ _interopDefaultLegacy(require$$1), http__default = /* @__PURE__ */ _interopDefaultLegacy(http), https__default = /* @__PURE__ */ _interopDefaultLegacy(https), tls__default = /* @__PURE__ */ _interopDefaultLegacy(tls), events__default = /* @__PURE__ */ _interopDefaultLegacy(events), util_1__default = /* @__PURE__ */ _interopDefaultLegacy(util_1), Stream__default = /* @__PURE__ */ _interopDefaultLegacy(Stream), Url__default = /* @__PURE__ */ _interopDefaultLegacy(Url), zlib__default = /* @__PURE__ */ _interopDefaultLegacy(zlib), string_decoder_1__default = /* @__PURE__ */ _interopDefaultLegacy(string_decoder_1), require$$0__default$1 = /* @__PURE__ */ _interopDefaultLegacy(require$$0$1), timers_1__default = /* @__PURE__ */ _interopDefaultLegacy(timers_1), commonjsGlobal = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function getAugmentedNamespace(e) {
  if (e.__esModule)
    return e;
  var t = Object.defineProperty({}, "__esModule", { value: !0 });
  return Object.keys(e).forEach(function(r) {
    var n = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(t, r, n.get ? n : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), t;
}
function createCommonjsModule(e) {
  var t = { exports: {} };
  return e(t, t.exports), t.exports;
}
var utils$2 = createCommonjsModule(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.toCommandValue = void 0;
  function r(n) {
    return n == null ? "" : typeof n == "string" || n instanceof String ? n : JSON.stringify(n);
  }
  t.toCommandValue = r;
}), command = createCommonjsModule(function(e, t) {
  var r = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(T, _, E, P) {
    P === void 0 && (P = E), Object.defineProperty(T, P, { enumerable: !0, get: function() {
      return _[E];
    } });
  } : function(T, _, E, P) {
    P === void 0 && (P = E), T[P] = _[E];
  }), n = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(T, _) {
    Object.defineProperty(T, "default", { enumerable: !0, value: _ });
  } : function(T, _) {
    T.default = _;
  }), s = commonjsGlobal && commonjsGlobal.__importStar || function(T) {
    if (T && T.__esModule)
      return T;
    var _ = {};
    if (T != null)
      for (var E in T)
        E !== "default" && Object.hasOwnProperty.call(T, E) && r(_, T, E);
    return n(_, T), _;
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.issue = t.issueCommand = void 0;
  const o = s(require$$0__default.default);
  function a(T, _, E) {
    const P = new f(T, _, E);
    process.stdout.write(P.toString() + o.EOL);
  }
  t.issueCommand = a;
  function i(T, _ = "") {
    a(T, {}, _);
  }
  t.issue = i;
  const u = "::";
  class f {
    constructor(_, E, P) {
      _ || (_ = "missing.command"), this.command = _, this.properties = E, this.message = P;
    }
    toString() {
      let _ = u + this.command;
      if (this.properties && Object.keys(this.properties).length > 0) {
        _ += " ";
        let E = !0;
        for (const P in this.properties)
          if (this.properties.hasOwnProperty(P)) {
            const p = this.properties[P];
            p && (E ? E = !1 : _ += ",", _ += `${P}=${h(p)}`);
          }
      }
      return _ += `${u}${w(this.message)}`, _;
    }
  }
  function w(T) {
    return utils$2.toCommandValue(T).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A");
  }
  function h(T) {
    return utils$2.toCommandValue(T).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A").replace(/:/g, "%3A").replace(/,/g, "%2C");
  }
}), fileCommand = createCommonjsModule(function(e, t) {
  var r = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(u, f, w, h) {
    h === void 0 && (h = w), Object.defineProperty(u, h, { enumerable: !0, get: function() {
      return f[w];
    } });
  } : function(u, f, w, h) {
    h === void 0 && (h = w), u[h] = f[w];
  }), n = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(u, f) {
    Object.defineProperty(u, "default", { enumerable: !0, value: f });
  } : function(u, f) {
    u.default = f;
  }), s = commonjsGlobal && commonjsGlobal.__importStar || function(u) {
    if (u && u.__esModule)
      return u;
    var f = {};
    if (u != null)
      for (var w in u)
        w !== "default" && Object.hasOwnProperty.call(u, w) && r(f, u, w);
    return n(f, u), f;
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.issueCommand = void 0;
  const o = s(fs__default.default), a = s(require$$0__default.default);
  function i(u, f) {
    const w = process.env[`GITHUB_${u}`];
    if (!w)
      throw new Error(`Unable to find environment variable for file command ${u}`);
    if (!o.existsSync(w))
      throw new Error(`Missing file at path: ${w}`);
    o.appendFileSync(w, `${utils$2.toCommandValue(f)}${a.EOL}`, {
      encoding: "utf8"
    });
  }
  t.issueCommand = i;
}), core = createCommonjsModule(function(e, t) {
  var r = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(O, R, C, D) {
    D === void 0 && (D = C), Object.defineProperty(O, D, { enumerable: !0, get: function() {
      return R[C];
    } });
  } : function(O, R, C, D) {
    D === void 0 && (D = C), O[D] = R[C];
  }), n = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(O, R) {
    Object.defineProperty(O, "default", { enumerable: !0, value: R });
  } : function(O, R) {
    O.default = R;
  }), s = commonjsGlobal && commonjsGlobal.__importStar || function(O) {
    if (O && O.__esModule)
      return O;
    var R = {};
    if (O != null)
      for (var C in O)
        C !== "default" && Object.hasOwnProperty.call(O, C) && r(R, O, C);
    return n(R, O), R;
  }, o = commonjsGlobal && commonjsGlobal.__awaiter || function(O, R, C, D) {
    function k(j) {
      return j instanceof C ? j : new C(function(F) {
        F(j);
      });
    }
    return new (C || (C = Promise))(function(j, F) {
      function M(U) {
        try {
          I(D.next(U));
        } catch (L) {
          F(L);
        }
      }
      function N(U) {
        try {
          I(D.throw(U));
        } catch (L) {
          F(L);
        }
      }
      function I(U) {
        U.done ? j(U.value) : k(U.value).then(M, N);
      }
      I((D = D.apply(O, R || [])).next());
    });
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.getState = t.saveState = t.group = t.endGroup = t.startGroup = t.info = t.warning = t.error = t.debug = t.isDebug = t.setFailed = t.setCommandEcho = t.setOutput = t.getBooleanInput = t.getMultilineInput = t.getInput = t.addPath = t.setSecret = t.exportVariable = t.ExitCode = void 0;
  const a = s(require$$0__default.default), i = s(require$$1__default.default);
  var u;
  (function(O) {
    O[O.Success = 0] = "Success", O[O.Failure = 1] = "Failure";
  })(u = t.ExitCode || (t.ExitCode = {}));
  function f(O, R) {
    const C = utils$2.toCommandValue(R);
    if (process.env[O] = C, process.env.GITHUB_ENV || "") {
      const k = "_GitHubActionsFileCommandDelimeter_", j = `${O}<<${k}${a.EOL}${C}${a.EOL}${k}`;
      fileCommand.issueCommand("ENV", j);
    } else
      command.issueCommand("set-env", { name: O }, C);
  }
  t.exportVariable = f;
  function w(O) {
    command.issueCommand("add-mask", {}, O);
  }
  t.setSecret = w;
  function h(O) {
    process.env.GITHUB_PATH || "" ? fileCommand.issueCommand("PATH", O) : command.issueCommand("add-path", {}, O), process.env.PATH = `${O}${i.delimiter}${process.env.PATH}`;
  }
  t.addPath = h;
  function T(O, R) {
    const C = process.env[`INPUT_${O.replace(/ /g, "_").toUpperCase()}`] || "";
    if (R && R.required && !C)
      throw new Error(`Input required and not supplied: ${O}`);
    return R && R.trimWhitespace === !1 ? C : C.trim();
  }
  t.getInput = T;
  function _(O, R) {
    return T(O, R).split(`
`).filter((D) => D !== "");
  }
  t.getMultilineInput = _;
  function E(O, R) {
    const C = ["true", "True", "TRUE"], D = ["false", "False", "FALSE"], k = T(O, R);
    if (C.includes(k))
      return !0;
    if (D.includes(k))
      return !1;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${O}
Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
  }
  t.getBooleanInput = E;
  function P(O, R) {
    process.stdout.write(a.EOL), command.issueCommand("set-output", { name: O }, R);
  }
  t.setOutput = P;
  function p(O) {
    command.issue("echo", O ? "on" : "off");
  }
  t.setCommandEcho = p;
  function l(O) {
    process.exitCode = u.Failure, d(O);
  }
  t.setFailed = l;
  function g() {
    return process.env.RUNNER_DEBUG === "1";
  }
  t.isDebug = g;
  function m(O) {
    command.issueCommand("debug", {}, O);
  }
  t.debug = m;
  function d(O) {
    command.issue("error", O instanceof Error ? O.toString() : O);
  }
  t.error = d;
  function b(O) {
    command.issue("warning", O instanceof Error ? O.toString() : O);
  }
  t.warning = b;
  function y(O) {
    process.stdout.write(O + a.EOL);
  }
  t.info = y;
  function v(O) {
    command.issue("group", O);
  }
  t.startGroup = v;
  function A() {
    command.issue("endgroup");
  }
  t.endGroup = A;
  function S(O, R) {
    return o(this, void 0, void 0, function* () {
      v(O);
      let C;
      try {
        C = yield R();
      } finally {
        A();
      }
      return C;
    });
  }
  t.group = S;
  function G(O, R) {
    command.issueCommand("save-state", { name: O }, R);
  }
  t.saveState = G;
  function $(O) {
    return process.env[`STATE_${O}`] || "";
  }
  t.getState = $;
}), context = createCommonjsModule(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Context = void 0;
  class r {
    constructor() {
      if (this.payload = {}, process.env.GITHUB_EVENT_PATH)
        if (fs__default.default.existsSync(process.env.GITHUB_EVENT_PATH))
          this.payload = JSON.parse(fs__default.default.readFileSync(process.env.GITHUB_EVENT_PATH, { encoding: "utf8" }));
        else {
          const s = process.env.GITHUB_EVENT_PATH;
          process.stdout.write(`GITHUB_EVENT_PATH ${s} does not exist${require$$0__default.default.EOL}`);
        }
      this.eventName = process.env.GITHUB_EVENT_NAME, this.sha = process.env.GITHUB_SHA, this.ref = process.env.GITHUB_REF, this.workflow = process.env.GITHUB_WORKFLOW, this.action = process.env.GITHUB_ACTION, this.actor = process.env.GITHUB_ACTOR, this.job = process.env.GITHUB_JOB, this.runNumber = parseInt(process.env.GITHUB_RUN_NUMBER, 10), this.runId = parseInt(process.env.GITHUB_RUN_ID, 10);
    }
    get issue() {
      const s = this.payload;
      return Object.assign(Object.assign({}, this.repo), { number: (s.issue || s.pull_request || s).number });
    }
    get repo() {
      if (process.env.GITHUB_REPOSITORY) {
        const [s, o] = process.env.GITHUB_REPOSITORY.split("/");
        return { owner: s, repo: o };
      }
      if (this.payload.repository)
        return {
          owner: this.payload.repository.owner.login,
          repo: this.payload.repository.name
        };
      throw new Error("context.repo requires a GITHUB_REPOSITORY environment variable like 'owner/repo'");
    }
  }
  t.Context = r;
});
function getProxyUrl(e) {
  let t = e.protocol === "https:", r;
  if (checkBypass(e))
    return r;
  let n;
  return t ? n = process.env.https_proxy || process.env.HTTPS_PROXY : n = process.env.http_proxy || process.env.HTTP_PROXY, n && (r = new URL(n)), r;
}
var getProxyUrl_1 = getProxyUrl;
function checkBypass(e) {
  if (!e.hostname)
    return !1;
  let t = process.env.no_proxy || process.env.NO_PROXY || "";
  if (!t)
    return !1;
  let r;
  e.port ? r = Number(e.port) : e.protocol === "http:" ? r = 80 : e.protocol === "https:" && (r = 443);
  let n = [e.hostname.toUpperCase()];
  typeof r == "number" && n.push(`${n[0]}:${r}`);
  for (let s of t.split(",").map((o) => o.trim().toUpperCase()).filter((o) => o))
    if (n.some((o) => o === s))
      return !0;
  return !1;
}
var checkBypass_1 = checkBypass, proxy = /* @__PURE__ */ Object.defineProperty({
  getProxyUrl: getProxyUrl_1,
  checkBypass: checkBypass_1
}, "__esModule", { value: !0 }), httpOverHttp_1 = httpOverHttp, httpsOverHttp_1 = httpsOverHttp, httpOverHttps_1 = httpOverHttps, httpsOverHttps_1 = httpsOverHttps;
function httpOverHttp(e) {
  var t = new TunnelingAgent(e);
  return t.request = http__default.default.request, t;
}
function httpsOverHttp(e) {
  var t = new TunnelingAgent(e);
  return t.request = http__default.default.request, t.createSocket = createSecureSocket, t.defaultPort = 443, t;
}
function httpOverHttps(e) {
  var t = new TunnelingAgent(e);
  return t.request = https__default.default.request, t;
}
function httpsOverHttps(e) {
  var t = new TunnelingAgent(e);
  return t.request = https__default.default.request, t.createSocket = createSecureSocket, t.defaultPort = 443, t;
}
function TunnelingAgent(e) {
  var t = this;
  t.options = e || {}, t.proxyOptions = t.options.proxy || {}, t.maxSockets = t.options.maxSockets || http__default.default.Agent.defaultMaxSockets, t.requests = [], t.sockets = [], t.on("free", function(n, s, o, a) {
    for (var i = toOptions(s, o, a), u = 0, f = t.requests.length; u < f; ++u) {
      var w = t.requests[u];
      if (w.host === i.host && w.port === i.port) {
        t.requests.splice(u, 1), w.request.onSocket(n);
        return;
      }
    }
    n.destroy(), t.removeSocket(n);
  });
}
util_1__default.default.inherits(TunnelingAgent, events__default.default.EventEmitter), TunnelingAgent.prototype.addRequest = function(t, r, n, s) {
  var o = this, a = mergeOptions({ request: t }, o.options, toOptions(r, n, s));
  if (o.sockets.length >= this.maxSockets) {
    o.requests.push(a);
    return;
  }
  o.createSocket(a, function(i) {
    i.on("free", u), i.on("close", f), i.on("agentRemove", f), t.onSocket(i);
    function u() {
      o.emit("free", i, a);
    }
    function f(w) {
      o.removeSocket(i), i.removeListener("free", u), i.removeListener("close", f), i.removeListener("agentRemove", f);
    }
  });
}, TunnelingAgent.prototype.createSocket = function(t, r) {
  var n = this, s = {};
  n.sockets.push(s);
  var o = mergeOptions({}, n.proxyOptions, {
    method: "CONNECT",
    path: t.host + ":" + t.port,
    agent: !1,
    headers: {
      host: t.host + ":" + t.port
    }
  });
  t.localAddress && (o.localAddress = t.localAddress), o.proxyAuth && (o.headers = o.headers || {}, o.headers["Proxy-Authorization"] = "Basic " + new Buffer(o.proxyAuth).toString("base64")), debug("making CONNECT request");
  var a = n.request(o);
  a.useChunkedEncodingByDefault = !1, a.once("response", i), a.once("upgrade", u), a.once("connect", f), a.once("error", w), a.end();
  function i(h) {
    h.upgrade = !0;
  }
  function u(h, T, _) {
    process.nextTick(function() {
      f(h, T, _);
    });
  }
  function f(h, T, _) {
    if (a.removeAllListeners(), T.removeAllListeners(), h.statusCode !== 200) {
      debug("tunneling socket could not be established, statusCode=%d", h.statusCode), T.destroy();
      var E = new Error("tunneling socket could not be established, statusCode=" + h.statusCode);
      E.code = "ECONNRESET", t.request.emit("error", E), n.removeSocket(s);
      return;
    }
    if (_.length > 0) {
      debug("got illegal response body from proxy"), T.destroy();
      var E = new Error("got illegal response body from proxy");
      E.code = "ECONNRESET", t.request.emit("error", E), n.removeSocket(s);
      return;
    }
    return debug("tunneling connection has established"), n.sockets[n.sockets.indexOf(s)] = T, r(T);
  }
  function w(h) {
    a.removeAllListeners(), debug(`tunneling socket could not be established, cause=%s
`, h.message, h.stack);
    var T = new Error("tunneling socket could not be established, cause=" + h.message);
    T.code = "ECONNRESET", t.request.emit("error", T), n.removeSocket(s);
  }
}, TunnelingAgent.prototype.removeSocket = function(t) {
  var r = this.sockets.indexOf(t);
  if (r !== -1) {
    this.sockets.splice(r, 1);
    var n = this.requests.shift();
    n && this.createSocket(n, function(s) {
      n.request.onSocket(s);
    });
  }
};
function createSecureSocket(e, t) {
  var r = this;
  TunnelingAgent.prototype.createSocket.call(r, e, function(n) {
    var s = e.request.getHeader("host"), o = mergeOptions({}, r.options, {
      socket: n,
      servername: s ? s.replace(/:.*$/, "") : e.host
    }), a = tls__default.default.connect(0, o);
    r.sockets[r.sockets.indexOf(n)] = a, t(a);
  });
}
function toOptions(e, t, r) {
  return typeof e == "string" ? {
    host: e,
    port: t,
    localAddress: r
  } : e;
}
function mergeOptions(e) {
  for (var t = 1, r = arguments.length; t < r; ++t) {
    var n = arguments[t];
    if (typeof n == "object")
      for (var s = Object.keys(n), o = 0, a = s.length; o < a; ++o) {
        var i = s[o];
        n[i] !== void 0 && (e[i] = n[i]);
      }
  }
  return e;
}
var debug;
process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG) ? debug = function() {
  var e = Array.prototype.slice.call(arguments);
  typeof e[0] == "string" ? e[0] = "TUNNEL: " + e[0] : e.unshift("TUNNEL:"), console.error.apply(console, e);
} : debug = function() {
};
var debug_1 = debug, tunnel$1 = {
  httpOverHttp: httpOverHttp_1,
  httpsOverHttp: httpsOverHttp_1,
  httpOverHttps: httpOverHttps_1,
  httpsOverHttps: httpsOverHttps_1,
  debug: debug_1
}, tunnel = tunnel$1, httpClient = createCommonjsModule(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  let r;
  var n;
  (function(p) {
    p[p.OK = 200] = "OK", p[p.MultipleChoices = 300] = "MultipleChoices", p[p.MovedPermanently = 301] = "MovedPermanently", p[p.ResourceMoved = 302] = "ResourceMoved", p[p.SeeOther = 303] = "SeeOther", p[p.NotModified = 304] = "NotModified", p[p.UseProxy = 305] = "UseProxy", p[p.SwitchProxy = 306] = "SwitchProxy", p[p.TemporaryRedirect = 307] = "TemporaryRedirect", p[p.PermanentRedirect = 308] = "PermanentRedirect", p[p.BadRequest = 400] = "BadRequest", p[p.Unauthorized = 401] = "Unauthorized", p[p.PaymentRequired = 402] = "PaymentRequired", p[p.Forbidden = 403] = "Forbidden", p[p.NotFound = 404] = "NotFound", p[p.MethodNotAllowed = 405] = "MethodNotAllowed", p[p.NotAcceptable = 406] = "NotAcceptable", p[p.ProxyAuthenticationRequired = 407] = "ProxyAuthenticationRequired", p[p.RequestTimeout = 408] = "RequestTimeout", p[p.Conflict = 409] = "Conflict", p[p.Gone = 410] = "Gone", p[p.TooManyRequests = 429] = "TooManyRequests", p[p.InternalServerError = 500] = "InternalServerError", p[p.NotImplemented = 501] = "NotImplemented", p[p.BadGateway = 502] = "BadGateway", p[p.ServiceUnavailable = 503] = "ServiceUnavailable", p[p.GatewayTimeout = 504] = "GatewayTimeout";
  })(n = t.HttpCodes || (t.HttpCodes = {}));
  var s;
  (function(p) {
    p.Accept = "accept", p.ContentType = "content-type";
  })(s = t.Headers || (t.Headers = {}));
  var o;
  (function(p) {
    p.ApplicationJson = "application/json";
  })(o = t.MediaTypes || (t.MediaTypes = {}));
  function a(p) {
    let l = proxy.getProxyUrl(new URL(p));
    return l ? l.href : "";
  }
  t.getProxyUrl = a;
  const i = [
    n.MovedPermanently,
    n.ResourceMoved,
    n.SeeOther,
    n.TemporaryRedirect,
    n.PermanentRedirect
  ], u = [
    n.BadGateway,
    n.ServiceUnavailable,
    n.GatewayTimeout
  ], f = ["OPTIONS", "GET", "DELETE", "HEAD"], w = 10, h = 5;
  class T extends Error {
    constructor(l, g) {
      super(l);
      this.name = "HttpClientError", this.statusCode = g, Object.setPrototypeOf(this, T.prototype);
    }
  }
  t.HttpClientError = T;
  class _ {
    constructor(l) {
      this.message = l;
    }
    readBody() {
      return new Promise(async (l, g) => {
        let m = Buffer.alloc(0);
        this.message.on("data", (d) => {
          m = Buffer.concat([m, d]);
        }), this.message.on("end", () => {
          l(m.toString());
        });
      });
    }
  }
  t.HttpClientResponse = _;
  function E(p) {
    return new URL(p).protocol === "https:";
  }
  t.isHttps = E;
  class P {
    constructor(l, g, m) {
      this._ignoreSslError = !1, this._allowRedirects = !0, this._allowRedirectDowngrade = !1, this._maxRedirects = 50, this._allowRetries = !1, this._maxRetries = 1, this._keepAlive = !1, this._disposed = !1, this.userAgent = l, this.handlers = g || [], this.requestOptions = m, m && (m.ignoreSslError != null && (this._ignoreSslError = m.ignoreSslError), this._socketTimeout = m.socketTimeout, m.allowRedirects != null && (this._allowRedirects = m.allowRedirects), m.allowRedirectDowngrade != null && (this._allowRedirectDowngrade = m.allowRedirectDowngrade), m.maxRedirects != null && (this._maxRedirects = Math.max(m.maxRedirects, 0)), m.keepAlive != null && (this._keepAlive = m.keepAlive), m.allowRetries != null && (this._allowRetries = m.allowRetries), m.maxRetries != null && (this._maxRetries = m.maxRetries));
    }
    options(l, g) {
      return this.request("OPTIONS", l, null, g || {});
    }
    get(l, g) {
      return this.request("GET", l, null, g || {});
    }
    del(l, g) {
      return this.request("DELETE", l, null, g || {});
    }
    post(l, g, m) {
      return this.request("POST", l, g, m || {});
    }
    patch(l, g, m) {
      return this.request("PATCH", l, g, m || {});
    }
    put(l, g, m) {
      return this.request("PUT", l, g, m || {});
    }
    head(l, g) {
      return this.request("HEAD", l, null, g || {});
    }
    sendStream(l, g, m, d) {
      return this.request(l, g, m, d);
    }
    async getJson(l, g = {}) {
      g[s.Accept] = this._getExistingOrDefaultHeader(g, s.Accept, o.ApplicationJson);
      let m = await this.get(l, g);
      return this._processResponse(m, this.requestOptions);
    }
    async postJson(l, g, m = {}) {
      let d = JSON.stringify(g, null, 2);
      m[s.Accept] = this._getExistingOrDefaultHeader(m, s.Accept, o.ApplicationJson), m[s.ContentType] = this._getExistingOrDefaultHeader(m, s.ContentType, o.ApplicationJson);
      let b = await this.post(l, d, m);
      return this._processResponse(b, this.requestOptions);
    }
    async putJson(l, g, m = {}) {
      let d = JSON.stringify(g, null, 2);
      m[s.Accept] = this._getExistingOrDefaultHeader(m, s.Accept, o.ApplicationJson), m[s.ContentType] = this._getExistingOrDefaultHeader(m, s.ContentType, o.ApplicationJson);
      let b = await this.put(l, d, m);
      return this._processResponse(b, this.requestOptions);
    }
    async patchJson(l, g, m = {}) {
      let d = JSON.stringify(g, null, 2);
      m[s.Accept] = this._getExistingOrDefaultHeader(m, s.Accept, o.ApplicationJson), m[s.ContentType] = this._getExistingOrDefaultHeader(m, s.ContentType, o.ApplicationJson);
      let b = await this.patch(l, d, m);
      return this._processResponse(b, this.requestOptions);
    }
    async request(l, g, m, d) {
      if (this._disposed)
        throw new Error("Client has already been disposed.");
      let b = new URL(g), y = this._prepareRequest(l, b, d), v = this._allowRetries && f.indexOf(l) != -1 ? this._maxRetries + 1 : 1, A = 0, S;
      for (; A < v; ) {
        if (S = await this.requestRaw(y, m), S && S.message && S.message.statusCode === n.Unauthorized) {
          let $;
          for (let O = 0; O < this.handlers.length; O++)
            if (this.handlers[O].canHandleAuthentication(S)) {
              $ = this.handlers[O];
              break;
            }
          return $ ? $.handleAuthentication(this, y, m) : S;
        }
        let G = this._maxRedirects;
        for (; i.indexOf(S.message.statusCode) != -1 && this._allowRedirects && G > 0; ) {
          const $ = S.message.headers.location;
          if (!$)
            break;
          let O = new URL($);
          if (b.protocol == "https:" && b.protocol != O.protocol && !this._allowRedirectDowngrade)
            throw new Error("Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.");
          if (await S.readBody(), O.hostname !== b.hostname)
            for (let R in d)
              R.toLowerCase() === "authorization" && delete d[R];
          y = this._prepareRequest(l, O, d), S = await this.requestRaw(y, m), G--;
        }
        if (u.indexOf(S.message.statusCode) == -1)
          return S;
        A += 1, A < v && (await S.readBody(), await this._performExponentialBackoff(A));
      }
      return S;
    }
    dispose() {
      this._agent && this._agent.destroy(), this._disposed = !0;
    }
    requestRaw(l, g) {
      return new Promise((m, d) => {
        let b = function(y, v) {
          y && d(y), m(v);
        };
        this.requestRawWithCallback(l, g, b);
      });
    }
    requestRawWithCallback(l, g, m) {
      let d;
      typeof g == "string" && (l.options.headers["Content-Length"] = Buffer.byteLength(g, "utf8"));
      let b = !1, y = (A, S) => {
        b || (b = !0, m(A, S));
      }, v = l.httpModule.request(l.options, (A) => {
        let S = new _(A);
        y(null, S);
      });
      v.on("socket", (A) => {
        d = A;
      }), v.setTimeout(this._socketTimeout || 3 * 6e4, () => {
        d && d.end(), y(new Error("Request timeout: " + l.options.path), null);
      }), v.on("error", function(A) {
        y(A, null);
      }), g && typeof g == "string" && v.write(g, "utf8"), g && typeof g != "string" ? (g.on("close", function() {
        v.end();
      }), g.pipe(v)) : v.end();
    }
    getAgent(l) {
      let g = new URL(l);
      return this._getAgent(g);
    }
    _prepareRequest(l, g, m) {
      const d = {};
      d.parsedUrl = g;
      const b = d.parsedUrl.protocol === "https:";
      d.httpModule = b ? https__default.default : http__default.default;
      const y = b ? 443 : 80;
      return d.options = {}, d.options.host = d.parsedUrl.hostname, d.options.port = d.parsedUrl.port ? parseInt(d.parsedUrl.port) : y, d.options.path = (d.parsedUrl.pathname || "") + (d.parsedUrl.search || ""), d.options.method = l, d.options.headers = this._mergeHeaders(m), this.userAgent != null && (d.options.headers["user-agent"] = this.userAgent), d.options.agent = this._getAgent(d.parsedUrl), this.handlers && this.handlers.forEach((v) => {
        v.prepareRequest(d.options);
      }), d;
    }
    _mergeHeaders(l) {
      const g = (m) => Object.keys(m).reduce((d, b) => (d[b.toLowerCase()] = m[b], d), {});
      return this.requestOptions && this.requestOptions.headers ? Object.assign({}, g(this.requestOptions.headers), g(l)) : g(l || {});
    }
    _getExistingOrDefaultHeader(l, g, m) {
      const d = (y) => Object.keys(y).reduce((v, A) => (v[A.toLowerCase()] = y[A], v), {});
      let b;
      return this.requestOptions && this.requestOptions.headers && (b = d(this.requestOptions.headers)[g]), l[g] || b || m;
    }
    _getAgent(l) {
      let g, m = proxy.getProxyUrl(l), d = m && m.hostname;
      if (this._keepAlive && d && (g = this._proxyAgent), this._keepAlive && !d && (g = this._agent), g)
        return g;
      const b = l.protocol === "https:";
      let y = 100;
      if (this.requestOptions && (y = this.requestOptions.maxSockets || http__default.default.globalAgent.maxSockets), d) {
        r || (r = tunnel);
        const v = {
          maxSockets: y,
          keepAlive: this._keepAlive,
          proxy: {
            proxyAuth: `${m.username}:${m.password}`,
            host: m.hostname,
            port: m.port
          }
        };
        let A;
        const S = m.protocol === "https:";
        b ? A = S ? r.httpsOverHttps : r.httpsOverHttp : A = S ? r.httpOverHttps : r.httpOverHttp, g = A(v), this._proxyAgent = g;
      }
      if (this._keepAlive && !g) {
        const v = { keepAlive: this._keepAlive, maxSockets: y };
        g = b ? new https__default.default.Agent(v) : new http__default.default.Agent(v), this._agent = g;
      }
      return g || (g = b ? https__default.default.globalAgent : http__default.default.globalAgent), b && this._ignoreSslError && (g.options = Object.assign(g.options || {}, {
        rejectUnauthorized: !1
      })), g;
    }
    _performExponentialBackoff(l) {
      l = Math.min(w, l);
      const g = h * Math.pow(2, l);
      return new Promise((m) => setTimeout(() => m(), g));
    }
    static dateTimeDeserializer(l, g) {
      if (typeof g == "string") {
        let m = new Date(g);
        if (!isNaN(m.valueOf()))
          return m;
      }
      return g;
    }
    async _processResponse(l, g) {
      return new Promise(async (m, d) => {
        const b = l.message.statusCode, y = {
          statusCode: b,
          result: null,
          headers: {}
        };
        b == n.NotFound && m(y);
        let v, A;
        try {
          A = await l.readBody(), A && A.length > 0 && (g && g.deserializeDates ? v = JSON.parse(A, P.dateTimeDeserializer) : v = JSON.parse(A), y.result = v), y.headers = l.message.headers;
        } catch (S) {
        }
        if (b > 299) {
          let S;
          v && v.message ? S = v.message : A && A.length > 0 ? S = A : S = "Failed request: (" + b + ")";
          let G = new T(S, b);
          G.result = y.result, d(G);
        } else
          m(y);
      });
    }
  }
  t.HttpClient = P;
}), utils$1 = createCommonjsModule(function(e, t) {
  var r = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(f, w, h, T) {
    T === void 0 && (T = h), Object.defineProperty(f, T, { enumerable: !0, get: function() {
      return w[h];
    } });
  } : function(f, w, h, T) {
    T === void 0 && (T = h), f[T] = w[h];
  }), n = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(f, w) {
    Object.defineProperty(f, "default", { enumerable: !0, value: w });
  } : function(f, w) {
    f.default = w;
  }), s = commonjsGlobal && commonjsGlobal.__importStar || function(f) {
    if (f && f.__esModule)
      return f;
    var w = {};
    if (f != null)
      for (var h in f)
        Object.hasOwnProperty.call(f, h) && r(w, f, h);
    return n(w, f), w;
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.getApiBaseUrl = t.getProxyAgent = t.getAuthString = void 0;
  const o = s(httpClient);
  function a(f, w) {
    if (!f && !w.auth)
      throw new Error("Parameter token or opts.auth is required");
    if (f && w.auth)
      throw new Error("Parameters token and opts.auth may not both be specified");
    return typeof w.auth == "string" ? w.auth : `token ${f}`;
  }
  t.getAuthString = a;
  function i(f) {
    return new o.HttpClient().getAgent(f);
  }
  t.getProxyAgent = i;
  function u() {
    return process.env.GITHUB_API_URL || "https://api.github.com";
  }
  t.getApiBaseUrl = u;
});
function getUserAgent() {
  return typeof navigator == "object" && "userAgent" in navigator ? navigator.userAgent : typeof process == "object" && "version" in process ? `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})` : "<environment undetectable>";
}
var register_1 = register;
function register(e, t, r, n) {
  if (typeof r != "function")
    throw new Error("method for before hook must be a function");
  return n || (n = {}), Array.isArray(t) ? t.reverse().reduce(function(s, o) {
    return register.bind(null, e, o, s, n);
  }, r)() : Promise.resolve().then(function() {
    return e.registry[t] ? e.registry[t].reduce(function(s, o) {
      return o.hook.bind(null, s, n);
    }, r)() : r(n);
  });
}
var add = addHook;
function addHook(e, t, r, n) {
  var s = n;
  e.registry[r] || (e.registry[r] = []), t === "before" && (n = function(o, a) {
    return Promise.resolve().then(s.bind(null, a)).then(o.bind(null, a));
  }), t === "after" && (n = function(o, a) {
    var i;
    return Promise.resolve().then(o.bind(null, a)).then(function(u) {
      return i = u, s(i, a);
    }).then(function() {
      return i;
    });
  }), t === "error" && (n = function(o, a) {
    return Promise.resolve().then(o.bind(null, a)).catch(function(i) {
      return s(i, a);
    });
  }), e.registry[r].push({
    hook: n,
    orig: s
  });
}
var remove = removeHook;
function removeHook(e, t, r) {
  if (!!e.registry[t]) {
    var n = e.registry[t].map(function(s) {
      return s.orig;
    }).indexOf(r);
    n !== -1 && e.registry[t].splice(n, 1);
  }
}
var bind = Function.bind, bindable = bind.bind(bind);
function bindApi(e, t, r) {
  var n = bindable(remove, null).apply(null, r ? [t, r] : [t]);
  e.api = { remove: n }, e.remove = n, ["before", "error", "after", "wrap"].forEach(function(s) {
    var o = r ? [t, s, r] : [t, s];
    e[s] = e.api[s] = bindable(add, null).apply(null, o);
  });
}
function HookSingular() {
  var e = "h", t = {
    registry: {}
  }, r = register_1.bind(null, t, e);
  return bindApi(r, t, e), r;
}
function HookCollection() {
  var e = {
    registry: {}
  }, t = register_1.bind(null, e);
  return bindApi(t, e), t;
}
var collectionHookDeprecationMessageDisplayed = !1;
function Hook() {
  return collectionHookDeprecationMessageDisplayed || (console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'), collectionHookDeprecationMessageDisplayed = !0), HookCollection();
}
Hook.Singular = HookSingular.bind(), Hook.Collection = HookCollection.bind();
var beforeAfterHook = Hook, Hook_1 = Hook, Singular = Hook.Singular, Collection = Hook.Collection;
beforeAfterHook.Hook = Hook_1, beforeAfterHook.Singular = Singular, beforeAfterHook.Collection = Collection;
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function isObject$1(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function isPlainObject(e) {
  var t, r;
  return isObject$1(e) === !1 ? !1 : (t = e.constructor, t === void 0 ? !0 : (r = t.prototype, !(isObject$1(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
function lowercaseKeys(e) {
  return e ? Object.keys(e).reduce((t, r) => (t[r.toLowerCase()] = e[r], t), {}) : {};
}
function mergeDeep(e, t) {
  const r = Object.assign({}, e);
  return Object.keys(t).forEach((n) => {
    isPlainObject(t[n]) ? n in e ? r[n] = mergeDeep(e[n], t[n]) : Object.assign(r, { [n]: t[n] }) : Object.assign(r, { [n]: t[n] });
  }), r;
}
function removeUndefinedProperties(e) {
  for (const t in e)
    e[t] === void 0 && delete e[t];
  return e;
}
function merge(e, t, r) {
  if (typeof t == "string") {
    let [s, o] = t.split(" ");
    r = Object.assign(o ? { method: s, url: o } : { url: s }, r);
  } else
    r = Object.assign({}, t);
  r.headers = lowercaseKeys(r.headers), removeUndefinedProperties(r), removeUndefinedProperties(r.headers);
  const n = mergeDeep(e || {}, r);
  return e && e.mediaType.previews.length && (n.mediaType.previews = e.mediaType.previews.filter((s) => !n.mediaType.previews.includes(s)).concat(n.mediaType.previews)), n.mediaType.previews = n.mediaType.previews.map((s) => s.replace(/-preview/, "")), n;
}
function addQueryParameters(e, t) {
  const r = /\?/.test(e) ? "&" : "?", n = Object.keys(t);
  return n.length === 0 ? e : e + r + n.map((s) => s === "q" ? "q=" + t.q.split("+").map(encodeURIComponent).join("+") : `${s}=${encodeURIComponent(t[s])}`).join("&");
}
const urlVariableRegex = /\{[^}]+\}/g;
function removeNonChars(e) {
  return e.replace(/^\W+|\W+$/g, "").split(/,/);
}
function extractUrlVariableNames(e) {
  const t = e.match(urlVariableRegex);
  return t ? t.map(removeNonChars).reduce((r, n) => r.concat(n), []) : [];
}
function omit(e, t) {
  return Object.keys(e).filter((r) => !t.includes(r)).reduce((r, n) => (r[n] = e[n], r), {});
}
function encodeReserved(e) {
  return e.split(/(%[0-9A-Fa-f]{2})/g).map(function(t) {
    return /%[0-9A-Fa-f]/.test(t) || (t = encodeURI(t).replace(/%5B/g, "[").replace(/%5D/g, "]")), t;
  }).join("");
}
function encodeUnreserved(e) {
  return encodeURIComponent(e).replace(/[!'()*]/g, function(t) {
    return "%" + t.charCodeAt(0).toString(16).toUpperCase();
  });
}
function encodeValue(e, t, r) {
  return t = e === "+" || e === "#" ? encodeReserved(t) : encodeUnreserved(t), r ? encodeUnreserved(r) + "=" + t : t;
}
function isDefined(e) {
  return e != null;
}
function isKeyOperator(e) {
  return e === ";" || e === "&" || e === "?";
}
function getValues(e, t, r, n) {
  var s = e[r], o = [];
  if (isDefined(s) && s !== "")
    if (typeof s == "string" || typeof s == "number" || typeof s == "boolean")
      s = s.toString(), n && n !== "*" && (s = s.substring(0, parseInt(n, 10))), o.push(encodeValue(t, s, isKeyOperator(t) ? r : ""));
    else if (n === "*")
      Array.isArray(s) ? s.filter(isDefined).forEach(function(a) {
        o.push(encodeValue(t, a, isKeyOperator(t) ? r : ""));
      }) : Object.keys(s).forEach(function(a) {
        isDefined(s[a]) && o.push(encodeValue(t, s[a], a));
      });
    else {
      const a = [];
      Array.isArray(s) ? s.filter(isDefined).forEach(function(i) {
        a.push(encodeValue(t, i));
      }) : Object.keys(s).forEach(function(i) {
        isDefined(s[i]) && (a.push(encodeUnreserved(i)), a.push(encodeValue(t, s[i].toString())));
      }), isKeyOperator(t) ? o.push(encodeUnreserved(r) + "=" + a.join(",")) : a.length !== 0 && o.push(a.join(","));
    }
  else
    t === ";" ? isDefined(s) && o.push(encodeUnreserved(r)) : s === "" && (t === "&" || t === "?") ? o.push(encodeUnreserved(r) + "=") : s === "" && o.push("");
  return o;
}
function parseUrl(e) {
  return {
    expand: expand.bind(null, e)
  };
}
function expand(e, t) {
  var r = ["+", "#", ".", "/", ";", "?", "&"];
  return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function(n, s, o) {
    if (s) {
      let i = "";
      const u = [];
      if (r.indexOf(s.charAt(0)) !== -1 && (i = s.charAt(0), s = s.substr(1)), s.split(/,/g).forEach(function(f) {
        var w = /([^:\*]*)(?::(\d+)|(\*))?/.exec(f);
        u.push(getValues(t, i, w[1], w[2] || w[3]));
      }), i && i !== "+") {
        var a = ",";
        return i === "?" ? a = "&" : i !== "#" && (a = i), (u.length !== 0 ? i : "") + u.join(a);
      } else
        return u.join(",");
    } else
      return encodeReserved(o);
  });
}
function parse(e) {
  let t = e.method.toUpperCase(), r = (e.url || "/").replace(/:([a-z]\w+)/g, "{$1}"), n = Object.assign({}, e.headers), s, o = omit(e, [
    "method",
    "baseUrl",
    "url",
    "headers",
    "request",
    "mediaType"
  ]);
  const a = extractUrlVariableNames(r);
  r = parseUrl(r).expand(o), /^http/.test(r) || (r = e.baseUrl + r);
  const i = Object.keys(e).filter((w) => a.includes(w)).concat("baseUrl"), u = omit(o, i);
  if (!/application\/octet-stream/i.test(n.accept) && (e.mediaType.format && (n.accept = n.accept.split(/,/).map((w) => w.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, `application/vnd$1$2.${e.mediaType.format}`)).join(",")), e.mediaType.previews.length)) {
    const w = n.accept.match(/[\w-]+(?=-preview)/g) || [];
    n.accept = w.concat(e.mediaType.previews).map((h) => {
      const T = e.mediaType.format ? `.${e.mediaType.format}` : "+json";
      return `application/vnd.github.${h}-preview${T}`;
    }).join(",");
  }
  return ["GET", "HEAD"].includes(t) ? r = addQueryParameters(r, u) : "data" in u ? s = u.data : Object.keys(u).length ? s = u : n["content-length"] = 0, !n["content-type"] && typeof s != "undefined" && (n["content-type"] = "application/json; charset=utf-8"), ["PATCH", "PUT"].includes(t) && typeof s == "undefined" && (s = ""), Object.assign({ method: t, url: r, headers: n }, typeof s != "undefined" ? { body: s } : null, e.request ? { request: e.request } : null);
}
function endpointWithDefaults(e, t, r) {
  return parse(merge(e, t, r));
}
function withDefaults$2(e, t) {
  const r = merge(e, t), n = endpointWithDefaults.bind(null, r);
  return Object.assign(n, {
    DEFAULTS: r,
    defaults: withDefaults$2.bind(null, r),
    merge: merge.bind(null, r),
    parse
  });
}
const VERSION$5 = "6.0.10", userAgent = `octokit-endpoint.js/${VERSION$5} ${getUserAgent()}`, DEFAULTS = {
  method: "GET",
  baseUrl: "https://api.github.com",
  headers: {
    accept: "application/vnd.github.v3+json",
    "user-agent": userAgent
  },
  mediaType: {
    format: "",
    previews: []
  }
}, endpoint = withDefaults$2(null, DEFAULTS), Readable = Stream__default.default.Readable, BUFFER = Symbol("buffer"), TYPE = Symbol("type");
class Blob {
  constructor() {
    this[TYPE] = "";
    const t = arguments[0], r = arguments[1], n = [];
    let s = 0;
    if (t) {
      const a = t, i = Number(a.length);
      for (let u = 0; u < i; u++) {
        const f = a[u];
        let w;
        f instanceof Buffer ? w = f : ArrayBuffer.isView(f) ? w = Buffer.from(f.buffer, f.byteOffset, f.byteLength) : f instanceof ArrayBuffer ? w = Buffer.from(f) : f instanceof Blob ? w = f[BUFFER] : w = Buffer.from(typeof f == "string" ? f : String(f)), s += w.length, n.push(w);
      }
    }
    this[BUFFER] = Buffer.concat(n);
    let o = r && r.type !== void 0 && String(r.type).toLowerCase();
    o && !/[^\u0020-\u007E]/.test(o) && (this[TYPE] = o);
  }
  get size() {
    return this[BUFFER].length;
  }
  get type() {
    return this[TYPE];
  }
  text() {
    return Promise.resolve(this[BUFFER].toString());
  }
  arrayBuffer() {
    const t = this[BUFFER], r = t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength);
    return Promise.resolve(r);
  }
  stream() {
    const t = new Readable();
    return t._read = function() {
    }, t.push(this[BUFFER]), t.push(null), t;
  }
  toString() {
    return "[object Blob]";
  }
  slice() {
    const t = this.size, r = arguments[0], n = arguments[1];
    let s, o;
    r === void 0 ? s = 0 : r < 0 ? s = Math.max(t + r, 0) : s = Math.min(r, t), n === void 0 ? o = t : n < 0 ? o = Math.max(t + n, 0) : o = Math.min(n, t);
    const a = Math.max(o - s, 0), u = this[BUFFER].slice(s, s + a), f = new Blob([], { type: arguments[2] });
    return f[BUFFER] = u, f;
  }
}
Object.defineProperties(Blob.prototype, {
  size: { enumerable: !0 },
  type: { enumerable: !0 },
  slice: { enumerable: !0 }
}), Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
  value: "Blob",
  writable: !1,
  enumerable: !1,
  configurable: !0
});
function FetchError(e, t, r) {
  Error.call(this, e), this.message = e, this.type = t, r && (this.code = this.errno = r.code), Error.captureStackTrace(this, this.constructor);
}
FetchError.prototype = Object.create(Error.prototype), FetchError.prototype.constructor = FetchError, FetchError.prototype.name = "FetchError";
let convert;
try {
  convert = require("encoding").convert;
} catch (e) {
}
const INTERNALS = Symbol("Body internals"), PassThrough = Stream__default.default.PassThrough;
function Body(e) {
  var t = this, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.size;
  let s = n === void 0 ? 0 : n;
  var o = r.timeout;
  let a = o === void 0 ? 0 : o;
  e == null ? e = null : isURLSearchParams(e) ? e = Buffer.from(e.toString()) : isBlob(e) || Buffer.isBuffer(e) || (Object.prototype.toString.call(e) === "[object ArrayBuffer]" ? e = Buffer.from(e) : ArrayBuffer.isView(e) ? e = Buffer.from(e.buffer, e.byteOffset, e.byteLength) : e instanceof Stream__default.default || (e = Buffer.from(String(e)))), this[INTERNALS] = {
    body: e,
    disturbed: !1,
    error: null
  }, this.size = s, this.timeout = a, e instanceof Stream__default.default && e.on("error", function(i) {
    const u = i.name === "AbortError" ? i : new FetchError(`Invalid response body while trying to fetch ${t.url}: ${i.message}`, "system", i);
    t[INTERNALS].error = u;
  });
}
Body.prototype = {
  get body() {
    return this[INTERNALS].body;
  },
  get bodyUsed() {
    return this[INTERNALS].disturbed;
  },
  arrayBuffer() {
    return consumeBody.call(this).then(function(e) {
      return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
    });
  },
  blob() {
    let e = this.headers && this.headers.get("content-type") || "";
    return consumeBody.call(this).then(function(t) {
      return Object.assign(new Blob([], {
        type: e.toLowerCase()
      }), {
        [BUFFER]: t
      });
    });
  },
  json() {
    var e = this;
    return consumeBody.call(this).then(function(t) {
      try {
        return JSON.parse(t.toString());
      } catch (r) {
        return Body.Promise.reject(new FetchError(`invalid json response body at ${e.url} reason: ${r.message}`, "invalid-json"));
      }
    });
  },
  text() {
    return consumeBody.call(this).then(function(e) {
      return e.toString();
    });
  },
  buffer() {
    return consumeBody.call(this);
  },
  textConverted() {
    var e = this;
    return consumeBody.call(this).then(function(t) {
      return convertBody(t, e.headers);
    });
  }
}, Object.defineProperties(Body.prototype, {
  body: { enumerable: !0 },
  bodyUsed: { enumerable: !0 },
  arrayBuffer: { enumerable: !0 },
  blob: { enumerable: !0 },
  json: { enumerable: !0 },
  text: { enumerable: !0 }
}), Body.mixIn = function(e) {
  for (const t of Object.getOwnPropertyNames(Body.prototype))
    if (!(t in e)) {
      const r = Object.getOwnPropertyDescriptor(Body.prototype, t);
      Object.defineProperty(e, t, r);
    }
};
function consumeBody() {
  var e = this;
  if (this[INTERNALS].disturbed)
    return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
  if (this[INTERNALS].disturbed = !0, this[INTERNALS].error)
    return Body.Promise.reject(this[INTERNALS].error);
  let t = this.body;
  if (t === null)
    return Body.Promise.resolve(Buffer.alloc(0));
  if (isBlob(t) && (t = t.stream()), Buffer.isBuffer(t))
    return Body.Promise.resolve(t);
  if (!(t instanceof Stream__default.default))
    return Body.Promise.resolve(Buffer.alloc(0));
  let r = [], n = 0, s = !1;
  return new Body.Promise(function(o, a) {
    let i;
    e.timeout && (i = setTimeout(function() {
      s = !0, a(new FetchError(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`, "body-timeout"));
    }, e.timeout)), t.on("error", function(u) {
      u.name === "AbortError" ? (s = !0, a(u)) : a(new FetchError(`Invalid response body while trying to fetch ${e.url}: ${u.message}`, "system", u));
    }), t.on("data", function(u) {
      if (!(s || u === null)) {
        if (e.size && n + u.length > e.size) {
          s = !0, a(new FetchError(`content size at ${e.url} over limit: ${e.size}`, "max-size"));
          return;
        }
        n += u.length, r.push(u);
      }
    }), t.on("end", function() {
      if (!s) {
        clearTimeout(i);
        try {
          o(Buffer.concat(r, n));
        } catch (u) {
          a(new FetchError(`Could not create Buffer from response body for ${e.url}: ${u.message}`, "system", u));
        }
      }
    });
  });
}
function convertBody(e, t) {
  if (typeof convert != "function")
    throw new Error("The package `encoding` must be installed to use the textConverted() function");
  const r = t.get("content-type");
  let n = "utf-8", s, o;
  return r && (s = /charset=([^;]*)/i.exec(r)), o = e.slice(0, 1024).toString(), !s && o && (s = /<meta.+?charset=(['"])(.+?)\1/i.exec(o)), !s && o && (s = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o), s || (s = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o), s && s.pop()), s && (s = /charset=(.*)/i.exec(s.pop()))), !s && o && (s = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o)), s && (n = s.pop(), (n === "gb2312" || n === "gbk") && (n = "gb18030")), convert(e, "UTF-8", n).toString();
}
function isURLSearchParams(e) {
  return typeof e != "object" || typeof e.append != "function" || typeof e.delete != "function" || typeof e.get != "function" || typeof e.getAll != "function" || typeof e.has != "function" || typeof e.set != "function" ? !1 : e.constructor.name === "URLSearchParams" || Object.prototype.toString.call(e) === "[object URLSearchParams]" || typeof e.sort == "function";
}
function isBlob(e) {
  return typeof e == "object" && typeof e.arrayBuffer == "function" && typeof e.type == "string" && typeof e.stream == "function" && typeof e.constructor == "function" && typeof e.constructor.name == "string" && /^(Blob|File)$/.test(e.constructor.name) && /^(Blob|File)$/.test(e[Symbol.toStringTag]);
}
function clone(e) {
  let t, r, n = e.body;
  if (e.bodyUsed)
    throw new Error("cannot clone body after it is used");
  return n instanceof Stream__default.default && typeof n.getBoundary != "function" && (t = new PassThrough(), r = new PassThrough(), n.pipe(t), n.pipe(r), e[INTERNALS].body = t, n = r), n;
}
function extractContentType(e) {
  return e === null ? null : typeof e == "string" ? "text/plain;charset=UTF-8" : isURLSearchParams(e) ? "application/x-www-form-urlencoded;charset=UTF-8" : isBlob(e) ? e.type || null : Buffer.isBuffer(e) || Object.prototype.toString.call(e) === "[object ArrayBuffer]" || ArrayBuffer.isView(e) ? null : typeof e.getBoundary == "function" ? `multipart/form-data;boundary=${e.getBoundary()}` : e instanceof Stream__default.default ? null : "text/plain;charset=UTF-8";
}
function getTotalBytes(e) {
  const t = e.body;
  return t === null ? 0 : isBlob(t) ? t.size : Buffer.isBuffer(t) ? t.length : t && typeof t.getLengthSync == "function" && (t._lengthRetrievers && t._lengthRetrievers.length == 0 || t.hasKnownLength && t.hasKnownLength()) ? t.getLengthSync() : null;
}
function writeToStream(e, t) {
  const r = t.body;
  r === null ? e.end() : isBlob(r) ? r.stream().pipe(e) : Buffer.isBuffer(r) ? (e.write(r), e.end()) : r.pipe(e);
}
Body.Promise = global.Promise;
const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/, invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;
function validateName(e) {
  if (e = `${e}`, invalidTokenRegex.test(e) || e === "")
    throw new TypeError(`${e} is not a legal HTTP header name`);
}
function validateValue(e) {
  if (e = `${e}`, invalidHeaderCharRegex.test(e))
    throw new TypeError(`${e} is not a legal HTTP header value`);
}
function find(e, t) {
  t = t.toLowerCase();
  for (const r in e)
    if (r.toLowerCase() === t)
      return r;
}
const MAP = Symbol("map");
class Headers {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
    if (this[MAP] = Object.create(null), t instanceof Headers) {
      const r = t.raw(), n = Object.keys(r);
      for (const s of n)
        for (const o of r[s])
          this.append(s, o);
      return;
    }
    if (t != null)
      if (typeof t == "object") {
        const r = t[Symbol.iterator];
        if (r != null) {
          if (typeof r != "function")
            throw new TypeError("Header pairs must be iterable");
          const n = [];
          for (const s of t) {
            if (typeof s != "object" || typeof s[Symbol.iterator] != "function")
              throw new TypeError("Each header pair must be iterable");
            n.push(Array.from(s));
          }
          for (const s of n) {
            if (s.length !== 2)
              throw new TypeError("Each header pair must be a name/value tuple");
            this.append(s[0], s[1]);
          }
        } else
          for (const n of Object.keys(t)) {
            const s = t[n];
            this.append(n, s);
          }
      } else
        throw new TypeError("Provided initializer must be an object");
  }
  get(t) {
    t = `${t}`, validateName(t);
    const r = find(this[MAP], t);
    return r === void 0 ? null : this[MAP][r].join(", ");
  }
  forEach(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, n = getHeaders(this), s = 0;
    for (; s < n.length; ) {
      var o = n[s];
      const a = o[0], i = o[1];
      t.call(r, i, a, this), n = getHeaders(this), s++;
    }
  }
  set(t, r) {
    t = `${t}`, r = `${r}`, validateName(t), validateValue(r);
    const n = find(this[MAP], t);
    this[MAP][n !== void 0 ? n : t] = [r];
  }
  append(t, r) {
    t = `${t}`, r = `${r}`, validateName(t), validateValue(r);
    const n = find(this[MAP], t);
    n !== void 0 ? this[MAP][n].push(r) : this[MAP][t] = [r];
  }
  has(t) {
    return t = `${t}`, validateName(t), find(this[MAP], t) !== void 0;
  }
  delete(t) {
    t = `${t}`, validateName(t);
    const r = find(this[MAP], t);
    r !== void 0 && delete this[MAP][r];
  }
  raw() {
    return this[MAP];
  }
  keys() {
    return createHeadersIterator(this, "key");
  }
  values() {
    return createHeadersIterator(this, "value");
  }
  [Symbol.iterator]() {
    return createHeadersIterator(this, "key+value");
  }
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator], Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
  value: "Headers",
  writable: !1,
  enumerable: !1,
  configurable: !0
}), Object.defineProperties(Headers.prototype, {
  get: { enumerable: !0 },
  forEach: { enumerable: !0 },
  set: { enumerable: !0 },
  append: { enumerable: !0 },
  has: { enumerable: !0 },
  delete: { enumerable: !0 },
  keys: { enumerable: !0 },
  values: { enumerable: !0 },
  entries: { enumerable: !0 }
});
function getHeaders(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "key+value";
  return Object.keys(e[MAP]).sort().map(t === "key" ? function(n) {
    return n.toLowerCase();
  } : t === "value" ? function(n) {
    return e[MAP][n].join(", ");
  } : function(n) {
    return [n.toLowerCase(), e[MAP][n].join(", ")];
  });
}
const INTERNAL = Symbol("internal");
function createHeadersIterator(e, t) {
  const r = Object.create(HeadersIteratorPrototype);
  return r[INTERNAL] = {
    target: e,
    kind: t,
    index: 0
  }, r;
}
const HeadersIteratorPrototype = Object.setPrototypeOf({
  next() {
    if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype)
      throw new TypeError("Value of `this` is not a HeadersIterator");
    var e = this[INTERNAL];
    const t = e.target, r = e.kind, n = e.index, s = getHeaders(t, r), o = s.length;
    return n >= o ? {
      value: void 0,
      done: !0
    } : (this[INTERNAL].index = n + 1, {
      value: s[n],
      done: !1
    });
  }
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));
Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
  value: "HeadersIterator",
  writable: !1,
  enumerable: !1,
  configurable: !0
});
function exportNodeCompatibleHeaders(e) {
  const t = Object.assign({ __proto__: null }, e[MAP]), r = find(e[MAP], "Host");
  return r !== void 0 && (t[r] = t[r][0]), t;
}
function createHeadersLenient(e) {
  const t = new Headers();
  for (const r of Object.keys(e))
    if (!invalidTokenRegex.test(r))
      if (Array.isArray(e[r]))
        for (const n of e[r])
          invalidHeaderCharRegex.test(n) || (t[MAP][r] === void 0 ? t[MAP][r] = [n] : t[MAP][r].push(n));
      else
        invalidHeaderCharRegex.test(e[r]) || (t[MAP][r] = [e[r]]);
  return t;
}
const INTERNALS$1 = Symbol("Response internals"), STATUS_CODES = http__default.default.STATUS_CODES;
class Response {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Body.call(this, t, r);
    const n = r.status || 200, s = new Headers(r.headers);
    if (t != null && !s.has("Content-Type")) {
      const o = extractContentType(t);
      o && s.append("Content-Type", o);
    }
    this[INTERNALS$1] = {
      url: r.url,
      status: n,
      statusText: r.statusText || STATUS_CODES[n],
      headers: s,
      counter: r.counter
    };
  }
  get url() {
    return this[INTERNALS$1].url || "";
  }
  get status() {
    return this[INTERNALS$1].status;
  }
  get ok() {
    return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
  }
  get redirected() {
    return this[INTERNALS$1].counter > 0;
  }
  get statusText() {
    return this[INTERNALS$1].statusText;
  }
  get headers() {
    return this[INTERNALS$1].headers;
  }
  clone() {
    return new Response(clone(this), {
      url: this.url,
      status: this.status,
      statusText: this.statusText,
      headers: this.headers,
      ok: this.ok,
      redirected: this.redirected
    });
  }
}
Body.mixIn(Response.prototype), Object.defineProperties(Response.prototype, {
  url: { enumerable: !0 },
  status: { enumerable: !0 },
  ok: { enumerable: !0 },
  redirected: { enumerable: !0 },
  statusText: { enumerable: !0 },
  headers: { enumerable: !0 },
  clone: { enumerable: !0 }
}), Object.defineProperty(Response.prototype, Symbol.toStringTag, {
  value: "Response",
  writable: !1,
  enumerable: !1,
  configurable: !0
});
const INTERNALS$2 = Symbol("Request internals"), parse_url = Url__default.default.parse, format_url = Url__default.default.format, streamDestructionSupported = "destroy" in Stream__default.default.Readable.prototype;
function isRequest(e) {
  return typeof e == "object" && typeof e[INTERNALS$2] == "object";
}
function isAbortSignal(e) {
  const t = e && typeof e == "object" && Object.getPrototypeOf(e);
  return !!(t && t.constructor.name === "AbortSignal");
}
class Request {
  constructor(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n;
    isRequest(t) ? n = parse_url(t.url) : (t && t.href ? n = parse_url(t.href) : n = parse_url(`${t}`), t = {});
    let s = r.method || t.method || "GET";
    if (s = s.toUpperCase(), (r.body != null || isRequest(t) && t.body !== null) && (s === "GET" || s === "HEAD"))
      throw new TypeError("Request with GET/HEAD method cannot have body");
    let o = r.body != null ? r.body : isRequest(t) && t.body !== null ? clone(t) : null;
    Body.call(this, o, {
      timeout: r.timeout || t.timeout || 0,
      size: r.size || t.size || 0
    });
    const a = new Headers(r.headers || t.headers || {});
    if (o != null && !a.has("Content-Type")) {
      const u = extractContentType(o);
      u && a.append("Content-Type", u);
    }
    let i = isRequest(t) ? t.signal : null;
    if ("signal" in r && (i = r.signal), i != null && !isAbortSignal(i))
      throw new TypeError("Expected signal to be an instanceof AbortSignal");
    this[INTERNALS$2] = {
      method: s,
      redirect: r.redirect || t.redirect || "follow",
      headers: a,
      parsedURL: n,
      signal: i
    }, this.follow = r.follow !== void 0 ? r.follow : t.follow !== void 0 ? t.follow : 20, this.compress = r.compress !== void 0 ? r.compress : t.compress !== void 0 ? t.compress : !0, this.counter = r.counter || t.counter || 0, this.agent = r.agent || t.agent;
  }
  get method() {
    return this[INTERNALS$2].method;
  }
  get url() {
    return format_url(this[INTERNALS$2].parsedURL);
  }
  get headers() {
    return this[INTERNALS$2].headers;
  }
  get redirect() {
    return this[INTERNALS$2].redirect;
  }
  get signal() {
    return this[INTERNALS$2].signal;
  }
  clone() {
    return new Request(this);
  }
}
Body.mixIn(Request.prototype), Object.defineProperty(Request.prototype, Symbol.toStringTag, {
  value: "Request",
  writable: !1,
  enumerable: !1,
  configurable: !0
}), Object.defineProperties(Request.prototype, {
  method: { enumerable: !0 },
  url: { enumerable: !0 },
  headers: { enumerable: !0 },
  redirect: { enumerable: !0 },
  clone: { enumerable: !0 },
  signal: { enumerable: !0 }
});
function getNodeRequestOptions(e) {
  const t = e[INTERNALS$2].parsedURL, r = new Headers(e[INTERNALS$2].headers);
  if (r.has("Accept") || r.set("Accept", "*/*"), !t.protocol || !t.hostname)
    throw new TypeError("Only absolute URLs are supported");
  if (!/^https?:$/.test(t.protocol))
    throw new TypeError("Only HTTP(S) protocols are supported");
  if (e.signal && e.body instanceof Stream__default.default.Readable && !streamDestructionSupported)
    throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");
  let n = null;
  if (e.body == null && /^(POST|PUT)$/i.test(e.method) && (n = "0"), e.body != null) {
    const o = getTotalBytes(e);
    typeof o == "number" && (n = String(o));
  }
  n && r.set("Content-Length", n), r.has("User-Agent") || r.set("User-Agent", "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"), e.compress && !r.has("Accept-Encoding") && r.set("Accept-Encoding", "gzip,deflate");
  let s = e.agent;
  return typeof s == "function" && (s = s(t)), !r.has("Connection") && !s && r.set("Connection", "close"), Object.assign({}, t, {
    method: e.method,
    headers: exportNodeCompatibleHeaders(r),
    agent: s
  });
}
function AbortError(e) {
  Error.call(this, e), this.type = "aborted", this.message = e, Error.captureStackTrace(this, this.constructor);
}
AbortError.prototype = Object.create(Error.prototype), AbortError.prototype.constructor = AbortError, AbortError.prototype.name = "AbortError";
const PassThrough$1 = Stream__default.default.PassThrough, resolve_url = Url__default.default.resolve;
function fetch(e, t) {
  if (!fetch.Promise)
    throw new Error("native promise missing, set fetch.Promise to your favorite alternative");
  return Body.Promise = fetch.Promise, new fetch.Promise(function(r, n) {
    const s = new Request(e, t), o = getNodeRequestOptions(s), a = (o.protocol === "https:" ? https__default.default : http__default.default).request, i = s.signal;
    let u = null;
    const f = function() {
      let P = new AbortError("The user aborted a request.");
      n(P), s.body && s.body instanceof Stream__default.default.Readable && s.body.destroy(P), !(!u || !u.body) && u.body.emit("error", P);
    };
    if (i && i.aborted) {
      f();
      return;
    }
    const w = function() {
      f(), _();
    }, h = a(o);
    let T;
    i && i.addEventListener("abort", w);
    function _() {
      h.abort(), i && i.removeEventListener("abort", w), clearTimeout(T);
    }
    s.timeout && h.once("socket", function(E) {
      T = setTimeout(function() {
        n(new FetchError(`network timeout at: ${s.url}`, "request-timeout")), _();
      }, s.timeout);
    }), h.on("error", function(E) {
      n(new FetchError(`request to ${s.url} failed, reason: ${E.message}`, "system", E)), _();
    }), h.on("response", function(E) {
      clearTimeout(T);
      const P = createHeadersLenient(E.headers);
      if (fetch.isRedirect(E.statusCode)) {
        const d = P.get("Location"), b = d === null ? null : resolve_url(s.url, d);
        switch (s.redirect) {
          case "error":
            n(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${s.url}`, "no-redirect")), _();
            return;
          case "manual":
            if (b !== null)
              try {
                P.set("Location", b);
              } catch (v) {
                n(v);
              }
            break;
          case "follow":
            if (b === null)
              break;
            if (s.counter >= s.follow) {
              n(new FetchError(`maximum redirect reached at: ${s.url}`, "max-redirect")), _();
              return;
            }
            const y = {
              headers: new Headers(s.headers),
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
            if (E.statusCode !== 303 && s.body && getTotalBytes(s) === null) {
              n(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect")), _();
              return;
            }
            (E.statusCode === 303 || (E.statusCode === 301 || E.statusCode === 302) && s.method === "POST") && (y.method = "GET", y.body = void 0, y.headers.delete("content-length")), r(fetch(new Request(b, y))), _();
            return;
        }
      }
      E.once("end", function() {
        i && i.removeEventListener("abort", w);
      });
      let p = E.pipe(new PassThrough$1());
      const l = {
        url: s.url,
        status: E.statusCode,
        statusText: E.statusMessage,
        headers: P,
        size: s.size,
        timeout: s.timeout,
        counter: s.counter
      }, g = P.get("Content-Encoding");
      if (!s.compress || s.method === "HEAD" || g === null || E.statusCode === 204 || E.statusCode === 304) {
        u = new Response(p, l), r(u);
        return;
      }
      const m = {
        flush: zlib__default.default.Z_SYNC_FLUSH,
        finishFlush: zlib__default.default.Z_SYNC_FLUSH
      };
      if (g == "gzip" || g == "x-gzip") {
        p = p.pipe(zlib__default.default.createGunzip(m)), u = new Response(p, l), r(u);
        return;
      }
      if (g == "deflate" || g == "x-deflate") {
        E.pipe(new PassThrough$1()).once("data", function(b) {
          (b[0] & 15) == 8 ? p = p.pipe(zlib__default.default.createInflate()) : p = p.pipe(zlib__default.default.createInflateRaw()), u = new Response(p, l), r(u);
        });
        return;
      }
      if (g == "br" && typeof zlib__default.default.createBrotliDecompress == "function") {
        p = p.pipe(zlib__default.default.createBrotliDecompress()), u = new Response(p, l), r(u);
        return;
      }
      u = new Response(p, l), r(u);
    }), writeToStream(h, s);
  });
}
fetch.isRedirect = function(e) {
  return e === 301 || e === 302 || e === 303 || e === 307 || e === 308;
}, fetch.Promise = global.Promise;
class Deprecation extends Error {
  constructor(t) {
    super(t);
    Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.name = "Deprecation";
  }
}
var wrappy_1 = wrappy;
function wrappy(e, t) {
  if (e && t)
    return wrappy(e)(t);
  if (typeof e != "function")
    throw new TypeError("need wrapper function");
  return Object.keys(e).forEach(function(n) {
    r[n] = e[n];
  }), r;
  function r() {
    for (var n = new Array(arguments.length), s = 0; s < n.length; s++)
      n[s] = arguments[s];
    var o = e.apply(this, n), a = n[n.length - 1];
    return typeof o == "function" && o !== a && Object.keys(a).forEach(function(i) {
      o[i] = a[i];
    }), o;
  }
}
var once_1 = wrappy_1(once), strict = wrappy_1(onceStrict);
once.proto = once(function() {
  Object.defineProperty(Function.prototype, "once", {
    value: function() {
      return once(this);
    },
    configurable: !0
  }), Object.defineProperty(Function.prototype, "onceStrict", {
    value: function() {
      return onceStrict(this);
    },
    configurable: !0
  });
});
function once(e) {
  var t = function() {
    return t.called ? t.value : (t.called = !0, t.value = e.apply(this, arguments));
  };
  return t.called = !1, t;
}
function onceStrict(e) {
  var t = function() {
    if (t.called)
      throw new Error(t.onceError);
    return t.called = !0, t.value = e.apply(this, arguments);
  }, r = e.name || "Function wrapped with `once`";
  return t.onceError = r + " shouldn't be called more than once", t.called = !1, t;
}
once_1.strict = strict;
const logOnce = once_1((e) => console.warn(e));
class RequestError extends Error {
  constructor(t, r, n) {
    super(t);
    Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.name = "HttpError", this.status = r, Object.defineProperty(this, "code", {
      get() {
        return logOnce(new Deprecation("[@octokit/request-error] `error.code` is deprecated, use `error.status`.")), r;
      }
    }), this.headers = n.headers || {};
    const s = Object.assign({}, n.request);
    n.request.headers.authorization && (s.headers = Object.assign({}, n.request.headers, {
      authorization: n.request.headers.authorization.replace(/ .*$/, " [REDACTED]")
    })), s.url = s.url.replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]").replace(/\baccess_token=\w+/g, "access_token=[REDACTED]"), this.request = s;
  }
}
const VERSION$4 = "5.4.12";
function getBufferResponse(e) {
  return e.arrayBuffer();
}
function fetchWrapper(e) {
  (isPlainObject(e.body) || Array.isArray(e.body)) && (e.body = JSON.stringify(e.body));
  let t = {}, r, n;
  return (e.request && e.request.fetch || fetch)(e.url, Object.assign({
    method: e.method,
    body: e.body,
    headers: e.headers,
    redirect: e.redirect
  }, e.request)).then((o) => {
    n = o.url, r = o.status;
    for (const i of o.headers)
      t[i[0]] = i[1];
    if (r === 204 || r === 205)
      return;
    if (e.method === "HEAD") {
      if (r < 400)
        return;
      throw new RequestError(o.statusText, r, {
        headers: t,
        request: e
      });
    }
    if (r === 304)
      throw new RequestError("Not modified", r, {
        headers: t,
        request: e
      });
    if (r >= 400)
      return o.text().then((i) => {
        const u = new RequestError(i, r, {
          headers: t,
          request: e
        });
        try {
          let f = JSON.parse(u.message);
          Object.assign(u, f);
          let w = f.errors;
          u.message = u.message + ": " + w.map(JSON.stringify).join(", ");
        } catch (f) {
        }
        throw u;
      });
    const a = o.headers.get("content-type");
    return /application\/json/.test(a) ? o.json() : !a || /^text\/|charset=utf-8$/.test(a) ? o.text() : getBufferResponse(o);
  }).then((o) => ({
    status: r,
    url: n,
    headers: t,
    data: o
  })).catch((o) => {
    throw o instanceof RequestError ? o : new RequestError(o.message, 500, {
      headers: t,
      request: e
    });
  });
}
function withDefaults$1(e, t) {
  const r = e.defaults(t);
  return Object.assign(function(s, o) {
    const a = r.merge(s, o);
    if (!a.request || !a.request.hook)
      return fetchWrapper(r.parse(a));
    const i = (u, f) => fetchWrapper(r.parse(r.merge(u, f)));
    return Object.assign(i, {
      endpoint: r,
      defaults: withDefaults$1.bind(null, r)
    }), a.request.hook(i, a);
  }, {
    endpoint: r,
    defaults: withDefaults$1.bind(null, r)
  });
}
const request = withDefaults$1(endpoint, {
  headers: {
    "user-agent": `octokit-request.js/${VERSION$4} ${getUserAgent()}`
  }
}), VERSION$3 = "4.5.8";
class GraphqlError extends Error {
  constructor(t, r) {
    const n = r.data.errors[0].message;
    super(n);
    Object.assign(this, r.data), Object.assign(this, { headers: r.headers }), this.name = "GraphqlError", this.request = t, Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
}
const NON_VARIABLE_OPTIONS = [
  "method",
  "baseUrl",
  "url",
  "headers",
  "request",
  "query",
  "mediaType"
], GHES_V3_SUFFIX_REGEX = /\/api\/v3\/?$/;
function graphql(e, t, r) {
  if (typeof t == "string" && r && "query" in r)
    return Promise.reject(new Error('[@octokit/graphql] "query" cannot be used as variable name'));
  const n = typeof t == "string" ? Object.assign({ query: t }, r) : t, s = Object.keys(n).reduce((a, i) => NON_VARIABLE_OPTIONS.includes(i) ? (a[i] = n[i], a) : (a.variables || (a.variables = {}), a.variables[i] = n[i], a), {}), o = n.baseUrl || e.endpoint.DEFAULTS.baseUrl;
  return GHES_V3_SUFFIX_REGEX.test(o) && (s.url = o.replace(GHES_V3_SUFFIX_REGEX, "/api/graphql")), e(s).then((a) => {
    if (a.data.errors) {
      const i = {};
      for (const u of Object.keys(a.headers))
        i[u] = a.headers[u];
      throw new GraphqlError(s, {
        headers: i,
        data: a.data
      });
    }
    return a.data.data;
  });
}
function withDefaults(e, t) {
  const r = e.defaults(t);
  return Object.assign((s, o) => graphql(r, s, o), {
    defaults: withDefaults.bind(null, r),
    endpoint: request.endpoint
  });
}
withDefaults(request, {
  headers: {
    "user-agent": `octokit-graphql.js/${VERSION$3} ${getUserAgent()}`
  },
  method: "POST",
  url: "/graphql"
});
function withCustomRequest(e) {
  return withDefaults(e, {
    method: "POST",
    url: "/graphql"
  });
}
async function auth(e) {
  const t = e.split(/\./).length === 3 ? "app" : /^v\d+\./.test(e) ? "installation" : "oauth";
  return {
    type: "token",
    token: e,
    tokenType: t
  };
}
function withAuthorizationPrefix(e) {
  return e.split(/\./).length === 3 ? `bearer ${e}` : `token ${e}`;
}
async function hook(e, t, r, n) {
  const s = t.endpoint.merge(r, n);
  return s.headers.authorization = withAuthorizationPrefix(e), t(s);
}
const createTokenAuth = function(t) {
  if (!t)
    throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
  if (typeof t != "string")
    throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");
  return t = t.replace(/^(token|bearer) +/i, ""), Object.assign(auth.bind(null, t), {
    hook: hook.bind(null, t)
  });
}, VERSION$2 = "3.2.4";
class Octokit {
  constructor(t = {}) {
    const r = new Collection(), n = {
      baseUrl: request.endpoint.DEFAULTS.baseUrl,
      headers: {},
      request: Object.assign({}, t.request, {
        hook: r.bind(null, "request")
      }),
      mediaType: {
        previews: [],
        format: ""
      }
    };
    if (n.headers["user-agent"] = [
      t.userAgent,
      `octokit-core.js/${VERSION$2} ${getUserAgent()}`
    ].filter(Boolean).join(" "), t.baseUrl && (n.baseUrl = t.baseUrl), t.previews && (n.mediaType.previews = t.previews), t.timeZone && (n.headers["time-zone"] = t.timeZone), this.request = request.defaults(n), this.graphql = withCustomRequest(this.request).defaults(n), this.log = Object.assign({
      debug: () => {
      },
      info: () => {
      },
      warn: console.warn.bind(console),
      error: console.error.bind(console)
    }, t.log), this.hook = r, t.authStrategy) {
      const o = t, { authStrategy: a } = o, i = x(o, ["authStrategy"]), u = a(Object.assign({
        request: this.request,
        log: this.log,
        octokit: this,
        octokitOptions: i
      }, t.auth));
      r.wrap("request", u.hook), this.auth = u;
    } else if (!t.auth)
      this.auth = async () => ({
        type: "unauthenticated"
      });
    else {
      const a = createTokenAuth(t.auth);
      r.wrap("request", a.hook), this.auth = a;
    }
    this.constructor.plugins.forEach((a) => {
      Object.assign(this, a(this, t));
    });
  }
  static defaults(t) {
    return class extends this {
      constructor(...n) {
        const s = n[0] || {};
        if (typeof t == "function") {
          super(t(s));
          return;
        }
        super(Object.assign({}, t, s, s.userAgent && t.userAgent ? {
          userAgent: `${s.userAgent} ${t.userAgent}`
        } : null));
      }
    };
  }
  static plugin(...t) {
    var r;
    const n = this.plugins;
    return r = class extends this {
    }, r.plugins = n.concat(t.filter((o) => !n.includes(o))), r;
  }
}
Octokit.VERSION = VERSION$2, Octokit.plugins = [];
var distWeb$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Octokit
});
const Endpoints = {
  actions: {
    addSelectedRepoToOrgSecret: [
      "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"
    ],
    cancelWorkflowRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel"
    ],
    createOrUpdateOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}"],
    createOrUpdateRepoSecret: [
      "PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}"
    ],
    createRegistrationTokenForOrg: [
      "POST /orgs/{org}/actions/runners/registration-token"
    ],
    createRegistrationTokenForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/registration-token"
    ],
    createRemoveTokenForOrg: ["POST /orgs/{org}/actions/runners/remove-token"],
    createRemoveTokenForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/remove-token"
    ],
    createWorkflowDispatch: [
      "POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches"
    ],
    deleteArtifact: [
      "DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"
    ],
    deleteOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}"],
    deleteRepoSecret: [
      "DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}"
    ],
    deleteSelfHostedRunnerFromOrg: [
      "DELETE /orgs/{org}/actions/runners/{runner_id}"
    ],
    deleteSelfHostedRunnerFromRepo: [
      "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}"
    ],
    deleteWorkflowRun: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}"],
    deleteWorkflowRunLogs: [
      "DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs"
    ],
    disableSelectedRepositoryGithubActionsOrganization: [
      "DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}"
    ],
    disableWorkflow: [
      "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable"
    ],
    downloadArtifact: [
      "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}"
    ],
    downloadJobLogsForWorkflowRun: [
      "GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs"
    ],
    downloadWorkflowRunLogs: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs"
    ],
    enableSelectedRepositoryGithubActionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/repositories/{repository_id}"
    ],
    enableWorkflow: [
      "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable"
    ],
    getAllowedActionsOrganization: [
      "GET /orgs/{org}/actions/permissions/selected-actions"
    ],
    getAllowedActionsRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions/selected-actions"
    ],
    getArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],
    getGithubActionsPermissionsOrganization: [
      "GET /orgs/{org}/actions/permissions"
    ],
    getGithubActionsPermissionsRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions"
    ],
    getJobForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"],
    getOrgPublicKey: ["GET /orgs/{org}/actions/secrets/public-key"],
    getOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}"],
    getRepoPermissions: [
      "GET /repos/{owner}/{repo}/actions/permissions",
      {},
      { renamed: ["actions", "getGithubActionsPermissionsRepository"] }
    ],
    getRepoPublicKey: ["GET /repos/{owner}/{repo}/actions/secrets/public-key"],
    getRepoSecret: ["GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"],
    getSelfHostedRunnerForOrg: ["GET /orgs/{org}/actions/runners/{runner_id}"],
    getSelfHostedRunnerForRepo: [
      "GET /repos/{owner}/{repo}/actions/runners/{runner_id}"
    ],
    getWorkflow: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"],
    getWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}"],
    getWorkflowRunUsage: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing"
    ],
    getWorkflowUsage: [
      "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing"
    ],
    listArtifactsForRepo: ["GET /repos/{owner}/{repo}/actions/artifacts"],
    listJobsForWorkflowRun: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs"
    ],
    listOrgSecrets: ["GET /orgs/{org}/actions/secrets"],
    listRepoSecrets: ["GET /repos/{owner}/{repo}/actions/secrets"],
    listRepoWorkflows: ["GET /repos/{owner}/{repo}/actions/workflows"],
    listRunnerApplicationsForOrg: ["GET /orgs/{org}/actions/runners/downloads"],
    listRunnerApplicationsForRepo: [
      "GET /repos/{owner}/{repo}/actions/runners/downloads"
    ],
    listSelectedReposForOrgSecret: [
      "GET /orgs/{org}/actions/secrets/{secret_name}/repositories"
    ],
    listSelectedRepositoriesEnabledGithubActionsOrganization: [
      "GET /orgs/{org}/actions/permissions/repositories"
    ],
    listSelfHostedRunnersForOrg: ["GET /orgs/{org}/actions/runners"],
    listSelfHostedRunnersForRepo: ["GET /repos/{owner}/{repo}/actions/runners"],
    listWorkflowRunArtifacts: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts"
    ],
    listWorkflowRuns: [
      "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs"
    ],
    listWorkflowRunsForRepo: ["GET /repos/{owner}/{repo}/actions/runs"],
    reRunWorkflow: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun"],
    removeSelectedRepoFromOrgSecret: [
      "DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"
    ],
    setAllowedActionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/selected-actions"
    ],
    setAllowedActionsRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions/selected-actions"
    ],
    setGithubActionsPermissionsOrganization: [
      "PUT /orgs/{org}/actions/permissions"
    ],
    setGithubActionsPermissionsRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions"
    ],
    setSelectedReposForOrgSecret: [
      "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories"
    ],
    setSelectedRepositoriesEnabledGithubActionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/repositories"
    ]
  },
  activity: {
    checkRepoIsStarredByAuthenticatedUser: ["GET /user/starred/{owner}/{repo}"],
    deleteRepoSubscription: ["DELETE /repos/{owner}/{repo}/subscription"],
    deleteThreadSubscription: [
      "DELETE /notifications/threads/{thread_id}/subscription"
    ],
    getFeeds: ["GET /feeds"],
    getRepoSubscription: ["GET /repos/{owner}/{repo}/subscription"],
    getThread: ["GET /notifications/threads/{thread_id}"],
    getThreadSubscriptionForAuthenticatedUser: [
      "GET /notifications/threads/{thread_id}/subscription"
    ],
    listEventsForAuthenticatedUser: ["GET /users/{username}/events"],
    listNotificationsForAuthenticatedUser: ["GET /notifications"],
    listOrgEventsForAuthenticatedUser: [
      "GET /users/{username}/events/orgs/{org}"
    ],
    listPublicEvents: ["GET /events"],
    listPublicEventsForRepoNetwork: ["GET /networks/{owner}/{repo}/events"],
    listPublicEventsForUser: ["GET /users/{username}/events/public"],
    listPublicOrgEvents: ["GET /orgs/{org}/events"],
    listReceivedEventsForUser: ["GET /users/{username}/received_events"],
    listReceivedPublicEventsForUser: [
      "GET /users/{username}/received_events/public"
    ],
    listRepoEvents: ["GET /repos/{owner}/{repo}/events"],
    listRepoNotificationsForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/notifications"
    ],
    listReposStarredByAuthenticatedUser: ["GET /user/starred"],
    listReposStarredByUser: ["GET /users/{username}/starred"],
    listReposWatchedByUser: ["GET /users/{username}/subscriptions"],
    listStargazersForRepo: ["GET /repos/{owner}/{repo}/stargazers"],
    listWatchedReposForAuthenticatedUser: ["GET /user/subscriptions"],
    listWatchersForRepo: ["GET /repos/{owner}/{repo}/subscribers"],
    markNotificationsAsRead: ["PUT /notifications"],
    markRepoNotificationsAsRead: ["PUT /repos/{owner}/{repo}/notifications"],
    markThreadAsRead: ["PATCH /notifications/threads/{thread_id}"],
    setRepoSubscription: ["PUT /repos/{owner}/{repo}/subscription"],
    setThreadSubscription: [
      "PUT /notifications/threads/{thread_id}/subscription"
    ],
    starRepoForAuthenticatedUser: ["PUT /user/starred/{owner}/{repo}"],
    unstarRepoForAuthenticatedUser: ["DELETE /user/starred/{owner}/{repo}"]
  },
  apps: {
    addRepoToInstallation: [
      "PUT /user/installations/{installation_id}/repositories/{repository_id}"
    ],
    checkToken: ["POST /applications/{client_id}/token"],
    createContentAttachment: [
      "POST /content_references/{content_reference_id}/attachments",
      { mediaType: { previews: ["corsair"] } }
    ],
    createFromManifest: ["POST /app-manifests/{code}/conversions"],
    createInstallationAccessToken: [
      "POST /app/installations/{installation_id}/access_tokens"
    ],
    deleteAuthorization: ["DELETE /applications/{client_id}/grant"],
    deleteInstallation: ["DELETE /app/installations/{installation_id}"],
    deleteToken: ["DELETE /applications/{client_id}/token"],
    getAuthenticated: ["GET /app"],
    getBySlug: ["GET /apps/{app_slug}"],
    getInstallation: ["GET /app/installations/{installation_id}"],
    getOrgInstallation: ["GET /orgs/{org}/installation"],
    getRepoInstallation: ["GET /repos/{owner}/{repo}/installation"],
    getSubscriptionPlanForAccount: [
      "GET /marketplace_listing/accounts/{account_id}"
    ],
    getSubscriptionPlanForAccountStubbed: [
      "GET /marketplace_listing/stubbed/accounts/{account_id}"
    ],
    getUserInstallation: ["GET /users/{username}/installation"],
    getWebhookConfigForApp: ["GET /app/hook/config"],
    listAccountsForPlan: ["GET /marketplace_listing/plans/{plan_id}/accounts"],
    listAccountsForPlanStubbed: [
      "GET /marketplace_listing/stubbed/plans/{plan_id}/accounts"
    ],
    listInstallationReposForAuthenticatedUser: [
      "GET /user/installations/{installation_id}/repositories"
    ],
    listInstallations: ["GET /app/installations"],
    listInstallationsForAuthenticatedUser: ["GET /user/installations"],
    listPlans: ["GET /marketplace_listing/plans"],
    listPlansStubbed: ["GET /marketplace_listing/stubbed/plans"],
    listReposAccessibleToInstallation: ["GET /installation/repositories"],
    listSubscriptionsForAuthenticatedUser: ["GET /user/marketplace_purchases"],
    listSubscriptionsForAuthenticatedUserStubbed: [
      "GET /user/marketplace_purchases/stubbed"
    ],
    removeRepoFromInstallation: [
      "DELETE /user/installations/{installation_id}/repositories/{repository_id}"
    ],
    resetToken: ["PATCH /applications/{client_id}/token"],
    revokeInstallationAccessToken: ["DELETE /installation/token"],
    suspendInstallation: ["PUT /app/installations/{installation_id}/suspended"],
    unsuspendInstallation: [
      "DELETE /app/installations/{installation_id}/suspended"
    ],
    updateWebhookConfigForApp: ["PATCH /app/hook/config"]
  },
  billing: {
    getGithubActionsBillingOrg: ["GET /orgs/{org}/settings/billing/actions"],
    getGithubActionsBillingUser: [
      "GET /users/{username}/settings/billing/actions"
    ],
    getGithubPackagesBillingOrg: ["GET /orgs/{org}/settings/billing/packages"],
    getGithubPackagesBillingUser: [
      "GET /users/{username}/settings/billing/packages"
    ],
    getSharedStorageBillingOrg: [
      "GET /orgs/{org}/settings/billing/shared-storage"
    ],
    getSharedStorageBillingUser: [
      "GET /users/{username}/settings/billing/shared-storage"
    ]
  },
  checks: {
    create: ["POST /repos/{owner}/{repo}/check-runs"],
    createSuite: ["POST /repos/{owner}/{repo}/check-suites"],
    get: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}"],
    getSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"],
    listAnnotations: [
      "GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations"
    ],
    listForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-runs"],
    listForSuite: [
      "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs"
    ],
    listSuitesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-suites"],
    rerequestSuite: [
      "POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest"
    ],
    setSuitesPreferences: [
      "PATCH /repos/{owner}/{repo}/check-suites/preferences"
    ],
    update: ["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"]
  },
  codeScanning: {
    getAlert: [
      "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}",
      {},
      { renamedParameters: { alert_id: "alert_number" } }
    ],
    listAlertsForRepo: ["GET /repos/{owner}/{repo}/code-scanning/alerts"],
    listRecentAnalyses: ["GET /repos/{owner}/{repo}/code-scanning/analyses"],
    updateAlert: [
      "PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}"
    ],
    uploadSarif: ["POST /repos/{owner}/{repo}/code-scanning/sarifs"]
  },
  codesOfConduct: {
    getAllCodesOfConduct: [
      "GET /codes_of_conduct",
      { mediaType: { previews: ["scarlet-witch"] } }
    ],
    getConductCode: [
      "GET /codes_of_conduct/{key}",
      { mediaType: { previews: ["scarlet-witch"] } }
    ],
    getForRepo: [
      "GET /repos/{owner}/{repo}/community/code_of_conduct",
      { mediaType: { previews: ["scarlet-witch"] } }
    ]
  },
  emojis: { get: ["GET /emojis"] },
  enterpriseAdmin: {
    disableSelectedOrganizationGithubActionsEnterprise: [
      "DELETE /enterprises/{enterprise}/actions/permissions/organizations/{org_id}"
    ],
    enableSelectedOrganizationGithubActionsEnterprise: [
      "PUT /enterprises/{enterprise}/actions/permissions/organizations/{org_id}"
    ],
    getAllowedActionsEnterprise: [
      "GET /enterprises/{enterprise}/actions/permissions/selected-actions"
    ],
    getGithubActionsPermissionsEnterprise: [
      "GET /enterprises/{enterprise}/actions/permissions"
    ],
    listSelectedOrganizationsEnabledGithubActionsEnterprise: [
      "GET /enterprises/{enterprise}/actions/permissions/organizations"
    ],
    setAllowedActionsEnterprise: [
      "PUT /enterprises/{enterprise}/actions/permissions/selected-actions"
    ],
    setGithubActionsPermissionsEnterprise: [
      "PUT /enterprises/{enterprise}/actions/permissions"
    ],
    setSelectedOrganizationsEnabledGithubActionsEnterprise: [
      "PUT /enterprises/{enterprise}/actions/permissions/organizations"
    ]
  },
  gists: {
    checkIsStarred: ["GET /gists/{gist_id}/star"],
    create: ["POST /gists"],
    createComment: ["POST /gists/{gist_id}/comments"],
    delete: ["DELETE /gists/{gist_id}"],
    deleteComment: ["DELETE /gists/{gist_id}/comments/{comment_id}"],
    fork: ["POST /gists/{gist_id}/forks"],
    get: ["GET /gists/{gist_id}"],
    getComment: ["GET /gists/{gist_id}/comments/{comment_id}"],
    getRevision: ["GET /gists/{gist_id}/{sha}"],
    list: ["GET /gists"],
    listComments: ["GET /gists/{gist_id}/comments"],
    listCommits: ["GET /gists/{gist_id}/commits"],
    listForUser: ["GET /users/{username}/gists"],
    listForks: ["GET /gists/{gist_id}/forks"],
    listPublic: ["GET /gists/public"],
    listStarred: ["GET /gists/starred"],
    star: ["PUT /gists/{gist_id}/star"],
    unstar: ["DELETE /gists/{gist_id}/star"],
    update: ["PATCH /gists/{gist_id}"],
    updateComment: ["PATCH /gists/{gist_id}/comments/{comment_id}"]
  },
  git: {
    createBlob: ["POST /repos/{owner}/{repo}/git/blobs"],
    createCommit: ["POST /repos/{owner}/{repo}/git/commits"],
    createRef: ["POST /repos/{owner}/{repo}/git/refs"],
    createTag: ["POST /repos/{owner}/{repo}/git/tags"],
    createTree: ["POST /repos/{owner}/{repo}/git/trees"],
    deleteRef: ["DELETE /repos/{owner}/{repo}/git/refs/{ref}"],
    getBlob: ["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"],
    getCommit: ["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"],
    getRef: ["GET /repos/{owner}/{repo}/git/ref/{ref}"],
    getTag: ["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"],
    getTree: ["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"],
    listMatchingRefs: ["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"],
    updateRef: ["PATCH /repos/{owner}/{repo}/git/refs/{ref}"]
  },
  gitignore: {
    getAllTemplates: ["GET /gitignore/templates"],
    getTemplate: ["GET /gitignore/templates/{name}"]
  },
  interactions: {
    getRestrictionsForOrg: ["GET /orgs/{org}/interaction-limits"],
    getRestrictionsForRepo: ["GET /repos/{owner}/{repo}/interaction-limits"],
    getRestrictionsForYourPublicRepos: ["GET /user/interaction-limits"],
    removeRestrictionsForOrg: ["DELETE /orgs/{org}/interaction-limits"],
    removeRestrictionsForRepo: [
      "DELETE /repos/{owner}/{repo}/interaction-limits"
    ],
    removeRestrictionsForYourPublicRepos: ["DELETE /user/interaction-limits"],
    setRestrictionsForOrg: ["PUT /orgs/{org}/interaction-limits"],
    setRestrictionsForRepo: ["PUT /repos/{owner}/{repo}/interaction-limits"],
    setRestrictionsForYourPublicRepos: ["PUT /user/interaction-limits"]
  },
  issues: {
    addAssignees: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/assignees"
    ],
    addLabels: ["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    checkUserCanBeAssigned: ["GET /repos/{owner}/{repo}/assignees/{assignee}"],
    create: ["POST /repos/{owner}/{repo}/issues"],
    createComment: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/comments"
    ],
    createLabel: ["POST /repos/{owner}/{repo}/labels"],
    createMilestone: ["POST /repos/{owner}/{repo}/milestones"],
    deleteComment: [
      "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}"
    ],
    deleteLabel: ["DELETE /repos/{owner}/{repo}/labels/{name}"],
    deleteMilestone: [
      "DELETE /repos/{owner}/{repo}/milestones/{milestone_number}"
    ],
    get: ["GET /repos/{owner}/{repo}/issues/{issue_number}"],
    getComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"],
    getEvent: ["GET /repos/{owner}/{repo}/issues/events/{event_id}"],
    getLabel: ["GET /repos/{owner}/{repo}/labels/{name}"],
    getMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}"],
    list: ["GET /issues"],
    listAssignees: ["GET /repos/{owner}/{repo}/assignees"],
    listComments: ["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"],
    listCommentsForRepo: ["GET /repos/{owner}/{repo}/issues/comments"],
    listEvents: ["GET /repos/{owner}/{repo}/issues/{issue_number}/events"],
    listEventsForRepo: ["GET /repos/{owner}/{repo}/issues/events"],
    listEventsForTimeline: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/timeline",
      { mediaType: { previews: ["mockingbird"] } }
    ],
    listForAuthenticatedUser: ["GET /user/issues"],
    listForOrg: ["GET /orgs/{org}/issues"],
    listForRepo: ["GET /repos/{owner}/{repo}/issues"],
    listLabelsForMilestone: [
      "GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels"
    ],
    listLabelsForRepo: ["GET /repos/{owner}/{repo}/labels"],
    listLabelsOnIssue: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/labels"
    ],
    listMilestones: ["GET /repos/{owner}/{repo}/milestones"],
    lock: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"],
    removeAllLabels: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels"
    ],
    removeAssignees: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees"
    ],
    removeLabel: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}"
    ],
    setLabels: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    unlock: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"],
    update: ["PATCH /repos/{owner}/{repo}/issues/{issue_number}"],
    updateComment: ["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"],
    updateLabel: ["PATCH /repos/{owner}/{repo}/labels/{name}"],
    updateMilestone: [
      "PATCH /repos/{owner}/{repo}/milestones/{milestone_number}"
    ]
  },
  licenses: {
    get: ["GET /licenses/{license}"],
    getAllCommonlyUsed: ["GET /licenses"],
    getForRepo: ["GET /repos/{owner}/{repo}/license"]
  },
  markdown: {
    render: ["POST /markdown"],
    renderRaw: [
      "POST /markdown/raw",
      { headers: { "content-type": "text/plain; charset=utf-8" } }
    ]
  },
  meta: {
    get: ["GET /meta"],
    getOctocat: ["GET /octocat"],
    getZen: ["GET /zen"],
    root: ["GET /"]
  },
  migrations: {
    cancelImport: ["DELETE /repos/{owner}/{repo}/import"],
    deleteArchiveForAuthenticatedUser: [
      "DELETE /user/migrations/{migration_id}/archive",
      { mediaType: { previews: ["wyandotte"] } }
    ],
    deleteArchiveForOrg: [
      "DELETE /orgs/{org}/migrations/{migration_id}/archive",
      { mediaType: { previews: ["wyandotte"] } }
    ],
    downloadArchiveForOrg: [
      "GET /orgs/{org}/migrations/{migration_id}/archive",
      { mediaType: { previews: ["wyandotte"] } }
    ],
    getArchiveForAuthenticatedUser: [
      "GET /user/migrations/{migration_id}/archive",
      { mediaType: { previews: ["wyandotte"] } }
    ],
    getCommitAuthors: ["GET /repos/{owner}/{repo}/import/authors"],
    getImportStatus: ["GET /repos/{owner}/{repo}/import"],
    getLargeFiles: ["GET /repos/{owner}/{repo}/import/large_files"],
    getStatusForAuthenticatedUser: [
      "GET /user/migrations/{migration_id}",
      { mediaType: { previews: ["wyandotte"] } }
    ],
    getStatusForOrg: [
      "GET /orgs/{org}/migrations/{migration_id}",
      { mediaType: { previews: ["wyandotte"] } }
    ],
    listForAuthenticatedUser: [
      "GET /user/migrations",
      { mediaType: { previews: ["wyandotte"] } }
    ],
    listForOrg: [
      "GET /orgs/{org}/migrations",
      { mediaType: { previews: ["wyandotte"] } }
    ],
    listReposForOrg: [
      "GET /orgs/{org}/migrations/{migration_id}/repositories",
      { mediaType: { previews: ["wyandotte"] } }
    ],
    listReposForUser: [
      "GET /user/migrations/{migration_id}/repositories",
      { mediaType: { previews: ["wyandotte"] } }
    ],
    mapCommitAuthor: ["PATCH /repos/{owner}/{repo}/import/authors/{author_id}"],
    setLfsPreference: ["PATCH /repos/{owner}/{repo}/import/lfs"],
    startForAuthenticatedUser: ["POST /user/migrations"],
    startForOrg: ["POST /orgs/{org}/migrations"],
    startImport: ["PUT /repos/{owner}/{repo}/import"],
    unlockRepoForAuthenticatedUser: [
      "DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock",
      { mediaType: { previews: ["wyandotte"] } }
    ],
    unlockRepoForOrg: [
      "DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock",
      { mediaType: { previews: ["wyandotte"] } }
    ],
    updateImport: ["PATCH /repos/{owner}/{repo}/import"]
  },
  orgs: {
    blockUser: ["PUT /orgs/{org}/blocks/{username}"],
    checkBlockedUser: ["GET /orgs/{org}/blocks/{username}"],
    checkMembershipForUser: ["GET /orgs/{org}/members/{username}"],
    checkPublicMembershipForUser: ["GET /orgs/{org}/public_members/{username}"],
    convertMemberToOutsideCollaborator: [
      "PUT /orgs/{org}/outside_collaborators/{username}"
    ],
    createInvitation: ["POST /orgs/{org}/invitations"],
    createWebhook: ["POST /orgs/{org}/hooks"],
    deleteWebhook: ["DELETE /orgs/{org}/hooks/{hook_id}"],
    get: ["GET /orgs/{org}"],
    getMembershipForAuthenticatedUser: ["GET /user/memberships/orgs/{org}"],
    getMembershipForUser: ["GET /orgs/{org}/memberships/{username}"],
    getWebhook: ["GET /orgs/{org}/hooks/{hook_id}"],
    getWebhookConfigForOrg: ["GET /orgs/{org}/hooks/{hook_id}/config"],
    list: ["GET /organizations"],
    listAppInstallations: ["GET /orgs/{org}/installations"],
    listBlockedUsers: ["GET /orgs/{org}/blocks"],
    listForAuthenticatedUser: ["GET /user/orgs"],
    listForUser: ["GET /users/{username}/orgs"],
    listInvitationTeams: ["GET /orgs/{org}/invitations/{invitation_id}/teams"],
    listMembers: ["GET /orgs/{org}/members"],
    listMembershipsForAuthenticatedUser: ["GET /user/memberships/orgs"],
    listOutsideCollaborators: ["GET /orgs/{org}/outside_collaborators"],
    listPendingInvitations: ["GET /orgs/{org}/invitations"],
    listPublicMembers: ["GET /orgs/{org}/public_members"],
    listWebhooks: ["GET /orgs/{org}/hooks"],
    pingWebhook: ["POST /orgs/{org}/hooks/{hook_id}/pings"],
    removeMember: ["DELETE /orgs/{org}/members/{username}"],
    removeMembershipForUser: ["DELETE /orgs/{org}/memberships/{username}"],
    removeOutsideCollaborator: [
      "DELETE /orgs/{org}/outside_collaborators/{username}"
    ],
    removePublicMembershipForAuthenticatedUser: [
      "DELETE /orgs/{org}/public_members/{username}"
    ],
    setMembershipForUser: ["PUT /orgs/{org}/memberships/{username}"],
    setPublicMembershipForAuthenticatedUser: [
      "PUT /orgs/{org}/public_members/{username}"
    ],
    unblockUser: ["DELETE /orgs/{org}/blocks/{username}"],
    update: ["PATCH /orgs/{org}"],
    updateMembershipForAuthenticatedUser: [
      "PATCH /user/memberships/orgs/{org}"
    ],
    updateWebhook: ["PATCH /orgs/{org}/hooks/{hook_id}"],
    updateWebhookConfigForOrg: ["PATCH /orgs/{org}/hooks/{hook_id}/config"]
  },
  projects: {
    addCollaborator: [
      "PUT /projects/{project_id}/collaborators/{username}",
      { mediaType: { previews: ["inertia"] } }
    ],
    createCard: [
      "POST /projects/columns/{column_id}/cards",
      { mediaType: { previews: ["inertia"] } }
    ],
    createColumn: [
      "POST /projects/{project_id}/columns",
      { mediaType: { previews: ["inertia"] } }
    ],
    createForAuthenticatedUser: [
      "POST /user/projects",
      { mediaType: { previews: ["inertia"] } }
    ],
    createForOrg: [
      "POST /orgs/{org}/projects",
      { mediaType: { previews: ["inertia"] } }
    ],
    createForRepo: [
      "POST /repos/{owner}/{repo}/projects",
      { mediaType: { previews: ["inertia"] } }
    ],
    delete: [
      "DELETE /projects/{project_id}",
      { mediaType: { previews: ["inertia"] } }
    ],
    deleteCard: [
      "DELETE /projects/columns/cards/{card_id}",
      { mediaType: { previews: ["inertia"] } }
    ],
    deleteColumn: [
      "DELETE /projects/columns/{column_id}",
      { mediaType: { previews: ["inertia"] } }
    ],
    get: [
      "GET /projects/{project_id}",
      { mediaType: { previews: ["inertia"] } }
    ],
    getCard: [
      "GET /projects/columns/cards/{card_id}",
      { mediaType: { previews: ["inertia"] } }
    ],
    getColumn: [
      "GET /projects/columns/{column_id}",
      { mediaType: { previews: ["inertia"] } }
    ],
    getPermissionForUser: [
      "GET /projects/{project_id}/collaborators/{username}/permission",
      { mediaType: { previews: ["inertia"] } }
    ],
    listCards: [
      "GET /projects/columns/{column_id}/cards",
      { mediaType: { previews: ["inertia"] } }
    ],
    listCollaborators: [
      "GET /projects/{project_id}/collaborators",
      { mediaType: { previews: ["inertia"] } }
    ],
    listColumns: [
      "GET /projects/{project_id}/columns",
      { mediaType: { previews: ["inertia"] } }
    ],
    listForOrg: [
      "GET /orgs/{org}/projects",
      { mediaType: { previews: ["inertia"] } }
    ],
    listForRepo: [
      "GET /repos/{owner}/{repo}/projects",
      { mediaType: { previews: ["inertia"] } }
    ],
    listForUser: [
      "GET /users/{username}/projects",
      { mediaType: { previews: ["inertia"] } }
    ],
    moveCard: [
      "POST /projects/columns/cards/{card_id}/moves",
      { mediaType: { previews: ["inertia"] } }
    ],
    moveColumn: [
      "POST /projects/columns/{column_id}/moves",
      { mediaType: { previews: ["inertia"] } }
    ],
    removeCollaborator: [
      "DELETE /projects/{project_id}/collaborators/{username}",
      { mediaType: { previews: ["inertia"] } }
    ],
    update: [
      "PATCH /projects/{project_id}",
      { mediaType: { previews: ["inertia"] } }
    ],
    updateCard: [
      "PATCH /projects/columns/cards/{card_id}",
      { mediaType: { previews: ["inertia"] } }
    ],
    updateColumn: [
      "PATCH /projects/columns/{column_id}",
      { mediaType: { previews: ["inertia"] } }
    ]
  },
  pulls: {
    checkIfMerged: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
    create: ["POST /repos/{owner}/{repo}/pulls"],
    createReplyForReviewComment: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies"
    ],
    createReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
    createReviewComment: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments"
    ],
    deletePendingReview: [
      "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"
    ],
    deleteReviewComment: [
      "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}"
    ],
    dismissReview: [
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals"
    ],
    get: ["GET /repos/{owner}/{repo}/pulls/{pull_number}"],
    getReview: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"
    ],
    getReviewComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"],
    list: ["GET /repos/{owner}/{repo}/pulls"],
    listCommentsForReview: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments"
    ],
    listCommits: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"],
    listFiles: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"],
    listRequestedReviewers: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
    ],
    listReviewComments: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/comments"
    ],
    listReviewCommentsForRepo: ["GET /repos/{owner}/{repo}/pulls/comments"],
    listReviews: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
    merge: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
    removeRequestedReviewers: [
      "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
    ],
    requestReviewers: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
    ],
    submitReview: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events"
    ],
    update: ["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"],
    updateBranch: [
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch",
      { mediaType: { previews: ["lydian"] } }
    ],
    updateReview: [
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"
    ],
    updateReviewComment: [
      "PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}"
    ]
  },
  rateLimit: { get: ["GET /rate_limit"] },
  reactions: {
    createForCommitComment: [
      "POST /repos/{owner}/{repo}/comments/{comment_id}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } }
    ],
    createForIssue: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } }
    ],
    createForIssueComment: [
      "POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } }
    ],
    createForPullRequestReviewComment: [
      "POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } }
    ],
    createForTeamDiscussionCommentInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } }
    ],
    createForTeamDiscussionInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } }
    ],
    deleteForCommitComment: [
      "DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}",
      { mediaType: { previews: ["squirrel-girl"] } }
    ],
    deleteForIssue: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}",
      { mediaType: { previews: ["squirrel-girl"] } }
    ],
    deleteForIssueComment: [
      "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}",
      { mediaType: { previews: ["squirrel-girl"] } }
    ],
    deleteForPullRequestComment: [
      "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}",
      { mediaType: { previews: ["squirrel-girl"] } }
    ],
    deleteForTeamDiscussion: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}",
      { mediaType: { previews: ["squirrel-girl"] } }
    ],
    deleteForTeamDiscussionComment: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}",
      { mediaType: { previews: ["squirrel-girl"] } }
    ],
    deleteLegacy: [
      "DELETE /reactions/{reaction_id}",
      { mediaType: { previews: ["squirrel-girl"] } },
      {
        deprecated: "octokit.reactions.deleteLegacy() is deprecated, see https://docs.github.com/v3/reactions/#delete-a-reaction-legacy"
      }
    ],
    listForCommitComment: [
      "GET /repos/{owner}/{repo}/comments/{comment_id}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } }
    ],
    listForIssue: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } }
    ],
    listForIssueComment: [
      "GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } }
    ],
    listForPullRequestReviewComment: [
      "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } }
    ],
    listForTeamDiscussionCommentInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } }
    ],
    listForTeamDiscussionInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } }
    ]
  },
  repos: {
    acceptInvitation: ["PATCH /user/repository_invitations/{invitation_id}"],
    addAppAccessRestrictions: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
      {},
      { mapToData: "apps" }
    ],
    addCollaborator: ["PUT /repos/{owner}/{repo}/collaborators/{username}"],
    addStatusCheckContexts: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
      {},
      { mapToData: "contexts" }
    ],
    addTeamAccessRestrictions: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
      {},
      { mapToData: "teams" }
    ],
    addUserAccessRestrictions: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
      {},
      { mapToData: "users" }
    ],
    checkCollaborator: ["GET /repos/{owner}/{repo}/collaborators/{username}"],
    checkVulnerabilityAlerts: [
      "GET /repos/{owner}/{repo}/vulnerability-alerts",
      { mediaType: { previews: ["dorian"] } }
    ],
    compareCommits: ["GET /repos/{owner}/{repo}/compare/{base}...{head}"],
    createCommitComment: [
      "POST /repos/{owner}/{repo}/commits/{commit_sha}/comments"
    ],
    createCommitSignatureProtection: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
      { mediaType: { previews: ["zzzax"] } }
    ],
    createCommitStatus: ["POST /repos/{owner}/{repo}/statuses/{sha}"],
    createDeployKey: ["POST /repos/{owner}/{repo}/keys"],
    createDeployment: ["POST /repos/{owner}/{repo}/deployments"],
    createDeploymentStatus: [
      "POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"
    ],
    createDispatchEvent: ["POST /repos/{owner}/{repo}/dispatches"],
    createForAuthenticatedUser: ["POST /user/repos"],
    createFork: ["POST /repos/{owner}/{repo}/forks"],
    createInOrg: ["POST /orgs/{org}/repos"],
    createOrUpdateFileContents: ["PUT /repos/{owner}/{repo}/contents/{path}"],
    createPagesSite: [
      "POST /repos/{owner}/{repo}/pages",
      { mediaType: { previews: ["switcheroo"] } }
    ],
    createRelease: ["POST /repos/{owner}/{repo}/releases"],
    createUsingTemplate: [
      "POST /repos/{template_owner}/{template_repo}/generate",
      { mediaType: { previews: ["baptiste"] } }
    ],
    createWebhook: ["POST /repos/{owner}/{repo}/hooks"],
    declineInvitation: ["DELETE /user/repository_invitations/{invitation_id}"],
    delete: ["DELETE /repos/{owner}/{repo}"],
    deleteAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"
    ],
    deleteAdminBranchProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
    ],
    deleteBranchProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection"
    ],
    deleteCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}"],
    deleteCommitSignatureProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
      { mediaType: { previews: ["zzzax"] } }
    ],
    deleteDeployKey: ["DELETE /repos/{owner}/{repo}/keys/{key_id}"],
    deleteDeployment: [
      "DELETE /repos/{owner}/{repo}/deployments/{deployment_id}"
    ],
    deleteFile: ["DELETE /repos/{owner}/{repo}/contents/{path}"],
    deleteInvitation: [
      "DELETE /repos/{owner}/{repo}/invitations/{invitation_id}"
    ],
    deletePagesSite: [
      "DELETE /repos/{owner}/{repo}/pages",
      { mediaType: { previews: ["switcheroo"] } }
    ],
    deletePullRequestReviewProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
    ],
    deleteRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}"],
    deleteReleaseAsset: [
      "DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}"
    ],
    deleteWebhook: ["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"],
    disableAutomatedSecurityFixes: [
      "DELETE /repos/{owner}/{repo}/automated-security-fixes",
      { mediaType: { previews: ["london"] } }
    ],
    disableVulnerabilityAlerts: [
      "DELETE /repos/{owner}/{repo}/vulnerability-alerts",
      { mediaType: { previews: ["dorian"] } }
    ],
    downloadArchive: [
      "GET /repos/{owner}/{repo}/zipball/{ref}",
      {},
      { renamed: ["repos", "downloadZipballArchive"] }
    ],
    downloadTarballArchive: ["GET /repos/{owner}/{repo}/tarball/{ref}"],
    downloadZipballArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}"],
    enableAutomatedSecurityFixes: [
      "PUT /repos/{owner}/{repo}/automated-security-fixes",
      { mediaType: { previews: ["london"] } }
    ],
    enableVulnerabilityAlerts: [
      "PUT /repos/{owner}/{repo}/vulnerability-alerts",
      { mediaType: { previews: ["dorian"] } }
    ],
    get: ["GET /repos/{owner}/{repo}"],
    getAccessRestrictions: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"
    ],
    getAdminBranchProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
    ],
    getAllStatusCheckContexts: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"
    ],
    getAllTopics: [
      "GET /repos/{owner}/{repo}/topics",
      { mediaType: { previews: ["mercy"] } }
    ],
    getAppsWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"
    ],
    getBranch: ["GET /repos/{owner}/{repo}/branches/{branch}"],
    getBranchProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection"
    ],
    getClones: ["GET /repos/{owner}/{repo}/traffic/clones"],
    getCodeFrequencyStats: ["GET /repos/{owner}/{repo}/stats/code_frequency"],
    getCollaboratorPermissionLevel: [
      "GET /repos/{owner}/{repo}/collaborators/{username}/permission"
    ],
    getCombinedStatusForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/status"],
    getCommit: ["GET /repos/{owner}/{repo}/commits/{ref}"],
    getCommitActivityStats: ["GET /repos/{owner}/{repo}/stats/commit_activity"],
    getCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}"],
    getCommitSignatureProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
      { mediaType: { previews: ["zzzax"] } }
    ],
    getCommunityProfileMetrics: ["GET /repos/{owner}/{repo}/community/profile"],
    getContent: ["GET /repos/{owner}/{repo}/contents/{path}"],
    getContributorsStats: ["GET /repos/{owner}/{repo}/stats/contributors"],
    getDeployKey: ["GET /repos/{owner}/{repo}/keys/{key_id}"],
    getDeployment: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}"],
    getDeploymentStatus: [
      "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}"
    ],
    getLatestPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/latest"],
    getLatestRelease: ["GET /repos/{owner}/{repo}/releases/latest"],
    getPages: ["GET /repos/{owner}/{repo}/pages"],
    getPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/{build_id}"],
    getParticipationStats: ["GET /repos/{owner}/{repo}/stats/participation"],
    getPullRequestReviewProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
    ],
    getPunchCardStats: ["GET /repos/{owner}/{repo}/stats/punch_card"],
    getReadme: ["GET /repos/{owner}/{repo}/readme"],
    getRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}"],
    getReleaseAsset: ["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"],
    getReleaseByTag: ["GET /repos/{owner}/{repo}/releases/tags/{tag}"],
    getStatusChecksProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
    ],
    getTeamsWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"
    ],
    getTopPaths: ["GET /repos/{owner}/{repo}/traffic/popular/paths"],
    getTopReferrers: ["GET /repos/{owner}/{repo}/traffic/popular/referrers"],
    getUsersWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"
    ],
    getViews: ["GET /repos/{owner}/{repo}/traffic/views"],
    getWebhook: ["GET /repos/{owner}/{repo}/hooks/{hook_id}"],
    getWebhookConfigForRepo: [
      "GET /repos/{owner}/{repo}/hooks/{hook_id}/config"
    ],
    listBranches: ["GET /repos/{owner}/{repo}/branches"],
    listBranchesForHeadCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head",
      { mediaType: { previews: ["groot"] } }
    ],
    listCollaborators: ["GET /repos/{owner}/{repo}/collaborators"],
    listCommentsForCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/comments"
    ],
    listCommitCommentsForRepo: ["GET /repos/{owner}/{repo}/comments"],
    listCommitStatusesForRef: [
      "GET /repos/{owner}/{repo}/commits/{ref}/statuses"
    ],
    listCommits: ["GET /repos/{owner}/{repo}/commits"],
    listContributors: ["GET /repos/{owner}/{repo}/contributors"],
    listDeployKeys: ["GET /repos/{owner}/{repo}/keys"],
    listDeploymentStatuses: [
      "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"
    ],
    listDeployments: ["GET /repos/{owner}/{repo}/deployments"],
    listForAuthenticatedUser: ["GET /user/repos"],
    listForOrg: ["GET /orgs/{org}/repos"],
    listForUser: ["GET /users/{username}/repos"],
    listForks: ["GET /repos/{owner}/{repo}/forks"],
    listInvitations: ["GET /repos/{owner}/{repo}/invitations"],
    listInvitationsForAuthenticatedUser: ["GET /user/repository_invitations"],
    listLanguages: ["GET /repos/{owner}/{repo}/languages"],
    listPagesBuilds: ["GET /repos/{owner}/{repo}/pages/builds"],
    listPublic: ["GET /repositories"],
    listPullRequestsAssociatedWithCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls",
      { mediaType: { previews: ["groot"] } }
    ],
    listReleaseAssets: [
      "GET /repos/{owner}/{repo}/releases/{release_id}/assets"
    ],
    listReleases: ["GET /repos/{owner}/{repo}/releases"],
    listTags: ["GET /repos/{owner}/{repo}/tags"],
    listTeams: ["GET /repos/{owner}/{repo}/teams"],
    listWebhooks: ["GET /repos/{owner}/{repo}/hooks"],
    merge: ["POST /repos/{owner}/{repo}/merges"],
    pingWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"],
    removeAppAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
      {},
      { mapToData: "apps" }
    ],
    removeCollaborator: [
      "DELETE /repos/{owner}/{repo}/collaborators/{username}"
    ],
    removeStatusCheckContexts: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
      {},
      { mapToData: "contexts" }
    ],
    removeStatusCheckProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
    ],
    removeTeamAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
      {},
      { mapToData: "teams" }
    ],
    removeUserAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
      {},
      { mapToData: "users" }
    ],
    replaceAllTopics: [
      "PUT /repos/{owner}/{repo}/topics",
      { mediaType: { previews: ["mercy"] } }
    ],
    requestPagesBuild: ["POST /repos/{owner}/{repo}/pages/builds"],
    setAdminBranchProtection: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
    ],
    setAppAccessRestrictions: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
      {},
      { mapToData: "apps" }
    ],
    setStatusCheckContexts: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
      {},
      { mapToData: "contexts" }
    ],
    setTeamAccessRestrictions: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
      {},
      { mapToData: "teams" }
    ],
    setUserAccessRestrictions: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
      {},
      { mapToData: "users" }
    ],
    testPushWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"],
    transfer: ["POST /repos/{owner}/{repo}/transfer"],
    update: ["PATCH /repos/{owner}/{repo}"],
    updateBranchProtection: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection"
    ],
    updateCommitComment: ["PATCH /repos/{owner}/{repo}/comments/{comment_id}"],
    updateInformationAboutPagesSite: ["PUT /repos/{owner}/{repo}/pages"],
    updateInvitation: [
      "PATCH /repos/{owner}/{repo}/invitations/{invitation_id}"
    ],
    updatePullRequestReviewProtection: [
      "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
    ],
    updateRelease: ["PATCH /repos/{owner}/{repo}/releases/{release_id}"],
    updateReleaseAsset: [
      "PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}"
    ],
    updateStatusCheckPotection: [
      "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
      {},
      { renamed: ["repos", "updateStatusCheckProtection"] }
    ],
    updateStatusCheckProtection: [
      "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
    ],
    updateWebhook: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"],
    updateWebhookConfigForRepo: [
      "PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config"
    ],
    uploadReleaseAsset: [
      "POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}",
      { baseUrl: "https://uploads.github.com" }
    ]
  },
  search: {
    code: ["GET /search/code"],
    commits: ["GET /search/commits", { mediaType: { previews: ["cloak"] } }],
    issuesAndPullRequests: ["GET /search/issues"],
    labels: ["GET /search/labels"],
    repos: ["GET /search/repositories"],
    topics: ["GET /search/topics", { mediaType: { previews: ["mercy"] } }],
    users: ["GET /search/users"]
  },
  secretScanning: {
    getAlert: [
      "GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"
    ],
    listAlertsForRepo: ["GET /repos/{owner}/{repo}/secret-scanning/alerts"],
    updateAlert: [
      "PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"
    ]
  },
  teams: {
    addOrUpdateMembershipForUserInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/memberships/{username}"
    ],
    addOrUpdateProjectPermissionsInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}",
      { mediaType: { previews: ["inertia"] } }
    ],
    addOrUpdateRepoPermissionsInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"
    ],
    checkPermissionsForProjectInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/projects/{project_id}",
      { mediaType: { previews: ["inertia"] } }
    ],
    checkPermissionsForRepoInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"
    ],
    create: ["POST /orgs/{org}/teams"],
    createDiscussionCommentInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"
    ],
    createDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions"],
    deleteDiscussionCommentInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
    ],
    deleteDiscussionInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
    ],
    deleteInOrg: ["DELETE /orgs/{org}/teams/{team_slug}"],
    getByName: ["GET /orgs/{org}/teams/{team_slug}"],
    getDiscussionCommentInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
    ],
    getDiscussionInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
    ],
    getMembershipForUserInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/memberships/{username}"
    ],
    list: ["GET /orgs/{org}/teams"],
    listChildInOrg: ["GET /orgs/{org}/teams/{team_slug}/teams"],
    listDiscussionCommentsInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"
    ],
    listDiscussionsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions"],
    listForAuthenticatedUser: ["GET /user/teams"],
    listMembersInOrg: ["GET /orgs/{org}/teams/{team_slug}/members"],
    listPendingInvitationsInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/invitations"
    ],
    listProjectsInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/projects",
      { mediaType: { previews: ["inertia"] } }
    ],
    listReposInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos"],
    removeMembershipForUserInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}"
    ],
    removeProjectInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}"
    ],
    removeRepoInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"
    ],
    updateDiscussionCommentInOrg: [
      "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
    ],
    updateDiscussionInOrg: [
      "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
    ],
    updateInOrg: ["PATCH /orgs/{org}/teams/{team_slug}"]
  },
  users: {
    addEmailForAuthenticated: ["POST /user/emails"],
    block: ["PUT /user/blocks/{username}"],
    checkBlocked: ["GET /user/blocks/{username}"],
    checkFollowingForUser: ["GET /users/{username}/following/{target_user}"],
    checkPersonIsFollowedByAuthenticated: ["GET /user/following/{username}"],
    createGpgKeyForAuthenticated: ["POST /user/gpg_keys"],
    createPublicSshKeyForAuthenticated: ["POST /user/keys"],
    deleteEmailForAuthenticated: ["DELETE /user/emails"],
    deleteGpgKeyForAuthenticated: ["DELETE /user/gpg_keys/{gpg_key_id}"],
    deletePublicSshKeyForAuthenticated: ["DELETE /user/keys/{key_id}"],
    follow: ["PUT /user/following/{username}"],
    getAuthenticated: ["GET /user"],
    getByUsername: ["GET /users/{username}"],
    getContextForUser: ["GET /users/{username}/hovercard"],
    getGpgKeyForAuthenticated: ["GET /user/gpg_keys/{gpg_key_id}"],
    getPublicSshKeyForAuthenticated: ["GET /user/keys/{key_id}"],
    list: ["GET /users"],
    listBlockedByAuthenticated: ["GET /user/blocks"],
    listEmailsForAuthenticated: ["GET /user/emails"],
    listFollowedByAuthenticated: ["GET /user/following"],
    listFollowersForAuthenticatedUser: ["GET /user/followers"],
    listFollowersForUser: ["GET /users/{username}/followers"],
    listFollowingForUser: ["GET /users/{username}/following"],
    listGpgKeysForAuthenticated: ["GET /user/gpg_keys"],
    listGpgKeysForUser: ["GET /users/{username}/gpg_keys"],
    listPublicEmailsForAuthenticated: ["GET /user/public_emails"],
    listPublicKeysForUser: ["GET /users/{username}/keys"],
    listPublicSshKeysForAuthenticated: ["GET /user/keys"],
    setPrimaryEmailVisibilityForAuthenticated: ["PATCH /user/email/visibility"],
    unblock: ["DELETE /user/blocks/{username}"],
    unfollow: ["DELETE /user/following/{username}"],
    updateAuthenticated: ["PATCH /user"]
  }
}, VERSION$1 = "4.4.1";
function endpointsToMethods(e, t) {
  const r = {};
  for (const [n, s] of Object.entries(t))
    for (const [o, a] of Object.entries(s)) {
      const [i, u, f] = a, [w, h] = i.split(/ /), T = Object.assign({ method: w, url: h }, u);
      r[n] || (r[n] = {});
      const _ = r[n];
      if (f) {
        _[o] = decorate(e, n, o, T, f);
        continue;
      }
      _[o] = e.request.defaults(T);
    }
  return r;
}
function decorate(e, t, r, n, s) {
  const o = e.request.defaults(n);
  function a(...i) {
    let u = o.endpoint.merge(...i);
    if (s.mapToData)
      return u = Object.assign({}, u, {
        data: u[s.mapToData],
        [s.mapToData]: void 0
      }), o(u);
    if (s.renamed) {
      const [f, w] = s.renamed;
      e.log.warn(`octokit.${t}.${r}() has been renamed to octokit.${f}.${w}()`);
    }
    if (s.deprecated && e.log.warn(s.deprecated), s.renamedParameters) {
      const f = o.endpoint.merge(...i);
      for (const [w, h] of Object.entries(s.renamedParameters))
        w in f && (e.log.warn(`"${w}" parameter is deprecated for "octokit.${t}.${r}()". Use "${h}" instead`), h in f || (f[h] = f[w]), delete f[w]);
      return o(f);
    }
    return o(...i);
  }
  return Object.assign(a, o);
}
function restEndpointMethods(e) {
  return endpointsToMethods(e, Endpoints);
}
restEndpointMethods.VERSION = VERSION$1;
var distWeb$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  restEndpointMethods
});
const VERSION = "2.6.2";
function normalizePaginatedListResponse(e) {
  if (!("total_count" in e.data && !("url" in e.data)))
    return e;
  const r = e.data.incomplete_results, n = e.data.repository_selection, s = e.data.total_count;
  delete e.data.incomplete_results, delete e.data.repository_selection, delete e.data.total_count;
  const o = Object.keys(e.data)[0], a = e.data[o];
  return e.data = a, typeof r != "undefined" && (e.data.incomplete_results = r), typeof n != "undefined" && (e.data.repository_selection = n), e.data.total_count = s, e;
}
function iterator(e, t, r) {
  const n = typeof t == "function" ? t.endpoint(r) : e.request.endpoint(t, r), s = typeof t == "function" ? t : e.request, o = n.method, a = n.headers;
  let i = n.url;
  return {
    [Symbol.asyncIterator]: () => ({
      async next() {
        if (!i)
          return { done: !0 };
        const u = await s({ method: o, url: i, headers: a }), f = normalizePaginatedListResponse(u);
        return i = ((f.headers.link || "").match(/<([^>]+)>;\s*rel="next"/) || [])[1], { value: f };
      }
    })
  };
}
function paginate(e, t, r, n) {
  return typeof r == "function" && (n = r, r = void 0), gather(e, [], iterator(e, t, r)[Symbol.asyncIterator](), n);
}
function gather(e, t, r, n) {
  return r.next().then((s) => {
    if (s.done)
      return t;
    let o = !1;
    function a() {
      o = !0;
    }
    return t = t.concat(n ? n(s.value, a) : s.value.data), o ? t : gather(e, t, r, n);
  });
}
const composePaginateRest = Object.assign(paginate, {
  iterator
});
function paginateRest(e) {
  return {
    paginate: Object.assign(paginate.bind(null, e), {
      iterator: iterator.bind(null, e)
    })
  };
}
paginateRest.VERSION = VERSION;
var distWeb = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  composePaginateRest,
  paginateRest
}), core_1 = /* @__PURE__ */ getAugmentedNamespace(distWeb$2), plugin_rest_endpoint_methods_1 = /* @__PURE__ */ getAugmentedNamespace(distWeb$1), plugin_paginate_rest_1 = /* @__PURE__ */ getAugmentedNamespace(distWeb), utils = createCommonjsModule(function(e, t) {
  var r = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(w, h, T, _) {
    _ === void 0 && (_ = T), Object.defineProperty(w, _, { enumerable: !0, get: function() {
      return h[T];
    } });
  } : function(w, h, T, _) {
    _ === void 0 && (_ = T), w[_] = h[T];
  }), n = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(w, h) {
    Object.defineProperty(w, "default", { enumerable: !0, value: h });
  } : function(w, h) {
    w.default = h;
  }), s = commonjsGlobal && commonjsGlobal.__importStar || function(w) {
    if (w && w.__esModule)
      return w;
    var h = {};
    if (w != null)
      for (var T in w)
        Object.hasOwnProperty.call(w, T) && r(h, w, T);
    return n(h, w), h;
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.getOctokitOptions = t.GitHub = t.context = void 0;
  const o = s(context), a = s(utils$1);
  t.context = new o.Context();
  const i = a.getApiBaseUrl(), u = {
    baseUrl: i,
    request: {
      agent: a.getProxyAgent(i)
    }
  };
  t.GitHub = core_1.Octokit.plugin(plugin_rest_endpoint_methods_1.restEndpointMethods, plugin_paginate_rest_1.paginateRest).defaults(u);
  function f(w, h) {
    const T = Object.assign({}, h || {}), _ = a.getAuthString(w, T);
    return _ && (T.auth = _), T;
  }
  t.getOctokitOptions = f;
}), github = createCommonjsModule(function(e, t) {
  var r = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(i, u, f, w) {
    w === void 0 && (w = f), Object.defineProperty(i, w, { enumerable: !0, get: function() {
      return u[f];
    } });
  } : function(i, u, f, w) {
    w === void 0 && (w = f), i[w] = u[f];
  }), n = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(i, u) {
    Object.defineProperty(i, "default", { enumerable: !0, value: u });
  } : function(i, u) {
    i.default = u;
  }), s = commonjsGlobal && commonjsGlobal.__importStar || function(i) {
    if (i && i.__esModule)
      return i;
    var u = {};
    if (i != null)
      for (var f in i)
        Object.hasOwnProperty.call(i, f) && r(u, i, f);
    return n(u, i), u;
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.getOctokit = t.context = void 0;
  const o = s(context);
  t.context = new o.Context();
  function a(i, u) {
    return new utils.GitHub(utils.getOctokitOptions(i, u));
  }
  t.getOctokit = a;
});
const c = (e) => `\`${e}\``, link = (e, t) => `[${e}](${t})`, sub = (e) => `<sub>${e}</sub>`, sup = (e) => `<sup>${e}</sup>`, strong = (e) => `**${e}**`;
var __defProp$4 = Object.defineProperty, __defProps$4 = Object.defineProperties, __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$4 = Object.getOwnPropertySymbols, __hasOwnProp$4 = Object.prototype.hasOwnProperty, __propIsEnum$4 = Object.prototype.propertyIsEnumerable, __defNormalProp$4 = (e, t, r) => t in e ? __defProp$4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, __spreadValues$4 = (e, t) => {
  for (var r in t || (t = {}))
    __hasOwnProp$4.call(t, r) && __defNormalProp$4(e, r, t[r]);
  if (__getOwnPropSymbols$4)
    for (var r of __getOwnPropSymbols$4(t))
      __propIsEnum$4.call(t, r) && __defNormalProp$4(e, r, t[r]);
  return e;
}, __spreadProps$4 = (e, t) => __defProps$4(e, __getOwnPropDescs$4(t));
async function upsertComment({
  token: e,
  commentSignature: t,
  repo: r,
  prNumber: n,
  body: s
}) {
  core.startGroup("Comment on PR"), s += `

${t}`;
  const o = github.getOctokit(e);
  core.info("Getting list of comments");
  const { data: a } = await o.issues.listComments(__spreadProps$4(__spreadValues$4({}, r), {
    issue_number: n
  })), i = a.find((u) => {
    var f;
    return (f = u.body) == null ? void 0 : f.endsWith(t);
  });
  i ? (core.info(`Updating previous comment ID ${i.id}`), await o.issues.updateComment(__spreadProps$4(__spreadValues$4({}, r), {
    comment_id: i.id,
    body: s
  }))) : (core.info("Posting new comment"), await o.issues.createComment(__spreadProps$4(__spreadValues$4({}, r), {
    issue_number: n,
    body: s
  }))), core.endGroup();
}
var dist = createCommonjsModule(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(commonjsGlobal, function() {
    let r = {};
    const n = new WeakMap();
    class s {
      constructor(i, u) {
        u = Object.assign({
          units: "metric",
          precision: 1
        }, r, u), n.set(this, u);
        const f = {
          metric: [
            { from: 0, to: 1e3, unit: "B", long: "bytes" },
            { from: 1e3, to: 1e6, unit: "kB", long: "kilobytes" },
            { from: 1e6, to: 1e9, unit: "MB", long: "megabytes" },
            { from: 1e9, to: 1e12, unit: "GB", long: "gigabytes" },
            { from: 1e12, to: 1e15, unit: "TB", long: "terabytes" },
            { from: 1e15, to: 1e18, unit: "PB", long: "petabytes" },
            { from: 1e18, to: 1e21, unit: "EB", long: "exabytes" },
            { from: 1e21, to: 1e24, unit: "ZB", long: "zettabytes" },
            { from: 1e24, to: 1e27, unit: "YB", long: "yottabytes" }
          ],
          metric_octet: [
            { from: 0, to: 1e3, unit: "o", long: "octets" },
            { from: 1e3, to: 1e6, unit: "ko", long: "kilooctets" },
            { from: 1e6, to: 1e9, unit: "Mo", long: "megaoctets" },
            { from: 1e9, to: 1e12, unit: "Go", long: "gigaoctets" },
            { from: 1e12, to: 1e15, unit: "To", long: "teraoctets" },
            { from: 1e15, to: 1e18, unit: "Po", long: "petaoctets" },
            { from: 1e18, to: 1e21, unit: "Eo", long: "exaoctets" },
            { from: 1e21, to: 1e24, unit: "Zo", long: "zettaoctets" },
            { from: 1e24, to: 1e27, unit: "Yo", long: "yottaoctets" }
          ],
          iec: [
            { from: 0, to: Math.pow(1024, 1), unit: "B", long: "bytes" },
            { from: Math.pow(1024, 1), to: Math.pow(1024, 2), unit: "KiB", long: "kibibytes" },
            { from: Math.pow(1024, 2), to: Math.pow(1024, 3), unit: "MiB", long: "mebibytes" },
            { from: Math.pow(1024, 3), to: Math.pow(1024, 4), unit: "GiB", long: "gibibytes" },
            { from: Math.pow(1024, 4), to: Math.pow(1024, 5), unit: "TiB", long: "tebibytes" },
            { from: Math.pow(1024, 5), to: Math.pow(1024, 6), unit: "PiB", long: "pebibytes" },
            { from: Math.pow(1024, 6), to: Math.pow(1024, 7), unit: "EiB", long: "exbibytes" },
            { from: Math.pow(1024, 7), to: Math.pow(1024, 8), unit: "ZiB", long: "zebibytes" },
            { from: Math.pow(1024, 8), to: Math.pow(1024, 9), unit: "YiB", long: "yobibytes" }
          ],
          iec_octet: [
            { from: 0, to: Math.pow(1024, 1), unit: "o", long: "octets" },
            { from: Math.pow(1024, 1), to: Math.pow(1024, 2), unit: "Kio", long: "kibioctets" },
            { from: Math.pow(1024, 2), to: Math.pow(1024, 3), unit: "Mio", long: "mebioctets" },
            { from: Math.pow(1024, 3), to: Math.pow(1024, 4), unit: "Gio", long: "gibioctets" },
            { from: Math.pow(1024, 4), to: Math.pow(1024, 5), unit: "Tio", long: "tebioctets" },
            { from: Math.pow(1024, 5), to: Math.pow(1024, 6), unit: "Pio", long: "pebioctets" },
            { from: Math.pow(1024, 6), to: Math.pow(1024, 7), unit: "Eio", long: "exbioctets" },
            { from: Math.pow(1024, 7), to: Math.pow(1024, 8), unit: "Zio", long: "zebioctets" },
            { from: Math.pow(1024, 8), to: Math.pow(1024, 9), unit: "Yio", long: "yobioctets" }
          ]
        };
        Object.assign(f, u.customUnits);
        const w = i < 0 ? "-" : "";
        i = Math.abs(i);
        const h = f[u.units];
        if (h) {
          const T = h.find((_) => i >= _.from && i < _.to);
          if (T) {
            const _ = T.from === 0 ? w + i : w + (i / T.from).toFixed(u.precision);
            this.value = _, this.unit = T.unit, this.long = T.long;
          } else
            this.value = w + i, this.unit = "", this.long = "";
        } else
          throw new Error(`Invalid units specified: ${u.units}`);
      }
      toString() {
        const i = n.get(this);
        return i.toStringFn ? i.toStringFn.bind(this)() : `${this.value} ${this.unit}`;
      }
    }
    function o(a, i) {
      return new s(a, i);
    }
    return o.defaultOptions = function(a) {
      r = a;
    }, o;
  });
});
function markdownTable(e, t) {
  const r = t || {}, n = (r.align || []).concat(), s = r.stringLength || defaultStringLength, o = [];
  let a = -1;
  const i = [], u = [], f = [];
  let w = 0, h, T, _, E, P, p, l, g, m;
  for (; ++a < e.length; ) {
    for (h = -1, T = [], _ = [], e[a].length > w && (w = e[a].length); ++h < e[a].length; )
      P = serialize(e[a][h]), r.alignDelimiters !== !1 && (E = s(P), _[h] = E, (f[h] === void 0 || E > f[h]) && (f[h] = E)), T.push(P);
    i[a] = T, u[a] = _;
  }
  if (h = -1, typeof n == "object" && "length" in n)
    for (; ++h < w; )
      o[h] = toAlignment(n[h]);
  else
    for (m = toAlignment(n); ++h < w; )
      o[h] = m;
  for (h = -1, T = [], _ = []; ++h < w; )
    m = o[h], l = "", g = "", m === 99 ? (l = ":", g = ":") : m === 108 ? l = ":" : m === 114 && (g = ":"), E = r.alignDelimiters === !1 ? 1 : Math.max(1, f[h] - l.length - g.length), P = l + "-".repeat(E) + g, r.alignDelimiters !== !1 && (E = l.length + E + g.length, E > f[h] && (f[h] = E), _[h] = E), T[h] = P;
  i.splice(1, 0, T), u.splice(1, 0, _), a = -1;
  const d = [];
  for (; ++a < i.length; ) {
    for (T = i[a], _ = u[a], h = -1, p = []; ++h < w; )
      P = T[h] || "", l = "", g = "", r.alignDelimiters !== !1 && (E = f[h] - (_[h] || 0), m = o[h], m === 114 ? l = " ".repeat(E) : m === 99 ? E % 2 ? (l = " ".repeat(E / 2 + 0.5), g = " ".repeat(E / 2 - 0.5)) : (l = " ".repeat(E / 2), g = l) : g = " ".repeat(E)), r.delimiterStart !== !1 && !h && p.push("|"), r.padding !== !1 && !(r.alignDelimiters === !1 && P === "") && (r.delimiterStart !== !1 || h) && p.push(" "), r.alignDelimiters !== !1 && p.push(l), p.push(P), r.alignDelimiters !== !1 && p.push(g), r.padding !== !1 && p.push(" "), (r.delimiterEnd !== !1 || h !== w - 1) && p.push("|");
    d.push(r.delimiterEnd === !1 ? p.join("").replace(/ +$/, "") : p.join(""));
  }
  return d.join(`
`);
}
function serialize(e) {
  return e == null ? "" : String(e);
}
function defaultStringLength(e) {
  return e.length;
}
function toAlignment(e) {
  const t = typeof e == "string" ? e.charCodeAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function noop() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
}
function createWeakMap() {
  return typeof WeakMap != "undefined" ? new WeakMap() : fakeSetOrMap();
}
function fakeSetOrMap() {
  return {
    add: noop,
    delete: noop,
    get: noop,
    set: noop,
    has: function(e) {
      return !1;
    }
  };
}
var hop = Object.prototype.hasOwnProperty, has = function(e, t) {
  return hop.call(e, t);
};
function extend(e, t) {
  for (var r in t)
    has(t, r) && (e[r] = t[r]);
  return e;
}
var reLeadingNewline = /^[ \t]*(?:\r\n|\r|\n)/, reTrailingNewline = /(?:\r\n|\r|\n)[ \t]*$/, reStartsWithNewlineOrIsEmpty = /^(?:[\r\n]|$)/, reDetectIndentation = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/, reOnlyWhitespaceWithAtLeastOneNewline = /^[ \t]*[\r\n][ \t\r\n]*$/;
function _outdentArray(e, t, r) {
  var n = 0, s = e[0].match(reDetectIndentation);
  s && (n = s[1].length);
  var o = "(\\r\\n|\\r|\\n).{0," + n + "}", a = new RegExp(o, "g");
  t && (e = e.slice(1));
  var i = r.newline, u = r.trimLeadingNewline, f = r.trimTrailingNewline, w = typeof i == "string", h = e.length, T = e.map(function(_, E) {
    return _ = _.replace(a, "$1"), E === 0 && u && (_ = _.replace(reLeadingNewline, "")), E === h - 1 && f && (_ = _.replace(reTrailingNewline, "")), w && (_ = _.replace(/\r\n|\n|\r/g, function(P) {
      return i;
    })), _;
  });
  return T;
}
function concatStringsAndValues(e, t) {
  for (var r = "", n = 0, s = e.length; n < s; n++)
    r += e[n], n < s - 1 && (r += t[n]);
  return r;
}
function isTemplateStringsArray(e) {
  return has(e, "raw") && has(e, "length");
}
function createInstance(e) {
  var t = createWeakMap(), r = createWeakMap();
  function n(o) {
    for (var a = [], i = 1; i < arguments.length; i++)
      a[i - 1] = arguments[i];
    if (isTemplateStringsArray(o)) {
      var u = o, f = (a[0] === n || a[0] === defaultOutdent) && reOnlyWhitespaceWithAtLeastOneNewline.test(u[0]) && reStartsWithNewlineOrIsEmpty.test(u[1]), w = f ? r : t, h = w.get(u);
      if (h || (h = _outdentArray(u, f, e), w.set(u, h)), a.length === 0)
        return h[0];
      var T = concatStringsAndValues(h, f ? a.slice(1) : a);
      return T;
    } else
      return createInstance(extend(extend({}, e), o || {}));
  }
  var s = extend(n, {
    string: function(o) {
      return _outdentArray([o], !1, e)[0];
    }
  });
  return s;
}
var defaultOutdent = createInstance({
  trimLeadingNewline: !0,
  trimTrailingNewline: !0
});
if (typeof module != "undefined")
  try {
    module.exports = defaultOutdent, Object.defineProperty(defaultOutdent, "__esModule", { value: !0 }), defaultOutdent.default = defaultOutdent, defaultOutdent.outdent = defaultOutdent;
  } catch (e) {
  }
var freeGlobal = typeof global == "object" && global && global.Object === Object && global, freeGlobal$1 = freeGlobal, freeSelf = typeof self == "object" && self && self.Object === Object && self, root = freeGlobal$1 || freeSelf || Function("return this")(), root$1 = root, Symbol$1 = root$1.Symbol, Symbol$2 = Symbol$1, objectProto$b = Object.prototype, hasOwnProperty$8 = objectProto$b.hasOwnProperty, nativeObjectToString$1 = objectProto$b.toString, symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(e) {
  var t = hasOwnProperty$8.call(e, symToStringTag$1), r = e[symToStringTag$1];
  try {
    e[symToStringTag$1] = void 0;
    var n = !0;
  } catch (o) {
  }
  var s = nativeObjectToString$1.call(e);
  return n && (t ? e[symToStringTag$1] = r : delete e[symToStringTag$1]), s;
}
var objectProto$a = Object.prototype, nativeObjectToString = objectProto$a.toString;
function objectToString(e) {
  return nativeObjectToString.call(e);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]", symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(e) {
  return e == null ? e === void 0 ? undefinedTag : nullTag : symToStringTag && symToStringTag in Object(e) ? getRawTag(e) : objectToString(e);
}
function isObjectLike(e) {
  return e != null && typeof e == "object";
}
var symbolTag$1 = "[object Symbol]";
function isSymbol(e) {
  return typeof e == "symbol" || isObjectLike(e) && baseGetTag(e) == symbolTag$1;
}
function arrayMap(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, s = Array(n); ++r < n; )
    s[r] = t(e[r], r, e);
  return s;
}
var isArray = Array.isArray, isArray$1 = isArray, INFINITY$2 = 1 / 0, symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto$1 ? symbolProto$1.toString : void 0;
function baseToString(e) {
  if (typeof e == "string")
    return e;
  if (isArray$1(e))
    return arrayMap(e, baseToString) + "";
  if (isSymbol(e))
    return symbolToString ? symbolToString.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -INFINITY$2 ? "-0" : t;
}
var reWhitespace = /\s/;
function trimmedEndIndex(e) {
  for (var t = e.length; t-- && reWhitespace.test(e.charAt(t)); )
    ;
  return t;
}
var reTrimStart = /^\s+/;
function baseTrim(e) {
  return e && e.slice(0, trimmedEndIndex(e) + 1).replace(reTrimStart, "");
}
function isObject(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var NAN = 0 / 0, reIsBadHex = /^[-+]0x[0-9a-f]+$/i, reIsBinary = /^0b[01]+$/i, reIsOctal = /^0o[0-7]+$/i, freeParseInt = parseInt;
function toNumber(e) {
  if (typeof e == "number")
    return e;
  if (isSymbol(e))
    return NAN;
  if (isObject(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = isObject(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = baseTrim(e);
  var r = reIsBinary.test(e);
  return r || reIsOctal.test(e) ? freeParseInt(e.slice(2), r ? 2 : 8) : reIsBadHex.test(e) ? NAN : +e;
}
var INFINITY$1 = 1 / 0, MAX_INTEGER = 17976931348623157e292;
function toFinite(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = toNumber(e), e === INFINITY$1 || e === -INFINITY$1) {
    var t = e < 0 ? -1 : 1;
    return t * MAX_INTEGER;
  }
  return e === e ? e : 0;
}
function toInteger(e) {
  var t = toFinite(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
function identity(e) {
  return e;
}
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(e) {
  if (!isObject(e))
    return !1;
  var t = baseGetTag(e);
  return t == funcTag$1 || t == genTag || t == asyncTag || t == proxyTag;
}
var coreJsData = root$1["__core-js_shared__"], coreJsData$1 = coreJsData, maskSrcKey = function() {
  var e = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function isMasked(e) {
  return !!maskSrcKey && maskSrcKey in e;
}
var funcProto$1 = Function.prototype, funcToString$1 = funcProto$1.toString;
function toSource(e) {
  if (e != null) {
    try {
      return funcToString$1.call(e);
    } catch (t) {
    }
    try {
      return e + "";
    } catch (t) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reIsHostCtor = /^\[object .+?Constructor\]$/, funcProto = Function.prototype, objectProto$9 = Object.prototype, funcToString = funcProto.toString, hasOwnProperty$7 = objectProto$9.hasOwnProperty, reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$7).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative(e) {
  if (!isObject(e) || isMasked(e))
    return !1;
  var t = isFunction(e) ? reIsNative : reIsHostCtor;
  return t.test(toSource(e));
}
function getValue(e, t) {
  return e == null ? void 0 : e[t];
}
function getNative(e, t) {
  var r = getValue(e, t);
  return baseIsNative(r) ? r : void 0;
}
var WeakMap$1 = getNative(root$1, "WeakMap"), WeakMap$2 = WeakMap$1, MAX_SAFE_INTEGER$1 = 9007199254740991, reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(e, t) {
  var r = typeof e;
  return t = t == null ? MAX_SAFE_INTEGER$1 : t, !!t && (r == "number" || r != "symbol" && reIsUint.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function eq(e, t) {
  return e === t || e !== e && t !== t;
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= MAX_SAFE_INTEGER;
}
function isArrayLike(e) {
  return e != null && isLength(e.length) && !isFunction(e);
}
var objectProto$8 = Object.prototype;
function isPrototype(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || objectProto$8;
  return e === r;
}
function baseTimes(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var argsTag$2 = "[object Arguments]";
function baseIsArguments(e) {
  return isObjectLike(e) && baseGetTag(e) == argsTag$2;
}
var objectProto$7 = Object.prototype, hasOwnProperty$6 = objectProto$7.hasOwnProperty, propertyIsEnumerable$1 = objectProto$7.propertyIsEnumerable, isArguments = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(e) {
  return isObjectLike(e) && hasOwnProperty$6.call(e, "callee") && !propertyIsEnumerable$1.call(e, "callee");
}, isArguments$1 = isArguments;
function stubFalse() {
  return !1;
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports, freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module, moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1, Buffer$1 = moduleExports$1 ? root$1.Buffer : void 0, nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0, isBuffer = nativeIsBuffer || stubFalse, isBuffer$1 = isBuffer, argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", objectTag$2 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", weakMapTag$1 = "[object WeakMap]", arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]", typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = !0, typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag$2] = typedArrayTags[dateTag$1] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag] = typedArrayTags[mapTag$2] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$1] = typedArrayTags[setTag$2] = typedArrayTags[stringTag$1] = typedArrayTags[weakMapTag$1] = !1;
function baseIsTypedArray(e) {
  return isObjectLike(e) && isLength(e.length) && !!typedArrayTags[baseGetTag(e)];
}
function baseUnary(e) {
  return function(t) {
    return e(t);
  };
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports, freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module, moduleExports = freeModule && freeModule.exports === freeExports, freeProcess = moduleExports && freeGlobal$1.process, nodeUtil = function() {
  try {
    var e = freeModule && freeModule.require && freeModule.require("util").types;
    return e || freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (t) {
  }
}(), nodeUtil$1 = nodeUtil, nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray, isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray, isTypedArray$1 = isTypedArray, objectProto$6 = Object.prototype, hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function arrayLikeKeys(e, t) {
  var r = isArray$1(e), n = !r && isArguments$1(e), s = !r && !n && isBuffer$1(e), o = !r && !n && !s && isTypedArray$1(e), a = r || n || s || o, i = a ? baseTimes(e.length, String) : [], u = i.length;
  for (var f in e)
    (t || hasOwnProperty$5.call(e, f)) && !(a && (f == "length" || s && (f == "offset" || f == "parent") || o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || isIndex(f, u))) && i.push(f);
  return i;
}
function overArg(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var nativeKeys = overArg(Object.keys, Object), nativeKeys$1 = nativeKeys, objectProto$5 = Object.prototype, hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function baseKeys(e) {
  if (!isPrototype(e))
    return nativeKeys$1(e);
  var t = [];
  for (var r in Object(e))
    hasOwnProperty$4.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function keys(e) {
  return isArrayLike(e) ? arrayLikeKeys(e) : baseKeys(e);
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(e, t) {
  if (isArray$1(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || isSymbol(e) ? !0 : reIsPlainProp.test(e) || !reIsDeepProp.test(e) || t != null && e in Object(t);
}
var nativeCreate = getNative(Object, "create"), nativeCreate$1 = nativeCreate;
function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {}, this.size = 0;
}
function hashDelete(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__", objectProto$4 = Object.prototype, hasOwnProperty$3 = objectProto$4.hasOwnProperty;
function hashGet(e) {
  var t = this.__data__;
  if (nativeCreate$1) {
    var r = t[e];
    return r === HASH_UNDEFINED$2 ? void 0 : r;
  }
  return hasOwnProperty$3.call(t, e) ? t[e] : void 0;
}
var objectProto$3 = Object.prototype, hasOwnProperty$2 = objectProto$3.hasOwnProperty;
function hashHas(e) {
  var t = this.__data__;
  return nativeCreate$1 ? t[e] !== void 0 : hasOwnProperty$2.call(t, e);
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = nativeCreate$1 && t === void 0 ? HASH_UNDEFINED$1 : t, this;
}
function Hash(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Hash.prototype.clear = hashClear, Hash.prototype.delete = hashDelete, Hash.prototype.get = hashGet, Hash.prototype.has = hashHas, Hash.prototype.set = hashSet;
function listCacheClear() {
  this.__data__ = [], this.size = 0;
}
function assocIndexOf(e, t) {
  for (var r = e.length; r--; )
    if (eq(e[r][0], t))
      return r;
  return -1;
}
var arrayProto = Array.prototype, splice = arrayProto.splice;
function listCacheDelete(e) {
  var t = this.__data__, r = assocIndexOf(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : splice.call(t, r, 1), --this.size, !0;
}
function listCacheGet(e) {
  var t = this.__data__, r = assocIndexOf(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function listCacheHas(e) {
  return assocIndexOf(this.__data__, e) > -1;
}
function listCacheSet(e, t) {
  var r = this.__data__, n = assocIndexOf(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function ListCache(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ListCache.prototype.clear = listCacheClear, ListCache.prototype.delete = listCacheDelete, ListCache.prototype.get = listCacheGet, ListCache.prototype.has = listCacheHas, ListCache.prototype.set = listCacheSet;
var Map = getNative(root$1, "Map"), Map$1 = Map;
function mapCacheClear() {
  this.size = 0, this.__data__ = {
    hash: new Hash(),
    map: new (Map$1 || ListCache)(),
    string: new Hash()
  };
}
function isKeyable(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function getMapData(e, t) {
  var r = e.__data__;
  return isKeyable(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function mapCacheDelete(e) {
  var t = getMapData(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function mapCacheGet(e) {
  return getMapData(this, e).get(e);
}
function mapCacheHas(e) {
  return getMapData(this, e).has(e);
}
function mapCacheSet(e, t) {
  var r = getMapData(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function MapCache(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
MapCache.prototype.clear = mapCacheClear, MapCache.prototype.delete = mapCacheDelete, MapCache.prototype.get = mapCacheGet, MapCache.prototype.has = mapCacheHas, MapCache.prototype.set = mapCacheSet;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(FUNC_ERROR_TEXT);
  var r = function() {
    var n = arguments, s = t ? t.apply(this, n) : n[0], o = r.cache;
    if (o.has(s))
      return o.get(s);
    var a = e.apply(this, n);
    return r.cache = o.set(s, a) || o, a;
  };
  return r.cache = new (memoize.Cache || MapCache)(), r;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(e) {
  var t = memoize(e, function(n) {
    return r.size === MAX_MEMOIZE_SIZE && r.clear(), n;
  }), r = t.cache;
  return t;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, reEscapeChar = /\\(\\)?/g, stringToPath = memoizeCapped(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(rePropName, function(r, n, s, o) {
    t.push(s ? o.replace(reEscapeChar, "$1") : n || r);
  }), t;
}), stringToPath$1 = stringToPath;
function toString(e) {
  return e == null ? "" : baseToString(e);
}
function castPath(e, t) {
  return isArray$1(e) ? e : isKey(e, t) ? [e] : stringToPath$1(toString(e));
}
var INFINITY = 1 / 0;
function toKey(e) {
  if (typeof e == "string" || isSymbol(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -INFINITY ? "-0" : t;
}
function baseGet(e, t) {
  t = castPath(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[toKey(t[r++])];
  return r && r == n ? e : void 0;
}
function get(e, t, r) {
  var n = e == null ? void 0 : baseGet(e, t);
  return n === void 0 ? r : n;
}
function arrayPush(e, t) {
  for (var r = -1, n = t.length, s = e.length; ++r < n; )
    e[s + r] = t[r];
  return e;
}
var nativeIsFinite = root$1.isFinite, nativeMin = Math.min;
function createRound(e) {
  var t = Math[e];
  return function(r, n) {
    if (r = toNumber(r), n = n == null ? 0 : nativeMin(toInteger(n), 292), n && nativeIsFinite(r)) {
      var s = (toString(r) + "e").split("e"), o = t(s[0] + "e" + (+s[1] + n));
      return s = (toString(o) + "e").split("e"), +(s[0] + "e" + (+s[1] - n));
    }
    return t(r);
  };
}
function stackClear() {
  this.__data__ = new ListCache(), this.size = 0;
}
function stackDelete(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function stackGet(e) {
  return this.__data__.get(e);
}
function stackHas(e) {
  return this.__data__.has(e);
}
var LARGE_ARRAY_SIZE = 200;
function stackSet(e, t) {
  var r = this.__data__;
  if (r instanceof ListCache) {
    var n = r.__data__;
    if (!Map$1 || n.length < LARGE_ARRAY_SIZE - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new MapCache(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Stack(e) {
  var t = this.__data__ = new ListCache(e);
  this.size = t.size;
}
Stack.prototype.clear = stackClear, Stack.prototype.delete = stackDelete, Stack.prototype.get = stackGet, Stack.prototype.has = stackHas, Stack.prototype.set = stackSet;
function arrayFilter(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, s = 0, o = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (o[s++] = a);
  }
  return o;
}
function stubArray() {
  return [];
}
var objectProto$2 = Object.prototype, propertyIsEnumerable = objectProto$2.propertyIsEnumerable, nativeGetSymbols = Object.getOwnPropertySymbols, getSymbols = nativeGetSymbols ? function(e) {
  return e == null ? [] : (e = Object(e), arrayFilter(nativeGetSymbols(e), function(t) {
    return propertyIsEnumerable.call(e, t);
  }));
} : stubArray, getSymbols$1 = getSymbols;
function baseGetAllKeys(e, t, r) {
  var n = t(e);
  return isArray$1(e) ? n : arrayPush(n, r(e));
}
function getAllKeys(e) {
  return baseGetAllKeys(e, keys, getSymbols$1);
}
var DataView = getNative(root$1, "DataView"), DataView$1 = DataView, Promise$1 = getNative(root$1, "Promise"), Promise$2 = Promise$1, Set = getNative(root$1, "Set"), Set$1 = Set, mapTag$1 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$1 = "[object Set]", weakMapTag = "[object WeakMap]", dataViewTag$1 = "[object DataView]", dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap$2), getTag = baseGetTag;
(DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$1 || Map$1 && getTag(new Map$1()) != mapTag$1 || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag$1 || WeakMap$2 && getTag(new WeakMap$2()) != weakMapTag) && (getTag = function(e) {
  var t = baseGetTag(e), r = t == objectTag$1 ? e.constructor : void 0, n = r ? toSource(r) : "";
  if (n)
    switch (n) {
      case dataViewCtorString:
        return dataViewTag$1;
      case mapCtorString:
        return mapTag$1;
      case promiseCtorString:
        return promiseTag;
      case setCtorString:
        return setTag$1;
      case weakMapCtorString:
        return weakMapTag;
    }
  return t;
});
var getTag$1 = getTag, Uint8Array = root$1.Uint8Array, Uint8Array$1 = Uint8Array, HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(e) {
  return this.__data__.set(e, HASH_UNDEFINED), this;
}
function setCacheHas(e) {
  return this.__data__.has(e);
}
function SetCache(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new MapCache(); ++t < r; )
    this.add(e[t]);
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd, SetCache.prototype.has = setCacheHas;
function arraySome(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function cacheHas(e, t) {
  return e.has(t);
}
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays(e, t, r, n, s, o) {
  var a = r & COMPARE_PARTIAL_FLAG$5, i = e.length, u = t.length;
  if (i != u && !(a && u > i))
    return !1;
  var f = o.get(e), w = o.get(t);
  if (f && w)
    return f == t && w == e;
  var h = -1, T = !0, _ = r & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
  for (o.set(e, t), o.set(t, e); ++h < i; ) {
    var E = e[h], P = t[h];
    if (n)
      var p = a ? n(P, E, h, t, e, o) : n(E, P, h, e, t, o);
    if (p !== void 0) {
      if (p)
        continue;
      T = !1;
      break;
    }
    if (_) {
      if (!arraySome(t, function(l, g) {
        if (!cacheHas(_, g) && (E === l || s(E, l, r, n, o)))
          return _.push(g);
      })) {
        T = !1;
        break;
      }
    } else if (!(E === P || s(E, P, r, n, o))) {
      T = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), T;
}
function mapToArray(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, s) {
    r[++t] = [s, n];
  }), r;
}
function setToArray(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2, boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(e, t, r, n, s, o, a) {
  switch (r) {
    case dataViewTag:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case arrayBufferTag:
      return !(e.byteLength != t.byteLength || !o(new Uint8Array$1(e), new Uint8Array$1(t)));
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+e, +t);
    case errorTag:
      return e.name == t.name && e.message == t.message;
    case regexpTag:
    case stringTag:
      return e == t + "";
    case mapTag:
      var i = mapToArray;
    case setTag:
      var u = n & COMPARE_PARTIAL_FLAG$4;
      if (i || (i = setToArray), e.size != t.size && !u)
        return !1;
      var f = a.get(e);
      if (f)
        return f == t;
      n |= COMPARE_UNORDERED_FLAG$2, a.set(e, t);
      var w = equalArrays(i(e), i(t), n, s, o, a);
      return a.delete(e), w;
    case symbolTag:
      if (symbolValueOf)
        return symbolValueOf.call(e) == symbolValueOf.call(t);
  }
  return !1;
}
var COMPARE_PARTIAL_FLAG$3 = 1, objectProto$1 = Object.prototype, hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function equalObjects(e, t, r, n, s, o) {
  var a = r & COMPARE_PARTIAL_FLAG$3, i = getAllKeys(e), u = i.length, f = getAllKeys(t), w = f.length;
  if (u != w && !a)
    return !1;
  for (var h = u; h--; ) {
    var T = i[h];
    if (!(a ? T in t : hasOwnProperty$1.call(t, T)))
      return !1;
  }
  var _ = o.get(e), E = o.get(t);
  if (_ && E)
    return _ == t && E == e;
  var P = !0;
  o.set(e, t), o.set(t, e);
  for (var p = a; ++h < u; ) {
    T = i[h];
    var l = e[T], g = t[T];
    if (n)
      var m = a ? n(g, l, T, t, e, o) : n(l, g, T, e, t, o);
    if (!(m === void 0 ? l === g || s(l, g, r, n, o) : m)) {
      P = !1;
      break;
    }
    p || (p = T == "constructor");
  }
  if (P && !p) {
    var d = e.constructor, b = t.constructor;
    d != b && "constructor" in e && "constructor" in t && !(typeof d == "function" && d instanceof d && typeof b == "function" && b instanceof b) && (P = !1);
  }
  return o.delete(e), o.delete(t), P;
}
var COMPARE_PARTIAL_FLAG$2 = 1, argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]", objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty;
function baseIsEqualDeep(e, t, r, n, s, o) {
  var a = isArray$1(e), i = isArray$1(t), u = a ? arrayTag : getTag$1(e), f = i ? arrayTag : getTag$1(t);
  u = u == argsTag ? objectTag : u, f = f == argsTag ? objectTag : f;
  var w = u == objectTag, h = f == objectTag, T = u == f;
  if (T && isBuffer$1(e)) {
    if (!isBuffer$1(t))
      return !1;
    a = !0, w = !1;
  }
  if (T && !w)
    return o || (o = new Stack()), a || isTypedArray$1(e) ? equalArrays(e, t, r, n, s, o) : equalByTag(e, t, u, r, n, s, o);
  if (!(r & COMPARE_PARTIAL_FLAG$2)) {
    var _ = w && hasOwnProperty.call(e, "__wrapped__"), E = h && hasOwnProperty.call(t, "__wrapped__");
    if (_ || E) {
      var P = _ ? e.value() : e, p = E ? t.value() : t;
      return o || (o = new Stack()), s(P, p, r, n, o);
    }
  }
  return T ? (o || (o = new Stack()), equalObjects(e, t, r, n, s, o)) : !1;
}
function baseIsEqual(e, t, r, n, s) {
  return e === t ? !0 : e == null || t == null || !isObjectLike(e) && !isObjectLike(t) ? e !== e && t !== t : baseIsEqualDeep(e, t, r, n, baseIsEqual, s);
}
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch(e, t, r, n) {
  var s = r.length, o = s, a = !n;
  if (e == null)
    return !o;
  for (e = Object(e); s--; ) {
    var i = r[s];
    if (a && i[2] ? i[1] !== e[i[0]] : !(i[0] in e))
      return !1;
  }
  for (; ++s < o; ) {
    i = r[s];
    var u = i[0], f = e[u], w = i[1];
    if (a && i[2]) {
      if (f === void 0 && !(u in e))
        return !1;
    } else {
      var h = new Stack();
      if (n)
        var T = n(f, w, u, e, t, h);
      if (!(T === void 0 ? baseIsEqual(w, f, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, n, h) : T))
        return !1;
    }
  }
  return !0;
}
function isStrictComparable(e) {
  return e === e && !isObject(e);
}
function getMatchData(e) {
  for (var t = keys(e), r = t.length; r--; ) {
    var n = t[r], s = e[n];
    t[r] = [n, s, isStrictComparable(s)];
  }
  return t;
}
function matchesStrictComparable(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function baseMatches(e) {
  var t = getMatchData(e);
  return t.length == 1 && t[0][2] ? matchesStrictComparable(t[0][0], t[0][1]) : function(r) {
    return r === e || baseIsMatch(r, e, t);
  };
}
function baseHasIn(e, t) {
  return e != null && t in Object(e);
}
function hasPath(e, t, r) {
  t = castPath(t, e);
  for (var n = -1, s = t.length, o = !1; ++n < s; ) {
    var a = toKey(t[n]);
    if (!(o = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return o || ++n != s ? o : (s = e == null ? 0 : e.length, !!s && isLength(s) && isIndex(a, s) && (isArray$1(e) || isArguments$1(e)));
}
function hasIn(e, t) {
  return e != null && hasPath(e, t, baseHasIn);
}
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty(e, t) {
  return isKey(e) && isStrictComparable(t) ? matchesStrictComparable(toKey(e), t) : function(r) {
    var n = get(r, e);
    return n === void 0 && n === t ? hasIn(r, e) : baseIsEqual(t, n, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
function baseProperty(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function basePropertyDeep(e) {
  return function(t) {
    return baseGet(t, e);
  };
}
function property(e) {
  return isKey(e) ? baseProperty(toKey(e)) : basePropertyDeep(e);
}
function baseIteratee(e) {
  return typeof e == "function" ? e : e == null ? identity : typeof e == "object" ? isArray$1(e) ? baseMatchesProperty(e[0], e[1]) : baseMatches(e) : property(e);
}
function arrayAggregator(e, t, r, n) {
  for (var s = -1, o = e == null ? 0 : e.length; ++s < o; ) {
    var a = e[s];
    t(n, a, r(a), e);
  }
  return n;
}
function createBaseFor(e) {
  return function(t, r, n) {
    for (var s = -1, o = Object(t), a = n(t), i = a.length; i--; ) {
      var u = a[e ? i : ++s];
      if (r(o[u], u, o) === !1)
        break;
    }
    return t;
  };
}
var baseFor = createBaseFor(), baseFor$1 = baseFor;
function baseForOwn(e, t) {
  return e && baseFor$1(e, t, keys);
}
function createBaseEach(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!isArrayLike(r))
      return e(r, n);
    for (var s = r.length, o = t ? s : -1, a = Object(r); (t ? o-- : ++o < s) && n(a[o], o, a) !== !1; )
      ;
    return r;
  };
}
var baseEach = createBaseEach(baseForOwn), baseEach$1 = baseEach;
function baseAggregator(e, t, r, n) {
  return baseEach$1(e, function(s, o, a) {
    t(n, s, r(s), a);
  }), n;
}
function createAggregator(e, t) {
  return function(r, n) {
    var s = isArray$1(r) ? arrayAggregator : baseAggregator, o = t ? t() : {};
    return s(r, e, baseIteratee(n), o);
  };
}
var partition = createAggregator(function(e, t, r) {
  e[r ? 0 : 1].push(t);
}, function() {
  return [[], []];
}), partition$1 = partition, round = createRound("round"), round$1 = round, globToRegexp = function(e, t) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  for (var r = String(e), n = "", s = t ? !!t.extended : !1, o = t ? !!t.globstar : !1, a = !1, i = t && typeof t.flags == "string" ? t.flags : "", u, f = 0, w = r.length; f < w; f++)
    switch (u = r[f], u) {
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
        n += "\\" + u;
        break;
      case "?":
        if (s) {
          n += ".";
          break;
        }
      case "[":
      case "]":
        if (s) {
          n += u;
          break;
        }
      case "{":
        if (s) {
          a = !0, n += "(";
          break;
        }
      case "}":
        if (s) {
          a = !1, n += ")";
          break;
        }
      case ",":
        if (a) {
          n += "|";
          break;
        }
        n += "\\" + u;
        break;
      case "*":
        for (var h = r[f - 1], T = 1; r[f + 1] === "*"; )
          T++, f++;
        var _ = r[f + 1];
        if (!o)
          n += ".*";
        else {
          var E = T > 1 && (h === "/" || h === void 0) && (_ === "/" || _ === void 0);
          E ? (n += "((?:[^/]*(?:/|$))*)", f++) : n += "([^/]*)";
        }
        break;
      default:
        n += u;
    }
  return (!i || !~i.indexOf("g")) && (n = "^" + n + "$"), new RegExp(n, i);
};
function partionHidden(e, t) {
  if (!e)
    return [[], t];
  const r = globToRegexp(e, { extended: !0 });
  return partition$1(t, (n) => r.test(n.path));
}
function getSizeLabels(e) {
  return e.length === 1 && e[0].property === "size" ? "" : ` (${e.map((t) => t.label).join(" / ")})`;
}
const supportedSizes = {
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
function parseDisplaySize(e) {
  return e.split(",").map((t) => t.trim()).filter((t) => supportedSizes.hasOwnProperty(t)).map((t) => supportedSizes[t]);
}
const listSizes = (e, t) => e.map(({ property: r }) => t(r)).join(" / ");
function sortFiles(e, t, r) {
  e.sort((n, s) => s[t] - n[t] || n.path.localeCompare(s.path)), r === "asc" && e.reverse();
}
var __defProp$3 = Object.defineProperty, __defProps$3 = Object.defineProperties, __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$3 = Object.getOwnPropertySymbols, __hasOwnProp$3 = Object.prototype.hasOwnProperty, __propIsEnum$3 = Object.prototype.propertyIsEnumerable, __defNormalProp$3 = (e, t, r) => t in e ? __defProp$3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, __spreadValues$3 = (e, t) => {
  for (var r in t || (t = {}))
    __hasOwnProp$3.call(t, r) && __defNormalProp$3(e, r, t[r]);
  if (__getOwnPropSymbols$3)
    for (var r of __getOwnPropSymbols$3(t))
      __propIsEnum$3.call(t, r) && __defNormalProp$3(e, r, t[r]);
  return e;
}, __spreadProps$3 = (e, t) => __defProps$3(e, __getOwnPropDescs$3(t));
const percent = (e) => (e < 1e-3 ? e = round$1(e, 4) : e < 0.01 ? e = round$1(e, 3) : e = round$1(e, 2), e.toLocaleString(void 0, {
  style: "percent",
  maximumSignificantDigits: 3
}));
function calculateDiffBy(e, t, r) {
  const n = e[r] - t[r];
  return {
    delta: n,
    percent: percent(n / t[r])
  };
}
function calculateDiff(e, t) {
  return {
    size: calculateDiffBy(e, t, "size"),
    sizeGzip: calculateDiffBy(e, t, "sizeGzip"),
    sizeBrotli: calculateDiffBy(e, t, "sizeBrotli")
  };
}
function processPkgFiles(e, t, r) {
  for (const n of r.files) {
    e[n.path] || (e[n.path] = {
      path: n.path,
      label: n.label
    });
    const s = e[n.path];
    s[t] = n, s.head && s.base && (s.diff = calculateDiff(s.head, s.base));
  }
}
function comparePackages(e, t, {
  sortBy: r,
  sortOrder: n,
  hideFiles: s
} = {}) {
  const o = {};
  processPkgFiles(o, "head", e), processPkgFiles(o, "base", t);
  const a = Object.values(o);
  sortFiles(a, r, n);
  const [i, u] = partionHidden(s, a), [f, w] = partition$1(u, (h) => h.diff && h.diff.size.delta === 0);
  return {
    head: e,
    base: t,
    diff: __spreadProps$3(__spreadValues$3({}, calculateDiff(e, t)), {
      tarballSize: calculateDiffBy(e, t, "tarballSize")
    }),
    files: {
      changed: w,
      unchanged: f,
      hidden: i
    }
  };
}
const directionSymbol = (e) => e < 0 ? "\u2193" : e > 0 ? "\u2191" : "", formatDelta = ({ delta: e, percent: t }) => e ? t + directionSymbol(e) : "";
function generateComment({
  headPkgData: e,
  basePkgData: t,
  sortBy: r,
  sortOrder: n,
  hideFiles: s,
  unchangedFiles: o,
  displaySize: a
}) {
  const i = comparePackages(e, t, {
    sortBy: r,
    sortOrder: n,
    hideFiles: s
  });
  core.setOutput("regressionData", i);
  const { changed: u, unchanged: f, hidden: w } = i.files, h = parseDisplaySize(a), T = getSizeLabels(h), _ = markdownTable([
    ["File", `Before${T}`, `After${T}`],
    ...[
      ...u,
      ...o === "show" ? f : []
    ].map((p) => [
      p.label,
      p.base && p.base.size ? listSizes(h, (l) => c(dist(p.base[l]))) : "\u2014",
      p.head && p.head.size ? listSizes(h, (l) => (p.base && p.base[l] ? sup(formatDelta(p.diff[l])) : "") + c(dist(p.head[l]))) : "\u2014"
    ]),
    [
      `${strong("Total")} ${o === "show" ? "" : sub("_(Includes all files)_")}`,
      listSizes(h, (p) => c(dist(i.base[p]))),
      listSizes(h, (p) => sup(formatDelta(i.diff[p])) + c(dist(i.head[p])))
    ],
    [
      strong("Tarball size"),
      c(dist(i.base.tarballSize)),
      sup(formatDelta(i.diff.tarballSize)) + c(dist(i.head.tarballSize))
    ]
  ], {
    align: ["", "r", "r"]
  });
  let E = "";
  o === "collapse" && f.length > 0 && (E = markdownTable([
    ["File", `Size${T}`],
    ...f.map((p) => [
      p.label,
      listSizes(h, (l) => c(dist(p.base[l])))
    ])
  ], {
    align: ["", "r"]
  }), E = `<details><summary>Unchanged files</summary>

${E}
</details>`);
  let P = "";
  return w.length > 0 && (P = markdownTable([
    ["File", `Before${T}`, `After${T}`],
    ...w.map((p) => [
      p.label,
      p.base && p.base.size ? listSizes(h, (l) => c(dist(p.base[l]))) : "\u2014",
      p.head && p.head.size ? listSizes(h, (l) => (p.base && p.base[l] ? sup(formatDelta(p.diff[l])) : "") + c(dist(p.head[l]))) : "\u2014"
    ])
  ], {
    align: ["", "r", "r"]
  }), P = `<details><summary>Hidden files</summary>

${P}
</details>`), defaultOutdent`
	### 📊 Package size report&nbsp;&nbsp;&nbsp;<kbd>${formatDelta(i.diff.size) || "No changes"}</kbd>

	${_}

	${E}

	${P}
	`;
}
function headOnly({
  headPkgData: e,
  hideFiles: t,
  displaySize: r,
  sortBy: n,
  sortOrder: s
}) {
  const o = parseDisplaySize(r), a = getSizeLabels(o);
  sortFiles(e.files, n, s);
  const [i, u] = partionHidden(t, e.files), f = markdownTable([
    ["File", `Size${a}`],
    ...u.map((h) => [
      h.label,
      listSizes(o, (T) => c(dist(h[T])))
    ]),
    [
      strong("Total"),
      listSizes(o, (h) => c(dist(e[h])))
    ],
    [
      strong("Tarball size"),
      c(dist(e.tarballSize))
    ]
  ], {
    align: ["", "r"]
  });
  let w = "";
  return i.length > 0 && (w = markdownTable([
    ["File", `Size${a}`],
    ...i.map((h) => [
      h.label,
      listSizes(o, (T) => c(dist(h[T])))
    ])
  ], {
    align: ["", "r"]
  }), w = `<details><summary>Hidden files</summary>

${w}
</details>`), defaultOutdent`
	### 📊 Package size report

	${f}

	${w}
	`;
}
var ioUtil = createCommonjsModule(function(e, t) {
  var r = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(p, l, g, m) {
    m === void 0 && (m = g), Object.defineProperty(p, m, { enumerable: !0, get: function() {
      return l[g];
    } });
  } : function(p, l, g, m) {
    m === void 0 && (m = g), p[m] = l[g];
  }), n = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(p, l) {
    Object.defineProperty(p, "default", { enumerable: !0, value: l });
  } : function(p, l) {
    p.default = l;
  }), s = commonjsGlobal && commonjsGlobal.__importStar || function(p) {
    if (p && p.__esModule)
      return p;
    var l = {};
    if (p != null)
      for (var g in p)
        g !== "default" && Object.hasOwnProperty.call(p, g) && r(l, p, g);
    return n(l, p), l;
  }, o = commonjsGlobal && commonjsGlobal.__awaiter || function(p, l, g, m) {
    function d(b) {
      return b instanceof g ? b : new g(function(y) {
        y(b);
      });
    }
    return new (g || (g = Promise))(function(b, y) {
      function v(G) {
        try {
          S(m.next(G));
        } catch ($) {
          y($);
        }
      }
      function A(G) {
        try {
          S(m.throw(G));
        } catch ($) {
          y($);
        }
      }
      function S(G) {
        G.done ? b(G.value) : d(G.value).then(v, A);
      }
      S((m = m.apply(p, l || [])).next());
    });
  }, a;
  Object.defineProperty(t, "__esModule", { value: !0 }), t.getCmdPath = t.tryGetExecutablePath = t.isRooted = t.isDirectory = t.exists = t.IS_WINDOWS = t.unlink = t.symlink = t.stat = t.rmdir = t.rename = t.readlink = t.readdir = t.mkdir = t.lstat = t.copyFile = t.chmod = void 0;
  const i = s(fs__default.default), u = s(require$$1__default.default);
  a = i.promises, t.chmod = a.chmod, t.copyFile = a.copyFile, t.lstat = a.lstat, t.mkdir = a.mkdir, t.readdir = a.readdir, t.readlink = a.readlink, t.rename = a.rename, t.rmdir = a.rmdir, t.stat = a.stat, t.symlink = a.symlink, t.unlink = a.unlink, t.IS_WINDOWS = process.platform === "win32";
  function f(p) {
    return o(this, void 0, void 0, function* () {
      try {
        yield t.stat(p);
      } catch (l) {
        if (l.code === "ENOENT")
          return !1;
        throw l;
      }
      return !0;
    });
  }
  t.exists = f;
  function w(p, l = !1) {
    return o(this, void 0, void 0, function* () {
      return (l ? yield t.stat(p) : yield t.lstat(p)).isDirectory();
    });
  }
  t.isDirectory = w;
  function h(p) {
    if (p = _(p), !p)
      throw new Error('isRooted() parameter "p" cannot be empty');
    return t.IS_WINDOWS ? p.startsWith("\\") || /^[A-Z]:/i.test(p) : p.startsWith("/");
  }
  t.isRooted = h;
  function T(p, l) {
    return o(this, void 0, void 0, function* () {
      let g;
      try {
        g = yield t.stat(p);
      } catch (d) {
        d.code !== "ENOENT" && console.log(`Unexpected error attempting to determine if executable file exists '${p}': ${d}`);
      }
      if (g && g.isFile()) {
        if (t.IS_WINDOWS) {
          const d = u.extname(p).toUpperCase();
          if (l.some((b) => b.toUpperCase() === d))
            return p;
        } else if (E(g))
          return p;
      }
      const m = p;
      for (const d of l) {
        p = m + d, g = void 0;
        try {
          g = yield t.stat(p);
        } catch (b) {
          b.code !== "ENOENT" && console.log(`Unexpected error attempting to determine if executable file exists '${p}': ${b}`);
        }
        if (g && g.isFile()) {
          if (t.IS_WINDOWS) {
            try {
              const b = u.dirname(p), y = u.basename(p).toUpperCase();
              for (const v of yield t.readdir(b))
                if (y === v.toUpperCase()) {
                  p = u.join(b, v);
                  break;
                }
            } catch (b) {
              console.log(`Unexpected error attempting to determine the actual case of the file '${p}': ${b}`);
            }
            return p;
          } else if (E(g))
            return p;
        }
      }
      return "";
    });
  }
  t.tryGetExecutablePath = T;
  function _(p) {
    return p = p || "", t.IS_WINDOWS ? (p = p.replace(/\//g, "\\"), p.replace(/\\\\+/g, "\\")) : p.replace(/\/\/+/g, "/");
  }
  function E(p) {
    return (p.mode & 1) > 0 || (p.mode & 8) > 0 && p.gid === process.getgid() || (p.mode & 64) > 0 && p.uid === process.getuid();
  }
  function P() {
    var p;
    return (p = process.env.COMSPEC) !== null && p !== void 0 ? p : "cmd.exe";
  }
  t.getCmdPath = P;
}), io = createCommonjsModule(function(e, t) {
  var r = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(d, b, y, v) {
    v === void 0 && (v = y), Object.defineProperty(d, v, { enumerable: !0, get: function() {
      return b[y];
    } });
  } : function(d, b, y, v) {
    v === void 0 && (v = y), d[v] = b[y];
  }), n = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(d, b) {
    Object.defineProperty(d, "default", { enumerable: !0, value: b });
  } : function(d, b) {
    d.default = b;
  }), s = commonjsGlobal && commonjsGlobal.__importStar || function(d) {
    if (d && d.__esModule)
      return d;
    var b = {};
    if (d != null)
      for (var y in d)
        y !== "default" && Object.hasOwnProperty.call(d, y) && r(b, d, y);
    return n(b, d), b;
  }, o = commonjsGlobal && commonjsGlobal.__awaiter || function(d, b, y, v) {
    function A(S) {
      return S instanceof y ? S : new y(function(G) {
        G(S);
      });
    }
    return new (y || (y = Promise))(function(S, G) {
      function $(C) {
        try {
          R(v.next(C));
        } catch (D) {
          G(D);
        }
      }
      function O(C) {
        try {
          R(v.throw(C));
        } catch (D) {
          G(D);
        }
      }
      function R(C) {
        C.done ? S(C.value) : A(C.value).then($, O);
      }
      R((v = v.apply(d, b || [])).next());
    });
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.findInPath = t.which = t.mkdirP = t.rmRF = t.mv = t.cp = void 0;
  const a = s(require$$0__default$1.default), i = s(require$$1__default.default), u = s(ioUtil), f = util_1__default.default.promisify(a.exec), w = util_1__default.default.promisify(a.execFile);
  function h(d, b, y = {}) {
    return o(this, void 0, void 0, function* () {
      const { force: v, recursive: A, copySourceDirectory: S } = l(y), G = (yield u.exists(b)) ? yield u.stat(b) : null;
      if (G && G.isFile() && !v)
        return;
      const $ = G && G.isDirectory() && S ? i.join(b, i.basename(d)) : b;
      if (!(yield u.exists(d)))
        throw new Error(`no such file or directory: ${d}`);
      if ((yield u.stat(d)).isDirectory())
        if (A)
          yield g(d, $, 0, v);
        else
          throw new Error(`Failed to copy. ${d} is a directory, but tried to copy without recursive flag.`);
      else {
        if (i.relative(d, $) === "")
          throw new Error(`'${$}' and '${d}' are the same file`);
        yield m(d, $, v);
      }
    });
  }
  t.cp = h;
  function T(d, b, y = {}) {
    return o(this, void 0, void 0, function* () {
      if (yield u.exists(b)) {
        let v = !0;
        if ((yield u.isDirectory(b)) && (b = i.join(b, i.basename(d)), v = yield u.exists(b)), v)
          if (y.force == null || y.force)
            yield _(b);
          else
            throw new Error("Destination already exists");
      }
      yield E(i.dirname(b)), yield u.rename(d, b);
    });
  }
  t.mv = T;
  function _(d) {
    return o(this, void 0, void 0, function* () {
      if (u.IS_WINDOWS) {
        if (/[*"<>|]/.test(d))
          throw new Error('File path must not contain `*`, `"`, `<`, `>` or `|` on Windows');
        try {
          const b = u.getCmdPath();
          (yield u.isDirectory(d, !0)) ? yield f(`${b} /s /c "rd /s /q "%inputPath%""`, {
            env: { inputPath: d }
          }) : yield f(`${b} /s /c "del /f /a "%inputPath%""`, {
            env: { inputPath: d }
          });
        } catch (b) {
          if (b.code !== "ENOENT")
            throw b;
        }
        try {
          yield u.unlink(d);
        } catch (b) {
          if (b.code !== "ENOENT")
            throw b;
        }
      } else {
        let b = !1;
        try {
          b = yield u.isDirectory(d);
        } catch (y) {
          if (y.code !== "ENOENT")
            throw y;
          return;
        }
        b ? yield w("rm", ["-rf", `${d}`]) : yield u.unlink(d);
      }
    });
  }
  t.rmRF = _;
  function E(d) {
    return o(this, void 0, void 0, function* () {
      assert_1__default.default.ok(d, "a path argument must be provided"), yield u.mkdir(d, { recursive: !0 });
    });
  }
  t.mkdirP = E;
  function P(d, b) {
    return o(this, void 0, void 0, function* () {
      if (!d)
        throw new Error("parameter 'tool' is required");
      if (b) {
        const v = yield P(d, !1);
        if (!v)
          throw u.IS_WINDOWS ? new Error(`Unable to locate executable file: ${d}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`) : new Error(`Unable to locate executable file: ${d}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`);
        return v;
      }
      const y = yield p(d);
      return y && y.length > 0 ? y[0] : "";
    });
  }
  t.which = P;
  function p(d) {
    return o(this, void 0, void 0, function* () {
      if (!d)
        throw new Error("parameter 'tool' is required");
      const b = [];
      if (u.IS_WINDOWS && process.env.PATHEXT)
        for (const A of process.env.PATHEXT.split(i.delimiter))
          A && b.push(A);
      if (u.isRooted(d)) {
        const A = yield u.tryGetExecutablePath(d, b);
        return A ? [A] : [];
      }
      if (d.includes(i.sep))
        return [];
      const y = [];
      if (process.env.PATH)
        for (const A of process.env.PATH.split(i.delimiter))
          A && y.push(A);
      const v = [];
      for (const A of y) {
        const S = yield u.tryGetExecutablePath(i.join(A, d), b);
        S && v.push(S);
      }
      return v;
    });
  }
  t.findInPath = p;
  function l(d) {
    const b = d.force == null ? !0 : d.force, y = Boolean(d.recursive), v = d.copySourceDirectory == null ? !0 : Boolean(d.copySourceDirectory);
    return { force: b, recursive: y, copySourceDirectory: v };
  }
  function g(d, b, y, v) {
    return o(this, void 0, void 0, function* () {
      if (y >= 255)
        return;
      y++, yield E(b);
      const A = yield u.readdir(d);
      for (const S of A) {
        const G = `${d}/${S}`, $ = `${b}/${S}`;
        (yield u.lstat(G)).isDirectory() ? yield g(G, $, y, v) : yield m(G, $, v);
      }
      yield u.chmod(b, (yield u.stat(d)).mode);
    });
  }
  function m(d, b, y) {
    return o(this, void 0, void 0, function* () {
      if ((yield u.lstat(d)).isSymbolicLink()) {
        try {
          yield u.lstat(b), yield u.unlink(b);
        } catch (A) {
          A.code === "EPERM" && (yield u.chmod(b, "0666"), yield u.unlink(b));
        }
        const v = yield u.readlink(d);
        yield u.symlink(v, b, u.IS_WINDOWS ? "junction" : null);
      } else
        (!(yield u.exists(b)) || y) && (yield u.copyFile(d, b));
    });
  }
}), toolrunner = createCommonjsModule(function(e, t) {
  var r = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(p, l, g, m) {
    m === void 0 && (m = g), Object.defineProperty(p, m, { enumerable: !0, get: function() {
      return l[g];
    } });
  } : function(p, l, g, m) {
    m === void 0 && (m = g), p[m] = l[g];
  }), n = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(p, l) {
    Object.defineProperty(p, "default", { enumerable: !0, value: l });
  } : function(p, l) {
    p.default = l;
  }), s = commonjsGlobal && commonjsGlobal.__importStar || function(p) {
    if (p && p.__esModule)
      return p;
    var l = {};
    if (p != null)
      for (var g in p)
        g !== "default" && Object.hasOwnProperty.call(p, g) && r(l, p, g);
    return n(l, p), l;
  }, o = commonjsGlobal && commonjsGlobal.__awaiter || function(p, l, g, m) {
    function d(b) {
      return b instanceof g ? b : new g(function(y) {
        y(b);
      });
    }
    return new (g || (g = Promise))(function(b, y) {
      function v(G) {
        try {
          S(m.next(G));
        } catch ($) {
          y($);
        }
      }
      function A(G) {
        try {
          S(m.throw(G));
        } catch ($) {
          y($);
        }
      }
      function S(G) {
        G.done ? b(G.value) : d(G.value).then(v, A);
      }
      S((m = m.apply(p, l || [])).next());
    });
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.argStringToArray = t.ToolRunner = void 0;
  const a = s(require$$0__default.default), i = s(events__default.default), u = s(require$$0__default$1.default), f = s(require$$1__default.default), w = s(io), h = s(ioUtil), T = process.platform === "win32";
  class _ extends i.EventEmitter {
    constructor(l, g, m) {
      super();
      if (!l)
        throw new Error("Parameter 'toolPath' cannot be null or empty.");
      this.toolPath = l, this.args = g || [], this.options = m || {};
    }
    _debug(l) {
      this.options.listeners && this.options.listeners.debug && this.options.listeners.debug(l);
    }
    _getCommandString(l, g) {
      const m = this._getSpawnFileName(), d = this._getSpawnArgs(l);
      let b = g ? "" : "[command]";
      if (T)
        if (this._isCmdFile()) {
          b += m;
          for (const y of d)
            b += ` ${y}`;
        } else if (l.windowsVerbatimArguments) {
          b += `"${m}"`;
          for (const y of d)
            b += ` ${y}`;
        } else {
          b += this._windowsQuoteCmdArg(m);
          for (const y of d)
            b += ` ${this._windowsQuoteCmdArg(y)}`;
        }
      else {
        b += m;
        for (const y of d)
          b += ` ${y}`;
      }
      return b;
    }
    _processLineBuffer(l, g, m) {
      try {
        let d = g + l.toString(), b = d.indexOf(a.EOL);
        for (; b > -1; ) {
          const y = d.substring(0, b);
          m(y), d = d.substring(b + a.EOL.length), b = d.indexOf(a.EOL);
        }
        return d;
      } catch (d) {
        return this._debug(`error processing line. Failed with error ${d}`), "";
      }
    }
    _getSpawnFileName() {
      return T && this._isCmdFile() ? process.env.COMSPEC || "cmd.exe" : this.toolPath;
    }
    _getSpawnArgs(l) {
      if (T && this._isCmdFile()) {
        let g = `/D /S /C "${this._windowsQuoteCmdArg(this.toolPath)}`;
        for (const m of this.args)
          g += " ", g += l.windowsVerbatimArguments ? m : this._windowsQuoteCmdArg(m);
        return g += '"', [g];
      }
      return this.args;
    }
    _endsWith(l, g) {
      return l.endsWith(g);
    }
    _isCmdFile() {
      const l = this.toolPath.toUpperCase();
      return this._endsWith(l, ".CMD") || this._endsWith(l, ".BAT");
    }
    _windowsQuoteCmdArg(l) {
      if (!this._isCmdFile())
        return this._uvQuoteCmdArg(l);
      if (!l)
        return '""';
      const g = [
        " ",
        "	",
        "&",
        "(",
        ")",
        "[",
        "]",
        "{",
        "}",
        "^",
        "=",
        ";",
        "!",
        "'",
        "+",
        ",",
        "`",
        "~",
        "|",
        "<",
        ">",
        '"'
      ];
      let m = !1;
      for (const y of l)
        if (g.some((v) => v === y)) {
          m = !0;
          break;
        }
      if (!m)
        return l;
      let d = '"', b = !0;
      for (let y = l.length; y > 0; y--)
        d += l[y - 1], b && l[y - 1] === "\\" ? d += "\\" : l[y - 1] === '"' ? (b = !0, d += '"') : b = !1;
      return d += '"', d.split("").reverse().join("");
    }
    _uvQuoteCmdArg(l) {
      if (!l)
        return '""';
      if (!l.includes(" ") && !l.includes("	") && !l.includes('"'))
        return l;
      if (!l.includes('"') && !l.includes("\\"))
        return `"${l}"`;
      let g = '"', m = !0;
      for (let d = l.length; d > 0; d--)
        g += l[d - 1], m && l[d - 1] === "\\" ? g += "\\" : l[d - 1] === '"' ? (m = !0, g += "\\") : m = !1;
      return g += '"', g.split("").reverse().join("");
    }
    _cloneExecOptions(l) {
      l = l || {};
      const g = {
        cwd: l.cwd || process.cwd(),
        env: l.env || process.env,
        silent: l.silent || !1,
        windowsVerbatimArguments: l.windowsVerbatimArguments || !1,
        failOnStdErr: l.failOnStdErr || !1,
        ignoreReturnCode: l.ignoreReturnCode || !1,
        delay: l.delay || 1e4
      };
      return g.outStream = l.outStream || process.stdout, g.errStream = l.errStream || process.stderr, g;
    }
    _getSpawnOptions(l, g) {
      l = l || {};
      const m = {};
      return m.cwd = l.cwd, m.env = l.env, m.windowsVerbatimArguments = l.windowsVerbatimArguments || this._isCmdFile(), l.windowsVerbatimArguments && (m.argv0 = `"${g}"`), m;
    }
    exec() {
      return o(this, void 0, void 0, function* () {
        return !h.isRooted(this.toolPath) && (this.toolPath.includes("/") || T && this.toolPath.includes("\\")) && (this.toolPath = f.resolve(process.cwd(), this.options.cwd || process.cwd(), this.toolPath)), this.toolPath = yield w.which(this.toolPath, !0), new Promise((l, g) => o(this, void 0, void 0, function* () {
          this._debug(`exec tool: ${this.toolPath}`), this._debug("arguments:");
          for (const S of this.args)
            this._debug(`   ${S}`);
          const m = this._cloneExecOptions(this.options);
          !m.silent && m.outStream && m.outStream.write(this._getCommandString(m) + a.EOL);
          const d = new P(m, this.toolPath);
          if (d.on("debug", (S) => {
            this._debug(S);
          }), this.options.cwd && !(yield h.exists(this.options.cwd)))
            return g(new Error(`The cwd: ${this.options.cwd} does not exist!`));
          const b = this._getSpawnFileName(), y = u.spawn(b, this._getSpawnArgs(m), this._getSpawnOptions(this.options, b));
          let v = "";
          y.stdout && y.stdout.on("data", (S) => {
            this.options.listeners && this.options.listeners.stdout && this.options.listeners.stdout(S), !m.silent && m.outStream && m.outStream.write(S), v = this._processLineBuffer(S, v, (G) => {
              this.options.listeners && this.options.listeners.stdline && this.options.listeners.stdline(G);
            });
          });
          let A = "";
          if (y.stderr && y.stderr.on("data", (S) => {
            d.processStderr = !0, this.options.listeners && this.options.listeners.stderr && this.options.listeners.stderr(S), !m.silent && m.errStream && m.outStream && (m.failOnStdErr ? m.errStream : m.outStream).write(S), A = this._processLineBuffer(S, A, (G) => {
              this.options.listeners && this.options.listeners.errline && this.options.listeners.errline(G);
            });
          }), y.on("error", (S) => {
            d.processError = S.message, d.processExited = !0, d.processClosed = !0, d.CheckComplete();
          }), y.on("exit", (S) => {
            d.processExitCode = S, d.processExited = !0, this._debug(`Exit code ${S} received from tool '${this.toolPath}'`), d.CheckComplete();
          }), y.on("close", (S) => {
            d.processExitCode = S, d.processExited = !0, d.processClosed = !0, this._debug(`STDIO streams have closed for tool '${this.toolPath}'`), d.CheckComplete();
          }), d.on("done", (S, G) => {
            v.length > 0 && this.emit("stdline", v), A.length > 0 && this.emit("errline", A), y.removeAllListeners(), S ? g(S) : l(G);
          }), this.options.input) {
            if (!y.stdin)
              throw new Error("child process missing stdin");
            y.stdin.end(this.options.input);
          }
        }));
      });
    }
  }
  t.ToolRunner = _;
  function E(p) {
    const l = [];
    let g = !1, m = !1, d = "";
    function b(y) {
      m && y !== '"' && (d += "\\"), d += y, m = !1;
    }
    for (let y = 0; y < p.length; y++) {
      const v = p.charAt(y);
      if (v === '"') {
        m ? b(v) : g = !g;
        continue;
      }
      if (v === "\\" && m) {
        b(v);
        continue;
      }
      if (v === "\\" && g) {
        m = !0;
        continue;
      }
      if (v === " " && !g) {
        d.length > 0 && (l.push(d), d = "");
        continue;
      }
      b(v);
    }
    return d.length > 0 && l.push(d.trim()), l;
  }
  t.argStringToArray = E;
  class P extends i.EventEmitter {
    constructor(l, g) {
      super();
      if (this.processClosed = !1, this.processError = "", this.processExitCode = 0, this.processExited = !1, this.processStderr = !1, this.delay = 1e4, this.done = !1, this.timeout = null, !g)
        throw new Error("toolPath must not be empty");
      this.options = l, this.toolPath = g, l.delay && (this.delay = l.delay);
    }
    CheckComplete() {
      this.done || (this.processClosed ? this._setResult() : this.processExited && (this.timeout = timers_1__default.default.setTimeout(P.HandleTimeout, this.delay, this)));
    }
    _debug(l) {
      this.emit("debug", l);
    }
    _setResult() {
      let l;
      this.processExited && (this.processError ? l = new Error(`There was an error when attempting to execute the process '${this.toolPath}'. This may indicate the process failed to start. Error: ${this.processError}`) : this.processExitCode !== 0 && !this.options.ignoreReturnCode ? l = new Error(`The process '${this.toolPath}' failed with exit code ${this.processExitCode}`) : this.processStderr && this.options.failOnStdErr && (l = new Error(`The process '${this.toolPath}' failed because one or more lines were written to the STDERR stream`))), this.timeout && (clearTimeout(this.timeout), this.timeout = null), this.done = !0, this.emit("done", l, this.processExitCode);
    }
    static HandleTimeout(l) {
      if (!l.done) {
        if (!l.processClosed && l.processExited) {
          const g = `The STDIO streams did not close within ${l.delay / 1e3} seconds of the exit event from process '${l.toolPath}'. This may indicate a child process inherited the STDIO streams and has not yet exited.`;
          l._debug(g);
        }
        l._setResult();
      }
    }
  }
}), exec_1 = createCommonjsModule(function(e, t) {
  var r = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(f, w, h, T) {
    T === void 0 && (T = h), Object.defineProperty(f, T, { enumerable: !0, get: function() {
      return w[h];
    } });
  } : function(f, w, h, T) {
    T === void 0 && (T = h), f[T] = w[h];
  }), n = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(f, w) {
    Object.defineProperty(f, "default", { enumerable: !0, value: w });
  } : function(f, w) {
    f.default = w;
  }), s = commonjsGlobal && commonjsGlobal.__importStar || function(f) {
    if (f && f.__esModule)
      return f;
    var w = {};
    if (f != null)
      for (var h in f)
        h !== "default" && Object.hasOwnProperty.call(f, h) && r(w, f, h);
    return n(w, f), w;
  }, o = commonjsGlobal && commonjsGlobal.__awaiter || function(f, w, h, T) {
    function _(E) {
      return E instanceof h ? E : new h(function(P) {
        P(E);
      });
    }
    return new (h || (h = Promise))(function(E, P) {
      function p(m) {
        try {
          g(T.next(m));
        } catch (d) {
          P(d);
        }
      }
      function l(m) {
        try {
          g(T.throw(m));
        } catch (d) {
          P(d);
        }
      }
      function g(m) {
        m.done ? E(m.value) : _(m.value).then(p, l);
      }
      g((T = T.apply(f, w || [])).next());
    });
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.getExecOutput = t.exec = void 0;
  const a = s(toolrunner);
  function i(f, w, h) {
    return o(this, void 0, void 0, function* () {
      const T = a.argStringToArray(f);
      if (T.length === 0)
        throw new Error("Parameter 'commandLine' cannot be null or empty.");
      const _ = T[0];
      return w = T.slice(1).concat(w || []), new a.ToolRunner(_, w, h).exec();
    });
  }
  t.exec = i;
  function u(f, w, h) {
    var T, _;
    return o(this, void 0, void 0, function* () {
      let E = "", P = "";
      const p = new string_decoder_1__default.default.StringDecoder("utf8"), l = new string_decoder_1__default.default.StringDecoder("utf8"), g = (T = h == null ? void 0 : h.listeners) === null || T === void 0 ? void 0 : T.stdout, m = (_ = h == null ? void 0 : h.listeners) === null || _ === void 0 ? void 0 : _.stderr, d = (A) => {
        P += l.write(A), m && m(A);
      }, b = (A) => {
        E += p.write(A), g && g(A);
      }, y = Object.assign(Object.assign({}, h == null ? void 0 : h.listeners), { stdout: b, stderr: d }), v = yield i(f, w, Object.assign(Object.assign({}, h), { listeners: y }));
      return E += p.end(), P += l.end(), {
        exitCode: v,
        stdout: E,
        stderr: P
      };
    });
  }
  t.getExecOutput = u;
}), __defProp$2 = Object.defineProperty, __defProps$2 = Object.defineProperties, __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$2 = Object.getOwnPropertySymbols, __hasOwnProp$2 = Object.prototype.hasOwnProperty, __propIsEnum$2 = Object.prototype.propertyIsEnumerable, __defNormalProp$2 = (e, t, r) => t in e ? __defProp$2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, __spreadValues$2 = (e, t) => {
  for (var r in t || (t = {}))
    __hasOwnProp$2.call(t, r) && __defNormalProp$2(e, r, t[r]);
  if (__getOwnPropSymbols$2)
    for (var r of __getOwnPropSymbols$2(t))
      __propIsEnum$2.call(t, r) && __defNormalProp$2(e, r, t[r]);
  return e;
}, __spreadProps$2 = (e, t) => __defProps$2(e, __getOwnPropDescs$2(t));
async function exec(e, t) {
  let r = "", n = "";
  const s = Date.now(), o = await exec_1.exec(e, void 0, __spreadProps$2(__spreadValues$2({}, t), {
    silent: !0,
    listeners: {
      stdout(i) {
        r += i.toString();
      },
      stderr(i) {
        n += i.toString();
      }
    }
  })), a = Date.now() - s;
  return {
    exitCode: o,
    duration: a,
    stdout: r,
    stderr: n
  };
}
async function isBaseDiffFromHead(e) {
  try {
    await exec(`git fetch origin ${e} --depth=1`);
  } catch (r) {
    throw new Error(`Failed to git fetch ${e} ${r.message}`);
  }
  const { exitCode: t } = await exec(`git diff --quiet origin/${e}`, { ignoreReturnCode: !0 });
  return t !== 0;
}
async function npmCi(e = process.cwd()) {
  fs__default.default.existsSync("node_modules") && (core.info("Cleaning node_modules"), await io.rmRF(require$$1__default.default.join(e, "node_modules")));
  const t = {
    cwd: e,
    ignoreReturnCode: !0
  };
  let r = "";
  fs__default.default.existsSync("package-lock.json") ? (core.info("Installing dependencies with npm"), r = "npm ci") : fs__default.default.existsSync("yarn.lock") ? (core.info("Installing dependencies with yarn"), r = "yarn install --frozen-lockfile") : fs__default.default.existsSync("pnpm-lock.yaml") ? (core.info("Installing dependencies with pnpm"), r = "npx pnpm i --frozen-lockfile") : (core.info("No lock file detected. Installing dependencies with npm"), r = "npm i");
  const { exitCode: n, stdout: s, stderr: o } = await exec(r, t);
  if (n > 0)
    throw new Error(`${o}
${s}`);
}
async function isFileTracked(e) {
  const { exitCode: t } = await exec(`git ls-files --error-unmatch ${e}`, {
    ignoreReturnCode: !0
  });
  return t === 0;
}
var __defProp$1 = Object.defineProperty, __defProps$1 = Object.defineProperties, __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$1 = Object.getOwnPropertySymbols, __hasOwnProp$1 = Object.prototype.hasOwnProperty, __propIsEnum$1 = Object.prototype.propertyIsEnumerable, __defNormalProp$1 = (e, t, r) => t in e ? __defProp$1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, __spreadValues$1 = (e, t) => {
  for (var r in t || (t = {}))
    __hasOwnProp$1.call(t, r) && __defNormalProp$1(e, r, t[r]);
  if (__getOwnPropSymbols$1)
    for (var r of __getOwnPropSymbols$1(t))
      __propIsEnum$1.call(t, r) && __defNormalProp$1(e, r, t[r]);
  return e;
}, __spreadProps$1 = (e, t) => __defProps$1(e, __getOwnPropDescs$1(t));
let pkgSizeInstalled = !1;
async function buildRef({
  checkoutRef: e,
  refData: t,
  buildCommand: r
}) {
  const n = process.cwd();
  if (core.info(`Current working directory: ${n}`), e && (core.info(`Checking out ref '${e}'`), await exec(`git checkout -f ${e}`)), r !== "false") {
    if (!r) {
      let i;
      try {
        i = JSON.parse(fs__default.default.readFileSync("./package.json").toString());
      } catch (u) {
        core.warning("Error reading package.json", u);
      }
      i && i.scripts && i.scripts.build && (core.info("Build script found in package.json"), r = "npm run build");
    }
    if (r) {
      await npmCi(n).catch((u) => {
        throw new Error(`Failed to install dependencies:
${u.message}`);
      }), core.info(`Running build command: ${r}`);
      const i = Date.now();
      await exec(r, { cwd: n }).catch((u) => {
        throw new Error(`Failed to run build command: ${r}
${u.message}`);
      }), core.info(`Build completed in ${(Date.now() - i) / 1e3}s`);
    }
  }
  pkgSizeInstalled || (core.info("Installing pkg-size globally"), await exec("npm i -g pkg-size"), pkgSizeInstalled = !0), core.info("Getting package size");
  const s = await exec("pkg-size --json", { cwd: n }).catch((i) => {
    throw new Error(`Failed to determine package size: ${i.message}`);
  });
  core.debug(JSON.stringify(s, null, 4));
  const o = __spreadProps$1(__spreadValues$1({}, JSON.parse(s.stdout)), {
    ref: t,
    size: 0,
    sizeGzip: 0,
    sizeBrotli: 0
  });
  await Promise.all(o.files.map(async (i) => {
    o.size += i.size, o.sizeGzip += i.sizeGzip, o.sizeBrotli += i.sizeBrotli;
    const u = await isFileTracked(i.path);
    i.isTracked = u, i.label = u ? link(c(i.path), `${t.repo.html_url}/blob/${t.ref}/${i.path}`) : c(i.path);
  })), core.info("Cleaning up"), await exec("git reset --hard");
  const { stdout: a } = await exec("git clean -dfx");
  return core.debug(a), o;
}
var __defProp = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropSymbols = Object.getOwnPropertySymbols, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable, __defNormalProp = (e, t, r) => t in e ? __defProp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, __spreadValues = (e, t) => {
  for (var r in t || (t = {}))
    __hasOwnProp.call(t, r) && __defNormalProp(e, r, t[r]);
  if (__getOwnPropSymbols)
    for (var r of __getOwnPropSymbols(t))
      __propIsEnum.call(t, r) && __defNormalProp(e, r, t[r]);
  return e;
}, __spreadProps = (e, t) => __defProps(e, __getOwnPropDescs(t));
async function generateSizeReport({
  pr: e,
  buildCommand: t,
  commentReport: r,
  mode: n,
  unchangedFiles: s,
  hideFiles: o,
  sortBy: a,
  sortOrder: i,
  displaySize: u
}) {
  core.startGroup("Build HEAD");
  const f = await buildRef({
    refData: e.head,
    buildCommand: t
  });
  if (core.setOutput("headPkgData", f), core.endGroup(), n === "head-only")
    return r !== "false" ? headOnly({
      headPkgData: f,
      displaySize: u,
      sortBy: a,
      sortOrder: i,
      hideFiles: o
    }) : !1;
  const { ref: w } = e.base;
  let h;
  return await isBaseDiffFromHead(w) ? (core.info("HEAD is different from BASE. Triggering build."), core.startGroup("Build BASE"), h = await buildRef({
    checkoutRef: w,
    refData: e.base,
    buildCommand: t
  }), core.endGroup()) : (core.info("HEAD is identical to BASE. Skipping base build."), h = __spreadProps(__spreadValues({}, f), {
    ref: e.base
  })), core.setOutput("basePkgData", h), r !== "false" ? generateComment({
    headPkgData: f,
    basePkgData: h,
    displaySize: u,
    sortBy: a,
    sortOrder: i,
    hideFiles: o,
    unchangedFiles: s
  }) : !1;
}
const COMMENT_SIGNATURE = sub("\u{1F916} This report was automatically generated by [pkg-size-action](https://github.com/pkg-size/action/)");
(async () => {
  const { GITHUB_TOKEN: e } = process.env;
  assert_1__default.default(e, 'Environment variable "GITHUB_TOKEN" not set. Required for accessing and reporting on the PR.');
  const { pull_request: t } = github.context.payload, r = await generateSizeReport({
    pr: t,
    buildCommand: core.getInput("build-command"),
    commentReport: core.getInput("comment-report"),
    mode: core.getInput("mode") || "regression",
    unchangedFiles: core.getInput("unchanged-files") || "collapse",
    hideFiles: core.getInput("hide-files"),
    sortBy: core.getInput("sort-by") || "delta",
    sortOrder: core.getInput("sort-order") || "desc",
    displaySize: core.getInput("display-size") || "uncompressed"
  });
  await exec(`git checkout -f ${github.context.sha}`), r && await upsertComment({
    token: e,
    commentSignature: COMMENT_SIGNATURE,
    repo: github.context.repo,
    prNumber: t.number,
    body: r
  });
})().catch((e) => {
  core.setFailed(e.message), core.warning(e.stack);
});
