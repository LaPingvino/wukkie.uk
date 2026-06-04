var e = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0 }, t = /([astvzqmhlc])([^astvzqmhlc]*)/gi, n = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;
function r(e3) {
  let t2 = e3.match(n);
  return t2 ? t2.map(Number) : [];
}
function i(n2) {
  let i2 = [], a2 = String(n2).trim();
  return a2[0] !== `M` && a2[0] !== `m` || a2.replace(t, (t2, n3, a3) => {
    let o2 = r(a3), s2 = n3.toLowerCase(), c2 = n3;
    if (s2 === `m` && o2.length > 2 && (i2.push([c2, ...o2.splice(0, 2)]), s2 = `l`, c2 = c2 === `m` ? `l` : `L`), o2.length < e[s2])
      return ``;
    for (i2.push([c2, ...o2.splice(0, e[s2])]); o2.length >= e[s2] && o2.length && e[s2]; )
      i2.push([c2, ...o2.splice(0, e[s2])]);
    return ``;
  }), i2;
}
function a(e3, t2) {
  let n2 = e3.x * Math.cos(t2) - e3.y * Math.sin(t2), r2 = e3.y * Math.cos(t2) + e3.x * Math.sin(t2);
  e3.x = n2, e3.y = r2;
}
function o(e3, t2, n2) {
  e3.x += t2, e3.y += n2;
}
function s(e3, t2) {
  e3.x *= t2, e3.y *= t2;
}
var c = class e2 {
  constructor(t2) {
    this.commands = [], t2 && t2 instanceof e2 ? this.commands.push(...t2.commands) : t2 && (this.commands = i(t2));
  }
  addPath(t2) {
    t2 && t2 instanceof e2 && this.commands.push(...t2.commands);
  }
  moveTo(e3, t2) {
    this.commands.push([`M`, e3, t2]);
  }
  lineTo(e3, t2) {
    this.commands.push([`L`, e3, t2]);
  }
  arc(e3, t2, n2, r2, i2, a2) {
    this.commands.push([`AC`, e3, t2, n2, r2, i2, !!a2]);
  }
  arcTo(e3, t2, n2, r2, i2) {
    this.commands.push([`AT`, e3, t2, n2, r2, i2]);
  }
  ellipse(e3, t2, n2, r2, i2, a2, o2, s2) {
    this.commands.push([`E`, e3, t2, n2, r2, i2, a2, o2, !!s2]);
  }
  closePath() {
    this.commands.push([`Z`]);
  }
  bezierCurveTo(e3, t2, n2, r2, i2, a2) {
    this.commands.push([`C`, e3, t2, n2, r2, i2, a2]);
  }
  quadraticCurveTo(e3, t2, n2, r2) {
    this.commands.push([`Q`, e3, t2, n2, r2]);
  }
  rect(e3, t2, n2, r2) {
    this.commands.push([`R`, e3, t2, n2, r2]);
  }
  roundRect(e3, t2, n2, r2, i2) {
    i2 === void 0 ? this.commands.push([`RR`, e3, t2, n2, r2, 0]) : this.commands.push([`RR`, e3, t2, n2, r2, i2]);
  }
};
function l(e3, t2) {
  let n2 = 0, r2 = 0, i2, c2, l2, u2, d2, f2, p2, m, h, g, _, v, y, b, x, S, C, w, T, E, D, O = null, k = null, A = null, j = null, M = null, N = null;
  e3.beginPath();
  for (let P = 0; P < t2.length; ++P) {
    w = t2[P][0], w !== `S` && w !== `s` && w !== `C` && w !== `c` && (O = null, k = null), w !== `T` && w !== `t` && w !== `Q` && w !== `q` && (A = null, j = null);
    let F;
    switch (w) {
      case `m`:
      case `M`:
        F = t2[P], w === `m` ? (n2 += F[1], r2 += F[2]) : (n2 = F[1], r2 = F[2]), (w === `M` || !M) && (M = { x: n2, y: r2 }), e3.moveTo(n2, r2);
        break;
      case `l`:
        F = t2[P], n2 += F[1], r2 += F[2], e3.lineTo(n2, r2);
        break;
      case `L`:
        F = t2[P], n2 = F[1], r2 = F[2], e3.lineTo(n2, r2);
        break;
      case `H`:
        F = t2[P], n2 = F[1], e3.lineTo(n2, r2);
        break;
      case `h`:
        F = t2[P], n2 += F[1], e3.lineTo(n2, r2);
        break;
      case `V`:
        F = t2[P], r2 = F[1], e3.lineTo(n2, r2);
        break;
      case `v`:
        F = t2[P], r2 += F[1], e3.lineTo(n2, r2);
        break;
      case `a`:
      case `A`:
        if (F = t2[P], N === null)
          throw Error(`This should never happen`);
        w === `a` ? (n2 += F[6], r2 += F[7]) : (n2 = F[6], r2 = F[7]), b = F[1], x = F[2], p2 = F[3] * Math.PI / 180, l2 = !!F[4], u2 = !!F[5], d2 = { x: n2, y: r2 }, f2 = { x: (N.x - d2.x) / 2, y: (N.y - d2.y) / 2 }, a(f2, -p2), m = f2.x * f2.x / (b * b) + f2.y * f2.y / (x * x), m > 1 && (m = Math.sqrt(m), b *= m, x *= m), T = { x: b * f2.y / x, y: -(x * f2.x) / b }, h = b * b * x * x, g = b * b * f2.y * f2.y + x * x * f2.x * f2.x, u2 === l2 ? s(T, -Math.sqrt((h - g) / g) || 0) : s(T, Math.sqrt((h - g) / g) || 0), c2 = Math.atan2((f2.y - T.y) / x, (f2.x - T.x) / b), i2 = Math.atan2(-(f2.y + T.y) / x, -(f2.x + T.x) / b), a(T, p2), o(T, (d2.x + N.x) / 2, (d2.y + N.y) / 2), e3.save(), e3.translate(T.x, T.y), e3.rotate(p2), e3.scale(b, x), e3.arc(0, 0, 1, c2, i2, !u2), e3.restore();
        break;
      case `C`:
        F = t2[P], O = F[3], k = F[4], n2 = F[5], r2 = F[6], e3.bezierCurveTo(F[1], F[2], O, k, n2, r2);
        break;
      case `c`:
        F = t2[P], e3.bezierCurveTo(F[1] + n2, F[2] + r2, F[3] + n2, F[4] + r2, F[5] + n2, F[6] + r2), O = F[3] + n2, k = F[4] + r2, n2 += F[5], r2 += F[6];
        break;
      case `S`:
        F = t2[P], (O === null || k === null) && (O = n2, k = r2), e3.bezierCurveTo(2 * n2 - O, 2 * r2 - k, F[1], F[2], F[3], F[4]), O = F[1], k = F[2], n2 = F[3], r2 = F[4];
        break;
      case `s`:
        F = t2[P], (O === null || k === null) && (O = n2, k = r2), e3.bezierCurveTo(2 * n2 - O, 2 * r2 - k, F[1] + n2, F[2] + r2, F[3] + n2, F[4] + r2), O = F[1] + n2, k = F[2] + r2, n2 += F[3], r2 += F[4];
        break;
      case `Q`:
        F = t2[P], A = F[1], j = F[2], n2 = F[3], r2 = F[4], e3.quadraticCurveTo(A, j, n2, r2);
        break;
      case `q`:
        F = t2[P], A = F[1] + n2, j = F[2] + r2, n2 += F[3], r2 += F[4], e3.quadraticCurveTo(A, j, n2, r2);
        break;
      case `T`:
        F = t2[P], (A === null || j === null) && (A = n2, j = r2), A = 2 * n2 - A, j = 2 * r2 - j, n2 = F[1], r2 = F[2], e3.quadraticCurveTo(A, j, n2, r2);
        break;
      case `t`:
        F = t2[P], (A === null || j === null) && (A = n2, j = r2), A = 2 * n2 - A, j = 2 * r2 - j, n2 += F[1], r2 += F[2], e3.quadraticCurveTo(A, j, n2, r2);
        break;
      case `z`:
      case `Z`:
        M && (n2 = M.x, r2 = M.y), M = null, e3.closePath();
        break;
      case `AC`:
        F = t2[P], n2 = F[1], r2 = F[2], y = F[3], c2 = F[4], i2 = F[5], E = F[6], e3.arc(n2, r2, y, c2, i2, E);
        break;
      case `AT`:
        F = t2[P], _ = F[1], v = F[2], n2 = F[3], r2 = F[4], y = F[5], e3.arcTo(_, v, n2, r2, y);
        break;
      case `E`:
        F = t2[P], n2 = F[1], r2 = F[2], b = F[3], x = F[4], p2 = F[5], c2 = F[6], i2 = F[7], E = F[8], e3.save(), e3.translate(n2, r2), e3.rotate(p2), e3.scale(b, x), e3.arc(0, 0, 1, c2, i2, E), e3.restore();
        break;
      case `R`:
        F = t2[P], n2 = F[1], r2 = F[2], S = F[3], C = F[4], M = { x: n2, y: r2 }, e3.rect(n2, r2, S, C);
        break;
      case `RR`:
        F = t2[P], n2 = F[1], r2 = F[2], S = F[3], C = F[4], D = F[5], M = { x: n2, y: r2 }, e3.roundRect(n2, r2, S, C, D);
        break;
      default:
        throw Error(`Invalid path command: ${w}`);
    }
    N ? (N.x = n2, N.y = r2) : N = { x: n2, y: r2 };
  }
}
function u(e3, t2, n2, r2, i2 = 0) {
  if (typeof i2 == `number` && (i2 = [i2]), Array.isArray(i2)) {
    if (i2.length === 0 || i2.length > 4)
      throw RangeError(`Failed to execute 'roundRect' on '${this.constructor.name}': ${i2.length} radii provided. Between one and four radii are necessary.`);
    i2.forEach((e4) => {
      if (e4 < 0)
        throw RangeError(`Failed to execute 'roundRect' on '${this.constructor.name}': Radius value ${e4} is negative.`);
    });
  } else
    return;
  if (i2.length === 1 && i2[0] === 0) {
    this.rect(e3, t2, n2, r2);
    return;
  }
  let a2 = Math.min(n2, r2) / 2, o2 = Math.min(a2, i2[0]), s2 = o2, c2 = o2, l2 = o2;
  i2.length === 2 && (s2 = Math.min(a2, i2[1]), l2 = s2), i2.length === 3 && (s2 = Math.min(a2, i2[1]), l2 = s2, c2 = Math.min(a2, i2[2])), i2.length === 4 && (s2 = Math.min(a2, i2[1]), c2 = Math.min(a2, i2[2]), l2 = Math.min(a2, i2[3])), this.moveTo(e3, t2 + r2 - l2), this.arcTo(e3, t2, e3 + o2, t2, o2), this.arcTo(e3 + n2, t2, e3 + n2, t2 + s2, s2), this.arcTo(e3 + n2, t2 + r2, e3 + n2 - c2, t2 + r2, c2), this.arcTo(e3, t2 + r2, e3, t2 + r2 - l2, l2), this.closePath();
}
function d(e3) {
  if (!e3)
    return;
  let t2 = e3.prototype.clip, n2 = e3.prototype.fill, r2 = e3.prototype.stroke, i2 = e3.prototype.isPointInPath;
  e3.prototype.clip = function(...e4) {
    if (e4[0] instanceof c) {
      let n4 = e4[0], r3 = e4[1] || `nonzero`;
      return l(this, n4.commands), t2.apply(this, [r3]);
    }
    let n3 = e4[0] || `nonzero`;
    return t2.apply(this, [n3]);
  }, e3.prototype.fill = function(...e4) {
    if (e4[0] instanceof c) {
      let t4 = e4[0], r3 = e4[1] || `nonzero`;
      return l(this, t4.commands), n2.apply(this, [r3]);
    }
    let t3 = e4[0] || `nonzero`;
    return n2.apply(this, [t3]);
  }, e3.prototype.stroke = function(e4) {
    e4 && l(this, e4.commands), r2.apply(this);
  }, e3.prototype.isPointInPath = function(...e4) {
    if (e4[0] instanceof c) {
      let t3 = e4[0], n3 = e4[1], r3 = e4[2], a2 = e4[3] || `nonzero`;
      return l(this, t3.commands), i2.apply(this, [n3, r3, a2]);
    }
    return i2.apply(this, e4);
  };
}
function f(e3) {
  e3 && !e3.prototype.roundRect && (e3.prototype.roundRect = u);
}
function p(e3) {
  e3 && !e3.prototype.roundRect && (e3.prototype.roundRect = u);
}
export {
  c as Path2D,
  d as applyPath2DToCanvasRenderingContext,
  f as applyRoundRectToCanvasRenderingContext2D,
  p as applyRoundRectToPath2D,
  l as buildPath,
  i as parsePath,
  u as roundRect
};
