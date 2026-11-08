const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dist-CHi3dtUT.js","./dist-C_52oek8.js","./dist-CtMjQmT9.js"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{name:`MULTI`,ko:`멀티 화면`,amt:`GRID`,min:2,max:5,step:1,def:3},{name:`STROBE`,ko:`스트로브`,amt:`HOLD`,min:2,max:15,step:1,def:4},{name:`SLIT`,ko:`슬릿 스캔`,amt:`SPAN`,min:.1,max:1,step:.05,def:.6},{name:`MIRROR`,ko:`거울`,amt:`AXIS`,min:1,max:3,step:1,def:1},{name:`KALEIDO`,ko:`만화경`,amt:`SEGS`,min:2,max:12,step:1,def:4},{name:`MOSAIC`,ko:`모자이크`,amt:`SIZE`,min:.01,max:.15,step:.005,def:.04},{name:`ZOOM`,ko:`줌 잔상`,amt:`PULL`,min:.05,max:.6,step:.01,def:.25},{name:`RGB`,ko:`RGB 어긋남`,amt:`SHIFT`,min:1,max:40,step:1,def:10},{name:`POSTER`,ko:`포스터`,amt:`LEVELS`,min:2,max:8,step:1,def:3},{name:`SOLAR`,ko:`솔라리제이션`,amt:`FOLD`,min:0,max:1,step:.05,def:.8},{name:`NEGA`,ko:`네거티브`,amt:``,min:0,max:1,step:1,def:1},{name:`THERMAL`,ko:`열화상`,amt:``,min:0,max:1,step:1,def:1},{name:`PAINT`,ko:`페인트박스`,amt:`LEVELS`,min:2,max:8,step:1,def:4},{name:`NEON`,ko:`네온 외곽선`,amt:`GAIN`,min:.5,max:4,step:.1,def:2},{name:`TELETEXT`,ko:`문자방송`,amt:`COLS`,min:16,max:60,step:1,def:32},{name:`LED`,ko:`전광판`,amt:`DOTS`,min:24,max:160,step:2,def:64},{name:`HALFTONE`,ko:`망점`,amt:`CELL`,min:3,max:24,step:1,def:8},{name:`STAR`,ko:`별빛 필터`,amt:`THRESH`,min:.4,max:.97,step:.01,def:.75}];function t(){return{on:e.map(()=>!1),amt:e.map(e=>e.def)}}var n=[{name:`MAJOR`,ko:`장조`,steps:[0,2,4,5,7,9,11],minor:!1},{name:`MINOR`,ko:`단조`,steps:[0,2,3,5,7,8,10],minor:!0},{name:`PENTA`,ko:`5음계`,steps:[0,2,4,7,9],minor:!1},{name:`M.PENTA`,ko:`단5음계`,steps:[0,3,5,7,10],minor:!0},{name:`DORIAN`,ko:`도리안`,steps:[0,2,3,5,7,9,10],minor:!0}],r=[`C`,`C#`,`D`,`D#`,`E`,`F`,`F#`,`G`,`G#`,`A`,`A#`,`B`],i={output:{aspect:`9:16`,quality:`hd`},music:{bpm:96,root:9,scale:1,prog:0,vol:.85},board:{src:``,loopBars:2},stage:{bg:`gen:0`,all:!1,shape:4,speed:2,ax:.32,ay:.32,spin:!1,pulse:!1},tools:{mode:`none`,smear:.7,size:.16},moor:{reshoot:{on:!1,tint:.75,zoom:.82,curve:.45},breakup:{on:!1,block:.05,amount:.6}},scan:{on:!1,hSize:1,vSize:1,hPos:0,vPos:0,rot:0,lines:262,purity:.5,osc:[{target:0,wave:0,freq:3,rate:.4,amp:0},{target:1,wave:0,freq:2,rate:.25,amp:0},{target:2,wave:0,freq:1,rate:.2,amp:0}]},magnet:{list:[],strength:1.2,radius:.55,type:0,audio:0,drift:!1,purity:.7},color:{on:!1,bands:7,hues:[0,.08,.16,.33,.5,.66,.83],sat:1,gain:1,contrast:1.2,smooth:!1,cycle:0,mix:!1,neg:!1},fb:{on:!1,mode:0,size:.84,rot:.06,hue:.02,decay:.95,mix:1},era:t(),synth:{mode:0,fx:3,fy:2,drift:.15,persist:.86,width:1.6,color:`#7dff7d`,gain:1},matte:{pattern:0,color:`#2040c0`},cg:{mode:`off`,style:`chyron`,title1:`GLOBAL GROOVE`,title2:``,lower1:`CHARLOTTE MOORMAN`,lower2:`TV CELLO`,crawl:`이것은 미래의 텔레비전 축제 프로그램 맛보기입니다. `,credits:`VIDEO
당신

