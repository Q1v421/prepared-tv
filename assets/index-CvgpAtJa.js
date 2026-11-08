const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dist-CHi3dtUT.js","./dist-C_52oek8.js","./dist-CtMjQmT9.js"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{name:`MULTI`,ko:`멀티 화면`,amt:`GRID`,min:2,max:5,step:1,def:3},{name:`STROBE`,ko:`스트로브`,amt:`HOLD`,min:2,max:15,step:1,def:4},{name:`SLIT`,ko:`슬릿 스캔`,amt:`SPAN`,min:.1,max:1,step:.05,def:.6},{name:`MIRROR`,ko:`거울`,amt:`AXIS`,min:1,max:3,step:1,def:1},{name:`KALEIDO`,ko:`만화경`,amt:`SEGS`,min:2,max:12,step:1,def:4},{name:`MOSAIC`,ko:`모자이크`,amt:`SIZE`,min:.01,max:.15,step:.005,def:.04},{name:`ZOOM`,ko:`줌 잔상`,amt:`PULL`,min:.05,max:.6,step:.01,def:.25},{name:`RGB`,ko:`RGB 어긋남`,amt:`SHIFT`,min:1,max:40,step:1,def:10},{name:`POSTER`,ko:`포스터`,amt:`LEVELS`,min:2,max:8,step:1,def:3},{name:`SOLAR`,ko:`솔라리제이션`,amt:`FOLD`,min:0,max:1,step:.05,def:.8},{name:`NEGA`,ko:`네거티브`,amt:``,min:0,max:1,step:1,def:1},{name:`THERMAL`,ko:`열화상`,amt:``,min:0,max:1,step:1,def:1},{name:`PAINT`,ko:`페인트박스`,amt:`LEVELS`,min:2,max:8,step:1,def:4},{name:`NEON`,ko:`네온 외곽선`,amt:`GAIN`,min:.5,max:4,step:.1,def:2},{name:`TELETEXT`,ko:`문자방송`,amt:`COLS`,min:16,max:60,step:1,def:32},{name:`LED`,ko:`전광판`,amt:`DOTS`,min:24,max:160,step:2,def:64},{name:`HALFTONE`,ko:`망점`,amt:`CELL`,min:3,max:24,step:1,def:8},{name:`STAR`,ko:`별빛 필터`,amt:`THRESH`,min:.4,max:.97,step:.01,def:.75}];function t(){return{on:e.map(()=>!1),amt:e.map(e=>e.def)}}var n=[{name:`MAJOR`,ko:`장조`,steps:[0,2,4,5,7,9,11],minor:!1},{name:`MINOR`,ko:`단조`,steps:[0,2,3,5,7,8,10],minor:!0},{name:`PENTA`,ko:`5음계`,steps:[0,2,4,7,9],minor:!1},{name:`M.PENTA`,ko:`단5음계`,steps:[0,3,5,7,10],minor:!0},{name:`DORIAN`,ko:`도리안`,steps:[0,2,3,5,7,9,10],minor:!0}],r=[`C`,`C#`,`D`,`D#`,`E`,`F`,`F#`,`G`,`G#`,`A`,`A#`,`B`],i={output:{aspect:`9:16`,quality:`hd`},music:{bpm:96,root:9,scale:1,prog:0,vol:.85},board:{src:``,loopBars:2},stage:{bg:`gen:0`,all:!1,shape:4,speed:2,ax:.32,ay:.32,spin:!1,pulse:!1},tools:{mode:`none`,smear:.7,size:.16},moor:{reshoot:{on:!1,tint:.75,zoom:.82,curve:.45},breakup:{on:!1,block:.05,amount:.6}},scan:{on:!1,hSize:1,vSize:1,hPos:0,vPos:0,rot:0,lines:262,purity:.5,osc:[{target:0,wave:0,freq:3,rate:.4,amp:0},{target:1,wave:0,freq:2,rate:.25,amp:0},{target:2,wave:0,freq:1,rate:.2,amp:0}]},magnet:{list:[],strength:1.2,radius:.55,type:0,audio:0,drift:!1,purity:.7},color:{on:!1,bands:7,hues:[0,.08,.16,.33,.5,.66,.83],sat:1,gain:1,contrast:1.2,smooth:!1,cycle:0,mix:!1,neg:!1},fb:{on:!1,mode:0,size:.84,rot:.06,hue:.02,decay:.95,mix:1},era:t(),synth:{mode:0,fx:3,fy:2,drift:.15,persist:.86,width:1.6,color:`#7dff7d`,gain:1},matte:{pattern:0,color:`#2040c0`},cg:{mode:`off`,style:`chyron`,title1:`GLOBAL GROOVE`,title2:``,lower1:`CHARLOTTE MOORMAN`,lower2:`TV CELLO`,crawl:`이것은 미래의 텔레비전 축제 프로그램 맛보기입니다. `,credits:`VIDEO
당신

