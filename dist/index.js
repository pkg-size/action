"use strict";
var Y = Object.getOwnPropertySymbols;
var ee = Object.prototype.hasOwnProperty, te = Object.prototype.propertyIsEnumerable;
var X = (e, t) => {
  var n = {};
  for (var o in e)
    ee.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Y)
    for (var o of Y(e))
      t.indexOf(o) < 0 && te.call(e, o) && (n[o] = e[o]);
  return n;
};
var assert_1 = require("assert"), require$$0 = require("os"), fs_1 = require("fs"), require$$1 = require("path"), http = require("http"), https = require("https");
require("net");
var tls = require("tls"), events = require("events"), util_1 = require("util"), Stream = require("stream"), Url = require("url"), zlib = require("zlib"), string_decoder_1 = require("string_decoder"), require$$0$1 = require("child_process"), timers_1 = require("timers");
function _interopDefaultLegacy(e) {
  return e && typeof e == "object" && "default" in e ? e : { default: e };
}
var assert_1__default = /* @__PURE__ */ _interopDefaultLegacy(assert_1), require$$0__default = /* @__PURE__ */ _interopDefaultLegacy(require$$0), fs_1__default = /* @__PURE__ */ _interopDefaultLegacy(fs_1), require$$1__default = /* @__PURE__ */ _interopDefaultLegacy(require$$1), http__default = /* @__PURE__ */ _interopDefaultLegacy(http), https__default = /* @__PURE__ */ _interopDefaultLegacy(https), tls__default = /* @__PURE__ */ _interopDefaultLegacy(tls), events__default = /* @__PURE__ */ _interopDefaultLegacy(events), util_1__default = /* @__PURE__ */ _interopDefaultLegacy(util_1), Stream__default = /* @__PURE__ */ _interopDefaultLegacy(Stream), Url__default = /* @__PURE__ */ _interopDefaultLegacy(Url), zlib__default = /* @__PURE__ */ _interopDefaultLegacy(zlib), string_decoder_1__default = /* @__PURE__ */ _interopDefaultLegacy(string_decoder_1), require$$0__default$1 = /* @__PURE__ */ _interopDefaultLegacy(require$$0$1), timers_1__default = /* @__PURE__ */ _interopDefaultLegacy(timers_1), commonjsGlobal = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function getAugmentedNamespace(e) {
  if (e.__esModule)
    return e;
  var t = Object.defineProperty({}, "__esModule", { value: !0 });
  return Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(t, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), t;
}
function createCommonjsModule(e) {
  var t = { exports: {} };
  return e(t, t.exports), t.exports;
}
var utils$2 = createCommonjsModule(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.toCommandProperties = t.toCommandValue = void 0;
  function n(s) {
    return s == null ? "" : typeof s == "string" || s instanceof String ? s : JSON.stringify(s);
  }
  t.toCommandValue = n;
  function o(s) {
    return Object.keys(s).length ? {
      title: s.title,
      file: s.file,
      line: s.startLine,
      endLine: s.endLine,
      col: s.startColumn,
      endColumn: s.endColumn
    } : {};
  }
  t.toCommandProperties = o;
}), command = createCommonjsModule(function(e, t) {
  var n = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(v, G, $, j) {
    j === void 0 && (j = $), Object.defineProperty(v, j, { enumerable: !0, get: function() {
      return G[$];
    } });
  } : function(v, G, $, j) {
    j === void 0 && (j = $), v[j] = G[$];
  }), o = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(v, G) {
    Object.defineProperty(v, "default", { enumerable: !0, value: G });
  } : function(v, G) {
    v.default = G;
  }), s = commonjsGlobal && commonjsGlobal.__importStar || function(v) {
    if (v && v.__esModule)
      return v;
    var G = {};
    if (v != null)
      for (var $ in v)
        $ !== "default" && Object.hasOwnProperty.call(v, $) && n(G, v, $);
    return o(G, v), G;
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.issue = t.issueCommand = void 0;
  const a = s(require$$0__default.default);
  function u(v, G, $) {
    const j = new d(v, G, $);
    process.stdout.write(j.toString() + a.EOL);
  }
  t.issueCommand = u;
  function p(v, G = "") {
    u(v, {}, G);
  }
  t.issue = p;
  const h = "::";
  class d {
    constructor(G, $, j) {
      G || (G = "missing.command"), this.command = G, this.properties = $, this.message = j;
    }
    toString() {
      let G = h + this.command;
      if (this.properties && Object.keys(this.properties).length > 0) {
        G += " ";
        let $ = !0;
        for (const j in this.properties)
          if (this.properties.hasOwnProperty(j)) {
            const y = this.properties[j];
            y && ($ ? $ = !1 : G += ",", G += `${j}=${g(y)}`);
          }
      }
      return G += `${h}${m(this.message)}`, G;
    }
  }
  function m(v) {
    return utils$2.toCommandValue(v).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A");
  }
  function g(v) {
    return utils$2.toCommandValue(v).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A").replace(/:/g, "%3A").replace(/,/g, "%2C");
  }
}), getRandomValues, rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues && (getRandomValues = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != "undefined" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !getRandomValues))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return getRandomValues(rnds8);
}
var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function validate(e) {
  return typeof e == "string" && REGEX.test(e);
}
for (var byteToHex = [], i = 0; i < 256; ++i)
  byteToHex.push((i + 256).toString(16).substr(1));
