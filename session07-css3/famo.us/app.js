var l = void 0, q = !0, v = null, x = !1;
function aa(e) {
    return function (k) {
        this[e] = k
    }
}
var ga, B;
function ha(e, k) {
    var j, g, c, f, a, b, d, h, s, E = k && k.split("/"), K = H.map, D = K && K["*"] || {};
    if (e && "." === e.charAt(0) && k) {
        E = E.slice(0, E.length - 1);
        e = E.concat(e.split("/"));
        for (h = 0; h < e.length; h += 1)if (j = e[h], "." === j)e.splice(h, 1), h -= 1; else if (".." === j)if (1 === h && (".." === e[2] || ".." === e[0]))break; else 0 < h && (e.splice(h - 1, 2), h -= 2);
        e = e.join("/")
    }
    if ((E || D) && K) {
        j = e.split("/");
        for (h = j.length; 0 < h; h -= 1) {
            g = j.slice(0, h).join("/");
            if (E)for (s = E.length; 0 < s; s -= 1)if (c = K[E.slice(0, s).join("/")])if (c = c[g]) {
                f = c;
                a = h;
                break
            }
            if (f)break;
            !b && (D && D[g]) && (b = D[g], d = h)
        }
        !f && b && (f = b, a = d);
        f && (j.splice(0, a, f), e = j.join("/"))
    }
    return e
}
function qa(e, k) {
    return function () {
        return ra.apply(l, sa.call(arguments, 0).concat([e, k]))
    }
}
function ta(e) {
    return function (k) {
        $[e] = k
    }
}
function Ja(e) {
    if (Ka.hasOwnProperty(e)) {
        var k = Ka[e];
        delete Ka[e];
        eb[e] = q;
        fb.apply(l, k)
    }
    if (!$.hasOwnProperty(e) && !eb.hasOwnProperty(e))throw Error("No " + e);
    return $[e]
}
function gb(e) {
    var k, j = e ? e.indexOf("!") : -1;
    -1 < j && (k = e.substring(0, j), e = e.substring(j + 1, e.length));
    return[k, e]
}
var fb, ra, Cb, Db, $ = {}, Ka = {}, H = {}, eb = {}, sa = [].slice;
Cb = function (e, k) {
    var j, g = gb(e), c = g[0], e = g[1];
    c && (c = ha(c, k), j = Ja(c));
    c ? e = j && j.normalize ? j.normalize(e, function (c) {
        return ha(c, k)
    }) : ha(e, k) : (e = ha(e, k), g = gb(e), c = g[0], e = g[1], c && (j = Ja(c)));
    return{Rd: c ? c + "!" + e : e, Tf: e, Cg: c, ie: j}
};
Db = {Wf: function (e) {
    return qa(e)
}, c    : function (e) {
    var k = $[e];
    return"undefined" !== typeof k ? k : $[e] = {}
}, Rf   : function (e) {
    return{id: e, uri: "", c: $[e], yc: function () {
        return H && H.yc && H.yc[e] || {}
    }}
}};
fb = function (e, k, j, g) {
    var c, f, a, b, d = [], h, g = g || e;
    if ("function" === typeof j) {
        k = !k.length && j.length ? ["require", "exports", "module"] : k;
        for (b = 0; b < k.length; b += 1)if (a = Cb(k[b], g), f = a.Rd, "require" === f)d[b] = Db.Wf(e); else if ("exports" === f)d[b] = Db.c(e), h = q; else if ("module" === f)c = d[b] = Db.Rf(e); else if ($.hasOwnProperty(f) || Ka.hasOwnProperty(f) || eb.hasOwnProperty(f))d[b] = Ja(f); else if (a.ie)a.ie.load(a.Tf, qa(g, q), ta(f), {}), d[b] = $[f]; else throw Error(e + " missing " + f);
        k = j.apply($[e], d);
        if (e)if (c && c.c !== l && c.c !== $[e])$[e] =
            c.c; else if (k !== l || !h)$[e] = k
    } else e && ($[e] = j)
};
ga = ra = function (e, k, j, g, c) {
    if ("string" === typeof e)return Db[e] ? Db[e](k) : Ja(Cb(e, k).Rd);
    e.splice || (H = e, k.splice ? (e = k, k = j, j = v) : e = l);
    k = k || function () {
    };
    "function" === typeof j && (j = g, g = c);
    g ? fb(l, e, k, j) : setTimeout(function () {
        fb(l, e, k, j)
    }, 15);
    return ra
};
ra.yc = function (e) {
    H = e;
    return ra
};
B = function (e, k, j) {
    k.splice || (j = k, k = []);
    Ka[e] = [e, k, j]
};
B.lg = {tg: q};
B("5/14", function () {
});
B("0/a", ["require", "exports", "module"], function (e, k, j) {
    function g(c) {
        this.Tc = c;
        this.next = l
    }

    g.prototype = {get: function () {
        return this.Tc
    }, d              : function (c) {
        c = new g(c);
        this.xe(c);
        return c
    }, xe             : aa("next"), execute: function () {
        var c = this.next, f = this.get(), c = c ? c.execute() : l;
        if (f) {
            if ("function" == typeof f)return f(c);
            if (f.u)return f.u(c);
            var c = [], a;
            for (a in f)c.push(f[a].u())
        }
        return c
    }};
    j.c = g
});
B("0/6", ["require", "exports", "module"], function (e, k, j) {
    function g(c) {
        this.Lc = [];
        c && (this.Lc = c.slice(0));
        this.Ub = {}
    }

    g.prototype = {b: function (c, f) {
        f || (f = {});
        f.origin = this;
        for (var a = 0; a < this.Lc.length; a++)this.Lc[a].b(c, f);
        var b = this.Ub[c];
        if (b)for (a = 0; a < b.length; a++)b[a].call(this, f)
    }, g            : function (c, f) {
        this.Ub[c] || (this.Ub[c] = []);
        this.Ub[c].push(f);
        return this
    }};
    j.c = g
});
B("0/3", ["require", "exports", "module", "./a", "./6"], function (e, k, j) {
    function g(a) {
        this.V = a;
        this.ic = l;
        this.fb = new f
    }

    var c = e("./a"), f = e("./6");
    g.prototype = {Db: function (a) {
        return this.ic = new c(a)
    }, update        : function () {
        this.ic && this.V.update(this.ic.execute())
    }, b             : function (a, b) {
        this.fb.b(a, b)
    }, g             : function (a, b) {
        this.fb.g(a, b)
    }};
    j.c = g
});
B("0/8", ["require", "exports", "module"], function (e, k, j) {
    function g(c) {
        this.Tc = c;
        this.next = l
    }

    g.prototype = {get: function () {
        return this.Tc
    }, xe             : aa("next"), b: function (c, f) {
        var a;
        a = this.get().b(c, f);
        a = "object" != typeof a ? [] : "string" == typeof a[0] ? [a] : a;
        var b = [], d = this.next;
        if (d)for (var h = 0; h < a.length; h++)d.b(a[h][0], a[h][1]);
        if (0 != b.length)return 1 == b.length ? b[0] : b
    }};
    j.c = g
});
B("0/7", ["require", "exports", "module", "./8"], function (e, k, j) {
    function g(c) {
        this.Kb = [];
        c && this.m(c)
    }

    var c = e("./8");
    g.prototype = {za: function (f) {
        f = new c(f);
        this.Kb.push(f);
        return f
    }, m             : function (c) {
        "object" == typeof c && c.b && (c = [c]);
        for (var a = 0; a < c.length; a++)this.za(c[a])
    }, reset         : function () {
        this.Kb = []
    }, b             : function (c, a) {
        a || (a = {});
        a.origin || (a.origin = this);
        for (var b = 0; b < this.Kb.length; b++)this.Kb[b].b(c, a)
    }};
    j.c = g
});
B("0/9", ["require", "exports", "module"], function (e, k, j) {
    var g = {precision: 1E-6, P: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], xg: function f(a, b) {
        var d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        d[0] = a[0] * b[0] + a[1] * b[4] + a[2] * b[8] + a[3] * b[12];
        d[1] = a[0] * b[1] + a[1] * b[5] + a[2] * b[9] + a[3] * b[13];
        d[2] = a[0] * b[2] + a[1] * b[6] + a[2] * b[10] + a[3] * b[14];
        d[3] = a[0] * b[3] + a[1] * b[7] + a[2] * b[11] + a[3] * b[15];
        d[4] = a[4] * b[0] + a[5] * b[4] + a[6] * b[8] + a[7] * b[12];
        d[5] = a[4] * b[1] + a[5] * b[5] + a[6] * b[9] + a[7] * b[13];
        d[6] = a[4] * b[2] + a[5] * b[6] + a[6] * b[10] + a[7] * b[14];
        d[7] =
            a[4] * b[3] + a[5] * b[7] + a[6] * b[11] + a[7] * b[15];
        d[8] = a[8] * b[0] + a[9] * b[4] + a[10] * b[8] + a[11] * b[12];
        d[9] = a[8] * b[1] + a[9] * b[5] + a[10] * b[9] + a[11] * b[13];
        d[10] = a[8] * b[2] + a[9] * b[6] + a[10] * b[10] + a[11] * b[14];
        d[11] = a[8] * b[3] + a[9] * b[7] + a[10] * b[11] + a[11] * b[15];
        d[12] = a[12] * b[0] + a[13] * b[4] + a[14] * b[8] + a[15] * b[12];
        d[13] = a[12] * b[1] + a[13] * b[5] + a[14] * b[9] + a[15] * b[13];
        d[14] = a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14];
        d[15] = a[12] * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15];
        return 2 >= arguments.length ? d : f.apply(v, [d].concat(Array.prototype.slice.call(arguments,
            2)))
    }, multiply       : function a(b, d) {
        var h = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
        h[0] = b[0] * d[0] + b[1] * d[4] + b[2] * d[8];
        h[1] = b[0] * d[1] + b[1] * d[5] + b[2] * d[9];
        h[2] = b[0] * d[2] + b[1] * d[6] + b[2] * d[10];
        h[4] = b[4] * d[0] + b[5] * d[4] + b[6] * d[8];
        h[5] = b[4] * d[1] + b[5] * d[5] + b[6] * d[9];
        h[6] = b[4] * d[2] + b[5] * d[6] + b[6] * d[10];
        h[8] = b[8] * d[0] + b[9] * d[4] + b[10] * d[8];
        h[9] = b[8] * d[1] + b[9] * d[5] + b[10] * d[9];
        h[10] = b[8] * d[2] + b[9] * d[6] + b[10] * d[10];
        h[12] = b[12] * d[0] + b[13] * d[4] + b[14] * d[8] + d[12];
        h[13] = b[12] * d[1] + b[13] * d[5] + b[14] * d[9] + d[13];
        h[14] = b[12] * d[2] + b[13] *
            d[6] + b[14] * d[10] + d[14];
        return 2 >= arguments.length ? h : a.apply(v, [h].concat(Array.prototype.slice.call(arguments, 2)))
    }, move           : function (a, b) {
        b[2] || (b[2] = 0);
        return[a[0], a[1], a[2], 0, a[4], a[5], a[6], 0, a[8], a[9], a[10], 0, a[12] + b[0], a[13] + b[1], a[14] + b[2], 1]
    }, translate      : function (a, b, d) {
        "number" != typeof d && (d = 0);
        return[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, a, b, d, 1]
    }, scale          : function (a, b, d) {
        "number" != typeof d && (d = 1);
        return[a, 0, 0, 0, 0, b, 0, 0, 0, 0, d, 0, 0, 0, 0, 1]
    }, te             : function (a) {
        var b = Math.cos(a), a = Math.sin(a);
        return[1, 0, 0, 0, 0, b, a, 0, 0, -a,
            b, 0, 0, 0, 0, 1]
    }, Ra             : function (a) {
        var b = Math.cos(a), a = Math.sin(a);
        return[b, 0, -a, 0, 0, 1, 0, 0, a, 0, b, 0, 0, 0, 0, 1]
    }, ue             : function (a) {
        var b = Math.cos(a), a = Math.sin(a);
        return[b, a, 0, 0, -a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    }, rotate         : function (a, b, d) {
        var h = Math.cos(a), a = Math.sin(a), s = Math.cos(b), b = Math.sin(b), e = Math.cos(d), d = Math.sin(d), g = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
        g[0] = s * e;
        g[1] = h * d + a * b * e;
        g[2] = a * d - h * b * e;
        g[4] = -s * d;
        g[5] = h * e - a * b * d;
        g[6] = a * e + h * b * d;
        g[8] = b;
        g[9] = -a * s;
        g[10] = h * s;
        return g
    }, yf             : function (a) {
        for (var a = a.slice(0), b = 0; b < a.length; b++)Math.abs(a[b]) <
            g.precision && (a[b] = 0);
        return"matrix3d(" + a.join() + ")"
    }, Ba             : function (a, b, d) {
        return[1, 0, 0, 0, Math.tan(d), 1, 0, 0, Math.tan(b), Math.tan(a), 1, 0, 0, 0, 0, 1]
    }, Ma             : function (a) {
        return[a[12], a[13], a[14]]
    }, inverse        : function (a) {
        var b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], d = a[5] * a[10] - a[6] * a[9], h = a[4] * a[10] - a[6] * a[8], s = a[4] * a[9] - a[5] * a[8], e = a[1] * a[10] - a[2] * a[9], g = a[0] * a[10] - a[2] * a[8], j = a[0] * a[9] - a[1] * a[8], k = a[1] * a[6] - a[2] * a[5], m = a[0] * a[6] - a[2] * a[4], w = a[0] * a[5] - a[1] * a[4], r = 1 / (a[0] * d - a[1] * h + a[2] * s);
        b[0] = r * d;
        b[1] = -r * e;
        b[2] = r *
            k;
        b[4] = -r * h;
        b[5] = r * g;
        b[6] = -r * m;
        b[8] = r * s;
        b[9] = -r * j;
        b[10] = r * w;
        b[12] = -a[12] * b[0] - a[13] * b[4] - a[14] * b[8];
        b[13] = -a[12] * b[1] - a[13] * b[5] - a[14] * b[9];
        b[14] = -a[12] * b[2] - a[13] * b[6] - a[14] * b[10];
        return b
    }, fa             : function (a) {
        function b(a, b, d) {
            d || (d = 0);
            return Math.sqrt(a * a + b * b + d * d)
        }

        var d = a[0] + b(a[0], a[1], a[2]), h = 2 / (d * d + a[1] * a[1] + a[2] * a[2]), s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
        s[0] = 1 - h * d * d;
        s[1] = -h * d * a[1];
        s[2] = -h * d * a[2];
        s[5] = 1 - h * a[1] * a[1];
        s[6] = -h * a[1] * a[2];
        s[10] = 1 - h * a[2] * a[2];
        s[4] = s[1];
        s[8] = s[2];
        s[9] = s[6];
        d = g.multiply(a,
            s);
        h = b(d[5], d[6]);
        0 < d[5] && d[5] != h && (h *= -1);
        var h = d[5] + h, e = 2 / (h * h + d[6] * d[6]), j = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
        j[5] = 1 - e * h * h;
        j[6] = -e * h * d[6];
        j[9] = j[6];
        j[10] = 1 - e * d[6] * d[6];
        s = g.multiply(s, j);
        d = g.multiply(a, s);
        h = g.scale(0 > d[0] ? -1 : 1, 0 > d[5] ? -1 : 1, 0 > d[10] ? -1 : 1);
        d = g.multiply(h, d);
        s = g.multiply(s, h);
        h = {};
        h.translate = g.Ma(a);
        h.rotate = [Math.atan2(-s[6], s[10]), Math.asin(s[2]), Math.atan2(-s[1], s[0])];
        h.rotate[0] || (h.rotate[0] = 0, h.rotate[2] = Math.atan2(s[4], s[5]));
        h.scale = [d[0], d[5], d[10]];
        h.Ba = [Math.atan(d[9] / h.scale[2]),
            Math.atan(d[8] / h.scale[2]), Math.atan(d[4] / h.scale[0])];
        return h
    }, jf             : function (a) {
        var b = g.scale(a.scale[0], a.scale[1], a.scale[2]), d = g.Ba(a.Ba[0], a.Ba[1], a.Ba[2]), h = g.rotate(a.rotate[0], a.rotate[1], a.rotate[2]);
        return g.move(g.multiply(b, d, h), a.translate)
    }, Qd             : function (a, b) {
        if (!a || !b)return x;
        if (a == b)return q;
        for (var d = 0; d < a.length; d++)if (Math.abs(a[d] - b[d]) >= g.precision)return x;
        return q
    }, Sc             : function (a) {
        a = a.slice(0);
        if (a[0] == Math.PI / 2 || a[0] == -Math.PI / 2)a[0] = -a[0], a[1] = Math.PI - a[1], a[2] -= Math.PI;
        a[0] >
            Math.PI / 2 && (a[0] -= Math.PI, a[1] = Math.PI - a[1], a[2] -= Math.PI);
        a[0] < -Math.PI / 2 && (a[0] += Math.PI, a[1] = -Math.PI - a[1], a[2] -= Math.PI);
        for (; a[1] < -Math.PI;)a[1] += 2 * Math.PI;
        for (; a[1] >= Math.PI;)a[1] -= 2 * Math.PI;
        for (; a[2] < -Math.PI;)a[2] += 2 * Math.PI;
        for (; a[2] >= Math.PI;)a[2] -= 2 * Math.PI;
        return a
    }};
    j.c = g
});
B("0/c", ["require", "exports", "module", "./9"], function (e, k, j) {
    function g(a, d) {
        this.K = a;
        this.R = {};
        this.Xb = {};
        this.Qc = {};
        this.Yb = {};
        this.Zb = {};
        this.Oa = {};
        this.i = {};
        this.pd = {};
        this.pf = {K: this.K, bb: [], Rc: 0};
        this.a = d;
        this.a || (this.a = {});
        this.a.Ge || (this.a.Ge = "surface");
        this.a.Ud || (this.a.Ud = "group");
        this.a.fe || (this.a.fe = 30);
        this.a.Rb || (this.a.Rb = 0);
        this.a.ea || (this.a.ea = "c");
        this.a.size || (this.a.size = [a.offsetWidth, a.offsetHeight])
    }

    function c(b, d) {
        var h = f.yf(d);
        a ? b.style.webkitTransform = h : b.style.transform =
            h
    }

    var f = e("./9"), a = document.body.style.webkitTransform !== l;
    g.prototype = {wc: function (a) {
        var d = {}, h = {}, c = {}, e = {}, g = {}, j = {}, k = {};
        if (a)if ("undefined" != typeof a.id)this.pd[a.id] = a, h[a.id] = f.P, d[a.id] = 1; else if ("number" == typeof a.length)for (var m = 0; m < a.length; m++) {
            var w = m.toString() + "A", r = this.wc(a[m]), t;
            for (t in r.$b)d[t] = r.$b[t];
            for (t in r.v)h[t] = r.v[t];
            for (t in r.Ob)c[t] = r.Ob[t];
            for (t in r.i)e[t] = w + r.i[t];
            for (t in r.Sb)g[w + t] = r.Sb[t];
            for (t in r.Qb)j[w + t] = r.Qb[t];
            for (t in r.Pb)k[w + t] = r.Pb[t]
        } else if (a.target) {
            var G =
                a.target;
            t = "object" == typeof a.transform ? a.transform : f.P;
            var r = "number" == typeof a.opacity ? a.opacity : 1, A = a.group, a = a.ea;
            A && (g.X = t, j.X = r);
            var I = this.wc(G), G = I.v, p = I.$b, y = I.Ob, M = I.i, O = I.Sb, W = I.Qb, I = I.Pb;
            for (m in G)G.hasOwnProperty(m) && (h[m] = A || M.hasOwnProperty(m) ? G[m] : f.multiply(G[m], t), d[m] = A || M.hasOwnProperty(m) ? p[m] : r * p[m], c[m] = y[m] || a, M.hasOwnProperty(m) ? e[m] = M[m] : A && (e[m] = "X"));
            for (w in O)O.hasOwnProperty(w) && (g[w] = f.multiply(O[w], t));
            for (w in W)W.hasOwnProperty(w) && (j[w] = r * W[w]);
            for (w in I)I.hasOwnProperty(w) &&
            (k[w] = I[w])
        }
        return{v: h, i: e, Sb: g, $b: d, Qb: j, Ob: c, Pb: k}
    }, Xe            : function (a) {
        var d = {}, h = [], c;
        for (c in a)if (a.hasOwnProperty(c)) {
            var f = this.Oa[c];
            f && (d.hasOwnProperty(f) ? h.push(f) : d[f] = a[c])
        }
        for (c = 0; c < h.length; c++)d.hasOwnProperty(h[c]) && delete d[h[c]];
        return d
    }, af            : function (a) {
        for (var d in this.Oa)this.Oa.hasOwnProperty(d) && (this.Oa[d] = a[this.Oa[d]]);
        var h = {};
        for (d in this.i)if (this.i.hasOwnProperty(d))if (a.hasOwnProperty(d)) {
            h.hasOwnProperty(a[d]) || (h[a[d]] = []);
            for (var c = 0; c < this.i[d].length; c++)this.i[d][c].hb =
                a[d], h[a[d]].push(this.i[d][c])
        } else for (c = 0; c < this.i[d].length; c++)delete this.i[d][c].hb;
        this.i = h
    }, ud            : function (a, d) {
        d = d || this.a.ea;
        if ("tl" == d)return a;
        var h = 0;
        if ("r" == d || "tr" == d || "br" == d)h = this.a.size[0]; else if (!d || "t" == d || "c" == d || "b" == d)h = 0.5 * this.a.size[0];
        var c = 0;
        if ("bl" == d || "b" == d || "br" == d)c = this.a.size[1]; else if (!d || "l" == d || "c" == d || "r" == d)c = 0.5 * this.a.size[1];
        return f.move(a, [h, c, 0])
    }, Ue            : function (a, d, h) {
        h = h || this.a.ea;
        if ("tl" == h)return d;
        var c = 0;
        if ("r" == h || "tr" == h || "br" == h)c = -a[0]; else if (!h ||
            "t" == h || "c" == h || "b" == h)c = -0.5 * a[0];
        var e = 0;
        if ("bl" == h || "b" == h || "br" == h)e = -a[1]; else if (!h || "l" == h || "c" == h || "r" == h)e = -0.5 * a[1];
        return f.move(d, [c, e, 0])
    }, update        : function (a) {
        var d = this.wc(a), a = d.v, h = d.i, c = d.$b, e = d.Ob, g = d.Sb, j = d.Qb, d = d.Pb, k = this.Xe(h);
        this.af(k);
        for (var m in this.R)a.hasOwnProperty(m) || this.detach(m);
        for (m in a)a.hasOwnProperty(m) && this.fg(m, a[m], h[m], c[m], e[m], h.hasOwnProperty(m) ? f.multiply(a[m], g[h[m]]) : a[m]);
        for (m in g)g.hasOwnProperty(m) && this.eg(m, g[m], j[m], d[m])
    }, eg            : function (a, d, h, e) {
        if (a = this.i[a])for (var g = 0; g < a.length; g++) {
            if (!f.Qd(a[g].ee, d)) {
                a[g].ee = d;
                var j = f.multiply(f.translate(0, 0, this.a.Rb), this.ud(d, e));
                c(a[g].K, j)
            }
            a[g].opacity != h && (a[g].opacity = h, a[g].K.style.opacity = h)
        }
    }, ff            : function (a, d) {
        this.i[a] || (this.i[a] = []);
        var h = this.i[a];
        d.hb = a;
        h.push(d)
    }, Uf            : function (a) {
        this.i.hasOwnProperty(a) || (this.i[a] = []);
        for (var d = this.i[a], h = 0, c = this.a.fe; h < d.length && !(0 < d[h].bb.length || d[h].Rc < c);)h++;
        h >= d.length && (c = document.createElement("div"), c.classList.add(this.a.Ud), this.K.appendChild(c),
            d.push({hb: a, K: c, Rc: 0, bb: []}));
        return d[h]
    }, fg            : function (a, d, h, e, g) {
        var j = this.pd[a], k = this.Qc[a];
        k && h && (k.hb || this.ff(h, k), k.hb != h && this.detach(a));
        this.Oa[a] = h;
        this.R[a] || this.ef(a, h);
        k = this.R[a];
        if (j.wa || this.Xb[a])j.bg(k), this.Xb[a] = x;
        d = this.Ue(j.Kc(), d, g);
        f.Qd(d, this.Yb[a]) || (this.Yb[a] = d, h ? (h = f.move(d, [0, 0, -this.a.Rb]), c(k, h)) : c(k, this.ud(d, g)));
        e != this.Zb[a] && (this.Zb[a] = e, k.style.opacity = 0.999999 < e ? 0.999999 : e)
    }, ef            : function (a, d) {
        var h = d != l ? this.Uf(d) : this.pf, c;
        h.bb.length ? c = h.bb.pop() : (h.Rc++,
            c = document.createElement("div"), c.classList.add(this.a.Ge), h.K.appendChild(c));
        this.Qc[a] = h;
        this.R[a] = c;
        this.Xb[a] = q;
        return c
    }, detach        : function (a) {
        var d = this.R[a];
        delete this.R[a];
        delete this.Yb[a];
        delete this.Zb[a];
        d && (this.pd[a].lf(d), this.Qc[a].bb.push(d), c(d, f.scale(0, 0, 0)));
        this.Xb[a] = q
    }, fc            : function (a) {
        this.a.ea = a
    }, ka            : function (a) {
        this.a.size = a.slice(0);
        this.Yb = {};
        this.Zb = {};
        for (var d in this.i)for (var a = this.i[d], c = 0; c < a.length; c++)delete a[c].ee, delete a[c].opacity
    }};
    j.c = g
});
B("0/4", "require exports module ./3 ./7 ./8 ./c".split(" "), function (e, k, j) {
    function g() {
        document.activeElement && "INPUT" == document.activeElement.nodeName ? document.activeElement.addEventListener("blur", function C() {
            this.removeEventListener("blur", C);
            g()
        }) : (window.scrollTo(0, 0), c(function () {
            for (var a = window.innerWidth, d = window.innerHeight, c = 0; c < b.length; c++) {
                b[c].b("resize");
                var h = b[c].V;
                h && h.ka([a, d])
            }
        }))
    }

    function c(a) {
        h.push(a)
    }

    var f = e("./3"), k = e("./7");
    e("./8");
    var a = e("./c"), b = [], d = [], h = [], s = (new Date).getTime(),
        E = l, K = new k;
    requestAnimationFrame(function C() {
        var a = (new Date).getTime();
        E = 1E3 / (a - s);
        s = a;
        for (a = 0; a < d.length; a++) {
            var c = d[a];
            "function" == typeof c ? c.call(this) : c.update()
        }
        for (a = 0; a < h.length; a++)h[a].call(this);
        h = [];
        for (a = 0; a < b.length; a++)b[a].update();
        requestAnimationFrame(C)
    });
    window.addEventListener("resize", g);
    g();
    window.addEventListener("touchmove", function (a) {
        a.preventDefault()
    });
    e = "touchstart touchmove touchend touchcancel click keydown keyup keypress mouseenter mousemove mouseleave".split(" ");
    for (k = 0; k < e.length; k++)(function (a) {
        document.body.addEventListener(a, function (b) {
            K.b(a, b)
        })
    }).call(this, e[k]);
    j.c = {C: function (a) {
        0 > d.indexOf(a) && d.push(a)
    }, nb   : function (a) {
        a = d.indexOf(a);
        0 <= a && d.splice(a, 1)
    }, kd   : function (a) {
        d = a.slice(0)
    }, m    : function (a) {
        return K.m(a)
    }, za   : function (a) {
        return K.za(a)
    }, Xf   : function () {
        return eventMultiplex.Xf()
    }, Kd   : function (d) {
        d || (d = document.createElement("div"), console.warn("Tried to create context on non-existent element"));
        var c = d.V ? d.V : new a(d, {Rb: -1E5});
        d.V = c;
        d = new f(c);
        b.push(d);
        return d
    }, rg   : function () {
        return E
    }, Pc   : c}
});
B("0/b", ["require", "exports", "module", "./7", "./6"], function (e, k, j) {
    function g(a, b) {
        this.id = g.nf++;
        this.D = {};
        this.Y = {};
        this.content = "";
        this.wa = x;
        this.classList = [];
        this.sc = [];
        var d = this;
        this.Jb = function (a) {
            d.b(a.type, a)
        };
        this.Dc = new c;
        this.fb = new f;
        this.size = l;
        "object" == typeof a && this.ka(a);
        "undefined" != typeof b && this.T(b);
        g.Zd[this.id] = this
    }

    var c = e("./7"), f = e("./6");
    g.nf = 0;
    g.Zd = {};
    g.qg = function (a) {
        return g.Zd[a]
    };
    g.He = ["touchstart", "touchmove", "touchend", "touchcancel", "click"];
    g.prototype = {g: function (a, b) {
        this.fb.g(a, b)
    }, b            : function (a, b) {
        b && (b.origin = this);
        this.fb.b(a, b);
        this.Dc.b(a, b)
    }, u            : function () {
        return this
    }, m            : function (a) {
        return this.Dc = new c(a)
    }, pb           : function (a) {
        for (n in a)a.hasOwnProperty(n) && (this.Y[n] = a[n], this.wa = q)
    }, h            : function (a) {
        0 > this.classList.indexOf(a) && (this.classList.push(a), this.wa = q)
    }, T            : function (a) {
        this.content != a && (this.content = a, this.wa = q)
    }, Ve           : function (a) {
        for (var b in this.D)this.D.hasOwnProperty(b) && a.addEventListener(b, this.Jb);
        b = g.He;
        for (var d = 0; d < b.length; d++)a.addEventListener(b[d],
            this.Jb)
    }, cf           : function (a) {
        for (var b in this.D)this.D.hasOwnProperty(b) && a.removeEventListener(b, this.Jb);
        b = g.He;
        for (var d = 0; d < b.length; d++)a.removeEventListener(b[d], this.Jb)
    }, wd           : function (a) {
        for (var b = 0; b < this.sc.length; b++)a.classList.remove(this.sc[b]);
        this.sc = []
    }, bg           : function (a) {
        this.size ? (a.style.width = this.size[0] + "px", a.style.height = this.size[1] + "px") : this.rc = l;
        for (var b in this.Y)this.Y.hasOwnProperty(b) && (a.style[b] = this.Y[b]);
        b = this.classList;
        this.wd(a);
        for (var d = 0; d < b.length; d++)a.classList.add(b[d]);
        this.Ld(a);
        this.Ve(a);
        this.wa = x;
        this.xb = a
    }, lf           : function (a) {
        this.bd();
        a.style.width = "";
        a.style.height = "";
        for (var b in this.Y)this.Y.hasOwnProperty(b) && (a.style[b] = "");
        b = this.classList;
        this.wd(a);
        for (var d = 0; d < b.length; d++)a.classList.remove(b[d]);
        this.cf(a);
        this.xb = l
    }, Ld           : function (a) {
        a.innerHTML = this.content;
        this.b("deploy", a)
    }, bd           : function () {
    }, Kc           : function () {
        if (this.size)return this.size.slice(0);
        if (this.xb) {
            if (this.rc)return this.rc.slice(0);
            var a = this.xb.offsetWidth, b = this.xb.offsetHeight;
            a && b && (this.rc =
                [a, b]);
            return[a, b]
        }
        return[0, 0]
    }, ka           : function (a) {
        this.size = a.slice(0, 2);
        this.wa = q
    }};
    j.c = g
});
B("0/2", "require exports module ./c ./b ./a".split(" "), function (e, k, j) {
    function g() {
        f.apply(this, arguments);
        this.K = document.createElement("div");
        this.K.classList.add("container-surface");
        this.Ib = document.createElement("div");
        this.Ib.appendChild(this.K);
        this.V = new c(this.K, {size: this.size});
        this.wa = q;
        this.Eb = l
    }

    var c = e("./c"), f = e("./b"), a = e("./a");
    g.prototype = {Ld: function (a) {
        if (this.Ia) {
            if (this.Ia == a)return;
            this.bd()
        }
        a.innerHTML = "";
        this.Ia = a;
        this.Ia.appendChild(this.Ib.removeChild(this.Ib.firstChild))
    },
        bd           : function () {
            this.Ib.appendChild(this.Ia.removeChild(this.Ia.firstChild));
            this.Ia = l
        }, update    : function (a) {
            this.V.update(a)
        }, u         : function (a) {
            !a && this.Eb && (a = this.Eb.execute());
            this.update(a);
            return f.prototype.u.call(this)
        }, Db        : function (b) {
            return this.Eb = new a(b)
        }, fc        : function (a) {
            this.V.fc(a)
        }, ka        : function (a) {
            f.prototype.ka.apply(this, arguments);
            this.V && this.V.ka(a)
        }};
    for (var b in f.prototype)f.prototype.hasOwnProperty(b) && !g.prototype.hasOwnProperty(b) && (g.prototype[b] = f.prototype[b]);
    j.c = g
});
B("0/e", ["require", "exports", "module"], function (e, k, j) {
    function g(c) {
        this.ca = v;
        this.zb = [];
        this.xc = [];
        this.ce = 0;
        this.Ta({duration: 500, q: g.w.Nf});
        this.set(c)
    }

    g.w = {Nf: function (c) {
        return c
    }, rf    : function (c) {
        return c * c
    }, Ja    : function (c) {
        return c * (2 - c)
    }, eb    : function (c) {
        return 0.5 >= c ? 2 * c * c : -2 * c * c + 4 * c - 1
    }, sf    : function (c) {
        return c * (2.25 - 1.25 * c)
    }, hc    : function (c) {
        return(1 - c) * Math.sin(6 * Math.PI * c) + c
    }};
    g.prototype = {Cd: function () {
        0 >= this.zb.length ? this.set(this.state) : (this.ca = this.zb.shift(), this.startTime = this.getTime(),
            this.Fe = this.xd(this.state))
    }, df            : function (c) {
        if (this.ca && (c || (c = this.getTime()), this.ce != c)) {
            this.ce = c;
            var f = this.Fe, a = this.ca[0], b = this.ca[2], c = (c - this.startTime) / this.ca[1], d = Math.min(Math.max(c, 0), 1);
            if ("object" == typeof this.state)for (var h in this.state)this.state.hasOwnProperty(h) && (this.state[h] = this.Ad(f[h], a[h], b(d))); else this.state = this.Ad(f, a, b(d));
            1 <= c && (f = this.xc.shift(), this.Cd(), f && f())
        }
    }, Ad            : function (c, f, a) {
        return(1 - a) * c + a * f
    }, xd            : function (c) {
        if ("object" == typeof c) {
            if (c.slice)return c.slice(0);
            var f = {}, a;
            for (a in c)c.hasOwnProperty(a) && (f[a] = c[a]);
            return f
        }
        return c
    }, $e            : function (c) {
        var f = this.yd, a = {q: f.q};
        f.duration && (a.duration = f.duration);
        f.speed && (a.speed = f.speed);
        if ("boolean" == typeof c)return a;
        "number" == typeof c.duration && (a.duration = c.duration);
        c.q && (a.q = c.q);
        c.speed && (a.speed = c.speed);
        return a
    }, Ta            : function (c) {
        this.yd = {};
        for (var f in c)c.hasOwnProperty(f) && (this.yd[f] = c[f])
    }, set           : function (c, f, a) {
        if (f) {
            f = this.$e(f);
            if (f.speed) {
                var b = this.get(), d = 0;
                if ("object" == typeof b)for (var h in b)b.hasOwnProperty(h) &&
                (d += Math.pow(c[h] - b[h], 2)); else d = Math.pow(c - b, 2);
                f.duration = Math.sqrt(d) / f.speed
            }
            this.zb.push([c, f.duration, f.q]);
            this.xc.push(a);
            this.ca || this.Cd()
        } else this.startTime = 0, this.Fe = this.state = this.xd(c), this.ca = v, this.zb = [], this.xc = [], a && a()
    }, getTime       : function () {
        return this.Of ? this.Of : (new Date).getTime()
    }, get           : function (c) {
        this.df(c);
        return this.state
    }, Tb            : function () {
        return!!this.ca
    }, n             : function () {
        this.set(this.get())
    }};
    j.c = g
});
B("0/d", ["require", "exports", "module", "./9", "./e"], function (e, k, j) {
    function g(a, b, d) {
        a || (a = c.P);
        "number" != typeof b && (b = 1);
        this.qa = new f([0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1]);
        this.ac = new f(b);
        this.setTransform(a);
        this.Ua(b);
        this.fc(d)
    }

    var c = e("./9"), f = e("./e");
    g.zd = function (a) {
        return[].concat(a.translate, a.rotate, a.Ba, a.scale)
    };
    g.Ze = function (a) {
        return{translate: [a[0], a[1], a[2]], rotate: [a[3], a[4], a[5]], Ba: [a[6], a[7], a[8]], scale: [a[9], a[10], a[11]]}
    };
    g.prototype = {O: function () {
        return this.qa.Tb() ? c.jf(g.Ze(this.qa.get())) :
            this.Hc
    }, setTransform : function (a, b, d) {
        b ? (this.Gd && (this.qa.set(g.zd(c.fa(this.Hc))), this.Gd = x), this.qa.set(g.zd(c.fa(a)), b, d)) : (this.qa.n(), this.Gd = q);
        this.Hc = a
    }, Jc           : function () {
        return this.ac.get()
    }, Ua           : function (a, b, d) {
        this.ac.set(a, b, d)
    }, fc           : aa("ea"), ve: function (a) {
        this.qa.Ta(a);
        this.ac.Ta(a)
    }, n            : function () {
        this.qa.n();
        this.ac.n()
    }, jb           : function () {
        return this.qa.Tb()
    }, u            : function (a) {
        return{transform: this.O(), opacity: this.Jc(), ea: this.ea, target: a}
    }};
    j.c = g
});
B("0/1", ["require", "exports", "module", "./a"], function (e, k, j) {
    function g() {
        this.reset()
    }

    var c = e("./a");
    g.prototype = {f: function (f) {
        f = new c(f);
        this.R.push(f);
        return f
    }, reset        : function () {
        this.R = []
    }, u            : function () {
        for (var c = [], a = 0; a < this.R.length; a++)c.push(this.R[a].execute());
        return c
    }};
    j.c = g
});
B("0/5", ["require", "exports", "module", "./8", "./7"], function (e, k, j) {
    function g() {
    }

    function c(a) {
        this.Fb = {};
        this.zc = a
    }

    e("./8");
    var f = e("./7");
    g.prototype.b = function (a, b) {
        return[a, b]
    };
    c.prototype = {Aa: aa("zc"), L: function (a) {
        this.Fb[a] || (this.Fb[a] = new f(new g));
        return this.Fb[a]
    }, b             : function (a, b) {
        if ("undefined" != typeof this.zc) {
            b || (b = {});
            b.origin = this;
            var d = this.Fb[this.zc];
            if (d)return d.b(a, b)
        }
    }};
    j.c = c
});
B("1/g", ["require", "exports", "module", "0/9", "0/e"], function (e, k, j) {
    function g(a) {
        this.a = a;
        this.a || (this.a = {});
        this.a.hasOwnProperty("xBounds") || (this.a.nc = [-Infinity, Infinity]);
        this.a.hasOwnProperty("yBounds") || (this.a.oc = [-Infinity, Infinity]);
        this.a.hasOwnProperty("zBounds") || (this.a.pc = [-Infinity, Infinity]);
        this.Qa = new f([0, 0, 0]);
        this.Sa = new f([0, 0, 0]);
        this.Ca = new f([0, 0, 0]);
        this.Qa.Ta({duration: 3E3, q: f.w.Ja});
        this.Sa.Ta({duration: 1E3, q: f.w.Ja});
        this.Ca.Ta({duration: 1E3, q: f.w.Ja})
    }

    var c = e("0/9"),
        f = e("0/e");
    g.prototype = {ab: function () {
        var a = this.Qa.get(), b = this.Sa.get(), d = this.Ca.get(), d = c.rotate(-d[0], -d[1], -d[2]), b = c.multiply(c.ue(b[2]), c.Ra(b[1]), c.te(b[0])), h = c.translate(a[0], a[1], a[2]), a = c.translate(-a[0], -a[1], -a[2]);
        return c.multiply(a, b, h, d, a)
    }, u             : function (a) {
        a || (a = []);
        return{transform: this.ab(), target: a, group: q}
    }, jb            : function () {
        return this.Qa.Tb() || this.Ca.Tb()
    }, n             : function () {
        this.Qa.n();
        this.Sa.n();
        this.Ca.n()
    }, F             : function () {
        return this.Qa.get()
    }, s             : function (a, b, d) {
        a[0] < this.a.nc[0] &&
        (a[0] = this.a.nc[0]);
        a[0] > this.a.nc[1] && (a[0] = this.a.nc[1]);
        a[1] < this.a.oc[0] && (a[1] = this.a.oc[0]);
        a[1] > this.a.oc[1] && (a[1] = this.a.oc[1]);
        a[2] < this.a.pc[0] && (a[2] = this.a.pc[0]);
        a[2] > this.a.pc[1] && (a[2] = this.a.pc[1]);
        this.Qa.set(a, b, d)
    }, da            : function () {
        return this.Sa.get()
    }, A             : function (a, b, d) {
        if (b) {
            for (var c = this.da(), f = 0; 3 > f; f++)a[f] > 0.5 * Math.PI && c[f] <= -0.5 * Math.PI && (c[f] += 2 * Math.PI), a[f] < -0.5 * Math.PI && c[f] >= 0.5 * Math.PI && (c[f] -= 2 * Math.PI);
            this.Sa.set(c)
        }
        this.Sa.set(a, b, d)
    }, La            : function () {
        return this.Ca.get()
    },
        J            : function (a, b, d) {
            if (b) {
                for (var c = this.La(), f = 0; 3 > f; f++)a[f] > 0.5 * Math.PI && c[f] <= -0.5 * Math.PI && (c[f] += 2 * Math.PI), a[f] < -0.5 * Math.PI && c[f] >= 0.5 * Math.PI && (c[f] -= 2 * Math.PI);
                this.Ca.set(c)
            }
            this.Ca.set(a, b, d)
        }, ge        : function () {
            var a = this.La();
            if (a[0] || a[1] || a[2])a = c.fa(c.inverse(this.ab())), this.s(a.translate), this.A([-a.rotate[0], -a.rotate[1], -a.rotate[2]]), this.J([0, 0, 0])
        }, Sc        : function () {
            var a = this.da();
            if (a[0] || a[1] || a[2])a = c.fa(this.ab()), this.s([-a.translate[0], -a.translate[1], -a.translate[2]]), this.J([-a.rotate[0],
                -a.rotate[1], -a.rotate[2]]), this.A([0, 0, 0])
        }, Cf        : function () {
            var a = this.La();
            if (!a[0] && !a[1] && !a[2])return this.da();
            a = c.fa(c.inverse(this.ab()));
            return[-a.rotate[0], -a.rotate[1], -a.rotate[2]]
        }, Pf        : function (a, b, d) {
            var h = c.fa(c.inverse(a)), a = h.translate, h = c.Sc(h.rotate);
            this.A([0, 0, 0], b);
            this.J([-h[0], -h[1], -h[2]], b);
            this.s([-a[0], -a[1], -a[2]], b, d)
        }};
    j.c = g
});
B("1/i", ["require", "exports", "module"], function (e, k, j) {
    function g(c) {
        this.e = c
    }

    g.prototype = {move: function (c, f, a) {
        var b = this.e.F();
        this.e.s([b[0] + c[0], b[1] + c[1], b[2] + c[2]], f, a)
    }, rotate          : function (c, f, a) {
        var b = this.e.da();
        this.e.A([b[0] + c[0], b[1] + c[1], b[2] + c[2]], f, a)
    }, p               : function (c, f, a) {
        var b = this.e.La();
        this.e.J([b[0] + c[0], b[1] + c[1], b[2] + c[2]], f, a)
    }};
    j.c = g
});
B("1/h", ["require", "exports", "module", "./i"], function (e, k, j) {
    function g(a, b) {
        this.e = a;
        this.a = b;
        this.a || (this.a = {});
        this.a.me || (this.a.me = 0.8);
        this.a.Je || (this.a.Je = 0.2);
        this.a.re || (this.a.re = 0.0030);
        this.a.Ae || (this.a.Ae = 0.0030);
        this.a.oe || (this.a.oe = 700);
        this.a.Le || (this.a.Le = 1E3);
        this.a.ed || (this.a.ed = 50);
        this.a.md || (this.a.md = 50);
        this.a.Ie || (this.a.Ie = 100);
        this.a.ne || (this.a.ne = 2E3);
        this.a.Ke || (this.a.Ke = 2E3);
        this.a.S || (this.a.S = 0.5);
        this.a.U || (this.a.U = 0.5);
        this.a.tb || (this.a.tb = Math.PI / 12);
        this.a.cd ||
        (this.a.cd = 500);
        this.a.z || (this.a.z = c);
        this.a.$c || (this.a.$c = q);
        this.a.Me || (this.a.Me = this.a.$c);
        this.a.jd || (this.a.jd = q);
        this.a.Ee || (this.a.Ee = this.a.jd);
        this.a.Pa || (this.a.Pa = x);
        this.a.gd || (this.a.gd = x);
        this.a.nd || (this.a.nd = x);
        this.l = new this.a.z(this.e, this.a);
        this.state = v
    }

    var c = e("./i");
    g.td = {Fa: 1, ba: 2, aa: 3};
    var f = g.td;
    g.prototype = {ob: function () {
        return Math.max(this.e.F()[2] / 300, 1)
    }, Zc            : function (a) {
        this.e.n();
        this.ha = a.targetTouches[0].pageX;
        this.ia = a.targetTouches[0].pageY;
        this.Za = this.Ya = 0;
        this.G = (new Date).getTime()
    }, Yc            : function (a) {
        var b = a.targetTouches[0].pageX, a = a.targetTouches[0].pageY, d = b - this.ha, c = a - this.ia;
        this.e.Cf();
        var f = this.a.me * this.ob(), d = -f * d, c = -f * c;
        this.a.Pa && (Math.abs(d) > Math.abs(c) && (c = 0), Math.abs(c) > Math.abs(d) && (d = 0));
        this.l.move([d, c, 0]);
        this.ha = b;
        this.ia = a;
        b = (new Date).getTime();
        this.Ya = d / (b - this.G);
        this.Za = c / (b - this.G);
        this.G = b
    }, Xc            : function () {
        var a = this.a.oe, b = this.ob() * this.a.ne, d = a * this.Ya, a = a * this.Za;
        d > b && (d = b);
        a > b && (a = b);
        d < -b && (d = -b);
        a < -b && (a = -b);
        (d || a) &&
        this.l.move([d, a, 0], this.a.$c)
    }, lc            : function (a) {
        this.e.n();
        this.be = this.Oe(a);
        this.ye = 0;
        this.G = (new Date).getTime()
    }, kc            : function (a) {
        a = this.Oe(a);
        diffDistance = a - this.be;
        var b = 3 * Math.min(Math.abs(diffDistance) / this.a.Ie, 1) + 1;
        dZ = -this.ob() * b * this.a.Je * diffDistance;
        this.l.move([0, 0, dZ]);
        this.be = a;
        a = (new Date).getTime();
        b = a - this.G;
        if (1 < b || 0 < b && 0 != dZ)this.ye = dZ / b;
        this.G = a
    }, jc            : function () {
        var a = this.a.Le * this.ye, b = this.ob() * this.a.Ke;
        a > b && (a = b);
        a < -b && (a = -b);
        a && this.l.move([0, 0, a], this.a.Me)
    }, hd            : function (a) {
        this.e.n();
        var b = a.changedTouches.length - 1;
        this.ub = a.changedTouches[b].identifier;
        this.ha = a.changedTouches[b].pageX;
        this.ia = a.changedTouches[b].pageY;
        this.se = x
    }, fd            : function (a) {
        for (var b, d = 0; d < a.changedTouches.length; d++)a.changedTouches[d].identifier == this.ub && (b = a.changedTouches[d]);
        if (b) {
            a = b.pageX;
            b = b.pageY;
            var c = this.a.re, d = c * (a - this.ha), c = -c * (b - this.ia);
            this.a.gd && (Math.abs(d) > Math.abs(c) && (c = 0), Math.abs(c) > Math.abs(d) && (d = 0));
            this.l.rotate([-c, -d, 0]);
            this.se = q;
            var f = (new Date).getTime();
            this.Ya = d / (f - this.G);
            this.Za = c / (f - this.G);
            this.G = f;
            this.ha = a;
            this.ia = b
        }
    }, dd            : function (a) {
        for (var b, d = 0; d < a.changedTouches.length; d++)a.changedTouches[d].identifier == this.ub && (b = a.changedTouches[d]);
        if (b)if (this.se) {
            b = this.a.ed;
            a = b * this.Ya;
            b *= this.Za;
            a > this.a.S && (a = this.a.S);
            b > this.a.S && (b = this.a.S);
            a < -this.a.S && (a = -this.a.S);
            b < -this.a.S && (b = -this.a.S);
            var d = this.e.da(), c = [d[0] - b, d[1] - a, d[2]];
            Math.abs(c[0]) < this.a.tb && (b = d[0]);
            Math.abs(c[1]) < this.a.tb && (a = d[1]);
            (a || b) && this.l.rotate([-b, -a, 0], this.a.jd)
        } else this.ya()
    },
        ya           : function () {
            this.e.A([0, 0, 0], {duration: this.a.cd})
        }, De        : function (a) {
            this.e.n();
            var b = a.changedTouches.length - 1;
            this.ub = a.changedTouches[b].identifier;
            this.ha = a.changedTouches[b].pageX;
            this.ia = a.changedTouches[b].pageY;
            this.Ce = x
        }, Be        : function (a) {
            for (var b, d = 0; d < a.changedTouches.length; d++)a.changedTouches[d].identifier == this.ub && (b = a.changedTouches[d]);
            if (b) {
                a = b.pageX;
                b = b.pageY;
                var c = this.a.Ae, d = c * (a - this.ha), c = -c * (b - this.ia);
                this.a.nd && (Math.abs(d) > Math.abs(c) && (c = 0), Math.abs(c) > Math.abs(d) && (d = 0));
                this.l.p([-c, -d, 0]);
                this.Ce = q;
                var f = (new Date).getTime();
                this.Ya = d / (f - this.G);
                this.Za = c / (f - this.G);
                this.G = f;
                this.ha = a;
                this.ia = b
            }
        }, ze        : function (a) {
            for (var b, d = 0; d < a.changedTouches.length; d++)a.changedTouches[d].identifier == this.ub && (b = a.changedTouches[d]);
            if (b)if (this.Ce) {
                b = this.a.md;
                a = b * this.Ya;
                b *= this.Za;
                a > this.a.U && (a = this.a.U);
                b > this.a.U && (b = this.a.U);
                a < -this.a.U && (a = -this.a.U);
                b < -this.a.U && (b = -this.a.U);
                var d = this.e.La(), c = [d[0] - b, d[1] - a, d[2]];
                Math.abs(c[0]) < this.a.tb && (b = d[0]);
                Math.abs(c[1]) <
                    this.a.tb && (a = d[1]);
                (a || b) && this.l.p([-b, -a, 0], this.a.Ee)
            } else this.Da()
        }, Da        : function () {
            this.e.J([0, 0, 0], {duration: this.a.cd})
        }, Oe        : function (a) {
            var b = a.touches[0], d = a.touches[1], a = d.pageX - b.pageX, b = d.pageY - b.pageY;
            return Math.sqrt(a * a + b * b)
        }, pa        : function (a) {
            !this.state && 1 >= a.touches.length ? (this.state = f.Fa, this.Zc(a)) : this.state != f.ba && 2 == a.touches.length ? (this.state = f.ba, this.lc(a)) : this.state != f.aa && 3 == a.touches.length && (this.state = f.aa, this.hd(a))
        }, oa        : function (a) {
            this.state == f.Fa && this.Yc(a);
            this.state ==
                f.ba && this.kc(a);
            this.state == f.aa && this.fd(a)
        }, na        : function (a) {
            this.state == f.Fa && (this.Xc(a), this.state = v);
            this.state == f.ba && 2 > a.touches.length && (this.jc(a), this.state = v);
            this.state == f.aa && 3 > a.touches.length && (this.dd(a), this.state = v)
        }, b         : function (a, b) {
            "touchstart" == a ? this.pa(b) : "touchmove" == a ? this.oa(b) : "touchend" == a && this.na(b)
        }};
    g.prototype.trigger = g.prototype.b;
    j.c = g
});
B("1/p", ["require", "exports", "module", "./h"], function (e, k, j) {
    function g() {
        c.apply(this, arguments)
    }

    var c = e("./h");
    g.prototype = {pa: function (a) {
        !this.state && 1 >= a.touches.length ? (this.state = "pan", this.Zc(a)) : "swim" != this.state && 2 == a.touches.length ? (this.state = "swim", this.lc(a)) : "spin" != this.state && 3 == a.touches.length && (this.state = "spin", this.De(a))
    }, oa            : function (a) {
        "pan" == this.state && this.Yc(a);
        "swim" == this.state && this.kc(a);
        "spin" == this.state && this.Be(a)
    }, na            : function (a) {
        "pan" == this.state && (this.Xc(a),
            this.state = v);
        "swim" == this.state && 2 > a.touches.length && (this.jc(a), this.state = v);
        "spin" == this.state && 3 > a.touches.length && (this.ze(a), this.state = v)
    }, Da            : function () {
        c.prototype.Da.call(this, arguments);
        c.prototype.ya.call(this, arguments)
    }};
    for (var f in c.prototype)c.prototype.hasOwnProperty(f) && !g.prototype.hasOwnProperty(f) && (g.prototype[f] = c.prototype[f]);
    j.c = g
});
B("1/o", ["require", "exports", "module", "./h", "0/9"], function (e, k, j) {
    function g() {
        c.apply(this, arguments);
        this.a.I || (this.a.I = 0);
        this.a.Bb || (this.a.Bb = [0, 0, 0])
    }

    var c = e("./h"), f = e("0/9");
    g.prototype = {pa: function (a) {
        if (!this.state && 1 >= a.touches.length) {
            var d = f.fa(this.e.ab()), c = this.a.Bb[0] - d.translate[0], e = this.a.Bb[1] - d.translate[1], d = this.a.Bb[2] - d.translate[2];
            Math.sqrt(c * c + e * e + d * d) > this.a.I ? (this.e.Sc(), this.state = 4, this.De(a)) : (this.e.ge(), this.state = 3, this.hd(a))
        } else 2 != this.state && 2 == a.touches.length &&
        (this.state = 2, this.lc(a))
    }, oa            : function (a) {
        2 == this.state && this.kc(a);
        3 == this.state && this.fd(a);
        4 == this.state && this.Be(a)
    }, na            : function (a) {
        2 == this.state && 2 > a.touches.length && (this.jc(a), this.state = v);
        3 == this.state && (this.dd(a), this.state = v);
        4 == this.state && (this.ze(a), this.state = v)
    }, Da            : function () {
        c.prototype.ya.call(this, arguments);
        c.prototype.Da.call(this, arguments)
    }, ya            : function () {
        c.prototype.ya.call(this, arguments);
        c.prototype.Da.call(this, arguments)
    }};
    for (var a in c.prototype)c.prototype.hasOwnProperty(a) && !g.prototype.hasOwnProperty(a) && (g.prototype[a] = c.prototype[a]);
    j.c = g
});
B("1/n", ["require", "exports", "module", "./h"], function (e, k, j) {
    function g() {
        c.apply(this, arguments)
    }

    var c = e("./h"), f = c.td;
    g.prototype = {ob: function () {
        return 2
    }, pa            : function (a) {
        !this.state && 1 >= a.touches.length ? (this.state = f.Fa, this.Zc(a)) : this.state != f.ba && 2 == a.touches.length ? (this.state = f.ba, this.lc(a)) : this.state != f.aa && 3 == a.touches.length && (this.state = f.aa, this.hd(a))
    }, oa            : function (a) {
        this.state == f.Fa && (this.e.ge(), this.Yc(a));
        this.state == f.ba && this.kc(a);
        this.state == f.aa && this.fd(a)
    }, na            : function (a) {
        this.state ==
            f.Fa && (this.Xc(a), this.state = v);
        this.state == f.ba && 2 > a.touches.length && (this.jc(a), this.state = v);
        this.state == f.aa && 3 > a.touches.length && (this.dd(a), this.state = v)
    }, ya            : function () {
        c.prototype.ya.call(this, arguments);
        c.prototype.Da.call(this, arguments)
    }};
    for (var a in c.prototype)c.prototype.hasOwnProperty(a) && !g.prototype.hasOwnProperty(a) && (g.prototype[a] = c.prototype[a]);
    j.c = g
});
B("1/j", ["require", "exports", "module", "./i"], function (e, k, j) {
    function g(f, a) {
        this.e = f;
        this.a = a;
        this.a || (this.a = {});
        "undefined" == typeof this.a.Wb && (this.a.Wb = 1);
        "undefined" == typeof this.a.Z && (this.a.Z = 0.0010);
        "undefined" == typeof this.a.$ && (this.a.$ = 0.0010);
        this.a.ae || (this.a.ae = 500);
        this.a.p || (this.a.p = x);
        this.a.Q || (this.a.Q = x);
        this.a.ga || (this.a.ga = x);
        this.a.z || (this.a.z = c);
        this.l = new this.a.z(f, a);
        if (!this.a.pg) {
            var b = this;
            setTimeout(function h() {
                b.update();
                setTimeout(h, 20)
            }, 20)
        }
        this.Nc = (new Date).getTime();
        this.timestamp = (new Date).getTime();
        this.Ed()
    }

    var c = e("./i");
    g.prototype = {Ed: function () {
        this.r = [0, 0, 0];
        this.j = [0, 0, 0];
        this.k = [0, 0, 0]
    }, update        : function () {
        var c = (new Date).getTime(), a = c - this.timestamp;
        c - this.Nc > this.a.ae && this.Ed();
        (this.r[0] || this.r[1] || this.r[2]) && this.l.move([this.r[0] * this.a.Wb * a, this.r[1] * this.a.Wb * a, this.r[2] * this.a.Wb * a]);
        (this.j[0] || this.j[1] || this.j[2]) && this.l.rotate([this.j[0] * this.a.Z * a, this.j[1] * this.a.Z * a, this.j[2] * this.a.Z * a]);
        (this.k[0] || this.k[1] || this.k[2]) && this.l.p([this.k[0] *
            this.a.$ * a, this.k[1] * this.a.$ * a, this.k[2] * this.a.$ * a]);
        this.timestamp = c
    }, b             : function (c, a) {
        function b(a, b) {
            this.a.p ? (38 == a.keyCode ? this.k[0] = -b : 40 == a.keyCode ? this.k[0] = b : 37 == a.keyCode ? this.k[1] = b : 39 == a.keyCode && (this.k[1] = -b), this.a.Q && (this.k[1] *= -1), this.a.ga && (this.k[0] *= -1)) : (38 == a.keyCode ? this.j[0] = b : 40 == a.keyCode ? this.j[0] = -b : 37 == a.keyCode ? this.j[1] = -b : 39 == a.keyCode && (this.j[1] = b), this.a.Q && (this.j[1] *= -1), this.a.ga && (this.j[0] *= -1));
            87 == a.keyCode ? a.shiftKey ? this.r[1] = -b : this.r[2] = -b : 65 == a.keyCode ?
                this.r[0] = -b : 83 == a.keyCode ? a.shiftKey ? this.r[1] = b : this.r[2] = b : 68 == a.keyCode && (this.r[0] = b)
        }

        "keydown" == c ? (this.Nc = (new Date).getTime(), b.call(this, a, 1), this.update()) : "keyup" == c && b.call(this, a, 0)
    }};
    g.prototype.trigger = g.prototype.b;
    j.c = g
});
B("1/q", ["require", "exports", "module", "./i", "./j"], function (e, k, j) {
    function g(a, b) {
        c.apply(this, arguments)
    }

    e("./i");
    var c = e("./j");
    g.prototype = {b: function (a, b) {
        function d(a, b) {
            this.a.p ? (a.keyCode == c.KEY_UP ? this.k[0] = -b : a.keyCode == c.KEY_DOWN ? this.k[0] = b : a.keyCode == c.KEY_LEFT ? this.k[1] = b : a.keyCode == c.KEY_RIGHT && (this.k[1] = -b), this.a.Q && (this.k[1] *= -1), this.a.ga && (this.k[0] *= -1)) : (a.keyCode == c.KEY_UP ? this.j[0] = b : a.keyCode == c.KEY_DOWN ? this.j[0] = -b : a.keyCode == c.KEY_LEFT ? this.j[1] = -b : a.keyCode == c.KEY_RIGHT &&
                (this.j[1] = b), this.a.Q && (this.j[1] *= -1), this.a.ga && (this.j[0] *= -1));
            a.keyCode == c.KEY_2 ? this.r[2] = -b : a.keyCode == c.KEY_3 ? this.r[1] = -b : a.keyCode == c.KEY_4 ? this.r[0] = -b : a.keyCode == c.KEY_9 ? this.r[1] = b : a.keyCode == c.KEY_8 ? this.r[2] = b : a.keyCode == c.KEY_6 && (this.r[0] = b)
        }

        if (Common) {
            var c = new Common.API.TVKeyValue;
            "keydown" == a ? (this.Nc = (new Date).getTime(), d.call(this, b, 1), this.update()) : "keyup" == a && d.call(this, b, 0)
        }
    }};
    for (var f in c.prototype)c.prototype.hasOwnProperty(f) && !g.prototype.hasOwnProperty(f) && (g.prototype[f] =
        c.prototype[f]);
    g.prototype.trigger = g.prototype.b;
    j.c = g
});
B("1/l", ["require", "exports", "module", "./i"], function (e, k, j) {
    function g(f, a) {
        this.e = f;
        this.a = a;
        this.a || (this.a = {});
        "undefined" == typeof this.a.Z && (this.a.Z = 0.0050);
        "undefined" == typeof this.a.$ && (this.a.$ = 0.0050);
        this.a.Q || (this.a.Q = x);
        this.a.ga || (this.a.ga = x);
        this.a.p || (this.a.p = x);
        this.a.z || (this.a.z = c);
        this.a.lb || (this.a.lb = 100);
        this.a.va || (this.a.va = x);
        this.l = new this.a.z(f, a)
    }

    var c = e("./i");
    g.prototype = {b: function (c, a) {
        if ("mouseenter" == c)this.a.va && !a.ctrlKey && (this.xa = l), this.xa = [a.screenX, a.screenY];
        else if ("mousemove" == c)if (this.a.va && !a.ctrlKey)this.xa = l; else {
            var b = [a.screenX, a.screenY];
            if (this.xa) {
                var d = [this.xa[1] - b[1], b[0] - this.xa[0], 0];
                if (d[0] || d[1] || d[2])d[0] = Math.min(Math.max(d[0], -this.a.lb), this.a.lb), d[1] = Math.min(Math.max(d[1], -this.a.lb), this.a.lb), this.a.Q && (d[1] = -d[1]), this.a.ga && (d[0] = -d[0]), this.a.p ? this.l.p([d[0] * -this.a.$, d[1] * -this.a.$, d[2] * -this.a.$]) : this.l.rotate([d[0] * this.a.Z, d[1] * this.a.Z, d[2] * this.a.Z])
            }
            this.xa = b
        } else"mouseleave" == c && (this.xa = l)
    }};
    g.prototype.trigger =
        g.prototype.b;
    j.c = g
});
B("1/m", ["require", "exports", "module", "./i", "0/e"], function (e, k, j) {
    function g(a, b) {
        this.e = a;
        this.a = b;
        this.a || (this.a = {});
        this.a.I || (this.a.I = 0);
        this.a.Xa || (this.a.Xa = 0);
        this.a.ad || (this.a.ad = {duration: 3E3, q: f.w.Ja});
        this.l = new c(this.e)
    }

    var c = e("./i"), f = e("0/e");
    g.prototype = {move: function (a, b, d) {
        var c = this.e.F(), c = [c[0], c[1], c[2] + 300], c = Math.max(Math.sqrt(c[0] * c[0] + c[2] * c[2]), 300), f = a[0] / c;
        c < this.a.I && (f = -f);
        b === q && (b = this.a.ad);
        this.l.p([0, f, 0], b);
        this.l.move([0, a[1] + this.a.Xa * f, a[2]], b, d)
    }, rotate          : function (a, b, d) {
        this.l.rotate(a, b, d)
    }, p               : function (a, b, d) {
        this.l.move([0, this.a.Xa * a[1], 0], b);
        this.l.p(a, b, d)
    }};
    j.c = g
});
B("1/k", ["require", "exports", "module", "0/9", "0/e"], function (e, k, j) {
    function g(a, b, d, c) {
        b || (b = [-Infinity, Infinity]);
        d || (d = [-Infinity, Infinity]);
        c || (c = [-Infinity, Infinity]);
        this.Qe = new f(b);
        this.Re = new f(d);
        this.Se = new f(c);
        this.Vf = a
    }

    var c = e("0/9"), f = e("0/e");
    g.prototype = {Ef: function () {
        return this.Qe.get()
    }, qb            : function (a, b, d) {
        this.Qe.set(a, b, d)
    }, Ff            : function () {
        return this.Re.get()
    }, rb            : function (a, b, d) {
        this.Re.set(a, b, d)
    }, Gf            : function () {
        return this.Se.get()
    }, sb            : function (a, b, d) {
        this.Se.set(a, b, d)
    }, Dd            : function (a) {
        var b =
            this.Vf.F(), d = this.Ef(), f = this.Ff(), e = this.Gf(), g = d[1] - d[0], j = f[1] - f[0], k = e[1] - e[0], C = [b[0] + d[0], b[0] + d[1]], m = [b[1] + f[0], b[1] + f[1]], w = [b[2] + e[0], b[2] + e[1]], r = c.Ma(a), t = [0, 0, 0];
        r[0] < C[0] && (t[0] = g * Math.ceil((C[0] - r[0]) / g));
        r[0] > C[1] && (t[0] = g * Math.floor((C[1] - r[0]) / g));
        r[1] < m[0] && (t[1] = j * Math.ceil((m[0] - r[1]) / j));
        r[1] > m[1] && (t[1] = j * Math.floor((m[1] - r[1]) / j));
        r[2] < w[0] && (t[2] = k * Math.ceil((w[0] - r[2]) / k));
        r[2] > w[1] && (t[2] = k * Math.floor((w[1] - r[2]) / k));
        g = r.slice(0);
        g[0] += t[0] - b[0];
        g[1] += t[1] - b[1];
        g[2] += t[2] -
            b[2];
        b = Math.min(0.0050 * (g[0] - d[0]), 0.0050 * (d[1] - g[0]));
        f = Math.min(0.0050 * (g[1] - f[0]), 0.0050 * (f[1] - g[1]));
        e = Math.min(0.0050 * (g[2] - e[0]), 0.0050 * (e[1] - g[2]));
        e = Math.min(b, f, e, 1);
        return{transform: c.move(a, t), opacity: e}
    }, Bf            : function (a) {
        return this.Dd(a).transform
    }, u             : function (a) {
        for (var b = [], d = 0; d < a.length; d++) {
            var c = this.Dd(a[d].transform);
            b.push({transform: c.transform, opacity: c.opacity * a[d].opacity, target: a[d].target})
        }
        return b
    }};
    j.c = g
});
B("3/v", ["require", "exports", "module", "0/e"], function (e, k, j) {
    function g(f, a) {
        "undefined" == typeof f && (f = 0);
        "undefined" == typeof a && (a = q);
        this.ra = new c(f);
        this.vb = a
    }

    var c = e("0/e");
    g.prototype = {show: function (c) {
        this.set(1, this.vb, c)
    }, Na              : function (c) {
        this.set(0, this.vb, c)
    }, set             : function (c, a, b) {
        this.ra.n();
        this.ra.set(c, a, b)
    }, u               : function (c) {
        var a = this.ra.get();
        return a ? {opacity: a, target: c} : v
    }, Lf              : function (c) {
        c || (c = 0);
        return 1 <= c ? 1 == this.ra.get() : this.ra.get() > c
    }};
    j.c = g
});
B("3/w", ["require", "exports", "module", "0/9", "0/e"], function (e, k, j) {
    function g(a) {
        "undefined" == typeof a && (a = q);
        this.Fd = 0;
        this.ra = new f(0);
        this.vb = a;
        this.xf = 0.1
    }

    var c = e("0/9"), f = e("0/e");
    g.prototype = {Mb: function (a, b) {
        "undefined" == typeof a && (a = 1 == this.Fd ? 0 : 1);
        this.Fd = a;
        this.ra.set(a, this.vb, b)
    }, u             : function (a) {
        var b = this.ra.get(), d = {transform: c.Ra(Math.PI * b), target: a[0]}, a = {transform: c.Ra(Math.PI * (b - 1)), target: a[1]};
        return{transform: c.scale(1, 1, this.xf), target: [d, a]}
    }};
    j.c = g
});
B("3/x", ["require", "exports", "module", "0/e"], function (e, k, j) {
    function g(c, f) {
        this.Yd = c;
        this.timeout = f;
        this.enabled = 0 < f;
        this.reset()
    }

    e("0/e");
    g.prototype = {enable: function () {
        this.enabled = q
    }, disable           : function () {
        this.enabled = x
    }, update            : function () {
        !this.ib && (this.enabled && this.Yd) && (new Date).getTime() - this.Mf > this.timeout && (this.ib = q, this.Yd.call(this))
    }, reset             : function () {
        this.Mf = (new Date).getTime();
        this.ib = x
    }, b                 : function () {
        this.reset()
    }};
    j.c = g
});
B("3/z", ["require", "exports", "module"], function (e, k, j) {
    function g() {
        this.Dg = this.startTime = 0;
        this.ec = [];
        this.ja = -1
    }

    g.prototype = {Ye: function (c) {
        0 > this.ja && (this.ja = 0);
        for (; this.ja < this.ec.length && this.ec[this.ja].Ag <= c;)this.ec[this.ja].action.call(this), this.ja++
    }, update        : function () {
        0 > this.ja || this.ja >= this.ec.length || this.Ye((new Date).getTime() - this.startTime)
    }};
    j.c = g
});
B("3/10", "require exports module 0/9 0/e 0/d".split(" "), function (e, k, j) {
    function g(b) {
        this.cc = b;
        this.v = {};
        this.Oc = {};
        for (var d in this.cc)this.v[d] = new a, this.v[d].ve({duration: 1E3, q: f.w.eb})
    }

    var c = e("0/9"), f = e("0/e"), a = e("0/d");
    g.prototype = {n: function (a) {
        this.v[a].n()
    }, Vd           : function (a) {
        for (var d = 0; d < a.length; d++)this.n(d)
    }, Hf           : function () {
        this.Vd(this.all())
    }, set          : function (a, d, c, f) {
        this.v[a].setTransform(d, c, f)
    }, $f           : function (a, d, c, f) {
        for (var e = 0; e < a.length; e++)this.set(a[e], d(e), c, 0 == e ? f : l)
    }, Wa           : function (a, d, c) {
        this.$f(this.all(), a, d, c)
    }, modify       : function (a, d, f, e) {
        d = c.multiply(this.v[a].Hc, d);
        this.set(a, d, f, e)
    }, Ua           : function (a, d, c, f) {
        this.v[a].Ua(d, c, f)
    }, Yf           : function (a, d, c, f) {
        for (var e = 0; e < a.length; e++)this.Ua(a[e], d, c, 0 == e ? f : l)
    }, Va           : function (a, d, c) {
        this.Yf(this.all(), a, d, c)
    }, all          : function () {
        var a = [], d;
        for (d in this.cc)a.push(d);
        return a
    }, O            : function (a) {
        return this.v[a].O()
    }, Jc           : function (a) {
        return this.v[a].Jc()
    }, Vb           : function (a) {
        this.Oc[a] = q
    }, mc           : function (a) {
        this.Oc[a] = x
    }, $d           : function (a) {
        return this.Oc[a]
    }, jb           : function (a) {
        return this.v[a].jb()
    },
        u           : function () {
            var a = [], d;
            for (d in this.cc)a.push(this.v[d].u(this.cc[d]));
            return a
        }};
    j.c = g
});
B("6/19", ["require", "exports", "module", "0/9"], function (e, k, j) {
    function g(c, a) {
        this.gc = c;
        this.Ab = a;
        this.Ka = [];
        this.$a = [];
        this.vc = {}
    }

    var c = e("0/9");
    g.prototype = {Ec: function (c) {
        0 > this.Ka.indexOf(c) && this.Ka.push(c);
        this.update()
    }, dg            : function (c) {
        c = this.Ka.indexOf(c);
        0 <= c && this.Ka.splice(c, 1);
        this.update()
    }, kf            : function (c) {
        var a = [], b;
        for (b in this.Ab)this.Ab.hasOwnProperty(b) && 0 <= this.Ab[b].indexOf(c) && a.push(b);
        return a
    }, update        : function () {
        for (var f = [], a = 0; a < this.Ka.length; a++)for (var b = this.Ab[this.Ka[a]],
                                                                 d = 0; d < b.length; d++)0 > f.indexOf(b[d]) && f.push(b[d]);
        for (var e = this.gc, g = [], b = [], a = 0; a < this.$a.length; a++)d = this.$a[a], 0 > f.indexOf(d) && (b.push(d), e.modify(d, c.translate(0, 0, this.vc[d]), q), e.mc(d));
        for (a = 0; a < f.length; a++)0 > this.$a.indexOf(f[a]) && g.push(f[a]);
        b = [0, 0, 0];
        for (a = 0; a < g.length; a++) {
            var j = c.Ma(e.O(g[a]));
            b[0] += j[0];
            b[1] += j[1];
            b[2] += j[2]
        }
        b[0] /= g.length;
        b[1] /= g.length;
        b[2] /= g.length;
        for (var k = 0, a = 0; a < g.length; a++) {
            var j = c.Ma(e.O(g[a])), d = j[0] - b[0], D = j[1] - b[1], j = j[2] - b[2], d = Math.sqrt(d * d + D * D + j *
                j);
            d > k && (k = d);
            (function (a, b) {
                var d = this;
                setTimeout(function () {
                    var f = g[a];
                    d.vc[f] = 1800 * Math.pow(1 - b / k, 2) + 200;
                    e.Vb(f);
                    e.modify(f, c.translate(0, 0, -d.vc[f]), q)
                }, 3 * b)
            }).call(this, a, d)
        }
        this.$a = f
    }, Kf            : function (c) {
        return 0 <= this.$a.indexOf(c)
    }};
    j.c = g
});
B("6/1b", ["require", "exports", "module", "0/9", "0/e"], function (e, k, j) {
    function g(a, b, d) {
        "undefined" == typeof a && (a = 300);
        "undefined" == typeof b && (b = 2E3);
        "undefined" == typeof d && (d = 0.5);
        this.H = [];
        this.gb = [];
        this.Jf = a;
        this.duration = b;
        this.Ic = d;
        this.enabled = q
    }

    var c = e("0/9"), f = e("0/e");
    g.prototype = {enable: function () {
        this.enabled = q
    }, disable           : function () {
        if (this.enabled) {
            this.enabled = x;
            for (var a = 0; a < this.H.length; a++)this.Te(a)
        }
    }, Ec                : function (a) {
        0 > this.gb.indexOf(a) && this.gb.push(a)
    }, If                : function (a) {
        a = this.gb.indexOf(a);
        0 <= a && this.gb.splice(a, 1)
    }, Te                : function (a, b) {
        this.H.hasOwnProperty(a) && ("undefined" == typeof b && (b = 500), this.H[a].n(), this.H[a].set(0, {duration: b, q: f.w.eb}))
    }, update            : function () {
        if (this.enabled && this.H.length && !(Math.random() > this.Ic)) {
            var a = Math.floor(Math.random() * this.H.length);
            if (!(0 <= this.gb.indexOf(a))) {
                var b = Math.round(this.Jf * (Math.random() - 0.5)), d = Math.round(this.duration * (Math.random() + 0.5));
                this.H[a].n();
                this.H[a].set(b, {duration: d, q: f.w.eb})
            }
        }
    }, u                 : function (a) {
        this.update();
        for (var b = Array(a.length),
                 d = 0; d < a.length; d++) {
            this.H.hasOwnProperty(d) || (this.H[d] = new f(0));
            var e = a[d];
            b[d] = e.transform ? {transform: c.move(e.transform, [0, 0, this.H[d].get()]), opacity: e.opacity, target: e.target} : {transform: c.translate(0, 0, this.H[d].get()), target: e}
        }
        return b
    }};
    j.c = g
});
B("6/1a", "require exports module 0/9 0/e 3/10".split(" "), function (e, k, j) {
    function g(a, b) {
        b || (b = 0.1);
        this.gc = a;
        this.Ic = b
    }

    var c = e("0/9"), f = e("0/e");
    e("3/10");
    g.prototype = {cg: function (a, b) {
        var d = this.gc;
        d.Vb(a);
        d.Vb(b);
        var e = c.Ma(d.O(a)), g = c.Ma(d.O(b)), j = g[0] - e[0], k = g[1] - e[1], e = g[2] - e[2], g = 100 * Math.random() - 50, D = 100 * Math.random() - 50, C = 100 * Math.random() - 50, m = 100 * Math.random() - 50, w = {duration: 2E3, q: f.w.Ja}, r = {duration: 1E3, q: f.w.eb};
        d.modify(a, c.translate(0, 0, e), w);
        d.modify(a, c.translate(j + g, 0, 0), w);
        d.modify(a,
            c.translate(0, k + D, 0), w);
        d.modify(a, c.translate(-g, 0, 0), r);
        d.modify(a, c.translate(0, -D, 0), r, function () {
            d.mc(a)
        });
        d.modify(b, c.translate(0, 0, -e), w);
        d.modify(b, c.translate(-j + C, 0, 0), w);
        d.modify(b, c.translate(0, -k + m, 0), w);
        d.modify(b, c.translate(-C, 0, 0), r);
        d.modify(b, c.translate(0, -m, 0), r, function () {
            d.mc(b)
        })
    }, update        : function () {
        if (!(Math.random() > this.Ic)) {
            var a = this.gc, b = a.all(), d = b[Math.floor(Math.random() * b.length)], b = b[Math.floor(Math.random() * b.length)];
            d == b || (a.jb(d) || a.jb(b) || a.$d(d) || a.$d(b)) ||
            this.cg(d, b)
        }
    }};
    j.c = g
});
B("2/s", ["require", "exports", "module"], function (e, k, j) {
    function g(c, f) {
        this.B = this.x = 0;
        this.Ha = [];
        this.Gc = 0.5;
        this.Mc = 1E-4;
        this.Qf = 1;
        this.kb = (new Date).getTime();
        this.ua = x;
        this.set(c, f)
    }

    g.Gb = function (c) {
        return function (f, a, b) {
            return-c * a * a * b
        }
    };
    g.Nb = function (c) {
        return function (f, a, b) {
            return-c * Math.abs(a) * b
        }
    };
    g.hc = function (c, f, a) {
        f || (f = 0);
        a || (a = 0);
        var b = 2 * a * Math.sqrt(f);
        return function (a, e, g) {
            var a = a - c, j = a + e * g, k = 0.5 * f * a * a, D = 0.5 * f * j * j;
            return-(0 > a / j ? k : D - k) - b * e * e * g
        }
    };
    g.vg = function (c, f) {
        f || (f = 0);
        return function (a, b, d) {
            var e = a - c, a = e + b * d;
            if (0.5 > Math.abs(e) && 0.5 > Math.abs(a))return-0.5 * b * b * d;
            b = -f / Math.max(Math.abs(e), 0.5);
            return-(-f / Math.max(Math.abs(a), 0.5) - b)
        }
    };
    g.prototype = {Hd: function () {
        this.kb = (new Date).getTime();
        this.ua = x
    }, set           : function (c, f) {
        "number" == typeof c && this.s(c);
        "number" == typeof f && this.ld(f)
    }, s             : function (c) {
        this.x = c;
        this.Hd()
    }, ld            : function (c) {
        this.B = c;
        this.Hd()
    }, C             : function (c) {
        "function" != typeof c && console.error("Invalid agent");
        0 > this.Ha.indexOf(c) && (this.Ha.push(c), this.ua = x)
    }, nb            : function (c) {
        c = this.Ha.indexOf(c);
        0 <= c && (this.Ha.splice(c, 1), this.ua = x)
    }, kd            : function (c) {
        this.Ha = c.slice(0);
        this.ua = x
    }, F             : function () {
        this.update();
        return this.x
    }, Df            : function () {
        this.update();
        return this.B
    }, update        : function (c) {
        for (c || (c = (new Date).getTime()); this.kb < c;) {
            var f = c - this.kb;
            this.B && (f = Math.min(f, this.Gc / Math.abs(this.B)));
            f = Math.max(f, this.Qf);
            this.bf(f)
        }
    }, bf            : function (c) {
        function f(b, c, d) {
            for (var f = a.Ha, e = 0, g = 0; g < f.length; g++)e += f[g](b, c, d);
            return e
        }

        this.kb += c;
        if (!this.ua) {
            var a = this, b = 0, d = 0;
            if (Math.abs(this.B) > this.Mc)b = f(this.x,
                this.B, c), d = 0 < this.B ? 1 : -1; else {
                var e = f(this.x, this.Mc, c), g = f(this.x, -this.Mc, c), b = Math.max(e, g), d = e > g ? 1 : -1;
                0 >= e && 0 >= g && (this.ua = q)
            }
            e = this.B;
            e = 0.5 * e * e + b;
            0 > e ? (this.x += this.B * c * (e / b), this.B = 0) : (b = d * Math.sqrt(2 * Math.abs(e)), this.x += this.B * c, this.B = b);
            this.ua && (this.x = Math.round(this.x / this.Gc) * this.Gc)
        }
    }};
    j.c = g
});
B("2/t", ["require", "exports", "module", "0/9", "./s"], function (e, k, j) {
    function g(a, b) {
        this.dir = a;
        this.a = b;
        this.a || (this.a = {});
        this.a.Od || (this.a.Od = 0.5);
        this.a.de || (this.a.de = 50);
        this.a.Nb || (this.a.Nb = 1E-4);
        this.a.Gb || (this.a.Gb = 0.0020);
        this.a.Td || (this.a.Td = 1);
        this.a.Bc || (this.a.Bc = 2E-4);
        this.a.Ac || (this.a.Ac = 1);
        this.a.Wc || (this.a.Wc = x);
        this.a.Uc || (this.a.Uc = 0.1);
        this.a.le || (this.a.le = 300);
        this.a.Vc || (this.a.Vc = 1);
        this.a.ke || (this.a.ke = 2E-4);
        this.a.je || (this.a.je = 1);
        this.a.Cb || (this.a.Cb = "x" == this.dir ?
            window.innerWidth : window.innerHeight);
        this.a.M || (this.a.M = 0);
        this.a.N || (this.a.N = 0);
        this.a.Id || (this.a.Id = x);
        this.a.gg && (this.a.N = this.a.M + this.a.gg - this.a.Cb);
        this.D = {};
        this.o = new f({position: 0});
        this.mf = this.We();
        this.dc = q;
        this.W = x;
        this.ta = [];
        this.tc = 0;
        this.zf = f.Nb(this.a.Nb);
        this.qf = f.Gb(this.a.Gb);
        this.ag(this.a.M, q);
        this.we(this.a.N, q);
        this.Fc = [];
        this.Bd = this.t = this.qc = 0;
        this.Zf();
        this.disabled = x
    }

    var c = e("0/9"), f = e("./s");
    g.prototype = {g: function (a, b) {
        this.D[a] || (this.D[a] = []);
        b in this.D[a] ||
        this.D[a].push(b)
    }, b            : function (a, b) {
        this.mf.b(a, b);
        if (this.D[a])for (var c = 0; c < this.D[a].length; c++)this.D[a][c](b)
    }, u            : function (a) {
        if (this.a.Id) {
            var b = 0;
            "object" == typeof a && ("function" == typeof a.Kc && (b = a.Kc(), b = "x" == this.a.dir ? b[0] : b[1]), "object" == typeof a.size && (b = "x" == this.a.dir ? a.size[0] : a.size[1]));
            b = Math.max(b - this.a.Cb, 0);
            this.we(this.a.M + b)
        }
        var b = this.o.F(), d = this.o.Df();
        if (this.a.Wc) {
            if (this.qc != this.t) {
                this.o.nb(this.bc);
                if (0 <= this.t) {
                    var e = Math.min(Math.max(this.a.mb[this.t], this.a.M), this.a.N);
                    this.bc = f.hc(e, this.a.ke, this.a.je);
                    this.o.C(this.bc)
                }
                this.qc = this.t
            }
            0 > this.t && Math.abs(d) < this.a.Vc && (this.t = this.Jd(b));
            (this.bc && !this.W || 0 <= this.ta.indexOf("page")) && this.o.C(this.bc)
        }
        if (!this.W || 0 <= this.ta.indexOf("edge"))if (b < this.a.M || b > this.a.N)this.Hb || (this.o.kd([]), this.Hb = q), this.od && (b < this.a.M && 0 >= d) && (this.o.C(this.od), this.dc && (this.b("pullDown"), this.dc = x)), this.Cc && (b > this.a.N && 0 <= d) && this.o.C(this.Cc);
        this.b("render", {position: b, Eg: d});
        0 == b && (this.dc = q);
        return{transform                                   : "x" == this.dir ?
            c.translate(-b, 0) : c.translate(0, -b), target: a, group: q}
    }, We           : function () {
        var a = this, b = {};
        return{b: function (c, f) {
            if ("touchmove" == c) {
                for (var e = 0, g = 0; g < f.changedTouches.length; g++) {
                    var j = f.changedTouches[g];
                    if (b.hasOwnProperty(j.identifier)) {
                        var k = b[j.identifier], C = j.pageX - k.x, m = j.pageY - k.y, w = 0, w = "x" == a.dir ? Math.abs(C) > Math.abs(m) ? C : 0 : Math.abs(m) > Math.abs(C) ? m : 0, e = e - w;
                        k.x = j.pageX;
                        k.y = j.pageY
                    }
                }
                a.disabled || (0 < e && (a.dc = x), a.Sf(e), a.b("scrollmove"))
            } else if ("touchstart" == c) {
                if (!a.disabled) {
                    a.hf();
                    for (e = 0; e <
                        f.targetTouches.length; e++)g = f.targetTouches[e], b[g.identifier] = {x: g.pageX, y: g.pageY}
                }
            } else if ("touchend" == c)a:{
                for (e = 0; e < f.changedTouches.length; e++)g = f.changedTouches[e], b.hasOwnProperty(g.identifier) && delete b[g.identifier];
                for (e = 0; e < f.touches.length; e++)if (b.hasOwnProperty(f.touches[e].identifier))break a;
                a.Md()
            }
        }}
    }, disable      : function () {
        this.disabled = q
    }, enable       : function () {
        this.disabled = x
    }, F            : function () {
        return this.o.F()
    }, Sd           : function () {
        return this.a.N - this.a.M
    }, ag           : function (a, b) {
        if (b || a != this.a.M)this.a.M =
            a, this.o.nb(this.od), this.od = -Infinity < a ? f.hc(a, this.a.Bc, this.a.Ac) : v, this.Hb = x
    }, we           : function (a, b) {
        if (b || a != this.a.N)this.a.N = a, this.o.nb(this.Cc), this.Cc = Infinity > a ? f.hc(a, this.a.Bc, this.a.Ac) : v, this.Hb = x
    }, gf           : function (a) {
        a || (a = this.F());
        return a <= this.a.M || a >= this.a.N
    }, Jd           : function (a) {
        var b = 0, c = Infinity;
        for (i = 0; i < this.a.mb.length; i++) {
            var f = this.a.mb[i] - a;
            Math.abs(f) < c && (b = i, c = Math.abs(f))
        }
        return b
    }, Zf           : function (a) {
        if (Infinity > this.Sd() && !a)for (var a = [], b = this.a.Cb, c = Math.round(this.Sd() / b), f = 0; f <
            c; f++)a.push(f * b);
        this.a.mb = a;
        this.b("pageStopsChange")
    }, s            : function (a) {
        this.o.s(a)
    }, n            : function () {
        this.o.ld(0)
    }, he           : function () {
        this.Hb = x;
        this.o.kd([]);
        if (!this.W || 0 <= this.ta.indexOf("resist"))this.o.C(this.zf), this.o.C(this.qf);
        if (!this.W || 0 <= this.ta.indexOf("external"))for (var a = 0; a < this.Fc.length; a++)this.Fc[a] && this.o.C(this.Fc[a]);
        if (this.W)for (a = 0; a < this.sa.length; a++)this.o.C(this.sa[a])
    }, hf           : function (a, b) {
        a || (a = []);
        b || (b = []);
        this.W && this.Md();
        0 > a.indexOf("flow") && this.n();
        this.W = q;
        this.ta = a;
        this.sa =
            b;
        for (var c = 0; c < this.sa.length; c++)this.og.C(this.sa[c]);
        this.he();
        this.Ga = 0;
        this.uc = (new Date).getTime();
        return++this.tc
    }, Md           : function (a) {
        if (a && a != this.Af())return 0;
        (new Date).getTime() - this.uc > this.a.de && (this.Ga = 0);
        this.W = x;
        0 > this.ta.indexOf("flow") && this.o.ld(this.Ga * this.a.Td);
        this.ta = [];
        for (a = 0; a < this.sa.length; a++)this.o.nb(this.sa[a]);
        this.sa = [];
        this.he();
        this.a.Wc && (a = this.Jd(this.F()), 1 < Math.abs(a - this.qc) && (this.t = a), this.Ga > this.a.Uc ? this.t++ : this.Ga < -this.a.Uc ? this.t-- : this.t = a, 0 > this.t &&
            (this.t = 0), this.t >= this.a.mb.length && (this.t = this.a.mb.length - 1), a = (new Date).getTime(), Math.abs(this.Ga) > this.a.Vc && a - this.Bd < this.a.le && (this.t = -1), this.Bd = a);
        return this.tc
    }, Af           : function () {
        return this.W ? this.tc : 0
    }, Sf           : function (a) {
        var b = this.gf() ? this.a.Od * a : a;
        this.s(this.F() + b);
        var b = (new Date).getTime(), c = b - this.uc;
        this.uc = b;
        c && (this.Ga = a / c)
    }};
    j.c = g
});
B("4/13", ["require", "exports", "module"], function (e, k, j) {
    function g(c) {
        this.touches = {};
        this.yb = x;
        this.a = c;
        this.a || (this.a = {});
        this.a.Ne || (this.a.Ne = 300);
        this.a.Wd || (this.a.Wd = 300);
        "undefined" == typeof this.a.Pe && (this.a.Pe = q);
        this.Pd = []
    }

    g.prototype = {pa: function (c) {
        for (var f = this, a = 0; a < c.changedTouches.length; a++) {
            var b = c.changedTouches[a], d = b.identifier;
            this.touches[d] = {pe: b.pageX, qe: b.pageY, timestamp: (new Date).getTime(), qd: 0, rd: 0};
            c.origin.b("grab", {target: c.target});
            (function (a, b) {
                f.touches[a].Xd =
                    setTimeout(function () {
                        b.b("hold", {id: a})
                    }, f.a.Wd)
            }).call(this, d, c.origin)
        }
        this.yb = 1 == c.touches.length;
        this.Pd = []
    }, oa            : function (c) {
        for (var f = (new Date).getTime(), a = 0; a < c.changedTouches.length; a++) {
            var b = c.changedTouches[a], d = b.identifier;
            if (this.touches[d]) {
                var e = this.touches[d], g = b.pageX, b = b.pageY, j = g - e.pe, k = b - e.qe, D = f - e.timestamp, C = j / D, m = k / D;
                c.origin.b("move", {id: d, mg: j, ng: k, sd: C, sd: m, Nd: D});
                e.pe = g;
                e.qe = b;
                e.qd = C;
                e.rd = m;
                e.timestamp = f;
                clearTimeout(e.Xd)
            }
        }
        this.yb = x
    }, na            : function (c) {
        for (var f = (new Date).getTime(),
                 a = 0; a < c.changedTouches.length; a++) {
            var b = c.changedTouches[a].identifier;
            if (this.touches[b]) {
                var d = this.touches[b], e = f - d.timestamp;
                c.origin.b("release", {id: b, hg: d.qd, sd: d.rd, Nd: e});
                this.yb && e < this.a.Ne && (e = {id: b, Nd: e, target: c.target}, c.origin.b("tap", e), this.a.Pe && (c.preventDefault(), c.origin.b("click", e)));
                clearTimeout(d.Xd);
                this.Pd.push({id: b, hg: d.qd, sd: d.rd, timestamp: f});
                delete this.touches[b]
            }
        }
        0 == c.touches.length && (this.yb = x)
    }, b             : function (c, f) {
        "touchmove" == c ? this.oa(f) : "touchstart" == c ? this.pa(f) :
            "touchend" == c && this.na(f)
    }};
    j.c = g
});
B("4/12", ["require", "exports", "module"], function (e, k, j) {
    function g() {
        this.Ea = {}
    }

    g.prototype = {pa: function (c) {
        this.Lb && (this.ma = this.la = l);
        for (var f = 0; f < c.changedTouches.length; f++) {
            var a = c.changedTouches[f];
            this.Ea[a.identifier] = {x: a.pageX, y: a.pageY};
            "undefined" == typeof this.la ? this.la = a.identifier : "undefined" == typeof this.ma && (this.ma = a.identifier, this.Lb = q)
        }
        this.timestamp = (new Date).getTime();
        this.cb = this.vd(this.Ea[this.la], this.Ea[this.ma]);
        this.wb = 0
    }, oa            : function (c) {
        for (var f = 0; f < c.changedTouches.length; f++) {
            var a =
                c.changedTouches[f];
            this.Ea[a.identifier] = {x: a.pageX, y: a.pageY}
        }
        if (this.Lb && "undefined" != typeof this.la && "undefined" != typeof this.ma) {
            c = (new Date).getTime();
            f = c - this.timestamp;
            a = this.vd(this.Ea[this.la], this.Ea[this.ma]);
            if (10 < f || 0 < f && a != this.cb)this.wb = (a - this.cb) / f;
            this.cb = a;
            this.timestamp = c
        }
    }, na            : function (c) {
        for (var f = (new Date).getTime(), a = 0; a < c.changedTouches.length; a++) {
            var b = c.changedTouches[a];
            this.la == b.identifier && (this.la = l);
            this.ma == b.identifier && (this.ma = l);
            delete this.Ea[b.identifier]
        }
        this.Lb &&
            ("undefined" == typeof this.la && "undefined" == typeof this.ma) && (this.Lb = x, a = f - this.timestamp, 300 > a && 0 > this.wb ? c.origin.b("pinch", {B: this.wb, of: this.cb}) : 300 > a && 0 < this.wb && c.origin.b("spread", {B: this.wb, of: this.cb}));
        this.timestamp = f
    }, vd            : function (c, f) {
        if (c && f) {
            var a = f.x - c.x, b = f.y - c.y;
            return Math.sqrt(a * a + b * b)
        }
    }, b             : function (c, f) {
        "touchstart" == c ? this.pa(f) : "touchmove" == c ? this.oa(f) : "touchend" == c && this.na(f)
    }};
    j.c = g
});
B("6/18", {
    wf: "H T M L 5 O P E N A C A D E M Y".split(" "),
    tf: {zg: [0, 5, 6, 7, 14, 15, 33], yg: [1, 9, 17, 35, 53, 85, 117], sg: [8, 16, 34, 52, 84, 116], wg: [4, 13, 31, 32, 50, 51, 83], vb: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
    38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 71, 72, 73, 74, 75, 76, 77, 78, 79, 103, 104, 105, 106, 107, 108, 109, 110, 111], Bg                                                                                                                                                                                                                                                          : [12, 30, 48, 49, 80, 81, 82, 112, 113, 114, 115], jg: [2, 10, 18, 36, 54, 86], kg: [3, 11, 19, 37, 55, 87], ug: [56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70], ig: [88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102]}, vf: "Hydrogen Helium Lithium Beryllium Boron Carbon Nitrogen Oxygen Fluorine Neon Sodium Magnesium Aluminium Silicon Phosphorus Sulfur Chlorine Argon Potassium Calcium Scandium Titanium Vanadium Chromium Manganese Iron Cobalt Nickel Copper Zinc Gallium Germanium Arsenic Selenium Bromine Krypton Rubidium Strontium Yttrium Zirconium Niobium Molybdenum Technetium Ruthenium Rhodium Palladium Silver Cadmium Indium Tin Antimony Tellurium Iodine Xenon Cesium Barium Lanthanum Cerium Praseodymium Neodymium Promethium Samarium Europium Gadolinium Terbium Dysprosium Holmium Erbium Thulium Ytterbium Lutetium Hafnium Tantalum Tungsten Rhenium Osmium Iridium Platinum Gold Mercury Thallium Lead Bismuth Polonium Astatine Radon Francium Radium Actinium Thorium Protactinium Uranium Neptunium Plutonium Americium Curium Berkelium Californium Einsteinium Fermium Mendelevium Nobelium Lawrencium Rutherfordium Dubnium Seaborgium Bohrium Hassium Meitnerium Darmstadtium Roentgenium Copernicium Ravikantium Flerovium Ununpentium Livermorium Ununseptium Urasium".split(" "),
    uf: "1.008;4.003;6.941;9.012;10.812;12.011;14.007;15.999;18.998;20.180;22.990;24.305;26.982;28.086;30.974;32.066;35.453;39.948;39.098;40.078;44.956;47.867;50.942;51.996;54.938;55.845;58.933;58.693;63.546;65.382;69.723;72.631;74.922;78.963;79.904;83.798;85.468;87.621;88.906;91.224;92.906;95.962;(98);101.072;102.916;106.421;107.868;112.411;114.818;118.712;121.760;127.603;126.904;131.294;132.905;137.328;138.905;140.116;140.908;144.242;(145);150.362;151.964;157.253;158.925;162.500;164.930;167.259;168.934;173.055;174.967;178.492;180.948;183.841;186.207;190.233;192.217;195.085;196.967;200.592;204.383;207.21;208.980;(209);(210);(222);(223);(226);(227);232.038;231.036;238.029;(237);(244);(243);(247);(247);(251);(252);(257);(258);(259);(262);(267);(268);(269);(270);(269);(278);(281);(281);(285);Angellist Maximus;(289);(288);(293);(294);Michael Arrington".split(";")});