PREPARED TV
1963 — 2026`,docTop:`CHARLOTTE MOORMAN
TV-BRA`,doc:`THIS IS THE FIRST TV
OF ANY KIND
AT GUADALCANAL`,tc:!1,tcBig:!1,sat:!1,serial:0},vhs:{bleed:.8,scan:.35,track:.04,chroma:1,roll:0,lines:480,interlace:.2,noise:.08,sat:1,box43:!1,head:.3,warm:.1},audio:{sfx:!0,haptics:!0},ui:{crt:1,tab:`board`,sheet:``}},a=new Set;function o(e){return a.add(e),()=>a.delete(e)}var s=!1;function c(){s||(s=!0,queueMicrotask(()=>{s=!1,a.forEach(e=>e())}))}var l=[`output`,`music`,`board`,`stage`,`tools`,`moor`,`scan`,`color`,`fb`,`synth`,`matte`,`cg`,`vhs`,`audio`],u=`ptv.state.v4`;function d(){try{let e={};for(let t of l)e[t]=i[t];localStorage.setItem(u,JSON.stringify(e))}catch{}}function f(){try{let e=localStorage.getItem(u);if(!e)return;let t=JSON.parse(e);for(let e of l)t[e]&&p(i[e],t[e])}catch{}}function p(e,t){for(let n in t){if(!(n in e))continue;let r=e[n],i=t[n];r&&i&&typeof r==`object`&&typeof i==`object`&&!Array.isArray(r)?p(r,i):e[n]=i}}var m=new class{ctx=null;sfxBus;recDest;xy;analyser;noiseBuf;ready=[];whenReady(e){this.ctx?e(this.ctx):this.ready.push(e)}ensure(){if(this.ctx)return this.ctx.state===`suspended`&&this.ctx.resume(),this.ctx;let e=new AudioContext({latencyHint:`interactive`});this.ctx=e,this.recDest=e.createMediaStreamDestination(),this.sfxBus=e.createGain(),this.sfxBus.gain.value=.45,this.sfxBus.connect(e.destination),this.xy=e.createAnalyser(),this.xy.fftSize=2048,this.xy.smoothingTimeConstant=0,this.analyser=e.createAnalyser(),this.analyser.fftSize=512,this.analyser.smoothingTimeConstant=.6;let t=e.sampleRate*2;this.noiseBuf=e.createBuffer(1,t,e.sampleRate);let n=this.noiseBuf.getChannelData(0);for(let e=0;e<t;e++)n[e]=Math.random()*2-1;return this.ready.splice(0).forEach(t=>t(e)),e}fbuf=new Uint8Array(256);bass(){if(!this.ctx||!this.analyser)return 0;this.analyser.getByteFrequencyData(this.fbuf);let e=0;for(let t=1;t<8;t++)e+=this.fbuf[t];return Math.max(0,e/1785-.25)/.75}noise(e,t=0){let n=this.ctx,r=n.createBufferSource();return r.buffer=this.noiseBuf,r.start(t||n.currentTime,Math.random(),e+.05),r}play(e,t=.5){if(!i.audio.sfx||e===`none`)return;let n=this.ensure(),r=n.currentTime,a=this.sfxBus,o=(e,t,n,i)=>{e.gain.setValueAtTime(1e-4,r),e.gain.exponentialRampToValueAtTime(n,r+t),e.gain.exponentialRampToValueAtTime(1e-4,r+i)};switch(e){case`click`:case`clack`:{let t=this.noise(.03),i=n.createBiquadFilter();i.type=`bandpass`,i.frequency.value=e===`click`?3200:1800,i.Q.value=1.2;let s=n.createGain();o(s,.001,e===`click`?.7:.9,.035),t.connect(i).connect(s).connect(a);let c=n.createOscillator();c.frequency.setValueAtTime(e===`click`?180:120,r),c.frequency.exponentialRampToValueAtTime(60,r+.04);let l=n.createGain();o(l,.001,.35,.05),c.connect(l).connect(a),c.start(r),c.stop(r+.06);break}case`whoosh`:case`swish`:{let i=Math.max(.18,Math.min(t,1.2)),o=this.noise(i),s=n.createBiquadFilter();s.type=`bandpass`,s.Q.value=e===`whoosh`?2.5:4,s.frequency.setValueAtTime(e===`whoosh`?300:900,r),s.frequency.exponentialRampToValueAtTime(e===`whoosh`?2600:5e3,r+i*.6),s.frequency.exponentialRampToValueAtTime(500,r+i);let c=n.createGain();c.gain.setValueAtTime(1e-4,r),c.gain.exponentialRampToValueAtTime(e===`whoosh`?.9:.5,r+i*.45),c.gain.exponentialRampToValueAtTime(1e-4,r+i);let l=n.createStereoPanner();l.pan.setValueAtTime(-.7,r),l.pan.linearRampToValueAtTime(.7,r+i),o.connect(s).connect(c).connect(l).connect(a);break}case`ding`:for(let[e,t]of[[0,1318.5],[1,1975.5]]){let i=r+e*.09,o=n.createOscillator(),s=n.createOscillator(),c=n.createGain();s.frequency.value=t*3.5,c.gain.setValueAtTime(t*1.2,i),c.gain.exponentialRampToValueAtTime(1,i+.6),s.connect(c).connect(o.frequency),o.frequency.value=t;let l=n.createGain();l.gain.setValueAtTime(1e-4,i),l.gain.exponentialRampToValueAtTime(.35,i+.005),l.gain.exponentialRampToValueAtTime(1e-4,i+.9),o.connect(l).connect(a),o.start(i),s.start(i),o.stop(i+1),s.stop(i+1)}break;case`zap`:{let e=n.createOscillator();e.type=`square`,e.frequency.setValueAtTime(1800,r),e.frequency.exponentialRampToValueAtTime(90,r+.25);let t=n.createBiquadFilter();t.type=`lowpass`,t.frequency.value=2400;let i=n.createGain();o(i,.003,.25,.28),e.connect(t).connect(i).connect(a),e.start(r),e.stop(r+.3);break}case`thud`:{let e=n.createOscillator();e.frequency.setValueAtTime(140,r),e.frequency.exponentialRampToValueAtTime(38,r+.35);let t=n.createGain();o(t,.002,1,.45),e.connect(t).connect(a),e.start(r),e.stop(r+.5);let i=this.noise(.4),s=n.createBiquadFilter();s.type=`highpass`,s.frequency.value=2500;let c=n.createGain();o(c,.002,.4,.35),i.connect(s).connect(c).connect(a);break}case`static`:case`surf`:{let t=e===`surf`?.22:.4,i=this.noise(t),o=n.createBiquadFilter();o.type=`bandpass`,o.frequency.value=2200,o.Q.value=.6;let s=n.createGain();s.gain.setValueAtTime(.5,r),s.gain.setValueAtTime(.5,r+t*.7),s.gain.exponentialRampToValueAtTime(1e-4,r+t),i.connect(o).connect(s).connect(a),e===`surf`&&this.play(`clack`);break}case`beep`:{let e=n.createOscillator();e.type=`square`,e.frequency.value=1e3;let t=n.createGain();t.gain.setValueAtTime(.12,r),t.gain.setValueAtTime(1e-4,r+.09),e.connect(t).connect(a),e.start(r),e.stop(r+.1);break}case`power`:{let e=n.createOscillator();e.type=`sawtooth`,e.frequency.setValueAtTime(7867,r);let t=n.createGain();t.gain.setValueAtTime(1e-4,r),t.gain.exponentialRampToValueAtTime(.02,r+.05),t.gain.exponentialRampToValueAtTime(1e-4,r+1.2),e.connect(t).connect(a),e.start(r),e.stop(r+1.3);let i=this.noise(.12),s=n.createGain();o(s,.002,.6,.12);let c=n.createBiquadFilter();c.type=`lowpass`,c.frequency.value=600,i.connect(c).connect(s).connect(a);break}}}};function h(e,t=null,...n){let r=document.createElement(e);if(t)for(let[e,n]of Object.entries(t))n!=null&&n!==!1&&(e===`class`?r.className=String(n):e===`style`?r.setAttribute(`style`,String(n)):e.startsWith(`on`)&&typeof n==`function`?r.addEventListener(e.slice(2),n):r.setAttribute(e,n===!0?``:String(n)));for(let e of n)e!=null&&e!==!1&&r.append(e);return r}function g(){m.play(`click`),i.audio.haptics&&navigator.vibrate?.(6)}var _=[];function v(){for(let e=_.length-1;e>=0;e--)_[e]()}function y(e,t){let n=()=>{if(!e.isConnected&&e.getAttribute(`data-mounted`)){let e=_.indexOf(n);e>=0&&_.splice(e,1)}else e.isConnected&&e.setAttribute(`data-mounted`,`1`),t()};_.push(n),t()}function b(e,t={}){let n=h(`button`,{class:`key ${t.cls||``}`,type:`button`},typeof e==`string`?h(`span`,{class:`kf`},e):e),r=t.dot?h(`i`,{class:`dot`}):null;r&&n.append(r),n.addEventListener(`pointerdown`,e=>{e.preventDefault(),n.classList.add(`down`),t.silent||g(),t.hold&&(n.setPointerCapture(e.pointerId),t.hold(!0))});let i=e=>{n.classList.contains(`down`)&&(n.classList.remove(`down`),t.hold&&t.hold(!1),e&&t.onPress?.())};return n.addEventListener(`pointerup`,()=>i(!0)),n.addEventListener(`pointercancel`,()=>i(!1)),n.addEventListener(`pointerleave`,()=>!t.hold&&n.classList.remove(`down`)),n.addEventListener(`contextmenu`,e=>e.preventDefault()),(t.lit||t.dot)&&y(n,()=>{t.lit&&n.classList.toggle(`lit`,!!t.lit()),r&&t.dot&&(r.hidden=!t.dot())}),n}function x(e,t,n,r,i,a,o,s){let l=h(`span`,{class:`sv`}),u=h(`div`,{class:`spin`},l,h(`span`,{class:`arr`},h(`i`),h(`i`))),d=()=>{let e=t[n];l.textContent=o?o(e):Number.isInteger(a)?String(Math.round(e)):e.toFixed(a<.1?2:1)},f=e=>{e=Math.max(r,Math.min(i,Math.round(e/a)*a)),e=+e.toFixed(4),e!==t[n]&&(t[n]=e,d(),s?.(),c())},p=0,m=0,_=!1;return u.addEventListener(`pointerdown`,e=>{u.setPointerCapture(e.pointerId),p=e.clientY,m=t[n],_=!1,u.classList.add(`down`)}),u.addEventListener(`pointermove`,e=>{if(!u.hasPointerCapture(e.pointerId))return;let t=p-e.clientY;if(Math.abs(t)>4&&(_=!0),!_)return;let n=Math.trunc(t/6),o=(i-r)/a>60?Math.max(1,Math.abs(n)/6):1;f(m+n*a*o)}),u.addEventListener(`pointerup`,e=>{if(u.classList.remove(`down`),!_){let r=u.getBoundingClientRect();f(t[n]+(e.clientY<r.top+r.height/2?a:-a)),g()}}),y(u,d),h(`div`,{class:`ctl`},h(`label`,null,e),u)}function S(e,t,n,r,i,a=``){let o=h(`div`,{class:`keys ${a}`});for(let[e,a]of r)o.append(b(a,{cls:`small`,lit:()=>t[n]===e,onPress:()=>{t[n]=e,i?.(),c()}}));return e?h(`div`,{class:`ctl`},h(`label`,null,e),o):o}function C(e,t,n,r){return b(e,{cls:`small`,lit:()=>!!t[n],onPress:()=>{t[n]=!t[n],r?.(),c()}})}var w=[`#f0f0f0`,`#ff3030`,`#ffe030`,`#30ff40`,`#30e0ff`,`#3050ff`,`#ff40ff`,`#c070ff`,`#101010`];function T(e,t,n,r=w){let i=h(`div`,{class:`chips`});for(let e of r){let r=h(`button`,{class:`chip`,type:`button`,style:`background:${e}`});r.addEventListener(`click`,()=>{t[n]=e,g(),c()}),y(r,()=>r.classList.toggle(`lit`,t[n]===e)),i.append(r)}return h(`div`,{class:`ctl`},h(`label`,null,e),i)}function E(e,t,n,r=!1){let i=r?h(`textarea`,{rows:`3`,class:`field`}):h(`input`,{type:`text`,class:`field`});return i.value=String(t[n]),i.addEventListener(`input`,()=>{t[n]=i.value,c()}),h(`div`,{class:`ctl`},h(`label`,null,e),i)}var D=null,O=0;function k(e,t=2600){D?.remove(),D=h(`div`,{class:`toast`},e),document.querySelector(`.screen`)?.append(D),clearTimeout(O);let n=D;O=window.setTimeout(()=>n.remove(),t)}function A(e,t=!1){return new Promise(n=>{let r=h(`input`,{type:`file`,accept:e,style:`display:none`});t&&(r.multiple=!0),r.addEventListener(`change`,()=>{n(Array.from(r.files||[])),r.remove()}),document.body.append(r),r.click()})}function j(){let e=i.output.aspect;document.documentElement.style.setProperty(`--out-aspect`,e.replace(`:`,`/`)),document.documentElement.toggleAttribute(`data-wide`,e===`16:9`||e===`4:3`)}var ee=`#version 300 es
out vec2 vUv;
void main(){
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,M=class{v;constructor(e){this.v=e}},N=e=>new M(e),P=class{gl;prog;name;locs=new Map;constructor(e,t,n){this.gl=e,this.prog=t,this.name=n}loc(e){let t=this.locs.get(e);return t===void 0&&(t=this.gl.getUniformLocation(this.prog,e),this.locs.set(e,t)),t}},F=class{gl;vao;constructor(e){this.gl=e,this.vao=e.createVertexArray()}program(e,t,n=ee){let r=this.gl,i=(e,n)=>{let i=r.createShader(e);if(r.shaderSource(i,n),r.compileShader(i),!r.getShaderParameter(i,r.COMPILE_STATUS)){let e=r.getShaderInfoLog(i),a=n.split(`
`).map((e,t)=>`${t+1}: ${e}`),o=/0:(\d+)/.exec(e||``),s=o?a.slice(Math.max(0,o[1]-4),+o[1]+2).join(`
`):``;throw Error(`[${t}] shader compile failed: ${e}\n${s}`)}return i},a=r.createProgram();if(r.attachShader(a,i(r.VERTEX_SHADER,n)),r.attachShader(a,i(r.FRAGMENT_SHADER,e)),r.linkProgram(a),!r.getProgramParameter(a,r.LINK_STATUS))throw Error(`[${t}] link failed: ${r.getProgramInfoLog(a)}`);return new P(r,a,t)}texture(e=WebGL2RenderingContext.LINEAR,t=WebGL2RenderingContext.CLAMP_TO_EDGE){let n=this.gl,r=n.createTexture();return n.bindTexture(n.TEXTURE_2D,r),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,t),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,t),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),r}target(e,t,n=WebGL2RenderingContext.LINEAR){let r=this.gl,i=this.texture(n);r.texImage2D(r.TEXTURE_2D,0,r.RGBA8,e,t,0,r.RGBA,r.UNSIGNED_BYTE,null);let a=r.createFramebuffer();return r.bindFramebuffer(r.FRAMEBUFFER,a),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,i,0),r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT),r.bindFramebuffer(r.FRAMEBUFFER,null),{fb:a,tex:i,w:e,h:t}}freeTarget(e){e&&(this.gl.deleteFramebuffer(e.fb),this.gl.deleteTexture(e.tex))}draw(e,t,n,r,i){let a=this.gl;a.bindFramebuffer(a.FRAMEBUFFER,t?t.fb:null);let o=i?i[2]:t?t.w:r[0],s=i?i[3]:t?t.h:r[1];i?a.viewport(i[0],i[1],i[2],i[3]):a.viewport(0,0,o,s),this.bindUniforms(e,n,o,s),a.bindVertexArray(this.vao),a.drawArrays(a.TRIANGLES,0,3)}bindUniforms(e,t,n,r){let i=this.gl;i.useProgram(e.prog);let a=0,o=e.loc(`uRes`);o&&i.uniform2f(o,n,r);for(let n in t){let r=t[n],o=e.loc(n);o!==null&&(typeof r==`number`?i.uniform1f(o,r):r instanceof M?i.uniform1i(o,r.v):Array.isArray(r)?r.length===2?i.uniform2f(o,r[0],r[1]):r.length===3?i.uniform3f(o,r[0],r[1],r[2]):r.length===4&&i.uniform4f(o,r[0],r[1],r[2],r[3]):r&&(i.activeTexture(i.TEXTURE0+a),i.bindTexture(i.TEXTURE_2D,r),i.uniform1i(o,a),a++))}}setArray(e,t,n,r){let i=this.gl;i.useProgram(e.prog);let a=e.loc(t+`[0]`)??e.loc(t);a&&(n===1?i.uniform1fv(a,r):n===3?i.uniform3fv(a,r):i.uniform4fv(a,r))}};function I(e){let t=e.replace(`#`,``),n=parseInt(t.length===3?t.split(``).map(e=>e+e).join(``):t,16);return[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255]}var L=`#version 300 es
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
`,te=L+`
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
`,ne=L+`
uniform sampler2D uSrc;
void main(){ outColor = vec4(texture(uSrc, vUv).rgb, 1.); }
`,R=L+`
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
`,z=`
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
`;L+z+``;var ae=`
vec4 enc(vec2 c){ return vec4(floor(c.x / 256.), mod(c.x, 256.), floor(c.y / 256.), mod(c.y, 256.)) / 255.; }
vec2 dec(vec4 v){ v = floor(v * 255. + .5); return vec2(v.r * 256. + v.g, v.b * 256. + v.a); }
`,oe=L+ae+`
uniform sampler2D uMask;
void main(){
  float a = texelFetch(uMask, ivec2(gl_FragCoord.xy), 0).r;
  outColor = a > .5 ? enc(floor(gl_FragCoord.xy)) : vec4(1.);
}
`,se=L+ae+`
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
`,ce=L+ae+`
uniform sampler2D uSrc;
uniform float uMaxD;
void main(){
  vec2 me = floor(gl_FragCoord.xy);
  vec2 s = dec(texelFetch(uSrc, ivec2(me), 0));
  float d = s.x > 65000. ? 1. : clamp(distance(s, me) / uMaxD, 0., 1.);
  outColor = vec4(d, d, d, 1.);
}
`;L+z+``;var le=L+`
uniform sampler2D uSrc;
uniform sampler2D uPrev;
uniform sampler2D uStandby;
uniform float uBleed;
uniform float uScan;
uniform float uTrack;
uniform float uChroma;
uniform float uRoll;         // accumulated vertical roll offset 0..1
uniform float uLines;
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
  col *= 1. - vsync;

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
`,ue=L+`
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
`,de=L+`
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
`,fe=L+`
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
`,pe=L+`
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
`,me=`
uniform sampler2D uAtlas;
uniform float uHead;     // slot of the newest frame
uniform float uFilled;   // frames available
vec3 past(vec2 uv, float back){
  back = clamp(floor(back), 0., max(uFilled - 1., 0.));
  float slot = mod(uHead - back + 256., 64.);
  vec2 cell = vec2(mod(slot, 8.), floor(slot / 8.));
  return texture(uAtlas, (cell + clamp(uv, .003, .997)) / 8.).rgb;
}
`;L+me+``,L+me+``,L+me+``;var he=L+`
uniform sampler2D uSrc;
uniform sampler2D uCg;
uniform float uOn;
void main(){
  vec3 c = texture(uSrc, vUv).rgb;
  if (uOn > .5){ vec4 g = texture(uCg, vUv); c = c * (1. - g.a) + g.rgb; }
  outColor = vec4(c, 1.);
}
`,B=`
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
`,ge=L+B+`
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
`,_e=L+B+`
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
  if (uLine > 0 && uHasDist > .5) col = lines(col, uv, d, m);
  vec3 inside = self;
  if (uFillMode == 1){
    vec2 t = (uv - .5) * uFillFit.xy + .5 + uFillFit.zw;
    inside = texture(uFill, t).rgb;
  } else if (uFillMode == 2) inside = uFillColor;
  if (uFillMode != 3) col = mix(col, inside, m);
  if (uSel > .5 && uHasDist > .5){
    // selected: a dashed white line just outside
    float dash = step(.5, fract((atan((uv - uCenter).y, (uv - uCenter).x * aspect()) / TAU) * 60. - uTime));
    col = mix(col, vec3(1.), smoothstep(1.6, .4, abs(d - 1.5)) * dash);
  }
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
`,ye=L+ve+`
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
`,be=L+ve+`
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
`,xe=L+`
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
`,Se=L+`
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
`,Ce=L+`
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
`,we=L+ve+`
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
`,Te=L+`
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
`,Ee=L+`
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
`,De=L+`
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
`,Oe=L+`
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
`,ke=[[`GEO`,`도형 만화경`],[`TUNNEL`,`터널`],[`PLASMA`,`플라스마`],[`GRID`,`지평선 격자`],[`VECTOR`,`와이어 도형`],[`CHECKER`,`돌아가는 바둑판`]],Ae=L+`
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

vec3 tunnel(vec2 p){
  float r = length(p), a = atan(p.y, p.x);
  float z = .35 / max(r, .02) + uBeat * .5;
  float u = a / TAU * 12.;
  float chk = mod(floor(z * 2.) + floor(u), 2.);
  vec3 c = mix(hsv2rgb(vec3(fract(z * .05), .9, 1.)), vec3(.05), chk);
  return c * smoothstep(0., .5, r) + vec3(1.) * exp(-fract(uBeat) * 5.) * .15 * (1. - r);
}

vec3 plasma(vec2 p){
  float t = uBeat * .25;
  float v = sin(p.x * 3. + t) + sin((p.y * 3. + t) * .7) + sin((p.x + p.y) * 2. + t * 1.3) + sin(length(p * 4.) - t * 2.);
  v = floor(v * 2.) / 2.;
  return hsv2rgb(vec3(fract(v * .12 + t * .05), .85, .9));
}

vec3 grid(vec2 p){
  vec3 sky = mix(vec3(.9, .2, .5), vec3(.05, 0., .2), clamp(p.y + .2, 0., 1.));
  // the sun, cut by stripes
  vec2 s = p - vec2(0., .32);
  float sun = smoothstep(.36, .35, length(s)) * step(.5, fract((p.y - .32) * 14. + (p.y < .32 ? uBeat * .5 : 0.)) + step(.32, p.y) * .6);
  vec3 col = mix(sky, vec3(1., .85, .2), sun * step(0., p.y));
  if (p.y < 0.){
    float z = .4 / max(-p.y, .01);
    float x = p.x * z;
    float g = max(smoothstep(.06 * z, 0., abs(fract(x) - .5) - .45), smoothstep(.06, 0., abs(fract(z - uBeat) - .5) - .45));
    col = mix(vec3(.04, 0., .08), vec3(1., .2, .9), g * clamp(-p.y * 3., 0., 1.));
  }
  return col;
}

vec3 vector(vec2 p){
  // a rotating wire cube and its echo, drawn as lines
  vec3 col = vec3(0., .02, 0.);
  float b = uBeat;
  for (int e = 0; e < 2; e++){
    float sc = e == 0 ? .5 : .5 + .1 * exp(-fract(b) * 3.);
    mat3 R = rotY(b * .3 + float(e) * .2) * rotX(b * .21);
    vec3 v[8];
    for (int i = 0; i < 8; i++) v[i] = R * (vec3(i & 1, (i >> 1) & 1, (i >> 2) & 1) * 2. - 1.) * sc;
    for (int i = 0; i < 8; i++){
      for (int k = 0; k < 3; k++){
        int j = i ^ (1 << k);
        if (j < i) continue;
        vec2 a = v[i].xy / (2.2 + v[i].z), c = v[j].xy / (2.2 + v[j].z);
        vec2 pa = p - a, ba = c - a;
        float hh = clamp(dot(pa, ba) / dot(ba, ba), 0., 1.);
        float d = length(pa - ba * hh);
        col += vec3(.3, 1., .4) * smoothstep(.006, 0., d) * (e == 0 ? 1. : .4);
      }
    }
  }
  return col;
}

vec3 checker(vec2 p){
  p = rot2(uBeat * .125) * p * (1.5 + .5 * sin(uBeat * .25));
  vec2 c = floor(p * 4.);
  float k = mod(c.x + c.y, 2.);
  vec3 a = hsv2rgb(vec3(fract(floor(uBeat / 4.) * .23), .8, 1.));
  return mix(a, vec3(.05), k);
}

void main(){
  vec2 p = toP(vUv) * .5;
  vec3 c;
  if (uMode == 0) c = geo(p);
  else if (uMode == 1) c = tunnel(p);
  else if (uMode == 2) c = plasma(p);
  else if (uMode == 3) c = grid(p);
  else if (uMode == 4) c = vector(p);
  else c = checker(p);
  outColor = vec4(c, 1.);
}
`,je=class{video;stream=null;facing=null;pending=null;error=``;busy=!1;onError=null;constructor(){this.video=document.createElement(`video`),this.video.muted=!0,this.video.playsInline=!0,this.video.setAttribute(`playsinline`,``)}get ready(){return!!this.stream&&this.video.readyState>=2&&this.video.videoWidth>0}want(e){e!==this.facing&&e!==this.pending&&(this.pending=e,this.busy||this.apply())}async apply(){this.busy=!0;try{for(;this.pending!==this.facing;){let e=this.pending;if(this.stop(),e)try{let t=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:e},width:{ideal:1280},height:{ideal:720},frameRate:{ideal:30}},audio:!1});this.stream=t,this.video.srcObject=t,await this.video.play().catch(()=>{}),this.error=``}catch(e){this.error=e.name||`ERR`,this.pending=null,this.onError?.(this.error)}if(this.facing=this.stream?e:null,!this.stream)break}}finally{this.busy=!1}}stop(){this.stream?.getTracks().forEach(e=>e.stop()),this.stream=null,this.video.srcObject=null,this.facing=null}};function Me(e,t,n){let r=e/t;return r>n?[n/r,1,0,0]:[1,r/n,0,0]}var Ne=`"Galmuri11", monospace`,Pe=[`#ff3030`,`#ffe030`,`#30ff60`,`#30e0ff`,`#5050ff`,`#ff40ff`];function Fe(e,t,n,r){e.font=`bold ${r}px ${Ne}`;let i=e.measureText(t).width;return i>n?Math.floor(r*n/i):r}function Ie(e,t,n,r,i,a,o,s=`center`){e.font=`bold ${i}px ${Ne}`,e.textAlign=s,e.textBaseline=`middle`;let c=Math.max(2,Math.round(i/11));if(a===`neg`){let a=e.measureText(t).width,o=s===`center`?n-a/2:n;e.fillStyle=`#f0f0f0`,e.fillRect(Math.round(o-c*3),Math.round(r-i*.62),Math.round(a+c*6),Math.round(i*1.24)),e.fillStyle=`#0a0a0a`,e.fillText(t,n,r)}else{e.fillStyle=`#000`;for(let[i,a]of[[-c,0],[c,0],[0,-c],[0,c],[-c,-c],[c,c],[-c,c],[c,-c]])e.fillText(t,n+i,r+a);if(a===`cycle`){let i=[...t],a=0,c=i.map(t=>e.measureText(t).width),l=c.reduce((e,t)=>e+t,0),u=s===`center`?n-l/2:n,d=Math.floor(o*8);e.textAlign=`left`,i.forEach((t,n)=>{e.fillStyle=Pe[(n+d)%Pe.length],e.fillText(t,u,r),u+=c[n],a+=c[n]})}else e.fillStyle=`#f4f4f4`,e.fillText(t,n,r)}}var Le=class{canvas=document.createElement(`canvas`);ctx=this.canvas.getContext(`2d`);standby=document.createElement(`canvas`);label=document.createElement(`canvas`);start=0;serial=-1;visible=!1;constructor(){document.fonts.load(`22px "Galmuri11"`,`가A1`).then(()=>this.drawStatic())}resize(e,t){(this.canvas.width!==e||this.canvas.height!==t)&&(this.canvas.width=e,this.canvas.height=t,this.drawStatic())}drawStatic(){let e=this.canvas.width||720,t=this.canvas.height||1280;this.standby.width=e,this.standby.height=t;let n=this.standby.getContext(`2d`);n.fillStyle=`#000`,n.fillRect(0,0,e,t);let r=this.label;r.width=400,r.height=100;let i=r.getContext(`2d`);i.clearRect(0,0,400,100),i.fillStyle=`#000`,i.fillRect(70,28,260,44),i.font=`bold 33px ${Ne}`,i.textAlign=`center`,i.textBaseline=`middle`,i.fillStyle=`#e8e8e8`,i.fillText(`NO SIGNAL`,200,51)}render(e,t=e){let n=i.cg,r=this.canvas.width,a=this.canvas.height,o=this.ctx;if(n.serial!==this.serial&&(this.serial=n.serial,this.start=e),this.visible=n.mode!==`off`||n.tc||n.sat,!this.visible)return!1;o.clearRect(0,0,r,a),o.imageSmoothingEnabled=!1;let s=Math.min(r,a)/10,c=e-this.start,l=e=>e.slice(0,Math.floor(c*30));if(n.mode===`title`){let e=Fe(o,n.title1,r*.9,Math.round(s*1.1));Ie(o,l(n.title1),r/2,a*.47,e,n.style,c),n.title2&&Ie(o,l(n.title2),r/2,a*.47+e*1.3,Math.round(e*.55),n.style===`cycle`?`chyron`:n.style,c)}else if(n.mode===`lower`){let e=Fe(o,n.lower1,r*.86,Math.round(s*.62));Ie(o,l(n.lower1),s*.5,a*.78,e,n.style,c,`left`),Ie(o,l(n.lower2),s*.5,a*.78+e*1.25,Math.round(e*.7),n.style===`cycle`?`chyron`:n.style,c,`left`)}else if(n.mode===`crawl`){let e=Math.round(s*.5);o.font=`bold ${e}px ${Ne}`;let t=o.measureText(n.crawl).width+s,i=r-Math.floor(c*60)*Math.round(s*.03)%(t+r);o.fillStyle=`#000`,o.fillRect(0,Math.round(a*.88-e*.8),r,Math.round(e*1.6)),Ie(o,n.crawl,i,a*.88,e,n.style,c,`left`)}else if(n.mode===`doc`){let e=n.docTop.split(`
`),t=Math.round(s*.3);o.font=`${t}px ${Ne}`,o.textAlign=`center`,o.textBaseline=`middle`,e.forEach((e,n)=>{o.fillStyle=`#000`,o.fillText(l(e),r/2+1,s*.7+n*t*1.3+1),o.fillStyle=`#b8b8b8`,o.fillText(l(e),r/2,s*.7+n*t*1.3)});let i=n.doc.split(`
`).filter(e=>e.trim()),u=Fe(o,i.reduce((e,t)=>e.length>t.length?e:t,``),r*.9,Math.round(s*.5)),d=a*.5-(i.length-1)*u*1.25/2;i.forEach((e,t)=>Ie(o,l(e.toUpperCase()),r/2,d+t*u*1.25,u,`chyron`,c))}else if(n.mode===`credits`){let e=n.credits.split(`
`),t=Math.round(s*.7),i=a-Math.floor(c*30)*Math.max(1,Math.round(s*.04))%(e.length*t+a);e.forEach((a,l)=>{if(!a.trim())return;let u=l===0||!e[l-1].trim();Ie(o,a,r/2,i+l*t,Math.round(u?s*.32:s*.5),u?`chyron`:n.style,c)})}if(n.tc&&n.tcBig){let e=Math.round(s*.62),n=t+660+56,i=Math.floor(n%1*30),c=[Math.floor(n/3600)%24,Math.floor(n/60)%60,Math.floor(n)%60,i].map(e=>String(e).padStart(2,`0`)).join(` `);o.font=`bold ${e}px ${Ne}`;let l=o.measureText(c).width;o.fillStyle=`#000`,o.fillRect(Math.round(r/2-l/2-10),Math.round(a*.8-e*.7),Math.round(l+20),Math.round(e*1.4)),o.fillStyle=`#f4f4f4`,o.textAlign=`center`,o.textBaseline=`middle`,o.fillText(c,r/2,a*.8)}else if(n.tc){let t=Math.round(s*.36),n=e,i=Math.floor(n%1*30),c=`${String(Math.floor(n/3600)%24).padStart(2,`0`)}:${String(Math.floor(n/60)%60).padStart(2,`0`)}:${String(Math.floor(n)%60).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`;o.font=`bold ${t}px ${Ne}`;let l=o.measureText(c).width;o.fillStyle=`#000`,o.fillRect(Math.round(r/2-l/2-6),Math.round(a-s*.9),Math.round(l+12),Math.round(t*1.4)),o.fillStyle=`#fff`,o.textAlign=`center`,o.textBaseline=`top`,o.fillText(c,r/2,Math.round(a-s*.9+t*.2))}if(n.sat){let t=Math.round(s*.3);o.font=`bold ${t}px ${Ne}`,o.textAlign=`left`,o.textBaseline=`top`,Math.floor(e*1.5)%2==0&&(o.fillStyle=`#000`,o.fillRect(Math.round(s*.3),Math.round(s*.35),Math.round(s*4.6),Math.round(t*1.5)),o.fillStyle=`#ffe040`,o.fillText(`LIVE VIA SATELLITE`,Math.round(s*.4),Math.round(s*.35+t*.25)))}return!0}},V=(e,t)=>{e.fillStyle=t,e.fill(),e.lineWidth=5,e.strokeStyle=`#111`,e.stroke()},Re=[e=>{e.beginPath(),e.moveTo(18,92),e.bezierCurveTo(30,40,60,12,92,6),e.bezierCurveTo(80,40,56,70,18,92),V(e,`#f4f0e0`),e.beginPath(),e.moveTo(18,92),e.lineTo(80,20),e.stroke();for(let t=0;t<6;t++)e.beginPath(),e.moveTo(30+t*9,78-t*10),e.lineTo(42+t*9,76-t*12),e.stroke()},e=>{e.beginPath(),e.ellipse(32,76,16,12,-.4,0,Math.PI*2),V(e,`#111`),e.fillRect(44,14,7,62),e.beginPath(),e.moveTo(51,14),e.quadraticCurveTo(80,26,74,52),e.quadraticCurveTo(70,34,51,32),V(e,`#111`)},e=>{e.beginPath(),e.roundRect(34,8,32,48,16),V(e,`#c8c8d0`);for(let t=0;t<4;t++)e.beginPath(),e.moveTo(36,18+t*9),e.lineTo(64,18+t*9),e.stroke();e.beginPath(),e.moveTo(24,46),e.quadraticCurveTo(50,80,76,46),e.stroke(),e.fillStyle=`#111`,e.fillRect(46,64,8,22),e.fillRect(32,86,36,7)},e=>{e.beginPath(),e.moveTo(12,38),e.lineTo(34,38),e.lineTo(62,14),e.lineTo(62,86),e.lineTo(34,62),e.lineTo(12,62),e.closePath(),V(e,`#f0d040`);for(let t=0;t<3;t++)e.beginPath(),e.arc(62,50,14+t*12,-.7,.7),e.stroke()},e=>{e.beginPath(),e.ellipse(50,48,36,42,0,0,Math.PI*2),V(e,`#f8f0c8`),e.fillStyle=`#111`,e.beginPath(),e.ellipse(36,38,8,5,-.3,0,Math.PI*2),e.ellipse(64,38,8,5,.3,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(50,56,18,.15,Math.PI-.15),e.closePath(),e.fill()},e=>{e.beginPath(),e.ellipse(50,48,36,42,0,0,Math.PI*2),V(e,`#a0c8f0`),e.fillStyle=`#111`,e.beginPath(),e.ellipse(36,40,8,5,.4,0,Math.PI*2),e.ellipse(64,40,8,5,-.4,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(50,78,16,Math.PI+.3,-.3),e.lineWidth=6,e.stroke()},e=>{e.beginPath(),e.ellipse(50,52,42,34,-.2,0,Math.PI*2),V(e,`#d8a868`),[`#e02020`,`#2050e0`,`#20c040`,`#f0e020`,`#f0f0f0`].forEach((t,n)=>{e.beginPath(),e.arc(26+n*13,40+n%2*10,6,0,Math.PI*2),e.fillStyle=t,e.fill(),e.lineWidth=2,e.stroke()}),e.beginPath(),e.arc(66,66,8,0,Math.PI*2),e.fillStyle=`#3a2410`,e.fill()},e=>{e.beginPath(),e.moveTo(20,76),e.quadraticCurveTo(30,66,30,44),e.quadraticCurveTo(30,14,50,14),e.quadraticCurveTo(70,14,70,44),e.quadraticCurveTo(70,66,80,76),e.closePath(),V(e,`#f0c030`),e.beginPath(),e.arc(50,82,8,0,Math.PI*2),V(e,`#f0c030`)},e=>{e.beginPath();for(let t=0;t<10;t++){let n=t%2?18:44,r=t/10*Math.PI*2-Math.PI/2;e.lineTo(50+Math.cos(r)*n,52+Math.sin(r)*n)}e.closePath(),V(e,`#ff60c0`)}],ze=[`#1830a0`,`#c02040`,`#108050`,`#d07010`,`#7020a0`,`#101010`,`#e0d8c0`];function Be(e,t,n){e.fillStyle=`#f4f4f4`,e.fillRect(-t/2-8,-n/2-8,t+16,n+16),[`#c0c0c0`,`#c0c000`,`#00c0c0`,`#00c000`,`#c000c0`,`#c00000`,`#0000c0`].forEach((r,i)=>{e.fillStyle=r,e.fillRect(-t/2+i*t/7,-n/2,t/7+1,n*.7)}),[`#0000c0`,`#111`,`#c000c0`,`#111`,`#00c0c0`,`#111`,`#c0c0c0`].forEach((r,i)=>{e.fillStyle=r,e.fillRect(-t/2+i*t/7,-n/2+n*.7,t/7+1,n*.08)}),e.fillStyle=`#101010`,e.fillRect(-t/2,-n/2+n*.78,t,n*.22),e.fillStyle=`#f0f0f0`,e.fillRect(-t/2+t*.16,-n/2+n*.78,t*.16,n*.22)}var Ve=class{canvas=document.createElement(`canvas`);last=-1;stamp=0;update(e,t,n){let r=Math.min(1,720/Math.max(t,n)),i=Math.round(t*r),a=Math.round(n*r);if(e===this.last&&this.canvas.width===i)return!1;this.last=e,this.canvas.width=i,this.canvas.height=a;let o=this.canvas.getContext(`2d`),s=t=>{let n=Math.sin(e*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)};o.fillStyle=ze[Math.floor(s(1)*ze.length)],o.fillRect(0,0,i,a),o.strokeStyle=`rgba(255,255,255,0.18)`,o.lineWidth=10;for(let e=1;e<8;e++)o.strokeRect(i/2-e*i*.07,a/2-e*a*.07,e*i*.14,e*a*.14);let c=Re[Math.floor(s(2)*Re.length)],l=Re[Math.floor(s(3)*Re.length)],u=Math.min(i,a)*.28;for(let[e,t]of[[1,1],[-1,1],[1,-1],[-1,-1]])o.save(),o.translate(i/2+e*i*.3,a/2+t*a*.32),o.scale(e*u/100,t*u/100),o.translate(-50,-50),c(o),o.restore(),o.save(),o.translate(i/2+e*i*.36,a/2+(t>0?.04:-.04)*a),o.scale(e*u*.7/100,u*.7/100),o.translate(-50,-50),t>0&&l(o),o.restore();o.save(),o.translate(i/2,a/2),o.rotate((s(4)-.5)*.9);let d=i*.5,f=d*.75;return o.fillStyle=`rgba(0,0,0,0.45)`,o.fillRect(-d/2+10,-f/2+12,d+16,f+16),Be(o,d,f),o.restore(),this.stamp++,!0}},He=900,Ue=new Float32Array(He*2),We=new Float32Array(2048);function Ge(e,t){let n=i.synth;if(n.mode===1){let e=!1;if(m.ctx&&m.xy){m.xy.getFloatTimeDomainData(We);for(let t=0;t<64;t++)Math.abs(We[t*16])>.002&&(e=!0)}let t=2.6*n.gain;for(let r=0;r<He;r++)if(e){let e=We[r*2%2011],i=We[(r*2+37)%2048],a=Math.atan2(i,e)+r*.0021*n.fx,o=Math.min(1.2,Math.hypot(e,i)*t);Ue[r*2]=Math.cos(a)*o,Ue[r*2+1]=Math.sin(a)*o}else Ue[r*2]=(Math.random()-.5)*.02,Ue[r*2+1]=(Math.random()-.5)*.02;return Ue}let r=e*n.drift,a=.82*(1+t*.15)*n.gain;for(let e=0;e<He;e++){let t=e/899*Math.PI*2,i,o;if(n.mode===2){let e=n.fx/Math.max(1,n.fy),s=Math.cos(e*t*n.fy+r)*a;i=s*Math.cos(t*n.fy),o=s*Math.sin(t*n.fy)}else i=Math.sin(n.fx*t+r)*a,o=Math.sin(n.fy*t)*a;Ue[e*2]=i,Ue[e*2+1]=o}return Ue}function Ke(e,t,n,r,i){let a=e.length/2,o=n/r*2,s=0;for(let n=0;n<a-1;n++){let r=e[n*2]/t,a=e[n*2+1],c=e[n*2+2]/t,l=e[n*2+3],u=c-r,d=l-a,f=Math.hypot(u*t,d)||1e-6,p=Math.min(1.6,.012/f+.25);u/=f,d/=f;let m=-d*o/t,h=u*o,g=[[r+m,a+h,1],[r-m,a-h,-1],[c+m,l+h,1],[c+m,l+h,1],[r-m,a-h,-1],[c-m,l-h,-1]];for(let[e,t,n]of g)i[s++]=e,i[s++]=t,i[s++]=n,i[s++]=p}return s/4}var qe=21576,Je=[{id:`none`,name:`NONE`,ko:`원본`},{id:`paikabe`,name:`PAIK-ABE`,ko:`윤곽+색면`,a:`LINES`,b:`SMEAR`,hist:!0},{id:`ribbon`,name:`RIBBON`,ko:`흰 리본`,a:`LEVEL`,b:`WIDTH`},{id:`rutt`,name:`RUTT`,ko:`주사선 등고선`,a:`HEIGHT`,b:`LINES`},{id:`breakup`,name:`BREAK-UP`,ko:`픽셀 깨짐`,a:`BLOCK`,b:`AMOUNT`},{id:`poster2`,name:`POSTER 2`,ko:`두 색`,a:`COLORS`},{id:`lineart`,name:`LINE ART`,ko:`선화`,a:`BACK`},{id:`smear`,name:`SMEAR`,ko:`흔들린 번짐`,a:`AMOUNT`,b:`ANGLE`,hist:!0},{id:`color`,name:`COLOR`,ko:`컬러라이저`,a:`BANDS`,b:`CYCLE`},{id:`mosaic`,name:`MOSAIC`,ko:`모자이크`,a:`SIZE`,era:5},{id:`rgb`,name:`RGB`,ko:`RGB 어긋남`,a:`SHIFT`,era:7},{id:`solar`,name:`SOLAR`,ko:`솔라리`,a:`FOLD`,era:9},{id:`nega`,name:`NEGA`,ko:`네거티브`,era:10},{id:`thermal`,name:`THERMAL`,ko:`열화상`,era:11},{id:`paint`,name:`PAINT`,ko:`페인트박스`,a:`LEVELS`,era:12},{id:`neon`,name:`NEON`,ko:`네온`,a:`GAIN`,era:13},{id:`halftone`,name:`HALFTONE`,ko:`망점`,a:`CELL`,era:16},{id:`led`,name:`LED`,ko:`전광판`,a:`DOTS`,era:15},{id:`teletext`,name:`TELETEXT`,ko:`문자방송`,a:`COLS`,era:14},{id:`kaleido`,name:`KALEIDO`,ko:`만화경`,a:`SEGS`,era:4}],Ye=e=>Je.find(t=>t.id===e)??Je[0],H=(e,t,n)=>e+(t-e)*n,Xe=[`#ff4070`,`#40e0ff`,`#ffe040`,`#90ff50`,`#c070ff`,`#ff8020`,`#ffffff`,`#30ffc0`],Ze=[[`NONE`,`없음`],[`TORN`,`찢긴 선`],[`NEON`,`네온 번짐`],[`RAINBOW`,`무지개 흐름`],[`DOTS`,`행진 점선`],[`ELECTRIC`,`전기`],[`ECHO`,`메아리 고리`],[`CHROME`,`크롬`],[`RIBBON`,`흰 리본`],[`PAIK-ABE`,`가는 다중선`]],Qe=[`CIRCLE`,`RING`,`RECT`,`DIAMOND`],$e={tap:`TAP`,person:`PERSON`,luma:`LUMA`,chroma:`CHROMA`,shape:`SHAPE`};function et(e,t){let n=e.track;if(!n||!n.done)return null;let r=n.frames.length,i=(t-n.start)*n.fps,a=e=>{if(e=Math.max(0,Math.min(r-1,e)),n.frames[e])return e;for(let t=1;t<r;t++){if(e-t>=0&&n.frames[e-t])return e-t;if(e+t<r&&n.frames[e+t])return e+t}return-1},o=a(Math.floor(i));if(o<0)return null;let s=a(Math.floor(i)+1);s<0&&(s=o);let c=s===o?0:Math.max(0,Math.min(1,i-Math.floor(i)));return{a:n.frames[o],b:n.frames[s],f:c,w:n.w,h:n.h,ia:o,ib:s,cx:n.cx[o]+(n.cx[s]-n.cx[o])*c,cy:n.cy[o]+(n.cy[s]-n.cy[o])*c}}function tt(e){let t=e.track;return e.kind!==`tap`&&e.kind!==`person`?1:t?t.frames.length?t.done/t.frames.length:1:0}var U=()=>performance.now()/1e3,W={origin:0,get beat(){return 60/Math.max(30,i.music.bpm)},get step(){return this.beat/4},stepAt(e){return(e-this.origin)/this.step},timeOf(e){return this.origin+e*this.step},next(e,t=1){let n=Math.ceil(this.stepAt(e)/t-1e-4)*t;return this.timeOf(n)},beatAt(e){return this.stepAt(e)/4}},G=[];function nt(e=U()){if(G.length&&e-G[G.length-1]>2&&(G.length=0),G.push(e),G.length>5&&G.shift(),G.length<2)return null;let t=(G[G.length-1]-G[0])/(G.length-1),n=Math.round(Math.min(200,Math.max(40,60/t)));return i.music.bpm=n,W.origin=e,n}function rt(e,t=U()){let n=W.beatAt(t);i.music.bpm=Math.round(Math.min(200,Math.max(40,e))),W.origin=t-n*W.beat}var it={"4:3":[4,3],"9:16":[9,16],"1:1":[1,1],"16:9":[16,9]},at=[[`#c070ff`,`#f4f0ff`,`#2a2aa0`,`#ffffff`],[`#40ff40`,`#40ff40`,`#40ff40`,`#40ff40`],[`#ff3030`,`#ffe030`,`#30e0ff`,`#ff40ff`],[`#ffffff`,`#000000`,`#ffffff`,`#000000`]],ot=[`#1840c0`,`#18a040`,`#c01818`,`#c018a0`,`#e07010`,`#101010`],st=L+`
uniform sampler2D uA;
uniform sampler2D uB;
uniform float uAmt;
void main(){ outColor = vec4(mix(texture(uA, vUv).rgb, texture(uB, vUv).rgb, uAmt), 1.); }
`,ct=L+`
uniform sampler2D uSrc;
uniform float uAmt;
void main(){
  vec3 c = texture(uSrc, vUv).rgb;
  // darker and greyer, with a faint checker so the cut-out reads as lifted off
  vec2 g = floor(vUv * uRes / 18.);
  float k = mod(g.x + g.y, 2.) * .035;
  outColor = vec4(mix(c, vec3(luma(c)) * .35 + k, uAmt), 1.);
}
`,lt=L+`void main(){ outColor = vec4(0., 0., 0., 1.); }`,ut=class{canvas;gl;kit;W=720;H=1280;cg=new Le;ornament=new Ve;frame=0;fps=0;fpsAcc=0;fpsN=0;lastT=0;p={};texs=new WeakMap;rts=new Map;cgTex;standbyTex;labelTex;ornTex;ornStamp=-1;t={};flip={};maskW=0;maskH=0;beamVao;beamBuf;beamData=new Float32Array(qe);grabbers=[];brush={x:0,y:0,vx:0,vy:0,active:!1,tool:0,startHold:!1};fieldLive=0;centres=new Map;lastLayers=[];constructor(){this.canvas=document.createElement(`canvas`),this.canvas.className=`program-canvas`;let e=this.canvas.getContext(`webgl2`,{antialias:!1,alpha:!1,preserveDrawingBuffer:!1,powerPreference:`high-performance`});if(!e)throw Error(`WebGL2 not supported`);this.gl=e,this.kit=new F(e);let t=(e,t,n)=>this.p[t]=this.kit.program(e,t,n);t(te,`source`),t(ne,`copy`),t(R,`decay`),t(ie,`beam`,re),t(oe,`seed`),t(se,`jfa`),t(ce,`dist`),t(fe,`color`),t(de,`scan`),t(pe,`fb`),t(he,`cg`),t(ue,`era`),t(le,`analog`),t(ge,`objmask`),t(_e,`objcomp`),t(ye,`paikabe`),t(be,`ribbon`),t(xe,`rutt`),t(Se,`breakup`),t(Ce,`reshoot`),t(we,`poster2`),t(Te,`lineart`),t(Ee,`smear`),t(De,`tools`),t(Oe,`field`),t(Ae,`gen`),t(st,`mix`),t(ct,`dim`),t(lt,`black`),this.cgTex=this.kit.texture(),this.standbyTex=this.kit.texture(),this.labelTex=this.kit.texture(),this.ornTex=this.kit.texture(),this.beamVao=e.createVertexArray(),this.beamBuf=e.createBuffer(),e.bindVertexArray(this.beamVao),e.bindBuffer(e.ARRAY_BUFFER,this.beamBuf),e.bufferData(e.ARRAY_BUFFER,this.beamData.byteLength,e.DYNAMIC_DRAW);let n=this.p.beam.prog,r=e.getAttribLocation(n,`aPos`),a=e.getAttribLocation(n,`aAcross`),o=e.getAttribLocation(n,`aI`);e.enableVertexAttribArray(r),e.vertexAttribPointer(r,2,e.FLOAT,!1,16,0),e.enableVertexAttribArray(a),e.vertexAttribPointer(a,1,e.FLOAT,!1,16,8),e.enableVertexAttribArray(o),e.vertexAttribPointer(o,1,e.FLOAT,!1,16,12),e.bindVertexArray(null),this.setOutput(i.output.aspect,i.output.quality)}setOutput(e,t){let[n,r]=it[e],i=t===`hd`?1280:960,a,o;n>=r?(a=i,o=Math.round(i*r/n/2)*2):(o=i,a=Math.round(i*n/r/2)*2),e===`4:3`&&(a=t===`hd`?960:720,o=a*3/4),e===`1:1`&&(a=o=t===`hd`?960:720),this.W=a,this.H=o,this.canvas.width=a,this.canvas.height=o;for(let e in this.t)this.kit.freeTarget(this.t[e]);for(let e of this.rts.values())this.freeRt(e);this.rts.clear(),this.t={};let s=(e,t=a,n=o,r)=>this.t[e]=this.kit.target(t,n,r);for(let e of[`a`,`b`,`c0`,`c1`,`era`,`col`,`sc`,`tl`,`h0`,`h1`,`rs`,`p0`,`p1`,`syn0`,`syn1`,`hold`])s(e);this.maskW=Math.round(a/3),this.maskH=Math.round(o/3);for(let e of[`om`,`odist`])s(e,this.maskW,this.maskH);s(`j0`,this.maskW,this.maskH,this.gl.NEAREST),s(`j1`,this.maskW,this.maskH,this.gl.NEAREST),s(`f0`,Math.round(a/4),Math.round(o/4)),s(`f1`,Math.round(a/4),Math.round(o/4)),this.clearField(),this.cg.resize(a,o),this.upload(this.standbyTex,this.cg.standby,!0),this.upload(this.labelTex,this.cg.label,!0),this.ornStamp=-1}clearField(){let e=this.gl;for(let t of[`f0`,`f1`])e.bindFramebuffer(e.FRAMEBUFFER,this.t[t].fb),e.clearColor(.5,.5,0,0),e.clear(e.COLOR_BUFFER_BIT);e.clearColor(0,0,0,1),e.bindFramebuffer(e.FRAMEBUFFER,null),this.fieldLive=0}clearBrush(){this.clearField()}pp(e,t){let n=e+t;return(this.flip[n]=(this.flip[n]??0)^1)?[this.t[e],this.t[t]]:[this.t[t],this.t[e]]}upload(e,t,n=!1){let r=this.gl;r.bindTexture(r.TEXTURE_2D,e),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!0),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n);try{r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t)}catch{}r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1)}uploadR8(e,t,n,r){let i=this.gl;i.bindTexture(i.TEXTURE_2D,e),i.pixelStorei(i.UNPACK_ALIGNMENT,1),i.texImage2D(i.TEXTURE_2D,0,i.R8,n,r,0,i.RED,i.UNSIGNED_BYTE,t),i.pixelStorei(i.UNPACK_ALIGNMENT,4)}refreshStatic(){this.cg.drawStatic(),this.upload(this.standbyTex,this.cg.standby,!0),this.upload(this.labelTex,this.cg.label,!0)}texOf(e){let t=this.texs.get(e);if(t||(t={tex:this.kit.texture(),stamp:-1,ok:!1},this.texs.set(e,t)),t.stamp!==e.stamp){let n=e.element();n&&(this.upload(t.tex,n),t.ok=!0,t.stamp=e.stamp)}return t.ok?t.tex:null}fitOf(e){let[t,n]=e.size();return Me(t,n,this.W/this.H)}mirrorOf(e){return+(e.s.kind===`camera`&&e.s.facing===`user`)}syn=0;synthTex(){return(this.syn?this.t.syn1:this.t.syn0).tex}renderSynth(e,t){let n=this.gl,r=this.syn?this.t.syn1:this.t.syn0,a=this.syn?this.t.syn0:this.t.syn1;this.syn^=1,this.kit.draw(this.p.decay,a,{uSrc:r.tex,uDecay:i.synth.persist});let o=Ke(Ge(e,t),this.W/this.H,i.synth.width*(this.H/480),this.H,this.beamData);n.bindFramebuffer(n.FRAMEBUFFER,a.fb),n.viewport(0,0,a.w,a.h),n.useProgram(this.p.beam.prog);let s=I(i.synth.color);n.uniform3f(this.p.beam.loc(`uColor`),s[0]*.5,s[1]*.5,s[2]*.5),n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE),n.bindVertexArray(this.beamVao),n.bindBuffer(n.ARRAY_BUFFER,this.beamBuf),n.bufferSubData(n.ARRAY_BUFFER,0,this.beamData,0,o*4),n.drawArrays(n.TRIANGLES,0,o),n.bindVertexArray(null),n.disable(n.BLEND)}srcU(e){return{uTime:e,uFlipY:0,uLabel:this.labelTex,uColor:I(i.matte.color)}}drawPlayer(e,t,n){let r=this.texOf(e);if(!r)return this.kit.draw(this.p.black,t,{});this.kit.draw(this.p.source,t,{...this.srcU(n),uKind:N(1),uTex:r,uFit:this.fitOf(e),uMirror:this.mirrorOf(e)})}drawBg(e,t,n,r){let i=this.kit;if(e.kind===`player`)return this.drawPlayer(e.p,t,n);if(e.kind===`gen`)return i.draw(this.p.gen,t,{uTime:n,uMode:N(e.id),uBeat:r});if(e.kind===`beam`)return i.draw(this.p.source,t,{...this.srcU(n),uKind:N(1),uTex:this.synthTex(),uFit:[1,1,0,0],uMirror:0});if(e.kind===`matte`)return e.pattern===13?(this.ornament.update(Math.floor(r),this.W,this.H),this.ornament.stamp!==this.ornStamp&&(this.upload(this.ornTex,this.ornament.canvas),this.ornStamp=this.ornament.stamp),i.draw(this.p.source,t,{...this.srcU(n),uKind:N(1),uTex:this.ornTex,uFit:[1,1,0,0],uMirror:0})):i.draw(this.p.source,t,{...this.srcU(n),uKind:N(2),uPattern:N(e.pattern),uTex:this.labelTex});i.draw(this.p.black,t,{})}distance(e,t,n){this.kit.draw(this.p.seed,this.t.j0,{uMask:e.tex});let r=this.t.j0,i=this.t.j1,a=1;for(;a<Math.max(this.maskW,this.maskH);)a*=2;for(a/=2;a>=1;a/=2)this.kit.draw(this.p.jfa,i,{uSrc:r.tex,uStep:a}),[r,i]=[i,r];this.kit.draw(this.p.dist,t,{uSrc:r.tex,uMaxD:n})}rtOf(e){let t=this.rts.get(e.id);if(!t){let n=Math.round(this.W/2),r=Math.round(this.H/2);t={raw:this.kit.target(n,r),l0:this.kit.target(n,r),l1:this.kit.target(n,r),flip:0,out:null,frame:-1,ma:this.kit.texture(),mb:this.kit.texture(),ka:null,kb:null,used:0},t.out=t.raw,this.rts.set(e.id,t)}return t.used=this.frame,t}freeRt(e){this.kit.freeTarget(e.raw),this.kit.freeTarget(e.l0),this.kit.freeTarget(e.l1),this.gl.deleteTexture(e.ma),this.gl.deleteTexture(e.mb)}dress(t,n,r,i){let a=this.rtOf(t);if(a.frame===this.frame)return a;a.frame=this.frame,this.drawPlayer(n,a.raw,r);let o=Ye(t.look.id),s=t.look.a,c=t.look.b,l=this.kit,u=a.raw,d=()=>(a.flip^=1,a.flip?a.l0:a.l1),f=()=>a.flip?a.l1:a.l0;if(o.id===`none`)return a.out=u,a;let p=(()=>{let t=d(),n={uSrc:u.tex,uTime:r};if(o.id===`paikabe`)l.draw(this.p.paikabe,t,{...n,uHist:f().tex,uLines:Math.round(H(1,6,s)),uField:.85,uSmear:H(0,.95,c)});else if(o.id===`ribbon`)l.draw(this.p.ribbon,t,{...n,uLevel:H(.2,.8,s),uWidth:H(.03,.18,c),uFringe:1});else if(o.id===`rutt`)l.draw(this.p.rutt,t,{...n,uLines:Math.round(H(24,100,c)),uHeight:H(.04,.3,s),uColorMode:N(0)});else if(o.id===`breakup`)l.draw(this.p.breakup,t,{...n,uBlock:H(.02,.12,s),uAmount:H(.2,1,c)});else if(o.id===`poster2`)l.draw(this.p.poster2,t,{...n,uPair:N(Math.min(3,Math.floor(s*4)))});else if(o.id===`lineart`)l.draw(this.p.lineart,t,{...n,uBg:I(ot[(Math.floor(i)+Math.floor(s*6))%6]),uCircles:1});else if(o.id===`smear`)l.draw(this.p.smear,t,{...n,uHist:f().tex,uAngle:H(-3.1,3.1,c),uAmount:H(.2,1,s)});else if(o.id===`color`){let e=[];for(let t=0;t<7;t++)e.push(...dt([0,.08,.16,.33,.5,.66,.83][t]+r*H(0,.5,c),1,1));l.setArray(this.p.color,`uPal`,3,e),l.draw(this.p.color,t,{uSrc:u.tex,uIn0:u.tex,uIn1:u.tex,uIn2:u.tex,uIn3:u.tex,uMixOn:[0,0,0,0],uBands:N(Math.round(H(2,7,s))),uGain:1,uContrast:1.2,uSmooth:0,uNeg:0,uMix:0})}else if(o.era!==void 0){let n=e.map((e,t)=>+(t===o.era)),i=e[o.era],a=e.map(e=>e.def);a[o.era]=i.step>=1?Math.round(H(i.min,i.max,s)):H(i.min,i.max,s),l.setArray(this.p.era,`uOn`,1,n),l.setArray(this.p.era,`uAmt`,1,a),l.draw(this.p.era,t,{uCur:u.tex,uAtlas:u.tex,uHead:0,uFilled:1,uTime:r})}else return u;return t})();return u=p,a.out=p,a}maskTex(e,t,n){let r=et(e,n);return r?(t.ka!==r.a&&(this.uploadR8(t.ma,r.a,r.w,r.h),t.ka=r.a),t.kb!==r.b&&(this.uploadR8(t.mb,r.b,r.w,r.h),t.kb=r.b),{a:t.ma,b:t.mb,f:r.f,cx:r.cx,cy:r.cy}):null}sourceToScreen(e,t,n){let r=this.fitOf(e.p),i=(t-.5)/r[0]+.5,a=(1-n-.5)/r[1]+.5,o=this.W/this.H,s=(i-.5)*2*o*e.scale,c=(a-.5)*2*e.scale,l=e.rot*Math.PI/180;return[s,c]=[s*Math.cos(l)-c*Math.sin(l),s*Math.sin(l)+c*Math.cos(l)],s+=e.x*o,c+=e.y,[s/(2*o)+.5,c/2+.5]}screenToSource(e,t,n,r){let i=t,a=1-n;if(r){let e=this.W/this.H,t=(i-.5)*2*e-r.x*e,n=(a-.5)*2-r.y,o=-r.rot*Math.PI/180;[t,n]=[t*Math.cos(o)-n*Math.sin(o),t*Math.sin(o)+n*Math.cos(o)],i=t/(2*e*r.scale)+.5,a=n/(2*r.scale)+.5}let o=this.fitOf(e),s=(i-.5)*o[0]+.5,c=(a-.5)*o[1]+.5;return this.mirrorOf(e)&&(s=1-s),[s,1-c]}layerAt(e,t){let n=this.lastLayers;for(let r=n.length-1;r>=0;r--){let i=n[r],[a,o]=this.screenToSource(i.p,e,t,i);if(a<0||a>1||o<0||o>1)continue;if(i.g.kind!==`tap`&&i.g.kind!==`person`){let n=this.centres.get(i.key);if(n&&Math.hypot((e-n[0])*(this.W/this.H),1-t-n[1])<.3*i.scale)return i;continue}let s=et(i.g,i.p.pos(U()));if(!s)continue;let c=Math.min(s.w-1,Math.max(0,Math.floor(a*s.w))),l=Math.min(s.h-1,Math.max(0,Math.floor(o*s.h)));if(s.a[l*s.w+c]>90)return i}return null}render(t){let n=this.kit,r=U(),a=this.lastT?r-this.lastT:.016;this.lastT=r,this.fpsAcc+=a,this.fpsN++,this.fpsAcc>.5&&(this.fps=this.fpsN/this.fpsAcc,this.fpsAcc=0,this.fpsN=0),this.frame++;let o=t.beat;t.bg.kind===`beam`&&this.renderSynth(r,t.pulse),this.drawBg(t.bg,this.t.a,r,o);let s=this.t.a,c=(e,t)=>{let[,i]=this.pp(`c0`,`c1`);n.draw(this.p[e],i,{uSrc:s.tex,uTime:r,...t}),s=i};if(t.bgFx){let a=i.era;if(a.on[3]||a.on[4]){let t=e.map((e,t)=>(t===3||t===4)&&a.on[t]?1:0);n.setArray(this.p.era,`uOn`,1,t),n.setArray(this.p.era,`uAmt`,1,a.amt),n.draw(this.p.era,this.t.era,{uCur:s.tex,uAtlas:s.tex,uHead:0,uFilled:1,uTime:r}),s=this.t.era}let o=i.moor;o.breakup.on&&c(`breakup`,{uBlock:o.breakup.block,uAmount:o.breakup.amount});let l=i.color;if(l.on){let e=[];for(let t=0;t<7;t++)e.push(...dt(l.hues[t]+r*l.cycle,l.sat,1));n.setArray(this.p.color,`uPal`,3,e),n.draw(this.p.color,this.t.col,{uSrc:s.tex,uIn0:s.tex,uIn1:s.tex,uIn2:s.tex,uIn3:s.tex,uMixOn:[0,0,0,0],uBands:N(Math.max(2,Math.min(7,Math.round(l.bands)))),uGain:l.gain,uContrast:l.contrast,uSmooth:+!!l.smooth,uNeg:+!!l.neg,uMix:0}),s=this.t.col}let u=i.fb;if(u.on){let[e,i]=this.pp(`h0`,`h1`);n.draw(this.p.fb,i,{uCur:s.tex,uHist:e.tex,uMode:N(u.mode),uSize:u.size,uRotA:u.rot,uHue:u.hue,uDecay:u.decay,uAmt:u.mix,uPulse:t.pulse,uTime:r}),s=i}o.reshoot.on&&(n.draw(this.p.reshoot,this.t.rs,{uSrc:s.tex,uTint:o.reshoot.tint,uZoom:o.reshoot.zoom,uCurve:o.reshoot.curve,uTime:r}),s=this.t.rs)}t.dim>0&&c(`dim`,{uAmt:t.dim}),this.centres.clear(),this.lastLayers=t.layers;for(let e of t.layers){let i=e.g,a=this.dress(i,e.p,r,o),c=e.p.pos(r),l=this.fitOf(e.p),u={uPos:[e.x*(this.W/this.H),e.y],uScale:e.scale,uRotA:e.rot*Math.PI/180,uTiltA:e.tilt*Math.PI/180,uFit:l,uMirror:this.mirrorOf(e.p),uTime:r},d=0,f=null;if(i.kind===`tap`||i.kind===`person`){if(f=this.maskTex(i,a,c),!f)continue}else d=i.kind===`luma`?1:i.kind===`chroma`?2:3;n.draw(this.p.objmask,this.t.om,{...u,uMaskA:f?.a??this.labelTex,uMaskB:f?.b??this.labelTex,uMaskF:f?.f??0,uObj:a.raw.tex,uKind:N(d),uLuma:[i.key.lo,i.key.hi],uInvert:+!!i.key.invert,uKeyColor:I(i.key.color),uShape:N(i.shape.type),uSize:i.shape.size,uRing:i.shape.ring,uSpin:i.shape.spin});let p=f?this.sourceToScreen(e,f.cx,f.cy):this.sourceToScreen(e,.5,.5);this.centres.set(e.key,p);let m=i.line>0||e.sel,h=this.W/this.maskW,g=140/h+8;m&&this.distance(this.t.om,this.t.odist,g);let _=[];for(let e of at[i.linePal%at.length])_.push(...I(e));n.setArray(this.p.objcomp,`uPal`,3,_);let[,v]=this.pp(`c0`,`c1`);n.draw(this.p.objcomp,v,{...u,uCur:s.tex,uObj:a.out.tex,uMask:this.t.om.tex,uDist:this.t.odist.tex,uHasDist:+!!m,uMaxD:g*h,uLine:N(i.line),uLineSize:i.lineSize,uColor:I(i.color),uCenter:p,uFillMode:N(0),uFill:this.labelTex,uFillFit:[1,1,0,0],uFillColor:[1,1,1],uSel:+!!e.sel,uPulse:t.pulse}),s=v}for(let[e,t]of this.rts)this.frame-t.used>120&&(this.freeRt(t),this.rts.delete(e));let l=i.scan,u=i.magnet.list.slice(0,2);if(l.on&&t.bgFx||u.length){let e=i.magnet,a=this.W/this.H,o=1+t.pulse*e.audio*2.5,c=[],d=[0,0,0,0];for(u.forEach((t,n)=>{let i=t.x,s=t.y;e.drift&&(i+=Math.sin(r*.31+n*2)*.12,s+=Math.cos(r*.23+n)*.12),c.push(i*a,s,t.s*o,t.r),d[n]=t.type});c.length<16;)c.push(0,0,0,1);let f=l.on&&t.bgFx,p=[];for(let e of l.osc)p.push(e.freq,e.rate,f?e.amp:0,e.wave);n.setArray(this.p.scan,`uMag`,4,c),n.setArray(this.p.scan,`uOsc`,4,p);let m=f?l:{hSize:1,vSize:1,hPos:0,vPos:0,rot:0,lines:0};n.draw(this.p.scan,this.t.sc,{uSrc:s.tex,uGeo:[m.hSize,m.vSize,m.hPos,m.vPos],uRot:m.rot*Math.PI/180,uLines:f?l.lines:u.length?262:0,uOscTarget:l.osc.map(e=>e.target),uAudio:t.pulse,uMagType:d,uMagN:N(u.length),uPurity:u.length?e.purity:0,uTime:r}),s=this.t.sc}let d=this.brush;if(d.active||this.fieldLive>0){d.active&&d.startHold&&(n.draw(this.p.copy,this.t.hold,{uSrc:s.tex}),d.startHold=!1);let e=.008+(1-i.tools.smear)*.05,[t,a]=this.pp(`f0`,`f1`);n.draw(this.p.field,a,{uPrev:t.tex,uBrush:[d.x,d.y,i.tools.size*(d.tool===2?.6:1),+!!d.active],uVel:[d.vx,d.vy],uTool:N(d.tool),uRelax:e}),d.vx*=.5,d.vy*=.5,this.fieldLive=d.active?400:this.fieldLive-1,n.draw(this.p.tools,this.t.tl,{uSrc:s.tex,uField:a.tex,uHold:this.t.hold.tex,uTime:r}),s=this.t.tl}let f=t.bg.kind===`player`?t.bg.p.pos(r):r,p=this.cg.render(r,f);p&&this.upload(this.cgTex,this.cg.canvas,!0);let[m,h]=this.pp(`p0`,`p1`);n.draw(this.p.cg,h,{uSrc:s.tex,uCg:this.cgTex,uOn:+!!p});let g=i.vhs;if(n.draw(this.p.analog,null,{uSrc:h.tex,uPrev:m.tex,uStandby:this.standbyTex,uTime:r,uBleed:g.bleed,uScan:g.scan,uTrack:g.track,uChroma:g.chroma,uRoll:0,uLines:g.lines,uInterlace:g.interlace,uNoise:g.noise,uSat:g.sat,uBox43:+!!g.box43,uHead:g.head,uField:this.frame%2,uWarm:g.warm,uInvert:0,uTear:0,uSnow:0,uBars:0,uStandbyOn:0,uJitter:0,uFlipY:0},[this.W,this.H]),this.grabbers.length){let e=document.createElement(`canvas`),t=200/Math.max(this.W,this.H);e.width=Math.round(this.W*t),e.height=Math.round(this.H*t),e.getContext(`2d`).drawImage(this.canvas,0,0,e.width,e.height);let n=e.toDataURL(`image/jpeg`,.75);this.grabbers.splice(0).forEach(e=>e(n))}}grab(e=500){return new Promise(t=>{this.grabbers.push(t),setTimeout(()=>t(``),e)})}};function dt(e,t,n){e=(e%1+1)%1;let r=r=>{let i=(r+e*6)%6;return n-n*t*Math.max(0,Math.min(i,4-i,1))};return[r(5),r(3),r(1)]}function ft(){return[`video/mp4;codecs="avc1.42E01E,mp4a.40.2"`,`video/mp4;codecs=avc1`,`video/mp4`,`video/webm;codecs="vp9,opus"`,`video/webm;codecs="vp8,opus"`,`video/webm`].find(e=>typeof MediaRecorder<`u`&&MediaRecorder.isTypeSupported(e))||``}var pt=class{rec=null;chunks=[];started=0;mime=``;get recording(){return!!this.rec&&this.rec.state===`recording`}get elapsed(){return this.recording?(performance.now()-this.started)/1e3:0}start(e,t){if(this.recording)return;m.ensure();let n=[...e.captureStream(30).getVideoTracks(),...m.recDest.stream.getAudioTracks()],r=new MediaStream(n);this.mime=ft(),this.chunks=[],this.rec=new MediaRecorder(r,{mimeType:this.mime||void 0,videoBitsPerSecond:t,audioBitsPerSecond:128e3}),this.rec.ondataavailable=e=>e.data.size&&this.chunks.push(e.data),this.rec.start(500),this.started=performance.now()}async stop(e){let t=this.rec;if(!t)return null;let n=this.elapsed,r=await e();return new Promise(e=>{t.onstop=()=>{let i=(this.mime||t.mimeType||`video/webm`).split(`;`)[0],a=new Blob(this.chunks,{type:i});if(this.rec=null,this.chunks=[],t.stream.getVideoTracks().forEach(e=>e.stop()),!a.size)return e(null);let o=new Date;e({id:`${o.getTime()}`,created:o.getTime(),duration:n,label:`${o.getMonth()+1}/${o.getDate()} 녹화 ${String(o.getHours()).padStart(2,`0`)}:${String(o.getMinutes()).padStart(2,`0`)}`,color:Math.floor(Math.random()*5),mime:i,blob:a,thumb:r})},t.stop()})}},mt=`prepared-tv-9x`;function ht(){return new Promise((e,t)=>{let n=indexedDB.open(mt,1);n.onupgradeneeded=()=>n.result.createObjectStore(`tapes`,{keyPath:`id`}),n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}async function gt(e,t){let n=await ht();return new Promise((r,i)=>{let a=t(n.transaction(`tapes`,e).objectStore(`tapes`));a.onsuccess=()=>r(a.result),a.onerror=()=>i(a.error)})}var _t={all:async()=>(await gt(`readonly`,e=>e.getAll())).sort((e,t)=>t.created-e.created),put:e=>gt(`readwrite`,t=>t.put(e)),remove:e=>gt(`readwrite`,t=>t.delete(e))};function vt(e){let t=e.mime.includes(`mp4`)?`mp4`:`webm`;return`prepared-tv-${e.id}.${t}`}async function yt(){let e=window.claude;if(!e?.use)return null;try{return await e.use(`downloads`)}catch{return null}}async function bt(e){if(await yt())return xt(e);let t=new File([e.blob],vt(e),{type:e.mime});if(navigator.canShare?.({files:[t]}))try{return await navigator.share({files:[t],title:e.label}),!0}catch{return!1}return xt(e),!0}async function xt(e){let t=await yt();if(t)try{return await t.save({filename:vt(e),data:e.blob}),!0}catch{return!1}let n=document.createElement(`a`);return n.href=URL.createObjectURL(e.blob),n.download=vt(e),document.body.appendChild(n),n.click(),setTimeout(()=>{URL.revokeObjectURL(n.href),n.remove()},2e3),!0}var St=[{name:`I–vi–IV–V`,ko:`밝게 도는`,deg:[0,5,3,4]},{name:`i–VI–III–VII`,ko:`어둡게 도는`,deg:[0,5,2,6]},{name:`I–IV`,ko:`두 화음`,deg:[0,3,0,3]},{name:`DRONE`,ko:`한 화음`,deg:[0,0,0,0]}],Ct=[{hp:30,lp:420,oct:36},{hp:150,lp:1700,oct:48},{hp:400,lp:4500,oct:60},{hp:1500,lp:16e3,oct:72}],wt=()=>n[i.music.scale]??n[0];function Tt(){let e=wt();return e.steps.length===7?e.steps:e.minor?[0,2,3,5,7,8,10]:[0,2,4,5,7,9,11]}function Et(){return wt().steps.map(e=>(e+i.music.root)%12)}function Dt(e){if(e<0)return 0;let t=Et(),n=0,r=99;for(let i=-6;i<=6;i++){let a=Math.abs(i);t.includes(((e+i)%12+12)%12)&&a<r&&(r=a,n=i)}let a=i.music.root;for(let t of[-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6])if(Math.abs(t)===r&&[a,(a+7)%12].includes(((e+t)%12+12)%12))return t;return n}function Ot(e){return Math.floor(W.beatAt(e)/4)}function kt(e){let t=(St[i.music.prog]??St[0]).deg[(Ot(e)%4+4)%4],n=Tt();return[0,2,4,6].map(e=>(n[(t+e)%7]+i.music.root)%12)}function At(e,t,n){let r=kt(e),i=r[(t%r.length+r.length)%r.length],a=Math.floor(n/12)*12+i;return a<n-6&&(a+=12),a>n+6&&(a-=12),a}function jt(e){let t=e/W.beat,n=4,r=99;for(let e of[1,2,4,8,16]){let i=Math.abs(Math.log2(Math.max(.01,t)/e));i<r&&(r=i,n=e)}return n}function Mt(e){if(!e||e.every(e=>!e))return 0;let t=new Set(Et()),n=i.music.root,r=0,a=-1;for(let i=-6;i<=6;i++){let o=0;for(let n=0;n<12;n++)t.has(((n+i)%12+12)%12)&&(o+=e[n]);((e.indexOf(Math.max(...e))+i)%12+12)%12===n&&(o+=.04),o-=Math.abs(i)*.004,o>a&&(a=o,r=i)}return r}function Nt(e=1024){let t=new Float32Array(e);for(let n=0;n<e;n++){let r=n/(e-1)*2-1;t[n]=Math.tanh(r*1.6)/Math.tanh(1.6)}return t}function Pt(e,t=2048){let n=new Float32Array(t),r=2**(e-1);for(let e=0;e<t;e++)n[e]=Math.round((e/(t-1)*2-1)*r)/r;return n}function Ft(e,t,n){let r=e.sampleRate,i=Math.floor(r*t),a=e.createBuffer(2,i,r);for(let e=0;e<2;e++){let t=a.getChannelData(e);for(let e=0;e<i;e++)t[e]=(Math.random()*2-1)*(1-e/i)**n*(e<r*.004?e/(r*.004):1)}return a}function It(e){let t=e.an,n=0;return e.sound.auto&&t&&!t.silent&&(n=t.chroma?.some(e=>e>0)?Mt(t.chroma):t.pc>=0?Dt(t.pc):0),Math.max(-12,Math.min(12,n+e.sound.shift))}function Lt(e){return e.sound.mode===`orig`||e.sound.mode===`reson`?It(e):0}function Rt(e){let t=e.an;return!!t&&t.conf>.6&&t.midi>0&&Math.max(...t.chroma??[0])>.35}function zt(e){return 2**(Lt(e)/12)}function Bt(e){return jt((e.loopOut-e.loopIn)/zt(e))*W.beat}function Vt(e,t){let n=Bt(e);return W.origin+Math.floor((t-W.origin)/n)*n}var Ht={breakup:{crush:.7},mosaic:{crush:.5},led:{crush:.5},teletext:{crush:.6},smear:{wow:.6},rutt:{wow:.5},kaleido:{wow:.3,echo:.3},paikabe:{echo:.45,wow:.15},neon:{echo:.35}},Ut=class{e;g;in;out;hp;lp;res=[];resDry;crushWet;crushDry;wowDepth;echoSend;hallSend;nextCycle=-1;nextHit=-1;nextGrain=0;lastBar=-9999;hits=0;row=1;alive=!0;sources=new Set;constructor(e,t,n){this.e=e,this.g=t;let r=e.ctx,i=(e=1)=>{let t=r.createGain();return t.gain.value=e,t};this.in=i(),this.out=i(0),this.hp=r.createBiquadFilter(),this.hp.type=`highpass`,this.lp=r.createBiquadFilter(),this.lp.type=`lowpass`;let a=i();this.resDry=i(1),this.in.connect(this.resDry).connect(a);for(let e=0;e<4;e++){let e=r.createBiquadFilter();e.type=`bandpass`,e.Q.value=45;let t=i(0);this.in.connect(e).connect(t).connect(a),this.res.push(e),e.mk=t}a.connect(this.hp).connect(this.lp);let o=r.createWaveShaper();o.curve=Pt(4);let s=r.createBiquadFilter();s.type=`lowpass`,s.frequency.value=3200,this.crushWet=i(0),this.crushDry=i(1);let c=i();this.lp.connect(this.crushDry).connect(c),this.lp.connect(o).connect(s).connect(this.crushWet).connect(c);let l=r.createDelay(.1);l.delayTime.value=.012;let u=r.createOscillator();u.frequency.value=.7+Math.random()*.3,this.wowDepth=i(0),u.connect(this.wowDepth).connect(l.delayTime),u.start(),this.sources.add(u),c.connect(l).connect(this.out),this.out.connect(e.masterIn),this.echoSend=i(0),this.out.connect(this.echoSend).connect(e.echoIn),this.hallSend=i(0),this.out.connect(this.hallSend).connect(e.hallIn),this.setRow(n),this.applyMode()}setRow(e){this.row=e;let t=Ct[Math.max(0,Math.min(3,e))],n=this.e.ctx.currentTime;this.hp.frequency.setTargetAtTime(t.hp,n,.05),this.lp.frequency.setTargetAtTime(t.lp,n,.05)}applyMode(){let e=this.e.ctx.currentTime,t=this.g.sound.mode===`reson`;this.resDry.gain.setTargetAtTime(t?.04:1,e,.05);for(let n of this.res)n.mk.gain.setTargetAtTime(t?10:0,e,.05);let n=Ht[this.g.look.id]??{};this.crushWet.gain.setTargetAtTime(n.crush??0,e,.05),this.crushDry.gain.setTargetAtTime(1-(n.crush??0)*.8,e,.05),this.wowDepth.gain.setTargetAtTime((n.wow??0)*.004,e,.05),this.echoSend.gain.setTargetAtTime(n.echo??0,e,.05),this.hallSend.gain.setTargetAtTime(this.g.sound.mode===`pad`?.8:t?.35:.12,e,.05),this.lastBar=-9999}level(e){let t=this.g,n={orig:1,reson:1.6,pulse:1.1,pad:.9,mute:0}[t.sound.mode],r=(t.an?.normGain??1)*t.sound.gain*n/Math.sqrt(Math.max(1,e));this.out.gain.setTargetAtTime(Math.min(4,r),this.e.ctx.currentTime,.08)}at(e){let t=this.e.ctx;return Math.max(t.currentTime,t.currentTime+(e-U()))}play(e,t,n,r,i=.006){let a=this.g.src.audio;if(!a||n<=.01||t>=a.duration)return;let o=this.e.ctx,s=this.at(e),c=o.createBufferSource();c.buffer=a,c.playbackRate.value=r;let l=o.createGain();l.gain.setValueAtTime(0,s),l.gain.linearRampToValueAtTime(1,s+i),l.gain.setValueAtTime(1,s+Math.max(i,n-i*2)),l.gain.linearRampToValueAtTime(0,s+n),c.connect(l).connect(this.in),c.start(s,t,n*r+.02),this.sources.add(c),c.onended=()=>this.sources.delete(c)}ref(){let e=this.g.an;return e&&e.conf>.25&&e.midi?e.midi:Ct[this.row].oct+12}pitchRate(e,t){let n=this.g,r;return r=Rt(n)?At(e,t,this.ref()+It(n))-this.ref():It(n)+[0,12,0,-12][t%4],Math.max(.5,Math.min(2,2**(r/12)))}schedule(e,t){let n=this.g;if(!this.alive||n.sound.mode===`mute`||!n.src.audio)return;let r=zt(n),i=Bt(n),a=n.loopOut-n.loopIn,o=Ot(t);if(o!==this.lastBar&&n.sound.mode===`reson`){this.lastBar=o;let e=this.at(W.timeOf(o*16)),t=Ct[this.row].oct+12;this.res.forEach((n,r)=>n.frequency.setTargetAtTime(440*2**((At(W.timeOf(o*16),r,t)-69)/12),e,.03))}if(n.sound.mode===`orig`||n.sound.mode===`reson`){if(this.nextCycle<0){let t=W.next(e,4),o=Vt(n,t),s=(t-o)*r;s<a-.05&&this.play(t,n.loopIn+s,Math.min(a/r,i)-(t-o),r),this.nextCycle=o+i}for(;this.nextCycle<t;)this.play(this.nextCycle,n.loopIn,Math.min(a/r,i),r),this.nextCycle+=i}else if(n.sound.mode===`pulse`){let r=Math.max(1,Math.round(i/W.step)),o=n.an?.onsets??[],s=new Map;if(o.length)o.forEach(e=>s.set(Math.round(e/a*r)%r,e));else for(let e=0;e<r;e+=2)s.set(e,e/r*a);for(this.nextHit<0&&(this.nextHit=W.next(e,1));this.nextHit<t;){let e=this.nextHit,t=Math.round((e-Vt(n,e))/W.step)%r,i=s.get(t);if(i!==void 0){let t=this.pitchRate(e,this.hits++);this.play(e,n.loopIn+Math.min(i,a-.05),Math.min(.22,W.step*1.6),t,.003)}this.nextHit+=W.step}}else if(n.sound.mode===`pad`)for(this.nextGrain<e&&(this.nextGrain=e);this.nextGrain<t;){let e=this.nextGrain,t=this.pitchRate(e,Math.floor(Math.random()*4)),r=.18+Math.random()*.14;this.play(e,n.loopIn+Math.random()*Math.max(.01,a-r*t),r,t,r*.45),this.nextGrain+=1/14*(.6+Math.random()*.8)}}reset(){this.nextCycle=-1,this.nextHit=-1,this.lastBar=-9999,this.hush(),this.applyMode()}hush(){let e=this.e.ctx.currentTime;for(let t of this.sources)if(!(t instanceof OscillatorNode))try{t.stop(e+.03)}catch{}}dispose(){this.alive=!1;let e=this.e.ctx.currentTime;this.out.gain.setTargetAtTime(0,e,.03),setTimeout(()=>{for(let e of this.sources)try{e.stop()}catch{}this.out.disconnect()},300)}},Wt=new class{ctx=null;masterIn;echoIn;hallIn;vol;voices=new Map;want=[];sig=``;constructor(){m.whenReady(e=>this.init(e))}init(e){this.ctx=e;let t=(t=1)=>{let n=e.createGain();return n.gain.value=t,n};this.masterIn=t(),this.echoIn=t();let n=e.createDelay(2),r=t(.4),a=e.createBiquadFilter();a.type=`lowpass`,a.frequency.value=2600,this.echoIn.connect(n).connect(a).connect(r).connect(n),a.connect(this.masterIn);let o=()=>n.delayTime.setTargetAtTime(W.step*3,e.currentTime,.2);o(),setInterval(o,1e3),this.hallIn=t();let s=e.createConvolver();s.buffer=Ft(e,3.8,2.4),this.hallIn.connect(s).connect(t(.6)).connect(this.masterIn);let c=e.createBiquadFilter();c.type=`highpass`,c.frequency.value=40;let l=e.createDynamicsCompressor();l.threshold.value=-20,l.knee.value=12,l.ratio.value=3,l.attack.value=.01,l.release.value=.25;let u=e.createWaveShaper();u.curve=Nt();let d=e.createDynamicsCompressor();d.threshold.value=-6,d.knee.value=0,d.ratio.value=20,d.attack.value=.002,d.release.value=.1,this.vol=t(i.music.vol);let f=e.createWaveShaper(),p=Nt();for(let e=0;e<p.length;e++)p[e]*=.89;f.curve=p,this.masterIn.connect(c).connect(l).connect(t(.6)).connect(u).connect(d).connect(this.vol).connect(f),f.connect(e.destination),f.connect(m.recDest),f.connect(m.xy),f.connect(m.analyser);let h=()=>{this.update(),window.setTimeout(h,25)};h()}setVoices(e){this.want=e}refresh(e){for(let t of this.voices.values())e&&t.g!==e||t.reset()}setVolume(e){this.vol&&this.ctx&&this.vol.gain.setTargetAtTime(e,this.ctx.currentTime,.05)}update(){if(!this.ctx)return;let e=new Set;for(let t of this.want){e.add(t.g.id);let n=this.voices.get(t.g.id);n?n.row!==t.row&&n.setRow(t.row):(n=new Ut(this,t.g,t.row),this.voices.set(t.g.id,n))}for(let[t,n]of this.voices)e.has(t)||(n.dispose(),this.voices.delete(t));let t=[i.music.root,i.music.scale,i.music.bpm,i.music.prog].join(`,`);t!==this.sig&&(this.sig=t,this.refresh());let n=this.voices.size,r=U(),a=r+.12;for(let e of this.voices.values())e.level(n),e.schedule(r,a)}chordName(e=U()){return kt(e)[0]}},Gt=[`#d8d8d8`,`#b0b0b0`,`#e8e0c8`,`#c8c8d8`,`#e0e0e0`];function Kt(e){let t=h(`div`,{class:`shelf`}),n=h(`span`,{class:`count`}),r=h(`div`,{class:`view tapes-view`},h(`div`,{class:`view-head`},b(`◀ BACK`,{cls:`small`,onPress:e}),h(`div`,{class:`hdr`},h(`span`,null,`-TAPE SHELF`),h(`i`)),n),t),i=async()=>{let e=await _t.all().catch(()=>[]);if(n.textContent=String(e.length).padStart(2,`0`),t.textContent=``,!e.length)t.append(h(`div`,{class:`empty`},h(`div`,{class:`cassette ghost`}),h(`p`,null,`아직 녹화한 테이프가 없어요.`),h(`p`,{class:`hint`},`콘솔에서 ● REC를 눌러 녹화하세요.`)));else for(let n of e)t.append(qt(n,()=>Yt(n,i)))};return i(),{root:r,reload:i}}function qt(e,t){let n=new Date(e.created),r=h(`button`,{class:`cassette`,type:`button`,style:`--sticker:${Gt[e.color%Gt.length]}`},h(`span`,{class:`reel l`}),h(`span`,{class:`reel r`}),h(`span`,{class:`label`},h(`span`,{class:`hand`},e.label),h(`span`,{class:`meta`},`${n.getFullYear()}.${n.getMonth()+1}.${n.getDate()}`,h(`b`,null,Jt(e.duration)))),e.thumb?h(`img`,{class:`thumb`,src:e.thumb,alt:``}):null,h(`span`,{class:`brand`},`T-120 · SP`));return r.addEventListener(`click`,t),r}function Jt(e){return`${Math.floor(e/60)}:${String(Math.floor(e%60)).padStart(2,`0`)}`}function Yt(e,t){let n=URL.createObjectURL(e.blob),r=h(`video`,{src:n,playsinline:!0,loop:!0,autoplay:!0}),i=()=>{r.pause(),URL.revokeObjectURL(n),a.remove()},a=h(`div`,{class:`modal`},h(`div`,{class:`tv-set`},h(`div`,{class:`tv-screen`},r,h(`div`,{class:`glass`})),h(`div`,{class:`tv-controls`},h(`span`,{class:`hand`},e.label),h(`i`,{class:`led on`}))),h(`div`,{class:`key-row player-keys`},b(`▶/❚❚`,{cls:`small`,onPress:()=>r.paused?void r.play():r.pause()}),b(`공유`,{cls:`small`,onPress:()=>void bt(e)}),b(`저장`,{cls:`small`,onPress:()=>xt(e)}),b(`라벨`,{cls:`small`,onPress:()=>o()}),b(`지우기`,{cls:`small danger`,onPress:async()=>{let n=a.querySelector(`.key.danger .key-face`);n.textContent===`정말?`?(await _t.remove(e.id),k(`테이프를 지웠어요`),i(),t()):(n.textContent=`정말?`,setTimeout(()=>n.isConnected&&(n.textContent=`지우기`),3e3))}}),b(`닫기`,{cls:`small`,onPress:i})));function o(){let n=a.querySelector(`.tv-controls .hand`);if(a.querySelector(`.label-edit`))return;let r=h(`input`,{type:`text`,class:`lcd-input label-edit`,maxlength:`40`});r.value=e.label;let i=async()=>{e.label=r.value.trim().slice(0,40)||e.label,await _t.put(e),n.textContent=e.label,o.remove(),t()};r.addEventListener(`keydown`,e=>e.key===`Enter`&&void i());let o=h(`div`,{class:`key-row player-keys`},r,b(`확인`,{cls:`small`,onPress:()=>void i()}));a.querySelector(`.tv-set`).after(o),r.focus()}document.querySelector(`.screen`).append(a)}var Xt=48,Zt=32,Qt=`#000`;function $t(e,t,n=Qt,r=2){e.beginPath(),t.forEach(([t,n],r)=>r?e.lineTo(t,n):e.moveTo(t,n)),e.strokeStyle=n,e.lineWidth=r,e.stroke()}function en(e,t,n,r,i=r,a=Qt){e.beginPath(),e.ellipse(t,n,r,i,0,0,Math.PI*2),e.fillStyle=a,e.fill()}function tn(e){let t=e;return()=>(t=t*16807%2147483647)/2147483647}var nn=[e=>$t(e,Array.from({length:23},(e,t)=>[3+t*2,16-Math.sin(t*.57)*9])),e=>$t(e,[[3,16],[9,7],[21,25],[33,7],[45,25]]),e=>$t(e,[[3,25],[3,7],[14,7],[14,25],[25,25],[25,7],[36,7],[36,25],[45,25]]),e=>$t(e,[[3,25],[15,7],[15,25],[27,7],[27,25],[39,7],[39,25],[45,18]]),e=>{let t=tn(4);$t(e,Array.from({length:22},(e,n)=>[3+n*2,8+t()*16]))},e=>{en(e,17,23,5,4),$t(e,[[21,23],[21,5],[32,9]],Qt,2.5),en(e,31,19,4,3),$t(e,[[34,19],[34,8]],Qt,2)}];function rn(e){let t=e.getContext(`2d`),n=t.getImageData(0,0,Xt,Zt),r=n.data;for(let e=0;e<Zt;e++)for(let t=0;t<Xt;t++){let n=(e*Xt+t)*4;if(r[n+3]<110){r[n+3]=0;continue}let i=(r[n]+r[n+1]+r[n+2])/765,a;a=i<.3?0:i>.8?255:(t+e)%2?0:-1,a<0?r[n+3]=0:(r[n]=r[n+1]=r[n+2]=a?236:8,r[n+3]=255)}return t.putImageData(n,0,0),e.toDataURL()}function an(e){let t=document.createElement(`canvas`);t.width=Xt,t.height=Zt;let n=t.getContext(`2d`);return n.lineCap=`square`,n.lineJoin=`miter`,e(n),rn(t)}var on=new Map;function sn(e,t){let n=on.get(e);return n||(n=an(t),on.set(e,n)),n}var cn=e=>sn(`v`+e,nn[e]),ln={scan:`SCAN PROCESSOR`,magnet:`MAGNET`,color:`COLORIZER`,fdbk:`FEEDBACK`,synth:`DV1 SYNTH`,cg:`CHARACTER GEN`,tape:`TAPE`,setup:`SETUP`},un=[{name:`PAIK-ABE`,hues:[0,.08,.16,.33,.5,.66,.83],sat:1,colors:[]},{name:`FIRE`,hues:[.98,.02,.05,.08,.12,.15,.17],sat:1,colors:[]},{name:`ICE`,hues:[.6,.58,.55,.52,.5,.48,.45],sat:.8,colors:[]},{name:`GROOVE`,hues:[.83,.33,.95,.5,.12,.7,.2],sat:1,colors:[]},{name:`PHOSPHOR`,hues:[.33,.33,.33,.33,.33,.33,.33],sat:.9,colors:[]},{name:`SUNSET`,hues:[.75,.85,.95,.02,.06,.1,.14],sat:1,colors:[]},{name:`FLAG`,hues:[0,0,.66,.66,0,.66,0],sat:.95,colors:[]},{name:`PASTEL`,hues:[.9,.1,.2,.4,.55,.7,.8],sat:.45,colors:[]}];for(let e of un)e.colors=e.hues.map(t=>`hsl(${Math.round(t*360)} ${Math.round(e.sat*100)}% 50%)`);function dn(e){let t=un[e];i.color.on=!0,i.color.hues=t.hues.slice(),i.color.sat=t.sat,c()}function fn(){Object.assign(i.scan,{hSize:1,vSize:1,hPos:0,vPos:0,rot:0}),i.scan.osc.forEach(e=>e.amp=0)}function pn(e){fn();let t=i.scan;t.on=!0;let n=t.osc;switch(e){case 0:n[0]={target:0,wave:0,freq:3,rate:.4,amp:.15};break;case 1:i.magnet.list=[{x:0,y:0,s:2.2,r:.5,type:0,born:0}];break;case 2:t.vSize=.004;break;case 3:t.vSize=.004,t.rot=90;break;case 4:n[2]={target:2,wave:0,freq:1,rate:.3,amp:.35};break;case 5:n[0]={target:0,wave:1,freq:7,rate:.1,amp:.3};break;case 6:n[0]={target:0,wave:4,freq:40,rate:3,amp:.12};break;case 7:t.rot=30}c()}function K(e){return h(`p`,{class:`hint`},e)}function q(...e){return h(`div`,{class:`keys`},...e)}function J(e,...t){return h(`div`,{class:`sec`},h(`div`,{class:`sec-t`},e),...t.filter(Boolean))}var mn={scan:()=>{let e=i.scan,t=e.osc.map((e,t)=>h(`div`,{class:`osc`},h(`div`,{class:`osc-t`},`OSC ${t+1}`),S(``,e,`target`,[[0,`H`],[1,`V`],[2,`SIZE`]]),S(``,e,`wave`,[0,1,2,3,4,5].map(e=>[e,h(`img`,{class:`wv`,src:cn(e),alt:``})]),void 0,`waves`),x(`FREQ`,e,`freq`,0,60,.5),x(`RATE`,e,`rate`,-4,4,.05),x(`AMP`,e,`amp`,0,1,.01)));return[J(`RASTER`,q(C(`ON`,e,`on`),b(`ZEN`,{cls:`small`,onPress:()=>(Object.assign(e,{on:!0,vSize:.004,rot:90}),c())}),b(`RESET`,{cls:`small`,onPress:()=>(fn(),c())}))),J(`SIZE · POSITION`,x(`H SIZE`,e,`hSize`,0,2,.01),x(`V SIZE`,e,`vSize`,0,2,.01),x(`H POS`,e,`hPos`,-1,1,.01),x(`V POS`,e,`vPos`,-1,1,.01),S(`ROTATE`,e,`rot`,[[0,`0`],[90,`90`],[180,`180`],[270,`270`]]),x(`FINE`,e,`rot`,-180,360,1),x(`LINES`,e,`lines`,0,525,1)),J(`OSCILLATORS`,...t,K(`H: 줄마다 옆으로 · V: 세로로 · SIZE: 화면이 숨쉬듯. 파형 ♪는 음악 크기를 따릅니다`))]},magnet:()=>{let e=i.magnet;return[J(`MAGNETS · 최대 2개`,q(b(`TOOL ▸ MAGNET`,{cls:`small`,lit:()=>i.tools.mode===`magnet`,onPress:()=>(i.tools.mode=i.tools.mode===`magnet`?`none`:`magnet`,c())}),b(`N⇄S`,{cls:`small`,onPress:()=>(e.list.forEach(e=>e.s=-e.s),c())}),b(`CLEAR`,{cls:`small`,onPress:()=>(e.list=[],c())})),K(`TOOL ▸ MAGNET을 켜고 모니터를 누르면 자석이 놓입니다. 세 번째를 놓으면 가장 오래된 것이 빠집니다. 자석의 ×를 누르거나 화면 밖으로 끌면 지워집니다.`),S(`KIND`,e,`type`,[[0,`RING · 소용돌이`],[1,`BAR · 밀기`]],()=>e.list.forEach(t=>t.type=e.type))),J(`FIELD`,x(`STRENGTH`,e,`strength`,0,4,.1,void 0,()=>e.list.forEach(t=>t.s=Math.sign(t.s||1)*e.strength)),x(`RADIUS`,e,`radius`,.1,1.5,.05,void 0,()=>e.list.forEach(t=>t.r=e.radius)),x(`COLOR SPLIT`,e,`purity`,0,1.5,.05)),J(`COIL`,x(`AUDIO`,e,`audio`,0,2,.1),q(C(`DRIFT`,e,`drift`)),K(`AUDIO: 소리 크기만큼 자석이 세졌다 약해집니다 (닉슨 TV의 코일)`))]},color:()=>{let e=i.color,t=h(`div`,{class:`keys`});return e.hues.forEach((n,r)=>{let i=h(`button`,{class:`chip big`,type:`button`});y(i,()=>{i.style.background=`hsl(${Math.round(e.hues[r]*360)} ${Math.round(e.sat*100)}% 50%)`,i.style.opacity=r<e.bands?`1`:`.25`}),i.addEventListener(`click`,()=>{e.hues[r]=(e.hues[r]+1/12)%1,c()}),t.append(i)}),[J(`COLORIZER`,q(C(`ON`,e,`on`),C(`SMOOTH`,e,`smooth`),C(`NEG`,e,`neg`))),J(`BANDS`,x(`COUNT`,e,`bands`,2,7,1),h(`div`,{class:`ctl`},h(`label`,null,`HUES`),t),K(`색 칸을 누르면 색이 한 칸씩 돕니다`)),J(`LEVELS`,x(`GAIN`,e,`gain`,0,3,.05),x(`CONTRAST`,e,`contrast`,0,4,.05),x(`SATURATE`,e,`sat`,0,1,.05),x(`CYCLE`,e,`cycle`,-1,1,.01)),J(`PRESETS`,q(...un.map((e,t)=>b(e.name,{cls:`small`,onPress:()=>dn(t)}))))]},fdbk:()=>{let e=i.fb;return[J(`LOOP`,q(C(`ON`,e,`on`)),S(`MODE`,e,`mode`,[[0,`TUNNEL`],[1,`LUMA`],[2,`ECHO`],[3,`TRAIL`]])),J(`CAMERA ON MONITOR`,x(`SIZE`,e,`size`,.5,1.15,.01),x(`ROTATE`,e,`rot`,-.5,.5,.01),x(`HUE`,e,`hue`,-.2,.2,.005),x(`DECAY`,e,`decay`,.5,1,.01),x(`MIX`,e,`mix`,0,1,.01))]},synth:()=>{let e=i.synth;return[J(`BEAM`,S(`MODE`,e,`mode`,[[0,`LISSAJOUS`],[1,`SOUND`],[2,`ROSE`]]),K(`SOUND: 지금 나는 클립 소리가 빔을 휩니다`)),J(`OSC`,x(`X FREQ`,e,`fx`,1,12,1),x(`Y FREQ`,e,`fy`,1,12,1),x(`DRIFT`,e,`drift`,-2,2,.05),x(`GAIN`,e,`gain`,.1,3,.05)),J(`PHOSPHOR`,x(`PERSIST`,e,`persist`,0,.98,.01),x(`WIDTH`,e,`width`,.5,6,.1),T(`COLOR`,e,`color`,[`#7dff7d`,`#60c8ff`,`#ffffff`,`#ffb040`,`#ff60ff`,`#ff4040`]))]},cg:()=>{let e=i.cg,t=()=>e.serial++;return[J(`PAGE`,S(``,e,`mode`,[[`off`,`OFF`],[`title`,`TITLE`],[`lower`,`LOWER`],[`doc`,`DOC`],[`crawl`,`CRAWL`],[`credits`,`CREDIT`]],t),S(`STYLE`,e,`style`,[[`chyron`,`CHYRON`],[`cycle`,`CYCLE`],[`neg`,`NEG`]]),q(b(`RE-TYPE`,{cls:`small`,onPress:()=>(t(),c())}),C(`TIMECODE`,e,`tc`),C(`BIG TC`,e,`tcBig`),C(`SATELLITE`,e,`sat`))),J(`TEXT`,E(`TITLE`,e,`title1`),E(`SUB`,e,`title2`),E(`LOWER 1`,e,`lower1`),E(`LOWER 2`,e,`lower2`),E(`DOC TOP`,e,`docTop`,!0),E(`DOC`,e,`doc`,!0),E(`CRAWL`,e,`crawl`,!0),E(`CREDITS`,e,`credits`,!0))]},tape:e=>{let t=i.vhs,n=(e,n)=>b(e,{cls:`small`,onPress:()=>(Object.assign(t,n),c())});return[J(`PRESET`,q(n(`CLEAN`,{bleed:0,scan:0,track:0,chroma:0,lines:0,interlace:0,noise:0,head:0,sat:1,warm:0,roll:0}),n(`U-MATIC`,{bleed:.8,scan:.35,track:.04,chroma:1,lines:480,interlace:.2,noise:.08,head:.3,sat:1,warm:.1}),n(`VHS`,{bleed:1.4,scan:.45,track:.15,chroma:1.8,lines:480,interlace:.3,noise:.15,head:.7,sat:1.05,warm:.3}),n(`WORN`,{bleed:2.4,scan:.55,track:.45,chroma:3,lines:300,interlace:.4,noise:.35,head:1,sat:.75,warm:.6}))),J(`SIGNAL`,x(`BLEED`,t,`bleed`,0,3,.1),x(`CHROMA`,t,`chroma`,0,6,.1),x(`TRACKING`,t,`track`,0,1,.01),x(`HEAD SW`,t,`head`,0,1.5,.05),x(`NOISE`,t,`noise`,0,1,.01),x(`ROLL`,t,`roll`,-2,2,.05),x(`SATURATE`,t,`sat`,0,2,.05)),J(`RASTER`,x(`LINES`,t,`lines`,0,720,20),x(`SCANLINE`,t,`scan`,0,1,.05),x(`INTERLACE`,t,`interlace`,0,1,.05),q(C(`4:3 BOX`,t,`box43`))),J(`ARCHIVE`,q(b(`TAPE SHELF ▸`,{cls:`small`,onPress:()=>e.openTapes()})))]},setup:e=>{let{renderer:t}=e,n=i.output,r=()=>{t.setOutput(n.aspect,n.quality),j()};return[J(`OUTPUT`,S(`ASPECT`,n,`aspect`,[[`9:16`,`9:16`],[`4:3`,`4:3`],[`1:1`,`1:1`],[`16:9`,`16:9`]],r),S(`SIZE`,n,`quality`,[[`sd`,`SD`],[`hd`,`HD`]],r),K(`휴대폰이 버거워하면 SD로`)),J(`SCREEN`,S(`SCANLINES`,i.ui,`crt`,[[0,`OFF`],[1,`ON`]],()=>document.documentElement.setAttribute(`data-crt`,String(i.ui.crt))),q(C(`KEY CLICKS`,i.audio,`sfx`),C(`VIBRATE`,i.audio,`haptics`)),K(`키 소리는 스피커로만 나고 녹화에는 들어가지 않습니다`)),J(`ARCHIVE`,q(b(`TAPE SHELF ▸`,{cls:`small`,onPress:()=>e.openTapes()}))),J(`ABOUT`,K(`PREPARED TV — 백남준의 "장치된 TV"(1963)에서 이름을 땄습니다. 모든 처리는 기기 안에서 합니다.`),K(`글꼴 Galmuri·Nanum Pen Script(OFL), 인물/사물 분리 MediaPipe(Apache-2.0). 테스트 클립의 그림과 소리는 앱이 직접 만듭니다.`))]}};function hn(e,t){let n=h(`div`,{class:`scr scr-${e}`}),r=()=>{n.textContent=``,n.append(...(mn[e]?.(t,r)||[]).filter(Boolean)),v()};return r(),n}var gn=[{name:`DANCER`,ko:`무대`,bpm:120,dur:8},{name:`METRONOME`,ko:`메트로놈`,bpm:90,dur:8}];function _n(e,t,n,r,i,a){e.beginPath(),e.moveTo(t+a,n),e.arcTo(t+r,n,t+r,n+i,a),e.arcTo(t+r,n+i,t,n+i,a),e.arcTo(t,n+i,t,n,a),e.arcTo(t,n,t+r,n,a),e.closePath()}function vn(e,t){let n=t*120/60,r=e.createLinearGradient(0,0,0,640);r.addColorStop(0,`#2a1a10`),r.addColorStop(1,`#5a3418`),e.fillStyle=r,e.fillRect(0,0,360,640);for(let n=0;n<14;n++)e.fillStyle=n%2?`rgba(0,0,0,0.18)`:`rgba(255,200,140,0.06)`,e.fillRect(n*360/14+Math.sin(t*.7+n)*3,0,360/28,640*.78);e.fillStyle=`#1d3b46`,e.fillRect(0,640*.78,360,140.8),e.fillStyle=`#2f5e6c`;for(let t=0;t<6;t++)e.fillRect(0,640*.78+t*22+4,360,3);let i=180+Math.sin(t/8*Math.PI*2)*360*.22,a=e.createRadialGradient(i,320,10,i,320,180);a.addColorStop(0,`rgba(255,240,200,0.35)`),a.addColorStop(1,`rgba(255,240,200,0)`),e.fillStyle=a,e.fillRect(0,0,360,640);let o=Math.abs(Math.sin(n*Math.PI))*10,s=640*.33-o,c=Math.sin(n*Math.PI)*.18;e.save(),e.translate(i,s),e.rotate(c*.3),e.strokeStyle=`#141414`,e.lineCap=`round`,e.lineWidth=26;let l=Math.sin(n*Math.PI)*26;e.beginPath(),e.moveTo(-14,150),e.lineTo(-22-l*.4,300+o),e.moveTo(14,150),e.lineTo(22-l*.4,300+o),e.stroke(),e.fillStyle=`#d0202c`,e.beginPath(),e.moveTo(-34,20),e.lineTo(34,20),e.lineTo(58+c*30,170),e.lineTo(-58+c*30,170),e.closePath(),e.fill();let u=(r,i)=>{let a=-.5+Math.sin(n*Math.PI+i)*.7,o=r*(40+Math.cos(a)*60),s=40+Math.sin(a)*60;e.strokeStyle=`#e8b896`,e.lineWidth=16,e.beginPath(),e.moveTo(r*30,32),e.lineTo(o,s),e.stroke(),e.fillStyle=`#202020`,_n(e,o-22,s-18,44,36,5),e.fill(),e.fillStyle=`hsl(${(t*90+r*60)%360} 80% 60%)`,_n(e,o-16,s-12,32,24,4),e.fill()};u(-1,0),u(1,Math.PI),e.fillStyle=`#e8b896`,e.beginPath(),e.arc(0,-10,30,0,Math.PI*2),e.fill(),e.fillStyle=`#1a0e08`,e.beginPath(),e.arc(0,-18,32,Math.PI*.95,Math.PI*2.05),e.fill(),e.fillRect(-32,-18,10,50),e.fillRect(22,-18,10,50),e.restore(),e.save(),e.translate(302.4,396.8),e.rotate(-.12),e.fillStyle=`#8a4a1c`,e.beginPath(),e.ellipse(0,40,34,46,0,0,Math.PI*2),e.ellipse(0,-20,26,32,0,0,Math.PI*2),e.fill(),e.fillStyle=`#2a160a`,e.fillRect(-3,-110,6,120),e.restore()}function yn(e,t){let n=t*90/60,r=Math.floor(n/4)%3;if(r===0)[`#c0c0c0`,`#c0c000`,`#00c0c0`,`#00c000`,`#c000c0`,`#c00000`,`#0000c0`].forEach((t,n)=>{e.fillStyle=t,e.fillRect(n*360/7,0,52.42857142857143,640)});else if(r===1){e.fillStyle=`#f2f0e8`,e.fillRect(0,0,360,640);for(let t=0;t<12;t++)e.fillStyle=`#111`,e.fillRect(0,t*640/12,360,2),[1,3,6,8,10].includes(t%12)&&e.fillRect(0,t*640/12+6,216,640/12-10)}else for(let n=0;n<24;n++)e.fillStyle=`hsl(${n*15} 90% 55%)`,e.beginPath(),e.moveTo(180,320),e.arc(180,320,640,n/24*Math.PI*2+t*.2,(n+1)/24*Math.PI*2+t*.2),e.fill();e.fillStyle=`#5a2c10`,e.beginPath(),e.moveTo(90,512),e.lineTo(270,512),e.lineTo(214,128),e.lineTo(146,128),e.closePath(),e.fill(),e.fillStyle=`#e8d8a8`,e.fillRect(162,158,36,294),e.fillStyle=`#3a1a08`;for(let t=0;t<14;t++)e.fillRect(162,168+t*24,t%2?10:18,2);let i=Math.sin(n*Math.PI)*.55;e.save(),e.translate(180,442),e.rotate(i),e.fillStyle=`#c8c8c8`,e.fillRect(-3,-324,6,324),e.fillStyle=`#d8a020`,e.beginPath(),e.moveTo(-22,-260),e.lineTo(22,-260),e.lineTo(30,-210),e.lineTo(-30,-210),e.closePath(),e.fill(),e.restore(),e.fillStyle=`#2a1206`,e.fillRect(80,512,200,18)}function bn(e,t,n){t===0?vn(e,n):yn(e,n);let r=Math.floor(n%1*30);e.font=`bold 13px monospace`,e.fillStyle=`#000`,e.fillRect(8,614,92,18),e.fillStyle=`#fff`,e.fillText(`T${t+1} 00:0${Math.floor(n)}:${String(r).padStart(2,`0`)}`,12,628)}var xn=e=>440*2**((e-69)/12);async function Sn(e){let t=32e3,n=gn[e],r=new OfflineAudioContext(2,Math.ceil(n.dur*t),t),i=r.createGain();i.gain.value=.7;let a=r.createConvolver(),o=r.createBuffer(2,t*1.6,t);for(let e=0;e<2;e++){let t=o.getChannelData(e);for(let e=0;e<t.length;e++)t[e]=(Math.random()*2-1)*(1-e/t.length)**3*.4}a.buffer=o;let s=r.createGain();s.gain.value=.25,i.connect(r.destination),i.connect(a).connect(s).connect(r.destination);let c=60/n.bpm,l=(e,t,n=.5,a=.3,o=`triangle`)=>{let s=r.createOscillator();s.type=o,s.frequency.value=xn(t);let c=r.createOscillator();c.frequency.value=xn(t)*2.001;let l=r.createGain();l.gain.setValueAtTime(1e-4,e),l.gain.exponentialRampToValueAtTime(a,e+.005),l.gain.exponentialRampToValueAtTime(1e-4,e+n);let u=r.createGain();u.gain.value=.25,s.connect(l),c.connect(u).connect(l),l.connect(i),s.start(e),c.start(e),s.stop(e+n+.05),c.stop(e+n+.05)},u=(e,n,a,o,s=`highpass`)=>{let c=r.createBuffer(1,Math.ceil(n*t),t),l=c.getChannelData(0);for(let e=0;e<l.length;e++)l[e]=(Math.random()*2-1)*(1-e/l.length)**2;let u=r.createBufferSource();u.buffer=c;let d=r.createBiquadFilter();d.type=s,d.frequency.value=a;let f=r.createGain();f.gain.value=o,u.connect(d).connect(f).connect(i),u.start(e)},d=(e,t=.7)=>{let n=r.createOscillator();n.frequency.setValueAtTime(120,e),n.frequency.exponentialRampToValueAtTime(45,e+.12);let a=r.createGain();a.gain.setValueAtTime(t,e),a.gain.exponentialRampToValueAtTime(.001,e+.3),n.connect(a).connect(i),n.start(e),n.stop(e+.32)};if(e===0){let e=[69,72,74,76,79,76,74,72,69,67,69,72,74,72,69,64],t=[[57,60,64],[53,57,60],[55,59,62],[52,55,59]];for(let n=0;n<16;n++){let r=n*c;if(n%2==0&&d(r,.55),u(r+c/2,.05,7e3,.12),n%4==2&&u(r,.16,1800,.18,`bandpass`),l(r,e[n],c*.9,.18),n%4==0)for(let e of t[n/4|0])l(r,e,c*3.8,.06,`sine`);l(r,[45,41,43,40][n/4|0]+(n%2?12:0),c*.45,.22,`sine`)}}else{for(let e=0;e<12;e++){let t=e*c;if(u(t,.03,e%4==0?2400:3400,.4,`bandpass`),e%4==0)for(let n of[[60,64,67,71],[57,60,64,67],[53,57,60,64]][e/4|0])l(t,n,c*3.6,.07,`sine`)}[48,55,52,53,50,48].forEach((e,t)=>{let n=t*c*2,a=r.createOscillator();a.type=`sawtooth`,a.frequency.value=xn(e);let o=r.createOscillator();o.frequency.value=5.2;let s=r.createGain();s.gain.value=xn(e)*.006,o.connect(s).connect(a.frequency);let l=r.createBiquadFilter();l.type=`lowpass`,l.frequency.value=900;let u=r.createGain();u.gain.setValueAtTime(1e-4,n),u.gain.exponentialRampToValueAtTime(.13,n+.25),u.gain.setValueAtTime(.13,n+c*1.7),u.gain.exponentialRampToValueAtTime(1e-4,n+c*2.1),a.connect(l).connect(u).connect(i),a.start(n),o.start(n),a.stop(n+c*2.2),o.stop(n+c*2.2)})}return r.startRendering()}var Cn=0,wn=()=>`${Date.now().toString(36)}${(Cn++).toString(36)}`;function Tn(e,t){return{id:wn(),name:t,kind:e,url:``,mime:``,duration:8,w:16,h:9,audio:null,audioGain:1,thumb:``,bpm:0,loopIn:0,loopOut:8,speed:1,gain:1}}function En(e){let t=gn[e],n=Tn(`test`,t.name);n.test=e,n.duration=n.loopOut=t.dur,n.w=360,n.h=640,n.bpm=t.bpm;let r=document.createElement(`canvas`);return r.width=360,r.height=640,bn(r.getContext(`2d`),e,1.2),n.thumb=jn(r,360,640),Sn(e).then(e=>{n.audio=e,n.audioGain=On(e)}),n}function Dn(e){let t=Tn(`camera`,e===`environment`?`CAM`:`SELF`);return t.facing=e,t.duration=t.loopOut=1e6,t}function On(e){let t=0,n=0;for(let r=0;r<e.numberOfChannels;r++){let i=e.getChannelData(r);for(let e=0;e<i.length;e+=4)t+=i[e]*i[e],n++}let r=Math.sqrt(t/Math.max(1,n));return r<1e-4?1:Math.min(6,.1/r)}var kn=null;async function An(e){if(e.size>25e7)return null;try{return kn??=new OfflineAudioContext(2,1,44100),await kn.decodeAudioData(await e.arrayBuffer())}catch{return null}}function jn(e,t,n){let r=document.createElement(`canvas`),i=120/Math.max(t,n);return r.width=Math.max(8,Math.round(t*i)),r.height=Math.max(8,Math.round(n*i)),r.getContext(`2d`).drawImage(e,0,0,r.width,r.height),r.toDataURL(`image/jpeg`,.7)}function Mn(e,t,n=2500){return new Promise(r=>{if(Math.abs(e.currentTime-t)<.002&&e.readyState>=2)return r();let i=()=>{e.removeEventListener(`seeked`,i),clearTimeout(a),r()},a=setTimeout(i,n);e.addEventListener(`seeked`,i),e.currentTime=t})}function Nn(e){let t=document.createElement(`video`);return t.src=e,t.muted=!0,t.playsInline=!0,t.setAttribute(`playsinline`,``),t.preload=`auto`,t.crossOrigin=`anonymous`,t}async function Pn(e,t){let n=e.type.startsWith(`image/`),r=Tn(n?`image`:`video`,t.replace(/\.[^.]+$/,``).slice(0,12).toUpperCase()||`CLIP`);if(r.blob=e,r.mime=e.type,r.url=URL.createObjectURL(e),n){let e=new Image;return e.src=r.url,await e.decode().catch(()=>{}),r.w=e.naturalWidth||16,r.h=e.naturalHeight||9,r.thumb=jn(e,r.w,r.h),r}let i=Nn(r.url);await new Promise(e=>{i.addEventListener(`loadedmetadata`,()=>e(),{once:!0}),i.addEventListener(`error`,()=>e(),{once:!0}),setTimeout(e,6e3)}),r.w=i.videoWidth||16,r.h=i.videoHeight||9,isFinite(i.duration)||(i.currentTime=1e7,await new Promise(e=>{i.addEventListener(`durationchange`,e,{once:!0}),setTimeout(e,3e3)})),r.duration=isFinite(i.duration)&&i.duration>0?i.duration:8,r.loopOut=r.duration,await Mn(i,Math.min(.2,r.duration/2)),i.readyState>=2&&(r.thumb=jn(i,r.w,r.h)),i.removeAttribute(`src`),i.load();let a=await An(e);return a&&(r.audio=a,r.audioGain=On(a)),r}function Fn(){return[`video/webm;codecs="vp8,opus"`,`video/webm`,`video/mp4;codecs="avc1.42E01E,mp4a.40.2"`,`video/mp4`].find(e=>typeof MediaRecorder<`u`&&MediaRecorder.isTypeSupported(e))||``}var In=class{rec=null;mic=null;chunks=[];started=0;get active(){return!!this.rec}async start(e,t){if(this.rec)return!0;e.want(t);for(let n=0;n<60&&!(e.ready&&e.facing===t);n++)await new Promise(e=>setTimeout(e,100));if(!e.stream)return!1;try{this.mic=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!0}})}catch{this.mic=null}let n=[...e.stream.getVideoTracks(),...this.mic?.getAudioTracks()??[]],r=Fn();return this.chunks=[],this.rec=new MediaRecorder(new MediaStream(n),{mimeType:r||void 0,videoBitsPerSecond:6e6}),this.rec.ondataavailable=e=>e.data.size&&this.chunks.push(e.data),this.rec.start(250),this.started=performance.now(),!0}stop(){let e=this.rec;return e?new Promise(t=>{e.onstop=()=>{this.mic?.getTracks().forEach(e=>e.stop()),this.mic=null,this.rec=null;let n=(e.mimeType||`video/webm`).split(`;`)[0],r=new Blob(this.chunks,{type:n});t(r.size?r:null)},e.stop()}):Promise.resolve(null)}},Ln=[[`orig`,`ORIGINAL`,`원본+자동 조율`],[`reson`,`RESONATE`,`공명(화음)`],[`pulse`,`PULSE`,`리듬`],[`pad`,`PAD`,`패드`],[`mute`,`MUTE`,`소리 없음`]],Y=[],X=[],Rn=0,zn=e=>`${e}${Date.now().toString(36)}${(Rn++).toString(36)}`;function Bn(e,t,n,r){let i=new Set(Y.map(e=>e.color));return{id:zn(`ing`),name:`${t.toUpperCase()} ${Y.length+1}`,color:Xe.find(e=>!i.has(e))??Xe[Y.length%Xe.length],src:e,kind:t,track:null,key:{lo:.55,hi:.7,color:`#00d040`,invert:!1},shape:{type:0,size:.32,ring:.25,spin:0},maskStamp:0,seed:{x:.5,y:.5,t:n},loopIn:n,loopOut:r,thumbs:[],look:{id:`none`,a:.5,b:.5},line:t===`shape`?2:1,lineSize:1,linePal:0,sound:{mode:`orig`,auto:!0,autoMode:!0,shift:0,gain:1},an:null,cell:-1,cellManual:!1}}var Vn=`prepared-tv-board`;function Hn(){return new Promise((e,t)=>{let n=indexedDB.open(Vn,1);n.onupgradeneeded=()=>{n.result.createObjectStore(`sources`,{keyPath:`id`}),n.result.createObjectStore(`ings`,{keyPath:`id`})},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}async function Un(e,t,n){let r=await Hn();return new Promise((i,a)=>{let o=n(r.transaction(e,t).objectStore(e));o.onsuccess=()=>i(o.result),o.onerror=()=>a(o.error)})}async function Wn(e){if(e.blob)try{await Un(`sources`,`readwrite`,t=>t.put({id:e.id,name:e.name,blob:e.blob}))}catch(e){console.warn(`source not saved`,e)}}async function Gn(e){let{src:t,track:n,...r}=e,i={...r,an:e.an?{...e.an}:null,srcId:t.id,track:n?{fps:n.fps,start:n.start,frames:n.frames,cx:n.cx,cy:n.cy,w:n.w,h:n.h,done:n.done}:null};try{await Un(`ings`,`readwrite`,e=>e.put(i))}catch(e){console.warn(`ingredient not saved`,e)}}async function Kn(e){try{await Un(`ings`,`readwrite`,t=>t.delete(e.id))}catch{}}function qn(){let e=En(0);e.id=`test0`;let t=En(1);t.id=`test1`,X.push(e,t)}async function Jn(e){let t=[],n=[];try{t=await Un(`sources`,`readonly`,e=>e.getAll()),n=await Un(`ings`,`readonly`,e=>e.getAll())}catch{return}for(let n of t)try{let t=await Pn(n.blob,n.name);t.id=n.id,t.name=n.name,X.push(t),e()}catch(e){console.warn(`source restore failed`,e)}for(let t of n.sort((e,t)=>e.id.localeCompare(t.id))){let n=X.find(e=>e.id===t.srcId);if(!n||Y.length>=16)continue;let{srcId:r,track:i,...a}=t;Y.push({...a,src:n,saved:!0,track:i?{...i,running:!1,cancel:!1}:null}),e()}}var Z=16e3;function Yn(e,t,n){let r=e.sampleRate,i=Math.max(0,Math.floor(t*r)),a=Math.min(e.length,Math.floor(n*r)),o=r/Z,s=Math.max(0,Math.floor((a-i)/o)),c=new Float32Array(s),l=Array.from({length:e.numberOfChannels},(t,n)=>e.getChannelData(n));for(let e=0;e<s;e++){let t=i+Math.floor(e*o),n=0;for(let e of l)for(let r=0;r<Math.max(1,Math.floor(o));r++)n+=e[Math.min(e.length-1,t+r)];c[e]=n/(l.length*Math.max(1,Math.floor(o)))}return c}function Xn(e){let t=e.length,n=new Float32Array(t);for(let n=1,r=0;n<t;n++){let i=t>>1;for(;r&i;i>>=1)r^=i;r^=i,n<r&&([e[n],e[r]]=[e[r],e[n]])}for(let r=2;r<=t;r<<=1){let i=-2*Math.PI/r;for(let a=0;a<t;a+=r)for(let t=0;t<r/2;t++){let o=Math.cos(i*t),s=Math.sin(i*t),c=e[a+t],l=n[a+t],u=e[a+t+r/2]*o-n[a+t+r/2]*s,d=e[a+t+r/2]*s+n[a+t+r/2]*o;e[a+t]=c+u,n[a+t]=l+d,e[a+t+r/2]=c-u,n[a+t+r/2]=l-d}}let r=new Float32Array(t/2);for(let i=0;i<t/2;i++)r[i]=Math.hypot(e[i],n[i]);return r}function Zn(e,t,n){let r=Math.floor(Z/1e3),i=Math.floor(Z/55),a=new Float32Array(291);for(let r=1;r<=i;r++){let i=0;for(let a=0;a<n;a++){let n=e[t+a]-e[t+a+r];i+=n*n}a[r]=i}let o=0,s=-1,c=1;for(let e=1;e<=i;e++){o+=a[e];let t=o>0?a[e]*e/o:1;a[e]=t}for(let e=r;e<i;e++){if(a[e]<.18){for(;e+1<i&&a[e+1]<a[e];)e++;s=e,c=a[e];break}a[e]<c&&(c=a[e],s=e)}if(s<0)return[0,1];let l=a[s-1]??a[s],u=a[s],d=a[s+1]??a[s],f=l-2*u+d;return[Z/(f?s+(l-d)/(2*f):s),c]}function Qn(e){return!e||e.silent?`mute`:e.conf>.45?`orig`:e.onsetRate>2.2?`pulse`:e.centroid>2500?`pad`:`reson`}function $n(e,t,n){let r={f0:0,midi:0,pc:-1,conf:0,centroid:1e3,onsetRate:0,onsets:[],rms:0,normGain:1,register:60,rhythm:0,chroma:Array(12).fill(0),silent:!0};if(!e)return r;let i=Yn(e,t,n);if(i.length<2048)return r;let a=0;for(let e=0;e<i.length;e++)a+=i[e]*i[e];let o=Math.sqrt(a/i.length);if(o<.002)return{...r,rms:o};let s=1024,c=[],l=new Float32Array(12),u=0,d=0,f=Math.floor(Z/55),p=new Float32Array(s/2),m=0;for(let e=0;e+s+f<i.length;e+=512){let t=0;for(let n=0;n<s;n++)t+=i[e+n]*i[e+n];if(t=Math.sqrt(t/s),t<o*.35)continue;u++;let[n,r]=Zn(i,e,s);if(n>0&&r<.25){let e=69+12*Math.log2(n/440);c.push(e),l[(Math.round(e)%12+12)%12]+=1-r,d+=r}if(m++%2==0){let t=new Float32Array(s);for(let n=0;n<s;n++)t[n]=i[e+n]*(.5-.5*Math.cos(2*Math.PI*n/1023));let n=Xn(t);for(let e=0;e<n.length;e++)p[e]+=n[e]}}let h=Array(12).fill(0),g=4096,_=[];for(let e=0;e<g/2;e++){let t=e*Z/g;_.push(t<100||t>2e3?-1:(Math.round(69+12*Math.log2(t/440))%12+12)%12)}for(let e=0;e+g<=i.length;e+=g/2){let t=new Float32Array(g);for(let n=0;n<g;n++)t[n]=i[e+n]*(.5-.5*Math.cos(2*Math.PI*n/4095));let n=Xn(t);for(let e=0;e<n.length;e++)_[e]>=0&&(h[_[e]]+=n[e]*n[e])}let v=h.reduce((e,t)=>e+t,0)||1;for(let e=0;e<12;e++)h[e]/=v;let y=0,b=0;for(let e=1;e<p.length;e++)y+=p[e]*(e*Z/s),b+=p[e];let x=b?y/b:1e3;c.sort((e,t)=>e-t);let S=u?c.length/u:0,C=c.length?1-d/c.length/.25:0,w=Math.max(0,Math.min(1,S*(.5+.5*C))),T=c.length?c[Math.floor(c.length/2)]:0,E=-1,D=0;l.forEach((e,t)=>e>D&&(D=e,E=t));let O=Math.round(Z*.01),k=[];for(let e=0;e+O<=i.length;e+=O){let t=0;for(let n=0;n<O;n++)t+=Math.abs(i[e+n]);k.push(t/O)}let A=k.map((e,t)=>Math.max(0,e-(k[t-1]??e))),j=A.reduce((e,t)=>e+t,0)/Math.max(1,A.length),ee=j+Math.sqrt(A.reduce((e,t)=>e+(t-j)**2,0)/Math.max(1,A.length))*1.2,M=[];for(let e=1;e<A.length-1;e++)A[e]>ee&&A[e]>=A[e-1]&&A[e]>=A[e+1]&&(!M.length||e*.01-M[M.length-1]>.08)&&M.push(e*.01);let N=i.length/Z,P=M.length/N,F=69+12*Math.log2(x/440),I=w>.4&&T?T*.7+F*.3:F;return{f0:T?440*2**((T-69)/12):0,midi:T,pc:w>.25?E:-1,conf:w,centroid:x,onsetRate:P,onsets:M,rms:o,normGain:Math.min(6,.1/o),register:I,rhythm:P,chroma:h,silent:!1}}var er=`modulepreload`,tr=function(e,t){return new URL(e,t).href},nr={},rr=function(e){return e.pathname.endsWith(`.css`)},ir=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},ar=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=tr(t,n);let r=s(t),i=rr(r);return ir(nr,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:er,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},or=()=>new URL(`./`,document.baseURI).href;async function sr(e){try{let t=await fetch(or()+e);if(t.ok&&!(t.headers.get(`content-type`)||``).includes(`html`))return await t.arrayBuffer()}catch{}let t=await(await fetch(or()+e+`.json`)).json(),n=atob(t),r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r.buffer}var cr=class{model=null;tf=null;c=document.createElement(`canvas`);x=this.c.getContext(`2d`,{willReadFrequently:!0});busy=!1;async load(){let e=await ar(()=>import(`./dist-C_52oek8.js`).then(e=>e.t),[],import.meta.url);await ar(()=>import(`./dist-CHi3dtUT.js`),__vite__mapDeps([0,1]),import.meta.url);let{loadGraphModel:t}=await ar(async()=>{let{loadGraphModel:e}=await import(`./dist-CtMjQmT9.js`);return{loadGraphModel:e}},__vite__mapDeps([2,1]),import.meta.url);await e.setBackend(`webgl`),await e.ready();let n=await(await fetch(or()+`models/tfjs-selfie/model.json`)).json(),r=await sr(`models/tfjs-selfie/group1-shard1of1.bin`);this.model=await t(e.io.fromMemory({modelTopology:n.modelTopology,weightSpecs:n.weightsManifest[0].weights,weightData:r})),this.tf=e,this.c.width=this.c.height=256}async run(e){let t=this.tf,n=this.model;if(!t||!n||this.busy)return null;this.busy=!0;try{this.x.drawImage(e,0,0,256,256);let r=t.tidy(()=>{let e=t.expandDims(t.div(t.cast(t.browser.fromPixels(this.c),`float32`),255),0),r=n.predict(e);return t.slice(r,[0,0,0,1],[1,256,256,1])}),i=await r.data();r.dispose();let a=new Uint8Array(i.length);for(let e=0;e<i.length;e++)a[e]=Math.max(0,Math.min(255,i[e]*255));return a}finally{this.busy=!1}}},lr=null,ur=()=>new URL(`./`,document.baseURI).href;async function dr(){return lr||(lr=ar(async()=>{let{FilesetResolver:e}=await import(`./vision_bundle-ciZpqDg5.js`);return{FilesetResolver:e}},[],import.meta.url).then(({FilesetResolver:e})=>e.forVisionTasks(ur()+`mediapipe`)),lr.catch(()=>lr=null)),lr}var fr=null;function pr(){return fr||=(async()=>{try{return await WebAssembly.compile(new Uint8Array([0,97,115,109,1,0,0,0])),!0}catch{return!1}})(),fr}async function mr(e){try{let t=await fetch(ur()+`models/${e}.tflite`);if(t.ok&&!(t.headers.get(`content-type`)||``).includes(`html`))return new Uint8Array(await t.arrayBuffer())}catch{}let t=await fetch(ur()+`models/${e}.json`);if(!t.ok)throw Error(`model ${e} not found (${t.status})`);let n=await t.json(),r=atob(n),i=new Uint8Array(r.length);for(let e=0;e<r.length;e++)i[e]=r.charCodeAt(e);return i}var hr=class{c=document.createElement(`canvas`);x=this.c.getContext(`2d`);draw(e,t){let[n,r]=e instanceof HTMLVideoElement?[e.videoWidth,e.videoHeight]:e instanceof HTMLImageElement?[e.naturalWidth,e.naturalHeight]:e instanceof HTMLCanvasElement?[e.width,e.height]:[t,t],i=t/Math.max(n,r,1),a=Math.max(16,Math.round(n*i)),o=Math.max(16,Math.round(r*i));return(this.c.width!==a||this.c.height!==o)&&(this.c.width=a,this.c.height=o),this.x.drawImage(e,0,0,a,o),this.c}};function gr(e,t,n){let r=0,i=0,a=0;for(let n=0;n<e.length;n++)e[n]>127&&(r+=n%t,i+=n/t|0,a++);return{data:e,w:t,h:n,cx:a?(r/a+.5)/t:.5,cy:a?(i/a+.5)/n:.5,area:a/e.length}}var _r=new class{tapStatus=`idle`;personStatus=`idle`;message=``;tap=null;person=null;tf=null;small=new hr;ts=0;tapP=null;personP=null;loadTap(){return this.tapP??=(async()=>{this.tapStatus=`loading`,this.message=`사물 분리 모델 불러오는 중… (6MB)`;try{if(!await pr())throw Error(`이 화면에서는 WebAssembly가 막혀 있어 TAP 대신 PERSON·KEY·SHAPE를 쓰세요`);let{InteractiveSegmenterLegacy:e}=await ar(async()=>{let{InteractiveSegmenterLegacy:e}=await import(`./vision_bundle-ciZpqDg5.js`);return{InteractiveSegmenterLegacy:e}},[],import.meta.url),t=await dr(),n=await mr(`magic_touch`),r=r=>e.createFromOptions(t,{baseOptions:{modelAssetBuffer:n,delegate:r},outputCategoryMask:!1,outputConfidenceMasks:!0});try{this.tap=await r(`GPU`)}catch{this.tap=await r(`CPU`)}this.tapStatus=`ready`,this.message=``}catch(e){this.tapStatus=`error`,this.message=String(e.message||e),console.warn(`tap model failed`,e)}})(),this.tapP}loadPerson(){return this.personP??=(async()=>{this.personStatus=`loading`,this.message=`사람 분리 모델 불러오는 중…`;try{if(!await pr())throw Error(`wasm blocked`);let{ImageSegmenter:e}=await ar(async()=>{let{ImageSegmenter:e}=await import(`./vision_bundle-ciZpqDg5.js`);return{ImageSegmenter:e}},[],import.meta.url),t=await dr(),n=await mr(`selfie_segmenter`),r=r=>e.createFromOptions(t,{baseOptions:{modelAssetBuffer:n,delegate:r},runningMode:`VIDEO`,outputCategoryMask:!1,outputConfidenceMasks:!0});try{this.person=await r(`GPU`)}catch{this.person=await r(`CPU`)}this.personStatus=`ready`,this.message=``}catch(e){console.warn(`person model via mediapipe failed, trying tfjs`,e);try{this.tf=new cr,await this.tf.load(),this.personStatus=`ready`,this.message=``}catch(e){this.personStatus=`error`,this.message=`사람 분리 모델을 불러오지 못했어요`,console.warn(e)}}})(),this.personP}tapAt(e,t,n){if(!this.tap)return null;try{let r=this.small.draw(e,256),i=this.tap.segment(r,{keypoint:{x:Math.min(.999,Math.max(0,t)),y:Math.min(.999,Math.max(0,n))}}),a=i.confidenceMasks?.[0],o=null;if(a){let e=a.getAsFloat32Array(),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e[n]*255;o=gr(t,a.width,a.height)}return i.close?.(),o}catch(e){return console.warn(`tap segment error`,e),null}}async personOf(e){if(this.tf){let t=await this.tf.run(e);return t?gr(Uint8Array.from(t),256,256):null}if(!this.person)return null;let t=null;this.ts=Math.max(this.ts+1,performance.now());try{this.person.segmentForVideo(this.small.draw(e,256),this.ts,e=>{let n=e.confidenceMasks?.[0];if(n){let e=n.getAsFloat32Array(),r=new Uint8Array(e.length);for(let t=0;t<e.length;t++)r[t]=e[t]*255;t=gr(r,n.width,n.height)}e.close()})}catch(e){console.warn(`person segment error`,e)}return t}},vr=20;function yr(e,t,n,r,i){let a=document.createElement(`canvas`),o=72/Math.max(t,n);a.width=Math.max(8,Math.round(t*o)),a.height=Math.max(8,Math.round(n*o));let s=a.getContext(`2d`);s.fillStyle=`#101010`,s.fillRect(0,0,a.width,a.height);let c=document.createElement(`canvas`);c.width=r.w,c.height=r.h;let l=c.getContext(`2d`),u=l.createImageData(r.w,r.h);for(let e=0;e<r.data.length;e++)u.data[e*4+3]=r.data[e]>110?255:0;l.putImageData(u,0,0);let d=document.createElement(`canvas`);d.width=a.width,d.height=a.height;let f=d.getContext(`2d`);return f.drawImage(c,0,0,a.width,a.height),f.globalCompositeOperation=`source-in`,f.drawImage(e,0,0,a.width,a.height),s.drawImage(d,0,0),s.strokeStyle=i,s.lineWidth=3,s.strokeRect(1.5,1.5,a.width-3,a.height-3),a.toDataURL(`image/png`)}async function br(e){let t=e.src;if(t.kind===`test`){let e=document.createElement(`canvas`);e.width=360,e.height=640;let n=e.getContext(`2d`);return{at:async r=>(bn(n,t.test??0,r),e),size:[360,640],done:()=>{}}}if(t.kind===`image`){let e=new Image;return e.src=t.url,await e.decode().catch(()=>{}),{at:async()=>e,size:[e.naturalWidth||16,e.naturalHeight||9],done:()=>{}}}if(t.kind===`video`){let e=Nn(t.url);return await new Promise(t=>{e.addEventListener(`loadeddata`,()=>t(),{once:!0}),setTimeout(t,6e3)}),{at:async t=>(await Mn(e,t),e.readyState>=2?e:null),size:[e.videoWidth||16,e.videoHeight||9],done:()=>{e.removeAttribute(`src`),e.load()}}}return null}var xr=[],Sr=!1;function Cr(e,t){if(e.track&&(e.track.cancel=!0),e.kind!==`tap`&&e.kind!==`person`)return;let n=e.src,r=e.loopIn,i=Math.min(e.loopOut,e.loopIn+vr,n.kind===`image`?e.loopIn+.01:1/0),a=n.kind===`image`?1:10,o=Math.max(1,Math.ceil((i-r)*a));e.track={fps:a,start:r,frames:Array(o).fill(null),cx:new Float32Array(o),cy:new Float32Array(o),w:0,h:0,done:0,running:!1,cancel:!1},e.thumbs=[],xr.push(e),wr(t)}async function wr(e){if(!Sr){Sr=!0;try{for(;xr.length;){let t=xr.shift();t.dead||!t.track||t.track.cancel||await Tr(t,e)}}finally{Sr=!1}}}async function Tr(e,t){let n=e.track;n.running=!0,e.kind===`tap`?await _r.loadTap():await _r.loadPerson();let r=await br(e);if(!r){n.running=!1;return}let i=n.frames.length,a=Math.max(0,Math.min(i-1,Math.round((e.seed.t-n.start)*n.fps))),o=[];for(let e=a;e<i;e++)o.push(e);for(let e=a-1;e>=0;e--)o.push(e);let s=e.seed.x,c=e.seed.y,l=performance.now();for(let u of o){if(n.cancel||e.dead)break;u===a-1&&(s=e.seed.x,c=e.seed.y);let o=await r.at(n.start+u/n.fps);if(!o)continue;let d=e.kind===`tap`?_r.tapAt(o,s,c):await _r.personOf(o);if(!d)continue;if(d.area>.002&&d.area<.85){let e=Math.min(d.w-1,Math.max(0,Math.round(d.cx*d.w))),t=Math.min(d.h-1,Math.max(0,Math.round(d.cy*d.h)));d.data[t*d.w+e]>127&&(s+=(d.cx-s)*.6,c+=(d.cy-c)*.6),n.frames[u]=d.data}else if(u!==a){let e=n.frames[u-1]??n.frames[u+1];e&&(n.frames[u]=e)}else n.frames[u]=d.data;n.w=d.w,n.h=d.h,n.cx[u]=d.cx,n.cy[u]=d.cy,n.done++;let f=Math.floor(u/i*4);u!==a&&u%Math.max(1,Math.floor(i/4))!==0||e.thumbs[f]||(e.thumbs[f]=yr(o,r.size[0],r.size[1],d,e.color)),e.maskStamp++,performance.now()-l>40&&(t(),await new Promise(e=>setTimeout(e,0)),l=performance.now())}n.done=i,n.running=!1,r.done(),t()}var Er=class{s;camera;el=null;speed=1;loopIn;loopOut;frozen=!1;frozenAt=0;t0=0;p0=0;parked=!0;stamp=0;ctx=null;seeking=!1;lastDrawn=-1;constructor(e,t=null){this.s=e,this.camera=t,this.loopIn=e.loopIn,this.loopOut=e.loopOut,this.speed=e.speed}get len(){return Math.max(.05,this.loopOut-this.loopIn)}pos(e){if(this.frozen)return this.frozenAt;let t=this.p0+(e-this.t0)*this.speed-this.loopIn;return this.loopIn+(t%this.len+this.len)%this.len}restart(e,t=this.loopIn){this.t0=e,this.p0=t,this.frozen=!1}setSpeed(e,t){let n=this.pos(t);this.speed=e,this.t0=t,this.p0=n}setLoop(e,t,n){let r=this.pos(n);this.loopIn=Math.max(0,Math.min(e,this.s.duration-.05)),this.loopOut=Math.max(this.loopIn+.05,Math.min(t,this.s.duration)),this.t0=n,this.p0=Math.min(Math.max(r,this.loopIn),this.loopOut-.01)}nudge(e,t){let n=this.pos(t);this.t0=t,this.p0=n+e,this.frozen&&(this.frozenAt=this.pos(t))}freeze(e,t){e!==this.frozen&&(e?(this.frozenAt=this.pos(t),this.frozen=!0):(this.frozen=!1,this.t0=t,this.p0=this.frozenAt))}sameAs(e,t){return e.s===this.s&&Math.abs(e.pos(t)-this.pos(t))<.04&&e.speed===this.speed&&e.frozen===this.frozen}copyTiming(e){this.t0=e.t0,this.p0=e.p0,this.speed=e.speed,this.loopIn=e.loopIn,this.loopOut=e.loopOut,this.frozen=e.frozen,this.frozenAt=e.frozenAt}size(){let e=this.s;return e.kind===`camera`&&this.camera?[this.camera.video.videoWidth||16,this.camera.video.videoHeight||9]:e.kind===`test`?[360,640]:[e.w||16,e.h||9]}get live(){return this.s.kind===`camera`||this.s.kind===`beam`||this.s.kind===`matte`}ensure(){let e=this.s;if(!this.el){if(e.kind===`video`){let t=Nn(e.url);t.loop=!0,t.addEventListener(`seeked`,()=>{this.seeking=!1,this.stamp++}),this.el=t}else if(e.kind===`image`){let t=new Image;t.src=e.url,this.el=t}else if(e.kind===`test`){let e=document.createElement(`canvas`);e.width=360,e.height=640,this.ctx=e.getContext(`2d`),this.el=e}}}element(){let e=this.s;if(e.kind===`camera`){let t=this.camera;return t&&t.facing===e.facing&&t.ready?t.video:null}this.ensure();let t=this.el;return t?t instanceof HTMLVideoElement?t.readyState>=2?t:null:t instanceof HTMLImageElement?t.complete&&t.naturalWidth?t:null:t:null}tick(e){let t=this.s;this.parked=!1,this.ensure();let n=this.pos(e);if(t.kind===`test`&&this.ctx){let e=Math.round(n*30)/30;e!==this.lastDrawn&&(bn(this.ctx,t.test??0,e),this.lastDrawn=e,this.stamp++);return}if(t.kind===`camera`){this.stamp++;return}let r=this.el;if(!(r instanceof HTMLVideoElement))return;if(this.frozen){r.paused||r.pause(),!this.seeking&&Math.abs(r.currentTime-n)>.03&&(this.seeking=!0,r.currentTime=n);return}if(r.paused&&r.play().catch(()=>{}),this.seeking)return;let i=r.currentTime-n;Math.abs(i)>this.len/2&&(i-=Math.sign(i)*this.len),Math.abs(i)>.25||r.currentTime>this.loopOut+.05||r.currentTime<this.loopIn-.3?(this.seeking=!0,r.currentTime=n,r.playbackRate=Math.min(4,Math.max(.25,this.speed))):r.playbackRate=Math.min(4,Math.max(.25,this.speed*(1-Math.max(-.08,Math.min(.08,i))))),this.stamp++}park(){this.parked||(this.parked=!0,this.el instanceof HTMLVideoElement&&!this.el.paused&&this.el.pause())}dispose(){this.park(),this.el instanceof HTMLVideoElement&&(this.el.removeAttribute(`src`),this.el.load()),this.el=null}},Dr=new je,Or=new Map,kr=new WeakMap;function Ar(e){let t=Or.get(e.id);return t&&t.s===e.src||(t?.dispose(),t=new Er(e.src,Dr),Or.set(e.id,t)),t}function jr(e){Or.get(e.id)?.dispose(),Or.delete(e.id)}function Mr(e,t,n){t.loopIn=e.loopIn,t.loopOut=Math.max(e.loopIn+.05,e.loopOut);let r=zt(e),i=Vt(e,n),a=Math.round(i/Math.max(.01,Bt(e)));(kr.get(t)!==a||Math.abs(t.speed-r)>.001)&&(kr.set(t,a),t.speed=r,t.restart(i,e.loopIn))}var Nr=new Map;function Pr(e){let t=Nr.get(e);return t||(t=new Er(e,Dr),t.restart(performance.now()/1e3),Nr.set(e,t)),t}function Fr(e){let t=null;for(let n of[...Or.values(),...Nr.values()])e.has(n)?n.s.kind===`camera`&&!t&&(t=n.s.facing??null):n.park();Dr.want(t)}var Ir=e=>h(`p`,{class:`hint`},e),Lr=(...e)=>h(`div`,{class:`keys`},...e.filter(Boolean)),Rr=(e,...t)=>h(`div`,{class:`sec`},h(`div`,{class:`sec-t`},e),...t.filter(Boolean));function zr(e){if(e.cell>=0)return Math.floor(e.cell/4);let t=e.an?.register??60;return t<50?0:t<64?1:t<78?2:3}function Br(e){let{renderer:t}=e,n=new In,a=X.find(e=>e.id===i.board.src)??X[0],s=null,l=`tap`,u=`look`,d=!0,f={a:0,b:0},p=()=>W.beat;function m(){let e=Math.min(a.duration,i.board.loopBars*4*p());f.a=0,f.b=a.kind===`image`?Math.min(a.duration,16*p()):e}m();let g=h(`div`,{class:`marks`}),_=h(`div`,{class:`osd top`}),w=h(`div`,{class:`osd hint`}),E=h(`div`,{class:`pgm-screen`},g,_,w),D=h(`div`,{class:`monitor`},E),O=h(`canvas`,{class:`timeline`}),j=h(`div`,{class:`tl-box`},O),ee=h(`div`,{class:`keys tl-keys`},...[1,2,4].map(e=>b(`${e} BAR`,{cls:`small`,lit:()=>Math.abs(f.b-f.a-e*4*p())<.02,onPress:()=>{i.board.loopBars=e;let t=Math.min(e*4*p(),a.duration);f.b=Math.min(a.duration,f.a+t),f.a=f.b-t,R()}})),b(`ALL`,{cls:`small`,onPress:()=>(f.a=0,f.b=Math.min(a.duration,20),R())})),M=null,N=0,P=0,F=0,I=e=>{let t=O.getBoundingClientRect();return(e-t.left)/t.width*a.duration},L=e=>{let t=p();return Math.max(0,Math.min(a.duration,Math.round(e/t)*t))};O.addEventListener(`pointerdown`,e=>{O.setPointerCapture(e.pointerId);let t=I(e.clientX),n=a.duration*.06;M=Math.abs(t-f.a)<n?`a`:Math.abs(t-f.b)<n?`b`:t>f.a&&t<f.b?`mid`:t<f.a?`a`:`b`,N=t,P=f.a,F=f.b}),O.addEventListener(`pointermove`,e=>{if(!M||!O.hasPointerCapture(e.pointerId))return;let t=I(e.clientX),n=p();if(M===`a`)f.a=Math.min(L(t),f.b-n);else if(M===`b`)f.b=Math.max(L(t),f.a+n);else{let e=L(t-N+P)-P,n=F-P;f.a=Math.max(0,Math.min(a.duration-n,P+e)),f.b=f.a+n}f.b=Math.min(f.b,f.a+20),te()}),O.addEventListener(`pointerup`,()=>{M&&R(),M=null});function te(){let e=O.getBoundingClientRect(),t=Math.max(10,Math.round(e.width)),n=Math.max(10,Math.round(e.height));(O.width!==t||O.height!==n)&&(O.width=t,O.height=n);let r=O.getContext(`2d`);r.fillStyle=`#101010`,r.fillRect(0,0,t,n);let i=Math.max(.01,a.duration);r.fillStyle=`#3a3a3a`;for(let e=0,a=0;e<i;e+=p(),a++)r.fillRect(Math.round(e/i*t),a%4?n-6:n-12,1,a%4?6:12);let o=a.audio;if(o){let e=o.getChannelData(0);r.fillStyle=`#5a7a5a`;for(let i=0;i<t;i++){let a=Math.floor(i/t*e.length),o=Math.floor((i+1)/t*e.length),s=0;for(let t=a;t<o;t+=8)s=Math.max(s,Math.abs(e[t]));let c=Math.max(1,s*(n-14));r.fillRect(i,(n-12)/2-c/2,1,c)}}let s=f.a/i*t,c=f.b/i*t;r.fillStyle=`rgba(255,224,64,0.22)`,r.fillRect(s,0,c-s,n),r.fillStyle=`#ffe040`,r.fillRect(s-2,0,4,n),r.fillRect(c-2,0,4,n);let l=re().pos(U())/i*t;r.fillStyle=`#ff3020`,r.fillRect(l,0,2,n),r.fillStyle=`#f0f0f0`,r.font=`10px monospace`,r.fillText(`${f.a.toFixed(2)}s — ${f.b.toFixed(2)}s  (${Math.round((f.b-f.a)/p())} beats)`,4,11)}let ne=0;function R(){let e=s;e&&(e.loopIn=f.a,e.loopOut=f.b,e.seed.t=Math.min(Math.max(e.seed.t,f.a),f.b-.01),clearTimeout(ne),ne=window.setTimeout(()=>{(e.kind===`tap`||e.kind===`person`)&&Cr(e,c),z(e),Wt.refresh(e),oe(e)},500)),c()}function re(){return Pr(a)}function ie(e){a=e,i.board.src=e.id,s=null,m(),t.clearBrush(),c()}function z(e){e.an=$n(e.src.audio,e.loopIn,e.loopOut),e.sound.autoMode!==!1&&(e.sound.mode=Qn(e.an))}function ae(e,n,r){if(a.kind===`camera`||a.kind===`beam`||a.kind===`matte`)return k(`녹화한 영상·사진·테스트 클립에서 따낼 수 있어요`);s&&!s.saved&&(s.dead=!0);let i=Bn(a,e,f.a,f.b),o=re();if(i.seed.t=Math.min(Math.max(o.pos(U()),f.a),f.b-.01),n!==void 0&&r!==void 0){let[e,a]=t.screenToSource(o,n,r);i.seed.x=e,i.seed.y=a}s=i,e!==`tap`&&e!==`person`&&a.thumb&&(i.thumbs=[a.thumb]),(e===`tap`||e===`person`)&&(Cr(i,c),e===`tap`&&_r.loadTap()),setTimeout(()=>{z(i),c()},30),c()}function oe(e){e.saved&&(Wn(e.src),Gn(e))}function se(){let e=s;if(!e)return k(`먼저 따낼 것을 누르세요`);if(e.saved)k(`저장했어요`,900);else{if(Y.length>=16)return k(`선반이 꽉 찼어요 (16개). 하나 지우고 다시`);e.saved=!0,Y.push(e),k(`선반에 올렸어요 — ${e.name}. 샘플러에서 연주할 수 있어요`,2200)}oe(e),c()}function ce(t){let n=Y.indexOf(t);n>=0&&Y.splice(n,1),t.dead=!0,Kn(t),e.forget(t),s===t&&(s=null),c()}function le(e){a=e.src,i.board.src=a.id,f.a=e.loopIn,f.b=e.loopOut,s=e,c()}let ue=h(`div`,{class:`strip`});function de(){ue.textContent=``;for(let e of X){let t=b(h(`span`,{class:`kf col`},e.thumb?h(`img`,{class:`sthumb`,src:e.thumb,alt:``}):h(`i`,{class:`sthumb`}),h(`small`,null,e.name)),{cls:`tiny src`,lit:()=>a===e,onPress:()=>ie(e)});ue.append(t)}let e=async e=>{let[t]=await A(e);if(t){k(`불러오는 중…`,1200);try{let e=await Pn(t,t.name);X.push(e),Wn(e),ie(e),de()}catch{k(`이 파일은 읽을 수 없어요`)}}};ue.append(b(h(`span`,{class:`kf col`},h(`b`,null,`+`),h(`small`,null,`VIDEO`)),{cls:`tiny src`,onPress:()=>void e(`video/*`)}),b(h(`span`,{class:`kf col`},h(`b`,null,`+`),h(`small`,null,`PHOTO`)),{cls:`tiny src`,onPress:()=>void e(`image/*`)}),pe(`environment`,`CAM`),pe(`user`,`SELF`))}let fe=!1;function pe(e,t){return b(h(`span`,{class:`kf col`},h(`b`,null,`●`),h(`small`,null,t)),{cls:`tiny src rec-src`,lit:()=>fe,hold:async t=>{if(t){if(k(`카메라 켜는 중… 누르고 있는 동안 녹화`,1500),!await n.start(Dr,e))return k(`카메라를 쓸 수 없어요`);fe=!0,v(),setTimeout(()=>fe&&void me(),15e3)}else me()}})}async function me(){if(!fe)return;fe=!1,v();let e=await n.stop();if(Dr.want(null),!e)return k(`녹화된 내용이 없어요`);let t=await Pn(e,`REC${X.length}`);X.push(t),Wn(t),ie(t),de(),k(t.audio?`녹화 완료 — 소리 있음 ♪`:`녹화 완료`,1500)}de();let he=h(`div`,{class:`keys cut-row`},...[`tap`,`person`,`luma`,`chroma`,`shape`].map(e=>b(h(`span`,{class:`kf col`},h(`b`,null,$e[e]),h(`small`,null,{tap:`누른 것`,person:`사람`,luma:`밝기`,chroma:`색`,shape:`모양`}[e])),{cls:`small cut`,lit:()=>l===e,onPress:()=>{l=e,e===`tap`?k(`모니터에서 따낼 것을 누르세요`,1400):ae(e),c()}}))),B=h(`div`,{class:`editor`}),ge=h(`div`,{class:`keys ed-tabs`},...[`look`,`line`,`sound`].map(e=>b({look:`LOOK 효과`,line:`LINE 윤곽`,sound:`SOUND 소리`}[e],{cls:`small`,lit:()=>u===e,onPress:()=>(u=e,_e())})));function _e(){B.textContent=``;let e=s;if(!e){B.append(Ir(`1) 위에서 클립을 고르고 2) 노란 구간(루프)을 정한 뒤 3) TAP을 켜고 모니터에서 따낼 것을 누르세요. PERSON·LUMA·CHROMA·SHAPE는 누르면 바로 따냅니다.`)),v();return}let t=e,n=()=>(Wt.refresh(e),oe(e),c());if(u===`look`){let t=h(`div`,{class:`tiles t5`});for(let r of Je)t.append(b(h(`span`,{class:`kf col`},h(`b`,null,r.name),h(`small`,null,r.ko)),{cls:`tile line`,lit:()=>e.look.id===r.id,onPress:()=>(e.look.id=r.id,n(),_e())}));let r=Ye(e.look.id);B.append(t,Lr(r.a?x(r.a,e.look,`a`,0,1,.05,void 0,n):null,r.b?x(r.b,e.look,`b`,0,1,.05,void 0,n):null)),e.kind===`luma`&&B.append(Rr(`LUMA KEY`,x(`LOW`,e.key,`lo`,0,1,.01),x(`HIGH`,e.key,`hi`,0,1,.01),Lr(C(`INVERT`,e.key,`invert`)))),e.kind===`chroma`&&B.append(Rr(`CHROMA KEY`,T(`KEY`,e.key,`color`,[`#00d040`,`#2040ff`,`#ff2020`,`#f0f0f0`,`#101010`]),Lr(C(`INVERT`,e.key,`invert`)))),e.kind===`shape`&&B.append(Rr(`SHAPE`,S(``,e.shape,`type`,Qe.map((e,t)=>[t,e])),x(`SIZE`,e.shape,`size`,.05,1,.01),x(`RING`,e.shape,`ring`,.05,.9,.01),x(`SPIN`,e.shape,`spin`,-2,2,.05)))}else if(u===`line`){let r=h(`div`,{class:`tiles t5`});Ze.forEach(([t,i],a)=>r.append(b(h(`span`,{class:`kf col`},h(`b`,null,t),h(`small`,null,i)),{cls:`tile line`,lit:()=>e.line===a,onPress:()=>(e.line=a,n())}))),B.append(r,x(`WIDTH`,t,`lineSize`,.4,3,.1,void 0,n),S(`COLORS`,t,`linePal`,at.map((e,t)=>[t,[`VIOLET`,`GREEN`,`RGB`,`B/W`][t]]),n),T(`COLOR`,t,`color`,[`#ff4070`,`#40e0ff`,`#ffe040`,`#90ff50`,`#ffffff`,`#c070ff`,`#ff8020`]))}else{let t=e.an,i=Qn(t),a=h(`div`,{class:`keys wrap`},...Ln.map(([t,r,a])=>b(h(`span`,{class:`kf col`},h(`b`,null,`${r}${t===i?` ★`:``}`),h(`small`,null,a)),{cls:`small mode`,lit:()=>e.sound.mode===t,onPress:()=>(e.sound.mode=t,e.sound.autoMode=!1,n())}))),o=t?t.silent?`소리 없음`:`음높이 ${t.pc>=0?r[t.pc]:`—`} (확실도 ${Math.round(t.conf*100)}%) · 밝기 ${Math.round(t.centroid)}Hz · 리듬 ${t.onsetRate.toFixed(1)}/s`:`분석 중…`,s=h(`b`);y(s,()=>s.textContent=`${It(e)>=0?`+`:``}${It(e)} 반음`),B.append(a,h(`div`,{class:`an`},o),Ir(`★ = 이 소리에 추천하는 방식. ORIGINAL: 원본을 키에 맞게 옮김 · RESONATE: 원본이 화음을 울림 · PULSE: 원본의 소리 시작점을 16분음표 리듬으로 · PAD: 원본을 잘게 쪼개 화음으로 깖`),Lr(C(`AUTO TUNE`,e.sound,`auto`,n),h(`span`,{class:`stat`},`이동 `,s)),x(`SHIFT`,e.sound,`shift`,-12,12,1,void 0,n),x(`GAIN`,e.sound,`gain`,0,2,.05,void 0,n),Lr(b(`PREVIEW`,{cls:`small`,lit:()=>d,onPress:()=>(d=!d,c())}),h(`span`,{class:`stat`},`음역 ${[`LOW`,`MID`,`HIGH`,`TOP`][zr(e)]} ${Ct[zr(e)].hp}–${Ct[zr(e)].lp}Hz`)))}v()}let ve=h(`div`,{class:`shelf-strip`});function ye(){ve.textContent=``,Y.forEach(e=>{let t=b(h(`span`,{class:`kf col`},h(`img`,{alt:``,src:e.thumbs.find(Boolean)??``}),h(`small`,null,e.name)),{cls:`tiny ing`,lit:()=>s===e,onPress:()=>(le(e),_e())});t.style.setProperty(`--c`,e.color),ve.append(t)});for(let e=Y.length;e<16;e++)ve.append(h(`i`,{class:`ing-empty`}))}let be=h(`div`,{class:`keys save-row`},b(`SAVE ▸ 선반`,{cls:`small go`,onPress:se}),b(`DELETE`,{cls:`small`,onPress:()=>s&&(s.saved?ce(s):(s.dead=!0,s=null,c()))}),h(`span`,{class:`stat shelf-n`}));y(be,()=>{let e=be.querySelector(`.shelf-n`);e&&(e.textContent=`${Y.length}/16`)});let xe=h(`div`,{class:`view board`},D,h(`div`,{class:`board-deck`},j,ee,ue,he,ge,B,h(`div`,{class:`shelf-box`},be,ve)));E.addEventListener(`pointerdown`,e=>{if(e.target.closest(`.key`))return;let t=E.getBoundingClientRect(),n=(e.clientX-t.left)/t.width,r=(e.clientY-t.top)/t.height;l=`tap`,ae(`tap`,n,r)});let Se=``,Ce=()=>{let e=[Y.map(e=>e.id+e.thumbs.length+e.name).join(`,`),X.length,s?.id,u,+!!s?.an,s?.look.id,s?.sound.mode,s?.kind].join(`|`);e!==Se&&(Se=e,ye(),_e(),de()),v()};return o(Ce),Ce(),{root:xe,scr:E,frame(e,t){let n=re();s?Mr(s,n,e):(n.loopIn=f.a,n.loopOut=Math.max(f.a+.05,f.b)),n.tick(e);let r=s&&!s.dead?s:null,i=r&&tt(r)>0,o=r&&i?[{key:-1,g:r,p:n,x:0,y:0,scale:1,rot:0,tilt:0,sel:!1}]:[],c=r?tt(r):1;return _.textContent=`${a.name}  ${n.pos(e).toFixed(1)}s\n${r?`${r.name} · ${$e[r.kind]}${c<1?` 추적 ${Math.round(c*100)}%`:``}`:`따낼 것을 고르세요`}`,w.textContent=_r.message||(s?``:`따낼 것을 손가락으로 누르세요`),te(),{fr:{bg:{kind:`player`,p:n},dim:r&&i?.65:0,layers:o,beat:t,pulse:0,bgFx:!1},used:new Set([n]),voice:r&&d?r:null}},refresh:Ce}}var Vr=e=>e%4,Hr=e=>Math.floor(e/4);function Ur(e,t){let n=[...e].sort((e,n)=>t(e)-t(n)),r=new Map;return n.forEach((t,n)=>r.set(t,e.length>1?n/(e.length-1):.5)),r}function Wr(e){let t=new Set;for(let n of e)n.cellManual&&n.cell>=0&&!t.has(n.cell)&&t.add(n.cell);let n=e.filter(e=>!(e.cellManual&&e.cell>=0)),r=Ur(e,e=>e.an?.rhythm??0),i=Ur(e,e=>e.an?.register??60);n.sort((e,t)=>Math.abs((i.get(t)??.5)-.5)-Math.abs((i.get(e)??.5)-.5));for(let e of n){let n=Math.min(3,Math.round((r.get(e)??.5)*3)),a=Math.min(3,Math.round((i.get(e)??.5)*3)),o=-1,s=99;for(let e=0;e<16;e++){if(t.has(e))continue;let r=Math.abs(Vr(e)-n)+Math.abs(Hr(e)-a)*1.01;r<s&&(s=r,o=e)}e.cell=o,e.cellManual=!1,o>=0&&t.add(o)}}function Gr(e,t,n){let r=e.find(e=>e!==t&&e.cell===n);r&&(r.cell=t.cell,r.cellManual=!0),t.cell=n,t.cellManual=!0}var Kr=[[`STILL`,`·`,`정지`],[`H`,`↔`,`좌우`],[`V`,`↕`,`위아래`],[`DIAG`,`⤢`,`대각선`],[`CIRCLE`,`○`,`원`],[`EIGHT`,`∞`,`8자`],[`ZIGZAG`,`⋀⋁`,`지그재그`],[`BOUNCE`,`◇`,`튕기기`],[`SPIRAL`,`@`,`나선`],[`ORBIT`,`⊙`,`공전`]],qr=[[.25,`1/4`],[.5,`1/2`],[1,`1`],[2,`2`],[4,`4`]],Jr=e=>1-4*Math.abs((e%1+1)%1-.5);function Yr(e,t,n,r){let i=t/(e.bars*4)+e.phase,a=i*Math.PI*2,o=e.ax,s=e.ay,c=0,l=0;switch(e.shape){case 1:c=Math.sin(a)*o;break;case 2:l=Math.sin(a)*s;break;case 3:c=Math.sin(a)*o,l=Math.sin(a)*s;break;case 4:c=Math.cos(a)*o,l=Math.sin(a)*s;break;case 5:c=Math.sin(a)*o,l=Math.sin(2*a)*s*.6;break;case 6:c=Jr(i)*o,l=Jr(i*4)*s*.35;break;case 7:{let e=Math.max(.05,Math.abs(o)),t=Math.max(.05,Math.abs(s));c=Jr(i*1.31)*e,l=Jr(i*1.73)*t;break}case 8:{let e=.5+.5*Jr(i*.5);c=Math.cos(a*3)*o*e,l=Math.sin(a*3)*s*e;break}case 9:{let e=Math.cos(a),t=Math.sin(a);c=n*e-r*t-n,l=n*t+r*e-r;break}}let u=t-Math.floor(t);return{dx:c,dy:l,rot:e.spin?i*360:0,scale:e.pulse?1+.18*Math.exp(-u*6):1}}var Q=[],Xr=1;function Zr(){let e=i.stage;return{shape:e.shape,bars:e.speed,ax:e.ax,ay:e.ay,spin:e.spin,pulse:e.pulse,phase:Math.random()}}function Qr(e){Q.length>=8&&Q.shift();let t=Q.length,n=t*2.4,r=t?.25+t%3*.08:0,i={id:Xr++,g:e,x:Math.cos(n)*r,y:Math.sin(n)*r*.8,scale:.75,rot:0,m:Zr()};return Q.push(i),i}function $r(e){let t=Q.indexOf(e);t>=0&&Q.splice(t,1)}function ei(e){for(let t=Q.length-1;t>=0;t--)Q[t].g===e&&Q.splice(t,1)}function ti(e,t){return Q.map(n=>{let r=Yr(n.m,e,n.x,n.y);return{key:n.id,g:n.g,p:Ar(n.g),x:n.x+r.dx,y:n.y+r.dy,scale:n.scale*r.scale,rot:n.rot+r.rot,tilt:0,sel:n.id===t}})}var ni=Dn(`environment`),ri=Dn(`user`),ii=[[10,`SUNBURST`],[9,`ZIGZAG`],[11,`BAR STRETCH`],[12,`BAR BEND`],[13,`ORNAMENT`],[7,`WEB`],[8,`SPARKLE`],[1,`BARS`],[0,`RASTER`],[6,`BLACK`]];function ai(e){let{renderer:t}=e,n=-1,r=null;function a(){let[e,t]=i.stage.bg.split(`:`);if(e===`gen`)return{bg:{kind:`gen`,id:+t},p:null};if(e===`matte`)return{bg:{kind:`matte`,pattern:+t},p:null};if(e===`beam`)return{bg:{kind:`beam`},p:null};let n;if(e===`cam`?n=t===`user`?ri:ni:e===`src`&&(n=X.find(e=>e.id===t)),!n)return{bg:{kind:`gen`,id:0},p:null};let r=Pr(n);return r.loopIn=0,r.loopOut=n.duration,{bg:{kind:`player`,p:r},p:r}}let s=h(`div`,{class:`marks`}),l=h(`div`,{class:`osd top`}),u=h(`div`,{class:`osd hint`}),d=h(`i`,{class:`beat-lamp`}),f=h(`div`,{class:`pgm-screen`},s,l,u,d),p=h(`div`,{class:`monitor`},f),m=h(`div`,{class:`strip bg-strip`});function g(){m.textContent=``;let e=(e,t,n,r)=>m.append(b(h(`span`,{class:`kf col`},r?h(`img`,{class:`sthumb`,src:r,alt:``}):h(`i`,{class:`sthumb bgk-${e.replace(`:`,`-`)}`}),h(`small`,null,t),h(`em`,null,n)),{cls:`tiny src`,lit:()=>i.stage.bg===e,onPress:()=>(i.stage.bg=e,c())}));ke.forEach(([t,n],r)=>e(`gen:${r}`,t,n)),ii.forEach(([t,n])=>e(`matte:${t}`,n,`매트`)),e(`beam`,`BEAM`,`X-Y`);for(let t of X)e(`src:${t.id}`,t.name,`내 영상`,t.thumb);e(`cam:environment`,`CAM`,`라이브`),e(`cam:user`,`SELF`,`라이브`)}let _=h(`div`,{class:`pads graph`}),x=[],S=e=>(3-Math.floor(e/4))*4+e%4;for(let e=0;e<16;e++){let t=h(`button`,{class:`pad`,type:`button`});x.push(t),_.append(t);let a=0,o=0;t.addEventListener(`pointerdown`,n=>{n.preventDefault(),a=U(),t.classList.add(`down`),i.audio.haptics&&navigator.vibrate?.(7),clearTimeout(o),o=window.setTimeout(()=>{let t=Y.find(t=>t.cell===S(e));t&&(r=t,k(`${t.name} — 옮길 칸을 누르세요`,1600),z(!0))},550)});let s=i=>{if(clearTimeout(o),t.classList.remove(`down`),!i||U()-a>.5)return;let s=S(e);if(r){Gr(Y,r,s),r=null,z(!0);return}let l=Y.find(e=>e.cell===s);if(!l)return k(`빈 칸 — 도마에서 재료를 만들어 선반에 올리세요`,1600);let u=Qr(l);u&&(n=u.id,t.classList.add(`hit`),setTimeout(()=>t.classList.remove(`hit`),90)),c()};t.addEventListener(`pointerup`,()=>s(!0)),t.addEventListener(`pointercancel`,()=>s(!1)),t.addEventListener(`contextmenu`,e=>e.preventDefault())}let C=h(`div`,{class:`axes`},h(`span`,{class:`ax-y`},`높음 ↑ 음역`),h(`span`,{class:`ax-x`},`리듬 빠르기 →`)),w=0;function T(){for(let e=0;e<16;e++){let t=x[e],n=S(e),i=Y.find(e=>e.cell===n);if(t.className=`pad`+(i?` has-art obj`:` empty`)+(r===i&&i?` moving`:``),t.textContent=``,t.style.backgroundImage=``,t.style.removeProperty(`--c`),!i){t.append(h(`i`,{class:`pi`},`${`LMHT`[Hr(n)]}${n%4+1}`));continue}let a=i.thumbs.filter(Boolean);a.length&&(t.style.backgroundImage=`url(${a[w%a.length]})`),t.style.setProperty(`--c`,i.color);let o=Q.filter(e=>e.g===i).length,s=Ln.find(([e])=>e===i.sound.mode)?.[1]??``;t.append(h(`i`,{class:`pi`},s.slice(0,4)),h(`span`,{class:`pn`},i.name),h(`small`,{class:`ps`},o?`×${o} ON`:`+`))}}let E=h(`div`,{class:`joy`},h(`i`,{class:`joy-knob`})),D=E.firstElementChild,O=()=>i.stage.all?Q:Q.filter(e=>e.id===n);function A(e){O().forEach(t=>e(t.m));let t={shape:i.stage.shape,bars:i.stage.speed,ax:i.stage.ax,ay:i.stage.ay,spin:i.stage.spin,pulse:i.stage.pulse,phase:0};e(t),Object.assign(i.stage,{shape:t.shape,speed:t.bars,ax:t.ax,ay:t.ay,spin:t.spin,pulse:t.pulse}),c()}let j=()=>O()[0]?.m??{shape:i.stage.shape,bars:i.stage.speed,ax:i.stage.ax,ay:i.stage.ay,spin:i.stage.spin,pulse:i.stage.pulse,phase:0};E.addEventListener(`pointerdown`,e=>ee(e,!0)),E.addEventListener(`pointermove`,e=>ee(e,!1));function ee(e,t){if(t)E.setPointerCapture(e.pointerId);else if(!E.hasPointerCapture(e.pointerId))return;let n=E.getBoundingClientRect(),r=Math.max(-1,Math.min(1,(e.clientX-n.left)/n.width*2-1)),i=Math.max(-1,Math.min(1,1-(e.clientY-n.top)/n.height*2));A(e=>{e.ax=r*.8,e.ay=i*.8})}y(E,()=>{let e=j();D.style.left=`${(e.ax/.8/2+.5)*100}%`,D.style.top=`${(.5-e.ay/.8/2)*100}%`});let M=h(`div`,{class:`motion`},E,h(`div`,{class:`mo-shapes`},...Kr.map(([e,t,n],r)=>b(h(`span`,{class:`kf col`},h(`b`,null,t),h(`small`,null,n)),{cls:`tiny mo`,lit:()=>j().shape===r,onPress:()=>A(e=>e.shape=r)}))),h(`div`,{class:`mo-speed`},h(`small`,null,`한 바퀴 (마디)`),h(`div`,{class:`keys`},...qr.map(([e,t])=>b(t,{cls:`tiny`,lit:()=>j().bars===e,onPress:()=>A(t=>t.bars=e)})))),h(`div`,{class:`keys mo-tog`},b(`SPIN`,{cls:`tiny`,lit:()=>j().spin,onPress:()=>A(e=>e.spin=!j().spin)}),b(`PULSE`,{cls:`tiny`,lit:()=>j().pulse,onPress:()=>A(e=>e.pulse=!j().pulse)}),b(`ALL`,{cls:`tiny`,lit:()=>i.stage.all,onPress:()=>(i.stage.all=!i.stage.all,c())}),b(`DEL`,{cls:`tiny del`,onPress:()=>{let e=Q.find(e=>e.id===n);e?($r(e),n=-1,c()):k(`지울 것을 화면에서 먼저 누르세요`,1200)}}))),N=h(`div`,{class:`view stage`},p,m,h(`div`,{class:`keys stage-ctl`},b(`BG FX`,{cls:`small`,lit:()=>i.era.on[3]||i.era.on[4]||i.fb.on||i.color.on||i.scan.on||i.moor.reshoot.on||i.moor.breakup.on,onPress:()=>e.openSheet(`bgfx`)}),b(`TOOLS`,{cls:`small`,lit:()=>i.tools.mode!==`none`,onPress:()=>e.openSheet(`tools`)}),b(`CLEAR`,{cls:`small`,onPress:()=>(Q.length=0,n=-1,c())}),b(`RE-SORT`,{cls:`small`,onPress:()=>(Y.forEach(e=>e.cellManual=!1),z(!0),k(`리듬·음역 순서로 다시 놓았어요`,1200))})),h(`div`,{class:`stage-deck`},h(`div`,{class:`padcol`},C,_),M)),P=new Map,F=null,I=e=>{let t=f.getBoundingClientRect();return[(e.clientX-t.left)/t.width,(e.clientY-t.top)/t.height]},L=()=>({smear:1,tear:2,freeze:3})[i.tools.mode]??0;f.addEventListener(`pointerdown`,e=>{if(e.target.closest(`.key, .mag, .obj-chip, .inst-x`))return;e.preventDefault();try{f.setPointerCapture(e.pointerId)}catch{}let[r,a]=I(e);if(P.set(e.pointerId,{x:r,y:a,sx:r,sy:a,t:U()}),P.size===2){let e=Q.find(e=>e.id===n);if(e){let[t,n]=[...P.values()];F={kind:`pinch`,it:e,d0:Math.hypot(t.x-n.x,t.y-n.y),a0:Math.atan2(n.y-t.y,n.x-t.x),s0:e.scale,r0:e.rot}}return}if(i.tools.mode===`magnet`){let e=i.magnet.list;e.length>=2&&(e.sort((e,t)=>e.born-t.born),e.shift()),e.push({x:r*2-1,y:1-a*2,s:i.magnet.strength*(e.length%2?-1:1),r:i.magnet.radius,type:i.magnet.type,born:U()}),F={kind:`magnet`,i:e.length-1},c();return}if(L()){Object.assign(t.brush,{x:r,y:1-a,vx:0,vy:0,active:!0,tool:L(),startHold:L()===3}),F={kind:`brush`};return}let o=t.layerAt(r,a),s=o?Q.find(e=>e.id===o.key):void 0;s?(n=s.id,F={kind:`move`,it:s,ox:s.x,oy:s.y}):n=-1,c()}),f.addEventListener(`pointermove`,e=>{let n=P.get(e.pointerId);if(!n)return;let[r,a]=I(e),o=n.x,s=n.y;n.x=r,n.y=a;let c=F;if(c){if(c.kind===`pinch`&&P.size>=2){let[e,t]=[...P.values()];c.it.scale=Math.max(.15,Math.min(3,c.s0*Math.hypot(e.x-t.x,e.y-t.y)/Math.max(.01,c.d0))),c.it.rot=c.r0+(Math.atan2(t.y-e.y,t.x-e.x)-c.a0)*180/Math.PI}else if(c.kind===`move`)c.it.x=c.ox+(r-n.sx)*2,c.it.y=c.oy-(a-n.sy)*2;else if(c.kind===`magnet`){let e=i.magnet.list[c.i];e&&(e.x=r*2-1,e.y=1-a*2)}else if(c.kind===`brush`){let e=t.brush;e.x=r,e.y=1-a,e.vx+=r-o,e.vy+=-(a-s)}}});let te=e=>{let r=P.get(e.pointerId);if(P.delete(e.pointerId),!r)return;let[a,o]=I(e),s=F;P.size===0&&(F=null),s?.kind===`brush`&&(t.brush.active=!1),s?.kind===`magnet`&&(a<-.02||a>1.02||o<-.02||o>1.02)&&(i.magnet.list.splice(s.i,1),k(`자석을 지웠어요`,800)),s?.kind===`move`&&(a<-.05||a>1.05||o<-.05||o>1.05)&&($r(s.it),n=-1,k(`지웠어요`,800)),c()};f.addEventListener(`pointerup`,te),f.addEventListener(`pointercancel`,te);let ne=h(`button`,{class:`inst-x`,type:`button`},`×`);ne.addEventListener(`pointerdown`,e=>{e.stopPropagation();let t=Q.find(e=>e.id===n);t&&$r(t),n=-1,c()}),s.append(ne);let R=[];function re(){let e=t.centres.get(n);ne.hidden=!e,e&&(ne.style.left=`${e[0]*100}%`,ne.style.top=`${(1-e[1])*100}%`);let r=i.magnet.list;for(;R.length<r.length;){let e=R.length,t=h(`button`,{class:`mag-x`,type:`button`},`×`),n=h(`div`,{class:`mag`},h(`b`),t);t.addEventListener(`pointerdown`,t=>{t.stopPropagation(),i.magnet.list.splice(e,1),c()}),n.addEventListener(`pointerdown`,t=>{if(t.target.closest(`.mag-x`))return;t.stopPropagation();try{f.setPointerCapture(t.pointerId)}catch{}let[n,r]=I(t);P.set(t.pointerId,{x:n,y:r,sx:n,sy:r,t:U()}),F={kind:`magnet`,i:e}}),s.append(n),R.push(n)}for(;R.length>r.length;)R.pop().remove();r.forEach((e,t)=>{R[t].style.left=`${(e.x+1)/2*100}%`,R[t].style.top=`${(1-e.y)/2*100}%`,R[t].firstElementChild.textContent=e.s<0?`S`:`N`})}let ie=``;function z(e=!1){let t=[Y.map(e=>`${e.id}${e.cell}${e.thumbs.length}${e.sound.mode}${+!!e.an}`).join(`,`),Q.map(e=>e.g.id).join(`,`),X.length].join(`|`);(e||t!==ie)&&((t.split(`|`)[0]!==ie.split(`|`)[0]||e)&&Wr(Y.filter(e=>e.saved)),ie=t,T(),g()),N.dataset.tool=i.tools.mode,v()}return o(()=>z()),z(!0),{root:N,scr:f,get selected(){return n},frame(e,t,o){let{bg:s,p:c}=a(),f=new Set;c&&(c.tick(e),f.add(c));let p=new Set(Q.map(e=>e.g));for(let t of p){let n=Ar(t);Mr(t,n,e),n.tick(e),f.add(n)}Math.floor(e*4)!==w&&(w=Math.floor(e*4),T());let m=ti(t,n),h=t;d.classList.toggle(`on`,h-Math.floor(h)<.15),d.classList.toggle(`down`,Math.floor(h)%4==0),l.textContent=`${Q.length} ON · ${p.size} SOUNDS\n${Math.floor(t/4)+1}.${Math.floor(t)%4+1}`;let g=i.tools.mode;return u.textContent=r?`${r.name} → 옮길 칸을 누르세요`:g===`magnet`?`MAGNET · 눌러서 놓기 (${i.magnet.list.length}/2)`:g===`none`?Q.length?``:`키패드를 누르면 재료가 무대에 올라옵니다`:`${g.toUpperCase()} · 문지르세요`,re(),{fr:{bg:s,dim:0,layers:m,beat:t,pulse:o,bgFx:!0},used:f,voices:[...p].map(e=>({g:e,row:Math.max(0,Hr(e.cell))}))}},refresh:z}}f(),i.ui.sheet=``,document.documentElement.setAttribute(`data-crt`,String(i.ui.crt)),j();var oi=document.getElementById(`app`),si=h(`div`,{class:`screen`});oi.append(si),Dr.onError=()=>k(`카메라를 쓸 수 없어요. 영상 파일이나 테스트 클립으로 해 보세요.`,4e3),qn();var $;try{$=new ut}catch(e){throw si.append(h(`div`,{class:`fatal`},h(`b`,null,`NO VIDEO HARDWARE`),h(`p`,null,`이 브라우저는 WebGL2를 지원하지 않아요. 최신 Chrome에서 열어 주세요.`),h(`pre`,null,String(e.message)))),e}var ci=new pt,li=e=>{i.ui.sheet=i.ui.sheet===e?``:e,c()},ui=Br({renderer:$,forget:e=>{ei(e),jr(e)}}),di=ai({renderer:$,openSheet:li});async function fi(){if(ci.recording){let e=await ci.stop(()=>$.grab());if(!e)return k(`녹화된 내용이 없어요`);await _t.put(e),k(`TAPE SAVED — ${e.label}`)}else{m.ensure();try{ci.start($.canvas,i.output.quality===`hd`?8e6:5e6)}catch(e){k(`이 기기에서는 녹화를 지원하지 않아요`),console.warn(e)}}v()}var pi=h(`b`),mi=h(`div`,{class:`bpm`},h(`small`,null,`BPM`),pi);{let e=0,t=0,n=!1;mi.addEventListener(`pointerdown`,r=>{mi.setPointerCapture(r.pointerId),e=r.clientY,t=i.music.bpm,n=!1}),mi.addEventListener(`pointermove`,r=>{if(!mi.hasPointerCapture(r.pointerId))return;let i=Math.round((e-r.clientY)/4);i&&(n=!0),n&&rt(t+i),v()}),mi.addEventListener(`pointerup`,()=>{if(!n){let e=nt();e&&k(`TAP ${e} BPM`,900)}c()}),y(mi,()=>pi.textContent=String(i.music.bpm))}var hi=h(`b`),gi=h(`small`);y(hi,()=>hi.textContent=`${r[i.music.root]} ${n[i.music.scale].name}`);var _i=(e,t,n)=>b(h(`span`,{class:`kf col`},h(`b`,null,t),h(`small`,null,n)),{cls:`tab`,lit:()=>i.ui.tab===e,onPress:()=>Oi(e)}),vi=h(`div`,{class:`topbar`},_i(`board`,`BOARD`,`도마`),_i(`stage`,`STAGE`,`샘플러`),_i(`tapes`,`TAPES`,`테이프`),mi,b(h(`span`,{class:`kf col`},hi,gi),{cls:`small keyk`,onPress:()=>li(`music`)}),b(h(`span`,{class:`kf`},h(`i`,{class:`recdot`}),`REC`),{cls:`rec`,lit:()=>ci.recording,onPress:()=>void fi(),silent:!0}),b(`⚙`,{cls:`small`,onPress:()=>li(`setup`)})),yi=h(`div`,{class:`sheet-host`});yi.hidden=!0;var bi=(e,...t)=>h(`div`,{class:`sec`},h(`div`,{class:`sec-t`},e),...t.filter(Boolean)),xi=e=>h(`p`,{class:`hint`},e),Si={renderer:$,openTapes:()=>Oi(`tapes`)};function Ci(e){let t=i.music;if(e===`music`)return[bi(`KEY`,S(`ROOT`,t,`root`,r.map((e,t)=>[t,e]),void 0,`wrap`),S(`SCALE`,t,`scale`,n.map((e,t)=>[t,`${e.name} ${e.ko}`]),void 0,`wrap`)),bi(`CHORDS · 4마디`,S(``,t,`prog`,St.map((e,t)=>[t,`${e.name} ${e.ko}`]),void 0,`wrap`),xi(`모든 재료의 소리가 이 키와 화음 진행을 따릅니다. ORIGINAL은 키 안의 음으로 옮겨지고, RESONATE·PULSE·PAD는 마디마다 화음을 따라갑니다.`)),bi(`TEMPO`,x(`BPM`,t,`bpm`,40,200,1,void 0,()=>rt(i.music.bpm)),xi(`루프는 1·2·4·8·16박 중 가장 가까운 길이로 맞춰 다시 시작합니다. 위 BPM 칸을 두드리면 탭 템포.`)),bi(`VOLUME`,x(`MASTER`,t,`vol`,0,1,.05,void 0,()=>Wt.setVolume(i.music.vol)))];if(e===`bgfx`){let e=i.era,t=(e,t,n)=>b(e,{cls:`small`,lit:t,onPress:()=>(n(!t()),c())});return[bi(`BACKGROUND EFFECTS · 바탕에만`,h(`div`,{class:`keys wrap`},t(`MIRROR`,()=>e.on[3],t=>(e.on[3]=t,e.amt[3]=3)),t(`KALEIDO`,()=>e.on[4],t=>e.on[4]=t),t(`BREAK-UP`,()=>i.moor.breakup.on,e=>i.moor.breakup.on=e),t(`COLOR`,()=>i.color.on,e=>e?dn(0):i.color.on=!1),t(`FEEDBACK`,()=>i.fb.on,e=>i.fb.on=e),t(`SCAN`,()=>i.scan.on,e=>e?pn(0):i.scan.on=!1),t(`RESHOOT`,()=>i.moor.reshoot.on,e=>i.moor.reshoot.on=e)),xi(`재료(객체)에는 걸리지 않고 바탕 영상에만 걸립니다. 재료의 효과는 도마의 LOOK에서.`)),hn(`color`,Si),hn(`fdbk`,Si),hn(`scan`,Si)]}if(e===`tools`){let e=i.tools;return[bi(`HAND TOOLS`,S(``,e,`mode`,[[`none`,`NONE`],[`magnet`,`MAGNET`],[`smear`,`SMEAR`],[`tear`,`TEAR`],[`freeze`,`FREEZE`]],void 0,`wrap`),xi(`MAGNET: 최대 2개. ×를 누르거나 화면 밖으로 끌면 지워집니다 · SMEAR: 문지르면 녹아 밀림 · TEAR: 그은 높이의 주사선이 찢어짐 · FREEZE: 칠한 곳만 멈춤`)),bi(`BRUSH`,x(`SIZE`,e,`size`,.05,.4,.01),x(`HOLD`,e,`smear`,0,1,.05),h(`div`,{class:`keys`},b(`CLEAR MAGNETS`,{cls:`small`,onPress:()=>(i.magnet.list=[],c())}),b(`CLEAR BRUSH`,{cls:`small`,onPress:()=>$.clearBrush()}))),hn(`magnet`,Si)]}return e===`setup`?[hn(`setup`,Si),h(`div`,{class:`sec-t`},`TAPE LOOK`),hn(`tape`,Si),hn(`cg`,Si),bi(`SOUND`,h(`div`,{class:`keys`},C(`KEY CLICKS`,i.audio,`sfx`),C(`VIBRATE`,i.audio,`haptics`)))]:[]}var wi=``;function Ti(){wi=i.ui.sheet,yi.textContent=``;let e=i.ui.tab===`board`?ui.root:di.root,t=e.querySelector(`.board-deck, .stage-deck`);e.classList.toggle(`sheet-open`,!!wi),wi?(yi.hidden=!1,e.append(yi),yi.append(h(`div`,{class:`page-head`},b(`◀ BACK`,{cls:`small`,onPress:()=>li(wi)}),h(`div`,{class:`hdr`},h(`span`,null,`-`+({music:`KEY · CHORDS · TEMPO`,bgfx:`BACKGROUND FX`,tools:`HAND TOOLS`,setup:`SETUP`}[wi]||ln[wi]||wi)),h(`i`))),h(`div`,{class:`scr`},...Ci(wi))),v()):(yi.hidden=!0,t&&(t.hidden=!1))}var Ei=h(`div`,{class:`scanlines`}),Di=null;function Oi(e){i.ui.tab=e,i.ui.sheet=``,si.querySelectorAll(`:scope > .view, :scope > .modal`).forEach(e=>e.remove()),ui.root.classList.remove(`sheet-open`),di.root.classList.remove(`sheet-open`),e===`board`?(ui.scr.prepend($.canvas),si.append(ui.root)):e===`stage`?(di.scr.prepend($.canvas),si.append(di.root)):(Di=Kt(()=>Oi(`stage`)).root,si.append(Di),Wt.setVoices([])),(e===`board`?ui.root:e===`stage`?di.root:Di)?.prepend(vi),si.append(Ei),c(),Ti()}o(()=>{i.ui.sheet!==wi&&Ti()}),Oi(i.ui.tab===`tapes`?`board`:i.ui.tab);var ki=h(`div`,{class:`boot`},h(`span`,null,`PREPARED TV 3`),h(`small`,null,`BOARD · STAGE · ⓒ 1963 — 2026`));si.append(ki),setTimeout(()=>ki.classList.add(`half`),420),setTimeout(()=>ki.remove(),640),document.addEventListener(`pointerdown`,()=>m.ensure(),{once:!0}),Jn(()=>{ui.refresh(),di.refresh(!0),c()});var Ai=0,ji=0;function Mi(){if(requestAnimationFrame(Mi),document.hidden||window.__voPause)return;let e=i.ui.tab;if(e===`tapes`)return;let t=U(),n=W.beatAt(t);if(Ai=Math.max(m.bass(),Ai*.88),e===`board`){let e=ui.frame(t,n);Fr(e.used),Wt.setVoices(e.voice?[{g:e.voice,row:zr(e.voice)}]:[]),$.render(e.fr)}else{let e=di.frame(t,n,Ai);Fr(e.used),Wt.setVoices(e.voices),$.render(e.fr)}gi.textContent=`♪ ${r[kt(t)[0]]}`,i.output.quality===`hd`&&$.fps>0&&$.fps<22?ji?t-ji>5&&(i.output.quality=`sd`,$.setOutput(i.output.aspect,`sd`),k(`기기가 버거워해서 SD로 낮췄어요 (⚙에서 바꿀 수 있어요)`,3e3),ji=0):ji=t:ji=0}requestAnimationFrame(Mi),document.addEventListener(`visibilitychange`,()=>{document.hidden&&(Dr.want(null),d())}),window.addEventListener(`pagehide`,d),$.canvas.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),k(`그래픽 장치가 재시작됐어요. 새로고침해 주세요.`,6e3)}),document.fonts.ready.then(()=>setTimeout(()=>$.refreshStatic(),300)),`serviceWorker`in navigator&&location.protocol===`https:`&&window.addEventListener(`load`,()=>navigator.serviceWorker.register(`./sw.js`).catch(()=>{})),window.__vo={state:i,renderer:$,engine:Wt,shelf:Y,board:ui,stage:di,changed:c,setTab:Oi,grid:W,keyMove:It,voiceRate:zt,voicePeriod:Bt};