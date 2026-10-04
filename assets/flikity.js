/*!
 * Flickity PACKAGED v2.3.0
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2021 Metafizzy
 */ (function (e, i) {
  typeof define == "function" && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function (t21) {
        return i(e, t21);
      })
    : typeof module == "object" && module.exports
    ? (module.exports = i(e, require("jquery")))
    : (e.jQueryBridget = i(e, e.jQuery));
})(window, function (e, r) {
  "use strict";
  var o = Array.prototype.slice,
    i = e.console,
    u =
      typeof i == "undefined"
        ? function () {}
        : function (t21) {
            i.error(t21);
          };
  function n(h, s, c) {
    if (((c = c || r || e.jQuery), !c)) return;
    s.prototype.option ||
      (s.prototype.option = function (t21) {
        c.isPlainObject(t21) &&
          (this.options = c.extend(!0, this.options, t21));
      }),
      (c.fn[h] = function (t21) {
        if (typeof t21 == "string") {
          var e2 = o.call(arguments, 1);
          return i2(this, t21, e2);
        }
        return n2(this, t21), this;
      });
    function i2(t21, r2, o2) {
      var a2,
        l = "$()." + h + '("' + r2 + '")';
      return (
        t21.each(function (t22, e2) {
          var i3 = c.data(e2, h);
          if (!i3) {
            u(h + " not initialized. Cannot call methods, i.e. " + l);
            return;
          }
          var n3 = i3[r2];
          if (!n3 || r2.charAt(0) == "_") {
            u(l + " is not a valid method");
            return;
          }
          var s2 = n3.apply(i3, o2);
          a2 = a2 === void 0 ? s2 : a2;
        }),
        a2 !== void 0 ? a2 : t21
      );
    }
    function n2(t21, n3) {
      t21.each(function (t22, e2) {
        var i3 = c.data(e2, h);
        i3
          ? (i3.option(n3), i3._init())
          : ((i3 = new s(e2, n3)), c.data(e2, h, i3));
      });
    }
    a(c);
  }
  function a(t21) {
    !t21 || (t21 && t21.bridget) || (t21.bridget = n);
  }
  return a(r || e.jQuery), n;
}),
  (function (t21, e) {
    typeof define == "function" && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : typeof module == "object" && module.exports
      ? (module.exports = e())
      : (t21.EvEmitter = e());
  })(typeof window != "undefined" ? window : this, function () {
    function t21() {}
    var e = t21.prototype;
    return (
      (e.on = function (t22, e2) {
        if (!(!t22 || !e2)) {
          var i = (this._events = this._events || {}),
            n = (i[t22] = i[t22] || []);
          return n.indexOf(e2) == -1 && n.push(e2), this;
        }
      }),
      (e.once = function (t22, e2) {
        if (!(!t22 || !e2)) {
          this.on(t22, e2);
          var i = (this._onceEvents = this._onceEvents || {}),
            n = (i[t22] = i[t22] || {});
          return (n[e2] = !0), this;
        }
      }),
      (e.off = function (t22, e2) {
        var i = this._events && this._events[t22];
        if (!(!i || !i.length)) {
          var n = i.indexOf(e2);
          return n != -1 && i.splice(n, 1), this;
        }
      }),
      (e.emitEvent = function (t22, e2) {
        var i = this._events && this._events[t22];
        if (!(!i || !i.length)) {
          (i = i.slice(0)), (e2 = e2 || []);
          for (
            var n = this._onceEvents && this._onceEvents[t22], s = 0;
            s < i.length;
            s++
          ) {
            var r = i[s],
              o = n && n[r];
            o && (this.off(t22, r), delete n[r]), r.apply(this, e2);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t21
    );
  });
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */ (function (t21, e) {
  typeof define == "function" && define.amd
    ? define("get-size/get-size", e)
    : typeof module == "object" && module.exports
    ? (module.exports = e())
    : (t21.getSize = e());
})(window, function () {
  "use strict";
  function m(t21) {
    var e2 = parseFloat(t21),
      i2 = t21.indexOf("%") == -1 && !isNaN(e2);
    return i2 && e2;
  }
  function e() {}
  var i =
      typeof console == "undefined"
        ? e
        : function (t21) {
            console.error(t21);
          },
    y = [
      "paddingLeft",
      "paddingRight",
      "paddingTop",
      "paddingBottom",
      "marginLeft",
      "marginRight",
      "marginTop",
      "marginBottom",
      "borderLeftWidth",
      "borderRightWidth",
      "borderTopWidth",
      "borderBottomWidth",
    ],
    b = y.length;
  function E() {
    for (
      var t21 = {
          width: 0,
          height: 0,
          innerWidth: 0,
          innerHeight: 0,
          outerWidth: 0,
          outerHeight: 0,
        },
        e2 = 0;
      e2 < b;
      e2++
    ) {
      var i2 = y[e2];
      t21[i2] = 0;
    }
    return t21;
  }
  function S(t21) {
    var e2 = getComputedStyle(t21);
    return (
      e2 ||
        i(
          "Style returned " +
            e2 +
            ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
        ),
      e2
    );
  }
  var n = !1,
    C;
  function x() {
    if (!n) {
      n = !0;
      var t21 = document.createElement("div");
      (t21.style.width = "200px"),
        (t21.style.padding = "1px 2px 3px 4px"),
        (t21.style.borderStyle = "solid"),
        (t21.style.borderWidth = "1px 2px 3px 4px"),
        (t21.style.boxSizing = "border-box");
      var e2 = document.body || document.documentElement;
      e2.appendChild(t21);
      var i2 = S(t21);
      (C = Math.round(m(i2.width)) == 200),
        (s.isBoxSizeOuter = C),
        e2.removeChild(t21);
    }
  }
  function s(t21) {
    if (
      (x(),
      typeof t21 == "string" && (t21 = document.querySelector(t21)),
      !(!t21 || typeof t21 != "object" || !t21.nodeType))
    ) {
      var e2 = S(t21);
      if (e2.display == "none") return E();
      var i2 = {};
      (i2.width = t21.offsetWidth), (i2.height = t21.offsetHeight);
      for (
        var n2 = (i2.isBorderBox = e2.boxSizing == "border-box"), s2 = 0;
        s2 < b;
        s2++
      ) {
        var r = y[s2],
          o = e2[r],
          a = parseFloat(o);
        i2[r] = isNaN(a) ? 0 : a;
      }
      var l = i2.paddingLeft + i2.paddingRight,
        h = i2.paddingTop + i2.paddingBottom,
        c = i2.marginLeft + i2.marginRight,
        u = i2.marginTop + i2.marginBottom,
        d = i2.borderLeftWidth + i2.borderRightWidth,
        f = i2.borderTopWidth + i2.borderBottomWidth,
        p = n2 && C,
        v = m(e2.width);
      v !== !1 && (i2.width = v + (p ? 0 : l + d));
      var g = m(e2.height);
      return (
        g !== !1 && (i2.height = g + (p ? 0 : h + f)),
        (i2.innerWidth = i2.width - (l + d)),
        (i2.innerHeight = i2.height - (h + f)),
        (i2.outerWidth = i2.width + c),
        (i2.outerHeight = i2.height + u),
        i2
      );
    }
  }
  return s;
}),
  (function (t21, e) {
    "use strict";
    typeof define == "function" && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : typeof module == "object" && module.exports
      ? (module.exports = e())
      : (t21.matchesSelector = e());
  })(window, function () {
    "use strict";
    var n = (function () {
      var t21 = window.Element.prototype;
      if (t21.matches) return "matches";
      if (t21.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var n2 = e[i],
          s = n2 + "MatchesSelector";
        if (t21[s]) return s;
      }
    })();
    return function (e, i) {
      return e[n](i);
    };
  }),
  (function (e, i) {
    typeof define == "function" && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (t21) {
            return i(e, t21);
          }
        )
      : typeof module == "object" && module.exports
      ? (module.exports = i(e, require("desandro-matches-selector")))
      : (e.fizzyUIUtils = i(e, e.matchesSelector));
  })(window, function (h, r) {
    var c = {};
    (c.extend = function (t21, e) {
      for (var i2 in e) t21[i2] = e[i2];
      return t21;
    }),
      (c.modulo = function (t21, e) {
        return ((t21 % e) + e) % e;
      });
    var i = Array.prototype.slice;
    (c.makeArray = function (t21) {
      if (Array.isArray(t21)) return t21;
      if (t21 == null) return [];
      var e = typeof t21 == "object" && typeof t21.length == "number";
      return e ? i.call(t21) : [t21];
    }),
      (c.removeFrom = function (t21, e) {
        var i2 = t21.indexOf(e);
        i2 != -1 && t21.splice(i2, 1);
      }),
      (c.getParent = function (t21, e) {
        for (; t21.parentNode && t21 != document.body; )
          if (((t21 = t21.parentNode), r(t21, e))) return t21;
      }),
      (c.getQueryElement = function (t21) {
        return typeof t21 == "string" ? document.querySelector(t21) : t21;
      }),
      (c.handleEvent = function (t21) {
        var e = "on" + t21.type;
        this[e] && this[e](t21);
      }),
      (c.filterFindElements = function (t21, n) {
        t21 = c.makeArray(t21);
        var s = [];
        return (
          t21.forEach(function (t22) {
            if (t22 instanceof HTMLElement) {
              if (!n) {
                s.push(t22);
                return;
              }
              r(t22, n) && s.push(t22);
              for (var e = t22.querySelectorAll(n), i2 = 0; i2 < e.length; i2++)
                s.push(e[i2]);
            }
          }),
          s
        );
      }),
      (c.debounceMethod = function (t21, e, n) {
        n = n || 100;
        var s = t21.prototype[e],
          r2 = e + "Timeout";
        t21.prototype[e] = function () {
          var t22 = this[r2];
          clearTimeout(t22);
          var e2 = arguments,
            i2 = this;
          this[r2] = setTimeout(function () {
            s.apply(i2, e2), delete i2[r2];
          }, n);
        };
      }),
      (c.docReady = function (t21) {
        var e = document.readyState;
        e == "complete" || e == "interactive"
          ? setTimeout(t21)
          : document.addEventListener("DOMContentLoaded", t21);
      }),
      (c.toDashed = function (t21) {
        return t21
          .replace(/(.)([A-Z])/g, function (t22, e, i2) {
            return e + "-" + i2;
          })
          .toLowerCase();
      });
    var u = h.console;
    return (
      (c.htmlInit = function (a, l) {
        c.docReady(function () {
          var t21 = c.toDashed(l),
            s = "data-" + t21,
            e = document.querySelectorAll("[" + s + "]"),
            i2 = document.querySelectorAll(".js-" + t21),
            n = c.makeArray(e).concat(c.makeArray(i2)),
            r2 = s + "-options",
            o = h.jQuery;
          n.forEach(function (e2) {
            var t22 = e2.getAttribute(s) || e2.getAttribute(r2),
              i3;
            try {
              i3 = t22 && JSON.parse(t22);
            } catch (t23) {
              u &&
                u.error(
                  "Error parsing " + s + " on " + e2.className + ": " + t23
                );
              return;
            }
            var n2 = new a(e2, i3);
            o && o.data(e2, l, n2);
          });
        });
      }),
      c
    );
  }),
  (function (e, i) {
    typeof define == "function" && define.amd
      ? define("flickity/js/cell", ["get-size/get-size"], function (t21) {
          return i(e, t21);
        })
      : typeof module == "object" && module.exports
      ? (module.exports = i(e, require("get-size")))
      : ((e.Flickity = e.Flickity || {}), (e.Flickity.Cell = i(e, e.getSize)));
  })(window, function (e, i) {
    function n(t21, e2) {
      (this.element = t21), (this.parent = e2), this.create();
    }
    var s = n.prototype;
    return (
      (s.create = function () {
        (this.element.style.position = "absolute"),
          this.element.setAttribute("aria-hidden", "true"),
          (this.x = 0),
          (this.shift = 0),
          (this.element.style[this.parent.originSide] = 0);
      }),
      (s.destroy = function () {
        this.unselect(), (this.element.style.position = "");
        var t21 = this.parent.originSide;
        (this.element.style[t21] = ""),
          (this.element.style.transform = ""),
          this.element.removeAttribute("aria-hidden");
      }),
      (s.getSize = function () {
        this.size = i(this.element);
      }),
      (s.setPosition = function (t21) {
        (this.x = t21), this.updateTarget(), this.renderPosition(t21);
      }),
      (s.updateTarget = s.setDefaultTarget =
        function () {
          var t21 =
            this.parent.originSide == "left" ? "marginLeft" : "marginRight";
          this.target =
            this.x + this.size[t21] + this.size.width * this.parent.cellAlign;
        }),
      (s.renderPosition = function (t21) {
        var e2 = this.parent.originSide === "left" ? 1 : -1,
          i2 = this.parent.options.percentPosition
            ? t21 * e2 * (this.parent.size.innerWidth / this.size.width)
            : t21 * e2;
        this.element.style.transform =
          "translateX(" + this.parent.getPositionValue(i2) + ")";
      }),
      (s.select = function () {
        this.element.classList.add("is-selected"),
          this.element.removeAttribute("aria-hidden");
      }),
      (s.unselect = function () {
        this.element.classList.remove("is-selected"),
          this.element.setAttribute("aria-hidden", "true");
      }),
      (s.wrapShift = function (t21) {
        (this.shift = t21),
          this.renderPosition(this.x + this.parent.slideableWidth * t21);
      }),
      (s.remove = function () {
        this.element.parentNode.removeChild(this.element);
      }),
      n
    );
  }),
  (function (t21, e) {
    typeof define == "function" && define.amd
      ? define("flickity/js/slide", e)
      : typeof module == "object" && module.exports
      ? (module.exports = e())
      : ((t21.Flickity = t21.Flickity || {}), (t21.Flickity.Slide = e()));
  })(window, function () {
    "use strict";
    function e(t21) {
      (this.parent = t21),
        (this.isOriginLeft = t21.originSide == "left"),
        (this.cells = []),
        (this.outerWidth = 0),
        (this.height = 0);
    }
    var i = e.prototype;
    return (
      (i.addCell = function (t21) {
        if (
          (this.cells.push(t21),
          (this.outerWidth += t21.size.outerWidth),
          (this.height = Math.max(t21.size.outerHeight, this.height)),
          this.cells.length == 1)
        ) {
          this.x = t21.x;
          var e2 = this.isOriginLeft ? "marginLeft" : "marginRight";
          this.firstMargin = t21.size[e2];
        }
      }),
      (i.updateTarget = function () {
        var t21 = this.isOriginLeft ? "marginRight" : "marginLeft",
          e2 = this.getLastCell(),
          i2 = e2 ? e2.size[t21] : 0,
          n = this.outerWidth - (this.firstMargin + i2);
        this.target = this.x + this.firstMargin + n * this.parent.cellAlign;
      }),
      (i.getLastCell = function () {
        return this.cells[this.cells.length - 1];
      }),
      (i.select = function () {
        this.cells.forEach(function (t21) {
          t21.select();
        });
      }),
      (i.unselect = function () {
        this.cells.forEach(function (t21) {
          t21.unselect();
        });
      }),
      (i.getCellElements = function () {
        return this.cells.map(function (t21) {
          return t21.element;
        });
      }),
      e
    );
  }),
  (function (e, i) {
    typeof define == "function" && define.amd
      ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function (t21) {
          return i(e, t21);
        })
      : typeof module == "object" && module.exports
      ? (module.exports = i(e, require("fizzy-ui-utils")))
      : ((e.Flickity = e.Flickity || {}),
        (e.Flickity.animatePrototype = i(e, e.fizzyUIUtils)));
  })(window, function (e, i) {
    var n = {};
    return (
      (n.startAnimation = function () {
        this.isAnimating ||
          ((this.isAnimating = !0), (this.restingFrames = 0), this.animate());
      }),
      (n.animate = function () {
        this.applyDragForce(), this.applySelectedAttraction();
        var t21 = this.x;
        if (
          (this.integratePhysics(),
          this.positionSlider(),
          this.settle(t21),
          this.isAnimating)
        ) {
          var e2 = this;
          requestAnimationFrame(function () {
            e2.animate();
          });
        }
      }),
      (n.positionSlider = function () {
        var t21 = this.x;
        this.options.wrapAround &&
          this.cells.length > 1 &&
          ((t21 = i.modulo(t21, this.slideableWidth)),
          (t21 -= this.slideableWidth),
          this.shiftWrapCells(t21)),
          this.setTranslateX(t21, this.isAnimating),
          this.dispatchScrollEvent();
      }),
      (n.setTranslateX = function (t21, e2) {
        (t21 += this.cursorPosition),
          (t21 = this.options.rightToLeft ? -t21 : t21);
        var i2 = this.getPositionValue(t21);
        this.slider.style.transform = e2
          ? "translate3d(" + i2 + ",0,0)"
          : "translateX(" + i2 + ")";
      }),
      (n.dispatchScrollEvent = function () {
        var t21 = this.slides[0];
        if (t21) {
          var e2 = -this.x - t21.target,
            i2 = e2 / this.slidesWidth;
          this.dispatchEvent("scroll", null, [i2, e2]);
        }
      }),
      (n.positionSliderAtSelected = function () {
        this.cells.length &&
          ((this.x = -this.selectedSlide.target),
          (this.velocity = 0),
          this.positionSlider());
      }),
      (n.getPositionValue = function (t21) {
        return this.options.percentPosition
          ? Math.round((t21 / this.size.innerWidth) * 1e4) * 0.01 + "%"
          : Math.round(t21) + "px";
      }),
      (n.settle = function (t21) {
        var e2 =
          !this.isPointerDown &&
          Math.round(this.x * 100) == Math.round(t21 * 100);
        e2 && this.restingFrames++,
          this.restingFrames > 2 &&
            ((this.isAnimating = !1),
            delete this.isFreeScrolling,
            this.positionSlider(),
            this.dispatchEvent("settle", null, [this.selectedIndex]));
      }),
      (n.shiftWrapCells = function (t21) {
        var e2 = this.cursorPosition + t21;
        this._shiftCells(this.beforeShiftCells, e2, -1);
        var i2 =
          this.size.innerWidth -
          (t21 + this.slideableWidth + this.cursorPosition);
        this._shiftCells(this.afterShiftCells, i2, 1);
      }),
      (n._shiftCells = function (t21, e2, i2) {
        for (var n2 = 0; n2 < t21.length; n2++) {
          var s = t21[n2],
            r = e2 > 0 ? i2 : 0;
          s.wrapShift(r), (e2 -= s.size.outerWidth);
        }
      }),
      (n._unshiftCells = function (t21) {
        if (!(!t21 || !t21.length))
          for (var e2 = 0; e2 < t21.length; e2++) t21[e2].wrapShift(0);
      }),
      (n.integratePhysics = function () {
        (this.x += this.velocity), (this.velocity *= this.getFrictionFactor());
      }),
      (n.applyForce = function (t21) {
        this.velocity += t21;
      }),
      (n.getFrictionFactor = function () {
        return (
          1 -
          this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
        );
      }),
      (n.getRestingPosition = function () {
        return this.x + this.velocity / (1 - this.getFrictionFactor());
      }),
      (n.applyDragForce = function () {
        if (!(!this.isDraggable || !this.isPointerDown)) {
          var t21 = this.dragX - this.x,
            e2 = t21 - this.velocity;
          this.applyForce(e2);
        }
      }),
      (n.applySelectedAttraction = function () {
        var t21 = this.isDraggable && this.isPointerDown;
        if (!(t21 || this.isFreeScrolling || !this.slides.length)) {
          var e2 = this.selectedSlide.target * -1 - this.x,
            i2 = e2 * this.options.selectedAttraction;
          this.applyForce(i2);
        }
      }),
      n
    );
  }),
  (function (o, a) {
    if (typeof define == "function" && define.amd)
      define("flickity/js/flickity", [
        "ev-emitter/ev-emitter",
        "get-size/get-size",
        "fizzy-ui-utils/utils",
        "./cell",
        "./slide",
        "./animate",
      ], function (t22, e, i, n, s, r) {
        return a(o, t22, e, i, n, s, r);
      });
    else if (typeof module == "object" && module.exports)
      module.exports = a(
        o,
        require("ev-emitter"),
        require("get-size"),
        require("fizzy-ui-utils"),
        require("./cell"),
        require("./slide"),
        require("./animate")
      );
    else {
      var t21 = o.Flickity;
      o.Flickity = a(
        o,
        o.EvEmitter,
        o.getSize,
        o.fizzyUIUtils,
        t21.Cell,
        t21.Slide,
        t21.animatePrototype
      );
    }
  })(window, function (n, e, i, a, s, o, r) {
    var l = n.jQuery,
      h = n.getComputedStyle,
      c = n.console;
    function u(t21, e2) {
      for (t21 = a.makeArray(t21); t21.length; ) e2.appendChild(t21.shift());
    }
    var d = 0,
      f = {};
    function p(t21, e2) {
      var i2 = a.getQueryElement(t21);
      if (!i2) {
        c && c.error("Bad element for Flickity: " + (i2 || t21));
        return;
      }
      if (((this.element = i2), this.element.flickityGUID)) {
        var n2 = f[this.element.flickityGUID];
        return n2 && n2.option(e2), n2;
      }
      l && (this.$element = l(this.element)),
        (this.options = a.extend({}, this.constructor.defaults)),
        this.option(e2),
        this._create();
    }
    (p.defaults = {
      accessibility: !0,
      cellAlign: "center",
      freeScrollFriction: 0.075,
      friction: 0.28,
      namespaceJQueryEvents: !0,
      percentPosition: !0,
      resize: !0,
      selectedAttraction: 0.025,
      setGallerySize: !0,
    }),
      (p.createMethods = []);
    var v = p.prototype;
    a.extend(v, e.prototype),
      (v._create = function () {
        var t21 = (this.guid = ++d);
        (this.element.flickityGUID = t21),
          (f[t21] = this),
          (this.selectedIndex = 0),
          (this.restingFrames = 0),
          (this.x = 0),
          (this.velocity = 0),
          (this.originSide = this.options.rightToLeft ? "right" : "left"),
          (this.viewport = document.createElement("div")),
          (this.viewport.className = "flickity-viewport"),
          this._createSlider(),
          (this.options.resize || this.options.watchCSS) &&
            n.addEventListener("resize", this);
        for (var e2 in this.options.on) {
          var i2 = this.options.on[e2];
          this.on(e2, i2);
        }
        p.createMethods.forEach(function (t22) {
          this[t22]();
        }, this),
          this.options.watchCSS ? this.watchCSS() : this.activate();
      }),
      (v.option = function (t21) {
        a.extend(this.options, t21);
      }),
      (v.activate = function () {
        if (!this.isActive) {
          (this.isActive = !0),
            this.element.classList.add("flickity-enabled"),
            this.options.rightToLeft &&
              this.element.classList.add("flickity-rtl"),
            this.getSize();
          var t21 = this._filterFindCellElements(this.element.children);
          u(t21, this.slider),
            this.viewport.appendChild(this.slider),
            this.element.appendChild(this.viewport),
            this.reloadCells(),
            this.options.accessibility &&
              ((this.element.tabIndex = 0),
              this.element.addEventListener("keydown", this)),
            this.emitEvent("activate"),
            this.selectInitialIndex(),
            (this.isInitActivated = !0),
            this.dispatchEvent("ready");
        }
      }),
      (v._createSlider = function () {
        var t21 = document.createElement("div");
        (t21.className = "flickity-slider"),
          (t21.style[this.originSide] = 0),
          (this.slider = t21);
      }),
      (v._filterFindCellElements = function (t21) {
        return a.filterFindElements(t21, this.options.cellSelector);
      }),
      (v.reloadCells = function () {
        (this.cells = this._makeCells(this.slider.children)),
          this.positionCells(),
          this._getWrapShiftCells(),
          this.setGallerySize();
      }),
      (v._makeCells = function (t21) {
        var e2 = this._filterFindCellElements(t21),
          i2 = e2.map(function (t22) {
            return new s(t22, this);
          }, this);
        return i2;
      }),
      (v.getLastCell = function () {
        return this.cells[this.cells.length - 1];
      }),
      (v.getLastSlide = function () {
        return this.slides[this.slides.length - 1];
      }),
      (v.positionCells = function () {
        this._sizeCells(this.cells), this._positionCells(0);
      }),
      (v._positionCells = function (t21) {
        (t21 = t21 || 0),
          (this.maxCellHeight = (t21 && this.maxCellHeight) || 0);
        var e2 = 0;
        if (t21 > 0) {
          var i2 = this.cells[t21 - 1];
          e2 = i2.x + i2.size.outerWidth;
        }
        for (var n2 = this.cells.length, s2 = t21; s2 < n2; s2++) {
          var r2 = this.cells[s2];
          r2.setPosition(e2),
            (e2 += r2.size.outerWidth),
            (this.maxCellHeight = Math.max(
              r2.size.outerHeight,
              this.maxCellHeight
            ));
        }
        (this.slideableWidth = e2),
          this.updateSlides(),
          this._containSlides(),
          (this.slidesWidth = n2
            ? this.getLastSlide().target - this.slides[0].target
            : 0);
      }),
      (v._sizeCells = function (t21) {
        t21.forEach(function (t22) {
          t22.getSize();
        });
      }),
      (v.updateSlides = function () {
        if (((this.slides = []), !!this.cells.length)) {
          var n2 = new o(this);
          this.slides.push(n2);
          var t21 = this.originSide == "left",
            s2 = t21 ? "marginRight" : "marginLeft",
            r2 = this._getCanCellFit();
          this.cells.forEach(function (t22, e2) {
            if (!n2.cells.length) {
              n2.addCell(t22);
              return;
            }
            var i2 =
              n2.outerWidth -
              n2.firstMargin +
              (t22.size.outerWidth - t22.size[s2]);
            r2.call(this, e2, i2) ||
              (n2.updateTarget(), (n2 = new o(this)), this.slides.push(n2)),
              n2.addCell(t22);
          }, this),
            n2.updateTarget(),
            this.updateSelectedSlide();
        }
      }),
      (v._getCanCellFit = function () {
        var t21 = this.options.groupCells;
        if (t21) {
          if (typeof t21 == "number") {
            var e2 = parseInt(t21, 10);
            return function (t22) {
              return t22 % e2 !== 0;
            };
          }
        } else
          return function () {
            return !1;
          };
        var i2 = typeof t21 == "string" && t21.match(/^(\d+)%$/),
          n2 = i2 ? parseInt(i2[1], 10) / 100 : 1;
        return function (t22, e3) {
          return e3 <= (this.size.innerWidth + 1) * n2;
        };
      }),
      (v._init = v.reposition =
        function () {
          this.positionCells(), this.positionSliderAtSelected();
        }),
      (v.getSize = function () {
        (this.size = i(this.element)),
          this.setCellAlign(),
          (this.cursorPosition = this.size.innerWidth * this.cellAlign);
      });
    var g = {
      center: { left: 0.5, right: 0.5 },
      left: { left: 0, right: 1 },
      right: { right: 0, left: 1 },
    };
    return (
      (v.setCellAlign = function () {
        var t21 = g[this.options.cellAlign];
        this.cellAlign = t21 ? t21[this.originSide] : this.options.cellAlign;
      }),
      (v.setGallerySize = function () {
        if (this.options.setGallerySize) {
          var t21 =
            this.options.adaptiveHeight && this.selectedSlide
              ? this.selectedSlide.height
              : this.maxCellHeight;
          this.viewport.style.height = t21 + "px";
        }
      }),
      (v._getWrapShiftCells = function () {
        if (this.options.wrapAround) {
          this._unshiftCells(this.beforeShiftCells),
            this._unshiftCells(this.afterShiftCells);
          var t21 = this.cursorPosition,
            e2 = this.cells.length - 1;
          (this.beforeShiftCells = this._getGapCells(t21, e2, -1)),
            (t21 = this.size.innerWidth - this.cursorPosition),
            (this.afterShiftCells = this._getGapCells(t21, 0, 1));
        }
      }),
      (v._getGapCells = function (t21, e2, i2) {
        for (var n2 = []; t21 > 0; ) {
          var s2 = this.cells[e2];
          if (!s2) break;
          n2.push(s2), (e2 += i2), (t21 -= s2.size.outerWidth);
        }
        return n2;
      }),
      (v._containSlides = function () {
        if (
          !(
            !this.options.contain ||
            this.options.wrapAround ||
            !this.cells.length
          )
        ) {
          var t21 = this.options.rightToLeft,
            e2 = t21 ? "marginRight" : "marginLeft",
            i2 = t21 ? "marginLeft" : "marginRight",
            n2 = this.slideableWidth - this.getLastCell().size[i2],
            s2 = n2 < this.size.innerWidth,
            r2 = this.cursorPosition + this.cells[0].size[e2],
            o2 = n2 - this.size.innerWidth * (1 - this.cellAlign);
          this.slides.forEach(function (t22) {
            s2
              ? (t22.target = n2 * this.cellAlign)
              : ((t22.target = Math.max(t22.target, r2)),
                (t22.target = Math.min(t22.target, o2)));
          }, this);
        }
      }),
      (v.dispatchEvent = function (t21, e2, i2) {
        var n2 = e2 ? [e2].concat(i2) : i2;
        if ((this.emitEvent(t21, n2), l && this.$element)) {
          t21 += this.options.namespaceJQueryEvents ? ".flickity" : "";
          var s2 = t21;
          if (e2) {
            var r2 = new l.Event(e2);
            (r2.type = t21), (s2 = r2);
          }
          this.$element.trigger(s2, i2);
        }
      }),
      (v.select = function (t21, e2, i2) {
        if (
          this.isActive &&
          ((t21 = parseInt(t21, 10)),
          this._wrapSelect(t21),
          (this.options.wrapAround || e2) &&
            (t21 = a.modulo(t21, this.slides.length)),
          !!this.slides[t21])
        ) {
          var n2 = this.selectedIndex;
          (this.selectedIndex = t21),
            this.updateSelectedSlide(),
            i2 ? this.positionSliderAtSelected() : this.startAnimation(),
            this.options.adaptiveHeight && this.setGallerySize(),
            this.dispatchEvent("select", null, [t21]),
            t21 != n2 && this.dispatchEvent("change", null, [t21]),
            this.dispatchEvent("cellSelect");
        }
      }),
      (v._wrapSelect = function (t21) {
        var e2 = this.slides.length,
          i2 = this.options.wrapAround && e2 > 1;
        if (!i2) return t21;
        var n2 = a.modulo(t21, e2),
          s2 = Math.abs(n2 - this.selectedIndex),
          r2 = Math.abs(n2 + e2 - this.selectedIndex),
          o2 = Math.abs(n2 - e2 - this.selectedIndex);
        !this.isDragSelect && r2 < s2
          ? (t21 += e2)
          : !this.isDragSelect && o2 < s2 && (t21 -= e2),
          t21 < 0
            ? (this.x -= this.slideableWidth)
            : t21 >= e2 && (this.x += this.slideableWidth);
      }),
      (v.previous = function (t21, e2) {
        this.select(this.selectedIndex - 1, t21, e2);
      }),
      (v.next = function (t21, e2) {
        this.select(this.selectedIndex + 1, t21, e2);
      }),
      (v.updateSelectedSlide = function () {
        var t21 = this.slides[this.selectedIndex];
        t21 &&
          (this.unselectSelectedSlide(),
          (this.selectedSlide = t21),
          t21.select(),
          (this.selectedCells = t21.cells),
          (this.selectedElements = t21.getCellElements()),
          (this.selectedCell = t21.cells[0]),
          (this.selectedElement = this.selectedElements[0]));
      }),
      (v.unselectSelectedSlide = function () {
        this.selectedSlide && this.selectedSlide.unselect();
      }),
      (v.selectInitialIndex = function () {
        var t21 = this.options.initialIndex;
        if (this.isInitActivated) {
          this.select(this.selectedIndex, !1, !0);
          return;
        }
        if (t21 && typeof t21 == "string") {
          var e2 = this.queryCell(t21);
          if (e2) {
            this.selectCell(t21, !1, !0);
            return;
          }
        }
        var i2 = 0;
        t21 && this.slides[t21] && (i2 = t21), this.select(i2, !1, !0);
      }),
      (v.selectCell = function (t21, e2, i2) {
        var n2 = this.queryCell(t21);
        if (n2) {
          var s2 = this.getCellSlideIndex(n2);
          this.select(s2, e2, i2);
        }
      }),
      (v.getCellSlideIndex = function (t21) {
        for (var e2 = 0; e2 < this.slides.length; e2++) {
          var i2 = this.slides[e2],
            n2 = i2.cells.indexOf(t21);
          if (n2 != -1) return e2;
        }
      }),
      (v.getCell = function (t21) {
        for (var e2 = 0; e2 < this.cells.length; e2++) {
          var i2 = this.cells[e2];
          if (i2.element == t21) return i2;
        }
      }),
      (v.getCells = function (t21) {
        t21 = a.makeArray(t21);
        var i2 = [];
        return (
          t21.forEach(function (t22) {
            var e2 = this.getCell(t22);
            e2 && i2.push(e2);
          }, this),
          i2
        );
      }),
      (v.getCellElements = function () {
        return this.cells.map(function (t21) {
          return t21.element;
        });
      }),
      (v.getParentCell = function (t21) {
        var e2 = this.getCell(t21);
        return (
          e2 ||
          ((t21 = a.getParent(t21, ".flickity-slider > *")), this.getCell(t21))
        );
      }),
      (v.getAdjacentCellElements = function (t21, e2) {
        if (!t21) return this.selectedSlide.getCellElements();
        e2 = e2 === void 0 ? this.selectedIndex : e2;
        var i2 = this.slides.length;
        if (1 + t21 * 2 >= i2) return this.getCellElements();
        for (var n2 = [], s2 = e2 - t21; s2 <= e2 + t21; s2++) {
          var r2 = this.options.wrapAround ? a.modulo(s2, i2) : s2,
            o2 = this.slides[r2];
          o2 && (n2 = n2.concat(o2.getCellElements()));
        }
        return n2;
      }),
      (v.queryCell = function (t21) {
        if (typeof t21 == "number") return this.cells[t21];
        if (typeof t21 == "string") {
          if (t21.match(/^[#.]?[\d/]/)) return;
          t21 = this.element.querySelector(t21);
        }
        return this.getCell(t21);
      }),
      (v.uiChange = function () {
        this.emitEvent("uiChange");
      }),
      (v.childUIPointerDown = function (t21) {
        t21.type != "touchstart" && t21.preventDefault(), this.focus();
      }),
      (v.onresize = function () {
        this.watchCSS(), this.resize();
      }),
      a.debounceMethod(p, "onresize", 150),
      (v.resize = function () {
        if (!(!this.isActive || this.isAnimating || this.isDragging)) {
          this.getSize(),
            this.options.wrapAround &&
              (this.x = a.modulo(this.x, this.slideableWidth)),
            this.positionCells(),
            this._getWrapShiftCells(),
            this.setGallerySize(),
            this.emitEvent("resize");
          var t21 = this.selectedElements && this.selectedElements[0];
          this.selectCell(t21, !1, !0);
        }
      }),
      (v.watchCSS = function () {
        var t21 = this.options.watchCSS;
        if (t21) {
          var e2 = h(this.element, ":after").content;
          e2.indexOf("flickity") != -1 ? this.activate() : this.deactivate();
        }
      }),
      (v.onkeydown = function (t21) {
        var e2 =
          document.activeElement && document.activeElement != this.element;
        if (!(!this.options.accessibility || e2)) {
          var i2 = p.keyboardHandlers[t21.keyCode];
          i2 && i2.call(this);
        }
      }),
      (p.keyboardHandlers = {
        37: function () {
          var t21 = this.options.rightToLeft ? "next" : "previous";
          this.uiChange(), this[t21]();
        },
        39: function () {
          var t21 = this.options.rightToLeft ? "previous" : "next";
          this.uiChange(), this[t21]();
        },
      }),
      (v.focus = function () {
        var t21 = n.pageYOffset;
        this.element.focus({ preventScroll: !0 }),
          n.pageYOffset != t21 && n.scrollTo(n.pageXOffset, t21);
      }),
      (v.deactivate = function () {
        this.isActive &&
          (this.element.classList.remove("flickity-enabled"),
          this.element.classList.remove("flickity-rtl"),
          this.unselectSelectedSlide(),
          this.cells.forEach(function (t21) {
            t21.destroy();
          }),
          this.element.removeChild(this.viewport),
          u(this.slider.children, this.element),
          this.options.accessibility &&
            (this.element.removeAttribute("tabIndex"),
            this.element.removeEventListener("keydown", this)),
          (this.isActive = !1),
          this.emitEvent("deactivate"));
      }),
      (v.destroy = function () {
        this.deactivate(),
          n.removeEventListener("resize", this),
          this.allOff(),
          this.emitEvent("destroy"),
          l && this.$element && l.removeData(this.element, "flickity"),
          delete this.element.flickityGUID,
          delete f[this.guid];
      }),
      a.extend(v, r),
      (p.data = function (t21) {
        t21 = a.getQueryElement(t21);
        var e2 = t21 && t21.flickityGUID;
        return e2 && f[e2];
      }),
      a.htmlInit(p, "flickity"),
      l && l.bridget && l.bridget("flickity", p),
      (p.setJQuery = function (t21) {
        l = t21;
      }),
      (p.Cell = s),
      (p.Slide = o),
      p
    );
  });
/*!
 * Unipointer v2.4.0
 * base class for doing one thing with pointer event
 * MIT license
 */ (function (e, i) {
  typeof define == "function" && define.amd
    ? define(
        "unipointer/unipointer",
        ["ev-emitter/ev-emitter"],
        function (t21) {
          return i(e, t21);
        }
      )
    : typeof module == "object" && module.exports
    ? (module.exports = i(e, require("ev-emitter")))
    : (e.Unipointer = i(e, e.EvEmitter));
})(window, function (s, e) {
  function i() {}
  function n() {}
  var r = (n.prototype = Object.create(e.prototype));
  (r.bindStartEvent = function (t21) {
    this._bindStartEvent(t21, !0);
  }),
    (r.unbindStartEvent = function (t21) {
      this._bindStartEvent(t21, !1);
    }),
    (r._bindStartEvent = function (t21, e2) {
      e2 = e2 === void 0 ? !0 : e2;
      var i2 = e2 ? "addEventListener" : "removeEventListener",
        n2 = "mousedown";
      "ontouchstart" in s
        ? (n2 = "touchstart")
        : s.PointerEvent && (n2 = "pointerdown"),
        t21[i2](n2, this);
    }),
    (r.handleEvent = function (t21) {
      var e2 = "on" + t21.type;
      this[e2] && this[e2](t21);
    }),
    (r.getTouch = function (t21) {
      for (var e2 = 0; e2 < t21.length; e2++) {
        var i2 = t21[e2];
        if (i2.identifier == this.pointerIdentifier) return i2;
      }
    }),
    (r.onmousedown = function (t21) {
      var e2 = t21.button;
      (e2 && e2 !== 0 && e2 !== 1) || this._pointerDown(t21, t21);
    }),
    (r.ontouchstart = function (t21) {
      this._pointerDown(t21, t21.changedTouches[0]);
    }),
    (r.onpointerdown = function (t21) {
      this._pointerDown(t21, t21);
    }),
    (r._pointerDown = function (t21, e2) {
      t21.button ||
        this.isPointerDown ||
        ((this.isPointerDown = !0),
        (this.pointerIdentifier =
          e2.pointerId !== void 0 ? e2.pointerId : e2.identifier),
        this.pointerDown(t21, e2));
    }),
    (r.pointerDown = function (t21, e2) {
      this._bindPostStartEvents(t21), this.emitEvent("pointerDown", [t21, e2]);
    });
  var o = {
    mousedown: ["mousemove", "mouseup"],
    touchstart: ["touchmove", "touchend", "touchcancel"],
    pointerdown: ["pointermove", "pointerup", "pointercancel"],
  };
  return (
    (r._bindPostStartEvents = function (t21) {
      if (t21) {
        var e2 = o[t21.type];
        e2.forEach(function (t22) {
          s.addEventListener(t22, this);
        }, this),
          (this._boundPointerEvents = e2);
      }
    }),
    (r._unbindPostStartEvents = function () {
      this._boundPointerEvents &&
        (this._boundPointerEvents.forEach(function (t21) {
          s.removeEventListener(t21, this);
        }, this),
        delete this._boundPointerEvents);
    }),
    (r.onmousemove = function (t21) {
      this._pointerMove(t21, t21);
    }),
    (r.onpointermove = function (t21) {
      t21.pointerId == this.pointerIdentifier && this._pointerMove(t21, t21);
    }),
    (r.ontouchmove = function (t21) {
      var e2 = this.getTouch(t21.changedTouches);
      e2 && this._pointerMove(t21, e2);
    }),
    (r._pointerMove = function (t21, e2) {
      this.pointerMove(t21, e2);
    }),
    (r.pointerMove = function (t21, e2) {
      this.emitEvent("pointerMove", [t21, e2]);
    }),
    (r.onmouseup = function (t21) {
      this._pointerUp(t21, t21);
    }),
    (r.onpointerup = function (t21) {
      t21.pointerId == this.pointerIdentifier && this._pointerUp(t21, t21);
    }),
    (r.ontouchend = function (t21) {
      var e2 = this.getTouch(t21.changedTouches);
      e2 && this._pointerUp(t21, e2);
    }),
    (r._pointerUp = function (t21, e2) {
      this._pointerDone(), this.pointerUp(t21, e2);
    }),
    (r.pointerUp = function (t21, e2) {
      this.emitEvent("pointerUp", [t21, e2]);
    }),
    (r._pointerDone = function () {
      this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone();
    }),
    (r._pointerReset = function () {
      (this.isPointerDown = !1), delete this.pointerIdentifier;
    }),
    (r.pointerDone = i),
    (r.onpointercancel = function (t21) {
      t21.pointerId == this.pointerIdentifier && this._pointerCancel(t21, t21);
    }),
    (r.ontouchcancel = function (t21) {
      var e2 = this.getTouch(t21.changedTouches);
      e2 && this._pointerCancel(t21, e2);
    }),
    (r._pointerCancel = function (t21, e2) {
      this._pointerDone(), this.pointerCancel(t21, e2);
    }),
    (r.pointerCancel = function (t21, e2) {
      this.emitEvent("pointerCancel", [t21, e2]);
    }),
    (n.getPointerPoint = function (t21) {
      return { x: t21.pageX, y: t21.pageY };
    }),
    n
  );
});
/*!
 * Unidragger v2.4.0
 * Draggable base class
 * MIT license
 */ (function (e, i) {
  typeof define == "function" && define.amd
    ? define(
        "unidragger/unidragger",
        ["unipointer/unipointer"],
        function (t21) {
          return i(e, t21);
        }
      )
    : typeof module == "object" && module.exports
    ? (module.exports = i(e, require("unipointer")))
    : (e.Unidragger = i(e, e.Unipointer));
})(window, function (r, e) {
  function i() {}
  var n = (i.prototype = Object.create(e.prototype));
  (n.bindHandles = function () {
    this._bindHandles(!0);
  }),
    (n.unbindHandles = function () {
      this._bindHandles(!1);
    }),
    (n._bindHandles = function (t21) {
      t21 = t21 === void 0 ? !0 : t21;
      for (
        var e2 = t21 ? "addEventListener" : "removeEventListener",
          i2 = t21 ? this._touchActionValue : "",
          n2 = 0;
        n2 < this.handles.length;
        n2++
      ) {
        var s2 = this.handles[n2];
        this._bindStartEvent(s2, t21),
          s2[e2]("click", this),
          r.PointerEvent && (s2.style.touchAction = i2);
      }
    }),
    (n._touchActionValue = "none"),
    (n.pointerDown = function (t21, e2) {
      var i2 = this.okayPointerDown(t21);
      i2 &&
        ((this.pointerDownPointer = { pageX: e2.pageX, pageY: e2.pageY }),
        t21.preventDefault(),
        this.pointerDownBlur(),
        this._bindPostStartEvents(t21),
        this.emitEvent("pointerDown", [t21, e2]));
    });
  var s = { TEXTAREA: !0, INPUT: !0, SELECT: !0, OPTION: !0 },
    o = {
      radio: !0,
      checkbox: !0,
      button: !0,
      submit: !0,
      image: !0,
      file: !0,
    };
  return (
    (n.okayPointerDown = function (t21) {
      var e2 = s[t21.target.nodeName],
        i2 = o[t21.target.type],
        n2 = !e2 || i2;
      return n2 || this._pointerReset(), n2;
    }),
    (n.pointerDownBlur = function () {
      var t21 = document.activeElement,
        e2 = t21 && t21.blur && t21 != document.body;
      e2 && t21.blur();
    }),
    (n.pointerMove = function (t21, e2) {
      var i2 = this._dragPointerMove(t21, e2);
      this.emitEvent("pointerMove", [t21, e2, i2]), this._dragMove(t21, e2, i2);
    }),
    (n._dragPointerMove = function (t21, e2) {
      var i2 = {
        x: e2.pageX - this.pointerDownPointer.pageX,
        y: e2.pageY - this.pointerDownPointer.pageY,
      };
      return (
        !this.isDragging && this.hasDragStarted(i2) && this._dragStart(t21, e2),
        i2
      );
    }),
    (n.hasDragStarted = function (t21) {
      return Math.abs(t21.x) > 3 || Math.abs(t21.y) > 3;
    }),
    (n.pointerUp = function (t21, e2) {
      this.emitEvent("pointerUp", [t21, e2]), this._dragPointerUp(t21, e2);
    }),
    (n._dragPointerUp = function (t21, e2) {
      this.isDragging ? this._dragEnd(t21, e2) : this._staticClick(t21, e2);
    }),
    (n._dragStart = function (t21, e2) {
      (this.isDragging = !0),
        (this.isPreventingClicks = !0),
        this.dragStart(t21, e2);
    }),
    (n.dragStart = function (t21, e2) {
      this.emitEvent("dragStart", [t21, e2]);
    }),
    (n._dragMove = function (t21, e2, i2) {
      this.isDragging && this.dragMove(t21, e2, i2);
    }),
    (n.dragMove = function (t21, e2, i2) {
      t21.preventDefault(), this.emitEvent("dragMove", [t21, e2, i2]);
    }),
    (n._dragEnd = function (t21, e2) {
      (this.isDragging = !1),
        setTimeout(
          function () {
            delete this.isPreventingClicks;
          }.bind(this)
        ),
        this.dragEnd(t21, e2);
    }),
    (n.dragEnd = function (t21, e2) {
      this.emitEvent("dragEnd", [t21, e2]);
    }),
    (n.onclick = function (t21) {
      this.isPreventingClicks && t21.preventDefault();
    }),
    (n._staticClick = function (t21, e2) {
      (this.isIgnoringMouseUp && t21.type == "mouseup") ||
        (this.staticClick(t21, e2),
        t21.type != "mouseup" &&
          ((this.isIgnoringMouseUp = !0),
          setTimeout(
            function () {
              delete this.isIgnoringMouseUp;
            }.bind(this),
            400
          )));
    }),
    (n.staticClick = function (t21, e2) {
      this.emitEvent("staticClick", [t21, e2]);
    }),
    (i.getPointerPoint = e.getPointerPoint),
    i
  );
}),
  (function (n, s) {
    typeof define == "function" && define.amd
      ? define(
          "flickity/js/drag",
          ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"],
          function (t21, e, i) {
            return s(n, t21, e, i);
          }
        )
      : typeof module == "object" && module.exports
      ? (module.exports = s(
          n,
          require("./flickity"),
          require("unidragger"),
          require("fizzy-ui-utils")
        ))
      : (n.Flickity = s(n, n.Flickity, n.Unidragger, n.fizzyUIUtils));
  })(window, function (n, e, i, a) {
    a.extend(e.defaults, { draggable: ">1", dragThreshold: 3 }),
      e.createMethods.push("_createDrag");
    var s = e.prototype;
    a.extend(s, i.prototype),
      (s._touchActionValue = "pan-y"),
      (s._createDrag = function () {
        this.on("activate", this.onActivateDrag),
          this.on("uiChange", this._uiChangeDrag),
          this.on("deactivate", this.onDeactivateDrag),
          this.on("cellChange", this.updateDraggable);
      }),
      (s.onActivateDrag = function () {
        (this.handles = [this.viewport]),
          this.bindHandles(),
          this.updateDraggable();
      }),
      (s.onDeactivateDrag = function () {
        this.unbindHandles(), this.element.classList.remove("is-draggable");
      }),
      (s.updateDraggable = function () {
        this.options.draggable == ">1"
          ? (this.isDraggable = this.slides.length > 1)
          : (this.isDraggable = this.options.draggable),
          this.isDraggable
            ? this.element.classList.add("is-draggable")
            : this.element.classList.remove("is-draggable");
      }),
      (s.bindDrag = function () {
        (this.options.draggable = !0), this.updateDraggable();
      }),
      (s.unbindDrag = function () {
        (this.options.draggable = !1), this.updateDraggable();
      }),
      (s._uiChangeDrag = function () {
        delete this.isFreeScrolling;
      }),
      (s.pointerDown = function (t21, e2) {
        if (!this.isDraggable) {
          this._pointerDownDefault(t21, e2);
          return;
        }
        var i2 = this.okayPointerDown(t21);
        i2 &&
          (this._pointerDownPreventDefault(t21),
          this.pointerDownFocus(t21),
          document.activeElement != this.element && this.pointerDownBlur(),
          (this.dragX = this.x),
          this.viewport.classList.add("is-pointer-down"),
          (this.pointerDownScroll = o()),
          n.addEventListener("scroll", this),
          this._pointerDownDefault(t21, e2));
      }),
      (s._pointerDownDefault = function (t21, e2) {
        (this.pointerDownPointer = { pageX: e2.pageX, pageY: e2.pageY }),
          this._bindPostStartEvents(t21),
          this.dispatchEvent("pointerDown", t21, [e2]);
      });
    var r = { INPUT: !0, TEXTAREA: !0, SELECT: !0 };
    (s.pointerDownFocus = function (t21) {
      var e2 = r[t21.target.nodeName];
      e2 || this.focus();
    }),
      (s._pointerDownPreventDefault = function (t21) {
        var e2 = t21.type == "touchstart",
          i2 = t21.pointerType == "touch",
          n2 = r[t21.target.nodeName];
        !e2 && !i2 && !n2 && t21.preventDefault();
      }),
      (s.hasDragStarted = function (t21) {
        return Math.abs(t21.x) > this.options.dragThreshold;
      }),
      (s.pointerUp = function (t21, e2) {
        delete this.isTouchScrolling,
          this.viewport.classList.remove("is-pointer-down"),
          this.dispatchEvent("pointerUp", t21, [e2]),
          this._dragPointerUp(t21, e2);
      }),
      (s.pointerDone = function () {
        n.removeEventListener("scroll", this), delete this.pointerDownScroll;
      }),
      (s.dragStart = function (t21, e2) {
        this.isDraggable &&
          ((this.dragStartPosition = this.x),
          this.startAnimation(),
          n.removeEventListener("scroll", this),
          this.dispatchEvent("dragStart", t21, [e2]));
      }),
      (s.pointerMove = function (t21, e2) {
        var i2 = this._dragPointerMove(t21, e2);
        this.dispatchEvent("pointerMove", t21, [e2, i2]),
          this._dragMove(t21, e2, i2);
      }),
      (s.dragMove = function (t21, e2, i2) {
        if (this.isDraggable) {
          t21.preventDefault(), (this.previousDragX = this.dragX);
          var n2 = this.options.rightToLeft ? -1 : 1;
          this.options.wrapAround && (i2.x %= this.slideableWidth);
          var s2 = this.dragStartPosition + i2.x * n2;
          if (!this.options.wrapAround && this.slides.length) {
            var r2 = Math.max(-this.slides[0].target, this.dragStartPosition);
            s2 = s2 > r2 ? (s2 + r2) * 0.5 : s2;
            var o2 = Math.min(
              -this.getLastSlide().target,
              this.dragStartPosition
            );
            s2 = s2 < o2 ? (s2 + o2) * 0.5 : s2;
          }
          (this.dragX = s2),
            (this.dragMoveTime = new Date()),
            this.dispatchEvent("dragMove", t21, [e2, i2]);
        }
      }),
      (s.dragEnd = function (t21, e2) {
        if (this.isDraggable) {
          this.options.freeScroll && (this.isFreeScrolling = !0);
          var i2 = this.dragEndRestingSelect();
          if (this.options.freeScroll && !this.options.wrapAround) {
            var n2 = this.getRestingPosition();
            this.isFreeScrolling =
              -n2 > this.slides[0].target && -n2 < this.getLastSlide().target;
          } else
            !this.options.freeScroll &&
              i2 == this.selectedIndex &&
              (i2 += this.dragEndBoostSelect());
          delete this.previousDragX,
            (this.isDragSelect = this.options.wrapAround),
            this.select(i2),
            delete this.isDragSelect,
            this.dispatchEvent("dragEnd", t21, [e2]);
        }
      }),
      (s.dragEndRestingSelect = function () {
        var t21 = this.getRestingPosition(),
          e2 = Math.abs(this.getSlideDistance(-t21, this.selectedIndex)),
          i2 = this._getClosestResting(t21, e2, 1),
          n2 = this._getClosestResting(t21, e2, -1),
          s2 = i2.distance < n2.distance ? i2.index : n2.index;
        return s2;
      }),
      (s._getClosestResting = function (t21, e2, i2) {
        for (
          var n2 = this.selectedIndex,
            s2 = 1 / 0,
            r2 =
              this.options.contain && !this.options.wrapAround
                ? function (t22, e3) {
                    return t22 <= e3;
                  }
                : function (t22, e3) {
                    return t22 < e3;
                  };
          r2(e2, s2) &&
          ((n2 += i2),
          (s2 = e2),
          (e2 = this.getSlideDistance(-t21, n2)),
          e2 !== null);

        )
          e2 = Math.abs(e2);
        return { distance: s2, index: n2 - i2 };
      }),
      (s.getSlideDistance = function (t21, e2) {
        var i2 = this.slides.length,
          n2 = this.options.wrapAround && i2 > 1,
          s2 = n2 ? a.modulo(e2, i2) : e2,
          r2 = this.slides[s2];
        if (!r2) return null;
        var o2 = n2 ? this.slideableWidth * Math.floor(e2 / i2) : 0;
        return t21 - (r2.target + o2);
      }),
      (s.dragEndBoostSelect = function () {
        if (
          this.previousDragX === void 0 ||
          !this.dragMoveTime ||
          new Date() - this.dragMoveTime > 100
        )
          return 0;
        var t21 = this.getSlideDistance(-this.dragX, this.selectedIndex),
          e2 = this.previousDragX - this.dragX;
        return t21 > 0 && e2 > 0 ? 1 : t21 < 0 && e2 < 0 ? -1 : 0;
      }),
      (s.staticClick = function (t21, e2) {
        var i2 = this.getParentCell(t21.target),
          n2 = i2 && i2.element,
          s2 = i2 && this.cells.indexOf(i2);
        this.dispatchEvent("staticClick", t21, [e2, n2, s2]);
      }),
      (s.onscroll = function () {
        var t21 = o(),
          e2 = this.pointerDownScroll.x - t21.x,
          i2 = this.pointerDownScroll.y - t21.y;
        (Math.abs(e2) > 3 || Math.abs(i2) > 3) && this._pointerDone();
      });
    function o() {
      return { x: n.pageXOffset, y: n.pageYOffset };
    }
    return e;
  }),
  (function (n, s) {
    typeof define == "function" && define.amd
      ? define(
          "flickity/js/prev-next-button",
          ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"],
          function (t21, e, i) {
            return s(n, t21, e, i);
          }
        )
      : typeof module == "object" && module.exports
      ? (module.exports = s(
          n,
          require("./flickity"),
          require("unipointer"),
          require("fizzy-ui-utils")
        ))
      : s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils);
  })(window, function (e, i, n, s) {
    "use strict";
    var r = "http://www.w3.org/2000/svg";
    function o(t21, e2) {
      (this.direction = t21), (this.parent = e2), this._create();
    }
    (o.prototype = Object.create(n.prototype)),
      (o.prototype._create = function () {
        (this.isEnabled = !0), (this.isPrevious = this.direction == -1);
        var t21 = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == t21;
        var e2 = (this.element = document.createElement("button"));
        (e2.className = "flickity-button flickity-prev-next-button"),
          (e2.className += this.isPrevious ? " previous" : " next"),
          e2.setAttribute("type", "button"),
          this.disable(),
          e2.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
        var i2 = this.createSVG();
        e2.appendChild(i2),
          this.parent.on("select", this.update.bind(this)),
          this.on(
            "pointerDown",
            this.parent.childUIPointerDown.bind(this.parent)
          );
      }),
      (o.prototype.activate = function () {
        this.bindStartEvent(this.element),
          this.element.addEventListener("click", this),
          this.parent.element.appendChild(this.element);
      }),
      (o.prototype.deactivate = function () {
        this.parent.element.removeChild(this.element),
          this.unbindStartEvent(this.element),
          this.element.removeEventListener("click", this);
      }),
      (o.prototype.createSVG = function () {
        var t21 = document.createElementNS(r, "svg");
        t21.setAttribute("class", "flickity-button-icon"),
          t21.setAttribute("viewBox", "0 0 100 100");
        var e2 = document.createElementNS(r, "path"),
          i2 = a(this.parent.options.arrowShape);
        return (
          e2.setAttribute("d", i2),
          e2.setAttribute("class", "arrow"),
          this.isLeft ||
            e2.setAttribute("transform", "translate(100, 100) rotate(180) "),
          t21.appendChild(e2),
          t21
        );
      });
    function a(t21) {
      return typeof t21 == "string"
        ? t21
        : "M " +
            t21.x0 +
            ",50 L " +
            t21.x1 +
            "," +
            (t21.y1 + 50) +
            " L " +
            t21.x2 +
            "," +
            (t21.y2 + 50) +
            " L " +
            t21.x3 +
            ",50  L " +
            t21.x2 +
            "," +
            (50 - t21.y2) +
            " L " +
            t21.x1 +
            "," +
            (50 - t21.y1) +
            " Z";
    }
    (o.prototype.handleEvent = s.handleEvent),
      (o.prototype.onclick = function () {
        if (this.isEnabled) {
          this.parent.uiChange();
          var t21 = this.isPrevious ? "previous" : "next";
          this.parent[t21]();
        }
      }),
      (o.prototype.enable = function () {
        this.isEnabled || ((this.element.disabled = !1), (this.isEnabled = !0));
      }),
      (o.prototype.disable = function () {
        this.isEnabled && ((this.element.disabled = !0), (this.isEnabled = !1));
      }),
      (o.prototype.update = function () {
        var t21 = this.parent.slides;
        if (this.parent.options.wrapAround && t21.length > 1) {
          this.enable();
          return;
        }
        var e2 = t21.length ? t21.length - 1 : 0,
          i2 = this.isPrevious ? 0 : e2,
          n2 = this.parent.selectedIndex == i2 ? "disable" : "enable";
        this[n2]();
      }),
      (o.prototype.destroy = function () {
        this.deactivate(), this.allOff();
      }),
      s.extend(i.defaults, {
        prevNextButtons: !0,
        arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 },
      }),
      i.createMethods.push("_createPrevNextButtons");
    var l = i.prototype;
    return (
      (l._createPrevNextButtons = function () {
        this.options.prevNextButtons &&
          ((this.prevButton = new o(-1, this)),
          (this.nextButton = new o(1, this)),
          this.on("activate", this.activatePrevNextButtons));
      }),
      (l.activatePrevNextButtons = function () {
        this.prevButton.activate(),
          this.nextButton.activate(),
          this.on("deactivate", this.deactivatePrevNextButtons);
      }),
      (l.deactivatePrevNextButtons = function () {
        this.prevButton.deactivate(),
          this.nextButton.deactivate(),
          this.off("deactivate", this.deactivatePrevNextButtons);
      }),
      (i.PrevNextButton = o),
      i
    );
  }),
  (function (n, s) {
    typeof define == "function" && define.amd
      ? define(
          "flickity/js/page-dots",
          ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"],
          function (t21, e, i) {
            return s(n, t21, e, i);
          }
        )
      : typeof module == "object" && module.exports
      ? (module.exports = s(
          n,
          require("./flickity"),
          require("unipointer"),
          require("fizzy-ui-utils")
        ))
      : s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils);
  })(window, function (e, i, n, s) {
    function r(t21) {
      (this.parent = t21), this._create();
    }
    (r.prototype = Object.create(n.prototype)),
      (r.prototype._create = function () {
        (this.holder = document.createElement("ol")),
          (this.holder.className = "flickity-page-dots"),
          (this.dots = []),
          (this.handleClick = this.onClick.bind(this)),
          this.on(
            "pointerDown",
            this.parent.childUIPointerDown.bind(this.parent)
          );
      }),
      (r.prototype.activate = function () {
        this.setDots(),
          this.holder.addEventListener("click", this.handleClick),
          this.bindStartEvent(this.holder),
          this.parent.element.appendChild(this.holder);
      }),
      (r.prototype.deactivate = function () {
        this.holder.removeEventListener("click", this.handleClick),
          this.unbindStartEvent(this.holder),
          this.parent.element.removeChild(this.holder);
      }),
      (r.prototype.setDots = function () {
        var t21 = this.parent.slides.length - this.dots.length;
        t21 > 0 ? this.addDots(t21) : t21 < 0 && this.removeDots(-t21);
      }),
      (r.prototype.addDots = function (t21) {
        for (
          var e2 = document.createDocumentFragment(),
            i2 = [],
            n2 = this.dots.length,
            s2 = n2 + t21,
            r2 = n2;
          r2 < s2;
          r2++
        ) {
          var o2 = document.createElement("li");
          (o2.className = "dot"),
            o2.setAttribute("aria-label", "Page dot " + (r2 + 1)),
            e2.appendChild(o2),
            i2.push(o2);
        }
        this.holder.appendChild(e2), (this.dots = this.dots.concat(i2));
      }),
      (r.prototype.removeDots = function (t21) {
        var e2 = this.dots.splice(this.dots.length - t21, t21);
        e2.forEach(function (t22) {
          this.holder.removeChild(t22);
        }, this);
      }),
      (r.prototype.updateSelected = function () {
        this.selectedDot &&
          ((this.selectedDot.className = "dot"),
          this.selectedDot.removeAttribute("aria-current")),
          this.dots.length &&
            ((this.selectedDot = this.dots[this.parent.selectedIndex]),
            (this.selectedDot.className = "dot is-selected"),
            this.selectedDot.setAttribute("aria-current", "step"));
      }),
      (r.prototype.onTap = r.prototype.onClick =
        function (t21) {
          var e2 = t21.target;
          if (e2.nodeName == "LI") {
            this.parent.uiChange();
            var i2 = this.dots.indexOf(e2);
            this.parent.select(i2);
          }
        }),
      (r.prototype.destroy = function () {
        this.deactivate(), this.allOff();
      }),
      (i.PageDots = r),
      s.extend(i.defaults, { pageDots: !0 }),
      i.createMethods.push("_createPageDots");
    var o = i.prototype;
    return (
      (o._createPageDots = function () {
        this.options.pageDots &&
          ((this.pageDots = new r(this)),
          this.on("activate", this.activatePageDots),
          this.on("select", this.updateSelectedPageDots),
          this.on("cellChange", this.updatePageDots),
          this.on("resize", this.updatePageDots),
          this.on("deactivate", this.deactivatePageDots));
      }),
      (o.activatePageDots = function () {
        this.pageDots.activate();
      }),
      (o.updateSelectedPageDots = function () {
        this.pageDots.updateSelected();
      }),
      (o.updatePageDots = function () {
        this.pageDots.setDots();
      }),
      (o.deactivatePageDots = function () {
        this.pageDots.deactivate();
      }),
      (i.PageDots = r),
      i
    );
  }),
  (function (t21, n) {
    typeof define == "function" && define.amd
      ? define(
          "flickity/js/player",
          ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"],
          function (t22, e, i) {
            return n(t22, e, i);
          }
        )
      : typeof module == "object" && module.exports
      ? (module.exports = n(
          require("ev-emitter"),
          require("fizzy-ui-utils"),
          require("./flickity")
        ))
      : n(t21.EvEmitter, t21.fizzyUIUtils, t21.Flickity);
  })(window, function (e, i, n) {
    function s(t21) {
      (this.parent = t21),
        (this.state = "stopped"),
        (this.onVisibilityChange = this.visibilityChange.bind(this)),
        (this.onVisibilityPlay = this.visibilityPlay.bind(this));
    }
    (s.prototype = Object.create(e.prototype)),
      (s.prototype.play = function () {
        if (this.state != "playing") {
          var t21 = document.hidden;
          if (t21) {
            document.addEventListener(
              "visibilitychange",
              this.onVisibilityPlay
            );
            return;
          }
          (this.state = "playing"),
            document.addEventListener(
              "visibilitychange",
              this.onVisibilityChange
            ),
            this.tick();
        }
      }),
      (s.prototype.tick = function () {
        if (this.state == "playing") {
          var t21 = this.parent.options.autoPlay;
          t21 = typeof t21 == "number" ? t21 : 3e3;
          var e2 = this;
          this.clear(),
            (this.timeout = setTimeout(function () {
              e2.parent.next(!0), e2.tick();
            }, t21));
        }
      }),
      (s.prototype.stop = function () {
        (this.state = "stopped"),
          this.clear(),
          document.removeEventListener(
            "visibilitychange",
            this.onVisibilityChange
          );
      }),
      (s.prototype.clear = function () {
        clearTimeout(this.timeout);
      }),
      (s.prototype.pause = function () {
        this.state == "playing" && ((this.state = "paused"), this.clear());
      }),
      (s.prototype.unpause = function () {
        this.state == "paused" && this.play();
      }),
      (s.prototype.visibilityChange = function () {
        var t21 = document.hidden;
        this[t21 ? "pause" : "unpause"]();
      }),
      (s.prototype.visibilityPlay = function () {
        this.play(),
          document.removeEventListener(
            "visibilitychange",
            this.onVisibilityPlay
          );
      }),
      i.extend(n.defaults, { pauseAutoPlayOnHover: !0 }),
      n.createMethods.push("_createPlayer");
    var r = n.prototype;
    return (
      (r._createPlayer = function () {
        (this.player = new s(this)),
          this.on("activate", this.activatePlayer),
          this.on("uiChange", this.stopPlayer),
          this.on("pointerDown", this.stopPlayer),
          this.on("deactivate", this.deactivatePlayer);
      }),
      (r.activatePlayer = function () {
        this.options.autoPlay &&
          (this.player.play(),
          this.element.addEventListener("mouseenter", this));
      }),
      (r.playPlayer = function () {
        this.player.play();
      }),
      (r.stopPlayer = function () {
        this.player.stop();
      }),
      (r.pausePlayer = function () {
        this.player.pause();
      }),
      (r.unpausePlayer = function () {
        this.player.unpause();
      }),
      (r.deactivatePlayer = function () {
        this.player.stop(),
          this.element.removeEventListener("mouseenter", this);
      }),
      (r.onmouseenter = function () {
        this.options.pauseAutoPlayOnHover &&
          (this.player.pause(),
          this.element.addEventListener("mouseleave", this));
      }),
      (r.onmouseleave = function () {
        this.player.unpause(),
          this.element.removeEventListener("mouseleave", this);
      }),
      (n.Player = s),
      n
    );
  }),
  (function (i, n) {
    typeof define == "function" && define.amd
      ? define(
          "flickity/js/add-remove-cell",
          ["./flickity", "fizzy-ui-utils/utils"],
          function (t21, e) {
            return n(i, t21, e);
          }
        )
      : typeof module == "object" && module.exports
      ? (module.exports = n(
          i,
          require("./flickity"),
          require("fizzy-ui-utils")
        ))
      : n(i, i.Flickity, i.fizzyUIUtils);
  })(window, function (e, i, n) {
    function l(t21) {
      var e2 = document.createDocumentFragment();
      return (
        t21.forEach(function (t22) {
          e2.appendChild(t22.element);
        }),
        e2
      );
    }
    var s = i.prototype;
    return (
      (s.insert = function (t21, e2) {
        var i2 = this._makeCells(t21);
        if (!(!i2 || !i2.length)) {
          var n2 = this.cells.length;
          e2 = e2 === void 0 ? n2 : e2;
          var s2 = l(i2),
            r = e2 == n2;
          if (r) this.slider.appendChild(s2);
          else {
            var o = this.cells[e2].element;
            this.slider.insertBefore(s2, o);
          }
          if (e2 === 0) this.cells = i2.concat(this.cells);
          else if (r) this.cells = this.cells.concat(i2);
          else {
            var a = this.cells.splice(e2, n2 - e2);
            this.cells = this.cells.concat(i2).concat(a);
          }
          this._sizeCells(i2), this.cellChange(e2, !0);
        }
      }),
      (s.append = function (t21) {
        this.insert(t21, this.cells.length);
      }),
      (s.prepend = function (t21) {
        this.insert(t21, 0);
      }),
      (s.remove = function (t21) {
        var e2 = this.getCells(t21);
        if (!(!e2 || !e2.length)) {
          var i2 = this.cells.length - 1;
          e2.forEach(function (t22) {
            t22.remove();
            var e3 = this.cells.indexOf(t22);
            (i2 = Math.min(e3, i2)), n.removeFrom(this.cells, t22);
          }, this),
            this.cellChange(i2, !0);
        }
      }),
      (s.cellSizeChange = function (t21) {
        var e2 = this.getCell(t21);
        if (e2) {
          e2.getSize();
          var i2 = this.cells.indexOf(e2);
          this.cellChange(i2);
        }
      }),
      (s.cellChange = function (t21, e2) {
        var i2 = this.selectedElement;
        this._positionCells(t21),
          this._getWrapShiftCells(),
          this.setGallerySize();
        var n2 = this.getCell(i2);
        n2 && (this.selectedIndex = this.getCellSlideIndex(n2)),
          (this.selectedIndex = Math.min(
            this.slides.length - 1,
            this.selectedIndex
          )),
          this.emitEvent("cellChange", [t21]),
          this.select(this.selectedIndex),
          e2 && this.positionSliderAtSelected();
      }),
      i
    );
  }),
  (function (i, n) {
    typeof define == "function" && define.amd
      ? define(
          "flickity/js/lazyload",
          ["./flickity", "fizzy-ui-utils/utils"],
          function (t21, e) {
            return n(i, t21, e);
          }
        )
      : typeof module == "object" && module.exports
      ? (module.exports = n(
          i,
          require("./flickity"),
          require("fizzy-ui-utils")
        ))
      : n(i, i.Flickity, i.fizzyUIUtils);
  })(window, function (e, i, o) {
    "use strict";
    i.createMethods.push("_createLazyload");
    var n = i.prototype;
    (n._createLazyload = function () {
      this.on("select", this.lazyLoad);
    }),
      (n.lazyLoad = function () {
        var t21 = this.options.lazyLoad;
        if (t21) {
          var e2 = typeof t21 == "number" ? t21 : 0,
            i2 = this.getAdjacentCellElements(e2),
            n2 = [];
          i2.forEach(function (t22) {
            var e3 = s(t22);
            n2 = n2.concat(e3);
          }),
            n2.forEach(function (t22) {
              new r(t22, this);
            }, this);
        }
      });
    function s(t21) {
      if (t21.nodeName == "IMG") {
        var e2 = t21.getAttribute("data-flickity-lazyload"),
          i2 = t21.getAttribute("data-flickity-lazyload-src"),
          n2 = t21.getAttribute("data-flickity-lazyload-srcset");
        if (e2 || i2 || n2) return [t21];
      }
      var s2 =
          "img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]",
        r2 = t21.querySelectorAll(s2);
      return o.makeArray(r2);
    }
    function r(t21, e2) {
      (this.img = t21), (this.flickity = e2), this.load();
    }
    return (
      (r.prototype.handleEvent = o.handleEvent),
      (r.prototype.load = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this);
        var t21 =
            this.img.getAttribute("data-flickity-lazyload") ||
            this.img.getAttribute("data-flickity-lazyload-src"),
          e2 = this.img.getAttribute("data-flickity-lazyload-srcset");
        (this.img.src = t21),
          e2 && this.img.setAttribute("srcset", e2),
          this.img.removeAttribute("data-flickity-lazyload"),
          this.img.removeAttribute("data-flickity-lazyload-src"),
          this.img.removeAttribute("data-flickity-lazyload-srcset");
      }),
      (r.prototype.onload = function (t21) {
        this.complete(t21, "flickity-lazyloaded");
      }),
      (r.prototype.onerror = function (t21) {
        this.complete(t21, "flickity-lazyerror");
      }),
      (r.prototype.complete = function (t21, e2) {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
        var i2 = this.flickity.getParentCell(this.img),
          n2 = i2 && i2.element;
        this.flickity.cellSizeChange(n2),
          this.img.classList.add(e2),
          this.flickity.dispatchEvent("lazyLoad", t21, n2);
      }),
      (i.LazyLoader = r),
      i
    );
  });
