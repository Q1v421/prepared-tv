const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dist-S6279hK-.js","./index-DlkYYufl.js","./dist-CMuHfCEm.js"])))=>i.map(i=>d[i]);
import{s as W,c as ut,M as cn,E as ne,S as no,l as Rt,f as un,e as ge,w as so,a as Ve,_ as Vt,b as fn,o as hn,N as dn,p as mn,d as pn,g as vn,r as ao,h as gn,i as xn,W as bn,A as yn,j as Mn,H as wn,D as kn,C as Tn,G as io,k as Sn,m as An,n as Rn,q as En,P as Pn,t as Cn,u as In,v as On,V as xe,x as Fn,L as Ln,y as Bn,z as ro}from"./index-7evIsOx4.js";class Dn{ctx=null;sfxBus;recDest;xy;analyser;noiseBuf;ready=[];whenReady(e){this.ctx?e(this.ctx):this.ready.push(e)}ensure(){if(this.ctx)return this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx;let e;try{e=new AudioContext({latencyHint:"interactive",sampleRate:48e3})}catch{e=new AudioContext({latencyHint:"interactive"})}this.ctx=e,this.recDest=e.createMediaStreamDestination(),this.sfxBus=e.createGain(),this.sfxBus.gain.value=.45,this.sfxBus.connect(e.destination),this.xy=e.createAnalyser(),this.xy.fftSize=2048,this.xy.smoothingTimeConstant=0,this.analyser=e.createAnalyser(),this.analyser.fftSize=512,this.analyser.smoothingTimeConstant=.6;const t=e.sampleRate*2;this.noiseBuf=e.createBuffer(1,t,e.sampleRate);const n=this.noiseBuf.getChannelData(0);for(let s=0;s<t;s++)n[s]=Math.random()*2-1;return this.ready.splice(0).forEach(s=>s(e)),e}fbuf=new Uint8Array(256);bass(){if(!this.ctx||!this.analyser)return 0;this.analyser.getByteFrequencyData(this.fbuf);let e=0;for(let t=1;t<8;t++)e+=this.fbuf[t];return Math.max(0,e/1785-.25)/.75}noise(e,t=0){const n=this.ctx,s=n.createBufferSource();return s.buffer=this.noiseBuf,s.start(t||n.currentTime,Math.random(),e+.05),s}play(e,t=.5){if(!W.audio.sfx||e==="none")return;const n=this.ensure(),s=n.currentTime,a=this.sfxBus,i=(r,l,c,u)=>{r.gain.setValueAtTime(1e-4,s),r.gain.exponentialRampToValueAtTime(c,s+l),r.gain.exponentialRampToValueAtTime(1e-4,s+u)};switch(e){case"click":case"clack":{const r=this.noise(.03),l=n.createBiquadFilter();l.type="bandpass",l.frequency.value=e==="click"?3200:1800,l.Q.value=1.2;const c=n.createGain();i(c,.001,e==="click"?.7:.9,.035),r.connect(l).connect(c).connect(a);const u=n.createOscillator();u.frequency.setValueAtTime(e==="click"?180:120,s),u.frequency.exponentialRampToValueAtTime(60,s+.04);const f=n.createGain();i(f,.001,.35,.05),u.connect(f).connect(a),u.start(s),u.stop(s+.06);break}case"whoosh":case"swish":{const r=Math.max(.18,Math.min(t,1.2)),l=this.noise(r),c=n.createBiquadFilter();c.type="bandpass",c.Q.value=e==="whoosh"?2.5:4,c.frequency.setValueAtTime(e==="whoosh"?300:900,s),c.frequency.exponentialRampToValueAtTime(e==="whoosh"?2600:5e3,s+r*.6),c.frequency.exponentialRampToValueAtTime(500,s+r);const u=n.createGain();u.gain.setValueAtTime(1e-4,s),u.gain.exponentialRampToValueAtTime(e==="whoosh"?.9:.5,s+r*.45),u.gain.exponentialRampToValueAtTime(1e-4,s+r);const f=n.createStereoPanner();f.pan.setValueAtTime(-.7,s),f.pan.linearRampToValueAtTime(.7,s+r),l.connect(c).connect(u).connect(f).connect(a);break}case"ding":{for(const[r,l]of[[0,1318.5],[1,1975.5]]){const c=s+r*.09,u=n.createOscillator(),f=n.createOscillator(),v=n.createGain();f.frequency.value=l*3.5,v.gain.setValueAtTime(l*1.2,c),v.gain.exponentialRampToValueAtTime(1,c+.6),f.connect(v).connect(u.frequency),u.frequency.value=l;const m=n.createGain();m.gain.setValueAtTime(1e-4,c),m.gain.exponentialRampToValueAtTime(.35,c+.005),m.gain.exponentialRampToValueAtTime(1e-4,c+.9),u.connect(m).connect(a),u.start(c),f.start(c),u.stop(c+1),f.stop(c+1)}break}case"zap":{const r=n.createOscillator();r.type="square",r.frequency.setValueAtTime(1800,s),r.frequency.exponentialRampToValueAtTime(90,s+.25);const l=n.createBiquadFilter();l.type="lowpass",l.frequency.value=2400;const c=n.createGain();i(c,.003,.25,.28),r.connect(l).connect(c).connect(a),r.start(s),r.stop(s+.3);break}case"thud":{const r=n.createOscillator();r.frequency.setValueAtTime(140,s),r.frequency.exponentialRampToValueAtTime(38,s+.35);const l=n.createGain();i(l,.002,1,.45),r.connect(l).connect(a),r.start(s),r.stop(s+.5);const c=this.noise(.4),u=n.createBiquadFilter();u.type="highpass",u.frequency.value=2500;const f=n.createGain();i(f,.002,.4,.35),c.connect(u).connect(f).connect(a);break}case"static":case"surf":{const r=e==="surf"?.22:.4,l=this.noise(r),c=n.createBiquadFilter();c.type="bandpass",c.frequency.value=2200,c.Q.value=.6;const u=n.createGain();u.gain.setValueAtTime(.5,s),u.gain.setValueAtTime(.5,s+r*.7),u.gain.exponentialRampToValueAtTime(1e-4,s+r),l.connect(c).connect(u).connect(a),e==="surf"&&this.play("clack");break}case"beep":{const r=n.createOscillator();r.type="square",r.frequency.value=1e3;const l=n.createGain();l.gain.setValueAtTime(.12,s),l.gain.setValueAtTime(1e-4,s+.09),r.connect(l).connect(a),r.start(s),r.stop(s+.1);break}case"power":{const r=n.createOscillator();r.type="sawtooth",r.frequency.setValueAtTime(15734/2,s);const l=n.createGain();l.gain.setValueAtTime(1e-4,s),l.gain.exponentialRampToValueAtTime(.02,s+.05),l.gain.exponentialRampToValueAtTime(1e-4,s+1.2),r.connect(l).connect(a),r.start(s),r.stop(s+1.3);const c=this.noise(.12),u=n.createGain();i(u,.002,.6,.12);const f=n.createBiquadFilter();f.type="lowpass",f.frequency.value=600,c.connect(f).connect(u).connect(a);break}}}}const Lt=new Dn;function M(o,e=null,...t){const n=document.createElement(o);if(e)for(const[s,a]of Object.entries(e))a==null||a===!1||(s==="class"?n.className=String(a):s==="style"?n.setAttribute("style",String(a)):s.startsWith("on")&&typeof a=="function"?n.addEventListener(s.slice(2),a):n.setAttribute(s,a===!0?"":String(a)));for(const s of t)s!=null&&s!==!1&&n.append(s);return n}function ze(){Lt.play("click"),W.audio.haptics&&navigator.vibrate?.(6)}const le=[];function Tt(){for(let o=le.length-1;o>=0;o--){const{el:e,f:t}=le[o];if(e.isConnected){t();continue}const n=e.getRootNode();n instanceof Element&&n.hasAttribute("data-keep")||le.splice(o,1)}}function Bt(o,e){le.push({el:o,f:e}),e()}function X(o,e={}){const t=M("button",{class:`key ${e.cls||""}`,type:"button"},typeof o=="string"?M("span",{class:"kf"},o):o),n=e.dot?M("i",{class:"dot"}):null;n&&t.append(n),t.addEventListener("pointerdown",a=>{a.preventDefault(),t.classList.add("down"),e.silent||ze(),e.hold&&(t.setPointerCapture(a.pointerId),e.hold(!0))});const s=a=>{t.classList.contains("down")&&(t.classList.remove("down"),e.hold&&e.hold(!1),a&&e.onPress?.())};return t.addEventListener("pointerup",()=>s(!0)),t.addEventListener("pointercancel",()=>s(!1)),t.addEventListener("pointerleave",()=>!e.hold&&t.classList.remove("down")),t.addEventListener("contextmenu",a=>a.preventDefault()),(e.lit||e.dot)&&Bt(t,()=>{e.lit&&t.classList.toggle("lit",!!e.lit()),n&&e.dot&&(n.hidden=!e.dot())}),t}function wt(o,e,t,n,s,a,i,r){const l=M("span",{class:"sv"}),c=M("div",{class:"spin"},l,M("span",{class:"arr"},M("i"),M("i"))),u=()=>{const d=e[t];l.textContent=Number.isInteger(a)?String(Math.round(d)):d.toFixed(a<.1?2:1)},f=d=>{d=Math.max(n,Math.min(s,Math.round(d/a)*a)),d=+d.toFixed(4),d!==e[t]&&(e[t]=d,u(),r?.(),ut())};let v=0,m=0,h=!1;return c.addEventListener("pointerdown",d=>{c.setPointerCapture(d.pointerId),v=d.clientY,m=e[t],h=!1,c.classList.add("down")}),c.addEventListener("pointermove",d=>{if(!c.hasPointerCapture(d.pointerId))return;const x=v-d.clientY;if(Math.abs(x)>4&&(h=!0),!h)return;const g=Math.trunc(x/6),R=(s-n)/a>60?Math.max(1,Math.abs(g)/6):1;f(m+g*a*R)}),c.addEventListener("pointerup",d=>{if(c.classList.remove("down"),!h){const x=c.getBoundingClientRect();f(e[t]+(d.clientY<x.top+x.height/2?a:-a)),ze()}}),Bt(c,u),M("div",{class:"ctl"},M("label",null,o),c)}function lo(o,e,t,n,s,a=""){const i=M("div",{class:`keys ${a}`});for(const[r,l]of n)i.append(X(l,{cls:"small",lit:()=>e[t]===r,onPress:()=>{e[t]=r,s?.(),ut()}}));return o?M("div",{class:"ctl"},M("label",null,o),i):i}function Oe(o,e,t,n){return X(o,{cls:"small",lit:()=>!!e[t],onPress:()=>{e[t]=!e[t],n?.(),ut()}})}const Un=["#f0f0f0","#ff3030","#ffe030","#30ff40","#30e0ff","#3050ff","#ff40ff","#c070ff","#101010"];function Nn(o,e,t,n=Un){const s=M("div",{class:"chips"});for(const a of n){const i=M("button",{class:"chip",type:"button",style:`background:${a}`});i.addEventListener("click",()=>{e[t]=a,ze(),ut()}),Bt(i,()=>i.classList.toggle("lit",e[t]===a)),s.append(i)}return M("div",{class:"ctl"},M("label",null,o),s)}let se=null,co=0;function ft(o,e=2600){se?.remove(),se=M("div",{class:"toast"},o);const t=document.querySelectorAll("body > .sheet-full");(t[t.length-1]??document.querySelector(".screen"))?.append(se),clearTimeout(co);const n=se;co=window.setTimeout(()=>n.remove(),e)}function _n(o,e=!1){return new Promise(t=>{const n=M("input",{type:"file",accept:o,style:"display:none"});e&&(n.multiple=!0),n.addEventListener("change",()=>{t(Array.from(n.files||[])),n.remove()}),document.body.append(n),n.click()})}function Hn(){const o=W.output.aspect;document.documentElement.style.setProperty("--out-aspect",o.replace(":","/")),document.documentElement.toggleAttribute("data-wide",o==="16:9"||o==="4:3")}const qn=`#version 300 es
out vec2 vUv;
void main(){
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;class _o{constructor(e){this.v=e}}const ct=o=>new _o(o);class $n{constructor(e,t,n){this.gl=e,this.prog=t,this.name=n}locs=new Map;loc(e){let t=this.locs.get(e);return t===void 0&&(t=this.gl.getUniformLocation(this.prog,e),this.locs.set(e,t)),t}}class Wn{constructor(e){this.gl=e,this.vao=e.createVertexArray()}vao;program(e,t,n=qn){const s=this.gl,a=(r,l)=>{const c=s.createShader(r);if(s.shaderSource(c,l),s.compileShader(c),!s.getShaderParameter(c,s.COMPILE_STATUS)){const u=s.getShaderInfoLog(c),f=l.split(`
`).map((h,d)=>`${d+1}: ${h}`),v=/0:(\d+)/.exec(u||""),m=v?f.slice(Math.max(0,+v[1]-4),+v[1]+2).join(`
`):"";throw new Error(`[${t}] shader compile failed: ${u}
${m}`)}return c},i=s.createProgram();if(s.attachShader(i,a(s.VERTEX_SHADER,n)),s.attachShader(i,a(s.FRAGMENT_SHADER,e)),s.linkProgram(i),!s.getProgramParameter(i,s.LINK_STATUS))throw new Error(`[${t}] link failed: ${s.getProgramInfoLog(i)}`);return new $n(s,i,t)}texture(e=WebGL2RenderingContext.LINEAR,t=WebGL2RenderingContext.CLAMP_TO_EDGE){const n=this.gl,s=n.createTexture();return n.bindTexture(n.TEXTURE_2D,s),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,t),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,t),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),s}target(e,t,n=WebGL2RenderingContext.LINEAR){const s=this.gl,a=this.texture(n);s.texImage2D(s.TEXTURE_2D,0,s.RGBA8,e,t,0,s.RGBA,s.UNSIGNED_BYTE,null);const i=s.createFramebuffer();return s.bindFramebuffer(s.FRAMEBUFFER,i),s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,a,0),s.clearColor(0,0,0,1),s.clear(s.COLOR_BUFFER_BIT),s.bindFramebuffer(s.FRAMEBUFFER,null),{fb:i,tex:a,w:e,h:t}}freeTarget(e){e&&(this.gl.deleteFramebuffer(e.fb),this.gl.deleteTexture(e.tex))}draw(e,t,n,s,a){const i=this.gl;i.bindFramebuffer(i.FRAMEBUFFER,t?t.fb:null);const r=a?a[2]:t?t.w:s[0],l=a?a[3]:t?t.h:s[1];a?i.viewport(a[0],a[1],a[2],a[3]):i.viewport(0,0,r,l),this.bindUniforms(e,n,r,l),i.bindVertexArray(this.vao),i.drawArrays(i.TRIANGLES,0,3)}bindUniforms(e,t,n,s){const a=this.gl;a.useProgram(e.prog);let i=0;const r=e.loc("uRes");r&&a.uniform2f(r,n,s);for(const l in t){const c=t[l],u=e.loc(l);u!==null&&(typeof c=="number"?a.uniform1f(u,c):c instanceof _o?a.uniform1i(u,c.v):Array.isArray(c)?c.length===2?a.uniform2f(u,c[0],c[1]):c.length===3?a.uniform3f(u,c[0],c[1],c[2]):c.length===4&&a.uniform4f(u,c[0],c[1],c[2],c[3]):c&&(a.activeTexture(a.TEXTURE0+i),a.bindTexture(a.TEXTURE_2D,c),a.uniform1i(u,i),i++))}}setArray(e,t,n,s){const a=this.gl;a.useProgram(e.prog);const i=e.loc(t+"[0]")??e.loc(t);i&&(n===1?a.uniform1fv(i,s):n===3?a.uniform3fv(i,s):a.uniform4fv(i,s))}}function It(o){const e=o.replace("#",""),t=parseInt(e.length===3?e.split("").map(n=>n+n).join(""):e,16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}const Q=`#version 300 es
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
`,Gn=Q+`
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
`,Vn=Q+`
uniform sampler2D uSrc;
void main(){ outColor = vec4(texture(uSrc, vUv).rgb, 1.); }
`,zn=Q+`
uniform sampler2D uSrc;
uniform float uDecay;
void main(){
  vec3 c = texture(uSrc, vUv).rgb * uDecay;
  c = max(c - 1. / 255., 0.);
  outColor = vec4(c, 1.);
}
`,jn=`#version 300 es
in vec2 aPos;
in float aAcross;
in float aI;
out float vAcross;
out float vI;
void main(){ vAcross = aAcross; vI = aI; gl_Position = vec4(aPos, 0., 1.); }
`,Kn=`#version 300 es
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
`,je=`
vec4 enc(vec2 c){ return vec4(floor(c.x / 256.), mod(c.x, 256.), floor(c.y / 256.), mod(c.y, 256.)) / 255.; }
vec2 dec(vec4 v){ v = floor(v * 255. + .5); return vec2(v.r * 256. + v.g, v.b * 256. + v.a); }
`,Yn=Q+je+`
uniform sampler2D uMask;
void main(){
  float a = texelFetch(uMask, ivec2(gl_FragCoord.xy), 0).r;
  outColor = a > .5 ? enc(floor(gl_FragCoord.xy)) : vec4(1.);
}
`,Xn=Q+je+`
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
`,Zn=Q+je+`
uniform sampler2D uSrc;
uniform float uMaxD;
void main(){
  vec2 me = floor(gl_FragCoord.xy);
  vec2 s = dec(texelFetch(uSrc, ivec2(me), 0));
  float d = s.x > 65000. ? 1. : clamp(distance(s, me) / uMaxD, 0., 1.);
  outColor = vec4(d, d, d, 1.);
}
`,Jn=Q+`
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
`,Qn=Q+`
uniform sampler2D uCur;
uniform sampler2D uAtlas;     // clean signal, 15 fps, 8x8 slots
uniform float uHead;
uniform float uFilled;
uniform float uOn[19];
uniform float uAmt[19];

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
  if (on(18)){ // GHOST: a white silhouette, breathing, a faint grain of what was there
    float l = luma(sampleC(uv));
    float breath = .5 + .5 * sin(uTime * .9);
    float grain = fract(sin(dot(floor(vUv * uRes / 2.), vec2(12.9898, 78.233)) + floor(uTime * 8.)) * 43758.5453);
    float v = .93 + .07 * breath - uAmt[18] * (1. - l) + (grain - .5) * .035;
    c = vec3(clamp(v, 0., 1.)) * vec3(.98, .99, 1.);
  }
  outColor = vec4(c, 1.);
}
`,ts=Q+`
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
`,es=Q+`
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
`,os=Q+`
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
`,ns=Q+`
uniform sampler2D uSrc;
uniform sampler2D uCg;
uniform float uOn;
void main(){
  vec3 c = texture(uSrc, vUv).rgb;
  if (uOn > .5){ vec4 g = texture(uCg, vUv); c = c * (1. - g.a) + g.rgb; }
  outColor = vec4(c, 1.);
}
`,Ho=`
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
`,ss=Q+Ho+`
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
`,as=Q+Ho+`
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
`,Ke=`
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
`,is=Q+Ke+`
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
`,rs=Q+Ke+`
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
`,ls=Q+`
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
`,cs=Q+`
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
`,us=Q+`
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
`,fs=Q+Ke+`
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
`,hs=Q+`
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
`,ds=Q+`
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
`,ms=Q+`
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
`,ps=Q+`
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
`,vs=Q+`
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
`,gs=Q+`
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
`;class xs{video;stream=null;facing=null;pending=null;error="";busy=!1;onError=null;constructor(){this.video=document.createElement("video"),this.video.muted=!0,this.video.playsInline=!0,this.video.setAttribute("playsinline","")}get ready(){return!!this.stream&&this.video.readyState>=2&&this.video.videoWidth>0}want(e){e===this.facing||e===this.pending||(this.pending=e,this.busy||this.apply())}async apply(){this.busy=!0;try{for(;this.pending!==this.facing;){const e=this.pending;if(this.stop(),e)try{const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:e},width:{ideal:1280},height:{ideal:720},frameRate:{ideal:30}},audio:!1});this.stream=t,this.video.srcObject=t,await this.video.play().catch(()=>{}),this.error=""}catch(t){this.error=t.name||"ERR",this.pending=null,this.onError?.(this.error)}if(this.facing=this.stream?e:null,!this.stream)break}}finally{this.busy=!1}}stop(){this.stream?.getTracks().forEach(e=>e.stop()),this.stream=null,this.video.srcObject=null,this.facing=null}}function bs(o,e,t){const n=o/e;return n>t?[t/n,1,0,0]:[1,n/t,0,0]}const Ft='"Galmuri11", monospace',uo=["#ff3030","#ffe030","#30ff60","#30e0ff","#5050ff","#ff40ff"];function be(o,e,t,n){o.font=`bold ${n}px ${Ft}`;const s=o.measureText(e).width;return s>t?Math.floor(n*t/s):n}function Nt(o,e,t,n,s,a,i,r="center"){o.font=`bold ${s}px ${Ft}`,o.textAlign=r,o.textBaseline="middle";const l=Math.max(2,Math.round(s/11));if(a==="neg"){const c=o.measureText(e).width,u=r==="center"?t-c/2:t;o.fillStyle="#f0f0f0",o.fillRect(Math.round(u-l*3),Math.round(n-s*.62),Math.round(c+l*6),Math.round(s*1.24)),o.fillStyle="#0a0a0a",o.fillText(e,t,n);return}o.fillStyle="#000";for(const[c,u]of[[-l,0],[l,0],[0,-l],[0,l],[-l,-l],[l,l],[-l,l],[l,-l]])o.fillText(e,t+c,n+u);if(a==="cycle"){const c=[...e];let u=0;const f=c.map(d=>o.measureText(d).width),v=f.reduce((d,x)=>d+x,0);let m=r==="center"?t-v/2:t;const h=Math.floor(i*8);o.textAlign="left",c.forEach((d,x)=>{o.fillStyle=uo[(x+h)%uo.length],o.fillText(d,m,n),m+=f[x],u+=f[x]})}else o.fillStyle="#f4f4f4",o.fillText(e,t,n)}class ys{canvas=document.createElement("canvas");ctx=this.canvas.getContext("2d");standby=document.createElement("canvas");label=document.createElement("canvas");start=0;serial=-1;visible=!1;constructor(){document.fonts.load('22px "Galmuri11"',"가A1").then(()=>this.drawStatic())}resize(e,t){this.canvas.width===e&&this.canvas.height===t||(this.canvas.width=e,this.canvas.height=t,this.drawStatic())}drawStatic(){const e=this.canvas.width||720,t=this.canvas.height||1280;this.standby.width=e,this.standby.height=t;const n=this.standby.getContext("2d");n.fillStyle="#000",n.fillRect(0,0,e,t);const s=this.label;s.width=400,s.height=100;const a=s.getContext("2d");a.clearRect(0,0,400,100),a.fillStyle="#000",a.fillRect(70,28,260,44),a.font=`bold 33px ${Ft}`,a.textAlign="center",a.textBaseline="middle",a.fillStyle="#e8e8e8",a.fillText("NO SIGNAL",200,51)}render(e,t=e){const n=W.cg,s=this.canvas.width,a=this.canvas.height,i=this.ctx;if(n.serial!==this.serial&&(this.serial=n.serial,this.start=e),this.visible=n.mode!=="off"||n.tc||n.sat,!this.visible)return!1;i.clearRect(0,0,s,a),i.imageSmoothingEnabled=!1;const r=Math.min(s,a)/10,l=e-this.start,c=u=>u.slice(0,Math.floor(l*30));if(n.mode==="title"){const u=be(i,n.title1,s*.9,Math.round(r*1.1));Nt(i,c(n.title1),s/2,a*.47,u,n.style,l),n.title2&&Nt(i,c(n.title2),s/2,a*.47+u*1.3,Math.round(u*.55),n.style==="cycle"?"chyron":n.style,l)}else if(n.mode==="lower"){const u=be(i,n.lower1,s*.86,Math.round(r*.62));Nt(i,c(n.lower1),r*.5,a*.78,u,n.style,l,"left"),Nt(i,c(n.lower2),r*.5,a*.78+u*1.25,Math.round(u*.7),n.style==="cycle"?"chyron":n.style,l,"left")}else if(n.mode==="crawl"){const u=Math.round(r*.5);i.font=`bold ${u}px ${Ft}`;const f=i.measureText(n.crawl).width+r,v=s-Math.floor(l*60)*Math.round(r*.03)%(f+s);i.fillStyle="#000",i.fillRect(0,Math.round(a*.88-u*.8),s,Math.round(u*1.6)),Nt(i,n.crawl,v,a*.88,u,n.style,l,"left")}else if(n.mode==="doc"){const u=n.docTop.split(`
`),f=Math.round(r*.3);i.font=`${f}px ${Ft}`,i.textAlign="center",i.textBaseline="middle",u.forEach((x,g)=>{i.fillStyle="#000",i.fillText(c(x),s/2+1,r*.7+g*f*1.3+1),i.fillStyle="#b8b8b8",i.fillText(c(x),s/2,r*.7+g*f*1.3)});const v=n.doc.split(`
`).filter(x=>x.trim()),m=v.reduce((x,g)=>x.length>g.length?x:g,""),h=be(i,m,s*.9,Math.round(r*.5)),d=a*.5-(v.length-1)*h*1.25/2;v.forEach((x,g)=>Nt(i,c(x.toUpperCase()),s/2,d+g*h*1.25,h,"chyron",l))}else if(n.mode==="credits"){const u=n.credits.split(`
`),f=Math.round(r*.7),v=a-Math.floor(l*30)*Math.max(1,Math.round(r*.04))%(u.length*f+a);u.forEach((m,h)=>{if(!m.trim())return;const d=h===0||!u[h-1].trim();Nt(i,m,s/2,v+h*f,Math.round(d?r*.32:r*.5),d?"chyron":n.style,l)})}if(n.tc&&n.tcBig){const u=Math.round(r*.62),f=t+660+56,v=Math.floor(f%1*30),m=[Math.floor(f/3600)%24,Math.floor(f/60)%60,Math.floor(f)%60,v].map(d=>String(d).padStart(2,"0")).join(" ");i.font=`bold ${u}px ${Ft}`;const h=i.measureText(m).width;i.fillStyle="#000",i.fillRect(Math.round(s/2-h/2-10),Math.round(a*.8-u*.7),Math.round(h+20),Math.round(u*1.4)),i.fillStyle="#f4f4f4",i.textAlign="center",i.textBaseline="middle",i.fillText(m,s/2,a*.8)}else if(n.tc){const u=Math.round(r*.36),f=e,v=Math.floor(f%1*30),m=`${String(Math.floor(f/3600)%24).padStart(2,"0")}:${String(Math.floor(f/60)%60).padStart(2,"0")}:${String(Math.floor(f)%60).padStart(2,"0")}:${String(v).padStart(2,"0")}`;i.font=`bold ${u}px ${Ft}`;const h=i.measureText(m).width;i.fillStyle="#000",i.fillRect(Math.round(s/2-h/2-6),Math.round(a-r*.9),Math.round(h+12),Math.round(u*1.4)),i.fillStyle="#fff",i.textAlign="center",i.textBaseline="top",i.fillText(m,s/2,Math.round(a-r*.9+u*.2))}if(n.sat){const u=Math.round(r*.3);i.font=`bold ${u}px ${Ft}`,i.textAlign="left",i.textBaseline="top",Math.floor(e*1.5)%2===0&&(i.fillStyle="#000",i.fillRect(Math.round(r*.3),Math.round(r*.35),Math.round(r*4.6),Math.round(u*1.5)),i.fillStyle="#ffe040",i.fillText("LIVE VIA SATELLITE",Math.round(r*.4),Math.round(r*.35+u*.25)))}return!0}}const gt=(o,e)=>{o.fillStyle=e,o.fill(),o.lineWidth=5,o.strokeStyle="#111",o.stroke()},ae=[o=>{o.beginPath(),o.moveTo(18,92),o.bezierCurveTo(30,40,60,12,92,6),o.bezierCurveTo(80,40,56,70,18,92),gt(o,"#f4f0e0"),o.beginPath(),o.moveTo(18,92),o.lineTo(80,20),o.stroke();for(let e=0;e<6;e++)o.beginPath(),o.moveTo(30+e*9,78-e*10),o.lineTo(42+e*9,76-e*12),o.stroke()},o=>{o.beginPath(),o.ellipse(32,76,16,12,-.4,0,Math.PI*2),gt(o,"#111"),o.fillRect(44,14,7,62),o.beginPath(),o.moveTo(51,14),o.quadraticCurveTo(80,26,74,52),o.quadraticCurveTo(70,34,51,32),gt(o,"#111")},o=>{o.beginPath(),o.roundRect(34,8,32,48,16),gt(o,"#c8c8d0");for(let e=0;e<4;e++)o.beginPath(),o.moveTo(36,18+e*9),o.lineTo(64,18+e*9),o.stroke();o.beginPath(),o.moveTo(24,46),o.quadraticCurveTo(50,80,76,46),o.stroke(),o.fillStyle="#111",o.fillRect(46,64,8,22),o.fillRect(32,86,36,7)},o=>{o.beginPath(),o.moveTo(12,38),o.lineTo(34,38),o.lineTo(62,14),o.lineTo(62,86),o.lineTo(34,62),o.lineTo(12,62),o.closePath(),gt(o,"#f0d040");for(let e=0;e<3;e++)o.beginPath(),o.arc(62,50,14+e*12,-.7,.7),o.stroke()},o=>{o.beginPath(),o.ellipse(50,48,36,42,0,0,Math.PI*2),gt(o,"#f8f0c8"),o.fillStyle="#111",o.beginPath(),o.ellipse(36,38,8,5,-.3,0,Math.PI*2),o.ellipse(64,38,8,5,.3,0,Math.PI*2),o.fill(),o.beginPath(),o.arc(50,56,18,.15,Math.PI-.15),o.closePath(),o.fill()},o=>{o.beginPath(),o.ellipse(50,48,36,42,0,0,Math.PI*2),gt(o,"#a0c8f0"),o.fillStyle="#111",o.beginPath(),o.ellipse(36,40,8,5,.4,0,Math.PI*2),o.ellipse(64,40,8,5,-.4,0,Math.PI*2),o.fill(),o.beginPath(),o.arc(50,78,16,Math.PI+.3,-.3),o.lineWidth=6,o.stroke()},o=>{o.beginPath(),o.ellipse(50,52,42,34,-.2,0,Math.PI*2),gt(o,"#d8a868"),["#e02020","#2050e0","#20c040","#f0e020","#f0f0f0"].forEach((t,n)=>{o.beginPath(),o.arc(26+n*13,40+n%2*10,6,0,Math.PI*2),o.fillStyle=t,o.fill(),o.lineWidth=2,o.stroke()}),o.beginPath(),o.arc(66,66,8,0,Math.PI*2),o.fillStyle="#3a2410",o.fill()},o=>{o.beginPath(),o.moveTo(20,76),o.quadraticCurveTo(30,66,30,44),o.quadraticCurveTo(30,14,50,14),o.quadraticCurveTo(70,14,70,44),o.quadraticCurveTo(70,66,80,76),o.closePath(),gt(o,"#f0c030"),o.beginPath(),o.arc(50,82,8,0,Math.PI*2),gt(o,"#f0c030")},o=>{o.beginPath();for(let e=0;e<10;e++){const t=e%2?18:44,n=e/10*Math.PI*2-Math.PI/2;o.lineTo(50+Math.cos(n)*t,52+Math.sin(n)*t)}o.closePath(),gt(o,"#ff60c0")}],fo=["#1830a0","#c02040","#108050","#d07010","#7020a0","#101010","#e0d8c0"];function Ms(o,e,t){const n=["#c0c0c0","#c0c000","#00c0c0","#00c000","#c000c0","#c00000","#0000c0"];o.fillStyle="#f4f4f4",o.fillRect(-e/2-8,-t/2-8,e+16,t+16),n.forEach((s,a)=>{o.fillStyle=s,o.fillRect(-e/2+a*e/7,-t/2,e/7+1,t*.7)}),["#0000c0","#111","#c000c0","#111","#00c0c0","#111","#c0c0c0"].forEach((s,a)=>{o.fillStyle=s,o.fillRect(-e/2+a*e/7,-t/2+t*.7,e/7+1,t*.08)}),o.fillStyle="#101010",o.fillRect(-e/2,-t/2+t*.78,e,t*.22),o.fillStyle="#f0f0f0",o.fillRect(-e/2+e*.16,-t/2+t*.78,e*.16,t*.22)}class ws{canvas=document.createElement("canvas");last=-1;stamp=0;update(e,t,n){const s=Math.min(1,720/Math.max(t,n)),a=Math.round(t*s),i=Math.round(n*s);if(e===this.last&&this.canvas.width===a)return!1;this.last=e,this.canvas.width=a,this.canvas.height=i;const r=this.canvas.getContext("2d"),l=h=>{const d=Math.sin(e*12.9898+h*78.233)*43758.5453;return d-Math.floor(d)};r.fillStyle=fo[Math.floor(l(1)*fo.length)],r.fillRect(0,0,a,i),r.strokeStyle="rgba(255,255,255,0.18)",r.lineWidth=10;for(let h=1;h<8;h++)r.strokeRect(a/2-h*a*.07,i/2-h*i*.07,h*a*.14,h*i*.14);const c=ae[Math.floor(l(2)*ae.length)],u=ae[Math.floor(l(3)*ae.length)],f=Math.min(a,i)*.28;for(const[h,d]of[[1,1],[-1,1],[1,-1],[-1,-1]])r.save(),r.translate(a/2+h*a*.3,i/2+d*i*.32),r.scale(h*f/100,d*f/100),r.translate(-50,-50),c(r),r.restore(),r.save(),r.translate(a/2+h*a*.36,i/2+(d>0?.04:-.04)*i),r.scale(h*f*.7/100,f*.7/100),r.translate(-50,-50),d>0&&u(r),r.restore();r.save(),r.translate(a/2,i/2),r.rotate((l(4)-.5)*.9);const v=a*.5,m=v*.75;return r.fillStyle="rgba(0,0,0,0.45)",r.fillRect(-v/2+10,-m/2+12,v+16,m+16),Ms(r,v,m),r.restore(),this.stamp++,!0}}const Qt=900,Ot=new Float32Array(Qt*2),ie=new Float32Array(2048);function ks(o,e){const t=W.synth;if(t.mode===1){let a=!1;if(Lt.ctx&&Lt.xy){Lt.xy.getFloatTimeDomainData(ie);for(let l=0;l<64;l++)Math.abs(ie[l*16])>.002&&(a=!0)}const i=37,r=2.6*t.gain;for(let l=0;l<Qt;l++)if(a){const c=ie[l*2%(2048-i)],u=ie[(l*2+i)%2048],f=Math.atan2(u,c)+l*.0021*t.fx,v=Math.min(1.2,Math.hypot(c,u)*r);Ot[l*2]=Math.cos(f)*v,Ot[l*2+1]=Math.sin(f)*v}else Ot[l*2]=(Math.random()-.5)*.02,Ot[l*2+1]=(Math.random()-.5)*.02;return Ot}const n=o*t.drift,s=.82*(1+e*.15)*t.gain;for(let a=0;a<Qt;a++){const i=a/(Qt-1)*Math.PI*2;let r,l;if(t.mode===2){const c=t.fx/Math.max(1,t.fy),u=Math.cos(c*i*t.fy+n)*s;r=u*Math.cos(i*t.fy),l=u*Math.sin(i*t.fy)}else r=Math.sin(t.fx*i+n)*s,l=Math.sin(t.fy*i)*s;Ot[a*2]=r,Ot[a*2+1]=l}return Ot}function Ts(o,e,t,n,s){const a=o.length/2,i=t/n*2;let r=0;for(let l=0;l<a-1;l++){const c=o[l*2]/e,u=o[l*2+1],f=o[l*2+2]/e,v=o[l*2+3];let m=f-c,h=v-u;const d=Math.hypot(m*e,h)||1e-6,x=Math.min(1.6,.012/d+.25);m/=d,h/=d;const g=-h*i/e,b=m*i,R=[[c+g,u+b,1],[c-g,u-b,-1],[f+g,v+b,1],[f+g,v+b,1],[c-g,u-b,-1],[f-g,v-b,-1]];for(const[T,E,S]of R)s[r++]=T,s[r++]=E,s[r++]=S,s[r++]=x}return r/4}const Ss=(Qt-1)*6*4,Fe=[{id:"none",name:"NONE",ko:"원본"},{id:"paikabe",name:"PAIK-ABE",ko:"윤곽+색면",a:"LINES",b:"SMEAR",hist:!0},{id:"ribbon",name:"RIBBON",ko:"흰 리본",a:"LEVEL",b:"WIDTH"},{id:"rutt",name:"RUTT",ko:"주사선 등고선",a:"HEIGHT",b:"LINES"},{id:"breakup",name:"BREAK-UP",ko:"픽셀 깨짐",a:"BLOCK",b:"AMOUNT"},{id:"poster2",name:"POSTER 2",ko:"두 색",a:"COLORS"},{id:"lineart",name:"LINE ART",ko:"선화",a:"BACK"},{id:"smear",name:"SMEAR",ko:"흔들린 번짐",a:"AMOUNT",b:"ANGLE",hist:!0},{id:"color",name:"COLOR",ko:"컬러라이저",a:"BANDS",b:"CYCLE"},{id:"mosaic",name:"MOSAIC",ko:"모자이크",a:"SIZE",era:5},{id:"rgb",name:"RGB",ko:"RGB 어긋남",a:"SHIFT",era:7},{id:"solar",name:"SOLAR",ko:"솔라리",a:"FOLD",era:9},{id:"nega",name:"NEGA",ko:"네거티브",era:10},{id:"thermal",name:"THERMAL",ko:"열화상",era:11},{id:"paint",name:"PAINT",ko:"페인트박스",a:"LEVELS",era:12},{id:"neon",name:"NEON",ko:"네온",a:"GAIN",era:13},{id:"halftone",name:"HALFTONE",ko:"망점",a:"CELL",era:16},{id:"led",name:"LED",ko:"전광판",a:"DOTS",era:15},{id:"teletext",name:"TELETEXT",ko:"문자방송",a:"COLS",era:14},{id:"kaleido",name:"KALEIDO",ko:"만화경",a:"SEGS",era:4},{id:"ghost",name:"GHOST",ko:"흰 그림자",a:"DETAIL",era:18}],qo=o=>Fe.find(e=>e.id===o)??Fe[0],pt=(o,e,t)=>o+(e-o)*t,As={none:["#ff3a30","#ffe02a","#30c8ff","#c060ff"],paikabe:["#ff5aa0","#40e0ff","#ffe040","#ffffff"],ribbon:["#ffffff","#ffe040","#40e0ff","#ff70c0"],rutt:["#40ff60","#ffb020","#ffffff","#40c0ff"],breakup:["#ff3a30","#30a0ff","#ffe02a","#ffffff"],poster2:["#e02020","#2040e0","#f0c000","#10a050"],lineart:["#1840c0","#c01818","#18a040","#101010"],smear:["#ff8020","#c060ff","#40e0ff","#ffffff"],color:["#ff3a30","#30ff80","#3080ff","#ffe02a"],neon:["#ff40c0","#40e0ff","#a0ff40","#ffe040"],thermal:["#ff4010","#ffe020","#20a0ff","#ffffff"],led:["#ff3020","#40ff40","#ffb020","#40c0ff"],teletext:["#00ffff","#ffff00","#ff00ff","#00ff00"],ghost:["#ffffff","#d8f0ff","#fff2c8","#ead8ff"]},Rs=o=>As[o]??["#ff3a30","#ffe02a","#30c8ff","#c060ff"],$o=o=>o.colors?.[o.id]??"orig",ce=["#ff4070","#40e0ff","#ffe040","#90ff50","#c070ff","#ff8020","#ffffff","#30ffc0"],Es=[["NONE","없음"],["TORN","찢긴 선"],["NEON","네온 번짐"],["RAINBOW","무지개 흐름"],["DOTS","행진 점선"],["ELECTRIC","전기"],["ECHO","메아리 고리"],["CHROME","크롬"],["RIBBON","흰 리본"],["PAIK-ABE","가는 다중선"]],Ps=["CIRCLE","RING","RECT","DIAMOND"],ho={tap:"TAP",person:"PERSON",luma:"LUMA",chroma:"CHROMA",shape:"SHAPE"};function Xt(o,e){const t=o.track;if(!t||!t.done)return null;const n=t.frames.length,s=(e-t.start)*t.fps,a=c=>{if(c=Math.max(0,Math.min(n-1,c)),t.frames[c])return c;for(let u=1;u<n;u++){if(c-u>=0&&t.frames[c-u])return c-u;if(c+u<n&&t.frames[c+u])return c+u}return-1},i=a(Math.floor(s));if(i<0)return null;let r=a(Math.floor(s)+1);r<0&&(r=i);const l=r===i?0:Math.max(0,Math.min(1,s-Math.floor(s)));return{a:t.frames[i],b:t.frames[r],f:l,w:t.w,h:t.h,ia:i,ib:r,cx:t.cx[i]+(t.cx[r]-t.cx[i])*l,cy:t.cy[i]+(t.cy[r]-t.cy[i])*l}}const mo=new WeakMap;function Cs(o,e){const t=o.track;if(!t||!t.done)return null;let n=mo.get(t);if(!n||n.done!==t.done){const m=t.frames.length,h=3,d=new Float32Array(m),x=new Float32Array(m);for(let g=0;g<m;g++){let b=0,R=0,T=0;for(let E=Math.max(0,g-h);E<=Math.min(m-1,g+h);E++)if(t.frames[E]){const S=h+1-Math.abs(E-g);b+=t.cx[E]*S,R+=t.cy[E]*S,T+=S}d[g]=T?b/T:NaN,x[g]=T?R/T:NaN}mo.set(t,n={done:t.done,x:d,y:x})}const s=t.frames.length,a=Math.max(0,Math.min(s-1,(e-t.start)*t.fps)),i=Math.floor(a),r=Math.min(s-1,i+1),l=a-i,c=n.x[i],u=n.x[r],f=n.y[i],v=n.y[r];if(Number.isNaN(c)||Number.isNaN(u)){const m=Number.isNaN(c)?r:i;return Number.isNaN(n.x[m])?null:[n.x[m],n.y[m]]}return[c+(u-c)*l,f+(v-f)*l]}function ye(o){const e=o.track;return o.kind!=="tap"&&o.kind!=="person"?1:e?e.frames.length?e.done/e.frames.length:1:0}const vt=()=>performance.now()/1e3,ht={origin:0,get beat(){return 60/Math.max(30,W.music.bpm)},get step(){return this.beat/4},stepAt(o){return(o-this.origin)/this.step},timeOf(o){return this.origin+o*this.step},next(o,e=1){const t=Math.ceil(this.stepAt(o)/e-1e-4)*e;return this.timeOf(t)},beatAt(o){return this.stepAt(o)/4}},Is={"4:3":[4,3],"9:16":[9,16],"1:1":[1,1],"16:9":[16,9]},Le=[["#c070ff","#f4f0ff","#2a2aa0","#ffffff"],["#40ff40","#40ff40","#40ff40","#40ff40"],["#ff3030","#ffe030","#30e0ff","#ff40ff"],["#ffffff","#000000","#ffffff","#000000"]],Os=["#1840c0","#18a040","#c01818","#c018a0","#e07010","#101010"],Fs=Q+`
uniform sampler2D uA;
uniform sampler2D uB;
uniform float uAmt;
void main(){ outColor = vec4(mix(texture(uA, vUv).rgb, texture(uB, vUv).rgb, uAmt), 1.); }
`,Ls=Q+`
uniform sampler2D uSrc;
uniform float uAmt;
void main(){
  vec3 c = texture(uSrc, vUv).rgb;
  // darker and greyer, with a faint checker so the cut-out reads as lifted off
  vec2 g = floor(vUv * uRes / 18.);
  float k = mod(g.x + g.y, 2.) * .035;
  outColor = vec4(mix(c, vec3(luma(c)) * .35 + k, uAmt), 1.);
}
`,Bs=Q+"void main(){ outColor = vec4(0., 0., 0., 1.); }";class Ds{canvas;gl;kit;W=720;H=1280;cg=new ys;ornament=new ws;anchors=new Map;snapOut=null;frame=0;fps=0;fpsAcc=0;fpsN=0;lastT=0;p={};texs=new WeakMap;rts=new Map;cgTex;standbyTex;labelTex;ornTex;ornStamp=-1;t={};flip={};maskW=0;maskH=0;beamVao;beamBuf;beamData=new Float32Array(Ss);grabbers=[];brush={x:0,y:0,vx:0,vy:0,active:!1,tool:0,startHold:!1};fieldLive=0;centres=new Map;lastLayers=[];constructor(){this.canvas=document.createElement("canvas"),this.canvas.className="program-canvas";const e=this.canvas.getContext("webgl2",{antialias:!1,alpha:!1,preserveDrawingBuffer:!1,powerPreference:"high-performance"});if(!e)throw new Error("WebGL2 not supported");this.gl=e,this.kit=new Wn(e);const t=(r,l,c)=>this.p[l]=this.kit.program(r,l,c);t(Gn,"source"),t(Vn,"copy"),t(zn,"decay"),t(Kn,"beam",jn),t(Yn,"seed"),t(Xn,"jfa"),t(Zn,"dist"),t(es,"color"),t(ts,"scan"),t(os,"fb"),t(ns,"cg"),t(Qn,"era"),t(Jn,"analog"),t(ss,"objmask"),t(as,"objcomp"),t(is,"paikabe"),t(rs,"ribbon"),t(ls,"rutt"),t(cs,"breakup"),t(us,"reshoot"),t(fs,"poster2"),t(hs,"lineart"),t(ds,"smear"),t(ms,"tools"),t(ps,"field"),t(gs,"gen"),t(Fs,"mix"),t(Ls,"dim"),t(Bs,"black"),t(vs,"lookcol"),this.cgTex=this.kit.texture(),this.standbyTex=this.kit.texture(),this.labelTex=this.kit.texture(),this.ornTex=this.kit.texture(),this.beamVao=e.createVertexArray(),this.beamBuf=e.createBuffer(),e.bindVertexArray(this.beamVao),e.bindBuffer(e.ARRAY_BUFFER,this.beamBuf),e.bufferData(e.ARRAY_BUFFER,this.beamData.byteLength,e.DYNAMIC_DRAW);const n=this.p.beam.prog,s=e.getAttribLocation(n,"aPos"),a=e.getAttribLocation(n,"aAcross"),i=e.getAttribLocation(n,"aI");e.enableVertexAttribArray(s),e.vertexAttribPointer(s,2,e.FLOAT,!1,16,0),e.enableVertexAttribArray(a),e.vertexAttribPointer(a,1,e.FLOAT,!1,16,8),e.enableVertexAttribArray(i),e.vertexAttribPointer(i,1,e.FLOAT,!1,16,12),e.bindVertexArray(null),this.setOutput(W.output.aspect,W.output.quality)}setOutput(e,t){const[n,s]=Is[e],a=t==="fhd"?1920:t==="hd"?1280:960;let i,r;n>=s?(i=a,r=Math.round(a*s/n/2)*2):(r=a,i=Math.round(a*n/s/2)*2),e==="4:3"&&(i=t==="fhd"?1440:t==="hd"?960:720,r=i*3/4),e==="1:1"&&(i=r=t==="fhd"?1080:t==="hd"?960:720),this.W=i,this.H=r,this.canvas.width=i,this.canvas.height=r;for(const c in this.t)this.kit.freeTarget(this.t[c]);for(const c of this.rts.values())this.freeRt(c);this.rts.clear(),this.t={};const l=(c,u=i,f=r,v)=>this.t[c]=this.kit.target(u,f,v);for(const c of["a","b","c0","c1","era","col","sc","tl","h0","h1","rs","p0","p1","syn0","syn1","hold","snap"])l(c);this.maskW=Math.round(i/3),this.maskH=Math.round(r/3);for(const c of["om","odist"])l(c,this.maskW,this.maskH);l("j0",this.maskW,this.maskH,this.gl.NEAREST),l("j1",this.maskW,this.maskH,this.gl.NEAREST),l("f0",Math.round(i/4),Math.round(r/4)),l("f1",Math.round(i/4),Math.round(r/4)),this.clearField(),this.cg.resize(i,r),this.upload(this.standbyTex,this.cg.standby,!0),this.upload(this.labelTex,this.cg.label,!0),this.ornStamp=-1}clearField(){const e=this.gl;for(const t of["f0","f1"])e.bindFramebuffer(e.FRAMEBUFFER,this.t[t].fb),e.clearColor(.5,.5,0,0),e.clear(e.COLOR_BUFFER_BIT);e.clearColor(0,0,0,1),e.bindFramebuffer(e.FRAMEBUFFER,null),this.fieldLive=0}clearBrush(){this.clearField()}pp(e,t){const n=e+t;return(this.flip[n]=(this.flip[n]??0)^1)?[this.t[e],this.t[t]]:[this.t[t],this.t[e]]}upload(e,t,n=!1){const s=this.gl;s.bindTexture(s.TEXTURE_2D,e),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!0),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n);try{s.texImage2D(s.TEXTURE_2D,0,s.RGBA,s.RGBA,s.UNSIGNED_BYTE,t)}catch{}s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1)}uploadR8(e,t,n,s){const a=this.gl;a.bindTexture(a.TEXTURE_2D,e),a.pixelStorei(a.UNPACK_ALIGNMENT,1),a.texImage2D(a.TEXTURE_2D,0,a.R8,n,s,0,a.RED,a.UNSIGNED_BYTE,t),a.pixelStorei(a.UNPACK_ALIGNMENT,4)}refreshStatic(){this.cg.drawStatic(),this.upload(this.standbyTex,this.cg.standby,!0),this.upload(this.labelTex,this.cg.label,!0)}texOf(e){let t=this.texs.get(e);if(t||(t={tex:this.kit.texture(),stamp:-1,ok:!1},this.texs.set(e,t)),t.stamp!==e.stamp){const n=e.element();n&&(this.upload(t.tex,n),t.ok=!0,t.stamp=e.stamp)}return t.ok?t.tex:null}fitOf(e){const[t,n]=e.size();return bs(t,n,this.W/this.H)}mirrorOf(e){return e.s.kind==="camera"&&e.s.facing==="user"?1:0}syn=0;synthTex(){return(this.syn?this.t.syn1:this.t.syn0).tex}renderSynth(e,t){const n=this.gl,s=this.syn?this.t.syn1:this.t.syn0,a=this.syn?this.t.syn0:this.t.syn1;this.syn^=1,this.kit.draw(this.p.decay,a,{uSrc:s.tex,uDecay:W.synth.persist});const i=ks(e,t),r=Ts(i,this.W/this.H,W.synth.width*(this.H/480),this.H,this.beamData);n.bindFramebuffer(n.FRAMEBUFFER,a.fb),n.viewport(0,0,a.w,a.h),n.useProgram(this.p.beam.prog);const l=It(W.synth.color);n.uniform3f(this.p.beam.loc("uColor"),l[0]*.5,l[1]*.5,l[2]*.5),n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE),n.bindVertexArray(this.beamVao),n.bindBuffer(n.ARRAY_BUFFER,this.beamBuf),n.bufferSubData(n.ARRAY_BUFFER,0,this.beamData,0,r*4),n.drawArrays(n.TRIANGLES,0,r),n.bindVertexArray(null),n.disable(n.BLEND)}srcU(e){return{uTime:e,uFlipY:0,uLabel:this.labelTex,uColor:It(W.matte.color)}}drawPlayer(e,t,n){const s=this.texOf(e);if(!s)return this.kit.draw(this.p.black,t,{});this.kit.draw(this.p.source,t,{...this.srcU(n),uKind:ct(1),uTex:s,uFit:this.fitOf(e),uMirror:this.mirrorOf(e)})}drawBg(e,t,n,s){const a=this.kit;if(e.kind==="white"){const i=this.gl;i.bindFramebuffer(i.FRAMEBUFFER,t.fb),i.viewport(0,0,t.w,t.h),i.clearColor(1,1,1,1),i.clear(i.COLOR_BUFFER_BIT),i.clearColor(0,0,0,1);return}if(e.kind==="player")return this.drawPlayer(e.p,t,n);if(e.kind==="gen")return a.draw(this.p.gen,t,{uTime:n,uMode:ct(e.id),uBeat:s});if(e.kind==="beam")return a.draw(this.p.source,t,{...this.srcU(n),uKind:ct(1),uTex:this.synthTex(),uFit:[1,1,0,0],uMirror:0});if(e.kind==="matte")return e.pattern===cn?(this.ornament.update(Math.floor(s),this.W,this.H),this.ornament.stamp!==this.ornStamp&&(this.upload(this.ornTex,this.ornament.canvas),this.ornStamp=this.ornament.stamp),a.draw(this.p.source,t,{...this.srcU(n),uKind:ct(1),uTex:this.ornTex,uFit:[1,1,0,0],uMirror:0})):a.draw(this.p.source,t,{...this.srcU(n),uKind:ct(2),uPattern:ct(e.pattern),uTex:this.labelTex});a.draw(this.p.black,t,{})}distance(e,t,n){this.kit.draw(this.p.seed,this.t.j0,{uMask:e.tex});let s=this.t.j0,a=this.t.j1,i=1;for(;i<Math.max(this.maskW,this.maskH);)i*=2;for(i/=2;i>=1;i/=2)this.kit.draw(this.p.jfa,a,{uSrc:s.tex,uStep:i}),[s,a]=[a,s];this.kit.draw(this.p.dist,t,{uSrc:s.tex,uMaxD:n})}rtOf(e,t=e.id){let n=this.rts.get(t);if(!n){const s=Math.round(this.W/2),a=Math.round(this.H/2);n={raw:this.kit.target(s,a),l0:this.kit.target(s,a),l1:this.kit.target(s,a),flip:0,out:null,lc:null,frame:-1,ma:this.kit.texture(),mb:this.kit.texture(),ka:null,kb:null,used:0},n.out=n.raw,this.rts.set(t,n)}return n.used=this.frame,n}freeRt(e){this.kit.freeTarget(e.raw),this.kit.freeTarget(e.l0),this.kit.freeTarget(e.l1),e.lc&&this.kit.freeTarget(e.lc),this.gl.deleteTexture(e.ma),this.gl.deleteTexture(e.mb)}dress(e,t,n,s,a=e.id){const i=this.rtOf(e,a);if(i.frame===this.frame)return i;i.frame=this.frame,this.drawPlayer(t,i.raw,n);const r=qo(e.look.id),l=e.look.a,c=e.look.b,u=this.kit;let f=i.raw;const v=()=>(i.flip^=1,i.flip?i.l0:i.l1),m=()=>i.flip?i.l1:i.l0;if(r.id==="none")return i.out=f,this.recolour(e,i,s);const h=(()=>{const d=v(),x={uSrc:f.tex,uTime:n};if(r.id==="paikabe")u.draw(this.p.paikabe,d,{...x,uHist:m().tex,uLines:Math.round(pt(1,6,l)),uField:.85,uSmear:pt(0,.95,c)});else if(r.id==="ribbon")u.draw(this.p.ribbon,d,{...x,uLevel:pt(.2,.8,l),uWidth:pt(.03,.18,c),uFringe:1});else if(r.id==="rutt")u.draw(this.p.rutt,d,{...x,uLines:Math.round(pt(24,100,c)),uHeight:pt(.04,.3,l),uColorMode:ct(0)});else if(r.id==="breakup")u.draw(this.p.breakup,d,{...x,uBlock:pt(.02,.12,l),uAmount:pt(.2,1,c)});else if(r.id==="poster2")u.draw(this.p.poster2,d,{...x,uPair:ct(Math.min(3,Math.floor(l*4)))});else if(r.id==="lineart")u.draw(this.p.lineart,d,{...x,uBg:It(Os[(Math.floor(s)+Math.floor(l*6))%6]),uCircles:1});else if(r.id==="smear")u.draw(this.p.smear,d,{...x,uHist:m().tex,uAngle:pt(-3.1,3.1,c),uAmount:pt(.2,1,l)});else if(r.id==="color"){const g=[];for(let b=0;b<7;b++)g.push(...po([0,.08,.16,.33,.5,.66,.83][b]+n*pt(0,.5,c),1,1));u.setArray(this.p.color,"uPal",3,g),u.draw(this.p.color,d,{uSrc:f.tex,uIn0:f.tex,uIn1:f.tex,uIn2:f.tex,uIn3:f.tex,uMixOn:[0,0,0,0],uBands:ct(Math.round(pt(2,7,l))),uGain:1,uContrast:1.2,uSmooth:0,uNeg:0,uMix:0})}else if(r.era!==void 0){const g=ne.map((T,E)=>E===r.era?1:0),b=ne[r.era],R=ne.map(T=>T.def);R[r.era]=b.step>=1?Math.round(pt(b.min,b.max,l)):pt(b.min,b.max,l),u.setArray(this.p.era,"uOn",1,g),u.setArray(this.p.era,"uAmt",1,R),u.draw(this.p.era,d,{uCur:f.tex,uAtlas:f.tex,uHead:0,uFilled:1,uTime:n})}else return f;return d})();return f=h,i.out=h,this.recolour(e,i,s)}recolour(e,t,n){const s=$o(e.look);if(s==="orig")return t;t.lc||(t.lc=this.kit.target(t.raw.w,t.raw.h));const a=s==="rainbow"?2:s==="neg"?3:s==="mono"?4:1;return this.kit.draw(this.p.lookcol,t.lc,{uSrc:t.out.tex,uMode:ct(a),uCol:a===1?It(s):[1,1,1],uBeat:n}),t.out=t.lc,t}maskTex(e,t,n){const s=Xt(e,n);return s?(t.ka!==s.a&&(this.uploadR8(t.ma,s.a,s.w,s.h),t.ka=s.a),t.kb!==s.b&&(this.uploadR8(t.mb,s.b,s.w,s.h),t.kb=s.b),{a:t.ma,b:t.mb,f:s.f,cx:s.cx,cy:s.cy}):null}sourceToScreen(e,t,n){const s=this.fitOf(e.p),a=(t-.5)/s[0]+.5,i=(1-n-.5)/s[1]+.5,r=this.W/this.H;let l=(a-.5)*2*r*e.scale,c=(i-.5)*2*e.scale;const u=e.rot*Math.PI/180;return[l,c]=[l*Math.cos(u)-c*Math.sin(u),l*Math.sin(u)+c*Math.cos(u)],l+=e.x*r,c+=e.y,[l/(2*r)+.5,c/2+.5]}screenToSource(e,t,n,s){let a=t,i=1-n;if(s){const u=this.W/this.H;let f=(a-.5)*2*u-s.x*u,v=(i-.5)*2-s.y;const m=-s.rot*Math.PI/180;[f,v]=[f*Math.cos(m)-v*Math.sin(m),f*Math.sin(m)+v*Math.cos(m)],a=f/(2*u*s.scale)+.5,i=v/(2*s.scale)+.5}const r=this.fitOf(e);let l=(a-.5)*r[0]+.5;const c=(i-.5)*r[1]+.5;return this.mirrorOf(e)&&(l=1-l),[l,1-c]}layerAt(e,t){const n=this.lastLayers;for(let i=n.length-1;i>=0;i--){const r=n[i],[l,c]=this.screenToSource(r.p,e,t,r);if(l<0||l>1||c<0||c>1)continue;if(r.g.kind!=="tap"&&r.g.kind!=="person"){const m=this.centres.get(r.key);if(m&&Math.hypot((e-m[0])*(this.W/this.H),1-t-m[1])<.3*r.scale)return r;continue}const u=Xt(r.g,r.p.shownPos(vt()));if(!u)continue;const f=Math.min(u.w-1,Math.max(0,Math.floor(l*u.w))),v=Math.min(u.h-1,Math.max(0,Math.floor(c*u.h)));if(u.a[v*u.w+f]>90)return r}let s=null,a=.12;for(let i=n.length-1;i>=0;i--){const r=this.centres.get(n[i].key);if(!r)continue;const l=Math.hypot((e-r[0])*this.W,(1-t-r[1])*this.H)/Math.min(this.W,this.H);l<a&&(a=l,s=n[i])}return s}anchor(e,t){let n=[.5,.5];(e.g.kind==="tap"||e.g.kind==="person")&&(n=Cs(e.g,t)??this.anchors.get(e.key)??n),this.anchors.set(e.key,n);const[s,a]=this.sourceToScreen({...e,x:0,y:0},n[0],n[1]);e.x-=(s-.5)*2,e.y-=(a-.5)*2}drawLayer(e,t,n,s,a,i,r){const l=this.kit,c=e.g,u=this.dress(c,e.p,n,s,r),f=e.p.shownPos(n);e.anchor&&i&&this.anchor(e,f);const v=this.fitOf(e.p),m={uPos:[e.x*(this.W/this.H),e.y],uScale:e.scale,uRotA:e.rot*Math.PI/180,uTiltA:e.tilt*Math.PI/180,uFit:v,uMirror:this.mirrorOf(e.p),uTime:n};let h=0,d=null;if(c.kind==="tap"||c.kind==="person"){if(d=this.maskTex(c,u,f),!d)return t}else h=c.kind==="luma"?1:c.kind==="chroma"?2:3;l.draw(this.p.objmask,this.t.om,{...m,uMaskA:d?.a??this.labelTex,uMaskB:d?.b??this.labelTex,uMaskF:d?.f??0,uObj:u.raw.tex,uKind:ct(h),uLuma:[c.key.lo,c.key.hi],uInvert:c.key.invert?1:0,uKeyColor:It(c.key.color),uShape:ct(c.shape.type),uSize:c.shape.size,uRing:c.shape.ring,uSpin:c.shape.spin});const x=d?this.sourceToScreen(e,d.cx,d.cy):this.sourceToScreen(e,.5,.5);i&&this.centres.set(e.key,x);const g=c.line>0,b=this.W/this.maskW,R=140/b+8;g&&this.distance(this.t.om,this.t.odist,R);const T=[];for(const S of Le[c.linePal%Le.length])T.push(...It(S));l.setArray(this.p.objcomp,"uPal",3,T);const[,E]=this.pp("c0","c1");return l.draw(this.p.objcomp,E,{...m,uCur:t.tex,uObj:u.out.tex,uMask:this.t.om.tex,uDist:this.t.odist.tex,uHasDist:g?1:0,uMaxD:R*b,uLine:ct(c.line),uLineSize:c.lineSize,uColor:e.tint??It(c.color),uTint:e.tint?[...e.tint,1]:[0,0,0,0],uLineTint:e.tint?[...e.tint,1]:c.lineColor&&c.lineColor!=="auto"?[...It(c.lineColor),1]:[0,0,0,0],uCenter:x,uFillMode:ct(0),uFill:this.labelTex,uFillFit:[1,1,0,0],uFillColor:[1,1,1],uSel:e.sel?1:0,uPulse:a}),E}poseFor(e,t,n=.76){let s=1,a=1,i=0,r=0;if(e.kind==="tap"||e.kind==="person")for(let x=0;x<6;x++){const g=Xt(e,e.loopIn+(x+.5)/6*Math.max(.05,e.loopOut-e.loopIn));if(g)for(let b=0;b<g.h;b+=2)for(let R=0;R<g.w;R+=2)g.a[b*g.w+R]>90&&(s=Math.min(s,R/g.w),i=Math.max(i,(R+2)/g.w),a=Math.min(a,b/g.h),r=Math.max(r,(b+2)/g.h))}i<=s&&([s,a,i,r]=[0,0,1,1]);const l=this.fitOf(t),c=this.W,u=this.H,f=(i-s)/l[0]*c,v=(r-a)/l[1]*u,m=Math.min(6,n*Math.min(c,u)/Math.max(1,f,v)),h=((s+i)/2-.5)/l[0]+.5,d=(1-(a+r)/2-.5)/l[1]+.5;return{key:-2,g:e,p:t,x:-2*(h-.5)*m,y:-2*(d-.5)*m,scale:m,rot:0,tilt:0,sel:!1}}poseAt(e,t,n=.76){const s=Xt(e,t.shownPos(vt()));if(!s)return null;const a=vo(s.a,s.w,s.h),i=s.b===s.a?a:vo(s.b,s.w,s.h);if(!a&&!i)return null;const r=a??i,l=i??a,[c,u,f,v]=r.map((E,S)=>E+(l[S]-E)*s.f),m=this.fitOf(t),h=this.W,d=this.H,x=(f-c)/m[0]*h,g=(v-u)/m[1]*d,b=Math.min(6,n*Math.min(h,d)/Math.max(1,x,g)),R=((c+f)/2-.5)/m[0]+.5,T=(1-(u+v)/2-.5)/m[1]+.5;return{key:-2,g:e,p:t,x:-2*(R-.5)*b,y:-2*(T-.5)*b,scale:b,rot:0,tilt:0,sel:!1}}snapshot(e,t,n=128,s=!1){const a=this.snapshotCanvas(e,t,n,s);return a?s?a.toDataURL("image/png"):a.toDataURL("image/jpeg",.82):""}snapshotCanvas(e,t,n=128,s=!1,a){if(!t.element())return null;const i=vt(),r=t.shownPos(i);let l=0,c=0,u=1,f=1;if(e.kind==="tap"||e.kind==="person"){const E=Xt(e,r);if(!E)return null;let S=E.w,O=E.h,F=-1,L=-1;for(let H=0;H<E.h;H++)for(let N=0;N<E.w;N++)E.a[H*E.w+N]>90&&(N<S&&(S=N),N>F&&(F=N),H<O&&(O=H),H>L&&(L=H));if(F<0)return null;[l,c,u,f]=[S/E.w,O/E.h,(F+1)/E.w,(L+1)/E.h]}const v=this.fitOf(t),m=this.W,h=this.H,d=(u-l)/v[0]*m,x=(f-c)/v[1]*h,g=Math.min(6,.76*Math.min(m,h)/Math.max(1,d,x)),b=((l+u)/2-.5)/v[0]+.5,R=(1-(c+f)/2-.5)/v[1]+.5,T={key:-1,g:e,p:t,x:-2*(b-.5)*g,y:-2*(R-.5)*g,scale:g,rot:0,tilt:0,sel:!1};return this.cutoutCanvas(T,n,s,a)}cutoutCanvas(e,t=128,n=!0,s){if(!e.p.element())return null;this.frame++;const a=vt(),i=this.W,r=this.H;(!this.snapOut||this.snapOut.w!==t)&&(this.snapOut&&this.kit.freeTarget(this.snapOut),this.snapOut=this.kit.target(t,t));const l=this.gl,c=i>r?r/i:1,u=r>i?i/r:1,f=g=>{g?(l.bindFramebuffer(l.FRAMEBUFFER,this.t.snap.fb),l.viewport(0,0,this.t.snap.w,this.t.snap.h),l.clearColor(1,1,1,1),l.clear(l.COLOR_BUFFER_BIT),l.clearColor(0,0,0,1)):this.kit.draw(this.p.black,this.t.snap,{});const b=this.drawLayer({...e},this.t.snap,a,0,0,!1,"snap");this.kit.draw(this.p.source,this.snapOut,{...this.srcU(a),uKind:ct(1),uTex:b.tex,uFit:[c,u,0,0],uMirror:0});const R=new Uint8Array(t*t*4);return l.bindFramebuffer(l.FRAMEBUFFER,this.snapOut.fb),l.readPixels(0,0,t,t,l.RGBA,l.UNSIGNED_BYTE,R),l.bindFramebuffer(l.FRAMEBUFFER,null),R},v=f(!1),m=n?f(!0):null,h=s??document.createElement("canvas");(h.width!==t||h.height!==t)&&(h.width=h.height=t);const d=h.getContext("2d"),x=d.createImageData(t,t);for(let g=0;g<t;g++){const b=(t-1-g)*t*4,R=g*t*4;for(let T=0;T<t*4;T+=4){const E=v[b+T],S=v[b+T+1],O=v[b+T+2];if(!m){x.data[R+T]=E,x.data[R+T+1]=S,x.data[R+T+2]=O,x.data[R+T+3]=255;continue}const F=(m[b+T]-E+m[b+T+1]-S+m[b+T+2]-O)/3,L=Math.max(0,Math.min(255,255-F)),H=L>0?255/L:0;x.data[R+T]=Math.min(255,E*H),x.data[R+T+1]=Math.min(255,S*H),x.data[R+T+2]=Math.min(255,O*H),x.data[R+T+3]=L}}return d.putImageData(x,0,0),h}cutA=null;cutB=null;renderCutout(e,t,n){if(!e.p.element())return null;const s=()=>document.createElement("canvas").getContext("2d",{willReadFrequently:!0});this.cutA??=s(),this.cutB??=s();const a=this.W,i=this.H,r=Math.min(a,i),l=(a-r)/2,c=(i-r)/2,u=(d,x)=>(d.canvas.width!==t&&(d.canvas.width=d.canvas.height=t),this.render({bg:x,dim:0,layers:[{...e}],beat:vt()*2,pulse:0,bgFx:!1}),d.clearRect(0,0,t,t),d.drawImage(this.canvas,l,c,r,r,0,0,t,t),d.getImageData(0,0,t,t)),f=u(this.cutA,{kind:"none"}),v=u(this.cutB,{kind:"white"}),m=n??document.createElement("canvas");(m.width!==t||m.height!==t)&&(m.width=m.height=t);const h=f;for(let d=0;d<h.data.length;d+=4){const x=f.data[d],g=f.data[d+1],b=f.data[d+2],R=(v.data[d]-x+v.data[d+1]-g+v.data[d+2]-b)/3,T=Math.max(0,Math.min(255,255-R)),E=T>0?255/T:0;h.data[d]=Math.min(255,x*E),h.data[d+1]=Math.min(255,g*E),h.data[d+2]=Math.min(255,b*E),h.data[d+3]=T}return m.getContext("2d").putImageData(h,0,0),m}render(e){const t=this.kit,n=vt(),s=this.lastT?n-this.lastT:.016;this.lastT=n,this.fpsAcc+=s,this.fpsN++,this.fpsAcc>.5&&(this.fps=this.fpsN/this.fpsAcc,this.fpsAcc=0,this.fpsN=0),this.frame++;const a=e.beat;e.bg.kind==="beam"&&this.renderSynth(n,e.pulse),this.drawBg(e.bg,this.t.a,n,a);let i=this.t.a;const r=(x,g)=>{const[,b]=this.pp("c0","c1");t.draw(this.p[x],b,{uSrc:i.tex,uTime:n,...g}),i=b};if(e.bgFx){const x=W.era;if(x.on[3]||x.on[4]){const T=ne.map((E,S)=>(S===3||S===4)&&x.on[S]?1:0);t.setArray(this.p.era,"uOn",1,T),t.setArray(this.p.era,"uAmt",1,x.amt),t.draw(this.p.era,this.t.era,{uCur:i.tex,uAtlas:i.tex,uHead:0,uFilled:1,uTime:n}),i=this.t.era}const g=W.moor;g.breakup.on&&r("breakup",{uBlock:g.breakup.block,uAmount:g.breakup.amount});const b=W.color;if(b.on){const T=[];for(let E=0;E<7;E++)T.push(...po(b.hues[E]+n*b.cycle,b.sat,1));t.setArray(this.p.color,"uPal",3,T),t.draw(this.p.color,this.t.col,{uSrc:i.tex,uIn0:i.tex,uIn1:i.tex,uIn2:i.tex,uIn3:i.tex,uMixOn:[0,0,0,0],uBands:ct(Math.max(2,Math.min(7,Math.round(b.bands)))),uGain:b.gain,uContrast:b.contrast,uSmooth:b.smooth?1:0,uNeg:b.neg?1:0,uMix:0}),i=this.t.col}const R=W.fb;if(R.on){const[T,E]=this.pp("h0","h1");t.draw(this.p.fb,E,{uCur:i.tex,uHist:T.tex,uMode:ct(R.mode),uSize:R.size,uRotA:R.rot,uHue:R.hue,uDecay:R.decay,uAmt:R.mix,uPulse:e.pulse,uTime:n}),i=E}g.reshoot.on&&(t.draw(this.p.reshoot,this.t.rs,{uSrc:i.tex,uTint:g.reshoot.tint,uZoom:g.reshoot.zoom,uCurve:g.reshoot.curve,uTime:n}),i=this.t.rs)}e.dim>0&&r("dim",{uAmt:e.dim}),this.centres.clear(),this.lastLayers=e.layers;for(const x of e.layers)i=this.drawLayer(x,i,n,a,e.pulse,!0);for(const[x,g]of this.rts)this.frame-g.used>120&&(this.freeRt(g),this.rts.delete(x));const l=W.scan,c=W.magnet.list.slice(0,2);if(l.on&&e.bgFx||c.length){const x=W.magnet,g=this.W/this.H,b=1+e.pulse*x.audio*2.5,R=[],T=[0,0,0,0];for(c.forEach((F,L)=>{let H=F.x,N=F.y;x.drift&&(H+=Math.sin(n*.31+L*2)*.12,N+=Math.cos(n*.23+L)*.12),R.push(H*g,N,F.s*b,F.r),T[L]=F.type});R.length<16;)R.push(0,0,0,1);const E=l.on&&e.bgFx,S=[];for(const F of l.osc)S.push(F.freq,F.rate,E?F.amp:0,F.wave);t.setArray(this.p.scan,"uMag",4,R),t.setArray(this.p.scan,"uOsc",4,S);const O=E?l:{hSize:1,vSize:1,hPos:0,vPos:0,rot:0};t.draw(this.p.scan,this.t.sc,{uSrc:i.tex,uGeo:[O.hSize,O.vSize,O.hPos,O.vPos],uRot:O.rot*Math.PI/180,uLines:E?l.lines:c.length?262:0,uOscTarget:l.osc.map(F=>F.target),uAudio:e.pulse,uMagType:T,uMagN:ct(c.length),uPurity:c.length?x.purity:0,uTime:n}),i=this.t.sc}const u=this.brush;if(u.active||this.fieldLive>0){u.active&&u.startHold&&(t.draw(this.p.copy,this.t.hold,{uSrc:i.tex}),u.startHold=!1);const x=.008+(1-W.tools.smear)*.05,[g,b]=this.pp("f0","f1");t.draw(this.p.field,b,{uPrev:g.tex,uBrush:[u.x,u.y,W.tools.size*(u.tool===2?.6:1),u.active?1:0],uVel:[u.vx,u.vy],uTool:ct(u.tool),uRelax:x}),u.vx*=.5,u.vy*=.5,this.fieldLive=u.active?400:this.fieldLive-1,t.draw(this.p.tools,this.t.tl,{uSrc:i.tex,uField:b.tex,uHold:this.t.hold.tex,uTime:n}),i=this.t.tl}const f=e.bg.kind==="player"?e.bg.p.pos(n):n,v=this.cg.render(n,f);v&&this.upload(this.cgTex,this.cg.canvas,!0);const[m,h]=this.pp("p0","p1");t.draw(this.p.cg,h,{uSrc:i.tex,uCg:this.cgTex,uOn:v?1:0});const d=W.ui.crt?W.vhs:Us;if(t.draw(this.p.analog,null,{uSrc:h.tex,uPrev:m.tex,uStandby:this.standbyTex,uTime:n,uBleed:d.bleed,uScan:d.scan,uTrack:d.track,uChroma:d.chroma,uRoll:0,uLines:W.ui.crt?d.lines:0,uInterlace:d.interlace,uNoise:d.noise,uSat:d.sat,uBox43:d.box43?1:0,uHead:d.head,uField:this.frame%2,uWarm:d.warm,uInvert:0,uTear:0,uSnow:0,uBars:0,uStandbyOn:0,uJitter:0,uFlipY:0,uClean:W.ui.crt?0:1},[this.W,this.H]),this.grabbers.length){const x=document.createElement("canvas"),g=200/Math.max(this.W,this.H);x.width=Math.round(this.W*g),x.height=Math.round(this.H*g),x.getContext("2d").drawImage(this.canvas,0,0,x.width,x.height);const b=x.toDataURL("image/jpeg",.75);this.grabbers.splice(0).forEach(R=>R(b))}}grab(e=500){return new Promise(t=>{this.grabbers.push(t),setTimeout(()=>t(""),e)})}}const Us={bleed:0,scan:0,track:0,chroma:0,lines:0,interlace:0,noise:0,sat:1,box43:!1,head:0,warm:0};function po(o,e,t){o=(o%1+1)%1;const n=s=>{const a=(s+o*6)%6;return t-t*e*Math.max(0,Math.min(a,4-a,1))};return[n(5),n(3),n(1)]}const Me=new WeakMap;function vo(o,e,t){if(Me.has(o))return Me.get(o);let n=e,s=t,a=-1,i=-1;for(let l=0;l<t;l++)for(let c=0;c<e;c++)o[l*e+c]>90&&(c<n&&(n=c),c>a&&(a=c),l<s&&(s=l),l>i&&(i=l));const r=a<0?null:[n/e,s/t,(a+1)/e,(i+1)/t];return Me.set(o,r),r}const go=[{name:"I–vi–IV–V",ko:"밝게 도는",deg:[0,5,3,4]},{name:"i–VI–III–VII",ko:"어둡게 도는",deg:[0,5,2,6]},{name:"I–IV",ko:"두 화음",deg:[0,3,0,3]},{name:"DRONE",ko:"한 화음",deg:[0,0,0,0]}],te=[{hp:30,lp:420,oct:36},{hp:150,lp:1700,oct:48},{hp:400,lp:4500,oct:60},{hp:1500,lp:16e3,oct:72}],Wo=()=>no[W.music.scale]??no[0];function Ns(){const o=Wo();return o.steps.length===7?o.steps:o.minor?[0,2,3,5,7,8,10]:[0,2,4,5,7,9,11]}function Go(){return Wo().steps.map(o=>(o+W.music.root)%12)}function _s(o){if(o<0)return 0;const e=Go();let t=0,n=99;for(let a=-6;a<=6;a++){const i=Math.abs(a);e.includes(((o+a)%12+12)%12)&&i<n&&(n=i,t=a)}const s=W.music.root;for(const a of[-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6])if(Math.abs(a)===n&&[s,(s+7)%12].includes(((o+a)%12+12)%12))return a;return t}function Vo(o){return Math.floor(ht.beatAt(o)/4)}function zo(o){const t=(go[W.music.prog]??go[0]).deg[(Vo(o)%4+4)%4],n=Ns();return[0,2,4,6].map(s=>(n[(t+s)%7]+W.music.root)%12)}function xo(o,e,t){const n=zo(o),s=n[(e%n.length+n.length)%n.length];let a=Math.floor(t/12)*12+s;return a<t-6&&(a+=12),a>t+6&&(a-=12),a}function Hs(o){const e=o/ht.beat;let t=4,n=99;for(const s of[1,2,4,8,16]){const a=Math.abs(Math.log2(Math.max(.01,e)/s));a<n&&(n=a,t=s)}return t}function qs(o){if(!o||o.every(a=>!a))return 0;const e=new Set(Go()),t=W.music.root;let n=0,s=-1;for(let a=-6;a<=6;a++){let i=0;for(let l=0;l<12;l++)e.has(((l+a)%12+12)%12)&&(i+=o[l]);((o.indexOf(Math.max(...o))+a)%12+12)%12===t&&(i+=.04),i-=Math.abs(a)*.004,i>s&&(s=i,n=a)}return n}function $s(o=4096){const e=new Float32Array(o),t=.79,n=.89;for(let s=0;s<o;s++){const a=s/(o-1)*2-1,i=Math.abs(a),r=i<=t?i:t+(n-t)*Math.tanh((i-t)/(n-t));e[s]=Math.sign(a)*r}return e}function Ws(o,e,t){const n=o.sampleRate,s=Math.floor(n*e),a=o.createBuffer(2,s,n);for(let i=0;i<2;i++){const r=a.getChannelData(i);for(let l=0;l<s;l++)r[l]=(Math.random()*2-1)*Math.pow(1-l/s,t)*(l<n*.004?l/(n*.004):1)}return a}function oe(o){const e=o.an;let t=0;return o.sound.auto&&e&&!e.silent&&(t=e.chroma?.some(n=>n>0)?qs(e.chroma):e.pc>=0?_s(e.pc):0),Math.max(-12,Math.min(12,t+o.sound.shift))}function Gs(o){return o.sound.mode==="orig"||o.sound.mode==="reson"?oe(o):0}function Vs(o){const e=o.an;return!!e&&e.conf>.6&&e.midi>0&&Math.max(...e.chroma??[0])>.35}function Ye(o){return Math.pow(2,Gs(o)/12)}function Xe(o){return Hs((o.loopOut-o.loopIn)/Ye(o))*ht.beat}function Be(o,e){const t=Xe(o);return ht.origin+Math.floor((e-ht.origin)/t)*t}const zs={breakup:{dark:.6,echo:.25},mosaic:{dark:.5,echo:.2},led:{dark:.4,echo:.2},teletext:{dark:.5,echo:.2},smear:{chorus:.8,hall:.2},rutt:{chorus:.6,hall:.15},kaleido:{chorus:.5,echo:.2},paikabe:{hall:.3,echo:.2},neon:{hall:.3}};class js{constructor(e,t,n){this.e=e,this.g=t;const s=e.ctx,a=(c=1)=>{const u=s.createGain();return u.gain.value=c,u};this.in=a(),this.out=a(0),this.hp=s.createBiquadFilter(),this.hp.type="highpass",this.lp=s.createBiquadFilter(),this.lp.type="lowpass";const i=a();this.resDry=a(1),this.in.connect(this.resDry).connect(i);const r=s.createBiquadFilter();r.type="lowpass",r.frequency.value=3500,r.Q.value=.5;for(let c=0;c<4;c++){const u=s.createBiquadFilter();u.type="bandpass",u.Q.value=18;const f=a(0);this.in.connect(u).connect(f).connect(r),this.res.push(u),u.mk=f}r.connect(i),i.connect(this.hp).connect(this.lp),this.tone=s.createBiquadFilter(),this.tone.type="lowpass",this.tone.frequency.value=18e3,this.tone.Q.value=.4,this.lp.connect(this.tone),this.chorusWet=a(0),this.chorusDepth=a(0);const l=s.createOscillator();l.frequency.value=.18+Math.random()*.08,l.connect(this.chorusDepth),l.start(),this.sources.add(l);for(const[c,u,f]of[[.016,-.7,1],[.023,.7,-1]]){const v=s.createDelay(.1);v.delayTime.value=c;const m=a(f);this.chorusDepth.connect(m).connect(v.delayTime);const h=s.createStereoPanner();h.pan.value=u,this.tone.connect(v).connect(h).connect(this.chorusWet)}this.tone.connect(this.out),this.chorusWet.connect(this.out),this.out.connect(e.masterIn),this.echoSend=a(0),this.out.connect(this.echoSend).connect(e.echoIn),this.hallSend=a(0),this.out.connect(this.hallSend).connect(e.hallIn),this.setRow(n),this.applyMode()}in;out;hp;lp;res=[];resDry;tone;chorusWet;chorusDepth;echoSend;hallSend;nextCycle=-1;nextHit=-1;nextGrain=0;lastBar=-9999;hits=0;row=1;alive=!0;sources=new Set;setRow(e){this.row=e;const t=te[Math.max(0,Math.min(3,e))],n=this.e.ctx.currentTime;this.hp.frequency.setTargetAtTime(t.hp,n,.05),this.lp.frequency.setTargetAtTime(t.lp,n,.05)}applyMode(){const t=this.e.ctx.currentTime,n=this.g.sound.mode==="reson";this.resDry.gain.setTargetAtTime(n?.03:1,t,.05);for(const a of this.res)a.mk.gain.setTargetAtTime(n?4.5:0,t,.05);const s=zs[this.g.look.id]??{};this.tone.frequency.setTargetAtTime(s.dark?9e3-s.dark*6500:18e3,t,.08),this.chorusWet.gain.setTargetAtTime((s.chorus??0)*.45,t,.08),this.chorusDepth.gain.setTargetAtTime((s.chorus??0)*.0025,t,.08),this.echoSend.gain.setTargetAtTime((s.echo??0)*.8,t,.05),this.hallSend.gain.setTargetAtTime((this.g.sound.mode==="pad"?.8:n?.45:.15)+(s.hall??0),t,.05),this.lastBar=-9999}level(e){const t=this.g,n={orig:1,reson:1.6,pulse:1.1,pad:.9,mute:0}[t.sound.mode],s=(t.an?.normGain??1)*t.sound.gain*n/Math.sqrt(Math.max(1,e));this.out.gain.setTargetAtTime(Math.min(4,s),this.e.ctx.currentTime,.08)}at(e){const t=this.e.ctx;return Math.max(t.currentTime,t.currentTime+(e-vt()))}play(e,t,n,s,a=.012){const i=this.g.src.audio;if(!i||n<=.01||t>=i.duration)return;const r=this.e.ctx,l=this.at(e),c=r.createBufferSource();c.buffer=i,c.playbackRate.value=s;const u=r.createGain();u.gain.setValueAtTime(0,l),u.gain.linearRampToValueAtTime(1,l+a),u.gain.setValueAtTime(1,l+Math.max(a,n-a*2)),u.gain.linearRampToValueAtTime(0,l+n),c.connect(u).connect(this.in),c.start(l,t,n*s+.02),this.sources.add(c),c.onended=()=>this.sources.delete(c)}ref(){const e=this.g.an;return e&&e.conf>.25&&e.midi?e.midi:te[this.row].oct+12}pitchRate(e,t){const n=this.g;let s;return Vs(n)?s=xo(e,t,this.ref()+oe(n))-this.ref():s=oe(n)+[0,12,0,-12][t%4],Math.max(.5,Math.min(2,Math.pow(2,s/12)))}schedule(e,t){const n=this.g;if(!this.alive||n.sound.mode==="mute"||!n.src.audio)return;const s=Ye(n),a=Xe(n),i=n.loopOut-n.loopIn,r=Vo(t);if(r!==this.lastBar&&n.sound.mode==="reson"){this.lastBar=r;const l=this.at(ht.timeOf(r*16)),c=te[this.row].oct+12;this.res.forEach((u,f)=>u.frequency.setTargetAtTime(440*Math.pow(2,(xo(ht.timeOf(r*16),f,c)-69)/12),l,.05))}if(n.sound.mode==="orig"||n.sound.mode==="reson"){if(this.nextCycle<0){const l=ht.next(e,4),c=Be(n,l),u=(l-c)*s;u<i-.05&&this.play(l,n.loopIn+u,Math.min(i/s,a)-(l-c),s),this.nextCycle=c+a}for(;this.nextCycle<t;)this.play(this.nextCycle,n.loopIn,Math.min(i/s,a),s),this.nextCycle+=a}else if(n.sound.mode==="pulse"){const l=Math.max(1,Math.round(a/ht.step)),c=n.an?.onsets??[],u=new Map;if(c.length)c.forEach(f=>u.set(Math.round(f/i*l)%l,f));else for(let f=0;f<l;f+=2)u.set(f,f/l*i);for(this.nextHit<0&&(this.nextHit=ht.next(e,1));this.nextHit<t;){const f=this.nextHit,v=Math.round((f-Be(n,f))/ht.step)%l,m=u.get(v);if(m!==void 0){const h=this.pitchRate(f,this.hits++);this.play(f,n.loopIn+Math.min(m,i-.05),Math.min(.24,ht.step*1.7),h,.01)}this.nextHit+=ht.step}}else if(n.sound.mode==="pad")for(this.nextGrain<e&&(this.nextGrain=e);this.nextGrain<t;){const c=this.nextGrain,u=this.pitchRate(c,Math.floor(Math.random()*4)),f=.18+Math.random()*.14;this.play(c,n.loopIn+Math.random()*Math.max(.01,i-f*u),f,u,f*.45),this.nextGrain+=1/14*(.6+Math.random()*.8)}}reset(){this.nextCycle=-1,this.nextHit=-1,this.lastBar=-9999,this.hush(),this.applyMode()}hush(){const t=this.e.ctx.currentTime;for(const n of this.sources)if(!(n instanceof OscillatorNode))try{n.stop(t+.03)}catch{}}dispose(){this.alive=!1;const e=this.e.ctx.currentTime;this.out.gain.setTargetAtTime(0,e,.03),setTimeout(()=>{for(const t of this.sources)try{t.stop()}catch{}this.out.disconnect()},300)}}class Ks{ctx=null;masterIn;echoIn;hallIn;vol;voices=new Map;want=[];sig="";constructor(){Lt.whenReady(e=>this.init(e))}init(e){this.ctx=e;const t=(m=1)=>{const h=e.createGain();return h.gain.value=m,h};this.masterIn=t(),this.echoIn=t();const n=e.createDelay(2),s=t(.4),a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=2600,this.echoIn.connect(n).connect(a).connect(s).connect(n),a.connect(this.masterIn);const i=()=>n.delayTime.setTargetAtTime(ht.step*3,e.currentTime,.2);i(),setInterval(i,1e3),this.hallIn=t();const r=e.createConvolver();r.buffer=Ws(e,3.8,2.4),this.hallIn.connect(r).connect(t(.6)).connect(this.masterIn);const l=e.createBiquadFilter();l.type="highpass",l.frequency.value=40;const c=e.createDynamicsCompressor();c.threshold.value=-22,c.knee.value=18,c.ratio.value=2,c.attack.value=.01,c.release.value=.25;const u=e.createDynamicsCompressor();u.threshold.value=-4,u.knee.value=0,u.ratio.value=20,u.attack.value=.002,u.release.value=.1,this.vol=t(W.music.vol);const f=e.createWaveShaper();f.curve=$s(),this.masterIn.connect(l).connect(c).connect(t(.75)).connect(u).connect(this.vol).connect(f),f.connect(e.destination),f.connect(Lt.recDest),f.connect(Lt.xy),f.connect(Lt.analyser);const v=()=>{this.update(),window.setTimeout(v,25)};v()}setVoices(e){this.want=e}refresh(e){for(const t of this.voices.values())(!e||t.g===e)&&t.reset()}setVolume(e){this.vol&&this.ctx&&this.vol.gain.setTargetAtTime(e,this.ctx.currentTime,.05)}update(){if(!this.ctx)return;const e=new Set;for(const i of this.want){e.add(i.g.id);let r=this.voices.get(i.g.id);r?r.row!==i.row&&r.setRow(i.row):(r=new js(this,i.g,i.row),this.voices.set(i.g.id,r))}for(const[i,r]of this.voices)e.has(i)||(r.dispose(),this.voices.delete(i));const t=[W.music.root,W.music.scale,W.music.bpm,W.music.prog].join(",");t!==this.sig&&(this.sig=t,this.refresh());const n=this.voices.size,s=vt(),a=s+.12;for(const i of this.voices.values())i.level(n),i.schedule(s,a)}chordName(e=vt()){return zo(e)[0]}}const fe=new Ks,jo=[{name:"DANCER",ko:"무대",bpm:120,dur:8},{name:"METRONOME",ko:"메트로놈",bpm:90,dur:8},{name:"RUNNER",ko:"달리는 개",bpm:120,dur:8}];function bo(o){const e=o/4*Math.PI*2;return[.5+.33*Math.sin(e),.56+.17*Math.sin(2*e)]}const Et=360,bt=640;function yo(o,e,t,n,s,a){o.beginPath(),o.moveTo(e+a,t),o.arcTo(e+n,t,e+n,t+s,a),o.arcTo(e+n,t+s,e,t+s,a),o.arcTo(e,t+s,e,t,a),o.arcTo(e,t,e+n,t,a),o.closePath()}function Ys(o,e){const t=Et,n=bt,s=e*120/60,a=o.createLinearGradient(0,0,0,n);a.addColorStop(0,"#2a1a10"),a.addColorStop(1,"#5a3418"),o.fillStyle=a,o.fillRect(0,0,t,n);for(let m=0;m<14;m++)o.fillStyle=m%2?"rgba(0,0,0,0.18)":"rgba(255,200,140,0.06)",o.fillRect(m*t/14+Math.sin(e*.7+m)*3,0,t/28,n*.78);o.fillStyle="#1d3b46",o.fillRect(0,n*.78,t,n*.22),o.fillStyle="#2f5e6c";for(let m=0;m<6;m++)o.fillRect(0,n*.78+m*22+4,t,3);const i=t/2+Math.sin(e/8*Math.PI*2)*t*.22,r=o.createRadialGradient(i,n*.5,10,i,n*.5,t*.5);r.addColorStop(0,"rgba(255,240,200,0.35)"),r.addColorStop(1,"rgba(255,240,200,0)"),o.fillStyle=r,o.fillRect(0,0,t,n);const l=Math.abs(Math.sin(s*Math.PI))*10,c=n*.33-l,u=Math.sin(s*Math.PI)*.18;o.save(),o.translate(i,c),o.rotate(u*.3),o.strokeStyle="#141414",o.lineCap="round",o.lineWidth=26;const f=Math.sin(s*Math.PI)*26;o.beginPath(),o.moveTo(-14,150),o.lineTo(-22-f*.4,300+l),o.moveTo(14,150),o.lineTo(22-f*.4,300+l),o.stroke(),o.fillStyle="#d0202c",o.beginPath(),o.moveTo(-34,20),o.lineTo(34,20),o.lineTo(58+u*30,170),o.lineTo(-58+u*30,170),o.closePath(),o.fill();const v=(m,h)=>{const d=-.5+Math.sin(s*Math.PI+h)*.7,x=m*(40+Math.cos(d)*60),g=40+Math.sin(d)*60;o.strokeStyle="#e8b896",o.lineWidth=16,o.beginPath(),o.moveTo(m*30,32),o.lineTo(x,g),o.stroke(),o.fillStyle="#202020",yo(o,x-22,g-18,44,36,5),o.fill(),o.fillStyle=`hsl(${(e*90+m*60)%360} 80% 60%)`,yo(o,x-16,g-12,32,24,4),o.fill()};v(-1,0),v(1,Math.PI),o.fillStyle="#e8b896",o.beginPath(),o.arc(0,-10,30,0,Math.PI*2),o.fill(),o.fillStyle="#1a0e08",o.beginPath(),o.arc(0,-18,32,Math.PI*.95,Math.PI*2.05),o.fill(),o.fillRect(-32,-18,10,50),o.fillRect(22,-18,10,50),o.restore(),o.save(),o.translate(t*.84,n*.62),o.rotate(-.12),o.fillStyle="#8a4a1c",o.beginPath(),o.ellipse(0,40,34,46,0,0,Math.PI*2),o.ellipse(0,-20,26,32,0,0,Math.PI*2),o.fill(),o.fillStyle="#2a160a",o.fillRect(-3,-110,6,120),o.restore()}function Xs(o,e){const t=Et,n=bt,s=e*90/60,a=Math.floor(s/4)%3;if(a===0)["#c0c0c0","#c0c000","#00c0c0","#00c000","#c000c0","#c00000","#0000c0"].forEach((f,v)=>{o.fillStyle=f,o.fillRect(v*t/7,0,t/7+1,n)});else if(a===1){o.fillStyle="#f2f0e8",o.fillRect(0,0,t,n);for(let u=0;u<12;u++)o.fillStyle="#111",o.fillRect(0,u*n/12,t,2),[1,3,6,8,10].includes(u%12)&&o.fillRect(0,u*n/12+6,t*.6,n/12-10)}else for(let u=0;u<24;u++)o.fillStyle=`hsl(${u*15} 90% 55%)`,o.beginPath(),o.moveTo(t/2,n/2),o.arc(t/2,n/2,n,u/24*Math.PI*2+e*.2,(u+1)/24*Math.PI*2+e*.2),o.fill();const i=t/2,r=n*.8,l=n*.2;o.fillStyle="#5a2c10",o.beginPath(),o.moveTo(i-90,r),o.lineTo(i+90,r),o.lineTo(i+34,l),o.lineTo(i-34,l),o.closePath(),o.fill(),o.fillStyle="#e8d8a8",o.fillRect(i-18,l+30,36,r-l-90),o.fillStyle="#3a1a08";for(let u=0;u<14;u++)o.fillRect(i-18,l+40+u*24,u%2?10:18,2);const c=Math.sin(s*Math.PI)*.55;o.save(),o.translate(i,r-70),o.rotate(c),o.fillStyle="#c8c8c8",o.fillRect(-3,-324,6,r-l-60),o.fillStyle="#d8a020",o.beginPath(),o.moveTo(-22,-260),o.lineTo(22,-260),o.lineTo(30,-210),o.lineTo(-30,-210),o.closePath(),o.fill(),o.restore(),o.fillStyle="#2a1206",o.fillRect(i-100,r,200,18)}function Zs(o,e){const t=Et,n=bt;o.fillStyle="#9a8670",o.fillRect(0,0,t,n);let s=7;const a=()=>(s=s*16807%2147483647)/2147483647;for(let h=0;h<260;h++){const d=a()*t,x=a()*n,g=3+a()*18;o.fillStyle=`hsl(${30+a()*10} ${18+a()*12}% ${42+a()*24}%)`,o.beginPath(),o.ellipse(d,x,g,g*(.5+a()*.5),a()*3,0,Math.PI*2),o.fill()}for(let h=0;h<40;h++)o.fillStyle=`hsl(35 10% ${70+a()*15}%)`,o.beginPath(),o.arc(a()*t,a()*n,2+a()*4,0,Math.PI*2),o.fill();o.fillStyle="#5a4630",o.fillRect(0,0,t*.4,n*.06);const[i,r]=bo(e),[l,c]=bo(e+.05),u=Math.atan2((c-r)*n,(l-i)*t),f=i*t,v=r*n,m=Math.sin(e*22);o.fillStyle="rgba(40,30,20,0.35)",o.beginPath(),o.ellipse(f+10,v+16,34,12,u,0,Math.PI*2),o.fill(),o.save(),o.translate(f,v),o.rotate(u),o.strokeStyle="#cfc6b6",o.lineWidth=6,o.lineCap="round";for(const[h,d]of[[-16,0],[-8,Math.PI],[14,Math.PI],[20,0]])o.beginPath(),o.moveTo(h,4),o.lineTo(h+Math.sin(e*22+d)*8,20),o.stroke();o.fillStyle="#ddd5c6",o.beginPath(),o.ellipse(0,0,28,13+m,.12,0,Math.PI*2),o.fill(),o.beginPath(),o.ellipse(30,-8,13,11,0,0,Math.PI*2),o.fill(),o.fillStyle="#bfb5a2",o.beginPath(),o.ellipse(26,-18,5,8,-.4,0,Math.PI*2),o.ellipse(36,-17,5,8,.4,0,Math.PI*2),o.fill(),o.fillStyle="#222",o.beginPath(),o.arc(41,-7,2.5,0,Math.PI*2),o.fill(),o.strokeStyle="#ddd5c6",o.lineWidth=7,o.beginPath(),o.moveTo(-26,-4),o.quadraticCurveTo(-40,-16-m*5,-46,-6),o.stroke(),o.strokeStyle="#c03040",o.lineWidth=4,o.beginPath(),o.moveTo(14,-12),o.lineTo(10,12),o.stroke(),o.restore()}function Ze(o,e,t){e===2?Zs(o,t):e===0?Ys(o,t):Xs(o,t);const n=Math.floor(t%1*30);o.font="bold 13px monospace",o.fillStyle="#000",o.fillRect(8,bt-26,92,18),o.fillStyle="#fff",o.fillText(`T${e+1} 00:0${Math.floor(t)}:${String(n).padStart(2,"0")}`,12,bt-12)}const re=o=>440*Math.pow(2,(o-69)/12);async function Js(o){const t=jo[o],n=new OfflineAudioContext(2,Math.ceil(t.dur*32e3),32e3),s=n.createGain();s.gain.value=.7;const a=n.createConvolver(),i=n.createBuffer(2,32e3*1.6,32e3);for(let v=0;v<2;v++){const m=i.getChannelData(v);for(let h=0;h<m.length;h++)m[h]=(Math.random()*2-1)*Math.pow(1-h/m.length,3)*.4}a.buffer=i;const r=n.createGain();r.gain.value=.25,s.connect(n.destination),s.connect(a).connect(r).connect(n.destination);const l=60/t.bpm,c=(v,m,h=.5,d=.3,x="triangle")=>{const g=n.createOscillator();g.type=x,g.frequency.value=re(m);const b=n.createOscillator();b.frequency.value=re(m)*2.001;const R=n.createGain();R.gain.setValueAtTime(1e-4,v),R.gain.exponentialRampToValueAtTime(d,v+.005),R.gain.exponentialRampToValueAtTime(1e-4,v+h);const T=n.createGain();T.gain.value=.25,g.connect(R),b.connect(T).connect(R),R.connect(s),g.start(v),b.start(v),g.stop(v+h+.05),b.stop(v+h+.05)},u=(v,m,h,d,x="highpass")=>{const g=n.createBuffer(1,Math.ceil(m*32e3),32e3),b=g.getChannelData(0);for(let S=0;S<b.length;S++)b[S]=(Math.random()*2-1)*(1-S/b.length)**2;const R=n.createBufferSource();R.buffer=g;const T=n.createBiquadFilter();T.type=x,T.frequency.value=h;const E=n.createGain();E.gain.value=d,R.connect(T).connect(E).connect(s),R.start(v)},f=(v,m=.7)=>{const h=n.createOscillator();h.frequency.setValueAtTime(120,v),h.frequency.exponentialRampToValueAtTime(45,v+.12);const d=n.createGain();d.gain.setValueAtTime(m,v),d.gain.exponentialRampToValueAtTime(.001,v+.3),h.connect(d).connect(s),h.start(v),h.stop(v+.32)};if(o===2){const v=[64,67,71,67,64,62,59,62,64,67,71,74,71,67,64,59];for(let m=0;m<32;m++){const h=m*l*.5;m%4===0&&f(h,.45),u(h,.04,6e3,m%2?.06:.1),m%2===0&&c(h,v[m/2%16],l*.45,.16),m%8===0&&c(h,40+[0,3,5,3][m/8%4],l*1.8,.2,"sine")}}else if(o===0){const v=[69,72,74,76,79,76,74,72,69,67,69,72,74,72,69,64],m=[[57,60,64],[53,57,60],[55,59,62],[52,55,59]];for(let h=0;h<16;h++){const d=h*l;if(h%2===0&&f(d,.55),u(d+l/2,.05,7e3,.12),h%4===2&&u(d,.16,1800,.18,"bandpass"),c(d,v[h],l*.9,.18),h%4===0)for(const x of m[h/4|0])c(d,x,l*3.8,.06,"sine");c(d,[45,41,43,40][h/4|0]+(h%2?12:0),l*.45,.22,"sine")}}else{for(let m=0;m<12;m++){const h=m*l;if(u(h,.03,m%4===0?2400:3400,.4,"bandpass"),m%4===0)for(const d of[[60,64,67,71],[57,60,64,67],[53,57,60,64]][m/4|0])c(h,d,l*3.6,.07,"sine")}[48,55,52,53,50,48].forEach((m,h)=>{const d=h*l*2,x=n.createOscillator();x.type="sawtooth",x.frequency.value=re(m);const g=n.createOscillator();g.frequency.value=5.2;const b=n.createGain();b.gain.value=re(m)*.006,g.connect(b).connect(x.frequency);const R=n.createBiquadFilter();R.type="lowpass",R.frequency.value=900;const T=n.createGain();T.gain.setValueAtTime(1e-4,d),T.gain.exponentialRampToValueAtTime(.13,d+.25),T.gain.setValueAtTime(.13,d+l*1.7),T.gain.exponentialRampToValueAtTime(1e-4,d+l*2.1),x.connect(R).connect(T).connect(s),x.start(d),g.start(d),x.stop(d+l*2.2),g.stop(d+l*2.2)})}return n.startRendering()}const Qs={mp4:"video/mp4",m4v:"video/mp4",mov:"video/quicktime",webm:"video/webm",mkv:"video/x-matroska","3gp":"video/3gpp",jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",webp:"image/webp",heic:"image/heic",gif:"image/gif"};function Mo(o,e){return new Promise(t=>{if(o.readyState>=2)return t(!0);const n=a=>{clearTimeout(s),t(a)},s=setTimeout(()=>n(o.readyState>=2),e);o.addEventListener("loadeddata",()=>n(!0),{once:!0}),o.addEventListener("error",()=>n(!1),{once:!0})})}function ta(o){try{const e=document.createElement("canvas");e.width=e.height=16;const t=e.getContext("2d",{willReadFrequently:!0});t.drawImage(o,0,0,16,16);const n=t.getImageData(0,0,16,16).data;let s=0;for(let a=0;a<n.length;a+=4)s+=n[a]+n[a+1]+n[a+2];return Math.round(s/(n.length/4)/3)}catch(e){return`unreadable ${e.message}`}}let ea=0;const oa=()=>`${Date.now().toString(36)}${(ea++).toString(36)}`;function Ko(o,e){return{id:oa(),name:e,kind:o,url:"",mime:"",duration:8,w:16,h:9,audio:null,audioGain:1,thumb:"",bpm:0,loopIn:0,loopOut:8,speed:1,gain:1}}function we(o){const e=jo[o],t=Ko("test",e.name);t.test=o,t.duration=t.loopOut=e.dur,t.w=360,t.h=640,t.bpm=e.bpm;const n=document.createElement("canvas");return n.width=Et,n.height=bt,Ze(n.getContext("2d"),o,1.2),t.thumb=De(n,Et,bt),Js(o).then(s=>{t.audio=s,t.audioGain=Yo(s)}),t}function Yo(o){let e=0,t=0;for(let s=0;s<o.numberOfChannels;s++){const a=o.getChannelData(s);for(let i=0;i<a.length;i+=4)e+=a[i]*a[i],t++}const n=Math.sqrt(e/Math.max(1,t));return n<1e-4?1:Math.min(6,.1/n)}let wo=null;async function na(o){if(o.size>25e7)return null;try{return wo??=new OfflineAudioContext(2,1,44100),await wo.decodeAudioData(await o.arrayBuffer())}catch{return null}}function De(o,e,t){const n=document.createElement("canvas"),s=120/Math.max(e,t);return n.width=Math.max(8,Math.round(e*s)),n.height=Math.max(8,Math.round(t*s)),n.getContext("2d").drawImage(o,0,0,n.width,n.height),n.toDataURL("image/jpeg",.7)}function Xo(o,e,t=2500){return new Promise(n=>{if(Math.abs(o.currentTime-e)<.002&&o.readyState>=2)return n();const s=()=>{o.removeEventListener("seeked",s),clearTimeout(a),n()},a=setTimeout(s,t);o.addEventListener("seeked",s),o.currentTime=e})}function Je(o){const e=document.createElement("video");return e.src=o,e.muted=!0,e.playsInline=!0,e.setAttribute("playsinline",""),e.preload="auto",e.crossOrigin="anonymous",e}async function Ue(o,e){const t=(e.split(".").pop()||"").toLowerCase(),n=o;if(Rt("file",`picked ${e}`,{size:o.size,type:o.type||"(none)",ext:t,modified:n.lastModified?new Date(n.lastModified).toISOString():void 0,head:await un(o)}),!o.size)throw ge("file",`${e} is empty (0 bytes)`),new Error("empty");let s;try{const u=performance.now(),f=await o.arrayBuffer();s=new Blob([f],{type:o.type||Qs[t]||""}),Rt("file",`copied ${f.byteLength} bytes in ${Math.round(performance.now()-u)}ms, type=${s.type||"(none)"}`)}catch(u){throw ge("file",`could not read ${e}: ${u.name} ${u.message}`),new Error("unreadable")}const a=s.type.startsWith("image/"),i=Ko(a?"image":"video",e.replace(/\.[^.]+$/,"").slice(0,12).toUpperCase()||"CLIP");if(i.blob=s,i.mime=s.type,i.url=URL.createObjectURL(s),a){const u=new Image;return u.src=i.url,await u.decode().catch(()=>{}),i.w=u.naturalWidth||16,i.h=u.naturalHeight||9,i.thumb=De(u,i.w,i.h),i}let r=Je(i.url);so(r,i.name);let l=await Mo(r,6e3);if(l||(Ve("video",`${i.name}: no first frame, retrying`,{rs:r.readyState,code:r.error?.code}),r.removeAttribute("src"),r.load(),r=document.createElement("video"),r.muted=!0,r.playsInline=!0,r.setAttribute("playsinline",""),r.preload="auto",so(r,i.name+"#2"),r.src=i.url,r.load(),l=await Mo(r,6e3)),!l)throw ge("video",`${i.name}: cannot be decoded here`,{code:r.error?.code,msg:r.error?.message,rs:r.readyState,w:r.videoWidth,h:r.videoHeight}),URL.revokeObjectURL(i.url),new Error(r.error?.code===4?"format":"decode");i.w=r.videoWidth||16,i.h=r.videoHeight||9,isFinite(r.duration)||(r.currentTime=1e7,await new Promise(u=>{r.addEventListener("durationchange",u,{once:!0}),setTimeout(u,3e3)})),i.duration=isFinite(r.duration)&&r.duration>0?r.duration:8,i.loopOut=i.duration,await Xo(r,Math.min(.2,i.duration/2)),r.readyState>=2&&(i.thumb=De(r,i.w,i.h)),Rt("video",`${i.name} ready ${i.w}x${i.h} ${i.duration.toFixed(2)}s, frame luma=${ta(r)}`),r.removeAttribute("src"),r.load();const c=await na(s);return Rt("audio",`${i.name} sound ${c?`${c.duration.toFixed(2)}s ${c.numberOfChannels}ch`:"none / not decodable"}`),c&&(i.audio=c,i.audioGain=Yo(c)),i}function sa(){return['video/webm;codecs="vp8,opus"',"video/webm",'video/mp4;codecs="avc1.42E01E,mp4a.40.2"',"video/mp4"].find(e=>typeof MediaRecorder<"u"&&MediaRecorder.isTypeSupported(e))||""}class aa{rec=null;mic=null;chunks=[];started=0;get active(){return!!this.rec}async start(e,t){if(this.rec)return!0;e.want(t);for(let a=0;a<60&&!(e.ready&&e.facing===t);a++)await new Promise(i=>setTimeout(i,100));if(!e.stream)return!1;try{this.mic=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!0}})}catch{this.mic=null}const n=[...e.stream.getVideoTracks(),...this.mic?.getAudioTracks()??[]],s=sa();return this.chunks=[],this.rec=new MediaRecorder(new MediaStream(n),{mimeType:s||void 0,videoBitsPerSecond:6e6}),this.rec.ondataavailable=a=>a.data.size&&this.chunks.push(a.data),this.rec.start(250),this.started=performance.now(),!0}stop(){const e=this.rec;return e?new Promise(t=>{e.onstop=()=>{this.mic?.getTracks().forEach(a=>a.stop()),this.mic=null,this.rec=null;const n=(e.mimeType||"video/webm").split(";")[0],s=new Blob(this.chunks,{type:n});t(s.size?s:null)},e.stop()}):Promise.resolve(null)}}const ia=[["orig","ORIGINAL","원본+자동 조율"],["reson","RESONATE","공명(화음)"],["pulse","PULSE","리듬"],["pad","PAD","패드"],["mute","MUTE","소리 없음"]],ue=16,ko="#ffe02a",rt=[],xt=[];let ra=0;const Zo=o=>`${o}${Date.now().toString(36)}${(ra++).toString(36)}`;function la(o,e,t,n){const s=new Set(rt.map(i=>i.color)),a=e==="tap"||e==="person";return{id:Zo("ing"),name:`${e.toUpperCase()} ${rt.length+1}`,color:a?ko:ce.find(i=>!s.has(i))??ce[rt.length%ce.length],src:o,kind:e,track:null,key:{lo:.55,hi:.7,color:"#00d040",invert:!1},shape:{type:0,size:.32,ring:.25,spin:0},maskStamp:0,seed:{x:.5,y:.5,t},fixes:[],loopIn:t,loopOut:n,thumbs:[],look:{id:"none",a:.5,b:.5,colors:{}},lineColor:a?ko:"auto",line:e==="shape"||a?2:1,lineSize:1,linePal:0,sound:{mode:"reson",auto:!0,autoMode:!0,shift:0,gain:1},an:null,cell:-1,cellManual:!1}}function To(o){const e=o.kind.toUpperCase(),t=rt.filter(s=>s.name.startsWith(e+" ")).map(s=>parseInt(s.name.slice(e.length+1))||0),n=new Set(rt.map(s=>s.color));return{...o,id:Zo("ing"),name:`${e} ${Math.max(rt.length,...t)+1}`,color:n.has(o.color)?ce.find(s=>!n.has(s))??o.color:o.color,seed:{...o.seed},region:o.region?o.region.map(([s,a])=>[s,a]):o.region,fixes:(o.fixes??[]).map(s=>({...s})),key:{...o.key},shape:{...o.shape},look:{...o.look,colors:{...o.look.colors??{}}},sound:{...o.sound},thumbs:[...o.thumbs],an:o.an?{...o.an,chroma:[...o.an.chroma],onsets:[...o.an.onsets]}:null,cell:-1,cellManual:!1,saved:!1,dead:void 0}}const ca="prepared-tv-board";function ua(){return new Promise((o,e)=>{const t=indexedDB.open(ca,1);t.onupgradeneeded=()=>{t.result.createObjectStore("sources",{keyPath:"id"}),t.result.createObjectStore("ings",{keyPath:"id"})},t.onsuccess=()=>o(t.result),t.onerror=()=>e(t.error)})}async function zt(o,e,t){const n=await ua();return new Promise((s,a)=>{const i=t(n.transaction(o,e).objectStore(o));i.onsuccess=()=>s(i.result),i.onerror=()=>a(i.error)})}async function ke(o){if(o.blob)try{await zt("sources","readwrite",e=>e.put({id:o.id,name:o.name,blob:o.blob}))}catch(e){console.warn("source not saved",e)}}async function fa(o){const{src:e,track:t,...n}=o,s={...n,an:o.an?{...o.an}:null,srcId:e.id,track:t?{fps:t.fps,start:t.start,frames:t.frames,cx:t.cx,cy:t.cy,w:t.w,h:t.h,done:t.done}:null};try{await zt("ings","readwrite",a=>a.put(s))}catch(a){console.warn("ingredient not saved",a)}}async function ha(o){try{await zt("ings","readwrite",e=>e.delete(o.id))}catch{}}function da(){const o=we(0);o.id="test0";const e=we(1);e.id="test1";const t=we(2);t.id="test2",xt.push(o,e,t)}async function ma(o){let e=[],t=[];try{e=await zt("sources","readonly",n=>n.getAll()),t=await zt("ings","readonly",n=>n.getAll())}catch{return}for(const n of e)try{const s=await Ue(n.blob,n.name);s.id=n.id,s.name=n.name,xt.push(s),o()}catch(s){console.warn("source restore failed, removed",n.name,s.message),zt("sources","readwrite",a=>a.delete(n.id)).catch(()=>{})}for(const n of t.sort((s,a)=>s.id.localeCompare(a.id))){const s=xt.find(c=>c.id===n.srcId);if(!s||rt.length>=ue)continue;const{srcId:a,track:i,...r}=n;rt.push({...r,src:s,saved:!0,track:i?{...i,running:!1,cancel:!1}:null});const l=rt[rt.length-1];l.look.colors??={},l.lineColor??="auto",o()}}const At=16e3;function pa(o,e,t){const n=o.sampleRate,s=Math.max(0,Math.floor(e*n)),a=Math.min(o.length,Math.floor(t*n)),i=n/At,r=Math.max(0,Math.floor((a-s)/i)),l=new Float32Array(r),c=Array.from({length:o.numberOfChannels},(u,f)=>o.getChannelData(f));for(let u=0;u<r;u++){const f=s+Math.floor(u*i);let v=0;for(const m of c)for(let h=0;h<Math.max(1,Math.floor(i));h++)v+=m[Math.min(m.length-1,f+h)];l[u]=v/(c.length*Math.max(1,Math.floor(i)))}return l}function So(o){const e=o.length,t=new Float32Array(e);for(let s=1,a=0;s<e;s++){let i=e>>1;for(;a&i;i>>=1)a^=i;a^=i,s<a&&([o[s],o[a]]=[o[a],o[s]])}for(let s=2;s<=e;s<<=1){const a=-2*Math.PI/s;for(let i=0;i<e;i+=s)for(let r=0;r<s/2;r++){const l=Math.cos(a*r),c=Math.sin(a*r),u=o[i+r],f=t[i+r],v=o[i+r+s/2]*l-t[i+r+s/2]*c,m=o[i+r+s/2]*c+t[i+r+s/2]*l;o[i+r]=u+v,t[i+r]=f+m,o[i+r+s/2]=u-v,t[i+r+s/2]=f-m}}const n=new Float32Array(e/2);for(let s=0;s<e/2;s++)n[s]=Math.hypot(o[s],t[s]);return n}function va(o,e,t){const n=Math.floor(At/1e3),s=Math.floor(At/55),a=new Float32Array(s+1);for(let h=1;h<=s;h++){let d=0;for(let x=0;x<t;x++){const g=o[e+x]-o[e+x+h];d+=g*g}a[h]=d}let i=0,r=-1,l=1;for(let h=1;h<=s;h++){i+=a[h];const d=i>0?a[h]*h/i:1;a[h]=d}for(let h=n;h<s;h++){if(a[h]<.18){for(;h+1<s&&a[h+1]<a[h];)h++;r=h,l=a[h];break}a[h]<l&&(l=a[h],r=h)}if(r<0)return[0,1];const c=a[r-1]??a[r],u=a[r],f=a[r+1]??a[r],v=c-2*u+f,m=v?r+(c-f)/(2*v):r;return[At/m,l]}function Ao(o){return o&&o.silent?"mute":"reson"}function ga(o,e,t){const n={f0:0,midi:0,pc:-1,conf:0,centroid:1e3,onsetRate:0,onsets:[],rms:0,normGain:1,register:60,rhythm:0,chroma:new Array(12).fill(0),silent:!0};if(!o)return n;const s=pa(o,e,t);if(s.length<2048)return n;let a=0;for(let w=0;w<s.length;w++)a+=s[w]*s[w];const i=Math.sqrt(a/s.length);if(i<.002)return{...n,rms:i};const r=1024,l=512,c=[],u=new Float32Array(12);let f=0,v=0;const m=Math.floor(At/55),h=new Float32Array(r/2);let d=0;for(let w=0;w+r+m<s.length;w+=l){let k=0;for(let V=0;V<r;V++)k+=s[w+V]*s[w+V];if(k=Math.sqrt(k/r),k<i*.35)continue;f++;const[P,U]=va(s,w,r);if(P>0&&U<.25){const V=69+12*Math.log2(P/440);c.push(V),u[(Math.round(V)%12+12)%12]+=1-U,v+=U}if(d++%2===0){const V=new Float32Array(r);for(let I=0;I<r;I++)V[I]=s[w+I]*(.5-.5*Math.cos(2*Math.PI*I/(r-1)));const st=So(V);for(let I=0;I<st.length;I++)h[I]+=st[I]}}const x=new Array(12).fill(0),g=4096,b=[];for(let w=0;w<g/2;w++){const k=w*At/g;b.push(k<100||k>2e3?-1:(Math.round(69+12*Math.log2(k/440))%12+12)%12)}for(let w=0;w+g<=s.length;w+=g/2){const k=new Float32Array(g);for(let U=0;U<g;U++)k[U]=s[w+U]*(.5-.5*Math.cos(2*Math.PI*U/(g-1)));const P=So(k);for(let U=0;U<P.length;U++)b[U]>=0&&(x[b[U]]+=P[U]*P[U])}const R=x.reduce((w,k)=>w+k,0)||1;for(let w=0;w<12;w++)x[w]/=R;let T=0,E=0;for(let w=1;w<h.length;w++)T+=h[w]*(w*At/r),E+=h[w];const S=E?T/E:1e3;c.sort((w,k)=>w-k);const O=f?c.length/f:0,F=c.length?1-v/c.length/.25:0,L=Math.max(0,Math.min(1,O*(.5+.5*F))),H=c.length?c[Math.floor(c.length/2)]:0;let N=-1,J=0;u.forEach((w,k)=>w>J&&(J=w,N=k));const q=Math.round(At*.01),ot=[];for(let w=0;w+q<=s.length;w+=q){let k=0;for(let P=0;P<q;P++)k+=Math.abs(s[w+P]);ot.push(k/q)}const $=ot.map((w,k)=>Math.max(0,w-(ot[k-1]??w))),z=$.reduce((w,k)=>w+k,0)/Math.max(1,$.length),j=Math.sqrt($.reduce((w,k)=>w+(k-z)**2,0)/Math.max(1,$.length)),tt=z+j*1.2,et=[];for(let w=1;w<$.length-1;w++)$[w]>tt&&$[w]>=$[w-1]&&$[w]>=$[w+1]&&(!et.length||w*.01-et[et.length-1]>.08)&&et.push(w*.01);const G=s.length/At,nt=et.length/G,dt=69+12*Math.log2(S/440),y=L>.4&&H?H*.7+dt*.3:dt;return{f0:H?440*Math.pow(2,(H-69)/12):0,midi:H,pc:L>.25?N:-1,conf:L,centroid:S,onsetRate:nt,onsets:et,rms:i,normGain:Math.min(6,.1/i),register:y,rhythm:nt,chroma:x,silent:!1}}function xa(o,e,t,n,s){const a=t*n;if(e.length<a*4)return{data:o,cut:0};const i=new Uint8Array(a);let r=0;for(let y=0;y<a;y++)o[y]>127&&(i[y]=1,r++);if(!r)return{data:o,cut:0};const l=new Float32Array(a);for(let y=0;y<a;y++)l[y]=(e[y*4]+e[y*4+1]+e[y*4+2])/3;const c=new Float32Array(a);for(let y=1;y<n-1;y++)for(let w=1;w<t-1;w++){let k=0,P=0;for(let V=-1;V<=1;V++)for(let st=-1;st<=1;st++){const I=l[(y+V)*t+w+st];k+=I,P+=I*I}const U=k/9;c[y*t+w]=Math.sqrt(Math.max(0,P/9-U*U))/Math.max(8,U)}const u=[],f=new Uint8Array(a);for(let y=0;y<n;y++)for(let w=0;w<t;w++){const k=y*t+w;if(i[k])for(let P=-6;P<=6;P+=2)for(let U=-6;U<=6;U+=2){const V=w+U,st=y+P;if(V<0||st<0||V>=t||st>=n)continue;const I=st*t+V;!i[I]&&!f[I]&&(f[I]=1,u.push(I))}}if(u.length<20)return{data:o,cut:0};const v=y=>{const w=e[y*4]+e[y*4+1]+e[y*4+2]+1;return[e[y*4]/w,e[y*4+1]/w]},m=y=>y.sort((w,k)=>w-k)[y.length>>1],h=[],d=[],x=[],g=[];for(const y of u){const[w,k]=v(y);h.push(w),d.push(k),x.push(l[y]),g.push(c[y])}const b=m(h),R=m(d),T=Math.max(8,m(x)),E=Math.max(.06,m(g)*2.2),S=new Uint8Array(a);for(let y=0;y<a;y++){if(!i[y])continue;const[w,k]=v(y);Math.hypot(w-b,k-R)<.03&&l[y]>T*.2&&l[y]<T*.7&&c[y]<=E&&(S[y]=1)}const O=new Uint8Array(a);for(let y=0;y<n;y++)for(let w=0;w<t;w++)if(!i[y*t+w])for(let k=-3;k<=3;k++)for(let P=-3;P<=3;P++){const U=w+P,V=y+k;U>=0&&V>=0&&U<t&&V<n&&(O[V*t+U]=1)}const F=y=>{const w=y%t,k=y/t|0;return O[y]===1||w<3||k<3||w>=t-3||k>=n-3},L=new Uint8Array(a),H=new Uint8Array(a),N=[];for(let y=0;y<a;y++){if(!S[y]||L[y])continue;const w=[];let k=!1;for(L[y]=1,N.push(y);N.length;){const P=N.pop();w.push(P),!k&&F(P)&&(k=!0);const U=P%t,V=P/t|0;U>0&&S[P-1]&&!L[P-1]&&(L[P-1]=1,N.push(P-1)),U<t-1&&S[P+1]&&!L[P+1]&&(L[P+1]=1,N.push(P+1)),V>0&&S[P-t]&&!L[P-t]&&(L[P-t]=1,N.push(P-t)),V<n-1&&S[P+t]&&!L[P+t]&&(L[P+t]=1,N.push(P+t))}if(k&&w.length>=r*.05)for(const P of w)H[P]=1}for(let y=0;y<40;y++){const w=[];for(let k=0;k<a;k++){if(!i[k]||H[k])continue;const P=k%t,U=k/t|0;if(!(P>0&&H[k-1]||P<t-1&&H[k+1]||U>0&&H[k-t]||U<n-1&&H[k+t]))continue;const[V,st]=v(k);if(!(Math.hypot(V-b,st-R)<.06&&l[k]<T*.9))continue;let I=y<2;if(!I){const _=Z=>Z<0||Z>=a||!i[Z]||H[Z]===1;I=(_(k-1)||_(k-2)||_(k+1)||_(k+2))&&(_(k-t)||_(k-2*t)||_(k+t)||_(k+2*t)),I&&=(_(k-1)||_(k-2))&&(_(k+1)||_(k+2))||(_(k-t)||_(k-2*t))&&(_(k+t)||_(k+2*t))}I&&w.push(k)}if(!w.length)break;for(const k of w)H[k]=1}const J=new Uint8Array(a);for(let y=0;y<a;y++)i[y]&&!H[y]&&(J[y]=1);const q=new Int32Array(a).fill(-1),ot=[];for(let y=0;y<a;y++){if(!J[y]||q[y]>=0)continue;const w=ot.length;let k=0;for(q[y]=w,N.push(y);N.length;){const P=N.pop();k++;const U=P%t,V=P/t|0;U>0&&J[P-1]&&q[P-1]<0&&(q[P-1]=w,N.push(P-1)),U<t-1&&J[P+1]&&q[P+1]<0&&(q[P+1]=w,N.push(P+1)),V>0&&J[P-t]&&q[P-t]<0&&(q[P-t]=w,N.push(P-t)),V<n-1&&J[P+t]&&q[P+t]<0&&(q[P+t]=w,N.push(P+t))}ot.push(k)}if(!ot.length)return{data:o,cut:0};const $=Math.max(...ot);for(let y=0;y<a;y++)J[y]&&ot[q[y]]<$*.15&&(J[y]=0);const z=new Uint8Array(a);for(let y=0;y<t;y++)for(const w of[0,n-1]){const k=w*t+y;!J[k]&&!z[k]&&(z[k]=1,N.push(k))}for(let y=0;y<n;y++)for(const w of[0,t-1]){const k=y*t+w;!J[k]&&!z[k]&&(z[k]=1,N.push(k))}for(;N.length;){const y=N.pop(),w=y%t,k=y/t|0;w>0&&!J[y-1]&&!z[y-1]&&(z[y-1]=1,N.push(y-1)),w<t-1&&!J[y+1]&&!z[y+1]&&(z[y+1]=1,N.push(y+1)),k>0&&!J[y-t]&&!z[y-t]&&(z[y-t]=1,N.push(y-t)),k<n-1&&!J[y+t]&&!z[y+t]&&(z[y+t]=1,N.push(y+t))}const j=new Uint8Array(a);let tt=0;for(let y=0;y<a;y++)J[y]?j[y]=o[y]:!z[y]&&!H[y]&&(j[y]=255),j[y]>127&&tt++;const et=Math.min(t-1,Math.max(0,Math.round(s[0]*t))),G=Math.min(n-1,Math.max(0,Math.round(s[1]*n))),nt=j[G*t+et]>127;if(tt<r*.2||!nt&&tt<r*.5)return{data:o,cut:0};const dt=1-tt/r;return dt>.005?{data:j,cut:dt}:{data:o,cut:0}}const Ne=()=>new URL("./",document.baseURI).href;async function ba(o){try{const s=await fetch(Ne()+o);if(s.ok&&!(s.headers.get("content-type")||"").includes("html"))return await s.arrayBuffer()}catch{}const e=await(await fetch(Ne()+o+".json")).json(),t=atob(e),n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n.buffer}class ya{model=null;tf=null;c=document.createElement("canvas");x=this.c.getContext("2d",{willReadFrequently:!0});busy=!1;async load(){const e=await Vt(()=>import("./index-DlkYYufl.js").then(a=>a.hc),[],import.meta.url);await Vt(()=>import("./dist-S6279hK-.js"),__vite__mapDeps([0,1]),import.meta.url);const{loadGraphModel:t}=await Vt(async()=>{const{loadGraphModel:a}=await import("./dist-CMuHfCEm.js");return{loadGraphModel:a}},__vite__mapDeps([2,1]),import.meta.url);await e.setBackend("webgl"),await e.ready();const n=await(await fetch(Ne()+"models/tfjs-selfie/model.json")).json(),s=await ba("models/tfjs-selfie/group1-shard1of1.bin");this.model=await t(e.io.fromMemory({modelTopology:n.modelTopology,weightSpecs:n.weightsManifest[0].weights,weightData:s})),this.tf=e,this.c.width=this.c.height=256}async run(e){const t=this.tf,n=this.model;if(!t||!n||this.busy)return null;this.busy=!0;try{this.x.drawImage(e,0,0,256,256);const s=t.tidy(()=>{const r=t.expandDims(t.div(t.cast(t.browser.fromPixels(this.c),"float32"),255),0),l=n.predict(r);return t.slice(l,[0,0,0,1],[1,256,256,1])}),a=await s.data();s.dispose();const i=new Uint8Array(a.length);for(let r=0;r<a.length;r++)i[r]=Math.max(0,Math.min(255,a[r]*255));return i}finally{this.busy=!1}}}let Zt=null;const _e=()=>new URL("./",document.baseURI).href;async function Ro(){return Zt||(Zt=Vt(async()=>{const{FilesetResolver:o}=await import("./vision_bundle-CW6lxI94.js");return{FilesetResolver:o}},[],import.meta.url).then(({FilesetResolver:o})=>o.forVisionTasks(_e()+"mediapipe")),Zt.catch(()=>Zt=null)),Zt}let Te=null;function Eo(){return Te||(Te=(async()=>{try{return await WebAssembly.compile(new Uint8Array([0,97,115,109,1,0,0,0])),!0}catch{return!1}})()),Te}async function Po(o){try{const a=await fetch(_e()+`models/${o}.tflite`);if(a.ok&&!(a.headers.get("content-type")||"").includes("html"))return new Uint8Array(await a.arrayBuffer())}catch{}const e=await fetch(_e()+`models/${o}.json`);if(!e.ok)throw new Error(`model ${o} not found (${e.status})`);const t=await e.json(),n=atob(t),s=new Uint8Array(n.length);for(let a=0;a<n.length;a++)s[a]=n.charCodeAt(a);return s}class Ma{c=document.createElement("canvas");x=this.c.getContext("2d",{willReadFrequently:!0});draw(e,t){if(e===this.c)return this.c;const[n,s]=e instanceof HTMLVideoElement?[e.videoWidth,e.videoHeight]:e instanceof HTMLImageElement?[e.naturalWidth,e.naturalHeight]:e instanceof HTMLCanvasElement?[e.width,e.height]:[t,t],a=t/Math.max(n,s,1),i=Math.max(16,Math.round(n*a)),r=Math.max(16,Math.round(s*a));return(this.c.width!==i||this.c.height!==r)&&(this.c.width=i,this.c.height=r),this.x.drawImage(e,0,0,i,r),this.c}}function wa(o){return o instanceof HTMLVideoElement?[o.videoWidth,o.videoHeight]:o instanceof HTMLImageElement?[o.naturalWidth,o.naturalHeight]:o instanceof HTMLCanvasElement?[o.width,o.height]:[256,256]}function _t(o,e,t){let n=0,s=0,a=0;for(let i=0;i<o.length;i++)o[i]>127&&(n+=i%e,s+=i/e|0,a++);return{data:o,w:e,h:t,cx:a?(n/a+.5)/e:.5,cy:a?(s/a+.5)/t:.5,area:a/o.length}}class ka{tapStatus="idle";personStatus="idle";message="";tap=null;person=null;tf=null;small=new Ma;ts=0;tapP=null;personP=null;loadTap(){return this.tapP??=(async()=>{this.tapStatus="loading",this.message="사물 분리 모델 불러오는 중… (6MB)";try{if(!await Eo())throw new Error("이 화면에서는 WebAssembly가 막혀 있어 TAP 대신 PERSON·KEY·SHAPE를 쓰세요");const{InteractiveSegmenterLegacy:e}=await Vt(async()=>{const{InteractiveSegmenterLegacy:a}=await import("./vision_bundle-CW6lxI94.js");return{InteractiveSegmenterLegacy:a}},[],import.meta.url),t=await Ro(),n=await Po("magic_touch"),s=a=>e.createFromOptions(t,{baseOptions:{modelAssetBuffer:n,delegate:a},outputCategoryMask:!1,outputConfidenceMasks:!0});try{this.tap=await s("GPU")}catch{this.tap=await s("CPU")}this.tapStatus="ready",this.message=""}catch(e){this.tapStatus="error",this.message=String(e.message||e),console.warn("tap model failed",e)}})(),this.tapP}loadPerson(){return this.personP??=(async()=>{this.personStatus="loading",this.message="사람 분리 모델 불러오는 중…";try{if(!await Eo())throw new Error("wasm blocked");const{ImageSegmenter:e}=await Vt(async()=>{const{ImageSegmenter:a}=await import("./vision_bundle-CW6lxI94.js");return{ImageSegmenter:a}},[],import.meta.url),t=await Ro(),n=await Po("selfie_segmenter"),s=a=>e.createFromOptions(t,{baseOptions:{modelAssetBuffer:n,delegate:a},runningMode:"VIDEO",outputCategoryMask:!1,outputConfidenceMasks:!0});try{this.person=await s("GPU")}catch{this.person=await s("CPU")}this.personStatus="ready",this.message=""}catch(e){console.warn("person model via mediapipe failed, trying tfjs",e);try{this.tf=new ya,await this.tf.load(),this.personStatus="ready",this.message=""}catch(t){this.personStatus="error",this.message="사람 분리 모델을 불러오지 못했어요",console.warn(t)}}})(),this.personP}crop=document.createElement("canvas");cropX=this.crop.getContext("2d");tapAt(e,t,n,s){if(!this.tap)return null;try{const a=this.small.draw(e,256),i=a.width,r=a.height;let l=a,c=t,u=n;if(s){const[h,d,x,g]=s,b=Math.max(1,Math.round(x*i)),R=Math.max(1,Math.round(g*r)),T=256/Math.max(b,R),E=Math.max(16,Math.round(b*T)),S=Math.max(16,Math.round(R*T));(this.crop.width!==E||this.crop.height!==S)&&(this.crop.width=E,this.crop.height=S);const[O,F]=wa(e);this.cropX.drawImage(e,h*O,d*F,x*O,g*F,0,0,E,S),l=this.crop,c=(t-h)/x,u=(n-d)/g}const f=this.tap.segment(l,{keypoint:{x:Math.min(.999,Math.max(0,c)),y:Math.min(.999,Math.max(0,u))}}),v=f.confidenceMasks?.[0];let m=null;if(v){const h=v.getAsFloat32Array(),d=new Uint8Array(i*r);if(s){const[x,g,b,R]=s;for(let T=0;T<r;T++){const S=((T+.5)/r-g)/R;if(S<0||S>=1)continue;const O=Math.min(v.height-1,Math.floor(S*v.height));for(let F=0;F<i;F++){const L=((F+.5)/i-x)/b;L<0||L>=1||(d[T*i+F]=h[O*v.width+Math.min(v.width-1,Math.floor(L*v.width))]*255)}}}else for(let x=0;x<h.length&&x<d.length;x++)d[x]=h[x]*255;m=_t(d,i,r)}return f.close?.(),m}catch(a){return console.warn("tap segment error",a),null}}frame(e){return this.small.draw(e,256)}async personOf(e){if(this.tf){const n=await this.tf.run(e);return n?_t(Uint8Array.from(n),256,256):null}if(!this.person)return null;let t=null;this.ts=Math.max(this.ts+1,performance.now());try{this.person.segmentForVideo(this.small.draw(e,256),this.ts,n=>{const s=n.confidenceMasks?.[0];if(s){const a=s.getAsFloat32Array(),i=new Uint8Array(a.length);for(let r=0;r<a.length;r++)i[r]=a[r]*255;t=_t(i,s.width,s.height)}n.close()})}catch(n){console.warn("person segment error",n)}return t}}const kt=new ka,Ta=10;function Sa(o,e,t,n,s){const a=document.createElement("canvas"),i=72/Math.max(e,t);a.width=Math.max(8,Math.round(e*i)),a.height=Math.max(8,Math.round(t*i));const r=a.getContext("2d");r.fillStyle="#101010",r.fillRect(0,0,a.width,a.height);const l=document.createElement("canvas");l.width=n.w,l.height=n.h;const c=l.getContext("2d"),u=c.createImageData(n.w,n.h);for(let m=0;m<n.data.length;m++)u.data[m*4+3]=n.data[m]>110?255:0;c.putImageData(u,0,0);const f=document.createElement("canvas");f.width=a.width,f.height=a.height;const v=f.getContext("2d");return v.drawImage(l,0,0,a.width,a.height),v.globalCompositeOperation="source-in",v.drawImage(o,0,0,a.width,a.height),r.drawImage(f,0,0),r.strokeStyle=s,r.lineWidth=3,r.strokeRect(1.5,1.5,a.width-3,a.height-3),a.toDataURL("image/png")}async function Aa(o){const e=o.src;if(e.kind==="test"){const t=document.createElement("canvas");t.width=Et,t.height=bt;const n=t.getContext("2d");return{at:async s=>(Ze(n,e.test??0,s),t),size:[Et,bt],done:()=>{}}}if(e.kind==="image"){const t=new Image;return t.src=e.url,await t.decode().catch(()=>{}),{at:async()=>t,size:[t.naturalWidth||16,t.naturalHeight||9],done:()=>{}}}if(e.kind==="video"){const t=Je(e.url);return await new Promise(n=>{t.addEventListener("loadeddata",()=>n(),{once:!0}),setTimeout(n,6e3)}),{at:async n=>(await Xo(t,n),t.readyState>=2?t:null),size:[t.videoWidth||16,t.videoHeight||9],done:()=>{t.removeAttribute("src"),t.load()}}}return null}const He=[];let Se=!1;function Ae(o,e){if(o.track&&(o.track.cancel=!0),o.kind!=="tap"&&o.kind!=="person")return;const t=o.src,n=o.loopIn,s=Math.min(o.loopOut,o.loopIn+Ta,t.kind==="image"?o.loopIn+.01:1/0),a=t.kind==="image"?1:10,i=Math.max(1,Math.ceil((s-n)*a));o.track={fps:a,start:n,frames:new Array(i).fill(null),cx:new Float32Array(i),cy:new Float32Array(i),w:0,h:0,done:0,running:!1,cancel:!1},o.thumbs=[],He.push(o),Ra(e)}async function Ra(o){if(!Se){Se=!0;try{for(;He.length;){const e=He.shift();e.dead||!e.track||e.track.cancel||await Oa(e,o)}}finally{Se=!1}}}function Jt(o,e,t,n,s=0){const a=new Float32Array(e*t),i=1e6;for(let c=0;c<a.length;c++)a[c]=o[c]>127?i:0;for(let c=0;c<t;c++)for(let u=0;u<e;u++){const f=c*e+u;if(!a[f])continue;let v=a[f];u>0&&(v=Math.min(v,a[f-1]+1)),c>0&&(v=Math.min(v,a[f-e]+1)),u>0&&c>0&&(v=Math.min(v,a[f-e-1]+1.414)),u<e-1&&c>0&&(v=Math.min(v,a[f-e+1]+1.414)),a[f]=u===0||c===0||u===e-1||c===t-1?Math.min(v,1):v}let r=[e/2,t/2],l=-1;for(let c=t-1;c>=0;c--)for(let u=e-1;u>=0;u--){const f=c*e+u;if(!a[f])continue;let v=a[f];u<e-1&&(v=Math.min(v,a[f+1]+1)),c<t-1&&(v=Math.min(v,a[f+e]+1)),u<e-1&&c<t-1&&(v=Math.min(v,a[f+e+1]+1.414)),u>0&&c<t-1&&(v=Math.min(v,a[f+e-1]+1.414)),a[f]=v,!(n&&Math.hypot(u-n[0],c-n[1])<s)&&v>l&&(l=v,r=[u,c])}return[r,l]}function Co(o,e,t,n,s){const a=new Uint8Array(o.length),i=Math.round(n),r=Math.round(s);for(let l=0;l<t;l++){const c=l-r;if(!(c<0||c>=t))for(let u=0;u<e;u++){const f=u-i;f>=0&&f<e&&(a[l*e+u]=o[c*e+f])}}return a}function Jo(o,e){let t=0,n=0;for(let s=0;s<o.length;s++){const a=o[s]>127,i=e[s]>127;a&&i&&t++,(a||i)&&n++}return n?t/n:0}function Gt(o){let e=0;for(let t=0;t<o.length;t++)o[t]>127&&e++;return e}function Re(o,e){const t=new Float32Array(64);let n=0;for(let s=0;s<e.length;s++)if(e[s]>127){const a=o[s*4]>>6,i=o[s*4+1]>>6,r=o[s*4+2]>>6;t[a*16+i*4+r]++,n++}if(n)for(let s=0;s<64;s++)t[s]/=n;return t}const Io=(o,e)=>{let t=0;for(let n=0;n<64;n++)t+=Math.min(o[n],e[n]);return t},qe=o=>o.area>8e-4&&o.area<.5;function Oo(o,e,t){const n=[[e,t]];for(let r=0;r<8;r++)n.push([e+Math.cos(r/8*Math.PI*2)*.025,t+Math.sin(r/8*Math.PI*2)*.018]);let s=null,a=-1,i=null;for(const[r,l]of n){const c=kt.tapAt(o,Math.min(.99,Math.max(.01,r)),Math.min(.99,Math.max(.01,l)));if(!c||(i??=c,!qe(c)))continue;const u=c.data[Math.min(c.h-1,Math.floor(t*c.h))*c.w+Math.min(c.w-1,Math.floor(e*c.w))]>127,f=(u?1:0)+(1-Math.min(1,c.area*4))*.5;if(f>a&&(a=f,s=c),r===e&&l===t&&u&&c.area<.15)break}return s??i}function Fo(o,e,t,n){const s=document.createElement("canvas");s.width=e,s.height=t;const a=s.getContext("2d",{willReadFrequently:!0});a.fillStyle="#fff",a.strokeStyle="#fff",a.lineJoin="round",a.lineWidth=n*2,a.beginPath(),o.forEach(([l,c],u)=>u?a.lineTo(l*e,c*t):a.moveTo(l*e,c*t)),a.closePath(),a.fill(),n>0&&a.stroke();const i=a.getImageData(0,0,e,t).data,r=new Uint8Array(e*t);for(let l=0;l<r.length;l++)r[l]=i[l*4]>127?255:0;return r}function Ea(o,e,t,n){const s=new Uint8Array(o.length),a=new Uint8Array(o.length);for(let i=0;i<t;i++){for(let r=0,l=-1e9;r<e;r++)o[i*e+r]>127&&(l=r),s[i*e+r]=r-l<=n?255:0;for(let r=e-1,l=1e9;r>=0;r--)o[i*e+r]>127&&(l=r),l-r<=n&&(s[i*e+r]=255)}for(let i=0;i<e;i++){for(let r=0,l=-1e9;r<t;r++)s[r*e+i]&&(l=r),a[r*e+i]=r-l<=n?255:0;for(let r=t-1,l=1e9;r>=0;r--)s[r*e+i]&&(l=r),l-r<=n&&(a[r*e+i]=255)}return a}function Qo(o,e,t,n){let s=e,a=t,i=-1,r=-1;for(let h=0;h<t;h++)for(let d=0;d<e;d++)o[h*e+d]>127&&(d<s&&(s=d),d>i&&(i=d),h<a&&(a=h),h>r&&(r=h));if(i<0)return null;const l=(i-s+1)/e,c=(r-a+1)/t,u=Math.max(.03,l*n),f=Math.max(.03,c*n),v=Math.max(0,s/e-u),m=Math.max(0,a/t-f);return[v,m,Math.min(1-v,l+u*2),Math.min(1-m,c+f*2)]}function tn(o,e,t,n){const s=[],a=o.slice(),i=Math.max(4,Math.sqrt(Gt(o)/Math.max(1,n))*.55);for(let r=0;r<n;r++){const[l,c]=Jt(a,e,t);if(c<1.5)break;s.push([(l[0]+.5)/e,(l[1]+.5)/t]);for(let u=Math.max(0,Math.floor(l[1]-i));u<=Math.min(t-1,Math.ceil(l[1]+i));u++)for(let f=Math.max(0,Math.floor(l[0]-i));f<=Math.min(e-1,Math.ceil(l[0]+i));f++)Math.hypot(f-l[0],u-l[1])<=i&&(a[u*e+f]=0)}return s}function en(o,e,t,n,s=.6,a,i){let r=null,l=0,c=0;for(const[f,v]of e){const m=kt.tapAt(o,f,v,t);if(!m||m.area<4e-4)continue;if(l=m.w,c=m.h,n.length!==m.data.length)return null;let h=0,d=0,x=0;for(let g=0;g<m.data.length;g++)m.data[g]>127&&(h++,n[g]&&d++,a&&a[g]>127&&x++);if(!(!h||d/h<s)&&!(a&&x/h<.5)&&!(i&&!i(m))){r??=new Uint8Array(m.data.length);for(let g=0;g<m.data.length;g++)m.data[g]>127&&n[g]&&(r[g]=Math.max(r[g],m.data[g]))}}if(!r)return null;const u=_t(r,l,c);return u.area>6e-4?u:null}function Pa(o,e){const t=o.width,n=o.height,s=Fo(e,t,n,Math.max(2,Math.round(Math.max(t,n)*.012))),a=Fo(e,t,n,0),i=Qo(s,t,n,.12),r=tn(a,t,n,7),l=en(o,r,i,s,.55);return Rt("track",`region ${e.length} pts box ${i?.map(c=>c.toFixed(2)).join(",")} presses ${r.map(c=>c.map(u=>u.toFixed(2)).join("/")).join(" ")} -> ${l?(l.area*100).toFixed(1)+"% at "+l.cx.toFixed(2)+","+l.cy.toFixed(2):"nothing"}`),l}function Ca(o,e,t){const n=o.width,s=o.height,a=Math.max(3,Math.round(Math.sqrt(Gt(e))*.18)),i=Ea(e,n,s,a),r=Qo(i,n,s,.2),l=en(o,tn(e,n,s,5),r,i,.6,e,t);return l&&Jo(l.data,e)>.25?l:null}const Ia=o=>o.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,o.width,o.height).data;async function Oa(o,e){const t=o.track;t.running=!0,o.kind==="tap"?await kt.loadTap():await kt.loadPerson();const n=await Aa(o);if(!n){t.running=!1;return}const s=t.frames.length,a=b=>Math.max(0,Math.min(s-1,Math.round((b-t.start)*t.fps))),i=[o.seed,...o.fixes??[]].map(b=>({...b,i:a(b.t)})).sort((b,R)=>b.i-R.i),r=[];i.forEach((b,R)=>{const T=R+1<i.length?i[R+1].i-1:s-1,E=[];for(let S=b.i;S<=T;S++)E.push(S);r.push({seed:b,order:E}),R===0&&r.push({seed:b,order:Array.from({length:b.i},(S,O)=>b.i-1-O)})});let l=null,c=0,u=performance.now();const f=new Map;let v=0,m=0,h=0,d=0,x=0;const g=performance.now();for(const b of r){let R=null,T=[0,0],E=null,S=[b.seed.x,b.seed.y],O=0;const F=f.get(b.seed.i);if(b.order[0]!==b.seed.i&&F){R=F.data,E=[F.cx*F.w,F.cy*F.h];const[L]=Jt(t.frames[b.seed.i]??F.data,t.w,t.h);S=[(L[0]+.5)/t.w,(L[1]+.5)/t.h]}for(const L of b.order){if(t.cancel||o.dead)break;const H=performance.now(),N=await n.at(t.start+L/t.fps);if(!N)continue;v+=performance.now()-H;const J=performance.now(),q=kt.frame(N),ot=Ia(q);let $=null;if(o.kind==="person")$=await kt.personOf(q);else if(!R&&o.region&&o.region.length>2)$=Pa(q,o.region)??Oo(q,S[0],S[1]);else if(!R)$=Oo(q,S[0],S[1]);else if(o.region&&o.region.length>2){const G=Co(R,t.w,t.h,T[0],T[1]);$=Ca(q,G,l?nt=>Io(Re(ot,nt.data),l)>=.3:void 0),$?O=0:($=_t(G,t.w,t.h),T=[T[0]*.5,T[1]*.5],O++)}else{const G=t.w,nt=t.h,dt=Co(R,G,nt,T[0],T[1]),[y]=Jt(dt,G,nt),[w]=Jt(dt,G,nt,y,Math.max(G,nt)*.08),k=[[(y[0]+.5)/G,(y[1]+.5)/nt],[S[0]+T[0]/G,S[1]+T[1]/nt],[(w[0]+.5)/G,(w[1]+.5)/nt]],P=Math.max(1,Gt(R)),U=Z=>Math.exp(-Math.abs(Math.log(Math.max(Z/P,.001)))*1.5)*.5+(c?Math.exp(-Math.abs(Math.log(Math.max(Z/c,.001))))*.5:.5),V=Z=>l?Io(Re(ot,Z.data),l):.5;let st=null,I=-1,_=k[0];for(const Z of k){const lt=kt.tapAt(q,Z[0],Z[1]);if(!lt||!qe(lt))continue;const at=V(lt);if(l&&at<.35)continue;const yt=.45*Jo(lt.data,dt)+.25*U(Gt(lt.data))+.3*at;if(yt>I&&(I=yt,st=lt,_=Z),yt>.72)break}if(!(st&&I>=.35)){const[Z,lt]=E?[(E[0]+T[0])/G,(E[1]+T[1])/nt]:S,at=Math.min(.3,.06+O*.03);let yt=null,qt=-1,Dt=S;for(let $t=-1;$t<=1;$t++)for(let Pt=-1;Pt<=1;Pt++){if(!Pt&&!$t)continue;const jt=[Math.min(.98,Math.max(.02,Z+Pt*at*.56)),Math.min(.98,Math.max(.02,lt+$t*at))],Mt=kt.tapAt(q,jt[0],jt[1]);if(!Mt||!qe(Mt)||l&&V(Mt)<.35)continue;const Ct=Math.exp(-Math.hypot((Mt.cx-Z)/.56,Mt.cy-lt)/(at*1.5)),mt=.45*V(Mt)+.35*U(Gt(Mt.data))+.2*Ct;mt>qt&&(qt=mt,yt=Mt,Dt=jt)}yt&&qt>=.5&&(st=yt,I=qt,_=Dt)}st&&I>=.35?($=st,S=_,O=0):($=_t(dt,G,nt),T=[T[0]*.5,T[1]*.5],O++)}if(!$)continue;const z=$;let j=$;if(o.kind==="tap"){const G=xa(j.data,ot,j.w,j.h,S);G.cut>0&&(j=_t(G.data,j.w,j.h),d+=G.cut,x++)}!R&&o.kind==="tap"&&!l&&(l=Re(ot,z.data),c=Math.max(1,Gt(z.data))),t.w=j.w,t.h=j.h,t.frames[L]=j.data,t.cx[L]=j.cx,t.cy[L]=j.cy,f.set(L,z);const tt=[z.cx*z.w,z.cy*z.h];if(E&&(T=[T[0]*.5+(tt[0]-E[0])*.5,T[1]*.5+(tt[1]-E[1])*.5]),E=tt,R=z.data,o.kind==="tap"){const[G]=Jt(j.data,j.w,j.h);S=[(G[0]+.5)/j.w,(G[1]+.5)/j.h]}m+=performance.now()-J,O&&h++,t.done++;const et=Math.floor(L/s*4);(L===b.seed.i||L%Math.max(1,Math.floor(s/4))===0)&&!o.thumbs[et]&&(o.thumbs[et]=Sa(q,q.width,q.height,j,o.color)),o.maskStamp++,performance.now()-u>40&&(e(),await new Promise(G=>setTimeout(G,0)),u=performance.now())}}if(!t.cancel&&!o.dead){Fa(t);const b=Math.max(1,t.done);Rt("track",`${o.kind} ${s} frames in ${((performance.now()-g)/1e3).toFixed(1)}s · seek ${Math.round(v/b)}ms work ${Math.round(m/b)}ms per frame · lost ${h} · shadow -${Math.round((x?d/x:0)*100)}% on ${x}`)}t.done=s,t.running=!1,n.done(),o.maskStamp++,e()}function Fa(o){const e=o.frames,t=e.map((n,s)=>{const a=e[s-1],i=e[s+1];if(!n||!a||!i||a.length!==n.length||i.length!==n.length)return n;const r=new Uint8Array(n.length);for(let l=0;l<n.length;l++){const c=n[l],u=a[l],f=i[l];r[l]=Math.max(Math.min(c,u),Math.min(Math.max(c,u),f))}return r});for(let n=0;n<e.length;n++)e[n]=t[n]}class on{constructor(e,t=null){this.s=e,this.camera=t,this.loopIn=e.loopIn,this.loopOut=e.loopOut,this.speed=e.speed}el=null;speed=1;loopIn;loopOut;frozen=!1;frozenAt=0;t0=0;p0=0;parked=!0;stamp=0;ctx=null;seeking=!1;presented=-1;presentedAt=0;lastShown=-1;lastDrawn=-1;get len(){return Math.max(.05,this.loopOut-this.loopIn)}pos(e){if(this.frozen)return this.frozenAt;const n=this.p0+(e-this.t0)*this.speed-this.loopIn;return this.loopIn+(n%this.len+this.len)%this.len}restart(e,t=this.loopIn){this.t0=e,this.p0=t,this.frozen=!1}setSpeed(e,t){const n=this.pos(t);this.speed=e,this.t0=t,this.p0=n}setLoop(e,t,n){const s=this.pos(n);this.loopIn=Math.max(0,Math.min(e,this.s.duration-.05)),this.loopOut=Math.max(this.loopIn+.05,Math.min(t,this.s.duration)),this.t0=n,this.p0=Math.min(Math.max(s,this.loopIn),this.loopOut-.01)}nudge(e,t){const n=this.pos(t);this.t0=t,this.p0=n+e,this.frozen&&(this.frozenAt=this.pos(t))}freeze(e,t){e!==this.frozen&&(e?(this.frozenAt=this.pos(t),this.frozen=!0):(this.frozen=!1,this.t0=t,this.p0=this.frozenAt))}sameAs(e,t){return e.s===this.s&&Math.abs(e.pos(t)-this.pos(t))<.04&&e.speed===this.speed&&e.frozen===this.frozen}copyTiming(e){this.t0=e.t0,this.p0=e.p0,this.speed=e.speed,this.loopIn=e.loopIn,this.loopOut=e.loopOut,this.frozen=e.frozen,this.frozenAt=e.frozenAt}size(){const e=this.s;return e.kind==="camera"&&this.camera?[this.camera.video.videoWidth||16,this.camera.video.videoHeight||9]:e.kind==="test"?[Et,bt]:[e.w||16,e.h||9]}get live(){return this.s.kind==="camera"||this.s.kind==="beam"||this.s.kind==="matte"}ensure(){const e=this.s;if(!this.el){if(e.kind==="video"){const t=Je(e.url);fn(t,e.name),t.loop=!0,t.addEventListener("seeked",()=>{this.seeking=!1,this.stamp++});const n=t;if(n.requestVideoFrameCallback){const s=(a,i)=>{this.el===t&&(this.presented=i.mediaTime,this.presentedAt=performance.now(),n.requestVideoFrameCallback(s))};n.requestVideoFrameCallback(s)}this.el=t}else if(e.kind==="image"){const t=new Image;t.src=e.url,this.el=t}else if(e.kind==="test"){const t=document.createElement("canvas");t.width=Et,t.height=bt,this.ctx=t.getContext("2d"),this.el=t}}}element(){const e=this.s;if(e.kind==="camera"){const n=this.camera;return n&&n.facing===e.facing&&n.ready?n.video:null}this.ensure();const t=this.el;return t?t instanceof HTMLVideoElement?t.readyState>=2?t:null:t instanceof HTMLImageElement?t.complete&&t.naturalWidth?t:null:t:null}tick(e){const t=this.s;this.parked=!1,this.ensure();const n=this.pos(e);if(t.kind==="test"&&this.ctx){const i=Math.round(n*30)/30;i!==this.lastDrawn&&(Ze(this.ctx,t.test??0,i),this.lastDrawn=i,this.stamp++);return}if(t.kind==="camera"){this.stamp++;return}const s=this.el;if(!(s instanceof HTMLVideoElement))return;if(this.frozen){s.paused||s.pause(),!this.seeking&&Math.abs(s.currentTime-n)>.03&&(this.seeking=!0,s.currentTime=n);return}if(s.paused&&s.play().catch(()=>{}),this.seeking)return;let a=s.currentTime-n;Math.abs(a)>this.len/2&&(a-=Math.sign(a)*this.len),Math.abs(a)>.25||s.currentTime>this.loopOut+.05||s.currentTime<this.loopIn-.3?(this.seeking=!0,s.currentTime=n,s.playbackRate=Math.min(4,Math.max(.25,this.speed))):s.playbackRate=Math.min(4,Math.max(.25,this.speed*(1-Math.max(-.08,Math.min(.08,a))))),this.stamp++}shownPos(e){const t=this.pos(e),n=this.el;if(!(n instanceof HTMLVideoElement)||n.readyState<2)return t;const s=i=>Math.min(this.loopOut,Math.max(this.loopIn,i));if(this.presented>=0&&performance.now()-this.presentedAt<120)return this.lastShown=s(this.presented);if(this.seeking&&this.lastShown>=0)return this.lastShown;const a=n.currentTime;return n.paused&&!this.frozen&&Math.abs(a-t)<.08?this.lastShown=t:this.lastShown=s(a)}settled(e){return this.element()?this.el instanceof HTMLVideoElement?!this.seeking&&Math.abs(this.el.currentTime-this.pos(e))<.05&&(this.presented<0||performance.now()-this.presentedAt>500||Math.abs(this.presented-this.pos(e))<.05):!0:!1}attach(){this.ensure();const e=this.el;if(!(e instanceof HTMLVideoElement)||e.isConnected)return;let t=document.getElementById("hidden-videos");t||(t=document.createElement("div"),t.id="hidden-videos",t.style.cssText="position:fixed;left:0;top:0;width:2px;height:2px;overflow:hidden;opacity:0.01;pointer-events:none;z-index:-1",document.body.append(t)),e.style.cssText="width:2px;height:2px",t.append(e)}park(){this.parked||(this.parked=!0,this.el instanceof HTMLVideoElement&&!this.el.paused&&this.el.pause())}dispose(){this.park(),this.el instanceof HTMLVideoElement&&(this.el.remove(),this.el.removeAttribute("src"),this.el.load()),this.el=null}}const Ht=new xs,$e=new Map,Lo=new WeakMap;function La(o){$e.get(o.id)?.dispose(),$e.delete(o.id)}function Ba(o,e,t){e.loopIn=o.loopIn,e.loopOut=Math.max(o.loopIn+.05,o.loopOut);const n=Ye(o),s=Be(o,t),a=Math.round(s/Math.max(.01,Xe(o)));(Lo.get(e)!==a||Math.abs(e.speed-n)>.001)&&(Lo.set(e,a),e.speed=n,e.restart(s,o.loopIn))}const We=new Map;function Da(o){let e=We.get(o);return e||(e=new on(o,Ht),e.restart(performance.now()/1e3),We.set(o,e)),e}function Bo(o){let e=null;for(const t of[...$e.values(),...We.values()])o.has(t)?t.s.kind==="camera"&&!e&&(e=t.s.facing??null):t.park();Ht.want(e)}const Do=o=>M("p",{class:"hint"},o),ee=(...o)=>M("div",{class:"keys"},...o.filter(Boolean)),Ee=(o,...e)=>M("div",{class:"sec"},M("div",{class:"sec-t"},o),...e.filter(Boolean)),Ua=["#ff2a2a","#ff8a1a","#ffe02a","#a8ff40","#20c040","#20e0c0","#40c8ff","#2050ff","#18207a","#9040ff","#ff30e0","#ff8ac0","#ffffff","#a8a8b0","#8a5020","#101010"];function Uo(o,e,t,n,s){const a=e.map(([l,c])=>X(c,{cls:"tiny cw",lit:()=>n()===l,onPress:()=>s(l)}));for(const l of t){const c=X(M("i",{class:"sw",style:`background:${l}`}),{cls:"tiny swk",lit:()=>n()===l,onPress:()=>s(l)});a.push(c)}const i=M("input",{type:"color",class:"cpick"});i.addEventListener("input",()=>s(i.value));const r=M("label",{class:"key tiny swk custom"},M("span",{class:"kf"},"+"),i);return Bt(r,()=>{const l=n(),c=l.startsWith("#")&&!t.includes(l);r.classList.toggle("lit",c),r.style.background=c?l:"",l.startsWith("#")&&(i.value=l)}),a.push(r),M("div",{class:"colour-row"},M("small",null,o),M("div",{class:"sws"},...a))}function Pe(o){const e=o.an?.register??60;return e<50?0:e<64?1:e<78?2:3}function nn(o,e,t,n){const s=[],a=o;if(e==="look"){const i=M("div",{class:"tiles t5"});for(const c of Fe)i.append(X(M("span",{class:"kf col"},M("b",null,c.name),M("small",null,c.ko)),{cls:"tile line",lit:()=>o.look.id===c.id,onPress:()=>(o.look.id=c.id,t(),n())}));const r=qo(o.look.id),l=Uo("COLOR",[["orig","ORIG"],["rainbow","RAINBOW"],["neg","NEG"],["mono","B/W"]],Rs(r.id),()=>$o(o.look),c=>(o.look.colors[o.look.id]=c,t()));s.push(i,l,ee(r.a?wt(r.a,o.look,"a",0,1,.05,void 0,t):null,r.b?wt(r.b,o.look,"b",0,1,.05,void 0,t):null)),o.kind==="luma"&&s.push(Ee("LUMA KEY",wt("LOW",o.key,"lo",0,1,.01),wt("HIGH",o.key,"hi",0,1,.01),ee(Oe("INVERT",o.key,"invert")))),o.kind==="chroma"&&s.push(Ee("CHROMA KEY",Nn("KEY",o.key,"color",["#00d040","#2040ff","#ff2020","#f0f0f0","#101010"]),ee(Oe("INVERT",o.key,"invert")))),o.kind==="shape"&&s.push(Ee("SHAPE",lo("",o.shape,"type",Ps.map((c,u)=>[u,c])),wt("SIZE",o.shape,"size",.05,1,.01),wt("RING",o.shape,"ring",.05,.9,.01),wt("SPIN",o.shape,"spin",-2,2,.05)))}else if(e==="line"){const i=M("div",{class:"tiles t5"});Es.forEach(([l,c],u)=>i.append(X(M("span",{class:"kf col"},M("b",null,l),M("small",null,c)),{cls:"tile line",lit:()=>o.line===u,onPress:()=>(o.line=u,t())})));const r=lo("TORN COLORS",a,"linePal",Le.map((l,c)=>[c,["VIOLET","GREEN","RGB","B/W"][c]]),t);Bt(r,()=>r.hidden=!(o.line===1&&(o.lineColor??"auto")==="auto")),s.push(i,Uo("LINE COLOR",[["auto","AUTO"]],Ua,()=>o.lineColor??"auto",l=>(o.lineColor=l,l!=="auto"&&(o.color=l),t())),wt("WIDTH",a,"lineSize",.4,3,.1,void 0,t),r)}return s}function Na(o){const{renderer:e}=o,t=new aa;let n=xt.find(p=>p.id===W.board.src&&p.kind!=="test")??xt.find(p=>p.kind!=="test")??xt[0],s=null,a="tap",i=!1,r="look",l=!0;const c={a:0,b:0},u=()=>ht.beat;function f(){const p=Math.min(n.duration,W.board.loopBars*4*u());c.a=0,c.b=n.kind==="image"?Math.min(n.duration,16*u()):p}f();const v=M("div",{class:"marks"}),m=M("div",{class:"osd top"}),h=M("div",{class:"osd hint"}),d=M("div",{class:"board-empty"},M("b",null,"영상을 올려 주세요"),M("small",null,"아래 + VIDEO 또는 + PHOTO")),x=M("div",{class:"pgm-screen"},v,m,h,d),g=M("div",{class:"monitor"},x),b=M("canvas",{class:"timeline"}),R=M("div",{class:"tl-box"},b),T=M("div",{class:"keys tl-keys"},...[1,2,4].map(p=>X(`${p} BAR`,{cls:"small",lit:()=>Math.abs(c.b-c.a-p*4*u())<.02,onPress:()=>{W.board.loopBars=p;const A=Math.min(p*4*u(),n.duration);c.b=Math.min(n.duration,c.a+A),c.a=c.b-A,q()}})),X("ALL",{cls:"small",onPress:()=>(c.a=0,c.b=Math.min(n.duration,20),q())}));let E=null,S=0,O=0,F=0;const L=p=>{const A=b.getBoundingClientRect();return(p-A.left)/A.width*n.duration},H=p=>{const A=u();return Math.max(0,Math.min(n.duration,Math.round(p/A)*A))};b.addEventListener("pointerdown",p=>{b.setPointerCapture(p.pointerId);const A=L(p.clientX),C=n.duration*.06;E=Math.abs(A-c.a)<C?"a":Math.abs(A-c.b)<C?"b":A>c.a&&A<c.b?"mid":A<c.a?"a":"b",S=A,O=c.a,F=c.b}),b.addEventListener("pointermove",p=>{if(!E||!b.hasPointerCapture(p.pointerId))return;const A=L(p.clientX),C=u();if(E==="a")c.a=Math.min(H(A),c.b-C);else if(E==="b")c.b=Math.max(H(A),c.a+C);else{const B=H(A-S+O)-O,D=F-O;c.a=Math.max(0,Math.min(n.duration-D,O+B)),c.b=c.a+D}c.b=Math.min(c.b,c.a+20),N()}),b.addEventListener("pointerup",()=>{E&&q(),E=null});function N(){const p=b.getBoundingClientRect(),A=Math.max(10,Math.round(p.width)),C=Math.max(10,Math.round(p.height));(b.width!==A||b.height!==C)&&(b.width=A,b.height=C);const B=b.getContext("2d");B.fillStyle="#101010",B.fillRect(0,0,A,C);const D=Math.max(.01,n.duration);B.fillStyle="#3a3a3a";for(let Ut=0,St=0;Ut<D;Ut+=u(),St++)B.fillRect(Math.round(Ut/D*A),St%4?C-6:C-12,1,St%4?6:12);const K=n.audio;if(K){const Ut=K.getChannelData(0);B.fillStyle="#5a7a5a";for(let St=0;St<A;St++){const rn=Math.floor(St/A*Ut.length),ln=Math.floor((St+1)/A*Ut.length);let pe=0;for(let ve=rn;ve<ln;ve+=8)pe=Math.max(pe,Math.abs(Ut[ve]));const oo=Math.max(1,pe*(C-14));B.fillRect(St,(C-12)/2-oo/2,1,oo)}}const Y=c.a/D*A,it=c.b/D*A;B.fillStyle="rgba(255,224,64,0.22)",B.fillRect(Y,0,it-Y,C),B.fillStyle="#ffe040",B.fillRect(Y-2,0,4,C),B.fillRect(it-2,0,4,C);const Yt=ot().pos(vt())/D*A;B.fillStyle="#ff3020",B.fillRect(Yt,0,2,C),B.fillStyle="#f0f0f0",B.font="10px monospace",B.fillText(`${c.a.toFixed(2)}s — ${c.b.toFixed(2)}s  (${Math.round((c.b-c.a)/u())} beats)`,4,11)}let J=0;function q(){const p=s;p&&(p.loopIn=c.a,p.loopOut=c.b,p.seed.t=Math.min(Math.max(p.seed.t,c.a),c.b-.01),clearTimeout(J),J=window.setTimeout(()=>{(p.kind==="tap"||p.kind==="person")&&(p.track&&G(p)&&(p.track=null),Ae(p,()=>nt(p))),z(p),fe.refresh(p),et(p)},500)),ut()}function ot(){return Da(n)}function $(p){n=p,W.board.src=p.id,s=null,f(),e.clearBrush(),ut()}function z(p){p.an=ga(p.src.audio,p.loopIn,p.loopOut),p.sound.autoMode!==!1&&(p.sound.mode=Ao(p.an))}function j(p,A,C,B){if(n.kind==="camera"||n.kind==="beam"||n.kind==="matte")return ft("녹화한 영상·사진·테스트 클립에서 따낼 수 있어요");s&&!s.saved&&(s.dead=!0);const D=la(n,p,c.a,c.b),K=ot();if(D.seed.t=Math.min(Math.max(K.pos(vt()),c.a),c.b-.01),A!==void 0&&C!==void 0){const[Y,it]=e.screenToSource(K,A,C);D.seed.x=Y,D.seed.y=it}B&&(D.region=B.map(([Y,it])=>e.screenToSource(K,Y,it))),s=D,p!=="tap"&&p!=="person"&&n.thumb&&(D.thumbs=[n.thumb]),(p==="tap"||p==="person")&&(Ae(D,()=>nt(D)),p==="tap"&&kt.loadTap()),setTimeout(()=>{z(D),ut()},30),ut()}function tt(p,A,C){const B=ot(),[D,K]=e.screenToSource(B,A,C),Y=Math.min(Math.max(B.pos(vt()),p.loopIn),p.loopOut-.01);p.fixes=[...(p.fixes??[]).filter(it=>Math.abs(it.t-Y)>.15),{x:D,y:K,t:Y}],p.track&&G(p)&&(p.track=null),Ae(p,()=>nt(p)),ft(`${Y.toFixed(1)}초에 보정 — 다시 추적합니다 (보정 ${p.fixes.length}개)`,1600),ut()}function et(p){p.saved&&(ke(p.src),fa(p))}function G(p){return[...rt,s].some(A=>A&&A!==p&&A.track===p.track)}function nt(p){const A=p.track;for(const C of[...rt,s])!C||C===p||C.track!==A||(C.thumbs=[...p.thumbs],C.maskStamp++);if(A&&!A.running&&A.done>=A.frames.length)for(const C of rt)C.track===A&&et(C);ut()}function dt(){const p=s;if(!p)return ft("먼저 따낼 것을 누르세요");if(rt.length>=ue)return ft("선반이 꽉 찼어요 (16개). 하나 지우고 다시");const A=To(p);p.named&&(A.name=p.name,A.named=!0),A.saved=!0,rt.push(A),et(A),s=To(A),ft(`선반 ${rt.length}번째에 추가 — ${A.name}`,1600),ut()}function y(p){const A=rt.indexOf(p);A>=0&&rt.splice(A,1),p.dead=!0,ha(p),o.forget(p),s===p&&(s=null),ut()}function w(p){n=p.src,W.board.src=n.id,c.a=p.loopIn,c.b=p.loopOut,s=p,ut()}const k=M("div",{class:"strip"});function P(){k.textContent="";for(const A of xt){if(A.kind==="test")continue;const C=X(M("span",{class:"kf col"},A.thumb?M("img",{class:"sthumb",src:A.thumb,alt:""}):M("i",{class:"sthumb"}),M("small",null,A.name)),{cls:"tiny src",lit:()=>n===A,onPress:()=>$(A)});k.append(C)}const p=async A=>{const[C]=await _n(A);if(C){ft("불러오는 중…",1200);try{const B=await Ue(C,C.name);xt.push(B),ke(B),$(B),P()}catch(B){const D=B.message;ft(D==="empty"||D==="unreadable"?"파일을 받지 못했어요 — claude.ai 안에서는 큰 파일이 막힐 수 있어요. 브라우저에서 열어 보세요 (LOG에 기록)":D==="format"?"이 영상 형식을 이 브라우저가 열지 못해요 (LOG에 기록)":"영상을 열지 못했어요 (LOG에 자세한 기록)",3600)}}};k.append(X(M("span",{class:"kf col"},M("b",null,"+"),M("small",null,"VIDEO")),{cls:"tiny src",onPress:()=>void p("video/*")}),X(M("span",{class:"kf col"},M("b",null,"+"),M("small",null,"PHOTO")),{cls:"tiny src",onPress:()=>void p("image/*")}),V("environment","CAM"),V("user","SELF"))}let U=!1;function V(p,A){return X(M("span",{class:"kf col"},M("b",null,"●"),M("small",null,A)),{cls:"tiny src rec-src",lit:()=>U,hold:async C=>{if(C){if(ft("카메라 켜는 중… 누르고 있는 동안 녹화",1500),!await t.start(Ht,p))return ft("카메라를 쓸 수 없어요");U=!0,Tt(),setTimeout(()=>U&&void st(),15e3)}else st()}})}async function st(){if(!U)return;U=!1,Tt();const p=await t.stop();if(Ht.want(null),!p)return ft("녹화된 내용이 없어요");const A=await Ue(p,`REC${xt.length}`);xt.push(A),ke(A),$(A),P(),ft(A.audio?"녹화 완료 — 소리 있음 ♪":"녹화 완료",1500)}P();const I=M("div",{class:"keys cut-row"},X(M("span",{class:"kf col"},M("b",null,"FIX"),M("small",null,"보정")),{cls:"small cut fix",lit:()=>i,onPress:()=>{i=!i,i&&ft("윤곽이 빗나간 순간에 객체를 다시 누르세요. 그 시점부터 다시 따라갑니다",2200),ut()}}),...["tap","person","luma","chroma","shape"].map(p=>X(M("span",{class:"kf col"},M("b",null,ho[p]),M("small",null,{tap:"누른 것",person:"사람",luma:"밝기",chroma:"색",shape:"모양"}[p])),{cls:"small cut",lit:()=>a===p,onPress:()=>{a=p,p!=="tap"?j(p):ft("모니터에서 따낼 것을 누르세요",1400),ut()}}))),_=M("div",{class:"editor"}),Z=M("div",{class:"keys ed-tabs"},...["look","line","sound"].map(p=>X({look:"LOOK 효과",line:"LINE 윤곽",sound:"SOUND 소리"}[p],{cls:"small",lit:()=>r===p,onPress:()=>(r=p,lt())})));function lt(){_.textContent="";const p=s;if(!p){_.append(Do("1) 위에서 클립을 고르고 2) 노란 구간(루프)을 정한 뒤 3) TAP을 켜고 모니터에서 따낼 것을 누르세요. PERSON·LUMA·CHROMA·SHAPE는 누르면 바로 따냅니다.")),Tt();return}const A=()=>(fe.refresh(p),et(p),ut());if(r==="look"||r==="line")_.append(...nn(p,r,A,lt));else{const C=p.an,B=Ao(C),D=M("div",{class:"keys wrap"},...ia.map(([it,Kt,Yt])=>X(M("span",{class:"kf col"},M("b",null,`${Kt}${it===B?" ★":""}`),M("small",null,Yt)),{cls:"small mode",lit:()=>p.sound.mode===it,onPress:()=>(p.sound.mode=it,p.sound.autoMode=!1,A())}))),K=C?C.silent?"소리 없음":`음높이 ${C.pc>=0?dn[C.pc]:"—"} (확실도 ${Math.round(C.conf*100)}%) · 밝기 ${Math.round(C.centroid)}Hz · 리듬 ${C.onsetRate.toFixed(1)}/s`:"분석 중…",Y=M("b");Bt(Y,()=>Y.textContent=`${oe(p)>=0?"+":""}${oe(p)} 반음`),_.append(D,M("div",{class:"an"},K),Do("★ = 이 소리에 추천하는 방식. ORIGINAL: 원본을 키에 맞게 옮김 · RESONATE: 원본이 화음을 울림 · PULSE: 원본의 소리 시작점을 16분음표 리듬으로 · PAD: 원본을 잘게 쪼개 화음으로 깖"),ee(Oe("AUTO TUNE",p.sound,"auto",A),M("span",{class:"stat"},"이동 ",Y)),wt("SHIFT",p.sound,"shift",-12,12,1,void 0,A),wt("GAIN",p.sound,"gain",0,2,.05,void 0,A),ee(X("PREVIEW",{cls:"small",lit:()=>l,onPress:()=>(l=!l,ut())}),M("span",{class:"stat"},`음역 ${["LOW","MID","HIGH","TOP"][Pe(p)]} ${te[Pe(p)].hp}–${te[Pe(p)].lp}Hz`)))}Tt()}const at=M("input",{type:"text",maxlength:"12",class:"name-in",placeholder:"이름",enterkeyhint:"done",autocomplete:"off"});let yt=0;at.addEventListener("input",()=>{const p=s;p&&(p.name=at.value.slice(0,12)||p.name,p.named=!0,clearTimeout(yt),yt=window.setTimeout(()=>et(p),400),ut())}),at.addEventListener("keydown",p=>p.key==="Enter"&&at.blur()),at.addEventListener("blur",()=>{s&&(at.value=s.name)}),Bt(at,()=>{at.disabled=!s,document.activeElement!==at&&(at.value=s?.name??"")});const qt=M("label",{class:"name-row"},M("small",null,"NAME"),at),Dt=M("div",{class:"shelf-strip"});function $t(){Dt.textContent="",rt.forEach(p=>{const A=M("img",{alt:"",src:p.thumbs.find(Boolean)??""});let C=0;const B=X(M("span",{class:"kf col"},A,M("small",null,p.name)),{cls:"tiny ing",lit:()=>s===p,onPress:()=>(w(p),lt()),hold:D=>{clearTimeout(C),D&&(C=window.setTimeout(()=>{w(p),lt(),at.focus(),at.select()},550))}});B.style.setProperty("--c",p.color),Dt.append(B)});for(let p=rt.length;p<ue;p++)Dt.append(M("i",{class:"ing-empty"}))}const Pt=M("div",{class:"keys save-row"},X("다음 ▶ 꾸미기",{cls:"small go sat-go",onPress:()=>s&&ye(s)>=1?o.toSatellite?.(s):ft(s?"추적이 끝나면 위성으로 만들 수 있어요":"먼저 따낼 것을 누르세요")}),X("SAVE ▸ 선반",{cls:"small",onPress:dt}),X("DELETE",{cls:"small",onPress:()=>s&&(s.saved?y(s):(s.dead=!0,s=null,ut()))}),M("span",{class:"stat shelf-n"}));Bt(Pt,()=>{const p=Pt.querySelector(".shelf-n");p&&(p.textContent=`${rt.length}/${ue}`)});const jt=M("div",{class:"board-deck"},R,T,k,I,qt,Z,_,M("div",{class:"shelf-box"},Pt,Dt)),Mt=M("div",{class:"view board","data-keep":!0},g,jt),Ct=M("canvas",{class:"lasso"});x.append(Ct);let mt=null,he=0;function Wt(p=1){const A=x.getBoundingClientRect(),C=devicePixelRatio||1,B=Math.round(A.width*C),D=Math.round(A.height*C);(Ct.width!==B||Ct.height!==D)&&(Ct.width=B,Ct.height=D);const K=Ct.getContext("2d");K.clearRect(0,0,B,D);const Y=mt??de;!Y||Y.length<2||(K.globalAlpha=p,K.lineJoin=K.lineCap="round",K.beginPath(),Y.forEach(([it,Kt],Yt)=>Yt?K.lineTo(it*B,Kt*D):K.moveTo(it*B,Kt*D)),mt||K.closePath(),K.fillStyle="rgba(255,224,64,0.12)",mt||K.fill(),K.lineWidth=6*C,K.strokeStyle="rgba(0,0,0,0.6)",K.stroke(),K.lineWidth=2.5*C,K.setLineDash([8*C,6*C]),K.strokeStyle="#ffe040",K.stroke(),K.setLineDash([]))}let de=null;const Qe=p=>{const A=x.getBoundingClientRect();return[Math.min(1,Math.max(0,(p.clientX-A.left)/A.width)),Math.min(1,Math.max(0,(p.clientY-A.top)/A.height))]};x.addEventListener("pointerdown",p=>{if(p.target.closest(".key"))return;const[A,C]=Qe(p);if(i&&s&&s.kind==="tap")return tt(s,A,C);if(a="tap",!o.lasso)return j("tap",A,C);mt=[[A,C]],de=null,clearTimeout(he);try{x.setPointerCapture(p.pointerId)}catch{}Wt()}),x.addEventListener("pointermove",p=>{if(!mt)return;const A=Qe(p),C=mt[mt.length-1];Math.hypot(A[0]-C[0],A[1]-C[1])<.006||(mt.push(A),Wt())});const to=()=>{if(!mt)return;const p=mt;mt=null;let A=0;for(let Y=1;Y<p.length;Y++)A+=Math.hypot(p[Y][0]-p[Y-1][0],p[Y][1]-p[Y-1][1]);if(A<.08||p.length<4)return Wt(),j("tap",p[0][0],p[0][1]);de=p,Wt();const C=p.reduce((Y,it)=>Y+it[0],0)/p.length,B=p.reduce((Y,it)=>Y+it[1],0)/p.length;j("tap",C,B,p),ft("그린 영역 안의 객체를 따내는 중…",1400);let D=1;const K=()=>{if(D-=.08,D<=0||mt)return Wt(0);Wt(D),he=window.setTimeout(K,60)};he=window.setTimeout(K,1600)};x.addEventListener("pointerup",to),x.addEventListener("pointercancel",to);let eo="";const me=()=>{const p=[rt.map(A=>A.id+A.thumbs.length+A.name).join(","),xt.length,s?.id,r,s?.an?1:0,s?.look.id,s?.sound.mode,s?.kind].join("|");p!==eo&&(eo=p,$t(),lt(),P()),Tt()};return hn(me),me(),{root:Mt,scr:x,player:()=>ot(),frame(p,A){const C=n.kind==="test";d.hidden===C&&(d.hidden=!C);const B=ot();s?Ba(s,B,p):(B.loopIn=c.a,B.loopOut=Math.max(c.a+.05,c.b)),B.tick(p);const D=s&&!s.dead?s:null,K=D&&ye(D)>0,Y=D&&K?[{key:-1,g:D,p:B,x:0,y:0,scale:1,rot:0,tilt:0,sel:!1}]:[],it=D?ye(D):1;return m.textContent=`${n.name}  ${B.pos(p).toFixed(1)}s
${D?`${D.name} · ${ho[D.kind]}${it<1?` 추적 ${Math.round(it*100)}%`:""}`:"따낼 것을 고르세요"}`,h.textContent=kt.message||(i?"FIX · 빗나간 순간에 객체를 다시 누르세요":s?"":o.lasso?"따낼 것을 손가락으로 둘러 그리세요":"따낼 것을 손가락으로 누르세요"),N(),{fr:{bg:{kind:"player",p:B},dim:D&&K?.65:0,layers:Y,beat:A,pulse:0,bgFx:!1},used:new Set([B]),voice:D&&l?D:null}},refresh:me,get draft(){return s}}}function sn(o,e,t,n,s){const a=o.poseAt(e,t,s);if(!a)return n;if(!n)return a;const i=.6;return{...a,x:n.x+(a.x-n.x)*i,y:n.y+(a.y-n.y)*i,scale:n.scale+(a.scale-n.scale)*i}}let Ce=0,_a=0;setInterval(()=>{Ce&&_a++<3&&Rt("body",`${(Ce/5).toFixed(1)} cut-outs a second`),Ce=0},5e3);const Ha=256,qa=15;async function $a(o,e,t,n,s){const a=t.loopOut-t.loopIn;t.restart(performance.now()/1e3,t.loopIn);const i=[];let r=null,l=-1,c=0;const u=performance.now();if(await new Promise(h=>{const d=()=>{const x=performance.now();t.tick(x/1e3),r=sn(o,e,t,r,.76);const g=t.shownPos(x/1e3);if(l>=0&&g<l-a/2&&c>a*.5)return h();if(r&&g!==l&&(l<0||g-l>=1/qa-.004||g<l)){const b=o.renderCutout(r,Ha);b&&(i.push({t:g,c:b}),l>=0&&g>l&&(c+=g-l),l=g,s(Math.min(1,c/a)))}if(x-u>(a+4)*1e3)return h();requestAnimationFrame(d)};requestAnimationFrame(d)}),i.length<4)return Ve("clip",`only ${i.length} frames`),null;i.sort((h,d)=>h.t-d.t);const f=await Promise.all(i.map(h=>new Promise(d=>h.c.toBlob(d,"image/webp",.86))));let v=0;for(const h of f)h&&await mn(`clip:${n}:${v++}`,h);const m=[];for(let h=0;h<8;h++){const d=t.loopIn+(h+.5)/8*a;let x=i[0];for(const b of i)Math.abs(b.t-d)<Math.abs(x.t-d)&&(x=b);const g=document.createElement("canvas");g.width=g.height=192,g.getContext("2d").drawImage(x.c,0,0,192,192),m.push(g.toDataURL("image/png"))}return Rt("clip",`recorded ${v} frames over ${a.toFixed(2)}s from the preview (${(v/a).toFixed(1)} fps), ${Math.round(f.reduce((h,d)=>h+(d?.size??0),0)/1024)} KB`),{clip:{n:v,len:a},stills:m}}let No=!1,an=null,Ge=null,Ie=null;function Wa(){No||(No=!0,pn(),W.ui.crt=0,W.output.quality="sd",Hn(),Ht.onError=()=>ft("카메라를 쓸 수 없어요. 영상이나 사진 파일로 해 보세요.",4e3),da(),an=new Ds,ma(()=>Ge?.refresh()))}function Va(o){Wa();const e=an,t=M("div",{class:"tp-maker"}),n=M("div",{class:"screen tp"});t.append(n),document.body.append(t);let s="board",a=null,i=null,r=null,l=!1,c=null,u=!0;const f=.62,v=S=>{u=!1,Ie=null,i?.dispose(),i=null,Ht.want(null),fe.setVoices([]),vn(),t.remove(),o(S)},m=(S,O)=>M("div",{class:"make-head orn-head"},M("div",{class:"make-title"},`ORNAMENT · ${S}/3 ${O}`),X("닫기 ✕",{cls:"small",onPress:()=>v(null)}));Ge??=Na({renderer:e,forget:S=>La(S),toSatellite:S=>Ie?.(S),lasso:!0}),Ie=S=>{u&&(a=S,s="style",T())};const h=Ge;h.root.querySelector(".sat-go .kf")?.replaceChildren("다음 ▶ 꾸미기");let d="look";function x(){const S=a,O=M("div",{class:"live-prev"});O.append(e.canvas),i?.dispose(),i=new on(S.src,Ht),i.loopIn=S.loopIn,i.loopOut=Math.max(S.loopIn+.05,S.loopOut),i.restart(performance.now()/1e3,S.loopIn),r=e.poseFor(S,i,.76*f);const F=M("div",{class:"style-panel"}),L=M("div",{class:"keys ed-tabs"},X("LOOK 효과",{cls:"small",lit:()=>d==="look",onPress:()=>(d="look",H())}),X("LINE 윤곽",{cls:"small",lit:()=>d==="line",onPress:()=>(d="line",H())}));function H(){F.textContent="",F.append(...nn(S,d,()=>Tt(),H)),Tt()}const N=M("i",{class:"make-bar"}),J=M("div",{class:"keys make-foot"},X("◀ 객체",{cls:"small",onPress:()=>(s="board",T())}),X("다음 ▶ 담기",{cls:"small go",onPress:async()=>{if(!i||l)return;l=!0,F.remove(),L.remove(),J.textContent="",q.append(M("p",{class:"hint"},"객체의 루프를 한 바퀴 재생하며 오너먼트로 담고 있어요…"));const ot=`orn${Date.now().toString(36)}`,$=await $a(e,S,i,ot,G=>N.style.width=`${G*100}%`).catch(G=>(Ve("orn",String(G)),null));if(l=!1,!$||!u){u&&(ft("객체를 담지 못했어요 — 다시 해 보세요",2200),T());return}const z=[];for(let G=0;G<$.clip.n;G++){const nt=await gn(`clip:${ot}:${G}`);nt&&z.push(nt)}const j=S.src.kind==="image",tt=await xn(j?z.slice(0,1):z,192,96),et=await new Promise(G=>tt.canvas.toBlob(G,"image/webp",.86));if(!et)return ft("오너먼트를 만들지 못했어요",2e3),T();c={sheet:et,n:tt.n,cols:tt.cols,rows:tt.rows,fps:j?1:Math.max(4,Math.min(15,tt.n/Math.max(.2,$.clip.len))),colors:tt.colors},Rt("orn",`made ${tt.n} frames ${tt.cols}x${tt.rows} ${Math.round(et.size/1024)} KB`),i?.dispose(),i=null,s="wish",T()}})),q=M("div",{class:"make-body"},M("div",{class:"parts-wrap"},O),L,F);n.append(M("div",{class:"view make"},m(2,"효과 · 윤곽"),M("div",{class:"make-prog"},N),q,J)),H()}let g={...Fn},b=ao();function R(){const S=c,O=M("canvas",{class:"orn-prev"}),F=new bn({canvas:O,antialias:!0,alpha:!1});F.setPixelRatio(Math.min(2,devicePixelRatio)),F.toneMapping=yn,F.toneMappingExposure=1.15,F.setClearColor(527126);const L=new Mn;L.add(new wn(10334428,3816496,1.3));const H=new kn(13622527,.8);H.position.set(1,3,2),L.add(H);const N=(()=>{const I=document.createElement("canvas");I.width=I.height=64;const _=I.getContext("2d"),Z=_.createRadialGradient(32,32,0,32,32,32);return Z.addColorStop(0,"rgba(255,255,255,1)"),Z.addColorStop(.6,"rgba(255,255,255,0.5)"),Z.addColorStop(1,"rgba(255,255,255,0)"),_.fillStyle=Z,_.fillRect(0,0,64,64),new Tn(I)})(),J=new io;for(let I=0;I<26;I++){const _=new Sn(new An({map:N,color:new En().setHSL([.08,.6,.12,.98,.72][I%5],.8,.6),transparent:!0,opacity:.35,blending:Rn,depthWrite:!1}));_.position.set((Math.random()-.5)*2.4,-.35+(Math.random()-.5)*1.6,-1.2-Math.random()),_.scale.setScalar(.06+Math.random()*.1),J.add(_)}L.add(J);const q=new Pn(32,1,.05,20);q.position.set(0,-.3,1.35),q.lookAt(0,-.32,0);const ot=new io;L.add(ot);let $=null,z=null;const j=S.colors.reduce((I,_)=>[I[0]+_[0],I[1]+_[1],I[2]+_[2]],[0,0,0]).map(I=>I/S.colors.length);Cn(S.sheet).then(I=>{z=I;const _={id:"preview0",n:S.n,cols:S.cols,rows:S.rows,fps:S.fps,colors:S.colors,anchor:0,size:.24,wrapped:!1,silk:In(j),wish:b,made:0,look:g};$=On(_,I,new xe(0,0,0),new xe(0,0,1)),ot.add($.group)});let tt=0,et=null,G=!0;O.style.touchAction="none",O.addEventListener("pointerdown",I=>(et=I.clientX,G=!1,O.setPointerCapture(I.pointerId))),O.addEventListener("pointermove",I=>{et!==null&&(tt+=(I.clientX-et)*.012,et=I.clientX)}),O.addEventListener("pointerup",()=>et=null);const nt=new Bn,dt=new xe,y=()=>{if(!O.isConnected){$?.dispose(),z?.dispose(),F.dispose();return}requestAnimationFrame(y);const I=O.getBoundingClientRect(),_=Math.round(I.width),Z=Math.round(I.height);_&&Z&&(O.width!==Math.round(_*F.getPixelRatio())||O.height!==Math.round(Z*F.getPixelRatio()))&&(F.setSize(_,Z,!1),q.aspect=_/Z,q.updateProjectionMatrix());const lt=Math.min(.1,nt.getDelta()),at=nt.elapsedTime;ro.uTime.value=at,ro.uWind.value=.5,G&&(tt+=lt*.35),q.position.set(Math.sin(tt)*1.35,-.28,Math.cos(tt)*1.35),q.lookAt(0,-.33,0),dt.copy(q.position),$?.update(at,lt,dt),F.render(L,q)},w=M("div",{class:"keys wrap look-keys"});for(const[I,_,Z]of Ln){const lt=I==="lenti"&&S.n<2;w.append(X(M("span",{class:"kf col"},M("b",null,_),M("small",null,Z)),{cls:`small lk${lt?" off":""}`,lit:()=>g[I],onPress:()=>{if(lt)return ft("사진은 프레임이 하나라 렌티큘러가 없어요 — 영상으로 만들면 돼요",2e3);g={...g,[I]:!g[I]},$?.setLook(g),Tt()}}))}w.append(X(M("span",{class:"kf col"},M("b",null,"福"),M("small",null,"복주머니로")),{cls:"small lk",lit:()=>!!$?.data.wrapped,onPress:()=>{$&&($.setWrapped(!$.data.wrapped),Tt())}}));const k=M("input",{class:"name-in wish-in",maxlength:"16",placeholder:b});let P=0;k.addEventListener("input",()=>{clearTimeout(P),P=window.setTimeout(()=>$?.setWish(k.value.trim()||b),250)});const U=X("다른 문구",{cls:"small",onPress:()=>{b=ao(b),k.placeholder=b,k.value.trim()||$?.setWish(b)}}),V=M("div",{class:"make-body"},M("div",{class:"parts-wrap orn-wrap"},O),w,M("div",{class:"wish-row"},k,U),M("p",{class:"hint"},"A–G를 눌러 입체 표현을 켜고 끄며 확인하세요(F를 켜면 A·B 대신 겹 종이로 보여요). 미리보기를 끌면 돌려 볼 수 있어요. 소원을 비워 두면 흐린 글씨의 문구가 적혀요.")),st=M("div",{class:"keys make-foot"},X("◀ 다시 꾸미기",{cls:"small",onPress:()=>(s="style",T())}),X("트리에 걸기 ▶",{cls:"small go",onPress:()=>v({...S,wish:k.value.trim()||b,name:a?.name??"",look:{...g}})}));n.append(M("div",{class:"view make"},m(3,"모양 · 소원 · 걸기"),V,st)),requestAnimationFrame(y)}function T(){n.textContent="",s==="board"?(h.scr.prepend(e.canvas),n.append(h.root),h.root.querySelectorAll(":scope > .orn-head").forEach(S=>S.remove()),h.root.prepend(m(1,"객체 · 사진이나 영상에서 오리기"))):s==="style"?x():R(),Tt()}T();const E=()=>{if(!u||(requestAnimationFrame(E),document.hidden))return;const S=vt();if(s==="board"){const O=h.frame(S,ht.beatAt(S));Bo(O.used),fe.setVoices([]),e.render(O.fr)}else s==="style"&&i&&a&&!l&&(i.tick(S),r=sn(e,a,i,r,.76*f)??r,Bo(new Set([i])),r&&e.render({bg:{kind:"none"},dim:0,layers:[{...r}],beat:S*2,pulse:0,bgFx:!1}))};return requestAnimationFrame(E),{root:t,get step(){return s},board:h}}export{Va as openMaker};