PREPARED TV
1963 — 2026`,docTop:`CHARLOTTE MOORMAN
TV-BRA`,doc:`THIS IS THE FIRST TV
OF ANY KIND
AT GUADALCANAL`,tc:!1,tcBig:!1,sat:!1,serial:0},vhs:{bleed:.8,scan:.35,track:.04,chroma:1,roll:0,lines:480,interlace:.2,noise:.08,sat:1,box43:!1,head:.3,warm:.1},audio:{sfx:!0,haptics:!0},ui:{crt:1,tab:`board`,sheet:``}},a=new Set;function o(e){return a.add(e),()=>a.delete(e)}var s=!1;function c(){s||(s=!0,queueMicrotask(()=>{s=!1,a.forEach(e=>e())}))}var l=[`output`,`music`,`board`,`stage`,`tools`,`moor`,`scan`,`color`,`fb`,`synth`,`matte`,`cg`,`vhs`,`audio`],u=`ptv.state.v4`;function d(){try{let e={};for(let t of l)e[t]=i[t];localStorage.setItem(u,JSON.stringify(e))}catch{}}function f(){try{let e=localStorage.getItem(u);if(!e)return;let t=JSON.parse(e);for(let e of l)t[e]&&p(i[e],t[e])}catch{}}function p(e,t){for(let n in t){if(!(n in e))continue;let r=e[n],i=t[n];r&&i&&typeof r==`object`&&typeof i==`object`&&!Array.isArray(r)?p(r,i):e[n]=i}}var m=new class{ctx=null;sfxBus;recDest;xy;analyser;noiseBuf;ready=[];whenReady(e){this.ctx?e(this.ctx):this.ready.push(e)}ensure(){if(this.ctx)return this.ctx.state===`suspended`&&this.ctx.resume(),this.ctx;let e;try{e=new AudioContext({latencyHint:`interactive`,sampleRate:48e3})}catch{e=new AudioContext({latencyHint:`interactive`})}this.ctx=e,this.recDest=e.createMediaStreamDestination(),this.sfxBus=e.createGain(),this.sfxBus.gain.value=.45,this.sfxBus.connect(e.destination),this.xy=e.createAnalyser(),this.xy.fftSize=2048,this.xy.smoothingTimeConstant=0,this.analyser=e.createAnalyser(),this.analyser.fftSize=512,this.analyser.smoothingTimeConstant=.6;let t=e.sampleRate*2;this.noiseBuf=e.createBuffer(1,t,e.sampleRate);let n=this.noiseBuf.getChannelData(0);for(let e=0;e<t;e++)n[e]=Math.random()*2-1;return this.ready.splice(0).forEach(t=>t(e)),e}fbuf=new Uint8Array(256);bass(){if(!this.ctx||!this.analyser)return 0;this.analyser.getByteFrequencyData(this.fbuf);let e=0;for(let t=1;t<8;t++)e+=this.fbuf[t];return Math.max(0,e/1785-.25)/.75}noise(e,t=0){let n=this.ctx,r=n.createBufferSource();return r.buffer=this.noiseBuf,r.start(t||n.currentTime,Math.random(),e+.05),r}play(e,t=.5){if(!i.audio.sfx||e===`none`)return;let n=this.ensure(),r=n.currentTime,a=this.sfxBus,o=(e,t,n,i)=>{e.gain.setValueAtTime(1e-4,r),e.gain.exponentialRampToValueAtTime(n,r+t),e.gain.exponentialRampToValueAtTime(1e-4,r+i)};switch(e){case`click`:case`clack`:{let t=this.noise(.03),i=n.createBiquadFilter();i.type=`bandpass`,i.frequency.value=e===`click`?3200:1800,i.Q.value=1.2;let s=n.createGain();o(s,.001,e===`click`?.7:.9,.035),t.connect(i).connect(s).connect(a);let c=n.createOscillator();c.frequency.setValueAtTime(e===`click`?180:120,r),c.frequency.exponentialRampToValueAtTime(60,r+.04);let l=n.createGain();o(l,.001,.35,.05),c.connect(l).connect(a),c.start(r),c.stop(r+.06);break}case`whoosh`:case`swish`:{let i=Math.max(.18,Math.min(t,1.2)),o=this.noise(i),s=n.createBiquadFilter();s.type=`bandpass`,s.Q.value=e===`whoosh`?2.5:4,s.frequency.setValueAtTime(e===`whoosh`?300:900,r),s.frequency.exponentialRampToValueAtTime(e===`whoosh`?2600:5e3,r+i*.6),s.frequency.exponentialRampToValueAtTime(500,r+i);let c=n.createGain();c.gain.setValueAtTime(1e-4,r),c.gain.exponentialRampToValueAtTime(e===`whoosh`?.9:.5,r+i*.45),c.gain.exponentialRampToValueAtTime(1e-4,r+i);let l=n.createStereoPanner();l.pan.setValueAtTime(-.7,r),l.pan.linearRampToValueAtTime(.7,r+i),o.connect(s).connect(c).connect(l).connect(a);break}case`ding`:for(let[e,t]of[[0,1318.5],[1,1975.5]]){let i=r+e*.09,o=n.createOscillator(),s=n.createOscillator(),c=n.createGain();s.frequency.value=t*3.5,c.gain.setValueAtTime(t*1.2,i),c.gain.exponentialRampToValueAtTime(1,i+.6),s.connect(c).connect(o.frequency),o.frequency.value=t;let l=n.createGain();l.gain.setValueAtTime(1e-4,i),l.gain.exponentialRampToValueAtTime(.35,i+.005),l.gain.exponentialRampToValueAtTime(1e-4,i+.9),o.connect(l).connect(a),o.start(i),s.start(i),o.stop(i+1),s.stop(i+1)}break;case`zap`:{let e=n.createOscillator();e.type=`square`,e.frequency.setValueAtTime(1800,r),e.frequency.exponentialRampToValueAtTime(90,r+.25);let t=n.createBiquadFilter();t.type=`lowpass`,t.frequency.value=2400;let i=n.createGain();o(i,.003,.25,.28),e.connect(t).connect(i).connect(a),e.start(r),e.stop(r+.3);break}case`thud`:{let e=n.createOscillator();e.frequency.setValueAtTime(140,r),e.frequency.exponentialRampToValueAtTime(38,r+.35);let t=n.createGain();o(t,.002,1,.45),e.connect(t).connect(a),e.start(r),e.stop(r+.5);let i=this.noise(.4),s=n.createBiquadFilter();s.type=`highpass`,s.frequency.value=2500;let c=n.createGain();o(c,.002,.4,.35),i.connect(s).connect(c).connect(a);break}case`static`:case`surf`:{let t=e===`surf`?.22:.4,i=this.noise(t),o=n.createBiquadFilter();o.type=`bandpass`,o.frequency.value=2200,o.Q.value=.6;let s=n.createGain();s.gain.setValueAtTime(.5,r),s.gain.setValueAtTime(.5,r+t*.7),s.gain.exponentialRampToValueAtTime(1e-4,r+t),i.connect(o).connect(s).connect(a),e===`surf`&&this.play(`clack`);break}case`beep`:{let e=n.createOscillator();e.type=`square`,e.frequency.value=1e3;let t=n.createGain();t.gain.setValueAtTime(.12,r),t.gain.setValueAtTime(1e-4,r+.09),e.connect(t).connect(a),e.start(r),e.stop(r+.1);break}case`power`:{let e=n.createOscillator();e.type=`sawtooth`,e.frequency.setValueAtTime(7867,r);let t=n.createGain();t.gain.setValueAtTime(1e-4,r),t.gain.exponentialRampToValueAtTime(.02,r+.05),t.gain.exponentialRampToValueAtTime(1e-4,r+1.2),e.connect(t).connect(a),e.start(r),e.stop(r+1.3);let i=this.noise(.12),s=n.createGain();o(s,.002,.6,.12);let c=n.createBiquadFilter();c.type=`lowpass`,c.frequency.value=600,i.connect(c).connect(s).connect(a);break}}}};function h(e,t=null,...n){let r=document.createElement(e);if(t)for(let[e,n]of Object.entries(t))n!=null&&n!==!1&&(e===`class`?r.className=String(n):e===`style`?r.setAttribute(`style`,String(n)):e.startsWith(`on`)&&typeof n==`function`?r.addEventListener(e.slice(2),n):r.setAttribute(e,n===!0?``:String(n)));for(let e of n)e!=null&&e!==!1&&r.append(e);return r}function g(){m.play(`click`),i.audio.haptics&&navigator.vibrate?.(6)}var _=[];function v(){for(let e=_.length-1;e>=0;e--){let{el:t,f:n}=_[e];if(t.isConnected){n();continue}let r=t.getRootNode();r instanceof Element&&r.hasAttribute(`data-keep`)||_.splice(e,1)}}function y(e,t){_.push({el:e,f:t}),t()}function b(e,t={}){let n=h(`button`,{class:`key ${t.cls||``}`,type:`button`},typeof e==`string`?h(`span`,{class:`kf`},e):e),r=t.dot?h(`i`,{class:`dot`}):null;r&&n.append(r),n.addEventListener(`pointerdown`,e=>{e.preventDefault(),n.classList.add(`down`),t.silent||g(),t.hold&&(n.setPointerCapture(e.pointerId),t.hold(!0))});let i=e=>{n.classList.contains(`down`)&&(n.classList.remove(`down`),t.hold&&t.hold(!1),e&&t.onPress?.())};return n.addEventListener(`pointerup`,()=>i(!0)),n.addEventListener(`pointercancel`,()=>i(!1)),n.addEventListener(`pointerleave`,()=>!t.hold&&n.classList.remove(`down`)),n.addEventListener(`contextmenu`,e=>e.preventDefault()),(t.lit||t.dot)&&y(n,()=>{t.lit&&n.classList.toggle(`lit`,!!t.lit()),r&&t.dot&&(r.hidden=!t.dot())}),n}function x(e,t,n,r,i,a,o,s){let l=h(`span`,{class:`sv`}),u=h(`div`,{class:`spin`},l,h(`span`,{class:`arr`},h(`i`),h(`i`))),d=()=>{let e=t[n];l.textContent=o?o(e):Number.isInteger(a)?String(Math.round(e)):e.toFixed(a<.1?2:1)},f=e=>{e=Math.max(r,Math.min(i,Math.round(e/a)*a)),e=+e.toFixed(4),e!==t[n]&&(t[n]=e,d(),s?.(),c())},p=0,m=0,_=!1;return u.addEventListener(`pointerdown`,e=>{u.setPointerCapture(e.pointerId),p=e.clientY,m=t[n],_=!1,u.classList.add(`down`)}),u.addEventListener(`pointermove`,e=>{if(!u.hasPointerCapture(e.pointerId))return;let t=p-e.clientY;if(Math.abs(t)>4&&(_=!0),!_)return;let n=Math.trunc(t/6),o=(i-r)/a>60?Math.max(1,Math.abs(n)/6):1;f(m+n*a*o)}),u.addEventListener(`pointerup`,e=>{if(u.classList.remove(`down`),!_){let r=u.getBoundingClientRect();f(t[n]+(e.clientY<r.top+r.height/2?a:-a)),g()}}),y(u,d),h(`div`,{class:`ctl`},h(`label`,null,e),u)}function S(e,t,n,r,i,a=``){let o=h(`div`,{class:`keys ${a}`});for(let[e,a]of r)o.append(b(a,{cls:`small`,lit:()=>t[n]===e,onPress:()=>{t[n]=e,i?.(),c()}}));return e?h(`div`,{class:`ctl`},h(`label`,null,e),o):o}function C(e,t,n,r){return b(e,{cls:`small`,lit:()=>!!t[n],onPress:()=>{t[n]=!t[n],r?.(),c()}})}var ee=[`#f0f0f0`,`#ff3030`,`#ffe030`,`#30ff40`,`#30e0ff`,`#3050ff`,`#ff40ff`,`#c070ff`,`#101010`];function te(e,t,n,r=ee){let i=h(`div`,{class:`chips`});for(let e of r){let r=h(`button`,{class:`chip`,type:`button`,style:`background:${e}`});r.addEventListener(`click`,()=>{t[n]=e,g(),c()}),y(r,()=>r.classList.toggle(`lit`,t[n]===e)),i.append(r)}return h(`div`,{class:`ctl`},h(`label`,null,e),i)}function w(e,t,n,r=!1){let i=r?h(`textarea`,{rows:`3`,class:`field`}):h(`input`,{type:`text`,class:`field`});return i.value=String(t[n]),i.addEventListener(`input`,()=>{t[n]=i.value,c()}),h(`div`,{class:`ctl`},h(`label`,null,e),i)}var ne=null,re=0;function T(e,t=2600){ne?.remove(),ne=h(`div`,{class:`toast`},e),document.querySelector(`.screen`)?.append(ne),clearTimeout(re);let n=ne;re=window.setTimeout(()=>n.remove(),t)}function E(e,t=!1){return new Promise(n=>{let r=h(`input`,{type:`file`,accept:e,style:`display:none`});t&&(r.multiple=!0),r.addEventListener(`change`,()=>{n(Array.from(r.files||[])),r.remove()}),document.body.append(r),r.click()})}function D(){let e=i.output.aspect;document.documentElement.style.setProperty(`--out-aspect`,e.replace(`:`,`/`)),document.documentElement.toggleAttribute(`data-wide`,e===`16:9`||e===`4:3`)}var ie=`#version 300 es
out vec2 vUv;
void main(){
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,ae=class{v;constructor(e){this.v=e}},O=e=>new ae(e),k=class{gl;prog;name;locs=new Map;constructor(e,t,n){this.gl=e,this.prog=t,this.name=n}loc(e){let t=this.locs.get(e);return t===void 0&&(t=this.gl.getUniformLocation(this.prog,e),this.locs.set(e,t)),t}},A=class{gl;vao;constructor(e){this.gl=e,this.vao=e.createVertexArray()}program(e,t,n=ie){let r=this.gl,i=(e,n)=>{let i=r.createShader(e);if(r.shaderSource(i,n),r.compileShader(i),!r.getShaderParameter(i,r.COMPILE_STATUS)){let e=r.getShaderInfoLog(i),a=n.split(`
`).map((e,t)=>`${t+1}: ${e}`),o=/0:(\d+)/.exec(e||``),s=o?a.slice(Math.max(0,o[1]-4),+o[1]+2).join(`
`):``;throw Error(`[${t}] shader compile failed: ${e}\n${s}`)}return i},a=r.createProgram();if(r.attachShader(a,i(r.VERTEX_SHADER,n)),r.attachShader(a,i(r.FRAGMENT_SHADER,e)),r.linkProgram(a),!r.getProgramParameter(a,r.LINK_STATUS))throw Error(`[${t}] link failed: ${r.getProgramInfoLog(a)}`);return new k(r,a,t)}texture(e=WebGL2RenderingContext.LINEAR,t=WebGL2RenderingContext.CLAMP_TO_EDGE){let n=this.gl,r=n.createTexture();return n.bindTexture(n.TEXTURE_2D,r),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,t),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,t),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),r}target(e,t,n=WebGL2RenderingContext.LINEAR){let r=this.gl,i=this.texture(n);r.texImage2D(r.TEXTURE_2D,0,r.RGBA8,e,t,0,r.RGBA,r.UNSIGNED_BYTE,null);let a=r.createFramebuffer();return r.bindFramebuffer(r.FRAMEBUFFER,a),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,i,0),r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT),r.bindFramebuffer(r.FRAMEBUFFER,null),{fb:a,tex:i,w:e,h:t}}freeTarget(e){e&&(this.gl.deleteFramebuffer(e.fb),this.gl.deleteTexture(e.tex))}draw(e,t,n,r,i){let a=this.gl;a.bindFramebuffer(a.FRAMEBUFFER,t?t.fb:null);let o=i?i[2]:t?t.w:r[0],s=i?i[3]:t?t.h:r[1];i?a.viewport(i[0],i[1],i[2],i[3]):a.viewport(0,0,o,s),this.bindUniforms(e,n,o,s),a.bindVertexArray(this.vao),a.drawArrays(a.TRIANGLES,0,3)}bindUniforms(e,t,n,r){let i=this.gl;i.useProgram(e.prog);let a=0,o=e.loc(`uRes`);o&&i.uniform2f(o,n,r);for(let n in t){let r=t[n],o=e.loc(n);o!==null&&(typeof r==`number`?i.uniform1f(o,r):r instanceof ae?i.uniform1i(o,r.v):Array.isArray(r)?r.length===2?i.uniform2f(o,r[0],r[1]):r.length===3?i.uniform3f(o,r[0],r[1],r[2]):r.length===4&&i.uniform4f(o,r[0],r[1],r[2],r[3]):r&&(i.activeTexture(i.TEXTURE0+a),i.bindTexture(i.TEXTURE_2D,r),i.uniform1i(o,a),a++))}}setArray(e,t,n,r){let i=this.gl;i.useProgram(e.prog);let a=e.loc(t+`[0]`)??e.loc(t);a&&(n===1?i.uniform1fv(a,r):n===3?i.uniform3fv(a,r):i.uniform4fv(a,r))}};function oe(e){let t=e.replace(`#`,``),n=parseInt(t.length===3?t.split(``).map(e=>e+e).join(``):t,16);return[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255]}var j=`#version 300 es
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
`,se=j+`
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
`,ce=j+`
uniform sampler2D uSrc;
void main(){ outColor = vec4(texture(uSrc, vUv).rgb, 1.); }
`,le=j+`
uniform sampler2D uSrc;
uniform float uDecay;
void main(){
  vec3 c = texture(uSrc, vUv).rgb * uDecay;
  c = max(c - 1. / 255., 0.);
  outColor = vec4(c, 1.);
}
`,ue=`#version 300 es
in vec2 aPos;
in float aAcross;
in float aI;
out float vAcross;
out float vI;
void main(){ vAcross = aAcross; vI = aI; gl_Position = vec4(aPos, 0., 1.); }
`,de=`#version 300 es
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
`,fe=`
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
`;j+fe+``;var pe=`
vec4 enc(vec2 c){ return vec4(floor(c.x / 256.), mod(c.x, 256.), floor(c.y / 256.), mod(c.y, 256.)) / 255.; }
vec2 dec(vec4 v){ v = floor(v * 255. + .5); return vec2(v.r * 256. + v.g, v.b * 256. + v.a); }
`,me=j+pe+`
uniform sampler2D uMask;
void main(){
  float a = texelFetch(uMask, ivec2(gl_FragCoord.xy), 0).r;
  outColor = a > .5 ? enc(floor(gl_FragCoord.xy)) : vec4(1.);
}
`,he=j+pe+`
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
`,ge=j+pe+`
uniform sampler2D uSrc;
uniform float uMaxD;
void main(){
  vec2 me = floor(gl_FragCoord.xy);
  vec2 s = dec(texelFetch(uSrc, ivec2(me), 0));
  float d = s.x > 65000. ? 1. : clamp(distance(s, me) / uMaxD, 0., 1.);
  outColor = vec4(d, d, d, 1.);
}
`;j+fe+``;var _e=j+`
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
`,ve=j+`
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
`,ye=j+`
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
`,be=j+`
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
`,xe=j+`
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
`,Se=`
uniform sampler2D uAtlas;
uniform float uHead;     // slot of the newest frame
uniform float uFilled;   // frames available
vec3 past(vec2 uv, float back){
  back = clamp(floor(back), 0., max(uFilled - 1., 0.));
  float slot = mod(uHead - back + 256., 64.);
  vec2 cell = vec2(mod(slot, 8.), floor(slot / 8.));
  return texture(uAtlas, (cell + clamp(uv, .003, .997)) / 8.).rgb;
}
`;j+Se+``,j+Se+``,j+Se+``;var Ce=j+`
uniform sampler2D uSrc;
uniform sampler2D uCg;
uniform float uOn;
void main(){
  vec3 c = texture(uSrc, vUv).rgb;
  if (uOn > .5){ vec4 g = texture(uCg, vUv); c = c * (1. - g.a) + g.rgb; }
  outColor = vec4(c, 1.);
}
`,we=`
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
`,Te=j+we+`
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
`,Ee=j+we+`
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
`,De=`
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
`,Oe=j+De+`
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
`,ke=j+De+`
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
`,Ae=j+`
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
`,je=j+`
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
`,Me=j+`
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
`,Ne=j+De+`
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
`,Pe=j+`
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
`,Fe=j+`
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
`,Ie=j+`
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
`,Le=j+`
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
`,Re=[[`GEO`,`도형 만화경`],[`TUNNEL`,`터널`],[`PLASMA`,`플라스마`],[`GRID`,`지평선 격자`],[`VECTOR`,`와이어 도형`],[`CHECKER`,`돌아가는 바둑판`]],ze=j+`
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
`,Be=class{video;stream=null;facing=null;pending=null;error=``;busy=!1;onError=null;constructor(){this.video=document.createElement(`video`),this.video.muted=!0,this.video.playsInline=!0,this.video.setAttribute(`playsinline`,``)}get ready(){return!!this.stream&&this.video.readyState>=2&&this.video.videoWidth>0}want(e){e!==this.facing&&e!==this.pending&&(this.pending=e,this.busy||this.apply())}async apply(){this.busy=!0;try{for(;this.pending!==this.facing;){let e=this.pending;if(this.stop(),e)try{let t=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:e},width:{ideal:1280},height:{ideal:720},frameRate:{ideal:30}},audio:!1});this.stream=t,this.video.srcObject=t,await this.video.play().catch(()=>{}),this.error=``}catch(e){this.error=e.name||`ERR`,this.pending=null,this.onError?.(this.error)}if(this.facing=this.stream?e:null,!this.stream)break}}finally{this.busy=!1}}stop(){this.stream?.getTracks().forEach(e=>e.stop()),this.stream=null,this.video.srcObject=null,this.facing=null}};function Ve(e,t,n){let r=e/t;return r>n?[n/r,1,0,0]:[1,r/n,0,0]}var He=`"Galmuri11", monospace`,Ue=[`#ff3030`,`#ffe030`,`#30ff60`,`#30e0ff`,`#5050ff`,`#ff40ff`];function We(e,t,n,r){e.font=`bold ${r}px ${He}`;let i=e.measureText(t).width;return i>n?Math.floor(r*n/i):r}function Ge(e,t,n,r,i,a,o,s=`center`){e.font=`bold ${i}px ${He}`,e.textAlign=s,e.textBaseline=`middle`;let c=Math.max(2,Math.round(i/11));if(a===`neg`){let a=e.measureText(t).width,o=s===`center`?n-a/2:n;e.fillStyle=`#f0f0f0`,e.fillRect(Math.round(o-c*3),Math.round(r-i*.62),Math.round(a+c*6),Math.round(i*1.24)),e.fillStyle=`#0a0a0a`,e.fillText(t,n,r)}else{e.fillStyle=`#000`;for(let[i,a]of[[-c,0],[c,0],[0,-c],[0,c],[-c,-c],[c,c],[-c,c],[c,-c]])e.fillText(t,n+i,r+a);if(a===`cycle`){let i=[...t],a=0,c=i.map(t=>e.measureText(t).width),l=c.reduce((e,t)=>e+t,0),u=s===`center`?n-l/2:n,d=Math.floor(o*8);e.textAlign=`left`,i.forEach((t,n)=>{e.fillStyle=Ue[(n+d)%Ue.length],e.fillText(t,u,r),u+=c[n],a+=c[n]})}else e.fillStyle=`#f4f4f4`,e.fillText(t,n,r)}}var Ke=class{canvas=document.createElement(`canvas`);ctx=this.canvas.getContext(`2d`);standby=document.createElement(`canvas`);label=document.createElement(`canvas`);start=0;serial=-1;visible=!1;constructor(){document.fonts.load(`22px "Galmuri11"`,`가A1`).then(()=>this.drawStatic())}resize(e,t){(this.canvas.width!==e||this.canvas.height!==t)&&(this.canvas.width=e,this.canvas.height=t,this.drawStatic())}drawStatic(){let e=this.canvas.width||720,t=this.canvas.height||1280;this.standby.width=e,this.standby.height=t;let n=this.standby.getContext(`2d`);n.fillStyle=`#000`,n.fillRect(0,0,e,t);let r=this.label;r.width=400,r.height=100;let i=r.getContext(`2d`);i.clearRect(0,0,400,100),i.fillStyle=`#000`,i.fillRect(70,28,260,44),i.font=`bold 33px ${He}`,i.textAlign=`center`,i.textBaseline=`middle`,i.fillStyle=`#e8e8e8`,i.fillText(`NO SIGNAL`,200,51)}render(e,t=e){let n=i.cg,r=this.canvas.width,a=this.canvas.height,o=this.ctx;if(n.serial!==this.serial&&(this.serial=n.serial,this.start=e),this.visible=n.mode!==`off`||n.tc||n.sat,!this.visible)return!1;o.clearRect(0,0,r,a),o.imageSmoothingEnabled=!1;let s=Math.min(r,a)/10,c=e-this.start,l=e=>e.slice(0,Math.floor(c*30));if(n.mode===`title`){let e=We(o,n.title1,r*.9,Math.round(s*1.1));Ge(o,l(n.title1),r/2,a*.47,e,n.style,c),n.title2&&Ge(o,l(n.title2),r/2,a*.47+e*1.3,Math.round(e*.55),n.style===`cycle`?`chyron`:n.style,c)}else if(n.mode===`lower`){let e=We(o,n.lower1,r*.86,Math.round(s*.62));Ge(o,l(n.lower1),s*.5,a*.78,e,n.style,c,`left`),Ge(o,l(n.lower2),s*.5,a*.78+e*1.25,Math.round(e*.7),n.style===`cycle`?`chyron`:n.style,c,`left`)}else if(n.mode===`crawl`){let e=Math.round(s*.5);o.font=`bold ${e}px ${He}`;let t=o.measureText(n.crawl).width+s,i=r-Math.floor(c*60)*Math.round(s*.03)%(t+r);o.fillStyle=`#000`,o.fillRect(0,Math.round(a*.88-e*.8),r,Math.round(e*1.6)),Ge(o,n.crawl,i,a*.88,e,n.style,c,`left`)}else if(n.mode===`doc`){let e=n.docTop.split(`
`),t=Math.round(s*.3);o.font=`${t}px ${He}`,o.textAlign=`center`,o.textBaseline=`middle`,e.forEach((e,n)=>{o.fillStyle=`#000`,o.fillText(l(e),r/2+1,s*.7+n*t*1.3+1),o.fillStyle=`#b8b8b8`,o.fillText(l(e),r/2,s*.7+n*t*1.3)});let i=n.doc.split(`
`).filter(e=>e.trim()),u=We(o,i.reduce((e,t)=>e.length>t.length?e:t,``),r*.9,Math.round(s*.5)),d=a*.5-(i.length-1)*u*1.25/2;i.forEach((e,t)=>Ge(o,l(e.toUpperCase()),r/2,d+t*u*1.25,u,`chyron`,c))}else if(n.mode===`credits`){let e=n.credits.split(`
`),t=Math.round(s*.7),i=a-Math.floor(c*30)*Math.max(1,Math.round(s*.04))%(e.length*t+a);e.forEach((a,l)=>{if(!a.trim())return;let u=l===0||!e[l-1].trim();Ge(o,a,r/2,i+l*t,Math.round(u?s*.32:s*.5),u?`chyron`:n.style,c)})}if(n.tc&&n.tcBig){let e=Math.round(s*.62),n=t+660+56,i=Math.floor(n%1*30),c=[Math.floor(n/3600)%24,Math.floor(n/60)%60,Math.floor(n)%60,i].map(e=>String(e).padStart(2,`0`)).join(` `);o.font=`bold ${e}px ${He}`;let l=o.measureText(c).width;o.fillStyle=`#000`,o.fillRect(Math.round(r/2-l/2-10),Math.round(a*.8-e*.7),Math.round(l+20),Math.round(e*1.4)),o.fillStyle=`#f4f4f4`,o.textAlign=`center`,o.textBaseline=`middle`,o.fillText(c,r/2,a*.8)}else if(n.tc){let t=Math.round(s*.36),n=e,i=Math.floor(n%1*30),c=`${String(Math.floor(n/3600)%24).padStart(2,`0`)}:${String(Math.floor(n/60)%60).padStart(2,`0`)}:${String(Math.floor(n)%60).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`;o.font=`bold ${t}px ${He}`;let l=o.measureText(c).width;o.fillStyle=`#000`,o.fillRect(Math.round(r/2-l/2-6),Math.round(a-s*.9),Math.round(l+12),Math.round(t*1.4)),o.fillStyle=`#fff`,o.textAlign=`center`,o.textBaseline=`top`,o.fillText(c,r/2,Math.round(a-s*.9+t*.2))}if(n.sat){let t=Math.round(s*.3);o.font=`bold ${t}px ${He}`,o.textAlign=`left`,o.textBaseline=`top`,Math.floor(e*1.5)%2==0&&(o.fillStyle=`#000`,o.fillRect(Math.round(s*.3),Math.round(s*.35),Math.round(s*4.6),Math.round(t*1.5)),o.fillStyle=`#ffe040`,o.fillText(`LIVE VIA SATELLITE`,Math.round(s*.4),Math.round(s*.35+t*.25)))}return!0}},qe=(e,t)=>{e.fillStyle=t,e.fill(),e.lineWidth=5,e.strokeStyle=`#111`,e.stroke()},Je=[e=>{e.beginPath(),e.moveTo(18,92),e.bezierCurveTo(30,40,60,12,92,6),e.bezierCurveTo(80,40,56,70,18,92),qe(e,`#f4f0e0`),e.beginPath(),e.moveTo(18,92),e.lineTo(80,20),e.stroke();for(let t=0;t<6;t++)e.beginPath(),e.moveTo(30+t*9,78-t*10),e.lineTo(42+t*9,76-t*12),e.stroke()},e=>{e.beginPath(),e.ellipse(32,76,16,12,-.4,0,Math.PI*2),qe(e,`#111`),e.fillRect(44,14,7,62),e.beginPath(),e.moveTo(51,14),e.quadraticCurveTo(80,26,74,52),e.quadraticCurveTo(70,34,51,32),qe(e,`#111`)},e=>{e.beginPath(),e.roundRect(34,8,32,48,16),qe(e,`#c8c8d0`);for(let t=0;t<4;t++)e.beginPath(),e.moveTo(36,18+t*9),e.lineTo(64,18+t*9),e.stroke();e.beginPath(),e.moveTo(24,46),e.quadraticCurveTo(50,80,76,46),e.stroke(),e.fillStyle=`#111`,e.fillRect(46,64,8,22),e.fillRect(32,86,36,7)},e=>{e.beginPath(),e.moveTo(12,38),e.lineTo(34,38),e.lineTo(62,14),e.lineTo(62,86),e.lineTo(34,62),e.lineTo(12,62),e.closePath(),qe(e,`#f0d040`);for(let t=0;t<3;t++)e.beginPath(),e.arc(62,50,14+t*12,-.7,.7),e.stroke()},e=>{e.beginPath(),e.ellipse(50,48,36,42,0,0,Math.PI*2),qe(e,`#f8f0c8`),e.fillStyle=`#111`,e.beginPath(),e.ellipse(36,38,8,5,-.3,0,Math.PI*2),e.ellipse(64,38,8,5,.3,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(50,56,18,.15,Math.PI-.15),e.closePath(),e.fill()},e=>{e.beginPath(),e.ellipse(50,48,36,42,0,0,Math.PI*2),qe(e,`#a0c8f0`),e.fillStyle=`#111`,e.beginPath(),e.ellipse(36,40,8,5,.4,0,Math.PI*2),e.ellipse(64,40,8,5,-.4,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(50,78,16,Math.PI+.3,-.3),e.lineWidth=6,e.stroke()},e=>{e.beginPath(),e.ellipse(50,52,42,34,-.2,0,Math.PI*2),qe(e,`#d8a868`),[`#e02020`,`#2050e0`,`#20c040`,`#f0e020`,`#f0f0f0`].forEach((t,n)=>{e.beginPath(),e.arc(26+n*13,40+n%2*10,6,0,Math.PI*2),e.fillStyle=t,e.fill(),e.lineWidth=2,e.stroke()}),e.beginPath(),e.arc(66,66,8,0,Math.PI*2),e.fillStyle=`#3a2410`,e.fill()},e=>{e.beginPath(),e.moveTo(20,76),e.quadraticCurveTo(30,66,30,44),e.quadraticCurveTo(30,14,50,14),e.quadraticCurveTo(70,14,70,44),e.quadraticCurveTo(70,66,80,76),e.closePath(),qe(e,`#f0c030`),e.beginPath(),e.arc(50,82,8,0,Math.PI*2),qe(e,`#f0c030`)},e=>{e.beginPath();for(let t=0;t<10;t++){let n=t%2?18:44,r=t/10*Math.PI*2-Math.PI/2;e.lineTo(50+Math.cos(r)*n,52+Math.sin(r)*n)}e.closePath(),qe(e,`#ff60c0`)}],Ye=[`#1830a0`,`#c02040`,`#108050`,`#d07010`,`#7020a0`,`#101010`,`#e0d8c0`];function Xe(e,t,n){e.fillStyle=`#f4f4f4`,e.fillRect(-t/2-8,-n/2-8,t+16,n+16),[`#c0c0c0`,`#c0c000`,`#00c0c0`,`#00c000`,`#c000c0`,`#c00000`,`#0000c0`].forEach((r,i)=>{e.fillStyle=r,e.fillRect(-t/2+i*t/7,-n/2,t/7+1,n*.7)}),[`#0000c0`,`#111`,`#c000c0`,`#111`,`#00c0c0`,`#111`,`#c0c0c0`].forEach((r,i)=>{e.fillStyle=r,e.fillRect(-t/2+i*t/7,-n/2+n*.7,t/7+1,n*.08)}),e.fillStyle=`#101010`,e.fillRect(-t/2,-n/2+n*.78,t,n*.22),e.fillStyle=`#f0f0f0`,e.fillRect(-t/2+t*.16,-n/2+n*.78,t*.16,n*.22)}var Ze=class{canvas=document.createElement(`canvas`);last=-1;stamp=0;update(e,t,n){let r=Math.min(1,720/Math.max(t,n)),i=Math.round(t*r),a=Math.round(n*r);if(e===this.last&&this.canvas.width===i)return!1;this.last=e,this.canvas.width=i,this.canvas.height=a;let o=this.canvas.getContext(`2d`),s=t=>{let n=Math.sin(e*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)};o.fillStyle=Ye[Math.floor(s(1)*Ye.length)],o.fillRect(0,0,i,a),o.strokeStyle=`rgba(255,255,255,0.18)`,o.lineWidth=10;for(let e=1;e<8;e++)o.strokeRect(i/2-e*i*.07,a/2-e*a*.07,e*i*.14,e*a*.14);let c=Je[Math.floor(s(2)*Je.length)],l=Je[Math.floor(s(3)*Je.length)],u=Math.min(i,a)*.28;for(let[e,t]of[[1,1],[-1,1],[1,-1],[-1,-1]])o.save(),o.translate(i/2+e*i*.3,a/2+t*a*.32),o.scale(e*u/100,t*u/100),o.translate(-50,-50),c(o),o.restore(),o.save(),o.translate(i/2+e*i*.36,a/2+(t>0?.04:-.04)*a),o.scale(e*u*.7/100,u*.7/100),o.translate(-50,-50),t>0&&l(o),o.restore();o.save(),o.translate(i/2,a/2),o.rotate((s(4)-.5)*.9);let d=i*.5,f=d*.75;return o.fillStyle=`rgba(0,0,0,0.45)`,o.fillRect(-d/2+10,-f/2+12,d+16,f+16),Xe(o,d,f),o.restore(),this.stamp++,!0}},Qe=900,$e=new Float32Array(Qe*2),et=new Float32Array(2048);function tt(e,t){let n=i.synth;if(n.mode===1){let e=!1;if(m.ctx&&m.xy){m.xy.getFloatTimeDomainData(et);for(let t=0;t<64;t++)Math.abs(et[t*16])>.002&&(e=!0)}let t=2.6*n.gain;for(let r=0;r<Qe;r++)if(e){let e=et[r*2%2011],i=et[(r*2+37)%2048],a=Math.atan2(i,e)+r*.0021*n.fx,o=Math.min(1.2,Math.hypot(e,i)*t);$e[r*2]=Math.cos(a)*o,$e[r*2+1]=Math.sin(a)*o}else $e[r*2]=(Math.random()-.5)*.02,$e[r*2+1]=(Math.random()-.5)*.02;return $e}let r=e*n.drift,a=.82*(1+t*.15)*n.gain;for(let e=0;e<Qe;e++){let t=e/899*Math.PI*2,i,o;if(n.mode===2){let e=n.fx/Math.max(1,n.fy),s=Math.cos(e*t*n.fy+r)*a;i=s*Math.cos(t*n.fy),o=s*Math.sin(t*n.fy)}else i=Math.sin(n.fx*t+r)*a,o=Math.sin(n.fy*t)*a;$e[e*2]=i,$e[e*2+1]=o}return $e}function nt(e,t,n,r,i){let a=e.length/2,o=n/r*2,s=0;for(let n=0;n<a-1;n++){let r=e[n*2]/t,a=e[n*2+1],c=e[n*2+2]/t,l=e[n*2+3],u=c-r,d=l-a,f=Math.hypot(u*t,d)||1e-6,p=Math.min(1.6,.012/f+.25);u/=f,d/=f;let m=-d*o/t,h=u*o,g=[[r+m,a+h,1],[r-m,a-h,-1],[c+m,l+h,1],[c+m,l+h,1],[r-m,a-h,-1],[c-m,l-h,-1]];for(let[e,t,n]of g)i[s++]=e,i[s++]=t,i[s++]=n,i[s++]=p}return s/4}var rt=21576,it=[{id:`none`,name:`NONE`,ko:`원본`},{id:`paikabe`,name:`PAIK-ABE`,ko:`윤곽+색면`,a:`LINES`,b:`SMEAR`,hist:!0},{id:`ribbon`,name:`RIBBON`,ko:`흰 리본`,a:`LEVEL`,b:`WIDTH`},{id:`rutt`,name:`RUTT`,ko:`주사선 등고선`,a:`HEIGHT`,b:`LINES`},{id:`breakup`,name:`BREAK-UP`,ko:`픽셀 깨짐`,a:`BLOCK`,b:`AMOUNT`},{id:`poster2`,name:`POSTER 2`,ko:`두 색`,a:`COLORS`},{id:`lineart`,name:`LINE ART`,ko:`선화`,a:`BACK`},{id:`smear`,name:`SMEAR`,ko:`흔들린 번짐`,a:`AMOUNT`,b:`ANGLE`,hist:!0},{id:`color`,name:`COLOR`,ko:`컬러라이저`,a:`BANDS`,b:`CYCLE`},{id:`mosaic`,name:`MOSAIC`,ko:`모자이크`,a:`SIZE`,era:5},{id:`rgb`,name:`RGB`,ko:`RGB 어긋남`,a:`SHIFT`,era:7},{id:`solar`,name:`SOLAR`,ko:`솔라리`,a:`FOLD`,era:9},{id:`nega`,name:`NEGA`,ko:`네거티브`,era:10},{id:`thermal`,name:`THERMAL`,ko:`열화상`,era:11},{id:`paint`,name:`PAINT`,ko:`페인트박스`,a:`LEVELS`,era:12},{id:`neon`,name:`NEON`,ko:`네온`,a:`GAIN`,era:13},{id:`halftone`,name:`HALFTONE`,ko:`망점`,a:`CELL`,era:16},{id:`led`,name:`LED`,ko:`전광판`,a:`DOTS`,era:15},{id:`teletext`,name:`TELETEXT`,ko:`문자방송`,a:`COLS`,era:14},{id:`kaleido`,name:`KALEIDO`,ko:`만화경`,a:`SEGS`,era:4}],at=e=>it.find(t=>t.id===e)??it[0],M=(e,t,n)=>e+(t-e)*n,ot=[`#ff4070`,`#40e0ff`,`#ffe040`,`#90ff50`,`#c070ff`,`#ff8020`,`#ffffff`,`#30ffc0`],st=[[`NONE`,`없음`],[`TORN`,`찢긴 선`],[`NEON`,`네온 번짐`],[`RAINBOW`,`무지개 흐름`],[`DOTS`,`행진 점선`],[`ELECTRIC`,`전기`],[`ECHO`,`메아리 고리`],[`CHROME`,`크롬`],[`RIBBON`,`흰 리본`],[`PAIK-ABE`,`가는 다중선`]],ct=[`CIRCLE`,`RING`,`RECT`,`DIAMOND`],lt={tap:`TAP`,person:`PERSON`,luma:`LUMA`,chroma:`CHROMA`,shape:`SHAPE`};function ut(e,t){let n=e.track;if(!n||!n.done)return null;let r=n.frames.length,i=(t-n.start)*n.fps,a=e=>{if(e=Math.max(0,Math.min(r-1,e)),n.frames[e])return e;for(let t=1;t<r;t++){if(e-t>=0&&n.frames[e-t])return e-t;if(e+t<r&&n.frames[e+t])return e+t}return-1},o=a(Math.floor(i));if(o<0)return null;let s=a(Math.floor(i)+1);s<0&&(s=o);let c=s===o?0:Math.max(0,Math.min(1,i-Math.floor(i)));return{a:n.frames[o],b:n.frames[s],f:c,w:n.w,h:n.h,ia:o,ib:s,cx:n.cx[o]+(n.cx[s]-n.cx[o])*c,cy:n.cy[o]+(n.cy[s]-n.cy[o])*c}}function dt(e){let t=e.track;return e.kind!==`tap`&&e.kind!==`person`?1:t?t.frames.length?t.done/t.frames.length:1:0}var N=()=>performance.now()/1e3,P={origin:0,get beat(){return 60/Math.max(30,i.music.bpm)},get step(){return this.beat/4},stepAt(e){return(e-this.origin)/this.step},timeOf(e){return this.origin+e*this.step},next(e,t=1){let n=Math.ceil(this.stepAt(e)/t-1e-4)*t;return this.timeOf(n)},beatAt(e){return this.stepAt(e)/4}},ft=[];function pt(e=N()){if(ft.length&&e-ft[ft.length-1]>2&&(ft.length=0),ft.push(e),ft.length>5&&ft.shift(),ft.length<2)return null;let t=(ft[ft.length-1]-ft[0])/(ft.length-1),n=Math.round(Math.min(200,Math.max(40,60/t)));return i.music.bpm=n,P.origin=e,n}function mt(e,t=N()){let n=P.beatAt(t);i.music.bpm=Math.round(Math.min(200,Math.max(40,e))),P.origin=t-n*P.beat}var ht={"4:3":[4,3],"9:16":[9,16],"1:1":[1,1],"16:9":[16,9]},gt=[[`#c070ff`,`#f4f0ff`,`#2a2aa0`,`#ffffff`],[`#40ff40`,`#40ff40`,`#40ff40`,`#40ff40`],[`#ff3030`,`#ffe030`,`#30e0ff`,`#ff40ff`],[`#ffffff`,`#000000`,`#ffffff`,`#000000`]],_t=[`#1840c0`,`#18a040`,`#c01818`,`#c018a0`,`#e07010`,`#101010`],vt=j+`
uniform sampler2D uA;
uniform sampler2D uB;
uniform float uAmt;
void main(){ outColor = vec4(mix(texture(uA, vUv).rgb, texture(uB, vUv).rgb, uAmt), 1.); }
`,yt=j+`
uniform sampler2D uSrc;
uniform float uAmt;
void main(){
  vec3 c = texture(uSrc, vUv).rgb;
  // darker and greyer, with a faint checker so the cut-out reads as lifted off
  vec2 g = floor(vUv * uRes / 18.);
  float k = mod(g.x + g.y, 2.) * .035;
  outColor = vec4(mix(c, vec3(luma(c)) * .35 + k, uAmt), 1.);
}
`,bt=j+`void main(){ outColor = vec4(0., 0., 0., 1.); }`,xt=class{canvas;gl;kit;W=720;H=1280;cg=new Ke;ornament=new Ze;frame=0;fps=0;fpsAcc=0;fpsN=0;lastT=0;p={};texs=new WeakMap;rts=new Map;cgTex;standbyTex;labelTex;ornTex;ornStamp=-1;t={};flip={};maskW=0;maskH=0;beamVao;beamBuf;beamData=new Float32Array(rt);grabbers=[];brush={x:0,y:0,vx:0,vy:0,active:!1,tool:0,startHold:!1};fieldLive=0;centres=new Map;lastLayers=[];constructor(){this.canvas=document.createElement(`canvas`),this.canvas.className=`program-canvas`;let e=this.canvas.getContext(`webgl2`,{antialias:!1,alpha:!1,preserveDrawingBuffer:!1,powerPreference:`high-performance`});if(!e)throw Error(`WebGL2 not supported`);this.gl=e,this.kit=new A(e);let t=(e,t,n)=>this.p[t]=this.kit.program(e,t,n);t(se,`source`),t(ce,`copy`),t(le,`decay`),t(de,`beam`,ue),t(me,`seed`),t(he,`jfa`),t(ge,`dist`),t(be,`color`),t(ye,`scan`),t(xe,`fb`),t(Ce,`cg`),t(ve,`era`),t(_e,`analog`),t(Te,`objmask`),t(Ee,`objcomp`),t(Oe,`paikabe`),t(ke,`ribbon`),t(Ae,`rutt`),t(je,`breakup`),t(Me,`reshoot`),t(Ne,`poster2`),t(Pe,`lineart`),t(Fe,`smear`),t(Ie,`tools`),t(Le,`field`),t(ze,`gen`),t(vt,`mix`),t(yt,`dim`),t(bt,`black`),this.cgTex=this.kit.texture(),this.standbyTex=this.kit.texture(),this.labelTex=this.kit.texture(),this.ornTex=this.kit.texture(),this.beamVao=e.createVertexArray(),this.beamBuf=e.createBuffer(),e.bindVertexArray(this.beamVao),e.bindBuffer(e.ARRAY_BUFFER,this.beamBuf),e.bufferData(e.ARRAY_BUFFER,this.beamData.byteLength,e.DYNAMIC_DRAW);let n=this.p.beam.prog,r=e.getAttribLocation(n,`aPos`),a=e.getAttribLocation(n,`aAcross`),o=e.getAttribLocation(n,`aI`);e.enableVertexAttribArray(r),e.vertexAttribPointer(r,2,e.FLOAT,!1,16,0),e.enableVertexAttribArray(a),e.vertexAttribPointer(a,1,e.FLOAT,!1,16,8),e.enableVertexAttribArray(o),e.vertexAttribPointer(o,1,e.FLOAT,!1,16,12),e.bindVertexArray(null),this.setOutput(i.output.aspect,i.output.quality)}setOutput(e,t){let[n,r]=ht[e],i=t===`fhd`?1920:t===`hd`?1280:960,a,o;n>=r?(a=i,o=Math.round(i*r/n/2)*2):(o=i,a=Math.round(i*n/r/2)*2),e===`4:3`&&(a=t===`fhd`?1440:t===`hd`?960:720,o=a*3/4),e===`1:1`&&(a=o=t===`fhd`?1080:t===`hd`?960:720),this.W=a,this.H=o,this.canvas.width=a,this.canvas.height=o;for(let e in this.t)this.kit.freeTarget(this.t[e]);for(let e of this.rts.values())this.freeRt(e);this.rts.clear(),this.t={};let s=(e,t=a,n=o,r)=>this.t[e]=this.kit.target(t,n,r);for(let e of[`a`,`b`,`c0`,`c1`,`era`,`col`,`sc`,`tl`,`h0`,`h1`,`rs`,`p0`,`p1`,`syn0`,`syn1`,`hold`])s(e);this.maskW=Math.round(a/3),this.maskH=Math.round(o/3);for(let e of[`om`,`odist`])s(e,this.maskW,this.maskH);s(`j0`,this.maskW,this.maskH,this.gl.NEAREST),s(`j1`,this.maskW,this.maskH,this.gl.NEAREST),s(`f0`,Math.round(a/4),Math.round(o/4)),s(`f1`,Math.round(a/4),Math.round(o/4)),this.clearField(),this.cg.resize(a,o),this.upload(this.standbyTex,this.cg.standby,!0),this.upload(this.labelTex,this.cg.label,!0),this.ornStamp=-1}clearField(){let e=this.gl;for(let t of[`f0`,`f1`])e.bindFramebuffer(e.FRAMEBUFFER,this.t[t].fb),e.clearColor(.5,.5,0,0),e.clear(e.COLOR_BUFFER_BIT);e.clearColor(0,0,0,1),e.bindFramebuffer(e.FRAMEBUFFER,null),this.fieldLive=0}clearBrush(){this.clearField()}pp(e,t){let n=e+t;return(this.flip[n]=(this.flip[n]??0)^1)?[this.t[e],this.t[t]]:[this.t[t],this.t[e]]}upload(e,t,n=!1){let r=this.gl;r.bindTexture(r.TEXTURE_2D,e),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!0),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n);try{r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t)}catch{}r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1)}uploadR8(e,t,n,r){let i=this.gl;i.bindTexture(i.TEXTURE_2D,e),i.pixelStorei(i.UNPACK_ALIGNMENT,1),i.texImage2D(i.TEXTURE_2D,0,i.R8,n,r,0,i.RED,i.UNSIGNED_BYTE,t),i.pixelStorei(i.UNPACK_ALIGNMENT,4)}refreshStatic(){this.cg.drawStatic(),this.upload(this.standbyTex,this.cg.standby,!0),this.upload(this.labelTex,this.cg.label,!0)}texOf(e){let t=this.texs.get(e);if(t||(t={tex:this.kit.texture(),stamp:-1,ok:!1},this.texs.set(e,t)),t.stamp!==e.stamp){let n=e.element();n&&(this.upload(t.tex,n),t.ok=!0,t.stamp=e.stamp)}return t.ok?t.tex:null}fitOf(e){let[t,n]=e.size();return Ve(t,n,this.W/this.H)}mirrorOf(e){return+(e.s.kind===`camera`&&e.s.facing===`user`)}syn=0;synthTex(){return(this.syn?this.t.syn1:this.t.syn0).tex}renderSynth(e,t){let n=this.gl,r=this.syn?this.t.syn1:this.t.syn0,a=this.syn?this.t.syn0:this.t.syn1;this.syn^=1,this.kit.draw(this.p.decay,a,{uSrc:r.tex,uDecay:i.synth.persist});let o=nt(tt(e,t),this.W/this.H,i.synth.width*(this.H/480),this.H,this.beamData);n.bindFramebuffer(n.FRAMEBUFFER,a.fb),n.viewport(0,0,a.w,a.h),n.useProgram(this.p.beam.prog);let s=oe(i.synth.color);n.uniform3f(this.p.beam.loc(`uColor`),s[0]*.5,s[1]*.5,s[2]*.5),n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE),n.bindVertexArray(this.beamVao),n.bindBuffer(n.ARRAY_BUFFER,this.beamBuf),n.bufferSubData(n.ARRAY_BUFFER,0,this.beamData,0,o*4),n.drawArrays(n.TRIANGLES,0,o),n.bindVertexArray(null),n.disable(n.BLEND)}srcU(e){return{uTime:e,uFlipY:0,uLabel:this.labelTex,uColor:oe(i.matte.color)}}drawPlayer(e,t,n){let r=this.texOf(e);if(!r)return this.kit.draw(this.p.black,t,{});this.kit.draw(this.p.source,t,{...this.srcU(n),uKind:O(1),uTex:r,uFit:this.fitOf(e),uMirror:this.mirrorOf(e)})}drawBg(e,t,n,r){let i=this.kit;if(e.kind===`player`)return this.drawPlayer(e.p,t,n);if(e.kind===`gen`)return i.draw(this.p.gen,t,{uTime:n,uMode:O(e.id),uBeat:r});if(e.kind===`beam`)return i.draw(this.p.source,t,{...this.srcU(n),uKind:O(1),uTex:this.synthTex(),uFit:[1,1,0,0],uMirror:0});if(e.kind===`matte`)return e.pattern===13?(this.ornament.update(Math.floor(r),this.W,this.H),this.ornament.stamp!==this.ornStamp&&(this.upload(this.ornTex,this.ornament.canvas),this.ornStamp=this.ornament.stamp),i.draw(this.p.source,t,{...this.srcU(n),uKind:O(1),uTex:this.ornTex,uFit:[1,1,0,0],uMirror:0})):i.draw(this.p.source,t,{...this.srcU(n),uKind:O(2),uPattern:O(e.pattern),uTex:this.labelTex});i.draw(this.p.black,t,{})}distance(e,t,n){this.kit.draw(this.p.seed,this.t.j0,{uMask:e.tex});let r=this.t.j0,i=this.t.j1,a=1;for(;a<Math.max(this.maskW,this.maskH);)a*=2;for(a/=2;a>=1;a/=2)this.kit.draw(this.p.jfa,i,{uSrc:r.tex,uStep:a}),[r,i]=[i,r];this.kit.draw(this.p.dist,t,{uSrc:r.tex,uMaxD:n})}rtOf(e){let t=this.rts.get(e.id);if(!t){let n=Math.round(this.W/2),r=Math.round(this.H/2);t={raw:this.kit.target(n,r),l0:this.kit.target(n,r),l1:this.kit.target(n,r),flip:0,out:null,frame:-1,ma:this.kit.texture(),mb:this.kit.texture(),ka:null,kb:null,used:0},t.out=t.raw,this.rts.set(e.id,t)}return t.used=this.frame,t}freeRt(e){this.kit.freeTarget(e.raw),this.kit.freeTarget(e.l0),this.kit.freeTarget(e.l1),this.gl.deleteTexture(e.ma),this.gl.deleteTexture(e.mb)}dress(t,n,r,i){let a=this.rtOf(t);if(a.frame===this.frame)return a;a.frame=this.frame,this.drawPlayer(n,a.raw,r);let o=at(t.look.id),s=t.look.a,c=t.look.b,l=this.kit,u=a.raw,d=()=>(a.flip^=1,a.flip?a.l0:a.l1),f=()=>a.flip?a.l1:a.l0;if(o.id===`none`)return a.out=u,a;let p=(()=>{let t=d(),n={uSrc:u.tex,uTime:r};if(o.id===`paikabe`)l.draw(this.p.paikabe,t,{...n,uHist:f().tex,uLines:Math.round(M(1,6,s)),uField:.85,uSmear:M(0,.95,c)});else if(o.id===`ribbon`)l.draw(this.p.ribbon,t,{...n,uLevel:M(.2,.8,s),uWidth:M(.03,.18,c),uFringe:1});else if(o.id===`rutt`)l.draw(this.p.rutt,t,{...n,uLines:Math.round(M(24,100,c)),uHeight:M(.04,.3,s),uColorMode:O(0)});else if(o.id===`breakup`)l.draw(this.p.breakup,t,{...n,uBlock:M(.02,.12,s),uAmount:M(.2,1,c)});else if(o.id===`poster2`)l.draw(this.p.poster2,t,{...n,uPair:O(Math.min(3,Math.floor(s*4)))});else if(o.id===`lineart`)l.draw(this.p.lineart,t,{...n,uBg:oe(_t[(Math.floor(i)+Math.floor(s*6))%6]),uCircles:1});else if(o.id===`smear`)l.draw(this.p.smear,t,{...n,uHist:f().tex,uAngle:M(-3.1,3.1,c),uAmount:M(.2,1,s)});else if(o.id===`color`){let e=[];for(let t=0;t<7;t++)e.push(...St([0,.08,.16,.33,.5,.66,.83][t]+r*M(0,.5,c),1,1));l.setArray(this.p.color,`uPal`,3,e),l.draw(this.p.color,t,{uSrc:u.tex,uIn0:u.tex,uIn1:u.tex,uIn2:u.tex,uIn3:u.tex,uMixOn:[0,0,0,0],uBands:O(Math.round(M(2,7,s))),uGain:1,uContrast:1.2,uSmooth:0,uNeg:0,uMix:0})}else if(o.era!==void 0){let n=e.map((e,t)=>+(t===o.era)),i=e[o.era],a=e.map(e=>e.def);a[o.era]=i.step>=1?Math.round(M(i.min,i.max,s)):M(i.min,i.max,s),l.setArray(this.p.era,`uOn`,1,n),l.setArray(this.p.era,`uAmt`,1,a),l.draw(this.p.era,t,{uCur:u.tex,uAtlas:u.tex,uHead:0,uFilled:1,uTime:r})}else return u;return t})();return u=p,a.out=p,a}maskTex(e,t,n){let r=ut(e,n);return r?(t.ka!==r.a&&(this.uploadR8(t.ma,r.a,r.w,r.h),t.ka=r.a),t.kb!==r.b&&(this.uploadR8(t.mb,r.b,r.w,r.h),t.kb=r.b),{a:t.ma,b:t.mb,f:r.f,cx:r.cx,cy:r.cy}):null}sourceToScreen(e,t,n){let r=this.fitOf(e.p),i=(t-.5)/r[0]+.5,a=(1-n-.5)/r[1]+.5,o=this.W/this.H,s=(i-.5)*2*o*e.scale,c=(a-.5)*2*e.scale,l=e.rot*Math.PI/180;return[s,c]=[s*Math.cos(l)-c*Math.sin(l),s*Math.sin(l)+c*Math.cos(l)],s+=e.x*o,c+=e.y,[s/(2*o)+.5,c/2+.5]}screenToSource(e,t,n,r){let i=t,a=1-n;if(r){let e=this.W/this.H,t=(i-.5)*2*e-r.x*e,n=(a-.5)*2-r.y,o=-r.rot*Math.PI/180;[t,n]=[t*Math.cos(o)-n*Math.sin(o),t*Math.sin(o)+n*Math.cos(o)],i=t/(2*e*r.scale)+.5,a=n/(2*r.scale)+.5}let o=this.fitOf(e),s=(i-.5)*o[0]+.5,c=(a-.5)*o[1]+.5;return this.mirrorOf(e)&&(s=1-s),[s,1-c]}layerAt(e,t){let n=this.lastLayers;for(let r=n.length-1;r>=0;r--){let i=n[r],[a,o]=this.screenToSource(i.p,e,t,i);if(a<0||a>1||o<0||o>1)continue;if(i.g.kind!==`tap`&&i.g.kind!==`person`){let n=this.centres.get(i.key);if(n&&Math.hypot((e-n[0])*(this.W/this.H),1-t-n[1])<.3*i.scale)return i;continue}let s=ut(i.g,i.p.pos(N()));if(!s)continue;let c=Math.min(s.w-1,Math.max(0,Math.floor(a*s.w))),l=Math.min(s.h-1,Math.max(0,Math.floor(o*s.h)));if(s.a[l*s.w+c]>90)return i}return null}render(t){let n=this.kit,r=N(),a=this.lastT?r-this.lastT:.016;this.lastT=r,this.fpsAcc+=a,this.fpsN++,this.fpsAcc>.5&&(this.fps=this.fpsN/this.fpsAcc,this.fpsAcc=0,this.fpsN=0),this.frame++;let o=t.beat;t.bg.kind===`beam`&&this.renderSynth(r,t.pulse),this.drawBg(t.bg,this.t.a,r,o);let s=this.t.a,c=(e,t)=>{let[,i]=this.pp(`c0`,`c1`);n.draw(this.p[e],i,{uSrc:s.tex,uTime:r,...t}),s=i};if(t.bgFx){let a=i.era;if(a.on[3]||a.on[4]){let t=e.map((e,t)=>(t===3||t===4)&&a.on[t]?1:0);n.setArray(this.p.era,`uOn`,1,t),n.setArray(this.p.era,`uAmt`,1,a.amt),n.draw(this.p.era,this.t.era,{uCur:s.tex,uAtlas:s.tex,uHead:0,uFilled:1,uTime:r}),s=this.t.era}let o=i.moor;o.breakup.on&&c(`breakup`,{uBlock:o.breakup.block,uAmount:o.breakup.amount});let l=i.color;if(l.on){let e=[];for(let t=0;t<7;t++)e.push(...St(l.hues[t]+r*l.cycle,l.sat,1));n.setArray(this.p.color,`uPal`,3,e),n.draw(this.p.color,this.t.col,{uSrc:s.tex,uIn0:s.tex,uIn1:s.tex,uIn2:s.tex,uIn3:s.tex,uMixOn:[0,0,0,0],uBands:O(Math.max(2,Math.min(7,Math.round(l.bands)))),uGain:l.gain,uContrast:l.contrast,uSmooth:+!!l.smooth,uNeg:+!!l.neg,uMix:0}),s=this.t.col}let u=i.fb;if(u.on){let[e,i]=this.pp(`h0`,`h1`);n.draw(this.p.fb,i,{uCur:s.tex,uHist:e.tex,uMode:O(u.mode),uSize:u.size,uRotA:u.rot,uHue:u.hue,uDecay:u.decay,uAmt:u.mix,uPulse:t.pulse,uTime:r}),s=i}o.reshoot.on&&(n.draw(this.p.reshoot,this.t.rs,{uSrc:s.tex,uTint:o.reshoot.tint,uZoom:o.reshoot.zoom,uCurve:o.reshoot.curve,uTime:r}),s=this.t.rs)}t.dim>0&&c(`dim`,{uAmt:t.dim}),this.centres.clear(),this.lastLayers=t.layers;for(let e of t.layers){let i=e.g,a=this.dress(i,e.p,r,o),c=e.p.pos(r),l=this.fitOf(e.p),u={uPos:[e.x*(this.W/this.H),e.y],uScale:e.scale,uRotA:e.rot*Math.PI/180,uTiltA:e.tilt*Math.PI/180,uFit:l,uMirror:this.mirrorOf(e.p),uTime:r},d=0,f=null;if(i.kind===`tap`||i.kind===`person`){if(f=this.maskTex(i,a,c),!f)continue}else d=i.kind===`luma`?1:i.kind===`chroma`?2:3;n.draw(this.p.objmask,this.t.om,{...u,uMaskA:f?.a??this.labelTex,uMaskB:f?.b??this.labelTex,uMaskF:f?.f??0,uObj:a.raw.tex,uKind:O(d),uLuma:[i.key.lo,i.key.hi],uInvert:+!!i.key.invert,uKeyColor:oe(i.key.color),uShape:O(i.shape.type),uSize:i.shape.size,uRing:i.shape.ring,uSpin:i.shape.spin});let p=f?this.sourceToScreen(e,f.cx,f.cy):this.sourceToScreen(e,.5,.5);this.centres.set(e.key,p);let m=i.line>0||e.sel,h=this.W/this.maskW,g=140/h+8;m&&this.distance(this.t.om,this.t.odist,g);let _=[];for(let e of gt[i.linePal%gt.length])_.push(...oe(e));n.setArray(this.p.objcomp,`uPal`,3,_);let[,v]=this.pp(`c0`,`c1`);n.draw(this.p.objcomp,v,{...u,uCur:s.tex,uObj:a.out.tex,uMask:this.t.om.tex,uDist:this.t.odist.tex,uHasDist:+!!m,uMaxD:g*h,uLine:O(i.line),uLineSize:i.lineSize,uColor:oe(i.color),uCenter:p,uFillMode:O(0),uFill:this.labelTex,uFillFit:[1,1,0,0],uFillColor:[1,1,1],uSel:+!!e.sel,uPulse:t.pulse}),s=v}for(let[e,t]of this.rts)this.frame-t.used>120&&(this.freeRt(t),this.rts.delete(e));let l=i.scan,u=i.magnet.list.slice(0,2);if(l.on&&t.bgFx||u.length){let e=i.magnet,a=this.W/this.H,o=1+t.pulse*e.audio*2.5,c=[],d=[0,0,0,0];for(u.forEach((t,n)=>{let i=t.x,s=t.y;e.drift&&(i+=Math.sin(r*.31+n*2)*.12,s+=Math.cos(r*.23+n)*.12),c.push(i*a,s,t.s*o,t.r),d[n]=t.type});c.length<16;)c.push(0,0,0,1);let f=l.on&&t.bgFx,p=[];for(let e of l.osc)p.push(e.freq,e.rate,f?e.amp:0,e.wave);n.setArray(this.p.scan,`uMag`,4,c),n.setArray(this.p.scan,`uOsc`,4,p);let m=f?l:{hSize:1,vSize:1,hPos:0,vPos:0,rot:0,lines:0};n.draw(this.p.scan,this.t.sc,{uSrc:s.tex,uGeo:[m.hSize,m.vSize,m.hPos,m.vPos],uRot:m.rot*Math.PI/180,uLines:f?l.lines:u.length?262:0,uOscTarget:l.osc.map(e=>e.target),uAudio:t.pulse,uMagType:d,uMagN:O(u.length),uPurity:u.length?e.purity:0,uTime:r}),s=this.t.sc}let d=this.brush;if(d.active||this.fieldLive>0){d.active&&d.startHold&&(n.draw(this.p.copy,this.t.hold,{uSrc:s.tex}),d.startHold=!1);let e=.008+(1-i.tools.smear)*.05,[t,a]=this.pp(`f0`,`f1`);n.draw(this.p.field,a,{uPrev:t.tex,uBrush:[d.x,d.y,i.tools.size*(d.tool===2?.6:1),+!!d.active],uVel:[d.vx,d.vy],uTool:O(d.tool),uRelax:e}),d.vx*=.5,d.vy*=.5,this.fieldLive=d.active?400:this.fieldLive-1,n.draw(this.p.tools,this.t.tl,{uSrc:s.tex,uField:a.tex,uHold:this.t.hold.tex,uTime:r}),s=this.t.tl}let f=t.bg.kind===`player`?t.bg.p.pos(r):r,p=this.cg.render(r,f);p&&this.upload(this.cgTex,this.cg.canvas,!0);let[m,h]=this.pp(`p0`,`p1`);n.draw(this.p.cg,h,{uSrc:s.tex,uCg:this.cgTex,uOn:+!!p});let g=i.vhs;if(n.draw(this.p.analog,null,{uSrc:h.tex,uPrev:m.tex,uStandby:this.standbyTex,uTime:r,uBleed:g.bleed,uScan:g.scan,uTrack:g.track,uChroma:g.chroma,uRoll:0,uLines:g.lines,uInterlace:g.interlace,uNoise:g.noise,uSat:g.sat,uBox43:+!!g.box43,uHead:g.head,uField:this.frame%2,uWarm:g.warm,uInvert:0,uTear:0,uSnow:0,uBars:0,uStandbyOn:0,uJitter:0,uFlipY:0},[this.W,this.H]),this.grabbers.length){let e=document.createElement(`canvas`),t=200/Math.max(this.W,this.H);e.width=Math.round(this.W*t),e.height=Math.round(this.H*t),e.getContext(`2d`).drawImage(this.canvas,0,0,e.width,e.height);let n=e.toDataURL(`image/jpeg`,.75);this.grabbers.splice(0).forEach(e=>e(n))}}grab(e=500){return new Promise(t=>{this.grabbers.push(t),setTimeout(()=>t(``),e)})}};function St(e,t,n){e=(e%1+1)%1;let r=r=>{let i=(r+e*6)%6;return n-n*t*Math.max(0,Math.min(i,4-i,1))};return[r(5),r(3),r(1)]}var Ct=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},F=(e,t,n)=>(Ct(e,t,`read from private field`),n?n.call(e):t.get(e)),I=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},L=(e,t,n,r)=>(Ct(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),wt=(e,t,n,r)=>({set _(r){L(e,t,r,n)},get _(){return F(e,t,r)}}),R=(e,t,n)=>(Ct(e,t,`access private method`),n),z=new Uint8Array(8),Tt=new DataView(z.buffer),B=e=>[(e%256+256)%256],V=e=>(Tt.setUint16(0,e,!1),[z[0],z[1]]),Et=e=>(Tt.setInt16(0,e,!1),[z[0],z[1]]),Dt=e=>(Tt.setUint32(0,e,!1),[z[1],z[2],z[3]]),H=e=>(Tt.setUint32(0,e,!1),[z[0],z[1],z[2],z[3]]),Ot=e=>(Tt.setInt32(0,e,!1),[z[0],z[1],z[2],z[3]]),kt=e=>(Tt.setUint32(0,Math.floor(e/2**32),!1),Tt.setUint32(4,e,!1),[z[0],z[1],z[2],z[3],z[4],z[5],z[6],z[7]]),At=e=>(Tt.setInt16(0,256*e,!1),[z[0],z[1]]),jt=e=>(Tt.setInt32(0,2**16*e,!1),[z[0],z[1],z[2],z[3]]),Mt=e=>(Tt.setInt32(0,2**30*e,!1),[z[0],z[1],z[2],z[3]]),Nt=(e,t=!1)=>{let n=Array(e.length).fill(null).map((t,n)=>e.charCodeAt(n));return t&&n.push(0),n},Pt=e=>e&&e[e.length-1],Ft=e=>{let t;for(let n of e)(!t||n.presentationTimestamp>t.presentationTimestamp)&&(t=n);return t},It=(e,t,n=!0)=>{let r=e*t;return n?Math.round(r):r},Lt=e=>{let t=Math.PI/180*e,n=Math.cos(t),r=Math.sin(t);return[n,r,0,-r,n,0,0,0,1]},Rt=Lt(0),zt=e=>[jt(e[0]),jt(e[1]),Mt(e[2]),jt(e[3]),jt(e[4]),Mt(e[5]),jt(e[6]),jt(e[7]),Mt(e[8])],Bt=e=>!e||typeof e!=`object`?e:Array.isArray(e)?e.map(Bt):Object.fromEntries(Object.entries(e).map(([e,t])=>[e,Bt(t)])),Vt=e=>e>=0&&e<2**32,U=(e,t,n)=>({type:e,contents:t&&new Uint8Array(t.flat(10)),children:n}),W=(e,t,n,r,i)=>U(e,[B(t),Dt(n),r??[]],i),Ht=e=>e.fragmented?U(`ftyp`,[Nt(`iso5`),H(512),Nt(`iso5`),Nt(`iso6`),Nt(`mp41`)]):U(`ftyp`,[Nt(`isom`),H(512),Nt(`isom`),e.holdsAvc?Nt(`avc1`):[],Nt(`mp41`)]),Ut=e=>({type:`mdat`,largeSize:e}),Wt=e=>({type:`free`,size:e}),Gt=(e,t,n=!1)=>U(`moov`,null,[Kt(t,e),...e.map(e=>qt(e,t)),n?Tn(e):null]),Kt=(e,t)=>{let n=It(Math.max(0,...t.filter(e=>e.samples.length>0).map(e=>{let t=Ft(e.samples);return t.presentationTimestamp+t.duration})),_r),r=Math.max(...t.map(e=>e.id))+1,i=!Vt(e)||!Vt(n),a=i?kt:H;return W(`mvhd`,+i,0,[a(e),a(e),H(_r),a(n),jt(1),At(1),Array(10).fill(0),zt(Rt),Array(24).fill(0),H(r)])},qt=(e,t)=>U(`trak`,null,[Jt(e,t),Yt(e,t)]),Jt=(e,t)=>{let n=Ft(e.samples),r=It(n?n.presentationTimestamp+n.duration:0,_r),i=!Vt(t)||!Vt(r),a=i?kt:H,o;return o=e.info.type===`video`?typeof e.info.rotation==`number`?Lt(e.info.rotation):e.info.rotation:Rt,W(`tkhd`,+i,3,[a(t),a(t),H(e.id),H(0),a(r),Array(8).fill(0),V(0),V(0),At(+(e.info.type===`audio`)),V(0),zt(o),jt(e.info.type===`video`?e.info.width:0),jt(e.info.type===`video`?e.info.height:0)])},Yt=(e,t)=>U(`mdia`,null,[Xt(e,t),Zt(e.info.type===`video`?`vide`:`soun`),Qt(e)]),Xt=(e,t)=>{let n=Ft(e.samples),r=It(n?n.presentationTimestamp+n.duration:0,e.timescale),i=!Vt(t)||!Vt(r),a=i?kt:H;return W(`mdhd`,+i,0,[a(t),a(t),H(e.timescale),a(r),V(21956),V(0)])},Zt=e=>W(`hdlr`,0,0,[Nt(`mhlr`),Nt(e),H(0),H(0),H(0),Nt(`mp4-muxer-hdlr`,!0)]),Qt=e=>U(`minf`,null,[e.info.type===`video`?$t():en(),tn(),an(e)]),$t=()=>W(`vmhd`,0,1,[V(0),V(0),V(0),V(0)]),en=()=>W(`smhd`,0,0,[V(0),V(0)]),tn=()=>U(`dinf`,null,[nn()]),nn=()=>W(`dref`,0,0,[H(1)],[rn()]),rn=()=>W(`url `,0,1),an=e=>{let t=e.compositionTimeOffsetTable.length>1||e.compositionTimeOffsetTable.some(e=>e.sampleCompositionTimeOffset!==0);return U(`stbl`,null,[on(e),yn(e),bn(e),xn(e),Sn(e),Cn(e),t?wn(e):null])},on=e=>W(`stsd`,0,0,[H(1)],[e.info.type===`video`?sn(Ln[e.info.codec],e):gn(zn[e.info.codec],e)]),sn=(e,t)=>U(e,[[,,,,,,].fill(0),V(1),V(0),V(0),Array(12).fill(0),V(t.info.width),V(t.info.height),H(4718592),H(4718592),H(0),V(1),Array(32).fill(0),V(24),Et(65535)],[Rn[t.info.codec](t),t.info.decoderConfig.colorSpace?dn(t):null]),cn={bt709:1,bt470bg:5,smpte170m:6},ln={bt709:1,smpte170m:6,"iec61966-2-1":13},un={rgb:0,bt709:1,bt470bg:5,smpte170m:6},dn=e=>U(`colr`,[Nt(`nclx`),V(cn[e.info.decoderConfig.colorSpace.primaries]),V(ln[e.info.decoderConfig.colorSpace.transfer]),V(un[e.info.decoderConfig.colorSpace.matrix]),B(!!e.info.decoderConfig.colorSpace.fullRange<<7)]),fn=e=>e.info.decoderConfig&&U(`avcC`,[...new Uint8Array(e.info.decoderConfig.description)]),pn=e=>e.info.decoderConfig&&U(`hvcC`,[...new Uint8Array(e.info.decoderConfig.description)]),mn=e=>{if(!e.info.decoderConfig)return null;let t=e.info.decoderConfig;if(!t.colorSpace)throw Error(`'colorSpace' is required in the decoder config for VP9.`);let n=t.codec.split(`.`),r=Number(n[1]),i=Number(n[2]),a=(Number(n[3])<<4)+0+Number(t.colorSpace.fullRange);return W(`vpcC`,1,0,[B(r),B(i),B(a),B(2),B(2),B(2),V(0)])},hn=()=>U(`av1C`,[129,0,0,0]),gn=(e,t)=>U(e,[[,,,,,,].fill(0),V(1),V(0),V(0),H(0),V(t.info.numberOfChannels),V(16),V(0),V(0),jt(t.info.sampleRate)],[Bn[t.info.codec](t)]),_n=e=>{let t=new Uint8Array(e.info.decoderConfig.description);return W(`esds`,0,0,[H(58753152),B(32+t.byteLength),V(1),B(0),H(75530368),B(18+t.byteLength),B(64),B(21),Dt(0),H(130071),H(130071),H(92307584),B(t.byteLength),...t,H(109084800),B(1),B(2)])},vn=e=>{let t=3840,n=0,r=e.info.decoderConfig?.description;if(r){if(r.byteLength<18)throw TypeError(`Invalid decoder description provided for Opus; must be at least 18 bytes long.`);let e=ArrayBuffer.isView(r)?new DataView(r.buffer,r.byteOffset,r.byteLength):new DataView(r);t=e.getUint16(10,!0),n=e.getInt16(14,!0)}return U(`dOps`,[B(0),B(e.info.numberOfChannels),V(t),H(e.info.sampleRate),At(n),B(0)])},yn=e=>W(`stts`,0,0,[H(e.timeToSampleTable.length),e.timeToSampleTable.map(e=>[H(e.sampleCount),H(e.sampleDelta)])]),bn=e=>{if(e.samples.every(e=>e.type===`key`))return null;let t=[...e.samples.entries()].filter(([,e])=>e.type===`key`);return W(`stss`,0,0,[H(t.length),t.map(([e])=>H(e+1))])},xn=e=>W(`stsc`,0,0,[H(e.compactlyCodedChunkTable.length),e.compactlyCodedChunkTable.map(e=>[H(e.firstChunk),H(e.samplesPerChunk),H(1)])]),Sn=e=>W(`stsz`,0,0,[H(0),H(e.samples.length),e.samples.map(e=>H(e.size))]),Cn=e=>e.finalizedChunks.length>0&&Pt(e.finalizedChunks).offset>=2**32?W(`co64`,0,0,[H(e.finalizedChunks.length),e.finalizedChunks.map(e=>kt(e.offset))]):W(`stco`,0,0,[H(e.finalizedChunks.length),e.finalizedChunks.map(e=>H(e.offset))]),wn=e=>W(`ctts`,0,0,[H(e.compositionTimeOffsetTable.length),e.compositionTimeOffsetTable.map(e=>[H(e.sampleCount),H(e.sampleCompositionTimeOffset)])]),Tn=e=>U(`mvex`,null,e.map(En)),En=e=>W(`trex`,0,0,[H(e.id),H(1),H(0),H(0),H(0)]),Dn=(e,t)=>U(`moof`,null,[On(e),...t.map(An)]),On=e=>W(`mfhd`,0,0,[H(e)]),kn=e=>{let t=0,n=0,r=e.type===`delta`;return n|=+r,t|=r?1:2,t<<24|n<<16},An=e=>U(`traf`,null,[jn(e),Mn(e),Nn(e)]),jn=e=>{let t=0;t|=8,t|=16,t|=32,t|=131072;let n=e.currentChunk.samples[1]??e.currentChunk.samples[0],r={duration:n.timescaleUnitsToNextSample,size:n.size,flags:kn(n)};return W(`tfhd`,0,t,[H(e.id),H(r.duration),H(r.size),H(r.flags)])},Mn=e=>W(`tfdt`,1,0,[kt(It(e.currentChunk.startTimestamp,e.timescale))]),Nn=e=>{let t=e.currentChunk.samples.map(e=>e.timescaleUnitsToNextSample),n=e.currentChunk.samples.map(e=>e.size),r=e.currentChunk.samples.map(kn),i=e.currentChunk.samples.map(t=>It(t.presentationTimestamp-t.decodeTimestamp,e.timescale)),a=new Set(t),o=new Set(n),s=new Set(r),c=new Set(i),l=s.size===2&&r[0]!==r[1],u=a.size>1,d=o.size>1,f=!l&&s.size>1,p=c.size>1||[...c].some(e=>e!==0),m=0;return m|=1,m|=4*l,m|=256*u,m|=512*d,m|=1024*f,m|=2048*p,W(`trun`,1,m,[H(e.currentChunk.samples.length),H(e.currentChunk.offset-e.currentChunk.moofOffset||0),l?H(r[0]):[],e.currentChunk.samples.map((e,a)=>[u?H(t[a]):[],d?H(n[a]):[],f?H(r[a]):[],p?Ot(i[a]):[]])])},Pn=e=>U(`mfra`,null,[...e.map(Fn),In()]),Fn=(e,t)=>W(`tfra`,1,0,[H(e.id),H(63),H(e.finalizedChunks.length),e.finalizedChunks.map(n=>[kt(It(n.startTimestamp,e.timescale)),kt(n.moofOffset),H(t+1),H(1),H(1)])]),In=()=>W(`mfro`,0,0,[H(0)]),Ln={avc:`avc1`,hevc:`hvc1`,vp9:`vp09`,av1:`av01`},Rn={avc:fn,hevc:pn,vp9:mn,av1:hn},zn={aac:`mp4a`,opus:`Opus`},Bn={aac:_n,opus:vn},Vn=class{},Hn=class extends Vn{constructor(){super(...arguments),this.buffer=null}},Un=class extends Vn{constructor(e){if(super(),this.options=e,typeof e!=`object`)throw TypeError(`StreamTarget requires an options object to be passed to its constructor.`);if(e.onData){if(typeof e.onData!=`function`)throw TypeError(`options.onData, when provided, must be a function.`);if(e.onData.length<2)throw TypeError(`options.onData, when provided, must be a function that takes in at least two arguments (data and position). Ignoring the position argument, which specifies the byte offset at which the data is to be written, can lead to broken outputs.`)}if(e.chunked!==void 0&&typeof e.chunked!=`boolean`)throw TypeError(`options.chunked, when provided, must be a boolean.`);if(e.chunkSize!==void 0&&(!Number.isInteger(e.chunkSize)||e.chunkSize<1024))throw TypeError(`options.chunkSize, when provided, must be an integer and not smaller than 1024.`)}},Wn=class extends Vn{constructor(e,t){if(super(),this.stream=e,this.options=t,!(e instanceof FileSystemWritableFileStream))throw TypeError(`FileSystemWritableFileStreamTarget requires a FileSystemWritableFileStream instance.`);if(t!==void 0&&typeof t!=`object`)throw TypeError(`FileSystemWritableFileStreamTarget's options, when provided, must be an object.`);if(t&&t.chunkSize!==void 0&&(!Number.isInteger(t.chunkSize)||t.chunkSize<=0))throw TypeError(`options.chunkSize, when provided, must be a positive integer`)}},Gn,Kn,qn=class{constructor(){this.pos=0,I(this,Gn,new Uint8Array(8)),I(this,Kn,new DataView(F(this,Gn).buffer)),this.offsets=new WeakMap}seek(e){this.pos=e}writeU32(e){F(this,Kn).setUint32(0,e,!1),this.write(F(this,Gn).subarray(0,4))}writeU64(e){F(this,Kn).setUint32(0,Math.floor(e/2**32),!1),F(this,Kn).setUint32(4,e,!1),this.write(F(this,Gn).subarray(0,8))}writeAscii(e){for(let t=0;t<e.length;t++)F(this,Kn).setUint8(t%8,e.charCodeAt(t)),t%8==7&&this.write(F(this,Gn));e.length%8!=0&&this.write(F(this,Gn).subarray(0,e.length%8))}writeBox(e){if(this.offsets.set(e,this.pos),e.contents&&!e.children)this.writeBoxHeader(e,e.size??e.contents.byteLength+8),this.write(e.contents);else{let t=this.pos;if(this.writeBoxHeader(e,0),e.contents&&this.write(e.contents),e.children)for(let t of e.children)t&&this.writeBox(t);let n=this.pos,r=e.size??n-t;this.seek(t),this.writeBoxHeader(e,r),this.seek(n)}}writeBoxHeader(e,t){this.writeU32(e.largeSize?1:t),this.writeAscii(e.type),e.largeSize&&this.writeU64(t)}measureBoxHeader(e){return 8+(e.largeSize?8:0)}patchBox(e){let t=this.pos;this.seek(this.offsets.get(e)),this.writeBox(e),this.seek(t)}measureBox(e){if(e.contents&&!e.children)return this.measureBoxHeader(e)+e.contents.byteLength;{let t=this.measureBoxHeader(e);if(e.contents&&(t+=e.contents.byteLength),e.children)for(let n of e.children)n&&(t+=this.measureBox(n));return t}}};Gn=new WeakMap,Kn=new WeakMap;var Jn,Yn,Xn,Zn,Qn,$n,er=class extends qn{constructor(e){super(),I(this,Qn),I(this,Jn,void 0),I(this,Yn,new ArrayBuffer(2**16)),I(this,Xn,new Uint8Array(F(this,Yn))),I(this,Zn,0),L(this,Jn,e)}write(e){R(this,Qn,$n).call(this,this.pos+e.byteLength),F(this,Xn).set(e,this.pos),this.pos+=e.byteLength,L(this,Zn,Math.max(F(this,Zn),this.pos))}finalize(){R(this,Qn,$n).call(this,this.pos),F(this,Jn).buffer=F(this,Yn).slice(0,Math.max(F(this,Zn),this.pos))}};Jn=new WeakMap,Yn=new WeakMap,Xn=new WeakMap,Zn=new WeakMap,Qn=new WeakSet,$n=function(e){let t=F(this,Yn).byteLength;for(;t<e;)t*=2;if(t===F(this,Yn).byteLength)return;let n=new ArrayBuffer(t),r=new Uint8Array(n);r.set(F(this,Xn),0),L(this,Yn,n),L(this,Xn,r)};var tr=2**24,nr=2,rr,ir,ar,or,G,sr,cr,lr,ur,dr,fr,pr,mr,hr=class extends qn{constructor(e){super(),I(this,sr),I(this,lr),I(this,dr),I(this,pr),I(this,rr,void 0),I(this,ir,[]),I(this,ar,void 0),I(this,or,void 0),I(this,G,[]),L(this,rr,e),L(this,ar,e.options?.chunked??!1),L(this,or,e.options?.chunkSize??tr)}write(e){F(this,ir).push({data:e.slice(),start:this.pos}),this.pos+=e.byteLength}flush(){if(F(this,ir).length===0)return;let e=[],t=[...F(this,ir)].sort((e,t)=>e.start-t.start);e.push({start:t[0].start,size:t[0].data.byteLength});for(let n=1;n<t.length;n++){let r=e[e.length-1],i=t[n];i.start<=r.start+r.size?r.size=Math.max(r.size,i.start+i.data.byteLength-r.start):e.push({start:i.start,size:i.data.byteLength})}for(let t of e){t.data=new Uint8Array(t.size);for(let e of F(this,ir))t.start<=e.start&&e.start<t.start+t.size&&t.data.set(e.data,e.start-t.start);F(this,ar)?(R(this,sr,cr).call(this,t.data,t.start),R(this,pr,mr).call(this)):F(this,rr).options.onData?.(t.data,t.start)}F(this,ir).length=0}finalize(){F(this,ar)&&R(this,pr,mr).call(this,!0)}};rr=new WeakMap,ir=new WeakMap,ar=new WeakMap,or=new WeakMap,G=new WeakMap,sr=new WeakSet,cr=function(e,t){let n=F(this,G).findIndex(e=>e.start<=t&&t<e.start+F(this,or));n===-1&&(n=R(this,dr,fr).call(this,t));let r=F(this,G)[n],i=t-r.start,a=e.subarray(0,Math.min(F(this,or)-i,e.byteLength));r.data.set(a,i);let o={start:i,end:i+a.byteLength};if(R(this,lr,ur).call(this,r,o),r.written[0].start===0&&r.written[0].end===F(this,or)&&(r.shouldFlush=!0),F(this,G).length>nr){for(let e=0;e<F(this,G).length-1;e++)F(this,G)[e].shouldFlush=!0;R(this,pr,mr).call(this)}a.byteLength<e.byteLength&&R(this,sr,cr).call(this,e.subarray(a.byteLength),t+a.byteLength)},lr=new WeakSet,ur=function(e,t){let n=0,r=e.written.length-1,i=-1;for(;n<=r;){let a=Math.floor(n+(r-n+1)/2);e.written[a].start<=t.start?(n=a+1,i=a):r=a-1}for(e.written.splice(i+1,0,t),(i===-1||e.written[i].end<t.start)&&i++;i<e.written.length-1&&e.written[i].end>=e.written[i+1].start;)e.written[i].end=Math.max(e.written[i].end,e.written[i+1].end),e.written.splice(i+1,1)},dr=new WeakSet,fr=function(e){let t={start:Math.floor(e/F(this,or))*F(this,or),data:new Uint8Array(F(this,or)),written:[],shouldFlush:!1};return F(this,G).push(t),F(this,G).sort((e,t)=>e.start-t.start),F(this,G).indexOf(t)},pr=new WeakSet,mr=function(e=!1){for(let t=0;t<F(this,G).length;t++){let n=F(this,G)[t];if(n.shouldFlush||e){for(let e of n.written)F(this,rr).options.onData?.(n.data.subarray(e.start,e.end),n.start+e.start);F(this,G).splice(t--,1)}}};var gr=class extends hr{constructor(e){super(new Un({onData:(t,n)=>e.stream.write({type:`write`,data:t,position:n}),chunked:!0,chunkSize:e.options?.chunkSize}))}},_r=1e3,vr=[`avc`,`hevc`,`vp9`,`av1`],yr=[`aac`,`opus`],br=2082844800,xr=[`strict`,`offset`,`cross-track-offset`],K,q,Sr,Cr,J,Y,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei=class{constructor(e){if(I(this,Ar),I(this,Mr),I(this,Pr),I(this,Ir),I(this,Rr),I(this,Br),I(this,Hr),I(this,Wr),I(this,Kr),I(this,Jr),I(this,Xr),I(this,Qr),I(this,K,void 0),I(this,q,void 0),I(this,Sr,void 0),I(this,Cr,void 0),I(this,J,null),I(this,Y,null),I(this,wr,Math.floor(Date.now()/1e3)+br),I(this,Tr,[]),I(this,Er,1),I(this,Dr,[]),I(this,Or,[]),I(this,kr,!1),R(this,Ar,jr).call(this,e),e.video=Bt(e.video),e.audio=Bt(e.audio),e.fastStart=Bt(e.fastStart),this.target=e.target,L(this,K,{firstTimestampBehavior:`strict`,...e}),e.target instanceof Hn)L(this,q,new er(e.target));else if(e.target instanceof Un)L(this,q,new hr(e.target));else if(e.target instanceof Wn)L(this,q,new gr(e.target));else throw Error(`Invalid target: ${e.target}`);R(this,Ir,Lr).call(this),R(this,Mr,Nr).call(this)}addVideoChunk(e,t,n,r){if(!(e instanceof EncodedVideoChunk))throw TypeError(`addVideoChunk's first argument (sample) must be of type EncodedVideoChunk.`);if(t&&typeof t!=`object`)throw TypeError(`addVideoChunk's second argument (meta), when provided, must be an object.`);if(n!==void 0&&(!Number.isFinite(n)||n<0))throw TypeError(`addVideoChunk's third argument (timestamp), when provided, must be a non-negative real number.`);if(r!==void 0&&!Number.isFinite(r))throw TypeError(`addVideoChunk's fourth argument (compositionTimeOffset), when provided, must be a real number.`);let i=new Uint8Array(e.byteLength);e.copyTo(i),this.addVideoChunkRaw(i,e.type,n??e.timestamp,e.duration,t,r)}addVideoChunkRaw(e,t,n,r,i,a){if(!(e instanceof Uint8Array))throw TypeError(`addVideoChunkRaw's first argument (data) must be an instance of Uint8Array.`);if(t!==`key`&&t!==`delta`)throw TypeError(`addVideoChunkRaw's second argument (type) must be either 'key' or 'delta'.`);if(!Number.isFinite(n)||n<0)throw TypeError(`addVideoChunkRaw's third argument (timestamp) must be a non-negative real number.`);if(!Number.isFinite(r)||r<0)throw TypeError(`addVideoChunkRaw's fourth argument (duration) must be a non-negative real number.`);if(i&&typeof i!=`object`)throw TypeError(`addVideoChunkRaw's fifth argument (meta), when provided, must be an object.`);if(a!==void 0&&!Number.isFinite(a))throw TypeError(`addVideoChunkRaw's sixth argument (compositionTimeOffset), when provided, must be a real number.`);if(R(this,Qr,$r).call(this),!F(this,K).video)throw Error(`No video track declared.`);if(typeof F(this,K).fastStart==`object`&&F(this,J).samples.length===F(this,K).fastStart.expectedVideoChunks)throw Error(`Cannot add more video chunks than specified in 'fastStart' (${F(this,K).fastStart.expectedVideoChunks}).`);let o=R(this,Br,Vr).call(this,F(this,J),e,t,n,r,i,a);if(F(this,K).fastStart===`fragmented`&&F(this,Y)){for(;F(this,Or).length>0&&F(this,Or)[0].decodeTimestamp<=o.decodeTimestamp;){let e=F(this,Or).shift();R(this,Hr,Ur).call(this,F(this,Y),e)}o.decodeTimestamp<=F(this,Y).lastDecodeTimestamp?R(this,Hr,Ur).call(this,F(this,J),o):F(this,Dr).push(o)}else R(this,Hr,Ur).call(this,F(this,J),o)}addAudioChunk(e,t,n){if(!(e instanceof EncodedAudioChunk))throw TypeError(`addAudioChunk's first argument (sample) must be of type EncodedAudioChunk.`);if(t&&typeof t!=`object`)throw TypeError(`addAudioChunk's second argument (meta), when provided, must be an object.`);if(n!==void 0&&(!Number.isFinite(n)||n<0))throw TypeError(`addAudioChunk's third argument (timestamp), when provided, must be a non-negative real number.`);let r=new Uint8Array(e.byteLength);e.copyTo(r),this.addAudioChunkRaw(r,e.type,n??e.timestamp,e.duration,t)}addAudioChunkRaw(e,t,n,r,i){if(!(e instanceof Uint8Array))throw TypeError(`addAudioChunkRaw's first argument (data) must be an instance of Uint8Array.`);if(t!==`key`&&t!==`delta`)throw TypeError(`addAudioChunkRaw's second argument (type) must be either 'key' or 'delta'.`);if(!Number.isFinite(n)||n<0)throw TypeError(`addAudioChunkRaw's third argument (timestamp) must be a non-negative real number.`);if(!Number.isFinite(r)||r<0)throw TypeError(`addAudioChunkRaw's fourth argument (duration) must be a non-negative real number.`);if(i&&typeof i!=`object`)throw TypeError(`addAudioChunkRaw's fifth argument (meta), when provided, must be an object.`);if(R(this,Qr,$r).call(this),!F(this,K).audio)throw Error(`No audio track declared.`);if(typeof F(this,K).fastStart==`object`&&F(this,Y).samples.length===F(this,K).fastStart.expectedAudioChunks)throw Error(`Cannot add more audio chunks than specified in 'fastStart' (${F(this,K).fastStart.expectedAudioChunks}).`);let a=R(this,Br,Vr).call(this,F(this,Y),e,t,n,r,i);if(F(this,K).fastStart===`fragmented`&&F(this,J)){for(;F(this,Dr).length>0&&F(this,Dr)[0].decodeTimestamp<=a.decodeTimestamp;){let e=F(this,Dr).shift();R(this,Hr,Ur).call(this,F(this,J),e)}a.decodeTimestamp<=F(this,J).lastDecodeTimestamp?R(this,Hr,Ur).call(this,F(this,Y),a):F(this,Or).push(a)}else R(this,Hr,Ur).call(this,F(this,Y),a)}finalize(){if(F(this,kr))throw Error(`Cannot finalize a muxer more than once.`);if(F(this,K).fastStart===`fragmented`){for(let e of F(this,Dr))R(this,Hr,Ur).call(this,F(this,J),e);for(let e of F(this,Or))R(this,Hr,Ur).call(this,F(this,Y),e);R(this,Jr,Yr).call(this,!1)}else F(this,J)&&R(this,Kr,qr).call(this,F(this,J)),F(this,Y)&&R(this,Kr,qr).call(this,F(this,Y));let e=[F(this,J),F(this,Y)].filter(Boolean);if(F(this,K).fastStart===`in-memory`){let t;for(let n=0;n<2;n++){let n=Gt(e,F(this,wr)),r=F(this,q).measureBox(n);t=F(this,q).measureBox(F(this,Cr));let i=F(this,q).pos+r+t;for(let e of F(this,Tr)){e.offset=i;for(let{data:n}of e.samples)i+=n.byteLength,t+=n.byteLength}if(i<2**32)break;t>=2**32&&(F(this,Cr).largeSize=!0)}let n=Gt(e,F(this,wr));F(this,q).writeBox(n),F(this,Cr).size=t,F(this,q).writeBox(F(this,Cr));for(let e of F(this,Tr))for(let t of e.samples)F(this,q).write(t.data),t.data=null}else if(F(this,K).fastStart===`fragmented`){let t=F(this,q).pos,n=Pn(e);F(this,q).writeBox(n);let r=F(this,q).pos-t;F(this,q).seek(F(this,q).pos-4),F(this,q).writeU32(r)}else{let t=F(this,q).offsets.get(F(this,Cr)),n=F(this,q).pos-t;F(this,Cr).size=n,F(this,Cr).largeSize=n>=2**32,F(this,q).patchBox(F(this,Cr));let r=Gt(e,F(this,wr));if(typeof F(this,K).fastStart==`object`){F(this,q).seek(F(this,Sr)),F(this,q).writeBox(r);let e=t-F(this,q).pos;F(this,q).writeBox(Wt(e))}else F(this,q).writeBox(r)}R(this,Xr,Zr).call(this),F(this,q).finalize(),L(this,kr,!0)}};K=new WeakMap,q=new WeakMap,Sr=new WeakMap,Cr=new WeakMap,J=new WeakMap,Y=new WeakMap,wr=new WeakMap,Tr=new WeakMap,Er=new WeakMap,Dr=new WeakMap,Or=new WeakMap,kr=new WeakMap,Ar=new WeakSet,jr=function(e){if(typeof e!=`object`)throw TypeError(`The muxer requires an options object to be passed to its constructor.`);if(!(e.target instanceof Vn))throw TypeError(`The target must be provided and an instance of Target.`);if(e.video){if(!vr.includes(e.video.codec))throw TypeError(`Unsupported video codec: ${e.video.codec}`);if(!Number.isInteger(e.video.width)||e.video.width<=0)throw TypeError(`Invalid video width: ${e.video.width}. Must be a positive integer.`);if(!Number.isInteger(e.video.height)||e.video.height<=0)throw TypeError(`Invalid video height: ${e.video.height}. Must be a positive integer.`);let t=e.video.rotation;if(typeof t==`number`&&![0,90,180,270].includes(t))throw TypeError(`Invalid video rotation: ${t}. Has to be 0, 90, 180 or 270.`);if(Array.isArray(t)&&(t.length!==9||t.some(e=>typeof e!=`number`)))throw TypeError(`Invalid video transformation matrix: ${t.join()}`);if(e.video.frameRate!==void 0&&(!Number.isInteger(e.video.frameRate)||e.video.frameRate<=0))throw TypeError(`Invalid video frame rate: ${e.video.frameRate}. Must be a positive integer.`)}if(e.audio){if(!yr.includes(e.audio.codec))throw TypeError(`Unsupported audio codec: ${e.audio.codec}`);if(!Number.isInteger(e.audio.numberOfChannels)||e.audio.numberOfChannels<=0)throw TypeError(`Invalid number of audio channels: ${e.audio.numberOfChannels}. Must be a positive integer.`);if(!Number.isInteger(e.audio.sampleRate)||e.audio.sampleRate<=0)throw TypeError(`Invalid audio sample rate: ${e.audio.sampleRate}. Must be a positive integer.`)}if(e.firstTimestampBehavior&&!xr.includes(e.firstTimestampBehavior))throw TypeError(`Invalid first timestamp behavior: ${e.firstTimestampBehavior}`);if(typeof e.fastStart==`object`){if(e.video){if(e.fastStart.expectedVideoChunks===void 0)throw TypeError(`'fastStart' is an object but is missing property 'expectedVideoChunks'.`);if(!Number.isInteger(e.fastStart.expectedVideoChunks)||e.fastStart.expectedVideoChunks<0)throw TypeError(`'expectedVideoChunks' must be a non-negative integer.`)}if(e.audio){if(e.fastStart.expectedAudioChunks===void 0)throw TypeError(`'fastStart' is an object but is missing property 'expectedAudioChunks'.`);if(!Number.isInteger(e.fastStart.expectedAudioChunks)||e.fastStart.expectedAudioChunks<0)throw TypeError(`'expectedAudioChunks' must be a non-negative integer.`)}}else if(![!1,`in-memory`,`fragmented`].includes(e.fastStart))throw TypeError(`'fastStart' option must be false, 'in-memory', 'fragmented' or an object.`);if(e.minFragmentDuration!==void 0&&(!Number.isFinite(e.minFragmentDuration)||e.minFragmentDuration<0))throw TypeError(`'minFragmentDuration' must be a non-negative number.`)},Mr=new WeakSet,Nr=function(){if(F(this,q).writeBox(Ht({holdsAvc:F(this,K).video?.codec===`avc`,fragmented:F(this,K).fastStart===`fragmented`})),L(this,Sr,F(this,q).pos),F(this,K).fastStart===`in-memory`)L(this,Cr,Ut(!1));else if(F(this,K).fastStart!==`fragmented`){if(typeof F(this,K).fastStart==`object`){let e=R(this,Pr,Fr).call(this);F(this,q).seek(F(this,q).pos+e)}L(this,Cr,Ut(!0)),F(this,q).writeBox(F(this,Cr))}R(this,Xr,Zr).call(this)},Pr=new WeakSet,Fr=function(){if(typeof F(this,K).fastStart!=`object`)return;let e=0,t=[F(this,K).fastStart.expectedVideoChunks,F(this,K).fastStart.expectedAudioChunks];for(let n of t)n&&(e+=8*Math.ceil(2/3*n),e+=4*n,e+=12*Math.ceil(2/3*n),e+=4*n,e+=8*n);return e+=4096,e},Ir=new WeakSet,Lr=function(){if(F(this,K).video&&L(this,J,{id:1,info:{type:`video`,codec:F(this,K).video.codec,width:F(this,K).video.width,height:F(this,K).video.height,rotation:F(this,K).video.rotation??0,decoderConfig:null},timescale:F(this,K).video.frameRate??57600,samples:[],finalizedChunks:[],currentChunk:null,firstDecodeTimestamp:void 0,lastDecodeTimestamp:-1,timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,compactlyCodedChunkTable:[]}),F(this,K).audio&&(L(this,Y,{id:F(this,K).video?2:1,info:{type:`audio`,codec:F(this,K).audio.codec,numberOfChannels:F(this,K).audio.numberOfChannels,sampleRate:F(this,K).audio.sampleRate,decoderConfig:null},timescale:F(this,K).audio.sampleRate,samples:[],finalizedChunks:[],currentChunk:null,firstDecodeTimestamp:void 0,lastDecodeTimestamp:-1,timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,compactlyCodedChunkTable:[]}),F(this,K).audio.codec===`aac`)){let e=R(this,Rr,zr).call(this,2,F(this,K).audio.sampleRate,F(this,K).audio.numberOfChannels);F(this,Y).info.decoderConfig={codec:F(this,K).audio.codec,description:e,numberOfChannels:F(this,K).audio.numberOfChannels,sampleRate:F(this,K).audio.sampleRate}}},Rr=new WeakSet,zr=function(e,t,n){let r=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350].indexOf(t),i=n,a=``;a+=e.toString(2).padStart(5,`0`),a+=r.toString(2).padStart(4,`0`),r===15&&(a+=t.toString(2).padStart(24,`0`)),a+=i.toString(2).padStart(4,`0`);let o=Math.ceil(a.length/8)*8;a=a.padEnd(o,`0`);let s=new Uint8Array(a.length/8);for(let e=0;e<a.length;e+=8)s[e/8]=parseInt(a.slice(e,e+8),2);return s},Br=new WeakSet,Vr=function(e,t,n,r,i,a,o){let s=r/1e6,c=(r-(o??0))/1e6,l=i/1e6,u=R(this,Wr,Gr).call(this,s,c,e);return s=u.presentationTimestamp,c=u.decodeTimestamp,a?.decoderConfig&&(e.info.decoderConfig===null?e.info.decoderConfig=a.decoderConfig:Object.assign(e.info.decoderConfig,a.decoderConfig)),{presentationTimestamp:s,decodeTimestamp:c,duration:l,data:t,size:t.byteLength,type:n,timescaleUnitsToNextSample:It(l,e.timescale)}},Hr=new WeakSet,Ur=function(e,t){F(this,K).fastStart!==`fragmented`&&e.samples.push(t);let n=It(t.presentationTimestamp-t.decodeTimestamp,e.timescale);if(e.lastTimescaleUnits!==null){let r=It(t.decodeTimestamp,e.timescale,!1),i=Math.round(r-e.lastTimescaleUnits);if(e.lastTimescaleUnits+=i,e.lastSample.timescaleUnitsToNextSample=i,F(this,K).fastStart!==`fragmented`){let t=Pt(e.timeToSampleTable);t.sampleCount===1?(t.sampleDelta=i,t.sampleCount++):t.sampleDelta===i?t.sampleCount++:(t.sampleCount--,e.timeToSampleTable.push({sampleCount:2,sampleDelta:i}));let r=Pt(e.compositionTimeOffsetTable);r.sampleCompositionTimeOffset===n?r.sampleCount++:e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:n})}}else e.lastTimescaleUnits=0,F(this,K).fastStart!==`fragmented`&&(e.timeToSampleTable.push({sampleCount:1,sampleDelta:It(t.duration,e.timescale)}),e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:n}));e.lastSample=t;let r=!1;if(!e.currentChunk)r=!0;else{let n=t.presentationTimestamp-e.currentChunk.startTimestamp;if(F(this,K).fastStart===`fragmented`){let i=F(this,J)??F(this,Y),a=F(this,K).minFragmentDuration??1;e===i&&t.type===`key`&&n>=a&&(r=!0,R(this,Jr,Yr).call(this))}else r=n>=.5}r&&(e.currentChunk&&R(this,Kr,qr).call(this,e),e.currentChunk={startTimestamp:t.presentationTimestamp,samples:[]}),e.currentChunk.samples.push(t)},Wr=new WeakSet,Gr=function(e,t,n){let r=F(this,K).firstTimestampBehavior===`strict`,i=n.lastDecodeTimestamp===-1;if(r&&i&&t!==0)throw Error(`The first chunk for your media track must have a timestamp of 0 (received DTS=${t}).Non-zero first timestamps are often caused by directly piping frames or audio data from a MediaStreamTrack into the encoder. Their timestamps are typically relative to the age of thedocument, which is probably what you want.

If you want to offset all timestamps of a track such that the first one is zero, set firstTimestampBehavior: 'offset' in the options.
`);if(F(this,K).firstTimestampBehavior===`offset`||F(this,K).firstTimestampBehavior===`cross-track-offset`){n.firstDecodeTimestamp===void 0&&(n.firstDecodeTimestamp=t);let r;r=F(this,K).firstTimestampBehavior===`offset`?n.firstDecodeTimestamp:Math.min(F(this,J)?.firstDecodeTimestamp??1/0,F(this,Y)?.firstDecodeTimestamp??1/0),t-=r,e-=r}if(t<n.lastDecodeTimestamp)throw Error(`Timestamps must be monotonically increasing (DTS went from ${n.lastDecodeTimestamp*1e6} to ${t*1e6}).`);return n.lastDecodeTimestamp=t,{presentationTimestamp:e,decodeTimestamp:t}},Kr=new WeakSet,qr=function(e){if(F(this,K).fastStart===`fragmented`)throw Error(`Can't finalize individual chunks if 'fastStart' is set to 'fragmented'.`);if(e.currentChunk){if(e.finalizedChunks.push(e.currentChunk),F(this,Tr).push(e.currentChunk),(e.compactlyCodedChunkTable.length===0||Pt(e.compactlyCodedChunkTable).samplesPerChunk!==e.currentChunk.samples.length)&&e.compactlyCodedChunkTable.push({firstChunk:e.finalizedChunks.length,samplesPerChunk:e.currentChunk.samples.length}),F(this,K).fastStart===`in-memory`)e.currentChunk.offset=0;else{e.currentChunk.offset=F(this,q).pos;for(let t of e.currentChunk.samples)F(this,q).write(t.data),t.data=null;R(this,Xr,Zr).call(this)}}},Jr=new WeakSet,Yr=function(e=!0){if(F(this,K).fastStart!==`fragmented`)throw Error(`Can't finalize a fragment unless 'fastStart' is set to 'fragmented'.`);let t=[F(this,J),F(this,Y)].filter(e=>e&&e.currentChunk);if(t.length===0)return;let n=wt(this,Er)._++;if(n===1){let e=Gt(t,F(this,wr),!0);F(this,q).writeBox(e)}let r=F(this,q).pos,i=Dn(n,t);F(this,q).writeBox(i);{let e=Ut(!1),n=0;for(let e of t)for(let t of e.currentChunk.samples)n+=t.size;let r=F(this,q).measureBox(e)+n;r>=2**32&&(e.largeSize=!0,r=F(this,q).measureBox(e)+n),e.size=r,F(this,q).writeBox(e)}for(let e of t){e.currentChunk.offset=F(this,q).pos,e.currentChunk.moofOffset=r;for(let t of e.currentChunk.samples)F(this,q).write(t.data),t.data=null}let a=F(this,q).pos;F(this,q).seek(F(this,q).offsets.get(i));let o=Dn(n,t);F(this,q).writeBox(o),F(this,q).seek(a);for(let e of t)e.finalizedChunks.push(e.currentChunk),F(this,Tr).push(e.currentChunk),e.currentChunk=null;e&&R(this,Xr,Zr).call(this)},Xr=new WeakSet,Zr=function(){F(this,q)instanceof hr&&F(this,q).flush()},Qr=new WeakSet,$r=function(){if(F(this,kr))throw Error(`Cannot add new video or audio chunks after the file has been finalized.`)};function ti(){return[`video/webm;codecs="vp9,opus"`,`video/webm;codecs="vp8,opus"`,`video/webm`,`video/mp4;codecs="avc1.640028,mp4a.40.2"`,`video/mp4`].find(e=>typeof MediaRecorder<`u`&&MediaRecorder.isTypeSupported(e))||``}var ni=[`avc1.640033`,`avc1.640028`,`avc1.4d0028`,`avc1.42e028`,`avc1.42001f`],ri=class{started=0;mime=``;on=!1;muxer=null;venc=null;aenc=null;areader=null;frames=0;fail=``;rec=null;chunks=[];get recording(){return this.on}get elapsed(){return this.on?(performance.now()-this.started)/1e3:0}async start(e,t){this.on||(m.ensure(),this.fail=``,await this.startCodecs(e,t).catch(e=>(console.warn(`webcodecs recorder unavailable`,e),!1))||this.startMediaRecorder(e,t))}async startCodecs(e,t){let n=globalThis;if(!n.VideoEncoder||!n.AudioEncoder||!n.MediaStreamTrackProcessor)return!1;let r=e.width,i=e.height,a=null;for(let e of ni){let n={codec:e,width:r,height:i,bitrate:t,framerate:30,latencyMode:`quality`,avc:{format:`avc`}};for(let e of[`prefer-hardware`,`no-preference`])if((await VideoEncoder.isConfigSupported({...n,hardwareAcceleration:e}).catch(()=>null))?.supported){a={...n,hardwareAcceleration:e};break}if(a)break}if(!a)return!1;let o=m.ensure().sampleRate,s=`aac`,c={codec:`mp4a.40.2`,sampleRate:o,numberOfChannels:2,bitrate:192e3};if(!(await AudioEncoder.isConfigSupported(c).catch(()=>null))?.supported&&(s=`opus`,c={codec:`opus`,sampleRate:o,numberOfChannels:2,bitrate:16e4},!(await AudioEncoder.isConfigSupported(c).catch(()=>null))?.supported))return!1;let l=new ei({target:new Hn,video:{codec:`avc`,width:r,height:i,frameRate:30},audio:{codec:s,numberOfChannels:2,sampleRate:c.sampleRate},fastStart:`in-memory`,firstTimestampBehavior:`offset`}),u=new VideoEncoder({output:(e,t)=>l.addVideoChunk(e,t),error:e=>this.fail=String(e)});u.configure(a);let d=new AudioEncoder({output:(e,t)=>l.addAudioChunk(e,t),error:e=>this.fail=String(e)});d.configure(c);let f=m.recDest.stream.getAudioTracks()[0],p=new n.MediaStreamTrackProcessor({track:f.clone()}).readable.getReader();return this.muxer=l,this.venc=u,this.aenc=d,this.areader=p,this.frames=0,this.mime=`video/mp4`,this.started=performance.now(),this.on=!0,(async()=>{for(;;){let{value:e,done:t}=await p.read().catch(()=>({value:void 0,done:!0}));if(t||!e)break;this.aenc===d&&d.state===`configured`&&(e.sampleRate===c.sampleRate?d.encode(e):this.fail=`audio ${e.sampleRate} Hz, encoder ${c.sampleRate} Hz`),e.close()}})(),!0}frame(e){let t=this.venc;if(!this.on||!t||t.state!==`configured`)return;let n=performance.now()-this.started;if(n<this.frames*1e3/30-4||t.encodeQueueSize>6)return;let r=new VideoFrame(e,{timestamp:Math.round(n*1e3),duration:33333});t.encode(r,{keyFrame:this.frames%60==0}),r.close(),this.frames=Math.floor(n/(1e3/30))+1}startMediaRecorder(e,t){let n=e.captureStream(30),r=new MediaStream([...n.getVideoTracks(),...m.recDest.stream.getAudioTracks()]);this.mime=ti(),this.chunks=[],this.rec=new MediaRecorder(r,{mimeType:this.mime||void 0,videoBitsPerSecond:t,audioBitsPerSecond:192e3}),this.rec.ondataavailable=e=>e.data.size&&this.chunks.push(e.data),this.rec.start(),this.started=performance.now(),this.on=!0}async stop(e){if(!this.on)return null;let t=this.elapsed,n=await e();this.on=!1;let r=null,i=this.mime;if(this.muxer&&this.venc&&this.aenc){let{muxer:e,venc:t,aenc:n}=this;this.areader?.cancel().catch(()=>{});try{await t.flush(),await n.flush(),e.finalize(),r=new Blob([e.target.buffer],{type:`video/mp4`})}catch(e){console.warn(`recording failed`,e,this.fail)}t.close(),n.close(),this.muxer=null,this.venc=null,this.aenc=null,this.areader=null,i=`video/mp4`}else if(this.rec){let e=this.rec;r=await new Promise(t=>{e.onstop=()=>t(new Blob(this.chunks,{type:(this.mime||e.mimeType||`video/webm`).split(`;`)[0]})),e.stop()}),e.stream.getVideoTracks().forEach(e=>e.stop()),i=r.type,this.rec=null,this.chunks=[]}if(!r||!r.size)return null;let a=new Date;return{id:`${a.getTime()}`,created:a.getTime(),duration:t,label:`${a.getMonth()+1}/${a.getDate()} 녹화 ${String(a.getHours()).padStart(2,`0`)}:${String(a.getMinutes()).padStart(2,`0`)}`,color:Math.floor(Math.random()*5),mime:i,blob:r,thumb:n}}},ii=`prepared-tv-9x`;function ai(){return new Promise((e,t)=>{let n=indexedDB.open(ii,1);n.onupgradeneeded=()=>n.result.createObjectStore(`tapes`,{keyPath:`id`}),n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}async function oi(e,t){let n=await ai();return new Promise((r,i)=>{let a=t(n.transaction(`tapes`,e).objectStore(`tapes`));a.onsuccess=()=>r(a.result),a.onerror=()=>i(a.error)})}var si={all:async()=>(await oi(`readonly`,e=>e.getAll())).sort((e,t)=>t.created-e.created),put:e=>oi(`readwrite`,t=>t.put(e)),remove:e=>oi(`readwrite`,t=>t.delete(e))};function ci(e){let t=e.mime.includes(`mp4`)?`mp4`:`webm`;return`prepared-tv-${e.id}.${t}`}async function li(){let e=window.claude;if(!e?.use)return null;try{return await e.use(`downloads`)}catch{return null}}async function ui(e){if(await li())return di(e);let t=new File([e.blob],ci(e),{type:e.mime});if(navigator.canShare?.({files:[t]}))try{return await navigator.share({files:[t],title:e.label}),!0}catch{return!1}return di(e),!0}async function di(e){let t=await li();if(t)try{return await t.save({filename:ci(e),data:e.blob}),!0}catch{return!1}let n=document.createElement(`a`);return n.href=URL.createObjectURL(e.blob),n.download=ci(e),document.body.appendChild(n),n.click(),setTimeout(()=>{URL.revokeObjectURL(n.href),n.remove()},2e3),!0}var fi=[{name:`I–vi–IV–V`,ko:`밝게 도는`,deg:[0,5,3,4]},{name:`i–VI–III–VII`,ko:`어둡게 도는`,deg:[0,5,2,6]},{name:`I–IV`,ko:`두 화음`,deg:[0,3,0,3]},{name:`DRONE`,ko:`한 화음`,deg:[0,0,0,0]}],pi=[{hp:30,lp:420,oct:36},{hp:150,lp:1700,oct:48},{hp:400,lp:4500,oct:60},{hp:1500,lp:16e3,oct:72}],mi=()=>n[i.music.scale]??n[0];function hi(){let e=mi();return e.steps.length===7?e.steps:e.minor?[0,2,3,5,7,8,10]:[0,2,4,5,7,9,11]}function gi(){return mi().steps.map(e=>(e+i.music.root)%12)}function _i(e){if(e<0)return 0;let t=gi(),n=0,r=99;for(let i=-6;i<=6;i++){let a=Math.abs(i);t.includes(((e+i)%12+12)%12)&&a<r&&(r=a,n=i)}let a=i.music.root;for(let t of[-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6])if(Math.abs(t)===r&&[a,(a+7)%12].includes(((e+t)%12+12)%12))return t;return n}function vi(e){return Math.floor(P.beatAt(e)/4)}function yi(e){let t=(fi[i.music.prog]??fi[0]).deg[(vi(e)%4+4)%4],n=hi();return[0,2,4,6].map(e=>(n[(t+e)%7]+i.music.root)%12)}function bi(e,t,n){let r=yi(e),i=r[(t%r.length+r.length)%r.length],a=Math.floor(n/12)*12+i;return a<n-6&&(a+=12),a>n+6&&(a-=12),a}function xi(e){let t=e/P.beat,n=4,r=99;for(let e of[1,2,4,8,16]){let i=Math.abs(Math.log2(Math.max(.01,t)/e));i<r&&(r=i,n=e)}return n}function Si(e){if(!e||e.every(e=>!e))return 0;let t=new Set(gi()),n=i.music.root,r=0,a=-1;for(let i=-6;i<=6;i++){let o=0;for(let n=0;n<12;n++)t.has(((n+i)%12+12)%12)&&(o+=e[n]);((e.indexOf(Math.max(...e))+i)%12+12)%12===n&&(o+=.04),o-=Math.abs(i)*.004,o>a&&(a=o,r=i)}return r}function Ci(e=4096){let t=new Float32Array(e),n=.79;for(let r=0;r<e;r++){let i=r/(e-1)*2-1,a=Math.abs(i),o=a<=n?a:n+.09999999999999998*Math.tanh((a-n)/.09999999999999998);t[r]=Math.sign(i)*o}return t}function wi(e,t,n){let r=e.sampleRate,i=Math.floor(r*t),a=e.createBuffer(2,i,r);for(let e=0;e<2;e++){let t=a.getChannelData(e);for(let e=0;e<i;e++)t[e]=(Math.random()*2-1)*(1-e/i)**n*(e<r*.004?e/(r*.004):1)}return a}function Ti(e){let t=e.an,n=0;return e.sound.auto&&t&&!t.silent&&(n=t.chroma?.some(e=>e>0)?Si(t.chroma):t.pc>=0?_i(t.pc):0),Math.max(-12,Math.min(12,n+e.sound.shift))}function Ei(e){return e.sound.mode===`orig`||e.sound.mode===`reson`?Ti(e):0}function Di(e){let t=e.an;return!!t&&t.conf>.6&&t.midi>0&&Math.max(...t.chroma??[0])>.35}function Oi(e){return 2**(Ei(e)/12)}function ki(e){return xi((e.loopOut-e.loopIn)/Oi(e))*P.beat}function Ai(e,t){let n=ki(e);return P.origin+Math.floor((t-P.origin)/n)*n}var ji={breakup:{dark:.6,echo:.25},mosaic:{dark:.5,echo:.2},led:{dark:.4,echo:.2},teletext:{dark:.5,echo:.2},smear:{chorus:.8,hall:.2},rutt:{chorus:.6,hall:.15},kaleido:{chorus:.5,echo:.2},paikabe:{hall:.3,echo:.2},neon:{hall:.3}},Mi=class{e;g;in;out;hp;lp;res=[];resDry;tone;chorusWet;chorusDepth;echoSend;hallSend;nextCycle=-1;nextHit=-1;nextGrain=0;lastBar=-9999;hits=0;row=1;alive=!0;sources=new Set;constructor(e,t,n){this.e=e,this.g=t;let r=e.ctx,i=(e=1)=>{let t=r.createGain();return t.gain.value=e,t};this.in=i(),this.out=i(0),this.hp=r.createBiquadFilter(),this.hp.type=`highpass`,this.lp=r.createBiquadFilter(),this.lp.type=`lowpass`;let a=i();this.resDry=i(1),this.in.connect(this.resDry).connect(a);let o=r.createBiquadFilter();o.type=`lowpass`,o.frequency.value=3500,o.Q.value=.5;for(let e=0;e<4;e++){let e=r.createBiquadFilter();e.type=`bandpass`,e.Q.value=18;let t=i(0);this.in.connect(e).connect(t).connect(o),this.res.push(e),e.mk=t}o.connect(a),a.connect(this.hp).connect(this.lp),this.tone=r.createBiquadFilter(),this.tone.type=`lowpass`,this.tone.frequency.value=18e3,this.tone.Q.value=.4,this.lp.connect(this.tone),this.chorusWet=i(0),this.chorusDepth=i(0);let s=r.createOscillator();s.frequency.value=.18+Math.random()*.08,s.connect(this.chorusDepth),s.start(),this.sources.add(s);for(let[e,t,n]of[[.016,-.7,1],[.023,.7,-1]]){let a=r.createDelay(.1);a.delayTime.value=e;let o=i(n);this.chorusDepth.connect(o).connect(a.delayTime);let s=r.createStereoPanner();s.pan.value=t,this.tone.connect(a).connect(s).connect(this.chorusWet)}this.tone.connect(this.out),this.chorusWet.connect(this.out),this.out.connect(e.masterIn),this.echoSend=i(0),this.out.connect(this.echoSend).connect(e.echoIn),this.hallSend=i(0),this.out.connect(this.hallSend).connect(e.hallIn),this.setRow(n),this.applyMode()}setRow(e){this.row=e;let t=pi[Math.max(0,Math.min(3,e))],n=this.e.ctx.currentTime;this.hp.frequency.setTargetAtTime(t.hp,n,.05),this.lp.frequency.setTargetAtTime(t.lp,n,.05)}applyMode(){let e=this.e.ctx.currentTime,t=this.g.sound.mode===`reson`;this.resDry.gain.setTargetAtTime(t?.03:1,e,.05);for(let n of this.res)n.mk.gain.setTargetAtTime(t?4.5:0,e,.05);let n=ji[this.g.look.id]??{};this.tone.frequency.setTargetAtTime(n.dark?9e3-n.dark*6500:18e3,e,.08),this.chorusWet.gain.setTargetAtTime((n.chorus??0)*.45,e,.08),this.chorusDepth.gain.setTargetAtTime((n.chorus??0)*.0025,e,.08),this.echoSend.gain.setTargetAtTime((n.echo??0)*.8,e,.05),this.hallSend.gain.setTargetAtTime((this.g.sound.mode===`pad`?.8:t?.45:.15)+(n.hall??0),e,.05),this.lastBar=-9999}level(e){let t=this.g,n={orig:1,reson:1.6,pulse:1.1,pad:.9,mute:0}[t.sound.mode],r=(t.an?.normGain??1)*t.sound.gain*n/Math.sqrt(Math.max(1,e));this.out.gain.setTargetAtTime(Math.min(4,r),this.e.ctx.currentTime,.08)}at(e){let t=this.e.ctx;return Math.max(t.currentTime,t.currentTime+(e-N()))}play(e,t,n,r,i=.012){let a=this.g.src.audio;if(!a||n<=.01||t>=a.duration)return;let o=this.e.ctx,s=this.at(e),c=o.createBufferSource();c.buffer=a,c.playbackRate.value=r;let l=o.createGain();l.gain.setValueAtTime(0,s),l.gain.linearRampToValueAtTime(1,s+i),l.gain.setValueAtTime(1,s+Math.max(i,n-i*2)),l.gain.linearRampToValueAtTime(0,s+n),c.connect(l).connect(this.in),c.start(s,t,n*r+.02),this.sources.add(c),c.onended=()=>this.sources.delete(c)}ref(){let e=this.g.an;return e&&e.conf>.25&&e.midi?e.midi:pi[this.row].oct+12}pitchRate(e,t){let n=this.g,r;return r=Di(n)?bi(e,t,this.ref()+Ti(n))-this.ref():Ti(n)+[0,12,0,-12][t%4],Math.max(.5,Math.min(2,2**(r/12)))}schedule(e,t){let n=this.g;if(!this.alive||n.sound.mode===`mute`||!n.src.audio)return;let r=Oi(n),i=ki(n),a=n.loopOut-n.loopIn,o=vi(t);if(o!==this.lastBar&&n.sound.mode===`reson`){this.lastBar=o;let e=this.at(P.timeOf(o*16)),t=pi[this.row].oct+12;this.res.forEach((n,r)=>n.frequency.setTargetAtTime(440*2**((bi(P.timeOf(o*16),r,t)-69)/12),e,.05))}if(n.sound.mode===`orig`||n.sound.mode===`reson`){if(this.nextCycle<0){let t=P.next(e,4),o=Ai(n,t),s=(t-o)*r;s<a-.05&&this.play(t,n.loopIn+s,Math.min(a/r,i)-(t-o),r),this.nextCycle=o+i}for(;this.nextCycle<t;)this.play(this.nextCycle,n.loopIn,Math.min(a/r,i),r),this.nextCycle+=i}else if(n.sound.mode===`pulse`){let r=Math.max(1,Math.round(i/P.step)),o=n.an?.onsets??[],s=new Map;if(o.length)o.forEach(e=>s.set(Math.round(e/a*r)%r,e));else for(let e=0;e<r;e+=2)s.set(e,e/r*a);for(this.nextHit<0&&(this.nextHit=P.next(e,1));this.nextHit<t;){let e=this.nextHit,t=Math.round((e-Ai(n,e))/P.step)%r,i=s.get(t);if(i!==void 0){let t=this.pitchRate(e,this.hits++);this.play(e,n.loopIn+Math.min(i,a-.05),Math.min(.24,P.step*1.7),t,.01)}this.nextHit+=P.step}}else if(n.sound.mode===`pad`)for(this.nextGrain<e&&(this.nextGrain=e);this.nextGrain<t;){let e=this.nextGrain,t=this.pitchRate(e,Math.floor(Math.random()*4)),r=.18+Math.random()*.14;this.play(e,n.loopIn+Math.random()*Math.max(.01,a-r*t),r,t,r*.45),this.nextGrain+=1/14*(.6+Math.random()*.8)}}reset(){this.nextCycle=-1,this.nextHit=-1,this.lastBar=-9999,this.hush(),this.applyMode()}hush(){let e=this.e.ctx.currentTime;for(let t of this.sources)if(!(t instanceof OscillatorNode))try{t.stop(e+.03)}catch{}}dispose(){this.alive=!1;let e=this.e.ctx.currentTime;this.out.gain.setTargetAtTime(0,e,.03),setTimeout(()=>{for(let e of this.sources)try{e.stop()}catch{}this.out.disconnect()},300)}},Ni=new class{ctx=null;masterIn;echoIn;hallIn;vol;voices=new Map;want=[];sig=``;constructor(){m.whenReady(e=>this.init(e))}init(e){this.ctx=e;let t=(t=1)=>{let n=e.createGain();return n.gain.value=t,n};this.masterIn=t(),this.echoIn=t();let n=e.createDelay(2),r=t(.4),a=e.createBiquadFilter();a.type=`lowpass`,a.frequency.value=2600,this.echoIn.connect(n).connect(a).connect(r).connect(n),a.connect(this.masterIn);let o=()=>n.delayTime.setTargetAtTime(P.step*3,e.currentTime,.2);o(),setInterval(o,1e3),this.hallIn=t();let s=e.createConvolver();s.buffer=wi(e,3.8,2.4),this.hallIn.connect(s).connect(t(.6)).connect(this.masterIn);let c=e.createBiquadFilter();c.type=`highpass`,c.frequency.value=40;let l=e.createDynamicsCompressor();l.threshold.value=-22,l.knee.value=18,l.ratio.value=2,l.attack.value=.01,l.release.value=.25;let u=e.createDynamicsCompressor();u.threshold.value=-4,u.knee.value=0,u.ratio.value=20,u.attack.value=.002,u.release.value=.1,this.vol=t(i.music.vol);let d=e.createWaveShaper();d.curve=Ci(),this.masterIn.connect(c).connect(l).connect(t(.75)).connect(u).connect(this.vol).connect(d),d.connect(e.destination),d.connect(m.recDest),d.connect(m.xy),d.connect(m.analyser);let f=()=>{this.update(),window.setTimeout(f,25)};f()}setVoices(e){this.want=e}refresh(e){for(let t of this.voices.values())e&&t.g!==e||t.reset()}setVolume(e){this.vol&&this.ctx&&this.vol.gain.setTargetAtTime(e,this.ctx.currentTime,.05)}update(){if(!this.ctx)return;let e=new Set;for(let t of this.want){e.add(t.g.id);let n=this.voices.get(t.g.id);n?n.row!==t.row&&n.setRow(t.row):(n=new Mi(this,t.g,t.row),this.voices.set(t.g.id,n))}for(let[t,n]of this.voices)e.has(t)||(n.dispose(),this.voices.delete(t));let t=[i.music.root,i.music.scale,i.music.bpm,i.music.prog].join(`,`);t!==this.sig&&(this.sig=t,this.refresh());let n=this.voices.size,r=N(),a=r+.12;for(let e of this.voices.values())e.level(n),e.schedule(r,a)}chordName(e=N()){return yi(e)[0]}},Pi=[`#d8d8d8`,`#b0b0b0`,`#e8e0c8`,`#c8c8d8`,`#e0e0e0`];function Fi(e){let t=h(`div`,{class:`shelf`}),n=h(`span`,{class:`count`}),r=h(`div`,{class:`view tapes-view`},h(`div`,{class:`view-head`},b(`◀ BACK`,{cls:`small`,onPress:e}),h(`div`,{class:`hdr`},h(`span`,null,`-TAPE SHELF`),h(`i`)),n),t),i=async()=>{let e=await si.all().catch(()=>[]);if(n.textContent=String(e.length).padStart(2,`0`),t.textContent=``,!e.length)t.append(h(`div`,{class:`empty`},h(`div`,{class:`cassette ghost`}),h(`p`,null,`아직 녹화한 테이프가 없어요.`),h(`p`,{class:`hint`},`콘솔에서 ● REC를 눌러 녹화하세요.`)));else for(let n of e)t.append(Ii(n,()=>Ri(n,i)))};return i(),{root:r,reload:i}}function Ii(e,t){let n=new Date(e.created),r=h(`button`,{class:`cassette`,type:`button`,style:`--sticker:${Pi[e.color%Pi.length]}`},h(`span`,{class:`reel l`}),h(`span`,{class:`reel r`}),h(`span`,{class:`label`},h(`span`,{class:`hand`},e.label),h(`span`,{class:`meta`},`${n.getFullYear()}.${n.getMonth()+1}.${n.getDate()}`,h(`b`,null,Li(e.duration)))),e.thumb?h(`img`,{class:`thumb`,src:e.thumb,alt:``}):null,h(`span`,{class:`brand`},`T-120 · SP`));return r.addEventListener(`click`,t),r}function Li(e){return`${Math.floor(e/60)}:${String(Math.floor(e%60)).padStart(2,`0`)}`}function Ri(e,t){let n=URL.createObjectURL(e.blob),r=h(`video`,{src:n,playsinline:!0,loop:!0,autoplay:!0}),i=()=>{r.pause(),URL.revokeObjectURL(n),a.remove()},a=h(`div`,{class:`modal`},h(`div`,{class:`tv-set`},h(`div`,{class:`tv-screen`},r,h(`div`,{class:`glass`})),h(`div`,{class:`tv-controls`},h(`span`,{class:`hand`},e.label),h(`i`,{class:`led on`}))),h(`div`,{class:`key-row player-keys`},b(`▶/❚❚`,{cls:`small`,onPress:()=>r.paused?void r.play():r.pause()}),b(`공유`,{cls:`small`,onPress:()=>void ui(e)}),b(`저장`,{cls:`small`,onPress:()=>di(e)}),b(`라벨`,{cls:`small`,onPress:()=>o()}),b(`지우기`,{cls:`small danger`,onPress:async()=>{let n=a.querySelector(`.key.danger .key-face`);n.textContent===`정말?`?(await si.remove(e.id),T(`테이프를 지웠어요`),i(),t()):(n.textContent=`정말?`,setTimeout(()=>n.isConnected&&(n.textContent=`지우기`),3e3))}}),b(`닫기`,{cls:`small`,onPress:i})));function o(){let n=a.querySelector(`.tv-controls .hand`);if(a.querySelector(`.label-edit`))return;let r=h(`input`,{type:`text`,class:`lcd-input label-edit`,maxlength:`40`});r.value=e.label;let i=async()=>{e.label=r.value.trim().slice(0,40)||e.label,await si.put(e),n.textContent=e.label,o.remove(),t()};r.addEventListener(`keydown`,e=>e.key===`Enter`&&void i());let o=h(`div`,{class:`key-row player-keys`},r,b(`확인`,{cls:`small`,onPress:()=>void i()}));a.querySelector(`.tv-set`).after(o),r.focus()}document.querySelector(`.screen`).append(a)}var zi=48,Bi=32,Vi=`#000`;function Hi(e,t,n=Vi,r=2){e.beginPath(),t.forEach(([t,n],r)=>r?e.lineTo(t,n):e.moveTo(t,n)),e.strokeStyle=n,e.lineWidth=r,e.stroke()}function Ui(e,t,n,r,i=r,a=Vi){e.beginPath(),e.ellipse(t,n,r,i,0,0,Math.PI*2),e.fillStyle=a,e.fill()}function Wi(e){let t=e;return()=>(t=t*16807%2147483647)/2147483647}var Gi=[e=>Hi(e,Array.from({length:23},(e,t)=>[3+t*2,16-Math.sin(t*.57)*9])),e=>Hi(e,[[3,16],[9,7],[21,25],[33,7],[45,25]]),e=>Hi(e,[[3,25],[3,7],[14,7],[14,25],[25,25],[25,7],[36,7],[36,25],[45,25]]),e=>Hi(e,[[3,25],[15,7],[15,25],[27,7],[27,25],[39,7],[39,25],[45,18]]),e=>{let t=Wi(4);Hi(e,Array.from({length:22},(e,n)=>[3+n*2,8+t()*16]))},e=>{Ui(e,17,23,5,4),Hi(e,[[21,23],[21,5],[32,9]],Vi,2.5),Ui(e,31,19,4,3),Hi(e,[[34,19],[34,8]],Vi,2)}];function Ki(e){let t=e.getContext(`2d`),n=t.getImageData(0,0,zi,Bi),r=n.data;for(let e=0;e<Bi;e++)for(let t=0;t<zi;t++){let n=(e*zi+t)*4;if(r[n+3]<110){r[n+3]=0;continue}let i=(r[n]+r[n+1]+r[n+2])/765,a;a=i<.3?0:i>.8?255:(t+e)%2?0:-1,a<0?r[n+3]=0:(r[n]=r[n+1]=r[n+2]=a?236:8,r[n+3]=255)}return t.putImageData(n,0,0),e.toDataURL()}function qi(e){let t=document.createElement(`canvas`);t.width=zi,t.height=Bi;let n=t.getContext(`2d`);return n.lineCap=`square`,n.lineJoin=`miter`,e(n),Ki(t)}var Ji=new Map;function Yi(e,t){let n=Ji.get(e);return n||(n=qi(t),Ji.set(e,n)),n}var Xi=e=>Yi(`v`+e,Gi[e]),Zi={scan:`SCAN PROCESSOR`,magnet:`MAGNET`,color:`COLORIZER`,fdbk:`FEEDBACK`,synth:`DV1 SYNTH`,cg:`CHARACTER GEN`,tape:`TAPE`,setup:`SETUP`},Qi=[{name:`PAIK-ABE`,hues:[0,.08,.16,.33,.5,.66,.83],sat:1,colors:[]},{name:`FIRE`,hues:[.98,.02,.05,.08,.12,.15,.17],sat:1,colors:[]},{name:`ICE`,hues:[.6,.58,.55,.52,.5,.48,.45],sat:.8,colors:[]},{name:`GROOVE`,hues:[.83,.33,.95,.5,.12,.7,.2],sat:1,colors:[]},{name:`PHOSPHOR`,hues:[.33,.33,.33,.33,.33,.33,.33],sat:.9,colors:[]},{name:`SUNSET`,hues:[.75,.85,.95,.02,.06,.1,.14],sat:1,colors:[]},{name:`FLAG`,hues:[0,0,.66,.66,0,.66,0],sat:.95,colors:[]},{name:`PASTEL`,hues:[.9,.1,.2,.4,.55,.7,.8],sat:.45,colors:[]}];for(let e of Qi)e.colors=e.hues.map(t=>`hsl(${Math.round(t*360)} ${Math.round(e.sat*100)}% 50%)`);function $i(e){let t=Qi[e];i.color.on=!0,i.color.hues=t.hues.slice(),i.color.sat=t.sat,c()}function ea(){Object.assign(i.scan,{hSize:1,vSize:1,hPos:0,vPos:0,rot:0}),i.scan.osc.forEach(e=>e.amp=0)}function ta(e){ea();let t=i.scan;t.on=!0;let n=t.osc;switch(e){case 0:n[0]={target:0,wave:0,freq:3,rate:.4,amp:.15};break;case 1:i.magnet.list=[{x:0,y:0,s:2.2,r:.5,type:0,born:0}];break;case 2:t.vSize=.004;break;case 3:t.vSize=.004,t.rot=90;break;case 4:n[2]={target:2,wave:0,freq:1,rate:.3,amp:.35};break;case 5:n[0]={target:0,wave:1,freq:7,rate:.1,amp:.3};break;case 6:n[0]={target:0,wave:4,freq:40,rate:3,amp:.12};break;case 7:t.rot=30}c()}function na(e){return h(`p`,{class:`hint`},e)}function ra(...e){return h(`div`,{class:`keys`},...e)}function X(e,...t){return h(`div`,{class:`sec`},h(`div`,{class:`sec-t`},e),...t.filter(Boolean))}var ia={scan:()=>{let e=i.scan,t=e.osc.map((e,t)=>h(`div`,{class:`osc`},h(`div`,{class:`osc-t`},`OSC ${t+1}`),S(``,e,`target`,[[0,`H`],[1,`V`],[2,`SIZE`]]),S(``,e,`wave`,[0,1,2,3,4,5].map(e=>[e,h(`img`,{class:`wv`,src:Xi(e),alt:``})]),void 0,`waves`),x(`FREQ`,e,`freq`,0,60,.5),x(`RATE`,e,`rate`,-4,4,.05),x(`AMP`,e,`amp`,0,1,.01)));return[X(`RASTER`,ra(C(`ON`,e,`on`),b(`ZEN`,{cls:`small`,onPress:()=>(Object.assign(e,{on:!0,vSize:.004,rot:90}),c())}),b(`RESET`,{cls:`small`,onPress:()=>(ea(),c())}))),X(`SIZE · POSITION`,x(`H SIZE`,e,`hSize`,0,2,.01),x(`V SIZE`,e,`vSize`,0,2,.01),x(`H POS`,e,`hPos`,-1,1,.01),x(`V POS`,e,`vPos`,-1,1,.01),S(`ROTATE`,e,`rot`,[[0,`0`],[90,`90`],[180,`180`],[270,`270`]]),x(`FINE`,e,`rot`,-180,360,1),x(`LINES`,e,`lines`,0,525,1)),X(`OSCILLATORS`,...t,na(`H: 줄마다 옆으로 · V: 세로로 · SIZE: 화면이 숨쉬듯. 파형 ♪는 음악 크기를 따릅니다`))]},magnet:()=>{let e=i.magnet;return[X(`MAGNETS · 최대 2개`,ra(b(`TOOL ▸ MAGNET`,{cls:`small`,lit:()=>i.tools.mode===`magnet`,onPress:()=>(i.tools.mode=i.tools.mode===`magnet`?`none`:`magnet`,c())}),b(`N⇄S`,{cls:`small`,onPress:()=>(e.list.forEach(e=>e.s=-e.s),c())}),b(`CLEAR`,{cls:`small`,onPress:()=>(e.list=[],c())})),na(`TOOL ▸ MAGNET을 켜고 모니터를 누르면 자석이 놓입니다. 세 번째를 놓으면 가장 오래된 것이 빠집니다. 자석의 ×를 누르거나 화면 밖으로 끌면 지워집니다.`),S(`KIND`,e,`type`,[[0,`RING · 소용돌이`],[1,`BAR · 밀기`]],()=>e.list.forEach(t=>t.type=e.type))),X(`FIELD`,x(`STRENGTH`,e,`strength`,0,4,.1,void 0,()=>e.list.forEach(t=>t.s=Math.sign(t.s||1)*e.strength)),x(`RADIUS`,e,`radius`,.1,1.5,.05,void 0,()=>e.list.forEach(t=>t.r=e.radius)),x(`COLOR SPLIT`,e,`purity`,0,1.5,.05)),X(`COIL`,x(`AUDIO`,e,`audio`,0,2,.1),ra(C(`DRIFT`,e,`drift`)),na(`AUDIO: 소리 크기만큼 자석이 세졌다 약해집니다 (닉슨 TV의 코일)`))]},color:()=>{let e=i.color,t=h(`div`,{class:`keys`});return e.hues.forEach((n,r)=>{let i=h(`button`,{class:`chip big`,type:`button`});y(i,()=>{i.style.background=`hsl(${Math.round(e.hues[r]*360)} ${Math.round(e.sat*100)}% 50%)`,i.style.opacity=r<e.bands?`1`:`.25`}),i.addEventListener(`click`,()=>{e.hues[r]=(e.hues[r]+1/12)%1,c()}),t.append(i)}),[X(`COLORIZER`,ra(C(`ON`,e,`on`),C(`SMOOTH`,e,`smooth`),C(`NEG`,e,`neg`))),X(`BANDS`,x(`COUNT`,e,`bands`,2,7,1),h(`div`,{class:`ctl`},h(`label`,null,`HUES`),t),na(`색 칸을 누르면 색이 한 칸씩 돕니다`)),X(`LEVELS`,x(`GAIN`,e,`gain`,0,3,.05),x(`CONTRAST`,e,`contrast`,0,4,.05),x(`SATURATE`,e,`sat`,0,1,.05),x(`CYCLE`,e,`cycle`,-1,1,.01)),X(`PRESETS`,ra(...Qi.map((e,t)=>b(e.name,{cls:`small`,onPress:()=>$i(t)}))))]},fdbk:()=>{let e=i.fb;return[X(`LOOP`,ra(C(`ON`,e,`on`)),S(`MODE`,e,`mode`,[[0,`TUNNEL`],[1,`LUMA`],[2,`ECHO`],[3,`TRAIL`]])),X(`CAMERA ON MONITOR`,x(`SIZE`,e,`size`,.5,1.15,.01),x(`ROTATE`,e,`rot`,-.5,.5,.01),x(`HUE`,e,`hue`,-.2,.2,.005),x(`DECAY`,e,`decay`,.5,1,.01),x(`MIX`,e,`mix`,0,1,.01))]},synth:()=>{let e=i.synth;return[X(`BEAM`,S(`MODE`,e,`mode`,[[0,`LISSAJOUS`],[1,`SOUND`],[2,`ROSE`]]),na(`SOUND: 지금 나는 클립 소리가 빔을 휩니다`)),X(`OSC`,x(`X FREQ`,e,`fx`,1,12,1),x(`Y FREQ`,e,`fy`,1,12,1),x(`DRIFT`,e,`drift`,-2,2,.05),x(`GAIN`,e,`gain`,.1,3,.05)),X(`PHOSPHOR`,x(`PERSIST`,e,`persist`,0,.98,.01),x(`WIDTH`,e,`width`,.5,6,.1),te(`COLOR`,e,`color`,[`#7dff7d`,`#60c8ff`,`#ffffff`,`#ffb040`,`#ff60ff`,`#ff4040`]))]},cg:()=>{let e=i.cg,t=()=>e.serial++;return[X(`PAGE`,S(``,e,`mode`,[[`off`,`OFF`],[`title`,`TITLE`],[`lower`,`LOWER`],[`doc`,`DOC`],[`crawl`,`CRAWL`],[`credits`,`CREDIT`]],t),S(`STYLE`,e,`style`,[[`chyron`,`CHYRON`],[`cycle`,`CYCLE`],[`neg`,`NEG`]]),ra(b(`RE-TYPE`,{cls:`small`,onPress:()=>(t(),c())}),C(`TIMECODE`,e,`tc`),C(`BIG TC`,e,`tcBig`),C(`SATELLITE`,e,`sat`))),X(`TEXT`,w(`TITLE`,e,`title1`),w(`SUB`,e,`title2`),w(`LOWER 1`,e,`lower1`),w(`LOWER 2`,e,`lower2`),w(`DOC TOP`,e,`docTop`,!0),w(`DOC`,e,`doc`,!0),w(`CRAWL`,e,`crawl`,!0),w(`CREDITS`,e,`credits`,!0))]},tape:e=>{let t=i.vhs,n=(e,n)=>b(e,{cls:`small`,onPress:()=>(Object.assign(t,n),c())});return[X(`PRESET`,ra(n(`CLEAN`,{bleed:0,scan:0,track:0,chroma:0,lines:0,interlace:0,noise:0,head:0,sat:1,warm:0,roll:0}),n(`U-MATIC`,{bleed:.8,scan:.35,track:.04,chroma:1,lines:480,interlace:.2,noise:.08,head:.3,sat:1,warm:.1}),n(`VHS`,{bleed:1.4,scan:.45,track:.15,chroma:1.8,lines:480,interlace:.3,noise:.15,head:.7,sat:1.05,warm:.3}),n(`WORN`,{bleed:2.4,scan:.55,track:.45,chroma:3,lines:300,interlace:.4,noise:.35,head:1,sat:.75,warm:.6}))),X(`SIGNAL`,x(`BLEED`,t,`bleed`,0,3,.1),x(`CHROMA`,t,`chroma`,0,6,.1),x(`TRACKING`,t,`track`,0,1,.01),x(`HEAD SW`,t,`head`,0,1.5,.05),x(`NOISE`,t,`noise`,0,1,.01),x(`ROLL`,t,`roll`,-2,2,.05),x(`SATURATE`,t,`sat`,0,2,.05)),X(`RASTER`,x(`LINES`,t,`lines`,0,720,20),x(`SCANLINE`,t,`scan`,0,1,.05),x(`INTERLACE`,t,`interlace`,0,1,.05),ra(C(`4:3 BOX`,t,`box43`))),X(`ARCHIVE`,ra(b(`TAPE SHELF ▸`,{cls:`small`,onPress:()=>e.openTapes()})))]},setup:e=>{let{renderer:t}=e,n=i.output,r=()=>{t.setOutput(n.aspect,n.quality),D()};return[X(`OUTPUT`,S(`ASPECT`,n,`aspect`,[[`9:16`,`9:16`],[`4:3`,`4:3`],[`1:1`,`1:1`],[`16:9`,`16:9`]],r),S(`SIZE`,n,`quality`,[[`sd`,`SD 960`],[`hd`,`HD 1280`],[`fhd`,`FULL HD 1920`]],r),na(`녹화 화질도 이 크기를 따릅니다(FULL HD 20Mbps, HD 12Mbps). 휴대폰이 버거워하면 낮추세요`)),X(`SCREEN`,S(`SCANLINES`,i.ui,`crt`,[[0,`OFF`],[1,`ON`]],()=>document.documentElement.setAttribute(`data-crt`,String(i.ui.crt))),ra(C(`KEY CLICKS`,i.audio,`sfx`),C(`VIBRATE`,i.audio,`haptics`)),na(`키 소리는 스피커로만 나고 녹화에는 들어가지 않습니다`)),X(`ARCHIVE`,ra(b(`TAPE SHELF ▸`,{cls:`small`,onPress:()=>e.openTapes()}))),X(`ABOUT`,na(`PREPARED TV — 백남준의 "장치된 TV"(1963)에서 이름을 땄습니다. 모든 처리는 기기 안에서 합니다.`),na(`글꼴 Galmuri·Nanum Pen Script(OFL), 인물/사물 분리 MediaPipe(Apache-2.0). 테스트 클립의 그림과 소리는 앱이 직접 만듭니다.`))]}};function aa(e,t){let n=h(`div`,{class:`scr scr-${e}`}),r=()=>{n.textContent=``,n.append(...(ia[e]?.(t,r)||[]).filter(Boolean)),v()};return r(),n}var oa=[{name:`DANCER`,ko:`무대`,bpm:120,dur:8},{name:`METRONOME`,ko:`메트로놈`,bpm:90,dur:8},{name:`RUNNER`,ko:`달리는 개`,bpm:120,dur:8}];function sa(e){let t=e/4*Math.PI*2;return[.5+.33*Math.sin(t),.56+.17*Math.sin(2*t)]}function ca(e,t,n,r,i,a){e.beginPath(),e.moveTo(t+a,n),e.arcTo(t+r,n,t+r,n+i,a),e.arcTo(t+r,n+i,t,n+i,a),e.arcTo(t,n+i,t,n,a),e.arcTo(t,n,t+r,n,a),e.closePath()}function la(e,t){let n=t*120/60,r=e.createLinearGradient(0,0,0,640);r.addColorStop(0,`#2a1a10`),r.addColorStop(1,`#5a3418`),e.fillStyle=r,e.fillRect(0,0,360,640);for(let n=0;n<14;n++)e.fillStyle=n%2?`rgba(0,0,0,0.18)`:`rgba(255,200,140,0.06)`,e.fillRect(n*360/14+Math.sin(t*.7+n)*3,0,360/28,640*.78);e.fillStyle=`#1d3b46`,e.fillRect(0,640*.78,360,140.8),e.fillStyle=`#2f5e6c`;for(let t=0;t<6;t++)e.fillRect(0,640*.78+t*22+4,360,3);let i=180+Math.sin(t/8*Math.PI*2)*360*.22,a=e.createRadialGradient(i,320,10,i,320,180);a.addColorStop(0,`rgba(255,240,200,0.35)`),a.addColorStop(1,`rgba(255,240,200,0)`),e.fillStyle=a,e.fillRect(0,0,360,640);let o=Math.abs(Math.sin(n*Math.PI))*10,s=640*.33-o,c=Math.sin(n*Math.PI)*.18;e.save(),e.translate(i,s),e.rotate(c*.3),e.strokeStyle=`#141414`,e.lineCap=`round`,e.lineWidth=26;let l=Math.sin(n*Math.PI)*26;e.beginPath(),e.moveTo(-14,150),e.lineTo(-22-l*.4,300+o),e.moveTo(14,150),e.lineTo(22-l*.4,300+o),e.stroke(),e.fillStyle=`#d0202c`,e.beginPath(),e.moveTo(-34,20),e.lineTo(34,20),e.lineTo(58+c*30,170),e.lineTo(-58+c*30,170),e.closePath(),e.fill();let u=(r,i)=>{let a=-.5+Math.sin(n*Math.PI+i)*.7,o=r*(40+Math.cos(a)*60),s=40+Math.sin(a)*60;e.strokeStyle=`#e8b896`,e.lineWidth=16,e.beginPath(),e.moveTo(r*30,32),e.lineTo(o,s),e.stroke(),e.fillStyle=`#202020`,ca(e,o-22,s-18,44,36,5),e.fill(),e.fillStyle=`hsl(${(t*90+r*60)%360} 80% 60%)`,ca(e,o-16,s-12,32,24,4),e.fill()};u(-1,0),u(1,Math.PI),e.fillStyle=`#e8b896`,e.beginPath(),e.arc(0,-10,30,0,Math.PI*2),e.fill(),e.fillStyle=`#1a0e08`,e.beginPath(),e.arc(0,-18,32,Math.PI*.95,Math.PI*2.05),e.fill(),e.fillRect(-32,-18,10,50),e.fillRect(22,-18,10,50),e.restore(),e.save(),e.translate(302.4,396.8),e.rotate(-.12),e.fillStyle=`#8a4a1c`,e.beginPath(),e.ellipse(0,40,34,46,0,0,Math.PI*2),e.ellipse(0,-20,26,32,0,0,Math.PI*2),e.fill(),e.fillStyle=`#2a160a`,e.fillRect(-3,-110,6,120),e.restore()}function ua(e,t){let n=t*90/60,r=Math.floor(n/4)%3;if(r===0)[`#c0c0c0`,`#c0c000`,`#00c0c0`,`#00c000`,`#c000c0`,`#c00000`,`#0000c0`].forEach((t,n)=>{e.fillStyle=t,e.fillRect(n*360/7,0,52.42857142857143,640)});else if(r===1){e.fillStyle=`#f2f0e8`,e.fillRect(0,0,360,640);for(let t=0;t<12;t++)e.fillStyle=`#111`,e.fillRect(0,t*640/12,360,2),[1,3,6,8,10].includes(t%12)&&e.fillRect(0,t*640/12+6,216,640/12-10)}else for(let n=0;n<24;n++)e.fillStyle=`hsl(${n*15} 90% 55%)`,e.beginPath(),e.moveTo(180,320),e.arc(180,320,640,n/24*Math.PI*2+t*.2,(n+1)/24*Math.PI*2+t*.2),e.fill();e.fillStyle=`#5a2c10`,e.beginPath(),e.moveTo(90,512),e.lineTo(270,512),e.lineTo(214,128),e.lineTo(146,128),e.closePath(),e.fill(),e.fillStyle=`#e8d8a8`,e.fillRect(162,158,36,294),e.fillStyle=`#3a1a08`;for(let t=0;t<14;t++)e.fillRect(162,168+t*24,t%2?10:18,2);let i=Math.sin(n*Math.PI)*.55;e.save(),e.translate(180,442),e.rotate(i),e.fillStyle=`#c8c8c8`,e.fillRect(-3,-324,6,324),e.fillStyle=`#d8a020`,e.beginPath(),e.moveTo(-22,-260),e.lineTo(22,-260),e.lineTo(30,-210),e.lineTo(-30,-210),e.closePath(),e.fill(),e.restore(),e.fillStyle=`#2a1206`,e.fillRect(80,512,200,18)}function da(e,t){e.fillStyle=`#9a8670`,e.fillRect(0,0,360,640);let n=7,r=()=>(n=n*16807%2147483647)/2147483647;for(let t=0;t<260;t++){let t=r()*360,n=r()*640,i=3+r()*18;e.fillStyle=`hsl(${30+r()*10} ${18+r()*12}% ${42+r()*24}%)`,e.beginPath(),e.ellipse(t,n,i,i*(.5+r()*.5),r()*3,0,Math.PI*2),e.fill()}for(let t=0;t<40;t++)e.fillStyle=`hsl(35 10% ${70+r()*15}%)`,e.beginPath(),e.arc(r()*360,r()*640,2+r()*4,0,Math.PI*2),e.fill();e.fillStyle=`#5a4630`,e.fillRect(0,0,144,38.4);let[i,a]=sa(t),[o,s]=sa(t+.05),c=Math.atan2((s-a)*640,(o-i)*360),l=i*360,u=a*640,d=Math.sin(t*22);e.fillStyle=`rgba(40,30,20,0.35)`,e.beginPath(),e.ellipse(l+10,u+16,34,12,c,0,Math.PI*2),e.fill(),e.save(),e.translate(l,u),e.rotate(c),e.strokeStyle=`#cfc6b6`,e.lineWidth=6,e.lineCap=`round`;for(let[n,r]of[[-16,0],[-8,Math.PI],[14,Math.PI],[20,0]])e.beginPath(),e.moveTo(n,4),e.lineTo(n+Math.sin(t*22+r)*8,20),e.stroke();e.fillStyle=`#ddd5c6`,e.beginPath(),e.ellipse(0,0,28,13+d,.12,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(30,-8,13,11,0,0,Math.PI*2),e.fill(),e.fillStyle=`#bfb5a2`,e.beginPath(),e.ellipse(26,-18,5,8,-.4,0,Math.PI*2),e.ellipse(36,-17,5,8,.4,0,Math.PI*2),e.fill(),e.fillStyle=`#222`,e.beginPath(),e.arc(41,-7,2.5,0,Math.PI*2),e.fill(),e.strokeStyle=`#ddd5c6`,e.lineWidth=7,e.beginPath(),e.moveTo(-26,-4),e.quadraticCurveTo(-40,-16-d*5,-46,-6),e.stroke(),e.strokeStyle=`#c03040`,e.lineWidth=4,e.beginPath(),e.moveTo(14,-12),e.lineTo(10,12),e.stroke(),e.restore()}function fa(e,t,n){t===2?da(e,n):t===0?la(e,n):ua(e,n);let r=Math.floor(n%1*30);e.font=`bold 13px monospace`,e.fillStyle=`#000`,e.fillRect(8,614,92,18),e.fillStyle=`#fff`,e.fillText(`T${t+1} 00:0${Math.floor(n)}:${String(r).padStart(2,`0`)}`,12,628)}var pa=e=>440*2**((e-69)/12);async function ma(e){let t=32e3,n=oa[e],r=new OfflineAudioContext(2,Math.ceil(n.dur*t),t),i=r.createGain();i.gain.value=.7;let a=r.createConvolver(),o=r.createBuffer(2,t*1.6,t);for(let e=0;e<2;e++){let t=o.getChannelData(e);for(let e=0;e<t.length;e++)t[e]=(Math.random()*2-1)*(1-e/t.length)**3*.4}a.buffer=o;let s=r.createGain();s.gain.value=.25,i.connect(r.destination),i.connect(a).connect(s).connect(r.destination);let c=60/n.bpm,l=(e,t,n=.5,a=.3,o=`triangle`)=>{let s=r.createOscillator();s.type=o,s.frequency.value=pa(t);let c=r.createOscillator();c.frequency.value=pa(t)*2.001;let l=r.createGain();l.gain.setValueAtTime(1e-4,e),l.gain.exponentialRampToValueAtTime(a,e+.005),l.gain.exponentialRampToValueAtTime(1e-4,e+n);let u=r.createGain();u.gain.value=.25,s.connect(l),c.connect(u).connect(l),l.connect(i),s.start(e),c.start(e),s.stop(e+n+.05),c.stop(e+n+.05)},u=(e,n,a,o,s=`highpass`)=>{let c=r.createBuffer(1,Math.ceil(n*t),t),l=c.getChannelData(0);for(let e=0;e<l.length;e++)l[e]=(Math.random()*2-1)*(1-e/l.length)**2;let u=r.createBufferSource();u.buffer=c;let d=r.createBiquadFilter();d.type=s,d.frequency.value=a;let f=r.createGain();f.gain.value=o,u.connect(d).connect(f).connect(i),u.start(e)},d=(e,t=.7)=>{let n=r.createOscillator();n.frequency.setValueAtTime(120,e),n.frequency.exponentialRampToValueAtTime(45,e+.12);let a=r.createGain();a.gain.setValueAtTime(t,e),a.gain.exponentialRampToValueAtTime(.001,e+.3),n.connect(a).connect(i),n.start(e),n.stop(e+.32)};if(e===2){let e=[64,67,71,67,64,62,59,62,64,67,71,74,71,67,64,59];for(let t=0;t<32;t++){let n=t*c*.5;t%4==0&&d(n,.45),u(n,.04,6e3,t%2?.06:.1),t%2==0&&l(n,e[t/2%16],c*.45,.16),t%8==0&&l(n,40+[0,3,5,3][t/8%4],c*1.8,.2,`sine`)}}else if(e===0){let e=[69,72,74,76,79,76,74,72,69,67,69,72,74,72,69,64],t=[[57,60,64],[53,57,60],[55,59,62],[52,55,59]];for(let n=0;n<16;n++){let r=n*c;if(n%2==0&&d(r,.55),u(r+c/2,.05,7e3,.12),n%4==2&&u(r,.16,1800,.18,`bandpass`),l(r,e[n],c*.9,.18),n%4==0)for(let e of t[n/4|0])l(r,e,c*3.8,.06,`sine`);l(r,[45,41,43,40][n/4|0]+(n%2?12:0),c*.45,.22,`sine`)}}else{for(let e=0;e<12;e++){let t=e*c;if(u(t,.03,e%4==0?2400:3400,.4,`bandpass`),e%4==0)for(let n of[[60,64,67,71],[57,60,64,67],[53,57,60,64]][e/4|0])l(t,n,c*3.6,.07,`sine`)}[48,55,52,53,50,48].forEach((e,t)=>{let n=t*c*2,a=r.createOscillator();a.type=`sawtooth`,a.frequency.value=pa(e);let o=r.createOscillator();o.frequency.value=5.2;let s=r.createGain();s.gain.value=pa(e)*.006,o.connect(s).connect(a.frequency);let l=r.createBiquadFilter();l.type=`lowpass`,l.frequency.value=900;let u=r.createGain();u.gain.setValueAtTime(1e-4,n),u.gain.exponentialRampToValueAtTime(.13,n+.25),u.gain.setValueAtTime(.13,n+c*1.7),u.gain.exponentialRampToValueAtTime(1e-4,n+c*2.1),a.connect(l).connect(u).connect(i),a.start(n),o.start(n),a.stop(n+c*2.2),o.stop(n+c*2.2)})}return r.startRendering()}var ha=0,ga=()=>`${Date.now().toString(36)}${(ha++).toString(36)}`;function _a(e,t){return{id:ga(),name:t,kind:e,url:``,mime:``,duration:8,w:16,h:9,audio:null,audioGain:1,thumb:``,bpm:0,loopIn:0,loopOut:8,speed:1,gain:1}}function va(e){let t=oa[e],n=_a(`test`,t.name);n.test=e,n.duration=n.loopOut=t.dur,n.w=360,n.h=640,n.bpm=t.bpm;let r=document.createElement(`canvas`);return r.width=360,r.height=640,fa(r.getContext(`2d`),e,1.2),n.thumb=Ca(r,360,640),ma(e).then(e=>{n.audio=e,n.audioGain=ba(e)}),n}function ya(e){let t=_a(`camera`,e===`environment`?`CAM`:`SELF`);return t.facing=e,t.duration=t.loopOut=1e6,t}function ba(e){let t=0,n=0;for(let r=0;r<e.numberOfChannels;r++){let i=e.getChannelData(r);for(let e=0;e<i.length;e+=4)t+=i[e]*i[e],n++}let r=Math.sqrt(t/Math.max(1,n));return r<1e-4?1:Math.min(6,.1/r)}var xa=null;async function Sa(e){if(e.size>25e7)return null;try{return xa??=new OfflineAudioContext(2,1,44100),await xa.decodeAudioData(await e.arrayBuffer())}catch{return null}}function Ca(e,t,n){let r=document.createElement(`canvas`),i=120/Math.max(t,n);return r.width=Math.max(8,Math.round(t*i)),r.height=Math.max(8,Math.round(n*i)),r.getContext(`2d`).drawImage(e,0,0,r.width,r.height),r.toDataURL(`image/jpeg`,.7)}function wa(e,t,n=2500){return new Promise(r=>{if(Math.abs(e.currentTime-t)<.002&&e.readyState>=2)return r();let i=()=>{e.removeEventListener(`seeked`,i),clearTimeout(a),r()},a=setTimeout(i,n);e.addEventListener(`seeked`,i),e.currentTime=t})}function Ta(e){let t=document.createElement(`video`);return t.src=e,t.muted=!0,t.playsInline=!0,t.setAttribute(`playsinline`,``),t.preload=`auto`,t.crossOrigin=`anonymous`,t}async function Ea(e,t){let n=e.type.startsWith(`image/`),r=_a(n?`image`:`video`,t.replace(/\.[^.]+$/,``).slice(0,12).toUpperCase()||`CLIP`);if(r.blob=e,r.mime=e.type,r.url=URL.createObjectURL(e),n){let e=new Image;return e.src=r.url,await e.decode().catch(()=>{}),r.w=e.naturalWidth||16,r.h=e.naturalHeight||9,r.thumb=Ca(e,r.w,r.h),r}let i=Ta(r.url);await new Promise(e=>{i.addEventListener(`loadedmetadata`,()=>e(),{once:!0}),i.addEventListener(`error`,()=>e(),{once:!0}),setTimeout(e,6e3)}),r.w=i.videoWidth||16,r.h=i.videoHeight||9,isFinite(i.duration)||(i.currentTime=1e7,await new Promise(e=>{i.addEventListener(`durationchange`,e,{once:!0}),setTimeout(e,3e3)})),r.duration=isFinite(i.duration)&&i.duration>0?i.duration:8,r.loopOut=r.duration,await wa(i,Math.min(.2,r.duration/2)),i.readyState>=2&&(r.thumb=Ca(i,r.w,r.h)),i.removeAttribute(`src`),i.load();let a=await Sa(e);return a&&(r.audio=a,r.audioGain=ba(a)),r}function Da(){return[`video/webm;codecs="vp8,opus"`,`video/webm`,`video/mp4;codecs="avc1.42E01E,mp4a.40.2"`,`video/mp4`].find(e=>typeof MediaRecorder<`u`&&MediaRecorder.isTypeSupported(e))||``}var Oa=class{rec=null;mic=null;chunks=[];started=0;get active(){return!!this.rec}async start(e,t){if(this.rec)return!0;e.want(t);for(let n=0;n<60&&!(e.ready&&e.facing===t);n++)await new Promise(e=>setTimeout(e,100));if(!e.stream)return!1;try{this.mic=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!0}})}catch{this.mic=null}let n=[...e.stream.getVideoTracks(),...this.mic?.getAudioTracks()??[]],r=Da();return this.chunks=[],this.rec=new MediaRecorder(new MediaStream(n),{mimeType:r||void 0,videoBitsPerSecond:6e6}),this.rec.ondataavailable=e=>e.data.size&&this.chunks.push(e.data),this.rec.start(250),this.started=performance.now(),!0}stop(){let e=this.rec;return e?new Promise(t=>{e.onstop=()=>{this.mic?.getTracks().forEach(e=>e.stop()),this.mic=null,this.rec=null;let n=(e.mimeType||`video/webm`).split(`;`)[0],r=new Blob(this.chunks,{type:n});t(r.size?r:null)},e.stop()}):Promise.resolve(null)}},ka=[[`orig`,`ORIGINAL`,`원본+자동 조율`],[`reson`,`RESONATE`,`공명(화음)`],[`pulse`,`PULSE`,`리듬`],[`pad`,`PAD`,`패드`],[`mute`,`MUTE`,`소리 없음`]],Z=[],Aa=[],ja=0,Ma=e=>`${e}${Date.now().toString(36)}${(ja++).toString(36)}`;function Na(e,t,n,r){let i=new Set(Z.map(e=>e.color));return{id:Ma(`ing`),name:`${t.toUpperCase()} ${Z.length+1}`,color:ot.find(e=>!i.has(e))??ot[Z.length%ot.length],src:e,kind:t,track:null,key:{lo:.55,hi:.7,color:`#00d040`,invert:!1},shape:{type:0,size:.32,ring:.25,spin:0},maskStamp:0,seed:{x:.5,y:.5,t:n},fixes:[],loopIn:n,loopOut:r,thumbs:[],look:{id:`none`,a:.5,b:.5},line:t===`shape`?2:1,lineSize:1,linePal:0,sound:{mode:`reson`,auto:!0,autoMode:!0,shift:0,gain:1},an:null,cell:-1,cellManual:!1}}function Pa(e){let t=e.kind.toUpperCase(),n=Z.filter(e=>e.name.startsWith(t+` `)).map(e=>parseInt(e.name.slice(t.length+1))||0),r=new Set(Z.map(e=>e.color));return{...e,id:Ma(`ing`),name:`${t} ${Math.max(Z.length,...n)+1}`,color:r.has(e.color)?ot.find(e=>!r.has(e))??e.color:e.color,seed:{...e.seed},fixes:(e.fixes??[]).map(e=>({...e})),key:{...e.key},shape:{...e.shape},look:{...e.look},sound:{...e.sound},thumbs:[...e.thumbs],an:e.an?{...e.an,chroma:[...e.an.chroma],onsets:[...e.an.onsets]}:null,cell:-1,cellManual:!1,saved:!1,dead:void 0}}var Fa=`prepared-tv-board`;function Ia(){return new Promise((e,t)=>{let n=indexedDB.open(Fa,1);n.onupgradeneeded=()=>{n.result.createObjectStore(`sources`,{keyPath:`id`}),n.result.createObjectStore(`ings`,{keyPath:`id`})},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}async function La(e,t,n){let r=await Ia();return new Promise((i,a)=>{let o=n(r.transaction(e,t).objectStore(e));o.onsuccess=()=>i(o.result),o.onerror=()=>a(o.error)})}async function Ra(e){if(e.blob)try{await La(`sources`,`readwrite`,t=>t.put({id:e.id,name:e.name,blob:e.blob}))}catch(e){console.warn(`source not saved`,e)}}async function za(e){let{src:t,track:n,...r}=e,i={...r,an:e.an?{...e.an}:null,srcId:t.id,track:n?{fps:n.fps,start:n.start,frames:n.frames,cx:n.cx,cy:n.cy,w:n.w,h:n.h,done:n.done}:null};try{await La(`ings`,`readwrite`,e=>e.put(i))}catch(e){console.warn(`ingredient not saved`,e)}}async function Ba(e){try{await La(`ings`,`readwrite`,t=>t.delete(e.id))}catch{}}function Va(){let e=va(0);e.id=`test0`;let t=va(1);t.id=`test1`;let n=va(2);n.id=`test2`,Aa.push(e,t,n)}async function Ha(e){let t=[],n=[];try{t=await La(`sources`,`readonly`,e=>e.getAll()),n=await La(`ings`,`readonly`,e=>e.getAll())}catch{return}for(let n of t)try{let t=await Ea(n.blob,n.name);t.id=n.id,t.name=n.name,Aa.push(t),e()}catch(e){console.warn(`source restore failed`,e)}for(let t of n.sort((e,t)=>e.id.localeCompare(t.id))){let n=Aa.find(e=>e.id===t.srcId);if(!n||Z.length>=16)continue;let{srcId:r,track:i,...a}=t;Z.push({...a,src:n,saved:!0,track:i?{...i,running:!1,cancel:!1}:null}),e()}}var Ua=16e3;function Wa(e,t,n){let r=e.sampleRate,i=Math.max(0,Math.floor(t*r)),a=Math.min(e.length,Math.floor(n*r)),o=r/Ua,s=Math.max(0,Math.floor((a-i)/o)),c=new Float32Array(s),l=Array.from({length:e.numberOfChannels},(t,n)=>e.getChannelData(n));for(let e=0;e<s;e++){let t=i+Math.floor(e*o),n=0;for(let e of l)for(let r=0;r<Math.max(1,Math.floor(o));r++)n+=e[Math.min(e.length-1,t+r)];c[e]=n/(l.length*Math.max(1,Math.floor(o)))}return c}function Ga(e){let t=e.length,n=new Float32Array(t);for(let n=1,r=0;n<t;n++){let i=t>>1;for(;r&i;i>>=1)r^=i;r^=i,n<r&&([e[n],e[r]]=[e[r],e[n]])}for(let r=2;r<=t;r<<=1){let i=-2*Math.PI/r;for(let a=0;a<t;a+=r)for(let t=0;t<r/2;t++){let o=Math.cos(i*t),s=Math.sin(i*t),c=e[a+t],l=n[a+t],u=e[a+t+r/2]*o-n[a+t+r/2]*s,d=e[a+t+r/2]*s+n[a+t+r/2]*o;e[a+t]=c+u,n[a+t]=l+d,e[a+t+r/2]=c-u,n[a+t+r/2]=l-d}}let r=new Float32Array(t/2);for(let i=0;i<t/2;i++)r[i]=Math.hypot(e[i],n[i]);return r}function Ka(e,t,n){let r=Math.floor(Ua/1e3),i=Math.floor(Ua/55),a=new Float32Array(291);for(let r=1;r<=i;r++){let i=0;for(let a=0;a<n;a++){let n=e[t+a]-e[t+a+r];i+=n*n}a[r]=i}let o=0,s=-1,c=1;for(let e=1;e<=i;e++){o+=a[e];let t=o>0?a[e]*e/o:1;a[e]=t}for(let e=r;e<i;e++){if(a[e]<.18){for(;e+1<i&&a[e+1]<a[e];)e++;s=e,c=a[e];break}a[e]<c&&(c=a[e],s=e)}if(s<0)return[0,1];let l=a[s-1]??a[s],u=a[s],d=a[s+1]??a[s],f=l-2*u+d;return[Ua/(f?s+(l-d)/(2*f):s),c]}function qa(e){return e&&e.silent?`mute`:`reson`}function Ja(e,t,n){let r={f0:0,midi:0,pc:-1,conf:0,centroid:1e3,onsetRate:0,onsets:[],rms:0,normGain:1,register:60,rhythm:0,chroma:Array(12).fill(0),silent:!0};if(!e)return r;let i=Wa(e,t,n);if(i.length<2048)return r;let a=0;for(let e=0;e<i.length;e++)a+=i[e]*i[e];let o=Math.sqrt(a/i.length);if(o<.002)return{...r,rms:o};let s=1024,c=[],l=new Float32Array(12),u=0,d=0,f=Math.floor(Ua/55),p=new Float32Array(s/2),m=0;for(let e=0;e+s+f<i.length;e+=512){let t=0;for(let n=0;n<s;n++)t+=i[e+n]*i[e+n];if(t=Math.sqrt(t/s),t<o*.35)continue;u++;let[n,r]=Ka(i,e,s);if(n>0&&r<.25){let e=69+12*Math.log2(n/440);c.push(e),l[(Math.round(e)%12+12)%12]+=1-r,d+=r}if(m++%2==0){let t=new Float32Array(s);for(let n=0;n<s;n++)t[n]=i[e+n]*(.5-.5*Math.cos(2*Math.PI*n/1023));let n=Ga(t);for(let e=0;e<n.length;e++)p[e]+=n[e]}}let h=Array(12).fill(0),g=4096,_=[];for(let e=0;e<g/2;e++){let t=e*Ua/g;_.push(t<100||t>2e3?-1:(Math.round(69+12*Math.log2(t/440))%12+12)%12)}for(let e=0;e+g<=i.length;e+=g/2){let t=new Float32Array(g);for(let n=0;n<g;n++)t[n]=i[e+n]*(.5-.5*Math.cos(2*Math.PI*n/4095));let n=Ga(t);for(let e=0;e<n.length;e++)_[e]>=0&&(h[_[e]]+=n[e]*n[e])}let v=h.reduce((e,t)=>e+t,0)||1;for(let e=0;e<12;e++)h[e]/=v;let y=0,b=0;for(let e=1;e<p.length;e++)y+=p[e]*(e*Ua/s),b+=p[e];let x=b?y/b:1e3;c.sort((e,t)=>e-t);let S=u?c.length/u:0,C=c.length?1-d/c.length/.25:0,ee=Math.max(0,Math.min(1,S*(.5+.5*C))),te=c.length?c[Math.floor(c.length/2)]:0,w=-1,ne=0;l.forEach((e,t)=>e>ne&&(ne=e,w=t));let re=Math.round(Ua*.01),T=[];for(let e=0;e+re<=i.length;e+=re){let t=0;for(let n=0;n<re;n++)t+=Math.abs(i[e+n]);T.push(t/re)}let E=T.map((e,t)=>Math.max(0,e-(T[t-1]??e))),D=E.reduce((e,t)=>e+t,0)/Math.max(1,E.length),ie=D+Math.sqrt(E.reduce((e,t)=>e+(t-D)**2,0)/Math.max(1,E.length))*1.2,ae=[];for(let e=1;e<E.length-1;e++)E[e]>ie&&E[e]>=E[e-1]&&E[e]>=E[e+1]&&(!ae.length||e*.01-ae[ae.length-1]>.08)&&ae.push(e*.01);let O=i.length/Ua,k=ae.length/O,A=69+12*Math.log2(x/440),oe=ee>.4&&te?te*.7+A*.3:A;return{f0:te?440*2**((te-69)/12):0,midi:te,pc:ee>.25?w:-1,conf:ee,centroid:x,onsetRate:k,onsets:ae,rms:o,normGain:Math.min(6,.1/o),register:oe,rhythm:k,chroma:h,silent:!1}}var Ya=`modulepreload`,Xa=function(e,t){return new URL(e,t).href},Za={},Qa=function(e){return e.pathname.endsWith(`.css`)},$a=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},eo=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Xa(t,n);let r=s(t),i=Qa(r);return $a(Za,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Ya,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},to=()=>new URL(`./`,document.baseURI).href;async function no(e){try{let t=await fetch(to()+e);if(t.ok&&!(t.headers.get(`content-type`)||``).includes(`html`))return await t.arrayBuffer()}catch{}let t=await(await fetch(to()+e+`.json`)).json(),n=atob(t),r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r.buffer}var ro=class{model=null;tf=null;c=document.createElement(`canvas`);x=this.c.getContext(`2d`,{willReadFrequently:!0});busy=!1;async load(){let e=await eo(()=>import(`./dist-C_52oek8.js`).then(e=>e.t),[],import.meta.url);await eo(()=>import(`./dist-CHi3dtUT.js`),__vite__mapDeps([0,1]),import.meta.url);let{loadGraphModel:t}=await eo(async()=>{let{loadGraphModel:e}=await import(`./dist-CtMjQmT9.js`);return{loadGraphModel:e}},__vite__mapDeps([2,1]),import.meta.url);await e.setBackend(`webgl`),await e.ready();let n=await(await fetch(to()+`models/tfjs-selfie/model.json`)).json(),r=await no(`models/tfjs-selfie/group1-shard1of1.bin`);this.model=await t(e.io.fromMemory({modelTopology:n.modelTopology,weightSpecs:n.weightsManifest[0].weights,weightData:r})),this.tf=e,this.c.width=this.c.height=256}async run(e){let t=this.tf,n=this.model;if(!t||!n||this.busy)return null;this.busy=!0;try{this.x.drawImage(e,0,0,256,256);let r=t.tidy(()=>{let e=t.expandDims(t.div(t.cast(t.browser.fromPixels(this.c),`float32`),255),0),r=n.predict(e);return t.slice(r,[0,0,0,1],[1,256,256,1])}),i=await r.data();r.dispose();let a=new Uint8Array(i.length);for(let e=0;e<i.length;e++)a[e]=Math.max(0,Math.min(255,i[e]*255));return a}finally{this.busy=!1}}},io=null,ao=()=>new URL(`./`,document.baseURI).href;async function oo(){return io||(io=eo(async()=>{let{FilesetResolver:e}=await import(`./vision_bundle-ciZpqDg5.js`);return{FilesetResolver:e}},[],import.meta.url).then(({FilesetResolver:e})=>e.forVisionTasks(ao()+`mediapipe`)),io.catch(()=>io=null)),io}var so=null;function co(){return so||=(async()=>{try{return await WebAssembly.compile(new Uint8Array([0,97,115,109,1,0,0,0])),!0}catch{return!1}})(),so}async function lo(e){try{let t=await fetch(ao()+`models/${e}.tflite`);if(t.ok&&!(t.headers.get(`content-type`)||``).includes(`html`))return new Uint8Array(await t.arrayBuffer())}catch{}let t=await fetch(ao()+`models/${e}.json`);if(!t.ok)throw Error(`model ${e} not found (${t.status})`);let n=await t.json(),r=atob(n),i=new Uint8Array(r.length);for(let e=0;e<r.length;e++)i[e]=r.charCodeAt(e);return i}var uo=class{c=document.createElement(`canvas`);x=this.c.getContext(`2d`);draw(e,t){let[n,r]=e instanceof HTMLVideoElement?[e.videoWidth,e.videoHeight]:e instanceof HTMLImageElement?[e.naturalWidth,e.naturalHeight]:e instanceof HTMLCanvasElement?[e.width,e.height]:[t,t],i=t/Math.max(n,r,1),a=Math.max(16,Math.round(n*i)),o=Math.max(16,Math.round(r*i));return(this.c.width!==a||this.c.height!==o)&&(this.c.width=a,this.c.height=o),this.x.drawImage(e,0,0,a,o),this.c}};function fo(e){return e instanceof HTMLVideoElement?[e.videoWidth,e.videoHeight]:e instanceof HTMLImageElement?[e.naturalWidth,e.naturalHeight]:e instanceof HTMLCanvasElement?[e.width,e.height]:[256,256]}function po(e,t,n){let r=0,i=0,a=0;for(let n=0;n<e.length;n++)e[n]>127&&(r+=n%t,i+=n/t|0,a++);return{data:e,w:t,h:n,cx:a?(r/a+.5)/t:.5,cy:a?(i/a+.5)/n:.5,area:a/e.length}}var mo=new class{tapStatus=`idle`;personStatus=`idle`;message=``;tap=null;person=null;tf=null;small=new uo;ts=0;tapP=null;personP=null;loadTap(){return this.tapP??=(async()=>{this.tapStatus=`loading`,this.message=`사물 분리 모델 불러오는 중… (6MB)`;try{if(!await co())throw Error(`이 화면에서는 WebAssembly가 막혀 있어 TAP 대신 PERSON·KEY·SHAPE를 쓰세요`);let{InteractiveSegmenterLegacy:e}=await eo(async()=>{let{InteractiveSegmenterLegacy:e}=await import(`./vision_bundle-ciZpqDg5.js`);return{InteractiveSegmenterLegacy:e}},[],import.meta.url),t=await oo(),n=await lo(`magic_touch`),r=r=>e.createFromOptions(t,{baseOptions:{modelAssetBuffer:n,delegate:r},outputCategoryMask:!1,outputConfidenceMasks:!0});try{this.tap=await r(`GPU`)}catch{this.tap=await r(`CPU`)}this.tapStatus=`ready`,this.message=``}catch(e){this.tapStatus=`error`,this.message=String(e.message||e),console.warn(`tap model failed`,e)}})(),this.tapP}loadPerson(){return this.personP??=(async()=>{this.personStatus=`loading`,this.message=`사람 분리 모델 불러오는 중…`;try{if(!await co())throw Error(`wasm blocked`);let{ImageSegmenter:e}=await eo(async()=>{let{ImageSegmenter:e}=await import(`./vision_bundle-ciZpqDg5.js`);return{ImageSegmenter:e}},[],import.meta.url),t=await oo(),n=await lo(`selfie_segmenter`),r=r=>e.createFromOptions(t,{baseOptions:{modelAssetBuffer:n,delegate:r},runningMode:`VIDEO`,outputCategoryMask:!1,outputConfidenceMasks:!0});try{this.person=await r(`GPU`)}catch{this.person=await r(`CPU`)}this.personStatus=`ready`,this.message=``}catch(e){console.warn(`person model via mediapipe failed, trying tfjs`,e);try{this.tf=new ro,await this.tf.load(),this.personStatus=`ready`,this.message=``}catch(e){this.personStatus=`error`,this.message=`사람 분리 모델을 불러오지 못했어요`,console.warn(e)}}})(),this.personP}crop=document.createElement(`canvas`);cropX=this.crop.getContext(`2d`);tapAt(e,t,n,r){if(!this.tap)return null;try{let i=this.small.draw(e,256),a=i.width,o=i.height,s=i,c=t,l=n;if(r){let[i,u,d,f]=r,p=Math.max(1,Math.round(d*a)),m=Math.max(1,Math.round(f*o)),h=256/Math.max(p,m),g=Math.max(16,Math.round(p*h)),_=Math.max(16,Math.round(m*h));(this.crop.width!==g||this.crop.height!==_)&&(this.crop.width=g,this.crop.height=_);let[v,y]=fo(e);this.cropX.drawImage(e,i*v,u*y,d*v,f*y,0,0,g,_),s=this.crop,c=(t-i)/d,l=(n-u)/f}let u=this.tap.segment(s,{keypoint:{x:Math.min(.999,Math.max(0,c)),y:Math.min(.999,Math.max(0,l))}}),d=u.confidenceMasks?.[0],f=null;if(d){let e=d.getAsFloat32Array(),t=new Uint8Array(a*o);if(r){let[n,i,s,c]=r;for(let r=0;r<o;r++){let l=((r+.5)/o-i)/c;if(l<0||l>=1)continue;let u=Math.min(d.height-1,Math.floor(l*d.height));for(let i=0;i<a;i++){let o=((i+.5)/a-n)/s;o<0||o>=1||(t[r*a+i]=e[u*d.width+Math.min(d.width-1,Math.floor(o*d.width))]*255)}}}else for(let n=0;n<e.length&&n<t.length;n++)t[n]=e[n]*255;f=po(t,a,o)}return u.close?.(),f}catch(e){return console.warn(`tap segment error`,e),null}}frame(e){return this.small.draw(e,256)}async personOf(e){if(this.tf){let t=await this.tf.run(e);return t?po(Uint8Array.from(t),256,256):null}if(!this.person)return null;let t=null;this.ts=Math.max(this.ts+1,performance.now());try{this.person.segmentForVideo(this.small.draw(e,256),this.ts,e=>{let n=e.confidenceMasks?.[0];if(n){let e=n.getAsFloat32Array(),r=new Uint8Array(e.length);for(let t=0;t<e.length;t++)r[t]=e[t]*255;t=po(r,n.width,n.height)}e.close()})}catch(e){console.warn(`person segment error`,e)}return t}},ho=20;function go(e,t,n,r,i){let a=document.createElement(`canvas`),o=72/Math.max(t,n);a.width=Math.max(8,Math.round(t*o)),a.height=Math.max(8,Math.round(n*o));let s=a.getContext(`2d`);s.fillStyle=`#101010`,s.fillRect(0,0,a.width,a.height);let c=document.createElement(`canvas`);c.width=r.w,c.height=r.h;let l=c.getContext(`2d`),u=l.createImageData(r.w,r.h);for(let e=0;e<r.data.length;e++)u.data[e*4+3]=r.data[e]>110?255:0;l.putImageData(u,0,0);let d=document.createElement(`canvas`);d.width=a.width,d.height=a.height;let f=d.getContext(`2d`);return f.drawImage(c,0,0,a.width,a.height),f.globalCompositeOperation=`source-in`,f.drawImage(e,0,0,a.width,a.height),s.drawImage(d,0,0),s.strokeStyle=i,s.lineWidth=3,s.strokeRect(1.5,1.5,a.width-3,a.height-3),a.toDataURL(`image/png`)}async function _o(e){let t=e.src;if(t.kind===`test`){let e=document.createElement(`canvas`);e.width=360,e.height=640;let n=e.getContext(`2d`);return{at:async r=>(fa(n,t.test??0,r),e),size:[360,640],done:()=>{}}}if(t.kind===`image`){let e=new Image;return e.src=t.url,await e.decode().catch(()=>{}),{at:async()=>e,size:[e.naturalWidth||16,e.naturalHeight||9],done:()=>{}}}if(t.kind===`video`){let e=Ta(t.url);return await new Promise(t=>{e.addEventListener(`loadeddata`,()=>t(),{once:!0}),setTimeout(t,6e3)}),{at:async t=>(await wa(e,t),e.readyState>=2?e:null),size:[e.videoWidth||16,e.videoHeight||9],done:()=>{e.removeAttribute(`src`),e.load()}}}return null}var vo=[],yo=!1;function bo(e,t){if(e.track&&(e.track.cancel=!0),e.kind!==`tap`&&e.kind!==`person`)return;let n=e.src,r=e.loopIn,i=Math.min(e.loopOut,e.loopIn+ho,n.kind===`image`?e.loopIn+.01:1/0),a=n.kind===`image`?1:15,o=Math.max(1,Math.ceil((i-r)*a));e.track={fps:a,start:r,frames:Array(o).fill(null),cx:new Float32Array(o),cy:new Float32Array(o),w:0,h:0,done:0,running:!1,cancel:!1},e.thumbs=[],vo.push(e),xo(t)}async function xo(e){if(!yo){yo=!0;try{for(;vo.length;){let t=vo.shift();t.dead||!t.track||t.track.cancel||await jo(t,e)}}finally{yo=!1}}}function So(e,t,n,r,i=0){let a=new Float32Array(t*n);for(let t=0;t<a.length;t++)a[t]=e[t]>127?1e6:0;for(let e=0;e<n;e++)for(let r=0;r<t;r++){let i=e*t+r;if(!a[i])continue;let o=a[i];r>0&&(o=Math.min(o,a[i-1]+1)),e>0&&(o=Math.min(o,a[i-t]+1)),r>0&&e>0&&(o=Math.min(o,a[i-t-1]+1.414)),r<t-1&&e>0&&(o=Math.min(o,a[i-t+1]+1.414)),a[i]=r===0||e===0||r===t-1||e===n-1?Math.min(o,1):o}let o=[t/2,n/2],s=-1;for(let e=n-1;e>=0;e--)for(let c=t-1;c>=0;c--){let l=e*t+c;if(!a[l])continue;let u=a[l];c<t-1&&(u=Math.min(u,a[l+1]+1)),e<n-1&&(u=Math.min(u,a[l+t]+1)),c<t-1&&e<n-1&&(u=Math.min(u,a[l+t+1]+1.414)),c>0&&e<n-1&&(u=Math.min(u,a[l+t-1]+1.414)),a[l]=u,r&&Math.hypot(c-r[0],e-r[1])<i||u>s&&(s=u,o=[c,e])}return[o,s]}function Co(e,t,n,r,i){let a=new Uint8Array(e.length),o=Math.round(r),s=Math.round(i);for(let r=0;r<n;r++){let i=r-s;if(!(i<0||i>=n))for(let n=0;n<t;n++){let s=n-o;s>=0&&s<t&&(a[r*t+n]=e[i*t+s])}}return a}function wo(e,t){let n=0,r=0;for(let i=0;i<e.length;i++){let a=e[i]>127,o=t[i]>127;a&&o&&n++,(a||o)&&r++}return r?n/r:0}function To(e){let t=0;for(let n=0;n<e.length;n++)e[n]>127&&t++;return t}function Eo(e,t){let n=new Float32Array(64),r=0;for(let i=0;i<t.length;i++)if(t[i]>127){let t=e[i*4]>>6,a=e[i*4+1]>>6,o=e[i*4+2]>>6;n[t*16+a*4+o]++,r++}if(r)for(let e=0;e<64;e++)n[e]/=r;return n}var Do=(e,t)=>{let n=0;for(let r=0;r<64;r++)n+=Math.min(e[r],t[r]);return n},Oo=e=>e.area>8e-4&&e.area<.5;function ko(e,t,n){let r=[[t,n]];for(let e=0;e<8;e++)r.push([t+Math.cos(e/8*Math.PI*2)*.025,n+Math.sin(e/8*Math.PI*2)*.018]);let i=null,a=-1,o=null;for(let[s,c]of r){let r=mo.tapAt(e,Math.min(.99,Math.max(.01,s)),Math.min(.99,Math.max(.01,c)));if(!r||(o??=r,!Oo(r)))continue;let l=r.data[Math.min(r.h-1,Math.floor(n*r.h))*r.w+Math.min(r.w-1,Math.floor(t*r.w))]>127,u=+!!l+(1-Math.min(1,r.area*4))*.5;if(u>a&&(a=u,i=r),s===t&&c===n&&l&&r.area<.15)break}return i??o}var Ao=e=>e.getContext(`2d`,{willReadFrequently:!0}).getImageData(0,0,e.width,e.height).data;async function jo(e,t){let n=e.track;n.running=!0,e.kind===`tap`?await mo.loadTap():await mo.loadPerson();let r=await _o(e);if(!r){n.running=!1;return}let i=n.frames.length,a=e=>Math.max(0,Math.min(i-1,Math.round((e-n.start)*n.fps))),o=[e.seed,...e.fixes??[]].map(e=>({...e,i:a(e.t)})).sort((e,t)=>e.i-t.i),s=[];o.forEach((e,t)=>{let n=t+1<o.length?o[t+1].i-1:i-1,r=[];for(let t=e.i;t<=n;t++)r.push(t);s.push({seed:e,order:r}),t===0&&s.push({seed:e,order:Array.from({length:e.i},(t,n)=>e.i-1-n)})});let c=null,l=0,u=performance.now();for(let a of s){let o=null,s=[0,0],d=null,f=[a.seed.x,a.seed.y],p=0,m=n.frames[a.seed.i];if(a.order[0]!==a.seed.i&&m){o=m,d=[n.cx[a.seed.i]*n.w,n.cy[a.seed.i]*n.h];let[e]=So(m,n.w,n.h);f=[(e[0]+.5)/n.w,(e[1]+.5)/n.h]}for(let m of a.order){if(n.cancel||e.dead)break;let h=await r.at(n.start+m/n.fps);if(!h)continue;let g=null;if(e.kind===`person`)g=await mo.personOf(h);else if(!o)g=ko(h,f[0],f[1]);else{let e=n.w,t=n.h,r=Co(o,e,t,s[0],s[1]),[i]=So(r,e,t),[a]=So(r,e,t,i,Math.max(e,t)*.08),u=[[(i[0]+.5)/e,(i[1]+.5)/t],[f[0]+s[0]/e,f[1]+s[1]/t],[(a[0]+.5)/e,(a[1]+.5)/t]],m=Ao(mo.frame(h)),_=Math.max(1,To(o)),v=e=>Math.exp(-Math.abs(Math.log(Math.max(e/_,.001)))*1.5)*.5+(l?Math.exp(-Math.abs(Math.log(Math.max(e/l,.001))))*.5:.5),y=e=>c?Do(Eo(m,e.data),c):.5,b=null,x=-1,S=u[0];for(let e of u){let t=mo.tapAt(h,e[0],e[1]);if(!t||!Oo(t))continue;let n=.45*wo(t.data,r)+.25*v(To(t.data))+.3*y(t);if(n>x&&(x=n,b=t,S=e),n>.72)break}if(!(b&&x>=.35)){let[n,r]=d?[(d[0]+s[0])/e,(d[1]+s[1])/t]:f,i=Math.min(.3,.06+p*.03),a=null,o=-1,c=f;for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++){if(!t&&!e)continue;let s=[Math.min(.98,Math.max(.02,n+t*i*.56)),Math.min(.98,Math.max(.02,r+e*i))],l=mo.tapAt(h,s[0],s[1]);if(!l||!Oo(l))continue;let u=Math.exp(-Math.hypot((l.cx-n)/.56,l.cy-r)/(i*1.5)),d=.45*y(l)+.35*v(To(l.data))+.2*u;d>o&&(o=d,a=l,c=s)}a&&o>=.5&&(b=a,x=o,S=c)}b&&x>=.35?(g=b,f=S,p=0):(g=po(r,e,t),s=[s[0]*.5,s[1]*.5],p++)}if(!g)continue;!o&&e.kind===`tap`&&!c&&(c=Eo(Ao(mo.frame(h)),g.data),l=Math.max(1,To(g.data))),n.w=g.w,n.h=g.h,n.frames[m]=g.data,n.cx[m]=g.cx,n.cy[m]=g.cy;let _=[g.cx*g.w,g.cy*g.h];if(d&&(s=[s[0]*.5+(_[0]-d[0])*.5,s[1]*.5+(_[1]-d[1])*.5]),d=_,o=g.data,e.kind===`tap`){let[e]=So(g.data,g.w,g.h);f=[(e[0]+.5)/g.w,(e[1]+.5)/g.h]}n.done++;let v=Math.floor(m/i*4);m!==a.seed.i&&m%Math.max(1,Math.floor(i/4))!==0||e.thumbs[v]||(e.thumbs[v]=go(h,r.size[0],r.size[1],g,e.color)),e.maskStamp++,performance.now()-u>40&&(t(),await new Promise(e=>setTimeout(e,0)),u=performance.now())}}!n.cancel&&!e.dead&&Mo(n),n.done=i,n.running=!1,r.done(),e.maskStamp++,t()}function Mo(e){let t=e.frames,n=t.map((e,n)=>{let r=t[n-1],i=t[n+1];if(!e||!r||!i||r.length!==e.length||i.length!==e.length)return e;let a=new Uint8Array(e.length);for(let t=0;t<e.length;t++){let n=e[t],o=r[t],s=i[t];a[t]=Math.max(Math.min(n,o),Math.min(Math.max(n,o),s))}return a});for(let e=0;e<t.length;e++)t[e]=n[e]}var No=class{s;camera;el=null;speed=1;loopIn;loopOut;frozen=!1;frozenAt=0;t0=0;p0=0;parked=!0;stamp=0;ctx=null;seeking=!1;lastDrawn=-1;constructor(e,t=null){this.s=e,this.camera=t,this.loopIn=e.loopIn,this.loopOut=e.loopOut,this.speed=e.speed}get len(){return Math.max(.05,this.loopOut-this.loopIn)}pos(e){if(this.frozen)return this.frozenAt;let t=this.p0+(e-this.t0)*this.speed-this.loopIn;return this.loopIn+(t%this.len+this.len)%this.len}restart(e,t=this.loopIn){this.t0=e,this.p0=t,this.frozen=!1}setSpeed(e,t){let n=this.pos(t);this.speed=e,this.t0=t,this.p0=n}setLoop(e,t,n){let r=this.pos(n);this.loopIn=Math.max(0,Math.min(e,this.s.duration-.05)),this.loopOut=Math.max(this.loopIn+.05,Math.min(t,this.s.duration)),this.t0=n,this.p0=Math.min(Math.max(r,this.loopIn),this.loopOut-.01)}nudge(e,t){let n=this.pos(t);this.t0=t,this.p0=n+e,this.frozen&&(this.frozenAt=this.pos(t))}freeze(e,t){e!==this.frozen&&(e?(this.frozenAt=this.pos(t),this.frozen=!0):(this.frozen=!1,this.t0=t,this.p0=this.frozenAt))}sameAs(e,t){return e.s===this.s&&Math.abs(e.pos(t)-this.pos(t))<.04&&e.speed===this.speed&&e.frozen===this.frozen}copyTiming(e){this.t0=e.t0,this.p0=e.p0,this.speed=e.speed,this.loopIn=e.loopIn,this.loopOut=e.loopOut,this.frozen=e.frozen,this.frozenAt=e.frozenAt}size(){let e=this.s;return e.kind===`camera`&&this.camera?[this.camera.video.videoWidth||16,this.camera.video.videoHeight||9]:e.kind===`test`?[360,640]:[e.w||16,e.h||9]}get live(){return this.s.kind===`camera`||this.s.kind===`beam`||this.s.kind===`matte`}ensure(){let e=this.s;if(!this.el){if(e.kind===`video`){let t=Ta(e.url);t.loop=!0,t.addEventListener(`seeked`,()=>{this.seeking=!1,this.stamp++}),this.el=t}else if(e.kind===`image`){let t=new Image;t.src=e.url,this.el=t}else if(e.kind===`test`){let e=document.createElement(`canvas`);e.width=360,e.height=640,this.ctx=e.getContext(`2d`),this.el=e}}}element(){let e=this.s;if(e.kind===`camera`){let t=this.camera;return t&&t.facing===e.facing&&t.ready?t.video:null}this.ensure();let t=this.el;return t?t instanceof HTMLVideoElement?t.readyState>=2?t:null:t instanceof HTMLImageElement?t.complete&&t.naturalWidth?t:null:t:null}tick(e){let t=this.s;this.parked=!1,this.ensure();let n=this.pos(e);if(t.kind===`test`&&this.ctx){let e=Math.round(n*30)/30;e!==this.lastDrawn&&(fa(this.ctx,t.test??0,e),this.lastDrawn=e,this.stamp++);return}if(t.kind===`camera`){this.stamp++;return}let r=this.el;if(!(r instanceof HTMLVideoElement))return;if(this.frozen){r.paused||r.pause(),!this.seeking&&Math.abs(r.currentTime-n)>.03&&(this.seeking=!0,r.currentTime=n);return}if(r.paused&&r.play().catch(()=>{}),this.seeking)return;let i=r.currentTime-n;Math.abs(i)>this.len/2&&(i-=Math.sign(i)*this.len),Math.abs(i)>.25||r.currentTime>this.loopOut+.05||r.currentTime<this.loopIn-.3?(this.seeking=!0,r.currentTime=n,r.playbackRate=Math.min(4,Math.max(.25,this.speed))):r.playbackRate=Math.min(4,Math.max(.25,this.speed*(1-Math.max(-.08,Math.min(.08,i))))),this.stamp++}park(){this.parked||(this.parked=!0,this.el instanceof HTMLVideoElement&&!this.el.paused&&this.el.pause())}dispose(){this.park(),this.el instanceof HTMLVideoElement&&(this.el.removeAttribute(`src`),this.el.load()),this.el=null}},Po=new Be,Fo=new Map,Io=new WeakMap;function Lo(e){let t=Fo.get(e.id);return t&&t.s===e.src||(t?.dispose(),t=new No(e.src,Po),Fo.set(e.id,t)),t}function Ro(e){Fo.get(e.id)?.dispose(),Fo.delete(e.id)}function zo(e,t,n){t.loopIn=e.loopIn,t.loopOut=Math.max(e.loopIn+.05,e.loopOut);let r=Oi(e),i=Ai(e,n),a=Math.round(i/Math.max(.01,ki(e)));(Io.get(t)!==a||Math.abs(t.speed-r)>.001)&&(Io.set(t,a),t.speed=r,t.restart(i,e.loopIn))}var Bo=new Map;function Vo(e){let t=Bo.get(e);return t||(t=new No(e,Po),t.restart(performance.now()/1e3),Bo.set(e,t)),t}function Ho(e){let t=null;for(let n of[...Fo.values(),...Bo.values()])e.has(n)?n.s.kind===`camera`&&!t&&(t=n.s.facing??null):n.park();Po.want(t)}var Uo=e=>h(`p`,{class:`hint`},e),Wo=(...e)=>h(`div`,{class:`keys`},...e.filter(Boolean)),Go=(e,...t)=>h(`div`,{class:`sec`},h(`div`,{class:`sec-t`},e),...t.filter(Boolean));function Ko(e){if(e.cell>=0)return Math.floor(e.cell/4);let t=e.an?.register??60;return t<50?0:t<64?1:t<78?2:3}function qo(e){let{renderer:t}=e,n=new Oa,a=Aa.find(e=>e.id===i.board.src)??Aa[0],s=null,l=`tap`,u=!1,d=`look`,f=!0,p={a:0,b:0},m=()=>P.beat;function g(){let e=Math.min(a.duration,i.board.loopBars*4*m());p.a=0,p.b=a.kind===`image`?Math.min(a.duration,16*m()):e}g();let _=h(`div`,{class:`marks`}),ee=h(`div`,{class:`osd top`}),w=h(`div`,{class:`osd hint`}),ne=h(`div`,{class:`pgm-screen`},_,ee,w),re=h(`div`,{class:`monitor`},ne),D=h(`canvas`,{class:`timeline`}),ie=h(`div`,{class:`tl-box`},D),ae=h(`div`,{class:`keys tl-keys`},...[1,2,4].map(e=>b(`${e} BAR`,{cls:`small`,lit:()=>Math.abs(p.b-p.a-e*4*m())<.02,onPress:()=>{i.board.loopBars=e;let t=Math.min(e*4*m(),a.duration);p.b=Math.min(a.duration,p.a+t),p.a=p.b-t,ue()}})),b(`ALL`,{cls:`small`,onPress:()=>(p.a=0,p.b=Math.min(a.duration,20),ue())})),O=null,k=0,A=0,oe=0,j=e=>{let t=D.getBoundingClientRect();return(e-t.left)/t.width*a.duration},se=e=>{let t=m();return Math.max(0,Math.min(a.duration,Math.round(e/t)*t))};D.addEventListener(`pointerdown`,e=>{D.setPointerCapture(e.pointerId);let t=j(e.clientX),n=a.duration*.06;O=Math.abs(t-p.a)<n?`a`:Math.abs(t-p.b)<n?`b`:t>p.a&&t<p.b?`mid`:t<p.a?`a`:`b`,k=t,A=p.a,oe=p.b}),D.addEventListener(`pointermove`,e=>{if(!O||!D.hasPointerCapture(e.pointerId))return;let t=j(e.clientX),n=m();if(O===`a`)p.a=Math.min(se(t),p.b-n);else if(O===`b`)p.b=Math.max(se(t),p.a+n);else{let e=se(t-k+A)-A,n=oe-A;p.a=Math.max(0,Math.min(a.duration-n,A+e)),p.b=p.a+n}p.b=Math.min(p.b,p.a+20),ce()}),D.addEventListener(`pointerup`,()=>{O&&ue(),O=null});function ce(){let e=D.getBoundingClientRect(),t=Math.max(10,Math.round(e.width)),n=Math.max(10,Math.round(e.height));(D.width!==t||D.height!==n)&&(D.width=t,D.height=n);let r=D.getContext(`2d`);r.fillStyle=`#101010`,r.fillRect(0,0,t,n);let i=Math.max(.01,a.duration);r.fillStyle=`#3a3a3a`;for(let e=0,a=0;e<i;e+=m(),a++)r.fillRect(Math.round(e/i*t),a%4?n-6:n-12,1,a%4?6:12);let o=a.audio;if(o){let e=o.getChannelData(0);r.fillStyle=`#5a7a5a`;for(let i=0;i<t;i++){let a=Math.floor(i/t*e.length),o=Math.floor((i+1)/t*e.length),s=0;for(let t=a;t<o;t+=8)s=Math.max(s,Math.abs(e[t]));let c=Math.max(1,s*(n-14));r.fillRect(i,(n-12)/2-c/2,1,c)}}let s=p.a/i*t,c=p.b/i*t;r.fillStyle=`rgba(255,224,64,0.22)`,r.fillRect(s,0,c-s,n),r.fillStyle=`#ffe040`,r.fillRect(s-2,0,4,n),r.fillRect(c-2,0,4,n);let l=de().pos(N())/i*t;r.fillStyle=`#ff3020`,r.fillRect(l,0,2,n),r.fillStyle=`#f0f0f0`,r.font=`10px monospace`,r.fillText(`${p.a.toFixed(2)}s — ${p.b.toFixed(2)}s  (${Math.round((p.b-p.a)/m())} beats)`,4,11)}let le=0;function ue(){let e=s;e&&(e.loopIn=p.a,e.loopOut=p.b,e.seed.t=Math.min(Math.max(e.seed.t,p.a),p.b-.01),clearTimeout(le),le=window.setTimeout(()=>{(e.kind===`tap`||e.kind===`person`)&&(e.track&&_e(e)&&(e.track=null),bo(e,()=>ve(e))),pe(e),Ni.refresh(e),ge(e)},500)),c()}function de(){return Vo(a)}function fe(e){a=e,i.board.src=e.id,s=null,g(),t.clearBrush(),c()}function pe(e){e.an=Ja(e.src.audio,e.loopIn,e.loopOut),e.sound.autoMode!==!1&&(e.sound.mode=qa(e.an))}function me(e,n,r){if(a.kind===`camera`||a.kind===`beam`||a.kind===`matte`)return T(`녹화한 영상·사진·테스트 클립에서 따낼 수 있어요`);s&&!s.saved&&(s.dead=!0);let i=Na(a,e,p.a,p.b),o=de();if(i.seed.t=Math.min(Math.max(o.pos(N()),p.a),p.b-.01),n!==void 0&&r!==void 0){let[e,a]=t.screenToSource(o,n,r);i.seed.x=e,i.seed.y=a}s=i,e!==`tap`&&e!==`person`&&a.thumb&&(i.thumbs=[a.thumb]),(e===`tap`||e===`person`)&&(bo(i,()=>ve(i)),e===`tap`&&mo.loadTap()),setTimeout(()=>{pe(i),c()},30),c()}function he(e,n,r){let i=de(),[a,o]=t.screenToSource(i,n,r),s=Math.min(Math.max(i.pos(N()),e.loopIn),e.loopOut-.01);e.fixes=[...(e.fixes??[]).filter(e=>Math.abs(e.t-s)>.15),{x:a,y:o,t:s}],e.track&&_e(e)&&(e.track=null),bo(e,()=>ve(e)),T(`${s.toFixed(1)}초에 보정 — 다시 추적합니다 (보정 ${e.fixes.length}개)`,1600),c()}function ge(e){e.saved&&(Ra(e.src),za(e))}function _e(e){return[...Z,s].some(t=>t&&t!==e&&t.track===e.track)}function ve(e){let t=e.track;for(let n of[...Z,s])n&&n!==e&&n.track===t&&(n.thumbs=[...e.thumbs],n.maskStamp++);if(t&&!t.running&&t.done>=t.frames.length)for(let e of Z)e.track===t&&ge(e);c()}function ye(){let e=s;if(!e)return T(`먼저 따낼 것을 누르세요`);if(Z.length>=16)return T(`선반이 꽉 찼어요 (16개). 하나 지우고 다시`);let t=Pa(e);t.saved=!0,Z.push(t),ge(t),s=Pa(t),T(`선반 ${Z.length}번째에 추가 — ${t.name}`,1600),c()}function be(t){let n=Z.indexOf(t);n>=0&&Z.splice(n,1),t.dead=!0,Ba(t),e.forget(t),s===t&&(s=null),c()}function xe(e){a=e.src,i.board.src=a.id,p.a=e.loopIn,p.b=e.loopOut,s=e,c()}let Se=h(`div`,{class:`strip`});function Ce(){Se.textContent=``;for(let e of Aa){let t=b(h(`span`,{class:`kf col`},e.thumb?h(`img`,{class:`sthumb`,src:e.thumb,alt:``}):h(`i`,{class:`sthumb`}),h(`small`,null,e.name)),{cls:`tiny src`,lit:()=>a===e,onPress:()=>fe(e)});Se.append(t)}let e=async e=>{let[t]=await E(e);if(t){T(`불러오는 중…`,1200);try{let e=await Ea(t,t.name);Aa.push(e),Ra(e),fe(e),Ce()}catch{T(`이 파일은 읽을 수 없어요`)}}};Se.append(b(h(`span`,{class:`kf col`},h(`b`,null,`+`),h(`small`,null,`VIDEO`)),{cls:`tiny src`,onPress:()=>void e(`video/*`)}),b(h(`span`,{class:`kf col`},h(`b`,null,`+`),h(`small`,null,`PHOTO`)),{cls:`tiny src`,onPress:()=>void e(`image/*`)}),Te(`environment`,`CAM`),Te(`user`,`SELF`))}let we=!1;function Te(e,t){return b(h(`span`,{class:`kf col`},h(`b`,null,`●`),h(`small`,null,t)),{cls:`tiny src rec-src`,lit:()=>we,hold:async t=>{if(t){if(T(`카메라 켜는 중… 누르고 있는 동안 녹화`,1500),!await n.start(Po,e))return T(`카메라를 쓸 수 없어요`);we=!0,v(),setTimeout(()=>we&&void Ee(),15e3)}else Ee()}})}async function Ee(){if(!we)return;we=!1,v();let e=await n.stop();if(Po.want(null),!e)return T(`녹화된 내용이 없어요`);let t=await Ea(e,`REC${Aa.length}`);Aa.push(t),Ra(t),fe(t),Ce(),T(t.audio?`녹화 완료 — 소리 있음 ♪`:`녹화 완료`,1500)}Ce();let De=h(`div`,{class:`keys cut-row`},b(h(`span`,{class:`kf col`},h(`b`,null,`FIX`),h(`small`,null,`보정`)),{cls:`small cut fix`,lit:()=>u,onPress:()=>{u=!u,u&&T(`윤곽이 빗나간 순간에 객체를 다시 누르세요. 그 시점부터 다시 따라갑니다`,2200),c()}}),...[`tap`,`person`,`luma`,`chroma`,`shape`].map(e=>b(h(`span`,{class:`kf col`},h(`b`,null,lt[e]),h(`small`,null,{tap:`누른 것`,person:`사람`,luma:`밝기`,chroma:`색`,shape:`모양`}[e])),{cls:`small cut`,lit:()=>l===e,onPress:()=>{l=e,e===`tap`?T(`모니터에서 따낼 것을 누르세요`,1400):me(e),c()}}))),Oe=h(`div`,{class:`editor`}),ke=h(`div`,{class:`keys ed-tabs`},...[`look`,`line`,`sound`].map(e=>b({look:`LOOK 효과`,line:`LINE 윤곽`,sound:`SOUND 소리`}[e],{cls:`small`,lit:()=>d===e,onPress:()=>(d=e,Ae())})));function Ae(){Oe.textContent=``;let e=s;if(!e){Oe.append(Uo(`1) 위에서 클립을 고르고 2) 노란 구간(루프)을 정한 뒤 3) TAP을 켜고 모니터에서 따낼 것을 누르세요. PERSON·LUMA·CHROMA·SHAPE는 누르면 바로 따냅니다.`)),v();return}let t=e,n=()=>(Ni.refresh(e),ge(e),c());if(d===`look`){let t=h(`div`,{class:`tiles t5`});for(let r of it)t.append(b(h(`span`,{class:`kf col`},h(`b`,null,r.name),h(`small`,null,r.ko)),{cls:`tile line`,lit:()=>e.look.id===r.id,onPress:()=>(e.look.id=r.id,n(),Ae())}));let r=at(e.look.id);Oe.append(t,Wo(r.a?x(r.a,e.look,`a`,0,1,.05,void 0,n):null,r.b?x(r.b,e.look,`b`,0,1,.05,void 0,n):null)),e.kind===`luma`&&Oe.append(Go(`LUMA KEY`,x(`LOW`,e.key,`lo`,0,1,.01),x(`HIGH`,e.key,`hi`,0,1,.01),Wo(C(`INVERT`,e.key,`invert`)))),e.kind===`chroma`&&Oe.append(Go(`CHROMA KEY`,te(`KEY`,e.key,`color`,[`#00d040`,`#2040ff`,`#ff2020`,`#f0f0f0`,`#101010`]),Wo(C(`INVERT`,e.key,`invert`)))),e.kind===`shape`&&Oe.append(Go(`SHAPE`,S(``,e.shape,`type`,ct.map((e,t)=>[t,e])),x(`SIZE`,e.shape,`size`,.05,1,.01),x(`RING`,e.shape,`ring`,.05,.9,.01),x(`SPIN`,e.shape,`spin`,-2,2,.05)))}else if(d===`line`){let r=h(`div`,{class:`tiles t5`});st.forEach(([t,i],a)=>r.append(b(h(`span`,{class:`kf col`},h(`b`,null,t),h(`small`,null,i)),{cls:`tile line`,lit:()=>e.line===a,onPress:()=>(e.line=a,n())}))),Oe.append(r,x(`WIDTH`,t,`lineSize`,.4,3,.1,void 0,n),S(`COLORS`,t,`linePal`,gt.map((e,t)=>[t,[`VIOLET`,`GREEN`,`RGB`,`B/W`][t]]),n),te(`COLOR`,t,`color`,[`#ff4070`,`#40e0ff`,`#ffe040`,`#90ff50`,`#ffffff`,`#c070ff`,`#ff8020`]))}else{let t=e.an,i=qa(t),a=h(`div`,{class:`keys wrap`},...ka.map(([t,r,a])=>b(h(`span`,{class:`kf col`},h(`b`,null,`${r}${t===i?` ★`:``}`),h(`small`,null,a)),{cls:`small mode`,lit:()=>e.sound.mode===t,onPress:()=>(e.sound.mode=t,e.sound.autoMode=!1,n())}))),o=t?t.silent?`소리 없음`:`음높이 ${t.pc>=0?r[t.pc]:`—`} (확실도 ${Math.round(t.conf*100)}%) · 밝기 ${Math.round(t.centroid)}Hz · 리듬 ${t.onsetRate.toFixed(1)}/s`:`분석 중…`,s=h(`b`);y(s,()=>s.textContent=`${Ti(e)>=0?`+`:``}${Ti(e)} 반음`),Oe.append(a,h(`div`,{class:`an`},o),Uo(`★ = 이 소리에 추천하는 방식. ORIGINAL: 원본을 키에 맞게 옮김 · RESONATE: 원본이 화음을 울림 · PULSE: 원본의 소리 시작점을 16분음표 리듬으로 · PAD: 원본을 잘게 쪼개 화음으로 깖`),Wo(C(`AUTO TUNE`,e.sound,`auto`,n),h(`span`,{class:`stat`},`이동 `,s)),x(`SHIFT`,e.sound,`shift`,-12,12,1,void 0,n),x(`GAIN`,e.sound,`gain`,0,2,.05,void 0,n),Wo(b(`PREVIEW`,{cls:`small`,lit:()=>f,onPress:()=>(f=!f,c())}),h(`span`,{class:`stat`},`음역 ${[`LOW`,`MID`,`HIGH`,`TOP`][Ko(e)]} ${pi[Ko(e)].hp}–${pi[Ko(e)].lp}Hz`)))}v()}let je=h(`div`,{class:`shelf-strip`});function Me(){je.textContent=``,Z.forEach(e=>{let t=b(h(`span`,{class:`kf col`},h(`img`,{alt:``,src:e.thumbs.find(Boolean)??``}),h(`small`,null,e.name)),{cls:`tiny ing`,lit:()=>s===e,onPress:()=>(xe(e),Ae())});t.style.setProperty(`--c`,e.color),je.append(t)});for(let e=Z.length;e<16;e++)je.append(h(`i`,{class:`ing-empty`}))}let Ne=h(`div`,{class:`keys save-row`},b(`SAVE ▸ 선반`,{cls:`small go`,onPress:ye}),b(`DELETE`,{cls:`small`,onPress:()=>s&&(s.saved?be(s):(s.dead=!0,s=null,c()))}),h(`span`,{class:`stat shelf-n`}));y(Ne,()=>{let e=Ne.querySelector(`.shelf-n`);e&&(e.textContent=`${Z.length}/16`)});let Pe=h(`div`,{class:`view board`,"data-keep":!0},re,h(`div`,{class:`board-deck`},ie,ae,Se,De,ke,Oe,h(`div`,{class:`shelf-box`},Ne,je)));ne.addEventListener(`pointerdown`,e=>{if(e.target.closest(`.key`))return;let t=ne.getBoundingClientRect(),n=(e.clientX-t.left)/t.width,r=(e.clientY-t.top)/t.height;if(u&&s&&s.kind===`tap`)return he(s,n,r);l=`tap`,me(`tap`,n,r)});let Fe=``,Ie=()=>{let e=[Z.map(e=>e.id+e.thumbs.length+e.name).join(`,`),Aa.length,s?.id,d,+!!s?.an,s?.look.id,s?.sound.mode,s?.kind].join(`|`);e!==Fe&&(Fe=e,Me(),Ae(),Ce()),v()};return o(Ie),Ie(),{root:Pe,scr:ne,player:()=>de(),frame(e,t){let n=de();s?zo(s,n,e):(n.loopIn=p.a,n.loopOut=Math.max(p.a+.05,p.b)),n.tick(e);let r=s&&!s.dead?s:null,i=r&&dt(r)>0,o=r&&i?[{key:-1,g:r,p:n,x:0,y:0,scale:1,rot:0,tilt:0,sel:!1}]:[],c=r?dt(r):1;return ee.textContent=`${a.name}  ${n.pos(e).toFixed(1)}s\n${r?`${r.name} · ${lt[r.kind]}${c<1?` 추적 ${Math.round(c*100)}%`:``}`:`따낼 것을 고르세요`}`,w.textContent=mo.message||(u?`FIX · 빗나간 순간에 객체를 다시 누르세요`:s?``:`따낼 것을 손가락으로 누르세요`),ce(),{fr:{bg:{kind:`player`,p:n},dim:r&&i?.65:0,layers:o,beat:t,pulse:0,bgFx:!1},used:new Set([n]),voice:r&&f?r:null}},refresh:Ie}}var Jo=e=>e%4,Yo=e=>Math.floor(e/4);function Xo(e,t){let n=[...e].sort((e,n)=>t(e)-t(n)),r=new Map;return n.forEach((t,n)=>r.set(t,e.length>1?n/(e.length-1):.5)),r}function Zo(e){let t=new Set;for(let n of e)n.cellManual&&n.cell>=0&&!t.has(n.cell)&&t.add(n.cell);let n=e.filter(e=>!(e.cellManual&&e.cell>=0)),r=Xo(e,e=>e.an?.rhythm??0),i=Xo(e,e=>e.an?.register??60);n.sort((e,t)=>Math.abs((i.get(t)??.5)-.5)-Math.abs((i.get(e)??.5)-.5));for(let e of n){let n=Math.min(3,Math.round((r.get(e)??.5)*3)),a=Math.min(3,Math.round((i.get(e)??.5)*3)),o=-1,s=99;for(let e=0;e<16;e++){if(t.has(e))continue;let r=Math.abs(Jo(e)-n)+Math.abs(Yo(e)-a)*1.01;r<s&&(s=r,o=e)}e.cell=o,e.cellManual=!1,o>=0&&t.add(o)}}function Qo(e,t,n){let r=e.find(e=>e!==t&&e.cell===n);r&&(r.cell=t.cell,r.cellManual=!0),t.cell=n,t.cellManual=!0}var $o=[[`STILL`,`·`,`정지`],[`H`,`↔`,`좌우`],[`V`,`↕`,`위아래`],[`DIAG`,`⤢`,`대각선`],[`CIRCLE`,`○`,`원`],[`EIGHT`,`∞`,`8자`],[`ZIGZAG`,`⋀⋁`,`지그재그`],[`BOUNCE`,`◇`,`튕기기`],[`SPIRAL`,`@`,`나선`],[`ORBIT`,`⊙`,`공전`]],es=[[.25,`1/4`],[.5,`1/2`],[1,`1`],[2,`2`],[4,`4`]],ts=e=>1-4*Math.abs((e%1+1)%1-.5);function ns(e,t,n,r){let i=t/(e.bars*4)+e.phase,a=i*Math.PI*2,o=e.ax,s=e.ay,c=0,l=0;switch(e.shape){case 1:c=Math.sin(a)*o;break;case 2:l=Math.sin(a)*s;break;case 3:c=Math.sin(a)*o,l=Math.sin(a)*s;break;case 4:c=Math.cos(a)*o,l=Math.sin(a)*s;break;case 5:c=Math.sin(a)*o,l=Math.sin(2*a)*s*.6;break;case 6:c=ts(i)*o,l=ts(i*4)*s*.35;break;case 7:{let e=Math.max(.05,Math.abs(o)),t=Math.max(.05,Math.abs(s));c=ts(i*1.31)*e,l=ts(i*1.73)*t;break}case 8:{let e=.5+.5*ts(i*.5);c=Math.cos(a*3)*o*e,l=Math.sin(a*3)*s*e;break}case 9:{let e=Math.cos(a),t=Math.sin(a);c=n*e-r*t-n,l=n*t+r*e-r;break}}let u=t-Math.floor(t);return{dx:c,dy:l,rot:e.spin?i*360:0,scale:e.pulse?1+.18*Math.exp(-u*6):1}}var Q=[],rs=1;function is(){let e=i.stage;return{shape:e.shape,bars:e.speed,ax:e.ax,ay:e.ay,spin:e.spin,pulse:e.pulse,phase:Math.random()}}function as(e){Q.length>=8&&Q.shift();let t=Q.length,n=t*2.4,r=t?.25+t%3*.08:0,i={id:rs++,g:e,x:Math.cos(n)*r,y:Math.sin(n)*r*.8,scale:.75,rot:0,m:is()};return Q.push(i),i}function os(e){let t=Q.indexOf(e);t>=0&&Q.splice(t,1)}function ss(e){for(let t=Q.length-1;t>=0;t--)Q[t].g===e&&Q.splice(t,1)}function cs(e,t){return Q.map(n=>{let r=ns(n.m,e,n.x,n.y);return{key:n.id,g:n.g,p:Lo(n.g),x:n.x+r.dx,y:n.y+r.dy,scale:n.scale*r.scale,rot:n.rot+r.rot,tilt:0,sel:n.id===t}})}var ls=ya(`environment`),us=ya(`user`),ds=[[10,`SUNBURST`],[9,`ZIGZAG`],[11,`BAR STRETCH`],[12,`BAR BEND`],[13,`ORNAMENT`],[7,`WEB`],[8,`SPARKLE`],[1,`BARS`],[0,`RASTER`],[6,`BLACK`]];function fs(e){let{renderer:t}=e,n=-1,r=null;function a(){let[e,t]=i.stage.bg.split(`:`);if(e===`gen`)return{bg:{kind:`gen`,id:+t},p:null};if(e===`matte`)return{bg:{kind:`matte`,pattern:+t},p:null};if(e===`beam`)return{bg:{kind:`beam`},p:null};let n;if(e===`cam`?n=t===`user`?us:ls:e===`src`&&(n=Aa.find(e=>e.id===t)),!n)return{bg:{kind:`gen`,id:0},p:null};let r=Vo(n);return r.loopIn=0,r.loopOut=n.duration,{bg:{kind:`player`,p:r},p:r}}let s=h(`div`,{class:`marks`}),l=h(`div`,{class:`osd top`}),u=h(`div`,{class:`osd hint`}),d=h(`i`,{class:`beat-lamp`}),f=h(`div`,{class:`pgm-screen`},s,l,u,d),p=h(`div`,{class:`monitor`},f),m=h(`div`,{class:`strip bg-strip`});function g(){m.textContent=``;let e=(e,t,n,r)=>m.append(b(h(`span`,{class:`kf col`},r?h(`img`,{class:`sthumb`,src:r,alt:``}):h(`i`,{class:`sthumb bgk-${e.replace(`:`,`-`)}`}),h(`small`,null,t),h(`em`,null,n)),{cls:`tiny src`,lit:()=>i.stage.bg===e,onPress:()=>(i.stage.bg=e,c())}));Re.forEach(([t,n],r)=>e(`gen:${r}`,t,n)),ds.forEach(([t,n])=>e(`matte:${t}`,n,`매트`)),e(`beam`,`BEAM`,`X-Y`);for(let t of Aa)e(`src:${t.id}`,t.name,`내 영상`,t.thumb);e(`cam:environment`,`CAM`,`라이브`),e(`cam:user`,`SELF`,`라이브`)}let _=h(`div`,{class:`pads graph`}),x=[],S=e=>(3-Math.floor(e/4))*4+e%4;for(let e=0;e<16;e++){let t=h(`button`,{class:`pad`,type:`button`});x.push(t),_.append(t);let a=0,o=0;t.addEventListener(`pointerdown`,n=>{n.preventDefault(),a=N(),t.classList.add(`down`),i.audio.haptics&&navigator.vibrate?.(7),clearTimeout(o),o=window.setTimeout(()=>{let t=Z.find(t=>t.cell===S(e));t&&(r=t,T(`${t.name} — 옮길 칸을 누르세요`,1600),fe(!0))},550)});let s=i=>{if(clearTimeout(o),t.classList.remove(`down`),!i||N()-a>.5)return;let s=S(e);if(r){Qo(Z,r,s),r=null,fe(!0);return}let l=Z.find(e=>e.cell===s);if(!l)return T(`빈 칸 — 도마에서 재료를 만들어 선반에 올리세요`,1600);let u=as(l);u&&(n=u.id,t.classList.add(`hit`),setTimeout(()=>t.classList.remove(`hit`),90)),c()};t.addEventListener(`pointerup`,()=>s(!0)),t.addEventListener(`pointercancel`,()=>s(!1)),t.addEventListener(`contextmenu`,e=>e.preventDefault())}let C=h(`div`,{class:`axes`},h(`span`,{class:`ax-y`},`높음 ↑ 음역`),h(`span`,{class:`ax-x`},`리듬 빠르기 →`)),ee=0;function te(){for(let e=0;e<16;e++){let t=x[e],n=S(e),i=Z.find(e=>e.cell===n);if(t.className=`pad`+(i?` has-art obj`:` empty`)+(r===i&&i?` moving`:``),t.textContent=``,t.style.backgroundImage=``,t.style.removeProperty(`--c`),!i){t.append(h(`i`,{class:`pi`},`${`LMHT`[Yo(n)]}${n%4+1}`));continue}let a=i.thumbs.filter(Boolean);a.length&&(t.style.backgroundImage=`url(${a[ee%a.length]})`),t.style.setProperty(`--c`,i.color);let o=Q.filter(e=>e.g===i).length,s=ka.find(([e])=>e===i.sound.mode)?.[1]??``;t.append(h(`i`,{class:`pi`},s.slice(0,4)),h(`span`,{class:`pn`},i.name),h(`small`,{class:`ps`},o?`×${o} ON`:`+`))}}let w=h(`div`,{class:`joy`},h(`i`,{class:`joy-knob`})),ne=w.firstElementChild,re=()=>i.stage.all?Q:Q.filter(e=>e.id===n);function E(e){re().forEach(t=>e(t.m));let t={shape:i.stage.shape,bars:i.stage.speed,ax:i.stage.ax,ay:i.stage.ay,spin:i.stage.spin,pulse:i.stage.pulse,phase:0};e(t),Object.assign(i.stage,{shape:t.shape,speed:t.bars,ax:t.ax,ay:t.ay,spin:t.spin,pulse:t.pulse}),c()}let D=()=>re()[0]?.m??{shape:i.stage.shape,bars:i.stage.speed,ax:i.stage.ax,ay:i.stage.ay,spin:i.stage.spin,pulse:i.stage.pulse,phase:0};w.addEventListener(`pointerdown`,e=>ie(e,!0)),w.addEventListener(`pointermove`,e=>ie(e,!1));function ie(e,t){if(t)w.setPointerCapture(e.pointerId);else if(!w.hasPointerCapture(e.pointerId))return;let n=w.getBoundingClientRect(),r=Math.max(-1,Math.min(1,(e.clientX-n.left)/n.width*2-1)),i=Math.max(-1,Math.min(1,1-(e.clientY-n.top)/n.height*2));E(e=>{e.ax=r*.8,e.ay=i*.8})}y(w,()=>{let e=D();ne.style.left=`${(e.ax/.8/2+.5)*100}%`,ne.style.top=`${(.5-e.ay/.8/2)*100}%`});let ae=h(`div`,{class:`motion`},w,h(`div`,{class:`mo-shapes`},...$o.map(([e,t,n],r)=>b(h(`span`,{class:`kf col`},h(`b`,null,t),h(`small`,null,n)),{cls:`tiny mo`,lit:()=>D().shape===r,onPress:()=>E(e=>e.shape=r)}))),h(`div`,{class:`mo-speed`},h(`small`,null,`한 바퀴 (마디)`),h(`div`,{class:`keys`},...es.map(([e,t])=>b(t,{cls:`tiny`,lit:()=>D().bars===e,onPress:()=>E(t=>t.bars=e)})))),h(`div`,{class:`keys mo-tog`},b(`SPIN`,{cls:`tiny`,lit:()=>D().spin,onPress:()=>E(e=>e.spin=!D().spin)}),b(`PULSE`,{cls:`tiny`,lit:()=>D().pulse,onPress:()=>E(e=>e.pulse=!D().pulse)}),b(`ALL`,{cls:`tiny`,lit:()=>i.stage.all,onPress:()=>(i.stage.all=!i.stage.all,c())}),b(`DEL`,{cls:`tiny del`,onPress:()=>{let e=Q.find(e=>e.id===n);e?(os(e),n=-1,c()):T(`지울 것을 화면에서 먼저 누르세요`,1200)}}))),O=h(`div`,{class:`view stage`,"data-keep":!0},p,m,h(`div`,{class:`keys stage-ctl`},b(`BG FX`,{cls:`small`,lit:()=>i.era.on[3]||i.era.on[4]||i.fb.on||i.color.on||i.scan.on||i.moor.reshoot.on||i.moor.breakup.on,onPress:()=>e.openSheet(`bgfx`)}),b(`TOOLS`,{cls:`small`,lit:()=>i.tools.mode!==`none`,onPress:()=>e.openSheet(`tools`)}),b(`CLEAR`,{cls:`small`,onPress:()=>(Q.length=0,n=-1,c())}),b(`RE-SORT`,{cls:`small`,onPress:()=>(Z.forEach(e=>e.cellManual=!1),fe(!0),T(`리듬·음역 순서로 다시 놓았어요`,1200))})),h(`div`,{class:`stage-deck`},h(`div`,{class:`padcol`},C,_),ae)),k=new Map,A=null,oe=e=>{let t=f.getBoundingClientRect();return[(e.clientX-t.left)/t.width,(e.clientY-t.top)/t.height]},j=()=>({smear:1,tear:2,freeze:3})[i.tools.mode]??0;f.addEventListener(`pointerdown`,e=>{if(e.target.closest(`.key, .mag, .obj-chip, .inst-x`))return;e.preventDefault();try{f.setPointerCapture(e.pointerId)}catch{}let[r,a]=oe(e);if(k.set(e.pointerId,{x:r,y:a,sx:r,sy:a,t:N()}),k.size===2){let e=Q.find(e=>e.id===n);if(e){let[t,n]=[...k.values()];A={kind:`pinch`,it:e,d0:Math.hypot(t.x-n.x,t.y-n.y),a0:Math.atan2(n.y-t.y,n.x-t.x),s0:e.scale,r0:e.rot}}return}if(i.tools.mode===`magnet`){let e=i.magnet.list;e.length>=2&&(e.sort((e,t)=>e.born-t.born),e.shift()),e.push({x:r*2-1,y:1-a*2,s:i.magnet.strength*(e.length%2?-1:1),r:i.magnet.radius,type:i.magnet.type,born:N()}),A={kind:`magnet`,i:e.length-1},c();return}if(j()){Object.assign(t.brush,{x:r,y:1-a,vx:0,vy:0,active:!0,tool:j(),startHold:j()===3}),A={kind:`brush`};return}let o=t.layerAt(r,a),s=o?Q.find(e=>e.id===o.key):void 0;s?(n=s.id,A={kind:`move`,it:s,ox:s.x,oy:s.y}):n=-1,c()}),f.addEventListener(`pointermove`,e=>{let n=k.get(e.pointerId);if(!n)return;let[r,a]=oe(e),o=n.x,s=n.y;n.x=r,n.y=a;let c=A;if(c){if(c.kind===`pinch`&&k.size>=2){let[e,t]=[...k.values()];c.it.scale=Math.max(.15,Math.min(3,c.s0*Math.hypot(e.x-t.x,e.y-t.y)/Math.max(.01,c.d0))),c.it.rot=c.r0+(Math.atan2(t.y-e.y,t.x-e.x)-c.a0)*180/Math.PI}else if(c.kind===`move`)c.it.x=c.ox+(r-n.sx)*2,c.it.y=c.oy-(a-n.sy)*2;else if(c.kind===`magnet`){let e=i.magnet.list[c.i];e&&(e.x=r*2-1,e.y=1-a*2)}else if(c.kind===`brush`){let e=t.brush;e.x=r,e.y=1-a,e.vx+=r-o,e.vy+=-(a-s)}}});let se=e=>{let r=k.get(e.pointerId);if(k.delete(e.pointerId),!r)return;let[a,o]=oe(e),s=A;k.size===0&&(A=null),s?.kind===`brush`&&(t.brush.active=!1),s?.kind===`magnet`&&(a<-.02||a>1.02||o<-.02||o>1.02)&&(i.magnet.list.splice(s.i,1),T(`자석을 지웠어요`,800)),s?.kind===`move`&&(a<-.05||a>1.05||o<-.05||o>1.05)&&(os(s.it),n=-1,T(`지웠어요`,800)),c()};f.addEventListener(`pointerup`,se),f.addEventListener(`pointercancel`,se);let ce=h(`button`,{class:`inst-x`,type:`button`},`×`);ce.addEventListener(`pointerdown`,e=>{e.stopPropagation();let t=Q.find(e=>e.id===n);t&&os(t),n=-1,c()}),s.append(ce);let le=[];function ue(){let e=t.centres.get(n);ce.hidden=!e,e&&(ce.style.left=`${e[0]*100}%`,ce.style.top=`${(1-e[1])*100}%`);let r=i.magnet.list;for(;le.length<r.length;){let e=le.length,t=h(`button`,{class:`mag-x`,type:`button`},`×`),n=h(`div`,{class:`mag`},h(`b`),t);t.addEventListener(`pointerdown`,t=>{t.stopPropagation(),i.magnet.list.splice(e,1),c()}),n.addEventListener(`pointerdown`,t=>{if(t.target.closest(`.mag-x`))return;t.stopPropagation();try{f.setPointerCapture(t.pointerId)}catch{}let[n,r]=oe(t);k.set(t.pointerId,{x:n,y:r,sx:n,sy:r,t:N()}),A={kind:`magnet`,i:e}}),s.append(n),le.push(n)}for(;le.length>r.length;)le.pop().remove();r.forEach((e,t)=>{le[t].style.left=`${(e.x+1)/2*100}%`,le[t].style.top=`${(1-e.y)/2*100}%`,le[t].firstElementChild.textContent=e.s<0?`S`:`N`})}let de=``;function fe(e=!1){let t=[Z.map(e=>`${e.id}${e.cell}${e.thumbs.length}${e.sound.mode}${+!!e.an}`).join(`,`),Q.map(e=>e.g.id).join(`,`),Aa.length].join(`|`);(e||t!==de)&&((t.split(`|`)[0]!==de.split(`|`)[0]||e)&&Zo(Z.filter(e=>e.saved)),de=t,te(),g()),O.dataset.tool=i.tools.mode,v()}return o(()=>fe()),fe(!0),{root:O,scr:f,get selected(){return n},frame(e,t,o){let{bg:s,p:c}=a(),f=new Set;c&&(c.tick(e),f.add(c));let p=new Set(Q.map(e=>e.g));for(let t of p){let n=Lo(t);zo(t,n,e),n.tick(e),f.add(n)}Math.floor(e*4)!==ee&&(ee=Math.floor(e*4),te());let m=cs(t,n),h=t;d.classList.toggle(`on`,h-Math.floor(h)<.15),d.classList.toggle(`down`,Math.floor(h)%4==0),l.textContent=`${Q.length} ON · ${p.size} SOUNDS\n${Math.floor(t/4)+1}.${Math.floor(t)%4+1}`;let g=i.tools.mode;return u.textContent=r?`${r.name} → 옮길 칸을 누르세요`:g===`magnet`?`MAGNET · 눌러서 놓기 (${i.magnet.list.length}/2)`:g===`none`?Q.length?``:`키패드를 누르면 재료가 무대에 올라옵니다`:`${g.toUpperCase()} · 문지르세요`,ue(),{fr:{bg:s,dim:0,layers:m,beat:t,pulse:o,bgFx:!0},used:f,voices:[...p].map(e=>({g:e,row:Math.max(0,Yo(e.cell))}))}},refresh:fe}}f(),i.ui.sheet=``,document.documentElement.setAttribute(`data-crt`,String(i.ui.crt)),D();var ps=document.getElementById(`app`),ms=h(`div`,{class:`screen`});ps.append(ms),Po.onError=()=>T(`카메라를 쓸 수 없어요. 영상 파일이나 테스트 클립으로 해 보세요.`,4e3),Va();var $;try{$=new xt}catch(e){throw ms.append(h(`div`,{class:`fatal`},h(`b`,null,`NO VIDEO HARDWARE`),h(`p`,null,`이 브라우저는 WebGL2를 지원하지 않아요. 최신 Chrome에서 열어 주세요.`),h(`pre`,null,String(e.message)))),e}var hs=new ri,gs=e=>{i.ui.sheet=i.ui.sheet===e?``:e,c()},_s=qo({renderer:$,forget:e=>{ss(e),Ro(e)}}),vs=fs({renderer:$,openSheet:gs});async function ys(){if(hs.recording){let e=await hs.stop(()=>$.grab());if(!e)return T(`녹화된 내용이 없어요`);await si.put(e),T(`TAPE SAVED — ${e.label}`)}else{m.ensure();try{let e=i.output.quality;await hs.start($.canvas,e===`fhd`?2e7:e===`hd`?12e6:8e6)}catch(e){T(`이 기기에서는 녹화를 지원하지 않아요`),console.warn(e)}}v()}var bs=h(`b`),xs=h(`div`,{class:`bpm`},h(`small`,null,`BPM`),bs);{let e=0,t=0,n=!1;xs.addEventListener(`pointerdown`,r=>{xs.setPointerCapture(r.pointerId),e=r.clientY,t=i.music.bpm,n=!1}),xs.addEventListener(`pointermove`,r=>{if(!xs.hasPointerCapture(r.pointerId))return;let i=Math.round((e-r.clientY)/4);i&&(n=!0),n&&mt(t+i),v()}),xs.addEventListener(`pointerup`,()=>{if(!n){let e=pt();e&&T(`TAP ${e} BPM`,900)}c()}),y(xs,()=>bs.textContent=String(i.music.bpm))}var Ss=h(`b`),Cs=h(`small`);y(Ss,()=>Ss.textContent=`${r[i.music.root]} ${n[i.music.scale].name}`);var ws=(e,t,n)=>b(h(`span`,{class:`kf col`},h(`b`,null,t),h(`small`,null,n)),{cls:`tab`,lit:()=>i.ui.tab===e,onPress:()=>Fs(e)}),Ts=h(`div`,{class:`topbar`,"data-keep":!0},ws(`board`,`BOARD`,`도마`),ws(`stage`,`STAGE`,`샘플러`),ws(`tapes`,`TAPES`,`테이프`),xs,b(h(`span`,{class:`kf col`},Ss,Cs),{cls:`small keyk`,onPress:()=>gs(`music`)}),b(h(`span`,{class:`kf`},h(`i`,{class:`recdot`}),`REC`),{cls:`rec`,lit:()=>hs.recording,onPress:()=>void ys(),silent:!0}),b(`⚙`,{cls:`small`,onPress:()=>gs(`setup`)})),Es=h(`div`,{class:`sheet-host`});Es.hidden=!0;var Ds=(e,...t)=>h(`div`,{class:`sec`},h(`div`,{class:`sec-t`},e),...t.filter(Boolean)),Os=e=>h(`p`,{class:`hint`},e),ks={renderer:$,openTapes:()=>Fs(`tapes`)};function As(e){let t=i.music;if(e===`music`)return[Ds(`KEY`,S(`ROOT`,t,`root`,r.map((e,t)=>[t,e]),void 0,`wrap`),S(`SCALE`,t,`scale`,n.map((e,t)=>[t,`${e.name} ${e.ko}`]),void 0,`wrap`)),Ds(`CHORDS · 4마디`,S(``,t,`prog`,fi.map((e,t)=>[t,`${e.name} ${e.ko}`]),void 0,`wrap`),Os(`모든 재료의 소리가 이 키와 화음 진행을 따릅니다. ORIGINAL은 키 안의 음으로 옮겨지고, RESONATE·PULSE·PAD는 마디마다 화음을 따라갑니다.`)),Ds(`TEMPO`,x(`BPM`,t,`bpm`,40,200,1,void 0,()=>mt(i.music.bpm)),Os(`루프는 1·2·4·8·16박 중 가장 가까운 길이로 맞춰 다시 시작합니다. 위 BPM 칸을 두드리면 탭 템포.`)),Ds(`VOLUME`,x(`MASTER`,t,`vol`,0,1,.05,void 0,()=>Ni.setVolume(i.music.vol)))];if(e===`bgfx`){let e=i.era,t=(e,t,n)=>b(e,{cls:`small`,lit:t,onPress:()=>(n(!t()),c())});return[Ds(`BACKGROUND EFFECTS · 바탕에만`,h(`div`,{class:`keys wrap`},t(`MIRROR`,()=>e.on[3],t=>(e.on[3]=t,e.amt[3]=3)),t(`KALEIDO`,()=>e.on[4],t=>e.on[4]=t),t(`BREAK-UP`,()=>i.moor.breakup.on,e=>i.moor.breakup.on=e),t(`COLOR`,()=>i.color.on,e=>e?$i(0):i.color.on=!1),t(`FEEDBACK`,()=>i.fb.on,e=>i.fb.on=e),t(`SCAN`,()=>i.scan.on,e=>e?ta(0):i.scan.on=!1),t(`RESHOOT`,()=>i.moor.reshoot.on,e=>i.moor.reshoot.on=e)),Os(`재료(객체)에는 걸리지 않고 바탕 영상에만 걸립니다. 재료의 효과는 도마의 LOOK에서.`)),aa(`color`,ks),aa(`fdbk`,ks),aa(`scan`,ks)]}if(e===`tools`){let e=i.tools;return[Ds(`HAND TOOLS`,S(``,e,`mode`,[[`none`,`NONE`],[`magnet`,`MAGNET`],[`smear`,`SMEAR`],[`tear`,`TEAR`],[`freeze`,`FREEZE`]],void 0,`wrap`),Os(`MAGNET: 최대 2개. ×를 누르거나 화면 밖으로 끌면 지워집니다 · SMEAR: 문지르면 녹아 밀림 · TEAR: 그은 높이의 주사선이 찢어짐 · FREEZE: 칠한 곳만 멈춤`)),Ds(`BRUSH`,x(`SIZE`,e,`size`,.05,.4,.01),x(`HOLD`,e,`smear`,0,1,.05),h(`div`,{class:`keys`},b(`CLEAR MAGNETS`,{cls:`small`,onPress:()=>(i.magnet.list=[],c())}),b(`CLEAR BRUSH`,{cls:`small`,onPress:()=>$.clearBrush()}))),aa(`magnet`,ks)]}return e===`setup`?[aa(`setup`,ks),h(`div`,{class:`sec-t`},`TAPE LOOK`),aa(`tape`,ks),aa(`cg`,ks),Ds(`SOUND`,h(`div`,{class:`keys`},C(`KEY CLICKS`,i.audio,`sfx`),C(`VIBRATE`,i.audio,`haptics`)))]:[]}var js=``;function Ms(){js=i.ui.sheet,Es.textContent=``;let e=i.ui.tab===`board`?_s.root:vs.root,t=e.querySelector(`.board-deck, .stage-deck`);e.classList.toggle(`sheet-open`,!!js),js?(Es.hidden=!1,e.append(Es),Es.append(h(`div`,{class:`page-head`},b(`◀ BACK`,{cls:`small`,onPress:()=>gs(js)}),h(`div`,{class:`hdr`},h(`span`,null,`-`+({music:`KEY · CHORDS · TEMPO`,bgfx:`BACKGROUND FX`,tools:`HAND TOOLS`,setup:`SETUP`}[js]||Zi[js]||js)),h(`i`))),h(`div`,{class:`scr`},...As(js))),v()):(Es.hidden=!0,t&&(t.hidden=!1))}var Ns=h(`div`,{class:`scanlines`}),Ps=null;function Fs(e){i.ui.tab=e,i.ui.sheet=``,ms.querySelectorAll(`:scope > .view, :scope > .modal`).forEach(e=>e.remove()),_s.root.classList.remove(`sheet-open`),vs.root.classList.remove(`sheet-open`),e===`board`?(_s.scr.prepend($.canvas),ms.append(_s.root)):e===`stage`?(vs.scr.prepend($.canvas),ms.append(vs.root)):(Ps=Fi(()=>Fs(`stage`)).root,ms.append(Ps),Ni.setVoices([])),(e===`board`?_s.root:e===`stage`?vs.root:Ps)?.prepend(Ts),ms.append(Ns),c(),Ms()}o(()=>{i.ui.sheet!==js&&Ms()}),Fs(i.ui.tab===`tapes`?`board`:i.ui.tab);var Is=h(`div`,{class:`boot`},h(`span`,null,`PREPARED TV 3`),h(`small`,null,`BOARD · STAGE · ⓒ 1963 — 2026`));ms.append(Is),setTimeout(()=>Is.classList.add(`half`),420),setTimeout(()=>Is.remove(),640),document.addEventListener(`pointerdown`,()=>m.ensure(),{once:!0}),Ha(()=>{_s.refresh(),vs.refresh(!0),c()});var Ls=0,Rs=0;function zs(){if(requestAnimationFrame(zs),document.hidden||window.__voPause)return;let e=i.ui.tab;if(e===`tapes`)return;let t=N(),n=P.beatAt(t);if(Ls=Math.max(m.bass(),Ls*.88),e===`board`){let e=_s.frame(t,n);Ho(e.used),Ni.setVoices(e.voice?[{g:e.voice,row:Ko(e.voice)}]:[]),$.render(e.fr),hs.frame($.canvas)}else{let e=vs.frame(t,n,Ls);Ho(e.used),Ni.setVoices(e.voices),$.render(e.fr),hs.frame($.canvas)}Cs.textContent=`♪ ${r[yi(t)[0]]}`,i.output.quality!==`sd`&&!hs.recording&&$.fps>0&&$.fps<22?Rs?t-Rs>5&&(i.output.quality=`sd`,$.setOutput(i.output.aspect,`sd`),T(`기기가 버거워해서 SD로 낮췄어요 (⚙에서 바꿀 수 있어요)`,3e3),Rs=0):Rs=t:Rs=0}requestAnimationFrame(zs),document.addEventListener(`visibilitychange`,()=>{document.hidden&&(Po.want(null),d())}),window.addEventListener(`pagehide`,d),$.canvas.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),T(`그래픽 장치가 재시작됐어요. 새로고침해 주세요.`,6e3)}),document.fonts.ready.then(()=>setTimeout(()=>$.refreshStatic(),300)),`serviceWorker`in navigator&&location.protocol===`https:`&&window.addEventListener(`load`,()=>navigator.serviceWorker.register(`./sw.js`).catch(()=>{})),window.__vo={state:i,renderer:$,engine:Ni,shelf:Z,board:_s,stage:vs,changed:c,setTab:Fs,grid:P,keyMove:Ti,voiceRate:Oi,voicePeriod:ki};