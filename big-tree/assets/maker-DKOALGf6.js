const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dist-S6279hK-.js","./index-DlkYYufl.js","./dist-CMuHfCEm.js"])))=>i.map(i=>d[i]);
import{s as H,c as rt,M as jo,E as Qt,S as Ye,l as Ct,f as Ko,e as he,w as Xe,a as _e,_ as qt,b as Yo,o as Xo,N as Zo,p as Qo,d as Jo,g as tn,r as Ze,h as en,i as on,W as nn,A as sn,j as an,H as rn,D as ln,C as cn,G as Qe,k as un,m as fn,n as hn,q as dn,P as mn,t as pn,u as vn,v as gn,V as de,x as xn,L as bn,y as yn,z as Je}from"./index-D63DMdCY.js";class Mn{ctx=null;sfxBus;recDest;xy;analyser;noiseBuf;ready=[];whenReady(e){this.ctx?e(this.ctx):this.ready.push(e)}ensure(){if(this.ctx)return this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx;let e;try{e=new AudioContext({latencyHint:"interactive",sampleRate:48e3})}catch{e=new AudioContext({latencyHint:"interactive"})}this.ctx=e,this.recDest=e.createMediaStreamDestination(),this.sfxBus=e.createGain(),this.sfxBus.gain.value=.45,this.sfxBus.connect(e.destination),this.xy=e.createAnalyser(),this.xy.fftSize=2048,this.xy.smoothingTimeConstant=0,this.analyser=e.createAnalyser(),this.analyser.fftSize=512,this.analyser.smoothingTimeConstant=.6;const t=e.sampleRate*2;this.noiseBuf=e.createBuffer(1,t,e.sampleRate);const n=this.noiseBuf.getChannelData(0);for(let s=0;s<t;s++)n[s]=Math.random()*2-1;return this.ready.splice(0).forEach(s=>s(e)),e}fbuf=new Uint8Array(256);bass(){if(!this.ctx||!this.analyser)return 0;this.analyser.getByteFrequencyData(this.fbuf);let e=0;for(let t=1;t<8;t++)e+=this.fbuf[t];return Math.max(0,e/1785-.25)/.75}noise(e,t=0){const n=this.ctx,s=n.createBufferSource();return s.buffer=this.noiseBuf,s.start(t||n.currentTime,Math.random(),e+.05),s}play(e,t=.5){if(!H.audio.sfx||e==="none")return;const n=this.ensure(),s=n.currentTime,a=this.sfxBus,i=(r,c,l,u)=>{r.gain.setValueAtTime(1e-4,s),r.gain.exponentialRampToValueAtTime(l,s+c),r.gain.exponentialRampToValueAtTime(1e-4,s+u)};switch(e){case"click":case"clack":{const r=this.noise(.03),c=n.createBiquadFilter();c.type="bandpass",c.frequency.value=e==="click"?3200:1800,c.Q.value=1.2;const l=n.createGain();i(l,.001,e==="click"?.7:.9,.035),r.connect(c).connect(l).connect(a);const u=n.createOscillator();u.frequency.setValueAtTime(e==="click"?180:120,s),u.frequency.exponentialRampToValueAtTime(60,s+.04);const f=n.createGain();i(f,.001,.35,.05),u.connect(f).connect(a),u.start(s),u.stop(s+.06);break}case"whoosh":case"swish":{const r=Math.max(.18,Math.min(t,1.2)),c=this.noise(r),l=n.createBiquadFilter();l.type="bandpass",l.Q.value=e==="whoosh"?2.5:4,l.frequency.setValueAtTime(e==="whoosh"?300:900,s),l.frequency.exponentialRampToValueAtTime(e==="whoosh"?2600:5e3,s+r*.6),l.frequency.exponentialRampToValueAtTime(500,s+r);const u=n.createGain();u.gain.setValueAtTime(1e-4,s),u.gain.exponentialRampToValueAtTime(e==="whoosh"?.9:.5,s+r*.45),u.gain.exponentialRampToValueAtTime(1e-4,s+r);const f=n.createStereoPanner();f.pan.setValueAtTime(-.7,s),f.pan.linearRampToValueAtTime(.7,s+r),c.connect(l).connect(u).connect(f).connect(a);break}case"ding":{for(const[r,c]of[[0,1318.5],[1,1975.5]]){const l=s+r*.09,u=n.createOscillator(),f=n.createOscillator(),m=n.createGain();f.frequency.value=c*3.5,m.gain.setValueAtTime(c*1.2,l),m.gain.exponentialRampToValueAtTime(1,l+.6),f.connect(m).connect(u.frequency),u.frequency.value=c;const p=n.createGain();p.gain.setValueAtTime(1e-4,l),p.gain.exponentialRampToValueAtTime(.35,l+.005),p.gain.exponentialRampToValueAtTime(1e-4,l+.9),u.connect(p).connect(a),u.start(l),f.start(l),u.stop(l+1),f.stop(l+1)}break}case"zap":{const r=n.createOscillator();r.type="square",r.frequency.setValueAtTime(1800,s),r.frequency.exponentialRampToValueAtTime(90,s+.25);const c=n.createBiquadFilter();c.type="lowpass",c.frequency.value=2400;const l=n.createGain();i(l,.003,.25,.28),r.connect(c).connect(l).connect(a),r.start(s),r.stop(s+.3);break}case"thud":{const r=n.createOscillator();r.frequency.setValueAtTime(140,s),r.frequency.exponentialRampToValueAtTime(38,s+.35);const c=n.createGain();i(c,.002,1,.45),r.connect(c).connect(a),r.start(s),r.stop(s+.5);const l=this.noise(.4),u=n.createBiquadFilter();u.type="highpass",u.frequency.value=2500;const f=n.createGain();i(f,.002,.4,.35),l.connect(u).connect(f).connect(a);break}case"static":case"surf":{const r=e==="surf"?.22:.4,c=this.noise(r),l=n.createBiquadFilter();l.type="bandpass",l.frequency.value=2200,l.Q.value=.6;const u=n.createGain();u.gain.setValueAtTime(.5,s),u.gain.setValueAtTime(.5,s+r*.7),u.gain.exponentialRampToValueAtTime(1e-4,s+r),c.connect(l).connect(u).connect(a),e==="surf"&&this.play("clack");break}case"beep":{const r=n.createOscillator();r.type="square",r.frequency.value=1e3;const c=n.createGain();c.gain.setValueAtTime(.12,s),c.gain.setValueAtTime(1e-4,s+.09),r.connect(c).connect(a),r.start(s),r.stop(s+.1);break}case"power":{const r=n.createOscillator();r.type="sawtooth",r.frequency.setValueAtTime(15734/2,s);const c=n.createGain();c.gain.setValueAtTime(1e-4,s),c.gain.exponentialRampToValueAtTime(.02,s+.05),c.gain.exponentialRampToValueAtTime(1e-4,s+1.2),r.connect(c).connect(a),r.start(s),r.stop(s+1.3);const l=this.noise(.12),u=n.createGain();i(u,.002,.6,.12);const f=n.createBiquadFilter();f.type="lowpass",f.frequency.value=600,l.connect(f).connect(u).connect(a);break}}}}const Ot=new Mn;function M(o,e=null,...t){const n=document.createElement(o);if(e)for(const[s,a]of Object.entries(e))a==null||a===!1||(s==="class"?n.className=String(a):s==="style"?n.setAttribute("style",String(a)):s.startsWith("on")&&typeof a=="function"?n.addEventListener(s.slice(2),a):n.setAttribute(s,a===!0?"":String(a)));for(const s of t)s!=null&&s!==!1&&n.append(s);return n}function He(){Ot.play("click"),H.audio.haptics&&navigator.vibrate?.(6)}const ae=[];function wt(){for(let o=ae.length-1;o>=0;o--){const{el:e,f:t}=ae[o];if(e.isConnected){t();continue}const n=e.getRootNode();n instanceof Element&&n.hasAttribute("data-keep")||ae.splice(o,1)}}function Ft(o,e){ae.push({el:o,f:e}),e()}function K(o,e={}){const t=M("button",{class:`key ${e.cls||""}`,type:"button"},typeof o=="string"?M("span",{class:"kf"},o):o),n=e.dot?M("i",{class:"dot"}):null;n&&t.append(n),t.addEventListener("pointerdown",a=>{a.preventDefault(),t.classList.add("down"),e.silent||He(),e.hold&&(t.setPointerCapture(a.pointerId),e.hold(!0))});const s=a=>{t.classList.contains("down")&&(t.classList.remove("down"),e.hold&&e.hold(!1),a&&e.onPress?.())};return t.addEventListener("pointerup",()=>s(!0)),t.addEventListener("pointercancel",()=>s(!1)),t.addEventListener("pointerleave",()=>!e.hold&&t.classList.remove("down")),t.addEventListener("contextmenu",a=>a.preventDefault()),(e.lit||e.dot)&&Ft(t,()=>{e.lit&&t.classList.toggle("lit",!!e.lit()),n&&e.dot&&(n.hidden=!e.dot())}),t}function Mt(o,e,t,n,s,a,i,r){const c=M("span",{class:"sv"}),l=M("div",{class:"spin"},c,M("span",{class:"arr"},M("i"),M("i"))),u=()=>{const d=e[t];c.textContent=Number.isInteger(a)?String(Math.round(d)):d.toFixed(a<.1?2:1)},f=d=>{d=Math.max(n,Math.min(s,Math.round(d/a)*a)),d=+d.toFixed(4),d!==e[t]&&(e[t]=d,u(),r?.(),rt())};let m=0,p=0,h=!1;return l.addEventListener("pointerdown",d=>{l.setPointerCapture(d.pointerId),m=d.clientY,p=e[t],h=!1,l.classList.add("down")}),l.addEventListener("pointermove",d=>{if(!l.hasPointerCapture(d.pointerId))return;const g=m-d.clientY;if(Math.abs(g)>4&&(h=!0),!h)return;const x=Math.trunc(g/6),A=(s-n)/a>60?Math.max(1,Math.abs(x)/6):1;f(p+x*a*A)}),l.addEventListener("pointerup",d=>{if(l.classList.remove("down"),!h){const g=l.getBoundingClientRect();f(e[t]+(d.clientY<g.top+g.height/2?a:-a)),He()}}),Ft(l,u),M("div",{class:"ctl"},M("label",null,o),l)}function to(o,e,t,n,s,a=""){const i=M("div",{class:`keys ${a}`});for(const[r,c]of n)i.append(K(c,{cls:"small",lit:()=>e[t]===r,onPress:()=>{e[t]=r,s?.(),rt()}}));return o?M("div",{class:"ctl"},M("label",null,o),i):i}function Ae(o,e,t,n){return K(o,{cls:"small",lit:()=>!!e[t],onPress:()=>{e[t]=!e[t],n?.(),rt()}})}const wn=["#f0f0f0","#ff3030","#ffe030","#30ff40","#30e0ff","#3050ff","#ff40ff","#c070ff","#101010"];function kn(o,e,t,n=wn){const s=M("div",{class:"chips"});for(const a of n){const i=M("button",{class:"chip",type:"button",style:`background:${a}`});i.addEventListener("click",()=>{e[t]=a,He(),rt()}),Ft(i,()=>i.classList.toggle("lit",e[t]===a)),s.append(i)}return M("div",{class:"ctl"},M("label",null,o),s)}let Jt=null,eo=0;function lt(o,e=2600){Jt?.remove(),Jt=M("div",{class:"toast"},o);const t=document.querySelectorAll("body > .sheet-full");(t[t.length-1]??document.querySelector(".screen"))?.append(Jt),clearTimeout(eo);const n=Jt;eo=window.setTimeout(()=>n.remove(),e)}function Tn(o,e=!1){return new Promise(t=>{const n=M("input",{type:"file",accept:o,style:"display:none"});e&&(n.multiple=!0),n.addEventListener("change",()=>{t(Array.from(n.files||[])),n.remove()}),document.body.append(n),n.click()})}function Sn(){const o=H.output.aspect;document.documentElement.style.setProperty("--out-aspect",o.replace(":","/")),document.documentElement.toggleAttribute("data-wide",o==="16:9"||o==="4:3")}const An=`#version 300 es
out vec2 vUv;
void main(){
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;class Eo{constructor(e){this.v=e}}const it=o=>new Eo(o);class Rn{constructor(e,t,n){this.gl=e,this.prog=t,this.name=n}locs=new Map;loc(e){let t=this.locs.get(e);return t===void 0&&(t=this.gl.getUniformLocation(this.prog,e),this.locs.set(e,t)),t}}class En{constructor(e){this.gl=e,this.vao=e.createVertexArray()}vao;program(e,t,n=An){const s=this.gl,a=(r,c)=>{const l=s.createShader(r);if(s.shaderSource(l,c),s.compileShader(l),!s.getShaderParameter(l,s.COMPILE_STATUS)){const u=s.getShaderInfoLog(l),f=c.split(`
`).map((h,d)=>`${d+1}: ${h}`),m=/0:(\d+)/.exec(u||""),p=m?f.slice(Math.max(0,+m[1]-4),+m[1]+2).join(`
`):"";throw new Error(`[${t}] shader compile failed: ${u}
${p}`)}return l},i=s.createProgram();if(s.attachShader(i,a(s.VERTEX_SHADER,n)),s.attachShader(i,a(s.FRAGMENT_SHADER,e)),s.linkProgram(i),!s.getProgramParameter(i,s.LINK_STATUS))throw new Error(`[${t}] link failed: ${s.getProgramInfoLog(i)}`);return new Rn(s,i,t)}texture(e=WebGL2RenderingContext.LINEAR,t=WebGL2RenderingContext.CLAMP_TO_EDGE){const n=this.gl,s=n.createTexture();return n.bindTexture(n.TEXTURE_2D,s),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,t),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,t),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),s}target(e,t,n=WebGL2RenderingContext.LINEAR){const s=this.gl,a=this.texture(n);s.texImage2D(s.TEXTURE_2D,0,s.RGBA8,e,t,0,s.RGBA,s.UNSIGNED_BYTE,null);const i=s.createFramebuffer();return s.bindFramebuffer(s.FRAMEBUFFER,i),s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,a,0),s.clearColor(0,0,0,1),s.clear(s.COLOR_BUFFER_BIT),s.bindFramebuffer(s.FRAMEBUFFER,null),{fb:i,tex:a,w:e,h:t}}freeTarget(e){e&&(this.gl.deleteFramebuffer(e.fb),this.gl.deleteTexture(e.tex))}draw(e,t,n,s,a){const i=this.gl;i.bindFramebuffer(i.FRAMEBUFFER,t?t.fb:null);const r=a?a[2]:t?t.w:s[0],c=a?a[3]:t?t.h:s[1];a?i.viewport(a[0],a[1],a[2],a[3]):i.viewport(0,0,r,c),this.bindUniforms(e,n,r,c),i.bindVertexArray(this.vao),i.drawArrays(i.TRIANGLES,0,3)}bindUniforms(e,t,n,s){const a=this.gl;a.useProgram(e.prog);let i=0;const r=e.loc("uRes");r&&a.uniform2f(r,n,s);for(const c in t){const l=t[c],u=e.loc(c);u!==null&&(typeof l=="number"?a.uniform1f(u,l):l instanceof Eo?a.uniform1i(u,l.v):Array.isArray(l)?l.length===2?a.uniform2f(u,l[0],l[1]):l.length===3?a.uniform3f(u,l[0],l[1],l[2]):l.length===4&&a.uniform4f(u,l[0],l[1],l[2],l[3]):l&&(a.activeTexture(a.TEXTURE0+i),a.bindTexture(a.TEXTURE_2D,l),a.uniform1i(u,i),i++))}}setArray(e,t,n,s){const a=this.gl;a.useProgram(e.prog);const i=e.loc(t+"[0]")??e.loc(t);i&&(n===1?a.uniform1fv(i,s):n===3?a.uniform3fv(i,s):a.uniform4fv(i,s))}}function Et(o){const e=o.replace("#",""),t=parseInt(e.length===3?e.split("").map(n=>n+n).join(""):e,16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}const Z=`#version 300 es
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
`,Pn=Z+`
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
`,In=Z+`
uniform sampler2D uSrc;
void main(){ outColor = vec4(texture(uSrc, vUv).rgb, 1.); }
`,Cn=Z+`
uniform sampler2D uSrc;
uniform float uDecay;
void main(){
  vec3 c = texture(uSrc, vUv).rgb * uDecay;
  c = max(c - 1. / 255., 0.);
  outColor = vec4(c, 1.);
}
`,On=`#version 300 es
in vec2 aPos;
in float aAcross;
in float aI;
out float vAcross;
out float vI;
void main(){ vAcross = aAcross; vI = aI; gl_Position = vec4(aPos, 0., 1.); }
`,Fn=`#version 300 es
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
`,qe=`
vec4 enc(vec2 c){ return vec4(floor(c.x / 256.), mod(c.x, 256.), floor(c.y / 256.), mod(c.y, 256.)) / 255.; }
vec2 dec(vec4 v){ v = floor(v * 255. + .5); return vec2(v.r * 256. + v.g, v.b * 256. + v.a); }
`,Ln=Z+qe+`
uniform sampler2D uMask;
void main(){
  float a = texelFetch(uMask, ivec2(gl_FragCoord.xy), 0).r;
  outColor = a > .5 ? enc(floor(gl_FragCoord.xy)) : vec4(1.);
}
`,Bn=Z+qe+`
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
`,Dn=Z+qe+`
uniform sampler2D uSrc;
uniform float uMaxD;
void main(){
  vec2 me = floor(gl_FragCoord.xy);
  vec2 s = dec(texelFetch(uSrc, ivec2(me), 0));
  float d = s.x > 65000. ? 1. : clamp(distance(s, me) / uMaxD, 0., 1.);
  outColor = vec4(d, d, d, 1.);
}
`,Un=Z+`
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
`,Nn=Z+`
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
`,_n=Z+`
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
`,Hn=Z+`
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
`,qn=Z+`
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
`,$n=Z+`
uniform sampler2D uSrc;
uniform sampler2D uCg;
uniform float uOn;
void main(){
  vec3 c = texture(uSrc, vUv).rgb;
  if (uOn > .5){ vec4 g = texture(uCg, vUv); c = c * (1. - g.a) + g.rgb; }
  outColor = vec4(c, 1.);
}
`,Po=`
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
`,Gn=Z+Po+`
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
`,Wn=Z+Po+`
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
`,$e=`
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
`,Vn=Z+$e+`
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
`,zn=Z+$e+`
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
`,jn=Z+`
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
`,Kn=Z+`
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
`,Yn=Z+`
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
`,Xn=Z+$e+`
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
`,Zn=Z+`
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
`,Qn=Z+`
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
`,Jn=Z+`
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
`,ts=Z+`
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
`,es=Z+`
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
`,os=Z+`
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
`;class ns{video;stream=null;facing=null;pending=null;error="";busy=!1;onError=null;constructor(){this.video=document.createElement("video"),this.video.muted=!0,this.video.playsInline=!0,this.video.setAttribute("playsinline","")}get ready(){return!!this.stream&&this.video.readyState>=2&&this.video.videoWidth>0}want(e){e===this.facing||e===this.pending||(this.pending=e,this.busy||this.apply())}async apply(){this.busy=!0;try{for(;this.pending!==this.facing;){const e=this.pending;if(this.stop(),e)try{const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:e},width:{ideal:1280},height:{ideal:720},frameRate:{ideal:30}},audio:!1});this.stream=t,this.video.srcObject=t,await this.video.play().catch(()=>{}),this.error=""}catch(t){this.error=t.name||"ERR",this.pending=null,this.onError?.(this.error)}if(this.facing=this.stream?e:null,!this.stream)break}}finally{this.busy=!1}}stop(){this.stream?.getTracks().forEach(e=>e.stop()),this.stream=null,this.video.srcObject=null,this.facing=null}}function ss(o,e,t){const n=o/e;return n>t?[t/n,1,0,0]:[1,n/t,0,0]}const It='"Galmuri11", monospace',oo=["#ff3030","#ffe030","#30ff60","#30e0ff","#5050ff","#ff40ff"];function me(o,e,t,n){o.font=`bold ${n}px ${It}`;const s=o.measureText(e).width;return s>t?Math.floor(n*t/s):n}function Dt(o,e,t,n,s,a,i,r="center"){o.font=`bold ${s}px ${It}`,o.textAlign=r,o.textBaseline="middle";const c=Math.max(2,Math.round(s/11));if(a==="neg"){const l=o.measureText(e).width,u=r==="center"?t-l/2:t;o.fillStyle="#f0f0f0",o.fillRect(Math.round(u-c*3),Math.round(n-s*.62),Math.round(l+c*6),Math.round(s*1.24)),o.fillStyle="#0a0a0a",o.fillText(e,t,n);return}o.fillStyle="#000";for(const[l,u]of[[-c,0],[c,0],[0,-c],[0,c],[-c,-c],[c,c],[-c,c],[c,-c]])o.fillText(e,t+l,n+u);if(a==="cycle"){const l=[...e];let u=0;const f=l.map(d=>o.measureText(d).width),m=f.reduce((d,g)=>d+g,0);let p=r==="center"?t-m/2:t;const h=Math.floor(i*8);o.textAlign="left",l.forEach((d,g)=>{o.fillStyle=oo[(g+h)%oo.length],o.fillText(d,p,n),p+=f[g],u+=f[g]})}else o.fillStyle="#f4f4f4",o.fillText(e,t,n)}class as{canvas=document.createElement("canvas");ctx=this.canvas.getContext("2d");standby=document.createElement("canvas");label=document.createElement("canvas");start=0;serial=-1;visible=!1;constructor(){document.fonts.load('22px "Galmuri11"',"가A1").then(()=>this.drawStatic())}resize(e,t){this.canvas.width===e&&this.canvas.height===t||(this.canvas.width=e,this.canvas.height=t,this.drawStatic())}drawStatic(){const e=this.canvas.width||720,t=this.canvas.height||1280;this.standby.width=e,this.standby.height=t;const n=this.standby.getContext("2d");n.fillStyle="#000",n.fillRect(0,0,e,t);const s=this.label;s.width=400,s.height=100;const a=s.getContext("2d");a.clearRect(0,0,400,100),a.fillStyle="#000",a.fillRect(70,28,260,44),a.font=`bold 33px ${It}`,a.textAlign="center",a.textBaseline="middle",a.fillStyle="#e8e8e8",a.fillText("NO SIGNAL",200,51)}render(e,t=e){const n=H.cg,s=this.canvas.width,a=this.canvas.height,i=this.ctx;if(n.serial!==this.serial&&(this.serial=n.serial,this.start=e),this.visible=n.mode!=="off"||n.tc||n.sat,!this.visible)return!1;i.clearRect(0,0,s,a),i.imageSmoothingEnabled=!1;const r=Math.min(s,a)/10,c=e-this.start,l=u=>u.slice(0,Math.floor(c*30));if(n.mode==="title"){const u=me(i,n.title1,s*.9,Math.round(r*1.1));Dt(i,l(n.title1),s/2,a*.47,u,n.style,c),n.title2&&Dt(i,l(n.title2),s/2,a*.47+u*1.3,Math.round(u*.55),n.style==="cycle"?"chyron":n.style,c)}else if(n.mode==="lower"){const u=me(i,n.lower1,s*.86,Math.round(r*.62));Dt(i,l(n.lower1),r*.5,a*.78,u,n.style,c,"left"),Dt(i,l(n.lower2),r*.5,a*.78+u*1.25,Math.round(u*.7),n.style==="cycle"?"chyron":n.style,c,"left")}else if(n.mode==="crawl"){const u=Math.round(r*.5);i.font=`bold ${u}px ${It}`;const f=i.measureText(n.crawl).width+r,m=s-Math.floor(c*60)*Math.round(r*.03)%(f+s);i.fillStyle="#000",i.fillRect(0,Math.round(a*.88-u*.8),s,Math.round(u*1.6)),Dt(i,n.crawl,m,a*.88,u,n.style,c,"left")}else if(n.mode==="doc"){const u=n.docTop.split(`
`),f=Math.round(r*.3);i.font=`${f}px ${It}`,i.textAlign="center",i.textBaseline="middle",u.forEach((g,x)=>{i.fillStyle="#000",i.fillText(l(g),s/2+1,r*.7+x*f*1.3+1),i.fillStyle="#b8b8b8",i.fillText(l(g),s/2,r*.7+x*f*1.3)});const m=n.doc.split(`
`).filter(g=>g.trim()),p=m.reduce((g,x)=>g.length>x.length?g:x,""),h=me(i,p,s*.9,Math.round(r*.5)),d=a*.5-(m.length-1)*h*1.25/2;m.forEach((g,x)=>Dt(i,l(g.toUpperCase()),s/2,d+x*h*1.25,h,"chyron",c))}else if(n.mode==="credits"){const u=n.credits.split(`
`),f=Math.round(r*.7),m=a-Math.floor(c*30)*Math.max(1,Math.round(r*.04))%(u.length*f+a);u.forEach((p,h)=>{if(!p.trim())return;const d=h===0||!u[h-1].trim();Dt(i,p,s/2,m+h*f,Math.round(d?r*.32:r*.5),d?"chyron":n.style,c)})}if(n.tc&&n.tcBig){const u=Math.round(r*.62),f=t+660+56,m=Math.floor(f%1*30),p=[Math.floor(f/3600)%24,Math.floor(f/60)%60,Math.floor(f)%60,m].map(d=>String(d).padStart(2,"0")).join(" ");i.font=`bold ${u}px ${It}`;const h=i.measureText(p).width;i.fillStyle="#000",i.fillRect(Math.round(s/2-h/2-10),Math.round(a*.8-u*.7),Math.round(h+20),Math.round(u*1.4)),i.fillStyle="#f4f4f4",i.textAlign="center",i.textBaseline="middle",i.fillText(p,s/2,a*.8)}else if(n.tc){const u=Math.round(r*.36),f=e,m=Math.floor(f%1*30),p=`${String(Math.floor(f/3600)%24).padStart(2,"0")}:${String(Math.floor(f/60)%60).padStart(2,"0")}:${String(Math.floor(f)%60).padStart(2,"0")}:${String(m).padStart(2,"0")}`;i.font=`bold ${u}px ${It}`;const h=i.measureText(p).width;i.fillStyle="#000",i.fillRect(Math.round(s/2-h/2-6),Math.round(a-r*.9),Math.round(h+12),Math.round(u*1.4)),i.fillStyle="#fff",i.textAlign="center",i.textBaseline="top",i.fillText(p,s/2,Math.round(a-r*.9+u*.2))}if(n.sat){const u=Math.round(r*.3);i.font=`bold ${u}px ${It}`,i.textAlign="left",i.textBaseline="top",Math.floor(e*1.5)%2===0&&(i.fillStyle="#000",i.fillRect(Math.round(r*.3),Math.round(r*.35),Math.round(r*4.6),Math.round(u*1.5)),i.fillStyle="#ffe040",i.fillText("LIVE VIA SATELLITE",Math.round(r*.4),Math.round(r*.35+u*.25)))}return!0}}const vt=(o,e)=>{o.fillStyle=e,o.fill(),o.lineWidth=5,o.strokeStyle="#111",o.stroke()},te=[o=>{o.beginPath(),o.moveTo(18,92),o.bezierCurveTo(30,40,60,12,92,6),o.bezierCurveTo(80,40,56,70,18,92),vt(o,"#f4f0e0"),o.beginPath(),o.moveTo(18,92),o.lineTo(80,20),o.stroke();for(let e=0;e<6;e++)o.beginPath(),o.moveTo(30+e*9,78-e*10),o.lineTo(42+e*9,76-e*12),o.stroke()},o=>{o.beginPath(),o.ellipse(32,76,16,12,-.4,0,Math.PI*2),vt(o,"#111"),o.fillRect(44,14,7,62),o.beginPath(),o.moveTo(51,14),o.quadraticCurveTo(80,26,74,52),o.quadraticCurveTo(70,34,51,32),vt(o,"#111")},o=>{o.beginPath(),o.roundRect(34,8,32,48,16),vt(o,"#c8c8d0");for(let e=0;e<4;e++)o.beginPath(),o.moveTo(36,18+e*9),o.lineTo(64,18+e*9),o.stroke();o.beginPath(),o.moveTo(24,46),o.quadraticCurveTo(50,80,76,46),o.stroke(),o.fillStyle="#111",o.fillRect(46,64,8,22),o.fillRect(32,86,36,7)},o=>{o.beginPath(),o.moveTo(12,38),o.lineTo(34,38),o.lineTo(62,14),o.lineTo(62,86),o.lineTo(34,62),o.lineTo(12,62),o.closePath(),vt(o,"#f0d040");for(let e=0;e<3;e++)o.beginPath(),o.arc(62,50,14+e*12,-.7,.7),o.stroke()},o=>{o.beginPath(),o.ellipse(50,48,36,42,0,0,Math.PI*2),vt(o,"#f8f0c8"),o.fillStyle="#111",o.beginPath(),o.ellipse(36,38,8,5,-.3,0,Math.PI*2),o.ellipse(64,38,8,5,.3,0,Math.PI*2),o.fill(),o.beginPath(),o.arc(50,56,18,.15,Math.PI-.15),o.closePath(),o.fill()},o=>{o.beginPath(),o.ellipse(50,48,36,42,0,0,Math.PI*2),vt(o,"#a0c8f0"),o.fillStyle="#111",o.beginPath(),o.ellipse(36,40,8,5,.4,0,Math.PI*2),o.ellipse(64,40,8,5,-.4,0,Math.PI*2),o.fill(),o.beginPath(),o.arc(50,78,16,Math.PI+.3,-.3),o.lineWidth=6,o.stroke()},o=>{o.beginPath(),o.ellipse(50,52,42,34,-.2,0,Math.PI*2),vt(o,"#d8a868"),["#e02020","#2050e0","#20c040","#f0e020","#f0f0f0"].forEach((t,n)=>{o.beginPath(),o.arc(26+n*13,40+n%2*10,6,0,Math.PI*2),o.fillStyle=t,o.fill(),o.lineWidth=2,o.stroke()}),o.beginPath(),o.arc(66,66,8,0,Math.PI*2),o.fillStyle="#3a2410",o.fill()},o=>{o.beginPath(),o.moveTo(20,76),o.quadraticCurveTo(30,66,30,44),o.quadraticCurveTo(30,14,50,14),o.quadraticCurveTo(70,14,70,44),o.quadraticCurveTo(70,66,80,76),o.closePath(),vt(o,"#f0c030"),o.beginPath(),o.arc(50,82,8,0,Math.PI*2),vt(o,"#f0c030")},o=>{o.beginPath();for(let e=0;e<10;e++){const t=e%2?18:44,n=e/10*Math.PI*2-Math.PI/2;o.lineTo(50+Math.cos(n)*t,52+Math.sin(n)*t)}o.closePath(),vt(o,"#ff60c0")}],no=["#1830a0","#c02040","#108050","#d07010","#7020a0","#101010","#e0d8c0"];function is(o,e,t){const n=["#c0c0c0","#c0c000","#00c0c0","#00c000","#c000c0","#c00000","#0000c0"];o.fillStyle="#f4f4f4",o.fillRect(-e/2-8,-t/2-8,e+16,t+16),n.forEach((s,a)=>{o.fillStyle=s,o.fillRect(-e/2+a*e/7,-t/2,e/7+1,t*.7)}),["#0000c0","#111","#c000c0","#111","#00c0c0","#111","#c0c0c0"].forEach((s,a)=>{o.fillStyle=s,o.fillRect(-e/2+a*e/7,-t/2+t*.7,e/7+1,t*.08)}),o.fillStyle="#101010",o.fillRect(-e/2,-t/2+t*.78,e,t*.22),o.fillStyle="#f0f0f0",o.fillRect(-e/2+e*.16,-t/2+t*.78,e*.16,t*.22)}class rs{canvas=document.createElement("canvas");last=-1;stamp=0;update(e,t,n){const s=Math.min(1,720/Math.max(t,n)),a=Math.round(t*s),i=Math.round(n*s);if(e===this.last&&this.canvas.width===a)return!1;this.last=e,this.canvas.width=a,this.canvas.height=i;const r=this.canvas.getContext("2d"),c=h=>{const d=Math.sin(e*12.9898+h*78.233)*43758.5453;return d-Math.floor(d)};r.fillStyle=no[Math.floor(c(1)*no.length)],r.fillRect(0,0,a,i),r.strokeStyle="rgba(255,255,255,0.18)",r.lineWidth=10;for(let h=1;h<8;h++)r.strokeRect(a/2-h*a*.07,i/2-h*i*.07,h*a*.14,h*i*.14);const l=te[Math.floor(c(2)*te.length)],u=te[Math.floor(c(3)*te.length)],f=Math.min(a,i)*.28;for(const[h,d]of[[1,1],[-1,1],[1,-1],[-1,-1]])r.save(),r.translate(a/2+h*a*.3,i/2+d*i*.32),r.scale(h*f/100,d*f/100),r.translate(-50,-50),l(r),r.restore(),r.save(),r.translate(a/2+h*a*.36,i/2+(d>0?.04:-.04)*i),r.scale(h*f*.7/100,f*.7/100),r.translate(-50,-50),d>0&&u(r),r.restore();r.save(),r.translate(a/2,i/2),r.rotate((c(4)-.5)*.9);const m=a*.5,p=m*.75;return r.fillStyle="rgba(0,0,0,0.45)",r.fillRect(-m/2+10,-p/2+12,m+16,p+16),is(r,m,p),r.restore(),this.stamp++,!0}}const zt=900,Pt=new Float32Array(zt*2),ee=new Float32Array(2048);function ls(o,e){const t=H.synth;if(t.mode===1){let a=!1;if(Ot.ctx&&Ot.xy){Ot.xy.getFloatTimeDomainData(ee);for(let c=0;c<64;c++)Math.abs(ee[c*16])>.002&&(a=!0)}const i=37,r=2.6*t.gain;for(let c=0;c<zt;c++)if(a){const l=ee[c*2%(2048-i)],u=ee[(c*2+i)%2048],f=Math.atan2(u,l)+c*.0021*t.fx,m=Math.min(1.2,Math.hypot(l,u)*r);Pt[c*2]=Math.cos(f)*m,Pt[c*2+1]=Math.sin(f)*m}else Pt[c*2]=(Math.random()-.5)*.02,Pt[c*2+1]=(Math.random()-.5)*.02;return Pt}const n=o*t.drift,s=.82*(1+e*.15)*t.gain;for(let a=0;a<zt;a++){const i=a/(zt-1)*Math.PI*2;let r,c;if(t.mode===2){const l=t.fx/Math.max(1,t.fy),u=Math.cos(l*i*t.fy+n)*s;r=u*Math.cos(i*t.fy),c=u*Math.sin(i*t.fy)}else r=Math.sin(t.fx*i+n)*s,c=Math.sin(t.fy*i)*s;Pt[a*2]=r,Pt[a*2+1]=c}return Pt}function cs(o,e,t,n,s){const a=o.length/2,i=t/n*2;let r=0;for(let c=0;c<a-1;c++){const l=o[c*2]/e,u=o[c*2+1],f=o[c*2+2]/e,m=o[c*2+3];let p=f-l,h=m-u;const d=Math.hypot(p*e,h)||1e-6,g=Math.min(1.6,.012/d+.25);p/=d,h/=d;const x=-h*i/e,b=p*i,A=[[l+x,u+b,1],[l-x,u-b,-1],[f+x,m+b,1],[f+x,m+b,1],[l-x,u-b,-1],[f-x,m-b,-1]];for(const[S,E,T]of A)s[r++]=S,s[r++]=E,s[r++]=T,s[r++]=g}return r/4}const us=(zt-1)*6*4,Re=[{id:"none",name:"NONE",ko:"원본"},{id:"paikabe",name:"PAIK-ABE",ko:"윤곽+색면",a:"LINES",b:"SMEAR",hist:!0},{id:"ribbon",name:"RIBBON",ko:"흰 리본",a:"LEVEL",b:"WIDTH"},{id:"rutt",name:"RUTT",ko:"주사선 등고선",a:"HEIGHT",b:"LINES"},{id:"breakup",name:"BREAK-UP",ko:"픽셀 깨짐",a:"BLOCK",b:"AMOUNT"},{id:"poster2",name:"POSTER 2",ko:"두 색",a:"COLORS"},{id:"lineart",name:"LINE ART",ko:"선화",a:"BACK"},{id:"smear",name:"SMEAR",ko:"흔들린 번짐",a:"AMOUNT",b:"ANGLE",hist:!0},{id:"color",name:"COLOR",ko:"컬러라이저",a:"BANDS",b:"CYCLE"},{id:"mosaic",name:"MOSAIC",ko:"모자이크",a:"SIZE",era:5},{id:"rgb",name:"RGB",ko:"RGB 어긋남",a:"SHIFT",era:7},{id:"solar",name:"SOLAR",ko:"솔라리",a:"FOLD",era:9},{id:"nega",name:"NEGA",ko:"네거티브",era:10},{id:"thermal",name:"THERMAL",ko:"열화상",era:11},{id:"paint",name:"PAINT",ko:"페인트박스",a:"LEVELS",era:12},{id:"neon",name:"NEON",ko:"네온",a:"GAIN",era:13},{id:"halftone",name:"HALFTONE",ko:"망점",a:"CELL",era:16},{id:"led",name:"LED",ko:"전광판",a:"DOTS",era:15},{id:"teletext",name:"TELETEXT",ko:"문자방송",a:"COLS",era:14},{id:"kaleido",name:"KALEIDO",ko:"만화경",a:"SEGS",era:4},{id:"ghost",name:"GHOST",ko:"흰 그림자",a:"DETAIL",era:18}],Io=o=>Re.find(e=>e.id===o)??Re[0],ht=(o,e,t)=>o+(e-o)*t,fs={none:["#ff3a30","#ffe02a","#30c8ff","#c060ff"],paikabe:["#ff5aa0","#40e0ff","#ffe040","#ffffff"],ribbon:["#ffffff","#ffe040","#40e0ff","#ff70c0"],rutt:["#40ff60","#ffb020","#ffffff","#40c0ff"],breakup:["#ff3a30","#30a0ff","#ffe02a","#ffffff"],poster2:["#e02020","#2040e0","#f0c000","#10a050"],lineart:["#1840c0","#c01818","#18a040","#101010"],smear:["#ff8020","#c060ff","#40e0ff","#ffffff"],color:["#ff3a30","#30ff80","#3080ff","#ffe02a"],neon:["#ff40c0","#40e0ff","#a0ff40","#ffe040"],thermal:["#ff4010","#ffe020","#20a0ff","#ffffff"],led:["#ff3020","#40ff40","#ffb020","#40c0ff"],teletext:["#00ffff","#ffff00","#ff00ff","#00ff00"],ghost:["#ffffff","#d8f0ff","#fff2c8","#ead8ff"]},hs=o=>fs[o]??["#ff3a30","#ffe02a","#30c8ff","#c060ff"],Co=o=>o.colors?.[o.id]??"orig",ie=["#ff4070","#40e0ff","#ffe040","#90ff50","#c070ff","#ff8020","#ffffff","#30ffc0"],ds=[["NONE","없음"],["TORN","찢긴 선"],["NEON","네온 번짐"],["RAINBOW","무지개 흐름"],["DOTS","행진 점선"],["ELECTRIC","전기"],["ECHO","메아리 고리"],["CHROME","크롬"],["RIBBON","흰 리본"],["PAIK-ABE","가는 다중선"]],ms=["CIRCLE","RING","RECT","DIAMOND"],so={tap:"TAP",person:"PERSON",luma:"LUMA",chroma:"CHROMA",shape:"SHAPE"};function Wt(o,e){const t=o.track;if(!t||!t.done)return null;const n=t.frames.length,s=(e-t.start)*t.fps,a=l=>{if(l=Math.max(0,Math.min(n-1,l)),t.frames[l])return l;for(let u=1;u<n;u++){if(l-u>=0&&t.frames[l-u])return l-u;if(l+u<n&&t.frames[l+u])return l+u}return-1},i=a(Math.floor(s));if(i<0)return null;let r=a(Math.floor(s)+1);r<0&&(r=i);const c=r===i?0:Math.max(0,Math.min(1,s-Math.floor(s)));return{a:t.frames[i],b:t.frames[r],f:c,w:t.w,h:t.h,ia:i,ib:r,cx:t.cx[i]+(t.cx[r]-t.cx[i])*c,cy:t.cy[i]+(t.cy[r]-t.cy[i])*c}}const ao=new WeakMap;function ps(o,e){const t=o.track;if(!t||!t.done)return null;let n=ao.get(t);if(!n||n.done!==t.done){const p=t.frames.length,h=3,d=new Float32Array(p),g=new Float32Array(p);for(let x=0;x<p;x++){let b=0,A=0,S=0;for(let E=Math.max(0,x-h);E<=Math.min(p-1,x+h);E++)if(t.frames[E]){const T=h+1-Math.abs(E-x);b+=t.cx[E]*T,A+=t.cy[E]*T,S+=T}d[x]=S?b/S:NaN,g[x]=S?A/S:NaN}ao.set(t,n={done:t.done,x:d,y:g})}const s=t.frames.length,a=Math.max(0,Math.min(s-1,(e-t.start)*t.fps)),i=Math.floor(a),r=Math.min(s-1,i+1),c=a-i,l=n.x[i],u=n.x[r],f=n.y[i],m=n.y[r];if(Number.isNaN(l)||Number.isNaN(u)){const p=Number.isNaN(l)?r:i;return Number.isNaN(n.x[p])?null:[n.x[p],n.y[p]]}return[l+(u-l)*c,f+(m-f)*c]}function pe(o){const e=o.track;return o.kind!=="tap"&&o.kind!=="person"?1:e?e.frames.length?e.done/e.frames.length:1:0}const dt=()=>performance.now()/1e3,ct={origin:0,get beat(){return 60/Math.max(30,H.music.bpm)},get step(){return this.beat/4},stepAt(o){return(o-this.origin)/this.step},timeOf(o){return this.origin+o*this.step},next(o,e=1){const t=Math.ceil(this.stepAt(o)/e-1e-4)*e;return this.timeOf(t)},beatAt(o){return this.stepAt(o)/4}},vs={"4:3":[4,3],"9:16":[9,16],"1:1":[1,1],"16:9":[16,9]},Ee=[["#c070ff","#f4f0ff","#2a2aa0","#ffffff"],["#40ff40","#40ff40","#40ff40","#40ff40"],["#ff3030","#ffe030","#30e0ff","#ff40ff"],["#ffffff","#000000","#ffffff","#000000"]],gs=["#1840c0","#18a040","#c01818","#c018a0","#e07010","#101010"],xs=Z+`
uniform sampler2D uA;
uniform sampler2D uB;
uniform float uAmt;
void main(){ outColor = vec4(mix(texture(uA, vUv).rgb, texture(uB, vUv).rgb, uAmt), 1.); }
`,bs=Z+`
uniform sampler2D uSrc;
uniform float uAmt;
void main(){
  vec3 c = texture(uSrc, vUv).rgb;
  // darker and greyer, with a faint checker so the cut-out reads as lifted off
  vec2 g = floor(vUv * uRes / 18.);
  float k = mod(g.x + g.y, 2.) * .035;
  outColor = vec4(mix(c, vec3(luma(c)) * .35 + k, uAmt), 1.);
}
`,ys=Z+"void main(){ outColor = vec4(0., 0., 0., 1.); }";class Ms{canvas;gl;kit;W=720;H=1280;cg=new as;ornament=new rs;anchors=new Map;snapOut=null;frame=0;fps=0;fpsAcc=0;fpsN=0;lastT=0;p={};texs=new WeakMap;rts=new Map;cgTex;standbyTex;labelTex;ornTex;ornStamp=-1;t={};flip={};maskW=0;maskH=0;beamVao;beamBuf;beamData=new Float32Array(us);grabbers=[];brush={x:0,y:0,vx:0,vy:0,active:!1,tool:0,startHold:!1};fieldLive=0;centres=new Map;lastLayers=[];constructor(){this.canvas=document.createElement("canvas"),this.canvas.className="program-canvas";const e=this.canvas.getContext("webgl2",{antialias:!1,alpha:!1,preserveDrawingBuffer:!1,powerPreference:"high-performance"});if(!e)throw new Error("WebGL2 not supported");this.gl=e,this.kit=new En(e);const t=(r,c,l)=>this.p[c]=this.kit.program(r,c,l);t(Pn,"source"),t(In,"copy"),t(Cn,"decay"),t(Fn,"beam",On),t(Ln,"seed"),t(Bn,"jfa"),t(Dn,"dist"),t(Hn,"color"),t(_n,"scan"),t(qn,"fb"),t($n,"cg"),t(Nn,"era"),t(Un,"analog"),t(Gn,"objmask"),t(Wn,"objcomp"),t(Vn,"paikabe"),t(zn,"ribbon"),t(jn,"rutt"),t(Kn,"breakup"),t(Yn,"reshoot"),t(Xn,"poster2"),t(Zn,"lineart"),t(Qn,"smear"),t(Jn,"tools"),t(ts,"field"),t(os,"gen"),t(xs,"mix"),t(bs,"dim"),t(ys,"black"),t(es,"lookcol"),this.cgTex=this.kit.texture(),this.standbyTex=this.kit.texture(),this.labelTex=this.kit.texture(),this.ornTex=this.kit.texture(),this.beamVao=e.createVertexArray(),this.beamBuf=e.createBuffer(),e.bindVertexArray(this.beamVao),e.bindBuffer(e.ARRAY_BUFFER,this.beamBuf),e.bufferData(e.ARRAY_BUFFER,this.beamData.byteLength,e.DYNAMIC_DRAW);const n=this.p.beam.prog,s=e.getAttribLocation(n,"aPos"),a=e.getAttribLocation(n,"aAcross"),i=e.getAttribLocation(n,"aI");e.enableVertexAttribArray(s),e.vertexAttribPointer(s,2,e.FLOAT,!1,16,0),e.enableVertexAttribArray(a),e.vertexAttribPointer(a,1,e.FLOAT,!1,16,8),e.enableVertexAttribArray(i),e.vertexAttribPointer(i,1,e.FLOAT,!1,16,12),e.bindVertexArray(null),this.setOutput(H.output.aspect,H.output.quality)}setOutput(e,t){const[n,s]=vs[e],a=t==="fhd"?1920:t==="hd"?1280:960;let i,r;n>=s?(i=a,r=Math.round(a*s/n/2)*2):(r=a,i=Math.round(a*n/s/2)*2),e==="4:3"&&(i=t==="fhd"?1440:t==="hd"?960:720,r=i*3/4),e==="1:1"&&(i=r=t==="fhd"?1080:t==="hd"?960:720),this.W=i,this.H=r,this.canvas.width=i,this.canvas.height=r;for(const l in this.t)this.kit.freeTarget(this.t[l]);for(const l of this.rts.values())this.freeRt(l);this.rts.clear(),this.t={};const c=(l,u=i,f=r,m)=>this.t[l]=this.kit.target(u,f,m);for(const l of["a","b","c0","c1","era","col","sc","tl","h0","h1","rs","p0","p1","syn0","syn1","hold","snap"])c(l);this.maskW=Math.round(i/3),this.maskH=Math.round(r/3);for(const l of["om","odist"])c(l,this.maskW,this.maskH);c("j0",this.maskW,this.maskH,this.gl.NEAREST),c("j1",this.maskW,this.maskH,this.gl.NEAREST),c("f0",Math.round(i/4),Math.round(r/4)),c("f1",Math.round(i/4),Math.round(r/4)),this.clearField(),this.cg.resize(i,r),this.upload(this.standbyTex,this.cg.standby,!0),this.upload(this.labelTex,this.cg.label,!0),this.ornStamp=-1}clearField(){const e=this.gl;for(const t of["f0","f1"])e.bindFramebuffer(e.FRAMEBUFFER,this.t[t].fb),e.clearColor(.5,.5,0,0),e.clear(e.COLOR_BUFFER_BIT);e.clearColor(0,0,0,1),e.bindFramebuffer(e.FRAMEBUFFER,null),this.fieldLive=0}clearBrush(){this.clearField()}pp(e,t){const n=e+t;return(this.flip[n]=(this.flip[n]??0)^1)?[this.t[e],this.t[t]]:[this.t[t],this.t[e]]}upload(e,t,n=!1){const s=this.gl;s.bindTexture(s.TEXTURE_2D,e),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!0),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n);try{s.texImage2D(s.TEXTURE_2D,0,s.RGBA,s.RGBA,s.UNSIGNED_BYTE,t)}catch{}s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1)}uploadR8(e,t,n,s){const a=this.gl;a.bindTexture(a.TEXTURE_2D,e),a.pixelStorei(a.UNPACK_ALIGNMENT,1),a.texImage2D(a.TEXTURE_2D,0,a.R8,n,s,0,a.RED,a.UNSIGNED_BYTE,t),a.pixelStorei(a.UNPACK_ALIGNMENT,4)}refreshStatic(){this.cg.drawStatic(),this.upload(this.standbyTex,this.cg.standby,!0),this.upload(this.labelTex,this.cg.label,!0)}texOf(e){let t=this.texs.get(e);if(t||(t={tex:this.kit.texture(),stamp:-1,ok:!1},this.texs.set(e,t)),t.stamp!==e.stamp){const n=e.element();n&&(this.upload(t.tex,n),t.ok=!0,t.stamp=e.stamp)}return t.ok?t.tex:null}fitOf(e){const[t,n]=e.size();return ss(t,n,this.W/this.H)}mirrorOf(e){return e.s.kind==="camera"&&e.s.facing==="user"?1:0}syn=0;synthTex(){return(this.syn?this.t.syn1:this.t.syn0).tex}renderSynth(e,t){const n=this.gl,s=this.syn?this.t.syn1:this.t.syn0,a=this.syn?this.t.syn0:this.t.syn1;this.syn^=1,this.kit.draw(this.p.decay,a,{uSrc:s.tex,uDecay:H.synth.persist});const i=ls(e,t),r=cs(i,this.W/this.H,H.synth.width*(this.H/480),this.H,this.beamData);n.bindFramebuffer(n.FRAMEBUFFER,a.fb),n.viewport(0,0,a.w,a.h),n.useProgram(this.p.beam.prog);const c=Et(H.synth.color);n.uniform3f(this.p.beam.loc("uColor"),c[0]*.5,c[1]*.5,c[2]*.5),n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE),n.bindVertexArray(this.beamVao),n.bindBuffer(n.ARRAY_BUFFER,this.beamBuf),n.bufferSubData(n.ARRAY_BUFFER,0,this.beamData,0,r*4),n.drawArrays(n.TRIANGLES,0,r),n.bindVertexArray(null),n.disable(n.BLEND)}srcU(e){return{uTime:e,uFlipY:0,uLabel:this.labelTex,uColor:Et(H.matte.color)}}drawPlayer(e,t,n){const s=this.texOf(e);if(!s)return this.kit.draw(this.p.black,t,{});this.kit.draw(this.p.source,t,{...this.srcU(n),uKind:it(1),uTex:s,uFit:this.fitOf(e),uMirror:this.mirrorOf(e)})}drawBg(e,t,n,s){const a=this.kit;if(e.kind==="white"){const i=this.gl;i.bindFramebuffer(i.FRAMEBUFFER,t.fb),i.viewport(0,0,t.w,t.h),i.clearColor(1,1,1,1),i.clear(i.COLOR_BUFFER_BIT),i.clearColor(0,0,0,1);return}if(e.kind==="player")return this.drawPlayer(e.p,t,n);if(e.kind==="gen")return a.draw(this.p.gen,t,{uTime:n,uMode:it(e.id),uBeat:s});if(e.kind==="beam")return a.draw(this.p.source,t,{...this.srcU(n),uKind:it(1),uTex:this.synthTex(),uFit:[1,1,0,0],uMirror:0});if(e.kind==="matte")return e.pattern===jo?(this.ornament.update(Math.floor(s),this.W,this.H),this.ornament.stamp!==this.ornStamp&&(this.upload(this.ornTex,this.ornament.canvas),this.ornStamp=this.ornament.stamp),a.draw(this.p.source,t,{...this.srcU(n),uKind:it(1),uTex:this.ornTex,uFit:[1,1,0,0],uMirror:0})):a.draw(this.p.source,t,{...this.srcU(n),uKind:it(2),uPattern:it(e.pattern),uTex:this.labelTex});a.draw(this.p.black,t,{})}distance(e,t,n){this.kit.draw(this.p.seed,this.t.j0,{uMask:e.tex});let s=this.t.j0,a=this.t.j1,i=1;for(;i<Math.max(this.maskW,this.maskH);)i*=2;for(i/=2;i>=1;i/=2)this.kit.draw(this.p.jfa,a,{uSrc:s.tex,uStep:i}),[s,a]=[a,s];this.kit.draw(this.p.dist,t,{uSrc:s.tex,uMaxD:n})}rtOf(e,t=e.id){let n=this.rts.get(t);if(!n){const s=Math.round(this.W/2),a=Math.round(this.H/2);n={raw:this.kit.target(s,a),l0:this.kit.target(s,a),l1:this.kit.target(s,a),flip:0,out:null,lc:null,frame:-1,ma:this.kit.texture(),mb:this.kit.texture(),ka:null,kb:null,used:0},n.out=n.raw,this.rts.set(t,n)}return n.used=this.frame,n}freeRt(e){this.kit.freeTarget(e.raw),this.kit.freeTarget(e.l0),this.kit.freeTarget(e.l1),e.lc&&this.kit.freeTarget(e.lc),this.gl.deleteTexture(e.ma),this.gl.deleteTexture(e.mb)}dress(e,t,n,s,a=e.id){const i=this.rtOf(e,a);if(i.frame===this.frame)return i;i.frame=this.frame,this.drawPlayer(t,i.raw,n);const r=Io(e.look.id),c=e.look.a,l=e.look.b,u=this.kit;let f=i.raw;const m=()=>(i.flip^=1,i.flip?i.l0:i.l1),p=()=>i.flip?i.l1:i.l0;if(r.id==="none")return i.out=f,this.recolour(e,i,s);const h=(()=>{const d=m(),g={uSrc:f.tex,uTime:n};if(r.id==="paikabe")u.draw(this.p.paikabe,d,{...g,uHist:p().tex,uLines:Math.round(ht(1,6,c)),uField:.85,uSmear:ht(0,.95,l)});else if(r.id==="ribbon")u.draw(this.p.ribbon,d,{...g,uLevel:ht(.2,.8,c),uWidth:ht(.03,.18,l),uFringe:1});else if(r.id==="rutt")u.draw(this.p.rutt,d,{...g,uLines:Math.round(ht(24,100,l)),uHeight:ht(.04,.3,c),uColorMode:it(0)});else if(r.id==="breakup")u.draw(this.p.breakup,d,{...g,uBlock:ht(.02,.12,c),uAmount:ht(.2,1,l)});else if(r.id==="poster2")u.draw(this.p.poster2,d,{...g,uPair:it(Math.min(3,Math.floor(c*4)))});else if(r.id==="lineart")u.draw(this.p.lineart,d,{...g,uBg:Et(gs[(Math.floor(s)+Math.floor(c*6))%6]),uCircles:1});else if(r.id==="smear")u.draw(this.p.smear,d,{...g,uHist:p().tex,uAngle:ht(-3.1,3.1,l),uAmount:ht(.2,1,c)});else if(r.id==="color"){const x=[];for(let b=0;b<7;b++)x.push(...io([0,.08,.16,.33,.5,.66,.83][b]+n*ht(0,.5,l),1,1));u.setArray(this.p.color,"uPal",3,x),u.draw(this.p.color,d,{uSrc:f.tex,uIn0:f.tex,uIn1:f.tex,uIn2:f.tex,uIn3:f.tex,uMixOn:[0,0,0,0],uBands:it(Math.round(ht(2,7,c))),uGain:1,uContrast:1.2,uSmooth:0,uNeg:0,uMix:0})}else if(r.era!==void 0){const x=Qt.map((S,E)=>E===r.era?1:0),b=Qt[r.era],A=Qt.map(S=>S.def);A[r.era]=b.step>=1?Math.round(ht(b.min,b.max,c)):ht(b.min,b.max,c),u.setArray(this.p.era,"uOn",1,x),u.setArray(this.p.era,"uAmt",1,A),u.draw(this.p.era,d,{uCur:f.tex,uAtlas:f.tex,uHead:0,uFilled:1,uTime:n})}else return f;return d})();return f=h,i.out=h,this.recolour(e,i,s)}recolour(e,t,n){const s=Co(e.look);if(s==="orig")return t;t.lc||(t.lc=this.kit.target(t.raw.w,t.raw.h));const a=s==="rainbow"?2:s==="neg"?3:s==="mono"?4:1;return this.kit.draw(this.p.lookcol,t.lc,{uSrc:t.out.tex,uMode:it(a),uCol:a===1?Et(s):[1,1,1],uBeat:n}),t.out=t.lc,t}maskTex(e,t,n){const s=Wt(e,n);return s?(t.ka!==s.a&&(this.uploadR8(t.ma,s.a,s.w,s.h),t.ka=s.a),t.kb!==s.b&&(this.uploadR8(t.mb,s.b,s.w,s.h),t.kb=s.b),{a:t.ma,b:t.mb,f:s.f,cx:s.cx,cy:s.cy}):null}sourceToScreen(e,t,n){const s=this.fitOf(e.p),a=(t-.5)/s[0]+.5,i=(1-n-.5)/s[1]+.5,r=this.W/this.H;let c=(a-.5)*2*r*e.scale,l=(i-.5)*2*e.scale;const u=e.rot*Math.PI/180;return[c,l]=[c*Math.cos(u)-l*Math.sin(u),c*Math.sin(u)+l*Math.cos(u)],c+=e.x*r,l+=e.y,[c/(2*r)+.5,l/2+.5]}screenToSource(e,t,n,s){let a=t,i=1-n;if(s){const u=this.W/this.H;let f=(a-.5)*2*u-s.x*u,m=(i-.5)*2-s.y;const p=-s.rot*Math.PI/180;[f,m]=[f*Math.cos(p)-m*Math.sin(p),f*Math.sin(p)+m*Math.cos(p)],a=f/(2*u*s.scale)+.5,i=m/(2*s.scale)+.5}const r=this.fitOf(e);let c=(a-.5)*r[0]+.5;const l=(i-.5)*r[1]+.5;return this.mirrorOf(e)&&(c=1-c),[c,1-l]}layerAt(e,t){const n=this.lastLayers;for(let i=n.length-1;i>=0;i--){const r=n[i],[c,l]=this.screenToSource(r.p,e,t,r);if(c<0||c>1||l<0||l>1)continue;if(r.g.kind!=="tap"&&r.g.kind!=="person"){const p=this.centres.get(r.key);if(p&&Math.hypot((e-p[0])*(this.W/this.H),1-t-p[1])<.3*r.scale)return r;continue}const u=Wt(r.g,r.p.shownPos(dt()));if(!u)continue;const f=Math.min(u.w-1,Math.max(0,Math.floor(c*u.w))),m=Math.min(u.h-1,Math.max(0,Math.floor(l*u.h)));if(u.a[m*u.w+f]>90)return r}let s=null,a=.12;for(let i=n.length-1;i>=0;i--){const r=this.centres.get(n[i].key);if(!r)continue;const c=Math.hypot((e-r[0])*this.W,(1-t-r[1])*this.H)/Math.min(this.W,this.H);c<a&&(a=c,s=n[i])}return s}anchor(e,t){let n=[.5,.5];(e.g.kind==="tap"||e.g.kind==="person")&&(n=ps(e.g,t)??this.anchors.get(e.key)??n),this.anchors.set(e.key,n);const[s,a]=this.sourceToScreen({...e,x:0,y:0},n[0],n[1]);e.x-=(s-.5)*2,e.y-=(a-.5)*2}drawLayer(e,t,n,s,a,i,r){const c=this.kit,l=e.g,u=this.dress(l,e.p,n,s,r),f=e.p.shownPos(n);e.anchor&&i&&this.anchor(e,f);const m=this.fitOf(e.p),p={uPos:[e.x*(this.W/this.H),e.y],uScale:e.scale,uRotA:e.rot*Math.PI/180,uTiltA:e.tilt*Math.PI/180,uFit:m,uMirror:this.mirrorOf(e.p),uTime:n};let h=0,d=null;if(l.kind==="tap"||l.kind==="person"){if(d=this.maskTex(l,u,f),!d)return t}else h=l.kind==="luma"?1:l.kind==="chroma"?2:3;c.draw(this.p.objmask,this.t.om,{...p,uMaskA:d?.a??this.labelTex,uMaskB:d?.b??this.labelTex,uMaskF:d?.f??0,uObj:u.raw.tex,uKind:it(h),uLuma:[l.key.lo,l.key.hi],uInvert:l.key.invert?1:0,uKeyColor:Et(l.key.color),uShape:it(l.shape.type),uSize:l.shape.size,uRing:l.shape.ring,uSpin:l.shape.spin});const g=d?this.sourceToScreen(e,d.cx,d.cy):this.sourceToScreen(e,.5,.5);i&&this.centres.set(e.key,g);const x=l.line>0,b=this.W/this.maskW,A=140/b+8;x&&this.distance(this.t.om,this.t.odist,A);const S=[];for(const T of Ee[l.linePal%Ee.length])S.push(...Et(T));c.setArray(this.p.objcomp,"uPal",3,S);const[,E]=this.pp("c0","c1");return c.draw(this.p.objcomp,E,{...p,uCur:t.tex,uObj:u.out.tex,uMask:this.t.om.tex,uDist:this.t.odist.tex,uHasDist:x?1:0,uMaxD:A*b,uLine:it(l.line),uLineSize:l.lineSize,uColor:e.tint??Et(l.color),uTint:e.tint?[...e.tint,1]:[0,0,0,0],uLineTint:e.tint?[...e.tint,1]:l.lineColor&&l.lineColor!=="auto"?[...Et(l.lineColor),1]:[0,0,0,0],uCenter:g,uFillMode:it(0),uFill:this.labelTex,uFillFit:[1,1,0,0],uFillColor:[1,1,1],uSel:e.sel?1:0,uPulse:a}),E}poseFor(e,t,n=.76){let s=1,a=1,i=0,r=0;if(e.kind==="tap"||e.kind==="person")for(let g=0;g<6;g++){const x=Wt(e,e.loopIn+(g+.5)/6*Math.max(.05,e.loopOut-e.loopIn));if(x)for(let b=0;b<x.h;b+=2)for(let A=0;A<x.w;A+=2)x.a[b*x.w+A]>90&&(s=Math.min(s,A/x.w),i=Math.max(i,(A+2)/x.w),a=Math.min(a,b/x.h),r=Math.max(r,(b+2)/x.h))}i<=s&&([s,a,i,r]=[0,0,1,1]);const c=this.fitOf(t),l=this.W,u=this.H,f=(i-s)/c[0]*l,m=(r-a)/c[1]*u,p=Math.min(6,n*Math.min(l,u)/Math.max(1,f,m)),h=((s+i)/2-.5)/c[0]+.5,d=(1-(a+r)/2-.5)/c[1]+.5;return{key:-2,g:e,p:t,x:-2*(h-.5)*p,y:-2*(d-.5)*p,scale:p,rot:0,tilt:0,sel:!1}}poseAt(e,t,n=.76){const s=Wt(e,t.shownPos(dt()));if(!s)return null;const a=ro(s.a,s.w,s.h),i=s.b===s.a?a:ro(s.b,s.w,s.h);if(!a&&!i)return null;const r=a??i,c=i??a,[l,u,f,m]=r.map((E,T)=>E+(c[T]-E)*s.f),p=this.fitOf(t),h=this.W,d=this.H,g=(f-l)/p[0]*h,x=(m-u)/p[1]*d,b=Math.min(6,n*Math.min(h,d)/Math.max(1,g,x)),A=((l+f)/2-.5)/p[0]+.5,S=(1-(u+m)/2-.5)/p[1]+.5;return{key:-2,g:e,p:t,x:-2*(A-.5)*b,y:-2*(S-.5)*b,scale:b,rot:0,tilt:0,sel:!1}}snapshot(e,t,n=128,s=!1){const a=this.snapshotCanvas(e,t,n,s);return a?s?a.toDataURL("image/png"):a.toDataURL("image/jpeg",.82):""}snapshotCanvas(e,t,n=128,s=!1,a){if(!t.element())return null;const i=dt(),r=t.shownPos(i);let c=0,l=0,u=1,f=1;if(e.kind==="tap"||e.kind==="person"){const E=Wt(e,r);if(!E)return null;let T=E.w,F=E.h,C=-1,L=-1;for(let _=0;_<E.h;_++)for(let U=0;U<E.w;U++)E.a[_*E.w+U]>90&&(U<T&&(T=U),U>C&&(C=U),_<F&&(F=_),_>L&&(L=_));if(C<0)return null;[c,l,u,f]=[T/E.w,F/E.h,(C+1)/E.w,(L+1)/E.h]}const m=this.fitOf(t),p=this.W,h=this.H,d=(u-c)/m[0]*p,g=(f-l)/m[1]*h,x=Math.min(6,.76*Math.min(p,h)/Math.max(1,d,g)),b=((c+u)/2-.5)/m[0]+.5,A=(1-(l+f)/2-.5)/m[1]+.5,S={key:-1,g:e,p:t,x:-2*(b-.5)*x,y:-2*(A-.5)*x,scale:x,rot:0,tilt:0,sel:!1};return this.cutoutCanvas(S,n,s,a)}cutoutCanvas(e,t=128,n=!0,s){if(!e.p.element())return null;this.frame++;const a=dt(),i=this.W,r=this.H;(!this.snapOut||this.snapOut.w!==t)&&(this.snapOut&&this.kit.freeTarget(this.snapOut),this.snapOut=this.kit.target(t,t));const c=this.gl,l=i>r?r/i:1,u=r>i?i/r:1,f=x=>{x?(c.bindFramebuffer(c.FRAMEBUFFER,this.t.snap.fb),c.viewport(0,0,this.t.snap.w,this.t.snap.h),c.clearColor(1,1,1,1),c.clear(c.COLOR_BUFFER_BIT),c.clearColor(0,0,0,1)):this.kit.draw(this.p.black,this.t.snap,{});const b=this.drawLayer({...e},this.t.snap,a,0,0,!1,"snap");this.kit.draw(this.p.source,this.snapOut,{...this.srcU(a),uKind:it(1),uTex:b.tex,uFit:[l,u,0,0],uMirror:0});const A=new Uint8Array(t*t*4);return c.bindFramebuffer(c.FRAMEBUFFER,this.snapOut.fb),c.readPixels(0,0,t,t,c.RGBA,c.UNSIGNED_BYTE,A),c.bindFramebuffer(c.FRAMEBUFFER,null),A},m=f(!1),p=n?f(!0):null,h=s??document.createElement("canvas");(h.width!==t||h.height!==t)&&(h.width=h.height=t);const d=h.getContext("2d"),g=d.createImageData(t,t);for(let x=0;x<t;x++){const b=(t-1-x)*t*4,A=x*t*4;for(let S=0;S<t*4;S+=4){const E=m[b+S],T=m[b+S+1],F=m[b+S+2];if(!p){g.data[A+S]=E,g.data[A+S+1]=T,g.data[A+S+2]=F,g.data[A+S+3]=255;continue}const C=(p[b+S]-E+p[b+S+1]-T+p[b+S+2]-F)/3,L=Math.max(0,Math.min(255,255-C)),_=L>0?255/L:0;g.data[A+S]=Math.min(255,E*_),g.data[A+S+1]=Math.min(255,T*_),g.data[A+S+2]=Math.min(255,F*_),g.data[A+S+3]=L}}return d.putImageData(g,0,0),h}cutA=null;cutB=null;renderCutout(e,t,n){if(!e.p.element())return null;const s=()=>document.createElement("canvas").getContext("2d",{willReadFrequently:!0});this.cutA??=s(),this.cutB??=s();const a=this.W,i=this.H,r=Math.min(a,i),c=(a-r)/2,l=(i-r)/2,u=(d,g)=>(d.canvas.width!==t&&(d.canvas.width=d.canvas.height=t),this.render({bg:g,dim:0,layers:[{...e}],beat:dt()*2,pulse:0,bgFx:!1}),d.clearRect(0,0,t,t),d.drawImage(this.canvas,c,l,r,r,0,0,t,t),d.getImageData(0,0,t,t)),f=u(this.cutA,{kind:"none"}),m=u(this.cutB,{kind:"white"}),p=n??document.createElement("canvas");(p.width!==t||p.height!==t)&&(p.width=p.height=t);const h=f;for(let d=0;d<h.data.length;d+=4){const g=f.data[d],x=f.data[d+1],b=f.data[d+2],A=(m.data[d]-g+m.data[d+1]-x+m.data[d+2]-b)/3,S=Math.max(0,Math.min(255,255-A)),E=S>0?255/S:0;h.data[d]=Math.min(255,g*E),h.data[d+1]=Math.min(255,x*E),h.data[d+2]=Math.min(255,b*E),h.data[d+3]=S}return p.getContext("2d").putImageData(h,0,0),p}render(e){const t=this.kit,n=dt(),s=this.lastT?n-this.lastT:.016;this.lastT=n,this.fpsAcc+=s,this.fpsN++,this.fpsAcc>.5&&(this.fps=this.fpsN/this.fpsAcc,this.fpsAcc=0,this.fpsN=0),this.frame++;const a=e.beat;e.bg.kind==="beam"&&this.renderSynth(n,e.pulse),this.drawBg(e.bg,this.t.a,n,a);let i=this.t.a;const r=(g,x)=>{const[,b]=this.pp("c0","c1");t.draw(this.p[g],b,{uSrc:i.tex,uTime:n,...x}),i=b};if(e.bgFx){const g=H.era;if(g.on[3]||g.on[4]){const S=Qt.map((E,T)=>(T===3||T===4)&&g.on[T]?1:0);t.setArray(this.p.era,"uOn",1,S),t.setArray(this.p.era,"uAmt",1,g.amt),t.draw(this.p.era,this.t.era,{uCur:i.tex,uAtlas:i.tex,uHead:0,uFilled:1,uTime:n}),i=this.t.era}const x=H.moor;x.breakup.on&&r("breakup",{uBlock:x.breakup.block,uAmount:x.breakup.amount});const b=H.color;if(b.on){const S=[];for(let E=0;E<7;E++)S.push(...io(b.hues[E]+n*b.cycle,b.sat,1));t.setArray(this.p.color,"uPal",3,S),t.draw(this.p.color,this.t.col,{uSrc:i.tex,uIn0:i.tex,uIn1:i.tex,uIn2:i.tex,uIn3:i.tex,uMixOn:[0,0,0,0],uBands:it(Math.max(2,Math.min(7,Math.round(b.bands)))),uGain:b.gain,uContrast:b.contrast,uSmooth:b.smooth?1:0,uNeg:b.neg?1:0,uMix:0}),i=this.t.col}const A=H.fb;if(A.on){const[S,E]=this.pp("h0","h1");t.draw(this.p.fb,E,{uCur:i.tex,uHist:S.tex,uMode:it(A.mode),uSize:A.size,uRotA:A.rot,uHue:A.hue,uDecay:A.decay,uAmt:A.mix,uPulse:e.pulse,uTime:n}),i=E}x.reshoot.on&&(t.draw(this.p.reshoot,this.t.rs,{uSrc:i.tex,uTint:x.reshoot.tint,uZoom:x.reshoot.zoom,uCurve:x.reshoot.curve,uTime:n}),i=this.t.rs)}e.dim>0&&r("dim",{uAmt:e.dim}),this.centres.clear(),this.lastLayers=e.layers;for(const g of e.layers)i=this.drawLayer(g,i,n,a,e.pulse,!0);for(const[g,x]of this.rts)this.frame-x.used>120&&(this.freeRt(x),this.rts.delete(g));const c=H.scan,l=H.magnet.list.slice(0,2);if(c.on&&e.bgFx||l.length){const g=H.magnet,x=this.W/this.H,b=1+e.pulse*g.audio*2.5,A=[],S=[0,0,0,0];for(l.forEach((C,L)=>{let _=C.x,U=C.y;g.drift&&(_+=Math.sin(n*.31+L*2)*.12,U+=Math.cos(n*.23+L)*.12),A.push(_*x,U,C.s*b,C.r),S[L]=C.type});A.length<16;)A.push(0,0,0,1);const E=c.on&&e.bgFx,T=[];for(const C of c.osc)T.push(C.freq,C.rate,E?C.amp:0,C.wave);t.setArray(this.p.scan,"uMag",4,A),t.setArray(this.p.scan,"uOsc",4,T);const F=E?c:{hSize:1,vSize:1,hPos:0,vPos:0,rot:0};t.draw(this.p.scan,this.t.sc,{uSrc:i.tex,uGeo:[F.hSize,F.vSize,F.hPos,F.vPos],uRot:F.rot*Math.PI/180,uLines:E?c.lines:l.length?262:0,uOscTarget:c.osc.map(C=>C.target),uAudio:e.pulse,uMagType:S,uMagN:it(l.length),uPurity:l.length?g.purity:0,uTime:n}),i=this.t.sc}const u=this.brush;if(u.active||this.fieldLive>0){u.active&&u.startHold&&(t.draw(this.p.copy,this.t.hold,{uSrc:i.tex}),u.startHold=!1);const g=.008+(1-H.tools.smear)*.05,[x,b]=this.pp("f0","f1");t.draw(this.p.field,b,{uPrev:x.tex,uBrush:[u.x,u.y,H.tools.size*(u.tool===2?.6:1),u.active?1:0],uVel:[u.vx,u.vy],uTool:it(u.tool),uRelax:g}),u.vx*=.5,u.vy*=.5,this.fieldLive=u.active?400:this.fieldLive-1,t.draw(this.p.tools,this.t.tl,{uSrc:i.tex,uField:b.tex,uHold:this.t.hold.tex,uTime:n}),i=this.t.tl}const f=e.bg.kind==="player"?e.bg.p.pos(n):n,m=this.cg.render(n,f);m&&this.upload(this.cgTex,this.cg.canvas,!0);const[p,h]=this.pp("p0","p1");t.draw(this.p.cg,h,{uSrc:i.tex,uCg:this.cgTex,uOn:m?1:0});const d=H.ui.crt?H.vhs:ws;if(t.draw(this.p.analog,null,{uSrc:h.tex,uPrev:p.tex,uStandby:this.standbyTex,uTime:n,uBleed:d.bleed,uScan:d.scan,uTrack:d.track,uChroma:d.chroma,uRoll:0,uLines:H.ui.crt?d.lines:0,uInterlace:d.interlace,uNoise:d.noise,uSat:d.sat,uBox43:d.box43?1:0,uHead:d.head,uField:this.frame%2,uWarm:d.warm,uInvert:0,uTear:0,uSnow:0,uBars:0,uStandbyOn:0,uJitter:0,uFlipY:0,uClean:H.ui.crt?0:1},[this.W,this.H]),this.grabbers.length){const g=document.createElement("canvas"),x=200/Math.max(this.W,this.H);g.width=Math.round(this.W*x),g.height=Math.round(this.H*x),g.getContext("2d").drawImage(this.canvas,0,0,g.width,g.height);const b=g.toDataURL("image/jpeg",.75);this.grabbers.splice(0).forEach(A=>A(b))}}grab(e=500){return new Promise(t=>{this.grabbers.push(t),setTimeout(()=>t(""),e)})}}const ws={bleed:0,scan:0,track:0,chroma:0,lines:0,interlace:0,noise:0,sat:1,box43:!1,head:0,warm:0};function io(o,e,t){o=(o%1+1)%1;const n=s=>{const a=(s+o*6)%6;return t-t*e*Math.max(0,Math.min(a,4-a,1))};return[n(5),n(3),n(1)]}const ve=new WeakMap;function ro(o,e,t){if(ve.has(o))return ve.get(o);let n=e,s=t,a=-1,i=-1;for(let c=0;c<t;c++)for(let l=0;l<e;l++)o[c*e+l]>90&&(l<n&&(n=l),l>a&&(a=l),c<s&&(s=c),c>i&&(i=c));const r=a<0?null:[n/e,s/t,(a+1)/e,(i+1)/t];return ve.set(o,r),r}const lo=[{name:"I–vi–IV–V",ko:"밝게 도는",deg:[0,5,3,4]},{name:"i–VI–III–VII",ko:"어둡게 도는",deg:[0,5,2,6]},{name:"I–IV",ko:"두 화음",deg:[0,3,0,3]},{name:"DRONE",ko:"한 화음",deg:[0,0,0,0]}],jt=[{hp:30,lp:420,oct:36},{hp:150,lp:1700,oct:48},{hp:400,lp:4500,oct:60},{hp:1500,lp:16e3,oct:72}],Oo=()=>Ye[H.music.scale]??Ye[0];function ks(){const o=Oo();return o.steps.length===7?o.steps:o.minor?[0,2,3,5,7,8,10]:[0,2,4,5,7,9,11]}function Fo(){return Oo().steps.map(o=>(o+H.music.root)%12)}function Ts(o){if(o<0)return 0;const e=Fo();let t=0,n=99;for(let a=-6;a<=6;a++){const i=Math.abs(a);e.includes(((o+a)%12+12)%12)&&i<n&&(n=i,t=a)}const s=H.music.root;for(const a of[-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6])if(Math.abs(a)===n&&[s,(s+7)%12].includes(((o+a)%12+12)%12))return a;return t}function Lo(o){return Math.floor(ct.beatAt(o)/4)}function Bo(o){const t=(lo[H.music.prog]??lo[0]).deg[(Lo(o)%4+4)%4],n=ks();return[0,2,4,6].map(s=>(n[(t+s)%7]+H.music.root)%12)}function co(o,e,t){const n=Bo(o),s=n[(e%n.length+n.length)%n.length];let a=Math.floor(t/12)*12+s;return a<t-6&&(a+=12),a>t+6&&(a-=12),a}function Ss(o){const e=o/ct.beat;let t=4,n=99;for(const s of[1,2,4,8,16]){const a=Math.abs(Math.log2(Math.max(.01,e)/s));a<n&&(n=a,t=s)}return t}function As(o){if(!o||o.every(a=>!a))return 0;const e=new Set(Fo()),t=H.music.root;let n=0,s=-1;for(let a=-6;a<=6;a++){let i=0;for(let c=0;c<12;c++)e.has(((c+a)%12+12)%12)&&(i+=o[c]);((o.indexOf(Math.max(...o))+a)%12+12)%12===t&&(i+=.04),i-=Math.abs(a)*.004,i>s&&(s=i,n=a)}return n}function Rs(o=4096){const e=new Float32Array(o),t=.79,n=.89;for(let s=0;s<o;s++){const a=s/(o-1)*2-1,i=Math.abs(a),r=i<=t?i:t+(n-t)*Math.tanh((i-t)/(n-t));e[s]=Math.sign(a)*r}return e}function Es(o,e,t){const n=o.sampleRate,s=Math.floor(n*e),a=o.createBuffer(2,s,n);for(let i=0;i<2;i++){const r=a.getChannelData(i);for(let c=0;c<s;c++)r[c]=(Math.random()*2-1)*Math.pow(1-c/s,t)*(c<n*.004?c/(n*.004):1)}return a}function Xt(o){const e=o.an;let t=0;return o.sound.auto&&e&&!e.silent&&(t=e.chroma?.some(n=>n>0)?As(e.chroma):e.pc>=0?Ts(e.pc):0),Math.max(-12,Math.min(12,t+o.sound.shift))}function Ps(o){return o.sound.mode==="orig"||o.sound.mode==="reson"?Xt(o):0}function Is(o){const e=o.an;return!!e&&e.conf>.6&&e.midi>0&&Math.max(...e.chroma??[0])>.35}function Ge(o){return Math.pow(2,Ps(o)/12)}function We(o){return Ss((o.loopOut-o.loopIn)/Ge(o))*ct.beat}function Pe(o,e){const t=We(o);return ct.origin+Math.floor((e-ct.origin)/t)*t}const Cs={breakup:{dark:.6,echo:.25},mosaic:{dark:.5,echo:.2},led:{dark:.4,echo:.2},teletext:{dark:.5,echo:.2},smear:{chorus:.8,hall:.2},rutt:{chorus:.6,hall:.15},kaleido:{chorus:.5,echo:.2},paikabe:{hall:.3,echo:.2},neon:{hall:.3}};class Os{constructor(e,t,n){this.e=e,this.g=t;const s=e.ctx,a=(l=1)=>{const u=s.createGain();return u.gain.value=l,u};this.in=a(),this.out=a(0),this.hp=s.createBiquadFilter(),this.hp.type="highpass",this.lp=s.createBiquadFilter(),this.lp.type="lowpass";const i=a();this.resDry=a(1),this.in.connect(this.resDry).connect(i);const r=s.createBiquadFilter();r.type="lowpass",r.frequency.value=3500,r.Q.value=.5;for(let l=0;l<4;l++){const u=s.createBiquadFilter();u.type="bandpass",u.Q.value=18;const f=a(0);this.in.connect(u).connect(f).connect(r),this.res.push(u),u.mk=f}r.connect(i),i.connect(this.hp).connect(this.lp),this.tone=s.createBiquadFilter(),this.tone.type="lowpass",this.tone.frequency.value=18e3,this.tone.Q.value=.4,this.lp.connect(this.tone),this.chorusWet=a(0),this.chorusDepth=a(0);const c=s.createOscillator();c.frequency.value=.18+Math.random()*.08,c.connect(this.chorusDepth),c.start(),this.sources.add(c);for(const[l,u,f]of[[.016,-.7,1],[.023,.7,-1]]){const m=s.createDelay(.1);m.delayTime.value=l;const p=a(f);this.chorusDepth.connect(p).connect(m.delayTime);const h=s.createStereoPanner();h.pan.value=u,this.tone.connect(m).connect(h).connect(this.chorusWet)}this.tone.connect(this.out),this.chorusWet.connect(this.out),this.out.connect(e.masterIn),this.echoSend=a(0),this.out.connect(this.echoSend).connect(e.echoIn),this.hallSend=a(0),this.out.connect(this.hallSend).connect(e.hallIn),this.setRow(n),this.applyMode()}in;out;hp;lp;res=[];resDry;tone;chorusWet;chorusDepth;echoSend;hallSend;nextCycle=-1;nextHit=-1;nextGrain=0;lastBar=-9999;hits=0;row=1;alive=!0;sources=new Set;setRow(e){this.row=e;const t=jt[Math.max(0,Math.min(3,e))],n=this.e.ctx.currentTime;this.hp.frequency.setTargetAtTime(t.hp,n,.05),this.lp.frequency.setTargetAtTime(t.lp,n,.05)}applyMode(){const t=this.e.ctx.currentTime,n=this.g.sound.mode==="reson";this.resDry.gain.setTargetAtTime(n?.03:1,t,.05);for(const a of this.res)a.mk.gain.setTargetAtTime(n?4.5:0,t,.05);const s=Cs[this.g.look.id]??{};this.tone.frequency.setTargetAtTime(s.dark?9e3-s.dark*6500:18e3,t,.08),this.chorusWet.gain.setTargetAtTime((s.chorus??0)*.45,t,.08),this.chorusDepth.gain.setTargetAtTime((s.chorus??0)*.0025,t,.08),this.echoSend.gain.setTargetAtTime((s.echo??0)*.8,t,.05),this.hallSend.gain.setTargetAtTime((this.g.sound.mode==="pad"?.8:n?.45:.15)+(s.hall??0),t,.05),this.lastBar=-9999}level(e){const t=this.g,n={orig:1,reson:1.6,pulse:1.1,pad:.9,mute:0}[t.sound.mode],s=(t.an?.normGain??1)*t.sound.gain*n/Math.sqrt(Math.max(1,e));this.out.gain.setTargetAtTime(Math.min(4,s),this.e.ctx.currentTime,.08)}at(e){const t=this.e.ctx;return Math.max(t.currentTime,t.currentTime+(e-dt()))}play(e,t,n,s,a=.012){const i=this.g.src.audio;if(!i||n<=.01||t>=i.duration)return;const r=this.e.ctx,c=this.at(e),l=r.createBufferSource();l.buffer=i,l.playbackRate.value=s;const u=r.createGain();u.gain.setValueAtTime(0,c),u.gain.linearRampToValueAtTime(1,c+a),u.gain.setValueAtTime(1,c+Math.max(a,n-a*2)),u.gain.linearRampToValueAtTime(0,c+n),l.connect(u).connect(this.in),l.start(c,t,n*s+.02),this.sources.add(l),l.onended=()=>this.sources.delete(l)}ref(){const e=this.g.an;return e&&e.conf>.25&&e.midi?e.midi:jt[this.row].oct+12}pitchRate(e,t){const n=this.g;let s;return Is(n)?s=co(e,t,this.ref()+Xt(n))-this.ref():s=Xt(n)+[0,12,0,-12][t%4],Math.max(.5,Math.min(2,Math.pow(2,s/12)))}schedule(e,t){const n=this.g;if(!this.alive||n.sound.mode==="mute"||!n.src.audio)return;const s=Ge(n),a=We(n),i=n.loopOut-n.loopIn,r=Lo(t);if(r!==this.lastBar&&n.sound.mode==="reson"){this.lastBar=r;const c=this.at(ct.timeOf(r*16)),l=jt[this.row].oct+12;this.res.forEach((u,f)=>u.frequency.setTargetAtTime(440*Math.pow(2,(co(ct.timeOf(r*16),f,l)-69)/12),c,.05))}if(n.sound.mode==="orig"||n.sound.mode==="reson"){if(this.nextCycle<0){const c=ct.next(e,4),l=Pe(n,c),u=(c-l)*s;u<i-.05&&this.play(c,n.loopIn+u,Math.min(i/s,a)-(c-l),s),this.nextCycle=l+a}for(;this.nextCycle<t;)this.play(this.nextCycle,n.loopIn,Math.min(i/s,a),s),this.nextCycle+=a}else if(n.sound.mode==="pulse"){const c=Math.max(1,Math.round(a/ct.step)),l=n.an?.onsets??[],u=new Map;if(l.length)l.forEach(f=>u.set(Math.round(f/i*c)%c,f));else for(let f=0;f<c;f+=2)u.set(f,f/c*i);for(this.nextHit<0&&(this.nextHit=ct.next(e,1));this.nextHit<t;){const f=this.nextHit,m=Math.round((f-Pe(n,f))/ct.step)%c,p=u.get(m);if(p!==void 0){const h=this.pitchRate(f,this.hits++);this.play(f,n.loopIn+Math.min(p,i-.05),Math.min(.24,ct.step*1.7),h,.01)}this.nextHit+=ct.step}}else if(n.sound.mode==="pad")for(this.nextGrain<e&&(this.nextGrain=e);this.nextGrain<t;){const l=this.nextGrain,u=this.pitchRate(l,Math.floor(Math.random()*4)),f=.18+Math.random()*.14;this.play(l,n.loopIn+Math.random()*Math.max(.01,i-f*u),f,u,f*.45),this.nextGrain+=1/14*(.6+Math.random()*.8)}}reset(){this.nextCycle=-1,this.nextHit=-1,this.lastBar=-9999,this.hush(),this.applyMode()}hush(){const t=this.e.ctx.currentTime;for(const n of this.sources)if(!(n instanceof OscillatorNode))try{n.stop(t+.03)}catch{}}dispose(){this.alive=!1;const e=this.e.ctx.currentTime;this.out.gain.setTargetAtTime(0,e,.03),setTimeout(()=>{for(const t of this.sources)try{t.stop()}catch{}this.out.disconnect()},300)}}class Fs{ctx=null;masterIn;echoIn;hallIn;vol;voices=new Map;want=[];sig="";constructor(){Ot.whenReady(e=>this.init(e))}init(e){this.ctx=e;const t=(p=1)=>{const h=e.createGain();return h.gain.value=p,h};this.masterIn=t(),this.echoIn=t();const n=e.createDelay(2),s=t(.4),a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=2600,this.echoIn.connect(n).connect(a).connect(s).connect(n),a.connect(this.masterIn);const i=()=>n.delayTime.setTargetAtTime(ct.step*3,e.currentTime,.2);i(),setInterval(i,1e3),this.hallIn=t();const r=e.createConvolver();r.buffer=Es(e,3.8,2.4),this.hallIn.connect(r).connect(t(.6)).connect(this.masterIn);const c=e.createBiquadFilter();c.type="highpass",c.frequency.value=40;const l=e.createDynamicsCompressor();l.threshold.value=-22,l.knee.value=18,l.ratio.value=2,l.attack.value=.01,l.release.value=.25;const u=e.createDynamicsCompressor();u.threshold.value=-4,u.knee.value=0,u.ratio.value=20,u.attack.value=.002,u.release.value=.1,this.vol=t(H.music.vol);const f=e.createWaveShaper();f.curve=Rs(),this.masterIn.connect(c).connect(l).connect(t(.75)).connect(u).connect(this.vol).connect(f),f.connect(e.destination),f.connect(Ot.recDest),f.connect(Ot.xy),f.connect(Ot.analyser);const m=()=>{this.update(),window.setTimeout(m,25)};m()}setVoices(e){this.want=e}refresh(e){for(const t of this.voices.values())(!e||t.g===e)&&t.reset()}setVolume(e){this.vol&&this.ctx&&this.vol.gain.setTargetAtTime(e,this.ctx.currentTime,.05)}update(){if(!this.ctx)return;const e=new Set;for(const i of this.want){e.add(i.g.id);let r=this.voices.get(i.g.id);r?r.row!==i.row&&r.setRow(i.row):(r=new Os(this,i.g,i.row),this.voices.set(i.g.id,r))}for(const[i,r]of this.voices)e.has(i)||(r.dispose(),this.voices.delete(i));const t=[H.music.root,H.music.scale,H.music.bpm,H.music.prog].join(",");t!==this.sig&&(this.sig=t,this.refresh());const n=this.voices.size,s=dt(),a=s+.12;for(const i of this.voices.values())i.level(n),i.schedule(s,a)}chordName(e=dt()){return Bo(e)[0]}}const le=new Fs,Do=[{name:"DANCER",ko:"무대",bpm:120,dur:8},{name:"METRONOME",ko:"메트로놈",bpm:90,dur:8},{name:"RUNNER",ko:"달리는 개",bpm:120,dur:8}];function uo(o){const e=o/4*Math.PI*2;return[.5+.33*Math.sin(e),.56+.17*Math.sin(2*e)]}const At=360,xt=640;function fo(o,e,t,n,s,a){o.beginPath(),o.moveTo(e+a,t),o.arcTo(e+n,t,e+n,t+s,a),o.arcTo(e+n,t+s,e,t+s,a),o.arcTo(e,t+s,e,t,a),o.arcTo(e,t,e+n,t,a),o.closePath()}function Ls(o,e){const t=At,n=xt,s=e*120/60,a=o.createLinearGradient(0,0,0,n);a.addColorStop(0,"#2a1a10"),a.addColorStop(1,"#5a3418"),o.fillStyle=a,o.fillRect(0,0,t,n);for(let p=0;p<14;p++)o.fillStyle=p%2?"rgba(0,0,0,0.18)":"rgba(255,200,140,0.06)",o.fillRect(p*t/14+Math.sin(e*.7+p)*3,0,t/28,n*.78);o.fillStyle="#1d3b46",o.fillRect(0,n*.78,t,n*.22),o.fillStyle="#2f5e6c";for(let p=0;p<6;p++)o.fillRect(0,n*.78+p*22+4,t,3);const i=t/2+Math.sin(e/8*Math.PI*2)*t*.22,r=o.createRadialGradient(i,n*.5,10,i,n*.5,t*.5);r.addColorStop(0,"rgba(255,240,200,0.35)"),r.addColorStop(1,"rgba(255,240,200,0)"),o.fillStyle=r,o.fillRect(0,0,t,n);const c=Math.abs(Math.sin(s*Math.PI))*10,l=n*.33-c,u=Math.sin(s*Math.PI)*.18;o.save(),o.translate(i,l),o.rotate(u*.3),o.strokeStyle="#141414",o.lineCap="round",o.lineWidth=26;const f=Math.sin(s*Math.PI)*26;o.beginPath(),o.moveTo(-14,150),o.lineTo(-22-f*.4,300+c),o.moveTo(14,150),o.lineTo(22-f*.4,300+c),o.stroke(),o.fillStyle="#d0202c",o.beginPath(),o.moveTo(-34,20),o.lineTo(34,20),o.lineTo(58+u*30,170),o.lineTo(-58+u*30,170),o.closePath(),o.fill();const m=(p,h)=>{const d=-.5+Math.sin(s*Math.PI+h)*.7,g=p*(40+Math.cos(d)*60),x=40+Math.sin(d)*60;o.strokeStyle="#e8b896",o.lineWidth=16,o.beginPath(),o.moveTo(p*30,32),o.lineTo(g,x),o.stroke(),o.fillStyle="#202020",fo(o,g-22,x-18,44,36,5),o.fill(),o.fillStyle=`hsl(${(e*90+p*60)%360} 80% 60%)`,fo(o,g-16,x-12,32,24,4),o.fill()};m(-1,0),m(1,Math.PI),o.fillStyle="#e8b896",o.beginPath(),o.arc(0,-10,30,0,Math.PI*2),o.fill(),o.fillStyle="#1a0e08",o.beginPath(),o.arc(0,-18,32,Math.PI*.95,Math.PI*2.05),o.fill(),o.fillRect(-32,-18,10,50),o.fillRect(22,-18,10,50),o.restore(),o.save(),o.translate(t*.84,n*.62),o.rotate(-.12),o.fillStyle="#8a4a1c",o.beginPath(),o.ellipse(0,40,34,46,0,0,Math.PI*2),o.ellipse(0,-20,26,32,0,0,Math.PI*2),o.fill(),o.fillStyle="#2a160a",o.fillRect(-3,-110,6,120),o.restore()}function Bs(o,e){const t=At,n=xt,s=e*90/60,a=Math.floor(s/4)%3;if(a===0)["#c0c0c0","#c0c000","#00c0c0","#00c000","#c000c0","#c00000","#0000c0"].forEach((f,m)=>{o.fillStyle=f,o.fillRect(m*t/7,0,t/7+1,n)});else if(a===1){o.fillStyle="#f2f0e8",o.fillRect(0,0,t,n);for(let u=0;u<12;u++)o.fillStyle="#111",o.fillRect(0,u*n/12,t,2),[1,3,6,8,10].includes(u%12)&&o.fillRect(0,u*n/12+6,t*.6,n/12-10)}else for(let u=0;u<24;u++)o.fillStyle=`hsl(${u*15} 90% 55%)`,o.beginPath(),o.moveTo(t/2,n/2),o.arc(t/2,n/2,n,u/24*Math.PI*2+e*.2,(u+1)/24*Math.PI*2+e*.2),o.fill();const i=t/2,r=n*.8,c=n*.2;o.fillStyle="#5a2c10",o.beginPath(),o.moveTo(i-90,r),o.lineTo(i+90,r),o.lineTo(i+34,c),o.lineTo(i-34,c),o.closePath(),o.fill(),o.fillStyle="#e8d8a8",o.fillRect(i-18,c+30,36,r-c-90),o.fillStyle="#3a1a08";for(let u=0;u<14;u++)o.fillRect(i-18,c+40+u*24,u%2?10:18,2);const l=Math.sin(s*Math.PI)*.55;o.save(),o.translate(i,r-70),o.rotate(l),o.fillStyle="#c8c8c8",o.fillRect(-3,-324,6,r-c-60),o.fillStyle="#d8a020",o.beginPath(),o.moveTo(-22,-260),o.lineTo(22,-260),o.lineTo(30,-210),o.lineTo(-30,-210),o.closePath(),o.fill(),o.restore(),o.fillStyle="#2a1206",o.fillRect(i-100,r,200,18)}function Ds(o,e){const t=At,n=xt;o.fillStyle="#9a8670",o.fillRect(0,0,t,n);let s=7;const a=()=>(s=s*16807%2147483647)/2147483647;for(let h=0;h<260;h++){const d=a()*t,g=a()*n,x=3+a()*18;o.fillStyle=`hsl(${30+a()*10} ${18+a()*12}% ${42+a()*24}%)`,o.beginPath(),o.ellipse(d,g,x,x*(.5+a()*.5),a()*3,0,Math.PI*2),o.fill()}for(let h=0;h<40;h++)o.fillStyle=`hsl(35 10% ${70+a()*15}%)`,o.beginPath(),o.arc(a()*t,a()*n,2+a()*4,0,Math.PI*2),o.fill();o.fillStyle="#5a4630",o.fillRect(0,0,t*.4,n*.06);const[i,r]=uo(e),[c,l]=uo(e+.05),u=Math.atan2((l-r)*n,(c-i)*t),f=i*t,m=r*n,p=Math.sin(e*22);o.fillStyle="rgba(40,30,20,0.35)",o.beginPath(),o.ellipse(f+10,m+16,34,12,u,0,Math.PI*2),o.fill(),o.save(),o.translate(f,m),o.rotate(u),o.strokeStyle="#cfc6b6",o.lineWidth=6,o.lineCap="round";for(const[h,d]of[[-16,0],[-8,Math.PI],[14,Math.PI],[20,0]])o.beginPath(),o.moveTo(h,4),o.lineTo(h+Math.sin(e*22+d)*8,20),o.stroke();o.fillStyle="#ddd5c6",o.beginPath(),o.ellipse(0,0,28,13+p,.12,0,Math.PI*2),o.fill(),o.beginPath(),o.ellipse(30,-8,13,11,0,0,Math.PI*2),o.fill(),o.fillStyle="#bfb5a2",o.beginPath(),o.ellipse(26,-18,5,8,-.4,0,Math.PI*2),o.ellipse(36,-17,5,8,.4,0,Math.PI*2),o.fill(),o.fillStyle="#222",o.beginPath(),o.arc(41,-7,2.5,0,Math.PI*2),o.fill(),o.strokeStyle="#ddd5c6",o.lineWidth=7,o.beginPath(),o.moveTo(-26,-4),o.quadraticCurveTo(-40,-16-p*5,-46,-6),o.stroke(),o.strokeStyle="#c03040",o.lineWidth=4,o.beginPath(),o.moveTo(14,-12),o.lineTo(10,12),o.stroke(),o.restore()}function Ve(o,e,t){e===2?Ds(o,t):e===0?Ls(o,t):Bs(o,t);const n=Math.floor(t%1*30);o.font="bold 13px monospace",o.fillStyle="#000",o.fillRect(8,xt-26,92,18),o.fillStyle="#fff",o.fillText(`T${e+1} 00:0${Math.floor(t)}:${String(n).padStart(2,"0")}`,12,xt-12)}const oe=o=>440*Math.pow(2,(o-69)/12);async function Us(o){const t=Do[o],n=new OfflineAudioContext(2,Math.ceil(t.dur*32e3),32e3),s=n.createGain();s.gain.value=.7;const a=n.createConvolver(),i=n.createBuffer(2,32e3*1.6,32e3);for(let m=0;m<2;m++){const p=i.getChannelData(m);for(let h=0;h<p.length;h++)p[h]=(Math.random()*2-1)*Math.pow(1-h/p.length,3)*.4}a.buffer=i;const r=n.createGain();r.gain.value=.25,s.connect(n.destination),s.connect(a).connect(r).connect(n.destination);const c=60/t.bpm,l=(m,p,h=.5,d=.3,g="triangle")=>{const x=n.createOscillator();x.type=g,x.frequency.value=oe(p);const b=n.createOscillator();b.frequency.value=oe(p)*2.001;const A=n.createGain();A.gain.setValueAtTime(1e-4,m),A.gain.exponentialRampToValueAtTime(d,m+.005),A.gain.exponentialRampToValueAtTime(1e-4,m+h);const S=n.createGain();S.gain.value=.25,x.connect(A),b.connect(S).connect(A),A.connect(s),x.start(m),b.start(m),x.stop(m+h+.05),b.stop(m+h+.05)},u=(m,p,h,d,g="highpass")=>{const x=n.createBuffer(1,Math.ceil(p*32e3),32e3),b=x.getChannelData(0);for(let T=0;T<b.length;T++)b[T]=(Math.random()*2-1)*(1-T/b.length)**2;const A=n.createBufferSource();A.buffer=x;const S=n.createBiquadFilter();S.type=g,S.frequency.value=h;const E=n.createGain();E.gain.value=d,A.connect(S).connect(E).connect(s),A.start(m)},f=(m,p=.7)=>{const h=n.createOscillator();h.frequency.setValueAtTime(120,m),h.frequency.exponentialRampToValueAtTime(45,m+.12);const d=n.createGain();d.gain.setValueAtTime(p,m),d.gain.exponentialRampToValueAtTime(.001,m+.3),h.connect(d).connect(s),h.start(m),h.stop(m+.32)};if(o===2){const m=[64,67,71,67,64,62,59,62,64,67,71,74,71,67,64,59];for(let p=0;p<32;p++){const h=p*c*.5;p%4===0&&f(h,.45),u(h,.04,6e3,p%2?.06:.1),p%2===0&&l(h,m[p/2%16],c*.45,.16),p%8===0&&l(h,40+[0,3,5,3][p/8%4],c*1.8,.2,"sine")}}else if(o===0){const m=[69,72,74,76,79,76,74,72,69,67,69,72,74,72,69,64],p=[[57,60,64],[53,57,60],[55,59,62],[52,55,59]];for(let h=0;h<16;h++){const d=h*c;if(h%2===0&&f(d,.55),u(d+c/2,.05,7e3,.12),h%4===2&&u(d,.16,1800,.18,"bandpass"),l(d,m[h],c*.9,.18),h%4===0)for(const g of p[h/4|0])l(d,g,c*3.8,.06,"sine");l(d,[45,41,43,40][h/4|0]+(h%2?12:0),c*.45,.22,"sine")}}else{for(let p=0;p<12;p++){const h=p*c;if(u(h,.03,p%4===0?2400:3400,.4,"bandpass"),p%4===0)for(const d of[[60,64,67,71],[57,60,64,67],[53,57,60,64]][p/4|0])l(h,d,c*3.6,.07,"sine")}[48,55,52,53,50,48].forEach((p,h)=>{const d=h*c*2,g=n.createOscillator();g.type="sawtooth",g.frequency.value=oe(p);const x=n.createOscillator();x.frequency.value=5.2;const b=n.createGain();b.gain.value=oe(p)*.006,x.connect(b).connect(g.frequency);const A=n.createBiquadFilter();A.type="lowpass",A.frequency.value=900;const S=n.createGain();S.gain.setValueAtTime(1e-4,d),S.gain.exponentialRampToValueAtTime(.13,d+.25),S.gain.setValueAtTime(.13,d+c*1.7),S.gain.exponentialRampToValueAtTime(1e-4,d+c*2.1),g.connect(A).connect(S).connect(s),g.start(d),x.start(d),g.stop(d+c*2.2),x.stop(d+c*2.2)})}return n.startRendering()}const Ns={mp4:"video/mp4",m4v:"video/mp4",mov:"video/quicktime",webm:"video/webm",mkv:"video/x-matroska","3gp":"video/3gpp",jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",webp:"image/webp",heic:"image/heic",gif:"image/gif"};function ho(o,e){return new Promise(t=>{if(o.readyState>=2)return t(!0);const n=a=>{clearTimeout(s),t(a)},s=setTimeout(()=>n(o.readyState>=2),e);o.addEventListener("loadeddata",()=>n(!0),{once:!0}),o.addEventListener("error",()=>n(!1),{once:!0})})}function _s(o){try{const e=document.createElement("canvas");e.width=e.height=16;const t=e.getContext("2d",{willReadFrequently:!0});t.drawImage(o,0,0,16,16);const n=t.getImageData(0,0,16,16).data;let s=0;for(let a=0;a<n.length;a+=4)s+=n[a]+n[a+1]+n[a+2];return Math.round(s/(n.length/4)/3)}catch(e){return`unreadable ${e.message}`}}let Hs=0;const qs=()=>`${Date.now().toString(36)}${(Hs++).toString(36)}`;function Uo(o,e){return{id:qs(),name:e,kind:o,url:"",mime:"",duration:8,w:16,h:9,audio:null,audioGain:1,thumb:"",bpm:0,loopIn:0,loopOut:8,speed:1,gain:1}}function ge(o){const e=Do[o],t=Uo("test",e.name);t.test=o,t.duration=t.loopOut=e.dur,t.w=360,t.h=640,t.bpm=e.bpm;const n=document.createElement("canvas");return n.width=At,n.height=xt,Ve(n.getContext("2d"),o,1.2),t.thumb=Ie(n,At,xt),Us(o).then(s=>{t.audio=s,t.audioGain=No(s)}),t}function No(o){let e=0,t=0;for(let s=0;s<o.numberOfChannels;s++){const a=o.getChannelData(s);for(let i=0;i<a.length;i+=4)e+=a[i]*a[i],t++}const n=Math.sqrt(e/Math.max(1,t));return n<1e-4?1:Math.min(6,.1/n)}let mo=null;async function $s(o){if(o.size>25e7)return null;try{return mo??=new OfflineAudioContext(2,1,44100),await mo.decodeAudioData(await o.arrayBuffer())}catch{return null}}function Ie(o,e,t){const n=document.createElement("canvas"),s=120/Math.max(e,t);return n.width=Math.max(8,Math.round(e*s)),n.height=Math.max(8,Math.round(t*s)),n.getContext("2d").drawImage(o,0,0,n.width,n.height),n.toDataURL("image/jpeg",.7)}function _o(o,e,t=2500){return new Promise(n=>{if(Math.abs(o.currentTime-e)<.002&&o.readyState>=2)return n();const s=()=>{o.removeEventListener("seeked",s),clearTimeout(a),n()},a=setTimeout(s,t);o.addEventListener("seeked",s),o.currentTime=e})}function ze(o){const e=document.createElement("video");return e.src=o,e.muted=!0,e.playsInline=!0,e.setAttribute("playsinline",""),e.preload="auto",e.crossOrigin="anonymous",e}async function Ce(o,e){const t=(e.split(".").pop()||"").toLowerCase(),n=o;if(Ct("file",`picked ${e}`,{size:o.size,type:o.type||"(none)",ext:t,modified:n.lastModified?new Date(n.lastModified).toISOString():void 0,head:await Ko(o)}),!o.size)throw he("file",`${e} is empty (0 bytes)`),new Error("empty");let s;try{const u=performance.now(),f=await o.arrayBuffer();s=new Blob([f],{type:o.type||Ns[t]||""}),Ct("file",`copied ${f.byteLength} bytes in ${Math.round(performance.now()-u)}ms, type=${s.type||"(none)"}`)}catch(u){throw he("file",`could not read ${e}: ${u.name} ${u.message}`),new Error("unreadable")}const a=s.type.startsWith("image/"),i=Uo(a?"image":"video",e.replace(/\.[^.]+$/,"").slice(0,12).toUpperCase()||"CLIP");if(i.blob=s,i.mime=s.type,i.url=URL.createObjectURL(s),a){const u=new Image;return u.src=i.url,await u.decode().catch(()=>{}),i.w=u.naturalWidth||16,i.h=u.naturalHeight||9,i.thumb=Ie(u,i.w,i.h),i}let r=ze(i.url);Xe(r,i.name);let c=await ho(r,6e3);if(c||(_e("video",`${i.name}: no first frame, retrying`,{rs:r.readyState,code:r.error?.code}),r.removeAttribute("src"),r.load(),r=document.createElement("video"),r.muted=!0,r.playsInline=!0,r.setAttribute("playsinline",""),r.preload="auto",Xe(r,i.name+"#2"),r.src=i.url,r.load(),c=await ho(r,6e3)),!c)throw he("video",`${i.name}: cannot be decoded here`,{code:r.error?.code,msg:r.error?.message,rs:r.readyState,w:r.videoWidth,h:r.videoHeight}),URL.revokeObjectURL(i.url),new Error(r.error?.code===4?"format":"decode");i.w=r.videoWidth||16,i.h=r.videoHeight||9,isFinite(r.duration)||(r.currentTime=1e7,await new Promise(u=>{r.addEventListener("durationchange",u,{once:!0}),setTimeout(u,3e3)})),i.duration=isFinite(r.duration)&&r.duration>0?r.duration:8,i.loopOut=i.duration,await _o(r,Math.min(.2,i.duration/2)),r.readyState>=2&&(i.thumb=Ie(r,i.w,i.h)),Ct("video",`${i.name} ready ${i.w}x${i.h} ${i.duration.toFixed(2)}s, frame luma=${_s(r)}`),r.removeAttribute("src"),r.load();const l=await $s(s);return Ct("audio",`${i.name} sound ${l?`${l.duration.toFixed(2)}s ${l.numberOfChannels}ch`:"none / not decodable"}`),l&&(i.audio=l,i.audioGain=No(l)),i}function Gs(){return['video/webm;codecs="vp8,opus"',"video/webm",'video/mp4;codecs="avc1.42E01E,mp4a.40.2"',"video/mp4"].find(e=>typeof MediaRecorder<"u"&&MediaRecorder.isTypeSupported(e))||""}class Ws{rec=null;mic=null;chunks=[];started=0;get active(){return!!this.rec}async start(e,t){if(this.rec)return!0;e.want(t);for(let a=0;a<60&&!(e.ready&&e.facing===t);a++)await new Promise(i=>setTimeout(i,100));if(!e.stream)return!1;try{this.mic=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!0}})}catch{this.mic=null}const n=[...e.stream.getVideoTracks(),...this.mic?.getAudioTracks()??[]],s=Gs();return this.chunks=[],this.rec=new MediaRecorder(new MediaStream(n),{mimeType:s||void 0,videoBitsPerSecond:6e6}),this.rec.ondataavailable=a=>a.data.size&&this.chunks.push(a.data),this.rec.start(250),this.started=performance.now(),!0}stop(){const e=this.rec;return e?new Promise(t=>{e.onstop=()=>{this.mic?.getTracks().forEach(a=>a.stop()),this.mic=null,this.rec=null;const n=(e.mimeType||"video/webm").split(";")[0],s=new Blob(this.chunks,{type:n});t(s.size?s:null)},e.stop()}):Promise.resolve(null)}}const Vs=[["orig","ORIGINAL","원본+자동 조율"],["reson","RESONATE","공명(화음)"],["pulse","PULSE","리듬"],["pad","PAD","패드"],["mute","MUTE","소리 없음"]],re=16,po="#ffe02a",st=[],gt=[];let zs=0;const Ho=o=>`${o}${Date.now().toString(36)}${(zs++).toString(36)}`;function js(o,e,t,n){const s=new Set(st.map(i=>i.color)),a=e==="tap"||e==="person";return{id:Ho("ing"),name:`${e.toUpperCase()} ${st.length+1}`,color:a?po:ie.find(i=>!s.has(i))??ie[st.length%ie.length],src:o,kind:e,track:null,key:{lo:.55,hi:.7,color:"#00d040",invert:!1},shape:{type:0,size:.32,ring:.25,spin:0},maskStamp:0,seed:{x:.5,y:.5,t},fixes:[],loopIn:t,loopOut:n,thumbs:[],look:{id:"none",a:.5,b:.5,colors:{}},lineColor:a?po:"auto",line:e==="shape"||a?2:1,lineSize:1,linePal:0,sound:{mode:"reson",auto:!0,autoMode:!0,shift:0,gain:1},an:null,cell:-1,cellManual:!1}}function vo(o){const e=o.kind.toUpperCase(),t=st.filter(s=>s.name.startsWith(e+" ")).map(s=>parseInt(s.name.slice(e.length+1))||0),n=new Set(st.map(s=>s.color));return{...o,id:Ho("ing"),name:`${e} ${Math.max(st.length,...t)+1}`,color:n.has(o.color)?ie.find(s=>!n.has(s))??o.color:o.color,seed:{...o.seed},fixes:(o.fixes??[]).map(s=>({...s})),key:{...o.key},shape:{...o.shape},look:{...o.look,colors:{...o.look.colors??{}}},sound:{...o.sound},thumbs:[...o.thumbs],an:o.an?{...o.an,chroma:[...o.an.chroma],onsets:[...o.an.onsets]}:null,cell:-1,cellManual:!1,saved:!1,dead:void 0}}const Ks="prepared-tv-board";function Ys(){return new Promise((o,e)=>{const t=indexedDB.open(Ks,1);t.onupgradeneeded=()=>{t.result.createObjectStore("sources",{keyPath:"id"}),t.result.createObjectStore("ings",{keyPath:"id"})},t.onsuccess=()=>o(t.result),t.onerror=()=>e(t.error)})}async function $t(o,e,t){const n=await Ys();return new Promise((s,a)=>{const i=t(n.transaction(o,e).objectStore(o));i.onsuccess=()=>s(i.result),i.onerror=()=>a(i.error)})}async function xe(o){if(o.blob)try{await $t("sources","readwrite",e=>e.put({id:o.id,name:o.name,blob:o.blob}))}catch(e){console.warn("source not saved",e)}}async function Xs(o){const{src:e,track:t,...n}=o,s={...n,an:o.an?{...o.an}:null,srcId:e.id,track:t?{fps:t.fps,start:t.start,frames:t.frames,cx:t.cx,cy:t.cy,w:t.w,h:t.h,done:t.done}:null};try{await $t("ings","readwrite",a=>a.put(s))}catch(a){console.warn("ingredient not saved",a)}}async function Zs(o){try{await $t("ings","readwrite",e=>e.delete(o.id))}catch{}}function Qs(){const o=ge(0);o.id="test0";const e=ge(1);e.id="test1";const t=ge(2);t.id="test2",gt.push(o,e,t)}async function Js(o){let e=[],t=[];try{e=await $t("sources","readonly",n=>n.getAll()),t=await $t("ings","readonly",n=>n.getAll())}catch{return}for(const n of e)try{const s=await Ce(n.blob,n.name);s.id=n.id,s.name=n.name,gt.push(s),o()}catch(s){console.warn("source restore failed, removed",n.name,s.message),$t("sources","readwrite",a=>a.delete(n.id)).catch(()=>{})}for(const n of t.sort((s,a)=>s.id.localeCompare(a.id))){const s=gt.find(l=>l.id===n.srcId);if(!s||st.length>=re)continue;const{srcId:a,track:i,...r}=n;st.push({...r,src:s,saved:!0,track:i?{...i,running:!1,cancel:!1}:null});const c=st[st.length-1];c.look.colors??={},c.lineColor??="auto",o()}}const St=16e3;function ta(o,e,t){const n=o.sampleRate,s=Math.max(0,Math.floor(e*n)),a=Math.min(o.length,Math.floor(t*n)),i=n/St,r=Math.max(0,Math.floor((a-s)/i)),c=new Float32Array(r),l=Array.from({length:o.numberOfChannels},(u,f)=>o.getChannelData(f));for(let u=0;u<r;u++){const f=s+Math.floor(u*i);let m=0;for(const p of l)for(let h=0;h<Math.max(1,Math.floor(i));h++)m+=p[Math.min(p.length-1,f+h)];c[u]=m/(l.length*Math.max(1,Math.floor(i)))}return c}function go(o){const e=o.length,t=new Float32Array(e);for(let s=1,a=0;s<e;s++){let i=e>>1;for(;a&i;i>>=1)a^=i;a^=i,s<a&&([o[s],o[a]]=[o[a],o[s]])}for(let s=2;s<=e;s<<=1){const a=-2*Math.PI/s;for(let i=0;i<e;i+=s)for(let r=0;r<s/2;r++){const c=Math.cos(a*r),l=Math.sin(a*r),u=o[i+r],f=t[i+r],m=o[i+r+s/2]*c-t[i+r+s/2]*l,p=o[i+r+s/2]*l+t[i+r+s/2]*c;o[i+r]=u+m,t[i+r]=f+p,o[i+r+s/2]=u-m,t[i+r+s/2]=f-p}}const n=new Float32Array(e/2);for(let s=0;s<e/2;s++)n[s]=Math.hypot(o[s],t[s]);return n}function ea(o,e,t){const n=Math.floor(St/1e3),s=Math.floor(St/55),a=new Float32Array(s+1);for(let h=1;h<=s;h++){let d=0;for(let g=0;g<t;g++){const x=o[e+g]-o[e+g+h];d+=x*x}a[h]=d}let i=0,r=-1,c=1;for(let h=1;h<=s;h++){i+=a[h];const d=i>0?a[h]*h/i:1;a[h]=d}for(let h=n;h<s;h++){if(a[h]<.18){for(;h+1<s&&a[h+1]<a[h];)h++;r=h,c=a[h];break}a[h]<c&&(c=a[h],r=h)}if(r<0)return[0,1];const l=a[r-1]??a[r],u=a[r],f=a[r+1]??a[r],m=l-2*u+f,p=m?r+(l-f)/(2*m):r;return[St/p,c]}function xo(o){return o&&o.silent?"mute":"reson"}function oa(o,e,t){const n={f0:0,midi:0,pc:-1,conf:0,centroid:1e3,onsetRate:0,onsets:[],rms:0,normGain:1,register:60,rhythm:0,chroma:new Array(12).fill(0),silent:!0};if(!o)return n;const s=ta(o,e,t);if(s.length<2048)return n;let a=0;for(let w=0;w<s.length;w++)a+=s[w]*s[w];const i=Math.sqrt(a/s.length);if(i<.002)return{...n,rms:i};const r=1024,c=512,l=[],u=new Float32Array(12);let f=0,m=0;const p=Math.floor(St/55),h=new Float32Array(r/2);let d=0;for(let w=0;w+r+p<s.length;w+=c){let k=0;for(let G=0;G<r;G++)k+=s[w+G]*s[w+G];if(k=Math.sqrt(k/r),k<i*.35)continue;f++;const[P,D]=ea(s,w,r);if(P>0&&D<.25){const G=69+12*Math.log2(P/440);l.push(G),u[(Math.round(G)%12+12)%12]+=1-D,m+=D}if(d++%2===0){const G=new Float32Array(r);for(let I=0;I<r;I++)G[I]=s[w+I]*(.5-.5*Math.cos(2*Math.PI*I/(r-1)));const ot=go(G);for(let I=0;I<ot.length;I++)h[I]+=ot[I]}}const g=new Array(12).fill(0),x=4096,b=[];for(let w=0;w<x/2;w++){const k=w*St/x;b.push(k<100||k>2e3?-1:(Math.round(69+12*Math.log2(k/440))%12+12)%12)}for(let w=0;w+x<=s.length;w+=x/2){const k=new Float32Array(x);for(let D=0;D<x;D++)k[D]=s[w+D]*(.5-.5*Math.cos(2*Math.PI*D/(x-1)));const P=go(k);for(let D=0;D<P.length;D++)b[D]>=0&&(g[b[D]]+=P[D]*P[D])}const A=g.reduce((w,k)=>w+k,0)||1;for(let w=0;w<12;w++)g[w]/=A;let S=0,E=0;for(let w=1;w<h.length;w++)S+=h[w]*(w*St/r),E+=h[w];const T=E?S/E:1e3;l.sort((w,k)=>w-k);const F=f?l.length/f:0,C=l.length?1-m/l.length/.25:0,L=Math.max(0,Math.min(1,F*(.5+.5*C))),_=l.length?l[Math.floor(l.length/2)]:0;let U=-1,X=0;u.forEach((w,k)=>w>X&&(X=w,U=k));const q=Math.round(St*.01),tt=[];for(let w=0;w+q<=s.length;w+=q){let k=0;for(let P=0;P<q;P++)k+=Math.abs(s[w+P]);tt.push(k/q)}const $=tt.map((w,k)=>Math.max(0,w-(tt[k-1]??w))),V=$.reduce((w,k)=>w+k,0)/Math.max(1,$.length),j=Math.sqrt($.reduce((w,k)=>w+(k-V)**2,0)/Math.max(1,$.length)),Q=V+j*1.2,J=[];for(let w=1;w<$.length-1;w++)$[w]>Q&&$[w]>=$[w-1]&&$[w]>=$[w+1]&&(!J.length||w*.01-J[J.length-1]>.08)&&J.push(w*.01);const W=s.length/St,et=J.length/W,ut=69+12*Math.log2(T/440),y=L>.4&&_?_*.7+ut*.3:ut;return{f0:_?440*Math.pow(2,(_-69)/12):0,midi:_,pc:L>.25?U:-1,conf:L,centroid:T,onsetRate:et,onsets:J,rms:i,normGain:Math.min(6,.1/i),register:y,rhythm:et,chroma:g,silent:!1}}function na(o,e,t,n,s){const a=t*n;if(e.length<a*4)return{data:o,cut:0};const i=new Uint8Array(a);let r=0;for(let y=0;y<a;y++)o[y]>127&&(i[y]=1,r++);if(!r)return{data:o,cut:0};const c=new Float32Array(a);for(let y=0;y<a;y++)c[y]=(e[y*4]+e[y*4+1]+e[y*4+2])/3;const l=new Float32Array(a);for(let y=1;y<n-1;y++)for(let w=1;w<t-1;w++){let k=0,P=0;for(let G=-1;G<=1;G++)for(let ot=-1;ot<=1;ot++){const I=c[(y+G)*t+w+ot];k+=I,P+=I*I}const D=k/9;l[y*t+w]=Math.sqrt(Math.max(0,P/9-D*D))/Math.max(8,D)}const u=[],f=new Uint8Array(a);for(let y=0;y<n;y++)for(let w=0;w<t;w++){const k=y*t+w;if(i[k])for(let P=-6;P<=6;P+=2)for(let D=-6;D<=6;D+=2){const G=w+D,ot=y+P;if(G<0||ot<0||G>=t||ot>=n)continue;const I=ot*t+G;!i[I]&&!f[I]&&(f[I]=1,u.push(I))}}if(u.length<20)return{data:o,cut:0};const m=y=>{const w=e[y*4]+e[y*4+1]+e[y*4+2]+1;return[e[y*4]/w,e[y*4+1]/w]},p=y=>y.sort((w,k)=>w-k)[y.length>>1],h=[],d=[],g=[],x=[];for(const y of u){const[w,k]=m(y);h.push(w),d.push(k),g.push(c[y]),x.push(l[y])}const b=p(h),A=p(d),S=Math.max(8,p(g)),E=Math.max(.06,p(x)*2.2),T=new Uint8Array(a);for(let y=0;y<a;y++){if(!i[y])continue;const[w,k]=m(y);Math.hypot(w-b,k-A)<.03&&c[y]>S*.2&&c[y]<S*.7&&l[y]<=E&&(T[y]=1)}const F=new Uint8Array(a);for(let y=0;y<n;y++)for(let w=0;w<t;w++)if(!i[y*t+w])for(let k=-3;k<=3;k++)for(let P=-3;P<=3;P++){const D=w+P,G=y+k;D>=0&&G>=0&&D<t&&G<n&&(F[G*t+D]=1)}const C=y=>{const w=y%t,k=y/t|0;return F[y]===1||w<3||k<3||w>=t-3||k>=n-3},L=new Uint8Array(a),_=new Uint8Array(a),U=[];for(let y=0;y<a;y++){if(!T[y]||L[y])continue;const w=[];let k=!1;for(L[y]=1,U.push(y);U.length;){const P=U.pop();w.push(P),!k&&C(P)&&(k=!0);const D=P%t,G=P/t|0;D>0&&T[P-1]&&!L[P-1]&&(L[P-1]=1,U.push(P-1)),D<t-1&&T[P+1]&&!L[P+1]&&(L[P+1]=1,U.push(P+1)),G>0&&T[P-t]&&!L[P-t]&&(L[P-t]=1,U.push(P-t)),G<n-1&&T[P+t]&&!L[P+t]&&(L[P+t]=1,U.push(P+t))}if(k&&w.length>=r*.05)for(const P of w)_[P]=1}for(let y=0;y<40;y++){const w=[];for(let k=0;k<a;k++){if(!i[k]||_[k])continue;const P=k%t,D=k/t|0;if(!(P>0&&_[k-1]||P<t-1&&_[k+1]||D>0&&_[k-t]||D<n-1&&_[k+t]))continue;const[G,ot]=m(k);if(!(Math.hypot(G-b,ot-A)<.06&&c[k]<S*.9))continue;let I=y<2;if(!I){const N=Y=>Y<0||Y>=a||!i[Y]||_[Y]===1;I=(N(k-1)||N(k-2)||N(k+1)||N(k+2))&&(N(k-t)||N(k-2*t)||N(k+t)||N(k+2*t)),I&&=(N(k-1)||N(k-2))&&(N(k+1)||N(k+2))||(N(k-t)||N(k-2*t))&&(N(k+t)||N(k+2*t))}I&&w.push(k)}if(!w.length)break;for(const k of w)_[k]=1}const X=new Uint8Array(a);for(let y=0;y<a;y++)i[y]&&!_[y]&&(X[y]=1);const q=new Int32Array(a).fill(-1),tt=[];for(let y=0;y<a;y++){if(!X[y]||q[y]>=0)continue;const w=tt.length;let k=0;for(q[y]=w,U.push(y);U.length;){const P=U.pop();k++;const D=P%t,G=P/t|0;D>0&&X[P-1]&&q[P-1]<0&&(q[P-1]=w,U.push(P-1)),D<t-1&&X[P+1]&&q[P+1]<0&&(q[P+1]=w,U.push(P+1)),G>0&&X[P-t]&&q[P-t]<0&&(q[P-t]=w,U.push(P-t)),G<n-1&&X[P+t]&&q[P+t]<0&&(q[P+t]=w,U.push(P+t))}tt.push(k)}if(!tt.length)return{data:o,cut:0};const $=Math.max(...tt);for(let y=0;y<a;y++)X[y]&&tt[q[y]]<$*.15&&(X[y]=0);const V=new Uint8Array(a);for(let y=0;y<t;y++)for(const w of[0,n-1]){const k=w*t+y;!X[k]&&!V[k]&&(V[k]=1,U.push(k))}for(let y=0;y<n;y++)for(const w of[0,t-1]){const k=y*t+w;!X[k]&&!V[k]&&(V[k]=1,U.push(k))}for(;U.length;){const y=U.pop(),w=y%t,k=y/t|0;w>0&&!X[y-1]&&!V[y-1]&&(V[y-1]=1,U.push(y-1)),w<t-1&&!X[y+1]&&!V[y+1]&&(V[y+1]=1,U.push(y+1)),k>0&&!X[y-t]&&!V[y-t]&&(V[y-t]=1,U.push(y-t)),k<n-1&&!X[y+t]&&!V[y+t]&&(V[y+t]=1,U.push(y+t))}const j=new Uint8Array(a);let Q=0;for(let y=0;y<a;y++)X[y]?j[y]=o[y]:!V[y]&&!_[y]&&(j[y]=255),j[y]>127&&Q++;const J=Math.min(t-1,Math.max(0,Math.round(s[0]*t))),W=Math.min(n-1,Math.max(0,Math.round(s[1]*n))),et=j[W*t+J]>127;if(Q<r*.2||!et&&Q<r*.5)return{data:o,cut:0};const ut=1-Q/r;return ut>.005?{data:j,cut:ut}:{data:o,cut:0}}const Oe=()=>new URL("./",document.baseURI).href;async function sa(o){try{const s=await fetch(Oe()+o);if(s.ok&&!(s.headers.get("content-type")||"").includes("html"))return await s.arrayBuffer()}catch{}const e=await(await fetch(Oe()+o+".json")).json(),t=atob(e),n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n.buffer}class aa{model=null;tf=null;c=document.createElement("canvas");x=this.c.getContext("2d",{willReadFrequently:!0});busy=!1;async load(){const e=await qt(()=>import("./index-DlkYYufl.js").then(a=>a.hc),[],import.meta.url);await qt(()=>import("./dist-S6279hK-.js"),__vite__mapDeps([0,1]),import.meta.url);const{loadGraphModel:t}=await qt(async()=>{const{loadGraphModel:a}=await import("./dist-CMuHfCEm.js");return{loadGraphModel:a}},__vite__mapDeps([2,1]),import.meta.url);await e.setBackend("webgl"),await e.ready();const n=await(await fetch(Oe()+"models/tfjs-selfie/model.json")).json(),s=await sa("models/tfjs-selfie/group1-shard1of1.bin");this.model=await t(e.io.fromMemory({modelTopology:n.modelTopology,weightSpecs:n.weightsManifest[0].weights,weightData:s})),this.tf=e,this.c.width=this.c.height=256}async run(e){const t=this.tf,n=this.model;if(!t||!n||this.busy)return null;this.busy=!0;try{this.x.drawImage(e,0,0,256,256);const s=t.tidy(()=>{const r=t.expandDims(t.div(t.cast(t.browser.fromPixels(this.c),"float32"),255),0),c=n.predict(r);return t.slice(c,[0,0,0,1],[1,256,256,1])}),a=await s.data();s.dispose();const i=new Uint8Array(a.length);for(let r=0;r<a.length;r++)i[r]=Math.max(0,Math.min(255,a[r]*255));return i}finally{this.busy=!1}}}let Vt=null;const Fe=()=>new URL("./",document.baseURI).href;async function bo(){return Vt||(Vt=qt(async()=>{const{FilesetResolver:o}=await import("./vision_bundle-CW6lxI94.js");return{FilesetResolver:o}},[],import.meta.url).then(({FilesetResolver:o})=>o.forVisionTasks(Fe()+"mediapipe")),Vt.catch(()=>Vt=null)),Vt}let be=null;function yo(){return be||(be=(async()=>{try{return await WebAssembly.compile(new Uint8Array([0,97,115,109,1,0,0,0])),!0}catch{return!1}})()),be}async function Mo(o){try{const a=await fetch(Fe()+`models/${o}.tflite`);if(a.ok&&!(a.headers.get("content-type")||"").includes("html"))return new Uint8Array(await a.arrayBuffer())}catch{}const e=await fetch(Fe()+`models/${o}.json`);if(!e.ok)throw new Error(`model ${o} not found (${e.status})`);const t=await e.json(),n=atob(t),s=new Uint8Array(n.length);for(let a=0;a<n.length;a++)s[a]=n.charCodeAt(a);return s}class ia{c=document.createElement("canvas");x=this.c.getContext("2d",{willReadFrequently:!0});draw(e,t){if(e===this.c)return this.c;const[n,s]=e instanceof HTMLVideoElement?[e.videoWidth,e.videoHeight]:e instanceof HTMLImageElement?[e.naturalWidth,e.naturalHeight]:e instanceof HTMLCanvasElement?[e.width,e.height]:[t,t],a=t/Math.max(n,s,1),i=Math.max(16,Math.round(n*a)),r=Math.max(16,Math.round(s*a));return(this.c.width!==i||this.c.height!==r)&&(this.c.width=i,this.c.height=r),this.x.drawImage(e,0,0,i,r),this.c}}function ra(o){return o instanceof HTMLVideoElement?[o.videoWidth,o.videoHeight]:o instanceof HTMLImageElement?[o.naturalWidth,o.naturalHeight]:o instanceof HTMLCanvasElement?[o.width,o.height]:[256,256]}function Kt(o,e,t){let n=0,s=0,a=0;for(let i=0;i<o.length;i++)o[i]>127&&(n+=i%e,s+=i/e|0,a++);return{data:o,w:e,h:t,cx:a?(n/a+.5)/e:.5,cy:a?(s/a+.5)/t:.5,area:a/o.length}}class la{tapStatus="idle";personStatus="idle";message="";tap=null;person=null;tf=null;small=new ia;ts=0;tapP=null;personP=null;loadTap(){return this.tapP??=(async()=>{this.tapStatus="loading",this.message="사물 분리 모델 불러오는 중… (6MB)";try{if(!await yo())throw new Error("이 화면에서는 WebAssembly가 막혀 있어 TAP 대신 PERSON·KEY·SHAPE를 쓰세요");const{InteractiveSegmenterLegacy:e}=await qt(async()=>{const{InteractiveSegmenterLegacy:a}=await import("./vision_bundle-CW6lxI94.js");return{InteractiveSegmenterLegacy:a}},[],import.meta.url),t=await bo(),n=await Mo("magic_touch"),s=a=>e.createFromOptions(t,{baseOptions:{modelAssetBuffer:n,delegate:a},outputCategoryMask:!1,outputConfidenceMasks:!0});try{this.tap=await s("GPU")}catch{this.tap=await s("CPU")}this.tapStatus="ready",this.message=""}catch(e){this.tapStatus="error",this.message=String(e.message||e),console.warn("tap model failed",e)}})(),this.tapP}loadPerson(){return this.personP??=(async()=>{this.personStatus="loading",this.message="사람 분리 모델 불러오는 중…";try{if(!await yo())throw new Error("wasm blocked");const{ImageSegmenter:e}=await qt(async()=>{const{ImageSegmenter:a}=await import("./vision_bundle-CW6lxI94.js");return{ImageSegmenter:a}},[],import.meta.url),t=await bo(),n=await Mo("selfie_segmenter"),s=a=>e.createFromOptions(t,{baseOptions:{modelAssetBuffer:n,delegate:a},runningMode:"VIDEO",outputCategoryMask:!1,outputConfidenceMasks:!0});try{this.person=await s("GPU")}catch{this.person=await s("CPU")}this.personStatus="ready",this.message=""}catch(e){console.warn("person model via mediapipe failed, trying tfjs",e);try{this.tf=new aa,await this.tf.load(),this.personStatus="ready",this.message=""}catch(t){this.personStatus="error",this.message="사람 분리 모델을 불러오지 못했어요",console.warn(t)}}})(),this.personP}crop=document.createElement("canvas");cropX=this.crop.getContext("2d");tapAt(e,t,n,s){if(!this.tap)return null;try{const a=this.small.draw(e,256),i=a.width,r=a.height;let c=a,l=t,u=n;if(s){const[h,d,g,x]=s,b=Math.max(1,Math.round(g*i)),A=Math.max(1,Math.round(x*r)),S=256/Math.max(b,A),E=Math.max(16,Math.round(b*S)),T=Math.max(16,Math.round(A*S));(this.crop.width!==E||this.crop.height!==T)&&(this.crop.width=E,this.crop.height=T);const[F,C]=ra(e);this.cropX.drawImage(e,h*F,d*C,g*F,x*C,0,0,E,T),c=this.crop,l=(t-h)/g,u=(n-d)/x}const f=this.tap.segment(c,{keypoint:{x:Math.min(.999,Math.max(0,l)),y:Math.min(.999,Math.max(0,u))}}),m=f.confidenceMasks?.[0];let p=null;if(m){const h=m.getAsFloat32Array(),d=new Uint8Array(i*r);if(s){const[g,x,b,A]=s;for(let S=0;S<r;S++){const T=((S+.5)/r-x)/A;if(T<0||T>=1)continue;const F=Math.min(m.height-1,Math.floor(T*m.height));for(let C=0;C<i;C++){const L=((C+.5)/i-g)/b;L<0||L>=1||(d[S*i+C]=h[F*m.width+Math.min(m.width-1,Math.floor(L*m.width))]*255)}}}else for(let g=0;g<h.length&&g<d.length;g++)d[g]=h[g]*255;p=Kt(d,i,r)}return f.close?.(),p}catch(a){return console.warn("tap segment error",a),null}}frame(e){return this.small.draw(e,256)}async personOf(e){if(this.tf){const n=await this.tf.run(e);return n?Kt(Uint8Array.from(n),256,256):null}if(!this.person)return null;let t=null;this.ts=Math.max(this.ts+1,performance.now());try{this.person.segmentForVideo(this.small.draw(e,256),this.ts,n=>{const s=n.confidenceMasks?.[0];if(s){const a=s.getAsFloat32Array(),i=new Uint8Array(a.length);for(let r=0;r<a.length;r++)i[r]=a[r]*255;t=Kt(i,s.width,s.height)}n.close()})}catch(n){console.warn("person segment error",n)}return t}}const Tt=new la,ca=10;function ua(o,e,t,n,s){const a=document.createElement("canvas"),i=72/Math.max(e,t);a.width=Math.max(8,Math.round(e*i)),a.height=Math.max(8,Math.round(t*i));const r=a.getContext("2d");r.fillStyle="#101010",r.fillRect(0,0,a.width,a.height);const c=document.createElement("canvas");c.width=n.w,c.height=n.h;const l=c.getContext("2d"),u=l.createImageData(n.w,n.h);for(let p=0;p<n.data.length;p++)u.data[p*4+3]=n.data[p]>110?255:0;l.putImageData(u,0,0);const f=document.createElement("canvas");f.width=a.width,f.height=a.height;const m=f.getContext("2d");return m.drawImage(c,0,0,a.width,a.height),m.globalCompositeOperation="source-in",m.drawImage(o,0,0,a.width,a.height),r.drawImage(f,0,0),r.strokeStyle=s,r.lineWidth=3,r.strokeRect(1.5,1.5,a.width-3,a.height-3),a.toDataURL("image/png")}async function fa(o){const e=o.src;if(e.kind==="test"){const t=document.createElement("canvas");t.width=At,t.height=xt;const n=t.getContext("2d");return{at:async s=>(Ve(n,e.test??0,s),t),size:[At,xt],done:()=>{}}}if(e.kind==="image"){const t=new Image;return t.src=e.url,await t.decode().catch(()=>{}),{at:async()=>t,size:[t.naturalWidth||16,t.naturalHeight||9],done:()=>{}}}if(e.kind==="video"){const t=ze(e.url);return await new Promise(n=>{t.addEventListener("loadeddata",()=>n(),{once:!0}),setTimeout(n,6e3)}),{at:async n=>(await _o(t,n),t.readyState>=2?t:null),size:[t.videoWidth||16,t.videoHeight||9],done:()=>{t.removeAttribute("src"),t.load()}}}return null}const Le=[];let ye=!1;function Me(o,e){if(o.track&&(o.track.cancel=!0),o.kind!=="tap"&&o.kind!=="person")return;const t=o.src,n=o.loopIn,s=Math.min(o.loopOut,o.loopIn+ca,t.kind==="image"?o.loopIn+.01:1/0),a=t.kind==="image"?1:10,i=Math.max(1,Math.ceil((s-n)*a));o.track={fps:a,start:n,frames:new Array(i).fill(null),cx:new Float32Array(i),cy:new Float32Array(i),w:0,h:0,done:0,running:!1,cancel:!1},o.thumbs=[],Le.push(o),ha(e)}async function ha(o){if(!ye){ye=!0;try{for(;Le.length;){const e=Le.shift();e.dead||!e.track||e.track.cancel||await xa(e,o)}}finally{ye=!1}}}function ne(o,e,t,n,s=0){const a=new Float32Array(e*t),i=1e6;for(let l=0;l<a.length;l++)a[l]=o[l]>127?i:0;for(let l=0;l<t;l++)for(let u=0;u<e;u++){const f=l*e+u;if(!a[f])continue;let m=a[f];u>0&&(m=Math.min(m,a[f-1]+1)),l>0&&(m=Math.min(m,a[f-e]+1)),u>0&&l>0&&(m=Math.min(m,a[f-e-1]+1.414)),u<e-1&&l>0&&(m=Math.min(m,a[f-e+1]+1.414)),a[f]=u===0||l===0||u===e-1||l===t-1?Math.min(m,1):m}let r=[e/2,t/2],c=-1;for(let l=t-1;l>=0;l--)for(let u=e-1;u>=0;u--){const f=l*e+u;if(!a[f])continue;let m=a[f];u<e-1&&(m=Math.min(m,a[f+1]+1)),l<t-1&&(m=Math.min(m,a[f+e]+1)),u<e-1&&l<t-1&&(m=Math.min(m,a[f+e+1]+1.414)),u>0&&l<t-1&&(m=Math.min(m,a[f+e-1]+1.414)),a[f]=m,!(n&&Math.hypot(u-n[0],l-n[1])<s)&&m>c&&(c=m,r=[u,l])}return[r,c]}function da(o,e,t,n,s){const a=new Uint8Array(o.length),i=Math.round(n),r=Math.round(s);for(let c=0;c<t;c++){const l=c-r;if(!(l<0||l>=t))for(let u=0;u<e;u++){const f=u-i;f>=0&&f<e&&(a[c*e+u]=o[l*e+f])}}return a}function ma(o,e){let t=0,n=0;for(let s=0;s<o.length;s++){const a=o[s]>127,i=e[s]>127;a&&i&&t++,(a||i)&&n++}return n?t/n:0}function se(o){let e=0;for(let t=0;t<o.length;t++)o[t]>127&&e++;return e}function wo(o,e){const t=new Float32Array(64);let n=0;for(let s=0;s<e.length;s++)if(e[s]>127){const a=o[s*4]>>6,i=o[s*4+1]>>6,r=o[s*4+2]>>6;t[a*16+i*4+r]++,n++}if(n)for(let s=0;s<64;s++)t[s]/=n;return t}const pa=(o,e)=>{let t=0;for(let n=0;n<64;n++)t+=Math.min(o[n],e[n]);return t},Be=o=>o.area>8e-4&&o.area<.5;function va(o,e,t){const n=[[e,t]];for(let r=0;r<8;r++)n.push([e+Math.cos(r/8*Math.PI*2)*.025,t+Math.sin(r/8*Math.PI*2)*.018]);let s=null,a=-1,i=null;for(const[r,c]of n){const l=Tt.tapAt(o,Math.min(.99,Math.max(.01,r)),Math.min(.99,Math.max(.01,c)));if(!l||(i??=l,!Be(l)))continue;const u=l.data[Math.min(l.h-1,Math.floor(t*l.h))*l.w+Math.min(l.w-1,Math.floor(e*l.w))]>127,f=(u?1:0)+(1-Math.min(1,l.area*4))*.5;if(f>a&&(a=f,s=l),r===e&&c===t&&u&&l.area<.15)break}return s??i}const ga=o=>o.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,o.width,o.height).data;async function xa(o,e){const t=o.track;t.running=!0,o.kind==="tap"?await Tt.loadTap():await Tt.loadPerson();const n=await fa(o);if(!n){t.running=!1;return}const s=t.frames.length,a=b=>Math.max(0,Math.min(s-1,Math.round((b-t.start)*t.fps))),i=[o.seed,...o.fixes??[]].map(b=>({...b,i:a(b.t)})).sort((b,A)=>b.i-A.i),r=[];i.forEach((b,A)=>{const S=A+1<i.length?i[A+1].i-1:s-1,E=[];for(let T=b.i;T<=S;T++)E.push(T);r.push({seed:b,order:E}),A===0&&r.push({seed:b,order:Array.from({length:b.i},(T,F)=>b.i-1-F)})});let c=null,l=0,u=performance.now();const f=new Map;let m=0,p=0,h=0,d=0,g=0;const x=performance.now();for(const b of r){let A=null,S=[0,0],E=null,T=[b.seed.x,b.seed.y],F=0;const C=f.get(b.seed.i);if(b.order[0]!==b.seed.i&&C){A=C.data,E=[C.cx*C.w,C.cy*C.h];const[L]=ne(t.frames[b.seed.i]??C.data,t.w,t.h);T=[(L[0]+.5)/t.w,(L[1]+.5)/t.h]}for(const L of b.order){if(t.cancel||o.dead)break;const _=performance.now(),U=await n.at(t.start+L/t.fps);if(!U)continue;m+=performance.now()-_;const X=performance.now(),q=Tt.frame(U),tt=ga(q);let $=null;if(o.kind==="person")$=await Tt.personOf(q);else if(!A)$=va(q,T[0],T[1]);else{const W=t.w,et=t.h,ut=da(A,W,et,S[0],S[1]),[y]=ne(ut,W,et),[w]=ne(ut,W,et,y,Math.max(W,et)*.08),k=[[(y[0]+.5)/W,(y[1]+.5)/et],[T[0]+S[0]/W,T[1]+S[1]/et],[(w[0]+.5)/W,(w[1]+.5)/et]],P=Math.max(1,se(A)),D=Y=>Math.exp(-Math.abs(Math.log(Math.max(Y/P,.001)))*1.5)*.5+(l?Math.exp(-Math.abs(Math.log(Math.max(Y/l,.001))))*.5:.5),G=Y=>c?pa(wo(tt,Y.data),c):.5;let ot=null,I=-1,N=k[0];for(const Y of k){const at=Tt.tapAt(q,Y[0],Y[1]);if(!at||!Be(at))continue;const nt=G(at);if(c&&nt<.35)continue;const bt=.45*ma(at.data,ut)+.25*D(se(at.data))+.3*nt;if(bt>I&&(I=bt,ot=at,N=Y),bt>.72)break}if(!(ot&&I>=.35)){const[Y,at]=E?[(E[0]+S[0])/W,(E[1]+S[1])/et]:T,nt=Math.min(.3,.06+F*.03);let bt=null,Nt=-1,Lt=T;for(let _t=-1;_t<=1;_t++)for(let Rt=-1;Rt<=1;Rt++){if(!Rt&&!_t)continue;const Gt=[Math.min(.98,Math.max(.02,Y+Rt*nt*.56)),Math.min(.98,Math.max(.02,at+_t*nt))],yt=Tt.tapAt(q,Gt[0],Gt[1]);if(!yt||!Be(yt)||c&&G(yt)<.35)continue;const Zt=Math.exp(-Math.hypot((yt.cx-Y)/.56,yt.cy-at)/(nt*1.5)),Ht=.45*G(yt)+.35*D(se(yt.data))+.2*Zt;Ht>Nt&&(Nt=Ht,bt=yt,Lt=Gt)}bt&&Nt>=.5&&(ot=bt,I=Nt,N=Lt)}ot&&I>=.35?($=ot,T=N,F=0):($=Kt(ut,W,et),S=[S[0]*.5,S[1]*.5],F++)}if(!$)continue;const V=$;let j=$;if(o.kind==="tap"){const W=na(j.data,tt,j.w,j.h,T);W.cut>0&&(j=Kt(W.data,j.w,j.h),d+=W.cut,g++)}!A&&o.kind==="tap"&&!c&&(c=wo(tt,V.data),l=Math.max(1,se(V.data))),t.w=j.w,t.h=j.h,t.frames[L]=j.data,t.cx[L]=j.cx,t.cy[L]=j.cy,f.set(L,V);const Q=[V.cx*V.w,V.cy*V.h];if(E&&(S=[S[0]*.5+(Q[0]-E[0])*.5,S[1]*.5+(Q[1]-E[1])*.5]),E=Q,A=V.data,o.kind==="tap"){const[W]=ne(j.data,j.w,j.h);T=[(W[0]+.5)/j.w,(W[1]+.5)/j.h]}p+=performance.now()-X,F&&h++,t.done++;const J=Math.floor(L/s*4);(L===b.seed.i||L%Math.max(1,Math.floor(s/4))===0)&&!o.thumbs[J]&&(o.thumbs[J]=ua(q,q.width,q.height,j,o.color)),o.maskStamp++,performance.now()-u>40&&(e(),await new Promise(W=>setTimeout(W,0)),u=performance.now())}}if(!t.cancel&&!o.dead){ba(t);const b=Math.max(1,t.done);Ct("track",`${o.kind} ${s} frames in ${((performance.now()-x)/1e3).toFixed(1)}s · seek ${Math.round(m/b)}ms work ${Math.round(p/b)}ms per frame · lost ${h} · shadow -${Math.round((g?d/g:0)*100)}% on ${g}`)}t.done=s,t.running=!1,n.done(),o.maskStamp++,e()}function ba(o){const e=o.frames,t=e.map((n,s)=>{const a=e[s-1],i=e[s+1];if(!n||!a||!i||a.length!==n.length||i.length!==n.length)return n;const r=new Uint8Array(n.length);for(let c=0;c<n.length;c++){const l=n[c],u=a[c],f=i[c];r[c]=Math.max(Math.min(l,u),Math.min(Math.max(l,u),f))}return r});for(let n=0;n<e.length;n++)e[n]=t[n]}class qo{constructor(e,t=null){this.s=e,this.camera=t,this.loopIn=e.loopIn,this.loopOut=e.loopOut,this.speed=e.speed}el=null;speed=1;loopIn;loopOut;frozen=!1;frozenAt=0;t0=0;p0=0;parked=!0;stamp=0;ctx=null;seeking=!1;presented=-1;presentedAt=0;lastShown=-1;lastDrawn=-1;get len(){return Math.max(.05,this.loopOut-this.loopIn)}pos(e){if(this.frozen)return this.frozenAt;const n=this.p0+(e-this.t0)*this.speed-this.loopIn;return this.loopIn+(n%this.len+this.len)%this.len}restart(e,t=this.loopIn){this.t0=e,this.p0=t,this.frozen=!1}setSpeed(e,t){const n=this.pos(t);this.speed=e,this.t0=t,this.p0=n}setLoop(e,t,n){const s=this.pos(n);this.loopIn=Math.max(0,Math.min(e,this.s.duration-.05)),this.loopOut=Math.max(this.loopIn+.05,Math.min(t,this.s.duration)),this.t0=n,this.p0=Math.min(Math.max(s,this.loopIn),this.loopOut-.01)}nudge(e,t){const n=this.pos(t);this.t0=t,this.p0=n+e,this.frozen&&(this.frozenAt=this.pos(t))}freeze(e,t){e!==this.frozen&&(e?(this.frozenAt=this.pos(t),this.frozen=!0):(this.frozen=!1,this.t0=t,this.p0=this.frozenAt))}sameAs(e,t){return e.s===this.s&&Math.abs(e.pos(t)-this.pos(t))<.04&&e.speed===this.speed&&e.frozen===this.frozen}copyTiming(e){this.t0=e.t0,this.p0=e.p0,this.speed=e.speed,this.loopIn=e.loopIn,this.loopOut=e.loopOut,this.frozen=e.frozen,this.frozenAt=e.frozenAt}size(){const e=this.s;return e.kind==="camera"&&this.camera?[this.camera.video.videoWidth||16,this.camera.video.videoHeight||9]:e.kind==="test"?[At,xt]:[e.w||16,e.h||9]}get live(){return this.s.kind==="camera"||this.s.kind==="beam"||this.s.kind==="matte"}ensure(){const e=this.s;if(!this.el){if(e.kind==="video"){const t=ze(e.url);Yo(t,e.name),t.loop=!0,t.addEventListener("seeked",()=>{this.seeking=!1,this.stamp++});const n=t;if(n.requestVideoFrameCallback){const s=(a,i)=>{this.el===t&&(this.presented=i.mediaTime,this.presentedAt=performance.now(),n.requestVideoFrameCallback(s))};n.requestVideoFrameCallback(s)}this.el=t}else if(e.kind==="image"){const t=new Image;t.src=e.url,this.el=t}else if(e.kind==="test"){const t=document.createElement("canvas");t.width=At,t.height=xt,this.ctx=t.getContext("2d"),this.el=t}}}element(){const e=this.s;if(e.kind==="camera"){const n=this.camera;return n&&n.facing===e.facing&&n.ready?n.video:null}this.ensure();const t=this.el;return t?t instanceof HTMLVideoElement?t.readyState>=2?t:null:t instanceof HTMLImageElement?t.complete&&t.naturalWidth?t:null:t:null}tick(e){const t=this.s;this.parked=!1,this.ensure();const n=this.pos(e);if(t.kind==="test"&&this.ctx){const i=Math.round(n*30)/30;i!==this.lastDrawn&&(Ve(this.ctx,t.test??0,i),this.lastDrawn=i,this.stamp++);return}if(t.kind==="camera"){this.stamp++;return}const s=this.el;if(!(s instanceof HTMLVideoElement))return;if(this.frozen){s.paused||s.pause(),!this.seeking&&Math.abs(s.currentTime-n)>.03&&(this.seeking=!0,s.currentTime=n);return}if(s.paused&&s.play().catch(()=>{}),this.seeking)return;let a=s.currentTime-n;Math.abs(a)>this.len/2&&(a-=Math.sign(a)*this.len),Math.abs(a)>.25||s.currentTime>this.loopOut+.05||s.currentTime<this.loopIn-.3?(this.seeking=!0,s.currentTime=n,s.playbackRate=Math.min(4,Math.max(.25,this.speed))):s.playbackRate=Math.min(4,Math.max(.25,this.speed*(1-Math.max(-.08,Math.min(.08,a))))),this.stamp++}shownPos(e){const t=this.pos(e),n=this.el;if(!(n instanceof HTMLVideoElement)||n.readyState<2)return t;const s=i=>Math.min(this.loopOut,Math.max(this.loopIn,i));if(this.presented>=0&&performance.now()-this.presentedAt<120)return this.lastShown=s(this.presented);if(this.seeking&&this.lastShown>=0)return this.lastShown;const a=n.currentTime;return n.paused&&!this.frozen&&Math.abs(a-t)<.08?this.lastShown=t:this.lastShown=s(a)}settled(e){return this.element()?this.el instanceof HTMLVideoElement?!this.seeking&&Math.abs(this.el.currentTime-this.pos(e))<.05&&(this.presented<0||performance.now()-this.presentedAt>500||Math.abs(this.presented-this.pos(e))<.05):!0:!1}attach(){this.ensure();const e=this.el;if(!(e instanceof HTMLVideoElement)||e.isConnected)return;let t=document.getElementById("hidden-videos");t||(t=document.createElement("div"),t.id="hidden-videos",t.style.cssText="position:fixed;left:0;top:0;width:2px;height:2px;overflow:hidden;opacity:0.01;pointer-events:none;z-index:-1",document.body.append(t)),e.style.cssText="width:2px;height:2px",t.append(e)}park(){this.parked||(this.parked=!0,this.el instanceof HTMLVideoElement&&!this.el.paused&&this.el.pause())}dispose(){this.park(),this.el instanceof HTMLVideoElement&&(this.el.remove(),this.el.removeAttribute("src"),this.el.load()),this.el=null}}const Ut=new ns,De=new Map,ko=new WeakMap;function ya(o){De.get(o.id)?.dispose(),De.delete(o.id)}function Ma(o,e,t){e.loopIn=o.loopIn,e.loopOut=Math.max(o.loopIn+.05,o.loopOut);const n=Ge(o),s=Pe(o,t),a=Math.round(s/Math.max(.01,We(o)));(ko.get(e)!==a||Math.abs(e.speed-n)>.001)&&(ko.set(e,a),e.speed=n,e.restart(s,o.loopIn))}const Ue=new Map;function wa(o){let e=Ue.get(o);return e||(e=new qo(o,Ut),e.restart(performance.now()/1e3),Ue.set(o,e)),e}function To(o){let e=null;for(const t of[...De.values(),...Ue.values()])o.has(t)?t.s.kind==="camera"&&!e&&(e=t.s.facing??null):t.park();Ut.want(e)}const So=o=>M("p",{class:"hint"},o),Yt=(...o)=>M("div",{class:"keys"},...o.filter(Boolean)),we=(o,...e)=>M("div",{class:"sec"},M("div",{class:"sec-t"},o),...e.filter(Boolean)),ka=["#ff2a2a","#ff8a1a","#ffe02a","#a8ff40","#20c040","#20e0c0","#40c8ff","#2050ff","#18207a","#9040ff","#ff30e0","#ff8ac0","#ffffff","#a8a8b0","#8a5020","#101010"];function Ao(o,e,t,n,s){const a=e.map(([c,l])=>K(l,{cls:"tiny cw",lit:()=>n()===c,onPress:()=>s(c)}));for(const c of t){const l=K(M("i",{class:"sw",style:`background:${c}`}),{cls:"tiny swk",lit:()=>n()===c,onPress:()=>s(c)});a.push(l)}const i=M("input",{type:"color",class:"cpick"});i.addEventListener("input",()=>s(i.value));const r=M("label",{class:"key tiny swk custom"},M("span",{class:"kf"},"+"),i);return Ft(r,()=>{const c=n(),l=c.startsWith("#")&&!t.includes(c);r.classList.toggle("lit",l),r.style.background=l?c:"",c.startsWith("#")&&(i.value=c)}),a.push(r),M("div",{class:"colour-row"},M("small",null,o),M("div",{class:"sws"},...a))}function ke(o){const e=o.an?.register??60;return e<50?0:e<64?1:e<78?2:3}function $o(o,e,t,n){const s=[],a=o;if(e==="look"){const i=M("div",{class:"tiles t5"});for(const l of Re)i.append(K(M("span",{class:"kf col"},M("b",null,l.name),M("small",null,l.ko)),{cls:"tile line",lit:()=>o.look.id===l.id,onPress:()=>(o.look.id=l.id,t(),n())}));const r=Io(o.look.id),c=Ao("COLOR",[["orig","ORIG"],["rainbow","RAINBOW"],["neg","NEG"],["mono","B/W"]],hs(r.id),()=>Co(o.look),l=>(o.look.colors[o.look.id]=l,t()));s.push(i,c,Yt(r.a?Mt(r.a,o.look,"a",0,1,.05,void 0,t):null,r.b?Mt(r.b,o.look,"b",0,1,.05,void 0,t):null)),o.kind==="luma"&&s.push(we("LUMA KEY",Mt("LOW",o.key,"lo",0,1,.01),Mt("HIGH",o.key,"hi",0,1,.01),Yt(Ae("INVERT",o.key,"invert")))),o.kind==="chroma"&&s.push(we("CHROMA KEY",kn("KEY",o.key,"color",["#00d040","#2040ff","#ff2020","#f0f0f0","#101010"]),Yt(Ae("INVERT",o.key,"invert")))),o.kind==="shape"&&s.push(we("SHAPE",to("",o.shape,"type",ms.map((l,u)=>[u,l])),Mt("SIZE",o.shape,"size",.05,1,.01),Mt("RING",o.shape,"ring",.05,.9,.01),Mt("SPIN",o.shape,"spin",-2,2,.05)))}else if(e==="line"){const i=M("div",{class:"tiles t5"});ds.forEach(([c,l],u)=>i.append(K(M("span",{class:"kf col"},M("b",null,c),M("small",null,l)),{cls:"tile line",lit:()=>o.line===u,onPress:()=>(o.line=u,t())})));const r=to("TORN COLORS",a,"linePal",Ee.map((c,l)=>[l,["VIOLET","GREEN","RGB","B/W"][l]]),t);Ft(r,()=>r.hidden=!(o.line===1&&(o.lineColor??"auto")==="auto")),s.push(i,Ao("LINE COLOR",[["auto","AUTO"]],ka,()=>o.lineColor??"auto",c=>(o.lineColor=c,c!=="auto"&&(o.color=c),t())),Mt("WIDTH",a,"lineSize",.4,3,.1,void 0,t),r)}return s}function Ta(o){const{renderer:e}=o,t=new Ws;let n=gt.find(v=>v.id===H.board.src&&v.kind!=="test")??gt.find(v=>v.kind!=="test")??gt[0],s=null,a="tap",i=!1,r="look",c=!0;const l={a:0,b:0},u=()=>ct.beat;function f(){const v=Math.min(n.duration,H.board.loopBars*4*u());l.a=0,l.b=n.kind==="image"?Math.min(n.duration,16*u()):v}f();const m=M("div",{class:"marks"}),p=M("div",{class:"osd top"}),h=M("div",{class:"osd hint"}),d=M("div",{class:"board-empty"},M("b",null,"영상을 올려 주세요"),M("small",null,"아래 + VIDEO 또는 + PHOTO")),g=M("div",{class:"pgm-screen"},m,p,h,d),x=M("div",{class:"monitor"},g),b=M("canvas",{class:"timeline"}),A=M("div",{class:"tl-box"},b),S=M("div",{class:"keys tl-keys"},...[1,2,4].map(v=>K(`${v} BAR`,{cls:"small",lit:()=>Math.abs(l.b-l.a-v*4*u())<.02,onPress:()=>{H.board.loopBars=v;const R=Math.min(v*4*u(),n.duration);l.b=Math.min(n.duration,l.a+R),l.a=l.b-R,q()}})),K("ALL",{cls:"small",onPress:()=>(l.a=0,l.b=Math.min(n.duration,20),q())}));let E=null,T=0,F=0,C=0;const L=v=>{const R=b.getBoundingClientRect();return(v-R.left)/R.width*n.duration},_=v=>{const R=u();return Math.max(0,Math.min(n.duration,Math.round(v/R)*R))};b.addEventListener("pointerdown",v=>{b.setPointerCapture(v.pointerId);const R=L(v.clientX),O=n.duration*.06;E=Math.abs(R-l.a)<O?"a":Math.abs(R-l.b)<O?"b":R>l.a&&R<l.b?"mid":R<l.a?"a":"b",T=R,F=l.a,C=l.b}),b.addEventListener("pointermove",v=>{if(!E||!b.hasPointerCapture(v.pointerId))return;const R=L(v.clientX),O=u();if(E==="a")l.a=Math.min(_(R),l.b-O);else if(E==="b")l.b=Math.max(_(R),l.a+O);else{const B=_(R-T+F)-F,z=C-F;l.a=Math.max(0,Math.min(n.duration-z,F+B)),l.b=l.a+z}l.b=Math.min(l.b,l.a+20),U()}),b.addEventListener("pointerup",()=>{E&&q(),E=null});function U(){const v=b.getBoundingClientRect(),R=Math.max(10,Math.round(v.width)),O=Math.max(10,Math.round(v.height));(b.width!==R||b.height!==O)&&(b.width=R,b.height=O);const B=b.getContext("2d");B.fillStyle="#101010",B.fillRect(0,0,R,O);const z=Math.max(.01,n.duration);B.fillStyle="#3a3a3a";for(let Bt=0,kt=0;Bt<z;Bt+=u(),kt++)B.fillRect(Math.round(Bt/z*R),kt%4?O-6:O-12,1,kt%4?6:12);const mt=n.audio;if(mt){const Bt=mt.getChannelData(0);B.fillStyle="#5a7a5a";for(let kt=0;kt<R;kt++){const Vo=Math.floor(kt/R*Bt.length),zo=Math.floor((kt+1)/R*Bt.length);let ue=0;for(let fe=Vo;fe<zo;fe+=8)ue=Math.max(ue,Math.abs(Bt[fe]));const Ke=Math.max(1,ue*(O-14));B.fillRect(kt,(O-12)/2-Ke/2,1,Ke)}}const ft=l.a/z*R,pt=l.b/z*R;B.fillStyle="rgba(255,224,64,0.22)",B.fillRect(ft,0,pt-ft,O),B.fillStyle="#ffe040",B.fillRect(ft-2,0,4,O),B.fillRect(pt-2,0,4,O);const ce=tt().pos(dt())/z*R;B.fillStyle="#ff3020",B.fillRect(ce,0,2,O),B.fillStyle="#f0f0f0",B.font="10px monospace",B.fillText(`${l.a.toFixed(2)}s — ${l.b.toFixed(2)}s  (${Math.round((l.b-l.a)/u())} beats)`,4,11)}let X=0;function q(){const v=s;v&&(v.loopIn=l.a,v.loopOut=l.b,v.seed.t=Math.min(Math.max(v.seed.t,l.a),l.b-.01),clearTimeout(X),X=window.setTimeout(()=>{(v.kind==="tap"||v.kind==="person")&&(v.track&&W(v)&&(v.track=null),Me(v,()=>et(v))),V(v),le.refresh(v),J(v)},500)),rt()}function tt(){return wa(n)}function $(v){n=v,H.board.src=v.id,s=null,f(),e.clearBrush(),rt()}function V(v){v.an=oa(v.src.audio,v.loopIn,v.loopOut),v.sound.autoMode!==!1&&(v.sound.mode=xo(v.an))}function j(v,R,O){if(n.kind==="camera"||n.kind==="beam"||n.kind==="matte")return lt("녹화한 영상·사진·테스트 클립에서 따낼 수 있어요");s&&!s.saved&&(s.dead=!0);const B=js(n,v,l.a,l.b),z=tt();if(B.seed.t=Math.min(Math.max(z.pos(dt()),l.a),l.b-.01),R!==void 0&&O!==void 0){const[mt,ft]=e.screenToSource(z,R,O);B.seed.x=mt,B.seed.y=ft}s=B,v!=="tap"&&v!=="person"&&n.thumb&&(B.thumbs=[n.thumb]),(v==="tap"||v==="person")&&(Me(B,()=>et(B)),v==="tap"&&Tt.loadTap()),setTimeout(()=>{V(B),rt()},30),rt()}function Q(v,R,O){const B=tt(),[z,mt]=e.screenToSource(B,R,O),ft=Math.min(Math.max(B.pos(dt()),v.loopIn),v.loopOut-.01);v.fixes=[...(v.fixes??[]).filter(pt=>Math.abs(pt.t-ft)>.15),{x:z,y:mt,t:ft}],v.track&&W(v)&&(v.track=null),Me(v,()=>et(v)),lt(`${ft.toFixed(1)}초에 보정 — 다시 추적합니다 (보정 ${v.fixes.length}개)`,1600),rt()}function J(v){v.saved&&(xe(v.src),Xs(v))}function W(v){return[...st,s].some(R=>R&&R!==v&&R.track===v.track)}function et(v){const R=v.track;for(const O of[...st,s])!O||O===v||O.track!==R||(O.thumbs=[...v.thumbs],O.maskStamp++);if(R&&!R.running&&R.done>=R.frames.length)for(const O of st)O.track===R&&J(O);rt()}function ut(){const v=s;if(!v)return lt("먼저 따낼 것을 누르세요");if(st.length>=re)return lt("선반이 꽉 찼어요 (16개). 하나 지우고 다시");const R=vo(v);v.named&&(R.name=v.name,R.named=!0),R.saved=!0,st.push(R),J(R),s=vo(R),lt(`선반 ${st.length}번째에 추가 — ${R.name}`,1600),rt()}function y(v){const R=st.indexOf(v);R>=0&&st.splice(R,1),v.dead=!0,Zs(v),o.forget(v),s===v&&(s=null),rt()}function w(v){n=v.src,H.board.src=n.id,l.a=v.loopIn,l.b=v.loopOut,s=v,rt()}const k=M("div",{class:"strip"});function P(){k.textContent="";for(const R of gt){if(R.kind==="test")continue;const O=K(M("span",{class:"kf col"},R.thumb?M("img",{class:"sthumb",src:R.thumb,alt:""}):M("i",{class:"sthumb"}),M("small",null,R.name)),{cls:"tiny src",lit:()=>n===R,onPress:()=>$(R)});k.append(O)}const v=async R=>{const[O]=await Tn(R);if(O){lt("불러오는 중…",1200);try{const B=await Ce(O,O.name);gt.push(B),xe(B),$(B),P()}catch(B){const z=B.message;lt(z==="empty"||z==="unreadable"?"파일을 받지 못했어요 — claude.ai 안에서는 큰 파일이 막힐 수 있어요. 브라우저에서 열어 보세요 (LOG에 기록)":z==="format"?"이 영상 형식을 이 브라우저가 열지 못해요 (LOG에 기록)":"영상을 열지 못했어요 (LOG에 자세한 기록)",3600)}}};k.append(K(M("span",{class:"kf col"},M("b",null,"+"),M("small",null,"VIDEO")),{cls:"tiny src",onPress:()=>void v("video/*")}),K(M("span",{class:"kf col"},M("b",null,"+"),M("small",null,"PHOTO")),{cls:"tiny src",onPress:()=>void v("image/*")}),G("environment","CAM"),G("user","SELF"))}let D=!1;function G(v,R){return K(M("span",{class:"kf col"},M("b",null,"●"),M("small",null,R)),{cls:"tiny src rec-src",lit:()=>D,hold:async O=>{if(O){if(lt("카메라 켜는 중… 누르고 있는 동안 녹화",1500),!await t.start(Ut,v))return lt("카메라를 쓸 수 없어요");D=!0,wt(),setTimeout(()=>D&&void ot(),15e3)}else ot()}})}async function ot(){if(!D)return;D=!1,wt();const v=await t.stop();if(Ut.want(null),!v)return lt("녹화된 내용이 없어요");const R=await Ce(v,`REC${gt.length}`);gt.push(R),xe(R),$(R),P(),lt(R.audio?"녹화 완료 — 소리 있음 ♪":"녹화 완료",1500)}P();const I=M("div",{class:"keys cut-row"},K(M("span",{class:"kf col"},M("b",null,"FIX"),M("small",null,"보정")),{cls:"small cut fix",lit:()=>i,onPress:()=>{i=!i,i&&lt("윤곽이 빗나간 순간에 객체를 다시 누르세요. 그 시점부터 다시 따라갑니다",2200),rt()}}),...["tap","person","luma","chroma","shape"].map(v=>K(M("span",{class:"kf col"},M("b",null,so[v]),M("small",null,{tap:"누른 것",person:"사람",luma:"밝기",chroma:"색",shape:"모양"}[v])),{cls:"small cut",lit:()=>a===v,onPress:()=>{a=v,v!=="tap"?j(v):lt("모니터에서 따낼 것을 누르세요",1400),rt()}}))),N=M("div",{class:"editor"}),Y=M("div",{class:"keys ed-tabs"},...["look","line","sound"].map(v=>K({look:"LOOK 효과",line:"LINE 윤곽",sound:"SOUND 소리"}[v],{cls:"small",lit:()=>r===v,onPress:()=>(r=v,at())})));function at(){N.textContent="";const v=s;if(!v){N.append(So("1) 위에서 클립을 고르고 2) 노란 구간(루프)을 정한 뒤 3) TAP을 켜고 모니터에서 따낼 것을 누르세요. PERSON·LUMA·CHROMA·SHAPE는 누르면 바로 따냅니다.")),wt();return}const R=()=>(le.refresh(v),J(v),rt());if(r==="look"||r==="line")N.append(...$o(v,r,R,at));else{const O=v.an,B=xo(O),z=M("div",{class:"keys wrap"},...Vs.map(([pt,je,ce])=>K(M("span",{class:"kf col"},M("b",null,`${je}${pt===B?" ★":""}`),M("small",null,ce)),{cls:"small mode",lit:()=>v.sound.mode===pt,onPress:()=>(v.sound.mode=pt,v.sound.autoMode=!1,R())}))),mt=O?O.silent?"소리 없음":`음높이 ${O.pc>=0?Zo[O.pc]:"—"} (확실도 ${Math.round(O.conf*100)}%) · 밝기 ${Math.round(O.centroid)}Hz · 리듬 ${O.onsetRate.toFixed(1)}/s`:"분석 중…",ft=M("b");Ft(ft,()=>ft.textContent=`${Xt(v)>=0?"+":""}${Xt(v)} 반음`),N.append(z,M("div",{class:"an"},mt),So("★ = 이 소리에 추천하는 방식. ORIGINAL: 원본을 키에 맞게 옮김 · RESONATE: 원본이 화음을 울림 · PULSE: 원본의 소리 시작점을 16분음표 리듬으로 · PAD: 원본을 잘게 쪼개 화음으로 깖"),Yt(Ae("AUTO TUNE",v.sound,"auto",R),M("span",{class:"stat"},"이동 ",ft)),Mt("SHIFT",v.sound,"shift",-12,12,1,void 0,R),Mt("GAIN",v.sound,"gain",0,2,.05,void 0,R),Yt(K("PREVIEW",{cls:"small",lit:()=>c,onPress:()=>(c=!c,rt())}),M("span",{class:"stat"},`음역 ${["LOW","MID","HIGH","TOP"][ke(v)]} ${jt[ke(v)].hp}–${jt[ke(v)].lp}Hz`)))}wt()}const nt=M("input",{type:"text",maxlength:"12",class:"name-in",placeholder:"이름",enterkeyhint:"done",autocomplete:"off"});let bt=0;nt.addEventListener("input",()=>{const v=s;v&&(v.name=nt.value.slice(0,12)||v.name,v.named=!0,clearTimeout(bt),bt=window.setTimeout(()=>J(v),400),rt())}),nt.addEventListener("keydown",v=>v.key==="Enter"&&nt.blur()),nt.addEventListener("blur",()=>{s&&(nt.value=s.name)}),Ft(nt,()=>{nt.disabled=!s,document.activeElement!==nt&&(nt.value=s?.name??"")});const Nt=M("label",{class:"name-row"},M("small",null,"NAME"),nt),Lt=M("div",{class:"shelf-strip"});function _t(){Lt.textContent="",st.forEach(v=>{const R=M("img",{alt:"",src:v.thumbs.find(Boolean)??""});let O=0;const B=K(M("span",{class:"kf col"},R,M("small",null,v.name)),{cls:"tiny ing",lit:()=>s===v,onPress:()=>(w(v),at()),hold:z=>{clearTimeout(O),z&&(O=window.setTimeout(()=>{w(v),at(),nt.focus(),nt.select()},550))}});B.style.setProperty("--c",v.color),Lt.append(B)});for(let v=st.length;v<re;v++)Lt.append(M("i",{class:"ing-empty"}))}const Rt=M("div",{class:"keys save-row"},K("다음 ▶ 꾸미기",{cls:"small go sat-go",onPress:()=>s&&pe(s)>=1?o.toSatellite?.(s):lt(s?"추적이 끝나면 위성으로 만들 수 있어요":"먼저 따낼 것을 누르세요")}),K("SAVE ▸ 선반",{cls:"small",onPress:ut}),K("DELETE",{cls:"small",onPress:()=>s&&(s.saved?y(s):(s.dead=!0,s=null,rt()))}),M("span",{class:"stat shelf-n"}));Ft(Rt,()=>{const v=Rt.querySelector(".shelf-n");v&&(v.textContent=`${st.length}/${re}`)});const Gt=M("div",{class:"board-deck"},A,S,k,I,Nt,Y,N,M("div",{class:"shelf-box"},Rt,Lt)),yt=M("div",{class:"view board","data-keep":!0},x,Gt);g.addEventListener("pointerdown",v=>{if(v.target.closest(".key"))return;const R=g.getBoundingClientRect(),O=(v.clientX-R.left)/R.width,B=(v.clientY-R.top)/R.height;if(i&&s&&s.kind==="tap")return Q(s,O,B);a="tap",j("tap",O,B)});let Zt="";const Ht=()=>{const v=[st.map(R=>R.id+R.thumbs.length+R.name).join(","),gt.length,s?.id,r,s?.an?1:0,s?.look.id,s?.sound.mode,s?.kind].join("|");v!==Zt&&(Zt=v,_t(),at(),P()),wt()};return Xo(Ht),Ht(),{root:yt,scr:g,player:()=>tt(),frame(v,R){const O=n.kind==="test";d.hidden===O&&(d.hidden=!O);const B=tt();s?Ma(s,B,v):(B.loopIn=l.a,B.loopOut=Math.max(l.a+.05,l.b)),B.tick(v);const z=s&&!s.dead?s:null,mt=z&&pe(z)>0,ft=z&&mt?[{key:-1,g:z,p:B,x:0,y:0,scale:1,rot:0,tilt:0,sel:!1}]:[],pt=z?pe(z):1;return p.textContent=`${n.name}  ${B.pos(v).toFixed(1)}s
${z?`${z.name} · ${so[z.kind]}${pt<1?` 추적 ${Math.round(pt*100)}%`:""}`:"따낼 것을 고르세요"}`,h.textContent=Tt.message||(i?"FIX · 빗나간 순간에 객체를 다시 누르세요":s?"":"따낼 것을 손가락으로 누르세요"),U(),{fr:{bg:{kind:"player",p:B},dim:z&&mt?.65:0,layers:ft,beat:R,pulse:0,bgFx:!1},used:new Set([B]),voice:z&&c?z:null}},refresh:Ht,get draft(){return s}}}function Go(o,e,t,n,s){const a=o.poseAt(e,t,s);if(!a)return n;if(!n)return a;const i=.6;return{...a,x:n.x+(a.x-n.x)*i,y:n.y+(a.y-n.y)*i,scale:n.scale+(a.scale-n.scale)*i}}let Te=0,Sa=0;setInterval(()=>{Te&&Sa++<3&&Ct("body",`${(Te/5).toFixed(1)} cut-outs a second`),Te=0},5e3);const Aa=256,Ra=15;async function Ea(o,e,t,n,s){const a=t.loopOut-t.loopIn;t.restart(performance.now()/1e3,t.loopIn);const i=[];let r=null,c=-1,l=0;const u=performance.now();if(await new Promise(h=>{const d=()=>{const g=performance.now();t.tick(g/1e3),r=Go(o,e,t,r,.76);const x=t.shownPos(g/1e3);if(c>=0&&x<c-a/2&&l>a*.5)return h();if(r&&x!==c&&(c<0||x-c>=1/Ra-.004||x<c)){const b=o.renderCutout(r,Aa);b&&(i.push({t:x,c:b}),c>=0&&x>c&&(l+=x-c),c=x,s(Math.min(1,l/a)))}if(g-u>(a+4)*1e3)return h();requestAnimationFrame(d)};requestAnimationFrame(d)}),i.length<4)return _e("clip",`only ${i.length} frames`),null;i.sort((h,d)=>h.t-d.t);const f=await Promise.all(i.map(h=>new Promise(d=>h.c.toBlob(d,"image/webp",.86))));let m=0;for(const h of f)h&&await Qo(`clip:${n}:${m++}`,h);const p=[];for(let h=0;h<8;h++){const d=t.loopIn+(h+.5)/8*a;let g=i[0];for(const b of i)Math.abs(b.t-d)<Math.abs(g.t-d)&&(g=b);const x=document.createElement("canvas");x.width=x.height=192,x.getContext("2d").drawImage(g.c,0,0,192,192),p.push(x.toDataURL("image/png"))}return Ct("clip",`recorded ${m} frames over ${a.toFixed(2)}s from the preview (${(m/a).toFixed(1)} fps), ${Math.round(f.reduce((h,d)=>h+(d?.size??0),0)/1024)} KB`),{clip:{n:m,len:a},stills:p}}let Ro=!1,Wo=null,Ne=null,Se=null;function Pa(){Ro||(Ro=!0,Jo(),H.ui.crt=0,H.output.quality="sd",Sn(),Ut.onError=()=>lt("카메라를 쓸 수 없어요. 영상이나 사진 파일로 해 보세요.",4e3),Qs(),Wo=new Ms,Js(()=>Ne?.refresh()))}function Ca(o){Pa();const e=Wo,t=M("div",{class:"tp-maker"}),n=M("div",{class:"screen tp"});t.append(n),document.body.append(t);let s="board",a=null,i=null,r=null,c=!1,l=null,u=!0;const f=.62,m=T=>{u=!1,Se=null,i?.dispose(),i=null,Ut.want(null),le.setVoices([]),tn(),t.remove(),o(T)},p=(T,F)=>M("div",{class:"make-head orn-head"},M("div",{class:"make-title"},`ORNAMENT · ${T}/3 ${F}`),K("닫기 ✕",{cls:"small",onPress:()=>m(null)}));Ne??=Ta({renderer:e,forget:T=>ya(T),toSatellite:T=>Se?.(T)}),Se=T=>{u&&(a=T,s="style",S())};const h=Ne;h.root.querySelector(".sat-go .kf")?.replaceChildren("다음 ▶ 꾸미기");let d="look";function g(){const T=a,F=M("div",{class:"live-prev"});F.append(e.canvas),i?.dispose(),i=new qo(T.src,Ut),i.loopIn=T.loopIn,i.loopOut=Math.max(T.loopIn+.05,T.loopOut),i.restart(performance.now()/1e3,T.loopIn),r=e.poseFor(T,i,.76*f);const C=M("div",{class:"style-panel"}),L=M("div",{class:"keys ed-tabs"},K("LOOK 효과",{cls:"small",lit:()=>d==="look",onPress:()=>(d="look",_())}),K("LINE 윤곽",{cls:"small",lit:()=>d==="line",onPress:()=>(d="line",_())}));function _(){C.textContent="",C.append(...$o(T,d,()=>wt(),_)),wt()}const U=M("i",{class:"make-bar"}),X=M("div",{class:"keys make-foot"},K("◀ 객체",{cls:"small",onPress:()=>(s="board",S())}),K("다음 ▶ 담기",{cls:"small go",onPress:async()=>{if(!i||c)return;c=!0,C.remove(),L.remove(),X.textContent="",q.append(M("p",{class:"hint"},"객체의 루프를 한 바퀴 재생하며 오너먼트로 담고 있어요…"));const tt=`orn${Date.now().toString(36)}`,$=await Ea(e,T,i,tt,W=>U.style.width=`${W*100}%`).catch(W=>(_e("orn",String(W)),null));if(c=!1,!$||!u){u&&(lt("객체를 담지 못했어요 — 다시 해 보세요",2200),S());return}const V=[];for(let W=0;W<$.clip.n;W++){const et=await en(`clip:${tt}:${W}`);et&&V.push(et)}const j=T.src.kind==="image",Q=await on(j?V.slice(0,1):V,192,96),J=await new Promise(W=>Q.canvas.toBlob(W,"image/webp",.86));if(!J)return lt("오너먼트를 만들지 못했어요",2e3),S();l={sheet:J,n:Q.n,cols:Q.cols,rows:Q.rows,fps:j?1:Math.max(4,Math.min(15,Q.n/Math.max(.2,$.clip.len))),colors:Q.colors},Ct("orn",`made ${Q.n} frames ${Q.cols}x${Q.rows} ${Math.round(J.size/1024)} KB`),i?.dispose(),i=null,s="wish",S()}})),q=M("div",{class:"make-body"},M("div",{class:"parts-wrap"},F),L,C);n.append(M("div",{class:"view make"},p(2,"효과 · 윤곽"),M("div",{class:"make-prog"},U),q,X)),_()}let x={...xn},b=Ze();function A(){const T=l,F=M("canvas",{class:"orn-prev"}),C=new nn({canvas:F,antialias:!0,alpha:!1});C.setPixelRatio(Math.min(2,devicePixelRatio)),C.toneMapping=sn,C.toneMappingExposure=1.15,C.setClearColor(527126);const L=new an;L.add(new rn(10334428,3816496,1.3));const _=new ln(13622527,.8);_.position.set(1,3,2),L.add(_);const U=(()=>{const I=document.createElement("canvas");I.width=I.height=64;const N=I.getContext("2d"),Y=N.createRadialGradient(32,32,0,32,32,32);return Y.addColorStop(0,"rgba(255,255,255,1)"),Y.addColorStop(.6,"rgba(255,255,255,0.5)"),Y.addColorStop(1,"rgba(255,255,255,0)"),N.fillStyle=Y,N.fillRect(0,0,64,64),new cn(I)})(),X=new Qe;for(let I=0;I<26;I++){const N=new un(new fn({map:U,color:new dn().setHSL([.08,.6,.12,.98,.72][I%5],.8,.6),transparent:!0,opacity:.35,blending:hn,depthWrite:!1}));N.position.set((Math.random()-.5)*2.4,-.35+(Math.random()-.5)*1.6,-1.2-Math.random()),N.scale.setScalar(.06+Math.random()*.1),X.add(N)}L.add(X);const q=new mn(32,1,.05,20);q.position.set(0,-.3,1.35),q.lookAt(0,-.32,0);const tt=new Qe;L.add(tt);let $=null,V=null;const j=T.colors.reduce((I,N)=>[I[0]+N[0],I[1]+N[1],I[2]+N[2]],[0,0,0]).map(I=>I/T.colors.length);pn(T.sheet).then(I=>{V=I;const N={id:"preview0",n:T.n,cols:T.cols,rows:T.rows,fps:T.fps,colors:T.colors,anchor:0,size:.24,wrapped:!1,silk:vn(j),wish:b,made:0,look:x};$=gn(N,I,new de(0,0,0),new de(0,0,1)),tt.add($.group)});let Q=0,J=null,W=!0;F.style.touchAction="none",F.addEventListener("pointerdown",I=>(J=I.clientX,W=!1,F.setPointerCapture(I.pointerId))),F.addEventListener("pointermove",I=>{J!==null&&(Q+=(I.clientX-J)*.012,J=I.clientX)}),F.addEventListener("pointerup",()=>J=null);const et=new yn,ut=new de,y=()=>{if(!F.isConnected){$?.dispose(),V?.dispose(),C.dispose();return}requestAnimationFrame(y);const I=F.getBoundingClientRect(),N=Math.round(I.width),Y=Math.round(I.height);N&&Y&&(F.width!==Math.round(N*C.getPixelRatio())||F.height!==Math.round(Y*C.getPixelRatio()))&&(C.setSize(N,Y,!1),q.aspect=N/Y,q.updateProjectionMatrix());const at=Math.min(.1,et.getDelta()),nt=et.elapsedTime;Je.uTime.value=nt,Je.uWind.value=.5,W&&(Q+=at*.35),q.position.set(Math.sin(Q)*1.35,-.28,Math.cos(Q)*1.35),q.lookAt(0,-.33,0),ut.copy(q.position),$?.update(nt,at,ut),C.render(L,q)},w=M("div",{class:"keys wrap look-keys"});for(const[I,N,Y]of bn){const at=I==="lenti"&&T.n<2;w.append(K(M("span",{class:"kf col"},M("b",null,N),M("small",null,Y)),{cls:`small lk${at?" off":""}`,lit:()=>x[I],onPress:()=>{if(at)return lt("사진은 프레임이 하나라 렌티큘러가 없어요 — 영상으로 만들면 돼요",2e3);x={...x,[I]:!x[I]},$?.setLook(x),wt()}}))}w.append(K(M("span",{class:"kf col"},M("b",null,"福"),M("small",null,"복주머니로")),{cls:"small lk",lit:()=>!!$?.data.wrapped,onPress:()=>{$&&($.setWrapped(!$.data.wrapped),wt())}}));const k=M("input",{class:"name-in wish-in",maxlength:"16",placeholder:b});let P=0;k.addEventListener("input",()=>{clearTimeout(P),P=window.setTimeout(()=>$?.setWish(k.value.trim()||b),250)});const D=K("다른 문구",{cls:"small",onPress:()=>{b=Ze(b),k.placeholder=b,k.value.trim()||$?.setWish(b)}}),G=M("div",{class:"make-body"},M("div",{class:"parts-wrap orn-wrap"},F),w,M("div",{class:"wish-row"},k,D),M("p",{class:"hint"},"A–G를 눌러 입체 표현을 켜고 끄며 확인하세요(F를 켜면 A·B 대신 겹 종이로 보여요). 미리보기를 끌면 돌려 볼 수 있어요. 소원을 비워 두면 흐린 글씨의 문구가 적혀요.")),ot=M("div",{class:"keys make-foot"},K("◀ 다시 꾸미기",{cls:"small",onPress:()=>(s="style",S())}),K("트리에 걸기 ▶",{cls:"small go",onPress:()=>m({...T,wish:k.value.trim()||b,name:a?.name??"",look:{...x}})}));n.append(M("div",{class:"view make"},p(3,"모양 · 소원 · 걸기"),G,ot)),requestAnimationFrame(y)}function S(){n.textContent="",s==="board"?(h.scr.prepend(e.canvas),n.append(h.root),h.root.querySelectorAll(":scope > .orn-head").forEach(T=>T.remove()),h.root.prepend(p(1,"객체 · 사진이나 영상에서 오리기"))):s==="style"?g():A(),wt()}S();const E=()=>{if(!u||(requestAnimationFrame(E),document.hidden))return;const T=dt();if(s==="board"){const F=h.frame(T,ct.beatAt(T));To(F.used),le.setVoices([]),e.render(F.fr)}else s==="style"&&i&&a&&!c&&(i.tick(T),r=Go(e,a,i,r,.76*f)??r,To(new Set([i])),r&&e.render({bg:{kind:"none"},dim:0,layers:[{...r}],beat:T*2,pulse:0,bgFx:!1}))};return requestAnimationFrame(E),{root:t,get step(){return s},board:h}}export{Ca as openMaker};