/*!
 * Flickity v2.3.0
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2021 Metafizzy
 */ (function (t21, e) {
  typeof define == "function" && define.amd
    ? define(
        "flickity/js/index",
        [
          "./flickity",
          "./drag",
          "./prev-next-button",
          "./page-dots",
          "./player",
          "./add-remove-cell",
          "./lazyload",
        ],
        e
      )
    : typeof module == "object" &&
      module.exports &&
      (module.exports = e(
        require("./flickity"),
        require("./drag"),
        require("./prev-next-button"),
        require("./page-dots"),
        require("./player"),
        require("./add-remove-cell"),
        require("./lazyload")
      ));
})(window, function (e) {
  return e;
});
/*!
 * Flickity asNavFor v2.0.2
 * enable asNavFor for Flickity
 */ (function (t21, e) {
  typeof define == "function" && define.amd
    ? define(
        "flickity-as-nav-for/as-nav-for",
        ["flickity/js/index", "fizzy-ui-utils/utils"],
        e
      )
    : typeof module == "object" && module.exports
    ? (module.exports = e(require("flickity"), require("fizzy-ui-utils")))
    : (t21.Flickity = e(t21.Flickity, t21.fizzyUIUtils));
})(window, function (n, s) {
  n.createMethods.push("_createAsNavFor");
  var e = n.prototype;
  (e._createAsNavFor = function () {
    this.on("activate", this.activateAsNavFor),
      this.on("deactivate", this.deactivateAsNavFor),
      this.on("destroy", this.destroyAsNavFor);
    var e2 = this.options.asNavFor;
    if (e2) {
      var i = this;
      setTimeout(function () {
        i.setNavCompanion(e2);
      });
    }
  }),
    (e.setNavCompanion = function (t21) {
      t21 = s.getQueryElement(t21);
      var e2 = n.data(t21);
      if (!(!e2 || e2 == this)) {
        this.navCompanion = e2;
        var i = this;
        (this.onNavCompanionSelect = function () {
          i.navCompanionSelect();
        }),
          e2.on("select", this.onNavCompanionSelect),
          this.on("staticClick", this.onNavStaticClick),
          this.navCompanionSelect(!0);
      }
    }),
    (e.navCompanionSelect = function (t21) {
      var e2 = this.navCompanion && this.navCompanion.selectedCells;
      if (e2) {
        var i = e2[0],
          n2 = this.navCompanion.cells.indexOf(i),
          s2 = n2 + e2.length - 1,
          r = Math.floor(a(n2, s2, this.navCompanion.cellAlign));
        if (
          (this.selectCell(r, !1, t21),
          this.removeNavSelectedElements(),
          !(r >= this.cells.length))
        ) {
          var o = this.cells.slice(n2, s2 + 1);
          (this.navSelectedElements = o.map(function (t22) {
            return t22.element;
          })),
            this.changeNavSelectedClass("add");
        }
      }
    });
  function a(t21, e2, i) {
    return (e2 - t21) * i + t21;
  }
  return (
    (e.changeNavSelectedClass = function (e2) {
      this.navSelectedElements.forEach(function (t21) {
        t21.classList[e2]("is-nav-selected");
      });
    }),
    (e.activateAsNavFor = function () {
      this.navCompanionSelect(!0);
    }),
    (e.removeNavSelectedElements = function () {
      this.navSelectedElements &&
        (this.changeNavSelectedClass("remove"),
        delete this.navSelectedElements);
    }),
    (e.onNavStaticClick = function (t21, e2, i, n2) {
      typeof n2 == "number" && this.navCompanion.selectCell(n2);
    }),
    (e.deactivateAsNavFor = function () {
      this.removeNavSelectedElements();
    }),
    (e.destroyAsNavFor = function () {
      this.navCompanion &&
        (this.navCompanion.off("select", this.onNavCompanionSelect),
        this.off("staticClick", this.onNavStaticClick),
        delete this.navCompanion);
    }),
    n
  );
});
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */ (function (e, i) {
  "use strict";
  typeof define == "function" && define.amd
    ? define(
        "imagesloaded/imagesloaded",
        ["ev-emitter/ev-emitter"],
        function (t21) {
          return i(e, t21);
        }
      )
    : typeof module == "object" && module.exports
    ? (module.exports = i(e, require("ev-emitter")))
    : (e.imagesLoaded = i(e, e.EvEmitter));
})(typeof window != "undefined" ? window : this, function (e, i) {
  var s = e.jQuery,
    r = e.console;
  function o(t21, e2) {
    for (var i2 in e2) t21[i2] = e2[i2];
    return t21;
  }
  var n = Array.prototype.slice;
  function a(t21) {
    if (Array.isArray(t21)) return t21;
    var e2 = typeof t21 == "object" && typeof t21.length == "number";
    return e2 ? n.call(t21) : [t21];
  }
  function l(t21, e2, i2) {
    if (!(this instanceof l)) return new l(t21, e2, i2);
    var n2 = t21;
    if (
      (typeof t21 == "string" && (n2 = document.querySelectorAll(t21)), !n2)
    ) {
      r.error("Bad element for imagesLoaded " + (n2 || t21));
      return;
    }
    (this.elements = a(n2)),
      (this.options = o({}, this.options)),
      typeof e2 == "function" ? (i2 = e2) : o(this.options, e2),
      i2 && this.on("always", i2),
      this.getImages(),
      s && (this.jqDeferred = new s.Deferred()),
      setTimeout(this.check.bind(this));
  }
  (l.prototype = Object.create(i.prototype)),
    (l.prototype.options = {}),
    (l.prototype.getImages = function () {
      (this.images = []), this.elements.forEach(this.addElementImages, this);
    }),
    (l.prototype.addElementImages = function (t21) {
      t21.nodeName == "IMG" && this.addImage(t21),
        this.options.background === !0 && this.addElementBackgroundImages(t21);
      var e2 = t21.nodeType;
      if (!(!e2 || !h[e2])) {
        for (
          var i2 = t21.querySelectorAll("img"), n2 = 0;
          n2 < i2.length;
          n2++
        ) {
          var s2 = i2[n2];
          this.addImage(s2);
        }
        if (typeof this.options.background == "string") {
          var r2 = t21.querySelectorAll(this.options.background);
          for (n2 = 0; n2 < r2.length; n2++) {
            var o2 = r2[n2];
            this.addElementBackgroundImages(o2);
          }
        }
      }
    });
  var h = { 1: !0, 9: !0, 11: !0 };
  (l.prototype.addElementBackgroundImages = function (t21) {
    var e2 = getComputedStyle(t21);
    if (e2)
      for (
        var i2 = /url\((['"])?(.*?)\1\)/gi, n2 = i2.exec(e2.backgroundImage);
        n2 !== null;

      ) {
        var s2 = n2 && n2[2];
        s2 && this.addBackground(s2, t21), (n2 = i2.exec(e2.backgroundImage));
      }
  }),
    (l.prototype.addImage = function (t21) {
      var e2 = new c(t21);
      this.images.push(e2);
    }),
    (l.prototype.addBackground = function (t21, e2) {
      var i2 = new u(t21, e2);
      this.images.push(i2);
    }),
    (l.prototype.check = function () {
      var n2 = this;
      if (
        ((this.progressedCount = 0),
        (this.hasAnyBroken = !1),
        !this.images.length)
      ) {
        this.complete();
        return;
      }
      function e2(t21, e3, i2) {
        setTimeout(function () {
          n2.progress(t21, e3, i2);
        });
      }
      this.images.forEach(function (t21) {
        t21.once("progress", e2), t21.check();
      });
    }),
    (l.prototype.progress = function (t21, e2, i2) {
      this.progressedCount++,
        (this.hasAnyBroken = this.hasAnyBroken || !t21.isLoaded),
        this.emitEvent("progress", [this, t21, e2]),
        this.jqDeferred &&
          this.jqDeferred.notify &&
          this.jqDeferred.notify(this, t21),
        this.progressedCount == this.images.length && this.complete(),
        this.options.debug && r && r.log("progress: " + i2, t21, e2);
    }),
    (l.prototype.complete = function () {
      var t21 = this.hasAnyBroken ? "fail" : "done";
      if (
        ((this.isComplete = !0),
        this.emitEvent(t21, [this]),
        this.emitEvent("always", [this]),
        this.jqDeferred)
      ) {
        var e2 = this.hasAnyBroken ? "reject" : "resolve";
        this.jqDeferred[e2](this);
      }
    });
  function c(t21) {
    this.img = t21;
  }
  (c.prototype = Object.create(i.prototype)),
    (c.prototype.check = function () {
      var t21 = this.getIsImageComplete();
      if (t21) {
        this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
        return;
      }
      (this.proxyImage = new Image()),
        this.proxyImage.addEventListener("load", this),
        this.proxyImage.addEventListener("error", this),
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        (this.proxyImage.src = this.img.src);
    }),
    (c.prototype.getIsImageComplete = function () {
      return this.img.complete && this.img.naturalWidth;
    }),
    (c.prototype.confirm = function (t21, e2) {
      (this.isLoaded = t21), this.emitEvent("progress", [this, this.img, e2]);
    }),
    (c.prototype.handleEvent = function (t21) {
      var e2 = "on" + t21.type;
      this[e2] && this[e2](t21);
    }),
    (c.prototype.onload = function () {
      this.confirm(!0, "onload"), this.unbindEvents();
    }),
    (c.prototype.onerror = function () {
      this.confirm(!1, "onerror"), this.unbindEvents();
    }),
    (c.prototype.unbindEvents = function () {
      this.proxyImage.removeEventListener("load", this),
        this.proxyImage.removeEventListener("error", this),
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this);
    });
  function u(t21, e2) {
    (this.url = t21), (this.element = e2), (this.img = new Image());
  }
  return (
    (u.prototype = Object.create(c.prototype)),
    (u.prototype.check = function () {
      this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        (this.img.src = this.url);
      var t21 = this.getIsImageComplete();
      t21 &&
        (this.confirm(this.img.naturalWidth !== 0, "naturalWidth"),
        this.unbindEvents());
    }),
    (u.prototype.unbindEvents = function () {
      this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this);
    }),
    (u.prototype.confirm = function (t21, e2) {
      (this.isLoaded = t21),
        this.emitEvent("progress", [this, this.element, e2]);
    }),
    (l.makeJQueryPlugin = function (t21) {
      (t21 = t21 || e.jQuery),
        t21 &&
          ((s = t21),
          (s.fn.imagesLoaded = function (t22, e2) {
            var i2 = new l(this, t22, e2);
            return i2.jqDeferred.promise(s(this));
          }));
    }),
    l.makeJQueryPlugin(),
    l
  );
});
/*!
 * Flickity imagesLoaded v2.0.0
 * enables imagesLoaded option for Flickity
 */ (function (i, n) {
  typeof define == "function" && define.amd
    ? define(
        ["flickity/js/index", "imagesloaded/imagesloaded"],
        function (t21, e) {
          return n(i, t21, e);
        }
      )
    : typeof module == "object" && module.exports
    ? (module.exports = n(i, require("flickity"), require("imagesloaded")))
    : (i.Flickity = n(i, i.Flickity, i.imagesLoaded));
})(window, function (e, i, s) {
  "use strict";
  i.createMethods.push("_createImagesLoaded");
  var n = i.prototype;
  return (
    (n._createImagesLoaded = function () {
      this.on("activate", this.imagesLoaded);
    }),
    (n.imagesLoaded = function () {
      if (!this.options.imagesLoaded) return;
      var n2 = this;
      function t21(t22, e2) {
        var i2 = n2.getParentCell(e2.img);
        n2.cellSizeChange(i2 && i2.element),
          n2.options.freeScroll || n2.positionSliderAtSelected();
      }
      s(this.slider).on("progress", t21);
    }),
    i
  );
});
//# sourceMappingURL=/s/files/1/0727/6027/t/20/assets/flikity.js.map?v=1696687014