B("app", "require exports module 0/4 0/b 0/2 0/9 0/d 0/e 0/1 0/5 0/7 0/6 1/g 1/h 1/p 1/o 1/n 1/j 1/q 1/l 1/m 1/k 3/v 3/w 3/x 3/z 3/10 6/19 6/1b 6/1a 2/t 4/13 4/12 6/18 6/18 6/18 6/18".split(" "), function (e) {
    function k(a) {
        117 == a ? a = 62 : 62 == a && (a = 117);
        return p.translate(hb * (Math.floor(a / 15) - 3.5), ib * (a % 5 - 2), -jb * (Math.floor(a / 5) % 3) - 500)
    }

    function j(a) {
        0 == a ? a = 112 : 112 == a && (a = 0);
        return kb(a)
    }

    function g(a) {
        if (1 > a)a = [0, 0]; else if (2 > a)a = [17, 0]; else if (4 > a)a = [a - 2, 1]; else if (10 > a)a = [a + 8, 1]; else if (12 > a)a = [a - 10, 2];
        else if (18 > a)a = [a, 2]; else if (36 > a)a = [a - 18, 3]; else if (54 > a)a = [a - 36, 4]; else if (56 > a)a = [a - 54, 5]; else if (71 > a)a = [a - 53, 8]; else if (86 > a)a = [a - 68, 5]; else if (88 > a)a = [a - 86, 6]; else if (103 > a)a = [a - 85, 9]; else if (118 > a)a = [a - 100, 6]; else return p.scale(0, 0, 0);
        return p.translate(150 * (a[0] - 8.5), 190 * (a[1] - 4.5), 0)
    }

    function c(a) {
        return p.multiply(p.translate(0, 20 * (a - 59), 700), p.Ra(0.1 * a * Math.PI))
    }

    function f(a) {
        return p.multiply(p.translate(0, 250 * (Math.floor(a / 30) - 1), -900), p.Ra(-0.06667 * a * Math.PI))
    }

    function a(a, b) {
        var d =
            J != a;
        J = "undefined" != typeof a ? a : (J + 1) % 5;
        0 <= L && h(L);
        u.n();
        z.Hf();
        var e = {duration: 1E3, q: M.w.Ja};
        3 == J ? (z.Wa(g, e, b), z.Va(1, e), u.s([0, 0, 700], e), u.A([0, 0, 0], e), u.J([0, 0, 0], e), F.qb([-5E3, 5E3], e), F.rb([-3E3, 3E3], e), F.sb([-5E3, 5E3], e), X.setTransform(p.translate(120, 0, 0), q), d && s("HTML5 Open Academy")) : 1 == J ? (u.s([0, 0, 700], e), u.A([0, 0, 0], e), u.J([0, 0, 0], e), z.Wa(c, e, b), z.Va(1, e), F.qb([-5E3, 5E3], e), F.rb([-3E3, 3E3], e), F.sb([-5E3, 5E3], e), X.setTransform(p.translate(0, 0, 0), q), d && s("CSS3 With Nir Geier")) : 2 == J ? (u.s([0, 0, -500], e), u.A([0,
            0, 0], e), u.J([0, 0, 0], e), z.Wa(f, e, b), z.Va(1, e), F.qb([-5E3, 5E3], e), F.rb([-3E3, 3E3], e), F.sb([-5E3, 5E3], e), X.setTransform(p.translate(60, 0, 0), q), d && s("CSS3 With Nir Geier")) : 0 == J ? (u.s([0, 0, 800], e), u.A([0, 0, 0], e), u.J([0, 0, 0], e), z.Wa(j, e, b), z.Va(1, e), F.qb([-5E3, 5E3], e), F.rb([-3E3, 3E3], e), F.sb([-5E3, 5E3], e), X.setTransform(p.translate(-60, 0, 0), q), d && s("FLash or CSS?")) : 4 == J && (u.s([0, 0, -600], e), u.A([0, -Math.PI / 11, 0], e), u.J([0, 0, 0], e), z.Wa(k, e, b), z.Va(1, e), X.setTransform(p.translate(-120, 0, 0), q), d && s("FLash or CSS?"));
        4 == J ? Y.enable() :
            Y.disable();
        Z.Aa(J)
    }

    function b() {
        var a = {duration: 1E3};
        h(L);
        u.s(La, a);
        u.A(lb, a);
        u.J(Ma, a)
    }

    function d(a) {
        p.fa(z.O(a));
        L = a;
        mb = z.O(a);
        z.Vb(a);
        ba.Aa(1);
        var b = S[a].Y.backgroundImage;
        if (b) {
            S[a].pb({backgroundImage: ca[a].Y.backgroundImage});
            var c = new Image;
            c.onload = function () {
                S[a].pb({backgroundImage: b})
            };
            c.src = b.substring(5, b.length - 2)
        }
        La = u.F().slice(0);
        lb = u.da().slice(0);
        Ma = u.La().slice(0);
        da.pb({backgroundColor: ca[a].Y.backgroundColor});
        c = p.multiply(p.translate(0, 0, -200), F.Bf(z.O(a)));
        u.Pf(c, {duration: 1E3},
            function () {
                L == a && (z.set(a, p.scale(0, 0, 0)), G.Pc(function () {
                    Na.show()
                }))
            });
        Y.Ec(a);
        Y.Te(a, 500);
        ia.disable()
    }

    function h(a) {
        ja.Mb(0);
        z.set(a, mb);
        z.mc(a);
        Y.If(a);
        L == a && (ia.enable(), L = -1, ba.Aa(0), Na.Na())
    }

    function s(a) {
        Oa.T(a);
        Pa.set(1, x);
        Pa.Na()
    }

    function E(b, c, d) {
        c = new A([60, 60], c);
        c.h("shape-button");
        c.m(new P);
        c.g("click", function () {
            t && (a(b), window._gaq && _gaq.push(["_trackEvent", "demo", "shapeshift", d, , x]))
        });
        return c
    }

    function K() {
        ua.Lf(1) && (ka.Na(), ua.Na(), T.Aa(0))
    }

    function D(a, b, c) {
        var d = "";
        b && (d += "/r/" + b);
        c || (b = ["Wow! HTML5 performance solved. Check out famo.us Beta + Demo", "I can't believe what I saw HTML5 do. Check out famo.us Beta + Demo", "The famo.us demo just blew me away. Check out famo.us Beta + Demo", "If I hadn't seen it, I wouldn't believe it: famo.us HTML5 Beta + Demo", "I'm gunna go with holy shitsnacks! famo.us HTML5 Beta + Demo"], c = b[Math.floor(Math.random() * b.length)]);
        return'<a href="https://twitter.com/share?text=' + encodeURIComponent(c) + "&url=" + encodeURIComponent(d) +
            "&via=befamous\" onclick=\"event.preventDefault(); window.open(event.currentTarget.href, '_blank', 'width=700,height=260');\">" + a + "</a>"
    }

    function C(a) {
        return D('', a, l)
    }

    function m() {
        ea.T("");
        ka.show();
        la.Ua(1);
        la.setTransform(p.P, q);
        Qa.Na();
        T.Aa(2)
    }

    function w() {
        ka.Na();
        la.setTransform(p.move(p.scale(0.0010, 0.0010, 0.0010), [-0.5 * window.innerWidth, 0, 0]), q, function () {
            la.Ua(0)
        });
        Qa.show();
        T.Aa(0);
        t = q
    }

    if (!("WebKitCSSMatrix"in window) || !("m11"in new WebKitCSSMatrix))window.location.pathname =
        "/c" + window.location.pathname; else {
        document.title = "";
        var r = "Common"in window && "API"in Common, t = x, G = e("0/4"), A = e("0/b"), I = e("0/2"), p = e("0/9"), y = e("0/d"), M = e("0/e"), O = e("0/1"), W = e("0/5"), Eb = e("0/7"), va = e("0/6"), Fb = e("1/g");
        e("1/h");
        var Ra = e("1/p"), Gb = e("1/o"), Hb = e("1/n"), ma = e("1/j"), Ib = e("1/q"), wa = e("1/l"), fa = e("1/m"), Jb = e("1/k"), na = e("3/v"), Kb = e("3/w"), Lb = e("3/x");
        e("3/z");
        var Mb = e("3/10"), Nb = e("6/19"), Ob = e("6/1b"), Pb = e("6/1a");
        e("2/t");
        for (var P = e("4/13"), Qb = e("4/12"), Sa = e("6/18").wf,
                 Rb = e("6/18").tf, nb = e("6/18").vf, ob = e("6/18").uf, oa = Sa.length, Ta = Array(oa), Ua = 0; Ua < oa; Ua++)Ta[Ua] = 0.1 + 0.7 * Math.random();
        for (var ca, Va = Array(oa), U = 0; U < Va.length; U++) {
            var xa = new A([120, 160]);
            xa.pb({backgroundColor: "rgba(73,160,154," + Ta[U] + ")"});
            xa.h("periodic-item");
            xa.T('<div class="number">' + (U + 1) + '</div><div class="symbol">' + Sa[U] + '</div><div class="name">' + nb[U] + '</div><div class="mass">' + ob[U] + "</div>");
            Va[U] = xa
        }
        ca = Va;
        for (var S, Wa = Array(oa), V = 0; V < Wa.length; V++) {
            var ya = new A([360, 480]);
            ya.pb({backgroundColor: "rgba(73,160,154," +
                Ta[V] + ")"});
            ya.h("periodic-item-hq");
            ya.T('<div class="number">' + (V + 1) + '</div><div class="symbol">' + Sa[V] + '</div><div class="name">' + nb[V] + '</div><div class="mass">' + ob[V] + "</div>");
            Wa[V] = ya
        }
        S = Wa;
        var u = new Fb;
        u.s([0, 0, 5E3]);
        u.A([0, 0, 0]);
        u.J([0, -3 * Math.PI, 0]);
        var F = new Jb(u), Sb = new Ra(u), Tb = new Gb(u, {I: 700, U: 2 * Math.PI, S: 2 * Math.PI, ed: 200, md: 200, gd: q, nd: q, Pa: q}), Ub = new Hb(u, {Pa: q}), Vb = new Ra(u, {I: 900, z: fa, ad: {duration: 2E3, q: M.w.sf}, Pa: q}), Wb = new Ra(u, {I: 700, Xa: 200 / Math.PI, z: fa, Pa: q});
        r && (ma = Ib);
        var Xb =
            new ma(u), pb = new ma(u, {p: q}), Yb = new ma(u, {I: 700, Xa: 200 / Math.PI, p: q, Q: q, z: fa}), Zb = new ma(u, {I: 900, p: q, z: fa}), $b = new wa(u, {va: q}), qb = new wa(u, {va: q, p: q}), ac = new wa(u, {va: q, I: 700, Xa: 200 / Math.PI, p: q, Q: q, z: fa}), bc = new wa(u, {va: q, I: 900, p: q, z: fa}), ia = new Lb(function () {
            function b() {
                d.ib && setTimeout(function cc() {
                    if (d.ib) {
                        var a = u.da().slice(0), b = a.slice(0), c = 0.5 > Math.random() ? -1 : 1;
                        0.5 > Math.random() ? b[0] += 2 * c * Math.PI : b[1] += 2 * c * Math.PI;
                        u.A(b, {duration: 3E3}, function () {
                            u.A(a);
                            setTimeout(cc, 1E4)
                        })
                    }
                }, 1E4)
            }

            function c() {
                d.ib &&
                (z.Vd(z.all()), a(4, b))
            }

            var d = this;
            0 == J ? c() : (a(0), setTimeout(c, 200))
        }, 15E3);
        ia.disable();
        G.C(ia);
        var Y = new Ob(300, 2E3, 1);
        Y.disable();
        for (var hb = 270, ib = 350, jb = 400, kb, za = [], rb = Math.floor(7), Xa = 0; Xa <= rb; Xa++) {
            var sb = Math.PI / 2 - Xa * (Math.PI / rb), Aa = Math.floor(1400 * Math.PI * Math.cos(sb) / 160);
            0 == Aa && (Aa = 1);
            for (var Ya = 0; Ya < Aa; Ya++) {
                var dc = Ya * (2 * Math.PI / Aa) - Math.PI;
                za.push(p.multiply(p.translate(0, 0, 700), p.te(sb), p.Ra(dc)))
            }
        }
        for (; 118 > za.length;)za.push(p.P);
        kb = function (a) {
            return 118 <= a ? p.scale(0, 0, 0) : za[a]
        };
        var Z =
            new W(4);
        Z.L(3).m([Sb, pb, qb]);
        Z.L(0).m([Tb, pb, qb]);
        Z.L(4).m([Ub, Xb, $b]);
        Z.L(1).m([Wb, Yb, ac]);
        Z.L(2).m([Vb, Zb, bc]);
        var tb = new va;
        tb.g("keyup", function (b) {
            if (t)if (r) {
                var c = new Common.API.TVKeyValue;
                b.keyCode == c.KEY_ENTER && a()
            } else 32 == b.keyCode && a()
        });
        var J = 4, Ba = new va([new P, new Qb]);
        Ba.g("click", function (a) {
            a.target == document.body && b()
        });
        Ba.g("pinch", function () {
            b()
        });
        Ba.g("keyup", function (a) {
            27 == a.keyCode ? b() : 32 == a.keyCode && ja.Mb()
        });
        var ba = new W(0), z = new Mb(ca);
        z.Wa(g);
        z.Va(0);
        for (var ec = new Pb(z,
            0.1), Ca = new Nb(z, Rb), Na = new na(0, x), ja = new Kb, L = -1, La = l, lb = l, Ma = l, mb = l, Q = 0; Q < ca.length; Q++)(function (a, b) {
            b.m(new P);
            b.g("click", function () {
                t && (0 > L ? d(a) : (h(L), d(a), La = [0, 0, 600], beforeRotate = [0, 0, 0], Ma = [0, 0, 0]))
            });
            b.g("hold", function () {
                if (t) {
                    var b = Ca.kf(a)[0];
                    Ca.Kf(a) ? Ca.dg(b) : Ca.Ec(b)
                }
            })
        }).call(this, Q, ca[Q]);
        for (Q = 0; Q < S.length; Q++)S[Q].m(new P), S[Q].g("click", function () {
            ja.Mb(1)
        });
        new M(0);
        var da = new A([360, 480], "Reserved for Future Examples");
        da.h("periodic-item-hq");
        da.h("periodic-item-back");
        da.m(new P);
        da.g("click", function () {
            ja.Mb(0)
        });
        var ub = new A([200, 32], "HTML5 Open Academy");
        ub.h("caption");
        var Oa = new A([600, 50], "");
        Oa.h("shape-flash");
        var Pa = new na(0, {duration: 1E3, q: M.w.rf}), X = new y(p.translate(-120, 0, 0), 1, "b");
        X.ve({duration: 250, q: M.w.eb});
        var vb = new A([60, 60], '<div class="shape-button-indicator-box"></div>');
        vb.h("shape-button-indicator");
        var fc = E(4, '<img src="paraflow.png" alt="PF" />', "FLash or CSS?"),
            gc = E(3, '<img src="periodic.png" alt="P" />', "HTML5 Open Academy"),
            hc = E(0, '<img src="sphere.png" alt="S" />', "FLash or CSS?"),
            ic = E(1, '<img src="helix.png" alt="H" />', "FLash or CSS?"),
            jc = E(2, '<img src="wall.png" alt="W" />', "CSS3 With Nir Geier"),
            Za = new A([window.innerWidth, window.innerHeight]);
        Za.h("obscure");
        var ka = new na(0), Da = new A([200, 60], "");
        Da.h("info-button");
        var ua = new na;
        Da.m(new P);
        Da.g("click", function () {
            t && (ka.show(), ua.show(), T.Aa(1), window._gaq && _gaq.push(["_trackEvent", "sign-up", "info", , , q]))
        });
        true ?
            (t = q, G.Pc(w)) : (t = x, G.Pc(m));
        var wb = new A([600, 400], "");
        wb.h("info");
        var $a = new va([new P]);
        $a.g("keyup", K);
        $a.g("click", K);
        var la = new y(p.P), xb = new A([600, 500], '<h3>Welcome to <strong>famo.us</strong><br /><span class="sub">a javascript engine and framework that solves HTML5 performance</span></h3><p>40-60fps on phones, tablets, PCs, and televisions<br /> mod a template, or piece together components<br /> no plug-ins, no WebGL, no Canvas<br /> works on modern browsers<br />everything is DOM<br /> 65KB footprint</p><p class="experience">sign up for the beta, then experience famo.us</p>');
        xb.h("signup-box");
        var ab = new A([600, 150], '<form method="POST" action="#"><input id="email" type="text" size="30" name="email" maxlength="75" placeholder="enter email to sign up for beta" size="35" /><input class="button" type="submit" value="sign up" /></form>');
        ab.h("signup");
        var ea = new A([600, 20]);
        ea.h("signup-error");
        var Ea = new A([100, 100], '<img src="circle-x.png" alt="x" data-x="x">');
        Ea.h("signup-hide");
        Ea.m(new P);
        Ea.g("click", function () {
            w();
            window._gaq && _gaq.push(["_trackEvent", "sign-up",
                "hide", , , x])
        });
        var Fa = new A([0, 0], "");
        Fa.h("signup-show");
        Fa.m(new P);
        Fa.g("click", function () {
            m();
            window._gaq && _gaq.push(["_trackEvent", "sign-up", "show", , , x])
        });
        var Qa = new na(0), pa = new O;
        pa.f(xb);
        pa.f(new y(p.translate(0, 175, 0.01))).d(ab);
        pa.f(new y(p.translate(0, 210, 0.01))).d(ea);
        pa.f(new y(p.translate(275, -225, 0.01))).d(Ea);
        window.addEventListener("submit", function (a) {
            a.preventDefault();
            for (var b = {}, a = a.target.querySelectorAll("input"), c = 0; c < a.length; c++) {
                var d = a[c];
                d.name && (b[d.name] =
                    d.value)
            }
            a = document.location.href.split("/");
            b.referrerId = 2 <= a.length && "r" == a[a.length - 2] ? a[a.length - 1] : "";
            window._gaq && _gaq.push(["_trackEvent", "sign-up", "submit", , 1, q]);
            a = new XMLHttpRequest;
            a.open("POST", "/developers");
            a.setRequestHeader("Content-Type", "application/json");
            a.onreadystatechange = function () {
                if (4 == this.readyState)if (200 == this.status) {
                    var a = JSON.parse(this.responseText);
                    "OK" == a.status ? (ea.T(""), ab.T("<p><strong>Success!</strong> We just sent you an email with some more information. We'll send you updates soon.</p>" +
                        ('<div class="tweet-button">' + D("Tweet", a.socialId) + "</div>")), Ga.T(C(a.socialId)), sessionStorage.setItem("signedUp", q), window._gaq && _gaq.push(["_trackEvent", "sign-up", "success", , , x])) : ea.T(a.msg)
                } else ea.T("Ooops! Something went wrong. Try again."), window._gaq && _gaq.push(["_trackEvent", "sign-up", "error", , , q])
            };
            a.send(JSON.stringify(b))
        });
        var yb = new va;
        yb.g("keyup", function (a) {
            if (r) {
                var b = new Common.API.TVKeyValue;
                a.keyCode == b.KEY_EXIT && w()
            } else 27 == a.keyCode && w(), 13 == a.keyCode && (document.activeElement &&
                "INPUT" != document.activeElement.nodeName) && w()
        });
        var T = new W(0);
        T.L(0).m(ba);
        T.L(1).m($a);
        T.L(2).m(yb);
        var zb = new A([100, 60], "");
        zb.h("overlay-text");
        var Ha = new A([80, 60], '');
        Ha.h("jobs-button");
        Ha.h("overlay-text");
        Ha.g("click", function () {
            window._gaq && _gaq.push(["_trackEvent", "sign-up", "", , , q])
        });
        var Ga = new A([60, 60], C());
        Ga.h("shape-button");
        Ga.g("click", function () {
            window._gaq && _gaq.push(["_trackEvent", "demo", "tweet", , , x])
        });
        var Ab =
            new A([300, 60], "");
        Ab.h("copyright");

        var kc = G.Kd(document.querySelector("#main")), Bb = G.Kd(document.querySelector("#overlay")), bb = new O;
        bb.f(new y(p.move(p.scale(3, 3, 3), [0, -1E3, 0]))).d(ub);
        bb.f(F).d(Y).d(z);
        var cb = new O;
        cb.f(u).d(bb);
        cb.f(Na).d(new y(p.translate(0, 0, 200))).d(ja).d(function () {
            var a = {transform: p.scale(1 / 3, 1 / 3, 1 / 3), target: 0 <= L ? S[L] : v}, b = {transform: p.scale(1 / 3, 1 / 3, 1 / 3), target: da};
            return[a, b]
        });
        var Ia = new I([window.innerWidth, 60]);
        Ia.h("bottom-bar");
        Bb.g("resize",
            function () {
                Ia.ka([window.innerWidth, 60]);
                Za.ka([window.innerWidth, window.innerHeight])
            });
        var N = new O;
        N.f(new y(p.translate(240, 0), 1, "b")).d(Ga);
        N.f(new y(p.translate(-120, 0), 1, "b")).d(fc);
        N.f(new y(p.translate(120, 0), 1, "b")).d(gc);
        N.f(new y(p.translate(0, 0), 1, "b")).d(ic);
        N.f(new y(p.translate(60, 0), 1, "b")).d(jc);
        N.f(new y(p.translate(-60, 0), 1, "b")).d(hc);
        N.f(new y(p.translate(0, 0, 0.01), 1, "b")).d(X).d(vb);
        N.f(new y(p.P, 1, "br")).d(Da);
        N.f(new y(p.P, 1, "bl")).d(Ab);
        Ia.Db(N);
        var R = new O;
        R.f(Pa).d(Oa);
        R.f(new y(p.P, 1, "tl")).d(zb);
        R.f(new y(p.P, 1, "tr")).d(Ha);
        R.f(new y(p.translate(0, 0, 0), 1, "b")).d(Ia);
        R.f(new y(p.translate(0, 0, 0.09))).d(ka).d(Za);
        R.f(new y(p.translate(0, 0, 0.1))).d(ua).d(wb);
        R.f(new y(p.translate(0, 0, 0.1))).d(la).d(pa);
        R.f(new y(p.move(p.ue(Math.PI / 2), [-45, 0]), 1, "l")).d(Qa).d(Fa);
        kc.Db(cb);
        Bb.Db(R);
        ba.L(0).za(Z);
        ba.L(0).za(tb);
        ba.L(1).m(Ba);
        var db = new Eb;
        db.za(T);
        db.za(ia);
        G.m(db);
        G.C(function () {
            if (4 == J) {
                var a = Math.ceil(oa / 15) * hb, b = 5 * ib, c = 3 * jb, d = u.da(), e = 0.5 * Math.abs(Math.sin(d[1]) +
                    1), d = 0.5 * Math.abs(-Math.sin(d[0]) + 1);
                F.qb([(e - 1) * a, e * a], x);
                F.rb([(d - 1) * b, d * b], x);
                F.sb([-c + 400, 400], x);
                ec.update()
            }
        });
        a(4)


    }
});
ga(["app"]);