function stringify(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = (byteToHex[e[t + 0]] + byteToHex[e[t + 1]] + byteToHex[e[t + 2]] + byteToHex[e[t + 3]] + "-" + byteToHex[e[t + 4]] + byteToHex[e[t + 5]] + "-" + byteToHex[e[t + 6]] + byteToHex[e[t + 7]] + "-" + byteToHex[e[t + 8]] + byteToHex[e[t + 9]] + "-" + byteToHex[e[t + 10]] + byteToHex[e[t + 11]] + byteToHex[e[t + 12]] + byteToHex[e[t + 13]] + byteToHex[e[t + 14]] + byteToHex[e[t + 15]]).toLowerCase();
  if (!validate(n))
    throw TypeError("Stringified UUID is invalid");
  return n;
}
var _nodeId, _clockseq, _lastMSecs = 0, _lastNSecs = 0;
function v1(e, t, n) {
  var o = t && n || 0, s = t || new Array(16);
  e = e || {};
  var a = e.node || _nodeId, u = e.clockseq !== void 0 ? e.clockseq : _clockseq;
  if (a == null || u == null) {
    var p = e.random || (e.rng || rng)();
    a == null && (a = _nodeId = [p[0] | 1, p[1], p[2], p[3], p[4], p[5]]), u == null && (u = _clockseq = (p[6] << 8 | p[7]) & 16383);
  }
  var h = e.msecs !== void 0 ? e.msecs : Date.now(), d = e.nsecs !== void 0 ? e.nsecs : _lastNSecs + 1, m = h - _lastMSecs + (d - _lastNSecs) / 1e4;
  if (m < 0 && e.clockseq === void 0 && (u = u + 1 & 16383), (m < 0 || h > _lastMSecs) && e.nsecs === void 0 && (d = 0), d >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  _lastMSecs = h, _lastNSecs = d, _clockseq = u, h += 122192928e5;
  var g = ((h & 268435455) * 1e4 + d) % 4294967296;
  s[o++] = g >>> 24 & 255, s[o++] = g >>> 16 & 255, s[o++] = g >>> 8 & 255, s[o++] = g & 255;
  var v = h / 4294967296 * 1e4 & 268435455;
  s[o++] = v >>> 8 & 255, s[o++] = v & 255, s[o++] = v >>> 24 & 15 | 16, s[o++] = v >>> 16 & 255, s[o++] = u >>> 8 | 128, s[o++] = u & 255;
  for (var G = 0; G < 6; ++G)
    s[o + G] = a[G];
  return t || stringify(s);
}
function parse$1(e) {
  if (!validate(e))
    throw TypeError("Invalid UUID");
  var t, n = new Uint8Array(16);
  return n[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24, n[1] = t >>> 16 & 255, n[2] = t >>> 8 & 255, n[3] = t & 255, n[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8, n[5] = t & 255, n[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8, n[7] = t & 255, n[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8, n[9] = t & 255, n[10] = (t = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255, n[11] = t / 4294967296 & 255, n[12] = t >>> 24 & 255, n[13] = t >>> 16 & 255, n[14] = t >>> 8 & 255, n[15] = t & 255, n;
}
function stringToBytes(e) {
  e = unescape(encodeURIComponent(e));
  for (var t = [], n = 0; n < e.length; ++n)
    t.push(e.charCodeAt(n));
  return t;
}
var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", URL$1 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function v35(e, t, n) {
  function o(s, a, u, p) {
    if (typeof s == "string" && (s = stringToBytes(s)), typeof a == "string" && (a = parse$1(a)), a.length !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    var h = new Uint8Array(16 + s.length);
    if (h.set(a), h.set(s, a.length), h = n(h), h[6] = h[6] & 15 | t, h[8] = h[8] & 63 | 128, u) {
      p = p || 0;
      for (var d = 0; d < 16; ++d)
        u[p + d] = h[d];
      return u;
    }
    return stringify(h);
  }
  try {
    o.name = e;
  } catch (s) {
  }
  return o.DNS = DNS, o.URL = URL$1, o;
}
function md5(e) {
  if (typeof e == "string") {
    var t = unescape(encodeURIComponent(e));
    e = new Uint8Array(t.length);
    for (var n = 0; n < t.length; ++n)
      e[n] = t.charCodeAt(n);
  }
  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(e), e.length * 8));
}
function md5ToHexEncodedArray(e) {
  for (var t = [], n = e.length * 32, o = "0123456789abcdef", s = 0; s < n; s += 8) {
    var a = e[s >> 5] >>> s % 32 & 255, u = parseInt(o.charAt(a >>> 4 & 15) + o.charAt(a & 15), 16);
    t.push(u);
  }
  return t;
}
function getOutputLength(e) {
  return (e + 64 >>> 9 << 4) + 14 + 1;
}
function wordsToMd5(e, t) {
  e[t >> 5] |= 128 << t % 32, e[getOutputLength(t) - 1] = t;
  for (var n = 1732584193, o = -271733879, s = -1732584194, a = 271733878, u = 0; u < e.length; u += 16) {
    var p = n, h = o, d = s, m = a;
    n = md5ff(n, o, s, a, e[u], 7, -680876936), a = md5ff(a, n, o, s, e[u + 1], 12, -389564586), s = md5ff(s, a, n, o, e[u + 2], 17, 606105819), o = md5ff(o, s, a, n, e[u + 3], 22, -1044525330), n = md5ff(n, o, s, a, e[u + 4], 7, -176418897), a = md5ff(a, n, o, s, e[u + 5], 12, 1200080426), s = md5ff(s, a, n, o, e[u + 6], 17, -1473231341), o = md5ff(o, s, a, n, e[u + 7], 22, -45705983), n = md5ff(n, o, s, a, e[u + 8], 7, 1770035416), a = md5ff(a, n, o, s, e[u + 9], 12, -1958414417), s = md5ff(s, a, n, o, e[u + 10], 17, -42063), o = md5ff(o, s, a, n, e[u + 11], 22, -1990404162), n = md5ff(n, o, s, a, e[u + 12], 7, 1804603682), a = md5ff(a, n, o, s, e[u + 13], 12, -40341101), s = md5ff(s, a, n, o, e[u + 14], 17, -1502002290), o = md5ff(o, s, a, n, e[u + 15], 22, 1236535329), n = md5gg(n, o, s, a, e[u + 1], 5, -165796510), a = md5gg(a, n, o, s, e[u + 6], 9, -1069501632), s = md5gg(s, a, n, o, e[u + 11], 14, 643717713), o = md5gg(o, s, a, n, e[u], 20, -373897302), n = md5gg(n, o, s, a, e[u + 5], 5, -701558691), a = md5gg(a, n, o, s, e[u + 10], 9, 38016083), s = md5gg(s, a, n, o, e[u + 15], 14, -660478335), o = md5gg(o, s, a, n, e[u + 4], 20, -405537848), n = md5gg(n, o, s, a, e[u + 9], 5, 568446438), a = md5gg(a, n, o, s, e[u + 14], 9, -1019803690), s = md5gg(s, a, n, o, e[u + 3], 14, -187363961), o = md5gg(o, s, a, n, e[u + 8], 20, 1163531501), n = md5gg(n, o, s, a, e[u + 13], 5, -1444681467), a = md5gg(a, n, o, s, e[u + 2], 9, -51403784), s = md5gg(s, a, n, o, e[u + 7], 14, 1735328473), o = md5gg(o, s, a, n, e[u + 12], 20, -1926607734), n = md5hh(n, o, s, a, e[u + 5], 4, -378558), a = md5hh(a, n, o, s, e[u + 8], 11, -2022574463), s = md5hh(s, a, n, o, e[u + 11], 16, 1839030562), o = md5hh(o, s, a, n, e[u + 14], 23, -35309556), n = md5hh(n, o, s, a, e[u + 1], 4, -1530992060), a = md5hh(a, n, o, s, e[u + 4], 11, 1272893353), s = md5hh(s, a, n, o, e[u + 7], 16, -155497632), o = md5hh(o, s, a, n, e[u + 10], 23, -1094730640), n = md5hh(n, o, s, a, e[u + 13], 4, 681279174), a = md5hh(a, n, o, s, e[u], 11, -358537222), s = md5hh(s, a, n, o, e[u + 3], 16, -722521979), o = md5hh(o, s, a, n, e[u + 6], 23, 76029189), n = md5hh(n, o, s, a, e[u + 9], 4, -640364487), a = md5hh(a, n, o, s, e[u + 12], 11, -421815835), s = md5hh(s, a, n, o, e[u + 15], 16, 530742520), o = md5hh(o, s, a, n, e[u + 2], 23, -995338651), n = md5ii(n, o, s, a, e[u], 6, -198630844), a = md5ii(a, n, o, s, e[u + 7], 10, 1126891415), s = md5ii(s, a, n, o, e[u + 14], 15, -1416354905), o = md5ii(o, s, a, n, e[u + 5], 21, -57434055), n = md5ii(n, o, s, a, e[u + 12], 6, 1700485571), a = md5ii(a, n, o, s, e[u + 3], 10, -1894986606), s = md5ii(s, a, n, o, e[u + 10], 15, -1051523), o = md5ii(o, s, a, n, e[u + 1], 21, -2054922799), n = md5ii(n, o, s, a, e[u + 8], 6, 1873313359), a = md5ii(a, n, o, s, e[u + 15], 10, -30611744), s = md5ii(s, a, n, o, e[u + 6], 15, -1560198380), o = md5ii(o, s, a, n, e[u + 13], 21, 1309151649), n = md5ii(n, o, s, a, e[u + 4], 6, -145523070), a = md5ii(a, n, o, s, e[u + 11], 10, -1120210379), s = md5ii(s, a, n, o, e[u + 2], 15, 718787259), o = md5ii(o, s, a, n, e[u + 9], 21, -343485551), n = safeAdd(n, p), o = safeAdd(o, h), s = safeAdd(s, d), a = safeAdd(a, m);
  }
  return [n, o, s, a];
}
function bytesToWords(e) {
  if (e.length === 0)
    return [];
  for (var t = e.length * 8, n = new Uint32Array(getOutputLength(t)), o = 0; o < t; o += 8)
    n[o >> 5] |= (e[o / 8] & 255) << o % 32;
  return n;
}
function safeAdd(e, t) {
  var n = (e & 65535) + (t & 65535), o = (e >> 16) + (t >> 16) + (n >> 16);
  return o << 16 | n & 65535;
}
function bitRotateLeft(e, t) {
  return e << t | e >>> 32 - t;
}
function md5cmn(e, t, n, o, s, a) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(t, e), safeAdd(o, a)), s), n);
}
function md5ff(e, t, n, o, s, a, u) {
  return md5cmn(t & n | ~t & o, e, t, s, a, u);
}
function md5gg(e, t, n, o, s, a, u) {
  return md5cmn(t & o | n & ~o, e, t, s, a, u);
}
function md5hh(e, t, n, o, s, a, u) {
  return md5cmn(t ^ n ^ o, e, t, s, a, u);
}
function md5ii(e, t, n, o, s, a, u) {
  return md5cmn(n ^ (t | ~o), e, t, s, a, u);
}
var v3 = v35("v3", 48, md5), v3$1 = v3;
function v4(e, t, n) {
  e = e || {};
  var o = e.random || (e.rng || rng)();
  if (o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, t) {
    n = n || 0;
    for (var s = 0; s < 16; ++s)
      t[n + s] = o[s];
    return t;
  }
  return stringify(o);
}
function f(e, t, n, o) {
  switch (e) {
    case 0:
      return t & n ^ ~t & o;
    case 1:
      return t ^ n ^ o;
    case 2:
      return t & n ^ t & o ^ n & o;
    case 3:
      return t ^ n ^ o;
  }
}
function ROTL(e, t) {
  return e << t | e >>> 32 - t;
}
function sha1(e) {
  var t = [1518500249, 1859775393, 2400959708, 3395469782], n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof e == "string") {
    var o = unescape(encodeURIComponent(e));
    e = [];
    for (var s = 0; s < o.length; ++s)
      e.push(o.charCodeAt(s));
  } else
    Array.isArray(e) || (e = Array.prototype.slice.call(e));
  e.push(128);
  for (var a = e.length / 4 + 2, u = Math.ceil(a / 16), p = new Array(u), h = 0; h < u; ++h) {
    for (var d = new Uint32Array(16), m = 0; m < 16; ++m)
      d[m] = e[h * 64 + m * 4] << 24 | e[h * 64 + m * 4 + 1] << 16 | e[h * 64 + m * 4 + 2] << 8 | e[h * 64 + m * 4 + 3];
    p[h] = d;
  }
  p[u - 1][14] = (e.length - 1) * 8 / Math.pow(2, 32), p[u - 1][14] = Math.floor(p[u - 1][14]), p[u - 1][15] = (e.length - 1) * 8 & 4294967295;
  for (var g = 0; g < u; ++g) {
    for (var v = new Uint32Array(80), G = 0; G < 16; ++G)
      v[G] = p[g][G];
    for (var $ = 16; $ < 80; ++$)
      v[$] = ROTL(v[$ - 3] ^ v[$ - 8] ^ v[$ - 14] ^ v[$ - 16], 1);
    for (var j = n[0], y = n[1], w = n[2], T = n[3], _ = n[4], b = 0; b < 80; ++b) {
      var O = Math.floor(b / 20), A = ROTL(j, 5) + f(O, y, w, T) + _ + t[O] + v[b] >>> 0;
      _ = T, T = w, w = ROTL(y, 30) >>> 0, y = j, j = A;
    }
    n[0] = n[0] + j >>> 0, n[1] = n[1] + y >>> 0, n[2] = n[2] + w >>> 0, n[3] = n[3] + T >>> 0, n[4] = n[4] + _ >>> 0;
  }
  return [n[0] >> 24 & 255, n[0] >> 16 & 255, n[0] >> 8 & 255, n[0] & 255, n[1] >> 24 & 255, n[1] >> 16 & 255, n[1] >> 8 & 255, n[1] & 255, n[2] >> 24 & 255, n[2] >> 16 & 255, n[2] >> 8 & 255, n[2] & 255, n[3] >> 24 & 255, n[3] >> 16 & 255, n[3] >> 8 & 255, n[3] & 255, n[4] >> 24 & 255, n[4] >> 16 & 255, n[4] >> 8 & 255, n[4] & 255];
}
var v5 = v35("v5", 80, sha1), v5$1 = v5, nil = "00000000-0000-0000-0000-000000000000";
function version(e) {
  if (!validate(e))
    throw TypeError("Invalid UUID");
  return parseInt(e.substr(14, 1), 16);
}
var esmBrowser = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  v1,
  v3: v3$1,
  v4,
  v5: v5$1,
  NIL: nil,
  version,
  validate,
  stringify,
  parse: parse$1
}), uuid_1 = /* @__PURE__ */ getAugmentedNamespace(esmBrowser), fileCommand = createCommonjsModule(function(e, t) {
  var n = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(d, m, g, v) {
    v === void 0 && (v = g), Object.defineProperty(d, v, { enumerable: !0, get: function() {
      return m[g];
    } });
  } : function(d, m, g, v) {
    v === void 0 && (v = g), d[v] = m[g];
  }), o = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(d, m) {
    Object.defineProperty(d, "default", { enumerable: !0, value: m });
  } : function(d, m) {
    d.default = m;
  }), s = commonjsGlobal && commonjsGlobal.__importStar || function(d) {
    if (d && d.__esModule)
      return d;
    var m = {};
    if (d != null)
      for (var g in d)
        g !== "default" && Object.hasOwnProperty.call(d, g) && n(m, d, g);
    return o(m, d), m;
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.prepareKeyValueMessage = t.issueFileCommand = void 0;
  const a = s(fs_1__default.default), u = s(require$$0__default.default);
  function p(d, m) {
    const g = process.env[`GITHUB_${d}`];
    if (!g)
      throw new Error(`Unable to find environment variable for file command ${d}`);
    if (!a.existsSync(g))
      throw new Error(`Missing file at path: ${g}`);
    a.appendFileSync(g, `${utils$2.toCommandValue(m)}${u.EOL}`, {
      encoding: "utf8"
    });
  }
  t.issueFileCommand = p;
  function h(d, m) {
    const g = `ghadelimiter_${uuid_1.v4()}`, v = utils$2.toCommandValue(m);
    if (d.includes(g))
      throw new Error(`Unexpected input: name should not contain the delimiter "${g}"`);
    if (v.includes(g))
      throw new Error(`Unexpected input: value should not contain the delimiter "${g}"`);
    return `${d}<<${g}${u.EOL}${v}${u.EOL}${g}`;
  }
  t.prepareKeyValueMessage = h;
}), proxy$1 = createCommonjsModule(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.checkBypass = t.getProxyUrl = void 0;
  function n(a) {
    const u = a.protocol === "https:";
    if (o(a))
      return;
    const p = (() => u ? process.env.https_proxy || process.env.HTTPS_PROXY : process.env.http_proxy || process.env.HTTP_PROXY)();
    if (p)
      return new URL(p);
  }
  t.getProxyUrl = n;
  function o(a) {
    if (!a.hostname)
      return !1;
    const u = a.hostname;
    if (s(u))
      return !0;
    const p = process.env.no_proxy || process.env.NO_PROXY || "";
    if (!p)
      return !1;
    let h;
    a.port ? h = Number(a.port) : a.protocol === "http:" ? h = 80 : a.protocol === "https:" && (h = 443);
    const d = [a.hostname.toUpperCase()];
    typeof h == "number" && d.push(`${d[0]}:${h}`);
    for (const m of p.split(",").map((g) => g.trim().toUpperCase()).filter((g) => g))
      if (m === "*" || d.some((g) => g === m || g.endsWith(`.${m}`) || m.startsWith(".") && g.endsWith(`${m}`)))
        return !0;
    return !1;
  }
  t.checkBypass = o;
  function s(a) {
    const u = a.toLowerCase();
    return u === "localhost" || u.startsWith("127.") || u.startsWith("[::1]") || u.startsWith("[0:0:0:0:0:0:0:1]");
  }
}), httpOverHttp_1 = httpOverHttp, httpsOverHttp_1 = httpsOverHttp, httpOverHttps_1 = httpOverHttps, httpsOverHttps_1 = httpsOverHttps;
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
  t.options = e || {}, t.proxyOptions = t.options.proxy || {}, t.maxSockets = t.options.maxSockets || http__default.default.Agent.defaultMaxSockets, t.requests = [], t.sockets = [], t.on("free", function(o, s, a, u) {
    for (var p = toOptions(s, a, u), h = 0, d = t.requests.length; h < d; ++h) {
      var m = t.requests[h];
      if (m.host === p.host && m.port === p.port) {
        t.requests.splice(h, 1), m.request.onSocket(o);
        return;
      }
    }
    o.destroy(), t.removeSocket(o);
  });
}
util_1__default.default.inherits(TunnelingAgent, events__default.default.EventEmitter), TunnelingAgent.prototype.addRequest = function(t, n, o, s) {
  var a = this, u = mergeOptions({ request: t }, a.options, toOptions(n, o, s));
  if (a.sockets.length >= this.maxSockets) {
    a.requests.push(u);
    return;
  }
  a.createSocket(u, function(p) {
    p.on("free", h), p.on("close", d), p.on("agentRemove", d), t.onSocket(p);
    function h() {
      a.emit("free", p, u);
    }
    function d(m) {
      a.removeSocket(p), p.removeListener("free", h), p.removeListener("close", d), p.removeListener("agentRemove", d);
    }
  });
}, TunnelingAgent.prototype.createSocket = function(t, n) {
  var o = this, s = {};
  o.sockets.push(s);
  var a = mergeOptions({}, o.proxyOptions, {
    method: "CONNECT",
    path: t.host + ":" + t.port,
    agent: !1,
    headers: {
      host: t.host + ":" + t.port
    }
  });
  t.localAddress && (a.localAddress = t.localAddress), a.proxyAuth && (a.headers = a.headers || {}, a.headers["Proxy-Authorization"] = "Basic " + new Buffer(a.proxyAuth).toString("base64")), debug("making CONNECT request");
  var u = o.request(a);
  u.useChunkedEncodingByDefault = !1, u.once("response", p), u.once("upgrade", h), u.once("connect", d), u.once("error", m), u.end();
  function p(g) {
    g.upgrade = !0;
  }
  function h(g, v, G) {
    process.nextTick(function() {
      d(g, v, G);
    });
  }
  function d(g, v, G) {
    if (u.removeAllListeners(), v.removeAllListeners(), g.statusCode !== 200) {
      debug("tunneling socket could not be established, statusCode=%d", g.statusCode), v.destroy();
      var $ = new Error("tunneling socket could not be established, statusCode=" + g.statusCode);
      $.code = "ECONNRESET", t.request.emit("error", $), o.removeSocket(s);
      return;
    }
    if (G.length > 0) {
      debug("got illegal response body from proxy"), v.destroy();
      var $ = new Error("got illegal response body from proxy");
      $.code = "ECONNRESET", t.request.emit("error", $), o.removeSocket(s);
      return;
    }
    return debug("tunneling connection has established"), o.sockets[o.sockets.indexOf(s)] = v, n(v);
  }
  function m(g) {
    u.removeAllListeners(), debug(`tunneling socket could not be established, cause=%s
`, g.message, g.stack);
    var v = new Error("tunneling socket could not be established, cause=" + g.message);
    v.code = "ECONNRESET", t.request.emit("error", v), o.removeSocket(s);
  }
}, TunnelingAgent.prototype.removeSocket = function(t) {
  var n = this.sockets.indexOf(t);
  if (n !== -1) {
    this.sockets.splice(n, 1);
    var o = this.requests.shift();
    o && this.createSocket(o, function(s) {
      o.request.onSocket(s);
    });
  }
};
function createSecureSocket(e, t) {
  var n = this;
  TunnelingAgent.prototype.createSocket.call(n, e, function(o) {
    var s = e.request.getHeader("host"), a = mergeOptions({}, n.options, {
      socket: o,
      servername: s ? s.replace(/:.*$/, "") : e.host
    }), u = tls__default.default.connect(0, a);
    n.sockets[n.sockets.indexOf(o)] = u, t(u);
  });
}
function toOptions(e, t, n) {
  return typeof e == "string" ? {
    host: e,
    port: t,
    localAddress: n
  } : e;
}
function mergeOptions(e) {
  for (var t = 1, n = arguments.length; t < n; ++t) {
    var o = arguments[t];
    if (typeof o == "object")
      for (var s = Object.keys(o), a = 0, u = s.length; a < u; ++a) {
        var p = s[a];
        o[p] !== void 0 && (e[p] = o[p]);
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
}, tunnel = tunnel$1, lib = createCommonjsModule(function(e, t) {
  var n = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(P, E, S, U) {
    U === void 0 && (U = S), Object.defineProperty(P, U, { enumerable: !0, get: function() {
      return E[S];
    } });
  } : function(P, E, S, U) {
    U === void 0 && (U = S), P[U] = E[S];
  }), o = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(P, E) {
    Object.defineProperty(P, "default", { enumerable: !0, value: E });
  } : function(P, E) {
    P.default = E;
  }), s = commonjsGlobal && commonjsGlobal.__importStar || function(P) {
    if (P && P.__esModule)
      return P;
    var E = {};
    if (P != null)
      for (var S in P)
        S !== "default" && Object.hasOwnProperty.call(P, S) && n(E, P, S);
    return o(E, P), E;
  }, a = commonjsGlobal && commonjsGlobal.__awaiter || function(P, E, S, U) {
    function I(B) {
      return B instanceof S ? B : new S(function(N) {
        N(B);
      });
    }
    return new (S || (S = Promise))(function(B, N) {
      function D(q) {
        try {
          M(U.next(q));
        } catch (z) {
          N(z);
        }
      }
      function F(q) {
        try {
          M(U.throw(q));
        } catch (z) {
          N(z);
        }
      }
      function M(q) {
        q.done ? B(q.value) : I(q.value).then(D, F);
      }
      M((U = U.apply(P, E || [])).next());
    });
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.HttpClient = t.isHttps = t.HttpClientResponse = t.HttpClientError = t.getProxyUrl = t.MediaTypes = t.Headers = t.HttpCodes = void 0;
  const u = s(http__default.default), p = s(https__default.default), h = s(proxy$1), d = s(tunnel);
  var m;
  (function(P) {
    P[P.OK = 200] = "OK", P[P.MultipleChoices = 300] = "MultipleChoices", P[P.MovedPermanently = 301] = "MovedPermanently", P[P.ResourceMoved = 302] = "ResourceMoved", P[P.SeeOther = 303] = "SeeOther", P[P.NotModified = 304] = "NotModified", P[P.UseProxy = 305] = "UseProxy", P[P.SwitchProxy = 306] = "SwitchProxy", P[P.TemporaryRedirect = 307] = "TemporaryRedirect", P[P.PermanentRedirect = 308] = "PermanentRedirect", P[P.BadRequest = 400] = "BadRequest", P[P.Unauthorized = 401] = "Unauthorized", P[P.PaymentRequired = 402] = "PaymentRequired", P[P.Forbidden = 403] = "Forbidden", P[P.NotFound = 404] = "NotFound", P[P.MethodNotAllowed = 405] = "MethodNotAllowed", P[P.NotAcceptable = 406] = "NotAcceptable", P[P.ProxyAuthenticationRequired = 407] = "ProxyAuthenticationRequired", P[P.RequestTimeout = 408] = "RequestTimeout", P[P.Conflict = 409] = "Conflict", P[P.Gone = 410] = "Gone", P[P.TooManyRequests = 429] = "TooManyRequests", P[P.InternalServerError = 500] = "InternalServerError", P[P.NotImplemented = 501] = "NotImplemented", P[P.BadGateway = 502] = "BadGateway", P[P.ServiceUnavailable = 503] = "ServiceUnavailable", P[P.GatewayTimeout = 504] = "GatewayTimeout";
  })(m = t.HttpCodes || (t.HttpCodes = {}));
  var g;
  (function(P) {
    P.Accept = "accept", P.ContentType = "content-type";
  })(g = t.Headers || (t.Headers = {}));
  var v;
  (function(P) {
    P.ApplicationJson = "application/json";
  })(v = t.MediaTypes || (t.MediaTypes = {}));
  function G(P) {
    const E = h.getProxyUrl(new URL(P));
    return E ? E.href : "";
  }
  t.getProxyUrl = G;
  const $ = [
    m.MovedPermanently,
    m.ResourceMoved,
    m.SeeOther,
    m.TemporaryRedirect,
    m.PermanentRedirect
  ], j = [
    m.BadGateway,
    m.ServiceUnavailable,
    m.GatewayTimeout
  ], y = ["OPTIONS", "GET", "DELETE", "HEAD"], w = 10, T = 5;
  class _ extends Error {
    constructor(E, S) {
      super(E);
      this.name = "HttpClientError", this.statusCode = S, Object.setPrototypeOf(this, _.prototype);
    }
  }
  t.HttpClientError = _;
  class b {
    constructor(E) {
      this.message = E;
    }
    readBody() {
      return a(this, void 0, void 0, function* () {
        return new Promise((E) => a(this, void 0, void 0, function* () {
          let S = Buffer.alloc(0);
          this.message.on("data", (U) => {
            S = Buffer.concat([S, U]);
          }), this.message.on("end", () => {
            E(S.toString());
          });
        }));
      });
    }
  }
  t.HttpClientResponse = b;
  function O(P) {
    return new URL(P).protocol === "https:";
  }
  t.isHttps = O;
  class A {
    constructor(E, S, U) {
      this._ignoreSslError = !1, this._allowRedirects = !0, this._allowRedirectDowngrade = !1, this._maxRedirects = 50, this._allowRetries = !1, this._maxRetries = 1, this._keepAlive = !1, this._disposed = !1, this.userAgent = E, this.handlers = S || [], this.requestOptions = U, U && (U.ignoreSslError != null && (this._ignoreSslError = U.ignoreSslError), this._socketTimeout = U.socketTimeout, U.allowRedirects != null && (this._allowRedirects = U.allowRedirects), U.allowRedirectDowngrade != null && (this._allowRedirectDowngrade = U.allowRedirectDowngrade), U.maxRedirects != null && (this._maxRedirects = Math.max(U.maxRedirects, 0)), U.keepAlive != null && (this._keepAlive = U.keepAlive), U.allowRetries != null && (this._allowRetries = U.allowRetries), U.maxRetries != null && (this._maxRetries = U.maxRetries));
    }
    options(E, S) {
      return a(this, void 0, void 0, function* () {
        return this.request("OPTIONS", E, null, S || {});
      });
    }
    get(E, S) {
      return a(this, void 0, void 0, function* () {
        return this.request("GET", E, null, S || {});
      });
    }
    del(E, S) {
      return a(this, void 0, void 0, function* () {
        return this.request("DELETE", E, null, S || {});
      });
    }
    post(E, S, U) {
      return a(this, void 0, void 0, function* () {
        return this.request("POST", E, S, U || {});
      });
    }
    patch(E, S, U) {
      return a(this, void 0, void 0, function* () {
        return this.request("PATCH", E, S, U || {});
      });
    }
    put(E, S, U) {
      return a(this, void 0, void 0, function* () {
        return this.request("PUT", E, S, U || {});
      });
    }
    head(E, S) {
      return a(this, void 0, void 0, function* () {
        return this.request("HEAD", E, null, S || {});
      });
    }
    sendStream(E, S, U, I) {
      return a(this, void 0, void 0, function* () {
        return this.request(E, S, U, I);
      });
    }
    getJson(E, S = {}) {
      return a(this, void 0, void 0, function* () {
        S[g.Accept] = this._getExistingOrDefaultHeader(S, g.Accept, v.ApplicationJson);
        const U = yield this.get(E, S);
        return this._processResponse(U, this.requestOptions);
      });
    }
    postJson(E, S, U = {}) {
      return a(this, void 0, void 0, function* () {
        const I = JSON.stringify(S, null, 2);
        U[g.Accept] = this._getExistingOrDefaultHeader(U, g.Accept, v.ApplicationJson), U[g.ContentType] = this._getExistingOrDefaultHeader(U, g.ContentType, v.ApplicationJson);
        const B = yield this.post(E, I, U);
        return this._processResponse(B, this.requestOptions);
      });
    }
    putJson(E, S, U = {}) {
      return a(this, void 0, void 0, function* () {
        const I = JSON.stringify(S, null, 2);
        U[g.Accept] = this._getExistingOrDefaultHeader(U, g.Accept, v.ApplicationJson), U[g.ContentType] = this._getExistingOrDefaultHeader(U, g.ContentType, v.ApplicationJson);
        const B = yield this.put(E, I, U);
        return this._processResponse(B, this.requestOptions);
      });
    }
    patchJson(E, S, U = {}) {
      return a(this, void 0, void 0, function* () {
        const I = JSON.stringify(S, null, 2);
        U[g.Accept] = this._getExistingOrDefaultHeader(U, g.Accept, v.ApplicationJson), U[g.ContentType] = this._getExistingOrDefaultHeader(U, g.ContentType, v.ApplicationJson);
        const B = yield this.patch(E, I, U);
        return this._processResponse(B, this.requestOptions);
      });
    }
    request(E, S, U, I) {
      return a(this, void 0, void 0, function* () {
        if (this._disposed)
          throw new Error("Client has already been disposed.");
        const B = new URL(S);
        let N = this._prepareRequest(E, B, I);
        const D = this._allowRetries && y.includes(E) ? this._maxRetries + 1 : 1;
        let F = 0, M;
        do {
          if (M = yield this.requestRaw(N, U), M && M.message && M.message.statusCode === m.Unauthorized) {
            let z;
            for (const H of this.handlers)
              if (H.canHandleAuthentication(M)) {
                z = H;
                break;
              }
            return z ? z.handleAuthentication(this, N, U) : M;
          }
          let q = this._maxRedirects;
          for (; M.message.statusCode && $.includes(M.message.statusCode) && this._allowRedirects && q > 0; ) {
            const z = M.message.headers.location;
            if (!z)
              break;
            const H = new URL(z);
            if (B.protocol === "https:" && B.protocol !== H.protocol && !this._allowRedirectDowngrade)
              throw new Error("Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.");
            if (yield M.readBody(), H.hostname !== B.hostname)
              for (const W in I)
                W.toLowerCase() === "authorization" && delete I[W];
            N = this._prepareRequest(E, H, I), M = yield this.requestRaw(N, U), q--;
          }
          if (!M.message.statusCode || !j.includes(M.message.statusCode))
            return M;
          F += 1, F < D && (yield M.readBody(), yield this._performExponentialBackoff(F));
        } while (F < D);
        return M;
      });
    }
    dispose() {
      this._agent && this._agent.destroy(), this._disposed = !0;
    }
    requestRaw(E, S) {
      return a(this, void 0, void 0, function* () {
        return new Promise((U, I) => {
          function B(N, D) {
            N ? I(N) : D ? U(D) : I(new Error("Unknown error"));
          }
          this.requestRawWithCallback(E, S, B);
        });
      });
    }
    requestRawWithCallback(E, S, U) {
      typeof S == "string" && (E.options.headers || (E.options.headers = {}), E.options.headers["Content-Length"] = Buffer.byteLength(S, "utf8"));
      let I = !1;
      function B(F, M) {
        I || (I = !0, U(F, M));
      }
      const N = E.httpModule.request(E.options, (F) => {
        const M = new b(F);
        B(void 0, M);
      });
      let D;
      N.on("socket", (F) => {
        D = F;
      }), N.setTimeout(this._socketTimeout || 3 * 6e4, () => {
        D && D.end(), B(new Error(`Request timeout: ${E.options.path}`));
      }), N.on("error", function(F) {
        B(F);
      }), S && typeof S == "string" && N.write(S, "utf8"), S && typeof S != "string" ? (S.on("close", function() {
        N.end();
      }), S.pipe(N)) : N.end();
    }
    getAgent(E) {
      const S = new URL(E);
      return this._getAgent(S);
    }
    _prepareRequest(E, S, U) {
      const I = {};
      I.parsedUrl = S;
      const B = I.parsedUrl.protocol === "https:";
      I.httpModule = B ? p : u;
      const N = B ? 443 : 80;
      if (I.options = {}, I.options.host = I.parsedUrl.hostname, I.options.port = I.parsedUrl.port ? parseInt(I.parsedUrl.port) : N, I.options.path = (I.parsedUrl.pathname || "") + (I.parsedUrl.search || ""), I.options.method = E, I.options.headers = this._mergeHeaders(U), this.userAgent != null && (I.options.headers["user-agent"] = this.userAgent), I.options.agent = this._getAgent(I.parsedUrl), this.handlers)
        for (const D of this.handlers)
          D.prepareRequest(I.options);
      return I;
    }
    _mergeHeaders(E) {
      return this.requestOptions && this.requestOptions.headers ? Object.assign({}, k(this.requestOptions.headers), k(E || {})) : k(E || {});
    }
    _getExistingOrDefaultHeader(E, S, U) {
      let I;
      return this.requestOptions && this.requestOptions.headers && (I = k(this.requestOptions.headers)[S]), E[S] || I || U;
    }
    _getAgent(E) {
      let S;
      const U = h.getProxyUrl(E), I = U && U.hostname;
      if (this._keepAlive && I && (S = this._proxyAgent), this._keepAlive && !I && (S = this._agent), S)
        return S;
      const B = E.protocol === "https:";
      let N = 100;
      if (this.requestOptions && (N = this.requestOptions.maxSockets || u.globalAgent.maxSockets), U && U.hostname) {
        const D = {
          maxSockets: N,
          keepAlive: this._keepAlive,
          proxy: Object.assign(Object.assign({}, (U.username || U.password) && {
            proxyAuth: `${U.username}:${U.password}`
          }), { host: U.hostname, port: U.port })
        };
        let F;
        const M = U.protocol === "https:";
        B ? F = M ? d.httpsOverHttps : d.httpsOverHttp : F = M ? d.httpOverHttps : d.httpOverHttp, S = F(D), this._proxyAgent = S;
      }
      if (this._keepAlive && !S) {
        const D = { keepAlive: this._keepAlive, maxSockets: N };
        S = B ? new p.Agent(D) : new u.Agent(D), this._agent = S;
      }
      return S || (S = B ? p.globalAgent : u.globalAgent), B && this._ignoreSslError && (S.options = Object.assign(S.options || {}, {
        rejectUnauthorized: !1
      })), S;
    }
    _performExponentialBackoff(E) {
      return a(this, void 0, void 0, function* () {
        E = Math.min(w, E);
        const S = T * Math.pow(2, E);
        return new Promise((U) => setTimeout(() => U(), S));
      });
    }
    _processResponse(E, S) {
      return a(this, void 0, void 0, function* () {
        return new Promise((U, I) => a(this, void 0, void 0, function* () {
          const B = E.message.statusCode || 0, N = {
            statusCode: B,
            result: null,
            headers: {}
          };
          B === m.NotFound && U(N);
          function D(q, z) {
            if (typeof z == "string") {
              const H = new Date(z);
              if (!isNaN(H.valueOf()))
                return H;
            }
            return z;
          }
          let F, M;
          try {
            M = yield E.readBody(), M && M.length > 0 && (S && S.deserializeDates ? F = JSON.parse(M, D) : F = JSON.parse(M), N.result = F), N.headers = E.message.headers;
          } catch (q) {
          }
          if (B > 299) {
            let q;
            F && F.message ? q = F.message : M && M.length > 0 ? q = M : q = `Failed request: (${B})`;
            const z = new _(q, B);
            z.result = N.result, I(z);
          } else
            U(N);
        }));
      });
    }
  }
  t.HttpClient = A;
  const k = (P) => Object.keys(P).reduce((E, S) => (E[S.toLowerCase()] = P[S], E), {});
}), auth$1 = createCommonjsModule(function(e, t) {
  var n = commonjsGlobal && commonjsGlobal.__awaiter || function(u, p, h, d) {
    function m(g) {
      return g instanceof h ? g : new h(function(v) {
        v(g);
      });
    }
    return new (h || (h = Promise))(function(g, v) {
      function G(y) {
        try {
          j(d.next(y));
        } catch (w) {
          v(w);
        }
      }
      function $(y) {
        try {
          j(d.throw(y));
        } catch (w) {
          v(w);
        }
      }
      function j(y) {
        y.done ? g(y.value) : m(y.value).then(G, $);
      }
      j((d = d.apply(u, p || [])).next());
    });
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.PersonalAccessTokenCredentialHandler = t.BearerCredentialHandler = t.BasicCredentialHandler = void 0;
  class o {
    constructor(p, h) {
      this.username = p, this.password = h;
    }
    prepareRequest(p) {
      if (!p.headers)
        throw Error("The request has no headers");
      p.headers.Authorization = `Basic ${Buffer.from(`${this.username}:${this.password}`).toString("base64")}`;
    }
    canHandleAuthentication() {
      return !1;
    }
    handleAuthentication() {
      return n(this, void 0, void 0, function* () {
        throw new Error("not implemented");
      });
    }
  }
  t.BasicCredentialHandler = o;
  class s {
    constructor(p) {
      this.token = p;
    }
    prepareRequest(p) {
      if (!p.headers)
        throw Error("The request has no headers");
      p.headers.Authorization = `Bearer ${this.token}`;
    }
    canHandleAuthentication() {
      return !1;
    }
    handleAuthentication() {
      return n(this, void 0, void 0, function* () {
        throw new Error("not implemented");
      });
    }
  }
  t.BearerCredentialHandler = s;
  class a {
    constructor(p) {
      this.token = p;
    }
    prepareRequest(p) {
      if (!p.headers)
        throw Error("The request has no headers");
      p.headers.Authorization = `Basic ${Buffer.from(`PAT:${this.token}`).toString("base64")}`;
    }
    canHandleAuthentication() {
      return !1;
    }
    handleAuthentication() {
      return n(this, void 0, void 0, function* () {
        throw new Error("not implemented");
      });
    }
  }
  t.PersonalAccessTokenCredentialHandler = a;
}), core_1$1 = core, oidcUtils = createCommonjsModule(function(e, t) {
  var n = commonjsGlobal && commonjsGlobal.__awaiter || function(s, a, u, p) {
    function h(d) {
      return d instanceof u ? d : new u(function(m) {
        m(d);
      });
    }
    return new (u || (u = Promise))(function(d, m) {
      function g($) {
        try {
          G(p.next($));
        } catch (j) {
          m(j);
        }
      }
      function v($) {
        try {
          G(p.throw($));
        } catch (j) {
          m(j);
        }
      }
      function G($) {
        $.done ? d($.value) : h($.value).then(g, v);
      }
      G((p = p.apply(s, a || [])).next());
    });
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.OidcClient = void 0;
  class o {
    static createHttpClient(a = !0, u = 10) {
      const p = {
        allowRetries: a,
        maxRetries: u
      };
      return new lib.HttpClient("actions/oidc-client", [new auth$1.BearerCredentialHandler(o.getRequestToken())], p);
    }
    static getRequestToken() {
      const a = process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN;
      if (!a)
        throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable");
      return a;
    }
    static getIDTokenUrl() {
      const a = process.env.ACTIONS_ID_TOKEN_REQUEST_URL;
      if (!a)
        throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable");
      return a;
    }
    static getCall(a) {
      var u;
      return n(this, void 0, void 0, function* () {
        const d = (u = (yield o.createHttpClient().getJson(a).catch((m) => {
          throw new Error(`Failed to get ID Token. 
 
        Error Code : ${m.statusCode}
 
        Error Message: ${m.result.message}`);
        })).result) === null || u === void 0 ? void 0 : u.value;
        if (!d)
          throw new Error("Response json body do not have ID Token field");
        return d;
      });
    }
    static getIDToken(a) {
      return n(this, void 0, void 0, function* () {
        try {
          let u = o.getIDTokenUrl();
          if (a) {
            const h = encodeURIComponent(a);
            u = `${u}&audience=${h}`;
          }
          core_1$1.debug(`ID token url is ${u}`);
          const p = yield o.getCall(u);
          return core_1$1.setSecret(p), p;
        } catch (u) {
          throw new Error(`Error message: ${u.message}`);
        }
      });
    }
  }
  t.OidcClient = o;
}), summary = createCommonjsModule(function(e, t) {
  var n = commonjsGlobal && commonjsGlobal.__awaiter || function(h, d, m, g) {
    function v(G) {
      return G instanceof m ? G : new m(function($) {
        $(G);
      });
    }
    return new (m || (m = Promise))(function(G, $) {
      function j(T) {
        try {
          w(g.next(T));
        } catch (_) {
          $(_);
        }
      }
      function y(T) {
        try {
          w(g.throw(T));
        } catch (_) {
          $(_);
        }
      }
      function w(T) {
        T.done ? G(T.value) : v(T.value).then(j, y);
      }
      w((g = g.apply(h, d || [])).next());
    });
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.summary = t.markdownSummary = t.SUMMARY_DOCS_URL = t.SUMMARY_ENV_VAR = void 0;
  const { access: o, appendFile: s, writeFile: a } = fs_1__default.default.promises;
  t.SUMMARY_ENV_VAR = "GITHUB_STEP_SUMMARY", t.SUMMARY_DOCS_URL = "https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary";
  class u {
    constructor() {
      this._buffer = "";
    }
    filePath() {
      return n(this, void 0, void 0, function* () {
        if (this._filePath)
          return this._filePath;
        const d = process.env[t.SUMMARY_ENV_VAR];
        if (!d)
          throw new Error(`Unable to find environment variable for $${t.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`);
        try {
          yield o(d, fs_1__default.default.constants.R_OK | fs_1__default.default.constants.W_OK);
        } catch (m) {
          throw new Error(`Unable to access summary file: '${d}'. Check if the file has correct read/write permissions.`);
        }
        return this._filePath = d, this._filePath;
      });
    }
    wrap(d, m, g = {}) {
      const v = Object.entries(g).map(([G, $]) => ` ${G}="${$}"`).join("");
      return m ? `<${d}${v}>${m}</${d}>` : `<${d}${v}>`;
    }
    write(d) {
      return n(this, void 0, void 0, function* () {
        const m = !!(d == null ? void 0 : d.overwrite), g = yield this.filePath();
        return yield (m ? a : s)(g, this._buffer, { encoding: "utf8" }), this.emptyBuffer();
      });
    }
    clear() {
      return n(this, void 0, void 0, function* () {
        return this.emptyBuffer().write({ overwrite: !0 });
      });
    }
    stringify() {
      return this._buffer;
    }
    isEmptyBuffer() {
      return this._buffer.length === 0;
    }
    emptyBuffer() {
      return this._buffer = "", this;
    }
    addRaw(d, m = !1) {
      return this._buffer += d, m ? this.addEOL() : this;
    }
    addEOL() {
      return this.addRaw(require$$0__default.default.EOL);
    }
    addCodeBlock(d, m) {
      const g = Object.assign({}, m && { lang: m }), v = this.wrap("pre", this.wrap("code", d), g);
      return this.addRaw(v).addEOL();
    }
    addList(d, m = !1) {
      const g = m ? "ol" : "ul", v = d.map(($) => this.wrap("li", $)).join(""), G = this.wrap(g, v);
      return this.addRaw(G).addEOL();
    }
    addTable(d) {
      const m = d.map((v) => {
        const G = v.map(($) => {
          if (typeof $ == "string")
            return this.wrap("td", $);
          const { header: j, data: y, colspan: w, rowspan: T } = $, _ = j ? "th" : "td", b = Object.assign(Object.assign({}, w && { colspan: w }), T && { rowspan: T });
          return this.wrap(_, y, b);
        }).join("");
        return this.wrap("tr", G);
      }).join(""), g = this.wrap("table", m);
      return this.addRaw(g).addEOL();
    }
    addDetails(d, m) {
      const g = this.wrap("details", this.wrap("summary", d) + m);
      return this.addRaw(g).addEOL();
    }
    addImage(d, m, g) {
      const { width: v, height: G } = g || {}, $ = Object.assign(Object.assign({}, v && { width: v }), G && { height: G }), j = this.wrap("img", null, Object.assign({ src: d, alt: m }, $));
      return this.addRaw(j).addEOL();
    }
    addHeading(d, m) {
      const g = `h${m}`, v = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(g) ? g : "h1", G = this.wrap(v, d);
      return this.addRaw(G).addEOL();
    }
    addSeparator() {
      const d = this.wrap("hr", null);
      return this.addRaw(d).addEOL();
    }
    addBreak() {
      const d = this.wrap("br", null);
      return this.addRaw(d).addEOL();
    }
    addQuote(d, m) {
      const g = Object.assign({}, m && { cite: m }), v = this.wrap("blockquote", d, g);
      return this.addRaw(v).addEOL();
    }
    addLink(d, m) {
      const g = this.wrap("a", d, { href: m });
      return this.addRaw(g).addEOL();
    }
  }
  const p = new u();
  t.markdownSummary = p, t.summary = p;
}), pathUtils = createCommonjsModule(function(e, t) {
  var n = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(d, m, g, v) {
    v === void 0 && (v = g), Object.defineProperty(d, v, { enumerable: !0, get: function() {
      return m[g];
    } });
  } : function(d, m, g, v) {
    v === void 0 && (v = g), d[v] = m[g];
  }), o = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(d, m) {
    Object.defineProperty(d, "default", { enumerable: !0, value: m });
  } : function(d, m) {
    d.default = m;
  }), s = commonjsGlobal && commonjsGlobal.__importStar || function(d) {
    if (d && d.__esModule)
      return d;
    var m = {};
    if (d != null)
      for (var g in d)
        g !== "default" && Object.hasOwnProperty.call(d, g) && n(m, d, g);
    return o(m, d), m;
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.toPlatformPath = t.toWin32Path = t.toPosixPath = void 0;
  const a = s(require$$1__default.default);
  function u(d) {
    return d.replace(/[\\]/g, "/");
  }
  t.toPosixPath = u;
  function p(d) {
    return d.replace(/[/]/g, "\\");
  }
  t.toWin32Path = p;
  function h(d) {
    return d.replace(/[/\\]/g, a.sep);
  }
  t.toPlatformPath = h;
}), core = createCommonjsModule(function(e, t) {
  var n = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(D, F, M, q) {
    q === void 0 && (q = M), Object.defineProperty(D, q, { enumerable: !0, get: function() {
      return F[M];
    } });
  } : function(D, F, M, q) {
    q === void 0 && (q = M), D[q] = F[M];
  }), o = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(D, F) {
    Object.defineProperty(D, "default", { enumerable: !0, value: F });
  } : function(D, F) {
    D.default = F;
  }), s = commonjsGlobal && commonjsGlobal.__importStar || function(D) {
    if (D && D.__esModule)
      return D;
    var F = {};
    if (D != null)
      for (var M in D)
        M !== "default" && Object.hasOwnProperty.call(D, M) && n(F, D, M);
    return o(F, D), F;
  }, a = commonjsGlobal && commonjsGlobal.__awaiter || function(D, F, M, q) {
    function z(H) {
      return H instanceof M ? H : new M(function(W) {
        W(H);
      });
    }
    return new (M || (M = Promise))(function(H, W) {
      function Z(V) {
        try {
          K(q.next(V));
        } catch (J) {
          W(J);
        }
      }
      function Q(V) {
        try {
          K(q.throw(V));
        } catch (J) {
          W(J);
        }
      }
      function K(V) {
        V.done ? H(V.value) : z(V.value).then(Z, Q);
      }
      K((q = q.apply(D, F || [])).next());
    });
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.getIDToken = t.getState = t.saveState = t.group = t.endGroup = t.startGroup = t.info = t.notice = t.warning = t.error = t.debug = t.isDebug = t.setFailed = t.setCommandEcho = t.setOutput = t.getBooleanInput = t.getMultilineInput = t.getInput = t.addPath = t.setSecret = t.exportVariable = t.ExitCode = void 0;
  const u = s(require$$0__default.default), p = s(require$$1__default.default);
  var h;
  (function(D) {
    D[D.Success = 0] = "Success", D[D.Failure = 1] = "Failure";
  })(h = t.ExitCode || (t.ExitCode = {}));
  function d(D, F) {
    const M = utils$2.toCommandValue(F);
    if (process.env[D] = M, process.env.GITHUB_ENV || "")
      return fileCommand.issueFileCommand("ENV", fileCommand.prepareKeyValueMessage(D, F));
    command.issueCommand("set-env", { name: D }, M);
  }
  t.exportVariable = d;
  function m(D) {
    command.issueCommand("add-mask", {}, D);
  }
  t.setSecret = m;
  function g(D) {
    process.env.GITHUB_PATH || "" ? fileCommand.issueFileCommand("PATH", D) : command.issueCommand("add-path", {}, D), process.env.PATH = `${D}${p.delimiter}${process.env.PATH}`;
  }
  t.addPath = g;
  function v(D, F) {
    const M = process.env[`INPUT_${D.replace(/ /g, "_").toUpperCase()}`] || "";
    if (F && F.required && !M)
      throw new Error(`Input required and not supplied: ${D}`);
    return F && F.trimWhitespace === !1 ? M : M.trim();
  }
  t.getInput = v;
  function G(D, F) {
    const M = v(D, F).split(`
`).filter((q) => q !== "");
    return F && F.trimWhitespace === !1 ? M : M.map((q) => q.trim());
  }
  t.getMultilineInput = G;
  function $(D, F) {
    const M = ["true", "True", "TRUE"], q = ["false", "False", "FALSE"], z = v(D, F);
    if (M.includes(z))
      return !0;
    if (q.includes(z))
      return !1;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${D}
Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
  }
  t.getBooleanInput = $;
  function j(D, F) {
    if (process.env.GITHUB_OUTPUT || "")
      return fileCommand.issueFileCommand("OUTPUT", fileCommand.prepareKeyValueMessage(D, F));
    process.stdout.write(u.EOL), command.issueCommand("set-output", { name: D }, utils$2.toCommandValue(F));
  }
  t.setOutput = j;
  function y(D) {
    command.issue("echo", D ? "on" : "off");
  }
  t.setCommandEcho = y;
  function w(D) {
    process.exitCode = h.Failure, b(D);
  }
  t.setFailed = w;
  function T() {
    return process.env.RUNNER_DEBUG === "1";
  }
  t.isDebug = T;
  function _(D) {
    command.issueCommand("debug", {}, D);
  }
  t.debug = _;
  function b(D, F = {}) {
    command.issueCommand("error", utils$2.toCommandProperties(F), D instanceof Error ? D.toString() : D);
  }
  t.error = b;
  function O(D, F = {}) {
    command.issueCommand("warning", utils$2.toCommandProperties(F), D instanceof Error ? D.toString() : D);
  }
  t.warning = O;
  function A(D, F = {}) {
    command.issueCommand("notice", utils$2.toCommandProperties(F), D instanceof Error ? D.toString() : D);
  }
  t.notice = A;
  function k(D) {
    process.stdout.write(D + u.EOL);
  }
  t.info = k;
  function P(D) {
    command.issue("group", D);
  }
  t.startGroup = P;
  function E() {
    command.issue("endgroup");
  }
  t.endGroup = E;
  function S(D, F) {
    return a(this, void 0, void 0, function* () {
      P(D);
      let M;
      try {
        M = yield F();
      } finally {
        E();
      }
      return M;
    });
  }
  t.group = S;
  function U(D, F) {
    if (process.env.GITHUB_STATE || "")
      return fileCommand.issueFileCommand("STATE", fileCommand.prepareKeyValueMessage(D, F));
    command.issueCommand("save-state", { name: D }, utils$2.toCommandValue(F));
  }
  t.saveState = U;
  function I(D) {
    return process.env[`STATE_${D}`] || "";
  }
  t.getState = I;
  function B(D) {
    return a(this, void 0, void 0, function* () {
      return yield oidcUtils.OidcClient.getIDToken(D);
    });
  }
  t.getIDToken = B, Object.defineProperty(t, "summary", { enumerable: !0, get: function() {
    return summary.summary;
  } });
  var N = summary;
  Object.defineProperty(t, "markdownSummary", { enumerable: !0, get: function() {
    return N.markdownSummary;
  } }), Object.defineProperty(t, "toPosixPath", { enumerable: !0, get: function() {
    return pathUtils.toPosixPath;
  } }), Object.defineProperty(t, "toWin32Path", { enumerable: !0, get: function() {
    return pathUtils.toWin32Path;
  } }), Object.defineProperty(t, "toPlatformPath", { enumerable: !0, get: function() {
    return pathUtils.toPlatformPath;
  } });
}), context = createCommonjsModule(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Context = void 0;
  class n {
    constructor() {
      if (this.payload = {}, process.env.GITHUB_EVENT_PATH)
        if (fs_1__default.default.existsSync(process.env.GITHUB_EVENT_PATH))
          this.payload = JSON.parse(fs_1__default.default.readFileSync(process.env.GITHUB_EVENT_PATH, { encoding: "utf8" }));
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
        const [s, a] = process.env.GITHUB_REPOSITORY.split("/");
        return { owner: s, repo: a };
      }
      if (this.payload.repository)
        return {
          owner: this.payload.repository.owner.login,
          repo: this.payload.repository.name
        };
      throw new Error("context.repo requires a GITHUB_REPOSITORY environment variable like 'owner/repo'");
    }
  }
  t.Context = n;
});
function getProxyUrl(e) {
  let t = e.protocol === "https:", n;
  if (checkBypass(e))
    return n;
  let o;
  return t ? o = process.env.https_proxy || process.env.HTTPS_PROXY : o = process.env.http_proxy || process.env.HTTP_PROXY, o && (n = new URL(o)), n;
}
var getProxyUrl_1 = getProxyUrl;
function checkBypass(e) {
  if (!e.hostname)
    return !1;
  let t = process.env.no_proxy || process.env.NO_PROXY || "";
  if (!t)
    return !1;
  let n;
  e.port ? n = Number(e.port) : e.protocol === "http:" ? n = 80 : e.protocol === "https:" && (n = 443);
  let o = [e.hostname.toUpperCase()];
  typeof n == "number" && o.push(`${o[0]}:${n}`);
  for (let s of t.split(",").map((a) => a.trim().toUpperCase()).filter((a) => a))
    if (o.some((a) => a === s))
      return !0;
  return !1;
}
var checkBypass_1 = checkBypass, proxy = /* @__PURE__ */ Object.defineProperty({
  getProxyUrl: getProxyUrl_1,
  checkBypass: checkBypass_1
}, "__esModule", { value: !0 }), httpClient = createCommonjsModule(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  let n;
  var o;
  (function(y) {
    y[y.OK = 200] = "OK", y[y.MultipleChoices = 300] = "MultipleChoices", y[y.MovedPermanently = 301] = "MovedPermanently", y[y.ResourceMoved = 302] = "ResourceMoved", y[y.SeeOther = 303] = "SeeOther", y[y.NotModified = 304] = "NotModified", y[y.UseProxy = 305] = "UseProxy", y[y.SwitchProxy = 306] = "SwitchProxy", y[y.TemporaryRedirect = 307] = "TemporaryRedirect", y[y.PermanentRedirect = 308] = "PermanentRedirect", y[y.BadRequest = 400] = "BadRequest", y[y.Unauthorized = 401] = "Unauthorized", y[y.PaymentRequired = 402] = "PaymentRequired", y[y.Forbidden = 403] = "Forbidden", y[y.NotFound = 404] = "NotFound", y[y.MethodNotAllowed = 405] = "MethodNotAllowed", y[y.NotAcceptable = 406] = "NotAcceptable", y[y.ProxyAuthenticationRequired = 407] = "ProxyAuthenticationRequired", y[y.RequestTimeout = 408] = "RequestTimeout", y[y.Conflict = 409] = "Conflict", y[y.Gone = 410] = "Gone", y[y.TooManyRequests = 429] = "TooManyRequests", y[y.InternalServerError = 500] = "InternalServerError", y[y.NotImplemented = 501] = "NotImplemented", y[y.BadGateway = 502] = "BadGateway", y[y.ServiceUnavailable = 503] = "ServiceUnavailable", y[y.GatewayTimeout = 504] = "GatewayTimeout";
  })(o = t.HttpCodes || (t.HttpCodes = {}));
  var s;
  (function(y) {
    y.Accept = "accept", y.ContentType = "content-type";
  })(s = t.Headers || (t.Headers = {}));
  var a;
  (function(y) {
    y.ApplicationJson = "application/json";
  })(a = t.MediaTypes || (t.MediaTypes = {}));
  function u(y) {
    let w = proxy.getProxyUrl(new URL(y));
    return w ? w.href : "";
  }
  t.getProxyUrl = u;
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
  ], d = ["OPTIONS", "GET", "DELETE", "HEAD"], m = 10, g = 5;
  class v extends Error {
    constructor(w, T) {
      super(w);
      this.name = "HttpClientError", this.statusCode = T, Object.setPrototypeOf(this, v.prototype);
    }
  }
  t.HttpClientError = v;
  class G {
    constructor(w) {
      this.message = w;
    }
    readBody() {
      return new Promise(async (w, T) => {
        let _ = Buffer.alloc(0);
        this.message.on("data", (b) => {
          _ = Buffer.concat([_, b]);
        }), this.message.on("end", () => {
          w(_.toString());
        });
      });
    }
  }
  t.HttpClientResponse = G;
  function $(y) {
    return new URL(y).protocol === "https:";
  }
  t.isHttps = $;
  class j {
    constructor(w, T, _) {
      this._ignoreSslError = !1, this._allowRedirects = !0, this._allowRedirectDowngrade = !1, this._maxRedirects = 50, this._allowRetries = !1, this._maxRetries = 1, this._keepAlive = !1, this._disposed = !1, this.userAgent = w, this.handlers = T || [], this.requestOptions = _, _ && (_.ignoreSslError != null && (this._ignoreSslError = _.ignoreSslError), this._socketTimeout = _.socketTimeout, _.allowRedirects != null && (this._allowRedirects = _.allowRedirects), _.allowRedirectDowngrade != null && (this._allowRedirectDowngrade = _.allowRedirectDowngrade), _.maxRedirects != null && (this._maxRedirects = Math.max(_.maxRedirects, 0)), _.keepAlive != null && (this._keepAlive = _.keepAlive), _.allowRetries != null && (this._allowRetries = _.allowRetries), _.maxRetries != null && (this._maxRetries = _.maxRetries));
    }
    options(w, T) {
      return this.request("OPTIONS", w, null, T || {});
    }
    get(w, T) {
      return this.request("GET", w, null, T || {});
    }
    del(w, T) {
      return this.request("DELETE", w, null, T || {});
    }
    post(w, T, _) {
      return this.request("POST", w, T, _ || {});
    }
    patch(w, T, _) {
      return this.request("PATCH", w, T, _ || {});
    }
    put(w, T, _) {
      return this.request("PUT", w, T, _ || {});
    }
    head(w, T) {
      return this.request("HEAD", w, null, T || {});
    }
    sendStream(w, T, _, b) {
      return this.request(w, T, _, b);
    }
    async getJson(w, T = {}) {
      T[s.Accept] = this._getExistingOrDefaultHeader(T, s.Accept, a.ApplicationJson);
      let _ = await this.get(w, T);
      return this._processResponse(_, this.requestOptions);
    }
    async postJson(w, T, _ = {}) {
      let b = JSON.stringify(T, null, 2);
      _[s.Accept] = this._getExistingOrDefaultHeader(_, s.Accept, a.ApplicationJson), _[s.ContentType] = this._getExistingOrDefaultHeader(_, s.ContentType, a.ApplicationJson);
      let O = await this.post(w, b, _);
      return this._processResponse(O, this.requestOptions);
    }
    async putJson(w, T, _ = {}) {
      let b = JSON.stringify(T, null, 2);
      _[s.Accept] = this._getExistingOrDefaultHeader(_, s.Accept, a.ApplicationJson), _[s.ContentType] = this._getExistingOrDefaultHeader(_, s.ContentType, a.ApplicationJson);
      let O = await this.put(w, b, _);
      return this._processResponse(O, this.requestOptions);
    }
    async patchJson(w, T, _ = {}) {
      let b = JSON.stringify(T, null, 2);
      _[s.Accept] = this._getExistingOrDefaultHeader(_, s.Accept, a.ApplicationJson), _[s.ContentType] = this._getExistingOrDefaultHeader(_, s.ContentType, a.ApplicationJson);
      let O = await this.patch(w, b, _);
      return this._processResponse(O, this.requestOptions);
    }
    async request(w, T, _, b) {
      if (this._disposed)
        throw new Error("Client has already been disposed.");
      let O = new URL(T), A = this._prepareRequest(w, O, b), k = this._allowRetries && d.indexOf(w) != -1 ? this._maxRetries + 1 : 1, P = 0, E;
      for (; P < k; ) {
        if (E = await this.requestRaw(A, _), E && E.message && E.message.statusCode === o.Unauthorized) {
          let U;
          for (let I = 0; I < this.handlers.length; I++)
            if (this.handlers[I].canHandleAuthentication(E)) {
              U = this.handlers[I];
              break;
            }
          return U ? U.handleAuthentication(this, A, _) : E;
        }
        let S = this._maxRedirects;
        for (; p.indexOf(E.message.statusCode) != -1 && this._allowRedirects && S > 0; ) {
          const U = E.message.headers.location;
          if (!U)
            break;
          let I = new URL(U);
          if (O.protocol == "https:" && O.protocol != I.protocol && !this._allowRedirectDowngrade)
            throw new Error("Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.");
          if (await E.readBody(), I.hostname !== O.hostname)
            for (let B in b)
              B.toLowerCase() === "authorization" && delete b[B];
          A = this._prepareRequest(w, I, b), E = await this.requestRaw(A, _), S--;
        }
        if (h.indexOf(E.message.statusCode) == -1)
          return E;
        P += 1, P < k && (await E.readBody(), await this._performExponentialBackoff(P));
      }
      return E;
    }
    dispose() {
      this._agent && this._agent.destroy(), this._disposed = !0;
    }
    requestRaw(w, T) {
      return new Promise((_, b) => {
        let O = function(A, k) {
          A && b(A), _(k);
        };
        this.requestRawWithCallback(w, T, O);
      });
    }
    requestRawWithCallback(w, T, _) {
      let b;
      typeof T == "string" && (w.options.headers["Content-Length"] = Buffer.byteLength(T, "utf8"));
      let O = !1, A = (P, E) => {
        O || (O = !0, _(P, E));
      }, k = w.httpModule.request(w.options, (P) => {
        let E = new G(P);
        A(null, E);
      });
      k.on("socket", (P) => {
        b = P;
      }), k.setTimeout(this._socketTimeout || 3 * 6e4, () => {
        b && b.end(), A(new Error("Request timeout: " + w.options.path), null);
      }), k.on("error", function(P) {
        A(P, null);
      }), T && typeof T == "string" && k.write(T, "utf8"), T && typeof T != "string" ? (T.on("close", function() {
        k.end();
      }), T.pipe(k)) : k.end();
    }
    getAgent(w) {
      let T = new URL(w);
      return this._getAgent(T);
    }
    _prepareRequest(w, T, _) {
      const b = {};
      b.parsedUrl = T;
      const O = b.parsedUrl.protocol === "https:";
      b.httpModule = O ? https__default.default : http__default.default;
      const A = O ? 443 : 80;
      return b.options = {}, b.options.host = b.parsedUrl.hostname, b.options.port = b.parsedUrl.port ? parseInt(b.parsedUrl.port) : A, b.options.path = (b.parsedUrl.pathname || "") + (b.parsedUrl.search || ""), b.options.method = w, b.options.headers = this._mergeHeaders(_), this.userAgent != null && (b.options.headers["user-agent"] = this.userAgent), b.options.agent = this._getAgent(b.parsedUrl), this.handlers && this.handlers.forEach((k) => {
        k.prepareRequest(b.options);
      }), b;
    }
    _mergeHeaders(w) {
      const T = (_) => Object.keys(_).reduce((b, O) => (b[O.toLowerCase()] = _[O], b), {});
      return this.requestOptions && this.requestOptions.headers ? Object.assign({}, T(this.requestOptions.headers), T(w)) : T(w || {});
    }
    _getExistingOrDefaultHeader(w, T, _) {
      const b = (A) => Object.keys(A).reduce((k, P) => (k[P.toLowerCase()] = A[P], k), {});
      let O;
      return this.requestOptions && this.requestOptions.headers && (O = b(this.requestOptions.headers)[T]), w[T] || O || _;
    }
    _getAgent(w) {
      let T, _ = proxy.getProxyUrl(w), b = _ && _.hostname;
      if (this._keepAlive && b && (T = this._proxyAgent), this._keepAlive && !b && (T = this._agent), T)
        return T;
      const O = w.protocol === "https:";
      let A = 100;
      if (this.requestOptions && (A = this.requestOptions.maxSockets || http__default.default.globalAgent.maxSockets), b) {
        n || (n = tunnel);
        const k = {
          maxSockets: A,
          keepAlive: this._keepAlive,
          proxy: {
            proxyAuth: `${_.username}:${_.password}`,
            host: _.hostname,
            port: _.port
          }
        };
        let P;
        const E = _.protocol === "https:";
        O ? P = E ? n.httpsOverHttps : n.httpsOverHttp : P = E ? n.httpOverHttps : n.httpOverHttp, T = P(k), this._proxyAgent = T;
      }
      if (this._keepAlive && !T) {
        const k = { keepAlive: this._keepAlive, maxSockets: A };
        T = O ? new https__default.default.Agent(k) : new http__default.default.Agent(k), this._agent = T;
      }
      return T || (T = O ? https__default.default.globalAgent : http__default.default.globalAgent), O && this._ignoreSslError && (T.options = Object.assign(T.options || {}, {
        rejectUnauthorized: !1
      })), T;
    }
    _performExponentialBackoff(w) {
      w = Math.min(m, w);
      const T = g * Math.pow(2, w);
      return new Promise((_) => setTimeout(() => _(), T));
    }
    static dateTimeDeserializer(w, T) {
      if (typeof T == "string") {
        let _ = new Date(T);
        if (!isNaN(_.valueOf()))
          return _;
      }
      return T;
    }
    async _processResponse(w, T) {
      return new Promise(async (_, b) => {
        const O = w.message.statusCode, A = {
          statusCode: O,
          result: null,
          headers: {}
        };
        O == o.NotFound && _(A);
        let k, P;
        try {
          P = await w.readBody(), P && P.length > 0 && (T && T.deserializeDates ? k = JSON.parse(P, j.dateTimeDeserializer) : k = JSON.parse(P), A.result = k), A.headers = w.message.headers;
        } catch (E) {
        }
        if (O > 299) {
          let E;
          k && k.message ? E = k.message : P && P.length > 0 ? E = P : E = "Failed request: (" + O + ")";
          let S = new v(E, O);
          S.result = A.result, b(S);
        } else
          _(A);
      });
    }
  }
  t.HttpClient = j;
}), utils$1 = createCommonjsModule(function(e, t) {
  var n = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(d, m, g, v) {
    v === void 0 && (v = g), Object.defineProperty(d, v, { enumerable: !0, get: function() {
      return m[g];
    } });
  } : function(d, m, g, v) {
    v === void 0 && (v = g), d[v] = m[g];
  }), o = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(d, m) {
    Object.defineProperty(d, "default", { enumerable: !0, value: m });
  } : function(d, m) {
    d.default = m;
  }), s = commonjsGlobal && commonjsGlobal.__importStar || function(d) {
    if (d && d.__esModule)
      return d;
    var m = {};
    if (d != null)
      for (var g in d)
        Object.hasOwnProperty.call(d, g) && n(m, d, g);
    return o(m, d), m;
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.getApiBaseUrl = t.getProxyAgent = t.getAuthString = void 0;
  const a = s(httpClient);
  function u(d, m) {
    if (!d && !m.auth)
      throw new Error("Parameter token or opts.auth is required");
    if (d && m.auth)
      throw new Error("Parameters token and opts.auth may not both be specified");
    return typeof m.auth == "string" ? m.auth : `token ${d}`;
  }
  t.getAuthString = u;
  function p(d) {
    return new a.HttpClient().getAgent(d);
  }
  t.getProxyAgent = p;
  function h() {
    return process.env.GITHUB_API_URL || "https://api.github.com";
  }
  t.getApiBaseUrl = h;
});
function getUserAgent() {
  return typeof navigator == "object" && "userAgent" in navigator ? navigator.userAgent : typeof process == "object" && "version" in process ? `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})` : "<environment undetectable>";
}
var register_1 = register;
function register(e, t, n, o) {
  if (typeof n != "function")
    throw new Error("method for before hook must be a function");
  return o || (o = {}), Array.isArray(t) ? t.reverse().reduce(function(s, a) {
    return register.bind(null, e, a, s, o);
  }, n)() : Promise.resolve().then(function() {
    return e.registry[t] ? e.registry[t].reduce(function(s, a) {
      return a.hook.bind(null, s, o);
    }, n)() : n(o);
  });
}
var add = addHook;
function addHook(e, t, n, o) {
  var s = o;
  e.registry[n] || (e.registry[n] = []), t === "before" && (o = function(a, u) {
    return Promise.resolve().then(s.bind(null, u)).then(a.bind(null, u));
  }), t === "after" && (o = function(a, u) {
    var p;
    return Promise.resolve().then(a.bind(null, u)).then(function(h) {
      return p = h, s(p, u);
    }).then(function() {
      return p;
    });
  }), t === "error" && (o = function(a, u) {
    return Promise.resolve().then(a.bind(null, u)).catch(function(p) {
      return s(p, u);
    });
  }), e.registry[n].push({
    hook: o,
    orig: s
  });
}
var remove = removeHook;
function removeHook(e, t, n) {
  if (!!e.registry[t]) {
    var o = e.registry[t].map(function(s) {
      return s.orig;
    }).indexOf(n);
    o !== -1 && e.registry[t].splice(o, 1);
  }
}
var bind = Function.bind, bindable = bind.bind(bind);
function bindApi(e, t, n) {
  var o = bindable(remove, null).apply(null, n ? [t, n] : [t]);
  e.api = { remove: o }, e.remove = o, ["before", "error", "after", "wrap"].forEach(function(s) {
    var a = n ? [t, s, n] : [t, s];
    e[s] = e.api[s] = bindable(add, null).apply(null, a);
  });
}
function HookSingular() {
  var e = "h", t = {
    registry: {}
  }, n = register_1.bind(null, t, e);
  return bindApi(n, t, e), n;
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
  var t, n;
  return isObject$1(e) === !1 ? !1 : (t = e.constructor, t === void 0 ? !0 : (n = t.prototype, !(isObject$1(n) === !1 || n.hasOwnProperty("isPrototypeOf") === !1)));
}
function lowercaseKeys(e) {
  return e ? Object.keys(e).reduce((t, n) => (t[n.toLowerCase()] = e[n], t), {}) : {};
}
function mergeDeep(e, t) {
  const n = Object.assign({}, e);
  return Object.keys(t).forEach((o) => {
    isPlainObject(t[o]) ? o in e ? n[o] = mergeDeep(e[o], t[o]) : Object.assign(n, { [o]: t[o] }) : Object.assign(n, { [o]: t[o] });
  }), n;
}
function removeUndefinedProperties(e) {
  for (const t in e)
    e[t] === void 0 && delete e[t];
  return e;
}
function merge(e, t, n) {
  if (typeof t == "string") {
    let [s, a] = t.split(" ");
    n = Object.assign(a ? { method: s, url: a } : { url: s }, n);
  } else
    n = Object.assign({}, t);
  n.headers = lowercaseKeys(n.headers), removeUndefinedProperties(n), removeUndefinedProperties(n.headers);
  const o = mergeDeep(e || {}, n);
  return e && e.mediaType.previews.length && (o.mediaType.previews = e.mediaType.previews.filter((s) => !o.mediaType.previews.includes(s)).concat(o.mediaType.previews)), o.mediaType.previews = o.mediaType.previews.map((s) => s.replace(/-preview/, "")), o;
}
function addQueryParameters(e, t) {
  const n = /\?/.test(e) ? "&" : "?", o = Object.keys(t);
  return o.length === 0 ? e : e + n + o.map((s) => s === "q" ? "q=" + t.q.split("+").map(encodeURIComponent).join("+") : `${s}=${encodeURIComponent(t[s])}`).join("&");
}
const urlVariableRegex = /\{[^}]+\}/g;
function removeNonChars(e) {
  return e.replace(/^\W+|\W+$/g, "").split(/,/);
}
function extractUrlVariableNames(e) {
  const t = e.match(urlVariableRegex);
  return t ? t.map(removeNonChars).reduce((n, o) => n.concat(o), []) : [];
}
function omit(e, t) {
  return Object.keys(e).filter((n) => !t.includes(n)).reduce((n, o) => (n[o] = e[o], n), {});
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
function encodeValue(e, t, n) {
  return t = e === "+" || e === "#" ? encodeReserved(t) : encodeUnreserved(t), n ? encodeUnreserved(n) + "=" + t : t;
}
function isDefined(e) {
  return e != null;
}
function isKeyOperator(e) {
  return e === ";" || e === "&" || e === "?";
}
function getValues(e, t, n, o) {
  var s = e[n], a = [];
  if (isDefined(s) && s !== "")
    if (typeof s == "string" || typeof s == "number" || typeof s == "boolean")
      s = s.toString(), o && o !== "*" && (s = s.substring(0, parseInt(o, 10))), a.push(encodeValue(t, s, isKeyOperator(t) ? n : ""));
    else if (o === "*")
      Array.isArray(s) ? s.filter(isDefined).forEach(function(u) {
        a.push(encodeValue(t, u, isKeyOperator(t) ? n : ""));
      }) : Object.keys(s).forEach(function(u) {
        isDefined(s[u]) && a.push(encodeValue(t, s[u], u));
      });
    else {
      const u = [];
      Array.isArray(s) ? s.filter(isDefined).forEach(function(p) {
        u.push(encodeValue(t, p));
      }) : Object.keys(s).forEach(function(p) {
        isDefined(s[p]) && (u.push(encodeUnreserved(p)), u.push(encodeValue(t, s[p].toString())));
      }), isKeyOperator(t) ? a.push(encodeUnreserved(n) + "=" + u.join(",")) : u.length !== 0 && a.push(u.join(","));
    }
  else
    t === ";" ? isDefined(s) && a.push(encodeUnreserved(n)) : s === "" && (t === "&" || t === "?") ? a.push(encodeUnreserved(n) + "=") : s === "" && a.push("");
  return a;
}
function parseUrl(e) {
  return {
    expand: expand.bind(null, e)
  };
}
function expand(e, t) {
  var n = ["+", "#", ".", "/", ";", "?", "&"];
  return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function(o, s, a) {
    if (s) {
      let p = "";
      const h = [];
      if (n.indexOf(s.charAt(0)) !== -1 && (p = s.charAt(0), s = s.substr(1)), s.split(/,/g).forEach(function(d) {
        var m = /([^:\*]*)(?::(\d+)|(\*))?/.exec(d);
        h.push(getValues(t, p, m[1], m[2] || m[3]));
      }), p && p !== "+") {
        var u = ",";
        return p === "?" ? u = "&" : p !== "#" && (u = p), (h.length !== 0 ? p : "") + h.join(u);
      } else
        return h.join(",");
    } else
      return encodeReserved(a);
  });
}
function parse(e) {
  let t = e.method.toUpperCase(), n = (e.url || "/").replace(/:([a-z]\w+)/g, "{$1}"), o = Object.assign({}, e.headers), s, a = omit(e, [
    "method",
    "baseUrl",
    "url",
    "headers",
    "request",
    "mediaType"
  ]);
  const u = extractUrlVariableNames(n);
  n = parseUrl(n).expand(a), /^http/.test(n) || (n = e.baseUrl + n);
  const p = Object.keys(e).filter((m) => u.includes(m)).concat("baseUrl"), h = omit(a, p);
  if (!/application\/octet-stream/i.test(o.accept) && (e.mediaType.format && (o.accept = o.accept.split(/,/).map((m) => m.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, `application/vnd$1$2.${e.mediaType.format}`)).join(",")), e.mediaType.previews.length)) {
    const m = o.accept.match(/[\w-]+(?=-preview)/g) || [];
    o.accept = m.concat(e.mediaType.previews).map((g) => {
      const v = e.mediaType.format ? `.${e.mediaType.format}` : "+json";
      return `application/vnd.github.${g}-preview${v}`;
    }).join(",");
  }
  return ["GET", "HEAD"].includes(t) ? n = addQueryParameters(n, h) : "data" in h ? s = h.data : Object.keys(h).length ? s = h : o["content-length"] = 0, !o["content-type"] && typeof s != "undefined" && (o["content-type"] = "application/json; charset=utf-8"), ["PATCH", "PUT"].includes(t) && typeof s == "undefined" && (s = ""), Object.assign({ method: t, url: n, headers: o }, typeof s != "undefined" ? { body: s } : null, e.request ? { request: e.request } : null);
}
function endpointWithDefaults(e, t, n) {
  return parse(merge(e, t, n));
}
function withDefaults$2(e, t) {
  const n = merge(e, t), o = endpointWithDefaults.bind(null, n);
  return Object.assign(o, {
    DEFAULTS: n,
    defaults: withDefaults$2.bind(null, n),
    merge: merge.bind(null, n),
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
    const t = arguments[0], n = arguments[1], o = [];
    let s = 0;
    if (t) {
      const u = t, p = Number(u.length);
      for (let h = 0; h < p; h++) {
        const d = u[h];
        let m;
        d instanceof Buffer ? m = d : ArrayBuffer.isView(d) ? m = Buffer.from(d.buffer, d.byteOffset, d.byteLength) : d instanceof ArrayBuffer ? m = Buffer.from(d) : d instanceof Blob ? m = d[BUFFER] : m = Buffer.from(typeof d == "string" ? d : String(d)), s += m.length, o.push(m);
      }
    }
    this[BUFFER] = Buffer.concat(o);
    let a = n && n.type !== void 0 && String(n.type).toLowerCase();
    a && !/[^\u0020-\u007E]/.test(a) && (this[TYPE] = a);
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
    const t = this[BUFFER], n = t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength);
    return Promise.resolve(n);
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
    const t = this.size, n = arguments[0], o = arguments[1];
    let s, a;
    n === void 0 ? s = 0 : n < 0 ? s = Math.max(t + n, 0) : s = Math.min(n, t), o === void 0 ? a = t : o < 0 ? a = Math.max(t + o, 0) : a = Math.min(o, t);
    const u = Math.max(a - s, 0), h = this[BUFFER].slice(s, s + u), d = new Blob([], { type: arguments[2] });
    return d[BUFFER] = h, d;
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
function FetchError(e, t, n) {
  Error.call(this, e), this.message = e, this.type = t, n && (this.code = this.errno = n.code), Error.captureStackTrace(this, this.constructor);
}
FetchError.prototype = Object.create(Error.prototype), FetchError.prototype.constructor = FetchError, FetchError.prototype.name = "FetchError";
let convert;
try {
  convert = require("encoding").convert;
} catch (e) {
}
const INTERNALS = Symbol("Body internals"), PassThrough = Stream__default.default.PassThrough;
function Body(e) {
  var t = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = n.size;
  let s = o === void 0 ? 0 : o;
  var a = n.timeout;
  let u = a === void 0 ? 0 : a;
  e == null ? e = null : isURLSearchParams(e) ? e = Buffer.from(e.toString()) : isBlob(e) || Buffer.isBuffer(e) || (Object.prototype.toString.call(e) === "[object ArrayBuffer]" ? e = Buffer.from(e) : ArrayBuffer.isView(e) ? e = Buffer.from(e.buffer, e.byteOffset, e.byteLength) : e instanceof Stream__default.default || (e = Buffer.from(String(e)))), this[INTERNALS] = {
    body: e,
    disturbed: !1,
    error: null
  }, this.size = s, this.timeout = u, e instanceof Stream__default.default && e.on("error", function(p) {
    const h = p.name === "AbortError" ? p : new FetchError(`Invalid response body while trying to fetch ${t.url}: ${p.message}`, "system", p);
    t[INTERNALS].error = h;
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
      } catch (n) {
        return Body.Promise.reject(new FetchError(`invalid json response body at ${e.url} reason: ${n.message}`, "invalid-json"));
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
      const n = Object.getOwnPropertyDescriptor(Body.prototype, t);
      Object.defineProperty(e, t, n);
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
  let n = [], o = 0, s = !1;
  return new Body.Promise(function(a, u) {
    let p;
    e.timeout && (p = setTimeout(function() {
      s = !0, u(new FetchError(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`, "body-timeout"));
    }, e.timeout)), t.on("error", function(h) {
      h.name === "AbortError" ? (s = !0, u(h)) : u(new FetchError(`Invalid response body while trying to fetch ${e.url}: ${h.message}`, "system", h));
    }), t.on("data", function(h) {
      if (!(s || h === null)) {
        if (e.size && o + h.length > e.size) {
          s = !0, u(new FetchError(`content size at ${e.url} over limit: ${e.size}`, "max-size"));
          return;
        }
        o += h.length, n.push(h);
      }
    }), t.on("end", function() {
      if (!s) {
        clearTimeout(p);
        try {
          a(Buffer.concat(n, o));
        } catch (h) {
          u(new FetchError(`Could not create Buffer from response body for ${e.url}: ${h.message}`, "system", h));
        }
      }
    });
  });
}
function convertBody(e, t) {
  if (typeof convert != "function")
    throw new Error("The package `encoding` must be installed to use the textConverted() function");
  const n = t.get("content-type");
  let o = "utf-8", s, a;
  return n && (s = /charset=([^;]*)/i.exec(n)), a = e.slice(0, 1024).toString(), !s && a && (s = /<meta.+?charset=(['"])(.+?)\1/i.exec(a)), !s && a && (s = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(a), s || (s = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(a), s && s.pop()), s && (s = /charset=(.*)/i.exec(s.pop()))), !s && a && (s = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(a)), s && (o = s.pop(), (o === "gb2312" || o === "gbk") && (o = "gb18030")), convert(e, "UTF-8", o).toString();
}
function isURLSearchParams(e) {
  return typeof e != "object" || typeof e.append != "function" || typeof e.delete != "function" || typeof e.get != "function" || typeof e.getAll != "function" || typeof e.has != "function" || typeof e.set != "function" ? !1 : e.constructor.name === "URLSearchParams" || Object.prototype.toString.call(e) === "[object URLSearchParams]" || typeof e.sort == "function";
}
function isBlob(e) {
  return typeof e == "object" && typeof e.arrayBuffer == "function" && typeof e.type == "string" && typeof e.stream == "function" && typeof e.constructor == "function" && typeof e.constructor.name == "string" && /^(Blob|File)$/.test(e.constructor.name) && /^(Blob|File)$/.test(e[Symbol.toStringTag]);
}
function clone(e) {
  let t, n, o = e.body;
  if (e.bodyUsed)
    throw new Error("cannot clone body after it is used");
  return o instanceof Stream__default.default && typeof o.getBoundary != "function" && (t = new PassThrough(), n = new PassThrough(), o.pipe(t), o.pipe(n), e[INTERNALS].body = t, o = n), o;
}
function extractContentType(e) {
  return e === null ? null : typeof e == "string" ? "text/plain;charset=UTF-8" : isURLSearchParams(e) ? "application/x-www-form-urlencoded;charset=UTF-8" : isBlob(e) ? e.type || null : Buffer.isBuffer(e) || Object.prototype.toString.call(e) === "[object ArrayBuffer]" || ArrayBuffer.isView(e) ? null : typeof e.getBoundary == "function" ? `multipart/form-data;boundary=${e.getBoundary()}` : e instanceof Stream__default.default ? null : "text/plain;charset=UTF-8";
}
function getTotalBytes(e) {
  const t = e.body;
  return t === null ? 0 : isBlob(t) ? t.size : Buffer.isBuffer(t) ? t.length : t && typeof t.getLengthSync == "function" && (t._lengthRetrievers && t._lengthRetrievers.length == 0 || t.hasKnownLength && t.hasKnownLength()) ? t.getLengthSync() : null;
}
function writeToStream(e, t) {
  const n = t.body;
  n === null ? e.end() : isBlob(n) ? n.stream().pipe(e) : Buffer.isBuffer(n) ? (e.write(n), e.end()) : n.pipe(e);
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
  for (const n in e)
    if (n.toLowerCase() === t)
      return n;
}
const MAP = Symbol("map");
class Headers {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
    if (this[MAP] = Object.create(null), t instanceof Headers) {
      const n = t.raw(), o = Object.keys(n);
      for (const s of o)
        for (const a of n[s])
          this.append(s, a);
      return;
    }
    if (t != null)
      if (typeof t == "object") {
        const n = t[Symbol.iterator];
        if (n != null) {
          if (typeof n != "function")
            throw new TypeError("Header pairs must be iterable");
          const o = [];
          for (const s of t) {
            if (typeof s != "object" || typeof s[Symbol.iterator] != "function")
              throw new TypeError("Each header pair must be iterable");
            o.push(Array.from(s));
          }
          for (const s of o) {
            if (s.length !== 2)
              throw new TypeError("Each header pair must be a name/value tuple");
            this.append(s[0], s[1]);
          }
        } else
          for (const o of Object.keys(t)) {
            const s = t[o];
            this.append(o, s);
          }
      } else
        throw new TypeError("Provided initializer must be an object");
  }
  get(t) {
    t = `${t}`, validateName(t);
    const n = find(this[MAP], t);
    return n === void 0 ? null : this[MAP][n].join(", ");
  }
  forEach(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, o = getHeaders(this), s = 0;
    for (; s < o.length; ) {
      var a = o[s];
      const u = a[0], p = a[1];
      t.call(n, p, u, this), o = getHeaders(this), s++;
    }
  }
  set(t, n) {
    t = `${t}`, n = `${n}`, validateName(t), validateValue(n);
    const o = find(this[MAP], t);
    this[MAP][o !== void 0 ? o : t] = [n];
  }
  append(t, n) {
    t = `${t}`, n = `${n}`, validateName(t), validateValue(n);
    const o = find(this[MAP], t);
    o !== void 0 ? this[MAP][o].push(n) : this[MAP][t] = [n];
  }
  has(t) {
    return t = `${t}`, validateName(t), find(this[MAP], t) !== void 0;
  }
  delete(t) {
    t = `${t}`, validateName(t);
    const n = find(this[MAP], t);
    n !== void 0 && delete this[MAP][n];
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
  return Object.keys(e[MAP]).sort().map(t === "key" ? function(o) {
    return o.toLowerCase();
  } : t === "value" ? function(o) {
    return e[MAP][o].join(", ");
  } : function(o) {
    return [o.toLowerCase(), e[MAP][o].join(", ")];
  });
}
const INTERNAL = Symbol("internal");
function createHeadersIterator(e, t) {
  const n = Object.create(HeadersIteratorPrototype);
  return n[INTERNAL] = {
    target: e,
    kind: t,
    index: 0
  }, n;
}
const HeadersIteratorPrototype = Object.setPrototypeOf({
  next() {
    if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype)
      throw new TypeError("Value of `this` is not a HeadersIterator");
    var e = this[INTERNAL];
    const t = e.target, n = e.kind, o = e.index, s = getHeaders(t, n), a = s.length;
    return o >= a ? {
      value: void 0,
      done: !0
    } : (this[INTERNAL].index = o + 1, {
      value: s[o],
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
  const t = Object.assign({ __proto__: null }, e[MAP]), n = find(e[MAP], "Host");
  return n !== void 0 && (t[n] = t[n][0]), t;
}
function createHeadersLenient(e) {
  const t = new Headers();
  for (const n of Object.keys(e))
    if (!invalidTokenRegex.test(n))
      if (Array.isArray(e[n]))
        for (const o of e[n])
          invalidHeaderCharRegex.test(o) || (t[MAP][n] === void 0 ? t[MAP][n] = [o] : t[MAP][n].push(o));
      else
        invalidHeaderCharRegex.test(e[n]) || (t[MAP][n] = [e[n]]);
  return t;
}
const INTERNALS$1 = Symbol("Response internals"), STATUS_CODES = http__default.default.STATUS_CODES;
class Response {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Body.call(this, t, n);
    const o = n.status || 200, s = new Headers(n.headers);
    if (t != null && !s.has("Content-Type")) {
      const a = extractContentType(t);
      a && s.append("Content-Type", a);
    }
    this[INTERNALS$1] = {
      url: n.url,
      status: o,
      statusText: n.statusText || STATUS_CODES[o],
      headers: s,
      counter: n.counter
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
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o;
    isRequest(t) ? o = parse_url(t.url) : (t && t.href ? o = parse_url(t.href) : o = parse_url(`${t}`), t = {});
    let s = n.method || t.method || "GET";
    if (s = s.toUpperCase(), (n.body != null || isRequest(t) && t.body !== null) && (s === "GET" || s === "HEAD"))
      throw new TypeError("Request with GET/HEAD method cannot have body");
    let a = n.body != null ? n.body : isRequest(t) && t.body !== null ? clone(t) : null;
    Body.call(this, a, {
      timeout: n.timeout || t.timeout || 0,
      size: n.size || t.size || 0
    });
    const u = new Headers(n.headers || t.headers || {});
    if (a != null && !u.has("Content-Type")) {
      const h = extractContentType(a);
      h && u.append("Content-Type", h);
    }
    let p = isRequest(t) ? t.signal : null;
    if ("signal" in n && (p = n.signal), p != null && !isAbortSignal(p))
      throw new TypeError("Expected signal to be an instanceof AbortSignal");
    this[INTERNALS$2] = {
      method: s,
      redirect: n.redirect || t.redirect || "follow",
      headers: u,
      parsedURL: o,
      signal: p
    }, this.follow = n.follow !== void 0 ? n.follow : t.follow !== void 0 ? t.follow : 20, this.compress = n.compress !== void 0 ? n.compress : t.compress !== void 0 ? t.compress : !0, this.counter = n.counter || t.counter || 0, this.agent = n.agent || t.agent;
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
  const t = e[INTERNALS$2].parsedURL, n = new Headers(e[INTERNALS$2].headers);
  if (n.has("Accept") || n.set("Accept", "*/*"), !t.protocol || !t.hostname)
    throw new TypeError("Only absolute URLs are supported");
  if (!/^https?:$/.test(t.protocol))
    throw new TypeError("Only HTTP(S) protocols are supported");
  if (e.signal && e.body instanceof Stream__default.default.Readable && !streamDestructionSupported)
    throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");
  let o = null;
  if (e.body == null && /^(POST|PUT)$/i.test(e.method) && (o = "0"), e.body != null) {
    const a = getTotalBytes(e);
    typeof a == "number" && (o = String(a));
  }
  o && n.set("Content-Length", o), n.has("User-Agent") || n.set("User-Agent", "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"), e.compress && !n.has("Accept-Encoding") && n.set("Accept-Encoding", "gzip,deflate");
  let s = e.agent;
  return typeof s == "function" && (s = s(t)), !n.has("Connection") && !s && n.set("Connection", "close"), Object.assign({}, t, {
    method: e.method,
    headers: exportNodeCompatibleHeaders(n),
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
  return Body.Promise = fetch.Promise, new fetch.Promise(function(n, o) {
    const s = new Request(e, t), a = getNodeRequestOptions(s), u = (a.protocol === "https:" ? https__default.default : http__default.default).request, p = s.signal;
    let h = null;
    const d = function() {
      let j = new AbortError("The user aborted a request.");
      o(j), s.body && s.body instanceof Stream__default.default.Readable && s.body.destroy(j), !(!h || !h.body) && h.body.emit("error", j);
    };
    if (p && p.aborted) {
      d();
      return;
    }
    const m = function() {
      d(), G();
    }, g = u(a);
    let v;
    p && p.addEventListener("abort", m);
    function G() {
      g.abort(), p && p.removeEventListener("abort", m), clearTimeout(v);
    }
    s.timeout && g.once("socket", function($) {
      v = setTimeout(function() {
        o(new FetchError(`network timeout at: ${s.url}`, "request-timeout")), G();
      }, s.timeout);
    }), g.on("error", function($) {
      o(new FetchError(`request to ${s.url} failed, reason: ${$.message}`, "system", $)), G();
    }), g.on("response", function($) {
      clearTimeout(v);
      const j = createHeadersLenient($.headers);
      if (fetch.isRedirect($.statusCode)) {
        const b = j.get("Location"), O = b === null ? null : resolve_url(s.url, b);
        switch (s.redirect) {
          case "error":
            o(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${s.url}`, "no-redirect")), G();
            return;
          case "manual":
            if (O !== null)
              try {
                j.set("Location", O);
              } catch (k) {
                o(k);
              }
            break;
          case "follow":
            if (O === null)
              break;
            if (s.counter >= s.follow) {
              o(new FetchError(`maximum redirect reached at: ${s.url}`, "max-redirect")), G();
              return;
            }
            const A = {
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
            if ($.statusCode !== 303 && s.body && getTotalBytes(s) === null) {
              o(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect")), G();
              return;
            }
            ($.statusCode === 303 || ($.statusCode === 301 || $.statusCode === 302) && s.method === "POST") && (A.method = "GET", A.body = void 0, A.headers.delete("content-length")), n(fetch(new Request(O, A))), G();
            return;
        }
      }
      $.once("end", function() {
        p && p.removeEventListener("abort", m);
      });
      let y = $.pipe(new PassThrough$1());
      const w = {
        url: s.url,
        status: $.statusCode,
        statusText: $.statusMessage,
        headers: j,
        size: s.size,
        timeout: s.timeout,
        counter: s.counter
      }, T = j.get("Content-Encoding");
      if (!s.compress || s.method === "HEAD" || T === null || $.statusCode === 204 || $.statusCode === 304) {
        h = new Response(y, w), n(h);
        return;
      }
      const _ = {
        flush: zlib__default.default.Z_SYNC_FLUSH,
        finishFlush: zlib__default.default.Z_SYNC_FLUSH
      };
      if (T == "gzip" || T == "x-gzip") {
        y = y.pipe(zlib__default.default.createGunzip(_)), h = new Response(y, w), n(h);
        return;
      }
      if (T == "deflate" || T == "x-deflate") {
        $.pipe(new PassThrough$1()).once("data", function(O) {
          (O[0] & 15) == 8 ? y = y.pipe(zlib__default.default.createInflate()) : y = y.pipe(zlib__default.default.createInflateRaw()), h = new Response(y, w), n(h);
        });
        return;
      }
      if (T == "br" && typeof zlib__default.default.createBrotliDecompress == "function") {
        y = y.pipe(zlib__default.default.createBrotliDecompress()), h = new Response(y, w), n(h);
        return;
      }
      h = new Response(y, w), n(h);
    }), writeToStream(g, s);
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
  return Object.keys(e).forEach(function(o) {
    n[o] = e[o];
  }), n;
  function n() {
    for (var o = new Array(arguments.length), s = 0; s < o.length; s++)
      o[s] = arguments[s];
    var a = e.apply(this, o), u = o[o.length - 1];
    return typeof a == "function" && a !== u && Object.keys(u).forEach(function(p) {
      a[p] = u[p];
    }), a;
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
  }, n = e.name || "Function wrapped with `once`";
  return t.onceError = n + " shouldn't be called more than once", t.called = !1, t;
}
once_1.strict = strict;
const logOnce = once_1((e) => console.warn(e));
class RequestError extends Error {
  constructor(t, n, o) {
    super(t);
    Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.name = "HttpError", this.status = n, Object.defineProperty(this, "code", {
      get() {
        return logOnce(new Deprecation("[@octokit/request-error] `error.code` is deprecated, use `error.status`.")), n;
      }
    }), this.headers = o.headers || {};
    const s = Object.assign({}, o.request);
    o.request.headers.authorization && (s.headers = Object.assign({}, o.request.headers, {
      authorization: o.request.headers.authorization.replace(/ .*$/, " [REDACTED]")
    })), s.url = s.url.replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]").replace(/\baccess_token=\w+/g, "access_token=[REDACTED]"), this.request = s;
  }
}
const VERSION$4 = "5.4.12";
function getBufferResponse(e) {
  return e.arrayBuffer();
}
function fetchWrapper(e) {
  (isPlainObject(e.body) || Array.isArray(e.body)) && (e.body = JSON.stringify(e.body));
  let t = {}, n, o;
  return (e.request && e.request.fetch || fetch)(e.url, Object.assign({
    method: e.method,
    body: e.body,
    headers: e.headers,
    redirect: e.redirect
  }, e.request)).then((a) => {
    o = a.url, n = a.status;
    for (const p of a.headers)
      t[p[0]] = p[1];
    if (n === 204 || n === 205)
      return;
    if (e.method === "HEAD") {
      if (n < 400)
        return;
      throw new RequestError(a.statusText, n, {
        headers: t,
        request: e
      });
    }
    if (n === 304)
      throw new RequestError("Not modified", n, {
        headers: t,
        request: e
      });
    if (n >= 400)
      return a.text().then((p) => {
        const h = new RequestError(p, n, {
          headers: t,
          request: e
        });
        try {
          let d = JSON.parse(h.message);
          Object.assign(h, d);
          let m = d.errors;
          h.message = h.message + ": " + m.map(JSON.stringify).join(", ");
        } catch (d) {
        }
        throw h;
      });
    const u = a.headers.get("content-type");
    return /application\/json/.test(u) ? a.json() : !u || /^text\/|charset=utf-8$/.test(u) ? a.text() : getBufferResponse(a);
  }).then((a) => ({
    status: n,
    url: o,
    headers: t,
    data: a
  })).catch((a) => {
    throw a instanceof RequestError ? a : new RequestError(a.message, 500, {
      headers: t,
      request: e
    });
  });
}
function withDefaults$1(e, t) {
  const n = e.defaults(t);
  return Object.assign(function(s, a) {
    const u = n.merge(s, a);
    if (!u.request || !u.request.hook)
      return fetchWrapper(n.parse(u));
    const p = (h, d) => fetchWrapper(n.parse(n.merge(h, d)));
    return Object.assign(p, {
      endpoint: n,
      defaults: withDefaults$1.bind(null, n)
    }), u.request.hook(p, u);
  }, {
    endpoint: n,
    defaults: withDefaults$1.bind(null, n)
  });
}
const request = withDefaults$1(endpoint, {
  headers: {
    "user-agent": `octokit-request.js/${VERSION$4} ${getUserAgent()}`
  }
}), VERSION$3 = "4.5.8";
class GraphqlError extends Error {
  constructor(t, n) {
    const o = n.data.errors[0].message;
    super(o);
    Object.assign(this, n.data), Object.assign(this, { headers: n.headers }), this.name = "GraphqlError", this.request = t, Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
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
function graphql(e, t, n) {
  if (typeof t == "string" && n && "query" in n)
    return Promise.reject(new Error('[@octokit/graphql] "query" cannot be used as variable name'));
  const o = typeof t == "string" ? Object.assign({ query: t }, n) : t, s = Object.keys(o).reduce((u, p) => NON_VARIABLE_OPTIONS.includes(p) ? (u[p] = o[p], u) : (u.variables || (u.variables = {}), u.variables[p] = o[p], u), {}), a = o.baseUrl || e.endpoint.DEFAULTS.baseUrl;
  return GHES_V3_SUFFIX_REGEX.test(a) && (s.url = a.replace(GHES_V3_SUFFIX_REGEX, "/api/graphql")), e(s).then((u) => {
    if (u.data.errors) {
      const p = {};
      for (const h of Object.keys(u.headers))
        p[h] = u.headers[h];
      throw new GraphqlError(s, {
        headers: p,
        data: u.data
      });
    }
    return u.data.data;
  });
}
function withDefaults(e, t) {
  const n = e.defaults(t);
  return Object.assign((s, a) => graphql(n, s, a), {
    defaults: withDefaults.bind(null, n),
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
async function hook(e, t, n, o) {
  const s = t.endpoint.merge(n, o);
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
    const n = new Collection(), o = {
      baseUrl: request.endpoint.DEFAULTS.baseUrl,
      headers: {},
      request: Object.assign({}, t.request, {
        hook: n.bind(null, "request")
      }),
      mediaType: {
        previews: [],
        format: ""
      }
    };
    if (o.headers["user-agent"] = [
      t.userAgent,
      `octokit-core.js/${VERSION$2} ${getUserAgent()}`
    ].filter(Boolean).join(" "), t.baseUrl && (o.baseUrl = t.baseUrl), t.previews && (o.mediaType.previews = t.previews), t.timeZone && (o.headers["time-zone"] = t.timeZone), this.request = request.defaults(o), this.graphql = withCustomRequest(this.request).defaults(o), this.log = Object.assign({
      debug: () => {
      },
      info: () => {
      },
      warn: console.warn.bind(console),
      error: console.error.bind(console)
    }, t.log), this.hook = n, t.authStrategy) {
      const a = t, { authStrategy: u } = a, p = X(a, ["authStrategy"]), h = u(Object.assign({
        request: this.request,
        log: this.log,
        octokit: this,
        octokitOptions: p
      }, t.auth));
      n.wrap("request", h.hook), this.auth = h;
    } else if (!t.auth)
      this.auth = async () => ({
        type: "unauthenticated"
      });
    else {
      const u = createTokenAuth(t.auth);
      n.wrap("request", u.hook), this.auth = u;
    }
    this.constructor.plugins.forEach((u) => {
      Object.assign(this, u(this, t));
    });
  }
  static defaults(t) {
    return class extends this {
      constructor(...o) {
        const s = o[0] || {};
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
    var n;
    const o = this.plugins;
    return n = class extends this {
    }, n.plugins = o.concat(t.filter((a) => !o.includes(a))), n;
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
  const n = {};
  for (const [o, s] of Object.entries(t))
    for (const [a, u] of Object.entries(s)) {
      const [p, h, d] = u, [m, g] = p.split(/ /), v = Object.assign({ method: m, url: g }, h);
      n[o] || (n[o] = {});
      const G = n[o];
      if (d) {
        G[a] = decorate(e, o, a, v, d);
        continue;
      }
      G[a] = e.request.defaults(v);
    }
  return n;
}
function decorate(e, t, n, o, s) {
  const a = e.request.defaults(o);
  function u(...p) {
    let h = a.endpoint.merge(...p);
    if (s.mapToData)
      return h = Object.assign({}, h, {
        data: h[s.mapToData],
        [s.mapToData]: void 0
      }), a(h);
    if (s.renamed) {
      const [d, m] = s.renamed;
      e.log.warn(`octokit.${t}.${n}() has been renamed to octokit.${d}.${m}()`);
    }
    if (s.deprecated && e.log.warn(s.deprecated), s.renamedParameters) {
      const d = a.endpoint.merge(...p);
      for (const [m, g] of Object.entries(s.renamedParameters))
        m in d && (e.log.warn(`"${m}" parameter is deprecated for "octokit.${t}.${n}()". Use "${g}" instead`), g in d || (d[g] = d[m]), delete d[m]);
      return a(d);
    }
    return a(...p);
  }
  return Object.assign(u, a);
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
  const n = e.data.incomplete_results, o = e.data.repository_selection, s = e.data.total_count;
  delete e.data.incomplete_results, delete e.data.repository_selection, delete e.data.total_count;
  const a = Object.keys(e.data)[0], u = e.data[a];
  return e.data = u, typeof n != "undefined" && (e.data.incomplete_results = n), typeof o != "undefined" && (e.data.repository_selection = o), e.data.total_count = s, e;
}
function iterator(e, t, n) {
  const o = typeof t == "function" ? t.endpoint(n) : e.request.endpoint(t, n), s = typeof t == "function" ? t : e.request, a = o.method, u = o.headers;
  let p = o.url;
  return {
    [Symbol.asyncIterator]: () => ({
      async next() {
        if (!p)
          return { done: !0 };
        const h = await s({ method: a, url: p, headers: u }), d = normalizePaginatedListResponse(h);
        return p = ((d.headers.link || "").match(/<([^>]+)>;\s*rel="next"/) || [])[1], { value: d };
      }
    })
  };
}
function paginate(e, t, n, o) {
  return typeof n == "function" && (o = n, n = void 0), gather(e, [], iterator(e, t, n)[Symbol.asyncIterator](), o);
}
function gather(e, t, n, o) {
  return n.next().then((s) => {
    if (s.done)
      return t;
    let a = !1;
    function u() {
      a = !0;
    }
    return t = t.concat(o ? o(s.value, u) : s.value.data), a ? t : gather(e, t, n, o);
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
  var n = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(m, g, v, G) {
    G === void 0 && (G = v), Object.defineProperty(m, G, { enumerable: !0, get: function() {
      return g[v];
    } });
  } : function(m, g, v, G) {
    G === void 0 && (G = v), m[G] = g[v];
  }), o = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(m, g) {
    Object.defineProperty(m, "default", { enumerable: !0, value: g });
  } : function(m, g) {
    m.default = g;
  }), s = commonjsGlobal && commonjsGlobal.__importStar || function(m) {
    if (m && m.__esModule)
      return m;
    var g = {};
    if (m != null)
      for (var v in m)
        Object.hasOwnProperty.call(m, v) && n(g, m, v);
    return o(g, m), g;
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.getOctokitOptions = t.GitHub = t.context = void 0;
  const a = s(context), u = s(utils$1);
  t.context = new a.Context();
  const p = u.getApiBaseUrl(), h = {
    baseUrl: p,
    request: {
      agent: u.getProxyAgent(p)
    }
  };
  t.GitHub = core_1.Octokit.plugin(plugin_rest_endpoint_methods_1.restEndpointMethods, plugin_paginate_rest_1.paginateRest).defaults(h);
  function d(m, g) {
    const v = Object.assign({}, g || {}), G = u.getAuthString(m, v);
    return G && (v.auth = G), v;
  }
  t.getOctokitOptions = d;
}), github = createCommonjsModule(function(e, t) {
  var n = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(p, h, d, m) {
    m === void 0 && (m = d), Object.defineProperty(p, m, { enumerable: !0, get: function() {
      return h[d];
    } });
  } : function(p, h, d, m) {
    m === void 0 && (m = d), p[m] = h[d];
  }), o = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(p, h) {
    Object.defineProperty(p, "default", { enumerable: !0, value: h });
  } : function(p, h) {
    p.default = h;
  }), s = commonjsGlobal && commonjsGlobal.__importStar || function(p) {
    if (p && p.__esModule)
      return p;
    var h = {};
    if (p != null)
      for (var d in p)
        Object.hasOwnProperty.call(p, d) && n(h, p, d);
    return o(h, p), h;
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.getOctokit = t.context = void 0;
  const a = s(context);
  t.context = new a.Context();
  function u(p, h) {
    return new utils.GitHub(utils.getOctokitOptions(p, h));
  }
  t.getOctokit = u;
});
const c$1 = (e) => `\`${e}\``, link = (e, t) => `[${e}](${t})`, sub = (e) => `<sub>${e}</sub>`, sup = (e) => `<sup>${e}</sup>`, strong = (e) => `**${e}**`;
var __defProp$4 = Object.defineProperty, __defProps$4 = Object.defineProperties, __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$4 = Object.getOwnPropertySymbols, __hasOwnProp$4 = Object.prototype.hasOwnProperty, __propIsEnum$4 = Object.prototype.propertyIsEnumerable, __defNormalProp$4 = (e, t, n) => t in e ? __defProp$4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, __spreadValues$4 = (e, t) => {
  for (var n in t || (t = {}))
    __hasOwnProp$4.call(t, n) && __defNormalProp$4(e, n, t[n]);
  if (__getOwnPropSymbols$4)
    for (var n of __getOwnPropSymbols$4(t))
      __propIsEnum$4.call(t, n) && __defNormalProp$4(e, n, t[n]);
  return e;
}, __spreadProps$4 = (e, t) => __defProps$4(e, __getOwnPropDescs$4(t));
async function upsertComment({
  token: e,
  commentSignature: t,
  repo: n,
  prNumber: o,
  body: s
}) {
  core.startGroup("Comment on PR"), s += `

${t}`;
  const a = github.getOctokit(e);
  core.info("Getting list of comments");
  const { data: u } = await a.issues.listComments(__spreadProps$4(__spreadValues$4({}, n), {
    issue_number: o
  })), p = u.find((h) => h.body.endsWith(t));
  p ? (core.info(`Updating previous comment ID ${p.id}`), await a.issues.updateComment(__spreadProps$4(__spreadValues$4({}, n), {
    comment_id: p.id,
    body: s
  }))) : (core.info("Posting new comment"), await a.issues.createComment(__spreadProps$4(__spreadValues$4({}, n), {
    issue_number: o,
    body: s
  }))), core.endGroup();
}
var dist = createCommonjsModule(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(commonjsGlobal, function() {
    let n = {};
    const o = new WeakMap();
    class s {
      constructor(p, h) {
        h = Object.assign({
          units: "metric",
          precision: 1
        }, n, h), o.set(this, h);
        const d = {
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
        Object.assign(d, h.customUnits);
        const m = p < 0 ? "-" : "";
        p = Math.abs(p);
        const g = d[h.units];
        if (g) {
          const v = g.find((G) => p >= G.from && p < G.to);
          if (v) {
            const G = v.from === 0 ? m + p : m + (p / v.from).toFixed(h.precision);
            this.value = G, this.unit = v.unit, this.long = v.long;
          } else
            this.value = m + p, this.unit = "", this.long = "";
        } else
          throw new Error(`Invalid units specified: ${h.units}`);
      }
      toString() {
        const p = o.get(this);
        return p.toStringFn ? p.toStringFn.bind(this)() : `${this.value} ${this.unit}`;
      }
    }
    function a(u, p) {
      return new s(u, p);
    }
    return a.defaultOptions = function(u) {
      n = u;
    }, a;
  });
});
/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */
var res = "", cache, repeatString = repeat;
function repeat(e, t) {
  if (typeof e != "string")
    throw new TypeError("expected a string");
  if (t === 1)
    return e;
  if (t === 2)
    return e + e;
  var n = e.length * t;
  if (cache !== e || typeof cache == "undefined")
    cache = e, res = "";
  else if (res.length >= n)
    return res.substr(0, n);
  for (; n > res.length && t > 1; )
    t & 1 && (res += e), t >>= 1, e += e;
  return res += e, res = res.substr(0, n), res;
}
var markdownTable_1 = markdownTable, trailingWhitespace = / +$/, space = " ", lineFeed = `
`, dash = "-", colon = ":", verticalBar = "|", x = 0, C = 67, L = 76, R = 82, c = 99, l = 108, r = 114;
function markdownTable(e, t) {
  for (var n = t || {}, o = n.padding !== !1, s = n.delimiterStart !== !1, a = n.delimiterEnd !== !1, u = (n.align || []).concat(), p = n.alignDelimiters !== !1, h = [], d = n.stringLength || defaultStringLength, m = -1, g = e.length, v = [], G = [], $ = [], j = [], y = [], w = 0, T, _, b, O, A, k, P, E, S, U, I; ++m < g; ) {
    for (T = e[m], _ = -1, b = T.length, $ = [], j = [], b > w && (w = b); ++_ < b; )
      k = serialize(T[_]), p === !0 && (A = d(k), j[_] = A, O = y[_], (O === void 0 || A > O) && (y[_] = A)), $.push(k);
    v[m] = $, G[m] = j;
  }
  if (_ = -1, b = w, typeof u == "object" && "length" in u)
    for (; ++_ < b; )
      h[_] = toAlignment(u[_]);
  else
    for (I = toAlignment(u); ++_ < b; )
      h[_] = I;
  for (_ = -1, b = w, $ = [], j = []; ++_ < b; )
    I = h[_], S = "", U = "", I === l ? S = colon : I === r ? U = colon : I === c && (S = colon, U = colon), A = p ? Math.max(1, y[_] - S.length - U.length) : 1, k = S + repeatString(dash, A) + U, p === !0 && (A = S.length + A + U.length, A > y[_] && (y[_] = A), j[_] = A), $[_] = k;
  for (v.splice(1, 0, $), G.splice(1, 0, j), m = -1, g = v.length, P = []; ++m < g; ) {
    for ($ = v[m], j = G[m], _ = -1, b = w, E = []; ++_ < b; )
      k = $[_] || "", S = "", U = "", p === !0 && (A = y[_] - (j[_] || 0), I = h[_], I === r ? S = repeatString(space, A) : I === c ? A % 2 == 0 ? (S = repeatString(space, A / 2), U = S) : (S = repeatString(space, A / 2 + 0.5), U = repeatString(space, A / 2 - 0.5)) : U = repeatString(space, A)), s === !0 && _ === 0 && E.push(verticalBar), o === !0 && !(p === !1 && k === "") && (s === !0 || _ !== 0) && E.push(space), p === !0 && E.push(S), E.push(k), p === !0 && E.push(U), o === !0 && E.push(space), (a === !0 || _ !== b - 1) && E.push(verticalBar);
    E = E.join(""), a === !1 && (E = E.replace(trailingWhitespace, "")), P.push(E);
  }
  return P.join(lineFeed);
}
function serialize(e) {
  return e == null ? "" : String(e);
}
function defaultStringLength(e) {
  return e.length;
}
function toAlignment(e) {
  var t = typeof e == "string" ? e.charCodeAt(0) : x;
  return t === L || t === l ? l : t === R || t === r ? r : t === C || t === c ? c : x;
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
  for (var n in t)
    has(t, n) && (e[n] = t[n]);
  return e;
}
var reLeadingNewline = /^[ \t]*(?:\r\n|\r|\n)/, reTrailingNewline = /(?:\r\n|\r|\n)[ \t]*$/, reStartsWithNewlineOrIsEmpty = /^(?:[\r\n]|$)/, reDetectIndentation = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/, reOnlyWhitespaceWithAtLeastOneNewline = /^[ \t]*[\r\n][ \t\r\n]*$/;
function _outdentArray(e, t, n) {
  var o = 0, s = e[0].match(reDetectIndentation);
  s && (o = s[1].length);
  var a = "(\\r\\n|\\r|\\n).{0," + o + "}", u = new RegExp(a, "g");
  t && (e = e.slice(1));
  var p = n.newline, h = n.trimLeadingNewline, d = n.trimTrailingNewline, m = typeof p == "string", g = e.length, v = e.map(function(G, $) {
    return G = G.replace(u, "$1"), $ === 0 && h && (G = G.replace(reLeadingNewline, "")), $ === g - 1 && d && (G = G.replace(reTrailingNewline, "")), m && (G = G.replace(/\r\n|\n|\r/g, function(j) {
      return p;
    })), G;
  });
  return v;
}
function concatStringsAndValues(e, t) {
  for (var n = "", o = 0, s = e.length; o < s; o++)
    n += e[o], o < s - 1 && (n += t[o]);
  return n;
}
function isTemplateStringsArray(e) {
  return has(e, "raw") && has(e, "length");
}
function createInstance(e) {
  var t = createWeakMap(), n = createWeakMap();
  function o(a) {
    for (var u = [], p = 1; p < arguments.length; p++)
      u[p - 1] = arguments[p];
    if (isTemplateStringsArray(a)) {
      var h = a, d = (u[0] === o || u[0] === defaultOutdent) && reOnlyWhitespaceWithAtLeastOneNewline.test(h[0]) && reStartsWithNewlineOrIsEmpty.test(h[1]), m = d ? n : t, g = m.get(h);
      if (g || (g = _outdentArray(h, d, e), m.set(h, g)), u.length === 0)
        return g[0];
      var v = concatStringsAndValues(g, d ? u.slice(1) : u);
      return v;
    } else
      return createInstance(extend(extend({}, e), a || {}));
  }
  var s = extend(o, {
    string: function(a) {
      return _outdentArray([a], !1, e)[0];
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
  var t = hasOwnProperty$8.call(e, symToStringTag$1), n = e[symToStringTag$1];
  try {
    e[symToStringTag$1] = void 0;
    var o = !0;
  } catch (a) {
  }
  var s = nativeObjectToString$1.call(e);
  return o && (t ? e[symToStringTag$1] = n : delete e[symToStringTag$1]), s;
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
  for (var n = -1, o = e == null ? 0 : e.length, s = Array(o); ++n < o; )
    s[n] = t(e[n], n, e);
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
  var n = reIsBinary.test(e);
  return n || reIsOctal.test(e) ? freeParseInt(e.slice(2), n ? 2 : 8) : reIsBadHex.test(e) ? NAN : +e;
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
  var t = toFinite(e), n = t % 1;
  return t === t ? n ? t - n : t : 0;
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
  var n = getValue(e, t);
  return baseIsNative(n) ? n : void 0;
}
var WeakMap$1 = getNative(root$1, "WeakMap"), WeakMap$2 = WeakMap$1, MAX_SAFE_INTEGER$1 = 9007199254740991, reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(e, t) {
  var n = typeof e;
  return t = t == null ? MAX_SAFE_INTEGER$1 : t, !!t && (n == "number" || n != "symbol" && reIsUint.test(e)) && e > -1 && e % 1 == 0 && e < t;
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
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || objectProto$8;
  return e === n;
}
function baseTimes(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
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
  var n = isArray$1(e), o = !n && isArguments$1(e), s = !n && !o && isBuffer$1(e), a = !n && !o && !s && isTypedArray$1(e), u = n || o || s || a, p = u ? baseTimes(e.length, String) : [], h = p.length;
  for (var d in e)
    (t || hasOwnProperty$5.call(e, d)) && !(u && (d == "length" || s && (d == "offset" || d == "parent") || a && (d == "buffer" || d == "byteLength" || d == "byteOffset") || isIndex(d, h))) && p.push(d);
  return p;
}
function overArg(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var nativeKeys = overArg(Object.keys, Object), nativeKeys$1 = nativeKeys, objectProto$5 = Object.prototype, hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function baseKeys(e) {
  if (!isPrototype(e))
    return nativeKeys$1(e);
  var t = [];
  for (var n in Object(e))
    hasOwnProperty$4.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function keys(e) {
  return isArrayLike(e) ? arrayLikeKeys(e) : baseKeys(e);
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(e, t) {
  if (isArray$1(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || isSymbol(e) ? !0 : reIsPlainProp.test(e) || !reIsDeepProp.test(e) || t != null && e in Object(t);
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
    var n = t[e];
    return n === HASH_UNDEFINED$2 ? void 0 : n;
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
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = nativeCreate$1 && t === void 0 ? HASH_UNDEFINED$1 : t, this;
}
function Hash(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Hash.prototype.clear = hashClear, Hash.prototype.delete = hashDelete, Hash.prototype.get = hashGet, Hash.prototype.has = hashHas, Hash.prototype.set = hashSet;
function listCacheClear() {
  this.__data__ = [], this.size = 0;
}
function assocIndexOf(e, t) {
  for (var n = e.length; n--; )
    if (eq(e[n][0], t))
      return n;
  return -1;
}
var arrayProto = Array.prototype, splice = arrayProto.splice;
function listCacheDelete(e) {
  var t = this.__data__, n = assocIndexOf(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : splice.call(t, n, 1), --this.size, !0;
}
function listCacheGet(e) {
  var t = this.__data__, n = assocIndexOf(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function listCacheHas(e) {
  return assocIndexOf(this.__data__, e) > -1;
}
function listCacheSet(e, t) {
  var n = this.__data__, o = assocIndexOf(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function ListCache(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
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
  var n = e.__data__;
  return isKeyable(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
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
  var n = getMapData(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function MapCache(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
MapCache.prototype.clear = mapCacheClear, MapCache.prototype.delete = mapCacheDelete, MapCache.prototype.get = mapCacheGet, MapCache.prototype.has = mapCacheHas, MapCache.prototype.set = mapCacheSet;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(FUNC_ERROR_TEXT);
  var n = function() {
    var o = arguments, s = t ? t.apply(this, o) : o[0], a = n.cache;
    if (a.has(s))
      return a.get(s);
    var u = e.apply(this, o);
    return n.cache = a.set(s, u) || a, u;
  };
  return n.cache = new (memoize.Cache || MapCache)(), n;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(e) {
  var t = memoize(e, function(o) {
    return n.size === MAX_MEMOIZE_SIZE && n.clear(), o;
  }), n = t.cache;
  return t;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, reEscapeChar = /\\(\\)?/g, stringToPath = memoizeCapped(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(rePropName, function(n, o, s, a) {
    t.push(s ? a.replace(reEscapeChar, "$1") : o || n);
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
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[toKey(t[n++])];
  return n && n == o ? e : void 0;
}
function get(e, t, n) {
  var o = e == null ? void 0 : baseGet(e, t);
  return o === void 0 ? n : o;
}
function arrayPush(e, t) {
  for (var n = -1, o = t.length, s = e.length; ++n < o; )
    e[s + n] = t[n];
  return e;
}
var nativeIsFinite = root$1.isFinite, nativeMin = Math.min;
function createRound(e) {
  var t = Math[e];
  return function(n, o) {
    if (n = toNumber(n), o = o == null ? 0 : nativeMin(toInteger(o), 292), o && nativeIsFinite(n)) {
      var s = (toString(n) + "e").split("e"), a = t(s[0] + "e" + (+s[1] + o));
      return s = (toString(a) + "e").split("e"), +(s[0] + "e" + (+s[1] - o));
    }
    return t(n);
  };
}
function stackClear() {
  this.__data__ = new ListCache(), this.size = 0;
}
function stackDelete(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function stackGet(e) {
  return this.__data__.get(e);
}
function stackHas(e) {
  return this.__data__.has(e);
}
var LARGE_ARRAY_SIZE = 200;
function stackSet(e, t) {
  var n = this.__data__;
  if (n instanceof ListCache) {
    var o = n.__data__;
    if (!Map$1 || o.length < LARGE_ARRAY_SIZE - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new MapCache(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Stack(e) {
  var t = this.__data__ = new ListCache(e);
  this.size = t.size;
}
Stack.prototype.clear = stackClear, Stack.prototype.delete = stackDelete, Stack.prototype.get = stackGet, Stack.prototype.has = stackHas, Stack.prototype.set = stackSet;
function arrayFilter(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, s = 0, a = []; ++n < o; ) {
    var u = e[n];
    t(u, n, e) && (a[s++] = u);
  }
  return a;
}
function stubArray() {
  return [];
}
var objectProto$2 = Object.prototype, propertyIsEnumerable = objectProto$2.propertyIsEnumerable, nativeGetSymbols = Object.getOwnPropertySymbols, getSymbols = nativeGetSymbols ? function(e) {
  return e == null ? [] : (e = Object(e), arrayFilter(nativeGetSymbols(e), function(t) {
    return propertyIsEnumerable.call(e, t);
  }));
} : stubArray, getSymbols$1 = getSymbols;
function baseGetAllKeys(e, t, n) {
  var o = t(e);
  return isArray$1(e) ? o : arrayPush(o, n(e));
}
function getAllKeys(e) {
  return baseGetAllKeys(e, keys, getSymbols$1);
}
var DataView = getNative(root$1, "DataView"), DataView$1 = DataView, Promise$1 = getNative(root$1, "Promise"), Promise$2 = Promise$1, Set = getNative(root$1, "Set"), Set$1 = Set, mapTag$1 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$1 = "[object Set]", weakMapTag = "[object WeakMap]", dataViewTag$1 = "[object DataView]", dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap$2), getTag = baseGetTag;
(DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$1 || Map$1 && getTag(new Map$1()) != mapTag$1 || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag$1 || WeakMap$2 && getTag(new WeakMap$2()) != weakMapTag) && (getTag = function(e) {
  var t = baseGetTag(e), n = t == objectTag$1 ? e.constructor : void 0, o = n ? toSource(n) : "";
  if (o)
    switch (o) {
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
var getTag$1 = getTag, Uint8Array$1 = root$1.Uint8Array, Uint8Array$2 = Uint8Array$1, HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(e) {
  return this.__data__.set(e, HASH_UNDEFINED), this;
}
function setCacheHas(e) {
  return this.__data__.has(e);
}
function SetCache(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new MapCache(); ++t < n; )
    this.add(e[t]);
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd, SetCache.prototype.has = setCacheHas;
function arraySome(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function cacheHas(e, t) {
  return e.has(t);
}
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays(e, t, n, o, s, a) {
  var u = n & COMPARE_PARTIAL_FLAG$5, p = e.length, h = t.length;
  if (p != h && !(u && h > p))
    return !1;
  var d = a.get(e), m = a.get(t);
  if (d && m)
    return d == t && m == e;
  var g = -1, v = !0, G = n & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
  for (a.set(e, t), a.set(t, e); ++g < p; ) {
    var $ = e[g], j = t[g];
    if (o)
      var y = u ? o(j, $, g, t, e, a) : o($, j, g, e, t, a);
    if (y !== void 0) {
      if (y)
        continue;
      v = !1;
      break;
    }
    if (G) {
      if (!arraySome(t, function(w, T) {
        if (!cacheHas(G, T) && ($ === w || s($, w, n, o, a)))
          return G.push(T);
      })) {
        v = !1;
        break;
      }
    } else if (!($ === j || s($, j, n, o, a))) {
      v = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), v;
}
function mapToArray(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, s) {
    n[++t] = [s, o];
  }), n;
}
function setToArray(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2, boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(e, t, n, o, s, a, u) {
  switch (n) {
    case dataViewTag:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case arrayBufferTag:
      return !(e.byteLength != t.byteLength || !a(new Uint8Array$2(e), new Uint8Array$2(t)));
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
      var p = mapToArray;
    case setTag:
      var h = o & COMPARE_PARTIAL_FLAG$4;
      if (p || (p = setToArray), e.size != t.size && !h)
        return !1;
      var d = u.get(e);
      if (d)
        return d == t;
      o |= COMPARE_UNORDERED_FLAG$2, u.set(e, t);
      var m = equalArrays(p(e), p(t), o, s, a, u);
      return u.delete(e), m;
    case symbolTag:
      if (symbolValueOf)
        return symbolValueOf.call(e) == symbolValueOf.call(t);
  }
  return !1;
}
var COMPARE_PARTIAL_FLAG$3 = 1, objectProto$1 = Object.prototype, hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function equalObjects(e, t, n, o, s, a) {
  var u = n & COMPARE_PARTIAL_FLAG$3, p = getAllKeys(e), h = p.length, d = getAllKeys(t), m = d.length;
  if (h != m && !u)
    return !1;
  for (var g = h; g--; ) {
    var v = p[g];
    if (!(u ? v in t : hasOwnProperty$1.call(t, v)))
      return !1;
  }
  var G = a.get(e), $ = a.get(t);
  if (G && $)
    return G == t && $ == e;
  var j = !0;
  a.set(e, t), a.set(t, e);
  for (var y = u; ++g < h; ) {
    v = p[g];
    var w = e[v], T = t[v];
    if (o)
      var _ = u ? o(T, w, v, t, e, a) : o(w, T, v, e, t, a);
    if (!(_ === void 0 ? w === T || s(w, T, n, o, a) : _)) {
      j = !1;
      break;
    }
    y || (y = v == "constructor");
  }
  if (j && !y) {
    var b = e.constructor, O = t.constructor;
    b != O && "constructor" in e && "constructor" in t && !(typeof b == "function" && b instanceof b && typeof O == "function" && O instanceof O) && (j = !1);
  }
  return a.delete(e), a.delete(t), j;
}
var COMPARE_PARTIAL_FLAG$2 = 1, argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]", objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty;
function baseIsEqualDeep(e, t, n, o, s, a) {
  var u = isArray$1(e), p = isArray$1(t), h = u ? arrayTag : getTag$1(e), d = p ? arrayTag : getTag$1(t);
  h = h == argsTag ? objectTag : h, d = d == argsTag ? objectTag : d;
  var m = h == objectTag, g = d == objectTag, v = h == d;
  if (v && isBuffer$1(e)) {
    if (!isBuffer$1(t))
      return !1;
    u = !0, m = !1;
  }
  if (v && !m)
    return a || (a = new Stack()), u || isTypedArray$1(e) ? equalArrays(e, t, n, o, s, a) : equalByTag(e, t, h, n, o, s, a);
  if (!(n & COMPARE_PARTIAL_FLAG$2)) {
    var G = m && hasOwnProperty.call(e, "__wrapped__"), $ = g && hasOwnProperty.call(t, "__wrapped__");
    if (G || $) {
      var j = G ? e.value() : e, y = $ ? t.value() : t;
      return a || (a = new Stack()), s(j, y, n, o, a);
    }
  }
  return v ? (a || (a = new Stack()), equalObjects(e, t, n, o, s, a)) : !1;
}
function baseIsEqual(e, t, n, o, s) {
  return e === t ? !0 : e == null || t == null || !isObjectLike(e) && !isObjectLike(t) ? e !== e && t !== t : baseIsEqualDeep(e, t, n, o, baseIsEqual, s);
}
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch(e, t, n, o) {
  var s = n.length, a = s, u = !o;
  if (e == null)
    return !a;
  for (e = Object(e); s--; ) {
    var p = n[s];
    if (u && p[2] ? p[1] !== e[p[0]] : !(p[0] in e))
      return !1;
  }
  for (; ++s < a; ) {
    p = n[s];
    var h = p[0], d = e[h], m = p[1];
    if (u && p[2]) {
      if (d === void 0 && !(h in e))
        return !1;
    } else {
      var g = new Stack();
      if (o)
        var v = o(d, m, h, e, t, g);
      if (!(v === void 0 ? baseIsEqual(m, d, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, o, g) : v))
        return !1;
    }
  }
  return !0;
}
function isStrictComparable(e) {
  return e === e && !isObject(e);
}
function getMatchData(e) {
  for (var t = keys(e), n = t.length; n--; ) {
    var o = t[n], s = e[o];
    t[n] = [o, s, isStrictComparable(s)];
  }
  return t;
}
function matchesStrictComparable(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function baseMatches(e) {
  var t = getMatchData(e);
  return t.length == 1 && t[0][2] ? matchesStrictComparable(t[0][0], t[0][1]) : function(n) {
    return n === e || baseIsMatch(n, e, t);
  };
}
function baseHasIn(e, t) {
  return e != null && t in Object(e);
}
function hasPath(e, t, n) {
  t = castPath(t, e);
  for (var o = -1, s = t.length, a = !1; ++o < s; ) {
    var u = toKey(t[o]);
    if (!(a = e != null && n(e, u)))
      break;
    e = e[u];
  }
  return a || ++o != s ? a : (s = e == null ? 0 : e.length, !!s && isLength(s) && isIndex(u, s) && (isArray$1(e) || isArguments$1(e)));
}
function hasIn(e, t) {
  return e != null && hasPath(e, t, baseHasIn);
}
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty(e, t) {
  return isKey(e) && isStrictComparable(t) ? matchesStrictComparable(toKey(e), t) : function(n) {
    var o = get(n, e);
    return o === void 0 && o === t ? hasIn(n, e) : baseIsEqual(t, o, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
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
function arrayAggregator(e, t, n, o) {
  for (var s = -1, a = e == null ? 0 : e.length; ++s < a; ) {
    var u = e[s];
    t(o, u, n(u), e);
  }
  return o;
}
function createBaseFor(e) {
  return function(t, n, o) {
    for (var s = -1, a = Object(t), u = o(t), p = u.length; p--; ) {
      var h = u[e ? p : ++s];
      if (n(a[h], h, a) === !1)
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
  return function(n, o) {
    if (n == null)
      return n;
    if (!isArrayLike(n))
      return e(n, o);
    for (var s = n.length, a = t ? s : -1, u = Object(n); (t ? a-- : ++a < s) && o(u[a], a, u) !== !1; )
      ;
    return n;
  };
}
var baseEach = createBaseEach(baseForOwn), baseEach$1 = baseEach;
function baseAggregator(e, t, n, o) {
  return baseEach$1(e, function(s, a, u) {
    t(o, s, n(s), u);
  }), o;
}
function createAggregator(e, t) {
  return function(n, o) {
    var s = isArray$1(n) ? arrayAggregator : baseAggregator, a = t ? t() : {};
    return s(n, e, baseIteratee(o), a);
  };
}
var partition = createAggregator(function(e, t, n) {
  e[n ? 0 : 1].push(t);
}, function() {
  return [[], []];
}), partition$1 = partition, round = createRound("round"), round$1 = round, globToRegexp = function(e, t) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  for (var n = String(e), o = "", s = t ? !!t.extended : !1, a = t ? !!t.globstar : !1, u = !1, p = t && typeof t.flags == "string" ? t.flags : "", h, d = 0, m = n.length; d < m; d++)
    switch (h = n[d], h) {
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
        o += "\\" + h;
        break;
      case "?":
        if (s) {
          o += ".";
          break;
        }
      case "[":
      case "]":
        if (s) {
          o += h;
          break;
        }
      case "{":
        if (s) {
          u = !0, o += "(";
          break;
        }
      case "}":
        if (s) {
          u = !1, o += ")";
          break;
        }
      case ",":
        if (u) {
          o += "|";
          break;
        }
        o += "\\" + h;
        break;
      case "*":
        for (var g = n[d - 1], v = 1; n[d + 1] === "*"; )
          v++, d++;
        var G = n[d + 1];
        if (!a)
          o += ".*";
        else {
          var $ = v > 1 && (g === "/" || g === void 0) && (G === "/" || G === void 0);
          $ ? (o += "((?:[^/]*(?:/|$))*)", d++) : o += "([^/]*)";
        }
        break;
      default:
        o += h;
    }
  return (!p || !~p.indexOf("g")) && (o = "^" + o + "$"), new RegExp(o, p);
};
function partionHidden(e, t) {
  if (!e)
    return [[], t];
  const n = globToRegexp(e, { extended: !0 });
  return partition$1(t, (o) => n.test(o.path));
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
const listSizes = (e, t) => e.map(({ property: n }) => t(n)).join(" / ");
function sortFiles(e, t, n) {
  e.sort((o, s) => s[t] - o[t] || o.path.localeCompare(s.path)), n === "asc" && e.reverse();
}
var __defProp$3 = Object.defineProperty, __defProps$3 = Object.defineProperties, __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$3 = Object.getOwnPropertySymbols, __hasOwnProp$3 = Object.prototype.hasOwnProperty, __propIsEnum$3 = Object.prototype.propertyIsEnumerable, __defNormalProp$3 = (e, t, n) => t in e ? __defProp$3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, __spreadValues$3 = (e, t) => {
  for (var n in t || (t = {}))
    __hasOwnProp$3.call(t, n) && __defNormalProp$3(e, n, t[n]);
  if (__getOwnPropSymbols$3)
    for (var n of __getOwnPropSymbols$3(t))
      __propIsEnum$3.call(t, n) && __defNormalProp$3(e, n, t[n]);
  return e;
}, __spreadProps$3 = (e, t) => __defProps$3(e, __getOwnPropDescs$3(t));
const percent = (e) => (e < 1e-3 ? e = round$1(e, 4) : e < 0.01 ? e = round$1(e, 3) : e = round$1(e, 2), e.toLocaleString(void 0, {
  style: "percent",
  maximumSignificantDigits: 3
}));
function calculateDiffBy(e, t, n) {
  const o = e[n] - t[n];
  return {
    delta: o,
    percent: percent(o / t[n])
  };
}
function calculateDiff(e, t) {
  return {
    size: calculateDiffBy(e, t, "size"),
    sizeGzip: calculateDiffBy(e, t, "sizeGzip"),
    sizeBrotli: calculateDiffBy(e, t, "sizeBrotli")
  };
}
function processPkgFiles(e, t, n) {
  for (const o of n.files) {
    e[o.path] || (e[o.path] = {
      path: o.path,
      label: o.label
    });
    const s = e[o.path];
    s[t] = o, s.head && s.base && (s.diff = calculateDiff(s.head, s.base));
  }
}
function comparePackages(e, t, {
  sortBy: n,
  sortOrder: o,
  hideFiles: s
} = {}) {
  const a = {};
  processPkgFiles(a, "head", e), processPkgFiles(a, "base", t);
  const u = Object.values(a);
  sortFiles(u, n, o);
  const [p, h] = partionHidden(s, u), [d, m] = partition$1(h, (g) => g.diff && g.diff.size.delta === 0);
  return {
    head: e,
    base: t,
    diff: __spreadProps$3(__spreadValues$3({}, calculateDiff(e, t)), {
      tarballSize: calculateDiffBy(e, t, "tarballSize")
    }),
    files: {
      changed: m,
      unchanged: d,
      hidden: p
    }
  };
}
const directionSymbol = (e) => e < 0 ? "\u2193" : e > 0 ? "\u2191" : "", formatDelta = ({ delta: e, percent: t }) => e ? t + directionSymbol(e) : "";
function generateComment({
  headPkgData: e,
  basePkgData: t,
  sortBy: n,
  sortOrder: o,
  hideFiles: s,
  unchangedFiles: a,
  displaySize: u
}) {
  const p = comparePackages(e, t, {
    sortBy: n,
    sortOrder: o,
    hideFiles: s
  });
  core.setOutput("regressionData", p);
  const { changed: h, unchanged: d, hidden: m } = p.files, g = parseDisplaySize(u), v = getSizeLabels(g), G = markdownTable_1([
    ["File", `Before${v}`, `After${v}`],
    ...[
      ...h,
      ...a === "show" ? d : []
    ].map((y) => [
      y.label,
      y.base && y.base.size ? listSizes(g, (w) => c$1(dist(y.base[w]))) : "\u2014",
      y.head && y.head.size ? listSizes(g, (w) => (y.base && y.base[w] ? sup(formatDelta(y.diff[w])) : "") + c$1(dist(y.head[w]))) : "\u2014"
    ]),
    [
      `${strong("Total")} ${a === "show" ? "" : sub("_(Includes all files)_")}`,
      listSizes(g, (y) => c$1(dist(p.base[y]))),
      listSizes(g, (y) => sup(formatDelta(p.diff[y])) + c$1(dist(p.head[y])))
    ],
    [
      strong("Tarball size"),
      c$1(dist(p.base.tarballSize)),
      sup(formatDelta(p.diff.tarballSize)) + c$1(dist(p.head.tarballSize))
    ]
  ], {
    align: ["", "r", "r"]
  });
  let $ = "";
  a === "collapse" && d.length > 0 && ($ = markdownTable_1([
    ["File", `Size${v}`],
    ...d.map((y) => [
      y.label,
      listSizes(g, (w) => c$1(dist(y.base[w])))
    ])
  ], {
    align: ["", "r"]
  }), $ = `<details><summary>Unchanged files</summary>

${$}
</details>`);
  let j = "";
  return m.length > 0 && (j = markdownTable_1([
    ["File", `Before${v}`, `After${v}`],
    ...m.map((y) => [
      y.label,
      y.base && y.base.size ? listSizes(g, (w) => c$1(dist(y.base[w]))) : "\u2014",
      y.head && y.head.size ? listSizes(g, (w) => (y.base && y.base[w] ? sup(formatDelta(y.diff[w])) : "") + c$1(dist(y.head[w]))) : "\u2014"
    ])
  ], {
    align: ["", "r", "r"]
  }), j = `<details><summary>Hidden files</summary>

${j}
</details>`), defaultOutdent`
	### 📊 Package size report&nbsp;&nbsp;&nbsp;<kbd>${formatDelta(p.diff.size) || "No changes"}</kbd>

	${G}

	${$}

	${j}
	`;
}
function headOnly({
  headPkgData: e,
  hideFiles: t,
  displaySize: n,
  sortBy: o,
  sortOrder: s
}) {
  const a = parseDisplaySize(n), u = getSizeLabels(a);
  sortFiles(e.files, o, s);
  const [p, h] = partionHidden(t, e.files), d = markdownTable_1([
    ["File", `Size${u}`],
    ...h.map((g) => [
      g.label,
      listSizes(a, (v) => c$1(dist(g[v])))
    ]),
    [
      strong("Total"),
      listSizes(a, (g) => c$1(dist(e[g])))
    ],
    [
      strong("Tarball size"),
      c$1(dist(e.tarballSize))
    ]
  ], {
    align: ["", "r"]
  });
  let m = "";
  return p.length > 0 && (m = markdownTable_1([
    ["File", `Size${u}`],
    ...p.map((g) => [
      g.label,
      listSizes(a, (v) => c$1(dist(g[v])))
    ])
  ], {
    align: ["", "r"]
  }), m = `<details><summary>Hidden files</summary>

${m}
</details>`), defaultOutdent`
	### 📊 Package size report

	${d}

	${m}
	`;
}
var ioUtil = createCommonjsModule(function(e, t) {
  var n = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(y, w, T, _) {
    _ === void 0 && (_ = T), Object.defineProperty(y, _, { enumerable: !0, get: function() {
      return w[T];
    } });
  } : function(y, w, T, _) {
    _ === void 0 && (_ = T), y[_] = w[T];
  }), o = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(y, w) {
    Object.defineProperty(y, "default", { enumerable: !0, value: w });
  } : function(y, w) {
    y.default = w;
  }), s = commonjsGlobal && commonjsGlobal.__importStar || function(y) {
    if (y && y.__esModule)
      return y;
    var w = {};
    if (y != null)
      for (var T in y)
        T !== "default" && Object.hasOwnProperty.call(y, T) && n(w, y, T);
    return o(w, y), w;
  }, a = commonjsGlobal && commonjsGlobal.__awaiter || function(y, w, T, _) {
    function b(O) {
      return O instanceof T ? O : new T(function(A) {
        A(O);
      });
    }
    return new (T || (T = Promise))(function(O, A) {
      function k(S) {
        try {
          E(_.next(S));
        } catch (U) {
          A(U);
        }
      }
      function P(S) {
        try {
          E(_.throw(S));
        } catch (U) {
          A(U);
        }
      }
      function E(S) {
        S.done ? O(S.value) : b(S.value).then(k, P);
      }
      E((_ = _.apply(y, w || [])).next());
    });
  }, u;
  Object.defineProperty(t, "__esModule", { value: !0 }), t.getCmdPath = t.tryGetExecutablePath = t.isRooted = t.isDirectory = t.exists = t.IS_WINDOWS = t.unlink = t.symlink = t.stat = t.rmdir = t.rename = t.readlink = t.readdir = t.mkdir = t.lstat = t.copyFile = t.chmod = void 0;
  const p = s(fs_1__default.default), h = s(require$$1__default.default);
  u = p.promises, t.chmod = u.chmod, t.copyFile = u.copyFile, t.lstat = u.lstat, t.mkdir = u.mkdir, t.readdir = u.readdir, t.readlink = u.readlink, t.rename = u.rename, t.rmdir = u.rmdir, t.stat = u.stat, t.symlink = u.symlink, t.unlink = u.unlink, t.IS_WINDOWS = process.platform === "win32";
  function d(y) {
    return a(this, void 0, void 0, function* () {
      try {
        yield t.stat(y);
      } catch (w) {
        if (w.code === "ENOENT")
          return !1;
        throw w;
      }
      return !0;
    });
  }
  t.exists = d;
  function m(y, w = !1) {
    return a(this, void 0, void 0, function* () {
      return (w ? yield t.stat(y) : yield t.lstat(y)).isDirectory();
    });
  }
  t.isDirectory = m;
  function g(y) {
    if (y = G(y), !y)
      throw new Error('isRooted() parameter "p" cannot be empty');
    return t.IS_WINDOWS ? y.startsWith("\\") || /^[A-Z]:/i.test(y) : y.startsWith("/");
  }
  t.isRooted = g;
  function v(y, w) {
    return a(this, void 0, void 0, function* () {
      let T;
      try {
        T = yield t.stat(y);
      } catch (b) {
        b.code !== "ENOENT" && console.log(`Unexpected error attempting to determine if executable file exists '${y}': ${b}`);
      }
      if (T && T.isFile()) {
        if (t.IS_WINDOWS) {
          const b = h.extname(y).toUpperCase();
          if (w.some((O) => O.toUpperCase() === b))
            return y;
        } else if ($(T))
          return y;
      }
      const _ = y;
      for (const b of w) {
        y = _ + b, T = void 0;
        try {
          T = yield t.stat(y);
        } catch (O) {
          O.code !== "ENOENT" && console.log(`Unexpected error attempting to determine if executable file exists '${y}': ${O}`);
        }
        if (T && T.isFile()) {
          if (t.IS_WINDOWS) {
            try {
              const O = h.dirname(y), A = h.basename(y).toUpperCase();
              for (const k of yield t.readdir(O))
                if (A === k.toUpperCase()) {
                  y = h.join(O, k);
                  break;
                }
            } catch (O) {
              console.log(`Unexpected error attempting to determine the actual case of the file '${y}': ${O}`);
            }
            return y;
          } else if ($(T))
            return y;
        }
      }
      return "";
    });
  }
  t.tryGetExecutablePath = v;
  function G(y) {
    return y = y || "", t.IS_WINDOWS ? (y = y.replace(/\//g, "\\"), y.replace(/\\\\+/g, "\\")) : y.replace(/\/\/+/g, "/");
  }
  function $(y) {
    return (y.mode & 1) > 0 || (y.mode & 8) > 0 && y.gid === process.getgid() || (y.mode & 64) > 0 && y.uid === process.getuid();
  }
  function j() {
    var y;
    return (y = process.env.COMSPEC) !== null && y !== void 0 ? y : "cmd.exe";
  }
  t.getCmdPath = j;
}), io = createCommonjsModule(function(e, t) {
  var n = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(b, O, A, k) {
    k === void 0 && (k = A), Object.defineProperty(b, k, { enumerable: !0, get: function() {
      return O[A];
    } });
  } : function(b, O, A, k) {
    k === void 0 && (k = A), b[k] = O[A];
  }), o = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(b, O) {
    Object.defineProperty(b, "default", { enumerable: !0, value: O });
  } : function(b, O) {
    b.default = O;
  }), s = commonjsGlobal && commonjsGlobal.__importStar || function(b) {
    if (b && b.__esModule)
      return b;
    var O = {};
    if (b != null)
      for (var A in b)
        A !== "default" && Object.hasOwnProperty.call(b, A) && n(O, b, A);
    return o(O, b), O;
  }, a = commonjsGlobal && commonjsGlobal.__awaiter || function(b, O, A, k) {
    function P(E) {
      return E instanceof A ? E : new A(function(S) {
        S(E);
      });
    }
    return new (A || (A = Promise))(function(E, S) {
      function U(N) {
        try {
          B(k.next(N));
        } catch (D) {
          S(D);
        }
      }
      function I(N) {
        try {
          B(k.throw(N));
        } catch (D) {
          S(D);
        }
      }
      function B(N) {
        N.done ? E(N.value) : P(N.value).then(U, I);
      }
      B((k = k.apply(b, O || [])).next());
    });
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.findInPath = t.which = t.mkdirP = t.rmRF = t.mv = t.cp = void 0;
  const u = s(require$$0__default$1.default), p = s(require$$1__default.default), h = s(ioUtil), d = util_1__default.default.promisify(u.exec), m = util_1__default.default.promisify(u.execFile);
  function g(b, O, A = {}) {
    return a(this, void 0, void 0, function* () {
      const { force: k, recursive: P, copySourceDirectory: E } = w(A), S = (yield h.exists(O)) ? yield h.stat(O) : null;
      if (S && S.isFile() && !k)
        return;
      const U = S && S.isDirectory() && E ? p.join(O, p.basename(b)) : O;
      if (!(yield h.exists(b)))
        throw new Error(`no such file or directory: ${b}`);
      if ((yield h.stat(b)).isDirectory())
        if (P)
          yield T(b, U, 0, k);
        else
          throw new Error(`Failed to copy. ${b} is a directory, but tried to copy without recursive flag.`);
      else {
        if (p.relative(b, U) === "")
          throw new Error(`'${U}' and '${b}' are the same file`);
        yield _(b, U, k);
      }
    });
  }
  t.cp = g;
  function v(b, O, A = {}) {
    return a(this, void 0, void 0, function* () {
      if (yield h.exists(O)) {
        let k = !0;
        if ((yield h.isDirectory(O)) && (O = p.join(O, p.basename(b)), k = yield h.exists(O)), k)
          if (A.force == null || A.force)
            yield G(O);
          else
            throw new Error("Destination already exists");
      }
      yield $(p.dirname(O)), yield h.rename(b, O);
    });
  }
  t.mv = v;
  function G(b) {
    return a(this, void 0, void 0, function* () {
      if (h.IS_WINDOWS) {
        if (/[*"<>|]/.test(b))
          throw new Error('File path must not contain `*`, `"`, `<`, `>` or `|` on Windows');
        try {
          const O = h.getCmdPath();
          (yield h.isDirectory(b, !0)) ? yield d(`${O} /s /c "rd /s /q "%inputPath%""`, {
            env: { inputPath: b }
          }) : yield d(`${O} /s /c "del /f /a "%inputPath%""`, {
            env: { inputPath: b }
          });
        } catch (O) {
          if (O.code !== "ENOENT")
            throw O;
        }
        try {
          yield h.unlink(b);
        } catch (O) {
          if (O.code !== "ENOENT")
            throw O;
        }
      } else {
        let O = !1;
        try {
          O = yield h.isDirectory(b);
        } catch (A) {
          if (A.code !== "ENOENT")
            throw A;
          return;
        }
        O ? yield m("rm", ["-rf", `${b}`]) : yield h.unlink(b);
      }
    });
  }
  t.rmRF = G;
  function $(b) {
    return a(this, void 0, void 0, function* () {
      assert_1__default.default.ok(b, "a path argument must be provided"), yield h.mkdir(b, { recursive: !0 });
    });
  }
  t.mkdirP = $;
  function j(b, O) {
    return a(this, void 0, void 0, function* () {
      if (!b)
        throw new Error("parameter 'tool' is required");
      if (O) {
        const k = yield j(b, !1);
        if (!k)
          throw h.IS_WINDOWS ? new Error(`Unable to locate executable file: ${b}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`) : new Error(`Unable to locate executable file: ${b}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`);
        return k;
      }
      const A = yield y(b);
      return A && A.length > 0 ? A[0] : "";
    });
  }
  t.which = j;
  function y(b) {
    return a(this, void 0, void 0, function* () {
      if (!b)
        throw new Error("parameter 'tool' is required");
      const O = [];
      if (h.IS_WINDOWS && process.env.PATHEXT)
        for (const P of process.env.PATHEXT.split(p.delimiter))
          P && O.push(P);
      if (h.isRooted(b)) {
        const P = yield h.tryGetExecutablePath(b, O);
        return P ? [P] : [];
      }
      if (b.includes(p.sep))
        return [];
      const A = [];
      if (process.env.PATH)
        for (const P of process.env.PATH.split(p.delimiter))
          P && A.push(P);
      const k = [];
      for (const P of A) {
        const E = yield h.tryGetExecutablePath(p.join(P, b), O);
        E && k.push(E);
      }
      return k;
    });
  }
  t.findInPath = y;
  function w(b) {
    const O = b.force == null ? !0 : b.force, A = Boolean(b.recursive), k = b.copySourceDirectory == null ? !0 : Boolean(b.copySourceDirectory);
    return { force: O, recursive: A, copySourceDirectory: k };
  }
  function T(b, O, A, k) {
    return a(this, void 0, void 0, function* () {
      if (A >= 255)
        return;
      A++, yield $(O);
      const P = yield h.readdir(b);
      for (const E of P) {
        const S = `${b}/${E}`, U = `${O}/${E}`;
        (yield h.lstat(S)).isDirectory() ? yield T(S, U, A, k) : yield _(S, U, k);
      }
      yield h.chmod(O, (yield h.stat(b)).mode);
    });
  }
  function _(b, O, A) {
    return a(this, void 0, void 0, function* () {
      if ((yield h.lstat(b)).isSymbolicLink()) {
        try {
          yield h.lstat(O), yield h.unlink(O);
        } catch (P) {
          P.code === "EPERM" && (yield h.chmod(O, "0666"), yield h.unlink(O));
        }
        const k = yield h.readlink(b);
        yield h.symlink(k, O, h.IS_WINDOWS ? "junction" : null);
      } else
        (!(yield h.exists(O)) || A) && (yield h.copyFile(b, O));
    });
  }
}), toolrunner = createCommonjsModule(function(e, t) {
  var n = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(y, w, T, _) {
    _ === void 0 && (_ = T), Object.defineProperty(y, _, { enumerable: !0, get: function() {
      return w[T];
    } });
  } : function(y, w, T, _) {
    _ === void 0 && (_ = T), y[_] = w[T];
  }), o = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(y, w) {
    Object.defineProperty(y, "default", { enumerable: !0, value: w });
  } : function(y, w) {
    y.default = w;
  }), s = commonjsGlobal && commonjsGlobal.__importStar || function(y) {
    if (y && y.__esModule)
      return y;
    var w = {};
    if (y != null)
      for (var T in y)
        T !== "default" && Object.hasOwnProperty.call(y, T) && n(w, y, T);
    return o(w, y), w;
  }, a = commonjsGlobal && commonjsGlobal.__awaiter || function(y, w, T, _) {
    function b(O) {
      return O instanceof T ? O : new T(function(A) {
        A(O);
      });
    }
    return new (T || (T = Promise))(function(O, A) {
      function k(S) {
        try {
          E(_.next(S));
        } catch (U) {
          A(U);
        }
      }
      function P(S) {
        try {
          E(_.throw(S));
        } catch (U) {
          A(U);
        }
      }
      function E(S) {
        S.done ? O(S.value) : b(S.value).then(k, P);
      }
      E((_ = _.apply(y, w || [])).next());
    });
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.argStringToArray = t.ToolRunner = void 0;
  const u = s(require$$0__default.default), p = s(events__default.default), h = s(require$$0__default$1.default), d = s(require$$1__default.default), m = s(io), g = s(ioUtil), v = process.platform === "win32";
  class G extends p.EventEmitter {
    constructor(w, T, _) {
      super();
      if (!w)
        throw new Error("Parameter 'toolPath' cannot be null or empty.");
      this.toolPath = w, this.args = T || [], this.options = _ || {};
    }
    _debug(w) {
      this.options.listeners && this.options.listeners.debug && this.options.listeners.debug(w);
    }
    _getCommandString(w, T) {
      const _ = this._getSpawnFileName(), b = this._getSpawnArgs(w);
      let O = T ? "" : "[command]";
      if (v)
        if (this._isCmdFile()) {
          O += _;
          for (const A of b)
            O += ` ${A}`;
        } else if (w.windowsVerbatimArguments) {
          O += `"${_}"`;
          for (const A of b)
            O += ` ${A}`;
        } else {
          O += this._windowsQuoteCmdArg(_);
          for (const A of b)
            O += ` ${this._windowsQuoteCmdArg(A)}`;
        }
      else {
        O += _;
        for (const A of b)
          O += ` ${A}`;
      }
      return O;
    }
    _processLineBuffer(w, T, _) {
      try {
        let b = T + w.toString(), O = b.indexOf(u.EOL);
        for (; O > -1; ) {
          const A = b.substring(0, O);
          _(A), b = b.substring(O + u.EOL.length), O = b.indexOf(u.EOL);
        }
        return b;
      } catch (b) {
        return this._debug(`error processing line. Failed with error ${b}`), "";
      }
    }
    _getSpawnFileName() {
      return v && this._isCmdFile() ? process.env.COMSPEC || "cmd.exe" : this.toolPath;
    }
    _getSpawnArgs(w) {
      if (v && this._isCmdFile()) {
        let T = `/D /S /C "${this._windowsQuoteCmdArg(this.toolPath)}`;
        for (const _ of this.args)
          T += " ", T += w.windowsVerbatimArguments ? _ : this._windowsQuoteCmdArg(_);
        return T += '"', [T];
      }
      return this.args;
    }
    _endsWith(w, T) {
      return w.endsWith(T);
    }
    _isCmdFile() {
      const w = this.toolPath.toUpperCase();
      return this._endsWith(w, ".CMD") || this._endsWith(w, ".BAT");
    }
    _windowsQuoteCmdArg(w) {
      if (!this._isCmdFile())
        return this._uvQuoteCmdArg(w);
      if (!w)
        return '""';
      const T = [
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
      let _ = !1;
      for (const A of w)
        if (T.some((k) => k === A)) {
          _ = !0;
          break;
        }
      if (!_)
        return w;
      let b = '"', O = !0;
      for (let A = w.length; A > 0; A--)
        b += w[A - 1], O && w[A - 1] === "\\" ? b += "\\" : w[A - 1] === '"' ? (O = !0, b += '"') : O = !1;
      return b += '"', b.split("").reverse().join("");
    }
    _uvQuoteCmdArg(w) {
      if (!w)
        return '""';
      if (!w.includes(" ") && !w.includes("	") && !w.includes('"'))
        return w;
      if (!w.includes('"') && !w.includes("\\"))
        return `"${w}"`;
      let T = '"', _ = !0;
      for (let b = w.length; b > 0; b--)
        T += w[b - 1], _ && w[b - 1] === "\\" ? T += "\\" : w[b - 1] === '"' ? (_ = !0, T += "\\") : _ = !1;
      return T += '"', T.split("").reverse().join("");
    }
    _cloneExecOptions(w) {
      w = w || {};
      const T = {
        cwd: w.cwd || process.cwd(),
        env: w.env || process.env,
        silent: w.silent || !1,
        windowsVerbatimArguments: w.windowsVerbatimArguments || !1,
        failOnStdErr: w.failOnStdErr || !1,
        ignoreReturnCode: w.ignoreReturnCode || !1,
        delay: w.delay || 1e4
      };
      return T.outStream = w.outStream || process.stdout, T.errStream = w.errStream || process.stderr, T;
    }
    _getSpawnOptions(w, T) {
      w = w || {};
      const _ = {};
      return _.cwd = w.cwd, _.env = w.env, _.windowsVerbatimArguments = w.windowsVerbatimArguments || this._isCmdFile(), w.windowsVerbatimArguments && (_.argv0 = `"${T}"`), _;
    }
    exec() {
      return a(this, void 0, void 0, function* () {
        return !g.isRooted(this.toolPath) && (this.toolPath.includes("/") || v && this.toolPath.includes("\\")) && (this.toolPath = d.resolve(process.cwd(), this.options.cwd || process.cwd(), this.toolPath)), this.toolPath = yield m.which(this.toolPath, !0), new Promise((w, T) => a(this, void 0, void 0, function* () {
          this._debug(`exec tool: ${this.toolPath}`), this._debug("arguments:");
          for (const E of this.args)
            this._debug(`   ${E}`);
          const _ = this._cloneExecOptions(this.options);
          !_.silent && _.outStream && _.outStream.write(this._getCommandString(_) + u.EOL);
          const b = new j(_, this.toolPath);
          if (b.on("debug", (E) => {
            this._debug(E);
          }), this.options.cwd && !(yield g.exists(this.options.cwd)))
            return T(new Error(`The cwd: ${this.options.cwd} does not exist!`));
          const O = this._getSpawnFileName(), A = h.spawn(O, this._getSpawnArgs(_), this._getSpawnOptions(this.options, O));
          let k = "";
          A.stdout && A.stdout.on("data", (E) => {
            this.options.listeners && this.options.listeners.stdout && this.options.listeners.stdout(E), !_.silent && _.outStream && _.outStream.write(E), k = this._processLineBuffer(E, k, (S) => {
              this.options.listeners && this.options.listeners.stdline && this.options.listeners.stdline(S);
            });
          });
          let P = "";
          if (A.stderr && A.stderr.on("data", (E) => {
            b.processStderr = !0, this.options.listeners && this.options.listeners.stderr && this.options.listeners.stderr(E), !_.silent && _.errStream && _.outStream && (_.failOnStdErr ? _.errStream : _.outStream).write(E), P = this._processLineBuffer(E, P, (S) => {
              this.options.listeners && this.options.listeners.errline && this.options.listeners.errline(S);
            });
          }), A.on("error", (E) => {
            b.processError = E.message, b.processExited = !0, b.processClosed = !0, b.CheckComplete();
          }), A.on("exit", (E) => {
            b.processExitCode = E, b.processExited = !0, this._debug(`Exit code ${E} received from tool '${this.toolPath}'`), b.CheckComplete();
          }), A.on("close", (E) => {
            b.processExitCode = E, b.processExited = !0, b.processClosed = !0, this._debug(`STDIO streams have closed for tool '${this.toolPath}'`), b.CheckComplete();
          }), b.on("done", (E, S) => {
            k.length > 0 && this.emit("stdline", k), P.length > 0 && this.emit("errline", P), A.removeAllListeners(), E ? T(E) : w(S);
          }), this.options.input) {
            if (!A.stdin)
              throw new Error("child process missing stdin");
            A.stdin.end(this.options.input);
          }
        }));
      });
    }
  }
  t.ToolRunner = G;
  function $(y) {
    const w = [];
    let T = !1, _ = !1, b = "";
    function O(A) {
      _ && A !== '"' && (b += "\\"), b += A, _ = !1;
    }
    for (let A = 0; A < y.length; A++) {
      const k = y.charAt(A);
      if (k === '"') {
        _ ? O(k) : T = !T;
        continue;
      }
      if (k === "\\" && _) {
        O(k);
        continue;
      }
      if (k === "\\" && T) {
        _ = !0;
        continue;
      }
      if (k === " " && !T) {
        b.length > 0 && (w.push(b), b = "");
        continue;
      }
      O(k);
    }
    return b.length > 0 && w.push(b.trim()), w;
  }
  t.argStringToArray = $;
  class j extends p.EventEmitter {
    constructor(w, T) {
      super();
      if (this.processClosed = !1, this.processError = "", this.processExitCode = 0, this.processExited = !1, this.processStderr = !1, this.delay = 1e4, this.done = !1, this.timeout = null, !T)
        throw new Error("toolPath must not be empty");
      this.options = w, this.toolPath = T, w.delay && (this.delay = w.delay);
    }
    CheckComplete() {
      this.done || (this.processClosed ? this._setResult() : this.processExited && (this.timeout = timers_1__default.default.setTimeout(j.HandleTimeout, this.delay, this)));
    }
    _debug(w) {
      this.emit("debug", w);
    }
    _setResult() {
      let w;
      this.processExited && (this.processError ? w = new Error(`There was an error when attempting to execute the process '${this.toolPath}'. This may indicate the process failed to start. Error: ${this.processError}`) : this.processExitCode !== 0 && !this.options.ignoreReturnCode ? w = new Error(`The process '${this.toolPath}' failed with exit code ${this.processExitCode}`) : this.processStderr && this.options.failOnStdErr && (w = new Error(`The process '${this.toolPath}' failed because one or more lines were written to the STDERR stream`))), this.timeout && (clearTimeout(this.timeout), this.timeout = null), this.done = !0, this.emit("done", w, this.processExitCode);
    }
    static HandleTimeout(w) {
      if (!w.done) {
        if (!w.processClosed && w.processExited) {
          const T = `The STDIO streams did not close within ${w.delay / 1e3} seconds of the exit event from process '${w.toolPath}'. This may indicate a child process inherited the STDIO streams and has not yet exited.`;
          w._debug(T);
        }
        w._setResult();
      }
    }
  }
}), exec_1 = createCommonjsModule(function(e, t) {
  var n = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(d, m, g, v) {
    v === void 0 && (v = g), Object.defineProperty(d, v, { enumerable: !0, get: function() {
      return m[g];
    } });
  } : function(d, m, g, v) {
    v === void 0 && (v = g), d[v] = m[g];
  }), o = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(d, m) {
    Object.defineProperty(d, "default", { enumerable: !0, value: m });
  } : function(d, m) {
    d.default = m;
  }), s = commonjsGlobal && commonjsGlobal.__importStar || function(d) {
    if (d && d.__esModule)
      return d;
    var m = {};
    if (d != null)
      for (var g in d)
        g !== "default" && Object.hasOwnProperty.call(d, g) && n(m, d, g);
    return o(m, d), m;
  }, a = commonjsGlobal && commonjsGlobal.__awaiter || function(d, m, g, v) {
    function G($) {
      return $ instanceof g ? $ : new g(function(j) {
        j($);
      });
    }
    return new (g || (g = Promise))(function($, j) {
      function y(_) {
        try {
          T(v.next(_));
        } catch (b) {
          j(b);
        }
      }
      function w(_) {
        try {
          T(v.throw(_));
        } catch (b) {
          j(b);
        }
      }
      function T(_) {
        _.done ? $(_.value) : G(_.value).then(y, w);
      }
      T((v = v.apply(d, m || [])).next());
    });
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.getExecOutput = t.exec = void 0;
  const u = s(toolrunner);
  function p(d, m, g) {
    return a(this, void 0, void 0, function* () {
      const v = u.argStringToArray(d);
      if (v.length === 0)
        throw new Error("Parameter 'commandLine' cannot be null or empty.");
      const G = v[0];
      return m = v.slice(1).concat(m || []), new u.ToolRunner(G, m, g).exec();
    });
  }
  t.exec = p;
  function h(d, m, g) {
    var v, G;
    return a(this, void 0, void 0, function* () {
      let $ = "", j = "";
      const y = new string_decoder_1__default.default.StringDecoder("utf8"), w = new string_decoder_1__default.default.StringDecoder("utf8"), T = (v = g == null ? void 0 : g.listeners) === null || v === void 0 ? void 0 : v.stdout, _ = (G = g == null ? void 0 : g.listeners) === null || G === void 0 ? void 0 : G.stderr, b = (P) => {
        j += w.write(P), _ && _(P);
      }, O = (P) => {
        $ += y.write(P), T && T(P);
      }, A = Object.assign(Object.assign({}, g == null ? void 0 : g.listeners), { stdout: O, stderr: b }), k = yield p(d, m, Object.assign(Object.assign({}, g), { listeners: A }));
      return $ += y.end(), j += w.end(), {
        exitCode: k,
        stdout: $,
        stderr: j
      };
    });
  }
  t.getExecOutput = h;
}), __defProp$2 = Object.defineProperty, __defProps$2 = Object.defineProperties, __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$2 = Object.getOwnPropertySymbols, __hasOwnProp$2 = Object.prototype.hasOwnProperty, __propIsEnum$2 = Object.prototype.propertyIsEnumerable, __defNormalProp$2 = (e, t, n) => t in e ? __defProp$2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, __spreadValues$2 = (e, t) => {
  for (var n in t || (t = {}))
    __hasOwnProp$2.call(t, n) && __defNormalProp$2(e, n, t[n]);
  if (__getOwnPropSymbols$2)
    for (var n of __getOwnPropSymbols$2(t))
      __propIsEnum$2.call(t, n) && __defNormalProp$2(e, n, t[n]);
  return e;
}, __spreadProps$2 = (e, t) => __defProps$2(e, __getOwnPropDescs$2(t));
async function exec(e, t) {
  let n = "", o = "";
  const s = Date.now(), a = await exec_1.exec(e, null, __spreadProps$2(__spreadValues$2({}, t), {
    silent: !0,
    listeners: {
      stdout(p) {
        n += p.toString();
      },
      stderr(p) {
        o += p.toString();
      }
    }
  })), u = Date.now() - s;
  return {
    exitCode: a,
    duration: u,
    stdout: n,
    stderr: o
  };
}
async function isBaseDiffFromHead(e) {
  try {
    await exec(`git fetch origin ${e} --depth=1`);
  } catch (n) {
    throw new Error(`Failed to git fetch ${e} ${n.message}`);
  }
  const { exitCode: t } = await exec(`git diff --quiet origin/${e}`, { ignoreReturnCode: !0 });
  return t !== 0;
}
async function npmCi({ cwd: e } = {}) {
  fs_1__default.default.existsSync("node_modules") && (core.info("Cleaning node_modules"), await io.rmRF(require$$1__default.default.join(e, "node_modules")));
  const t = {
    cwd: e,
    ignoreReturnCode: !0
  };
  let n = "";
  fs_1__default.default.existsSync("package-lock.json") ? (core.info("Installing dependencies with npm"), n = "npm ci") : fs_1__default.default.existsSync("yarn.lock") ? (core.info("Installing dependencies with yarn"), n = "yarn install --frozen-lockfile") : fs_1__default.default.existsSync("pnpm-lock.yaml") ? (core.info("Installing dependencies with pnpm"), n = "npx pnpm i --frozen-lockfile") : (core.info("No lock file detected. Installing dependencies with npm"), n = "npm i");
  const { exitCode: o, stdout: s, stderr: a } = await exec(n, t);
  if (o > 0)
    throw new Error(`${a}
${s}`);
}
async function isFileTracked(e) {
  const { exitCode: t } = await exec(`git ls-files --error-unmatch ${e}`, { ignoreReturnCode: !0 });
  return t === 0;
}
var __defProp$1 = Object.defineProperty, __defProps$1 = Object.defineProperties, __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$1 = Object.getOwnPropertySymbols, __hasOwnProp$1 = Object.prototype.hasOwnProperty, __propIsEnum$1 = Object.prototype.propertyIsEnumerable, __defNormalProp$1 = (e, t, n) => t in e ? __defProp$1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, __spreadValues$1 = (e, t) => {
  for (var n in t || (t = {}))
    __hasOwnProp$1.call(t, n) && __defNormalProp$1(e, n, t[n]);
  if (__getOwnPropSymbols$1)
    for (var n of __getOwnPropSymbols$1(t))
      __propIsEnum$1.call(t, n) && __defNormalProp$1(e, n, t[n]);
  return e;
}, __spreadProps$1 = (e, t) => __defProps$1(e, __getOwnPropDescs$1(t));
let pkgSizeInstalled = !1;
async function buildRef({
  checkoutRef: e,
  refData: t,
  buildCommand: n
}) {
  const o = process.cwd();
  if (core.info(`Current working directory: ${o}`), e && (core.info(`Checking out ref '${e}'`), await exec(`git checkout -f ${e}`)), n !== "false") {
    if (!n) {
      let p;
      try {
        p = JSON.parse(fs_1__default.default.readFileSync("./package.json"));
      } catch (h) {
        core.warning("Error reading package.json", h);
      }
      p && p.scripts && p.scripts.build && (core.info("Build script found in package.json"), n = "npm run build");
    }
    if (n) {
      await npmCi({ cwd: o }).catch((h) => {
        throw new Error(`Failed to install dependencies:
${h.message}`);
      }), core.info(`Running build command: ${n}`);
      const p = Date.now();
      await exec(n, { cwd: o }).catch((h) => {
        throw new Error(`Failed to run build command: ${n}
${h.message}`);
      }), core.info(`Build completed in ${(Date.now() - p) / 1e3}s`);
    }
  }
  pkgSizeInstalled || (core.info("Installing pkg-size globally"), await exec("npm i -g pkg-size"), pkgSizeInstalled = !0), core.info("Getting package size");
  const s = await exec("pkg-size --json", { cwd: o }).catch((p) => {
    throw new Error(`Failed to determine package size: ${p.message}`);
  });
  core.debug(JSON.stringify(s, null, 4));
  const a = __spreadProps$1(__spreadValues$1({}, JSON.parse(s.stdout)), {
    ref: t,
    size: 0,
    sizeGzip: 0,
    sizeBrotli: 0
  });
  await Promise.all(a.files.map(async (p) => {
    a.size += p.size, a.sizeGzip += p.sizeGzip, a.sizeBrotli += p.sizeBrotli;
    const h = await isFileTracked(p.path);
    p.isTracked = h, p.label = h ? link(c$1(p.path), `${t.repo.html_url}/blob/${t.ref}/${p.path}`) : c$1(p.path);
  })), core.info("Cleaning up"), await exec("git reset --hard");
  const { stdout: u } = await exec("git clean -dfx");
  return core.debug(u), a;
}
var __defProp = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropSymbols = Object.getOwnPropertySymbols, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable, __defNormalProp = (e, t, n) => t in e ? __defProp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, __spreadValues = (e, t) => {
  for (var n in t || (t = {}))
    __hasOwnProp.call(t, n) && __defNormalProp(e, n, t[n]);
  if (__getOwnPropSymbols)
    for (var n of __getOwnPropSymbols(t))
      __propIsEnum.call(t, n) && __defNormalProp(e, n, t[n]);
  return e;
}, __spreadProps = (e, t) => __defProps(e, __getOwnPropDescs(t));
async function generateSizeReport({
  pr: e,
  buildCommand: t,
  commentReport: n,
  mode: o,
  unchangedFiles: s,
  hideFiles: a,
  sortBy: u,
  sortOrder: p,
  displaySize: h
}) {
  core.startGroup("Build HEAD");
  const d = await buildRef({
    refData: e.head,
    buildCommand: t
  });
  if (core.setOutput("headPkgData", d), core.endGroup(), o === "head-only")
    return n !== "false" ? headOnly({
      headPkgData: d,
      displaySize: h,
      sortBy: u,
      sortOrder: p,
      hideFiles: a
    }) : !1;
  const { ref: m } = e.base;
  let g;
  return await isBaseDiffFromHead(m) ? (core.info("HEAD is different from BASE. Triggering build."), core.startGroup("Build BASE"), g = await buildRef({
    checkoutRef: m,
    refData: e.base,
    buildCommand: t
  }), core.endGroup()) : (core.info("HEAD is identical to BASE. Skipping base build."), g = __spreadProps(__spreadValues({}, d), {
    ref: e.base
  })), core.setOutput("basePkgData", g), n !== "false" ? generateComment({
    headPkgData: d,
    basePkgData: g,
    displaySize: h,
    sortBy: u,
    sortOrder: p,
    hideFiles: a,
    unchangedFiles: s
  }) : !1;
}
const COMMENT_SIGNATURE = sub("\u{1F916} This report was automatically generated by [pkg-size-action](https://github.com/pkg-size/action/)");
(async () => {
  const { GITHUB_TOKEN: e } = process.env;
  assert_1__default.default(e, 'Environment variable "GITHUB_TOKEN" not set. Required for accessing and reporting on the PR.');
  const { pull_request: t } = github.context.payload, n = await generateSizeReport({
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
  await exec(`git checkout -f ${github.context.sha}`), n && await upsertComment({
    token: e,
    commentSignature: COMMENT_SIGNATURE,
    repo: github.context.repo,
    prNumber: t.number,
    body: n
  });
})().catch((e) => {
  core.setFailed(e.message), core.warning(e.stack);
});
