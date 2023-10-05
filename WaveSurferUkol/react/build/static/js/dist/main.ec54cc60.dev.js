"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! For license information please see main.ec54cc60.js.LICENSE.txt */
!function () {
  "use strict";

  var e = {
    463: function _(e, t, n) {
      var r = n(791),
          a = n(296);

      function o(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) {
          t += "&args[]=" + encodeURIComponent(arguments[n]);
        }

        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }

      var l = new Set(),
          i = {};

      function u(e, t) {
        s(e, t), s(e + "Capture", t);
      }

      function s(e, t) {
        for (i[e] = t, e = 0; e < t.length; e++) {
          l.add(t[e]);
        }
      }

      var c = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
          f = Object.prototype.hasOwnProperty,
          d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};

      function v(e, t, n, r, a, o, l) {
        this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = l;
      }

      var m = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
        m[e] = new v(e, 0, !1, e, null, !1, !1);
      }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
        var t = e[0];
        m[t] = new v(t, 1, !1, e[1], null, !1, !1);
      }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
        m[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
        m[e] = new v(e, 2, !1, e, null, !1, !1);
      }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
        m[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }), ["checked", "multiple", "muted", "selected"].forEach(function (e) {
        m[e] = new v(e, 3, !0, e, null, !1, !1);
      }), ["capture", "download"].forEach(function (e) {
        m[e] = new v(e, 4, !1, e, null, !1, !1);
      }), ["cols", "rows", "size", "span"].forEach(function (e) {
        m[e] = new v(e, 6, !1, e, null, !1, !1);
      }), ["rowSpan", "start"].forEach(function (e) {
        m[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
      });
      var y = /[\-:]([a-z])/g;

      function g(e) {
        return e[1].toUpperCase();
      }

      function b(e, t, n, r) {
        var a = m.hasOwnProperty(t) ? m[t] : null;
        (null !== a ? 0 !== a.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function (e, t, n, r) {
          if (null === t || "undefined" === typeof t || function (e, t, n, r) {
            if (null !== n && 0 === n.type) return !1;

            switch (_typeof(t)) {
              case "function":
              case "symbol":
                return !0;

              case "boolean":
                return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);

              default:
                return !1;
            }
          }(e, t, n, r)) return !0;
          if (r) return !1;
          if (null !== n) switch (n.type) {
            case 3:
              return !t;

            case 4:
              return !1 === t;

            case 5:
              return isNaN(t);

            case 6:
              return isNaN(t) || 1 > t;
          }
          return !1;
        }(t, n, a, r) && (n = null), r || null === a ? function (e) {
          return !!f.call(h, e) || !f.call(p, e) && (d.test(e) ? h[e] = !0 : (p[e] = !0, !1));
        }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName, r = a.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
      }

      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
        var t = e.replace(y, g);
        m[t] = new v(t, 1, !1, e, null, !1, !1);
      }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
        var t = e.replace(y, g);
        m[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }), ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
        var t = e.replace(y, g);
        m[t] = new v(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
      }), ["tabIndex", "crossOrigin"].forEach(function (e) {
        m[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }), m.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function (e) {
        m[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
      });

      var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol["for"]("react.element"),
          S = Symbol["for"]("react.portal"),
          x = Symbol["for"]("react.fragment"),
          E = Symbol["for"]("react.strict_mode"),
          C = Symbol["for"]("react.profiler"),
          _ = Symbol["for"]("react.provider"),
          P = Symbol["for"]("react.context"),
          L = Symbol["for"]("react.forward_ref"),
          T = Symbol["for"]("react.suspense"),
          N = Symbol["for"]("react.suspense_list"),
          z = Symbol["for"]("react.memo"),
          O = Symbol["for"]("react.lazy");

      Symbol["for"]("react.scope"), Symbol["for"]("react.debug_trace_mode");
      var M = Symbol["for"]("react.offscreen");
      Symbol["for"]("react.legacy_hidden"), Symbol["for"]("react.cache"), Symbol["for"]("react.tracing_marker");
      var R = Symbol.iterator;

      function D(e) {
        return null === e || "object" !== _typeof(e) ? null : "function" === typeof (e = R && e[R] || e["@@iterator"]) ? e : null;
      }

      var F,
          I = Object.assign;

      function j(e) {
        if (void 0 === F) try {
          throw Error();
        } catch (n) {
          var t = n.stack.trim().match(/\n( *(at )?)/);
          F = t && t[1] || "";
        }
        return "\n" + F + e;
      }

      var A = !1;

      function W(e, t) {
        if (!e || A) return "";
        A = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;

        try {
          if (t) {
            if (t = function t() {
              throw Error();
            }, Object.defineProperty(t.prototype, "props", {
              set: function set() {
                throw Error();
              }
            }), "object" === (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && Reflect.construct) {
              try {
                Reflect.construct(t, []);
              } catch (s) {
                var r = s;
              }

              Reflect.construct(e, [], t);
            } else {
              try {
                t.call();
              } catch (s) {
                r = s;
              }

              e.call(t.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (s) {
              r = s;
            }

            e();
          }
        } catch (s) {
          if (s && r && "string" === typeof s.stack) {
            for (var a = s.stack.split("\n"), o = r.stack.split("\n"), l = a.length - 1, i = o.length - 1; 1 <= l && 0 <= i && a[l] !== o[i];) {
              i--;
            }

            for (; 1 <= l && 0 <= i; l--, i--) {
              if (a[l] !== o[i]) {
                if (1 !== l || 1 !== i) do {
                  if (l--, 0 > --i || a[l] !== o[i]) {
                    var u = "\n" + a[l].replace(" at new ", " at ");
                    return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
                  }
                } while (1 <= l && 0 <= i);
                break;
              }
            }
          }
        } finally {
          A = !1, Error.prepareStackTrace = n;
        }

        return (e = e ? e.displayName || e.name : "") ? j(e) : "";
      }

      function U(e) {
        switch (e.tag) {
          case 5:
            return j(e.type);

          case 16:
            return j("Lazy");

          case 13:
            return j("Suspense");

          case 19:
            return j("SuspenseList");

          case 0:
          case 2:
          case 15:
            return e = W(e.type, !1);

          case 11:
            return e = W(e.type.render, !1);

          case 1:
            return e = W(e.type, !0);

          default:
            return "";
        }
      }

      function V(e) {
        if (null == e) return null;
        if ("function" === typeof e) return e.displayName || e.name || null;
        if ("string" === typeof e) return e;

        switch (e) {
          case x:
            return "Fragment";

          case S:
            return "Portal";

          case C:
            return "Profiler";

          case E:
            return "StrictMode";

          case T:
            return "Suspense";

          case N:
            return "SuspenseList";
        }

        if ("object" === _typeof(e)) switch (e.$$typeof) {
          case P:
            return (e.displayName || "Context") + ".Consumer";

          case _:
            return (e._context.displayName || "Context") + ".Provider";

          case L:
            var t = e.render;
            return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;

          case z:
            return null !== (t = e.displayName || null) ? t : V(e.type) || "Memo";

          case O:
            t = e._payload, e = e._init;

            try {
              return V(e(t));
            } catch (n) {}

        }
        return null;
      }

      function B(e) {
        var t = e.type;

        switch (e.tag) {
          case 24:
            return "Cache";

          case 9:
            return (t.displayName || "Context") + ".Consumer";

          case 10:
            return (t._context.displayName || "Context") + ".Provider";

          case 18:
            return "DehydratedFragment";

          case 11:
            return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");

          case 7:
            return "Fragment";

          case 5:
            return t;

          case 4:
            return "Portal";

          case 3:
            return "Root";

          case 6:
            return "Text";

          case 16:
            return V(t);

          case 8:
            return t === E ? "StrictMode" : "Mode";

          case 22:
            return "Offscreen";

          case 12:
            return "Profiler";

          case 21:
            return "Scope";

          case 13:
            return "Suspense";

          case 19:
            return "SuspenseList";

          case 25:
            return "TracingMarker";

          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if ("function" === typeof t) return t.displayName || t.name || null;
            if ("string" === typeof t) return t;
        }

        return null;
      }

      function H(e) {
        switch (_typeof(e)) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
          case "object":
            return e;

          default:
            return "";
        }
      }

      function $(e) {
        var t = e.type;
        return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t);
      }

      function Q(e) {
        e._valueTracker || (e._valueTracker = function (e) {
          var t = $(e) ? "checked" : "value",
              n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
              r = "" + e[t];

          if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
            var a = n.get,
                o = n.set;
            return Object.defineProperty(e, t, {
              configurable: !0,
              get: function get() {
                return a.call(this);
              },
              set: function set(e) {
                r = "" + e, o.call(this, e);
              }
            }), Object.defineProperty(e, t, {
              enumerable: n.enumerable
            }), {
              getValue: function getValue() {
                return r;
              },
              setValue: function setValue(e) {
                r = "" + e;
              },
              stopTracking: function stopTracking() {
                e._valueTracker = null, delete e[t];
              }
            };
          }
        }(e));
      }

      function q(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
            r = "";
        return e && (r = $(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0);
      }

      function K(e) {
        if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0))) return null;

        try {
          return e.activeElement || e.body;
        } catch (t) {
          return e.body;
        }
      }

      function Y(e, t) {
        var n = t.checked;
        return I({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != n ? n : e._wrapperState.initialChecked
        });
      }

      function G(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
        n = H(null != t.value ? t.value : n), e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
        };
      }

      function X(e, t) {
        null != (t = t.checked) && b(e, "checked", t, !1);
      }

      function Z(e, t) {
        X(e, t);
        var n = H(t.value),
            r = t.type;
        if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
        t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, H(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
      }

      function J(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
          var r = t.type;
          if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
          t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        }

        "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n);
      }

      function ee(e, t, n) {
        "number" === t && K(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
      }

      var te = Array.isArray;

      function ne(e, t, n, r) {
        if (e = e.options, t) {
          t = {};

          for (var a = 0; a < n.length; a++) {
            t["$" + n[a]] = !0;
          }

          for (n = 0; n < e.length; n++) {
            a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
          }
        } else {
          for (n = "" + H(n), t = null, a = 0; a < e.length; a++) {
            if (e[a].value === n) return e[a].selected = !0, void (r && (e[a].defaultSelected = !0));
            null !== t || e[a].disabled || (t = e[a]);
          }

          null !== t && (t.selected = !0);
        }
      }

      function re(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
        return I({}, t, {
          value: void 0,
          defaultValue: void 0,
          children: "" + e._wrapperState.initialValue
        });
      }

      function ae(e, t) {
        var n = t.value;

        if (null == n) {
          if (n = t.children, t = t.defaultValue, null != n) {
            if (null != t) throw Error(o(92));

            if (te(n)) {
              if (1 < n.length) throw Error(o(93));
              n = n[0];
            }

            t = n;
          }

          null == t && (t = ""), n = t;
        }

        e._wrapperState = {
          initialValue: H(n)
        };
      }

      function oe(e, t) {
        var n = H(t.value),
            r = H(t.defaultValue);
        null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r);
      }

      function le(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t);
      }

      function ie(e) {
        switch (e) {
          case "svg":
            return "http://www.w3.org/2000/svg";

          case "math":
            return "http://www.w3.org/1998/Math/MathML";

          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }

      function ue(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e ? ie(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e;
      }

      var se,
          ce,
          fe = (ce = function ce(e, t) {
        if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;else {
          for ((se = se || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = se.firstChild; e.firstChild;) {
            e.removeChild(e.firstChild);
          }

          for (; t.firstChild;) {
            e.appendChild(t.firstChild);
          }
        }
      }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (e, t, n, r) {
        MSApp.execUnsafeLocalFunction(function () {
          return ce(e, t);
        });
      } : ce);

      function de(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
        }

        e.textContent = t;
      }

      var pe = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
      },
          he = ["Webkit", "ms", "Moz", "O"];

      function ve(e, t, n) {
        return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || pe.hasOwnProperty(e) && pe[e] ? ("" + t).trim() : t + "px";
      }

      function me(e, t) {
        for (var n in e = e.style, t) {
          if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf("--"),
                a = ve(n, t[n], r);
            "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
          }
        }
      }

      Object.keys(pe).forEach(function (e) {
        he.forEach(function (t) {
          t = t + e.charAt(0).toUpperCase() + e.substring(1), pe[t] = pe[e];
        });
      });
      var ye = I({
        menuitem: !0
      }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
      });

      function ge(e, t) {
        if (t) {
          if (ye[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(o(137, e));

          if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(o(60));
            if ("object" !== _typeof(t.dangerouslySetInnerHTML) || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61));
          }

          if (null != t.style && "object" !== _typeof(t.style)) throw Error(o(62));
        }
      }

      function be(e, t) {
        if (-1 === e.indexOf("-")) return "string" === typeof t.is;

        switch (e) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return !1;

          default:
            return !0;
        }
      }

      var ke = null;

      function we(e) {
        return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e;
      }

      var Se = null,
          xe = null,
          Ee = null;

      function Ce(e) {
        if (e = ba(e)) {
          if ("function" !== typeof Se) throw Error(o(280));
          var t = e.stateNode;
          t && (t = wa(t), Se(e.stateNode, e.type, t));
        }
      }

      function _e(e) {
        xe ? Ee ? Ee.push(e) : Ee = [e] : xe = e;
      }

      function Pe() {
        if (xe) {
          var e = xe,
              t = Ee;
          if (Ee = xe = null, Ce(e), t) for (e = 0; e < t.length; e++) {
            Ce(t[e]);
          }
        }
      }

      function Le(e, t) {
        return e(t);
      }

      function Te() {}

      var Ne = !1;

      function ze(e, t, n) {
        if (Ne) return e(t, n);
        Ne = !0;

        try {
          return Le(e, t, n);
        } finally {
          Ne = !1, (null !== xe || null !== Ee) && (Te(), Pe());
        }
      }

      function Oe(e, t) {
        var n = e.stateNode;
        if (null === n) return null;
        var r = wa(n);
        if (null === r) return null;
        n = r[t];

        e: switch (t) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
            break e;

          default:
            e = !1;
        }

        if (e) return null;
        if (n && "function" !== typeof n) throw Error(o(231, t, _typeof(n)));
        return n;
      }

      var Me = !1;
      if (c) try {
        var Re = {};
        Object.defineProperty(Re, "passive", {
          get: function get() {
            Me = !0;
          }
        }), window.addEventListener("test", Re, Re), window.removeEventListener("test", Re, Re);
      } catch (ce) {
        Me = !1;
      }

      function De(e, t, n, r, a, o, l, i, u) {
        var s = Array.prototype.slice.call(arguments, 3);

        try {
          t.apply(n, s);
        } catch (c) {
          this.onError(c);
        }
      }

      var Fe = !1,
          Ie = null,
          je = !1,
          Ae = null,
          We = {
        onError: function onError(e) {
          Fe = !0, Ie = e;
        }
      };

      function Ue(e, t, n, r, a, o, l, i, u) {
        Fe = !1, Ie = null, De.apply(We, arguments);
      }

      function Ve(e) {
        var t = e,
            n = e;
        if (e.alternate) for (; t["return"];) {
          t = t["return"];
        } else {
          e = t;

          do {
            0 !== (4098 & (t = e).flags) && (n = t["return"]), e = t["return"];
          } while (e);
        }
        return 3 === t.tag ? n : null;
      }

      function Be(e) {
        if (13 === e.tag) {
          var t = e.memoizedState;
          if (null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t) return t.dehydrated;
        }

        return null;
      }

      function He(e) {
        if (Ve(e) !== e) throw Error(o(188));
      }

      function $e(e) {
        return null !== (e = function (e) {
          var t = e.alternate;

          if (!t) {
            if (null === (t = Ve(e))) throw Error(o(188));
            return t !== e ? null : e;
          }

          for (var n = e, r = t;;) {
            var a = n["return"];
            if (null === a) break;
            var l = a.alternate;

            if (null === l) {
              if (null !== (r = a["return"])) {
                n = r;
                continue;
              }

              break;
            }

            if (a.child === l.child) {
              for (l = a.child; l;) {
                if (l === n) return He(a), e;
                if (l === r) return He(a), t;
                l = l.sibling;
              }

              throw Error(o(188));
            }

            if (n["return"] !== r["return"]) n = a, r = l;else {
              for (var i = !1, u = a.child; u;) {
                if (u === n) {
                  i = !0, n = a, r = l;
                  break;
                }

                if (u === r) {
                  i = !0, r = a, n = l;
                  break;
                }

                u = u.sibling;
              }

              if (!i) {
                for (u = l.child; u;) {
                  if (u === n) {
                    i = !0, n = l, r = a;
                    break;
                  }

                  if (u === r) {
                    i = !0, r = l, n = a;
                    break;
                  }

                  u = u.sibling;
                }

                if (!i) throw Error(o(189));
              }
            }
            if (n.alternate !== r) throw Error(o(190));
          }

          if (3 !== n.tag) throw Error(o(188));
          return n.stateNode.current === n ? e : t;
        }(e)) ? Qe(e) : null;
      }

      function Qe(e) {
        if (5 === e.tag || 6 === e.tag) return e;

        for (e = e.child; null !== e;) {
          var t = Qe(e);
          if (null !== t) return t;
          e = e.sibling;
        }

        return null;
      }

      var qe = a.unstable_scheduleCallback,
          Ke = a.unstable_cancelCallback,
          Ye = a.unstable_shouldYield,
          Ge = a.unstable_requestPaint,
          Xe = a.unstable_now,
          Ze = a.unstable_getCurrentPriorityLevel,
          Je = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
      var lt = Math.clz32 ? Math.clz32 : function (e) {
        return e >>>= 0, 0 === e ? 32 : 31 - (it(e) / ut | 0) | 0;
      },
          it = Math.log,
          ut = Math.LN2;
      var st = 64,
          ct = 4194304;

      function ft(e) {
        switch (e & -e) {
          case 1:
            return 1;

          case 2:
            return 2;

          case 4:
            return 4;

          case 8:
            return 8;

          case 16:
            return 16;

          case 32:
            return 32;

          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return 4194240 & e;

          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return 130023424 & e;

          case 134217728:
            return 134217728;

          case 268435456:
            return 268435456;

          case 536870912:
            return 536870912;

          case 1073741824:
            return 1073741824;

          default:
            return e;
        }
      }

      function dt(e, t) {
        var n = e.pendingLanes;
        if (0 === n) return 0;
        var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            l = 268435455 & n;

        if (0 !== l) {
          var i = l & ~a;
          0 !== i ? r = ft(i) : 0 !== (o &= l) && (r = ft(o));
        } else 0 !== (l = n & ~a) ? r = ft(l) : 0 !== o && (r = ft(o));

        if (0 === r) return 0;
        if (0 !== t && t !== r && 0 === (t & a) && ((a = r & -r) >= (o = t & -t) || 16 === a && 0 !== (4194240 & o))) return t;
        if (0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)) for (e = e.entanglements, t &= r; 0 < t;) {
          a = 1 << (n = 31 - lt(t)), r |= e[n], t &= ~a;
        }
        return r;
      }

      function pt(e, t) {
        switch (e) {
          case 1:
          case 2:
          case 4:
            return t + 250;

          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return t + 5e3;

          default:
            return -1;
        }
      }

      function ht(e) {
        return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
      }

      function vt() {
        var e = st;
        return 0 === (4194240 & (st <<= 1)) && (st = 64), e;
      }

      function mt(e) {
        for (var t = [], n = 0; 31 > n; n++) {
          t.push(e);
        }

        return t;
      }

      function yt(e, t, n) {
        e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - lt(t)] = n;
      }

      function gt(e, t) {
        var n = e.entangledLanes |= t;

        for (e = e.entanglements; n;) {
          var r = 31 - lt(n),
              a = 1 << r;
          a & t | e[r] & t && (e[r] |= t), n &= ~a;
        }
      }

      var bt = 0;

      function kt(e) {
        return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1;
      }

      var wt,
          St,
          xt,
          Et,
          Ct,
          _t = !1,
          Pt = [],
          Lt = null,
          Tt = null,
          Nt = null,
          zt = new Map(),
          Ot = new Map(),
          Mt = [],
          Rt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

      function Dt(e, t) {
        switch (e) {
          case "focusin":
          case "focusout":
            Lt = null;
            break;

          case "dragenter":
          case "dragleave":
            Tt = null;
            break;

          case "mouseover":
          case "mouseout":
            Nt = null;
            break;

          case "pointerover":
          case "pointerout":
            zt["delete"](t.pointerId);
            break;

          case "gotpointercapture":
          case "lostpointercapture":
            Ot["delete"](t.pointerId);
        }
      }

      function Ft(e, t, n, r, a, o) {
        return null === e || e.nativeEvent !== o ? (e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [a]
        }, null !== t && null !== (t = ba(t)) && St(t), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e);
      }

      function It(e) {
        var t = ga(e.target);

        if (null !== t) {
          var n = Ve(t);
          if (null !== n) if (13 === (t = n.tag)) {
            if (null !== (t = Be(n))) return e.blockedOn = t, void Ct(e.priority, function () {
              xt(n);
            });
          } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
        }

        e.blockedOn = null;
      }

      function jt(e) {
        if (null !== e.blockedOn) return !1;

        for (var t = e.targetContainers; 0 < t.length;) {
          var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
          if (null !== n) return null !== (t = ba(n)) && St(t), e.blockedOn = n, !1;
          var r = new (n = e.nativeEvent).constructor(n.type, n);
          ke = r, n.target.dispatchEvent(r), ke = null, t.shift();
        }

        return !0;
      }

      function At(e, t, n) {
        jt(e) && n["delete"](t);
      }

      function Wt() {
        _t = !1, null !== Lt && jt(Lt) && (Lt = null), null !== Tt && jt(Tt) && (Tt = null), null !== Nt && jt(Nt) && (Nt = null), zt.forEach(At), Ot.forEach(At);
      }

      function Ut(e, t) {
        e.blockedOn === t && (e.blockedOn = null, _t || (_t = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Wt)));
      }

      function Vt(e) {
        function t(t) {
          return Ut(t, e);
        }

        if (0 < Pt.length) {
          Ut(Pt[0], e);

          for (var n = 1; n < Pt.length; n++) {
            var r = Pt[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
        }

        for (null !== Lt && Ut(Lt, e), null !== Tt && Ut(Tt, e), null !== Nt && Ut(Nt, e), zt.forEach(t), Ot.forEach(t), n = 0; n < Mt.length; n++) {
          (r = Mt[n]).blockedOn === e && (r.blockedOn = null);
        }

        for (; 0 < Mt.length && null === (n = Mt[0]).blockedOn;) {
          It(n), null === n.blockedOn && Mt.shift();
        }
      }

      var Bt = k.ReactCurrentBatchConfig,
          Ht = !0;

      function $t(e, t, n, r) {
        var a = bt,
            o = Bt.transition;
        Bt.transition = null;

        try {
          bt = 1, qt(e, t, n, r);
        } finally {
          bt = a, Bt.transition = o;
        }
      }

      function Qt(e, t, n, r) {
        var a = bt,
            o = Bt.transition;
        Bt.transition = null;

        try {
          bt = 4, qt(e, t, n, r);
        } finally {
          bt = a, Bt.transition = o;
        }
      }

      function qt(e, t, n, r) {
        if (Ht) {
          var a = Yt(e, t, n, r);
          if (null === a) Hr(e, t, r, Kt, n), Dt(e, r);else if (function (e, t, n, r, a) {
            switch (t) {
              case "focusin":
                return Lt = Ft(Lt, e, t, n, r, a), !0;

              case "dragenter":
                return Tt = Ft(Tt, e, t, n, r, a), !0;

              case "mouseover":
                return Nt = Ft(Nt, e, t, n, r, a), !0;

              case "pointerover":
                var o = a.pointerId;
                return zt.set(o, Ft(zt.get(o) || null, e, t, n, r, a)), !0;

              case "gotpointercapture":
                return o = a.pointerId, Ot.set(o, Ft(Ot.get(o) || null, e, t, n, r, a)), !0;
            }

            return !1;
          }(a, e, t, n, r)) r.stopPropagation();else if (Dt(e, r), 4 & t && -1 < Rt.indexOf(e)) {
            for (; null !== a;) {
              var o = ba(a);
              if (null !== o && wt(o), null === (o = Yt(e, t, n, r)) && Hr(e, t, r, Kt, n), o === a) break;
              a = o;
            }

            null !== a && r.stopPropagation();
          } else Hr(e, t, r, null, n);
        }
      }

      var Kt = null;

      function Yt(e, t, n, r) {
        if (Kt = null, null !== (e = ga(e = we(r)))) if (null === (t = Ve(e))) e = null;else if (13 === (n = t.tag)) {
          if (null !== (e = Be(t))) return e;
          e = null;
        } else if (3 === n) {
          if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
        return Kt = e, null;
      }

      function Gt(e) {
        switch (e) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;

          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;

          case "message":
            switch (Ze()) {
              case Je:
                return 1;

              case et:
                return 4;

              case tt:
              case nt:
                return 16;

              case rt:
                return 536870912;

              default:
                return 16;
            }

          default:
            return 16;
        }
      }

      var Xt = null,
          Zt = null,
          Jt = null;

      function en() {
        if (Jt) return Jt;
        var e,
            t,
            n = Zt,
            r = n.length,
            a = "value" in Xt ? Xt.value : Xt.textContent,
            o = a.length;

        for (e = 0; e < r && n[e] === a[e]; e++) {
          ;
        }

        var l = r - e;

        for (t = 1; t <= l && n[r - t] === a[o - t]; t++) {
          ;
        }

        return Jt = a.slice(e, 1 < t ? 1 - t : void 0);
      }

      function tn(e) {
        var t = e.keyCode;
        return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0;
      }

      function nn() {
        return !0;
      }

      function rn() {
        return !1;
      }

      function an(e) {
        function t(t, n, r, a, o) {
          for (var l in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = o, this.currentTarget = null, e) {
            e.hasOwnProperty(l) && (t = e[l], this[l] = t ? t(a) : a[l]);
          }

          return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? nn : rn, this.isPropagationStopped = rn, this;
        }

        return I(t.prototype, {
          preventDefault: function preventDefault() {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn);
          },
          stopPropagation: function stopPropagation() {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn);
          },
          persist: function persist() {},
          isPersistent: nn
        }), t;
      }

      var on,
          ln,
          un,
          sn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function timeStamp(e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
      },
          cn = an(sn),
          fn = I({}, sn, {
        view: 0,
        detail: 0
      }),
          dn = an(fn),
          pn = I({}, fn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Cn,
        button: 0,
        buttons: 0,
        relatedTarget: function relatedTarget(e) {
          return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        },
        movementX: function movementX(e) {
          return "movementX" in e ? e.movementX : (e !== un && (un && "mousemove" === e.type ? (on = e.screenX - un.screenX, ln = e.screenY - un.screenY) : ln = on = 0, un = e), on);
        },
        movementY: function movementY(e) {
          return "movementY" in e ? e.movementY : ln;
        }
      }),
          hn = an(pn),
          vn = an(I({}, pn, {
        dataTransfer: 0
      })),
          mn = an(I({}, fn, {
        relatedTarget: 0
      })),
          yn = an(I({}, sn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
      })),
          gn = I({}, sn, {
        clipboardData: function clipboardData(e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
      }),
          bn = an(gn),
          kn = an(I({}, sn, {
        data: 0
      })),
          wn = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      },
          Sn = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      },
          xn = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
      };

      function En(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = xn[e]) && !!t[e];
      }

      function Cn() {
        return En;
      }

      var _n = I({}, fn, {
        key: function key(e) {
          if (e.key) {
            var t = wn[e.key] || e.key;
            if ("Unidentified" !== t) return t;
          }

          return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Sn[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Cn,
        charCode: function charCode(e) {
          return "keypress" === e.type ? tn(e) : 0;
        },
        keyCode: function keyCode(e) {
          return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
        },
        which: function which(e) {
          return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
        }
      }),
          Pn = an(_n),
          Ln = an(I({}, pn, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
      })),
          Tn = an(I({}, fn, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Cn
      })),
          Nn = an(I({}, sn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
      })),
          zn = I({}, pn, {
        deltaX: function deltaX(e) {
          return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function deltaY(e) {
          return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      }),
          On = an(zn),
          Mn = [9, 13, 27, 32],
          Rn = c && "CompositionEvent" in window,
          Dn = null;

      c && "documentMode" in document && (Dn = document.documentMode);
      var Fn = c && "TextEvent" in window && !Dn,
          In = c && (!Rn || Dn && 8 < Dn && 11 >= Dn),
          jn = String.fromCharCode(32),
          An = !1;

      function Wn(e, t) {
        switch (e) {
          case "keyup":
            return -1 !== Mn.indexOf(t.keyCode);

          case "keydown":
            return 229 !== t.keyCode;

          case "keypress":
          case "mousedown":
          case "focusout":
            return !0;

          default:
            return !1;
        }
      }

      function Un(e) {
        return "object" === _typeof(e = e.detail) && "data" in e ? e.data : null;
      }

      var Vn = !1;
      var Bn = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
      };

      function Hn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!Bn[e.type] : "textarea" === t;
      }

      function $n(e, t, n, r) {
        _e(r), 0 < (t = Qr(t, "onChange")).length && (n = new cn("onChange", "change", null, n, r), e.push({
          event: n,
          listeners: t
        }));
      }

      var Qn = null,
          qn = null;

      function Kn(e) {
        jr(e, 0);
      }

      function Yn(e) {
        if (q(ka(e))) return e;
      }

      function Gn(e, t) {
        if ("change" === e) return t;
      }

      var Xn = !1;

      if (c) {
        var Zn;

        if (c) {
          var Jn = "oninput" in document;

          if (!Jn) {
            var er = document.createElement("div");
            er.setAttribute("oninput", "return;"), Jn = "function" === typeof er.oninput;
          }

          Zn = Jn;
        } else Zn = !1;

        Xn = Zn && (!document.documentMode || 9 < document.documentMode);
      }

      function tr() {
        Qn && (Qn.detachEvent("onpropertychange", nr), qn = Qn = null);
      }

      function nr(e) {
        if ("value" === e.propertyName && Yn(qn)) {
          var t = [];
          $n(t, qn, e, we(e)), ze(Kn, t);
        }
      }

      function rr(e, t, n) {
        "focusin" === e ? (tr(), qn = n, (Qn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr();
      }

      function ar(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Yn(qn);
      }

      function or(e, t) {
        if ("click" === e) return Yn(t);
      }

      function lr(e, t) {
        if ("input" === e || "change" === e) return Yn(t);
      }

      var ir = "function" === typeof Object.is ? Object.is : function (e, t) {
        return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t;
      };

      function ur(e, t) {
        if (ir(e, t)) return !0;
        if ("object" !== _typeof(e) || null === e || "object" !== _typeof(t) || null === t) return !1;
        var n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;

        for (r = 0; r < n.length; r++) {
          var a = n[r];
          if (!f.call(t, a) || !ir(e[a], t[a])) return !1;
        }

        return !0;
      }

      function sr(e) {
        for (; e && e.firstChild;) {
          e = e.firstChild;
        }

        return e;
      }

      function cr(e, t) {
        var n,
            r = sr(e);

        for (e = 0; r;) {
          if (3 === r.nodeType) {
            if (n = e + r.textContent.length, e <= t && n >= t) return {
              node: r,
              offset: t - e
            };
            e = n;
          }

          e: {
            for (; r;) {
              if (r.nextSibling) {
                r = r.nextSibling;
                break e;
              }

              r = r.parentNode;
            }

            r = void 0;
          }

          r = sr(r);
        }
      }

      function fr(e, t) {
        return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? fr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))));
      }

      function dr() {
        for (var e = window, t = K(); t instanceof e.HTMLIFrameElement;) {
          try {
            var n = "string" === typeof t.contentWindow.location.href;
          } catch (r) {
            n = !1;
          }

          if (!n) break;
          t = K((e = t.contentWindow).document);
        }

        return t;
      }

      function pr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable);
      }

      function hr(e) {
        var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;

        if (t !== n && n && n.ownerDocument && fr(n.ownerDocument.documentElement, n)) {
          if (null !== r && pr(n)) if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
            e = e.getSelection();
            var a = n.textContent.length,
                o = Math.min(r.start, a);
            r = void 0 === r.end ? o : Math.min(r.end, a), !e.extend && o > r && (a = r, r = o, o = a), a = cr(n, o);
            var l = cr(n, r);
            a && l && (1 !== e.rangeCount || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && ((t = t.createRange()).setStart(a.node, a.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
          }

          for (t = [], e = n; e = e.parentNode;) {
            1 === e.nodeType && t.push({
              element: e,
              left: e.scrollLeft,
              top: e.scrollTop
            });
          }

          for ("function" === typeof n.focus && n.focus(), n = 0; n < t.length; n++) {
            (e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top;
          }
        }
      }

      var vr = c && "documentMode" in document && 11 >= document.documentMode,
          mr = null,
          yr = null,
          gr = null,
          br = !1;

      function kr(e, t, n) {
        var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
        br || null == mr || mr !== K(r) || ("selectionStart" in (r = mr) && pr(r) ? r = {
          start: r.selectionStart,
          end: r.selectionEnd
        } : r = {
          anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset
        }, gr && ur(gr, r) || (gr = r, 0 < (r = Qr(yr, "onSelect")).length && (t = new cn("onSelect", "select", null, t, n), e.push({
          event: t,
          listeners: r
        }), t.target = mr)));
      }

      function wr(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
      }

      var Sr = {
        animationend: wr("Animation", "AnimationEnd"),
        animationiteration: wr("Animation", "AnimationIteration"),
        animationstart: wr("Animation", "AnimationStart"),
        transitionend: wr("Transition", "TransitionEnd")
      },
          xr = {},
          Er = {};

      function Cr(e) {
        if (xr[e]) return xr[e];
        if (!Sr[e]) return e;
        var t,
            n = Sr[e];

        for (t in n) {
          if (n.hasOwnProperty(t) && t in Er) return xr[e] = n[t];
        }

        return e;
      }

      c && (Er = document.createElement("div").style, "AnimationEvent" in window || (delete Sr.animationend.animation, delete Sr.animationiteration.animation, delete Sr.animationstart.animation), "TransitionEvent" in window || delete Sr.transitionend.transition);

      var _r = Cr("animationend"),
          Pr = Cr("animationiteration"),
          Lr = Cr("animationstart"),
          Tr = Cr("transitionend"),
          Nr = new Map(),
          zr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

      function Or(e, t) {
        Nr.set(e, t), u(t, [e]);
      }

      for (var Mr = 0; Mr < zr.length; Mr++) {
        var Rr = zr[Mr];
        Or(Rr.toLowerCase(), "on" + (Rr[0].toUpperCase() + Rr.slice(1)));
      }

      Or(_r, "onAnimationEnd"), Or(Pr, "onAnimationIteration"), Or(Lr, "onAnimationStart"), Or("dblclick", "onDoubleClick"), Or("focusin", "onFocus"), Or("focusout", "onBlur"), Or(Tr, "onTransitionEnd"), s("onMouseEnter", ["mouseout", "mouseover"]), s("onMouseLeave", ["mouseout", "mouseover"]), s("onPointerEnter", ["pointerout", "pointerover"]), s("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var Dr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
          Fr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));

      function Ir(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, function (e, t, n, r, a, l, i, u, s) {
          if (Ue.apply(this, arguments), Fe) {
            if (!Fe) throw Error(o(198));
            var c = Ie;
            Fe = !1, Ie = null, je || (je = !0, Ae = c);
          }
        }(r, t, void 0, e), e.currentTarget = null;
      }

      function jr(e, t) {
        t = 0 !== (4 & t);

        for (var n = 0; n < e.length; n++) {
          var r = e[n],
              a = r.event;
          r = r.listeners;

          e: {
            var o = void 0;
            if (t) for (var l = r.length - 1; 0 <= l; l--) {
              var i = r[l],
                  u = i.instance,
                  s = i.currentTarget;
              if (i = i.listener, u !== o && a.isPropagationStopped()) break e;
              Ir(a, i, s), o = u;
            } else for (l = 0; l < r.length; l++) {
              if (u = (i = r[l]).instance, s = i.currentTarget, i = i.listener, u !== o && a.isPropagationStopped()) break e;
              Ir(a, i, s), o = u;
            }
          }
        }

        if (je) throw e = Ae, je = !1, Ae = null, e;
      }

      function Ar(e, t) {
        var n = t[va];
        void 0 === n && (n = t[va] = new Set());
        var r = e + "__bubble";
        n.has(r) || (Br(t, e, 2, !1), n.add(r));
      }

      function Wr(e, t, n) {
        var r = 0;
        t && (r |= 4), Br(n, e, r, t);
      }

      var Ur = "_reactListening" + Math.random().toString(36).slice(2);

      function Vr(e) {
        if (!e[Ur]) {
          e[Ur] = !0, l.forEach(function (t) {
            "selectionchange" !== t && (Fr.has(t) || Wr(t, !1, e), Wr(t, !0, e));
          });
          var t = 9 === e.nodeType ? e : e.ownerDocument;
          null === t || t[Ur] || (t[Ur] = !0, Wr("selectionchange", !1, t));
        }
      }

      function Br(e, t, n, r) {
        switch (Gt(t)) {
          case 1:
            var a = $t;
            break;

          case 4:
            a = Qt;
            break;

          default:
            a = qt;
        }

        n = a.bind(null, t, n, e), a = void 0, !Me || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, {
          capture: !0,
          passive: a
        }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, {
          passive: a
        }) : e.addEventListener(t, n, !1);
      }

      function Hr(e, t, n, r, a) {
        var o = r;
        if (0 === (1 & t) && 0 === (2 & t) && null !== r) e: for (;;) {
          if (null === r) return;
          var l = r.tag;

          if (3 === l || 4 === l) {
            var i = r.stateNode.containerInfo;
            if (i === a || 8 === i.nodeType && i.parentNode === a) break;
            if (4 === l) for (l = r["return"]; null !== l;) {
              var u = l.tag;
              if ((3 === u || 4 === u) && ((u = l.stateNode.containerInfo) === a || 8 === u.nodeType && u.parentNode === a)) return;
              l = l["return"];
            }

            for (; null !== i;) {
              if (null === (l = ga(i))) return;

              if (5 === (u = l.tag) || 6 === u) {
                r = o = l;
                continue e;
              }

              i = i.parentNode;
            }
          }

          r = r["return"];
        }
        ze(function () {
          var r = o,
              a = we(n),
              l = [];

          e: {
            var i = Nr.get(e);

            if (void 0 !== i) {
              var u = cn,
                  s = e;

              switch (e) {
                case "keypress":
                  if (0 === tn(n)) break e;

                case "keydown":
                case "keyup":
                  u = Pn;
                  break;

                case "focusin":
                  s = "focus", u = mn;
                  break;

                case "focusout":
                  s = "blur", u = mn;
                  break;

                case "beforeblur":
                case "afterblur":
                  u = mn;
                  break;

                case "click":
                  if (2 === n.button) break e;

                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  u = hn;
                  break;

                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  u = vn;
                  break;

                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  u = Tn;
                  break;

                case _r:
                case Pr:
                case Lr:
                  u = yn;
                  break;

                case Tr:
                  u = Nn;
                  break;

                case "scroll":
                  u = dn;
                  break;

                case "wheel":
                  u = On;
                  break;

                case "copy":
                case "cut":
                case "paste":
                  u = bn;
                  break;

                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  u = Ln;
              }

              var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? null !== i ? i + "Capture" : null : i;
              c = [];

              for (var p, h = r; null !== h;) {
                var v = (p = h).stateNode;
                if (5 === p.tag && null !== v && (p = v, null !== d && null != (v = Oe(h, d)) && c.push($r(h, v, p))), f) break;
                h = h["return"];
              }

              0 < c.length && (i = new u(i, s, null, n, a), l.push({
                event: i,
                listeners: c
              }));
            }
          }

          if (0 === (7 & t)) {
            if (u = "mouseout" === e || "pointerout" === e, (!(i = "mouseover" === e || "pointerover" === e) || n === ke || !(s = n.relatedTarget || n.fromElement) || !ga(s) && !s[ha]) && (u || i) && (i = a.window === a ? a : (i = a.ownerDocument) ? i.defaultView || i.parentWindow : window, u ? (u = r, null !== (s = (s = n.relatedTarget || n.toElement) ? ga(s) : null) && (s !== (f = Ve(s)) || 5 !== s.tag && 6 !== s.tag) && (s = null)) : (u = null, s = r), u !== s)) {
              if (c = hn, v = "onMouseLeave", d = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (c = Ln, v = "onPointerLeave", d = "onPointerEnter", h = "pointer"), f = null == u ? i : ka(u), p = null == s ? i : ka(s), (i = new c(v, h + "leave", u, n, a)).target = f, i.relatedTarget = p, v = null, ga(a) === r && ((c = new c(d, h + "enter", s, n, a)).target = p, c.relatedTarget = f, v = c), f = v, u && s) e: {
                for (d = s, h = 0, p = c = u; p; p = qr(p)) {
                  h++;
                }

                for (p = 0, v = d; v; v = qr(v)) {
                  p++;
                }

                for (; 0 < h - p;) {
                  c = qr(c), h--;
                }

                for (; 0 < p - h;) {
                  d = qr(d), p--;
                }

                for (; h--;) {
                  if (c === d || null !== d && c === d.alternate) break e;
                  c = qr(c), d = qr(d);
                }

                c = null;
              } else c = null;
              null !== u && Kr(l, i, u, c, !1), null !== s && null !== f && Kr(l, f, s, c, !0);
            }

            if ("select" === (u = (i = r ? ka(r) : window).nodeName && i.nodeName.toLowerCase()) || "input" === u && "file" === i.type) var m = Gn;else if (Hn(i)) {
              if (Xn) m = lr;else {
                m = ar;
                var y = rr;
              }
            } else (u = i.nodeName) && "input" === u.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (m = or);

            switch (m && (m = m(e, r)) ? $n(l, m, n, a) : (y && y(e, i, r), "focusout" === e && (y = i._wrapperState) && y.controlled && "number" === i.type && ee(i, "number", i.value)), y = r ? ka(r) : window, e) {
              case "focusin":
                (Hn(y) || "true" === y.contentEditable) && (mr = y, yr = r, gr = null);
                break;

              case "focusout":
                gr = yr = mr = null;
                break;

              case "mousedown":
                br = !0;
                break;

              case "contextmenu":
              case "mouseup":
              case "dragend":
                br = !1, kr(l, n, a);
                break;

              case "selectionchange":
                if (vr) break;

              case "keydown":
              case "keyup":
                kr(l, n, a);
            }

            var g;
            if (Rn) e: {
              switch (e) {
                case "compositionstart":
                  var b = "onCompositionStart";
                  break e;

                case "compositionend":
                  b = "onCompositionEnd";
                  break e;

                case "compositionupdate":
                  b = "onCompositionUpdate";
                  break e;
              }

              b = void 0;
            } else Vn ? Wn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
            b && (In && "ko" !== n.locale && (Vn || "onCompositionStart" !== b ? "onCompositionEnd" === b && Vn && (g = en()) : (Zt = "value" in (Xt = a) ? Xt.value : Xt.textContent, Vn = !0)), 0 < (y = Qr(r, b)).length && (b = new kn(b, e, null, n, a), l.push({
              event: b,
              listeners: y
            }), g ? b.data = g : null !== (g = Un(n)) && (b.data = g))), (g = Fn ? function (e, t) {
              switch (e) {
                case "compositionend":
                  return Un(t);

                case "keypress":
                  return 32 !== t.which ? null : (An = !0, jn);

                case "textInput":
                  return (e = t.data) === jn && An ? null : e;

                default:
                  return null;
              }
            }(e, n) : function (e, t) {
              if (Vn) return "compositionend" === e || !Rn && Wn(e, t) ? (e = en(), Jt = Zt = Xt = null, Vn = !1, e) : null;

              switch (e) {
                case "paste":
                default:
                  return null;

                case "keypress":
                  if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t["char"] && 1 < t["char"].length) return t["char"];
                    if (t.which) return String.fromCharCode(t.which);
                  }

                  return null;

                case "compositionend":
                  return In && "ko" !== t.locale ? null : t.data;
              }
            }(e, n)) && 0 < (r = Qr(r, "onBeforeInput")).length && (a = new kn("onBeforeInput", "beforeinput", null, n, a), l.push({
              event: a,
              listeners: r
            }), a.data = g);
          }

          jr(l, t);
        });
      }

      function $r(e, t, n) {
        return {
          instance: e,
          listener: t,
          currentTarget: n
        };
      }

      function Qr(e, t) {
        for (var n = t + "Capture", r = []; null !== e;) {
          var a = e,
              o = a.stateNode;
          5 === a.tag && null !== o && (a = o, null != (o = Oe(e, n)) && r.unshift($r(e, o, a)), null != (o = Oe(e, t)) && r.push($r(e, o, a))), e = e["return"];
        }

        return r;
      }

      function qr(e) {
        if (null === e) return null;

        do {
          e = e["return"];
        } while (e && 5 !== e.tag);

        return e || null;
      }

      function Kr(e, t, n, r, a) {
        for (var o = t._reactName, l = []; null !== n && n !== r;) {
          var i = n,
              u = i.alternate,
              s = i.stateNode;
          if (null !== u && u === r) break;
          5 === i.tag && null !== s && (i = s, a ? null != (u = Oe(n, o)) && l.unshift($r(n, u, i)) : a || null != (u = Oe(n, o)) && l.push($r(n, u, i))), n = n["return"];
        }

        0 !== l.length && e.push({
          event: t,
          listeners: l
        });
      }

      var Yr = /\r\n?/g,
          Gr = /\u0000|\uFFFD/g;

      function Xr(e) {
        return ("string" === typeof e ? e : "" + e).replace(Yr, "\n").replace(Gr, "");
      }

      function Zr(e, t, n) {
        if (t = Xr(t), Xr(e) !== t && n) throw Error(o(425));
      }

      function Jr() {}

      var ea = null,
          ta = null;

      function na(e, t) {
        return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === _typeof(t.dangerouslySetInnerHTML) && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html;
      }

      var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" === typeof Promise ? Promise : void 0,
          la = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof oa ? function (e) {
        return oa.resolve(null).then(e)["catch"](ia);
      } : ra;

      function ia(e) {
        setTimeout(function () {
          throw e;
        });
      }

      function ua(e, t) {
        var n = t,
            r = 0;

        do {
          var a = n.nextSibling;
          if (e.removeChild(n), a && 8 === a.nodeType) if ("/$" === (n = a.data)) {
            if (0 === r) return e.removeChild(a), void Vt(t);
            r--;
          } else "$" !== n && "$?" !== n && "$!" !== n || r++;
          n = a;
        } while (n);

        Vt(t);
      }

      function sa(e) {
        for (; null != e; e = e.nextSibling) {
          var t = e.nodeType;
          if (1 === t || 3 === t) break;

          if (8 === t) {
            if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
            if ("/$" === t) return null;
          }
        }

        return e;
      }

      function ca(e) {
        e = e.previousSibling;

        for (var t = 0; e;) {
          if (8 === e.nodeType) {
            var n = e.data;

            if ("$" === n || "$!" === n || "$?" === n) {
              if (0 === t) return e;
              t--;
            } else "/$" === n && t++;
          }

          e = e.previousSibling;
        }

        return null;
      }

      var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          pa = "__reactProps$" + fa,
          ha = "__reactContainer$" + fa,
          va = "__reactEvents$" + fa,
          ma = "__reactListeners$" + fa,
          ya = "__reactHandles$" + fa;

      function ga(e) {
        var t = e[da];
        if (t) return t;

        for (var n = e.parentNode; n;) {
          if (t = n[ha] || n[da]) {
            if (n = t.alternate, null !== t.child || null !== n && null !== n.child) for (e = ca(e); null !== e;) {
              if (n = e[da]) return n;
              e = ca(e);
            }
            return t;
          }

          n = (e = n).parentNode;
        }

        return null;
      }

      function ba(e) {
        return !(e = e[da] || e[ha]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e;
      }

      function ka(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(o(33));
      }

      function wa(e) {
        return e[pa] || null;
      }

      var Sa = [],
          xa = -1;

      function Ea(e) {
        return {
          current: e
        };
      }

      function Ca(e) {
        0 > xa || (e.current = Sa[xa], Sa[xa] = null, xa--);
      }

      function _a(e, t) {
        xa++, Sa[xa] = e.current, e.current = t;
      }

      var Pa = {},
          La = Ea(Pa),
          Ta = Ea(!1),
          Na = Pa;

      function za(e, t) {
        var n = e.type.contextTypes;
        if (!n) return Pa;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var a,
            o = {};

        for (a in n) {
          o[a] = t[a];
        }

        return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
      }

      function Oa(e) {
        return null !== (e = e.childContextTypes) && void 0 !== e;
      }

      function Ma() {
        Ca(Ta), Ca(La);
      }

      function Ra(e, t, n) {
        if (La.current !== Pa) throw Error(o(168));
        _a(La, t), _a(Ta, n);
      }

      function Da(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, "function" !== typeof r.getChildContext) return n;

        for (var a in r = r.getChildContext()) {
          if (!(a in t)) throw Error(o(108, B(e) || "Unknown", a));
        }

        return I({}, n, r);
      }

      function Fa(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Pa, Na = La.current, _a(La, e), _a(Ta, Ta.current), !0;
      }

      function Ia(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(o(169));
        n ? (e = Da(e, t, Na), r.__reactInternalMemoizedMergedChildContext = e, Ca(Ta), Ca(La), _a(La, e)) : Ca(Ta), _a(Ta, n);
      }

      var ja = null,
          Aa = !1,
          Wa = !1;

      function Ua(e) {
        null === ja ? ja = [e] : ja.push(e);
      }

      function Va() {
        if (!Wa && null !== ja) {
          Wa = !0;
          var e = 0,
              t = bt;

          try {
            var n = ja;

            for (bt = 1; e < n.length; e++) {
              var r = n[e];

              do {
                r = r(!0);
              } while (null !== r);
            }

            ja = null, Aa = !1;
          } catch (a) {
            throw null !== ja && (ja = ja.slice(e + 1)), qe(Je, Va), a;
          } finally {
            bt = t, Wa = !1;
          }
        }

        return null;
      }

      var Ba = [],
          Ha = 0,
          $a = null,
          Qa = 0,
          qa = [],
          Ka = 0,
          Ya = null,
          Ga = 1,
          Xa = "";

      function Za(e, t) {
        Ba[Ha++] = Qa, Ba[Ha++] = $a, $a = e, Qa = t;
      }

      function Ja(e, t, n) {
        qa[Ka++] = Ga, qa[Ka++] = Xa, qa[Ka++] = Ya, Ya = e;
        var r = Ga;
        e = Xa;
        var a = 32 - lt(r) - 1;
        r &= ~(1 << a), n += 1;
        var o = 32 - lt(t) + a;

        if (30 < o) {
          var l = a - a % 5;
          o = (r & (1 << l) - 1).toString(32), r >>= l, a -= l, Ga = 1 << 32 - lt(t) + a | n << a | r, Xa = o + e;
        } else Ga = 1 << o | n << a | r, Xa = e;
      }

      function eo(e) {
        null !== e["return"] && (Za(e, 1), Ja(e, 1, 0));
      }

      function to(e) {
        for (; e === $a;) {
          $a = Ba[--Ha], Ba[Ha] = null, Qa = Ba[--Ha], Ba[Ha] = null;
        }

        for (; e === Ya;) {
          Ya = qa[--Ka], qa[Ka] = null, Xa = qa[--Ka], qa[Ka] = null, Ga = qa[--Ka], qa[Ka] = null;
        }
      }

      var no = null,
          ro = null,
          ao = !1,
          oo = null;

      function lo(e, t) {
        var n = Os(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n["return"] = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n);
      }

      function io(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type;
            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, no = e, ro = sa(t.firstChild), !0);

          case 6:
            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, no = e, ro = null, !0);

          case 13:
            return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Ya ? {
              id: Ga,
              overflow: Xa
            } : null, e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824
            }, (n = Os(18, null, null, 0)).stateNode = t, n["return"] = e, e.child = n, no = e, ro = null, !0);

          default:
            return !1;
        }
      }

      function uo(e) {
        return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
      }

      function so(e) {
        if (ao) {
          var t = ro;

          if (t) {
            var n = t;

            if (!io(e, t)) {
              if (uo(e)) throw Error(o(418));
              t = sa(n.nextSibling);
              var r = no;
              t && io(e, t) ? lo(r, n) : (e.flags = -4097 & e.flags | 2, ao = !1, no = e);
            }
          } else {
            if (uo(e)) throw Error(o(418));
            e.flags = -4097 & e.flags | 2, ao = !1, no = e;
          }
        }
      }

      function co(e) {
        for (e = e["return"]; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) {
          e = e["return"];
        }

        no = e;
      }

      function fo(e) {
        if (e !== no) return !1;
        if (!ao) return co(e), ao = !0, !1;
        var t;

        if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !na(e.type, e.memoizedProps)), t && (t = ro)) {
          if (uo(e)) throw po(), Error(o(418));

          for (; t;) {
            lo(e, t), t = sa(t.nextSibling);
          }
        }

        if (co(e), 13 === e.tag) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));

          e: {
            for (e = e.nextSibling, t = 0; e;) {
              if (8 === e.nodeType) {
                var n = e.data;

                if ("/$" === n) {
                  if (0 === t) {
                    ro = sa(e.nextSibling);
                    break e;
                  }

                  t--;
                } else "$" !== n && "$!" !== n && "$?" !== n || t++;
              }

              e = e.nextSibling;
            }

            ro = null;
          }
        } else ro = no ? sa(e.stateNode.nextSibling) : null;

        return !0;
      }

      function po() {
        for (var e = ro; e;) {
          e = sa(e.nextSibling);
        }
      }

      function ho() {
        ro = no = null, ao = !1;
      }

      function vo(e) {
        null === oo ? oo = [e] : oo.push(e);
      }

      var mo = k.ReactCurrentBatchConfig;

      function yo(e, t) {
        if (e && e.defaultProps) {
          for (var n in t = I({}, t), e = e.defaultProps) {
            void 0 === t[n] && (t[n] = e[n]);
          }

          return t;
        }

        return t;
      }

      var go = Ea(null),
          bo = null,
          ko = null,
          wo = null;

      function So() {
        wo = ko = bo = null;
      }

      function xo(e) {
        var t = go.current;
        Ca(go), e._currentValue = t;
      }

      function Eo(e, t, n) {
        for (; null !== e;) {
          var r = e.alternate;
          if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
          e = e["return"];
        }
      }

      function Co(e, t) {
        bo = e, wo = ko = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (ki = !0), e.firstContext = null);
      }

      function _o(e) {
        var t = e._currentValue;
        if (wo !== e) if (e = {
          context: e,
          memoizedValue: t,
          next: null
        }, null === ko) {
          if (null === bo) throw Error(o(308));
          ko = e, bo.dependencies = {
            lanes: 0,
            firstContext: e
          };
        } else ko = ko.next = e;
        return t;
      }

      var Po = null;

      function Lo(e) {
        null === Po ? Po = [e] : Po.push(e);
      }

      function To(e, t, n, r) {
        var a = t.interleaved;
        return null === a ? (n.next = n, Lo(t)) : (n.next = a.next, a.next = n), t.interleaved = n, No(e, r);
      }

      function No(e, t) {
        e.lanes |= t;
        var n = e.alternate;

        for (null !== n && (n.lanes |= t), n = e, e = e["return"]; null !== e;) {
          e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e["return"];
        }

        return 3 === n.tag ? n.stateNode : null;
      }

      var zo = !1;

      function Oo(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: {
            pending: null,
            interleaved: null,
            lanes: 0
          },
          effects: null
        };
      }

      function Mo(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects
        });
      }

      function Ro(e, t) {
        return {
          eventTime: e,
          lane: t,
          tag: 0,
          payload: null,
          callback: null,
          next: null
        };
      }

      function Do(e, t, n) {
        var r = e.updateQueue;
        if (null === r) return null;

        if (r = r.shared, 0 !== (2 & Tu)) {
          var a = r.pending;
          return null === a ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, No(e, n);
        }

        return null === (a = r.interleaved) ? (t.next = t, Lo(r)) : (t.next = a.next, a.next = t), r.interleaved = t, No(e, n);
      }

      function Fo(e, t, n) {
        if (null !== (t = t.updateQueue) && (t = t.shared, 0 !== (4194240 & n))) {
          var r = t.lanes;
          n |= r &= e.pendingLanes, t.lanes = n, gt(e, n);
        }
      }

      function Io(e, t) {
        var n = e.updateQueue,
            r = e.alternate;

        if (null !== r && n === (r = r.updateQueue)) {
          var a = null,
              o = null;

          if (null !== (n = n.firstBaseUpdate)) {
            do {
              var l = {
                eventTime: n.eventTime,
                lane: n.lane,
                tag: n.tag,
                payload: n.payload,
                callback: n.callback,
                next: null
              };
              null === o ? a = o = l : o = o.next = l, n = n.next;
            } while (null !== n);

            null === o ? a = o = t : o = o.next = t;
          } else a = o = t;

          return n = {
            baseState: r.baseState,
            firstBaseUpdate: a,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
          }, void (e.updateQueue = n);
        }

        null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
      }

      function jo(e, t, n, r) {
        var a = e.updateQueue;
        zo = !1;
        var o = a.firstBaseUpdate,
            l = a.lastBaseUpdate,
            i = a.shared.pending;

        if (null !== i) {
          a.shared.pending = null;
          var u = i,
              s = u.next;
          u.next = null, null === l ? o = s : l.next = s, l = u;
          var c = e.alternate;
          null !== c && (i = (c = c.updateQueue).lastBaseUpdate) !== l && (null === i ? c.firstBaseUpdate = s : i.next = s, c.lastBaseUpdate = u);
        }

        if (null !== o) {
          var f = a.baseState;

          for (l = 0, c = s = u = null, i = o;;) {
            var d = i.lane,
                p = i.eventTime;

            if ((r & d) === d) {
              null !== c && (c = c.next = {
                eventTime: p,
                lane: 0,
                tag: i.tag,
                payload: i.payload,
                callback: i.callback,
                next: null
              });

              e: {
                var h = e,
                    v = i;

                switch (d = t, p = n, v.tag) {
                  case 1:
                    if ("function" === typeof (h = v.payload)) {
                      f = h.call(p, f, d);
                      break e;
                    }

                    f = h;
                    break e;

                  case 3:
                    h.flags = -65537 & h.flags | 128;

                  case 0:
                    if (null === (d = "function" === typeof (h = v.payload) ? h.call(p, f, d) : h) || void 0 === d) break e;
                    f = I({}, f, d);
                    break e;

                  case 2:
                    zo = !0;
                }
              }

              null !== i.callback && 0 !== i.lane && (e.flags |= 64, null === (d = a.effects) ? a.effects = [i] : d.push(i));
            } else p = {
              eventTime: p,
              lane: d,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null
            }, null === c ? (s = c = p, u = f) : c = c.next = p, l |= d;

            if (null === (i = i.next)) {
              if (null === (i = a.shared.pending)) break;
              i = (d = i).next, d.next = null, a.lastBaseUpdate = d, a.shared.pending = null;
            }
          }

          if (null === c && (u = f), a.baseState = u, a.firstBaseUpdate = s, a.lastBaseUpdate = c, null !== (t = a.shared.interleaved)) {
            a = t;

            do {
              l |= a.lane, a = a.next;
            } while (a !== t);
          } else null === o && (a.shared.lanes = 0);

          Iu |= l, e.lanes = l, e.memoizedState = f;
        }
      }

      function Ao(e, t, n) {
        if (e = t.effects, t.effects = null, null !== e) for (t = 0; t < e.length; t++) {
          var r = e[t],
              a = r.callback;

          if (null !== a) {
            if (r.callback = null, r = n, "function" !== typeof a) throw Error(o(191, a));
            a.call(r);
          }
        }
      }

      var Wo = new r.Component().refs;

      function Uo(e, t, n, r) {
        n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : I({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n);
      }

      var Vo = {
        isMounted: function isMounted(e) {
          return !!(e = e._reactInternals) && Ve(e) === e;
        },
        enqueueSetState: function enqueueSetState(e, t, n) {
          e = e._reactInternals;
          var r = ts(),
              a = ns(e),
              o = Ro(r, a);
          o.payload = t, void 0 !== n && null !== n && (o.callback = n), null !== (t = Do(e, o, a)) && (rs(t, e, a, r), Fo(t, e, a));
        },
        enqueueReplaceState: function enqueueReplaceState(e, t, n) {
          e = e._reactInternals;
          var r = ts(),
              a = ns(e),
              o = Ro(r, a);
          o.tag = 1, o.payload = t, void 0 !== n && null !== n && (o.callback = n), null !== (t = Do(e, o, a)) && (rs(t, e, a, r), Fo(t, e, a));
        },
        enqueueForceUpdate: function enqueueForceUpdate(e, t) {
          e = e._reactInternals;
          var n = ts(),
              r = ns(e),
              a = Ro(n, r);
          a.tag = 2, void 0 !== t && null !== t && (a.callback = t), null !== (t = Do(e, a, r)) && (rs(t, e, r, n), Fo(t, e, r));
        }
      };

      function Bo(e, t, n, r, a, o, l) {
        return "function" === typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, l) : !t.prototype || !t.prototype.isPureReactComponent || !ur(n, r) || !ur(a, o);
      }

      function Ho(e, t, n) {
        var r = !1,
            a = Pa,
            o = t.contextType;
        return "object" === _typeof(o) && null !== o ? o = _o(o) : (a = Oa(t) ? Na : La.current, o = (r = null !== (r = t.contextTypes) && void 0 !== r) ? za(e, a) : Pa), t = new t(n, o), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Vo, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t;
      }

      function $o(e, t, n, r) {
        e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Vo.enqueueReplaceState(t, t.state, null);
      }

      function Qo(e, t, n, r) {
        var a = e.stateNode;
        a.props = n, a.state = e.memoizedState, a.refs = Wo, Oo(e);
        var o = t.contextType;
        "object" === _typeof(o) && null !== o ? a.context = _o(o) : (o = Oa(t) ? Na : La.current, a.context = za(e, o)), a.state = e.memoizedState, "function" === typeof (o = t.getDerivedStateFromProps) && (Uo(e, t, o, n), a.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof a.getSnapshotBeforeUpdate || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || (t = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), t !== a.state && Vo.enqueueReplaceState(a, a.state, null), jo(e, n, a, r), a.state = e.memoizedState), "function" === typeof a.componentDidMount && (e.flags |= 4194308);
      }

      function qo(e, t, n) {
        if (null !== (e = n.ref) && "function" !== typeof e && "object" !== _typeof(e)) {
          if (n._owner) {
            if (n = n._owner) {
              if (1 !== n.tag) throw Error(o(309));
              var r = n.stateNode;
            }

            if (!r) throw Error(o(147, e));
            var a = r,
                l = "" + e;
            return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === l ? t.ref : (t = function t(e) {
              var t = a.refs;
              t === Wo && (t = a.refs = {}), null === e ? delete t[l] : t[l] = e;
            }, t._stringRef = l, t);
          }

          if ("string" !== typeof e) throw Error(o(284));
          if (!n._owner) throw Error(o(290, e));
        }

        return e;
      }

      function Ko(e, t) {
        throw e = Object.prototype.toString.call(t), Error(o(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
      }

      function Yo(e) {
        return (0, e._init)(e._payload);
      }

      function Go(e) {
        function t(t, n) {
          if (e) {
            var r = t.deletions;
            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n);
          }
        }

        function n(n, r) {
          if (!e) return null;

          for (; null !== r;) {
            t(n, r), r = r.sibling;
          }

          return null;
        }

        function r(e, t) {
          for (e = new Map(); null !== t;) {
            null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
          }

          return e;
        }

        function a(e, t) {
          return (e = Rs(e, t)).index = 0, e.sibling = null, e;
        }

        function l(t, n, r) {
          return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n);
        }

        function i(t) {
          return e && null === t.alternate && (t.flags |= 2), t;
        }

        function u(e, t, n, r) {
          return null === t || 6 !== t.tag ? ((t = js(n, e.mode, r))["return"] = e, t) : ((t = a(t, n))["return"] = e, t);
        }

        function s(e, t, n, r) {
          var o = n.type;
          return o === x ? f(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === o || "object" === _typeof(o) && null !== o && o.$$typeof === O && Yo(o) === t.type) ? ((r = a(t, n.props)).ref = qo(e, t, n), r["return"] = e, r) : ((r = Ds(n.type, n.key, n.props, null, e.mode, r)).ref = qo(e, t, n), r["return"] = e, r);
        }

        function c(e, t, n, r) {
          return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = As(n, e.mode, r))["return"] = e, t) : ((t = a(t, n.children || []))["return"] = e, t);
        }

        function f(e, t, n, r, o) {
          return null === t || 7 !== t.tag ? ((t = Fs(n, e.mode, r, o))["return"] = e, t) : ((t = a(t, n))["return"] = e, t);
        }

        function d(e, t, n) {
          if ("string" === typeof t && "" !== t || "number" === typeof t) return (t = js("" + t, e.mode, n))["return"] = e, t;

          if ("object" === _typeof(t) && null !== t) {
            switch (t.$$typeof) {
              case w:
                return (n = Ds(t.type, t.key, t.props, null, e.mode, n)).ref = qo(e, null, t), n["return"] = e, n;

              case S:
                return (t = As(t, e.mode, n))["return"] = e, t;

              case O:
                return d(e, (0, t._init)(t._payload), n);
            }

            if (te(t) || D(t)) return (t = Fs(t, e.mode, n, null))["return"] = e, t;
            Ko(e, t);
          }

          return null;
        }

        function p(e, t, n, r) {
          var a = null !== t ? t.key : null;
          if ("string" === typeof n && "" !== n || "number" === typeof n) return null !== a ? null : u(e, t, "" + n, r);

          if ("object" === _typeof(n) && null !== n) {
            switch (n.$$typeof) {
              case w:
                return n.key === a ? s(e, t, n, r) : null;

              case S:
                return n.key === a ? c(e, t, n, r) : null;

              case O:
                return p(e, t, (a = n._init)(n._payload), r);
            }

            if (te(n) || D(n)) return null !== a ? null : f(e, t, n, r, null);
            Ko(e, n);
          }

          return null;
        }

        function h(e, t, n, r, a) {
          if ("string" === typeof r && "" !== r || "number" === typeof r) return u(t, e = e.get(n) || null, "" + r, a);

          if ("object" === _typeof(r) && null !== r) {
            switch (r.$$typeof) {
              case w:
                return s(t, e = e.get(null === r.key ? n : r.key) || null, r, a);

              case S:
                return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a);

              case O:
                return h(e, t, n, (0, r._init)(r._payload), a);
            }

            if (te(r) || D(r)) return f(t, e = e.get(n) || null, r, a, null);
            Ko(t, r);
          }

          return null;
        }

        function v(a, o, i, u) {
          for (var s = null, c = null, f = o, v = o = 0, m = null; null !== f && v < i.length; v++) {
            f.index > v ? (m = f, f = null) : m = f.sibling;
            var y = p(a, f, i[v], u);

            if (null === y) {
              null === f && (f = m);
              break;
            }

            e && f && null === y.alternate && t(a, f), o = l(y, o, v), null === c ? s = y : c.sibling = y, c = y, f = m;
          }

          if (v === i.length) return n(a, f), ao && Za(a, v), s;

          if (null === f) {
            for (; v < i.length; v++) {
              null !== (f = d(a, i[v], u)) && (o = l(f, o, v), null === c ? s = f : c.sibling = f, c = f);
            }

            return ao && Za(a, v), s;
          }

          for (f = r(a, f); v < i.length; v++) {
            null !== (m = h(f, a, v, i[v], u)) && (e && null !== m.alternate && f["delete"](null === m.key ? v : m.key), o = l(m, o, v), null === c ? s = m : c.sibling = m, c = m);
          }

          return e && f.forEach(function (e) {
            return t(a, e);
          }), ao && Za(a, v), s;
        }

        function m(a, i, u, s) {
          var c = D(u);
          if ("function" !== typeof c) throw Error(o(150));
          if (null == (u = c.call(u))) throw Error(o(151));

          for (var f = c = null, v = i, m = i = 0, y = null, g = u.next(); null !== v && !g.done; m++, g = u.next()) {
            v.index > m ? (y = v, v = null) : y = v.sibling;
            var b = p(a, v, g.value, s);

            if (null === b) {
              null === v && (v = y);
              break;
            }

            e && v && null === b.alternate && t(a, v), i = l(b, i, m), null === f ? c = b : f.sibling = b, f = b, v = y;
          }

          if (g.done) return n(a, v), ao && Za(a, m), c;

          if (null === v) {
            for (; !g.done; m++, g = u.next()) {
              null !== (g = d(a, g.value, s)) && (i = l(g, i, m), null === f ? c = g : f.sibling = g, f = g);
            }

            return ao && Za(a, m), c;
          }

          for (v = r(a, v); !g.done; m++, g = u.next()) {
            null !== (g = h(v, a, m, g.value, s)) && (e && null !== g.alternate && v["delete"](null === g.key ? m : g.key), i = l(g, i, m), null === f ? c = g : f.sibling = g, f = g);
          }

          return e && v.forEach(function (e) {
            return t(a, e);
          }), ao && Za(a, m), c;
        }

        return function e(r, o, l, u) {
          if ("object" === _typeof(l) && null !== l && l.type === x && null === l.key && (l = l.props.children), "object" === _typeof(l) && null !== l) {
            switch (l.$$typeof) {
              case w:
                e: {
                  for (var s = l.key, c = o; null !== c;) {
                    if (c.key === s) {
                      if ((s = l.type) === x) {
                        if (7 === c.tag) {
                          n(r, c.sibling), (o = a(c, l.props.children))["return"] = r, r = o;
                          break e;
                        }
                      } else if (c.elementType === s || "object" === _typeof(s) && null !== s && s.$$typeof === O && Yo(s) === c.type) {
                        n(r, c.sibling), (o = a(c, l.props)).ref = qo(r, c, l), o["return"] = r, r = o;
                        break e;
                      }

                      n(r, c);
                      break;
                    }

                    t(r, c), c = c.sibling;
                  }

                  l.type === x ? ((o = Fs(l.props.children, r.mode, u, l.key))["return"] = r, r = o) : ((u = Ds(l.type, l.key, l.props, null, r.mode, u)).ref = qo(r, o, l), u["return"] = r, r = u);
                }

                return i(r);

              case S:
                e: {
                  for (c = l.key; null !== o;) {
                    if (o.key === c) {
                      if (4 === o.tag && o.stateNode.containerInfo === l.containerInfo && o.stateNode.implementation === l.implementation) {
                        n(r, o.sibling), (o = a(o, l.children || []))["return"] = r, r = o;
                        break e;
                      }

                      n(r, o);
                      break;
                    }

                    t(r, o), o = o.sibling;
                  }

                  (o = As(l, r.mode, u))["return"] = r, r = o;
                }

                return i(r);

              case O:
                return e(r, o, (c = l._init)(l._payload), u);
            }

            if (te(l)) return v(r, o, l, u);
            if (D(l)) return m(r, o, l, u);
            Ko(r, l);
          }

          return "string" === typeof l && "" !== l || "number" === typeof l ? (l = "" + l, null !== o && 6 === o.tag ? (n(r, o.sibling), (o = a(o, l))["return"] = r, r = o) : (n(r, o), (o = js(l, r.mode, u))["return"] = r, r = o), i(r)) : n(r, o);
        };
      }

      var Xo = Go(!0),
          Zo = Go(!1),
          Jo = {},
          el = Ea(Jo),
          tl = Ea(Jo),
          nl = Ea(Jo);

      function rl(e) {
        if (e === Jo) throw Error(o(174));
        return e;
      }

      function al(e, t) {
        switch (_a(nl, t), _a(tl, e), _a(el, Jo), e = t.nodeType) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
            break;

          default:
            t = ue(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName);
        }

        Ca(el), _a(el, t);
      }

      function ol() {
        Ca(el), Ca(tl), Ca(nl);
      }

      function ll(e) {
        rl(nl.current);
        var t = rl(el.current),
            n = ue(t, e.type);
        t !== n && (_a(tl, e), _a(el, n));
      }

      function il(e) {
        tl.current === e && (Ca(el), Ca(tl));
      }

      var ul = Ea(0);

      function sl(e) {
        for (var t = e; null !== t;) {
          if (13 === t.tag) {
            var n = t.memoizedState;
            if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t;
          } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 !== (128 & t.flags)) return t;
          } else if (null !== t.child) {
            t.child["return"] = t, t = t.child;
            continue;
          }

          if (t === e) break;

          for (; null === t.sibling;) {
            if (null === t["return"] || t["return"] === e) return null;
            t = t["return"];
          }

          t.sibling["return"] = t["return"], t = t.sibling;
        }

        return null;
      }

      var cl = [];

      function fl() {
        for (var e = 0; e < cl.length; e++) {
          cl[e]._workInProgressVersionPrimary = null;
        }

        cl.length = 0;
      }

      var dl = k.ReactCurrentDispatcher,
          pl = k.ReactCurrentBatchConfig,
          hl = 0,
          vl = null,
          ml = null,
          yl = null,
          gl = !1,
          bl = !1,
          kl = 0,
          wl = 0;

      function Sl() {
        throw Error(o(321));
      }

      function xl(e, t) {
        if (null === t) return !1;

        for (var n = 0; n < t.length && n < e.length; n++) {
          if (!ir(e[n], t[n])) return !1;
        }

        return !0;
      }

      function El(e, t, n, r, a, l) {
        if (hl = l, vl = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, dl.current = null === e || null === e.memoizedState ? ii : ui, e = n(r, a), bl) {
          l = 0;

          do {
            if (bl = !1, kl = 0, 25 <= l) throw Error(o(301));
            l += 1, yl = ml = null, t.updateQueue = null, dl.current = si, e = n(r, a);
          } while (bl);
        }

        if (dl.current = li, t = null !== ml && null !== ml.next, hl = 0, yl = ml = vl = null, gl = !1, t) throw Error(o(300));
        return e;
      }

      function Cl() {
        var e = 0 !== kl;
        return kl = 0, e;
      }

      function _l() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        return null === yl ? vl.memoizedState = yl = e : yl = yl.next = e, yl;
      }

      function Pl() {
        if (null === ml) {
          var e = vl.alternate;
          e = null !== e ? e.memoizedState : null;
        } else e = ml.next;

        var t = null === yl ? vl.memoizedState : yl.next;
        if (null !== t) yl = t, ml = e;else {
          if (null === e) throw Error(o(310));
          e = {
            memoizedState: (ml = e).memoizedState,
            baseState: ml.baseState,
            baseQueue: ml.baseQueue,
            queue: ml.queue,
            next: null
          }, null === yl ? vl.memoizedState = yl = e : yl = yl.next = e;
        }
        return yl;
      }

      function Ll(e, t) {
        return "function" === typeof t ? t(e) : t;
      }

      function Tl(e) {
        var t = Pl(),
            n = t.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = e;
        var r = ml,
            a = r.baseQueue,
            l = n.pending;

        if (null !== l) {
          if (null !== a) {
            var i = a.next;
            a.next = l.next, l.next = i;
          }

          r.baseQueue = a = l, n.pending = null;
        }

        if (null !== a) {
          l = a.next, r = r.baseState;
          var u = i = null,
              s = null,
              c = l;

          do {
            var f = c.lane;
            if ((hl & f) === f) null !== s && (s = s.next = {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null
            }), r = c.hasEagerState ? c.eagerState : e(r, c.action);else {
              var d = {
                lane: f,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null
              };
              null === s ? (u = s = d, i = r) : s = s.next = d, vl.lanes |= f, Iu |= f;
            }
            c = c.next;
          } while (null !== c && c !== l);

          null === s ? i = r : s.next = u, ir(r, t.memoizedState) || (ki = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
        }

        if (null !== (e = n.interleaved)) {
          a = e;

          do {
            l = a.lane, vl.lanes |= l, Iu |= l, a = a.next;
          } while (a !== e);
        } else null === a && (n.lanes = 0);

        return [t.memoizedState, n.dispatch];
      }

      function Nl(e) {
        var t = Pl(),
            n = t.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
            a = n.pending,
            l = t.memoizedState;

        if (null !== a) {
          n.pending = null;
          var i = a = a.next;

          do {
            l = e(l, i.action), i = i.next;
          } while (i !== a);

          ir(l, t.memoizedState) || (ki = !0), t.memoizedState = l, null === t.baseQueue && (t.baseState = l), n.lastRenderedState = l;
        }

        return [l, r];
      }

      function zl() {}

      function Ol(e, t) {
        var n = vl,
            r = Pl(),
            a = t(),
            l = !ir(r.memoizedState, a);

        if (l && (r.memoizedState = a, ki = !0), r = r.queue, Hl(Dl.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || null !== yl && 1 & yl.memoizedState.tag) {
          if (n.flags |= 2048, Al(9, Rl.bind(null, n, r, a, t), void 0, null), null === Nu) throw Error(o(349));
          0 !== (30 & hl) || Ml(n, t, a);
        }

        return a;
      }

      function Ml(e, t, n) {
        e.flags |= 16384, e = {
          getSnapshot: t,
          value: n
        }, null === (t = vl.updateQueue) ? (t = {
          lastEffect: null,
          stores: null
        }, vl.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e);
      }

      function Rl(e, t, n, r) {
        t.value = n, t.getSnapshot = r, Fl(t) && Il(e);
      }

      function Dl(e, t, n) {
        return n(function () {
          Fl(t) && Il(e);
        });
      }

      function Fl(e) {
        var t = e.getSnapshot;
        e = e.value;

        try {
          var n = t();
          return !ir(e, n);
        } catch (r) {
          return !0;
        }
      }

      function Il(e) {
        var t = No(e, 1);
        null !== t && rs(t, e, 1, -1);
      }

      function jl(e) {
        var t = _l();

        return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ll,
          lastRenderedState: e
        }, t.queue = e, e = e.dispatch = ni.bind(null, vl, e), [t.memoizedState, e];
      }

      function Al(e, t, n, r) {
        return e = {
          tag: e,
          create: t,
          destroy: n,
          deps: r,
          next: null
        }, null === (t = vl.updateQueue) ? (t = {
          lastEffect: null,
          stores: null
        }, vl.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
      }

      function Wl() {
        return Pl().memoizedState;
      }

      function Ul(e, t, n, r) {
        var a = _l();

        vl.flags |= e, a.memoizedState = Al(1 | t, n, void 0, void 0 === r ? null : r);
      }

      function Vl(e, t, n, r) {
        var a = Pl();
        r = void 0 === r ? null : r;
        var o = void 0;

        if (null !== ml) {
          var l = ml.memoizedState;
          if (o = l.destroy, null !== r && xl(r, l.deps)) return void (a.memoizedState = Al(t, n, o, r));
        }

        vl.flags |= e, a.memoizedState = Al(1 | t, n, o, r);
      }

      function Bl(e, t) {
        return Ul(8390656, 8, e, t);
      }

      function Hl(e, t) {
        return Vl(2048, 8, e, t);
      }

      function $l(e, t) {
        return Vl(4, 2, e, t);
      }

      function Ql(e, t) {
        return Vl(4, 4, e, t);
      }

      function ql(e, t) {
        return "function" === typeof t ? (e = e(), t(e), function () {
          t(null);
        }) : null !== t && void 0 !== t ? (e = e(), t.current = e, function () {
          t.current = null;
        }) : void 0;
      }

      function Kl(e, t, n) {
        return n = null !== n && void 0 !== n ? n.concat([e]) : null, Vl(4, 4, ql.bind(null, t, e), n);
      }

      function Yl() {}

      function Gl(e, t) {
        var n = Pl();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && xl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
      }

      function Xl(e, t) {
        var n = Pl();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && xl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
      }

      function Zl(e, t, n) {
        return 0 === (21 & hl) ? (e.baseState && (e.baseState = !1, ki = !0), e.memoizedState = n) : (ir(n, t) || (n = vt(), vl.lanes |= n, Iu |= n, e.baseState = !0), t);
      }

      function Jl(e, t) {
        var n = bt;
        bt = 0 !== n && 4 > n ? n : 4, e(!0);
        var r = pl.transition;
        pl.transition = {};

        try {
          e(!1), t();
        } finally {
          bt = n, pl.transition = r;
        }
      }

      function ei() {
        return Pl().memoizedState;
      }

      function ti(e, t, n) {
        var r = ns(e);
        if (n = {
          lane: r,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, ri(e)) ai(t, n);else if (null !== (n = To(e, t, n, r))) {
          rs(n, e, r, ts()), oi(n, t, r);
        }
      }

      function ni(e, t, n) {
        var r = ns(e),
            a = {
          lane: r,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null
        };
        if (ri(e)) ai(t, a);else {
          var o = e.alternate;
          if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer)) try {
            var l = t.lastRenderedState,
                i = o(l, n);

            if (a.hasEagerState = !0, a.eagerState = i, ir(i, l)) {
              var u = t.interleaved;
              return null === u ? (a.next = a, Lo(t)) : (a.next = u.next, u.next = a), void (t.interleaved = a);
            }
          } catch (s) {}
          null !== (n = To(e, t, a, r)) && (rs(n, e, r, a = ts()), oi(n, t, r));
        }
      }

      function ri(e) {
        var t = e.alternate;
        return e === vl || null !== t && t === vl;
      }

      function ai(e, t) {
        bl = gl = !0;
        var n = e.pending;
        null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
      }

      function oi(e, t, n) {
        if (0 !== (4194240 & n)) {
          var r = t.lanes;
          n |= r &= e.pendingLanes, t.lanes = n, gt(e, n);
        }
      }

      var li = {
        readContext: _o,
        useCallback: Sl,
        useContext: Sl,
        useEffect: Sl,
        useImperativeHandle: Sl,
        useInsertionEffect: Sl,
        useLayoutEffect: Sl,
        useMemo: Sl,
        useReducer: Sl,
        useRef: Sl,
        useState: Sl,
        useDebugValue: Sl,
        useDeferredValue: Sl,
        useTransition: Sl,
        useMutableSource: Sl,
        useSyncExternalStore: Sl,
        useId: Sl,
        unstable_isNewReconciler: !1
      },
          ii = {
        readContext: _o,
        useCallback: function useCallback(e, t) {
          return _l().memoizedState = [e, void 0 === t ? null : t], e;
        },
        useContext: _o,
        useEffect: Bl,
        useImperativeHandle: function useImperativeHandle(e, t, n) {
          return n = null !== n && void 0 !== n ? n.concat([e]) : null, Ul(4194308, 4, ql.bind(null, t, e), n);
        },
        useLayoutEffect: function useLayoutEffect(e, t) {
          return Ul(4194308, 4, e, t);
        },
        useInsertionEffect: function useInsertionEffect(e, t) {
          return Ul(4, 2, e, t);
        },
        useMemo: function useMemo(e, t) {
          var n = _l();

          return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e;
        },
        useReducer: function useReducer(e, t, n) {
          var r = _l();

          return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
          }, r.queue = e, e = e.dispatch = ti.bind(null, vl, e), [r.memoizedState, e];
        },
        useRef: function useRef(e) {
          return e = {
            current: e
          }, _l().memoizedState = e;
        },
        useState: jl,
        useDebugValue: Yl,
        useDeferredValue: function useDeferredValue(e) {
          return _l().memoizedState = e;
        },
        useTransition: function useTransition() {
          var e = jl(!1),
              t = e[0];
          return e = Jl.bind(null, e[1]), _l().memoizedState = e, [t, e];
        },
        useMutableSource: function useMutableSource() {},
        useSyncExternalStore: function useSyncExternalStore(e, t, n) {
          var r = vl,
              a = _l();

          if (ao) {
            if (void 0 === n) throw Error(o(407));
            n = n();
          } else {
            if (n = t(), null === Nu) throw Error(o(349));
            0 !== (30 & hl) || Ml(r, t, n);
          }

          a.memoizedState = n;
          var l = {
            value: n,
            getSnapshot: t
          };
          return a.queue = l, Bl(Dl.bind(null, r, l, e), [e]), r.flags |= 2048, Al(9, Rl.bind(null, r, l, n, t), void 0, null), n;
        },
        useId: function useId() {
          var e = _l(),
              t = Nu.identifierPrefix;

          if (ao) {
            var n = Xa;
            t = ":" + t + "R" + (n = (Ga & ~(1 << 32 - lt(Ga) - 1)).toString(32) + n), 0 < (n = kl++) && (t += "H" + n.toString(32)), t += ":";
          } else t = ":" + t + "r" + (n = wl++).toString(32) + ":";

          return e.memoizedState = t;
        },
        unstable_isNewReconciler: !1
      },
          ui = {
        readContext: _o,
        useCallback: Gl,
        useContext: _o,
        useEffect: Hl,
        useImperativeHandle: Kl,
        useInsertionEffect: $l,
        useLayoutEffect: Ql,
        useMemo: Xl,
        useReducer: Tl,
        useRef: Wl,
        useState: function useState() {
          return Tl(Ll);
        },
        useDebugValue: Yl,
        useDeferredValue: function useDeferredValue(e) {
          return Zl(Pl(), ml.memoizedState, e);
        },
        useTransition: function useTransition() {
          return [Tl(Ll)[0], Pl().memoizedState];
        },
        useMutableSource: zl,
        useSyncExternalStore: Ol,
        useId: ei,
        unstable_isNewReconciler: !1
      },
          si = {
        readContext: _o,
        useCallback: Gl,
        useContext: _o,
        useEffect: Hl,
        useImperativeHandle: Kl,
        useInsertionEffect: $l,
        useLayoutEffect: Ql,
        useMemo: Xl,
        useReducer: Nl,
        useRef: Wl,
        useState: function useState() {
          return Nl(Ll);
        },
        useDebugValue: Yl,
        useDeferredValue: function useDeferredValue(e) {
          var t = Pl();
          return null === ml ? t.memoizedState = e : Zl(t, ml.memoizedState, e);
        },
        useTransition: function useTransition() {
          return [Nl(Ll)[0], Pl().memoizedState];
        },
        useMutableSource: zl,
        useSyncExternalStore: Ol,
        useId: ei,
        unstable_isNewReconciler: !1
      };

      function ci(e, t) {
        try {
          var n = "",
              r = t;

          do {
            n += U(r), r = r["return"];
          } while (r);

          var a = n;
        } catch (o) {
          a = "\nError generating stack: " + o.message + "\n" + o.stack;
        }

        return {
          value: e,
          source: t,
          stack: a,
          digest: null
        };
      }

      function fi(e, t, n) {
        return {
          value: e,
          source: null,
          stack: null != n ? n : null,
          digest: null != t ? t : null
        };
      }

      function di(e, t) {
        try {
          console.error(t.value);
        } catch (n) {
          setTimeout(function () {
            throw n;
          });
        }
      }

      var pi = "function" === typeof WeakMap ? WeakMap : Map;

      function hi(e, t, n) {
        (n = Ro(-1, n)).tag = 3, n.payload = {
          element: null
        };
        var r = t.value;
        return n.callback = function () {
          $u || ($u = !0, Qu = r), di(0, t);
        }, n;
      }

      function vi(e, t, n) {
        (n = Ro(-1, n)).tag = 3;
        var r = e.type.getDerivedStateFromError;

        if ("function" === typeof r) {
          var a = t.value;
          n.payload = function () {
            return r(a);
          }, n.callback = function () {
            di(0, t);
          };
        }

        var o = e.stateNode;
        return null !== o && "function" === typeof o.componentDidCatch && (n.callback = function () {
          di(0, t), "function" !== typeof r && (null === qu ? qu = new Set([this]) : qu.add(this));
          var e = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: null !== e ? e : ""
          });
        }), n;
      }

      function mi(e, t, n) {
        var r = e.pingCache;

        if (null === r) {
          r = e.pingCache = new pi();
          var a = new Set();
          r.set(t, a);
        } else void 0 === (a = r.get(t)) && (a = new Set(), r.set(t, a));

        a.has(n) || (a.add(n), e = _s.bind(null, e, t, n), t.then(e, e));
      }

      function yi(e) {
        do {
          var t;
          if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
          e = e["return"];
        } while (null !== e);

        return null;
      }

      function gi(e, t, n, r, a) {
        return 0 === (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Ro(-1, 1)).tag = 2, Do(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e);
      }

      var bi = k.ReactCurrentOwner,
          ki = !1;

      function wi(e, t, n, r) {
        t.child = null === e ? Zo(t, null, n, r) : Xo(t, e.child, n, r);
      }

      function Si(e, t, n, r, a) {
        n = n.render;
        var o = t.ref;
        return Co(t, a), r = El(e, t, n, r, o, a), n = Cl(), null === e || ki ? (ao && n && eo(t), t.flags |= 1, wi(e, t, r, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, $i(e, t, a));
      }

      function xi(e, t, n, r, a) {
        if (null === e) {
          var o = n.type;
          return "function" !== typeof o || Ms(o) || void 0 !== o.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Ds(n.type, null, r, t, t.mode, a)).ref = t.ref, e["return"] = t, t.child = e) : (t.tag = 15, t.type = o, Ei(e, t, o, r, a));
        }

        if (o = e.child, 0 === (e.lanes & a)) {
          var l = o.memoizedProps;
          if ((n = null !== (n = n.compare) ? n : ur)(l, r) && e.ref === t.ref) return $i(e, t, a);
        }

        return t.flags |= 1, (e = Rs(o, r)).ref = t.ref, e["return"] = t, t.child = e;
      }

      function Ei(e, t, n, r, a) {
        if (null !== e) {
          var o = e.memoizedProps;

          if (ur(o, r) && e.ref === t.ref) {
            if (ki = !1, t.pendingProps = r = o, 0 === (e.lanes & a)) return t.lanes = e.lanes, $i(e, t, a);
            0 !== (131072 & e.flags) && (ki = !0);
          }
        }

        return Pi(e, t, n, r, a);
      }

      function Ci(e, t, n) {
        var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
        if ("hidden" === r.mode) {
          if (0 === (1 & t.mode)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
          }, _a(Ru, Mu), Mu |= n;else {
            if (0 === (1073741824 & n)) return e = null !== o ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null
            }, t.updateQueue = null, _a(Ru, Mu), Mu |= e, null;
            t.memoizedState = {
              baseLanes: 0,
              cachePool: null,
              transitions: null
            }, r = null !== o ? o.baseLanes : n, _a(Ru, Mu), Mu |= r;
          }
        } else null !== o ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, _a(Ru, Mu), Mu |= r;
        return wi(e, t, a, n), t.child;
      }

      function _i(e, t) {
        var n = t.ref;
        (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
      }

      function Pi(e, t, n, r, a) {
        var o = Oa(n) ? Na : La.current;
        return o = za(t, o), Co(t, a), n = El(e, t, n, r, o, a), r = Cl(), null === e || ki ? (ao && r && eo(t), t.flags |= 1, wi(e, t, n, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, $i(e, t, a));
      }

      function Li(e, t, n, r, a) {
        if (Oa(n)) {
          var o = !0;
          Fa(t);
        } else o = !1;

        if (Co(t, a), null === t.stateNode) Hi(e, t), Ho(t, n, r), Qo(t, n, r, a), r = !0;else if (null === e) {
          var l = t.stateNode,
              i = t.memoizedProps;
          l.props = i;
          var u = l.context,
              s = n.contextType;
          "object" === _typeof(s) && null !== s ? s = _o(s) : s = za(t, s = Oa(n) ? Na : La.current);
          var c = n.getDerivedStateFromProps,
              f = "function" === typeof c || "function" === typeof l.getSnapshotBeforeUpdate;
          f || "function" !== typeof l.UNSAFE_componentWillReceiveProps && "function" !== typeof l.componentWillReceiveProps || (i !== r || u !== s) && $o(t, l, r, s), zo = !1;
          var d = t.memoizedState;
          l.state = d, jo(t, r, l, a), u = t.memoizedState, i !== r || d !== u || Ta.current || zo ? ("function" === typeof c && (Uo(t, n, c, r), u = t.memoizedState), (i = zo || Bo(t, n, i, r, d, u, s)) ? (f || "function" !== typeof l.UNSAFE_componentWillMount && "function" !== typeof l.componentWillMount || ("function" === typeof l.componentWillMount && l.componentWillMount(), "function" === typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount()), "function" === typeof l.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof l.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), l.props = r, l.state = u, l.context = s, r = i) : ("function" === typeof l.componentDidMount && (t.flags |= 4194308), r = !1);
        } else {
          l = t.stateNode, Mo(e, t), i = t.memoizedProps, s = t.type === t.elementType ? i : yo(t.type, i), l.props = s, f = t.pendingProps, d = l.context, "object" === _typeof(u = n.contextType) && null !== u ? u = _o(u) : u = za(t, u = Oa(n) ? Na : La.current);
          var p = n.getDerivedStateFromProps;
          (c = "function" === typeof p || "function" === typeof l.getSnapshotBeforeUpdate) || "function" !== typeof l.UNSAFE_componentWillReceiveProps && "function" !== typeof l.componentWillReceiveProps || (i !== f || d !== u) && $o(t, l, r, u), zo = !1, d = t.memoizedState, l.state = d, jo(t, r, l, a);
          var h = t.memoizedState;
          i !== f || d !== h || Ta.current || zo ? ("function" === typeof p && (Uo(t, n, p, r), h = t.memoizedState), (s = zo || Bo(t, n, s, r, d, h, u) || !1) ? (c || "function" !== typeof l.UNSAFE_componentWillUpdate && "function" !== typeof l.componentWillUpdate || ("function" === typeof l.componentWillUpdate && l.componentWillUpdate(r, h, u), "function" === typeof l.UNSAFE_componentWillUpdate && l.UNSAFE_componentWillUpdate(r, h, u)), "function" === typeof l.componentDidUpdate && (t.flags |= 4), "function" === typeof l.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof l.componentDidUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" !== typeof l.getSnapshotBeforeUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), l.props = r, l.state = h, l.context = u, r = s) : ("function" !== typeof l.componentDidUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" !== typeof l.getSnapshotBeforeUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
        }
        return Ti(e, t, n, r, o, a);
      }

      function Ti(e, t, n, r, a, o) {
        _i(e, t);

        var l = 0 !== (128 & t.flags);
        if (!r && !l) return a && Ia(t, n, !1), $i(e, t, o);
        r = t.stateNode, bi.current = t;
        var i = l && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
        return t.flags |= 1, null !== e && l ? (t.child = Xo(t, e.child, null, o), t.child = Xo(t, null, i, o)) : wi(e, t, i, o), t.memoizedState = r.state, a && Ia(t, n, !0), t.child;
      }

      function Ni(e) {
        var t = e.stateNode;
        t.pendingContext ? Ra(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Ra(0, t.context, !1), al(e, t.containerInfo);
      }

      function zi(e, t, n, r, a) {
        return ho(), vo(a), t.flags |= 256, wi(e, t, n, r), t.child;
      }

      var Oi,
          Mi,
          Ri,
          Di,
          Fi = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
      };

      function Ii(e) {
        return {
          baseLanes: e,
          cachePool: null,
          transitions: null
        };
      }

      function ji(e, t, n) {
        var r,
            a = t.pendingProps,
            l = ul.current,
            i = !1,
            u = 0 !== (128 & t.flags);
        if ((r = u) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & l)), r ? (i = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (l |= 1), _a(ul, 1 & l), null === e) return so(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (u = a.children, e = a.fallback, i ? (a = t.mode, i = t.child, u = {
          mode: "hidden",
          children: u
        }, 0 === (1 & a) && null !== i ? (i.childLanes = 0, i.pendingProps = u) : i = Is(u, a, 0, null), e = Fs(e, a, n, null), i["return"] = t, e["return"] = t, i.sibling = e, t.child = i, t.child.memoizedState = Ii(n), t.memoizedState = Fi, e) : Ai(t, u));
        if (null !== (l = e.memoizedState) && null !== (r = l.dehydrated)) return function (e, t, n, r, a, l, i) {
          if (n) return 256 & t.flags ? (t.flags &= -257, Wi(e, t, i, r = fi(Error(o(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, a = t.mode, r = Is({
            mode: "visible",
            children: r.children
          }, a, 0, null), (l = Fs(l, a, i, null)).flags |= 2, r["return"] = t, l["return"] = t, r.sibling = l, t.child = r, 0 !== (1 & t.mode) && Xo(t, e.child, null, i), t.child.memoizedState = Ii(i), t.memoizedState = Fi, l);
          if (0 === (1 & t.mode)) return Wi(e, t, i, null);

          if ("$!" === a.data) {
            if (r = a.nextSibling && a.nextSibling.dataset) var u = r.dgst;
            return r = u, Wi(e, t, i, r = fi(l = Error(o(419)), r, void 0));
          }

          if (u = 0 !== (i & e.childLanes), ki || u) {
            if (null !== (r = Nu)) {
              switch (i & -i) {
                case 4:
                  a = 2;
                  break;

                case 16:
                  a = 8;
                  break;

                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                  a = 32;
                  break;

                case 536870912:
                  a = 268435456;
                  break;

                default:
                  a = 0;
              }

              0 !== (a = 0 !== (a & (r.suspendedLanes | i)) ? 0 : a) && a !== l.retryLane && (l.retryLane = a, No(e, a), rs(r, e, a, -1));
            }

            return ms(), Wi(e, t, i, r = fi(Error(o(421))));
          }

          return "$?" === a.data ? (t.flags |= 128, t.child = e.child, t = Ls.bind(null, e), a._reactRetry = t, null) : (e = l.treeContext, ro = sa(a.nextSibling), no = t, ao = !0, oo = null, null !== e && (qa[Ka++] = Ga, qa[Ka++] = Xa, qa[Ka++] = Ya, Ga = e.id, Xa = e.overflow, Ya = t), t = Ai(t, r.children), t.flags |= 4096, t);
        }(e, t, u, a, r, l, n);

        if (i) {
          i = a.fallback, u = t.mode, r = (l = e.child).sibling;
          var s = {
            mode: "hidden",
            children: a.children
          };
          return 0 === (1 & u) && t.child !== l ? ((a = t.child).childLanes = 0, a.pendingProps = s, t.deletions = null) : (a = Rs(l, s)).subtreeFlags = 14680064 & l.subtreeFlags, null !== r ? i = Rs(r, i) : (i = Fs(i, u, n, null)).flags |= 2, i["return"] = t, a["return"] = t, a.sibling = i, t.child = a, a = i, i = t.child, u = null === (u = e.child.memoizedState) ? Ii(n) : {
            baseLanes: u.baseLanes | n,
            cachePool: null,
            transitions: u.transitions
          }, i.memoizedState = u, i.childLanes = e.childLanes & ~n, t.memoizedState = Fi, a;
        }

        return e = (i = e.child).sibling, a = Rs(i, {
          mode: "visible",
          children: a.children
        }), 0 === (1 & t.mode) && (a.lanes = n), a["return"] = t, a.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = a, t.memoizedState = null, a;
      }

      function Ai(e, t) {
        return (t = Is({
          mode: "visible",
          children: t
        }, e.mode, 0, null))["return"] = e, e.child = t;
      }

      function Wi(e, t, n, r) {
        return null !== r && vo(r), Xo(t, e.child, null, n), (e = Ai(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e;
      }

      function Ui(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        null !== r && (r.lanes |= t), Eo(e["return"], t, n);
      }

      function Vi(e, t, n, r, a) {
        var o = e.memoizedState;
        null === o ? e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: a
        } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a);
      }

      function Bi(e, t, n) {
        var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
        if (wi(e, t, r.children, n), 0 !== (2 & (r = ul.current))) r = 1 & r | 2, t.flags |= 128;else {
          if (null !== e && 0 !== (128 & e.flags)) e: for (e = t.child; null !== e;) {
            if (13 === e.tag) null !== e.memoizedState && Ui(e, n, t);else if (19 === e.tag) Ui(e, n, t);else if (null !== e.child) {
              e.child["return"] = e, e = e.child;
              continue;
            }
            if (e === t) break e;

            for (; null === e.sibling;) {
              if (null === e["return"] || e["return"] === t) break e;
              e = e["return"];
            }

            e.sibling["return"] = e["return"], e = e.sibling;
          }
          r &= 1;
        }
        if (_a(ul, r), 0 === (1 & t.mode)) t.memoizedState = null;else switch (a) {
          case "forwards":
            for (n = t.child, a = null; null !== n;) {
              null !== (e = n.alternate) && null === sl(e) && (a = n), n = n.sibling;
            }

            null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Vi(t, !1, a, n, o);
            break;

          case "backwards":
            for (n = null, a = t.child, t.child = null; null !== a;) {
              if (null !== (e = a.alternate) && null === sl(e)) {
                t.child = a;
                break;
              }

              e = a.sibling, a.sibling = n, n = a, a = e;
            }

            Vi(t, !0, n, null, o);
            break;

          case "together":
            Vi(t, !1, null, null, void 0);
            break;

          default:
            t.memoizedState = null;
        }
        return t.child;
      }

      function Hi(e, t) {
        0 === (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2);
      }

      function $i(e, t, n) {
        if (null !== e && (t.dependencies = e.dependencies), Iu |= t.lanes, 0 === (n & t.childLanes)) return null;
        if (null !== e && t.child !== e.child) throw Error(o(153));

        if (null !== t.child) {
          for (n = Rs(e = t.child, e.pendingProps), t.child = n, n["return"] = t; null !== e.sibling;) {
            e = e.sibling, (n = n.sibling = Rs(e, e.pendingProps))["return"] = t;
          }

          n.sibling = null;
        }

        return t.child;
      }

      function Qi(e, t) {
        if (!ao) switch (e.tailMode) {
          case "hidden":
            t = e.tail;

            for (var n = null; null !== t;) {
              null !== t.alternate && (n = t), t = t.sibling;
            }

            null === n ? e.tail = null : n.sibling = null;
            break;

          case "collapsed":
            n = e.tail;

            for (var r = null; null !== n;) {
              null !== n.alternate && (r = n), n = n.sibling;
            }

            null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null;
        }
      }

      function qi(e) {
        var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
        if (t) for (var a = e.child; null !== a;) {
          n |= a.lanes | a.childLanes, r |= 14680064 & a.subtreeFlags, r |= 14680064 & a.flags, a["return"] = e, a = a.sibling;
        } else for (a = e.child; null !== a;) {
          n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a["return"] = e, a = a.sibling;
        }
        return e.subtreeFlags |= r, e.childLanes = n, t;
      }

      function Ki(e, t, n) {
        var r = t.pendingProps;

        switch (to(t), t.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return qi(t), null;

          case 1:
          case 17:
            return Oa(t.type) && Ma(), qi(t), null;

          case 3:
            return r = t.stateNode, ol(), Ca(Ta), Ca(La), fl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (fo(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024, null !== oo && (is(oo), oo = null))), Mi(e, t), qi(t), null;

          case 5:
            il(t);
            var a = rl(nl.current);
            if (n = t.type, null !== e && null != t.stateNode) Ri(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);else {
              if (!r) {
                if (null === t.stateNode) throw Error(o(166));
                return qi(t), null;
              }

              if (e = rl(el.current), fo(t)) {
                r = t.stateNode, n = t.type;
                var l = t.memoizedProps;

                switch (r[da] = t, r[pa] = l, e = 0 !== (1 & t.mode), n) {
                  case "dialog":
                    Ar("cancel", r), Ar("close", r);
                    break;

                  case "iframe":
                  case "object":
                  case "embed":
                    Ar("load", r);
                    break;

                  case "video":
                  case "audio":
                    for (a = 0; a < Dr.length; a++) {
                      Ar(Dr[a], r);
                    }

                    break;

                  case "source":
                    Ar("error", r);
                    break;

                  case "img":
                  case "image":
                  case "link":
                    Ar("error", r), Ar("load", r);
                    break;

                  case "details":
                    Ar("toggle", r);
                    break;

                  case "input":
                    G(r, l), Ar("invalid", r);
                    break;

                  case "select":
                    r._wrapperState = {
                      wasMultiple: !!l.multiple
                    }, Ar("invalid", r);
                    break;

                  case "textarea":
                    ae(r, l), Ar("invalid", r);
                }

                for (var u in ge(n, l), a = null, l) {
                  if (l.hasOwnProperty(u)) {
                    var s = l[u];
                    "children" === u ? "string" === typeof s ? r.textContent !== s && (!0 !== l.suppressHydrationWarning && Zr(r.textContent, s, e), a = ["children", s]) : "number" === typeof s && r.textContent !== "" + s && (!0 !== l.suppressHydrationWarning && Zr(r.textContent, s, e), a = ["children", "" + s]) : i.hasOwnProperty(u) && null != s && "onScroll" === u && Ar("scroll", r);
                  }
                }

                switch (n) {
                  case "input":
                    Q(r), J(r, l, !0);
                    break;

                  case "textarea":
                    Q(r), le(r);
                    break;

                  case "select":
                  case "option":
                    break;

                  default:
                    "function" === typeof l.onClick && (r.onclick = Jr);
                }

                r = a, t.updateQueue = r, null !== r && (t.flags |= 4);
              } else {
                u = 9 === a.nodeType ? a : a.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = ie(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = u.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = u.createElement(n, {
                  is: r.is
                }) : (e = u.createElement(n), "select" === n && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[da] = t, e[pa] = r, Oi(e, t, !1, !1), t.stateNode = e;

                e: {
                  switch (u = be(n, r), n) {
                    case "dialog":
                      Ar("cancel", e), Ar("close", e), a = r;
                      break;

                    case "iframe":
                    case "object":
                    case "embed":
                      Ar("load", e), a = r;
                      break;

                    case "video":
                    case "audio":
                      for (a = 0; a < Dr.length; a++) {
                        Ar(Dr[a], e);
                      }

                      a = r;
                      break;

                    case "source":
                      Ar("error", e), a = r;
                      break;

                    case "img":
                    case "image":
                    case "link":
                      Ar("error", e), Ar("load", e), a = r;
                      break;

                    case "details":
                      Ar("toggle", e), a = r;
                      break;

                    case "input":
                      G(e, r), a = Y(e, r), Ar("invalid", e);
                      break;

                    case "option":
                    default:
                      a = r;
                      break;

                    case "select":
                      e._wrapperState = {
                        wasMultiple: !!r.multiple
                      }, a = I({}, r, {
                        value: void 0
                      }), Ar("invalid", e);
                      break;

                    case "textarea":
                      ae(e, r), a = re(e, r), Ar("invalid", e);
                  }

                  for (l in ge(n, a), s = a) {
                    if (s.hasOwnProperty(l)) {
                      var c = s[l];
                      "style" === l ? me(e, c) : "dangerouslySetInnerHTML" === l ? null != (c = c ? c.__html : void 0) && fe(e, c) : "children" === l ? "string" === typeof c ? ("textarea" !== n || "" !== c) && de(e, c) : "number" === typeof c && de(e, "" + c) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (i.hasOwnProperty(l) ? null != c && "onScroll" === l && Ar("scroll", e) : null != c && b(e, l, c, u));
                    }
                  }

                  switch (n) {
                    case "input":
                      Q(e), J(e, r, !1);
                      break;

                    case "textarea":
                      Q(e), le(e);
                      break;

                    case "option":
                      null != r.value && e.setAttribute("value", "" + H(r.value));
                      break;

                    case "select":
                      e.multiple = !!r.multiple, null != (l = r.value) ? ne(e, !!r.multiple, l, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                      break;

                    default:
                      "function" === typeof a.onClick && (e.onclick = Jr);
                  }

                  switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      r = !!r.autoFocus;
                      break e;

                    case "img":
                      r = !0;
                      break e;

                    default:
                      r = !1;
                  }
                }

                r && (t.flags |= 4);
              }

              null !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            }
            return qi(t), null;

          case 6:
            if (e && null != t.stateNode) Di(e, t, e.memoizedProps, r);else {
              if ("string" !== typeof r && null === t.stateNode) throw Error(o(166));

              if (n = rl(nl.current), rl(el.current), fo(t)) {
                if (r = t.stateNode, n = t.memoizedProps, r[da] = t, (l = r.nodeValue !== n) && null !== (e = no)) switch (e.tag) {
                  case 3:
                    Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                    break;

                  case 5:
                    !0 !== e.memoizedProps.suppressHydrationWarning && Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                }
                l && (t.flags |= 4);
              } else (r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[da] = t, t.stateNode = r;
            }
            return qi(t), null;

          case 13:
            if (Ca(ul), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
              if (ao && null !== ro && 0 !== (1 & t.mode) && 0 === (128 & t.flags)) po(), ho(), t.flags |= 98560, l = !1;else if (l = fo(t), null !== r && null !== r.dehydrated) {
                if (null === e) {
                  if (!l) throw Error(o(318));
                  if (!(l = null !== (l = t.memoizedState) ? l.dehydrated : null)) throw Error(o(317));
                  l[da] = t;
                } else ho(), 0 === (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;

                qi(t), l = !1;
              } else null !== oo && (is(oo), oo = null), l = !0;
              if (!l) return 65536 & t.flags ? t : null;
            }

            return 0 !== (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 !== (1 & t.mode) && (null === e || 0 !== (1 & ul.current) ? 0 === Du && (Du = 3) : ms())), null !== t.updateQueue && (t.flags |= 4), qi(t), null);

          case 4:
            return ol(), Mi(e, t), null === e && Vr(t.stateNode.containerInfo), qi(t), null;

          case 10:
            return xo(t.type._context), qi(t), null;

          case 19:
            if (Ca(ul), null === (l = t.memoizedState)) return qi(t), null;
            if (r = 0 !== (128 & t.flags), null === (u = l.rendering)) {
              if (r) Qi(l, !1);else {
                if (0 !== Du || null !== e && 0 !== (128 & e.flags)) for (e = t.child; null !== e;) {
                  if (null !== (u = sl(e))) {
                    for (t.flags |= 128, Qi(l, !1), null !== (r = u.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) {
                      e = r, (l = n).flags &= 14680066, null === (u = l.alternate) ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, e = u.dependencies, l.dependencies = null === e ? null : {
                        lanes: e.lanes,
                        firstContext: e.firstContext
                      }), n = n.sibling;
                    }

                    return _a(ul, 1 & ul.current | 2), t.child;
                  }

                  e = e.sibling;
                }
                null !== l.tail && Xe() > Bu && (t.flags |= 128, r = !0, Qi(l, !1), t.lanes = 4194304);
              }
            } else {
              if (!r) if (null !== (e = sl(u))) {
                if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Qi(l, !0), null === l.tail && "hidden" === l.tailMode && !u.alternate && !ao) return qi(t), null;
              } else 2 * Xe() - l.renderingStartTime > Bu && 1073741824 !== n && (t.flags |= 128, r = !0, Qi(l, !1), t.lanes = 4194304);
              l.isBackwards ? (u.sibling = t.child, t.child = u) : (null !== (n = l.last) ? n.sibling = u : t.child = u, l.last = u);
            }
            return null !== l.tail ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = Xe(), t.sibling = null, n = ul.current, _a(ul, r ? 1 & n | 2 : 1 & n), t) : (qi(t), null);

          case 22:
          case 23:
            return ds(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 !== (1 & t.mode) ? 0 !== (1073741824 & Mu) && (qi(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : qi(t), null;

          case 24:
          case 25:
            return null;
        }

        throw Error(o(156, t.tag));
      }

      function Yi(e, t) {
        switch (to(t), t.tag) {
          case 1:
            return Oa(t.type) && Ma(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;

          case 3:
            return ol(), Ca(Ta), Ca(La), fl(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128, t) : null;

          case 5:
            return il(t), null;

          case 13:
            if (Ca(ul), null !== (e = t.memoizedState) && null !== e.dehydrated) {
              if (null === t.alternate) throw Error(o(340));
              ho();
            }

            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;

          case 19:
            return Ca(ul), null;

          case 4:
            return ol(), null;

          case 10:
            return xo(t.type._context), null;

          case 22:
          case 23:
            return ds(), null;

          default:
            return null;
        }
      }

      Oi = function Oi(e, t) {
        for (var n = t.child; null !== n;) {
          if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);else if (4 !== n.tag && null !== n.child) {
            n.child["return"] = n, n = n.child;
            continue;
          }
          if (n === t) break;

          for (; null === n.sibling;) {
            if (null === n["return"] || n["return"] === t) return;
            n = n["return"];
          }

          n.sibling["return"] = n["return"], n = n.sibling;
        }
      }, Mi = function Mi() {}, Ri = function Ri(e, t, n, r) {
        var a = e.memoizedProps;

        if (a !== r) {
          e = t.stateNode, rl(el.current);
          var o,
              l = null;

          switch (n) {
            case "input":
              a = Y(e, a), r = Y(e, r), l = [];
              break;

            case "select":
              a = I({}, a, {
                value: void 0
              }), r = I({}, r, {
                value: void 0
              }), l = [];
              break;

            case "textarea":
              a = re(e, a), r = re(e, r), l = [];
              break;

            default:
              "function" !== typeof a.onClick && "function" === typeof r.onClick && (e.onclick = Jr);
          }

          for (c in ge(n, r), n = null, a) {
            if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c]) if ("style" === c) {
              var u = a[c];

              for (o in u) {
                u.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
              }
            } else "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (i.hasOwnProperty(c) ? l || (l = []) : (l = l || []).push(c, null));
          }

          for (c in r) {
            var s = r[c];
            if (u = null != a ? a[c] : void 0, r.hasOwnProperty(c) && s !== u && (null != s || null != u)) if ("style" === c) {
              if (u) {
                for (o in u) {
                  !u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                }

                for (o in s) {
                  s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}), n[o] = s[o]);
                }
              } else n || (l || (l = []), l.push(c, n)), n = s;
            } else "dangerouslySetInnerHTML" === c ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, null != s && u !== s && (l = l || []).push(c, s)) : "children" === c ? "string" !== typeof s && "number" !== typeof s || (l = l || []).push(c, "" + s) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (i.hasOwnProperty(c) ? (null != s && "onScroll" === c && Ar("scroll", e), l || u === s || (l = [])) : (l = l || []).push(c, s));
          }

          n && (l = l || []).push("style", n);
          var c = l;
          (t.updateQueue = c) && (t.flags |= 4);
        }
      }, Di = function Di(e, t, n, r) {
        n !== r && (t.flags |= 4);
      };
      var Gi = !1,
          Xi = !1,
          Zi = "function" === typeof WeakSet ? WeakSet : Set,
          Ji = null;

      function eu(e, t) {
        var n = e.ref;
        if (null !== n) if ("function" === typeof n) try {
          n(null);
        } catch (r) {
          Cs(e, t, r);
        } else n.current = null;
      }

      function tu(e, t, n) {
        try {
          n();
        } catch (r) {
          Cs(e, t, r);
        }
      }

      var nu = !1;

      function ru(e, t, n) {
        var r = t.updateQueue;

        if (null !== (r = null !== r ? r.lastEffect : null)) {
          var a = r = r.next;

          do {
            if ((a.tag & e) === e) {
              var o = a.destroy;
              a.destroy = void 0, void 0 !== o && tu(t, n, o);
            }

            a = a.next;
          } while (a !== r);
        }
      }

      function au(e, t) {
        if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
          var n = t = t.next;

          do {
            if ((n.tag & e) === e) {
              var r = n.create;
              n.destroy = r();
            }

            n = n.next;
          } while (n !== t);
        }
      }

      function ou(e) {
        var t = e.ref;

        if (null !== t) {
          var n = e.stateNode;
          e.tag, e = n, "function" === typeof t ? t(e) : t.current = e;
        }
      }

      function lu(e) {
        var t = e.alternate;
        null !== t && (e.alternate = null, lu(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && null !== (t = e.stateNode) && (delete t[da], delete t[pa], delete t[va], delete t[ma], delete t[ya]), e.stateNode = null, e["return"] = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }

      function iu(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag;
      }

      function uu(e) {
        e: for (;;) {
          for (; null === e.sibling;) {
            if (null === e["return"] || iu(e["return"])) return null;
            e = e["return"];
          }

          for (e.sibling["return"] = e["return"], e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
            if (2 & e.flags) continue e;
            if (null === e.child || 4 === e.tag) continue e;
            e.child["return"] = e, e = e.child;
          }

          if (!(2 & e.flags)) return e.stateNode;
        }
      }

      function su(e, t, n) {
        var r = e.tag;
        if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Jr));else if (4 !== r && null !== (e = e.child)) for (su(e, t, n), e = e.sibling; null !== e;) {
          su(e, t, n), e = e.sibling;
        }
      }

      function cu(e, t, n) {
        var r = e.tag;
        if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);else if (4 !== r && null !== (e = e.child)) for (cu(e, t, n), e = e.sibling; null !== e;) {
          cu(e, t, n), e = e.sibling;
        }
      }

      var fu = null,
          du = !1;

      function pu(e, t, n) {
        for (n = n.child; null !== n;) {
          hu(e, t, n), n = n.sibling;
        }
      }

      function hu(e, t, n) {
        if (ot && "function" === typeof ot.onCommitFiberUnmount) try {
          ot.onCommitFiberUnmount(at, n);
        } catch (i) {}

        switch (n.tag) {
          case 5:
            Xi || eu(n, t);

          case 6:
            var r = fu,
                a = du;
            fu = null, pu(e, t, n), du = a, null !== (fu = r) && (du ? (e = fu, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : fu.removeChild(n.stateNode));
            break;

          case 18:
            null !== fu && (du ? (e = fu, n = n.stateNode, 8 === e.nodeType ? ua(e.parentNode, n) : 1 === e.nodeType && ua(e, n), Vt(e)) : ua(fu, n.stateNode));
            break;

          case 4:
            r = fu, a = du, fu = n.stateNode.containerInfo, du = !0, pu(e, t, n), fu = r, du = a;
            break;

          case 0:
          case 11:
          case 14:
          case 15:
            if (!Xi && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
              a = r = r.next;

              do {
                var o = a,
                    l = o.destroy;
                o = o.tag, void 0 !== l && (0 !== (2 & o) || 0 !== (4 & o)) && tu(n, t, l), a = a.next;
              } while (a !== r);
            }

            pu(e, t, n);
            break;

          case 1:
            if (!Xi && (eu(n, t), "function" === typeof (r = n.stateNode).componentWillUnmount)) try {
              r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
            } catch (i) {
              Cs(n, t, i);
            }
            pu(e, t, n);
            break;

          case 21:
            pu(e, t, n);
            break;

          case 22:
            1 & n.mode ? (Xi = (r = Xi) || null !== n.memoizedState, pu(e, t, n), Xi = r) : pu(e, t, n);
            break;

          default:
            pu(e, t, n);
        }
      }

      function vu(e) {
        var t = e.updateQueue;

        if (null !== t) {
          e.updateQueue = null;
          var n = e.stateNode;
          null === n && (n = e.stateNode = new Zi()), t.forEach(function (t) {
            var r = Ts.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          });
        }
      }

      function mu(e, t) {
        var n = t.deletions;
        if (null !== n) for (var r = 0; r < n.length; r++) {
          var a = n[r];

          try {
            var l = e,
                i = t,
                u = i;

            e: for (; null !== u;) {
              switch (u.tag) {
                case 5:
                  fu = u.stateNode, du = !1;
                  break e;

                case 3:
                case 4:
                  fu = u.stateNode.containerInfo, du = !0;
                  break e;
              }

              u = u["return"];
            }

            if (null === fu) throw Error(o(160));
            hu(l, i, a), fu = null, du = !1;
            var s = a.alternate;
            null !== s && (s["return"] = null), a["return"] = null;
          } catch (c) {
            Cs(a, t, c);
          }
        }
        if (12854 & t.subtreeFlags) for (t = t.child; null !== t;) {
          yu(t, e), t = t.sibling;
        }
      }

      function yu(e, t) {
        var n = e.alternate,
            r = e.flags;

        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            if (mu(t, e), gu(e), 4 & r) {
              try {
                ru(3, e, e["return"]), au(3, e);
              } catch (m) {
                Cs(e, e["return"], m);
              }

              try {
                ru(5, e, e["return"]);
              } catch (m) {
                Cs(e, e["return"], m);
              }
            }

            break;

          case 1:
            mu(t, e), gu(e), 512 & r && null !== n && eu(n, n["return"]);
            break;

          case 5:
            if (mu(t, e), gu(e), 512 & r && null !== n && eu(n, n["return"]), 32 & e.flags) {
              var a = e.stateNode;

              try {
                de(a, "");
              } catch (m) {
                Cs(e, e["return"], m);
              }
            }

            if (4 & r && null != (a = e.stateNode)) {
              var l = e.memoizedProps,
                  i = null !== n ? n.memoizedProps : l,
                  u = e.type,
                  s = e.updateQueue;
              if (e.updateQueue = null, null !== s) try {
                "input" === u && "radio" === l.type && null != l.name && X(a, l), be(u, i);
                var c = be(u, l);

                for (i = 0; i < s.length; i += 2) {
                  var f = s[i],
                      d = s[i + 1];
                  "style" === f ? me(a, d) : "dangerouslySetInnerHTML" === f ? fe(a, d) : "children" === f ? de(a, d) : b(a, f, d, c);
                }

                switch (u) {
                  case "input":
                    Z(a, l);
                    break;

                  case "textarea":
                    oe(a, l);
                    break;

                  case "select":
                    var p = a._wrapperState.wasMultiple;
                    a._wrapperState.wasMultiple = !!l.multiple;
                    var h = l.value;
                    null != h ? ne(a, !!l.multiple, h, !1) : p !== !!l.multiple && (null != l.defaultValue ? ne(a, !!l.multiple, l.defaultValue, !0) : ne(a, !!l.multiple, l.multiple ? [] : "", !1));
                }

                a[pa] = l;
              } catch (m) {
                Cs(e, e["return"], m);
              }
            }

            break;

          case 6:
            if (mu(t, e), gu(e), 4 & r) {
              if (null === e.stateNode) throw Error(o(162));
              a = e.stateNode, l = e.memoizedProps;

              try {
                a.nodeValue = l;
              } catch (m) {
                Cs(e, e["return"], m);
              }
            }

            break;

          case 3:
            if (mu(t, e), gu(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
              Vt(t.containerInfo);
            } catch (m) {
              Cs(e, e["return"], m);
            }
            break;

          case 4:
          default:
            mu(t, e), gu(e);
            break;

          case 13:
            mu(t, e), gu(e), 8192 & (a = e.child).flags && (l = null !== a.memoizedState, a.stateNode.isHidden = l, !l || null !== a.alternate && null !== a.alternate.memoizedState || (Vu = Xe())), 4 & r && vu(e);
            break;

          case 22:
            if (f = null !== n && null !== n.memoizedState, 1 & e.mode ? (Xi = (c = Xi) || f, mu(t, e), Xi = c) : mu(t, e), gu(e), 8192 & r) {
              if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode)) for (Ji = e, f = e.child; null !== f;) {
                for (d = Ji = f; null !== Ji;) {
                  switch (h = (p = Ji).child, p.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      ru(4, p, p["return"]);
                      break;

                    case 1:
                      eu(p, p["return"]);
                      var v = p.stateNode;

                      if ("function" === typeof v.componentWillUnmount) {
                        r = p, n = p["return"];

                        try {
                          t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                        } catch (m) {
                          Cs(r, n, m);
                        }
                      }

                      break;

                    case 5:
                      eu(p, p["return"]);
                      break;

                    case 22:
                      if (null !== p.memoizedState) {
                        Su(d);
                        continue;
                      }

                  }

                  null !== h ? (h["return"] = p, Ji = h) : Su(d);
                }

                f = f.sibling;
              }

              e: for (f = null, d = e;;) {
                if (5 === d.tag) {
                  if (null === f) {
                    f = d;

                    try {
                      a = d.stateNode, c ? "function" === typeof (l = a.style).setProperty ? l.setProperty("display", "none", "important") : l.display = "none" : (u = d.stateNode, i = void 0 !== (s = d.memoizedProps.style) && null !== s && s.hasOwnProperty("display") ? s.display : null, u.style.display = ve("display", i));
                    } catch (m) {
                      Cs(e, e["return"], m);
                    }
                  }
                } else if (6 === d.tag) {
                  if (null === f) try {
                    d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                  } catch (m) {
                    Cs(e, e["return"], m);
                  }
                } else if ((22 !== d.tag && 23 !== d.tag || null === d.memoizedState || d === e) && null !== d.child) {
                  d.child["return"] = d, d = d.child;
                  continue;
                }

                if (d === e) break e;

                for (; null === d.sibling;) {
                  if (null === d["return"] || d["return"] === e) break e;
                  f === d && (f = null), d = d["return"];
                }

                f === d && (f = null), d.sibling["return"] = d["return"], d = d.sibling;
              }
            }

            break;

          case 19:
            mu(t, e), gu(e), 4 & r && vu(e);

          case 21:
        }
      }

      function gu(e) {
        var t = e.flags;

        if (2 & t) {
          try {
            e: {
              for (var n = e["return"]; null !== n;) {
                if (iu(n)) {
                  var r = n;
                  break e;
                }

                n = n["return"];
              }

              throw Error(o(160));
            }

            switch (r.tag) {
              case 5:
                var a = r.stateNode;
                32 & r.flags && (de(a, ""), r.flags &= -33), cu(e, uu(e), a);
                break;

              case 3:
              case 4:
                var l = r.stateNode.containerInfo;
                su(e, uu(e), l);
                break;

              default:
                throw Error(o(161));
            }
          } catch (i) {
            Cs(e, e["return"], i);
          }

          e.flags &= -3;
        }

        4096 & t && (e.flags &= -4097);
      }

      function bu(e, t, n) {
        Ji = e, ku(e, t, n);
      }

      function ku(e, t, n) {
        for (var r = 0 !== (1 & e.mode); null !== Ji;) {
          var a = Ji,
              o = a.child;

          if (22 === a.tag && r) {
            var l = null !== a.memoizedState || Gi;

            if (!l) {
              var i = a.alternate,
                  u = null !== i && null !== i.memoizedState || Xi;
              i = Gi;
              var s = Xi;
              if (Gi = l, (Xi = u) && !s) for (Ji = a; null !== Ji;) {
                u = (l = Ji).child, 22 === l.tag && null !== l.memoizedState ? xu(a) : null !== u ? (u["return"] = l, Ji = u) : xu(a);
              }

              for (; null !== o;) {
                Ji = o, ku(o, t, n), o = o.sibling;
              }

              Ji = a, Gi = i, Xi = s;
            }

            wu(e);
          } else 0 !== (8772 & a.subtreeFlags) && null !== o ? (o["return"] = a, Ji = o) : wu(e);
        }
      }

      function wu(e) {
        for (; null !== Ji;) {
          var t = Ji;

          if (0 !== (8772 & t.flags)) {
            var n = t.alternate;

            try {
              if (0 !== (8772 & t.flags)) switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  Xi || au(5, t);
                  break;

                case 1:
                  var r = t.stateNode;
                  if (4 & t.flags && !Xi) if (null === n) r.componentDidMount();else {
                    var a = t.elementType === t.type ? n.memoizedProps : yo(t.type, n.memoizedProps);
                    r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                  var l = t.updateQueue;
                  null !== l && Ao(t, l, r);
                  break;

                case 3:
                  var i = t.updateQueue;

                  if (null !== i) {
                    if (n = null, null !== t.child) switch (t.child.tag) {
                      case 5:
                      case 1:
                        n = t.child.stateNode;
                    }
                    Ao(t, i, n);
                  }

                  break;

                case 5:
                  var u = t.stateNode;

                  if (null === n && 4 & t.flags) {
                    n = u;
                    var s = t.memoizedProps;

                    switch (t.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        s.autoFocus && n.focus();
                        break;

                      case "img":
                        s.src && (n.src = s.src);
                    }
                  }

                  break;

                case 6:
                case 4:
                case 12:
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;

                case 13:
                  if (null === t.memoizedState) {
                    var c = t.alternate;

                    if (null !== c) {
                      var f = c.memoizedState;

                      if (null !== f) {
                        var d = f.dehydrated;
                        null !== d && Vt(d);
                      }
                    }
                  }

                  break;

                default:
                  throw Error(o(163));
              }
              Xi || 512 & t.flags && ou(t);
            } catch (p) {
              Cs(t, t["return"], p);
            }
          }

          if (t === e) {
            Ji = null;
            break;
          }

          if (null !== (n = t.sibling)) {
            n["return"] = t["return"], Ji = n;
            break;
          }

          Ji = t["return"];
        }
      }

      function Su(e) {
        for (; null !== Ji;) {
          var t = Ji;

          if (t === e) {
            Ji = null;
            break;
          }

          var n = t.sibling;

          if (null !== n) {
            n["return"] = t["return"], Ji = n;
            break;
          }

          Ji = t["return"];
        }
      }

      function xu(e) {
        for (; null !== Ji;) {
          var t = Ji;

          try {
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                var n = t["return"];

                try {
                  au(4, t);
                } catch (u) {
                  Cs(t, n, u);
                }

                break;

              case 1:
                var r = t.stateNode;

                if ("function" === typeof r.componentDidMount) {
                  var a = t["return"];

                  try {
                    r.componentDidMount();
                  } catch (u) {
                    Cs(t, a, u);
                  }
                }

                var o = t["return"];

                try {
                  ou(t);
                } catch (u) {
                  Cs(t, o, u);
                }

                break;

              case 5:
                var l = t["return"];

                try {
                  ou(t);
                } catch (u) {
                  Cs(t, l, u);
                }

            }
          } catch (u) {
            Cs(t, t["return"], u);
          }

          if (t === e) {
            Ji = null;
            break;
          }

          var i = t.sibling;

          if (null !== i) {
            i["return"] = t["return"], Ji = i;
            break;
          }

          Ji = t["return"];
        }
      }

      var Eu,
          Cu = Math.ceil,
          _u = k.ReactCurrentDispatcher,
          Pu = k.ReactCurrentOwner,
          Lu = k.ReactCurrentBatchConfig,
          Tu = 0,
          Nu = null,
          zu = null,
          Ou = 0,
          Mu = 0,
          Ru = Ea(0),
          Du = 0,
          Fu = null,
          Iu = 0,
          ju = 0,
          Au = 0,
          Wu = null,
          Uu = null,
          Vu = 0,
          Bu = 1 / 0,
          Hu = null,
          $u = !1,
          Qu = null,
          qu = null,
          Ku = !1,
          Yu = null,
          Gu = 0,
          Xu = 0,
          Zu = null,
          Ju = -1,
          es = 0;

      function ts() {
        return 0 !== (6 & Tu) ? Xe() : -1 !== Ju ? Ju : Ju = Xe();
      }

      function ns(e) {
        return 0 === (1 & e.mode) ? 1 : 0 !== (2 & Tu) && 0 !== Ou ? Ou & -Ou : null !== mo.transition ? (0 === es && (es = vt()), es) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : Gt(e.type);
      }

      function rs(e, t, n, r) {
        if (50 < Xu) throw Xu = 0, Zu = null, Error(o(185));
        yt(e, n, r), 0 !== (2 & Tu) && e === Nu || (e === Nu && (0 === (2 & Tu) && (ju |= n), 4 === Du && us(e, Ou)), as(e, r), 1 === n && 0 === Tu && 0 === (1 & t.mode) && (Bu = Xe() + 500, Aa && Va()));
      }

      function as(e, t) {
        var n = e.callbackNode;
        !function (e, t) {
          for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
            var l = 31 - lt(o),
                i = 1 << l,
                u = a[l];
            -1 === u ? 0 !== (i & n) && 0 === (i & r) || (a[l] = pt(i, t)) : u <= t && (e.expiredLanes |= i), o &= ~i;
          }
        }(e, t);
        var r = dt(e, e === Nu ? Ou : 0);
        if (0 === r) null !== n && Ke(n), e.callbackNode = null, e.callbackPriority = 0;else if (t = r & -r, e.callbackPriority !== t) {
          if (null != n && Ke(n), 1 === t) 0 === e.tag ? function (e) {
            Aa = !0, Ua(e);
          }(ss.bind(null, e)) : Ua(ss.bind(null, e)), la(function () {
            0 === (6 & Tu) && Va();
          }), n = null;else {
            switch (kt(r)) {
              case 1:
                n = Je;
                break;

              case 4:
                n = et;
                break;

              case 16:
              default:
                n = tt;
                break;

              case 536870912:
                n = rt;
            }

            n = Ns(n, os.bind(null, e));
          }
          e.callbackPriority = t, e.callbackNode = n;
        }
      }

      function os(e, t) {
        if (Ju = -1, es = 0, 0 !== (6 & Tu)) throw Error(o(327));
        var n = e.callbackNode;
        if (xs() && e.callbackNode !== n) return null;
        var r = dt(e, e === Nu ? Ou : 0);
        if (0 === r) return null;
        if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = ys(e, r);else {
          t = r;
          var a = Tu;
          Tu |= 2;
          var l = vs();

          for (Nu === e && Ou === t || (Hu = null, Bu = Xe() + 500, ps(e, t));;) {
            try {
              bs();
              break;
            } catch (u) {
              hs(e, u);
            }
          }

          So(), _u.current = l, Tu = a, null !== zu ? t = 0 : (Nu = null, Ou = 0, t = Du);
        }

        if (0 !== t) {
          if (2 === t && 0 !== (a = ht(e)) && (r = a, t = ls(e, a)), 1 === t) throw n = Fu, ps(e, 0), us(e, r), as(e, Xe()), n;
          if (6 === t) us(e, r);else {
            if (a = e.current.alternate, 0 === (30 & r) && !function (e) {
              for (var t = e;;) {
                if (16384 & t.flags) {
                  var n = t.updateQueue;
                  if (null !== n && null !== (n = n.stores)) for (var r = 0; r < n.length; r++) {
                    var a = n[r],
                        o = a.getSnapshot;
                    a = a.value;

                    try {
                      if (!ir(o(), a)) return !1;
                    } catch (i) {
                      return !1;
                    }
                  }
                }

                if (n = t.child, 16384 & t.subtreeFlags && null !== n) n["return"] = t, t = n;else {
                  if (t === e) break;

                  for (; null === t.sibling;) {
                    if (null === t["return"] || t["return"] === e) return !0;
                    t = t["return"];
                  }

                  t.sibling["return"] = t["return"], t = t.sibling;
                }
              }

              return !0;
            }(a) && (2 === (t = ys(e, r)) && 0 !== (l = ht(e)) && (r = l, t = ls(e, l)), 1 === t)) throw n = Fu, ps(e, 0), us(e, r), as(e, Xe()), n;

            switch (e.finishedWork = a, e.finishedLanes = r, t) {
              case 0:
              case 1:
                throw Error(o(345));

              case 2:
              case 5:
                Ss(e, Uu, Hu);
                break;

              case 3:
                if (us(e, r), (130023424 & r) === r && 10 < (t = Vu + 500 - Xe())) {
                  if (0 !== dt(e, 0)) break;

                  if (((a = e.suspendedLanes) & r) !== r) {
                    ts(), e.pingedLanes |= e.suspendedLanes & a;
                    break;
                  }

                  e.timeoutHandle = ra(Ss.bind(null, e, Uu, Hu), t);
                  break;
                }

                Ss(e, Uu, Hu);
                break;

              case 4:
                if (us(e, r), (4194240 & r) === r) break;

                for (t = e.eventTimes, a = -1; 0 < r;) {
                  var i = 31 - lt(r);
                  l = 1 << i, (i = t[i]) > a && (a = i), r &= ~l;
                }

                if (r = a, 10 < (r = (120 > (r = Xe() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Cu(r / 1960)) - r)) {
                  e.timeoutHandle = ra(Ss.bind(null, e, Uu, Hu), r);
                  break;
                }

                Ss(e, Uu, Hu);
                break;

              default:
                throw Error(o(329));
            }
          }
        }

        return as(e, Xe()), e.callbackNode === n ? os.bind(null, e) : null;
      }

      function ls(e, t) {
        var n = Wu;
        return e.current.memoizedState.isDehydrated && (ps(e, t).flags |= 256), 2 !== (e = ys(e, t)) && (t = Uu, Uu = n, null !== t && is(t)), e;
      }

      function is(e) {
        null === Uu ? Uu = e : Uu.push.apply(Uu, e);
      }

      function us(e, t) {
        for (t &= ~Au, t &= ~ju, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
          var n = 31 - lt(t),
              r = 1 << n;
          e[n] = -1, t &= ~r;
        }
      }

      function ss(e) {
        if (0 !== (6 & Tu)) throw Error(o(327));
        xs();
        var t = dt(e, 0);
        if (0 === (1 & t)) return as(e, Xe()), null;
        var n = ys(e, t);

        if (0 !== e.tag && 2 === n) {
          var r = ht(e);
          0 !== r && (t = r, n = ls(e, r));
        }

        if (1 === n) throw n = Fu, ps(e, 0), us(e, t), as(e, Xe()), n;
        if (6 === n) throw Error(o(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ss(e, Uu, Hu), as(e, Xe()), null;
      }

      function cs(e, t) {
        var n = Tu;
        Tu |= 1;

        try {
          return e(t);
        } finally {
          0 === (Tu = n) && (Bu = Xe() + 500, Aa && Va());
        }
      }

      function fs(e) {
        null !== Yu && 0 === Yu.tag && 0 === (6 & Tu) && xs();
        var t = Tu;
        Tu |= 1;
        var n = Lu.transition,
            r = bt;

        try {
          if (Lu.transition = null, bt = 1, e) return e();
        } finally {
          bt = r, Lu.transition = n, 0 === (6 & (Tu = t)) && Va();
        }
      }

      function ds() {
        Mu = Ru.current, Ca(Ru);
      }

      function ps(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (-1 !== n && (e.timeoutHandle = -1, aa(n)), null !== zu) for (n = zu["return"]; null !== n;) {
          var r = n;

          switch (to(r), r.tag) {
            case 1:
              null !== (r = r.type.childContextTypes) && void 0 !== r && Ma();
              break;

            case 3:
              ol(), Ca(Ta), Ca(La), fl();
              break;

            case 5:
              il(r);
              break;

            case 4:
              ol();
              break;

            case 13:
            case 19:
              Ca(ul);
              break;

            case 10:
              xo(r.type._context);
              break;

            case 22:
            case 23:
              ds();
          }

          n = n["return"];
        }

        if (Nu = e, zu = e = Rs(e.current, null), Ou = Mu = t, Du = 0, Fu = null, Au = ju = Iu = 0, Uu = Wu = null, null !== Po) {
          for (t = 0; t < Po.length; t++) {
            if (null !== (r = (n = Po[t]).interleaved)) {
              n.interleaved = null;
              var a = r.next,
                  o = n.pending;

              if (null !== o) {
                var l = o.next;
                o.next = a, r.next = l;
              }

              n.pending = r;
            }
          }

          Po = null;
        }

        return e;
      }

      function hs(e, t) {
        for (;;) {
          var n = zu;

          try {
            if (So(), dl.current = li, gl) {
              for (var r = vl.memoizedState; null !== r;) {
                var a = r.queue;
                null !== a && (a.pending = null), r = r.next;
              }

              gl = !1;
            }

            if (hl = 0, yl = ml = vl = null, bl = !1, kl = 0, Pu.current = null, null === n || null === n["return"]) {
              Du = 1, Fu = t, zu = null;
              break;
            }

            e: {
              var l = e,
                  i = n["return"],
                  u = n,
                  s = t;

              if (t = Ou, u.flags |= 32768, null !== s && "object" === _typeof(s) && "function" === typeof s.then) {
                var c = s,
                    f = u,
                    d = f.tag;

                if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                  var p = f.alternate;
                  p ? (f.updateQueue = p.updateQueue, f.memoizedState = p.memoizedState, f.lanes = p.lanes) : (f.updateQueue = null, f.memoizedState = null);
                }

                var h = yi(i);

                if (null !== h) {
                  h.flags &= -257, gi(h, i, u, 0, t), 1 & h.mode && mi(l, c, t), s = c;
                  var v = (t = h).updateQueue;

                  if (null === v) {
                    var m = new Set();
                    m.add(s), t.updateQueue = m;
                  } else v.add(s);

                  break e;
                }

                if (0 === (1 & t)) {
                  mi(l, c, t), ms();
                  break e;
                }

                s = Error(o(426));
              } else if (ao && 1 & u.mode) {
                var y = yi(i);

                if (null !== y) {
                  0 === (65536 & y.flags) && (y.flags |= 256), gi(y, i, u, 0, t), vo(ci(s, u));
                  break e;
                }
              }

              l = s = ci(s, u), 4 !== Du && (Du = 2), null === Wu ? Wu = [l] : Wu.push(l), l = i;

              do {
                switch (l.tag) {
                  case 3:
                    l.flags |= 65536, t &= -t, l.lanes |= t, Io(l, hi(0, s, t));
                    break e;

                  case 1:
                    u = s;
                    var g = l.type,
                        b = l.stateNode;

                    if (0 === (128 & l.flags) && ("function" === typeof g.getDerivedStateFromError || null !== b && "function" === typeof b.componentDidCatch && (null === qu || !qu.has(b)))) {
                      l.flags |= 65536, t &= -t, l.lanes |= t, Io(l, vi(l, u, t));
                      break e;
                    }

                }

                l = l["return"];
              } while (null !== l);
            }

            ws(n);
          } catch (k) {
            t = k, zu === n && null !== n && (zu = n = n["return"]);
            continue;
          }

          break;
        }
      }

      function vs() {
        var e = _u.current;
        return _u.current = li, null === e ? li : e;
      }

      function ms() {
        0 !== Du && 3 !== Du && 2 !== Du || (Du = 4), null === Nu || 0 === (268435455 & Iu) && 0 === (268435455 & ju) || us(Nu, Ou);
      }

      function ys(e, t) {
        var n = Tu;
        Tu |= 2;
        var r = vs();

        for (Nu === e && Ou === t || (Hu = null, ps(e, t));;) {
          try {
            gs();
            break;
          } catch (a) {
            hs(e, a);
          }
        }

        if (So(), Tu = n, _u.current = r, null !== zu) throw Error(o(261));
        return Nu = null, Ou = 0, Du;
      }

      function gs() {
        for (; null !== zu;) {
          ks(zu);
        }
      }

      function bs() {
        for (; null !== zu && !Ye();) {
          ks(zu);
        }
      }

      function ks(e) {
        var t = Eu(e.alternate, e, Mu);
        e.memoizedProps = e.pendingProps, null === t ? ws(e) : zu = t, Pu.current = null;
      }

      function ws(e) {
        var t = e;

        do {
          var n = t.alternate;

          if (e = t["return"], 0 === (32768 & t.flags)) {
            if (null !== (n = Ki(n, t, Mu))) return void (zu = n);
          } else {
            if (null !== (n = Yi(n, t))) return n.flags &= 32767, void (zu = n);
            if (null === e) return Du = 6, void (zu = null);
            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
          }

          if (null !== (t = t.sibling)) return void (zu = t);
          zu = t = e;
        } while (null !== t);

        0 === Du && (Du = 5);
      }

      function Ss(e, t, n) {
        var r = bt,
            a = Lu.transition;

        try {
          Lu.transition = null, bt = 1, function (e, t, n, r) {
            do {
              xs();
            } while (null !== Yu);

            if (0 !== (6 & Tu)) throw Error(o(327));
            n = e.finishedWork;
            var a = e.finishedLanes;
            if (null === n) return null;
            if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
            e.callbackNode = null, e.callbackPriority = 0;
            var l = n.lanes | n.childLanes;

            if (function (e, t) {
              var n = e.pendingLanes & ~t;
              e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
              var r = e.eventTimes;

              for (e = e.expirationTimes; 0 < n;) {
                var a = 31 - lt(n),
                    o = 1 << a;
                t[a] = 0, r[a] = -1, e[a] = -1, n &= ~o;
              }
            }(e, l), e === Nu && (zu = Nu = null, Ou = 0), 0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags) || Ku || (Ku = !0, Ns(tt, function () {
              return xs(), null;
            })), l = 0 !== (15990 & n.flags), 0 !== (15990 & n.subtreeFlags) || l) {
              l = Lu.transition, Lu.transition = null;
              var i = bt;
              bt = 1;
              var u = Tu;
              Tu |= 4, Pu.current = null, function (e, t) {
                if (ea = Ht, pr(e = dr())) {
                  if ("selectionStart" in e) var n = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                  };else e: {
                    var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();

                    if (r && 0 !== r.rangeCount) {
                      n = r.anchorNode;
                      var a = r.anchorOffset,
                          l = r.focusNode;
                      r = r.focusOffset;

                      try {
                        n.nodeType, l.nodeType;
                      } catch (w) {
                        n = null;
                        break e;
                      }

                      var i = 0,
                          u = -1,
                          s = -1,
                          c = 0,
                          f = 0,
                          d = e,
                          p = null;

                      t: for (;;) {
                        for (var h; d !== n || 0 !== a && 3 !== d.nodeType || (u = i + a), d !== l || 0 !== r && 3 !== d.nodeType || (s = i + r), 3 === d.nodeType && (i += d.nodeValue.length), null !== (h = d.firstChild);) {
                          p = d, d = h;
                        }

                        for (;;) {
                          if (d === e) break t;
                          if (p === n && ++c === a && (u = i), p === l && ++f === r && (s = i), null !== (h = d.nextSibling)) break;
                          p = (d = p).parentNode;
                        }

                        d = h;
                      }

                      n = -1 === u || -1 === s ? null : {
                        start: u,
                        end: s
                      };
                    } else n = null;
                  }
                  n = n || {
                    start: 0,
                    end: 0
                  };
                } else n = null;

                for (ta = {
                  focusedElem: e,
                  selectionRange: n
                }, Ht = !1, Ji = t; null !== Ji;) {
                  if (e = (t = Ji).child, 0 !== (1028 & t.subtreeFlags) && null !== e) e["return"] = t, Ji = e;else for (; null !== Ji;) {
                    t = Ji;

                    try {
                      var v = t.alternate;
                      if (0 !== (1024 & t.flags)) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                          break;

                        case 1:
                          if (null !== v) {
                            var m = v.memoizedProps,
                                y = v.memoizedState,
                                g = t.stateNode,
                                b = g.getSnapshotBeforeUpdate(t.elementType === t.type ? m : yo(t.type, m), y);
                            g.__reactInternalSnapshotBeforeUpdate = b;
                          }

                          break;

                        case 3:
                          var k = t.stateNode.containerInfo;
                          1 === k.nodeType ? k.textContent = "" : 9 === k.nodeType && k.documentElement && k.removeChild(k.documentElement);
                          break;

                        default:
                          throw Error(o(163));
                      }
                    } catch (w) {
                      Cs(t, t["return"], w);
                    }

                    if (null !== (e = t.sibling)) {
                      e["return"] = t["return"], Ji = e;
                      break;
                    }

                    Ji = t["return"];
                  }
                }

                v = nu, nu = !1;
              }(e, n), yu(n, e), hr(ta), Ht = !!ea, ta = ea = null, e.current = n, bu(n, e, a), Ge(), Tu = u, bt = i, Lu.transition = l;
            } else e.current = n;

            if (Ku && (Ku = !1, Yu = e, Gu = a), l = e.pendingLanes, 0 === l && (qu = null), function (e) {
              if (ot && "function" === typeof ot.onCommitFiberRoot) try {
                ot.onCommitFiberRoot(at, e, void 0, 128 === (128 & e.current.flags));
              } catch (t) {}
            }(n.stateNode), as(e, Xe()), null !== t) for (r = e.onRecoverableError, n = 0; n < t.length; n++) {
              a = t[n], r(a.value, {
                componentStack: a.stack,
                digest: a.digest
              });
            }
            if ($u) throw $u = !1, e = Qu, Qu = null, e;
            0 !== (1 & Gu) && 0 !== e.tag && xs(), l = e.pendingLanes, 0 !== (1 & l) ? e === Zu ? Xu++ : (Xu = 0, Zu = e) : Xu = 0, Va();
          }(e, t, n, r);
        } finally {
          Lu.transition = a, bt = r;
        }

        return null;
      }

      function xs() {
        if (null !== Yu) {
          var e = kt(Gu),
              t = Lu.transition,
              n = bt;

          try {
            if (Lu.transition = null, bt = 16 > e ? 16 : e, null === Yu) var r = !1;else {
              if (e = Yu, Yu = null, Gu = 0, 0 !== (6 & Tu)) throw Error(o(331));
              var a = Tu;

              for (Tu |= 4, Ji = e.current; null !== Ji;) {
                var l = Ji,
                    i = l.child;

                if (0 !== (16 & Ji.flags)) {
                  var u = l.deletions;

                  if (null !== u) {
                    for (var s = 0; s < u.length; s++) {
                      var c = u[s];

                      for (Ji = c; null !== Ji;) {
                        var f = Ji;

                        switch (f.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ru(8, f, l);
                        }

                        var d = f.child;
                        if (null !== d) d["return"] = f, Ji = d;else for (; null !== Ji;) {
                          var p = (f = Ji).sibling,
                              h = f["return"];

                          if (lu(f), f === c) {
                            Ji = null;
                            break;
                          }

                          if (null !== p) {
                            p["return"] = h, Ji = p;
                            break;
                          }

                          Ji = h;
                        }
                      }
                    }

                    var v = l.alternate;

                    if (null !== v) {
                      var m = v.child;

                      if (null !== m) {
                        v.child = null;

                        do {
                          var y = m.sibling;
                          m.sibling = null, m = y;
                        } while (null !== m);
                      }
                    }

                    Ji = l;
                  }
                }

                if (0 !== (2064 & l.subtreeFlags) && null !== i) i["return"] = l, Ji = i;else e: for (; null !== Ji;) {
                  if (0 !== (2048 & (l = Ji).flags)) switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ru(9, l, l["return"]);
                  }
                  var g = l.sibling;

                  if (null !== g) {
                    g["return"] = l["return"], Ji = g;
                    break e;
                  }

                  Ji = l["return"];
                }
              }

              var b = e.current;

              for (Ji = b; null !== Ji;) {
                var k = (i = Ji).child;
                if (0 !== (2064 & i.subtreeFlags) && null !== k) k["return"] = i, Ji = k;else e: for (i = b; null !== Ji;) {
                  if (0 !== (2048 & (u = Ji).flags)) try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        au(9, u);
                    }
                  } catch (S) {
                    Cs(u, u["return"], S);
                  }

                  if (u === i) {
                    Ji = null;
                    break e;
                  }

                  var w = u.sibling;

                  if (null !== w) {
                    w["return"] = u["return"], Ji = w;
                    break e;
                  }

                  Ji = u["return"];
                }
              }

              if (Tu = a, Va(), ot && "function" === typeof ot.onPostCommitFiberRoot) try {
                ot.onPostCommitFiberRoot(at, e);
              } catch (S) {}
              r = !0;
            }
            return r;
          } finally {
            bt = n, Lu.transition = t;
          }
        }

        return !1;
      }

      function Es(e, t, n) {
        e = Do(e, t = hi(0, t = ci(n, t), 1), 1), t = ts(), null !== e && (yt(e, 1, t), as(e, t));
      }

      function Cs(e, t, n) {
        if (3 === e.tag) Es(e, e, n);else for (; null !== t;) {
          if (3 === t.tag) {
            Es(t, e, n);
            break;
          }

          if (1 === t.tag) {
            var r = t.stateNode;

            if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === qu || !qu.has(r))) {
              t = Do(t, e = vi(t, e = ci(n, e), 1), 1), e = ts(), null !== t && (yt(t, 1, e), as(t, e));
              break;
            }
          }

          t = t["return"];
        }
      }

      function _s(e, t, n) {
        var r = e.pingCache;
        null !== r && r["delete"](t), t = ts(), e.pingedLanes |= e.suspendedLanes & n, Nu === e && (Ou & n) === n && (4 === Du || 3 === Du && (130023424 & Ou) === Ou && 500 > Xe() - Vu ? ps(e, 0) : Au |= n), as(e, t);
      }

      function Ps(e, t) {
        0 === t && (0 === (1 & e.mode) ? t = 1 : (t = ct, 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
        var n = ts();
        null !== (e = No(e, t)) && (yt(e, t, n), as(e, n));
      }

      function Ls(e) {
        var t = e.memoizedState,
            n = 0;
        null !== t && (n = t.retryLane), Ps(e, n);
      }

      function Ts(e, t) {
        var n = 0;

        switch (e.tag) {
          case 13:
            var r = e.stateNode,
                a = e.memoizedState;
            null !== a && (n = a.retryLane);
            break;

          case 19:
            r = e.stateNode;
            break;

          default:
            throw Error(o(314));
        }

        null !== r && r["delete"](t), Ps(e, n);
      }

      function Ns(e, t) {
        return qe(e, t);
      }

      function zs(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this["return"] = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
      }

      function Os(e, t, n, r) {
        return new zs(e, t, n, r);
      }

      function Ms(e) {
        return !(!(e = e.prototype) || !e.isReactComponent);
      }

      function Rs(e, t) {
        var n = e.alternate;
        return null === n ? ((n = Os(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
          lanes: t.lanes,
          firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
      }

      function Ds(e, t, n, r, a, l) {
        var i = 2;
        if (r = e, "function" === typeof e) Ms(e) && (i = 1);else if ("string" === typeof e) i = 5;else e: switch (e) {
          case x:
            return Fs(n.children, a, l, t);

          case E:
            i = 8, a |= 8;
            break;

          case C:
            return (e = Os(12, n, t, 2 | a)).elementType = C, e.lanes = l, e;

          case T:
            return (e = Os(13, n, t, a)).elementType = T, e.lanes = l, e;

          case N:
            return (e = Os(19, n, t, a)).elementType = N, e.lanes = l, e;

          case M:
            return Is(n, a, l, t);

          default:
            if ("object" === _typeof(e) && null !== e) switch (e.$$typeof) {
              case _:
                i = 10;
                break e;

              case P:
                i = 9;
                break e;

              case L:
                i = 11;
                break e;

              case z:
                i = 14;
                break e;

              case O:
                i = 16, r = null;
                break e;
            }
            throw Error(o(130, null == e ? e : _typeof(e), ""));
        }
        return (t = Os(i, n, t, a)).elementType = e, t.type = r, t.lanes = l, t;
      }

      function Fs(e, t, n, r) {
        return (e = Os(7, e, r, t)).lanes = n, e;
      }

      function Is(e, t, n, r) {
        return (e = Os(22, e, r, t)).elementType = M, e.lanes = n, e.stateNode = {
          isHidden: !1
        }, e;
      }

      function js(e, t, n) {
        return (e = Os(6, e, null, t)).lanes = n, e;
      }

      function As(e, t, n) {
        return (t = Os(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation
        }, t;
      }

      function Ws(e, t, n, r, a) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = mt(0), this.expirationTimes = mt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mt(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
      }

      function Us(e, t, n, r, a, o, l, i, u) {
        return e = new Ws(e, t, n, i, u), 1 === t ? (t = 1, !0 === o && (t |= 8)) : t = 0, o = Os(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
          element: r,
          isDehydrated: n,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null
        }, Oo(o), e;
      }

      function Vs(e) {
        if (!e) return Pa;

        e: {
          if (Ve(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(o(170));
          var t = e;

          do {
            switch (t.tag) {
              case 3:
                t = t.stateNode.context;
                break e;

              case 1:
                if (Oa(t.type)) {
                  t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                  break e;
                }

            }

            t = t["return"];
          } while (null !== t);

          throw Error(o(171));
        }

        if (1 === e.tag) {
          var n = e.type;
          if (Oa(n)) return Da(e, n, t);
        }

        return t;
      }

      function Bs(e, t, n, r, a, o, l, i, u) {
        return (e = Us(n, r, !0, e, 0, o, 0, i, u)).context = Vs(null), n = e.current, (o = Ro(r = ts(), a = ns(n))).callback = void 0 !== t && null !== t ? t : null, Do(n, o, a), e.current.lanes = a, yt(e, a, r), as(e, r), e;
      }

      function Hs(e, t, n, r) {
        var a = t.current,
            o = ts(),
            l = ns(a);
        return n = Vs(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Ro(o, l)).payload = {
          element: e
        }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Do(a, t, l)) && (rs(e, a, l, o), Fo(e, a, l)), l;
      }

      function $s(e) {
        return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
      }

      function Qs(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
          var n = e.retryLane;
          e.retryLane = 0 !== n && n < t ? n : t;
        }
      }

      function qs(e, t) {
        Qs(e, t), (e = e.alternate) && Qs(e, t);
      }

      Eu = function Eu(e, t, n) {
        if (null !== e) {
          if (e.memoizedProps !== t.pendingProps || Ta.current) ki = !0;else {
            if (0 === (e.lanes & n) && 0 === (128 & t.flags)) return ki = !1, function (e, t, n) {
              switch (t.tag) {
                case 3:
                  Ni(t), ho();
                  break;

                case 5:
                  ll(t);
                  break;

                case 1:
                  Oa(t.type) && Fa(t);
                  break;

                case 4:
                  al(t, t.stateNode.containerInfo);
                  break;

                case 10:
                  var r = t.type._context,
                      a = t.memoizedProps.value;
                  _a(go, r._currentValue), r._currentValue = a;
                  break;

                case 13:
                  if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (_a(ul, 1 & ul.current), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? ji(e, t, n) : (_a(ul, 1 & ul.current), null !== (e = $i(e, t, n)) ? e.sibling : null);

                  _a(ul, 1 & ul.current);

                  break;

                case 19:
                  if (r = 0 !== (n & t.childLanes), 0 !== (128 & e.flags)) {
                    if (r) return Bi(e, t, n);
                    t.flags |= 128;
                  }

                  if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), _a(ul, ul.current), r) break;
                  return null;

                case 22:
                case 23:
                  return t.lanes = 0, Ci(e, t, n);
              }

              return $i(e, t, n);
            }(e, t, n);
            ki = 0 !== (131072 & e.flags);
          }
        } else ki = !1, ao && 0 !== (1048576 & t.flags) && Ja(t, Qa, t.index);

        switch (t.lanes = 0, t.tag) {
          case 2:
            var r = t.type;
            Hi(e, t), e = t.pendingProps;
            var a = za(t, La.current);
            Co(t, n), a = El(null, t, r, e, a, n);
            var l = Cl();
            return t.flags |= 1, "object" === _typeof(a) && null !== a && "function" === typeof a.render && void 0 === a.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Oa(r) ? (l = !0, Fa(t)) : l = !1, t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, Oo(t), a.updater = Vo, t.stateNode = a, a._reactInternals = t, Qo(t, r, e, n), t = Ti(null, t, r, !0, l, n)) : (t.tag = 0, ao && l && eo(t), wi(null, t, a, n), t = t.child), t;

          case 16:
            r = t.elementType;

            e: {
              switch (Hi(e, t), e = t.pendingProps, r = (a = r._init)(r._payload), t.type = r, a = t.tag = function (e) {
                if ("function" === typeof e) return Ms(e) ? 1 : 0;

                if (void 0 !== e && null !== e) {
                  if ((e = e.$$typeof) === L) return 11;
                  if (e === z) return 14;
                }

                return 2;
              }(r), e = yo(r, e), a) {
                case 0:
                  t = Pi(null, t, r, e, n);
                  break e;

                case 1:
                  t = Li(null, t, r, e, n);
                  break e;

                case 11:
                  t = Si(null, t, r, e, n);
                  break e;

                case 14:
                  t = xi(null, t, r, yo(r.type, e), n);
                  break e;
              }

              throw Error(o(306, r, ""));
            }

            return t;

          case 0:
            return r = t.type, a = t.pendingProps, Pi(e, t, r, a = t.elementType === r ? a : yo(r, a), n);

          case 1:
            return r = t.type, a = t.pendingProps, Li(e, t, r, a = t.elementType === r ? a : yo(r, a), n);

          case 3:
            e: {
              if (Ni(t), null === e) throw Error(o(387));
              r = t.pendingProps, a = (l = t.memoizedState).element, Mo(e, t), jo(t, r, null, n);
              var i = t.memoizedState;

              if (r = i.element, l.isDehydrated) {
                if (l = {
                  element: r,
                  isDehydrated: !1,
                  cache: i.cache,
                  pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                  transitions: i.transitions
                }, t.updateQueue.baseState = l, t.memoizedState = l, 256 & t.flags) {
                  t = zi(e, t, r, n, a = ci(Error(o(423)), t));
                  break e;
                }

                if (r !== a) {
                  t = zi(e, t, r, n, a = ci(Error(o(424)), t));
                  break e;
                }

                for (ro = sa(t.stateNode.containerInfo.firstChild), no = t, ao = !0, oo = null, n = Zo(t, null, r, n), t.child = n; n;) {
                  n.flags = -3 & n.flags | 4096, n = n.sibling;
                }
              } else {
                if (ho(), r === a) {
                  t = $i(e, t, n);
                  break e;
                }

                wi(e, t, r, n);
              }

              t = t.child;
            }

            return t;

          case 5:
            return ll(t), null === e && so(t), r = t.type, a = t.pendingProps, l = null !== e ? e.memoizedProps : null, i = a.children, na(r, a) ? i = null : null !== l && na(r, l) && (t.flags |= 32), _i(e, t), wi(e, t, i, n), t.child;

          case 6:
            return null === e && so(t), null;

          case 13:
            return ji(e, t, n);

          case 4:
            return al(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Xo(t, null, r, n) : wi(e, t, r, n), t.child;

          case 11:
            return r = t.type, a = t.pendingProps, Si(e, t, r, a = t.elementType === r ? a : yo(r, a), n);

          case 7:
            return wi(e, t, t.pendingProps, n), t.child;

          case 8:
          case 12:
            return wi(e, t, t.pendingProps.children, n), t.child;

          case 10:
            e: {
              if (r = t.type._context, a = t.pendingProps, l = t.memoizedProps, i = a.value, _a(go, r._currentValue), r._currentValue = i, null !== l) if (ir(l.value, i)) {
                if (l.children === a.children && !Ta.current) {
                  t = $i(e, t, n);
                  break e;
                }
              } else for (null !== (l = t.child) && (l["return"] = t); null !== l;) {
                var u = l.dependencies;

                if (null !== u) {
                  i = l.child;

                  for (var s = u.firstContext; null !== s;) {
                    if (s.context === r) {
                      if (1 === l.tag) {
                        (s = Ro(-1, n & -n)).tag = 2;
                        var c = l.updateQueue;

                        if (null !== c) {
                          var f = (c = c.shared).pending;
                          null === f ? s.next = s : (s.next = f.next, f.next = s), c.pending = s;
                        }
                      }

                      l.lanes |= n, null !== (s = l.alternate) && (s.lanes |= n), Eo(l["return"], n, t), u.lanes |= n;
                      break;
                    }

                    s = s.next;
                  }
                } else if (10 === l.tag) i = l.type === t.type ? null : l.child;else if (18 === l.tag) {
                  if (null === (i = l["return"])) throw Error(o(341));
                  i.lanes |= n, null !== (u = i.alternate) && (u.lanes |= n), Eo(i, n, t), i = l.sibling;
                } else i = l.child;

                if (null !== i) i["return"] = l;else for (i = l; null !== i;) {
                  if (i === t) {
                    i = null;
                    break;
                  }

                  if (null !== (l = i.sibling)) {
                    l["return"] = i["return"], i = l;
                    break;
                  }

                  i = i["return"];
                }
                l = i;
              }
              wi(e, t, a.children, n), t = t.child;
            }

            return t;

          case 9:
            return a = t.type, r = t.pendingProps.children, Co(t, n), r = r(a = _o(a)), t.flags |= 1, wi(e, t, r, n), t.child;

          case 14:
            return a = yo(r = t.type, t.pendingProps), xi(e, t, r, a = yo(r.type, a), n);

          case 15:
            return Ei(e, t, t.type, t.pendingProps, n);

          case 17:
            return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : yo(r, a), Hi(e, t), t.tag = 1, Oa(r) ? (e = !0, Fa(t)) : e = !1, Co(t, n), Ho(t, r, a), Qo(t, r, a, n), Ti(null, t, r, !0, e, n);

          case 19:
            return Bi(e, t, n);

          case 22:
            return Ci(e, t, n);
        }

        throw Error(o(156, t.tag));
      };

      var Ks = "function" === typeof reportError ? reportError : function (e) {
        console.error(e);
      };

      function Ys(e) {
        this._internalRoot = e;
      }

      function Gs(e) {
        this._internalRoot = e;
      }

      function Xs(e) {
        return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType);
      }

      function Zs(e) {
        return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue));
      }

      function Js() {}

      function ec(e, t, n, r, a) {
        var o = n._reactRootContainer;

        if (o) {
          var l = o;

          if ("function" === typeof a) {
            var i = a;

            a = function a() {
              var e = $s(l);
              i.call(e);
            };
          }

          Hs(t, l, e, a);
        } else l = function (e, t, n, r, a) {
          if (a) {
            if ("function" === typeof r) {
              var o = r;

              r = function r() {
                var e = $s(l);
                o.call(e);
              };
            }

            var l = Bs(t, r, e, 0, null, !1, 0, "", Js);
            return e._reactRootContainer = l, e[ha] = l.current, Vr(8 === e.nodeType ? e.parentNode : e), fs(), l;
          }

          for (; a = e.lastChild;) {
            e.removeChild(a);
          }

          if ("function" === typeof r) {
            var i = r;

            r = function r() {
              var e = $s(u);
              i.call(e);
            };
          }

          var u = Us(e, 0, !1, null, 0, !1, 0, "", Js);
          return e._reactRootContainer = u, e[ha] = u.current, Vr(8 === e.nodeType ? e.parentNode : e), fs(function () {
            Hs(t, u, n, r);
          }), u;
        }(n, t, e, a, r);

        return $s(l);
      }

      Gs.prototype.render = Ys.prototype.render = function (e) {
        var t = this._internalRoot;
        if (null === t) throw Error(o(409));
        Hs(e, t, null, null);
      }, Gs.prototype.unmount = Ys.prototype.unmount = function () {
        var e = this._internalRoot;

        if (null !== e) {
          this._internalRoot = null;
          var t = e.containerInfo;
          fs(function () {
            Hs(null, e, null, null);
          }), t[ha] = null;
        }
      }, Gs.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
          var t = Et();
          e = {
            blockedOn: null,
            target: e,
            priority: t
          };

          for (var n = 0; n < Mt.length && 0 !== t && t < Mt[n].priority; n++) {
            ;
          }

          Mt.splice(n, 0, e), 0 === n && It(e);
        }
      }, wt = function wt(e) {
        switch (e.tag) {
          case 3:
            var t = e.stateNode;

            if (t.current.memoizedState.isDehydrated) {
              var n = ft(t.pendingLanes);
              0 !== n && (gt(t, 1 | n), as(t, Xe()), 0 === (6 & Tu) && (Bu = Xe() + 500, Va()));
            }

            break;

          case 13:
            fs(function () {
              var t = No(e, 1);

              if (null !== t) {
                var n = ts();
                rs(t, e, 1, n);
              }
            }), qs(e, 1);
        }
      }, St = function St(e) {
        if (13 === e.tag) {
          var t = No(e, 134217728);
          if (null !== t) rs(t, e, 134217728, ts());
          qs(e, 134217728);
        }
      }, xt = function xt(e) {
        if (13 === e.tag) {
          var t = ns(e),
              n = No(e, t);
          if (null !== n) rs(n, e, t, ts());
          qs(e, t);
        }
      }, Et = function Et() {
        return bt;
      }, Ct = function Ct(e, t) {
        var n = bt;

        try {
          return bt = e, t();
        } finally {
          bt = n;
        }
      }, Se = function Se(e, t, n) {
        switch (t) {
          case "input":
            if (Z(e, n), t = n.name, "radio" === n.type && null != t) {
              for (n = e; n.parentNode;) {
                n = n.parentNode;
              }

              for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                var r = n[t];

                if (r !== e && r.form === e.form) {
                  var a = wa(r);
                  if (!a) throw Error(o(90));
                  q(r), Z(r, a);
                }
              }
            }

            break;

          case "textarea":
            oe(e, n);
            break;

          case "select":
            null != (t = n.value) && ne(e, !!n.multiple, t, !1);
        }
      }, Le = cs, Te = fs;
      var tc = {
        usingClientEntryPoint: !1,
        Events: [ba, ka, wa, _e, Pe, cs]
      },
          nc = {
        findFiberByHostInstance: ga,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
      },
          rc = {
        bundleType: nc.bundleType,
        version: nc.version,
        rendererPackageName: nc.rendererPackageName,
        rendererConfig: nc.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: k.ReactCurrentDispatcher,
        findHostInstanceByFiber: function findHostInstanceByFiber(e) {
          return null === (e = $e(e)) ? null : e.stateNode;
        },
        findFiberByHostInstance: nc.findFiberByHostInstance || function () {
          return null;
        },
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
      };

      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ac.isDisabled && ac.supportsFiber) try {
          at = ac.inject(rc), ot = ac;
        } catch (ce) {}
      }

      t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc, t.createPortal = function (e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!Xs(t)) throw Error(o(200));
        return function (e, t, n) {
          var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
          return {
            $$typeof: S,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
          };
        }(e, t, null, n);
      }, t.createRoot = function (e, t) {
        if (!Xs(e)) throw Error(o(299));
        var n = !1,
            r = "",
            a = Ks;
        return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (a = t.onRecoverableError)), t = Us(e, 1, !1, null, 0, n, 0, r, a), e[ha] = t.current, Vr(8 === e.nodeType ? e.parentNode : e), new Ys(t);
      }, t.findDOMNode = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternals;

        if (void 0 === t) {
          if ("function" === typeof e.render) throw Error(o(188));
          throw e = Object.keys(e).join(","), Error(o(268, e));
        }

        return e = null === (e = $e(t)) ? null : e.stateNode;
      }, t.flushSync = function (e) {
        return fs(e);
      }, t.hydrate = function (e, t, n) {
        if (!Zs(t)) throw Error(o(200));
        return ec(null, e, t, !0, n);
      }, t.hydrateRoot = function (e, t, n) {
        if (!Xs(e)) throw Error(o(405));
        var r = null != n && n.hydratedSources || null,
            a = !1,
            l = "",
            i = Ks;
        if (null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (a = !0), void 0 !== n.identifierPrefix && (l = n.identifierPrefix), void 0 !== n.onRecoverableError && (i = n.onRecoverableError)), t = Bs(t, null, e, 1, null != n ? n : null, a, 0, l, i), e[ha] = t.current, Vr(e), r) for (e = 0; e < r.length; e++) {
          a = (a = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
        }
        return new Gs(t);
      }, t.render = function (e, t, n) {
        if (!Zs(t)) throw Error(o(200));
        return ec(null, e, t, !1, n);
      }, t.unmountComponentAtNode = function (e) {
        if (!Zs(e)) throw Error(o(40));
        return !!e._reactRootContainer && (fs(function () {
          ec(null, null, e, !1, function () {
            e._reactRootContainer = null, e[ha] = null;
          });
        }), !0);
      }, t.unstable_batchedUpdates = cs, t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
        if (!Zs(n)) throw Error(o(200));
        if (null == e || void 0 === e._reactInternals) throw Error(o(38));
        return ec(e, t, n, !1, r);
      }, t.version = "18.2.0-next-9e3b772b8-20220608";
    },
    250: function _(e, t, n) {
      var r = n(164);
      t.createRoot = r.createRoot, t.hydrateRoot = r.hydrateRoot;
    },
    164: function _(e, t, n) {
      !function e() {
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
        } catch (t) {
          console.error(t);
        }
      }(), e.exports = n(463);
    },
    374: function _(e, t, n) {
      var r = n(791),
          a = Symbol["for"]("react.element"),
          o = Symbol["for"]("react.fragment"),
          l = Object.prototype.hasOwnProperty,
          i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
          u = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      };

      function s(e, t, n) {
        var r,
            o = {},
            s = null,
            c = null;

        for (r in void 0 !== n && (s = "" + n), void 0 !== t.key && (s = "" + t.key), void 0 !== t.ref && (c = t.ref), t) {
          l.call(t, r) && !u.hasOwnProperty(r) && (o[r] = t[r]);
        }

        if (e && e.defaultProps) for (r in t = e.defaultProps) {
          void 0 === o[r] && (o[r] = t[r]);
        }
        return {
          $$typeof: a,
          type: e,
          key: s,
          ref: c,
          props: o,
          _owner: i.current
        };
      }

      t.Fragment = o, t.jsx = s, t.jsxs = s;
    },
    117: function _(e, t) {
      var n = Symbol["for"]("react.element"),
          r = Symbol["for"]("react.portal"),
          a = Symbol["for"]("react.fragment"),
          o = Symbol["for"]("react.strict_mode"),
          l = Symbol["for"]("react.profiler"),
          i = Symbol["for"]("react.provider"),
          u = Symbol["for"]("react.context"),
          s = Symbol["for"]("react.forward_ref"),
          c = Symbol["for"]("react.suspense"),
          f = Symbol["for"]("react.memo"),
          d = Symbol["for"]("react.lazy"),
          p = Symbol.iterator;
      var h = {
        isMounted: function isMounted() {
          return !1;
        },
        enqueueForceUpdate: function enqueueForceUpdate() {},
        enqueueReplaceState: function enqueueReplaceState() {},
        enqueueSetState: function enqueueSetState() {}
      },
          v = Object.assign,
          m = {};

      function y(e, t, n) {
        this.props = e, this.context = t, this.refs = m, this.updater = n || h;
      }

      function g() {}

      function b(e, t, n) {
        this.props = e, this.context = t, this.refs = m, this.updater = n || h;
      }

      y.prototype.isReactComponent = {}, y.prototype.setState = function (e, t) {
        if ("object" !== _typeof(e) && "function" !== typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
      }, y.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      }, g.prototype = y.prototype;
      var k = b.prototype = new g();
      k.constructor = b, v(k, y.prototype), k.isPureReactComponent = !0;
      var w = Array.isArray,
          S = Object.prototype.hasOwnProperty,
          x = {
        current: null
      },
          E = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      };

      function C(e, t, r) {
        var a,
            o = {},
            l = null,
            i = null;
        if (null != t) for (a in void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (l = "" + t.key), t) {
          S.call(t, a) && !E.hasOwnProperty(a) && (o[a] = t[a]);
        }
        var u = arguments.length - 2;
        if (1 === u) o.children = r;else if (1 < u) {
          for (var s = Array(u), c = 0; c < u; c++) {
            s[c] = arguments[c + 2];
          }

          o.children = s;
        }
        if (e && e.defaultProps) for (a in u = e.defaultProps) {
          void 0 === o[a] && (o[a] = u[a]);
        }
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: i,
          props: o,
          _owner: x.current
        };
      }

      function _(e) {
        return "object" === _typeof(e) && null !== e && e.$$typeof === n;
      }

      var P = /\/+/g;

      function L(e, t) {
        return "object" === _typeof(e) && null !== e && null != e.key ? function (e) {
          var t = {
            "=": "=0",
            ":": "=2"
          };
          return "$" + e.replace(/[=:]/g, function (e) {
            return t[e];
          });
        }("" + e.key) : t.toString(36);
      }

      function T(e, t, a, o, l) {
        var i = _typeof(e);

        "undefined" !== i && "boolean" !== i || (e = null);
        var u = !1;
        if (null === e) u = !0;else switch (i) {
          case "string":
          case "number":
            u = !0;
            break;

          case "object":
            switch (e.$$typeof) {
              case n:
              case r:
                u = !0;
            }

        }
        if (u) return l = l(u = e), e = "" === o ? "." + L(u, 0) : o, w(l) ? (a = "", null != e && (a = e.replace(P, "$&/") + "/"), T(l, t, a, "", function (e) {
          return e;
        })) : null != l && (_(l) && (l = function (e, t) {
          return {
            $$typeof: n,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
          };
        }(l, a + (!l.key || u && u.key === l.key ? "" : ("" + l.key).replace(P, "$&/") + "/") + e)), t.push(l)), 1;
        if (u = 0, o = "" === o ? "." : o + ":", w(e)) for (var s = 0; s < e.length; s++) {
          var c = o + L(i = e[s], s);
          u += T(i, t, a, c, l);
        } else if (c = function (e) {
          return null === e || "object" !== _typeof(e) ? null : "function" === typeof (e = p && e[p] || e["@@iterator"]) ? e : null;
        }(e), "function" === typeof c) for (e = c.call(e), s = 0; !(i = e.next()).done;) {
          u += T(i = i.value, t, a, c = o + L(i, s++), l);
        } else if ("object" === i) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return u;
      }

      function N(e, t, n) {
        if (null == e) return e;
        var r = [],
            a = 0;
        return T(e, r, "", "", function (e) {
          return t.call(n, e, a++);
        }), r;
      }

      function z(e) {
        if (-1 === e._status) {
          var t = e._result;
          (t = t()).then(function (t) {
            0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t);
          }, function (t) {
            0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t);
          }), -1 === e._status && (e._status = 0, e._result = t);
        }

        if (1 === e._status) return e._result["default"];
        throw e._result;
      }

      var O = {
        current: null
      },
          M = {
        transition: null
      },
          R = {
        ReactCurrentDispatcher: O,
        ReactCurrentBatchConfig: M,
        ReactCurrentOwner: x
      };
      t.Children = {
        map: N,
        forEach: function forEach(e, t, n) {
          N(e, function () {
            t.apply(this, arguments);
          }, n);
        },
        count: function count(e) {
          var t = 0;
          return N(e, function () {
            t++;
          }), t;
        },
        toArray: function toArray(e) {
          return N(e, function (e) {
            return e;
          }) || [];
        },
        only: function only(e) {
          if (!_(e)) throw Error("React.Children.only expected to receive a single React element child.");
          return e;
        }
      }, t.Component = y, t.Fragment = a, t.Profiler = l, t.PureComponent = b, t.StrictMode = o, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R, t.cloneElement = function (e, t, r) {
        if (null === e || void 0 === e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var a = v({}, e.props),
            o = e.key,
            l = e.ref,
            i = e._owner;

        if (null != t) {
          if (void 0 !== t.ref && (l = t.ref, i = x.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;

          for (s in t) {
            S.call(t, s) && !E.hasOwnProperty(s) && (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
          }
        }

        var s = arguments.length - 2;
        if (1 === s) a.children = r;else if (1 < s) {
          u = Array(s);

          for (var c = 0; c < s; c++) {
            u[c] = arguments[c + 2];
          }

          a.children = u;
        }
        return {
          $$typeof: n,
          type: e.type,
          key: o,
          ref: l,
          props: a,
          _owner: i
        };
      }, t.createContext = function (e) {
        return (e = {
          $$typeof: u,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null
        }).Provider = {
          $$typeof: i,
          _context: e
        }, e.Consumer = e;
      }, t.createElement = C, t.createFactory = function (e) {
        var t = C.bind(null, e);
        return t.type = e, t;
      }, t.createRef = function () {
        return {
          current: null
        };
      }, t.forwardRef = function (e) {
        return {
          $$typeof: s,
          render: e
        };
      }, t.isValidElement = _, t.lazy = function (e) {
        return {
          $$typeof: d,
          _payload: {
            _status: -1,
            _result: e
          },
          _init: z
        };
      }, t.memo = function (e, t) {
        return {
          $$typeof: f,
          type: e,
          compare: void 0 === t ? null : t
        };
      }, t.startTransition = function (e) {
        var t = M.transition;
        M.transition = {};

        try {
          e();
        } finally {
          M.transition = t;
        }
      }, t.unstable_act = function () {
        throw Error("act(...) is not supported in production builds of React.");
      }, t.useCallback = function (e, t) {
        return O.current.useCallback(e, t);
      }, t.useContext = function (e) {
        return O.current.useContext(e);
      }, t.useDebugValue = function () {}, t.useDeferredValue = function (e) {
        return O.current.useDeferredValue(e);
      }, t.useEffect = function (e, t) {
        return O.current.useEffect(e, t);
      }, t.useId = function () {
        return O.current.useId();
      }, t.useImperativeHandle = function (e, t, n) {
        return O.current.useImperativeHandle(e, t, n);
      }, t.useInsertionEffect = function (e, t) {
        return O.current.useInsertionEffect(e, t);
      }, t.useLayoutEffect = function (e, t) {
        return O.current.useLayoutEffect(e, t);
      }, t.useMemo = function (e, t) {
        return O.current.useMemo(e, t);
      }, t.useReducer = function (e, t, n) {
        return O.current.useReducer(e, t, n);
      }, t.useRef = function (e) {
        return O.current.useRef(e);
      }, t.useState = function (e) {
        return O.current.useState(e);
      }, t.useSyncExternalStore = function (e, t, n) {
        return O.current.useSyncExternalStore(e, t, n);
      }, t.useTransition = function () {
        return O.current.useTransition();
      }, t.version = "18.2.0";
    },
    791: function _(e, t, n) {
      e.exports = n(117);
    },
    184: function _(e, t, n) {
      e.exports = n(374);
    },
    813: function _(e, t) {
      function n(e, t) {
        var n = e.length;
        e.push(t);

        e: for (; 0 < n;) {
          var r = n - 1 >>> 1,
              a = e[r];
          if (!(0 < o(a, t))) break e;
          e[r] = t, e[n] = a, n = r;
        }
      }

      function r(e) {
        return 0 === e.length ? null : e[0];
      }

      function a(e) {
        if (0 === e.length) return null;
        var t = e[0],
            n = e.pop();

        if (n !== t) {
          e[0] = n;

          e: for (var r = 0, a = e.length, l = a >>> 1; r < l;) {
            var i = 2 * (r + 1) - 1,
                u = e[i],
                s = i + 1,
                c = e[s];
            if (0 > o(u, n)) s < a && 0 > o(c, u) ? (e[r] = c, e[s] = n, r = s) : (e[r] = u, e[i] = n, r = i);else {
              if (!(s < a && 0 > o(c, n))) break e;
              e[r] = c, e[s] = n, r = s;
            }
          }
        }

        return t;
      }

      function o(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id;
      }

      if ("object" === (typeof performance === "undefined" ? "undefined" : _typeof(performance)) && "function" === typeof performance.now) {
        var l = performance;

        t.unstable_now = function () {
          return l.now();
        };
      } else {
        var i = Date,
            u = i.now();

        t.unstable_now = function () {
          return i.now() - u;
        };
      }

      var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          v = !1,
          m = !1,
          y = "function" === typeof setTimeout ? setTimeout : null,
          g = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;

      function k(e) {
        for (var t = r(c); null !== t;) {
          if (null === t.callback) a(c);else {
            if (!(t.startTime <= e)) break;
            a(c), t.sortIndex = t.expirationTime, n(s, t);
          }
          t = r(c);
        }
      }

      function w(e) {
        if (m = !1, k(e), !v) if (null !== r(s)) v = !0, M(S);else {
          var t = r(c);
          null !== t && R(w, t.startTime - e);
        }
      }

      function S(e, n) {
        v = !1, m && (m = !1, g(_), _ = -1), h = !0;
        var o = p;

        try {
          for (k(n), d = r(s); null !== d && (!(d.expirationTime > n) || e && !T());) {
            var l = d.callback;

            if ("function" === typeof l) {
              d.callback = null, p = d.priorityLevel;
              var i = l(d.expirationTime <= n);
              n = t.unstable_now(), "function" === typeof i ? d.callback = i : d === r(s) && a(s), k(n);
            } else a(s);

            d = r(s);
          }

          if (null !== d) var u = !0;else {
            var f = r(c);
            null !== f && R(w, f.startTime - n), u = !1;
          }
          return u;
        } finally {
          d = null, p = o, h = !1;
        }
      }

      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);

      var x,
          E = !1,
          C = null,
          _ = -1,
          P = 5,
          L = -1;

      function T() {
        return !(t.unstable_now() - L < P);
      }

      function N() {
        if (null !== C) {
          var e = t.unstable_now();
          L = e;
          var n = !0;

          try {
            n = C(!0, e);
          } finally {
            n ? x() : (E = !1, C = null);
          }
        } else E = !1;
      }

      if ("function" === typeof b) x = function x() {
        b(N);
      };else if ("undefined" !== typeof MessageChannel) {
        var z = new MessageChannel(),
            O = z.port2;
        z.port1.onmessage = N, x = function x() {
          O.postMessage(null);
        };
      } else x = function x() {
        y(N, 0);
      };

      function M(e) {
        C = e, E || (E = !0, x());
      }

      function R(e, n) {
        _ = y(function () {
          e(t.unstable_now());
        }, n);
      }

      t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (e) {
        e.callback = null;
      }, t.unstable_continueExecution = function () {
        v || h || (v = !0, M(S));
      }, t.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < e ? Math.floor(1e3 / e) : 5;
      }, t.unstable_getCurrentPriorityLevel = function () {
        return p;
      }, t.unstable_getFirstCallbackNode = function () {
        return r(s);
      }, t.unstable_next = function (e) {
        switch (p) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;

          default:
            t = p;
        }

        var n = p;
        p = t;

        try {
          return e();
        } finally {
          p = n;
        }
      }, t.unstable_pauseExecution = function () {}, t.unstable_requestPaint = function () {}, t.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;

          default:
            e = 3;
        }

        var n = p;
        p = e;

        try {
          return t();
        } finally {
          p = n;
        }
      }, t.unstable_scheduleCallback = function (e, a, o) {
        var l = t.unstable_now();

        switch ("object" === _typeof(o) && null !== o ? o = "number" === typeof (o = o.delay) && 0 < o ? l + o : l : o = l, e) {
          case 1:
            var i = -1;
            break;

          case 2:
            i = 250;
            break;

          case 5:
            i = 1073741823;
            break;

          case 4:
            i = 1e4;
            break;

          default:
            i = 5e3;
        }

        return e = {
          id: f++,
          callback: a,
          priorityLevel: e,
          startTime: o,
          expirationTime: i = o + i,
          sortIndex: -1
        }, o > l ? (e.sortIndex = o, n(c, e), null === r(s) && e === r(c) && (m ? (g(_), _ = -1) : m = !0, R(w, o - l))) : (e.sortIndex = i, n(s, e), v || h || (v = !0, M(S))), e;
      }, t.unstable_shouldYield = T, t.unstable_wrapCallback = function (e) {
        var t = p;
        return function () {
          var n = p;
          p = t;

          try {
            return e.apply(this, arguments);
          } finally {
            p = n;
          }
        };
      };
    },
    296: function _(e, t, n) {
      e.exports = n(813);
    },
    772: function _(e, t, n) {
      e.exports = n.p + "/My_Projects/WaveSurferUkol/react/build/static/media/audio.99431b66ce3dd3187aa6.wavaudio.99431b66ce3dd3187aa6.wav";
    },
    441: function _(e, t, n) {
      e.exports = n.p + "/My_Projects/WaveSurferUkol/react/build/static/media/audio.99431b66ce3dd3187aa6.wavdemo.6fadb4d7840d4444e3d8.wav";
    }
  },
      t = {};

  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = t[r] = {
      exports: {}
    };
    return e[r](o, o.exports, n), o.exports;
  }

  n.m = e, n.d = function (e, t) {
    for (var r in t) {
      n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      });
    }
  }, n.f = {}, n.e = function (e) {
    return Promise.all(Object.keys(n.f).reduce(function (t, r) {
      return n.f[r](e, t), t;
    }, []));
  }, n.u = function (e) {
    return "static/js/" + e + ".53d2a474.chunk.js";
  }, n.miniCssF = function (e) {}, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, function () {
    var e = {},
        t = "reakt:";

    n.l = function (r, a, o, l) {
      if (e[r]) e[r].push(a);else {
        var i, u;
        if (void 0 !== o) for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
          var f = s[c];

          if (f.getAttribute("src") == r || f.getAttribute("data-webpack") == t + o) {
            i = f;
            break;
          }
        }
        i || (u = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, n.nc && i.setAttribute("nonce", n.nc), i.setAttribute("data-webpack", t + o), i.src = r), e[r] = [a];

        var d = function d(t, n) {
          i.onerror = i.onload = null, clearTimeout(p);
          var a = e[r];
          if (delete e[r], i.parentNode && i.parentNode.removeChild(i), a && a.forEach(function (e) {
            return e(n);
          }), t) return t(n);
        },
            p = setTimeout(d.bind(null, void 0, {
          type: "timeout",
          target: i
        }), 12e4);

        i.onerror = d.bind(null, i.onerror), i.onload = d.bind(null, i.onload), u && document.head.appendChild(i);
      }
    };
  }(), n.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.p = "/", function () {
    var e = {
      179: 0
    };

    n.f.j = function (t, r) {
      var a = n.o(e, t) ? e[t] : void 0;
      if (0 !== a) if (a) r.push(a[2]);else {
        var o = new Promise(function (n, r) {
          a = e[t] = [n, r];
        });
        r.push(a[2] = o);
        var l = n.p + n.u(t),
            i = new Error();
        n.l(l, function (r) {
          if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
            var o = r && ("load" === r.type ? "missing" : r.type),
                l = r && r.target && r.target.src;
            i.message = "Loading chunk " + t + " failed.\n(" + o + ": " + l + ")", i.name = "ChunkLoadError", i.type = o, i.request = l, a[1](i);
          }
        }, "chunk-" + t, t);
      }
    };

    var t = function t(_t2, r) {
      var a,
          o,
          l = r[0],
          i = r[1],
          u = r[2],
          s = 0;

      if (l.some(function (t) {
        return 0 !== e[t];
      })) {
        for (a in i) {
          n.o(i, a) && (n.m[a] = i[a]);
        }

        if (u) u(n);
      }

      for (_t2 && _t2(r); s < l.length; s++) {
        o = l[s], n.o(e, o) && e[o] && e[o][0](), e[o] = 0;
      }
    },
        r = self.webpackChunkreakt = self.webpackChunkreakt || [];

    r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r));
  }(), function () {
    var e = n(791),
        t = n(250),
        r = function r(e) {
      e && e instanceof Function && n.e(787).then(n.bind(n, 787)).then(function (t) {
        var n = t.getCLS,
            r = t.getFID,
            a = t.getFCP,
            o = t.getLCP,
            l = t.getTTFB;
        n(e), r(e), a(e), o(e), l(e);
      });
    };

    function a(e) {
      return a = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      }, a(e);
    }

    function o(e) {
      var t = function (e, t) {
        if ("object" !== a(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];

        if (void 0 !== n) {
          var r = n.call(e, t || "default");
          if ("object" !== a(r)) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }

        return ("string" === t ? String : Number)(e);
      }(e, "string");

      return "symbol" === a(t) ? t : String(t);
    }

    function l(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function i(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? l(Object(n), !0).forEach(function (t) {
          var r, a, l;
          r = e, a = t, l = n[t], (a = o(a)) in r ? Object.defineProperty(r, a, {
            value: l,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : r[a] = l;
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }

      return e;
    }

    function u(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var n = 0, r = new Array(t); n < t; n++) {
        r[n] = e[n];
      }

      return r;
    }

    function s(e, t) {
      if (e) {
        if ("string" === typeof e) return u(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0;
      }
    }

    function c(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];

        if (null != n) {
          var r,
              a,
              o,
              l,
              i = [],
              u = !0,
              s = !1;

          try {
            if (o = (n = n.call(e)).next, 0 === t) {
              if (Object(n) !== n) return;
              u = !1;
            } else for (; !(u = (r = o.call(n)).done) && (i.push(r.value), i.length !== t); u = !0) {
              ;
            }
          } catch (e) {
            s = !0, a = e;
          } finally {
            try {
              if (!u && null != n["return"] && (l = n["return"](), Object(l) !== l)) return;
            } finally {
              if (s) throw a;
            }
          }

          return i;
        }
      }(e, t) || s(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function f(e) {
      return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      }, f(e);
    }

    function d() {
      return d = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, n) {
        var r = function (e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = f(e));) {
            ;
          }

          return e;
        }(e, t);

        if (r) {
          var a = Object.getOwnPropertyDescriptor(r, t);
          return a.get ? a.get.call(arguments.length < 3 ? e : n) : a.value;
        }
      }, d.apply(this, arguments);
    }

    function p(e, t) {
      return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        return e.__proto__ = t, e;
      }, p(e, t);
    }

    function h(e, t) {
      if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(e, "prototype", {
        writable: !1
      }), t && p(e, t);
    }

    function v(e, t) {
      if (t && ("object" === a(t) || "function" === typeof t)) return t;
      if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
      return function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(e);
    }

    function m(e) {
      var t = function () {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (S) {
          return !1;
        }
      }();

      return function () {
        var n,
            r = f(e);

        if (t) {
          var a = f(this).constructor;
          n = Reflect.construct(r, arguments, a);
        } else n = r.apply(this, arguments);

        return v(this, n);
      };
    }

    function y(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function g(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, o(r.key), r);
      }
    }

    function b(e, t, n) {
      return t && g(e.prototype, t), n && g(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
      }), e;
    }

    function k() {
      k = function k() {
        return t;
      };

      var e,
          t = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o = Object.defineProperty || function (e, t, n) {
        e[t] = n.value;
      },
          l = "function" == typeof Symbol ? Symbol : {},
          i = l.iterator || "@@iterator",
          u = l.asyncIterator || "@@asyncIterator",
          s = l.toStringTag || "@@toStringTag";

      function c(e, t, n) {
        return Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }), e[t];
      }

      try {
        c({}, "");
      } catch (e) {
        c = function c(e, t, n) {
          return e[t] = n;
        };
      }

      function f(e, t, n, r) {
        var a = t && t.prototype instanceof g ? t : g,
            l = Object.create(a.prototype),
            i = new O(r || []);
        return o(l, "_invoke", {
          value: L(e, n, i)
        }), l;
      }

      function d(e, t, n) {
        try {
          return {
            type: "normal",
            arg: e.call(t, n)
          };
        } catch (e) {
          return {
            type: "throw",
            arg: e
          };
        }
      }

      t.wrap = f;
      var p = "suspendedStart",
          h = "suspendedYield",
          v = "executing",
          m = "completed",
          y = {};

      function g() {}

      function b() {}

      function w() {}

      var S = {};
      c(S, i, function () {
        return this;
      });
      var x = Object.getPrototypeOf,
          E = x && x(x(M([])));
      E && E !== n && r.call(E, i) && (S = E);
      var C = w.prototype = g.prototype = Object.create(S);

      function _(e) {
        ["next", "throw", "return"].forEach(function (t) {
          c(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }

      function P(e, t) {
        function n(o, l, i, u) {
          var s = d(e[o], e, l);

          if ("throw" !== s.type) {
            var c = s.arg,
                f = c.value;
            return f && "object" == a(f) && r.call(f, "__await") ? t.resolve(f.__await).then(function (e) {
              n("next", e, i, u);
            }, function (e) {
              n("throw", e, i, u);
            }) : t.resolve(f).then(function (e) {
              c.value = e, i(c);
            }, function (e) {
              return n("throw", e, i, u);
            });
          }

          u(s.arg);
        }

        var l;
        o(this, "_invoke", {
          value: function value(e, r) {
            function a() {
              return new t(function (t, a) {
                n(e, r, t, a);
              });
            }

            return l = l ? l.then(a, a) : a();
          }
        });
      }

      function L(t, n, r) {
        var a = p;
        return function (o, l) {
          if (a === v) throw new Error("Generator is already running");

          if (a === m) {
            if ("throw" === o) throw l;
            return {
              value: e,
              done: !0
            };
          }

          for (r.method = o, r.arg = l;;) {
            var i = r.delegate;

            if (i) {
              var u = T(i, r);

              if (u) {
                if (u === y) continue;
                return u;
              }
            }

            if ("next" === r.method) r.sent = r._sent = r.arg;else if ("throw" === r.method) {
              if (a === p) throw a = m, r.arg;
              r.dispatchException(r.arg);
            } else "return" === r.method && r.abrupt("return", r.arg);
            a = v;
            var s = d(t, n, r);

            if ("normal" === s.type) {
              if (a = r.done ? m : h, s.arg === y) continue;
              return {
                value: s.arg,
                done: r.done
              };
            }

            "throw" === s.type && (a = m, r.method = "throw", r.arg = s.arg);
          }
        };
      }

      function T(t, n) {
        var r = n.method,
            a = t.iterator[r];
        if (a === e) return n.delegate = null, "throw" === r && t.iterator["return"] && (n.method = "return", n.arg = e, T(t, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), y;
        var o = d(a, t.iterator, n.arg);
        if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, y;
        var l = o.arg;
        return l ? l.done ? (n[t.resultName] = l.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, y) : l : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, y);
      }

      function N(e) {
        var t = {
          tryLoc: e[0]
        };
        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
      }

      function z(e) {
        var t = e.completion || {};
        t.type = "normal", delete t.arg, e.completion = t;
      }

      function O(e) {
        this.tryEntries = [{
          tryLoc: "root"
        }], e.forEach(N, this), this.reset(!0);
      }

      function M(t) {
        if (t || "" === t) {
          var n = t[i];
          if (n) return n.call(t);
          if ("function" == typeof t.next) return t;

          if (!isNaN(t.length)) {
            var o = -1,
                l = function n() {
              for (; ++o < t.length;) {
                if (r.call(t, o)) return n.value = t[o], n.done = !1, n;
              }

              return n.value = e, n.done = !0, n;
            };

            return l.next = l;
          }
        }

        throw new TypeError(a(t) + " is not iterable");
      }

      return b.prototype = w, o(C, "constructor", {
        value: w,
        configurable: !0
      }), o(w, "constructor", {
        value: b,
        configurable: !0
      }), b.displayName = c(w, s, "GeneratorFunction"), t.isGeneratorFunction = function (e) {
        var t = "function" == typeof e && e.constructor;
        return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name));
      }, t.mark = function (e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, w) : (e.__proto__ = w, c(e, s, "GeneratorFunction")), e.prototype = Object.create(C), e;
      }, t.awrap = function (e) {
        return {
          __await: e
        };
      }, _(P.prototype), c(P.prototype, u, function () {
        return this;
      }), t.AsyncIterator = P, t.async = function (e, n, r, a, o) {
        void 0 === o && (o = Promise);
        var l = new P(f(e, n, r, a), o);
        return t.isGeneratorFunction(n) ? l : l.next().then(function (e) {
          return e.done ? e.value : l.next();
        });
      }, _(C), c(C, s, "Generator"), c(C, i, function () {
        return this;
      }), c(C, "toString", function () {
        return "[object Generator]";
      }), t.keys = function (e) {
        var t = Object(e),
            n = [];

        for (var r in t) {
          n.push(r);
        }

        return n.reverse(), function e() {
          for (; n.length;) {
            var r = n.pop();
            if (r in t) return e.value = r, e.done = !1, e;
          }

          return e.done = !0, e;
        };
      }, t.values = M, O.prototype = {
        constructor: O,
        reset: function reset(t) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(z), !t) for (var n in this) {
            "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
          }
        },
        stop: function stop() {
          this.done = !0;
          var e = this.tryEntries[0].completion;
          if ("throw" === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function dispatchException(t) {
          if (this.done) throw t;
          var n = this;

          function a(r, a) {
            return i.type = "throw", i.arg = t, n.next = r, a && (n.method = "next", n.arg = e), !!a;
          }

          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var l = this.tryEntries[o],
                i = l.completion;
            if ("root" === l.tryLoc) return a("end");

            if (l.tryLoc <= this.prev) {
              var u = r.call(l, "catchLoc"),
                  s = r.call(l, "finallyLoc");

              if (u && s) {
                if (this.prev < l.catchLoc) return a(l.catchLoc, !0);
                if (this.prev < l.finallyLoc) return a(l.finallyLoc);
              } else if (u) {
                if (this.prev < l.catchLoc) return a(l.catchLoc, !0);
              } else {
                if (!s) throw new Error("try statement without catch or finally");
                if (this.prev < l.finallyLoc) return a(l.finallyLoc);
              }
            }
          }
        },
        abrupt: function abrupt(e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var a = this.tryEntries[n];

            if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
              var o = a;
              break;
            }
          }

          o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
          var l = o ? o.completion : {};
          return l.type = e, l.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, y) : this.complete(l);
        },
        complete: function complete(e, t) {
          if ("throw" === e.type) throw e.arg;
          return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y;
        },
        finish: function finish(e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), z(n), y;
          }
        },
        "catch": function _catch(e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];

            if (n.tryLoc === e) {
              var r = n.completion;

              if ("throw" === r.type) {
                var a = r.arg;
                z(n);
              }

              return a;
            }
          }

          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(t, n, r) {
          return this.delegate = {
            iterator: M(t),
            resultName: n,
            nextLoc: r
          }, "next" === this.method && (this.arg = e), y;
        }
      }, t;
    }

    function w(e, t, n, r) {
      return new (n || (n = Promise))(function (a, o) {
        function l(e) {
          try {
            u(r.next(e));
          } catch (e) {
            o(e);
          }
        }

        function i(e) {
          try {
            u(r["throw"](e));
          } catch (e) {
            o(e);
          }
        }

        function u(e) {
          var t;
          e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(l, i);
        }

        u((r = r.apply(e, t || [])).next());
      });
    }

    "function" == typeof SuppressedError && SuppressedError;

    var S = {
      decode: function decode(e, t) {
        return w(this, void 0, void 0, k().mark(function n() {
          var r;
          return k().wrap(function (n) {
            for (;;) {
              switch (n.prev = n.next) {
                case 0:
                  return r = new AudioContext({
                    sampleRate: t
                  }), n.abrupt("return", r.decodeAudioData(e)["finally"](function () {
                    return r.close();
                  }));

                case 2:
                case "end":
                  return n.stop();
              }
            }
          }, n);
        }));
      },
      createBuffer: function createBuffer(e, t) {
        return "number" == typeof e[0] && (e = [e]), function (e) {
          var t = e[0];

          if (t.some(function (e) {
            return e > 1 || e < -1;
          })) {
            for (var n = t.length, r = 0, a = 0; a < n; a++) {
              var o = Math.abs(t[a]);
              o > r && (r = o);
            }

            var l,
                i = function (e, t) {
              var _n2 = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];

              if (!_n2) {
                if (Array.isArray(e) || (_n2 = s(e)) || t && e && "number" === typeof e.length) {
                  _n2 && (e = _n2);

                  var r = 0,
                      a = function a() {};

                  return {
                    s: a,
                    n: function n() {
                      return r >= e.length ? {
                        done: !0
                      } : {
                        done: !1,
                        value: e[r++]
                      };
                    },
                    e: function e(_e2) {
                      throw _e2;
                    },
                    f: a
                  };
                }

                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }

              var o,
                  l = !0,
                  i = !1;
              return {
                s: function s() {
                  _n2 = _n2.call(e);
                },
                n: function n() {
                  var e = _n2.next();

                  return l = e.done, e;
                },
                e: function e(_e3) {
                  i = !0, o = _e3;
                },
                f: function f() {
                  try {
                    l || null == _n2["return"] || _n2["return"]();
                  } finally {
                    if (i) throw o;
                  }
                }
              };
            }(e);

            try {
              for (i.s(); !(l = i.n()).done;) {
                for (var u = l.value, c = 0; c < n; c++) {
                  u[c] /= r;
                }
              }
            } catch (f) {
              i.e(f);
            } finally {
              i.f();
            }
          }
        }(e), {
          duration: t,
          length: e[0].length,
          sampleRate: e[0].length / t,
          numberOfChannels: e.length,
          getChannelData: function getChannelData(t) {
            return null == e ? void 0 : e[t];
          },
          copyFromChannel: AudioBuffer.prototype.copyFromChannel,
          copyToChannel: AudioBuffer.prototype.copyToChannel
        };
      }
    },
        x = {
      fetchBlob: function fetchBlob(e, t, n) {
        var r, a;
        return w(this, void 0, void 0, k().mark(function o() {
          var l,
              i,
              u,
              s,
              c,
              f = this;
          return k().wrap(function (o) {
            for (;;) {
              switch (o.prev = o.next) {
                case 0:
                  return o.next = 2, fetch(e, n);

                case 2:
                  return l = o.sent, i = null === (r = l.clone().body) || void 0 === r ? void 0 : r.getReader(), u = Number(null === (a = l.headers) || void 0 === a ? void 0 : a.get("Content-Length")), s = 0, c = function e(n, r) {
                    return w(f, void 0, void 0, k().mark(function a() {
                      var o;
                      return k().wrap(function (a) {
                        for (;;) {
                          switch (a.prev = a.next) {
                            case 0:
                              if (!n) {
                                a.next = 2;
                                break;
                              }

                              return a.abrupt("return");

                            case 2:
                              return s += (null == r ? void 0 : r.length) || 0, o = Math.round(s / u * 100), a.abrupt("return", (t(o), null == i ? void 0 : i.read().then(function (t) {
                                var n = t.done,
                                    r = t.value;
                                return e(n, r);
                              })));

                            case 5:
                            case "end":
                              return a.stop();
                          }
                        }
                      }, a);
                    }));
                  }, null == i || i.read().then(function (e) {
                    var t = e.done,
                        n = e.value;
                    return c(t, n);
                  }), o.abrupt("return", l.blob());

                case 8:
                case "end":
                  return o.stop();
              }
            }
          }, o);
        }));
      }
    },
        E = function () {
      function e() {
        y(this, e), this.listeners = {};
      }

      return b(e, [{
        key: "on",
        value: function value(e, t) {
          var n = this;
          return this.listeners[e] || (this.listeners[e] = new Set()), this.listeners[e].add(t), function () {
            return n.un(e, t);
          };
        }
      }, {
        key: "once",
        value: function value(e, t) {
          var n = this.on(e, t),
              r = this.on(e, function () {
            n(), r();
          });
          return n;
        }
      }, {
        key: "un",
        value: function value(e, t) {
          this.listeners[e] && (t ? this.listeners[e]["delete"](t) : delete this.listeners[e]);
        }
      }, {
        key: "unAll",
        value: function value() {
          this.listeners = {};
        }
      }, {
        key: "emit",
        value: function value(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
            n[r - 1] = arguments[r];
          }

          this.listeners[e] && this.listeners[e].forEach(function (e) {
            return e.apply(void 0, n);
          });
        }
      }]), e;
    }(),
        C = function (e) {
      h(n, e);
      var t = m(n);

      function n(e) {
        var r;
        return y(this, n), r = t.call(this), e.media ? r.media = e.media : r.media = document.createElement("audio"), e.mediaControls && (r.media.controls = !0), e.autoplay && (r.media.autoplay = !0), null != e.playbackRate && r.onceMediaEvent("canplay", function () {
          null != e.playbackRate && (r.media.playbackRate = e.playbackRate);
        }), r;
      }

      return b(n, [{
        key: "onMediaEvent",
        value: function value(e, t, n) {
          var r = this;
          return this.media.addEventListener(e, t, n), function () {
            return r.media.removeEventListener(e, t);
          };
        }
      }, {
        key: "onceMediaEvent",
        value: function value(e, t) {
          return this.onMediaEvent(e, t, {
            once: !0
          });
        }
      }, {
        key: "getSrc",
        value: function value() {
          return this.media.currentSrc || this.media.src || "";
        }
      }, {
        key: "revokeSrc",
        value: function value() {
          var e = this.getSrc();
          e.startsWith("blob:") && URL.revokeObjectURL(e);
        }
      }, {
        key: "setSrc",
        value: function value(e, t) {
          if (this.getSrc() !== e) {
            this.revokeSrc();
            var n = t instanceof Blob ? URL.createObjectURL(t) : e;
            this.media.src = n, this.media.load();
          }
        }
      }, {
        key: "destroy",
        value: function value() {
          this.media.pause(), this.revokeSrc(), this.media.src = "", this.media.load();
        }
      }, {
        key: "play",
        value: function value() {
          return this.media.play();
        }
      }, {
        key: "pause",
        value: function value() {
          this.media.pause();
        }
      }, {
        key: "isPlaying",
        value: function value() {
          return this.media.currentTime > 0 && !this.media.paused && !this.media.ended;
        }
      }, {
        key: "setTime",
        value: function value(e) {
          this.media.currentTime = e;
        }
      }, {
        key: "getDuration",
        value: function value() {
          return this.media.duration;
        }
      }, {
        key: "getCurrentTime",
        value: function value() {
          return this.media.currentTime;
        }
      }, {
        key: "getVolume",
        value: function value() {
          return this.media.volume;
        }
      }, {
        key: "setVolume",
        value: function value(e) {
          this.media.volume = e;
        }
      }, {
        key: "getMuted",
        value: function value() {
          return this.media.muted;
        }
      }, {
        key: "setMuted",
        value: function value(e) {
          this.media.muted = e;
        }
      }, {
        key: "getPlaybackRate",
        value: function value() {
          return this.media.playbackRate;
        }
      }, {
        key: "setPlaybackRate",
        value: function value(e, t) {
          null != t && (this.media.preservesPitch = t), this.media.playbackRate = e;
        }
      }, {
        key: "getMediaElement",
        value: function value() {
          return this.media;
        }
      }, {
        key: "setSinkId",
        value: function value(e) {
          return this.media.setSinkId(e);
        }
      }]), n;
    }(E),
        _ = function (e) {
      h(n, e);
      var t = m(n);

      function n(e, r) {
        var a;
        y(this, n), (a = t.call(this)).timeouts = [], a.isScrolling = !1, a.audioData = null, a.resizeObserver = null, a.isDragging = !1, a.options = e;
        var o = a.parentFromOptionsContainer(e.container);
        a.parent = o;
        var l = c(a.initHtml(), 2),
            i = l[0],
            u = l[1];
        return o.appendChild(i), a.container = i, a.scrollContainer = u.querySelector(".scroll"), a.wrapper = u.querySelector(".wrapper"), a.canvasWrapper = u.querySelector(".canvases"), a.progressWrapper = u.querySelector(".progress"), a.cursor = u.querySelector(".cursor"), r && u.appendChild(r), a.initEvents(), a;
      }

      return b(n, [{
        key: "parentFromOptionsContainer",
        value: function value(e) {
          var t;
          if ("string" == typeof e ? t = document.querySelector(e) : e instanceof HTMLElement && (t = e), !t) throw new Error("Container not found");
          return t;
        }
      }, {
        key: "initEvents",
        value: function value() {
          var e = this,
              t = function t(_t3) {
            var n = e.wrapper.getBoundingClientRect(),
                r = _t3.clientX - n.left,
                a = _t3.clientX - n.left;
            return [r / n.width, a / n.height];
          };

          this.wrapper.addEventListener("click", function (n) {
            var r = c(t(n), 2),
                a = r[0],
                o = r[1];
            e.emit("click", a, o);
          }), this.wrapper.addEventListener("dblclick", function (n) {
            var r = c(t(n), 2),
                a = r[0],
                o = r[1];
            e.emit("dblclick", a, o);
          }), this.options.dragToSeek && this.initDrag(), this.scrollContainer.addEventListener("scroll", function () {
            var t = e.scrollContainer,
                n = t.scrollLeft,
                r = t.scrollWidth,
                a = n / r,
                o = (n + t.clientWidth) / r;
            e.emit("scroll", a, o);
          });
          var n = this.createDelay(100);
          this.resizeObserver = new ResizeObserver(function () {
            n(function () {
              return e.reRender();
            });
          }), this.resizeObserver.observe(this.scrollContainer);
        }
      }, {
        key: "initDrag",
        value: function value() {
          var e = this;
          !function (e, t, n, r) {
            var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 5,
                o = function o() {};

            if (!e) return o;
            e.addEventListener("pointerdown", function (l) {
              if (2 !== l.button) {
                l.preventDefault(), l.stopPropagation();

                var i = l.clientX,
                    u = l.clientY,
                    s = !1,
                    c = function c(r) {
                  r.preventDefault(), r.stopPropagation();
                  var o = r.clientX,
                      l = r.clientY;

                  if (s || Math.abs(o - i) >= a || Math.abs(l - u) >= a) {
                    var c = e.getBoundingClientRect(),
                        f = c.left,
                        d = c.top;
                    s || (s = !0, null == n || n(i - f, u - d)), t(o - i, l - u, o - f, l - d), i = o, u = l;
                  }
                },
                    f = function f(e) {
                  s && (e.preventDefault(), e.stopPropagation());
                },
                    d = function d() {
                  s && (null == r || r()), o();
                };

                document.addEventListener("pointermove", c), document.addEventListener("pointerup", d), document.addEventListener("pointerleave", d), document.addEventListener("click", f, !0), o = function o() {
                  document.removeEventListener("pointermove", c), document.removeEventListener("pointerup", d), document.removeEventListener("pointerleave", d), setTimeout(function () {
                    document.removeEventListener("click", f, !0);
                  }, 10);
                };
              }
            });
          }(this.wrapper, function (t, n, r) {
            e.emit("drag", Math.max(0, Math.min(1, r / e.wrapper.getBoundingClientRect().width)));
          }, function () {
            return e.isDragging = !0;
          }, function () {
            return e.isDragging = !1;
          });
        }
      }, {
        key: "getHeight",
        value: function value() {
          return null == this.options.height ? 128 : isNaN(Number(this.options.height)) ? "auto" === this.options.height && this.parent.clientHeight || 128 : Number(this.options.height);
        }
      }, {
        key: "initHtml",
        value: function value() {
          var e = document.createElement("div"),
              t = e.attachShadow({
            mode: "open"
          });
          return t.innerHTML = "\n      <style>\n        :host {\n          user-select: none;\n        }\n        :host audio {\n          display: block;\n          width: 100%;\n        }\n        :host .scroll {\n          overflow-x: auto;\n          overflow-y: hidden;\n          width: 100%;\n          position: relative;\n          touch-action: none;\n        }\n        :host .noScrollbar {\n          scrollbar-color: transparent;\n          scrollbar-width: none;\n        }\n        :host .noScrollbar::-webkit-scrollbar {\n          display: none;\n          -webkit-appearance: none;\n        }\n        :host .wrapper {\n          position: relative;\n          overflow: visible;\n          z-index: 2;\n        }\n        :host .canvases {\n          min-height: ".concat(this.getHeight(), 'px;\n        }\n        :host .canvases > div {\n          position: relative;\n        }\n        :host canvas {\n          display: block;\n          position: absolute;\n          top: 0;\n          image-rendering: pixelated;\n        }\n        :host .progress {\n          pointer-events: none;\n          position: absolute;\n          z-index: 2;\n          top: 0;\n          left: 0;\n          width: 0;\n          height: 100%;\n          overflow: hidden;\n        }\n        :host .progress > div {\n          position: relative;\n        }\n        :host .cursor {\n          pointer-events: none;\n          position: absolute;\n          z-index: 5;\n          top: 0;\n          left: 0;\n          height: 100%;\n          border-radius: 2px;\n        }\n      </style>\n\n      <div class="scroll" part="scroll">\n        <div class="wrapper" part="wrapper">\n          <div class="canvases"></div>\n          <div class="progress" part="progress"></div>\n          <div class="cursor" part="cursor"></div>\n        </div>\n      </div>\n    '), [e, t];
        }
      }, {
        key: "setOptions",
        value: function value(e) {
          if (this.options.container !== e.container) {
            var t = this.parentFromOptionsContainer(e.container);
            t.appendChild(this.container), this.parent = t;
          }

          this.options = e, this.reRender();
        }
      }, {
        key: "getWrapper",
        value: function value() {
          return this.wrapper;
        }
      }, {
        key: "getScroll",
        value: function value() {
          return this.scrollContainer.scrollLeft;
        }
      }, {
        key: "destroy",
        value: function value() {
          var e;
          this.container.remove(), null === (e = this.resizeObserver) || void 0 === e || e.disconnect();
        }
      }, {
        key: "createDelay",
        value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
              t = {};
          return this.timeouts.push(t), function (n) {
            t.timeout && clearTimeout(t.timeout), t.timeout = setTimeout(n, e);
          };
        }
      }, {
        key: "convertColorValues",
        value: function value(e) {
          if (!Array.isArray(e)) return e || "";
          if (e.length < 2) return e[0] || "";
          var t = document.createElement("canvas"),
              n = t.getContext("2d").createLinearGradient(0, 0, 0, t.height),
              r = 1 / (e.length - 1);
          return e.forEach(function (e, t) {
            var a = t * r;
            n.addColorStop(a, e);
          }), n;
        }
      }, {
        key: "renderBarWaveform",
        value: function value(e, t, n, r) {
          var a = e[0],
              o = e[1] || e[0],
              l = a.length,
              i = n.canvas,
              u = i.width,
              s = i.height,
              c = s / 2,
              f = window.devicePixelRatio || 1,
              d = t.barWidth ? t.barWidth * f : 1,
              p = t.barGap ? t.barGap * f : t.barWidth ? d / 2 : 0,
              h = t.barRadius || 0,
              v = u / (d + p) / l,
              m = h && "roundRect" in n ? "roundRect" : "rect";
          n.beginPath();

          for (var y = 0, g = 0, b = 0, k = 0; k <= l; k++) {
            var w = Math.round(k * v);

            if (w > y) {
              var S = Math.round(g * c * r),
                  x = S + Math.round(b * c * r) || 1,
                  E = c - S;
              "top" === t.barAlign ? E = 0 : "bottom" === t.barAlign && (E = s - x), n[m](y * (d + p), E, d, x, h), y = w, g = 0, b = 0;
            }

            var C = Math.abs(a[k] || 0),
                _ = Math.abs(o[k] || 0);

            C > g && (g = C), _ > b && (b = _);
          }

          n.fill(), n.closePath();
        }
      }, {
        key: "renderLineWaveform",
        value: function value(e, t, n, r) {
          var a = function a(t) {
            var a = e[t] || e[0],
                o = a.length,
                l = n.canvas.height / 2,
                i = n.canvas.width / o;
            n.moveTo(0, l);

            for (var u = 0, s = 0, c = 0; c <= o; c++) {
              var f = Math.round(c * i);

              if (f > u) {
                var d = l + (Math.round(s * l * r) || 1) * (0 === t ? -1 : 1);
                n.lineTo(u, d), u = f, s = 0;
              }

              var p = Math.abs(a[c] || 0);
              p > s && (s = p);
            }

            n.lineTo(u, l);
          };

          n.beginPath(), a(0), a(1), n.fill(), n.closePath();
        }
      }, {
        key: "renderWaveform",
        value: function value(e, t, n) {
          if (n.fillStyle = this.convertColorValues(t.waveColor), t.renderFunction) t.renderFunction(e, n);else {
            var r = t.barHeight || 1;

            if (t.normalize) {
              var a = Array.from(e[0]).reduce(function (e, t) {
                return Math.max(e, Math.abs(t));
              }, 0);
              r = a ? 1 / a : 1;
            }

            t.barWidth || t.barGap || t.barAlign ? this.renderBarWaveform(e, t, n, r) : this.renderLineWaveform(e, t, n, r);
          }
        }
      }, {
        key: "renderSingleCanvas",
        value: function value(e, t, n, r, a, o, l, i) {
          var u = window.devicePixelRatio || 1,
              s = document.createElement("canvas"),
              c = e[0].length;
          s.width = Math.round(n * (o - a) / c), s.height = r * u, s.style.width = "".concat(Math.floor(s.width / u), "px"), s.style.height = "".concat(r, "px"), s.style.left = "".concat(Math.floor(a * n / u / c), "px"), l.appendChild(s);
          var f = s.getContext("2d");
          this.renderWaveform(e.map(function (e) {
            return e.slice(a, o);
          }), t, f);
          var d = s.cloneNode();
          i.appendChild(d);
          var p = d.getContext("2d");
          s.width > 0 && s.height > 0 && p.drawImage(s, 0, 0), p.globalCompositeOperation = "source-in", p.fillStyle = this.convertColorValues(t.progressColor), p.fillRect(0, 0, s.width, s.height);
        }
      }, {
        key: "renderChannel",
        value: function value(e, t, r) {
          var a = this,
              o = document.createElement("div"),
              l = this.getHeight();
          o.style.height = "".concat(l, "px"), this.canvasWrapper.style.minHeight = "".concat(l, "px"), this.canvasWrapper.appendChild(o);
          var i = o.cloneNode();
          this.progressWrapper.appendChild(i);
          var u = this.scrollContainer,
              s = u.scrollLeft,
              c = u.scrollWidth,
              f = u.clientWidth,
              d = e[0].length,
              p = d / c,
              h = Math.min(n.MAX_CANVAS_WIDTH, f);

          if (t.barWidth || t.barGap) {
            var v = t.barWidth || .5,
                m = v + (t.barGap || v / 2);
            h % m != 0 && (h = Math.floor(h / m) * m);
          }

          var y = Math.floor(Math.abs(s) * p),
              g = Math.floor(y + h * p),
              b = g - y,
              k = function k(n, u) {
            a.renderSingleCanvas(e, t, r, l, Math.max(0, n), Math.min(u, d), o, i);
          },
              w = this.createDelay(),
              S = this.createDelay();

          (function e(t, n) {
            k(t, n), t > 0 && w(function () {
              e(t - b, n - b);
            });
          })(y, g), g < d && function e(t, n) {
            k(t, n), n < d && S(function () {
              e(t + b, n + b);
            });
          }(g, g + b);
        }
      }, {
        key: "render",
        value: function value(e) {
          this.timeouts.forEach(function (e) {
            return e.timeout && clearTimeout(e.timeout);
          }), this.timeouts = [], this.canvasWrapper.innerHTML = "", this.progressWrapper.innerHTML = "", this.wrapper.style.width = "";
          var t = window.devicePixelRatio || 1,
              n = this.scrollContainer.clientWidth,
              r = Math.ceil(e.duration * (this.options.minPxPerSec || 0));
          this.isScrolling = r > n;
          var a = this.options.fillParent && !this.isScrolling,
              o = (a ? n : r) * t;
          if (this.wrapper.style.width = a ? "100%" : "".concat(r, "px"), this.scrollContainer.style.overflowX = this.isScrolling ? "auto" : "hidden", this.scrollContainer.classList.toggle("noScrollbar", !!this.options.hideScrollbar), this.cursor.style.backgroundColor = "".concat(this.options.cursorColor || this.options.progressColor), this.cursor.style.width = "".concat(this.options.cursorWidth, "px"), this.options.splitChannels) for (var l = 0; l < e.numberOfChannels; l++) {
            var i = Object.assign(Object.assign({}, this.options), this.options.splitChannels[l]);
            this.renderChannel([e.getChannelData(l)], i, o);
          } else {
            var u = [e.getChannelData(0)];
            e.numberOfChannels > 1 && u.push(e.getChannelData(1)), this.renderChannel(u, this.options, o);
          }
          this.audioData = e, this.emit("render");
        }
      }, {
        key: "reRender",
        value: function value() {
          if (this.audioData) {
            var e = this.progressWrapper.clientWidth;
            this.render(this.audioData);
            var t = this.progressWrapper.clientWidth;
            this.scrollContainer.scrollLeft += t - e;
          }
        }
      }, {
        key: "zoom",
        value: function value(e) {
          this.options.minPxPerSec = e, this.reRender();
        }
      }, {
        key: "scrollIntoView",
        value: function value(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = this.scrollContainer,
              r = n.clientWidth,
              a = n.scrollLeft,
              o = n.scrollWidth,
              l = o * e,
              i = r / 2;
          if (l > a + (t && this.options.autoCenter && !this.isDragging ? i : r) || l < a) if (this.options.autoCenter && !this.isDragging) {
            var u = i / 20;
            l - (a + i) >= u && l < a + r ? this.scrollContainer.scrollLeft += u : this.scrollContainer.scrollLeft = l - i;
          } else if (this.isDragging) {
            this.scrollContainer.scrollLeft = l < a ? l - 10 : l - r + 10;
          } else this.scrollContainer.scrollLeft = l;
          var s = this.scrollContainer.scrollLeft,
              c = s / o,
              f = (s + r) / o;
          this.emit("scroll", c, f);
        }
      }, {
        key: "renderProgress",
        value: function value(e, t) {
          isNaN(e) || (this.progressWrapper.style.width = 100 * e + "%", this.cursor.style.left = 100 * e + "%", this.cursor.style.marginLeft = 100 === Math.round(100 * e) ? "-".concat(this.options.cursorWidth, "px") : "", this.isScrolling && this.options.autoScroll && this.scrollIntoView(e, t));
        }
      }]), n;
    }(E);

    _.MAX_CANVAS_WIDTH = 4e3;

    var P = function (e) {
      h(n, e);
      var t = m(n);

      function n() {
        var e;
        return y(this, n), (e = t.apply(this, arguments)).unsubscribe = function () {}, e;
      }

      return b(n, [{
        key: "start",
        value: function value() {
          var e = this;
          this.unsubscribe = this.on("tick", function () {
            requestAnimationFrame(function () {
              e.emit("tick");
            });
          }), this.emit("tick");
        }
      }, {
        key: "stop",
        value: function value() {
          this.unsubscribe();
        }
      }, {
        key: "destroy",
        value: function value() {
          this.unsubscribe();
        }
      }]), n;
    }(E),
        L = {
      waveColor: "#999",
      progressColor: "#555",
      cursorWidth: 1,
      minPxPerSec: 0,
      fillParent: !0,
      interact: !0,
      dragToSeek: !1,
      autoScroll: !0,
      autoCenter: !0,
      sampleRate: 8e3
    },
        T = function (e) {
      h(n, e);
      var t = m(n);

      function n(e) {
        var r, a, o;
        y(this, n), (r = t.call(this, {
          media: e.media,
          mediaControls: e.mediaControls,
          autoplay: e.autoplay,
          playbackRate: e.audioRate
        })).plugins = [], r.decodedData = null, r.subscriptions = [], r.options = Object.assign({}, L, e), r.timer = new P();
        var l = e.media ? void 0 : r.getMediaElement();
        r.renderer = new _(r.options, l), r.initPlayerEvents(), r.initRendererEvents(), r.initTimerEvents(), r.initPlugins();
        var i = r.options.url || (null === (a = r.options.media) || void 0 === a ? void 0 : a.currentSrc) || (null === (o = r.options.media) || void 0 === o ? void 0 : o.src);
        return i && r.load(i, r.options.peaks, r.options.duration), r;
      }

      return b(n, [{
        key: "initTimerEvents",
        value: function value() {
          var e = this;
          this.subscriptions.push(this.timer.on("tick", function () {
            var t = e.getCurrentTime();
            e.renderer.renderProgress(t / e.getDuration(), !0), e.emit("timeupdate", t), e.emit("audioprocess", t);
          }));
        }
      }, {
        key: "initPlayerEvents",
        value: function value() {
          var e = this;
          this.subscriptions.push(this.onMediaEvent("timeupdate", function () {
            var t = e.getCurrentTime();
            e.renderer.renderProgress(t / e.getDuration(), e.isPlaying()), e.emit("timeupdate", t);
          }), this.onMediaEvent("play", function () {
            e.emit("play"), e.timer.start();
          }), this.onMediaEvent("pause", function () {
            e.emit("pause"), e.timer.stop();
          }), this.onMediaEvent("emptied", function () {
            e.timer.stop();
          }), this.onMediaEvent("ended", function () {
            e.emit("finish");
          }), this.onMediaEvent("seeking", function () {
            e.emit("seeking", e.getCurrentTime());
          }));
        }
      }, {
        key: "initRendererEvents",
        value: function value() {
          var e,
              t = this;
          this.subscriptions.push(this.renderer.on("click", function (e, n) {
            t.options.interact && (t.seekTo(e), t.emit("interaction", e * t.getDuration()), t.emit("click", e, n));
          }), this.renderer.on("dblclick", function (e, n) {
            t.emit("dblclick", e, n);
          }), this.renderer.on("scroll", function (e, n) {
            var r = t.getDuration();
            t.emit("scroll", e * r, n * r);
          }), this.renderer.on("render", function () {
            t.emit("redraw");
          })), this.subscriptions.push(this.renderer.on("drag", function (n) {
            t.options.interact && (t.renderer.renderProgress(n), clearTimeout(e), e = setTimeout(function () {
              t.seekTo(n);
            }, t.isPlaying() ? 0 : 200), t.emit("interaction", n * t.getDuration()), t.emit("drag", n));
          }));
        }
      }, {
        key: "initPlugins",
        value: function value() {
          var e,
              t = this;
          (null === (e = this.options.plugins) || void 0 === e ? void 0 : e.length) && this.options.plugins.forEach(function (e) {
            t.registerPlugin(e);
          });
        }
      }, {
        key: "setOptions",
        value: function value(e) {
          this.options = Object.assign({}, this.options, e), this.renderer.setOptions(this.options), e.audioRate && this.setPlaybackRate(e.audioRate), null != e.mediaControls && (this.getMediaElement().controls = e.mediaControls);
        }
      }, {
        key: "registerPlugin",
        value: function value(e) {
          var t = this;
          return e.init(this), this.plugins.push(e), this.subscriptions.push(e.once("destroy", function () {
            t.plugins = t.plugins.filter(function (t) {
              return t !== e;
            });
          })), e;
        }
      }, {
        key: "getWrapper",
        value: function value() {
          return this.renderer.getWrapper();
        }
      }, {
        key: "getScroll",
        value: function value() {
          return this.renderer.getScroll();
        }
      }, {
        key: "getActivePlugins",
        value: function value() {
          return this.plugins;
        }
      }, {
        key: "loadAudio",
        value: function value(e, t, n, r) {
          return w(this, void 0, void 0, k().mark(function a() {
            var o,
                l,
                i = this;
            return k().wrap(function (a) {
              for (;;) {
                switch (a.prev = a.next) {
                  case 0:
                    if (this.emit("load", e), this.isPlaying() && this.pause(), this.decodedData = null, t || n) {
                      a.next = 5;
                      break;
                    }

                    return o = function o(e) {
                      return i.emit("loading", e);
                    }, a.next = 4, x.fetchBlob(e, o, this.options.fetchParams);

                  case 4:
                    t = a.sent;

                  case 5:
                    if (this.setSrc(e, t), !n) {
                      a.next = 22;
                      break;
                    }

                    return a.next = 8, Promise.resolve(r || this.getDuration());

                  case 8:
                    if (a.t1 = a.sent, a.t1) {
                      a.next = 13;
                      break;
                    }

                    return a.next = 12, new Promise(function (e) {
                      i.onceMediaEvent("loadedmetadata", function () {
                        return e(i.getDuration());
                      });
                    });

                  case 12:
                    a.t1 = a.sent;

                  case 13:
                    if (a.t0 = a.t1, a.t0) {
                      a.next = 18;
                      break;
                    }

                    return a.next = 17, Promise.resolve(0);

                  case 17:
                    a.t0 = a.sent;

                  case 18:
                    r = a.t0, this.decodedData = S.createBuffer(n, r), a.next = 29;
                    break;

                  case 22:
                    if (!t) {
                      a.next = 29;
                      break;
                    }

                    return a.next = 25, t.arrayBuffer();

                  case 25:
                    return l = a.sent, a.next = 28, S.decode(l, this.options.sampleRate);

                  case 28:
                    this.decodedData = a.sent;

                  case 29:
                    this.emit("decode", this.getDuration()), this.decodedData && this.renderer.render(this.decodedData), this.emit("ready", this.getDuration());

                  case 30:
                  case "end":
                    return a.stop();
                }
              }
            }, a, this);
          }));
        }
      }, {
        key: "load",
        value: function value(e, t, n) {
          return w(this, void 0, void 0, k().mark(function r() {
            return k().wrap(function (r) {
              for (;;) {
                switch (r.prev = r.next) {
                  case 0:
                    return r.next = 2, this.loadAudio(e, void 0, t, n);

                  case 2:
                  case "end":
                    return r.stop();
                }
              }
            }, r, this);
          }));
        }
      }, {
        key: "loadBlob",
        value: function value(e, t, n) {
          return w(this, void 0, void 0, k().mark(function r() {
            return k().wrap(function (r) {
              for (;;) {
                switch (r.prev = r.next) {
                  case 0:
                    return r.next = 2, this.loadAudio("blob", e, t, n);

                  case 2:
                  case "end":
                    return r.stop();
                }
              }
            }, r, this);
          }));
        }
      }, {
        key: "zoom",
        value: function value(e) {
          if (!this.decodedData) throw new Error("No audio loaded");
          this.renderer.zoom(e), this.emit("zoom", e);
        }
      }, {
        key: "getDecodedData",
        value: function value() {
          return this.decodedData;
        }
      }, {
        key: "exportPeaks",
        value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = e.channels,
              n = void 0 === t ? 1 : t,
              r = e.maxLength,
              a = void 0 === r ? 8e3 : r,
              o = e.precision,
              l = void 0 === o ? 1e4 : o;
          if (!this.decodedData) throw new Error("The audio has not been decoded yet");

          for (var i = Math.min(n, this.decodedData.numberOfChannels), u = [], s = 0; s < i; s++) {
            for (var c = this.decodedData.getChannelData(s), f = Math.min(c.length, a), d = c.length / f, p = [], h = 0; h < f; h++) {
              var v = c[Math.round(h * d)];
              p.push(Math.round(v * l) / l);
            }

            u.push(p);
          }

          return u;
        }
      }, {
        key: "getDuration",
        value: function value() {
          var e = d(f(n.prototype), "getDuration", this).call(this) || 0;
          return 0 !== e && e !== 1 / 0 || !this.decodedData || (e = this.decodedData.duration), e;
        }
      }, {
        key: "toggleInteraction",
        value: function value(e) {
          this.options.interact = e;
        }
      }, {
        key: "seekTo",
        value: function value(e) {
          var t = this.getDuration() * e;
          this.setTime(t);
        }
      }, {
        key: "playPause",
        value: function value() {
          return w(this, void 0, void 0, k().mark(function e() {
            return k().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", this.isPlaying() ? this.pause() : this.play());

                  case 1:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
        }
      }, {
        key: "stop",
        value: function value() {
          this.pause(), this.setTime(0);
        }
      }, {
        key: "skip",
        value: function value(e) {
          this.setTime(this.getCurrentTime() + e);
        }
      }, {
        key: "empty",
        value: function value() {
          this.load("", [[0]], .001);
        }
      }, {
        key: "destroy",
        value: function value() {
          this.emit("destroy"), this.plugins.forEach(function (e) {
            return e.destroy();
          }), this.subscriptions.forEach(function (e) {
            return e();
          }), this.timer.destroy(), this.renderer.destroy(), d(f(n.prototype), "destroy", this).call(this);
        }
      }], [{
        key: "create",
        value: function value(e) {
          return new n(e);
        }
      }]), n;
    }(C),
        N = function () {
      function e() {
        y(this, e), this.listeners = {};
      }

      return b(e, [{
        key: "on",
        value: function value(e, t) {
          var n = this;
          return this.listeners[e] || (this.listeners[e] = new Set()), this.listeners[e].add(t), function () {
            return n.un(e, t);
          };
        }
      }, {
        key: "once",
        value: function value(e, t) {
          var n = this.on(e, t),
              r = this.on(e, function () {
            n(), r();
          });
          return n;
        }
      }, {
        key: "un",
        value: function value(e, t) {
          this.listeners[e] && (t ? this.listeners[e]["delete"](t) : delete this.listeners[e]);
        }
      }, {
        key: "unAll",
        value: function value() {
          this.listeners = {};
        }
      }, {
        key: "emit",
        value: function value(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
            n[r - 1] = arguments[r];
          }

          this.listeners[e] && this.listeners[e].forEach(function (e) {
            return e.apply(void 0, n);
          });
        }
      }]), e;
    }(),
        z = function (e) {
      h(n, e);
      var t = m(n);

      function n(e) {
        var r;
        return y(this, n), (r = t.call(this)).subscriptions = [], r.options = e, r;
      }

      return b(n, [{
        key: "onInit",
        value: function value() {}
      }, {
        key: "init",
        value: function value(e) {
          this.wavesurfer = e, this.onInit();
        }
      }, {
        key: "destroy",
        value: function value() {
          this.emit("destroy"), this.subscriptions.forEach(function (e) {
            return e();
          });
        }
      }]), n;
    }(N),
        O = {
      height: 20,
      formatTimeCallback: function formatTimeCallback(e) {
        return e / 60 > 1 ? "".concat(Math.floor(e / 60), ":", "".concat((e = Math.round(e % 60)) < 10 ? "0" : "").concat(e)) : "".concat(Math.round(1e3 * e) / 1e3);
      }
    },
        M = function (e) {
      h(n, e);
      var t = m(n);

      function n(e) {
        var r;
        return y(this, n), (r = t.call(this, e || {})).options = Object.assign({}, O, e), r.timelineWrapper = r.initTimelineWrapper(), r;
      }

      return b(n, [{
        key: "onInit",
        value: function value() {
          var e = this;
          if (!this.wavesurfer) throw Error("WaveSurfer is not initialized");
          var t = this.wavesurfer.getWrapper();
          if (this.options.container instanceof HTMLElement) t = this.options.container;else if ("string" == typeof this.options.container) {
            var n = document.querySelector(this.options.container);
            if (!n) throw Error("No Timeline container found matching ".concat(this.options.container));
            t = n;
          }
          this.options.insertPosition ? (t.firstElementChild || t).insertAdjacentElement(this.options.insertPosition, this.timelineWrapper) : t.appendChild(this.timelineWrapper), this.options.duration ? this.initTimeline(this.options.duration) : this.subscriptions.push(this.wavesurfer.on("redraw", function () {
            var t;
            e.initTimeline((null === (t = e.wavesurfer) || void 0 === t ? void 0 : t.getDuration()) || 0);
          }));
        }
      }, {
        key: "destroy",
        value: function value() {
          this.timelineWrapper.remove(), d(f(n.prototype), "destroy", this).call(this);
        }
      }, {
        key: "initTimelineWrapper",
        value: function value() {
          var e = document.createElement("div");
          return e.setAttribute("part", "timeline"), e;
        }
      }, {
        key: "defaultTimeInterval",
        value: function value(e) {
          return e >= 25 ? 1 : 5 * e >= 25 ? 5 : 15 * e >= 25 ? 15 : 60 * Math.ceil(.5 / e);
        }
      }, {
        key: "defaultPrimaryLabelInterval",
        value: function value(e) {
          return e >= 25 ? 10 : 5 * e >= 25 ? 6 : 4;
        }
      }, {
        key: "defaultSecondaryLabelInterval",
        value: function value(e) {
          return e >= 25 ? 5 : 2;
        }
      }, {
        key: "initTimeline",
        value: function value(e) {
          var t,
              n,
              r,
              a = this.timelineWrapper.scrollWidth / e,
              o = null !== (t = this.options.timeInterval) && void 0 !== t ? t : this.defaultTimeInterval(a),
              l = null !== (n = this.options.primaryLabelInterval) && void 0 !== n ? n : this.defaultPrimaryLabelInterval(a),
              i = this.options.primaryLabelSpacing,
              u = null !== (r = this.options.secondaryLabelInterval) && void 0 !== r ? r : this.defaultSecondaryLabelInterval(a),
              s = this.options.secondaryLabelSpacing,
              c = "beforebegin" === this.options.insertPosition,
              f = document.createElement("div");

          if (f.setAttribute("style", "\n      height: ".concat(this.options.height, "px;\n      overflow: hidden;\n      font-size: ").concat(this.options.height / 2, "px;\n      white-space: nowrap;\n      position: relative;\n    ")), c) {
            f.setAttribute("style", f.getAttribute("style") + "\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        z-index: 2;\n      ");
          }

          "string" == typeof this.options.style ? f.setAttribute("style", f.getAttribute("style") + this.options.style) : "object" == _typeof(this.options.style) && Object.assign(f.style, this.options.style);
          var d = document.createElement("div");
          d.setAttribute("part", "timeline-notch"), d.setAttribute("style", "\n      width: 0;\n      height: 50%;\n      display: flex;\n      flex-direction: column;\n      justify-content: ".concat(c ? "flex-start" : "flex-end", ";\n      ").concat(c ? "top: 0;" : "bottom: 0;", "\n      overflow: visible;\n      border-left: 1px solid currentColor;\n      opacity: 0.25;\n      position: absolute;\n      z-index: 1;\n    "));

          for (var p = 0, h = 0; p < e; p += o, h++) {
            var v = d.cloneNode(),
                m = Math.round(100 * p) / 100 % l == 0 || i && h % i == 0,
                y = Math.round(100 * p) / 100 % u == 0 || s && h % s == 0;
            (m || y) && (v.style.height = "100%", v.style.textIndent = "3px", v.textContent = this.options.formatTimeCallback(p), m && (v.style.opacity = "1")), v.style.left = p * a + "px", f.appendChild(v);
          }

          this.timelineWrapper.innerHTML = "", this.timelineWrapper.appendChild(f), this.emit("ready");
        }
      }], [{
        key: "create",
        value: function value(e) {
          return new n(e);
        }
      }]), n;
    }(z),
        R = n(184),
        D = n(772),
        F = n(441),
        I = function I(t) {
      var n = (0, e.useRef)(),
          r = c((0, e.useState)(!1), 2),
          a = r[0],
          o = r[1],
          l = c((0, e.useState)("Lets start it"), 2),
          u = l[0],
          s = l[1],
          f = c((0, e.useState)(1), 2),
          d = f[0],
          p = f[1],
          h = function (t, n) {
        var r = c((0, e.useState)(null), 2),
            a = r[0],
            o = r[1],
            l = (0, e.useCallback)(function () {
          if (t.current) {
            var e = T.create(i(i({}, n), {}, {
              container: t.current
            }));
            return o(e), function () {
              e.destroy();
            };
          }
        }, [n, t]);
        return (0, e.useEffect)(function () {
          return l();
        }, [l]), a;
      }(n, t),
          v = (0, e.useCallback)(function () {
        h.isPlaying() ? h.pause() : h.play();
      }, [h]);

      return (0, e.useEffect)(function () {
        if (h) {
          o(!1);
          var e = [h.on("play", function () {
            return o(!0);
          }), h.on("pause", function () {
            return o(!1);
          }), h.on("timeupdate", function (e) {
            return function (e) {
              var t = e.toFixed(2);

              if (t > 60) {
                var n = Math.trunc(t / 60),
                    r = Math.trunc(t - 60 * n),
                    a = "".concat(n, " min ").concat(r, " sec ( ").concat(t, ")");
                s(a);
              } else {
                var o = "".concat(t, " sec ( ").concat(t, ")");
                s(o);
              }
            }(e);
          })];
          return function () {
            e.forEach(function (e) {
              return e();
            });
          };
        }
      }, [h]), (0, R.jsxs)(R.Fragment, {
        children: [(0, R.jsx)("div", {
          ref: n,
          style: {
            minHeight: "120px"
          }
        }), (0, R.jsx)("button", {
          onClick: v,
          style: {
            marginTop: "1em"
          },
          children: a ? "Pause" : "Play"
        }), (0, R.jsxs)("p", {
          children: ["Played: ", u]
        }), (0, R.jsxs)("label", {
          children: ["zoom:", (0, R.jsx)("input", {
            type: "range",
            min: "1",
            max: "1000",
            value: d,
            onChange: function onChange(e) {
              var t = parseInt(e.target.value, 10);
              p(t), h.zoom(t);
            }
          })]
        }), (0, R.jsx)("button", {
          onClick: function onClick() {
            var e;
            5 * d < 125 && (e = 125), p(e = 5 * d > 1e3 ? 1e3 : 5 * d), h.zoom(e);
          },
          children: "Zoom in x5"
        }), (0, R.jsx)("button", {
          onClick: function onClick() {
            var e;
            p(e = d / 5 < 5 ? 1 : d / 5), h.zoom(e);
          },
          children: "Zoom out x5"
        })]
      });
    },
        j = function j() {
      var t = [D, F],
          n = c((0, e.useState)(t[0]), 2),
          r = n[0],
          a = n[1],
          o = (0, e.useCallback)(function () {
        t.reverse(), a(t[0]);
      }, [t]);
      return (0, R.jsxs)(R.Fragment, {
        children: [(0, R.jsx)(I, {
          height: 100,
          waveColor: "green",
          progressColor: "blue",
          cursorColor: "red",
          url: r,
          plugins: [M.create()]
        }), (0, R.jsx)("br", {}), (0, R.jsx)("button", {
          onClick: o,
          children: "Change audio"
        })]
      });
    },
        A = function A() {
      return (0, R.jsxs)(R.Fragment, {
        children: [(0, R.jsx)("div", {
          children: (0, R.jsx)("p", {
            children: "Vytvo\u0159 (podle dokumentace) pod zvukovou stopou 3 funk\u010Dn\xED elementy: a) zoom in (5x) b) zoom out (5x) c) aktu\xE1ln\xED \u010Das (tak\u017Ee kdy\u017E p\u0159ed samotn\xFDm spu\u0161t\u011Bn\xEDm p\u0159ehr\xE1va\u010De klikne\u0161 na p\u016Flku, uk\xE1\u017Ee ti to tento \u010Das) Za\u0159i\u010F, aby \u010Das p\xEDsn\u011B po kliknut\xED na zvukovou stopu ukazoval spr\xE1vnou hodnotu i v zoom in."
          })
        }), (0, R.jsx)(j, {})]
      });
    };

    t.createRoot(document.getElementById("root")).render((0, R.jsx)(A, {})), r();
  }();
}();