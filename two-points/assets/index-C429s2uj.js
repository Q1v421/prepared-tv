const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dist-CHi3dtUT.js","./dist-C_52oek8.js","./dist-CtMjQmT9.js"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{name:`MULTI`,ko:`멀티 화면`,amt:`GRID`,min:2,max:5,step:1,def:3},{name:`STROBE`,ko:`스트로브`,amt:`HOLD`,min:2,max:15,step:1,def:4},{name:`SLIT`,ko:`슬릿 스캔`,amt:`SPAN`,min:.1,max:1,step:.05,def:.6},{name:`MIRROR`,ko:`거울`,amt:`AXIS`,min:1,max:3,step:1,def:1},{name:`KALEIDO`,ko:`만화경`,amt:`SEGS`,min:2,max:12,step:1,def:4},{name:`MOSAIC`,ko:`모자이크`,amt:`SIZE`,min:.01,max:.15,step:.005,def:.04},{name:`ZOOM`,ko:`줌 잔상`,amt:`PULL`,min:.05,max:.6,step:.01,def:.25},{name:`RGB`,ko:`RGB 어긋남`,amt:`SHIFT`,min:1,max:40,step:1,def:10},{name:`POSTER`,ko:`포스터`,amt:`LEVELS`,min:2,max:8,step:1,def:3},{name:`SOLAR`,ko:`솔라리제이션`,amt:`FOLD`,min:0,max:1,step:.05,def:.8},{name:`NEGA`,ko:`네거티브`,amt:``,min:0,max:1,step:1,def:1},{name:`THERMAL`,ko:`열화상`,amt:``,min:0,max:1,step:1,def:1},{name:`PAINT`,ko:`페인트박스`,amt:`LEVELS`,min:2,max:8,step:1,def:4},{name:`NEON`,ko:`네온 외곽선`,amt:`GAIN`,min:.5,max:4,step:.1,def:2},{name:`TELETEXT`,ko:`문자방송`,amt:`COLS`,min:16,max:60,step:1,def:32},{name:`LED`,ko:`전광판`,amt:`DOTS`,min:24,max:160,step:2,def:64},{name:`HALFTONE`,ko:`망점`,amt:`CELL`,min:3,max:24,step:1,def:8},{name:`STAR`,ko:`별빛 필터`,amt:`THRESH`,min:.4,max:.97,step:.01,def:.75}];function t(){return{on:e.map(()=>!1),amt:e.map(e=>e.def)}}var n=[{name:`MAJOR`,ko:`장조`,steps:[0,2,4,5,7,9,11],minor:!1},{name:`MINOR`,ko:`단조`,steps:[0,2,3,5,7,8,10],minor:!0},{name:`PENTA`,ko:`5음계`,steps:[0,2,4,7,9],minor:!1},{name:`M.PENTA`,ko:`단5음계`,steps:[0,3,5,7,10],minor:!0},{name:`DORIAN`,ko:`도리안`,steps:[0,2,3,5,7,9,10],minor:!0}],r=[`C`,`C#`,`D`,`D#`,`E`,`F`,`F#`,`G`,`G#`,`A`,`A#`,`B`],i={output:{aspect:`9:16`,quality:`hd`},music:{bpm:96,root:9,scale:1,prog:0,vol:.85},board:{src:``,loopBars:2},stage:{bg:`gen:0`,all:!1},tools:{mode:`none`,smear:.7,size:.16},moor:{reshoot:{on:!1,tint:.75,zoom:.82,curve:.45},breakup:{on:!1,block:.05,amount:.6}},scan:{on:!1,hSize:1,vSize:1,hPos:0,vPos:0,rot:0,lines:262,purity:.5,osc:[{target:0,wave:0,freq:3,rate:.4,amp:0},{target:1,wave:0,freq:2,rate:.25,amp:0},{target:2,wave:0,freq:1,rate:.2,amp:0}]},magnet:{list:[],strength:1.2,radius:.55,type:0,audio:0,drift:!1,purity:.7},color:{on:!1,bands:7,hues:[0,.08,.16,.33,.5,.66,.83],sat:1,gain:1,contrast:1.2,smooth:!1,cycle:0,mix:!1,neg:!1},fb:{on:!1,mode:0,size:.84,rot:.06,hue:.02,decay:.95,mix:1},era:t(),synth:{mode:0,fx:3,fy:2,drift:.15,persist:.86,width:1.6,color:`#7dff7d`,gain:1},matte:{pattern:0,color:`#2040c0`},cg:{mode:`off`,style:`chyron`,title1:`GLOBAL GROOVE`,title2:``,lower1:`CHARLOTTE MOORMAN`,lower2:`TV CELLO`,crawl:`이것은 미래의 텔레비전 축제 프로그램 맛보기입니다. `,credits:`VIDEO
당신

PREPARED TV
1963 — 2026`,docTop:`CHARLOTTE MOORMAN
TV-BRA`,doc:`THIS IS THE FIRST TV
OF ANY KIND
AT GUADALCANAL`,tc:!1,tcBig:!1,sat:!1,serial:0},vhs:{bleed:.8,scan:.35,track:.04,chroma:1,roll:0,lines:480,interlace:.2,noise:.08,sat:1,box43:!1,head:.3,warm:.1},audio:{sfx:!0,haptics:!0},ui:{crt:1,tab:`board`,sheet:``}},a=new Set;function o(e){return a.add(e),()=>a.delete(e)}var s=!1;function c(){s||(s=!0,queueMicrotask(()=>{s=!1,a.forEach(e=>e())}))}var l=[`output`,`music`,`board`,`stage`,`tools`,`moor`,`scan`,`color`,`fb`,`synth`,`matte`,`cg`,`vhs`,`audio`],u=`ptv.state.v4`;function d(){try{let e={};for(let t of l)e[t]=i[t];e.crt=i.ui.crt,localStorage.setItem(u,JSON.stringify(e))}catch{}}function f(){try{let e=localStorage.getItem(u);if(!e)return;let t=JSON.parse(e);for(let e of l)t[e]&&p(i[e],t[e]);typeof t.crt==`number`&&(i.ui.crt=t.crt)}catch{}}function p(e,t){for(let n in t){if(!(n in e))continue;let r=e[n],i=t[n];r&&i&&typeof r==`object`&&typeof i==`object`&&!Array.isArray(r)?p(r,i):e[n]=i}}var m=new class{ctx=null;sfxBus;recDest;xy;analyser;noiseBuf;ready=[];whenReady(e){this.ctx?e(this.ctx):this.ready.push(e)}ensure(){if(this.ctx)return this.ctx.state===`suspended`&&this.ctx.resume(),this.ctx;let e;try{e=new AudioContext({latencyHint:`interactive`,sampleRate:48e3})}catch{e=new AudioContext({latencyHint:`interactive`})}this.ctx=e,this.recDest=e.createMediaStreamDestination(),this.sfxBus=e.createGain(),this.sfxBus.gain.value=.45,this.sfxBus.connect(e.destination),this.xy=e.createAnalyser(),this.xy.fftSize=2048,this.xy.smoothingTimeConstant=0,this.analyser=e.createAnalyser(),this.analyser.fftSize=512,this.analyser.smoothingTimeConstant=.6;let t=e.sampleRate*2;this.noiseBuf=e.createBuffer(1,t,e.sampleRate);let n=this.noiseBuf.getChannelData(0);for(let e=0;e<t;e++)n[e]=Math.random()*2-1;return this.ready.splice(0).forEach(t=>t(e)),e}fbuf=new Uint8Array(256);bass(){if(!this.ctx||!this.analyser)return 0;this.analyser.getByteFrequencyData(this.fbuf);let e=0;for(let t=1;t<8;t++)e+=this.fbuf[t];return Math.max(0,e/1785-.25)/.75}noise(e,t=0){let n=this.ctx,r=n.createBufferSource();return r.buffer=this.noiseBuf,r.start(t||n.currentTime,Math.random(),e+.05),r}play(e,t=.5){if(!i.audio.sfx||e===`none`)return;let n=this.ensure(),r=n.currentTime,a=this.sfxBus,o=(e,t,n,i)=>{e.gain.setValueAtTime(1e-4,r),e.gain.exponentialRampToValueAtTime(n,r+t),e.gain.exponentialRampToValueAtTime(1e-4,r+i)};switch(e){case`click`:case`clack`:{let t=this.noise(.03),i=n.createBiquadFilter();i.type=`bandpass`,i.frequency.value=e===`click`?3200:1800,i.Q.value=1.2;let s=n.createGain();o(s,.001,e===`click`?.7:.9,.035),t.connect(i).connect(s).connect(a);let c=n.createOscillator();c.frequency.setValueAtTime(e===`click`?180:120,r),c.frequency.exponentialRampToValueAtTime(60,r+.04);let l=n.createGain();o(l,.001,.35,.05),c.connect(l).connect(a),c.start(r),c.stop(r+.06);break}case`whoosh`:case`swish`:{let i=Math.max(.18,Math.min(t,1.2)),o=this.noise(i),s=n.createBiquadFilter();s.type=`bandpass`,s.Q.value=e===`whoosh`?2.5:4,s.frequency.setValueAtTime(e===`whoosh`?300:900,r),s.frequency.exponentialRampToValueAtTime(e===`whoosh`?2600:5e3,r+i*.6),s.frequency.exponentialRampToValueAtTime(500,r+i);let c=n.createGain();c.gain.setValueAtTime(1e-4,r),c.gain.exponentialRampToValueAtTime(e===`whoosh`?.9:.5,r+i*.45),c.gain.exponentialRampToValueAtTime(1e-4,r+i);let l=n.createStereoPanner();l.pan.setValueAtTime(-.7,r),l.pan.linearRampToValueAtTime(.7,r+i),o.connect(s).connect(c).connect(l).connect(a);break}case`ding`:for(let[e,t]of[[0,1318.5],[1,1975.5]]){let i=r+e*.09,o=n.createOscillator(),s=n.createOscillator(),c=n.createGain();s.frequency.value=t*3.5,c.gain.setValueAtTime(t*1.2,i),c.gain.exponentialRampToValueAtTime(1,i+.6),s.connect(c).connect(o.frequency),o.frequency.value=t;let l=n.createGain();l.gain.setValueAtTime(1e-4,i),l.gain.exponentialRampToValueAtTime(.35,i+.005),l.gain.exponentialRampToValueAtTime(1e-4,i+.9),o.connect(l).connect(a),o.start(i),s.start(i),o.stop(i+1),s.stop(i+1)}break;case`zap`:{let e=n.createOscillator();e.type=`square`,e.frequency.setValueAtTime(1800,r),e.frequency.exponentialRampToValueAtTime(90,r+.25);let t=n.createBiquadFilter();t.type=`lowpass`,t.frequency.value=2400;let i=n.createGain();o(i,.003,.25,.28),e.connect(t).connect(i).connect(a),e.start(r),e.stop(r+.3);break}case`thud`:{let e=n.createOscillator();e.frequency.setValueAtTime(140,r),e.frequency.exponentialRampToValueAtTime(38,r+.35);let t=n.createGain();o(t,.002,1,.45),e.connect(t).connect(a),e.start(r),e.stop(r+.5);let i=this.noise(.4),s=n.createBiquadFilter();s.type=`highpass`,s.frequency.value=2500;let c=n.createGain();o(c,.002,.4,.35),i.connect(s).connect(c).connect(a);break}case`static`:case`surf`:{let t=e===`surf`?.22:.4,i=this.noise(t),o=n.createBiquadFilter();o.type=`bandpass`,o.frequency.value=2200,o.Q.value=.6;let s=n.createGain();s.gain.setValueAtTime(.5,r),s.gain.setValueAtTime(.5,r+t*.7),s.gain.exponentialRampToValueAtTime(1e-4,r+t),i.connect(o).connect(s).connect(a),e===`surf`&&this.play(`clack`);break}case`beep`:{let e=n.createOscillator();e.type=`square`,e.frequency.value=1e3;let t=n.createGain();t.gain.setValueAtTime(.12,r),t.gain.setValueAtTime(1e-4,r+.09),e.connect(t).connect(a),e.start(r),e.stop(r+.1);break}case`power`:{let e=n.createOscillator();e.type=`sawtooth`,e.frequency.setValueAtTime(7867,r);let t=n.createGain();t.gain.setValueAtTime(1e-4,r),t.gain.exponentialRampToValueAtTime(.02,r+.05),t.gain.exponentialRampToValueAtTime(1e-4,r+1.2),e.connect(t).connect(a),e.start(r),e.stop(r+1.3);let i=this.noise(.12),s=n.createGain();o(s,.002,.6,.12);let c=n.createBiquadFilter();c.type=`lowpass`,c.frequency.value=600,i.connect(c).connect(s).connect(a);break}}}};function h(e,t=null,...n){let r=document.createElement(e);if(t)for(let[e,n]of Object.entries(t))n!=null&&n!==!1&&(e===`class`?r.className=String(n):e===`style`?r.setAttribute(`style`,String(n)):e.startsWith(`on`)&&typeof n==`function`?r.addEventListener(e.slice(2),n):r.setAttribute(e,n===!0?``:String(n)));for(let e of n)e!=null&&e!==!1&&r.append(e);return r}function g(){m.play(`click`),i.audio.haptics&&navigator.vibrate?.(6)}var _=[];function v(){for(let e=_.length-1;e>=0;e--){let{el:t,f:n}=_[e];if(t.isConnected){n();continue}let r=t.getRootNode();r instanceof Element&&r.hasAttribute(`data-keep`)||_.splice(e,1)}}function y(e,t){_.push({el:e,f:t}),t()}function b(e,t={}){let n=h(`button`,{class:`key ${t.cls||``}`,type:`button`},typeof e==`string`?h(`span`,{class:`kf`},e):e),r=t.dot?h(`i`,{class:`dot`}):null;r&&n.append(r),n.addEventListener(`pointerdown`,e=>{e.preventDefault(),n.classList.add(`down`),t.silent||g(),t.hold&&(n.setPointerCapture(e.pointerId),t.hold(!0))});let i=e=>{n.classList.contains(`down`)&&(n.classList.remove(`down`),t.hold&&t.hold(!1),e&&t.onPress?.())};return n.addEventListener(`pointerup`,()=>i(!0)),n.addEventListener(`pointercancel`,()=>i(!1)),n.addEventListener(`pointerleave`,()=>!t.hold&&n.classList.remove(`down`)),n.addEventListener(`contextmenu`,e=>e.preventDefault()),(t.lit||t.dot)&&y(n,()=>{t.lit&&n.classList.toggle(`lit`,!!t.lit()),r&&t.dot&&(r.hidden=!t.dot())}),n}function x(e,t,n,r,i,a,o,s){let l=h(`span`,{class:`sv`}),u=h(`div`,{class:`spin`},l,h(`span`,{class:`arr`},h(`i`),h(`i`))),d=()=>{let e=t[n];l.textContent=o?o(e):Number.isInteger(a)?String(Math.round(e)):e.toFixed(a<.1?2:1)},f=e=>{e=Math.max(r,Math.min(i,Math.round(e/a)*a)),e=+e.toFixed(4),e!==t[n]&&(t[n]=e,d(),s?.(),c())},p=0,m=0,_=!1;return u.addEventListener(`pointerdown`,e=>{u.setPointerCapture(e.pointerId),p=e.clientY,m=t[n],_=!1,u.classList.add(`down`)}),u.addEventListener(`pointermove`,e=>{if(!u.hasPointerCapture(e.pointerId))return;let t=p-e.clientY;if(Math.abs(t)>4&&(_=!0),!_)return;let n=Math.trunc(t/6),o=(i-r)/a>60?Math.max(1,Math.abs(n)/6):1;f(m+n*a*o)}),u.addEventListener(`pointerup`,e=>{if(u.classList.remove(`down`),!_){let r=u.getBoundingClientRect();f(t[n]+(e.clientY<r.top+r.height/2?a:-a)),g()}}),y(u,d),h(`div`,{class:`ctl`},h(`label`,null,e),u)}function S(e,t,n,r,i,a=``){let o=h(`div`,{class:`keys ${a}`});for(let[e,a]of r)o.append(b(a,{cls:`small`,lit:()=>t[n]===e,onPress:()=>{t[n]=e,i?.(),c()}}));return e?h(`div`,{class:`ctl`},h(`label`,null,e),o):o}function C(e,t,n,r){return b(e,{cls:`small`,lit:()=>!!t[n],onPress:()=>{t[n]=!t[n],r?.(),c()}})}var w=[`#f0f0f0`,`#ff3030`,`#ffe030`,`#30ff40`,`#30e0ff`,`#3050ff`,`#ff40ff`,`#c070ff`,`#101010`];function T(e,t,n,r=w){let i=h(`div`,{class:`chips`});for(let e of r){let r=h(`button`,{class:`chip`,type:`button`,style:`background:${e}`});r.addEventListener(`click`,()=>{t[n]=e,g(),c()}),y(r,()=>r.classList.toggle(`lit`,t[n]===e)),i.append(r)}return h(`div`,{class:`ctl`},h(`label`,null,e),i)}var E=null,D=0;function O(e,t=2600){E?.remove(),E=h(`div`,{class:`toast`},e),document.querySelector(`.screen`)?.append(E),clearTimeout(D);let n=E;D=window.setTimeout(()=>n.remove(),t)}function k(e,t=!1){return new Promise(n=>{let r=h(`input`,{type:`file`,accept:e,style:`display:none`});t&&(r.multiple=!0),r.addEventListener(`change`,()=>{n(Array.from(r.files||[])),r.remove()}),document.body.append(r),r.click()})}function A(){let e=i.output.aspect;document.documentElement.style.setProperty(`--out-aspect`,e.replace(`:`,`/`)),document.documentElement.toggleAttribute(`data-wide`,e===`16:9`||e===`4:3`)}var j=`#version 300 es
out vec2 vUv;
void main(){
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,M=class{v;constructor(e){this.v=e}},N=e=>new M(e),P=class{gl;prog;name;locs=new Map;constructor(e,t,n){this.gl=e,this.prog=t,this.name=n}loc(e){let t=this.locs.get(e);return t===void 0&&(t=this.gl.getUniformLocation(this.prog,e),this.locs.set(e,t)),t}},ee=class{gl;vao;constructor(e){this.gl=e,this.vao=e.createVertexArray()}program(e,t,n=j){let r=this.gl,i=(e,n)=>{let i=r.createShader(e);if(r.shaderSource(i,n),r.compileShader(i),!r.getShaderParameter(i,r.COMPILE_STATUS)){let e=r.getShaderInfoLog(i),a=n.split(`
`).map((e,t)=>`${t+1}: ${e}`),o=/0:(\d+)/.exec(e||``),s=o?a.slice(Math.max(0,o[1]-4),+o[1]+2).join(`
`):``;throw Error(`[${t}] shader compile failed: ${e}\n${s}`)}return i},a=r.createProgram();if(r.attachShader(a,i(r.VERTEX_SHADER,n)),r.attachShader(a,i(r.FRAGMENT_SHADER,e)),r.linkProgram(a),!r.getProgramParameter(a,r.LINK_STATUS))throw Error(`[${t}] link failed: ${r.getProgramInfoLog(a)}`);return new P(r,a,t)}texture(e=WebGL2RenderingContext.LINEAR,t=WebGL2RenderingContext.CLAMP_TO_EDGE){let n=this.gl,r=n.createTexture();return n.bindTexture(n.TEXTURE_2D,r),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,t),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,t),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),r}target(e,t,n=WebGL2RenderingContext.LINEAR){let r=this.gl,i=this.texture(n);r.texImage2D(r.TEXTURE_2D,0,r.RGBA8,e,t,0,r.RGBA,r.UNSIGNED_BYTE,null);let a=r.createFramebuffer();return r.bindFramebuffer(r.FRAMEBUFFER,a),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,i,0),r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT),r.bindFramebuffer(r.FRAMEBUFFER,null),{fb:a,tex:i,w:e,h:t}}freeTarget(e){e&&(this.gl.deleteFramebuffer(e.fb),this.gl.deleteTexture(e.tex))}draw(e,t,n,r,i){let a=this.gl;a.bindFramebuffer(a.FRAMEBUFFER,t?t.fb:null);let o=i?i[2]:t?t.w:r[0],s=i?i[3]:t?t.h:r[1];i?a.viewport(i[0],i[1],i[2],i[3]):a.viewport(0,0,o,s),this.bindUniforms(e,n,o,s),a.bindVertexArray(this.vao),a.drawArrays(a.TRIANGLES,0,3)}bindUniforms(e,t,n,r){let i=this.gl;i.useProgram(e.prog);let a=0,o=e.loc(`uRes`);o&&i.uniform2f(o,n,r);for(let n in t){let r=t[n],o=e.loc(n);o!==null&&(typeof r==`number`?i.uniform1f(o,r):r instanceof M?i.uniform1i(o,r.v):Array.isArray(r)?r.length===2?i.uniform2f(o,r[0],r[1]):r.length===3?i.uniform3f(o,r[0],r[1],r[2]):r.length===4&&i.uniform4f(o,r[0],r[1],r[2],r[3]):r&&(i.activeTexture(i.TEXTURE0+a),i.bindTexture(i.TEXTURE_2D,r),i.uniform1i(o,a),a++))}}setArray(e,t,n,r){let i=this.gl;i.useProgram(e.prog);let a=e.loc(t+`[0]`)??e.loc(t);a&&(n===1?i.uniform1fv(a,r):n===3?i.uniform3fv(a,r):i.uniform4fv(a,r))}};function F(e){let t=e.replace(`#`,``),n=parseInt(t.length===3?t.split(``).map(e=>e+e).join(``):t,16);return[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255]}var I=`#version 300 es
precision highp float;
precision highp int;
in vec2 vUv;
out vec4 outColor;
uniform vec2 uRes;
uniform float uTime;
#define PI 3.14159265359
#define TAU 6.28318530718

float hash11(float p){ p = fract(p * .1031); p *= p + 33.33; p *= p + p; return fract(p); }
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec2 hash22(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973)); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.xx + p3.yz) * p3.zy); }
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3. - 2. * f);
  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p){ float v = 0., a = .5; for (int i = 0; i < 4; i++){ v += a * vnoise(p); p *= 2.03; a *= .5; } return v; }
float luma(vec3 c){ return dot(c, vec3(.299, .587, .114)); }
vec3 hsv2rgb(vec3 c){ vec3 p = abs(fract(c.xxx + vec3(0., 2. / 3., 1. / 3.)) * 6. - 3.); return c.z * mix(vec3(1.), clamp(p - 1., 0., 1.), c.y); }
vec3 rgb2hsv(vec3 c){
  vec4 K = vec4(0., -1. / 3., 2. / 3., -1.);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  return vec3(abs(q.z + (q.w - q.y) / (6. * d + 1e-10)), d / (q.x + 1e-10), q.x);
}
vec3 hueShift(vec3 c, float h){ vec3 s = rgb2hsv(c); s.x = fract(s.x + h); return hsv2rgb(s); }
mat2 rot2(float a){ float c = cos(a), s = sin(a); return mat2(c, s, -s, c); }
mat3 rotX(float a){ float c = cos(a), s = sin(a); return mat3(1., 0., 0., 0., c, s, 0., -s, c); }
mat3 rotY(float a){ float c = cos(a), s = sin(a); return mat3(c, 0., -s, 0., 1., 0., s, 0., c); }
mat3 rotZ(float a){ float c = cos(a), s = sin(a); return mat3(c, s, 0., -s, c, 0., 0., 0., 1.); }
float easeInOut(float t){ return t < .5 ? 4. * t * t * t : 1. - pow(-2. * t + 2., 3.) / 2.; }
float easeOut(float t){ return 1. - pow(1. - t, 3.); }
float easeIn(float t){ return t * t * t; }
bool inUnit(vec2 u){ return u.x >= 0. && u.x <= 1. && u.y >= 0. && u.y <= 1.; }
float aspect(){ return uRes.x / uRes.y; }

// ---- 3D card (textured rectangle) ray casting -------------------------------------------
// Camera sits at z = -FOC looking +z. A card at the origin with identity rotation and
// half-size (aspect, 1) exactly fills the screen.
#define FOC 2.0
struct Hit { vec2 uv; float t; float front; float cov; float shade; };
Hit card(vec2 p, mat3 R, vec3 c, vec2 hs, float soft){
  Hit h; h.uv = vec2(-1.); h.t = 1e9; h.front = 0.; h.cov = 0.; h.shade = 1.;
  vec3 ro = vec3(0., 0., -FOC);
  vec3 rd = normalize(vec3(p, FOC));
  vec3 n = R * vec3(0., 0., 1.);
  float dn = dot(rd, n);
  if (abs(dn) < 1e-5) return h;
  float t = dot(c - ro, n) / dn;
  if (t <= 0.) return h;
  vec3 x = ro + rd * t;
  vec3 l = transpose(R) * (x - c);
  vec2 e2 = hs - abs(l.xy);
  float e = min(e2.x, e2.y);
  float px = (2.0 / uRes.y) * t / FOC / max(abs(dn), .15) + soft;
  h.cov = smoothstep(-px * .5, px * .5, e);
  h.uv = l.xy / (2. * hs) + .5;
  h.t = t;
  h.front = dn > 0. ? 1. : 0.;
  vec3 L = normalize(vec3(-.4, .55, -1.));
  h.shade = .55 + .45 * abs(dot(n, L));
  return h;
}
vec2 toP(vec2 uv){ return (uv - .5) * vec2(aspect(), 1.) * 2.; }
vec2 toUv(vec2 p){ return p / (vec2(aspect(), 1.) * 2.) + .5; }
`,te=I+`
uniform sampler2D uTex;
uniform sampler2D uLabel;
uniform int uKind;      // 0 no signal, 1 texture (cover fit), 2 matte, 3 atlas slot
uniform vec4 uFit;      // scale.xy offset.xy
uniform vec4 uSlot;     // atlas slot rect (x, y, w, h) in uv
uniform float uMirror;
uniform int uPattern;
uniform vec3 uColor;
uniform float uFlipY;

// a television with no signal on it: grey raster, hum bar, a little snow
vec3 raster(vec2 uv){
  float lines = 262.;
  float l = fract(uv.y * lines);
  float beam = smoothstep(.0, .3, l) * smoothstep(1., .55, l);
  float hum = .82 + .18 * sin((uv.y + uTime * .07) * TAU);
  float n = hash12(vec2(floor(uv.y * lines), floor(uTime * 30.))) * .12;
  return vec3(.78 + n) * beam * hum;
}

vec3 bars(vec2 uv){
  vec3 top[7] = vec3[7](vec3(.75), vec3(.75,.75,0.), vec3(0.,.75,.75), vec3(0.,.75,0.), vec3(.75,0.,.75), vec3(.75,0.,0.), vec3(0.,0.,.75));
  vec3 mid[7] = vec3[7](vec3(0.,0.,.75), vec3(.07), vec3(.75,0.,.75), vec3(.07), vec3(0.,.75,.75), vec3(.07), vec3(.75));
  float y = 1. - uv.y;
  int i = int(clamp(floor(uv.x * 7.), 0., 6.));
  if (y < .67) return top[i];
  if (y < .75) return mid[i];
  float x = uv.x;
  if (x < .18) return vec3(0., .13, .3);
  if (x < .36) return vec3(1.);
  if (x < .54) return vec3(.2, 0., .42);
  return vec3(.07);
}

vec3 snow(vec2 uv){
  float n = hash12(floor(uv * uRes * .5) + floor(uTime * 30.) * 13.1);
  float streak = hash12(vec2(floor(uv.y * uRes.y * .5), floor(uTime * 30.)));
  return vec3(n * .8 + streak * .12);
}

// synth-style stripes: an oscillator drawn as bars that crawl (no image, just signal)
vec3 stripes(vec2 uv){
  float s = sin((uv.x * 9. + sin(uv.y * 3. + uTime * .5) * 1.5) * TAU + uTime * 1.3);
  float b = step(0., s);
  return mix(vec3(0.), uColor, b) + vec3(.06) * step(.5, fract(uv.y * 131.));
}


// spider web of rough, kinked white threads (as in Paik's 90s pieces), green bleeding in at the corners
vec3 web(vec2 uv){
  vec2 p = toP(uv);
  p = rot2(uTime * .03) * p;
  // hand-drawn wobble: warp the plane with low noise, then kink it with stepped noise
  p += (vec2(fbm(p * 1.3 + 3.), fbm(p * 1.3 + 9.)) - .5) * .09;
  p += (vec2(vnoise(floor(p * 9.)), vnoise(floor(p * 9.) + 5.)) - .5) * .012;
  float r = length(p);
  float a = atan(p.y, p.x);
  float N = 15.;
  float sa = TAU / N;
  float ai = floor(a / sa);
  float af = a / sa - ai;
  float radial = abs(af - .5 + .06 * sin(r * 7. + ai * 3.1)) * sa * r;
  float sag = .07 * sin(af * PI);
  float rr = r + sag + .03 * sin(ai * 1.7);
  float ring = abs(fract(rr * 5.2 + hash11(ai) * .2) - .5) / 5.2;
  float lw = 2.2 / uRes.y;
  float line = max(1. - smoothstep(lw, lw * 2., radial), 1. - smoothstep(lw, lw * 2., ring));
  line *= smoothstep(.02, .07, r);
  float dew = step(.992, hash12(floor(uv * uRes / 3.) + floor(uTime * 6.))) * line;
  vec3 bg = mix(vec3(.01, .01, .02), vec3(.03, .04, .1), fbm(p * 2.5));
  float corner = smoothstep(1.05, 1.5, length(toP(uv) * vec2(.95, .8)));
  bg = mix(bg, vec3(.2, .8, .15) * (.55 + .45 * fbm(p * 6.)), corner);
  return bg + vec3(.86, .86, .8) * line + dew * 1.2;
}

// dark blue field with twinkling coloured pixels (a dissolving video key)
vec3 sparkle(vec2 uv){
  vec2 cell = floor(uv * uRes / 4.);
  float t = floor(uTime * 12.);
  float h = hash12(cell + t * .37);
  vec3 base = mix(vec3(.02, .03, .12), vec3(.05, .08, .3), fbm(uv * 5. + uTime * .1));
  vec3 spark = hsv2rgb(vec3(hash12(cell * 1.3 + t), .7, 1.));
  return base + spark * step(.975, h) * (.6 + .4 * hash12(cell + 9.)) + vec3(.6, .7, 1.) * step(.995, h);
}

// orange/blue zigzag waves (behind the keyed TV cello in the Moorman tape)
vec3 zigzag(vec2 uv){
  vec2 p = uv * vec2(aspect(), 1.);
  float z = abs(fract(p.x * 5. + sin(p.y * 2. + uTime * .4) * .2) - .5) * 2.;
  float w = p.y * 10. + z * 1.4 - uTime * .7 + sin(p.x * 2.3 + uTime) * .25;
  float b = step(.5, fract(w));
  vec3 c = mix(vec3(.08, .2, .85), vec3(1., .52, .08), b);
  return c * (.85 + .15 * step(.5, fract(uv.y * 131.)));
}

// rainbow rays with a checker ring, turning slowly
vec3 sunburst(vec2 uv){
  vec2 p = toP(uv);
  float a = atan(p.y, p.x) / TAU + .5;
  float r = length(p);
  float seg = floor(a * 24. + uTime * .25);
  vec3 c = hsv2rgb(vec3(fract(seg / 24. * 3.), .95, 1.));
  float ring = floor(r * 5. - uTime * .3);
  float inRing = step(.5, fract(r * 5. - uTime * .3)) * step(.35, r);
  if (mod(ring, 3.) < 1. && inRing > .5) c = mod(floor(a * 48.) + ring, 2.) < 1. ? vec3(1.) : vec3(.05);
  return c;
}

// colour bars pulled into thin stripes and squeezed back, a burst of snow at each turn
vec3 barStretch(vec2 uv){
  float ph = uTime * .9;
  float k = 1. + 18. * (.5 + .5 * sin(ph));
  float x = fract((uv.x - .5) * k + .5 + uTime * .15);
  vec3 c = bars(vec2(x, uv.y));
  if (uv.y < .06) c = bars(vec2(x, .06)) * (.8 + .2 * step(.5, fract(uv.x * 80.)));
  if (fract(ph / TAU + .02) < .03) c = snow(uv);
  return c;
}

// colour bars bent into a ribbon over a tiled backdrop
vec3 barBend(vec2 uv){
  vec2 p = toP(uv);
  float cy = .25 * sin(p.x * 2.2 + uTime * .6);
  float dy = p.y - cy;
  float wdt = .28;
  vec2 tile = floor(uv * vec2(aspect(), 1.) * 8.);
  vec3 bg = mod(tile.x + tile.y, 2.) < 1. ? vec3(.2, .55, .55) : vec3(.9, .55, .65);
  if (abs(dy) > wdt) return bg * .8;
  float slope = .25 * 2.2 * cos(p.x * 2.2 + uTime * .6);
  float s = (p.x / aspect() * .5 + .5);
  vec3 c = bars(vec2(fract(s * 1.4 + uTime * .05), .3));
  float shade = .55 + .45 * cos(dy / wdt * 1.57);
  shade *= slope > 0. ? 1. : .72;
  return c * shade;
}

vec3 matte(vec2 uv){
  if (uPattern == 0) return raster(uv);
  if (uPattern == 1) return bars(uv);
  if (uPattern == 2) return snow(uv);
  if (uPattern == 3) return uColor;
  if (uPattern == 4) return uColor * uv.x;
  if (uPattern == 5) return stripes(uv);
  if (uPattern == 7) return web(uv);
  if (uPattern == 8) return sparkle(uv);
  if (uPattern == 9) return zigzag(uv);
  if (uPattern == 10) return sunburst(uv);
  if (uPattern == 11) return barStretch(uv);
  if (uPattern == 12) return barBend(uv);
  return vec3(0.);
}

vec3 noSignal(vec2 uv){
  vec3 s = snow(uv) * .6;
  vec2 lc = (uv - .5) * vec2(aspect(), 1.) / vec2(.9, .9 * .25) + .5;
  vec4 lab = inUnit(lc) ? texture(uLabel, lc) : vec4(0.);
  return mix(s, lab.rgb, lab.a);
}

void main(){
  vec2 uv = vUv;
  if (uFlipY > .5) uv.y = 1. - uv.y;
  vec3 col;
  if (uKind == 1){
    vec2 t = (uv - .5) * uFit.xy + .5 + uFit.zw;
    if (uMirror > .5) t.x = 1. - t.x;
    col = texture(uTex, t).rgb;
  } else if (uKind == 2){
    col = matte(uv);
  } else if (uKind == 3){
    col = texture(uTex, uSlot.xy + uv * uSlot.zw).rgb;
  } else {
    col = noSignal(uv);
  }
  outColor = vec4(col, 1.);
}
`,L=I+`
uniform sampler2D uSrc;
void main(){ outColor = vec4(texture(uSrc, vUv).rgb, 1.); }
`,ne=I+`
uniform sampler2D uSrc;
uniform float uDecay;
void main(){
  vec3 c = texture(uSrc, vUv).rgb * uDecay;
  c = max(c - 1. / 255., 0.);
  outColor = vec4(c, 1.);
}
`,re=`#version 300 es
in vec2 aPos;
in float aAcross;
in float aI;
out float vAcross;
out float vI;
void main(){ vAcross = aAcross; vI = aI; gl_Position = vec4(aPos, 0., 1.); }
`,ie=`#version 300 es
precision highp float;
in float vAcross;
in float vI;
uniform vec3 uColor;
out vec4 outColor;
void main(){
  float a = 1. - abs(vAcross);
  float core = a * a;
  outColor = vec4(uColor * core * vI + vec3(core * core * .35 * vI), 1.);
}
`,R=`
uniform sampler2D uFg;
uniform sampler2D uAi;
uniform vec4 uAiFit;
uniform float uAiMirror;
uniform int uMode;          // 0 AI person, 1 chroma, 2 luma
uniform vec3 uKeyColor;
uniform float uSim;
uniform float uSmooth;
uniform vec2 uLumaRange;
uniform float uInvert;
uniform float uFeather;

vec2 cbcr(vec3 c){ return vec2(-.1687 * c.r - .3313 * c.g + .5 * c.b, .5 * c.r - .4187 * c.g - .0813 * c.b); }

float keyAlpha(vec2 uv){
  float a;
  if (uMode == 0){
    vec2 t = (uv - .5) * uAiFit.xy + .5 + uAiFit.zw;
    if (uAiMirror > .5) t.x = 1. - t.x;
    float m = texture(uAi, vec2(t.x, 1. - t.y)).r;
    a = smoothstep(.5 - uFeather, .5 + uFeather, m);
  } else if (uMode == 1){
    vec3 c = texture(uFg, uv).rgb;
    float d = distance(cbcr(c), cbcr(uKeyColor));
    a = smoothstep(uSim, uSim + uSmooth, d);
  } else {
    float l = luma(texture(uFg, uv).rgb);
    a = smoothstep(uLumaRange.x, uLumaRange.y, l);
  }
  return uInvert > .5 ? 1. - a : a;
}
`;I+R+``;var z=`
vec4 enc(vec2 c){ return vec4(floor(c.x / 256.), mod(c.x, 256.), floor(c.y / 256.), mod(c.y, 256.)) / 255.; }
vec2 dec(vec4 v){ v = floor(v * 255. + .5); return vec2(v.r * 256. + v.g, v.b * 256. + v.a); }
`,ae=I+z+`
uniform sampler2D uMask;
void main(){
  float a = texelFetch(uMask, ivec2(gl_FragCoord.xy), 0).r;
  outColor = a > .5 ? enc(floor(gl_FragCoord.xy)) : vec4(1.);
}
`,oe=I+z+`
uniform sampler2D uSrc;
uniform float uStep;
void main(){
  vec2 me = floor(gl_FragCoord.xy);
  vec2 best = vec2(65535.);
  float bd = 1e9;
  ivec2 sz = textureSize(uSrc, 0);
  for (int y = -1; y <= 1; y++){
    for (int x = -1; x <= 1; x++){
      ivec2 c = ivec2(me + vec2(float(x), float(y)) * uStep);
      if (c.x < 0 || c.y < 0 || c.x >= sz.x || c.y >= sz.y) continue;
      vec2 s = dec(texelFetch(uSrc, c, 0));
      if (s.x > 65000.) continue;
      float d = distance(s, me);
      if (d < bd){ bd = d; best = s; }
    }
  }
  outColor = best.x > 65000. ? vec4(1.) : enc(best);
}
`,se=I+z+`
uniform sampler2D uSrc;
uniform float uMaxD;
void main(){
  vec2 me = floor(gl_FragCoord.xy);
  vec2 s = dec(texelFetch(uSrc, ivec2(me), 0));
  float d = s.x > 65000. ? 1. : clamp(distance(s, me) / uMaxD, 0., 1.);
  outColor = vec4(d, d, d, 1.);
}
`;I+R+``;var ce=I+`
uniform sampler2D uSrc;
uniform sampler2D uPrev;
uniform sampler2D uStandby;
uniform float uBleed;
uniform float uScan;
uniform float uTrack;
uniform float uChroma;
uniform float uRoll;         // accumulated vertical roll offset 0..1
uniform float uLines;
uniform float uClean;
uniform float uInterlace;
uniform float uNoise;
uniform float uSat;
uniform float uBox43;
uniform float uHead;
uniform float uField;
uniform float uWarm;
// glitch
uniform float uInvert;
uniform float uTear;
uniform float uSnow;
uniform float uBars;
uniform float uStandbyOn;
uniform float uJitter;
uniform float uFlipY;

vec3 tex(vec2 uv){ return texture(uSrc, uv).rgb; }

vec3 colorBars(vec2 uv){
  vec3 top[7] = vec3[7](vec3(.75), vec3(.75,.75,0.), vec3(0.,.75,.75), vec3(0.,.75,0.), vec3(.75,0.,.75), vec3(.75,0.,0.), vec3(0.,0.,.75));
  int i = int(clamp(floor(uv.x * 7.), 0., 6.));
  if (uv.y > .3) return top[i];
  if (uv.y > .22) return top[6 - i] * .3;
  return uv.x < .25 ? vec3(0., .13, .3) : uv.x < .5 ? vec3(1.) : uv.x < .75 ? vec3(.2, 0., .42) : vec3(.05);
}

void main(){
  vec2 uv = vUv;
  if (uFlipY > .5) uv.y = 1. - uv.y;
  float asp = aspect();
  vec2 outUv = uv;

  // 4:3 frame inside a non-4:3 output
  float box = 1.;
  if (uBox43 > .5){
    if (asp < 4. / 3.){
      float h = asp * 3. / 4.;
      box = step(abs(uv.y - .5), h * .5);
    } else {
      float w = (4. / 3.) / asp;
      box = step(abs(uv.x - .5), w * .5);
    }
  }

  // vertical hold roll
  float yy = uv.y + uRoll;
  float vsync = smoothstep(.0, .012, fract(yy)) * smoothstep(.045, .03, fract(yy));
  uv.y = fract(yy);

  float lines = uLines > 0. ? uLines : uRes.y;
  float line = floor(uv.y * lines);
  float t = uTime;

  // tracking error band + per-line jitter
  float bandY = fract(t * .11);
  float bd = min(abs(uv.y - bandY), 1. - abs(uv.y - bandY));
  float band = smoothstep(.07, 0., bd);
  float shift = uTrack * band * (vnoise(vec2(line * .35, t * 25.)) - .5) * .09;
  shift += uTrack * (hash12(vec2(line, floor(t * 60.))) - .5) * .003;
  shift += uJitter * (hash12(vec2(floor(line / 6.), floor(t * 30.))) - .5) * .06;
  // head-switching noise at the bottom of the frame
  float hs = smoothstep(.035, 0., uv.y);
  shift += uHead * hs * (.02 + .03 * hash12(vec2(line, floor(t * 30.))));
  // tear: upper part of the picture slides sideways
  shift += uTear * smoothstep(.55, .62, uv.y) * (.15 + .1 * sin(t * 40. + uv.y * 30.));

  vec2 s = vec2(uv.x + shift, (uLines > 0. ? (line + .5) / lines : uv.y));
  float px = 1. / uRes.x;

  // luma / chroma bandwidth (YIQ)
  vec3 c0 = tex(s);
  vec3 col = c0;
  if (uBleed > 0.){
    mat3 toYIQ = mat3(.299, .596, .211, .587, -.274, -.523, .114, -.322, .312);
    mat3 toRGB = mat3(1., 1., 1., .956, -.272, -1.106, .621, -.647, 1.703);
    float y = (toYIQ * tex(s - vec2(px * uBleed, 0.))).x * .25 + (toYIQ * c0).x * .5 + (toYIQ * tex(s + vec2(px * uBleed, 0.))).x * .25;
    // sharpening halo typical of VHS
    float yb = (toYIQ * tex(s - vec2(px * uBleed * 3., 0.))).x;
    y += (y - yb) * .35 * min(uBleed, 2.);
    vec2 iq = vec2(0.);
    float wsum = 0.;
    for (int i = -4; i <= 4; i++){
      float w = 1. - abs(float(i)) / 5.;
      iq += (toYIQ * tex(s + vec2(px * (float(i) * uBleed * 2.2 + uBleed * 3.), 0.))).yz * w;
      wsum += w;
    }
    iq /= wsum;
    col = toRGB * vec3(y, iq);
  }
  if (uChroma > 0.){
    float o = px * uChroma * (1. + .5 * band);
    col.r += tex(s + vec2(o, 0.)).r - c0.r;
    col.b += tex(s - vec2(o, 0.)).b - c0.b;
  }

  // interlace: alternate fields come from the previous frame
  if (uInterlace > 0. && mod(line, 2.) == uField){
    col = mix(col, texture(uPrev, s).rgb, uInterlace);
  }

  // colour
  col = mix(vec3(luma(col)), col, uSat);
  col *= mix(vec3(1.), vec3(1.06, 1., .9), uWarm);

  // noise, dropouts
  float n = hash12(vec2(uv.x * 1000., line) + fract(t * 7.) * 100.);
  col += (n - .5) * uNoise * .35;
  float drop = step(.9985 - uNoise * .004, hash12(vec2(line, floor(t * 24.)))) * step(hash12(vec2(floor(uv.x * 30.), line + t)), .6);
  col = mix(col, vec3(.9), drop * uNoise);
  col = mix(col, vec3(.85, .85, .9) * hash12(vec2(uv.x * 800., line) + t), band * uTrack * .25 * step(.7, hash12(vec2(floor(uv.x * 50.), line + floor(t * 30.)))));
  col *= 1. - vsync * (1. - uClean);

  // broadcast accident
  if (uBars > 0.) col = mix(col, colorBars(uv), uBars);
  if (uStandbyOn > 0.){
    vec2 su = vec2(uv.x, uv.y);
    vec4 sb = texture(uStandby, su);
    col = mix(col, sb.rgb, uStandbyOn);
  }
  if (uSnow > 0.){
    float sn = hash12(floor(outUv * uRes * .5) + floor(t * 60.) * 7.3);
    col = mix(col, vec3(sn), uSnow);
  }
  if (uInvert > .5) col = 1. - col;

  // scanlines
  float sl = .5 + .5 * cos(outUv.y * lines * TAU);
  col *= 1. - uScan * .55 * (1. - sl);

  col *= box;
  outColor = vec4(clamp(col, 0., 1.), 1.);
}
`,le=I+`
uniform sampler2D uCur;
uniform sampler2D uAtlas;     // clean signal, 15 fps, 8x8 slots
uniform float uHead;
uniform float uFilled;
uniform float uOn[18];
uniform float uAmt[18];

vec3 pastRaw(vec2 uv, float back){
  back = clamp(floor(back), 0., max(uFilled - 1., 0.));
  float slot = mod(uHead - back + 256., 64.);
  vec2 cell = vec2(mod(slot, 8.), floor(slot / 8.));
  return texture(uAtlas, (cell + clamp(uv, .003, .997)) / 8.).rgb;
}

bool on(int i){ return uOn[i] > .5; }

// geometry + time: where (and when) a point of the picture comes from
vec3 S(vec2 uv){
  float asp = aspect();
  float back = 0.;
  if (on(3)){ // MIRROR
    float m = uAmt[3];
    if (m < 1.5 || m > 2.5) uv.x = .5 - abs(uv.x - .5);
    if (m > 1.5) uv.y = .5 - abs(uv.y - .5);
  }
  if (on(4)){ // KALEIDO
    vec2 p = (uv - .5) * vec2(asp, 1.);
    float r = length(p);
    float a = atan(p.y, p.x) + uTime * .2;
    float seg = PI / max(uAmt[4], 1.);
    a = mod(a, 2. * seg); a = abs(a - seg);
    vec2 k = vec2(cos(a), sin(a)) * r / vec2(asp, 1.) + .5;
    uv = 1. - abs(1. - mod(k, 2.));
  }
  if (on(0)){ // MULTI: k x k stills, each a little older
    float k = floor(uAmt[0]);
    vec2 c = floor(uv * k);
    uv = fract(uv * k);
    back = max(back, ((k - 1. - c.y) * k + c.x) * 3.);
  }
  if (on(2)){ // SLIT-SCAN: every line from a different moment
    back = max(back, (1. - uv.y) * uAmt[2] * 60.);
  }
  if (on(1)){ // STROBE: hold a frame for n/15 s
    back = max(back, mod(floor(uTime * 15.), max(uAmt[1], 1.)));
  }
  if (on(5)){ // MOSAIC
    float s = uAmt[5];
    vec2 cell = vec2(s / asp, s);
    uv = (floor(uv / cell) + .5) * cell;
  }
  return back > 0. ? pastRaw(uv, back) : texture(uCur, uv).rgb;
}

vec3 sampleZ(vec2 uv){
  if (!on(6)) return S(uv);
  // ZOOM: radial streak toward the centre
  vec3 acc = vec3(0.);
  for (int i = 0; i < 8; i++){
    float f = 1. - float(i) / 8. * uAmt[6];
    acc += S((uv - .5) * f + .5);
  }
  return acc / 8.;
}

vec3 sampleC(vec2 uv){
  if (!on(7)) return sampleZ(uv);
  float o = uAmt[7] / uRes.x;
  return vec3(sampleZ(uv + vec2(o, 0.)).r, sampleZ(uv).g, sampleZ(uv - vec2(o, o * .5)).b);
}

float lum(vec2 uv){ return luma(sampleC(uv)); }

vec3 thermal(float l){
  vec3 a = vec3(0., 0., .1), b = vec3(.3, 0., .6), c = vec3(.9, 0., .3), d = vec3(1., .6, 0.), e = vec3(1., 1., .85);
  if (l < .25) return mix(a, b, l / .25);
  if (l < .5) return mix(b, c, (l - .25) / .25);
  if (l < .75) return mix(c, d, (l - .5) / .25);
  return mix(d, e, (l - .75) / .25);
}

void main(){
  vec2 uv = vUv;
  vec2 px = 1. / uRes;

  // TELETEXT: 2x3 block mosaic, 8 colours
  vec2 tcell = vec2(0.);
  if (on(14)){
    float cols = uAmt[14] * 2.;
    vec2 g = vec2(cols, cols * 1.5 * uRes.y / uRes.x);
    tcell = (floor(uv * g) + .5) / g;
    uv = tcell;
  }
  // LED / HALFTONE sample at cell centres
  vec2 ledUv = uv;
  if (on(15)){
    vec2 g = vec2(uAmt[15], uAmt[15] * uRes.y / uRes.x);
    ledUv = (floor(uv * g) + .5) / g;
  }
  vec3 c = sampleC(on(15) ? ledUv : uv);

  if (on(13) || on(12)){
    float gx = lum(uv + vec2(px.x, 0.)) - lum(uv - vec2(px.x, 0.));
    float gy = lum(uv + vec2(0., px.y)) - lum(uv - vec2(0., px.y));
    float e = length(vec2(gx, gy));
    if (on(12)){ // PAINT: flat colour areas with ink lines
      float lv = max(uAmt[12], 2.);
      c = floor(c * lv + .5) / lv;
      c *= 1. - smoothstep(.08, .2, e);
    }
    if (on(13)){ // NEON EDGE
      vec3 hue = hsv2rgb(vec3(fract(atan(gy, gx) / TAU + uTime * .05), .8, 1.));
      c = hue * smoothstep(.012, .07, e * (1. + uAmt[13])) * min(uAmt[13], 2.) + c * .08;
    }
  }
  if (on(8)){ // POSTER
    float lv = max(uAmt[8], 2.);
    c = floor(c * lv) / (lv - 1.);
  }
  if (on(9)){ // SOLARIZE (Sabattier): highlights fold back
    vec3 s = 1. - abs(c * 2. - 1.);
    s = smoothstep(.15, .95, s);
    c = mix(c, s, uAmt[9]);
  }
  if (on(11)) c = thermal(luma(c));
  if (on(10)) c = 1. - c;
  if (on(14)){
    c = step(.3, c * 1.15 + (luma(c) - .5) * .3);
    vec2 g = vec2(uAmt[14] * 2., uAmt[14] * 3. * uRes.y / uRes.x);
    vec2 f = fract(vUv * g);
    c *= step(.06, f.x) * step(.06, f.y);
  }
  if (on(15)){
    vec2 g = vec2(uAmt[15], uAmt[15] * uRes.y / uRes.x);
    vec2 f = fract(vUv * g) - .5;
    float dot_ = smoothstep(.42, .3, length(f));
    c = floor(c * 4. + .5) / 4. * dot_ * 1.3 + vec3(.02, .01, .01);
  }
  if (on(16)){ // HALFTONE, one screen per ink
    float s = uAmt[16];
    vec3 ink = 1. - c;
    vec3 o = vec3(0.);
    for (int k = 0; k < 3; k++){
      float ang = radians(15. + float(k) * 30.);
      vec2 p = rot2(ang) * (vUv * uRes) / s;
      vec2 f = fract(p) - .5;
      float r = sqrt(ink[k]) * .6;
      o[k] = step(length(f), r);
    }
    c = 1. - o;
  }
  if (on(17)){ // STAR filter
    float th = uAmt[17];
    vec3 add = vec3(0.);
    for (int d = 0; d < 4; d++){
      vec2 dir = rot2(float(d) * PI * .25 + .3) * vec2(1., 0.);
      for (int i = 1; i <= 7; i++){
        vec2 o = dir * float(i) * 4. * px * vec2(1., uRes.x / uRes.y) * uRes.y / 640.;
        vec3 s1 = sampleC(uv + o), s2 = sampleC(uv - o);
        float w = (1. - float(i) / 8.) * .5;
        add += (max(s1 - th, 0.) + max(s2 - th, 0.)) * w;
      }
    }
    c += add * 1.5;
  }
  outColor = vec4(c, 1.);
}
`,ue=I+`
uniform sampler2D uSrc;
uniform vec4 uGeo;          // hSize, vSize, hPos, vPos
uniform float uRot;
uniform float uLines;
uniform vec4 uOsc[3];       // freq, rate, amp, wave
uniform vec3 uOscTarget;    // per oscillator: 0 H, 1 V, 2 SIZE
uniform float uAudio;
uniform vec4 uMag[4];       // x, y, strength, radius
uniform vec4 uMagType;
uniform int uMagN;
uniform float uPurity;

float wave(float w, float x){
  float f = fract(x);
  if (w < .5) return sin(x * TAU);
  if (w < 1.5) return 1. - 4. * abs(f - .5);
  if (w < 2.5) return f < .5 ? 1. : -1.;
  if (w < 3.5) return f * 2. - 1.;
  if (w < 4.5) return vnoise(vec2(x * 3., 7.)) * 2. - 1.;
  return sin(x * TAU) * (.2 + uAudio * 1.8);
}

vec2 deflect(vec2 q, float k){
  float asp = aspect();
  vec2 r = q;
  for (int i = 0; i < 4; i++){
    if (i >= uMagN) break;
    vec4 m = uMag[i];
    vec2 d = r - m.xy;
    float rr = dot(d, d);
    float R2 = m.w * m.w;
    float s = m.z * k;
    if (uMagType[i] < .5){
      float a = s * R2 / (rr + R2 * .12);
      r = m.xy + rot2(a) * d;
    } else {
      r += d * s * R2 / (rr + R2 * .25) * .6;
    }
  }
  for (int j = 0; j < 3; j++){
    vec4 o = uOsc[j];
    if (o.z <= 0.) continue;
    float tg = uOscTarget[j];
    if (tg < .5) r.x += o.z * .5 * wave(o.w, (r.y * .5 + .5) * o.x + uTime * o.y);
    else if (tg < 1.5) r.y += o.z * .5 * wave(o.w, (r.x / asp * .5 + .5) * o.x + uTime * o.y);
    else r /= max(.15, 1. + o.z * .6 * wave(o.w, uTime * o.y + length(r) * o.x * .5));
  }
  r -= vec2(uGeo.z * asp, uGeo.w);
  r = rot2(-uRot) * r;
  r /= max(abs(uGeo.xy), vec2(1e-3));
  return r;
}

vec3 beam(vec2 r){
  float asp = aspect();
  vec2 uv = r / (vec2(asp, 1.) * 2.) + .5;
  if (!inUnit(uv)) return vec3(0.);
  vec3 c = texture(uSrc, uv).rgb;
  float l = fract(uv.y * uLines);
  float prof = smoothstep(0., .35, l) * smoothstep(1., .6, l);
  return c * mix(1., .35 + prof, step(1., uLines));
}

void main(){
  vec2 q = toP(vUv);
  vec2 r = deflect(q, 1.);
  float e = 2. / uRes.y;
  vec2 rx = deflect(q + vec2(e, 0.), 1.);
  vec2 ry = deflect(q + vec2(0., e), 1.);
  float det = abs((rx.x - r.x) * (ry.y - r.y) - (rx.y - r.y) * (ry.x - r.x)) / (e * e);
  float glow = clamp(pow(det, .55), .3, 9.);
  vec3 col;
  if (uMagN > 0 && uPurity > 0.){
    vec2 rR = deflect(q, 1. + .08 * uPurity);
    vec2 rB = deflect(q, 1. - .08 * uPurity);
    col = vec3(beam(rR).r, beam(r).g, beam(rB).b);
    // purity: patches of wrong colour around each magnet
    for (int i = 0; i < 4; i++){
      if (i >= uMagN) break;
      vec4 m = uMag[i];
      vec2 d = q - m.xy;
      float f = m.w * m.w / (dot(d, d) + m.w * m.w * .4) * abs(m.z) * .1 * uPurity;
      vec3 tint = hsv2rgb(vec3(fract(atan(d.y, d.x) / TAU + float(i) * .3), .8, 1.));
      col = mix(col, col * tint * 1.3, clamp(f, 0., .35));
    }
  } else {
    col = beam(r);
  }
  outColor = vec4(min(col * glow, 1.6), 1.);
}
`,de=I+`
uniform sampler2D uSrc;
uniform sampler2D uIn0;
uniform sampler2D uIn1;
uniform sampler2D uIn2;
uniform sampler2D uIn3;
uniform vec4 uMixOn;
uniform vec3 uPal[7];
uniform int uBands;
uniform float uGain;
uniform float uContrast;
uniform float uSmooth;
uniform float uNeg;
uniform float uMix;

float shape(float l){
  l = (l - .5) * uContrast + .5;
  l *= uGain;
  if (uNeg > .5) l = 1. - l;
  return clamp(l, 0., 1.);
}

vec3 colorize(float l){
  float b = float(uBands);
  float x = min(l, .9999) * b;
  int i = int(x);
  vec3 a = uPal[i];
  vec3 c = uSmooth > .5 ? mix(a, uPal[min(i + 1, uBands - 1)], fract(x)) : a;
  return c * (.55 + .6 * l) * smoothstep(.03, .09, l);
}

void main(){
  vec3 col;
  if (uMix > .5){
    col = vec3(0.);
    col += uMixOn.x * shape(luma(texture(uIn0, vUv).rgb)) * uPal[0 % uBands];
    col += uMixOn.y * shape(luma(texture(uIn1, vUv).rgb)) * uPal[2 % uBands];
    col += uMixOn.z * shape(luma(texture(uIn2, vUv).rgb)) * uPal[4 % uBands];
    col += uMixOn.w * shape(luma(texture(uIn3, vUv).rgb)) * uPal[(uBands - 1)];
    col += .5 * colorize(shape(luma(texture(uSrc, vUv).rgb)));
  } else {
    col = colorize(shape(luma(texture(uSrc, vUv).rgb)));
  }
  outColor = vec4(col, 1.);
}
`,fe=I+`
uniform sampler2D uCur;
uniform sampler2D uHist;
uniform int uMode;          // 0 tunnel, 1 luma key, 2 echo, 3 trail
uniform float uSize;
uniform float uRotA;
uniform float uHue;
uniform float uDecay;
uniform float uAmt;
uniform float uPulse;

void main(){
  vec3 c = texture(uCur, vUv).rgb;
  float asp = aspect();
  vec2 ctr = vec2(.5);
  float z = uSize * (1. + uPulse * .05);
  vec3 outc = c;
  if (uMode == 3){
    outc = max(c, texture(uHist, vUv).rgb * uDecay);
  } else {
    vec2 q = rot2(-uRotA) * ((vUv - ctr) * vec2(asp, 1.)) / z;
    vec2 huv = q / vec2(asp, 1.) + ctr;
    vec3 prev = inUnit(huv) ? hueShift(texture(uHist, huv).rgb, uHue) * uDecay : vec3(0.);
    if (uMode == 0){
      if (inUnit(huv)){
        float e = min(min(huv.x, 1. - huv.x), min(huv.y, 1. - huv.y));
        outc = mix(mix(c, prev, uAmt), vec3(.55) * uDecay, step(e, .008));
      }
    } else if (uMode == 1){
      float k = step(.18, luma(c));
      outc = mix(mix(c, prev, uAmt), c, k);
    } else {
      outc = mix(c, max(c, prev), uAmt);
    }
  }
  outColor = vec4(outc, 1.);
}
`,pe=`
uniform sampler2D uAtlas;
uniform float uHead;     // slot of the newest frame
uniform float uFilled;   // frames available
vec3 past(vec2 uv, float back){
  back = clamp(floor(back), 0., max(uFilled - 1., 0.));
  float slot = mod(uHead - back + 256., 64.);
  vec2 cell = vec2(mod(slot, 8.), floor(slot / 8.));
  return texture(uAtlas, (cell + clamp(uv, .003, .997)) / 8.).rgb;
}
`;I+pe+``,I+pe+``,I+pe+``;var me=I+`
uniform sampler2D uSrc;
uniform sampler2D uCg;
uniform float uOn;
void main(){
  vec3 c = texture(uSrc, vUv).rgb;
  if (uOn > .5){ vec4 g = texture(uCg, vUv); c = c * (1. - g.a) + g.rgb; }
  outColor = vec4(c, 1.);
}
`,he=`
uniform vec2 uPos;        // card centre (toP units)
uniform float uScale;
uniform float uRotA;      // radians
uniform float uTiltA;     // radians
uniform vec4 uFit;        // cover fit of the object's clip
uniform float uMirror;
vec3 objFrame(vec2 uv){
  vec2 p = toP(uv);
  mat3 R = rotZ(uRotA) * rotY(uTiltA);
  Hit h = card(p, R, vec3(uPos, 0.), vec2(aspect(), 1.) * uScale, 0.);
  return vec3(h.uv, h.cov);
}
vec2 clipUv(vec2 ou){
  vec2 t = (ou - .5) * uFit.xy + .5 + uFit.zw;
  if (uMirror > .5) t.x = 1. - t.x;
  return t;
}
`,ge=I+he+`
uniform sampler2D uMaskA;
uniform sampler2D uMaskB;
uniform float uMaskF;
uniform sampler2D uObj;
uniform int uKind;        // 0 matte, 1 luma, 2 chroma, 3 shape
uniform vec2 uLuma;
uniform float uInvert;
uniform vec3 uKeyColor;
uniform int uShape;       // 0 circle 1 ring 2 rect 3 diamond
uniform float uSize;
uniform float uRing;
uniform float uSpin;

vec2 cbcr(vec3 c){ return vec2(-.1687 * c.r - .3313 * c.g + .5 * c.b, .5 * c.r - .4187 * c.g - .0813 * c.b); }

void main(){
  vec3 f = objFrame(vUv);
  float m = 0.;
  if (f.z > 0.){
    vec2 ou = f.xy;
    if (uKind == 3){
      vec2 q = (ou - .5) * vec2(aspect(), 1.) * 2.;
      q = rot2(uTime * uSpin) * q;
      float r = uSize * 2.;
      float px = 3. / uRes.y;
      if (uShape == 0) m = smoothstep(px, -px, length(q) - r);
      else if (uShape == 1) m = smoothstep(px, -px, abs(length(q) - r * (1. - uRing * .5)) - r * uRing * .5);
      else if (uShape == 2){ vec2 d = abs(q) - vec2(r * .8, r); m = smoothstep(px, -px, max(d.x, d.y)); }
      else m = smoothstep(px, -px, abs(q.x) + abs(q.y) - r * 1.2);
    } else {
      vec2 t = clipUv(ou);
      if (inUnit(t)){
        if (uKind == 0){
          float a = texture(uMaskA, vec2(t.x, 1. - t.y)).r;
          float b = texture(uMaskB, vec2(t.x, 1. - t.y)).r;
          m = mix(a, b, uMaskF);
        } else if (uKind == 1){
          m = smoothstep(uLuma.x, uLuma.y, luma(texture(uObj, ou).rgb));
        } else {
          float d = distance(cbcr(texture(uObj, ou).rgb), cbcr(uKeyColor));
          m = smoothstep(.1, .18, d);
        }
        if (uKind != 0 && uInvert > .5) m = 1. - m;
      }
    }
    m *= f.z;
  }
  outColor = vec4(m, m, m, 1.);
}
`,_e=I+he+`
uniform sampler2D uCur;
uniform sampler2D uObj;
uniform sampler2D uMask;      // OBJMASK output
uniform sampler2D uDist;      // distance outside the matte (0..1 of uMaxD)
uniform float uMaxD;
uniform int uLine;
uniform float uLineSize;
uniform vec3 uColor;
uniform vec3 uPal[4];
uniform vec2 uCenter;         // object centre, output uv
uniform int uFillMode;        // 0 self, 1 texture, 2 colour, 3 none
uniform sampler2D uFill;
uniform vec4 uFillFit;
uniform vec3 uFillColor;
uniform float uSel;
uniform float uPulse;
uniform float uHasDist;
uniform vec4 uTint;          // rgb + on: the cut-out in one colour
uniform vec4 uLineTint;      // rgb + on: every outline style in this colour

// the matte follows the object's own colour edges (cheap guided upsampling)
float matte(vec2 uv, vec3 self){
  vec2 px = 1. / vec2(textureSize(uMask, 0));
  float acc = texture(uMask, uv).r * 2., ws = 2.;
  for (int i = 0; i < 4; i++){
    vec2 o = vec2(i == 0 ? 1. : i == 1 ? -1. : 0., i == 2 ? 1. : i == 3 ? -1. : 0.) * px;
    vec3 f = objFrame(uv + o);
    vec3 c = texture(uObj, f.xy).rgb - self;
    float w = exp(-dot(c, c) * 30.);
    acc += texture(uMask, uv + o).r * w;
    ws += w;
  }
  return smoothstep(.38, .62, acc / ws);
}

vec3 lines(vec3 col, vec2 uv, float d, float m){
  float sc = uLineSize * uRes.y / 1280. * 1.6;
  vec2 pa = (uv - uCenter) * vec2(aspect(), 1.);
  float ang = atan(pa.y, pa.x);
  float t = uTime;
  float line = floor(uv.y * 240.);
  float fr = floor(t * 24.);
  if (uLine == 1){
    // TORN: up to four rings, each scanline pushed sideways like a cheap keyer
    float tear = (hash12(vec2(line, fr)) - .5) * .02;
    float dd = texture(uDist, uv + vec2(tear, 0.)).r * uMaxD;
    for (int i = 3; i >= 0; i--){
      float fi = float(i);
      float s0 = 3. * sc + fi * 7. * sc, s1 = s0 + 5. * sc;
      float ring = step(s0, dd) * step(dd, s1);
      float smear = step(s0, dd - 2.5) * step(dd - 2.5, s1) * step(.5, hash12(vec2(line, fi + fr)));
      col = mix(col, uPal[i], max(ring, smear * .5));
    }
  } else if (uLine == 2){
    // NEON: a hot core with a wide breathing glow
    float core = smoothstep(2.2 * sc, .5 * sc, abs(d - 4. * sc));
    float glow = exp(-d / (16. * sc)) * step(.5, d) * (.75 + .25 * sin(t * 7.) + uPulse * .5);
    col += uColor * glow * 1.4;
    col = mix(col, mix(uColor, vec3(1.), .65), core);
  } else if (uLine == 3){
    // RAINBOW: colour runs around the outline
    for (int i = 0; i < 3; i++){
      float fi = float(i);
      float s0 = 2. * sc + fi * 7. * sc;
      float ring = smoothstep(s0 - 1., s0, d) * smoothstep(s0 + 5. * sc + 1., s0 + 5. * sc, d);
      vec3 rc = hsv2rgb(vec3(fract(ang / TAU * 2. - t * .45 + fi * .12), .9, 1.));
      col = mix(col, rc, ring);
    }
  } else if (uLine == 4){
    // DOTS: beads marching along the outline
    float along = (ang / TAU + .5) * 70. - t * 4.;
    vec2 q = vec2((fract(along) - .5) * 1.4, (d - 7. * sc) / (5. * sc));
    float dot_ = smoothstep(.55, .4, length(q));
    vec3 dc = mod(floor(along), 2.) < 1. ? uColor : vec3(1.);
    col = mix(col, dc, dot_ * step(.5, d));
  } else if (uLine == 5){
    // ELECTRIC: a jagged line that re-strikes every couple of frames, with sparks
    float j = floor(t * 18.);
    vec2 g = uv * vec2(aspect(), 1.) * 60.;
    float dd = d + (vnoise(g + j * 7.3) - .5) * 14. * sc + (vnoise(g * 3. - j) - .5) * 5. * sc;
    float bolt = smoothstep(2. * sc, 0., abs(dd - 6. * sc));
    float glow = exp(-abs(dd - 6. * sc) / (7. * sc));
    float spark = step(.985, hash12(floor(uv * uRes / 5.) + j)) * step(d, 30. * sc) * step(1., d);
    vec3 ec = mix(vec3(.4, .8, 1.), vec3(1.), .5 + .5 * hash11(j));
    col += ec * glow * .8 + vec3(.8, .9, 1.) * spark;
    col = mix(col, vec3(1.), bolt);
  } else if (uLine == 6){
    // ECHO: outlines leave the object and spread like ripples
    float sp = 24. * sc;
    float ph = d - t * 42. * sc;
    float r = smoothstep(3. * sc, .5 * sc, abs(mod(ph, sp) - sp * .5)) * exp(-d / (110. * sc)) * step(1., d);
    col = mix(col, uColor, r);
  } else if (uLine == 7){
    // CHROME: a bevelled metal band reflecting sky and ground
    float w = 15. * sc;
    float k = d / w + .12 * sin(ang * 3. + t * .6);
    if (d > .5 && d < w){
      vec3 c = k < .5 ? mix(vec3(.95, .97, 1.), vec3(.35, .55, .95), k * 2.) : mix(vec3(.45, .3, .18), vec3(.06), (k - .5) * 2.);
      c += vec3(1.) * smoothstep(.06, 0., abs(k - .5)) * .8;
      col = c;
    }
    col = mix(col, vec3(0.), smoothstep(1.5, 0., abs(d - w)) * step(.5, d));
  } else if (uLine == 8){
    // RIBBON: a thick white band that wobbles, with a green/yellow dotted fringe
    vec2 q = uv * vec2(aspect(), 1.);
    float dw = d + (fbm(q * 3. + t * .25) - .5) * 26. * sc;
    float band = step(4. * sc, dw) * step(dw, 24. * sc);
    col = mix(col, vec3(.97), band);
    float fr2 = step(26. * sc, dw) * step(dw, 33. * sc);
    vec2 cell = floor(uv * uRes / (3. * max(sc, .6)));
    float dt = step(.55, hash12(cell + floor(t * 6.)));
    col = mix(col, mix(vec3(.3, 1., .3), vec3(1., .95, .2), hash12(cell)), fr2 * dt);
  } else if (uLine == 9){
    // PAIK-ABE: many thin pink and white lines, each a little off
    for (int i = 0; i < 6; i++){
      float fi = float(i);
      float jit = (hash12(vec2(fi, fr)) - .5) * 3. * sc + (hash12(vec2(line, fi + fr)) - .5) * 2. * sc;
      float r = 3. * sc + fi * 6. * sc + jit;
      float l = smoothstep(1.4 * sc, .3 * sc, abs(d - r));
      col = mix(col, mod(fi, 2.) < 1. ? vec3(1., .45, .78) : vec3(1.), l * (1. - fi * .08));
    }
  }
  return col;
}

void main(){
  vec2 uv = vUv;
  vec3 col = texture(uCur, uv).rgb;
  vec3 f = objFrame(uv);
  // the picture is already fitted to the screen (and dressed in its look): sample it in card space
  vec3 self = inUnit(f.xy) && f.z > 0. ? texture(uObj, f.xy).rgb : vec3(0.);
  float m = matte(uv, self);
  float d = uHasDist > .5 ? texture(uDist, uv).r * uMaxD : 1e5;
  if (uLine > 0 && uHasDist > .5){
    vec3 base = col;
    col = lines(col, uv, d, m);
    if (uLineTint.a > .5){
      // recolour only what the outline drew, keeping its light and shade
      float w = clamp(length(col - base) * 3., 0., 1.);
      float l = luma(col);
      vec3 t = l < .6 ? uLineTint.rgb * (.15 + l / .6 * .85) : mix(uLineTint.rgb, vec3(1.), (l - .6) / .4 * .7);
      col = mix(col, t, w);
    }
  }
  vec3 inside = self;
  if (uFillMode == 1){
    vec2 t = (uv - .5) * uFillFit.xy + .5 + uFillFit.zw;
    inside = texture(uFill, t).rgb;
  } else if (uFillMode == 2) inside = uFillColor;
  if (uTint.a > .5) inside = uTint.rgb * (.18 + 1.05 * luma(inside));
  if (uFillMode != 3) col = mix(col, inside, m);
  outColor = vec4(col, 1.);
}
`,ve=`
float bl(sampler2D s, vec2 uv, float r){
  vec2 px = r / uRes;
  float a = luma(texture(s, uv).rgb) * 2.;
  a += luma(texture(s, uv + vec2(px.x, 0.)).rgb) + luma(texture(s, uv - vec2(px.x, 0.)).rgb);
  a += luma(texture(s, uv + vec2(0., px.y)).rgb) + luma(texture(s, uv - vec2(0., px.y)).rgb);
  return a / 6.;
}
float sobel(sampler2D s, vec2 uv, float r){
  vec2 px = r / uRes;
  float l = luma(texture(s, uv - vec2(px.x, 0.)).rgb), rr = luma(texture(s, uv + vec2(px.x, 0.)).rgb);
  float d = luma(texture(s, uv - vec2(0., px.y)).rgb), u = luma(texture(s, uv + vec2(0., px.y)).rgb);
  return length(vec2(rr - l, u - d));
}
`,ye=I+ve+`
uniform sampler2D uSrc;
uniform sampler2D uHist;
uniform float uLines;
uniform float uField;
uniform float uSmear;
void main(){
  vec2 uv = vUv;
  // colour fields: four brightness bands, each its own saturated colour, the darkest one black
  float lb = bl(uSrc, uv, 9.);
  float k = floor(clamp(lb, 0., .999) * 4.);
  float spin = floor(uTime * .5) * .17;
  vec3 pal[4] = vec3[4](vec3(0.), hsv2rgb(vec3(fract(.88 + spin), 1., 1.)), hsv2rgb(vec3(fract(.07 + spin), 1., 1.)), hsv2rgb(vec3(fract(.36 + spin), .9, 1.)));
  vec3 field = pal[int(k)];
  // the fields bleed: last frame, a little larger and hue-turned, fading
  vec2 hu = (uv - .5) * .978 + .5 + vec2(sin(uTime * .7), cos(uTime * .53)) * .004;
  vec3 hist = hueShift(texture(uHist, hu).rgb, .03) * uSmear * .9;
  vec3 col = max(field * uField * .85, hist);
  // contour lines: each level drawn twice, slightly apart and re-jittered every frame
  float fr = floor(uTime * 15.);
  for (int i = 0; i < 6; i++){
    if (float(i) >= uLines) break;
    float fi = float(i);
    float level = (fi + 1.) / (uLines + 1.);
    for (int d = 0; d < 2; d++){
      vec2 j = (vec2(hash12(vec2(fi, fr + float(d))), hash12(vec2(fr, fi + float(d) * 3.))) - .5) * 3. / uRes + vec2(float(d) * 2.5, 0.) / uRes;
      float l = bl(uSrc, uv + j, 1.5);
      float w = fwidth(l) * 1.6 + .003;
      float ln = 1. - smoothstep(w * .4, w, abs(l - level));
      col = mix(col, mod(fi + float(d), 2.) < 1. ? vec3(1., .42, .78) : vec3(1.), ln * .95);
    }
  }
  outColor = vec4(col, 1.);
}
`,B=I+ve+`
uniform sampler2D uSrc;
uniform float uLevel;
uniform float uWidth;
uniform float uFringe;
void main(){
  vec2 uv = vUv;
  vec3 c = texture(uSrc, uv).rgb;
  float l = bl(uSrc, uv, 3.);
  vec2 p = toP(uv);
  float w = (fbm(p * 1.8 + uTime * .35) - .5) * .14;
  float x = l - uLevel + w;
  float g = fwidth(x) + 1e-4;
  float dpx = x / g;
  float W = uWidth * uRes.y * .25;
  vec3 col = x > 0. ? c * vec3(.25, .25, .4) : c * .45;
  float band = 1. - smoothstep(W - 1.5, W + 1.5, abs(dpx));
  col = mix(col, vec3(.97), band);
  float fr = step(W, -dpx) * step(-dpx, W + 7.);
  vec2 cell = floor(uv * uRes / 3.);
  float dt = step(.5, hash12(cell + floor(uTime * 8.)));
  col = mix(col, mix(vec3(.25, 1., .3), vec3(1., .95, .2), hash12(cell * 1.7)), fr * dt * uFringe);
  outColor = vec4(col, 1.);
}
`,be=I+`
uniform sampler2D uSrc;
uniform float uLines;
uniform float uHeight;
uniform int uColorMode;
vec3 lineColor(float l, float j){
  if (uColorMode == 1) return vec3(.3, 1., .4) * (.4 + l);
  if (uColorMode == 2) return hsv2rgb(vec3(fract(j * .013 + uTime * .05), .8, .5 + l * .6));
  return mix(vec3(1., .45, .1), vec3(1., .95, .8), l);
}
void main(){
  vec2 uv = vUv;
  float N = uLines;
  float y = uv.y;
  float best = 0.;
  vec3 lc = vec3(0.);
  int j1 = int(floor(y * N)) + 1;
  int j0 = int(floor((y - uHeight * 1.1) * N)) - 1;
  for (int k = 0; k < 48; k++){
    int j = j1 - k;
    if (j < j0) break;
    float yb = (float(j) + .5) / N;
    if (yb < 0. || yb > 1.) continue;
    float l = luma(texture(uSrc, vec2(uv.x, yb)).rgb);
    float yy = yb + l * uHeight;
    float d = abs(y - yy) * uRes.y;
    float th = .8 + l * 1.4;
    float a = smoothstep(th + 1., th - .4, d);
    if (a > best){ best = a; lc = lineColor(l, float(j)); }
  }
  vec3 bg = mix(vec3(0., 0., .05), vec3(.02, .03, .16), uv.y);
  outColor = vec4(bg + lc * best, 1.);
}
`,xe=I+`
uniform sampler2D uSrc;
uniform float uBlock;
uniform float uAmount;
void main(){
  vec2 uv = vUv;
  vec3 c = texture(uSrc, uv).rgb;
  float fr = floor(uTime * 15.);
  float full = step(1. - uAmount * .35, hash11(fr * .173 + .3));
  vec2 bs = vec2(uBlock / aspect(), uBlock);
  vec2 cell = floor(uv / bs);
  vec3 m = texture(uSrc, (cell + .5) * bs).rgb;
  float q = floor(luma(m) * 4.) / 3.;
  vec3 pal = q > .95 ? vec3(1.) : mix(vec3(.22, .04, .42), vec3(.78, .58, 1.), q);
  vec3 blk = mix(m, pal, .85);
  vec3 col = c;
  if (full > .5) col = blk;
  else {
    float row = floor(uv.y / bs.y);
    if (hash12(vec2(row, fr)) > 1. - uAmount * .25){
      vec2 o = vec2((hash12(vec2(fr, row)) - .5) * .2, 0.);
      vec3 s = texture(uSrc, (floor((uv + o) / bs) + .5) * bs).rgb;
      col = mix(s, pal, .6);
    }
  }
  outColor = vec4(col, 1.);
}
`,V=I+`
uniform sampler2D uSrc;
uniform float uTint;
uniform float uZoom;
uniform float uCurve;
float rbox(vec2 q, vec2 b, float r){ vec2 d = abs(q) - b + r; return length(max(d, 0.)) + min(max(d.x, d.y), 0.) - r; }
void main(){
  vec2 p = toP(vUv);
  float wob = sin(uTime * 1.3) * .012 + (vnoise(vec2(uTime * 2.5, 1.)) - .5) * .015;
  float z = uZoom + wob;
  vec2 c = vec2(sin(uTime * .4) * .02, cos(uTime * .31) * .015);
  vec2 hs = vec2(aspect(), 1.) * z;
  vec2 q = (p - c) / hs;
  float r2 = dot(q, q);
  vec2 qd = q * (1. + uCurve * .16 * r2);
  float sd = rbox(q, vec2(1.), .14);
  vec3 col;
  if (sd < 0.){
    vec2 suv = qd * .5 + .5;
    col = inUnit(suv) ? texture(uSrc, suv).rgb : vec3(0.);
    float mo = .5 + .5 * sin((q.x * .995 + q.y * .1) * uRes.y * .48 * z);
    col *= .85 + .15 * mo;
    col *= .82 + .18 * sin(suv.y * uRes.y * 1.4);
    col = mix(col, vec3(luma(col)) * vec3(.5, 1.05, .62), uTint * .75);
    col *= 1. - .55 * r2 * .5;
    col *= smoothstep(0., -.06, sd) * .4 + .6;
  } else {
    // the set around the tube: dark plastic with a soft top light, then the room
    float bez = rbox((p - c) / hs, vec2(1.18), .22);
    vec3 plastic = mix(vec3(.13, .12, .11), vec3(.3, .28, .25), smoothstep(-1.2, 1.2, p.y));
    plastic *= .8 + .2 * smoothstep(.08, 0., sd);
    vec3 room = mix(vec3(.02), vec3(.07, .06, .05), vUv.y);
    col = bez < 0. ? plastic : room;
    col *= 1. - smoothstep(0., .03, sd) * .3 * step(sd, .03);
  }
  outColor = vec4(col, 1.);
}
`,Se=I+ve+`
uniform sampler2D uSrc;
uniform int uPair;
void main(){
  vec2 uv = vUv;
  float l = bl(uSrc, uv, 2.);
  vec3 A, B;
  if (uPair == 0){ A = vec3(.95, .15, .6); B = vec3(1.); }
  else if (uPair == 1){ A = vec3(.04, .07, .33); B = vec3(.3, .55, 1.); }
  else if (uPair == 2){ A = vec3(.85, .05, .05); B = vec3(1., .9, .2); }
  else { A = vec3(.02); B = vec3(.2, .95, .35); }
  vec3 col = mix(A, B, smoothstep(.42, .52, l));
  float e = sobel(uSrc, uv, 1.5);
  col = mix(col, vec3(1., .1, .1), smoothstep(.07, .18, e));
  outColor = vec4(col, 1.);
}
`,Ce=I+`
uniform sampler2D uSrc;
uniform vec3 uBg;
uniform float uCircles;
float sob(vec2 uv){
  vec2 px = 1.5 / uRes;
  float l = luma(texture(uSrc, uv - vec2(px.x, 0.)).rgb), r = luma(texture(uSrc, uv + vec2(px.x, 0.)).rgb);
  float d = luma(texture(uSrc, uv - vec2(0., px.y)).rgb), u = luma(texture(uSrc, uv + vec2(0., px.y)).rgb);
  return length(vec2(r - l, u - d));
}
void main(){
  vec2 uv = vUv;
  float e = sob(uv);
  vec3 col = uBg;
  col = mix(col, vec3(.72, .92, 1.), smoothstep(.06, .16, e));
  if (uCircles > .5){
    float cs = 26.;
    vec2 g = uv * uRes / cs;
    vec2 cell = floor(g);
    vec2 cc = (cell + .5) * cs / uRes;
    float ce = sob(cc);
    float h = hash12(cell + floor(uTime * .5) * 3.1);
    if (ce > .08 && h < .4){
      vec2 o = (hash22(cell) - .5) * .5;
      float r = .18 + h * .5;
      float d = abs(length(fract(g) - .5 - o) - r) * cs;
      col = mix(col, vec3(.85, .97, 1.), smoothstep(1.4, .4, d));
    }
  }
  outColor = vec4(col, 1.);
}
`,we=I+`
uniform sampler2D uSrc;
uniform sampler2D uHist;
uniform float uAngle;
uniform float uAmount;
void main(){
  vec2 uv = (vUv - .5) / (1. + uAmount * .15) + .5 + vec2(sin(uTime * 2.1), cos(uTime * 1.7)) * .01 * uAmount;
  float a = uAngle + sin(uTime * .9) * .5;
  vec2 dir = vec2(cos(a), sin(a)) * .07 * uAmount;
  vec3 acc = vec3(0.);
  for (int i = 0; i < 10; i++){
    float f = (float(i) / 9. - .5) + (hash12(vUv * 91. + float(i)) - .5) * .1;
    acc += texture(uSrc, uv + dir * f).rgb;
  }
  acc /= 10.;
  vec3 h = texture(uHist, vUv).rgb;
  outColor = vec4(mix(acc, h, .55 * uAmount), 1.);
}
`,Te=I+`
uniform sampler2D uSrc;
uniform sampler2D uField;    // rg: displacement (0.5 = none), b: freeze, a: tear
uniform sampler2D uHold;     // frame held by FREEZE
void main(){
  vec2 uv = vUv;
  vec4 f = texture(uField, uv);
  vec2 d = (f.rg - .5) * .5;
  float line = floor(uv.y * 240.);
  float tear = f.a * (hash12(vec2(line, floor(uTime * 20.))) - .3) * .25;
  vec2 s = uv - d + vec2(tear, 0.);
  vec3 col = texture(uSrc, s).rgb;
  col = mix(col, texture(uHold, s).rgb, smoothstep(.2, .6, f.b));
  outColor = vec4(col, 1.);
}
`,Ee=I+`
uniform sampler2D uPrev;
uniform vec4 uBrush;      // x, y (uv), radius (uv y), active
uniform vec2 uVel;        // finger velocity (uv per frame), smear
uniform int uTool;        // 0 none 1 smear 2 tear 3 freeze
uniform float uRelax;
void main(){
  vec4 f = texture(uPrev, vUv);
  f.rg = mix(f.rg, vec2(.5), uRelax);
  f.a *= 1. - uRelax * 1.4;
  f.b *= 1. - uRelax * .25;
  if (uBrush.w > .5){
    vec2 q = (vUv - uBrush.xy) * vec2(aspect(), 1.);
    float k = exp(-dot(q, q) / (uBrush.z * uBrush.z));
    if (uTool == 1) f.rg = clamp(f.rg + uVel * k * 2.2, 0., 1.);
    if (uTool == 2) f.a = clamp(f.a + k * step(abs(q.y), uBrush.z * .5) * 1.2, 0., 1.);
    if (uTool == 3) f.b = clamp(f.b + k * .4, 0., 1.);
  }
  outColor = f;
}
`,De=I+`
uniform sampler2D uSrc;
uniform int uMode;
uniform vec3 uCol;
uniform float uBeat;
void main(){
  vec3 c = texture(uSrc, vUv).rgb;
  float l = luma(c);
  if (uMode == 1) c = l < .55 ? uCol * (l / .55) : mix(uCol, vec3(1.), (l - .55) / .45);
  else if (uMode == 2) c = hueShift(c, fract(uBeat / 8.));
  else if (uMode == 3) c = 1. - c;
  else if (uMode == 4) c = vec3(l);
  outColor = vec4(c, 1.);
}
`,Oe=I+`
uniform int uMode;
uniform float uBeat;

float sdPoly(vec2 p, float n, float r){
  float a = atan(p.y, p.x);
  float s = TAU / n;
  return cos(floor(.5 + a / s) * s - a) * length(p) - r;
}

vec3 geo(vec2 p){
  float b = uBeat;
  float kick = exp(-fract(b) * 4.);
  // six-fold mirror
  float a = atan(p.y, p.x), r = length(p);
  float seg = TAU / 6.;
  a = abs(mod(a + b * .05, seg) - seg * .5);
  vec2 q = vec2(cos(a), sin(a)) * r;
  vec3 col = vec3(.02, .01, .06);
  for (int i = 0; i < 5; i++){
    float fi = float(i);
    float n = 3. + mod(fi + floor(b / 4.), 4.);
    vec2 c = q - vec2(.25 + .18 * fi, 0.);
    c = rot2(b * .25 * (mod(fi, 2.) < 1. ? 1. : -1.) + fi) * c;
    float d = sdPoly(c, n, .08 + .05 * sin(b * .5 + fi) + kick * .02);
    vec3 h = hsv2rgb(vec3(fract(fi * .17 + b * .03), .9, 1.));
    col = mix(col, h, smoothstep(.006, 0., d));
    col += h * .9 * smoothstep(.012, 0., abs(d)) ;
  }
  return col;
}

vec3 plasma(vec2 p){
  float t = uBeat * .25;
  float v = sin(p.x * 3. + t) + sin((p.y * 3. + t) * .7) + sin((p.x + p.y) * 2. + t * 1.3) + sin(length(p * 4.) - t * 2.);
  v = floor(v * 2.) / 2.;
  return hsv2rgb(vec3(fract(v * .12 + t * .05), .85, .9));
}

void main(){
  vec2 p = toP(vUv) * .5;
  vec3 c;
  if (uMode == 0) c = geo(p);
  else c = plasma(p);
  outColor = vec4(c, 1.);
}
`,ke=class{video;stream=null;facing=null;pending=null;error=``;busy=!1;onError=null;constructor(){this.video=document.createElement(`video`),this.video.muted=!0,this.video.playsInline=!0,this.video.setAttribute(`playsinline`,``)}get ready(){return!!this.stream&&this.video.readyState>=2&&this.video.videoWidth>0}want(e){e!==this.facing&&e!==this.pending&&(this.pending=e,this.busy||this.apply())}async apply(){this.busy=!0;try{for(;this.pending!==this.facing;){let e=this.pending;if(this.stop(),e)try{let t=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:e},width:{ideal:1280},height:{ideal:720},frameRate:{ideal:30}},audio:!1});this.stream=t,this.video.srcObject=t,await this.video.play().catch(()=>{}),this.error=``}catch(e){this.error=e.name||`ERR`,this.pending=null,this.onError?.(this.error)}if(this.facing=this.stream?e:null,!this.stream)break}}finally{this.busy=!1}}stop(){this.stream?.getTracks().forEach(e=>e.stop()),this.stream=null,this.video.srcObject=null,this.facing=null}};function Ae(e,t,n){let r=e/t;return r>n?[n/r,1,0,0]:[1,r/n,0,0]}var je=`"Galmuri11", monospace`,Me=[`#ff3030`,`#ffe030`,`#30ff60`,`#30e0ff`,`#5050ff`,`#ff40ff`];function Ne(e,t,n,r){e.font=`bold ${r}px ${je}`;let i=e.measureText(t).width;return i>n?Math.floor(r*n/i):r}function Pe(e,t,n,r,i,a,o,s=`center`){e.font=`bold ${i}px ${je}`,e.textAlign=s,e.textBaseline=`middle`;let c=Math.max(2,Math.round(i/11));if(a===`neg`){let a=e.measureText(t).width,o=s===`center`?n-a/2:n;e.fillStyle=`#f0f0f0`,e.fillRect(Math.round(o-c*3),Math.round(r-i*.62),Math.round(a+c*6),Math.round(i*1.24)),e.fillStyle=`#0a0a0a`,e.fillText(t,n,r)}else{e.fillStyle=`#000`;for(let[i,a]of[[-c,0],[c,0],[0,-c],[0,c],[-c,-c],[c,c],[-c,c],[c,-c]])e.fillText(t,n+i,r+a);if(a===`cycle`){let i=[...t],a=0,c=i.map(t=>e.measureText(t).width),l=c.reduce((e,t)=>e+t,0),u=s===`center`?n-l/2:n,d=Math.floor(o*8);e.textAlign=`left`,i.forEach((t,n)=>{e.fillStyle=Me[(n+d)%Me.length],e.fillText(t,u,r),u+=c[n],a+=c[n]})}else e.fillStyle=`#f4f4f4`,e.fillText(t,n,r)}}var Fe=class{canvas=document.createElement(`canvas`);ctx=this.canvas.getContext(`2d`);standby=document.createElement(`canvas`);label=document.createElement(`canvas`);start=0;serial=-1;visible=!1;constructor(){document.fonts.load(`22px "Galmuri11"`,`가A1`).then(()=>this.drawStatic())}resize(e,t){(this.canvas.width!==e||this.canvas.height!==t)&&(this.canvas.width=e,this.canvas.height=t,this.drawStatic())}drawStatic(){let e=this.canvas.width||720,t=this.canvas.height||1280;this.standby.width=e,this.standby.height=t;let n=this.standby.getContext(`2d`);n.fillStyle=`#000`,n.fillRect(0,0,e,t);let r=this.label;r.width=400,r.height=100;let i=r.getContext(`2d`);i.clearRect(0,0,400,100),i.fillStyle=`#000`,i.fillRect(70,28,260,44),i.font=`bold 33px ${je}`,i.textAlign=`center`,i.textBaseline=`middle`,i.fillStyle=`#e8e8e8`,i.fillText(`NO SIGNAL`,200,51)}render(e,t=e){let n=i.cg,r=this.canvas.width,a=this.canvas.height,o=this.ctx;if(n.serial!==this.serial&&(this.serial=n.serial,this.start=e),this.visible=n.mode!==`off`||n.tc||n.sat,!this.visible)return!1;o.clearRect(0,0,r,a),o.imageSmoothingEnabled=!1;let s=Math.min(r,a)/10,c=e-this.start,l=e=>e.slice(0,Math.floor(c*30));if(n.mode===`title`){let e=Ne(o,n.title1,r*.9,Math.round(s*1.1));Pe(o,l(n.title1),r/2,a*.47,e,n.style,c),n.title2&&Pe(o,l(n.title2),r/2,a*.47+e*1.3,Math.round(e*.55),n.style===`cycle`?`chyron`:n.style,c)}else if(n.mode===`lower`){let e=Ne(o,n.lower1,r*.86,Math.round(s*.62));Pe(o,l(n.lower1),s*.5,a*.78,e,n.style,c,`left`),Pe(o,l(n.lower2),s*.5,a*.78+e*1.25,Math.round(e*.7),n.style===`cycle`?`chyron`:n.style,c,`left`)}else if(n.mode===`crawl`){let e=Math.round(s*.5);o.font=`bold ${e}px ${je}`;let t=o.measureText(n.crawl).width+s,i=r-Math.floor(c*60)*Math.round(s*.03)%(t+r);o.fillStyle=`#000`,o.fillRect(0,Math.round(a*.88-e*.8),r,Math.round(e*1.6)),Pe(o,n.crawl,i,a*.88,e,n.style,c,`left`)}else if(n.mode===`doc`){let e=n.docTop.split(`
`),t=Math.round(s*.3);o.font=`${t}px ${je}`,o.textAlign=`center`,o.textBaseline=`middle`,e.forEach((e,n)=>{o.fillStyle=`#000`,o.fillText(l(e),r/2+1,s*.7+n*t*1.3+1),o.fillStyle=`#b8b8b8`,o.fillText(l(e),r/2,s*.7+n*t*1.3)});let i=n.doc.split(`
`).filter(e=>e.trim()),u=Ne(o,i.reduce((e,t)=>e.length>t.length?e:t,``),r*.9,Math.round(s*.5)),d=a*.5-(i.length-1)*u*1.25/2;i.forEach((e,t)=>Pe(o,l(e.toUpperCase()),r/2,d+t*u*1.25,u,`chyron`,c))}else if(n.mode===`credits`){let e=n.credits.split(`
`),t=Math.round(s*.7),i=a-Math.floor(c*30)*Math.max(1,Math.round(s*.04))%(e.length*t+a);e.forEach((a,l)=>{if(!a.trim())return;let u=l===0||!e[l-1].trim();Pe(o,a,r/2,i+l*t,Math.round(u?s*.32:s*.5),u?`chyron`:n.style,c)})}if(n.tc&&n.tcBig){let e=Math.round(s*.62),n=t+660+56,i=Math.floor(n%1*30),c=[Math.floor(n/3600)%24,Math.floor(n/60)%60,Math.floor(n)%60,i].map(e=>String(e).padStart(2,`0`)).join(` `);o.font=`bold ${e}px ${je}`;let l=o.measureText(c).width;o.fillStyle=`#000`,o.fillRect(Math.round(r/2-l/2-10),Math.round(a*.8-e*.7),Math.round(l+20),Math.round(e*1.4)),o.fillStyle=`#f4f4f4`,o.textAlign=`center`,o.textBaseline=`middle`,o.fillText(c,r/2,a*.8)}else if(n.tc){let t=Math.round(s*.36),n=e,i=Math.floor(n%1*30),c=`${String(Math.floor(n/3600)%24).padStart(2,`0`)}:${String(Math.floor(n/60)%60).padStart(2,`0`)}:${String(Math.floor(n)%60).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`;o.font=`bold ${t}px ${je}`;let l=o.measureText(c).width;o.fillStyle=`#000`,o.fillRect(Math.round(r/2-l/2-6),Math.round(a-s*.9),Math.round(l+12),Math.round(t*1.4)),o.fillStyle=`#fff`,o.textAlign=`center`,o.textBaseline=`top`,o.fillText(c,r/2,Math.round(a-s*.9+t*.2))}if(n.sat){let t=Math.round(s*.3);o.font=`bold ${t}px ${je}`,o.textAlign=`left`,o.textBaseline=`top`,Math.floor(e*1.5)%2==0&&(o.fillStyle=`#000`,o.fillRect(Math.round(s*.3),Math.round(s*.35),Math.round(s*4.6),Math.round(t*1.5)),o.fillStyle=`#ffe040`,o.fillText(`LIVE VIA SATELLITE`,Math.round(s*.4),Math.round(s*.35+t*.25)))}return!0}},H=(e,t)=>{e.fillStyle=t,e.fill(),e.lineWidth=5,e.strokeStyle=`#111`,e.stroke()},Ie=[e=>{e.beginPath(),e.moveTo(18,92),e.bezierCurveTo(30,40,60,12,92,6),e.bezierCurveTo(80,40,56,70,18,92),H(e,`#f4f0e0`),e.beginPath(),e.moveTo(18,92),e.lineTo(80,20),e.stroke();for(let t=0;t<6;t++)e.beginPath(),e.moveTo(30+t*9,78-t*10),e.lineTo(42+t*9,76-t*12),e.stroke()},e=>{e.beginPath(),e.ellipse(32,76,16,12,-.4,0,Math.PI*2),H(e,`#111`),e.fillRect(44,14,7,62),e.beginPath(),e.moveTo(51,14),e.quadraticCurveTo(80,26,74,52),e.quadraticCurveTo(70,34,51,32),H(e,`#111`)},e=>{e.beginPath(),e.roundRect(34,8,32,48,16),H(e,`#c8c8d0`);for(let t=0;t<4;t++)e.beginPath(),e.moveTo(36,18+t*9),e.lineTo(64,18+t*9),e.stroke();e.beginPath(),e.moveTo(24,46),e.quadraticCurveTo(50,80,76,46),e.stroke(),e.fillStyle=`#111`,e.fillRect(46,64,8,22),e.fillRect(32,86,36,7)},e=>{e.beginPath(),e.moveTo(12,38),e.lineTo(34,38),e.lineTo(62,14),e.lineTo(62,86),e.lineTo(34,62),e.lineTo(12,62),e.closePath(),H(e,`#f0d040`);for(let t=0;t<3;t++)e.beginPath(),e.arc(62,50,14+t*12,-.7,.7),e.stroke()},e=>{e.beginPath(),e.ellipse(50,48,36,42,0,0,Math.PI*2),H(e,`#f8f0c8`),e.fillStyle=`#111`,e.beginPath(),e.ellipse(36,38,8,5,-.3,0,Math.PI*2),e.ellipse(64,38,8,5,.3,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(50,56,18,.15,Math.PI-.15),e.closePath(),e.fill()},e=>{e.beginPath(),e.ellipse(50,48,36,42,0,0,Math.PI*2),H(e,`#a0c8f0`),e.fillStyle=`#111`,e.beginPath(),e.ellipse(36,40,8,5,.4,0,Math.PI*2),e.ellipse(64,40,8,5,-.4,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(50,78,16,Math.PI+.3,-.3),e.lineWidth=6,e.stroke()},e=>{e.beginPath(),e.ellipse(50,52,42,34,-.2,0,Math.PI*2),H(e,`#d8a868`),[`#e02020`,`#2050e0`,`#20c040`,`#f0e020`,`#f0f0f0`].forEach((t,n)=>{e.beginPath(),e.arc(26+n*13,40+n%2*10,6,0,Math.PI*2),e.fillStyle=t,e.fill(),e.lineWidth=2,e.stroke()}),e.beginPath(),e.arc(66,66,8,0,Math.PI*2),e.fillStyle=`#3a2410`,e.fill()},e=>{e.beginPath(),e.moveTo(20,76),e.quadraticCurveTo(30,66,30,44),e.quadraticCurveTo(30,14,50,14),e.quadraticCurveTo(70,14,70,44),e.quadraticCurveTo(70,66,80,76),e.closePath(),H(e,`#f0c030`),e.beginPath(),e.arc(50,82,8,0,Math.PI*2),H(e,`#f0c030`)},e=>{e.beginPath();for(let t=0;t<10;t++){let n=t%2?18:44,r=t/10*Math.PI*2-Math.PI/2;e.lineTo(50+Math.cos(r)*n,52+Math.sin(r)*n)}e.closePath(),H(e,`#ff60c0`)}],Le=[`#1830a0`,`#c02040`,`#108050`,`#d07010`,`#7020a0`,`#101010`,`#e0d8c0`];function Re(e,t,n){e.fillStyle=`#f4f4f4`,e.fillRect(-t/2-8,-n/2-8,t+16,n+16),[`#c0c0c0`,`#c0c000`,`#00c0c0`,`#00c000`,`#c000c0`,`#c00000`,`#0000c0`].forEach((r,i)=>{e.fillStyle=r,e.fillRect(-t/2+i*t/7,-n/2,t/7+1,n*.7)}),[`#0000c0`,`#111`,`#c000c0`,`#111`,`#00c0c0`,`#111`,`#c0c0c0`].forEach((r,i)=>{e.fillStyle=r,e.fillRect(-t/2+i*t/7,-n/2+n*.7,t/7+1,n*.08)}),e.fillStyle=`#101010`,e.fillRect(-t/2,-n/2+n*.78,t,n*.22),e.fillStyle=`#f0f0f0`,e.fillRect(-t/2+t*.16,-n/2+n*.78,t*.16,n*.22)}var ze=class{canvas=document.createElement(`canvas`);last=-1;stamp=0;update(e,t,n){let r=Math.min(1,720/Math.max(t,n)),i=Math.round(t*r),a=Math.round(n*r);if(e===this.last&&this.canvas.width===i)return!1;this.last=e,this.canvas.width=i,this.canvas.height=a;let o=this.canvas.getContext(`2d`),s=t=>{let n=Math.sin(e*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)};o.fillStyle=Le[Math.floor(s(1)*Le.length)],o.fillRect(0,0,i,a),o.strokeStyle=`rgba(255,255,255,0.18)`,o.lineWidth=10;for(let e=1;e<8;e++)o.strokeRect(i/2-e*i*.07,a/2-e*a*.07,e*i*.14,e*a*.14);let c=Ie[Math.floor(s(2)*Ie.length)],l=Ie[Math.floor(s(3)*Ie.length)],u=Math.min(i,a)*.28;for(let[e,t]of[[1,1],[-1,1],[1,-1],[-1,-1]])o.save(),o.translate(i/2+e*i*.3,a/2+t*a*.32),o.scale(e*u/100,t*u/100),o.translate(-50,-50),c(o),o.restore(),o.save(),o.translate(i/2+e*i*.36,a/2+(t>0?.04:-.04)*a),o.scale(e*u*.7/100,u*.7/100),o.translate(-50,-50),t>0&&l(o),o.restore();o.save(),o.translate(i/2,a/2),o.rotate((s(4)-.5)*.9);let d=i*.5,f=d*.75;return o.fillStyle=`rgba(0,0,0,0.45)`,o.fillRect(-d/2+10,-f/2+12,d+16,f+16),Re(o,d,f),o.restore(),this.stamp++,!0}},Be=900,Ve=new Float32Array(Be*2),He=new Float32Array(2048);function Ue(e,t){let n=i.synth;if(n.mode===1){let e=!1;if(m.ctx&&m.xy){m.xy.getFloatTimeDomainData(He);for(let t=0;t<64;t++)Math.abs(He[t*16])>.002&&(e=!0)}let t=2.6*n.gain;for(let r=0;r<Be;r++)if(e){let e=He[r*2%2011],i=He[(r*2+37)%2048],a=Math.atan2(i,e)+r*.0021*n.fx,o=Math.min(1.2,Math.hypot(e,i)*t);Ve[r*2]=Math.cos(a)*o,Ve[r*2+1]=Math.sin(a)*o}else Ve[r*2]=(Math.random()-.5)*.02,Ve[r*2+1]=(Math.random()-.5)*.02;return Ve}let r=e*n.drift,a=.82*(1+t*.15)*n.gain;for(let e=0;e<Be;e++){let t=e/899*Math.PI*2,i,o;if(n.mode===2){let e=n.fx/Math.max(1,n.fy),s=Math.cos(e*t*n.fy+r)*a;i=s*Math.cos(t*n.fy),o=s*Math.sin(t*n.fy)}else i=Math.sin(n.fx*t+r)*a,o=Math.sin(n.fy*t)*a;Ve[e*2]=i,Ve[e*2+1]=o}return Ve}function We(e,t,n,r,i){let a=e.length/2,o=n/r*2,s=0;for(let n=0;n<a-1;n++){let r=e[n*2]/t,a=e[n*2+1],c=e[n*2+2]/t,l=e[n*2+3],u=c-r,d=l-a,f=Math.hypot(u*t,d)||1e-6,p=Math.min(1.6,.012/f+.25);u/=f,d/=f;let m=-d*o/t,h=u*o,g=[[r+m,a+h,1],[r-m,a-h,-1],[c+m,l+h,1],[c+m,l+h,1],[r-m,a-h,-1],[c-m,l-h,-1]];for(let[e,t,n]of g)i[s++]=e,i[s++]=t,i[s++]=n,i[s++]=p}return s/4}var Ge=21576,Ke=[{id:`none`,name:`NONE`,ko:`원본`},{id:`paikabe`,name:`PAIK-ABE`,ko:`윤곽+색면`,a:`LINES`,b:`SMEAR`,hist:!0},{id:`ribbon`,name:`RIBBON`,ko:`흰 리본`,a:`LEVEL`,b:`WIDTH`},{id:`rutt`,name:`RUTT`,ko:`주사선 등고선`,a:`HEIGHT`,b:`LINES`},{id:`breakup`,name:`BREAK-UP`,ko:`픽셀 깨짐`,a:`BLOCK`,b:`AMOUNT`},{id:`poster2`,name:`POSTER 2`,ko:`두 색`,a:`COLORS`},{id:`lineart`,name:`LINE ART`,ko:`선화`,a:`BACK`},{id:`smear`,name:`SMEAR`,ko:`흔들린 번짐`,a:`AMOUNT`,b:`ANGLE`,hist:!0},{id:`color`,name:`COLOR`,ko:`컬러라이저`,a:`BANDS`,b:`CYCLE`},{id:`mosaic`,name:`MOSAIC`,ko:`모자이크`,a:`SIZE`,era:5},{id:`rgb`,name:`RGB`,ko:`RGB 어긋남`,a:`SHIFT`,era:7},{id:`solar`,name:`SOLAR`,ko:`솔라리`,a:`FOLD`,era:9},{id:`nega`,name:`NEGA`,ko:`네거티브`,era:10},{id:`thermal`,name:`THERMAL`,ko:`열화상`,era:11},{id:`paint`,name:`PAINT`,ko:`페인트박스`,a:`LEVELS`,era:12},{id:`neon`,name:`NEON`,ko:`네온`,a:`GAIN`,era:13},{id:`halftone`,name:`HALFTONE`,ko:`망점`,a:`CELL`,era:16},{id:`led`,name:`LED`,ko:`전광판`,a:`DOTS`,era:15},{id:`teletext`,name:`TELETEXT`,ko:`문자방송`,a:`COLS`,era:14},{id:`kaleido`,name:`KALEIDO`,ko:`만화경`,a:`SEGS`,era:4}],qe=e=>Ke.find(t=>t.id===e)??Ke[0],U=(e,t,n)=>e+(t-e)*n,Je={none:[`#ff3a30`,`#ffe02a`,`#30c8ff`,`#c060ff`],paikabe:[`#ff5aa0`,`#40e0ff`,`#ffe040`,`#ffffff`],ribbon:[`#ffffff`,`#ffe040`,`#40e0ff`,`#ff70c0`],rutt:[`#40ff60`,`#ffb020`,`#ffffff`,`#40c0ff`],breakup:[`#ff3a30`,`#30a0ff`,`#ffe02a`,`#ffffff`],poster2:[`#e02020`,`#2040e0`,`#f0c000`,`#10a050`],lineart:[`#1840c0`,`#c01818`,`#18a040`,`#101010`],smear:[`#ff8020`,`#c060ff`,`#40e0ff`,`#ffffff`],color:[`#ff3a30`,`#30ff80`,`#3080ff`,`#ffe02a`],neon:[`#ff40c0`,`#40e0ff`,`#a0ff40`,`#ffe040`],thermal:[`#ff4010`,`#ffe020`,`#20a0ff`,`#ffffff`],led:[`#ff3020`,`#40ff40`,`#ffb020`,`#40c0ff`],teletext:[`#00ffff`,`#ffff00`,`#ff00ff`,`#00ff00`]},Ye=e=>Je[e]??[`#ff3a30`,`#ffe02a`,`#30c8ff`,`#c060ff`],Xe=e=>e.colors?.[e.id]??`orig`,Ze=[`#ff4070`,`#40e0ff`,`#ffe040`,`#90ff50`,`#c070ff`,`#ff8020`,`#ffffff`,`#30ffc0`],Qe=[[`NONE`,`없음`],[`TORN`,`찢긴 선`],[`NEON`,`네온 번짐`],[`RAINBOW`,`무지개 흐름`],[`DOTS`,`행진 점선`],[`ELECTRIC`,`전기`],[`ECHO`,`메아리 고리`],[`CHROME`,`크롬`],[`RIBBON`,`흰 리본`],[`PAIK-ABE`,`가는 다중선`]],$e=[`CIRCLE`,`RING`,`RECT`,`DIAMOND`],et={tap:`TAP`,person:`PERSON`,luma:`LUMA`,chroma:`CHROMA`,shape:`SHAPE`};function tt(e,t){let n=e.track;if(!n||!n.done)return null;let r=n.frames.length,i=(t-n.start)*n.fps,a=e=>{if(e=Math.max(0,Math.min(r-1,e)),n.frames[e])return e;for(let t=1;t<r;t++){if(e-t>=0&&n.frames[e-t])return e-t;if(e+t<r&&n.frames[e+t])return e+t}return-1},o=a(Math.floor(i));if(o<0)return null;let s=a(Math.floor(i)+1);s<0&&(s=o);let c=s===o?0:Math.max(0,Math.min(1,i-Math.floor(i)));return{a:n.frames[o],b:n.frames[s],f:c,w:n.w,h:n.h,ia:o,ib:s,cx:n.cx[o]+(n.cx[s]-n.cx[o])*c,cy:n.cy[o]+(n.cy[s]-n.cy[o])*c}}var nt=new WeakMap;function rt(e,t){let n=e.track;if(!n||!n.done)return null;let r=nt.get(n);if(!r||r.done!==n.done){let e=n.frames.length,t=new Float32Array(e),i=new Float32Array(e);for(let r=0;r<e;r++){let a=0,o=0,s=0;for(let t=Math.max(0,r-3);t<=Math.min(e-1,r+3);t++)if(n.frames[t]){let e=4-Math.abs(t-r);a+=n.cx[t]*e,o+=n.cy[t]*e,s+=e}t[r]=s?a/s:NaN,i[r]=s?o/s:NaN}nt.set(n,r={done:n.done,x:t,y:i})}let i=n.frames.length,a=Math.max(0,Math.min(i-1,(t-n.start)*n.fps)),o=Math.floor(a),s=Math.min(i-1,o+1),c=a-o,l=r.x[o],u=r.x[s],d=r.y[o],f=r.y[s];if(Number.isNaN(l)||Number.isNaN(u)){let e=Number.isNaN(l)?s:o;return Number.isNaN(r.x[e])?null:[r.x[e],r.y[e]]}return[l+(u-l)*c,d+(f-d)*c]}function it(e){let t=e.track;return e.kind!==`tap`&&e.kind!==`person`?1:t?t.frames.length?t.done/t.frames.length:1:0}var W=()=>performance.now()/1e3,G={origin:0,get beat(){return 60/Math.max(30,i.music.bpm)},get step(){return this.beat/4},stepAt(e){return(e-this.origin)/this.step},timeOf(e){return this.origin+e*this.step},next(e,t=1){let n=Math.ceil(this.stepAt(e)/t-1e-4)*t;return this.timeOf(n)},beatAt(e){return this.stepAt(e)/4}},at={"4:3":[4,3],"9:16":[9,16],"1:1":[1,1],"16:9":[16,9]},ot=[[`#c070ff`,`#f4f0ff`,`#2a2aa0`,`#ffffff`],[`#40ff40`,`#40ff40`,`#40ff40`,`#40ff40`],[`#ff3030`,`#ffe030`,`#30e0ff`,`#ff40ff`],[`#ffffff`,`#000000`,`#ffffff`,`#000000`]],st=[`#1840c0`,`#18a040`,`#c01818`,`#c018a0`,`#e07010`,`#101010`],ct=I+`
uniform sampler2D uA;
uniform sampler2D uB;
uniform float uAmt;
void main(){ outColor = vec4(mix(texture(uA, vUv).rgb, texture(uB, vUv).rgb, uAmt), 1.); }
`,lt=I+`
uniform sampler2D uSrc;
uniform float uAmt;
void main(){
  vec3 c = texture(uSrc, vUv).rgb;
  // darker and greyer, with a faint checker so the cut-out reads as lifted off
  vec2 g = floor(vUv * uRes / 18.);
  float k = mod(g.x + g.y, 2.) * .035;
  outColor = vec4(mix(c, vec3(luma(c)) * .35 + k, uAmt), 1.);
}
`,ut=I+`void main(){ outColor = vec4(0., 0., 0., 1.); }`,dt=class{canvas;gl;kit;W=720;H=1280;cg=new Fe;ornament=new ze;anchors=new Map;snapOut=null;frame=0;fps=0;fpsAcc=0;fpsN=0;lastT=0;p={};texs=new WeakMap;rts=new Map;cgTex;standbyTex;labelTex;ornTex;ornStamp=-1;t={};flip={};maskW=0;maskH=0;beamVao;beamBuf;beamData=new Float32Array(Ge);grabbers=[];brush={x:0,y:0,vx:0,vy:0,active:!1,tool:0,startHold:!1};fieldLive=0;centres=new Map;lastLayers=[];constructor(){this.canvas=document.createElement(`canvas`),this.canvas.className=`program-canvas`;let e=this.canvas.getContext(`webgl2`,{antialias:!1,alpha:!1,preserveDrawingBuffer:!1,powerPreference:`high-performance`});if(!e)throw Error(`WebGL2 not supported`);this.gl=e,this.kit=new ee(e);let t=(e,t,n)=>this.p[t]=this.kit.program(e,t,n);t(te,`source`),t(L,`copy`),t(ne,`decay`),t(ie,`beam`,re),t(ae,`seed`),t(oe,`jfa`),t(se,`dist`),t(de,`color`),t(ue,`scan`),t(fe,`fb`),t(me,`cg`),t(le,`era`),t(ce,`analog`),t(ge,`objmask`),t(_e,`objcomp`),t(ye,`paikabe`),t(B,`ribbon`),t(be,`rutt`),t(xe,`breakup`),t(V,`reshoot`),t(Se,`poster2`),t(Ce,`lineart`),t(we,`smear`),t(Te,`tools`),t(Ee,`field`),t(Oe,`gen`),t(ct,`mix`),t(lt,`dim`),t(ut,`black`),t(De,`lookcol`),this.cgTex=this.kit.texture(),this.standbyTex=this.kit.texture(),this.labelTex=this.kit.texture(),this.ornTex=this.kit.texture(),this.beamVao=e.createVertexArray(),this.beamBuf=e.createBuffer(),e.bindVertexArray(this.beamVao),e.bindBuffer(e.ARRAY_BUFFER,this.beamBuf),e.bufferData(e.ARRAY_BUFFER,this.beamData.byteLength,e.DYNAMIC_DRAW);let n=this.p.beam.prog,r=e.getAttribLocation(n,`aPos`),a=e.getAttribLocation(n,`aAcross`),o=e.getAttribLocation(n,`aI`);e.enableVertexAttribArray(r),e.vertexAttribPointer(r,2,e.FLOAT,!1,16,0),e.enableVertexAttribArray(a),e.vertexAttribPointer(a,1,e.FLOAT,!1,16,8),e.enableVertexAttribArray(o),e.vertexAttribPointer(o,1,e.FLOAT,!1,16,12),e.bindVertexArray(null),this.setOutput(i.output.aspect,i.output.quality)}setOutput(e,t){let[n,r]=at[e],i=t===`fhd`?1920:t===`hd`?1280:960,a,o;n>=r?(a=i,o=Math.round(i*r/n/2)*2):(o=i,a=Math.round(i*n/r/2)*2),e===`4:3`&&(a=t===`fhd`?1440:t===`hd`?960:720,o=a*3/4),e===`1:1`&&(a=o=t===`fhd`?1080:t===`hd`?960:720),this.W=a,this.H=o,this.canvas.width=a,this.canvas.height=o;for(let e in this.t)this.kit.freeTarget(this.t[e]);for(let e of this.rts.values())this.freeRt(e);this.rts.clear(),this.t={};let s=(e,t=a,n=o,r)=>this.t[e]=this.kit.target(t,n,r);for(let e of[`a`,`b`,`c0`,`c1`,`era`,`col`,`sc`,`tl`,`h0`,`h1`,`rs`,`p0`,`p1`,`syn0`,`syn1`,`hold`,`snap`])s(e);this.maskW=Math.round(a/3),this.maskH=Math.round(o/3);for(let e of[`om`,`odist`])s(e,this.maskW,this.maskH);s(`j0`,this.maskW,this.maskH,this.gl.NEAREST),s(`j1`,this.maskW,this.maskH,this.gl.NEAREST),s(`f0`,Math.round(a/4),Math.round(o/4)),s(`f1`,Math.round(a/4),Math.round(o/4)),this.clearField(),this.cg.resize(a,o),this.upload(this.standbyTex,this.cg.standby,!0),this.upload(this.labelTex,this.cg.label,!0),this.ornStamp=-1}clearField(){let e=this.gl;for(let t of[`f0`,`f1`])e.bindFramebuffer(e.FRAMEBUFFER,this.t[t].fb),e.clearColor(.5,.5,0,0),e.clear(e.COLOR_BUFFER_BIT);e.clearColor(0,0,0,1),e.bindFramebuffer(e.FRAMEBUFFER,null),this.fieldLive=0}clearBrush(){this.clearField()}pp(e,t){let n=e+t;return(this.flip[n]=(this.flip[n]??0)^1)?[this.t[e],this.t[t]]:[this.t[t],this.t[e]]}upload(e,t,n=!1){let r=this.gl;r.bindTexture(r.TEXTURE_2D,e),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!0),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n);try{r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t)}catch{}r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1)}uploadR8(e,t,n,r){let i=this.gl;i.bindTexture(i.TEXTURE_2D,e),i.pixelStorei(i.UNPACK_ALIGNMENT,1),i.texImage2D(i.TEXTURE_2D,0,i.R8,n,r,0,i.RED,i.UNSIGNED_BYTE,t),i.pixelStorei(i.UNPACK_ALIGNMENT,4)}refreshStatic(){this.cg.drawStatic(),this.upload(this.standbyTex,this.cg.standby,!0),this.upload(this.labelTex,this.cg.label,!0)}texOf(e){let t=this.texs.get(e);if(t||(t={tex:this.kit.texture(),stamp:-1,ok:!1},this.texs.set(e,t)),t.stamp!==e.stamp){let n=e.element();n&&(this.upload(t.tex,n),t.ok=!0,t.stamp=e.stamp)}return t.ok?t.tex:null}fitOf(e){let[t,n]=e.size();return Ae(t,n,this.W/this.H)}mirrorOf(e){return+(e.s.kind===`camera`&&e.s.facing===`user`)}syn=0;synthTex(){return(this.syn?this.t.syn1:this.t.syn0).tex}renderSynth(e,t){let n=this.gl,r=this.syn?this.t.syn1:this.t.syn0,a=this.syn?this.t.syn0:this.t.syn1;this.syn^=1,this.kit.draw(this.p.decay,a,{uSrc:r.tex,uDecay:i.synth.persist});let o=We(Ue(e,t),this.W/this.H,i.synth.width*(this.H/480),this.H,this.beamData);n.bindFramebuffer(n.FRAMEBUFFER,a.fb),n.viewport(0,0,a.w,a.h),n.useProgram(this.p.beam.prog);let s=F(i.synth.color);n.uniform3f(this.p.beam.loc(`uColor`),s[0]*.5,s[1]*.5,s[2]*.5),n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE),n.bindVertexArray(this.beamVao),n.bindBuffer(n.ARRAY_BUFFER,this.beamBuf),n.bufferSubData(n.ARRAY_BUFFER,0,this.beamData,0,o*4),n.drawArrays(n.TRIANGLES,0,o),n.bindVertexArray(null),n.disable(n.BLEND)}srcU(e){return{uTime:e,uFlipY:0,uLabel:this.labelTex,uColor:F(i.matte.color)}}drawPlayer(e,t,n){let r=this.texOf(e);if(!r)return this.kit.draw(this.p.black,t,{});this.kit.draw(this.p.source,t,{...this.srcU(n),uKind:N(1),uTex:r,uFit:this.fitOf(e),uMirror:this.mirrorOf(e)})}drawBg(e,t,n,r){let i=this.kit;if(e.kind===`player`)return this.drawPlayer(e.p,t,n);if(e.kind===`gen`)return i.draw(this.p.gen,t,{uTime:n,uMode:N(e.id),uBeat:r});if(e.kind===`beam`)return i.draw(this.p.source,t,{...this.srcU(n),uKind:N(1),uTex:this.synthTex(),uFit:[1,1,0,0],uMirror:0});if(e.kind===`matte`)return e.pattern===13?(this.ornament.update(Math.floor(r),this.W,this.H),this.ornament.stamp!==this.ornStamp&&(this.upload(this.ornTex,this.ornament.canvas),this.ornStamp=this.ornament.stamp),i.draw(this.p.source,t,{...this.srcU(n),uKind:N(1),uTex:this.ornTex,uFit:[1,1,0,0],uMirror:0})):i.draw(this.p.source,t,{...this.srcU(n),uKind:N(2),uPattern:N(e.pattern),uTex:this.labelTex});i.draw(this.p.black,t,{})}distance(e,t,n){this.kit.draw(this.p.seed,this.t.j0,{uMask:e.tex});let r=this.t.j0,i=this.t.j1,a=1;for(;a<Math.max(this.maskW,this.maskH);)a*=2;for(a/=2;a>=1;a/=2)this.kit.draw(this.p.jfa,i,{uSrc:r.tex,uStep:a}),[r,i]=[i,r];this.kit.draw(this.p.dist,t,{uSrc:r.tex,uMaxD:n})}rtOf(e,t=e.id){let n=this.rts.get(t);if(!n){let e=Math.round(this.W/2),r=Math.round(this.H/2);n={raw:this.kit.target(e,r),l0:this.kit.target(e,r),l1:this.kit.target(e,r),flip:0,out:null,lc:null,frame:-1,ma:this.kit.texture(),mb:this.kit.texture(),ka:null,kb:null,used:0},n.out=n.raw,this.rts.set(t,n)}return n.used=this.frame,n}freeRt(e){this.kit.freeTarget(e.raw),this.kit.freeTarget(e.l0),this.kit.freeTarget(e.l1),e.lc&&this.kit.freeTarget(e.lc),this.gl.deleteTexture(e.ma),this.gl.deleteTexture(e.mb)}dress(t,n,r,i,a=t.id){let o=this.rtOf(t,a);if(o.frame===this.frame)return o;o.frame=this.frame,this.drawPlayer(n,o.raw,r);let s=qe(t.look.id),c=t.look.a,l=t.look.b,u=this.kit,d=o.raw,f=()=>(o.flip^=1,o.flip?o.l0:o.l1),p=()=>o.flip?o.l1:o.l0;if(s.id===`none`)return o.out=d,this.recolour(t,o,i);let m=(()=>{let t=f(),n={uSrc:d.tex,uTime:r};if(s.id===`paikabe`)u.draw(this.p.paikabe,t,{...n,uHist:p().tex,uLines:Math.round(U(1,6,c)),uField:.85,uSmear:U(0,.95,l)});else if(s.id===`ribbon`)u.draw(this.p.ribbon,t,{...n,uLevel:U(.2,.8,c),uWidth:U(.03,.18,l),uFringe:1});else if(s.id===`rutt`)u.draw(this.p.rutt,t,{...n,uLines:Math.round(U(24,100,l)),uHeight:U(.04,.3,c),uColorMode:N(0)});else if(s.id===`breakup`)u.draw(this.p.breakup,t,{...n,uBlock:U(.02,.12,c),uAmount:U(.2,1,l)});else if(s.id===`poster2`)u.draw(this.p.poster2,t,{...n,uPair:N(Math.min(3,Math.floor(c*4)))});else if(s.id===`lineart`)u.draw(this.p.lineart,t,{...n,uBg:F(st[(Math.floor(i)+Math.floor(c*6))%6]),uCircles:1});else if(s.id===`smear`)u.draw(this.p.smear,t,{...n,uHist:p().tex,uAngle:U(-3.1,3.1,l),uAmount:U(.2,1,c)});else if(s.id===`color`){let e=[];for(let t=0;t<7;t++)e.push(...pt([0,.08,.16,.33,.5,.66,.83][t]+r*U(0,.5,l),1,1));u.setArray(this.p.color,`uPal`,3,e),u.draw(this.p.color,t,{uSrc:d.tex,uIn0:d.tex,uIn1:d.tex,uIn2:d.tex,uIn3:d.tex,uMixOn:[0,0,0,0],uBands:N(Math.round(U(2,7,c))),uGain:1,uContrast:1.2,uSmooth:0,uNeg:0,uMix:0})}else if(s.era!==void 0){let n=e.map((e,t)=>+(t===s.era)),i=e[s.era],a=e.map(e=>e.def);a[s.era]=i.step>=1?Math.round(U(i.min,i.max,c)):U(i.min,i.max,c),u.setArray(this.p.era,`uOn`,1,n),u.setArray(this.p.era,`uAmt`,1,a),u.draw(this.p.era,t,{uCur:d.tex,uAtlas:d.tex,uHead:0,uFilled:1,uTime:r})}else return d;return t})();return d=m,o.out=m,this.recolour(t,o,i)}recolour(e,t,n){let r=Xe(e.look);if(r===`orig`)return t;t.lc||=this.kit.target(t.raw.w,t.raw.h);let i=r===`rainbow`?2:r===`neg`?3:r===`mono`?4:1;return this.kit.draw(this.p.lookcol,t.lc,{uSrc:t.out.tex,uMode:N(i),uCol:i===1?F(r):[1,1,1],uBeat:n}),t.out=t.lc,t}maskTex(e,t,n){let r=tt(e,n);return r?(t.ka!==r.a&&(this.uploadR8(t.ma,r.a,r.w,r.h),t.ka=r.a),t.kb!==r.b&&(this.uploadR8(t.mb,r.b,r.w,r.h),t.kb=r.b),{a:t.ma,b:t.mb,f:r.f,cx:r.cx,cy:r.cy}):null}sourceToScreen(e,t,n){let r=this.fitOf(e.p),i=(t-.5)/r[0]+.5,a=(1-n-.5)/r[1]+.5,o=this.W/this.H,s=(i-.5)*2*o*e.scale,c=(a-.5)*2*e.scale,l=e.rot*Math.PI/180;return[s,c]=[s*Math.cos(l)-c*Math.sin(l),s*Math.sin(l)+c*Math.cos(l)],s+=e.x*o,c+=e.y,[s/(2*o)+.5,c/2+.5]}screenToSource(e,t,n,r){let i=t,a=1-n;if(r){let e=this.W/this.H,t=(i-.5)*2*e-r.x*e,n=(a-.5)*2-r.y,o=-r.rot*Math.PI/180;[t,n]=[t*Math.cos(o)-n*Math.sin(o),t*Math.sin(o)+n*Math.cos(o)],i=t/(2*e*r.scale)+.5,a=n/(2*r.scale)+.5}let o=this.fitOf(e),s=(i-.5)*o[0]+.5,c=(a-.5)*o[1]+.5;return this.mirrorOf(e)&&(s=1-s),[s,1-c]}layerAt(e,t){let n=this.lastLayers;for(let r=n.length-1;r>=0;r--){let i=n[r],[a,o]=this.screenToSource(i.p,e,t,i);if(a<0||a>1||o<0||o>1)continue;if(i.g.kind!==`tap`&&i.g.kind!==`person`){let n=this.centres.get(i.key);if(n&&Math.hypot((e-n[0])*(this.W/this.H),1-t-n[1])<.3*i.scale)return i;continue}let s=tt(i.g,i.p.shownPos(W()));if(!s)continue;let c=Math.min(s.w-1,Math.max(0,Math.floor(a*s.w))),l=Math.min(s.h-1,Math.max(0,Math.floor(o*s.h)));if(s.a[l*s.w+c]>90)return i}let r=null,i=.12;for(let a=n.length-1;a>=0;a--){let o=this.centres.get(n[a].key);if(!o)continue;let s=Math.hypot((e-o[0])*this.W,(1-t-o[1])*this.H)/Math.min(this.W,this.H);s<i&&(i=s,r=n[a])}return r}anchor(e,t){let n=[.5,.5];(e.g.kind===`tap`||e.g.kind===`person`)&&(n=rt(e.g,t)??this.anchors.get(e.key)??n),this.anchors.set(e.key,n);let[r,i]=this.sourceToScreen({...e,x:0,y:0},n[0],n[1]);e.x-=(r-.5)*2,e.y-=(i-.5)*2}drawLayer(e,t,n,r,i,a,o){let s=this.kit,c=e.g,l=this.dress(c,e.p,n,r,o),u=e.p.shownPos(n);e.anchor&&a&&this.anchor(e,u);let d=this.fitOf(e.p),f={uPos:[e.x*(this.W/this.H),e.y],uScale:e.scale,uRotA:e.rot*Math.PI/180,uTiltA:e.tilt*Math.PI/180,uFit:d,uMirror:this.mirrorOf(e.p),uTime:n},p=0,m=null;if(c.kind===`tap`||c.kind===`person`){if(m=this.maskTex(c,l,u),!m)return t}else p=c.kind===`luma`?1:c.kind===`chroma`?2:3;s.draw(this.p.objmask,this.t.om,{...f,uMaskA:m?.a??this.labelTex,uMaskB:m?.b??this.labelTex,uMaskF:m?.f??0,uObj:l.raw.tex,uKind:N(p),uLuma:[c.key.lo,c.key.hi],uInvert:+!!c.key.invert,uKeyColor:F(c.key.color),uShape:N(c.shape.type),uSize:c.shape.size,uRing:c.shape.ring,uSpin:c.shape.spin});let h=m?this.sourceToScreen(e,m.cx,m.cy):this.sourceToScreen(e,.5,.5);a&&this.centres.set(e.key,h);let g=c.line>0,_=this.W/this.maskW,v=140/_+8;g&&this.distance(this.t.om,this.t.odist,v);let y=[];for(let e of ot[c.linePal%ot.length])y.push(...F(e));s.setArray(this.p.objcomp,`uPal`,3,y);let[,b]=this.pp(`c0`,`c1`);return s.draw(this.p.objcomp,b,{...f,uCur:t.tex,uObj:l.out.tex,uMask:this.t.om.tex,uDist:this.t.odist.tex,uHasDist:+!!g,uMaxD:v*_,uLine:N(c.line),uLineSize:c.lineSize,uColor:e.tint??F(c.color),uTint:e.tint?[...e.tint,1]:[0,0,0,0],uLineTint:e.tint?[...e.tint,1]:c.lineColor&&c.lineColor!==`auto`?[...F(c.lineColor),1]:[0,0,0,0],uCenter:h,uFillMode:N(0),uFill:this.labelTex,uFillFit:[1,1,0,0],uFillColor:[1,1,1],uSel:+!!e.sel,uPulse:i}),b}snapshot(e,t,n=128,r=!1){let i=W(),a=t.shownPos(i),o=0,s=0,c=1,l=1;if(e.kind===`tap`||e.kind===`person`){let t=tt(e,a);if(!t)return``;let n=t.w,r=t.h,i=-1,u=-1;for(let e=0;e<t.h;e++)for(let a=0;a<t.w;a++)t.a[e*t.w+a]>90&&(a<n&&(n=a),a>i&&(i=a),e<r&&(r=e),e>u&&(u=e));if(i<0)return``;[o,s,c,l]=[n/t.w,r/t.h,(i+1)/t.w,(u+1)/t.h]}let u=this.fitOf(t),d=this.W,f=this.H,p=(c-o)/u[0]*d,m=(l-s)/u[1]*f,h=Math.min(6,.76*Math.min(d,f)/Math.max(1,p,m)),g=((o+c)/2-.5)/u[0]+.5,_=(1-(s+l)/2-.5)/u[1]+.5,v={key:-1,g:e,p:t,x:-2*(g-.5)*h,y:-2*(_-.5)*h,scale:h,rot:0,tilt:0,sel:!1};this.snapOut&&this.snapOut.w===n||(this.snapOut&&this.kit.freeTarget(this.snapOut),this.snapOut=this.kit.target(n,n));let y=this.gl,b=d>f?f/d:1,x=f>d?d/f:1,S=e=>{e?(y.bindFramebuffer(y.FRAMEBUFFER,this.t.snap.fb),y.viewport(0,0,this.t.snap.w,this.t.snap.h),y.clearColor(1,1,1,1),y.clear(y.COLOR_BUFFER_BIT),y.clearColor(0,0,0,1)):this.kit.draw(this.p.black,this.t.snap,{});let t=this.drawLayer({...v},this.t.snap,i,0,0,!1,`snap`);this.kit.draw(this.p.source,this.snapOut,{...this.srcU(i),uKind:N(1),uTex:t.tex,uFit:[b,x,0,0],uMirror:0});let r=new Uint8Array(n*n*4);return y.bindFramebuffer(y.FRAMEBUFFER,this.snapOut.fb),y.readPixels(0,0,n,n,y.RGBA,y.UNSIGNED_BYTE,r),y.bindFramebuffer(y.FRAMEBUFFER,null),r},C=S(!1),w=r?S(!0):null,T=document.createElement(`canvas`);T.width=T.height=n;let E=T.getContext(`2d`),D=E.createImageData(n,n);for(let e=0;e<n;e++){let t=(n-1-e)*n*4,r=e*n*4;for(let e=0;e<n*4;e+=4){let n=C[t+e],i=C[t+e+1],a=C[t+e+2];if(!w){D.data[r+e]=n,D.data[r+e+1]=i,D.data[r+e+2]=a,D.data[r+e+3]=255;continue}let o=(w[t+e]-n+w[t+e+1]-i+w[t+e+2]-a)/3,s=Math.max(0,Math.min(255,255-o)),c=s>0?255/s:0;D.data[r+e]=Math.min(255,n*c),D.data[r+e+1]=Math.min(255,i*c),D.data[r+e+2]=Math.min(255,a*c),D.data[r+e+3]=s}}return E.putImageData(D,0,0),r?T.toDataURL(`image/png`):T.toDataURL(`image/jpeg`,.82)}render(t){let n=this.kit,r=W(),a=this.lastT?r-this.lastT:.016;this.lastT=r,this.fpsAcc+=a,this.fpsN++,this.fpsAcc>.5&&(this.fps=this.fpsN/this.fpsAcc,this.fpsAcc=0,this.fpsN=0),this.frame++;let o=t.beat;t.bg.kind===`beam`&&this.renderSynth(r,t.pulse),this.drawBg(t.bg,this.t.a,r,o);let s=this.t.a,c=(e,t)=>{let[,i]=this.pp(`c0`,`c1`);n.draw(this.p[e],i,{uSrc:s.tex,uTime:r,...t}),s=i};if(t.bgFx){let a=i.era;if(a.on[3]||a.on[4]){let t=e.map((e,t)=>(t===3||t===4)&&a.on[t]?1:0);n.setArray(this.p.era,`uOn`,1,t),n.setArray(this.p.era,`uAmt`,1,a.amt),n.draw(this.p.era,this.t.era,{uCur:s.tex,uAtlas:s.tex,uHead:0,uFilled:1,uTime:r}),s=this.t.era}let o=i.moor;o.breakup.on&&c(`breakup`,{uBlock:o.breakup.block,uAmount:o.breakup.amount});let l=i.color;if(l.on){let e=[];for(let t=0;t<7;t++)e.push(...pt(l.hues[t]+r*l.cycle,l.sat,1));n.setArray(this.p.color,`uPal`,3,e),n.draw(this.p.color,this.t.col,{uSrc:s.tex,uIn0:s.tex,uIn1:s.tex,uIn2:s.tex,uIn3:s.tex,uMixOn:[0,0,0,0],uBands:N(Math.max(2,Math.min(7,Math.round(l.bands)))),uGain:l.gain,uContrast:l.contrast,uSmooth:+!!l.smooth,uNeg:+!!l.neg,uMix:0}),s=this.t.col}let u=i.fb;if(u.on){let[e,i]=this.pp(`h0`,`h1`);n.draw(this.p.fb,i,{uCur:s.tex,uHist:e.tex,uMode:N(u.mode),uSize:u.size,uRotA:u.rot,uHue:u.hue,uDecay:u.decay,uAmt:u.mix,uPulse:t.pulse,uTime:r}),s=i}o.reshoot.on&&(n.draw(this.p.reshoot,this.t.rs,{uSrc:s.tex,uTint:o.reshoot.tint,uZoom:o.reshoot.zoom,uCurve:o.reshoot.curve,uTime:r}),s=this.t.rs)}t.dim>0&&c(`dim`,{uAmt:t.dim}),this.centres.clear(),this.lastLayers=t.layers;for(let e of t.layers)s=this.drawLayer(e,s,r,o,t.pulse,!0);for(let[e,t]of this.rts)this.frame-t.used>120&&(this.freeRt(t),this.rts.delete(e));let l=i.scan,u=i.magnet.list.slice(0,2);if(l.on&&t.bgFx||u.length){let e=i.magnet,a=this.W/this.H,o=1+t.pulse*e.audio*2.5,c=[],d=[0,0,0,0];for(u.forEach((t,n)=>{let i=t.x,s=t.y;e.drift&&(i+=Math.sin(r*.31+n*2)*.12,s+=Math.cos(r*.23+n)*.12),c.push(i*a,s,t.s*o,t.r),d[n]=t.type});c.length<16;)c.push(0,0,0,1);let f=l.on&&t.bgFx,p=[];for(let e of l.osc)p.push(e.freq,e.rate,f?e.amp:0,e.wave);n.setArray(this.p.scan,`uMag`,4,c),n.setArray(this.p.scan,`uOsc`,4,p);let m=f?l:{hSize:1,vSize:1,hPos:0,vPos:0,rot:0,lines:0};n.draw(this.p.scan,this.t.sc,{uSrc:s.tex,uGeo:[m.hSize,m.vSize,m.hPos,m.vPos],uRot:m.rot*Math.PI/180,uLines:f?l.lines:u.length?262:0,uOscTarget:l.osc.map(e=>e.target),uAudio:t.pulse,uMagType:d,uMagN:N(u.length),uPurity:u.length?e.purity:0,uTime:r}),s=this.t.sc}let d=this.brush;if(d.active||this.fieldLive>0){d.active&&d.startHold&&(n.draw(this.p.copy,this.t.hold,{uSrc:s.tex}),d.startHold=!1);let e=.008+(1-i.tools.smear)*.05,[t,a]=this.pp(`f0`,`f1`);n.draw(this.p.field,a,{uPrev:t.tex,uBrush:[d.x,d.y,i.tools.size*(d.tool===2?.6:1),+!!d.active],uVel:[d.vx,d.vy],uTool:N(d.tool),uRelax:e}),d.vx*=.5,d.vy*=.5,this.fieldLive=d.active?400:this.fieldLive-1,n.draw(this.p.tools,this.t.tl,{uSrc:s.tex,uField:a.tex,uHold:this.t.hold.tex,uTime:r}),s=this.t.tl}let f=t.bg.kind===`player`?t.bg.p.pos(r):r,p=this.cg.render(r,f);p&&this.upload(this.cgTex,this.cg.canvas,!0);let[m,h]=this.pp(`p0`,`p1`);n.draw(this.p.cg,h,{uSrc:s.tex,uCg:this.cgTex,uOn:+!!p});let g=i.ui.crt?i.vhs:ft;if(n.draw(this.p.analog,null,{uSrc:h.tex,uPrev:m.tex,uStandby:this.standbyTex,uTime:r,uBleed:g.bleed,uScan:g.scan,uTrack:g.track,uChroma:g.chroma,uRoll:0,uLines:i.ui.crt?g.lines:0,uInterlace:g.interlace,uNoise:g.noise,uSat:g.sat,uBox43:+!!g.box43,uHead:g.head,uField:this.frame%2,uWarm:g.warm,uInvert:0,uTear:0,uSnow:0,uBars:0,uStandbyOn:0,uJitter:0,uFlipY:0,uClean:+!i.ui.crt},[this.W,this.H]),this.grabbers.length){let e=document.createElement(`canvas`),t=200/Math.max(this.W,this.H);e.width=Math.round(this.W*t),e.height=Math.round(this.H*t),e.getContext(`2d`).drawImage(this.canvas,0,0,e.width,e.height);let n=e.toDataURL(`image/jpeg`,.75);this.grabbers.splice(0).forEach(e=>e(n))}}grab(e=500){return new Promise(t=>{this.grabbers.push(t),setTimeout(()=>t(``),e)})}},ft={bleed:0,scan:0,track:0,chroma:0,roll:0,lines:0,interlace:0,noise:0,sat:1,box43:!1,head:0,warm:0};function pt(e,t,n){e=(e%1+1)%1;let r=r=>{let i=(r+e*6)%6;return n-n*t*Math.max(0,Math.min(i,4-i,1))};return[r(5),r(3),r(1)]}var mt=[{name:`I–vi–IV–V`,ko:`밝게 도는`,deg:[0,5,3,4]},{name:`i–VI–III–VII`,ko:`어둡게 도는`,deg:[0,5,2,6]},{name:`I–IV`,ko:`두 화음`,deg:[0,3,0,3]},{name:`DRONE`,ko:`한 화음`,deg:[0,0,0,0]}],ht=[{hp:30,lp:420,oct:36},{hp:150,lp:1700,oct:48},{hp:400,lp:4500,oct:60},{hp:1500,lp:16e3,oct:72}],gt=()=>n[i.music.scale]??n[0];function _t(){let e=gt();return e.steps.length===7?e.steps:e.minor?[0,2,3,5,7,8,10]:[0,2,4,5,7,9,11]}function vt(){return gt().steps.map(e=>(e+i.music.root)%12)}function yt(e){if(e<0)return 0;let t=vt(),n=0,r=99;for(let i=-6;i<=6;i++){let a=Math.abs(i);t.includes(((e+i)%12+12)%12)&&a<r&&(r=a,n=i)}let a=i.music.root;for(let t of[-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6])if(Math.abs(t)===r&&[a,(a+7)%12].includes(((e+t)%12+12)%12))return t;return n}function bt(e){return Math.floor(G.beatAt(e)/4)}function xt(e){let t=(mt[i.music.prog]??mt[0]).deg[(bt(e)%4+4)%4],n=_t();return[0,2,4,6].map(e=>(n[(t+e)%7]+i.music.root)%12)}function St(e,t,n){let r=xt(e),i=r[(t%r.length+r.length)%r.length],a=Math.floor(n/12)*12+i;return a<n-6&&(a+=12),a>n+6&&(a-=12),a}function Ct(e){let t=e/G.beat,n=4,r=99;for(let e of[1,2,4,8,16]){let i=Math.abs(Math.log2(Math.max(.01,t)/e));i<r&&(r=i,n=e)}return n}function wt(e){if(!e||e.every(e=>!e))return 0;let t=new Set(vt()),n=i.music.root,r=0,a=-1;for(let i=-6;i<=6;i++){let o=0;for(let n=0;n<12;n++)t.has(((n+i)%12+12)%12)&&(o+=e[n]);((e.indexOf(Math.max(...e))+i)%12+12)%12===n&&(o+=.04),o-=Math.abs(i)*.004,o>a&&(a=o,r=i)}return r}function Tt(e=4096){let t=new Float32Array(e),n=.79;for(let r=0;r<e;r++){let i=r/(e-1)*2-1,a=Math.abs(i),o=a<=n?a:n+.09999999999999998*Math.tanh((a-n)/.09999999999999998);t[r]=Math.sign(i)*o}return t}function Et(e,t,n){let r=e.sampleRate,i=Math.floor(r*t),a=e.createBuffer(2,i,r);for(let e=0;e<2;e++){let t=a.getChannelData(e);for(let e=0;e<i;e++)t[e]=(Math.random()*2-1)*(1-e/i)**n*(e<r*.004?e/(r*.004):1)}return a}function Dt(e){let t=e.an,n=0;return e.sound.auto&&t&&!t.silent&&(n=t.chroma?.some(e=>e>0)?wt(t.chroma):t.pc>=0?yt(t.pc):0),Math.max(-12,Math.min(12,n+e.sound.shift))}function Ot(e){return e.sound.mode===`orig`||e.sound.mode===`reson`?Dt(e):0}function kt(e){let t=e.an;return!!t&&t.conf>.6&&t.midi>0&&Math.max(...t.chroma??[0])>.35}function At(e){return 2**(Ot(e)/12)}function jt(e){return Ct((e.loopOut-e.loopIn)/At(e))*G.beat}function Mt(e,t){let n=jt(e);return G.origin+Math.floor((t-G.origin)/n)*n}var Nt={breakup:{dark:.6,echo:.25},mosaic:{dark:.5,echo:.2},led:{dark:.4,echo:.2},teletext:{dark:.5,echo:.2},smear:{chorus:.8,hall:.2},rutt:{chorus:.6,hall:.15},kaleido:{chorus:.5,echo:.2},paikabe:{hall:.3,echo:.2},neon:{hall:.3}},Pt=class{e;g;in;out;hp;lp;res=[];resDry;tone;chorusWet;chorusDepth;echoSend;hallSend;nextCycle=-1;nextHit=-1;nextGrain=0;lastBar=-9999;hits=0;row=1;alive=!0;sources=new Set;constructor(e,t,n){this.e=e,this.g=t;let r=e.ctx,i=(e=1)=>{let t=r.createGain();return t.gain.value=e,t};this.in=i(),this.out=i(0),this.hp=r.createBiquadFilter(),this.hp.type=`highpass`,this.lp=r.createBiquadFilter(),this.lp.type=`lowpass`;let a=i();this.resDry=i(1),this.in.connect(this.resDry).connect(a);let o=r.createBiquadFilter();o.type=`lowpass`,o.frequency.value=3500,o.Q.value=.5;for(let e=0;e<4;e++){let e=r.createBiquadFilter();e.type=`bandpass`,e.Q.value=18;let t=i(0);this.in.connect(e).connect(t).connect(o),this.res.push(e),e.mk=t}o.connect(a),a.connect(this.hp).connect(this.lp),this.tone=r.createBiquadFilter(),this.tone.type=`lowpass`,this.tone.frequency.value=18e3,this.tone.Q.value=.4,this.lp.connect(this.tone),this.chorusWet=i(0),this.chorusDepth=i(0);let s=r.createOscillator();s.frequency.value=.18+Math.random()*.08,s.connect(this.chorusDepth),s.start(),this.sources.add(s);for(let[e,t,n]of[[.016,-.7,1],[.023,.7,-1]]){let a=r.createDelay(.1);a.delayTime.value=e;let o=i(n);this.chorusDepth.connect(o).connect(a.delayTime);let s=r.createStereoPanner();s.pan.value=t,this.tone.connect(a).connect(s).connect(this.chorusWet)}this.tone.connect(this.out),this.chorusWet.connect(this.out),this.out.connect(e.masterIn),this.echoSend=i(0),this.out.connect(this.echoSend).connect(e.echoIn),this.hallSend=i(0),this.out.connect(this.hallSend).connect(e.hallIn),this.setRow(n),this.applyMode()}setRow(e){this.row=e;let t=ht[Math.max(0,Math.min(3,e))],n=this.e.ctx.currentTime;this.hp.frequency.setTargetAtTime(t.hp,n,.05),this.lp.frequency.setTargetAtTime(t.lp,n,.05)}applyMode(){let e=this.e.ctx.currentTime,t=this.g.sound.mode===`reson`;this.resDry.gain.setTargetAtTime(t?.03:1,e,.05);for(let n of this.res)n.mk.gain.setTargetAtTime(t?4.5:0,e,.05);let n=Nt[this.g.look.id]??{};this.tone.frequency.setTargetAtTime(n.dark?9e3-n.dark*6500:18e3,e,.08),this.chorusWet.gain.setTargetAtTime((n.chorus??0)*.45,e,.08),this.chorusDepth.gain.setTargetAtTime((n.chorus??0)*.0025,e,.08),this.echoSend.gain.setTargetAtTime((n.echo??0)*.8,e,.05),this.hallSend.gain.setTargetAtTime((this.g.sound.mode===`pad`?.8:t?.45:.15)+(n.hall??0),e,.05),this.lastBar=-9999}level(e){let t=this.g,n={orig:1,reson:1.6,pulse:1.1,pad:.9,mute:0}[t.sound.mode],r=(t.an?.normGain??1)*t.sound.gain*n/Math.sqrt(Math.max(1,e));this.out.gain.setTargetAtTime(Math.min(4,r),this.e.ctx.currentTime,.08)}at(e){let t=this.e.ctx;return Math.max(t.currentTime,t.currentTime+(e-W()))}play(e,t,n,r,i=.012){let a=this.g.src.audio;if(!a||n<=.01||t>=a.duration)return;let o=this.e.ctx,s=this.at(e),c=o.createBufferSource();c.buffer=a,c.playbackRate.value=r;let l=o.createGain();l.gain.setValueAtTime(0,s),l.gain.linearRampToValueAtTime(1,s+i),l.gain.setValueAtTime(1,s+Math.max(i,n-i*2)),l.gain.linearRampToValueAtTime(0,s+n),c.connect(l).connect(this.in),c.start(s,t,n*r+.02),this.sources.add(c),c.onended=()=>this.sources.delete(c)}ref(){let e=this.g.an;return e&&e.conf>.25&&e.midi?e.midi:ht[this.row].oct+12}pitchRate(e,t){let n=this.g,r;return r=kt(n)?St(e,t,this.ref()+Dt(n))-this.ref():Dt(n)+[0,12,0,-12][t%4],Math.max(.5,Math.min(2,2**(r/12)))}schedule(e,t){let n=this.g;if(!this.alive||n.sound.mode===`mute`||!n.src.audio)return;let r=At(n),i=jt(n),a=n.loopOut-n.loopIn,o=bt(t);if(o!==this.lastBar&&n.sound.mode===`reson`){this.lastBar=o;let e=this.at(G.timeOf(o*16)),t=ht[this.row].oct+12;this.res.forEach((n,r)=>n.frequency.setTargetAtTime(440*2**((St(G.timeOf(o*16),r,t)-69)/12),e,.05))}if(n.sound.mode===`orig`||n.sound.mode===`reson`){if(this.nextCycle<0){let t=G.next(e,4),o=Mt(n,t),s=(t-o)*r;s<a-.05&&this.play(t,n.loopIn+s,Math.min(a/r,i)-(t-o),r),this.nextCycle=o+i}for(;this.nextCycle<t;)this.play(this.nextCycle,n.loopIn,Math.min(a/r,i),r),this.nextCycle+=i}else if(n.sound.mode===`pulse`){let r=Math.max(1,Math.round(i/G.step)),o=n.an?.onsets??[],s=new Map;if(o.length)o.forEach(e=>s.set(Math.round(e/a*r)%r,e));else for(let e=0;e<r;e+=2)s.set(e,e/r*a);for(this.nextHit<0&&(this.nextHit=G.next(e,1));this.nextHit<t;){let e=this.nextHit,t=Math.round((e-Mt(n,e))/G.step)%r,i=s.get(t);if(i!==void 0){let t=this.pitchRate(e,this.hits++);this.play(e,n.loopIn+Math.min(i,a-.05),Math.min(.24,G.step*1.7),t,.01)}this.nextHit+=G.step}}else if(n.sound.mode===`pad`)for(this.nextGrain<e&&(this.nextGrain=e);this.nextGrain<t;){let e=this.nextGrain,t=this.pitchRate(e,Math.floor(Math.random()*4)),r=.18+Math.random()*.14;this.play(e,n.loopIn+Math.random()*Math.max(.01,a-r*t),r,t,r*.45),this.nextGrain+=1/14*(.6+Math.random()*.8)}}reset(){this.nextCycle=-1,this.nextHit=-1,this.lastBar=-9999,this.hush(),this.applyMode()}hush(){let e=this.e.ctx.currentTime;for(let t of this.sources)if(!(t instanceof OscillatorNode))try{t.stop(e+.03)}catch{}}dispose(){this.alive=!1;let e=this.e.ctx.currentTime;this.out.gain.setTargetAtTime(0,e,.03),setTimeout(()=>{for(let e of this.sources)try{e.stop()}catch{}this.out.disconnect()},300)}},Ft=new class{ctx=null;masterIn;echoIn;hallIn;vol;voices=new Map;want=[];sig=``;constructor(){m.whenReady(e=>this.init(e))}init(e){this.ctx=e;let t=(t=1)=>{let n=e.createGain();return n.gain.value=t,n};this.masterIn=t(),this.echoIn=t();let n=e.createDelay(2),r=t(.4),a=e.createBiquadFilter();a.type=`lowpass`,a.frequency.value=2600,this.echoIn.connect(n).connect(a).connect(r).connect(n),a.connect(this.masterIn);let o=()=>n.delayTime.setTargetAtTime(G.step*3,e.currentTime,.2);o(),setInterval(o,1e3),this.hallIn=t();let s=e.createConvolver();s.buffer=Et(e,3.8,2.4),this.hallIn.connect(s).connect(t(.6)).connect(this.masterIn);let c=e.createBiquadFilter();c.type=`highpass`,c.frequency.value=40;let l=e.createDynamicsCompressor();l.threshold.value=-22,l.knee.value=18,l.ratio.value=2,l.attack.value=.01,l.release.value=.25;let u=e.createDynamicsCompressor();u.threshold.value=-4,u.knee.value=0,u.ratio.value=20,u.attack.value=.002,u.release.value=.1,this.vol=t(i.music.vol);let d=e.createWaveShaper();d.curve=Tt(),this.masterIn.connect(c).connect(l).connect(t(.75)).connect(u).connect(this.vol).connect(d),d.connect(e.destination),d.connect(m.recDest),d.connect(m.xy),d.connect(m.analyser);let f=()=>{this.update(),window.setTimeout(f,25)};f()}setVoices(e){this.want=e}refresh(e){for(let t of this.voices.values())e&&t.g!==e||t.reset()}setVolume(e){this.vol&&this.ctx&&this.vol.gain.setTargetAtTime(e,this.ctx.currentTime,.05)}update(){if(!this.ctx)return;let e=new Set;for(let t of this.want){e.add(t.g.id);let n=this.voices.get(t.g.id);n?n.row!==t.row&&n.setRow(t.row):(n=new Pt(this,t.g,t.row),this.voices.set(t.g.id,n))}for(let[t,n]of this.voices)e.has(t)||(n.dispose(),this.voices.delete(t));let t=[i.music.root,i.music.scale,i.music.bpm,i.music.prog].join(`,`);t!==this.sig&&(this.sig=t,this.refresh());let n=this.voices.size,r=W(),a=r+.12;for(let e of this.voices.values())e.level(n),e.schedule(r,a)}chordName(e=W()){return xt(e)[0]}},It=[{name:`DANCER`,ko:`무대`,bpm:120,dur:8},{name:`METRONOME`,ko:`메트로놈`,bpm:90,dur:8},{name:`RUNNER`,ko:`달리는 개`,bpm:120,dur:8}];function Lt(e){let t=e/4*Math.PI*2;return[.5+.33*Math.sin(t),.56+.17*Math.sin(2*t)]}function Rt(e,t,n,r,i,a){e.beginPath(),e.moveTo(t+a,n),e.arcTo(t+r,n,t+r,n+i,a),e.arcTo(t+r,n+i,t,n+i,a),e.arcTo(t,n+i,t,n,a),e.arcTo(t,n,t+r,n,a),e.closePath()}function zt(e,t){let n=t*120/60,r=e.createLinearGradient(0,0,0,640);r.addColorStop(0,`#2a1a10`),r.addColorStop(1,`#5a3418`),e.fillStyle=r,e.fillRect(0,0,360,640);for(let n=0;n<14;n++)e.fillStyle=n%2?`rgba(0,0,0,0.18)`:`rgba(255,200,140,0.06)`,e.fillRect(n*360/14+Math.sin(t*.7+n)*3,0,360/28,640*.78);e.fillStyle=`#1d3b46`,e.fillRect(0,640*.78,360,140.8),e.fillStyle=`#2f5e6c`;for(let t=0;t<6;t++)e.fillRect(0,640*.78+t*22+4,360,3);let i=180+Math.sin(t/8*Math.PI*2)*360*.22,a=e.createRadialGradient(i,320,10,i,320,180);a.addColorStop(0,`rgba(255,240,200,0.35)`),a.addColorStop(1,`rgba(255,240,200,0)`),e.fillStyle=a,e.fillRect(0,0,360,640);let o=Math.abs(Math.sin(n*Math.PI))*10,s=640*.33-o,c=Math.sin(n*Math.PI)*.18;e.save(),e.translate(i,s),e.rotate(c*.3),e.strokeStyle=`#141414`,e.lineCap=`round`,e.lineWidth=26;let l=Math.sin(n*Math.PI)*26;e.beginPath(),e.moveTo(-14,150),e.lineTo(-22-l*.4,300+o),e.moveTo(14,150),e.lineTo(22-l*.4,300+o),e.stroke(),e.fillStyle=`#d0202c`,e.beginPath(),e.moveTo(-34,20),e.lineTo(34,20),e.lineTo(58+c*30,170),e.lineTo(-58+c*30,170),e.closePath(),e.fill();let u=(r,i)=>{let a=-.5+Math.sin(n*Math.PI+i)*.7,o=r*(40+Math.cos(a)*60),s=40+Math.sin(a)*60;e.strokeStyle=`#e8b896`,e.lineWidth=16,e.beginPath(),e.moveTo(r*30,32),e.lineTo(o,s),e.stroke(),e.fillStyle=`#202020`,Rt(e,o-22,s-18,44,36,5),e.fill(),e.fillStyle=`hsl(${(t*90+r*60)%360} 80% 60%)`,Rt(e,o-16,s-12,32,24,4),e.fill()};u(-1,0),u(1,Math.PI),e.fillStyle=`#e8b896`,e.beginPath(),e.arc(0,-10,30,0,Math.PI*2),e.fill(),e.fillStyle=`#1a0e08`,e.beginPath(),e.arc(0,-18,32,Math.PI*.95,Math.PI*2.05),e.fill(),e.fillRect(-32,-18,10,50),e.fillRect(22,-18,10,50),e.restore(),e.save(),e.translate(302.4,396.8),e.rotate(-.12),e.fillStyle=`#8a4a1c`,e.beginPath(),e.ellipse(0,40,34,46,0,0,Math.PI*2),e.ellipse(0,-20,26,32,0,0,Math.PI*2),e.fill(),e.fillStyle=`#2a160a`,e.fillRect(-3,-110,6,120),e.restore()}function Bt(e,t){let n=t*90/60,r=Math.floor(n/4)%3;if(r===0)[`#c0c0c0`,`#c0c000`,`#00c0c0`,`#00c000`,`#c000c0`,`#c00000`,`#0000c0`].forEach((t,n)=>{e.fillStyle=t,e.fillRect(n*360/7,0,52.42857142857143,640)});else if(r===1){e.fillStyle=`#f2f0e8`,e.fillRect(0,0,360,640);for(let t=0;t<12;t++)e.fillStyle=`#111`,e.fillRect(0,t*640/12,360,2),[1,3,6,8,10].includes(t%12)&&e.fillRect(0,t*640/12+6,216,640/12-10)}else for(let n=0;n<24;n++)e.fillStyle=`hsl(${n*15} 90% 55%)`,e.beginPath(),e.moveTo(180,320),e.arc(180,320,640,n/24*Math.PI*2+t*.2,(n+1)/24*Math.PI*2+t*.2),e.fill();e.fillStyle=`#5a2c10`,e.beginPath(),e.moveTo(90,512),e.lineTo(270,512),e.lineTo(214,128),e.lineTo(146,128),e.closePath(),e.fill(),e.fillStyle=`#e8d8a8`,e.fillRect(162,158,36,294),e.fillStyle=`#3a1a08`;for(let t=0;t<14;t++)e.fillRect(162,168+t*24,t%2?10:18,2);let i=Math.sin(n*Math.PI)*.55;e.save(),e.translate(180,442),e.rotate(i),e.fillStyle=`#c8c8c8`,e.fillRect(-3,-324,6,324),e.fillStyle=`#d8a020`,e.beginPath(),e.moveTo(-22,-260),e.lineTo(22,-260),e.lineTo(30,-210),e.lineTo(-30,-210),e.closePath(),e.fill(),e.restore(),e.fillStyle=`#2a1206`,e.fillRect(80,512,200,18)}function Vt(e,t){e.fillStyle=`#9a8670`,e.fillRect(0,0,360,640);let n=7,r=()=>(n=n*16807%2147483647)/2147483647;for(let t=0;t<260;t++){let t=r()*360,n=r()*640,i=3+r()*18;e.fillStyle=`hsl(${30+r()*10} ${18+r()*12}% ${42+r()*24}%)`,e.beginPath(),e.ellipse(t,n,i,i*(.5+r()*.5),r()*3,0,Math.PI*2),e.fill()}for(let t=0;t<40;t++)e.fillStyle=`hsl(35 10% ${70+r()*15}%)`,e.beginPath(),e.arc(r()*360,r()*640,2+r()*4,0,Math.PI*2),e.fill();e.fillStyle=`#5a4630`,e.fillRect(0,0,144,38.4);let[i,a]=Lt(t),[o,s]=Lt(t+.05),c=Math.atan2((s-a)*640,(o-i)*360),l=i*360,u=a*640,d=Math.sin(t*22);e.fillStyle=`rgba(40,30,20,0.35)`,e.beginPath(),e.ellipse(l+10,u+16,34,12,c,0,Math.PI*2),e.fill(),e.save(),e.translate(l,u),e.rotate(c),e.strokeStyle=`#cfc6b6`,e.lineWidth=6,e.lineCap=`round`;for(let[n,r]of[[-16,0],[-8,Math.PI],[14,Math.PI],[20,0]])e.beginPath(),e.moveTo(n,4),e.lineTo(n+Math.sin(t*22+r)*8,20),e.stroke();e.fillStyle=`#ddd5c6`,e.beginPath(),e.ellipse(0,0,28,13+d,.12,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(30,-8,13,11,0,0,Math.PI*2),e.fill(),e.fillStyle=`#bfb5a2`,e.beginPath(),e.ellipse(26,-18,5,8,-.4,0,Math.PI*2),e.ellipse(36,-17,5,8,.4,0,Math.PI*2),e.fill(),e.fillStyle=`#222`,e.beginPath(),e.arc(41,-7,2.5,0,Math.PI*2),e.fill(),e.strokeStyle=`#ddd5c6`,e.lineWidth=7,e.beginPath(),e.moveTo(-26,-4),e.quadraticCurveTo(-40,-16-d*5,-46,-6),e.stroke(),e.strokeStyle=`#c03040`,e.lineWidth=4,e.beginPath(),e.moveTo(14,-12),e.lineTo(10,12),e.stroke(),e.restore()}function Ht(e,t,n){t===2?Vt(e,n):t===0?zt(e,n):Bt(e,n);let r=Math.floor(n%1*30);e.font=`bold 13px monospace`,e.fillStyle=`#000`,e.fillRect(8,614,92,18),e.fillStyle=`#fff`,e.fillText(`T${t+1} 00:0${Math.floor(n)}:${String(r).padStart(2,`0`)}`,12,628)}var Ut=e=>440*2**((e-69)/12);async function Wt(e){let t=32e3,n=It[e],r=new OfflineAudioContext(2,Math.ceil(n.dur*t),t),i=r.createGain();i.gain.value=.7;let a=r.createConvolver(),o=r.createBuffer(2,t*1.6,t);for(let e=0;e<2;e++){let t=o.getChannelData(e);for(let e=0;e<t.length;e++)t[e]=(Math.random()*2-1)*(1-e/t.length)**3*.4}a.buffer=o;let s=r.createGain();s.gain.value=.25,i.connect(r.destination),i.connect(a).connect(s).connect(r.destination);let c=60/n.bpm,l=(e,t,n=.5,a=.3,o=`triangle`)=>{let s=r.createOscillator();s.type=o,s.frequency.value=Ut(t);let c=r.createOscillator();c.frequency.value=Ut(t)*2.001;let l=r.createGain();l.gain.setValueAtTime(1e-4,e),l.gain.exponentialRampToValueAtTime(a,e+.005),l.gain.exponentialRampToValueAtTime(1e-4,e+n);let u=r.createGain();u.gain.value=.25,s.connect(l),c.connect(u).connect(l),l.connect(i),s.start(e),c.start(e),s.stop(e+n+.05),c.stop(e+n+.05)},u=(e,n,a,o,s=`highpass`)=>{let c=r.createBuffer(1,Math.ceil(n*t),t),l=c.getChannelData(0);for(let e=0;e<l.length;e++)l[e]=(Math.random()*2-1)*(1-e/l.length)**2;let u=r.createBufferSource();u.buffer=c;let d=r.createBiquadFilter();d.type=s,d.frequency.value=a;let f=r.createGain();f.gain.value=o,u.connect(d).connect(f).connect(i),u.start(e)},d=(e,t=.7)=>{let n=r.createOscillator();n.frequency.setValueAtTime(120,e),n.frequency.exponentialRampToValueAtTime(45,e+.12);let a=r.createGain();a.gain.setValueAtTime(t,e),a.gain.exponentialRampToValueAtTime(.001,e+.3),n.connect(a).connect(i),n.start(e),n.stop(e+.32)};if(e===2){let e=[64,67,71,67,64,62,59,62,64,67,71,74,71,67,64,59];for(let t=0;t<32;t++){let n=t*c*.5;t%4==0&&d(n,.45),u(n,.04,6e3,t%2?.06:.1),t%2==0&&l(n,e[t/2%16],c*.45,.16),t%8==0&&l(n,40+[0,3,5,3][t/8%4],c*1.8,.2,`sine`)}}else if(e===0){let e=[69,72,74,76,79,76,74,72,69,67,69,72,74,72,69,64],t=[[57,60,64],[53,57,60],[55,59,62],[52,55,59]];for(let n=0;n<16;n++){let r=n*c;if(n%2==0&&d(r,.55),u(r+c/2,.05,7e3,.12),n%4==2&&u(r,.16,1800,.18,`bandpass`),l(r,e[n],c*.9,.18),n%4==0)for(let e of t[n/4|0])l(r,e,c*3.8,.06,`sine`);l(r,[45,41,43,40][n/4|0]+(n%2?12:0),c*.45,.22,`sine`)}}else{for(let e=0;e<12;e++){let t=e*c;if(u(t,.03,e%4==0?2400:3400,.4,`bandpass`),e%4==0)for(let n of[[60,64,67,71],[57,60,64,67],[53,57,60,64]][e/4|0])l(t,n,c*3.6,.07,`sine`)}[48,55,52,53,50,48].forEach((e,t)=>{let n=t*c*2,a=r.createOscillator();a.type=`sawtooth`,a.frequency.value=Ut(e);let o=r.createOscillator();o.frequency.value=5.2;let s=r.createGain();s.gain.value=Ut(e)*.006,o.connect(s).connect(a.frequency);let l=r.createBiquadFilter();l.type=`lowpass`,l.frequency.value=900;let u=r.createGain();u.gain.setValueAtTime(1e-4,n),u.gain.exponentialRampToValueAtTime(.13,n+.25),u.gain.setValueAtTime(.13,n+c*1.7),u.gain.exponentialRampToValueAtTime(1e-4,n+c*2.1),a.connect(l).connect(u).connect(i),a.start(n),o.start(n),a.stop(n+c*2.2),o.stop(n+c*2.2)})}return r.startRendering()}var Gt=0,Kt=()=>`${Date.now().toString(36)}${(Gt++).toString(36)}`;function qt(e,t){return{id:Kt(),name:t,kind:e,url:``,mime:``,duration:8,w:16,h:9,audio:null,audioGain:1,thumb:``,bpm:0,loopIn:0,loopOut:8,speed:1,gain:1}}function Jt(e){let t=It[e],n=qt(`test`,t.name);n.test=e,n.duration=n.loopOut=t.dur,n.w=360,n.h=640,n.bpm=t.bpm;let r=document.createElement(`canvas`);return r.width=360,r.height=640,Ht(r.getContext(`2d`),e,1.2),n.thumb=Qt(r,360,640),Wt(e).then(e=>{n.audio=e,n.audioGain=Yt(e)}),n}function Yt(e){let t=0,n=0;for(let r=0;r<e.numberOfChannels;r++){let i=e.getChannelData(r);for(let e=0;e<i.length;e+=4)t+=i[e]*i[e],n++}let r=Math.sqrt(t/Math.max(1,n));return r<1e-4?1:Math.min(6,.1/r)}var Xt=null;async function Zt(e){if(e.size>25e7)return null;try{return Xt??=new OfflineAudioContext(2,1,44100),await Xt.decodeAudioData(await e.arrayBuffer())}catch{return null}}function Qt(e,t,n){let r=document.createElement(`canvas`),i=120/Math.max(t,n);return r.width=Math.max(8,Math.round(t*i)),r.height=Math.max(8,Math.round(n*i)),r.getContext(`2d`).drawImage(e,0,0,r.width,r.height),r.toDataURL(`image/jpeg`,.7)}function $t(e,t,n=2500){return new Promise(r=>{if(Math.abs(e.currentTime-t)<.002&&e.readyState>=2)return r();let i=()=>{e.removeEventListener(`seeked`,i),clearTimeout(a),r()},a=setTimeout(i,n);e.addEventListener(`seeked`,i),e.currentTime=t})}function en(e){let t=document.createElement(`video`);return t.src=e,t.muted=!0,t.playsInline=!0,t.setAttribute(`playsinline`,``),t.preload=`auto`,t.crossOrigin=`anonymous`,t}async function tn(e,t){let n=e.type.startsWith(`image/`),r=qt(n?`image`:`video`,t.replace(/\.[^.]+$/,``).slice(0,12).toUpperCase()||`CLIP`);if(r.blob=e,r.mime=e.type,r.url=URL.createObjectURL(e),n){let e=new Image;return e.src=r.url,await e.decode().catch(()=>{}),r.w=e.naturalWidth||16,r.h=e.naturalHeight||9,r.thumb=Qt(e,r.w,r.h),r}let i=en(r.url);await new Promise(e=>{i.addEventListener(`loadedmetadata`,()=>e(),{once:!0}),i.addEventListener(`error`,()=>e(),{once:!0}),setTimeout(e,6e3)}),r.w=i.videoWidth||16,r.h=i.videoHeight||9,isFinite(i.duration)||(i.currentTime=1e7,await new Promise(e=>{i.addEventListener(`durationchange`,e,{once:!0}),setTimeout(e,3e3)})),r.duration=isFinite(i.duration)&&i.duration>0?i.duration:8,r.loopOut=r.duration,await $t(i,Math.min(.2,r.duration/2)),i.readyState>=2&&(r.thumb=Qt(i,r.w,r.h)),i.removeAttribute(`src`),i.load();let a=await Zt(e);return a&&(r.audio=a,r.audioGain=Yt(a)),r}function nn(){return[`video/webm;codecs="vp8,opus"`,`video/webm`,`video/mp4;codecs="avc1.42E01E,mp4a.40.2"`,`video/mp4`].find(e=>typeof MediaRecorder<`u`&&MediaRecorder.isTypeSupported(e))||``}var rn=class{rec=null;mic=null;chunks=[];started=0;get active(){return!!this.rec}async start(e,t){if(this.rec)return!0;e.want(t);for(let n=0;n<60&&!(e.ready&&e.facing===t);n++)await new Promise(e=>setTimeout(e,100));if(!e.stream)return!1;try{this.mic=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!0}})}catch{this.mic=null}let n=[...e.stream.getVideoTracks(),...this.mic?.getAudioTracks()??[]],r=nn();return this.chunks=[],this.rec=new MediaRecorder(new MediaStream(n),{mimeType:r||void 0,videoBitsPerSecond:6e6}),this.rec.ondataavailable=e=>e.data.size&&this.chunks.push(e.data),this.rec.start(250),this.started=performance.now(),!0}stop(){let e=this.rec;return e?new Promise(t=>{e.onstop=()=>{this.mic?.getTracks().forEach(e=>e.stop()),this.mic=null,this.rec=null;let n=(e.mimeType||`video/webm`).split(`;`)[0],r=new Blob(this.chunks,{type:n});t(r.size?r:null)},e.stop()}):Promise.resolve(null)}},an=[[`orig`,`ORIGINAL`,`원본+자동 조율`],[`reson`,`RESONATE`,`공명(화음)`],[`pulse`,`PULSE`,`리듬`],[`pad`,`PAD`,`패드`],[`mute`,`MUTE`,`소리 없음`]],K=[],q=[],on=0,sn=e=>`${e}${Date.now().toString(36)}${(on++).toString(36)}`;function cn(e,t,n,r){let i=new Set(K.map(e=>e.color));return{id:sn(`ing`),name:`${t.toUpperCase()} ${K.length+1}`,color:Ze.find(e=>!i.has(e))??Ze[K.length%Ze.length],src:e,kind:t,track:null,key:{lo:.55,hi:.7,color:`#00d040`,invert:!1},shape:{type:0,size:.32,ring:.25,spin:0},maskStamp:0,seed:{x:.5,y:.5,t:n},fixes:[],loopIn:n,loopOut:r,thumbs:[],look:{id:`none`,a:.5,b:.5,colors:{}},lineColor:`auto`,line:t===`shape`?2:1,lineSize:1,linePal:0,sound:{mode:`reson`,auto:!0,autoMode:!0,shift:0,gain:1},an:null,cell:-1,cellManual:!1}}function ln(e){let t=e.kind.toUpperCase(),n=K.filter(e=>e.name.startsWith(t+` `)).map(e=>parseInt(e.name.slice(t.length+1))||0),r=new Set(K.map(e=>e.color));return{...e,id:sn(`ing`),name:`${t} ${Math.max(K.length,...n)+1}`,color:r.has(e.color)?Ze.find(e=>!r.has(e))??e.color:e.color,seed:{...e.seed},fixes:(e.fixes??[]).map(e=>({...e})),key:{...e.key},shape:{...e.shape},look:{...e.look,colors:{...e.look.colors??{}}},sound:{...e.sound},thumbs:[...e.thumbs],an:e.an?{...e.an,chroma:[...e.an.chroma],onsets:[...e.an.onsets]}:null,cell:-1,cellManual:!1,saved:!1,dead:void 0}}var un=`prepared-tv-board`;function dn(){return new Promise((e,t)=>{let n=indexedDB.open(un,1);n.onupgradeneeded=()=>{n.result.createObjectStore(`sources`,{keyPath:`id`}),n.result.createObjectStore(`ings`,{keyPath:`id`})},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}async function fn(e,t,n){let r=await dn();return new Promise((i,a)=>{let o=n(r.transaction(e,t).objectStore(e));o.onsuccess=()=>i(o.result),o.onerror=()=>a(o.error)})}async function pn(e){if(e.blob)try{await fn(`sources`,`readwrite`,t=>t.put({id:e.id,name:e.name,blob:e.blob}))}catch(e){console.warn(`source not saved`,e)}}async function mn(e){let{src:t,track:n,...r}=e,i={...r,an:e.an?{...e.an}:null,srcId:t.id,track:n?{fps:n.fps,start:n.start,frames:n.frames,cx:n.cx,cy:n.cy,w:n.w,h:n.h,done:n.done}:null};try{await fn(`ings`,`readwrite`,e=>e.put(i))}catch(e){console.warn(`ingredient not saved`,e)}}async function hn(e){try{await fn(`ings`,`readwrite`,t=>t.delete(e.id))}catch{}}function gn(){let e=Jt(0);e.id=`test0`;let t=Jt(1);t.id=`test1`;let n=Jt(2);n.id=`test2`,q.push(e,t,n)}async function _n(e){let t=[],n=[];try{t=await fn(`sources`,`readonly`,e=>e.getAll()),n=await fn(`ings`,`readonly`,e=>e.getAll())}catch{return}for(let n of t)try{let t=await tn(n.blob,n.name);t.id=n.id,t.name=n.name,q.push(t),e()}catch(e){console.warn(`source restore failed`,e)}for(let t of n.sort((e,t)=>e.id.localeCompare(t.id))){let n=q.find(e=>e.id===t.srcId);if(!n||K.length>=16)continue;let{srcId:r,track:i,...a}=t;K.push({...a,src:n,saved:!0,track:i?{...i,running:!1,cancel:!1}:null});let o=K[K.length-1];o.look.colors??={},o.lineColor??=`auto`,e()}}var vn=16e3;function yn(e,t,n){let r=e.sampleRate,i=Math.max(0,Math.floor(t*r)),a=Math.min(e.length,Math.floor(n*r)),o=r/vn,s=Math.max(0,Math.floor((a-i)/o)),c=new Float32Array(s),l=Array.from({length:e.numberOfChannels},(t,n)=>e.getChannelData(n));for(let e=0;e<s;e++){let t=i+Math.floor(e*o),n=0;for(let e of l)for(let r=0;r<Math.max(1,Math.floor(o));r++)n+=e[Math.min(e.length-1,t+r)];c[e]=n/(l.length*Math.max(1,Math.floor(o)))}return c}function bn(e){let t=e.length,n=new Float32Array(t);for(let n=1,r=0;n<t;n++){let i=t>>1;for(;r&i;i>>=1)r^=i;r^=i,n<r&&([e[n],e[r]]=[e[r],e[n]])}for(let r=2;r<=t;r<<=1){let i=-2*Math.PI/r;for(let a=0;a<t;a+=r)for(let t=0;t<r/2;t++){let o=Math.cos(i*t),s=Math.sin(i*t),c=e[a+t],l=n[a+t],u=e[a+t+r/2]*o-n[a+t+r/2]*s,d=e[a+t+r/2]*s+n[a+t+r/2]*o;e[a+t]=c+u,n[a+t]=l+d,e[a+t+r/2]=c-u,n[a+t+r/2]=l-d}}let r=new Float32Array(t/2);for(let i=0;i<t/2;i++)r[i]=Math.hypot(e[i],n[i]);return r}function xn(e,t,n){let r=Math.floor(vn/1e3),i=Math.floor(vn/55),a=new Float32Array(291);for(let r=1;r<=i;r++){let i=0;for(let a=0;a<n;a++){let n=e[t+a]-e[t+a+r];i+=n*n}a[r]=i}let o=0,s=-1,c=1;for(let e=1;e<=i;e++){o+=a[e];let t=o>0?a[e]*e/o:1;a[e]=t}for(let e=r;e<i;e++){if(a[e]<.18){for(;e+1<i&&a[e+1]<a[e];)e++;s=e,c=a[e];break}a[e]<c&&(c=a[e],s=e)}if(s<0)return[0,1];let l=a[s-1]??a[s],u=a[s],d=a[s+1]??a[s],f=l-2*u+d;return[vn/(f?s+(l-d)/(2*f):s),c]}function Sn(e){return e&&e.silent?`mute`:`reson`}function Cn(e,t,n){let r={f0:0,midi:0,pc:-1,conf:0,centroid:1e3,onsetRate:0,onsets:[],rms:0,normGain:1,register:60,rhythm:0,chroma:Array(12).fill(0),silent:!0};if(!e)return r;let i=yn(e,t,n);if(i.length<2048)return r;let a=0;for(let e=0;e<i.length;e++)a+=i[e]*i[e];let o=Math.sqrt(a/i.length);if(o<.002)return{...r,rms:o};let s=1024,c=[],l=new Float32Array(12),u=0,d=0,f=Math.floor(vn/55),p=new Float32Array(s/2),m=0;for(let e=0;e+s+f<i.length;e+=512){let t=0;for(let n=0;n<s;n++)t+=i[e+n]*i[e+n];if(t=Math.sqrt(t/s),t<o*.35)continue;u++;let[n,r]=xn(i,e,s);if(n>0&&r<.25){let e=69+12*Math.log2(n/440);c.push(e),l[(Math.round(e)%12+12)%12]+=1-r,d+=r}if(m++%2==0){let t=new Float32Array(s);for(let n=0;n<s;n++)t[n]=i[e+n]*(.5-.5*Math.cos(2*Math.PI*n/1023));let n=bn(t);for(let e=0;e<n.length;e++)p[e]+=n[e]}}let h=Array(12).fill(0),g=4096,_=[];for(let e=0;e<g/2;e++){let t=e*vn/g;_.push(t<100||t>2e3?-1:(Math.round(69+12*Math.log2(t/440))%12+12)%12)}for(let e=0;e+g<=i.length;e+=g/2){let t=new Float32Array(g);for(let n=0;n<g;n++)t[n]=i[e+n]*(.5-.5*Math.cos(2*Math.PI*n/4095));let n=bn(t);for(let e=0;e<n.length;e++)_[e]>=0&&(h[_[e]]+=n[e]*n[e])}let v=h.reduce((e,t)=>e+t,0)||1;for(let e=0;e<12;e++)h[e]/=v;let y=0,b=0;for(let e=1;e<p.length;e++)y+=p[e]*(e*vn/s),b+=p[e];let x=b?y/b:1e3;c.sort((e,t)=>e-t);let S=u?c.length/u:0,C=c.length?1-d/c.length/.25:0,w=Math.max(0,Math.min(1,S*(.5+.5*C))),T=c.length?c[Math.floor(c.length/2)]:0,E=-1,D=0;l.forEach((e,t)=>e>D&&(D=e,E=t));let O=Math.round(vn*.01),k=[];for(let e=0;e+O<=i.length;e+=O){let t=0;for(let n=0;n<O;n++)t+=Math.abs(i[e+n]);k.push(t/O)}let A=k.map((e,t)=>Math.max(0,e-(k[t-1]??e))),j=A.reduce((e,t)=>e+t,0)/Math.max(1,A.length),M=j+Math.sqrt(A.reduce((e,t)=>e+(t-j)**2,0)/Math.max(1,A.length))*1.2,N=[];for(let e=1;e<A.length-1;e++)A[e]>M&&A[e]>=A[e-1]&&A[e]>=A[e+1]&&(!N.length||e*.01-N[N.length-1]>.08)&&N.push(e*.01);let P=i.length/vn,ee=N.length/P,F=69+12*Math.log2(x/440),I=w>.4&&T?T*.7+F*.3:F;return{f0:T?440*2**((T-69)/12):0,midi:T,pc:w>.25?E:-1,conf:w,centroid:x,onsetRate:ee,onsets:N,rms:o,normGain:Math.min(6,.1/o),register:I,rhythm:ee,chroma:h,silent:!1}}var wn=`modulepreload`,Tn=function(e,t){return new URL(e,t).href},En={},Dn=function(e){return e.pathname.endsWith(`.css`)},On=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},kn=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Tn(t,n);let r=s(t),i=Dn(r);return On(En,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:wn,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},An=()=>new URL(`./`,document.baseURI).href;async function jn(e){try{let t=await fetch(An()+e);if(t.ok&&!(t.headers.get(`content-type`)||``).includes(`html`))return await t.arrayBuffer()}catch{}let t=await(await fetch(An()+e+`.json`)).json(),n=atob(t),r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r.buffer}var Mn=class{model=null;tf=null;c=document.createElement(`canvas`);x=this.c.getContext(`2d`,{willReadFrequently:!0});busy=!1;async load(){let e=await kn(()=>import(`./dist-C_52oek8.js`).then(e=>e.t),[],import.meta.url);await kn(()=>import(`./dist-CHi3dtUT.js`),__vite__mapDeps([0,1]),import.meta.url);let{loadGraphModel:t}=await kn(async()=>{let{loadGraphModel:e}=await import(`./dist-CtMjQmT9.js`);return{loadGraphModel:e}},__vite__mapDeps([2,1]),import.meta.url);await e.setBackend(`webgl`),await e.ready();let n=await(await fetch(An()+`models/tfjs-selfie/model.json`)).json(),r=await jn(`models/tfjs-selfie/group1-shard1of1.bin`);this.model=await t(e.io.fromMemory({modelTopology:n.modelTopology,weightSpecs:n.weightsManifest[0].weights,weightData:r})),this.tf=e,this.c.width=this.c.height=256}async run(e){let t=this.tf,n=this.model;if(!t||!n||this.busy)return null;this.busy=!0;try{this.x.drawImage(e,0,0,256,256);let r=t.tidy(()=>{let e=t.expandDims(t.div(t.cast(t.browser.fromPixels(this.c),`float32`),255),0),r=n.predict(e);return t.slice(r,[0,0,0,1],[1,256,256,1])}),i=await r.data();r.dispose();let a=new Uint8Array(i.length);for(let e=0;e<i.length;e++)a[e]=Math.max(0,Math.min(255,i[e]*255));return a}finally{this.busy=!1}}},Nn=null,Pn=()=>new URL(`./`,document.baseURI).href;async function Fn(){return Nn||(Nn=kn(async()=>{let{FilesetResolver:e}=await import(`./vision_bundle-ciZpqDg5.js`);return{FilesetResolver:e}},[],import.meta.url).then(({FilesetResolver:e})=>e.forVisionTasks(Pn()+`mediapipe`)),Nn.catch(()=>Nn=null)),Nn}var In=null;function Ln(){return In||=(async()=>{try{return await WebAssembly.compile(new Uint8Array([0,97,115,109,1,0,0,0])),!0}catch{return!1}})(),In}async function Rn(e){try{let t=await fetch(Pn()+`models/${e}.tflite`);if(t.ok&&!(t.headers.get(`content-type`)||``).includes(`html`))return new Uint8Array(await t.arrayBuffer())}catch{}let t=await fetch(Pn()+`models/${e}.json`);if(!t.ok)throw Error(`model ${e} not found (${t.status})`);let n=await t.json(),r=atob(n),i=new Uint8Array(r.length);for(let e=0;e<r.length;e++)i[e]=r.charCodeAt(e);return i}var zn=class{c=document.createElement(`canvas`);x=this.c.getContext(`2d`);draw(e,t){let[n,r]=e instanceof HTMLVideoElement?[e.videoWidth,e.videoHeight]:e instanceof HTMLImageElement?[e.naturalWidth,e.naturalHeight]:e instanceof HTMLCanvasElement?[e.width,e.height]:[t,t],i=t/Math.max(n,r,1),a=Math.max(16,Math.round(n*i)),o=Math.max(16,Math.round(r*i));return(this.c.width!==a||this.c.height!==o)&&(this.c.width=a,this.c.height=o),this.x.drawImage(e,0,0,a,o),this.c}};function Bn(e){return e instanceof HTMLVideoElement?[e.videoWidth,e.videoHeight]:e instanceof HTMLImageElement?[e.naturalWidth,e.naturalHeight]:e instanceof HTMLCanvasElement?[e.width,e.height]:[256,256]}function Vn(e,t,n){let r=0,i=0,a=0;for(let n=0;n<e.length;n++)e[n]>127&&(r+=n%t,i+=n/t|0,a++);return{data:e,w:t,h:n,cx:a?(r/a+.5)/t:.5,cy:a?(i/a+.5)/n:.5,area:a/e.length}}var J=new class{tapStatus=`idle`;personStatus=`idle`;message=``;tap=null;person=null;tf=null;small=new zn;ts=0;tapP=null;personP=null;loadTap(){return this.tapP??=(async()=>{this.tapStatus=`loading`,this.message=`사물 분리 모델 불러오는 중… (6MB)`;try{if(!await Ln())throw Error(`이 화면에서는 WebAssembly가 막혀 있어 TAP 대신 PERSON·KEY·SHAPE를 쓰세요`);let{InteractiveSegmenterLegacy:e}=await kn(async()=>{let{InteractiveSegmenterLegacy:e}=await import(`./vision_bundle-ciZpqDg5.js`);return{InteractiveSegmenterLegacy:e}},[],import.meta.url),t=await Fn(),n=await Rn(`magic_touch`),r=r=>e.createFromOptions(t,{baseOptions:{modelAssetBuffer:n,delegate:r},outputCategoryMask:!1,outputConfidenceMasks:!0});try{this.tap=await r(`GPU`)}catch{this.tap=await r(`CPU`)}this.tapStatus=`ready`,this.message=``}catch(e){this.tapStatus=`error`,this.message=String(e.message||e),console.warn(`tap model failed`,e)}})(),this.tapP}loadPerson(){return this.personP??=(async()=>{this.personStatus=`loading`,this.message=`사람 분리 모델 불러오는 중…`;try{if(!await Ln())throw Error(`wasm blocked`);let{ImageSegmenter:e}=await kn(async()=>{let{ImageSegmenter:e}=await import(`./vision_bundle-ciZpqDg5.js`);return{ImageSegmenter:e}},[],import.meta.url),t=await Fn(),n=await Rn(`selfie_segmenter`),r=r=>e.createFromOptions(t,{baseOptions:{modelAssetBuffer:n,delegate:r},runningMode:`VIDEO`,outputCategoryMask:!1,outputConfidenceMasks:!0});try{this.person=await r(`GPU`)}catch{this.person=await r(`CPU`)}this.personStatus=`ready`,this.message=``}catch(e){console.warn(`person model via mediapipe failed, trying tfjs`,e);try{this.tf=new Mn,await this.tf.load(),this.personStatus=`ready`,this.message=``}catch(e){this.personStatus=`error`,this.message=`사람 분리 모델을 불러오지 못했어요`,console.warn(e)}}})(),this.personP}crop=document.createElement(`canvas`);cropX=this.crop.getContext(`2d`);tapAt(e,t,n,r){if(!this.tap)return null;try{let i=this.small.draw(e,256),a=i.width,o=i.height,s=i,c=t,l=n;if(r){let[i,u,d,f]=r,p=Math.max(1,Math.round(d*a)),m=Math.max(1,Math.round(f*o)),h=256/Math.max(p,m),g=Math.max(16,Math.round(p*h)),_=Math.max(16,Math.round(m*h));(this.crop.width!==g||this.crop.height!==_)&&(this.crop.width=g,this.crop.height=_);let[v,y]=Bn(e);this.cropX.drawImage(e,i*v,u*y,d*v,f*y,0,0,g,_),s=this.crop,c=(t-i)/d,l=(n-u)/f}let u=this.tap.segment(s,{keypoint:{x:Math.min(.999,Math.max(0,c)),y:Math.min(.999,Math.max(0,l))}}),d=u.confidenceMasks?.[0],f=null;if(d){let e=d.getAsFloat32Array(),t=new Uint8Array(a*o);if(r){let[n,i,s,c]=r;for(let r=0;r<o;r++){let l=((r+.5)/o-i)/c;if(l<0||l>=1)continue;let u=Math.min(d.height-1,Math.floor(l*d.height));for(let i=0;i<a;i++){let o=((i+.5)/a-n)/s;o<0||o>=1||(t[r*a+i]=e[u*d.width+Math.min(d.width-1,Math.floor(o*d.width))]*255)}}}else for(let n=0;n<e.length&&n<t.length;n++)t[n]=e[n]*255;f=Vn(t,a,o)}return u.close?.(),f}catch(e){return console.warn(`tap segment error`,e),null}}frame(e){return this.small.draw(e,256)}async personOf(e){if(this.tf){let t=await this.tf.run(e);return t?Vn(Uint8Array.from(t),256,256):null}if(!this.person)return null;let t=null;this.ts=Math.max(this.ts+1,performance.now());try{this.person.segmentForVideo(this.small.draw(e,256),this.ts,e=>{let n=e.confidenceMasks?.[0];if(n){let e=n.getAsFloat32Array(),r=new Uint8Array(e.length);for(let t=0;t<e.length;t++)r[t]=e[t]*255;t=Vn(r,n.width,n.height)}e.close()})}catch(e){console.warn(`person segment error`,e)}return t}},Hn=20;function Un(e,t,n,r,i){let a=document.createElement(`canvas`),o=72/Math.max(t,n);a.width=Math.max(8,Math.round(t*o)),a.height=Math.max(8,Math.round(n*o));let s=a.getContext(`2d`);s.fillStyle=`#101010`,s.fillRect(0,0,a.width,a.height);let c=document.createElement(`canvas`);c.width=r.w,c.height=r.h;let l=c.getContext(`2d`),u=l.createImageData(r.w,r.h);for(let e=0;e<r.data.length;e++)u.data[e*4+3]=r.data[e]>110?255:0;l.putImageData(u,0,0);let d=document.createElement(`canvas`);d.width=a.width,d.height=a.height;let f=d.getContext(`2d`);return f.drawImage(c,0,0,a.width,a.height),f.globalCompositeOperation=`source-in`,f.drawImage(e,0,0,a.width,a.height),s.drawImage(d,0,0),s.strokeStyle=i,s.lineWidth=3,s.strokeRect(1.5,1.5,a.width-3,a.height-3),a.toDataURL(`image/png`)}async function Wn(e){let t=e.src;if(t.kind===`test`){let e=document.createElement(`canvas`);e.width=360,e.height=640;let n=e.getContext(`2d`);return{at:async r=>(Ht(n,t.test??0,r),e),size:[360,640],done:()=>{}}}if(t.kind===`image`){let e=new Image;return e.src=t.url,await e.decode().catch(()=>{}),{at:async()=>e,size:[e.naturalWidth||16,e.naturalHeight||9],done:()=>{}}}if(t.kind===`video`){let e=en(t.url);return await new Promise(t=>{e.addEventListener(`loadeddata`,()=>t(),{once:!0}),setTimeout(t,6e3)}),{at:async t=>(await $t(e,t),e.readyState>=2?e:null),size:[e.videoWidth||16,e.videoHeight||9],done:()=>{e.removeAttribute(`src`),e.load()}}}return null}var Gn=[],Kn=!1;function qn(e,t){if(e.track&&(e.track.cancel=!0),e.kind!==`tap`&&e.kind!==`person`)return;let n=e.src,r=e.loopIn,i=Math.min(e.loopOut,e.loopIn+Hn,n.kind===`image`?e.loopIn+.01:1/0),a=n.kind===`image`?1:15,o=Math.max(1,Math.ceil((i-r)*a));e.track={fps:a,start:r,frames:Array(o).fill(null),cx:new Float32Array(o),cy:new Float32Array(o),w:0,h:0,done:0,running:!1,cancel:!1},e.thumbs=[],Gn.push(e),Jn(t)}async function Jn(e){if(!Kn){Kn=!0;try{for(;Gn.length;){let t=Gn.shift();t.dead||!t.track||t.track.cancel||await ir(t,e)}}finally{Kn=!1}}}function Yn(e,t,n,r,i=0){let a=new Float32Array(t*n);for(let t=0;t<a.length;t++)a[t]=e[t]>127?1e6:0;for(let e=0;e<n;e++)for(let r=0;r<t;r++){let i=e*t+r;if(!a[i])continue;let o=a[i];r>0&&(o=Math.min(o,a[i-1]+1)),e>0&&(o=Math.min(o,a[i-t]+1)),r>0&&e>0&&(o=Math.min(o,a[i-t-1]+1.414)),r<t-1&&e>0&&(o=Math.min(o,a[i-t+1]+1.414)),a[i]=r===0||e===0||r===t-1||e===n-1?Math.min(o,1):o}let o=[t/2,n/2],s=-1;for(let e=n-1;e>=0;e--)for(let c=t-1;c>=0;c--){let l=e*t+c;if(!a[l])continue;let u=a[l];c<t-1&&(u=Math.min(u,a[l+1]+1)),e<n-1&&(u=Math.min(u,a[l+t]+1)),c<t-1&&e<n-1&&(u=Math.min(u,a[l+t+1]+1.414)),c>0&&e<n-1&&(u=Math.min(u,a[l+t-1]+1.414)),a[l]=u,r&&Math.hypot(c-r[0],e-r[1])<i||u>s&&(s=u,o=[c,e])}return[o,s]}function Xn(e,t,n,r,i){let a=new Uint8Array(e.length),o=Math.round(r),s=Math.round(i);for(let r=0;r<n;r++){let i=r-s;if(!(i<0||i>=n))for(let n=0;n<t;n++){let s=n-o;s>=0&&s<t&&(a[r*t+n]=e[i*t+s])}}return a}function Zn(e,t){let n=0,r=0;for(let i=0;i<e.length;i++){let a=e[i]>127,o=t[i]>127;a&&o&&n++,(a||o)&&r++}return r?n/r:0}function Qn(e){let t=0;for(let n=0;n<e.length;n++)e[n]>127&&t++;return t}function $n(e,t){let n=new Float32Array(64),r=0;for(let i=0;i<t.length;i++)if(t[i]>127){let t=e[i*4]>>6,a=e[i*4+1]>>6,o=e[i*4+2]>>6;n[t*16+a*4+o]++,r++}if(r)for(let e=0;e<64;e++)n[e]/=r;return n}var er=(e,t)=>{let n=0;for(let r=0;r<64;r++)n+=Math.min(e[r],t[r]);return n},tr=e=>e.area>8e-4&&e.area<.5;function nr(e,t,n){let r=[[t,n]];for(let e=0;e<8;e++)r.push([t+Math.cos(e/8*Math.PI*2)*.025,n+Math.sin(e/8*Math.PI*2)*.018]);let i=null,a=-1,o=null;for(let[s,c]of r){let r=J.tapAt(e,Math.min(.99,Math.max(.01,s)),Math.min(.99,Math.max(.01,c)));if(!r||(o??=r,!tr(r)))continue;let l=r.data[Math.min(r.h-1,Math.floor(n*r.h))*r.w+Math.min(r.w-1,Math.floor(t*r.w))]>127,u=+!!l+(1-Math.min(1,r.area*4))*.5;if(u>a&&(a=u,i=r),s===t&&c===n&&l&&r.area<.15)break}return i??o}var rr=e=>e.getContext(`2d`,{willReadFrequently:!0}).getImageData(0,0,e.width,e.height).data;async function ir(e,t){let n=e.track;n.running=!0,e.kind===`tap`?await J.loadTap():await J.loadPerson();let r=await Wn(e);if(!r){n.running=!1;return}let i=n.frames.length,a=e=>Math.max(0,Math.min(i-1,Math.round((e-n.start)*n.fps))),o=[e.seed,...e.fixes??[]].map(e=>({...e,i:a(e.t)})).sort((e,t)=>e.i-t.i),s=[];o.forEach((e,t)=>{let n=t+1<o.length?o[t+1].i-1:i-1,r=[];for(let t=e.i;t<=n;t++)r.push(t);s.push({seed:e,order:r}),t===0&&s.push({seed:e,order:Array.from({length:e.i},(t,n)=>e.i-1-n)})});let c=null,l=0,u=performance.now();for(let a of s){let o=null,s=[0,0],d=null,f=[a.seed.x,a.seed.y],p=0,m=n.frames[a.seed.i];if(a.order[0]!==a.seed.i&&m){o=m,d=[n.cx[a.seed.i]*n.w,n.cy[a.seed.i]*n.h];let[e]=Yn(m,n.w,n.h);f=[(e[0]+.5)/n.w,(e[1]+.5)/n.h]}for(let m of a.order){if(n.cancel||e.dead)break;let h=await r.at(n.start+m/n.fps);if(!h)continue;let g=null;if(e.kind===`person`)g=await J.personOf(h);else if(!o)g=nr(h,f[0],f[1]);else{let e=n.w,t=n.h,r=Xn(o,e,t,s[0],s[1]),[i]=Yn(r,e,t),[a]=Yn(r,e,t,i,Math.max(e,t)*.08),u=[[(i[0]+.5)/e,(i[1]+.5)/t],[f[0]+s[0]/e,f[1]+s[1]/t],[(a[0]+.5)/e,(a[1]+.5)/t]],m=rr(J.frame(h)),_=Math.max(1,Qn(o)),v=e=>Math.exp(-Math.abs(Math.log(Math.max(e/_,.001)))*1.5)*.5+(l?Math.exp(-Math.abs(Math.log(Math.max(e/l,.001))))*.5:.5),y=e=>c?er($n(m,e.data),c):.5,b=null,x=-1,S=u[0];for(let e of u){let t=J.tapAt(h,e[0],e[1]);if(!t||!tr(t))continue;let n=.45*Zn(t.data,r)+.25*v(Qn(t.data))+.3*y(t);if(n>x&&(x=n,b=t,S=e),n>.72)break}if(!(b&&x>=.35)){let[n,r]=d?[(d[0]+s[0])/e,(d[1]+s[1])/t]:f,i=Math.min(.3,.06+p*.03),a=null,o=-1,c=f;for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++){if(!t&&!e)continue;let s=[Math.min(.98,Math.max(.02,n+t*i*.56)),Math.min(.98,Math.max(.02,r+e*i))],l=J.tapAt(h,s[0],s[1]);if(!l||!tr(l))continue;let u=Math.exp(-Math.hypot((l.cx-n)/.56,l.cy-r)/(i*1.5)),d=.45*y(l)+.35*v(Qn(l.data))+.2*u;d>o&&(o=d,a=l,c=s)}a&&o>=.5&&(b=a,x=o,S=c)}b&&x>=.35?(g=b,f=S,p=0):(g=Vn(r,e,t),s=[s[0]*.5,s[1]*.5],p++)}if(!g)continue;!o&&e.kind===`tap`&&!c&&(c=$n(rr(J.frame(h)),g.data),l=Math.max(1,Qn(g.data))),n.w=g.w,n.h=g.h,n.frames[m]=g.data,n.cx[m]=g.cx,n.cy[m]=g.cy;let _=[g.cx*g.w,g.cy*g.h];if(d&&(s=[s[0]*.5+(_[0]-d[0])*.5,s[1]*.5+(_[1]-d[1])*.5]),d=_,o=g.data,e.kind===`tap`){let[e]=Yn(g.data,g.w,g.h);f=[(e[0]+.5)/g.w,(e[1]+.5)/g.h]}n.done++;let v=Math.floor(m/i*4);m!==a.seed.i&&m%Math.max(1,Math.floor(i/4))!==0||e.thumbs[v]||(e.thumbs[v]=Un(h,r.size[0],r.size[1],g,e.color)),e.maskStamp++,performance.now()-u>40&&(t(),await new Promise(e=>setTimeout(e,0)),u=performance.now())}}!n.cancel&&!e.dead&&ar(n),n.done=i,n.running=!1,r.done(),e.maskStamp++,t()}function ar(e){let t=e.frames,n=t.map((e,n)=>{let r=t[n-1],i=t[n+1];if(!e||!r||!i||r.length!==e.length||i.length!==e.length)return e;let a=new Uint8Array(e.length);for(let t=0;t<e.length;t++){let n=e[t],o=r[t],s=i[t];a[t]=Math.max(Math.min(n,o),Math.min(Math.max(n,o),s))}return a});for(let e=0;e<t.length;e++)t[e]=n[e]}var or=class{s;camera;el=null;speed=1;loopIn;loopOut;frozen=!1;frozenAt=0;t0=0;p0=0;parked=!0;stamp=0;ctx=null;seeking=!1;lastDrawn=-1;constructor(e,t=null){this.s=e,this.camera=t,this.loopIn=e.loopIn,this.loopOut=e.loopOut,this.speed=e.speed}get len(){return Math.max(.05,this.loopOut-this.loopIn)}pos(e){if(this.frozen)return this.frozenAt;let t=this.p0+(e-this.t0)*this.speed-this.loopIn;return this.loopIn+(t%this.len+this.len)%this.len}restart(e,t=this.loopIn){this.t0=e,this.p0=t,this.frozen=!1}setSpeed(e,t){let n=this.pos(t);this.speed=e,this.t0=t,this.p0=n}setLoop(e,t,n){let r=this.pos(n);this.loopIn=Math.max(0,Math.min(e,this.s.duration-.05)),this.loopOut=Math.max(this.loopIn+.05,Math.min(t,this.s.duration)),this.t0=n,this.p0=Math.min(Math.max(r,this.loopIn),this.loopOut-.01)}nudge(e,t){let n=this.pos(t);this.t0=t,this.p0=n+e,this.frozen&&(this.frozenAt=this.pos(t))}freeze(e,t){e!==this.frozen&&(e?(this.frozenAt=this.pos(t),this.frozen=!0):(this.frozen=!1,this.t0=t,this.p0=this.frozenAt))}sameAs(e,t){return e.s===this.s&&Math.abs(e.pos(t)-this.pos(t))<.04&&e.speed===this.speed&&e.frozen===this.frozen}copyTiming(e){this.t0=e.t0,this.p0=e.p0,this.speed=e.speed,this.loopIn=e.loopIn,this.loopOut=e.loopOut,this.frozen=e.frozen,this.frozenAt=e.frozenAt}size(){let e=this.s;return e.kind===`camera`&&this.camera?[this.camera.video.videoWidth||16,this.camera.video.videoHeight||9]:e.kind===`test`?[360,640]:[e.w||16,e.h||9]}get live(){return this.s.kind===`camera`||this.s.kind===`beam`||this.s.kind===`matte`}ensure(){let e=this.s;if(!this.el){if(e.kind===`video`){let t=en(e.url);t.loop=!0,t.addEventListener(`seeked`,()=>{this.seeking=!1,this.stamp++}),this.el=t}else if(e.kind===`image`){let t=new Image;t.src=e.url,this.el=t}else if(e.kind===`test`){let e=document.createElement(`canvas`);e.width=360,e.height=640,this.ctx=e.getContext(`2d`),this.el=e}}}element(){let e=this.s;if(e.kind===`camera`){let t=this.camera;return t&&t.facing===e.facing&&t.ready?t.video:null}this.ensure();let t=this.el;return t?t instanceof HTMLVideoElement?t.readyState>=2?t:null:t instanceof HTMLImageElement?t.complete&&t.naturalWidth?t:null:t:null}tick(e){let t=this.s;this.parked=!1,this.ensure();let n=this.pos(e);if(t.kind===`test`&&this.ctx){let e=Math.round(n*30)/30;e!==this.lastDrawn&&(Ht(this.ctx,t.test??0,e),this.lastDrawn=e,this.stamp++);return}if(t.kind===`camera`){this.stamp++;return}let r=this.el;if(!(r instanceof HTMLVideoElement))return;if(this.frozen){r.paused||r.pause(),!this.seeking&&Math.abs(r.currentTime-n)>.03&&(this.seeking=!0,r.currentTime=n);return}if(r.paused&&r.play().catch(()=>{}),this.seeking)return;let i=r.currentTime-n;Math.abs(i)>this.len/2&&(i-=Math.sign(i)*this.len),Math.abs(i)>.25||r.currentTime>this.loopOut+.05||r.currentTime<this.loopIn-.3?(this.seeking=!0,r.currentTime=n,r.playbackRate=Math.min(4,Math.max(.25,this.speed))):r.playbackRate=Math.min(4,Math.max(.25,this.speed*(1-Math.max(-.08,Math.min(.08,i))))),this.stamp++}shownPos(e){let t=this.pos(e),n=this.el;if(!(n instanceof HTMLVideoElement)||n.readyState<2)return t;let r=n.currentTime;return!this.seeking&&Math.abs(r-t)<.08?t:Math.min(this.loopOut,Math.max(this.loopIn,r))}settled(e){return this.element()?this.el instanceof HTMLVideoElement?!this.seeking&&Math.abs(this.el.currentTime-this.pos(e))<.05:!0:!1}park(){this.parked||(this.parked=!0,this.el instanceof HTMLVideoElement&&!this.el.paused&&this.el.pause())}dispose(){this.park(),this.el instanceof HTMLVideoElement&&(this.el.removeAttribute(`src`),this.el.load()),this.el=null}},sr=new ke,cr=new Map,lr=new WeakMap;function ur(e){cr.get(e.id)?.dispose(),cr.delete(e.id)}function dr(e,t,n){t.loopIn=e.loopIn,t.loopOut=Math.max(e.loopIn+.05,e.loopOut);let r=At(e),i=Mt(e,n),a=Math.round(i/Math.max(.01,jt(e)));(lr.get(t)!==a||Math.abs(t.speed-r)>.001)&&(lr.set(t,a),t.speed=r,t.restart(i,e.loopIn))}var fr=new Map;function pr(e){let t=fr.get(e);return t||(t=new or(e,sr),t.restart(performance.now()/1e3),fr.set(e,t)),t}function mr(e){let t=null;for(let n of[...cr.values(),...fr.values()])e.has(n)?n.s.kind===`camera`&&!t&&(t=n.s.facing??null):n.park();sr.want(t)}var hr=e=>h(`p`,{class:`hint`},e),gr=(...e)=>h(`div`,{class:`keys`},...e.filter(Boolean)),_r=(e,...t)=>h(`div`,{class:`sec`},h(`div`,{class:`sec-t`},e),...t.filter(Boolean)),vr=[`#ff2a2a`,`#ff8a1a`,`#ffe02a`,`#a8ff40`,`#20c040`,`#20e0c0`,`#40c8ff`,`#2050ff`,`#18207a`,`#9040ff`,`#ff30e0`,`#ff8ac0`,`#ffffff`,`#a8a8b0`,`#8a5020`,`#101010`];function yr(e,t,n,r,i){let a=t.map(([e,t])=>b(t,{cls:`tiny cw`,lit:()=>r()===e,onPress:()=>i(e)}));for(let e of n){let t=b(h(`i`,{class:`sw`,style:`background:${e}`}),{cls:`tiny swk`,lit:()=>r()===e,onPress:()=>i(e)});a.push(t)}let o=h(`input`,{type:`color`,class:`cpick`});o.addEventListener(`input`,()=>i(o.value));let s=h(`label`,{class:`key tiny swk custom`},h(`span`,{class:`kf`},`+`),o);return y(s,()=>{let e=r(),t=e.startsWith(`#`)&&!n.includes(e);s.classList.toggle(`lit`,t),s.style.background=t?e:``,e.startsWith(`#`)&&(o.value=e)}),a.push(s),h(`div`,{class:`colour-row`},h(`small`,null,e),h(`div`,{class:`sws`},...a))}function br(e){let t=e.an?.register??60;return t<50?0:t<64?1:t<78?2:3}function xr(e){let{renderer:t}=e,n=new rn,a=q.find(e=>e.id===i.board.src)??q[0],s=null,l=`tap`,u=!1,d=`look`,f=!0,p={a:0,b:0},m=()=>G.beat;function g(){let e=Math.min(a.duration,i.board.loopBars*4*m());p.a=0,p.b=a.kind===`image`?Math.min(a.duration,16*m()):e}g();let _=h(`div`,{class:`marks`}),w=h(`div`,{class:`osd top`}),E=h(`div`,{class:`osd hint`}),D=h(`div`,{class:`pgm-screen`},_,w,E),A=h(`div`,{class:`monitor`},D),j=h(`canvas`,{class:`timeline`}),M=h(`div`,{class:`tl-box`},j),N=h(`div`,{class:`keys tl-keys`},...[1,2,4].map(e=>b(`${e} BAR`,{cls:`small`,lit:()=>Math.abs(p.b-p.a-e*4*m())<.02,onPress:()=>{i.board.loopBars=e;let t=Math.min(e*4*m(),a.duration);p.b=Math.min(a.duration,p.a+t),p.a=p.b-t,ie()}})),b(`ALL`,{cls:`small`,onPress:()=>(p.a=0,p.b=Math.min(a.duration,20),ie())})),P=null,ee=0,F=0,I=0,te=e=>{let t=j.getBoundingClientRect();return(e-t.left)/t.width*a.duration},L=e=>{let t=m();return Math.max(0,Math.min(a.duration,Math.round(e/t)*t))};j.addEventListener(`pointerdown`,e=>{j.setPointerCapture(e.pointerId);let t=te(e.clientX),n=a.duration*.06;P=Math.abs(t-p.a)<n?`a`:Math.abs(t-p.b)<n?`b`:t>p.a&&t<p.b?`mid`:t<p.a?`a`:`b`,ee=t,F=p.a,I=p.b}),j.addEventListener(`pointermove`,e=>{if(!P||!j.hasPointerCapture(e.pointerId))return;let t=te(e.clientX),n=m();if(P===`a`)p.a=Math.min(L(t),p.b-n);else if(P===`b`)p.b=Math.max(L(t),p.a+n);else{let e=L(t-ee+F)-F,n=I-F;p.a=Math.max(0,Math.min(a.duration-n,F+e)),p.b=p.a+n}p.b=Math.min(p.b,p.a+20),ne()}),j.addEventListener(`pointerup`,()=>{P&&ie(),P=null});function ne(){let e=j.getBoundingClientRect(),t=Math.max(10,Math.round(e.width)),n=Math.max(10,Math.round(e.height));(j.width!==t||j.height!==n)&&(j.width=t,j.height=n);let r=j.getContext(`2d`);r.fillStyle=`#101010`,r.fillRect(0,0,t,n);let i=Math.max(.01,a.duration);r.fillStyle=`#3a3a3a`;for(let e=0,a=0;e<i;e+=m(),a++)r.fillRect(Math.round(e/i*t),a%4?n-6:n-12,1,a%4?6:12);let o=a.audio;if(o){let e=o.getChannelData(0);r.fillStyle=`#5a7a5a`;for(let i=0;i<t;i++){let a=Math.floor(i/t*e.length),o=Math.floor((i+1)/t*e.length),s=0;for(let t=a;t<o;t+=8)s=Math.max(s,Math.abs(e[t]));let c=Math.max(1,s*(n-14));r.fillRect(i,(n-12)/2-c/2,1,c)}}let s=p.a/i*t,c=p.b/i*t;r.fillStyle=`rgba(255,224,64,0.22)`,r.fillRect(s,0,c-s,n),r.fillStyle=`#ffe040`,r.fillRect(s-2,0,4,n),r.fillRect(c-2,0,4,n);let l=R().pos(W())/i*t;r.fillStyle=`#ff3020`,r.fillRect(l,0,2,n),r.fillStyle=`#f0f0f0`,r.font=`10px monospace`,r.fillText(`${p.a.toFixed(2)}s — ${p.b.toFixed(2)}s  (${Math.round((p.b-p.a)/m())} beats)`,4,11)}let re=0;function ie(){let e=s;e&&(e.loopIn=p.a,e.loopOut=p.b,e.seed.t=Math.min(Math.max(e.seed.t,p.a),p.b-.01),clearTimeout(re),re=window.setTimeout(()=>{(e.kind===`tap`||e.kind===`person`)&&(e.track&&le(e)&&(e.track=null),qn(e,()=>ue(e))),ae(e),Ft.refresh(e),ce(e)},500)),c()}function R(){return pr(a)}function z(e){a=e,i.board.src=e.id,s=null,g(),t.clearBrush(),c()}function ae(e){e.an=Cn(e.src.audio,e.loopIn,e.loopOut),e.sound.autoMode!==!1&&(e.sound.mode=Sn(e.an))}function oe(e,n,r){if(a.kind===`camera`||a.kind===`beam`||a.kind===`matte`)return O(`녹화한 영상·사진·테스트 클립에서 따낼 수 있어요`);s&&!s.saved&&(s.dead=!0);let i=cn(a,e,p.a,p.b),o=R();if(i.seed.t=Math.min(Math.max(o.pos(W()),p.a),p.b-.01),n!==void 0&&r!==void 0){let[e,a]=t.screenToSource(o,n,r);i.seed.x=e,i.seed.y=a}s=i,e!==`tap`&&e!==`person`&&a.thumb&&(i.thumbs=[a.thumb]),(e===`tap`||e===`person`)&&(qn(i,()=>ue(i)),e===`tap`&&J.loadTap()),setTimeout(()=>{ae(i),c()},30),c()}function se(e,n,r){let i=R(),[a,o]=t.screenToSource(i,n,r),s=Math.min(Math.max(i.pos(W()),e.loopIn),e.loopOut-.01);e.fixes=[...(e.fixes??[]).filter(e=>Math.abs(e.t-s)>.15),{x:a,y:o,t:s}],e.track&&le(e)&&(e.track=null),qn(e,()=>ue(e)),O(`${s.toFixed(1)}초에 보정 — 다시 추적합니다 (보정 ${e.fixes.length}개)`,1600),c()}function ce(e){e.saved&&(pn(e.src),mn(e))}function le(e){return[...K,s].some(t=>t&&t!==e&&t.track===e.track)}function ue(e){let t=e.track;for(let n of[...K,s])n&&n!==e&&n.track===t&&(n.thumbs=[...e.thumbs],n.maskStamp++);if(t&&!t.running&&t.done>=t.frames.length)for(let e of K)e.track===t&&ce(e);c()}function de(){let e=s;if(!e)return O(`먼저 따낼 것을 누르세요`);if(K.length>=16)return O(`선반이 꽉 찼어요 (16개). 하나 지우고 다시`);let t=ln(e);e.named&&(t.name=e.name,t.named=!0),t.saved=!0,K.push(t),ce(t),s=ln(t),O(`선반 ${K.length}번째에 추가 — ${t.name}`,1600),c()}function fe(t){let n=K.indexOf(t);n>=0&&K.splice(n,1),t.dead=!0,hn(t),e.forget(t),s===t&&(s=null),c()}function pe(e){a=e.src,i.board.src=a.id,p.a=e.loopIn,p.b=e.loopOut,s=e,c()}let me=h(`div`,{class:`strip`});function he(){me.textContent=``;for(let e of q){let t=b(h(`span`,{class:`kf col`},e.thumb?h(`img`,{class:`sthumb`,src:e.thumb,alt:``}):h(`i`,{class:`sthumb`}),h(`small`,null,e.name)),{cls:`tiny src`,lit:()=>a===e,onPress:()=>z(e)});me.append(t)}let e=async e=>{let[t]=await k(e);if(t){O(`불러오는 중…`,1200);try{let e=await tn(t,t.name);q.push(e),pn(e),z(e),he()}catch{O(`이 파일은 읽을 수 없어요`)}}};me.append(b(h(`span`,{class:`kf col`},h(`b`,null,`+`),h(`small`,null,`VIDEO`)),{cls:`tiny src`,onPress:()=>void e(`video/*`)}),b(h(`span`,{class:`kf col`},h(`b`,null,`+`),h(`small`,null,`PHOTO`)),{cls:`tiny src`,onPress:()=>void e(`image/*`)}),_e(`environment`,`CAM`),_e(`user`,`SELF`))}let ge=!1;function _e(e,t){return b(h(`span`,{class:`kf col`},h(`b`,null,`●`),h(`small`,null,t)),{cls:`tiny src rec-src`,lit:()=>ge,hold:async t=>{if(t){if(O(`카메라 켜는 중… 누르고 있는 동안 녹화`,1500),!await n.start(sr,e))return O(`카메라를 쓸 수 없어요`);ge=!0,v(),setTimeout(()=>ge&&void ve(),15e3)}else ve()}})}async function ve(){if(!ge)return;ge=!1,v();let e=await n.stop();if(sr.want(null),!e)return O(`녹화된 내용이 없어요`);let t=await tn(e,`REC${q.length}`);q.push(t),pn(t),z(t),he(),O(t.audio?`녹화 완료 — 소리 있음 ♪`:`녹화 완료`,1500)}he();let ye=h(`div`,{class:`keys cut-row`},b(h(`span`,{class:`kf col`},h(`b`,null,`FIX`),h(`small`,null,`보정`)),{cls:`small cut fix`,lit:()=>u,onPress:()=>{u=!u,u&&O(`윤곽이 빗나간 순간에 객체를 다시 누르세요. 그 시점부터 다시 따라갑니다`,2200),c()}}),...[`tap`,`person`,`luma`,`chroma`,`shape`].map(e=>b(h(`span`,{class:`kf col`},h(`b`,null,et[e]),h(`small`,null,{tap:`누른 것`,person:`사람`,luma:`밝기`,chroma:`색`,shape:`모양`}[e])),{cls:`small cut`,lit:()=>l===e,onPress:()=>{l=e,e===`tap`?O(`모니터에서 따낼 것을 누르세요`,1400):oe(e),c()}}))),B=h(`div`,{class:`editor`}),be=h(`div`,{class:`keys ed-tabs`},...[`look`,`line`,`sound`].map(e=>b({look:`LOOK 효과`,line:`LINE 윤곽`,sound:`SOUND 소리`}[e],{cls:`small`,lit:()=>d===e,onPress:()=>(d=e,xe())})));function xe(){B.textContent=``;let e=s;if(!e){B.append(hr(`1) 위에서 클립을 고르고 2) 노란 구간(루프)을 정한 뒤 3) TAP을 켜고 모니터에서 따낼 것을 누르세요. PERSON·LUMA·CHROMA·SHAPE는 누르면 바로 따냅니다.`)),v();return}let t=e,n=()=>(Ft.refresh(e),ce(e),c());if(d===`look`){let t=h(`div`,{class:`tiles t5`});for(let r of Ke)t.append(b(h(`span`,{class:`kf col`},h(`b`,null,r.name),h(`small`,null,r.ko)),{cls:`tile line`,lit:()=>e.look.id===r.id,onPress:()=>(e.look.id=r.id,n(),xe())}));let r=qe(e.look.id),i=yr(`COLOR`,[[`orig`,`ORIG`],[`rainbow`,`RAINBOW`],[`neg`,`NEG`],[`mono`,`B/W`]],Ye(r.id),()=>Xe(e.look),t=>(e.look.colors[e.look.id]=t,n()));B.append(t,i,gr(r.a?x(r.a,e.look,`a`,0,1,.05,void 0,n):null,r.b?x(r.b,e.look,`b`,0,1,.05,void 0,n):null)),e.kind===`luma`&&B.append(_r(`LUMA KEY`,x(`LOW`,e.key,`lo`,0,1,.01),x(`HIGH`,e.key,`hi`,0,1,.01),gr(C(`INVERT`,e.key,`invert`)))),e.kind===`chroma`&&B.append(_r(`CHROMA KEY`,T(`KEY`,e.key,`color`,[`#00d040`,`#2040ff`,`#ff2020`,`#f0f0f0`,`#101010`]),gr(C(`INVERT`,e.key,`invert`)))),e.kind===`shape`&&B.append(_r(`SHAPE`,S(``,e.shape,`type`,$e.map((e,t)=>[t,e])),x(`SIZE`,e.shape,`size`,.05,1,.01),x(`RING`,e.shape,`ring`,.05,.9,.01),x(`SPIN`,e.shape,`spin`,-2,2,.05)))}else if(d===`line`){let r=h(`div`,{class:`tiles t5`});Qe.forEach(([t,i],a)=>r.append(b(h(`span`,{class:`kf col`},h(`b`,null,t),h(`small`,null,i)),{cls:`tile line`,lit:()=>e.line===a,onPress:()=>(e.line=a,n())})));let i=S(`TORN COLORS`,t,`linePal`,ot.map((e,t)=>[t,[`VIOLET`,`GREEN`,`RGB`,`B/W`][t]]),n);y(i,()=>i.hidden=e.line!==1||(e.lineColor??`auto`)!==`auto`),B.append(r,yr(`LINE COLOR`,[[`auto`,`AUTO`]],vr,()=>e.lineColor??`auto`,t=>(e.lineColor=t,t!==`auto`&&(e.color=t),n())),x(`WIDTH`,t,`lineSize`,.4,3,.1,void 0,n),i)}else{let t=e.an,i=Sn(t),a=h(`div`,{class:`keys wrap`},...an.map(([t,r,a])=>b(h(`span`,{class:`kf col`},h(`b`,null,`${r}${t===i?` ★`:``}`),h(`small`,null,a)),{cls:`small mode`,lit:()=>e.sound.mode===t,onPress:()=>(e.sound.mode=t,e.sound.autoMode=!1,n())}))),o=t?t.silent?`소리 없음`:`음높이 ${t.pc>=0?r[t.pc]:`—`} (확실도 ${Math.round(t.conf*100)}%) · 밝기 ${Math.round(t.centroid)}Hz · 리듬 ${t.onsetRate.toFixed(1)}/s`:`분석 중…`,s=h(`b`);y(s,()=>s.textContent=`${Dt(e)>=0?`+`:``}${Dt(e)} 반음`),B.append(a,h(`div`,{class:`an`},o),hr(`★ = 이 소리에 추천하는 방식. ORIGINAL: 원본을 키에 맞게 옮김 · RESONATE: 원본이 화음을 울림 · PULSE: 원본의 소리 시작점을 16분음표 리듬으로 · PAD: 원본을 잘게 쪼개 화음으로 깖`),gr(C(`AUTO TUNE`,e.sound,`auto`,n),h(`span`,{class:`stat`},`이동 `,s)),x(`SHIFT`,e.sound,`shift`,-12,12,1,void 0,n),x(`GAIN`,e.sound,`gain`,0,2,.05,void 0,n),gr(b(`PREVIEW`,{cls:`small`,lit:()=>f,onPress:()=>(f=!f,c())}),h(`span`,{class:`stat`},`음역 ${[`LOW`,`MID`,`HIGH`,`TOP`][br(e)]} ${ht[br(e)].hp}–${ht[br(e)].lp}Hz`)))}v()}let V=h(`input`,{type:`text`,maxlength:`12`,class:`name-in`,placeholder:`이름`,enterkeyhint:`done`,autocomplete:`off`}),Se=0;V.addEventListener(`input`,()=>{let e=s;e&&(e.name=V.value.slice(0,12)||e.name,e.named=!0,clearTimeout(Se),Se=window.setTimeout(()=>ce(e),400),c())}),V.addEventListener(`keydown`,e=>e.key===`Enter`&&V.blur()),V.addEventListener(`blur`,()=>{s&&(V.value=s.name)}),y(V,()=>{V.disabled=!s,document.activeElement!==V&&(V.value=s?.name??``)});let Ce=h(`label`,{class:`name-row`},h(`small`,null,`NAME`),V),we=h(`div`,{class:`shelf-strip`});function Te(){we.textContent=``,K.forEach(e=>{let t=h(`img`,{alt:``,src:e.thumbs.find(Boolean)??``}),n=0,r=b(h(`span`,{class:`kf col`},t,h(`small`,null,e.name)),{cls:`tiny ing`,lit:()=>s===e,onPress:()=>(pe(e),xe()),hold:t=>{clearTimeout(n),t&&(n=window.setTimeout(()=>{pe(e),xe(),V.focus(),V.select()},550))}});r.style.setProperty(`--c`,e.color),we.append(r)});for(let e=K.length;e<16;e++)we.append(h(`i`,{class:`ing-empty`}))}let Ee=h(`div`,{class:`keys save-row`},b(`▶ 위성으로`,{cls:`small go sat-go`,onPress:()=>s&&it(s)>=1?e.toSatellite?.(s):O(s?`추적이 끝나면 위성으로 만들 수 있어요`:`먼저 따낼 것을 누르세요`)}),b(`SAVE ▸ 선반`,{cls:`small`,onPress:de}),b(`DELETE`,{cls:`small`,onPress:()=>s&&(s.saved?fe(s):(s.dead=!0,s=null,c()))}),h(`span`,{class:`stat shelf-n`}));y(Ee,()=>{let e=Ee.querySelector(`.shelf-n`);e&&(e.textContent=`${K.length}/16`)});let De=h(`div`,{class:`view board`,"data-keep":!0},A,h(`div`,{class:`board-deck`},M,N,me,ye,Ce,be,B,h(`div`,{class:`shelf-box`},Ee,we)));D.addEventListener(`pointerdown`,e=>{if(e.target.closest(`.key`))return;let t=D.getBoundingClientRect(),n=(e.clientX-t.left)/t.width,r=(e.clientY-t.top)/t.height;if(u&&s&&s.kind===`tap`)return se(s,n,r);l=`tap`,oe(`tap`,n,r)});let Oe=``,ke=()=>{let e=[K.map(e=>e.id+e.thumbs.length+e.name).join(`,`),q.length,s?.id,d,+!!s?.an,s?.look.id,s?.sound.mode,s?.kind].join(`|`);e!==Oe&&(Oe=e,Te(),xe(),he()),v()};return o(ke),ke(),{root:De,scr:D,player:()=>R(),frame(e,t){let n=R();s?dr(s,n,e):(n.loopIn=p.a,n.loopOut=Math.max(p.a+.05,p.b)),n.tick(e);let r=s&&!s.dead?s:null,i=r&&it(r)>0,o=r&&i?[{key:-1,g:r,p:n,x:0,y:0,scale:1,rot:0,tilt:0,sel:!1}]:[],c=r?it(r):1;return w.textContent=`${a.name}  ${n.pos(e).toFixed(1)}s\n${r?`${r.name} · ${et[r.kind]}${c<1?` 추적 ${Math.round(c*100)}%`:``}`:`따낼 것을 고르세요`}`,E.textContent=J.message||(u?`FIX · 빗나간 순간에 객체를 다시 누르세요`:s?``:`따낼 것을 손가락으로 누르세요`),ne(),{fr:{bg:{kind:`player`,p:n},dim:r&&i?.65:0,layers:o,beat:t,pulse:0,bgFx:!1},used:new Set([n]),voice:r&&f?r:null}},refresh:ke,get draft(){return s}}}function Sr(e){return e}function Cr(e){if(e==null)return Sr;var t,n,r=e.scale[0],i=e.scale[1],a=e.translate[0],o=e.translate[1];return function(e,s){s||(t=n=0);var c=2,l=e.length,u=Array(l);for(u[0]=(t+=e[0])*r+a,u[1]=(n+=e[1])*i+o;c<l;)u[c]=e[c],++c;return u}}function wr(e,t){for(var n,r=e.length,i=r-t;i<--r;)n=e[i],e[i++]=e[r],e[r]=n}function Tr(e,t){return typeof t==`string`&&(t=e.objects[t]),t.type===`GeometryCollection`?{type:`FeatureCollection`,features:t.geometries.map(function(t){return Er(e,t)})}:Er(e,t)}function Er(e,t){var n=t.id,r=t.bbox,i=t.properties==null?{}:t.properties,a=Dr(e,t);return n==null&&r==null?{type:`Feature`,properties:i,geometry:a}:r==null?{type:`Feature`,id:n,properties:i,geometry:a}:{type:`Feature`,id:n,bbox:r,properties:i,geometry:a}}function Dr(e,t){var n=Cr(e.transform),r=e.arcs;function i(e,t){t.length&&t.pop();for(var i=r[e<0?~e:e],a=0,o=i.length;a<o;++a)t.push(n(i[a],a));e<0&&wr(t,o)}function a(e){return n(e)}function o(e){for(var t=[],n=0,r=e.length;n<r;++n)i(e[n],t);return t.length<2&&t.push(t[0]),t}function s(e){for(var t=o(e);t.length<4;)t.push(t[0]);return t}function c(e){return e.map(s)}function l(e){var t=e.type,n;switch(t){case`GeometryCollection`:return{type:t,geometries:e.geometries.map(l)};case`Point`:n=a(e.coordinates);break;case`MultiPoint`:n=e.coordinates.map(a);break;case`LineString`:n=o(e.arcs);break;case`MultiLineString`:n=e.arcs.map(o);break;case`Polygon`:n=c(e.arcs);break;case`MultiPolygon`:n=e.arcs.map(c);break;default:return null}return{type:t,coordinates:n}}return l(t)}var Or={type:`Topology`,objects:{land:{type:`GeometryCollection`,geometries:[{type:`MultiPolygon`,arcs:[[[0]],[[1]],[[2]],[[3]],[[4]],[[5]],[[6]],[[7]],[[8]],[[9]],[[10]],[[11]],[[12]],[[13]],[[14]],[[15]],[[16,18]],[[19]],[[20]],[[21]],[[22]],[[23]],[[24]],[[25]],[[26]],[[27]],[[28]],[[29]],[[30]],[[31]],[[32]],[[33]],[[34]],[[35]],[[36]],[[37]],[[38]],[[39]],[[40]],[[41]],[[42]],[[43]],[[44]],[[45]],[[46]],[[47]],[[48]],[[49]],[[50]],[[51]],[[52]],[[53]],[[54]],[[55]],[[56]],[[57]],[[58]],[[59]],[[60]],[[61]],[[62]],[[63]],[[64]],[[65]],[[66]],[[67]],[[68]],[[69]],[[70]],[[71]],[[72]],[[73]],[[74]],[[75]],[[76]],[[77]],[[78]],[[79]],[[80]],[[81]],[[82]],[[83]],[[84]],[[85]],[[86]],[[87]],[[88]],[[89]],[[90]],[[91]],[[92,115],[114]],[[94]],[[95]],[[96]],[[97]],[[98]],[[99]],[[100]],[[101]],[[102]],[[103]],[[104]],[[105]],[[106]],[[107]],[[108]],[[109]],[[110]],[[111]],[[112]],[[113]],[[116]],[[117]],[[118]],[[119]],[[120]],[[121]],[[122]],[[123]],[[124]],[[125]],[[126]],[[127]],[[128]],[[129]]]}]}},arcs:[[[33452,3290],[-82,-301],[-81,-266],[-582,81],[-621,-35],[-348,197],[0,23],[-152,174],[625,-23],[599,-58],[207,243],[147,208],[288,-243]],[[5775,3611],[-533,-81],[-364,208],[-163,209],[-11,35],[-180,162],[169,220],[517,-93],[277,-185],[212,-209],[76,-266]],[[37457,4468],[342,-255],[120,-359],[33,-254],[11,-301],[-430,-186],[-452,-150],[-522,-139],[-582,-116],[-658,35],[-365,197],[49,243],[593,162],[239,197],[174,254],[126,220],[168,209],[180,243],[141,0],[414,127],[419,-127]],[[16330,7154],[359,-93],[332,104],[-158,-208],[-261,-151],[-386,47],[-278,208],[60,197],[332,-104]],[[15122,7165],[425,-231],[-164,23],[-359,58],[-381,162],[202,127],[277,-139]],[[22505,8080],[305,-81],[304,69],[163,-335],[-217,46],[-337,-23],[-343,23],[-376,-35],[-283,116],[-146,243],[174,104],[353,-81],[403,-46]],[[30985,8657],[33,-266],[-49,-231],[-76,-220],[-326,-81],[-311,-116],[-364,11],[136,232],[-327,-81],[-310,-81],[-212,174],[-16,243],[305,231],[190,70],[321,-23],[82,301],[16,219],[-6,475],[158,278],[256,93],[147,-220],[65,-220],[120,-267],[92,-254],[76,-267]],[[0,529],[16,-5],[245,344],[501,-185],[32,21],[78,49],[94,61],[81,52],[41,26],[41,-1],[29,-10],[402,-246],[352,246],[63,34],[816,104],[265,-138],[130,-71],[419,-196],[789,-151],[625,-185],[1072,-139],[800,162],[1181,-116],[669,-185],[734,174],[773,162],[60,278],[-1094,23],[-898,139],[-234,231],[-745,128],[49,266],[103,243],[104,220],[-55,243],[-462,162],[-212,209],[-430,185],[675,-35],[642,93],[402,-197],[495,173],[457,220],[223,197],[-98,243],[-359,162],[-408,174],[-571,35],[-500,81],[-539,58],[-180,220],[-359,185],[-217,208],[-87,672],[136,-58],[250,-185],[457,58],[441,81],[228,-255],[441,58],[370,127],[348,162],[315,197],[419,58],[-11,220],[-97,220],[81,208],[359,104],[163,-196],[425,115],[321,151],[397,12],[375,57],[376,139],[299,128],[337,127],[218,-35],[190,-46],[414,81],[370,-104],[381,11],[364,81],[375,-57],[414,-58],[386,23],[403,-12],[413,-11],[381,23],[283,174],[337,92],[349,-127],[331,104],[300,208],[179,-185],[98,-208],[180,-197],[288,174],[332,-220],[375,-70],[321,-162],[392,35],[354,104],[418,-23],[376,-81],[381,-104],[147,254],[-180,197],[-136,209],[-359,46],[-158,220],[-60,220],[-98,440],[213,-81],[364,-35],[359,35],[327,-93],[283,-174],[119,-208],[376,-35],[359,81],[381,116],[342,70],[283,-139],[370,46],[239,451],[224,-266],[321,-104],[348,58],[228,-232],[365,-23],[337,-69],[332,-128],[218,220],[108,209],[278,-232],[381,58],[283,-127],[190,-197],[370,58],[288,127],[283,151],[337,81],[392,69],[354,81],[272,127],[163,186],[65,254],[-32,244],[-87,231],[-98,232],[-87,231],[-71,209],[-16,231],[27,232],[130,220],[109,243],[44,231],[-55,255],[-32,232],[136,266],[152,173],[180,220],[190,186],[223,173],[109,255],[152,162],[174,151],[267,34],[174,186],[196,115],[228,70],[202,150],[157,186],[218,69],[163,-151],[-103,-196],[-283,-174],[-120,-127],[-206,92],[-229,-58],[-190,-139],[-202,-150],[-136,-174],[-38,-231],[17,-220],[130,-197],[-190,-139],[-261,-46],[-153,-197],[-163,-185],[-174,-255],[-44,-220],[98,-243],[147,-185],[229,-139],[212,-185],[114,-232],[60,-220],[82,-232],[130,-196],[82,-220],[38,-544],[81,-220],[22,-232],[87,-231],[-38,-313],[-152,-243],[-163,-197],[-370,-81],[-125,-208],[-169,-197],[-419,-220],[-370,-93],[-348,-127],[-376,-128],[-223,-243],[-446,-23],[-489,23],[-441,-46],[-468,0],[87,-232],[424,-104],[311,-162],[174,-208],[-310,-185],[-479,58],[-397,-151],[-17,-243],[-11,-232],[327,-196],[60,-220],[353,-220],[588,-93],[500,-162],[398,-185],[506,-186],[690,-92],[681,-162],[473,-174],[517,-197],[272,-278],[136,-220],[337,209],[457,173],[484,186],[577,150],[495,162],[691,12],[680,-81],[560,-139],[180,255],[386,173],[702,12],[550,127],[522,128],[577,81],[614,104],[430,150],[-196,209],[-119,208],[0,220],[-539,-23],[-571,-93],[-544,0],[-77,220],[39,440],[125,128],[397,138],[468,139],[337,174],[337,174],[251,231],[380,104],[376,81],[190,47],[430,23],[408,81],[343,116],[337,139],[305,139],[386,185],[245,197],[261,173],[82,232],[-294,139],[98,243],[185,185],[288,116],[305,139],[283,185],[217,232],[136,277],[202,163],[331,-35],[136,-197],[332,-23],[11,220],[142,231],[299,-58],[71,-220],[331,-34],[360,104],[348,69],[315,-34],[120,-243],[305,196],[283,105],[315,81],[310,81],[283,139],[310,92],[240,128],[168,208],[207,-151],[288,81],[202,-277],[157,-209],[316,116],[125,232],[283,162],[365,-35],[108,-220],[229,220],[299,69],[326,23],[294,-11],[310,-70],[300,-34],[130,-197],[180,-174],[304,104],[327,24],[315,0],[310,11],[278,81],[294,70],[245,162],[261,104],[283,58],[212,162],[152,324],[158,197],[288,-93],[109,-208],[239,-139],[289,46],[196,-208],[206,-151],[283,139],[98,255],[250,104],[289,197],[272,81],[326,116],[218,127],[228,139],[218,127],[261,-69],[250,208],[180,162],[261,-11],[229,139],[54,208],[234,162],[228,116],[278,93],[256,46],[244,-35],[262,-58],[223,-162],[27,-254],[245,-197],[168,-162],[332,-70],[185,-162],[229,-162],[266,-35],[223,116],[240,243],[261,-127],[272,-70],[261,-69],[272,-46],[277,0],[229,-614],[-11,-150],[-33,-267],[-266,-150],[-218,-220],[38,-232],[310,12],[-38,-232],[-141,-220],[-131,-243],[212,-185],[321,-58],[321,104],[153,232],[92,220],[153,185],[174,174],[70,208],[147,289],[174,58],[316,24],[277,69],[283,93],[136,231],[82,220],[190,220],[272,151],[234,115],[153,197],[157,104],[202,93],[277,-58],[250,58],[272,69],[305,-34],[201,162],[142,393],[103,-162],[131,-278],[234,-115],[266,-47],[267,70],[283,-46],[261,-12],[174,58],[234,-35],[212,-127],[250,81],[300,0],[255,81],[289,-81],[185,197],[141,196],[191,163],[348,439],[179,-81],[212,-162],[185,-208],[354,-359],[272,-12],[256,0],[299,70],[299,81],[229,162],[190,174],[310,23],[207,127],[218,-116],[141,-185],[196,-185],[305,23],[190,-150],[332,-151],[348,-58],[288,47],[218,185],[185,185],[250,46],[251,-81],[288,-58],[261,93],[250,0],[245,-58],[256,-58],[250,104],[299,93],[283,23],[316,0],[255,58],[251,46],[76,290],[11,243],[174,-162],[49,-266],[92,-244],[115,-196],[234,-105],[315,35],[365,12],[250,35],[364,0],[262,11],[364,-23],[310,-46],[196,-186],[-54,-220],[179,-173],[299,-139],[310,-151],[360,-104],[375,-92],[283,-93],[315,-12],[180,197],[245,-162],[212,-185],[245,-139],[337,-58],[321,-69],[136,-232],[316,-139],[212,-208],[310,-93],[321,12],[299,-35],[332,12],[332,-47],[310,-81],[288,-139],[289,-116],[195,-173],[-32,-232],[-147,-208],[-125,-266],[-98,-209],[-131,-243],[-364,-93],[-163,-208],[-360,-127],[-125,-232],[-190,-220],[-201,-185],[-115,-243],[-70,-220],[-28,-266],[6,-220],[158,-232],[60,-220],[130,-208],[517,-81],[109,-255],[-501,-93],[-424,-127],[-528,-23],[-234,-336],[-49,-278],[-119,-220],[-147,-220],[370,-196],[141,-244],[239,-219],[338,-197],[386,-186],[419,-185],[636,-185],[142,-289],[800,-128],[53,-45],[208,-175],[767,151],[636,-186],[-99520,-142]],[[31180,18764],[361,-355],[389,-147],[-125,-296],[-264,-29],[-141,208],[-92,-239],[-238,-183],[-301,67],[-202,177],[-291,86],[-350,330],[-283,317],[-383,662],[229,-124],[390,-395],[369,-212],[143,271],[90,405],[256,244],[198,-70],[106,-274],[139,-443]],[[33736,20389],[222,-266],[-83,-207],[-375,-177],[-125,207],[-236,-266],[-139,266],[333,354],[236,-148],[167,237]],[[69522,21210],[-427,-38],[-7,314],[41,244],[19,121],[179,-186],[263,-74],[9,-112],[-77,-269]],[[90387,26479],[269,-204],[151,81],[217,113],[166,-39],[20,-702],[-95,-203],[-29,-476],[-97,162],[-193,-412],[-57,32],[-171,19],[-171,505],[-38,390],[-160,515],[7,271],[181,-52]],[[98060,26404],[63,-244],[198,239],[80,-249],[0,-249],[-103,-274],[-182,-435],[-142,-238],[103,-284],[-214,-7],[-238,-223],[-75,-387],[-157,-597],[-219,-264],[-138,-169],[-256,13],[-180,194],[-302,42],[-46,217],[149,438],[349,583],[179,111],[200,225],[238,310],[167,306],[123,441],[106,149],[41,330],[195,273],[61,-251]],[[98502,29218],[202,-622],[5,403],[126,-161],[41,-447],[224,-192],[188,-48],[158,226],[141,-69],[-67,-524],[-85,-345],[-212,12],[-74,-179],[26,-254],[-41,-110],[-105,-319],[-138,-404],[-214,-236],[-48,155],[-116,85],[160,486],[-91,326],[-299,236],[8,214],[201,206],[47,455],[-13,382],[-113,396],[8,104],[-133,244],[-218,523],[-117,418],[104,46],[151,-328],[216,-153],[78,-526]],[[96421,37487],[-105,-142],[-153,160],[-199,266],[-179,313],[-184,416],[-38,201],[119,-9],[156,-201],[122,-200],[89,-166],[228,-366],[144,-272]],[[99547,40335],[96,-171],[-46,-308],[-172,-81],[-153,73],[-27,260],[107,203],[126,-74],[69,98]],[[0,40798],[99822,-145],[-177,-124],[-36,220],[139,121],[88,33],[-99836,184]],[[0,41087],[0,-289]],[[0,41087],[57,27],[-34,-284],[-23,-32]],[[96623,40851],[-92,-78],[-93,259],[10,158],[175,-339]],[[96418,41756],[45,-476],[-75,74],[-58,-32],[-39,163],[-6,453],[133,-182]],[[63904,42571],[45,-711],[72,-276],[-28,-284],[-49,-174],[-94,347],[-53,-175],[53,-438],[-24,-250],[-77,-137],[-18,-500],[-109,-689],[-137,-814],[-172,-1120],[-106,-821],[-125,-685],[-226,-140],[-243,-250],[-160,151],[-220,211],[-77,312],[-18,524],[-98,471],[-26,425],[50,426],[128,102],[1,197],[133,447],[25,377],[-65,280],[-52,372],[-23,544],[97,331],[38,375],[138,22],[155,121],[103,107],[122,7],[158,337],[229,364],[83,297],[-38,253],[118,-71],[153,410],[6,356],[92,264],[96,-254],[74,-251],[69,-390]],[[89877,42448],[100,-464],[179,223],[92,-250],[133,-231],[-29,-262],[60,-506],[42,-295],[70,-72],[75,-505],[-27,-307],[90,-400],[301,-309],[197,-281],[186,-257],[-37,-143],[159,-371],[108,-639],[111,130],[113,-256],[68,91],[48,-626],[197,-363],[129,-226],[217,-478],[78,-475],[7,-337],[-19,-365],[132,-502],[-16,-523],[-48,-274],[-75,-527],[6,-339],[-55,-423],[-123,-538],[-205,-290],[-102,-458],[-93,-292],[-82,-510],[-107,-294],[-70,-442],[-36,-407],[14,-187],[-159,-205],[-311,-22],[-257,-242],[-127,-229],[-168,-254],[-230,262],[-170,104],[43,308],[-152,-112],[-243,-428],[-240,160],[-158,94],[-159,42],[-269,171],[-179,364],[-52,449],[-64,298],[-137,240],[-267,71],[91,287],[-67,438],[-136,-408],[-247,-109],[146,327],[42,341],[107,289],[-22,438],[-226,-504],[-174,-202],[-106,-470],[-217,243],[9,313],[-174,429],[-147,221],[52,137],[-356,358],[-195,17],[-267,287],[-498,-56],[-359,-211],[-317,-197],[-265,39],[-294,-303],[-241,-137],[-53,-309],[-103,-240],[-236,-15],[-174,-52],[-246,107],[-199,-64],[-191,-27],[-165,-315],[-81,26],[-140,-167],[-133,-187],[-203,23],[-186,0],[-295,377],[-149,113],[6,338],[138,81],[47,134],[-10,212],[34,411],[-31,350],[-147,598],[-45,337],[12,336],[-111,385],[-7,174],[-123,235],[-35,463],[-158,467],[-39,252],[122,-255],[-93,548],[137,-171],[83,-229],[-5,303],[-138,465],[-26,186],[-65,177],[31,341],[56,146],[38,295],[-29,346],[114,425],[21,-450],[118,406],[225,198],[136,252],[212,217],[126,46],[77,-73],[219,220],[168,66],[42,129],[74,54],[153,-14],[292,173],[151,262],[71,316],[163,300],[13,236],[7,321],[194,502],[117,-510],[119,118],[-99,279],[87,287],[122,-128],[34,449],[152,291],[67,233],[140,101],[4,165],[122,-69],[5,148],[122,85],[134,80],[205,-271],[155,-350],[173,-4],[177,-56],[-59,325],[133,473],[126,155],[-44,147],[121,338],[168,208],[142,-70],[234,111],[-5,302],[-204,195],[148,86],[184,-147],[148,-242],[234,-151],[79,60],[172,-182],[162,169],[105,-51],[65,113],[127,-292],[-74,-316],[-105,-239],[-96,-20],[32,-236],[-81,-295],[-99,-291],[20,-166],[221,-327],[214,-189],[143,-204],[201,-350],[78,1],[145,-151],[43,-183],[265,-200],[183,202],[55,317],[56,262],[34,324],[85,470],[-39,286],[20,171],[-32,339],[37,445],[53,120],[-43,197],[67,313],[52,325],[7,168],[104,222],[78,-289],[19,-371],[70,-71],[11,-249],[101,-300],[21,-335],[-10,-214]],[[95032,44386],[78,-203],[-194,4],[-106,363],[166,-142],[56,-22]],[[83531,44530],[-117,-11],[-368,414],[259,116],[146,-180],[97,-180],[-17,-159]],[[94680,44747],[-108,-14],[-170,60],[-58,91],[17,235],[183,-93],[91,-124],[45,-155]],[[94910,44908],[-42,-109],[-206,512],[-57,353],[94,0],[100,-473],[111,-283]],[[84565,44589],[-238,-130],[-33,71],[25,201],[119,360],[275,235],[32,139],[239,133],[194,20],[87,74],[105,-74],[-102,-160],[-289,-258],[-233,-170],[-181,-441]],[[82749,45797],[100,-158],[172,48],[69,-251],[-321,-119],[-193,-79],[-149,5],[95,340],[153,5],[74,209]],[[84139,45797],[-41,-328],[-417,-168],[-370,73],[0,216],[220,123],[174,-177],[185,45],[249,216]],[[94409,45654],[12,-119],[-218,251],[-152,212],[-104,197],[41,60],[128,-142],[228,-272],[65,-187]],[[93760,46238],[-56,-33],[-121,134],[-114,243],[14,99],[166,-250],[111,-193]],[[80172,46575],[533,-59],[61,244],[515,-284],[101,-383],[417,-108],[341,-351],[-317,-225],[-306,238],[-251,-16],[-288,44],[-260,106],[-322,225],[-204,59],[-116,-74],[-506,243],[-48,254],[-255,44],[191,564],[337,-35],[224,-231],[115,-45],[38,-210]],[[87423,46908],[-143,-402],[-27,445],[49,212],[58,200],[63,-173],[0,-282]],[[93299,46550],[-78,-59],[-120,227],[-122,375],[-59,450],[38,57],[30,-175],[84,-134],[135,-375],[131,-200],[-39,-166]],[[92217,47343],[-146,-48],[-44,-166],[-152,-144],[-142,-138],[-148,1],[-228,171],[-158,165],[23,183],[249,-86],[152,46],[42,283],[40,15],[27,-314],[158,45],[78,202],[155,211],[-30,348],[166,11],[56,-97],[-5,-327],[-93,-361]],[[85346,48536],[-104,-196],[-192,108],[-54,254],[281,29],[69,-195]],[[86241,48752],[101,-452],[-234,244],[-232,49],[-157,-39],[-192,21],[65,325],[344,24],[305,-172]],[[92538,47921],[-87,-157],[-52,348],[-65,229],[-126,193],[-158,252],[-200,174],[77,143],[150,-166],[94,-130],[117,-142],[111,-248],[106,-189],[33,-307]],[[87261,49899],[78,-955],[287,-354],[232,627],[319,356],[247,1],[238,-206],[206,-212],[298,-113],[482,-407],[513,-338],[192,-302],[154,-297],[43,-349],[462,-365],[68,-313],[-256,-64],[62,-393],[248,-388],[180,-627],[159,20],[-11,-262],[215,-100],[-84,-111],[295,-249],[-30,-171],[-184,-41],[-69,153],[-238,66],[-281,89],[-216,377],[-158,325],[-144,517],[-362,259],[-235,-169],[-170,-195],[35,-436],[-218,-203],[-155,99],[-288,25],[-247,485],[-282,118],[-69,-168],[-352,-18],[118,481],[175,164],[-72,642],[-134,496],[-538,500],[-229,50],[-417,546],[-82,-287],[-107,-52],[-63,216],[-1,257],[-212,290],[299,213],[198,-11],[-23,156],[-407,1],[-110,352],[-248,109],[-117,293],[374,143],[142,192],[446,-242],[44,-220]],[[84788,51419],[-223,-587],[-209,-113],[-267,115],[-463,-29],[-243,-85],[-39,-447],[248,-526],[150,268],[518,201],[-22,-272],[-121,86],[-121,-347],[-245,-229],[263,-757],[-50,-203],[249,-682],[-2,-388],[-148,-173],[-109,207],[134,484],[-273,-229],[-69,164],[36,228],[-200,346],[21,576],[-186,-179],[24,-689],[11,-846],[-176,-85],[-119,173],[79,544],[-43,570],[-117,4],[-86,405],[115,387],[40,469],[139,891],[58,243],[237,439],[217,-174],[350,-82],[319,25],[275,429],[48,-132]],[[85746,51249],[-15,-517],[-143,58],[-42,-359],[114,-312],[-78,-71],[-112,374],[-82,755],[56,472],[92,215],[20,-322],[164,-52],[26,-241]],[[79393,47122],[-308,-12],[-234,494],[-356,482],[-119,358],[-210,481],[-138,443],[-212,827],[-244,493],[-81,508],[-103,461],[-250,372],[-145,506],[-209,330],[-290,652],[-24,300],[178,-24],[430,-114],[246,-577],[215,-401],[153,-246],[263,-635],[283,-9],[233,-405],[161,-495],[211,-270],[-111,-482],[159,-205],[100,-15],[47,-412],[97,-330],[204,-52],[135,-374],[-70,-735],[-11,-914]],[[82742,51659],[312,-546],[-329,-70],[-93,-403],[12,-535],[-267,-404],[-7,-589],[-107,-903],[-41,210],[-316,-266],[-110,361],[-198,34],[-139,189],[-330,-212],[-101,285],[-182,-32],[-229,68],[-43,793],[-138,164],[-134,505],[-38,517],[32,548],[165,392],[204,-202],[214,110],[56,500],[119,112],[333,128],[199,467],[137,374],[110,221],[236,323],[214,411],[140,462],[112,2],[143,-299],[13,-257],[183,-165],[231,-177],[-20,-232],[-186,-29],[50,-289],[-205,-201],[-158,-533],[204,-560],[-48,-272]],[[85104,55551],[28,-392],[16,-332],[-94,-540],[-102,602],[-130,-300],[89,-435],[-79,-277],[-327,343],[-78,428],[84,280],[-176,280],[-87,-245],[-131,23],[-205,-330],[-46,173],[109,498],[175,166],[151,223],[98,-268],[212,162],[45,264],[196,15],[-16,457],[225,-280],[23,-297],[20,-218]],[[72560,54241],[-242,-135],[-132,470],[-49,849],[126,959],[192,-328],[129,-416],[134,-616],[-42,-615],[-116,-168]],[[33073,56553],[-232,-65],[-50,53],[81,163],[-6,233],[160,77],[58,-21],[-11,-440]],[[84439,56653],[-100,-195],[-87,-373],[-87,-175],[-171,409],[57,158],[70,165],[30,367],[153,35],[-44,-398],[205,570],[-26,-563]],[[82917,56084],[-369,-561],[136,414],[200,364],[167,409],[146,587],[49,-482],[-183,-325],[-146,-406]],[[83856,57606],[166,-183],[177,1],[-5,-247],[-129,-251],[-176,-178],[-10,275],[20,301],[-43,282]],[[84861,57766],[78,-660],[-214,157],[5,-199],[68,-364],[-132,-133],[-11,416],[-84,31],[-43,357],[163,-47],[-4,224],[-169,451],[266,-13],[77,-220]],[[83757,58301],[-74,-510],[-119,295],[-142,450],[238,-22],[97,-213]],[[83700,61512],[171,-168],[85,153],[26,-150],[-46,-245],[95,-423],[-73,-491],[-164,-196],[-43,-476],[62,-471],[147,-65],[123,70],[347,-328],[-27,-321],[91,-142],[-29,-272],[-216,290],[-103,310],[-71,-217],[-177,354],[-253,-87],[-138,130],[14,244],[87,151],[-83,136],[-36,-213],[-137,340],[-41,257],[-11,566],[112,-195],[29,925],[90,535],[169,-1]],[[31780,61349],[-71,-149],[-209,4],[-163,-21],[-16,253],[40,86],[227,-3],[142,-52],[50,-118]],[[28638,61137],[-84,-99],[-156,95],[-159,215],[34,135],[116,41],[64,-20],[187,-53],[147,-142],[46,-161],[-195,-11]],[[29839,62320],[241,-93],[34,101],[217,-3],[165,-152],[73,15],[50,-209],[152,11],[-9,-176],[124,-21],[136,-217],[-103,-240],[-132,128],[-127,-25],[-92,28],[-50,-107],[-106,-37],[-43,144],[-92,-85],[-111,-405],[-71,94],[-14,170],[-185,100],[-131,-41],[-169,43],[-130,-110],[-149,184],[24,190],[256,-82],[210,-47],[100,131],[-127,256],[2,226],[-175,92],[62,163],[170,-26]],[[80649,61615],[-240,-284],[-228,183],[-8,509],[137,267],[304,166],[159,-14],[62,-226],[-122,-260],[-64,-341]],[[6794,61855],[-41,-99],[-69,84],[8,165],[-46,216],[14,65],[48,97],[-19,116],[16,55],[21,-11],[107,-100],[49,-51],[45,-79],[71,-207],[-7,-33],[-108,-126],[-89,-92]],[[6645,62777],[-94,-43],[-47,125],[-32,48],[-3,37],[27,50],[99,-56],[73,-90],[-23,-71]],[[6456,63091],[-9,-63],[-149,17],[21,72],[137,-26]],[[6207,63177],[-15,-34],[-19,8],[-97,21],[-35,133],[-11,24],[74,82],[23,-38],[80,-196]],[[5737,63567],[-33,-58],[-93,107],[14,43],[43,58],[64,-12],[5,-138]],[[27867,64030],[110,-216],[260,66],[98,-138],[235,-366],[173,-267],[92,8],[165,-120],[-20,-167],[205,-24],[210,-242],[-33,-138],[-185,-75],[-187,-29],[-191,46],[-398,-57],[186,329],[-113,154],[-179,39],[-96,171],[-66,336],[-157,-23],[-259,159],[-83,124],[-362,91],[-97,115],[104,148],[-273,30],[-199,-307],[-115,-8],[-40,-144],[-138,-65],[-118,56],[146,183],[60,213],[126,131],[142,116],[210,56],[67,65],[240,-42],[219,-7],[261,-201]],[[28462,64617],[-68,-29],[-70,340],[-104,171],[60,375],[84,-23],[97,-491],[1,-343]],[[83659,64045],[-119,-485],[-146,499],[-32,438],[163,581],[223,447],[127,-176],[-49,-357],[-167,-947]],[[28383,66284],[-303,-95],[-19,219],[130,47],[184,-18],[8,-153]],[[28611,66290],[-48,-420],[-51,75],[4,309],[-124,234],[-1,67],[220,-265]],[[87399,70756],[35,-203],[-156,-357],[-114,189],[-143,-137],[-73,-346],[-181,168],[2,281],[154,352],[158,-68],[114,248],[204,-127]],[[59604,71655],[-188,-251],[21,-111],[8,-48],[-285,-240],[-136,77],[-64,237],[132,22],[19,3],[40,143],[200,-8],[253,176]],[[56583,71675],[152,-199],[216,34],[207,-42],[-7,-103],[151,71],[-35,-175],[-400,-50],[3,98],[-339,115],[52,251]],[[54311,73167],[-100,-465],[41,-183],[-58,-303],[-213,222],[-141,64],[-387,300],[38,304],[325,-54],[284,64],[211,51]],[[52558,74927],[166,-419],[-39,-782],[-126,38],[-113,-197],[-105,156],[-11,713],[-64,338],[153,-30],[139,183]],[[89159,72524],[-104,-472],[48,-296],[-145,-416],[-355,-278],[-488,-36],[-396,-675],[-186,227],[-12,442],[-483,-130],[-329,-279],[-325,-11],[282,-435],[-186,-1004],[-179,-248],[-135,229],[69,533],[-176,172],[-113,405],[263,182],[145,371],[280,306],[203,403],[553,177],[297,-121],[291,1050],[185,-282],[408,591],[158,229],[174,723],[-47,664],[117,374],[295,108],[152,-819],[-9,-479],[-256,-595],[4,-610]],[[52655,75484],[-92,-456],[-126,120],[-64,398],[56,219],[179,226],[47,-507]],[[89974,76679],[195,-126],[197,250],[62,-663],[-412,-162],[-244,-587],[-436,404],[-152,-646],[-308,-9],[-39,587],[138,455],[296,33],[81,817],[83,460],[326,-615],[213,-198]],[[32315,78082],[202,-79],[257,16],[-137,-242],[-102,-38],[-353,250],[-69,198],[105,183],[97,-288]],[[32831,79592],[-135,-11],[-360,186],[-258,279],[96,49],[365,-148],[284,-247],[8,-108]],[[15692,79240],[-140,-82],[-456,269],[-84,209],[-248,207],[-50,168],[-286,107],[-107,321],[24,137],[291,-129],[171,-89],[261,-63],[94,-204],[138,-280],[277,-244],[115,-327]],[[34407,80527],[-184,-517],[181,199],[187,-126],[-98,-206],[247,-162],[128,144],[277,-182],[-86,-433],[194,101],[36,-313],[86,-367],[-117,-520],[-125,-22],[-183,111],[60,484],[-77,75],[-322,-513],[-166,21],[196,277],[-267,144],[-298,-35],[-539,18],[-43,175],[173,208],[-121,160],[234,356],[287,941],[172,336],[241,204],[129,-26],[-54,-160],[-148,-372]],[[13136,82508],[267,47],[-84,-671],[242,-475],[-111,1],[-167,270],[-103,272],[-140,184],[-51,260],[16,188],[131,-76]],[[89901,80562],[280,-1046],[-411,195],[-171,-854],[271,-605],[-8,-413],[-211,356],[-182,-457],[-51,496],[31,575],[-32,638],[64,446],[13,790],[-163,581],[24,808],[257,271],[-110,274],[123,83],[73,-391],[96,-569],[-7,-581],[114,-597]],[[48114,81456],[-493,-349],[-393,89],[225,617],[-145,601],[378,463],[210,276],[233,24],[298,-365],[-149,-406],[46,-422],[-210,-528]],[[53524,83435],[-166,-478],[-291,333],[-39,246],[408,195],[88,-296]],[[7498,84325],[-277,-225],[-142,152],[-43,277],[252,210],[148,90],[185,-40],[117,-183],[-240,-281]],[[49165,85222],[-297,-639],[283,81],[304,-3],[-72,-481],[-250,-530],[287,-38],[270,-759],[190,-95],[171,-673],[79,-233],[337,-113],[-34,-378],[-142,-173],[111,-305],[-250,-310],[-371,6],[-473,-163],[-130,116],[-183,-276],[-257,67],[-195,-226],[-148,118],[407,621],[249,127],[-436,99],[-79,235],[291,183],[-152,319],[52,387],[414,-54],[40,343],[-190,372],[-337,104],[-66,160],[101,264],[-92,163],[-149,-279],[-17,569],[-140,301],[101,611],[216,480],[222,-47],[335,49]],[[4006,85976],[-171,-92],[-182,110],[-168,161],[274,101],[220,-54],[27,-226]],[[27981,87304],[-108,-310],[-123,50],[-73,176],[13,41],[107,177],[114,-13],[70,-121]],[[27250,87631],[-325,-326],[-196,13],[-61,160],[207,273],[381,-6],[-6,-114]],[[2297,88264],[171,-113],[173,61],[225,-156],[276,-79],[-23,-64],[-211,-125],[-211,128],[-106,107],[-245,-34],[-66,52],[17,223]],[[26344,89371],[51,-259],[143,91],[161,-155],[304,-203],[318,-184],[25,-281],[204,46],[199,-196],[-247,-186],[-432,142],[-156,266],[-275,-314],[-396,-306],[-95,346],[-377,-57],[242,292],[35,465],[95,542],[201,-49]],[[45969,89843],[-64,-382],[314,-403],[-361,-451],[-801,-405],[-240,-107],[-365,87],[-775,187],[273,261],[-605,289],[492,114],[-12,174],[-583,137],[188,385],[421,87],[433,-400],[422,321],[349,-167],[453,315],[461,-42]],[[28926,90253],[-312,-30],[-69,289],[118,331],[255,82],[217,-163],[3,-253],[-32,-82],[-180,-174]],[[0,91325],[681,-451],[728,-588],[-24,-367],[187,-147],[-64,429],[754,-88],[544,-553],[-276,-257],[-455,-61],[-7,-578],[-111,-122],[-260,17],[-212,206],[-369,172],[-62,257],[-283,96],[-315,-76],[-151,207],[60,219],[-333,-140],[126,-278],[-158,-251]],[[0,88971],[0,2354]],[[23431,91410],[-173,-207],[-374,179],[-226,-65],[-380,266],[245,183],[194,256],[295,-168],[166,-106],[84,-112],[169,-226]],[[0,92833],[99999,-404],[-305,-30],[-49,187],[-99645,247]],[[0,92833],[36,24],[235,-1],[402,-169],[-24,-81],[-286,-141],[-363,-36],[0,404]],[[24848,91640],[-1,-604],[371,463],[332,-380],[-83,-438],[269,-399],[290,427],[202,510],[16,648],[394,-45],[411,-87],[373,-293],[17,-293],[-207,-315],[196,-316],[-36,-288],[-544,-413],[-386,-91],[-287,178],[-83,-297],[-268,-498],[-81,-258],[-322,-400],[-397,-39],[-220,-250],[-18,-384],[-323,-74],[-340,-479],[-301,-665],[-108,-466],[-15,-686],[408,-99],[125,-553],[130,-448],[388,117],[517,-256],[277,-225],[199,-279],[348,-162],[294,-249],[459,-34],[302,-58],[-45,-511],[86,-594],[201,-661],[414,-561],[214,192],[150,607],[-145,934],[-196,311],[445,276],[314,415],[154,411],[-22,395],[-189,502],[-338,445],[328,619],[-121,535],[-93,922],[194,137],[476,-161],[286,-57],[230,155],[258,-200],[342,-343],[85,-229],[495,-45],[-8,-496],[92,-747],[254,-92],[201,-348],[402,328],[266,652],[184,274],[216,-527],[362,-754],[307,-709],[-112,-371],[370,-333],[250,-338],[442,-152],[179,-189],[110,-500],[216,-78],[112,-223],[20,-664],[-202,-222],[-199,-207],[-458,-210],[-349,-486],[-470,-96],[-594,125],[-417,4],[-287,-41],[-233,-424],[-354,-262],[-401,-782],[-320,-545],[236,97],[446,776],[583,493],[416,59],[245,-290],[-262,-397],[88,-637],[91,-446],[361,-295],[459,86],[278,664],[19,-429],[180,-214],[-344,-387],[-615,-351],[-276,-239],[-310,-426],[-211,44],[-11,500],[483,488],[-445,-19],[-309,-72],[48,-194],[-296,-286],[-286,-204],[-293,-175],[-159,-386],[-35,-98],[-3,-313],[92,-313],[115,-15],[-29,216],[83,-131],[-22,-169],[-188,-96],[-133,12],[-205,-104],[-121,-29],[-162,-29],[-231,-171],[408,111],[82,-112],[-389,-177],[-177,-1],[8,72],[-84,-164],[82,-27],[-60,-424],[-203,-455],[-20,152],[-61,31],[-91,147],[57,-318],[66,-106],[8,-222],[-89,-230],[-157,-472],[-25,24],[86,402],[-142,226],[-33,490],[-53,-255],[59,-375],[-175,88],[183,-186],[12,-562],[79,-41],[29,-204],[39,-591],[-176,-439],[-288,-175],[-182,-346],[-139,-38],[-141,-217],[-39,-199],[-305,-383],[-157,-281],[-131,-351],[-43,-419],[50,-411],[92,-505],[124,-418],[1,-256],[132,-685],[-9,-398],[-12,-230],[-69,-361],[-83,-74],[-137,71],[-44,259],[-106,136],[-147,508],[-129,452],[-42,231],[57,393],[-77,325],[-217,494],[-108,91],[-281,-269],[-49,30],[-135,276],[-174,146],[-314,-75],[-247,66],[-212,-41],[-118,-83],[54,-166],[-5,-240],[59,-117],[-53,-77],[-103,87],[-104,-112],[-202,18],[-207,313],[-242,-74],[-202,137],[-173,-42],[-234,-138],[-253,-438],[-276,-255],[-152,-282],[-63,-266],[-3,-407],[14,-284],[52,-201],[1,-1],[-1,-1],[-107,-516],[-49,-426],[-20,-791],[-27,-289],[48,-322],[86,-288],[56,-458],[184,-440],[65,-337],[109,-291],[295,-157],[114,-247],[244,165],[212,60],[208,106],[175,101],[176,241],[67,345],[22,496],[48,173],[188,155],[294,137],[246,-21],[169,50],[66,-125],[-9,-285],[-149,-351],[-66,-360],[51,-103],[-42,-255],[-69,-461],[-71,152],[-58,-10],[1,-87],[53,-3],[-5,-160],[-45,-256],[24,-91],[-29,-212],[18,-56],[-32,-299],[-55,-156],[-50,-19],[-55,-205],[90,-107],[24,88],[82,-75],[29,-23],[61,104],[79,8],[26,-48],[43,29],[129,-53],[128,16],[90,65],[32,66],[89,-31],[66,-40],[73,14],[55,51],[127,-82],[44,-13],[85,-110],[80,-132],[101,-91],[73,-162],[-24,-57],[-14,-132],[29,-216],[-64,-202],[-30,-237],[-9,-261],[15,-152],[7,-266],[-43,-58],[-26,-253],[19,-156],[-56,-151],[12,-159],[43,-97],[70,-321],[108,-238],[130,-252],[100,-212],[-6,-125],[111,-27],[26,48],[77,-145],[136,42],[119,150],[168,119],[95,176],[153,-34],[-10,-58],[155,-21],[124,-102],[90,-177],[105,-164],[143,-18],[209,412],[114,63],[3,195],[51,500],[159,274],[175,11],[22,123],[218,-49],[218,298],[109,132],[134,285],[98,-36],[73,-156],[-54,-199],[-8,-139],[-163,-69],[91,-268],[-3,-309],[-123,-343],[105,-469],[120,38],[62,427],[-86,208],[-14,447],[346,241],[-38,278],[97,186],[100,-415],[195,-9],[180,-330],[11,-195],[249,-6],[297,61],[159,-264],[213,-73],[155,184],[4,149],[344,35],[333,9],[-236,-175],[95,-279],[222,-44],[210,-291],[45,-473],[144,13],[109,-139],[183,-217],[171,-385],[8,-304],[105,-14],[149,-289],[109,-205],[333,-119],[30,107],[225,43],[298,-159],[95,-65],[204,-140],[294,-499],[46,-242],[95,28],[69,-327],[155,-1033],[149,-97],[7,-408],[-208,-487],[86,-178],[491,-92],[10,-593],[211,388],[349,-212],[462,-361],[135,-346],[-45,-327],[323,182],[540,-313],[415,23],[411,-489],[355,-662],[214,-170],[237,-24],[101,-186],[94,-752],[46,-358],[-110,-977],[-142,-385],[-391,-822],[-177,-668],[-206,-513],[-69,-11],[-78,-435],[20,-1107],[-77,-910],[-30,-390],[-88,-233],[-49,-790],[-282,-771],[-47,-610],[-225,-256],[-65,-355],[-302,2],[-437,-227],[-195,-263],[-311,-173],[-327,-470],[-235,-586],[-41,-441],[46,-326],[-51,-597],[-63,-289],[-195,-325],[-308,-1040],[-244,-468],[-189,-277],[-127,-562],[-183,-337],[-121,-372],[-313,-328],[-205,118],[-151,-63],[-256,253],[-189,-19],[-169,327],[-19,-308],[353,-506],[-38,-408],[173,-257],[-14,-289],[-267,-757],[-412,-317],[-557,-123],[-305,59],[59,-352],[-57,-442],[51,-298],[-167,-208],[-284,-82],[-267,216],[-108,-155],[39,-587],[188,-178],[152,186],[82,-307],[-255,-183],[-223,-367],[-41,-595],[-66,-316],[-262,-2],[-218,-302],[-80,-443],[274,-433],[265,-119],[-96,-531],[-328,-333],[-180,-692],[-254,-234],[-113,-276],[89,-614],[185,-342],[-117,30],[-247,4],[-134,-145],[-250,-213],[-45,-552],[-118,-14],[-313,192],[-318,412],[-346,338],[-87,374],[79,346],[-140,393],[-36,1007],[119,568],[293,457],[-422,172],[265,522],[94,982],[309,-208],[145,1224],[-186,157],[-87,-738],[-175,83],[87,845],[95,1095],[127,404],[-79,576],[-23,666],[117,19],[170,954],[192,945],[118,881],[-64,885],[83,487],[-34,730],[163,721],[50,1143],[89,1227],[87,1321],[-20,967],[-58,832],[-279,340],[-24,242],[-551,593],[-498,646],[-214,365],[-115,488],[46,170],[-236,775],[-274,1090],[-262,1177],[-114,269],[-87,435],[-216,386],[-198,239],[90,264],[-134,563],[86,414],[221,373],[148,442],[-60,258],[-106,-275],[-166,259],[56,167],[-47,536],[97,89],[52,368],[105,381],[-20,241],[153,126],[190,236],[-37,183],[103,44],[-12,296],[65,214],[138,40],[117,371],[106,310],[-102,141],[52,343],[-62,540],[59,155],[-44,500],[-112,315],[-93,170],[-59,319],[68,158],[-70,40],[-52,195],[-138,165],[-122,-38],[-56,-205],[-112,-149],[-61,-20],[-27,-123],[132,-321],[-75,-76],[-40,-87],[-130,-30],[-48,353],[-36,-101],[-92,35],[-56,238],[-114,39],[-72,69],[-119,-1],[-8,-128],[-32,89],[-151,131],[-56,124],[32,103],[-11,130],[-77,142],[-109,116],[-95,76],[-19,173],[-73,105],[18,-172],[-55,-141],[-64,164],[-89,58],[-38,120],[2,179],[36,187],[-78,83],[64,114],[-96,186],[-130,238],[-61,200],[-117,185],[-140,267],[31,92],[46,-89],[21,41],[-48,185],[-84,52],[-31,-140],[-161,9],[-100,57],[-115,117],[-154,37],[-79,127],[-142,103],[-174,11],[-127,117],[-149,244],[-314,636],[-144,192],[-226,154],[-156,-43],[-223,-223],[-140,-58],[-196,156],[-208,112],[-260,271],[-208,83],[-314,275],[-233,282],[-70,158],[-155,35],[-284,187],[-116,270],[-299,335],[-139,373],[-66,288],[93,57],[-29,169],[64,153],[1,204],[-93,266],[-25,235],[-94,298],[-244,587],[-280,462],[-135,368],[-238,241],[-51,145],[42,365],[-142,137],[-164,288],[-69,412],[-149,48],[-162,311],[-130,288],[-12,184],[-149,446],[-99,452],[5,227],[-201,235],[-93,-26],[-159,163],[-44,-240],[46,-284],[27,-444],[95,-243],[206,-407],[46,-139],[42,-42],[37,-203],[49,8],[56,-381],[85,-150],[59,-210],[174,-300],[92,-550],[83,-259],[77,-277],[15,-311],[134,-20],[112,-268],[100,-264],[-6,-106],[-117,-217],[-49,3],[-74,359],[-182,337],[-200,286],[-142,150],[9,432],[-42,320],[-132,183],[-191,264],[-37,-76],[-70,154],[-171,143],[-164,343],[20,44],[115,-33],[103,221],[10,266],[-214,422],[-163,163],[-102,369],[-103,388],[-129,472],[-113,531],[-46,302],[-180,340],[-130,71],[-30,169],[-156,30],[-100,159],[-258,59],[-70,95],[-34,324],[-270,594],[-231,821],[10,137],[-123,195],[-215,495],[-38,482],[-148,323],[61,489],[-10,507],[-89,453],[109,557],[67,1072],[-50,792],[-88,506],[-80,274],[33,115],[402,-200],[148,-558],[68,156],[-44,485],[-94,484],[-38,1],[-537,581],[-199,255],[-503,245],[-155,523],[40,362],[-356,252],[-48,476],[-336,429],[-6,304],[-153,223],[-245,188],[-78,515],[-358,478],[-150,558],[-267,38],[-441,15],[-326,170],[-574,613],[-266,112],[-486,211],[-385,-50],[-546,271],[-330,252],[-309,-125],[58,-411],[-154,-38],[-321,-123],[-245,-199],[-307,-126],[-40,348],[125,580],[295,182],[-76,148],[-354,-329],[-190,-394],[-400,-420],[203,-287],[-262,-424],[-299,-247],[-278,-181],[-69,-261],[-434,-305],[-87,-278],[-325,-252],[-191,45],[-259,-165],[-282,-201],[-231,-197],[-477,-169],[-43,99],[304,276],[271,182],[296,324],[345,66],[137,243],[385,353],[62,119],[205,208],[48,448],[141,349],[-320,-179],[-90,102],[-150,-215],[-181,300],[-75,-212],[-104,294],[-278,-236],[-170,0],[-24,352],[50,217],[-179,210],[-361,-113],[-235,277],[-190,142],[-1,334],[-214,252],[108,340],[226,330],[99,303],[225,43],[191,-94],[224,285],[201,-51],[212,183],[-52,270],[-155,106],[205,228],[-170,-7],[-295,-128],[-85,-131],[-219,131],[-392,-67],[-407,142],[-117,238],[-351,343],[390,247],[620,289],[228,0],[-38,-295],[586,22],[-225,366],[-342,226],[-197,295],[-267,252],[-381,187],[155,309],[493,19],[350,270],[66,287],[284,281],[271,68],[526,262],[256,-40],[427,315],[421,-124],[201,-266],[123,114],[469,-35],[-16,-136],[425,-101],[283,59],[585,-186],[534,-56],[214,-77],[370,96],[421,-177],[302,-83],[518,-142],[438,-284],[289,-55],[244,247],[336,184],[413,-72],[416,259],[455,148],[191,-245],[207,138],[62,278],[192,-63],[470,-530],[369,401],[38,-448],[341,96],[105,173],[337,-34],[424,-248],[650,-217],[383,-100],[272,38],[375,-300],[-391,-293],[502,-127],[750,70],[236,103],[296,-354],[302,299],[-283,251],[179,202],[338,27],[223,59],[224,-141],[279,-321],[310,47],[491,-266],[431,94],[405,-14],[-32,367],[247,103],[431,-200],[-2,-559],[177,471],[223,-16],[126,594],[-298,364],[-324,239],[22,653],[329,429],[366,-95],[281,-261],[378,-666],[-247,-290],[517,-120]],[[18287,93781],[-139,-277],[618,179],[386,-298],[314,302],[254,-194],[227,-580],[140,244],[-197,606],[244,86],[276,-94],[311,-239],[175,-575],[86,-417],[466,-293],[502,-279],[-31,-260],[-456,-48],[178,-227],[-94,-217],[-503,93],[-478,160],[-322,-36],[-522,-201],[-824,-103],[-374,-41],[-151,279],[-379,161],[-246,-66],[-343,468],[185,62],[429,101],[392,-26],[362,103],[-537,138],[-594,-47],[-394,12],[-146,217],[644,237],[-428,-9],[-485,156],[233,443],[193,235],[744,359],[284,-114]],[[20972,93958],[-244,-390],[-434,413],[95,83],[372,24],[211,-130]],[[28794,93770],[25,-163],[-296,17],[-299,13],[-304,-80],[-80,36],[-306,313],[12,213],[133,39],[636,-63],[479,-325]],[[25955,93803],[219,-369],[256,477],[704,242],[477,-611],[-42,-387],[550,172],[263,235],[616,-299],[383,-282],[36,-258],[515,134],[290,-376],[670,-234],[242,-238],[263,-553],[-510,-275],[654,-386],[441,-130],[400,-543],[437,-39],[-87,-414],[-487,-687],[-342,253],[-437,568],[-359,-74],[-35,-338],[292,-344],[377,-272],[114,-157],[181,-584],[-96,-425],[-350,160],[-697,473],[393,-509],[289,-357],[45,-206],[-753,236],[-596,343],[-337,287],[97,167],[-414,304],[-405,286],[5,-171],[-803,-94],[-235,203],[183,435],[522,10],[571,76],[-92,211],[96,294],[360,576],[-77,261],[-107,203],[-425,286],[-563,201],[178,150],[-294,367],[-245,34],[-219,201],[-149,-175],[-503,-76],[-1011,132],[-588,174],[-450,89],[-231,207],[290,270],[-394,2],[-88,599],[213,528],[286,241],[717,158],[-204,-382]],[[22123,94208],[331,-124],[496,75],[72,-172],[-259,-283],[420,-254],[-50,-532],[-455,-229],[-268,50],[-192,225],[-690,456],[5,189],[567,-73],[-306,386],[329,286]],[[89889,93835],[-421,-4],[-569,66],[-49,31],[263,234],[348,54],[394,-226],[34,-155]],[[24112,93575],[-298,-442],[-317,22],[-173,519],[4,294],[145,251],[276,161],[579,-20],[530,-144],[-415,-526],[-331,-115]],[[16539,92764],[-731,-294],[-147,259],[-641,312],[93,193],[218,489],[241,388],[-272,362],[939,93],[397,-123],[709,-33],[270,-171],[298,-249],[-349,-149],[-681,-415],[-344,-414],[0,-248]],[[91869,94941],[-321,-234],[-444,53],[-516,233],[66,192],[518,-89],[697,-155]],[[23996,94879],[-151,-229],[-403,44],[-337,155],[148,266],[399,159],[243,-208],[101,-187]],[[90301,95224],[-219,-439],[-1023,16],[-461,-139],[-550,384],[149,406],[366,111],[734,-26],[1004,-313]],[[22639,95907],[212,-273],[9,-303],[-127,-440],[-458,-60],[-298,94],[5,345],[-455,-46],[-18,457],[299,-18],[419,201],[390,-34],[22,77]],[[19941,95601],[109,-210],[247,99],[291,-26],[49,-289],[-169,-281],[-940,-91],[-701,-256],[-423,-14],[-35,193],[577,261],[-1255,-70],[-389,106],[379,577],[262,165],[782,-199],[493,-350],[485,-45],[-397,565],[255,215],[286,-68],[94,-282]],[[65981,92363],[-164,-52],[-907,77],[-74,262],[-503,158],[-40,320],[284,126],[-10,323],[551,503],[-255,73],[665,518],[-75,268],[621,312],[917,380],[925,110],[475,220],[541,76],[193,-233],[-187,-184],[-984,-293],[-848,-282],[-863,-562],[-414,-577],[-435,-568],[56,-491],[531,-484]],[[23699,96131],[308,-190],[547,1],[240,-194],[-64,-222],[319,-134],[177,-140],[374,-26],[406,-50],[441,128],[566,51],[451,-42],[298,-223],[62,-244],[-174,-157],[-414,-127],[-355,72],[-797,-91],[-570,-11],[-449,73],[-738,190],[-96,325],[-34,293],[-279,258],[-574,72],[-322,183],[104,242],[573,-37]],[[17722,96454],[-38,-454],[-214,-205],[-259,-29],[-517,-252],[-444,-91],[-377,128],[472,442],[570,383],[426,-9],[381,87]],[[63641,74970],[141,-419],[130,-28],[85,-159],[-228,-47],[-49,-459],[-47,-207],[-102,-138],[7,-293],[88,-436],[263,-123],[193,-296],[395,-102],[434,156],[27,139],[-52,417],[40,618],[-216,200],[71,405],[-184,34],[61,498],[262,-145],[244,189],[-202,355],[-80,338],[-224,-151],[-28,-433],[-87,383],[-15,144],[68,246],[-53,206],[-322,202],[-125,530],[-154,150],[-9,192],[270,-56],[11,432],[236,96],[243,-88],[50,576],[-50,365],[-278,-28],[-236,144],[-321,-260],[-259,-124],[-127,-350],[-269,-97],[-276,-610],[252,-561],[-27,-398],[303,-696],[146,-311]],[[0,88971],[99997,-3],[-357,-260],[-360,44],[250,-315],[166,-487],[128,-159],[32,-244],[-71,-157],[-518,129],[-777,-445],[-247,-69],[-425,-415],[-403,-362],[-102,-269],[-397,409],[-724,-464],[-126,220],[-268,-254],[-371,81],[-90,-388],[-333,-572],[10,-239],[316,-132],[-37,-860],[-258,-22],[-119,-494],[116,-255],[-486,-301],[-96,-675],[-415,-144],[-83,-600],[-400,-551],[-103,407],[-119,862],[-155,1313],[134,819],[234,353],[15,276],[431,132],[496,744],[479,608],[499,471],[223,833],[-337,-50],[-167,-487],[-705,-648],[-227,726],[-717,-201],[-696,-990],[230,-362],[-620,-154],[-430,-61],[20,427],[-431,90],[-344,-291],[-850,102],[-913,-175],[-900,-1153],[-1065,-1394],[438,-74],[136,-370],[270,-132],[178,296],[305,-39],[401,-650],[9,-502],[-217,-591],[-23,-705],[-126,-945],[-418,-855],[-94,-409],[-377,-688],[-374,-682],[-179,-349],[-370,-346],[-175,-8],[-175,287],[-373,-432],[-43,-197],[-106,36],[-120,-201],[-83,-201],[10,-424],[-143,-130],[-50,-105],[-104,-174],[-185,-97],[-121,-159],[-9,-256],[-32,-65],[111,-96],[157,-259],[240,-697],[68,-383],[3,-681],[-105,-325],[-252,-113],[-222,-245],[-250,-51],[-31,322],[52,443],[-123,615],[206,99],[-190,506],[-135,113],[-34,-112],[-81,-49],[-10,112],[-72,54],[-75,94],[77,260],[65,69],[-25,108],[71,319],[-18,97],[-163,64],[-131,158],[-388,-171],[-204,-277],[-300,-161],[148,274],[-58,230],[220,397],[-147,310],[-242,-209],[-314,-411],[-171,-381],[-272,-29],[-142,-275],[147,-400],[227,-97],[9,-265],[220,-172],[311,421],[247,-230],[179,-15],[46,-310],[-394,-165],[-130,-319],[-270,-296],[-142,-414],[299,-324],[109,-582],[169,-541],[189,-454],[-5,-439],[-174,-161],[66,-315],[164,-184],[-43,-481],[-71,-468],[-155,-53],[-203,-640],[-225,-775],[-258,-705],[-382,-545],[-386,-498],[-313,-68],[-170,-262],[-96,192],[-157,-294],[-388,-296],[-294,-90],[-95,-624],[-154,-35],[-73,429],[66,228],[-373,190],[-131,-97],[-371,-505],[-231,-558],[-61,-410],[212,-623],[260,-772],[252,-365],[169,-475],[127,-1093],[-37,-1039],[-232,-389],[-318,-381],[-227,-492],[-346,-550],[-101,378],[78,401],[-206,335],[-233,87],[-112,307],[-141,611],[-249,271],[-238,-11],[41,464],[-245,-3],[-22,-650],[-150,-863],[-90,-522],[19,-428],[181,-18],[113,-539],[50,-512],[155,-338],[168,-69],[144,-306],[64,-56],[164,-356],[116,-396],[16,-398],[-29,-269],[27,-203],[20,-349],[98,-163],[109,-523],[-5,-199],[-197,-40],[-263,438],[-329,469],[-32,301],[-161,395],[-38,489],[-100,322],[30,431],[-61,250],[-110,227],[-47,292],[-148,334],[-135,280],[-45,-347],[-53,328],[30,369],[82,566],[-27,439],[86,452],[-94,350],[23,644],[-113,306],[-90,707],[-50,746],[-121,490],[-183,-297],[-315,-421],[-156,53],[-172,138],[96,732],[-58,554],[-218,681],[34,213],[-163,76],[-197,481],[-79,309],[-16,301],[-53,284],[-116,344],[-256,23],[25,-243],[-87,-329],[-118,120],[-41,-108],[-78,65],[-108,53],[-39,-216],[-189,7],[-343,-122],[16,-445],[-148,-349],[-400,-398],[-311,-695],[-209,-373],[-276,-386],[-1,-272],[-138,-146],[-250,-212],[-130,-31],[-84,-450],[58,-769],[15,-490],[-118,-561],[-1,-1004],[-144,-29],[-126,-450],[84,-195],[-253,-167],[-93,-402],[-112,-170],[-263,552],[-128,827],[-107,596],[-97,279],[-148,568],[-69,739],[-48,369],[-253,811],[-115,1145],[-83,756],[1,716],[-54,553],[-404,-353],[-196,70],[-362,716],[133,214],[-82,232],[-326,501],[-203,150],[-83,425],[-215,449],[-512,-111],[-451,-11],[-391,-83],[-523,179],[-302,136],[-314,76],[-118,725],[-133,105],[-214,-106],[-280,-286],[-339,196],[-281,454],[-267,168],[-186,561],[-205,788],[-149,-96],[-177,196],[-103,-231],[-165,29],[58,-261],[-25,-135],[89,-445],[109,-510],[137,-135],[47,-207],[190,-248],[16,-244],[-27,-197],[35,-199],[80,-165],[37,-194],[41,-145],[-18,430],[75,310],[76,64],[84,-186],[5,-345],[-61,-348],[53,-226],[49,29],[11,-162],[217,93],[230,-15],[168,-18],[190,400],[207,379],[176,364],[80,201],[35,-51],[-26,-244],[-37,-108],[38,-466],[125,-404],[155,-214],[204,-78],[164,-107],[125,-339],[75,-196],[100,-75],[-1,-132],[-101,-352],[-44,-166],[-117,-189],[-104,-404],[-126,31],[-58,-141],[-44,-300],[34,-395],[-26,-72],[-128,2],[-174,-221],[-27,-288],[-63,-125],[-173,5],[-109,-149],[1,-239],[-134,-164],[-153,56],[-186,-199],[-128,-33],[-201,-159],[-54,-263],[-6,-201],[-277,-249],[-444,-276],[-249,-417],[-122,-32],[-83,34],[-163,-245],[-177,-113],[-233,-31],[-70,-34],[-61,-156],[-73,-43],[-42,-150],[-138,13],[-89,-80],[-192,30],[-72,345],[8,323],[-46,174],[-54,437],[-80,243],[56,29],[-29,270],[34,114],[-12,257],[-36,253],[-84,177],[-22,236],[-143,212],[-148,495],[-79,482],[-192,406],[-124,97],[-184,563],[-32,411],[12,350],[-159,655],[-130,231],[-150,122],[-92,339],[15,133],[-77,307],[-81,131],[-108,440],[-170,476],[-141,406],[-139,-3],[44,325],[12,206],[34,236],[-9,86],[-78,-238],[-60,-446],[-75,-308],[-65,-103],[-93,191],[-125,263],[-198,847],[-29,-53],[115,-624],[171,-594],[210,-920],[102,-321],[90,-334],[249,-654],[-55,-103],[9,-384],[323,-530],[49,-121],[90,-580],[-61,-107],[40,-608],[102,-706],[106,-145],[152,-219],[161,-683],[77,-543],[152,-288],[379,-558],[154,-336],[151,-341],[87,-203],[136,-178],[66,-183],[-9,-245],[-158,-142],[119,-161],[91,-109],[54,-244],[125,-248],[138,-2],[262,151],[302,70],[245,184],[138,39],[99,108],[158,20],[89,12],[128,88],[147,59],[132,202],[105,2],[6,-163],[-25,-344],[1,-310],[-59,-214],[-78,-639],[-134,-659],[-172,-755],[-238,-866],[-237,-661],[-327,-806],[-278,-479],[-415,-586],[-259,-450],[-304,-715],[-64,-312],[-63,-140],[-195,-236],[-68,-246],[-104,-44],[-40,-416],[-89,-238],[-54,-393],[-112,-195],[-128,-728],[16,-335],[178,-216],[8,-153],[-76,-357],[16,-180],[-18,-282],[97,-370],[115,-583],[101,-129],[45,-265],[-11,-588],[34,-519],[11,-923],[49,-290],[-83,-422],[-108,-410],[-177,-366],[-254,-225],[-313,-287],[-313,-634],[-107,-108],[-194,-420],[-115,-136],[-23,-421],[132,-448],[54,-346],[4,-177],[49,29],[-8,-579],[-45,-274],[65,-102],[-41,-246],[-116,-210],[-229,-199],[-334,-320],[-122,-219],[24,-248],[71,-40],[-24,-311],[-70,-430],[-32,-491],[-72,-267],[-190,-298],[-54,-86],[-118,-300],[-77,-303],[-158,-424],[-314,-609],[-196,-355],[-209,-269],[-291,-229],[-141,-31],[-36,-164],[-169,88],[-138,-113],[-301,114],[-168,-72],[-115,31],[-286,-233],[-238,-94],[-171,-223],[-127,-14],[-117,210],[-94,11],[-120,264],[-13,-82],[-37,159],[2,346],[-90,396],[89,108],[-7,453],[-182,553],[-139,501],[-1,1],[-199,768],[-207,446],[-108,432],[-62,575],[-68,428],[-93,910],[-7,707],[-35,322],[-108,243],[-144,489],[-146,708],[-60,371],[-226,577],[-17,453],[-26,372],[38,519],[96,541],[15,254],[90,532],[66,243],[159,386],[90,263],[29,438],[-15,335],[-83,211],[-74,358],[-68,355],[15,122],[85,235],[-84,570],[-57,396],[-139,374],[26,115],[-39,183],[-74,444],[-228,626],[-285,596],[-184,488],[-169,610],[9,196],[61,189],[67,430],[56,438],[-52,90],[96,663],[40,467],[-108,390],[-127,100],[-56,265],[-71,85],[3,163],[-289,-213],[-105,32],[-107,-133],[-222,13],[-149,370],[-91,427],[-197,390],[-209,-8],[-245,1],[-229,-69],[-224,-126],[-436,-346],[-154,-203],[-250,-171],[-248,168],[-126,-7],[-194,116],[-178,-7],[-329,-103],[-193,-170],[-275,-217],[-54,15],[-73,-5],[-286,282],[-252,450],[-237,323],[-187,381],[-75,44],[-200,238],[-144,316],[-49,216],[-34,437],[-122,349],[-108,232],[-71,76],[-69,118],[-32,261],[-41,130],[-80,97],[-149,247],[-117,39],[-63,166],[1,90],[-84,125],[-18,127],[-46,453],[36,262],[-115,460],[-138,210],[122,112],[134,415],[66,304],[-24,318],[78,291],[34,557],[-30,583],[-34,294],[28,295],[-72,281],[-146,255],[12,249],[13,274],[106,161],[91,308],[-18,200],[96,417],[155,376],[93,95],[74,344],[6,315],[100,365],[185,216],[177,603],[144,235],[259,66],[219,403],[139,158],[232,493],[-70,735],[106,508],[37,312],[179,399],[278,270],[206,244],[186,612],[87,362],[205,-2],[167,-251],[264,41],[288,-131],[121,-6],[267,323],[300,102],[175,244],[268,180],[471,105],[459,48],[140,-87],[262,232],[297,5],[113,-137],[190,35],[302,239],[195,-71],[-9,-299],[236,217],[20,-113],[-139,-289],[-2,-274],[96,-147],[-36,-511],[-183,-297],[53,-322],[143,-10],[70,-281],[106,-92],[326,-204],[117,51],[232,-98],[368,-264],[130,-526],[250,-114],[391,-248],[296,-293],[136,153],[133,272],[-65,452],[87,288],[200,277],[192,80],[375,-121],[95,-264],[104,-2],[88,-101],[276,-69],[68,-196],[369,10],[268,-156],[275,-175],[129,-92],[214,188],[114,169],[245,49],[198,-75],[75,-293],[65,193],[222,-140],[217,-33],[137,149],[80,194],[-19,34],[74,276],[56,446],[40,149],[8,6],[99,482],[138,416],[5,21],[-26,452],[68,243],[-102,268],[105,222],[-169,-51],[-233,136],[-191,-340],[-421,-66],[-225,317],[-300,20],[-64,-245],[-192,-71],[-268,315],[-303,-10],[-165,587],[-203,328],[135,459],[-176,283],[308,565],[428,23],[117,449],[529,-78],[334,383],[324,167],[459,13],[485,-416],[399,-229],[323,91],[239,-53],[328,309],[42,252],[-70,403],[-160,218],[-154,68],[-102,181],[-354,499],[-317,223],[-240,347],[202,95],[231,494],[-156,234],[410,241],[-8,129],[-249,-95],[-222,-48],[-185,-191],[-260,-31],[-239,-220],[16,-368],[136,-142],[284,35],[-55,-210],[-304,-103],[-377,-342],[-154,121],[61,277],[-304,173],[50,113],[265,197],[-80,135],[-432,149],[-19,221],[-257,-73],[-103,-325],[-215,-437],[6,-152],[-135,-128],[-84,56],[-78,-713],[-144,-245],[-101,-422],[89,-337],[33,-228],[243,-190],[-51,-145],[-330,-33],[-118,-182],[-232,-319],[-87,275],[3,122],[-169,17],[-145,56],[-336,-154],[192,-332],[-141,-96],[-154,0],[-147,304],[-52,-130],[62,-353],[139,-277],[-105,-130],[155,-272],[137,-171],[4,-334],[-257,157],[82,-302],[-176,-62],[105,-521],[-184,-7],[-228,257],[-104,472],[-49,393],[-108,272],[-143,337],[-18,168],[-48,41],[-5,130],[-154,199],[-24,281],[23,403],[38,184],[-46,93],[-59,46],[-78,192],[-120,118],[-261,218],[-161,213],[-254,176],[-233,435],[56,44],[-127,248],[-5,200],[-179,93],[-85,-255],[-82,198],[6,205],[10,9],[62,54],[-221,86],[-226,-210],[15,-293],[-34,-168],[91,-301],[261,-298],[140,-488],[309,-476],[217,3],[68,-130],[-78,-118],[249,-213],[204,-179],[238,-308],[29,-111],[-52,-211],[-154,276],[-242,97],[-116,-382],[200,-219],[-33,-309],[-116,-35],[-148,-506],[-116,-46],[1,181],[57,317],[60,126],[-108,342],[-85,298],[-115,74],[-82,255],[-179,107],[-120,238],[-206,38],[-217,267],[-254,384],[-189,341],[-86,584],[-138,68],[-226,195],[-128,-80],[-161,-274],[-115,-43],[-252,-334],[-548,160],[-404,-192],[-32,-355],[15,-344],[-263,-393],[-356,-125],[-25,-199],[-171,-327],[-107,-481],[108,-338],[-160,-263],[-60,-384],[-210,-118],[-197,-455],[-352,-8],[-265,11],[-174,-209],[-106,-223],[-136,49],[-103,199],[-79,340],[-259,92],[-112,-153],[-146,83],[-143,-65],[42,462],[-26,363],[-124,55],[-67,224],[22,386],[111,215],[20,239],[58,355],[-6,250],[-56,212],[-12,200],[14,420],[-114,257],[393,426],[340,-107],[373,4],[296,-101],[230,31],[449,-19],[144,354],[53,1177],[-287,620],[-205,299],[-424,228],[-28,430],[360,129],[466,-152],[-88,669],[263,-254],[646,461],[84,484],[243,119],[222,117],[143,162],[244,870],[380,247],[231,-17],[54,125],[232,32],[52,-130],[188,291],[-63,222],[-13,335],[-113,328],[-8,604],[46,159],[80,178],[244,36],[98,163],[223,167],[-9,-304],[-82,-192],[33,-166],[151,-89],[-68,-223],[-83,64],[-200,-425],[76,-288],[4,-228],[281,-138],[-3,-210],[283,111],[156,162],[313,-233],[132,-189],[189,174],[434,273],[350,200],[277,-100],[21,-144],[268,-7],[63,260],[383,191],[-59,497],[10,445],[136,371],[262,202],[221,-442],[223,12],[53,453],[32,349],[-102,-75],[-176,210],[-24,340],[351,164],[350,86],[301,-97],[287,17],[316,327],[-291,280],[-504,-47],[-489,-216],[-452,-125],[-161,322],[-269,195],[62,581],[-135,534],[133,344],[252,371],[635,640],[185,124],[-28,250],[-387,279],[-478,-167],[-269,-413],[43,-361],[-441,-475],[-537,-509],[-202,-832],[198,-416],[265,-328],[-255,-666],[-289,-138],[-106,-992],[-157,-554],[-337,57],[-158,-468],[-321,-27],[-89,558],[-232,671],[-211,835],[-187,363],[-548,-684],[-370,-138],[-385,301],[-99,635],[-88,1364],[256,380],[733,496],[549,609],[508,824],[668,1141],[465,444],[763,741],[610,259],[457,-31],[423,489],[506,-26],[499,118],[869,-433],[-358,-158],[305,-371],[286,206],[456,-358],[761,-140],[1050,-668],[213,-281],[18,-393],[-308,-311],[-454,-157],[-1240,449],[-204,-75],[453,-433],[36,-878],[358,-180],[217,-153],[36,286],[-174,263],[183,215],[672,-368],[234,144],[-187,433],[647,578],[256,-34],[260,-206],[161,406],[-231,352],[136,353],[-204,367],[777,-190],[158,-331],[-351,-73],[2,-328],[218,-203],[429,128],[68,377],[581,282],[969,507],[209,-29],[-273,-359],[344,-61],[199,202],[521,16],[412,245],[317,-356],[315,391],[-291,343],[145,195],[820,-179],[385,-185],[1006,-675],[186,309],[-282,313],[-8,125],[-335,58],[92,280],[-149,461],[-8,189],[512,535],[182,537],[207,116],[735,-156],[58,-328],[-263,-479],[173,-189],[89,-413],[-63,-809],[307,-362],[-120,-395],[-544,-839],[318,-87],[110,213],[306,151],[74,293],[240,281],[-162,336],[130,390],[-304,49],[-67,328],[222,594],[-361,481],[497,398],[-64,421],[139,13],[145,-328],[-109,-570],[297,-108],[-127,426],[465,233],[577,31],[513,-337],[-247,492],[-28,630],[484,119],[668,-26],[602,77],[-226,309],[321,388],[319,16],[540,293],[734,79],[93,162],[729,55],[227,-133],[624,314],[510,-10],[77,255],[265,252],[656,242],[476,-191],[-378,-146],[629,-90],[75,-292],[254,143],[812,-7],[626,-289],[223,-221],[-69,-307],[-307,-175],[-730,-328],[-209,-175],[345,-83],[410,-149],[250,112],[142,-379],[122,153],[444,93],[892,-97],[67,-276],[1162,-88],[15,451],[590,-103],[443,3],[449,-312],[128,-378],[-165,-247],[349,-465],[437,-240],[268,620],[446,-266],[473,159],[538,-182],[204,166],[455,-83],[-201,549],[367,256],[2509,-384],[236,-351],[727,-451],[1122,112],[553,-98],[231,-244],[-33,-432],[342,-168],[372,121],[492,15],[525,-116],[526,66],[484,-526],[344,189],[-224,378],[123,263],[886,-166],[578,36],[799,-282],[-99610,-258]],[[23933,96380],[-126,-17],[-521,38],[-74,165],[559,-9],[195,-109],[-33,-68]],[[19392,96485],[-518,-170],[-411,191],[224,188],[406,60],[392,-92],[-93,-177]],[[56867,96577],[-620,-241],[-490,137],[191,152],[-167,189],[575,119],[110,-222],[401,-134]],[[19538,97019],[-339,-115],[-461,1],[5,84],[285,177],[149,-27],[361,-120]],[[23380,96697],[-411,-122],[-226,138],[-119,221],[-22,245],[360,-24],[162,-39],[332,-205],[-76,-214]],[[22205,96856],[108,-247],[-453,66],[-457,192],[-619,21],[268,176],[-335,142],[-21,227],[546,-81],[751,-215],[212,-281]],[[79187,96845],[-1566,-228],[507,776],[229,66],[208,-38],[704,-336],[-82,-240]],[[55069,97669],[915,-440],[-699,-233],[-155,-435],[-243,-111],[-132,-490],[-335,-23],[-598,361],[252,210],[-416,170],[-541,499],[-216,463],[757,212],[152,-207],[396,8],[105,202],[408,20],[350,-206]],[[57068,98086],[545,-207],[-412,-318],[-806,-70],[-819,98],[-50,163],[-398,11],[-304,271],[858,165],[403,-142],[281,177],[702,-148]],[[64204,98169],[-373,-78],[-250,-45],[-39,-97],[-324,-98],[-301,140],[158,185],[-618,18],[542,107],[422,8],[57,-160],[159,142],[262,97],[412,-129],[-107,-90]],[[77760,97184],[-606,-73],[-773,170],[-462,226],[-213,423],[-379,117],[722,404],[600,133],[540,-297],[640,-572],[-69,-531]],[[25828,97644],[334,-190],[-381,-176],[-513,-445],[-492,-42],[-575,76],[-299,240],[4,215],[220,157],[-508,-4],[-306,196],[-176,268],[193,262],[192,180],[285,42],[-122,135],[646,30],[355,-315],[468,-127],[455,-112],[220,-390]],[[30972,99681],[742,-47],[597,-75],[508,-161],[-12,-157],[-678,-257],[-672,-119],[-251,-133],[605,3],[-656,-358],[-452,-167],[-476,-483],[-573,-98],[-177,-120],[-841,-64],[383,-74],[-192,-105],[230,-292],[-264,-202],[-429,-167],[-132,-232],[-388,-176],[39,-134],[475,23],[6,-144],[-742,-355],[-726,163],[-816,-91],[-414,71],[-525,31],[-35,284],[514,133],[-137,427],[170,41],[742,-255],[-379,379],[-450,113],[225,229],[492,141],[79,206],[-392,231],[-118,304],[759,-26],[220,-64],[433,216],[-625,68],[-972,-38],[-491,201],[-232,239],[-324,173],[-61,202],[413,112],[324,19],[545,96],[409,220],[344,-30],[300,-166],[211,319],[367,95],[498,65],[849,24],[148,-63],[802,100],[601,-38],[602,-37]],[[42472,99925],[1737,-469],[-513,-227],[-1062,-26],[-1496,-58],[140,-105],[984,65],[836,-204],[540,181],[231,-212],[-305,-344],[707,220],[1348,229],[833,-114],[156,-253],[-1132,-420],[-157,-136],[-888,-102],[643,-28],[-324,-431],[-224,-383],[9,-658],[333,-386],[-434,-24],[-457,-187],[513,-313],[65,-502],[-297,-55],[360,-508],[-617,-42],[322,-241],[-91,-208],[-391,-91],[-388,-2],[348,-400],[4,-263],[-549,244],[-143,-158],[375,-148],[364,-361],[105,-476],[-495,-114],[-214,228],[-344,340],[95,-401],[-322,-311],[732,-25],[383,-32],[-745,-515],[-755,-466],[-813,-204],[-306,-2],[-288,-228],[-386,-624],[-597,-414],[-192,-24],[-370,-145],[-399,-138],[-238,-365],[-4,-415],[-141,-388],[-453,-472],[112,-462],[-125,-488],[-142,-577],[-391,-36],[-410,482],[-556,3],[-269,324],[-186,577],[-481,735],[-141,385],[-38,530],[-384,546],[100,435],[-186,208],[275,691],[418,220],[110,247],[58,461],[-318,-209],[-151,-88],[-249,-84],[-341,193],[-19,401],[109,314],[258,9],[567,-157],[-478,375],[-249,202],[-276,-83],[-232,147],[310,550],[-169,220],[-220,409],[-335,626],[-353,230],[3,247],[-745,346],[-590,43],[-743,-24],[-677,-44],[-323,188],[-482,372],[729,186],[559,31],[-1188,154],[-627,241],[39,229],[1051,285],[1018,284],[107,214],[-750,213],[243,235],[961,413],[404,63],[-115,265],[658,156],[854,93],[853,5],[303,-184],[737,325],[663,-221],[390,-46],[577,-192],[-660,318],[38,253],[932,353],[975,-27],[354,218],[982,57],[2219,-74]]],bbox:[-180,-85.60903777459777,180,83.64513000000002],transform:{scale:[.0036000360003600037,.0016925586033320111],translate:[-180,-85.60903777459777]}},kr=null;function Ar(){if(kr)return kr;let e=Tr(Or,Or.objects.land),t=e.features?e.features.map(e=>e.geometry):[e.geometry];kr=[];for(let e of t){let t=e.type===`Polygon`?[e.coordinates]:e.coordinates;for(let e of t)for(let t of e)kr.push(t.map(([e,t])=>[e,t]))}return kr}var jr=`tp.clock`,Mr=Nr();function Nr(){try{let e=JSON.parse(localStorage.getItem(jr)||``);if(e&&typeof e.r0==`number`)return e}catch{}return{r0:Date.now(),w0:Date.now(),speed:1}}function Pr(){try{localStorage.setItem(jr,JSON.stringify(Mr))}catch{}}window.addEventListener(`storage`,e=>{e.key===jr&&(Mr=Nr())});var Y=()=>Mr.w0+(Date.now()-Mr.r0)*Mr.speed,Fr=()=>Mr.speed;function Ir(e){let t=Y();Mr={r0:Date.now(),w0:t,speed:e},Pr()}function Lr(e){Mr={r0:Date.now(),w0:e,speed:Mr.speed},Pr()}function Rr(){Mr={r0:Date.now(),w0:Date.now(),speed:1},Pr()}var X=6371,zr=398600.4418,Br=864e5,Vr=7*Br,Hr=2*Math.PI*Math.sqrt(6771**3/zr)*1e3,Ur=Math.PI/180,Z=(e,t)=>[Math.cos(e*Ur)*Math.cos(t*Ur),Math.cos(e*Ur)*Math.sin(t*Ur),Math.sin(e*Ur)],Q=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Wr=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],Gr=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]};function Kr(e,t){let n=Z(e.lat,e.lon),r=Z(t.lat,t.lon),i=[r[0]-Q(r,n)*n[0],r[1]-Q(r,n)*n[1],r[2]-Q(r,n)*n[2]];Math.hypot(...i)<1e-6&&(i=Wr(n,Math.abs(n[2])<.9?[0,0,1]:[1,0,0])),i=Gr(i);let a=Math.atan2(Q(r,i),Q(r,n));return{u:n,w:i,thetaB:a<0?a+2*Math.PI:a}}var qr=(e,t)=>(e.phase??0)+2*Math.PI*(t-e.launchAt)/Hr;function Jr(e,t){return 400-280*Math.max(0,Math.min(1,(t-e.launchAt)/e.lifeMs))**3}var Yr=(e,t)=>t>=e.launchAt&&t<e.launchAt+e.lifeMs,Xr=new WeakMap;function Zr(e){let t=Xr.get(e);return t||Xr.set(e,t=Kr(e.A,e.B)),t}function Qr(e,t){let n=Zr(e),r=qr(e,t),i=Math.cos(r),a=Math.sin(r);return[i*n.u[0]+a*n.w[0],i*n.u[1]+a*n.w[1],i*n.u[2]+a*n.w[2]]}function $r(e,t){let n=Qr(e,t),r=X+Jr(e,t);return[n[0]*r,n[1]*r,n[2]*r]}function ei(e,t,n){return ti($r(e,t),n)}function ti(e,t){let n=Z(t.lat,t.lon),r=[n[0]*X,n[1]*X,n[2]*X],i=[e[0]-r[0],e[1]-r[1],e[2]-r[2]],a=Math.hypot(...i),o=t.lon*Ur,s=t.lat*Ur,c=[-Math.sin(o),Math.cos(o),0],l=[-Math.sin(s)*Math.cos(o),-Math.sin(s)*Math.sin(o),Math.cos(s)],u=Math.asin(Q(i,n)/a)/Ur,d=Math.atan2(Q(i,c),Q(i,l))/Ur;return d<0&&(d+=360),{az:d,el:u,dist:a}}function ni(e,t,n){let r=Zr(e),i=n?r.thetaB:0,a=qr(e,Math.max(t,e.launchAt))-i,o=Math.ceil(a/(2*Math.PI)-1e-9);return e.launchAt+(i+2*Math.PI*o-(e.phase??0))/(2*Math.PI)*Hr}function ri(e=400,t=0){let n=t*Ur;return(Math.acos(X*Math.cos(n)/(X+e))-n)/(2*Math.PI)*Hr}function ii(e,t,n){let r=ri(Jr(e,t)),i=ni(e,t-r,n);return i-r>e.launchAt+e.lifeMs&&(i=1/0),{centre:i,start:i-r,end:i+r,now:t>=i-r&&t<=i+r}}function ai(e){let t=new Date(e),n=(e-Date.UTC(t.getUTCFullYear(),0,0))/Br;return Z(-23.44*Math.cos(2*Math.PI/365*(n+10)),-15*(t.getUTCHours()+t.getUTCMinutes()/60+t.getUTCSeconds()/3600-12))}function oi(e,t){let n=ai(t),r=Q(e,n);if(r>0)return!1;let i=[e[0]-r*n[0],e[1]-r*n[1],e[2]-r*n[2]];return Math.hypot(...i)<X}var si=(e,t)=>Math.acos(Math.max(-1,Math.min(1,Q(Z(e.lat,e.lon),Z(t.lat,t.lon)))))*X,ci=[{type:`rod`,name:`ROD`,ko:`막대 안테나`,group:`antenna`,weight:1,bytes:30},{type:`loop`,name:`LOOP`,ko:`루프 안테나`,group:`antenna`,weight:2,bytes:90},{type:`dish`,name:`DISH`,ko:`접시 안테나`,group:`antenna`,weight:4,bytes:270},{type:`wingS`,name:`WING S`,ko:`작은 태양전지판`,group:`solar`,weight:2,weeks:2},{type:`wingL`,name:`WING L`,ko:`큰 태양전지판`,group:`solar`,weight:4,weeks:5},{type:`battery`,name:`BATT`,ko:`배터리`,group:`battery`,weight:2,charge:100},{type:`tankS`,name:`TANK S`,ko:`연료 탱크 소`,group:`fuel`,weight:3,shots:10},{type:`tankL`,name:`TANK L`,ko:`연료 탱크 대`,group:`fuel`,weight:6,shots:30}],li=e=>ci.find(t=>t.type===e),ui=.1,di=1.8,fi=.4;function pi(e){let t=4,n=9,r=1,i=0,a=0,o=0;for(let s of e){let e=li(s.type);t+=e.weight,n+=e.bytes??0,r+=e.weeks??0,i+=e.charge??0,a+=e.shots??0,e.group===`solar`&&o++}return{weight:t,bytes:n,weeks:r,charge:i,shots:a,wings:o,night:i>0,over:t>20}}var mi=e=>new TextEncoder().encode(e).length;function hi(e,t){let n=``;for(let r of e){if(mi(n+r)>t)break;n+=r}return n}var gi=`tp.sats`,_i=yi(),vi=new Set;function yi(){try{return JSON.parse(localStorage.getItem(gi)||`[]`)}catch{return[]}}var bi=()=>_i;function $(){try{localStorage.setItem(gi,JSON.stringify(_i))}catch(e){console.warn(`save failed`,e)}vi.forEach(e=>e())}function xi(e){vi.add(e)}window.addEventListener(`storage`,e=>{e.key===gi&&(_i=yi(),vi.forEach(e=>e()))});function Si(e){_i.push(e),$()}function Ci(e){_i=_i.filter(t=>t.id!==e.id),$()}var wi=e=>`${e}${Date.now().toString(36)}${Math.floor(Math.random()*1e6).toString(36)}`;function Ti(){return sessionStorage.getItem(`tp.role`)||`A`}function Ei(e){sessionStorage.setItem(`tp.role`,e)}var Di=Date.UTC(2026,8,6,12,0,0),Oi=e=>Di+(e-1)*Vr,ki=e=>Math.max(1,Math.floor((e-Di)/Vr)+2),Ai=e=>ki(e)-1,ji=e=>`ARK ${String(e).padStart(3,`0`)}`,Mi={lat:34.43,lon:127.53,name:`NARO`};function Ni(e){let t=e>>>0||1;return()=>(t=t*1664525+1013904223>>>0)/4294967296}var Pi=e=>4+Math.floor(Ni(e*7919)()*26),Fi=[{lat:37.57,lon:126.98,name:`SEOUL`},{lat:35.18,lon:129.08,name:`BUSAN`},{lat:33.5,lon:126.53,name:`JEJU`},{lat:35.87,lon:128.6,name:`DAEGU`},{lat:35.16,lon:126.85,name:`GWANGJU`},{lat:35.68,lon:139.69,name:`TOKYO`},{lat:34.69,lon:135.5,name:`OSAKA`},{lat:39.9,lon:116.4,name:`BEIJING`},{lat:25.03,lon:121.56,name:`TAIPEI`},{lat:13.75,lon:100.5,name:`BANGKOK`},{lat:19.08,lon:72.88,name:`MUMBAI`},{lat:30.04,lon:31.24,name:`CAIRO`},{lat:-1.29,lon:36.82,name:`NAIROBI`},{lat:48.86,lon:2.35,name:`PARIS`},{lat:51.51,lon:-.13,name:`LONDON`},{lat:52.52,lon:13.4,name:`BERLIN`},{lat:64.15,lon:-21.94,name:`REYKJAVIK`},{lat:40.71,lon:-74,name:`NEW YORK`},{lat:34.05,lon:-118.24,name:`LOS ANGELES`},{lat:19.43,lon:-99.13,name:`MEXICO CITY`},{lat:-12.05,lon:-77.04,name:`LIMA`},{lat:-23.55,lon:-46.63,name:`SAO PAULO`},{lat:-33.87,lon:151.21,name:`SYDNEY`},{lat:1.35,lon:103.82,name:`SINGAPORE`},{lat:55.76,lon:37.62,name:`MOSCOW`},{lat:43.65,lon:-79.38,name:`TORONTO`},{lat:-36.85,lon:174.76,name:`AUCKLAND`},{lat:41.01,lon:28.98,name:`ISTANBUL`},{lat:59.33,lon:18.07,name:`STOCKHOLM`},{lat:21.03,lon:105.85,name:`HANOI`}],Ii=Fi,Li=[`MOMO`,`GRANDMA`,`LITTLE STAR`,`OUR CAT`,`BLUE MUG`,`SUNDAY`,`KIMCHI`,`DAD`,`NO.9`,`PAPER BOAT`,`BORI`,`LAST BUS`,`HAEBARAGI`,`TOAST`,`MINT`,`COCO`,`SNOW`,`JIWOO`,`SEA`,`BEAN`],Ri=[`#ff3a24`,`#ff8c1a`,`#ffe02a`,`#a8f4ff`,`#4ab8ff`,`#ffffff`,`#ff40c0`,`#90ff50`];function zi(e){let t=Ni(e*104729+17),n=[],r=Math.min(24,Pi(e));for(let i=0;i<r;i++){let r=Fi[Math.floor(t()*Fi.length)],a=Fi[Math.floor(t()*Fi.length)];a===r&&(a=Fi[(Fi.indexOf(r)+1)%Fi.length]);let o=[1,1,2,3,3,4,6][Math.floor(t()*7)];n.push({id:`w${e}.${i}`,no:100+e*37+i*3+Math.floor(t()*3),name:Li[Math.floor(t()*Li.length)],color:Ri[Math.floor(t()*Ri.length)],shape:Math.floor(t()*1e6),launchNo:e,orbit:{A:r,B:a,launchAt:Oi(e),lifeMs:o*Vr,phase:t()*.3}})}return n}var Bi=new Map;function Vi(e){let t=Ai(e),n=[];for(let r=Math.max(1,t-12);r<=t;r++){let t=Bi.get(r);t||Bi.set(r,t=zi(r));for(let r of t)Yr(r.orbit,e)&&n.push(r)}for(let t of bi()){let r=Ui(t);r&&Yr(r,e)&&n.push({id:t.id,no:t.no,name:t.name,color:t.color,shape:0,orbit:r,launchNo:t.launchNo,mine:t})}return n}var Hi=new WeakMap;function Ui(e){if(e.launchAt===void 0||!e.lifeMs)return null;let t=Hi.get(e);return t&&t.launchAt===e.launchAt||Hi.set(e,t={A:e.A,B:e.B,launchAt:e.launchAt,lifeMs:e.lifeMs,phase:e.phase??0}),t}function Wi(e){let t=[],n=!1;for(let r of bi()){if(r.status===`applied`&&r.applyNo!==void 0)for(;r.status===`applied`&&r.applyNo!==void 0&&e>=Oi(r.applyNo);){let e=r.applyNo,i=Pi(e)+1;if(i<=24||Ni(Gi(r.id)^e*2654435761)()<24/i){let n=pi(r.parts);r.status=`orbit`,r.launchNo=e,r.launchAt=Oi(e),r.lifeMs=n.weeks*Vr,r.phase=Gi(r.id)%1e3/1e3*.2,t.push(`${r.name} — ${ji(e)}에 실려 궤도에 올랐어요`)}else r.waited=(r.waited??0)+1,r.applyNo=e+1,t.push(`${r.name} — ${ji(e)} 추첨에서 떨어졌어요. 다음 주 대기`);n=!0}r.status===`orbit`&&r.launchAt!==void 0&&r.lifeMs&&e>=r.launchAt+r.lifeMs&&(r.status=`burned`,t.push(`${r.name} — 대기권에 들어가 불타 사라졌어요`),n=!0)}return n&&$(),t}function Gi(e){let t=2166136261;for(let n=0;n<e.length;n++)t=Math.imul(t^e.charCodeAt(n),16777619);return t>>>0}var Ki=`"JetBrains Mono", ui-monospace, monospace`,qi=new Map;function Ji(e){let t=qi.get(e);return t||(t=new Image,t.src=e,qi.set(e,t)),t}var Yi=new Map;function Xi(e,t){let n=Yi.get(e);if(n)return n;n=document.createElement(`canvas`),n.width=n.height=96;let r=n.getContext(`2d`),i=e||1,a=()=>(i=i*1664525+1013904223>>>0)/4294967296,o=7+Math.floor(a()*6),s=[];for(let e=0;e<o;e++){let t=e/o*Math.PI*2,n=22+a()*18;s.push([48+Math.cos(t)*n,48+Math.sin(t)*n*(.7+a()*.5)])}r.beginPath(),s.forEach(([e,t],n)=>n?r.lineTo(e,t):r.moveTo(e,t)),r.closePath();let c=Math.floor(a()*360),l=r.createLinearGradient(0,10,0,86);l.addColorStop(0,`hsl(${c},55%,62%)`),l.addColorStop(1,`hsl(${(c+40)%360},45%,28%)`),r.fillStyle=l,r.fill(),r.lineWidth=3,r.strokeStyle=t,r.shadowColor=t,r.shadowBlur=6,r.stroke(),r.shadowBlur=0,r.fillStyle=`rgba(0,0,0,.45)`;for(let e=0;e<3;e++)r.fillRect(30+a()*30,30+a()*30,4+a()*8,3+a()*6);return Yi.set(e,n),n}function Zi(e,t,n,r=0){e.save(),e.strokeStyle=n,e.fillStyle=`rgba(0,0,0,.55)`,e.lineWidth=.06,e.lineJoin=`round`;let i=(t,n,r,i)=>{e.fillRect(t,n,r,i),e.strokeRect(t,n,r,i)},a=(t,n,r,a,o,s)=>{i(t,n,r,a),e.beginPath();for(let i=1;i<o;i++)e.moveTo(t+r*i/o,n),e.lineTo(t+r*i/o,n+a);for(let i=1;i<s;i++)e.moveTo(t,n+a*i/s),e.lineTo(t+r,n+a*i/s);e.stroke()};switch(t){case`rod`:e.beginPath(),e.moveTo(0,.5),e.lineTo(0,-.5),e.stroke(),e.beginPath(),e.arc(0,-.55,.08,0,Math.PI*2),e.fill(),e.stroke();break;case`loop`:e.beginPath(),e.moveTo(0,.5),e.lineTo(0,-.05),e.stroke(),e.beginPath(),e.arc(0,-.3,.25,0,Math.PI*2),e.stroke();break;case`dish`:e.beginPath(),e.moveTo(0,.5),e.lineTo(0,.1),e.stroke(),e.beginPath(),e.ellipse(0,-.05,.45,.2,0,Math.PI,Math.PI*2),e.closePath(),e.fill(),e.stroke(),e.beginPath(),e.moveTo(-.3,-.12),e.lineTo(0,-.5),e.lineTo(.3,-.12),e.stroke();break;case`wingS`:e.beginPath(),e.moveTo(-.5,0),e.lineTo(-.3,0),e.stroke(),a(-.3,-.18,.8,.36,4,2);break;case`wingL`:e.beginPath(),e.moveTo(-.5,0),e.lineTo(-.4,0),e.stroke(),a(-.4,-.3,.9,.6,6,3);break;case`battery`:i(-.3,-.42,.6,.84),e.fillStyle=n,e.fillRect(-.1,-.5,.2,.08);for(let t=0;t<3;t++)e.fillRect(-.18,.22-t*.22,.36,.12);break;case`tankS`:case`tankL`:{let n=t===`tankL`?1:.75;if(e.beginPath(),e.ellipse(0,-.25*n,.25*n,.12*n,0,0,Math.PI*2),e.stroke(),i(-.25*n,-.25*n,.5*n,.55*n),e.beginPath(),e.moveTo(-.1*n,.3*n),e.lineTo(-.16*n,.46*n),e.lineTo(.16*n,.46*n),e.lineTo(.1*n,.3*n),e.stroke(),r>0){let t=(.4+Math.random()*.4)*r,i=e.createLinearGradient(0,.46*n,0,.46*n+t);i.addColorStop(0,`rgba(255,255,255,.95)`),i.addColorStop(.35,`rgba(120,200,255,.85)`),i.addColorStop(1,`rgba(255,120,40,0)`),e.fillStyle=i,e.beginPath(),e.moveTo(-.15*n,.46*n),e.lineTo(0,.46*n+t),e.lineTo(.15*n,.46*n),e.fill()}break}}e.restore()}function Qi(e){return e.mine?{frames:e.mine.frames,color:e.mine.color,parts:e.mine.parts}:{color:e.color,seed:e.shape,parts:ea(e.shape)}}var $i=new Map;function ea(e){let t=$i.get(e);if(t)return t;let n=e+7,r=()=>(n=n*1664525+1013904223>>>0)/4294967296,i=[`rod`,`loop`,`dish`,`wingS`,`wingL`,`battery`,`tankS`,`tankL`];t=[];let a=2+Math.floor(r()*3);for(let e=0;e<a;e++){let e=r()*Math.PI*2;t.push({type:i[Math.floor(r()*i.length)],x:Math.cos(e)*.62,y:Math.sin(e)*.62,rot:e*180/Math.PI+90,s:.8+r()*.3})}return $i.set(e,t),t}function ta(e,t,n,r,i,a={}){e.save(),e.translate(n,r),e.rotate((a.rot??0)*Math.PI/180),e.globalAlpha=a.alpha??1,a.heat&&(e.shadowColor=`rgba(255,40,20,${.9*a.heat})`,e.shadowBlur=i*.25*a.heat);let o=t.frames?.filter(Boolean)??[],s=o.length?Ji(o[(a.frame??0)%o.length]):t.seed===void 0?null:Xi(t.seed,t.color);s&&(!(s instanceof HTMLImageElement)||s.complete)&&e.drawImage(s,-i/2,-i/2,i,i),e.shadowBlur=0,a.heat&&(e.globalCompositeOperation=`lighter`,e.fillStyle=`rgba(255,30,10,${.35*a.heat})`,e.beginPath(),e.arc(0,0,i*.42,0,Math.PI*2),e.fill(),e.globalCompositeOperation=`source-over`);for(let n of t.parts??[]){e.save(),e.translate(n.x*i/2,n.y*i/2),e.rotate(n.rot*Math.PI/180);let r=i*.3*n.s;e.scale(r,r),Zi(e,n.type,t.color,n.type===`tankS`||n.type===`tankL`?a.thrust??0:0),e.restore()}e.restore()}function na(e,t,n,r,i=1){e.save(),e.globalCompositeOperation=`lighter`;let a=e.createRadialGradient(t,n,0,t,n,r);a.addColorStop(0,`rgba(255,255,255,${i})`),a.addColorStop(.25,`rgba(200,230,255,${.5*i})`),a.addColorStop(1,`rgba(120,160,255,0)`),e.fillStyle=a,e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fill(),e.strokeStyle=`rgba(255,255,255,${.8*i})`,e.lineWidth=1,e.beginPath(),e.moveTo(t-r*1.6,n),e.lineTo(t+r*1.6,n),e.moveTo(t,n-r*1.6),e.lineTo(t,n+r*1.6),e.stroke(),e.restore()}function ra(e,t,n,r,i=1){e.save(),e.font=`700 ${Math.round(11*i)}px ${Ki}`;let a=e.measureText(t).width+10*i,o=17*i;return e.fillStyle=`#f4f4f4`,e.fillRect(n,r-o,a,o),e.fillStyle=`#000`,e.textBaseline=`middle`,e.fillText(t,n+5*i,r-o/2+.5),e.restore(),{x:n,y:r-o,w:a,h:o}}function ia(e,t,n,r,i,a,o=1){return e.save(),e.strokeStyle=`rgba(255,255,255,.95)`,e.lineWidth=1,e.strokeRect(Math.round(t)+.5,Math.round(n)+.5,Math.round(r),Math.round(i)),e.restore(),ra(e,a,t,n-2*o,o)}function aa(e,t,n,r,i,a=[2,3],o=.85){e.save(),e.strokeStyle=`rgba(255,255,255,${o})`,e.lineWidth=1,e.setLineDash(a),e.beginPath(),e.moveTo(t,n),e.lineTo(r,i),e.stroke(),e.restore()}function oa(e,t,n,r,i=1,a=!0){e.save(),e.font=`700 ${Math.round(9*i)}px ${Ki}`;let o=11*i,s=Math.max(...t.map(t=>e.measureText(t).width))+10*i,c=t.length*o+6*i;e.fillStyle=`rgba(0,0,0,.55)`,e.fillRect(n,r,s,c),e.strokeStyle=`rgba(255,255,255,.35)`,e.lineWidth=1,e.strokeRect(n+.5,r+.5,s,c),e.textBaseline=`top`;let l=[`#ffe040`,`#7fd8ff`,`#9cff70`];return t.forEach((t,s)=>{let c=/^(\S+)(\s*[+*-]?=\s*)(.*)$/.exec(t),u=n+5*i,d=r+3*i+s*o;c&&a?(e.fillStyle=`#e8e8e8`,e.fillText(c[1],u,d),u+=e.measureText(c[1]).width,e.fillStyle=`#9a9a9a`,e.fillText(c[2],u,d),u+=e.measureText(c[2]).width,e.fillStyle=l[s%l.length],e.fillText(c[3],u,d)):(e.fillStyle=`#e8e8e8`,e.fillText(t,u,d))}),e.restore(),{w:s,h:c}}var sa=e=>`SAT #${String(e).padStart(4,`0`)}`,ca=[`#ff3a24`,`#ff8c1a`,`#ffe02a`,`#a8f4ff`,`#4ab8ff`,`#ffffff`];function la(){let e=document.createElement(`canvas`);e.className=`globe-canvas`;let t=e.getContext(`2d`),n=127,r=25,i=1.25,a=null,o=0,s=0,c=document.createElement(`canvas`),l=``,u=0,d=0,f=100,p=0,m=0,h=g();function g(){let e=Z(r,n),t=Gr(Wr([0,0,1],e));return{e:t,n:Wr(e,t),f:e}}let _=e=>[p+Q(e,h.e)*f,m-Q(e,h.n)*f,Q(e,h.f)],v=new Map,y=0,b=1,x=0;e.addEventListener(`pointerdown`,t=>{if(e.setPointerCapture(t.pointerId),v.set(t.pointerId,[t.clientX,t.clientY]),x=0,v.size===2){let[e,t]=[...v.values()];y=Math.hypot(e[0]-t[0],e[1]-t[1]),b=i}}),e.addEventListener(`pointermove`,e=>{let t=v.get(e.pointerId);if(!t)return;let o=e.clientX-t[0],s=e.clientY-t[1];if(v.set(e.pointerId,[e.clientX,e.clientY]),x+=Math.abs(o)+Math.abs(s),v.size===2){let[e,t]=[...v.values()];i=Math.max(.6,Math.min(5,b*Math.hypot(e[0]-t[0],e[1]-t[1])/Math.max(1,y)))}else{a=null;let e=90/(f*1.2/devicePixelRatio);n-=o*e,r=Math.max(-85,Math.min(85,r+s*e))}}),e.addEventListener(`pointerup`,e=>{v.delete(e.pointerId),x<6&&C(e)}),e.addEventListener(`pointercancel`,e=>v.delete(e.pointerId)),e.addEventListener(`wheel`,e=>{e.preventDefault(),i=Math.max(.6,Math.min(5,i*Math.exp(-e.deltaY*.001)))},{passive:!1});let S=[];function C(t){let n=e.getBoundingClientRect(),r=(t.clientX-n.left)*devicePixelRatio,i=(t.clientY-n.top)*devicePixelRatio,o=null,s=30*devicePixelRatio;for(let e of S){let t=Math.hypot(e.x-r,e.y-i);t<s&&(s=t,o=e.id)}a=o}function w(){let v=Y(),y=devicePixelRatio||1,b=e.clientWidth,x=e.clientHeight;if(!b||!x)return;(e.width!==Math.round(b*y)||e.height!==Math.round(x*y))&&(e.width=Math.round(b*y),e.height=Math.round(x*y)),u=e.width,d=e.height,p=u/2,m=d*.47,f=Math.min(u,d)*.36*i;let C=Vi(v),w=a?C.find(e=>e.id===a):null;if(w){let e=Qr(w.orbit,v),t=Math.asin(e[2])*180/Math.PI,i=Math.atan2(e[1],e[0])*180/Math.PI-n;i=(i+540)%360-180,n+=i*.08,r+=(t-r)*.08}h=g(),t.fillStyle=`#000`,t.fillRect(0,0,u,d),t.fillStyle=`rgba(255,255,255,.5)`;for(let e=0;e<90;e++){let n=e*7919%1e3/1e3*u,r=e*104729%1e3/1e3*d;t.fillRect(n,r,e%7?1:2,e%7?1:2)}t.fillStyle=`#04080e`,t.beginPath(),t.arc(p,m,f,0,Math.PI*2),t.fill();let O=ai(v);t.save(),t.beginPath(),t.arc(p,m,f,0,Math.PI*2),t.clip();let k=`${u},${d},${n.toFixed(1)},${r.toFixed(1)},${i.toFixed(2)},${Math.floor(v/12e4)}`;if(k!==l){l=k,c.width=u,c.height=d;let e=c.getContext(`2d`);e.fillStyle=`rgba(0,0,0,.6)`;let t=Math.max(2,f/46);for(let n=m-f;n<m+f;n+=t)for(let r=p-f;r<p+f;r+=t){let i=(r+t/2-p)/f,a=-(n+t/2-m)/f,o=1-i*i-a*a;if(o<0)continue;let s=Math.sqrt(o);Q([h.e[0]*i+h.n[0]*a+h.f[0]*s,h.e[1]*i+h.n[1]*a+h.f[1]*s,h.e[2]*i+h.n[2]*a+h.f[2]*s],O)<0&&e.fillRect(r,n,t+.5,t+.5)}}t.drawImage(c,0,0),t.restore(),t.lineWidth=1,t.strokeStyle=`rgba(110,130,160,.22)`;for(let e=-60;e<=60;e+=30)T(t=>Z(e,-180+t*3),121);for(let e=-180;e<180;e+=30)T(t=>Z(-90+t*1.5,e),121);t.strokeStyle=`rgba(235,240,245,.85)`,t.lineWidth=Math.max(1,y*.8);for(let e of Ar())T(t=>Z(e[t][1],e[t][0]),e.length);t.strokeStyle=`rgba(255,255,255,.5)`,t.beginPath(),t.arc(p,m,f,0,Math.PI*2),t.stroke();{let[e,n,r]=_(Z(Mi.lat,Mi.lon));r>0&&(t.fillStyle=`#ff3a24`,t.fillRect(e-2*y,n-2*y,4*y,4*y))}for(let e of bi())if(e.status!==`burned`)for(let[t,n]of[[e.A,`A`],[e.B,`B`]])D(t,`${n} · ${t.name}`,e.color);S=[];let A=y;C.forEach((e,n)=>{let r=!!e.mine,i=r?e.color:ca[n%ca.length],o=(X+Jr(e.orbit,v))/X,s=Zr(e.orbit);t.lineWidth=(r?2:1)*y,t.strokeStyle=i,t.globalAlpha=r||e.id===a?.95:.38,E(e=>[(Math.cos(e)*s.u[0]+Math.sin(e)*s.w[0])*o,(Math.cos(e)*s.u[1]+Math.sin(e)*s.w[1])*o,(Math.cos(e)*s.u[2]+Math.sin(e)*s.w[2])*o]),t.globalAlpha=1});let j=C.map(e=>{let t=Qr(e.orbit,v),n=(X+Jr(e.orbit,v))/X,[r,i,a]=_([t[0]*n,t[1]*n,t[2]*n]);return{w:e,px:r,py:i,pz:a}});j.sort((e,t)=>e.pz-t.pz);let M=[];for(let e of j){if(e.pz<0&&Math.hypot(e.px-p,e.py-m)<f)continue;let n=!!e.w.mine,r=(n?34:14)*A*Math.min(1.8,i**.6);if(ta(t,Qi(e.w),e.px,e.py,r,{rot:v/1e3*12+e.w.no*40,frame:Math.floor(v/250)}),S.push({id:e.w.id,x:e.px,y:e.py}),n||e.w.id===a||i>1.8||j.length<30){let i=e.px+r*.6,o=e.py-r*.7;aa(t,e.px,e.py,i,o,[2*A,2*A]);let s=ra(t,n?`${sa(e.w.no)} ${e.w.name}`:sa(e.w.no),i,o,(n?.95:.75)*A);for(let e of M.slice(-2))aa(t,e.x,e.y,s.x,s.y+s.h,[1*A,4*A],.25);if(M.push({x:s.x,y:s.y+s.h}),e.w.id===a){let n=Qr(e.w.orbit,v);oa(t,[`alt = ${Jr(e.w.orbit,v).toFixed(1)}km;`,`lat = ${(Math.asin(n[2])*180/Math.PI).toFixed(2)};`,`lon = ${(Math.atan2(n[1],n[0])*180/Math.PI).toFixed(2)};`,`orbit = ${e.w.orbit.A.name}>${e.w.orbit.B.name};`],s.x,s.y+s.h+4*A,.9*A)}}}let N=ki(v);if(s&&N!==s&&(o=v),s=N,o){let e=(v-o)/1e3;if(e>12)o=0;else{let n=Z(Mi.lat,Mi.lon),r=1+Math.min(.08,e*.012),[i,a,o]=_([n[0]*r,n[1]*r,n[2]*r]);if(o>0){t.strokeStyle=`#fff`,t.lineWidth=2*y,t.beginPath();let[e,r]=_(n);t.moveTo(e,r),t.lineTo(i,a),t.stroke(),na(t,i,a,10*y,1)}ra(t,`${ji(N-1)} LAUNCHED · ${Math.min(24,Pi(N-1)+1)} SATS`,14*y,64*y,y)}}let P=Oi(N)-v,ee=Math.floor(P/864e5),F=Math.floor(P%864e5/36e5),I=Math.floor(P%36e5/6e4),te=Math.floor(P%6e4/1e3);t.font=`700 ${Math.round(11*y)}px ${Ki}`,t.fillStyle=`#e8e8e8`,t.textBaseline=`top`,t.fillText(`NEXT ${ji(N)} · T-${ee}D ${String(F).padStart(2,`0`)}:${String(I).padStart(2,`0`)}:${String(te).padStart(2,`0`)}`,12*y,12*y),t.fillStyle=`#9a9a9a`,t.fillText(`${C.length} IN ORBIT · ${Pi(N)} APPLIED / 24 SEATS · ${new Date(v).toISOString().slice(0,16).replace(`T`,` `)} UTC`,12*y,28*y)}function T(e,n){t.beginPath();let r=!1;for(let i=0;i<n;i++){let[n,a,o]=_(e(i));o<0?r=!1:(r?t.lineTo(n,a):t.moveTo(n,a),r=!0)}t.stroke()}function E(e){let n=null;for(let r=0;r<=160;r++){let i=_(e(r/160*Math.PI*2));if(n){let e=i[2]<0&&Math.hypot(i[0]-p,i[1]-m)<f||n[2]<0&&Math.hypot(n[0]-p,n[1]-m)<f;t.save(),e&&(t.globalAlpha*=.35,t.setLineDash([3,4])),t.beginPath(),t.moveTo(n[0],n[1]),t.lineTo(i[0],i[1]),t.stroke(),t.restore()}n=i}}function D(e,n,r){let[i,a,o]=_(Z(e.lat,e.lon));if(o<0)return;let s=devicePixelRatio||1;t.strokeStyle=r,t.lineWidth=1.5*s,t.strokeRect(i-4*s,a-4*s,8*s,8*s),aa(t,i,a,i-18*s,a+22*s,[2*s,2*s]),ra(t,n.toUpperCase(),i-18*s-4*s,a+40*s,.8*s)}return{canvas:e,draw:w,lookAt(e,t){r=e,n=t},follow(e){a=e},get following(){return a}}}var ua=e=>{if(!isFinite(e))return`--:--`;let t=Math.max(0,Math.floor(e/1e3)),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return`${n?n+`:`:``}${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`};function da(){let e=document.createElement(`canvas`);e.className=`sky-canvas`;let t=e.getContext(`2d`),n=h(`video`,{class:`sky-video`,playsinline:!0,muted:!0,autoplay:!0});n.muted=!0;let r=`dome`,i=null,a=null,o=()=>{let e=bi().filter(e=>e.status===`orbit`);return e.find(e=>e.id===a)??e[e.length-1]??null},s=()=>Ti(),c=()=>Ti()===`A`?`B`:`A`,l=(e,t)=>t===`A`?e.A:e.B,u=e=>e===`A`?0:1,d=0,f=45,p=0,m=e=>{let t=e.webkitCompassHeading??(e.alpha==null?null:360-e.alpha);t!=null&&e.beta!=null&&(d=t,f=Math.max(-30,Math.min(90,e.beta-90)),p=performance.now())};async function g(){let e=DeviceOrientationEvent;try{e.requestPermission&&await e.requestPermission()}catch{}window.addEventListener(`deviceorientationabsolute`,m),window.addEventListener(`deviceorientation`,m)}async function _(){try{i=await navigator.mediaDevices.getUserMedia({video:{facingMode:`environment`},audio:!1}),n.srcObject=i,await n.play().catch(()=>{})}catch{O(`카메라를 쓸 수 없어요 — 그려진 하늘로 보여 줄게요`,2e3)}}function y(){i?.getTracks().forEach(e=>e.stop()),i=null,n.srcObject=null}let x=!1,S=0,C=0,w=0,T=0,E=!1,D=!1;e.addEventListener(`pointerdown`,t=>{e.setPointerCapture(t.pointerId),C=performance.now(),w=t.clientX,T=t.clientY,E=!1,clearTimeout(S),S=window.setTimeout(()=>{E||(x=!0)},450)}),e.addEventListener(`pointermove`,t=>{if(!e.hasPointerCapture(t.pointerId))return;let n=t.clientX-w,i=t.clientY-T;Math.hypot(n,i)>8&&(E=!0,clearTimeout(S)),E&&r===`cam`&&performance.now()-p>1500&&!x&&(d=(d-t.movementX*.15+360)%360,f=Math.max(-30,Math.min(90,f+t.movementY*.15)))}),e.addEventListener(`pointerup`,()=>{clearTimeout(S);let e=x;x=!1,!E&&!e&&performance.now()-C<350&&P()}),e.addEventListener(`pointercancel`,()=>(x=!1,clearTimeout(S)));let k=0,A=0,j=0,M=[],N=0;function P(){let e=o();if(e){if(ei(Ui(e),Y(),l(e,s())).el<=0)return O(`위성이 내 하늘에 있을 때 두드릴 수 있어요`,1200);if(e.fuel<=0)return O(`연료가 다 떨어졌어요`,1200);if(e.battery<2)return O(`배터리가 부족해요 — 레이저로 충전하세요`,1400);e.fuel--,e.battery-=2,k+=540,j=performance.now()+350,navigator.vibrate?.(35),M.push(performance.now()),clearTimeout(N),N=window.setTimeout(ee,1500),$()}}function ee(){let e=o();if(!e||!M.length)return;let t=Ui(e),n=Y(),r=M[0],i=c();e.taps.push({id:wi(`tap`),from:s(),pattern:M.map(e=>Math.round(e-r)),sentAt:n,deliverAt:ni(t,n,u(i)),played:!1}),M=[],$(),O(`두드림 ${e.taps[e.taps.length-1].pattern.length}번 — ${l(e,i).name} 하늘을 지날 때 전해져요`,1800)}let F=h(`div`,{class:`sky-head`}),I=e=>b(e,{cls:`small role`,lit:()=>s()===e,onPress:()=>(Ei(e),v())}),te=b(`CAMERA`,{cls:`small`,lit:()=>r===`cam`,onPress:()=>{r=r===`cam`?`dome`:`cam`,r===`cam`?(_(),g()):y(),ae.classList.toggle(`cam`,r===`cam`)}}),L=h(`button`,{class:`laser-btn`,type:`button`},`LASER`);L.addEventListener(`pointerdown`,e=>{e.stopPropagation(),L.setPointerCapture(e.pointerId),D=!0});let ne=()=>D=!1;L.addEventListener(`pointerup`,ne),L.addEventListener(`pointercancel`,ne);let re=h(`div`,{class:`sky-status`}),ie=b(`✉ 편지`,{cls:`small`,onPress:()=>oe()}),R=h(`div`,{class:`mail-sheet`});R.hidden=!0;let z=h(`div`,{class:`sky-bar`},h(`div`,{class:`keys`},I(`A`),I(`B`),te,ie),re),ae=h(`div`,{class:`view sky`,"data-keep":!0},h(`div`,{class:`sky-stage`},n,e,L,F),z,R);function oe(){R.hidden=!R.hidden,R.hidden||se()}function se(){R.textContent=``;let e=o();if(!e)return R.append(h(`p`,null,`궤도에 오른 위성이 없어요.`));let t=Ui(e),n=Y(),r=pi(e.parts),i=l(e,s()),a=l(e,c()),d=ei(t,n,i).el>0,f=e.mail.filter(e=>e.from===c()&&e.delivered),p=e.mail.filter(e=>e.from===s()),m=b(`닫기`,{cls:`small`,onPress:()=>R.hidden=!0});if(R.append(h(`div`,{class:`mail-head`},h(`b`,null,`✉ ${i.name} → ${a.name}`),m)),d){let n=h(`textarea`,{class:`mail-in`,rows:`2`,placeholder:`최대 ${r.bytes}B (한글 1자 = 3B)`}),i=h(`em`,{class:`mail-n`},`0 / ${r.bytes}B`);n.addEventListener(`input`,()=>{mi(n.value)>r.bytes&&(n.value=hi(n.value,r.bytes)),i.textContent=`${mi(n.value)} / ${r.bytes}B`});let o=b(`위성에 싣기`,{cls:`small go`,onPress:()=>{let r=n.value.trim();if(!r)return;let i=Y();e.mail.push({id:wi(`m`),from:s(),text:r,bytes:mi(r),sentAt:i,deliverAt:ni(t,i,u(c())),delivered:!1,read:!1}),$(),O(`실었어요 — ${a.name} 하늘을 지날 때 도착해요`,1600),se()}});R.append(h(`div`,{class:`mail-write`},n,h(`div`,{class:`keys`},i,o)))}else{let e=ii(t,n,u(s()));R.append(h(`p`,{class:`mail-wait`},`위성이 ${i.name} 하늘에 있을 때만 실을 수 있어요 · 다음 통과까지 ${ua(e.start-n)}`))}let g=h(`div`,{class:`mail-list`});for(let e of[...f].reverse())g.append(h(`div`,{class:`mail-item in`},h(`small`,null,`${new Date(e.deliverAt).toLocaleString(`ko-KR`,{month:`numeric`,day:`numeric`,hour:`2-digit`,minute:`2-digit`})} 도착`),h(`p`,null,e.text)));for(let e of[...p].reverse())g.append(h(`div`,{class:`mail-item out`},h(`small`,null,e.delivered?`전달됨`:`배달 중 · 도착까지 ${ua(e.deliverAt-Y())}`),h(`p`,null,e.text)));!f.length&&!p.length&&g.append(h(`p`,{class:`mail-wait`},`아직 주고받은 편지가 없어요`)),R.append(g);for(let e of f)e.read=!0}let ce=performance.now(),le=0,ue=!1;function de(){let i=performance.now(),a=Math.min(.1,(i-ce)/1e3);ce=i;let p=devicePixelRatio||1,m=e.clientWidth,g=e.clientHeight;if(!m||!g)return;(e.width!==Math.round(m*p)||e.height!==Math.round(g*p))&&(e.width=Math.round(m*p),e.height=Math.round(g*p));let _=e.width,v=e.height,y=p,b=Y(),S=o();if(t.clearRect(0,0,_,v),k*=Math.exp(-a*1.2),A+=k*a,r===`cam`)try{localStorage.setItem(`tp.cam.${s()}`,String(Date.now()))}catch{}if(!S){t.fillStyle=`#000`,t.fillRect(0,0,_,v),t.fillStyle=`#ddd`,t.font=`700 ${Math.round(12*y)}px ${Ki}`,t.textAlign=`center`,t.fillText(`NO SATELLITE IN ORBIT`,_/2,v/2-10*y),t.font=`400 ${Math.round(11*y)}px ${Ki}`,t.fillText(`만들기에서 위성을 만들고 발사를 기다리세요`,_/2,v/2+12*y),t.textAlign=`left`,re.textContent=``;return}let C=Ui(S),w=l(S,s()),T=l(S,c()),E=ei(C,b,w),M=E.el>0,N=pi(S.parts),P=ii(C,b,u(s())),ee=0;try{ee=Number(localStorage.getItem(`tp.cam.${c()}`)||0)}catch{}ue=r===`cam`&&M&&Date.now()-ee<3e3&&ei(C,b,T).el>0,ue&&!S.together.some(e=>Math.abs(e-P.centre)<6e4)&&(S.together.push(P.centre),$(),O(`같이 봤어요 ✦ 두 하늘에 동시에 떠 있어요`,2200));let F=oi($r(C,b),b),I=D&&M?1:0,te=+(i<j),ne=Qi({id:S.id,no:S.no,name:S.name,color:S.color,shape:0,orbit:C,launchNo:S.launchNo,mine:S}),ie=A+b/1e3*6,R=NaN,z=NaN,ae=(e,t)=>{if(r===`dome`){let n=Math.min(_,v)*.42,r=(90-t)/90*n,i=e*Math.PI/180;return[_/2+Math.sin(i)*r,v*.47-Math.cos(i)*r,t>0]}let n=(e-d+540)%360-180,i=60*_/v;n*=Math.cos(Math.max(-80,Math.min(80,t))*Math.PI/180);let a=_/2+n/i*_,o=v/2-(t-f)/60*v;return[a,o,a>-20&&a<_+20&&o>-20&&o<v+20]};if(r===`cam`){if(n.readyState>=2)he(n,0,0,_,v);else{let e=t.createLinearGradient(0,0,0,v);e.addColorStop(0,`#05070f`),e.addColorStop(1,`#1b2236`),t.fillStyle=e,t.fillRect(0,0,_,v)}}else ge(_,v,y);{t.save(),t.strokeStyle=`rgba(255,255,255,.6)`,t.setLineDash([3*y,4*y]),t.lineWidth=1*y,t.beginPath();let e=!1;for(let n=0;n<=60;n++){let r=ei(C,P.start+(P.end-P.start)*n/60,w),[i,a,o]=ae(r.az,r.el);!o||r.el<0?e=!1:(e?t.lineTo(i,a):t.moveTo(i,a),e=!0)}t.stroke(),t.restore()}for(let e of Vi(b)){if(e.mine)continue;let n=ei(e.orbit,b,w);if(n.el<=2)continue;let[r,i,a]=ae(n.az,n.el);a&&(na(t,r,i,4*y,.6),ra(t,sa(e.no),r+6*y,i-4*y,.65*y))}if(M){let[e,n,a]=ae(E.az,E.el);if(R=e,z=n,a){let a=.7+.3*Math.sin(i/90)*Math.sin(i/37),o=(F?.5:1)*(.6+.4*Math.min(1,S.battery/Math.max(1,N.charge||1)));if(!x){na(t,e,n,(ue?22:12)*y*a,o);let s=(r===`dome`?46:38)*y;ta(t,ne,e,n,s,{rot:ie,heat:I,thrust:te,frame:Math.floor(i/120)}),pe(e,n,s,y,S,E,C,b,I>0&&fe(e,n,_,v))}}else r===`cam`&&me(e,n,_,v,y,S.name)}if(x){let e=isFinite(R)?R:_/2,a=isFinite(z)?z:v/2;if(t.save(),t.fillStyle=`#000`,t.fillRect(0,0,_,v),r===`cam`&&n.readyState>=2){let r=n.videoWidth,i=n.videoHeight,o=Math.max(_/r,v/i),s=_/o/3,c=v/o/3,l=(e-(_-r*o)/2)/o,u=(a-(v-i*o)/2)/o;t.filter=`blur(1.5px) contrast(1.05)`,t.drawImage(n,Math.max(0,l-s/2),Math.max(0,u-c/2),s,c,0,0,_,v),t.filter=`none`}else ge(_,v,y,!0);let o=t.createRadialGradient(_/2,v/2,Math.min(_,v)*.32,_/2,v/2,Math.max(_,v)*.62);if(o.addColorStop(0,`rgba(0,0,0,0)`),o.addColorStop(1,`rgba(0,0,0,.85)`),t.fillStyle=o,t.fillRect(0,0,_,v),M){let e=Math.min(_,v)*.55,n=i/1e3%8/8-.5,r=_/2+n*_*.25,a=v/2-n*v*.06;ta(t,ne,r,a,e,{rot:ie*.5,heat:I,thrust:te,frame:Math.floor(i/120)}),pe(r,a,e*.8,y*1.4,S,E,C,b,I>0)}else ra(t,`NOT OVERHEAD`,_/2-50*y,v/2,1.2*y);t.restore()}r===`cam`&&(t.strokeStyle=`rgba(255,255,255,.8)`,t.lineWidth=1*y,t.beginPath(),t.arc(_/2,v/2,18*y,0,Math.PI*2),t.moveTo(_/2-28*y,v/2),t.lineTo(_/2-10*y,v/2),t.moveTo(_/2+10*y,v/2),t.lineTo(_/2+28*y,v/2),t.moveTo(_/2,v/2-28*y),t.lineTo(_/2,v/2-10*y),t.moveTo(_/2,v/2+10*y),t.lineTo(_/2,v/2+28*y),t.stroke(),D&&(t.save(),t.globalCompositeOperation=`lighter`,t.strokeStyle=`rgba(255,30,20,.35)`,t.lineWidth=9*y,t.beginPath(),t.moveTo(_/2,v),t.lineTo(_/2,v/2),t.stroke(),t.strokeStyle=`rgba(255,90,70,.95)`,t.lineWidth=2.5*y,t.stroke(),na(t,_/2,v/2,10*y,.9),t.restore(),M&&(x||fe(R,z,_,v))&&N.charge>0&&(S.battery=Math.min(N.charge,S.battery+di*a),i-le>260&&(navigator.vibrate?.(8),le=i),Math.random()<.05&&$()))),t.font=`700 ${Math.round(11*y)}px ${Ki}`,t.fillStyle=`#eee`,t.textBaseline=`top`;let oe=`${s()} · ${w.name.toUpperCase()}`;t.fillText(oe,12*y,12*y),t.fillStyle=M?`#9cff70`:`#ffe040`,t.fillText(M?`OVERHEAD · EL ${E.el.toFixed(1)}° AZ ${E.az.toFixed(0)}° · SET IN ${ua(P.end-b)}`:`NEXT PASS ${ua(P.start-b)}`,12*y,28*y),ue&&ra(t,`TOGETHER ✦`,12*y,62*y,y),L.hidden=r!==`cam`;let se=S.launchAt+S.lifeMs-b;re.innerHTML=``,re.append(h(`span`,null,`${sa(S.no)} ${S.name}`),h(`span`,null,`BATT ${Math.round(S.battery)}/${N.charge}`),h(`span`,null,`FUEL ${S.fuel}/${N.shots}`),h(`span`,null,`MAIL ${N.bytes}B`),h(`span`,null,`ALT ${Jr(C,b).toFixed(0)}km`),h(`span`,null,`LIFE ${(se/864e5).toFixed(1)}D`),h(`span`,null,F?`SHADOW`:`SUN`))}function fe(e,t,n,r){return isFinite(e)&&Math.hypot(e-n/2,t-r/2)<Math.min(n,r)*.07}function pe(e,n,r,i,a,o,s,c,l){let u=r*.62,d=ia(t,e-u,n-u,u*2,u*2,`${sa(a.no)} ${a.name}`.toUpperCase(),i);ei(s,c-4e4,Ti()===`A`?a.A:a.B),aa(t,e-u-40*i,n+u+30*i,d.x,d.y+d.h,[5*i,3*i]);let f=pi(a.parts),p=[`alt = ${Jr(s,c).toFixed(1)}km;`,`az += ${o.az.toFixed(2)};`,`el = mix(el, ${o.el.toFixed(1)}, 0.14);`,`batt[${Math.round(a.battery)}] = gate(${f.charge});`,`fuel[${a.fuel}] = gate(tap);`];l&&p.unshift(`charge += ${di.toFixed(1)};`),t.font=`700 ${Math.round(9*i)}px ${Ki}`;let m=Math.max(...p.map(e=>t.measureText(e).width))+10*i,h=t.canvas.width,g=e+u+6*i+m<h?e+u+6*i:e-u-6*i-m>0?e-u-6*i-m:Math.max(4*i,h-m-4*i);oa(t,p,g,Math.max(4*i,n-u),i),ra(t,a.launchNo?ji(a.launchNo):`ARK`,Math.min(e+u+6*i,h-70*i),n+u+2*i,.75*i)}function me(e,n,r,i,a,o){let s=Math.atan2(n-i/2,e-r/2),c=Math.min(r,i)*.42,l=r/2+Math.cos(s)*c,u=i/2+Math.sin(s)*c;t.save(),t.translate(l,u),t.rotate(s),t.fillStyle=`#ffe040`,t.beginPath(),t.moveTo(14*a,0),t.lineTo(-6*a,-9*a),t.lineTo(-6*a,9*a),t.fill(),t.restore(),ra(t,o.toUpperCase(),l-30*a,u-12*a,.8*a)}function he(e,n,r,i,a){let o=e.videoWidth,s=e.videoHeight,c=Math.max(i/o,a/s);t.drawImage(e,n+(i-o*c)/2,r+(a-s*c)/2,o*c,s*c)}function ge(e,n,r,i=!1){let a=t.createRadialGradient(e/2,n*.47,0,e/2,n*.47,Math.max(e,n)*.7);if(a.addColorStop(0,`#0a1020`),a.addColorStop(1,`#000`),t.fillStyle=a,t.fillRect(0,0,e,n),i)return;let o=Math.min(e,n)*.42,s=e/2,c=n*.47;t.strokeStyle=`rgba(110,224,90,.55)`,t.lineWidth=1*r;for(let e of[0,30,60])t.beginPath(),t.arc(s,c,(90-e)/90*o,0,Math.PI*2),t.stroke();t.strokeStyle=`rgba(110,224,90,.25)`;for(let e=0;e<360;e+=30){let n=e*Math.PI/180;t.beginPath(),t.moveTo(s,c),t.lineTo(s+Math.sin(n)*o,c-Math.cos(n)*o),t.stroke()}t.fillStyle=`#6fe05a`,t.font=`700 ${Math.round(10*r)}px ${Ki}`,t.textAlign=`center`,t.textBaseline=`middle`;for(let[e,n]of[[`N`,0],[`E`,90],[`S`,180],[`W`,270]]){let i=n*Math.PI/180;t.fillText(e,s+Math.sin(i)*(o+12*r),c-Math.cos(i)*(o+12*r))}t.fillText(`30°`,s+6*r,c-60/90*o-6*r),t.fillText(`60°`,s+6*r,c-30/90*o-6*r),t.textAlign=`left`,t.textBaseline=`alphabetic`,t.fillStyle=`rgba(255,255,255,.55)`;for(let i=0;i<70;i++)t.fillRect(i*7919%997/997*e,i*3571%991/991*n,1*r,1*r)}function _e(){let e=Y(),t=!1;for(let n of bi())for(let r of n.taps)if(!r.played&&r.from!==s()&&e>=r.deliverAt&&(r.played=!0,t=!0,n.id===o()?.id&&!document.hidden)){let e=[],t=0;for(let n of r.pattern)e.length&&e.push(Math.max(30,n-t-40)),e.push(40),t=n;navigator.vibrate?.(e),r.pattern.forEach(e=>setTimeout(()=>(k+=540,j=performance.now()+300),e)),O(`${l(n,r.from).name}에서 두드림 ${r.pattern.length}번이 도착했어요`,2e3)}t&&$()}return{root:ae,draw:de,arrivals:_e,select(e){a=e},leave(){y(),r=`dome`,ae.classList.remove(`cam`)},debug:{aim:()=>{let e=o();if(!e)return null;let t=ei(Ui(e),Y(),l(e,s()));return d=t.az,f=t.el,t},setView:(e,t)=>(d=e,f=t),get view(){return{vaz:d,vel:f}},setLaser:e=>D=e,setMode:e=>{r=e,ae.classList.toggle(`cam`,e===`cam`)}}}}function fa(e,t,n){let r=h(`div`,{class:`view make`,"data-keep":!0}),i=0,a=[],o=`#ffffff`,s=``,c=[],l=[null,null],u=``;async function d(t){a=[];let n=new or(t.src,sr);n.loopIn=t.loopIn,n.loopOut=Math.max(t.loopIn+.05,t.loopOut);for(let r=0;r<8;r++){let i=t.loopIn+(r+.5)/8*(n.loopOut-t.loopIn),o=performance.now()/1e3;n.restart(o,i),n.freeze(!0,o);let s=performance.now();await new Promise(e=>{let t=()=>{let r=performance.now()/1e3;n.tick(r),n.settled(r)||performance.now()-s>3e3?e():requestAnimationFrame(t)};requestAnimationFrame(t)}),await new Promise(e=>requestAnimationFrame(e)),a.push(e.snapshot(t,n,192,!0)),p.style.width=`${(r+1)/8*100}%`}n.dispose()}let f=h(`div`,{class:`make-title`}),p=h(`i`,{class:`make-bar`}),m=h(`div`,{class:`make-body`}),g=h(`div`,{class:`keys make-foot`});r.append(h(`div`,{class:`make-head`},f,h(`div`,{class:`make-prog`},p)),m,g);function _(){m.textContent=``,g.textContent=``,f.textContent=`MAKE SATELLITE · ${i+1}/4 ${[`객체 촬영`,`장비 붙이기`,`두 지점`,`이름 · 신청`][i]}`,i===1?y():i===2?x():i===3&&S(),v()}function y(){let e=h(`canvas`,{class:`parts-canvas`,width:`600`,height:`600`}),t=e.getContext(`2d`),r=-1,s=null,l=t=>{let n=e.getBoundingClientRect();return[(t.clientX-n.left)/n.width*2-1,(t.clientY-n.top)/n.height*2-1]},u=.7,d=(e,t)=>{for(let n=c.length-1;n>=0;n--){let r=c[n];if(Math.hypot(e-r.x*u,t-r.y*u)<.16*r.s)return n}return-1};e.addEventListener(`pointerdown`,t=>{e.setPointerCapture(t.pointerId);let[n,i]=l(t),a=d(n,i);r=a,a>=0&&(s={i:a,dx:c[a].x*u-n,dy:c[a].y*u-i,moved:!1,long:window.setTimeout(()=>{s&&!s.moved&&(c.splice(s.i,1),r=-1,s=null,navigator.vibrate?.(20),O(`장비를 뗐어요`,900),C())},600)}),C()}),e.addEventListener(`pointermove`,e=>{if(!s)return;let[t,n]=l(e),r=c[s.i],i=Math.max(-1.35,Math.min(1.35,(t+s.dx)/u)),a=Math.max(-1.35,Math.min(1.35,(n+s.dy)/u));Math.hypot(i-r.x,a-r.y)>.02&&(s.moved=!0,clearTimeout(s.long)),r.x=i,r.y=a});let f=()=>{s&&clearTimeout(s.long),s=null};e.addEventListener(`pointerup`,f),e.addEventListener(`pointercancel`,f);let p=0,v=()=>{if(!e.isConnected)return cancelAnimationFrame(p);p=requestAnimationFrame(v),t.clearRect(0,0,600,600),t.strokeStyle=`rgba(110,224,90,.25)`,t.lineWidth=1;for(let e=0;e<=12;e++)t.beginPath(),t.moveTo(e*50,0),t.lineTo(e*50,600),t.moveTo(0,e*50),t.lineTo(600,e*50),t.stroke();if(ta(t,{frames:a,color:o,parts:c},300,300,600*u,{frame:Math.floor(performance.now()/140)}),r>=0&&c[r]){let e=c[r];t.strokeStyle=`#ffe040`,t.setLineDash([6,4]),t.strokeRect(300+e.x*300*u-60*e.s,300+e.y*300*u-60*e.s,120*e.s,120*e.s),t.setLineDash([])}},y=h(`div`,{class:`part-pal`});for(let e of ci){let t=h(`canvas`,{class:`part-ic`,width:`60`,height:`60`}),n=t.getContext(`2d`);n.translate(30,30),n.scale(40,40),Zi(n,e.type,`#101010`),y.append(b(h(`span`,{class:`kf col`},t,h(`b`,null,e.name),h(`small`,null,`${e.ko} · ${e.weight}kg`)),{cls:`tiny part-k`,onPress:()=>{let t=c.length*2.4+.6;c.push({type:e.type,x:Math.cos(t)*.85,y:Math.sin(t)*.85,rot:t*180/Math.PI+90,s:1}),r=c.length-1,C()}}))}let x=h(`div`,{class:`keys`},b(`↺`,{cls:`small`,onPress:()=>r>=0&&(c[r].rot-=30,C())}),b(`↻`,{cls:`small`,onPress:()=>r>=0&&(c[r].rot+=30,C())}),b(`−`,{cls:`small`,onPress:()=>r>=0&&(c[r].s=Math.max(.6,c[r].s-.15),C())}),b(`+`,{cls:`small`,onPress:()=>r>=0&&(c[r].s=Math.min(1.8,c[r].s+.15),C())}),b(`떼기`,{cls:`small`,onPress:()=>r>=0&&(c.splice(r,1),r=-1,C())})),S=h(`div`,{class:`part-stats`});function C(){let e=pi(c);S.textContent=``;let t=h(`div`,{class:`wbar`+(e.over?` over`:``)},h(`i`,{style:`width:${Math.min(100,e.weight/20*100)}%`}),h(`span`,null,`WEIGHT ${e.weight} / 20kg`));S.append(t,h(`div`,{class:`srow`},h(`span`,null,`✉ ${e.bytes}B`),h(`span`,null,`☀ ${e.weeks}주`),h(`span`,null,`▮ ${e.charge}`),h(`span`,null,`⛽ ${e.shots}회`),h(`span`,null,e.night?`밤 작동 O`:`밤 작동 X`))),w.classList.toggle(`locked`,e.over)}let w=b(`다음 ▶`,{cls:`small go`,onPress:()=>pi(c).over?O(`무게 한도를 넘었어요. 장비를 떼어 주세요`,1500):(i=2,_())});m.append(h(`div`,{class:`parts-wrap`},e),x,S,h(`p`,{class:`hint`},`아래 장비를 누르면 객체에 붙어요. 끌어서 옮기고, 길게 누르면 떼요. 디자인은 성능에 영향이 없고, 장비만 성능을 정해요.`),y),g.append(b(`◀ 도마`,{cls:`small`,onPress:n}),w),C(),v()}function x(){let e=l[0]?+!l[1]:0,t=h(`canvas`,{class:`map-canvas`,width:`720`,height:`360`}),n=t.getContext(`2d`),r=[127.5,36,3],a=(e,t)=>{let[n,i,a]=r;return[360+(e-n)*2*a,180-(t-i)*2*a]},o=()=>{n.fillStyle=`#04080e`,n.fillRect(0,0,720,360),n.strokeStyle=`rgba(110,130,160,.25)`,n.lineWidth=1;for(let e=-180;e<=180;e+=15){let[t]=a(e,0);n.beginPath(),n.moveTo(t,0),n.lineTo(t,360),n.stroke()}for(let e=-90;e<=90;e+=15){let[,t]=a(0,e);n.beginPath(),n.moveTo(0,t),n.lineTo(720,t),n.stroke()}n.strokeStyle=`rgba(235,240,245,.85)`;for(let e of Ar()){n.beginPath();let t=999;e.forEach(([e,r],i)=>{let[o,s]=a(e,r);i&&Math.abs(e-t)<180?n.lineTo(o,s):n.moveTo(o,s),t=e}),n.stroke()}l.forEach((e,t)=>{if(!e)return;let[r,i]=a(e.lon,e.lat);n.strokeStyle=t?`#4ab8ff`:`#ff3a24`,n.lineWidth=2,n.strokeRect(r-5,i-5,10,10),n.font=`700 13px ${Ki}`,n.fillStyle=`#f4f4f4`;let o=`${t?`B`:`A`} ${e.name}`.toUpperCase(),s=n.measureText(o).width+8;n.fillRect(r+8,i-24,s,16),n.fillStyle=`#000`,n.fillText(o,r+12,i-11)})};t.addEventListener(`pointerdown`,n=>{let i=t.getBoundingClientRect(),a=(n.clientX-i.left)/i.width*720,o=(n.clientY-i.top)/i.height*360,[s,c,l]=r,u=s+(a-360)/(2*l),f=c-(o-180)/(2*l);d(e,{lat:Math.round(f*100)/100,lon:Math.round(u*100)/100,name:e?`그 사람의 집`:`나의 집`}),e=+!e});let s=(e,t)=>b(e===1?`WORLD`:`×${e}`,{cls:`tiny`,lit:()=>r[2]===e,onPress:()=>(r=[t?.[0]??r[0],t?.[1]??r[1],e],o(),v())}),c=[0,1].map(e=>{let t=h(`input`,{class:`pt-name`,maxlength:`14`,placeholder:e?`B 이름`:`A 이름`});return t.addEventListener(`input`,()=>{let n=l[e];n&&(n.name=t.value||n.name),o()}),t}),u=h(`div`,{class:`pt-info`});function d(e,t){l[e]=t,c[e].value=t.name,o(),f()}function f(){u.textContent=``,l.forEach((e,t)=>u.append(h(`span`,null,`${t?`B`:`A`} ${e?`${e.lat.toFixed(2)}, ${e.lon.toFixed(2)}`:`—`}`))),l[0]&&l[1]&&u.append(h(`span`,null,`거리 ${Math.round(si(l[0],l[1]))}km · ${Math.round(Hr/6e4)}분마다 두 곳을 지나요`))}let p=h(`div`,{class:`keys wrap presets`},...Ii.slice(0,12).map(t=>b(t.name,{cls:`tiny`,onPress:()=>(d(e,{...t}),e=+!e)}))),y=h(`div`,{class:`keys`},b(`A 지점 찍기`,{cls:`small`,lit:()=>e===0,onPress:()=>(e=0,v())}),b(`B 지점 찍기`,{cls:`small`,lit:()=>e===1,onPress:()=>(e=1,v())}));m.append(h(`div`,{class:`keys`},s(1,[0,10]),s(3),s(8)),h(`div`,{class:`map-wrap`},t),y,h(`div`,{class:`pt-names`},c[0],c[1]),u,h(`p`,{class:`hint`},`지도를 눌러 두 지점을 찍으세요(번갈아 A, B). 위성은 늘 이 두 곳 위를 지나가요.`),p),g.append(b(`◀ 장비`,{cls:`small`,onPress:()=>(i=1,_())}),b(`다음 ▶`,{cls:`small go`,onPress:()=>l[0]&&l[1]?(i=3,_()):O(`A와 B 두 지점을 모두 찍어 주세요`,1400)})),o(),f(),l.forEach((e,t)=>e&&(c[t].value=e.name))}function S(){let e=pi(c),n=ki(Y()),r=h(`canvas`,{class:`apply-canvas`,width:`400`,height:`400`}),d=r.getContext(`2d`),f=()=>{r.isConnected&&(requestAnimationFrame(f),d.clearRect(0,0,400,400),ta(d,{frames:a,color:o,parts:c},200,200,260,{rot:performance.now()/1e3*10,frame:Math.floor(performance.now()/140)}))},p=h(`input`,{class:`sat-name`,maxlength:`12`,placeholder:`위성 이름`});p.value=u||s,p.addEventListener(`input`,()=>u=p.value),m.append(h(`div`,{class:`parts-wrap`},r),p,h(`div`,{class:`srow`},h(`span`,null,`A ${l[0].name}`),h(`span`,null,`B ${l[1].name}`)),h(`div`,{class:`srow`},h(`span`,null,`✉ ${e.bytes}B`),h(`span`,null,`☀ ${e.weeks}주`),h(`span`,null,`▮ ${e.charge}`),h(`span`,null,`⛽ ${e.shots}회`),h(`span`,null,`${e.weight}/20kg`)),h(`p`,{class:`hint`},`${ji(n)}은(는) 일요일 21:00(KST)에 떠나요. 자리는 24석, 넘치면 추첨이에요.`)),g.append(b(`◀ 지점`,{cls:`small`,onPress:()=>(i=2,_())}),b(`${ji(n)} 탑승 신청`,{cls:`small go`,onPress:()=>{let r=(p.value||s||`SAT`).toUpperCase().slice(0,12),i={id:wi(`sat`),no:1e3+Math.floor(Math.random()*8999),name:r,frames:a,color:o,parts:c.map(e=>({...e})),A:{...l[0]},B:{...l[1]},status:`applied`,applyNo:n,battery:e.charge,fuel:e.shots,mail:[],taps:[],together:[],spins:[]};Si(i),O(`${ji(n)} 탑승 신청 완료 — ${r}`,1800),t(i)}})),f()}return{root:r,async start(e){if(i=0,c.length=0,s=e.name,u=``,o=e.lineColor&&e.lineColor!==`auto`?e.lineColor:e.color,f.textContent=`MAKE SATELLITE · 1/4 객체 촬영`,m.textContent=``,g.textContent=``,m.append(h(`p`,{class:`hint`},`객체의 루프를 8장으로 찍어 위성 몸체로 만들고 있어요…`)),p.style.width=`0%`,await d(e),!a.filter(Boolean).length)return O(`객체를 찍지 못했어요. 추적이 끝났는지 확인해 주세요`,2e3),n();c.push({type:`rod`,x:.15,y:-.95,rot:0,s:1},{type:`wingS`,x:.95,y:.05,rot:0,s:1},{type:`battery`,x:-.85,y:.35,rot:-10,s:1}),i=1,_()},get count(){return bi().length}}}function pa(e){let t=Wi(e),n=!1;for(let r of bi()){if(r.status!==`orbit`)continue;let i=Ui(r);if(!i)continue;let a=pi(r.parts),o=r.solarAt??r.launchAt;e-o>2e4&&(!oi($r(i,e),e)&&a.wings&&a.charge&&(r.battery=Math.min(a.charge,r.battery+fi*a.wings*(e-o)/6e4)),r.solarAt=e,n=!0);for(let a of r.mail){if(a.delivered||e<a.deliverAt)continue;let o=oi($r(i,a.deliverAt),a.deliverAt),s=a.bytes*ui;o&&r.battery<s?(a.deliverAt=ni(i,a.deliverAt+6e4,+(a.from===`A`)),n=!0):(o&&(r.battery-=s),a.delivered=!0,n=!0,a.from!==Ti()&&t.push(`✉ 편지가 도착했어요 — "${a.text.slice(0,16)}${a.text.length>16?`…`:``}"`))}}return n&&$(),t}f(),i.ui.crt=0,document.documentElement.setAttribute(`data-crt`,`0`),A();var ma=document.getElementById(`app`),ha=h(`div`,{class:`screen tp`});ma.append(ha),sr.onError=()=>O(`카메라를 쓸 수 없어요. 영상 파일이나 테스트 클립으로 해 보세요.`,4e3),gn();var ga;try{ga=new dt}catch(e){throw ha.append(h(`div`,{class:`fatal`},h(`b`,null,`NO VIDEO HARDWARE`),h(`p`,null,`이 브라우저는 WebGL2를 지원하지 않아요.`),h(`pre`,null,String(e.message)))),e}var _a=`earth`,va=la(),ya=da(),ba=fa(ga,e=>{va.follow(null),Aa(`earth`)},()=>Aa(`make`,!1)),xa=xr({renderer:ga,forget:e=>ur(e),toSatellite:e=>{Sa=!0,ka(),ba.start(e)}}),Sa=!1,Ca=h(`div`,{class:`my-sats`});function wa(){Ca.textContent=``;let e=bi();e.length||Ca.append(h(`p`,{class:`hint`},`아직 내 위성이 없어요. 만들기에서 영상 속 객체를 오려 위성으로 만들어 보세요.`));for(let t of[...e].reverse()){let e=t.status===`applied`?`ARK ${String(t.applyNo).padStart(3,`0`)} 대기${t.waited?` · 추첨 탈락 ${t.waited}회`:``}`:t.status===`orbit`?`궤도 위`:t.status===`burned`?`재진입 · 불타 사라짐`:`만드는 중`,n=h(`div`,{class:`my-sat ${t.status}`},h(`img`,{src:t.frames.find(Boolean)??``,alt:``}),h(`div`,null,h(`b`,null,`SAT #${String(t.no).padStart(4,`0`)} ${t.name}`),h(`small`,null,`${t.A.name} ⇄ ${t.B.name}`),h(`em`,null,e)));t.waited&&t.status===`applied`&&n.append(h(`i`,{class:`stamp`},`다음 주 대기`)),n.addEventListener(`click`,()=>{t.status===`orbit`?(va.follow(t.id),ya.select(t.id)):va.lookAt(t.A.lat,t.A.lon)}),n.addEventListener(`contextmenu`,e=>{e.preventDefault(),confirm(`${t.name}을(를) 지울까요?`)&&Ci(t)}),Ca.append(n)}}xi(wa),wa();var Ta=h(`div`,{class:`keys dev`},h(`small`,null,`TIME`),...[1,60,600].map(e=>b(e===1?`×1`:`×${e}`,{cls:`tiny`,lit:()=>Fr()===e,onPress:()=>(Ir(e),v())})),b(`발사 당겨 보기`,{cls:`tiny`,onPress:()=>Lr(Oi(ki(Y()))-4e3)}),b(`다음 통과로`,{cls:`tiny`,onPress:()=>{let e=bi().find(e=>e.status===`orbit`),t=e&&Ui(e);if(!t)return O(`궤도에 오른 위성이 없어요`,1200);let n=ii(t,Y(),Ti()===`A`?0:1);Lr(n.now?Y():n.start+2e4)}}),b(`실시간`,{cls:`tiny`,onPress:()=>(Rr(),v())})),Ea=h(`div`,{class:`view earth`,"data-keep":!0},h(`div`,{class:`earth-stage`},va.canvas),h(`div`,{class:`earth-deck`},Ta,Ca)),Da=(e,t,n)=>b(h(`span`,{class:`kf col`},h(`b`,null,t),h(`small`,null,n)),{cls:`tab`,lit:()=>_a===e,onPress:()=>Aa(e)}),Oa=h(`div`,{class:`topbar tp-top`,"data-keep":!0},Da(`earth`,`EARTH`,`지구`),Da(`make`,`MAKE`,`만들기`),Da(`sky`,`SKY`,`하늘`));function ka(){ha.querySelectorAll(`:scope > .view`).forEach(e=>e.remove());let e;_a===`earth`?e=Ea:_a===`sky`?e=ya.root:Sa?e=ba.root:(xa.scr.prepend(ga.canvas),e=xa.root),_a!==`sky`&&ya.leave(),e.prepend(Oa),ha.append(e),c(),v()}function Aa(e,t=!1){_a=e,t||(Sa=!1),ka()}Aa(`earth`);var ja=h(`div`,{class:`boot`},h(`span`,null,`TWO POINTS`),h(`small`,null,`A SATELLITE OVER TWO PLACES`));ha.append(ja),setTimeout(()=>ja.classList.add(`half`),420),setTimeout(()=>ja.remove(),640),document.addEventListener(`pointerdown`,()=>m.ensure(),{once:!0}),_n(()=>{xa.refresh(),c()});var Ma=0;function Na(){if(requestAnimationFrame(Na),document.hidden||window.__tpPause)return;let e=W();if(performance.now()-Ma>500){Ma=performance.now();for(let e of pa(Y()))O(e,2600);ya.arrivals()}if(_a===`earth`)va.draw(),Ft.setVoices([]);else if(_a===`sky`)ya.draw(),Ft.setVoices([]);else if(Sa)mr(new Set),Ft.setVoices([]);else{let t=G.beatAt(e),n=xa.frame(e,t);mr(n.used),Ft.setVoices(n.voice?[{g:n.voice,row:br(n.voice)}]:[]),ga.render(n.fr)}}requestAnimationFrame(Na),document.addEventListener(`visibilitychange`,()=>{document.hidden&&(sr.want(null),d())}),window.addEventListener(`pagehide`,d),document.fonts.ready.then(()=>setTimeout(()=>ga.refreshStatic(),300)),`serviceWorker`in navigator&&location.protocol===`https:`&&window.addEventListener(`load`,()=>navigator.serviceWorker.register(`./sw.js`).catch(()=>{})),window.__tp={state:i,renderer:ga,shelf:K,board:xa,globe:va,sky:ya,make:ba,mySats:bi,wnow:Y,jumpTo:Lr,setSpeed:Ir,setTab:Aa,changed:c};