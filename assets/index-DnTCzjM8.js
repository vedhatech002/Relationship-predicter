(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) s(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const n of t.addedNodes)
          n.tagName === "LINK" && n.rel === "modulepreload" && s(n);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function s(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = i(e);
    fetch(e.href, t);
  }
})();
const a = document.getElementById("male-name"),
  m = document.getElementById("female-name"),
  g = document.getElementById("predict-btn"),
  c = document.getElementById("loader"),
  o = document.getElementById("result-page"),
  f = document.getElementById("result"),
  p = document.getElementById("result-img"),
  y = o.querySelector("div > button"),
  h = {
    0: {
      result: "you guys are freinds ✌️",
      resultImg: "./img/freinds.jpg",
    },
    1: { result: "you guys are in love ❤️", resultImg: "./img/love.jpg" },
    2: {
      result: "you guys have affection 😇 ",
      resultImg: "./img/affection.jpg",
    },
    3: {
      result: "you guys get Married soon 🎉 ",
      resultImg: "./img/marriage.jpg",
    },
    4: {
      result: "you guys are Enemies 👿 ",
      resultImg: "./img/enimies.jpg",
    },
    5: {
      result: "You guys are Brother and Sister 😅 ",
      resultImg: "./img/brotherandsister.jpg",
    },
  };
function E() {
  let r = I(),
    [l, i] = r;
  if (l !== void 0 && i !== void 0) {
    let s = l.toLowerCase().replaceAll(" ", "").split(""),
      e = i.toLowerCase().replaceAll(" ", "").split(""),
      t = 0;
    s.length > e.length ? (t = d(s, e)) : (t = d(e, s));
    let n = h[t];
    (f.innerText = n.result),
      (p.src = n.resultImg),
      c.classList.remove("hidden"),
      setTimeout(() => {
        c.classList.add("hidden");
      }, 4200),
      o.classList.remove("hidden"),
      (a.value = ""),
      (m.value = ""),
      y.addEventListener("click", () => {
        o.classList.add("hidden");
      });
  }
}
function d(r, l) {
  for (let n = 0; n < r.length; n++) {
    let u = l.indexOf(r[n]);
    u >= 0 && ((l[u] = 0), (r[n] = 0));
  }
  console.log(r), console.log(l);
  let i = [...r, ...l],
    s = [];
  return (
    i.forEach((n) => {
      n !== 0 && s.push(n);
    }),
    s.length % 6
  );
}
function I() {
  let r = [a, m],
    l = [];
  return (
    r.forEach((i) => {
      i.value !== ""
        ? l.push(i.value)
        : (i.nextElementSibling.innerText = "required"),
        i.addEventListener("keydown", (s) => {
          i.nextElementSibling.innerText = "";
        });
    }),
    l
  );
}
g.addEventListener("click", E);
