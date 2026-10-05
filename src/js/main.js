import { about, cases, contacts, finalImage } from './content.js';
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const li = x => `<li>${x.t ? `<h4>${x.t}</h4>` : ''}<p>${x.d}</p></li>`;
const res = a => `<ul class="res">${a.map(r => `<li><b>${r.n}</b>${r.l ? `<span>${r.l}</span>` : ''}</li>`).join('')}</ul>`;
const fig = (src, i) => `<figure class="media__i"><img src="${src}" alt="Case proof ${i + 1}" loading="lazy"></figure>`;
const part = p => `${p.title ? `<h3 class="label">${p.title}</h3>` : ''}<ul class="did">${p.did.map(li).join('')}</ul>${p.results ? `<h3 class="label">${p.title} results</h3>${res(p.results)}` : ''}`;
const caseHTML = (c, i) => `<section class="scene case" id="case-${i + 1}" data-theme="${i % 2 ? 'dark' : 'light'}">
<header class="case__head"><span>0${i + 1}</span><span>${c.period}</span></header>
<h2 class="split">${c.name}</h2>
<p class="stat">${c.stat.lead} <span class="count" data-to="${c.stat.to}" data-pre="${c.stat.pre || ''}" data-suf="${c.stat.suf}">${(c.stat.pre || '') + c.stat.to + c.stat.suf}</span></p>
<p class="stat__cap">${c.stat.cap}</p>
<div class="cols"><div><h3 class="label">The task</h3><p class="lead">${c.task}</p></div><div><h3 class="label">The starting point</h3>${c.start.map(s => `<p>${s}</p>`).join('')}</div></div>
<h3 class="label">What I did</h3>${c.parts.map(part).join('')}
${(c.flows || []).map(f => `<div class="flow"><h3 class="label">${f.title}</h3><ol>${f.steps.map(s => `<li>${s}</li>`).join('')}</ol></div>`).join('')}
${c.results ? `<h3 class="label">Results</h3>${res(c.results)}` : ''}
<div class="media">${c.media.map((m, j) => fig(`${c.dir}/${m}`, j)).join('')}</div></section>`;
const aboutHTML = `<section class="scene about" id="about" data-theme="light">
<h2 class="split">${about.name}</h2><p class="about__role">${about.role}</p>
<figure class="polaroid"><img src="${about.photo}" alt="Portrait of ${about.name}"></figure>
<div class="about__exp"><h3 class="label">Work experience</h3><ol class="exp">${about.experience.map((e, i) => `<li><i>0${i + 1}</i><span>${e[0]}</span><small>${e[1]}</small></li>`).join('')}</ol></div>
<div class="about__more"><div><h3 class="label">Education</h3><ul class="edu">${about.education.map(e => `<li><span>${e[0]}</span><small>${e[1]}</small></li>`).join('')}</ul></div>
<div>${about.skills.slice(0, 3).map(k => `<h3 class="label">${k[0]}</h3><p>${k[1]}</p>`).join('')}</div>
<div>${about.skills.slice(3).map(k => `<h3 class="label">${k[0]}</h3><p>${k[1]}</p>`).join('')}</div></div></section>`;
const finalHTML = `<section class="scene final" id="contact" data-theme="light"><h2 class="split">Thanks for scrolling.</h2>
<p>${about.name}<br>${about.role}</p><nav>${contacts.map(c => c.href ? `<a href="${c.href}"${c.href.startsWith('mailto:') ? '' : ' target="_blank" rel="noopener"'}>${c.label}</a>` : `<span>${c.label}</span>`).join('')}</nav>
${finalImage ? `<figure class="media__i" style="max-width:320px"><img src="${finalImage}" alt="Contact"></figure>` : ""}</section>`;
$('#app').innerHTML = aboutHTML + '<div id="work">' + cases.map(caseHTML).join('') + '</div>' + finalHTML;
$('.cover').insertAdjacentHTML('beforeend', cases.slice(0, 4).map((c, i) => `<a class="dial" href="#case-${i + 1}" style="--a:${[-45, 45, 135, -135][i]}deg"><span>0${i + 1}</span>${c.name}</a>`).join(''));

// Missing images become labelled empty frames (the vinyl gets a dashed ring).
const miss = t => { if (t.closest('.vinyl')) { t.closest('.vinyl__disc').classList.add('vinyl--missing'); t.remove(); return; }
  const d = document.createElement('div'); d.className = 'slot'; d.textContent = t.getAttribute('src').split('/').pop() + ' — add file'; t.replaceWith(d); };
addEventListener('error', e => e.target.tagName === 'IMG' && miss(e.target), true);
$$('img').forEach(i => i.complete && !i.naturalWidth && miss(i));

