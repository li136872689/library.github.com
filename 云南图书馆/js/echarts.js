﻿! function(t, e) {
	"function" == typeof define && define.amd ? define([], e) : "object" == typeof module && module.exports ? module.exports = e() : t.echarts = e()
}(this, function() {
	var t, e;
	! function() {
		function i(t, e) {
			if (!e) return t;
			if (0 === t.indexOf(".")) {
				var i = e.split("/"),
					n = t.split("/"),
					r = i.length - 1,
					a = n.length,
					o = 0,
					s = 0;
				t: for (var l = 0; a > l; l++) switch (n[l]) {
					case "..":
						if (!(r > o)) break t;
						o++, s++;
						break;
					case ".":
						s++;
						break;
					default:
						break t
				}
				return i.length = r - o, n = n.slice(s), i.concat(n).join("/")
			}
			return t
		}

		function n(t) {
			function e(e, o) {
				if ("string" == typeof e) {
					var s = n[e];
					return s || (s = a(i(e, t)), n[e] = s), s
				}
				e instanceof Array && (o = o || function() {}, o.apply(this, r(e, o, t)))
			}
			var n = {};
			return e
		}

		function r(e, n, r) {
			for (var s = [], l = o[r], c = 0, u = Math.min(e.length, n.length); u > c; c++) {
				var h, d = i(e[c], r);
				switch (d) {
					case "require":
						h = l && l.require || t;
						break;
					case "exports":
						h = l.exports;
						break;
					case "module":
						h = l;
						break;
					default:
						h = a(d)
				}
				s.push(h)
			}
			return s
		}

		function a(t) {
			var e = o[t];
			if (!e) throw new Error("No " + t);
			if (!e.defined) {
				var i = e.factory,
					n = i.apply(this, r(e.deps || [], i, t));
				"undefined" != typeof n && (e.exports = n), e.defined = 1
			}
			return e.exports
		}
		var o = {};
		e = function(t, e, i) {
			if (2 === arguments.length && (i = e, e = [], "function" != typeof i)) {
				var r = i;
				i = function() {
					return r
				}
			}
			o[t] = {
				id: t,
				deps: e,
				factory: i,
				defined: 0,
				exports: {},
				require: n(t)
			}
		}, t = n("")
	}();
	var i = "../../visual/VisualMapping",
		n = "categories",
		r = "reverse",
		a = "eachNode",
		o = "_controller",
		s = "enable",
		l = "roamDetail",
		c = "layout",
		u = "itemGap",
		h = "formatTooltip",
		d = "orient",
		f = "padding",
		p = "../../util/format",
		v = "legendDataProvider",
		m = "$superApply",
		g = "selected",
		y = "single",
		x = "axisLine",
		_ = "axisTick",
		w = "label.emphasis",
		b = "itemStyle.normal",
		M = "itemStyle.emphasis",
		S = "label.normal",
		A = "../../echarts",
		C = "../../model/Model",
		T = "cartesian2d",
		k = "getBoxLayoutParams",
		L = "getRect",
		D = "../../coord/axisHelper",
		I = "../../util/layout",
		P = "../../model/Component",
		z = "axisLabel",
		V = "coordToData",
		R = "dataToCoord",
		O = "getFormattedLabels",
		E = "createScaleByModel",
		N = "interval",
		B = "splitNumber",
		G = "boundaryGap",
		Z = "niceScaleExtent",
		F = "getLabel",
		H = "getTicks",
		W = "setExtent",
		q = "unionExtent",
		U = "../layout/points",
		j = "../visual/symbol",
		X = "../echarts",
		Y = "getLineStyle",
		$ = "lineStyle.normal",
		K = "_symbolDraw",
		J = "inverse",
		Q = "getAxis",
		tt = "getBandWidth",
		et = "onBand",
		it = "../../view/Chart",
		nt = "../helper/SymbolDraw",
		rt = "dataToPoint",
		at = "getExtent",
		ot = "getOtherAxis",
		st = "getBaseAxis",
		lt = "execute",
		ct = "getFormattedLabel",
		ut = "getItemStyle",
		ht = "circle",
		dt = "symbol",
		ft = "symbolSize",
		pt = "createSymbol",
		vt = "updateData",
		mt = "../../util/number",
		gt = "../../util/graphic",
		yt = "../../util/symbol",
		xt = "setColor",
		_t = "../../model/Series",
		wt = "../helper/createListFromArray",
		bt = "getCategories",
		Mt = "category",
		St = "coordinateSystem",
		At = "../../util/model",
		Ct = "../../data/helper/completeDimensions",
		Tt = "../../data/List",
		kt = "setItemGraphicEl",
		Lt = "getItemVisual",
		Dt = "setItemLayout",
		It = "getItemLayout",
		Pt = "getLayout",
		zt = "setLayout",
		Vt = "getVisual",
		Rt = "mapArray",
		Ot = "filterSelf",
		Et = "getSum",
		Nt = "getDataExtent",
		Bt = "getValues",
		Gt = "initData",
		Zt = "dimensions",
		Ft = "extendComponentView",
		Ht = "extendSeriesModel",
		Wt = "extendComponentModel",
		qt = "extendChartView",
		Ut = "registerVisualCoding",
		jt = "registerLayout",
		Xt = "registerAction",
		Yt = "registerProcessor",
		$t = "registerPreprocessor",
		Kt = "hostModel",
		Jt = "downplay",
		Qt = "highlight",
		te = "eachComponent",
		ee = "_model",
		ie = "itemStyle.normal.color",
		ne = "scatter",
		re = "dataZoom",
		ae = "legend",
		oe = "itemStyle",
		se = "lineStyle",
		le = "eachSeries",
		ce = "eachSeriesByType",
		ue = "setItemVisual",
		he = "isSeriesFiltered",
		de = "setVisual",
		fe = "dispose",
		pe = "canvasSupported",
		ve = "clientHeight",
		me = "backgroundColor",
		ge = "appendChild",
		ye = "innerHTML",
		xe = "intersect",
		_e = "resize",
		we = "update",
		be = "zlevel",
		Me = "silent",
		Se = "getDisplayList",
		Ae = "storage",
		Ce = "parentNode",
		Te = "offsetY",
		ke = "offsetX",
		Le = "mouseup",
		De = "mousemove",
		Ie = "mousedown",
		Pe = "zrender/core/event",
		ze = "zrender/core/env",
		Ve = "initProps",
		Re = "updateProps",
		Oe = "animateTo",
		Ee = "getTextColor",
		Ne = "setText",
		Be = "mouseout",
		Ge = "mouseover",
		Ze = "setHoverStyle",
		Fe = "hoverStyle",
		He = "setStyle",
		We = "subPixelOptimizeRect",
		qe = "extendShape",
		Ue = "Polyline",
		je = "Polygon",
		Xe = "Sector",
		Ye = "Circle",
		$e = "offset",
		Ke = "points",
		Je = "clockwise",
		Qe = "endAngle",
		ti = "startAngle",
		ei = "setData",
		ii = "setShape",
		ni = "restore",
		ri = "buildPath",
		ai = "zrender/graphic/Path",
		oi = "MAX_VALUE",
		si = "closePath",
		li = "bezierCurveTo",
		ci = "lineTo",
		ui = "moveTo",
		hi = "beginPath",
		di = "quadraticAt",
		fi = "contain",
		pi = "textBaseline",
		vi = "textAlign",
		mi = "textPosition",
		gi = "eachItemGraphicEl",
		yi = "indexOfName",
		xi = "getItemGraphicEl",
		_i = "dataIndex",
		wi = "trigger",
		bi = "render",
		Mi = "removeAll",
		Si = "updateLayout",
		Ai = "invisible",
		Ci = "traverse",
		Ti = "delFromMap",
		ki = "addToMap",
		Li = "remove",
		Di = "__dirty",
		Ii = "refresh",
		Pi = "ignore",
		zi = "draggable",
		Vi = "animate",
		Ri = "stopAnimation",
		Oi = "linear",
		Ei = "animation",
		Ni = "zrender/tool/color",
		Bi = "target",
		Gi = "transformCoordToLocal",
		Zi = "rotate",
		Fi = "invTransform",
		Hi = "getLocalTransform",
		Wi = "parent",
		qi = "updateTransform",
		Ui = "transform",
		ji = "origin",
		Xi = "rotation",
		Yi = "zrender/mixin/Eventful",
		$i = "<br />",
		Ki = "addCommas",
		Ji = "encodeHTML",
		Qi = "formatter",
		tn = "getDataParams",
		en = "getItemModel",
		nn = "getName",
		rn = "getRawIndex",
		an = "getRawValue",
		on = "ordinal",
		sn = "getData",
		ln = "seriesIndex",
		cn = "createDataFormatModel",
		un = "normal",
		hn = "emphasis",
		dn = "defaultEmphasis",
		fn = "normalizeToArray",
		pn = "axisIndex",
		vn = "radius",
		mn = "getComponent",
		gn = "register",
		yn = "dispatchAction",
		xn = "getHeight",
		_n = "getWidth",
		wn = "getDom",
		bn = "splice",
		Mn = "findComponents",
		Sn = "isString",
		An = "series",
		Cn = "timeline",
		Tn = "mergeOption",
		kn = "resetOption",
		Ln = "isObject",
		Dn = "mergeDefaultAndTheme",
		In = "positionGroup",
		Pn = "margin",
		zn = "getLayoutRect",
		Vn = "normalizeCssArray",
		Rn = "vertical",
		On = "horizontal",
		En = "childAt",
		Nn = "position",
		Bn = "eachChild",
		Gn = "toUpperCase",
		Zn = "toLowerCase",
		Fn = "getPixelPrecision",
		Hn = "toFixed",
		Wn = "parsePercent",
		qn = "isArray",
		Un = "linearMap",
		jn = "replace",
		Xn = "registerSubTypeDefaulter",
		Yn = "option",
		$n = "parentModel",
		Kn = "../util/clazz",
		Jn = "borderWidth",
		Qn = "borderColor",
		tr = "baseline",
		er = "getFont",
		ir = "getBoundingRect",
		nr = "textStyle",
		rr = "getModel",
		ar = "ecModel",
		or = "substr",
		sr = "defaults",
		lr = "inside",
		cr = "center",
		ur = "middle",
		hr = "bottom",
		dr = "../core/BoundingRect",
		fr = "../core/util",
		pr = "zrender/contain/text",
		vr = "translate",
		mr = "create",
		gr = "height",
		yr = "applyTransform",
		xr = "zrender/core/BoundingRect",
		_r = "zrender/core/matrix",
		wr = "distance",
		br = "undefined",
		Mr = "zrender/core/vector",
		Sr = "shadowColor",
		Ar = "shadowOffsetX",
		Cr = "shadowBlur",
		Tr = "opacity",
		kr = "stroke",
		Lr = "lineWidth",
		Dr = "getShallow",
		Ir = "getClass",
		Pr = "enableClassManagement",
		zr = "inherits",
		Vr = "extend",
		Rr = "enableClassExtend",
		Or = "parseClassType",
		Er = "function",
		Nr = "concat",
		Br = "number",
		Gr = "string",
		Zr = "indexOf",
		Fr = "getContext",
		Hr = "canvas",
		Wr = "createElement",
		qr = "length",
		Ur = "object",
		jr = "reduce",
		Xr = "filter",
		Yr = "zrender/core/util",
		$r = "prototype",
		Kr = "require";
	e("zrender/graphic/Gradient", [Kr], function(t) {
		var e = function(t) {
			this.colorStops = t || []
		};
		return e[$r] = {
			constructor: e,
			addColorStop: function(t, e) {
				this.colorStops.push({
					offset: t,
					color: e
				})
			}
		}, e
	}), e(Yr, [Kr, "../graphic/Gradient"], function(t) {
		function e(t) {
			if (typeof t == Ur && null !== t) {
				var i = t;
				if (t instanceof Array) {
					i = [];
					for (var n = 0, r = t[qr]; r > n; n++) i[n] = e(t[n])
				} else if (!M(t) && !S(t)) {
					i = {};
					for (var a in t) t.hasOwnProperty(a) && (i[a] = e(t[a]))
				}
				return i
			}
			return t
		}

		function i(t, n, r) {
			if (!b(n) || !b(t)) return r ? e(n) : t;
			for (var a in n)
				if (n.hasOwnProperty(a)) {
					var o = t[a],
						s = n[a];
					!b(s) || !b(o) || x(s) || x(o) || S(s) || S(o) || M(s) || M(o) ? !r && a in t || (t[a] = e(n[a], !0)) : i(o, s, r)
				}
			return t
		}

		function n(t, e) {
			for (var n = t[0], r = 1, a = t[qr]; a > r; r++) n = i(n, t[r], e);
			return n
		}

		function r(t, e) {
			for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
			return t
		}

		function a(t, e, i) {
			for (var n in e) e.hasOwnProperty(n) && (i ? null != e[n] : null == t[n]) && (t[n] = e[n]);
			return t
		}

		function o() {
			return document[Wr](Hr)
		}

		function s() {
			return k || (k = N.createCanvas()[Fr]("2d")), k
		}

		function l(t, e) {
			if (t) {
				if (t[Zr]) return t[Zr](e);
				for (var i = 0, n = t[qr]; n > i; i++)
					if (t[i] === e) return i
			}
			return -1
		}

		function c(t, e) {
			function i() {}
			var n = t[$r];
			i[$r] = e[$r], t[$r] = new i;
			for (var r in n) t[$r][r] = n[r];
			t[$r].constructor = t, t.superClass = e
		}

		function u(t, e, i) {
			t = $r in t ? t[$r] : t, e = $r in e ? e[$r] : e, a(t, e, i)
		}

		function h(t) {
			return t ? typeof t == Gr ? !1 : typeof t[qr] == Br : void 0
		}

		function d(t, e, i) {
			if (t && e)
				if (t.forEach && t.forEach === z) t.forEach(e, i);
				else if (t[qr] === +t[qr])
				for (var n = 0, r = t[qr]; r > n; n++) e.call(i, t[n], n, t);
			else
				for (var a in t) t.hasOwnProperty(a) && e.call(i, t[a], a, t)
		}

		function f(t, e, i) {
			if (t && e) {
				if (t.map && t.map === O) return t.map(e, i);
				for (var n = [], r = 0, a = t[qr]; a > r; r++) n.push(e.call(i, t[r], r, t));
				return n
			}
		}

		function p(t, e, i, n) {
			if (t && e) {
				if (t[jr] && t[jr] === E) return t[jr](e, i, n);
				for (var r = 0, a = t[qr]; a > r; r++) i = e.call(n, i, t[r], r, t);
				return i
			}
		}

		function v(t, e, i) {
			if (t && e) {
				if (t[Xr] && t[Xr] === V) return t[Xr](e, i);
				for (var n = [], r = 0, a = t[qr]; a > r; r++) e.call(i, t[r], r, t) && n.push(t[r]);
				return n
			}
		}

		function m(t, e, i) {
			if (t && e)
				for (var n = 0, r = t[qr]; r > n; n++)
					if (e.call(i, t[n], n, t)) return t[n]
		}

		function g(t, e) {
			var i = R.call(arguments, 2);
			return function() {
				return t.apply(e, i[Nr](R.call(arguments)))
			}
		}

		function y(t) {
			var e = R.call(arguments, 1);
			return function() {
				return t.apply(this, e[Nr](R.call(arguments)))
			}
		}

		function x(t) {
			return "[object Array]" === I.call(t)
		}

		function _(t) {
			return typeof t === Er
		}

		function w(t) {
			return "[object String]" === I.call(t)
		}

		function b(t) {
			var e = typeof t;
			return e === Er || !!t && e == Ur
		}

		function M(t) {
			return !!D[I.call(t)] || t instanceof L
		}

		function S(t) {
			return t && 1 === t.nodeType && typeof t.nodeName == Gr
		}

		function A(t) {
			for (var e = 0, i = arguments[qr]; i > e; e++)
				if (null != arguments[e]) return arguments[e]
		}

		function C() {
			return Function.call.apply(R, arguments)
		}

		function T(t, e) {
			if (!t) throw new Error(e)
		}
		var k, L = t("../graphic/Gradient"),
			D = {
				"[object Function]": 1,
				"[object RegExp]": 1,
				"[object Date]": 1,
				"[object Error]": 1,
				"[object CanvasGradient]": 1
			},
			I = Object[$r].toString,
			P = Array[$r],
			z = P.forEach,
			V = P[Xr],
			R = P.slice,
			O = P.map,
			E = P[jr],
			N = {
				inherits: c,
				mixin: u,
				clone: e,
				merge: i,
				mergeAll: n,
				extend: r,
				defaults: a,
				getContext: s,
				createCanvas: o,
				indexOf: l,
				slice: C,
				find: m,
				isArrayLike: h,
				each: d,
				map: f,
				reduce: p,
				filter: v,
				bind: g,
				curry: y,
				isArray: x,
				isString: w,
				isObject: b,
				isFunction: _,
				isBuildInObject: M,
				isDom: S,
				retrieve: A,
				assert: T,
				noop: function() {}
			};
		return N
	}), e("echarts/util/clazz", [Kr, Yr], function(t) {
		function e(t, e) {
			for (var i, n = t.constructor, r = t[e];
				(n = n.$superClass) && (i = n[$r][e]) && i === r;);
			return i
		}
		var i = t(Yr),
			n = {},
			r = ".",
			a = "___EC__COMPONENT__CONTAINER___",
			o = n[Or] = function(t) {
				var e = {
					main: "",
					sub: ""
				};
				return t && (t = t.split(r), e.main = t[0] || "", e.sub = t[1] || ""), e
			};
		return n[Rr] = function(t, n) {
			t[Vr] = function(r) {
				var a = function() {
					n && n.apply(this, arguments), t.apply(this, arguments)
				};
				return i[Vr](a[$r], i[Vr]({
					$superCall: function(t) {
						var n = i.slice(arguments, 1);
						return e(this, t).apply(this, n)
					},
					$superApply: function(t, i) {
						return e(this, t).apply(this, i)
					}
				}, r)), a[Vr] = this[Vr], i[zr](a, this), a.$superClass = this, a
			}
		}, n[Pr] = function(t, e) {
			function n(t) {
				var e = r[t.main];
				return e && e[a] || (e = r[t.main] = {}, e[a] = !0), e
			}
			e = e || {};
			var r = {};
			if (t.registerClass = function(t, e) {
					if (e)
						if (e = o(e), e.sub) {
							if (e.sub !== a) {
								var i = n(e);
								i[e.sub] = t
							}
						} else {
							if (r[e.main]) throw new Error(e.main + "exists");
							r[e.main] = t
						}
					return t
				}, t[Ir] = function(t, e, i) {
					var n = r[t];
					if (n && n[a] && (n = e ? n[e] : null), i && !n) throw new Error("Component " + t + "." + (e || "") + " not exists");
					return n
				}, t.getClassesByMainType = function(t) {
					t = o(t);
					var e = [],
						n = r[t.main];
					return n && n[a] ? i.each(n, function(t, i) {
						i !== a && e.push(t)
					}) : e.push(n), e
				}, t.hasClass = function(t) {
					return t = o(t), !!r[t.main]
				}, t.getAllClassMainTypes = function() {
					var t = [];
					return i.each(r, function(e, i) {
						t.push(i)
					}), t
				}, t.hasSubTypes = function(t) {
					t = o(t);
					var e = r[t.main];
					return e && e[a]
				}, t[Or] = o, e.registerWhenExtend) {
				var s = t[Vr];
				s && (t[Vr] = function(e) {
					var i = s.call(this, e);
					return t.registerClass(i, e.type)
				})
			}
			return t
		}, n.setReadOnly = function(t, e) {}, n
	}), e("echarts/model/mixin/makeStyleMapper", [Kr, Yr], function(t) {
		var e = t(Yr);
		return function(t) {
			for (var i = 0; i < t[qr]; i++) t[i][1] || (t[i][1] = t[i][0]);
			return function(i) {
				for (var n = {}, r = 0; r < t[qr]; r++) {
					var a = t[r][1];
					if (!(i && e[Zr](i, a) >= 0)) {
						var o = this[Dr](a);
						null != o && (n[t[r][0]] = o)
					}
				}
				return n
			}
		}
	}), e("echarts/model/mixin/lineStyle", [Kr, "./makeStyleMapper"], function(t) {
		var e = t("./makeStyleMapper")([
			[Lr, "width"],
			[kr, "color"],
			[Tr],
			[Cr],
			[Ar],
			["shadowOffsetY"],
			[Sr]
		]);
		return {
			getLineStyle: function(t) {
				var i = e.call(this, t),
					n = this.getLineDash();
				return n && (i.lineDash = n), i
			},
			getLineDash: function() {
				var t = this.get("type");
				return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1]
			}
		}
	}), e("echarts/model/mixin/areaStyle", [Kr, "./makeStyleMapper"], function(t) {
		return {
			getAreaStyle: t("./makeStyleMapper")([
				["fill", "color"],
				[Cr],
				[Ar],
				["shadowOffsetY"],
				[Tr],
				[Sr]
			])
		}
	}), e(Mr, [], function() {
		var t = typeof Float32Array === br ? Array : Float32Array,
			e = {
				create: function(e, i) {
					var n = new t(2);
					return n[0] = e || 0, n[1] = i || 0, n
				},
				copy: function(t, e) {
					return t[0] = e[0], t[1] = e[1], t
				},
				clone: function(e) {
					var i = new t(2);
					return i[0] = e[0], i[1] = e[1], i
				},
				set: function(t, e, i) {
					return t[0] = e, t[1] = i, t
				},
				add: function(t, e, i) {
					return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t
				},
				scaleAndAdd: function(t, e, i, n) {
					return t[0] = e[0] + i[0] * n, t[1] = e[1] + i[1] * n, t
				},
				sub: function(t, e, i) {
					return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t
				},
				len: function(t) {
					return Math.sqrt(this.lenSquare(t))
				},
				lenSquare: function(t) {
					return t[0] * t[0] + t[1] * t[1]
				},
				mul: function(t, e, i) {
					return t[0] = e[0] * i[0], t[1] = e[1] * i[1], t
				},
				div: function(t, e, i) {
					return t[0] = e[0] / i[0], t[1] = e[1] / i[1], t
				},
				dot: function(t, e) {
					return t[0] * e[0] + t[1] * e[1]
				},
				scale: function(t, e, i) {
					return t[0] = e[0] * i, t[1] = e[1] * i, t
				},
				normalize: function(t, i) {
					var n = e.len(i);
					return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = i[0] / n, t[1] = i[1] / n), t
				},
				distance: function(t, e) {
					return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
				},
				distanceSquare: function(t, e) {
					return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
				},
				negate: function(t, e) {
					return t[0] = -e[0], t[1] = -e[1], t
				},
				lerp: function(t, e, i, n) {
					return t[0] = e[0] + n * (i[0] - e[0]), t[1] = e[1] + n * (i[1] - e[1]), t
				},
				applyTransform: function(t, e, i) {
					var n = e[0],
						r = e[1];
					return t[0] = i[0] * n + i[2] * r + i[4], t[1] = i[1] * n + i[3] * r + i[5], t
				},
				min: function(t, e, i) {
					return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t
				},
				max: function(t, e, i) {
					return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t
				}
			};
		return e[qr] = e.len, e.lengthSquare = e.lenSquare, e.dist = e[wr], e.distSquare = e.distanceSquare, e
	}), e(_r, [], function() {
		var t = typeof Float32Array === br ? Array : Float32Array,
			e = {
				create: function() {
					var i = new t(6);
					return e.identity(i), i
				},
				identity: function(t) {
					return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
				},
				copy: function(t, e) {
					return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
				},
				mul: function(t, e, i) {
					var n = e[0] * i[0] + e[2] * i[1],
						r = e[1] * i[0] + e[3] * i[1],
						a = e[0] * i[2] + e[2] * i[3],
						o = e[1] * i[2] + e[3] * i[3],
						s = e[0] * i[4] + e[2] * i[5] + e[4],
						l = e[1] * i[4] + e[3] * i[5] + e[5];
					return t[0] = n, t[1] = r, t[2] = a, t[3] = o, t[4] = s, t[5] = l, t
				},
				translate: function(t, e, i) {
					return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + i[0], t[5] = e[5] + i[1], t
				},
				rotate: function(t, e, i) {
					var n = e[0],
						r = e[2],
						a = e[4],
						o = e[1],
						s = e[3],
						l = e[5],
						c = Math.sin(i),
						u = Math.cos(i);
					return t[0] = n * u + o * c, t[1] = -n * c + o * u, t[2] = r * u + s * c, t[3] = -r * c + u * s, t[4] = u * a + c * l, t[5] = u * l - c * a, t
				},
				scale: function(t, e, i) {
					var n = i[0],
						r = i[1];
					return t[0] = e[0] * n, t[1] = e[1] * r, t[2] = e[2] * n, t[3] = e[3] * r, t[4] = e[4] * n, t[5] = e[5] * r, t
				},
				invert: function(t, e) {
					var i = e[0],
						n = e[2],
						r = e[4],
						a = e[1],
						o = e[3],
						s = e[5],
						l = i * o - a * n;
					return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -n * l, t[3] = i * l, t[4] = (n * s - o * r) * l, t[5] = (a * r - i * s) * l, t) : null
				}
			};
		return e
	}), e(xr, [Kr, "./vector", "./matrix"], function(t) {
		function e(t, e, i, n) {
			this.x = t, this.y = e, this.width = i, this[gr] = n
		}
		var i = t("./vector"),
			n = t("./matrix"),
			r = i[yr],
			a = Math.min,
			o = Math.abs,
			s = Math.max;
		return e[$r] = {
			constructor: e,
			union: function(t) {
				var e = a(t.x, this.x),
					i = a(t.y, this.y);
				this.width = s(t.x + t.width, this.x + this.width) - e, this[gr] = s(t.y + t[gr], this.y + this[gr]) - i, this.x = e, this.y = i
			},
			applyTransform: function() {
				var t = [],
					e = [];
				return function(i) {
					i && (t[0] = this.x, t[1] = this.y, e[0] = this.x + this.width, e[1] = this.y + this[gr], r(t, t, i), r(e, e, i), this.x = a(t[0], e[0]), this.y = a(t[1], e[1]), this.width = o(e[0] - t[0]), this[gr] = o(e[1] - t[1]))
				}
			}(),
			calculateTransform: function(t) {
				var e = this,
					i = t.width / e.width,
					r = t[gr] / e[gr],
					a = n[mr]();
				return n[vr](a, a, [-e.x, -e.y]), n.scale(a, a, [i, r]), n[vr](a, a, [t.x, t.y]), a
			},
			intersect: function(t) {
				var e = this,
					i = e.x,
					n = e.x + e.width,
					r = e.y,
					a = e.y + e[gr],
					o = t.x,
					s = t.x + t.width,
					l = t.y,
					c = t.y + t[gr];
				return !(o > n || i > s || l > a || r > c)
			},
			contain: function(t, e) {
				var i = this;
				return t >= i.x && t <= i.x + i.width && e >= i.y && e <= i.y + i[gr]
			},
			clone: function() {
				return new e(this.x, this.y, this.width, this[gr])
			},
			copy: function(t) {
				this.x = t.x, this.y = t.y, this.width = t.width, this[gr] = t[gr]
			}
		}, e
	}), e(pr, [Kr, fr, dr], function(t) {
		function e(t, e) {
			var i = t + ":" + e;
			if (s[i]) return s[i];
			for (var n = (t + "").split("\n"), r = 0, a = 0, o = n[qr]; o > a; a++) r = Math.max(d.measureText(n[a], e).width, r);
			return l > c && (l = 0, s = {}), l++, s[i] = r, r
		}

		function i(t, i, n, r) {
			var a = ((t || "") + "").split("\n")[qr],
				o = e(t, i),
				s = e("鍥�", i),
				l = a * s,
				c = new h(0, 0, o, l);
			switch (c.lineHeight = s, r) {
				case hr:
				case "alphabetic":
					c.y -= s;
					break;
				case ur:
					c.y -= s / 2
			}
			switch (n) {
				case "end":
				case "right":
					c.x -= c.width;
					break;
				case cr:
					c.x -= c.width / 2
			}
			return c
		}

		function n(t, e, i, n) {
			var r = e.x,
				a = e.y,
				o = e[gr],
				s = e.width,
				l = i[gr],
				c = o / 2 - l / 2,
				u = "left";
			switch (t) {
				case "left":
					r -= n, a += c, u = "right";
					break;
				case "right":
					r += n + s, a += c, u = "left";
					break;
				case "top":
					r += s / 2, a -= n + l, u = cr;
					break;
				case hr:
					r += s / 2, a += o + n, u = cr;
					break;
				case lr:
					r += s / 2, a += c, u = cr;
					break;
				case "insideLeft":
					r += n, a += c, u = "left";
					break;
				case "insideRight":
					r += s - n, a += c, u = "right";
					break;
				case "insideTop":
					r += s / 2, a += n, u = cr;
					break;
				case "insideBottom":
					r += s / 2, a += o - l - n, u = cr;
					break;
				case "insideTopLeft":
					r += n, a += n, u = "left";
					break;
				case "insideTopRight":
					r += s - n, a += n, u = "right";
					break;
				case "insideBottomLeft":
					r += n, a += o - l - n;
					break;
				case "insideBottomRight":
					r += s - n, a += o - l - n, u = "right"
			}
			return {
				x: r,
				y: a,
				textAlign: u,
				textBaseline: "top"
			}
		}

		function r(t, i, n, r) {
			if (!n) return "";
			r = u[sr]({
				ellipsis: "...",
				minCharacters: 3,
				maxIterations: 3,
				cnCharWidth: e("鍥�", i),
				ascCharWidth: e("a", i)
			}, r, !0), n -= e(r.ellipsis);
			for (var o = (t + "").split("\n"), s = 0, l = o[qr]; l > s; s++) o[s] = a(o[s], i, n, r);
			return o.join("\n")
		}

		function a(t, i, n, r) {
			for (var a = 0;; a++) {
				var s = e(t, i);
				if (n > s || a >= r.maxIterations) {
					t += r.ellipsis;
					break
				}
				var l = 0 === a ? o(t, n, r) : Math.floor(t[qr] * n / s);
				if (l < r.minCharacters) {
					t = "";
					break
				}
				t = t[or](0, l)
			}
			return t
		}

		function o(t, e, i) {
			for (var n = 0, r = 0, a = t[qr]; a > r && e > n; r++) {
				var o = t.charCodeAt(r);
				n += o >= 0 && 127 >= o ? i.ascCharWidth : i.cnCharWidth
			}
			return r
		}
		var s = {},
			l = 0,
			c = 5e3,
			u = t(fr),
			h = t(dr),
			d = {
				getWidth: e,
				getBoundingRect: i,
				adjustTextPositionOnRect: n,
				ellipsis: r,
				measureText: function(t, e) {
					var i = u[Fr]();
					return i.font = e, i.measureText(t)
				}
			};
		return d
	}), e("echarts/model/mixin/textStyle", [Kr, pr], function(t) {
		function e(t, e) {
			return t && t[Dr](e)
		}
		var i = t(pr);
		return {
			getTextColor: function() {
				var t = this[ar];
				return this[Dr]("color") || t && t.get("textStyle.color")
			},
			getFont: function() {
				var t = this[ar],
					i = t && t[rr](nr);
				return [this[Dr]("fontStyle") || e(i, "fontStyle"), this[Dr]("fontWeight") || e(i, "fontWeight"), (this[Dr]("fontSize") || e(i, "fontSize") || 12) + "px", this[Dr]("fontFamily") || e(i, "fontFamily") || "sans-serif"].join(" ")
			},
			getTextRect: function(t) {
				var e = this.get(nr) || {};
				return i[ir](t, this[er](), e.align, e[tr])
			},
			ellipsis: function(t, e, n) {
				return i.ellipsis(t, this[er](), e, n)
			}
		}
	}), e("echarts/model/mixin/itemStyle", [Kr, "./makeStyleMapper"], function(t) {
		return {
			getItemStyle: t("./makeStyleMapper")([
				["fill", "color"],
				[kr, Qn],
				[Lr, Jn],
				[Tr],
				[Cr],
				[Ar],
				["shadowOffsetY"],
				[Sr]
			])
		}
	}), e("echarts/model/Model", [Kr, Yr, Kn, "./mixin/lineStyle", "./mixin/areaStyle", "./mixin/textStyle", "./mixin/itemStyle"], function(t) {
		function e(t, e, i) {
			this[$n] = e || null, this[ar] = i || null, this[Yn] = t, this.init.apply(this, arguments)
		}
		var i = t(Yr),
			n = t(Kn);
		e[$r] = {
			constructor: e,
			init: function(t) {},
			mergeOption: function(t) {
				i.merge(this[Yn], t, !0)
			},
			get: function(t, e) {
				if (!t) return this[Yn];
				typeof t === Gr && (t = t.split("."));
				for (var i = this[Yn], n = this[$n], r = 0; r < t[qr] && (i = i && typeof i === Ur ? i[t[r]] : null, null != i); r++);
				return null == i && n && !e && (i = n.get(t)), i
			},
			getShallow: function(t, e) {
				var i = this[Yn],
					n = i && i[t],
					r = this[$n];
				return null == n && r && !e && (n = r[Dr](t)), n
			},
			getModel: function(t, i) {
				var n = this.get(t, !0),
					r = this[$n],
					a = new e(n, i || r && r[rr](t), this[ar]);
				return a
			},
			isEmpty: function() {
				return null == this[Yn]
			},
			restoreData: function() {},
			clone: function() {
				var t = this.constructor;
				return new t(i.clone(this[Yn]))
			},
			setReadOnly: function(t) {
				n.setReadOnly(this, t)
			}
		}, n[Rr](e);
		var r = i.mixin;
		return r(e, t("./mixin/lineStyle")), r(e, t("./mixin/areaStyle")), r(e, t("./mixin/textStyle")), r(e, t("./mixin/itemStyle")), e
	}), e("echarts/util/component", [Kr, Yr, "./clazz"], function(t) {
		var e = t(Yr),
			i = t("./clazz"),
			n = i[Or],
			r = 0,
			a = {},
			o = "_";
		return a.getUID = function(t) {
			return [t || "", r++, Math.random()].join(o)
		}, a.enableSubTypeDefaulter = function(t) {
			var e = {};
			return t[Xn] = function(t, i) {
				t = n(t), e[t.main] = i
			}, t.determineSubType = function(i, r) {
				var a = r.type;
				if (!a) {
					var o = n(i).main;
					t.hasSubTypes(i) && e[o] && (a = e[o](r))
				}
				return a
			}, t
		}, a.enableTopologicalTravel = function(t, i) {
			function n(t) {
				var n = {},
					o = [];
				return e.each(t, function(s) {
					var l = r(n, s),
						c = l.originalDeps = i(s),
						u = a(c, t);
					l.entryCount = u[qr], 0 === l.entryCount && o.push(s), e.each(u, function(t) {
						e[Zr](l.predecessor, t) < 0 && l.predecessor.push(t);
						var i = r(n, t);
						e[Zr](i.successor, t) < 0 && i.successor.push(s)
					})
				}), {
					graph: n,
					noEntryList: o
				}
			}

			function r(t, e) {
				return t[e] || (t[e] = {
					predecessor: [],
					successor: []
				}), t[e]
			}

			function a(t, i) {
				var n = [];
				return e.each(t, function(t) {
					e[Zr](i, t) >= 0 && n.push(t)
				}), n
			}
			t.topologicalTravel = function(t, i, r, a) {
				function o(t) {
					c[t].entryCount--, 0 === c[t].entryCount && u.push(t)
				}

				function s(t) {
					h[t] = !0, o(t)
				}
				if (t[qr]) {
					var l = n(i),
						c = l.graph,
						u = l.noEntryList,
						h = {};
					for (e.each(t, function(t) {
							h[t] = !0
						}); u[qr];) {
						var d = u.pop(),
							f = c[d],
							p = !!h[d];
						p && (r.call(a, d, f.originalDeps.slice()), delete h[d]), e.each(f.successor, p ? s : o)
					}
					e.each(h, function() {
						throw new Error("Circle dependency may exists")
					})
				}
			}
		}, a
	}), e("echarts/util/number", [Kr, Yr], function(t) {
		function e(t) {
			return t[jn](/^\s+/, "")[jn](/\s+$/, "")
		}
		var i = t(Yr),
			n = {},
			r = 1e-4;
		return n[Un] = function(t, e, r, a) {
			if (i[qn](t)) return i.map(t, function(t) {
				return n[Un](t, e, r, a)
			});
			var o = e[1] - e[0];
			if (0 === o) return (r[0] + r[1]) / 2;
			var s = (t - e[0]) / o;
			return a && (s = Math.min(Math.max(s, 0), 1)), s * (r[1] - r[0]) + r[0]
		}, n[Wn] = function(t, i) {
			switch (t) {
				case cr:
				case ur:
					t = "50%";
					break;
				case "left":
				case "top":
					t = "0%";
					break;
				case "right":
				case hr:
					t = "100%"
			}
			return typeof t === Gr ? e(t).match(/%$/) ? parseFloat(t) / 100 * i : parseFloat(t) : null == t ? NaN : +t
		}, n.round = function(t) {
			return +(+t)[Hn](12)
		}, n.asc = function(t) {
			return t.sort(function(t, e) {
				return t - e
			}), t
		}, n.getPrecision = function(t) {
			for (var e = 1, i = 0; Math.round(t * e) / e !== t;) e *= 10, i++;
			return i
		}, n[Fn] = function(t, e) {
			var i = Math.log,
				n = Math.LN10,
				r = Math.floor(i(t[1] - t[0]) / n),
				a = Math.round(i(Math.abs(e[1] - e[0])) / n);
			return Math.max(-r + a, 0)
		}, n.MAX_SAFE_INTEGER = 9007199254740991, n.remRadian = function(t) {
			var e = 2 * Math.PI;
			return (t % e + e) % e
		}, n.isRadianAroundZero = function(t) {
			return t > -r && r > t
		}, n.parseDate = function(t) {
			return t instanceof Date ? t : new Date(typeof t === Gr ? t[jn](/-/g, "/") : t)
		}, n
	}), e("echarts/util/format", [Kr, Yr, "./number"], function(t) {
		function e(t) {
			return isNaN(t) ? "-" : (t = (t + "").split("."), t[0][jn](/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t[qr] > 1 ? "." + t[1] : ""))
		}

		function i(t) {
			return t[Zn]()[jn](/-(.)/g, function(t, e) {
				return e[Gn]()
			})
		}

		function n(t) {
			var e = t[qr];
			return typeof t === Br ? [t, t, t, t] : 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
		}

		function r(t) {
			return String(t)[jn](/&/g, "&amp;")[jn](/</g, "&lt;")[jn](/>/g, "&gt;")[jn](/"/g, "&quot;")[jn](/'/g, "&#39;")
		}

		function a(t, e) {
			return "{" + t + (null == e ? "" : e) + "}"
		}

		function o(t, e) {
			c[qn](e) || (e = [e]);
			var i = e[qr];
			if (!i) return "";
			for (var n = e[0].$vars, r = 0; r < n[qr]; r++) {
				var o = h[r];
				t = t[jn](a(o), a(o, 0))
			}
			for (var s = 0; i > s; s++)
				for (var l = 0; l < n[qr]; l++) t = t[jn](a(h[l], s), e[s][n[l]]);
			return t
		}

		function s(t, e) {
			("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t = "MM-dd\nyyyy");
			var i = u.parseDate(e),
				n = i.getFullYear(),
				r = i.getMonth() + 1,
				a = i.getDate(),
				o = i.getHours(),
				s = i.getMinutes(),
				c = i.getSeconds();
			return t = t[jn]("MM", l(r))[Zn]()[jn]("yyyy", n)[jn]("yy", n % 100)[jn]("dd", l(a))[jn]("d", a)[jn]("hh", l(o))[jn]("h", o)[jn]("mm", l(s))[jn]("m", s)[jn]("ss", l(c))[jn]("s", c)
		}

		function l(t) {
			return 10 > t ? "0" + t : t
		}
		var c = t(Yr),
			u = t("./number"),
			h = ["a", "b", "c", "d", "e", "f", "g"];
		return {
			normalizeCssArray: n,
			addCommas: e,
			toCamelCase: i,
			encodeHTML: r,
			formatTpl: o,
			formatTime: s
		}
	}), e("echarts/util/layout", [Kr, Yr, xr, "./number", "./format"], function(t) {
		function e(t, e, i, n, r) {
			var a = 0,
				o = 0;
			null == n && (n = 1 / 0), null == r && (r = 1 / 0);
			var s = 0;
			e[Bn](function(l, c) {
				var u, h, d = l[Nn],
					f = l[ir](),
					p = e[En](c + 1),
					v = p && p[ir]();
				if (t === On) {
					var m = f.width + (v ? -v.x + f.x : 0);
					u = a + m, u > n || l.newline ? (a = 0, u = m, o += s + i, s = 0) : s = Math.max(s, f[gr])
				} else {
					var g = f[gr] + (v ? -v.y + f.y : 0);
					h = o + g, h > r || l.newline ? (a += s + i, o = 0, h = g, s = 0) : s = Math.max(s, f.width)
				}
				l.newline || (d[0] = a, d[1] = o, t === On ? a = u + i : o = h + i)
			})
		}
		var i = t(Yr),
			n = t(xr),
			r = t("./number"),
			a = t("./format"),
			o = r[Wn],
			s = i.each,
			l = {};
		return l.box = e, l.vbox = i.curry(e, Rn), l.hbox = i.curry(e, On), l.getAvailableSize = function(t, e, i) {
			var n = e.width,
				r = e[gr],
				s = o(t.x, n),
				l = o(t.y, r),
				c = o(t.x2, n),
				u = o(t.y2, r);
			return (isNaN(s) || isNaN(parseFloat(t.x))) && (s = 0), (isNaN(c) || isNaN(parseFloat(t.x2))) && (c = n), (isNaN(l) || isNaN(parseFloat(t.y))) && (l = 0), (isNaN(u) || isNaN(parseFloat(t.y2))) && (u = r), i = a[Vn](i || 0), {
				width: Math.max(c - s - i[1] - i[3], 0),
				height: Math.max(u - l - i[0] - i[2], 0)
			}
		}, l[zn] = function(t, e, i) {
			i = a[Vn](i || 0);
			var r = e.width,
				s = e[gr],
				l = o(t.left, r),
				c = o(t.top, s),
				u = o(t.right, r),
				h = o(t[hr], s),
				d = o(t.width, r),
				f = o(t[gr], s),
				p = i[2] + i[0],
				v = i[1] + i[3],
				m = t.aspect;
			switch (isNaN(d) && (d = r - u - v - l), isNaN(f) && (f = s - h - p - c), isNaN(d) && isNaN(f) && (m > r / s ? d = .8 * r : f = .8 * s), null != m && (isNaN(d) && (d = m * f), isNaN(f) && (f = d / m)), isNaN(l) && (l = r - u - d - v), isNaN(c) && (c = s - h - f - p), t.left || t.right) {
				case cr:
					l = r / 2 - d / 2 - i[3];
					break;
				case "right":
					l = r - d - v
			}
			switch (t.top || t[hr]) {
				case ur:
				case cr:
					c = s / 2 - f / 2 - i[0];
					break;
				case hr:
					c = s - f - p
			}
			var g = new n(l + i[3], c + i[0], d, f);
			return g[Pn] = i, g
		}, l[In] = function(t, e, n, r) {
			var a = t[ir]();
			e = i[Vr](i.clone(e), {
				width: a.width,
				height: a[gr]
			}), e = l[zn](e, n, r), t[Nn] = [e.x - a.x, e.y - a.y]
		}, l.mergeLayoutParam = function(t, e, i) {
			function n(n) {
				var o = {},
					l = 0,
					c = {},
					u = 0,
					h = i.ignoreSize ? 1 : 2;
				if (s(n, function(e) {
						c[e] = t[e]
					}), s(n, function(t) {
						r(e, t) && (o[t] = c[t] = e[t]), a(o, t) && l++, a(c, t) && u++
					}), u !== h && l) {
					if (h > u) {
						var d = 0;
						return s(n, function(t) {
							"auto" === c[t] && (h - u > d ? d++ : c[t] = null)
						}), c
					}
					if (l >= h) return o;
					for (var f = 0; f < n[qr]; f++) {
						var p = n[f];
						if (!r(o, p) && r(t, p)) {
							o[p] = t[p];
							break
						}
					}
					return o
				}
				return c
			}

			function r(t, e) {
				return t.hasOwnProperty(e)
			}

			function a(t, e) {
				return null != t[e] && "auto" !== t[e]
			}

			function o(t, e, i) {
				s(t, function(t) {
					e[t] = i[t]
				})
			}
			i = i || {};
			var l = ["width", "left", "right"],
				c = [gr, "top", hr],
				u = n(l),
				h = n(c);
			o(l, t, u), o(c, t, h)
		}, l.getLayoutParams = function(t) {
			var e = {};
			return t && s(["left", "right", "top", hr, "width", gr], function(i) {
				t.hasOwnProperty(i) && (e[i] = t[i])
			}), e
		}, l
	}), e("echarts/model/mixin/boxLayout", [Kr], function(t) {
		return {
			getBoxLayoutParams: function() {
				return {
					left: this.get("left"),
					top: this.get("top"),
					right: this.get("right"),
					bottom: this.get(hr),
					width: this.get("width"),
					height: this.get(gr)
				}
			}
		}
	}), e("echarts/model/Component", [Kr, "./Model", Yr, "../util/component", Kn, "../util/layout", "./mixin/boxLayout"], function(t) {
		function e(t) {
			var e = [];
			return n.each(l.getClassesByMainType(t), function(t) {
				r.apply(e, t[$r].dependencies || [])
			}), n.map(e, function(t) {
				return o[Or](t).main
			})
		}
		var i = t("./Model"),
			n = t(Yr),
			r = Array[$r].push,
			a = t("../util/component"),
			o = t(Kn),
			s = t("../util/layout"),
			l = i[Vr]({
				type: "component",
				id: "",
				name: "",
				mainType: "",
				subType: "",
				componentIndex: 0,
				defaultOption: null,
				ecModel: null,
				dependentModels: [],
				uid: null,
				layoutMode: null,
				init: function(t, e, i, n) {
					this[Dn](this[Yn], this[ar])
				},
				mergeDefaultAndTheme: function(t, e) {
					var i = this.layoutMode,
						r = i ? s.getLayoutParams(t) : {},
						a = e.getTheme();
					n.merge(t, a.get(this.mainType)), n.merge(t, this.getDefaultOption()), i && s.mergeLayoutParam(t, r, i)
				},
				mergeOption: function(t) {
					n.merge(this[Yn], t, !0);
					var e = this.layoutMode;
					e && s.mergeLayoutParam(this[Yn], t, e)
				},
				getDefaultOption: function() {
					if (!this.hasOwnProperty("__defaultOption")) {
						for (var t = [], e = this.constructor; e;) {
							var i = e[$r].defaultOption;
							i && t.push(i), e = e.superClass
						}
						for (var r = {}, a = t[qr] - 1; a >= 0; a--) r = n.merge(r, t[a], !0);
						this.__defaultOption = r
					}
					return this.__defaultOption
				}
			});
		return o[Rr](l, function(t, e, i, r) {
			n[Vr](this, r), this.uid = a.getUID("componentModel"), this.setReadOnly(["type", "id", "uid", "name", "mainType", "subType", "dependentModels", "componentIndex"])
		}), o[Pr](l, {
			registerWhenExtend: !0
		}), a.enableSubTypeDefaulter(l), a.enableTopologicalTravel(l, e), n.mixin(l, t("./mixin/boxLayout")), l
	}), e("echarts/model/globalDefault", [], function() {
		var t = "";
		return typeof navigator !== br && (t = navigator.platform || ""), {
			color: ["#c23531", "#314656", "#61a0a8", "#dd8668", "#91c7ae", "#6e7074", "#61a0a8", "#bda29a", "#44525d", "#c4ccd3"],
			grid: {},
			textStyle: {
				fontFamily: t.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
				fontSize: 12,
				fontStyle: "normal",
				fontWeight: "normal"
			},
			animation: !0,
			animationThreshold: 2e3,
			animationDuration: 1e3,
			animationDurationUpdate: 300,
			animationEasing: "exponentialOut",
			animationEasingUpdate: "cubicOut"
		}
	}), e("echarts/model/Global", [Kr, Yr, "./Model", "./Component", "./globalDefault"], function(t) {
		function e(t, e) {
			for (var i in e) x.hasClass(i) || (typeof e[i] === Ur ? t[i] = t[i] ? h.merge(t[i], e[i], !1) : h.clone(e[i]) : t[i] = e[i])
		}

		function i(t) {
			t = t, this[Yn] = {}, this._componentsMap = {}, this._seriesIndices = null, e(t, this._theme[Yn]), h.merge(t, _, !1), this[Tn](t)
		}

		function n(t, e) {
			h[qn](e) || (e = e ? [e] : []);
			var i = {};
			return f(e, function(e) {
				i[e] = (t[e] || []).slice()
			}), i
		}

		function r(t, e) {
			t = (t || []).slice();
			var i = [];
			return f(e, function(e, n) {
				if (y(e) && e.id)
					for (var r = 0, a = t[qr]; a > r; r++)
						if (t[r].id === e.id) return void(i[n] = t[bn](r, 1)[0])
			}), f(e, function(e, n) {
				if (y(e) && e.name && !c(e))
					for (var r = 0, a = t[qr]; a > r; r++)
						if (t[r].name === e.name) return void(i[n] = t[bn](r, 1)[0])
			}), f(e, function(e, n) {
				i[n] || !t[n] || c(e) || (i[n] = t[n])
			}), i
		}

		function a(t, e, i) {
			function n(n) {
				f(e, function(e, a) {
					if (y(e)) {
						var o = i[a],
							s = r[a],
							l = t + "." + s.subType;
						n(s, e, o, l)
					}
				})
			}
			var r = [],
				a = "\x00",
				s = {},
				l = {};
			return f(e, function(e, n) {
				if (y(e)) {
					var a = i[n],
						s = o(t, e, a),
						l = {
							mainType: t,
							subType: s
						};
					r[n] = l
				}
			}), n(function(t, e, i, n) {
				t.name = i ? i.name : null != e.name ? e.name : a + "-", l[t.name] = 0
			}), n(function(t, e, i, n) {
				var r = t.name;
				if (t.id = i ? i.id : null != e.id ? e.id : a + [n, r, l[r]++].join("|"), s[t.id]) throw new Error("id duplicates: " + t.id);
				s[t.id] = 1
			}), r
		}

		function o(t, e, i) {
			var n = e.type ? e.type : i ? i.subType : x.determineSubType(t, e);
			return n
		}

		function s(t) {
			return v(t, function(t) {
				return t.componentIndex
			}) || []
		}

		function l(t, e) {
			return e.hasOwnProperty("subType") ? p(t, function(t) {
				return t.subType === e.subType
			}) : t
		}

		function c(t) {
			return t.id && 0 === (t.id + "")[Zr]("\x00_ec_\x00")
		}

		function u(t) {
			if (!t._seriesIndices) throw new Error("Series is not initialized. Please depends sereis.")
		}
		var h = t(Yr),
			d = t("./Model"),
			f = h.each,
			p = h[Xr],
			v = h.map,
			m = h[qn],
			g = h[Zr],
			y = h[Ln],
			x = t("./Component"),
			_ = t("./globalDefault"),
			w = d[Vr]({
				constructor: w,
				init: function(t, e, i, n) {
					i = i || {}, this[Yn] = null, this._theme = new d(i), this._optionManager = n
				},
				setOption: function(t, e) {
					this._optionManager.setOption(t, e), this[kn]()
				},
				resetOption: function(t) {
					var e = !1,
						n = this._optionManager;
					if (!t || "recreate" === t) {
						var r = n.mountOption();
						this[Yn] && "recreate" !== t ? (this.restoreData(), this[Tn](r)) : i.call(this, r), e = !0
					}
					if ((t === Cn || "media" === t) && this.restoreData(), !t || "recreate" === t || t === Cn) {
						var a = n.getTimelineOption(this);
						a && (this[Tn](a), e = !0)
					}
					if (!t || "recreate" === t || "media" === t) {
						var o = n.getMediaOption(this, this._api);
						o[qr] && f(o, function(t) {
							this[Tn](t, e = !0)
						}, this)
					}
					return e
				},
				mergeOption: function(t) {
					function e(e, n) {
						var r = t[e];
						r ? o.call(this, e, r, n) : i.call(this, e), e === An && (this._seriesIndices = s(c[An]))
					}

					function i(t) {
						f(c[t], function(t) {
							t[Tn]({}, this)
						}, this)
					}

					function o(t, e, i) {
						h[qn](e) || (e = [e]), c[t] || (c[t] = []);
						var o = r(c[t], e),
							s = a(t, e, o),
							u = n(c, i);
						l[t] = [], f(e, function(e, i) {
							if (y(e)) {
								var n = o[i],
									r = x[Ir](t, s[i].subType, !0);
								n && n instanceof r ? n[Tn](e, this) : (n = new r(e, this, this, h[Vr]({
									dependentModels: u,
									componentIndex: i
								}, s[i])), c[t][i] = n), l[t][i] = n[Yn]
							}
						}, this)
					}
					var l = this[Yn],
						c = this._componentsMap,
						u = [];
					f(t, function(t, e) {
						null != t && (x.hasClass(e) ? u.push(e) : l[e] = null == l[e] ? h.clone(t) : h.merge(l[e], t, !0))
					}), x.topologicalTravel(u, x.getAllClassMainTypes(), e, this)
				},
				getTheme: function() {
					return this._theme
				},
				getComponent: function(t, e) {
					var i = this._componentsMap[t];
					return i ? i[e || 0] : void 0
				},
				queryComponents: function(t) {
					var e = t.mainType;
					if (!e) return [];
					var i = t.index,
						n = t.id,
						r = t.name,
						a = this._componentsMap[e];
					if (!a || !a[qr]) return [];
					var o;
					if (null != i) m(i) || (i = [i]), o = p(v(i, function(t) {
						return a[t]
					}), function(t) {
						return !!t
					});
					else if (null != n) {
						var s = m(n);
						o = p(a, function(t) {
							return s && g(n, t.id) >= 0 || !s && t.id === n
						})
					} else if (null != r) {
						var c = m(r);
						o = p(a, function(t) {
							return c && g(r, t.name) >= 0 || !c && t.name === r
						})
					}
					return l(o, t)
				},
				findComponents: function(t) {
					function e(t) {
						var e = r + "Index",
							i = r + "Id",
							n = r + "Name";
						return t && (t.hasOwnProperty(e) || t.hasOwnProperty(i) || t.hasOwnProperty(n)) ? {
							mainType: r,
							index: t[e],
							id: t[i],
							name: t[n]
						} : null
					}

					function i(e) {
						return t[Xr] ? p(e, t[Xr]) : e;
					}
					var n = t.query,
						r = t.mainType,
						a = e(n),
						o = a ? this.queryComponents(a) : this._componentsMap[r];
					return i(l(o, t))
				},
				eachComponent: function(t, e, i) {
					var n = this._componentsMap;
					if (typeof t === Er) i = e, e = t, f(n, function(t, n) {
						f(t, function(t, r) {
							e.call(i, n, t, r)
						})
					});
					else if (h[Sn](t)) f(n[t], e, i);
					else if (y(t)) {
						var r = this[Mn](t);
						f(r, e, i)
					}
				},
				getSeriesByName: function(t) {
					var e = this._componentsMap[An];
					return p(e, function(e) {
						return e.name === t
					})
				},
				getSeriesByIndex: function(t) {
					return this._componentsMap[An][t]
				},
				getSeriesByType: function(t) {
					var e = this._componentsMap[An];
					return p(e, function(e) {
						return e.subType === t
					})
				},
				getSeries: function() {
					return this._componentsMap[An].slice()
				},
				eachSeries: function(t, e) {
					u(this), f(this._seriesIndices, function(i) {
						var n = this._componentsMap[An][i];
						t.call(e, n, i)
					}, this)
				},
				eachRawSeries: function(t, e) {
					f(this._componentsMap[An], t, e)
				},
				eachSeriesByType: function(t, e, i) {
					u(this), f(this._seriesIndices, function(n) {
						var r = this._componentsMap[An][n];
						r.subType === t && e.call(i, r, n)
					}, this)
				},
				eachRawSeriesByType: function(t, e, i) {
					return f(this.getSeriesByType(t), e, i)
				},
				isSeriesFiltered: function(t) {
					return u(this), h[Zr](this._seriesIndices, t.componentIndex) < 0
				},
				filterSeries: function(t, e) {
					u(this);
					var i = p(this._componentsMap[An], t, e);
					this._seriesIndices = s(i)
				},
				restoreData: function() {
					var t = this._componentsMap;
					this._seriesIndices = s(t[An]);
					var e = [];
					f(t, function(t, i) {
						e.push(i)
					}), x.topologicalTravel(e, x.getAllClassMainTypes(), function(e, i) {
						f(t[e], function(t) {
							t.restoreData()
						})
					})
				}
			});
		return w
	}), e("echarts/ExtensionAPI", [Kr, Yr], function(t) {
		function e(t) {
			i.each(n, function(e) {
				this[e] = i.bind(t[e], t)
			}, this)
		}
		var i = t(Yr),
			n = [wn, "getZr", _n, xn, yn, "on", "off", "getDataURL", "getConnectedDataURL"];
		return e
	}), e("echarts/CoordinateSystem", [Kr], function(t) {
		function e() {
			this._coordinateSystems = {}, this._coordinateSystemsList = []
		}
		var i = {};
		return e[$r] = {
			constructor: e,
			update: function(t, e) {
				var n = {};
				for (var r in i) n[r] = i[r][mr](t, e);
				this._coordinateSystems = n
			},
			get: function(t, e) {
				var i = this._coordinateSystems[t];
				return i ? i[e || 0] : void 0
			}
		}, e[gn] = function(t, e) {
			i[t] = e
		}, e
	}), e("echarts/model/OptionManager", [Kr, Yr], function(t) {
		function e(t) {
			this._api = t, this._timelineOptions, this._mediaList, this._mediaDefault, this._currentMediaIndices = [], this._optionBackup
		}

		function i(t, e) {
			var i, n, r = [],
				a = [],
				l = t[Cn];
			if (t.baseOption && (n = t.baseOption), (l || t.options) && (n = n || {}, r = (t.options || []).slice()), t.media) {
				n = n || {};
				var c = t.media;
				s(c, function(t) {
					t && t[Yn] && (t.query ? a.push(t) : i || (i = t))
				})
			}
			return n || (n = t), n[Cn] || (n[Cn] = l), s([n][Nr](r)[Nr](o.map(a, function(t) {
				return t[Yn]
			})), function(t) {
				s(e, function(e) {
					e(t)
				})
			}), {
				baseOption: n,
				timelineOptions: r,
				mediaDefault: i,
				mediaList: a
			}
		}

		function n(t, e, i) {
			var n = {
					width: e,
					height: i,
					aspectratio: e / i
				},
				a = !0;
			return o.each(t, function(t, e) {
				var i = e.match(u);
				if (i && i[1] && i[2]) {
					var o = i[1],
						s = i[2][Zn]();
					r(n[s], t, o) || (a = !1)
				}
			}), a
		}

		function r(t, e, i) {
			return "min" === i ? t >= e : "max" === i ? e >= t : t === e
		}

		function a(t, e) {
			return t.join(",") === e.join(",")
		}
		var o = t(Yr),
			s = o.each,
			l = o.clone,
			c = o.map,
			u = /^(min|max)?(.+)$/;
		return e[$r] = {
			constructor: e,
			setOption: function(t, e) {
				t = l(t, !0), this._optionBackup = i.call(this, t, e)
			},
			mountOption: function() {
				var t = this._optionBackup;
				return this._timelineOptions = c(t.timelineOptions, l), this._mediaList = c(t.mediaList, l), this._mediaDefault = l(t.mediaDefault), this._currentMediaIndices = [], l(t.baseOption)
			},
			getTimelineOption: function(t) {
				var e, i = this._timelineOptions;
				if (i[qr]) {
					var n = t[mn](Cn);
					n && (e = l(i[n.getCurrentIndex()], !0))
				}
				return e
			},
			getMediaOption: function(t) {
				var e = this._api[_n](),
					i = this._api[xn](),
					r = this._mediaList,
					o = this._mediaDefault,
					s = [],
					u = [];
				if (!r[qr] && !o) return u;
				for (var h = 0, d = r[qr]; d > h; h++) n(r[h].query, e, i) && s.push(h);
				return !s[qr] && o && (s = [-1]), s[qr] && !a(s, this._currentMediaIndices) && (u = c(s, function(t) {
					return l(-1 === t ? o[Yn] : r[t][Yn])
				})), this._currentMediaIndices = s, u
			}
		}, e
	}), e("echarts/util/model", [Kr, "./format", "./number", Yr, "../model/Model"], function(t) {
		var e = t("./format"),
			i = t("./number"),
			n = t(Yr),
			r = t("../model/Model"),
			a = ["x", "y", "z", vn, "angle"],
			o = {};
		return o.createNameEach = function(t, e) {
			t = t.slice();
			var i = n.map(t, o.capitalFirst);
			e = (e || []).slice();
			var r = n.map(e, o.capitalFirst);
			return function(a, o) {
				n.each(t, function(t, n) {
					for (var s = {
							name: t,
							capital: i[n]
						}, l = 0; l < e[qr]; l++) s[e[l]] = t + r[l];
					a.call(o, s)
				})
			}
		}, o.capitalFirst = function(t) {
			return t ? t.charAt(0)[Gn]() + t[or](1) : t
		}, o.eachAxisDim = o.createNameEach(a, [pn, "axis", "index"]), o[fn] = function(t) {
			return n[qn](t) ? t : null == t ? [] : [t]
		}, o.createLinkedNodesFinder = function(t, e, i) {
			function r(t, e) {
				return n[Zr](e.nodes, t) >= 0
			}

			function a(t, r) {
				var a = !1;
				return e(function(e) {
					n.each(i(t, e) || [], function(t) {
						r.records[e.name][t] && (a = !0)
					})
				}), a
			}

			function o(t, r) {
				r.nodes.push(t), e(function(e) {
					n.each(i(t, e) || [], function(t) {
						r.records[e.name][t] = !0
					})
				})
			}
			return function(i) {
				function n(t) {
					!r(t, s) && a(t, s) && (o(t, s), l = !0)
				}
				var s = {
					nodes: [],
					records: {}
				};
				if (e(function(t) {
						s.records[t.name] = {}
					}), !i) return s;
				o(i, s);
				var l;
				do l = !1, t(n); while (l);
				return s
			}
		}, o[dn] = function(t, e) {
			if (t) {
				var i = t[hn] = t[hn] || {},
					r = t[un] = t[un] || {};
				n.each(e, function(t) {
					var e = n.retrieve(i[t], r[t]);
					null != e && (i[t] = e)
				})
			}
		}, o[cn] = function(t, e, i) {
			var a = new r;
			return n.mixin(a, o.dataFormatMixin), a[ln] = t[ln], a.name = t.name || "", a[sn] = function() {
				return e
			}, a.getRawDataArray = function() {
				return i
			}, a
		}, o.getDataItemValue = function(t) {
			return t && (null == t.value ? t : t.value)
		}, o.converDataValue = function(t, e) {
			var n = e && e.type;
			return n === on ? t : ("time" !== n || isFinite(t) || null == t || "-" === t || (t = +i.parseDate(t)), null == t || "" === t ? NaN : +t)
		}, o.dataFormatMixin = {
			getDataParams: function(t) {
				var e = this[sn](),
					i = this[ln],
					n = this.name,
					r = this[an](t),
					a = e[rn](t),
					o = e[nn](t, !0),
					s = this.getRawDataArray(),
					l = s && s[a];
				return {
					seriesIndex: i,
					seriesName: n,
					name: o,
					dataIndex: a,
					data: l,
					value: r,
					$vars: ["seriesName", "name", "value"]
				}
			},
			getFormattedLabel: function(t, i, n) {
				i = i || un;
				var r = this[sn](),
					a = r[en](t),
					o = this[tn](t);
				return n || (n = a.get(["label", i, Qi])), typeof n === Er ? (o.status = i, n(o)) : typeof n === Gr ? e.formatTpl(n, o) : void 0
			},
			getRawValue: function(t) {
				var e = this[sn]()[en](t);
				if (e && null != e[Yn]) {
					var i = e[Yn];
					return n[Ln](i) && !n[qn](i) ? i.value : i
				}
			}
		}, o
	}), e("echarts/model/Series", [Kr, Yr, "../util/format", "../util/model", "./Component"], function(t) {
		var e = t(Yr),
			i = t("../util/format"),
			n = t("../util/model"),
			r = t("./Component"),
			a = i[Ji],
			o = i[Ki],
			s = r[Vr]({
				type: "series",
				seriesIndex: 0,
				coordinateSystem: null,
				defaultOption: null,
				legendDataProvider: null,
				init: function(t, e, i, n) {
					this[ln] = this.componentIndex, this[Dn](t, i), this._dataBeforeProcessed = this.getInitialData(t, i), this._data = this._dataBeforeProcessed.cloneShallow()
				},
				mergeDefaultAndTheme: function(t, i) {
					e.merge(t, i.getTheme().get(this.subType)), e.merge(t, this.getDefaultOption()), n[dn](t.label, [Nn, "show", nr, wr, Qi])
				},
				mergeOption: function(t, i) {
					t = e.merge(this[Yn], t, !0);
					var n = this.getInitialData(t, i);
					n && (this._data = n, this._dataBeforeProcessed = n.cloneShallow())
				},
				getInitialData: function() {},
				getData: function() {
					return this._data
				},
				setData: function(t) {
					this._data = t
				},
				getRawData: function() {
					return this._dataBeforeProcessed
				},
				getRawDataArray: function() {
					return this[Yn].data
				},
				getDimensionsOnAxis: function(t) {
					return [t]
				},
				formatTooltip: function(t, i) {
					var n = this._data,
						r = this[an](t),
						s = e[qn](r) ? e.map(r, o).join(", ") : o(r),
						l = n[nn](t);
					return i ? a(this.name) + " : " + s : a(this.name) + $i + (l ? a(l) + " : " + s : s)
				},
				restoreData: function() {
					this._data = this._dataBeforeProcessed.cloneShallow()
				}
			});
		return e.mixin(s, n.dataFormatMixin), s
	}), e("zrender/core/guid", [], function() {
		var t = 2311;
		return function() {
			return "zr_" + t++
		}
	}), e(Yi, [Kr, fr], function(t) {
		var e = Array[$r].slice,
			i = t(fr),
			n = i[Zr],
			r = function() {
				this._$handlers = {}
			};
		return r[$r] = {
			constructor: r,
			one: function(t, e, i) {
				var r = this._$handlers;
				return e && t ? (r[t] || (r[t] = []), n(r[t], t) >= 0 ? this : (r[t].push({
					h: e,
					one: !0,
					ctx: i || this
				}), this)) : this
			},
			on: function(t, e, i) {
				var n = this._$handlers;
				return e && t ? (n[t] || (n[t] = []), n[t].push({
					h: e,
					one: !1,
					ctx: i || this
				}), this) : this
			},
			isSilent: function(t) {
				var e = this._$handlers;
				return e[t] && e[t][qr]
			},
			off: function(t, e) {
				var i = this._$handlers;
				if (!t) return this._$handlers = {}, this;
				if (e) {
					if (i[t]) {
						for (var n = [], r = 0, a = i[t][qr]; a > r; r++) i[t][r].h != e && n.push(i[t][r]);
						i[t] = n
					}
					i[t] && 0 === i[t][qr] && delete i[t]
				} else delete i[t];
				return this
			},
			trigger: function(t) {
				if (this._$handlers[t]) {
					var i = arguments,
						n = i[qr];
					n > 3 && (i = e.call(i, 1));
					for (var r = this._$handlers[t], a = r[qr], o = 0; a > o;) {
						switch (n) {
							case 1:
								r[o].h.call(r[o].ctx);
								break;
							case 2:
								r[o].h.call(r[o].ctx, i[1]);
								break;
							case 3:
								r[o].h.call(r[o].ctx, i[1], i[2]);
								break;
							default:
								r[o].h.apply(r[o].ctx, i)
						}
						r[o].one ? (r[bn](o, 1), a--) : o++
					}
				}
				return this
			},
			triggerWithContext: function(t) {
				if (this._$handlers[t]) {
					var i = arguments,
						n = i[qr];
					n > 4 && (i = e.call(i, 1, i[qr] - 1));
					for (var r = i[i[qr] - 1], a = this._$handlers[t], o = a[qr], s = 0; o > s;) {
						switch (n) {
							case 1:
								a[s].h.call(r);
								break;
							case 2:
								a[s].h.call(r, i[1]);
								break;
							case 3:
								a[s].h.call(r, i[1], i[2]);
								break;
							default:
								a[s].h.apply(r, i)
						}
						a[s].one ? (a[bn](s, 1), o--) : s++
					}
				}
				return this
			}
		}, r
	}), e("zrender/mixin/Transformable", [Kr, "../core/matrix", "../core/vector"], function(t) {
		function e(t) {
			return t > a || -a > t
		}
		var i = t("../core/matrix"),
			n = t("../core/vector"),
			r = i.identity,
			a = 5e-5,
			o = function(t) {
				t = t || {}, t[Nn] || (this[Nn] = [0, 0]), null == t[Xi] && (this[Xi] = 0), t.scale || (this.scale = [1, 1]), this[ji] = this[ji] || null
			},
			s = o[$r];
		s[Ui] = null, s.needLocalTransform = function() {
			return e(this[Xi]) || e(this[Nn][0]) || e(this[Nn][1]) || e(this.scale[0] - 1) || e(this.scale[1] - 1)
		}, s[qi] = function() {
			var t = this[Wi],
				e = t && t[Ui],
				n = this.needLocalTransform(),
				a = this[Ui];
			return n || e ? (a = a || i[mr](), n ? this[Hi](a) : r(a), e && (n ? i.mul(a, t[Ui], a) : i.copy(a, t[Ui])), this[Ui] = a, this[Fi] = this[Fi] || i[mr](), void i.invert(this[Fi], a)) : void(a && r(a))
		}, s[Hi] = function(t) {
			t = t || [], r(t);
			var e = this[ji],
				n = this.scale,
				a = this[Xi],
				o = this[Nn];
			return e && (t[4] -= e[0], t[5] -= e[1]), i.scale(t, t, n), a && i[Zi](t, t, a), e && (t[4] += e[0], t[5] += e[1]), t[4] += o[0], t[5] += o[1], t
		}, s.setTransform = function(t) {
			var e = this[Ui];
			e && t[Ui](e[0], e[1], e[2], e[3], e[4], e[5])
		};
		var l = [];
		return s.decomposeTransform = function() {
			if (this[Ui]) {
				var t = this[Wi],
					n = this[Ui];
				t && t[Ui] && (i.mul(l, t[Fi], n), n = l);
				var r = n[0] * n[0] + n[1] * n[1],
					a = n[2] * n[2] + n[3] * n[3],
					o = this[Nn],
					s = this.scale;
				e(r - 1) && (r = Math.sqrt(r)), e(a - 1) && (a = Math.sqrt(a)), n[0] < 0 && (r = -r), n[3] < 0 && (a = -a), o[0] = n[4], o[1] = n[5], s[0] = r, s[1] = a, this[Xi] = Math.atan2(-n[1] / a, n[0] / r)
			}
		}, s[Gi] = function(t, e) {
			var i = [t, e],
				r = this[Fi];
			return r && n[yr](i, i, r), i
		}, s.transformCoordToGlobal = function(t, e) {
			var i = [t, e],
				r = this[Ui];
			return r && n[yr](i, i, r), i
		}, o
	}), e("zrender/animation/easing", [], function() {
		var t = {
			linear: function(t) {
				return t
			},
			quadraticIn: function(t) {
				return t * t
			},
			quadraticOut: function(t) {
				return t * (2 - t)
			},
			quadraticInOut: function(t) {
				return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
			},
			cubicIn: function(t) {
				return t * t * t
			},
			cubicOut: function(t) {
				return --t * t * t + 1
			},
			cubicInOut: function(t) {
				return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
			},
			quarticIn: function(t) {
				return t * t * t * t
			},
			quarticOut: function(t) {
				return 1 - --t * t * t * t
			},
			quarticInOut: function(t) {
				return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
			},
			quinticIn: function(t) {
				return t * t * t * t * t
			},
			quinticOut: function(t) {
				return --t * t * t * t * t + 1
			},
			quinticInOut: function(t) {
				return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
			},
			sinusoidalIn: function(t) {
				return 1 - Math.cos(t * Math.PI / 2)
			},
			sinusoidalOut: function(t) {
				return Math.sin(t * Math.PI / 2)
			},
			sinusoidalInOut: function(t) {
				return .5 * (1 - Math.cos(Math.PI * t))
			},
			exponentialIn: function(t) {
				return 0 === t ? 0 : Math.pow(1024, t - 1)
			},
			exponentialOut: function(t) {
				return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
			},
			exponentialInOut: function(t) {
				return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
			},
			circularIn: function(t) {
				return 1 - Math.sqrt(1 - t * t)
			},
			circularOut: function(t) {
				return Math.sqrt(1 - --t * t)
			},
			circularInOut: function(t) {
				return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
			},
			elasticIn: function(t) {
				var e, i = .1,
					n = .4;
				return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)))
			},
			elasticOut: function(t) {
				var e, i = .1,
					n = .4;
				return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
			},
			elasticInOut: function(t) {
				var e, i = .1,
					n = .4;
				return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
			},
			backIn: function(t) {
				var e = 1.70158;
				return t * t * ((e + 1) * t - e)
			},
			backOut: function(t) {
				var e = 1.70158;
				return --t * t * ((e + 1) * t + e) + 1
			},
			backInOut: function(t) {
				var e = 2.5949095;
				return (t *= 2) < 1 ? .5 * (t * t * ((e + 1) * t - e)) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
			},
			bounceIn: function(e) {
				return 1 - t.bounceOut(1 - e)
			},
			bounceOut: function(t) {
				return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
			},
			bounceInOut: function(e) {
				return .5 > e ? .5 * t.bounceIn(2 * e) : .5 * t.bounceOut(2 * e - 1) + .5
			}
		};
		return t
	}), e("zrender/animation/Clip", [Kr, "./easing"], function(t) {
		function e(t) {
			this._target = t[Bi], this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null == t.loop ? !1 : t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart
		}
		var i = t("./easing");
		return e[$r] = {
			constructor: e,
			step: function(t) {
				this._initialized || (this._startTime = (new Date).getTime() + this._delay, this._initialized = !0);
				var e = (t - this._startTime) / this._life;
				if (!(0 > e)) {
					e = Math.min(e, 1);
					var n = this.easing,
						r = typeof n == Gr ? i[n] : n,
						a = typeof r === Er ? r(e) : e;
					return this.fire("frame", a), 1 == e ? this.loop ? (this.restart(), "restart") : (this._needsRemove = !0, "destroy") : null
				}
			},
			restart: function() {
				var t = (new Date).getTime(),
					e = (t - this._startTime) % this._life;
				this._startTime = (new Date).getTime() - e + this.gap, this._needsRemove = !1
			},
			fire: function(t, e) {
				t = "on" + t, this[t] && this[t](this._target, e)
			}
		}, e
	}), e(Ni, [Kr], function(t) {
		function e(t) {
			return t = Math.round(t), 0 > t ? 0 : t > 255 ? 255 : t
		}

		function i(t) {
			return t = Math.round(t), 0 > t ? 0 : t > 360 ? 360 : t
		}

		function n(t) {
			return 0 > t ? 0 : t > 1 ? 1 : t
		}

		function r(t) {
			return e(t[qr] && "%" === t.charAt(t[qr] - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10))
		}

		function a(t) {
			return n(t[qr] && "%" === t.charAt(t[qr] - 1) ? parseFloat(t) / 100 : parseFloat(t))
		}

		function o(t, e, i) {
			return 0 > i ? i += 1 : i > 1 && (i -= 1), 1 > 6 * i ? t + (e - t) * i * 6 : 1 > 2 * i ? e : 2 > 3 * i ? t + (e - t) * (2 / 3 - i) * 6 : t
		}

		function s(t, e, i) {
			return t + (e - t) * i
		}

		function l(t) {
			if (t) {
				t += "";
				var e = t[jn](/ /g, "")[Zn]();
				if (e in x) return x[e].slice();
				if ("#" !== e.charAt(0)) {
					var i = e[Zr]("("),
						n = e[Zr](")");
					if (-1 !== i && n + 1 === e[qr]) {
						var o = e[or](0, i),
							s = e[or](i + 1, n - (i + 1)).split(","),
							l = 1;
						switch (o) {
							case "rgba":
								if (4 !== s[qr]) return;
								l = a(s.pop());
							case "rgb":
								if (3 !== s[qr]) return;
								return [r(s[0]), r(s[1]), r(s[2]), l];
							case "hsla":
								if (4 !== s[qr]) return;
								return s[3] = a(s[3]), c(s);
							case "hsl":
								if (3 !== s[qr]) return;
								return c(s);
							default:
								return
						}
					}
				} else {
					if (4 === e[qr]) {
						var u = parseInt(e[or](1), 16);
						if (!(u >= 0 && 4095 >= u)) return;
						return [(3840 & u) >> 4 | (3840 & u) >> 8, 240 & u | (240 & u) >> 4, 15 & u | (15 & u) << 4, 1]
					}
					if (7 === e[qr]) {
						var u = parseInt(e[or](1), 16);
						if (!(u >= 0 && 16777215 >= u)) return;
						return [(16711680 & u) >> 16, (65280 & u) >> 8, 255 & u, 1]
					}
				}
			}
		}

		function c(t) {
			var i = (parseFloat(t[0]) % 360 + 360) % 360 / 360,
				n = a(t[1]),
				r = a(t[2]),
				s = .5 >= r ? r * (n + 1) : r + n - r * n,
				l = 2 * r - s,
				c = [e(255 * o(l, s, i + 1 / 3)), e(255 * o(l, s, i)), e(255 * o(l, s, i - 1 / 3))];
			return 4 === t[qr] && (c[3] = t[3]), c
		}

		function u(t) {
			if (t) {
				var e, i, n = t[0] / 255,
					r = t[1] / 255,
					a = t[2] / 255,
					o = Math.min(n, r, a),
					s = Math.max(n, r, a),
					l = s - o,
					c = (s + o) / 2;
				if (0 === l) e = 0, i = 0;
				else {
					i = .5 > c ? l / (s + o) : l / (2 - s - o);
					var u = ((s - n) / 6 + l / 2) / l,
						h = ((s - r) / 6 + l / 2) / l,
						d = ((s - a) / 6 + l / 2) / l;
					n === s ? e = d - h : r === s ? e = 1 / 3 + u - d : a === s && (e = 2 / 3 + h - u), 0 > e && (e += 1), e > 1 && (e -= 1)
				}
				var f = [360 * e, i, c];
				return null != t[3] && f.push(t[3]), f
			}
		}

		function h(t, e) {
			var i = l(t);
			if (i) {
				for (var n = 0; 3 > n; n++) 0 > e ? i[n] = i[n] * (1 - e) | 0 : i[n] = (255 - i[n]) * e + i[n] | 0;
				return y(i, 4 === i[qr] ? "rgba" : "rgb")
			}
		}

		function d(t, e) {
			var i = l(t);
			return i ? ((1 << 24) + (i[0] << 16) + (i[1] << 8) + +i[2]).toString(16).slice(1) : void 0
		}

		function f(t, i, n) {
			if (i && i[qr] && t >= 0 && 1 >= t) {
				n = n || [0, 0, 0, 0];
				var r = t * (i[qr] - 1),
					a = Math.floor(r),
					o = Math.ceil(r),
					l = i[a],
					c = i[o],
					u = r - a;
				return n[0] = e(s(l[0], c[0], u)), n[1] = e(s(l[1], c[1], u)), n[2] = e(s(l[2], c[2], u)), n[3] = e(s(l[3], c[3], u)), n
			}
		}

		function p(t, i, r) {
			if (i && i[qr] && t >= 0 && 1 >= t) {
				var a = t * (i[qr] - 1),
					o = Math.floor(a),
					c = Math.ceil(a),
					u = l(i[o]),
					h = l(i[c]),
					d = a - o,
					f = y([e(s(u[0], h[0], d)), e(s(u[1], h[1], d)), e(s(u[2], h[2], d)), n(s(u[3], h[3], d))], "rgba");
				return r ? {
					color: f,
					leftIndex: o,
					rightIndex: c,
					value: a
				} : f
			}
		}

		function v(t, e) {
			if (!(2 !== t[qr] || t[1] < t[0])) {
				for (var i = p(t[0], e, !0), n = p(t[1], e, !0), r = [{
						color: i.color,
						offset: 0
					}], a = n.value - i.value, o = Math.max(i.value, i.rightIndex), s = Math.min(n.value, n.leftIndex), l = o; a > 0 && s >= l; l++) r.push({
					color: e[l],
					offset: (l - i.value) / a
				});
				return r.push({
					color: n.color,
					offset: 1
				}), r
			}
		}

		function m(t, e, n, r) {
			return t = l(t), t ? (t = u(t), null != e && (t[0] = i(e)), null != n && (t[1] = a(n)), null != r && (t[2] = a(r)), y(c(t), "rgba")) : void 0
		}

		function g(t, e) {
			return t = l(t), t && null != e ? (t[3] = n(e), y(t, "rgba")) : void 0
		}

		function y(t, e) {
			return ("rgb" === e || "hsv" === e || "hsl" === e) && (t = t.slice(0, 3)), e + "(" + t.join(",") + ")"
		}
		var x = {
			transparent: [0, 0, 0, 0],
			aliceblue: [240, 248, 255, 1],
			antiquewhite: [250, 235, 215, 1],
			aqua: [0, 255, 255, 1],
			aquamarine: [127, 255, 212, 1],
			azure: [240, 255, 255, 1],
			beige: [245, 245, 220, 1],
			bisque: [255, 228, 196, 1],
			black: [0, 0, 0, 1],
			blanchedalmond: [255, 235, 205, 1],
			blue: [0, 0, 255, 1],
			blueviolet: [138, 43, 226, 1],
			brown: [165, 42, 42, 1],
			burlywood: [222, 184, 135, 1],
			cadetblue: [95, 158, 160, 1],
			chartreuse: [127, 255, 0, 1],
			chocolate: [210, 105, 30, 1],
			coral: [255, 127, 80, 1],
			cornflowerblue: [100, 149, 237, 1],
			cornsilk: [255, 248, 220, 1],
			crimson: [220, 20, 60, 1],
			cyan: [0, 255, 255, 1],
			darkblue: [0, 0, 139, 1],
			darkcyan: [0, 139, 139, 1],
			darkgoldenrod: [184, 134, 11, 1],
			darkgray: [169, 169, 169, 1],
			darkgreen: [0, 100, 0, 1],
			darkgrey: [169, 169, 169, 1],
			darkkhaki: [189, 183, 107, 1],
			darkmagenta: [139, 0, 139, 1],
			darkolivegreen: [85, 107, 47, 1],
			darkorange: [255, 140, 0, 1],
			darkorchid: [153, 50, 204, 1],
			darkred: [139, 0, 0, 1],
			darksalmon: [233, 150, 122, 1],
			darkseagreen: [143, 188, 143, 1],
			darkslateblue: [72, 61, 139, 1],
			darkslategray: [47, 79, 79, 1],
			darkslategrey: [47, 79, 79, 1],
			darkturquoise: [0, 206, 209, 1],
			darkviolet: [148, 0, 211, 1],
			deeppink: [255, 20, 147, 1],
			deepskyblue: [0, 191, 255, 1],
			dimgray: [105, 105, 105, 1],
			dimgrey: [105, 105, 105, 1],
			dodgerblue: [30, 144, 255, 1],
			firebrick: [178, 34, 34, 1],
			floralwhite: [255, 250, 240, 1],
			forestgreen: [34, 139, 34, 1],
			fuchsia: [255, 0, 255, 1],
			gainsboro: [220, 220, 220, 1],
			ghostwhite: [248, 248, 255, 1],
			gold: [255, 215, 0, 1],
			goldenrod: [218, 165, 32, 1],
			gray: [128, 128, 128, 1],
			green: [0, 128, 0, 1],
			greenyellow: [173, 255, 47, 1],
			grey: [128, 128, 128, 1],
			honeydew: [240, 255, 240, 1],
			hotpink: [255, 105, 180, 1],
			indianred: [205, 92, 92, 1],
			indigo: [75, 0, 130, 1],
			ivory: [255, 255, 240, 1],
			khaki: [240, 230, 140, 1],
			lavender: [230, 230, 250, 1],
			lavenderblush: [255, 240, 245, 1],
			lawngreen: [124, 252, 0, 1],
			lemonchiffon: [255, 250, 205, 1],
			lightblue: [173, 216, 230, 1],
			lightcoral: [240, 128, 128, 1],
			lightcyan: [224, 255, 255, 1],
			lightgoldenrodyellow: [250, 250, 210, 1],
			lightgray: [211, 211, 211, 1],
			lightgreen: [144, 238, 144, 1],
			lightgrey: [211, 211, 211, 1],
			lightpink: [255, 182, 193, 1],
			lightsalmon: [255, 160, 122, 1],
			lightseagreen: [32, 178, 170, 1],
			lightskyblue: [135, 206, 250, 1],
			lightslategray: [119, 136, 153, 1],
			lightslategrey: [119, 136, 153, 1],
			lightsteelblue: [176, 196, 222, 1],
			lightyellow: [255, 255, 224, 1],
			lime: [0, 255, 0, 1],
			limegreen: [50, 205, 50, 1],
			linen: [250, 240, 230, 1],
			magenta: [255, 0, 255, 1],
			maroon: [128, 0, 0, 1],
			mediumaquamarine: [102, 205, 170, 1],
			mediumblue: [0, 0, 205, 1],
			mediumorchid: [186, 85, 211, 1],
			mediumpurple: [147, 112, 219, 1],
			mediumseagreen: [60, 179, 113, 1],
			mediumslateblue: [123, 104, 238, 1],
			mediumspringgreen: [0, 250, 154, 1],
			mediumturquoise: [72, 209, 204, 1],
			mediumvioletred: [199, 21, 133, 1],
			midnightblue: [25, 25, 112, 1],
			mintcream: [245, 255, 250, 1],
			mistyrose: [255, 228, 225, 1],
			moccasin: [255, 228, 181, 1],
			navajowhite: [255, 222, 173, 1],
			navy: [0, 0, 128, 1],
			oldlace: [253, 245, 230, 1],
			olive: [128, 128, 0, 1],
			olivedrab: [107, 142, 35, 1],
			orange: [255, 165, 0, 1],
			orangered: [255, 69, 0, 1],
			orchid: [218, 112, 214, 1],
			palegoldenrod: [238, 232, 170, 1],
			palegreen: [152, 251, 152, 1],
			paleturquoise: [175, 238, 238, 1],
			palevioletred: [219, 112, 147, 1],
			papayawhip: [255, 239, 213, 1],
			peachpuff: [255, 218, 185, 1],
			peru: [205, 133, 63, 1],
			pink: [255, 192, 203, 1],
			plum: [221, 160, 221, 1],
			powderblue: [176, 224, 230, 1],
			purple: [128, 0, 128, 1],
			red: [255, 0, 0, 1],
			rosybrown: [188, 143, 143, 1],
			royalblue: [65, 105, 225, 1],
			saddlebrown: [139, 69, 19, 1],
			salmon: [250, 128, 114, 1],
			sandybrown: [244, 164, 96, 1],
			seagreen: [46, 139, 87, 1],
			seashell: [255, 245, 238, 1],
			sienna: [160, 82, 45, 1],
			silver: [192, 192, 192, 1],
			skyblue: [135, 206, 235, 1],
			slateblue: [106, 90, 205, 1],
			slategray: [112, 128, 144, 1],
			slategrey: [112, 128, 144, 1],
			snow: [255, 250, 250, 1],
			springgreen: [0, 255, 127, 1],
			steelblue: [70, 130, 180, 1],
			tan: [210, 180, 140, 1],
			teal: [0, 128, 128, 1],
			thistle: [216, 191, 216, 1],
			tomato: [255, 99, 71, 1],
			turquoise: [64, 224, 208, 1],
			violet: [238, 130, 238, 1],
			wheat: [245, 222, 179, 1],
			white: [255, 255, 255, 1],
			whitesmoke: [245, 245, 245, 1],
			yellow: [255, 255, 0, 1],
			yellowgreen: [154, 205, 50, 1]
		};
		return {
			parse: l,
			lift: h,
			toHex: d,
			fastMapToColor: f,
			mapToColor: p,
			mapIntervalToColor: v,
			modifyHSL: m,
			modifyAlpha: g,
			stringify: y
		}
	}), e("zrender/animation/Animator", [Kr, "./Clip", "../tool/color", fr], function(t) {
		function e(t, e) {
			return t[e]
		}

		function i(t, e, i) {
			t[e] = i
		}

		function n(t, e, i) {
			return (e - t) * i + t
		}

		function r(t, e, i) {
			return i > .5 ? e : t
		}

		function a(t, e, i, r, a) {
			var o = t[qr];
			if (1 == a)
				for (var s = 0; o > s; s++) r[s] = n(t[s], e[s], i);
			else
				for (var l = t[0][qr], s = 0; o > s; s++)
					for (var c = 0; l > c; c++) r[s][c] = n(t[s][c], e[s][c], i)
		}

		function o(t, e, i) {
			var n = t[qr],
				r = e[qr];
			if (n !== r) {
				var a = n > r;
				if (a) t[qr] = r;
				else
					for (var o = n; r > o; o++) t.push(1 === i ? e[o] : g.call(e[o]))
			}
		}

		function s(t, e, i) {
			if (t === e) return !0;
			var n = t[qr];
			if (n !== e[qr]) return !1;
			if (1 === i) {
				for (var r = 0; n > r; r++)
					if (t[r] !== e[r]) return !1
			} else
				for (var a = t[0][qr], r = 0; n > r; r++)
					for (var o = 0; a > o; o++)
						if (t[r][o] !== e[r][o]) return !1; return !0
		}

		function l(t, e, i, n, r, a, o, s, l) {
			var u = t[qr];
			if (1 == l)
				for (var h = 0; u > h; h++) s[h] = c(t[h], e[h], i[h], n[h], r, a, o);
			else
				for (var d = t[0][qr], h = 0; u > h; h++)
					for (var f = 0; d > f; f++) s[h][f] = c(t[h][f], e[h][f], i[h][f], n[h][f], r, a, o)
		}

		function c(t, e, i, n, r, a, o) {
			var s = .5 * (i - t),
				l = .5 * (n - e);
			return (2 * (e - i) + s + l) * o + (-3 * (e - i) - 2 * s - l) * a + s * r + e
		}

		function u(t) {
			if (m(t)) {
				var e = t[qr];
				if (m(t[0])) {
					for (var i = [], n = 0; e > n; n++) i.push(g.call(t[n]));
					return i
				}
				return g.call(t)
			}
			return t
		}

		function h(t) {
			return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")"
		}

		function d(t, e, i, u, d) {
			var v = t._getter,
				g = t._setter,
				y = "spline" === e,
				x = u[qr];
			if (x) {
				var _, w = u[0].value,
					b = m(w),
					M = !1,
					S = !1,
					A = b && m(w[0]) ? 2 : 1;
				u.sort(function(t, e) {
					return t.time - e.time
				}), _ = u[x - 1].time;
				for (var C = [], T = [], k = u[0].value, L = !0, D = 0; x > D; D++) {
					C.push(u[D].time / _);
					var I = u[D].value;
					if (b && s(I, k, A) || !b && I === k || (L = !1), k = I, typeof I == Gr) {
						var P = p.parse(I);
						P ? (I = P, M = !0) : S = !0
					}
					T.push(I)
				}
				if (!L) {
					if (b) {
						for (var z = T[x - 1], D = 0; x - 1 > D; D++) o(T[D], z, A);
						o(v(t._target, d), z, A)
					}
					var V, R, O, E, N, B, G = 0,
						Z = 0;
					if (M) var F = [0, 0, 0, 0];
					var H = function(t, e) {
							var i;
							if (Z > e) {
								for (V = Math.min(G + 1, x - 1), i = V; i >= 0 && !(C[i] <= e); i--);
								i = Math.min(i, x - 2)
							} else {
								for (i = G; x > i && !(C[i] > e); i++);
								i = Math.min(i - 1, x - 2)
							}
							G = i, Z = e;
							var o = C[i + 1] - C[i];
							if (0 !== o)
								if (R = (e - C[i]) / o, y)
									if (E = T[i], O = T[0 === i ? i : i - 1], N = T[i > x - 2 ? x - 1 : i + 1], B = T[i > x - 3 ? x - 1 : i + 2], b) l(O, E, N, B, R, R * R, R * R * R, v(t, d), A);
									else {
										var s;
										if (M) s = l(O, E, N, B, R, R * R, R * R * R, F, 1), s = h(F);
										else {
											if (S) return r(E, N, R);
											s = c(O, E, N, B, R, R * R, R * R * R)
										}
										g(t, d, s)
									} else if (b) a(T[i], T[i + 1], R, v(t, d), A);
							else {
								var s;
								if (M) a(T[i], T[i + 1], R, F, 1), s = h(F);
								else {
									if (S) return r(T[i], T[i + 1], R);
									s = n(T[i], T[i + 1], R)
								}
								g(t, d, s)
							}
						},
						W = new f({
							target: t._target,
							life: _,
							loop: t._loop,
							delay: t._delay,
							onframe: H,
							ondestroy: i
						});
					return e && "spline" !== e && (W.easing = e), W
				}
			}
		}
		var f = t("./Clip"),
			p = t("../tool/color"),
			v = t(fr),
			m = v.isArrayLike,
			g = Array[$r].slice,
			y = function(t, n, r, a) {
				this._tracks = {}, this._target = t, this._loop = n || !1, this._getter = r || e, this._setter = a || i, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
			};
		return y[$r] = {
			when: function(t, e) {
				var i = this._tracks;
				for (var n in e) {
					if (!i[n]) {
						i[n] = [];
						var r = this._getter(this._target, n);
						if (null == r) continue;
						0 !== t && i[n].push({
							time: 0,
							value: u(r)
						})
					}
					i[n].push({
						time: t,
						value: e[n]
					})
				}
				return this
			},
			during: function(t) {
				return this._onframeList.push(t), this
			},
			_doneCallback: function() {
				this._tracks = {}, this._clipList[qr] = 0;
				for (var t = this._doneList, e = t[qr], i = 0; e > i; i++) t[i].call(this)
			},
			start: function(t) {
				var e, i = this,
					n = 0,
					r = function() {
						n--, n || i._doneCallback()
					};
				for (var a in this._tracks) {
					var o = d(this, t, r, this._tracks[a], a);
					o && (this._clipList.push(o), n++, this[Ei] && this[Ei].addClip(o), e = o)
				}
				if (e) {
					var s = e.onframe;
					e.onframe = function(t, e) {
						s(t, e);
						for (var n = 0; n < i._onframeList[qr]; n++) i._onframeList[n](t, e)
					}
				}
				return n || this._doneCallback(), this
			},
			stop: function(t) {
				for (var e = this._clipList, i = this[Ei], n = 0; n < e[qr]; n++) {
					var r = e[n];
					t && r.onframe(this._target, 1), i && i.removeClip(r)
				}
				e[qr] = 0
			},
			delay: function(t) {
				return this._delay = t, this
			},
			done: function(t) {
				return t && this._doneList.push(t), this
			},
			getClips: function() {
				return this._clipList
			}
		}, y
	}), e("zrender/config", [], function() {
		var t = 1;
		typeof window !== br && (t = Math.max(window.devicePixelRatio || 1, 1));
		var e = {
			debugMode: 0,
			devicePixelRatio: t
		};
		return e
	}), e("zrender/core/log", [Kr, "../config"], function(t) {
		var e = t("../config");
		return function() {
			if (0 !== e.debugMode)
				if (1 == e.debugMode)
					for (var t in arguments) throw new Error(arguments[t]);
				else if (e.debugMode > 1)
				for (var t in arguments) console.log(arguments[t])
		}
	}), e("zrender/mixin/Animatable", [Kr, "../animation/Animator", fr, "../core/log"], function(t) {
		var e = t("../animation/Animator"),
			i = t(fr),
			n = i[Sn],
			r = i.isFunction,
			a = i[Ln],
			o = t("../core/log"),
			s = function() {
				this.animators = []
			};
		return s[$r] = {
			constructor: s,
			animate: function(t, n) {
				var r, a = !1,
					s = this,
					l = this.__zr;
				if (t) {
					var c = t.split("."),
						u = s;
					a = "shape" === c[0];
					for (var h = 0, d = c[qr]; d > h; h++) u && (u = u[c[h]]);
					u && (r = u)
				} else r = s;
				if (!r) return void o('Property "' + t + '" is not existed in element ' + s.id);
				var f = s.animators,
					p = new e(r, n);
				return p.during(function(t) {
					s.dirty(a)
				}).done(function() {
					f[bn](i[Zr](f, p), 1)
				}), f.push(p), l && l[Ei].addAnimator(p), p
			},
			stopAnimation: function(t) {
				for (var e = this.animators, i = e[qr], n = 0; i > n; n++) e[n].stop(t);
				return e[qr] = 0, this
			},
			animateTo: function(t, e, i, a, o) {
				function s() {
					c--, c || o && o()
				}
				n(i) ? (o = a, a = i, i = 0) : r(a) ? (o = a, a = Oi, i = 0) : r(i) ? (o = i, i = 0) : r(e) ? (o = e, e = 500) : e || (e = 500), this[Ri](), this._animateToShallow("", this, t, e, i, a, o);
				var l = this.animators.slice(),
					c = l[qr];
				c || o && o();
				for (var u = 0; u < l[qr]; u++) l[u].done(s).start(a)
			},
			_animateToShallow: function(t, e, n, r, o) {
				var s = {},
					l = 0;
				for (var c in n)
					if (null != e[c]) a(n[c]) && !i.isArrayLike(n[c]) ? this._animateToShallow(t ? t + "." + c : c, e[c], n[c], r, o) : (s[c] = n[c], l++);
					else if (null != n[c])
					if (t) {
						var u = {};
						u[t] = {}, u[t][c] = n[c], this.attr(u)
					} else this.attr(c, n[c]);
				return l > 0 && this[Vi](t, !1).when(null == r ? 500 : r, s).delay(o || 0), this
			}
		}, s
	}), e("zrender/Element", [Kr, "./core/guid", "./mixin/Eventful", "./mixin/Transformable", "./mixin/Animatable", "./core/util"], function(t) {
		var e = t("./core/guid"),
			i = t("./mixin/Eventful"),
			n = t("./mixin/Transformable"),
			r = t("./mixin/Animatable"),
			a = t("./core/util"),
			o = function(t) {
				n.call(this, t), i.call(this, t), r.call(this, t), this.id = t.id || e()
			};
		return o[$r] = {
			type: "element",
			name: "",
			__zr: null,
			ignore: !1,
			clipPath: null,
			drift: function(t, e) {
				switch (this[zi]) {
					case On:
						e = 0;
						break;
					case Rn:
						t = 0
				}
				var i = this[Ui];
				i || (i = this[Ui] = [1, 0, 0, 1, 0, 0]), i[4] += t, i[5] += e, this.decomposeTransform(), this.dirty()
			},
			beforeUpdate: function() {},
			afterUpdate: function() {},
			update: function() {
				this[qi]()
			},
			traverse: function(t, e) {},
			attrKV: function(t, e) {
				if (t === Nn || "scale" === t || t === ji) {
					if (e) {
						var i = this[t];
						i || (i = this[t] = []), i[0] = e[0], i[1] = e[1]
					}
				} else this[t] = e
			},
			hide: function() {
				this[Pi] = !0, this.__zr && this.__zr[Ii]()
			},
			show: function() {
				this[Pi] = !1, this.__zr && this.__zr[Ii]()
			},
			attr: function(t, e) {
				if (typeof t === Gr) this.attrKV(t, e);
				else if (a[Ln](t))
					for (var i in t) t.hasOwnProperty(i) && this.attrKV(i, t[i]);
				return this.dirty(), this
			},
			setClipPath: function(t) {
				var e = this.__zr;
				e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty()
			},
			removeClipPath: function() {
				var t = this.clipPath;
				t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty())
			},
			addSelfToZr: function(t) {
				this.__zr = t;
				var e = this.animators;
				if (e)
					for (var i = 0; i < e[qr]; i++) t[Ei].addAnimator(e[i]);
				this.clipPath && this.clipPath.addSelfToZr(t)
			},
			removeSelfFromZr: function(t) {
				this.__zr = null;
				var e = this.animators;
				if (e)
					for (var i = 0; i < e[qr]; i++) t[Ei].removeAnimator(e[i]);
				this.clipPath && this.clipPath.removeSelfFromZr(t)
			}
		}, a.mixin(o, r), a.mixin(o, n), a.mixin(o, i), o
	}), e("zrender/container/Group", [Kr, fr, "../Element", dr], function(t) {
		var e = t(fr),
			i = t("../Element"),
			n = t(dr),
			r = function(t) {
				t = t || {}, i.call(this, t);
				for (var e in t) this[e] = t[e];
				this._children = [], this.__storage = null, this[Di] = !0
			};
		return r[$r] = {
			constructor: r,
			type: "group",
			children: function() {
				return this._children.slice()
			},
			childAt: function(t) {
				return this._children[t]
			},
			childOfName: function(t) {
				for (var e = this._children, i = 0; i < e[qr]; i++)
					if (e[i].name === t) return e[i]
			},
			childCount: function() {
				return this._children[qr]
			},
			add: function(t) {
				return t && t !== this && t[Wi] !== this && (this._children.push(t), this._doAdd(t)), this
			},
			addBefore: function(t, e) {
				if (t && t !== this && t[Wi] !== this && e && e[Wi] === this) {
					var i = this._children,
						n = i[Zr](e);
					n >= 0 && (i[bn](n, 0, t), this._doAdd(t))
				}
				return this
			},
			_doAdd: function(t) {
				t[Wi] && t[Wi][Li](t), t[Wi] = this;
				var e = this.__storage,
					i = this.__zr;
				e && e !== t.__storage && (e[ki](t), t instanceof r && t.addChildrenToStorage(e)), i && i[Ii]()
			},
			remove: function(t) {
				var i = this.__zr,
					n = this.__storage,
					a = this._children,
					o = e[Zr](a, t);
				return 0 > o ? this : (a[bn](o, 1), t[Wi] = null, n && (n[Ti](t.id), t instanceof r && t.delChildrenFromStorage(n)), i && i[Ii](), this)
			},
			removeAll: function() {
				var t, e, i = this._children,
					n = this.__storage;
				for (e = 0; e < i[qr]; e++) t = i[e], n && (n[Ti](t.id), t instanceof r && t.delChildrenFromStorage(n)), t[Wi] = null;
				return i[qr] = 0, this
			},
			eachChild: function(t, e) {
				for (var i = this._children, n = 0; n < i[qr]; n++) {
					var r = i[n];
					t.call(e, r, n)
				}
				return this
			},
			traverse: function(t, e) {
				for (var i = 0; i < this._children[qr]; i++) {
					var n = this._children[i];
					t.call(e, n), "group" === n.type && n[Ci](t, e)
				}
				return this
			},
			addChildrenToStorage: function(t) {
				for (var e = 0; e < this._children[qr]; e++) {
					var i = this._children[e];
					t[ki](i), i instanceof r && i.addChildrenToStorage(t)
				}
			},
			delChildrenFromStorage: function(t) {
				for (var e = 0; e < this._children[qr]; e++) {
					var i = this._children[e];
					t[Ti](i.id), i instanceof r && i.delChildrenFromStorage(t)
				}
			},
			dirty: function() {
				return this[Di] = !0, this.__zr && this.__zr[Ii](), this
			},
			getBoundingRect: function(t) {
				for (var e = null, i = new n(0, 0, 0, 0), r = t || this._children, a = [], o = 0; o < r[qr]; o++) {
					var s = r[o];
					if (!s[Pi] && !s[Ai]) {
						var l = s[ir](),
							c = s[Hi](a);
						c ? (i.copy(l), i[yr](c), e = e || i.clone(), e.union(i)) : (e = e || l.clone(), e.union(l))
					}
				}
				return e || i
			}
		}, e[zr](r, i), r
	}), e("echarts/view/Component", [Kr, "zrender/container/Group", "../util/component", Kn], function(t) {
		var e = t("zrender/container/Group"),
			i = t("../util/component"),
			n = t(Kn),
			r = function() {
				this.group = new e, this.uid = i.getUID("viewComponent")
			};
		r[$r] = {
			constructor: r,
			init: function(t, e) {},
			render: function(t, e, i, n) {},
			dispose: function() {}
		};
		var a = r[$r];
		return a.updateView = a[Si] = a.updateVisual = function(t, e, i, n) {}, n[Rr](r), n[Pr](r, {
			registerWhenExtend: !0
		}), r
	}), e("echarts/view/Chart", [Kr, "zrender/container/Group", "../util/component", Kn], function(t) {
		function e() {
			this.group = new r, this.uid = a.getUID("viewChart")
		}

		function i(t, e) {
			if (t && (t[wi](e), "group" === t.type))
				for (var n = 0; n < t.childCount(); n++) i(t[En](n), e)
		}

		function n(t, e, n) {
			if (null != e[_i]) {
				var r = t[xi](e[_i]);
				i(r, n)
			} else if (e.name) {
				var a = t[yi](e.name),
					r = t[xi](a);
				i(r, n)
			} else t[gi](function(t) {
				i(t, n)
			})
		}
		var r = t("zrender/container/Group"),
			a = t("../util/component"),
			o = t(Kn);
		e[$r] = {
			type: "chart",
			init: function(t, e) {},
			render: function(t, e, i, n) {},
			highlight: function(t, e, i, r) {
				n(t[sn](), r, hn)
			},
			downplay: function(t, e, i, r) {
				n(t[sn](), r, un)
			},
			remove: function(t, e) {
				this.group[Mi]()
			},
			dispose: function() {}
		};
		var s = e[$r];
		return s.updateView = s[Si] = s.updateVisual = function(t, e, i, n) {
			this[bi](t, e, i, n)
		}, o[Rr](e), o[Pr](e, {
			registerWhenExtend: !0
		}), e
	}), e("zrender/graphic/Style", [Kr], function(t) {
		var e = ["lineCap", "lineJoin", "miterLimit", Cr, Ar, "shadowOffsetY", Sr],
			i = function(t) {
				this.extendFrom(t)
			};
		i[$r] = {
			constructor: i,
			fill: "#000000",
			stroke: null,
			opacity: 1,
			lineDash: null,
			lineDashOffset: 0,
			shadowBlur: 0,
			shadowOffsetX: 0,
			shadowOffsetY: 0,
			lineWidth: 1,
			strokeNoScale: !1,
			text: null,
			textFill: "#000",
			textStroke: null,
			textPosition: "inside",
			textBaseline: null,
			textAlign: null,
			textDistance: 5,
			textShadowBlur: 0,
			textShadowOffsetX: 0,
			textShadowOffsetY: 0,
			bind: function(t, i) {
				for (var n = this.fill, r = this[kr], a = 0; a < e[qr]; a++) {
					var o = e[a];
					null != this[o] && (t[o] = this[o])
				}
				if (null != r) {
					var s = this[Lr];
					t[Lr] = s / (this.strokeNoScale && i && i.getLineScale ? i.getLineScale() : 1)
				}
				null != n && (t.fillStyle = n.canvasGradient ? n.canvasGradient : n), null != r && (t.strokeStyle = r.canvasGradient ? r.canvasGradient : r), null != this[Tr] && (t.globalAlpha = this[Tr])
			},
			extendFrom: function(t, e) {
				if (t) {
					var i = this;
					for (var n in t) !t.hasOwnProperty(n) || !e && i.hasOwnProperty(n) || (i[n] = t[n]);
				}
			},
			set: function(t, e) {
				typeof t === Gr ? this[t] = e : this.extendFrom(t, !0)
			},
			clone: function() {
				var t = new this.constructor;
				return t.extendFrom(this, !0), t
			}
		};
		var n, r, a = i[$r];
		for (r = 0; r < e[qr]; r++) n = e[r], n in a || (a[n] = null);
		return i
	}), e("zrender/graphic/mixin/RectText", [Kr, "../../contain/text", "../../core/BoundingRect"], function(t) {
		function e(t, e) {
			return typeof t === Gr ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
		}

		function i(t, e) {
			t[Ui](e[0], e[1], e[2], e[3], e[4], e[5])
		}
		var n = t("../../contain/text"),
			r = t("../../core/BoundingRect"),
			a = new r,
			o = function() {};
		return o[$r] = {
			constructor: o,
			drawRectText: function(t, r, o) {
				var s = this.style,
					l = s.text;
				if (null != l && (l += ""), l) {
					var c, u, h = s[mi],
						d = s.textDistance,
						f = s[vi],
						p = s.textFont || s.font,
						v = s[pi];
					o = o || n[ir](l, p, f, v);
					var m = this[Ui],
						g = this[Fi];
					if (m && (a.copy(r), a[yr](m), r = a, i(t, g)), h instanceof Array) c = r.x + e(h[0], r.width), u = r.y + e(h[1], r[gr]), f = f || "left", v = v || "top";
					else {
						var y = n.adjustTextPositionOnRect(h, r, o, d);
						c = y.x, u = y.y, f = f || y[vi], v = v || y[pi]
					}
					t[vi] = f, t[pi] = v;
					var x = s.textFill,
						_ = s.textStroke;
					x && (t.fillStyle = x), _ && (t.strokeStyle = _), t.font = p, t[Sr] = s.textShadowColor, t[Cr] = s.textShadowBlur, t[Ar] = s.textShadowOffsetX, t.shadowOffsetY = s.textShadowOffsetY;
					for (var w = l.split("\n"), b = 0; b < w[qr]; b++) x && t.fillText(w[b], c, u), _ && t.strokeText(w[b], c, u), u += o.lineHeight;
					m && i(t, m)
				}
			}
		}, o
	}), e("zrender/graphic/Displayable", [Kr, fr, "./Style", "../Element", "./mixin/RectText"], function(t) {
		function e(t) {
			t = t || {}, r.call(this, t);
			for (var e in t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
			this.style = new n(t.style), this._rect = null, this.__clipPaths = []
		}
		var i = t(fr),
			n = t("./Style"),
			r = t("../Element"),
			a = t("./mixin/RectText");
		return e[$r] = {
			constructor: e,
			type: "displayable",
			__dirty: !0,
			invisible: !1,
			z: 0,
			z2: 0,
			zlevel: 0,
			draggable: !1,
			dragging: !1,
			silent: !1,
			culling: !1,
			cursor: "pointer",
			rectHover: !1,
			beforeBrush: function(t) {},
			afterBrush: function(t) {},
			brush: function(t) {},
			getBoundingRect: function() {},
			contain: function(t, e) {
				return this.rectContain(t, e)
			},
			traverse: function(t, e) {
				t.call(e, this)
			},
			rectContain: function(t, e) {
				var i = this[Gi](t, e),
					n = this[ir]();
				return n[fi](i[0], i[1])
			},
			dirty: function() {
				this[Di] = !0, this._rect = null, this.__zr && this.__zr[Ii]()
			},
			animateStyle: function(t) {
				return this[Vi]("style", t)
			},
			attrKV: function(t, e) {
				"style" !== t ? r[$r].attrKV.call(this, t, e) : this.style.set(e)
			},
			setStyle: function(t, e) {
				return this.style.set(t, e), this.dirty(), this
			}
		}, i[zr](e, r), i.mixin(e, a), e
	}), e("zrender/core/curve", [Kr, "./vector"], function(t) {
		function e(t) {
			return t > -_ && _ > t
		}

		function i(t) {
			return t > _ || -_ > t
		}

		function n(t, e, i, n, r) {
			var a = 1 - r;
			return a * a * (a * t + 3 * r * e) + r * r * (r * n + 3 * a * i)
		}

		function r(t, e, i, n, r) {
			var a = 1 - r;
			return 3 * (((e - t) * a + 2 * (i - e) * r) * a + (n - i) * r * r)
		}

		function a(t, i, n, r, a, o) {
			var s = r + 3 * (i - n) - t,
				l = 3 * (n - 2 * i + t),
				c = 3 * (i - t),
				u = t - a,
				h = l * l - 3 * s * c,
				d = l * c - 9 * s * u,
				f = c * c - 3 * l * u,
				p = 0;
			if (e(h) && e(d))
				if (e(l)) o[0] = 0;
				else {
					var v = -c / l;
					v >= 0 && 1 >= v && (o[p++] = v)
				} else {
				var m = d * d - 4 * h * f;
				if (e(m)) {
					var g = d / h,
						v = -l / s + g,
						_ = -g / 2;
					v >= 0 && 1 >= v && (o[p++] = v), _ >= 0 && 1 >= _ && (o[p++] = _)
				} else if (m > 0) {
					var M = x(m),
						S = h * l + 1.5 * s * (-d + M),
						A = h * l + 1.5 * s * (-d - M);
					S = 0 > S ? -y(-S, b) : y(S, b), A = 0 > A ? -y(-A, b) : y(A, b);
					var v = (-l - (S + A)) / (3 * s);
					v >= 0 && 1 >= v && (o[p++] = v)
				} else {
					var C = (2 * h * l - 3 * s * d) / (2 * x(h * h * h)),
						T = Math.acos(C) / 3,
						k = x(h),
						L = Math.cos(T),
						v = (-l - 2 * k * L) / (3 * s),
						_ = (-l + k * (L + w * Math.sin(T))) / (3 * s),
						D = (-l + k * (L - w * Math.sin(T))) / (3 * s);
					v >= 0 && 1 >= v && (o[p++] = v), _ >= 0 && 1 >= _ && (o[p++] = _), D >= 0 && 1 >= D && (o[p++] = D)
				}
			}
			return p
		}

		function o(t, n, r, a, o) {
			var s = 6 * r - 12 * n + 6 * t,
				l = 9 * n + 3 * a - 3 * t - 9 * r,
				c = 3 * n - 3 * t,
				u = 0;
			if (e(l)) {
				if (i(s)) {
					var h = -c / s;
					h >= 0 && 1 >= h && (o[u++] = h)
				}
			} else {
				var d = s * s - 4 * l * c;
				if (e(d)) o[0] = -s / (2 * l);
				else if (d > 0) {
					var f = x(d),
						h = (-s + f) / (2 * l),
						p = (-s - f) / (2 * l);
					h >= 0 && 1 >= h && (o[u++] = h), p >= 0 && 1 >= p && (o[u++] = p)
				}
			}
			return u
		}

		function s(t, e, i, n, r, a) {
			var o = (e - t) * r + t,
				s = (i - e) * r + e,
				l = (n - i) * r + i,
				c = (s - o) * r + o,
				u = (l - s) * r + s,
				h = (u - c) * r + c;
			a[0] = t, a[1] = o, a[2] = c, a[3] = h, a[4] = h, a[5] = u, a[6] = l, a[7] = n
		}

		function l(t, e, i, r, a, o, s, l, c, u, h) {
			var d, f, p, v, m, y = .005,
				w = 1 / 0;
			M[0] = c, M[1] = u;
			for (var b = 0; 1 > b; b += .05) S[0] = n(t, i, a, s, b), S[1] = n(e, r, o, l, b), v = g(M, S), w > v && (d = b, w = v);
			w = 1 / 0;
			for (var C = 0; 32 > C && !(_ > y); C++) f = d - y, p = d + y, S[0] = n(t, i, a, s, f), S[1] = n(e, r, o, l, f), v = g(S, M), f >= 0 && w > v ? (d = f, w = v) : (A[0] = n(t, i, a, s, p), A[1] = n(e, r, o, l, p), m = g(A, M), 1 >= p && w > m ? (d = p, w = m) : y *= .5);
			return h && (h[0] = n(t, i, a, s, d), h[1] = n(e, r, o, l, d)), x(w)
		}

		function c(t, e, i, n) {
			var r = 1 - n;
			return r * (r * t + 2 * n * e) + n * n * i
		}

		function u(t, e, i, n) {
			return 2 * ((1 - n) * (e - t) + n * (i - e))
		}

		function h(t, n, r, a, o) {
			var s = t - 2 * n + r,
				l = 2 * (n - t),
				c = t - a,
				u = 0;
			if (e(s)) {
				if (i(l)) {
					var h = -c / l;
					h >= 0 && 1 >= h && (o[u++] = h)
				}
			} else {
				var d = l * l - 4 * s * c;
				if (e(d)) {
					var h = -l / (2 * s);
					h >= 0 && 1 >= h && (o[u++] = h)
				} else if (d > 0) {
					var f = x(d),
						h = (-l + f) / (2 * s),
						p = (-l - f) / (2 * s);
					h >= 0 && 1 >= h && (o[u++] = h), p >= 0 && 1 >= p && (o[u++] = p)
				}
			}
			return u
		}

		function d(t, e, i) {
			var n = t + i - 2 * e;
			return 0 === n ? .5 : (t - e) / n
		}

		function f(t, e, i, n, r) {
			var a = (e - t) * n + t,
				o = (i - e) * n + e,
				s = (o - a) * n + a;
			r[0] = t, r[1] = a, r[2] = s, r[3] = s, r[4] = o, r[5] = i
		}

		function p(t, e, i, n, r, a, o, s, l) {
			var u, h = .005,
				d = 1 / 0;
			M[0] = o, M[1] = s;
			for (var f = 0; 1 > f; f += .05) {
				S[0] = c(t, i, r, f), S[1] = c(e, n, a, f);
				var p = g(M, S);
				d > p && (u = f, d = p)
			}
			d = 1 / 0;
			for (var v = 0; 32 > v && !(_ > h); v++) {
				var m = u - h,
					y = u + h;
				S[0] = c(t, i, r, m), S[1] = c(e, n, a, m);
				var p = g(S, M);
				if (m >= 0 && d > p) u = m, d = p;
				else {
					A[0] = c(t, i, r, y), A[1] = c(e, n, a, y);
					var w = g(A, M);
					1 >= y && d > w ? (u = y, d = w) : h *= .5
				}
			}
			return l && (l[0] = c(t, i, r, u), l[1] = c(e, n, a, u)), x(d)
		}
		var v = t("./vector"),
			m = v[mr],
			g = v.distSquare,
			y = Math.pow,
			x = Math.sqrt,
			_ = 1e-4,
			w = x(3),
			b = 1 / 3,
			M = m(),
			S = m(),
			A = m();
		return {
			cubicAt: n,
			cubicDerivativeAt: r,
			cubicRootAt: a,
			cubicExtrema: o,
			cubicSubdivide: s,
			cubicProjectPoint: l,
			quadraticAt: c,
			quadraticDerivativeAt: u,
			quadraticRootAt: h,
			quadraticExtremum: d,
			quadraticSubdivide: f,
			quadraticProjectPoint: p
		}
	}), e("zrender/core/bbox", [Kr, "./vector", "./curve"], function(t) {
		var e = t("./vector"),
			i = t("./curve"),
			n = {},
			r = Math.min,
			a = Math.max,
			o = Math.sin,
			s = Math.cos,
			l = e[mr](),
			c = e[mr](),
			u = e[mr](),
			h = 2 * Math.PI;
		return n.fromPoints = function(t, e, i) {
			if (0 !== t[qr]) {
				var n, o = t[0],
					s = o[0],
					l = o[0],
					c = o[1],
					u = o[1];
				for (n = 1; n < t[qr]; n++) o = t[n], s = r(s, o[0]), l = a(l, o[0]), c = r(c, o[1]), u = a(u, o[1]);
				e[0] = s, e[1] = c, i[0] = l, i[1] = u
			}
		}, n.fromLine = function(t, e, i, n, o, s) {
			o[0] = r(t, i), o[1] = r(e, n), s[0] = a(t, i), s[1] = a(e, n)
		}, n.fromCubic = function(t, e, n, o, s, l, c, u, h, d) {
			var f, p, v, m, g, y = [],
				x = [],
				_ = i.cubicExtrema,
				w = i.cubicAt,
				b = _(t, n, s, c, y);
			for (g = 0; b > g; g++) y[g] = w(t, n, s, c, y[g]);
			for (b = _(e, o, l, u, x), g = 0; b > g; g++) x[g] = w(e, o, l, u, x[g]);
			y.push(t, c), x.push(e, u), f = r.apply(null, y), p = a.apply(null, y), v = r.apply(null, x), m = a.apply(null, x), h[0] = f, h[1] = v, d[0] = p, d[1] = m
		}, n.fromQuadratic = function(t, e, n, o, s, l, c, u) {
			var h = i.quadraticExtremum,
				d = i[di],
				f = a(r(h(t, n, s), 1), 0),
				p = a(r(h(e, o, l), 1), 0),
				v = d(t, n, s, f),
				m = d(e, o, l, p);
			c[0] = r(t, s, v), c[1] = r(e, l, m), u[0] = a(t, s, v), u[1] = a(e, l, m)
		}, n.fromArc = function(t, i, n, r, a, d, f, p, v) {
			var m = e.min,
				g = e.max,
				y = Math.abs(a - d);
			if (1e-4 > y % h && y > 1e-4) return p[0] = t - n, p[1] = i - r, v[0] = t + n, void(v[1] = i + r);
			if (l[0] = s(a) * n + t, l[1] = o(a) * r + i, c[0] = s(d) * n + t, c[1] = o(d) * r + i, m(p, l, c), g(v, l, c), a %= h, 0 > a && (a += h), d %= h, 0 > d && (d += h), a > d && !f ? d += h : d > a && f && (a += h), f) {
				var x = d;
				d = a, a = x
			}
			for (var _ = 0; d > _; _ += Math.PI / 2) _ > a && (u[0] = s(_) * n + t, u[1] = o(_) * r + i, m(p, u, p), g(v, u, v))
		}, n
	}), e("zrender/core/PathProxy", [Kr, "./curve", "./vector", "./bbox", "./BoundingRect"], function(t) {
		var e = t("./curve"),
			i = t("./vector"),
			n = t("./bbox"),
			r = t("./BoundingRect"),
			a = {
				M: 1,
				L: 2,
				C: 3,
				Q: 4,
				A: 5,
				Z: 6,
				R: 7
			},
			o = [],
			s = [],
			l = [],
			c = [],
			u = Math.min,
			h = Math.max,
			d = Math.cos,
			f = Math.sin,
			p = Math.sqrt,
			v = typeof Float32Array != br,
			m = function() {
				this.data = [], this._len = 0, this._ctx = null, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0
			};
		return m[$r] = {
			constructor: m,
			_lineDash: null,
			_dashOffset: 0,
			_dashIdx: 0,
			_dashSum: 0,
			getContext: function() {
				return this._ctx
			},
			beginPath: function(t) {
				return this._ctx = t, t && t[hi](), this._len = 0, this._lineDash && (this._lineDash = null, this._dashOffset = 0), this
			},
			moveTo: function(t, e) {
				return this.addData(a.M, t, e), this._ctx && this._ctx[ui](t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
			},
			lineTo: function(t, e) {
				return this.addData(a.L, t, e), this._ctx && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx[ci](t, e)), this._xi = t, this._yi = e, this
			},
			bezierCurveTo: function(t, e, i, n, r, o) {
				return this.addData(a.C, t, e, i, n, r, o), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, i, n, r, o) : this._ctx[li](t, e, i, n, r, o)), this._xi = r, this._yi = o, this
			},
			quadraticCurveTo: function(t, e, i, n) {
				return this.addData(a.Q, t, e, i, n), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, i, n) : this._ctx.quadraticCurveTo(t, e, i, n)), this._xi = i, this._yi = n, this
			},
			arc: function(t, e, i, n, r, o) {
				return this.addData(a.A, t, e, i, i, n, r - n, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, e, i, n, r, o), this._xi = d(r) * i + t, this._xi = f(r) * i + t, this
			},
			arcTo: function(t, e, i, n, r) {
				return this._ctx && this._ctx.arcTo(t, e, i, n, r), this
			},
			rect: function(t, e, i, n) {
				return this._ctx && this._ctx.rect(t, e, i, n), this.addData(a.R, t, e, i, n), this
			},
			closePath: function() {
				this.addData(a.Z);
				var t = this._ctx,
					e = this._x0,
					i = this._y0;
				return t && (this._needsDash() && this._dashedLineTo(e, i), t[si]()), this._xi = e, this._yi = i, this
			},
			fill: function(t) {
				t && t.fill(), this.toStatic()
			},
			stroke: function(t) {
				t && t[kr](), this.toStatic()
			},
			setLineDash: function(t) {
				if (t instanceof Array) {
					this._lineDash = t, this._dashIdx = 0;
					for (var e = 0, i = 0; i < t[qr]; i++) e += t[i];
					this._dashSum = e
				}
				return this
			},
			setLineDashOffset: function(t) {
				return this._dashOffset = t, this
			},
			len: function() {
				return this._len
			},
			setData: function(t) {
				var e = t[qr];
				this.data && this.data[qr] == e || !v || (this.data = new Float32Array(e));
				for (var i = 0; e > i; i++) this.data[i] = t[i];
				this._len = e
			},
			appendPath: function(t) {
				t instanceof Array || (t = [t]);
				for (var e = t[qr], i = 0, n = this._len, r = 0; e > r; r++) i += t[r].len();
				v && this.data instanceof Float32Array && (this.data = new Float32Array(n + i));
				for (var r = 0; e > r; r++)
					for (var a = t[r].data, o = 0; o < a[qr]; o++) this.data[n++] = a[o];
				this._len = n
			},
			addData: function(t) {
				var e = this.data;
				this._len + arguments[qr] > e[qr] && (this._expandData(), e = this.data);
				for (var i = 0; i < arguments[qr]; i++) e[this._len++] = arguments[i];
				this._prevCmd = t
			},
			_expandData: function() {
				if (!(this.data instanceof Array)) {
					for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
					this.data = t
				}
			},
			_needsDash: function() {
				return this._lineDash
			},
			_dashedLineTo: function(t, e) {
				var i, n, r = this._dashSum,
					a = this._dashOffset,
					o = this._lineDash,
					s = this._ctx,
					l = this._xi,
					c = this._yi,
					d = t - l,
					f = e - c,
					v = p(d * d + f * f),
					m = l,
					g = c,
					y = o[qr];
				for (d /= v, f /= v, 0 > a && (a = r + a), a %= r, m -= a * d, g -= a * f; d >= 0 && t >= m || 0 > d && m > t;) n = this._dashIdx, i = o[n], m += d * i, g += f * i, this._dashIdx = (n + 1) % y, d > 0 && l > m || 0 > d && m > l || s[n % 2 ? ui : ci](d >= 0 ? u(m, t) : h(m, t), f >= 0 ? u(g, e) : h(g, e));
				d = m - t, f = g - e, this._dashOffset = -p(d * d + f * f)
			},
			_dashedBezierTo: function(t, i, n, r, a, o) {
				var s, l, c, u, h, d = this._dashSum,
					f = this._dashOffset,
					v = this._lineDash,
					m = this._ctx,
					g = this._xi,
					y = this._yi,
					x = e.cubicAt,
					_ = 0,
					w = this._dashIdx,
					b = v[qr],
					M = 0;
				for (0 > f && (f = d + f), f %= d, s = 0; 1 > s; s += .1) l = x(g, t, n, a, s + .1) - x(g, t, n, a, s), c = x(y, i, r, o, s + .1) - x(y, i, r, o, s), _ += p(l * l + c * c);
				for (; b > w && (M += v[w], !(M > f)); w++);
				for (s = (M - f) / _; 1 >= s;) u = x(g, t, n, a, s), h = x(y, i, r, o, s), w % 2 ? m[ui](u, h) : m[ci](u, h), s += v[w] / _, w = (w + 1) % b;
				w % 2 !== 0 && m[ci](a, o), l = a - u, c = o - h, this._dashOffset = -p(l * l + c * c)
			},
			_dashedQuadraticTo: function(t, e, i, n) {
				var r = i,
					a = n;
				i = (i + 2 * t) / 3, n = (n + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, i, n, r, a)
			},
			toStatic: function() {
				this.data[qr] = this._len, v && this.data instanceof Array && (this.data = new Float32Array(this.data))
			},
			getBoundingRect: function() {
				o[0] = o[1] = l[0] = l[1] = Number[oi], s[0] = s[1] = c[0] = c[1] = -Number[oi];
				for (var t = this.data, e = 0, u = 0, h = 0, p = 0, v = 0; v < t[qr];) {
					var m = t[v++];
					switch (1 == v && (e = t[v], u = t[v + 1], h = e, p = u), m) {
						case a.M:
							h = t[v++], p = t[v++], e = h, u = p, l[0] = h, l[1] = p, c[0] = h, c[1] = p;
							break;
						case a.L:
							n.fromLine(e, u, t[v], t[v + 1], l, c), e = t[v++], u = t[v++];
							break;
						case a.C:
							n.fromCubic(e, u, t[v++], t[v++], t[v++], t[v++], t[v], t[v + 1], l, c), e = t[v++], u = t[v++];
							break;
						case a.Q:
							n.fromQuadratic(e, u, t[v++], t[v++], t[v], t[v + 1], l, c), e = t[v++], u = t[v++];
							break;
						case a.A:
							var g = t[v++],
								y = t[v++],
								x = t[v++],
								_ = t[v++],
								w = t[v++],
								b = t[v++] + w,
								M = (t[v++], 1 - t[v++]);
							1 == v && (h = d(w) * x + g, p = f(w) * _ + y), n.fromArc(g, y, x, _, w, b, M, l, c), e = d(b) * x + g, u = f(b) * _ + y;
							break;
						case a.R:
							h = e = t[v++], p = u = t[v++];
							var S = t[v++],
								A = t[v++];
							n.fromLine(h, p, h + S, p + A, l, c);
							break;
						case a.Z:
							e = h, u = p
					}
					i.min(o, o, l), i.max(s, s, c)
				}
				return 0 === v && (o[0] = o[1] = s[0] = s[1] = 0), new r(o[0], o[1], s[0] - o[0], s[1] - o[1])
			},
			rebuildPath: function(t) {
				for (var e = this.data, i = 0; i < this._len;) {
					var n = e[i++];
					switch (n) {
						case a.M:
							t[ui](e[i++], e[i++]);
							break;
						case a.L:
							t[ci](e[i++], e[i++]);
							break;
						case a.C:
							t[li](e[i++], e[i++], e[i++], e[i++], e[i++], e[i++]);
							break;
						case a.Q:
							t.quadraticCurveTo(e[i++], e[i++], e[i++], e[i++]);
							break;
						case a.A:
							var r = e[i++],
								o = e[i++],
								s = e[i++],
								l = e[i++],
								c = e[i++],
								u = e[i++],
								h = e[i++],
								d = e[i++],
								f = s > l ? s : l,
								p = s > l ? 1 : s / l,
								v = s > l ? l / s : 1,
								m = Math.abs(s - l) > .001;
							m ? (t[vr](r, o), t[Zi](h), t.scale(p, v), t.arc(0, 0, f, c, c + u, 1 - d), t.scale(1 / p, 1 / v), t[Zi](-h), t[vr](-r, -o)) : t.arc(r, o, f, c, c + u, 1 - d);
							break;
						case a.R:
							t.rect(e[i++], e[i++], e[i++], e[i++]);
							break;
						case a.Z:
							t[si]()
					}
				}
			}
		}, m.CMD = a, m
	}), e("zrender/contain/line", [], function() {
		return {
			containStroke: function(t, e, i, n, r, a, o) {
				if (0 === r) return !1;
				var s = r,
					l = 0,
					c = t;
				if (o > e + s && o > n + s || e - s > o && n - s > o || a > t + s && a > i + s || t - s > a && i - s > a) return !1;
				if (t === i) return Math.abs(a - t) <= s / 2;
				l = (e - n) / (t - i), c = (t * n - i * e) / (t - i);
				var u = l * a - o + c,
					h = u * u / (l * l + 1);
				return s / 2 * s / 2 >= h
			}
		}
	}), e("zrender/contain/cubic", [Kr, "../core/curve"], function(t) {
		var e = t("../core/curve");
		return {
			containStroke: function(t, i, n, r, a, o, s, l, c, u, h) {
				if (0 === c) return !1;
				var d = c;
				if (h > i + d && h > r + d && h > o + d && h > l + d || i - d > h && r - d > h && o - d > h && l - d > h || u > t + d && u > n + d && u > a + d && u > s + d || t - d > u && n - d > u && a - d > u && s - d > u) return !1;
				var f = e.cubicProjectPoint(t, i, n, r, a, o, s, l, u, h, null);
				return d / 2 >= f
			}
		}
	}), e("zrender/contain/quadratic", [Kr, "../core/curve"], function(t) {
		var e = t("../core/curve");
		return {
			containStroke: function(t, i, n, r, a, o, s, l, c) {
				if (0 === s) return !1;
				var u = s;
				if (c > i + u && c > r + u && c > o + u || i - u > c && r - u > c && o - u > c || l > t + u && l > n + u && l > a + u || t - u > l && n - u > l && a - u > l) return !1;
				var h = e.quadraticProjectPoint(t, i, n, r, a, o, l, c, null);
				return u / 2 >= h
			}
		}
	}), e("zrender/contain/util", [Kr], function(t) {
		var e = 2 * Math.PI;
		return {
			normalizeRadian: function(t) {
				return t %= e, 0 > t && (t += e), t
			}
		}
	}), e("zrender/contain/arc", [Kr, "./util"], function(t) {
		var e = t("./util").normalizeRadian,
			i = 2 * Math.PI;
		return {
			containStroke: function(t, n, r, a, o, s, l, c, u) {
				if (0 === l) return !1;
				var h = l;
				c -= t, u -= n;
				var d = Math.sqrt(c * c + u * u);
				if (d - h > r || r > d + h) return !1;
				if (Math.abs(a - o) % i < 1e-4) return !0;
				if (s) {
					var f = a;
					a = e(o), o = e(f)
				} else a = e(a), o = e(o);
				a > o && (o += i);
				var p = Math.atan2(u, c);
				return 0 > p && (p += i), p >= a && o >= p || p + i >= a && o >= p + i
			}
		}
	}), e("zrender/contain/windingLine", [], function() {
		return function(t, e, i, n, r, a) {
			if (a > e && a > n || e > a && n > a) return 0;
			if (n === e) return 0;
			var o = e > n ? 1 : -1,
				s = (a - e) / (n - e),
				l = s * (i - t) + t;
			return l > r ? o : 0
		}
	}), e("zrender/contain/path", [Kr, "../core/PathProxy", "./line", "./cubic", "./quadratic", "./arc", "./util", "../core/curve", "./windingLine"], function(t) {
		function e(t, e) {
			return Math.abs(t - e) < g
		}

		function i() {
			var t = x[0];
			x[0] = x[1], x[1] = t
		}

		function n(t, e, n, r, a, o, s, l, c, u) {
			if (u > e && u > r && u > o && u > l || e > u && r > u && o > u && l > u) return 0;
			var h = f.cubicRootAt(e, r, o, l, u, y);
			if (0 === h) return 0;
			for (var d, p, v = 0, m = -1, g = 0; h > g; g++) {
				var _ = y[g],
					w = f.cubicAt(t, n, a, s, _);
				c > w || (0 > m && (m = f.cubicExtrema(e, r, o, l, x), x[1] < x[0] && m > 1 && i(), d = f.cubicAt(e, r, o, l, x[0]), m > 1 && (p = f.cubicAt(e, r, o, l, x[1]))), v += 2 == m ? _ < x[0] ? e > d ? 1 : -1 : _ < x[1] ? d > p ? 1 : -1 : p > l ? 1 : -1 : _ < x[0] ? e > d ? 1 : -1 : d > l ? 1 : -1)
			}
			return v
		}

		function r(t, e, i, n, r, a, o, s) {
			if (s > e && s > n && s > a || e > s && n > s && a > s) return 0;
			var l = f.quadraticRootAt(e, n, a, s, y);
			if (0 === l) return 0;
			var c = f.quadraticExtremum(e, n, a);
			if (c >= 0 && 1 >= c) {
				for (var u = 0, h = f[di](e, n, a, c), d = 0; l > d; d++) {
					var p = f[di](t, i, r, y[d]);
					p > o || (u += y[d] < c ? e > h ? 1 : -1 : h > a ? 1 : -1)
				}
				return u
			}
			var p = f[di](t, i, r, y[0]);
			return p > o ? 0 : e > a ? 1 : -1
		}

		function a(t, e, i, n, r, a, o, s) {
			if (s -= e, s > i || -i > s) return 0;
			var l = Math.sqrt(i * i - s * s);
			y[0] = -l, y[1] = l;
			var c = Math.abs(n - r);
			if (1e-4 > c) return 0;
			if (1e-4 > c % m) {
				n = 0, r = m;
				var u = a ? 1 : -1;
				return o >= y[0] + t && o <= y[1] + t ? u : 0
			}
			if (a) {
				var l = n;
				n = d(r), r = d(l)
			} else n = d(n), r = d(r);
			n > r && (r += m);
			for (var h = 0, f = 0; 2 > f; f++) {
				var p = y[f];
				if (p + t > o) {
					var v = Math.atan2(s, p),
						u = a ? 1 : -1;
					0 > v && (v = m + v), (v >= n && r >= v || v + m >= n && r >= v + m) && (v > Math.PI / 2 && v < 1.5 * Math.PI && (u = -u), h += u)
				}
			}
			return h
		}

		function o(t, i, o, l, d) {
			for (var f = 0, m = 0, g = 0, y = 0, x = 0, _ = 0; _ < t[qr];) {
				var w = t[_++];
				if (w === s.M && _ > 1 && (o || (f += p(m, g, y, x, l, d)), 0 !== f)) return !0;
				switch (1 == _ && (m = t[_], g = t[_ + 1], y = m, x = g), w) {
					case s.M:
						y = t[_++], x = t[_++], m = y, g = x;
						break;
					case s.L:
						if (o) {
							if (v(m, g, t[_], t[_ + 1], i, l, d)) return !0
						} else f += p(m, g, t[_], t[_ + 1], l, d) || 0;
						m = t[_++], g = t[_++];
						break;
					case s.C:
						if (o) {
							if (c.containStroke(m, g, t[_++], t[_++], t[_++], t[_++], t[_], t[_ + 1], i, l, d)) return !0
						} else f += n(m, g, t[_++], t[_++], t[_++], t[_++], t[_], t[_ + 1], l, d) || 0;
						m = t[_++], g = t[_++];
						break;
					case s.Q:
						if (o) {
							if (u.containStroke(m, g, t[_++], t[_++], t[_], t[_ + 1], i, l, d)) return !0
						} else f += r(m, g, t[_++], t[_++], t[_], t[_ + 1], l, d) || 0;
						m = t[_++], g = t[_++];
						break;
					case s.A:
						var b = t[_++],
							M = t[_++],
							S = t[_++],
							A = t[_++],
							C = t[_++],
							T = t[_++],
							k = (t[_++], 1 - t[_++]),
							L = Math.cos(C) * S + b,
							D = Math.sin(C) * A + M;
						_ > 1 ? f += p(m, g, L, D, l, d) : (y = L, x = D);
						var I = (l - b) * A / S + b;
						if (o) {
							if (h.containStroke(b, M, A, C, C + T, k, i, I, d)) return !0
						} else f += a(b, M, A, C, C + T, k, I, d);
						m = Math.cos(C + T) * S + b, g = Math.sin(C + T) * A + M;
						break;
					case s.R:
						y = m = t[_++], x = g = t[_++];
						var P = t[_++],
							z = t[_++],
							L = y + P,
							D = x + z;
						if (o) {
							if (v(y, x, L, x, i, l, d) || v(L, x, L, D, i, l, d) || v(L, D, y, D, i, l, d) || v(y, D, L, D, i, l, d)) return !0
						} else f += p(L, x, L, D, l, d), f += p(y, D, y, x, l, d);
						break;
					case s.Z:
						if (o) {
							if (v(m, g, y, x, i, l, d)) return !0
						} else if (f += p(m, g, y, x, l, d), 0 !== f) return !0;
						m = y, g = x
				}
			}
			return o || e(g, x) || (f += p(m, g, y, x, l, d) || 0), 0 !== f
		}
		var s = t("../core/PathProxy").CMD,
			l = t("./line"),
			c = t("./cubic"),
			u = t("./quadratic"),
			h = t("./arc"),
			d = t("./util").normalizeRadian,
			f = t("../core/curve"),
			p = t("./windingLine"),
			v = l.containStroke,
			m = 2 * Math.PI,
			g = 1e-4,
			y = [-1, -1, -1],
			x = [-1, -1];
		return {
			contain: function(t, e, i) {
				return o(t, 0, !1, e, i)
			},
			containStroke: function(t, e, i, n) {
				return o(t, e, !0, i, n)
			}
		}
	}), e(ai, [Kr, "./Displayable", fr, "../core/PathProxy", "../contain/path", "./Gradient"], function(t) {
		function e(t) {
			var e = t.fill;
			return null != e && "none" !== e
		}

		function i(t) {
			var e = t[kr];
			return null != e && "none" !== e && t[Lr] > 0
		}

		function n(t) {
			r.call(this, t), this.path = new o
		}
		var r = t("./Displayable"),
			a = t(fr),
			o = t("../core/PathProxy"),
			s = t("../contain/path"),
			l = t("./Gradient"),
			c = Math.abs;
		return n[$r] = {
			constructor: n,
			type: "path",
			__dirtyPath: !0,
			strokeContainThreshold: 5,
			brush: function(t) {
				t.save();
				var n = this.style,
					r = this.path,
					a = i(n),
					o = e(n);
				this.__dirtyPath && (o && n.fill instanceof l && n.fill.updateCanvasGradient(this, t), a && n[kr] instanceof l && n[kr].updateCanvasGradient(this, t)), n.bind(t, this), this.setTransform(t);
				var s = n.lineDash,
					c = n.lineDashOffset,
					u = !!t.setLineDash;
				this.__dirtyPath || s && !u && a ? (r = this.path[hi](t), s && !u && (r.setLineDash(s), r.setLineDashOffset(c)), this[ri](r, this.shape), this.__dirtyPath = !1) : (t[hi](), this.path.rebuildPath(t)), o && r.fill(t), s && u && (t.setLineDash(s), t.lineDashOffset = c), a && r[kr](t), null != n.text && this.drawRectText(t, this[ir]()), t[ni]()
			},
			buildPath: function(t, e) {},
			getBoundingRect: function() {
				var t = this._rect,
					e = this.style;
				if (!t) {
					var n = this.path;
					this.__dirtyPath && (n[hi](), this[ri](n, this.shape)), t = n[ir]()
				}
				if (i(e) && (this[Di] || !this._rect)) {
					var r = this._rectWithStroke || (this._rectWithStroke = t.clone());
					r.copy(t);
					var a = e[Lr],
						o = e.strokeNoScale ? this.getLineScale() : 1;
					return a = Math.max(a, this.strokeContainThreshold), o > 1e-10 && (r.width += a / o, r[gr] += a / o, r.x -= a / o / 2, r.y -= a / o / 2), r
				}
				return this._rect = t, t
			},
			contain: function(t, n) {
				var r = this[Gi](t, n),
					a = this[ir](),
					o = this.style;
				if (t = r[0], n = r[1], a[fi](t, n)) {
					var l = this.path.data;
					if (i(o)) {
						var c = o[Lr],
							u = o.strokeNoScale ? this.getLineScale() : 1;
						if (1e-10 > u) return !1;
						if (c = Math.max(c, this.strokeContainThreshold), s.containStroke(l, c / u, t, n)) return !0
					}
					if (e(o)) return s[fi](l, t, n)
				}
				return !1
			},
			dirty: function(t) {
				0 === arguments[qr] && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this[Di] = !0, this.__zr && this.__zr[Ii](), this.__clipTarget && this.__clipTarget.dirty()
			},
			animateShape: function(t) {
				return this[Vi]("shape", t)
			},
			attrKV: function(t, e) {
				"shape" === t ? this[ii](e) : r[$r].attrKV.call(this, t, e)
			},
			setShape: function(t, e) {
				var i = this.shape;
				if (i) {
					if (a[Ln](t))
						for (var n in t) i[n] = t[n];
					else i[t] = e;
					this.dirty(!0)
				}
				return this
			},
			getLineScale: function() {
				var t = this[Ui];
				return t && c(t[0] - 1) > 1e-10 && c(t[3] - 1) > 1e-10 ? Math.sqrt(c(t[0] * t[3] - t[2] * t[1])) : 1
			}
		}, n[Vr] = function(t) {
			var e = function(e) {
				n.call(this, e), t.style && this.style.extendFrom(t.style, !1);
				var i = t.shape;
				if (i) {
					this.shape = this.shape || {};
					var r = this.shape;
					for (var a in i) !r.hasOwnProperty(a) && i.hasOwnProperty(a) && (r[a] = i[a])
				}
				t.init && t.init.call(this, e)
			};
			a[zr](e, n);
			for (var i in t) "style" !== i && "shape" !== i && (e[$r][i] = t[i]);
			return e
		}, a[zr](n, r), n
	}), e("zrender/tool/transformPath", [Kr, "../core/PathProxy", "../core/vector"], function(t) {
		function e(t, e) {
			var n, l, c, u, h, d = t.data,
				f = i.M,
				p = i.C,
				v = i.L,
				m = i.R,
				g = i.A,
				y = i.Q;
			for (c = 0, u = 0; c < d[qr];) {
				switch (n = d[c++], u = c, l = 0, n) {
					case f:
						l = 1;
						break;
					case v:
						l = 1;
						break;
					case p:
						l = 3;
						break;
					case y:
						l = 2;
						break;
					case g:
						var x = e[4],
							_ = e[5],
							w = o(e[0] * e[0] + e[1] * e[1]),
							b = o(e[2] * e[2] + e[3] * e[3]),
							M = s(-e[1] / b, e[0] / w);
						d[c + 7];
						d[c++] += x, d[c++] += _, d[c++] *= w, d[c++] *= b, d[c++] += M, d[c++] += M, c += 2, u = c;
						break;
					case m:
						S[0] = d[c++], S[1] = d[c++], r(S, S, e), d[u++] = S[0], d[u++] = S[1], S[0] += d[c++], S[1] += d[c++], r(S, S, e), d[u++] = S[0], d[u++] = S[1]
				}
				for (h = 0; l > h; h++) {
					var S = a[h];
					S[0] = d[c++], S[1] = d[c++], r(S, S, e), d[u++] = S[0], d[u++] = S[1]
				}
			}
		}
		var i = t("../core/PathProxy").CMD,
			n = t("../core/vector"),
			r = n[yr],
			a = [
				[],
				[],
				[]
			],
			o = Math.sqrt,
			s = Math.atan2;
		return e
	}), e("zrender/tool/path", [Kr, "../graphic/Path", "../core/PathProxy", "./transformPath", "../core/matrix"], function(t) {
		function e(t, e, i, n, r, a, o, s, l, f, m) {
			var g = l * (d / 180),
				y = h(g) * (t - i) / 2 + u(g) * (e - n) / 2,
				x = -1 * u(g) * (t - i) / 2 + h(g) * (e - n) / 2,
				_ = y * y / (o * o) + x * x / (s * s);
			_ > 1 && (o *= c(_), s *= c(_));
			var w = (r === a ? -1 : 1) * c((o * o * (s * s) - o * o * (x * x) - s * s * (y * y)) / (o * o * (x * x) + s * s * (y * y))) || 0,
				b = w * o * x / s,
				M = w * -s * y / o,
				S = (t + i) / 2 + h(g) * b - u(g) * M,
				A = (e + n) / 2 + u(g) * b + h(g) * M,
				C = v([1, 0], [(y - b) / o, (x - M) / s]),
				T = [(y - b) / o, (x - M) / s],
				k = [(-1 * y - b) / o, (-1 * x - M) / s],
				L = v(T, k);
			p(T, k) <= -1 && (L = d), p(T, k) >= 1 && (L = 0), 0 === a && L > 0 && (L -= 2 * d), 1 === a && 0 > L && (L += 2 * d), m.addData(f, S, A, o, s, C, L, g, a)
		}

		function i(t) {
			if (!t) return [];
			var i, n = t[jn](/-/g, " -")[jn](/  /g, " ")[jn](/ /g, ",")[jn](/,,/g, ",");
			for (i = 0; i < l[qr]; i++) n = n[jn](new RegExp(l[i], "g"), "|" + l[i]);
			var r, o = n.split("|"),
				s = 0,
				c = 0,
				u = new a,
				h = a.CMD;
			for (i = 1; i < o[qr]; i++) {
				var d, f = o[i],
					p = f.charAt(0),
					v = 0,
					m = f.slice(1)[jn](/e,-/g, "e-").split(",");
				m[qr] > 0 && "" === m[0] && m.shift();
				for (var g = 0; g < m[qr]; g++) m[g] = parseFloat(m[g]);
				for (; v < m[qr] && !isNaN(m[v]) && !isNaN(m[0]);) {
					var y, x, _, w, b, M, S, A = s,
						C = c;
					switch (p) {
						case "l":
							s += m[v++], c += m[v++], d = h.L, u.addData(d, s, c);
							break;
						case "L":
							s = m[v++], c = m[v++], d = h.L, u.addData(d, s, c);
							break;
						case "m":
							s += m[v++], c += m[v++], d = h.M, u.addData(d, s, c), p = "l";
							break;
						case "M":
							s = m[v++], c = m[v++], d = h.M, u.addData(d, s, c), p = "L";
							break;
						case "h":
							s += m[v++], d = h.L, u.addData(d, s, c);
							break;
						case "H":
							s = m[v++], d = h.L, u.addData(d, s, c);
							break;
						case "v":
							c += m[v++], d = h.L, u.addData(d, s, c);
							break;
						case "V":
							c = m[v++], d = h.L, u.addData(d, s, c);
							break;
						case "C":
							d = h.C, u.addData(d, m[v++], m[v++], m[v++], m[v++], m[v++], m[v++]), s = m[v - 2], c = m[v - 1];
							break;
						case "c":
							d = h.C, u.addData(d, m[v++] + s, m[v++] + c, m[v++] + s, m[v++] + c, m[v++] + s, m[v++] + c), s += m[v - 2], c += m[v - 1];
							break;
						case "S":
							y = s, x = c;
							var T = u.len(),
								k = u.data;
							r === h.C && (y += s - k[T - 4], x += c - k[T - 3]), d = h.C, A = m[v++], C = m[v++], s = m[v++], c = m[v++], u.addData(d, y, x, A, C, s, c);
							break;
						case "s":
							y = s, x = c;
							var T = u.len(),
								k = u.data;
							r === h.C && (y += s - k[T - 4], x += c - k[T - 3]), d = h.C, A = s + m[v++], C = c + m[v++], s += m[v++], c += m[v++], u.addData(d, y, x, A, C, s, c);
							break;
						case "Q":
							A = m[v++], C = m[v++], s = m[v++], c = m[v++], d = h.Q, u.addData(d, A, C, s, c);
							break;
						case "q":
							A = m[v++] + s, C = m[v++] + c, s += m[v++], c += m[v++], d = h.Q, u.addData(d, A, C, s, c);
							break;
						case "T":
							y = s, x = c;
							var T = u.len(),
								k = u.data;
							r === h.Q && (y += s - k[T - 4], x += c - k[T - 3]), s = m[v++], c = m[v++], d = h.Q, u.addData(d, y, x, s, c);
							break;
						case "t":
							y = s, x = c;
							var T = u.len(),
								k = u.data;
							r === h.Q && (y += s - k[T - 4], x += c - k[T - 3]), s += m[v++], c += m[v++], d = h.Q, u.addData(d, y, x, s, c);
							break;
						case "A":
							_ = m[v++], w = m[v++], b = m[v++], M = m[v++], S = m[v++], A = s, C = c, s = m[v++], c = m[v++], d = h.A, e(A, C, s, c, M, S, _, w, b, d, u);
							break;
						case "a":
							_ = m[v++], w = m[v++], b = m[v++], M = m[v++], S = m[v++], A = s, C = c, s += m[v++], c += m[v++], d = h.A, e(A, C, s, c, M, S, _, w, b, d, u)
					}
				}("z" === p || "Z" === p) && (d = h.Z, u.addData(d)), r = d
			}
			return u.toStatic(), u
		}

		function n(t, e) {
			var n, r = i(t);
			return e = e || {}, e[ri] = function(t) {
				t[ei](r.data), n && o(t, n);
				var e = t[Fr]();
				e && t.rebuildPath(e)
			}, e[yr] = function(t) {
				n || (n = s[mr]()), s.mul(n, t, n)
			}, e
		}
		var r = t("../graphic/Path"),
			a = t("../core/PathProxy"),
			o = t("./transformPath"),
			s = t("../core/matrix"),
			l = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"],
			c = Math.sqrt,
			u = Math.sin,
			h = Math.cos,
			d = Math.PI,
			f = function(t) {
				return Math.sqrt(t[0] * t[0] + t[1] * t[1])
			},
			p = function(t, e) {
				return (t[0] * e[0] + t[1] * e[1]) / (f(t) * f(e))
			},
			v = function(t, e) {
				return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(p(t, e))
			};
		return {
			createFromString: function(t, e) {
				return new r(n(t, e))
			},
			extendFromString: function(t, e) {
				return r[Vr](n(t, e))
			},
			mergePath: function(t, e) {
				var i, n, a = [],
					o = t[qr];
				for (n = 0; o > n; n++) i = t[n], i[Di] && i[ri](i.path, i.shape), a.push(i.path);
				var s = new r(e);
				return s[ri] = function(t) {
					t.appendPath(a);
					var e = t[Fr]();
					e && t.rebuildPath(e)
				}, s
			}
		}
	}), e("zrender/graphic/helper/roundRect", [Kr], function(t) {
		return {
			buildPath: function(t, e) {
				var i, n, r, a, o = e.x,
					s = e.y,
					l = e.width,
					c = e[gr],
					u = e.r;
				typeof u === Br ? i = n = r = a = u : u instanceof Array ? 1 === u[qr] ? i = n = r = a = u[0] : 2 === u[qr] ? (i = r = u[0], n = a = u[1]) : 3 === u[qr] ? (i = u[0], n = a = u[1], r = u[2]) : (i = u[0], n = u[1], r = u[2], a = u[3]) : i = n = r = a = 0;
				var h;
				i + n > l && (h = i + n, i *= l / h, n *= l / h), r + a > l && (h = r + a, r *= l / h, a *= l / h), n + r > c && (h = n + r, n *= c / h, r *= c / h), i + a > c && (h = i + a, i *= c / h, a *= c / h), t[ui](o + i, s), t[ci](o + l - n, s), 0 !== n && t.quadraticCurveTo(o + l, s, o + l, s + n), t[ci](o + l, s + c - r), 0 !== r && t.quadraticCurveTo(o + l, s + c, o + l - r, s + c), t[ci](o + a, s + c), 0 !== a && t.quadraticCurveTo(o, s + c, o, s + c - a), t[ci](o, s + i), 0 !== i && t.quadraticCurveTo(o, s, o + i, s)
			}
		}
	}), e("zrender/core/LRU", [Kr], function(t) {
		var e = function() {
				this.head = null, this.tail = null, this._len = 0
			},
			i = e[$r];
		i.insert = function(t) {
			var e = new n(t);
			return this.insertEntry(e), e
		}, i.insertEntry = function(t) {
			this.head ? (this.tail.next = t, t.prev = this.tail, this.tail = t) : this.head = this.tail = t, this._len++
		}, i[Li] = function(t) {
			var e = t.prev,
				i = t.next;
			e ? e.next = i : this.head = i, i ? i.prev = e : this.tail = e, t.next = t.prev = null, this._len--
		}, i.len = function() {
			return this._len
		};
		var n = function(t) {
				this.value = t, this.next, this.prev
			},
			r = function(t) {
				this._list = new e, this._map = {}, this._maxSize = t || 10
			},
			a = r[$r];
		return a.put = function(t, e) {
			var i = this._list,
				n = this._map;
			if (null == n[t]) {
				var r = i.len();
				if (r >= this._maxSize && r > 0) {
					var a = i.head;
					i[Li](a), delete n[a.key]
				}
				var o = i.insert(e);
				o.key = t, n[t] = o
			}
		}, a.get = function(t) {
			var e = this._map[t],
				i = this._list;
			return null != e ? (e !== i.tail && (i[Li](e), i.insertEntry(e)), e.value) : void 0
		}, a.clear = function() {
			this._list.clear(), this._map = {}
		}, r
	}), e("zrender/graphic/Image", [Kr, "./Displayable", dr, fr, "./helper/roundRect", "../core/LRU"], function(t) {
		var e = t("./Displayable"),
			i = t(dr),
			n = t(fr),
			r = t("./helper/roundRect"),
			a = t("../core/LRU"),
			o = new a(50),
			s = function(t) {
				e.call(this, t)
			};
		return s[$r] = {
			constructor: s,
			type: "image",
			brush: function(t) {
				var e, i = this.style,
					n = i.image;
				if (e = typeof n === Gr ? this._image : n, !e && n) {
					var a = o.get(n);
					if (!a) return e = new Image, e.onload = function() {
						e.onload = null;
						for (var t = 0; t < a.pending[qr]; t++) a.pending[t].dirty()
					}, a = {
						image: e,
						pending: [this]
					}, e.src = n, o.put(n, a), void(this._image = e);
					if (e = a.image, this._image = e, !e.width || !e[gr]) return void a.pending.push(this)
				}
				if (e) {
					var s = i.width || e.width,
						l = i[gr] || e[gr],
						c = i.x || 0,
						u = i.y || 0;
					if (!e.width || !e[gr]) return;
					if (t.save(), i.bind(t), this.setTransform(t), i.r && (t[hi](), r[ri](t, i), t.clip()), i.sWidth && i.sHeight) {
						var h = i.sx || 0,
							d = i.sy || 0;
						t.drawImage(e, h, d, i.sWidth, i.sHeight, c, u, s, l)
					} else if (i.sx && i.sy) {
						var h = i.sx,
							d = i.sy,
							f = s - h,
							p = l - d;
						t.drawImage(e, h, d, f, p, c, u, s, l)
					} else t.drawImage(e, c, u, s, l);
					null == i.width && (i.width = s), null == i[gr] && (i[gr] = l), null != i.text && this.drawRectText(t, this[ir]()), t[ni]()
				}
			},
			getBoundingRect: function() {
				var t = this.style;
				return this._rect || (this._rect = new i(t.x || 0, t.y || 0, t.width || 0, t[gr] || 0)), this._rect
			}
		}, n[zr](s, e), s
	}), e("zrender/graphic/Text", [Kr, "./Displayable", fr, "../contain/text"], function(t) {
		var e = t("./Displayable"),
			i = t(fr),
			n = t("../contain/text"),
			r = function(t) {
				e.call(this, t)
			};
		return r[$r] = {
			constructor: r,
			type: "text",
			brush: function(t) {
				var e = this.style,
					i = e.x || 0,
					r = e.y || 0,
					a = e.text,
					o = e.fill,
					s = e[kr];
				if (null != a && (a += ""), a) {
					t.save(), this.style.bind(t), this.setTransform(t), o && (t.fillStyle = o), s && (t.strokeStyle = s), t.font = e.textFont || e.font, t[vi] = e[vi], t[pi] = e[pi];
					for (var l = n.measureText("鍥�", t.font).width, c = a.split("\n"), u = 0; u < c[qr]; u++) o && t.fillText(c[u], i, r), s && t.strokeText(c[u], i, r), r += l;
					t[ni]()
				}
			},
			getBoundingRect: function() {
				if (!this._rect) {
					var t = this.style,
						e = n[ir](t.text + "", t.textFont, t[vi], t[pi]);
					e.x += t.x || 0, e.y += t.y || 0, this._rect = e
				}
				return this._rect
			}
		}, i[zr](r, e), r
	}), e("zrender/graphic/shape/Circle", [Kr, "../Path"], function(t) {
		return t("../Path")[Vr]({
			type: "circle",
			shape: {
				cx: 0,
				cy: 0,
				r: 0
			},
			buildPath: function(t, e) {
				t[ui](e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
			}
		})
	}), e("zrender/graphic/shape/Sector", [Kr, "../Path"], function(t) {
		return t("../Path")[Vr]({
			type: "sector",
			shape: {
				cx: 0,
				cy: 0,
				r0: 0,
				r: 0,
				startAngle: 0,
				endAngle: 2 * Math.PI,
				clockwise: !0
			},
			buildPath: function(t, e) {
				var i = e.cx,
					n = e.cy,
					r = Math.max(e.r0 || 0, 0),
					a = Math.max(e.r, 0),
					o = e[ti],
					s = e[Qe],
					l = e[Je],
					c = Math.cos(o),
					u = Math.sin(o);
				t[ui](c * r + i, u * r + n), t[ci](c * a + i, u * a + n), t.arc(i, n, a, o, s, !l), t[ci](Math.cos(s) * r + i, Math.sin(s) * r + n), 0 !== r && t.arc(i, n, r, s, o, l), t[si]()
			}
		})
	}), e("zrender/graphic/helper/smoothSpline", [Kr, "../../core/vector"], function(t) {
		function e(t, e, i, n, r, a, o) {
			var s = .5 * (i - t),
				l = .5 * (n - e);
			return (2 * (e - i) + s + l) * o + (-3 * (e - i) - 2 * s - l) * a + s * r + e
		}
		var i = t("../../core/vector");
		return function(t, n) {
			for (var r = t[qr], a = [], o = 0, s = 1; r > s; s++) o += i[wr](t[s - 1], t[s]);
			var l = o / 2;
			l = r > l ? r : l;
			for (var s = 0; l > s; s++) {
				var c, u, h, d = s / (l - 1) * (n ? r : r - 1),
					f = Math.floor(d),
					p = d - f,
					v = t[f % r];
				n ? (c = t[(f - 1 + r) % r], u = t[(f + 1) % r], h = t[(f + 2) % r]) : (c = t[0 === f ? f : f - 1], u = t[f > r - 2 ? r - 1 : f + 1], h = t[f > r - 3 ? r - 1 : f + 2]);
				var m = p * p,
					g = p * m;
				a.push([e(c[0], v[0], u[0], h[0], p, m, g), e(c[1], v[1], u[1], h[1], p, m, g)])
			}
			return a
		}
	}), e("zrender/graphic/helper/smoothBezier", [Kr, "../../core/vector"], function(t) {
		var e = t("../../core/vector"),
			i = e.min,
			n = e.max,
			r = e.scale,
			a = e[wr],
			o = e.add;
		return function(t, s, l, c) {
			var u, h, d, f, p = [],
				v = [],
				m = [],
				g = [];
			if (c) {
				d = [1 / 0, 1 / 0], f = [-(1 / 0), -(1 / 0)];
				for (var y = 0, x = t[qr]; x > y; y++) i(d, d, t[y]), n(f, f, t[y]);
				i(d, d, c[0]), n(f, f, c[1])
			}
			for (var y = 0, x = t[qr]; x > y; y++) {
				var _ = t[y];
				if (l) u = t[y ? y - 1 : x - 1], h = t[(y + 1) % x];
				else {
					if (0 === y || y === x - 1) {
						p.push(e.clone(t[y]));
						continue
					}
					u = t[y - 1], h = t[y + 1]
				}
				e.sub(v, h, u), r(v, v, s);
				var w = a(_, u),
					b = a(_, h),
					M = w + b;
				0 !== M && (w /= M, b /= M), r(m, v, -w), r(g, v, b);
				var S = o([], _, m),
					A = o([], _, g);
				c && (n(S, S, d), i(S, S, f), n(A, A, d), i(A, A, f)), p.push(S), p.push(A)
			}
			return l && p.push(p.shift()), p
		}
	}), e("zrender/graphic/helper/poly", [Kr, "./smoothSpline", "./smoothBezier"], function(t) {
		var e = t("./smoothSpline"),
			i = t("./smoothBezier");
		return {
			buildPath: function(t, n, r) {
				var a = n[Ke],
					o = n.smooth;
				if (a && a[qr] >= 2) {
					if (o && "spline" !== o) {
						var s = i(a, o, r, n.smoothConstraint);
						t[ui](a[0][0], a[0][1]);
						for (var l = a[qr], c = 0;
							(r ? l : l - 1) > c; c++) {
							var u = s[2 * c],
								h = s[2 * c + 1],
								d = a[(c + 1) % l];
							t[li](u[0], u[1], h[0], h[1], d[0], d[1])
						}
					} else {
						"spline" === o && (a = e(a, r)), t[ui](a[0][0], a[0][1]);
						for (var c = 1, f = a[qr]; f > c; c++) t[ci](a[c][0], a[c][1])
					}
					r && t[si]()
				}
			}
		}
	}), e("zrender/graphic/shape/Polygon", [Kr, "../helper/poly", "../Path"], function(t) {
		var e = t("../helper/poly");
		return t("../Path")[Vr]({
			type: "polygon",
			shape: {
				points: null,
				smooth: !1,
				smoothConstraint: null
			},
			buildPath: function(t, i) {
				e[ri](t, i, !0)
			}
		})
	}), e("zrender/graphic/shape/Polyline", [Kr, "../helper/poly", "../Path"], function(t) {
		var e = t("../helper/poly");
		return t("../Path")[Vr]({
			type: "polyline",
			shape: {
				points: null,
				smooth: !1,
				smoothConstraint: null
			},
			style: {
				stroke: "#000",
				fill: null
			},
			buildPath: function(t, i) {
				e[ri](t, i, !1)
			}
		})
	}), e("zrender/graphic/shape/Rect", [Kr, "../helper/roundRect", "../Path"], function(t) {
		var e = t("../helper/roundRect");
		return t("../Path")[Vr]({
			type: "rect",
			shape: {
				r: 0,
				x: 0,
				y: 0,
				width: 0,
				height: 0
			},
			buildPath: function(t, i) {
				var n = i.x,
					r = i.y,
					a = i.width,
					o = i[gr];
				i.r ? e[ri](t, i) : t.rect(n, r, a, o), t[si]()
			}
		})
	}), e("zrender/graphic/shape/Line", [Kr, "../Path"], function(t) {
		return t("../Path")[Vr]({
			type: "line",
			shape: {
				x1: 0,
				y1: 0,
				x2: 0,
				y2: 0,
				percent: 1
			},
			style: {
				stroke: "#000",
				fill: null
			},
			buildPath: function(t, e) {
				var i = e.x1,
					n = e.y1,
					r = e.x2,
					a = e.y2,
					o = e.percent;
				0 !== o && (t[ui](i, n), 1 > o && (r = i * (1 - o) + r * o, a = n * (1 - o) + a * o), t[ci](r, a))
			},
			pointAt: function(t) {
				var e = this.shape;
				return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
			}
		})
	}), e("zrender/graphic/shape/BezierCurve", [Kr, "../../core/curve", "../Path"], function(t) {
		var e = t("../../core/curve"),
			i = e.quadraticSubdivide,
			n = e.cubicSubdivide,
			r = e[di],
			a = e.cubicAt,
			o = [];
		return t("../Path")[Vr]({
			type: "bezier-curve",
			shape: {
				x1: 0,
				y1: 0,
				x2: 0,
				y2: 0,
				cpx1: 0,
				cpy1: 0,
				percent: 1
			},
			style: {
				stroke: "#000",
				fill: null
			},
			buildPath: function(t, e) {
				var r = e.x1,
					a = e.y1,
					s = e.x2,
					l = e.y2,
					c = e.cpx1,
					u = e.cpy1,
					h = e.cpx2,
					d = e.cpy2,
					f = e.percent;
				0 !== f && (t[ui](r, a), null == h || null == d ? (1 > f && (i(r, c, s, f, o), c = o[1], s = o[2], i(a, u, l, f, o), u = o[1], l = o[2]), t.quadraticCurveTo(c, u, s, l)) : (1 > f && (n(r, c, h, s, f, o), c = o[1], h = o[2], s = o[3], n(a, u, d, l, f, o), u = o[1], d = o[2], l = o[3]), t[li](c, u, h, d, s, l)))
			},
			pointAt: function(t) {
				var e = this.shape,
					i = e.cpx2,
					n = e.cpy2;
				return null === i || null === n ? [r(e.x1, e.cpx1, e.x2, t), r(e.y1, e.cpy1, e.y2, t)] : [a(e.x1, e.cpx1, e.cpx1, e.x2, t), a(e.y1, e.cpy1, e.cpy1, e.y2, t)]
			}
		})
	}), e("zrender/graphic/shape/Arc", [Kr, "../Path"], function(t) {
		return t("../Path")[Vr]({
			type: "arc",
			shape: {
				cx: 0,
				cy: 0,
				r: 0,
				startAngle: 0,
				endAngle: 2 * Math.PI,
				clockwise: !0
			},
			style: {
				stroke: "#000",
				fill: null
			},
			buildPath: function(t, e) {
				var i = e.cx,
					n = e.cy,
					r = Math.max(e.r, 0),
					a = e[ti],
					o = e[Qe],
					s = e[Je],
					l = Math.cos(a),
					c = Math.sin(a);
				t[ui](l * r + i, c * r + n), t.arc(i, n, r, a, o, !s)
			}
		})
	}), e("zrender/graphic/LinearGradient", [Kr, fr, "./Gradient"], function(t) {
		var e = t(fr),
			i = t("./Gradient"),
			n = function(t, e, n, r, a) {
				this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == n ? 1 : n, this.y2 = null == r ? 0 : r, i.call(this, a)
			};
		return n[$r] = {
			constructor: n,
			type: "linear",
			updateCanvasGradient: function(t, e) {
				for (var i = t[ir](), n = this.x * i.width + i.x, r = this.x2 * i.width + i.x, a = this.y * i[gr] + i.y, o = this.y2 * i[gr] + i.y, s = e.createLinearGradient(n, a, r, o), l = this.colorStops, c = 0; c < l[qr]; c++) s.addColorStop(l[c][$e], l[c].color);
				this.canvasGradient = s
			}
		}, e[zr](n, i), n
	}), e("zrender/graphic/RadialGradient", [Kr, fr, "./Gradient"], function(t) {
		var e = t(fr),
			i = t("./Gradient"),
			n = function(t, e, n, r) {
				this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == n ? .5 : n, i.call(this, r)
			};
		return n[$r] = {
			constructor: n,
			type: "radial",
			updateCanvasGradient: function(t, e) {
				for (var i = t[ir](), n = i.width, r = i[gr], a = Math.min(n, r), o = this.x * n + i.x, s = this.y * r + i.y, l = this.r * a, c = e.createRadialGradient(o, s, 0, o, s, l), u = this.colorStops, h = 0; h < u[qr]; h++) c.addColorStop(u[h][$e], u[h].color);
				this.canvasGradient = c
			}
		}, e[zr](n, i), n
	}), e("echarts/util/graphic", [Kr, Yr, "zrender/tool/path", ai, Ni, _r, Mr, "zrender/graphic/Gradient", "zrender/container/Group", "zrender/graphic/Image", "zrender/graphic/Text", "zrender/graphic/shape/Circle", "zrender/graphic/shape/Sector", "zrender/graphic/shape/Polygon", "zrender/graphic/shape/Polyline", "zrender/graphic/shape/Rect", "zrender/graphic/shape/Line", "zrender/graphic/shape/BezierCurve", "zrender/graphic/shape/Arc", "zrender/graphic/LinearGradient", "zrender/graphic/RadialGradient"], function(t) {
		function e(t) {
			if (!t.__isHover) {
				if (t.__hoverStlDirty) {
					var e = t.style[kr],
						i = t.style.fill,
						n = t.__hoverStl;
					n.fill = n.fill || (i instanceof y ? i : v.lift(i, -.1)), n[kr] = n[kr] || (e instanceof y ? e : v.lift(e, -.1));
					var r = {};
					for (var a in n) n.hasOwnProperty(a) && (r[a] = t.style[a]);
					t.__normalStl = r, t.__hoverStlDirty = !1
				}
				t[He](t.__hoverStl), t.z2 += 1, t.__isHover = !0
			}
		}

		function i(t) {
			if (t.__isHover) {
				var e = t.__normalStl;
				e && t[He](e), t.z2 -= 1, t.__isHover = !1
			}
		}

		function n(t) {
			"group" === t.type ? t[Ci](function(t) {
				"group" !== t.type && e(t)
			}) : e(t)
		}

		function r(t) {
			"group" === t.type ? t[Ci](function(t) {
				"group" !== t.type && i(t)
			}) : i(t)
		}

		function a(t, e) {
			t.__hoverStl = t[Fe] || e, t.__hoverStlDirty = !0
		}

		function o() {
			!this.__isEmphasis && n(this)
		}

		function s() {
			!this.__isEmphasis && r(this)
		}

		function l() {
			this.__isEmphasis = !0, n(this)
		}

		function c() {
			this.__isEmphasis = !1, r(this)
		}

		function u(t, e, i, n, r) {
			var a = t ? "Update" : "",
				o = n && n[Dr]("animationDuration" + a),
				s = n && n[Dr]("animationEasing" + a);
			n && n[Dr](Ei) ? e[Oe](i, o, s, r) : (e.attr(i), r && r())
		}
		var h = t(Yr),
			d = t("zrender/tool/path"),
			f = Math.round,
			p = t(ai),
			v = t(Ni),
			m = t(_r),
			g = t(Mr),
			y = t("zrender/graphic/Gradient"),
			x = {};
		return x.Group = t("zrender/container/Group"), x.Image = t("zrender/graphic/Image"), x.Text = t("zrender/graphic/Text"), x[Ye] = t("zrender/graphic/shape/Circle"), x[Xe] = t("zrender/graphic/shape/Sector"), x[je] = t("zrender/graphic/shape/Polygon"), x[Ue] = t("zrender/graphic/shape/Polyline"), x.Rect = t("zrender/graphic/shape/Rect"), x.Line = t("zrender/graphic/shape/Line"), x.BezierCurve = t("zrender/graphic/shape/BezierCurve"), x.Arc = t("zrender/graphic/shape/Arc"), x.LinearGradient = t("zrender/graphic/LinearGradient"), x.RadialGradient = t("zrender/graphic/RadialGradient"), x[qe] = function(t) {
			return p[Vr](t)
		}, x.extendPath = function(t, e) {
			return d.extendFromString(t, e)
		}, x.makePath = function(t, e, i, n) {
			var r = d.createFromString(t, e),
				a = r[ir]();
			if (i) {
				var o = a.width / a[gr];
				if (n === cr) {
					var s, l = i[gr] * o;
					l <= i.width ? s = i[gr] : (l = i.width, s = l / o);
					var c = i.x + i.width / 2,
						u = i.y + i[gr] / 2;
					i.x = c - l / 2, i.y = u - s / 2, i.width = l, i[gr] = s
				}
				this.resizePath(r, i)
			}
			return r
		}, x.mergePath = d.mergePath, x.resizePath = function(t, e) {
			if (t[yr]) {
				var i = t[ir](),
					n = i.calculateTransform(e);
				t[yr](n)
			}
		}, x.subPixelOptimizeLine = function(t) {
			var e = x.subPixelOptimize,
				i = t.shape,
				n = t.style[Lr];
			return f(2 * i.x1) === f(2 * i.x2) && (i.x1 = i.x2 = e(i.x1, n, !0)), f(2 * i.y1) === f(2 * i.y2) && (i.y1 = i.y2 = e(i.y1, n, !0)), t
		}, x[We] = function(t) {
			var e = x.subPixelOptimize,
				i = t.shape,
				n = t.style[Lr],
				r = i.x,
				a = i.y,
				o = i.width,
				s = i[gr];
			return i.x = e(i.x, n, !0), i.y = e(i.y, n, !0), i.width = Math.max(e(r + o, n, !1) - i.x, 0 === o ? 0 : 1), i[gr] = Math.max(e(a + s, n, !1) - i.y, 0 === s ? 0 : 1), t
		}, x.subPixelOptimize = function(t, e, i) {
			var n = f(2 * t);
			return (n + f(e)) % 2 === 0 ? n / 2 : (n + (i ? 1 : -1)) / 2
		}, x[Ze] = function(t, e) {
			e = e || {}, "group" === t.type ? t[Ci](function(t) {
				"group" !== t.type && a(t, e)
			}) : a(t, e), t.on(Ge, o).on(Be, s), t.on(hn, l).on(un, c)
		}, x[Ne] = function(t, e, i) {
			var n = e[Dr](Nn) || lr,
				r = n[Zr](lr) >= 0 ? "white" : i,
				a = e[rr](nr);
			h[Vr](t, {
				textDistance: e[Dr](wr) || 5,
				textFont: a[er](),
				textPosition: n,
				textFill: a[Ee]() || r
			})
		}, x[Re] = h.curry(u, !0), x[Ve] = h.curry(u, !1), x.getTransform = function(t, e) {
			for (var i = m.identity([]); t && t !== e;) m.mul(i, t[Hi](), i), t = t[Wi];
			return i
		}, x[yr] = function(t, e, i) {
			return i && (e = m.invert([], e)), g[yr]([], t, e)
		}, x.transformDirection = function(t, e, i) {
			var n = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
				r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
				a = ["left" === t ? -n : "right" === t ? n : 0, "top" === t ? -r : t === hr ? r : 0];
			return a = x[yr](a, e, i), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? hr : "top"
		}, x
	}), e(ze, [], function() {
		function t(t) {
			var e = this.os = {},
				i = this.browser = {},
				n = t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
				r = t.match(/(Android);?[\s\/]+([\d.]+)?/),
				a = t.match(/(iPad).*OS\s([\d_]+)/),
				o = t.match(/(iPod)(.*OS\s([\d_]+))?/),
				s = !a && t.match(/(iPhone\sOS)\s([\d_]+)/),
				l = t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
				c = l && t.match(/TouchPad/),
				u = t.match(/Kindle\/([\d.]+)/),
				h = t.match(/Silk\/([\d._]+)/),
				d = t.match(/(BlackBerry).*Version\/([\d.]+)/),
				f = t.match(/(BB10).*Version\/([\d.]+)/),
				p = t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
				v = t.match(/PlayBook/),
				m = t.match(/Chrome\/([\d.]+)/) || t.match(/CriOS\/([\d.]+)/),
				g = t.match(/Firefox\/([\d.]+)/),
				y = t.match(/MSIE ([\d.]+)/),
				x = n && t.match(/Mobile\//) && !m,
				_ = t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/) && !m,
				y = t.match(/MSIE\s([\d.]+)/);
			return (i.webkit = !!n) && (i.version = n[1]), r && (e.android = !0, e.version = r[2]), s && !o && (e.ios = e.iphone = !0, e.version = s[2][jn](/_/g, ".")), a && (e.ios = e.ipad = !0, e.version = a[2][jn](/_/g, ".")), o && (e.ios = e.ipod = !0, e.version = o[3] ? o[3][jn](/_/g, ".") : null), l && (e.webos = !0, e.version = l[2]), c && (e.touchpad = !0), d && (e.blackberry = !0, e.version = d[2]), f && (e.bb10 = !0, e.version = f[2]), p && (e.rimtabletos = !0, e.version = p[2]), v && (i.playbook = !0), u && (e.kindle = !0, e.version = u[1]), h && (i.silk = !0, i.version = h[1]), !h && e.android && t.match(/Kindle Fire/) && (i.silk = !0), m && (i.chrome = !0, i.version = m[1]), g && (i.firefox = !0, i.version = g[1]), y && (i.ie = !0, i.version = y[1]), x && (t.match(/Safari/) || e.ios) && (i.safari = !0), _ && (i.webview = !0), y && (i.ie = !0, i.version = y[1]), e.tablet = !!(a || v || r && !t.match(/Mobile/) || g && t.match(/Tablet/) || y && !t.match(/Phone/) && t.match(/Touch/)), e.phone = !(e.tablet || e.ipod || !(r || s || l || d || f || m && t.match(/Android/) || m && t.match(/CriOS\/([\d.]+)/) || g && t.match(/Mobile/) || y && t.match(/Touch/))), {
				browser: i,
				os: e,
				node: !1,
				canvasSupported: document[Wr](Hr)[Fr] ? !0 : !1,
				touchEventsSupported: "ontouchstart" in window || navigator.maxTouchPoints
			}
		}
		return typeof navigator === br ? {
			browser: {},
			os: {},
			node: !0,
			canvasSupported: !0
		} : t(navigator.userAgent)
	}), e(Pe, [Kr, "../mixin/Eventful"], function(t) {
		function e(t) {
			return t.getBoundingClientRect ? t.getBoundingClientRect() : {
				left: 0,
				top: 0
			}
		}

		function i(t, i) {
			if (i = i || window.event, null != i.zrX) return i;
			var n = i.type,
				r = n && n[Zr]("touch") >= 0;
			if (r) {
				var a = "touchend" != n ? i.targetTouches[0] : i.changedTouches[0];
				if (a) {
					var o = e(t);
					i.zrX = a.clientX - o.left, i.zrY = a.clientY - o.top
				}
			} else {
				var s = 0,
					l = 0;
				i.pageX || i.pageY ? (s = i.pageX, l = i.pageY) : (s = i.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, l = i.clientY + document.body.scrollTop + document.documentElement.scrollTop);
				var c = e(t),
					u = c.top + (window.pageYOffset || t.scrollTop) - (t.clientTop || 0),
					h = c.left + (window.pageXOffset || t.scrollLeft) - (t.clientLeft || 0);
				i.zrX = s - h, i.zrY = l - u, i.zrDelta = i.wheelDelta ? i.wheelDelta / 120 : -(i.detail || 0) / 3
			}
			return i
		}

		function n(t, e, i) {
			o ? t.addEventListener(e, i) : t.attachEvent("on" + e, i)
		}

		function r(t, e, i) {
			o ? t.removeEventListener(e, i) : t.detachEvent("on" + e, i)
		}
		var a = t("../mixin/Eventful"),
			o = typeof window !== br && !!window.addEventListener,
			s = o ? function(t) {
				t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0
			} : function(t) {
				t.returnValue = !1, t.cancelBubble = !0
			};
		return {
			normalizeEvent: i,
			addEventListener: n,
			removeEventListener: r,
			stop: s,
			Dispatcher: a
		}
	}), e("zrender/mixin/Draggable", [Kr], function(t) {
		function e() {
			this.on(Ie, this._dragStart, this), this.on(De, this._drag, this), this.on(Le, this._dragEnd, this), this.on("globalout", this._dragEnd, this)
		}
		return e[$r] = {
			constructor: e,
			_dragStart: function(t) {
				var e = t[Bi];
				e && e[zi] && (this._draggingTarget = e, e.dragging = !0, this._x = t[ke], this._y = t[Te], this._dispatchProxy(e, "dragstart", t.event))
			},
			_drag: function(t) {
				var e = this._draggingTarget;
				if (e) {
					var i = t[ke],
						n = t[Te],
						r = i - this._x,
						a = n - this._y;
					this._x = i, this._y = n, e.drift(r, a, t), this._dispatchProxy(e, "drag", t.event);
					var o = this._findHover(i, n, e),
						s = this._dropTarget;
					this._dropTarget = o, e !== o && (s && o !== s && this._dispatchProxy(s, "dragleave", t.event), o && o !== s && this._dispatchProxy(o, "dragenter", t.event))
				}
			},
			_dragEnd: function(t) {
				var e = this._draggingTarget;
				e && (e.dragging = !1), this._dispatchProxy(e, "dragend", t.event), this._dropTarget && this._dispatchProxy(this._dropTarget, "drop", t.event), this._draggingTarget = null, this._dropTarget = null
			}
		}, e
	}), e("zrender/core/GestureMgr", [Kr], function(t) {
		function e(t) {
			var e = t[1][0] - t[0][0],
				i = t[1][1] - t[0][1];
			return Math.sqrt(e * e + i * i)
		}

		function i(t) {
			return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
		}
		var n = function() {
			this._track = []
		};
		n[$r] = {
			constructor: n,
			recognize: function(t, e) {
				return this._doTrack(t, e), this._recognize(t)
			},
			clear: function() {
				return this._track[qr] = 0, this
			},
			_doTrack: function(t, e) {
				var i = t.touches;
				if (i) {
					for (var n = {
							points: [],
							touches: [],
							target: e,
							event: t
						}, r = 0, a = i[qr]; a > r; r++) {
						var o = i[r];
						n[Ke].push([o.clientX, o.clientY]), n.touches.push(o)
					}
					this._track.push(n)
				}
			},
			_recognize: function(t) {
				for (var e in r)
					if (r.hasOwnProperty(e)) {
						var i = r[e](this._track, t);
						if (i) return i
					}
			}
		};
		var r = {
			pinch: function(t, n) {
				var r = t[qr];
				if (r) {
					var a = (t[r - 1] || {})[Ke],
						o = (t[r - 2] || {})[Ke] || a;
					if (o && o[qr] > 1 && a && a[qr] > 1) {
						var s = e(a) / e(o);
						!isFinite(s) && (s = 1), n.pinchScale = s;
						var l = i(a);
						return n.pinchX = l[0], n.pinchY = l[1], {
							type: "pinch",
							target: t[0][Bi],
							event: n
						}
					}
				}
			}
		};
		return n
	}), e("zrender/Handler", [Kr, "./core/env", "./core/event", "./core/util", "./mixin/Draggable", "./core/GestureMgr", "./mixin/Eventful"], function(t) {
		function e(t) {
			return "_" + t + "Handler"
		}

		function i(t, e, i) {
			return {
				type: t,
				event: i,
				target: e,
				cancelBubble: !1,
				offsetX: i.zrX,
				offsetY: i.zrY,
				gestureEvent: i.gestureEvent,
				pinchX: i.pinchX,
				pinchY: i.pinchY,
				pinchScale: i.pinchScale,
				wheelDelta: i.zrDelta
			}
		}

		function n(t, e, i) {
			var n = t._gestureMgr;
			"start" === i && n.clear();
			var r = n.recognize(e, t._findHover(e.zrX, e.zrY, null));
			if ("end" === i && n.clear(), r) {
				var a = r.type;
				e.gestureEvent = a, t._dispatchProxy(r[Bi], a, r.event)
			}
		}

		function r(t) {
			for (var i = d[Nr](f), n = i[qr]; n--;) {
				var r = i[n];
				t[e(r)] = l.bind(y[r], t)
			}
		}

		function a(t, e, i) {
			if (t[t.rectHover ? "rectContain" : fi](e, i)) {
				for (var n = t[Wi]; n;) {
					if (n.clipPath && !n.clipPath[fi](e, i)) return !1;
					n = n[Wi]
				}
				return !0
			}
			return !1
		}
		var o = t("./core/env"),
			s = t("./core/event"),
			l = t("./core/util"),
			c = t("./mixin/Draggable"),
			u = t("./core/GestureMgr"),
			h = t("./mixin/Eventful"),
			d = ["click", "dblclick", "mousewheel", De, Be, Le, Ie],
			f = ["touchstart", "touchend", "touchmove"],
			p = 300,
			v = s.addEventListener,
			m = s.removeEventListener,
			g = s.normalizeEvent,
			y = {
				mousemove: function(t) {
					t = g(this.root, t);
					var e = t.zrX,
						i = t.zrY,
						n = this._findHover(e, i, null),
						r = this._hovered;
					this._hovered = n, this.root.style.cursor = n ? n.cursor : this._defaultCursorStyle, r && n !== r && r.__zr && this._dispatchProxy(r, Be, t), this._dispatchProxy(n, De, t), n && n !== r && this._dispatchProxy(n, Ge, t)
				},
				mouseout: function(t) {
					t = g(this.root, t);
					var e = t.toElement || t.relatedTarget;
					if (e != this.root)
						for (; e && 9 != e.nodeType;) {
							if (e === this.root) return;
							e = e[Ce]
						}
					this._dispatchProxy(this._hovered, Be, t), this[wi]("globalout", {
						event: t
					})
				},
				touchstart: function(t) {
					t = g(this.root, t), this._lastTouchMoment = new Date, n(this, t, "start"), this._mousemoveHandler(t), this._mousedownHandler(t)
				},
				touchmove: function(t) {
					t = g(this.root, t), n(this, t, "change"), this._mousemoveHandler(t)
				},
				touchend: function(t) {
					t = g(this.root, t), n(this, t, "end"), this._mouseupHandler(t), +new Date - this._lastTouchMoment < p && this._clickHandler(t)
				}
			};
		l.each(["click", Ie, Le, "mousewheel", "dblclick"], function(t) {
			y[t] = function(e) {
				e = g(this.root, e);
				var i = this._findHover(e.zrX, e.zrY, null);
				this._dispatchProxy(i, t, e)
			}
		});
		var x = function(t, i, n) {
			h.call(this), this.root = t, this[Ae] = i, this.painter = n, this._hovered, this._lastTouchMoment, this._lastX, this._lastY, this._defaultCursorStyle = "default", this._gestureMgr = new u, r(this), o.touchEventsSupported ? (l.each(f, function(i) {
				v(t, i, this[e(i)])
			}, this), v(t, Be, this._mouseoutHandler)) : (l.each(d, function(i) {
				v(t, i, this[e(i)])
			}, this), v(t, "DOMMouseScroll", this._mousewheelHandler)), c.call(this)
		};
		return x[$r] = {
			constructor: x,
			resize: function(t) {
				this._hovered = null
			},
			dispatch: function(t, i) {
				var n = this[e(t)];
				n && n(i)
			},
			dispose: function() {
				for (var t = this.root, i = d[Nr](f), n = 0; n < i[qr]; n++) {
					var r = i[n];
					m(t, r, this[e(r)])
				}
				m(t, "DOMMouseScroll", this._mousewheelHandler), this.root = this[Ae] = this.painter = null
			},
			setDefaultCursorStyle: function(t) {
				this._defaultCursorStyle = t
			},
			_dispatchProxy: function(t, e, n) {
				for (var r = "on" + e, a = i(e, t, n), o = t; o && (o[r] && (a.cancelBubble = o[r].call(o, a)), o[wi](e, a), o = o[Wi], !a.cancelBubble););
				a.cancelBubble || (this[wi](e, a), this.painter && this.painter.eachOtherLayer(function(t) {
					typeof t[r] == Er && t[r].call(t, a), t[wi] && t[wi](e, a)
				}))
			},
			_findHover: function(t, e, i) {
				for (var n = this[Ae][Se](), r = n[qr] - 1; r >= 0; r--)
					if (!n[r][Me] && n[r] !== i && a(n[r], t, e)) return n[r]
			}
		}, l.mixin(x, h), l.mixin(x, c), x
	}), e("zrender/Storage", [Kr, "./core/util", "./container/Group"], function(t) {
		function e(t, e) {
			return t[be] === e[be] ? t.z === e.z ? t.z2 === e.z2 ? t.__renderidx - e.__renderidx : t.z2 - e.z2 : t.z - e.z : t[be] - e[be]
		}
		var i = t("./core/util"),
			n = t("./container/Group"),
			r = function() {
				this._elements = {}, this._roots = [], this._displayList = [], this._displayListLen = 0
			};
		return r[$r] = {
			constructor: r,
			getDisplayList: function(t) {
				return t && this.updateDisplayList(), this._displayList
			},
			updateDisplayList: function() {
				this._displayListLen = 0;
				for (var t = this._roots, i = this._displayList, n = 0, r = t[qr]; r > n; n++) {
					var a = t[n];
					this._updateAndAddDisplayable(a)
				}
				i[qr] = this._displayListLen;
				for (var n = 0, r = i[qr]; r > n; n++) i[n].__renderidx = n;
				i.sort(e)
			},
			_updateAndAddDisplayable: function(t, e) {
				if (!t[Pi]) {
					t.beforeUpdate(), t[we](), t.afterUpdate();
					var i = t.clipPath;
					if (i && (i[Wi] = t, i[qi](), e ? (e = e.slice(), e.push(i)) : e = [i]), "group" == t.type) {
						for (var n = t._children, r = 0; r < n[qr]; r++) {
							var a = n[r];
							a[Di] = t[Di] || a[Di], this._updateAndAddDisplayable(a, e)
						}
						t[Di] = !1
					} else t.__clipPaths = e, this._displayList[this._displayListLen++] = t
				}
			},
			addRoot: function(t) {
				this._elements[t.id] || (t instanceof n && t.addChildrenToStorage(this), this[ki](t), this._roots.push(t))
			},
			delRoot: function(t) {
				if (null == t) {
					for (var e = 0; e < this._roots[qr]; e++) {
						var r = this._roots[e];
						r instanceof n && r.delChildrenFromStorage(this)
					}
					return this._elements = {}, this._roots = [], this._displayList = [], void(this._displayListLen = 0)
				}
				if (t instanceof Array)
					for (var e = 0, a = t[qr]; a > e; e++) this.delRoot(t[e]);
				else {
					var o;
					o = typeof t == Gr ? this._elements[t] : t;
					var s = i[Zr](this._roots, o);
					s >= 0 && (this[Ti](o.id), this._roots[bn](s, 1), o instanceof n && o.delChildrenFromStorage(this))
				}
			},
			addToMap: function(t) {
				return t instanceof n && (t.__storage = this), t.dirty(), this._elements[t.id] = t, this
			},
			get: function(t) {
				return this._elements[t]
			},
			delFromMap: function(t) {
				var e = this._elements,
					i = e[t];
				return i && (delete e[t], i instanceof n && (i.__storage = null)), this
			},
			dispose: function() {
				this._elements = this._renderList = this._roots = null
			}
		}, r
	}), e("zrender/animation/Animation", [Kr, fr, "../core/event", "./Animator"], function(t) {
		var e = t(fr),
			i = t("../core/event").Dispatcher,
			n = typeof window !== br && (window.requestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(t) {
				setTimeout(t, 16)
			},
			r = t("./Animator"),
			a = function(t) {
				t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function() {}, this._clips = [], this._running = !1, this._time = 0, i.call(this)
			};
		return a[$r] = {
			constructor: a,
			addClip: function(t) {
				this._clips.push(t)
			},
			addAnimator: function(t) {
				t[Ei] = this;
				for (var e = t.getClips(), i = 0; i < e[qr]; i++) this.addClip(e[i])
			},
			removeClip: function(t) {
				var i = e[Zr](this._clips, t);
				i >= 0 && this._clips[bn](i, 1)
			},
			removeAnimator: function(t) {
				for (var e = t.getClips(), i = 0; i < e[qr]; i++) this.removeClip(e[i]);
				t[Ei] = null
			},
			_update: function() {
				for (var t = (new Date).getTime(), e = t - this._time, i = this._clips, n = i[qr], r = [], a = [], o = 0; n > o; o++) {
					var s = i[o],
						l = s.step(t);
					l && (r.push(l), a.push(s))
				}
				for (var o = 0; n > o;) i[o]._needsRemove ? (i[o] = i[n - 1], i.pop(), n--) : o++;
				n = r[qr];
				for (var o = 0; n > o; o++) a[o].fire(r[o]);
				this._time = t, this.onframe(e), this[wi]("frame", e), this.stage[we] && this.stage[we]()
			},
			start: function() {
				function t() {
					e._running && (n(t), e._update())
				}
				var e = this;
				this._running = !0, this._time = (new Date).getTime(), n(t)
			},
			stop: function() {
				this._running = !1
			},
			clear: function() {
				this._clips = []
			},
			animate: function(t, e) {
				e = e || {};
				var i = new r(t, e.loop, e.getter, e.setter);
				return i
			}
		}, e.mixin(a, i), a
	}), e("zrender/Layer", [Kr, "./core/util", "./config"], function(t) {
		function e() {
			return !1
		}

		function i(t, e, i, n) {
			var r = document[Wr](e),
				a = i[_n](),
				o = i[xn](),
				s = r.style;
			return s[Nn] = "absolute", s.left = 0, s.top = 0, s.width = a + "px", s[gr] = o + "px", r.width = a * n, r[gr] = o * n, r.setAttribute("data-zr-dom-id", t), r
		}
		var n = t("./core/util"),
			r = t("./config"),
			a = function(t, a, o) {
				var s;
				o = o || r.devicePixelRatio, typeof t === Gr ? s = i(t, Hr, a, o) : n[Ln](t) && (s = t, t = s.id), this.id = t, this.dom = s;
				var l = s.style;
				l && (s.onselectstart = e, l["-webkit-user-select"] = "none", l["user-select"] = "none", l["-webkit-touch-callout"] = "none", l["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)"), this.domBack = null, this.ctxBack = null, this.painter = a, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = o
			};
		return a[$r] = {
			constructor: a,
			elCount: 0,
			__dirty: !0,
			initContext: function() {
				this.ctx = this.dom[Fr]("2d");
				var t = this.dpr;
				1 != t && this.ctx.scale(t, t)
			},
			createBackBuffer: function() {
				var t = this.dpr;
				this.domBack = i("back-" + this.id, Hr, this.painter, t), this.ctxBack = this.domBack[Fr]("2d"), 1 != t && this.ctxBack.scale(t, t)
			},
			resize: function(t, e) {
				var i = this.dpr,
					n = this.dom,
					r = n.style,
					a = this.domBack;
				r.width = t + "px", r[gr] = e + "px", n.width = t * i, n[gr] = e * i, 1 != i && this.ctx.scale(i, i), a && (a.width = t * i, a[gr] = e * i, 1 != i && this.ctxBack.scale(i, i))
			},
			clear: function(t) {
				var e = this.dom,
					i = this.ctx,
					n = e.width,
					r = e[gr],
					a = this.clearColor,
					o = this.motionBlur && !t,
					s = this.lastFrameAlpha,
					l = this.dpr;
				if (o && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(e, 0, 0, n / l, r / l)), i.clearRect(0, 0, n / l, r / l), a && (i.save(), i.fillStyle = this.clearColor, i.fillRect(0, 0, n / l, r / l), i[ni]()), o) {
					var c = this.domBack;
					i.save(), i.globalAlpha = s, i.drawImage(c, 0, 0, n / l, r / l), i[ni]()
				}
			}
		}, a
	}), e("zrender/Painter", [Kr, "./config", "./core/util", "./core/log", "./core/BoundingRect", "./Layer", "./graphic/Image"], function(t) {
		function e(t) {
			return parseInt(t, 10)
		}

		function i(t) {
			return t ? t.isBuildin ? !0 : typeof t[_e] !== Er || typeof t[Ii] !== Er ? !1 : !0 : !1
		}

		function n(t) {
			t.__unusedCount++
		}

		function r(t) {
			t[Di] = !1, 1 == t.__unusedCount && t.clear()
		}

		function a(t, e, i) {
			return f.copy(t[ir]()), t[Ui] && f[yr](t[Ui]), p.width = e, p[gr] = i, !f[xe](p)
		}

		function o(t, e) {
			if (!t || !e || t[qr] !== e[qr]) return !0;
			for (var i = 0; i < t[qr]; i++)
				if (t[i] !== e[i]) return !0
		}

		function s(t, e) {
			for (var i = 0; i < t[qr]; i++) {
				var n, r = t[i];
				r[Ui] && (n = r[Ui], e[Ui](n[0], n[1], n[2], n[3], n[4], n[5]));
				var a = r.path;
				a[hi](e), r[ri](a, r.shape), e.clip(), r[Ui] && (n = r[Fi], e[Ui](n[0], n[1], n[2], n[3], n[4], n[5]))
			}
		}
		var l = t("./config"),
			c = t("./core/util"),
			u = t("./core/log"),
			h = t("./core/BoundingRect"),
			d = t("./Layer"),
			f = new h(0, 0, 0, 0),
			p = new h(0, 0, 0, 0),
			v = function(t, e, i) {
				var n = !t.nodeName || "CANVAS" === t.nodeName[Gn]();
				i = i || {}, this.dpr = i.devicePixelRatio || l.devicePixelRatio, this._singleCanvas = n, this.root = t;
				var r = t.style;
				if (r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = "none", r["user-select"] = "none", r["-webkit-touch-callout"] = "none", t[ye] = ""), this[Ae] = e, n) {
					var a = t.width,
						o = t[gr];
					this._width = a, this._height = o;
					var s = new d(t, this, 1);
					s.initContext(), this._layers = {
						0: s
					}, this._zlevelList = [0]
				} else {
					var a = this._getWidth(),
						o = this._getHeight();
					this._width = a, this._height = o;
					var c = document[Wr]("div");
					this._domRoot = c;
					var u = c.style;
					u[Nn] = "relative", u.overflow = "hidden", u.width = this._width + "px", u[gr] = this._height + "px", t[ge](c), this._layers = {}, this._zlevelList = []
				}
				this._layerConfig = {}, this.pathToImage = this._createPathToImage()
			};
		return v[$r] = {
			constructor: v,
			isSingleCanvas: function() {
				return this._singleCanvas
			},
			getViewportRoot: function() {
				return this._singleCanvas ? this._layers[0].dom : this._domRoot
			},
			refresh: function(t) {
				var e = this[Ae][Se](!0),
					i = this._zlevelList;
				this._paintList(e, t);
				for (var n = 0; n < i[qr]; n++) {
					var r = i[n],
						a = this._layers[r];
					!a.isBuildin && a[Ii] && a[Ii]()
				}
				return this
			},
			_paintList: function(t, e) {
				null == e && (e = !1), this._updateLayerStatus(t);
				var i, l, c, h = this._width,
					d = this._height;
				this.eachBuildinLayer(n);
				for (var f = null, p = 0, v = t[qr]; v > p; p++) {
					var m = t[p],
						g = this._singleCanvas ? 0 : m[be];
					if (l !== g && (l = g, i = this.getLayer(l), i.isBuildin || u("ZLevel " + l + " has been used by unkown layer " + i.id), c = i.ctx, i.__unusedCount = 0, (i[Di] || e) && i.clear()), (i[Di] || e) && !m[Ai] && 0 !== m.style[Tr] && m.scale[0] && m.scale[1] && (!m.culling || !a(m, h, d))) {
						var y = m.__clipPaths;
						o(y, f) && (f && c[ni](), y && (c.save(), s(y, c)), f = y), m.beforeBrush && m.beforeBrush(c), m.brush(c, !1), m.afterBrush && m.afterBrush(c)
					}
					m[Di] = !1
				}
				f && c[ni](), this.eachBuildinLayer(r)
			},
			getLayer: function(t) {
				if (this._singleCanvas) return this._layers[0];
				var e = this._layers[t];
				return e || (e = new d("zr_" + t, this, this.dpr), e.isBuildin = !0, this._layerConfig[t] && c.merge(e, this._layerConfig[t], !0), this.insertLayer(t, e), e.initContext()), e
			},
			insertLayer: function(t, e) {
				var n = this._layers,
					r = this._zlevelList,
					a = r[qr],
					o = null,
					s = -1,
					l = this._domRoot;
				if (n[t]) return void u("ZLevel " + t + " has been used already");
				if (!i(e)) return void u("Layer of zlevel " + t + " is not valid");
				if (a > 0 && t > r[0]) {
					for (s = 0; a - 1 > s && !(r[s] < t && r[s + 1] > t); s++);
					o = n[r[s]]
				}
				if (r[bn](s + 1, 0, t), o) {
					var c = o.dom;
					c.nextSibling ? l.insertBefore(e.dom, c.nextSibling) : l[ge](e.dom)
				} else l.firstChild ? l.insertBefore(e.dom, l.firstChild) : l[ge](e.dom);
				n[t] = e
			},
			eachLayer: function(t, e) {
				var i, n, r = this._zlevelList;
				for (n = 0; n < r[qr]; n++) i = r[n], t.call(e, this._layers[i], i)
			},
			eachBuildinLayer: function(t, e) {
				var i, n, r, a = this._zlevelList;
				for (r = 0; r < a[qr]; r++) n = a[r], i = this._layers[n], i.isBuildin && t.call(e, i, n)
			},
			eachOtherLayer: function(t, e) {
				var i, n, r, a = this._zlevelList;
				for (r = 0; r < a[qr]; r++) n = a[r], i = this._layers[n], i.isBuildin || t.call(e, i, n)
			},
			getLayers: function() {
				return this._layers
			},
			_updateLayerStatus: function(t) {
				var e = this._layers,
					i = {};
				this.eachBuildinLayer(function(t, e) {
					i[e] = t.elCount, t.elCount = 0
				});
				for (var n = 0, r = t[qr]; r > n; n++) {
					var a = t[n],
						o = this._singleCanvas ? 0 : a[be],
						s = e[o];
					if (s) {
						if (s.elCount++, s[Di]) continue;
						s[Di] = a[Di]
					}
				}
				this.eachBuildinLayer(function(t, e) {
					i[e] !== t.elCount && (t[Di] = !0)
				})
			},
			clear: function() {
				return this.eachBuildinLayer(this._clearLayer), this
			},
			_clearLayer: function(t) {
				t.clear()
			},
			configLayer: function(t, e) {
				if (e) {
					var i = this._layerConfig;
					i[t] ? c.merge(i[t], e, !0) : i[t] = e;
					var n = this._layers[t];
					n && c.merge(n, i[t], !0)
				}
			},
			delLayer: function(t) {
				var e = this._layers,
					i = this._zlevelList,
					n = e[t];
				n && (n.dom[Ce].removeChild(n.dom), delete e[t], i[bn](c[Zr](i, t), 1))
			},
			resize: function(t, e) {
				var i = this._domRoot;
				if (i.style.display = "none", t = t || this._getWidth(), e = e || this._getHeight(), i.style.display = "", this._width != t || e != this._height) {
					i.style.width = t + "px", i.style[gr] = e + "px";
					for (var n in this._layers) this._layers[n][_e](t, e);
					this[Ii](!0)
				}
				return this._width = t, this._height = e, this
			},
			clearLayer: function(t) {
				var e = this._layers[t];
				e && e.clear()
			},
			dispose: function() {
				this.root[ye] = "", this.root = this[Ae] = this._domRoot = this._layers = null
			},
			getRenderedCanvas: function(t) {
				if (t = t || {}, this._singleCanvas) return this._layers[0].dom;
				var e = new d("image", this, t.pixelRatio || this.dpr);
				e.initContext();
				var i = e.ctx;
				e.clearColor = t[me], e.clear();
				for (var n = this[Ae][Se](!0), r = 0; r < n[qr]; r++) {
					var a = n[r];
					a[Ai] || (a.beforeBrush && a.beforeBrush(i), a.brush(i, !1), a.afterBrush && a.afterBrush(i))
				}
				return e.dom
			},
			getWidth: function() {
				return this._width
			},
			getHeight: function() {
				return this._height
			},
			_getWidth: function() {
				var t = this.root,
					i = document.defaultView.getComputedStyle(t);
				return (t.clientWidth || e(i.width) || e(t.style.width)) - (e(i.paddingLeft) || 0) - (e(i.paddingRight) || 0) | 0
			},
			_getHeight: function() {
				var t = this.root,
					i = document.defaultView.getComputedStyle(t);
				return (t[ve] || e(i[gr]) || e(t.style[gr])) - (e(i.paddingTop) || 0) - (e(i.paddingBottom) || 0) | 0
			},
			_pathToImage: function(e, i, n, r, a) {
				var o = document[Wr](Hr),
					s = o[Fr]("2d");
				o.width = n * a, o[gr] = r * a, s.clearRect(0, 0, n * a, r * a);
				var l = {
					position: i[Nn],
					rotation: i[Xi],
					scale: i.scale
				};
				i[Nn] = [0, 0, 0], i[Xi] = 0, i.scale = [1, 1], i && i.brush(s);
				var c = t("./graphic/Image"),
					u = new c({
						id: e,
						style: {
							x: 0,
							y: 0,
							image: o
						}
					});
				return null != l[Nn] && (u[Nn] = i[Nn] = l[Nn]), null != l[Xi] && (u[Xi] = i[Xi] = l[Xi]), null != l.scale && (u.scale = i.scale = l.scale), u
			},
			_createPathToImage: function() {
				var t = this;
				return function(e, i, n, r) {
					return t._pathToImage(e, i, n, r, t.dpr)
				}
			}
		}, v
	}), e("zrender/zrender", [Kr, "./core/guid", "./core/env", "./Handler", "./Storage", "./animation/Animation", "./Painter"], function(t) {
		function e(t) {
			delete c[t]
		}
		var i = t("./core/guid"),
			n = t("./core/env"),
			r = t("./Handler"),
			a = t("./Storage"),
			o = t("./animation/Animation"),
			s = !n[pe],
			l = {
				canvas: t("./Painter")
			},
			c = {},
			u = {};
		u.version = "3.0.1", u.init = function(t, e) {
			var n = new h(i(), t, e);
			return c[n.id] = n, n
		}, u[fe] = function(t) {
			if (t) t[fe]();
			else {
				for (var e in c) c[e][fe]();
				c = {}
			}
			return u
		}, u.getInstance = function(t) {
			return c[t]
		}, u.registerPainter = function(t, e) {
			l[t] = e
		};
		var h = function(t, e, i) {
			i = i || {}, this.dom = e, this.id = t;
			var c = this,
				u = new a,
				h = i.renderer;
			if (s) {
				if (!l.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
				h = "vml"
			} else h && l[h] || (h = Hr);
			var d = new l[h](e, u, i);
			this[Ae] = u, this.painter = d, n.node || (this.handler = new r(d.getViewportRoot(), u, d)), this[Ei] = new o({
				stage: {
					update: function() {
						c._needsRefresh && c.refreshImmediately()
					}
				}
			}), this[Ei].start(), this._needsRefresh;
			var f = u[Ti],
				p = u[ki];
			u[Ti] = function(t) {
				var e = u.get(t);
				f.call(u, t), e && e.removeSelfFromZr(c)
			}, u[ki] = function(t) {
				p.call(u, t), t.addSelfToZr(c)
			}
		};
		return h[$r] = {
			constructor: h,
			getId: function() {
				return this.id
			},
			add: function(t) {
				this[Ae].addRoot(t), this._needsRefresh = !0
			},
			remove: function(t) {
				this[Ae].delRoot(t), this._needsRefresh = !0
			},
			configLayer: function(t, e) {
				this.painter.configLayer(t, e), this._needsRefresh = !0
			},
			refreshImmediately: function() {
				this._needsRefresh = !1, this.painter[Ii](), this._needsRefresh = !1
			},
			refresh: function() {
				this._needsRefresh = !0
			},
			resize: function() {
				this.painter[_e](), this.handler && this.handler[_e]()
			},
			clearAnimation: function() {
				this[Ei].clear()
			},
			getWidth: function() {
				return this.painter[_n]()
			},
			getHeight: function() {
				return this.painter[xn]()
			},
			toDataURL: function(t, e, i) {
				return this.painter.toDataURL(t, e, i)
			},
			pathToImage: function(t, e, n) {
				var r = i();
				return this.painter.pathToImage(r, t, e, n)
			},
			setDefaultCursorStyle: function(t) {
				this.handler.setDefaultCursorStyle(t)
			},
			on: function(t, e, i) {
				this.handler && this.handler.on(t, e, i)
			},
			off: function(t, e) {
				this.handler && this.handler.off(t, e)
			},
			trigger: function(t, e) {
				this.handler && this.handler[wi](t, e)
			},
			clear: function() {
				this[Ae].delRoot(), this.painter.clear()
			},
			dispose: function() {
				this[Ei].stop(), this.clear(), this[Ae][fe](), this.painter[fe](), this.handler && this.handler[fe](), this[Ei] = this[Ae] = this.painter = this.handler = null, e(this.id)
			}
		}, u
	}), e("zrender", ["zrender/zrender"], function(t) {
		return t
	}), e("echarts/loading/default", [Kr, "../util/graphic", Yr], function(t) {
		var e = t("../util/graphic"),
			i = t(Yr),
			n = Math.PI;
		return function(t, r) {
			r = r || {}, i[sr](r, {
				text: "loading",
				color: "#c23531",
				textColor: "#000",
				maskColor: "rgba(255, 255, 255, 0.8)",
				zlevel: 0
			});
			var a = new e.Rect({
					style: {
						fill: r.maskColor
					},
					zlevel: r[be],
					z: 1e4
				}),
				o = new e.Arc({
					shape: {
						startAngle: -n / 2,
						endAngle: -n / 2 + .1,
						r: 10
					},
					style: {
						stroke: r.color,
						lineCap: "round",
						lineWidth: 5
					},
					zlevel: r[be],
					z: 10001
				}),
				s = new e.Rect({
					style: {
						fill: "none",
						text: r.text,
						textPosition: "right",
						textDistance: 10,
						textFill: r.textColor
					},
					zlevel: r[be],
					z: 10001
				});
			o.animateShape(!0).when(1e3, {
				endAngle: 3 * n / 2
			}).start("circularInOut"), o.animateShape(!0).when(1e3, {
				startAngle: 3 * n / 2
			}).delay(300).start("circularInOut");
			var l = new e.Group;
			return l.add(o), l.add(s), l.add(a), l[_e] = function() {
				var e = t[_n]() / 2,
					i = t[xn]() / 2;
				o[ii]({
					cx: e,
					cy: i
				});
				var n = o.shape.r;
				s[ii]({
					x: e - n,
					y: i - n,
					width: 2 * n,
					height: 2 * n
				}), a[ii]({
					x: 0,
					y: 0,
					width: t[_n](),
					height: t[xn]()
				})
			}, l[_e](), l
		}
	}), e("echarts/visual/seriesColor", [Kr, "zrender/graphic/Gradient"], function(t) {
		var e = t("zrender/graphic/Gradient");
		return function(t, i, n) {
			function r(t) {
				var r = [i, un, "color"],
					a = n.get("color"),
					o = t[sn](),
					s = t.get(r) || a[t[ln] % a[qr]];
				o[de]("color", s), n[he](t) || (typeof s !== Er || s instanceof e || o.each(function(e) {
					o[ue](e, "color", s(t[tn](e)))
				}), o.each(function(t) {
					var e = o[en](t),
						i = e.get(r, !0);
					null != i && o[ue](t, "color", i)
				}))
			}
			t ? n[ce](t, r) : n[le](r)
		}
	}), e("echarts/preprocessor/helper/compatStyle", [Kr, Yr], function(t) {
		function e(t) {
			var e = t && t[oe];
			e && i.each(n, function(n) {
				var r = e[un],
					a = e[hn];
				r && r[n] && (t[n] = t[n] || {}, t[n][un] ? i.merge(t[n][un], r[n]) : t[n][un] = r[n], r[n] = null), a && a[n] && (t[n] = t[n] || {}, t[n][hn] ? i.merge(t[n][hn], a[n]) : t[n][hn] = a[n], a[n] = null)
			})
		}
		var i = t(Yr),
			n = ["areaStyle", se, "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
		return function(t) {
			e(t);
			var n = t.data;
			if (n) {
				for (var r = 0; r < n[qr]; r++) e(n[r]);
				var a = t.markPoint;
				if (a && a.data)
					for (var o = a.data, r = 0; r < o[qr]; r++) e(o[r]);
				var s = t.markLine;
				if (s && s.data)
					for (var l = s.data, r = 0; r < l[qr]; r++) i[qn](l[r]) ? (e(l[r][0]), e(l[r][1])) : e(l[r])
			}
		}
	}), e("echarts/preprocessor/backwardCompat", [Kr, Yr, "./helper/compatStyle"], function(t) {
		function e(t, e) {
			e = e.split(",");
			for (var i = t, n = 0; n < e[qr] && (i = i && i[e[n]], null != i); n++);
			return i
		}

		function i(t, e, i, n) {
			e = e.split(",");
			for (var r, a = t, o = 0; o < e[qr] - 1; o++) r = e[o], null == a[r] && (a[r] = {}), a = a[r];
			(n || null == a[e[o]]) && (a[e[o]] = i)
		}

		function n(t) {
			c(o, function(e) {
				e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
			})
		}
		var r = t(Yr),
			a = t("./helper/compatStyle"),
			o = [
				["x", "left"],
				["y", "top"],
				["x2", "right"],
				["y2", hr]
			],
			s = ["grid", "geo", "parallel", ae, "toolbox", "title", "visualMap", re, Cn],
			l = ["bar", "boxplot", "candlestick", "chord", "effectScatter", "funnel", "gauge", "lines", "graph", "heatmap", "line", "map", "parallel", "pie", "radar", "sankey", ne, "treemap"],
			c = r.each;
		return function(t) {
			c(t[An], function(t) {
				if (r[Ln](t)) {
					var o = t.type;
					if (a(t), ("pie" === o || "gauge" === o) && null != t.clockWise && (t[Je] = t.clockWise), "gauge" === o) {
						var s = e(t, "pointer.color");
						null != s && i(t, ie, s)
					}
					for (var c = 0; c < l[qr]; c++)
						if (l[c] === t.type) {
							n(t);
							break
						}
				}
			}), t.dataRange && (t.visualMap = t.dataRange), c(s, function(e) {
				var i = t[e];
				i && (r[qn](i) || (i = [i]), c(i, function(t) {
					n(t)
				}))
			})
		}
	}), e("echarts/echarts", [Kr, "./model/Global", "./ExtensionAPI", "./CoordinateSystem", "./model/OptionManager", "./model/Component", "./model/Series", "./view/Component", "./view/Chart", "./util/graphic", "zrender", Yr, Ni, ze, Yi, "./loading/default", "./visual/seriesColor", "./preprocessor/backwardCompat", "./util/graphic", "./util/number", "./util/format"], function(t) {
		function e(t) {
			return function(e, i, n) {
				e = e && e[Zn](), T[$r][t].call(this, e, i, n)
			}
		}

		function i() {
			T.call(this)
		}

		function n(t, e, n) {
			n = n || {}, e && k(B, function(t) {
				t(e)
			}), this.id, this.group, this._dom = t, this._zr = M.init(t, {
				renderer: n.renderer || Hr,
				devicePixelRatio: n.devicePixelRatio
			}), typeof e === Gr && (e = Z[e]), this._theme = S.clone(e), this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._api = new v(this), this._coordinateSystem = new m, T.call(this), this._messageCenter = new i, this._initEvents(), this[_e] = S.bind(this[_e], this)
		}

		function r(t, e) {
			var i = this[ee];
			i && i[te]({
				mainType: "series",
				query: e
			}, function(n, r) {
				var a = this._chartsMap[n.__viewId];
				a && a.__alive && a[t](n, i, this._api, e)
			}, this)
		}

		function a(t, e, i) {
			var n = this._api;
			k(this._componentsViews, function(r) {
				var a = r.__model;
				r[t](a, e, n, i), d(a, r)
			}, this), e[le](function(r, a) {
				var o = this._chartsMap[r.__viewId];
				o[t](r, e, n, i), d(r, o)
			}, this)
		}

		function o(t, e) {
			for (var i = "component" === t, n = i ? this._componentsViews : this._chartsViews, r = i ? this._componentsMap : this._chartsMap, a = this._zr, o = 0; o < n[qr]; o++) n[o].__alive = !1;
			e[i ? te : le](function(t, o) {
				if (i) {
					if (t === An) return
				} else o = t;
				var s = o.id + "_" + o.type,
					l = r[s];
				if (!l) {
					var c = y[Or](o.type),
						u = i ? _[Ir](c.main, c.sub) : w[Ir](c.sub);
					if (!u) return;
					l = new u, l.init(e, this._api), r[s] = l, n.push(l), a.add(l.group)
				}
				o.__viewId = s, l.__alive = !0, l.__id = s, l.__model = o
			}, this);
			for (var o = 0; o < n[qr];) {
				var s = n[o];
				s.__alive ? o++ : (a[Li](s.group), s[fe](e, this._api), n[bn](o, 1), delete r[s.__id])
			}
		}

		function s(t) {
			k(D, function(e) {
				k(N[e] || [], function(e) {
					e(t)
				})
			})
		}

		function l(t) {
			var e = {};
			t[le](function(t) {
				var i = t.get("stack"),
					n = t[sn]();
				if (i && "list" === n.type) {
					var r = e[i];
					r && (n.stackedOn = r), e[i] = n
				}
			})
		}

		function c(t, e) {
			var i = this._api;
			k(E, function(n) {
				n(t, i, e)
			})
		}

		function u(t, e) {
			k(L, function(i) {
				k(G[i] || [], function(i) {
					i(t, e)
				})
			})
		}

		function h(t, e) {
			var i = this._api;
			k(this._componentsViews, function(n) {
				var r = n.__model;
				n[bi](r, t, i, e), d(r, n)
			}, this), k(this._chartsViews, function(t) {
				t.__alive = !1
			}, this), t[le](function(n, r) {
				var a = this._chartsMap[n.__viewId];
				a.__alive = !0, a[bi](n, t, i, e), d(n, a)
			}, this), k(this._chartsViews, function(e) {
				e.__alive || e[Li](t, i)
			}, this)
		}

		function d(t, e) {
			var i = t.get("z"),
				n = t.get(be);
			e.group[Ci](function(t) {
				null != i && (t.z = i), null != n && (t[be] = n)
			})
		}

		function f(t) {
			function e(t, e) {
				for (var i = 0; i < t[qr]; i++) {
					var n = t[i];
					n[a] = e
				}
			}
			var i = 0,
				n = 1,
				r = 2,
				a = "__connectUpdateStatus";
			S.each(O, function(o, s) {
				t._messageCenter.on(s, function(o) {
					if (H[t.group] && t[a] !== i) {
						var s = t.makeActionFromEvent(o),
							l = [];
						for (var c in F) {
							var u = F[c];
							u !== t && u.group === t.group && l.push(u)
						}
						e(l, i), k(l, function(t) {
							t[a] !== n && t[yn](s)
						}), e(l, r)
					}
				})
			})
		}
		var p = t("./model/Global"),
			v = t("./ExtensionAPI"),
			m = t("./CoordinateSystem"),
			g = t("./model/OptionManager"),
			y = t("./model/Component"),
			x = t("./model/Series"),
			_ = t("./view/Component"),
			w = t("./view/Chart"),
			b = t("./util/graphic"),
			M = t("zrender"),
			S = t(Yr),
			A = t(Ni),
			C = t(ze),
			T = t(Yi),
			k = S.each,
			L = ["echarts", "chart", "component"],
			D = [Ui, Xr, "statistic"];
		i[$r].on = e("on"), i[$r].off = e("off"), i[$r].one = e("one"), S.mixin(i, T);
		var I = n[$r];
		I[wn] = function() {
			return this._dom
		}, I.getZr = function() {
			return this._zr
		}, I.setOption = function(t, e, i) {
			(!this[ee] || e) && (this[ee] = new p(null, null, this._theme, new g(this._api))), this[ee].setOption(t, B), P.prepareAndUpdate.call(this), !i && this._zr.refreshImmediately()
		}, I.setTheme = function() {
			console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
		}, I[rr] = function() {
			return this[ee]
		}, I.getOption = function() {
			return S.clone(this[ee][Yn])
		}, I[_n] = function() {
			return this._zr[_n]()
		}, I[xn] = function() {
			return this._zr[xn]()
		}, I.getRenderedCanvas = function(t) {
			if (C[pe]) {
				t = t || {}, t.pixelRatio = t.pixelRatio || 1, t[me] = t[me] || this[ee].get(me);
				var e = this._zr,
					i = e[Ae][Se]();
				return S.each(i, function(t) {
					t[Ri](!0)
				}), e.painter.getRenderedCanvas(t)
			}
		}, I.getDataURL = function(t) {
			t = t || {};
			var e = t.excludeComponents,
				i = this[ee],
				n = [],
				r = this;
			k(e, function(t) {
				i[te]({
					mainType: t
				}, function(t) {
					var e = r._componentsMap[t.__viewId];
					e.group[Pi] || (n.push(e), e.group[Pi] = !0)
				})
			});
			var a = this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
			return k(n, function(t) {
				t.group[Pi] = !1
			}), a
		}, I.getConnectedDataURL = function(t) {
			if (C[pe]) {
				var e = this.group,
					i = Math.min,
					n = Math.max,
					r = 1 / 0;
				if (H[e]) {
					var a = r,
						o = r,
						s = -r,
						l = -r,
						c = [],
						u = t && t.pixelRatio || 1;
					for (var h in F) {
						var d = F[h];
						if (d.group === e) {
							var f = d.getRenderedCanvas(S.clone(t)),
								p = d[wn]().getBoundingClientRect();
							a = i(p.left, a), o = i(p.top, o), s = n(p.right, s), l = n(p[hr], l), c.push({
								dom: f,
								left: p.left,
								top: p.top
							})
						}
					}
					a *= u, o *= u, s *= u, l *= u;
					var v = s - a,
						m = l - o,
						g = S.createCanvas();
					g.width = v, g[gr] = m;
					var y = M.init(g);
					return k(c, function(t) {
						var e = new b.Image({
							style: {
								x: t.left * u - a,
								y: t.top * u - o,
								image: t.dom
							}
						});
						y.add(e)
					}), y.refreshImmediately(), g.toDataURL("image/" + (t && t.type || "png"))
				}
				return this.getDataURL(t)
			}
		};
		var P = {
			update: function(t) {
				var e = this[ee];
				if (e) {
					e.restoreData(), s.call(this, e), l.call(this, e), this._coordinateSystem[we](e, this._api), c.call(this, e, t), u.call(this, e, t), h.call(this, e, t);
					var i = e.get(me) || "transparent",
						n = this._zr.painter;
					if (n.isSingleCanvas && n.isSingleCanvas()) this._zr.configLayer(0, {
						clearColor: i
					});
					else {
						if (!C[pe]) {
							var r = A.parse(i);
							i = A.stringify(r, "rgb"), 0 === r[3] && (i = "transparent")
						}
						i = i, this._dom.style[me] = i
					}
				}
			},
			updateView: function(t) {
				var e = this[ee];
				e && (c.call(this, e, t), u.call(this, e, t), a.call(this, "updateView", e, t))
			},
			updateVisual: function(t) {
				var e = this[ee];
				e && (u.call(this, e, t), a.call(this, "updateVisual", e, t))
			},
			updateLayout: function(t) {
				var e = this[ee];
				e && (c.call(this, e, t), a.call(this, Si, e, t))
			},
			highlight: function(t) {
				r.call(this, Qt, t)
			},
			downplay: function(t) {
				r.call(this, Jt, t)
			},
			prepareAndUpdate: function(t) {
				var e = this[ee];
				o.call(this, "component", e), o.call(this, "chart", e), P[we].call(this, t)
			}
		};
		I[_e] = function() {
			this._zr[_e]();
			var t = this[ee] && this[ee][kn]("media");
			P[t ? "prepareAndUpdate" : we].call(this), this._loadingFX && this._loadingFX[_e]()
		};
		var z = t("./loading/default");
		I.showLoading = function(t, e) {
			S[Ln](t) && (e = t, t = "default");
			var i = z(this._api, e),
				n = this._zr;
			this._loadingFX = i, n.add(i)
		}, I.hideLoading = function() {
			this._loadingFX && this._zr[Li](this._loadingFX), this._loadingFX = null
		}, I.makeActionFromEvent = function(t) {
			var e = S[Vr]({}, t);
			return e.type = O[t.type], e
		}, I[yn] = function(t, e) {
			var i = R[t.type];
			if (i) {
				var n = i.actionInfo,
					r = n[we] || we,
					a = [t],
					o = !1;
				t.batch && (o = !0, a = S.map(t.batch, function(e) {
					return e = S[sr](S[Vr]({}, e), t), e.batch = null, e
				}));
				for (var s, l = [], c = t.type === Qt || t.type === Jt, u = 0; u < a[qr]; u++) {
					var h = a[u];
					s = i.action(h, this[ee]), s = s || S[Vr]({}, h), s.type = n.event || s.type, l.push(s), c && P[r].call(this, h)
				}
				"none" !== r && !c && P[r].call(this, t), e || (s = o ? {
					type: l[0].type,
					batch: l
				} : l[0], this._messageCenter[wi](s.type, s))
			}
		}, I.on = e("on"), I.off = e("off"), I.one = e("one");
		var V = ["click", "dblclick", Ge, Be, "globalout"];
		I._initEvents = function() {
			var t = this._zr;
			k(V, function(e) {
				t.on(e, function(t) {
					var i = this[rr](),
						n = t[Bi];
					if (n && null != n[_i]) {
						var r = n[Kt] || i.getSeriesByIndex(n[ln]),
							a = r && r[tn](n[_i]) || {};
						a.event = t, a.type = e, this[wi](e, a)
					}
				}, this)
			}, this), k(O, function(t, e) {
				this._messageCenter.on(e, function(t) {
					this[wi](e, t)
				}, this)
			}, this)
		}, I.isDisposed = function() {
			return this._disposed
		}, I.clear = function() {
			this.setOption({}, !0)
		}, I[fe] = function() {
			this._disposed = !0;
			var t = this._api,
				e = this[ee];
			k(this._componentsViews, function(i) {
				i[fe](e, t)
			}), k(this._chartsViews, function(i) {
				i[fe](e, t)
			}), this._zr[fe](), F[this.id] = null
		}, S.mixin(n, T);
		var R = [],
			O = {},
			E = [],
			N = {},
			B = [],
			G = {},
			Z = {},
			F = {},
			H = {},
			W = new Date - 0,
			q = new Date - 0,
			U = "_echarts_instance_",
			j = {
				version: "3.0.2",
				dependencies: {
					zrender: "3.0.1"
				}
			};
		return j.init = function(t, e, i) {
			if (M.version[jn](".", "") - 0 < j.dependencies.zrender[jn](".", "") - 0) throw new Error("ZRender " + M.version + " is too old for ECharts " + j.version + ". Current version need ZRender " + j.dependencies.zrender + "+");
			if (!t) throw new Error("Initialize failed: invalid dom.");
			var r = new n(t, e, i);
			return r.id = "ec_" + W++, F[r.id] = r, t.setAttribute && t.setAttribute(U, r.id), f(r), r
		}, j.connect = function(t) {
			if (S[qn](t)) {
				var e = t;
				t = null, S.each(e, function(e) {
					null != e.group && (t = e.group)
				}), t = t || "g_" + q++, S.each(e, function(e) {
					e.group = t
				})
			}
			return H[t] = !0, t
		}, j.disConnect = function(t) {
			H[t] = !1
		}, j[fe] = function(t) {
			S.isDom(t) ? t = j.getInstanceByDom(t) : typeof t === Gr && (t = F[t]), t instanceof n && !t.isDisposed() && t[fe]()
		}, j.getInstanceByDom = function(t) {
			var e = t.getAttribute(U);
			return F[e]
		}, j.getInstanceById = function(t) {
			return F[t]
		}, j.registerTheme = function(t, e) {
			Z[t] = e
		}, j[$t] = function(t) {
			B.push(t)
		}, j[Yt] = function(t, e) {
			if (S[Zr](D, t) < 0) throw new Error("stage should be one of " + D);
			var i = N[t] || (N[t] = []);
			i.push(e)
		}, j[Xt] = function(t, e, i) {
			typeof e === Er && (i = e, e = "");
			var n = S[Ln](t) ? t.type : [t, t = {
				event: e
			}][0];
			t.event = (t.event || n)[Zn](), e = t.event, R[n] || (R[n] = {
				action: i,
				actionInfo: t
			}), O[e] = n
		}, j.registerCoordinateSystem = function(t, e) {
			m[gn](t, e)
		}, j[jt] = function(t) {
			S[Zr](E, t) < 0 && E.push(t)
		}, j[Ut] = function(t, e) {
			if (S[Zr](L, t) < 0) throw new Error("stage should be one of " + L);
			var i = G[t] || (G[t] = []);
			i.push(e)
		}, j[qt] = function(t) {
			return w[Vr](t)
		}, j[Wt] = function(t) {
			return y[Vr](t)
		}, j[Ht] = function(t) {
			return x[Vr](t)
		}, j[Ft] = function(t) {
			return _[Vr](t)
		}, j.setCanvasCreator = function(t) {
			S.createCanvas = t
		}, j[Ut]("echarts", S.curry(t("./visual/seriesColor"), "", oe)), j[$t](t("./preprocessor/backwardCompat")), j[Xt]({
			type: "highlight",
			event: "highlight",
			update: "highlight"
		}, S.noop), j[Xt]({
			type: "downplay",
			event: "downplay",
			update: "downplay"
		}, S.noop), j.graphic = t("./util/graphic"), j[Br] = t("./util/number"), j.format = t("./util/format"), j.util = {}, k(["map", "each", Xr, Zr, zr, jr, Xr, "bind", "curry", qn, Sn, Ln, "isFunction", Vr], function(t) {
			j.util[t] = S[t]
		}), j
	}), e("echarts", ["echarts/echarts"], function(t) {
		return t
	}), e("echarts/data/DataDiffer", [Kr], function(t) {
		function e(t) {
			return t
		}

		function i(t, i, n, r) {
			this._old = t, this._new = i, this._oldKeyGetter = n || e, this._newKeyGetter = r || e
		}

		function n(t, e, i) {
			for (var n = 0; n < t[qr]; n++) {
				var r = i(t[n]),
					a = e[r];
				null == a ? e[r] = n : (a[qr] || (e[r] = a = [a]), a.push(n))
			}
		}
		return i[$r] = {
			constructor: i,
			add: function(t) {
				return this._add = t, this
			},
			update: function(t) {
				return this._update = t, this
			},
			remove: function(t) {
				return this._remove = t, this
			},
			execute: function() {
				var t, e = this._old,
					i = this._new,
					r = this._oldKeyGetter,
					a = this._newKeyGetter,
					o = {},
					s = {};
				for (n(e, o, r), n(i, s, a), t = 0; t < e[qr]; t++) {
					var l = r(e[t]),
						c = s[l];
					if (null != c) {
						var u = c[qr];
						u ? (1 === u && (s[l] = null), c = c.unshift()) : s[l] = null, this._update && this._update(c, t)
					} else this._remove && this._remove(t)
				}
				for (var l in s)
					if (s.hasOwnProperty(l)) {
						var c = s[l];
						if (null == c) continue;
						if (c[qr])
							for (var t = 0, u = c[qr]; u > t; t++) this._add && this._add(c[t]);
						else this._add && this._add(c)
					}
			}
		}, i
	}), e("echarts/data/List", [Kr, "../model/Model", "./DataDiffer", Yr, "../util/model"], function(t) {
		function e(t) {
			return c[qn](t) || (t = [t]), t
		}
		var i = br,
			n = typeof window === br ? global : window,
			r = typeof n.Float64Array === i ? Array : n.Float64Array,
			a = typeof n.Int32Array === i ? Array : n.Int32Array,
			o = {
				"float": r,
				"int": a,
				ordinal: Array,
				number: Array,
				time: Array
			},
			s = t("../model/Model"),
			l = t("./DataDiffer"),
			c = t(Yr),
			u = t("../util/model"),
			h = c[Ln],
			d = ["stackedOn", "_nameList", "_idList", "_rawData"],
			f = function(t, e, i) {
				c.each(d[Nr](i || []), function(i) {
					e.hasOwnProperty(i) && (t[i] = e[i])
				})
			},
			p = function(t, e) {
				t = t || ["x", "y"];
				for (var i = {}, n = [], r = 0; r < t[qr]; r++) {
					var a, o = {};
					typeof t[r] === Gr ? (a = t[r], o = {
						name: a,
						stackable: !1,
						type: "number"
					}) : (o = t[r], a = o.name, o.type = o.type || Br), n.push(a), i[a] = o
				}
				this[Zt] = n, this._dimensionInfos = i, this[Kt] = e, this.indices = [], this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this.stackedOn = null, this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._rawData
			},
			v = p[$r];
		v.type = "list", v.getDimension = function(t) {
			return isNaN(t) || (t = this[Zt][t] || t), t
		}, v.getDimensionInfo = function(t) {
			return this._dimensionInfos[this.getDimension(t)]
		}, v[Gt] = function(t, e, i) {
			t = t || [], this._rawData = t;
			var n = this._storage = {},
				r = this.indices = [],
				a = this[Zt],
				s = t[qr],
				l = this._dimensionInfos,
				h = [],
				d = {};
			e = e || [];
			for (var f = 0; f < a[qr]; f++) {
				var p = l[a[f]],
					v = o[p.type];
				n[a[f]] = new v(s)
			}
			i = i || function(t, e, i, n) {
				var r = u.getDataItemValue(t);
				return u.converDataValue(c[qn](r) ? r[n] : r, l[e])
			};
			for (var m = 0; m < t[qr]; m++) {
				for (var g = t[m], y = 0; y < a[qr]; y++) {
					var x = a[y],
						_ = n[x];
					_[m] = i(g, x, m, y)
				}
				r.push(m)
			}
			for (var f = 0; f < t[qr]; f++) {
				var w = "";
				e[f] || (e[f] = t[f].name, w = t[f].id);
				var b = e[f] || "";
				!w && b && (d[b] = d[b] || 0, w = b, d[b] > 0 && (w += "__ec__" + d[b]), d[b]++), w && (h[f] = w)
			}
			this._nameList = e, this._idList = h
		}, v.count = function() {
			return this.indices[qr]
		}, v.get = function(t, e, i) {
			var n = this._storage,
				r = this.indices[e],
				a = n[t] && n[t][r],
				o = this._dimensionInfos[t];
			if (i && o && o.stackable)
				for (var s = this.stackedOn; s;) {
					var l = s.get(t, e);
					(a >= 0 && l > 0 || 0 >= a && 0 > l) && (a += l), s = s.stackedOn
				}
			return a
		}, v[Bt] = function(t, e, i) {
			var n = [];
			c[qn](t) || (i = e, e = t, t = this[Zt]);
			for (var r = 0, a = t[qr]; a > r; r++) n.push(this.get(t[r], e, i));
			return n
		}, v.hasValue = function(t) {
			for (var e = this[Zt], i = this._dimensionInfos, n = 0, r = e[qr]; r > n; n++)
				if (i[e[n]].type !== on && isNaN(this.get(e[n], t))) return !1;
			return !0
		}, v[Nt] = function(t, e) {
			var i = this._storage[t],
				n = this.getDimensionInfo(t);
			e = n && n.stackable && e;
			var r, a = (this._extent || (this._extent = {}))[t + !!e];
			if (a) return a;
			if (i) {
				for (var o = 1 / 0, s = -(1 / 0), l = 0, c = this.count(); c > l; l++) r = this.get(t, l, e), o > r && (o = r), r > s && (s = r);
				return this._extent[t + e] = [o, s]
			}
			return [1 / 0, -(1 / 0)]
		}, v[Et] = function(t, e) {
			var i = this._storage[t],
				n = 0;
			if (i)
				for (var r = 0, a = this.count(); a > r; r++) {
					var o = this.get(t, r, e);
					isNaN(o) || (n += o)
				}
			return n
		}, v[Zr] = function(t, e) {
			var i = this._storage,
				n = i[t],
				r = this.indices;
			if (n)
				for (var a = 0, o = r[qr]; o > a; a++) {
					var s = r[a];
					if (n[s] === e) return a
				}
			return -1
		}, v[yi] = function(t) {
			for (var e = this.indices, i = this._nameList, n = 0, r = e[qr]; r > n; n++) {
				var a = e[n];
				if (i[a] === t) return n
			}
			return -1
		}, v.indexOfNearest = function(t, e, i) {
			c[qn](t) || (t = t ? [t] : []);
			var n = this._storage,
				r = n[t];
			if (r) {
				for (var a = Number[oi], o = -1, s = 0, l = t[qr]; l > s; s++)
					for (var u = 0, h = this.count(); h > u; u++) {
						var d = Math.abs(this.get(t[s], u, i) - e);
						a >= d && (a = d, o = u)
					}
				return o
			}
			return -1
		}, v[rn] = function(t) {
			var e = this.indices[t];
			return null == e ? -1 : e
		}, v[nn] = function(t) {
			return this._nameList[this.indices[t]] || ""
		}, v.getId = function(t) {
			return this._idList[this.indices[t]] || this[rn](t) + ""
		}, v.each = function(t, i, n, r) {
			typeof t === Er && (r = n, n = i, i = t, t = []), t = c.map(e(t), this.getDimension, this);
			var a = [],
				o = t[qr],
				s = this.indices;
			r = r || this;
			for (var l = 0; l < s[qr]; l++)
				if (0 === o) i.call(r, l);
				else if (1 === o) i.call(r, this.get(t[0], l, n), l);
			else {
				for (var u = 0; o > u; u++) a[u] = this.get(t[u], l, n);
				a[u] = l, i.apply(r, a)
			}
		}, v[Ot] = function(t, i, n, r) {
			typeof t === Er && (r = n, n = i, i = t, t = []), t = c.map(e(t), this.getDimension, this);
			var a = [],
				o = [],
				s = t[qr],
				l = this.indices;
			r = r || this;
			for (var u = 0; u < l[qr]; u++) {
				var h;
				if (1 === s) h = i.call(r, this.get(t[0], u, n), u);
				else {
					for (var d = 0; s > d; d++) o[d] = this.get(t[d], u, n);
					o[d] = u, h = i.apply(r, o)
				}
				h && a.push(l[u])
			}
			return this.indices = a, this._extent = {}, this
		}, v[Rt] = function(t, e, i, n) {
			typeof t === Er && (n = i, i = e, e = t, t = []);
			var r = [];
			return this.each(t, function() {
				r.push(e && e.apply(this, arguments))
			}, i, n), r
		}, v.map = function(t, i, n, r) {
			t = c.map(e(t), this.getDimension, this);
			var a = this[Zt],
				o = new p(c.map(a, this.getDimensionInfo, this), this[Kt]),
				s = o.indices = this.indices;
			f(o, this, this._wrappedMethods);
			for (var l = o._storage = {}, u = this._storage, h = 0; h < a[qr]; h++) {
				var d = a[h],
					v = u[d];
				c[Zr](t, d) >= 0 ? l[d] = new v.constructor(u[d][qr]) : l[d] = u[d]
			}
			var m = [];
			return this.each(t, function() {
				var e = arguments[arguments[qr] - 1],
					n = i && i.apply(this, arguments);
				if (null != n) {
					typeof n === Br && (m[0] = n, n = m);
					for (var r = 0; r < n[qr]; r++) {
						var a = t[r],
							o = l[a],
							c = s[e];
						o && (o[c] = n[r])
					}
				}
			}), o
		};
		var m = new s(null);
		v[en] = function(t, e) {
			var i, n = this[Kt];
			return t = this.indices[t], i = e ? new s(null, n) : m, i[Yn] = this._rawData[t], i[$n] = n, i[ar] = n[ar], i
		}, v.diff = function(t) {
			var e = this._idList,
				i = t && t._idList;
			return new l(t ? t.indices : [], this.indices, function(t) {
				return i[t] || t + ""
			}, function(t) {
				return e[t] || t + ""
			})
		}, v[Vt] = function(t) {
			var e = this._visual;
			return e && e[t]
		}, v[de] = function(t, e) {
			if (h(t))
				for (var i in t) t.hasOwnProperty(i) && this[de](i, t[i]);
			else this._visual = this._visual || {}, this._visual[t] = e
		}, v[zt] = function(t, e) {
			this._layout[t] = e
		}, v[Pt] = function(t) {
			return this._layout[t]
		}, v[It] = function(t) {
			return this._itemLayouts[t]
		}, v[Dt] = function(t, e, i) {
			this._itemLayouts[t] = i ? c[Vr](this._itemLayouts[t] || {}, e) : e
		}, v[Lt] = function(t, e, i) {
			var n = this._itemVisuals[t],
				r = n && n[e];
			return null != r || i ? r : this[Vt](e)
		}, v[ue] = function(t, e, i) {
			var n = this._itemVisuals[t] || {};
			if (this._itemVisuals[t] = n, h(e))
				for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r]);
			else n[e] = i
		};
		var g = function(t) {
			t[ln] = this[ln], t[_i] = this[_i]
		};
		return v[kt] = function(t, e) {
			var i = this[Kt];
			e && (e[_i] = t, e[ln] = i && i[ln], "group" === e.type && e[Ci](g, e)), this._graphicEls[t] = e
		}, v[xi] = function(t) {
			return this._graphicEls[t]
		}, v[gi] = function(t, e) {
			c.each(this._graphicEls, function(i, n) {
				i && t && t.call(e, i, n)
			})
		}, v.cloneShallow = function() {
			var t = c.map(this[Zt], this.getDimensionInfo, this),
				e = new p(t, this[Kt]);
			return e._storage = this._storage, f(e, this, this._wrappedMethods), e.indices = this.indices.slice(), e
		}, v.wrapMethod = function(t, e) {
			var i = this[t];
			typeof i === Er && (this._wrappedMethods = this._wrappedMethods || [], this._wrappedMethods.push(t), this[t] = function() {
				var t = i.apply(this, arguments);
				return e.call(this, t)
			})
		}, p
	}), e("echarts/data/helper/completeDimensions", [Kr, Yr], function(t) {
		function e(t, e, a) {
			if (!e) return t;
			var o = n(e[0]),
				s = r[qn](o) && o[qr] || 1;
			a = a || [];
			for (var l = 0; s > l; l++)
				if (!t[l]) {
					var c = a[l] || "extra" + (l - a[qr]);
					t[l] = i(e, l) ? {
						type: "ordinal",
						name: c
					} : c
				}
			return t
		}

		function i(t, e) {
			for (var i = 0, a = t[qr]; a > i; i++) {
				var o = n(t[i]);
				if (!r[qn](o)) return !1;
				var o = o[e];
				if (null != o && isFinite(o)) return !1;
				if (r[Sn](o) && "-" !== o) return !0
			}
			return !1
		}

		function n(t) {
			return r[qn](t) ? t : r[Ln](t) ? t.value : t
		}
		var r = t(Yr);
		return e
	}), e("echarts/chart/helper/createListFromArray", [Kr, Tt, Ct, Yr, At], function(t) {
		function e(t) {
			for (var e = 0; e < t[qr] && null == t[e];) e++;
			return t[e]
		}

		function i(t) {
			var i = e(t);
			return null != i && !l[qn](u(i))
		}

		function n(t, e, n) {
			t = t || [];
			var r = d[e.get(St)](t, e, n),
				s = r[Zt],
				l = r.categoryAxisModel,
				c = s[0].type === on ? 0 : s[1].type === on ? 1 : -1,
				f = new o(s, e),
				p = a(r, t),
				v = l && i(t) ? function(t, e, i, n) {
					return n === c ? i : h(u(t), s[n])
				} : function(t, e, i, n) {
					var r = u(t);
					return h(r && r[n], s[n])
				};
			return f[Gt](t, p, v), f
		}

		function r(t) {
			return t !== Mt && "time" !== t
		}

		function a(t, e) {
			var i = [];
			if (t.categoryAxisModel) {
				var n = t.categoryAxisModel[bt]();
				if (n) {
					var r = e[qr];
					if (l[qn](e[0]) && e[0][qr] > 1) {
						i = [];
						for (var a = 0; r > a; a++) i[a] = n[e[a][0]]
					} else i = n.slice(0)
				}
			}
			return i
		}
		var o = t(Tt),
			s = t(Ct),
			l = t(Yr),
			c = t(At),
			u = c.getDataItemValue,
			h = c.converDataValue,
			d = {
				cartesian2d: function(t, e, i) {
					var n = i[mn]("xAxis", e.get("xAxisIndex")),
						a = i[mn]("yAxis", e.get("yAxisIndex")),
						o = n.get("type"),
						l = a.get("type"),
						c = l === Mt,
						u = o === Mt,
						h = [{
							name: "x",
							type: u ? on : "float",
							stackable: r(o)
						}, {
							name: "y",
							type: c ? on : "float",
							stackable: r(l)
						}];
					return s(h, t, ["x", "y", "z"]), {
						dimensions: h,
						categoryAxisModel: u ? n : c ? a : null
					}
				},
				polar: function(t, e, i) {
					var n = e.get("polarIndex") || 0,
						a = function(t) {
							return t.get("polarIndex") === n
						},
						o = i[Mn]({
							mainType: "angleAxis",
							filter: a
						})[0],
						l = i[Mn]({
							mainType: "radiusAxis",
							filter: a
						})[0],
						c = l.get("type") === Mt,
						u = o.get("type") === Mt,
						h = [{
							name: "radius",
							type: c ? on : "float",
							stackable: r(l.get("type"))
						}, {
							name: "angle",
							type: u ? on : "float",
							stackable: r(o.get("type"))
						}];
					return s(h, t, [vn, "angle", "value"]), {
						dimensions: h,
						categoryAxisModel: u ? o : c ? l : null
					}
				},
				geo: function(t, e, i) {
					return {
						dimensions: s([{
							name: "lng"
						}, {
							name: "lat"
						}], t, ["lng", "lat", "value"])
					}
				}
			};
		return n
	}), e("echarts/chart/line/LineSeries", [Kr, wt, _t], function(t) {
		var e = t(wt),
			i = t(_t);
		return i[Vr]({
			type: "series.line",
			dependencies: ["grid", "polar"],
			getInitialData: function(t, i) {
				return e(t.data, this, i)
			},
			defaultOption: {
				zlevel: 0,
				z: 2,
				coordinateSystem: "cartesian2d",
				legendHoverLink: !0,
				hoverAnimation: !0,
				xAxisIndex: 0,
				yAxisIndex: 0,
				polarIndex: 0,
				clipOverflow: !0,
				label: {
					normal: {
						position: "top"
					},
					emphasis: {
						position: "top"
					}
				},
				lineStyle: {
					normal: {
						width: 2,
						type: "solid"
					}
				},
				symbol: "emptyCircle",
				symbolSize: 4,
				showSymbol: !0,
				animationEasing: "linear"
			}
		})
	}), e("echarts/util/symbol", [Kr, "./graphic", xr], function(t) {
		var e = t("./graphic"),
			i = t(xr),
			n = e[qe]({
				type: "triangle",
				shape: {
					cx: 0,
					cy: 0,
					width: 0,
					height: 0
				},
				buildPath: function(t, e) {
					var i = e.cx,
						n = e.cy,
						r = e.width / 2,
						a = e[gr] / 2;
					t[ui](i, n - a), t[ci](i + r, n + a), t[ci](i - r, n + a), t[si]()
				}
			}),
			r = e[qe]({
				type: "diamond",
				shape: {
					cx: 0,
					cy: 0,
					width: 0,
					height: 0
				},
				buildPath: function(t, e) {
					var i = e.cx,
						n = e.cy,
						r = e.width / 2,
						a = e[gr] / 2;
					t[ui](i, n - a), t[ci](i + r, n), t[ci](i, n + a), t[ci](i - r, n), t[si]()
				}
			}),
			a = e[qe]({
				type: "pin",
				shape: {
					x: 0,
					y: 0,
					width: 0,
					height: 0
				},
				buildPath: function(t, e) {
					var i = e.x,
						n = e.y,
						r = e.width / 5 * 3,
						a = Math.max(r, e[gr]),
						o = r / 2,
						s = o * o / (a - o),
						l = n - a + o + s,
						c = Math.asin(s / o),
						u = Math.cos(c) * o,
						h = Math.sin(c),
						d = Math.cos(c);
					t.arc(i, l, o, Math.PI - c, 2 * Math.PI + c);
					var f = .6 * o,
						p = .7 * o;
					t[li](i + u - h * f, l + s + d * f, i, n - p, i, n), t[li](i, n - p, i - u + h * f, l + s + d * f, i - u, l + s), t[si]()
				}
			}),
			o = e[qe]({
				type: "arrow",
				shape: {
					x: 0,
					y: 0,
					width: 0,
					height: 0
				},
				buildPath: function(t, e) {
					var i = e[gr],
						n = e.width,
						r = e.x,
						a = e.y,
						o = n / 3 * 2;
					t[ui](r, a), t[ci](r + o, a + i), t[ci](r, a + i / 4 * 3), t[ci](r - o, a + i), t[ci](r, a), t[si]()
				}
			}),
			s = {
				line: e.Line,
				rect: e.Rect,
				roundRect: e.Rect,
				square: e.Rect,
				circle: e[Ye],
				diamond: r,
				pin: a,
				arrow: o,
				triangle: n
			},
			l = {
				line: function(t, e, i, n, r) {
					r.x1 = t, r.y1 = e + n / 2, r.x2 = t + i, r.y2 = e + n / 2
				},
				rect: function(t, e, i, n, r) {
					r.x = t, r.y = e, r.width = i, r[gr] = n
				},
				roundRect: function(t, e, i, n, r) {
					r.x = t, r.y = e, r.width = i, r[gr] = n, r.r = Math.min(i, n) / 4
				},
				square: function(t, e, i, n, r) {
					var a = Math.min(i, n);
					r.x = t, r.y = e, r.width = a, r[gr] = a
				},
				circle: function(t, e, i, n, r) {
					r.cx = t + i / 2, r.cy = e + n / 2, r.r = Math.min(i, n) / 2
				},
				diamond: function(t, e, i, n, r) {
					r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r[gr] = n
				},
				pin: function(t, e, i, n, r) {
					r.x = t + i / 2, r.y = e + n / 2, r.width = i, r[gr] = n
				},
				arrow: function(t, e, i, n, r) {
					r.x = t + i / 2, r.y = e + n / 2, r.width = i, r[gr] = n
				},
				triangle: function(t, e, i, n, r) {
					r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r[gr] = n
				}
			},
			c = {};
		for (var u in s) c[u] = new s[u];
		var h = e[qe]({
				type: "symbol",
				shape: {
					symbolType: "",
					x: 0,
					y: 0,
					width: 0,
					height: 0
				},
				beforeBrush: function() {
					var t = this.style,
						e = this.shape;
					"pin" === e.symbolType && t[mi] === lr && (t[mi] = ["50%", "40%"], t[vi] = cr, t[pi] = ur)
				},
				buildPath: function(t, e) {
					var i = e.symbolType,
						n = c[i];
					"none" !== e.symbolType && (n || (i = "rect", n = c[i]), l[i](e.x, e.y, e.width, e[gr], n.shape), n[ri](t, n.shape))
				}
			}),
			d = function(t) {
				if ("image" !== this.type) {
					var e = this.style,
						i = this.shape;
					i && "line" === i.symbolType ? e[kr] = t : this.__isEmptyBrush ? (e[kr] = t, e.fill = "#fff") : (e.fill && (e.fill = t), e[kr] && (e[kr] = t)), this.dirty()
				}
			},
			f = {
				createSymbol: function(t, n, r, a, o, s) {
					var l = 0 === t[Zr]("empty");
					l && (t = t[or](5, 1)[Zn]() + t[or](6));
					var c;
					return c = 0 === t[Zr]("image://") ? new e.Image({
						style: {
							image: t.slice(8),
							x: n,
							y: r,
							width: a,
							height: o
						}
					}) : 0 === t[Zr]("path://") ? e.makePath(t.slice(7), {}, new i(n, r, a, o)) : new h({
						shape: {
							symbolType: t,
							x: n,
							y: r,
							width: a,
							height: o
						}
					}), c.__isEmptyBrush = l, c[xt] = d, c[xt](s), c
				}
			};
		return f
	}), e("echarts/chart/helper/Symbol", [Kr, Yr, yt, gt, mt], function(t) {
		function e(t) {
			return r[qn](t) || (t = [+t, +t]), t
		}

		function i(t, e) {
			o.Group.call(this), this[vt](t, e)
		}

		function n(t, e) {
			this[Wi].drift(t, e)
		}
		var r = t(Yr),
			a = t(yt),
			o = t(gt),
			s = t(mt),
			l = i[$r];
		l._createSymbol = function(t, i, r) {
			this[Mi]();
			var s = i[Kt],
				l = i[Lt](r, "color"),
				c = a[pt](t, -.5, -.5, 1, 1, l);
			c.attr({
				style: {
					strokeNoScale: !0
				},
				z2: 100,
				scale: [0, 0]
			}), c.drift = n;
			var u = e(i[Lt](r, ft));
			o[Ve](c, {
				scale: u
			}, s), this._symbolType = t, this.add(c)
		}, l.stopSymbolAnimation = function(t) {
			this[En](0)[Ri](t)
		}, l.getScale = function() {
			return this[En](0).scale
		}, l[Qt] = function() {
			this[En](0)[wi](hn)
		}, l[Jt] = function() {
			this[En](0)[wi](un)
		}, l.setZ = function(t, e) {
			var i = this[En](0);
			i[be] = t, i.z = e
		}, l.setDraggable = function(t) {
			var e = this[En](0);
			e[zi] = t, e.cursor = t ? "move" : "pointer"
		}, l[vt] = function(t, i) {
			var n = t[Lt](i, dt) || ht,
				r = t[Kt],
				a = e(t[Lt](i, ft));
			if (n !== this._symbolType) this._createSymbol(n, t, i);
			else {
				var s = this[En](0);
				o[Re](s, {
					scale: a
				}, r)
			}
			this._updateCommon(t, i, a), this._seriesModel = r
		};
		var c = [oe, un],
			u = [oe, hn],
			h = ["label", un],
			d = ["label", hn];
		return l._updateCommon = function(t, i, n) {
			var a = this[En](0),
				l = t[Kt],
				f = t[en](i),
				p = f[rr](c),
				v = t[Lt](i, "color"),
				m = f[rr](u)[ut]();
			a[Xi] = f[Dr]("symbolRotate") * Math.PI / 180 || 0;
			var g = f[Dr]("symbolOffset");
			if (g) {
				var y = a[Nn];
				y[0] = s[Wn](g[0], n[0]), y[1] = s[Wn](g[1], n[1])
			}
			a[xt](v), r[Vr](a.style, p[ut](["color"]));
			var x = f[rr](h),
				_ = f[rr](d),
				w = t[Zt][t[Zt][qr] - 1],
				b = l[ct](i, un) || t.get(w, i),
				M = a.style;
			x.get("show") ? (o[Ne](M, x, v), M.text = b) : M.text = "", _[Dr]("show") ? (o[Ne](m, _, v), m.text = b) : m.text = "";
			var S = e(t[Lt](i, ft));
			if (a.off(Ge).off(Be).off(hn).off(un), o[Ze](a, m), f[Dr]("hoverAnimation")) {
				var A = function() {
						var t = S[1] / S[0];
						this[Oe]({
							scale: [Math.max(1.1 * S[0], S[0] + 3), Math.max(1.1 * S[1], S[1] + 3 * t)]
						}, 400, "elasticOut")
					},
					C = function() {
						this[Oe]({
							scale: S
						}, 400, "elasticOut")
					};
				a.on(Ge, A).on(Be, C).on(hn, A).on(un, C)
			}
		}, l.fadeOut = function(t) {
			var e = this[En](0);
			e.style.text = "", o[Re](e, {
				scale: [0, 0]
			}, this._seriesModel, t)
		}, r[zr](i, o.Group), i
	}), e("echarts/chart/helper/SymbolDraw", [Kr, gt, "./Symbol"], function(t) {
		function e(t) {
			this.group = new n.Group, this._symbolCtor = t || r
		}

		function i(t, e, i) {
			var n = t[It](e);
			return n && !isNaN(n[0]) && !isNaN(n[1]) && !(i && i(e)) && "none" !== t[Lt](e, dt)
		}
		var n = t(gt),
			r = t("./Symbol"),
			a = e[$r];
		return a[vt] = function(t, e) {
			var r = this.group,
				a = t[Kt],
				o = this._data,
				s = this._symbolCtor;
			t.diff(o).add(function(n) {
				var a = t[It](n);
				if (i(t, n, e)) {
					var o = new s(t, n);
					o.attr(Nn, a), t[kt](n, o), r.add(o)
				}
			})[we](function(l, c) {
				var u = o[xi](c),
					h = t[It](l);
				return i(t, l, e) ? (u ? (u[vt](t, l), n[Re](u, {
					position: h
				}, a)) : (u = new s(t, l), u.attr(Nn, h)), r.add(u), void t[kt](l, u)) : void r[Li](u)
			})[Li](function(t) {
				var e = o[xi](t);
				e && e.fadeOut(function() {
					r[Li](e)
				})
			})[lt](), this._data = t
		}, a[Si] = function() {
			var t = this._data;
			t && t[gi](function(e, i) {
				e.attr(Nn, t[It](i))
			})
		}, a[Li] = function(t) {
			var e = this.group,
				i = this._data;
			i && (t ? i[gi](function(t) {
				t.fadeOut(function() {
					e[Li](t)
				})
			}) : e[Mi]())
		}, e
	}), e("zrender/core/arrayDiff", [Kr], function(t) {
		function e(t, e) {
			return t === e
		}

		function i(t, e, i) {
			var n = {
				cmd: t,
				idx: e
			};
			return "=" === t && (n.idx1 = i), n
		}

		function n(t, e, n, r) {
			t.push(i(e, n, r))
		}

		function r(t, e, i, n, r, a, o, l) {
			var c, u, h, d = i > n,
				f = r > a,
				p = s(n - i),
				v = s(a - r);
			for (u = 0; p >= u; u++)
				for (h = 0; v >= h; h++)
					if (0 === u) l[h] = h;
					else if (0 === h) c = l[h], l[h] = u;
			else {
				var m = t[d ? i - u : u - 1 + i],
					g = e[f ? r - h : h - 1 + r],
					y = c + (o(m, g) ? 0 : 2),
					x = l[h] + 1,
					_ = l[h - 1] + 1;
				c = l[h], l[h] = x > y ? y : x, _ < l[h] && (l[h] = _)
			}
			return l
		}

		function a(t, e, i, o, s, l, c, u, h) {
			var d, f, p = [],
				v = o - i,
				m = l - s;
			if (v)
				if (m)
					if (1 === v) {
						var g = t[i],
							y = !1;
						for (f = 0; m > f; f++) c(g, e[f + s]) && !y ? (y = !0, n(p, "=", i, f + s)) : n(p, "+", f + s);
						y || n(p, "-", i)
					} else if (1 === m) {
				var x = e[s],
					y = !1;
				for (d = 0; v > d; d++) c(x, t[d + i]) && !y ? (y = !0, n(p, "=", d + i, s)) : n(p, "-", d + i);
				y || n(p, "+", s)
			} else {
				var _ = (v / 2 | 0) + i;
				r(t, e, i, _, s, l, c, u), r(t, e, o, _ + 1, l, s, c, h);
				var w, b = 1 / 0,
					M = 0;
				for (f = 0; m >= f; f++) w = u[f] + h[m - f], b > w && (b = w, M = f);
				M += s, p = a(t, e, i, _, s, M, c, u, h);
				var S = a(t, e, _, o, M, l, c, u, h);
				for (d = 0; d < S[qr]; d++) p.push(S[d])
			} else
				for (d = 0; v > d; d++) n(p, "-", d + i);
			else
				for (f = 0; m > f; f++) n(p, "+", f + s);
			return p
		}

		function o(t, i, r) {
			r = r || e;
			var o, s, l = t[qr],
				c = i[qr],
				u = Math.min(l, c),
				h = [];
			for (o = 0; u > o && r(t[o], i[o]); o++) n(h, "=", o, o);
			for (s = 0; u > s && r(t[l - s - 1], i[c - s - 1]); s++);
			if (l - s >= o || c - s >= o) {
				var d = a(t, i, o, l - s, o, c - s, r, [], []);
				for (o = 0; o < d[qr]; o++) h.push(d[o]);
				for (o = 0; s > o; o++) n(h, "=", l - s + o, c - s + o)
			}
			return h
		}
		var s = Math.abs;
		return o
	}), e("echarts/chart/line/lineAnimationDiff", [Kr, "zrender/core/arrayDiff"], function(t) {
		function e(t) {
			return t >= 0 ? 1 : -1
		}

		function i(t, i, n) {
			for (var r, a = t[st](), o = t[ot](a), s = a.onZero ? 0 : o.scale[at]()[0], l = o.dim, c = "x" === l || l === vn ? 1 : 0, u = i.stackedOn, h = i.get(l, n); u && e(u.get(l, n)) === e(h);) {
				r = u;
				break
			}
			var d = [];
			return d[c] = i.get(a.dim, n), d[1 - c] = r ? r.get(l, n, !0) : s, t[rt](d)
		}
		var n = t("zrender/core/arrayDiff");
		return function(t, e, r, a, o, s) {
			for (var l = e[Rt](e.getId), c = t[Rt](t.getId), u = [], h = [], d = [], f = [], p = [], v = [], m = [], g = n(c, l), y = s[Zt], x = 0; x < g[qr]; x++) {
				var _ = g[x],
					w = !0;
				switch (_.cmd) {
					case "=":
						var b = t[It](_.idx),
							M = e[It](_.idx1);
						(isNaN(b[0]) || isNaN(b[1])) && (b = M.slice()), u.push(b), h.push(M), d.push(r[_.idx]), f.push(a[_.idx1]), m.push(e[rn](_.idx1));
						break;
					case "+":
						var S = _.idx;
						u.push(o[rt]([e.get(y[0], S, !0), e.get(y[1], S, !0)])), h.push(e[It](S).slice()), d.push(i(o, e, S)), f.push(a[S]), m.push(e[rn](S));
						break;
					case "-":
						var S = _.idx,
							A = t[rn](S);
						A !== S ? (u.push(t[It](S)), h.push(s[rt]([t.get(y[0], S, !0), t.get(y[1], S, !0)])), d.push(r[S]), f.push(i(s, t, S)), m.push(A)) : w = !1
				}
				w && (p.push(_), v.push(v[qr]))
			}
			v.sort(function(t, e) {
				return m[t] - m[e]
			});
			for (var C = [], T = [], k = [], L = [], D = [], x = 0; x < v[qr]; x++) {
				var S = v[x];
				C[x] = u[S], T[x] = h[S], k[x] = d[S], L[x] = f[S], D[x] = p[S]
			}
			return {
				current: C,
				next: T,
				stackedOnCurrent: k,
				stackedOnNext: L,
				status: D
			}
		}
	}), e("echarts/chart/line/poly", [Kr, ai, Mr], function(t) {
		function e(t, e, i, n, d, f, p, v, m) {
			for (var g = i, y = 0; d > y; y++) {
				var x = e[g];
				if (g >= n || 0 > g || isNaN(x[0]) || isNaN(x[1])) break;
				if (g === i) t[f > 0 ? ui : ci](x[0], x[1]), l(u, x);
				else if (m > 0) {
					var _ = g - f,
						w = g + f;
					if (f > 0 && g === n - 1 || 0 >= f && 0 === g) l(h, x);
					else {
						var b = e[_],
							M = e[w];
						(isNaN(M[0]) || isNaN(M[1])) && (M = x), r.sub(c, M, b), s(h, x, c, -m / 2)
					}
					a(u, u, v), o(u, u, p), a(h, h, v), o(h, h, p), t[li](u[0], u[1], h[0], h[1], x[0], x[1]), s(u, x, c, m / 2)
				} else t[ci](x[0], x[1]);
				g += f
			}
			return y
		}

		function i(t, e) {
			var i = [1 / 0, 1 / 0],
				n = [-(1 / 0), -(1 / 0)];
			if (e)
				for (var r = 0; r < t[qr]; r++) {
					var a = t[r];
					a[0] < i[0] && (i[0] = a[0]), a[1] < i[1] && (i[1] = a[1]), a[0] > n[0] && (n[0] = a[0]), a[1] > n[1] && (n[1] = a[1])
				}
			return {
				min: e ? i : n,
				max: e ? n : i
			}
		}
		var n = t(ai),
			r = t(Mr),
			a = (Math.min, Math.max, r.min),
			o = r.max,
			s = r.scaleAndAdd,
			l = r.copy,
			c = [],
			u = [],
			h = [];
		return {
			Polyline: n[Vr]({
				type: "ec-polyline",
				shape: {
					points: [],
					smooth: 0,
					smoothConstraint: !0
				},
				style: {
					fill: null,
					stroke: "#000"
				},
				buildPath: function(t, n) {
					for (var r = n[Ke], a = 0, o = r[qr], s = i(r, n.smoothConstraint); o > a;) a += e(t, r, a, o, o, 1, s.min, s.max, n.smooth) + 1
				}
			}),
			Polygon: n[Vr]({
				type: "ec-polygon",
				shape: {
					points: [],
					stackedOnPoints: [],
					smooth: 0,
					stackedOnSmooth: 0,
					smoothConstraint: !0
				},
				buildPath: function(t, n) {
					for (var r = n[Ke], a = n.stackedOnPoints, o = 0, s = r[qr], l = i(r, n.smoothConstraint), c = i(a, n.smoothConstraint); s > o;) {
						var u = e(t, r, o, s, s, 1, l.min, l.max, n.smooth);
						e(t, a, o + u - 1, s, u, -1, c.min, c.max, n.stackedOnSmooth), o += u + 1, t[si]()
					}
				}
			})
		}
	}), e("echarts/chart/line/LineView", [Kr, Yr, nt, "../helper/Symbol", "./lineAnimationDiff", gt, "./poly", it], function(t) {
		function e(t, e) {
			if (t[qr] === e[qr]) {
				for (var i = 0; i < t[qr]; i++) {
					var n = t[i],
						r = e[i];
					if (n[0] !== r[0] || n[1] !== r[1]) return
				}
				return !0
			}
		}

		function i(t) {
			return typeof t === Br ? t : t ? .3 : 0
		}

		function n(t) {
			var e = t.getGlobalExtent();
			if (t[et]) {
				var i = t[tt]() / 2 - 1,
					n = e[1] > e[0] ? 1 : -1;
				e[0] += n * i, e[1] -= n * i
			}
			return e
		}

		function r(t) {
			return t >= 0 ? 1 : -1
		}

		function a(t, e) {
			var i = t[st](),
				n = t[ot](i),
				a = i.onZero ? 0 : n.scale[at]()[0],
				o = n.dim,
				s = "x" === o || o === vn ? 1 : 0;
			return e[Rt]([o], function(n, l) {
				for (var c, u = e.stackedOn; u && r(u.get(o, l)) === r(n);) {
					c = u;
					break
				}
				var h = [];
				return h[s] = e.get(i.dim, l), h[1 - s] = c ? c.get(o, l, !0) : a, t[rt](h)
			}, !0)
		}

		function o(t, e) {
			return null != e[_i] ? e[_i] : null != e.name ? t[yi](e.name) : void 0
		}

		function s(t, e, i) {
			var r = n(t[Q]("x")),
				a = n(t[Q]("y")),
				o = t[st]().isHorizontal(),
				s = r[0],
				l = a[0],
				c = r[1] - s,
				u = a[1] - l;
			i.get("clipOverflow") || (o ? (l -= u, u *= 3) : (s -= c, c *= 3));
			var h = new p.Rect({
				shape: {
					x: s,
					y: l,
					width: c,
					height: u
				}
			});
			return e && (h.shape[o ? "width" : gr] = 0, p[Ve](h, {
				shape: {
					width: c,
					height: u
				}
			}, i)), h
		}

		function l(t, e, i) {
			var n = t.getAngleAxis(),
				r = t.getRadiusAxis(),
				a = r[at](),
				o = n[at](),
				s = Math.PI / 180,
				l = new p[Xe]({
					shape: {
						cx: t.cx,
						cy: t.cy,
						r0: a[0],
						r: a[1],
						startAngle: -o[0] * s,
						endAngle: -o[1] * s,
						clockwise: n[J]
					}
				});
			return e && (l.shape[Qe] = -o[0] * s, p[Ve](l, {
				shape: {
					endAngle: -o[1] * s
				}
			}, i)), l
		}

		function c(t, e, i) {
			return "polar" === t.type ? l(t, e, i) : s(t, e, i)
		}
		var u = t(Yr),
			h = t(nt),
			d = t("../helper/Symbol"),
			f = t("./lineAnimationDiff"),
			p = t(gt),
			v = t("./poly"),
			m = t(it);
		return m[Vr]({
			type: "line",
			init: function() {
				var t = new p.Group,
					e = new h;
				this.group.add(e.group), this[K] = e, this._lineGroup = t
			},
			render: function(t, n, r) {
				var o = t[St],
					s = this.group,
					l = t[sn](),
					h = t[rr]($),
					d = t[rr]("areaStyle.normal"),
					f = l[Rt](l[It], !0),
					p = "polar" === o.type,
					v = this._coordSys,
					m = this[K],
					g = this._polyline,
					y = this._polygon,
					x = this._lineGroup,
					_ = t.get(Ei),
					w = !d.isEmpty(),
					b = a(o, l),
					M = t.get("showSymbol"),
					S = M && !p && !t.get("showAllSymbol") && this._getSymbolIgnoreFunc(l, o),
					A = this._data;
				A && A[gi](function(t, e) {
					t.__temp && (s[Li](t), A[kt](e, null))
				}), M || m[Li](), s.add(x), g && v.type === o.type ? (_ && x.setClipPath(c(o, !1, t)), M && m[vt](l, S), l[gi](function(t) {
					t[Ri](!0)
				}), e(this._stackedOnPoints, b) && e(this._points, f) || (_ ? this._updateAnimation(l, b, o, r) : (g[ii]({
					points: f
				}), y && y[ii]({
					points: f,
					stackedOnPoints: b
				})))) : (M && m[vt](l, S), g = this._newPolyline(s, f, o, _), w && (y = this._newPolygon(s, f, b, o, _)), x.setClipPath(c(o, !0, t))), g[He](u[sr](h[Y](), {
					stroke: l[Vt]("color"),
					lineJoin: "bevel"
				}));
				var C = t.get("smooth");
				if (C = i(t.get("smooth")), g.shape.smooth = C, y) {
					var T = y.shape,
						k = l.stackedOn,
						L = 0;
					if (y.style[Tr] = .7, y[He](u[sr](d.getAreaStyle(), {
							fill: l[Vt]("color"),
							lineJoin: "bevel"
						})), T.smooth = C, k) {
						var D = k[Kt];
						L = i(D.get("smooth"))
					}
					T.stackedOnSmooth = L
				}
				this._data = l, this._coordSys = o, this._stackedOnPoints = b, this._points = f
			},
			highlight: function(t, e, i, n) {
				var r = t[sn](),
					a = o(r, n);
				if (null != a && a >= 0) {
					var s = r[xi](a);
					if (!s) {
						var l = r[It](a);
						s = new d(r, a, i), s[Nn] = l, s.setZ(t.get(be), t.get("z")), s[Pi] = isNaN(l[0]) || isNaN(l[1]), s.__temp = !0, r[kt](a, s), s.stopSymbolAnimation(!0), this.group.add(s)
					}
					s[Qt]()
				} else m[$r][Qt].call(this, t, e, i, n)
			},
			downplay: function(t, e, i, n) {
				var r = t[sn](),
					a = o(r, n);
				if (null != a && a >= 0) {
					var s = r[xi](a);
					s && (s.__temp ? (r[kt](a, null), this.group[Li](s)) : s[Jt]())
				} else m[$r][Jt].call(this, t, e, i, n)
			},
			_newPolyline: function(t, e) {
				var i = this._polyline;
				return i && t[Li](i), i = new v[Ue]({
					shape: {
						points: e
					},
					silent: !0,
					z2: 10
				}), this._lineGroup.add(i), this._polyline = i, i
			},
			_newPolygon: function(t, e, i) {
				var n = this._polygon;
				return n && t[Li](n), n = new v[je]({
					shape: {
						points: e,
						stackedOnPoints: i
					},
					silent: !0
				}), this._lineGroup.add(n), this._polygon = n, n
			},
			_getSymbolIgnoreFunc: function(t, e) {
				var i = e.getAxesByScale(on)[0];
				return i && i.isLabelIgnored ? u.bind(i.isLabelIgnored, i) : void 0
			},
			_updateAnimation: function(t, e, i, n) {
				var r = this._polyline,
					a = this._polygon,
					o = t[Kt],
					s = f(this._data, t, this._stackedOnPoints, e, this._coordSys, i);
				r.shape[Ke] = s.current, p[Re](r, {
					shape: {
						points: s.next
					}
				}, o), a && (a[ii]({
					points: s.current,
					stackedOnPoints: s.stackedOnCurrent
				}), p[Re](a, {
					shape: {
						points: s.next,
						stackedOnPoints: s.stackedOnNext
					}
				}, o));
				for (var l = [], c = s.status, u = 0; u < c[qr]; u++) {
					var h = c[u].cmd;
					if ("=" === h) {
						var d = t[xi](c[u].idx1);
						d && l.push({
							el: d,
							ptIdx: u
						})
					}
				}
				r.animators && r.animators[qr] && r.animators[0].during(function() {
					for (var t = 0; t < l[qr]; t++) {
						var e = l[t].el;
						e.attr(Nn, r.shape[Ke][l[t].ptIdx])
					}
				})
			},
			remove: function(t) {
				this._lineGroup[Mi](), this[K][Li](!0), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null
			}
		})
	}), e("echarts/visual/symbol", [Kr], function(t) {
		return function(t, e, i, n, r) {
			n.eachRawSeriesByType(t, function(t) {
				var r = t[sn](),
					a = t.get(dt) || e,
					o = t.get(ft);
				r[de]({
					legendSymbol: i || a,
					symbol: a,
					symbolSize: o
				}), n[he](t) || (typeof o === Er && r.each(function(e) {
					var i = t[an](e),
						n = t[tn](e);
					r[ue](e, ft, o(i, n))
				}), r.each(function(t) {
					var e = r[en](t),
						i = e.get(dt, !0),
						n = e.get(ft, !0);
					null != i && r[ue](t, dt, i), null != n && r[ue](t, ft, n)
				}))
			})
		}
	}), e("echarts/layout/points", [Kr], function(t) {
		return function(t, e, i) {
			e[ce](t, function(t) {
				var e = t[sn](),
					i = t[St],
					n = i[Zt];
				e.each(n, function(t, n, r) {
					var a;
					a = isNaN(t) || isNaN(n) ? [NaN, NaN] : i[rt]([t, n]), e[Dt](r, a)
				}, !0)
			})
		}
	}), e("echarts/chart/line", [Kr, Yr, X, "./line/LineSeries", "./line/LineView", j, U], function(t) {
		var e = t(Yr),
			i = t(X);
		t("./line/LineSeries"), t("./line/LineView"), i[Ut]("chart", e.curry(t(j), "line", ht, "line")), i[jt](e.curry(t(U), "line"))
	}), e("echarts/scale/Scale", [Kr, Kn], function(t) {
		function e() {
			this._extent = [1 / 0, -(1 / 0)], this._interval = 0, this.init && this.init.apply(this, arguments)
		}
		var i = t(Kn),
			n = e[$r];
		return n[fi] = function(t) {
			var e = this._extent;
			return t >= e[0] && t <= e[1]
		}, n.normalize = function(t) {
			var e = this._extent;
			return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
		}, n.scale = function(t) {
			var e = this._extent;
			return t * (e[1] - e[0]) + e[0]
		}, n[q] = function(t) {
			var e = this._extent;
			t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
		}, n[at] = function() {
			return this._extent.slice()
		}, n[W] = function(t, e) {
			var i = this._extent;
			isNaN(t) || (i[0] = t), isNaN(e) || (i[1] = e)
		}, n.getTicksLabels = function() {
			for (var t = [], e = this[H](), i = 0; i < e[qr]; i++) t.push(this[F](e[i]));
			return t
		}, i[Rr](e), i[Pr](e, {
			registerWhenExtend: !0
		}), e
	}), e("echarts/scale/Ordinal", [Kr, Yr, "./Scale"], function(t) {
		var e = t(Yr),
			i = t("./Scale"),
			n = i[$r],
			r = i[Vr]({
				type: "ordinal",
				init: function(t, e) {
					this._data = t, this._extent = e || [0, t[qr] - 1]
				},
				contain: function(t) {
					return n[fi].call(this, t) && null != this._data[t]
				},
				normalize: function(t) {
					return typeof t === Gr && (t = e[Zr](this._data, t)), n.normalize.call(this, t)
				},
				scale: function(t) {
					return Math.round(n.scale.call(this, t))
				},
				getTicks: function() {
					for (var t = [], e = this._extent, i = e[0]; i <= e[1];) t.push(i), i++;
					return t
				},
				getLabel: function(t) {
					return this._data[t]
				},
				count: function() {
					return this._extent[1] - this._extent[0] + 1
				},
				niceTicks: e.noop,
				niceExtent: e.noop
			});
		return r[mr] = function() {
			return new r
		}, r
	}), e("echarts/scale/Interval", [Kr, "../util/number", "../util/format", "./Scale"], function(t) {
		var e = t("../util/number"),
			i = t("../util/format"),
			n = t("./Scale"),
			r = Math.floor,
			a = Math.ceil,
			o = n[Vr]({
				type: "interval",
				_interval: 0,
				setExtent: function(t, e) {
					var i = this._extent;
					isNaN(t) || (i[0] = parseFloat(t)), isNaN(e) || (i[1] = parseFloat(e))
				},
				unionExtent: function(t) {
					var e = this._extent;
					t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), o[$r][W].call(this, e[0], e[1])
				},
				getInterval: function() {
					return this._interval || this.niceTicks(), this._interval
				},
				setInterval: function(t) {
					this._interval = t, this._niceExtent = this._extent.slice()
				},
				getTicks: function() {
					this._interval || this.niceTicks();
					var t = this._interval,
						i = this._extent,
						n = [],
						r = 1e4;
					if (t) {
						var a = this._niceExtent;
						i[0] < a[0] && n.push(i[0]);
						for (var o = a[0]; o <= a[1];)
							if (n.push(o), o = e.round(o + t), n[qr] > r) return [];
						i[1] > a[1] && n.push(i[1])
					}
					return n
				},
				getTicksLabels: function() {
					for (var t = [], e = this[H](), i = 0; i < e[qr]; i++) t.push(this[F](e[i]));
					return t
				},
				getLabel: function(t) {
					return i[Ki](t)
				},
				niceTicks: function(t) {
					t = t || 10;
					var i = this._extent,
						n = i[1] - i[0];
					if (!(n === 1 / 0 || 0 >= n)) {
						var o = Math.pow(10, Math.floor(Math.log(n / t) / Math.LN10)),
							s = t / n * o;.15 >= s ? o *= 10 : .3 >= s ? o *= 5 : .45 >= s ? o *= 3 : .75 >= s && (o *= 2);
						var l = [e.round(a(i[0] / o) * o), e.round(r(i[1] / o) * o)];
						this._interval = o, this._niceExtent = l
					}
				},
				niceExtent: function(t, i, n) {
					var o = this._extent;
					if (o[0] === o[1])
						if (0 !== o[0]) {
							var s = o[0] / 2;
							o[0] -= s, o[1] += s
						} else o[1] = 1;
					o[1] === -(1 / 0) && o[0] === 1 / 0 && (o[0] = 0, o[1] = 1), this.niceTicks(t, i, n);
					var l = this._interval;
					i || (o[0] = e.round(r(o[0] / l) * l)), n || (o[1] = e.round(a(o[1] / l) * l))
				}
			});
		return o[mr] = function() {
			return new o
		}, o
	}), e("echarts/scale/Time", [Kr, Yr, "../util/number", "../util/format", "./Interval"], function(t) {
		var e = t(Yr),
			i = t("../util/number"),
			n = t("../util/format"),
			r = t("./Interval"),
			a = r[$r],
			o = Math.ceil,
			s = Math.floor,
			l = 864e5,
			c = function(t, e, i, n) {
				for (; n > i;) {
					var r = i + n >>> 1;
					t[r][2] < e ? i = r + 1 : n = r
				}
				return i
			},
			u = r[Vr]({
				type: "time",
				getLabel: function(t) {
					var e = this._stepLvl,
						i = new Date(t);
					return n.formatTime(e[0], i)
				},
				niceExtent: function(t, e, n) {
					var r = this._extent;
					if (r[0] === r[1] && (r[0] -= l, r[1] += l), r[1] === -(1 / 0) && r[0] === 1 / 0) {
						var a = new Date;
						r[1] = new Date(a.getFullYear(), a.getMonth(), a.getDate()), r[0] = r[1] - l
					}
					this.niceTicks(t, e, n);
					var c = this._interval;
					e || (r[0] = i.round(s(r[0] / c) * c)), n || (r[1] = i.round(o(r[1] / c) * c))
				},
				niceTicks: function(t) {
					t = t || 10;
					var e = this._extent,
						i = e[1] - e[0],
						n = i / t,
						r = h[qr],
						a = c(h, n, 0, r),
						l = h[Math.min(a, r - 1)],
						u = l[2],
						d = [o(e[0] / u) * u, s(e[1] / u) * u];
					this._stepLvl = l, this._interval = u, this._niceExtent = d
				}
			});
		e.each([fi, "normalize"], function(t) {
			u[$r][t] = function(e) {
				return e = +i.parseDate(e), a[t].call(this, e)
			}
		});
		var h = [
			["hh:mm:ss", 1, 1e3],
			["hh:mm:ss", 5, 5e3],
			["hh:mm:ss", 10, 1e4],
			["hh:mm:ss", 15, 15e3],
			["hh:mm:ss", 30, 3e4],
			["hh:mm\nMM-dd", 1, 6e4],
			["hh:mm\nMM-dd", 5, 3e5],
			["hh:mm\nMM-dd", 10, 6e5],
			["hh:mm\nMM-dd", 15, 9e5],
			["hh:mm\nMM-dd", 30, 18e5],
			["hh:mm\nMM-dd", 1, 36e5],
			["hh:mm\nMM-dd", 2, 72e5],
			["hh:mm\nMM-dd", 6, 216e5],
			["hh:mm\nMM-dd", 12, 432e5],
			["MM-dd\nyyyy", 1, l],
			["week", 7, 7 * l],
			["month", 1, 31 * l],
			["quarter", 3, 380 * l / 4],
			["half-year", 6, 380 * l / 2],
			["year", 1, 380 * l]
		];
		return u[mr] = function() {
			return new u
		}, u
	}), e("echarts/scale/Log", [Kr, Yr, "./Scale", "../util/number", "./Interval"], function(t) {
		var e = t(Yr),
			i = t("./Scale"),
			n = t("../util/number"),
			r = t("./Interval"),
			a = i[$r],
			o = r[$r],
			s = Math.floor,
			l = Math.ceil,
			c = Math.pow,
			u = 10,
			h = Math.log,
			d = i[Vr]({
				type: "log",
				getTicks: function() {
					return e.map(o[H].call(this), function(t) {
						return n.round(c(u, t))
					})
				},
				getLabel: o[F],
				scale: function(t) {
					return t = a.scale.call(this, t), c(u, t)
				},
				setExtent: function(t, e) {
					t = h(t) / h(u), e = h(e) / h(u), o[W].call(this, t, e)
				},
				getExtent: function() {
					var t = a[at].call(this);
					return t[0] = c(u, t[0]), t[1] = c(u, t[1]), t
				},
				unionExtent: function(t) {
					t[0] = h(t[0]) / h(u), t[1] = h(t[1]) / h(u), a[q].call(this, t)
				},
				niceTicks: function(t) {
					t = t || 10;
					var e = this._extent,
						i = e[1] - e[0];
					if (!(i === 1 / 0 || 0 >= i)) {
						var r = c(10, s(h(i / t) / Math.LN10)),
							a = t / i * r;.5 >= a && (r *= 10);
						var o = [n.round(l(e[0] / r) * r), n.round(s(e[1] / r) * r)];
						this._interval = r, this._niceExtent = o
					}
				},
				niceExtent: o.niceExtent
			});
		return e.each([fi, "normalize"], function(t) {
			d[$r][t] = function(e) {
				return e = h(e) / h(u), a[t].call(this, e)
			}
		}), d[mr] = function() {
			return new d
		}, d
	}), e("echarts/coord/axisHelper", [Kr, "../scale/Ordinal", "../scale/Interval", "../scale/Time", "../scale/Log", "../scale/Scale", "../util/number", Yr, pr], function(t) {
		var e = t("../scale/Ordinal"),
			i = t("../scale/Interval");
		t("../scale/Time"), t("../scale/Log");
		var n = t("../scale/Scale"),
			r = t("../util/number"),
			a = t(Yr),
			o = t(pr),
			s = {};
		return s[Z] = function(t, e) {
			var i = t.scale;
			if (i.type !== on) {
				var n = e.get("min"),
					o = e.get("max"),
					s = e.get(G);
				a[qn](s) || (s = [s || 0, s || 0]), s[0] = r[Wn](s[0], 1), s[1] = r[Wn](s[1], 1);
				var l = i[at](),
					c = l[1] - l[0],
					u = !0,
					h = !0;
				null == n && (n = l[0] - s[0] * c, u = !1), null == o && (o = l[1] + s[1] * c, h = !1), "dataMin" === n && (n = l[0]), "dataMax" === o && (o = l[1]), i[W](n, o), i.niceExtent(e.get(B), u, h);
				var d = e.get(N);
				null != d && i.setInterval && i.setInterval(d)
			}
		}, s[E] = function(t, r) {
			if (r = r || t.get("type")) switch (r) {
				case Mt:
					return new e(t[bt](), [1 / 0, -(1 / 0)]);
				case "value":
					return new i;
				default:
					return (n[Ir](r) || i)[mr](t)
			}
		}, s.ifAxisCrossZero = function(t) {
			var e = t.scale[at](),
				i = e[0],
				n = e[1],
				r = t.model.get("min"),
				a = t.model.get("max");
			return isNaN(r) || (i = Math.min(r, i)), isNaN(a) || (n = Math.max(a, n)), !(i > 0 && n > 0 || 0 > i && 0 > n) || s.ifAxisNeedsCrossZero(t)
		}, s.ifAxisNeedsCrossZero = function(t) {
			return !t.model.get("scale")
		}, s.getAxisLabelInterval = function(t, e, i, n) {
			for (var r, a = 0, s = 0, l = 0; l < t[qr]; l++) {
				var c = t[l],
					u = o[ir](e[l], i, cr, "top");
				u[n ? "x" : "y"] += c, u[n ? "width" : gr] *= 1.5, r ? r[xe](u) ? (s++, a = Math.max(a, s)) : (r.union(u), s = 0) : r = u.clone()
			}
			return a
		}, s[O] = function(t, e) {
			var i = t.scale,
				n = i.getTicksLabels(),
				r = i[H]();
			return typeof e === Gr ? (e = function(t) {
				return function(e) {
					return t[jn]("{value}", e)
				}
			}(e), a.map(n, e)) : typeof e === Er ? a.map(r, function(n, r) {
				return e(t.type === Mt ? i[F](n) : n, r)
			}, this) : n
		}, s
	}), e("echarts/coord/cartesian/Cartesian", [Kr, Yr], function(t) {
		function e(t) {
			return this._axes[t]
		}
		var i = t(Yr),
			n = function(t) {
				this._axes = {}, this._dimList = [], this.name = t || ""
			};
		return n[$r] = {
			constructor: n,
			type: "cartesian",
			getAxis: function(t) {
				return this._axes[t]
			},
			getAxes: function() {
				return i.map(this._dimList, e, this)
			},
			getAxesByScale: function(t) {
				return t = t[Zn](), i[Xr](this.getAxes(), function(e) {
					return e.scale.type === t
				})
			},
			addAxis: function(t) {
				var e = t.dim;
				this._axes[e] = t, this._dimList.push(e)
			},
			dataToCoord: function(t) {
				return this._dataCoordConvert(t, R)
			},
			coordToData: function(t) {
				return this._dataCoordConvert(t, V)
			},
			_dataCoordConvert: function(t, e) {
				for (var i = this._dimList, n = t instanceof Array ? [] : {}, r = 0; r < i[qr]; r++) {
					var a = i[r],
						o = this._axes[a];
					n[a] = o[e](t[a])
				}
				return n
			}
		}, n
	}), e("echarts/coord/cartesian/Cartesian2D", [Kr, Yr, "./Cartesian"], function(t) {
		function e(t) {
			n.call(this, t), this[Zt] = ["x", "y"]
		}
		var i = t(Yr),
			n = t("./Cartesian");
		return e[$r] = {
			constructor: e,
			type: "cartesian2d",
			getBaseAxis: function() {
				return this.getAxesByScale(on)[0] || this.getAxesByScale("time")[0] || this[Q]("x")
			},
			containPoint: function(t) {
				var e = this[Q]("x"),
					i = this[Q]("y");
				return e[fi](e.toLocalCoord(t[0])) && i[fi](i.toLocalCoord(t[1]))
			},
			containData: function(t) {
				return this[Q]("x").containData(t[0]) && this[Q]("y").containData(t[1])
			},
			dataToPoints: function(t, e) {
				return t[Rt](["x", "y"], function(t, e) {
					return this[rt]([t, e])
				}, e, this)
			},
			dataToPoint: function(t, e) {
				var i = this[Q]("x"),
					n = this[Q]("y");
				return [i.toGlobalCoord(i[R](t[0], e)), n.toGlobalCoord(n[R](t[1], e))]
			},
			pointToData: function(t, e) {
				var i = this[Q]("x"),
					n = this[Q]("y");
				return [i[V](i.toLocalCoord(t[0]), e), n[V](n.toLocalCoord(t[1]), e)]
			},
			getOtherAxis: function(t) {
				return this[Q]("x" === t.dim ? "y" : "x")
			}
		}, i[zr](e, n), e
	}), e("echarts/coord/Axis", [Kr, "../util/number", Yr], function(t) {
		function e(t, e) {
			var i = t[1] - t[0],
				n = e,
				r = i / n / 2;
			t[0] += r, t[1] -= r
		}
		var i = t("../util/number"),
			n = i[Un],
			r = t(Yr),
			a = function(t, e, i) {
				this.dim = t, this.scale = e, this._extent = i || [0, 0], this[J] = !1, this[et] = !1
			};
		return a[$r] = {
			constructor: a,
			contain: function(t) {
				var e = this._extent,
					i = Math.min(e[0], e[1]),
					n = Math.max(e[0], e[1]);
				return t >= i && n >= t
			},
			containData: function(t) {
				return this[fi](this[R](t))
			},
			getExtent: function() {
				var t = this._extent.slice();
				return t
			},
			getPixelPrecision: function(t) {
				return i[Fn](t || this.scale[at](), this._extent)
			},
			setExtent: function(t, e) {
				var i = this._extent;
				i[0] = t, i[1] = e
			},
			dataToCoord: function(t, i) {
				t = this.scale.normalize(t);
				var r = this[at](),
					a = this.scale;
				return this[et] && a.type === on && e(r, a.count()), n(t, [0, 1], r, i)
			},
			coordToData: function(t, i) {
				var r = this[at]();
				this[et] && e(r, this.scale.count());
				var a = n(t, r, [0, 1], i);
				return this.scale.scale(a)
			},
			getTicksCoords: function() {
				if (this[et]) {
					for (var t = this.getBands(), e = [], i = 0; i < t[qr]; i++) e.push(t[i][0]);
					return t[i - 1] && e.push(t[i - 1][1]), e
				}
				return r.map(this.scale[H](), this[R], this)
			},
			getLabelsCoords: function() {
				if (this[et]) {
					for (var t, e = this.getBands(), i = [], n = 0; n < e[qr]; n++) t = e[n], i.push((t[0] + t[1]) / 2);
					return i
				}
				return r.map(this.scale[H](), this[R], this)
			},
			getBands: function() {
				for (var t = this[at](), e = [], i = this.scale.count(), n = t[0], r = t[1], a = r - n, o = 0; i > o; o++) e.push([a * o / i + n, a * (o + 1) / i + n]);
				return e
			},
			getBandWidth: function() {
				var t = this._extent,
					e = this.scale[at](),
					i = e[1] - e[0] + (this[et] ? 1 : 0),
					n = Math.abs(t[1] - t[0]);
				return Math.abs(n) / i
			}
		}, a
	}), e("echarts/coord/cartesian/axisLabelInterval", [Kr, Yr, "../axisHelper"], function(t) {
		var e = t(Yr),
			i = t("../axisHelper");
		return function(t) {
			var n = t.model,
				r = n[rr](z),
				a = r.get(N);
			return t.type !== Mt || "auto" !== a ? "auto" === a ? 0 : a : i.getAxisLabelInterval(e.map(t.scale[H](), t[R], t), n[O](), r[rr](nr)[er](), t.isHorizontal())
		}
	}), e("echarts/coord/cartesian/Axis2D", [Kr, Yr, "../Axis", "./axisLabelInterval"], function(t) {
		var e = t(Yr),
			i = t("../Axis"),
			n = t("./axisLabelInterval"),
			r = function(t, e, n, r, a) {
				i.call(this, t, e, n), this.type = r || "value", this[Nn] = a || hr
			};
		return r[$r] = {
			constructor: r,
			index: 0,
			onZero: !1,
			model: null,
			isHorizontal: function() {
				var t = this[Nn];
				return "top" === t || t === hr
			},
			getGlobalExtent: function() {
				var t = this[at]();
				return t[0] = this.toGlobalCoord(t[0]), t[1] = this.toGlobalCoord(t[1]), t
			},
			getLabelInterval: function() {
				var t = this._labelInterval;
				return t || (t = this._labelInterval = n(this)), t
			},
			isLabelIgnored: function(t) {
				if (this.type === Mt) {
					var e = this.getLabelInterval();
					return typeof e === Er && !e(t, this.scale[F](t)) || t % (e + 1)
				}
			},
			toLocalCoord: null,
			toGlobalCoord: null
		}, e[zr](r, i), r
	}), e("echarts/coord/axisDefault", [Kr, Yr], function(t) {
		var e = t(Yr),
			i = {
				show: !0,
				zlevel: 0,
				z: 0,
				inverse: !1,
				name: "",
				nameLocation: "end",
				nameTextStyle: {},
				nameGap: 15,
				axisLine: {
					show: !0,
					onZero: !0,
					lineStyle: {
						color: "#333",
						width: 1,
						type: "solid"
					}
				},
				axisTick: {
					show: !0,
					inside: !1,
					length: 5,
					lineStyle: {
						color: "#333",
						width: 1
					}
				},
				axisLabel: {
					show: !0,
					inside: !1,
					rotate: 0,
					margin: 8,
					textStyle: {
						color: "#333",
						fontSize: 12
					}
				},
				splitLine: {
					show: !0,
					lineStyle: {
						color: ["#ccc"],
						width: 1,
						type: "solid"
					}
				},
				splitArea: {
					show: !1,
					areaStyle: {
						color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
					}
				}
			},
			n = e.merge({
				boundaryGap: !0,
				axisTick: {
					interval: "auto"
				},
				axisLabel: {
					interval: "auto"
				}
			}, i),
			r = e[sr]({
				boundaryGap: [0, 0],
				splitNumber: 5
			}, i),
			a = e[sr]({
				scale: !0,
				min: "dataMin",
				max: "dataMax"
			}, r),
			o = e[sr]({}, r);
		return o.scale = !0, {
			categoryAxis: n,
			valueAxis: r,
			timeAxis: a,
			logAxis: o
		}
	}), e("echarts/coord/axisModelCreator", [Kr, "./axisDefault", Yr, "../model/Component", "../util/layout"], function(t) {
		var e = t("./axisDefault"),
			i = t(Yr),
			n = t("../model/Component"),
			r = t("../util/layout"),
			a = ["value", Mt, "time", "log"];
		return function(t, o, s, l) {
			i.each(a, function(n) {
				o[Vr]({
					type: t + "Axis." + n,
					mergeDefaultAndTheme: function(e, a) {
						var o = this.layoutMode,
							l = o ? r.getLayoutParams(e) : {},
							c = a.getTheme();
						i.merge(e, c.get(n + "Axis")), i.merge(e, this.getDefaultOption()), e.type = s(t, e), o && r.mergeLayoutParam(e, l, o)
					},
					defaultOption: i.mergeAll([{}, e[n + "Axis"], l], !0)
				})
			}), n[Xn](t + "Axis", i.curry(s, t))
		}
	}), e("echarts/coord/axisModelCommonMixin", [Kr, Yr, "./axisHelper"], function(t) {
		function e(t) {
			return r[Ln](t) && null != t.value ? t.value : t
		}

		function i() {
			return this.get("type") === Mt && r.map(this.get("data"), e)
		}

		function n() {
			return a[O](this.axis, this.get("axisLabel.formatter"))
		}
		var r = t(Yr),
			a = t("./axisHelper");
		return {
			getFormattedLabels: n,
			getCategories: i
		}
	}), e("echarts/coord/cartesian/AxisModel", [Kr, P, Yr, "../axisModelCreator", "../axisModelCommonMixin"], function(t) {
		function e(t, e) {
			return e.type || (e.data ? Mt : "value")
		}
		var i = t(P),
			n = t(Yr),
			r = t("../axisModelCreator"),
			a = i[Vr]({
				type: "cartesian2dAxis",
				axis: null,
				setNeedsCrossZero: function(t) {
					this[Yn].scale = !t
				},
				setMin: function(t) {
					this[Yn].min = t
				},
				setMax: function(t) {
					this[Yn].max = t
				}
			});
		n.merge(a[$r], t("../axisModelCommonMixin"));
		var o = {
			gridIndex: 0
		};
		return r("x", a, e, o), r("y", a, e, o), a
	}), e("echarts/coord/cartesian/GridModel", [Kr, "./AxisModel", P], function(t) {
		t("./AxisModel");
		var e = t(P);
		return e[Vr]({
			type: "grid",
			dependencies: ["xAxis", "yAxis"],
			layoutMode: "box",
			coordinateSystem: null,
			defaultOption: {
				show: !1,
				zlevel: 0,
				z: 0,
				left: "10%",
				top: 60,
				right: "10%",
				bottom: 60,
				containLabel: !1,
				backgroundColor: "rgba(0,0,0,0)",
				borderWidth: 1,
				borderColor: "#ccc"
			}
		})
	}), e("echarts/coord/cartesian/Grid", [Kr, "exports", "module", I, D, Yr, "./Cartesian2D", "./Axis2D", "./GridModel", "../../CoordinateSystem"], function(t, e) {
		function i(t, e, i) {
			return i[mn]("grid", t.get("gridIndex")) === e
		}

		function n(t) {
			for (var e, i = t.model, n = i[O](), r = 0; r < n[qr]; r++)
				if (!t.isLabelIgnored(r)) {
					var a = i.getTextRect(n[r]);
					e ? e.union(a) : e = a
				}
			return e
		}

		function r(t, e, i) {
			this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t, e, i)
		}

		function a(t, e) {
			var i = t[at](),
				n = i[0] + i[1];
			t.toGlobalCoord = "x" === t.dim ? function(t) {
				return t + e
			} : function(t) {
				return n - t + e
			}, t.toLocalCoord = "x" === t.dim ? function(t) {
				return t - e
			} : function(t) {
				return n - t + e
			}
		}
		var o = t(I),
			s = t(D),
			l = t(Yr),
			c = t("./Cartesian2D"),
			u = t("./Axis2D"),
			h = l.each,
			d = s.ifAxisCrossZero,
			f = s.ifAxisNeedsCrossZero,
			p = s[Z];
		t("./GridModel");
		var v = r[$r];
		return v.type = "grid", v[L] = function() {
			return this._rect
		}, v[_e] = function(t, e) {
			function i() {
				h(s, function(t) {
					var e = t.isHorizontal(),
						i = e ? [0, r.width] : [0, r[gr]],
						n = t[J] ? 1 : 0;
					t[W](i[n], i[1 - n]), a(t, e ? r.x : r.y)
				})
			}
			var r = o[zn](t[k](), {
				width: e[_n](),
				height: e[xn]()
			});
			this._rect = r;
			var s = this._axesList;
			i(), t.get("containLabel") && (h(s, function(t) {
				if (!t.model.get("axisLabel.inside")) {
					var e = n(t);
					if (e) {
						var i = t.isHorizontal() ? gr : "width",
							a = t.model.get("axisLabel.margin");
						r[i] -= e[i] + a, "top" === t[Nn] ? r.y += e[gr] + a : "left" === t[Nn] && (r.x += e.width + a)
					}
				}
			}), i())
		}, v[Q] = function(t, e) {
			if (null != e) {
				var i = t + e;
				return this._axesMap[i]
			}
			for (var n = this._axesList, r = 0; r < n[qr]; r++)
				if (n[r].dim === t) return n[r]
		}, v.getCartesian = function(t, e) {
			var i = "x" + t + "y" + e;
			return this._coordsMap[i]
		}, v._initCartesian = function(t, e, n) {
			function r(t) {
				var e = l[t];
				return e[0] && (e[0].type === Mt || !d(e[0])) || e[1] && (e[1].type === Mt || !d(e[1]))
			}

			function a(n) {
				return function(r, a) {
					if (i(r, t, e)) {
						var c = r.get(Nn);
						"x" === n ? ("top" !== c && c !== hr && (c = hr), o[c] && (c = "top" === c ? hr : "top")) : ("left" !== c && "right" !== c && (c = "left"), o[c] && (c = "left" === c ? "right" : "left")), o[c] = !0;
						var h = new u(n, s[E](r), [0, 0], r.get("type"), c),
							d = h.type === Mt;
						h[et] = d && r.get(G), h[J] = r.get(J), h.onZero = r.get("axisLine.onZero"), r.axis = h, h.model = r, h.index = a, this._axesList.push(h), this._axesMap[n + a] = h, l[n][a] = h, v[n]++
					}
				}
			}
			var o = {
					left: !1,
					right: !1,
					top: !1,
					bottom: !1
				},
				l = {
					x: {},
					y: {}
				},
				v = {
					x: 0,
					y: 0
				};
			return e[te]("xAxis", a("x"), this), e[te]("yAxis", a("y"), this), v.x && v.y ? (h(l.x, function(t, e) {
				h(l.y, function(i, n) {
					var r = "x" + e + "y" + n,
						a = new c(r);
					a.grid = this, this._coordsMap[r] = a, this._coordsList.push(a), a.addAxis(t), a.addAxis(i)
				}, this)
			}, this), this._updateCartesianFromSeries(e, t), h(l.x, function(t) {
				r("y") && (t.onZero = !1), f(t) && t.scale[q]([0, 0]), p(t, t.model)
			}, this), void h(l.y, function(t) {
				r("x") && (t.onZero = !1), f(t) && t.scale[q]([0, 0]), p(t, t.model)
			}, this)) : (this._axesMap = {}, void(this._axesList = []))
		}, v._updateCartesianFromSeries = function(t, e) {
			function n(t, e, i, n) {
				h(n.getDimensionsOnAxis(i), function(i) {
					e.scale[q](t[Nt](i, e.scale.type !== on))
				})
			}
			t[le](function(r) {
				if (r.get(St) === T) {
					var a = r.get("xAxisIndex"),
						o = r.get("yAxisIndex"),
						s = t[mn]("xAxis", a),
						l = t[mn]("yAxis", o);
					if (!i(s, e, t) || !i(l, e, t)) return;
					var c = this.getCartesian(a, o),
						u = r[sn]();
					"list" === u.type && (n(u, c[Q]("x"), "x", r), n(u, c[Q]("y"), "y", r))
				}
			}, this)
		}, r[mr] = function(t, e) {
			var i = [];
			return t[te]("grid", function(n, a) {
				var o = new r(n, t, e);
				o.name = "grid_" + a, o[_e](n, e), n[St] = o, i.push(o)
			}), t[le](function(e) {
				if (e.get(St) === T) {
					var n = e.get("xAxisIndex"),
						r = t[mn]("xAxis", n),
						a = i[r.get("gridIndex")];
					e[St] = a.getCartesian(n, e.get("yAxisIndex"))
				}
			}), i
		}, t("../../CoordinateSystem")[gn]("grid", r), r
	}), e("echarts/chart/bar/BarSeries", [Kr, _t, wt], function(t) {
		var e = t(_t),
			i = t(wt);
		return e[Vr]({
			type: "series.bar",
			dependencies: ["grid", "polar"],
			getInitialData: function(t, e) {
				return i(t.data, this, e)
			},
			defaultOption: {
				zlevel: 0,
				z: 2,
				coordinateSystem: "cartesian2d",
				legendHoverLink: !0,
				xAxisIndex: 0,
				yAxisIndex: 0,
				barMinHeight: 0,
				barGap: "30%",
				barCategoryGap: "20%",
				itemStyle: {
					normal: {
						barBorderColor: "#fff",
						barBorderWidth: 0
					},
					emphasis: {
						barBorderColor: "#fff",
						barBorderWidth: 0
					}
				}
			}
		})
	}), e("echarts/chart/bar/barItemStyle", [Kr, "../../model/mixin/makeStyleMapper"], function(t) {
		return {
			getBarItemStyle: t("../../model/mixin/makeStyleMapper")([
				["fill", "color"],
				[kr, "barBorderColor"],
				[Lr, "barBorderWidth"],
				[Tr],
				[Cr],
				[Ar],
				["shadowOffsetY"],
				[Sr]
			])
		}
	}), e("echarts/chart/bar/BarView", [Kr, Yr, gt, C, "./barItemStyle", A], function(t) {
		function e(t, e) {
			var i = t.width > 0 ? 1 : -1,
				n = t[gr] > 0 ? 1 : -1;
			e = Math.min(e, Math.abs(t.width), Math.abs(t[gr])), t.x += i * e / 2, t.y += n * e / 2, t.width -= i * e, t[gr] -= n * e
		}
		var i = t(Yr),
			n = t(gt);
		return i[Vr](t(C)[$r], t("./barItemStyle")), t(A)[qt]({
			type: "bar",
			render: function(t, e, i) {
				var n = t.get(St);
				return n === T && this._renderOnCartesian(t, e, i), this.group
			},
			_renderOnCartesian: function(t, r, a) {
				function o(r, a) {
					var o = l[It](r),
						s = l[en](r).get(p) || 0;
					e(o, s);
					var c = new n.Rect({
						shape: i[Vr]({}, o)
					});
					if (f) {
						var u = c.shape,
							h = d ? gr : "width",
							v = {};
						u[h] = 0, v[h] = o[h], n[a ? Re : Ve](c, {
							shape: v
						}, t)
					}
					return c
				}
				var s = this.group,
					l = t[sn](),
					c = this._data,
					u = t[St],
					h = u[st](),
					d = h.isHorizontal(),
					f = t.get(Ei),
					p = [oe, un, "barBorderWidth"];
				l.diff(c).add(function(t) {
					if (l.hasValue(t)) {
						var e = o(t);
						l[kt](t, e), s.add(e)
					}
				})[we](function(i, r) {
					var a = c[xi](r);
					if (!l.hasValue(i)) return void s[Li](a);
					a || (a = o(i, !0));
					var u = l[It](i),
						h = l[en](i).get(p) || 0;
					e(u, h), n[Re](a, {
						shape: u
					}, t), l[kt](i, a), s.add(a)
				})[Li](function(e) {
					var i = c[xi](e);
					i && (i.style.text = "", n[Re](i, {
						shape: {
							width: 0
						}
					}, t, function() {
						s[Li](i)
					}))
				})[lt](), this._updateStyle(t, l, d), this._data = l
			},
			_updateStyle: function(t, e, r) {
				function a(t, e, i, r, a) {
					n[Ne](t, e, i), t.text = r, "outside" === t[mi] && (t[mi] = a)
				}
				e[gi](function(o, s) {
					var l = e[en](s),
						c = l[rr](S),
						u = e[Lt](s, "color"),
						h = e[It](s),
						d = l[rr](M)[ut]();
					o[He](i[sr]({
						fill: u
					}, l[rr](b).getBarItemStyle()));
					var f = r ? h[gr] > 0 ? hr : "top" : h.width > 0 ? "left" : "right",
						c = l[rr](S),
						p = l[rr](w),
						v = o.style;
					c.get("show") ? a(v, c, u, t[ct](s, un) || t[an](s), f) : v.text = "", p.get("show") ? a(d, p, u, t[ct](s, hn) || t[an](s), f) : d.text = "", n[Ze](o, d)
				})
			},
			remove: function(t, e) {
				var i = this.group;
				t.get(Ei) ? this._data && this._data[gi](function(e) {
					e.style.text = "", n[Re](e, {
						shape: {
							width: 0
						}
					}, t, function() {
						i[Li](e)
					})
				}) : i[Mi]()
			}
		})
	}), e("echarts/layout/barGrid", [Kr, Yr, "../util/number"], function(t) {
		function e(t) {
			return t.get("stack") || "__ec_stack_" + t[ln]
		}

		function i(t, i) {
			var n = {};
			r.each(t, function(t, i) {
				var r = t[St],
					a = r[st](),
					o = n[a.index] || {
						remainedWidth: a[tt](),
						autoWidthCount: 0,
						categoryGap: "20%",
						gap: "30%",
						axis: a,
						stacks: {}
					},
					s = o.stacks;
				n[a.index] = o;
				var l = e(t);
				s[l] || o.autoWidthCount++, s[l] = s[l] || {
					width: 0,
					maxWidth: 0
				};
				var c = t.get("barWidth"),
					u = t.get("barMaxWidth"),
					h = t.get("barGap"),
					d = t.get("barCategoryGap");
				c && !s[l].width && (c = Math.min(o.remainedWidth, c), s[l].width = c, o.remainedWidth -= c), u && (s[l].maxWidth = u), null != h && (o.gap = h), null != d && (o.categoryGap = d)
			});
			var a = {};
			return r.each(n, function(t, e) {
				a[e] = {};
				var i = t.stacks,
					n = t.axis,
					s = n[tt](),
					l = o(t.categoryGap, s),
					c = o(t.gap, 1),
					u = t.remainedWidth,
					h = t.autoWidthCount,
					d = (u - l) / (h + (h - 1) * c);
				d = Math.max(d, 0), r.each(i, function(t, e) {
					var i = t.maxWidth;
					!t.width && i && d > i && (i = Math.min(i, u), u -= i, t.width = i, h--)
				}), d = (u - l) / (h + (h - 1) * c), d = Math.max(d, 0);
				var f, p = 0;
				r.each(i, function(t, e) {
					t.width || (t.width = d), f = t, p += t.width * (1 + c)
				}), f && (p -= f.width * c);
				var v = -p / 2;
				r.each(i, function(t, i) {
					a[e][i] = a[e][i] || {
						offset: v,
						width: t.width
					}, v += t.width * (1 + c)
				})
			}), a
		}

		function n(t, n, a) {
			var o = i(r[Xr](n.getSeriesByType(t), function(t) {
					return !n[he](t) && t[St] && t[St].type === T
				})),
				s = {};
			n[ce](t, function(t) {
				var i = t[sn](),
					n = t[St],
					r = n[st](),
					a = e(t),
					l = o[r.index][a],
					c = l[$e],
					u = l.width,
					h = n[ot](r),
					d = t.get("barMinHeight") || 0,
					f = r.onZero ? h.toGlobalCoord(h[R](0)) : h.getGlobalExtent()[0],
					p = n.dataToPoints(i, !0);
				s[a] = s[a] || [], i.each(h.dim, function(t, e) {
					if (!isNaN(t)) {
						s[a][e] || (s[a][e] = {
							p: f,
							n: f
						});
						var n, r, o, l, v = t >= 0 ? "p" : "n",
							m = p[e],
							g = s[a][e][v];
						h.isHorizontal() ? (n = g, r = m[1] + c, o = m[0] - g, l = u, Math.abs(o) < d && (o = (0 > o ? -1 : 1) * d), s[a][e][v] += o) : (n = m[0] + c, r = g, o = u, l = m[1] - g, Math.abs(l) < d && (l = (0 >= l ? -1 : 1) * d), s[a][e][v] += l), i[Dt](e, {
							x: n,
							y: r,
							width: o,
							height: l
						})
					}
				}, !0)
			}, this)
		}
		var r = t(Yr),
			a = t("../util/number"),
			o = a[Wn];
		return n
	}), e("echarts/chart/bar", [Kr, Yr, "../coord/cartesian/Grid", "./bar/BarSeries", "./bar/BarView", "../layout/barGrid", X], function(t) {
		var e = t(Yr);
		t("../coord/cartesian/Grid"), t("./bar/BarSeries"), t("./bar/BarView");
		var i = t("../layout/barGrid"),
			n = t(X);
		n[jt](e.curry(i, "bar")), n[Ut]("chart", function(t) {
			t[ce]("bar", function(t) {
				var e = t[sn]();
				e[de]("legendSymbol", "roundRect")
			})
		})
	}), e("echarts/component/axis/AxisBuilder", [Kr, Yr, gt, C, mt], function(t) {
		function e(t, e, i) {
			var n, r, a = s(e - t[Xi]);
			return l(a) ? (r = i > 0 ? "top" : hr, n = cr) : l(a - c) ? (r = i > 0 ? hr : "top", n = cr) : (r = ur, n = a > 0 && c > a ? i > 0 ? "right" : "left" : i > 0 ? "left" : "right"), {
				rotation: a,
				textAlign: n,
				textBaseline: r
			}
		}

		function i(t, e, i) {
			var n, r, a = s(-t[Xi]),
				o = i[0] > i[1],
				u = "start" === e && !o || "start" !== e && o;
			return l(a - c / 2) ? (r = u ? hr : "top", n = cr) : l(a - 1.5 * c) ? (r = u ? "top" : hr, n = cr) : (r = ur, n = 1.5 * c > a && a > c / 2 ? u ? "left" : "right" : u ? "right" : "left"), {
				rotation: a,
				textAlign: n,
				textBaseline: r
			}
		}
		var n = t(Yr),
			r = t(gt),
			a = t(C),
			o = t(mt),
			s = o.remRadian,
			l = o.isRadianAroundZero,
			c = Math.PI,
			u = function(t, e) {
				this.opt = e, this.axisModel = t, n[sr](e, {
					labelOffset: 0,
					nameDirection: 1,
					tickDirection: 1,
					labelDirection: 1,
					silent: !0
				}), this.group = new r.Group({
					position: e[Nn].slice(),
					rotation: e[Xi]
				})
			};
		u[$r] = {
			constructor: u,
			hasBuilder: function(t) {
				return !!h[t]
			},
			add: function(t) {
				h[t].call(this)
			},
			getGroup: function() {
				return this.group
			}
		};
		var h = {
				axisLine: function() {
					var t = this.opt,
						e = this.axisModel;
					if (e.get("axisLine.show")) {
						var i = this.axisModel.axis[at]();
						this.group.add(new r.Line({
							shape: {
								x1: i[0],
								y1: 0,
								x2: i[1],
								y2: 0
							},
							style: n[Vr]({
								lineCap: "round"
							}, e[rr]("axisLine.lineStyle")[Y]()),
							strokeContainThreshold: t.strokeContainThreshold,
							silent: !!t[Me],
							z2: 1
						}))
					}
				},
				axisTick: function() {
					var t = this.axisModel;
					if (t.get("axisTick.show")) {
						for (var e = t.axis, i = t[rr](_), n = this.opt, a = i[rr](se), o = i.get(qr), s = f(i, n.labelInterval), l = e.getTicksCoords(), c = [], u = 0; u < l[qr]; u++)
							if (!d(e, u, s)) {
								var h = l[u];
								c.push(new r.Line(r.subPixelOptimizeLine({
									shape: {
										x1: h,
										y1: 0,
										x2: h,
										y2: n.tickDirection * o
									},
									style: {
										lineWidth: a.get("width")
									},
									silent: !0
								})))
							}
						this.group.add(r.mergePath(c, {
							style: a[Y](),
							silent: !0
						}))
					}
				},
				axisLabel: function() {
					function t(t, e) {
						var i = t && t[ir]().clone(),
							n = e && e[ir]().clone();
						return i && n ? (i[yr](t[Hi]()), n[yr](e[Hi]()), i[xe](n)) : void 0
					}
					var i = this.axisModel;
					if (i.get("axisLabel.show")) {
						var n = this.opt,
							o = i.axis,
							s = i[rr](z),
							l = s[rr](nr),
							u = s.get(Pn),
							h = o.scale[H](),
							f = i[O](),
							p = n.labelRotation;
						null == p && (p = s.get(Zi) || 0), p = p * c / 180;
						for (var v = e(n, p, n.labelDirection), m = i.get("data"), g = [], y = 0; y < h[qr]; y++)
							if (!d(o, y, n.labelInterval)) {
								var x = l;
								m && m[y] && m[y][nr] && (x = new a(m[y][nr], l, i[ar]));
								var _ = o[R](h[y]),
									w = [_, n.labelOffset + n.labelDirection * u],
									b = new r.Text({
										style: {
											text: f[y],
											textAlign: x.get("align", !0) || v[vi],
											textBaseline: x.get(tr, !0) || v[pi],
											textFont: x[er](),
											fill: x[Ee]()
										},
										position: w,
										rotation: v[Xi],
										silent: !0,
										z2: 10
									});
								g.push(b), this.group.add(b)
							}
						if (o.type !== Mt) {
							if (i.get("min")) {
								var M = g[0],
									S = g[1];
								t(M, S) && (M[Pi] = !0)
							}
							if (i.get("max")) {
								var A = g[g[qr] - 1],
									C = g[g[qr] - 2];
								t(C, A) && (A[Pi] = !0)
							}
						}
					}
				},
				axisName: function() {
					var t = this.opt,
						n = this.axisModel,
						a = this.opt.axisName;
					if (null == a && (a = n.get("name")), a) {
						var o, s = n.get("nameLocation"),
							l = t.nameDirection,
							c = n[rr]("nameTextStyle"),
							u = n.get("nameGap") || 0,
							h = this.axisModel.axis[at](),
							d = h[0] > h[1] ? -1 : 1,
							f = ["start" === s ? h[0] - d * u : "end" === s ? h[1] + d * u : (h[0] + h[1]) / 2, s === ur ? t.labelOffset + l * u : 0];
						o = s === ur ? e(t, t[Xi], l) : i(t, s, h), this.group.add(new r.Text({
							style: {
								text: a,
								textFont: c[er](),
								fill: c[Ee]() || n.get("axisLine.lineStyle.color"),
								textAlign: o[vi],
								textBaseline: o[pi]
							},
							position: f,
							rotation: o[Xi],
							silent: !0,
							z2: 1
						}))
					}
				}
			},
			d = u.ifIgnoreOnTick = function(t, e, i) {
				return t.scale.type === on && typeof i === Er && !i(e, t.scale[F](e)) || e % (i + 1)
			},
			f = u.getInterval = function(t, e) {
				var i = t.get(N);
				return (null == i || "auto" == i) && (i = e), i
			};
		return u
	}), e("echarts/component/axis/AxisView", [Kr, Yr, gt, "./AxisBuilder", A], function(t) {
		function e(t, e) {
			function i(t, e) {
				var i = n[Q](t);
				return i.toGlobalCoord(i[R](0))
			}
			var n = t[St],
				r = e.axis,
				a = {},
				o = r[Nn],
				s = r.onZero ? "onZero" : o,
				l = r.dim,
				c = n[L](),
				u = [c.x, c.x + c.width, c.y, c.y + c[gr]],
				h = {
					x: {
						top: u[2],
						bottom: u[3]
					},
					y: {
						left: u[0],
						right: u[1]
					}
				};
			h.x.onZero = Math.max(Math.min(i("y"), h.x[hr]), h.x.top), h.y.onZero = Math.max(Math.min(i("x"), h.y.right), h.y.left), a[Nn] = ["y" === l ? h.y[s] : u[0], "x" === l ? h.x[s] : u[3]];
			var d = {
				x: 0,
				y: 1
			};
			a[Xi] = Math.PI / 2 * d[l];
			var f = {
				top: -1,
				bottom: 1,
				left: -1,
				right: 1
			};
			a.labelDirection = a.tickDirection = a.nameDirection = f[o], r.onZero && (a.labelOffset = h[l][o] - h[l].onZero), e[rr](_).get(lr) && (a.tickDirection = -a.tickDirection), e[rr](z).get(lr) && (a.labelDirection = -a.labelDirection);
			var p = e[rr](z).get(Zi);
			return a.labelRotation = "top" === s ? -p : p, a.labelInterval = r.getLabelInterval(), a.z2 = 1, a
		}
		var i = t(Yr),
			n = t(gt),
			r = t("./AxisBuilder"),
			a = r.ifIgnoreOnTick,
			o = r.getInterval,
			s = [x, z, _, "axisName"],
			l = ["splitLine", "splitArea"],
			c = t(A)[Ft]({
				type: "axis",
				render: function(t, n) {
					if (this.group[Mi](), t.get("show")) {
						var a = n[mn]("grid", t.get("gridIndex")),
							o = e(a, t),
							c = new r(t, o);
						i.each(s, c.add, c), this.group.add(c.getGroup()), i.each(l, function(e) {
							t.get(e + ".show") && this["_" + e](t, a, o.labelInterval)
						}, this)
					}
				},
				_splitLine: function(t, e, i) {
					var r = t.axis,
						s = t[rr]("splitLine"),
						l = s[rr](se),
						c = l.get("width"),
						u = l.get("color"),
						h = o(s, i);
					u = u instanceof Array ? u : [u];
					for (var d = e[St][L](), f = r.isHorizontal(), p = [], v = 0, m = r.getTicksCoords(), g = [], y = [], x = 0; x < m[qr]; x++)
						if (!a(r, x, h)) {
							var _ = r.toGlobalCoord(m[x]);
							f ? (g[0] = _, g[1] = d.y, y[0] = _, y[1] = d.y + d[gr]) : (g[0] = d.x, g[1] = _, y[0] = d.x + d.width, y[1] = _);
							var w = v++ % u[qr];
							p[w] = p[w] || [], p[w].push(new n.Line(n.subPixelOptimizeLine({
								shape: {
									x1: g[0],
									y1: g[1],
									x2: y[0],
									y2: y[1]
								},
								style: {
									lineWidth: c
								},
								silent: !0
							})))
						}
					for (var x = 0; x < p[qr]; x++) this.group.add(n.mergePath(p[x], {
						style: {
							stroke: u[x % u[qr]],
							lineDash: l.getLineDash(),
							lineWidth: c
						},
						silent: !0
					}))
				},
				_splitArea: function(t, e, i) {
					var r = t.axis,
						s = t[rr]("splitArea"),
						l = s.get("areaStyle.color"),
						c = e[St][L](),
						u = r.getTicksCoords(),
						h = r.toGlobalCoord(u[0]),
						d = r.toGlobalCoord(u[0]),
						f = [],
						p = 0,
						v = o(s, i);
					l = l instanceof Array ? l : [l];
					for (var m = 1; m < u[qr]; m++)
						if (!a(r, m, v)) {
							var g, y, x, _, w = r.toGlobalCoord(u[m]);
							r.isHorizontal() ? (g = h, y = c.y, x = w - g, _ = c[gr]) : (g = c.x, y = d, x = c.width, _ = w - y);
							var b = p++ % l[qr];
							f[b] = f[b] || [], f[b].push(new n.Rect({
								shape: {
									x: g,
									y: y,
									width: x,
									height: _
								},
								silent: !0
							})), h = g + x, d = y + _
						}
					for (var m = 0; m < f[qr]; m++) this.group.add(n.mergePath(f[m], {
						style: {
							fill: l[m % l[qr]]
						},
						silent: !0
					}))
				}
			});
		c[Vr]({
			type: "xAxis"
		}), c[Vr]({
			type: "yAxis"
		})
	}), e("echarts/component/axis", [Kr, "../coord/cartesian/AxisModel", "./axis/AxisView"], function(t) {
		t("../coord/cartesian/AxisModel"), t("./axis/AxisView")
	}), e("echarts/component/grid", [Kr, "../util/graphic", Yr, "../coord/cartesian/Grid", "./axis", X], function(t) {
		var e = t("../util/graphic"),
			i = t(Yr);
		t("../coord/cartesian/Grid"), t("./axis"), t(X)[Ft]({
			type: "grid",
			render: function(t, n) {
				this.group[Mi](), t.get("show") && this.group.add(new e.Rect({
					shape: t[St][L](),
					style: i[sr]({
						fill: t.get(me)
					}, t[ut]()),
					silent: !0
				}))
			}
		})
	}), e("echarts/chart/helper/dataSelectableMixin", [Kr, Yr], function(t) {
		var e = t(Yr);
		return {
			updateSelectedMap: function() {
				var t = this[Yn];
				this._dataOptMap = e[jr](t.data, function(t, e) {
					return t[e.name] = e, t
				}, {})
			},
			select: function(t) {
				var i = this._dataOptMap,
					n = i[t],
					r = this.get("selectedMode");
				r === y && e.each(i, function(t) {
					t[g] = !1
				}), n && (n[g] = !0)
			},
			unSelect: function(t) {
				var e = this._dataOptMap[t];
				e && (e[g] = !1)
			},
			toggleSelected: function(t) {
				var e = this._dataOptMap[t];
				return null != e ? (this[e[g] ? "unSelect" : "select"](t), e[g]) : void 0
			},
			isSelected: function(t) {
				var e = this._dataOptMap[t];
				return e && e[g]
			}
		}
	}), e("echarts/chart/pie/PieSeries", [Kr, Tt, Yr, At, Ct, "../helper/dataSelectableMixin", A], function(t) {
		var e = t(Tt),
			i = t(Yr),
			n = t(At),
			r = t(Ct),
			a = t("../helper/dataSelectableMixin"),
			o = t(A)[Ht]({
				type: "series.pie",
				init: function(t) {
					this[m]("init", arguments), this[v] = function() {
						return this._dataBeforeProcessed
					}, this.updateSelectedMap(), this._defaultLabelLine(t)
				},
				mergeOption: function(t) {
					this.$superCall(Tn, t), this.updateSelectedMap()
				},
				getInitialData: function(t, i) {
					var n = r(["value"], t.data),
						a = new e(n, this);
					return a[Gt](t.data), a
				},
				getDataParams: function(t) {
					var e = this._data,
						i = this.$superCall(tn, t);
					return i.percent = +(e.get("value", t) / e[Et]("value") * 100)[Hn](2), i.$vars.push("percent"), i
				},
				_defaultLabelLine: function(t) {
					n[dn](t.labelLine, ["show"]);
					var e = t.labelLine[un],
						i = t.labelLine[hn];
					e.show = e.show && t.label[un].show, i.show = i.show && t.label[hn].show
				},
				defaultOption: {
					zlevel: 0,
					z: 2,
					legendHoverLink: !0,
					hoverAnimation: !0,
					center: ["50%", "50%"],
					radius: [0, "75%"],
					clockwise: !0,
					startAngle: 90,
					minAngle: 0,
					selectedOffset: 10,
					avoidLabelOverlap: !0,
					label: {
						normal: {
							rotate: !1,
							show: !0,
							position: "outer"
						},
						emphasis: {}
					},
					labelLine: {
						normal: {
							show: !0,
							length: 20,
							length2: 5,
							smooth: !1,
							lineStyle: {
								width: 1,
								type: "solid"
							}
						}
					},
					itemStyle: {
						normal: {
							borderColor: "rgba(0,0,0,0)",
							borderWidth: 1
						},
						emphasis: {
							borderColor: "rgba(0,0,0,0)",
							borderWidth: 1
						}
					},
					animationEasing: "cubicOut",
					data: []
				}
			});
		return i.mixin(o, a), o
	}), e("echarts/chart/pie/PieView", [Kr, gt, Yr, it], function(t) {
		function e(t, e, n, r) {
			var a = e[sn](),
				o = this[_i],
				s = a[nn](o),
				l = e.get("selectedOffset");
			r[yn]({
				type: "pieToggleSelect",
				from: t,
				name: s,
				seriesId: e.id
			}), a.each(function(t) {
				i(a[xi](t), a[It](t), e.isSelected(a[nn](t)), l, n)
			})
		}

		function i(t, e, i, n, r) {
			var a = (e[ti] + e[Qe]) / 2,
				o = Math.cos(a),
				s = Math.sin(a),
				l = i ? n : 0,
				c = [o * l, s * l];
			r ? t[Vi]().when(200, {
				position: c
			}).start("bounceOut") : t.attr(Nn, c)
		}

		function n(t, e) {
			function i() {
				o[Pi] = o.hoverIgnore, s[Pi] = s.hoverIgnore
			}

			function n() {
				o[Pi] = o.normalIgnore, s[Pi] = s.normalIgnore
			}
			a.Group.call(this);
			var r = new a[Xe]({
					z2: 2
				}),
				o = new a[Ue],
				s = new a.Text;
			this.add(r), this.add(o), this.add(s),
				this[vt](t, e, !0), this.on(hn, i).on(un, n).on(Ge, i).on(Be, n)
		}

		function r(t, e, i, n) {
			var r = n[rr](nr),
				a = n.get(Nn),
				o = a === lr || "inner" === a;
			return {
				fill: r[Ee]() || (o ? "#fff" : t[Lt](e, "color")),
				textFont: r[er](),
				text: t[Kt][ct](e, i) || t[nn](e)
			}
		}
		var a = t(gt),
			o = t(Yr),
			s = n[$r];
		s[vt] = function(t, e, n) {
			function r() {
				l[Ri](!0), l[Oe]({
					shape: {
						r: h.r + 10
					}
				}, 300, "elasticOut")
			}

			function s() {
				l[Ri](!0), l[Oe]({
					shape: {
						r: h.r
					}
				}, 300, "elasticOut")
			}
			var l = this[En](0),
				c = t[Kt],
				u = t[en](e),
				h = t[It](e),
				d = o[Vr]({}, h);
			d.label = null, n ? (l[ii](d), l.shape[Qe] = h[ti], a[Re](l, {
				shape: {
					endAngle: h[Qe]
				}
			}, c)) : a[Re](l, {
				shape: d
			}, c);
			var f = u[rr](oe),
				p = t[Lt](e, "color");
			l[He](o[sr]({
				fill: p
			}, f[rr](un)[ut]())), l[Fe] = f[rr](hn)[ut](), i(this, t[It](e), u.get(g), c.get("selectedOffset"), c.get(Ei)), l.off(Ge).off(Be).off(hn).off(un), u.get("hoverAnimation") && l.on(Ge, r).on(Be, s).on(hn, r).on(un, s), this._updateLabel(t, e), a[Ze](this)
		}, s._updateLabel = function(t, e) {
			var i = this[En](1),
				n = this[En](2),
				o = t[Kt],
				s = t[en](e),
				l = t[It](e),
				c = l.label,
				u = t[Lt](e, "color");
			a[Re](i, {
				shape: {
					points: c.linePoints || [
						[c.x, c.y],
						[c.x, c.y],
						[c.x, c.y]
					]
				}
			}, o), a[Re](n, {
				style: {
					x: c.x,
					y: c.y
				}
			}, o), n.attr({
				style: {
					textAlign: c[vi],
					textBaseline: c[pi],
					textFont: c.font
				},
				rotation: c[Xi],
				origin: [c.x, c.y],
				z2: 10
			});
			var h = s[rr](S),
				d = s[rr](w),
				f = s[rr]("labelLine.normal"),
				p = s[rr]("labelLine.emphasis");
			n[He](r(t, e, un, h)), n[Pi] = n.normalIgnore = !h.get("show"), n.hoverIgnore = !d.get("show"), i[Pi] = i.normalIgnore = !f.get("show"), i.hoverIgnore = !p.get("show"), i[He]({
				stroke: u
			}), i[He](f[rr](se)[Y]()), n[Fe] = r(t, e, hn, d), i[Fe] = p[rr](se)[Y]();
			var v = f.get("smooth");
			v && v === !0 && (v = .4), i[ii]({
				smooth: v
			})
		}, o[zr](n, a.Group);
		var l = t(it)[Vr]({
			type: "pie",
			init: function() {
				var t = new a.Group;
				this._sectorGroup = t
			},
			render: function(t, i, r, a) {
				if (!a || a.from !== this.uid) {
					var s = t[sn](),
						l = this._data,
						c = this.group,
						u = i.get(Ei),
						h = !l,
						d = o.curry(e, this.uid, t, u, r),
						f = t.get("selectedMode");
					if (s.diff(l).add(function(t) {
							var e = new n(s, t);
							h && e[Bn](function(t) {
								t[Ri](!0)
							}), f && e.on("click", d), s[kt](t, e), c.add(e)
						})[we](function(t, e) {
							var i = l[xi](e);
							i[vt](s, t), i.off("click"), f && i.on("click", d), c.add(i), s[kt](t, i)
						})[Li](function(t) {
							var e = l[xi](t);
							c[Li](e)
						})[lt](), u && h && s.count() > 0) {
						var p = s[It](0),
							v = Math.max(r[_n](), r[xn]()) / 2,
							m = o.bind(c.removeClipPath, c);
						c.setClipPath(this._createClipPath(p.cx, p.cy, v, p[ti], p[Je], m, t))
					}
					this._data = s
				}
			},
			_createClipPath: function(t, e, i, n, r, o, s) {
				var l = new a[Xe]({
					shape: {
						cx: t,
						cy: e,
						r0: 0,
						r: i,
						startAngle: n,
						endAngle: n,
						clockwise: r
					}
				});
				return a[Ve](l, {
					shape: {
						endAngle: n + (r ? 1 : -1) * Math.PI * 2
					}
				}, s, o), l
			}
		});
		return l
	}), e("echarts/action/createDataSelectAction", [Kr, X, Yr], function(t) {
		var e = t(X),
			i = t(Yr);
		return function(t, n) {
			i.each(n, function(i) {
				i[we] = "updateView", e[Xt](i, function(e, n) {
					var r = {};
					return n[te]({
						mainType: "series",
						subType: t,
						query: e
					}, function(t) {
						t[i.method] && t[i.method](e.name);
						var n = t[sn]();
						n.each(function(e) {
							var i = n[nn](e);
							r[i] = t.isSelected(i) || !1
						})
					}), {
						name: e.name,
						selected: r
					}
				})
			})
		}
	}), e("echarts/visual/dataColor", [Kr], function(t) {
		return function(t, e) {
			var i = e.get("color"),
				n = 0;
			e.eachRawSeriesByType(t, function(t) {
				var r = t.get("color", !0),
					a = t.getRawData();
				if (!e[he](t)) {
					var o = t[sn]();
					o.each(function(t) {
						var e = o[en](t),
							s = o[rn](t),
							l = o[Lt](t, "color", !0);
						if (l) a[ue](s, "color", l);
						else {
							var c = r ? r[s % r[qr]] : i[(s + n) % i[qr]],
								u = e.get(ie) || c;
							a[ue](s, "color", u), o[ue](t, "color", u)
						}
					})
				}
				n += a.count()
			})
		}
	}), e("echarts/chart/pie/labelLayout", [Kr, pr], function(t) {
		function e(t, e, i, n, r, a, o) {
			function s(e, i, n, r) {
				for (var a = e; i > a; a++)
					if (t[a].y += n, a > e && i > a + 1 && t[a + 1].y > t[a].y + t[a][gr]) return void l(a, n / 2);
				l(i - 1, n / 2)
			}

			function l(e, i) {
				for (var n = e; n >= 0 && (t[n].y -= i, !(n > 0 && t[n].y > t[n - 1].y + t[n - 1][gr])); n--);
			}
			t.sort(function(t, e) {
				return t.y - e.y
			});
			for (var c, u = 0, h = t[qr], d = [], f = [], p = 0; h > p; p++) c = t[p].y - u, 0 > c && s(p, h, -c, r), u = t[p].y + t[p][gr];
			0 > o - u && l(h - 1, u - o);
			for (var p = 0; h > p; p++) t[p].y >= i ? f.push(t[p]) : d.push(t[p])
		}

		function i(t, i, n, r, a, o) {
			for (var s = [], l = [], c = 0; c < t[qr]; c++) t[c].x < i ? s.push(t[c]) : l.push(t[c]);
			e(s, i, n, r, -1, a, o), e(l, i, n, r, 1, a, o);
			for (var c = 0; c < t[qr]; c++) {
				var u = t[c].linePoints;
				u && (t[c].x < i ? u[2][0] = t[c].x + 3 : u[2][0] = t[c].x - 3, u[1][1] = u[2][1] = t[c].y)
			}
		}
		var n = t(pr);
		return function(t, e, r, a) {
			var o, s, l = t[sn](),
				c = [],
				u = !1;
			l.each(function(i) {
				var r, a, h, d, f = l[It](i),
					p = l[en](i),
					v = p[rr](S),
					m = v.get(Nn),
					g = p[rr]("labelLine.normal"),
					y = g.get(qr),
					x = g.get("length2"),
					_ = (f[ti] + f[Qe]) / 2,
					w = Math.cos(_),
					b = Math.sin(_);
				if (o = f.cx, s = f.cy, m === cr) r = f.cx, a = f.cy, d = cr;
				else {
					var M = m === lr || "inner" === m,
						A = (M ? f.r / 2 * w : f.r * w) + o,
						C = (M ? f.r / 2 * b : f.r * b) + s;
					if (y += e - f.r, r = A + 3 * w, a = C + 3 * b, !M) {
						var T = A + w * y,
							k = C + b * y,
							L = T + (0 > w ? -1 : 1) * x,
							D = k;
						r = L + (0 > w ? -5 : 5), a = D, h = [
							[A, C],
							[T, k],
							[L, D]
						]
					}
					d = M ? cr : w > 0 ? "left" : "right"
				}
				var I = ur,
					P = v[rr](nr)[er](),
					z = v.get(Zi) ? 0 > w ? -_ + Math.PI : -_ : 0,
					V = t[ct](i, un) || l[nn](i),
					R = n[ir](V, P, d, I);
				u = !!z, f.label = {
					x: r,
					y: a,
					height: R[gr],
					length: y,
					length2: x,
					linePoints: h,
					textAlign: d,
					textBaseline: I,
					font: P,
					rotation: z
				}, c.push(f.label)
			}), !u && t.get("avoidLabelOverlap") && i(c, o, s, e, r, a)
		}
	}), e("echarts/chart/pie/pieLayout", [Kr, mt, "./labelLayout", Yr], function(t) {
		var e = t(mt),
			i = e[Wn],
			n = t("./labelLayout"),
			r = t(Yr),
			a = 2 * Math.PI,
			o = Math.PI / 180;
		return function(t, s, l) {
			s[ce](t, function(t) {
				var s = t.get(cr),
					c = t.get(vn);
				r[qn](c) || (c = [0, c]), r[qn](s) || (s = [s, s]);
				var u = l[_n](),
					h = l[xn](),
					d = Math.min(u, h),
					f = i(s[0], u),
					p = i(s[1], h),
					v = i(c[0], d / 2),
					m = i(c[1], d / 2),
					g = t[sn](),
					y = -t.get(ti) * o,
					x = t.get("minAngle") * o,
					_ = g[Et]("value"),
					w = Math.PI / (_ || g.count()) * 2,
					b = t.get(Je),
					M = t.get("roseType"),
					S = g[Nt]("value");
				S[0] = 0;
				var A = a,
					C = 0,
					T = y,
					k = b ? 1 : -1;
				if (g.each("value", function(t, i) {
						var n;
						n = "area" !== M ? 0 === _ ? w : t * w : a / (g.count() || 1), x > n ? (n = x, A -= x) : C += t;
						var r = T + k * n;
						g[Dt](i, {
							angle: n,
							startAngle: T,
							endAngle: r,
							clockwise: b,
							cx: f,
							cy: p,
							r0: v,
							r: M ? e[Un](t, S, [v, m]) : m
						}), T = r
					}, !0), a > A)
					if (.001 >= A) {
						var L = a / g.count();
						g.each(function(t) {
							var e = g[It](t);
							e[ti] = y + k * t * L, e[Qe] = y + k * (t + 1) * L
						})
					} else w = A / C, T = y, g.each("value", function(t, e) {
						var i = g[It](e),
							n = i.angle === x ? x : t * w;
						i[ti] = T, i[Qe] = T + k * n, T += n
					});
				n(t, m, u, h)
			})
		}
	}), e("echarts/processor/dataFilter", [], function() {
		return function(t, e) {
			var i = e[Mn]({
				mainType: "legend"
			});
			i && i[qr] && e[ce](t, function(t) {
				var e = t[sn]();
				e[Ot](function(t) {
					for (var n = e[nn](t), r = 0; r < i[qr]; r++)
						if (!i[r].isSelected(n)) return !1;
					return !0
				}, this)
			}, this)
		}
	}), e("echarts/chart/pie", [Kr, Yr, X, "./pie/PieSeries", "./pie/PieView", "../action/createDataSelectAction", "../visual/dataColor", "./pie/pieLayout", "../processor/dataFilter"], function(t) {
		var e = t(Yr),
			i = t(X);
		t("./pie/PieSeries"), t("./pie/PieView"), t("../action/createDataSelectAction")("pie", [{
			type: "pieToggleSelect",
			event: "pieselectchanged",
			method: "toggleSelected"
		}, {
			type: "pieSelect",
			event: "pieselected",
			method: "select"
		}, {
			type: "pieUnSelect",
			event: "pieunselected",
			method: "unSelect"
		}]), i[Ut]("chart", e.curry(t("../visual/dataColor"), "pie")), i[jt](e.curry(t("./pie/pieLayout"), "pie")), i[Yt](Xr, e.curry(t("../processor/dataFilter"), "pie"))
	}), e("echarts/chart/scatter/ScatterSeries", [Kr, wt, _t], function(t) {
		var e = t(wt),
			i = t(_t);
		return i[Vr]({
			type: "series.scatter",
			dependencies: ["grid", "polar"],
			getInitialData: function(t, i) {
				var n = e(t.data, this, i);
				return n
			},
			defaultOption: {
				coordinateSystem: "cartesian2d",
				zlevel: 0,
				z: 2,
				legendHoverLink: !0,
				hoverAnimation: !0,
				xAxisIndex: 0,
				yAxisIndex: 0,
				polarIndex: 0,
				geoIndex: 0,
				symbolSize: 10,
				large: !1,
				largeThreshold: 2e3,
				itemStyle: {
					normal: {
						opacity: .8
					}
				}
			}
		})
	}), e("echarts/chart/helper/LargeSymbolDraw", [Kr, gt, yt, Yr], function(t) {
		function e() {
			this.group = new i.Group, this._symbolEl = new a({
				silent: !0
			})
		}
		var i = t(gt),
			n = t(yt),
			r = t(Yr),
			a = i[qe]({
				shape: {
					points: null,
					sizes: null
				},
				symbolProxy: null,
				buildPath: function(t, e) {
					for (var i = e[Ke], n = e.sizes, r = this.symbolProxy, a = r.shape, o = 0; o < i[qr]; o++) {
						var s = i[o],
							l = n[o];
						l[0] < 4 ? t.rect(s[0] - l[0] / 2, s[1] - l[1] / 2, l[0], l[1]) : (a.x = s[0] - l[0] / 2, a.y = s[1] - l[1] / 2, a.width = l[0], a[gr] = l[1], r[ri](t, a))
					}
				}
			}),
			o = e[$r];
		return o[vt] = function(t) {
			this.group[Mi]();
			var e = this._symbolEl,
				i = t[Kt];
			e[ii]({
				points: t[Rt](t[It]),
				sizes: t[Rt](function(e) {
					var i = t[Lt](e, ft);
					return r[qn](i) || (i = [i, i]), i
				})
			}), e.symbolProxy = n[pt](t[Vt](dt), 0, 0, 0, 0), e[xt] = e.symbolProxy[xt], e[He](i[rr](b)[ut](["color"]));
			var a = t[Vt]("color");
			a && e[xt](a), this.group.add(this._symbolEl)
		}, o[Si] = function(t) {
			var e = t[sn]();
			this._symbolEl[ii]({
				points: e[Rt](e[It])
			})
		}, o[Li] = function() {
			this.group[Mi]()
		}, e
	}), e("echarts/chart/scatter/ScatterView", [Kr, nt, "../helper/LargeSymbolDraw", A], function(t) {
		var e = t(nt),
			i = t("../helper/LargeSymbolDraw");
		t(A)[qt]({
			type: "scatter",
			init: function() {
				this._normalSymbolDraw = new e, this._largeSymbolDraw = new i
			},
			render: function(t, e, i) {
				var n = t[sn](),
					r = this._largeSymbolDraw,
					a = this._normalSymbolDraw,
					o = this.group,
					s = t.get("large") && n.count() > t.get("largeThreshold") ? r : a;
				this[K] = s, s[vt](n), o.add(s.group), o[Li](s === r ? a.group : r.group)
			},
			updateLayout: function() {
				this[K][Si]()
			},
			remove: function(t, e) {
				this[K] && this[K][Li](e, !0)
			}
		})
	}), e("echarts/chart/scatter", [Kr, Yr, X, "./scatter/ScatterSeries", "./scatter/ScatterView", j, U], function(t) {
		var e = t(Yr),
			i = t(X);
		t("./scatter/ScatterSeries"), t("./scatter/ScatterView"), i[Ut]("chart", e.curry(t(j), ne, ht, null)), i[jt](e.curry(t(U), ne))
	}), e("echarts/component/tooltip/TooltipModel", [Kr, A], function(t) {
		t(A)[Wt]({
			type: "tooltip",
			defaultOption: {
				zlevel: 0,
				z: 8,
				show: !0,
				showContent: !0,
				trigger: "item",
				triggerOn: "mousemove",
				alwaysShowContent: !1,
				hideDelay: 100,
				transitionDuration: .4,
				enterable: !1,
				backgroundColor: "rgba(50,50,50,0.7)",
				borderColor: "#333",
				borderRadius: 4,
				borderWidth: 0,
				padding: 5,
				axisPointer: {
					type: "line",
					axis: "auto",
					animation: !0,
					animationDurationUpdate: 200,
					animationEasingUpdate: "exponentialOut",
					lineStyle: {
						color: "#555",
						width: 1,
						type: "solid"
					},
					crossStyle: {
						color: "#555",
						width: 1,
						type: "dashed",
						textStyle: {}
					},
					shadowStyle: {
						color: "rgba(150,150,150,0.3)"
					}
				},
				textStyle: {
					color: "#fff",
					fontSize: 14
				}
			}
		})
	}), e("echarts/component/tooltip/TooltipContent", [Kr, Yr, Ni, Pe, p], function(t) {
		function e(t) {
			var e = "cubic-bezier(0.23, 1, 0.32, 1)",
				i = "left " + t + "s " + e + ",top " + t + "s " + e;
			return o.map(d, function(t) {
				return t + "transition:" + i
			}).join(";")
		}

		function i(t) {
			var e = [],
				i = t.get("fontSize"),
				n = t[Ee]();
			return n && e.push("color:" + n), e.push("font:" + t[er]()), i && e.push("line-height:" + Math.round(3 * i / 2) + "px"), u(["decoration", "align"], function(i) {
				var n = t.get(i);
				n && e.push("text-" + i + ":" + n)
			}), e.join(";")
		}

		function n(t) {
			t = t;
			var n = [],
				r = t.get("transitionDuration"),
				a = t.get(me),
				o = t[rr](nr),
				l = t.get(f);
			return r && n.push(e(r)), a && (n.push("background-Color:" + s.toHex(a)), n.push("filter:alpha(opacity=70)"), n.push("background-Color:" + a)), u(["width", "color", vn], function(e) {
				var i = "border-" + e,
					r = h(i),
					a = t.get(r);
				null != a && n.push(i + ":" + a + ("color" === e ? "" : "px"))
			}), n.push(i(o)), null != l && n.push("padding:" + c[Vn](l).join("px ") + "px"), n.join(";") + ";"
		}

		function r(t, e) {
			var i = document[Wr]("div"),
				n = e.getZr();
			this.el = i, this._x = e[_n]() / 2, this._y = e[xn]() / 2, t[ge](i), this._container = t, this._show = !1, this._hideTimeout;
			var r = this;
			i.onmouseenter = function() {
				r.enterable && (clearTimeout(r._hideTimeout), r._show = !0), r._inContent = !0
			}, i.onmousemove = function(e) {
				if (!r.enterable) {
					var i = n.handler;
					l.normalizeEvent(t, e), i.dispatch(De, e)
				}
			}, i.onmouseleave = function() {
				r.enterable && r._show && r.hideLater(r._hideDelay), r._inContent = !1
			}, a(i, t)
		}

		function a(t, e) {
			function i(t) {
				n(t[Bi]) && t.preventDefault()
			}

			function n(i) {
				for (; i && i !== e;) {
					if (i === t) return !0;
					i = i[Ce]
				}
			}
			l.addEventListener(e, "touchstart", i), l.addEventListener(e, "touchmove", i), l.addEventListener(e, "touchend", i)
		}
		var o = t(Yr),
			s = t(Ni),
			l = t(Pe),
			c = t(p),
			u = o.each,
			h = c.toCamelCase,
			d = ["", "-webkit-", "-moz-", "-o-"],
			v = "position:absolute;display:block;border-style:solid;white-space:nowrap;";
		return r[$r] = {
			constructor: r,
			enterable: !0,
			update: function() {
				var t = this._container,
					e = t.currentStyle || document.defaultView.getComputedStyle(t),
					i = t.style;
				"absolute" !== i[Nn] && "absolute" !== e[Nn] && (i[Nn] = "relative"), this.hide()
			},
			show: function(t) {
				clearTimeout(this._hideTimeout), this.el.style.cssText = v + n(t) + ";left:" + this._x + "px;top:" + this._y + "px;", this._show = !0
			},
			setContent: function(t) {
				var e = this.el;
				e[ye] = t, e.style.display = t ? "block" : "none"
			},
			moveTo: function(t, e) {
				var i = this.el.style;
				i.left = t + "px", i.top = e + "px", this._x = t, this._y = e
			},
			hide: function() {
				this.el.style.display = "none", this._show = !1
			},
			hideLater: function(t) {
				!this._show || this._inContent && this.enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(o.bind(this.hide, this), t)) : this.hide())
			},
			isShow: function() {
				return this._show
			}
		}, r
	}), e("echarts/component/tooltip/TooltipView", [Kr, "./TooltipContent", gt, Yr, p, mt, A], function(t) {
		function e(t, e) {
			if (!t || !e) return !1;
			var i = m.round;
			return i(t[0]) === i(e[0]) && i(t[1]) === i(e[1])
		}

		function i(t, e, i, n) {
			return {
				x1: t,
				y1: e,
				x2: i,
				y2: n
			}
		}

		function n(t, e, i, n) {
			return {
				x: t,
				y: e,
				width: i,
				height: n
			}
		}

		function r(t, e, i, n, r, a) {
			return {
				cx: t,
				cy: e,
				r0: i,
				r: n,
				startAngle: r,
				endAngle: a,
				clockwise: !0
			}
		}

		function a(t, e, i, n, r) {
			var a = i.clientWidth,
				o = i[ve],
				s = 20;
			return t + a + s > n ? t -= a + s : t += s, e + o + s > r ? e -= o + s : e += s, [t, e]
		}

		function o(t, e, i) {
			var n = i.clientWidth,
				r = i[ve],
				a = 5,
				o = 0,
				s = 0,
				l = e.width,
				c = e[gr];
			switch (t) {
				case lr:
					o = e.x + l / 2 - n / 2, s = e.y + c / 2 - r / 2;
					break;
				case "top":
					o = e.x + l / 2 - n / 2, s = e.y - r - a;
					break;
				case hr:
					o = e.x + l / 2 - n / 2, s = e.y + c + a;
					break;
				case "left":
					o = e.x - n - a, s = e.y + c / 2 - r / 2;
					break;
				case "right":
					o = e.x + l + a, s = e.y + c / 2 - r / 2
			}
			return [o, s]
		}

		function s(t, e, i, n, r, s, l) {
			var c = l[_n](),
				u = l[xn](),
				h = s && s[ir]().clone();
			if (s && h[yr](s[Ui]), typeof t === Er && (t = t([e, i], r, h)), f[qn](t)) e = g(t[0], c), i = g(t[1], u);
			else if (typeof t === Gr && s) {
				var d = o(t, h, n.el);
				e = d[0], i = d[1]
			} else {
				var d = a(e, i, n.el, c, u);
				e = d[0], i = d[1]
			}
			n[ui](e, i)
		}

		function l(t) {
			var e = t[St],
				i = t.get("tooltip.trigger", !0);
			return !(!e || e.type !== T && "polar" !== e.type && e.type !== y || "item" === i)
		}
		var c = t("./TooltipContent"),
			u = t(gt),
			f = t(Yr),
			v = t(p),
			m = t(mt),
			g = m[Wn];
		t(A)[Ft]({
			type: "tooltip",
			_axisPointers: {},
			init: function(t, e) {
				var i = new c(e[wn](), e);
				this._tooltipContent = i, e.on("showTip", this._manuallyShowTip, this), e.on("hideTip", this._manuallyHideTip, this)
			},
			render: function(t, e, i) {
				this.group[Mi](), this._axisPointers = {}, this._tooltipModel = t, this._ecModel = e, this._api = i, this._lastHover = {};
				var n = this._tooltipContent;
				n[we](), n.enterable = t.get("enterable"), this._alwaysShowContent = t.get("alwaysShowContent"), this._seriesGroupByAxis = this._prepareAxisTriggerData(t, e);
				var r = this._crossText;
				r && this.group.add(r);
				var a = this._api.getZr(),
					o = this._tryShow;
				a.off("click", o), a.off(De, o), a.off(Be, this._hide), "click" === t.get("triggerOn") ? a.on("click", o, this) : (a.on(De, o, this), a.on(Be, this._hide, this))
			},
			_manuallyShowTip: function(t) {
				if (t.from !== this.uid) {
					var e = this._ecModel,
						i = t[ln],
						n = t[_i],
						r = e.getSeriesByIndex(i),
						a = this._api;
					if (null == t.x || null == t.y) {
						if (r || e[le](function(t) {
								l(t) && !r && (r = t)
							}), r) {
							var o = r[sn]();
							null == n && (n = o[yi](t.name));
							var s, c, u = o[xi](n),
								h = r[St];
							if (h && h[rt]) {
								var d = h[rt](o[Bt](h[Zt], n, !0));
								s = d && d[0], c = d && d[1]
							} else if (u) {
								var f = u[ir]().clone();
								f[yr](u[Ui]), s = f.x + f.width / 2, c = f.y + f[gr] / 2
							}
							null != s && null != c && this._tryShow({
								offsetX: s,
								offsetY: c,
								target: u,
								event: {}
							})
						}
					} else a.getZr().handler.dispatch(De, {
						zrX: t.x,
						zrY: t.y
					})
				}
			},
			_manuallyHideTip: function(t) {
				t.from !== this.uid && this._hide()
			},
			_prepareAxisTriggerData: function(t, e) {
				var i = {};
				return e[le](function(t) {
					if (l(t)) {
						var e, n, r = t[St];
						r.type === T ? (e = r[st](), n = e.dim + e.index) : r.type === y ? (e = r[Q](), n = e.dim + e.type) : (e = r[st](), n = e.dim + r.name), i[n] = i[n] || {
							coordSys: [],
							series: []
						}, i[n].coordSys.push(r), i[n][An].push(t)
					}
				}, this), i
			},
			_tryShow: function(t) {
				var e = t[Bi],
					i = this._tooltipModel,
					n = i.get(wi),
					r = this._ecModel,
					a = this._api;
				if (i)
					if (e && null != e[_i]) {
						var o = e[Kt] || r.getSeriesByIndex(e[ln]),
							s = e[_i],
							l = o[sn]()[en](s);
						"axis" === (l.get("tooltip.trigger") || n) ? this._showAxisTooltip(i, r, t): (this._ticket = "", this._hideAxisPointer(), this._resetLastHover(), this._showItemTooltipContent(o, s, t)), a[yn]({
							type: "showTip",
							from: this.uid,
							dataIndex: e[_i],
							seriesIndex: e[ln]
						})
					} else "item" === n ? this._hide() : this._showAxisTooltip(i, r, t), "cross" === i.get("axisPointer.type") && a[yn]({
						type: "showTip",
						from: this.uid,
						x: t[ke],
						y: t[Te]
					})
			},
			_showAxisTooltip: function(t, i, n) {
				var r = t[rr]("axisPointer"),
					a = r.get("type");
				if ("cross" === a) {
					var o = n[Bi];
					if (o && null != o[_i]) {
						var s = i.getSeriesByIndex(o[ln]),
							l = o[_i];
						this._showItemTooltipContent(s, l, n)
					}
				}
				this._showAxisPointer();
				var c = !0;
				f.each(this._seriesGroupByAxis, function(t) {
					var i = t.coordSys,
						o = i[0],
						s = [n[ke], n[Te]];
					if (!o.containPoint(s)) return void this._hideAxisPointer(o.name);
					c = !1;
					var l = o[Zt],
						u = o.pointToData(s, !0);
					s = o[rt](u);
					var h = o[st](),
						d = r.get("axis");
					"auto" === d && (d = h.dim);
					var p = !1,
						v = this._lastHover;
					if ("cross" === a) e(v.data, u) && (p = !0), v.data = u;
					else {
						var m = f[Zr](l, d);
						v.data === u[m] && (p = !0), v.data = u[m]
					}
					o.type !== T || p ? "polar" !== o.type || p ? o.type !== y || p || this._showSinglePointer(r, o, d, s) : this._showPolarPointer(r, o, d, s) : this._showCartesianPointer(r, o, d, s), "cross" !== a && this._dispatchAndShowSeriesTooltipContent(o, t[An], s, u, p)
				}, this), c && this._hide()
			},
			_showCartesianPointer: function(t, e, r, a) {
				function o(n, r, a) {
					var o = "x" === n ? i(r[0], a[0], r[0], a[1]) : i(a[0], r[1], a[1], r[1]),
						s = l._getPointerElement(e, t, n, o);
					h ? u[Re](s, {
						shape: o
					}, t) : s.attr({
						shape: o
					})
				}

				function s(i, r, a) {
					var o = e[Q](i),
						s = o[tt](),
						c = a[1] - a[0],
						d = "x" === i ? n(r[0] - s / 2, a[0], s, c) : n(a[0], r[1] - s / 2, c, s),
						f = l._getPointerElement(e, t, i, d);
					h ? u[Re](f, {
						shape: d
					}, t) : f.attr({
						shape: d
					})
				}
				var l = this,
					c = t.get("type"),
					h = "cross" !== c;
				if ("cross" === c) o("x", a, e[Q]("y").getGlobalExtent()), o("y", a, e[Q]("x").getGlobalExtent()), this._updateCrossText(e, a, t);
				else {
					var d = e[Q]("x" === r ? "y" : "x"),
						f = d.getGlobalExtent();
					e.type === T && ("line" === c ? o : s)(r, a, f)
				}
			},
			_showSinglePointer: function(t, e, n, r) {
				function a(n, r, a) {
					var s = e[Q](),
						c = s[d],
						h = c === On ? i(r[0], a[0], r[0], a[1]) : i(a[0], r[1], a[1], r[1]),
						f = o._getPointerElement(e, t, n, h);
					l ? u[Re](f, {
						shape: h
					}, t) : f.attr({
						shape: h
					})
				}
				var o = this,
					s = t.get("type"),
					l = "cross" !== s,
					c = e[L](),
					h = [c.y, c.y + c[gr]];
				a(n, r, h)
			},
			_showPolarPointer: function(t, e, n, a) {
				function o(n, r, a) {
					var o, s = e.pointToCoord(r);
					if ("angle" === n) {
						var c = e.coordToPoint([a[0], s[1]]),
							h = e.coordToPoint([a[1], s[1]]);
						o = i(c[0], c[1], h[0], h[1])
					} else o = {
						cx: e.cx,
						cy: e.cy,
						r: s[0]
					};
					var d = l._getPointerElement(e, t, n, o);
					f ? u[Re](d, {
						shape: o
					}, t) : d.attr({
						shape: o
					})
				}

				function s(i, n, a) {
					var o, s = e[Q](i),
						c = s[tt](),
						h = e.pointToCoord(n),
						d = Math.PI / 180;
					o = "angle" === i ? r(e.cx, e.cy, a[0], a[1], (-h[1] - c / 2) * d, (-h[1] + c / 2) * d) : r(e.cx, e.cy, h[0] - c / 2, h[0] + c / 2, 0, 2 * Math.PI);
					var p = l._getPointerElement(e, t, i, o);
					f ? u[Re](p, {
						shape: o
					}, t) : p.attr({
						shape: o
					})
				}
				var l = this,
					c = t.get("type"),
					h = e.getAngleAxis(),
					d = e.getRadiusAxis(),
					f = "cross" !== c;
				if ("cross" === c) o("angle", a, d[at]()), o(vn, a, h[at]()), this._updateCrossText(e, a, t);
				else {
					var p = e[Q](n === vn ? "angle" : vn),
						v = p[at]();
					("line" === c ? o : s)(n, a, v)
				}
			},
			_updateCrossText: function(t, e, i) {
				var n = i[rr]("crossStyle"),
					r = n[rr](nr),
					a = this._tooltipModel,
					o = this._crossText;
				o || (o = this._crossText = new u.Text({
					style: {
						textAlign: "left",
						textBaseline: "bottom"
					}
				}), this.group.add(o));
				var s = t.pointToData(e),
					l = t[Zt];
				s = f.map(s, function(e, i) {
					var n = t[Q](l[i]);
					return e = n.type === Mt || "time" === n.type ? n.scale[F](e) : v[Ki](e[Hn](n[Fn]()))
				}), o[He]({
					fill: r[Ee]() || n.get("color"),
					textFont: r[er](),
					text: s.join(", "),
					x: e[0] + 5,
					y: e[1] - 5
				}), o.z = a.get("z"), o[be] = a.get(be)
			},
			_getPointerElement: function(t, e, i, n) {
				var r = this._tooltipModel,
					a = r.get("z"),
					o = r.get(be),
					s = this._axisPointers,
					l = t.name;
				if (s[l] = s[l] || {}, s[l][i]) return s[l][i];
				var c = e.get("type"),
					h = e[rr](c + "Style"),
					d = "shadow" === c,
					f = h[d ? "getAreaStyle" : Y](),
					p = "polar" === t.type ? d ? Xe : i === vn ? Ye : "Line" : d ? "Rect" : "Line";
				d ? f[kr] = null : f.fill = null;
				var v = s[l][i] = new u[p]({
					style: f,
					z: a,
					zlevel: o,
					silent: !0,
					shape: n
				});
				return this.group.add(v), v
			},
			_dispatchAndShowSeriesTooltipContent: function(t, e, i, n, r) {
				var a = this._tooltipModel,
					o = this._tooltipContent,
					l = t[st](),
					c = f.map(e, function(t) {
						return {
							seriesIndex: t[ln],
							dataIndex: t.getAxisTooltipDataIndex ? t.getAxisTooltipDataIndex(t.getDimensionsOnAxis(l.dim), n, l) : t[sn]().indexOfNearest(t.getDimensionsOnAxis(l.dim), n["x" === l.dim || l.dim === vn ? 0 : 1])
						}
					}),
					u = this._lastHover,
					d = this._api;
				if (u.payloadBatch && !r && d[yn]({
						type: "downplay",
						batch: u.payloadBatch
					}), r || (d[yn]({
						type: "highlight",
						batch: c
					}), u.payloadBatch = c), d[yn]({
						type: "showTip",
						dataIndex: c[0][_i],
						seriesIndex: c[0][ln],
						from: this.uid
					}), l && a.get("showContent")) {
					var p, m = a.get(Qi),
						g = a.get(Nn),
						y = f.map(e, function(t, e) {
							return t[tn](c[e][_i])
						});
					o.show(a);
					var x = c[0][_i];
					if (!r) {
						if (this._ticket = "", m) {
							if (typeof m === Gr) p = v.formatTpl(m, y);
							else if (typeof m === Er) {
								var _ = this,
									w = "axis_" + t.name + "_" + x,
									b = function(t, e) {
										t === _._ticket && (o.setContent(e), s(g, i[0], i[1], o, y, null, d))
									};
								_._ticket = w, p = m(y, w, b)
							}
						} else {
							var M = e[0][sn]()[nn](x);
							p = (M ? M + $i : "") + f.map(e, function(t, e) {
								return t[h](c[e][_i], !0)
							}).join($i)
						}
						o.setContent(p)
					}
					s(g, i[0], i[1], o, y, null, d)
				}
			},
			_showItemTooltipContent: function(t, e, i) {
				var n = this._api,
					r = t[sn](),
					a = r[en](e),
					o = this._tooltipModel,
					l = this._tooltipContent,
					c = a[rr]("tooltip");
				if (c[$n] ? c[$n][$n] = o : c[$n] = this._tooltipModel, c.get("showContent")) {
					var u, d = c.get(Qi),
						f = c.get(Nn),
						p = t[tn](e);
					if (d) {
						if (typeof d === Gr) u = v.formatTpl(d, p);
						else if (typeof d === Er) {
							var m = this,
								g = "item_" + t.name + "_" + e,
								y = function(t, e) {
									t === m._ticket && (l.setContent(e), s(f, i[ke], i[Te], l, p, i[Bi], n))
								};
							m._ticket = g, u = d(p, g, y)
						}
					} else u = t[h](e);
					l.show(c), l.setContent(u), s(f, i[ke], i[Te], l, p, i[Bi], n)
				}
			},
			_showAxisPointer: function(t) {
				if (t) {
					var e = this._axisPointers[t];
					e && f.each(e, function(t) {
						t.show()
					})
				} else this.group[Bn](function(t) {
					t.show()
				}), this.group.show()
			},
			_resetLastHover: function() {
				var t = this._lastHover;
				t.payloadBatch && this._api[yn]({
					type: "downplay",
					batch: t.payloadBatch
				}), this._lastHover = {}
			},
			_hideAxisPointer: function(t) {
				if (t) {
					var e = this._axisPointers[t];
					e && f.each(e, function(t) {
						t.hide()
					})
				} else this.group.hide()
			},
			_hide: function() {
				this._hideAxisPointer(), this._resetLastHover(), this._alwaysShowContent || this._tooltipContent.hideLater(this._tooltipModel.get("hideDelay")), this._api[yn]({
					type: "hideTip",
					from: this.uid
				})
			},
			dispose: function(t, e) {
				var i = e.getZr();
				this._tooltipContent.hide(), i.off("click", this._tryShow), i.off(De, this._tryShow), i.off(Be, this._hide), e.off("showTip", this._manuallyShowTip), e.off("hideTip", this._manuallyHideTip)
			}
		})
	}), e("echarts/component/tooltip", [Kr, "./tooltip/TooltipModel", "./tooltip/TooltipView", X, X], function(t) {
		t("./tooltip/TooltipModel"), t("./tooltip/TooltipView"), t(X)[Xt]({
			type: "showTip",
			event: "showTip",
			update: "none"
		}, function() {}), t(X)[Xt]({
			type: "hideTip",
			event: "hideTip",
			update: "none"
		}, function() {})
	}), e("echarts/coord/polar/RadiusAxis", [Kr, Yr, "../Axis"], function(t) {
		function e(t, e) {
			n.call(this, vn, t, e), this.type = Mt
		}
		var i = t(Yr),
			n = t("../Axis");
		return e[$r] = {
			constructor: e,
			dataToRadius: n[$r][R],
			radiusToData: n[$r][V]
		}, i[zr](e, n), e
	}), e("echarts/coord/polar/AngleAxis", [Kr, Yr, "../Axis"], function(t) {
		function e(t, e) {
			e = e || [0, 360], n.call(this, "angle", t, e), this.type = Mt
		}
		var i = t(Yr),
			n = t("../Axis");
		return e[$r] = {
			constructor: e,
			dataToAngle: n[$r][R],
			angleToData: n[$r][V]
		}, i[zr](e, n), e
	}), e("echarts/coord/polar/Polar", [Kr, "./RadiusAxis", "./AngleAxis"], function(t) {
		var e = t("./RadiusAxis"),
			i = t("./AngleAxis"),
			n = function(t) {
				this.name = t || "", this.cx = 0, this.cy = 0, this[Zt] = [vn, "angle"], this._radiusAxis = new e, this._angleAxis = new i
			};
		return n[$r] = {
			constructor: n,
			type: "polar",
			containPoint: function(t) {
				var e = this.pointToCoord(t);
				return this._radiusAxis[fi](e[0]) && this._angleAxis[fi](e[1])
			},
			containData: function(t) {
				return this._radiusAxis.containData(t[0]) && this._angleAxis.containData(t[1])
			},
			getAxis: function(t) {
				return this["_" + t + "Axis"]
			},
			getAxesByScale: function(t) {
				var e = [],
					i = this._angleAxis,
					n = this._radiusAxis;
				return i.scale.type === t && e.push(i), n.scale.type === t && e.push(n), e
			},
			getAngleAxis: function() {
				return this._angleAxis
			},
			getRadiusAxis: function() {
				return this._radiusAxis
			},
			getOtherAxis: function(t) {
				var e = this._angleAxis;
				return t === e ? this._radiusAxis : e
			},
			getBaseAxis: function() {
				return this.getAxesByScale(on)[0] || this.getAxesByScale("time")[0] || this.getAngleAxis()
			},
			dataToPoints: function(t) {
				return t[Rt](this[Zt], function(t, e) {
					return this[rt]([t, e])
				}, this)
			},
			dataToPoint: function(t, e) {
				return this.coordToPoint([this._radiusAxis.dataToRadius(t[0], e), this._angleAxis.dataToAngle(t[1], e)])
			},
			pointToData: function(t, e) {
				var i = this.pointToCoord(t);
				return [this._radiusAxis.radiusToData(i[0], e), this._angleAxis.angleToData(i[1], e)]
			},
			pointToCoord: function(t) {
				var e = t[0] - this.cx,
					i = t[1] - this.cy,
					n = this.getAngleAxis(),
					r = n[at](),
					a = Math.min(r[0], r[1]),
					o = Math.max(r[0], r[1]);
				n[J] ? a = o - 360 : o = a + 360;
				var s = Math.sqrt(e * e + i * i);
				e /= s, i /= s;
				for (var l = Math.atan2(-i, e) / Math.PI * 180, c = a > l ? 1 : -1; a > l || l > o;) l += 360 * c;
				return [s, l]
			},
			coordToPoint: function(t) {
				var e = t[0],
					i = t[1] / 180 * Math.PI,
					n = Math.cos(i) * e + this.cx,
					r = -Math.sin(i) * e + this.cy;
				return [n, r]
			}
		}, n
	}), e("echarts/coord/polar/AxisModel", [Kr, Yr, P, "../axisModelCreator", "../axisModelCommonMixin"], function(t) {
		function e(t, e) {
			return e.type || (e.data ? Mt : "value")
		}
		var i = t(Yr),
			n = t(P),
			r = t("../axisModelCreator"),
			a = n[Vr]({
				type: "polarAxis",
				axis: null
			});
		i.merge(a[$r], t("../axisModelCommonMixin"));
		var o = {
			angle: {
				polarIndex: 0,
				startAngle: 90,
				clockwise: !0,
				splitNumber: 12,
				axisLabel: {
					rotate: !1
				}
			},
			radius: {
				polarIndex: 0,
				splitNumber: 5
			}
		};
		r("angle", a, e, o.angle), r(vn, a, e, o[vn])
	}), e("echarts/coord/polar/PolarModel", [Kr, "./AxisModel", A], function(t) {
		t("./AxisModel"), t(A)[Wt]({
			type: "polar",
			dependencies: ["polarAxis", "angleAxis"],
			coordinateSystem: null,
			findAxisModel: function(t) {
				var e, i = this[ar];
				return i[te](t, function(t) {
					i[mn]("polar", t[Dr]("polarIndex")) === this && (e = t)
				}, this), e
			},
			defaultOption: {
				zlevel: 0,
				z: 0,
				center: ["50%", "50%"],
				radius: "80%"
			}
		})
	}), e("echarts/coord/polar/polarCreator", [Kr, "./Polar", mt, Yr, D, "./PolarModel", "../../CoordinateSystem"], function(t) {
		function e(t, e) {
			var i = t.get(cr),
				n = t.get(vn),
				r = e[_n](),
				o = e[xn](),
				s = a[Wn];
			this.cx = s(i[0], r), this.cy = s(i[1], o);
			var l = this.getRadiusAxis(),
				c = Math.min(r, o) / 2;
			l[W](0, s(n, c))
		}

		function i(t, e) {
			if (t.type = e.get("type"), t.scale = s[E](e), t[et] = e.get(G) && t.type === Mt, "angleAxis" === e.mainType) {
				var i = e.get(ti);
				t[J] = e.get(J) ^ e.get(Je), t[W](i, i + (t[J] ? -360 : 360))
			}
			e.axis = t, t.model = e
		}

		function n(t, e, i) {
			e[le](function(e) {
				if ("polar" === e.get(St)) {
					var i = e.get("polarIndex") || 0,
						n = t[i];
					if (!n) return;
					e[St] = n;
					var r = n.getRadiusAxis(),
						a = n.getAngleAxis(),
						o = e[sn]();
					r.scale[q](o[Nt](vn, r.type !== Mt)), a.scale[q](o[Nt]("angle", a.type !== Mt))
				}
			}), o.each(t, function(t) {
				var e = t.getAngleAxis(),
					i = t.getRadiusAxis();
				l(e, e.model), l(i, i.model)
			})
		}
		var r = t("./Polar"),
			a = t(mt),
			o = t(Yr),
			s = t(D),
			l = s[Z];
		t("./PolarModel");
		var c = {
			create: function(t, a) {
				var s = [];
				return t[te]("polar", function(t, n) {
					var o = new r(n);
					o[_e] = e;
					var l = o.getRadiusAxis(),
						c = o.getAngleAxis(),
						u = t.findAxisModel("radiusAxis"),
						h = t.findAxisModel("angleAxis");
					i(l, u), i(c, h), o[_e](t, a), s.push(o), t[St] = o
				}), n(s, t, a), o.each(s, function(t) {
					var e = t.getAngleAxis();
					if (e.type === Mt && !e[et]) {
						var i = e[at](),
							n = 360 / e.scale.count();
						e[J] ? i[1] += n : i[1] -= n, e[W](i[0], i[1])
					}
				}), s
			}
		};
		t("../../CoordinateSystem")[gn]("polar", c)
	}), e("echarts/component/axis/AngleAxisView", [Kr, Yr, gt, C, A], function(t) {
		function e(t, e, i, n) {
			var r = t.coordToPoint([e, n]),
				a = t.coordToPoint([i, n]);
			return {
				x1: r[0],
				y1: r[1],
				x2: a[0],
				y2: a[1]
			}
		}
		var i = t(Yr),
			n = t(gt),
			r = t(C),
			a = [x, z, _, "splitLine", "splitArea"];
		t(A)[Ft]({
			type: "angleAxis",
			render: function(t, e) {
				if (this.group[Mi](), t.get("show")) {
					var n = e[mn]("polar", t.get("polarIndex")),
						r = t.axis,
						o = n[St],
						s = o.getRadiusAxis()[at](),
						l = r.getTicksCoords();
					r.type !== Mt && l.pop(), i.each(a, function(e) {
						t.get(e + ".show") && this["_" + e](t, o, l, s)
					}, this)
				}
			},
			_axisLine: function(t, e, i, r) {
				var a = t[rr]("axisLine.lineStyle"),
					o = new n[Ye]({
						shape: {
							cx: e.cx,
							cy: e.cy,
							r: r[1]
						},
						style: a[Y](),
						z2: 1,
						silent: !0
					});
				o.style.fill = null, this.group.add(o)
			},
			_axisTick: function(t, r, a, o) {
				var s = t[rr](_),
					l = (s.get(lr) ? -1 : 1) * s.get(qr),
					c = i.map(a, function(t) {
						return new n.Line({
							shape: e(r, o[1], o[1] + l, t)
						})
					});
				this.group.add(n.mergePath(c, {
					style: s[rr](se)[Y]()
				}))
			},
			_axisLabel: function(t, e, i, a) {
				for (var o = t.axis, s = t.get("data"), l = t[rr](z), c = l[rr](nr), u = t[O](), h = l.get(Pn), d = o.getLabelsCoords(), f = 0; f < i[qr]; f++) {
					var p = a[1],
						v = e.coordToPoint([p + h, d[f]]),
						m = e.cx,
						g = e.cy,
						y = Math.abs(v[0] - m) / p < .3 ? cr : v[0] > m ? "left" : "right",
						x = Math.abs(v[1] - g) / p < .3 ? ur : v[1] > g ? "top" : hr,
						_ = c;
					s && s[f] && s[f][nr] && (_ = new r(s[f][nr], c)), this.group.add(new n.Text({
						style: {
							x: v[0],
							y: v[1],
							fill: _[Ee](),
							text: u[f],
							textAlign: y,
							textBaseline: x,
							textFont: _[er]()
						},
						silent: !0
					}))
				}
			},
			_splitLine: function(t, r, a, o) {
				var s = t[rr]("splitLine"),
					l = s[rr](se),
					c = l.get("color"),
					u = 0;
				c = c instanceof Array ? c : [c];
				for (var h = [], d = 0; d < a[qr]; d++) {
					var f = u++ % c[qr];
					h[f] = h[f] || [], h[f].push(new n.Line({
						shape: e(r, o[0], o[1], a[d])
					}))
				}
				for (var d = 0; d < h[qr]; d++) this.group.add(n.mergePath(h[d], {
					style: i[sr]({
						stroke: c[d % c[qr]]
					}, l[Y]()),
					silent: !0,
					z: t.get("z")
				}))
			},
			_splitArea: function(t, e, r, a) {
				var o = t[rr]("splitArea"),
					s = o[rr]("areaStyle"),
					l = s.get("color"),
					c = 0;
				l = l instanceof Array ? l : [l];
				for (var u = [], h = Math.PI / 180, d = -r[0] * h, f = Math.min(a[0], a[1]), p = Math.max(a[0], a[1]), v = t.get(Je), m = 1; m < r[qr]; m++) {
					var g = c++ % l[qr];
					u[g] = u[g] || [], u[g].push(new n[Xe]({
						shape: {
							cx: e.cx,
							cy: e.cy,
							r0: f,
							r: p,
							startAngle: d,
							endAngle: -r[m] * h,
							clockwise: v
						},
						silent: !0
					})), d = -r[m] * h
				}
				for (var m = 0; m < u[qr]; m++) this.group.add(n.mergePath(u[m], {
					style: i[sr]({
						fill: l[m % l[qr]]
					}, s.getAreaStyle()),
					silent: !0
				}))
			}
		})
	}), e("echarts/component/angleAxis", [Kr, "../coord/polar/polarCreator", "./axis/AngleAxisView"], function(t) {
		t("../coord/polar/polarCreator"), t("./axis/AngleAxisView")
	}), e("echarts/component/axis/RadiusAxisView", [Kr, Yr, gt, "./AxisBuilder", A], function(t) {
		function e(t, e, i) {
			return {
				position: [t.cx, t.cy],
				rotation: i / 180 * Math.PI,
				labelDirection: -1,
				tickDirection: -1,
				nameDirection: 1,
				labelRotation: e[rr](z).get(Zi),
				z2: 1
			}
		}
		var i = t(Yr),
			n = t(gt),
			r = t("./AxisBuilder"),
			a = [x, z, _, "axisName"],
			o = ["splitLine", "splitArea"];
		t(A)[Ft]({
			type: "radiusAxis",
			render: function(t, n) {
				if (this.group[Mi](), t.get("show")) {
					var s = n[mn]("polar", t.get("polarIndex")),
						l = s[St].getAngleAxis(),
						c = t.axis,
						u = s[St],
						h = c.getTicksCoords(),
						d = l[at]()[0],
						f = c[at](),
						p = e(u, t, d),
						v = new r(t, p);
					i.each(a, v.add, v), this.group.add(v.getGroup()), i.each(o, function(e) {
						t.get(e + ".show") && this["_" + e](t, u, d, f, h)
					}, this)
				}
			},
			_splitLine: function(t, e, r, a, o) {
				var s = t[rr]("splitLine"),
					l = s[rr](se),
					c = l.get("color"),
					u = 0;
				c = c instanceof Array ? c : [c];
				for (var h = [], d = 0; d < o[qr]; d++) {
					var f = u++ % c[qr];
					h[f] = h[f] || [], h[f].push(new n[Ye]({
						shape: {
							cx: e.cx,
							cy: e.cy,
							r: o[d]
						},
						silent: !0
					}))
				}
				for (var d = 0; d < h[qr]; d++) this.group.add(n.mergePath(h[d], {
					style: i[sr]({
						stroke: c[d % c[qr]],
						fill: null
					}, l[Y]()),
					silent: !0
				}))
			},
			_splitArea: function(t, e, r, a, o) {
				var s = t[rr]("splitArea"),
					l = s[rr]("areaStyle"),
					c = l.get("color"),
					u = 0;
				c = c instanceof Array ? c : [c];
				for (var h = [], d = o[0], f = 1; f < o[qr]; f++) {
					var p = u++ % c[qr];
					h[p] = h[p] || [], h[p].push(new n[Xe]({
						shape: {
							cx: e.cx,
							cy: e.cy,
							r0: d,
							r: o[f],
							startAngle: 0,
							endAngle: 2 * Math.PI
						},
						silent: !0
					})), d = o[f]
				}
				for (var f = 0; f < h[qr]; f++) this.group.add(n.mergePath(h[f], {
					style: i[sr]({
						fill: c[f % c[qr]]
					}, l.getAreaStyle()),
					silent: !0
				}))
			}
		})
	}), e("echarts/component/radiusAxis", [Kr, "../coord/polar/polarCreator", "./axis/RadiusAxisView"], function(t) {
		t("../coord/polar/polarCreator"), t("./axis/RadiusAxisView")
	}), e("echarts/component/polar", [Kr, "../coord/polar/polarCreator", "./angleAxis", "./radiusAxis", X], function(t) {
		t("../coord/polar/polarCreator"), t("./angleAxis"), t("./radiusAxis"), t(X)[Ft]({
			type: "polar"
		})
	}), e("echarts/chart/radar/RadarSeries", [Kr, wt, _t, Yr, mt, "../../component/polar"], function(t) {
		var e = t(wt),
			i = t(_t),
			n = t(Yr),
			r = t(mt),
			a = r[Un];
		return t("../../component/polar"), i[Vr]({
			type: "series.radar",
			dependencies: ["polar"],
			getInitialData: function(t, i) {
				var r = t.indicator,
					o = e(t.data, this, i);
				if (r) {
					var s = n[jr](r, function(t, e, i) {
						return t[e.name] = e, t
					}, {});
					o = o.map([vn], function(t, e) {
						var i = s[o[nn](e)];
						return i && i.max ? a(t, [i.min || 0, i.max], [0, 1]) : void 0
					});
					var l = this[an];
					this[an] = function(t) {
						var e = l.call(this, t),
							i = s[o[nn](t)];
						return i && null != i.max ? a(e, [0, 1], [i.min || 0, i.max]) : void 0
					}
				}
				return o
			},
			defaultOption: {
				zlevel: 0,
				z: 2,
				coordinateSystem: "polar",
				legendHoverLink: !0,
				polarIndex: 0,
				lineStyle: {
					normal: {
						width: 2,
						type: "solid"
					}
				},
				symbol: "emptyCircle",
				symbolSize: 4,
				showAllSymbol: !1
			}
		})
	}), e("echarts/chart/radar/RadarView", [Kr, nt, gt, Yr, A], function(t) {
		var e = t(nt),
			i = t(gt),
			n = t(Yr);
		return t(A)[qt]({
			type: "radar",
			init: function() {
				this[K] = new e
			},
			render: function(t, e, r) {
				function a() {
					return n.map(c, function(t) {
						return [o.cx, o.cy]
					})
				}
				var o = t[St],
					s = this.group,
					l = t[sn](),
					c = l[Rt](l[It], !0);
				if (!(c[qr] < 1)) {
					c.push(c[0].slice());
					var u = this._polygon || (this._polygon = new i[je]({
							shape: {
								points: []
							}
						})),
						h = this._polyline || (this._polyline = new i[Ue]({
							shape: {
								points: []
							},
							z2: 10
						})),
						d = h.shape,
						f = u.shape,
						p = {
							shape: {
								points: c
							}
						};
					d[Ke][qr] !== c[qr] ? (f[Ke] = a(), d[Ke] = a(), i[Ve](h, p, t), i[Ve](u, p, t)) : (i[Re](h, p, t), i[Re](u, p, t)), this[K][vt](l), h[He](n[Vr](t[rr]($)[Y](), {
						stroke: l[Vt]("color")
					}));
					var v = t[rr]("areaStyle.normal");
					u[Pi] = v.isEmpty(), i[Ze](h, t[rr]("lineStyle.emphasis")[Y]()), u[Pi] || (u[He](n[sr](v.getAreaStyle(), {
						fill: l[Vt]("color"),
						opacity: .7
					})), i[Ze](u, t[rr]("areaStyle.emphasis")[Y]())), s.add(h), s.add(u), s.add(this[K].group), this._data = l
				}
			}
		})
	}), e("echarts/chart/radar/backwardCompat", [Kr, Yr, "../../scale/Interval"], function(t) {
		var e = t(Yr),
			i = t("../../scale/Interval"),
			n = e[qn],
			r = e.each,
			a = e[Xr];
		return function(t) {
			var o = t.polar,
				s = t.radiusAxis,
				l = t.angleAxis,
				c = a(t[An], function(t) {
					return "radar" === t.type
				}) || [];
			o && c[qr] && (n(o) || (o = [o]), s ? n(s) || (s = [s]) : s = t.radiusAxis = [], l ? n(l) || (l = [l]) : l = t.angleAxis = [], r(o, function(n, o) {
				if (n.indicator) {
					var u = e.map(n.indicator, function(t) {
							var e = t.min,
								i = t.max;
							return null != i && i >= 0 && (e = 0), {
								name: t.text,
								min: e,
								max: i
							}
						}),
						h = e.find(s, function(t) {
							return (t.polarIndex || 0) === o
						}),
						d = e.find(l, function(t) {
							return (t.polarIndex || 0) === o
						});
					h || (h = {
						type: "value",
						polarIndex: o
					}, s.push(h)), d || (d = {
						type: "category",
						polarIndex: o
					}, l.push(d)), d.data = e.map(n.indicator, function(t) {
						var e = {
								value: t.text
							},
							i = t[z];
						return i && i[nr] && (e[nr] = i[nr]), e
					}), d[ti] = n[ti] || 90, n[x] && (d.splitLine = n[x]), n[z] && (d[z] = n[z]), n.splitLine && (h.splitLine = n.splitLine), n.splitArea && (h.splitArea = n.splitArea), h.splitLine = h.splitLine || {}, h.splitArea = h.splitArea || {}, null == h.splitLine.show && (h.splitLine.show = !0), null == h.splitArea.show && (h.splitArea.show = !0), d[G] = !1, h.min = 0, h.max = 1, h[N] = 1 / (n[B] || 5), h[x] = {
						show: !1
					}, h[z] = {
						show: !1
					}, h[_] = {
						show: !1
					};
					var f = a(c, function(t) {
							return (t.polarIndex || 0) === o
						}),
						p = e.map(u, function() {
							return []
						});
					r(f, function(i) {
						if (i.indicator = u, i.data[0] && e[qn](i.data[0].value)) {
							var n = i.data,
								r = n[0];
							i.data = r.value, i.name = r.name;
							for (var a = 1; a < n[qr]; a++) {
								var r = n[a],
									o = e.clone(i);
								t[An].push(e[Vr](o, {
									name: r.name,
									data: r.value,
									indicator: u
								}))
							}
							for (var a = 0; a < r.value[qr]; a++)
								for (var s = 0; s < n[qr]; s++) p[a].push(n[s].value[a])
						}
					}), r(p, function(t, e) {
						var r = new i,
							a = 1 / 0,
							o = -(1 / 0),
							s = t[qr];
						if (s) {
							for (var l = 0; s > l; l++) a = Math.min(a, t[l]), o = Math.max(o, t[l]);
							r[W](a, o), r.niceExtent(n[B] || 5);
							var c = r[at]();
							null == u[e].min && (u[e].min = c[0]), null == u[e].max && (u[e].max = c[1])
						}
					})
				}
			}))
		}
	}), e("echarts/chart/radar", [Kr, Yr, X, "./radar/RadarSeries", "./radar/RadarView", j, U, "./radar/backwardCompat"], function(t) {
		var e = t(Yr),
			i = t(X);
		t("./radar/RadarSeries"), t("./radar/RadarView"), i[Ut]("chart", e.curry(t(j), "radar", ht, null)), i[jt](e.curry(t(U), "radar")), i[$t](t("./radar/backwardCompat"))
	}), e("echarts/component/legend/LegendModel", [Kr, Yr, C, A], function(t) {
		var e = t(Yr),
			i = t(C);
		return t(A)[Wt]({
			type: "legend",
			dependencies: [An],
			layoutMode: {
				type: "box",
				ignoreSize: !0
			},
			init: function(t, e, i) {
				this[Dn](t, i), t[g] = t[g] || {}, this._updateData(i);
				var n = this._data,
					r = this[Yn][g];
				if (n[0] && this.get("selectedMode") === y) {
					var a = !1;
					for (var o in r) r[o] && (this.select(o), a = !0);
					!a && this.select(n[0].get("name"))
				}
			},
			mergeOption: function(t) {
				this.$superCall(Tn, t), this._updateData(this[ar])
			},
			_updateData: function(t) {
				var n = e.map(this.get("data") || [], function(t) {
					return typeof t === Gr && (t = {
						name: t
					}), new i(t, this, this[ar])
				}, this);
				this._data = n;
				var r = e.map(t.getSeries(), function(t) {
					return t.name
				});
				t[le](function(t) {
					if (t[v]) {
						var e = t[v]();
						r = r[Nr](e[Rt](e[nn]))
					}
				}), this._availableNames = r
			},
			getData: function() {
				return this._data
			},
			select: function(t) {
				var i = this[Yn][g],
					n = this.get("selectedMode");
				if (n === y) {
					var r = this._data;
					e.each(r, function(t) {
						i[t.get("name")] = !1
					})
				}
				i[t] = !0
			},
			unSelect: function(t) {
				this.get("selectedMode") !== y && (this[Yn][g][t] = !1)
			},
			toggleSelected: function(t) {
				var e = this[Yn][g];
				t in e || (e[t] = !0), this[e[t] ? "unSelect" : "select"](t)
			},
			isSelected: function(t) {
				var i = this[Yn][g];
				return !(t in i && !i[t]) && e[Zr](this._availableNames, t) >= 0
			},
			defaultOption: {
				zlevel: 0,
				z: 4,
				show: !0,
				orient: "horizontal",
				left: "center",
				top: "top",
				align: "auto",
				backgroundColor: "rgba(0,0,0,0)",
				borderColor: "#ccc",
				borderWidth: 0,
				padding: 5,
				itemGap: 10,
				itemWidth: 25,
				itemHeight: 14,
				textStyle: {
					color: "#333"
				},
				selectedMode: !0
			}
		})
	}), e("echarts/component/legend/legendAction", [Kr, A, Yr], function(t) {
		function e(t, e, i) {
			var r, a = {},
				o = "toggleSelected" === t;
			return i[te](ae, function(i) {
				o && null != r ? i[r ? "select" : "unSelect"](e.name) : (i[t](e.name), r = i.isSelected(e.name));
				var s = i[sn]();
				n.each(s, function(t) {
					var e = t.get("name");
					if ("\n" !== e && "" !== e) {
						var n = i.isSelected(e);
						e in a ? a[e] = a[e] && n : a[e] = n
					}
				})
			}), {
				name: e.name,
				selected: a
			}
		}
		var i = t(A),
			n = t(Yr);
		i[Xt]("legendToggleSelect", "legendselectchanged", n.curry(e, "toggleSelected")), i[Xt]("legendSelect", "legendselected", n.curry(e, "select")), i[Xt]("legendUnSelect", "legendunselected", n.curry(e, "unSelect"))
	}), e("echarts/component/helper/listComponent", [Kr, I, p, gt], function(t) {
		function e(t, e, n) {
			i[In](t, e[k](), {
				width: n[_n](),
				height: n[xn]()
			}, e.get(f))
		}
		var i = t(I),
			n = t(p),
			r = t(gt);
		return {
			layout: function(t, n, r) {
				i.box(n.get(d), t, n.get(u), r[_n](), r[xn]()), e(t, n, r)
			},
			addBackground: function(t, e) {
				var i = n[Vn](e.get(f)),
					a = t[ir](),
					o = e[ut](["color", Tr]);
				o.fill = e.get(me);
				var s = new r.Rect({
					shape: {
						x: a.x - i[3],
						y: a.y - i[0],
						width: a.width + i[1] + i[3],
						height: a[gr] + i[0] + i[2]
					},
					style: o,
					silent: !0
				});
				r[We](s), t.add(s)
			}
		}
	}), e("echarts/component/legend/LegendView", [Kr, Yr, yt, gt, "../helper/listComponent", A], function(t) {
		function e(t, e) {
			e[yn]({
				type: "legendToggleSelect",
				name: t
			})
		}

		function i(t, e, i) {
			t.get("legendHoverLink") && i[yn]({
				type: "highlight",
				seriesName: t.name,
				name: e
			})
		}

		function n(t, e, i) {
			t.get("legendHoverLink") && i[yn]({
				type: "downplay",
				seriesName: t.name,
				name: e
			})
		}
		var r = t(Yr),
			a = t(yt),
			o = t(gt),
			s = t("../helper/listComponent"),
			l = r.curry,
			u = "#ccc";
		return t(A)[Ft]({
			type: "legend",
			init: function() {
				this._symbolTypeStore = {}
			},
			render: function(t, a, h) {
				var f = this.group;
				if (f[Mi](), t.get("show")) {
					var p = t.get("selectedMode"),
						m = t.get("itemWidth"),
						g = t.get("itemHeight"),
						y = t.get("align");
					"auto" === y && (y = "right" === t.get("left") && t.get(d) === Rn ? "right" : "left");
					var x = {},
						_ = {};
					r.each(t[sn](), function(r) {
						var s = r.get("name");
						("" === s || "\n" === s) && f.add(new o.Group({
							newline: !0
						}));
						var c = a.getSeriesByName(s)[0];
						if (x[s] = r, c && !_[s]) {
							var d = c[sn](),
								v = d[Vt]("color");
							t.isSelected(s) || (v = u), typeof v === Er && (v = v(c[tn](0)));
							var w = d[Vt]("legendSymbol") || "roundRect",
								b = d[Vt](dt),
								M = this._createItem(s, r, t, w, b, m, g, y, v, p);
							M.on("click", l(e, s, h)).on(Ge, l(i, c, "", h)).on(Be, l(n, c, "", h)), _[s] = !0
						}
					}, this), a.eachRawSeries(function(r) {
						if (r[v]) {
							var a = r[v]();
							a.each(function(o) {
								var s = a[nn](o);
								if (x[s] && !_[s]) {
									var c = a[Lt](o, "color");
									t.isSelected(s) || (c = u);
									var d = "roundRect",
										f = this._createItem(s, x[s], t, d, null, m, g, y, c, p);
									f.on("click", l(e, s, h)).on(Ge, l(i, r, s, h)).on(Be, l(n, r, s, h)), _[s] = !0
								}
							}, !1, this)
						}
					}, this), s[c](f, t, h), s.addBackground(f, t)
				}
			},
			_createItem: function(t, e, i, n, r, s, l, c, u, h) {
				var d = new o.Group,
					f = e[rr](nr),
					p = e.get("icon");
				if (n = p || n, d.add(a[pt](n, 0, 0, s, l, u)), !p && r && r !== n && "none" != r) {
					var v = .8 * l;
					d.add(a[pt](r, (s - v) / 2, (l - v) / 2, v, v, u))
				}
				var m = "left" === c ? s + 5 : -5,
					g = c,
					y = i.get(Qi);
				typeof y === Gr && y ? t = y[jn]("{name}", t) : typeof y === Er && (t = y(t));
				var x = new o.Text({
					style: {
						text: t,
						x: m,
						y: l / 2,
						fill: f[Ee](),
						textFont: f[er](),
						textAlign: g,
						textBaseline: "middle"
					}
				});
				return d.add(x), d.add(new o.Rect({
					shape: d[ir](),
					invisible: !0
				})), d[Bn](function(t) {
					t[Me] = !h
				}), this.group.add(d), d
			}
		})
	}), e("echarts/component/legend/legendFilter", [], function() {
		return function(t) {
			var e = t[Mn]({
				mainType: "legend"
			});
			e && e[qr] && t.filterSeries(function(t) {
				for (var i = 0; i < e[qr]; i++)
					if (!e[i].isSelected(t.name)) return !1;
				return !0
			})
		}
	}), e("echarts/component/legend", [Kr, "./legend/LegendModel", "./legend/legendAction", "./legend/LegendView", X, "./legend/legendFilter"], function(t) {
		t("./legend/LegendModel"), t("./legend/legendAction"), t("./legend/LegendView");
		var e = t(X);
		e[Yt](Xr, t("./legend/legendFilter"))
	}), e("echarts/chart/map/MapSeries", [Kr, Tt, A, _t, Yr, Ct, p, "../helper/dataSelectableMixin"], function(t) {
		function e(t, e) {
			for (var i = {}, n = e.features, r = 0; r < t[qr]; r++) i[t[r].name] = t[r];
			for (var r = 0; r < n[qr]; r++) {
				var a = n[r].properties.name;
				i[a] || t.push({
					value: NaN,
					name: a
				})
			}
			return t
		}
		var i = t(Tt),
			n = t(A),
			r = t(_t),
			a = t(Yr),
			o = t(Ct),
			s = t(p),
			c = s[Ji],
			u = s[Ki],
			h = t("../helper/dataSelectableMixin"),
			d = r[Vr]({
				type: "series.map",
				needsDrawMap: !1,
				seriesGroup: [],
				init: function(t) {
					t = this._fillOption(t), this[Yn] = t, this[m]("init", arguments), this.updateSelectedMap()
				},
				getInitialData: function(t) {
					var e = o(["value"], t.data || []),
						n = new i(e, this);
					return n[Gt](t.data), n
				},
				mergeOption: function(t) {
					t = this._fillOption(t), r[$r][Tn].call(this, t), this.updateSelectedMap()
				},
				_fillOption: function(t) {
					t = a[Vr]({}, t);
					var i = n.getMap(t.mapType),
						r = i && i.geoJson;
					return r && t.data && (t.data = e(t.data, r)), t
				},
				setRoamZoom: function(t) {
					var e = this[Yn][l];
					e && (e.zoom = t)
				},
				setRoamPan: function(t, e) {
					var i = this[Yn][l];
					i && (i.x = t, i.y = e)
				},
				formatTooltip: function(t) {
					for (var e = this._data, i = u(this[an](t)), n = e[nn](t), r = this.seriesGroup, a = [], o = 0; o < r[qr]; o++) isNaN(r[o][an](t)) || a.push(c(r[o].name));
					return a.join(", ") + $i + n + " : " + i
				},
				defaultOption: {
					zlevel: 0,
					z: 2,
					coordinateSystem: "geo",
					map: "china",
					left: "center",
					top: "center",
					showLegendSymbol: !0,
					dataRangeHoverLink: !0,
					roamDetail: {
						x: 0,
						y: 0,
						zoom: 1
					},
					label: {
						normal: {
							show: !1,
							textStyle: {
								color: "#000"
							}
						},
						emphasis: {
							show: !1,
							textStyle: {
								color: "#000"
							}
						}
					},
					itemStyle: {
						normal: {
							borderWidth: .5,
							borderColor: "#444",
							areaColor: "#eee"
						},
						emphasis: {
							areaColor: "rgba(255,215, 0, 0.8)"
						}
					}
				}
			});
		return a.mixin(d, h), d
	}), e("echarts/component/helper/interactionMutex", [Kr], function(t) {
		function e(t) {
			return t[i] || (t[i] = {})
		}
		var i = "\x00_ec_interaction_mutex",
			n = {
				take: function(t, i) {
					e(i)[t] = !0
				},
				release: function(t, i) {
					e(i)[t] = !1
				},
				isTaken: function(t, i) {
					return !!e(i)[t]
				}
			};
		return n
	}), e("echarts/component/helper/RoamController", [Kr, Yi, Yr, Pe, "./interactionMutex"], function(t) {
		function e(t) {
			if (!t[Bi] || !t[Bi][zi]) {
				var e = t[ke],
					i = t[Te],
					n = this.rect;
				n && n[fi](e, i) && (this._x = e, this._y = i, this._dragging = !0)
			}
		}

		function i(t) {
			if (this._dragging && (h.stop(t.event), "pinch" !== t.gestureEvent)) {
				if (d.isTaken("globalPan", this._zr)) return;
				var e = t[ke],
					i = t[Te],
					n = e - this._x,
					r = i - this._y;
				this._x = e, this._y = i;
				var a = this[Bi];
				if (a) {
					var o = a[Nn];
					o[0] += n, o[1] += r, a.dirty()
				}
				h.stop(t.event), this[wi]("pan", n, r)
			}
		}

		function n(t) {
			this._dragging = !1
		}

		function r(t) {
			h.stop(t.event);
			var e = t.wheelDelta > 0 ? 1.1 : 1 / 1.1;
			o.call(this, t, e, t[ke], t[Te])
		}

		function a(t) {
			if (!d.isTaken("globalPan", this._zr)) {
				h.stop(t.event);
				var e = t.pinchScale > 1 ? 1.1 : 1 / 1.1;
				o.call(this, t, e, t.pinchX, t.pinchY)
			}
		}

		function o(t, e, i, n) {
			var r = this.rect;
			if (r && r[fi](i, n)) {
				var a = this[Bi];
				if (a) {
					var o = a[Nn],
						s = a.scale,
						l = this._zoom = this._zoom || 1;
					l *= e;
					var c = l / this._zoom;
					this._zoom = l, o[0] -= (i - o[0]) * (c - 1), o[1] -= (n - o[1]) * (c - 1), s[0] *= c, s[1] *= c, a.dirty()
				}
				this[wi]("zoom", e, i, n)
			}
		}

		function l(t, o, l) {
			this[Bi] = o, this.rect = l, this._zr = t;
			var h = u.bind,
				d = h(e, this),
				f = h(i, this),
				p = h(n, this),
				v = h(r, this),
				m = h(a, this);
			c.call(this), this[s] = function(e) {
				this.disable(), null == e && (e = !0), e && "scale" !== e && (t.on(Ie, d), t.on(De, f), t.on(Le, p)), e && "move" !== e && (t.on("mousewheel", v), t.on("pinch", m))
			}, this.disable = function() {
				t.off(Ie, d), t.off(De, f), t.off(Le, p), t.off("mousewheel", v), t.off("pinch", m)
			}, this[fe] = this.disable, this.isDragging = function() {
				return this._dragging
			}, this.isPinching = function() {
				return this._pinching
			}
		}
		var c = t(Yi),
			u = t(Yr),
			h = t(Pe),
			d = t("./interactionMutex");
		return u.mixin(l, c), l
	}), e("echarts/component/helper/MapDraw", [Kr, "./RoamController", gt, Yr], function(t) {
		function e(t, e) {
			var i = t[ut](),
				n = t.get("areaColor");
			return n && (i.fill = n), i
		}

		function i(t, e, i, r, a) {
			i.off("click"), t.get("selectedMode") && i.on("click", function(i) {
				var o = i[Bi][_i];
				if (null != o) {
					var s = e[nn](o);
					r[yn]({
						type: "mapToggleSelect",
						seriesIndex: t[ln],
						name: s,
						from: a.uid
					}), n(t, e, r)
				}
			})
		}

		function n(t, e) {
			e[gi](function(i, n) {
				var r = e[nn](n);
				i[wi](t.isSelected(r) ? hn : un)
			})
		}

		function r(t, e) {
			var i = new l.Group;
			this[o] = new a(t.getZr(), e ? i : null, null), this.group = i, this._updateGroup = e
		}
		var a = t("./RoamController"),
			l = t(gt),
			c = t(Yr);
		return r[$r] = {
			constructor: r,
			draw: function(t, r, a, o) {
				var s = t[sn] && t[sn](),
					u = t[St],
					h = this.group;
				h[Mi]();
				var d = u.scale;
				h[Nn] = u[Nn].slice(), h.scale = d.slice();
				var f, p, v, m, g, y, x = [oe, un],
					_ = [oe, hn],
					w = ["label", un],
					b = ["label", hn];
				s || (f = t[rr](x), p = t[rr](_), v = e(f, d), m = e(p, d), g = t[rr](w), y = t[rr](b)), c.each(u.regions, function(i) {
					var n, r = new l.Group;
					if (s) {
						n = s[yi](i.name);
						var a = s[en](n),
							o = s[Lt](n, "color", !0);
						f = a[rr](x), p = a[rr](_), v = e(f, d), m = e(p, d), g = a[rr](w), y = a[rr](b), o && (v.fill = o)
					}
					var u = g[rr](nr),
						M = y[rr](nr);
					c.each(i.contours, function(t) {
						var e = new l[je]({
							shape: {
								points: t
							},
							style: {
								strokeNoScale: !0
							},
							culling: !0
						});
						e[He](v), r.add(e)
					});
					var S = g.get("show"),
						A = y.get("show"),
						C = s && isNaN(s.get("value", n)),
						T = s && s[It](n);
					if (!s || C && (S || A) || T && T.showLabel) {
						var k = s ? n : i.name,
							L = t[ct](k, un),
							D = t[ct](k, hn),
							I = new l.Text({
								style: {
									text: S ? L || i.name : "",
									fill: u[Ee](),
									textFont: u[er](),
									textAlign: "center",
									textBaseline: "middle"
								},
								hoverStyle: {
									text: A ? D || i.name : "",
									fill: M[Ee](),
									textFont: M[er]()
								},
								position: i[cr].slice(),
								scale: [1 / d[0], 1 / d[1]],
								z2: 10,
								silent: !0
							});
						r.add(I)
					}
					s && s[kt](n, r), l[Ze](r, m), h.add(r)
				}), this._updateController(t, r, a), s && i(t, s, h, a, o), s && n(t, s)
			},
			remove: function() {
				this.group[Mi](), this[o][fe]()
			},
			_updateController: function(t, e, i) {
				var n = t[St],
					r = this[o];
				r[s](t.get("roam") || !1);
				var a = t.type.split(".")[0];
				r.off("pan").on("pan", function(e, n) {
					i[yn]({
						type: "geoRoam",
						component: a,
						name: t.name,
						dx: e,
						dy: n
					})
				}), r.off("zoom").on("zoom", function(e, n, r) {
					if (i[yn]({
							type: "geoRoam",
							component: a,
							name: t.name,
							zoom: e,
							originX: n,
							originY: r
						}), this._updateGroup) {
						var o = this.group,
							s = o.scale;
						o[Ci](function(t) {
							"text" === t.type && t.attr("scale", [1 / s[0], 1 / s[1]])
						})
					}
				}, this), r.rect = n.getViewRect()
			}
		}, r
	}), e("echarts/chart/map/MapView", [Kr, gt, "../../component/helper/MapDraw", A], function(t) {
		var e = t(gt),
			i = t("../../component/helper/MapDraw");
		t(A)[qt]({
			type: "map",
			render: function(t, e, n, r) {
				if (!r || "mapToggleSelect" !== r.type || r.from !== this.uid) {
					var a = this.group;
					if (a[Mi](), r && "geoRoam" === r.type && r.component === An && r.name === t.name) {
						var o = this._mapDraw;
						o && a.add(o.group)
					} else if (t.needsDrawMap) {
						var o = this._mapDraw || new i(n, !0);
						a.add(o.group), o.draw(t, e, n, this), this._mapDraw = o
					} else this._mapDraw && this._mapDraw[Li](), this._mapDraw = null;
					t.get("showLegendSymbol") && e[mn](ae) && this._renderSymbols(t, e, n)
				}
			},
			remove: function() {
				this._mapDraw && this._mapDraw[Li](), this._mapDraw = null, this.group[Mi]()
			},
			_renderSymbols: function(t, i, n) {
				var r = t[sn](),
					a = this.group;
				r.each("value", function(t, i) {
					if (!isNaN(t)) {
						var n = r[It](i);
						if (n && n.point) {
							var o = n.point,
								s = n[$e],
								l = new e[Ye]({
									style: {
										fill: r[Vt]("color")
									},
									shape: {
										cx: o[0] + 9 * s,
										cy: o[1],
										r: 3
									},
									silent: !0,
									z2: 10
								});
							if (!s) {
								var c = r[nn](i),
									u = r[en](i),
									h = u[rr](S),
									d = u[rr](w),
									f = h[rr](nr),
									p = d[rr](nr),
									v = r[xi](i);
								l[He]({
									textPosition: "bottom"
								});
								var m = function() {
										l[He]({
											text: d.get("show") ? c : "",
											textFill: p[Ee](),
											textFont: p[er]()
										})
									},
									g = function() {
										l[He]({
											text: h.get("show") ? c : "",
											textFill: f[Ee](),
											textFont: f[er]()
										})
									};
								v.on(Ge, m).on(Be, g).on(hn, m).on(un, g), g()
							}
							a.add(l)
						}
					}
				})
			}
		})
	}), e("echarts/action/roamHelper", [Kr], function(t) {
		var e = {};
		return e.calcPanAndZoom = function(t, e) {
			var i = e.dx,
				n = e.dy,
				r = e.zoom,
				a = t.get("x") || 0,
				o = t.get("y") || 0,
				s = t.get("zoom") || 1;
			if (null != i && null != n && (a += i, o += n), null != r) {
				var l = (e.originX - a) * (r - 1),
					c = (e.originY - o) * (r - 1);
				a -= l, o -= c
			}
			return {
				x: a,
				y: o,
				zoom: (r || 1) * s
			}
		}, e
	}), e("echarts/action/geoRoam", [Kr, Yr, "./roamHelper", X], function(t) {
		var e = t(Yr),
			i = t("./roamHelper"),
			n = t(X),
			r = {
				type: "geoRoam",
				event: "geoRoam",
				update: "updateLayout"
			};
		n[Xt](r, function(t, n) {
			var r = t.component || An;
			n[te](r, function(n) {
				if (n.name === t.name) {
					var a = n[St];
					if ("geo" !== a.type) return;
					var o = n[rr](l),
						s = i.calcPanAndZoom(o, t);
					n.setRoamPan && n.setRoamPan(s.x, s.y), n.setRoamZoom && n.setRoamZoom(s.zoom), a && a.setPan(s.x, s.y), a && a.setZoom(s.zoom), r === An && e.each(n.seriesGroup, function(t) {
						t.setRoamPan(s.x, s.y), t.setRoamZoom(s.zoom)
					})
				}
			})
		})
	}), e("echarts/coord/geo/GeoModel", [Kr, At, P], function(t) {
		var e = t(At),
			i = t(P);
		i[Vr]({
			type: "geo",
			coordinateSystem: null,
			init: function(t) {
				i[$r].init.apply(this, arguments), e[dn](t.label, [Nn, "show", nr, wr, Qi])
			},
			defaultOption: {
				zlevel: 0,
				z: 0,
				show: !0,
				left: "center",
				top: "center",
				map: "",
				roamDetail: {
					x: 0,
					y: 0,
					zoom: 1
				},
				label: {
					normal: {
						show: !1,
						textStyle: {
							color: "#000"
						}
					},
					emphasis: {
						show: !0,
						textStyle: {
							color: "rgb(100,0,0)"
						}
					}
				},
				itemStyle: {
					normal: {
						borderWidth: .5,
						borderColor: "#444",
						color: "#eee"
					},
					emphasis: {
						color: "rgba(255,215,0,0.8)"
					}
				}
			},
			getFormattedLabel: function(t, e) {
				var i = this.get("label." + e + ".formatter"),
					n = {
						name: t
					};
				return typeof i === Er ? (n.status = e, i(n)) : typeof i === Gr ? i[jn]("{a}", n.seriesName) : void 0
			},
			setRoamZoom: function(t) {
				var e = this[Yn][l];
				e && (e.zoom = t)
			},
			setRoamPan: function(t, e) {
				var i = this[Yn][l];
				i && (i.x = t, i.y = e)
			}
		})
	}), e("zrender/contain/polygon", [Kr, "./windingLine"], function(t) {
		function e(t, e) {
			return Math.abs(t - e) < r
		}

		function i(t, i, r) {
			var a = 0,
				o = t[0];
			if (!o) return !1;
			for (var s = 1; s < t[qr]; s++) {
				var l = t[s];
				a += n(o[0], o[1], l[0], l[1], i, r), o = l
			}
			var c = t[0];
			return e(o[0], c[0]) && e(o[1], c[1]) || (a += n(o[0], o[1], c[0], c[1], i, r)), 0 !== a
		}
		var n = t("./windingLine"),
			r = 1e-8;
		return {
			contain: i
		}
	}), e("echarts/coord/geo/Region", [Kr, "zrender/contain/polygon", xr, "zrender/core/bbox", Mr], function(t) {
		function e(t, e, i) {
			if (this.name = t, this.contours = e, i) i = [i[0], i[1]];
			else {
				var n = this[ir]();
				i = [n.x + n.width / 2, n.y + n[gr] / 2]
			}
			this[cr] = i
		}
		var i = t("zrender/contain/polygon"),
			n = t(xr),
			r = t("zrender/core/bbox"),
			a = t(Mr);
		return e[$r] = {
			constructor: e,
			getBoundingRect: function() {
				var t = this._rect;
				if (t) return t;
				for (var e = Number[oi], i = [e, e], o = [-e, -e], s = [], l = [], c = this.contours, u = 0; u < c[qr]; u++) r.fromPoints(c[u], s, l), a.min(i, i, s), a.max(o, o, l);
				return 0 === u && (i[0] = i[1] = o[0] = o[1] = 0), this._rect = new n(i[0], i[1], o[0] - i[0], o[1] - i[1])
			},
			contain: function(t) {
				var e = this[ir](),
					n = this.contours;
				if (e[fi](t[0], t[1]))
					for (var r = 0, a = n[qr]; a > r; r++)
						if (i[fi](n[r], t[0], t[1])) return !0;
				return !1
			},
			transformTo: function(t, e, i, r) {
				var o = this[ir](),
					s = o.width / o[gr];
				i ? r || (r = i / s) : i = s * r;
				for (var l = new n(t, e, i, r), c = o.calculateTransform(l), u = this.contours, h = 0; h < u[qr]; h++)
					for (var d = 0; d < u[h][qr]; d++) a[yr](u[h][d], u[h][d], c);
				o = this._rect, o.copy(l), this[cr] = [o.x + o.width / 2, o.y + o[gr] / 2]
			}
		}, e
	}), e("echarts/coord/geo/parseGeoJson", [Kr, Yr, "./Region"], function(t) {
		function e(t) {
			if (!t.UTF8Encoding) return t;
			for (var e = t.features, n = 0; n < e[qr]; n++)
				for (var r = e[n], a = r.geometry, o = a.coordinates, s = a.encodeOffsets, l = 0; l < o[qr]; l++) {
					var c = o[l];
					if (a.type === je) o[l] = i(c, s[l]);
					else if ("MultiPolygon" === a.type)
						for (var u = 0; u < c[qr]; u++) {
							var h = c[u];
							c[u] = i(h, s[l][u])
						}
				}
			return t.UTF8Encoding = !1, t
		}

		function i(t, e) {
			for (var i = [], n = e[0], r = e[1], a = 0; a < t[qr]; a += 2) {
				var o = t.charCodeAt(a) - 64,
					s = t.charCodeAt(a + 1) - 64;
				o = o >> 1 ^ -(1 & o), s = s >> 1 ^ -(1 & s), o += n, s += r, n = o, r = s, i.push([o / 1024, s / 1024])
			}
			return i
		}

		function n(t) {
			for (var e = [], i = 0; i < t[qr]; i++)
				for (var n = 0; n < t[i][qr]; n++) e.push(t[i][n]);
			return e
		}
		var r = t(Yr),
			a = t("./Region");
		return function(t) {
			return e(t), r.map(r[Xr](t.features, function(t) {
				return t.geometry && t.properties
			}), function(t) {
				var e = t.properties,
					i = t.geometry,
					r = i.coordinates;
				return "MultiPolygon" === i.type && (r = n(r)), new a(e.name, r, e.cp)
			})
		}
	}), e("echarts/coord/View", [Kr, Mr, _r, "zrender/mixin/Transformable", Yr, xr], function(t) {
		function e() {
			a.call(this)
		}

		function i(t) {
			this.name = t, this[Zt] = ["x", "y"], a.call(this), this._roamTransform = new e, this._viewTransform = new e
		}
		var n = t(Mr),
			r = t(_r),
			a = t("zrender/mixin/Transformable"),
			o = t(Yr),
			s = t(xr),
			l = n[yr];
		return o.mixin(e, a), i[$r] = {
			constructor: i,
			type: "view",
			setBoundingRect: function(t, e, i, n) {
				return this._rect = new s(t, e, i, n), this._rect
			},
			getBoundingRect: function() {
				return this._rect
			},
			setViewRect: function(t, e, i, n) {
				this.transformTo(t, e, i, n), this._viewRect = new s(t, e, i, n)
			},
			transformTo: function(t, e, i, n) {
				var r = this[ir](),
					a = this._viewTransform;
				a[Ui] = r.calculateTransform(new s(t, e, i, n)), a.decomposeTransform(), this._updateTransform()
			},
			setPan: function(t, e) {
				this._roamTransform[Nn] = [t, e], this._updateTransform()
			},
			setZoom: function(t) {
				this._roamTransform.scale = [t, t], this._updateTransform()
			},
			getRoamTransform: function() {
				return this._roamTransform[Ui]
			},
			_updateTransform: function() {
				var t = this._roamTransform,
					e = this._viewTransform;
				e[Wi] = t, t[qi](), e[qi](), e[Ui] && r.copy(this[Ui] || (this[Ui] = []), e[Ui]), this.decomposeTransform()
			},
			getViewRect: function() {
				return this._viewRect
			},
			dataToPoint: function(t) {
				var e = this[Ui];
				return e ? l([], t, e) : [t[0], t[1]]
			},
			pointToData: function(t) {
				var e = this[Fi];
				return e ? l([], t, e) : [t[0], t[1]]
			}
		}, o.mixin(i, a), i
	}), e("echarts/coord/geo/fix/nanhai", [Kr, "../Region"], function(t) {
		for (var e = t("../Region"), i = [126, 25], n = [
				[
					[0, 3.5],
					[7, 11.2],
					[15, 11.9],
					[30, 7],
					[42, .7],
					[52, .7],
					[56, 7.7],
					[59, .7],
					[64, .7],
					[64, 0],
					[5, 0],
					[0, 3.5]
				],
				[
					[13, 16.1],
					[19, 14.7],
					[16, 21.7],
					[11, 23.1],
					[13, 16.1]
				],
				[
					[12, 32.2],
					[14, 38.5],
					[15, 38.5],
					[13, 32.2],
					[12, 32.2]
				],
				[
					[16, 47.6],
					[12, 53.2],
					[13, 53.2],
					[18, 47.6],
					[16, 47.6]
				],
				[
					[6, 64.4],
					[8, 70],
					[9, 70],
					[8, 64.4],
					[6, 64.4]
				],
				[
					[23, 82.6],
					[29, 79.8],
					[30, 79.8],
					[25, 82.6],
					[23, 82.6]
				],
				[
					[37, 70.7],
					[43, 62.3],
					[44, 62.3],
					[39, 70.7],
					[37, 70.7]
				],
				[
					[48, 51.1],
					[51, 45.5],
					[53, 45.5],
					[50, 51.1],
					[48, 51.1]
				],
				[
					[51, 35],
					[51, 28.7],
					[53, 28.7],
					[53, 35],
					[51, 35]
				],
				[
					[52, 22.4],
					[55, 17.5],
					[56, 17.5],
					[53, 22.4],
					[52, 22.4]
				],
				[
					[58, 12.6],
					[62, 7],
					[63, 7],
					[60, 12.6],
					[58, 12.6]
				],
				[
					[0, 3.5],
					[0, 93.1],
					[64, 93.1],
					[64, 0],
					[63, 0],
					[63, 92.4],
					[1, 92.4],
					[1, 3.5],
					[0, 3.5]
				]
			], r = 0; r < n[qr]; r++)
			for (var a = 0; a < n[r][qr]; a++) n[r][a][0] /= 10.5, n[r][a][1] /= -14, n[r][a][0] += i[0], n[r][a][1] += i[1];
		return function(t) {
			"china" === t.map && t.regions.push(new e("鍗楁捣璇稿矝", n, i))
		}
	}), e("echarts/coord/geo/fix/textCoord", [Kr, Yr], function(t) {
		var e = t(Yr),
			i = {
				"鍗楁捣璇稿矝": [32, 80],
				"骞夸笢": [0, -10],
				"棣欐腐": [10, 5],
				"婢抽棬": [-10, 10],
				"澶╂触": [5, 5]
			};
		return function(t) {
			e.each(t.regions, function(t) {
				var e = i[t.name];
				if (e) {
					var n = t[cr];
					n[0] += e[0] / 10.5, n[1] += -e[1] / 14
				}
			})
		}
	}), e("echarts/coord/geo/fix/geoCoord", [Kr, Yr], function(t) {
		var e = t(Yr),
			i = {
				Russia: [100, 60],
				"United States of America": [-99, 38]
			};
		return function(t) {
			e.each(t.regions, function(t) {
				var e = i[t.name];
				if (e) {
					var n = t[cr];
					n[0] = e[0], n[1] = e[1]
				}
			})
		}
	}), e("echarts/coord/geo/Geo", [Kr, "./parseGeoJson", Yr, xr, "../View", "./fix/nanhai", "./fix/textCoord", "./fix/geoCoord"], function(t) {
		function e(t, e, i, n, r) {
			a.call(this, t), this.map = e, this[Zt] = ["lng", "lat"], this._nameCoordMap = {}, this.loadGeoJson(i, n, r)
		}
		var i = t("./parseGeoJson"),
			n = t(Yr),
			r = t(xr),
			a = t("../View"),
			o = [t("./fix/nanhai"), t("./fix/textCoord"), t("./fix/geoCoord")];
		return e[$r] = {
			constructor: e,
			type: "geo",
			loadGeoJson: function(t, e, r) {
				try {
					this.regions = t ? i(t) : []
				} catch (a) {
					throw "Invalid geoJson format\n" + a
				}
				e = e || {}, r = r || {};
				for (var s = this.regions, l = {}, c = 0; c < s[qr]; c++) {
					var u = s[c].name;
					u = r[u] || u, s[c].name = u, l[u] = s[c], this.addGeoCoord(u, s[c][cr]);
					var h = e[u];
					h && s[c].transformTo(h.left, h.top, h.width, h[gr])
				}
				this._regionsMap = l, this._rect = null, n.each(o, function(t) {
					t(this)
				}, this)
			},
			transformTo: function(t, e, i, n) {
				var a = this[ir]();
				a = a.clone(), a.y = -a.y - a[gr];
				var o = this._viewTransform;
				o[Ui] = a.calculateTransform(new r(t, e, i, n)), o.decomposeTransform();
				var s = o.scale;
				s[1] = -s[1], o[qi](), this._updateTransform()
			},
			getRegion: function(t) {
				return this._regionsMap[t]
			},
			addGeoCoord: function(t, e) {
				this._nameCoordMap[t] = e
			},
			getGeoCoord: function(t) {
				return this._nameCoordMap[t]
			},
			getBoundingRect: function() {
				if (this._rect) return this._rect;
				for (var t, e = this.regions, i = 0; i < e[qr]; i++) {
					var n = e[i][ir]();
					t = t || n.clone(), t.union(n)
				}
				return this._rect = t || new r(0, 0, 0, 0)
			},
			dataToPoints: function(t) {
				var e = [];
				return t[Rt](["lng", "lat"], function(t, i) {
					return e[0] = t, e[1] = i, this[rt](e)
				}, this)
			},
			dataToPoint: function(t) {
				return typeof t === Gr && (t = this.getGeoCoord(t)), t ? a[$r][rt].call(this, t) : void 0
			}
		}, n.mixin(e, a), e
	}), e("echarts/coord/geo/geoCreator", [Kr, "./GeoModel", "./Geo", I, Yr, A], function(t) {
		function e(t, e) {
			var i = this[ir](),
				n = t[k]();
			n.aspect = i.width / i[gr] * .75;
			var r = a[zn](n, {
				width: e[_n](),
				height: e[xn]()
			});
			this.setViewRect(r.x, r.y, r.width, r[gr]);
			var o = t[rr](l),
				s = o.get("x") || 0,
				c = o.get("y") || 0,
				u = o.get("zoom") || 1;
			this.setPan(s, c), this.setZoom(u)
		}

		function i(t, e) {
			o.each(e.get("geoCoord"), function(e, i) {
				t.addGeoCoord(i, e)
			})
		}

		function n(t) {
			console.error("Map " + t + " not exists")
		}
		t("./GeoModel");
		var r = t("./Geo"),
			a = t(I),
			o = t(Yr),
			s = {},
			c = {
				create: function(t, a) {
					var l = [];
					t[te]("geo", function(t, o) {
						var c = t.get("map"),
							u = s[c];
						u || n(c);
						var h = new r(c + o, c, u && u.geoJson, u && u.specialAreas, t.get("nameMap"));
						l.push(h), i(h, t), t[St] = h, h.model = t, h[_e] = e, h[_e](t, a)
					}), t[le](function(t) {
						var e = t.get(St);
						if ("geo" === e) {
							var i = t.get("geoIndex") || 0;
							t[St] = l[i]
						}
					});
					var c = {};
					return t[ce]("map", function(t) {
						var e = t.get("map");
						c[e] = c[e] || [], c[e].push(t)
					}), o.each(c, function(t, c) {
						var u = s[c];
						u || n(name);
						var h = o.map(t, function(t) {
								return t.get("nameMap")
							}),
							d = new r(c, c, u && u.geoJson, u && u.specialAreas, o.mergeAll(h));
						l.push(d), d[_e] = e, d[_e](t[0], a), o.each(t, function(t) {
							t[St] = d, i(d, t)
						})
					}), l
				},
				registerMap: function(t, e, i) {
					e.geoJson && !e.features && (i = e.specialAreas, e = e.geoJson), typeof e === Gr && (e = typeof JSON !== br && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")()), s[t] = {
						geoJson: e,
						specialAreas: i
					}
				},
				getMap: function(t) {
					return s[t]
				}
			},
			u = t(A);
		u.registerMap = c.registerMap, u.getMap = c.getMap, u.loadMap = function() {}, u.registerCoordinateSystem("geo", c)
	}), e("echarts/chart/map/mapSymbolLayout", [Kr, Yr], function(t) {
		var e = t(Yr);
		return function(t) {
			var i = {};
			t[ce]("map", function(n) {
				var r = n.get("mapType");
				if (!i[r]) {
					var a = {};
					e.each(n.seriesGroup, function(e) {
						var i = e[St],
							n = e[sn]();
						e.get("showLegendSymbol") && t[mn](ae) && n.each("value", function(t, e) {
							var r = n[nn](e),
								o = i.getRegion(r);
							if (o && !isNaN(t)) {
								var s = a[r] || 0,
									l = i[rt](o[cr]);
								a[r] = s + 1, n[Dt](e, {
									point: l,
									offset: s
								})
							}
						})
					});
					var o = n[sn]();
					o.each(function(t) {
						var e = o[nn](t),
							i = o[It](t) || {};
						i.showLabel = !a[e], o[Dt](t, i)
					}), i[r] = !0
				}
			})
		}
	}), e("echarts/chart/map/mapVisual", [Kr], function(t) {
		return function(t) {
			t[ce]("map", function(t) {
				var e = t.get("color"),
					i = t[rr](b),
					n = i.get("areaColor"),
					r = i.get("color") || e[t[ln] % e[qr]];
				t[sn]()[de]({
					areaColor: n,
					color: r
				})
			})
		}
	}), e("echarts/chart/map/mapDataStatistic", [Kr, Yr], function(t) {
		function e(t, e) {
			for (var i = {}, n = ["value"], r = 0; r < t[qr]; r++) t[r].each(n, function(e, n) {
				var a = t[r][nn](n);
				i[a] = i[a] || [], isNaN(e) || i[a].push(e)
			});
			return t[0].map(n, function(n, r) {
				for (var a = t[0][nn](r), o = 0, s = 1 / 0, l = -(1 / 0), c = i[a][qr], u = 0; c > u; u++) s = Math.min(s, i[a][u]), l = Math.max(l, i[a][u]), o += i[a][u];
				var h;
				return h = "min" === e ? s : "max" === e ? l : "average" === e ? o / c : o, 0 === c ? NaN : h
			})
		}
		var i = t(Yr);
		return function(t) {
			var n = {};
			t[ce]("map", function(t) {
				var e = t.get("map");
				n[e] = n[e] || [], n[e].push(t)
			}), i.each(n, function(t, n) {
				var r = e(i.map(t, function(t) {
					return t[sn]()
				}), t[0].get("mapValueCalculation"));
				t[0].seriesGroup = [], t[0][ei](r);
				for (var a = 0; a < t[qr]; a++) t[a].seriesGroup = t, t[a].needsDrawMap = 0 === a
			})
		}
	}), e("echarts/chart/map/backwardCompat", [Kr, Yr], function(t) {
		function e(t) {
			var e = {};
			return i.each(n, function(i) {
				null != t[i] && (e[i] = t[i])
			}), e
		}
		var i = t(Yr),
			n = ["x", "y", "x2", "y2", "width", gr, "map", "roam", l, "label", oe],
			r = {};
		return function(t) {
			var n = [];
			i.each(t[An], function(t) {
				"map" === t.type && n.push(t), i[Vr](r, t.geoCoord)
			});
			var a = {};
			i.each(n, function(n) {
				if (n.map = n.map || n.mapType, i[sr](n, n.mapLocation), n.markPoint) {
					var o = n.markPoint;
					if (o.data = i.map(o.data, function(t) {
							if (!i[qn](t.value)) {
								var e;
								t.geoCoord ? e = t.geoCoord : t.name && (e = r[t.name]);
								var n = e ? [e[0], e[1]] : [NaN, NaN];
								null != t.value && n.push(t.value), t.value = n
							}
							return t
						}), !n.data || !n.data[qr]) {
						t.geo || (t.geo = []);
						var s = a[n.map];
						s || (s = a[n.map] = e(n), t.geo.push(s));
						var l = n.markPoint;
						l.type = t.effect && t.effect.show ? "effectScatter" : ne, l[St] = "geo", l.geoIndex = i[Zr](t.geo, s), l.name = n.name, t[An][bn](i[Zr](t[An], n), 1, l)
					}
				}
			})
		}
	}), e("echarts/chart/map", [Kr, X, "./map/MapSeries", "./map/MapView", "../action/geoRoam", "../coord/geo/geoCreator", "./map/mapSymbolLayout", "./map/mapVisual", "./map/mapDataStatistic", "./map/backwardCompat", "../action/createDataSelectAction"], function(t) {
		var e = t(X);
		t("./map/MapSeries"), t("./map/MapView"), t("../action/geoRoam"), t("../coord/geo/geoCreator"), e[jt](t("./map/mapSymbolLayout")), e[Ut]("chart", t("./map/mapVisual")), e[Yt]("statistic", t("./map/mapDataStatistic")), e[$t](t("./map/backwardCompat")), t("../action/createDataSelectAction")("map", [{
			type: "mapToggleSelect",
			event: "mapselectchanged",
			method: "toggleSelected"
		}, {
			type: "mapSelect",
			event: "mapselected",
			method: "select"
		}, {
			type: "mapUnSelect",
			event: "mapunselected",
			method: "unSelect"
		}])
	}), e("echarts/data/helper/linkList", [Kr, Yr], function(t) {
		function e(t, e, n) {
			return i.each(r, function(r, a) {
				var o = t[a];
				t[a] = i.curry(r, o, e, n)
			}), t[n] = e, e.data = t, t
		}
		var i = t(Yr),
			n = Array[$r].slice,
			r = {
				cloneShallow: function(t, i, r) {
					var a = t.apply(this, n.call(arguments, 3));
					return e(a, i, r)
				},
				map: function(t, i, r) {
					var a = t.apply(this, n.call(arguments, 3));
					return e(a, i, r)
				},
				filterSelf: function(t, e, i) {
					var r = t.apply(this, n.call(arguments, 3));
					return e[we](), r
				}
			};
		return {
			linkToGraph: function(t, i) {
				e(t, i, "graph")
			},
			linkToTree: function(t, i) {
				e(t, i, "tree")
			}
		}
	}), e("echarts/data/Tree", [Kr, Yr, "../model/Model", "./List", "./helper/linkList", "./helper/completeDimensions"], function(t) {
		function e(t, e) {
			this.root, this.data, this._nodes = [], this[Kt] = t, this.levelModels = n.map(e || [], function(e) {
				return new o(e, t, t[ar])
			})
		}

		function i(t, e) {
			var i = e.children;
			t[Ce] !== e && (i.push(t), t[Ce] = e, e.hostTree._nodes.push(t))
		}
		var n = t(Yr),
			o = t("../model/Model"),
			s = t("./List"),
			l = t("./helper/linkList"),
			c = t("./helper/completeDimensions"),
			u = function(t, e, i) {
				this.name = t || "", this.depth = 0, this[gr] = 0, this[Ce] = null, this[_i] = null == e ? -1 : e, this.children = [], this.viewChildren = [], this.hostTree = i
			};
		return u[$r] = {
			constructor: u,
			isRemoved: function() {
				return this[_i] < 0
			},
			eachNode: function(t, e, i) {
				typeof t === Er && (i = e, e = t, t = null), t = t || {}, n[Sn](t) && (t = {
					order: t
				});
				var r, o = t.order || "preorder",
					s = this[t.attr || "children"];
				"preorder" === o && (r = e.call(i, this));
				for (var l = 0; !r && l < s[qr]; l++) s[l][a](t, e, i);
				"postorder" === o && e.call(i, this)
			},
			updateDepthAndHeight: function(t) {
				var e = 0;
				this.depth = t;
				for (var i = 0; i < this.children[qr]; i++) {
					var n = this.children[i];
					n.updateDepthAndHeight(t + 1), n[gr] > e && (e = n[gr])
				}
				this[gr] = e + 1
			},
			getNodeById: function(t) {
				if (this.getId() === t) return this;
				for (var e = 0, i = this.children, n = i[qr]; n > e; e++) {
					var r = i[e].getNodeById(t);
					if (r) return r
				}
			},
			contains: function(t) {
				if (t === this) return !0;
				for (var e = 0, i = this.children, n = i[qr]; n > e; e++) {
					var r = i[e].contains(t);
					if (r) return r
				}
			},
			getAncestors: function(t) {
				for (var e = [], i = t ? this : this[Ce]; i;) e.push(i), i = i[Ce];
				return e[r](), e
			},
			getValue: function(t) {
				var e = this.hostTree.data;
				return e.get(e.getDimension(t || "value"), this[_i])
			},
			setLayout: function(t, e) {
				this[_i] >= 0 && this.hostTree.data[Dt](this[_i], t, e)
			},
			getLayout: function() {
				return this.hostTree.data[It](this[_i])
			},
			getModel: function(t) {
				if (!(this[_i] < 0)) {
					var e = this.hostTree,
						i = e.data[en](this[_i]),
						n = this.getLevelModel();
					return i[rr](t, (n || e[Kt])[rr](t))
				}
			},
			getLevelModel: function() {
				return (this.hostTree.levelModels || [])[this.depth]
			},
			setVisual: function(t, e) {
				this[_i] >= 0 && this.hostTree.data[ue](this[_i], t, e)
			},
			getVisual: function(t, e) {
				return this.hostTree.data[Lt](this[_i], t, e)
			},
			getRawIndex: function() {
				return this.hostTree.data[rn](this[_i])
			},
			getId: function() {
				return this.hostTree.data.getId(this[_i])
			}
		}, e[$r] = {
			constructor: e,
			type: "tree",
			eachNode: function(t, e, i) {
				this.root[a](t, e, i)
			},
			getNodeByDataIndex: function(t) {
				var e = this.data[rn](t);
				return this._nodes[e]
			},
			getNodeByName: function(t) {
				return this.root.getNodeByName(t)
			},
			update: function() {
				for (var t = this.data, e = this._nodes, i = 0, n = e[qr]; n > i; i++) e[i][_i] = -1;
				for (var i = 0, n = t.count(); n > i; i++) e[t[rn](i)][_i] = i
			}
		}, e.createTree = function(t, n, r) {
			function a(t, e) {
				h.push(t);
				var n = new u(t.name, h[qr] - 1, o);
				e ? i(n, e) : o.root = n;
				var r = t.children;
				if (r)
					for (var s = 0; s < r[qr]; s++) a(r[s], n)
			}
			var o = new e(n, r),
				h = [];
			a(t), o.root.updateDepthAndHeight(0);
			var d = c([{
					name: "value"
				}], h),
				f = new s(d, n);
			return f[Gt](h), l.linkToTree(f, o), o
		}, e
	}), e("echarts/chart/treemap/TreemapSeries", [Kr, _t, "../../data/Tree", Yr, C, p], function(t) {
		function e(t, i) {
			var n = 0;
			o.each(t.children, function(t) {
				e(t, i);
				var r = t.value;
				o[qn](r) && (r = r[0]), n += r
			});
			var r = t.value;
			i >= 0 && (o[qn](r) ? r = r[0] : t.value = new Array(i)), (null == r || isNaN(r)) && (r = n), 0 > r && (r = 0), i >= 0 ? t.value[0] = r : t.value = r
		}

		function i(t, e) {
			var i = e.get("color");
			if (i) {
				t = t || [];
				var n;
				if (o.each(t, function(t) {
						var e = new s(t),
							i = e.get("color");
						(e.get(ie) || i && "none" !== i) && (n = !0)
					}), !n) {
					var r = t[0] || (t[0] = {});
					r.color = i.slice()
				}
				return t
			}
		}
		var n = t(_t),
			a = t("../../data/Tree"),
			o = t(Yr),
			s = t(C),
			l = t(p),
			c = l[Ji],
			u = l[Ki];
		return n[Vr]({
			type: "series.treemap",
			dependencies: ["grid", "polar"],
			defaultOption: {
				left: "center",
				top: "middle",
				right: null,
				bottom: null,
				width: "80%",
				height: "80%",
				sort: !0,
				clipWindow: "origin",
				squareRatio: .5 * (1 + Math.sqrt(5)),
				root: null,
				visualDimension: 0,
				zoomToNodeRatio: .1024,
				roam: !0,
				nodeClick: "zoomToNode",
				animation: !0,
				animationDurationUpdate: 1500,
				animationEasing: "quinticInOut",
				breadcrumb: {
					show: !0,
					height: 22,
					left: "center",
					top: "bottom",
					emptyItemWidth: 25,
					itemStyle: {
						normal: {
							color: "rgba(0,0,0,0.7)",
							borderColor: "rgba(255,255,255,0.7)",
							borderWidth: 1,
							shadowColor: "rgba(150,150,150,1)",
							shadowBlur: 3,
							shadowOffsetX: 0,
							shadowOffsetY: 0,
							textStyle: {
								color: "#fff"
							}
						},
						emphasis: {
							textStyle: {}
						}
					}
				},
				label: {
					normal: {
						show: !0,
						position: ["50%", "50%"],
						textStyle: {
							align: "center",
							baseline: "middle",
							color: "#fff",
							ellipsis: !0
						}
					}
				},
				itemStyle: {
					normal: {
						color: null,
						colorAlpha: null,
						colorSaturation: null,
						borderWidth: 0,
						gapWidth: 0,
						borderColor: "#fff",
						borderColorSaturation: null
					},
					emphasis: {}
				},
				color: "none",
				colorAlpha: null,
				colorSaturation: null,
				colorMappingBy: "index",
				visibleMin: 10,
				childrenVisibleMin: null,
				levels: []
			},
			getInitialData: function(t, n) {
				var r = t.data || [],
					s = t.name;
				null == s && (s = t.name);
				var l = {
						name: s,
						children: t.data
					},
					c = (r[0] || {}).value;
				e(l, o[qn](c) ? c[qr] : -1);
				var u = t.levels || [];
				return u = t.levels = i(u, n), a.createTree(l, this, u).data
			},
			getViewRoot: function() {
				var t = this[Yn].root,
					e = this[sn]().tree.root;
				return t && e.getNodeById(t) || e
			},
			formatTooltip: function(t) {
				var e = this[sn](),
					i = this[an](t),
					n = u(o[qn](i) ? i[0] : i),
					r = e[nn](t);
				return c(r) + ": " + n
			},
			getDataParams: function(t) {
				for (var e = n[$r][tn].apply(this, arguments), i = this[sn](), a = i.tree.getNodeByDataIndex(t), o = e.treePathInfo = []; a;) {
					var s = a[_i];
					o.push({
						name: a.name,
						dataIndex: s,
						value: this[an](s)
					}), a = a[Ce]
				}
				return o[r](), e
			},
			setLayoutInfo: function(t) {
				this.layoutInfo = this.layoutInfo || {}, o[Vr](this.layoutInfo, t)
			},
			mapIdToIndex: function(t) {
				var e = this._idIndexMap;
				e || (e = this._idIndexMap = {}, this._idIndexMapCount = 0);
				var i = e[t];
				return null == i && (e[t] = i = this._idIndexMapCount++), i
			}
		})
	}), e("echarts/chart/treemap/helper", [Kr], function(t) {
		var e = {
			retrieveTargetInfo: function(t, e) {
				if (t && "treemapZoomToNode" === t.type) {
					var i = e[sn]().tree.root,
						n = t.targetNode;
					if (n && i.contains(n)) return {
						node: n
					};
					var r = t.targetNodeId;
					return null != r && (n = i.getNodeById(r)) ? {
						node: n
					} : null
				}
			}
		};
		return e
	}), e("echarts/chart/treemap/Breadcrumb", [Kr, gt, I, Yr], function(t) {
		function e(t, e) {
			this.group = new n.Group, t.add(this.group), this._onSelect = e || a.noop
		}

		function i(t, e, i, n, r, a) {
			var o = [
				[r ? t : t - l, e],
				[t + i, e],
				[t + i, e + n],
				[r ? t : t - l, e + n]
			];
			return !a && o[bn](2, 0, [t + i + l, e + n / 2]), !r && o.push([t, e + n / 2]), o
		}
		var n = t(gt),
			r = t(I),
			a = t(Yr),
			o = 8,
			s = 8,
			l = 5;
		return e[$r] = {
			constructor: e,
			render: function(t, e, i) {
				var n = t[rr]("breadcrumb"),
					a = this.group;
				if (a[Mi](), n.get("show") && i) {
					var o = n[rr](b),
						s = o[rr](nr),
						l = {
							pos: {
								left: n.get("left"),
								right: n.get("right"),
								top: n.get("top"),
								bottom: n.get(hr)
							},
							box: {
								width: e[_n](),
								height: e[xn]()
							},
							emptyItemWidth: n.get("emptyItemWidth"),
							totalWidth: 0,
							renderList: []
						};
					this._prepare(n, i, l, s), this._renderContent(n, i, l, o, s), r[In](a, l.pos, l.box)
				}
			},
			_prepare: function(t, e, i, n) {
				for (var r = e; r; r = r[Ce]) {
					var a = r[rr]().get("name"),
						l = n.getTextRect(a),
						c = Math.max(l.width + 2 * o, i.emptyItemWidth);
					i.totalWidth += c + s, i.renderList.push({
						node: r,
						text: a,
						width: c
					})
				}
			},
			_renderContent: function(t, e, o, l, c) {
				for (var u = 0, h = o.emptyItemWidth, d = t.get(gr), f = r.getAvailableSize(o.pos, o.box), p = o.totalWidth, v = o.renderList, m = v[qr] - 1; m >= 0; m--) {
					var g = v[m],
						y = g.width,
						x = g.text;
					p > f.width && (p -= y - h, y = h, x = ""), this.group.add(new n[je]({
						shape: {
							points: i(u, 0, y, d, m === v[qr] - 1, 0 === m)
						},
						style: a[sr](l[ut](), {
							lineJoin: "bevel",
							text: x,
							textFill: c[Ee](),
							textFont: c[er]()
						}),
						onclick: a.bind(this._onSelect, this, g.node)
					})), u += y + s
				}
			},
			remove: function() {
				this.group[Mi]()
			}
		}, e
	}), e("echarts/util/animation", [Kr, Yr], function(t) {
		function e() {
			var t, e = [],
				n = {};
			return {
				add: function(t, r, a, o, s) {
					return i[Sn](o) && (s = o, o = 0), n[t.id] ? !1 : (n[t.id] = 1, e.push({
						el: t,
						target: r,
						time: a,
						delay: o,
						easing: s
					}), !0)
				},
				done: function(e) {
					return t = e, this
				},
				start: function() {
					function i() {
						r--, r || (e[qr] = 0, n = {}, t && t())
					}
					for (var r = e[qr], a = 0, o = e[qr]; o > a; a++) {
						var s = e[a];
						s.el[Oe](s[Bi], s.time, s.delay, s.easing, i)
					}
					return this
				}
			}
		}
		var i = t(Yr);
		return {
			createWrap: e
		}
	}), e("echarts/chart/treemap/TreemapView", [Kr, Yr, gt, "../../data/DataDiffer", "./helper", "./Breadcrumb", "../../component/helper/RoamController", xr, _r, "../../util/animation", A], function(t) {
		function e() {
			return {
				nodeGroup: [],
				background: [],
				content: []
			}
		}
		var i = t(Yr),
			n = t(gt),
			r = t("../../data/DataDiffer"),
			l = t("./helper"),
			c = t("./Breadcrumb"),
			u = t("../../component/helper/RoamController"),
			h = t(xr),
			d = t(_r),
			f = t("../../util/animation"),
			p = i.bind,
			v = n.Group,
			m = n.Rect,
			g = i.each,
			y = 3;
		return t(A)[qt]({
			type: "treemap",
			init: function(t, i) {
				this._containerGroup, this._storage = e(), this._oldTree, this._breadcrumb, this[o], this._state = "ready", this._mayClick
			},
			render: function(t, e, n, r) {
				var a = e[Mn]({
					mainType: "series",
					subType: "treemap",
					query: r
				});
				if (!(i[Zr](a, t) < 0)) {
					this.seriesModel = t, this.api = n, this[ar] = e;
					var o = r && r.type,
						s = t.layoutInfo,
						c = !this._oldTree,
						u = this._giveContainerGroup(s),
						h = this._doRender(u, t);
					c || o && "treemapZoomToNode" !== o ? h.renderFinally() : this._doAnimation(u, h, t), this._resetController(n);
					var d = l.retrieveTargetInfo(r, t);
					this._renderBreadcrumb(t, n, d)
				}
			},
			_giveContainerGroup: function(t) {
				var e = this._containerGroup;
				return e || (e = this._containerGroup = new v, this._initEvents(e), this.group.add(e)), e[Nn] = [t.x, t.y], e
			},
			_doRender: function(t, n) {
				function a(t, e, n, o, s) {
					function l(t) {
						return t.getId()
					}

					function c(i, r) {
						var l = null != i ? t[i] : null,
							c = null != r ? e[r] : null,
							u = s || l === x;
						u || (l = null);
						var h = y(l, c, n);
						h && a(l && l.viewChildren || [], c && c.viewChildren || [], h, o, u)
					}
					o ? (e = t, g(t, function(t, e) {
						!t.isRemoved() && c(e, e)
					})) : new r(e, t, l, l).add(c)[we](c)[Li](i.curry(c, null))[lt]()
				}

				function o(t) {
					var i = e();
					return t && g(t, function(t, e) {
						var n = i[e];
						g(t, function(t) {
							t && (n.push(t), t.__tmWillDelete = e)
						})
					}), i
				}

				function s() {
					g(m, function(t) {
						g(t, function(t) {
							t[Wi] && t[Wi][Li](t)
						})
					}), g(f, function(t) {
						t[Ai] = !0
					}), g(v, function(t) {
						t[Ai] = !1, t.__tmWillVisible = !1, t.dirty()
					})
				}
				var l = n[sn]().tree,
					c = this._oldTree,
					u = e(),
					h = e(),
					d = this._storage,
					f = [],
					v = [],
					m = [],
					y = p(this._renderNode, this, h, d, u, f, v),
					x = n.getViewRoot();
				a(l.root ? [l.root] : [], c && c.root ? [c.root] : [], t, l === c || !c, x === l.root);
				var m = o(d);
				return this._oldTree = l, this._storage = h, {
					lastsForAnimation: u,
					willDeleteEls: m,
					renderFinally: s
				}
			},
			_renderNode: function(t, e, n, r, a, o, s, l) {
				function c(i, r) {
					var a = null != p && e[i][p],
						o = n[i];
					return a ? (e[i][p] = null, u(o, a, i)) : _ || (a = new r, h(o, a, i)), t[i][f] = a
				}

				function u(t, e, n) {
					var r = t[f] = {};
					r.old = "nodeGroup" === n ? e[Nn].slice() : i[Vr]({}, e.shape)
				}

				function h(t, e, i) {
					if ("background" === i) e[Ai] = !0, e.__tmWillVisible = !0, a.push(e);
					else {
						var r, s = o[Ce],
							l = 0,
							c = 0;
						s && (r = n.background[s[rn]()]) && (l = r.old.width, c = r.old[gr]);
						var u = t[f] = {};
						u.old = "nodeGroup" === i ? [l, c] : {
							x: l,
							y: c,
							width: 0,
							height: 0
						}, u.fadein = "nodeGroup" !== i
					}
				}

				function d(t, e) {
					_ ? !t[Ai] && r.push(t) : (t[He](e), t.__tmWillVisible || (t[Ai] = !1))
				}
				var f = o && o[rn](),
					p = s && s[rn]();
				if (o) {
					var g = o[Pt](),
						y = g.width,
						x = g[gr],
						_ = g[Ai],
						w = c("nodeGroup", v);
					if (w) {
						l.add(w), w[Nn] = [g.x, g.y], w.__tmNodeWidth = y, w.__tmNodeHeight = x;
						var b = c("background", m);
						b && (b[ii]({
							x: 0,
							y: 0,
							width: y,
							height: x
						}), d(b, {
							fill: o[Vt](Qn, !0)
						}), w.add(b));
						var M = o.viewChildren;
						if (!M || !M[qr]) {
							var A = g[Jn],
								C = c("content", m);
							if (C) {
								var T = Math.max(y - 2 * A, 0),
									k = Math.max(x - 2 * A, 0),
									L = o[rr](S),
									D = o[rr]("label.normal.textStyle"),
									I = o[rr]().get("name"),
									P = D.getTextRect(I),
									z = L.get("show");
								!z || P[gr] > k ? I = "" : P.width > T && (I = D.get("ellipsis") ? D.ellipsis(I, T) : ""), C[_i] = o[_i], C[ln] = this.seriesModel[ln], C.culling = !0, C[ii]({
									x: A,
									y: A,
									width: T,
									height: k
								}), d(C, {
									fill: o[Vt]("color", !0),
									text: I,
									textPosition: L.get(Nn),
									textFill: D[Ee](),
									textAlign: D.get("align"),
									textBaseline: D.get(tr),
									textFont: D[er]()
								}), w.add(C)
							}
						}
						return w
					}
				}
			},
			_doAnimation: function(t, e, n) {
				if (n.get(Ei)) {
					var r = n.get("animationDurationUpdate"),
						a = n.get("animationEasing"),
						o = f.createWrap(),
						s = this.seriesModel.getViewRoot(),
						l = this._storage.nodeGroup[s[rn]()];
					l && l[Ci](function(t) {
						var e;
						if (!t[Ai] && (e = t.__tmWillDelete)) {
							var i = 0,
								n = 0,
								s = t[Wi];
							s.__tmWillDelete || (i = s.__tmNodeWidth, n = s.__tmNodeHeight);
							var l = "nodeGroup" === e ? {
								position: [i, n],
								style: {
									opacity: 0
								}
							} : {
								shape: {
									x: i,
									y: n,
									width: 0,
									height: 0
								},
								style: {
									opacity: 0
								}
							};
							o.add(t, l, r, a)
						}
					}), g(this._storage, function(t, n) {
						g(t, function(t, s) {
							var l, c = e.lastsForAnimation[n][s];
							c && ("nodeGroup" === n ? (l = {
								position: t[Nn].slice()
							}, t[Nn] = c.old) : (l = {
								shape: i[Vr]({}, t.shape)
							}, t[ii](c.old), c.fadein ? (t[He](Tr, 0), l.style = {
								opacity: 1
							}) : 1 !== t.style[Tr] && (l.style = {
								opacity: 1
							})), o.add(t, l, r, a))
						})
					}, this), this._state = "animating", o.done(p(function() {
						this._state = "ready", e.renderFinally()
					}, this)).start()
				}
			},
			_resetController: function(t) {
				var e = this[o];
				e || (e = this[o] = new u(t.getZr()), e[s](), e.on("pan", p(this._onPan, this)), e.on("zoom", p(this._onZoom, this))), e.rect = new h(0, 0, t[_n](), t[xn]())
			},
			_clearController: function() {
				var t = this[o];
				t && (t.off("pan").off("zoom"), t = null)
			},
			_isRoamEnabled: function(t) {
				var e = this.seriesModel.get("roam");
				return e === !0 || ("scale" === e || "zoom" === e) && "zoom" === t || e === t && "move" === t
			},
			_onPan: function(t, e) {
				if (this._isRoamEnabled("move") && (this._mayClick = !1, "animating" !== this._state && (Math.abs(t) > y || Math.abs(e) > y))) {
					var i = this.seriesModel.getViewRoot();
					if (!i) return;
					var n = i[Pt]();
					if (!n) return;
					this.api[yn]({
						type: "treemapMove",
						from: this.uid,
						seriesId: this.seriesModel.id,
						rootRect: {
							x: n.x + t,
							y: n.y + e,
							width: n.width,
							height: n[gr]
						}
					})
				}
			},
			_onZoom: function(t, e, i) {
				if (this._isRoamEnabled("zoom") && (this._mayClick = !1, "animating" !== this._state)) {
					var n = this.seriesModel.getViewRoot();
					if (!n) return;
					var r = n[Pt]();
					if (!r) return;
					var a = new h(r.x, r.y, r.width, r[gr]),
						o = this.seriesModel.layoutInfo;
					e -= o.x, i -= o.y;
					var s = d[mr]();
					d[vr](s, s, [-e, -i]), d.scale(s, s, [t, t]), d[vr](s, s, [e, i]), a[yr](s), this.api[yn]({
						type: "treemapRender",
						from: this.uid,
						seriesId: this.seriesModel.id,
						rootRect: {
							x: a.x,
							y: a.y,
							width: a.width,
							height: a[gr]
						}
					})
				}
			},
			_initEvents: function(t) {
				function e(t) {
					var e = this.seriesModel.get("nodeClick", !0);
					if (e) {
						var i = this.findTarget(t[ke], t[Te]);
						if (i)
							if ("zoomToNode" === e) this._zoomToNode(i);
							else if ("link" === e) {
							var n = i.node,
								r = n.hostTree.data[en](n[_i]),
								a = r.get("link", !0),
								o = r.get(Bi, !0) || "blank";
							a && window.open(a, o)
						}
					}
				}
				t.on(Ie, function(t) {
					"ready" === this._state && (this._mayClick = !0)
				}, this), t.on(Le, function(t) {
					this._mayClick && (this._mayClick = !1, "ready" === this._state && e.call(this, t))
				}, this)
			},
			_renderBreadcrumb: function(t, e, i) {
				function n(t) {
					this._zoomToNode({
						node: t
					})
				}
				i || (i = this.findTarget(e[_n]() / 2, e[xn]() / 2), i || (i = {
					node: t[sn]().tree.root
				})), (this._breadcrumb || (this._breadcrumb = new c(this.group, p(n, this))))[bi](t, e, i.node)
			},
			remove: function() {
				this._clearController(), this._containerGroup && this._containerGroup[Mi](), this._storage = e(), this._state = "ready", this._breadcrumb && this._breadcrumb[Li]()
			},
			dispose: function() {
				this._clearController()
			},
			_zoomToNode: function(t) {
				this.api[yn]({
					type: "treemapZoomToNode",
					from: this.uid,
					seriesId: this.seriesModel.id,
					targetNode: t.node
				})
			},
			findTarget: function(t, e) {
				var i, n = this.seriesModel.getViewRoot();
				return n[a]({
					attr: "viewChildren",
					order: "preorder"
				}, function(n) {
					var r = this._storage.background[n[rn]()];
					if (r) {
						var a = r[Gi](t, e),
							o = r.shape;
						if (!(o.x <= a[0] && a[0] <= o.x + o.width && o.y <= a[1] && a[1] <= o.y + o[gr])) return !1;
						i = {
							node: n,
							offsetX: a[0],
							offsetY: a[1]
						}
					}
				}, this), i
			}
		})
	}), e("echarts/chart/treemap/treemapAction", [Kr, A], function(t) {
		var e = t(A),
			i = function() {};
		e[Xt]({
			type: "treemapZoomToNode",
			update: "updateView"
		}, i), e[Xt]({
			type: "treemapRender",
			update: "updateView"
		}, i), e[Xt]({
			type: "treemapMove",
			update: "updateView"
		}, i)
	}), e("echarts/visual/VisualMapping", [Kr, Yr, Ni, "../util/number"], function(t) {
		function e(t) {
			var e = t.pieceList;
			t.hasSpecialVisual = !1, c.each(e, function(e, i) {
				e.originIndex = i, e.visual && (t.hasSpecialVisual = !0)
			})
		}

		function i(t) {
			var e = t[n],
				i = t.visual,
				r = c[qn](i);
			if (!e) {
				if (r) return;
				throw new Error
			}
			var a = t.categoryMap = {};
			if (d(e, function(t, e) {
					a[t] = e
				}), !r) {
				var o = [];
				c[Ln](i) ? d(i, function(t, e) {
					var i = a[e];
					o[null != i ? i : p] = t
				}) : o[p] = i, i = t.visual = o
			}
			for (var s = e[qr] - 1; s >= 0; s--) null == i[s] && (delete a[e[s]], e.pop())
		}

		function r(t) {
			return {
				applyVisual: function(e, i, n) {
					var r = i("color"),
						a = c[qn](e);
					if (e = a ? [this.mapValueToVisual(e[0]), this.mapValueToVisual(e[1])] : this.mapValueToVisual(e), c[qn](r))
						for (var o = 0, s = r[qr]; s > o; o++) r[o].color = t(r[o].color, a ? e[o] : e);
					else n("color", t(r, e))
				},
				mapValueToVisual: function(t) {
					var e = this._normalizeData(t),
						i = this._getSpecifiedVisual(t),
						n = this[Yn].visual;
					return null == i && (i = l(this) ? s(this, n, e) : h(e, [0, 1], n, !0)), i
				}
			}
		}

		function a(t, e) {
			return t[Math.round(h(e, [0, 1], [0, t[qr] - 1], !0))]
		}

		function o(t, e, i) {
			i("color", this.mapValueToVisual(t))
		}

		function s(t, e, i) {
			return e[t[Yn].loop && i !== p ? i % e[qr] : i]
		}

		function l(t) {
			return t[Yn].mappingMethod === Mt
		}
		var c = t(Yr),
			u = t(Ni),
			h = t("../util/number")[Un],
			d = c.each,
			f = c[Ln],
			p = -1,
			v = function(t) {
				var n = t.mappingMethod,
					r = t.type;
				this.type = r, this.mappingMethod = n;
				var a = this[Yn] = c.clone(t);
				this._normalizeData = g[n], this._getSpecifiedVisual = c.bind(y[n], this, r), c[Vr](this, m[r]), "piecewise" === n && e(a), n === Mt && i(a)
			};
		v[$r] = {
			constructor: v,
			applyVisual: null,
			isValueActive: null,
			mapValueToVisual: null,
			getNormalizer: function() {
				return c.bind(this._normalizeData, this)
			}
		};
		var m = v.visualHandlers = {
				color: {
					applyVisual: o,
					getColorMapper: function() {
						var t = l(this) ? this[Yn].visual : c.map(this[Yn].visual, u.parse);
						return c.bind(l(this) ? function(e, i) {
							return !i && (e = this._normalizeData(e)), s(this, t, e)
						} : function(e, i, n) {
							var r = !!n;
							return !i && (e = this._normalizeData(e)), n = u.fastMapToColor(e, t, n), r ? n : c.stringify(n, "rgba")
						}, this)
					},
					mapValueToVisual: function(t) {
						var e = this[Yn].visual;
						if (c[qn](t)) return t = [this._normalizeData(t[0]), this._normalizeData(t[1])], u.mapIntervalToColor(t, e);
						var i = this._normalizeData(t),
							n = this._getSpecifiedVisual(t);
						return null == n && (n = l(this) ? s(this, e, i) : u.mapToColor(i, e)), n
					}
				},
				colorHue: r(function(t, e) {
					return u.modifyHSL(t, e)
				}),
				colorSaturation: r(function(t, e) {
					return u.modifyHSL(t, null, e)
				}),
				colorLightness: r(function(t, e) {
					return u.modifyHSL(t, null, null, e)
				}),
				colorAlpha: r(function(t, e) {
					return u.modifyAlpha(t, e)
				}),
				symbol: {
					applyVisual: function(t, e, i) {
						var n = this.mapValueToVisual(t);
						if (c[Sn](n)) i(dt, n);
						else if (f(n))
							for (var r in n) n.hasOwnProperty(r) && i(r, n[r])
					},
					mapValueToVisual: function(t) {
						var e = this._normalizeData(t),
							i = this._getSpecifiedVisual(t),
							n = this[Yn].visual;
						return null == i && (i = l(this) ? s(this, n, e) : a(n, e) || {}), i
					}
				},
				symbolSize: {
					applyVisual: function(t, e, i) {
						i(ft, this.mapValueToVisual(t))
					},
					mapValueToVisual: function(t) {
						var e = this._normalizeData(t),
							i = this._getSpecifiedVisual(t),
							n = this[Yn].visual;
						return null == i && (i = l(this) ? s(this, n, e) : h(e, [0, 1], n, !0)), i
					}
				}
			},
			g = {
				linear: function(t) {
					return h(t, this[Yn].dataExtent, [0, 1], !0)
				},
				piecewise: function(t) {
					var e = this[Yn].pieceList,
						i = v.findPieceIndex(t, e);
					return null != i ? h(i, [0, e[qr] - 1], [0, 1], !0) : void 0
				},
				category: function(t) {
					var e = this[Yn][n] ? this[Yn].categoryMap[t] : t;
					return null == e ? p : e
				}
			},
			y = {
				linear: c.noop,
				piecewise: function(t, e) {
					var i = this[Yn],
						n = i.pieceList;
					if (i.hasSpecialVisual) {
						var r = v.findPieceIndex(e, n),
							a = n[r];
						if (a && a.visual) return a.visual[t]
					}
				},
				category: c.noop
			};
		return v.addVisualHandler = function(t, e) {
			m[t] = e
		}, v.isValidType = function(t) {
			return m.hasOwnProperty(t)
		}, v.eachVisual = function(t, e, i) {
			c[Ln](t) ? c.each(t, e, i) : e.call(i, t)
		}, v.mapVisual = function(t, e, i) {
			var n, r = c[qn](t) ? [] : c[Ln](t) ? {} : (n = !0, null);
			return v.eachVisual(t, function(t, a) {
				var o = e.call(i, t, a);
				n ? r = o : r[a] = o
			}), r
		}, v.isInVisualCluster = function(t, e) {
			return "color" === e ? !(!t || 0 !== t[Zr](e)) : t === e
		}, v.retrieveVisuals = function(t) {
			var e, i = {};
			return t && d(m, function(n, r) {
				t.hasOwnProperty(r) && (i[r] = t[r], e = !0)
			}), e ? i : null
		}, v.prepareVisualTypes = function(t) {
			if (f(t)) {
				var e = [];
				d(t, function(t, i) {
					e.push(i)
				}), t = e
			} else {
				if (!c[qn](t)) return [];
				t = t.slice()
			}
			return t.sort(function(t, e) {
				return "color" === e && "color" !== t && 0 === t[Zr]("color") ? 1 : -1
			}), t
		}, v.findPieceIndex = function(t, e) {
			for (var i = 0, n = e[qr]; n > i; i++) {
				var r = e[i];
				if (null != r.value && r.value === t) return i
			}
			for (var i = 0, n = e[qr]; n > i; i++) {
				var r = e[i],
					a = r[N];
				if (a)
					if (a[0] === -(1 / 0)) {
						if (t < a[1]) return i
					} else if (a[1] === 1 / 0) {
					if (a[0] < t) return i
				} else if (r[N][0] <= t && t <= r[N][1]) return i
			}
		}, v
	}), e("echarts/chart/treemap/treemapVisual", [Kr, i, Ni, Yr], function(t) {
		function e(t, i, o, l, u, h) {
			var f = t[rr](),
				v = t[Pt]();
			if (!v[Ai]) {
				var m, g = t[rr](p),
					y = o[t.depth],
					x = n(g, i, y, l),
					_ = g.get(Qn),
					w = g.get("borderColorSaturation");
				null != w && (m = r(x, t), _ = a(w, m)), t[de](Qn, _);
				var b = t.viewChildren;
				if (b && b[qr]) {
					var M = s(t, f, v, g, x, b);
					d.each(b, function(t, i) {
						if (t.depth >= u[qr] || t === u[t.depth]) {
							var n = c(f, x, t, i, M, h);
							e(t, n, o, l, u, h)
						}
					})
				} else m = r(x, t), t[de]("color", m)
			}
		}

		function n(t, e, i, n) {
			var r = d[Vr]({}, e);
			return d.each(["color", "colorAlpha", "colorSaturation"], function(a) {
				var o = t.get(a, !0);
				null == o && i && (o = i[a]), null == o && (o = e[a]), null == o && (o = n.get(a)), null != o && (r[a] = o)
			}), r
		}

		function r(t) {
			var e = o(t, "color");
			if (e) {
				var i = o(t, "colorAlpha"),
					n = o(t, "colorSaturation");
				return n && (e = h.modifyHSL(e, null, null, n)), i && (e = h.modifyAlpha(e, i)), e
			}
		}

		function a(t, e) {
			return null != e ? h.modifyHSL(e, null, null, t) : null
		}

		function o(t, e) {
			var i = t[e];
			return null != i && "none" !== i ? i : void 0
		}

		function s(t, e, i, n, r, a) {
			if (a && a[qr]) {
				var o = l(e, "color") || null != r.color && "none" !== r.color && (l(e, "colorAlpha") || l(e, "colorSaturation"));
				if (o) {
					var s = e.get("colorMappingBy"),
						c = {
							type: o.name,
							dataExtent: i.dataExtent,
							visual: o.range
						};
					"color" !== c.type || "index" !== s && "id" !== s ? c.mappingMethod = Oi : (c.mappingMethod = Mt, c.loop = !0);
					var h = new u(c);
					return h.__drColorMappingBy = s, h
				}
			}
		}

		function l(t, e) {
			var i = t.get(e);
			return f(i) && i[qr] ? {
				name: e,
				range: i
			} : null
		}

		function c(t, e, i, n, r, a) {
			var o = d[Vr]({}, e);
			if (r) {
				var s = r.type,
					l = "color" === s && r.__drColorMappingBy,
					c = "index" === l ? n : "id" === l ? a.mapIdToIndex(i.getId()) : i.getValue(t.get("visualDimension"));
				o[s] = r.mapValueToVisual(c)
			}
			return o
		}
		var u = t(i),
			h = t(Ni),
			d = t(Yr),
			f = d[qn],
			p = b;
		return function(t, i) {
			var n = {
				mainType: "series",
				subType: "treemap",
				query: i
			};
			t[te](n, function(t) {
				var i = t[sn]().tree,
					n = i.root,
					r = t[rr](p);
				if (!n.isRemoved()) {
					var a = d.map(i.levelModels, function(t) {
						return t ? t.get(p) : null
					});
					e(n, {}, a, r, t.getViewRoot().getAncestors(), t)
				}
			})
		}
	}), e("echarts/chart/treemap/treemapLayout", [Kr, Yr, mt, I, xr, "./helper"], function(t) {
		function e(t, e, n) {
			var r = {
				mainType: "series",
				subType: "treemap",
				query: n
			};
			t[te](r, function(t) {
				var r = e[_n](),
					a = e[xn](),
					o = t.get("size") || [],
					s = y(x(t.get("width"), o[0]), r),
					l = y(x(t.get(gr), o[1]), a),
					c = g[zn](t[k](), {
						width: e[_n](),
						height: e[xn]()
					}),
					f = n && n.type,
					p = w.retrieveTargetInfo(n, t),
					v = "treemapRender" === f || "treemapMove" === f ? n.rootRect : null,
					m = t.getViewRoot();
				if ("treemapMove" !== f) {
					var b = "treemapZoomToNode" === f ? u(t, p, s, l) : v ? [v.width, v[gr]] : [s, l],
						M = t.get("sort");
					M && "asc" !== M && "desc" !== M && (M = "desc");
					var S = {
						squareRatio: t.get("squareRatio"),
						sort: M
					};
					m[zt]({
						x: 0,
						y: 0,
						width: b[0],
						height: b[1],
						area: b[0] * b[1]
					}), i(m, S)
				}
				m[zt](h(c, v, p), !0), t.setLayoutInfo(c), d(m, new _(-c.x, -c.y, r, a))
			})
		}

		function i(t, e) {
			var r, a;
			if (!t.isRemoved()) {
				var o = t[Pt]();
				r = o.width, a = o[gr];
				var s = t[rr](b),
					u = s.get(Jn),
					h = s.get("gapWidth") / 2,
					d = u - h,
					m = t[rr]();
				t[zt]({
					borderWidth: u
				}, !0), r = f(r - 2 * d, 0), a = f(a - 2 * d, 0);
				var g = r * a,
					y = n(t, m, g, e);
				if (y[qr]) {
					var x = {
							x: d,
							y: d,
							width: r,
							height: a
						},
						_ = p(r, a),
						w = 1 / 0,
						M = [];
					M.area = 0;
					for (var S = 0, A = y[qr]; A > S;) {
						var C = y[S];
						M.push(C), M.area += C[Pt]().area;
						var T = l(M, _, e.squareRatio);
						w >= T ? (S++, w = T) : (M.area -= M.pop()[Pt]().area, c(M, _, x, h, !1), _ = p(x.width, x[gr]), M[qr] = M.area = 0, w = 1 / 0)
					}
					M[qr] && c(M, _, x, h, !0);
					var k;
					if (!e.hideChildren) {
						var L = m.get("childrenVisibleMin");
						null != L && L > g && (k = !0)
					}
					for (var S = 0, A = y[qr]; A > S; S++) {
						var D = v[Vr]({
							hideChildren: k
						}, e);
						i(y[S], D)
					}
				}
			}
		}

		function n(t, e, i, n) {
			var r = t.children || [],
				l = n.sort;
			if ("asc" !== l && "desc" !== l && (l = null), n.hideChildren) return t.viewChildren = [];
			r = v[Xr](r, function(t) {
				return !t.isRemoved()
			}), o(r, l);
			var c = s(e, r, l);
			if (0 === c.sum) return t.viewChildren = [];
			if (c.sum = a(e, i, c.sum, l, r), 0 === c.sum) return t.viewChildren = [];
			for (var u = 0, h = r[qr]; h > u; u++) {
				var d = r[u].getValue() / c.sum * i;
				r[u][zt]({
					area: d
				})
			}
			return t.viewChildren = r, t[zt]({
				dataExtent: c.dataExtent
			}, !0), r
		}

		function a(t, e, i, n, r) {
			if (!n) return i;
			for (var a = t.get("visibleMin"), o = r[qr], s = o, l = o - 1; l >= 0; l--) {
				var c = r["asc" === n ? o - l - 1 : l].getValue();
				a > c / i * e && (s = l, i -= c)
			}
			return "asc" === n ? r[bn](0, o - s) : r[bn](s, o - s), i
		}

		function o(t, e) {
			return e && t.sort(function(t, i) {
				return "asc" === e ? t.getValue() - i.getValue() : i.getValue() - t.getValue()
			}), t
		}

		function s(t, e, i) {
			for (var n = 0, a = 0, o = e[qr]; o > a; a++) n += e[a].getValue();
			var s, l = t.get("visualDimension");
			if (e && e[qr])
				if ("value" === l && i) s = [e[e[qr] - 1].getValue(), e[0].getValue()], "asc" === i && s[r]();
				else {
					var s = [1 / 0, -(1 / 0)];
					v.each(e, function(t) {
						var e = t.getValue(l);
						e < s[0] && (s[0] = e), e > s[1] && (s[1] = e)
					})
				} else s = [NaN, NaN];
			return {
				sum: n,
				dataExtent: s
			}
		}

		function l(t, e, i) {
			for (var n, r = 0, a = 1 / 0, o = 0, s = t[qr]; s > o; o++) n = t[o][Pt]().area, n && (a > n && (a = n), n > r && (r = n));
			var l = t.area * t.area,
				c = e * e * i;
			return l ? f(c * r / l, l / (c * a)) : 1 / 0
		}

		function c(t, e, i, n, r) {
			var a = e === i.width ? 0 : 1,
				o = 1 - a,
				s = ["x", "y"],
				l = ["width", gr],
				c = i[s[a]],
				u = e ? t.area / e : 0;
			(r || u > i[l[o]]) && (u = i[l[o]]);
			for (var h = 0, d = t[qr]; d > h; h++) {
				var v = t[h],
					m = {},
					g = u ? v[Pt]().area / u : 0,
					y = m[l[o]] = f(u - 2 * n, 0),
					x = i[s[a]] + i[l[a]] - c,
					_ = h === d - 1 || g > x ? x : g,
					w = m[l[a]] = f(_ - 2 * n, 0);
				m[s[o]] = i[s[o]] + p(n, y / 2), m[s[a]] = c + p(n, w / 2), c += _, v[zt](m, !0)
			}
			i[s[o]] += u, i[l[o]] -= u
		}

		function u(t, e, i, n) {
			var r = (e || {}).node,
				a = [i, n];
			if (!r || r === t.getViewRoot()) return a;
			for (var o, s = i * n, l = s * t.get("zoomToNodeRatio"); o = r[Ce];) {
				for (var c = 0, u = o.children, h = 0, d = u[qr]; d > h; h++) c += u[h].getValue();
				var f = r.getValue();
				if (0 === f) return a;
				l *= c / f;
				var p = o[rr](b).get(Jn);
				isFinite(p) && (l += 4 * p * p + 4 * p * Math.pow(l, .5)), l > m.MAX_SAFE_INTEGER && (l = m.MAX_SAFE_INTEGER), r = o
			}
			s > l && (l = s);
			var v = Math.pow(l / s, .5);
			return [i * v, n * v]
		}

		function h(t, e, i) {
			if (e) return {
				x: e.x,
				y: e.y
			};
			var n = {
				x: 0,
				y: 0
			};
			if (!i) return n;
			var r = i.node,
				a = r[Pt]();
			if (!a) return n;
			for (var o = [a.width / 2, a[gr] / 2], s = r; s;) {
				var l = s[Pt]();
				o[0] += l.x, o[1] += l.y, s = s[Ce]
			}
			return {
				x: t.width / 2 - o[0],
				y: t[gr] / 2 - o[1]
			}
		}

		function d(t, e) {
			var i = t[Pt]();
			t[zt]({
				invisible: !e[xe](i)
			}, !0);
			for (var n = t.viewChildren || [], r = 0, a = n[qr]; a > r; r++) {
				var o = new _(e.x - i.x, e.y - i.y, e.width, e[gr]);
				d(n[r], o)
			}
		}
		var f = Math.max,
			p = Math.min,
			v = t(Yr),
			m = t(mt),
			g = t(I),
			y = m[Wn],
			x = v.retrieve,
			_ = t(xr),
			w = t("./helper");
		return e
	}), e("echarts/chart/treemap", [Kr, X, "./treemap/TreemapSeries", "./treemap/TreemapView", "./treemap/treemapAction", "./treemap/treemapVisual", "./treemap/treemapLayout"], function(t) {
		var e = t(X);
		t("./treemap/TreemapSeries"), t("./treemap/TreemapView"), t("./treemap/treemapAction"), e[Ut]("chart", t("./treemap/treemapVisual")), e[jt](t("./treemap/treemapLayout"))
	}), e("echarts/data/Graph", [Kr, Yr], function(t) {
		function e(t, e) {
			this.id = null == t ? "" : t, this.inEdges = [], this.outEdges = [], this.edges = [], this.hostGraph, this[_i] = null == e ? -1 : e
		}

		function i(t, e, i) {
			this.node1 = t, this.node2 = e, this[_i] = null == i ? -1 : i
		}
		var n = t(Yr),
			r = function(t) {
				this._directed = t || !1, this.nodes = [], this.edges = [], this._nodesMap = {}, this._edgesMap = {}, this.data, this.edgeData
			},
			o = r[$r];
		o.type = "graph", o.isDirected = function() {
			return this._directed
		}, o.addNode = function(t, i) {
			var n = this._nodesMap;
			if (!n[t]) {
				var r = new e(t, i);
				return r.hostGraph = this, this.nodes.push(r), n[t] = r, r
			}
		}, o.getNodeByIndex = function(t) {
			var e = this.data[rn](t);
			return this.nodes[e]
		}, o.getNodeById = function(t) {
			return this._nodesMap[t]
		}, o.addEdge = function(t, n, r) {
			var a = this._nodesMap,
				o = this._edgesMap;
			if (t instanceof e || (t = a[t]), n instanceof e || (n = a[n]), t && n) {
				var s = t.id + "-" + n.id;
				if (!o[s]) {
					var l = new i(t, n, r);
					return l.hostGraph = this, this._directed && (t.outEdges.push(l), n.inEdges.push(l)), t.edges.push(l), t !== n && n.edges.push(l), this.edges.push(l), o[s] = l, l
				}
			}
		}, o.getEdgeByIndex = function(t) {
			var e = this.edgeData[rn](t);
			return this.edges[e]
		}, o.getEdge = function(t, i) {
			t instanceof e && (t = t.id), i instanceof e && (i = i.id);
			var n = this._edgesMap;
			return this._directed ? n[t + "-" + i] : n[t + "-" + i] || n[i + "-" + t]
		}, o[a] = function(t, e) {
			for (var i = this.nodes, n = i[qr], r = 0; n > r; r++) i[r][_i] >= 0 && t.call(e, i[r], r)
		}, o.eachEdge = function(t, e) {
			for (var i = this.edges, n = i[qr], r = 0; n > r; r++) i[r][_i] >= 0 && i[r].node1[_i] >= 0 && i[r].node2[_i] >= 0 && t.call(e, i[r], r)
		}, o.breadthFirstTraverse = function(t, i, n, r) {
			if (!i instanceof e && (i = this._nodesMap[i]), i) {
				for (var a = "out" === n ? "outEdges" : "in" === n ? "inEdges" : "edges", o = 0; o < this.nodes[qr]; o++) this.nodes[o].__visited = !1;
				if (!t.call(r, i, null))
					for (var s = [i]; s[qr];)
						for (var l = s.shift(), c = l[a], o = 0; o < c[qr]; o++) {
							var u = c[o],
								h = u.node1 === l ? u.node2 : u.node1;
							if (!h.__visited) {
								if (t.call(h, h, l)) return;
								s.push(h), h.__visited = !0
							}
						}
			}
		}, o[we] = function() {
			for (var t = this.data, e = this.edgeData, i = this.nodes, n = this.edges, r = 0, a = i[qr]; a > r; r++) i[r][_i] = -1;
			for (var r = 0, a = t.count(); a > r; r++) i[t[rn](r)][_i] = r;
			e[Ot](function(t) {
				var i = n[e[rn](t)];
				return i.node1[_i] >= 0 && i.node2[_i] >= 0
			});
			for (var r = 0, a = n[qr]; a > r; r++) n[r][_i] = -1;
			for (var r = 0, a = e.count(); a > r; r++) n[e[rn](r)][_i] = r
		}, o.setEdgeData = function(t) {
			this.edgeData = t, this._edgeDataSaved = t.cloneShallow()
		}, o.restoreData = function() {
			this.edgeData = this._edgeDataSaved.cloneShallow()
		}, o.clone = function() {
			for (var t = new r(this._directed), e = this.nodes, i = this.edges, n = 0; n < e[qr]; n++) t.addNode(e[n].id, e[n][_i]);
			for (var n = 0; n < i[qr]; n++) {
				var a = i[n];
				t.addEdge(a.node1.id, a.node2.id, a[_i])
			}
			return t
		}, e[$r] = {
			constructor: e,
			degree: function() {
				return this.edges[qr]
			},
			inDegree: function() {
				return this.inEdges[qr]
			},
			outDegree: function() {
				return this.outEdges[qr]
			},
			getModel: function(t) {
				if (!(this[_i] < 0)) {
					var e = this.hostGraph,
						i = e.data[en](this[_i]);
					return i[rr](t)
				}
			}
		}, i[$r][rr] = function(t) {
			if (!(this[_i] < 0)) {
				var e = this.hostGraph,
					i = e.data[en](this[_i]);
				return i[rr](t)
			}
		};
		var s = function(t, e) {
			return {
				getValue: function(i) {
					var n = this[t][e];
					return n.get(n.getDimension(i || "value"), this[_i])
				},
				setVisual: function(i, n) {
					this[_i] >= 0 && this[t][e][ue](this[_i], i, n)
				},
				getVisual: function(i, n) {
					return this[t][e][Lt](this[_i], i, n)
				},
				setLayout: function(i, n) {
					this[_i] >= 0 && this[t][e][Dt](this[_i], i, n)
				},
				getLayout: function() {
					return this[t][e][It](this[_i])
				},
				getGraphicEl: function() {
					return this[t][e][xi](this[_i])
				},
				getRawIndex: function() {
					return this[t][e][rn](this[_i])
				}
			}
		};
		return n.mixin(e, s("hostGraph", "data")), n.mixin(i, s("hostGraph", "edgeData")), r.Node = e, r.Edge = i, r
	}), e("echarts/chart/helper/createGraphFromNodeEdge", [Kr, Tt, "../../data/Graph", "../../data/helper/linkList", Ct, Yr], function(t) {
		var e = t(Tt),
			i = t("../../data/Graph"),
			n = t("../../data/helper/linkList"),
			r = t(Ct),
			a = t(Yr);
		return function(t, o, s, l) {
			for (var c = new i(l), u = 0; u < t[qr]; u++) c.addNode(a.retrieve(t[u].id, t[u].name, u), u);
			for (var h = [], d = [], u = 0; u < o[qr]; u++) {
				var f = o[u];
				c.addEdge(f.source, f[Bi], u) && (d.push(f), h.push(a.retrieve(f.id, f.source + " - " + f[Bi])))
			}
			var p = r(["value"], t),
				v = new e(p, s),
				m = new e(["value"], s);
			return v[Gt](t), m[Gt](d, h), c.setEdgeData(m), n.linkToGraph(v, c), c[we](), c
		}
	}), e("echarts/chart/graph/GraphSeries", [Kr, Tt, Yr, "../helper/createGraphFromNodeEdge", A], function(t) {
		var e = t(Tt),
			i = t(Yr),
			r = t("../helper/createGraphFromNodeEdge");
		return t(A)[Ht]({
			type: "series.graph",
			init: function(t) {
				this[m]("init", arguments), this[v] = function() {
					return this._categoriesData
				}, this._updateCategoriesData()
			},
			mergeOption: function(t) {
				this[m](Tn, arguments), this._updateCategoriesData()
			},
			getInitialData: function(t, e) {
				var i = t.edges || t.links,
					n = t.data || t.nodes;
				if (n && i) {
					var a = r(n, i, this, !0),
						o = a.data,
						s = this;
					return o.wrapMethod(en, function(t) {
						var e = s._categoriesModels,
							i = t[Dr](Mt),
							n = e[i];
						return n && (n[$n] = t[$n], t[$n] = n), t
					}), o
				}
			},
			restoreData: function() {
				this[m]("restoreData", arguments), this.getGraph().restoreData()
			},
			getGraph: function() {
				return this[sn]().graph
			},
			getEdgeData: function() {
				return this.getGraph().edgeData
			},
			getCategoriesData: function() {
				return this._categoriesData
			},
			_updateCategoriesData: function() {
				var t = i.map(this[Yn][n] || [], function(t) {
						return null != t.value ? t : i[Vr]({
							value: 0
						}, t)
					}),
					r = new e(["value"], this);
				r[Gt](t), this._categoriesData = r, this._categoriesModels = r[Rt](function(t) {
					return r[en](t, !0)
				})
			},
			setRoamZoom: function(t) {
				var e = this[Yn][l];
				e && (e.zoom = t)
			},
			setRoamPan: function(t, e) {
				var i = this[Yn][l];
				i && (i.x = t, i.y = e)
			},
			defaultOption: {
				zlevel: 0,
				z: 2,
				color: ["#61a0a8", "#d14a61", "#fd9c35", "#675bba", "#fec42c", "#dd4444", "#fd9c35", "#cd4870"],
				coordinateSystem: "view",
				legendHoverLink: !0,
				hoverAnimation: !0,
				layout: null,
				force: {
					initLayout: null,
					repulsion: 50,
					gravity: .1,
					edgeLength: 30,
					layoutAnimation: !0
				},
				left: "center",
				top: "center",
				symbol: "circle",
				symbolSize: 10,
				draggable: !1,
				roam: !1,
				roamDetail: {
					x: 0,
					y: 0,
					zoom: 1
				},
				nodeScaleRatio: .6,
				label: {
					normal: {
						show: !1
					},
					emphasis: {
						show: !0
					}
				},
				itemStyle: {
					normal: {},
					emphasis: {}
				},
				lineStyle: {
					normal: {
						color: "#aaa",
						width: 1,
						curveness: 0,
						opacity: .5
					},
					emphasis: {}
				}
			}
		})
	}), e("echarts/chart/helper/LinePath", [Kr, gt], function(t) {
		var e = t(gt),
			i = e.Line[$r],
			n = e.BezierCurve[$r];
		return e[qe]({
			type: "ec-line",
			style: {
				stroke: "#000",
				fill: null
			},
			shape: {
				x1: 0,
				y1: 0,
				x2: 0,
				y2: 0,
				percent: 1,
				cpx1: null,
				cpy1: null
			},
			buildPath: function(t, e) {
				(null == e.cpx1 || null == e.cpy1 ? i : n)[ri](t, e)
			},
			pointAt: function(t) {
				var e = this.shape;
				return null == e.cpx1 || null == e.cpy1 ? i.pointAt.call(this, t) : n.pointAt.call(this, t)
			}
		})
	}), e("echarts/chart/helper/Line", [Kr, yt, Mr, "./LinePath", gt, Yr, mt], function(t) {
		function e(t, e, i) {
			var n = e[Lt](i, "color"),
				r = e[Lt](i, dt),
				a = e[Lt](i, ft);
			if ("none" !== r) {
				d[qn](a) || (a = [a, a]);
				var o = l[pt](r, -a[0] / 2, -a[1] / 2, a[0], a[1], n);
				return o.name = t, o
			}
		}

		function i(t) {
			var e = new u({
				name: "line",
				style: {
					strokeNoScale: !0
				}
			});
			return n(e.shape, t), e
		}

		function n(t, e) {
			var i = e[0],
				n = e[1],
				r = e[2];
			t.x1 = i[0], t.y1 = i[1], t.x2 = n[0], t.y2 = n[1], t.percent = 1, r && (t.cpx1 = r[0], t.cpy1 = r[1])
		}

		function r(t) {
			return t.type === dt && "arrow" === t.shape.symbolType
		}

		function a() {
			var t = this,
				e = t.childOfName("line");
			if (this[Di] || e[Di]) {
				var i = t.childOfName("fromSymbol"),
					n = t.childOfName("toSymbol"),
					a = t.childOfName("label"),
					s = e.pointAt(0),
					l = e.pointAt(e.shape.percent),
					u = c.sub([], l, s);
				c.normalize(u, u), i && (i.attr(Nn, s), r(n) && n.attr(Xi, o(s, l))), n && (n.attr(Nn, l), r(i) && i.attr(Xi, o(l, s))), a.attr(Nn, l);
				var h, d, f;
				"end" === a.__position ? (h = [5 * u[0] + l[0], 5 * u[1] + l[1]], d = u[0] > .8 ? "left" : u[0] < -.8 ? "right" : cr, f = u[1] > .8 ? "top" : u[1] < -.8 ? hr : ur) : (h = [5 * -u[0] + s[0], 5 * -u[1] + s[1]], d = u[0] > .8 ? "right" : u[0] < -.8 ? "left" : cr, f = u[1] > .8 ? hr : u[1] < -.8 ? "top" : ur), a.attr({
					style: {
						textBaseline: a.__textBaseline || f,
						textAlign: a.__textAlign || d
					},
					position: h
				})
			}
		}

		function o(t, e) {
			return -Math.PI / 2 - Math.atan2(e[1] - t[1], e[0] - t[0])
		}

		function s(t, e, i, n) {
			h.Group.call(this), this._createLine(t, e, i, n)
		}
		var l = t(yt),
			c = t(Mr),
			u = t("./LinePath"),
			h = t(gt),
			d = t(Yr),
			f = t(mt),
			p = s[$r];
		return p.beforeUpdate = a, p._createLine = function(t, n, r, a) {
			var o = t[Kt],
				s = t[It](a),
				l = i(s);
			l.shape.percent = 0, h[Ve](l, {
				shape: {
					percent: 1
				}
			}, o), this.add(l);
			var c = new h.Text({
				name: "label"
			});
			if (this.add(c), n) {
				var u = e("fromSymbol", n, a);
				this.add(u), this._fromSymbolType = n[Lt](a, dt)
			}
			if (r) {
				var d = e("toSymbol", r, a);
				this.add(d), this._toSymbolType = r[Lt](a, dt)
			}
			this._updateCommonStl(t, n, r, a)
		}, p[vt] = function(t, i, r, a) {
			var o = t[Kt],
				s = this.childOfName("line"),
				l = t[It](a),
				c = {
					shape: {}
				};
			if (n(c.shape, l), h[Re](s, c, o), i) {
				var u = i[Lt](a, dt);
				if (this._fromSymbolType !== u) {
					var d = e("fromSymbol", i, a);
					this[Li](s.childOfName("fromSymbol")), this.add(d)
				}
				this._fromSymbolType = u
			}
			if (r) {
				var f = r[Lt](a, dt);
				if (f !== this._toSymbolType) {
					var p = e("toSymbol", r, a);
					this[Li](s.childOfName("toSymbol")), this.add(p)
				}
				this._toSymbolType = f
			}
			this._updateCommonStl(t, i, r, a)
		}, p._updateCommonStl = function(t, e, i, n) {
			var r = t[Kt],
				a = this.childOfName("line"),
				o = t[en](n),
				s = o[rr](S),
				l = s[rr](nr),
				c = o[rr](w),
				u = c[rr](nr),
				p = f.round(r[an](n));
			isNaN(p) && (p = t[nn](n)), a[He](d[Vr]({
				stroke: t[Lt](n, "color")
			}, o[rr]($)[Y]()));
			var v = this.childOfName("label");
			v[He]({
				text: s.get("show") ? r[ct](n, un) || p : "",
				textFont: l[er](),
				fill: l[Ee]() || t[Lt](n, "color")
			}), v[Fe] = {
				text: c.get("show") ? r[ct](n, hn) || p : "",
				textFont: l[er](),
				fill: u[Ee]()
			}, v.__textAlign = l.get("align"), v.__textBaseline = l.get(tr), v.__position = s.get(Nn), h[Ze](this, o[rr]("lineStyle.emphasis")[Y]())
		}, p[Si] = function(t, e, i, r) {
			var a = t[It](r),
				o = this.childOfName("line");
			n(o.shape, a), o.dirty(!0), e && e[xi](r).attr(Nn, a[0]), i && i[xi](r).attr(Nn, a[1])
		}, d[zr](s, h.Group), s
	}), e("echarts/chart/helper/LineDraw", [Kr, gt, "./Line"], function(t) {
		function e(t) {
			this._ctor = t || n, this.group = new i.Group
		}
		var i = t(gt),
			n = t("./Line"),
			r = e[$r];
		return r[vt] = function(t, e, i) {
			var n = this._lineData,
				r = this.group,
				a = this._ctor;
			t.diff(n).add(function(n) {
				var o = new a(t, e, i, n);
				t[kt](n, o), r.add(o)
			})[we](function(a, o) {
				var s = n[xi](o);
				s[vt](t, e, i, a), t[kt](a, s), r.add(s)
			})[Li](function(t) {
				r[Li](n[xi](t))
			})[lt](), this._lineData = t, this._fromData = e, this._toData = i
		}, r[Si] = function() {
			var t = this._lineData;
			t[gi](function(e, i) {
				e[Si](t, this._fromData, this._toData, i)
			}, this)
		}, r[Li] = function() {
			this.group[Mi]()
		}, e
	}), e("echarts/chart/graph/GraphView", [Kr, nt, "../helper/LineDraw", "../../component/helper/RoamController", At, gt, A], function(t) {
		var e = t(nt),
			i = t("../helper/LineDraw"),
			n = t("../../component/helper/RoamController"),
			r = t(At),
			a = t(gt);
		t(A)[qt]({
			type: "graph",
			init: function(t, r) {
				var a = new e,
					s = new i,
					l = this.group,
					c = new n(r.getZr(), l);
				l.add(a.group), l.add(s.group), this[K] = a, this._lineDraw = s, this[o] = c, this._firstRender = !0
			},
			render: function(t, e, i) {
				var n = t[St];
				if ("geo" === n.type || "view" === n.type) {
					var o = t[sn]();
					this[ee] = t;
					var s = this[K],
						l = this._lineDraw;
					s[vt](o);
					var c = o.graph.edgeData,
						u = t[Yn],
						d = r[cn](t, c, u.edges || u.links);
					d[h] = function(t) {
						var e = this[tn](t),
							i = e.data,
							n = i.source + " > " + i[Bi];
						return e.value && (n += ":" + e.value), n
					}, l[vt](c, null, null), c[gi](function(t) {
						t[Ci](function(t) {
							t[Kt] = d
						})
					}), o.graph.eachEdge(function(t) {
						t.__lineWidth = t[rr]($).get("width")
					});
					var f = this.group,
						p = {
							position: n[Nn],
							scale: n.scale
						};
					this._firstRender ? f.attr(p) : a[Re](f, p, t), this._nodeScaleRatio = t.get("nodeScaleRatio"), this._updateNodeAndLinkScale(), this._updateController(t, n, i), clearTimeout(this._layoutTimeout);
					var v = t.forceLayout,
						m = t.get("force.layoutAnimation");
					v && this._startForceLayoutIteration(v, m), o[gi](function(t, e) {
						var i = o[en](e).get(zi);
						i && v ? t.on("drag", function() {
							v.warmUp(), !this._layouting && this._startForceLayoutIteration(v, m), v.setFixed(e), o[Dt](e, t[Nn])
						}, this).on("dragend", function() {
							v.setUnfixed(e)
						}, this) : t.off("drag"), t.setDraggable(i)
					}, this), this._firstRender = !1
				}
			},
			_startForceLayoutIteration: function(t, e) {
				var i = this;
				! function n() {
					t.step(function(t) {
						i[Si](), (i._layouting = !t) && (e ? i._layoutTimeout = setTimeout(n, 16) : n())
					})
				}()
			},
			_updateController: function(t, e, i) {
				var n = this[o];
				n.rect = e.getViewRect(), n[s](t.get("roam")), n.off("pan").off("zoom").on("pan", function(e, n) {
					i[yn]({
						seriesId: t.id,
						type: "graphRoam",
						dx: e,
						dy: n
					})
				}).on("zoom", function(e, n, r) {
					i[yn]({
						seriesId: t.id,
						type: "graphRoam",
						zoom: e,
						originX: n,
						originY: r
					})
				}).on("zoom", this._updateNodeAndLinkScale, this);
			},
			_updateNodeAndLinkScale: function() {
				var t = this[ee],
					e = t[sn](),
					i = this.group,
					n = this._nodeScaleRatio,
					r = i.scale[0],
					a = (r - 1) * n + 1,
					o = [a / r, a / r];
				e[gi](function(t, e) {
					t.attr("scale", o)
				})
			},
			updateLayout: function(t, e) {
				this[K][Si](), this._lineDraw[Si]()
			},
			remove: function(t, e) {
				this[K] && this[K][Li](), this._lineDraw && this._lineDraw[Li]()
			}
		})
	}), e("echarts/chart/graph/roamAction", [Kr, A, "../../action/roamHelper"], function(t) {
		var e = t(A),
			i = t("../../action/roamHelper"),
			n = {
				type: "graphRoam",
				event: "graphRoam",
				update: "none"
			};
		e[Xt](n, function(t, e) {
			e[te]({
				mainType: "series",
				query: t
			}, function(e) {
				var n = e[St],
					r = e[rr](l),
					a = i.calcPanAndZoom(r, t);
				e.setRoamPan && e.setRoamPan(a.x, a.y), e.setRoamZoom && e.setRoamZoom(a.zoom), n && n.setPan(a.x, a.y), n && n.setZoom(a.zoom)
			})
		})
	}), e("echarts/chart/graph/categoryFilter", [Kr], function(t) {
		return function(t) {
			var e = t[Mn]({
				mainType: "legend"
			});
			e && e[qr] && t[ce]("graph", function(t) {
				var i = t.getCategoriesData(),
					n = t.getGraph(),
					r = n.data,
					a = i[Rt](i[nn]);
				r[Ot](function(t) {
					var i = r[en](t),
						n = i[Dr](Mt);
					if (null != n) {
						typeof n === Br && (n = a[n]);
						for (var o = 0; o < e[qr]; o++)
							if (!e[o].isSelected(n)) return !1
					}
					return !0
				})
			}, this)
		}
	}), e("echarts/chart/graph/categoryVisual", [Kr], function(t) {
		return function(t) {
			t[ce]("graph", function(t) {
				var e = t.get("color"),
					i = t.getCategoriesData(),
					n = t[sn](),
					r = {};
				i.each(function(t) {
					r[i[nn](t)] = t;
					var n = i[en](t),
						a = i[rn](t),
						o = n.get(ie) || e[a % e[qr]];
					i[ue](t, "color", o)
				}), i.count() && n.each(function(t) {
					var e = n[en](t),
						a = e[Dr](Mt);
					null != a && (typeof a === Gr && (a = r[a]), n[ue](t, "color", i[Lt](a, "color")))
				})
			})
		}
	}), e("echarts/chart/graph/simpleLayoutHelper", [Kr], function(t) {
		return function(t) {
			var e = t[St];
			if (!e || "view" === e.type) {
				var i = t.getGraph();
				i[a](function(t) {
					var e = t[rr]();
					t[zt]([+e.get("x"), +e.get("y")])
				}), i.eachEdge(function(t) {
					var e, i = t[rr]().get("lineStyle.normal.curveness") || 0,
						n = t.node1[Pt](),
						r = t.node2[Pt]();
					i > 0 && (e = [(n[0] + r[0]) / 2 - (n[1] - r[1]) * i, (n[1] + r[1]) / 2 - (r[0] - n[0]) * i]), t[zt]([n, r, e])
				})
			}
		}
	}), e("echarts/chart/graph/simpleLayout", [Kr, "./simpleLayoutHelper"], function(t) {
		var e = t("./simpleLayoutHelper");
		return function(t, i) {
			t[ce]("graph", function(t) {
				var i = t.get(c);
				i && "none" !== i || e(t)
			})
		}
	}), e("echarts/chart/graph/circularLayoutHelper", [Kr], function(t) {
		return function(t) {
			var e = t[St];
			if (!e || "view" === e.type) {
				var i = e[ir](),
					n = t[sn](),
					r = n.graph,
					o = 0,
					s = n[Et]("value"),
					l = 2 * Math.PI / (s || n.count()),
					c = i.width / 2 + i.x,
					u = i[gr] / 2 + i.y,
					h = Math.min(i.width, i[gr]) / 2;
				r[a](function(t) {
					var e = t.getValue("value");
					o += l * (s ? e : 2) / 2, t[zt]([h * Math.cos(o) + c, h * Math.sin(o) + u]), o += l * (s ? e : 2) / 2
				}), r.eachEdge(function(t) {
					var e, i = t[rr]().get("lineStyle.normal.curveness") || 0,
						n = t.node1[Pt](),
						r = t.node2[Pt]();
					i > 0 && (e = [c, u]), t[zt]([n, r, e])
				})
			}
		}
	}), e("echarts/chart/graph/circularLayout", [Kr, "./circularLayoutHelper"], function(t) {
		var e = t("./circularLayoutHelper");
		return function(t, i) {
			t[ce]("graph", function(t) {
				"circular" === t.get(c) && e(t)
			})
		}
	}), e("echarts/chart/graph/forceHelper", [Kr, Mr], function(t) {
		var e = t(Mr),
			i = e.scaleAndAdd;
		return function(t, n, r) {
			for (var a = r.rect, o = a.width, s = a[gr], l = [a.x + o / 2, a.y + s / 2], c = null == r.gravity ? .1 : r.gravity, u = 0; u < t[qr]; u++) {
				var h = t[u];
				h.p || (h.p = e[mr](o * (Math.random() - .5) + l[0], s * (Math.random() - .5) + l[1])), h.pp = e.clone(h.p), h.edges = null
			}
			var d = .6;
			return {
				warmUp: function() {
					d = .5
				},
				setFixed: function(e) {
					t[e].fixed = !0
				},
				setUnfixed: function(e) {
					t[e].fixed = !1
				},
				step: function(r) {
					for (var a = [], o = t[qr], s = 0; s < n[qr]; s++) {
						var u = n[s],
							h = u.n1,
							f = u.n2;
						e.sub(a, f.p, h.p);
						var p = e.len(a) - u.d,
							v = f.w / (h.w + f.w);
						e.normalize(a, a), !h.fixed && i(h.p, h.p, a, v * p * d), !f.fixed && i(f.p, f.p, a, -(1 - v) * p * d)
					}
					for (var s = 0; o > s; s++) {
						var m = t[s];
						m.fixed || (e.sub(a, l, m.p), e.scaleAndAdd(m.p, m.p, a, c * d))
					}
					for (var s = 0; o > s; s++)
						for (var h = t[s], g = s + 1; o > g; g++) {
							var f = t[g];
							e.sub(a, f.p, h.p);
							var p = e.len(a);
							0 === p && (e.set(a, Math.random() - .5, Math.random() - .5), p = 1);
							var y = (h.rep + f.rep) / p / p;
							!h.fixed && i(h.pp, h.pp, a, y), !f.fixed && i(f.pp, f.pp, a, -y)
						}
					for (var x = [], s = 0; o > s; s++) {
						var m = t[s];
						m.fixed || (e.sub(x, m.p, m.pp), e.scaleAndAdd(m.p, m.p, x, d), e.copy(m.pp, m.p))
					}
					d = .992 * d, r && r(t, n, .01 > d)
				}
			}
		}
	}), e("echarts/chart/graph/forceLayout", [Kr, "./forceHelper", mt, "./simpleLayoutHelper", "./circularLayoutHelper", Mr], function(t) {
		var e = t("./forceHelper"),
			i = t(mt),
			n = t("./simpleLayoutHelper"),
			r = t("./circularLayoutHelper"),
			a = t(Mr);
		return function(t, o) {
			t[ce]("graph", function(t) {
				if ("force" === t.get(c)) {
					var o = t.preservedPoints || {},
						s = t.getGraph(),
						l = s.data,
						u = s.edgeData,
						h = t[rr]("force"),
						d = h.get("initLayout");
					t.preservedPoints ? l.each(function(t) {
						var e = l.getId(t);
						l[Dt](t, o[e] || [NaN, NaN])
					}) : d && "none" !== d ? "circular" === d && r(t) : n(t);
					var f = l[Nt]("value"),
						p = h.get("repulsion"),
						v = h.get("edgeLength"),
						m = l[Rt]("value", function(t, e) {
							var n = l[It](e),
								r = i[Un](t, f, [0, p]) || p / 2;
							return {
								w: r,
								rep: r,
								p: !n || isNaN(n[0]) || isNaN(n[1]) ? null : n
							}
						}),
						g = u[Rt]("value", function(t, e) {
							var i = s.getEdgeByIndex(e);
							return {
								n1: m[i.node1[_i]],
								n2: m[i.node2[_i]],
								d: v,
								curveness: i[rr]().get("lineStyle.normal.curveness") || 0
							}
						}),
						y = t[St],
						x = y[ir](),
						_ = e(m, g, {
							rect: x,
							gravity: h.get("gravity")
						}),
						w = _.step;
					_.step = function(t) {
						for (var e = 0, i = m[qr]; i > e; e++) m[e].fixed && a.copy(m[e].p, s.getNodeByIndex(e)[Pt]());
						w(function(e, i, n) {
							for (var r = 0, a = e[qr]; a > r; r++) e[r].fixed || s.getNodeByIndex(r)[zt](e[r].p), o[l.getId(r)] = e[r].p;
							for (var r = 0, a = i[qr]; a > r; r++) {
								var c = i[r],
									u = c.n1.p,
									h = c.n2.p,
									d = [u, h];
								c.curveness > 0 && d.push([(u[0] + h[0]) / 2 - (u[1] - h[1]) * c.curveness, (u[1] + h[1]) / 2 - (h[0] - u[0]) * c.curveness]), s.getEdgeByIndex(r)[zt](d)
							}
							t && t(n)
						})
					}, t.forceLayout = _, t.preservedPoints = o, _.step()
				} else t.forceLayout = null
			})
		}
	}), e("echarts/chart/graph/createView", [Kr, "../../coord/View", I, "zrender/core/bbox"], function(t) {
		function e(t, e, i) {
			var r = t[k]();
			return r.aspect = i, n[zn](r, {
				width: e[_n](),
				height: e[xn]()
			})
		}
		var i = t("../../coord/View"),
			n = t(I),
			r = t("zrender/core/bbox");
		return function(t, n) {
			t[ce]("graph", function(t) {
				var a = t.get(St);
				if (!a || "view" === a) {
					var o = new i,
						s = t[sn](),
						c = s[Rt](function(t) {
							var e = s[en](t);
							return [+e.get("x"), +e.get("y")]
						}),
						u = [],
						h = [];
					r.fromPoints(c, u, h);
					var d = e(t, n, (h[0] - u[0]) / (h[1] - u[1]) || 1);
					(isNaN(u[0]) || isNaN(u[1])) && (u = [d.x, d.y], h = [d.x + d.width, d.y + d[gr]]);
					var f = h[0] - u[0],
						p = h[1] - u[1],
						v = d.width,
						m = d[gr];
					o = t[St] = new i, o.setBoundingRect(u[0], u[1], f, p), o.setViewRect(d.x, d.y, v, m);
					var g = t[rr](l);
					o.setPan(g.get("x") || 0, g.get("y") || 0), o.setZoom(g.get("zoom") || 1)
				}
			})
		}
	}), e("echarts/chart/graph", [Kr, X, Yr, "./graph/GraphSeries", "./graph/GraphView", "./graph/roamAction", "./graph/categoryFilter", j, "./graph/categoryVisual", "./graph/simpleLayout", "./graph/circularLayout", "./graph/forceLayout", "./graph/createView"], function(t) {
		var e = t(X),
			i = t(Yr);
		t("./graph/GraphSeries"), t("./graph/GraphView"), t("./graph/roamAction"), e[Yt](Xr, t("./graph/categoryFilter")), e[Ut]("chart", i.curry(t(j), "graph", ht, null)), e[Ut]("chart", t("./graph/categoryVisual")), e[jt](t("./graph/simpleLayout")), e[jt](t("./graph/circularLayout")), e[jt](t("./graph/forceLayout")), e.registerCoordinateSystem("graphView", {
			create: t("./graph/createView")
		})
	}), e("echarts/chart/gauge/GaugeSeries", [Kr, Tt, _t, Yr], function(t) {
		var e = t(Tt),
			i = t(_t),
			n = t(Yr),
			r = i[Vr]({
				type: "series.gauge",
				getInitialData: function(t, i) {
					var r = new e(["value"], this),
						a = t.data || [];
					return n[qn](a) || (a = [a]), r[Gt](a), r
				},
				defaultOption: {
					zlevel: 0,
					z: 2,
					center: ["50%", "50%"],
					legendHoverLink: !0,
					radius: "75%",
					startAngle: 225,
					endAngle: -45,
					clockwise: !0,
					min: 0,
					max: 100,
					splitNumber: 10,
					axisLine: {
						show: !0,
						lineStyle: {
							color: [
								[.2, "#91c7ae"],
								[.8, "#63869e"],
								[1, "#c23531"]
							],
							width: 30
						}
					},
					splitLine: {
						show: !0,
						length: 30,
						lineStyle: {
							color: "#eee",
							width: 2,
							type: "solid"
						}
					},
					axisTick: {
						show: !0,
						splitNumber: 5,
						length: 8,
						lineStyle: {
							color: "#eee",
							width: 1,
							type: "solid"
						}
					},
					axisLabel: {
						show: !0,
						textStyle: {
							color: "auto"
						}
					},
					pointer: {
						show: !0,
						length: "80%",
						width: 8
					},
					itemStyle: {
						normal: {
							color: "auto"
						}
					},
					title: {
						show: !0,
						offsetCenter: [0, "-40%"],
						textStyle: {
							color: "#333",
							fontSize: 15
						}
					},
					detail: {
						show: !0,
						backgroundColor: "rgba(0,0,0,0)",
						borderWidth: 0,
						borderColor: "#ccc",
						width: 100,
						height: 40,
						offsetCenter: [0, "40%"],
						textStyle: {
							color: "auto",
							fontSize: 30
						}
					}
				}
			});
		return r
	}), e("echarts/chart/gauge/PointerPath", [Kr, ai], function(t) {
		return t(ai)[Vr]({
			type: "echartsGaugePointer",
			shape: {
				angle: 0,
				width: 10,
				r: 10,
				x: 0,
				y: 0
			},
			buildPath: function(t, e) {
				var i = Math.cos,
					n = Math.sin,
					r = e.r,
					a = e.width,
					o = e.angle,
					s = e.x - i(o) * a * (a >= r / 3 ? 1 : 2),
					l = e.y - n(o) * a * (a >= r / 3 ? 1 : 2);
				o = e.angle - Math.PI / 2, t[ui](s, l), t[ci](e.x + i(o) * a, e.y + n(o) * a), t[ci](e.x + i(e.angle) * r, e.y + n(e.angle) * r), t[ci](e.x - i(o) * a, e.y - n(o) * a), t[ci](s, l)
			}
		})
	}), e("echarts/chart/gauge/GaugeView", [Kr, "./PointerPath", gt, mt, it], function(t) {
		function e(t, e) {
			var i = t.get(cr),
				n = e[_n](),
				r = e[xn](),
				a = Math.min(n, r),
				o = s(i[0], e[_n]()),
				l = s(i[1], e[xn]()),
				c = s(t.get(vn), a / 2);
			return {
				cx: o,
				cy: l,
				r: c
			}
		}

		function i(t, e) {
			return e && (typeof e === Gr ? t = e[jn]("{value}", t) : typeof e === Er && (t = e(t))), t
		}
		var n = t("./PointerPath"),
			a = t(gt),
			o = t(mt),
			s = o[Wn],
			l = 2 * Math.PI,
			c = t(it)[Vr]({
				type: "gauge",
				render: function(t, i, n) {
					this.group[Mi]();
					var r = t.get("axisLine.lineStyle.color"),
						a = e(t, n);
					this._renderMain(t, i, n, r, a)
				},
				_renderMain: function(t, e, i, n, r) {
					for (var o = this.group, s = t[rr](x), c = s[rr](se), u = t.get(Je), h = -t.get(ti) / 180 * Math.PI, d = -t.get(Qe) / 180 * Math.PI, f = (d - h) % l, p = h, v = c.get("width"), m = 0; m < n[qr]; m++) {
						var d = h + f * n[m][0],
							g = new a[Xe]({
								shape: {
									startAngle: p,
									endAngle: d,
									cx: r.cx,
									cy: r.cy,
									clockwise: u,
									r0: r.r - v,
									r: r.r
								},
								silent: !0
							});
						g[He]({
							fill: n[m][1]
						}), g[He](c[Y](["color", Jn, Qn])), o.add(g), p = d
					}
					var y = function(t) {
						if (0 >= t) return n[0][1];
						for (var e = 0; e < n[qr]; e++)
							if (n[e][0] >= t && (0 === e ? 0 : n[e - 1][0]) < t) return n[e][1];
						return n[e - 1][1]
					};
					if (!u) {
						var _ = h;
						h = d, d = _
					}
					this._renderTicks(t, e, i, y, r, h, d, u), this._renderPointer(t, e, i, y, r, h, d, u), this._renderTitle(t, e, i, y, r), this._renderDetail(t, e, i, y, r)
				},
				_renderTicks: function(t, e, n, r, s, l, c, u) {
					for (var h = this.group, d = s.cx, f = s.cy, p = s.r, v = t.get("min"), m = t.get("max"), g = t[rr]("splitLine"), y = t[rr](_), x = t[rr](z), w = t.get(B), b = y.get(B), M = g.get(qr), S = y.get(qr), A = l, C = (c - l) / w, T = C / b, k = g[rr](se)[Y](), L = y[rr](se)[Y](), D = x[rr](nr), I = 0; w >= I; I++) {
						var P = Math.cos(A),
							V = Math.sin(A);
						if (g.get("show")) {
							var R = new a.Line({
								shape: {
									x1: P * p + d,
									y1: V * p + f,
									x2: P * (p - M) + d,
									y2: V * (p - M) + f
								},
								style: k,
								silent: !0
							});
							"auto" === k[kr] && R[He]({
								stroke: r(I / w)
							}), h.add(R)
						}
						if (x.get("show")) {
							var O = i(o.round(I / w * (m - v) + v), x.get(Qi)),
								E = new a.Text({
									style: {
										text: O,
										x: P * (p - M - 5) + d,
										y: V * (p - M - 5) + f,
										fill: D[Ee](),
										textFont: D[er](),
										textBaseline: -.4 > V ? "top" : V > .4 ? hr : ur,
										textAlign: -.4 > P ? "left" : P > .4 ? "right" : cr
									},
									silent: !0
								});
							"auto" === E.style.fill && E[He]({
								fill: r(I / w)
							}), h.add(E)
						}
						if (y.get("show") && I !== w) {
							for (var N = 0; b >= N; N++) {
								var P = Math.cos(A),
									V = Math.sin(A),
									G = new a.Line({
										shape: {
											x1: P * p + d,
											y1: V * p + f,
											x2: P * (p - S) + d,
											y2: V * (p - S) + f
										},
										silent: !0,
										style: L
									});
								"auto" === L[kr] && G[He]({
									stroke: r((I + N / b) / w)
								}), h.add(G), A += T
							}
							A -= T
						} else A += C
					}
				},
				_renderPointer: function(t, e, i, l, c, u, h, d) {
					var f = o[Un],
						p = [+t.get("min"), +t.get("max")],
						v = [u, h];
					d || (v = v[r]());
					var m = t[sn](),
						g = this._data,
						y = this.group;
					m.diff(g).add(function(e) {
						var i = new n({
							shape: {
								angle: u
							}
						});
						a[Re](i, {
							shape: {
								angle: f(m.get("value", e), p, v)
							}
						}, t), y.add(i), m[kt](e, i)
					})[we](function(e, i) {
						var n = g[xi](i);
						a[Re](n, {
							shape: {
								angle: f(m.get("value", e), p, v)
							}
						}, t), y.add(n), m[kt](e, n)
					})[Li](function(t) {
						var e = g[xi](t);
						y[Li](e)
					})[lt](), m[gi](function(t, e) {
						var i = m[en](e),
							n = i[rr]("pointer");
						t.attr({
							shape: {
								x: c.cx,
								y: c.cy,
								width: n.get("width"),
								r: s(n.get(qr), c.r)
							},
							style: i[rr](b)[ut]()
						}), "auto" === t.style.fill && t[He]("fill", l((m.get("value", e) - p[0]) / (p[1] - p[0]))), a[Ze](t, i[rr](M)[ut]())
					}), this._data = m
				},
				_renderTitle: function(t, e, i, n, r) {
					var o = t[rr]("title");
					if (o.get("show")) {
						var l = o[rr](nr),
							c = o.get("offsetCenter"),
							u = r.cx + s(c[0], r.r),
							h = r.cy + s(c[1], r.r),
							d = new a.Text({
								style: {
									x: u,
									y: h,
									text: t[sn]()[nn](0),
									fill: l[Ee](),
									textFont: l[er](),
									textAlign: "center",
									textBaseline: "middle"
								}
							});
						this.group.add(d)
					}
				},
				_renderDetail: function(t, e, n, r, o) {
					var l = t[rr]("detail"),
						c = t.get("min"),
						u = t.get("max");
					if (l.get("show")) {
						var h = l[rr](nr),
							d = l.get("offsetCenter"),
							f = o.cx + s(d[0], o.r),
							p = o.cy + s(d[1], o.r),
							v = s(l.get("width"), o.r),
							m = s(l.get(gr), o.r),
							g = t[sn]().get("value", 0),
							y = new a.Rect({
								shape: {
									x: f - v / 2,
									y: p - m / 2,
									width: v,
									height: m
								},
								style: {
									text: i(g, l.get(Qi)),
									fill: l.get(me),
									textFill: h[Ee](),
									textFont: h[er]()
								}
							});
						"auto" === y.style.textFill && y[He]("textFill", r((g - c) / (u - c))), y[He](l[ut](["color"])), this.group.add(y)
					}
				}
			});
		return c
	}), e("echarts/chart/gauge", [Kr, "./gauge/GaugeSeries", "./gauge/GaugeView"], function(t) {
		t("./gauge/GaugeSeries"), t("./gauge/GaugeView")
	}), e("echarts/chart/funnel/FunnelSeries", [Kr, Tt, At, Ct, A], function(t) {
		var e = t(Tt),
			i = t(At),
			n = t(Ct);
		t(A)[Ht]({
			type: "series.funnel",
			init: function(t) {
				this[m]("init", arguments), this[v] = function() {
					return this._dataBeforeProcessed
				}, this._defaultLabelLine(t)
			},
			getInitialData: function(t, i) {
				var r = n(["value"], t.data),
					a = new e(r, this);
				return a[Gt](t.data), a
			},
			_defaultLabelLine: function(t) {
				i[dn](t.labelLine, ["show"]);
				var e = t.labelLine[un],
					n = t.labelLine[hn];
				e.show = e.show && t.label[un].show, n.show = n.show && t.label[hn].show
			},
			defaultOption: {
				zlevel: 0,
				z: 2,
				legendHoverLink: !0,
				left: 80,
				top: 60,
				right: 80,
				bottom: 60,
				minSize: "0%",
				maxSize: "100%",
				sort: "descending",
				gap: 0,
				funnelAlign: "center",
				label: {
					normal: {
						show: !0,
						position: "outer"
					},
					emphasis: {
						show: !0
					}
				},
				labelLine: {
					normal: {
						show: !0,
						length: 20,
						lineStyle: {
							width: 1,
							type: "solid"
						}
					},
					emphasis: {}
				},
				itemStyle: {
					normal: {
						borderColor: "#fff",
						borderWidth: 1
					},
					emphasis: {}
				}
			}
		})
	}), e("echarts/chart/funnel/FunnelView", [Kr, gt, Yr, it], function(t) {
		function e(t, e) {
			function i() {
				o[Pi] = o.hoverIgnore, s[Pi] = s.hoverIgnore
			}

			function r() {
				o[Pi] = o.normalIgnore, s[Pi] = s.normalIgnore
			}
			n.Group.call(this);
			var a = new n[je],
				o = new n[Ue],
				s = new n.Text;
			this.add(a), this.add(o), this.add(s), this[vt](t, e, !0), this.on(hn, i).on(un, r).on(Ge, i).on(Be, r)
		}

		function i(t, e, i, n) {
			var r = n[rr](nr),
				a = n.get(Nn),
				o = a === lr || "inner" === a || a === cr;
			return {
				fill: r[Ee]() || (o ? "#fff" : t[Lt](e, "color")),
				textFont: r[er](),
				text: t[Kt][ct](e, i) || t[nn](e)
			}
		}
		var n = t(gt),
			r = t(Yr),
			a = e[$r],
			o = [oe, un, Tr];
		a[vt] = function(t, e, i) {
			var a = this[En](0),
				s = t[Kt],
				l = t[en](e),
				c = t[It](e),
				u = t[en](e).get(o);
			u = null == u ? 1 : u, i ? (a[ii]({
				points: c[Ke]
			}), a[He]({
				opacity: 0
			}), n[Re](a, {
				style: {
					opacity: u
				}
			}, s)) : n[Ve](a, {
				shape: {
					points: c[Ke]
				}
			}, s);
			var h = l[rr](oe),
				d = t[Lt](e, "color");
			a[He](r[sr]({
				fill: d
			}, h[rr](un)[ut]())), a[Fe] = h[rr](hn)[ut](), this._updateLabel(t, e), n[Ze](this)
		}, a._updateLabel = function(t, e) {
			var r = this[En](1),
				a = this[En](2),
				o = t[Kt],
				s = t[en](e),
				l = t[It](e),
				c = l.label,
				u = t[Lt](e, "color");
			n[Re](r, {
				shape: {
					points: c.linePoints || c.linePoints
				}
			}, o), n[Re](a, {
				style: {
					x: c.x,
					y: c.y
				}
			}, o), a.attr({
				style: {
					textAlign: c[vi],
					textBaseline: c[pi],
					textFont: c.font
				},
				rotation: c[Xi],
				origin: [c.x, c.y],
				z2: 10
			});
			var h = s[rr](S),
				d = s[rr](w),
				f = s[rr]("labelLine.normal"),
				p = s[rr]("labelLine.emphasis");
			a[He](i(t, e, un, h)), a[Pi] = a.normalIgnore = !h.get("show"), a.hoverIgnore = !d.get("show"), r[Pi] = r.normalIgnore = !f.get("show"), r.hoverIgnore = !p.get("show"), r[He]({
				stroke: u
			}), r[He](f[rr](se)[Y]()), a[Fe] = i(t, e, hn, d), r[Fe] = p[rr](se)[Y]()
		}, r[zr](e, n.Group);
		var s = t(it)[Vr]({
			type: "funnel",
			render: function(t, i, n) {
				var r = t[sn](),
					a = this._data,
					o = this.group;
				r.diff(a).add(function(t) {
					var i = new e(r, t);
					r[kt](t, i), o.add(i)
				})[we](function(t, e) {
					var i = a[xi](e);
					i[vt](r, t), o.add(i), r[kt](t, i)
				})[Li](function(t) {
					var e = a[xi](t);
					o[Li](e)
				})[lt](), this._data = r
			},
			remove: function() {
				this.group[Mi](), this._data = null
			}
		});
		return s
	}), e("echarts/chart/funnel/funnelLayout", [Kr, I, mt], function(t) {
		function e(t, e) {
			return a[zn](t[k](), {
				width: e[_n](),
				height: e[xn]()
			})
		}

		function i(t, e) {
			for (var i = t[Rt]("value", function(t) {
					return t
				}), n = [], r = "ascending" === e, a = 0, o = t.count(); o > a; a++) n[a] = a;
			return n.sort(function(t, e) {
				return r ? i[t] - i[e] : i[e] - i[t]
			}), n
		}

		function n(t) {
			t.each(function(e) {
				var i, n, r, a, o = t[en](e),
					s = o[rr](S),
					l = s.get(Nn),
					c = o[rr]("labelLine.normal"),
					u = t[It](e),
					h = u[Ke],
					d = "inner" === l || l === lr || l === cr;
				if (d) n = (h[0][0] + h[1][0] + h[2][0] + h[3][0]) / 4, r = (h[0][1] + h[1][1] + h[2][1] + h[3][1]) / 4, i = cr, a = [
					[n, r],
					[n, r]
				];
				else {
					var f, p, v, m = c.get(qr);
					"left" === l ? (f = (h[3][0] + h[0][0]) / 2, p = (h[3][1] + h[0][1]) / 2, v = f - m, n = v - 5, i = "right") : (f = (h[1][0] + h[2][0]) / 2, p = (h[1][1] + h[2][1]) / 2, v = f + m, n = v + 5, i = "left");
					var g = p;
					a = [
						[f, p],
						[v, g]
					], r = g
				}
				u.label = {
					linePoints: a,
					x: n,
					y: r,
					textBaseline: "middle",
					textAlign: i,
					inside: d
				}
			})
		}
		var a = t(I),
			o = t(mt),
			s = o[Wn];
		return function(t, a) {
			t[ce]("funnel", function(t) {
				var l = t[sn](),
					c = t.get("sort"),
					u = e(t, a),
					h = i(l, c),
					d = [s(t.get("minSize"), u.width), s(t.get("maxSize"), u.width)],
					f = l[Nt]("value"),
					p = t.get("min"),
					v = t.get("max");
				null == p && (p = Math.min(f[0], 0)), null == v && (v = f[1]);
				var m = t.get("funnelAlign"),
					g = t.get("gap"),
					y = (u[gr] - g * (l.count() - 1)) / l.count(),
					x = u.y,
					_ = function(t, e) {
						var i, n = l.get("value", t) || 0,
							r = o[Un](n, [p, v], d, !0);
						switch (m) {
							case "left":
								i = u.x;
								break;
							case cr:
								i = u.x + (u.width - r) / 2;
								break;
							case "right":
								i = u.x + u.width - r
						}
						return [
							[i, e],
							[i + r, e]
						]
					};
				"ascending" === c && (y = -y, g = -g, x += u[gr], h = h[r]());
				for (var w = 0; w < h[qr]; w++) {
					var b = h[w],
						M = h[w + 1],
						S = _(b, x),
						A = _(M, x + y);
					x += y + g, l[Dt](b, {
						points: S[Nr](A.slice()[r]())
					})
				}
				n(l)
			})
		}
	}), e("echarts/chart/funnel", [Kr, Yr, X, "./funnel/FunnelSeries", "./funnel/FunnelView", "../visual/dataColor", "./funnel/funnelLayout", "../processor/dataFilter"], function(t) {
		var e = t(Yr),
			i = t(X);
		t("./funnel/FunnelSeries"), t("./funnel/FunnelView"), i[Ut]("chart", e.curry(t("../visual/dataColor"), "funnel")), i[jt](t("./funnel/funnelLayout")), i[Yt](Xr, e.curry(t("../processor/dataFilter"), "funnel"))
	}), e("echarts/coord/parallel/ParallelAxis", [Kr, Yr, "../Axis"], function(t) {
		var e = t(Yr),
			i = t("../Axis"),
			n = function(t, e, n, r, a) {
				i.call(this, t, e, n), this.type = r || "value", this[pn] = a
			};
		return n[$r] = {
			constructor: n,
			model: null
		}, e[zr](n, i), n
	}), e("echarts/coord/parallel/Parallel", [Kr, I, D, Yr, "./ParallelAxis", _r, Mr], function(t) {
		function e(t, e, i) {
			this._axesMap = {}, this._axesLayout = {}, this[Zt] = t[Zt], this._rect, this._init(t, e, i)
		}
		var i = t(I),
			n = t(D),
			r = t(Yr),
			a = t("./ParallelAxis"),
			o = t(_r),
			s = t(Mr),
			l = r.each,
			u = Math.PI;
		return e[$r] = {
			type: "parallel",
			constructor: e,
			_init: function(t, e, i) {
				var r = t[Zt],
					o = t.parallelAxisIndex;
				l(r, function(t, i) {
					var r = o[i],
						s = e[mn]("parallelAxis", r),
						l = this._axesMap[t] = new a(t, n[E](s), [0, 0], s.get("type"), r),
						c = l.type === Mt;
					l[et] = c && s.get(G), l[J] = s.get(J), s.axis = l, l.model = s
				}, this), this._updateAxesFromSeries(t, e)
			},
			_updateAxesFromSeries: function(t, e) {
				e[le](function(i) {
					if (t.contains(i, e)) {
						var n = i[sn]();
						l(this[Zt], function(t) {
							this._axesMap[t].scale[q](n[Nt](t))
						}, this)
					}
				}, this)
			},
			resize: function(t, e) {
				this._rect = i[zn](t[k](), {
					width: e[_n](),
					height: e[xn]()
				}), this._layoutAxes(t)
			},
			getRect: function() {
				return this._rect
			},
			_layoutAxes: function(t) {
				var e = this._rect,
					i = t.get(c),
					r = this._axesMap,
					a = this[Zt],
					s = [e.width, e[gr]],
					h = i === On ? 0 : 1,
					d = s[h],
					f = s[1 - h],
					p = [0, f];
				l(r, function(t) {
					var e = t[J] ? 1 : 0;
					t[W](p[e], p[1 - e]), n[Z](t, t.model)
				}), l(a, function(t, n) {
					var r = d * n / (a[qr] - 1),
						s = {
							horizontal: {
								x: r,
								y: f
							},
							vertical: {
								x: 0,
								y: r
							}
						},
						l = {
							horizontal: u / 2,
							vertical: 0
						},
						c = [s[i].x + e.x, s[i].y + e.y],
						h = l[i],
						p = o[mr]();
					o[Zi](p, p, h), o[vr](p, p, c), this._axesLayout[t] = {
						position: c,
						rotation: h,
						transform: p,
						tickDirection: 1,
						labelDirection: 1
					}
				}, this)
			},
			getAxis: function(t) {
				return this._axesMap[t]
			},
			dataToPoint: function(t, e) {
				return this.axisCoordToPoint(this._axesMap[e][R](t), e)
			},
			eachActiveState: function(t, e, i) {
				for (var n = this[Zt], r = this._axesMap, a = !1, o = 0, s = n[qr]; s > o; o++) r[n[o]].model.getActiveState() !== un && (a = !0);
				for (var l = 0, c = t.count(); c > l; l++) {
					var u, h = t[Bt](n, l);
					if (a) {
						u = "active";
						for (var o = 0, s = n[qr]; s > o; o++) {
							var d = n[o],
								f = r[d].model.getActiveState(h[o], o);
							if ("inactive" === f) {
								u = "inactive";
								break
							}
						}
					} else u = un;
					e.call(i, u, l)
				}
			},
			axisCoordToPoint: function(t, e) {
				var i = this._axesLayout[e],
					n = [t, 0];
				return s[yr](n, n, i[Ui]), n
			},
			getAxisLayout: function(t) {
				return r.clone(this._axesLayout[t])
			}
		}, e
	}), e("echarts/coord/parallel/parallelCreator", [Kr, "./Parallel", "../../CoordinateSystem"], function(t) {
		function e(t, e) {
			var n = [];
			return t[te]("parallel", function(r, a) {
				var o = new i(r, t, e);
				o.name = "parallel_" + a, o[_e](r, e), r[St] = o, o.model = r, n.push(o)
			}), t[le](function(t) {
				if ("parallel" === t.get(St)) {
					var e = t.get("parallelIndex");
					t[St] = n[e]
				}
			}), n
		}
		var i = t("./Parallel");
		t("../../CoordinateSystem")[gn]("parallel", {
			create: e
		})
	}), e("echarts/coord/parallel/AxisModel", [Kr, P, Yr, "../../model/mixin/makeStyleMapper", "../axisModelCreator", mt, "../axisModelCommonMixin"], function(t) {
		function e(t, e) {
			return e.type || (e.data ? Mt : "value")
		}
		var i = t(P),
			n = t(Yr),
			r = t("../../model/mixin/makeStyleMapper"),
			a = t("../axisModelCreator"),
			o = t(mt),
			s = i[Vr]({
				type: "baseParallelAxis",
				axis: null,
				activeIntervals: [],
				getAreaSelectStyle: function() {
					return r([
						["fill", "color"],
						[Lr, Jn],
						[kr, Qn],
						["width", "width"],
						[Tr, Tr]
					]).call(this[rr]("areaSelectStyle"))
				},
				setActiveIntervals: function(t) {
					var e = this.activeIntervals = n.clone(t);
					if (e)
						for (var i = e[qr] - 1; i >= 0; i--) o.asc(e[i])
				},
				getActiveState: function(t) {
					var e = this.activeIntervals;
					if (!e[qr]) return un;
					if (null == t) return "inactive";
					for (var i = 0, n = e[qr]; n > i; i++)
						if (e[i][0] <= t && t <= e[i][1]) return "active";
					return "inactive"
				}
			}),
			l = {
				type: "value",
				dim: null,
				parallelIndex: null,
				areaSelectStyle: {
					width: 20,
					borderWidth: 1,
					borderColor: "rgba(160,197,232)",
					color: "rgba(160,197,232)",
					opacity: .3
				},
				z: 10
			};
		return n.merge(s[$r], t("../axisModelCommonMixin")), a("parallel", s, e, l), s
	}), e("echarts/coord/parallel/ParallelModel", [Kr, Yr, P, "./AxisModel"], function(t) {
		var e = t(Yr),
			i = t(P);
		t("./AxisModel"), i[Vr]({
			type: "parallel",
			dependencies: ["parallelAxis"],
			coordinateSystem: null,
			dimensions: null,
			parallelAxisIndex: null,
			defaultOption: {
				zlevel: 0,
				z: 0,
				left: 80,
				top: 60,
				right: 80,
				bottom: 60,
				layout: "horizontal",
				parallelAxisDefault: null
			},
			init: function() {
				i[$r].init.apply(this, arguments), this[Tn]({})
			},
			mergeOption: function(t) {
				var i = this[Yn];
				t && e.merge(i, t), this._initDimensions()
			},
			contains: function(t, e) {
				var i = t.get("parallelIndex");
				return null != i && e[mn]("parallel", i) === this
			},
			_initDimensions: function() {
				var t = this[Zt] = [],
					i = this.parallelAxisIndex = [],
					n = e[Xr](this.dependentModels.parallelAxis, function(t) {
						return t.get("parallelIndex") === this.componentIndex
					});
				e.each(n, function(e) {
					t.push("dim" + e.get("dim")), i.push(e.componentIndex)
				})
			}
		})
	}), e("echarts/component/axis/parallelAxisAction", [Kr, A], function(t) {
		var e = t(A),
			i = {
				type: "axisAreaSelect",
				event: "axisAreaSelected",
				update: "updateVisual"
			};
		e[Xt](i, function(t, e) {
			e[te]({
				mainType: "parallelAxis",
				query: t
			}, function(e) {
				e.axis.model.setActiveIntervals(t.intervals)
			})
		})
	}), e("echarts/component/helper/SelectController", [Kr, Yi, Yr, gt], function(t) {
		function e(t, e, i) {
			p.call(this), this.type = t, this.zr = e, this.opt = v.clone(i), this.group = new m.Group, this._containerRect = null, this._track = [], this._dragging, this._cover, this._disabled = !0, this._handlers = {
				mousedown: y(r, this),
				mousemove: y(a, this),
				mouseup: y(o, this)
			}, x(S, function(t) {
				this.zr.on(t, this._handlers[t])
			}, this)
		}

		function i(t, e) {
			var i = this.group[Gi](t, e);
			return !this._containerRect || this._containerRect[fi](i[0], i[1])
		}

		function n(t) {
			var e = t.event;
			e.preventDefault && e.preventDefault()
		}

		function r(t) {
			if (!(this._disabled || t[Bi] && t[Bi][zi])) {
				n(t);
				var e = t[ke],
					r = t[Te];
				i.call(this, e, r) && (this._dragging = !0, this._track = [
					[e, r]
				])
			}
		}

		function a(t) {
			this._dragging && !this._disabled && (n(t), s.call(this, t))
		}

		function o(t) {
			this._dragging && !this._disabled && (n(t), s.call(this, t, !0), this._dragging = !1, this._track = [])
		}

		function s(t, e) {
			var n = t[ke],
				r = t[Te];
			if (i.call(this, n, r)) {
				this._track.push([n, r]);
				var a = l.call(this) ? A[this.type].getRanges.call(this) : [];
				c.call(this, a), this[wi](g, v.clone(a)), e && this[wi]("selectEnd", v.clone(a))
			}
		}

		function l() {
			var t = this._track;
			if (!t[qr]) return !1;
			var e = t[t[qr] - 1],
				i = t[0],
				n = e[0] - i[0],
				r = e[1] - i[1],
				a = b(n * n + r * r, .5);
			return a > M
		}

		function c(t) {
			var e = A[this.type];
			t && t[qr] ? (this._cover || (this._cover = e[mr].call(this), this.group.add(this._cover)), e[we].call(this, t)) : (this.group[Li](this._cover), this._cover = null)
		}

		function u() {
			var t = this.group,
				e = t[Wi];
			e && e[Li](t)
		}

		function h() {
			var t = this.opt;
			return new m.Rect({
				style: {
					stroke: t[kr],
					fill: t.fill,
					lineWidth: t[Lr],
					opacity: t[Tr]
				}
			})
		}

		function d() {
			return v.map(this._track, function(t) {
				return this.group[Gi](t[0], t[1])
			}, this)
		}

		function f() {
			var t = d.call(this),
				e = t[qr] - 1;
			return 0 > e && (e = 0), [t[0], t[e]]
		}
		var p = t(Yi),
			v = t(Yr),
			m = t(gt),
			y = v.bind,
			x = v.each,
			_ = Math.min,
			w = Math.max,
			b = Math.pow,
			M = 2,
			S = [Ie, De, Le];
		e[$r] = {
			constructor: e,
			enable: function(t, e) {
				this._disabled = !1, u.call(this), this._containerRect = e !== !1 ? e || t[ir]() : null, t.add(this.group)
			},
			update: function(t) {
				c.call(this, t && v.clone(t))
			},
			disable: function() {
				this._disabled = !0, u.call(this)
			},
			dispose: function() {
				this.disable(), x(S, function(t) {
					this.zr.off(t, this._handlers[t])
				}, this)
			}
		}, v.mixin(e, p);
		var A = {
			line: {
				create: h,
				getRanges: function() {
					var t = f.call(this),
						e = _(t[0][0], t[1][0]),
						i = w(t[0][0], t[1][0]);
					return [
						[e, i]
					]
				},
				update: function(t) {
					var e = t[0],
						i = this.opt.width;
					this._cover[ii]({
						x: e[0],
						y: -i / 2,
						width: e[1] - e[0],
						height: i
					})
				}
			},
			rect: {
				create: h,
				getRanges: function() {
					var t = f.call(this),
						e = [_(t[1][0], t[0][0]), _(t[1][1], t[0][1])],
						i = [w(t[1][0], t[0][0]), w(t[1][1], t[0][1])];
					return [
						[
							[e[0], i[0]],
							[e[1], i[1]]
						]
					]
				},
				update: function(t) {
					var e = t[0];
					this._cover[ii]({
						x: e[0][0],
						y: e[1][0],
						width: e[0][1] - e[0][0],
						height: e[1][1] - e[1][0]
					})
				}
			}
		};
		return e
	}), e("echarts/component/axis/ParallelAxisView", [Kr, Yr, "./AxisBuilder", "../helper/SelectController", A], function(t) {
		function e(t, e, i) {
			return i && "axisAreaSelect" === i.type && e[Mn]({
				mainType: "parallelAxis",
				query: i
			})[0] === t
		}
		var i = t(Yr),
			n = t("./AxisBuilder"),
			r = t("../helper/SelectController"),
			a = [x, z, _, "axisName"],
			o = t(A)[Ft]({
				type: "parallelAxis",
				_selectController: null,
				render: function(t, r, o, s) {
					if (!e(t, r, s) && (this.axisModel = t, this.api = o, this.group[Mi](), t.get("show"))) {
						var l = r[mn]("parallel", t.get("parallelIndex"))[St],
							c = t.getAreaSelectStyle(),
							u = c.width,
							h = l.getAxisLayout(t.axis.dim),
							d = i[Vr]({
								strokeContainThreshold: u,
								silent: !(u > 0)
							}, h),
							f = new n(t, d);
						i.each(a, f.add, f);
						var p = f.getGroup();
						this.group.add(p), this._buildSelectController(p, c, t, o)
					}
				},
				_buildSelectController: function(t, e, n, a) {
					var o = n.axis,
						l = this._selectController;
					l || (l = this._selectController = new r("line", a.getZr(), e), l.on(g, i.bind(this._onSelected, this))), l[s](t);
					var c = i.map(n.activeIntervals, function(t) {
						return [o[R](t[0], !0), o[R](t[1], !0)]
					});
					l[we](c)
				},
				_onSelected: function(t) {
					var e = this.axisModel,
						n = e.axis,
						r = i.map(t, function(t) {
							return [n[V](t[0], !0), n[V](t[1], !0)]
						});
					this.api[yn]({
						type: "axisAreaSelect",
						parallelAxisId: e.id,
						intervals: r
					})
				},
				remove: function() {
					this._selectController && this._selectController.disable()
				},
				dispose: function() {
					this._selectController && (this._selectController[fe](), this._selectController = null)
				}
			});
		return o
	}), e("echarts/component/parallelAxis", [Kr, "../coord/parallel/parallelCreator", "./axis/parallelAxisAction", "./axis/ParallelAxisView"], function(t) {
		t("../coord/parallel/parallelCreator"), t("./axis/parallelAxisAction"), t("./axis/ParallelAxisView")
	}), e("echarts/coord/parallel/parallelPreprocessor", [Kr, Yr, At], function(t) {
		function e(t) {
			if (!t.parallel) {
				var e = !1;
				n.each(t[An], function(t) {
					t && "parallel" === t.type && (e = !0)
				}), e && (t.parallel = [{}])
			}
		}

		function i(t) {
			var e = r[fn](t.parallelAxis);
			n.each(e, function(e) {
				if (n[Ln](e)) {
					var i = e.parallelIndex || 0,
						a = r[fn](t.parallel)[i];
					a && a.parallelAxisDefault && n.merge(e, a.parallelAxisDefault, !1)
				}
			})
		}
		var n = t(Yr),
			r = t(At);
		return function(t) {
			e(t), i(t)
		}
	}), e("echarts/component/parallel", [Kr, "../coord/parallel/parallelCreator", "../coord/parallel/ParallelModel", "./parallelAxis", X, "../coord/parallel/parallelPreprocessor"], function(t) {
		t("../coord/parallel/parallelCreator"), t("../coord/parallel/ParallelModel"), t("./parallelAxis");
		var e = t(X);
		e[Ft]({
			type: "parallel"
		}), e[$t](t("../coord/parallel/parallelPreprocessor"))
	}), e("echarts/chart/parallel/ParallelSeries", [Kr, Tt, Yr, _t], function(t) {
		function e(t, e, i) {
			var r = t.get("data"),
				a = +e[jn]("dim", "");
			r && r[qr] && n.each(i, function(t) {
				if (t) {
					var e = n[Zr](r, t[a]);
					t[a] = e >= 0 ? e : NaN
				}
			})
		}
		var i = t(Tt),
			n = t(Yr),
			r = t(_t);
		return r[Vr]({
			type: "series.parallel",
			dependencies: ["parallel"],
			getInitialData: function(t, r) {
				var a = r[mn]("parallel", this.get("parallelIndex")),
					o = a[Zt],
					s = a.parallelAxisIndex,
					l = t.data,
					c = n.map(o, function(t, i) {
						var n = r[mn]("parallelAxis", s[i]);
						return n.get("type") === Mt ? (e(n, t, l), {
							name: t,
							type: "ordinal"
						}) : t
					}),
					u = new i(c, this);
				return u[Gt](l), u
			},
			defaultOption: {
				zlevel: 0,
				z: 2,
				coordinateSystem: "parallel",
				parallelIndex: 0,
				label: {
					normal: {
						show: !1
					},
					emphasis: {
						show: !1
					}
				},
				inactiveOpacity: .05,
				activeOpacity: 1,
				lineStyle: {
					normal: {
						width: 2,
						opacity: .45,
						type: "solid"
					}
				},
				animationEasing: "linear"
			}
		})
	}), e("echarts/chart/parallel/ParallelView", [Kr, gt, Yr, it], function(t) {
		function e(t, e, i) {
			var n = t.model,
				r = t[L](),
				o = new a.Rect({
					shape: {
						x: r.x,
						y: r.y,
						width: r.width,
						height: r[gr]
					}
				}),
				s = n.get(c) === On ? "width" : gr;
			return o[ii](s, 0), a[Ve](o, {
				shape: {
					width: r.width,
					height: r[gr]
				}
			}, e, i), o
		}

		function i(t, e, i, n) {
			for (var a = 0, o = e[qr] - 1; o > a; a++) {
				var s = e[a],
					l = e[a + 1],
					c = t[a],
					u = t[a + 1];
				n(r(c, i[Q](s).type) || r(u, i[Q](l).type) ? null : [i[rt](c, s), i[rt](u, l)], a)
			}
		}

		function n(t) {
			return new a[Ue]({
				shape: {
					points: t
				},
				silent: !0
			})
		}

		function r(t, e) {
			return e === Mt ? null == t : null == t || isNaN(t)
		}
		var a = t(gt),
			o = t(Yr),
			s = t(it)[Vr]({
				type: "parallel",
				init: function() {
					this._dataGroup = new a.Group, this.group.add(this._dataGroup), this._data
				},
				render: function(t, r, s, l) {
					function c(t) {
						var e = f[Bt](m, t),
							r = new a.Group;
						d.add(r), i(e, m, v, function(t, e) {
							t && r.add(n(t))
						}), f[kt](t, r)
					}

					function u(e, r) {
						var o = f[Bt](m, e),
							s = p[xi](r),
							l = [],
							c = 0;
						i(o, m, v, function(e, i) {
							var r = s[En](c++);
							e && !r ? l.push(n(e)) : e && a[Re](r, {
								shape: {
									points: e
								}
							}, t)
						});
						for (var u = s.childCount() - 1; u >= c; u--) s[Li](s[En](u));
						for (var u = 0, h = l[qr]; h > u; u++) s.add(l[u]);
						f[kt](e, s)
					}

					function h(t) {
						var e = p[xi](t);
						d[Li](e)
					}
					var d = this._dataGroup,
						f = t[sn](),
						p = this._data,
						v = t[St],
						m = v[Zt];
					f.diff(p).add(c)[we](u)[Li](h)[lt](), f[gi](function(t, e) {
						var i = f[en](e),
							n = i[rr]($);
						t[Bn](function(t) {
							t[He](o[Vr](n[Y](), {
								stroke: f[Lt](e, "color"),
								opacity: f[Lt](e, Tr)
							}))
						})
					}), this._data || d.setClipPath(e(v, t, function() {
						d.removeClipPath()
					})), this._data = f
				},
				remove: function() {
					this._dataGroup && this._dataGroup[Mi](), this._data = null
				}
			});
		return s
	}), e("echarts/chart/parallel/parallelVisual", [Kr], function(t) {
		return function(t, e) {
			t[ce]("parallel", function(e) {
				var i = e[rr](b),
					n = t.get("color"),
					r = i.get("color") || n[e[ln] % n[qr]],
					a = e.get("inactiveOpacity"),
					o = e.get("activeOpacity"),
					s = e[rr]($)[Y](),
					l = e[St],
					c = e[sn](),
					u = {
						normal: s[Tr],
						active: o,
						inactive: a
					};
				l.eachActiveState(c, function(t, e) {
					c[ue](e, Tr, u[t])
				}), c[de]("color", r)
			})
		}
	}), e("echarts/chart/parallel", [Kr, X, "../component/parallel", "./parallel/ParallelSeries", "./parallel/ParallelView", "./parallel/parallelVisual"], function(t) {
		var e = t(X);
		t("../component/parallel"), t("./parallel/ParallelSeries"), t("./parallel/ParallelView"), e[Ut]("chart", t("./parallel/parallelVisual"))
	}), e("echarts/chart/sankey/SankeySeries", [Kr, _t, "../helper/createGraphFromNodeEdge"], function(t) {
		var e = t(_t),
			i = t("../helper/createGraphFromNodeEdge");
		return e[Vr]({
			type: "series.sankey",
			layoutInfo: null,
			getInitialData: function(t, e) {
				var n = t.edges || t.links,
					r = t.data || t.nodes;
				if (r && n) {
					var a = i(r, n, this, !0);
					return a.data
				}
			},
			getGraph: function() {
				return this[sn]().graph
			},
			getEdgeData: function() {
				return this.getGraph().edgeData
			},
			defaultOption: {
				zlevel: 0,
				z: 2,
				coordinateSystem: "view",
				layout: null,
				left: "5%",
				top: "5%",
				right: "20%",
				bottom: "5%",
				nodeWidth: 20,
				nodeGap: 8,
				layoutIterations: 32,
				label: {
					normal: {
						show: !0,
						position: "right",
						textStyle: {
							color: "#000",
							fontSize: 12
						}
					},
					emphasis: {
						show: !0
					}
				},
				itemStyle: {
					normal: {
						borderWidth: 1,
						borderColor: "#aaa"
					}
				},
				lineStyle: {
					normal: {
						color: "#314656",
						opacity: .2,
						curveness: .5
					},
					emphasis: {
						opacity: .6
					}
				},
				color: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
				animationEasing: "linear",
				animationDuration: 1e3
			}
		})
	}), e("echarts/chart/sankey/SankeyView", [Kr, gt, At, Yr, A], function(t) {
		function e(t, e, n) {
			var r = new i.Rect({
				shape: {
					x: t.x - 10,
					y: t.y - 10,
					width: 0,
					height: t[gr] + 20
				}
			});
			return i[Ve](r, {
				shape: {
					width: t.width + 20,
					height: t[gr] + 20
				}
			}, e, n), r
		}
		var i = t(gt),
			n = t(At),
			r = t(Yr),
			o = i[qe]({
				shape: {
					x1: 0,
					y1: 0,
					x2: 0,
					y2: 0,
					cpx1: 0,
					cpy1: 0,
					cpx2: 0,
					cpy2: 0,
					extent: 0
				},
				buildPath: function(t, e) {
					var i = e.extent / 2;
					t[ui](e.x1, e.y1 - i), t[li](e.cpx1, e.cpy1 - i, e.cpx2, e.cpy2 - i, e.x2, e.y2 - i), t[ci](e.x2, e.y2 + i), t[li](e.cpx2, e.cpy2 + i, e.cpx1, e.cpy1 + i, e.x1, e.y1 + i), t[si]()
				}
			});
		return t(A)[qt]({
			type: "sankey",
			_model: null,
			render: function(t, s, l) {
				var c = t.getGraph(),
					u = this.group,
					d = t.layoutInfo;
				this[ee] = t, u[Mi](), u[Nn] = [d.x, d.y];
				var f = c.edgeData,
					p = t[Yn],
					v = n[cn](t, f, p.edges || p.links);
				v[h] = function(t) {
					var e = this[tn](t),
						i = e.data,
						n = i.source + " -- " + i[Bi];
					return e.value && (n += ":" + e.value), n
				}, c[a](function(e) {
					var n = e[Pt](),
						a = e[rr](),
						o = a[rr](S),
						s = o[rr](nr),
						l = a[rr](w),
						c = l[rr](nr),
						h = new i.Rect({
							shape: {
								x: n.x,
								y: n.y,
								width: e[Pt]().dx,
								height: e[Pt]().dy
							},
							style: {
								text: o.get("show") ? t[ct](e[_i], un) || e.id : "",
								textFont: s[er](),
								textFill: s[Ee](),
								textPosition: o.get(Nn)
							}
						});
					h[He](r[sr]({
						fill: e[Vt]("color")
					}, a[rr](b)[ut]())), i[Ze](h, r[Vr](e[rr](M), {
						text: l.get("show") ? t[ct](e[_i], hn) || e.id : "",
						textFont: c[er](),
						textFill: c[Ee](),
						textPosition: l.get(Nn)
					})), u.add(h)
				}), c.eachEdge(function(t) {
					var e = new o;
					e[_i] = t[_i], e[Kt] = v;
					var n = t[rr]($),
						r = n.get("curveness"),
						a = t.node1[Pt](),
						s = t.node2[Pt](),
						l = t[Pt]();
					e.shape.extent = Math.max(1, l.dy);
					var c = a.x + a.dx,
						h = a.y + l.sy + l.dy / 2,
						d = s.x,
						f = s.y + l.ty + l.dy / 2,
						p = c * (1 - r) + d * r,
						m = h,
						g = c * r + d * (1 - r),
						y = f;
					e[ii]({
						x1: c,
						y1: h,
						x2: d,
						y2: f,
						cpx1: p,
						cpy1: m,
						cpx2: g,
						cpy2: y
					}), e[He](n[ut]()), i[Ze](e, t[rr]("lineStyle.emphasis")[ut]()), u.add(e)
				}), this._data || u.setClipPath(e(u[ir](), t, function() {
					u.removeClipPath()
				})), this._data = t[sn]()
			}
		})
	}), e("echarts/util/array/nest", [Kr, Yr], function(t) {
		function e() {
			function t(e, r) {
				if (r >= n[qr]) return e;
				for (var a = -1, o = e[qr], s = n[r++], l = {}, c = {}; ++a < o;) {
					var u = s(e[a]),
						h = c[u];
					h ? h.push(e[a]) : c[u] = [e[a]]
				}
				return i.each(c, function(e, i) {
					l[i] = t(e, r)
				}), l
			}

			function e(t, a) {
				if (a >= n[qr]) return t;
				var o = [],
					s = r[a++];
				return i.each(t, function(t, i) {
					o.push({
						key: i,
						values: e(t, a)
					})
				}), s ? o.sort(function(t, e) {
					return s(t.key, e.key)
				}) : o
			}
			var n = [],
				r = [];
			return {
				key: function(t) {
					return n.push(t), this
				},
				sortKeys: function(t) {
					return r[n[qr] - 1] = t, this
				},
				entries: function(i) {
					return e(t(i, 0), 0)
				}
			}
		}
		var i = t(Yr);
		return e
	}), e("echarts/chart/sankey/sankeyLayout", [Kr, I, "../../util/array/nest", Yr], function(t) {
		function e(t, e) {
			return M[zn](t[k](), {
				width: e[_n](),
				height: e[xn]()
			})
		}

		function i(t, e, i, n, r, o, s) {
			a(t, i, r), l(t, e, o, n, s), v(t)
		}

		function n(t) {
			A.each(t, function(t) {
				var e = y(t.outEdges, b),
					i = y(t.inEdges, b),
					n = Math.max(e, i);
				t[zt]({
					value: n
				}, !0)
			})
		}

		function a(t, e, i) {
			for (var n = t, r = null, a = 0, l = 0; n[qr];) r = [], A.each(n, function(t) {
				t[zt]({
					x: a
				}, !0), t[zt]({
					dx: e
				}, !0), A.each(t.outEdges, function(t) {
					r.push(t.node2)
				})
			}), n = r, ++a;
			o(t, a), l = (i - e) / (a - 1), s(t, l)
		}

		function o(t, e) {
			A.each(t, function(t) {
				t.outEdges[qr] || t[zt]({
					x: e - 1
				}, !0)
			})
		}

		function s(t, e) {
			A.each(t, function(t) {
				var i = t[Pt]().x * e;
				t[zt]({
					x: i
				}, !0)
			})
		}

		function l(t, e, i, n, r) {
			var a = S().key(function(t) {
				return t[Pt]().x
			}).sortKeys(w).entries(t).map(function(t) {
				return t.values
			});
			c(t, a, e, i, n), u(a, n, i);
			for (var o = 1; r > 0; r--) o *= .99, h(a, o), u(a, n, i), f(a, o), u(a, n, i)
		}

		function c(t, e, i, n, r) {
			var a = [];
			A.each(e, function(t) {
				var e = t[qr],
					i = 0;
				A.each(t, function(t) {
					i += t[Pt]().value
				});
				var o = (n - (e - 1) * r) / i;
				a.push(o)
			}), a.sort(function(t, e) {
				return t - e
			});
			var o = a[0];
			A.each(e, function(t) {
				A.each(t, function(t, e) {
					t[zt]({
						y: e
					}, !0);
					var i = t[Pt]().value * o;
					t[zt]({
						dy: i
					}, !0)
				})
			}), A.each(i, function(t) {
				var e = +t.getValue() * o;
				t[zt]({
					dy: e
				}, !0)
			})
		}

		function u(t, e, i) {
			A.each(t, function(t) {
				var n, r, a, o = 0,
					s = t[qr];
				for (t.sort(_), a = 0; s > a; a++) {
					if (n = t[a], r = o - n[Pt]().y, r > 0) {
						var l = n[Pt]().y + r;
						n[zt]({
							y: l
						}, !0)
					}
					o = n[Pt]().y + n[Pt]().dy + e
				}
				if (r = o - e - i, r > 0) {
					var l = n[Pt]().y - r;
					for (n[zt]({
							y: l
						}, !0), o = n[Pt]().y, a = s - 2; a >= 0; --a) n = t[a], r = n[Pt]().y + n[Pt]().dy + e - o, r > 0 && (l = n[Pt]().y - r, n[zt]({
						y: l
					}, !0)), o = n[Pt]().y
				}
			})
		}

		function h(t, e) {
			A.each(t.slice()[r](), function(t) {
				A.each(t, function(t) {
					if (t.outEdges[qr]) {
						var i = y(t.outEdges, d) / y(t.outEdges, b),
							n = t[Pt]().y + (i - x(t)) * e;
						t[zt]({
							y: n
						}, !0)
					}
				})
			})
		}

		function d(t) {
			return x(t.node2) * t.getValue()
		}

		function f(t, e) {
			A.each(t, function(t) {
				A.each(t, function(t) {
					if (t.inEdges[qr]) {
						var i = y(t.inEdges, p) / y(t.inEdges, b),
							n = t[Pt]().y + (i - x(t)) * e;
						t[zt]({
							y: n
						}, !0)
					}
				})
			})
		}

		function p(t) {
			return x(t.node1) * t.getValue()
		}

		function v(t) {
			A.each(t, function(t) {
				t.outEdges.sort(m), t.inEdges.sort(g)
			}), A.each(t, function(t) {
				var e = 0,
					i = 0;
				A.each(t.outEdges, function(t) {
					t[zt]({
						sy: e
					}, !0), e += t[Pt]().dy
				}), A.each(t.inEdges, function(t) {
					t[zt]({
						ty: i
					}, !0), i += t[Pt]().dy
				})
			})
		}

		function m(t, e) {
			return t.node2[Pt]().y - e.node2[Pt]().y
		}

		function g(t, e) {
			return t.node1[Pt]().y - e.node1[Pt]().y
		}

		function y(t, e) {
			var i, n = 0,
				r = t[qr],
				a = -1;
			if (1 === arguments[qr])
				for (; ++a < r;) i = +t[a], isNaN(i) || (n += i);
			else
				for (; ++a < r;) i = +e.call(t, t[a], a), isNaN(i) || (n += i);
			return n
		}

		function x(t) {
			return t[Pt]().y + t[Pt]().dy / 2
		}

		function _(t, e) {
			return t[Pt]().y - e[Pt]().y
		}

		function w(t, e) {
			return e > t ? -1 : t > e ? 1 : t == e ? 0 : NaN
		}

		function b(t) {
			return t.getValue()
		}
		var M = t(I),
			S = t("../../util/array/nest"),
			A = t(Yr);
		return function(t, r) {
			t[ce]("sankey", function(t) {
				var a = t.get("nodeWidth"),
					o = t.get("nodeGap"),
					s = e(t, r);
				t.layoutInfo = s;
				var l = s.width,
					c = s[gr],
					u = t.getGraph(),
					h = u.nodes,
					d = u.edges;
				n(h);
				var f = h[Xr](function(t) {
						return 0 === t[Pt]().value
					}),
					p = 0 !== f[qr] ? 0 : t.get("layoutIterations");
				i(h, d, a, o, l, c, p)
			})
		}
	}), e("echarts/chart/sankey/sankeyVisual", [Kr, i], function(t) {
		var e = t(i);
		return function(t, i) {
			t[ce]("sankey", function(t) {
				var i = t.getGraph(),
					n = i.nodes;
				n.sort(function(t, e) {
					return t[Pt]().value - e[Pt]().value
				});
				var r = n[0][Pt]().value,
					a = n[n[qr] - 1][Pt]().value;
				n.forEach(function(i) {
					var n = new e({
							type: "color",
							mappingMethod: "linear",
							dataExtent: [r, a],
							visual: t.get("color")
						}),
						o = n.mapValueToVisual(i[Pt]().value);
					i[de]("color", o)
				})
			})
		}
	}), e("echarts/chart/sankey", [Kr, X, "./sankey/SankeySeries", "./sankey/SankeyView", "./sankey/sankeyLayout", "./sankey/sankeyVisual"], function(t) {
		var e = t(X);
		t("./sankey/SankeySeries"), t("./sankey/SankeyView"), e[jt](t("./sankey/sankeyLayout")), e[Ut]("chart", t("./sankey/sankeyVisual"))
	}), e("echarts/chart/helper/WhiskerBoxDraw", [Kr, Yr, gt, ai], function(t) {
		function e(t, e, i, n) {
			o.Group.call(this), this.bodyIndex, this.whiskerIndex, this.styleUpdater = i, this._createContent(t, e, n), this[vt](t, e, n), this._seriesModel
		}

		function i(t, e, i) {
			return a.map(t, function(t) {
				return t = t.slice(), t[e] = i.initBaseline, t
			})
		}

		function n(t) {
			var e = {};
			return a.each(t, function(t, i) {
				e["ends" + i] = t
			}), e
		}

		function r(t) {
			this.group = new o.Group, this.styleUpdater = t
		}
		var a = t(Yr),
			o = t(gt),
			s = t(ai),
			l = s[Vr]({
				type: "whiskerInBox",
				shape: {},
				buildPath: function(t, e) {
					for (var i in e)
						if (0 === i[Zr]("ends")) {
							var n = e[i];
							t[ui](n[0][0], n[0][1]), t[ci](n[1][0], n[1][1])
						}
				}
			}),
			c = e[$r];
		c._createContent = function(t, e, r) {
			var s = t[It](e),
				c = s.chartLayout === On ? 1 : 0,
				u = 0;
			this.add(new o[je]({
				shape: {
					points: r ? i(s.bodyEnds, c, s) : s.bodyEnds
				},
				style: {
					strokeNoScale: !0
				},
				z2: 100
			})), this.bodyIndex = u++;
			var h = a.map(s.whiskerEnds, function(t) {
				return r ? i(t, c, s) : t
			});
			this.add(new l({
				shape: n(h),
				style: {
					strokeNoScale: !0
				},
				z2: 100
			})), this.whiskerIndex = u++
		}, c[vt] = function(t, e, i) {
			var r = this._seriesModel = t[Kt],
				a = t[It](e),
				s = o[i ? Ve : Re];
			s(this[En](this.bodyIndex), {
				shape: {
					points: a.bodyEnds
				}
			}, r), s(this[En](this.whiskerIndex), {
				shape: n(a.whiskerEnds)
			}, r), this.styleUpdater.call(null, this, t, e)
		}, a[zr](e, o.Group);
		var u = r[$r];
		return u[vt] = function(t) {
			var i = this.group,
				n = this._data,
				r = this.styleUpdater;
			t.diff(n).add(function(n) {
				if (t.hasValue(n)) {
					var a = new e(t, n, r, !0);
					t[kt](n, a), i.add(a)
				}
			})[we](function(a, o) {
				var s = n[xi](o);
				return t.hasValue(a) ? (s ? s[vt](t, a) : s = new e(t, a, r), i.add(s), void t[kt](a, s)) : void i[Li](s)
			})[Li](function(t) {
				var e = n[xi](t);
				e && i[Li](e)
			})[lt](), this._data = t
		}, u[Li] = function() {
			var t = this.group,
				e = this._data;
			this._data = null, e && e[gi](function(e) {
				e && t[Li](e)
			})
		}, r
	}), e("echarts/chart/helper/whiskerBoxCommon", [Kr, Tt, Ct, "../helper/WhiskerBoxDraw"], function(t) {
		function e(t) {
			return null == t.value ? t : t.value
		}
		var i = t(Tt),
			n = t(Ct),
			r = t("../helper/WhiskerBoxDraw"),
			a = {
				_baseAxisDim: null,
				getInitialData: function(t, r) {
					var a, o, s = r[mn]("xAxis", this.get("xAxisIndex")),
						l = r[mn]("yAxis", this.get("yAxisIndex")),
						u = s.get("type"),
						h = l.get("type");
					u === Mt ? (t[c] = On, a = s[bt](), o = !0) : h === Mt ? (t[c] = Rn, a = l[bt](), o = !0) : t[c] = t[c] || On, this._baseAxisDim = t[c] === On ? "x" : "y";
					var d = t.data,
						f = this[Zt] = ["base"][Nr](this.valueDimensions);
					n(f, d);
					var p = new i(f, this);
					return p[Gt](d, a ? a.slice() : null, function(t, i, n, r) {
						var a = e(t);
						return o ? "base" === i ? n : a[r - 1] : a[r]
					}), p
				},
				getDimensionsOnAxis: function(t) {
					var e = this.valueDimensions.slice(),
						i = ["base"],
						n = {
							horizontal: {
								x: i,
								y: e
							},
							vertical: {
								x: e,
								y: i
							}
						};
					return n[this.get(c)][t]
				},
				getBaseAxisModel: function() {
					var t = this._baseAxisDim;
					return this[ar][mn](t + "Axis", this.get(t + "AxisIndex"))
				}
			},
			o = {
				init: function() {
					var t = this._whiskerBoxDraw = new r(this.getStyleUpdater());
					this.group.add(t.group)
				},
				render: function(t, e, i) {
					this._whiskerBoxDraw[vt](t[sn]())
				},
				remove: function(t) {
					this._whiskerBoxDraw[Li]()
				}
			};
		return {
			seriesModelMixin: a,
			viewMixin: o
		}
	}), e("echarts/chart/boxplot/BoxplotSeries", [Kr, Yr, _t, "../helper/whiskerBoxCommon"], function(t) {
		var e = t(Yr),
			i = t(_t),
			n = t("../helper/whiskerBoxCommon"),
			r = i[Vr]({
				type: "series.boxplot",
				dependencies: ["xAxis", "yAxis", "grid"],
				valueDimensions: ["min", "Q1", "median", "Q3", "max"],
				dimensions: null,
				defaultOption: {
					zlevel: 0,
					z: 2,
					coordinateSystem: "cartesian2d",
					legendHoverLink: !0,
					hoverAnimation: !0,
					xAxisIndex: 0,
					yAxisIndex: 0,
					layout: null,
					boxWidth: [7, 50],
					itemStyle: {
						normal: {
							color: "#fff",
							borderWidth: 1
						},
						emphasis: {
							borderWidth: 2,
							shadowBlur: 5,
							shadowOffsetX: 2,
							shadowOffsetY: 2,
							shadowColor: "rgba(0,0,0,0.4)"
						}
					},
					animationEasing: "elasticOut",
					animationDuration: 800
				}
			});
		return e.mixin(r, n.seriesModelMixin, !0), r
	}), e("echarts/chart/boxplot/BoxplotView", [Kr, Yr, it, gt, "../helper/whiskerBoxCommon"], function(t) {
		function e(t, e, i) {
			var n = e[en](i),
				a = n[rr](s),
				o = e[Lt](i, "color"),
				c = a[ut]([Qn]),
				u = t[En](t.whiskerIndex);
			u.style.set(c), u.style[kr] = o, u.dirty();
			var h = t[En](t.bodyIndex);
			h.style.set(c), h.style[kr] = o, h.dirty();
			var d = n[rr](l)[ut]();
			r[Ze](t, d)
		}
		var i = t(Yr),
			n = t(it),
			r = t(gt),
			a = t("../helper/whiskerBoxCommon"),
			o = n[Vr]({
				type: "boxplot",
				getStyleUpdater: function() {
					return e
				}
			});
		i.mixin(o, a.viewMixin, !0);
		var s = [oe, un],
			l = [oe, hn];
		return o
	}), e("echarts/chart/boxplot/boxplotVisual", [Kr], function(t) {
		var e = [oe, un, Qn];
		return function(t, i) {
			var n = t.get("color");
			t.eachRawSeriesByType("boxplot", function(i) {
				var r = n[i[ln] % n[qr]],
					a = i[sn]();
				a[de]({
					legendSymbol: "roundRect",
					color: i.get(e) || r
				}), t[he](i) || a.each(function(t) {
					var i = a[en](t);
					a[ue](t, {
						color: i.get(e, !0)
					})
				})
			})
		}
	}), e("echarts/chart/boxplot/boxplotLayout", [Kr, Yr, mt], function(t) {
		function e(t) {
			var e = [],
				i = [];
			return t[ce]("boxplot", function(t) {
				var n = t.getBaseAxisModel().axis,
					a = r[Zr](i, n);
				0 > a && (a = i[qr], i[a] = n, e[a] = {
					axis: n,
					seriesModels: []
				}), e[a].seriesModels.push(t)
			}), e
		}

		function i(t) {
			var e, i, n = t.axis,
				a = t.seriesModels,
				l = a[qr],
				c = t.boxWidthList = [],
				u = t.boxOffsetList = [],
				h = [];
			if (n.type === Mt) i = n[tt]();
			else {
				var d = 0;
				s(a, function(t) {
					d = Math.max(d, t[sn]().count())
				}), e = n[at](), Math.abs(e[1] - e[0]) / d
			}
			s(a, function(t) {
				var e = t.get("boxWidth");
				r[qn](e) || (e = [e, e]), h.push([o(e[0], i) || 0, o(e[1], i) || 0])
			});
			var f = .8 * i - 2,
				p = f / l * .3,
				v = (f - p * (l - 1)) / l,
				m = v / 2 - f / 2;
			s(a, function(t, e) {
				u.push(m), m += p + v, c.push(Math.min(Math.max(v, h[e][0]), h[e][1]))
			})
		}

		function n(t, e, i) {
			var n = t[St],
				r = t[sn](),
				a = t[Zt],
				o = t.get(c),
				s = i / 2;
			r.each(a, function() {
				function t(t) {
					var i = [];
					i[f] = h, i[p] = t;
					var r;
					return isNaN(h) || isNaN(t) ? r = [NaN, NaN] : (r = n[rt](i), r[f] += e), r
				}

				function i(t, e) {
					var i = t.slice(),
						n = t.slice();
					i[f] += s, n[f] -= s, e ? x.push(i, n) : x.push(n, i)
				}

				function l(t) {
					var e = [t.slice(), t.slice()];
					e[0][f] -= s, e[1][f] += s, y.push(e)
				}
				var c = arguments,
					u = a[qr],
					h = c[0],
					d = c[u],
					f = o === On ? 0 : 1,
					p = 1 - f,
					v = t(c[3]),
					m = t(c[1]),
					g = t(c[5]),
					y = [
						[m, t(c[2])],
						[g, t(c[4])]
					];
				l(m), l(g), l(v);
				var x = [];
				i(y[0][1], 0), i(y[1][1], 1), r[Dt](d, {
					chartLayout: o,
					initBaseline: v[p],
					median: v,
					bodyEnds: x,
					whiskerEnds: y
				})
			})
		}
		var r = t(Yr),
			a = t(mt),
			o = a[Wn],
			s = r.each;
		return function(t, r) {
			var a = e(t);
			s(a, function(t) {
				var e = t.seriesModels;
				e[qr] && (i(t), s(e, function(e, i) {
					n(e, t.boxOffsetList[i], t.boxWidthList[i])
				}))
			})
		}
	}), e("echarts/chart/boxplot", [Kr, X, "./boxplot/BoxplotSeries", "./boxplot/BoxplotView", "./boxplot/boxplotVisual", "./boxplot/boxplotLayout"], function(t) {
		var e = t(X);
		t("./boxplot/BoxplotSeries"), t("./boxplot/BoxplotView"), e[Ut]("chart", t("./boxplot/boxplotVisual")), e[jt](t("./boxplot/boxplotLayout"))
	}), e("echarts/chart/candlestick/CandlestickSeries", [Kr, Yr, _t, "../helper/whiskerBoxCommon", p], function(t) {
		var e = t(Yr),
			i = t(_t),
			n = t("../helper/whiskerBoxCommon"),
			r = t(p),
			a = r[Ji],
			o = r[Ki],
			s = i[Vr]({
				type: "series.candlestick",
				dependencies: ["xAxis", "yAxis", "grid"],
				valueDimensions: ["open", "close", "lowest", "highest"],
				dimensions: null,
				defaultOption: {
					zlevel: 0,
					z: 2,
					coordinateSystem: "cartesian2d",
					legendHoverLink: !0,
					hoverAnimation: !0,
					xAxisIndex: 0,
					yAxisIndex: 0,
					layout: null,
					itemStyle: {
						normal: {
							color: "#c23531",
							color0: "#314656",
							borderWidth: 1,
							borderColor: "#c23531",
							borderColor0: "#314656"
						},
						emphasis: {
							borderWidth: 2
						}
					},
					animationUpdate: !1,
					animationEasing: "linear",
					animationDuration: 300
				},
				getShadowDim: function() {
					return "open"
				},
				formatTooltip: function(t, i) {
					var n = e.map(this.valueDimensions, function(e) {
						return e + ": " + o(this._data.get(e, t))
					}, this);
					return a(this.name) + $i + n.join($i)
				}
			});
		return e.mixin(s, n.seriesModelMixin, !0), s
	}), e("echarts/chart/candlestick/CandlestickView", [Kr, Yr, it, gt, "../helper/whiskerBoxCommon"], function(t) {
		function e(t, e, i) {
			var n = e[en](i),
				a = n[rr](s),
				o = e[Lt](i, "color"),
				c = e[Lt](i, Qn),
				u = a[ut](["color", "color0", Qn, "borderColor0"]),
				h = t[En](t.whiskerIndex);
			h.style.set(u), h.style[kr] = c, h.dirty();
			var d = t[En](t.bodyIndex);
			d.style.set(u), d.style.fill = o, d.style[kr] = c, d.dirty();
			var f = n[rr](l)[ut]();
			r[Ze](t, f)
		}
		var i = t(Yr),
			n = t(it),
			r = t(gt),
			a = t("../helper/whiskerBoxCommon"),
			o = n[Vr]({
				type: "candlestick",
				getStyleUpdater: function() {
					return e
				}
			});
		i.mixin(o, a.viewMixin, !0);
		var s = [oe, un],
			l = [oe, hn];
		return o
	}), e("echarts/chart/candlestick/preprocessor", [Kr, Yr], function(t) {
		var e = t(Yr);
		return function(t) {
			t && e[qn](t[An]) && e.each(t[An], function(t) {
				e[Ln](t) && "k" === t.type && (t.type = "candlestick")
			})
		}
	}), e("echarts/chart/candlestick/candlestickVisual", [Kr], function(t) {
		var e = [oe, un, Qn],
			i = [oe, un, "borderColor0"],
			n = [oe, un, "color"],
			r = [oe, un, "color0"];
		return function(t, a) {
			t.eachRawSeriesByType("candlestick", function(a) {
				var o = a[sn]();
				o[de]({
					legendSymbol: "roundRect"
				}), t[he](a) || o.each(function(t) {
					var a = o[en](t),
						s = o[It](t).sign;
					o[ue](t, {
						color: a.get(s > 0 ? n : r),
						borderColor: a.get(s > 0 ? e : i)
					})
				})
			})
		}
	}), e("echarts/chart/candlestick/candlestickLayout", [Kr], function(t) {
		function e(t, e) {
			var a, o = t.getBaseAxisModel().axis,
				s = o.type === Mt ? o[tt]() : (a = o[at](), Math.abs(a[1] - a[0]) / e.count());
			return s / 2 - 2 > n ? s / 2 - 2 : s - n > r ? n : Math.max(s - r, i)
		}
		var i = 2,
			n = 5,
			r = 4;
		return function(t, i) {
			t[ce]("candlestick", function(t) {
				var i = t[St],
					n = t[sn](),
					r = t[Zt],
					a = t.get(c),
					o = e(t, n);
				n.each(r, function() {
					function t(t) {
						var e = [];
						return e[h] = c, e[d] = t, isNaN(c) || isNaN(t) ? [NaN, NaN] : i[rt](e)
					}

					function e(t, e) {
						var i = t.slice(),
							n = t.slice();
						i[h] += o / 2, n[h] -= o / 2, e ? S.push(i, n) : S.push(n, i)
					}
					var s = arguments,
						l = r[qr],
						c = s[0],
						u = s[l],
						h = a === On ? 0 : 1,
						d = 1 - h,
						f = s[1],
						p = s[2],
						v = s[3],
						m = s[4],
						g = Math.min(f, p),
						y = Math.max(f, p),
						x = t(g),
						_ = t(y),
						w = t(v),
						b = t(m),
						M = [
							[b, _],
							[w, x]
						],
						S = [];
					e(_, 0), e(x, 1), n[Dt](u, {
						chartLayout: a,
						sign: f > p ? -1 : p > f ? 1 : 0,
						initBaseline: f > p ? _[d] : x[d],
						bodyEnds: S,
						whiskerEnds: M
					})
				}, !0)
			})
		}
	}), e("echarts/chart/candlestick", [Kr, X, "./candlestick/CandlestickSeries", "./candlestick/CandlestickView", "./candlestick/preprocessor", "./candlestick/candlestickVisual", "./candlestick/candlestickLayout"], function(t) {
		var e = t(X);
		t("./candlestick/CandlestickSeries"), t("./candlestick/CandlestickView"), e[$t](t("./candlestick/preprocessor")), e[Ut]("chart", t("./candlestick/candlestickVisual")), e[jt](t("./candlestick/candlestickLayout"))
	}), e("echarts/chart/effectScatter/EffectScatterSeries", [Kr, wt, _t], function(t) {
		var e = t(wt),
			i = t(_t);
		return i[Vr]({
			type: "series.effectScatter",
			dependencies: ["grid", "polar"],
			getInitialData: function(t, i) {
				var n = e(t.data, this, i);
				return n
			},
			defaultOption: {
				coordinateSystem: "cartesian2d",
				zlevel: 0,
				z: 2,
				legendHoverLink: !0,
				effectType: "ripple",
				showEffectOn: "render",
				rippleEffect: {
					period: 4,
					scale: 2.5,
					brushType: "fill"
				},
				xAxisIndex: 0,
				yAxisIndex: 0,
				polarIndex: 0,
				geoIndex: 0,
				symbolSize: 10
			}
		})
	}), e("echarts/chart/helper/EffectSymbol", [Kr, Yr, yt, gt, mt, "./Symbol"], function(t) {
		function e(t) {
			return n[qn](t) || (t = [+t, +t]), t
		}

		function i(t, e) {
			l.call(this);
			var i = new s(t, e),
				n = new l;
			this.add(i), this.add(n), n.beforeUpdate = function() {
				this.attr(i.getScale())
			}, this[vt](t, e)
		}
		var n = t(Yr),
			r = t(yt),
			a = t(gt),
			o = t(mt),
			s = t("./Symbol"),
			l = a.Group,
			c = 3,
			u = i[$r];
		return u.stopEffectAnimation = function() {
			this[En](1)[Mi]()
		}, u.startEffectAnimation = function(t, e, i, n, a, o) {
			for (var s = this._symbolType, l = this._color, u = this[En](1), h = 0; c > h; h++) {
				var d = r[pt](s, -.5, -.5, 1, 1, l);
				d.attr({
					style: {
						stroke: e === kr ? l : null,
						fill: "fill" === e ? l : null,
						strokeNoScale: !0
					},
					z2: 99,
					silent: !0,
					scale: [1, 1],
					z: a,
					zlevel: o
				});
				var f = -h / c * t + n;
				d[Vi]("", !0).when(t, {
					scale: [i, i]
				}).delay(f).start(), d.animateStyle(!0).when(t, {
					opacity: 0
				}).delay(f).start(), u.add(d)
			}
		}, u[Qt] = function() {
			this[wi](hn)
		}, u[Jt] = function() {
			this[wi](un)
		}, u[vt] = function(t, i) {
			function n() {
				w[wi](hn), p !== bi && this.startEffectAnimation(g, m, v, y, x, _)
			}

			function r() {
				w[wi](un), p !== bi && this.stopEffectAnimation()
			}
			var a = t[Kt];
			this[En](0)[vt](t, i);
			var s = this[En](1),
				l = t[en](i),
				c = t[Lt](i, dt),
				u = e(t[Lt](i, ft)),
				h = t[Lt](i, "color");
			s.attr("scale", u), s[Ci](function(t) {
				t.attr({
					fill: h
				})
			});
			var d = l[Dr]("symbolOffset");
			if (d) {
				var f = s[Nn];
				f[0] = o[Wn](d[0], u[0]), f[1] = o[Wn](d[1], u[1])
			}
			this._symbolType = c, this._color = h;
			var p = a.get("showEffectOn"),
				v = l.get("rippleEffect.scale"),
				m = l.get("rippleEffect.brushType"),
				g = 1e3 * l.get("rippleEffect.period"),
				y = i / t.count(),
				x = l[Dr]("z") || 0,
				_ = l[Dr](be) || 0;
			this.stopEffectAnimation(), p === bi && this.startEffectAnimation(g, m, v, y, x, _);
			var w = this[En](0);
			this.on(Ge, n, this).on(Be, r, this).on(hn, n, this).on(un, r, this)
		}, u.fadeOut = function(t) {
			t && t()
		}, n[zr](i, l), i
	}), e("echarts/chart/effectScatter/EffectScatterView", [Kr, nt, "../helper/EffectSymbol", A], function(t) {
		var e = t(nt),
			i = t("../helper/EffectSymbol");
		t(A)[qt]({
			type: "effectScatter",
			init: function() {
				this[K] = new e(i)
			},
			render: function(t, e, i) {
				var n = t[sn](),
					r = this[K];
				r[vt](n), this.group.add(r.group)
			},
			updateLayout: function() {
				this[K][Si]()
			},
			remove: function(t, e) {
				this[K] && this[K][Li](e)
			}
		})
	}), e("echarts/chart/effectScatter", [Kr, Yr, X, "./effectScatter/EffectScatterSeries", "./effectScatter/EffectScatterView", j, U], function(t) {
		var e = t(Yr),
			i = t(X);
		t("./effectScatter/EffectScatterSeries"), t("./effectScatter/EffectScatterView"), i[Ut]("chart", e.curry(t(j), "effectScatter", ht, null)), i[jt](e.curry(t(U), "effectScatter"))
	}), e("echarts/chart/lines/LinesSeries", [Kr, _t, Tt, Yr], function(t) {
		var e = t(_t),
			i = t(Tt),
			n = t(Yr);
		return e[Vr]({
			type: "series.lines",
			dependencies: ["grid", "polar"],
			getInitialData: function(t, e) {
				function r(t, e, i, n) {
					return t.coord && t.coord[n]
				}
				var a = [],
					o = [],
					s = [];
				n.each(t.data, function(t) {
					a.push(t[0]), o.push(t[1]), s.push(n[Vr](n[Vr]({}, n[qn](t[0]) ? null : t[0]), n[qn](t[1]) ? null : t[1]))
				});
				var l = t[St];
				if (l !== T && "geo" !== l) throw new Error("Coordinate system can only be cartesian2d or geo in lines");
				var c = "geo" === l ? ["lng", "lat"] : ["x", "y"],
					u = new i(c, this),
					h = new i(c, this),
					d = new i(["value"], this);
				return u[Gt](a, null, r), h[Gt](o, null, r), d[Gt](s), this.fromData = u, this.toData = h, d
			},
			formatTooltip: function(t) {
				var e = this.fromData[nn](t),
					i = this.toData[nn](t);
				return e + " > " + i
			},
			defaultOption: {
				coordinateSystem: "geo",
				zlevel: 0,
				z: 2,
				legendHoverLink: !0,
				hoverAnimation: !0,
				xAxisIndex: 0,
				yAxisIndex: 0,
				geoIndex: 0,
				effect: {
					show: !1,
					period: 4,
					symbol: "circle",
					symbolSize: 3,
					trailLength: .2
				},
				large: !1,
				largeThreshold: 2e3,
				label: {
					normal: {
						show: !1,
						position: "end"
					}
				},
				lineStyle: {
					normal: {
						opacity: .5
					}
				}
			}
		})
	}), e("echarts/chart/helper/EffectLine", [Kr, gt, "./Line", Yr, yt, "zrender/core/curve"], function(t) {
		function e(t, e, i, n) {
			r.Group.call(this);
			var o = new a(t, e, i, n);
			this.add(o), this._updateEffectSymbol(t, n)
		}

		function i(t, e) {
			t.__p1 = e[0], t.__p2 = e[1], t.__cp1 = e[2] || [(e[0][0] + e[1][0]) / 2, (e[0][1] + e[1][1]) / 2]
		}

		function n() {
			var t = this.__p1,
				e = this.__p2,
				i = this.__cp1,
				n = this.__t,
				r = this[Nn],
				a = l[di],
				o = l.quadraticDerivativeAt;
			r[0] = a(t[0], i[0], e[0], n), r[1] = a(t[1], i[1], e[1], n);
			var s = o(t[0], i[0], e[0], n),
				c = o(t[1], i[1], e[1], n);
			this[Xi] = -Math.atan2(c, s) - Math.PI / 2, this[Pi] = !1
		}
		var r = t(gt),
			a = t("./Line"),
			o = t(Yr),
			s = t(yt),
			l = t("zrender/core/curve"),
			c = e[$r];
		return c._updateEffectSymbol = function(t, e) {
			var r = t[en](e),
				a = r[rr]("effect"),
				l = a.get(ft),
				c = a.get(dt);
			o[qn](l) || (l = [l, l]);
			var u = a.get("color") || t[Lt](e, "color"),
				h = this[En](1),
				d = 1e3 * a.get("period");
			(this._symbolType !== c || d !== this._period) && (h = s[pt](c, -.5, -.5, 1, 1, u), h[Pi] = !0, h.z2 = 100, this._symbolType = c, this._period = d, this.add(h), h.__t = 0, h[Vi]("", !0).when(d, {
				__t: 1
			}).delay(e / t.count() * d / 2).during(o.bind(n, h)).start()), h[He](Sr, u), h[He](a[ut](["color"])), h.attr("scale", l);
			var f = t[It](e);
			i(h, f), h[xt](u), h.attr("scale", l)
		}, c[vt] = function(t, e, i, n) {
			this[En](0)[vt](t, e, i, n), this._updateEffectSymbol(t, n)
		}, c[Si] = function(t, e, n, r) {
			this[En](0)[Si](t, e, n, r);
			var a = this[En](1),
				o = t[It](r);
			i(a, o)
		}, o[zr](e, r.Group), e
	}), e("echarts/chart/lines/LinesView", [Kr, "../helper/LineDraw", "../helper/EffectLine", "../helper/Line", A], function(t) {
		var e = t("../helper/LineDraw"),
			i = t("../helper/EffectLine"),
			n = t("../helper/Line");
		t(A)[qt]({
			type: "lines",
			init: function() {},
			render: function(t, r, a) {
				var o = t[sn](),
					s = this._lineDraw,
					l = t.get("effect.show");
				l !== this._hasEffet && (s && s[Li](), s = this._lineDraw = new e(l ? i : n), this._hasEffet = l);
				var c = t.get(be),
					u = t.get("effect.trailLength"),
					h = a.getZr();
				h.painter.getLayer(c).clear(!0), null != this._lastZlevel && h.configLayer(this._lastZlevel, {
					motionBlur: !1
				}), l && u && h.configLayer(c, {
					motionBlur: !0,
					lastFrameAlpha: Math.max(Math.min(u / 10 + .9, 1), 0)
				}), this.group.add(s.group), s[vt](o), this._lastZlevel = c
			},
			updateLayout: function(t, e, i) {
				this._lineDraw[Si]();
				var n = i.getZr();
				n.painter.getLayer(this._lastZlevel).clear(!0)
			},
			remove: function(t, e) {
				this._lineDraw && this._lineDraw[Li](e, !0)
			}
		})
	}), e("echarts/chart/lines/linesLayout", [Kr], function(t) {
		return function(t) {
			t[ce]("lines", function(t) {
				var e = t[St],
					i = t.fromData,
					n = t.toData,
					r = t[sn](),
					a = e[Zt];
				i.each(a, function(t, n, r) {
					i[Dt](r, e[rt]([t, n]))
				}), n.each(a, function(t, i, r) {
					n[Dt](r, e[rt]([t, i]))
				}), r.each(function(t) {
					var e, a = i[It](t),
						o = n[It](t),
						s = r[en](t).get("lineStyle.normal.curveness");
					s > 0 && (e = [(a[0] + o[0]) / 2 - (a[1] - o[1]) * s, (a[1] + o[1]) / 2 - (o[0] - a[0]) * s]), r[Dt](t, [a, o, e])
				})
			})
		}
	}), e("echarts/chart/lines", [Kr, "./lines/LinesSeries", "./lines/LinesView", Yr, X, "./lines/linesLayout", "../visual/seriesColor"], function(t) {
		t("./lines/LinesSeries"), t("./lines/LinesView");
		var e = t(Yr),
			i = t(X);
		i[jt](t("./lines/linesLayout")), i[Ut]("chart", e.curry(t("../visual/seriesColor"), "lines", se))
	}), e("echarts/chart/heatmap/HeatmapSeries", [Kr, _t, wt], function(t) {
		var e = t(_t),
			i = t(wt);
		return e[Vr]({
			type: "series.heatmap",
			getInitialData: function(t, e) {
				return i(t.data, this, e)
			},
			defaultOption: {
				coordinateSystem: "cartesian2d",
				zlevel: 0,
				z: 2,
				xAxisIndex: 0,
				yAxisIndex: 0,
				geoIndex: 0,
				blurSize: 20
			}
		})
	}), e("echarts/chart/heatmap/HeatmapLayer", [Kr, Yr], function(t) {
		function e() {
			var t = r.createCanvas();
			this[Hr] = t, this.blurSize = 30, this[Tr] = 1, this._gradientPixels = {}
		}
		var i = 20,
			n = 256,
			r = t(Yr);
		return e[$r] = {
			update: function(t, e, r, a, o, s) {
				var l = this._getBrush(),
					c = this._getGradient(t, o, "inRange"),
					u = this._getGradient(t, o, "outOfRange"),
					h = i + this.blurSize,
					d = this[Hr],
					f = d[Fr]("2d"),
					p = t[qr];
				d.width = e, d[gr] = r;
				for (var v = 0; p > v; ++v) {
					var m = t[v],
						g = m[0],
						y = m[1],
						x = m[2],
						_ = a(x);
					f.globalAlpha = _, f.drawImage(l, g - h, y - h)
				}
				for (var w = f.getImageData(0, 0, d.width, d[gr]), b = w.data, M = 0, S = b[qr]; S > M;) {
					var _ = b[M + 3] / 256,
						A = 4 * Math.floor(_ * (n - 1));
					if (_ > 0) {
						var C = s(_) ? c : u;
						b[M++] = C[A], b[M++] = C[A + 1], b[M++] = C[A + 2], b[M++] *= this[Tr] * C[A + 3]
					} else M += 4
				}
				return f.putImageData(w, 0, 0), d
			},
			_getBrush: function() {
				var t = this._brushCanvas || (this._brushCanvas = r.createCanvas()),
					e = i + this.blurSize,
					n = 2 * e;
				t.width = n, t[gr] = n;
				var a = t[Fr]("2d");
				return a.clearRect(0, 0, n, n), a[Ar] = n, a[Cr] = this.blurSize, a[Sr] = "#000", a[hi](), a.arc(-e, e, i, 0, 2 * Math.PI, !0), a[si](), a.fill(), t
			},
			_getGradient: function(t, e, i) {
				for (var n = this._gradientPixels, r = n[i] || (n[i] = new Uint8ClampedArray(1024)), a = [], o = 0, s = 0; 256 > s; s++) e[i](s / 255, !0, a), r[o++] = a[0], r[o++] = a[1], r[o++] = a[2], r[o++] = a[3];
				return r
			}
		}, e
	}), e("echarts/chart/heatmap/HeatmapView", [Kr, gt, "./HeatmapLayer", Yr, A], function(t) {
		function e(t, e, i) {
			var n = t[1] - t[0];
			e = a.map(e, function(e) {
				return {
					interval: [(e[N][0] - t[0]) / n, (e[N][1] - t[0]) / n]
				}
			});
			var r = e[qr],
				o = 0;
			return function(t) {
				for (var n = o; r > n; n++) {
					var a = e[n][N];
					if (a[0] <= t && t <= a[1]) {
						o = n;
						break
					}
				}
				if (n === r)
					for (var n = o - 1; n >= 0; n--) {
						var a = e[n][N];
						if (a[0] <= t && t <= a[1]) {
							o = n;
							break
						}
					}
				return n >= 0 && r > n && i[n]
			}
		}

		function i(t, e) {
			var i = t[1] - t[0];
			return e = [(e[0] - t[0]) / i, (e[1] - t[0]) / i],
				function(t) {
					return t >= e[0] && t <= e[1]
				}
		}
		var n = t(gt),
			r = t("./HeatmapLayer"),
			a = t(Yr);
		return t(A)[qt]({
			type: "heatmap",
			render: function(t, e, i) {
				var n;
				if (e[te]("visualMap", function(e) {
						e.eachTargetSeries(function(i) {
							i === t && (n = e)
						})
					}), !n) throw new Error("Heatmap must use with visualMap");
				this.group[Mi]();
				var r = t[St];
				r.type === T ? this._renderOnCartesian(r, t, i) : "geo" === r.type && this._renderOnGeo(r, t, n, i)
			},
			_renderOnCartesian: function(t, e, i) {
				var r = t[Q]("x"),
					a = t[Q]("y"),
					o = this.group;
				if (r.type !== Mt || a.type !== Mt) throw new Error("Heatmap on cartesian must have two category axes");
				if (!r[et] || !a[et]) throw new Error("Heatmap on cartesian must have two axes with boundaryGap true");
				var s = r[tt](),
					l = a[tt](),
					c = e[sn]();
				c.each(["x", "y", "z"], function(i, r, a, u) {
					var h = c[en](u),
						d = t[rt]([i, r]);
					if (!isNaN(a)) {
						var f = new n.Rect({
								shape: {
									x: d[0] - s / 2,
									y: d[1] - l / 2,
									width: s,
									height: l
								},
								style: {
									fill: c[Lt](u, "color")
								}
							}),
							p = h[rr](b)[ut](["color"]),
							v = h[rr](M)[ut](),
							m = h[rr](S),
							g = h[rr](w),
							y = e[an](u),
							x = "-";
						y && null != y[2] && (x = y[2]), m.get("show") && (n[Ne](p, m), p.text = e[ct](u, un) || x), g.get("show") && (n[Ne](v, g), v.text = e[ct](u, hn) || x), f[He](p), n[Ze](f, v), o.add(f), c[kt](u, f)
					}
				})
			},
			_renderOnGeo: function(t, a, o, s) {
				var l = o.targetVisuals.inRange,
					c = o.targetVisuals.outOfRange,
					u = a[sn](),
					h = this._hmLayer || this._hmLayer || new r;
				h.blurSize = a.get("blurSize");
				var d = t.getViewRect().clone(),
					f = t.getRoamTransform();
				d[yr](f);
				var p = Math.max(d.x, 0),
					v = Math.max(d.y, 0),
					m = Math.min(d.width + d.x, s[_n]()),
					y = Math.min(d[gr] + d.y, s[xn]()),
					x = m - p,
					_ = y - v,
					w = u[Rt](["lng", "lat", "value"], function(e, i, n) {
						var r = t[rt]([e, i]);
						return r[0] -= p, r[1] -= v, r.push(n), r
					}),
					b = o[at](),
					M = "visualMap.continuous" === o.type ? i(b, o[Yn].range) : e(b, o.getPieceList(), o[Yn][g]);
				h[we](w, x, _, l.color.getNormalizer(), {
					inRange: l.color.getColorMapper(),
					outOfRange: c.color.getColorMapper()
				}, M);
				var S = new n.Image({
					style: {
						width: x,
						height: _,
						x: p,
						y: v,
						image: h[Hr]
					},
					silent: !0
				});
				this.group.add(S)
			}
		})
	}), e("echarts/chart/heatmap", [Kr, "./heatmap/HeatmapSeries", "./heatmap/HeatmapView"], function(t) {
		t("./heatmap/HeatmapSeries"), t("./heatmap/HeatmapView")
	}), e("echarts/component/geo/GeoView", [Kr, "../helper/MapDraw", A], function(t) {
		var e = t("../helper/MapDraw");
		return t(A)[Ft]({
			type: "geo",
			init: function(t, i) {
				var n = new e(i, !0);
				this._mapDraw = n, this.group.add(n.group)
			},
			render: function(t, e, i) {
				t.get("show") && this._mapDraw.draw(t, e, i)
			}
		})
	}), e("echarts/component/geo", [Kr, "../coord/geo/geoCreator", "./geo/GeoView", "../action/geoRoam"], function(t) {
		t("../coord/geo/geoCreator"), t("./geo/GeoView"), t("../action/geoRoam")
	}), e("echarts/component/title", [Kr, X, "../util/graphic", "../util/layout"], function(t) {
		var e = t(X),
			i = t("../util/graphic"),
			n = t("../util/layout");
		e[Wt]({
			type: "title",
			defaultOption: {
				zlevel: 0,
				z: 6,
				show: !0,
				text: "",
				target: "blank",
				subtext: "",
				subtarget: "blank",
				left: "left",
				top: "top",
				backgroundColor: "rgba(0,0,0,0)",
				borderColor: "#ccc",
				borderWidth: 0,
				padding: 5,
				itemGap: 10,
				textStyle: {
					fontSize: 18,
					fontWeight: "bolder",
					color: "#333"
				},
				subtextStyle: {
					color: "#aaa"
				}
			}
		}), e[Ft]({
			type: "title",
			render: function(t, e, r) {
				if (this.group[Mi](), t.get("show")) {
					var a = this.group,
						o = t[rr](nr),
						s = t[rr]("subtextStyle"),
						l = t.get(vi),
						c = new i.Text({
							style: {
								text: t.get("text"),
								textFont: o[er](),
								fill: o[Ee](),
								textBaseline: "top"
							},
							z2: 10
						}),
						h = c[ir](),
						d = t.get("subtext"),
						p = new i.Text({
							style: {
								text: d,
								textFont: s[er](),
								fill: s[Ee](),
								y: h[gr] + t.get(u),
								textBaseline: "top"
							},
							z2: 10
						}),
						v = t.get("link"),
						m = t.get("sublink");
					c[Me] = !v, p[Me] = !m, v && c.on("click", function() {
						window.open(v, t.get(Bi))
					}), m && p.on("click", function() {
						window.open(m, t.get("subtarget"))
					}), a.add(c), d && a.add(p);
					var g = a[ir](),
						y = t[k]();
					y.width = g.width, y[gr] = g[gr];
					var x = n[zn](y, {
						width: r[_n](),
						height: r[xn]()
					}, t.get(f));
					if (!l) {
						var _ = x.x / r[_n](),
							w = (x.x + x.width) / r[_n]();.2 > _ ? l = "left" : w > .8 ? (x.x += x.width, l = "right") : (x.x += x.width / 2, l = cr)
					}
					a[Nn] = [x.x, x.y], c[He](vi, l), p[He](vi, l), g = a[ir]();
					var b = x[Pn],
						M = t[ut](["color", Tr]);
					M.fill = t.get(me);
					var S = new i.Rect({
						shape: {
							x: g.x - b[3],
							y: g.y - b[0],
							width: g.width + b[1] + b[3],
							height: g[gr] + b[0] + b[2]
						},
						style: M,
						silent: !0
					});
					i[We](S), a.add(S)
				}
			}
		})
	}), e("echarts/component/dataZoom/typeDefaulter", [Kr, P], function(t) {
		t(P)[Xn](re, function(t) {
			return "slider"
		})
	}), e("echarts/component/dataZoom/AxisProxy", [Kr, Yr, mt], function(t) {
		function e(t, e) {
			var i = [Number[oi], Number.MIN_VALUE];
			return o(e, function(e) {
				var n = e[sn]();
				n && o(e.getDimensionsOnAxis(t), function(t) {
					var e = n[Nt](t);
					e[0] < i[0] && (i[0] = e[0]), e[1] > i[1] && (i[1] = e[1])
				})
			}, this), i
		}

		function i(t, e, i) {
			var r = [0, 100],
				l = t[Yn],
				c = [l.start, l.end],
				u = [l.startValue, l.endValue],
				h = ["floor", "ceil"];
			return o([0, 1], function(t) {
				var o, s = u[t],
					l = !0;
				n(s) && (o = c[t], n(o) && (o = r[t]), s = a[Un](o, r, e, !0), l = !1), i && (s = Math[h[t]](s)), l && (o = a[Un](s, e, r, !0)), u[t] = s, c[t] = o
			}), {
				valueWindow: s(u),
				percentWindow: s(c)
			}
		}

		function n(t) {
			return isNaN(t) || null == t
		}
		var r = t(Yr),
			a = t(mt),
			o = r.each,
			s = a.asc,
			l = function(t, e, i, n) {
				this._dimName = t, this._axisIndex = e, this._backup, this._valueWindow, this._percentWindow, this._dataExtent, this[ar] = n, this[ee] = i
			};
		return l[$r] = {
			constructor: l,
			hostedBy: function(t) {
				return this[ee] === t
			},
			backup: function(t, e) {
				t === this[ee] && (this._backup = e)
			},
			getBackup: function() {
				return r.clone(this._backup)
			},
			getDataExtent: function() {
				return this._dataExtent.slice()
			},
			getDataValueWindow: function() {
				return this._valueWindow.slice()
			},
			getDataPercentWindow: function() {
				return this._percentWindow.slice()
			},
			getTargetSeriesModels: function() {
				var t = [];
				return this[ar][le](function(e) {
					this._axisIndex === e.get(this._dimName + "AxisIndex") && t.push(e)
				}, this), t
			},
			getAxisModel: function() {
				return this[ar][mn](this._dimName + "Axis", this._axisIndex)
			},
			getOtherAxisModel: function() {
				var t, e, i = this._dimName,
					n = this[ar],
					r = this.getAxisModel(),
					a = "x" === i || "y" === i;
				a ? (e = "gridIndex", t = "x" === i ? "y" : "x") : (e = "polarIndex", t = "angle" === i ? vn : "angle");
				var o;
				return n[te](t + "Axis", function(t) {
					(t.get(e) || 0) === (r.get(e) || 0) && (o = t)
				}), o
			},
			reset: function(t) {
				if (t === this[ee]) {
					var n = this._dimName,
						r = this.getAxisModel(),
						a = r.get("type") === Mt,
						o = this.getTargetSeriesModels(),
						s = e(n, o),
						l = i(t, s, a);
					this._dataExtent = s.slice(), this._valueWindow = l.valueWindow.slice(), this._percentWindow = l.percentWindow.slice()
				}
			},
			filterData: function(t) {
				function e(t) {
					return t >= a[0] && t <= a[1]
				}
				if (t === this[ee]) {
					var i = this._dimName,
						n = this.getTargetSeriesModels(),
						r = t.get("filterMode"),
						a = this._valueWindow,
						s = this.getOtherAxisModel();
					t.get("$fromToolbox") && s && s.get("type") === Mt && (r = "empty"), o(n, function(t) {
						var n = t[sn]();
						n && o(t.getDimensionsOnAxis(i), function(i) {
							"empty" === r ? t[ei](n.map(i, function(t) {
								return e(t) ? t : NaN
							})) : n[Ot](i, e)
						})
					})
				}
			}
		}, l
	}), e("echarts/component/dataZoom/DataZoomModel", [Kr, Yr, ze, A, At, "./AxisProxy"], function(t) {
		var e = t(Yr),
			i = t(ze),
			n = t(A),
			r = t(At),
			a = t("./AxisProxy"),
			o = e.each,
			s = r.eachAxisDim;
		return n[Wt]({
			type: "dataZoom",
			dependencies: ["xAxis", "yAxis", "zAxis", "radiusAxis", "angleAxis", An],
			defaultOption: {
				zlevel: 0,
				z: 4,
				orient: null,
				xAxisIndex: null,
				yAxisIndex: null,
				filterMode: "filter",
				throttle: 100,
				start: 0,
				end: 100,
				startValue: null,
				endValue: null
			},
			init: function(t, e, i) {
				this._autoMode, this._dataIntervalByAxis = {}, this._dataInfo = {}, this._axisProxies = {}, this.textStyleModel, this[Dn](t, i), this[Tn]({}, !0)
			},
			mergeOption: function(t, n) {
				var r = this[Yn];
				t && e.merge(r, t), i[pe] || (r.realtime = !1), this.textStyleModel = this[rr](nr), this._resetTarget(t, n), this._giveAxisProxies(), this._backup()
			},
			_giveAxisProxies: function() {
				var t = this._axisProxies;
				this.eachTargetAxis(function(e, i, n, r) {
					var o = this.dependentModels[e.axis][i],
						s = o.__dzAxisProxy || (o.__dzAxisProxy = new a(e.name, i, this, r));
					t[e.name + "_" + i] = s
				}, this)
			},
			_resetTarget: function(t, e) {
				this._resetAutoMode(t, e);
				var i = this[Yn];
				s(function(t) {
					var e = t[pn];
					i[e] = n === pn ? [] : r[fn](i[e])
				}, this);
				var n = this._autoMode;
				n === pn ? this._autoSetAxisIndex() : n === d && this._autoSetOrient()
			},
			_resetAutoMode: function(t, e) {
				var i = e ? this[Yn] : t,
					n = !1;
				s(function(t) {
					null != i[t[pn]] && (n = !0)
				}, this);
				var r = i[d];
				null == r && n ? this._autoMode = d : (null == r && (this[Yn][d] = On), n || (this._autoMode = pn))
			},
			_autoSetAxisIndex: function() {
				var t = this._autoMode === pn,
					i = this.get(d),
					n = this[Yn];
				if (t) {
					var r = i === Rn ? {
						dim: "y",
						axisIndex: "yAxisIndex",
						axis: "yAxis"
					} : {
						dim: "x",
						axisIndex: "xAxisIndex",
						axis: "xAxis"
					};
					this.dependentModels[r.axis][qr] && (n[r[pn]] = [0], t = !1)
				}
				t && s(function(e) {
					if (t) {
						var i = [],
							r = this.dependentModels[e.axis];
						if (r[qr] && !i[qr])
							for (var a = 0, o = r[qr]; o > a; a++) r[a].get("type") === Mt && i.push(a);
						n[e[pn]] = i, i[qr] && (t = !1)
					}
				}, this), t && this[ar][le](function(t) {
					this._isSeriesHasAllAxesTypeOf(t, "value") && s(function(i) {
						var r = n[i[pn]],
							a = t.get(i[pn]);
						e[Zr](r, a) < 0 && r.push(a)
					})
				}, this)
			},
			_autoSetOrient: function() {
				var t;
				this.eachTargetAxis(function(e) {
					!t && (t = e.name)
				}, this), this[Yn][d] = "y" === t ? Rn : On
			},
			_isSeriesHasAllAxesTypeOf: function(t, e) {
				var i = !0;
				return s(function(n) {
					var r = t.get(n[pn]),
						a = this.dependentModels[n.axis][r];
					a && a.get("type") === e || (i = !1)
				}, this), i
			},
			_backup: function() {
				this.eachTargetAxis(function(t, e, i, n) {
					var r = n[mn](t.axis, e);
					this.getAxisProxy(t.name, e).backup(this, {
						scale: r.get("scale", !0),
						min: r.get("min", !0),
						max: r.get("max", !0)
					})
				}, this)
			},
			getFirstTargetAxisModel: function() {
				var t;
				return s(function(e) {
					if (null == t) {
						var i = this.get(e[pn]);
						i[qr] && (t = this.dependentModels[e.axis][i[0]])
					}
				}, this), t
			},
			eachTargetAxis: function(t, e) {
				var i = this[ar];
				s(function(n) {
					o(this.get(n[pn]), function(r) {
						t.call(e, n, r, this, i)
					}, this)
				}, this)
			},
			getAxisProxy: function(t, e) {
				return this._axisProxies[t + "_" + e]
			},
			setRawRange: function(t) {
				o(["start", "end", "startValue", "endValue"], function(e) {
					this[Yn][e] = t[e]
				}, this)
			},
			getPercentRange: function() {
				var t = this._axisProxies;
				for (var e in t)
					if (t.hasOwnProperty(e) && t[e].hostedBy(this)) return t[e].getDataPercentWindow();
				for (var e in t)
					if (t.hasOwnProperty(e) && !t[e].hostedBy(this)) return t[e].getDataPercentWindow()
			}
		})
	}), e("echarts/component/dataZoom/DataZoomView", [Kr, "../../view/Component"], function(t) {
		var e = t("../../view/Component");
		return e[Vr]({
			type: "dataZoom",
			render: function(t, e, i, n) {
				this.dataZoomModel = t, this[ar] = e, this.api = i
			},
			getTargetInfo: function() {
				function t(t, e, i, n) {
					for (var r, a = 0; a < i[qr]; a++)
						if (i[a].model === t) {
							r = i[a];
							break
						}
					r || i.push(r = {
						model: t,
						axisModels: [],
						coordIndex: n
					}), r.axisModels.push(e)
				}
				var e = this.dataZoomModel,
					i = this[ar],
					n = [],
					r = [],
					a = [];
				return e.eachTargetAxis(function(e, o) {
					var s = i[mn](e.axis, o);
					if (s) {
						a.push(s);
						var l = s.get("gridIndex"),
							c = s.get("polarIndex");
						if (null != l) {
							var u = i[mn]("grid", l);
							t(u, s, n, l)
						} else if (null != c) {
							var u = i[mn]("polar", c);
							t(u, s, r, c)
						}
					}
				}, this), {
					cartesians: n,
					polars: r,
					axisModels: a
				}
			}
		})
	}), e("echarts/component/dataZoom/SliderZoomModel", [Kr, "./DataZoomModel"], function(t) {
		var e = t("./DataZoomModel");
		return e[Vr]({
			type: "dataZoom.slider",
			layoutMode: "box",
			defaultOption: {
				show: !0,
				left: "auto",
				right: "auto",
				top: "auto",
				bottom: "auto",
				width: "auto",
				height: "auto",
				backgroundColor: "rgba(47,69,84,0)",
				dataBackgroundColor: "#ddd",
				fillerColor: "rgba(47,69,84,0.25)",
				handleColor: "rgba(47,69,84,0.65)",
				handleSize: 10,
				labelPrecision: null,
				labelFormatter: null,
				showDetail: !0,
				showDataShadow: "auto",
				realtime: !0,
				zoomLock: !1,
				textStyle: {
					color: "#333"
				}
			}
		})
	}), e("echarts/util/throttle", [], function() {
		var t = {},
			e = "\x00__throttleOriginMethod",
			i = "\x00__throttleRate";
		return t.throttle = function(t, e, i, n) {
			function r(r) {
				function f() {
					u = (new Date).getTime(), h = null, (d ? t : t[r]).apply(o, s || [])
				}
				var p = function() {
					l = (new Date).getTime(), o = this, s = arguments, a = l - (n ? c : u) - e, clearTimeout(h), n ? i ? h = setTimeout(f, e) : a >= 0 && f() : a >= 0 ? f() : i && (h = setTimeout(f, -a)), c = l
				};
				return p.clear = function() {
					h && (clearTimeout(h), h = null)
				}, p
			}
			var a, o, s, l = (new Date).getTime(),
				c = 0,
				u = 0,
				h = null,
				d = typeof t === Er;
			if (e = e || 0, d) return r();
			for (var f = [], p = 0; p < t[qr]; p++) f[p] = r(p);
			return f
		}, t.fixRate = function(e, i) {
			return null != i ? t.throttle(e, i, !0, !1) : e
		}, t.debounce = function(e, i) {
			return null != i ? t.throttle(e, i, !0, !0) : e
		}, t.createOrUpdate = function(n, r, a, o) {
			var s = n[r];
			if (s && null != a && o) {
				var l = s[e] || s,
					c = s[i];
				c !== a && (s = n[r] = t[o](l, a), s[e] = l, s[i] = a)
			}
		}, t.clear = function(t, i) {
			var n = t[i];
			n && n[e] && (t[i] = n[e])
		}, t
	}), e("echarts/component/helper/sliderMove", [Kr], function(t) {
		return function(t, e, i, n, a) {
			function o(t, e, i) {
				var n = e[qr] ? e.slice() : [e, e];
				return e[0] > e[1] && n[r](), 0 > t && n[0] + t < i[0] && (t = i[0] - n[0]), t > 0 && n[1] + t > i[1] && (t = i[1] - n[1]), t
			}
			return t ? ("rigid" === n ? (t = o(t, e, i), e[0] += t, e[1] += t) : (t = o(t, e[a], i), e[a] += t, "push" === n && e[0] > e[1] && (e[1 - a] = e[a])), e) : e
		}
	}), e("echarts/component/dataZoom/SliderZoomView", [Kr, Yr, gt, "../../util/throttle", "./DataZoomView", mt, I, "../helper/sliderMove"], function(t) {
		function e(t) {
			return "x" === t ? "y" : "x"
		}
		var i = t(Yr),
			n = t(gt),
			a = t("../../util/throttle"),
			o = t("./DataZoomView"),
			s = n.Rect,
			l = t(mt),
			c = l[Un],
			u = t(I),
			h = t("../helper/sliderMove"),
			p = l.asc,
			v = i.bind,
			g = Math.round,
			y = Math.max,
			x = i.each,
			_ = 7,
			w = 1,
			b = 30,
			M = On,
			S = Rn,
			A = 5,
			C = ["line", "bar", "candlestick", ne];
		return o[Vr]({
			type: "dataZoom.slider",
			init: function(t, e) {
				this._displayables = {}, this._orient, this._range, this._handleEnds, this._size, this._halfHandleSize, this._location, this._dragging, this._dataShadowInfo, this.api = e
			},
			render: function(t, e, i, n) {
				return this[m](bi, arguments), a.createOrUpdate(this, "_dispatchZoomAction", this.dataZoomModel.get("throttle"), "fixRate"), this._orient = t.get(d), this._halfHandleSize = g(t.get("handleSize") / 2), this.dataZoomModel.get("show") === !1 ? void this.group[Mi]() : (n && n.type === re && n.from === this.uid || this._buildView(), void this._updateView())
			},
			remove: function() {
				this[m](Li, arguments), a.clear(this, "_dispatchZoomAction")
			},
			dispose: function() {
				this[m](fe, arguments), a.clear(this, "_dispatchZoomAction")
			},
			_buildView: function() {
				var t = this.group;
				t[Mi](), this._resetLocation(), this._resetInterval();
				var e = this._displayables.barGroup = new n.Group;
				this._renderBackground(), this._renderDataShadow(), this._renderHandle(), t.add(e), this._positionGroup()
			},
			_resetLocation: function() {
				var t = this.dataZoomModel,
					e = this.api,
					n = this._findCoordRect(),
					a = {
						width: e[_n](),
						height: e[xn]()
					},
					o = this._orient === M ? {
						left: n.x,
						top: a[gr] - b - _,
						width: n.width,
						height: b
					} : {
						right: _,
						top: n.y,
						width: b,
						height: n[gr]
					};
				i.each(u.getLayoutParams(t[Yn]), function(t, e) {
					"auto" !== t && (o[e] = t)
				});
				var s = u[zn](o, a, t[f]);
				this._location = {
					x: s.x,
					y: s.y
				}, this._size = [s.width, s[gr]], this._orient === S && this._size[r]()
			},
			_positionGroup: function() {
				var t = this.group,
					e = this._location,
					i = this._orient,
					n = this.dataZoomModel.getFirstTargetAxisModel(),
					r = n && n.get(J),
					a = this._displayables.barGroup,
					o = (this._dataShadowInfo || {}).otherAxisInverse;
				a.attr(i !== M || r ? i === M && r ? {
					scale: o ? [-1, 1] : [-1, -1]
				} : i !== S || r ? {
					scale: o ? [-1, -1] : [-1, 1],
					rotation: Math.PI / 2
				} : {
					scale: o ? [1, -1] : [1, 1],
					rotation: Math.PI / 2
				} : {
					scale: o ? [1, 1] : [1, -1]
				});
				var s = t[ir]([a]);
				t[Nn][0] = e.x - s.x, t[Nn][1] = e.y - s.y
			},
			_getViewExtent: function() {
				var t = this._halfHandleSize,
					e = y(this._size[0], 4 * t),
					i = [t, e - t];
				return i
			},
			_renderBackground: function() {
				var t = this.dataZoomModel,
					e = this._size;
				this._displayables.barGroup.add(new s({
					silent: !0,
					shape: {
						x: 0,
						y: 0,
						width: e[0],
						height: e[1]
					},
					style: {
						fill: t.get(me)
					}
				}))
			},
			_renderDataShadow: function() {
				var t = this._dataShadowInfo = this._prepareDataShadowInfo();
				if (t) {
					var e = this._size,
						i = t[An],
						r = i.getRawData(),
						a = i.getShadowDim ? i.getShadowDim() : t.otherDim,
						o = r[Nt](a),
						s = .3 * (o[1] - o[0]);
					o = [o[0] - s, o[1] + s];
					var l = [0, e[1]],
						u = [0, e[0]],
						h = [
							[e[0], 0],
							[0, 0]
						],
						d = u[1] / (r.count() - 1),
						f = 0,
						p = Math.round(r.count() / e[0]);
					r.each([a], function(t, e) {
						if (p > 0 && e % p) return void(f += d);
						var i = null == t || isNaN(t) || "" === t ? null : c(t, o, l, !0);
						null != i && h.push([f, i]), f += d
					}), this._displayables.barGroup.add(new n[Ue]({
						shape: {
							points: h
						},
						style: {
							fill: this.dataZoomModel.get("dataBackgroundColor"),
							lineWidth: 0
						},
						silent: !0,
						z2: -20
					}))
				}
			},
			_prepareDataShadowInfo: function() {
				var t = this.dataZoomModel,
					n = t.get("showDataShadow");
				if (n !== !1) {
					var r, a = this[ar];
					return t.eachTargetAxis(function(o, s) {
						var l = t.getAxisProxy(o.name, s).getTargetSeriesModels();
						i.each(l, function(t) {
							if (!(r || n !== !0 && i[Zr](C, t.get("type")) < 0)) {
								var l = e(o.name),
									c = a[mn](o.axis, s).axis;
								r = {
									thisAxis: c,
									series: t,
									thisDim: o.name,
									otherDim: l,
									otherAxisInverse: t[St][ot](c)[J]
								}
							}
						}, this)
					}, this), r
				}
			},
			_renderHandle: function() {
				var t = this._displayables,
					e = t.handles = [],
					i = t.handleLabels = [],
					r = this._displayables.barGroup,
					a = this._size;
				r.add(t.filler = new s({
					draggable: !0,
					cursor: "move",
					drift: v(this._onDragMove, this, "all"),
					ondragend: v(this._onDragEnd, this),
					onmouseover: v(this._showDataInfo, this, !0),
					onmouseout: v(this._showDataInfo, this, !1),
					style: {
						fill: this.dataZoomModel.get("fillerColor"),
						textPosition: "inside"
					}
				})), r.add(new s(n[We]({
					silent: !0,
					shape: {
						x: 0,
						y: 0,
						width: a[0],
						height: a[1]
					},
					style: {
						stroke: this.dataZoomModel.get("dataBackgroundColor"),
						lineWidth: w,
						fill: "rgba(0,0,0,0)"
					}
				}))), x([0, 1], function(t) {
					r.add(e[t] = new s({
						style: {
							fill: this.dataZoomModel.get("handleColor")
						},
						cursor: "move",
						draggable: !0,
						drift: v(this._onDragMove, this, t),
						ondragend: v(this._onDragEnd, this),
						onmouseover: v(this._showDataInfo, this, !0),
						onmouseout: v(this._showDataInfo, this, !1)
					}));
					var a = this.dataZoomModel.textStyleModel;
					this.group.add(i[t] = new n.Text({
						silent: !0,
						invisible: !0,
						style: {
							x: 0,
							y: 0,
							text: "",
							textBaseline: "middle",
							textAlign: "center",
							fill: a[Ee](),
							textFont: a[er]()
						}
					}))
				}, this)
			},
			_resetInterval: function() {
				var t = this._range = this.dataZoomModel.getPercentRange();
				this._handleEnds = c(t, [0, 100], this._getViewExtent(), !0)
			},
			_updateInterval: function(t, e) {
				var i = this._handleEnds,
					n = this._getViewExtent();
				h(e, i, n, "all" === t || this.dataZoomModel.get("zoomLock") ? "rigid" : "cross", t), this._range = p(c(i, n, [0, 100], !0))
			},
			_updateView: function() {
				var t = this._displayables,
					e = this._handleEnds,
					i = p(e.slice()),
					n = this._size,
					r = this._halfHandleSize;
				x([0, 1], function(i) {
					var a = t.handles[i];
					a[ii]({
						x: e[i] - r,
						y: -1,
						width: 2 * r,
						height: n[1] + 2,
						r: 1
					})
				}, this), t.filler[ii]({
					x: i[0],
					y: 0,
					width: i[1] - i[0],
					height: this._size[1]
				}), this._updateDataInfo()
			},
			_updateDataInfo: function() {
				function t(t) {
					var e = n.getTransform(i.handles[t], this.group),
						s = n.transformDirection(0 === t ? "right" : "left", e),
						l = this._halfHandleSize + A,
						u = n[yr]([c[t] + (0 === t ? -l : l), this._size[1] / 2], e);
					r[t][He]({
						x: u[0],
						y: u[1],
						textBaseline: a === M ? ur : s,
						textAlign: a === M ? s : cr,
						text: o[t]
					})
				}
				var e = this.dataZoomModel,
					i = this._displayables,
					r = i.handleLabels,
					a = this._orient,
					o = ["", ""];
				if (e.get("showDetail")) {
					var s, l;
					e.eachTargetAxis(function(t, i) {
						s || (s = e.getAxisProxy(t.name, i).getDataValueWindow(), l = this[ar][mn](t.axis, i).axis)
					}, this), s && (o = [this._formatLabel(s[0], l), this._formatLabel(s[1], l)])
				}
				var c = p(this._handleEnds.slice());
				t.call(this, 0), t.call(this, 1)
			},
			_formatLabel: function(t, e) {
				var n = this.dataZoomModel,
					r = n.get("labelFormatter");
				if (i.isFunction(r)) return r(t);
				var a = n.get("labelPrecision");
				return (null == a || "auto" === a) && (a = e[Fn]()), t = null == t && isNaN(t) ? "" : e.type === Mt || "time" === e.type ? e.scale[F](Math.round(t)) : t[Hn](Math.min(a, 20)), i[Sn](r) && (t = r[jn]("{value}", t)), t
			},
			_showDataInfo: function(t) {
				t = this._dragging || t;
				var e = this._displayables.handleLabels;
				e[0].attr(Ai, !t), e[1].attr(Ai, !t)
			},
			_onDragMove: function(t, e, i) {
				this._dragging = !0;
				var n = this._applyBarTransform([e, i], !0);
				this._updateInterval(t, n[0]), this._updateView(), this.dataZoomModel.get("realtime") && this._dispatchZoomAction()
			},
			_onDragEnd: function() {
				this._dragging = !1, this._showDataInfo(!1), this._dispatchZoomAction()
			},
			_dispatchZoomAction: function() {
				var t = this._range;
				this.api[yn]({
					type: "dataZoom",
					from: this.uid,
					dataZoomId: this.dataZoomModel.id,
					start: t[0],
					end: t[1]
				})
			},
			_applyBarTransform: function(t, e) {
				var i = this._displayables.barGroup[Hi]();
				return n[yr](t, i, e)
			},
			_findCoordRect: function() {
				var t, e = this.getTargetInfo();
				if (e.cartesians[qr]) t = e.cartesians[0].model[St][L]();
				else {
					var i = this.api[_n](),
						n = this.api[xn]();
					t = {
						x: .2 * i,
						y: .2 * n,
						width: .6 * i,
						height: .6 * n
					}
				}
				return t
			}
		})
	}), e("echarts/component/dataZoom/InsideZoomModel", [Kr, "./DataZoomModel"], function(t) {
		var e = t("./DataZoomModel");
		return e[Vr]({
			type: "dataZoom.inside",
			defaultOption: {
				zoomLock: !1
			}
		})
	}), e("echarts/component/dataZoom/InsideZoomView", [Kr, "./DataZoomView", "../../util/throttle", Yr, "../helper/sliderMove", "../../component/helper/RoamController"], function(t) {
		function e(t, e, i, r) {
			e = e.slice();
			var a = r.axisModels[0];
			if (a) {
				var o = n(t, a, i),
					s = o.signal * (e[1] - e[0]) * o.pixel / o.pixelLength;
				return c(s, e, [0, 100], "rigid"), e
			}
		}

		function i(t, e, i, a, o, s) {
			i = i.slice();
			var l = o.axisModels[0];
			if (l) {
				var c = n(e, l, a),
					u = c.pixel - c.pixelStart,
					h = u / c.pixelLength * (i[1] - i[0]) + i[0];
				return t = Math.max(t, 0), i[0] = (i[0] - h) * t + h, i[1] = (i[1] - h) * t + h, r(i)
			}
		}

		function n(t, e, i) {
			var n = e.axis,
				r = i.rect,
				a = {};
			return "x" === n.dim ? (a.pixel = t[0], a.pixelLength = r.width, a.pixelStart = r.x, a.signal = n[J] ? 1 : -1) : (a.pixel = t[1], a.pixelLength = r[gr], a.pixelStart = r.y, a.signal = n[J] ? -1 : 1), a
		}

		function r(t) {
			var e = [0, 100];
			return !(t[0] <= e[1]) && (t[0] = e[1]), !(t[1] <= e[1]) && (t[1] = e[1]), !(t[0] >= e[0]) && (t[0] = e[0]), !(t[1] >= e[0]) && (t[1] = e[0]), t
		}
		var a = t("./DataZoomView"),
			o = t("../../util/throttle"),
			l = t(Yr),
			c = t("../helper/sliderMove"),
			u = t("../../component/helper/RoamController"),
			h = l.bind;
		return a[Vr]({
			type: "dataZoom.inside",
			init: function(t, e) {
				this._controllers = {}, this._range
			},
			render: function(t, e, i, n) {
				this[m](bi, arguments), o.createOrUpdate(this, "_dispatchZoomAction", this.dataZoomModel.get("throttle"), "fixRate"), n && n.type === re && n.from === this.uid || (this._range = t.getPercentRange()), this._resetController(i)
			},
			remove: function() {
				this[m](Li, arguments);
				var t = this._controllers;
				l.each(t, function(t) {
					t.off("pan").off("zoom")
				}), t[qr] = 0, o.clear(this, "_dispatchZoomAction")
			},
			dispose: function() {
				this[m](fe, arguments), o.clear(this, "_dispatchZoomAction")
			},
			_resetController: function(t) {
				var e = this._controllers,
					i = this.getTargetInfo();
				l.each(i.cartesians, function(i) {
					var n = "cartesian" + i.coordIndex,
						r = e[n];
					r || (r = e[n] = new u(t.getZr()), r[s](), r.on("pan", h(this._onPan, this, r, i)), r.on("zoom", h(this._onZoom, this, r, i))), r.rect = i.model[St][L]().clone()
				}, this)
			},
			_onPan: function(t, i, n, r) {
				var a = this._range = e([n, r], this._range, t, i);
				a && this._dispatchZoomAction(a)
			},
			_onZoom: function(t, e, n, r, a) {
				var o = this.dataZoomModel;
				if (!o[Yn].zoomLock) {
					n = 1 / n;
					var s = this._range = i(n, [r, a], this._range, t, e, o);
					this._dispatchZoomAction(s)
				}
			},
			_dispatchZoomAction: function(t) {
				this.api[yn]({
					type: "dataZoom",
					from: this.uid,
					dataZoomId: this.dataZoomModel.id,
					start: t[0],
					end: t[1]
				})
			}
		})
	}), e("echarts/component/dataZoom/dataZoomProcessor", [Kr, A, mt], function(t) {
		function e(t, e, i, n) {
			var a = t.name,
				o = i.getAxisProxy(a, e);
			o.reset(i);
			var s = o.getDataPercentWindow(),
				l = o.getDataValueWindow(),
				c = n[mn](t.axis, e),
				u = 0 === s[0] && 100 === s[1],
				h = o.getBackup(),
				d = r[Fn](l, [0, 500]),
				f = !(20 > d && d >= 0);
			c.setNeedsCrossZero && c.setNeedsCrossZero(u ? !h.scale : !1), c.setMin && c.setMin(u || f ? h.min : +l[0][Hn](d)), c.setMax && c.setMax(u || f ? h.max : +l[1][Hn](d))
		}

		function i(t, e, i, n) {
			i.getAxisProxy(t.name, e).filterData(i)
		}
		var n = t(A),
			r = t(mt);
		n[Yt](Xr, function(t, n) {
			t[te](re, function(t) {
				t.eachTargetAxis(e)
			}), t[te](re, function(t) {
				t.eachTargetAxis(i)
			})
		})
	}), e("echarts/component/dataZoom/dataZoomAction", [Kr, Yr, At, A], function(t) {
		var e = t(Yr),
			i = t(At),
			n = t(A);
		n[Xt](re, function(t, n) {
			var r = i.createLinkedNodesFinder(e.bind(n[te], n, re), i.eachAxisDim, function(t, e) {
					return t.get(e[pn])
				}),
				a = [];
			n[te]({
				mainType: "dataZoom",
				query: t
			}, function(t, e) {
				a.push.apply(a, r(t).nodes)
			}), e.each(a, function(e, i) {
				e.setRawRange({
					start: t.start,
					end: t.end,
					startValue: t.startValue,
					endValue: t.endValue
				})
			})
		})
	}), e("echarts/component/dataZoom", [Kr, "./dataZoom/typeDefaulter", "./dataZoom/DataZoomModel", "./dataZoom/DataZoomView", "./dataZoom/SliderZoomModel", "./dataZoom/SliderZoomView", "./dataZoom/InsideZoomModel", "./dataZoom/InsideZoomView", "./dataZoom/dataZoomProcessor", "./dataZoom/dataZoomAction"], function(t) {
		t("./dataZoom/typeDefaulter"), t("./dataZoom/DataZoomModel"), t("./dataZoom/DataZoomView"), t("./dataZoom/SliderZoomModel"), t("./dataZoom/SliderZoomView"), t("./dataZoom/InsideZoomModel"), t("./dataZoom/InsideZoomView"), t("./dataZoom/dataZoomProcessor"), t("./dataZoom/dataZoomAction")
	}), e("echarts/component/visualMap/preprocessor", [Kr, Yr], function(t) {
		function e(t, e) {
			return t && t.hasOwnProperty && t.hasOwnProperty(e)
		}
		var i = t(Yr),
			n = i.each;
		return function(t) {
			var r = t && t.visualMap;
			i[qn](r) || (r = r ? [r] : []), n(r, function(t) {
				if (t) {
					e(t, "splitList") && !e(t, "pieces") && (t.pieces = t.splitList, delete t.splitList);
					var r = t.pieces;
					r && i[qn](r) && n(r, function(t) {
						i[Ln](t) && (e(t, "start") && !e(t, "min") && (t.min = t.start), e(t, "end") && !e(t, "max") && (t.max = t.end))
					})
				}
			})
		}
	}), e("echarts/component/visualMap/typeDefaulter", [Kr, P], function(t) {
		t(P)[Xn]("visualMap", function(t) {
			return t[n] || (t.pieces ? t.pieces[qr] > 0 : t[B] > 0) && !t.calculable ? "piecewise" : "continuous"
		})
	}), e("echarts/component/visualMap/visualCoding", [Kr, A, i, Yr], function(t) {
		function e(t, e) {
			var i = t.targetVisuals,
				n = {};
			a.each(["inRange", "outOfRange"], function(t) {
				var e = r.prepareVisualTypes(i[t]);
				n[t] = e
			}), t.eachTargetSeries(function(e) {
				function r(t) {
					return s[Lt](o, t)
				}

				function a(t, e) {
					s[ue](o, t, e)
				}
				var o, s = e[sn](),
					l = t.getDataDimension(s);
				s.each([l], function(e, s) {
					o = s;
					for (var l = t.getValueState(e), c = i[l], u = n[l], h = 0, d = u[qr]; d > h; h++) {
						var f = u[h];
						c[f] && c[f].applyVisual(e, r, a)
					}
				})
			})
		}
		var n = t(A),
			r = t(i),
			a = t(Yr);
		n[Ut]("component", function(t) {
			t[te]("visualMap", function(i) {
				e(i, t)
			})
		})
	}), e("echarts/visual/visualDefault", [Kr, Yr], function(t) {
		var e = t(Yr),
			i = {
				get: function(t, i, r) {
					var a = e.clone((n[t] || {})[i]);
					return r && e[qn](a) ? a[a[qr] - 1] : a
				}
			},
			n = {
				color: {
					active: ["#006edd", "#e0ffff"],
					inactive: ["rgba(0,0,0,0)"]
				},
				colorHue: {
					active: [0, 360],
					inactive: [0, 0]
				},
				colorSaturation: {
					active: [.3, 1],
					inactive: [0, 0]
				},
				colorLightness: {
					active: [.9, .5],
					inactive: [0, 0]
				},
				colorAlpha: {
					active: [.3, 1],
					inactive: [0, 0]
				},
				symbol: {
					active: [ht, "roundRect", "diamond"],
					inactive: ["none"]
				},
				symbolSize: {
					active: [10, 50],
					inactive: [0, 0]
				}
			};
		return i
	}), e("echarts/component/visualMap/VisualMapModel", [Kr, Yr, ze, A, At, "../../visual/visualDefault", i, mt], function(t) {
		var e = t(Yr),
			a = t(ze),
			o = t(A),
			s = t(At),
			l = t("../../visual/visualDefault"),
			c = t(i),
			u = c.mapVisual,
			h = c.eachVisual,
			d = t(mt),
			f = e[qn],
			p = e.each,
			v = d.asc,
			g = d[Un];
		return o[Wt]({
			type: "visualMap",
			dependencies: [An],
			dataBound: [-(1 / 0), 1 / 0],
			stateList: ["inRange", "outOfRange"],
			layoutMode: {
				type: "box",
				ignoreSize: !0
			},
			defaultOption: {
				show: !0,
				zlevel: 0,
				z: 4,
				min: 0,
				max: 200,
				dimension: null,
				inRange: null,
				outOfRange: null,
				left: 0,
				right: null,
				top: null,
				bottom: 0,
				itemWidth: null,
				itemHeight: null,
				inverse: !1,
				orient: "vertical",
				seriesIndex: null,
				backgroundColor: "rgba(0,0,0,0)",
				borderColor: "#ccc",
				contentColor: "#5793f3",
				inactiveColor: "#aaa",
				borderWidth: 0,
				padding: 5,
				textGap: 10,
				precision: 0,
				color: ["#bf444c", "#d88273", "#f6efa6"],
				formatter: null,
				text: null,
				textStyle: {
					color: "#333"
				}
			},
			init: function(t, e, i) {
				this._autoSeriesIndex = !1, this._dataExtent, this.controllerVisuals = {}, this.targetVisuals = {}, this.textStyleModel, this.itemSize, this[Dn](t, i), this.doMergeOption({}, !0)
			},
			mergeOption: function(t) {
				this[m](Tn, arguments), this.doMergeOption(t, !1)
			},
			doMergeOption: function(t, e) {
				var i = this[Yn];
				a[pe] || (i.realtime = !1), this.textStyleModel = this[rr](nr), this.resetItemSize(), this.completeVisualOption()
			},
			formatValueText: function(t, i) {
				function n(t) {
					return t === l[0] ? "min" : t === l[1] ? "max" : (+t)[Hn](s)
				}
				var r, a, o = this[Yn],
					s = o.precision,
					l = this.dataBound,
					c = o[Qi];
				return e[qn](t) && (t = t.slice(), r = !0), a = i ? t : r ? [n(t[0]), n(t[1])] : n(t), e[Sn](c) ? c[jn]("{value}", r ? a[0] : a)[jn]("{value2}", r ? a[1] : a) : e.isFunction(c) ? r ? c(t[0], t[1]) : c(t) : r ? t[0] === l[0] ? "< " + a[1] : t[1] === l[1] ? "> " + a[0] : a[0] + " - " + a[1] : a
			},
			resetTargetSeries: function(t, e) {
				var i = this[Yn],
					n = this._autoSeriesIndex = null == (e ? i : t)[ln];
				i[ln] = n ? [] : s[fn](i[ln]), n && this[ar][le](function(t, e) {
					var n = t[sn]();
					"list" === n.type && i[ln].push(e)
				})
			},
			resetExtent: function() {
				var t = this[Yn],
					e = v([t.min, t.max]);
				this._dataExtent = e
			},
			getDataDimension: function(t) {
				var e = this[Yn].dimension;
				return null != e ? e : t[Zt][qr] - 1
			},
			getExtent: function() {
				return this._dataExtent.slice()
			},
			resetVisual: function(t) {
				function e(e, n) {
					p(this.stateList, function(r) {
						var a = n[r] || (n[r] = {}),
							o = this[Yn][e][r] || {};
						p(o, function(e, n) {
							if (c.isValidType(n)) {
								var o = {
									type: n,
									dataExtent: i,
									visual: e
								};
								t && t.call(this, o, r), a[n] = new c(o)
							}
						}, this)
					}, this)
				}
				var i = this[at]();
				e.call(this, "controller", this.controllerVisuals), e.call(this, Bi, this.targetVisuals)
			},
			completeVisualOption: function() {
				function t(t) {
					f(a.color) && !t.inRange && (t.inRange = {
						color: a.color.slice()[r]()
					}), p(this.stateList, function(i) {
						var n = t[i];
						if (e[Sn](n)) {
							var r = l.get(n, "active", v);
							r ? (t[i] = {}, t[i][n] = r) : delete t[i]
						}
					}, this)
				}

				function i(t, e, i) {
					var n = t[e],
						r = t[i];
					n && !r && (r = t[i] = {}, p(n, function(t, e) {
						var i = l.get(e, "inactive", v);
						c.isValidType(e) && i && (r[e] = i)
					}))
				}

				function n(t) {
					var i = (t.inRange || {})[dt] || (t.outOfRange || {})[dt],
						n = (t.inRange || {})[ft] || (t.outOfRange || {})[ft],
						r = this.get("inactiveColor");
					p(this.stateList, function(a) {
						var o = this.itemSize,
							s = t[a];
						s || (s = t[a] = {
							color: v ? r : [r]
						}), s[dt] || (s[dt] = i && e.clone(i) || (v ? "roundRect" : ["roundRect"])), s[ft] || (s[ft] = n && e.clone(n) || (v ? o[0] : [o[0], o[0]])), s[dt] = u(s[dt], function(t) {
							return "none" === t || "square" === t ? "roundRect" : t
						});
						var l = s[ft];
						if (l) {
							var c = -(1 / 0);
							h(l, function(t) {
								t > c && (c = t)
							}), s[ft] = u(l, function(t) {
								return g(t, [0, c], [0, o[0]], !0)
							})
						}
					}, this)
				}
				var a = this[Yn],
					o = {
						inRange: a.inRange,
						outOfRange: a.outOfRange
					},
					s = a[Bi] || (a[Bi] = {}),
					d = a.controller || (a.controller = {});
				e.merge(s, o), e.merge(d, o);
				var v = this.isCategory();
				t.call(this, s), t.call(this, d), i.call(this, s, "inRange", "outOfRange"), i.call(this, s, "outOfRange", "inRange"), n.call(this, d)
			},
			eachTargetSeries: function(t, i) {
				e.each(this[Yn][ln], function(e) {
					t.call(i, this[ar].getSeriesByIndex(e))
				}, this)
			},
			isCategory: function() {
				return !!this[Yn][n]
			},
			resetItemSize: function() {
				this.itemSize = [parseFloat(this.get("itemWidth")), parseFloat(this.get("itemHeight"))]
			},
			setSelected: e.noop,
			getValueState: e.noop
		})
	}), e("echarts/component/visualMap/ContinuousModel", [Kr, "./VisualMapModel", Yr, mt], function(t) {
		var e = t("./VisualMapModel"),
			i = t(Yr),
			n = t(mt),
			a = [20, 140];
		return e[Vr]({
			type: "visualMap.continuous",
			defaultOption: {
				handlePosition: "auto",
				calculable: !1,
				range: [-(1 / 0), 1 / 0],
				hoverLink: !0,
				realtime: !0,
				itemWidth: null,
				itemHeight: null
			},
			doMergeOption: function(t, e) {
				this[m]("doMergeOption", arguments), this.resetTargetSeries(t, e), this.resetExtent(), this.resetVisual(function(t) {
					t.mappingMethod = Oi
				}), this._resetRange()
			},
			resetItemSize: function() {
				e[$r].resetItemSize.apply(this, arguments);
				var t = this.itemSize;
				this._orient === On && t[r](), (null == t[0] || isNaN(t[0])) && (t[0] = a[0]), (null == t[1] || isNaN(t[1])) && (t[1] = a[1])
			},
			_resetRange: function() {
				var t = this[at](),
					e = this[Yn].range;
				e[0] > e[1] && e[r](), e[0] = Math.max(e[0], t[0]), e[1] = Math.min(e[1], t[1])
			},
			completeVisualOption: function() {
				e[$r].completeVisualOption.apply(this, arguments), i.each(this.stateList, function(t) {
					var e = this[Yn].controller[t][ft];
					e && e[0] !== e[1] && (e[0] = 0)
				}, this)
			},
			setSelected: function(t) {
				this[Yn].range = t.slice(), this._resetRange()
			},
			getSelected: function() {
				var t = this[at](),
					e = n.asc((this.get("range") || []).slice());
				return e[0] > t[1] && (e[0] = t[1]), e[1] > t[1] && (e[1] = t[1]), e[0] < t[0] && (e[0] = t[0]), e[1] < t[0] && (e[1] = t[0]), e
			},
			getValueState: function(t) {
				var e = this[Yn].range,
					i = this[at]();
				return (e[0] <= i[0] || e[0] <= t) && (e[1] >= i[1] || t <= e[1]) ? "inRange" : "outOfRange"
			}
		})
	}), e("echarts/component/visualMap/VisualMapView", [Kr, A, Yr, gt, p, I, i], function(t) {
		var e = t(A),
			n = t(Yr),
			r = t(gt),
			a = t(p),
			o = t(I),
			s = t(i);
		return e[Ft]({
			type: "visualMap",
			autoPositionValues: {
				left: 1,
				right: 1,
				top: 1,
				bottom: 1
			},
			init: function(t, e) {
				this[ar] = t, this.api = e, this.visualMapModel, this._updatableShapes = {}
			},
			render: function(t, e, i, n) {
				return this.visualMapModel = t, t.get("show") === !1 ? void this.group[Mi]() : void this.doRender.apply(this, arguments)
			},
			renderBackground: function(t) {
				var e = this.visualMapModel,
					i = a[Vn](e.get(f) || 0),
					n = t[ir]();
				t.add(new r.Rect({
					z2: -1,
					silent: !0,
					shape: {
						x: n.x - i[3],
						y: n.y - i[0],
						width: n.width + i[3] + i[1],
						height: n[gr] + i[0] + i[2]
					},
					style: {
						fill: e.get(me),
						stroke: e.get(Qn),
						lineWidth: e.get(Jn)
					}
				}))
			},
			getControllerVisual: function(t, e, i) {
				function r(t) {
					return h[t]
				}

				function a(t, e) {
					h[t] = e
				}
				var o = this.visualMapModel,
					l = n[qn](t);
				if (l && (!e || "color" !== i)) throw new Error(t);
				var c = o.controllerVisuals[e || o.getValueState(t)],
					u = o.get("contentColor"),
					h = {
						symbol: o.get("itemSymbol"),
						color: l ? [{
							color: u,
							offset: 0
						}, {
							color: u,
							offset: 1
						}] : u
					},
					d = s.prepareVisualTypes(c);
				return n.each(d, function(e) {
					var n = c[e];
					(!i || s.isInVisualCluster(e, i)) && n && n.applyVisual(t, r, a)
				}), h
			},
			positionGroup: function(t) {
				var e = this.visualMapModel,
					i = this.api;
				o[In](t, e[k](), {
					width: i[_n](),
					height: i[xn]()
				})
			},
			doRender: n.noop
		})
	}), e("echarts/component/visualMap/helper", [Kr, I], function(t) {
		var e = t(I),
			i = {
				getItemAlign: function(t, i, n) {
					var r = t[Yn],
						a = r.align;
					if (null != a && "auto" !== a) return a;
					for (var o = {
							width: i[_n](),
							height: i[xn]()
						}, s = r[d] === On ? 1 : 0, l = [
							["left", "right", "width"],
							["top", hr, gr]
						], c = l[s], u = [0, null, 10], h = {}, p = 0; 3 > p; p++) h[l[1 - s][p]] = u[p], h[c[p]] = 2 === p ? n[0] : r[c[p]];
					var v = [
							["x", "width", 3],
							["y", gr, 0]
						][s],
						m = e[zn](h, o, r[f]);
					return c[(m[Pn][v[2]] || 0) + m[v[0]] + .5 * m[v[1]] < .5 * o[v[1]] ? 0 : 1]
				}
			};
		return i
	}), e("echarts/component/visualMap/ContinuousView", [Kr, "./VisualMapView", gt, Yr, mt, "../helper/sliderMove", "zrender/graphic/LinearGradient", "./helper"], function(t) {
		function e(t, e, i) {
			return new r[je]({
				shape: {
					points: t
				},
				draggable: !!e,
				cursor: i,
				drift: e
			})
		}

		function i(t, e) {
			return 0 === t ? [
				[0, 0],
				[e, 0],
				[e, -e]
			] : [
				[0, 0],
				[e, 0],
				[e, e]
			]
		}
		var n = t("./VisualMapView"),
			r = t(gt),
			a = t(Yr),
			o = t(mt),
			s = t("../helper/sliderMove"),
			l = o[Un],
			c = t("zrender/graphic/LinearGradient"),
			u = t("./helper"),
			h = a.each,
			f = n[Vr]({
				type: "visualMap.continuous",
				init: function() {
					n[$r].init.apply(this, arguments), this._shapes = {}, this._dataInterval = [], this._handleEnds = [], this._orient, this._useHandle
				},
				doRender: function(t, e, i, n) {
					n && "selectDataRange" === n.type && n.from === this.uid ? this._updateView() : this._buildView()
				},
				_buildView: function() {
					this.group[Mi]();
					var t = this.visualMapModel,
						e = this.group;
					this._orient = t.get(d), this._useHandle = t.get("calculable"), this._resetInterval(), this._renderBar(e);
					var i = t.get("text");
					this._renderEndsText(e, i, 0), this._renderEndsText(e, i, 1), this._updateView(!0), this.renderBackground(e), this._updateView(), this[In](e)
				},
				_renderEndsText: function(t, e, i) {
					if (e) {
						var n = e[1 - i];
						n = null != n ? n + "" : "";
						var a = this.visualMapModel,
							o = a.get("textGap"),
							s = a.itemSize,
							l = this._shapes.barGroup,
							c = this._applyTransform([s[0] / 2, 0 === i ? -o : s[1] + o], l),
							u = this._applyTransform(0 === i ? hr : "top", l),
							h = this._orient,
							d = this.visualMapModel.textStyleModel;
						this.group.add(new r.Text({
							style: {
								x: c[0],
								y: c[1],
								textBaseline: h === On ? ur : u,
								textAlign: h === On ? u : cr,
								text: n,
								textFont: d[er](),
								fill: d[Ee]()
							}
						}))
					}
				},
				_renderBar: function(t) {
					var i = this.visualMapModel,
						n = this._shapes,
						r = i.itemSize,
						o = this._orient,
						s = this._useHandle,
						l = u.getItemAlign(i, this.api, r),
						c = n.barGroup = this._createBarGroup(l);
					c.add(n.outOfRange = e()), c.add(n.inRange = e(null, a.bind(this._modifyHandle, this, "all"), s ? "move" : null));
					var h = i.textStyleModel.getTextRect("鍥�"),
						d = Math.max(h.width, h[gr]);
					s && (n.handleGroups = [], n.handleThumbs = [], n.handleLabels = [], n.handleLabelPoints = [], this._createHandle(c, 0, r, d, o, l), this._createHandle(c, 1, r, d, o, l)), t.add(c)
				},
				_createHandle: function(t, n, o, s, l) {
					var c = new r.Group({
							position: [o[0], 0]
						}),
						u = e(i(n, s), a.bind(this._modifyHandle, this, n), "move");
					c.add(u);
					var h = {
							x: l === On ? s / 2 : 1.5 * s,
							y: l === On ? 0 === n ? -(1.5 * s) : 1.5 * s : 0 === n ? -s / 2 : s / 2
						},
						d = this.visualMapModel.textStyleModel,
						f = new r.Text({
							silent: !0,
							style: {
								x: 0,
								y: 0,
								text: "",
								textBaseline: "middle",
								textFont: d[er](),
								fill: d[Ee]()
							}
						});
					this.group.add(f);
					var p = this._shapes;
					p.handleThumbs[n] = u, p.handleGroups[n] = c, p.handleLabelPoints[n] = h, p.handleLabels[n] = f, t.add(c)
				},
				_modifyHandle: function(t, e, i) {
					if (this._useHandle) {
						var n = this._applyTransform([e, i], this._shapes.barGroup, !0);
						this._updateInterval(t, n[1]), this.api[yn]({
							type: "selectDataRange",
							from: this.uid,
							visualMapId: this.visualMapModel.id,
							selected: this._dataInterval.slice()
						})
					}
				},
				_resetInterval: function() {
					var t = this.visualMapModel,
						e = this._dataInterval = t.getSelected();
					this._handleEnds = l(e, t[at](), [0, t.itemSize[1]], !0)
				},
				_updateInterval: function(t, e) {
					e = e || 0;
					var i = this.visualMapModel,
						n = this._handleEnds;
					s(e, n, [0, i.itemSize[1]], "all" === t ? "rigid" : "push", t), this._dataInterval = l(n, [0, i.itemSize[1]], i[at](), !0)
				},
				_updateView: function(t) {
					var e = this.visualMapModel,
						i = e[at](),
						n = this._shapes,
						r = this._dataInterval,
						a = [0, e.itemSize[1]],
						o = t ? a : this._handleEnds,
						s = this._createBarVisual(r, i, o, "inRange"),
						l = this._createBarVisual(i, i, a, "outOfRange");
					n.inRange[He]("fill", s.barColor)[ii](Ke, s.barPoints), n.outOfRange[He]("fill", l.barColor)[ii](Ke, l.barPoints), this._useHandle && h([0, 1], function(t) {
						n.handleThumbs[t][He]("fill", s.handlesColor[t]), n.handleLabels[t][He]({
							text: e.formatValueText(r[t]),
							textAlign: this._applyTransform(this._orient === On ? 0 === t ? hr : "top" : "left", n.barGroup)
						})
					}, this), this._updateHandlePosition(o)
				},
				_createBarVisual: function(t, e, i, n) {
					var r = this.getControllerVisual(t, n, "color").color,
						a = [this.getControllerVisual(t[0], n, ft)[ft], this.getControllerVisual(t[1], n, ft)[ft]],
						o = this._createBarPoints(i, a);
					return {
						barColor: new c(0, 0, 1, 1, r),
						barPoints: o,
						handlesColor: [r[0].color, r[r[qr] - 1].color]
					}
				},
				_createBarPoints: function(t, e) {
					var i = this.visualMapModel.itemSize;
					return [
						[i[0] - e[0], t[0]],
						[i[0], t[0]],
						[i[0], t[1]],
						[i[0] - e[1], t[1]]
					]
				},
				_createBarGroup: function(t) {
					var e = this._orient,
						i = this.visualMapModel.get(J);
					return new r.Group(e !== On || i ? e === On && i ? {
						scale: t === hr ? [-1, 1] : [1, 1],
						rotation: -Math.PI / 2
					} : e !== Rn || i ? {
						scale: "left" === t ? [1, 1] : [-1, 1]
					} : {
						scale: "left" === t ? [1, -1] : [-1, -1]
					} : {
						scale: t === hr ? [1, 1] : [-1, 1],
						rotation: Math.PI / 2
					})
				},
				_updateHandlePosition: function(t) {
					if (this._useHandle) {
						var e = this._shapes;
						h([0, 1], function(i) {
							var n = e.handleGroups[i];
							n[Nn][1] = t[i];
							var a = e.handleLabelPoints[i],
								o = r[yr]([a.x, a.y], r.getTransform(n, this.group));
							e.handleLabels[i][He]({
								x: o[0],
								y: o[1]
							})
						}, this)
					}
				},
				_applyTransform: function(t, e, i) {
					var n = r.getTransform(e, this.group);
					return r[a[qn](t) ? yr : "transformDirection"](t, n, i)
				}
			});
		return f
	}), e("echarts/component/visualMap/visualMapAction", [Kr, A], function(t) {
		var e = t(A),
			i = {
				type: "selectDataRange",
				event: "dataRangeSelected",
				update: "update"
			};
		e[Xt](i, function(t, e) {
			e[te]({
				mainType: "visualMap",
				query: t
			}, function(e) {
				e.setSelected(t[g])
			})
		})
	}), e("echarts/component/visualMapContinuous", [Kr, X, "./visualMap/preprocessor", "./visualMap/typeDefaulter", "./visualMap/visualCoding", "./visualMap/ContinuousModel", "./visualMap/ContinuousView", "./visualMap/visualMapAction"], function(t) {
		t(X)[$t](t("./visualMap/preprocessor")), t("./visualMap/typeDefaulter"), t("./visualMap/visualCoding"), t("./visualMap/ContinuousModel"), t("./visualMap/ContinuousView"), t("./visualMap/visualMapAction")
	}), e("echarts/component/visualMap/PiecewiseModel", [Kr, "./VisualMapModel", Yr, i], function(t) {
		function e(t, e) {
			var i = t[J];
			(t[d] === Rn ? !i : i) && e[r]()
		}
		var a = t("./VisualMapModel"),
			o = t(Yr),
			s = t(i),
			l = a[Vr]({
				type: "visualMap.piecewise",
				defaultOption: {
					selected: null,
					align: "auto",
					itemWidth: 20,
					itemHeight: 14,
					itemSymbol: "roundRect",
					pieceList: null,
					categories: null,
					splitNumber: 5,
					selectedMode: "multiple",
					itemGap: 10
				},
				doMergeOption: function(t, e) {
					this[m]("doMergeOption", arguments), this._pieceList = [], this.resetTargetSeries(t, e), this.resetExtent();
					var i = this._mode = this._decideMode();
					c[this._mode].call(this), this._resetSelected(t, e);
					var r = this[Yn][n];
					this.resetVisual(function(t, e) {
						i === n ? (t.mappingMethod = Mt, t[n] = o.clone(r)) : (t.mappingMethod = "piecewise", t.pieceList = o.map(this._pieceList, function(t) {
							var t = o.clone(t);
							return "inRange" !== e && (t.visual = null), t
						}))
					})
				},
				_resetSelected: function(t, e) {
					var i = this[Yn],
						n = this._pieceList,
						r = (e ? i : t)[g] || {};
					if (i[g] = r, o.each(n, function(t, e) {
							var i = this.getSelectedMapKey(t);
							i in r || (r[i] = !0)
						}, this), i.selectedMode === y) {
						var a = !1;
						o.each(n, function(t, e) {
							var i = this.getSelectedMapKey(t);
							r[i] && (a ? r[i] = !1 : a = !0)
						}, this)
					}
				},
				getSelectedMapKey: function(t) {
					return this._mode === n ? t.value + "" : t.index + ""
				},
				getPieceList: function() {
					return this._pieceList
				},
				_decideMode: function() {
					var t = this[Yn];
					return t.pieces && t.pieces[qr] > 0 ? "pieces" : this[Yn][n] ? n : B
				},
				setSelected: function(t) {
					this[Yn][g] = o.clone(t)
				},
				getValueState: function(t) {
					var e = this._pieceList,
						i = s.findPieceIndex(t, e);
					return null != i && this[Yn][g][this.getSelectedMapKey(e[i])] ? "inRange" : "outOfRange"
				}
			}),
			c = {
				splitNumber: function() {
					var t = this[Yn],
						e = t.precision,
						i = this[at](),
						n = t[B];
					n = Math.max(parseInt(n, 10), 1), t[B] = n;
					for (var r = (i[1] - i[0]) / n; + r[Hn](e) !== r && 5 > e;) e++;
					t.precision = e, r = +r[Hn](e);
					for (var a = 0, o = i[0]; n > a; a++, o += r) {
						var s = a === n - 1 ? i[1] : o + r;
						this._pieceList.push({
							text: this.formatValueText([o, s]),
							index: a,
							interval: [o, s]
						})
					}
				},
				categories: function() {
					var t = this[Yn];
					o.each(t[n], function(t) {
						this._pieceList.push({
							text: this.formatValueText(t, !0),
							value: t
						})
					}, this), e(t, this._pieceList)
				},
				pieces: function() {
					var t = this[Yn];
					o.each(t.pieces, function(t, e) {
						o[Ln](t) || (t = {
							value: t
						});
						var i, n = {
							text: "",
							index: e
						};
						if (null != t.label && (n.text = t.label, i = !0), t.hasOwnProperty("value")) n.value = t.value, i || (n.text = this.formatValueText(n.value));
						else {
							var r = t.min,
								a = t.max;
							null == r && (r = -(1 / 0)), null == a && (a = 1 / 0), r === a && (n.value = r), n[N] = [r, a], i || (n.text = this.formatValueText([r, a]))
						}
						n.visual = s.retrieveVisuals(t), this._pieceList.push(n)
					}, this), e(t, this._pieceList)
				}
			};
		return l
	}), e("echarts/component/visualMap/PiecewiseView", [Kr, "./VisualMapView", Yr, gt, yt, I, "./helper"], function(t) {
		var e = t("./VisualMapView"),
			i = t(Yr),
			n = t(gt),
			a = t(yt),
			o = t(I),
			s = t("./helper"),
			l = e[Vr]({
				type: "visualMap.piecewise",
				doRender: function() {
					function t(t) {
						var r = new n.Group;
						r.onclick = i.bind(this._onItemClick, this, t.piece), this._createItemSymbol(r, t.piece, [0, 0, f[0], f[1]]), v && r.add(new n.Text({
							style: {
								x: "right" === h ? -a : f[0] + a,
								y: f[1] / 2,
								text: t.piece.text,
								textBaseline: "middle",
								textAlign: h,
								textFont: l,
								fill: c
							}
						})), e.add(r)
					}
					var e = this.group;
					e[Mi]();
					var r = this.visualMapModel,
						a = r.get("textGap"),
						s = r.textStyleModel,
						l = s[er](),
						c = s[Ee](),
						h = this._getItemAlign(),
						f = r.itemSize,
						p = this._getViewData(),
						v = !p.endsText,
						m = !v;
					m && this._renderEndsText(e, p.endsText[0], f), i.each(p.pieceList, t, this), m && this._renderEndsText(e, p.endsText[1], f), o.box(r.get(d), e, r.get(u)), this.renderBackground(e), this[In](e)
				},
				_getItemAlign: function() {
					var t = this.visualMapModel,
						e = t[Yn];
					if (e[d] === Rn) return s.getItemAlign(t, this.api, t.itemSize);
					var i = e.align;
					return i && "auto" !== i || (i = "left"), i
				},
				_renderEndsText: function(t, e, i) {
					if (e) {
						var r = new n.Group,
							a = this.visualMapModel.textStyleModel;
						r.add(new n.Text({
							style: {
								x: i[0] / 2,
								y: i[1] / 2,
								textBaseline: "middle",
								textAlign: "center",
								text: e,
								textFont: a[er](),
								fill: a[Ee]()
							}
						})), t.add(r)
					}
				},
				_getViewData: function() {
					var t = this.visualMapModel,
						e = i.map(t.getPieceList(), function(t, e) {
							return {
								piece: t,
								index: e
							}
						}),
						n = t.get("text"),
						a = t.get(d),
						o = t.get(J);
					return (a === On ? o : !o) ? e[r]() : n && (n = n.slice()[r]()), {
						pieceList: e,
						endsText: n
					}
				},
				_createItemSymbol: function(t, e, i) {
					var n;
					if (this.visualMapModel.isCategory()) n = e.value;
					else if (null != e.value) n = e.value;
					else {
						var r = e[N] || [];
						n = (r[0] + r[1]) / 2
					}
					var o = this.getControllerVisual(n);
					t.add(a[pt](o[dt], i[0], i[1], i[2], i[3], o.color));
				},
				_onItemClick: function(t) {
					var e = this.visualMapModel,
						n = e[Yn],
						r = i.clone(n[g]),
						a = e.getSelectedMapKey(t);
					n.selectedMode === y ? (r[a] = !0, i.each(r, function(t, e) {
						r[e] = e === a
					})) : r[a] = !r[a], this.api[yn]({
						type: "selectDataRange",
						from: this.uid,
						visualMapId: this.visualMapModel.id,
						selected: r
					})
				}
			});
		return l
	}), e("echarts/component/visualMapPiecewise", [Kr, X, "./visualMap/preprocessor", "./visualMap/typeDefaulter", "./visualMap/visualCoding", "./visualMap/PiecewiseModel", "./visualMap/PiecewiseView", "./visualMap/visualMapAction"], function(t) {
		t(X)[$t](t("./visualMap/preprocessor")), t("./visualMap/typeDefaulter"), t("./visualMap/visualCoding"), t("./visualMap/PiecewiseModel"), t("./visualMap/PiecewiseView"), t("./visualMap/visualMapAction")
	}), e("echarts/component/visualMap", [Kr, "./visualMapContinuous", "./visualMapPiecewise"], function(t) {
		t("./visualMapContinuous"), t("./visualMapPiecewise")
	}), e("echarts/component/marker/MarkPointModel", [Kr, "../../model/globalDefault", At, A], function(t) {
		var e = t("../../model/globalDefault"),
			i = t(At);
		e.markPoint = {};
		var n = t(A)[Wt]({
			type: "markPoint",
			dependencies: [An, "grid", "polar"],
			init: function(t, e, i, n, r) {
				this[Dn](t, i), this[Tn](t, r, !0)
			},
			mergeOption: function(t, e, r) {
				if (!e) {
					var a = this[ar];
					a[le](function(t) {
						var e = t.get("markPoint"),
							o = t.markPointModel;
						if (!e || !e.data) return void(t.markPointModel = null);
						if (o) o[Tn](e, !0);
						else {
							r && i[dn](e.label, [Nn, "show", nr, wr, Qi]);
							var s = {
								seriesIndex: t[ln],
								name: t.name
							};
							o = new n(e, this, a, s, !0)
						}
						t.markPointModel = o
					}, this)
				}
			},
			defaultOption: {
				zlevel: 0,
				z: 5,
				symbol: "pin",
				symbolSize: 50,
				tooltip: {
					trigger: "item"
				},
				label: {
					normal: {
						show: !0,
						position: "inside"
					},
					emphasis: {
						show: !0
					}
				},
				itemStyle: {
					normal: {
						borderWidth: 2
					},
					emphasis: {}
				}
			}
		});
		return n
	}), e("echarts/component/marker/markerHelper", [Kr, Yr, mt], function(t) {
		function e(t, e, i) {
			var n = -1;
			do n = Math.max(r.getPrecision(t.get(e, i)), n), t = t.stackedOn; while (t);
			return n
		}

		function i(t, i, n, r, a) {
			var o = [],
				s = "average" === t ? i[Et](r, !0) / i.count() : i[Nt](r)["max" === t ? 1 : 0],
				l = i.indexOfNearest(r, s);
			o[1 - a] = i.get(n, l), o[a] = i.get(r, l, !0);
			var c = e(i, r, l);
			return c >= 0 && (o[a] = +o[a][Hn](c)), o
		}
		var n = t(Yr),
			r = t(mt),
			a = n.curry,
			o = {
				min: a(i, "min"),
				max: a(i, "max"),
				average: a(i, "average")
			},
			s = function(t, e, i) {
				if ((isNaN(i.x) || isNaN(i.y)) && !n[qn](i.coord) && e) {
					var r, a, s, l;
					null != i.valueIndex ? (r = e[Zt][i.valueIndex], a = e[Zt][1 - i.valueIndex], s = e[Q](r), l = e[Q](a)) : (l = e[st](), s = e[ot](l), a = l.dim, r = s.dim);
					var c = null != i.valueIndex ? i.valueIndex : "angle" === r || "x" === r ? 0 : 1;
					i = n[Vr]({}, i), i.type && o[i.type] && l && s ? (i.coord = o[i.type](t, l.dim, r, c), i.value = i.coord[c]) : i.coord = [null != i.xAxis ? i.xAxis : i.radiusAxis, null != i.yAxis ? i.yAxis : i.angleAxis]
				}
				return i
			},
			l = function(t, e) {
				return t && e.coord && (null == e.x || null == e.y) ? t.containData(e.coord) : !0
			},
			c = function(t, e, i, n) {
				return 2 > n ? t.coord && t.coord[n] : void t.value
			};
		return {
			dataTransform: s,
			dataFilter: l,
			dimValueGetter: c
		}
	}), e("echarts/component/marker/MarkPointView", [Kr, "../../chart/helper/SymbolDraw", Yr, p, At, mt, Tt, "./markerHelper", A], function(t) {
		function e(t, e, i) {
			var r = e[Zt],
				a = new c(n.map(r, e.getDimensionInfo, e), i);
			return t && a[Gt](n[Xr](n.map(i.get("data"), n.curry(u.dataTransform, e, t)), n.curry(u.dataFilter, t)), null, u.dimValueGetter), a
		}
		var i = t("../../chart/helper/SymbolDraw"),
			n = t(Yr),
			r = t(p),
			a = t(At),
			o = t(mt),
			s = r[Ki],
			l = r[Ji],
			c = t(Tt),
			u = t("./markerHelper"),
			h = {
				getRawDataArray: function() {
					return this[Yn].data
				},
				formatTooltip: function(t) {
					var e = this[sn](),
						i = this[an](t),
						r = n[qn](i) ? n.map(i, s).join(", ") : s(i),
						a = e[nn](t);
					return this.name + $i + ((a ? l(a) + " : " : "") + r)
				},
				getData: function() {
					return this._data
				},
				setData: function(t) {
					this._data = t
				}
			};
		n[sr](h, a.dataFormatMixin), t(A)[Ft]({
			type: "markPoint",
			init: function() {
				this._symbolDrawMap = {}
			},
			render: function(t, e, i) {
				var n = this._symbolDrawMap;
				for (var r in n) n[r].__keep = !1;
				e[le](function(t) {
					var e = t.markPointModel;
					e && this._renderSeriesMP(t, e, i)
				}, this);
				for (var r in n) n[r].__keep || (n[r][Li](), this.group[Li](n[r].group))
			},
			_renderSeriesMP: function(t, r, a) {
				var s = t[St],
					l = t.name,
					c = t[sn](),
					u = this._symbolDrawMap,
					d = u[l];
				d || (d = u[l] = new i);
				var f = e(s, c, r),
					p = s && s[Zt];
				n.mixin(r, h), r[ei](f), f.each(function(t) {
					var e, i = f[en](t),
						n = i[Dr]("x"),
						l = i[Dr]("y");
					if (null != n && null != l) e = [o[Wn](n, a[_n]()), o[Wn](l, a[xn]())];
					else if (s) {
						var u = f.get(p[0], t),
							h = f.get(p[1], t);
						e = s[rt]([u, h])
					}
					f[Dt](t, e);
					var d = i[Dr](ft);
					typeof d === Er && (d = d(r[an](t), r[tn](t))), f[ue](t, {
						symbolSize: d,
						color: i.get(ie) || c[Vt]("color"),
						symbol: i[Dr](dt)
					})
				}), d[vt](f), this.group.add(d.group), f[gi](function(t) {
					t[Ci](function(t) {
						t[Kt] = r
					})
				}), d.__keep = !0
			}
		})
	}), e("echarts/component/markPoint", [Kr, "./marker/MarkPointModel", "./marker/MarkPointView"], function(t) {
		t("./marker/MarkPointModel"), t("./marker/MarkPointView")
	}), e("echarts/component/marker/MarkLineModel", [Kr, "../../model/globalDefault", At, A], function(t) {
		var e = t("../../model/globalDefault"),
			i = t(At);
		e.markLine = {};
		var n = t(A)[Wt]({
			type: "markLine",
			dependencies: [An, "grid", "polar"],
			init: function(t, e, i, n, r) {
				this[Dn](t, i), this[Tn](t, r, !0)
			},
			mergeOption: function(t, e, r) {
				if (!e) {
					var a = this[ar];
					a[le](function(t) {
						var e = t.get("markLine"),
							o = t.markLineModel;
						if (!e || !e.data) return void(t.markLineModel = null);
						if (o) o[Tn](e, !0);
						else {
							r && i[dn](e.label, [Nn, "show", nr, wr, Qi]);
							var s = {
								seriesIndex: t[ln],
								name: t.name
							};
							o = new n(e, this, a, s, !0)
						}
						t.markLineModel = o
					}, this)
				}
			},
			defaultOption: {
				zlevel: 0,
				z: 5,
				symbol: [ht, "arrow"],
				symbolSize: [8, 16],
				precision: 2,
				tooltip: {
					trigger: "item"
				},
				label: {
					normal: {
						show: !0,
						position: "end"
					},
					emphasis: {
						show: !0
					}
				},
				lineStyle: {
					normal: {
						type: "dashed"
					},
					emphasis: {
						width: 3
					}
				},
				animationEasing: "linear"
			}
		});
		return n
	}), e("echarts/component/marker/MarkLineView", [Kr, Yr, Tt, p, At, mt, "./markerHelper", "../../chart/helper/LineDraw", A], function(t) {
		function e(t, e) {
			return u.dataFilter(t, e[0]) && u.dataFilter(t, e[1])
		}

		function i(t, i, a) {
			var o = t[Zt],
				s = new r(o, a),
				l = new r(o, a),
				c = new r([], a);
			if (t) {
				var h = t[st](),
					f = t[ot](h),
					p = a.get("precision"),
					v = n[Xr](n.map(a.get("data"), n.curry(d, i, t, h, f, p)), n.curry(e, t));
				s[Gt](n.map(v, function(t) {
					return t[0]
				}), null, u.dimValueGetter), l[Gt](n.map(v, function(t) {
					return t[1]
				}), null, u.dimValueGetter), c[Gt](n.map(v, function(t) {
					return t[2]
				}))
			}
			return {
				from: s,
				to: l,
				line: c
			}
		}
		var n = t(Yr),
			r = t(Tt),
			a = t(p),
			o = t(At),
			s = t(mt),
			l = a[Ki],
			c = a[Ji],
			u = t("./markerHelper"),
			h = t("../../chart/helper/LineDraw"),
			d = function(t, e, i, r, a, o) {
				var s = o.type;
				if (!n[qn](o) && "min" === s || "max" === s || "average" === s) {
					null != o.valueIndex && (i = e[Q](e[Zt][1 - o.valueIndex]), r = e[Q](e[Zt][o.valueIndex]));
					var l = i.dim + "Axis",
						c = r.dim + "Axis",
						h = i.scale[at](),
						d = n[Vr]({}, o),
						f = {};
					d.type = null, d[l] = h[0], f[l] = h[1];
					var p = "average" === s ? t[Et](r.dim, !0) / t.count() : t[Nt](r.dim)["max" === s ? 1 : 0];
					p = r[V](r[R](p)), d[c] = f[c] = p, o = [d, f, {
						type: s,
						value: +p[Hn](a)
					}]
				}
				return o = [u.dataTransform(t, e, o[0]), u.dataTransform(t, e, o[1]), n[Vr]({}, o[2])], n.merge(o[2], o[0]), n.merge(o[2], o[1]), o
			},
			f = {
				formatTooltip: function(t) {
					var e = this._data,
						i = this[an](t),
						r = n[qn](i) ? n.map(i, l).join(", ") : l(i),
						a = e[nn](t);
					return this.name + $i + ((a ? c(a) + " : " : "") + r)
				},
				getRawDataArray: function() {
					return this[Yn].data
				},
				getData: function() {
					return this._data
				},
				setData: function(t) {
					this._data = t
				}
			};
		n[sr](f, o.dataFormatMixin), t(A)[Ft]({
			type: "markLine",
			init: function() {
				this._markLineMap = {}
			},
			render: function(t, e, i) {
				var n = this._markLineMap;
				for (var r in n) n[r].__keep = !1;
				e[le](function(t) {
					var n = t.markLineModel;
					n && this._renderSeriesML(t, n, e, i)
				}, this);
				for (var r in n) n[r].__keep || this.group[Li](n[r].group)
			},
			_renderSeriesML: function(t, e, r, a) {
				function o(t, e, i) {
					var n, r = t[en](e),
						o = r.get("x"),
						c = r.get("y");
					if (null != o && null != c) n = [s[Wn](o, a[_n]()), s[Wn](c, a[xn]())];
					else {
						var h = t.get(m[0], e),
							d = t.get(m[1], e);
						n = l[rt]([h, d])
					}
					t[Dt](e, n), t[ue](e, {
						symbolSize: r.get(ft) || w[i ? 0 : 1],
						symbol: r.get(dt, !0) || _[i ? 0 : 1],
						color: r.get(ie) || u[Vt]("color")
					})
				}
				var l = t[St],
					c = t.name,
					u = t[sn](),
					d = this._markLineMap,
					p = d[c];
				p || (p = d[c] = new h), this.group.add(p.group);
				var v = i(l, u, e),
					m = l[Zt],
					g = v.from,
					y = v.to,
					x = v.line;
				n[Vr](e, f), e[ei](x);
				var _ = e.get(dt),
					w = e.get(ft);
				n[qn](_) || (_ = [_, _]), typeof w === Br && (w = [w, w]), v.from.each(function(t) {
					o(g, t, !0), o(y, t)
				}), x.each(function(t) {
					var e = x[en](t).get("lineStyle.normal.color");
					x[ue](t, {
						color: e || g[Lt](t, "color")
					}), x[Dt](t, [g[It](t), y[It](t)])
				}), p[vt](x, g, y), v.line[gi](function(t, i) {
					t[Ci](function(t) {
						t[Kt] = e
					})
				}), p.__keep = !0
			}
		})
	}), e("echarts/component/markLine", [Kr, "./marker/MarkLineModel", "./marker/MarkLineView"], function(t) {
		t("./marker/MarkLineModel"), t("./marker/MarkLineView")
	}), e("echarts/component/timeline/preprocessor", [Kr, Yr], function(t) {
		function e(t) {
			var e = t.type,
				a = {
					number: "value",
					time: "time"
				};
			if (a[e] && (t.axisType = a[e], delete t.type), i(t), n(t, "controlPosition")) {
				var o = t.controlStyle || (t.controlStyle = {});
				n(o, Nn) || (o[Nn] = t.controlPosition), "none" !== o[Nn] || n(o, "show") || (o.show = !1, delete o[Nn]), delete t.controlPosition
			}
			r.each(t.data || [], function(t) {
				r[Ln](t) && !r[qn](t) && (!n(t, "value") && n(t, "name") && (t.value = t.name), i(t))
			})
		}

		function i(t) {
			var e = t[oe] || (t[oe] = {}),
				i = e[hn] || (e[hn] = {}),
				a = (e[un] || (e[un] = {}), t.label || t.label || {}),
				o = a[un] || (a[un] = {}),
				s = {
					normal: 1,
					emphasis: 1
				};
			r.each(a, function(t, e) {
				s[e] || n(o, e) || (o[e] = t)
			}), i.label && !n(a, hn) && (a[hn] = i.label, delete i.label)
		}

		function n(t, e) {
			return t.hasOwnProperty(e)
		}
		var r = t(Yr);
		return function(t) {
			var i = t && t[Cn];
			r[qn](i) || (i = i ? [i] : []), r.each(i, function(t) {
				t && e(t)
			})
		}
	}), e("echarts/component/timeline/typeDefaulter", [Kr, P], function(t) {
		t(P)[Xn](Cn, function() {
			return "slider"
		})
	}), e("echarts/component/timeline/timelineAction", [Kr, A], function(t) {
		var e = t(A);
		e[Xt]({
			type: "timelineChange",
			event: "timelineChanged",
			update: "prepareAndUpdate"
		}, function(t, e) {
			var i = e[mn](Cn);
			i && null != t.currentIndex && (i.setCurrentIndex(t.currentIndex), !i.get("loop", !0) && i.isIndexMax() && i.setPlayState(!1)), e[kn](Cn)
		}), e[Xt]({
			type: "timelinePlayChange",
			event: "timelinePlayChanged",
			update: "update"
		}, function(t, e) {
			var i = e[mn](Cn);
			i && null != t.playState && i.setPlayState(t.playState)
		})
	}), e("echarts/component/timeline/TimelineModel", [Kr, P, Tt, Yr, At], function(t) {
		var e = t(P),
			i = t(Tt),
			n = t(Yr),
			r = t(At),
			a = e[Vr]({
				type: "timeline",
				layoutMode: "box",
				defaultOption: {
					zlevel: 0,
					z: 4,
					show: !0,
					axisType: "time",
					realtime: !0,
					left: "20%",
					top: null,
					right: "20%",
					bottom: 0,
					width: null,
					height: 40,
					padding: 5,
					controlPosition: "left",
					autoPlay: !1,
					rewind: !1,
					loop: !0,
					playInterval: 2e3,
					currentIndex: 0,
					itemStyle: {
						normal: {},
						emphasis: {}
					},
					label: {
						normal: {
							textStyle: {
								color: "#000"
							}
						},
						emphasis: {}
					},
					data: []
				},
				init: function(t, e, i) {
					this._data, this._names, this[Dn](t, i), this._initData()
				},
				mergeOption: function(t) {
					this[m](Tn, arguments), this._initData()
				},
				setCurrentIndex: function(t) {
					null == t && (t = this[Yn].currentIndex);
					var e = this._data.count();
					this[Yn].loop ? t = (t % e + e) % e : (t >= e && (t = e - 1), 0 > t && (t = 0)), this[Yn].currentIndex = t
				},
				getCurrentIndex: function() {
					return this[Yn].currentIndex
				},
				isIndexMax: function() {
					return this.getCurrentIndex() >= this._data.count() - 1
				},
				setPlayState: function(t) {
					this[Yn].autoPlay = !!t
				},
				getPlayState: function() {
					return !!this[Yn].autoPlay
				},
				_initData: function() {
					var t = this[Yn],
						e = t.data || [],
						a = t.axisType,
						o = this._names = [];
					if (a === Mt) {
						var s = [];
						n.each(e, function(t, e) {
							var i, a = r.getDataItemValue(t);
							n[Ln](t) ? (i = n.clone(t), i.value = e) : i = e, s.push(i), n[Sn](a) || null != a && !isNaN(a) || (a = ""), o.push(a + "")
						}), e = s
					}
					var l = {
							category: "ordinal",
							time: "time"
						}[a] || Br,
						c = this._data = new i([{
							name: "value",
							type: l
						}], this);
					c[Gt](e, o)
				},
				getData: function() {
					return this._data
				},
				getCategories: function() {
					return this.get("axisType") === Mt ? this._names.slice() : void 0
				}
			});
		return a
	}), e("echarts/component/timeline/SliderTimelineModel", [Kr, "./TimelineModel"], function(t) {
		var e = t("./TimelineModel");
		return e[Vr]({
			type: "timeline.slider",
			defaultOption: {
				backgroundColor: "rgba(0,0,0,0)",
				borderColor: "#ccc",
				borderWidth: 0,
				orient: "horizontal",
				inverse: !1,
				tooltip: !1,
				symbol: "emptyCircle",
				symbolSize: 10,
				lineStyle: {
					show: !0,
					width: 2,
					color: "#304654"
				},
				label: {
					position: "auto",
					normal: {
						show: !0,
						interval: "auto",
						rotate: 0,
						textStyle: {
							color: "#304654"
						}
					},
					emphasis: {
						show: !0,
						textStyle: {
							color: "#c23531"
						}
					}
				},
				itemStyle: {
					normal: {
						color: "#304654",
						borderWidth: 1
					},
					emphasis: {
						color: "#c23531"
					}
				},
				checkpointStyle: {
					symbol: "circle",
					symbolSize: 13,
					color: "#c23531",
					borderWidth: 5,
					borderColor: "rgba(194,53,49, 0.5)",
					animation: !0,
					animationDuration: 300,
					animationEasing: "quinticInOut"
				},
				controlStyle: {
					show: !0,
					showPlayBtn: !0,
					showPrevBtn: !0,
					showNextBtn: !0,
					itemSize: 22,
					itemGap: 12,
					position: "left",
					playIcon: "path://M31.6,53C17.5,53,6,41.5,6,27.4S17.5,1.8,31.6,1.8C45.7,1.8,57.2,13.3,57.2,27.4S45.7,53,31.6,53z M31.6,3.3 C18.4,3.3,7.5,14.1,7.5,27.4c0,13.3,10.8,24.1,24.1,24.1C44.9,51.5,55.7,40.7,55.7,27.4C55.7,14.1,44.9,3.3,31.6,3.3z M24.9,21.3 c0-2.2,1.6-3.1,3.5-2l10.5,6.1c1.899,1.1,1.899,2.9,0,4l-10.5,6.1c-1.9,1.1-3.5,0.2-3.5-2V21.3z",
					stopIcon: "path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z",
					nextIcon: "path://M18.6,50.8l22.5-22.5c0.2-0.2,0.3-0.4,0.3-0.7c0-0.3-0.1-0.5-0.3-0.7L18.7,4.4c-0.1-0.1-0.2-0.3-0.2-0.5 c0-0.4,0.3-0.8,0.8-0.8c0.2,0,0.5,0.1,0.6,0.3l23.5,23.5l0,0c0.2,0.2,0.3,0.4,0.3,0.7c0,0.3-0.1,0.5-0.3,0.7l-0.1,0.1L19.7,52 c-0.1,0.1-0.3,0.2-0.5,0.2c-0.4,0-0.8-0.3-0.8-0.8C18.4,51.2,18.5,51,18.6,50.8z",
					prevIcon: "path://M43,52.8L20.4,30.3c-0.2-0.2-0.3-0.4-0.3-0.7c0-0.3,0.1-0.5,0.3-0.7L42.9,6.4c0.1-0.1,0.2-0.3,0.2-0.5 c0-0.4-0.3-0.8-0.8-0.8c-0.2,0-0.5,0.1-0.6,0.3L18.3,28.8l0,0c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.3,0.1,0.5,0.3,0.7l0.1,0.1L41.9,54 c0.1,0.1,0.3,0.2,0.5,0.2c0.4,0,0.8-0.3,0.8-0.8C43.2,53.2,43.1,53,43,52.8z",
					normal: {
						color: "#304654",
						borderColor: "#304654",
						borderWidth: 1
					},
					emphasis: {
						color: "#c23531",
						borderColor: "#c23531",
						borderWidth: 2
					}
				},
				data: []
			}
		})
	}), e("echarts/component/timeline/TimelineView", [Kr, "../../view/Component"], function(t) {
		var e = t("../../view/Component");
		return e[Vr]({
			type: "timeline"
		})
	}), e("echarts/component/timeline/TimelineAxis", [Kr, Yr, "../../coord/Axis", D], function(t) {
		var e = t(Yr),
			i = t("../../coord/Axis"),
			n = t(D),
			r = function(t, e, n, r) {
				i.call(this, t, e, n), this.type = r || "value", this._autoLabelInterval, this.model = null
			};
		return r[$r] = {
			constructor: r,
			getLabelInterval: function() {
				var t = this.model,
					i = t[rr](S),
					r = i.get(N);
				if (null != r && "auto" != r) return r;
				var r = this._autoLabelInterval;
				return r || (r = this._autoLabelInterval = n.getAxisLabelInterval(e.map(this.scale[H](), this[R], this), n[O](this, i.get(Qi)), i[rr](nr)[er](), t.get(d) === On)), r
			},
			isLabelIgnored: function(t) {
				if (this.type === Mt) {
					var e = this.getLabelInterval();
					return typeof e === Er && !e(t, this.scale[F](t)) || t % (e + 1)
				}
			}
		}, e[zr](r, i), r
	}), e("echarts/component/timeline/SliderTimelineView", [Kr, Yr, gt, I, "./TimelineView", "./TimelineAxis", yt, D, xr, _r, mt, At, p], function(t) {
		function e(t, e) {
			return l[zn](t[k](), {
				width: e[_n](),
				height: e[xn]()
			}, t.get(f))
		}

		function i(t, e, i, n) {
			var r = s.makePath(t.get(e)[jn](/^path:\/\//, ""), o.clone(n || {}), new y(i[0], i[1], i[2], i[3]), cr);
			return r
		}

		function n(t, e, i, n, r, a) {
			var s = t.get(dt),
				l = e.get("color"),
				c = t.get(ft),
				u = c / 2,
				h = e[ut](["color", dt, ft]);
			return r ? (r[He](h), r[xt](l), i.add(r), a && a.onUpdate(r)) : (r = m[pt](s, -u, -u, c, c, l), i.add(r), a && a.onCreate(r)), n = o.merge({
				rectHover: !0,
				style: h,
				z2: 100
			}, n, !0), r.attr(n), r
		}

		function a(t, e, i, n, r) {
			if (!t.dragging) {
				var a = n[rr]("checkpointStyle"),
					o = i[R](n[sn]().get(["value"], e));
				r || !a.get(Ei, !0) ? t.attr({
					position: [o, 0]
				}) : (t[Ri](!0), t[Oe]({
					position: [o, 0]
				}, a.get("animationDuration", !0), a.get("animationEasing", !0)))
			}
		}
		var o = t(Yr),
			s = t(gt),
			l = t(I),
			c = t("./TimelineView"),
			v = t("./TimelineAxis"),
			m = t(yt),
			g = t(D),
			y = t(xr),
			x = t(_r),
			_ = t(mt),
			w = t(At),
			A = t(p),
			C = A[Ji],
			T = o.bind,
			L = o.each,
			P = Math.PI;
		return c[Vr]({
			type: "timeline.slider",
			init: function(t, e) {
				this.api = e, this._axis, this._viewRect, this._timer, this._currentPointer, this._mainGroup, this._labelGroup
			},
			render: function(t, e, i, n) {
				if (this.model = t, this.api = i, this[ar] = e, this.group[Mi](), t.get("show", !0)) {
					var r = this._layout(t, i),
						a = this._createGroup("mainGroup"),
						o = this._createGroup("labelGroup"),
						s = this._axis = this._createAxis(r, t);
					L(["AxisLine", "AxisTick", "Control", "CurrentPointer"], function(e) {
						this["_render" + e](r, a, s, t)
					}, this), this._renderAxisLabel(r, o, s, t), this._position(r, t)
				}
				this._doPlayStop()
			},
			remove: function() {
				this._clearTimer(), this.group[Mi]()
			},
			dispose: function() {
				this._clearTimer()
			},
			_layout: function(t, i) {
				var n = t.get("label.normal.position"),
					a = t.get(d),
					o = e(t, i);
				null == n || "auto" === n ? n = a === On ? o.y + o[gr] / 2 < i[xn]() / 2 ? "-" : "+" : o.x + o.width / 2 < i[_n]() / 2 ? "+" : "-" : isNaN(n) && (n = {
					horizontal: {
						top: "-",
						bottom: "+"
					},
					vertical: {
						left: "-",
						right: "+"
					}
				}[a][n]);
				var s = {
						horizontal: "center",
						vertical: n >= 0 || "+" === n ? "left" : "right"
					},
					l = {
						horizontal: n >= 0 || "+" === n ? "top" : hr,
						vertical: "middle"
					},
					c = {
						horizontal: 0,
						vertical: P / 2
					},
					h = a === Rn ? o[gr] : o.width,
					f = t[rr]("controlStyle"),
					p = f.get("show"),
					v = p ? f.get("itemSize") : 0,
					m = p ? f.get(u) : 0,
					g = v + m,
					y = t.get("label.normal.rotate") || 0;
				y = y * P / 180;
				var x, _, w, b, M = f.get(Nn, !0),
					p = f.get("show", !0),
					S = p && f.get("showPlayBtn", !0),
					A = p && f.get("showPrevBtn", !0),
					C = p && f.get("showNextBtn", !0),
					T = 0,
					k = h;
				return "left" === M || M === hr ? (S && (x = [0, 0], T += g), A && (_ = [T, 0], T += g), C && (w = [k - v, 0], k -= g)) : (S && (x = [k - v, 0], k -= g), A && (_ = [0, 0], T += g), C && (w = [k - v, 0], k -= g)), b = [T, k], t.get(J) && b[r](), {
					viewRect: o,
					mainLength: h,
					orient: a,
					rotation: c[a],
					labelRotation: y,
					labelPosOpt: n,
					labelAlign: s[a],
					labelBaseline: l[a],
					playPosition: x,
					prevBtnPosition: _,
					nextBtnPosition: w,
					axisExtent: b,
					controlSize: v,
					controlGap: m
				}
			},
			_position: function(t, e) {
				function i(t) {
					var e = t[Nn];
					t[ji] = [h[0][0] - e[0], h[1][0] - e[1]]
				}

				function n(t) {
					return [
						[t.x, t.x + t.width],
						[t.y, t.y + t[gr]]
					]
				}

				function r(t, e, i, n, r) {
					t[n] += i[n][r] - e[n][r]
				}
				var a = this._mainGroup,
					o = this._labelGroup,
					s = t.viewRect;
				if (t[d] === Rn) {
					var l = x[mr](),
						c = s.x,
						u = s.y + s[gr];
					x[vr](l, l, [-c, -u]), x[Zi](l, l, -P / 2), x[vr](l, l, [c, u]), s = s.clone(), s[yr](l)
				}
				var h = n(s),
					f = n(a[ir]()),
					p = n(o[ir]()),
					v = a[Nn],
					m = o[Nn];
				m[0] = v[0] = h[0][0];
				var g = t.labelPosOpt;
				if (isNaN(g)) {
					var y = "+" === g ? 0 : 1;
					r(v, f, h, 1, y), r(m, p, h, 1, 1 - y)
				} else {
					var y = g >= 0 ? 0 : 1;
					r(v, f, h, 1, y), m[1] = v[1] + g
				}
				a[Nn] = v, o[Nn] = m, a[Xi] = o[Xi] = t[Xi], i(a), i(o)
			},
			_createAxis: function(t, e) {
				var i = e[sn](),
					n = e.get("axisType"),
					r = g[E](e, n),
					a = i[Nt]("value");
				r[W](a[0], a[1]), this._customizeScale(r, i), r.niceTicks();
				var o = new v("value", r, t.axisExtent, n);
				return o.model = e, o
			},
			_customizeScale: function(t, e) {
				t[H] = function() {
					return e[Rt](["value"], function(t) {
						return t
					})
				}, t.getTicksLabels = function() {
					return o.map(this[H](), t[F], t)
				}
			},
			_createGroup: function(t) {
				var e = this["_" + t] = new s.Group;
				return this.group.add(e), e
			},
			_renderAxisLine: function(t, e, i, n) {
				var r = i[at]();
				n.get("lineStyle.show") && e.add(new s.Line({
					shape: {
						x1: r[0],
						y1: 0,
						x2: r[1],
						y2: 0
					},
					style: o[Vr]({
						lineCap: "round"
					}, n[rr](se)[Y]()),
					silent: !0,
					z2: 1
				}))
			},
			_renderAxisTick: function(t, e, i, r) {
				var a = r[sn](),
					o = i.scale[H](),
					l = this._prepareTooltipHostModel(a, r);
				L(o, function(t, r) {
					var o = i[R](t),
						c = a[en](r),
						u = c[rr](b),
						h = c[rr](M),
						d = {
							position: [o, 0],
							onclick: T(this._changeTimeline, this, r)
						},
						f = n(c, u, e, d);
					s[Ze](f, h[ut]()), c.get("tooltip") ? (f[_i] = r, f[Kt] = l) : f[_i] = f[Kt] = null
				}, this)
			},
			_prepareTooltipHostModel: function(t, e) {
				var i = w[cn]({}, t, e.get("data")),
					n = this;
				return i[h] = function(t) {
					return C(n._axis.scale[F](t))
				}, i
			},
			_renderAxisLabel: function(t, e, i, n) {
				var r = n[rr](S);
				if (r.get("show")) {
					var a = n[sn](),
						o = i.scale[H](),
						l = g[O](i, r.get(Qi)),
						c = i.getLabelInterval();
					L(o, function(n, r) {
						if (!i.isLabelIgnored(r, c)) {
							var o = a[en](r),
								u = o[rr]("label.normal.textStyle"),
								h = o[rr]("label.emphasis.textStyle"),
								d = i[R](n),
								f = new s.Text({
									style: {
										text: l[r],
										textAlign: t.labelAlign,
										textBaseline: t.labelBaseline,
										textFont: u[er](),
										fill: u[Ee]()
									},
									position: [d, 0],
									rotation: t.labelRotation - t[Xi],
									onclick: T(this._changeTimeline, this, r),
									silent: !1
								});
							e.add(f), s[Ze](f, h[ut]())
						}
					}, this)
				}
			},
			_renderControl: function(t, e, n, r) {
				function a(t, n, a, d) {
					if (t) {
						var f = {
								position: t,
								origin: [o / 2, 0],
								rotation: d ? -l : 0,
								rectHover: !0,
								style: c,
								onclick: a
							},
							p = i(r, n, h, f);
						e.add(p), s[Ze](p, u)
					}
				}
				var o = t.controlSize,
					l = t[Xi],
					c = r[rr]("controlStyle.normal")[ut](),
					u = r[rr]("controlStyle.emphasis")[ut](),
					h = [0, -o / 2, o, o],
					d = r.getPlayState(),
					f = r.get(J, !0);
				a(t.nextBtnPosition, "controlStyle.nextIcon", T(this._changeTimeline, this, f ? "-" : "+")), a(t.prevBtnPosition, "controlStyle.prevIcon", T(this._changeTimeline, this, f ? "+" : "-")), a(t.playPosition, "controlStyle." + (d ? "stopIcon" : "playIcon"), T(this._handlePlayClick, this, !d), !0)
			},
			_renderCurrentPointer: function(t, e, i, r) {
				var o = r[sn](),
					s = r.getCurrentIndex(),
					l = o[en](s)[rr]("checkpointStyle"),
					c = this,
					u = {
						onCreate: function(t) {
							t[zi] = !0, t.drift = T(c._handlePointerDrag, c), t.ondragend = T(c._handlePointerDragend, c), a(t, s, i, r, !0)
						},
						onUpdate: function(t) {
							a(t, s, i, r)
						}
					};
				this._currentPointer = n(l, l, this._mainGroup, {}, this._currentPointer, u)
			},
			_handlePlayClick: function(t) {
				this._clearTimer(), this.api[yn]({
					type: "timelinePlayChange",
					playState: t,
					from: this.uid
				})
			},
			_handlePointerDrag: function(t, e, i) {
				this._clearTimer(), this._pointerChangeTimeline([i[ke], i[Te]])
			},
			_handlePointerDragend: function(t) {
				this._pointerChangeTimeline([t[ke], t[Te]], !0)
			},
			_pointerChangeTimeline: function(t, e) {
				var i = this._toAxisCoord(t)[0],
					n = this._axis,
					r = _.asc(n[at]().slice());
				i > r[1] && (i = r[1]), i < r[0] && (i = r[0]), this._currentPointer[Nn][0] = i, this._currentPointer.dirty();
				var a = this._findNearestTick(i),
					o = this.model;
				(e || a !== o.getCurrentIndex() && o.get("realtime")) && this._changeTimeline(a)
			},
			_doPlayStop: function() {
				function t() {
					var t = this.model;
					this._changeTimeline(t.getCurrentIndex() + (t.get("rewind", !0) ? -1 : 1))
				}
				this._clearTimer(), this.model.getPlayState() && (this._timer = setTimeout(T(t, this), this.model.get("playInterval")))
			},
			_toAxisCoord: function(t) {
				var e = this._mainGroup[Hi]();
				return s[yr](t, e, !0)
			},
			_findNearestTick: function(t) {
				var e, i = this.model[sn](),
					n = 1 / 0,
					r = this._axis;
				return i.each(["value"], function(i, a) {
					var o = r[R](i),
						s = Math.abs(o - t);
					n > s && (n = s, e = a)
				}), e
			},
			_clearTimer: function() {
				this._timer && (clearTimeout(this._timer), this._timer = null)
			},
			_changeTimeline: function(t) {
				var e = this.model.getCurrentIndex();
				"+" === t ? t = e + 1 : "-" === t && (t = e - 1), this.api[yn]({
					type: "timelineChange",
					currentIndex: t,
					from: this.uid
				})
			}
		})
	}), e("echarts/component/timeline", [Kr, X, "./timeline/preprocessor", "./timeline/typeDefaulter", "./timeline/timelineAction", "./timeline/SliderTimelineModel", "./timeline/SliderTimelineView"], function(t) {
		var e = t(X);
		e[$t](t("./timeline/preprocessor")), t("./timeline/typeDefaulter"), t("./timeline/timelineAction"), t("./timeline/SliderTimelineModel"), t("./timeline/SliderTimelineView")
	}), e("echarts/component/toolbox/featureManager", [Kr], function(t) {
		var e = {};
		return {
			register: function(t, i) {
				e[t] = i
			},
			get: function(t) {
				return e[t]
			}
		}
	}), e("echarts/component/toolbox/ToolboxModel", [Kr, "./featureManager", Yr, A], function(t) {
		var e = t("./featureManager"),
			i = t(Yr);
		t(A)[Wt]({
			type: "toolbox",
			mergeDefaultAndTheme: function(t) {
				this[m](Dn, arguments), i.each(this[Yn].feature, function(t, n) {
					var r = e.get(n);
					r && i.merge(t, r.defaultOption)
				})
			},
			defaultOption: {
				show: !0,
				z: 6,
				zlevel: 0,
				orient: "horizontal",
				left: "right",
				top: "top",
				backgroundColor: "transparent",
				borderColor: "#ccc",
				borderWidth: 0,
				padding: 5,
				itemSize: 15,
				itemGap: 8,
				showTitle: !0,
				iconStyle: {
					normal: {
						borderColor: "#666",
						color: "none"
					},
					emphasis: {
						borderColor: "#3E98C5"
					}
				}
			}
		})
	}), e("echarts/component/toolbox/ToolboxView", [Kr, "./featureManager", Yr, gt, C, "../../data/DataDiffer", "../helper/listComponent", pr, A], function(t) {
		var e = t("./featureManager"),
			i = t(Yr),
			n = t(gt),
			r = t(C),
			a = t("../../data/DataDiffer"),
			o = t("../helper/listComponent"),
			s = t(pr);
		return t(A)[Ft]({
			type: "toolbox",
			render: function(t, l, u) {
				function h(i, n) {
					var a, o = g[i],
						s = g[n],
						c = v[o],
						h = new r(c, t, t[ar]);
					if (o && !s) {
						var f = e.get(o);
						if (!f) return;
						m[o] = a = new f(h)
					} else {
						if (a = m[s], !a) return;
						a.model = h
					}
					return !o && s ? void(a[fe] && a[fe](l, u)) : h.get("show") ? (d(h, a, o), h.setIconStatus = function(t, e) {
						var i = this[Yn],
							n = this.iconPaths;
						i.iconStatus = i.iconStatus || {}, i.iconStatus[t] = e, n[t] && n[t][wi](e)
					}, void(a[bi] && a[bi](h, l, u))) : void(a[Li] && a[Li](l, u))
				}

				function d(e, r, a) {
					var o = e[rr]("iconStyle"),
						s = r.getIcons ? r.getIcons() : e.get("icon"),
						c = e.get("title") || {};
					if (typeof s === Gr) {
						var h = s,
							d = c;
						s = {}, c = {}, s[a] = h, c[a] = d
					}
					var v = e.iconPaths = {};
					i.each(s, function(a, s) {
						var h = o[rr](un)[ut](),
							d = o[rr](hn)[ut](),
							m = n.makePath(a, {
								style: h,
								hoverStyle: d,
								rectHover: !0
							}, {
								x: -p / 2,
								y: -p / 2,
								width: p,
								height: p
							}, cr);
						n[Ze](m), t.get("showTitle") && (m.__title = c[s], m.on(Ge, function() {
							m[He]({
								text: c[s],
								textPosition: d[mi] || hr,
								textFill: d.fill || d[kr] || "#000",
								textAlign: d[vi] || cr
							})
						}).on(Be, function() {
							m[He]({
								textFill: null
							})
						})), m[wi](e.get("iconStatus." + s) || un), f.add(m), m.on("click", i.bind(r.onclick, r, l, u, s)), v[s] = m
					})
				}
				var f = this.group;
				if (f[Mi](), t.get("show")) {
					var p = +t.get("itemSize"),
						v = t.get("feature") || {},
						m = this._features || (this._features = {}),
						g = [];
					i.each(v, function(t, e) {
						g.push(e)
					}), new a(this._featureNames || [], g).add(h)[we](h)[Li](i.curry(h, null))[lt](), this._featureNames = g, o[c](f, t, u), o.addBackground(f, t), f[Bn](function(t) {
						var e = t.__title,
							i = t[Fe];
						if (i && e) {
							var n = s[ir](e, i.font),
								r = t[Nn][0] + f[Nn][0],
								a = t[Nn][1] + f[Nn][1] + p,
								o = !1;
							a + n[gr] > u[xn]() && (i[mi] = "top", o = !0);
							var l = o ? -5 - n[gr] : p + 8;
							r + n.width / 2 > u[_n]() ? (i[mi] = ["100%", l], i[vi] = "right") : r - n.width / 2 < 0 && (i[mi] = [0, l], i[vi] = "left")
						}
					})
				}
			},
			remove: function(t, e) {
				i.each(this._features, function(i) {
					i[Li] && i[Li](t, e)
				}), this.group[Mi]()
			},
			dispose: function(t, e) {
				i.each(this._features, function(i) {
					i[fe] && i[fe](t, e)
				})
			}
		})
	}), e("echarts/component/toolbox/feature/SaveAsImage", [Kr, "../featureManager"], function(t) {
		function e(t) {
			this.model = t
		}
		e.defaultOption = {
			show: !0,
			icon: "M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6            M29.2,45.1L29.2,0",
			title: "淇濆瓨涓哄浘鐗�",
			type: "png",
			name: "",
			excludeComponents: ["toolbox"],
			pixelRatio: 1
		};
		var i = e[$r];
		return i.onclick = function(t, e) {
			var i = this.model,
				n = t.get("title.0.text") || "echarts",
				r = document[Wr]("a"),
				a = i.get("type", !0) || "png";
			r.download = n + "." + a, r[Bi] = "_blank", r.href = e.getConnectedDataURL({
				type: a,
				backgroundColor: i.get(me, !0) || t.get(me) || "#fff",
				excludeComponents: i.get("excludeComponents"),
				pixelRatio: i.get("pixelRatio")
			}), r.click()
		}, t("../featureManager")[gn]("saveAsImage", e), e
	}), e("echarts/component/toolbox/feature/MagicType", [Kr, Yr, "../../../echarts", "../featureManager"], function(t) {
		function e(t) {
			this.model = t
		}
		var i = t(Yr);
		e.defaultOption = {
			show: !0,
			type: [],
			icon: {
				line: "M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4",
				bar: "M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7",
				stack: "M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z",
				tiled: "M2.3,2.2h22.8V25H2.3V2.2z M35,2.2h22.8V25H35V2.2zM2.3,35h22.8v22.8H2.3V35z M35,35h22.8v22.8H35V35z"
			},
			title: {
				line: "鍒囨崲涓烘姌绾垮浘",
				bar: "鍒囨崲涓烘煴鐘跺浘",
				stack: "鍒囨崲涓哄爢鍙�",
				tiled: "鍒囨崲涓哄钩閾�"
			},
			option: {},
			seriesIndex: {}
		};
		var n = e[$r];
		n.getIcons = function() {
			var t = this.model,
				e = t.get("icon"),
				n = {};
			return i.each(t.get("type"), function(t) {
				e[t] && (n[t] = e[t])
			}), n
		};
		var r = {
				line: function(t, e, n, r) {
					return "bar" === t ? i.merge({
						id: e,
						type: "line",
						data: n.get("data"),
						stack: n.get("stack")
					}, r.get("option.line")) : void 0
				},
				bar: function(t, e, n, r) {
					return "line" === t ? i.merge({
						id: e,
						type: "bar",
						data: n.get("data"),
						stack: n.get("stack")
					}, r.get("option.bar")) : void 0
				},
				stack: function(t, e, i, n) {
					return "line" === t || "bar" === t ? {
						id: e,
						stack: "__ec_magicType_stack__"
					} : void 0
				},
				tiled: function(t, e, i, n) {
					return "line" === t || "bar" === t ? {
						id: e,
						stack: ""
					} : void 0
				}
			},
			a = [
				["line", "bar"],
				["stack", "tiled"]
			];
		n.onclick = function(t, e, n) {
			var o = this.model,
				s = o.get("seriesIndex." + n);
			if (r[n]) {
				var l = {
						series: []
					},
					c = function(t) {
						var e = t.subType,
							a = t.id,
							s = r[n](e, a, t, o);
						s && (i[sr](s, t[Yn]), l[An].push(s))
					};
				i.each(a, function(t) {
					i[Zr](t, n) >= 0 && i.each(t, function(t) {
						o.setIconStatus(t, un)
					})
				}), o.setIconStatus(n, hn), t[te]({
					mainType: "series",
					seriesIndex: s
				}, c), e[yn]({
					type: "changeMagicType",
					currentType: n,
					newOption: l
				})
			}
		};
		var o = t("../../../echarts");
		return o[Xt]({
			type: "changeMagicType",
			event: "magicTypeChanged",
			update: "prepareAndUpdate"
		}, function(t, e) {
			e[Tn](t.newOption)
		}), t("../featureManager")[gn]("magicType", e), e
	}), e("echarts/component/toolbox/feature/DataView", [Kr, Yr, Pe, "../featureManager", "../../../echarts"], function(t) {
		function e(t) {
			var e = {},
				i = [],
				n = [];
			return t.eachRawSeries(function(t) {
				var r = t[St];
				if (!r || r.type !== T && "polar" !== r.type) i.push(t);
				else {
					var a = r[st]();
					if (a.type === Mt) {
						var o = a.dim + "_" + a.index;
						e[o] || (e[o] = {
							categoryAxis: a,
							valueAxis: r[ot](a),
							series: []
						}, n.push({
							axisDim: a.dim,
							axisIndex: a.index
						})), e[o][An].push(t)
					} else i.push(t)
				}
			}), {
				seriesGroupByCategoryAxis: e,
				other: i,
				meta: n
			}
		}

		function i(t) {
			var e = [];
			return f.each(t, function(t, i) {
				var n = t.categoryAxis,
					r = t.valueAxis,
					a = r.dim,
					o = [" "][Nr](f.map(t[An], function(t) {
						return t.name
					})),
					s = [n.model[bt]()];
				f.each(t[An], function(t) {
					s.push(t.getRawData()[Rt](a, function(t) {
						return t
					}))
				});
				for (var l = [o.join(m)], c = 0; c < s[0][qr]; c++) {
					for (var u = [], h = 0; h < s[qr]; h++) u.push(s[h][c]);
					l.push(u.join(m))
				}
				e.push(l.join("\n"))
			}), e.join("\n\n" + v + "\n\n")
		}

		function r(t) {
			return f.map(t, function(t) {
				var e = t.getRawData(),
					i = [t.name],
					n = [];
				return e.each(e[Zt], function() {
					for (var t = arguments[qr], r = arguments[t - 1], a = e[nn](r), o = 0; t - 1 > o; o++) n[o] = arguments[o];
					i.push((a ? a + m : "") + n.join(m))
				}), i.join("\n")
			}).join("\n\n" + v + "\n\n")
		}

		function a(t) {
			var n = e(t);
			return {
				value: f[Xr]([i(n.seriesGroupByCategoryAxis), r(n.other)], function(t) {
					return t[jn](/[\n\t\s]/g, "")
				}).join("\n\n" + v + "\n\n"),
				meta: n.meta
			}
		}

		function o(t) {
			return t[jn](/^\s\s*/, "")[jn](/\s\s*$/, "")
		}

		function s(t) {
			var e = t.slice(0, t[Zr]("\n"));
			return e[Zr](m) >= 0 ? !0 : void 0
		}

		function l(t) {
			for (var e = t.split(/\n+/g), i = o(e.shift()).split(g), n = [], r = f.map(i, function(t) {
					return {
						name: t,
						data: []
					}
				}), a = 0; a < e[qr]; a++) {
				var s = o(e[a]).split(g);
				n.push(s.shift());
				for (var l = 0; l < s[qr]; l++) r[l] && (r[l].data[a] = s[l])
			}
			return {
				series: r,
				categories: n
			}
		}

		function c(t) {
			for (var e = t.split(/\n+/g), i = o(e.shift()), n = [], r = 0; r < e[qr]; r++) {
				var a, s = o(e[r]).split(g),
					l = "",
					c = !1;
				isNaN(s[0]) ? (c = !0, l = s[0], s = s.slice(1), n[r] = {
					name: l,
					value: []
				}, a = n[r].value) : a = n[r] = [];
				for (var u = 0; u < s[qr]; u++) a.push(+s[u]);
				1 === a[qr] && (c ? n[r].value = a[0] : n[r] = a[0])
			}
			return {
				name: i,
				data: n
			}
		}

		function u(t, e) {
			var i = t.split(new RegExp("\n*" + v + "\n*", "g")),
				r = {
					series: []
				};
			return f.each(i, function(t, i) {
				if (s(t)) {
					var a = l(t),
						o = e[i],
						u = o.axisDim + "Axis";
					o && (r[u] = r[u] || [], r[u][o[pn]] = {
						data: a[n]
					}, r[An] = r[An][Nr](a[An]))
				} else {
					var a = c(t);
					r[An].push(a)
				}
			}), r
		}

		function h(t) {
			this._dom = null, this.model = t
		}

		function d(t, e) {
			return f.map(t, function(t, i) {
				var n = e && e[i];
				return f[Ln](n) && !f[qn](n) ? (f[Ln](t) && !f[qn](t) && (t = t.value), f[sr]({
					value: t
				}, n)) : t
			})
		}
		var f = t(Yr),
			p = t(Pe),
			v = new Array(60).join("-"),
			m = "	",
			g = new RegExp("[" + m + "]+", "g");
		return h.defaultOption = {
			show: !0,
			readOnly: !1,
			icon: "M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28",
			title: "鏁版嵁瑙嗗浘",
			lang: ["鏁版嵁瑙嗗浘", "鍏抽棴", "鍒锋柊"],
			backgroundColor: "#fff",
			textColor: "#000",
			textareaColor: "#fff",
			textareaBorderColor: "#333",
			buttonColor: "#c23531",
			buttonTextColor: "#fff"
		}, h[$r].onclick = function(t, e) {
			function i() {
				n.removeChild(o), x._dom = null
			}
			var n = e[wn](),
				r = this.model;
			this._dom && n.removeChild(this._dom);
			var o = document[Wr]("div");
			o.style.cssText = "position:absolute;left:5px;top:5px;bottom:5px;right:5px;", o.style[me] = r.get(me) || "#fff";
			var s = document[Wr]("h4"),
				l = r.get("lang") || [];
			s[ye] = l[0] || r.get("title"), s.style.cssText = "margin: 10px 20px;", s.style.color = r.get("textColor");
			var c = document[Wr]("textarea");
			c.style.cssText = "display:block;width:100%;font-size:14px;line-height:1.6rem;font-family:Monaco,Consolas,Courier new,monospace", c.readOnly = r.get("readOnly"), c.style.color = r.get("textColor"), c.style[Qn] = r.get("textareaBorderColor"), c.style[me] = r.get("textareaColor");
			var h = a(t);
			c.value = h.value;
			var d = h.meta,
				f = document[Wr]("div");
			f.style.cssText = "position:absolute;bottom:0;left:0;right:0;";
			var v = "float:right;margin-right:20px;border:none;cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px",
				g = document[Wr]("div"),
				y = document[Wr]("div");
			v += ";background-color:" + r.get("buttonColor"), v += ";color:" + r.get("buttonTextColor");
			var x = this;
			p.addEventListener(g, "click", i), p.addEventListener(y, "click", function() {
					var t;
					try {
						t = u(c.value, d)
					} catch (n) {
						throw i(), new Error("Data view format error " + n)
					}
					e[yn]({
						type: "changeDataView",
						newOption: t
					}), i()
				}), g[ye] = l[1], y[ye] = l[2], y.style.cssText = v, g.style.cssText = v, f[ge](y), f[ge](g), p.addEventListener(c, "keydown", function(t) {
					if (9 === (t.keyCode || t.which)) {
						var e = this.value,
							i = this.selectionStart,
							n = this.selectionEnd;
						this.value = e.substring(0, i) + m + e.substring(n), this.selectionStart = this.selectionEnd = i + 1, p.stop(t)
					}
				}), o[ge](s), o[ge](c), o[ge](f), c.style[gr] = n[ve] - 80 + "px",
				n[ge](o), this._dom = o
		}, h[$r][Li] = function(t, e) {
			this._dom && e[wn]().removeChild(this._dom)
		}, h[$r][fe] = function(t, e) {
			this[Li](t, e)
		}, t("../featureManager")[gn]("dataView", h), t("../../../echarts")[Xt]({
			type: "changeDataView",
			event: "dataViewChanged",
			update: "prepareAndUpdate"
		}, function(t, e) {
			var i = [];
			f.each(t.newOption[An], function(t) {
				var n = e.getSeriesByName(t.name)[0];
				if (n) {
					var r = n.get("data");
					i.push({
						name: t.name,
						data: d(t.data, r)
					})
				} else i.push(f[Vr]({
					type: "scatter"
				}, t))
			}), e[Tn](f[sr]({
				series: i
			}, t.newOption))
		}), h
	}), e("echarts/component/dataZoom/history", [Kr, Yr], function(t) {
		function e(t) {
			var e = t[r];
			return e || (e = t[r] = [{}]), e
		}
		var i = t(Yr),
			n = i.each,
			r = "\x00_ec_hist_store",
			a = {
				push: function(t, i) {
					var r = e(t);
					n(i, function(e, i) {
						for (var n = r[qr] - 1; n >= 0; n--) {
							var a = r[n];
							if (a[i]) break
						}
						if (0 > n) {
							var o = t.queryComponents({
								mainType: "dataZoom",
								subType: "select",
								id: i
							})[0];
							if (o) {
								var s = o.getPercentRange();
								r[0][i] = {
									dataZoomId: i,
									start: s[0],
									end: s[1]
								}
							}
						}
					}), r.push(i)
				},
				pop: function(t) {
					var i = e(t),
						r = i[i[qr] - 1];
					i[qr] > 1 && i.pop();
					var a = {};
					return n(r, function(t, e) {
						for (var n = i[qr] - 1; n >= 0; n--) {
							var t = i[n][e];
							if (t) {
								a[e] = t;
								break
							}
						}
					}), a
				},
				clear: function(t) {
					t[r] = null
				},
				count: function(t) {
					return e(t)[qr]
				}
			};
		return a
	}), e("echarts/component/dataZoom/SelectZoomModel", [Kr, "./DataZoomModel"], function(t) {
		var e = t("./DataZoomModel");
		return e[Vr]({
			type: "dataZoom.select"
		})
	}), e("echarts/component/dataZoom/SelectZoomView", [Kr, "./DataZoomView"], function(t) {
		return t("./DataZoomView")[Vr]({
			type: "dataZoom.select"
		})
	}), e("echarts/component/dataZoomSelect", [Kr, "./dataZoom/typeDefaulter", "./dataZoom/DataZoomModel", "./dataZoom/DataZoomView", "./dataZoom/SelectZoomModel", "./dataZoom/SelectZoomView", "./dataZoom/dataZoomProcessor", "./dataZoom/dataZoomAction"], function(t) {
		t("./dataZoom/typeDefaulter"), t("./dataZoom/DataZoomModel"), t("./dataZoom/DataZoomView"), t("./dataZoom/SelectZoomModel"), t("./dataZoom/SelectZoomView"), t("./dataZoom/dataZoomProcessor"), t("./dataZoom/dataZoomAction")
	}), e("echarts/component/toolbox/feature/DataZoom", [Kr, Yr, "../../../util/number", "../../helper/SelectController", xr, "zrender/container/Group", "../../dataZoom/history", "../../helper/interactionMutex", "../../dataZoomSelect", "../featureManager", "../../../echarts"], function(t) {
		function e(t) {
			this.model = t, this._controllerGroup, this[o], this._isZoomActive
		}

		function i(t, e) {
			var i = [{
				axisModel: t[Q]("x").model,
				axisIndex: 0
			}, {
				axisModel: t[Q]("y").model,
				axisIndex: 0
			}];
			return i.grid = t, e[te]({
				mainType: "dataZoom",
				subType: "select"
			}, function(t, r) {
				n("xAxis", i[0].axisModel, t, e) && (i[0].dataZoomModel = t), n("yAxis", i[1].axisModel, t, e) && (i[1].dataZoomModel = t)
			}), i
		}

		function n(t, e, i, n) {
			var r = i.get(t + "Index");
			return null != r && n[mn](t, r) === e
		}

		function r(t, e) {
			var i = e.grid,
				n = new d(t[0][0], t[1][0], t[0][1] - t[0][0], t[1][1] - t[1][0]);
			if (n[xe](i[L]())) {
				var r = i.getCartesian(e[0][pn], e[1][pn]),
					a = r.pointToData([t[0][0], t[1][0]], !0),
					o = r.pointToData([t[0][1], t[1][1]], !0);
				return [y([a[0], o[0]]), y([a[1], o[1]])]
			}
		}

		function a(t, e, i, n) {
			var r = e[i],
				a = r.dataZoomModel;
			return a ? {
				dataZoomId: a.id,
				startValue: t[i][0],
				endValue: t[i][1]
			} : void 0
		}

		function l(t, e) {
			t.setIconStatus("back", p.count(e) > 1 ? hn : un)
		}
		var c = t(Yr),
			u = t("../../../util/number"),
			h = t("../../helper/SelectController"),
			d = t(xr),
			f = t("zrender/container/Group"),
			p = t("../../dataZoom/history"),
			v = t("../../helper/interactionMutex"),
			m = c.each,
			y = u.asc;
		t("../../dataZoomSelect");
		var x = "\x00_ec_\x00toolbox-dataZoom_";
		e.defaultOption = {
			show: !0,
			icon: {
				zoom: "M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1",
				back: "M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26"
			},
			title: {
				zoom: "鍖哄煙缂╂斁",
				back: "鍖哄煙缂╂斁杩樺師"
			}
		};
		var _ = e[$r];
		_[bi] = function(t, e, i) {
			l(t, e)
		}, _.onclick = function(t, e, i) {
			var n = this._controllerGroup;
			this._controllerGroup || (n = this._controllerGroup = new f, e.getZr().add(n)), w[i].call(this, n, this.model, t, e)
		}, _[Li] = function(t, e) {
			this._disposeController(), v.release("globalPan", e.getZr())
		}, _[fe] = function(t, e) {
			var i = e.getZr();
			v.release("globalPan", i), this._disposeController(), this._controllerGroup && i[Li](this._controllerGroup)
		};
		var w = {
			zoom: function(t, e, i, n) {
				var r = this._isZoomActive = !this._isZoomActive,
					a = n.getZr();
				v[r ? "take" : "release"]("globalPan", a), e.setIconStatus("zoom", r ? hn : un), r ? (a.setDefaultCursorStyle("crosshair"), this._createController(t, e, i, n)) : (a.setDefaultCursorStyle("default"), this._disposeController())
			},
			back: function(t, e, i, n) {
				this._dispatchAction(p.pop(i), n)
			}
		};
		return _._createController = function(t, e, i, n) {
			var r = this[o] = new h("rect", n.getZr(), {
				lineWidth: 3,
				stroke: "#333",
				fill: "rgba(0,0,0,0.2)"
			});
			r.on("selectEnd", c.bind(this._onSelected, this, r, e, i, n)), r[s](t, !1)
		}, _._disposeController = function() {
			var t = this[o];
			t && (t.off(g), t[fe]())
		}, _._onSelected = function(t, e, n, o, s) {
			if (s[qr]) {
				var l = s[0];
				t[we]();
				var c = {};
				n[te]("grid", function(t, e) {
					var o = t[St],
						s = i(o, n),
						u = r(l, s);
					if (u) {
						var h = a(u, s, 0, "x"),
							d = a(u, s, 1, "y");
						h && (c[h.dataZoomId] = h), d && (c[d.dataZoomId] = d)
					}
				}, this), p.push(n, c), this._dispatchAction(c, o)
			}
		}, _._dispatchAction = function(t, e) {
			var i = [];
			m(t, function(t) {
				i.push(t)
			}), i[qr] && e[yn]({
				type: "dataZoom",
				from: this.uid,
				batch: c.clone(i, !0)
			})
		}, t("../featureManager")[gn](re, e), t("../../../echarts")[$t](function(t) {
			function e(t, e) {
				if (e) {
					var r = t + "Index",
						a = e[r];
					null == a || c[qn](a) || (a = a === !1 ? [] : [a]), i(t, function(e, i) {
						if (null == a || -1 !== c[Zr](a, i)) {
							var o = {
								type: "select",
								$fromToolbox: !0,
								id: x + t + i
							};
							o[r] = i, n.push(o)
						}
					})
				}
			}

			function i(e, i) {
				var n = t[e];
				c[qn](n) || (n = n ? [n] : []), m(n, i)
			}
			if (t) {
				var n = t[re] || (t[re] = []);
				c[qn](n) || (n = [n]);
				var r = t.toolbox;
				if (r && (c[qn](r) && (r = r[0]), r && r.feature)) {
					var a = r.feature[re];
					e("xAxis", a), e("yAxis", a)
				}
			}
		}), e
	}), e("echarts/component/toolbox/feature/Restore", [Kr, "../../dataZoom/history", "../featureManager", "../../../echarts"], function(t) {
		function e(t) {
			this.model = t
		}
		var i = t("../../dataZoom/history");
		e.defaultOption = {
			show: !0,
			icon: "M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5",
			title: "杩樺師"
		};
		var n = e[$r];
		return n.onclick = function(t, e, n) {
			i.clear(t), e[yn]({
				type: "restore",
				from: this.uid
			})
		}, t("../featureManager")[gn](ni, e), t("../../../echarts")[Xt]({
			type: "restore",
			event: "restore",
			update: "prepareAndUpdate"
		}, function(t, e) {
			e[kn]("recreate")
		}), e
	}), e("echarts/component/toolbox", [Kr, "./toolbox/ToolboxModel", "./toolbox/ToolboxView", "./toolbox/feature/SaveAsImage", "./toolbox/feature/MagicType", "./toolbox/feature/DataView", "./toolbox/feature/DataZoom", "./toolbox/feature/Restore"], function(t) {
		t("./toolbox/ToolboxModel"), t("./toolbox/ToolboxView"), t("./toolbox/feature/SaveAsImage"), t("./toolbox/feature/MagicType"), t("./toolbox/feature/DataView"), t("./toolbox/feature/DataZoom"), t("./toolbox/feature/Restore")
	}), e("zrender/vml/core", [Kr, "../core/env"], function(t) {
		function e() {
			if (!o) {
				o = !0;
				var t = a.styleSheets;
				t[qr] < 31 ? a.createStyleSheet().addRule(".zrvml", "behavior:url(#default#VML)") : t[0].addRule(".zrvml", "behavior:url(#default#VML)")
			}
		}
		if (!t("../core/env")[pe]) {
			var i, n = "urn:schemas-microsoft-com:vml",
				r = window,
				a = r.document,
				o = !1;
			try {
				!a.namespaces.zrvml && a.namespaces.add("zrvml", n), i = function(t) {
					return a[Wr]("<zrvml:" + t + ' class="zrvml">')
				}
			} catch (s) {
				i = function(t) {
					return a[Wr]("<" + t + ' xmlns="' + n + '" class="zrvml">')
				}
			}
			return {
				doc: a,
				initVML: e,
				createNode: i
			}
		}
	}), e("zrender/vml/graphic", [Kr, "../core/env", "../core/vector", dr, "../core/PathProxy", "../tool/color", "../contain/text", "../graphic/mixin/RectText", "../graphic/Displayable", "../graphic/Image", "../graphic/Text", "../graphic/Path", "../graphic/Gradient", "./core"], function(t) {
		function e(t) {
			t.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;", t.coordsize = G + "," + G, t.coordorigin = "0,0"
		}

		function i(t) {
			return String(t)[jn](/&/g, "&amp;")[jn](/"/g, "&quot;")
		}

		function n(t, e, i) {
			return "rgb(" + [t, e, i].join(",") + ")"
		}

		function r(t, e) {
			e && t && e[Ce] !== t && t[ge](e)
		}

		function a(t, e) {
			e && t && e[Ce] === t && t.removeChild(e)
		}

		function o(t, e, i) {
			return (parseFloat(t) || 0) * F + (parseFloat(e) || 0) * H + i
		}

		function s(t, e, i) {
			var r = b.parse(e);
			i = +i, isNaN(i) && (i = 1), r && (t.color = n(r[0], r[1], r[2]), t[Tr] = i * r[3])
		}

		function l(t) {
			var e = b.parse(t);
			return [n(e[0], e[1], e[2]), e[3]]
		}

		function c(t, e, i) {
			var n = e.fill;
			if (null != n)
				if (n instanceof L) {
					var r, a = 0,
						o = [0, 0],
						c = 0,
						u = 1,
						h = i[ir](),
						d = h.width,
						f = h[gr];
					if (n.type === Oi) {
						r = "gradient";
						var p = i[Ui],
							v = [n.x * d, n.y * f],
							m = [n.x2 * d, n.y2 * f];
						p && (E(v, v, p), E(m, m, p));
						var g = m[0] - v[0],
							y = m[1] - v[1];
						a = 180 * Math.atan2(g, y) / Math.PI, 0 > a && (a += 360), 1e-6 > a && (a = 0)
					} else {
						r = "gradientradial";
						var v = [n.x * d, n.y * f],
							p = i[Ui],
							x = i.scale,
							_ = d,
							w = f;
						o = [(v[0] - h.x) / _, (v[1] - h.y) / w], p && E(v, v, p), _ /= x[0] * G, w /= x[1] * G;
						var b = O(_, w);
						c = 0 / b, u = 2 * n.r / b - c
					}
					var M = n.colorStops.slice();
					M.sort(function(t, e) {
						return t[$e] - e[$e]
					});
					for (var S = M[qr], A = [], C = [], T = 0; S > T; T++) {
						var k = M[T],
							D = l(k.color);
						C.push(k[$e] * u + c + " " + D[0]), (0 === T || T === S - 1) && A.push(D)
					}
					if (S >= 2) {
						var I = A[0][0],
							P = A[1][0],
							z = A[0][1] * e[Tr],
							V = A[1][1] * e[Tr];
						t.type = r, t.method = "none", t.focus = "100%", t.angle = a, t.color = I, t.color2 = P, t.colors = C.join(","), t[Tr] = V, t.opacity2 = z
					}
					"radial" === r && (t.focusposition = o.join(","))
				} else s(t, n, e[Tr])
		}

		function u(t, e) {
			null != e.lineJoin && (t.joinstyle = e.lineJoin), null != e.miterLimit && (t.miterlimit = e.miterLimit * G), null != e.lineCap && (t.endcap = e.lineCap), null != e.lineDash && (t.dashstyle = e.lineDash.join(" ")), null == e[kr] || e[kr] instanceof L || s(t, e[kr], e[Tr])
		}

		function h(t, e, i, n) {
			var o = "fill" == e,
				s = t.getElementsByTagName(e)[0];
			null != i[e] && "none" !== i[e] && (o || !o && i[Lr]) ? (t[o ? "filled" : "stroked"] = "true", i[e] instanceof L && a(t, s), s || (s = D.createNode(e)), o ? c(s, i, n) : u(s, i), r(t, s)) : (t[o ? "filled" : "stroked"] = "false", a(t, s))
		}

		function d(t, e) {
			var i, n, r, a, o, s, l = w.M,
				c = w.C,
				u = w.L,
				h = w.A,
				d = w.Q,
				f = [];
			for (a = 0; a < t[qr];) {
				switch (r = t[a++], n = "", i = 0, r) {
					case l:
						n = " m ", i = 1, o = t[a++], s = t[a++], W[0][0] = o, W[0][1] = s;
						break;
					case u:
						n = " l ", i = 1, o = t[a++], s = t[a++], W[0][0] = o, W[0][1] = s;
						break;
					case d:
					case c:
						n = " c ", i = 3;
						var p, v, m = t[a++],
							g = t[a++],
							y = t[a++],
							x = t[a++];
						r === d ? (p = y, v = x, y = (y + 2 * m) / 3, x = (x + 2 * g) / 3, m = (o + 2 * m) / 3, g = (s + 2 * g) / 3) : (p = t[a++], v = t[a++]), W[0][0] = m, W[0][1] = g, W[1][0] = y, W[1][1] = x, W[2][0] = p, W[2][1] = v, o = p, s = v;
						break;
					case h:
						var _ = 0,
							b = 0,
							M = 1,
							S = 1,
							A = 0;
						e && (_ = e[4], b = e[5], M = P(e[0] * e[0] + e[1] * e[1]), S = P(e[2] * e[2] + e[3] * e[3]), A = Math.atan2(-e[1] / S, e[0] / M));
						var C = t[a++],
							T = t[a++],
							k = t[a++],
							L = t[a++],
							D = t[a++] + A,
							z = t[a++] + D + A;
						a++;
						var O = t[a++],
							B = C + V(D) * k,
							F = T + R(D) * L,
							m = C + V(z) * k,
							g = T + R(z) * L,
							H = O ? " wa " : " at ";
						f.push(H, I(((C - k) * M + _) * G - Z), N, I(((T - L) * S + b) * G - Z), N, I(((C + k) * M + _) * G - Z), N, I(((T + L) * S + b) * G - Z), N, I((B * M + _) * G - Z), N, I((F * S + b) * G - Z), N, I((m * M + _) * G - Z), N, I((g * S + b) * G - Z)), o = m, s = g;
						break;
					case w.R:
						var q = W[0],
							U = W[1];
						q[0] = t[a++], q[1] = t[a++], U[0] = q[0] + t[a++], U[1] = q[1] + t[a++], e && (E(q, q, e), E(U, U, e)), q[0] = I(q[0] * G - Z), U[0] = I(U[0] * G - Z), q[1] = I(q[1] * G - Z), U[1] = I(U[1] * G - Z), f.push(" m ", q[0], N, q[1], " l ", U[0], N, q[1], " l ", U[0], N, U[1], " l ", q[0], N, U[1]);
						break;
					case w.Z:
						f.push(" x ")
				}
				if (i > 0) {
					f.push(n);
					for (var j = 0; i > j; j++) {
						var X = W[j];
						e && E(X, X, e), f.push(I(X[0] * G - Z), N, I(X[1] * G - Z), i - 1 > j ? N : "")
					}
				}
			}
			return f.join("")
		}

		function p(t) {
			return typeof t === Ur && t.tagName && "IMG" === t.tagName[Gn]()
		}

		function v(t) {
			var e = j[t];
			if (!e) {
				X > Y && (X = 0, j = {});
				var i, n = $.style;
				try {
					n.font = t, i = n.fontFamily.split(",")[0]
				} catch (r) {}
				e = {
					style: n.fontStyle || U,
					variant: n.fontVariant || U,
					weight: n.fontWeight || U,
					size: 0 | parseFloat(n.fontSize || 12),
					family: i || "Microsoft YaHei"
				}, j[t] = e, X++
			}
			return e
		}

		function m(t, n, a, s) {
			var l = this.style,
				c = l.text;
			if (c) {
				var u, d, f = l[vi],
					p = v(l.textFont),
					m = p.style + " " + p.variant + " " + p.weight + " " + p.size + 'px "' + p.family + '"',
					g = l[pi];
				a = a || M[ir](c, m, f, g);
				var y = this[Ui];
				if (y && !s && (K.copy(n), K[yr](y), n = K), s) u = n.x, d = n.y;
				else {
					var x = l[mi],
						_ = l.textDistance;
					if (x instanceof Array) u = n.x + x[0], d = n.y + x[1], f = f || "left", g = g || "top";
					else {
						var w = M.adjustTextPositionOnRect(x, n, a, _);
						u = w.x, d = w.y, f = f || w[vi], g = g || w[pi]
					}
				}
				var b = p.size;
				switch (g) {
					case "hanging":
					case "top":
						d += b / 1.75;
						break;
					case ur:
						break;
					default:
						d -= b / 2.25
				}
				switch (f) {
					case "left":
						break;
					case cr:
						u -= a.width / 2;
						break;
					case "right":
						u -= a.width
				}
				var S, A, C, T = D.createNode,
					k = this._textVmlEl;
				k ? (C = k.firstChild, S = C.nextSibling, A = S.nextSibling) : (k = T("line"), S = T("path"), A = T("textpath"), C = T("skew"), A.style["v-text-align"] = "left", e(k), S.textpathok = !0, A.on = !0, k.from = "0 0", k.to = "1000 0.05", r(k, C), r(k, S), r(k, A), this._textVmlEl = k);
				var L = [u, d],
					P = k.style;
				y && s ? (E(L, L, y), C.on = !0, C.matrix = y[0][Hn](3) + N + y[2][Hn](3) + N + y[1][Hn](3) + N + y[3][Hn](3) + ",0,0", C[$e] = (I(L[0]) || 0) + "," + (I(L[1]) || 0), C[ji] = "0 0", P.left = "0px", P.top = "0px") : (C.on = !1, P.left = I(u) + "px", P.top = I(d) + "px"), A[Gr] = i(c);
				try {
					A.style.font = m
				} catch (z) {}
				h(k, "fill", {
					fill: s ? l.fill : l.textFill,
					opacity: l[Tr]
				}, this), h(k, kr, {
					stroke: s ? l[kr] : l.textStroke,
					opacity: l[Tr],
					lineDash: l.lineDash
				}, this), k.style.zIndex = o(this[be], this.z, this.z2), r(t, k)
			}
		}

		function g(t) {
			a(t, this._textVmlEl), this._textVmlEl = null
		}

		function y(t) {
			r(t, this._textVmlEl)
		}
		if (!t("../core/env")[pe]) {
			var x = t("../core/vector"),
				_ = t(dr),
				w = t("../core/PathProxy").CMD,
				b = t("../tool/color"),
				M = t("../contain/text"),
				S = t("../graphic/mixin/RectText"),
				A = t("../graphic/Displayable"),
				C = t("../graphic/Image"),
				T = t("../graphic/Text"),
				k = t("../graphic/Path"),
				L = t("../graphic/Gradient"),
				D = t("./core"),
				I = Math.round,
				P = Math.sqrt,
				z = Math.abs,
				V = Math.cos,
				R = Math.sin,
				O = Math.max,
				E = x[yr],
				N = ",",
				B = "progid:DXImageTransform.Microsoft",
				G = 21600,
				Z = G / 2,
				F = 1e5,
				H = 1e3,
				W = [
					[],
					[],
					[]
				];
			k[$r].brush = function(t) {
				var i = this.style,
					n = this._vmlEl;
				n || (n = D.createNode("shape"), e(n), this._vmlEl = n), h(n, "fill", i, this), h(n, kr, i, this);
				var a = this[Ui],
					s = null != a,
					l = n.getElementsByTagName(kr)[0];
				if (l) {
					var c = i[Lr];
					if (s && !i.strokeNoScale) {
						var u = a[0] * a[3] - a[1] * a[2];
						c *= P(z(u))
					}
					l.weight = c + "px"
				}
				var f = this.path;
				this.__dirtyPath && (f[hi](), this[ri](f, this.shape), this.__dirtyPath = !1), n.path = d(f.data, this[Ui]), n.style.zIndex = o(this[be], this.z, this.z2), r(t, n), i.text && this.drawRectText(t, this[ir]())
			}, k[$r].onRemoveFromStorage = function(t) {
				a(t, this._vmlEl), this.removeRectText(t)
			}, k[$r].onAddToStorage = function(t) {
				r(t, this._vmlEl), this.appendRectText(t)
			}, C[$r].brush = function(t) {
				var i, n, a = this.style,
					s = a.image;
				if (p(s)) {
					var l = s.src;
					if (l === this._imageSrc) i = this._imageWidth, n = this._imageHeight;
					else {
						var c = s.runtimeStyle,
							u = c.width,
							h = c[gr];
						c.width = "auto", c[gr] = "auto", i = s.width, n = s[gr], c.width = u, c[gr] = h, this._imageSrc = l, this._imageWidth = i, this._imageHeight = n
					}
					s = l
				} else s === this._imageSrc && (i = this._imageWidth, n = this._imageHeight);
				if (s) {
					var d = a.x || 0,
						v = a.y || 0,
						m = a.width,
						g = a[gr],
						y = a.sWidth,
						x = a.sHeight,
						_ = a.sx || 0,
						w = a.sy || 0,
						b = y && x,
						M = this._vmlEl;
					M || (M = D.doc[Wr]("div"), e(M), this._vmlEl = M);
					var S, A = M.style,
						C = !1,
						T = 1,
						k = 1;
					if (this[Ui] && (S = this[Ui], T = P(S[0] * S[0] + S[1] * S[1]), k = P(S[2] * S[2] + S[3] * S[3]), C = S[1] || S[2]), C) {
						var L = [d, v],
							z = [d + m, v],
							V = [d, v + g],
							R = [d + m, v + g];
						E(L, L, S), E(z, z, S), E(V, V, S), E(R, R, S);
						var G = O(L[0], z[0], V[0], R[0]),
							Z = O(L[1], z[1], V[1], R[1]),
							F = [];
						F.push("M11=", S[0] / T, N, "M12=", S[2] / k, N, "M21=", S[1] / T, N, "M22=", S[3] / k, N, "Dx=", I(d * T + S[4]), N, "Dy=", I(v * k + S[5])), A[f] = "0 " + I(G) + "px " + I(Z) + "px 0", A[Xr] = B + ".Matrix(" + F.join("") + ", SizingMethod=clip)"
					} else S && (d = d * T + S[4], v = v * k + S[5]), A[Xr] = "", A.left = I(d) + "px", A.top = I(v) + "px";
					var H = this._imageEl,
						W = this._cropEl;
					H || (H = D.doc[Wr]("div"), this._imageEl = H);
					var q = H.style;
					if (b) {
						if (i && n) q.width = I(T * i * m / y) + "px", q[gr] = I(k * n * g / x) + "px";
						else {
							var U = new Image,
								j = this;
							U.onload = function() {
								U.onload = null, i = U.width, n = U[gr], q.width = I(T * i * m / y) + "px", q[gr] = I(k * n * g / x) + "px", j._imageWidth = i, j._imageHeight = n, j._imageSrc = s
							}, U.src = s
						}
						W || (W = D.doc[Wr]("div"), W.style.overflow = "hidden", this._cropEl = W);
						var X = W.style;
						X.width = I((m + _ * m / y) * T), X[gr] = I((g + w * g / x) * k), X[Xr] = B + ".Matrix(Dx=" + -_ * m / y * T + ",Dy=" + -w * g / x * k + ")", W[Ce] || M[ge](W), H[Ce] != W && W[ge](H)
					} else q.width = I(T * m) + "px", q[gr] = I(k * g) + "px", M[ge](H), W && W[Ce] && (M.removeChild(W), this._cropEl = null);
					var Y = "",
						$ = a[Tr];
					1 > $ && (Y += ".Alpha(opacity=" + I(100 * $) + ") "), Y += B + ".AlphaImageLoader(src=" + s + ", SizingMethod=scale)", q[Xr] = Y, M.style.zIndex = o(this[be], this.z, this.z2), r(t, M), a.text && this.drawRectText(t, this[ir]())
				}
			}, C[$r].onRemoveFromStorage = function(t) {
				a(t, this._vmlEl), this._vmlEl = null, this._cropEl = null, this._imageEl = null, this.removeRectText(t)
			}, C[$r].onAddToStorage = function(t) {
				r(t, this._vmlEl), this.appendRectText(t)
			};
			var q, U = un,
				j = {},
				X = 0,
				Y = 100,
				$ = document[Wr]("div");
			M.measureText = function(t, e) {
				var i = D.doc;
				q || (q = i[Wr]("div"), q.style.cssText = "position:absolute;top:-20000px;left:0;                padding:0;margin:0;border:none;white-space:pre;", D.doc.body[ge](q));
				try {
					q.style.font = e
				} catch (n) {}
				return q[ye] = "", q[ge](i.createTextNode(t)), {
					width: q.offsetWidth
				}
			};
			for (var K = new _, J = [S, A, C, k, T], Q = 0; Q < J[qr]; Q++) {
				var tt = J[Q][$r];
				tt.drawRectText = m, tt.removeRectText = g, tt.appendRectText = y
			}
			T[$r].brush = function(t) {
				var e = this.style;
				e.text && this.drawRectText(t, {
					x: e.x || 0,
					y: e.y || 0,
					width: 0,
					height: 0
				}, this[ir](), !0)
			}, T[$r].onRemoveFromStorage = function(t) {
				this.removeRectText(t)
			}, T[$r].onAddToStorage = function(t) {
				this.appendRectText(t)
			}
		}
	}), e("zrender/vml/Painter", [Kr, "../core/log", "./core"], function(t) {
		function e(t) {
			return parseInt(t, 10)
		}

		function i(t, e) {
			a.initVML(), this.root = t, this[Ae] = e;
			var i = document[Wr]("div"),
				n = document[Wr]("div");
			i.style.cssText = "display:inline-block;overflow:hidden;position:relative;width:300px;height:150px;", n.style.cssText = "position:absolute;left:0;top:0;", t[ge](i), this._vmlRoot = n, this._vmlViewport = i, this[_e]();
			var r = e[Ti],
				o = e[ki];
			e[Ti] = function(t) {
				var i = e.get(t);
				r.call(e, t), i && i.onRemoveFromStorage && i.onRemoveFromStorage(n)
			}, e[ki] = function(t) {
				t.onAddToStorage && t.onAddToStorage(n), o.call(e, t)
			}, this._firstPaint = !0
		}

		function n(t) {
			return function() {
				r('In IE8.0 VML mode painter not support method "' + t + '"')
			}
		}
		var r = t("../core/log"),
			a = t("./core");
		i[$r] = {
			constructor: i,
			getViewportRoot: function() {
				return this._vmlViewport
			},
			refresh: function() {
				var t = this[Ae][Se](!0);
				this._paintList(t)
			},
			_paintList: function(t) {
				for (var e = this._vmlRoot, i = 0; i < t[qr]; i++) {
					var n = t[i];
					n[Di] && !n[Ai] && (n.beforeBrush && n.beforeBrush(), n.brush(e), n.afterBrush && n.afterBrush()), n[Di] = !1
				}
				this._firstPaint && (this._vmlViewport[ge](e), this._firstPaint = !1)
			},
			resize: function() {
				var t = this._getWidth(),
					e = this._getHeight();
				if (this._width != t && this._height != e) {
					this._width = t, this._height = e;
					var i = this._vmlViewport.style;
					i.width = t + "px", i[gr] = e + "px"
				}
			},
			dispose: function() {
				this.root[ye] = "", this._vmlRoot = this._vmlViewport = this[Ae] = null
			},
			getWidth: function() {
				return this._width
			},
			getHeight: function() {
				return this._height
			},
			_getWidth: function() {
				var t = this.root,
					i = t.currentStyle;
				return (t.clientWidth || e(i.width)) - e(i.paddingLeft) - e(i.paddingRight) | 0
			},
			_getHeight: function() {
				var t = this.root,
					i = t.currentStyle;
				return (t[ve] || e(i[gr])) - e(i.paddingTop) - e(i.paddingBottom) | 0
			}
		};
		for (var o = ["getLayer", "insertLayer", "eachLayer", "eachBuildinLayer", "eachOtherLayer", "getLayers", "modLayer", "delLayer", "clearLayer", "toDataURL", "pathToImage"], s = 0; s < o[qr]; s++) {
			var l = o[s];
			i[$r][l] = n(l)
		}
		return i
	}), e("zrender/vml/vml", [Kr, "./graphic", "../zrender", "./Painter"], function(t) {
		t("./graphic"), t("../zrender").registerPainter("vml", t("./Painter"))
	});
	var Jr = t("echarts");
	return t("echarts/chart/line"), t("echarts/chart/bar"), t("echarts/component/grid"), t("echarts/chart/pie"), t("echarts/chart/scatter"), t("echarts/component/tooltip"), t("echarts/component/polar"), t("echarts/chart/radar"), t("echarts/component/legend"), t("echarts/chart/map"), t("echarts/chart/treemap"), t("echarts/chart/graph"), t("echarts/chart/gauge"), t("echarts/chart/funnel"), t("echarts/chart/parallel"), t("echarts/chart/sankey"), t("echarts/chart/boxplot"), t("echarts/chart/candlestick"), t("echarts/chart/effectScatter"), t("echarts/chart/lines"), t("echarts/chart/heatmap"), t("echarts/component/geo"), t("echarts/component/parallel"), t("echarts/component/title"), t("echarts/component/dataZoom"), t("echarts/component/visualMap"), t("echarts/component/markPoint"), t("echarts/component/markLine"), t("echarts/component/timeline"), t("echarts/component/toolbox"), t("zrender/vml/vml"), Jr
});