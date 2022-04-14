"use strict";
var io = require("assert"), ao = require("os"), co = require("fs"), lo = require("path"), uo = require("http"), po = require("https");
require("net");
var fo = require("tls"), ho = require("events"), mo = require("util"), go = require("stream"), wo = require("url"), bo = require("zlib"), yo = require("string_decoder"), To = require("child_process"), _o = require("timers");
function L(e) {
  return e && typeof e == "object" && "default" in e ? e : { default: e };
}
var Tr = /* @__PURE__ */ L(io), Le = /* @__PURE__ */ L(ao), ce = /* @__PURE__ */ L(co), qe = /* @__PURE__ */ L(lo), Me = /* @__PURE__ */ L(uo), it = /* @__PURE__ */ L(po), Eo = /* @__PURE__ */ L(fo), _r = /* @__PURE__ */ L(ho), Er = /* @__PURE__ */ L(mo), W = /* @__PURE__ */ L(go), Ct = /* @__PURE__ */ L(wo), _e = /* @__PURE__ */ L(bo), vo = /* @__PURE__ */ L(yo), vr = /* @__PURE__ */ L(To), Oo = /* @__PURE__ */ L(_o), O = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function kt(e) {
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
var G = {}, Se = {}, le = {};
Object.defineProperty(le, "__esModule", { value: !0 }), le.toCommandProperties = le.toCommandValue = void 0;
function Po(e) {
  return e == null ? "" : typeof e == "string" || e instanceof String ? e : JSON.stringify(e);
}
le.toCommandValue = Po;
function So(e) {
  return Object.keys(e).length ? {
    title: e.title,
    file: e.file,
    line: e.startLine,
    endLine: e.endLine,
    col: e.startColumn,
    endColumn: e.endColumn
  } : {};
}
le.toCommandProperties = So;
var Ao = O && O.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), Ro = O && O.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), $o = O && O.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.hasOwnProperty.call(e, r) && Ao(t, e, r);
  return Ro(t, e), t;
};
Object.defineProperty(Se, "__esModule", { value: !0 }), Se.issue = Se.issueCommand = void 0;
const Go = $o(Le.default), Or = le;
function Pr(e, t, r) {
  const n = new ko(e, t, r);
  process.stdout.write(n.toString() + Go.EOL);
}
Se.issueCommand = Pr;
function Co(e, t = "") {
  Pr(e, {}, t);
}
Se.issue = Co;
const Sr = "::";
class ko {
  constructor(t, r, n) {
    t || (t = "missing.command"), this.command = t, this.properties = r, this.message = n;
  }
  toString() {
    let t = Sr + this.command;
    if (this.properties && Object.keys(this.properties).length > 0) {
      t += " ";
      let r = !0;
      for (const n in this.properties)
        if (this.properties.hasOwnProperty(n)) {
          const s = this.properties[n];
          s && (r ? r = !1 : t += ",", t += `${n}=${Uo(s)}`);
        }
    }
    return t += `${Sr}${Do(this.message)}`, t;
  }
}
function Do(e) {
  return Or.toCommandValue(e).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A");
}
function Uo(e) {
  return Or.toCommandValue(e).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A").replace(/:/g, "%3A").replace(/,/g, "%2C");
}
var at = {}, jo = O && O.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), Fo = O && O.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), Ar = O && O.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.hasOwnProperty.call(e, r) && jo(t, e, r);
  return Fo(t, e), t;
};
Object.defineProperty(at, "__esModule", { value: !0 }), at.issueCommand = void 0;
const Rr = Ar(ce.default), xo = Ar(Le.default), Io = le;
function Bo(e, t) {
  const r = process.env[`GITHUB_${e}`];
  if (!r)
    throw new Error(`Unable to find environment variable for file command ${e}`);
  if (!Rr.existsSync(r))
    throw new Error(`Missing file at path: ${r}`);
  Rr.appendFileSync(r, `${Io.toCommandValue(t)}${xo.EOL}`, {
    encoding: "utf8"
  });
}
at.issueCommand = Bo;
var ct = {}, $r = {}, lt = {};
Object.defineProperty(lt, "__esModule", { value: !0 });
function Lo(e) {
  let t = e.protocol === "https:", r;
  if (Gr(e))
    return r;
  let n;
  return t ? n = process.env.https_proxy || process.env.HTTPS_PROXY : n = process.env.http_proxy || process.env.HTTP_PROXY, n && (r = new URL(n)), r;
}
lt.getProxyUrl = Lo;
function Gr(e) {
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
lt.checkBypass = Gr;
var Ae = {}, qo = Eo.default, Dt = Me.default, Cr = it.default, Mo = _r.default, No = Er.default;
Ae.httpOverHttp = zo, Ae.httpsOverHttp = Ho, Ae.httpOverHttps = Wo, Ae.httpsOverHttps = Ko;
function zo(e) {
  var t = new ee(e);
  return t.request = Dt.request, t;
}
function Ho(e) {
  var t = new ee(e);
  return t.request = Dt.request, t.createSocket = kr, t.defaultPort = 443, t;
}
function Wo(e) {
  var t = new ee(e);
  return t.request = Cr.request, t;
}
function Ko(e) {
  var t = new ee(e);
  return t.request = Cr.request, t.createSocket = kr, t.defaultPort = 443, t;
}
function ee(e) {
  var t = this;
  t.options = e || {}, t.proxyOptions = t.options.proxy || {}, t.maxSockets = t.options.maxSockets || Dt.Agent.defaultMaxSockets, t.requests = [], t.sockets = [], t.on("free", function(n, s, o, i) {
    for (var a = Dr(s, o, i), l = 0, p = t.requests.length; l < p; ++l) {
      var h = t.requests[l];
      if (h.host === a.host && h.port === a.port) {
        t.requests.splice(l, 1), h.request.onSocket(n);
        return;
      }
    }
    n.destroy(), t.removeSocket(n);
  });
}
No.inherits(ee, Mo.EventEmitter), ee.prototype.addRequest = function(t, r, n, s) {
  var o = this, i = Ut({ request: t }, o.options, Dr(r, n, s));
  if (o.sockets.length >= this.maxSockets) {
    o.requests.push(i);
    return;
  }
  o.createSocket(i, function(a) {
    a.on("free", l), a.on("close", p), a.on("agentRemove", p), t.onSocket(a);
    function l() {
      o.emit("free", a, i);
    }
    function p(h) {
      o.removeSocket(a), a.removeListener("free", l), a.removeListener("close", p), a.removeListener("agentRemove", p);
    }
  });
}, ee.prototype.createSocket = function(t, r) {
  var n = this, s = {};
  n.sockets.push(s);
  var o = Ut({}, n.proxyOptions, {
    method: "CONNECT",
    path: t.host + ":" + t.port,
    agent: !1,
    headers: {
      host: t.host + ":" + t.port
    }
  });
  t.localAddress && (o.localAddress = t.localAddress), o.proxyAuth && (o.headers = o.headers || {}, o.headers["Proxy-Authorization"] = "Basic " + new Buffer(o.proxyAuth).toString("base64")), ue("making CONNECT request");
  var i = n.request(o);
  i.useChunkedEncodingByDefault = !1, i.once("response", a), i.once("upgrade", l), i.once("connect", p), i.once("error", h), i.end();
  function a(w) {
    w.upgrade = !0;
  }
  function l(w, _, $) {
    process.nextTick(function() {
      p(w, _, $);
    });
  }
  function p(w, _, $) {
    if (i.removeAllListeners(), _.removeAllListeners(), w.statusCode !== 200) {
      ue("tunneling socket could not be established, statusCode=%d", w.statusCode), _.destroy();
      var E = new Error("tunneling socket could not be established, statusCode=" + w.statusCode);
      E.code = "ECONNRESET", t.request.emit("error", E), n.removeSocket(s);
      return;
    }
    if ($.length > 0) {
      ue("got illegal response body from proxy"), _.destroy();
      var E = new Error("got illegal response body from proxy");
      E.code = "ECONNRESET", t.request.emit("error", E), n.removeSocket(s);
      return;
    }
    return ue("tunneling connection has established"), n.sockets[n.sockets.indexOf(s)] = _, r(_);
  }
  function h(w) {
    i.removeAllListeners(), ue(`tunneling socket could not be established, cause=%s
`, w.message, w.stack);
    var _ = new Error("tunneling socket could not be established, cause=" + w.message);
    _.code = "ECONNRESET", t.request.emit("error", _), n.removeSocket(s);
  }
}, ee.prototype.removeSocket = function(t) {
  var r = this.sockets.indexOf(t);
  if (r !== -1) {
    this.sockets.splice(r, 1);
    var n = this.requests.shift();
    n && this.createSocket(n, function(s) {
      n.request.onSocket(s);
    });
  }
};
function kr(e, t) {
  var r = this;
  ee.prototype.createSocket.call(r, e, function(n) {
    var s = e.request.getHeader("host"), o = Ut({}, r.options, {
      socket: n,
      servername: s ? s.replace(/:.*$/, "") : e.host
    }), i = qo.connect(0, o);
    r.sockets[r.sockets.indexOf(n)] = i, t(i);
  });
}
function Dr(e, t, r) {
  return typeof e == "string" ? {
    host: e,
    port: t,
    localAddress: r
  } : e;
}
function Ut(e) {
  for (var t = 1, r = arguments.length; t < r; ++t) {
    var n = arguments[t];
    if (typeof n == "object")
      for (var s = Object.keys(n), o = 0, i = s.length; o < i; ++o) {
        var a = s[o];
        n[a] !== void 0 && (e[a] = n[a]);
      }
  }
  return e;
}
var ue;
process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG) ? ue = function() {
  var e = Array.prototype.slice.call(arguments);
  typeof e[0] == "string" ? e[0] = "TUNNEL: " + e[0] : e.unshift("TUNNEL:"), console.error.apply(console, e);
} : ue = function() {
}, Ae.debug = ue;
var Ur = Ae;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = Me.default, r = it.default, n = lt;
  let s;
  var o;
  (function(d) {
    d[d.OK = 200] = "OK", d[d.MultipleChoices = 300] = "MultipleChoices", d[d.MovedPermanently = 301] = "MovedPermanently", d[d.ResourceMoved = 302] = "ResourceMoved", d[d.SeeOther = 303] = "SeeOther", d[d.NotModified = 304] = "NotModified", d[d.UseProxy = 305] = "UseProxy", d[d.SwitchProxy = 306] = "SwitchProxy", d[d.TemporaryRedirect = 307] = "TemporaryRedirect", d[d.PermanentRedirect = 308] = "PermanentRedirect", d[d.BadRequest = 400] = "BadRequest", d[d.Unauthorized = 401] = "Unauthorized", d[d.PaymentRequired = 402] = "PaymentRequired", d[d.Forbidden = 403] = "Forbidden", d[d.NotFound = 404] = "NotFound", d[d.MethodNotAllowed = 405] = "MethodNotAllowed", d[d.NotAcceptable = 406] = "NotAcceptable", d[d.ProxyAuthenticationRequired = 407] = "ProxyAuthenticationRequired", d[d.RequestTimeout = 408] = "RequestTimeout", d[d.Conflict = 409] = "Conflict", d[d.Gone = 410] = "Gone", d[d.TooManyRequests = 429] = "TooManyRequests", d[d.InternalServerError = 500] = "InternalServerError", d[d.NotImplemented = 501] = "NotImplemented", d[d.BadGateway = 502] = "BadGateway", d[d.ServiceUnavailable = 503] = "ServiceUnavailable", d[d.GatewayTimeout = 504] = "GatewayTimeout";
  })(o = e.HttpCodes || (e.HttpCodes = {}));
  var i;
  (function(d) {
    d.Accept = "accept", d.ContentType = "content-type";
  })(i = e.Headers || (e.Headers = {}));
  var a;
  (function(d) {
    d.ApplicationJson = "application/json";
  })(a = e.MediaTypes || (e.MediaTypes = {}));
  function l(d) {
    let f = n.getProxyUrl(new URL(d));
    return f ? f.href : "";
  }
  e.getProxyUrl = l;
  const p = [
    o.MovedPermanently,
    o.ResourceMoved,
    o.SeeOther,
    o.TemporaryRedirect,
    o.PermanentRedirect
  ], h = [
    o.BadGateway,
    o.ServiceUnavailable,
    o.GatewayTimeout
  ], w = ["OPTIONS", "GET", "DELETE", "HEAD"], _ = 10, $ = 5;
  class E extends Error {
    constructor(f, c) {
      super(f), this.name = "HttpClientError", this.statusCode = c, Object.setPrototypeOf(this, E.prototype);
    }
  }
  e.HttpClientError = E;
  class m {
    constructor(f) {
      this.message = f;
    }
    readBody() {
      return new Promise(async (f, c) => {
        let u = Buffer.alloc(0);
        this.message.on("data", (g) => {
          u = Buffer.concat([u, g]);
        }), this.message.on("end", () => {
          f(u.toString());
        });
      });
    }
  }
  e.HttpClientResponse = m;
  function b(d) {
    return new URL(d).protocol === "https:";
  }
  e.isHttps = b;
  class T {
    constructor(f, c, u) {
      this._ignoreSslError = !1, this._allowRedirects = !0, this._allowRedirectDowngrade = !1, this._maxRedirects = 50, this._allowRetries = !1, this._maxRetries = 1, this._keepAlive = !1, this._disposed = !1, this.userAgent = f, this.handlers = c || [], this.requestOptions = u, u && (u.ignoreSslError != null && (this._ignoreSslError = u.ignoreSslError), this._socketTimeout = u.socketTimeout, u.allowRedirects != null && (this._allowRedirects = u.allowRedirects), u.allowRedirectDowngrade != null && (this._allowRedirectDowngrade = u.allowRedirectDowngrade), u.maxRedirects != null && (this._maxRedirects = Math.max(u.maxRedirects, 0)), u.keepAlive != null && (this._keepAlive = u.keepAlive), u.allowRetries != null && (this._allowRetries = u.allowRetries), u.maxRetries != null && (this._maxRetries = u.maxRetries));
    }
    options(f, c) {
      return this.request("OPTIONS", f, null, c || {});
    }
    get(f, c) {
      return this.request("GET", f, null, c || {});
    }
    del(f, c) {
      return this.request("DELETE", f, null, c || {});
    }
    post(f, c, u) {
      return this.request("POST", f, c, u || {});
    }
    patch(f, c, u) {
      return this.request("PATCH", f, c, u || {});
    }
    put(f, c, u) {
      return this.request("PUT", f, c, u || {});
    }
    head(f, c) {
      return this.request("HEAD", f, null, c || {});
    }
    sendStream(f, c, u, g) {
      return this.request(f, c, u, g);
    }
    async getJson(f, c = {}) {
      c[i.Accept] = this._getExistingOrDefaultHeader(c, i.Accept, a.ApplicationJson);
      let u = await this.get(f, c);
      return this._processResponse(u, this.requestOptions);
    }
    async postJson(f, c, u = {}) {
      let g = JSON.stringify(c, null, 2);
      u[i.Accept] = this._getExistingOrDefaultHeader(u, i.Accept, a.ApplicationJson), u[i.ContentType] = this._getExistingOrDefaultHeader(u, i.ContentType, a.ApplicationJson);
      let y = await this.post(f, g, u);
      return this._processResponse(y, this.requestOptions);
    }
    async putJson(f, c, u = {}) {
      let g = JSON.stringify(c, null, 2);
      u[i.Accept] = this._getExistingOrDefaultHeader(u, i.Accept, a.ApplicationJson), u[i.ContentType] = this._getExistingOrDefaultHeader(u, i.ContentType, a.ApplicationJson);
      let y = await this.put(f, g, u);
      return this._processResponse(y, this.requestOptions);
    }
    async patchJson(f, c, u = {}) {
      let g = JSON.stringify(c, null, 2);
      u[i.Accept] = this._getExistingOrDefaultHeader(u, i.Accept, a.ApplicationJson), u[i.ContentType] = this._getExistingOrDefaultHeader(u, i.ContentType, a.ApplicationJson);
      let y = await this.patch(f, g, u);
      return this._processResponse(y, this.requestOptions);
    }
    async request(f, c, u, g) {
      if (this._disposed)
        throw new Error("Client has already been disposed.");
      let y = new URL(c), A = this._prepareRequest(f, y, g), P = this._allowRetries && w.indexOf(f) != -1 ? this._maxRetries + 1 : 1, S = 0, R;
      for (; S < P; ) {
        if (R = await this.requestRaw(A, u), R && R.message && R.message.statusCode === o.Unauthorized) {
          let B;
          for (let F = 0; F < this.handlers.length; F++)
            if (this.handlers[F].canHandleAuthentication(R)) {
              B = this.handlers[F];
              break;
            }
          return B ? B.handleAuthentication(this, A, u) : R;
        }
        let N = this._maxRedirects;
        for (; p.indexOf(R.message.statusCode) != -1 && this._allowRedirects && N > 0; ) {
          const B = R.message.headers.location;
          if (!B)
            break;
          let F = new URL(B);
          if (y.protocol == "https:" && y.protocol != F.protocol && !this._allowRedirectDowngrade)
            throw new Error("Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.");
          if (await R.readBody(), F.hostname !== y.hostname)
            for (let we in g)
              we.toLowerCase() === "authorization" && delete g[we];
          A = this._prepareRequest(f, F, g), R = await this.requestRaw(A, u), N--;
        }
        if (h.indexOf(R.message.statusCode) == -1)
          return R;
        S += 1, S < P && (await R.readBody(), await this._performExponentialBackoff(S));
      }
      return R;
    }
    dispose() {
      this._agent && this._agent.destroy(), this._disposed = !0;
    }
    requestRaw(f, c) {
      return new Promise((u, g) => {
        let y = function(A, P) {
          A && g(A), u(P);
        };
        this.requestRawWithCallback(f, c, y);
      });
    }
    requestRawWithCallback(f, c, u) {
      let g;
      typeof c == "string" && (f.options.headers["Content-Length"] = Buffer.byteLength(c, "utf8"));
      let y = !1, A = (S, R) => {
        y || (y = !0, u(S, R));
      }, P = f.httpModule.request(f.options, (S) => {
        let R = new m(S);
        A(null, R);
      });
      P.on("socket", (S) => {
        g = S;
      }), P.setTimeout(this._socketTimeout || 3 * 6e4, () => {
        g && g.end(), A(new Error("Request timeout: " + f.options.path), null);
      }), P.on("error", function(S) {
        A(S, null);
      }), c && typeof c == "string" && P.write(c, "utf8"), c && typeof c != "string" ? (c.on("close", function() {
        P.end();
      }), c.pipe(P)) : P.end();
    }
    getAgent(f) {
      let c = new URL(f);
      return this._getAgent(c);
    }
    _prepareRequest(f, c, u) {
      const g = {};
      g.parsedUrl = c;
      const y = g.parsedUrl.protocol === "https:";
      g.httpModule = y ? r : t;
      const A = y ? 443 : 80;
      return g.options = {}, g.options.host = g.parsedUrl.hostname, g.options.port = g.parsedUrl.port ? parseInt(g.parsedUrl.port) : A, g.options.path = (g.parsedUrl.pathname || "") + (g.parsedUrl.search || ""), g.options.method = f, g.options.headers = this._mergeHeaders(u), this.userAgent != null && (g.options.headers["user-agent"] = this.userAgent), g.options.agent = this._getAgent(g.parsedUrl), this.handlers && this.handlers.forEach((P) => {
        P.prepareRequest(g.options);
      }), g;
    }
    _mergeHeaders(f) {
      const c = (u) => Object.keys(u).reduce((g, y) => (g[y.toLowerCase()] = u[y], g), {});
      return this.requestOptions && this.requestOptions.headers ? Object.assign({}, c(this.requestOptions.headers), c(f)) : c(f || {});
    }
    _getExistingOrDefaultHeader(f, c, u) {
      const g = (A) => Object.keys(A).reduce((P, S) => (P[S.toLowerCase()] = A[S], P), {});
      let y;
      return this.requestOptions && this.requestOptions.headers && (y = g(this.requestOptions.headers)[c]), f[c] || y || u;
    }
    _getAgent(f) {
      let c, u = n.getProxyUrl(f), g = u && u.hostname;
      if (this._keepAlive && g && (c = this._proxyAgent), this._keepAlive && !g && (c = this._agent), c)
        return c;
      const y = f.protocol === "https:";
      let A = 100;
      if (this.requestOptions && (A = this.requestOptions.maxSockets || t.globalAgent.maxSockets), g) {
        s || (s = Ur);
        const P = {
          maxSockets: A,
          keepAlive: this._keepAlive,
          proxy: {
            ...(u.username || u.password) && {
              proxyAuth: `${u.username}:${u.password}`
            },
            host: u.hostname,
            port: u.port
          }
        };
        let S;
        const R = u.protocol === "https:";
        y ? S = R ? s.httpsOverHttps : s.httpsOverHttp : S = R ? s.httpOverHttps : s.httpOverHttp, c = S(P), this._proxyAgent = c;
      }
      if (this._keepAlive && !c) {
        const P = { keepAlive: this._keepAlive, maxSockets: A };
        c = y ? new r.Agent(P) : new t.Agent(P), this._agent = c;
      }
      return c || (c = y ? r.globalAgent : t.globalAgent), y && this._ignoreSslError && (c.options = Object.assign(c.options || {}, {
        rejectUnauthorized: !1
      })), c;
    }
    _performExponentialBackoff(f) {
      f = Math.min(_, f);
      const c = $ * Math.pow(2, f);
      return new Promise((u) => setTimeout(() => u(), c));
    }
    static dateTimeDeserializer(f, c) {
      if (typeof c == "string") {
        let u = new Date(c);
        if (!isNaN(u.valueOf()))
          return u;
      }
      return c;
    }
    async _processResponse(f, c) {
      return new Promise(async (u, g) => {
        const y = f.message.statusCode, A = {
          statusCode: y,
          result: null,
          headers: {}
        };
        y == o.NotFound && u(A);
        let P, S;
        try {
          S = await f.readBody(), S && S.length > 0 && (c && c.deserializeDates ? P = JSON.parse(S, T.dateTimeDeserializer) : P = JSON.parse(S), A.result = P), A.headers = f.message.headers;
        } catch {
        }
        if (y > 299) {
          let R;
          P && P.message ? R = P.message : S && S.length > 0 ? R = S : R = "Failed request: (" + y + ")";
          let N = new E(R, y);
          N.result = A.result, g(N);
        } else
          u(A);
      });
    }
  }
  e.HttpClient = T;
})($r);
var Ne = {};
Object.defineProperty(Ne, "__esModule", { value: !0 });
class Vo {
  constructor(t, r) {
    this.username = t, this.password = r;
  }
  prepareRequest(t) {
    t.headers.Authorization = "Basic " + Buffer.from(this.username + ":" + this.password).toString("base64");
  }
  canHandleAuthentication(t) {
    return !1;
  }
  handleAuthentication(t, r, n) {
    return null;
  }
}
Ne.BasicCredentialHandler = Vo;
class Jo {
  constructor(t) {
    this.token = t;
  }
  prepareRequest(t) {
    t.headers.Authorization = "Bearer " + this.token;
  }
  canHandleAuthentication(t) {
    return !1;
  }
  handleAuthentication(t, r, n) {
    return null;
  }
}
Ne.BearerCredentialHandler = Jo;
class Yo {
  constructor(t) {
    this.token = t;
  }
  prepareRequest(t) {
    t.headers.Authorization = "Basic " + Buffer.from("PAT:" + this.token).toString("base64");
  }
  canHandleAuthentication(t) {
    return !1;
  }
  handleAuthentication(t, r, n) {
    return null;
  }
}
Ne.PersonalAccessTokenCredentialHandler = Yo;
var jr = O && O.__awaiter || function(e, t, r, n) {
  function s(o) {
    return o instanceof r ? o : new r(function(i) {
      i(o);
    });
  }
  return new (r || (r = Promise))(function(o, i) {
    function a(h) {
      try {
        p(n.next(h));
      } catch (w) {
        i(w);
      }
    }
    function l(h) {
      try {
        p(n.throw(h));
      } catch (w) {
        i(w);
      }
    }
    function p(h) {
      h.done ? o(h.value) : s(h.value).then(a, l);
    }
    p((n = n.apply(e, t || [])).next());
  });
};
Object.defineProperty(ct, "__esModule", { value: !0 }), ct.OidcClient = void 0;
const Zo = $r, Xo = Ne, Fr = G;
class Ie {
  static createHttpClient(t = !0, r = 10) {
    const n = {
      allowRetries: t,
      maxRetries: r
    };
    return new Zo.HttpClient("actions/oidc-client", [new Xo.BearerCredentialHandler(Ie.getRequestToken())], n);
  }
  static getRequestToken() {
    const t = process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN;
    if (!t)
      throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable");
    return t;
  }
  static getIDTokenUrl() {
    const t = process.env.ACTIONS_ID_TOKEN_REQUEST_URL;
    if (!t)
      throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable");
    return t;
  }
  static getCall(t) {
    var r;
    return jr(this, void 0, void 0, function* () {
      const o = (r = (yield Ie.createHttpClient().getJson(t).catch((i) => {
        throw new Error(`Failed to get ID Token. 
 
        Error Code : ${i.statusCode}
 
        Error Message: ${i.result.message}`);
      })).result) === null || r === void 0 ? void 0 : r.value;
      if (!o)
        throw new Error("Response json body do not have ID Token field");
      return o;
    });
  }
  static getIDToken(t) {
    return jr(this, void 0, void 0, function* () {
      try {
        let r = Ie.getIDTokenUrl();
        if (t) {
          const s = encodeURIComponent(t);
          r = `${r}&audience=${s}`;
        }
        Fr.debug(`ID token url is ${r}`);
        const n = yield Ie.getCall(r);
        return Fr.setSecret(n), n;
      } catch (r) {
        throw new Error(`Error message: ${r.message}`);
      }
    });
  }
}
ct.OidcClient = Ie, function(e) {
  var t = O && O.__createBinding || (Object.create ? function(v, C, D, I) {
    I === void 0 && (I = D), Object.defineProperty(v, I, { enumerable: !0, get: function() {
      return C[D];
    } });
  } : function(v, C, D, I) {
    I === void 0 && (I = D), v[I] = C[D];
  }), r = O && O.__setModuleDefault || (Object.create ? function(v, C) {
    Object.defineProperty(v, "default", { enumerable: !0, value: C });
  } : function(v, C) {
    v.default = C;
  }), n = O && O.__importStar || function(v) {
    if (v && v.__esModule)
      return v;
    var C = {};
    if (v != null)
      for (var D in v)
        D !== "default" && Object.hasOwnProperty.call(v, D) && t(C, v, D);
    return r(C, v), C;
  }, s = O && O.__awaiter || function(v, C, D, I) {
    function be(ye) {
      return ye instanceof D ? ye : new D(function(ot) {
        ot(ye);
      });
    }
    return new (D || (D = Promise))(function(ye, ot) {
      function so(Te) {
        try {
          $t(I.next(Te));
        } catch (Gt) {
          ot(Gt);
        }
      }
      function oo(Te) {
        try {
          $t(I.throw(Te));
        } catch (Gt) {
          ot(Gt);
        }
      }
      function $t(Te) {
        Te.done ? ye(Te.value) : be(Te.value).then(so, oo);
      }
      $t((I = I.apply(v, C || [])).next());
    });
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getIDToken = e.getState = e.saveState = e.group = e.endGroup = e.startGroup = e.info = e.notice = e.warning = e.error = e.debug = e.isDebug = e.setFailed = e.setCommandEcho = e.setOutput = e.getBooleanInput = e.getMultilineInput = e.getInput = e.addPath = e.setSecret = e.exportVariable = e.ExitCode = void 0;
  const o = Se, i = at, a = le, l = n(Le.default), p = n(qe.default), h = ct;
  var w;
  (function(v) {
    v[v.Success = 0] = "Success", v[v.Failure = 1] = "Failure";
  })(w = e.ExitCode || (e.ExitCode = {}));
  function _(v, C) {
    const D = a.toCommandValue(C);
    if (process.env[v] = D, process.env.GITHUB_ENV || "") {
      const be = "_GitHubActionsFileCommandDelimeter_", ye = `${v}<<${be}${l.EOL}${D}${l.EOL}${be}`;
      i.issueCommand("ENV", ye);
    } else
      o.issueCommand("set-env", { name: v }, D);
  }
  e.exportVariable = _;
  function $(v) {
    o.issueCommand("add-mask", {}, v);
  }
  e.setSecret = $;
  function E(v) {
    process.env.GITHUB_PATH || "" ? i.issueCommand("PATH", v) : o.issueCommand("add-path", {}, v), process.env.PATH = `${v}${p.delimiter}${process.env.PATH}`;
  }
  e.addPath = E;
  function m(v, C) {
    const D = process.env[`INPUT_${v.replace(/ /g, "_").toUpperCase()}`] || "";
    if (C && C.required && !D)
      throw new Error(`Input required and not supplied: ${v}`);
    return C && C.trimWhitespace === !1 ? D : D.trim();
  }
  e.getInput = m;
  function b(v, C) {
    return m(v, C).split(`
`).filter((I) => I !== "");
  }
  e.getMultilineInput = b;
  function T(v, C) {
    const D = ["true", "True", "TRUE"], I = ["false", "False", "FALSE"], be = m(v, C);
    if (D.includes(be))
      return !0;
    if (I.includes(be))
      return !1;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${v}
Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
  }
  e.getBooleanInput = T;
  function d(v, C) {
    process.stdout.write(l.EOL), o.issueCommand("set-output", { name: v }, C);
  }
  e.setOutput = d;
  function f(v) {
    o.issue("echo", v ? "on" : "off");
  }
  e.setCommandEcho = f;
  function c(v) {
    process.exitCode = w.Failure, y(v);
  }
  e.setFailed = c;
  function u() {
    return process.env.RUNNER_DEBUG === "1";
  }
  e.isDebug = u;
  function g(v) {
    o.issueCommand("debug", {}, v);
  }
  e.debug = g;
  function y(v, C = {}) {
    o.issueCommand("error", a.toCommandProperties(C), v instanceof Error ? v.toString() : v);
  }
  e.error = y;
  function A(v, C = {}) {
    o.issueCommand("warning", a.toCommandProperties(C), v instanceof Error ? v.toString() : v);
  }
  e.warning = A;
  function P(v, C = {}) {
    o.issueCommand("notice", a.toCommandProperties(C), v instanceof Error ? v.toString() : v);
  }
  e.notice = P;
  function S(v) {
    process.stdout.write(v + l.EOL);
  }
  e.info = S;
  function R(v) {
    o.issue("group", v);
  }
  e.startGroup = R;
  function N() {
    o.issue("endgroup");
  }
  e.endGroup = N;
  function B(v, C) {
    return s(this, void 0, void 0, function* () {
      R(v);
      let D;
      try {
        D = yield C();
      } finally {
        N();
      }
      return D;
    });
  }
  e.group = B;
  function F(v, C) {
    o.issueCommand("save-state", { name: v }, C);
  }
  e.saveState = F;
  function we(v) {
    return process.env[`STATE_${v}`] || "";
  }
  e.getState = we;
  function no(v) {
    return s(this, void 0, void 0, function* () {
      return yield h.OidcClient.getIDToken(v);
    });
  }
  e.getIDToken = no;
}(G);
var ze = {}, He = {};
Object.defineProperty(He, "__esModule", { value: !0 }), He.Context = void 0;
const xr = ce.default, Qo = Le.default;
class ei {
  constructor() {
    if (this.payload = {}, process.env.GITHUB_EVENT_PATH)
      if (xr.existsSync(process.env.GITHUB_EVENT_PATH))
        this.payload = JSON.parse(xr.readFileSync(process.env.GITHUB_EVENT_PATH, { encoding: "utf8" }));
      else {
        const t = process.env.GITHUB_EVENT_PATH;
        process.stdout.write(`GITHUB_EVENT_PATH ${t} does not exist${Qo.EOL}`);
      }
    this.eventName = process.env.GITHUB_EVENT_NAME, this.sha = process.env.GITHUB_SHA, this.ref = process.env.GITHUB_REF, this.workflow = process.env.GITHUB_WORKFLOW, this.action = process.env.GITHUB_ACTION, this.actor = process.env.GITHUB_ACTOR, this.job = process.env.GITHUB_JOB, this.runNumber = parseInt(process.env.GITHUB_RUN_NUMBER, 10), this.runId = parseInt(process.env.GITHUB_RUN_ID, 10);
  }
  get issue() {
    const t = this.payload;
    return Object.assign(Object.assign({}, this.repo), { number: (t.issue || t.pull_request || t).number });
  }
  get repo() {
    if (process.env.GITHUB_REPOSITORY) {
      const [t, r] = process.env.GITHUB_REPOSITORY.split("/");
      return { owner: t, repo: r };
    }
    if (this.payload.repository)
      return {
        owner: this.payload.repository.owner.login,
        repo: this.payload.repository.name
      };
    throw new Error("context.repo requires a GITHUB_REPOSITORY environment variable like 'owner/repo'");
  }
}
He.Context = ei;
var pe = {}, de = {}, Ir = {}, ut = {};
Object.defineProperty(ut, "__esModule", { value: !0 });
function ti(e) {
  let t = e.protocol === "https:", r;
  if (Br(e))
    return r;
  let n;
  return t ? n = process.env.https_proxy || process.env.HTTPS_PROXY : n = process.env.http_proxy || process.env.HTTP_PROXY, n && (r = new URL(n)), r;
}
ut.getProxyUrl = ti;
function Br(e) {
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
ut.checkBypass = Br, function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = Me.default, r = it.default, n = ut;
  let s;
  var o;
  (function(d) {
    d[d.OK = 200] = "OK", d[d.MultipleChoices = 300] = "MultipleChoices", d[d.MovedPermanently = 301] = "MovedPermanently", d[d.ResourceMoved = 302] = "ResourceMoved", d[d.SeeOther = 303] = "SeeOther", d[d.NotModified = 304] = "NotModified", d[d.UseProxy = 305] = "UseProxy", d[d.SwitchProxy = 306] = "SwitchProxy", d[d.TemporaryRedirect = 307] = "TemporaryRedirect", d[d.PermanentRedirect = 308] = "PermanentRedirect", d[d.BadRequest = 400] = "BadRequest", d[d.Unauthorized = 401] = "Unauthorized", d[d.PaymentRequired = 402] = "PaymentRequired", d[d.Forbidden = 403] = "Forbidden", d[d.NotFound = 404] = "NotFound", d[d.MethodNotAllowed = 405] = "MethodNotAllowed", d[d.NotAcceptable = 406] = "NotAcceptable", d[d.ProxyAuthenticationRequired = 407] = "ProxyAuthenticationRequired", d[d.RequestTimeout = 408] = "RequestTimeout", d[d.Conflict = 409] = "Conflict", d[d.Gone = 410] = "Gone", d[d.TooManyRequests = 429] = "TooManyRequests", d[d.InternalServerError = 500] = "InternalServerError", d[d.NotImplemented = 501] = "NotImplemented", d[d.BadGateway = 502] = "BadGateway", d[d.ServiceUnavailable = 503] = "ServiceUnavailable", d[d.GatewayTimeout = 504] = "GatewayTimeout";
  })(o = e.HttpCodes || (e.HttpCodes = {}));
  var i;
  (function(d) {
    d.Accept = "accept", d.ContentType = "content-type";
  })(i = e.Headers || (e.Headers = {}));
  var a;
  (function(d) {
    d.ApplicationJson = "application/json";
  })(a = e.MediaTypes || (e.MediaTypes = {}));
  function l(d) {
    let f = n.getProxyUrl(new URL(d));
    return f ? f.href : "";
  }
  e.getProxyUrl = l;
  const p = [
    o.MovedPermanently,
    o.ResourceMoved,
    o.SeeOther,
    o.TemporaryRedirect,
    o.PermanentRedirect
  ], h = [
    o.BadGateway,
    o.ServiceUnavailable,
    o.GatewayTimeout
  ], w = ["OPTIONS", "GET", "DELETE", "HEAD"], _ = 10, $ = 5;
  class E extends Error {
    constructor(f, c) {
      super(f), this.name = "HttpClientError", this.statusCode = c, Object.setPrototypeOf(this, E.prototype);
    }
  }
  e.HttpClientError = E;
  class m {
    constructor(f) {
      this.message = f;
    }
    readBody() {
      return new Promise(async (f, c) => {
        let u = Buffer.alloc(0);
        this.message.on("data", (g) => {
          u = Buffer.concat([u, g]);
        }), this.message.on("end", () => {
          f(u.toString());
        });
      });
    }
  }
  e.HttpClientResponse = m;
  function b(d) {
    return new URL(d).protocol === "https:";
  }
  e.isHttps = b;
  class T {
    constructor(f, c, u) {
      this._ignoreSslError = !1, this._allowRedirects = !0, this._allowRedirectDowngrade = !1, this._maxRedirects = 50, this._allowRetries = !1, this._maxRetries = 1, this._keepAlive = !1, this._disposed = !1, this.userAgent = f, this.handlers = c || [], this.requestOptions = u, u && (u.ignoreSslError != null && (this._ignoreSslError = u.ignoreSslError), this._socketTimeout = u.socketTimeout, u.allowRedirects != null && (this._allowRedirects = u.allowRedirects), u.allowRedirectDowngrade != null && (this._allowRedirectDowngrade = u.allowRedirectDowngrade), u.maxRedirects != null && (this._maxRedirects = Math.max(u.maxRedirects, 0)), u.keepAlive != null && (this._keepAlive = u.keepAlive), u.allowRetries != null && (this._allowRetries = u.allowRetries), u.maxRetries != null && (this._maxRetries = u.maxRetries));
    }
    options(f, c) {
      return this.request("OPTIONS", f, null, c || {});
    }
    get(f, c) {
      return this.request("GET", f, null, c || {});
    }
    del(f, c) {
      return this.request("DELETE", f, null, c || {});
    }
    post(f, c, u) {
      return this.request("POST", f, c, u || {});
    }
    patch(f, c, u) {
      return this.request("PATCH", f, c, u || {});
    }
    put(f, c, u) {
      return this.request("PUT", f, c, u || {});
    }
    head(f, c) {
      return this.request("HEAD", f, null, c || {});
    }
    sendStream(f, c, u, g) {
      return this.request(f, c, u, g);
    }
    async getJson(f, c = {}) {
      c[i.Accept] = this._getExistingOrDefaultHeader(c, i.Accept, a.ApplicationJson);
      let u = await this.get(f, c);
      return this._processResponse(u, this.requestOptions);
    }
    async postJson(f, c, u = {}) {
      let g = JSON.stringify(c, null, 2);
      u[i.Accept] = this._getExistingOrDefaultHeader(u, i.Accept, a.ApplicationJson), u[i.ContentType] = this._getExistingOrDefaultHeader(u, i.ContentType, a.ApplicationJson);
      let y = await this.post(f, g, u);
      return this._processResponse(y, this.requestOptions);
    }
    async putJson(f, c, u = {}) {
      let g = JSON.stringify(c, null, 2);
      u[i.Accept] = this._getExistingOrDefaultHeader(u, i.Accept, a.ApplicationJson), u[i.ContentType] = this._getExistingOrDefaultHeader(u, i.ContentType, a.ApplicationJson);
      let y = await this.put(f, g, u);
      return this._processResponse(y, this.requestOptions);
    }
    async patchJson(f, c, u = {}) {
      let g = JSON.stringify(c, null, 2);
      u[i.Accept] = this._getExistingOrDefaultHeader(u, i.Accept, a.ApplicationJson), u[i.ContentType] = this._getExistingOrDefaultHeader(u, i.ContentType, a.ApplicationJson);
      let y = await this.patch(f, g, u);
      return this._processResponse(y, this.requestOptions);
    }
    async request(f, c, u, g) {
      if (this._disposed)
        throw new Error("Client has already been disposed.");
      let y = new URL(c), A = this._prepareRequest(f, y, g), P = this._allowRetries && w.indexOf(f) != -1 ? this._maxRetries + 1 : 1, S = 0, R;
      for (; S < P; ) {
        if (R = await this.requestRaw(A, u), R && R.message && R.message.statusCode === o.Unauthorized) {
          let B;
          for (let F = 0; F < this.handlers.length; F++)
            if (this.handlers[F].canHandleAuthentication(R)) {
              B = this.handlers[F];
              break;
            }
          return B ? B.handleAuthentication(this, A, u) : R;
        }
        let N = this._maxRedirects;
        for (; p.indexOf(R.message.statusCode) != -1 && this._allowRedirects && N > 0; ) {
          const B = R.message.headers.location;
          if (!B)
            break;
          let F = new URL(B);
          if (y.protocol == "https:" && y.protocol != F.protocol && !this._allowRedirectDowngrade)
            throw new Error("Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.");
          if (await R.readBody(), F.hostname !== y.hostname)
            for (let we in g)
              we.toLowerCase() === "authorization" && delete g[we];
          A = this._prepareRequest(f, F, g), R = await this.requestRaw(A, u), N--;
        }
        if (h.indexOf(R.message.statusCode) == -1)
          return R;
        S += 1, S < P && (await R.readBody(), await this._performExponentialBackoff(S));
      }
      return R;
    }
    dispose() {
      this._agent && this._agent.destroy(), this._disposed = !0;
    }
    requestRaw(f, c) {
      return new Promise((u, g) => {
        let y = function(A, P) {
          A && g(A), u(P);
        };
        this.requestRawWithCallback(f, c, y);
      });
    }
    requestRawWithCallback(f, c, u) {
      let g;
      typeof c == "string" && (f.options.headers["Content-Length"] = Buffer.byteLength(c, "utf8"));
      let y = !1, A = (S, R) => {
        y || (y = !0, u(S, R));
      }, P = f.httpModule.request(f.options, (S) => {
        let R = new m(S);
        A(null, R);
      });
      P.on("socket", (S) => {
        g = S;
      }), P.setTimeout(this._socketTimeout || 3 * 6e4, () => {
        g && g.end(), A(new Error("Request timeout: " + f.options.path), null);
      }), P.on("error", function(S) {
        A(S, null);
      }), c && typeof c == "string" && P.write(c, "utf8"), c && typeof c != "string" ? (c.on("close", function() {
        P.end();
      }), c.pipe(P)) : P.end();
    }
    getAgent(f) {
      let c = new URL(f);
      return this._getAgent(c);
    }
    _prepareRequest(f, c, u) {
      const g = {};
      g.parsedUrl = c;
      const y = g.parsedUrl.protocol === "https:";
      g.httpModule = y ? r : t;
      const A = y ? 443 : 80;
      return g.options = {}, g.options.host = g.parsedUrl.hostname, g.options.port = g.parsedUrl.port ? parseInt(g.parsedUrl.port) : A, g.options.path = (g.parsedUrl.pathname || "") + (g.parsedUrl.search || ""), g.options.method = f, g.options.headers = this._mergeHeaders(u), this.userAgent != null && (g.options.headers["user-agent"] = this.userAgent), g.options.agent = this._getAgent(g.parsedUrl), this.handlers && this.handlers.forEach((P) => {
        P.prepareRequest(g.options);
      }), g;
    }
    _mergeHeaders(f) {
      const c = (u) => Object.keys(u).reduce((g, y) => (g[y.toLowerCase()] = u[y], g), {});
      return this.requestOptions && this.requestOptions.headers ? Object.assign({}, c(this.requestOptions.headers), c(f)) : c(f || {});
    }
    _getExistingOrDefaultHeader(f, c, u) {
      const g = (A) => Object.keys(A).reduce((P, S) => (P[S.toLowerCase()] = A[S], P), {});
      let y;
      return this.requestOptions && this.requestOptions.headers && (y = g(this.requestOptions.headers)[c]), f[c] || y || u;
    }
    _getAgent(f) {
      let c, u = n.getProxyUrl(f), g = u && u.hostname;
      if (this._keepAlive && g && (c = this._proxyAgent), this._keepAlive && !g && (c = this._agent), c)
        return c;
      const y = f.protocol === "https:";
      let A = 100;
      if (this.requestOptions && (A = this.requestOptions.maxSockets || t.globalAgent.maxSockets), g) {
        s || (s = Ur);
        const P = {
          maxSockets: A,
          keepAlive: this._keepAlive,
          proxy: {
            proxyAuth: `${u.username}:${u.password}`,
            host: u.hostname,
            port: u.port
          }
        };
        let S;
        const R = u.protocol === "https:";
        y ? S = R ? s.httpsOverHttps : s.httpsOverHttp : S = R ? s.httpOverHttps : s.httpOverHttp, c = S(P), this._proxyAgent = c;
      }
      if (this._keepAlive && !c) {
        const P = { keepAlive: this._keepAlive, maxSockets: A };
        c = y ? new r.Agent(P) : new t.Agent(P), this._agent = c;
      }
      return c || (c = y ? r.globalAgent : t.globalAgent), y && this._ignoreSslError && (c.options = Object.assign(c.options || {}, {
        rejectUnauthorized: !1
      })), c;
    }
    _performExponentialBackoff(f) {
      f = Math.min(_, f);
      const c = $ * Math.pow(2, f);
      return new Promise((u) => setTimeout(() => u(), c));
    }
    static dateTimeDeserializer(f, c) {
      if (typeof c == "string") {
        let u = new Date(c);
        if (!isNaN(u.valueOf()))
          return u;
      }
      return c;
    }
    async _processResponse(f, c) {
      return new Promise(async (u, g) => {
        const y = f.message.statusCode, A = {
          statusCode: y,
          result: null,
          headers: {}
        };
        y == o.NotFound && u(A);
        let P, S;
        try {
          S = await f.readBody(), S && S.length > 0 && (c && c.deserializeDates ? P = JSON.parse(S, T.dateTimeDeserializer) : P = JSON.parse(S), A.result = P), A.headers = f.message.headers;
        } catch {
        }
        if (y > 299) {
          let R;
          P && P.message ? R = P.message : S && S.length > 0 ? R = S : R = "Failed request: (" + y + ")";
          let N = new E(R, y);
          N.result = A.result, g(N);
        } else
          u(A);
      });
    }
  }
  e.HttpClient = T;
}(Ir);
var ri = O && O.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), ni = O && O.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), si = O && O.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      Object.hasOwnProperty.call(e, r) && ri(t, e, r);
  return ni(t, e), t;
};
Object.defineProperty(de, "__esModule", { value: !0 }), de.getApiBaseUrl = de.getProxyAgent = de.getAuthString = void 0;
const oi = si(Ir);
function ii(e, t) {
  if (!e && !t.auth)
    throw new Error("Parameter token or opts.auth is required");
  if (e && t.auth)
    throw new Error("Parameters token and opts.auth may not both be specified");
  return typeof t.auth == "string" ? t.auth : `token ${e}`;
}
de.getAuthString = ii;
function ai(e) {
  return new oi.HttpClient().getAgent(e);
}
de.getProxyAgent = ai;
function ci() {
  return process.env.GITHUB_API_URL || "https://api.github.com";
}
de.getApiBaseUrl = ci;
function pt() {
  return typeof navigator == "object" && "userAgent" in navigator ? navigator.userAgent : typeof process == "object" && "version" in process ? `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})` : "<environment undetectable>";
}
var dt = { exports: {} }, li = Lr;
function Lr(e, t, r, n) {
  if (typeof r != "function")
    throw new Error("method for before hook must be a function");
  return n || (n = {}), Array.isArray(t) ? t.reverse().reduce(function(s, o) {
    return Lr.bind(null, e, o, s, n);
  }, r)() : Promise.resolve().then(function() {
    return e.registry[t] ? e.registry[t].reduce(function(s, o) {
      return o.hook.bind(null, s, n);
    }, r)() : r(n);
  });
}
var ui = pi;
function pi(e, t, r, n) {
  var s = n;
  e.registry[r] || (e.registry[r] = []), t === "before" && (n = function(o, i) {
    return Promise.resolve().then(s.bind(null, i)).then(o.bind(null, i));
  }), t === "after" && (n = function(o, i) {
    var a;
    return Promise.resolve().then(o.bind(null, i)).then(function(l) {
      return a = l, s(a, i);
    }).then(function() {
      return a;
    });
  }), t === "error" && (n = function(o, i) {
    return Promise.resolve().then(o.bind(null, i)).catch(function(a) {
      return s(a, i);
    });
  }), e.registry[r].push({
    hook: n,
    orig: s
  });
}
var di = fi;
function fi(e, t, r) {
  if (!!e.registry[t]) {
    var n = e.registry[t].map(function(s) {
      return s.orig;
    }).indexOf(r);
    n !== -1 && e.registry[t].splice(n, 1);
  }
}
var qr = li, hi = ui, mi = di, Mr = Function.bind, Nr = Mr.bind(Mr);
function zr(e, t, r) {
  var n = Nr(mi, null).apply(null, r ? [t, r] : [t]);
  e.api = { remove: n }, e.remove = n, ["before", "error", "after", "wrap"].forEach(function(s) {
    var o = r ? [t, s, r] : [t, s];
    e[s] = e.api[s] = Nr(hi, null).apply(null, o);
  });
}
function gi() {
  var e = "h", t = {
    registry: {}
  }, r = qr.bind(null, t, e);
  return zr(r, t, e), r;
}
function Hr() {
  var e = {
    registry: {}
  }, t = qr.bind(null, e);
  return zr(t, e), t;
}
var Wr = !1;
function Re() {
  return Wr || (console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'), Wr = !0), Hr();
}
Re.Singular = gi.bind(), Re.Collection = Hr.bind(), dt.exports = Re, dt.exports.Hook = Re, dt.exports.Singular = Re.Singular;
var wi = dt.exports.Collection = Re.Collection;
function Kr(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Vr(e) {
  var t, r;
  return Kr(e) === !1 ? !1 : (t = e.constructor, t === void 0 ? !0 : (r = t.prototype, !(Kr(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
function bi(e) {
  return e ? Object.keys(e).reduce((t, r) => (t[r.toLowerCase()] = e[r], t), {}) : {};
}
function Jr(e, t) {
  const r = Object.assign({}, e);
  return Object.keys(t).forEach((n) => {
    Vr(t[n]) ? n in e ? r[n] = Jr(e[n], t[n]) : Object.assign(r, { [n]: t[n] }) : Object.assign(r, { [n]: t[n] });
  }), r;
}
function Yr(e) {
  for (const t in e)
    e[t] === void 0 && delete e[t];
  return e;
}
function jt(e, t, r) {
  if (typeof t == "string") {
    let [s, o] = t.split(" ");
    r = Object.assign(o ? { method: s, url: o } : { url: s }, r);
  } else
    r = Object.assign({}, t);
  r.headers = bi(r.headers), Yr(r), Yr(r.headers);
  const n = Jr(e || {}, r);
  return e && e.mediaType.previews.length && (n.mediaType.previews = e.mediaType.previews.filter((s) => !n.mediaType.previews.includes(s)).concat(n.mediaType.previews)), n.mediaType.previews = n.mediaType.previews.map((s) => s.replace(/-preview/, "")), n;
}
function yi(e, t) {
  const r = /\?/.test(e) ? "&" : "?", n = Object.keys(t);
  return n.length === 0 ? e : e + r + n.map((s) => s === "q" ? "q=" + t.q.split("+").map(encodeURIComponent).join("+") : `${s}=${encodeURIComponent(t[s])}`).join("&");
}
const Ti = /\{[^}]+\}/g;
function _i(e) {
  return e.replace(/^\W+|\W+$/g, "").split(/,/);
}
function Ei(e) {
  const t = e.match(Ti);
  return t ? t.map(_i).reduce((r, n) => r.concat(n), []) : [];
}
function Zr(e, t) {
  return Object.keys(e).filter((r) => !t.includes(r)).reduce((r, n) => (r[n] = e[n], r), {});
}
function Xr(e) {
  return e.split(/(%[0-9A-Fa-f]{2})/g).map(function(t) {
    return /%[0-9A-Fa-f]/.test(t) || (t = encodeURI(t).replace(/%5B/g, "[").replace(/%5D/g, "]")), t;
  }).join("");
}
function $e(e) {
  return encodeURIComponent(e).replace(/[!'()*]/g, function(t) {
    return "%" + t.charCodeAt(0).toString(16).toUpperCase();
  });
}
function We(e, t, r) {
  return t = e === "+" || e === "#" ? Xr(t) : $e(t), r ? $e(r) + "=" + t : t;
}
function Ge(e) {
  return e != null;
}
function Ft(e) {
  return e === ";" || e === "&" || e === "?";
}
function vi(e, t, r, n) {
  var s = e[r], o = [];
  if (Ge(s) && s !== "")
    if (typeof s == "string" || typeof s == "number" || typeof s == "boolean")
      s = s.toString(), n && n !== "*" && (s = s.substring(0, parseInt(n, 10))), o.push(We(t, s, Ft(t) ? r : ""));
    else if (n === "*")
      Array.isArray(s) ? s.filter(Ge).forEach(function(i) {
        o.push(We(t, i, Ft(t) ? r : ""));
      }) : Object.keys(s).forEach(function(i) {
        Ge(s[i]) && o.push(We(t, s[i], i));
      });
    else {
      const i = [];
      Array.isArray(s) ? s.filter(Ge).forEach(function(a) {
        i.push(We(t, a));
      }) : Object.keys(s).forEach(function(a) {
        Ge(s[a]) && (i.push($e(a)), i.push(We(t, s[a].toString())));
      }), Ft(t) ? o.push($e(r) + "=" + i.join(",")) : i.length !== 0 && o.push(i.join(","));
    }
  else
    t === ";" ? Ge(s) && o.push($e(r)) : s === "" && (t === "&" || t === "?") ? o.push($e(r) + "=") : s === "" && o.push("");
  return o;
}
function Oi(e) {
  return {
    expand: Pi.bind(null, e)
  };
}
function Pi(e, t) {
  var r = ["+", "#", ".", "/", ";", "?", "&"];
  return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function(n, s, o) {
    if (s) {
      let a = "";
      const l = [];
      if (r.indexOf(s.charAt(0)) !== -1 && (a = s.charAt(0), s = s.substr(1)), s.split(/,/g).forEach(function(p) {
        var h = /([^:\*]*)(?::(\d+)|(\*))?/.exec(p);
        l.push(vi(t, a, h[1], h[2] || h[3]));
      }), a && a !== "+") {
        var i = ",";
        return a === "?" ? i = "&" : a !== "#" && (i = a), (l.length !== 0 ? a : "") + l.join(i);
      } else
        return l.join(",");
    } else
      return Xr(o);
  });
}
function Qr(e) {
  let t = e.method.toUpperCase(), r = (e.url || "/").replace(/:([a-z]\w+)/g, "{$1}"), n = Object.assign({}, e.headers), s, o = Zr(e, [
    "method",
    "baseUrl",
    "url",
    "headers",
    "request",
    "mediaType"
  ]);
  const i = Ei(r);
  r = Oi(r).expand(o), /^http/.test(r) || (r = e.baseUrl + r);
  const a = Object.keys(e).filter((h) => i.includes(h)).concat("baseUrl"), l = Zr(o, a);
  if (!/application\/octet-stream/i.test(n.accept) && (e.mediaType.format && (n.accept = n.accept.split(/,/).map((h) => h.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, `application/vnd$1$2.${e.mediaType.format}`)).join(",")), e.mediaType.previews.length)) {
    const h = n.accept.match(/[\w-]+(?=-preview)/g) || [];
    n.accept = h.concat(e.mediaType.previews).map((w) => {
      const _ = e.mediaType.format ? `.${e.mediaType.format}` : "+json";
      return `application/vnd.github.${w}-preview${_}`;
    }).join(",");
  }
  return ["GET", "HEAD"].includes(t) ? r = yi(r, l) : "data" in l ? s = l.data : Object.keys(l).length ? s = l : n["content-length"] = 0, !n["content-type"] && typeof s < "u" && (n["content-type"] = "application/json; charset=utf-8"), ["PATCH", "PUT"].includes(t) && typeof s > "u" && (s = ""), Object.assign({ method: t, url: r, headers: n }, typeof s < "u" ? { body: s } : null, e.request ? { request: e.request } : null);
}
function Si(e, t, r) {
  return Qr(jt(e, t, r));
}
function en(e, t) {
  const r = jt(e, t), n = Si.bind(null, r);
  return Object.assign(n, {
    DEFAULTS: r,
    defaults: en.bind(null, r),
    merge: jt.bind(null, r),
    parse: Qr
  });
}
const Ai = "6.0.10", Ri = `octokit-endpoint.js/${Ai} ${pt()}`, $i = {
  method: "GET",
  baseUrl: "https://api.github.com",
  headers: {
    accept: "application/vnd.github.v3+json",
    "user-agent": Ri
  },
  mediaType: {
    format: "",
    previews: []
  }
}, Gi = en(null, $i), Ci = W.default.Readable, te = Symbol("buffer"), xt = Symbol("type");
class Be {
  constructor() {
    this[xt] = "";
    const t = arguments[0], r = arguments[1], n = [];
    let s = 0;
    if (t) {
      const i = t, a = Number(i.length);
      for (let l = 0; l < a; l++) {
        const p = i[l];
        let h;
        p instanceof Buffer ? h = p : ArrayBuffer.isView(p) ? h = Buffer.from(p.buffer, p.byteOffset, p.byteLength) : p instanceof ArrayBuffer ? h = Buffer.from(p) : p instanceof Be ? h = p[te] : h = Buffer.from(typeof p == "string" ? p : String(p)), s += h.length, n.push(h);
      }
    }
    this[te] = Buffer.concat(n);
    let o = r && r.type !== void 0 && String(r.type).toLowerCase();
    o && !/[^\u0020-\u007E]/.test(o) && (this[xt] = o);
  }
  get size() {
    return this[te].length;
  }
  get type() {
    return this[xt];
  }
  text() {
    return Promise.resolve(this[te].toString());
  }
  arrayBuffer() {
    const t = this[te], r = t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength);
    return Promise.resolve(r);
  }
  stream() {
    const t = new Ci();
    return t._read = function() {
    }, t.push(this[te]), t.push(null), t;
  }
  toString() {
    return "[object Blob]";
  }
  slice() {
    const t = this.size, r = arguments[0], n = arguments[1];
    let s, o;
    r === void 0 ? s = 0 : r < 0 ? s = Math.max(t + r, 0) : s = Math.min(r, t), n === void 0 ? o = t : n < 0 ? o = Math.max(t + n, 0) : o = Math.min(n, t);
    const i = Math.max(o - s, 0), l = this[te].slice(s, s + i), p = new Be([], { type: arguments[2] });
    return p[te] = l, p;
  }
}
Object.defineProperties(Be.prototype, {
  size: { enumerable: !0 },
  type: { enumerable: !0 },
  slice: { enumerable: !0 }
}), Object.defineProperty(Be.prototype, Symbol.toStringTag, {
  value: "Blob",
  writable: !1,
  enumerable: !1,
  configurable: !0
});
function q(e, t, r) {
  Error.call(this, e), this.message = e, this.type = t, r && (this.code = this.errno = r.code), Error.captureStackTrace(this, this.constructor);
}
q.prototype = Object.create(Error.prototype), q.prototype.constructor = q, q.prototype.name = "FetchError";
let It;
try {
  It = require("encoding").convert;
} catch {
}
const re = Symbol("Body internals"), tn = W.default.PassThrough;
function x(e) {
  var t = this, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.size;
  let s = n === void 0 ? 0 : n;
  var o = r.timeout;
  let i = o === void 0 ? 0 : o;
  e == null ? e = null : rn(e) ? e = Buffer.from(e.toString()) : Ke(e) || Buffer.isBuffer(e) || (Object.prototype.toString.call(e) === "[object ArrayBuffer]" ? e = Buffer.from(e) : ArrayBuffer.isView(e) ? e = Buffer.from(e.buffer, e.byteOffset, e.byteLength) : e instanceof W.default || (e = Buffer.from(String(e)))), this[re] = {
    body: e,
    disturbed: !1,
    error: null
  }, this.size = s, this.timeout = i, e instanceof W.default && e.on("error", function(a) {
    const l = a.name === "AbortError" ? a : new q(`Invalid response body while trying to fetch ${t.url}: ${a.message}`, "system", a);
    t[re].error = l;
  });
}
x.prototype = {
  get body() {
    return this[re].body;
  },
  get bodyUsed() {
    return this[re].disturbed;
  },
  arrayBuffer() {
    return Ce.call(this).then(function(e) {
      return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
    });
  },
  blob() {
    let e = this.headers && this.headers.get("content-type") || "";
    return Ce.call(this).then(function(t) {
      return Object.assign(new Be([], {
        type: e.toLowerCase()
      }), {
        [te]: t
      });
    });
  },
  json() {
    var e = this;
    return Ce.call(this).then(function(t) {
      try {
        return JSON.parse(t.toString());
      } catch (r) {
        return x.Promise.reject(new q(`invalid json response body at ${e.url} reason: ${r.message}`, "invalid-json"));
      }
    });
  },
  text() {
    return Ce.call(this).then(function(e) {
      return e.toString();
    });
  },
  buffer() {
    return Ce.call(this);
  },
  textConverted() {
    var e = this;
    return Ce.call(this).then(function(t) {
      return ki(t, e.headers);
    });
  }
}, Object.defineProperties(x.prototype, {
  body: { enumerable: !0 },
  bodyUsed: { enumerable: !0 },
  arrayBuffer: { enumerable: !0 },
  blob: { enumerable: !0 },
  json: { enumerable: !0 },
  text: { enumerable: !0 }
}), x.mixIn = function(e) {
  for (const t of Object.getOwnPropertyNames(x.prototype))
    if (!(t in e)) {
      const r = Object.getOwnPropertyDescriptor(x.prototype, t);
      Object.defineProperty(e, t, r);
    }
};
function Ce() {
  var e = this;
  if (this[re].disturbed)
    return x.Promise.reject(new TypeError(`body used already for: ${this.url}`));
  if (this[re].disturbed = !0, this[re].error)
    return x.Promise.reject(this[re].error);
  let t = this.body;
  if (t === null)
    return x.Promise.resolve(Buffer.alloc(0));
  if (Ke(t) && (t = t.stream()), Buffer.isBuffer(t))
    return x.Promise.resolve(t);
  if (!(t instanceof W.default))
    return x.Promise.resolve(Buffer.alloc(0));
  let r = [], n = 0, s = !1;
  return new x.Promise(function(o, i) {
    let a;
    e.timeout && (a = setTimeout(function() {
      s = !0, i(new q(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`, "body-timeout"));
    }, e.timeout)), t.on("error", function(l) {
      l.name === "AbortError" ? (s = !0, i(l)) : i(new q(`Invalid response body while trying to fetch ${e.url}: ${l.message}`, "system", l));
    }), t.on("data", function(l) {
      if (!(s || l === null)) {
        if (e.size && n + l.length > e.size) {
          s = !0, i(new q(`content size at ${e.url} over limit: ${e.size}`, "max-size"));
          return;
        }
        n += l.length, r.push(l);
      }
    }), t.on("end", function() {
      if (!s) {
        clearTimeout(a);
        try {
          o(Buffer.concat(r, n));
        } catch (l) {
          i(new q(`Could not create Buffer from response body for ${e.url}: ${l.message}`, "system", l));
        }
      }
    });
  });
}
function ki(e, t) {
  if (typeof It != "function")
    throw new Error("The package `encoding` must be installed to use the textConverted() function");
  const r = t.get("content-type");
  let n = "utf-8", s, o;
  return r && (s = /charset=([^;]*)/i.exec(r)), o = e.slice(0, 1024).toString(), !s && o && (s = /<meta.+?charset=(['"])(.+?)\1/i.exec(o)), !s && o && (s = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o), s || (s = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o), s && s.pop()), s && (s = /charset=(.*)/i.exec(s.pop()))), !s && o && (s = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o)), s && (n = s.pop(), (n === "gb2312" || n === "gbk") && (n = "gb18030")), It(e, "UTF-8", n).toString();
}
function rn(e) {
  return typeof e != "object" || typeof e.append != "function" || typeof e.delete != "function" || typeof e.get != "function" || typeof e.getAll != "function" || typeof e.has != "function" || typeof e.set != "function" ? !1 : e.constructor.name === "URLSearchParams" || Object.prototype.toString.call(e) === "[object URLSearchParams]" || typeof e.sort == "function";
}
function Ke(e) {
  return typeof e == "object" && typeof e.arrayBuffer == "function" && typeof e.type == "string" && typeof e.stream == "function" && typeof e.constructor == "function" && typeof e.constructor.name == "string" && /^(Blob|File)$/.test(e.constructor.name) && /^(Blob|File)$/.test(e[Symbol.toStringTag]);
}
function nn(e) {
  let t, r, n = e.body;
  if (e.bodyUsed)
    throw new Error("cannot clone body after it is used");
  return n instanceof W.default && typeof n.getBoundary != "function" && (t = new tn(), r = new tn(), n.pipe(t), n.pipe(r), e[re].body = t, n = r), n;
}
function sn(e) {
  return e === null ? null : typeof e == "string" ? "text/plain;charset=UTF-8" : rn(e) ? "application/x-www-form-urlencoded;charset=UTF-8" : Ke(e) ? e.type || null : Buffer.isBuffer(e) || Object.prototype.toString.call(e) === "[object ArrayBuffer]" || ArrayBuffer.isView(e) ? null : typeof e.getBoundary == "function" ? `multipart/form-data;boundary=${e.getBoundary()}` : e instanceof W.default ? null : "text/plain;charset=UTF-8";
}
function on(e) {
  const t = e.body;
  return t === null ? 0 : Ke(t) ? t.size : Buffer.isBuffer(t) ? t.length : t && typeof t.getLengthSync == "function" && (t._lengthRetrievers && t._lengthRetrievers.length == 0 || t.hasKnownLength && t.hasKnownLength()) ? t.getLengthSync() : null;
}
function Di(e, t) {
  const r = t.body;
  r === null ? e.end() : Ke(r) ? r.stream().pipe(e) : Buffer.isBuffer(r) ? (e.write(r), e.end()) : r.pipe(e);
}
x.Promise = global.Promise;
const an = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/, Bt = /[^\t\x20-\x7e\x80-\xff]/;
function Ve(e) {
  if (e = `${e}`, an.test(e) || e === "")
    throw new TypeError(`${e} is not a legal HTTP header name`);
}
function cn(e) {
  if (e = `${e}`, Bt.test(e))
    throw new TypeError(`${e} is not a legal HTTP header value`);
}
function ke(e, t) {
  t = t.toLowerCase();
  for (const r in e)
    if (r.toLowerCase() === t)
      return r;
}
const j = Symbol("map");
class V {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
    if (this[j] = /* @__PURE__ */ Object.create(null), t instanceof V) {
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
    t = `${t}`, Ve(t);
    const r = ke(this[j], t);
    return r === void 0 ? null : this[j][r].join(", ");
  }
  forEach(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, n = Lt(this), s = 0;
    for (; s < n.length; ) {
      var o = n[s];
      const i = o[0], a = o[1];
      t.call(r, a, i, this), n = Lt(this), s++;
    }
  }
  set(t, r) {
    t = `${t}`, r = `${r}`, Ve(t), cn(r);
    const n = ke(this[j], t);
    this[j][n !== void 0 ? n : t] = [r];
  }
  append(t, r) {
    t = `${t}`, r = `${r}`, Ve(t), cn(r);
    const n = ke(this[j], t);
    n !== void 0 ? this[j][n].push(r) : this[j][t] = [r];
  }
  has(t) {
    return t = `${t}`, Ve(t), ke(this[j], t) !== void 0;
  }
  delete(t) {
    t = `${t}`, Ve(t);
    const r = ke(this[j], t);
    r !== void 0 && delete this[j][r];
  }
  raw() {
    return this[j];
  }
  keys() {
    return Mt(this, "key");
  }
  values() {
    return Mt(this, "value");
  }
  [Symbol.iterator]() {
    return Mt(this, "key+value");
  }
}
V.prototype.entries = V.prototype[Symbol.iterator], Object.defineProperty(V.prototype, Symbol.toStringTag, {
  value: "Headers",
  writable: !1,
  enumerable: !1,
  configurable: !0
}), Object.defineProperties(V.prototype, {
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
function Lt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "key+value";
  return Object.keys(e[j]).sort().map(t === "key" ? function(n) {
    return n.toLowerCase();
  } : t === "value" ? function(n) {
    return e[j][n].join(", ");
  } : function(n) {
    return [n.toLowerCase(), e[j][n].join(", ")];
  });
}
const qt = Symbol("internal");
function Mt(e, t) {
  const r = Object.create(Nt);
  return r[qt] = {
    target: e,
    kind: t,
    index: 0
  }, r;
}
const Nt = Object.setPrototypeOf({
  next() {
    if (!this || Object.getPrototypeOf(this) !== Nt)
      throw new TypeError("Value of `this` is not a HeadersIterator");
    var e = this[qt];
    const t = e.target, r = e.kind, n = e.index, s = Lt(t, r), o = s.length;
    return n >= o ? {
      value: void 0,
      done: !0
    } : (this[qt].index = n + 1, {
      value: s[n],
      done: !1
    });
  }
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));
Object.defineProperty(Nt, Symbol.toStringTag, {
  value: "HeadersIterator",
  writable: !1,
  enumerable: !1,
  configurable: !0
});
function Ui(e) {
  const t = Object.assign({ __proto__: null }, e[j]), r = ke(e[j], "Host");
  return r !== void 0 && (t[r] = t[r][0]), t;
}
function ji(e) {
  const t = new V();
  for (const r of Object.keys(e))
    if (!an.test(r))
      if (Array.isArray(e[r]))
        for (const n of e[r])
          Bt.test(n) || (t[j][r] === void 0 ? t[j][r] = [n] : t[j][r].push(n));
      else
        Bt.test(e[r]) || (t[j][r] = [e[r]]);
  return t;
}
const fe = Symbol("Response internals"), Fi = Me.default.STATUS_CODES;
class Q {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    x.call(this, t, r);
    const n = r.status || 200, s = new V(r.headers);
    if (t != null && !s.has("Content-Type")) {
      const o = sn(t);
      o && s.append("Content-Type", o);
    }
    this[fe] = {
      url: r.url,
      status: n,
      statusText: r.statusText || Fi[n],
      headers: s,
      counter: r.counter
    };
  }
  get url() {
    return this[fe].url || "";
  }
  get status() {
    return this[fe].status;
  }
  get ok() {
    return this[fe].status >= 200 && this[fe].status < 300;
  }
  get redirected() {
    return this[fe].counter > 0;
  }
  get statusText() {
    return this[fe].statusText;
  }
  get headers() {
    return this[fe].headers;
  }
  clone() {
    return new Q(nn(this), {
      url: this.url,
      status: this.status,
      statusText: this.statusText,
      headers: this.headers,
      ok: this.ok,
      redirected: this.redirected
    });
  }
}
x.mixIn(Q.prototype), Object.defineProperties(Q.prototype, {
  url: { enumerable: !0 },
  status: { enumerable: !0 },
  ok: { enumerable: !0 },
  redirected: { enumerable: !0 },
  statusText: { enumerable: !0 },
  headers: { enumerable: !0 },
  clone: { enumerable: !0 }
}), Object.defineProperty(Q.prototype, Symbol.toStringTag, {
  value: "Response",
  writable: !1,
  enumerable: !1,
  configurable: !0
});
const ne = Symbol("Request internals"), zt = Ct.default.parse, xi = Ct.default.format, Ii = "destroy" in W.default.Readable.prototype;
function ft(e) {
  return typeof e == "object" && typeof e[ne] == "object";
}
function Bi(e) {
  const t = e && typeof e == "object" && Object.getPrototypeOf(e);
  return !!(t && t.constructor.name === "AbortSignal");
}
class Pe {
  constructor(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n;
    ft(t) ? n = zt(t.url) : (t && t.href ? n = zt(t.href) : n = zt(`${t}`), t = {});
    let s = r.method || t.method || "GET";
    if (s = s.toUpperCase(), (r.body != null || ft(t) && t.body !== null) && (s === "GET" || s === "HEAD"))
      throw new TypeError("Request with GET/HEAD method cannot have body");
    let o = r.body != null ? r.body : ft(t) && t.body !== null ? nn(t) : null;
    x.call(this, o, {
      timeout: r.timeout || t.timeout || 0,
      size: r.size || t.size || 0
    });
    const i = new V(r.headers || t.headers || {});
    if (o != null && !i.has("Content-Type")) {
      const l = sn(o);
      l && i.append("Content-Type", l);
    }
    let a = ft(t) ? t.signal : null;
    if ("signal" in r && (a = r.signal), a != null && !Bi(a))
      throw new TypeError("Expected signal to be an instanceof AbortSignal");
    this[ne] = {
      method: s,
      redirect: r.redirect || t.redirect || "follow",
      headers: i,
      parsedURL: n,
      signal: a
    }, this.follow = r.follow !== void 0 ? r.follow : t.follow !== void 0 ? t.follow : 20, this.compress = r.compress !== void 0 ? r.compress : t.compress !== void 0 ? t.compress : !0, this.counter = r.counter || t.counter || 0, this.agent = r.agent || t.agent;
  }
  get method() {
    return this[ne].method;
  }
  get url() {
    return xi(this[ne].parsedURL);
  }
  get headers() {
    return this[ne].headers;
  }
  get redirect() {
    return this[ne].redirect;
  }
  get signal() {
    return this[ne].signal;
  }
  clone() {
    return new Pe(this);
  }
}
x.mixIn(Pe.prototype), Object.defineProperty(Pe.prototype, Symbol.toStringTag, {
  value: "Request",
  writable: !1,
  enumerable: !1,
  configurable: !0
}), Object.defineProperties(Pe.prototype, {
  method: { enumerable: !0 },
  url: { enumerable: !0 },
  headers: { enumerable: !0 },
  redirect: { enumerable: !0 },
  clone: { enumerable: !0 },
  signal: { enumerable: !0 }
});
function Li(e) {
  const t = e[ne].parsedURL, r = new V(e[ne].headers);
  if (r.has("Accept") || r.set("Accept", "*/*"), !t.protocol || !t.hostname)
    throw new TypeError("Only absolute URLs are supported");
  if (!/^https?:$/.test(t.protocol))
    throw new TypeError("Only HTTP(S) protocols are supported");
  if (e.signal && e.body instanceof W.default.Readable && !Ii)
    throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");
  let n = null;
  if (e.body == null && /^(POST|PUT)$/i.test(e.method) && (n = "0"), e.body != null) {
    const o = on(e);
    typeof o == "number" && (n = String(o));
  }
  n && r.set("Content-Length", n), r.has("User-Agent") || r.set("User-Agent", "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"), e.compress && !r.has("Accept-Encoding") && r.set("Accept-Encoding", "gzip,deflate");
  let s = e.agent;
  return typeof s == "function" && (s = s(t)), !r.has("Connection") && !s && r.set("Connection", "close"), Object.assign({}, t, {
    method: e.method,
    headers: Ui(r),
    agent: s
  });
}
function Je(e) {
  Error.call(this, e), this.type = "aborted", this.message = e, Error.captureStackTrace(this, this.constructor);
}
Je.prototype = Object.create(Error.prototype), Je.prototype.constructor = Je, Je.prototype.name = "AbortError";
const ln = W.default.PassThrough, qi = Ct.default.resolve;
function he(e, t) {
  if (!he.Promise)
    throw new Error("native promise missing, set fetch.Promise to your favorite alternative");
  return x.Promise = he.Promise, new he.Promise(function(r, n) {
    const s = new Pe(e, t), o = Li(s), i = (o.protocol === "https:" ? it.default : Me.default).request, a = s.signal;
    let l = null;
    const p = function() {
      let m = new Je("The user aborted a request.");
      n(m), s.body && s.body instanceof W.default.Readable && s.body.destroy(m), !(!l || !l.body) && l.body.emit("error", m);
    };
    if (a && a.aborted) {
      p();
      return;
    }
    const h = function() {
      p(), $();
    }, w = i(o);
    let _;
    a && a.addEventListener("abort", h);
    function $() {
      w.abort(), a && a.removeEventListener("abort", h), clearTimeout(_);
    }
    s.timeout && w.once("socket", function(E) {
      _ = setTimeout(function() {
        n(new q(`network timeout at: ${s.url}`, "request-timeout")), $();
      }, s.timeout);
    }), w.on("error", function(E) {
      n(new q(`request to ${s.url} failed, reason: ${E.message}`, "system", E)), $();
    }), w.on("response", function(E) {
      clearTimeout(_);
      const m = ji(E.headers);
      if (he.isRedirect(E.statusCode)) {
        const c = m.get("Location"), u = c === null ? null : qi(s.url, c);
        switch (s.redirect) {
          case "error":
            n(new q(`uri requested responds with a redirect, redirect mode is set to error: ${s.url}`, "no-redirect")), $();
            return;
          case "manual":
            if (u !== null)
              try {
                m.set("Location", u);
              } catch (y) {
                n(y);
              }
            break;
          case "follow":
            if (u === null)
              break;
            if (s.counter >= s.follow) {
              n(new q(`maximum redirect reached at: ${s.url}`, "max-redirect")), $();
              return;
            }
            const g = {
              headers: new V(s.headers),
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
            if (E.statusCode !== 303 && s.body && on(s) === null) {
              n(new q("Cannot follow redirect with body being a readable stream", "unsupported-redirect")), $();
              return;
            }
            (E.statusCode === 303 || (E.statusCode === 301 || E.statusCode === 302) && s.method === "POST") && (g.method = "GET", g.body = void 0, g.headers.delete("content-length")), r(he(new Pe(u, g))), $();
            return;
        }
      }
      E.once("end", function() {
        a && a.removeEventListener("abort", h);
      });
      let b = E.pipe(new ln());
      const T = {
        url: s.url,
        status: E.statusCode,
        statusText: E.statusMessage,
        headers: m,
        size: s.size,
        timeout: s.timeout,
        counter: s.counter
      }, d = m.get("Content-Encoding");
      if (!s.compress || s.method === "HEAD" || d === null || E.statusCode === 204 || E.statusCode === 304) {
        l = new Q(b, T), r(l);
        return;
      }
      const f = {
        flush: _e.default.Z_SYNC_FLUSH,
        finishFlush: _e.default.Z_SYNC_FLUSH
      };
      if (d == "gzip" || d == "x-gzip") {
        b = b.pipe(_e.default.createGunzip(f)), l = new Q(b, T), r(l);
        return;
      }
      if (d == "deflate" || d == "x-deflate") {
        E.pipe(new ln()).once("data", function(u) {
          (u[0] & 15) === 8 ? b = b.pipe(_e.default.createInflate()) : b = b.pipe(_e.default.createInflateRaw()), l = new Q(b, T), r(l);
        });
        return;
      }
      if (d == "br" && typeof _e.default.createBrotliDecompress == "function") {
        b = b.pipe(_e.default.createBrotliDecompress()), l = new Q(b, T), r(l);
        return;
      }
      l = new Q(b, T), r(l);
    }), Di(w, s);
  });
}
he.isRedirect = function(e) {
  return e === 301 || e === 302 || e === 303 || e === 307 || e === 308;
}, he.Promise = global.Promise;
class Mi extends Error {
  constructor(t) {
    super(t), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.name = "Deprecation";
  }
}
var Ht = { exports: {} }, Ni = un;
function un(e, t) {
  if (e && t)
    return un(e)(t);
  if (typeof e != "function")
    throw new TypeError("need wrapper function");
  return Object.keys(e).forEach(function(n) {
    r[n] = e[n];
  }), r;
  function r() {
    for (var n = new Array(arguments.length), s = 0; s < n.length; s++)
      n[s] = arguments[s];
    var o = e.apply(this, n), i = n[n.length - 1];
    return typeof o == "function" && o !== i && Object.keys(i).forEach(function(a) {
      o[a] = i[a];
    }), o;
  }
}
var pn = Ni;
Ht.exports = pn(ht), Ht.exports.strict = pn(dn), ht.proto = ht(function() {
  Object.defineProperty(Function.prototype, "once", {
    value: function() {
      return ht(this);
    },
    configurable: !0
  }), Object.defineProperty(Function.prototype, "onceStrict", {
    value: function() {
      return dn(this);
    },
    configurable: !0
  });
});
function ht(e) {
  var t = function() {
    return t.called ? t.value : (t.called = !0, t.value = e.apply(this, arguments));
  };
  return t.called = !1, t;
}
function dn(e) {
  var t = function() {
    if (t.called)
      throw new Error(t.onceError);
    return t.called = !0, t.value = e.apply(this, arguments);
  }, r = e.name || "Function wrapped with `once`";
  return t.onceError = r + " shouldn't be called more than once", t.called = !1, t;
}
var zi = Ht.exports;
const Hi = zi((e) => console.warn(e));
class Ye extends Error {
  constructor(t, r, n) {
    super(t), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.name = "HttpError", this.status = r, Object.defineProperty(this, "code", {
      get() {
        return Hi(new Mi("[@octokit/request-error] `error.code` is deprecated, use `error.status`.")), r;
      }
    }), this.headers = n.headers || {};
    const s = Object.assign({}, n.request);
    n.request.headers.authorization && (s.headers = Object.assign({}, n.request.headers, {
      authorization: n.request.headers.authorization.replace(/ .*$/, " [REDACTED]")
    })), s.url = s.url.replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]").replace(/\baccess_token=\w+/g, "access_token=[REDACTED]"), this.request = s;
  }
}
const Wi = "5.4.12";
function Ki(e) {
  return e.arrayBuffer();
}
function fn(e) {
  (Vr(e.body) || Array.isArray(e.body)) && (e.body = JSON.stringify(e.body));
  let t = {}, r, n;
  return (e.request && e.request.fetch || he)(e.url, Object.assign({
    method: e.method,
    body: e.body,
    headers: e.headers,
    redirect: e.redirect
  }, e.request)).then((o) => {
    n = o.url, r = o.status;
    for (const a of o.headers)
      t[a[0]] = a[1];
    if (r === 204 || r === 205)
      return;
    if (e.method === "HEAD") {
      if (r < 400)
        return;
      throw new Ye(o.statusText, r, {
        headers: t,
        request: e
      });
    }
    if (r === 304)
      throw new Ye("Not modified", r, {
        headers: t,
        request: e
      });
    if (r >= 400)
      return o.text().then((a) => {
        const l = new Ye(a, r, {
          headers: t,
          request: e
        });
        try {
          let p = JSON.parse(l.message);
          Object.assign(l, p);
          let h = p.errors;
          l.message = l.message + ": " + h.map(JSON.stringify).join(", ");
        } catch {
        }
        throw l;
      });
    const i = o.headers.get("content-type");
    return /application\/json/.test(i) ? o.json() : !i || /^text\/|charset=utf-8$/.test(i) ? o.text() : Ki(o);
  }).then((o) => ({
    status: r,
    url: n,
    headers: t,
    data: o
  })).catch((o) => {
    throw o instanceof Ye ? o : new Ye(o.message, 500, {
      headers: t,
      request: e
    });
  });
}
function Wt(e, t) {
  const r = e.defaults(t);
  return Object.assign(function(s, o) {
    const i = r.merge(s, o);
    if (!i.request || !i.request.hook)
      return fn(r.parse(i));
    const a = (l, p) => fn(r.parse(r.merge(l, p)));
    return Object.assign(a, {
      endpoint: r,
      defaults: Wt.bind(null, r)
    }), i.request.hook(a, i);
  }, {
    endpoint: r,
    defaults: Wt.bind(null, r)
  });
}
const mt = Wt(Gi, {
  headers: {
    "user-agent": `octokit-request.js/${Wi} ${pt()}`
  }
}), Vi = "4.5.8";
class Ji extends Error {
  constructor(t, r) {
    const n = r.data.errors[0].message;
    super(n), Object.assign(this, r.data), Object.assign(this, { headers: r.headers }), this.name = "GraphqlError", this.request = t, Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
}
const Yi = [
  "method",
  "baseUrl",
  "url",
  "headers",
  "request",
  "query",
  "mediaType"
], hn = /\/api\/v3\/?$/;
function Zi(e, t, r) {
  if (typeof t == "string" && r && "query" in r)
    return Promise.reject(new Error('[@octokit/graphql] "query" cannot be used as variable name'));
  const n = typeof t == "string" ? Object.assign({ query: t }, r) : t, s = Object.keys(n).reduce((i, a) => Yi.includes(a) ? (i[a] = n[a], i) : (i.variables || (i.variables = {}), i.variables[a] = n[a], i), {}), o = n.baseUrl || e.endpoint.DEFAULTS.baseUrl;
  return hn.test(o) && (s.url = o.replace(hn, "/api/graphql")), e(s).then((i) => {
    if (i.data.errors) {
      const a = {};
      for (const l of Object.keys(i.headers))
        a[l] = i.headers[l];
      throw new Ji(s, {
        headers: a,
        data: i.data
      });
    }
    return i.data.data;
  });
}
function Kt(e, t) {
  const r = e.defaults(t);
  return Object.assign((s, o) => Zi(r, s, o), {
    defaults: Kt.bind(null, r),
    endpoint: mt.endpoint
  });
}
Kt(mt, {
  headers: {
    "user-agent": `octokit-graphql.js/${Vi} ${pt()}`
  },
  method: "POST",
  url: "/graphql"
});
function Xi(e) {
  return Kt(e, {
    method: "POST",
    url: "/graphql"
  });
}
async function Qi(e) {
  const t = e.split(/\./).length === 3 ? "app" : /^v\d+\./.test(e) ? "installation" : "oauth";
  return {
    type: "token",
    token: e,
    tokenType: t
  };
}
function ea(e) {
  return e.split(/\./).length === 3 ? `bearer ${e}` : `token ${e}`;
}
async function ta(e, t, r, n) {
  const s = t.endpoint.merge(r, n);
  return s.headers.authorization = ea(e), t(s);
}
const ra = function(t) {
  if (!t)
    throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
  if (typeof t != "string")
    throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");
  return t = t.replace(/^(token|bearer) +/i, ""), Object.assign(Qi.bind(null, t), {
    hook: ta.bind(null, t)
  });
}, mn = "3.2.4";
class Vt {
  constructor(t = {}) {
    const r = new wi(), n = {
      baseUrl: mt.endpoint.DEFAULTS.baseUrl,
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
      `octokit-core.js/${mn} ${pt()}`
    ].filter(Boolean).join(" "), t.baseUrl && (n.baseUrl = t.baseUrl), t.previews && (n.mediaType.previews = t.previews), t.timeZone && (n.headers["time-zone"] = t.timeZone), this.request = mt.defaults(n), this.graphql = Xi(this.request).defaults(n), this.log = Object.assign({
      debug: () => {
      },
      info: () => {
      },
      warn: console.warn.bind(console),
      error: console.error.bind(console)
    }, t.log), this.hook = r, t.authStrategy) {
      const { authStrategy: o, ...i } = t, a = o(Object.assign({
        request: this.request,
        log: this.log,
        octokit: this,
        octokitOptions: i
      }, t.auth));
      r.wrap("request", a.hook), this.auth = a;
    } else if (!t.auth)
      this.auth = async () => ({
        type: "unauthenticated"
      });
    else {
      const o = ra(t.auth);
      r.wrap("request", o.hook), this.auth = o;
    }
    this.constructor.plugins.forEach((o) => {
      Object.assign(this, o(this, t));
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
Vt.VERSION = mn, Vt.plugins = [];
var na = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Octokit: Vt
}), sa = /* @__PURE__ */ kt(na);
const oa = {
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
}, ia = "4.4.1";
function aa(e, t) {
  const r = {};
  for (const [n, s] of Object.entries(t))
    for (const [o, i] of Object.entries(s)) {
      const [a, l, p] = i, [h, w] = a.split(/ /), _ = Object.assign({ method: h, url: w }, l);
      r[n] || (r[n] = {});
      const $ = r[n];
      if (p) {
        $[o] = ca(e, n, o, _, p);
        continue;
      }
      $[o] = e.request.defaults(_);
    }
  return r;
}
function ca(e, t, r, n, s) {
  const o = e.request.defaults(n);
  function i(...a) {
    let l = o.endpoint.merge(...a);
    if (s.mapToData)
      return l = Object.assign({}, l, {
        data: l[s.mapToData],
        [s.mapToData]: void 0
      }), o(l);
    if (s.renamed) {
      const [p, h] = s.renamed;
      e.log.warn(`octokit.${t}.${r}() has been renamed to octokit.${p}.${h}()`);
    }
    if (s.deprecated && e.log.warn(s.deprecated), s.renamedParameters) {
      const p = o.endpoint.merge(...a);
      for (const [h, w] of Object.entries(s.renamedParameters))
        h in p && (e.log.warn(`"${h}" parameter is deprecated for "octokit.${t}.${r}()". Use "${w}" instead`), w in p || (p[w] = p[h]), delete p[h]);
      return o(p);
    }
    return o(...a);
  }
  return Object.assign(i, o);
}
function gn(e) {
  return aa(e, oa);
}
gn.VERSION = ia;
var la = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  restEndpointMethods: gn
}), ua = /* @__PURE__ */ kt(la);
const pa = "2.6.2";
function da(e) {
  if (!("total_count" in e.data && !("url" in e.data)))
    return e;
  const r = e.data.incomplete_results, n = e.data.repository_selection, s = e.data.total_count;
  delete e.data.incomplete_results, delete e.data.repository_selection, delete e.data.total_count;
  const o = Object.keys(e.data)[0], i = e.data[o];
  return e.data = i, typeof r < "u" && (e.data.incomplete_results = r), typeof n < "u" && (e.data.repository_selection = n), e.data.total_count = s, e;
}
function Jt(e, t, r) {
  const n = typeof t == "function" ? t.endpoint(r) : e.request.endpoint(t, r), s = typeof t == "function" ? t : e.request, o = n.method, i = n.headers;
  let a = n.url;
  return {
    [Symbol.asyncIterator]: () => ({
      async next() {
        if (!a)
          return { done: !0 };
        const l = await s({ method: o, url: a, headers: i }), p = da(l);
        return a = ((p.headers.link || "").match(/<([^>]+)>;\s*rel="next"/) || [])[1], { value: p };
      }
    })
  };
}
function wn(e, t, r, n) {
  return typeof r == "function" && (n = r, r = void 0), bn(e, [], Jt(e, t, r)[Symbol.asyncIterator](), n);
}
function bn(e, t, r, n) {
  return r.next().then((s) => {
    if (s.done)
      return t;
    let o = !1;
    function i() {
      o = !0;
    }
    return t = t.concat(n ? n(s.value, i) : s.value.data), o ? t : bn(e, t, r, n);
  });
}
const fa = Object.assign(wn, {
  iterator: Jt
});
function yn(e) {
  return {
    paginate: Object.assign(wn.bind(null, e), {
      iterator: Jt.bind(null, e)
    })
  };
}
yn.VERSION = pa;
var ha = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  composePaginateRest: fa,
  paginateRest: yn
}), ma = /* @__PURE__ */ kt(ha), ga = O && O.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), wa = O && O.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), Tn = O && O.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      Object.hasOwnProperty.call(e, r) && ga(t, e, r);
  return wa(t, e), t;
};
Object.defineProperty(pe, "__esModule", { value: !0 }), pe.getOctokitOptions = pe.GitHub = pe.context = void 0;
const ba = Tn(He), Yt = Tn(de), ya = sa, Ta = ua, _a = ma;
pe.context = new ba.Context();
const _n = Yt.getApiBaseUrl(), Ea = {
  baseUrl: _n,
  request: {
    agent: Yt.getProxyAgent(_n)
  }
};
pe.GitHub = ya.Octokit.plugin(Ta.restEndpointMethods, _a.paginateRest).defaults(Ea);
function va(e, t) {
  const r = Object.assign({}, t || {}), n = Yt.getAuthString(e, r);
  return n && (r.auth = n), r;
}
pe.getOctokitOptions = va;
var Oa = O && O.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), Pa = O && O.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), Sa = O && O.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      Object.hasOwnProperty.call(e, r) && Oa(t, e, r);
  return Pa(t, e), t;
};
Object.defineProperty(ze, "__esModule", { value: !0 });
var En = ze.getOctokit = gt = ze.context = void 0;
const Aa = Sa(He), vn = pe;
var gt = ze.context = new Aa.Context();
function Ra(e, t) {
  return new vn.GitHub(vn.getOctokitOptions(e, t));
}
En = ze.getOctokit = Ra;
const M = (e) => `\`${e}\``, $a = (e, t) => `[${e}](${t})`, On = (e) => `<sub>${e}</sub>`, wt = (e) => `<sup>${e}</sup>`, bt = (e) => `**${e}**`;
var Ga = Object.defineProperty, Ca = Object.defineProperties, ka = Object.getOwnPropertyDescriptors, Pn = Object.getOwnPropertySymbols, Da = Object.prototype.hasOwnProperty, Ua = Object.prototype.propertyIsEnumerable, Sn = (e, t, r) => t in e ? Ga(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Zt = (e, t) => {
  for (var r in t || (t = {}))
    Da.call(t, r) && Sn(e, r, t[r]);
  if (Pn)
    for (var r of Pn(t))
      Ua.call(t, r) && Sn(e, r, t[r]);
  return e;
}, Xt = (e, t) => Ca(e, ka(t));
async function ja({
  token: e,
  commentSignature: t,
  repo: r,
  prNumber: n,
  body: s
}) {
  G.startGroup("Comment on PR"), s += `

${t}`;
  const o = En(e);
  G.info("Getting list of comments");
  const { data: i } = await o.issues.listComments(Xt(Zt({}, r), {
    issue_number: n
  })), a = i.find((l) => l.body.endsWith(t));
  a ? (G.info(`Updating previous comment ID ${a.id}`), await o.issues.updateComment(Xt(Zt({}, r), {
    comment_id: a.id,
    body: s
  }))) : (G.info("Posting new comment"), await o.issues.createComment(Xt(Zt({}, r), {
    issue_number: n,
    body: s
  }))), G.endGroup();
}
let An = {};
const Rn = /* @__PURE__ */ new WeakMap(), $n = {
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
class Fa {
  constructor(t, r) {
    r = Object.assign({
      units: "metric",
      precision: 1,
      locale: void 0
    }, An, r), Rn.set(this, r), Object.assign($n, r.customUnits);
    const n = t < 0 ? "-" : "";
    t = Math.abs(t);
    const s = $n[r.units];
    if (s) {
      const o = s.find((i) => t >= i.from && t < i.to);
      if (o) {
        const i = new Intl.NumberFormat(r.locale, {
          style: "decimal",
          minimumFractionDigits: r.precision,
          maximumFractionDigits: r.precision
        }), a = o.from === 0 ? n + t : n + i.format(t / o.from);
        this.value = a, this.unit = o.unit, this.long = o.long;
      } else
        this.value = n + t, this.unit = "", this.long = "";
    } else
      throw new Error(`Invalid units specified: ${r.units}`);
  }
  toString() {
    const t = Rn.get(this);
    return t.toStringFn ? t.toStringFn.bind(this)() : `${this.value} ${this.unit}`;
  }
}
function z(e, t) {
  return new Fa(e, t);
}
z.defaultOptions = function(e) {
  An = e;
};
function Ze(e, t = {}) {
  const r = (t.align || []).concat(), n = t.stringLength || Ia, s = [], o = [], i = [], a = [];
  let l = 0, p = -1;
  for (; ++p < e.length; ) {
    const E = [], m = [];
    let b = -1;
    for (e[p].length > l && (l = e[p].length); ++b < e[p].length; ) {
      const T = xa(e[p][b]);
      if (t.alignDelimiters !== !1) {
        const d = n(T);
        m[b] = d, (a[b] === void 0 || d > a[b]) && (a[b] = d);
      }
      E.push(T);
    }
    o[p] = E, i[p] = m;
  }
  let h = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++h < l; )
      s[h] = Gn(r[h]);
  else {
    const E = Gn(r);
    for (; ++h < l; )
      s[h] = E;
  }
  h = -1;
  const w = [], _ = [];
  for (; ++h < l; ) {
    const E = s[h];
    let m = "", b = "";
    E === 99 ? (m = ":", b = ":") : E === 108 ? m = ":" : E === 114 && (b = ":");
    let T = t.alignDelimiters === !1 ? 1 : Math.max(1, a[h] - m.length - b.length);
    const d = m + "-".repeat(T) + b;
    t.alignDelimiters !== !1 && (T = m.length + T + b.length, T > a[h] && (a[h] = T), _[h] = T), w[h] = d;
  }
  o.splice(1, 0, w), i.splice(1, 0, _), p = -1;
  const $ = [];
  for (; ++p < o.length; ) {
    const E = o[p], m = i[p];
    h = -1;
    const b = [];
    for (; ++h < l; ) {
      const T = E[h] || "";
      let d = "", f = "";
      if (t.alignDelimiters !== !1) {
        const c = a[h] - (m[h] || 0), u = s[h];
        u === 114 ? d = " ".repeat(c) : u === 99 ? c % 2 ? (d = " ".repeat(c / 2 + 0.5), f = " ".repeat(c / 2 - 0.5)) : (d = " ".repeat(c / 2), f = d) : f = " ".repeat(c);
      }
      t.delimiterStart !== !1 && !h && b.push("|"), t.padding !== !1 && !(t.alignDelimiters === !1 && T === "") && (t.delimiterStart !== !1 || h) && b.push(" "), t.alignDelimiters !== !1 && b.push(d), b.push(T), t.alignDelimiters !== !1 && b.push(f), t.padding !== !1 && b.push(" "), (t.delimiterEnd !== !1 || h !== l - 1) && b.push("|");
    }
    $.push(t.delimiterEnd === !1 ? b.join("").replace(/ +$/, "") : b.join(""));
  }
  return $.join(`
`);
}
function xa(e) {
  return e == null ? "" : String(e);
}
function Ia(e) {
  return e.length;
}
function Gn(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function yt() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
}
function Cn() {
  return typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : Ba();
}
function Ba() {
  return {
    add: yt,
    delete: yt,
    get: yt,
    set: yt,
    has: function(e) {
      return !1;
    }
  };
}
var La = Object.prototype.hasOwnProperty, Qt = function(e, t) {
  return La.call(e, t);
};
function er(e, t) {
  for (var r in t)
    Qt(t, r) && (e[r] = t[r]);
  return e;
}
var qa = /^[ \t]*(?:\r\n|\r|\n)/, Ma = /(?:\r\n|\r|\n)[ \t]*$/, Na = /^(?:[\r\n]|$)/, za = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/, Ha = /^[ \t]*[\r\n][ \t\r\n]*$/;
function kn(e, t, r) {
  var n = 0, s = e[0].match(za);
  s && (n = s[1].length);
  var o = "(\\r\\n|\\r|\\n).{0," + n + "}", i = new RegExp(o, "g");
  t && (e = e.slice(1));
  var a = r.newline, l = r.trimLeadingNewline, p = r.trimTrailingNewline, h = typeof a == "string", w = e.length, _ = e.map(function($, E) {
    return $ = $.replace(i, "$1"), E === 0 && l && ($ = $.replace(qa, "")), E === w - 1 && p && ($ = $.replace(Ma, "")), h && ($ = $.replace(/\r\n|\n|\r/g, function(m) {
      return a;
    })), $;
  });
  return _;
}
function Wa(e, t) {
  for (var r = "", n = 0, s = e.length; n < s; n++)
    r += e[n], n < s - 1 && (r += t[n]);
  return r;
}
function Ka(e) {
  return Qt(e, "raw") && Qt(e, "length");
}
function Dn(e) {
  var t = Cn(), r = Cn();
  function n(o) {
    for (var i = [], a = 1; a < arguments.length; a++)
      i[a - 1] = arguments[a];
    if (Ka(o)) {
      var l = o, p = (i[0] === n || i[0] === se) && Ha.test(l[0]) && Na.test(l[1]), h = p ? r : t, w = h.get(l);
      if (w || (w = kn(l, p, e), h.set(l, w)), i.length === 0)
        return w[0];
      var _ = Wa(w, p ? i.slice(1) : i);
      return _;
    } else
      return Dn(er(er({}, e), o || {}));
  }
  var s = er(n, {
    string: function(o) {
      return kn([o], !1, e)[0];
    }
  });
  return s;
}
var se = Dn({
  trimLeadingNewline: !0,
  trimTrailingNewline: !0
});
if (typeof module < "u")
  try {
    module.exports = se, Object.defineProperty(se, "__esModule", { value: !0 }), se.default = se, se.outdent = se;
  } catch {
  }
var Va = typeof global == "object" && global && global.Object === Object && global, Un = Va, Ja = typeof self == "object" && self && self.Object === Object && self, Ya = Un || Ja || Function("return this")(), J = Ya, Za = J.Symbol, me = Za, jn = Object.prototype, Xa = jn.hasOwnProperty, Qa = jn.toString, Xe = me ? me.toStringTag : void 0;
function ec(e) {
  var t = Xa.call(e, Xe), r = e[Xe];
  try {
    e[Xe] = void 0;
    var n = !0;
  } catch {
  }
  var s = Qa.call(e);
  return n && (t ? e[Xe] = r : delete e[Xe]), s;
}
var tc = Object.prototype, rc = tc.toString;
function nc(e) {
  return rc.call(e);
}
var sc = "[object Null]", oc = "[object Undefined]", Fn = me ? me.toStringTag : void 0;
function De(e) {
  return e == null ? e === void 0 ? oc : sc : Fn && Fn in Object(e) ? ec(e) : nc(e);
}
function Ue(e) {
  return e != null && typeof e == "object";
}
var ic = "[object Symbol]";
function Tt(e) {
  return typeof e == "symbol" || Ue(e) && De(e) == ic;
}
function ac(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, s = Array(n); ++r < n; )
    s[r] = t(e[r], r, e);
  return s;
}
var cc = Array.isArray, Y = cc, lc = 1 / 0, xn = me ? me.prototype : void 0, In = xn ? xn.toString : void 0;
function Bn(e) {
  if (typeof e == "string")
    return e;
  if (Y(e))
    return ac(e, Bn) + "";
  if (Tt(e))
    return In ? In.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -lc ? "-0" : t;
}
var uc = /\s/;
function pc(e) {
  for (var t = e.length; t-- && uc.test(e.charAt(t)); )
    ;
  return t;
}
var dc = /^\s+/;
function fc(e) {
  return e && e.slice(0, pc(e) + 1).replace(dc, "");
}
function Qe(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ln = 0 / 0, hc = /^[-+]0x[0-9a-f]+$/i, mc = /^0b[01]+$/i, gc = /^0o[0-7]+$/i, wc = parseInt;
function qn(e) {
  if (typeof e == "number")
    return e;
  if (Tt(e))
    return Ln;
  if (Qe(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Qe(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = fc(e);
  var r = mc.test(e);
  return r || gc.test(e) ? wc(e.slice(2), r ? 2 : 8) : hc.test(e) ? Ln : +e;
}
var Mn = 1 / 0, bc = 17976931348623157e292;
function yc(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = qn(e), e === Mn || e === -Mn) {
    var t = e < 0 ? -1 : 1;
    return t * bc;
  }
  return e === e ? e : 0;
}
function Tc(e) {
  var t = yc(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
function _c(e) {
  return e;
}
var Ec = "[object AsyncFunction]", vc = "[object Function]", Oc = "[object GeneratorFunction]", Pc = "[object Proxy]";
function Nn(e) {
  if (!Qe(e))
    return !1;
  var t = De(e);
  return t == vc || t == Oc || t == Ec || t == Pc;
}
var Sc = J["__core-js_shared__"], tr = Sc, zn = function() {
  var e = /[^.]+$/.exec(tr && tr.keys && tr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ac(e) {
  return !!zn && zn in e;
}
var Rc = Function.prototype, $c = Rc.toString;
function Ee(e) {
  if (e != null) {
    try {
      return $c.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Gc = /[\\^$.*+?()[\]{}|]/g, Cc = /^\[object .+?Constructor\]$/, kc = Function.prototype, Dc = Object.prototype, Uc = kc.toString, jc = Dc.hasOwnProperty, Fc = RegExp("^" + Uc.call(jc).replace(Gc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function xc(e) {
  if (!Qe(e) || Ac(e))
    return !1;
  var t = Nn(e) ? Fc : Cc;
  return t.test(Ee(e));
}
function Ic(e, t) {
  return e?.[t];
}
function je(e, t) {
  var r = Ic(e, t);
  return xc(r) ? r : void 0;
}
var Bc = je(J, "WeakMap"), rr = Bc, Lc = 9007199254740991, qc = /^(?:0|[1-9]\d*)$/;
function Hn(e, t) {
  var r = typeof e;
  return t = t ?? Lc, !!t && (r == "number" || r != "symbol" && qc.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Wn(e, t) {
  return e === t || e !== e && t !== t;
}
var Mc = 9007199254740991;
function nr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Mc;
}
function Kn(e) {
  return e != null && nr(e.length) && !Nn(e);
}
var Nc = Object.prototype;
function zc(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Nc;
  return e === r;
}
function Hc(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Wc = "[object Arguments]";
function Vn(e) {
  return Ue(e) && De(e) == Wc;
}
var Jn = Object.prototype, Kc = Jn.hasOwnProperty, Vc = Jn.propertyIsEnumerable, Jc = Vn(function() {
  return arguments;
}()) ? Vn : function(e) {
  return Ue(e) && Kc.call(e, "callee") && !Vc.call(e, "callee");
}, Yn = Jc;
function Yc() {
  return !1;
}
var Zn = typeof exports == "object" && exports && !exports.nodeType && exports, Xn = Zn && typeof module == "object" && module && !module.nodeType && module, Zc = Xn && Xn.exports === Zn, Qn = Zc ? J.Buffer : void 0, Xc = Qn ? Qn.isBuffer : void 0, Qc = Xc || Yc, sr = Qc, el = "[object Arguments]", tl = "[object Array]", rl = "[object Boolean]", nl = "[object Date]", sl = "[object Error]", ol = "[object Function]", il = "[object Map]", al = "[object Number]", cl = "[object Object]", ll = "[object RegExp]", ul = "[object Set]", pl = "[object String]", dl = "[object WeakMap]", fl = "[object ArrayBuffer]", hl = "[object DataView]", ml = "[object Float32Array]", gl = "[object Float64Array]", wl = "[object Int8Array]", bl = "[object Int16Array]", yl = "[object Int32Array]", Tl = "[object Uint8Array]", _l = "[object Uint8ClampedArray]", El = "[object Uint16Array]", vl = "[object Uint32Array]", U = {};
U[ml] = U[gl] = U[wl] = U[bl] = U[yl] = U[Tl] = U[_l] = U[El] = U[vl] = !0, U[el] = U[tl] = U[fl] = U[rl] = U[hl] = U[nl] = U[sl] = U[ol] = U[il] = U[al] = U[cl] = U[ll] = U[ul] = U[pl] = U[dl] = !1;
function Ol(e) {
  return Ue(e) && nr(e.length) && !!U[De(e)];
}
function Pl(e) {
  return function(t) {
    return e(t);
  };
}
var es = typeof exports == "object" && exports && !exports.nodeType && exports, et = es && typeof module == "object" && module && !module.nodeType && module, Sl = et && et.exports === es, or = Sl && Un.process, Al = function() {
  try {
    var e = et && et.require && et.require("util").types;
    return e || or && or.binding && or.binding("util");
  } catch {
  }
}(), ts = Al, rs = ts && ts.isTypedArray, Rl = rs ? Pl(rs) : Ol, ns = Rl, $l = Object.prototype, Gl = $l.hasOwnProperty;
function Cl(e, t) {
  var r = Y(e), n = !r && Yn(e), s = !r && !n && sr(e), o = !r && !n && !s && ns(e), i = r || n || s || o, a = i ? Hc(e.length, String) : [], l = a.length;
  for (var p in e)
    (t || Gl.call(e, p)) && !(i && (p == "length" || s && (p == "offset" || p == "parent") || o && (p == "buffer" || p == "byteLength" || p == "byteOffset") || Hn(p, l))) && a.push(p);
  return a;
}
function kl(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Dl = kl(Object.keys, Object), Ul = Dl, jl = Object.prototype, Fl = jl.hasOwnProperty;
function xl(e) {
  if (!zc(e))
    return Ul(e);
  var t = [];
  for (var r in Object(e))
    Fl.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function ir(e) {
  return Kn(e) ? Cl(e) : xl(e);
}
var Il = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Bl = /^\w*$/;
function ar(e, t) {
  if (Y(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Tt(e) ? !0 : Bl.test(e) || !Il.test(e) || t != null && e in Object(t);
}
var Ll = je(Object, "create"), tt = Ll;
function ql() {
  this.__data__ = tt ? tt(null) : {}, this.size = 0;
}
function Ml(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Nl = "__lodash_hash_undefined__", zl = Object.prototype, Hl = zl.hasOwnProperty;
function Wl(e) {
  var t = this.__data__;
  if (tt) {
    var r = t[e];
    return r === Nl ? void 0 : r;
  }
  return Hl.call(t, e) ? t[e] : void 0;
}
var Kl = Object.prototype, Vl = Kl.hasOwnProperty;
function Jl(e) {
  var t = this.__data__;
  return tt ? t[e] !== void 0 : Vl.call(t, e);
}
var Yl = "__lodash_hash_undefined__";
function Zl(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = tt && t === void 0 ? Yl : t, this;
}
function ve(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ve.prototype.clear = ql, ve.prototype.delete = Ml, ve.prototype.get = Wl, ve.prototype.has = Jl, ve.prototype.set = Zl;
function Xl() {
  this.__data__ = [], this.size = 0;
}
function _t(e, t) {
  for (var r = e.length; r--; )
    if (Wn(e[r][0], t))
      return r;
  return -1;
}
var Ql = Array.prototype, eu = Ql.splice;
function tu(e) {
  var t = this.__data__, r = _t(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : eu.call(t, r, 1), --this.size, !0;
}
function ru(e) {
  var t = this.__data__, r = _t(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function nu(e) {
  return _t(this.__data__, e) > -1;
}
function su(e, t) {
  var r = this.__data__, n = _t(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function oe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
oe.prototype.clear = Xl, oe.prototype.delete = tu, oe.prototype.get = ru, oe.prototype.has = nu, oe.prototype.set = su;
var ou = je(J, "Map"), rt = ou;
function iu() {
  this.size = 0, this.__data__ = {
    hash: new ve(),
    map: new (rt || oe)(),
    string: new ve()
  };
}
function au(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Et(e, t) {
  var r = e.__data__;
  return au(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function cu(e) {
  var t = Et(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function lu(e) {
  return Et(this, e).get(e);
}
function uu(e) {
  return Et(this, e).has(e);
}
function pu(e, t) {
  var r = Et(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function ie(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ie.prototype.clear = iu, ie.prototype.delete = cu, ie.prototype.get = lu, ie.prototype.has = uu, ie.prototype.set = pu;
var du = "Expected a function";
function cr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(du);
  var r = function() {
    var n = arguments, s = t ? t.apply(this, n) : n[0], o = r.cache;
    if (o.has(s))
      return o.get(s);
    var i = e.apply(this, n);
    return r.cache = o.set(s, i) || o, i;
  };
  return r.cache = new (cr.Cache || ie)(), r;
}
cr.Cache = ie;
var fu = 500;
function hu(e) {
  var t = cr(e, function(n) {
    return r.size === fu && r.clear(), n;
  }), r = t.cache;
  return t;
}
var mu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, gu = /\\(\\)?/g, wu = hu(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(mu, function(r, n, s, o) {
    t.push(s ? o.replace(gu, "$1") : n || r);
  }), t;
}), bu = wu;
function lr(e) {
  return e == null ? "" : Bn(e);
}
function ss(e, t) {
  return Y(e) ? e : ar(e, t) ? [e] : bu(lr(e));
}
var yu = 1 / 0;
function vt(e) {
  if (typeof e == "string" || Tt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -yu ? "-0" : t;
}
function os(e, t) {
  t = ss(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[vt(t[r++])];
  return r && r == n ? e : void 0;
}
function Tu(e, t, r) {
  var n = e == null ? void 0 : os(e, t);
  return n === void 0 ? r : n;
}
function _u(e, t) {
  for (var r = -1, n = t.length, s = e.length; ++r < n; )
    e[s + r] = t[r];
  return e;
}
var Eu = J.isFinite, vu = Math.min;
function Ou(e) {
  var t = Math[e];
  return function(r, n) {
    if (r = qn(r), n = n == null ? 0 : vu(Tc(n), 292), n && Eu(r)) {
      var s = (lr(r) + "e").split("e"), o = t(s[0] + "e" + (+s[1] + n));
      return s = (lr(o) + "e").split("e"), +(s[0] + "e" + (+s[1] - n));
    }
    return t(r);
  };
}
function Pu() {
  this.__data__ = new oe(), this.size = 0;
}
function Su(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Au(e) {
  return this.__data__.get(e);
}
function Ru(e) {
  return this.__data__.has(e);
}
var $u = 200;
function Gu(e, t) {
  var r = this.__data__;
  if (r instanceof oe) {
    var n = r.__data__;
    if (!rt || n.length < $u - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new ie(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function ae(e) {
  var t = this.__data__ = new oe(e);
  this.size = t.size;
}
ae.prototype.clear = Pu, ae.prototype.delete = Su, ae.prototype.get = Au, ae.prototype.has = Ru, ae.prototype.set = Gu;
function Cu(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, s = 0, o = []; ++r < n; ) {
    var i = e[r];
    t(i, r, e) && (o[s++] = i);
  }
  return o;
}
function ku() {
  return [];
}
var Du = Object.prototype, Uu = Du.propertyIsEnumerable, is = Object.getOwnPropertySymbols, ju = is ? function(e) {
  return e == null ? [] : (e = Object(e), Cu(is(e), function(t) {
    return Uu.call(e, t);
  }));
} : ku, Fu = ju;
function xu(e, t, r) {
  var n = t(e);
  return Y(e) ? n : _u(n, r(e));
}
function as(e) {
  return xu(e, ir, Fu);
}
var Iu = je(J, "DataView"), ur = Iu, Bu = je(J, "Promise"), pr = Bu, Lu = je(J, "Set"), dr = Lu, cs = "[object Map]", qu = "[object Object]", ls = "[object Promise]", us = "[object Set]", ps = "[object WeakMap]", ds = "[object DataView]", Mu = Ee(ur), Nu = Ee(rt), zu = Ee(pr), Hu = Ee(dr), Wu = Ee(rr), Oe = De;
(ur && Oe(new ur(new ArrayBuffer(1))) != ds || rt && Oe(new rt()) != cs || pr && Oe(pr.resolve()) != ls || dr && Oe(new dr()) != us || rr && Oe(new rr()) != ps) && (Oe = function(e) {
  var t = De(e), r = t == qu ? e.constructor : void 0, n = r ? Ee(r) : "";
  if (n)
    switch (n) {
      case Mu:
        return ds;
      case Nu:
        return cs;
      case zu:
        return ls;
      case Hu:
        return us;
      case Wu:
        return ps;
    }
  return t;
});
var fs = Oe, Ku = J.Uint8Array, hs = Ku, Vu = "__lodash_hash_undefined__";
function Ju(e) {
  return this.__data__.set(e, Vu), this;
}
function Yu(e) {
  return this.__data__.has(e);
}
function Ot(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new ie(); ++t < r; )
    this.add(e[t]);
}
Ot.prototype.add = Ot.prototype.push = Ju, Ot.prototype.has = Yu;
function Zu(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function Xu(e, t) {
  return e.has(t);
}
var Qu = 1, ep = 2;
function ms(e, t, r, n, s, o) {
  var i = r & Qu, a = e.length, l = t.length;
  if (a != l && !(i && l > a))
    return !1;
  var p = o.get(e), h = o.get(t);
  if (p && h)
    return p == t && h == e;
  var w = -1, _ = !0, $ = r & ep ? new Ot() : void 0;
  for (o.set(e, t), o.set(t, e); ++w < a; ) {
    var E = e[w], m = t[w];
    if (n)
      var b = i ? n(m, E, w, t, e, o) : n(E, m, w, e, t, o);
    if (b !== void 0) {
      if (b)
        continue;
      _ = !1;
      break;
    }
    if ($) {
      if (!Zu(t, function(T, d) {
        if (!Xu($, d) && (E === T || s(E, T, r, n, o)))
          return $.push(d);
      })) {
        _ = !1;
        break;
      }
    } else if (!(E === m || s(E, m, r, n, o))) {
      _ = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), _;
}
function tp(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, s) {
    r[++t] = [s, n];
  }), r;
}
function rp(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var np = 1, sp = 2, op = "[object Boolean]", ip = "[object Date]", ap = "[object Error]", cp = "[object Map]", lp = "[object Number]", up = "[object RegExp]", pp = "[object Set]", dp = "[object String]", fp = "[object Symbol]", hp = "[object ArrayBuffer]", mp = "[object DataView]", gs = me ? me.prototype : void 0, fr = gs ? gs.valueOf : void 0;
function gp(e, t, r, n, s, o, i) {
  switch (r) {
    case mp:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case hp:
      return !(e.byteLength != t.byteLength || !o(new hs(e), new hs(t)));
    case op:
    case ip:
    case lp:
      return Wn(+e, +t);
    case ap:
      return e.name == t.name && e.message == t.message;
    case up:
    case dp:
      return e == t + "";
    case cp:
      var a = tp;
    case pp:
      var l = n & np;
      if (a || (a = rp), e.size != t.size && !l)
        return !1;
      var p = i.get(e);
      if (p)
        return p == t;
      n |= sp, i.set(e, t);
      var h = ms(a(e), a(t), n, s, o, i);
      return i.delete(e), h;
    case fp:
      if (fr)
        return fr.call(e) == fr.call(t);
  }
  return !1;
}
var wp = 1, bp = Object.prototype, yp = bp.hasOwnProperty;
function Tp(e, t, r, n, s, o) {
  var i = r & wp, a = as(e), l = a.length, p = as(t), h = p.length;
  if (l != h && !i)
    return !1;
  for (var w = l; w--; ) {
    var _ = a[w];
    if (!(i ? _ in t : yp.call(t, _)))
      return !1;
  }
  var $ = o.get(e), E = o.get(t);
  if ($ && E)
    return $ == t && E == e;
  var m = !0;
  o.set(e, t), o.set(t, e);
  for (var b = i; ++w < l; ) {
    _ = a[w];
    var T = e[_], d = t[_];
    if (n)
      var f = i ? n(d, T, _, t, e, o) : n(T, d, _, e, t, o);
    if (!(f === void 0 ? T === d || s(T, d, r, n, o) : f)) {
      m = !1;
      break;
    }
    b || (b = _ == "constructor");
  }
  if (m && !b) {
    var c = e.constructor, u = t.constructor;
    c != u && "constructor" in e && "constructor" in t && !(typeof c == "function" && c instanceof c && typeof u == "function" && u instanceof u) && (m = !1);
  }
  return o.delete(e), o.delete(t), m;
}
var _p = 1, ws = "[object Arguments]", bs = "[object Array]", Pt = "[object Object]", Ep = Object.prototype, ys = Ep.hasOwnProperty;
function vp(e, t, r, n, s, o) {
  var i = Y(e), a = Y(t), l = i ? bs : fs(e), p = a ? bs : fs(t);
  l = l == ws ? Pt : l, p = p == ws ? Pt : p;
  var h = l == Pt, w = p == Pt, _ = l == p;
  if (_ && sr(e)) {
    if (!sr(t))
      return !1;
    i = !0, h = !1;
  }
  if (_ && !h)
    return o || (o = new ae()), i || ns(e) ? ms(e, t, r, n, s, o) : gp(e, t, l, r, n, s, o);
  if (!(r & _p)) {
    var $ = h && ys.call(e, "__wrapped__"), E = w && ys.call(t, "__wrapped__");
    if ($ || E) {
      var m = $ ? e.value() : e, b = E ? t.value() : t;
      return o || (o = new ae()), s(m, b, r, n, o);
    }
  }
  return _ ? (o || (o = new ae()), Tp(e, t, r, n, s, o)) : !1;
}
function hr(e, t, r, n, s) {
  return e === t ? !0 : e == null || t == null || !Ue(e) && !Ue(t) ? e !== e && t !== t : vp(e, t, r, n, hr, s);
}
var Op = 1, Pp = 2;
function Sp(e, t, r, n) {
  var s = r.length, o = s, i = !n;
  if (e == null)
    return !o;
  for (e = Object(e); s--; ) {
    var a = r[s];
    if (i && a[2] ? a[1] !== e[a[0]] : !(a[0] in e))
      return !1;
  }
  for (; ++s < o; ) {
    a = r[s];
    var l = a[0], p = e[l], h = a[1];
    if (i && a[2]) {
      if (p === void 0 && !(l in e))
        return !1;
    } else {
      var w = new ae();
      if (n)
        var _ = n(p, h, l, e, t, w);
      if (!(_ === void 0 ? hr(h, p, Op | Pp, n, w) : _))
        return !1;
    }
  }
  return !0;
}
function Ts(e) {
  return e === e && !Qe(e);
}
function Ap(e) {
  for (var t = ir(e), r = t.length; r--; ) {
    var n = t[r], s = e[n];
    t[r] = [n, s, Ts(s)];
  }
  return t;
}
function _s(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function Rp(e) {
  var t = Ap(e);
  return t.length == 1 && t[0][2] ? _s(t[0][0], t[0][1]) : function(r) {
    return r === e || Sp(r, e, t);
  };
}
function $p(e, t) {
  return e != null && t in Object(e);
}
function Gp(e, t, r) {
  t = ss(t, e);
  for (var n = -1, s = t.length, o = !1; ++n < s; ) {
    var i = vt(t[n]);
    if (!(o = e != null && r(e, i)))
      break;
    e = e[i];
  }
  return o || ++n != s ? o : (s = e == null ? 0 : e.length, !!s && nr(s) && Hn(i, s) && (Y(e) || Yn(e)));
}
function Cp(e, t) {
  return e != null && Gp(e, t, $p);
}
var kp = 1, Dp = 2;
function Up(e, t) {
  return ar(e) && Ts(t) ? _s(vt(e), t) : function(r) {
    var n = Tu(r, e);
    return n === void 0 && n === t ? Cp(r, e) : hr(t, n, kp | Dp);
  };
}
function jp(e) {
  return function(t) {
    return t?.[e];
  };
}
function Fp(e) {
  return function(t) {
    return os(t, e);
  };
}
function xp(e) {
  return ar(e) ? jp(vt(e)) : Fp(e);
}
function Ip(e) {
  return typeof e == "function" ? e : e == null ? _c : typeof e == "object" ? Y(e) ? Up(e[0], e[1]) : Rp(e) : xp(e);
}
function Bp(e, t, r, n) {
  for (var s = -1, o = e == null ? 0 : e.length; ++s < o; ) {
    var i = e[s];
    t(n, i, r(i), e);
  }
  return n;
}
function Lp(e) {
  return function(t, r, n) {
    for (var s = -1, o = Object(t), i = n(t), a = i.length; a--; ) {
      var l = i[e ? a : ++s];
      if (r(o[l], l, o) === !1)
        break;
    }
    return t;
  };
}
var qp = Lp(), Mp = qp;
function Np(e, t) {
  return e && Mp(e, t, ir);
}
function zp(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!Kn(r))
      return e(r, n);
    for (var s = r.length, o = t ? s : -1, i = Object(r); (t ? o-- : ++o < s) && n(i[o], o, i) !== !1; )
      ;
    return r;
  };
}
var Hp = zp(Np), Wp = Hp;
function Kp(e, t, r, n) {
  return Wp(e, function(s, o, i) {
    t(n, s, r(s), i);
  }), n;
}
function Vp(e, t) {
  return function(r, n) {
    var s = Y(r) ? Bp : Kp, o = t ? t() : {};
    return s(r, e, Ip(n), o);
  };
}
var Jp = Vp(function(e, t, r) {
  e[r ? 0 : 1].push(t);
}, function() {
  return [[], []];
}), Es = Jp, Yp = Ou("round"), mr = Yp, Zp = function(e, t) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  for (var r = String(e), n = "", s = t ? !!t.extended : !1, o = t ? !!t.globstar : !1, i = !1, a = t && typeof t.flags == "string" ? t.flags : "", l, p = 0, h = r.length; p < h; p++)
    switch (l = r[p], l) {
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
        n += "\\" + l;
        break;
      case "?":
        if (s) {
          n += ".";
          break;
        }
      case "[":
      case "]":
        if (s) {
          n += l;
          break;
        }
      case "{":
        if (s) {
          i = !0, n += "(";
          break;
        }
      case "}":
        if (s) {
          i = !1, n += ")";
          break;
        }
      case ",":
        if (i) {
          n += "|";
          break;
        }
        n += "\\" + l;
        break;
      case "*":
        for (var w = r[p - 1], _ = 1; r[p + 1] === "*"; )
          _++, p++;
        var $ = r[p + 1];
        if (!o)
          n += ".*";
        else {
          var E = _ > 1 && (w === "/" || w === void 0) && ($ === "/" || $ === void 0);
          E ? (n += "((?:[^/]*(?:/|$))*)", p++) : n += "([^/]*)";
        }
        break;
      default:
        n += l;
    }
  return (!a || !~a.indexOf("g")) && (n = "^" + n + "$"), new RegExp(n, a);
};
function vs(e, t) {
  if (!e)
    return [[], t];
  const r = Zp(e, { extended: !0 });
  return Es(t, (n) => r.test(n.path));
}
function Os(e) {
  return e.length === 1 && e[0].property === "size" ? "" : ` (${e.map((t) => t.label).join(" / ")})`;
}
const Ps = {
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
function Ss(e) {
  return e.split(",").map((t) => t.trim()).filter((t) => Ps.hasOwnProperty(t)).map((t) => Ps[t]);
}
const Z = (e, t) => e.map(({ property: r }) => t(r)).join(" / ");
function As(e, t, r) {
  e.sort((n, s) => s[t] - n[t] || n.path.localeCompare(s.path)), r === "asc" && e.reverse();
}
var Xp = Object.defineProperty, Qp = Object.defineProperties, ed = Object.getOwnPropertyDescriptors, Rs = Object.getOwnPropertySymbols, td = Object.prototype.hasOwnProperty, rd = Object.prototype.propertyIsEnumerable, $s = (e, t, r) => t in e ? Xp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, nd = (e, t) => {
  for (var r in t || (t = {}))
    td.call(t, r) && $s(e, r, t[r]);
  if (Rs)
    for (var r of Rs(t))
      rd.call(t, r) && $s(e, r, t[r]);
  return e;
}, sd = (e, t) => Qp(e, ed(t));
const od = (e) => (e < 1e-3 ? e = mr(e, 4) : e < 0.01 ? e = mr(e, 3) : e = mr(e, 2), e.toLocaleString(void 0, {
  style: "percent",
  maximumSignificantDigits: 3
}));
function St(e, t, r) {
  const n = e[r] - t[r];
  return {
    delta: n,
    percent: od(n / t[r])
  };
}
function Gs(e, t) {
  return {
    size: St(e, t, "size"),
    sizeGzip: St(e, t, "sizeGzip"),
    sizeBrotli: St(e, t, "sizeBrotli")
  };
}
function Cs(e, t, r) {
  for (const n of r.files) {
    e[n.path] || (e[n.path] = {
      path: n.path,
      label: n.label
    });
    const s = e[n.path];
    s[t] = n, s.head && s.base && (s.diff = Gs(s.head, s.base));
  }
}
function id(e, t, {
  sortBy: r,
  sortOrder: n,
  hideFiles: s
} = {}) {
  const o = {};
  Cs(o, "head", e), Cs(o, "base", t);
  const i = Object.values(o);
  As(i, r, n);
  const [a, l] = vs(s, i), [p, h] = Es(l, (w) => w.diff && w.diff.size.delta === 0);
  return {
    head: e,
    base: t,
    diff: sd(nd({}, Gs(e, t)), {
      tarballSize: St(e, t, "tarballSize")
    }),
    files: {
      changed: h,
      unchanged: p,
      hidden: a
    }
  };
}
const ad = (e) => e < 0 ? "\u2193" : e > 0 ? "\u2191" : "", nt = ({ delta: e, percent: t }) => e ? t + ad(e) : "";
function cd({
  headPkgData: e,
  basePkgData: t,
  sortBy: r,
  sortOrder: n,
  hideFiles: s,
  unchangedFiles: o,
  displaySize: i
}) {
  const a = id(e, t, {
    sortBy: r,
    sortOrder: n,
    hideFiles: s
  });
  G.setOutput("regressionData", a);
  const { changed: l, unchanged: p, hidden: h } = a.files, w = Ss(i), _ = Os(w), $ = Ze([
    ["File", `Before${_}`, `After${_}`],
    ...[
      ...l,
      ...o === "show" ? p : []
    ].map((b) => [
      b.label,
      b.base && b.base.size ? Z(w, (T) => M(z(b.base[T]))) : "\u2014",
      b.head && b.head.size ? Z(w, (T) => (b.base && b.base[T] ? wt(nt(b.diff[T])) : "") + M(z(b.head[T]))) : "\u2014"
    ]),
    [
      `${bt("Total")} ${o === "show" ? "" : On("_(Includes all files)_")}`,
      Z(w, (b) => M(z(a.base[b]))),
      Z(w, (b) => wt(nt(a.diff[b])) + M(z(a.head[b])))
    ],
    [
      bt("Tarball size"),
      M(z(a.base.tarballSize)),
      wt(nt(a.diff.tarballSize)) + M(z(a.head.tarballSize))
    ]
  ], {
    align: ["", "r", "r"]
  });
  let E = "";
  o === "collapse" && p.length > 0 && (E = Ze([
    ["File", `Size${_}`],
    ...p.map((b) => [
      b.label,
      Z(w, (T) => M(z(b.base[T])))
    ])
  ], {
    align: ["", "r"]
  }), E = `<details><summary>Unchanged files</summary>

${E}
</details>`);
  let m = "";
  return h.length > 0 && (m = Ze([
    ["File", `Before${_}`, `After${_}`],
    ...h.map((b) => [
      b.label,
      b.base && b.base.size ? Z(w, (T) => M(z(b.base[T]))) : "\u2014",
      b.head && b.head.size ? Z(w, (T) => (b.base && b.base[T] ? wt(nt(b.diff[T])) : "") + M(z(b.head[T]))) : "\u2014"
    ])
  ], {
    align: ["", "r", "r"]
  }), m = `<details><summary>Hidden files</summary>

${m}
</details>`), se`
	### 📊 Package size report&nbsp;&nbsp;&nbsp;<kbd>${nt(a.diff.size) || "No changes"}</kbd>

	${$}

	${E}

	${m}
	`;
}
function ld({
  headPkgData: e,
  hideFiles: t,
  displaySize: r,
  sortBy: n,
  sortOrder: s
}) {
  const o = Ss(r), i = Os(o);
  As(e.files, n, s);
  const [a, l] = vs(t, e.files), p = Ze([
    ["File", `Size${i}`],
    ...l.map((w) => [
      w.label,
      Z(o, (_) => M(z(w[_])))
    ]),
    [
      bt("Total"),
      Z(o, (w) => M(z(e[w])))
    ],
    [
      bt("Tarball size"),
      M(z(e.tarballSize))
    ]
  ], {
    align: ["", "r"]
  });
  let h = "";
  return a.length > 0 && (h = Ze([
    ["File", `Size${i}`],
    ...a.map((w) => [
      w.label,
      Z(o, (_) => M(z(w[_])))
    ])
  ], {
    align: ["", "r"]
  }), h = `<details><summary>Hidden files</summary>

${h}
</details>`), se`
	### 📊 Package size report

	${p}

	${h}
	`;
}
var st = {}, Fe = {}, H = {}, gr = {};
(function(e) {
  var t = O && O.__createBinding || (Object.create ? function(m, b, T, d) {
    d === void 0 && (d = T), Object.defineProperty(m, d, { enumerable: !0, get: function() {
      return b[T];
    } });
  } : function(m, b, T, d) {
    d === void 0 && (d = T), m[d] = b[T];
  }), r = O && O.__setModuleDefault || (Object.create ? function(m, b) {
    Object.defineProperty(m, "default", { enumerable: !0, value: b });
  } : function(m, b) {
    m.default = b;
  }), n = O && O.__importStar || function(m) {
    if (m && m.__esModule)
      return m;
    var b = {};
    if (m != null)
      for (var T in m)
        T !== "default" && Object.hasOwnProperty.call(m, T) && t(b, m, T);
    return r(b, m), b;
  }, s = O && O.__awaiter || function(m, b, T, d) {
    function f(c) {
      return c instanceof T ? c : new T(function(u) {
        u(c);
      });
    }
    return new (T || (T = Promise))(function(c, u) {
      function g(P) {
        try {
          A(d.next(P));
        } catch (S) {
          u(S);
        }
      }
      function y(P) {
        try {
          A(d.throw(P));
        } catch (S) {
          u(S);
        }
      }
      function A(P) {
        P.done ? c(P.value) : f(P.value).then(g, y);
      }
      A((d = d.apply(m, b || [])).next());
    });
  }, o;
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getCmdPath = e.tryGetExecutablePath = e.isRooted = e.isDirectory = e.exists = e.IS_WINDOWS = e.unlink = e.symlink = e.stat = e.rmdir = e.rename = e.readlink = e.readdir = e.mkdir = e.lstat = e.copyFile = e.chmod = void 0;
  const i = n(ce.default), a = n(qe.default);
  o = i.promises, e.chmod = o.chmod, e.copyFile = o.copyFile, e.lstat = o.lstat, e.mkdir = o.mkdir, e.readdir = o.readdir, e.readlink = o.readlink, e.rename = o.rename, e.rmdir = o.rmdir, e.stat = o.stat, e.symlink = o.symlink, e.unlink = o.unlink, e.IS_WINDOWS = process.platform === "win32";
  function l(m) {
    return s(this, void 0, void 0, function* () {
      try {
        yield e.stat(m);
      } catch (b) {
        if (b.code === "ENOENT")
          return !1;
        throw b;
      }
      return !0;
    });
  }
  e.exists = l;
  function p(m, b = !1) {
    return s(this, void 0, void 0, function* () {
      return (b ? yield e.stat(m) : yield e.lstat(m)).isDirectory();
    });
  }
  e.isDirectory = p;
  function h(m) {
    if (m = _(m), !m)
      throw new Error('isRooted() parameter "p" cannot be empty');
    return e.IS_WINDOWS ? m.startsWith("\\") || /^[A-Z]:/i.test(m) : m.startsWith("/");
  }
  e.isRooted = h;
  function w(m, b) {
    return s(this, void 0, void 0, function* () {
      let T;
      try {
        T = yield e.stat(m);
      } catch (f) {
        f.code !== "ENOENT" && console.log(`Unexpected error attempting to determine if executable file exists '${m}': ${f}`);
      }
      if (T && T.isFile()) {
        if (e.IS_WINDOWS) {
          const f = a.extname(m).toUpperCase();
          if (b.some((c) => c.toUpperCase() === f))
            return m;
        } else if ($(T))
          return m;
      }
      const d = m;
      for (const f of b) {
        m = d + f, T = void 0;
        try {
          T = yield e.stat(m);
        } catch (c) {
          c.code !== "ENOENT" && console.log(`Unexpected error attempting to determine if executable file exists '${m}': ${c}`);
        }
        if (T && T.isFile()) {
          if (e.IS_WINDOWS) {
            try {
              const c = a.dirname(m), u = a.basename(m).toUpperCase();
              for (const g of yield e.readdir(c))
                if (u === g.toUpperCase()) {
                  m = a.join(c, g);
                  break;
                }
            } catch (c) {
              console.log(`Unexpected error attempting to determine the actual case of the file '${m}': ${c}`);
            }
            return m;
          } else if ($(T))
            return m;
        }
      }
      return "";
    });
  }
  e.tryGetExecutablePath = w;
  function _(m) {
    return m = m || "", e.IS_WINDOWS ? (m = m.replace(/\//g, "\\"), m.replace(/\\\\+/g, "\\")) : m.replace(/\/\/+/g, "/");
  }
  function $(m) {
    return (m.mode & 1) > 0 || (m.mode & 8) > 0 && m.gid === process.getgid() || (m.mode & 64) > 0 && m.uid === process.getuid();
  }
  function E() {
    var m;
    return (m = process.env.COMSPEC) !== null && m !== void 0 ? m : "cmd.exe";
  }
  e.getCmdPath = E;
})(gr);
var ud = O && O.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), pd = O && O.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), wr = O && O.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.hasOwnProperty.call(e, r) && ud(t, e, r);
  return pd(t, e), t;
}, ge = O && O.__awaiter || function(e, t, r, n) {
  function s(o) {
    return o instanceof r ? o : new r(function(i) {
      i(o);
    });
  }
  return new (r || (r = Promise))(function(o, i) {
    function a(h) {
      try {
        p(n.next(h));
      } catch (w) {
        i(w);
      }
    }
    function l(h) {
      try {
        p(n.throw(h));
      } catch (w) {
        i(w);
      }
    }
    function p(h) {
      h.done ? o(h.value) : s(h.value).then(a, l);
    }
    p((n = n.apply(e, t || [])).next());
  });
};
Object.defineProperty(H, "__esModule", { value: !0 }), H.findInPath = H.which = H.mkdirP = Fs = H.rmRF = H.mv = H.cp = void 0;
const dd = Tr.default, ks = wr(vr.default), X = wr(qe.default), Ds = Er.default, k = wr(gr), Us = Ds.promisify(ks.exec), fd = Ds.promisify(ks.execFile);
function hd(e, t, r = {}) {
  return ge(this, void 0, void 0, function* () {
    const { force: n, recursive: s, copySourceDirectory: o } = gd(r), i = (yield k.exists(t)) ? yield k.stat(t) : null;
    if (i && i.isFile() && !n)
      return;
    const a = i && i.isDirectory() && o ? X.join(t, X.basename(e)) : t;
    if (!(yield k.exists(e)))
      throw new Error(`no such file or directory: ${e}`);
    if ((yield k.stat(e)).isDirectory())
      if (s)
        yield Bs(e, a, 0, n);
      else
        throw new Error(`Failed to copy. ${e} is a directory, but tried to copy without recursive flag.`);
    else {
      if (X.relative(e, a) === "")
        throw new Error(`'${a}' and '${e}' are the same file`);
      yield Ls(e, a, n);
    }
  });
}
H.cp = hd;
function md(e, t, r = {}) {
  return ge(this, void 0, void 0, function* () {
    if (yield k.exists(t)) {
      let n = !0;
      if ((yield k.isDirectory(t)) && (t = X.join(t, X.basename(e)), n = yield k.exists(t)), n)
        if (r.force == null || r.force)
          yield js(t);
        else
          throw new Error("Destination already exists");
    }
    yield br(X.dirname(t)), yield k.rename(e, t);
  });
}
H.mv = md;
function js(e) {
  return ge(this, void 0, void 0, function* () {
    if (k.IS_WINDOWS) {
      if (/[*"<>|]/.test(e))
        throw new Error('File path must not contain `*`, `"`, `<`, `>` or `|` on Windows');
      try {
        const t = k.getCmdPath();
        (yield k.isDirectory(e, !0)) ? yield Us(`${t} /s /c "rd /s /q "%inputPath%""`, {
          env: { inputPath: e }
        }) : yield Us(`${t} /s /c "del /f /a "%inputPath%""`, {
          env: { inputPath: e }
        });
      } catch (t) {
        if (t.code !== "ENOENT")
          throw t;
      }
      try {
        yield k.unlink(e);
      } catch (t) {
        if (t.code !== "ENOENT")
          throw t;
      }
    } else {
      let t = !1;
      try {
        t = yield k.isDirectory(e);
      } catch (r) {
        if (r.code !== "ENOENT")
          throw r;
        return;
      }
      t ? yield fd("rm", ["-rf", `${e}`]) : yield k.unlink(e);
    }
  });
}
var Fs = H.rmRF = js;
function br(e) {
  return ge(this, void 0, void 0, function* () {
    dd.ok(e, "a path argument must be provided"), yield k.mkdir(e, { recursive: !0 });
  });
}
H.mkdirP = br;
function xs(e, t) {
  return ge(this, void 0, void 0, function* () {
    if (!e)
      throw new Error("parameter 'tool' is required");
    if (t) {
      const n = yield xs(e, !1);
      if (!n)
        throw k.IS_WINDOWS ? new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`) : new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`);
      return n;
    }
    const r = yield Is(e);
    return r && r.length > 0 ? r[0] : "";
  });
}
H.which = xs;
function Is(e) {
  return ge(this, void 0, void 0, function* () {
    if (!e)
      throw new Error("parameter 'tool' is required");
    const t = [];
    if (k.IS_WINDOWS && process.env.PATHEXT)
      for (const s of process.env.PATHEXT.split(X.delimiter))
        s && t.push(s);
    if (k.isRooted(e)) {
      const s = yield k.tryGetExecutablePath(e, t);
      return s ? [s] : [];
    }
    if (e.includes(X.sep))
      return [];
    const r = [];
    if (process.env.PATH)
      for (const s of process.env.PATH.split(X.delimiter))
        s && r.push(s);
    const n = [];
    for (const s of r) {
      const o = yield k.tryGetExecutablePath(X.join(s, e), t);
      o && n.push(o);
    }
    return n;
  });
}
H.findInPath = Is;
function gd(e) {
  const t = e.force == null ? !0 : e.force, r = Boolean(e.recursive), n = e.copySourceDirectory == null ? !0 : Boolean(e.copySourceDirectory);
  return { force: t, recursive: r, copySourceDirectory: n };
}
function Bs(e, t, r, n) {
  return ge(this, void 0, void 0, function* () {
    if (r >= 255)
      return;
    r++, yield br(t);
    const s = yield k.readdir(e);
    for (const o of s) {
      const i = `${e}/${o}`, a = `${t}/${o}`;
      (yield k.lstat(i)).isDirectory() ? yield Bs(i, a, r, n) : yield Ls(i, a, n);
    }
    yield k.chmod(t, (yield k.stat(e)).mode);
  });
}
function Ls(e, t, r) {
  return ge(this, void 0, void 0, function* () {
    if ((yield k.lstat(e)).isSymbolicLink()) {
      try {
        yield k.lstat(t), yield k.unlink(t);
      } catch (s) {
        s.code === "EPERM" && (yield k.chmod(t, "0666"), yield k.unlink(t));
      }
      const n = yield k.readlink(e);
      yield k.symlink(n, t, k.IS_WINDOWS ? "junction" : null);
    } else
      (!(yield k.exists(t)) || r) && (yield k.copyFile(e, t));
  });
}
var wd = O && O.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), bd = O && O.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), xe = O && O.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.hasOwnProperty.call(e, r) && wd(t, e, r);
  return bd(t, e), t;
}, qs = O && O.__awaiter || function(e, t, r, n) {
  function s(o) {
    return o instanceof r ? o : new r(function(i) {
      i(o);
    });
  }
  return new (r || (r = Promise))(function(o, i) {
    function a(h) {
      try {
        p(n.next(h));
      } catch (w) {
        i(w);
      }
    }
    function l(h) {
      try {
        p(n.throw(h));
      } catch (w) {
        i(w);
      }
    }
    function p(h) {
      h.done ? o(h.value) : s(h.value).then(a, l);
    }
    p((n = n.apply(e, t || [])).next());
  });
};
Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.argStringToArray = Fe.ToolRunner = void 0;
const At = xe(Le.default), Ms = xe(_r.default), yd = xe(vr.default), Td = xe(qe.default), _d = xe(H), Ns = xe(gr), Ed = Oo.default, Rt = process.platform === "win32";
class vd extends Ms.EventEmitter {
  constructor(t, r, n) {
    if (super(), !t)
      throw new Error("Parameter 'toolPath' cannot be null or empty.");
    this.toolPath = t, this.args = r || [], this.options = n || {};
  }
  _debug(t) {
    this.options.listeners && this.options.listeners.debug && this.options.listeners.debug(t);
  }
  _getCommandString(t, r) {
    const n = this._getSpawnFileName(), s = this._getSpawnArgs(t);
    let o = r ? "" : "[command]";
    if (Rt)
      if (this._isCmdFile()) {
        o += n;
        for (const i of s)
          o += ` ${i}`;
      } else if (t.windowsVerbatimArguments) {
        o += `"${n}"`;
        for (const i of s)
          o += ` ${i}`;
      } else {
        o += this._windowsQuoteCmdArg(n);
        for (const i of s)
          o += ` ${this._windowsQuoteCmdArg(i)}`;
      }
    else {
      o += n;
      for (const i of s)
        o += ` ${i}`;
    }
    return o;
  }
  _processLineBuffer(t, r, n) {
    try {
      let s = r + t.toString(), o = s.indexOf(At.EOL);
      for (; o > -1; ) {
        const i = s.substring(0, o);
        n(i), s = s.substring(o + At.EOL.length), o = s.indexOf(At.EOL);
      }
      return s;
    } catch (s) {
      return this._debug(`error processing line. Failed with error ${s}`), "";
    }
  }
  _getSpawnFileName() {
    return Rt && this._isCmdFile() ? process.env.COMSPEC || "cmd.exe" : this.toolPath;
  }
  _getSpawnArgs(t) {
    if (Rt && this._isCmdFile()) {
      let r = `/D /S /C "${this._windowsQuoteCmdArg(this.toolPath)}`;
      for (const n of this.args)
        r += " ", r += t.windowsVerbatimArguments ? n : this._windowsQuoteCmdArg(n);
      return r += '"', [r];
    }
    return this.args;
  }
  _endsWith(t, r) {
    return t.endsWith(r);
  }
  _isCmdFile() {
    const t = this.toolPath.toUpperCase();
    return this._endsWith(t, ".CMD") || this._endsWith(t, ".BAT");
  }
  _windowsQuoteCmdArg(t) {
    if (!this._isCmdFile())
      return this._uvQuoteCmdArg(t);
    if (!t)
      return '""';
    const r = [
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
    let n = !1;
    for (const i of t)
      if (r.some((a) => a === i)) {
        n = !0;
        break;
      }
    if (!n)
      return t;
    let s = '"', o = !0;
    for (let i = t.length; i > 0; i--)
      s += t[i - 1], o && t[i - 1] === "\\" ? s += "\\" : t[i - 1] === '"' ? (o = !0, s += '"') : o = !1;
    return s += '"', s.split("").reverse().join("");
  }
  _uvQuoteCmdArg(t) {
    if (!t)
      return '""';
    if (!t.includes(" ") && !t.includes("	") && !t.includes('"'))
      return t;
    if (!t.includes('"') && !t.includes("\\"))
      return `"${t}"`;
    let r = '"', n = !0;
    for (let s = t.length; s > 0; s--)
      r += t[s - 1], n && t[s - 1] === "\\" ? r += "\\" : t[s - 1] === '"' ? (n = !0, r += "\\") : n = !1;
    return r += '"', r.split("").reverse().join("");
  }
  _cloneExecOptions(t) {
    t = t || {};
    const r = {
      cwd: t.cwd || process.cwd(),
      env: t.env || process.env,
      silent: t.silent || !1,
      windowsVerbatimArguments: t.windowsVerbatimArguments || !1,
      failOnStdErr: t.failOnStdErr || !1,
      ignoreReturnCode: t.ignoreReturnCode || !1,
      delay: t.delay || 1e4
    };
    return r.outStream = t.outStream || process.stdout, r.errStream = t.errStream || process.stderr, r;
  }
  _getSpawnOptions(t, r) {
    t = t || {};
    const n = {};
    return n.cwd = t.cwd, n.env = t.env, n.windowsVerbatimArguments = t.windowsVerbatimArguments || this._isCmdFile(), t.windowsVerbatimArguments && (n.argv0 = `"${r}"`), n;
  }
  exec() {
    return qs(this, void 0, void 0, function* () {
      return !Ns.isRooted(this.toolPath) && (this.toolPath.includes("/") || Rt && this.toolPath.includes("\\")) && (this.toolPath = Td.resolve(process.cwd(), this.options.cwd || process.cwd(), this.toolPath)), this.toolPath = yield _d.which(this.toolPath, !0), new Promise((t, r) => qs(this, void 0, void 0, function* () {
        this._debug(`exec tool: ${this.toolPath}`), this._debug("arguments:");
        for (const p of this.args)
          this._debug(`   ${p}`);
        const n = this._cloneExecOptions(this.options);
        !n.silent && n.outStream && n.outStream.write(this._getCommandString(n) + At.EOL);
        const s = new yr(n, this.toolPath);
        if (s.on("debug", (p) => {
          this._debug(p);
        }), this.options.cwd && !(yield Ns.exists(this.options.cwd)))
          return r(new Error(`The cwd: ${this.options.cwd} does not exist!`));
        const o = this._getSpawnFileName(), i = yd.spawn(o, this._getSpawnArgs(n), this._getSpawnOptions(this.options, o));
        let a = "";
        i.stdout && i.stdout.on("data", (p) => {
          this.options.listeners && this.options.listeners.stdout && this.options.listeners.stdout(p), !n.silent && n.outStream && n.outStream.write(p), a = this._processLineBuffer(p, a, (h) => {
            this.options.listeners && this.options.listeners.stdline && this.options.listeners.stdline(h);
          });
        });
        let l = "";
        if (i.stderr && i.stderr.on("data", (p) => {
          s.processStderr = !0, this.options.listeners && this.options.listeners.stderr && this.options.listeners.stderr(p), !n.silent && n.errStream && n.outStream && (n.failOnStdErr ? n.errStream : n.outStream).write(p), l = this._processLineBuffer(p, l, (h) => {
            this.options.listeners && this.options.listeners.errline && this.options.listeners.errline(h);
          });
        }), i.on("error", (p) => {
          s.processError = p.message, s.processExited = !0, s.processClosed = !0, s.CheckComplete();
        }), i.on("exit", (p) => {
          s.processExitCode = p, s.processExited = !0, this._debug(`Exit code ${p} received from tool '${this.toolPath}'`), s.CheckComplete();
        }), i.on("close", (p) => {
          s.processExitCode = p, s.processExited = !0, s.processClosed = !0, this._debug(`STDIO streams have closed for tool '${this.toolPath}'`), s.CheckComplete();
        }), s.on("done", (p, h) => {
          a.length > 0 && this.emit("stdline", a), l.length > 0 && this.emit("errline", l), i.removeAllListeners(), p ? r(p) : t(h);
        }), this.options.input) {
          if (!i.stdin)
            throw new Error("child process missing stdin");
          i.stdin.end(this.options.input);
        }
      }));
    });
  }
}
Fe.ToolRunner = vd;
function Od(e) {
  const t = [];
  let r = !1, n = !1, s = "";
  function o(i) {
    n && i !== '"' && (s += "\\"), s += i, n = !1;
  }
  for (let i = 0; i < e.length; i++) {
    const a = e.charAt(i);
    if (a === '"') {
      n ? o(a) : r = !r;
      continue;
    }
    if (a === "\\" && n) {
      o(a);
      continue;
    }
    if (a === "\\" && r) {
      n = !0;
      continue;
    }
    if (a === " " && !r) {
      s.length > 0 && (t.push(s), s = "");
      continue;
    }
    o(a);
  }
  return s.length > 0 && t.push(s.trim()), t;
}
Fe.argStringToArray = Od;
class yr extends Ms.EventEmitter {
  constructor(t, r) {
    if (super(), this.processClosed = !1, this.processError = "", this.processExitCode = 0, this.processExited = !1, this.processStderr = !1, this.delay = 1e4, this.done = !1, this.timeout = null, !r)
      throw new Error("toolPath must not be empty");
    this.options = t, this.toolPath = r, t.delay && (this.delay = t.delay);
  }
  CheckComplete() {
    this.done || (this.processClosed ? this._setResult() : this.processExited && (this.timeout = Ed.setTimeout(yr.HandleTimeout, this.delay, this)));
  }
  _debug(t) {
    this.emit("debug", t);
  }
  _setResult() {
    let t;
    this.processExited && (this.processError ? t = new Error(`There was an error when attempting to execute the process '${this.toolPath}'. This may indicate the process failed to start. Error: ${this.processError}`) : this.processExitCode !== 0 && !this.options.ignoreReturnCode ? t = new Error(`The process '${this.toolPath}' failed with exit code ${this.processExitCode}`) : this.processStderr && this.options.failOnStdErr && (t = new Error(`The process '${this.toolPath}' failed because one or more lines were written to the STDERR stream`))), this.timeout && (clearTimeout(this.timeout), this.timeout = null), this.done = !0, this.emit("done", t, this.processExitCode);
  }
  static HandleTimeout(t) {
    if (!t.done) {
      if (!t.processClosed && t.processExited) {
        const r = `The STDIO streams did not close within ${t.delay / 1e3} seconds of the exit event from process '${t.toolPath}'. This may indicate a child process inherited the STDIO streams and has not yet exited.`;
        t._debug(r);
      }
      t._setResult();
    }
  }
}
var Pd = O && O.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: !0, get: function() {
    return t[r];
  } });
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), Sd = O && O.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), Ad = O && O.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.hasOwnProperty.call(e, r) && Pd(t, e, r);
  return Sd(t, e), t;
}, zs = O && O.__awaiter || function(e, t, r, n) {
  function s(o) {
    return o instanceof r ? o : new r(function(i) {
      i(o);
    });
  }
  return new (r || (r = Promise))(function(o, i) {
    function a(h) {
      try {
        p(n.next(h));
      } catch (w) {
        i(w);
      }
    }
    function l(h) {
      try {
        p(n.throw(h));
      } catch (w) {
        i(w);
      }
    }
    function p(h) {
      h.done ? o(h.value) : s(h.value).then(a, l);
    }
    p((n = n.apply(e, t || [])).next());
  });
};
Object.defineProperty(st, "__esModule", { value: !0 }), st.getExecOutput = Vs = st.exec = void 0;
const Hs = vo.default, Ws = Ad(Fe);
function Ks(e, t, r) {
  return zs(this, void 0, void 0, function* () {
    const n = Ws.argStringToArray(e);
    if (n.length === 0)
      throw new Error("Parameter 'commandLine' cannot be null or empty.");
    const s = n[0];
    return t = n.slice(1).concat(t || []), new Ws.ToolRunner(s, t, r).exec();
  });
}
var Vs = st.exec = Ks;
function Rd(e, t, r) {
  var n, s;
  return zs(this, void 0, void 0, function* () {
    let o = "", i = "";
    const a = new Hs.StringDecoder("utf8"), l = new Hs.StringDecoder("utf8"), p = (n = r?.listeners) === null || n === void 0 ? void 0 : n.stdout, h = (s = r?.listeners) === null || s === void 0 ? void 0 : s.stderr, w = (m) => {
      i += l.write(m), h && h(m);
    }, _ = (m) => {
      o += a.write(m), p && p(m);
    }, $ = Object.assign(Object.assign({}, r?.listeners), { stdout: _, stderr: w }), E = yield Ks(e, t, Object.assign(Object.assign({}, r), { listeners: $ }));
    return o += a.end(), i += l.end(), {
      exitCode: E,
      stdout: o,
      stderr: i
    };
  });
}
st.getExecOutput = Rd;
var $d = Object.defineProperty, Gd = Object.defineProperties, Cd = Object.getOwnPropertyDescriptors, Js = Object.getOwnPropertySymbols, kd = Object.prototype.hasOwnProperty, Dd = Object.prototype.propertyIsEnumerable, Ys = (e, t, r) => t in e ? $d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ud = (e, t) => {
  for (var r in t || (t = {}))
    kd.call(t, r) && Ys(e, r, t[r]);
  if (Js)
    for (var r of Js(t))
      Dd.call(t, r) && Ys(e, r, t[r]);
  return e;
}, jd = (e, t) => Gd(e, Cd(t));
async function K(e, t) {
  let r = "", n = "";
  const s = Date.now(), o = await Vs(e, null, jd(Ud({}, t), {
    listeners: {
      stdout(a) {
        r += a.toString();
      },
      stderr(a) {
        n += a.toString();
      }
    }
  })), i = Date.now() - s;
  return {
    exitCode: o,
    duration: i,
    stdout: r,
    stderr: n
  };
}
async function Fd(e) {
  try {
    await K(`git fetch origin ${e} --depth=1`);
  } catch (r) {
    throw new Error(`Failed to git fetch ${e} ${r.message}`);
  }
  const { exitCode: t } = await K(`git diff --quiet origin/${e}`, { ignoreReturnCode: !0 });
  return t !== 0;
}
async function xd({ cwd: e, installCommand: t } = {}) {
  t ? G.info(`Custom install command providing. Installing dependencies with ${t}`) : t = Id(), ce.default.existsSync("node_modules") && (G.info("Cleaning node_modules"), await Fs(qe.default.join(e, "node_modules")));
  const r = {
    cwd: e,
    ignoreReturnCode: !0
  }, { exitCode: n, stdout: s, stderr: o } = await K(t, r);
  if (n > 0)
    throw new Error(`${o}
${s}`);
}
function Id() {
  return ce.default.existsSync("package-lock.json") ? (G.info("Installing dependencies with npm"), "npm ci") : ce.default.existsSync("yarn.lock") ? (G.info("Installing dependencies with yarn"), "yarn install --frozen-lockfile") : ce.default.existsSync("pnpm-lock.yaml") ? (G.info("Installing dependencies with pnpm"), "npx pnpm i --frozen-lockfile") : (G.info("No lock file detected. Installing dependencies with npm"), "npm i");
}
async function Bd(e) {
  const { exitCode: t } = await K(`git ls-files --error-unmatch ${e}`, { ignoreReturnCode: !0 });
  return t === 0;
}
var Ld = Object.defineProperty, qd = Object.defineProperties, Md = Object.getOwnPropertyDescriptors, Zs = Object.getOwnPropertySymbols, Nd = Object.prototype.hasOwnProperty, zd = Object.prototype.propertyIsEnumerable, Xs = (e, t, r) => t in e ? Ld(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Hd = (e, t) => {
  for (var r in t || (t = {}))
    Nd.call(t, r) && Xs(e, r, t[r]);
  if (Zs)
    for (var r of Zs(t))
      zd.call(t, r) && Xs(e, r, t[r]);
  return e;
}, Wd = (e, t) => qd(e, Md(t));
let Qs = !1;
async function eo({
  checkoutRef: e,
  refData: t,
  buildCommand: r,
  installCommand: n
}) {
  const s = process.cwd();
  if (G.info(`Current working directory: ${s}`), e && (G.info(`Checking out ref '${e}'`), await K(`git checkout -f ${e}`)), r !== "false") {
    if (!r) {
      let l;
      try {
        l = JSON.parse(ce.default.readFileSync("./package.json"));
      } catch (p) {
        G.warning("Error reading package.json", p);
      }
      l && l.scripts && l.scripts.build && (G.info("Build script found in package.json"), r = "npm run build");
    }
    if (r) {
      await xd({ installCommand: n, cwd: s }).catch((p) => {
        throw new Error(`Failed to install dependencies:
${p.message}`);
      }), G.info(`Running build command: ${r}`);
      const l = Date.now();
      await K(r, { cwd: s }).catch((p) => {
        throw new Error(`Failed to run build command: ${r}
${p.message}`);
      }), G.info(`Build completed in ${(Date.now() - l) / 1e3}s`);
    }
  }
  Qs || (G.info("Installing pkg-size globally"), await K("npm i -g pkg-size"), Qs = !0), G.info("Getting package size");
  const o = await K("pkg-size --json", { cwd: s }).catch((l) => {
    throw new Error(`Failed to determine package size: ${l.message}`);
  });
  G.debug(JSON.stringify(o, null, 4));
  const i = Wd(Hd({}, JSON.parse(o.stdout)), {
    ref: t,
    size: 0,
    sizeGzip: 0,
    sizeBrotli: 0
  });
  await Promise.all(i.files.map(async (l) => {
    i.size += l.size, i.sizeGzip += l.sizeGzip, i.sizeBrotli += l.sizeBrotli;
    const p = await Bd(l.path);
    l.isTracked = p, l.label = p ? $a(M(l.path), `${t.repo.html_url}/blob/${t.ref}/${l.path}`) : M(l.path);
  })), G.info("Cleaning up"), await K("git reset --hard");
  const { stdout: a } = await K("git clean -dfx");
  return G.debug(a), i;
}
var Kd = Object.defineProperty, Vd = Object.defineProperties, Jd = Object.getOwnPropertyDescriptors, to = Object.getOwnPropertySymbols, Yd = Object.prototype.hasOwnProperty, Zd = Object.prototype.propertyIsEnumerable, ro = (e, t, r) => t in e ? Kd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Xd = (e, t) => {
  for (var r in t || (t = {}))
    Yd.call(t, r) && ro(e, r, t[r]);
  if (to)
    for (var r of to(t))
      Zd.call(t, r) && ro(e, r, t[r]);
  return e;
}, Qd = (e, t) => Vd(e, Jd(t));
async function ef({
  pr: e,
  buildCommand: t,
  commentReport: r,
  mode: n,
  unchangedFiles: s,
  hideFiles: o,
  sortBy: i,
  sortOrder: a,
  displaySize: l,
  installCommand: p
}) {
  G.startGroup("Build HEAD");
  const h = await eo({
    refData: e.head,
    buildCommand: t,
    installCommand: p
  });
  if (G.setOutput("headPkgData", h), G.endGroup(), n === "head-only")
    return r !== "false" ? ld({
      headPkgData: h,
      displaySize: l,
      sortBy: i,
      sortOrder: a,
      hideFiles: o
    }) : !1;
  const { ref: w } = e.base;
  let _;
  return await Fd(w) ? (G.info("HEAD is different from BASE. Triggering build."), G.startGroup("Build BASE"), _ = await eo({
    checkoutRef: w,
    refData: e.base,
    buildCommand: t
  }), G.endGroup()) : (G.info("HEAD is identical to BASE. Skipping base build."), _ = Qd(Xd({}, h), {
    ref: e.base
  })), G.setOutput("basePkgData", _), r !== "false" ? cd({
    headPkgData: h,
    basePkgData: _,
    displaySize: l,
    sortBy: i,
    sortOrder: a,
    hideFiles: o,
    unchangedFiles: s
  }) : !1;
}
const tf = On("\u{1F916} This report was automatically generated by [pkg-size-action](https://github.com/pkg-size/action/)");
(async () => {
  const { GITHUB_TOKEN: e } = process.env;
  Tr.default(e, "Environment variable 'GITHUB_TOKEN' not set. Required for accessing and reporting on the PR.");
  const { pull_request: t } = gt.payload, r = await ef({
    pr: t,
    buildCommand: G.getInput("build-command"),
    commentReport: G.getInput("comment-report"),
    mode: G.getInput("mode") || "regression",
    unchangedFiles: G.getInput("unchanged-files") || "collapse",
    hideFiles: G.getInput("hide-files"),
    sortBy: G.getInput("sort-by") || "delta",
    sortOrder: G.getInput("sort-order") || "desc",
    displaySize: G.getInput("display-size") || "uncompressed",
    installCommand: G.getInput("install-command")
  });
  await K(`git checkout -f ${gt.sha}`), r && await ja({
    token: e,
    commentSignature: tf,
    repo: gt.repo,
    prNumber: t.number,
    body: r
  });
})().catch((e) => {
  G.setFailed(e.message), G.warning(e.stack);
});