const g = window.gsap, ok = g && window.ScrollTrigger, reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const body = document.body, flood = $('.flood'), vw = $('.vinyl');
let theme = 'light';
function setTheme(t) {
  if (t === theme) return; theme = t;
  if (!ok || reduce) { body.dataset.theme = t; return; }
  const r = vw.getBoundingClientRect(), o = `${r.left + r.width / 2}px ${r.top + r.height / 2}px`;
  flood.style.background = t === 'dark' ? '#0a0a0a' : '#fff';
  g.fromTo(flood, { display: 'block', clipPath: `circle(0px at ${o})` }, { clipPath: `circle(150vmax at ${o})`, duration: 1.1, ease: 'power3.inOut', overwrite: true,
    onUpdate() { if (this.progress() > .4) body.dataset.theme = t; }, onComplete() { body.dataset.theme = t; g.set(flood, { display: 'none' }); } });
}
if (ok) {
  g.registerPlugin(ScrollTrigger);
  let lenis;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({ lerp: .09 }); lenis.on('scroll', ScrollTrigger.update);
    g.ticker.add(t => lenis.raf(t * 1000)); g.ticker.lagSmoothing(0);
    $$('a[href^="#"]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); lenis.scrollTo(a.getAttribute('href')); }));
  }
  $$('section[data-theme]').forEach(s => ScrollTrigger.create({ trigger: s, start: 'top 50%', end: 'bottom 50%', onToggle: self => self.isActive && setTheme(s.dataset.theme) }));
  if (!reduce) {
    // Vinyl: spins up like a turntable, speed follows scroll velocity, camera zooms in for About, then parks as a small mark.
    const spin = g.quickSetter($('.vinyl__disc'), 'rotation', 'deg'); let rot = 0, sp = 0;
    g.ticker.add((t, dt) => { sp += (12 + Math.abs(lenis ? lenis.velocity : 0) * 3 - sp) * .03; rot += sp * dt / 1000; spin(rot); });
    const ab = matchMedia('(max-width:800px)').matches ? { scale: .28, x: '34vw', y: '40vh' } : { scale: 1, x: '-27vw', y: '34vh' }; // About: record sits beside the portrait, clear of the CV text
    g.fromTo(vw, { scale: 1, x: 0, y: 0 }, { ...ab, ease: 'none', scrollTrigger: { trigger: '#about', start: 'top bottom', end: 'top 30%', scrub: true } });
    g.fromTo(vw, { ...ab }, { scale: .2, x: '42vw', y: '40vh', ease: 'none', immediateRender: false, scrollTrigger: { trigger: '#work', start: 'top bottom', end: 'top 30%', scrub: true } });
    g.from('.cover__script', { clipPath: 'inset(0 100% 0 0)', duration: 2.2, ease: 'power3.inOut', delay: .3 });
    g.from('.cover__smm,.cover__year,.dial', { opacity: 0, y: 30, duration: 1.2, stagger: .1, delay: 1.4, ease: 'power3.out' });
    $$('.split').forEach(el => {
      el.innerHTML = el.textContent.split(' ').map(w => `<span class="w"><span>${w}</span></span>`).join(' ');
      g.from($$('.w>span', el), { yPercent: 115, duration: 1.1, ease: 'power4.out', stagger: .07, scrollTrigger: { trigger: el, start: 'top 88%' } });
    });
    $$('.count').forEach(el => { const to = +el.dataset.to, pre = el.dataset.pre || '', suf = el.dataset.suf, o = { v: 0 }; el.textContent = pre + 0 + suf;
      ScrollTrigger.create({ trigger: el, start: 'top 85%', once: true, onEnter: () => g.to(o, { v: to, duration: 2.2, ease: 'power3.out', onUpdate: () => el.textContent = pre + Math.round(o.v) + suf }) }); });
    $$('.stat').forEach(el => g.fromTo(el, { xPercent: -4 }, { xPercent: 4, ease: 'none', scrollTrigger: { trigger: el, scrub: true } }));
    $$('.media__i').forEach(f => { g.from(f, { clipPath: 'inset(100% 0 0 0)', duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: f, start: 'top 90%' } });
      g.fromTo(f, { y: 24 }, { y: -24, ease: 'none', scrollTrigger: { trigger: f, scrub: true } }); });
    const sel = '.did li,.res li,.cols>div,.flow li,.about__cv li'; g.set(sel, { opacity: 0, y: 50 });
    ScrollTrigger.batch(sel, { start: 'top 92%', onEnter: b => g.to(b, { opacity: 1, y: 0, stagger: .08, duration: 1, ease: 'power3.out' }) });
    if (matchMedia('(pointer:fine)').matches) {
      const c = $('.cursor'), qx = g.quickTo(c, 'x', { duration: .3 }), qy = g.quickTo(c, 'y', { duration: .3 });
      addEventListener('mousemove', e => { qx(e.clientX); qy(e.clientY); });
      document.addEventListener('mouseover', e => c.classList.toggle('on', !!e.target.closest('a,.media__i,.stat')));
    }
  }
} else vw.style.position = 'absolute'; // CDN unavailable: keep the vinyl as a static cover element

// Contrast on the vinyl: cover and About text turns white exactly where it overlaps the record, and stays dark elsewhere.
const inkEls = [...$$('.nav a,.cover__script,.cover__smm,.cover__year,.about__role,.about .label,.about .exp li>*,.about .edu li>*,.about__more p'), ...($$('.about h2 .w>span').length ? $$('.about h2 .w>span') : $$('.about h2'))];
inkEls.forEach(e => e.classList.add('ink'));
function ink() {
  const r = vw.getBoundingClientRect(), vx = r.left + r.width / 2, vy = r.top + r.height / 2, vr = r.width * .478;
  for (const el of inkEls) {
    const b = el.getBoundingClientRect(); if (b.bottom < -80 || b.top > innerHeight + 80) continue;
    const m = new DOMMatrixReadOnly(getComputedStyle(el).transform), s = Math.hypot(m.a, m.b) || 1, t = Math.atan2(m.b, m.a), c = Math.cos(t), n = Math.sin(t);
    const dx = vx - (b.left + b.width / 2), dy = vy - (b.top + b.height / 2);
    el.style.setProperty('--cx', (dx * c + dy * n) / s + el.offsetWidth / 2 + 'px');
    el.style.setProperty('--cy', (-dx * n + dy * c) / s + el.offsetHeight / 2 + 'px');
    el.style.setProperty('--r', vr / s + 'px'); el.style.setProperty('--rl', vr * .293 / s + 'px'); // keep text dark on the record's white centre label
  }
}
if (g) g.ticker.add(ink); else (function loop() { ink(); requestAnimationFrame(loop); })();
