const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dist-CHi3dtUT.js","./dist-C_52oek8.js","./dist-CtMjQmT9.js"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{name:`MULTI`,ko:`멀티 화면`,amt:`GRID`,min:2,max:5,step:1,def:3},{name:`STROBE`,ko:`스트로브`,amt:`HOLD`,min:2,max:15,step:1,def:4},{name:`SLIT`,ko:`슬릿 스캔`,amt:`SPAN`,min:.1,max:1,step:.05,def:.6},{name:`MIRROR`,ko:`거울`,amt:`AXIS`,min:1,max:3,step:1,def:1},{name:`KALEIDO`,ko:`만화경`,amt:`SEGS`,min:2,max:12,step:1,def:4},{name:`MOSAIC`,ko:`모자이크`,amt:`SIZE`,min:.01,max:.15,step:.005,def:.04},{name:`ZOOM`,ko:`줌 잔상`,amt:`PULL`,min:.05,max:.6,step:.01,def:.25},{name:`RGB`,ko:`RGB 어긋남`,amt:`SHIFT`,min:1,max:40,step:1,def:10},{name:`POSTER`,ko:`포스터`,amt:`LEVELS`,min:2,max:8,step:1,def:3},{name:`SOLAR`,ko:`솔라리제이션`,amt:`FOLD`,min:0,max:1,step:.05,def:.8},{name:`NEGA`,ko:`네거티브`,amt:``,min:0,max:1,step:1,def:1},{name:`THERMAL`,ko:`열화상`,amt:``,min:0,max:1,step:1,def:1},{name:`PAINT`,ko:`페인트박스`,amt:`LEVELS`,min:2,max:8,step:1,def:4},{name:`NEON`,ko:`네온 외곽선`,amt:`GAIN`,min:.5,max:4,step:.1,def:2},{name:`TELETEXT`,ko:`문자방송`,amt:`COLS`,min:16,max:60,step:1,def:32},{name:`LED`,ko:`전광판`,amt:`DOTS`,min:24,max:160,step:2,def:64},{name:`HALFTONE`,ko:`망점`,amt:`CELL`,min:3,max:24,step:1,def:8},{name:`STAR`,ko:`별빛 필터`,amt:`THRESH`,min:.4,max:.97,step:.01,def:.75}];function t(){return{on:e.map(()=>!1),amt:e.map(e=>e.def)}}var n=[`RASTER`,`BARS`,`SNOW`,`MATTE`,`RAMP`,`STRIPES`,`BLACK`,`WEB`,`SPARKLE`,`ZIGZAG`,`SUNBURST`,`BAR STRETCH`,`BAR BEND`,`ORNAMENT`],r=[`ONE`,`GRID`,`TOWER`,`GARDEN`,`CLOCK`,`MOON`,`FISH`,`CELLO`,`BUDDHA`,`FLAG`,`MAP`],i=[{name:`PENTA`,ko:`5음계`,steps:[0,2,4,7,9]},{name:`MAJOR`,ko:`장음계`,steps:[0,2,4,5,7,9,11]},{name:`MINOR`,ko:`단음계`,steps:[0,2,3,5,7,8,10]},{name:`DORIAN`,ko:`도리안`,steps:[0,2,3,5,7,9,10]},{name:`M.PENTA`,ko:`단5음계`,steps:[0,3,5,7,10]}],a=[`C`,`C#`,`D`,`D#`,`E`,`F`,`F#`,`G`,`G#`,`A`,`A#`,`B`],o=[{name:`STRAIGHT`,pat:`x.x.x.x.x.x.x.x.`},{name:`OFFBEAT`,pat:`..x...x...x...x.`},{name:`SKIP`,pat:`xx.xx.x.xx.xx.x.`},{name:`STUTTER`,pat:`xsssx.x.xsssx.xr`},{name:`REVERSE`,pat:`x.x.r.r.x.x.rrrr`},{name:`MOORMAN`,pat:`xsxsxs..xsxs..rr`}],s={output:{aspect:`9:16`,quality:`hd`},trans:{id:-1,beats:1,shadow:!0,glint:!1,border:`#ffffff`},scene:{fxBg:!0,blackOnCut:0,overlay:0,stutter:!1,bgCycle:!1,bgOverride:-1,black:!1},seq:{bpm:96,bars:1,quant:!0,repeat:!1,rate:16},sound:{vol:.85,scale:0,root:0,pitch:!0,gate:0,gatePat:0,tape:.25,radio:0,grain:0,grainSize:.12,link:!0},tools:{mode:`none`,smear:.7,size:.16,tear:.6},moor:{paikabe:{on:!1,lines:4,field:.8,smear:.86},ribbon:{on:!1,level:.45,width:.07,fringe:1},rutt:{on:!1,lines:64,height:.16,color:0},breakup:{on:!1,block:.05,amount:.6},reshoot:{on:!1,tint:.75,zoom:.82,curve:.45},poster2:{on:!1,pair:0},lineart:{on:!1,circles:1,bgIndex:0},smear:{on:!1,angle:0,amount:.8}},scan:{on:!1,hSize:1,vSize:1,hPos:0,vPos:0,rot:0,lines:262,purity:.5,osc:[{target:0,wave:0,freq:3,rate:.4,amp:0},{target:1,wave:0,freq:2,rate:.25,amp:0},{target:2,wave:0,freq:1,rate:.2,amp:0}]},magnet:{list:[],strength:1.2,radius:.55,type:0,audio:0,drift:!1,purity:.7},color:{on:!1,bands:7,hues:[0,.08,.16,.33,.5,.66,.83],sat:1,gain:1,contrast:1.2,smooth:!1,cycle:0,mix:!1,neg:!1},fb:{on:!1,mode:0,size:.84,rot:.06,hue:.02,decay:.95,mix:1},delay:{mode:0,time:1.5,amount:.6},era:t(),pip:{on:!1,layout:0,n:2,tilt:.7,spin:.15,scale:.55,bg:1,border:`#e03020`,bw:6,shadow:!0},wall:{layout:0,cols:4,rows:3,dist:0,variance:.5},synth:{mode:0,fx:3,fy:2,drift:.15,persist:.86,width:1.6,color:`#7dff7d`,gain:1},matte:{pattern:0,color:`#2040c0`},cg:{mode:`off`,style:`chyron`,title1:`GLOBAL GROOVE`,title2:``,lower1:`CHARLOTTE MOORMAN`,lower2:`TV CELLO`,crawl:`이것은 미래의 텔레비전 축제 프로그램 맛보기입니다. 채널을 마음대로 돌릴 수 있는 날이 옵니다. `,credits:`VIDEO
당신

CAMERA
친구

PREPARED TV
1963 — 2026`,docTop:`CHARLOTTE MOORMAN
TV-BRA`,doc:`THIS IS THE FIRST TV
OF ANY KIND
AT GUADALCANAL`,tc:!1,tcBig:!1,sat:!1,serial:0},vhs:{bleed:.8,scan:.35,track:.04,chroma:1,roll:0,lines:480,interlace:.2,noise:.08,sat:1,box43:!1,head:.3,warm:.1},audio:{sfx:!0,haptics:!0},ui:{crt:1,mode:`clip`,bank:0,sheet:``,edit:!1,focus:`sound`,sel:-1}},c=new Set;function l(e){return c.add(e),()=>c.delete(e)}var u=!1;function d(){u||(u=!0,queueMicrotask(()=>{u=!1,c.forEach(e=>e())}))}var f=[`output`,`trans`,`seq`,`sound`,`tools`,`moor`,`scan`,`color`,`fb`,`delay`,`pip`,`wall`,`synth`,`matte`,`cg`,`vhs`,`audio`],p=`ptv.state.v3`;function m(){try{let e={};for(let t of f)e[t]=s[t];localStorage.setItem(p,JSON.stringify(e))}catch{}}function h(){try{let e=localStorage.getItem(p);if(!e)return;let t=JSON.parse(e);for(let e of f)t[e]&&g(s[e],t[e])}catch{}}function g(e,t){for(let n in t){if(!(n in e))continue;let r=e[n],i=t[n];r&&i&&typeof r==`object`&&typeof i==`object`&&!Array.isArray(r)?g(r,i):e[n]=i}}var _=new class{ctx=null;sfxBus;recDest;xy;analyser;noiseBuf;ready=[];whenReady(e){this.ctx?e(this.ctx):this.ready.push(e)}ensure(){if(this.ctx)return this.ctx.state===`suspended`&&this.ctx.resume(),this.ctx;let e=new AudioContext({latencyHint:`interactive`});this.ctx=e,this.recDest=e.createMediaStreamDestination(),this.sfxBus=e.createGain(),this.sfxBus.gain.value=.45,this.sfxBus.connect(e.destination),this.xy=e.createAnalyser(),this.xy.fftSize=2048,this.xy.smoothingTimeConstant=0,this.analyser=e.createAnalyser(),this.analyser.fftSize=512,this.analyser.smoothingTimeConstant=.6;let t=e.sampleRate*2;this.noiseBuf=e.createBuffer(1,t,e.sampleRate);let n=this.noiseBuf.getChannelData(0);for(let e=0;e<t;e++)n[e]=Math.random()*2-1;return this.ready.splice(0).forEach(t=>t(e)),e}fbuf=new Uint8Array(256);bass(){if(!this.ctx||!this.analyser)return 0;this.analyser.getByteFrequencyData(this.fbuf);let e=0;for(let t=1;t<8;t++)e+=this.fbuf[t];return Math.max(0,e/1785-.25)/.75}noise(e,t=0){let n=this.ctx,r=n.createBufferSource();return r.buffer=this.noiseBuf,r.start(t||n.currentTime,Math.random(),e+.05),r}play(e,t=.5){if(!s.audio.sfx||e===`none`)return;let n=this.ensure(),r=n.currentTime,i=this.sfxBus,a=(e,t,n,i)=>{e.gain.setValueAtTime(1e-4,r),e.gain.exponentialRampToValueAtTime(n,r+t),e.gain.exponentialRampToValueAtTime(1e-4,r+i)};switch(e){case`click`:case`clack`:{let t=this.noise(.03),o=n.createBiquadFilter();o.type=`bandpass`,o.frequency.value=e===`click`?3200:1800,o.Q.value=1.2;let s=n.createGain();a(s,.001,e===`click`?.7:.9,.035),t.connect(o).connect(s).connect(i);let c=n.createOscillator();c.frequency.setValueAtTime(e===`click`?180:120,r),c.frequency.exponentialRampToValueAtTime(60,r+.04);let l=n.createGain();a(l,.001,.35,.05),c.connect(l).connect(i),c.start(r),c.stop(r+.06);break}case`whoosh`:case`swish`:{let a=Math.max(.18,Math.min(t,1.2)),o=this.noise(a),s=n.createBiquadFilter();s.type=`bandpass`,s.Q.value=e===`whoosh`?2.5:4,s.frequency.setValueAtTime(e===`whoosh`?300:900,r),s.frequency.exponentialRampToValueAtTime(e===`whoosh`?2600:5e3,r+a*.6),s.frequency.exponentialRampToValueAtTime(500,r+a);let c=n.createGain();c.gain.setValueAtTime(1e-4,r),c.gain.exponentialRampToValueAtTime(e===`whoosh`?.9:.5,r+a*.45),c.gain.exponentialRampToValueAtTime(1e-4,r+a);let l=n.createStereoPanner();l.pan.setValueAtTime(-.7,r),l.pan.linearRampToValueAtTime(.7,r+a),o.connect(s).connect(c).connect(l).connect(i);break}case`ding`:for(let[e,t]of[[0,1318.5],[1,1975.5]]){let a=r+e*.09,o=n.createOscillator(),s=n.createOscillator(),c=n.createGain();s.frequency.value=t*3.5,c.gain.setValueAtTime(t*1.2,a),c.gain.exponentialRampToValueAtTime(1,a+.6),s.connect(c).connect(o.frequency),o.frequency.value=t;let l=n.createGain();l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(.35,a+.005),l.gain.exponentialRampToValueAtTime(1e-4,a+.9),o.connect(l).connect(i),o.start(a),s.start(a),o.stop(a+1),s.stop(a+1)}break;case`zap`:{let e=n.createOscillator();e.type=`square`,e.frequency.setValueAtTime(1800,r),e.frequency.exponentialRampToValueAtTime(90,r+.25);let t=n.createBiquadFilter();t.type=`lowpass`,t.frequency.value=2400;let o=n.createGain();a(o,.003,.25,.28),e.connect(t).connect(o).connect(i),e.start(r),e.stop(r+.3);break}case`thud`:{let e=n.createOscillator();e.frequency.setValueAtTime(140,r),e.frequency.exponentialRampToValueAtTime(38,r+.35);let t=n.createGain();a(t,.002,1,.45),e.connect(t).connect(i),e.start(r),e.stop(r+.5);let o=this.noise(.4),s=n.createBiquadFilter();s.type=`highpass`,s.frequency.value=2500;let c=n.createGain();a(c,.002,.4,.35),o.connect(s).connect(c).connect(i);break}case`static`:case`surf`:{let t=e===`surf`?.22:.4,a=this.noise(t),o=n.createBiquadFilter();o.type=`bandpass`,o.frequency.value=2200,o.Q.value=.6;let s=n.createGain();s.gain.setValueAtTime(.5,r),s.gain.setValueAtTime(.5,r+t*.7),s.gain.exponentialRampToValueAtTime(1e-4,r+t),a.connect(o).connect(s).connect(i),e===`surf`&&this.play(`clack`);break}case`beep`:{let e=n.createOscillator();e.type=`square`,e.frequency.value=1e3;let t=n.createGain();t.gain.setValueAtTime(.12,r),t.gain.setValueAtTime(1e-4,r+.09),e.connect(t).connect(i),e.start(r),e.stop(r+.1);break}case`power`:{let e=n.createOscillator();e.type=`sawtooth`,e.frequency.setValueAtTime(7867,r);let t=n.createGain();t.gain.setValueAtTime(1e-4,r),t.gain.exponentialRampToValueAtTime(.02,r+.05),t.gain.exponentialRampToValueAtTime(1e-4,r+1.2),e.connect(t).connect(i),e.start(r),e.stop(r+1.3);let o=this.noise(.12),s=n.createGain();a(s,.002,.6,.12);let c=n.createBiquadFilter();c.type=`lowpass`,c.frequency.value=600,o.connect(c).connect(s).connect(i);break}}}};function v(e,t=null,...n){let r=document.createElement(e);if(t)for(let[e,n]of Object.entries(t))n!=null&&n!==!1&&(e===`class`?r.className=String(n):e===`style`?r.setAttribute(`style`,String(n)):e.startsWith(`on`)&&typeof n==`function`?r.addEventListener(e.slice(2),n):r.setAttribute(e,n===!0?``:String(n)));for(let e of n)e!=null&&e!==!1&&r.append(e);return r}function y(){_.play(`click`),s.audio.haptics&&navigator.vibrate?.(6)}var b=[];function x(){for(let e=b.length-1;e>=0;e--)b[e]()}function S(e,t){let n=()=>{if(!e.isConnected&&e.getAttribute(`data-mounted`)){let e=b.indexOf(n);e>=0&&b.splice(e,1)}else e.isConnected&&e.setAttribute(`data-mounted`,`1`),t()};b.push(n),t()}function C(e,t={}){let n=v(`button`,{class:`key ${t.cls||``}`,type:`button`},typeof e==`string`?v(`span`,{class:`kf`},e):e),r=t.dot?v(`i`,{class:`dot`}):null;r&&n.append(r),n.addEventListener(`pointerdown`,e=>{e.preventDefault(),n.classList.add(`down`),t.silent||y(),t.hold&&(n.setPointerCapture(e.pointerId),t.hold(!0))});let i=e=>{n.classList.contains(`down`)&&(n.classList.remove(`down`),t.hold&&t.hold(!1),e&&t.onPress?.())};return n.addEventListener(`pointerup`,()=>i(!0)),n.addEventListener(`pointercancel`,()=>i(!1)),n.addEventListener(`pointerleave`,()=>!t.hold&&n.classList.remove(`down`)),n.addEventListener(`contextmenu`,e=>e.preventDefault()),(t.lit||t.dot)&&S(n,()=>{t.lit&&n.classList.toggle(`lit`,!!t.lit()),r&&t.dot&&(r.hidden=!t.dot())}),n}function w(e,t,n,r,i,a,o,s){let c=v(`span`,{class:`sv`}),l=v(`div`,{class:`spin`},c,v(`span`,{class:`arr`},v(`i`),v(`i`))),u=()=>{let e=t[n];c.textContent=o?o(e):Number.isInteger(a)?String(Math.round(e)):e.toFixed(a<.1?2:1)},f=e=>{e=Math.max(r,Math.min(i,Math.round(e/a)*a)),e=+e.toFixed(4),e!==t[n]&&(t[n]=e,u(),s?.(),d())},p=0,m=0,h=!1;return l.addEventListener(`pointerdown`,e=>{l.setPointerCapture(e.pointerId),p=e.clientY,m=t[n],h=!1,l.classList.add(`down`)}),l.addEventListener(`pointermove`,e=>{if(!l.hasPointerCapture(e.pointerId))return;let t=p-e.clientY;if(Math.abs(t)>4&&(h=!0),!h)return;let n=Math.trunc(t/6),o=(i-r)/a>60?Math.max(1,Math.abs(n)/6):1;f(m+n*a*o)}),l.addEventListener(`pointerup`,e=>{if(l.classList.remove(`down`),!h){let r=l.getBoundingClientRect();f(t[n]+(e.clientY<r.top+r.height/2?a:-a)),y()}}),S(l,u),v(`div`,{class:`ctl`},v(`label`,null,e),l)}function T(e,t,n,r,i,a=``){let o=v(`div`,{class:`keys ${a}`});for(let[e,a]of r)o.append(C(a,{cls:`small`,lit:()=>t[n]===e,onPress:()=>{t[n]=e,i?.(),d()}}));return e?v(`div`,{class:`ctl`},v(`label`,null,e),o):o}function E(e,t,n,r){return C(e,{cls:`small`,lit:()=>!!t[n],onPress:()=>{t[n]=!t[n],r?.(),d()}})}var ee=[`#f0f0f0`,`#ff3030`,`#ffe030`,`#30ff40`,`#30e0ff`,`#3050ff`,`#ff40ff`,`#c070ff`,`#101010`];function te(e,t,n,r=ee){let i=v(`div`,{class:`chips`});for(let e of r){let r=v(`button`,{class:`chip`,type:`button`,style:`background:${e}`});r.addEventListener(`click`,()=>{t[n]=e,y(),d()}),S(r,()=>r.classList.toggle(`lit`,t[n]===e)),i.append(r)}return v(`div`,{class:`ctl`},v(`label`,null,e),i)}function ne(e,t,n,r=!1){let i=r?v(`textarea`,{rows:`3`,class:`field`}):v(`input`,{type:`text`,class:`field`});return i.value=String(t[n]),i.addEventListener(`input`,()=>{t[n]=i.value,d()}),v(`div`,{class:`ctl`},v(`label`,null,e),i)}var D=null,re=0;function O(e,t=2600){D?.remove(),D=v(`div`,{class:`toast`},e),document.querySelector(`.screen`)?.append(D),clearTimeout(re);let n=D;re=window.setTimeout(()=>n.remove(),t)}function ie(e,t=!1){return new Promise(n=>{let r=v(`input`,{type:`file`,accept:e,style:`display:none`});t&&(r.multiple=!0),r.addEventListener(`change`,()=>{n(Array.from(r.files||[])),r.remove()}),document.body.append(r),r.click()})}function ae(){let e=s.output.aspect;document.documentElement.style.setProperty(`--out-aspect`,e.replace(`:`,`/`)),document.documentElement.toggleAttribute(`data-wide`,e===`16:9`||e===`4:3`)}var oe=class{video;stream=null;facing=null;pending=null;error=``;busy=!1;onError=null;constructor(){this.video=document.createElement(`video`),this.video.muted=!0,this.video.playsInline=!0,this.video.setAttribute(`playsinline`,``)}get ready(){return!!this.stream&&this.video.readyState>=2&&this.video.videoWidth>0}want(e){e!==this.facing&&e!==this.pending&&(this.pending=e,this.busy||this.apply())}async apply(){this.busy=!0;try{for(;this.pending!==this.facing;){let e=this.pending;if(this.stop(),e)try{let t=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:e},width:{ideal:1280},height:{ideal:720},frameRate:{ideal:30}},audio:!1});this.stream=t,this.video.srcObject=t,await this.video.play().catch(()=>{}),this.error=``}catch(e){this.error=e.name||`ERR`,this.pending=null,this.onError?.(this.error)}if(this.facing=this.stream?e:null,!this.stream)break}}finally{this.busy=!1}}stop(){this.stream?.getTracks().forEach(e=>e.stop()),this.stream=null,this.video.srcObject=null,this.facing=null}};function se(e,t,n){let r=e/t;return r>n?[n/r,1,0,0]:[1,r/n,0,0]}var ce=`#version 300 es
out vec2 vUv;
void main(){
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,le=class{v;constructor(e){this.v=e}},k=e=>new le(e),ue=class{gl;prog;name;locs=new Map;constructor(e,t,n){this.gl=e,this.prog=t,this.name=n}loc(e){let t=this.locs.get(e);return t===void 0&&(t=this.gl.getUniformLocation(this.prog,e),this.locs.set(e,t)),t}},de=class{gl;vao;constructor(e){this.gl=e,this.vao=e.createVertexArray()}program(e,t,n=ce){let r=this.gl,i=(e,n)=>{let i=r.createShader(e);if(r.shaderSource(i,n),r.compileShader(i),!r.getShaderParameter(i,r.COMPILE_STATUS)){let e=r.getShaderInfoLog(i),a=n.split(`
`).map((e,t)=>`${t+1}: ${e}`),o=/0:(\d+)/.exec(e||``),s=o?a.slice(Math.max(0,o[1]-4),+o[1]+2).join(`
`):``;throw Error(`[${t}] shader compile failed: ${e}\n${s}`)}return i},a=r.createProgram();if(r.attachShader(a,i(r.VERTEX_SHADER,n)),r.attachShader(a,i(r.FRAGMENT_SHADER,e)),r.linkProgram(a),!r.getProgramParameter(a,r.LINK_STATUS))throw Error(`[${t}] link failed: ${r.getProgramInfoLog(a)}`);return new ue(r,a,t)}texture(e=WebGL2RenderingContext.LINEAR,t=WebGL2RenderingContext.CLAMP_TO_EDGE){let n=this.gl,r=n.createTexture();return n.bindTexture(n.TEXTURE_2D,r),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,t),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,t),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),r}target(e,t,n=WebGL2RenderingContext.LINEAR){let r=this.gl,i=this.texture(n);r.texImage2D(r.TEXTURE_2D,0,r.RGBA8,e,t,0,r.RGBA,r.UNSIGNED_BYTE,null);let a=r.createFramebuffer();return r.bindFramebuffer(r.FRAMEBUFFER,a),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,i,0),r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT),r.bindFramebuffer(r.FRAMEBUFFER,null),{fb:a,tex:i,w:e,h:t}}freeTarget(e){e&&(this.gl.deleteFramebuffer(e.fb),this.gl.deleteTexture(e.tex))}draw(e,t,n,r,i){let a=this.gl;a.bindFramebuffer(a.FRAMEBUFFER,t?t.fb:null);let o=i?i[2]:t?t.w:r[0],s=i?i[3]:t?t.h:r[1];i?a.viewport(i[0],i[1],i[2],i[3]):a.viewport(0,0,o,s),this.bindUniforms(e,n,o,s),a.bindVertexArray(this.vao),a.drawArrays(a.TRIANGLES,0,3)}bindUniforms(e,t,n,r){let i=this.gl;i.useProgram(e.prog);let a=0,o=e.loc(`uRes`);o&&i.uniform2f(o,n,r);for(let n in t){let r=t[n],o=e.loc(n);o!==null&&(typeof r==`number`?i.uniform1f(o,r):r instanceof le?i.uniform1i(o,r.v):Array.isArray(r)?r.length===2?i.uniform2f(o,r[0],r[1]):r.length===3?i.uniform3f(o,r[0],r[1],r[2]):r.length===4&&i.uniform4f(o,r[0],r[1],r[2],r[3]):r&&(i.activeTexture(i.TEXTURE0+a),i.bindTexture(i.TEXTURE_2D,r),i.uniform1i(o,a),a++))}}setArray(e,t,n,r){let i=this.gl;i.useProgram(e.prog);let a=e.loc(t+`[0]`)??e.loc(t);a&&(n===1?i.uniform1fv(a,r):n===3?i.uniform3fv(a,r):i.uniform4fv(a,r))}};function fe(e){let t=e.replace(`#`,``),n=parseInt(t.length===3?t.split(``).map(e=>e+e).join(``):t,16);return[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255]}var A=`#version 300 es
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
`,pe=A+`
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
`,me=A+`
uniform sampler2D uSrc;
void main(){ outColor = vec4(texture(uSrc, vUv).rgb, 1.); }
`,he=A+`
uniform sampler2D uSrc;
uniform float uDecay;
void main(){
  vec3 c = texture(uSrc, vUv).rgb * uDecay;
  c = max(c - 1. / 255., 0.);
  outColor = vec4(c, 1.);
}
`,ge=`#version 300 es
in vec2 aPos;
in float aAcross;
in float aI;
out float vAcross;
out float vI;
void main(){ vAcross = aAcross; vI = aI; gl_Position = vec4(aPos, 0., 1.); }
`,_e=`#version 300 es
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
`,ve=A+`
uniform sampler2D uA;
uniform sampler2D uB;
uniform float uT;
uniform int uId;
uniform float uShadow;
uniform float uGlint;
uniform vec3 uBorder;

vec3 A(vec2 uv){ return texture(uA, uv).rgb; }
vec3 B(vec2 uv){ return texture(uB, uv).rgb; }

float shadowAt(vec2 p, mat3 R, vec3 c, vec2 hs){
  if (uShadow < .01) return 0.;
  float lift = .06 + clamp(c.z, 0., 3.) * .05;
  Hit s = card(p - vec2(lift * .8, -lift), R, c, hs, .06);
  return s.cov * .6 * uShadow;
}

vec3 glint(Hit h, float t){
  if (uGlint < .01) return vec3(0.);
  float g = exp(-pow((h.uv.x * .65 + h.uv.y * .35 - (t * 1.8 - .4)) * 11., 2.));
  float star = 0.;
  vec2 sp = h.uv - vec2(t * 1.2 - .1, .8 - t * .3);
  star = .015 / (abs(sp.x * sp.y) * 400. + .02) * smoothstep(.25, 0., length(sp));
  return vec3(1., .97, .9) * (g * .45 + star) * uGlint;
}

vec3 cardOver(vec3 bg, Hit h, vec3 col){ return mix(bg, col, h.cov); }

vec3 backSide(vec3 c){ return mix(vec3(luma(c)), vec3(.85, .86, .9), .55) * .8; }

// ---- flying pieces --------------------------------------------------------------
vec3 pieces(vec2 p, float t, bool explode){
  const int CX = 5;
  const int CY = 8;
  float asp = aspect();
  vec2 cs = vec2(2. * asp / float(CX), 2. / float(CY));
  vec3 col = B(toUv(p));
  float best = 1e9;
  vec3 pc = vec3(0.);
  float pcov = 0.;
  float sh = 0.;
  for (int j = 0; j < CY; j++){
    for (int i = 0; i < CX; i++){
      vec2 id = vec2(float(i), float(j));
      vec2 base = vec2(-asp, -1.) + cs * (id + .5);
      float r1 = hash12(id + 1.3), r2 = hash12(id + 7.1), r3 = hash12(id + 3.7);
      float delay = explode ? length(base) * .18 + r1 * .1 : (1. - float(j) / float(CY)) * .3 + r1 * .2;
      float lt = clamp((t - delay) / (1. - .45), 0., 1.);
      lt = lt * lt;
      vec3 c; mat3 R;
      if (explode){
        vec2 dir = normalize(base + (vec2(r2, r3) - .5) * .6 + 1e-3);
        c = vec3(base + dir * lt * 3.2, lt * 2.);
        R = rotX(lt * (r1 - .5) * 9.) * rotY(lt * (r2 - .5) * 9.) * rotZ(lt * (r3 - .5) * 6.);
      } else {
        c = vec3(base + vec2((r2 - .5) * lt * 1.4, -lt * 3.6 + lt * r3 * .6), lt * 1.6);
        R = rotX(lt * (2. + r1 * 6.)) * rotY(lt * (r2 - .5) * 7.) * rotZ(lt * (r3 - .5) * 4.);
      }
      Hit h = card(p, R, c, cs * .5 * .985, 0.);
      if (h.cov > 0. && h.t < best){
        best = h.t;
        vec2 guv = toUv(base + (h.uv - .5) * cs);
        vec3 a = A(guv);
        pc = (h.front > .5 ? a : backSide(a)) * mix(1., h.shade, step(.001, lt));
        pc += glint(h, lt) * step(.001, lt);
        pcov = h.cov;
      }
      if (uShadow > 0. && lt > 0.){
        sh = max(sh, card(p - vec2(.05, -.07) * (1. + lt * 2.), R, c, cs * .5, .05).cov * (1. - lt) * .55 * uShadow);
      }
    }
  }
  col *= 1. - sh;
  return mix(col, pc, pcov);
}

// ---- page curl ------------------------------------------------------------------
vec3 pageCurl(vec2 uv, float t){
  float asp = aspect();
  vec2 q = uv * vec2(asp, 1.);
  vec2 d = normalize(vec2(1., -.45));
  float r = .16;
  vec2 C0 = vec2(0.), C1 = vec2(asp, 0.), C2 = vec2(0., 1.), C3 = vec2(asp, 1.);
  float s0 = dot(C0, d), s1 = dot(C1, d), s2 = dot(C2, d), s3 = dot(C3, d);
  float sMin = min(min(s0, s1), min(s2, s3));
  float sMax = max(max(s0, s1), max(s2, s3));
  float L = mix(sMax + .01, sMin - r - .02, easeInOut(t));
  float s = dot(q, d);
  float dx = s - L;
  vec3 col;
  if (dx > r){
    col = B(uv) * (1. - .45 * exp(-(dx - r) * 14.));
  } else if (dx >= 0.){
    float a = asin(clamp(dx / r, -1., 1.));
    float x2 = r * (PI - a);
    vec2 uv2 = (q + d * (L + x2 - s)) / vec2(asp, 1.);
    if (inUnit(uv2)){
      col = backSide(A(uv2)) * (.75 + .3 * cos(a));
      col += vec3(.25) * pow(1. - abs(dx / r), 6.) * uGlint;
    } else {
      float x1 = r * a;
      vec2 uv1 = (q + d * (L + x1 - s)) / vec2(asp, 1.);
      if (inUnit(uv1)) col = A(uv1) * (1. - .35 * (a / (PI * .5)));
      else col = B(uv) * .6;
    }
  } else {
    float x3 = PI * r - dx;
    vec2 uv3 = (q + d * (L + x3 - s)) / vec2(asp, 1.);
    if (inUnit(uv3)){
      col = backSide(A(uv3)) * (.95 - .2 * exp(dx * 12.));
    } else {
      col = A(uv) * (1. - .3 * exp(dx * 18.) * uShadow);
    }
  }
  return col;
}

float bounceOut(float x){
  float n1 = 7.5625, d1 = 2.75;
  if (x < 1. / d1) return n1 * x * x;
  if (x < 2. / d1){ x -= 1.5 / d1; return n1 * x * x + .75; }
  if (x < 2.5 / d1){ x -= 2.25 / d1; return n1 * x * x + .9375; }
  x -= 2.625 / d1; return n1 * x * x + .984375;
}

vec3 transition(vec2 uv, float t){
  float asp = aspect();
  vec2 p = toP(uv);
  vec2 hs = vec2(asp, 1.);
  float te = easeInOut(t);
  vec3 col;
  switch (uId){
  case 0: { // DISSOLVE
    return mix(A(uv), B(uv), t);
  }
  case 1: { // WIPE L->R
    float e = t * 1.06 - .03;
    float m = smoothstep(e - .012, e + .012, uv.x);
    col = mix(B(uv), A(uv), m);
    col += uBorder * exp(-pow((uv.x - e) / .008, 2.)) * uGlint * 1.5;
    return col;
  }
  case 2: { // IRIS
    float R = t * (length(vec2(asp, 1.)) + .05);
    float r = length(p);
    col = mix(B(uv), A(uv), smoothstep(R - .015, R + .015, r));
    col += uBorder * exp(-pow((r - R) / .015, 2.)) * uGlint * 1.5;
    return col;
  }
  case 3: { // DIAMOND
    float R = t * (asp + 1.05);
    float r = abs(p.x) + abs(p.y);
    col = mix(B(uv), A(uv), smoothstep(R - .015, R + .015, r));
    col += uBorder * exp(-pow((r - R) / .015, 2.)) * uGlint * 1.5;
    return col;
  }
  case 4: { // CLOCK
    float a = atan(p.x, p.y);
    float a01 = mod(a, TAU) / TAU;
    float m = smoothstep(t - .004, t + .004, a01);
    col = mix(B(uv), A(uv), m);
    return col;
  }
  case 5: { // BLINDS
    float f = fract(uv.y * 12.);
    return mix(A(uv), B(uv), smoothstep(f - .04, f + .04, t * 1.08));
  }
  case 6: { // CHECKER
    float n = 6.;
    vec2 g = uv * vec2(n, n / asp);
    vec2 id = floor(g);
    vec2 f = fract(g);
    float r = hash12(id) * .6;
    float lt = clamp((t - r) / .4, 0., 1.);
    float m = step((f.x + f.y) * .5, lt);
    return mix(A(uv), B(uv), m);
  }
  case 7: { // PIXEL DISSOLVE
    vec2 id = floor(uv * vec2(28., 28. / asp));
    return hash12(id) < t ? B(uv) : A(uv);
  }
  case 8: { // MELT
    float cols = 36.;
    float ci = floor(uv.x * cols);
    float sp = .7 + hash11(ci) * 1.1;
    float sh = pow(t, 1.6) * sp * 1.4 + (sin(uv.x * cols * PI) * .01);
    vec2 a = vec2(uv.x, uv.y + sh);
    return a.y <= 1. ? A(a) : B(uv);
  }
  case 9: { // FLIP H
    Hit h = card(p, rotY(te * PI), vec3(0., 0., sin(te * PI) * 1.3), hs, 0.);
    vec3 c = h.front > .5 ? A(h.uv) : B(vec2(1. - h.uv.x, h.uv.y));
    return cardOver(vec3(0.), h, c * h.shade + glint(h, t));
  }
  case 10: { // FLIP V
    Hit h = card(p, rotX(te * PI), vec3(0., 0., sin(te * PI) * 1.3), hs, 0.);
    vec3 c = h.front > .5 ? A(h.uv) : B(vec2(h.uv.x, 1. - h.uv.y));
    return cardOver(vec3(0.), h, c * h.shade + glint(h, t));
  }
  case 11: { // ROLL AWAY
    float k = t * t;
    mat3 R = rotX(-k * PI * 1.4) * rotZ(k * .9);
    vec3 c = vec3(k * .4, -k * 2.8, k * 2.4);
    Hit h = card(p, R, c, hs, 0.);
    vec3 bg = B(uv) * (1. - shadowAt(p, R, c, hs));
    vec3 a = h.front > .5 ? A(h.uv) : backSide(A(h.uv));
    return cardOver(bg, h, a * h.shade + glint(h, t));
  }
  case 12: { // PUSH
    float x = uv.x + te;
    col = x <= 1. ? A(vec2(x, uv.y)) : B(vec2(x - 1., uv.y));
    col *= 1. - .6 * exp(-pow((x - 1.) / .01, 2.)) * uShadow;
    return col;
  }
  case 13: { // SPIN OUT
    float k = t * t;
    mat3 R = rotZ(te * PI * 3.);
    vec3 c = vec3(0., 0., k * 14.);
    Hit h = card(p, R, c, hs, 0.);
    vec3 bg = B(uv) * (1. - shadowAt(p, R, c, hs));
    return cardOver(bg, h, A(h.uv) + glint(h, t));
  }
  case 14: { // SPIN IN
    float k = (1. - te);
    mat3 R = rotZ(-k * PI * 3.);
    vec3 c = vec3(0., 0., k * k * 14.);
    Hit h = card(p, R, c, hs, 0.);
    vec3 bg = A(uv) * (1. - shadowAt(p, R, c, hs));
    return cardOver(bg, h, B(h.uv) + glint(h, t));
  }
  case 15: { // PAGE TURN
    return pageCurl(uv, t);
  }
  case 16: { // CUBE
    float th = te * PI * .5;
    float hz = asp;
    vec3 cc = vec3(0., 0., hz + sin(te * PI) * 1.1);
    mat3 RA = rotY(th);
    mat3 RB = rotY(th - PI * .5);
    Hit ha = card(p, RA, cc + RA * vec3(0., 0., -hz), hs, 0.);
    Hit hb = card(p, RB, cc + RB * vec3(0., 0., -hz), hs, 0.);
    col = vec3(0.);
    float ta = ha.front > .5 && ha.cov > 0. ? ha.t : 1e9;
    float tb = hb.front > .5 && hb.cov > 0. ? hb.t : 1e9;
    if (ta < tb) col = cardOver(col, ha, A(ha.uv) * ha.shade + glint(ha, t));
    else if (tb < 1e8) col = cardOver(col, hb, B(hb.uv) * hb.shade + glint(hb, 1. - t));
    return col;
  }
  case 17: { // DOORS
    float th = te * 1.75;
    mat3 RL = rotY(-th);
    mat3 RR = rotY(th);
    vec2 dh = vec2(asp * .5, 1.);
    vec3 cl = vec3(-asp, 0., 0.) + RL * vec3(asp * .5, 0., 0.);
    vec3 cr = vec3(asp, 0., 0.) + RR * vec3(-asp * .5, 0., 0.);
    Hit hl = card(p, RL, cl, dh, 0.);
    Hit hr = card(p, RR, cr, dh, 0.);
    float sh = max(shadowAt(p, RL, cl, dh), shadowAt(p, RR, cr, dh));
    col = B(uv) * (1. - sh * te);
    if (hl.cov > 0.){
      vec3 a = A(vec2(hl.uv.x * .5, hl.uv.y));
      col = cardOver(col, hl, (hl.front > .5 ? a : backSide(a)) * hl.shade + glint(hl, t));
    }
    if (hr.cov > 0.){
      vec3 a = A(vec2(.5 + hr.uv.x * .5, hr.uv.y));
      col = cardOver(col, hr, (hr.front > .5 ? a : backSide(a)) * hr.shade + glint(hr, t));
    }
    return col;
  }
  case 18: { // FLY AWAY
    float k = easeIn(t) * .6 + te * .4;
    mat3 R = rotZ(-k * .9) * rotY(k * 1.2) * rotX(-k * .5);
    vec3 c = vec3(k * asp * 1.6, k * 1.4, k * k * 5.);
    Hit h = card(p, R, c, hs, 0.);
    vec3 bg = B(uv) * (1. - shadowAt(p, R, c, hs));
    vec3 a = h.front > .5 ? A(h.uv) : backSide(A(h.uv));
    return cardOver(bg, h, a * h.shade + glint(h, t));
  }
  case 19: return pieces(p, t, false); // SHATTER
  case 20: return pieces(p, t, true);  // EXPLODE
  case 21: { // SWING
    float k = easeIn(t);
    float th = -k * PI * .62;
    mat3 R = rotX(th);
    vec3 c = vec3(0., 1., 0.) + R * vec3(0., -1., 0.);
    Hit h = card(p, R, c, hs, 0.);
    vec3 bg = B(uv) * (1. - shadowAt(p, R, c, hs) * k);
    vec3 a = h.front > .5 ? A(h.uv) : backSide(A(h.uv));
    return cardOver(bg, h, a * h.shade + glint(h, t));
  }
  case 22: { // ZOOM THROUGH
    float sa = 1. + te * 3.;
    vec2 ua = (uv - .5) / sa + .5;
    vec3 a = A(ua) * (1. - te);
    float sb = .25 + .75 * te;
    vec2 ub = (uv - .5) / sb + .5;
    float inb = inUnit(ub) ? 1. : 0.;
    vec3 b = B(ub);
    float m = inb * smoothstep(0., .35, te);
    return mix(a, b, m) + glint(Hit(ub, 1., 1., inb, 1.), t) * inb;
  }
  case 23: { // SQUEEZE
    float sx = 1. - te;
    vec2 ua = vec2((uv.x - .5) / max(sx, 1e-3) + .5, uv.y);
    vec3 bg = B(uv);
    float edge = (abs(uv.x - .5) - sx * .5);
    float cov = 1. - smoothstep(-1. / uRes.x, 1. / uRes.x, edge);
    bg *= 1. - .5 * exp(-max(edge, 0.) * 30.) * uShadow * step(.001, te) * (1. - te);
    return mix(bg, A(ua), cov * step(.001, sx));
  }
  case 24: { // TV OFF / ON
    float s = t < .5 ? t * 2. : (1. - t) * 2.;
    float sy = mix(1., .004, smoothstep(0., .72, s));
    float sx = mix(1., 0., smoothstep(.72, 1., s));
    vec2 q = (uv - .5) / vec2(max(sx, 1e-3), sy) + .5;
    vec3 src = t < .5 ? A(q) : B(q);
    float bright = 1. + smoothstep(0., .72, s) * 3.;
    col = inUnit(q) && sx > .001 ? src * bright : vec3(0.);
    vec2 d = (uv - .5) * vec2(asp, 1.);
    col += vec3(.8, .9, 1.) * exp(-length(d * vec2(max(.5 / max(sx, .02), 1.), 30.)) * 6.) * smoothstep(.5, 1., s);
    return col;
  }
  case 25: { // STRIPS
    float n = 8.;
    float i = floor(uv.y * n);
    float dir = mod(i, 2.) < .5 ? 1. : -1.;
    float lt = easeOut(clamp((t - i / n * .4) / .6, 0., 1.));
    float x = uv.x + dir * (1. - lt);
    col = (x >= 0. && x <= 1.) ? B(vec2(x, uv.y)) : A(uv);
    return col;
  }
  case 26: { // FLIP TILES
    float cols = 4.;
    float rows = max(2., floor(cols / asp + .5));
    vec2 cs = vec2(2. * asp / cols, 2. / rows);
    vec2 id = floor((p + vec2(asp, 1.)) / cs);
    id = clamp(id, vec2(0.), vec2(cols - 1., rows - 1.));
    vec2 base = vec2(-asp, -1.) + cs * (id + .5);
    float delay = (id.x + (rows - 1. - id.y)) / (cols + rows - 2.) * .5;
    float lt = easeInOut(clamp((t - delay) / .5, 0., 1.));
    Hit h = card(p, rotY(lt * PI), vec3(base, sin(lt * PI) * .12), cs * .5 * .97, 0.);
    vec2 g = toUv(base + (h.uv - .5) * cs);
    vec2 gb = toUv(base + (vec2(1. - h.uv.x, h.uv.y) - .5) * cs);
    vec3 c = h.front > .5 ? A(g) : B(gb);
    return cardOver(vec3(0.), h, c * h.shade + glint(h, lt));
  }
  case 27: { // KALEIDO BURST
    float k = sin(t * PI);
    vec2 pp = (uv - .5) * vec2(asp, 1.);
    float r = length(pp);
    float a = atan(pp.y, pp.x) + t * 3.;
    float seg = PI / 3.;
    a = mod(a, 2. * seg); a = abs(a - seg);
    vec2 kp = vec2(cos(a), sin(a)) * r * (1. - .5 * k);
    vec2 kuv = kp / vec2(asp, 1.) + .5;
    vec2 su = mix(uv, kuv, smoothstep(0., .3, k));
    return mix(A(su), B(su), smoothstep(.42, .58, t)) * (1. + k * .25);
  }
  case 28: { // RIPPLE
    vec2 pp = (uv - .5) * vec2(asp, 1.);
    float d = length(pp);
    float amp = sin(t * PI) * .045;
    vec2 u2 = uv + normalize(pp + 1e-4) * sin(d * 45. - t * 28.) * amp / vec2(asp, 1.);
    return mix(A(u2), B(u2), smoothstep(.3, .7, t));
  }
  case 29: { // SWIRL
    vec2 pp = (uv - .5) * vec2(asp, 1.);
    float d = length(pp);
    float ang = sin(t * PI) * 9. * pow(max(0., 1. - d / 1.), 2.);
    vec2 u2 = (rot2(ang) * pp) / vec2(asp, 1.) + .5;
    return mix(A(u2), B(u2), smoothstep(.35, .65, t));
  }
  case 30: { // MOSAIC
    float k = sin(t * PI);
    float sz = max(1. / uRes.y, k * k * .14);
    vec2 cell = vec2(sz / asp, sz);
    vec2 q = (floor(uv / cell) + .5) * cell;
    return t < .5 ? A(q) : B(q);
  }
  case 31: { // PRISM
    vec3 c = mix(A(uv), B(uv), smoothstep(.42, .58, t));
    float k = sin(t * PI);
    float h = floor((luma(c) * 2.5 + t * 2.) * 7.) / 7.;
    return mix(c, hsv2rgb(vec3(fract(h), .9, 1.)), k * .92);
  }
  case 32: { // LUMA BURN
    vec3 a = A(uv);
    float l = luma(a);
    float thr = t * 1.25 - .1;
    float m = smoothstep(thr - .05, thr, l);
    col = mix(B(uv), a, m);
    col += vec3(1., .45, .08) * exp(-pow((l - thr) / .035, 2.)) * 1.6 * step(.01, t) * step(t, .99);
    return col;
  }
  case 33: { // SPIRAL
    vec2 pp = (uv - .5) * vec2(asp, 1.);
    float r = length(pp);
    float a = atan(pp.y, pp.x);
    float edge = te * 1.5 + .1 * sin(a * 5. + t * 14.) * sin(t * PI);
    vec2 ub = (rot2((1. - te) * 4.) * pp) / (.4 + .6 * te) / vec2(asp, 1.) + .5;
    vec2 ua = (rot2(-te * 2.5) * pp) * (1. - te * .5) / vec2(asp, 1.) + .5;
    float m = smoothstep(edge + .01, edge - .01, r);
    col = mix(A(ua), B(ub), m);
    col += uBorder * exp(-pow((r - edge) / .02, 2.)) * uGlint * 1.5 * step(.01, t);
    return col;
  }
  case 34: { // BOUNCE IN
    float y = (1. - bounceOut(t)) * 2.1;
    vec3 c = vec3(0., y, 0.);
    mat3 R = rotZ((1. - t) * (1. - t) * .25);
    Hit h = card(p, R, c, hs, 0.);
    vec3 bg = A(uv) * (1. - shadowAt(p, R, c, hs) * step(.001, y));
    return cardOver(bg, h, B(h.uv) + glint(h, t));
  }
  case 35: { // GLITCH TEAR
    float k = sin(t * PI);
    float row = floor(uv.y * 26.);
    float step20 = floor(t * 24.);
    float off = (hash12(vec2(row, step20)) - .5) * .5 * k * step(.45, hash12(vec2(row * 1.7, step20 + 3.)));
    vec2 u2 = vec2(fract(uv.x + off), uv.y);
    bool useB = hash12(vec2(row, 9.1)) < t;
    float ca = .012 * k;
    vec3 c;
    if (useB) c = vec3(B(u2 + vec2(ca, 0.)).r, B(u2).g, B(u2 - vec2(ca, 0.)).b);
    else c = vec3(A(u2 + vec2(ca, 0.)).r, A(u2).g, A(u2 - vec2(ca, 0.)).b);
    return c;
  }
  }
  return mix(A(uv), B(uv), t);
}

void main(){
  outColor = vec4(transition(vUv, clamp(uT, 0., 1.)), 1.);
}
`,ye=`
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
`;A+ye+``;var be=`
vec4 enc(vec2 c){ return vec4(floor(c.x / 256.), mod(c.x, 256.), floor(c.y / 256.), mod(c.y, 256.)) / 255.; }
vec2 dec(vec4 v){ v = floor(v * 255. + .5); return vec2(v.r * 256. + v.g, v.b * 256. + v.a); }
`,xe=A+be+`
uniform sampler2D uMask;
void main(){
  float a = texelFetch(uMask, ivec2(gl_FragCoord.xy), 0).r;
  outColor = a > .5 ? enc(floor(gl_FragCoord.xy)) : vec4(1.);
}
`,Se=A+be+`
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
`,Ce=A+be+`
uniform sampler2D uSrc;
uniform float uMaxD;
void main(){
  vec2 me = floor(gl_FragCoord.xy);
  vec2 s = dec(texelFetch(uSrc, ivec2(me), 0));
  float d = s.x > 65000. ? 1. : clamp(distance(s, me) / uMaxD, 0., 1.);
  outColor = vec4(d, d, d, 1.);
}
`;A+ye+``;var we=A+`
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
`,Te=A+`
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
`,Ee=A+`
uniform sampler2D uCur;      // main picture
uniform sampler2D uAlt;      // second picture (the NEXT bus)
uniform sampler2D uBgTex;    // generated / bus background
uniform int uLayout;         // 0 tilt, 1 row, 2 orbit, 3 fly
uniform int uN;
uniform int uBgMode;         // 0 mirror of the picture, 1 texture
uniform float uTilt;
uniform float uSpin;
uniform float uScale;
uniform vec3 uBorder;
uniform float uBw;
uniform float uShadowOn;

vec3 bg(vec2 uv){
  if (uBgMode == 0){
    // four-way mirror of the picture itself, pushed in a little
    vec2 q = abs(uv - .5) * 2.;
    q = 1. - q;
    vec3 c = texture(uCur, q * .9 + .05).rgb;
    return mix(vec3(luma(c)), c, .6) * vec3(.95, .97, 1.08);
  }
  return texture(uBgTex, uv).rgb;
}

void boxPose(int i, out mat3 R, out vec3 c, out float s){
  float fi = float(i);
  float n = float(uN);
  float t = uTime * uSpin;
  bool portrait = uRes.x < uRes.y;
  s = uScale;
  if (uLayout == 0){
    R = rotZ(-.55 * uTilt + sin(t) * .3) * rotY(.6 * uTilt * cos(t * .7)) * rotX(.25 * uTilt);
    c = vec3((fi - (n - 1.) * .5) * .5 * aspect(), (fi - (n - 1.) * .5) * -.25, -fi * .05);
    if (i > 0) s *= .7;
  } else if (uLayout == 1){
    float k = fi - (n - 1.) * .5;
    s = uScale * (n > 2. ? .62 : .8);
    c = portrait ? vec3(0., -k * 2. * s * 1.05, 0.) : vec3(k * 2. * s * aspect() * 1.05, 0., 0.);
    R = rotY(sin(t + fi) * .35 * uTilt) * rotZ(sin(t * .5 + fi) * .05 * uTilt);
  } else if (uLayout == 2){
    float a = t * 2. + fi / n * TAU;
    c = vec3(cos(a) * .55 * aspect(), sin(a) * .35, sin(a) * .8 + .4);
    R = rotY(-cos(a) * .9 * uTilt) * rotZ(sin(a * .5) * .2 * uTilt);
    s *= .75;
  } else {
    float z = fract(t * .5 + fi / n);
    c = vec3(sin(fi * 2.4) * .5 * aspect(), cos(fi * 1.7) * .45, mix(7., -.6, z));
    R = rotZ(z * TAU * .5 * uTilt + fi) * rotY(z * 1.5 * uTilt);
  }
}

void main(){
  vec2 uv = vUv;
  vec2 p = toP(uv);
  vec2 hs = vec2(aspect(), 1.);
  vec3 col = bg(uv);
  float best = 1e9;
  for (int i = 0; i < 3; i++){
    if (i >= uN) break;
    mat3 R; vec3 c; float s;
    boxPose(i, R, c, s);
    vec2 bh = hs * s;
    if (uShadowOn > .5){
      Hit sh = card(p - vec2(.06, -.08), R, c, bh, .04);
      col *= 1. - sh.cov * .55;
    }
    Hit hh = card(p, R, c, bh, 0.);
    if (hh.cov > 0. && hh.t < best){
      best = hh.t;
      vec2 cu = hh.uv;
      vec3 pic = (i == 1 ? texture(uAlt, cu) : texture(uCur, cu)).rgb;
      vec2 e = min(cu, 1. - cu) * uRes * s;
      float edge = step(min(e.x, e.y), uBw);
      vec3 bcol = i == 0 ? uBorder : (i == 1 ? vec3(.95) : vec3(.2, .4, 1.));
      pic = mix(pic, bcol, edge);
      col = mix(col, pic * (hh.front > .5 ? 1. : .5) * mix(1., hh.shade, .6), hh.cov);
    }
  }
  outColor = vec4(col, 1.);
}
`,De=A+`
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
`,Oe=A+`
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
`,ke=A+`
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
`,Ae=`
uniform sampler2D uAtlas;
uniform float uHead;     // slot of the newest frame
uniform float uFilled;   // frames available
vec3 past(vec2 uv, float back){
  back = clamp(floor(back), 0., max(uFilled - 1., 0.));
  float slot = mod(uHead - back + 256., 64.);
  vec2 cell = vec2(mod(slot, 8.), floor(slot / 8.));
  return texture(uAtlas, (cell + clamp(uv, .003, .997)) / 8.).rgb;
}
`,je=A+Ae+`
uniform sampler2D uCur;
uniform int uMode;   // 1 past only, 2 mix, 3 difference
uniform float uBack;
uniform float uAmt;
void main(){
  vec3 c = texture(uCur, vUv).rgb;
  vec3 p = past(vUv, uBack);
  vec3 o = c;
  if (uMode == 1) o = p;
  else if (uMode == 2) o = mix(c, p, uAmt);
  else if (uMode == 3) o = abs(c - p) * (1. + uAmt * 3.);
  outColor = vec4(o, 1.);
}
`;A+Ae+``;var Me=A+Ae+`
uniform sampler2D uSrc;
uniform sampler2D uStage;
uniform int uLayout;     // 1 grid 2 tower 3 garden 4 clock 5 moon 6 fish 7 cello 8 buddha 9 flag 10 map
uniform vec2 uGrid;
uniform int uDist;       // 0 same 1 span 2 chase 3 shuffle
uniform float uVar;
uniform vec4 uTvRect;    // buddha: tv centre + half size (px)

vec3 feed(float idx, vec2 suv, vec2 span){
  if (uDist == 1) return texture(uSrc, span).rgb;
  if (uDist == 2) return past(suv, idx * (1. + uVar * 5.));
  if (uDist == 3){
    float s = hash12(vec2(idx, floor(uTime * (.3 + uVar))));
    if (s < .3) return texture(uSrc, suv).rgb;
    if (s < .5) return past(suv, floor(s * 90.));
    if (s < .62) return 1. - texture(uSrc, suv).rgb;
    if (s < .78) return hueShift(texture(uSrc, suv).rgb, s * 3.);
    if (s < .9) return texture(uSrc, vec2(suv.y, 1. - suv.x)).rgb;
    return vec3(luma(texture(uSrc, suv).rgb));
  }
  return texture(uSrc, suv).rgb;
}

vec3 moonFace(vec2 suv, float idx, vec2 hs){
  vec2 p = (suv - .5) * vec2(hs.x / hs.y, 1.) * 2.;
  float R = .72;
  float r = length(p);
  if (r > R) return vec3(0.);
  float ph = fract(idx / 12. + uTime * .004);
  float y = p.y / R;
  float w = sqrt(max(0., 1. - y * y));
  float t = cos(ph * TAU) * w;
  float x = p.x / R;
  bool lit = ph < .5 ? (x > t) : (x < -t);
  float wob = .015 * sin(p.y * 9. + uTime + idx);
  float l = fract((suv.y + wob) * hs.y * .5);
  float line = smoothstep(.0, .3, l) * smoothstep(1., .55, l);
  return lit ? vec3(.86) * line : vec3(0.02);
}

vec3 clockFace(vec2 suv, float idx){
  vec2 p = suv - .5;
  float a = idx / 12. * TAU + uTime * .01;
  vec2 dir = vec2(sin(a), cos(a));
  float along = dot(p, dir);
  float across = abs(dot(p, vec2(-dir.y, dir.x)));
  float on = step(across, .012) * step(abs(along), .42);
  vec3 c = texture(uSrc, vec2(.5 + along * 1.1, .5)).rgb;
  return c * on * 2.2 + vec3(.04) * step(across, .03) * step(abs(along), .42);
}

// one CRT monitor. c centre, hs half size of the picture tube (px)
vec4 tv(vec2 p, vec2 c, vec2 hs, float idx, int kind){
  float bez = min(hs.x, hs.y) * .17 + 2.;
  vec2 d = p - c;
  vec2 bq = abs(d) - (hs + bez);
  float body = max(bq.x, bq.y);
  if (body > 0.) return vec4(0.);
  vec3 col = d.y > hs.y * .2 ? vec3(.2, .19, .18) : vec3(.13, .125, .12);
  if (body > -1.5) col = vec3(.05);
  float rr = min(hs.x, hs.y) * .22;
  vec2 sq = abs(d) - hs + rr;
  float sd = length(max(sq, 0.)) + min(max(sq.x, sq.y), 0.) - rr;
  if (sd < 0.){
    vec2 s = d / hs;
    s *= 1. + .05 * dot(s, s);
    vec2 suv = s * .5 + .5;
    vec3 sc = kind == 1 ? moonFace(suv, idx, hs) : kind == 2 ? clockFace(suv, idx) : feed(idx, suv, p / uRes);
    sc *= .78 + .22 * step(.5, fract(suv.y * min(hs.y, 120.)));
    sc *= 1. - .3 * dot(s, s) * .5;
    if (s.x < -.4 && s.y > .45) sc += vec3(.06);
    col = sc;
  } else if (sd < 1.5) col = vec3(.02);
  return vec4(col, 1.);
}

vec2 fit43(vec2 cell){ float w = min(cell.x, cell.y * 4. / 3.); return vec2(w, w * .75) * .5; }

void main(){
  vec2 p = vUv * uRes;
  vec3 col = vec3(.015);
  bool portrait = uRes.x < uRes.y;

  if (uLayout == 1 || uLayout == 4 || uLayout == 5 || uLayout == 9 || uLayout == 10){
    vec2 g = uGrid;
    if (uLayout == 4 || uLayout == 5) g = portrait ? vec2(3., 4.) : vec2(4., 3.);
    if (uLayout == 9) g = portrait ? vec2(5., 9.) : vec2(11., 7.);
    if (uLayout == 10) g = portrait ? vec2(6., 10.) : vec2(12., 7.);
    vec2 cell = uRes / g;
    vec2 id = floor(p / cell);
    vec2 c = (id + .5) * cell;
    float idx = id.x + (g.y - 1. - id.y) * g.x;
    int kind = uLayout == 4 ? 2 : uLayout == 5 ? 1 : 0;
    vec2 hs = fit43(cell * .84);
    bool draw = true;
    if (uLayout == 10){
      vec2 n = (c / uRes - .5) * vec2(uRes.x / uRes.y, 1.);
      float shape = fbm(n * 2.3 + 4.1) + .62 - length(n * vec2(1., 1.3)) * 1.25;
      draw = shape > .5;
      vec2 pn = (p / uRes - .5) * vec2(uRes.x / uRes.y, 1.);
      float sp = fbm(pn * 2.3 + 4.1) + .62 - length(pn * vec2(1., 1.3)) * 1.25;
      float lw = 2.5 / uRes.y;
      col += vec3(1., .15, .3) * step(abs(sp - .48), lw * 1.5);
      col += vec3(.2, .5, 1.) * step(abs(sp - .455), lw * 1.5);
      col += vec3(1., .85, .2) * step(abs(sp - .43), lw * 1.5);
    }
    if (draw){
      vec4 t = tv(p, c, hs, idx, kind);
      if (uLayout == 9 && t.a > 0.){
        bool canton = id.x < g.x * .42 && id.y >= g.y - 4.;
        vec3 tint = canton ? vec3(.25, .35, 1.) : (mod(id.y, 2.) < .5 ? vec3(1., .2, .15) : vec3(1.));
        t.rgb = mix(t.rgb, luma(t.rgb) * tint * 1.4, .75);
      }
      col = mix(col, t.rgb, t.a);
    }
  } else if (uLayout == 2){
    // a stepped tower of monitors
    float R = portrait ? 8. : 6.;
    float w = uRes.x / (portrait ? 7.5 : 11.);
    float h = w * .8;
    float base = uRes.y * .04;
    float j = floor((p.y - base) / h);
    col = mix(vec3(.01), vec3(.05, .045, .04), p.y / uRes.y);
    if (j >= 0. && j < R){
      float n = max(1., (portrait ? 7. : 11.) - j);
      float x0 = uRes.x * .5 - n * w * .5;
      float i = floor((p.x - x0) / w);
      if (i >= 0. && i < n){
        vec2 c = vec2(x0 + (i + .5) * w, base + (j + .5) * h);
        vec4 t = tv(p, c, vec2(w, h) * .5 * vec2(.8, .74), i + j * 11., 0);
        col = mix(col, t.rgb, t.a);
      }
    }
  } else if (uLayout == 3){
    // monitors lying among plants
    col = mix(vec3(.01, .02, .01), vec3(.03, .05, .02), p.y / uRes.y);
    for (int i = 0; i < 14; i++){
      float fi = float(i);
      float y = uRes.y * (.86 - fi / 14. * .8);
      float x = uRes.x * (.1 + .8 * hash11(fi * 7.3));
      float sz = uRes.x * (.07 + .07 * (fi / 14.)) * (.8 + .4 * hash11(fi));
      vec2 hs = vec2(sz, sz * .55);
      vec4 t = tv(p, vec2(x, y), hs, fi, 0);
      col = mix(col, t.rgb, t.a);
    }
    vec2 q = p / uRes.y;
    float n = fbm(q * vec2(9., 6.) + vec2(0., uTime * .03));
    float n2 = vnoise(q * 40.);
    float leaf = step(.6, n + .12 * n2) * step(p.y / uRes.y, .95);
    col = mix(col, mix(vec3(.04, .16, .04), vec3(.12, .32, .08), step(.55, n2)), leaf);
  } else if (uLayout == 6){
    // monitors behind aquariums
    float n = portrait ? 2. : 4.;
    float rows = portrait ? 3. : 1.;
    vec2 cell = uRes / vec2(n, rows);
    vec2 id = floor(p / cell);
    vec2 c = (id + .5) * cell;
    float idx = id.x + id.y * n;
    vec4 t = tv(p, c + vec2(0., cell.y * .06), fit43(cell * .7), idx, 0);
    col = mix(col, t.rgb, t.a);
    vec2 tq = abs(p - c) - cell * vec2(.45, .4);
    if (max(tq.x, tq.y) < 0.){
      float water = step(p.y, c.y + cell.y * .32);
      col = mix(col, col * vec3(.55, .85, .8) + vec3(0., .05, .06), .55 * water);
      if (abs(p.y - (c.y + cell.y * .32)) < 1.5) col = vec3(.6, .8, .8);
      for (int k = 0; k < 3; k++){
        float fk = float(k);
        float sp = .04 + .05 * hash11(idx * 3. + fk);
        float dir = hash11(idx + fk * 5.) < .5 ? 1. : -1.;
        float fx = c.x + (fract(uTime * sp + hash11(idx * 9. + fk)) - .5) * cell.x * .85 * dir;
        float fy = c.y + (hash11(idx * 2. + fk * 11.) - .5) * cell.y * .5 + sin(uTime + fk) * 4.;
        vec2 fp = (p - vec2(fx, fy)) * vec2(dir, 1.);
        float s = cell.x * .045;
        float bodyF = step(length(fp / vec2(s * 1.6, s)), 1.);
        vec2 tp = fp + vec2(s * 1.8, 0.);
        float tail = step(abs(tp.y), -tp.x * .9) * step(tp.x, 0.) * step(-s, tp.x);
        col = mix(col, vec3(.85, .35, .08), max(bodyF, tail) * water);
      }
      vec2 bp = p - vec2(c.x + sin(uTime * .7 + idx) * cell.x * .3, c.y - cell.y * .35 + fract(uTime * .2 + idx * .3) * cell.y * .65);
      col += vec3(.4) * step(abs(length(bp) - 3.), .8) * water;
    }
  } else if (uLayout == 7){
    // three monitors stacked into a cello
    float W = min(uRes.x * .8, uRes.y * .5);
    vec2 c0 = vec2(uRes.x * .5, uRes.y * .2);
    float y = c0.y;
    for (int i = 0; i < 3; i++){
      float fi = float(i);
      float s = W * (.5 - fi * .1);
      vec2 hs = vec2(s, s * .72) * .5;
      vec2 c = vec2(c0.x, y + hs.y * 1.3);
      vec4 t = tv(p, c, hs, fi, 0);
      col = mix(col, t.rgb, t.a);
      y += hs.y * 2.6;
    }
    vec2 nq = p - vec2(c0.x, y + uRes.y * .07);
    if (abs(nq.x) < W * .025 && abs(nq.y) < uRes.y * .08) col = vec3(.12, .07, .03);
    if (length(nq - vec2(0., uRes.y * .085)) < W * .04) col = vec3(.12, .07, .03);
    float bow = abs(dot(p - c0 - vec2(0., W * .5), normalize(vec2(1., .35))));
    if (bow < 1.6 && abs(p.x - c0.x) < W * .55) col = vec3(.75, .7, .6);
  } else if (uLayout == 8){
    // a statue watches itself on a closed circuit
    vec4 st = texture(uStage, vUv);
    col = st.rgb;
    vec4 t = tv(p, uTvRect.xy, uTvRect.zw, 0., 0);
    col = mix(col, t.rgb, t.a);
  } else {
    col = texture(uSrc, vUv).rgb;
  }
  outColor = vec4(col, 1.);
}
`,Ne=A+`
uniform sampler2D uSrc;
uniform sampler2D uCg;
uniform float uOn;
void main(){
  vec3 c = texture(uSrc, vUv).rgb;
  if (uOn > .5){ vec4 g = texture(uCg, vUv); c = c * (1. - g.a) + g.rgb; }
  outColor = vec4(c, 1.);
}
`,Pe=`
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
`,Fe=A+Pe+`
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
          m = smoothstep(uLuma.x, uLuma.y, luma(texture(uObj, t).rgb));
        } else {
          float d = distance(cbcr(texture(uObj, t).rgb), cbcr(uKeyColor));
          m = smoothstep(.1, .18, d);
        }
        if (uKind != 0 && uInvert > .5) m = 1. - m;
      }
    }
    m *= f.z;
  }
  outColor = vec4(m, m, m, 1.);
}
`,Ie=A+`
uniform sampler2D uPrev;
uniform sampler2D uMask;
uniform float uFx;
uniform float uFirst;
void main(){
  vec2 p = uFirst > .5 ? vec2(0.) : texture(uPrev, vUv).rg;
  float m = smoothstep(.4, .6, texture(uMask, vUv).r);
  outColor = vec4(max(p.x, m * uFx), max(p.y, m * (1. - uFx)), 0., 1.);
}
`,Le=A+Pe+`
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
    vec3 c = texture(uObj, clipUv(f.xy)).rgb - self;
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
  vec2 cu = clipUv(f.xy);
  vec3 self = inUnit(cu) && f.z > 0. ? texture(uObj, cu).rgb : vec3(0.);
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
`,Re=`
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
`,ze=A+Re+`
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
`,Be=A+Re+`
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
`,Ve=A+`
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
`,He=A+`
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
`,Ue=A+`
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
`,We=A+Re+`
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
`,Ge=A+`
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
`,Ke=A+`
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
`,qe=A+`
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
`,Je=A+`
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
`,Ye=`"Galmuri11", monospace`,Xe=[`#ff3030`,`#ffe030`,`#30ff60`,`#30e0ff`,`#5050ff`,`#ff40ff`];function Ze(e,t,n,r){e.font=`bold ${r}px ${Ye}`;let i=e.measureText(t).width;return i>n?Math.floor(r*n/i):r}function Qe(e,t,n,r,i,a,o,s=`center`){e.font=`bold ${i}px ${Ye}`,e.textAlign=s,e.textBaseline=`middle`;let c=Math.max(2,Math.round(i/11));if(a===`neg`){let a=e.measureText(t).width,o=s===`center`?n-a/2:n;e.fillStyle=`#f0f0f0`,e.fillRect(Math.round(o-c*3),Math.round(r-i*.62),Math.round(a+c*6),Math.round(i*1.24)),e.fillStyle=`#0a0a0a`,e.fillText(t,n,r)}else{e.fillStyle=`#000`;for(let[i,a]of[[-c,0],[c,0],[0,-c],[0,c],[-c,-c],[c,c],[-c,c],[c,-c]])e.fillText(t,n+i,r+a);if(a===`cycle`){let i=[...t],a=0,c=i.map(t=>e.measureText(t).width),l=c.reduce((e,t)=>e+t,0),u=s===`center`?n-l/2:n,d=Math.floor(o*8);e.textAlign=`left`,i.forEach((t,n)=>{e.fillStyle=Xe[(n+d)%Xe.length],e.fillText(t,u,r),u+=c[n],a+=c[n]})}else e.fillStyle=`#f4f4f4`,e.fillText(t,n,r)}}var $e=class{canvas=document.createElement(`canvas`);ctx=this.canvas.getContext(`2d`);standby=document.createElement(`canvas`);label=document.createElement(`canvas`);start=0;serial=-1;visible=!1;constructor(){document.fonts.load(`22px "Galmuri11"`,`가A1`).then(()=>this.drawStatic())}resize(e,t){(this.canvas.width!==e||this.canvas.height!==t)&&(this.canvas.width=e,this.canvas.height=t,this.drawStatic())}drawStatic(){let e=this.canvas.width||720,t=this.canvas.height||1280;this.standby.width=e,this.standby.height=t;let n=this.standby.getContext(`2d`);n.fillStyle=`#000`,n.fillRect(0,0,e,t);let r=this.label;r.width=400,r.height=100;let i=r.getContext(`2d`);i.clearRect(0,0,400,100),i.fillStyle=`#000`,i.fillRect(70,28,260,44),i.font=`bold 33px ${Ye}`,i.textAlign=`center`,i.textBaseline=`middle`,i.fillStyle=`#e8e8e8`,i.fillText(`NO SIGNAL`,200,51)}render(e,t=e){let n=s.cg,r=this.canvas.width,i=this.canvas.height,a=this.ctx;if(n.serial!==this.serial&&(this.serial=n.serial,this.start=e),this.visible=n.mode!==`off`||n.tc||n.sat,!this.visible)return!1;a.clearRect(0,0,r,i),a.imageSmoothingEnabled=!1;let o=Math.min(r,i)/10,c=e-this.start,l=e=>e.slice(0,Math.floor(c*30));if(n.mode===`title`){let e=Ze(a,n.title1,r*.9,Math.round(o*1.1));Qe(a,l(n.title1),r/2,i*.47,e,n.style,c),n.title2&&Qe(a,l(n.title2),r/2,i*.47+e*1.3,Math.round(e*.55),n.style===`cycle`?`chyron`:n.style,c)}else if(n.mode===`lower`){let e=Ze(a,n.lower1,r*.86,Math.round(o*.62));Qe(a,l(n.lower1),o*.5,i*.78,e,n.style,c,`left`),Qe(a,l(n.lower2),o*.5,i*.78+e*1.25,Math.round(e*.7),n.style===`cycle`?`chyron`:n.style,c,`left`)}else if(n.mode===`crawl`){let e=Math.round(o*.5);a.font=`bold ${e}px ${Ye}`;let t=a.measureText(n.crawl).width+o,s=r-Math.floor(c*60)*Math.round(o*.03)%(t+r);a.fillStyle=`#000`,a.fillRect(0,Math.round(i*.88-e*.8),r,Math.round(e*1.6)),Qe(a,n.crawl,s,i*.88,e,n.style,c,`left`)}else if(n.mode===`doc`){let e=n.docTop.split(`
`),t=Math.round(o*.3);a.font=`${t}px ${Ye}`,a.textAlign=`center`,a.textBaseline=`middle`,e.forEach((e,n)=>{a.fillStyle=`#000`,a.fillText(l(e),r/2+1,o*.7+n*t*1.3+1),a.fillStyle=`#b8b8b8`,a.fillText(l(e),r/2,o*.7+n*t*1.3)});let s=n.doc.split(`
`).filter(e=>e.trim()),u=Ze(a,s.reduce((e,t)=>e.length>t.length?e:t,``),r*.9,Math.round(o*.5)),d=i*.5-(s.length-1)*u*1.25/2;s.forEach((e,t)=>Qe(a,l(e.toUpperCase()),r/2,d+t*u*1.25,u,`chyron`,c))}else if(n.mode===`credits`){let e=n.credits.split(`
`),t=Math.round(o*.7),s=i-Math.floor(c*30)*Math.max(1,Math.round(o*.04))%(e.length*t+i);e.forEach((i,l)=>{if(!i.trim())return;let u=l===0||!e[l-1].trim();Qe(a,i,r/2,s+l*t,Math.round(u?o*.32:o*.5),u?`chyron`:n.style,c)})}if(n.tc&&n.tcBig){let e=Math.round(o*.62),n=t+660+56,s=Math.floor(n%1*30),c=[Math.floor(n/3600)%24,Math.floor(n/60)%60,Math.floor(n)%60,s].map(e=>String(e).padStart(2,`0`)).join(` `);a.font=`bold ${e}px ${Ye}`;let l=a.measureText(c).width;a.fillStyle=`#000`,a.fillRect(Math.round(r/2-l/2-10),Math.round(i*.8-e*.7),Math.round(l+20),Math.round(e*1.4)),a.fillStyle=`#f4f4f4`,a.textAlign=`center`,a.textBaseline=`middle`,a.fillText(c,r/2,i*.8)}else if(n.tc){let t=Math.round(o*.36),n=e,s=Math.floor(n%1*30),c=`${String(Math.floor(n/3600)%24).padStart(2,`0`)}:${String(Math.floor(n/60)%60).padStart(2,`0`)}:${String(Math.floor(n)%60).padStart(2,`0`)}:${String(s).padStart(2,`0`)}`;a.font=`bold ${t}px ${Ye}`;let l=a.measureText(c).width;a.fillStyle=`#000`,a.fillRect(Math.round(r/2-l/2-6),Math.round(i-o*.9),Math.round(l+12),Math.round(t*1.4)),a.fillStyle=`#fff`,a.textAlign=`center`,a.textBaseline=`top`,a.fillText(c,r/2,Math.round(i-o*.9+t*.2))}if(n.sat){let t=Math.round(o*.3);a.font=`bold ${t}px ${Ye}`,a.textAlign=`left`,a.textBaseline=`top`,Math.floor(e*1.5)%2==0&&(a.fillStyle=`#000`,a.fillRect(Math.round(o*.3),Math.round(o*.35),Math.round(o*4.6),Math.round(t*1.5)),a.fillStyle=`#ffe040`,a.fillText(`LIVE VIA SATELLITE`,Math.round(o*.4),Math.round(o*.35+t*.25)))}return!0}},et=(e,t)=>{e.fillStyle=t,e.fill(),e.lineWidth=5,e.strokeStyle=`#111`,e.stroke()},tt=[e=>{e.beginPath(),e.moveTo(18,92),e.bezierCurveTo(30,40,60,12,92,6),e.bezierCurveTo(80,40,56,70,18,92),et(e,`#f4f0e0`),e.beginPath(),e.moveTo(18,92),e.lineTo(80,20),e.stroke();for(let t=0;t<6;t++)e.beginPath(),e.moveTo(30+t*9,78-t*10),e.lineTo(42+t*9,76-t*12),e.stroke()},e=>{e.beginPath(),e.ellipse(32,76,16,12,-.4,0,Math.PI*2),et(e,`#111`),e.fillRect(44,14,7,62),e.beginPath(),e.moveTo(51,14),e.quadraticCurveTo(80,26,74,52),e.quadraticCurveTo(70,34,51,32),et(e,`#111`)},e=>{e.beginPath(),e.roundRect(34,8,32,48,16),et(e,`#c8c8d0`);for(let t=0;t<4;t++)e.beginPath(),e.moveTo(36,18+t*9),e.lineTo(64,18+t*9),e.stroke();e.beginPath(),e.moveTo(24,46),e.quadraticCurveTo(50,80,76,46),e.stroke(),e.fillStyle=`#111`,e.fillRect(46,64,8,22),e.fillRect(32,86,36,7)},e=>{e.beginPath(),e.moveTo(12,38),e.lineTo(34,38),e.lineTo(62,14),e.lineTo(62,86),e.lineTo(34,62),e.lineTo(12,62),e.closePath(),et(e,`#f0d040`);for(let t=0;t<3;t++)e.beginPath(),e.arc(62,50,14+t*12,-.7,.7),e.stroke()},e=>{e.beginPath(),e.ellipse(50,48,36,42,0,0,Math.PI*2),et(e,`#f8f0c8`),e.fillStyle=`#111`,e.beginPath(),e.ellipse(36,38,8,5,-.3,0,Math.PI*2),e.ellipse(64,38,8,5,.3,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(50,56,18,.15,Math.PI-.15),e.closePath(),e.fill()},e=>{e.beginPath(),e.ellipse(50,48,36,42,0,0,Math.PI*2),et(e,`#a0c8f0`),e.fillStyle=`#111`,e.beginPath(),e.ellipse(36,40,8,5,.4,0,Math.PI*2),e.ellipse(64,40,8,5,-.4,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(50,78,16,Math.PI+.3,-.3),e.lineWidth=6,e.stroke()},e=>{e.beginPath(),e.ellipse(50,52,42,34,-.2,0,Math.PI*2),et(e,`#d8a868`),[`#e02020`,`#2050e0`,`#20c040`,`#f0e020`,`#f0f0f0`].forEach((t,n)=>{e.beginPath(),e.arc(26+n*13,40+n%2*10,6,0,Math.PI*2),e.fillStyle=t,e.fill(),e.lineWidth=2,e.stroke()}),e.beginPath(),e.arc(66,66,8,0,Math.PI*2),e.fillStyle=`#3a2410`,e.fill()},e=>{e.beginPath(),e.moveTo(20,76),e.quadraticCurveTo(30,66,30,44),e.quadraticCurveTo(30,14,50,14),e.quadraticCurveTo(70,14,70,44),e.quadraticCurveTo(70,66,80,76),e.closePath(),et(e,`#f0c030`),e.beginPath(),e.arc(50,82,8,0,Math.PI*2),et(e,`#f0c030`)},e=>{e.beginPath();for(let t=0;t<10;t++){let n=t%2?18:44,r=t/10*Math.PI*2-Math.PI/2;e.lineTo(50+Math.cos(r)*n,52+Math.sin(r)*n)}e.closePath(),et(e,`#ff60c0`)}],nt=[`#1830a0`,`#c02040`,`#108050`,`#d07010`,`#7020a0`,`#101010`,`#e0d8c0`];function rt(e,t,n){e.fillStyle=`#f4f4f4`,e.fillRect(-t/2-8,-n/2-8,t+16,n+16),[`#c0c0c0`,`#c0c000`,`#00c0c0`,`#00c000`,`#c000c0`,`#c00000`,`#0000c0`].forEach((r,i)=>{e.fillStyle=r,e.fillRect(-t/2+i*t/7,-n/2,t/7+1,n*.7)}),[`#0000c0`,`#111`,`#c000c0`,`#111`,`#00c0c0`,`#111`,`#c0c0c0`].forEach((r,i)=>{e.fillStyle=r,e.fillRect(-t/2+i*t/7,-n/2+n*.7,t/7+1,n*.08)}),e.fillStyle=`#101010`,e.fillRect(-t/2,-n/2+n*.78,t,n*.22),e.fillStyle=`#f0f0f0`,e.fillRect(-t/2+t*.16,-n/2+n*.78,t*.16,n*.22)}var it=class{canvas=document.createElement(`canvas`);last=-1;stamp=0;update(e,t,n){let r=Math.min(1,720/Math.max(t,n)),i=Math.round(t*r),a=Math.round(n*r);if(e===this.last&&this.canvas.width===i)return!1;this.last=e,this.canvas.width=i,this.canvas.height=a;let o=this.canvas.getContext(`2d`),s=t=>{let n=Math.sin(e*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)};o.fillStyle=nt[Math.floor(s(1)*nt.length)],o.fillRect(0,0,i,a),o.strokeStyle=`rgba(255,255,255,0.18)`,o.lineWidth=10;for(let e=1;e<8;e++)o.strokeRect(i/2-e*i*.07,a/2-e*a*.07,e*i*.14,e*a*.14);let c=tt[Math.floor(s(2)*tt.length)],l=tt[Math.floor(s(3)*tt.length)],u=Math.min(i,a)*.28;for(let[e,t]of[[1,1],[-1,1],[1,-1],[-1,-1]])o.save(),o.translate(i/2+e*i*.3,a/2+t*a*.32),o.scale(e*u/100,t*u/100),o.translate(-50,-50),c(o),o.restore(),o.save(),o.translate(i/2+e*i*.36,a/2+(t>0?.04:-.04)*a),o.scale(e*u*.7/100,u*.7/100),o.translate(-50,-50),t>0&&l(o),o.restore();o.save(),o.translate(i/2,a/2),o.rotate((s(4)-.5)*.9);let d=i*.5,f=d*.75;return o.fillStyle=`rgba(0,0,0,0.45)`,o.fillRect(-d/2+10,-f/2+12,d+16,f+16),rt(o,d,f),o.restore(),this.stamp++,!0}};function at(e,t){let n=Math.max(32,Math.round(e/4)),r=Math.max(32,Math.round(t/4)),i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`),o=r>n;a.fillStyle=`#0c0b0a`,a.fillRect(0,0,n,r);let s=Math.round(r*(o?.62:.68));a.fillStyle=`#1d1a16`,a.fillRect(0,s,n,r-s),a.fillStyle=`#26221d`;for(let e=s+2;e<r;e+=3)a.fillRect(0,e,n,1);a.fillStyle=`#2f2a23`,a.beginPath(),a.ellipse(n*.5,s+(r-s)*.35,n*.42,(r-s)*.22,0,0,Math.PI*2),a.fill();let c=Math.min(n*(o?.42:.26),r*.42),l=n*(o?.28:.3),u=s+c*.05;a.fillStyle=`#6b5a3a`,a.beginPath(),a.ellipse(l,u-c*.12,c*.48,c*.16,0,0,Math.PI*2),a.fill(),a.beginPath(),a.moveTo(l-c*.3,u-c*.18),a.lineTo(l-c*.24,u-c*.62),a.lineTo(l+c*.12,u-c*.66),a.lineTo(l+c*.28,u-c*.2),a.closePath(),a.fill(),a.beginPath(),a.arc(l-c*.03,u-c*.8,c*.15,0,Math.PI*2),a.fill(),a.beginPath(),a.arc(l-c*.05,u-c*.96,c*.065,0,Math.PI*2),a.fill(),a.fillStyle=`#9c8455`,a.fillRect(Math.round(l+c*.05),Math.round(u-c*.6),Math.max(1,Math.round(c*.06)),Math.round(c*.38)),a.fillRect(Math.round(l+c*.07),Math.round(u-c*.86),Math.max(1,Math.round(c*.04)),Math.round(c*.1)),a.fillStyle=`#2b2620`,a.fillRect(Math.round(l-c*.55),Math.round(u),Math.round(c*1.1),Math.round(c*.14));let d=c*.62,f=n*(o?.72:.66),p=u-c*.58;a.fillStyle=`#121110`,a.fillRect(Math.round(f-d*.08),Math.round(p+d*.4),Math.round(d*.16),Math.round(u-p-d*.4));let m=f+d*(o?.15:.75),h=p-d*.75;a.strokeStyle=`#3a352d`,a.lineWidth=1,a.beginPath(),a.moveTo(m,h),a.lineTo(m-d*.3,u),a.moveTo(m,h),a.lineTo(m+d*.3,u),a.moveTo(m,h),a.lineTo(m,u),a.stroke(),a.fillStyle=`#4a443a`,a.fillRect(Math.round(m-d*.18),Math.round(h-d*.14),Math.round(d*.32),Math.round(d*.18)),a.fillRect(Math.round(m-d*.28),Math.round(h-d*.1),Math.round(d*.1),Math.round(d*.1));let g=document.createElement(`canvas`);g.width=e,g.height=t;let _=g.getContext(`2d`);_.imageSmoothingEnabled=!1,_.drawImage(i,0,0,e,t);let v=d*4/2/1.34,y=v*.75;return{canvas:g,tv:[f*4,t-p*4,v,y]}}var ot=900,st=new Float32Array(ot*2),ct=new Float32Array(2048);function lt(e,t){let n=s.synth;if(n.mode===1){let e=!1;if(_.ctx&&_.xy){_.xy.getFloatTimeDomainData(ct);for(let t=0;t<64;t++)Math.abs(ct[t*16])>.002&&(e=!0)}let t=2.6*n.gain;for(let r=0;r<ot;r++)if(e){let e=ct[r*2%2011],i=ct[(r*2+37)%2048],a=Math.atan2(i,e)+r*.0021*n.fx,o=Math.min(1.2,Math.hypot(e,i)*t);st[r*2]=Math.cos(a)*o,st[r*2+1]=Math.sin(a)*o}else st[r*2]=(Math.random()-.5)*.02,st[r*2+1]=(Math.random()-.5)*.02;return st}let r=e*n.drift,i=.82*(1+t*.15)*n.gain;for(let e=0;e<ot;e++){let t=e/899*Math.PI*2,a,o;if(n.mode===2){let e=n.fx/Math.max(1,n.fy),s=Math.cos(e*t*n.fy+r)*i;a=s*Math.cos(t*n.fy),o=s*Math.sin(t*n.fy)}else a=Math.sin(n.fx*t+r)*i,o=Math.sin(n.fy*t)*i;st[e*2]=a,st[e*2+1]=o}return st}function ut(e,t,n,r,i){let a=e.length/2,o=n/r*2,s=0;for(let n=0;n<a-1;n++){let r=e[n*2]/t,a=e[n*2+1],c=e[n*2+2]/t,l=e[n*2+3],u=c-r,d=l-a,f=Math.hypot(u*t,d)||1e-6,p=Math.min(1.6,.012/f+.25);u/=f,d/=f;let m=-d*o/t,h=u*o,g=[[r+m,a+h,1],[r-m,a-h,-1],[c+m,l+h,1],[c+m,l+h,1],[r-m,a-h,-1],[c-m,l-h,-1]];for(let[e,t,n]of g)i[s++]=e,i[s++]=t,i[s++]=n,i[s++]=p}return s/4}var dt=21576,ft=[{name:`DANCER`,ko:`무대`,bpm:120,dur:8},{name:`METRONOME`,ko:`메트로놈`,bpm:90,dur:8}];function pt(e,t,n,r,i,a){e.beginPath(),e.moveTo(t+a,n),e.arcTo(t+r,n,t+r,n+i,a),e.arcTo(t+r,n+i,t,n+i,a),e.arcTo(t,n+i,t,n,a),e.arcTo(t,n,t+r,n,a),e.closePath()}function mt(e,t){let n=t*120/60,r=e.createLinearGradient(0,0,0,640);r.addColorStop(0,`#2a1a10`),r.addColorStop(1,`#5a3418`),e.fillStyle=r,e.fillRect(0,0,360,640);for(let n=0;n<14;n++)e.fillStyle=n%2?`rgba(0,0,0,0.18)`:`rgba(255,200,140,0.06)`,e.fillRect(n*360/14+Math.sin(t*.7+n)*3,0,360/28,640*.78);e.fillStyle=`#1d3b46`,e.fillRect(0,640*.78,360,140.8),e.fillStyle=`#2f5e6c`;for(let t=0;t<6;t++)e.fillRect(0,640*.78+t*22+4,360,3);let i=180+Math.sin(t/8*Math.PI*2)*360*.22,a=e.createRadialGradient(i,320,10,i,320,180);a.addColorStop(0,`rgba(255,240,200,0.35)`),a.addColorStop(1,`rgba(255,240,200,0)`),e.fillStyle=a,e.fillRect(0,0,360,640);let o=Math.abs(Math.sin(n*Math.PI))*10,s=640*.33-o,c=Math.sin(n*Math.PI)*.18;e.save(),e.translate(i,s),e.rotate(c*.3),e.strokeStyle=`#141414`,e.lineCap=`round`,e.lineWidth=26;let l=Math.sin(n*Math.PI)*26;e.beginPath(),e.moveTo(-14,150),e.lineTo(-22-l*.4,300+o),e.moveTo(14,150),e.lineTo(22-l*.4,300+o),e.stroke(),e.fillStyle=`#d0202c`,e.beginPath(),e.moveTo(-34,20),e.lineTo(34,20),e.lineTo(58+c*30,170),e.lineTo(-58+c*30,170),e.closePath(),e.fill();let u=(r,i)=>{let a=-.5+Math.sin(n*Math.PI+i)*.7,o=r*(40+Math.cos(a)*60),s=40+Math.sin(a)*60;e.strokeStyle=`#e8b896`,e.lineWidth=16,e.beginPath(),e.moveTo(r*30,32),e.lineTo(o,s),e.stroke(),e.fillStyle=`#202020`,pt(e,o-22,s-18,44,36,5),e.fill(),e.fillStyle=`hsl(${(t*90+r*60)%360} 80% 60%)`,pt(e,o-16,s-12,32,24,4),e.fill()};u(-1,0),u(1,Math.PI),e.fillStyle=`#e8b896`,e.beginPath(),e.arc(0,-10,30,0,Math.PI*2),e.fill(),e.fillStyle=`#1a0e08`,e.beginPath(),e.arc(0,-18,32,Math.PI*.95,Math.PI*2.05),e.fill(),e.fillRect(-32,-18,10,50),e.fillRect(22,-18,10,50),e.restore(),e.save(),e.translate(302.4,396.8),e.rotate(-.12),e.fillStyle=`#8a4a1c`,e.beginPath(),e.ellipse(0,40,34,46,0,0,Math.PI*2),e.ellipse(0,-20,26,32,0,0,Math.PI*2),e.fill(),e.fillStyle=`#2a160a`,e.fillRect(-3,-110,6,120),e.restore()}function ht(e,t){let n=t*90/60,r=Math.floor(n/4)%3;if(r===0)[`#c0c0c0`,`#c0c000`,`#00c0c0`,`#00c000`,`#c000c0`,`#c00000`,`#0000c0`].forEach((t,n)=>{e.fillStyle=t,e.fillRect(n*360/7,0,52.42857142857143,640)});else if(r===1){e.fillStyle=`#f2f0e8`,e.fillRect(0,0,360,640);for(let t=0;t<12;t++)e.fillStyle=`#111`,e.fillRect(0,t*640/12,360,2),[1,3,6,8,10].includes(t%12)&&e.fillRect(0,t*640/12+6,216,640/12-10)}else for(let n=0;n<24;n++)e.fillStyle=`hsl(${n*15} 90% 55%)`,e.beginPath(),e.moveTo(180,320),e.arc(180,320,640,n/24*Math.PI*2+t*.2,(n+1)/24*Math.PI*2+t*.2),e.fill();e.fillStyle=`#5a2c10`,e.beginPath(),e.moveTo(90,512),e.lineTo(270,512),e.lineTo(214,128),e.lineTo(146,128),e.closePath(),e.fill(),e.fillStyle=`#e8d8a8`,e.fillRect(162,158,36,294),e.fillStyle=`#3a1a08`;for(let t=0;t<14;t++)e.fillRect(162,168+t*24,t%2?10:18,2);let i=Math.sin(n*Math.PI)*.55;e.save(),e.translate(180,442),e.rotate(i),e.fillStyle=`#c8c8c8`,e.fillRect(-3,-324,6,324),e.fillStyle=`#d8a020`,e.beginPath(),e.moveTo(-22,-260),e.lineTo(22,-260),e.lineTo(30,-210),e.lineTo(-30,-210),e.closePath(),e.fill(),e.restore(),e.fillStyle=`#2a1206`,e.fillRect(80,512,200,18)}function gt(e,t,n){t===0?mt(e,n):ht(e,n);let r=Math.floor(n%1*30);e.font=`bold 13px monospace`,e.fillStyle=`#000`,e.fillRect(8,614,92,18),e.fillStyle=`#fff`,e.fillText(`T${t+1} 00:0${Math.floor(n)}:${String(r).padStart(2,`0`)}`,12,628)}var _t=e=>440*2**((e-69)/12);async function vt(e){let t=32e3,n=ft[e],r=new OfflineAudioContext(2,Math.ceil(n.dur*t),t),i=r.createGain();i.gain.value=.7;let a=r.createConvolver(),o=r.createBuffer(2,t*1.6,t);for(let e=0;e<2;e++){let t=o.getChannelData(e);for(let e=0;e<t.length;e++)t[e]=(Math.random()*2-1)*(1-e/t.length)**3*.4}a.buffer=o;let s=r.createGain();s.gain.value=.25,i.connect(r.destination),i.connect(a).connect(s).connect(r.destination);let c=60/n.bpm,l=(e,t,n=.5,a=.3,o=`triangle`)=>{let s=r.createOscillator();s.type=o,s.frequency.value=_t(t);let c=r.createOscillator();c.frequency.value=_t(t)*2.001;let l=r.createGain();l.gain.setValueAtTime(1e-4,e),l.gain.exponentialRampToValueAtTime(a,e+.005),l.gain.exponentialRampToValueAtTime(1e-4,e+n);let u=r.createGain();u.gain.value=.25,s.connect(l),c.connect(u).connect(l),l.connect(i),s.start(e),c.start(e),s.stop(e+n+.05),c.stop(e+n+.05)},u=(e,n,a,o,s=`highpass`)=>{let c=r.createBuffer(1,Math.ceil(n*t),t),l=c.getChannelData(0);for(let e=0;e<l.length;e++)l[e]=(Math.random()*2-1)*(1-e/l.length)**2;let u=r.createBufferSource();u.buffer=c;let d=r.createBiquadFilter();d.type=s,d.frequency.value=a;let f=r.createGain();f.gain.value=o,u.connect(d).connect(f).connect(i),u.start(e)},d=(e,t=.7)=>{let n=r.createOscillator();n.frequency.setValueAtTime(120,e),n.frequency.exponentialRampToValueAtTime(45,e+.12);let a=r.createGain();a.gain.setValueAtTime(t,e),a.gain.exponentialRampToValueAtTime(.001,e+.3),n.connect(a).connect(i),n.start(e),n.stop(e+.32)};if(e===0){let e=[69,72,74,76,79,76,74,72,69,67,69,72,74,72,69,64],t=[[57,60,64],[53,57,60],[55,59,62],[52,55,59]];for(let n=0;n<16;n++){let r=n*c;if(n%2==0&&d(r,.55),u(r+c/2,.05,7e3,.12),n%4==2&&u(r,.16,1800,.18,`bandpass`),l(r,e[n],c*.9,.18),n%4==0)for(let e of t[n/4|0])l(r,e,c*3.8,.06,`sine`);l(r,[45,41,43,40][n/4|0]+(n%2?12:0),c*.45,.22,`sine`)}}else{for(let e=0;e<12;e++){let t=e*c;if(u(t,.03,e%4==0?2400:3400,.4,`bandpass`),e%4==0)for(let n of[[60,64,67,71],[57,60,64,67],[53,57,60,64]][e/4|0])l(t,n,c*3.6,.07,`sine`)}[48,55,52,53,50,48].forEach((e,t)=>{let n=t*c*2,a=r.createOscillator();a.type=`sawtooth`,a.frequency.value=_t(e);let o=r.createOscillator();o.frequency.value=5.2;let s=r.createGain();s.gain.value=_t(e)*.006,o.connect(s).connect(a.frequency);let l=r.createBiquadFilter();l.type=`lowpass`,l.frequency.value=900;let u=r.createGain();u.gain.setValueAtTime(1e-4,n),u.gain.exponentialRampToValueAtTime(.13,n+.25),u.gain.setValueAtTime(.13,n+c*1.7),u.gain.exponentialRampToValueAtTime(1e-4,n+c*2.1),a.connect(l).connect(u).connect(i),a.start(n),o.start(n),a.stop(n+c*2.2),o.stop(n+c*2.2)})}return r.startRendering()}var j=Array(32).fill(null),yt=0,bt=()=>`${Date.now().toString(36)}${(yt++).toString(36)}`;function xt(e,t){return{id:bt(),name:t,kind:e,url:``,mime:``,duration:8,w:16,h:9,audio:null,audioGain:1,thumb:``,bpm:0,loopIn:0,loopOut:8,speed:1,inStyle:-2,gain:1,slices:[],sliceMode:`equal`}}function St(e,t=16){let n=e.loopIn,r=e.loopOut;e.slices=Array.from({length:t},(e,i)=>n+(r-n)*i/t)}function Ct(e){let t=ft[e],n=xt(`test`,t.name);n.test=e,n.duration=n.loopOut=t.dur,n.w=360,n.h=640,n.bpm=t.bpm,St(n);let r=document.createElement(`canvas`);return r.width=360,r.height=640,gt(r.getContext(`2d`),e,1.2),n.thumb=At(r,360,640),vt(e).then(e=>{n.audio=e,n.audioGain=Dt(e)}),n}function wt(e){let t=xt(`camera`,e===`environment`?`CAM`:`SELF`);return t.facing=e,t.duration=t.loopOut=1e6,t}function Tt(){let e=xt(`beam`,`BEAM`);return e.duration=e.loopOut=1e6,e}function Et(e,t){let n=xt(`matte`,t);return n.matte=e,n.duration=n.loopOut=1e6,n}function Dt(e){let t=0,n=0;for(let r=0;r<e.numberOfChannels;r++){let i=e.getChannelData(r);for(let e=0;e<i.length;e+=4)t+=i[e]*i[e],n++}let r=Math.sqrt(t/Math.max(1,n));return r<1e-4?1:Math.min(6,.1/r)}var Ot=null;async function kt(e){if(e.size>25e7)return null;try{return Ot??=new OfflineAudioContext(2,1,44100),await Ot.decodeAudioData(await e.arrayBuffer())}catch{return null}}function At(e,t,n){let r=document.createElement(`canvas`),i=120/Math.max(t,n);return r.width=Math.max(8,Math.round(t*i)),r.height=Math.max(8,Math.round(n*i)),r.getContext(`2d`).drawImage(e,0,0,r.width,r.height),r.toDataURL(`image/jpeg`,.7)}function jt(e,t,n=2500){return new Promise(r=>{if(Math.abs(e.currentTime-t)<.002&&e.readyState>=2)return r();let i=()=>{e.removeEventListener(`seeked`,i),clearTimeout(a),r()},a=setTimeout(i,n);e.addEventListener(`seeked`,i),e.currentTime=t})}function Mt(e){let t=document.createElement(`video`);return t.src=e,t.muted=!0,t.playsInline=!0,t.setAttribute(`playsinline`,``),t.preload=`auto`,t.crossOrigin=`anonymous`,t}async function Nt(e,t){let n=e.type.startsWith(`image/`),r=xt(n?`image`:`video`,t.replace(/\.[^.]+$/,``).slice(0,12).toUpperCase()||`CLIP`);if(r.blob=e,r.mime=e.type,r.url=URL.createObjectURL(e),n){let e=new Image;return e.src=r.url,await e.decode().catch(()=>{}),r.w=e.naturalWidth||16,r.h=e.naturalHeight||9,r.thumb=At(e,r.w,r.h),St(r),r}let i=Mt(r.url);await new Promise(e=>{i.addEventListener(`loadedmetadata`,()=>e(),{once:!0}),i.addEventListener(`error`,()=>e(),{once:!0}),setTimeout(e,6e3)}),r.w=i.videoWidth||16,r.h=i.videoHeight||9,isFinite(i.duration)||(i.currentTime=1e7,await new Promise(e=>{i.addEventListener(`durationchange`,e,{once:!0}),setTimeout(e,3e3)})),r.duration=isFinite(i.duration)&&i.duration>0?i.duration:8,r.loopOut=r.duration,await jt(i,Math.min(.2,r.duration/2)),i.readyState>=2&&(r.thumb=At(i,r.w,r.h)),i.removeAttribute(`src`),i.load(),St(r);let a=await kt(e);return a&&(r.audio=a,r.audioGain=Dt(a)),r}function Pt(e){let t=e.audio;if(!t)return St(e);let n=t.getChannelData(0),r=t.sampleRate,i=Math.round(r*.01),a=Math.floor(e.loopIn*r),o=Math.min(n.length,Math.floor(e.loopOut*r)),s=[];for(let e=a;e<o;e+=i){let t=0;for(let r=0;r<i&&e+r<o;r++)t+=Math.abs(n[e+r]);s.push(t/i)}let c=s.map((e,t)=>Math.max(0,e-(s[t-1]??e))),l=[];for(let e=2;e<c.length-2;e++)c[e]>c[e-1]&&c[e]>=c[e+1]&&l.push({i:e,v:c[e]});l.sort((e,t)=>t.v-e.v);let u=[];for(let e of l){if(u.length>=15)break;u.every(t=>Math.abs(t-e.i)>12)&&u.push(e.i)}for(u.sort((e,t)=>e-t),e.slices=[e.loopIn,...u.map(t=>e.loopIn+t*i/r)];e.slices.length<16;)e.slices.push(e.slices[e.slices.length-1]);e.sliceMode=`onset`}async function Ft(e,t){if(e.kind!==`video`)return St(e);let n=Mt(e.url);await new Promise(e=>n.addEventListener(`loadeddata`,e,{once:!0}));let r=document.createElement(`canvas`);r.width=32,r.height=24;let i=r.getContext(`2d`,{willReadFrequently:!0}),a=1/3,o=Math.min(120,Math.floor((e.loopOut-e.loopIn)/a)),s=null,c=[];for(let r=0;r<o;r++){let l=e.loopIn+r*a;await jt(n,l),i.drawImage(n,0,0,32,24);let u=i.getImageData(0,0,32,24).data;if(s){let e=0;for(let t=0;t<u.length;t+=4)e+=Math.abs(u[t]-s[t])+Math.abs(u[t+1]-s[t+1]);c.push({t:l,d:e})}s=u,t?.(r/o)}n.removeAttribute(`src`),n.load(),c.sort((e,t)=>t.d-e.d);let l=[];for(let e of c){if(l.length>=15)break;l.every(t=>Math.abs(t-e.t)>.3)&&l.push(e.t)}for(l.sort((e,t)=>e-t),e.slices=[e.loopIn,...l];e.slices.length<16;)e.slices.push(e.slices[e.slices.length-1]);e.sliceMode=`cut`}function It(e,t){e.slices.length||St(e);let n=e.slices[t]??e.loopIn,r=e.loopOut;for(let i=t+1;i<e.slices.length;i++)if(e.slices[i]>n+.01){r=e.slices[i];break}return[n,r]}function Lt(){j[0]=Ct(0),j[1]=Ct(1),j[2]=wt(`environment`),j[3]=wt(`user`),j[4]=Tt(),j[5]=Et(1,`BARS`),j[6]=Et(9,`ZIGZAG`),j[7]=Et(10,`SUNBURST`),j[8]=Et(13,`ORNAMENT`),j[9]=Et(12,`BAR BEND`),j[10]=Et(0,`RASTER`),j[11]=Et(7,`WEB`)}function Rt(e){return e?e.kind===`camera`?e.facing===`user`?`SELF`:`CAM`:e.name:``}function zt(e){return{video:`CLIP`,image:`STILL`,test:`TEST`,camera:`LIVE`,beam:`X-Y`,matte:`MATTE`}[e.kind]}function Bt(e){let t=(i[s.sound.scale]??i[0]).steps,n=t.length,r=3-Math.floor(e/4),a=e%4,o=r*4+a-4,c=Math.floor(o/n),l=(s.sound.root+5)%12-5,u=t[(o%n+n)%n]+c*12+l;for(;u>12;)u-=12;for(;u<-12;)u+=12;return u}function Vt(e){return s.sound.pitch?2**(Bt(e)/12):1}var Ht=class{s;camera;el=null;speed=1;loopIn;loopOut;frozen=!1;frozenAt=0;t0=0;p0=0;parked=!0;stamp=0;ctx=null;seeking=!1;lastDrawn=-1;constructor(e,t=null){this.s=e,this.camera=t,this.loopIn=e.loopIn,this.loopOut=e.loopOut,this.speed=e.speed}get len(){return Math.max(.05,this.loopOut-this.loopIn)}pos(e){if(this.frozen)return this.frozenAt;let t=this.p0+(e-this.t0)*this.speed-this.loopIn;return this.loopIn+(t%this.len+this.len)%this.len}restart(e,t=this.loopIn){this.t0=e,this.p0=t,this.frozen=!1}setSpeed(e,t){let n=this.pos(t);this.speed=e,this.t0=t,this.p0=n}setLoop(e,t,n){let r=this.pos(n);this.loopIn=Math.max(0,Math.min(e,this.s.duration-.05)),this.loopOut=Math.max(this.loopIn+.05,Math.min(t,this.s.duration)),this.t0=n,this.p0=Math.min(Math.max(r,this.loopIn),this.loopOut-.01)}nudge(e,t){let n=this.pos(t);this.t0=t,this.p0=n+e,this.frozen&&(this.frozenAt=this.pos(t))}freeze(e,t){e!==this.frozen&&(e?(this.frozenAt=this.pos(t),this.frozen=!0):(this.frozen=!1,this.t0=t,this.p0=this.frozenAt))}sameAs(e,t){return e.s===this.s&&Math.abs(e.pos(t)-this.pos(t))<.04&&e.speed===this.speed&&e.frozen===this.frozen}copyTiming(e){this.t0=e.t0,this.p0=e.p0,this.speed=e.speed,this.loopIn=e.loopIn,this.loopOut=e.loopOut,this.frozen=e.frozen,this.frozenAt=e.frozenAt}size(){let e=this.s;return e.kind===`camera`&&this.camera?[this.camera.video.videoWidth||16,this.camera.video.videoHeight||9]:e.kind===`test`?[360,640]:[e.w||16,e.h||9]}get live(){return this.s.kind===`camera`||this.s.kind===`beam`||this.s.kind===`matte`}ensure(){let e=this.s;if(!this.el){if(e.kind===`video`){let t=Mt(e.url);t.loop=!0,t.addEventListener(`seeked`,()=>{this.seeking=!1,this.stamp++}),this.el=t}else if(e.kind===`image`){let t=new Image;t.src=e.url,this.el=t}else if(e.kind===`test`){let e=document.createElement(`canvas`);e.width=360,e.height=640,this.ctx=e.getContext(`2d`),this.el=e}}}element(){let e=this.s;if(e.kind===`camera`){let t=this.camera;return t&&t.facing===e.facing&&t.ready?t.video:null}this.ensure();let t=this.el;return t?t instanceof HTMLVideoElement?t.readyState>=2?t:null:t instanceof HTMLImageElement?t.complete&&t.naturalWidth?t:null:t:null}tick(e){let t=this.s;this.parked=!1,this.ensure();let n=this.pos(e);if(t.kind===`test`&&this.ctx){let e=Math.round(n*30)/30;e!==this.lastDrawn&&(gt(this.ctx,t.test??0,e),this.lastDrawn=e,this.stamp++);return}if(t.kind===`camera`){this.stamp++;return}let r=this.el;if(!(r instanceof HTMLVideoElement))return;if(this.frozen){r.paused||r.pause(),!this.seeking&&Math.abs(r.currentTime-n)>.03&&(this.seeking=!0,r.currentTime=n);return}if(r.paused&&r.play().catch(()=>{}),this.seeking)return;let i=r.currentTime-n;Math.abs(i)>this.len/2&&(i-=Math.sign(i)*this.len),Math.abs(i)>.25||r.currentTime>this.loopOut+.05||r.currentTime<this.loopIn-.3?(this.seeking=!0,r.currentTime=n,r.playbackRate=Math.min(4,Math.max(.25,this.speed))):r.playbackRate=Math.min(4,Math.max(.25,this.speed*(1-Math.max(-.08,Math.min(.08,i))))),this.stamp++}park(){this.parked||(this.parked=!0,this.el instanceof HTMLVideoElement&&!this.el.paused&&this.el.pause())}dispose(){this.park(),this.el instanceof HTMLVideoElement&&(this.el.removeAttribute(`src`),this.el.load()),this.el=null}},Ut=[`#ff4070`,`#40e0ff`,`#ffe040`,`#90ff50`],Wt=[[`NONE`,`없음`],[`TORN`,`찢긴 선`],[`NEON`,`네온 번짐`],[`RAINBOW`,`무지개 흐름`],[`DOTS`,`행진 점선`],[`ELECTRIC`,`전기`],[`ECHO`,`메아리 고리`],[`CHROME`,`크롬`],[`RIBBON`,`흰 리본`],[`PAIK-ABE`,`가는 다중선`]],Gt=[`CIRCLE`,`RING`,`RECT`,`DIAMOND`],Kt={tap:`TAP`,person:`PERSON`,luma:`LUMA`,chroma:`CHROMA`,shape:`SHAPE`},M=[],qt=0;function Jt(e,t,n,r){let i=j[t];if(!i||M.length>=4)return null;let a=new Ht(i,n);r&&a.copyTiming(r);let o=qt++,s=Ut.find(e=>!M.some(t=>t.color===e))??Ut[o%4],c={id:o,name:`${Kt[e]} ${M.length+1}`,color:s,kind:e,pad:t,player:a,x:0,y:0,scale:1,rot:0,tilt:0,line:e===`shape`?0:1,lineSize:1,linePal:0,fillIn:-2,fillColor:`#ffffff`,fillOut:-2,fx:!0,visible:!0,solo:!1,sound:0,offset:0,seed:{x:.5,y:.5,t:0},track:null,live:null,liveBusy:!1,liveAt:0,key:{lo:.55,hi:.7,color:`#00d040`,invert:!1},shape:{type:0,size:.32,ring:.25,spin:0},thumb:``,maskStamp:0};return M.push(c),c}function Yt(e,t,n){let r=t-e.offset;e.offset=t,e.player.nudge(r,n)}function Xt(e){let t=M.indexOf(e);t<0||(e.track&&(e.track.cancel=!0),e.player.dispose(),M.splice(t,1))}function Zt(e,t){if(e.live&&(e.kind===`tap`||e.kind===`person`)&&(!e.track||e.player.live)){let t=e.live;return{a:t.data,b:t.data,f:0,w:t.w,h:t.h,ia:-1,ib:-1,cx:t.cx,cy:t.cy}}let n=e.track;if(!n||!n.done)return null;let r=n.frames.length,i=(t-n.start)*n.fps,a=e=>{if(e=Math.max(0,Math.min(r-1,e)),n.frames[e])return e;for(let t=1;t<r;t++){if(e-t>=0&&n.frames[e-t])return e-t;if(e+t<r&&n.frames[e+t])return e+t}return-1},o=a(Math.floor(i));if(o<0)return null;let s=a(Math.floor(i)+1);s<0&&(s=o);let c=s===o?0:Math.max(0,Math.min(1,i-Math.floor(i)));return{a:n.frames[o],b:n.frames[s],f:c,w:n.w,h:n.h,ia:o,ib:s,cx:n.cx[o]+(n.cx[s]-n.cx[o])*c,cy:n.cy[o]+(n.cy[s]-n.cy[o])*c}}function Qt(e){let t=e.track;return t?t.frames.length?t.done/t.frames.length:1:e.kind===`tap`||e.kind===`person`?+!!e.live:1}var N=()=>performance.now()/1e3,P={origin:0,get beat(){return 60/Math.max(30,s.seq.bpm)},get step(){return this.beat/4},stepAt(e){return(e-this.origin)/this.step},timeOf(e){return this.origin+e*this.step},next(e,t=1){let n=Math.ceil(this.stepAt(e)/t-1e-4)*t;return this.timeOf(n)},beatAt(e){return this.stepAt(e)/4}},$t=[];function en(e=N()){if($t.length&&e-$t[$t.length-1]>2&&($t.length=0),$t.push(e),$t.length>5&&$t.shift(),$t.length<2)return null;let t=($t[$t.length-1]-$t[0])/($t.length-1),n=Math.round(Math.min(200,Math.max(40,60/t)));return s.seq.bpm=n,P.origin=e,n}var tn={"4:3":[4,3],"9:16":[9,16],"1:1":[1,1],"16:9":[16,9]},nn=[[`#c070ff`,`#f4f0ff`,`#2a2aa0`,`#ffffff`],[`#40ff40`,`#40ff40`,`#40ff40`,`#40ff40`],[`#ff3030`,`#ffe030`,`#30e0ff`,`#ff40ff`],[`#ffffff`,`#000000`,`#ffffff`,`#000000`]],rn=[`#1840c0`,`#18a040`,`#c01818`,`#c018a0`,`#e07010`,`#101010`],an=A+`
uniform sampler2D uA;
uniform sampler2D uB;
uniform float uAmt;
void main(){ outColor = vec4(mix(texture(uA, vUv).rgb, texture(uB, vUv).rgb, uAmt), 1.); }
`,on=A+`
uniform sampler2D uBase;
uniform sampler2D uFx;
uniform sampler2D uAcc;
uniform float uFxBg;
void main(){
  vec2 a = texture(uAcc, vUv).rg;
  float sel = uFxBg > .5 ? 1. - a.y : a.x;
  outColor = vec4(mix(texture(uBase, vUv).rgb, texture(uFx, vUv).rgb, clamp(sel, 0., 1.)), 1.);
}
`,sn=A+`void main(){ outColor = vec4(0., 0., 0., 1.); }`,cn=256,ln=192,un=192,dn=144,fn=class{scene;canvas;gl;kit;W=720;H=1280;cg=new $e;ornament=new it;frame=0;fps=0;fpsAcc=0;fpsN=0;lastT=0;p={};texs=new WeakMap;masks=new Map;cgTex;standbyTex;labelTex;stageTex;ornTex;ornStamp=-1;stageTv=[0,0,1,1];t={};flip={};maskW=0;maskH=0;head=0;filled=0;lastCapture=0;beamVao;beamBuf;beamData=new Float32Array(dt);grabbers=[];brush={x:0,y:0,vx:0,vy:0,active:!1,tool:0,startHold:!1};fieldLive=0;centres=new Map;selected=-1;constructor(e){this.scene=e,this.canvas=document.createElement(`canvas`),this.canvas.className=`program-canvas`;let t=this.canvas.getContext(`webgl2`,{antialias:!1,alpha:!1,preserveDrawingBuffer:!1,powerPreference:`high-performance`});if(!t)throw Error(`WebGL2 not supported`);this.gl=t,this.kit=new de(t);let n=(e,t,n)=>this.p[t]=this.kit.program(e,t,n);n(pe,`source`),n(me,`copy`),n(he,`decay`),n(_e,`beam`,ge),n(ve,`trans`),n(xe,`seed`),n(Se,`jfa`),n(Ce,`dist`),n(Oe,`color`),n(De,`scan`),n(ke,`fb`),n(je,`delay`),n(Me,`wall`),n(Ne,`cg`),n(Te,`era`),n(Ee,`pip`),n(we,`analog`),n(Fe,`objmask`),n(Le,`objcomp`),n(Ie,`macc`),n(ze,`paikabe`),n(Be,`ribbon`),n(Ve,`rutt`),n(He,`breakup`),n(Ue,`reshoot`),n(We,`poster2`),n(Ge,`lineart`),n(Ke,`smear`),n(qe,`tools`),n(Je,`field`),n(an,`mix`),n(on,`select`),n(sn,`black`),this.cgTex=this.kit.texture(),this.standbyTex=this.kit.texture(),this.labelTex=this.kit.texture(),this.stageTex=this.kit.texture(),this.ornTex=this.kit.texture(),this.t.atlas=this.kit.target(cn*8,1536),this.t.raw=this.kit.target(1536,1152),this.beamVao=t.createVertexArray(),this.beamBuf=t.createBuffer(),t.bindVertexArray(this.beamVao),t.bindBuffer(t.ARRAY_BUFFER,this.beamBuf),t.bufferData(t.ARRAY_BUFFER,this.beamData.byteLength,t.DYNAMIC_DRAW);let r=this.p.beam.prog,i=t.getAttribLocation(r,`aPos`),a=t.getAttribLocation(r,`aAcross`),o=t.getAttribLocation(r,`aI`);t.enableVertexAttribArray(i),t.vertexAttribPointer(i,2,t.FLOAT,!1,16,0),t.enableVertexAttribArray(a),t.vertexAttribPointer(a,1,t.FLOAT,!1,16,8),t.enableVertexAttribArray(o),t.vertexAttribPointer(o,1,t.FLOAT,!1,16,12),t.bindVertexArray(null),this.setOutput(s.output.aspect,s.output.quality)}setOutput(e,t){let[n,r]=tn[e],i=t===`hd`?1280:960,a,o;n>=r?(a=i,o=Math.round(i*r/n/2)*2):(o=i,a=Math.round(i*n/r/2)*2),e===`4:3`&&(a=t===`hd`?960:720,o=a*3/4),e===`1:1`&&(a=o=t===`hd`?960:720),this.W=a,this.H=o,this.canvas.width=a,this.canvas.height=o;let s=this.t.atlas,c=this.t.raw;for(let e in this.t)e!==`atlas`&&e!==`raw`&&this.kit.freeTarget(this.t[e]);this.t={atlas:s,raw:c};let l=(e,t=a,n=o,r)=>this.t[e]=this.kit.target(t,n,r);for(let e of`a.b.mix.g.c0.c1.base.era.pip.pipbg.alt.col.sc.tl.h0.h1.dl.sel.rs.wall.p0.p1.syn0.syn1.pa0.pa1.sm0.sm1.m0.m1.hold.fill.obj`.split(`.`))l(e);this.maskW=Math.round(a/3),this.maskH=Math.round(o/3);for(let e of[`om`,`odist`,`acc0`,`acc1`])l(e,this.maskW,this.maskH);l(`j0`,this.maskW,this.maskH,this.gl.NEAREST),l(`j1`,this.maskW,this.maskH,this.gl.NEAREST),l(`f0`,Math.round(a/4),Math.round(o/4)),l(`f1`,Math.round(a/4),Math.round(o/4)),this.clearField(),this.cg.resize(a,o),this.upload(this.standbyTex,this.cg.standby,!0),this.upload(this.labelTex,this.cg.label,!0);let u=at(a,o);this.upload(this.stageTex,u.canvas),this.stageTv=u.tv,this.ornStamp=-1}clearField(){let e=this.gl;for(let t of[`f0`,`f1`])e.bindFramebuffer(e.FRAMEBUFFER,this.t[t].fb),e.clearColor(.5,.5,0,0),e.clear(e.COLOR_BUFFER_BIT);e.clearColor(0,0,0,1),e.bindFramebuffer(e.FRAMEBUFFER,null),this.fieldLive=0}pp(e,t){let n=e+t;return(this.flip[n]=(this.flip[n]??0)^1)?[this.t[e],this.t[t]]:[this.t[t],this.t[e]]}upload(e,t,n=!1){let r=this.gl;r.bindTexture(r.TEXTURE_2D,e),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!0),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n);try{r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t)}catch{}r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1)}uploadR8(e,t,n,r){let i=this.gl;i.bindTexture(i.TEXTURE_2D,e),i.pixelStorei(i.UNPACK_ALIGNMENT,1),i.texImage2D(i.TEXTURE_2D,0,i.R8,n,r,0,i.RED,i.UNSIGNED_BYTE,t),i.pixelStorei(i.UNPACK_ALIGNMENT,4)}refreshStatic(){this.cg.drawStatic(),this.upload(this.standbyTex,this.cg.standby,!0),this.upload(this.labelTex,this.cg.label,!0)}texOf(e){let t=this.texs.get(e);if(t||(t={tex:this.kit.texture(),stamp:-1,ok:!1},this.texs.set(e,t)),t.stamp!==e.stamp){let n=e.element();n&&(this.upload(t.tex,n),t.ok=!0,t.stamp=e.stamp)}return t.ok?t.tex:null}fitOf(e){let[t,n]=e.size();return se(t,n,this.W/this.H)}mirrorOf(e){return+(e.s.kind===`camera`&&e.s.facing===`user`)}syn=0;synthTex(){return(this.syn?this.t.syn1:this.t.syn0).tex}renderSynth(e,t){let n=this.gl,r=this.syn?this.t.syn1:this.t.syn0,i=this.syn?this.t.syn0:this.t.syn1;this.syn^=1,this.kit.draw(this.p.decay,i,{uSrc:r.tex,uDecay:s.synth.persist});let a=ut(lt(e,t),this.W/this.H,s.synth.width*(this.H/480),this.H,this.beamData);n.bindFramebuffer(n.FRAMEBUFFER,i.fb),n.viewport(0,0,i.w,i.h),n.useProgram(this.p.beam.prog);let o=fe(s.synth.color);n.uniform3f(this.p.beam.loc(`uColor`),o[0]*.5,o[1]*.5,o[2]*.5),n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE),n.bindVertexArray(this.beamVao),n.bindBuffer(n.ARRAY_BUFFER,this.beamBuf),n.bufferSubData(n.ARRAY_BUFFER,0,this.beamData,0,a*4),n.drawArrays(n.TRIANGLES,0,a),n.bindVertexArray(null),n.disable(n.BLEND)}matteU(e,t){return{uTime:t,uFlipY:0,uLabel:this.labelTex,uColor:fe(s.matte.color),uKind:k(2),uPattern:k(e),uTex:this.labelTex}}drawPlayer(e,t,n,r){let i={uTime:n,uFlipY:0,uLabel:this.labelTex,uColor:fe(e?.s.color??s.matte.color)};if(!e)return this.kit.draw(this.p.source,t,{...i,uKind:k(0),uTex:this.labelTex});let a=e.s;if(a.kind===`beam`)return this.kit.draw(this.p.source,t,{...i,uKind:k(1),uTex:this.synthTex(),uFit:[1,1,0,0],uMirror:0});if(a.kind===`matte`)return a.matte===13?(this.ornament.update(r,this.W,this.H),this.ornament.stamp!==this.ornStamp&&(this.upload(this.ornTex,this.ornament.canvas),this.ornStamp=this.ornament.stamp),this.kit.draw(this.p.source,t,{...i,uKind:k(1),uTex:this.ornTex,uFit:[1,1,0,0],uMirror:0})):this.kit.draw(this.p.source,t,{...this.matteU(a.matte??0,n),uColor:i.uColor});let o=this.texOf(e);if(!o)return this.kit.draw(this.p.source,t,{...i,uKind:k(0),uTex:this.labelTex});this.kit.draw(this.p.source,t,{...i,uKind:k(1),uTex:o,uFit:this.fitOf(e),uMirror:this.mirrorOf(e)})}distance(e,t,n){this.kit.draw(this.p.seed,this.t.j0,{uMask:e.tex});let r=this.t.j0,i=this.t.j1,a=1;for(;a<Math.max(this.maskW,this.maskH);)a*=2;for(a/=2;a>=1;a/=2)this.kit.draw(this.p.jfa,i,{uSrc:r.tex,uStep:a}),[r,i]=[i,r];this.kit.draw(this.p.dist,t,{uSrc:r.tex,uMaxD:n})}playersInUse(e){let t=new Set,n=e=>e&&e!==`black`&&t.add(e);e.outside?n(e.outside):n(this.scene.bg&&s.scene.bgOverride<0?e.cur:null),n(e.prev),e.ghosts.forEach(e=>n(e.p)),s.pip.on&&n(this.altPlayer());for(let e of this.visibleObjects())n(e.player),e.fillIn>=0&&n(this.scene.fillPlayer(e.fillIn));return t}altPlayer(){let e=this.scene.history.find(e=>e!==this.scene.bgPad);return e===void 0?null:this.scene.fillPlayer(e)}visibleObjects(){let e=M.some(e=>e.visible&&e.solo);return M.filter(t=>t.visible&&(!e||t.solo))}maskTex(e,t){let n=Zt(e,t);if(!n)return null;let r=this.masks.get(e.id);r||(r={a:this.kit.texture(),b:this.kit.texture(),ka:null,kb:null},this.masks.set(e.id,r));let i=n.ia<0?`${e.maskStamp}`:n.a;r.ka!==i&&(this.uploadR8(r.a,n.a,n.w,n.h),r.ka=i);let a=n.ib<0?`${e.maskStamp}`:n.b;return r.kb!==a&&(this.uploadR8(r.b,n.b,n.w,n.h),r.kb=a),{a:r.a,b:r.b,f:n.f,cx:n.cx,cy:n.cy}}sourceToScreen(e,t,n){let r=this.fitOf(e.player),i=t;this.mirrorOf(e.player)&&(i=1-i);let a=(i-.5)/r[0]+.5,o=(1-n-.5)/r[1]+.5,s=this.W/this.H,c=(a-.5)*2*s*e.scale,l=(o-.5)*2*e.scale,u=e.rot*Math.PI/180;return[c,l]=[c*Math.cos(u)-l*Math.sin(u),c*Math.sin(u)+l*Math.cos(u)],c+=e.x*s,l+=e.y,[c/(2*s)+.5,l/2+.5]}screenToSource(e,t,n,r){let i=t,a=1-n;if(r){let e=this.W/this.H,t=(i-.5)*2*e-r.x*e,n=(a-.5)*2-r.y,o=-r.rot*Math.PI/180;[t,n]=[t*Math.cos(o)-n*Math.sin(o),t*Math.sin(o)+n*Math.cos(o)],i=t/(2*e*r.scale)+.5,a=n/(2*r.scale)+.5}let o=this.fitOf(e),s=(i-.5)*o[0]+.5,c=(a-.5)*o[1]+.5;return this.mirrorOf(e)&&(s=1-s),[s,1-c]}objectAt(e,t){let n=this.visibleObjects();for(let r=n.length-1;r>=0;r--){let i=n[r],[a,o]=this.screenToSource(i.player,e,t,i);if(a<0||a>1||o<0||o>1)continue;if(i.kind===`shape`||i.kind===`luma`||i.kind===`chroma`){let n=this.centres.get(i.id);if(n&&Math.hypot((e-n[0])*(this.W/this.H),1-t-n[1])<.25*i.scale)return i;continue}let s=Zt(i,i.player.pos(N()));if(!s)continue;let c=Math.min(s.w-1,Math.max(0,Math.floor(a*s.w))),l=Math.min(s.h-1,Math.max(0,Math.floor(o*s.h)));if(s.a[l*s.w+c]>100)return i}return null}render(e,t){let n=this.kit,r=N(),i=this.lastT?r-this.lastT:.016;this.lastT=r,this.fpsAcc+=i,this.fpsN++,this.fpsAcc>.5&&(this.fps=this.fpsN/this.fpsAcc,this.fpsAcc=0,this.fpsN=0),this.frame++;let a=s.scene,o=t.beat;this.usesBeam(e)&&this.renderSynth(r,t.pulse);let c;e.outside===`black`?(n.draw(this.p.black,this.t.a,{}),c=this.t.a):e.outside?(this.drawPlayer(e.outside,this.t.a,r,o),c=this.t.a):a.bgOverride>=0?(a.bgOverride===13?(this.ornament.update(o,this.W,this.H),this.ornament.stamp!==this.ornStamp&&(this.upload(this.ornTex,this.ornament.canvas),this.ornStamp=this.ornament.stamp),n.draw(this.p.source,this.t.a,{uTime:r,uFlipY:0,uLabel:this.labelTex,uColor:[0,0,0],uKind:k(1),uTex:this.ornTex,uFit:[1,1,0,0],uMirror:0})):n.draw(this.p.source,this.t.a,this.matteU(a.bgOverride,r)),c=this.t.a):(this.drawPlayer(e.cur,this.t.a,r,o),c=this.t.a,e.prev&&e.progress>=0&&(this.drawPlayer(e.prev,this.t.b,r,o),n.draw(this.p.trans,this.t.mix,{uA:this.t.b.tex,uB:this.t.a.tex,uT:e.progress,uId:k(e.transId),uShadow:+!!s.trans.shadow,uGlint:+!!s.trans.glint,uBorder:fe(s.trans.border),uTime:r}),c=this.t.mix));for(let t of e.ghosts){this.drawPlayer(t.p,this.t.g,r,o);let[,e]=this.pp(`m0`,`m1`);n.draw(this.p.mix,e,{uA:c.tex,uB:this.t.g.tex,uAmt:t.a}),c=e}let l=this.visibleObjects();this.centres.clear();let u=null;l.forEach((e,i)=>{let a=e.player,s=this.texOf(a);if(!s&&e.kind!==`shape`)return;let l=a.pos(r),d=this.fitOf(a),f={uPos:[e.x*(this.W/this.H),e.y],uScale:e.scale,uRotA:e.rot*Math.PI/180,uTiltA:e.tilt*Math.PI/180,uFit:d,uMirror:this.mirrorOf(a),uTime:r},p=0,m=null;if(e.kind===`tap`||e.kind===`person`){if(m=this.maskTex(e,l),!m)return}else p=e.kind===`luma`?1:e.kind===`chroma`?2:3;n.draw(this.p.objmask,this.t.om,{...f,uMaskA:m?.a??this.labelTex,uMaskB:m?.b??this.labelTex,uMaskF:m?.f??0,uObj:s??this.labelTex,uKind:k(p),uLuma:[e.key.lo,e.key.hi],uInvert:+!!e.key.invert,uKeyColor:fe(e.key.color),uShape:k(e.shape.type),uSize:e.shape.size,uRing:e.shape.ring,uSpin:e.shape.spin});let h=m?this.sourceToScreen(e,m.cx,m.cy):this.sourceToScreen(e,.5,.5);this.centres.set(e.id,h);let g=this.selected===e.id,_=e.line>0||g,v=this.W/this.maskW,y=140/v+8;_&&this.distance(this.t.om,this.t.odist,y);let b=0,x=this.labelTex;if(e.fillIn===-3)b=2;else if(e.fillIn===-1)b=3;else if(e.fillIn>=0){let t=this.scene.fillPlayer(e.fillIn);t&&(this.drawPlayer(t,this.t.fill,r,o),x=this.t.fill.tex,b=1)}else e.fillIn===-2&&(b=0);let S=[];for(let t of nn[e.linePal%nn.length])S.push(...fe(t));n.setArray(this.p.objcomp,`uPal`,3,S);let[,C]=this.pp(`c0`,`c1`);n.draw(this.p.objcomp,C,{...f,uCur:c.tex,uObj:s??this.labelTex,uMask:this.t.om.tex,uDist:this.t.odist.tex,uHasDist:+!!_,uMaxD:y*v,uLine:k(e.line),uLineSize:e.lineSize,uColor:fe(e.color),uCenter:h,uFillMode:k(b),uFill:x,uFillFit:[1,1,0,0],uFillColor:fe(e.fillColor),uSel:+!!g,uPulse:t.pulse}),c=C;let[w,T]=this.pp(`acc0`,`acc1`);n.draw(this.p.macc,T,{uPrev:w.tex,uMask:this.t.om.tex,uFx:+!!e.fx,uFirst:+(i===0||!u)}),u=T});let d=c,f=this.copyTo(d,this.t.base),p=r-this.lastCapture>=1/15-.004;if(p){this.lastCapture=r,this.head=(this.head+1)%64,this.filled=Math.min(64,this.filled+1);let e=this.head;n.draw(this.p.copy,this.t.raw,{uSrc:c.tex},void 0,[e%8*un,Math.floor(e/8)*dn,un,dn])}let m=s.era;m.on.some(Boolean)&&(n.setArray(this.p.era,`uOn`,1,m.on.map(e=>+!!e)),n.setArray(this.p.era,`uAmt`,1,m.amt),n.draw(this.p.era,this.t.era,{uCur:c.tex,uAtlas:this.t.raw.tex,uHead:this.head,uFilled:this.filled,uTime:r}),c=this.t.era);let h=s.moor,g=(e,t)=>{let[,i]=this.pp(`c0`,`c1`);n.draw(this.p[e],i,{uSrc:c.tex,uTime:r,...t}),c=i};if(h.paikabe.on){let[e,t]=this.pp(`pa0`,`pa1`);n.draw(this.p.paikabe,t,{uSrc:c.tex,uHist:e.tex,uLines:h.paikabe.lines,uField:h.paikabe.field,uSmear:h.paikabe.smear,uTime:r}),c=t}if(h.ribbon.on&&g(`ribbon`,{uLevel:h.ribbon.level,uWidth:h.ribbon.width,uFringe:h.ribbon.fringe}),h.rutt.on&&g(`rutt`,{uLines:h.rutt.lines,uHeight:h.rutt.height,uColorMode:k(h.rutt.color)}),h.poster2.on&&g(`poster2`,{uPair:k(h.poster2.pair)}),h.lineart.on&&g(`lineart`,{uBg:fe(rn[(o+h.lineart.bgIndex)%rn.length]),uCircles:h.lineart.circles}),h.breakup.on&&g(`breakup`,{uBlock:h.breakup.block,uAmount:h.breakup.amount}),h.smear.on){let[e,t]=this.pp(`sm0`,`sm1`);n.draw(this.p.smear,t,{uSrc:c.tex,uHist:e.tex,uAngle:h.smear.angle,uAmount:h.smear.amount,uTime:r}),c=t}let _=s.pip;if(_.on){let e=this.altPlayer();this.drawPlayer(e,this.t.alt,r,o);let t=1;_.bg===0?t=0:n.draw(this.p.source,this.t.pipbg,this.matteU(_.bg===1?7:_.bg===2?8:s.matte.pattern,r)),n.draw(this.p.pip,this.t.pip,{uCur:c.tex,uAlt:this.t.alt.tex,uBgTex:this.t.pipbg.tex,uLayout:k(_.layout),uN:k(Math.max(1,Math.min(3,Math.round(_.n)))),uBgMode:k(t),uTilt:_.tilt,uSpin:_.spin,uScale:_.scale,uBorder:fe(_.border),uBw:_.bw,uShadowOn:+!!_.shadow,uTime:r}),c=this.t.pip}let v=s.color;if(v.on){let e=[];for(let t=0;t<7;t++)e.push(...pn(v.hues[t]+r*v.cycle,v.sat,1));n.setArray(this.p.color,`uPal`,3,e),n.draw(this.p.color,this.t.col,{uSrc:c.tex,uIn0:c.tex,uIn1:c.tex,uIn2:c.tex,uIn3:c.tex,uMixOn:[0,0,0,0],uBands:k(Math.max(2,Math.min(7,Math.round(v.bands)))),uGain:v.gain,uContrast:v.contrast,uSmooth:+!!v.smooth,uNeg:+!!v.neg,uMix:0}),c=this.t.col}let y=s.scan,b=s.magnet,x=b.list.slice(0,2);if(y.on||x.length){let e=this.W/this.H,i=1+t.pulse*b.audio*2.5,a=[],o=[0,0,0,0];for(x.forEach((t,n)=>{let s=t.x,c=t.y;b.drift&&(s+=Math.sin(r*.31+n*2)*.12,c+=Math.cos(r*.23+n)*.12),a.push(s*e,c,t.s*i,t.r),o[n]=t.type});a.length<16;)a.push(0,0,0,1);let s=[];for(let e of y.osc)s.push(e.freq,e.rate,y.on?e.amp:0,e.wave);n.setArray(this.p.scan,`uMag`,4,a),n.setArray(this.p.scan,`uOsc`,4,s);let l=y.on?y:{hSize:1,vSize:1,hPos:0,vPos:0,rot:0,lines:0};n.draw(this.p.scan,this.t.sc,{uSrc:c.tex,uGeo:[l.hSize,l.vSize,l.hPos,l.vPos],uRot:l.rot*Math.PI/180,uLines:y.on?y.lines:x.length?262:0,uOscTarget:y.osc.map(e=>e.target),uAudio:t.pulse,uMagType:o,uMagN:k(x.length),uPurity:x.length?b.purity:0,uTime:r}),c=this.t.sc}let S=this.brush;if(S.active||this.fieldLive>0){S.active&&S.startHold&&(n.draw(this.p.copy,this.t.hold,{uSrc:c.tex}),S.startHold=!1);let e=.008+(1-s.tools.smear)*.05,[t,i]=this.pp(`f0`,`f1`);n.draw(this.p.field,i,{uPrev:t.tex,uBrush:[S.x,S.y,s.tools.size*(S.tool===2?.6:1),+!!S.active],uVel:[S.vx,S.vy],uTool:k(S.tool),uRelax:e}),S.vx*=.5,S.vy*=.5,this.fieldLive=S.active?400:this.fieldLive-1,n.draw(this.p.tools,this.t.tl,{uSrc:c.tex,uField:i.tex,uHold:this.t.hold.tex,uTime:r}),c=this.t.tl}let C=s.fb;if(C.on){let[e,i]=this.pp(`h0`,`h1`);n.draw(this.p.fb,i,{uCur:c.tex,uHist:e.tex,uMode:k(C.mode),uSize:C.size,uRotA:C.rot,uHue:C.hue,uDecay:C.decay,uAmt:C.mix,uPulse:t.pulse,uTime:r}),c=i}if(p){let e=this.head;n.draw(this.p.copy,this.t.atlas,{uSrc:c.tex},void 0,[e%8*cn,Math.floor(e/8)*ln,cn,ln])}s.delay.mode>0&&(n.draw(this.p.delay,this.t.dl,{uAtlas:this.t.atlas.tex,uHead:this.head,uFilled:this.filled,uCur:c.tex,uMode:k(s.delay.mode),uBack:s.delay.time*15,uAmt:s.delay.amount}),c=this.t.dl);let w=l.every(e=>e.fx)&&a.fxBg;u&&!w&&c!==d?(n.draw(this.p.select,this.t.sel,{uBase:f.tex,uFx:c.tex,uAcc:u.tex,uFxBg:+!!a.fxBg}),c=this.t.sel):!u&&!a.fxBg&&c!==d&&(c=f),h.reshoot.on&&(n.draw(this.p.reshoot,this.t.rs,{uSrc:c.tex,uTint:h.reshoot.tint,uZoom:h.reshoot.zoom,uCurve:h.reshoot.curve,uTime:r}),c=this.t.rs);let T=s.wall;T.layout>0&&(n.draw(this.p.wall,this.t.wall,{uAtlas:this.t.atlas.tex,uHead:this.head,uFilled:this.filled,uSrc:c.tex,uStage:this.stageTex,uLayout:k(T.layout),uGrid:[Math.max(1,Math.round(T.cols)),Math.max(1,Math.round(T.rows))],uDist:k(T.dist),uVar:T.variance,uTvRect:this.stageTv,uTime:r}),c=this.t.wall),e.black&&(n.draw(this.p.black,this.t.sel,{}),c=this.t.sel);let E=e.cur?e.cur.pos(r):r,ee=this.cg.render(r,E);ee&&this.upload(this.cgTex,this.cg.canvas,!0);let[te,ne]=this.pp(`p0`,`p1`);n.draw(this.p.cg,ne,{uSrc:c.tex,uCg:this.cgTex,uOn:+!!ee});let D=s.vhs;if(n.draw(this.p.analog,null,{uSrc:ne.tex,uPrev:te.tex,uStandby:this.standbyTex,uTime:r,uBleed:D.bleed,uScan:D.scan,uTrack:Math.min(1,D.track+t.trackBoost),uChroma:D.chroma,uRoll:t.roll,uLines:D.lines,uInterlace:D.interlace,uNoise:D.noise,uSat:D.sat,uBox43:+!!D.box43,uHead:D.head,uField:this.frame%2,uWarm:D.warm,uInvert:0,uTear:0,uSnow:t.snow,uBars:0,uStandbyOn:0,uJitter:t.jitter,uFlipY:0},[this.W,this.H]),this.grabbers.length){let e=document.createElement(`canvas`),t=200/Math.max(this.W,this.H);e.width=Math.round(this.W*t),e.height=Math.round(this.H*t),e.getContext(`2d`).drawImage(this.canvas,0,0,e.width,e.height);let n=e.toDataURL(`image/jpeg`,.75);this.grabbers.splice(0).forEach(e=>e(n))}}copyTo(e,t){return e===t||this.kit.draw(this.p.copy,t,{uSrc:e.tex}),t}usesBeam(e){let t=e=>!!e&&e!==`black`&&e.s.kind===`beam`;return t(e.cur)||t(e.prev)||t(e.outside)||M.some(e=>e.player.s.kind===`beam`)||M.some(e=>e.fillIn>=0&&this.scene.fillPlayer(e.fillIn)?.s.kind===`beam`)}grab(e=500){return new Promise(t=>{this.grabbers.push(t),setTimeout(()=>t(``),e)})}};function pn(e,t,n){e=(e%1+1)%1;let r=r=>{let i=(r+e*6)%6;return n-n*t*Math.max(0,Math.min(i,4-i,1))};return[r(5),r(3),r(1)]}function mn(e,t,n,r){let i=e.sampleRate,a=Math.floor(i*t),o=e.createBuffer(2,a,i);for(let e=0;e<2;e++){let t=o.getChannelData(e),s=0;for(let o=0;o<a;o++){let c=o/a,l=(Math.random()*2-1)*(1-c)**n;r&&(s+=2*Math.PI*(1800-1400*c)/i,l=l*.6+Math.sin(s+e)*(1-c)**(n+1)*.5*(o%1300<650?1:.6)),t[o]=l*(o<i*.004?o/(i*.004):1)}}return o}function hn(e=1024){let t=new Float32Array(e);for(let n=0;n<e;n++){let r=n/(e-1)*2-1;t[n]=Math.tanh(r*1.6)/Math.tanh(1.6)}return t}function gn(e,t=2048){let n=new Float32Array(t),r=2**(e-1);for(let e=0;e<t;e++){let i=e/(t-1)*2-1;n[e]=Math.round(i*r)/r}return n}var F=new class{ctx=null;voices=new Map;reversed=new WeakMap;dry;gateG;side;tapeIn;clean;driveIn;drive;wow;wowLfo;wowDepth;flutLfo;flutDepth;tapeWet;hiss;radioWet;radioDry;crushWet;crushDry;echo;echoSend;springSend;grainBus;grainHall;vol;nextStep=0;nextGrain=0;bg=null;link={crush:0,echo:0,wow:0,gate:0,radio:0};constructor(){_.whenReady(e=>this.init(e))}init(e){this.ctx=e;let t=(t=1)=>{let n=e.createGain();return n.gain.value=t,n};this.dry=t(),this.gateG=t(),this.side=t(),this.tapeIn=t(),this.dry.connect(this.gateG).connect(this.tapeIn),this.side.connect(this.tapeIn),this.clean=t(1),this.driveIn=t(1.4),this.drive=e.createWaveShaper(),this.drive.curve=hn(),this.drive.oversample=`2x`,this.wow=e.createDelay(.1),this.wow.delayTime.value=.018,this.wowLfo=e.createOscillator(),this.wowLfo.frequency.value=.55,this.wowDepth=t(0),this.wowLfo.connect(this.wowDepth).connect(this.wow.delayTime),this.flutLfo=e.createOscillator(),this.flutLfo.frequency.value=6.8,this.flutDepth=t(0),this.flutLfo.connect(this.flutDepth).connect(this.wow.delayTime),this.wowLfo.start(),this.flutLfo.start();let n=e.createBiquadFilter();n.type=`lowpass`,n.frequency.value=7500,this.tapeWet=t(0);let r=t();this.tapeIn.connect(this.clean).connect(r),this.tapeIn.connect(this.driveIn).connect(this.drive).connect(this.wow).connect(n).connect(this.tapeWet).connect(r);let i=e.createBuffer(1,e.sampleRate*2,e.sampleRate),a=i.getChannelData(0);for(let e=0;e<a.length;e++)a[e]=Math.random()*2-1;let o=e.createBufferSource();o.buffer=i,o.loop=!0;let c=e.createBiquadFilter();c.type=`bandpass`,c.frequency.value=5e3,c.Q.value=.4,this.hiss=t(0),o.connect(c).connect(this.hiss).connect(r),o.start();let l=e.createBiquadFilter();l.type=`highpass`,l.frequency.value=420;let u=e.createBiquadFilter();u.type=`lowpass`,u.frequency.value=3200;let d=e.createBiquadFilter();d.type=`peaking`,d.frequency.value=1400,d.gain.value=6,this.radioWet=t(0),this.radioDry=t(1);let f=t();r.connect(this.radioDry).connect(f),r.connect(l).connect(u).connect(d).connect(this.radioWet).connect(f);let p=e.createWaveShaper();p.curve=gn(5);let m=e.createBiquadFilter();m.type=`lowpass`,m.frequency.value=3800,this.crushWet=t(0),this.crushDry=t(1);let h=t();f.connect(this.crushDry).connect(h),f.connect(p).connect(m).connect(this.crushWet).connect(h);let g=t();h.connect(g),this.echo=e.createDelay(2);let v=t(.42),y=e.createBiquadFilter();y.type=`lowpass`,y.frequency.value=2600,this.echoSend=t(0),h.connect(this.echoSend).connect(this.echo).connect(y).connect(v).connect(this.echo),y.connect(g);let b=e.createConvolver();b.buffer=mn(e,1.8,3.5,!0),this.springSend=t(0);let x=t(.5);h.connect(this.springSend).connect(b).connect(x).connect(g),this.grainBus=t(0);let S=e.createConvolver();S.buffer=mn(e,4.5,2.2,!1),this.grainHall=t(.9);let C=t(.45);this.grainBus.connect(C).connect(g),this.grainBus.connect(S).connect(this.grainHall).connect(g);let w=e.createBiquadFilter();w.type=`highpass`,w.frequency.value=40;let T=e.createDynamicsCompressor();T.threshold.value=-20,T.knee.value=12,T.ratio.value=3,T.attack.value=.01,T.release.value=.25;let E=e.createWaveShaper();E.curve=hn();let ee=e.createDynamicsCompressor();ee.threshold.value=-6,ee.knee.value=0,ee.ratio.value=20,ee.attack.value=.002,ee.release.value=.1,this.vol=t(s.sound.vol);let te=e.createWaveShaper(),ne=hn();for(let e=0;e<ne.length;e++)ne[e]*=.89;te.curve=ne,g.connect(w).connect(T).connect(t(.6)).connect(E).connect(ee).connect(this.vol).connect(te),te.connect(e.destination),te.connect(_.recDest),te.connect(_.xy),te.connect(_.analyser);let D=()=>{this.schedule(),window.setTimeout(D,25)};D()}at(e){let t=this.ctx;return Math.max(t.currentTime,t.currentTime+(e-N()))}gainFor(e){return e.audioGain*e.gain}sync(e,t,n=N(),r=.012){let i=this.ctx;if(!i)return;let a=this.at(n);if(this.stop(e,n,r),!t||t.frozen)return;let o=t.s,s=o.audio;if(!s)return;let c=t.pos(n);if(c>=s.duration-.01)return;let l=i.createBufferSource();l.buffer=s,l.loop=!0,l.loopStart=Math.min(t.loopIn,s.duration-.05),l.loopEnd=Math.min(t.loopOut,s.duration),l.playbackRate.value=t.speed;let u=i.createGain(),d=this.gainFor(o)*(e===`bg`?1:e.startsWith(`obj`)?.7:1);u.gain.setValueAtTime(0,a),u.gain.linearRampToValueAtTime(d,a+r),l.connect(u).connect(this.dry),l.start(a,Math.max(0,c)),this.voices.set(e,{src:l,g:u,end:1/0})}has(e){return this.voices.has(e)}stop(e,t=N(),n=.012){let r=this.voices.get(e);if(!r||!this.ctx)return;this.voices.delete(e);let i=this.at(t);r.g.gain.cancelScheduledValues(i),r.g.gain.setValueAtTime(r.g.gain.value,i),r.g.gain.linearRampToValueAtTime(0,i+n);try{r.src.stop(i+n+.02)}catch{}}rename(e,t){let n=this.voices.get(e);n&&(this.stop(t),this.voices.delete(e),this.voices.set(t,n))}setVolume(e){this.vol&&this.ctx&&this.vol.gain.setTargetAtTime(e,this.ctx.currentTime,.05)}reverse(e){let t=this.reversed.get(e);if(t||e.duration>90||!this.ctx)return t??null;t=this.ctx.createBuffer(e.numberOfChannels,e.length,e.sampleRate);for(let n=0;n<e.numberOfChannels;n++){let r=e.getChannelData(n),i=t.getChannelData(n);for(let e=0,t=r.length;e<t;e++)i[e]=r[t-1-e]}return this.reversed.set(e,t),t}slice(e,t,n,r,i){let a=this.bg,o=a?.s.audio;if(!a||!o||!this.ctx)return;let s=this.ctx.createBufferSource(),c=r?this.reverse(o):o;if(!c)return;s.buffer=c,s.playbackRate.value=i;let l=this.ctx.createGain(),u=this.gainFor(a.s);l.gain.setValueAtTime(0,e),l.gain.linearRampToValueAtTime(u,e+.006),l.gain.setValueAtTime(u,e+n-.012),l.gain.linearRampToValueAtTime(0,e+n),s.connect(l).connect(this.side);let d=r?Math.max(0,o.duration-t-n*i):Math.max(0,t);s.start(e,Math.min(d,c.duration-.01),n*i+.02)}grain(e){let t=this.bg,n=t?.s.audio;if(!t||!n||!this.ctx)return;let r=this.ctx,a=s.sound.grainSize*(.7+Math.random()*.6),o=N()+(e-r.currentTime),c=t.pos(o),l=Math.max(0,Math.min(n.duration-a-.01,c+(Math.random()-.5)*.3)),u=i[s.sound.scale]?.steps??[0,2,4,7,9],d=Math.random(),f=d<.35?0:d<.55?12:d<.7?-12:u[1+Math.floor(Math.random()*(u.length-1))]+(Math.random()<.5?0:12),p=r.createBufferSource();p.buffer=n,p.playbackRate.value=2**(f/12)*(t.frozen?1:t.speed);let m=r.createGain(),h=this.gainFor(t.s)*.5;m.gain.setValueAtTime(0,e),m.gain.linearRampToValueAtTime(h,e+a*.5),m.gain.linearRampToValueAtTime(0,e+a);let g=r.createStereoPanner();g.pan.value=Math.random()*1.6-.8,p.connect(m).connect(g).connect(this.grainBus),p.start(e,l,a*2+.05)}schedule(){let e=this.ctx,t=s.sound,n=N()+.1,r=Math.max(t.gate,this.link.gate),i=o[t.gatePat]?.pat??o[0].pat;for(this.nextStep<P.stepAt(N())-2&&(this.nextStep=Math.ceil(P.stepAt(N())));P.timeOf(this.nextStep)<n;){let e=this.nextStep++,t=P.timeOf(e),n=this.at(t),a=i[(e%16+16)%16],o=P.step;if(r<=.01||a===`x`){this.gateG.gain.setTargetAtTime(1,n,.004);continue}this.gateG.gain.setTargetAtTime(1-r,n,.004);let s=this.bg;s&&!s.frozen&&(a===`r`?this.slice(n,s.pos(t),o,!0,s.speed):a===`s`&&this.slice(n,s.pos(t-o*(e%3+1)),o,!1,s.speed))}let a=t.grain;if(a>.01&&this.bg?.s.audio){let t=6+a*34;for(this.nextGrain<e.currentTime&&(this.nextGrain=e.currentTime+.01);this.nextGrain<e.currentTime+.1;)this.grain(this.nextGrain),this.nextGrain+=1/t*(.6+Math.random()*.8)}this.levels()}levels(){let e=this.ctx,t=s.sound,n=this.link,r=.08,i=e.currentTime,a=Math.min(1,t.tape),o=Math.min(1,a*.6+n.wow);this.tapeWet.gain.setTargetAtTime(Math.min(1,a*1.2+n.wow*.6),i,r),this.clean.gain.setTargetAtTime(1-Math.min(.85,a*.9+n.wow*.5),i,r),this.wowDepth.gain.setTargetAtTime(o*.0035,i,r),this.flutDepth.gain.setTargetAtTime(o*6e-4,i,r),this.hiss.gain.setTargetAtTime(this.voices.size?a*.006:0,i,r),this.springSend.gain.setTargetAtTime(a*.35,i,r);let c=Math.min(1,t.radio+n.radio);this.radioWet.gain.setTargetAtTime(c*1.4,i,r),this.radioDry.gain.setTargetAtTime(1-c,i,r),this.crushWet.gain.setTargetAtTime(n.crush,i,r),this.crushDry.gain.setTargetAtTime(1-n.crush*.85,i,r),this.echo.delayTime.setTargetAtTime(P.step*3,i,.2),this.echoSend.gain.setTargetAtTime(n.echo*.55,i,r);let l=Math.min(1,t.grain);this.grainBus.gain.setTargetAtTime(l,i,r),this.dry.gain.setTargetAtTime(1-l*.75,i,r)}},_n=class{camera;bgPad=-1;bg=null;prev=null;trans=null;history=[];cache=new Map;fills=new Map;ghosts=[];pending=[];held=null;blackUntil=0;lastStut=-1;stutAlt=!1;lastBeat=-1;flash=0;lastName=``;constructor(e){this.camera=e,_.whenReady(()=>setTimeout(()=>this.resync(),50))}playerFor(e){let t=this.cache.get(e);return t||(t=new Ht(e,this.camera),t.restart(N()),this.cache.set(e,t)),t}fillPlayer(e){let t=j[e];if(!t)return null;let n=this.fills.get(e);return n&&n.s===t||(n?.dispose(),n=new Ht(t,this.camera),n.restart(N()),this.fills.set(e,n)),n}forget(e){this.cache.get(e)?.dispose(),this.cache.delete(e);for(let[t,n]of this.fills)n.s===e&&(n.dispose(),this.fills.delete(t));this.bg?.s===e&&(this.bg=null,this.bgPad=-1,F.stop(`bg`))}at(e,t){this.pending.push({t:e,fn:t}),this.pending.sort((e,t)=>e.t-t.t)}quantise(e=N()){return e}styleOf(e){return e.inStyle===-2?s.trans.id:e.inStyle}cut(e,t,n={}){let r=j[e];if(!r)return;let i=this.playerFor(r),a=this.bg;n.restart!==!1&&(i.speed=n.rate===void 0?r.speed:n.rate,i.loopIn=r.loopIn,i.loopOut=r.loopOut,i.restart(t,n.from??r.loopIn));let o=n.style??this.styleOf(r);a&&a!==i&&o>=0?(this.prev=a,this.trans={id:o,t0:t,dur:P.beat*s.trans.beats},F.rename(`bg`,`prev`),F.stop(`prev`,t+this.trans.dur,Math.min(.5,this.trans.dur))):(this.prev=null,this.trans=null,F.stop(`prev`,t)),this.bg=i,F.bg=i,e!==this.bgPad&&(this.history=[e,...this.history.filter(t=>t!==e)].slice(0,8)),this.bgPad=e,this.lastName=r.name,F.sync(`bg`,i,t),s.scene.blackOnCut>0&&Math.random()<s.scene.blackOnCut&&(this.blackUntil=t+P.step),this.flash=1,d()}press(e,t=N()){if(!j[e])return;let n=this.quantise(t),r=this.bgPad;this.at(n,()=>this.cut(e,n)),this.held={pad:e,back:r}}release(e,t,n=N()){if(!this.held||this.held.pad!==e)return;let r=this.held.back;if(this.held=null,!t||r<0||r===e||!j[r])return;let i=this.quantise(n);this.at(i,()=>this.cut(r,i,{restart:!1,style:-1}))}chop(e,t=N()){let n=this.bg?.s;if(!n||this.bgPad<0)return;let[r]=It(n,e),i=this.quantise(t),a=Vt(e)*n.speed,o=this.bgPad;this.at(i,()=>{this.cut(o,i,{from:r,rate:a,style:-1}),this.lastName=`${n.name} /${e+1}`})}retrigger(e,t){this.at(t,()=>this.cut(e,t,{style:-1}))}resync(e=N()){F.bg=this.bg,F.sync(`bg`,this.bg,e),M.forEach(t=>t.sound>0&&t.visible?F.sync(`obj`+t.id,t.player,e):F.stop(`obj`+t.id,e))}loadedPads(){let e=[];return j.forEach((t,n)=>t&&t.kind!==`camera`&&e.push(n)),e}frame(e=N()){for(;this.pending.length&&this.pending[0].t<=e+.03;)this.pending.shift().fn();this.bg&&this.bg.s.audio&&!this.bg.frozen&&!F.has(`bg`)&&F.ctx&&!s.scene.stutter&&F.sync(`bg`,this.bg,e);let t=s.scene,n=Math.floor(P.beatAt(e));if(n!==this.lastBeat&&(this.lastBeat=n,t.bgCycle)){let e=this.loadedPads();if(e.length){let t=e.indexOf(this.bgPad);this.cut(e[(t+1)%e.length],P.timeOf(n*4),{style:-1})}}let r=this.bg;if(t.stutter&&this.history.length>1&&j[this.history[1]]){let t=Math.floor(P.stepAt(e)/2);if(t!==this.lastStut){this.lastStut=t,this.stutAlt=!this.stutAlt;let n=this.stutAlt?this.playerFor(j[this.history[1]]):this.bg;F.sync(`bg`,n,e,.006),F.bg=n}this.stutAlt&&(r=this.playerFor(j[this.history[1]]))}else this.stutAlt&&(this.stutAlt=!1,F.sync(`bg`,this.bg,e),F.bg=this.bg);let i=-1;this.trans&&(i=(e-this.trans.t0)/Math.max(.01,this.trans.dur),i>=1?(this.trans=null,this.prev=null,i=-1):i=Math.max(0,i));let a=[];if(t.overlay>0){let n=this.loadedPads().filter(e=>e!==this.bgPad&&j[e].kind!==`matte`&&j[e].kind!==`beam`);for(;this.ghosts.length<Math.min(2,n.length);){let t=j[n[this.ghosts.length]],r=new Ht(t,this.camera);r.restart(e,t.loopIn+Math.random()*Math.max(0,t.loopOut-t.loopIn)),r.speed=.6,this.ghosts.push(r)}this.ghosts.forEach((n,r)=>a.push({p:n,a:t.overlay*(.32+.22*Math.sin(e*.35+r*2.1))}))}else this.ghosts.length&&(this.ghosts.forEach(e=>e.dispose()),this.ghosts=[]);let o=null;for(let e of M)e.visible&&e.fillOut!==-2&&(o=e.fillOut===-1?`black`:this.fillPlayer(e.fillOut));return this.flash*=.85,{cur:r,prev:this.prev,progress:i,transId:this.trans?.id??0,ghosts:a,black:t.black||e<this.blackUntil,outside:o}}manage(e){let t=new Set([...this.cache.values(),...this.fills.values(),...this.ghosts,...M.map(e=>e.player)]),n=null;for(let r of t)e.has(r)?r.s.kind===`camera`&&!n&&(n=r.s.facing??null):r.park();this.camera.want(n)}};function vn(){return[`video/mp4;codecs="avc1.42E01E,mp4a.40.2"`,`video/mp4;codecs=avc1`,`video/mp4`,`video/webm;codecs="vp9,opus"`,`video/webm;codecs="vp8,opus"`,`video/webm`].find(e=>typeof MediaRecorder<`u`&&MediaRecorder.isTypeSupported(e))||``}var yn=class{rec=null;chunks=[];started=0;mime=``;get recording(){return!!this.rec&&this.rec.state===`recording`}get elapsed(){return this.recording?(performance.now()-this.started)/1e3:0}start(e,t){if(this.recording)return;_.ensure();let n=[...e.captureStream(30).getVideoTracks(),..._.recDest.stream.getAudioTracks()],r=new MediaStream(n);this.mime=vn(),this.chunks=[],this.rec=new MediaRecorder(r,{mimeType:this.mime||void 0,videoBitsPerSecond:t,audioBitsPerSecond:128e3}),this.rec.ondataavailable=e=>e.data.size&&this.chunks.push(e.data),this.rec.start(500),this.started=performance.now()}async stop(e){let t=this.rec;if(!t)return null;let n=this.elapsed,r=await e();return new Promise(e=>{t.onstop=()=>{let i=(this.mime||t.mimeType||`video/webm`).split(`;`)[0],a=new Blob(this.chunks,{type:i});if(this.rec=null,this.chunks=[],t.stream.getVideoTracks().forEach(e=>e.stop()),!a.size)return e(null);let o=new Date;e({id:`${o.getTime()}`,created:o.getTime(),duration:n,label:`${o.getMonth()+1}/${o.getDate()} 녹화 ${String(o.getHours()).padStart(2,`0`)}:${String(o.getMinutes()).padStart(2,`0`)}`,color:Math.floor(Math.random()*5),mime:i,blob:a,thumb:r})},t.stop()})}},bn=`prepared-tv-9x`;function xn(){return new Promise((e,t)=>{let n=indexedDB.open(bn,1);n.onupgradeneeded=()=>n.result.createObjectStore(`tapes`,{keyPath:`id`}),n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}async function Sn(e,t){let n=await xn();return new Promise((r,i)=>{let a=t(n.transaction(`tapes`,e).objectStore(`tapes`));a.onsuccess=()=>r(a.result),a.onerror=()=>i(a.error)})}var Cn={all:async()=>(await Sn(`readonly`,e=>e.getAll())).sort((e,t)=>t.created-e.created),put:e=>Sn(`readwrite`,t=>t.put(e)),remove:e=>Sn(`readwrite`,t=>t.delete(e))};function wn(e){let t=e.mime.includes(`mp4`)?`mp4`:`webm`;return`prepared-tv-${e.id}.${t}`}async function Tn(){let e=window.claude;if(!e?.use)return null;try{return await e.use(`downloads`)}catch{return null}}async function En(e){if(await Tn())return Dn(e);let t=new File([e.blob],wn(e),{type:e.mime});if(navigator.canShare?.({files:[t]}))try{return await navigator.share({files:[t],title:e.label}),!0}catch{return!1}return Dn(e),!0}async function Dn(e){let t=await Tn();if(t)try{return await t.save({filename:wn(e),data:e.blob}),!0}catch{return!1}let n=document.createElement(`a`);return n.href=URL.createObjectURL(e.blob),n.download=wn(e),document.body.appendChild(n),n.click(),setTimeout(()=>{URL.revokeObjectURL(n.href),n.remove()},2e3),!0}var I=new class{events=[];undo=[];playing=!1;recording=!1;last=0;taking=!1;get len(){return s.seq.bars*16}pos(e=N()){return(P.stepAt(e)%this.len+this.len)%this.len}play(e=N()){this.playing||(P.origin=e,this.last=-1e-6,this.playing=!0,d())}stop(){this.playing=!1,this.recording=!1,this.taking=!1,d()}toggleRec(e=N()){this.recording?(this.recording=!1,this.taking=!1):(this.recording=!0,this.playing||this.play(e)),d()}record(e,t=N()){if(!this.recording||!this.playing)return;this.taking||=(this.undo.push(this.events.map(e=>({...e}))),this.undo.length>20&&this.undo.shift(),!0);let n=P.stepAt(t),r=n;s.seq.quant&&(r=Math.round(n));let i=(r%this.len+this.len)%this.len;this.events.push({...e,step:i,skip:r>this.last?r:void 0}),d()}undoLast(){let e=this.undo.pop();e&&(this.events=e),this.taking=!1,d()}clear(){this.events.length&&this.undo.push(this.events),this.events=[],this.taking=!1,d()}poll(e,t){if(!this.playing)return;let n=P.stepAt(e+.03);if(n<=this.last)return;let r=this.len;for(let e of this.events){let i=Math.floor((this.last-e.step)/r)+1;for(;;){let a=e.step+i*r;if(a>n)break;a>this.last&&(e.skip!==void 0&&Math.abs(a-e.skip)<.6?e.skip=void 0:t(e,P.timeOf(a))),i++}}this.last=n}};function On(){s.scan.on=!1,Object.assign(s.scan,{hSize:1,vSize:1,hPos:0,vPos:0,rot:0}),s.scan.osc.forEach(e=>e.amp=0),s.magnet.list=[],s.magnet.audio=0,s.magnet.drift=!1,s.color.on=!1,s.color.mix=!1,s.fb.on=!1,s.delay.mode=0,s.wall.layout=0,s.wall.dist=0,s.cg.mode=`off`,s.cg.tc=!1,s.cg.sat=!1,s.pip.on=!1,s.era.on=s.era.on.map(()=>!1);for(let e of Object.keys(s.moor))s.moor[e].on=!1;Object.assign(s.scene,{overlay:0,stutter:!1,bgCycle:!1,bgOverride:-1,black:!1})}var kn=[{id:`magnet`,title:`MAGNET TV`,ko:`자석 TV`,year:`1965`,about:`TV 위에 큰 자석을 올려 전자빔을 휘게 했다. 관객이 자석을 옮기면 화면의 선이 추상적인 형태로 바뀐다.`,needs:`없음 — 빈 래스터. 모니터를 눌러 자석을 옮기세요`,screen:`magnet`,apply:e=>{s.matte.pattern=0,e.bg(e.raster()),s.magnet.list=[{x:0,y:.15,s:2.4,r:.55,type:0,born:0}],s.magnet.purity=.6}},{id:`zen`,title:`ZEN FOR TV`,ko:`선을 위한 TV`,year:`1963`,about:`고장 난 TV의 수직 편향을 없애 화면 전체가 한 줄로 눌렸다. 옆으로 세워 세로선 하나가 남았다.`,needs:`아무 입력이나 — 그림은 선 하나로 압축됩니다`,screen:`scan`,apply:e=>{e.bg(e.first()),s.scan.on=!0,Object.assign(s.scan,{vSize:.004,rot:90,lines:262})}},{id:`participation`,title:`PARTICIPATION TV`,ko:`참여 TV`,year:`1963`,about:`관객이 마이크에 내는 소리가 TV의 편향 신호가 되어 화면에 불꽃 같은 무늬를 그렸다.`,needs:`소리 — 마이크, 음악, 또는 모니터를 문질러 내는 소리`,screen:`synth`,apply:e=>{e.bg(e.beam()),Object.assign(s.synth,{mode:1,persist:.9,width:1.4,color:`#60c8ff`,gain:1.2,fx:3})}},{id:`buddha`,title:`TV BUDDHA`,ko:`TV 부처`,year:`1974`,about:`불상이 폐쇄회로 카메라에 찍힌 자기 모습을 모니터로 마주 본다. 보는 이와 보이는 이가 한 회로 안에 있다.`,needs:`카메라 — 전면 카메라로 자신을 비추세요`,screen:`wall`,apply:e=>{e.bg(e.self()>=0?e.self():e.first()),s.wall.layout=8}},{id:`groove`,title:`GLOBAL GROOVE`,ko:`글로벌 그루브`,year:`1973`,about:`춤, 북, 광고, 시 낭송을 빠르게 잘라 붙이고 비디오 신시사이저로 색을 입힌 "미래의 TV 편성표".`,needs:`사람이 나오는 클립이나 카메라`,screen:`objects`,apply:e=>{e.bg(e.first()),e.person(!1),s.scene.bgOverride=5,s.matte.color=`#1a7a20`,s.color.on=!0,s.color.bands=6,s.cg.mode=`title`,s.cg.style=`cycle`,s.cg.title1=`GLOBAL GROOVE`,s.cg.serial++}},{id:`garden`,title:`TV GARDEN`,ko:`TV 정원`,year:`1974`,about:`수십 대의 모니터를 화분과 식물 사이에 눕혀, 전자 화면이 자라는 정원을 만들었다.`,needs:`아무 입력이나`,screen:`wall`,apply:e=>{e.bg(e.first()),s.wall.layout=3,s.wall.dist=3,s.color.on=!0}},{id:`moon`,title:`MOON IS THE OLDEST TV`,ko:`달은 가장 오래된 TV`,year:`1965`,about:`모니터 열두 대에 전자빔을 조작해 만든 달의 위상을 띄웠다. 초승달부터 보름달까지.`,needs:`없음`,screen:`wall`,apply:e=>{e.bg(e.raster()),s.matte.pattern=0,s.wall.layout=5}},{id:`clock`,title:`TV CLOCK`,ko:`TV 시계`,year:`1963`,about:`한 줄로 압축한 화면을 모니터마다 다른 각도로 돌려, TV들이 시계 바늘처럼 시간을 가리킨다.`,needs:`아무 입력이나`,screen:`wall`,apply:e=>{e.bg(e.first()),s.wall.layout=4}},{id:`fish`,title:`VIDEO FISH`,ko:`비디오 물고기`,year:`1975`,about:`살아 있는 물고기가 헤엄치는 어항을 모니터 앞에 한 줄로 놓아, 진짜와 화면 속 물고기가 겹친다.`,needs:`아무 입력이나`,screen:`wall`,apply:e=>{e.bg(e.first()),s.wall.layout=6,s.wall.dist=2}},{id:`cello`,title:`TV CELLO`,ko:`TV 첼로`,year:`1971`,about:`모니터 세 대를 쌓아 첼로를 만들고 샬럿 무어먼이 연주했다. 활을 그으면 화면이 소리와 함께 움직였다.`,needs:`카메라나 클립 + 음악`,screen:`wall`,apply:e=>{e.bg(e.first()),s.wall.layout=7,s.scan.on=!0,s.scan.osc[0]={target:0,wave:5,freq:4,rate:.6,amp:.25}}},{id:`fin`,title:`FIN DE SIÈCLE II`,ko:`세기말 II`,year:`1989`,about:`모니터 수백 대로 벽을 세우고 영상이 벽을 가로질러 흐르고 갈라지게 했다.`,needs:`움직임이 있는 영상`,screen:`wall`,apply:e=>{e.bg(e.first()),Object.assign(s.wall,{layout:1,cols:5,rows:8,dist:2,variance:.4})}},{id:`tower`,title:`THE MORE, THE BETTER`,ko:`다다익선`,year:`1988`,about:`모니터 1003대를 탑으로 쌓았다. 개천절을 뜻하는 숫자. 탑 전체가 하나의 빛나는 몸이 된다.`,needs:`아무 입력이나`,screen:`wall`,apply:e=>{e.bg(e.first()),Object.assign(s.wall,{layout:2,dist:3,variance:.6})}},{id:`highway`,title:`ELECTRONIC SUPERHIGHWAY`,ko:`일렉트로닉 슈퍼하이웨이`,year:`1995`,about:`지도 모양으로 모니터를 쌓고 네온으로 경계를 그렸다. 전자 고속도로가 세계를 잇는다는 예언.`,needs:`아무 입력이나`,screen:`wall`,apply:e=>{e.bg(e.first()),Object.assign(s.wall,{layout:10,dist:3,variance:.5})}},{id:`nixon`,title:`NIXON TV`,ko:`닉슨 TV`,year:`1965`,about:`정치인의 얼굴이 나오는 TV에 코일 자석을 감고 소리 신호를 흘려 얼굴을 일그러뜨렸다.`,needs:`얼굴이 나오는 영상 + 소리`,screen:`magnet`,apply:e=>{e.bg(e.first()),s.magnet.list=[{x:-.3,y:.1,s:1.4,r:.45,type:0,born:0},{x:.3,y:-.1,s:-1.4,r:.45,type:1,born:1}],s.magnet.audio=1,s.magnet.drift=!0}},{id:`flag`,title:`VIDEO FLAG`,ko:`비디오 깃발`,year:`1985`,about:`모니터를 깃발 모양으로 쌓아 줄무늬와 별 자리에 각각 다른 영상을 흘렸다.`,needs:`아무 입력이나`,screen:`wall`,apply:e=>{e.bg(e.first()),Object.assign(s.wall,{layout:9,dist:2,variance:.3})}},{id:`orwell`,title:`GOOD MORNING, MR. ORWELL`,ko:`굿모닝 미스터 오웰`,year:`1984`,about:`1984년 새해 아침, 뉴욕과 파리를 위성으로 이어 예술가들의 공연을 생중계했다. 오웰의 예언에 대한 답.`,needs:`카메라 (두 곳을 잇는 느낌으로 1·2번)`,screen:`cg`,apply:e=>{e.bg(e.first()),Object.assign(s.synth,{mode:0,fx:3,fy:2}),s.scene.overlay=.7,Object.assign(s.cg,{mode:`crawl`,style:`chyron`,sat:!0,tc:!0}),s.cg.serial++}}];function An(e,t){On(),e.apply(t),d()}var jn=48,Mn=32,L=`#000`,R=`#808080`,z=`#fff`;function Nn(e,t,n,r=L,i=2){e.beginPath(),t.forEach(([t,n],r)=>r?e.lineTo(t,n):e.moveTo(t,n)),e.closePath(),n&&(e.fillStyle=n,e.fill()),r&&(e.strokeStyle=r,e.lineWidth=i,e.stroke())}function B(e,t,n,r,i,a){e.fillStyle=a,e.fillRect(t,n,r,i)}function V(e,t=3,n=3,r=42,i=26){e.strokeStyle=L,e.lineWidth=2,e.strokeRect(t,n,r,i)}function H(e,t,n=L,r=2){e.beginPath(),t.forEach(([t,n],r)=>r?e.lineTo(t,n):e.moveTo(t,n)),e.strokeStyle=n,e.lineWidth=r,e.stroke()}function Pn(e,[t,n],[r,i],a=5,o=L){let s=Math.atan2(i-n,r-t);Nn(e,[[r,i],[r-Math.cos(s-.5)*a,i-Math.sin(s-.5)*a],[r-Math.cos(s+.5)*a,i-Math.sin(s+.5)*a]],o,null)}function Fn(e,t,n=L){H(e,t,n,2.4),Pn(e,t[t.length-2],t[t.length-1],6,n)}function In(e,t,n,r,i,a,o=L,s=r){let c=[];for(let e=0;e<=12;e++){let o=i+(a-i)*e/12;c.push([t+Math.cos(o)*r,n+Math.sin(o)*s])}Fn(e,c,o)}function U(e,t,n,r,i=r,a=L){e.beginPath(),e.ellipse(t,n,r,i,0,0,Math.PI*2),e.fillStyle=a,e.fill()}function W(e,t,n=!1){Nn(e,t,n?R:z,L,2);let r=t.reduce((e,t)=>e+t[0],0)/4,i=t.reduce((e,t)=>e+t[1],0)/4,a=Math.abs(t[1][0]-t[0][0])+Math.abs(t[2][0]-t[3][0]);n||U(e,r,i,Math.max(1.5,a*.12),Math.max(1.2,Math.abs(t[3][1]-t[0][1])*.17))}function Ln(e,t,n,r,i,a=z){B(e,t,n,r,i,L);let o=t+2,s=n+2,c=r-4-Math.max(2,r*.18),l=i-4;return B(e,o,s,c,l,a),B(e,t+r-Math.max(2,r*.15),n+3,1,1,z),[o,s,c,l]}function Rn(e){let t=e;return()=>(t=t*16807%2147483647)/2147483647}var zn={0:e=>{B(e,4,4,24,17,L),B(e,18,11,26,17,R),e.strokeStyle=L,e.strokeRect(18,11,26,17)},1:e=>{B(e,3,3,20,26,L),V(e),Fn(e,[[26,16],[42,16]])},2:e=>{V(e),U(e,24,16,10)},3:e=>{V(e),Nn(e,[[24,5],[38,16],[24,27],[10,16]],L)},4:e=>{V(e),e.beginPath(),e.moveTo(24,16),e.arc(24,16,11,-Math.PI/2,Math.PI,!1),e.closePath(),e.fillStyle=L,e.fill()},5:e=>{V(e);for(let t=6;t<28;t+=5)B(e,3,t,42,3,L)},6:e=>{for(let t=0;t<4;t++)for(let n=0;n<6;n++)(n+t)%2&&B(e,3+n*7,3+t*6.5,7,6.5,L);V(e)},7:e=>{let t=Rn(7);for(let n=3;n<29;n+=3)for(let r=3;r<45;r+=3)t()<.45&&B(e,r,n,3,3,L);V(e)},8:e=>{let t=Rn(3);B(e,3,3,42,5,L);for(let n=4;n<44;n+=4)B(e,n,7,3,3+t()*18,L);V(e)},12:e=>{W(e,[[2,6],[20,6],[20,26],[2,26]]),W(e,[[24,6],[46,6],[46,26],[24,26]]),Fn(e,[[40,16],[28,16]])},23:e=>{V(e),B(e,21,3,6,26,L),Fn(e,[[5,16],[17,16]]),Fn(e,[[43,16],[31,16]])},24:e=>{B(e,3,3,42,26,L),B(e,8,15,32,2,z),U(e,24,16,3,3,z)},25:e=>{V(e);for(let t=0;t<5;t++)B(e,t%2?14:3,5+t*5,30,3,L)},28:e=>{V(e);for(let t of[4,8,12])e.beginPath(),e.ellipse(24,16,t*1.4,t,0,0,Math.PI*2),e.strokeStyle=L,e.lineWidth=2,e.stroke()},30:e=>{let t=Rn(11);for(let n=3;n<29;n+=6.5)for(let r=3;r<45;r+=7)B(e,r,n,7,6.5,[L,R,z][Math.floor(t()*3)]);V(e)},32:e=>{let t=Rn(5),n=[[3,29]];for(let e=3;e<=45;e+=3)n.push([e,12+t()*12-(e%6?6:0)]);n.push([45,29]),Nn(e,n,L,null),V(e)},9:e=>{W(e,[[18,9],[30,7],[30,25],[18,23]]),In(e,24,9,14,Math.PI*1.05,Math.PI*1.95,L,6),In(e,24,23,14,Math.PI*.05,Math.PI*.95,L,6)},10:e=>{W(e,[[10,13],[38,13],[42,20],[6,20]]),In(e,6,16,6,Math.PI*.6,Math.PI*1.4,L,13),In(e,42,16,6,-Math.PI*.4,Math.PI*.4,L,13)},11:e=>{W(e,[[8,4],[26,6],[24,18],[6,15]]),In(e,30,12,12,-Math.PI*.5,Math.PI*.5,L,13),W(e,[[30,24],[40,23],[41,29],[31,30]],!0)},13:e=>{W(e,[[19,11],[31,9],[33,19],[21,21]]),In(e,26,15,18,.2,Math.PI*1.6,L,12)},14:e=>{W(e,[[8,6],[40,6],[40,26],[8,26]]),In(e,24,16,20,Math.PI*1.2,Math.PI*2.1,L,13)},15:e=>{Nn(e,[[4,4],[44,4],[44,16],[30,28],[4,28]],z),Nn(e,[[44,16],[30,28],[28,14]],R),U(e,16,15,4,3)},16:e=>{Nn(e,[[6,8],[24,4],[24,28],[6,24]],z),Nn(e,[[24,4],[42,8],[42,24],[24,28]],R),U(e,15,16,3,3)},17:e=>{B(e,3,3,42,26,R),W(e,[[3,3],[16,7],[16,25],[3,29]]),W(e,[[45,3],[32,7],[32,25],[45,29]])},18:e=>{W(e,[[4,4],[22,3],[24,14],[5,15]]),Fn(e,[[16,16],[24,22],[34,26]]),W(e,[[36,22],[44,21],[44,28],[36,29]],!0)},19:e=>{let t=Rn(19);for(let n=0;n<9;n++){let r=4+t()*36,i=3+t()*22,a=t()*1.5,o=4+t()*3;Nn(e,[[r,i],[r+Math.cos(a)*o,i+Math.sin(a)*o],[r+Math.cos(a)*o-Math.sin(a)*o,i+Math.sin(a)*o+Math.cos(a)*o],[r-Math.sin(a)*o,i+Math.cos(a)*o]],n%3?L:R,L,1)}},20:e=>{B(e,3,3,42,26,L);for(let t=0;t<14;t++){let n=t/14*Math.PI*2;H(e,[[24+Math.cos(n)*3,16+Math.sin(n)*2],[24+Math.cos(n)*20,16+Math.sin(n)*13]],z,t%2?1.5:2.5)}},21:e=>{W(e,[[8,4],[40,4],[34,20],[14,20]]),In(e,24,4,20,Math.PI*.15,Math.PI*.45,L,24),H(e,[[6,4],[42,4]],L,3)},22:e=>{e.strokeStyle=L,e.lineWidth=2,e.strokeRect(19,12,10,8),e.strokeRect(12,8,24,16),V(e);for(let[t,n]of[[5,5],[43,5],[43,27],[5,27]])Fn(e,[[24+(t-24)*.35,16+(n-16)*.35],[24+(t-24)*.8,16+(n-16)*.8]])},26:e=>{for(let t=0;t<8;t++){let n=3+t%4*11,r=4+Math.floor(t/4)*13;t%3==1?W(e,[[n+3,r],[n+7,r],[n+7,r+11],[n+3,r+11]],!0):W(e,[[n,r],[n+10,r],[n+10,r+11],[n,r+11]])}},29:e=>{let t=[];for(let e=0;e<60;e++){let n=e*.32,r=1+e*.22;t.push([24+Math.cos(n)*r*1.5,16+Math.sin(n)*r])}H(e,t,L,2),V(e)},35:e=>{let t=Rn(35);for(let n=3;n<29;n+=3.25){let r=(t()-.5)*14;B(e,3+Math.max(0,r),n,30,3.25,t()<.5?L:R)}V(e)}},Bn={magnet:e=>{let[t,n,r,i]=Ln(e,6,10,36,20),a=[];for(let e=0;e<40;e++){let o=e*.45;a.push([t+r/2+Math.cos(o)*(1+e*.32),n+i/2+Math.sin(o)*(1+e*.18)])}H(e,a,L,1.5),e.beginPath(),e.arc(22,7,6,Math.PI,0,!1),e.strokeStyle=L,e.lineWidth=4,e.stroke(),B(e,14,7,4,3,R),B(e,26,7,4,3,R)},zen:e=>{Ln(e,8,3,32,27,L),B(e,20,6,2,21,z)},participation:e=>{U(e,8,9,4,5),H(e,[[8,14],[8,29]],L,2);let[t,n,r,i]=Ln(e,17,5,29,22,L);for(let a=0;a<10;a++){let o=a/10*Math.PI*2;H(e,[[t+r/2,n+i/2],[t+r/2+Math.cos(o)*9,n+i/2+Math.sin(o)*7]],z,1.5)}},buddha:e=>{U(e,10,9,4,4),U(e,10,5,2,2),Nn(e,[[5,13],[15,13],[17,24],[3,24]],L,null),U(e,10,25,9,4),Ln(e,30,12,16,13),H(e,[[17,9],[29,16]],R,1)},groove:e=>{U(e,18,6,3.5),H(e,[[18,9],[16,20],[10,29]],L,3.5),H(e,[[16,20],[22,29]],L,3.5),H(e,[[18,11],[26,4]],L,3),H(e,[[17,12],[9,15]],L,3),B(e,30,14,14,15,R),U(e,37,14,7,3,L)},garden:e=>{Ln(e,4,16,14,10),Ln(e,26,18,16,11),Ln(e,17,6,12,9);let t=Rn(9);for(let n=0;n<9;n++)U(e,4+t()*40,4+t()*26,3,1.5,R)},moon:e=>{for(let t=0;t<4;t++){let n=7+t*11.5;U(e,n,16,5,5,L);let r=[-6,-2.5,2.5,6][t];U(e,n+r,16,5,5,z),e.beginPath(),e.arc(n,16,5,0,Math.PI*2),e.strokeStyle=L,e.lineWidth=1.2,e.stroke()}},clock:e=>{for(let t=0;t<3;t++){let[n,r,i,a]=Ln(e,2+t*15.5,8,14,15,L),o=-Math.PI/2+t*1.1;H(e,[[n+i/2-Math.cos(o)*5,r+a/2-Math.sin(o)*5],[n+i/2+Math.cos(o)*5,r+a/2+Math.sin(o)*5]],z,1.5)}},fish:e=>{B(e,3,9,42,20,R),H(e,[[3,9],[45,9]],L,2),U(e,22,19,9,5),Nn(e,[[30,19],[40,13],[40,25]],L,null),U(e,17,18,1.2,1.2,z)},cello:e=>{H(e,[[24,1],[24,7]],L,3),Ln(e,18,6,12,7),Ln(e,15,13,18,8),Ln(e,12,21,24,10),H(e,[[4,26],[44,12]],L,1.5)},fin:e=>{for(let t=0;t<3;t++)for(let n=0;n<5;n++)Ln(e,2+n*9,3+t*9.5,8.5,9,(n+t)%2?R:z)},tower:e=>{for(let t=0;t<5;t++){let n=5-t;for(let r=0;r<n;r++)Ln(e,24-n*8/2+r*8,25-t*5.5,8,5.5,(r+t)%2?R:z)}},highway:e=>{Nn(e,[[4,12],[14,5],[30,6],[44,10],[42,22],[30,28],[12,26],[5,20]],R,L,2.5);for(let t=10;t<42;t+=6)H(e,[[t,7],[t,26]],L,1);for(let t=10;t<27;t+=5)H(e,[[5,t],[43,t]],L,1)},nixon:e=>{let[t,n,r,i]=Ln(e,8,4,32,24);U(e,t+r/2,n+i/2,6,8,L),B(e,t+r/2+3,n+i/2-1,4,2,L);for(let t=0;t<4;t++)e.beginPath(),e.ellipse(24,16,22-t,6+t*3,0,Math.PI*.1,Math.PI*.9),e.strokeStyle=L,e.lineWidth=1,e.stroke()},flag:e=>{for(let t=0;t<7;t++)B(e,3,3+t*3.7,42,3.7,t%2?z:L);B(e,3,3,18,15,R);for(let t=0;t<6;t++)B(e,6+t%3*5,6+Math.floor(t/3)*6,2,2,z);V(e)},orwell:e=>{e.beginPath(),e.arc(18,18,11,0,Math.PI*2),e.fillStyle=R,e.fill(),e.strokeStyle=L,e.lineWidth=2,e.stroke();for(let t of[4,8])e.beginPath(),e.ellipse(18,18,t,11,0,0,Math.PI*2),e.stroke();H(e,[[7,18],[29,18]],L,1.5),In(e,30,14,14,Math.PI*1.15,Math.PI*1.85,L,10),B(e,39,3,6,4,L)}},Vn=[e=>H(e,Array.from({length:23},(e,t)=>[3+t*2,16-Math.sin(t*.57)*9])),e=>H(e,[[3,16],[9,7],[21,25],[33,7],[45,25]]),e=>H(e,[[3,25],[3,7],[14,7],[14,25],[25,25],[25,7],[36,7],[36,25],[45,25]]),e=>H(e,[[3,25],[15,7],[15,25],[27,7],[27,25],[39,7],[39,25],[45,18]]),e=>{let t=Rn(4);H(e,Array.from({length:22},(e,n)=>[3+n*2,8+t()*16]))},e=>{U(e,17,23,5,4),H(e,[[21,23],[21,5],[32,9]],L,2.5),U(e,31,19,4,3),H(e,[[34,19],[34,8]],L,2)}];function Hn(e){let t=e.getContext(`2d`),n=t.getImageData(0,0,jn,Mn),r=n.data;for(let e=0;e<Mn;e++)for(let t=0;t<jn;t++){let n=(e*jn+t)*4;if(r[n+3]<110){r[n+3]=0;continue}let i=(r[n]+r[n+1]+r[n+2])/765,a;a=i<.3?0:i>.8?255:(t+e)%2?0:-1,a<0?r[n+3]=0:(r[n]=r[n+1]=r[n+2]=a?236:8,r[n+3]=255)}return t.putImageData(n,0,0),e.toDataURL()}function Un(e){let t=document.createElement(`canvas`);t.width=jn,t.height=Mn;let n=t.getContext(`2d`);return n.lineCap=`square`,n.lineJoin=`miter`,e(n),Hn(t)}var Wn=new Map;function Gn(e,t){let n=Wn.get(e);return n||(n=Un(t),Wn.set(e,n)),n}function Kn(e,t=z){for(let n=0;n<9;n++){let r=n/9*Math.PI*2;H(e,[[24,16],[24+Math.cos(r)*26,16+Math.sin(r)*18]],t,1)}for(let n of[5,10,15])e.beginPath(),e.ellipse(24,16,n*1.4,n,0,0,Math.PI*2),e.strokeStyle=t,e.lineWidth=1,e.stroke()}var qn=[e=>{B(e,3,3,42,26,R),W(e,[[14,9],[34,5],[36,21],[12,26]])},e=>{B(e,3,3,42,26,R),W(e,[[5,10],[22,10],[22,22],[5,22]]),W(e,[[26,10],[43,10],[43,22],[26,22]])},e=>{B(e,3,3,42,26,R),e.beginPath(),e.ellipse(24,16,18,9,0,0,Math.PI*2),e.strokeStyle=L,e.lineWidth=1.5,e.stroke(),W(e,[[6,12],[16,13],[16,20],[6,21]]),W(e,[[30,9],[42,8],[42,17],[30,18]])},e=>{B(e,3,3,42,26,R),W(e,[[21,13],[27,13],[27,18],[21,18]]),W(e,[[30,18],[46,20],[44,31],[29,29]]),Fn(e,[[12,8],[6,4]])},e=>{for(let[t,n]of[[3,3],[24,3],[3,16],[24,16]])B(e,t,n,21,13,z),U(e,t+(t<10?15:6),n+(n<10?9:4),4,3,R)},e=>{B(e,3,3,42,26,L),Kn(e)},e=>{B(e,3,3,42,26,L);let t=Rn(8);for(let n=0;n<40;n++)B(e,3+t()*40,3+t()*24,2,2,t()<.5?z:R)},e=>{B(e,3,3,42,26,R),V(e)}],Jn=e=>Gn(`b`+e,qn[e]),Yn=e=>Gn(`t`+e,zn[e]||(e=>V(e))),Xn=e=>Gn(`v`+e,Vn[e]),Zn=e=>Gn(`l`+e,t=>{e===0?Ln(t,10,4,28,24):Bn[[``,`fin`,`tower`,`garden`,`clock`,`moon`,`fish`,`cello`,`buddha`,`flag`,`highway`][e]](t)}),Qn=[{name:`PAIK-ABE`,hues:[0,.08,.16,.33,.5,.66,.83],sat:1,colors:[]},{name:`FIRE`,hues:[.98,.02,.05,.08,.12,.15,.17],sat:1,colors:[]},{name:`ICE`,hues:[.6,.58,.55,.52,.5,.48,.45],sat:.8,colors:[]},{name:`GROOVE`,hues:[.83,.33,.95,.5,.12,.7,.2],sat:1,colors:[]},{name:`PHOSPHOR`,hues:[.33,.33,.33,.33,.33,.33,.33],sat:.9,colors:[]},{name:`SUNSET`,hues:[.75,.85,.95,.02,.06,.1,.14],sat:1,colors:[]},{name:`FLAG`,hues:[0,0,.66,.66,0,.66,0],sat:.95,colors:[]},{name:`PASTEL`,hues:[.9,.1,.2,.4,.55,.7,.8],sat:.45,colors:[]}];for(let e of Qn)e.colors=e.hues.map(t=>`hsl(${Math.round(t*360)} ${Math.round(e.sat*100)}% 50%)`);function $n(e){let t=Qn[e];s.color.on=!0,s.color.hues=t.hues.slice(),s.color.sat=t.sat,d()}function er(){Object.assign(s.scan,{hSize:1,vSize:1,hPos:0,vPos:0,rot:0}),s.scan.osc.forEach(e=>e.amp=0)}function tr(e){er();let t=s.scan;t.on=!0;let n=t.osc;switch(e){case 0:n[0]={target:0,wave:0,freq:3,rate:.4,amp:.15};break;case 1:s.magnet.list=[{x:0,y:0,s:2.2,r:.5,type:0,born:0}];break;case 2:t.vSize=.004;break;case 3:t.vSize=.004,t.rot=90;break;case 4:n[2]={target:2,wave:0,freq:1,rate:.3,amp:.35};break;case 5:n[0]={target:0,wave:1,freq:7,rate:.1,amp:.3};break;case 6:n[0]={target:0,wave:4,freq:40,rate:3,amp:.12};break;case 7:t.rot=30}d()}function nr(e){return v(`p`,{class:`hint`},e)}function rr(...e){return v(`div`,{class:`keys`},...e)}function G(e,...t){return v(`div`,{class:`sec`},v(`div`,{class:`sec-t`},e),...t.filter(Boolean))}var ir={scan:()=>{let e=s.scan,t=e.osc.map((e,t)=>v(`div`,{class:`osc`},v(`div`,{class:`osc-t`},`OSC ${t+1}`),T(``,e,`target`,[[0,`H`],[1,`V`],[2,`SIZE`]]),T(``,e,`wave`,[0,1,2,3,4,5].map(e=>[e,v(`img`,{class:`wv`,src:Xn(e),alt:``})]),void 0,`waves`),w(`FREQ`,e,`freq`,0,60,.5),w(`RATE`,e,`rate`,-4,4,.05),w(`AMP`,e,`amp`,0,1,.01)));return[G(`RASTER`,rr(E(`ON`,e,`on`),C(`ZEN`,{cls:`small`,onPress:()=>(Object.assign(e,{on:!0,vSize:.004,rot:90}),d())}),C(`RESET`,{cls:`small`,onPress:()=>(er(),d())}))),G(`SIZE · POSITION`,w(`H SIZE`,e,`hSize`,0,2,.01),w(`V SIZE`,e,`vSize`,0,2,.01),w(`H POS`,e,`hPos`,-1,1,.01),w(`V POS`,e,`vPos`,-1,1,.01),T(`ROTATE`,e,`rot`,[[0,`0`],[90,`90`],[180,`180`],[270,`270`]]),w(`FINE`,e,`rot`,-180,360,1),w(`LINES`,e,`lines`,0,525,1)),G(`OSCILLATORS`,...t,nr(`H: 줄마다 옆으로 · V: 세로로 · SIZE: 화면이 숨쉬듯. 파형 ♪는 음악 크기를 따릅니다`))]},magnet:()=>{let e=s.magnet;return[G(`MAGNETS · 최대 2개`,rr(C(`TOOL ▸ MAGNET`,{cls:`small`,lit:()=>s.tools.mode===`magnet`,onPress:()=>(s.tools.mode=s.tools.mode===`magnet`?`none`:`magnet`,d())}),C(`N⇄S`,{cls:`small`,onPress:()=>(e.list.forEach(e=>e.s=-e.s),d())}),C(`CLEAR`,{cls:`small`,onPress:()=>(e.list=[],d())})),nr(`TOOL ▸ MAGNET을 켜고 모니터를 누르면 자석이 놓입니다. 세 번째를 놓으면 가장 오래된 것이 빠집니다. 자석의 ×를 누르거나 화면 밖으로 끌면 지워집니다.`),T(`KIND`,e,`type`,[[0,`RING · 소용돌이`],[1,`BAR · 밀기`]],()=>e.list.forEach(t=>t.type=e.type))),G(`FIELD`,w(`STRENGTH`,e,`strength`,0,4,.1,void 0,()=>e.list.forEach(t=>t.s=Math.sign(t.s||1)*e.strength)),w(`RADIUS`,e,`radius`,.1,1.5,.05,void 0,()=>e.list.forEach(t=>t.r=e.radius)),w(`COLOR SPLIT`,e,`purity`,0,1.5,.05)),G(`COIL`,w(`AUDIO`,e,`audio`,0,2,.1),rr(E(`DRIFT`,e,`drift`)),nr(`AUDIO: 소리 크기만큼 자석이 세졌다 약해집니다 (닉슨 TV의 코일)`))]},color:()=>{let e=s.color,t=v(`div`,{class:`keys`});return e.hues.forEach((n,r)=>{let i=v(`button`,{class:`chip big`,type:`button`});S(i,()=>{i.style.background=`hsl(${Math.round(e.hues[r]*360)} ${Math.round(e.sat*100)}% 50%)`,i.style.opacity=r<e.bands?`1`:`.25`}),i.addEventListener(`click`,()=>{e.hues[r]=(e.hues[r]+1/12)%1,d()}),t.append(i)}),[G(`COLORIZER`,rr(E(`ON`,e,`on`),E(`SMOOTH`,e,`smooth`),E(`NEG`,e,`neg`))),G(`BANDS`,w(`COUNT`,e,`bands`,2,7,1),v(`div`,{class:`ctl`},v(`label`,null,`HUES`),t),nr(`색 칸을 누르면 색이 한 칸씩 돕니다`)),G(`LEVELS`,w(`GAIN`,e,`gain`,0,3,.05),w(`CONTRAST`,e,`contrast`,0,4,.05),w(`SATURATE`,e,`sat`,0,1,.05),w(`CYCLE`,e,`cycle`,-1,1,.01)),G(`PRESETS`,rr(...Qn.map((e,t)=>C(e.name,{cls:`small`,onPress:()=>$n(t)}))))]},fdbk:()=>{let e=s.fb;return[G(`LOOP`,rr(E(`ON`,e,`on`)),T(`MODE`,e,`mode`,[[0,`TUNNEL`],[1,`LUMA`],[2,`ECHO`],[3,`TRAIL`]])),G(`CAMERA ON MONITOR`,w(`SIZE`,e,`size`,.5,1.15,.01),w(`ROTATE`,e,`rot`,-.5,.5,.01),w(`HUE`,e,`hue`,-.2,.2,.005),w(`DECAY`,e,`decay`,.5,1,.01),w(`MIX`,e,`mix`,0,1,.01))]},delay:()=>{let e=s.delay;return[G(`CLOSED CIRCUIT`,T(`MODE`,e,`mode`,[[0,`OFF`],[1,`PAST`],[2,`MIX`],[3,`DIFF`]]),w(`TIME s`,e,`time`,0,4.2,.1),w(`AMOUNT`,e,`amount`,0,1,.05),nr(`PAST: 이 시간만큼 늦은 화면 · MIX: 겹침 · DIFF: 움직인 부분만`))]},wall:()=>{let e=s.wall,t=v(`div`,{class:`lay-grid`});return r.forEach((n,r)=>t.append(C(v(`span`,{class:`kf col`},v(`img`,{class:`ico s`,src:Zn(r),alt:``}),v(`small`,null,n)),{cls:`lay`,lit:()=>e.layout===r,onPress:()=>(e.layout=r,d())}))),[G(`LAYOUT`,t),G(`GRID`,w(`COLS`,e,`cols`,1,12,1),w(`ROWS`,e,`rows`,1,12,1)),G(`SIGNAL`,T(``,e,`dist`,[[0,`SAME`],[1,`SPAN`],[2,`CHASE`],[3,`SHUFFLE`]]),w(`VARIANCE`,e,`variance`,0,1,.05),nr(`CHASE: 모니터마다 조금씩 늦게 · SHUFFLE: 모니터마다 다른 처리`))]},synth:()=>{let e=s.synth;return[G(`BEAM`,T(`MODE`,e,`mode`,[[0,`LISSAJOUS`],[1,`SOUND`],[2,`ROSE`]]),nr(`SOUND: 지금 나는 클립 소리가 빔을 휩니다`)),G(`OSC`,w(`X FREQ`,e,`fx`,1,12,1),w(`Y FREQ`,e,`fy`,1,12,1),w(`DRIFT`,e,`drift`,-2,2,.05),w(`GAIN`,e,`gain`,.1,3,.05)),G(`PHOSPHOR`,w(`PERSIST`,e,`persist`,0,.98,.01),w(`WIDTH`,e,`width`,.5,6,.1),te(`COLOR`,e,`color`,[`#7dff7d`,`#60c8ff`,`#ffffff`,`#ffb040`,`#ff60ff`,`#ff4040`]))]},box:()=>{let e=s.pip,t=v(`div`,{class:`lay-grid`});return[`TILT`,`ROW`,`ORBIT`,`FLY`].forEach((n,r)=>t.append(C(v(`span`,{class:`kf col`},v(`img`,{class:`ico s`,src:Jn(r),alt:``}),v(`small`,null,n)),{cls:`lay`,lit:()=>e.layout===r,onPress:()=>(e.layout=r,e.on=!0,d())}))),[G(`CARDS`,rr(E(`ON`,e,`on`)),t,w(`COUNT`,e,`n`,1,3,1),w(`TILT`,e,`tilt`,0,1.5,.05),w(`SPIN`,e,`spin`,-1,1,.05),w(`SIZE`,e,`scale`,.2,.9,.05)),G(`LOOK`,T(`BACK`,e,`bg`,[[0,`MIRROR`],[1,`WEB`],[2,`SPARKLE`],[3,`MATTE`]]),te(`BORDER`,e,`border`,[`#e03020`,`#f0f0f0`,`#101010`,`#f0d020`,`#2040e0`]),w(`BORDER W`,e,`bw`,0,20,1),rr(E(`SHADOW`,e,`shadow`))),nr(`두 번째 카드에는 바로 전에 쓴 클립이 나옵니다`)]},cg:()=>{let e=s.cg,t=()=>e.serial++;return[G(`PAGE`,T(``,e,`mode`,[[`off`,`OFF`],[`title`,`TITLE`],[`lower`,`LOWER`],[`doc`,`DOC`],[`crawl`,`CRAWL`],[`credits`,`CREDIT`]],t),T(`STYLE`,e,`style`,[[`chyron`,`CHYRON`],[`cycle`,`CYCLE`],[`neg`,`NEG`]]),rr(C(`RE-TYPE`,{cls:`small`,onPress:()=>(t(),d())}),E(`TIMECODE`,e,`tc`),E(`BIG TC`,e,`tcBig`),E(`SATELLITE`,e,`sat`))),G(`TEXT`,ne(`TITLE`,e,`title1`),ne(`SUB`,e,`title2`),ne(`LOWER 1`,e,`lower1`),ne(`LOWER 2`,e,`lower2`),ne(`DOC TOP`,e,`docTop`,!0),ne(`DOC`,e,`doc`,!0),ne(`CRAWL`,e,`crawl`,!0),ne(`CREDITS`,e,`credits`,!0))]},tape:e=>{let t=s.vhs,n=(e,n)=>C(e,{cls:`small`,onPress:()=>(Object.assign(t,n),d())});return[G(`PRESET`,rr(n(`CLEAN`,{bleed:0,scan:0,track:0,chroma:0,lines:0,interlace:0,noise:0,head:0,sat:1,warm:0,roll:0}),n(`U-MATIC`,{bleed:.8,scan:.35,track:.04,chroma:1,lines:480,interlace:.2,noise:.08,head:.3,sat:1,warm:.1}),n(`VHS`,{bleed:1.4,scan:.45,track:.15,chroma:1.8,lines:480,interlace:.3,noise:.15,head:.7,sat:1.05,warm:.3}),n(`WORN`,{bleed:2.4,scan:.55,track:.45,chroma:3,lines:300,interlace:.4,noise:.35,head:1,sat:.75,warm:.6}))),G(`SIGNAL`,w(`BLEED`,t,`bleed`,0,3,.1),w(`CHROMA`,t,`chroma`,0,6,.1),w(`TRACKING`,t,`track`,0,1,.01),w(`HEAD SW`,t,`head`,0,1.5,.05),w(`NOISE`,t,`noise`,0,1,.01),w(`ROLL`,t,`roll`,-2,2,.05),w(`SATURATE`,t,`sat`,0,2,.05)),G(`RASTER`,w(`LINES`,t,`lines`,0,720,20),w(`SCANLINE`,t,`scan`,0,1,.05),w(`INTERLACE`,t,`interlace`,0,1,.05),rr(E(`4:3 BOX`,t,`box43`))),G(`ARCHIVE`,rr(C(`TAPE SHELF ▸`,{cls:`small`,onPress:()=>e.openTapes()})))]},setup:e=>{let{renderer:t}=e,n=s.output,r=()=>{t.setOutput(n.aspect,n.quality),ae()},i=s.trans;return[G(`OUTPUT`,T(`ASPECT`,n,`aspect`,[[`9:16`,`9:16`],[`4:3`,`4:3`],[`1:1`,`1:1`],[`16:9`,`16:9`]],r),T(`SIZE`,n,`quality`,[[`sd`,`SD`],[`hd`,`HD`]],r),nr(`휴대폰이 버거워하면 SD로`)),G(`CLIP CHANGE`,T(`DEFAULT`,i,`id`,[[-1,`CUT`],[0,`DISSOLVE`],[1,`WIPE`],[7,`PIXELS`],[24,`TV-OFF`],[35,`GLITCH`]]),w(`BEATS`,i,`beats`,.25,4,.25),nr(`패드마다 따로 정할 수도 있습니다 (EDIT ▸ 패드)`)),G(`SCREEN`,T(`SCANLINES`,s.ui,`crt`,[[0,`OFF`],[1,`ON`]],()=>document.documentElement.setAttribute(`data-crt`,String(s.ui.crt))),rr(E(`KEY CLICKS`,s.audio,`sfx`),E(`VIBRATE`,s.audio,`haptics`)),nr(`키 소리는 스피커로만 나고 녹화에는 들어가지 않습니다`)),G(`ARCHIVE`,rr(C(`TAPE SHELF ▸`,{cls:`small`,onPress:()=>e.openTapes()}))),G(`ABOUT`,nr(`PREPARED TV — 백남준의 "장치된 TV"(1963)에서 이름을 땄습니다. 모든 처리는 기기 안에서 합니다.`),nr(`글꼴 Galmuri·Nanum Pen Script(OFL), 인물/사물 분리 MediaPipe(Apache-2.0). 테스트 클립의 그림과 소리는 앱이 직접 만듭니다.`))]}};function ar(e,t){let n=v(`div`,{class:`scr scr-${e}`}),r=()=>{n.textContent=``,n.append(...(ir[e]?.(t,r)||[]).filter(Boolean)),x()};return r(),n}var or;function sr(e){or=e}var K=(e,t,n,r,i,a)=>({label:e,obj:t,prop:n,min:r,max:i,step:a}),q=s.moor;function cr(e,t,n,r,i,a){return{id:e,name:t,ko:n,no:r,about:a,on:()=>s.scene.bgOverride===i,set:e=>{s.scene.bgOverride=e?i:-1,e&&!or.hasObjects()&&(or.person(!1),or.toast(`사람을 따내서 앞에 세웠어요 (OBJ 1). 배경만 바뀝니다`))}}}var lr=e=>({on:()=>e.on,set:t=>e.on=t}),ur=[{id:`paikabe`,name:`PAIK-ABE`,ko:`윤곽+색면`,no:2,...lr(q.paikabe),link:{echo:.3,wow:.2},params:()=>[K(`LINES`,q.paikabe,`lines`,1,6,1),K(`FIELD`,q.paikabe,`field`,0,1,.05),K(`SMEAR`,q.paikabe,`smear`,0,.97,.01)],about:`밝기 경계를 가는 분홍·흰 선으로, 뒤는 번지는 원색 덩어리로`},{id:`ribbon`,name:`RIBBON`,ko:`흰 리본`,no:3,...lr(q.ribbon),params:()=>[K(`LEVEL`,q.ribbon,`level`,.1,.9,.01),K(`WIDTH`,q.ribbon,`width`,.02,.2,.01),K(`FRINGE`,q.ribbon,`fringe`,0,1,1)],about:`한 밝기 단계를 굵은 흰 물결 띠로, 바깥에 초록 점선`},cr(`zigzag`,`ZIGZAG`,`지그재그 키`,4,9,`사람(객체)만 남기고 뒤를 주황·파랑 물결 줄무늬로`),{id:`rutt`,name:`RUTT`,ko:`주사선 등고선`,no:5,...lr(q.rutt),link:{wow:.5},params:()=>[K(`LINES`,q.rutt,`lines`,16,140,2),K(`HEIGHT`,q.rutt,`height`,.02,.4,.01),K(`COLOR`,q.rutt,`color`,0,2,1)],about:`가로선이 밝은 만큼 솟아 산맥처럼`},{id:`breakup`,name:`BREAK-UP`,ko:`픽셀 깨짐`,no:6,...lr(q.breakup),link:{crush:.7},params:()=>[K(`BLOCK`,q.breakup,`block`,.01,.15,.005),K(`AMOUNT`,q.breakup,`amount`,0,1,.05)],about:`보라·흰 블록으로 부서지는 프레임`},{id:`reshoot`,name:`RESHOOT`,ko:`모니터 재촬영`,no:7,...lr(q.reshoot),link:{radio:.7},params:()=>[K(`TINT`,q.reshoot,`tint`,0,1,.05),K(`ZOOM`,q.reshoot,`zoom`,.4,1,.01),K(`CURVE`,q.reshoot,`curve`,0,1,.05)],about:`초록빛 TV 화면을 카메라로 다시 찍은 듯이`},{id:`dissolve`,name:`DISSOLVE 3`,ko:`다중 디졸브`,no:8,on:()=>s.scene.overlay>0,set:e=>s.scene.overlay=e?.8:0,params:()=>[K(`AMOUNT`,s.scene,`overlay`,0,1,.05)],about:`다른 클립 두 개가 반투명하게 천천히 겹침`},{id:`poster2`,name:`POSTER 2`,ko:`두 색 포스터`,no:9,on:()=>q.poster2.on,set:e=>(e&&(q.poster2.pair=(q.poster2.pair+1)%4),q.poster2.on=e),params:()=>[K(`PAIR`,q.poster2,`pair`,0,3,1)],about:`두 색 + 빨간 외곽선. 켤 때마다 색 쌍이 바뀜`},{id:`tc`,name:`TIMECODE`,ko:`화면 속 타임코드`,no:10,on:()=>s.cg.tc&&s.cg.tcBig,set:e=>(s.cg.tc=e,s.cg.tcBig=e),screen:`cg`,about:`편집용 사본처럼 큰 숫자. 클립 시간을 따라감`},{id:`doc`,name:`DOC TITLE`,ko:`기록 자막`,no:11,on:()=>s.cg.mode===`doc`,set:e=>(s.cg.mode=e?`doc`:`off`,s.cg.serial++),screen:`cg`,about:`가운데 대문자 여러 줄 + 위 작은 회색 제목`},{id:`name`,name:`NAME`,ko:`이름 자막`,no:12,on:()=>s.cg.mode===`lower`,set:e=>(s.cg.mode=e?`lower`:`off`,s.cg.serial++),screen:`cg`,about:`아래 이름 자막`},{id:`smear`,name:`SMEAR`,ko:`흔들린 클로즈업`,no:13,...lr(q.smear),link:{wow:.4},params:()=>[K(`AMOUNT`,q.smear,`amount`,.1,1,.05),K(`ANGLE`,q.smear,`angle`,-3.14,3.14,.1)],about:`가까이 대고 흔든 카메라처럼 번짐`},{id:`black`,name:`BLACK`,ko:`검은 프레임`,no:14,on:()=>s.scene.black,set:e=>s.scene.black=e,params:()=>[K(`ON CUTS`,s.scene,`blackOnCut`,0,1,.05)],about:`누르는 동안 검정. ON CUTS: 컷마다 검은 프레임이 끼어들 확률`},cr(`barstretch`,`BAR STRETCH`,`늘어난 컬러바`,15,11,`컬러바가 줄무늬로 늘었다 줄었다, 사이에 스노`),{id:`bgcycle`,name:`BG CYCLE`,ko:`배경 순환`,no:16,on:()=>s.scene.bgCycle,set:e=>s.scene.bgCycle=e,about:`박자마다 다음 CLIP 패드로 배경 교체. 객체는 그대로`},{id:`lineart`,name:`LINE ART`,ko:`메트로놈 선화`,no:18,...lr(q.lineart),params:()=>[K(`CIRCLES`,q.lineart,`circles`,0,1,1),K(`COLOR`,q.lineart,`bgIndex`,0,5,1)],about:`외곽선만, 작은 동그라미, 박자마다 바뀌는 단색 바탕`}],dr=e=>({on:()=>s.era.on[e],set:t=>s.era.on[e]=t}),fr=[{id:`mirror`,name:`MIRROR 4`,ko:`4방향 대칭`,no:19,on:()=>s.era.on[3],set:e=>(s.era.on[3]=e,e&&(s.era.amt[3]=3)),about:`상하좌우로 접은 대칭 화면`},{id:`cards`,name:`CARDS`,ko:`회전 카드`,no:20,on:()=>s.pip.on,set:e=>s.pip.on=e,screen:`box`,about:`기울인 사진 카드가 겹쳐 돔`},cr(`ornament`,`ORNAMENT`,`클립아트+컬러바`,21,13,`클립아트를 4방향으로, 가운데 기운 컬러바 카드. 박자마다 바뀜`),{id:`grid`,name:`GRID`,ko:`격자 반복`,no:22,...dr(0),about:`같은 장면이 격자로, 칸마다 조금씩 늦게`},{id:`window`,name:`WINDOW`,ko:`원형 창`,no:23,on:()=>or.windowOn(),set:e=>or.window(e),about:`가운데 원 안에 다른 클립. OBJ 목록에서 모양·크기를 바꿈`},cr(`sunburst`,`SUNBURST`,`방사형 색 띠`,24,10,`중심에서 뻗는 무지개 띠와 바둑판 고리`),cr(`barbend`,`BAR BEND`,`휜 컬러바`,25,12,`컬러바를 리본처럼 구부림`),{id:`head`,name:`HEAD SW`,ko:`아래 세로 번짐`,no:26,on:()=>s.vhs.head>.9,set:e=>s.vhs.head=e?1.4:.3,about:`화면 맨 아래 몇 줄이 테이프 헤드 전환으로 번짐`},{id:`stutter`,name:`STUTTER`,ko:`A-B 스터터`,no:1,on:()=>s.scene.stutter,set:e=>s.scene.stutter=e,link:{gate:.6},about:`마지막 두 클립을 8분음표마다 번갈아. 소리도 같이`},{id:`color`,name:`COLORIZER`,ko:`컬러라이저`,on:()=>s.color.on,set:e=>e?$n(0):s.color.on=!1,screen:`color`,about:`밝기 단계마다 다른 색 (백-아베 신시사이저)`},{id:`fdbk`,name:`FEEDBACK`,ko:`피드백`,on:()=>s.fb.on,set:e=>s.fb.on=e,link:{echo:.7},screen:`fdbk`,about:`모니터를 찍는 카메라처럼 화면이 끝없이 들어감`},{id:`echo`,name:`ECHO`,ko:`시간 지연`,on:()=>s.delay.mode>0,set:e=>s.delay.mode=e?2:0,link:{echo:.5},screen:`delay`,about:`조금 전 화면이 겹쳐 보임`},{id:`scan`,name:`SCAN`,ko:`주사 변조`,on:()=>s.scan.on,set:e=>e?tr(0):s.scan.on=!1,link:{wow:.5},screen:`scan`,about:`전자빔이 줄마다 흔들림`},{id:`magnet`,name:`MAGNET`,ko:`자석`,on:()=>s.magnet.list.length>0,set:e=>s.magnet.list=e?[{x:0,y:.1,s:2.2,r:.55,type:0,born:performance.now()}]:[],link:{wow:.4},screen:`magnet`,about:`가운데 자석 하나. TOOLS ▸ MAGNET으로 두 개까지 직접 놓기`},{id:`snow`,name:`SNOW`,ko:`스노`,on:()=>pr,set:e=>pr=e,link:{radio:.3,crush:.3},about:`빈 채널의 눈. 누르는 동안`},{id:`wall`,name:`TV WALL`,ko:`TV 벽`,on:()=>s.wall.layout>0,set:e=>s.wall.layout=+!!e,screen:`wall`,about:`모니터 여러 대에 나눠 보임`}],pr=!1,mr=[1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17],hr={5:{crush:.6},14:{crush:.5},15:{crush:.4},1:{gate:.5},6:{echo:.4}},gr=mr.map(t=>({id:`era`+t,name:e[t].name,ko:e[t].ko,...dr(t),link:hr[t],params:e[t].amt?()=>[K(e[t].amt,s.era.amt,String(t),e[t].min,e[t].max,e[t].step)]:void 0})),_r=``,vr=[ur,fr,gr,kn.map(e=>({id:`work-`+e.id,name:e.title.length>12?e.title.split(` `).slice(0,2).join(` `):e.title,ko:`${e.ko} ${e.year}`,screen:e.screen,about:e.about,on:()=>_r===e.id,set:t=>{t?(_r=e.id,An(e,or)):(_r=``,On())}}))],yr=[`MOORMAN 1`,`MOORMAN 2`,`ERA`,`WORKS`];function br(){return vr.flat()}function xr(){let e={crush:0,echo:0,wow:0,gate:0,radio:0};if(!s.sound.link)return e;for(let t of br())if(t.link&&t.on())for(let n of Object.keys(t.link))e[n]=Math.max(e[n],t.link[n]??0);return s.magnet.list.length&&(e.wow=Math.max(e.wow,.35)),e}var Sr=class e{scene;obj;held=new Map;flash=new Map;constructor(e,t){this.scene=e,this.obj=t}static key(e,t,n){return`${e}:${t}:${n}`}down(t,n,r,i=N(),a=!1){let o=e.key(t,n,r),c={mode:t,bank:n,i:r,t0:i,wasOn:!1,next:0,holdFired:!1};if(this.flash.set(o,i),t===`clip`)this.scene.press(n*16+r,i);else if(t===`chop`)this.scene.chop(r,i);else if(t===`fx`){let e=vr[n]?.[r];if(!e)return;c.wasOn=e.on(),c.wasOn||e.set(!0),s.ui.focus=`fx:`+e.id}else t===`obj`&&r>=4&&this.obj.pad(r);s.seq.repeat&&(t===`clip`||t===`chop`)&&(c.next=P.next(i+.01,16/s.seq.rate)),this.held.set(o,c),a||I.record({mode:t,bank:n,i:r,down:!0},i),d()}up(t,n,r,i=N(),a=!1,o){let s=e.key(t,n,r),c=this.held.get(s);this.held.delete(s);let l=o??(c?i-c.t0>=.28:!1);if(t===`clip`)this.scene.release(n*16+r,l,i);else if(t===`fx`){let e=vr[n]?.[r];e&&c&&(c.wasOn&&!l||!c.wasOn&&l)&&e.set(!1)}else t===`obj`&&r<4&&(l?this.obj.solo(r,!1):this.obj.toggle(r));a||I.record({mode:t,bank:n,i:r,down:!1,held:l},i),d()}fire(e,t){e.down?this.down(e.mode,e.bank,e.i,t,!0):this.up(e.mode,e.bank,e.i,t,!0,e.held)}tick(t=N()){for(let n of this.held.values())if(!n.holdFired&&t-n.t0>=.28&&(n.holdFired=!0,n.mode===`obj`&&n.i<4&&this.obj.solo(n.i,!0)),s.seq.repeat&&n.next&&(n.mode===`clip`||n.mode===`chop`))for(;n.next<=t+.03;)n.mode===`clip`?this.scene.retrigger(n.bank*16+n.i,n.next):this.scene.chop(n.i,n.next),this.flash.set(e.key(n.mode,n.bank,n.i),n.next),n.next=P.next(n.next+.001,16/s.seq.rate)}releaseAll(){for(let e of[...this.held.values()])this.up(e.mode,e.bank,e.i)}},Cr=`prepared-tv-samples`;function wr(){return new Promise((e,t)=>{let n=indexedDB.open(Cr,1);n.onupgradeneeded=()=>n.result.createObjectStore(`pads`,{keyPath:`slot`}),n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}async function Tr(e,t){let n=await wr();return new Promise((r,i)=>{let a=t(n.transaction(`pads`,e).objectStore(`pads`));a.onsuccess=()=>r(a.result),a.onerror=()=>i(a.error)})}async function Er(e){let t=j[e];try{if(!t||!t.blob)return void await Tr(`readwrite`,t=>t.delete(e));let n={slot:e,name:t.name,blob:t.blob,loopIn:t.loopIn,loopOut:t.loopOut,speed:t.speed,inStyle:t.inStyle,gain:t.gain,slices:t.slices,sliceMode:t.sliceMode};await Tr(`readwrite`,e=>e.put(n))}catch(e){console.warn(`pad not saved`,e)}}async function Dr(e){try{await Tr(`readwrite`,t=>t.delete(e))}catch{}}var Or=new Map;function kr(e){clearTimeout(Or.get(e)),Or.set(e,window.setTimeout(()=>void Er(e),900))}async function Ar(e){let t=[];try{t=await Tr(`readonly`,e=>e.getAll())}catch{return}for(let n of t)try{let t=await Nt(n.blob,n.name);t.name=n.name,Object.assign(t,{loopIn:n.loopIn,loopOut:Math.min(n.loopOut,t.duration),speed:n.speed,inStyle:n.inStyle,gain:n.gain,slices:n.slices,sliceMode:n.sliceMode}),j[n.slot]=t,e()}catch(e){console.warn(`pad restore failed`,e)}}var jr=`modulepreload`,Mr=function(e,t){return new URL(e,t).href},Nr={},Pr=function(e){return e.pathname.endsWith(`.css`)},Fr=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Ir=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Mr(t,n);let r=s(t),i=Pr(r);return Fr(Nr,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:jr,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Lr=()=>new URL(`./`,document.baseURI).href;async function Rr(e){try{let t=await fetch(Lr()+e);if(t.ok&&!(t.headers.get(`content-type`)||``).includes(`html`))return await t.arrayBuffer()}catch{}let t=await(await fetch(Lr()+e+`.json`)).json(),n=atob(t),r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r.buffer}var zr=class{model=null;tf=null;c=document.createElement(`canvas`);x=this.c.getContext(`2d`,{willReadFrequently:!0});busy=!1;async load(){let e=await Ir(()=>import(`./dist-C_52oek8.js`).then(e=>e.t),[],import.meta.url);await Ir(()=>import(`./dist-CHi3dtUT.js`),__vite__mapDeps([0,1]),import.meta.url);let{loadGraphModel:t}=await Ir(async()=>{let{loadGraphModel:e}=await import(`./dist-CtMjQmT9.js`);return{loadGraphModel:e}},__vite__mapDeps([2,1]),import.meta.url);await e.setBackend(`webgl`),await e.ready();let n=await(await fetch(Lr()+`models/tfjs-selfie/model.json`)).json(),r=await Rr(`models/tfjs-selfie/group1-shard1of1.bin`);this.model=await t(e.io.fromMemory({modelTopology:n.modelTopology,weightSpecs:n.weightsManifest[0].weights,weightData:r})),this.tf=e,this.c.width=this.c.height=256}async run(e){let t=this.tf,n=this.model;if(!t||!n||this.busy)return null;this.busy=!0;try{this.x.drawImage(e,0,0,256,256);let r=t.tidy(()=>{let e=t.expandDims(t.div(t.cast(t.browser.fromPixels(this.c),`float32`),255),0),r=n.predict(e);return t.slice(r,[0,0,0,1],[1,256,256,1])}),i=await r.data();r.dispose();let a=new Uint8Array(i.length);for(let e=0;e<i.length;e++)a[e]=Math.max(0,Math.min(255,i[e]*255));return a}finally{this.busy=!1}}},Br=null,Vr=()=>new URL(`./`,document.baseURI).href;async function Hr(){return Br||(Br=Ir(async()=>{let{FilesetResolver:e}=await import(`./vision_bundle-ciZpqDg5.js`);return{FilesetResolver:e}},[],import.meta.url).then(({FilesetResolver:e})=>e.forVisionTasks(Vr()+`mediapipe`)),Br.catch(()=>Br=null)),Br}var Ur=null;function Wr(){return Ur||=(async()=>{try{return await WebAssembly.compile(new Uint8Array([0,97,115,109,1,0,0,0])),!0}catch{return!1}})(),Ur}async function Gr(e){try{let t=await fetch(Vr()+`models/${e}.tflite`);if(t.ok&&!(t.headers.get(`content-type`)||``).includes(`html`))return new Uint8Array(await t.arrayBuffer())}catch{}let t=await fetch(Vr()+`models/${e}.json`);if(!t.ok)throw Error(`model ${e} not found (${t.status})`);let n=await t.json(),r=atob(n),i=new Uint8Array(r.length);for(let e=0;e<r.length;e++)i[e]=r.charCodeAt(e);return i}var Kr=class{c=document.createElement(`canvas`);x=this.c.getContext(`2d`);draw(e,t){let[n,r]=e instanceof HTMLVideoElement?[e.videoWidth,e.videoHeight]:e instanceof HTMLImageElement?[e.naturalWidth,e.naturalHeight]:e instanceof HTMLCanvasElement?[e.width,e.height]:[t,t],i=t/Math.max(n,r,1),a=Math.max(16,Math.round(n*i)),o=Math.max(16,Math.round(r*i));return(this.c.width!==a||this.c.height!==o)&&(this.c.width=a,this.c.height=o),this.x.drawImage(e,0,0,a,o),this.c}};function qr(e,t,n){let r=0,i=0,a=0;for(let n=0;n<e.length;n++)e[n]>127&&(r+=n%t,i+=n/t|0,a++);return{data:e,w:t,h:n,cx:a?(r/a+.5)/t:.5,cy:a?(i/a+.5)/n:.5,area:a/e.length}}var Jr=new class{tapStatus=`idle`;personStatus=`idle`;message=``;tap=null;person=null;tf=null;small=new Kr;ts=0;tapP=null;personP=null;loadTap(){return this.tapP??=(async()=>{this.tapStatus=`loading`,this.message=`사물 분리 모델 불러오는 중… (6MB)`;try{if(!await Wr())throw Error(`이 화면에서는 WebAssembly가 막혀 있어 TAP 대신 PERSON·KEY·SHAPE를 쓰세요`);let{InteractiveSegmenterLegacy:e}=await Ir(async()=>{let{InteractiveSegmenterLegacy:e}=await import(`./vision_bundle-ciZpqDg5.js`);return{InteractiveSegmenterLegacy:e}},[],import.meta.url),t=await Hr(),n=await Gr(`magic_touch`),r=r=>e.createFromOptions(t,{baseOptions:{modelAssetBuffer:n,delegate:r},outputCategoryMask:!1,outputConfidenceMasks:!0});try{this.tap=await r(`GPU`)}catch{this.tap=await r(`CPU`)}this.tapStatus=`ready`,this.message=``}catch(e){this.tapStatus=`error`,this.message=String(e.message||e),console.warn(`tap model failed`,e)}})(),this.tapP}loadPerson(){return this.personP??=(async()=>{this.personStatus=`loading`,this.message=`사람 분리 모델 불러오는 중…`;try{if(!await Wr())throw Error(`wasm blocked`);let{ImageSegmenter:e}=await Ir(async()=>{let{ImageSegmenter:e}=await import(`./vision_bundle-ciZpqDg5.js`);return{ImageSegmenter:e}},[],import.meta.url),t=await Hr(),n=await Gr(`selfie_segmenter`),r=r=>e.createFromOptions(t,{baseOptions:{modelAssetBuffer:n,delegate:r},runningMode:`VIDEO`,outputCategoryMask:!1,outputConfidenceMasks:!0});try{this.person=await r(`GPU`)}catch{this.person=await r(`CPU`)}this.personStatus=`ready`,this.message=``}catch(e){console.warn(`person model via mediapipe failed, trying tfjs`,e);try{this.tf=new zr,await this.tf.load(),this.personStatus=`ready`,this.message=``}catch(e){this.personStatus=`error`,this.message=`사람 분리 모델을 불러오지 못했어요`,console.warn(e)}}})(),this.personP}tapAt(e,t,n){if(!this.tap)return null;try{let r=this.small.draw(e,256),i=this.tap.segment(r,{keypoint:{x:Math.min(.999,Math.max(0,t)),y:Math.min(.999,Math.max(0,n))}}),a=i.confidenceMasks?.[0],o=null;if(a){let e=a.getAsFloat32Array(),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e[n]*255;o=qr(t,a.width,a.height)}return i.close?.(),o}catch(e){return console.warn(`tap segment error`,e),null}}async personOf(e){if(this.tf){let t=await this.tf.run(e);return t?qr(Uint8Array.from(t),256,256):null}if(!this.person)return null;let t=null;this.ts=Math.max(this.ts+1,performance.now());try{this.person.segmentForVideo(this.small.draw(e,256),this.ts,e=>{let n=e.confidenceMasks?.[0];if(n){let e=n.getAsFloat32Array(),r=new Uint8Array(e.length);for(let t=0;t<e.length;t++)r[t]=e[t]*255;t=qr(r,n.width,n.height)}e.close()})}catch(e){console.warn(`person segment error`,e)}return t}},Yr=20;function Xr(e,t,n,r,i){let a=document.createElement(`canvas`),o=72/Math.max(t,n);a.width=Math.max(8,Math.round(t*o)),a.height=Math.max(8,Math.round(n*o));let s=a.getContext(`2d`);s.fillStyle=`#101010`,s.fillRect(0,0,a.width,a.height);let c=document.createElement(`canvas`);c.width=r.w,c.height=r.h;let l=c.getContext(`2d`),u=l.createImageData(r.w,r.h);for(let e=0;e<r.data.length;e++)u.data[e*4+3]=r.data[e]>110?255:0;l.putImageData(u,0,0);let d=document.createElement(`canvas`);d.width=a.width,d.height=a.height;let f=d.getContext(`2d`);return f.drawImage(c,0,0,a.width,a.height),f.globalCompositeOperation=`source-in`,f.drawImage(e,0,0,a.width,a.height),s.drawImage(d,0,0),s.strokeStyle=i,s.lineWidth=3,s.strokeRect(1.5,1.5,a.width-3,a.height-3),a.toDataURL(`image/png`)}async function Zr(e){let t=e.player.s;if(t.kind===`test`){let e=document.createElement(`canvas`);e.width=360,e.height=640;let n=e.getContext(`2d`);return{at:async r=>(gt(n,t.test??0,r),e),size:[360,640],done:()=>{}}}if(t.kind===`image`){let e=new Image;return e.src=t.url,await e.decode().catch(()=>{}),{at:async()=>e,size:[e.naturalWidth||16,e.naturalHeight||9],done:()=>{}}}if(t.kind===`video`){let e=Mt(t.url);return await new Promise(t=>{e.addEventListener(`loadeddata`,()=>t(),{once:!0}),setTimeout(t,6e3)}),{at:async t=>(await jt(e,t),e.readyState>=2?e:null),size:[e.videoWidth||16,e.videoHeight||9],done:()=>{e.removeAttribute(`src`),e.load()}}}return null}var Qr=[],$r=!1;function ei(e,t){if(e.track&&(e.track.cancel=!0),e.player.live||e.kind!==`tap`&&e.kind!==`person`)return;let n=e.player,r=n.loopIn,i=Math.min(n.loopOut,n.loopIn+Yr,n.s.kind===`image`?n.loopIn+.01:1/0),a=n.s.kind===`image`?1:10,o=Math.max(1,Math.ceil((i-r)*a));e.track={fps:a,start:r,frames:Array(o).fill(null),cx:new Float32Array(o),cy:new Float32Array(o),w:0,h:0,done:0,running:!1,cancel:!1},Qr.push(e),ti(t)}async function ti(e){if(!$r){$r=!0;try{for(;Qr.length;){let t=Qr.shift();M.includes(t)&&t.track&&!t.track.cancel&&await ni(t,e)}}finally{$r=!1}}}async function ni(e,t){let n=e.track;n.running=!0,e.kind===`tap`?await Jr.loadTap():await Jr.loadPerson();let r=await Zr(e);if(!r){n.running=!1;return}let i=n.frames.length,a=Math.max(0,Math.min(i-1,Math.round((e.seed.t-n.start)*n.fps))),o=[];for(let e=a;e<i;e++)o.push(e);for(let e=a-1;e>=0;e--)o.push(e);let s=e.seed.x,c=e.seed.y,l=performance.now();for(let i of o){if(n.cancel||!M.includes(e))break;i===a-1&&(s=e.seed.x,c=e.seed.y);let o=await r.at(n.start+i/n.fps);if(!o)continue;let u=e.kind===`tap`?Jr.tapAt(o,s,c):await Jr.personOf(o);if(u){if(u.area>.002&&u.area<.85){let e=Math.min(u.w-1,Math.max(0,Math.round(u.cx*u.w))),t=Math.min(u.h-1,Math.max(0,Math.round(u.cy*u.h)));u.data[t*u.w+e]>127&&(s+=(u.cx-s)*.6,c+=(u.cy-c)*.6),n.frames[i]=u.data}else if(i!==a){let e=n.frames[i-1]??n.frames[i+1];e&&(n.frames[i]=e)}else n.frames[i]=u.data;n.w=u.w,n.h=u.h,n.cx[i]=u.cx,n.cy[i]=u.cy,n.done++,i===a&&!e.thumb&&(e.thumb=Xr(o,r.size[0],r.size[1],u,e.color)),e.maskStamp++,performance.now()-l>40&&(t(),await new Promise(e=>setTimeout(e,0)),l=performance.now())}}n.done=i,n.running=!1,r.done(),t()}var ri=0;function ii(e,t){let n=M.filter(e=>e.player.live&&(e.kind===`tap`||e.kind===`person`));if(!n.length)return;let r=n[ri++%n.length];if(r.liveBusy||t-r.liveAt<.12)return;let i=e(r);if(i){if(r.liveAt=t,r.kind===`tap`){Jr.tapStatus===`idle`&&Jr.loadTap();let e=Jr.tapAt(i,r.seed.x,r.seed.y);e&&e.area>.002&&e.area<.85&&(r.seed.x+=(e.cx-r.seed.x)*.5,r.seed.y+=(e.cy-r.seed.y)*.5,r.live=e,r.maskStamp++,!r.thumb&&i instanceof HTMLVideoElement&&(r.thumb=Xr(i,i.videoWidth,i.videoHeight,e,r.color)))}else Jr.personStatus===`idle`&&Jr.loadPerson(),r.liveBusy=!0,Jr.personOf(i).then(e=>{r.liveBusy=!1,e&&(r.live=e,r.maskStamp++)})}}var J=(e,t,n,r)=>({id:e,name:t,ko:n,sfx:r}),ai=[J(0,`DISSOLVE`,`디졸브`,`none`),J(1,`WIPE`,`와이프`,`swish`),J(2,`IRIS`,`아이리스`,`swish`),J(3,`DIAMOND`,`다이아몬드`,`swish`),J(4,`CLOCK`,`시계`,`swish`),J(5,`BLINDS`,`블라인드`,`swish`),J(6,`CHECKER`,`체커`,`zap`),J(7,`PIXELS`,`픽셀`,`zap`),J(8,`MELT`,`녹아내림`,`whoosh`),J(9,`FLIP-H`,`가로 뒤집기`,`whoosh`),J(10,`FLIP-V`,`세로 뒤집기`,`whoosh`),J(11,`ROLL`,`굴리기`,`whoosh`),J(12,`PUSH`,`밀기`,`swish`),J(13,`SPIN-OUT`,`회전 퇴장`,`whoosh`),J(14,`SPIN-IN`,`회전 등장`,`whoosh`),J(15,`PAGE`,`페이지턴`,`swish`),J(16,`CUBE`,`큐브`,`whoosh`),J(17,`DOORS`,`문 열기`,`whoosh`),J(18,`FLY`,`날아가기`,`whoosh`),J(19,`SHATTER`,`산산조각`,`thud`),J(20,`EXPLODE`,`폭발`,`thud`),J(21,`SWING`,`스윙`,`whoosh`),J(22,`ZOOM`,`줌 스루`,`whoosh`),J(23,`SQUEEZE`,`압축`,`swish`),J(24,`TV-OFF`,`TV 끄기`,`zap`),J(25,`STRIPS`,`스트립`,`swish`),J(26,`TILES`,`타일 뒤집기`,`ding`),J(27,`KALEIDO`,`만화경`,`ding`),J(28,`RIPPLE`,`물결`,`ding`),J(29,`SWIRL`,`소용돌이`,`whoosh`),J(30,`MOSAIC`,`모자이크`,`zap`),J(31,`PRISM`,`프리즘`,`ding`),J(32,`BURN`,`번`,`static`),J(33,`SPIRAL`,`스파이럴`,`ding`),J(34,`BOUNCE`,`바운스`,`thud`),J(35,`GLITCH`,`글리치`,`static`)];async function oi(e){let t=11025,n=Math.ceil(e.duration*t),r=new OfflineAudioContext(1,n,t),i=r.createBufferSource();i.buffer=e;let a=r.createBiquadFilter();a.type=`lowpass`,a.frequency.value=3e3,i.connect(a).connect(r.destination),i.start();let o=(await r.startRendering()).getChannelData(0),s=Math.floor(o.length/128),c=new Float32Array(s),l=0;for(let e=0;e<s;e++){let t=0;for(let n=0;n<128;n++){let r=o[e*128+n];t+=r*r}t=Math.log(1+100*t),c[e]=Math.max(0,t-l),l=t}let u=new Float32Array(s);for(let e=0;e<s;e++){let t=0,n=0;for(let r=Math.max(0,e-16);r<Math.min(s,e+16);r++)t+=c[r],n++;u[e]=Math.max(0,c[e]-t/n)}let d=t/128,f=28,p=-1;for(let e=28;e<=74;e++){let t=0;for(let n=e;n<s;n++)t+=u[n]*u[n-e];let n=60*d/e,r=Math.exp(-.5*(Math.log2(n/120)/.9)**2);t*=r,t>p&&(p=t,f=e)}let m=e=>{let t=0;for(let n=e;n<s;n++)t+=u[n]*u[n-e];return t},h=m(f-1),g=m(f),_=m(f+1),v=(h-_)/(2*(h-2*g+_)||1),y=f+Math.max(-.5,Math.min(.5,v)),b=0,x=-1;for(let e=0;e<y;e++){let t=0;for(let n=e;n<s;n+=y)t+=u[Math.round(n)]||0;t>x&&(x=t,b=e)}let S=[];for(let e=b;e<s;e+=y)S.push(e/d);let C=[0,0,0,0];S.forEach((e,t)=>C[t%4]+=u[Math.round(e*d)]||0);let w=C.indexOf(Math.max(...C));return{bpm:60*d/y,beats:S,downbeatOffset:w}}var si={pad:`PAD`,load:`LOAD PAD`,fx:`EFFECT`,objects:`OBJECTS`,sound:`SOUND`,tools:`HAND TOOLS`,setup:`SETUP`},Y=e=>v(`p`,{class:`hint`},e),X=(...e)=>v(`div`,{class:`keys`},...e.filter(Boolean)),Z=(e,...t)=>v(`div`,{class:`sec`},v(`div`,{class:`sec-t`},e),...t.filter(Boolean));function ci(e,t){let n=j[t];if(kr(t),!n)return;let r=e.scene.bg;r&&r.s===n&&(r.setLoop(n.loopIn,n.loopOut,N()),r.setSpeed(n.speed,N()),F.sync(`bg`,r)),d()}async function li(e,t,n){let r=j[t];r&&e.scene.forget(r),j[t]=n,await Er(t),n.bpm&&(s.seq.bpm=Math.round(n.bpm)),d()}function ui(e,t,r){let i=v(`div`,{class:`seg-msg`}),a=(n,r)=>void li(e,t,n).then(()=>{r&&O(r,1600),s.ui.sheet=`pad:${t}`,d()}),o=async e=>{let[t]=await ie(e);if(t){i.textContent=`불러오는 중… 소리도 함께 읽습니다`;try{let e=await Nt(t,t.name);a(e,e.audio?`${e.name} — 소리 있음 ♪`:`${e.name} — 소리 없음`)}catch(e){i.textContent=`이 파일은 읽을 수 없어요`,console.warn(e)}}},c=!1,l=(t,n)=>C(v(`span`,{class:`kf col`},v(`b`,null,n),v(`small`,null,`누르는 동안 녹화`)),{cls:`small samp`,lit:()=>c,hold:async n=>{if(n){if(i.textContent=`카메라 켜는 중…`,!await e.sampler.start(e.camera,t)){i.textContent=`카메라를 쓸 수 없어요`;return}c=!0,i.textContent=`● 녹화 중 — 손을 떼면 패드에 들어갑니다 (최대 15초)`;let n=performance.now(),r=setInterval(()=>{if(!c)return clearInterval(r);performance.now()-n>15e3&&u()},200);x()}else u()}}),u=async()=>{if(!c)return;c=!1,x();let n=await e.sampler.stop();if(!n)return void(i.textContent=`녹화된 내용이 없어요`);i.textContent=`패드에 넣는 중…`;let r=await Nt(n,`SMP${t+1}`);a(r,r.audio?`샘플 완료 — 소리 있음 ♪`:`샘플 완료`)};return[v(`div`,{class:`pad-id`},`PAD ${`AB`[Math.floor(t/16)]}${t%16+1}`),Z(`FROM THE PHONE`,X(C(`VIDEO ▸`,{cls:`small`,onPress:()=>void o(`video/*`)}),C(`PHOTO ▸`,{cls:`small`,onPress:()=>void o(`image/*`)})),Y(`영상의 소리가 그대로 악기의 재료가 됩니다`)),Z(`SAMPLE THE CAMERA`,X(l(`environment`,`REAR`),l(`user`,`SELF`)),i,Y(`카메라 화면과 마이크 소리를 녹화해 이 패드에 넣습니다`)),Z(`LIVE`,X(C(`CAM`,{cls:`small`,onPress:()=>a(wt(`environment`))}),C(`SELF CAM`,{cls:`small`,onPress:()=>a(wt(`user`))}),C(`BEAM`,{cls:`small`,onPress:()=>a(Tt())}))),Z(`TEST CLIPS`,X(C(`T1 DANCER`,{cls:`small`,onPress:()=>a(Ct(0))}),C(`T2 METRONOME`,{cls:`small`,onPress:()=>a(Ct(1))})),Y(`앱이 직접 그리고 연주하는 클립 — 카메라 없이 모든 기능을 시험`)),Z(`MATTES`,X(...n.map((e,t)=>C(e,{cls:`small`,onPress:()=>a(Et(t,e))}))))]}function di(e,t,n){let r=j[t];if(!r)return ui(e,t,n);let i=()=>ci(e,t),a=r.kind===`video`||r.kind===`test`,o=v(`div`,{class:`tiles`}),c=[[-2,`DEFAULT`],[-1,`CUT`],...[0,1,2,3,5,7,8,12,15,19,22,24,27,28,30,35].map(e=>[e,ai[e].name])];for(let[e,t]of c)o.append(C(v(`span`,{class:`kf col`},e>=0?v(`img`,{class:`ico`,src:Yn(e),alt:``}):v(`b`,null,e===-1?`|`:`◇`),v(`small`,null,t)),{cls:`tile`,lit:()=>r.inStyle===e,onPress:()=>(r.inStyle=e,i())}));let l=`${zt(r)} · ${r.kind===`video`||r.kind===`test`?`${r.duration.toFixed(1)}s`:``} · ${r.audio?`소리 ♪ ${r.audio.sampleRate/1e3}kHz`:`소리 없음`}`,u=v(`input`,{type:`text`,class:`field`,value:r.name,maxlength:`12`});return u.addEventListener(`change`,()=>(r.name=u.value.toUpperCase()||r.name,i())),[v(`div`,{class:`pad-head`},r.thumb?v(`img`,{src:r.thumb,alt:``}):v(`i`),v(`div`,null,v(`b`,null,`PAD ${`AB`[Math.floor(t/16)]}${t%16+1}`),u,v(`small`,null,l))),a&&Z(`LOOP`,w(`IN s`,r,`loopIn`,0,r.duration-.1,.05,void 0,i),w(`OUT s`,r,`loopOut`,.1,r.duration,.05,void 0,i),w(`SPEED`,r,`speed`,.25,2,.05,void 0,i),X(C(`WHOLE CLIP`,{cls:`small`,onPress:()=>(r.loopIn=0,r.loopOut=r.duration,i(),n())}),C(`TRIGGER`,{cls:`small`,onPress:()=>e.scene.cut(t,N())})),Y(`패드를 누르면 IN부터 재생하고 OUT에서 IN으로 돌아갑니다. 소리도 같은 구간을 돕니다`)),Z(`SOUND`,w(`GAIN`,r,`gain`,0,2,.05,void 0,i),r.audio&&X(C(`FIND TEMPO`,{cls:`small`,onPress:async()=>{let e=await oi(r.audio);r.bpm=e.bpm,s.seq.bpm=Math.round(e.bpm),O(`${Math.round(e.bpm)} BPM — 시퀀서 템포로 설정`,1800),d()}}))),Z(`COMES IN WITH`,o,w(`BEATS`,s.trans,`beats`,.25,4,.25),Y(`CUT은 바로, 나머지는 BEATS 박자 동안 바뀝니다. DEFAULT는 SETUP의 기본값`)),a&&Z(`CHOP · 16 SLICES`,T(``,r,`sliceMode`,[[`equal`,`EQUAL`],[`onset`,`ONSETS`],[`cut`,`CUTS`]],async()=>{r.sliceMode===`equal`?St(r):r.sliceMode===`onset`?Pt(r):(O(`장면 컷을 찾는 중…`,1500),await Ft(r),O(`컷 16개로 나눴어요`,1200)),i()}),Y(`CHOP 모드에서 이 클립이 배경일 때 16조각을 연주합니다. ONSETS: 소리 시작점, CUTS: 화면 컷`)),Z(`PAD`,X(C(`REPLACE ▸`,{cls:`small`,onPress:()=>(s.ui.sheet=`load:${t}`,d())}),C(`CLEAR`,{cls:`small`,onPress:()=>{e.scene.forget(r),j[t]=null,Dr(t),s.ui.sheet=``,d()}})))]}function fi(e,t){let n=br().find(e=>e.id===t);if(!n)return[Y(`없는 효과`)];let r=n.params?.()??[];return[v(`div`,{class:`fx-head`},v(`b`,null,n.name),v(`span`,null,n.ko),n.no?v(`em`,null,`MOORMAN #${n.no}`):null),n.about?Y(n.about):null,X(C(`ON`,{cls:`small`,lit:()=>n.on(),onPress:()=>(n.set(!n.on()),d())}),n.link?v(`small`,{class:`stat`},`♪ LINK: ${Object.keys(n.link).join(` · `)}`):null),r.length?Z(`KNOBS`,...r.map(e=>w(e.label,e.obj,e.prop,e.min,e.max,e.step))):null,n.screen?ar(n.screen,{renderer:e.renderer,openTapes:e.openTapes}):null,n.no?Y(`docs/paik-source-video-charlotte-moorman-1991.md의 효과 #${n.no}`):null]}function pi(e,t){let n=v(`i`,{class:`prog`}),r=v(`small`),i=v(`div`,{class:`objrow${e.renderer.selected===t.id?` sel`:``}`,"data-oid":String(t.id),style:`--c:${t.color}`},t.thumb?v(`img`,{src:t.thumb,alt:``}):v(`span`,{class:`nothumb`},Kt[t.kind]),v(`div`,{class:`on`},v(`b`,null,t.name),r,v(`span`,{class:`bar`},n)),C(t.visible?`◉`:`○`,{cls:`tiny`,onPress:()=>(t.visible=!t.visible,e.scene.resync(),d())}),C(`SOLO`,{cls:`tiny`,lit:()=>t.solo,onPress:()=>(t.solo=!t.solo,d())}),C(`×`,{cls:`tiny`,onPress:()=>e.dropObject(t)}));return S(i,()=>{let e=Qt(t);n.style.width=`${e*100}%`,r.textContent=t.kind===`tap`||t.kind===`person`?t.player.live?`LIVE`:e<1?`TRACKING ${Math.round(e*100)}%`:`${t.track?.frames.length??0} FRAMES`:Kt[t.kind]}),i.addEventListener(`click`,n=>{n.target.closest(`.key`)||e.select(t)}),i}function mi(e,t,n,r){let i=[...r];return j.forEach((e,t)=>e&&i.push([t,`${`AB`[Math.floor(t/16)]}${t%16+1} ${Rt(e)}`])),T(e,t,n,i,void 0,`wrap`)}function hi(e,t,n){let r=t,i=t.player,a=!i.live&&(i.s.kind===`video`||i.s.kind===`test`),o=()=>t.sound>0?F.sync(`obj`+t.id,i):F.stop(`obj`+t.id),c={in:i.loopIn,out:i.loopOut,speed:i.speed},l={off:t.offset},u=()=>(i.setLoop(c.in,c.out,N()),i.setSpeed(c.speed,N()),o(),d()),f=v(`div`,{class:`tiles t5`});return Wt.forEach(([e,n],r)=>f.append(C(v(`span`,{class:`kf col`},v(`b`,null,e),v(`small`,null,n)),{cls:`tile line`,lit:()=>t.line===r,onPress:()=>(t.line=r,d())}))),[v(`div`,{class:`obj-head`,style:`--c:${t.color}`},v(`b`,null,t.name),v(`small`,null,`${Kt[t.kind]} · 원본 ${`AB`[Math.floor(t.pad/16)]}${t.pad%16+1} ${Rt(j[t.pad])}`)),a&&Z(`TIME · 시점`,w(`OFFSET s`,l,`off`,-8,8,.05,void 0,()=>(Yt(t,l.off,N()),o())),w(`LOOP IN`,c,`in`,0,i.s.duration-.1,.05,void 0,u),w(`LOOP OUT`,c,`out`,.1,i.s.duration,.05,void 0,u),w(`SPEED`,c,`speed`,.25,2,.05,void 0,u),X(C(`FREEZE`,{cls:`small`,lit:()=>i.frozen,onPress:()=>(i.freeze(!i.frozen,N()),o(),d())}),C(`RESTART`,{cls:`small`,onPress:()=>(i.restart(N(),i.loopIn),o())}),C(`= BG`,{cls:`small`,onPress:()=>{let n=e.scene.bg;n&&n.s===i.s&&i.copyTiming(n),t.offset=0,l.off=0,o(),d()}}),t.kind===`tap`||t.kind===`person`?C(`RE-TRACK`,{cls:`small`,onPress:()=>(ei(t,d),O(`구간을 다시 추적합니다`,1200))}):null),w(`SOUND`,r,`sound`,0,1,.05,void 0,o),Y(`OFFSET: 이 객체만 앞뒤 시간으로 · LOOP: 이 객체만 구간 반복 · 추적은 구간을 따라 다시 계산됩니다(RE-TRACK). SOUND: 객체의 소리도 섞기`)),Z(`PLACE · 위치·크기`,w(`X`,r,`x`,-1.5,1.5,.01),w(`Y`,r,`y`,-1.5,1.5,.01),w(`SIZE`,r,`scale`,.15,3,.05),w(`TURN °`,r,`rot`,-180,180,1),w(`TILT °`,r,`tilt`,-75,75,1),X(C(`RESET`,{cls:`small`,onPress:()=>(Object.assign(t,{x:0,y:0,scale:1,rot:0,tilt:0}),d())}),C(`MIRROR ×2`,{cls:`small`,onPress:()=>(Object.assign(t,{tilt:t.tilt===0?55:0}),d())})),Y(`모니터에서 객체를 끌면 옮겨지고, 두 손가락으로 크기·회전`)),Z(`LINE · 윤곽`,f,w(`WIDTH`,r,`lineSize`,.4,3,.1),T(`COLORS`,r,`linePal`,nn.map((e,t)=>[t,[`VIOLET`,`GREEN`,`RGB`,`B/W`][t]])),te(`COLOR`,r,`color`,[`#ff4070`,`#40e0ff`,`#ffe040`,`#90ff50`,`#ffffff`,`#c070ff`,`#ff8020`])),Z(`FILL · 안쪽`,mi(`INSIDE`,t,`fillIn`,[[-2,`SELF`],[-1,`NONE`],[-3,`COLOR`]]),te(`COLOR`,r,`fillColor`),Y(`패드를 이 줄이나 모니터의 객체로 끌어와도 안쪽이 채워집니다. NONE: 윤곽만`)),Z(`OUTSIDE · 바깥`,mi(`OUTSIDE`,t,`fillOut`,[[-2,`SCENE`],[-1,`BLACK`]]),Y(`바깥을 다른 영상으로: 이 객체만 다른 영상 위로 옮겨 붙입니다`)),Z(`EFFECTS REACH`,X(E(`THIS OBJECT`,r,`fx`),E(`BACKGROUND`,s.scene,`fxBg`)),Y(`효과 패드가 이 객체에 걸릴지, 배경에 걸릴지`)),t.kind===`luma`&&Z(`LUMA KEY`,w(`LOW`,t.key,`lo`,0,1,.01),w(`HIGH`,t.key,`hi`,0,1,.01),X(E(`INVERT`,t.key,`invert`))),t.kind===`chroma`&&Z(`CHROMA KEY`,te(`KEY`,t.key,`color`,[`#00d040`,`#2040ff`,`#ff2020`,`#f0f0f0`,`#101010`]),X(E(`INVERT`,t.key,`invert`))),t.kind===`shape`&&Z(`SHAPE`,T(``,t.shape,`type`,Gt.map((e,t)=>[t,e])),w(`SIZE`,t.shape,`size`,.05,1,.01),w(`RING`,t.shape,`ring`,.05,.9,.01),w(`SPIN`,t.shape,`spin`,-2,2,.05)),X(C(`DELETE`,{cls:`small`,onPress:()=>(e.dropObject(t),n())}))]}function gi(e,t){let n=v(`div`,{class:`objlist`});M.forEach(t=>n.append(pi(e,t)));let r=M.find(t=>t.id===e.renderer.selected),i=v(`div`,{class:`seg-msg`});S(i,()=>i.textContent=Jr.message);let a=(n,r)=>{let i=e.addObject(n);i&&(r?.(i),e.select(i),t())};return[X(C(`TRACK`,{cls:`small`,lit:()=>s.tools.mode===`track`,onPress:()=>(s.tools.mode=s.tools.mode===`track`?`none`:`track`,d())}),C(`+ PERSON`,{cls:`small`,onPress:()=>a(`person`)}),C(`+ LUMA`,{cls:`small`,onPress:()=>a(`luma`)}),C(`+ CHROMA`,{cls:`small`,onPress:()=>a(`chroma`)}),C(`+ SHAPE`,{cls:`small`,onPress:()=>a(`shape`)})),i,M.length?n:Y(`TRACK을 켜고 모니터에서 사람이나 물건을 누르면 여기에 바로 생깁니다 (최대 4개). 배경 클립에서 따내고, 그 뒤로는 따로 움직입니다.`),r?hi(e,r,t):M.length?Y(`줄을 누르면 그 객체를 고칩니다`):null].flat()}function _i(){let e=s.sound;return[Z(`PITCH · 음계`,X(E(`CHOP IN KEY`,e,`pitch`)),T(`SCALE`,e,`scale`,i.map((e,t)=>[t,e.name])),T(`ROOT`,e,`root`,a.map((e,t)=>[t,e]),void 0,`wrap`),Y(`CHOP 패드가 음계대로 클립 속도(=음높이)를 바꿉니다. 영상도 같이 빨라지고 느려집니다`)),Z(`GATE · 리듬`,w(`DEPTH`,e,`gate`,0,1,.05),T(`PATTERN`,e,`gatePat`,o.map((e,t)=>[t,e.name]),void 0,`wrap`),Y(`x 열림 · . 닫힘 · r 거꾸로 조각 · s 앞 조각 반복. 박자는 BPM을 따릅니다`)),Z(`TAPE · RADIO`,w(`TAPE`,e,`tape`,0,1,.05),w(`RADIO`,e,`radio`,0,1,.05),Y(`TAPE: 늘어지는 테이프, 포화, 스프링 리버브 · RADIO: 좁은 대역의 라디오 소리`)),Z(`GRAIN · 앰비언트`,w(`AMOUNT`,e,`grain`,0,1,.05),w(`SIZE s`,e,`grainSize`,.03,.4,.01),Y(`지금 재생 위치의 소리를 잘게 쪼개 음계로 겹친 구름. FREEZE한 객체 위에서도 계속 울립니다`)),Z(`MASTER`,w(`VOLUME`,e,`vol`,0,1,.05,void 0,()=>F.setVolume(s.sound.vol)),X(E(`LINK FX → SOUND`,e,`link`)),Y(`LINK: 화면 효과가 소리에도 걸립니다 (깨짐→비트크러시, 피드백→에코, 주사·자석→와우, 스터터→게이트, 재촬영→라디오)`))]}function vi(e){let t=s.tools;return[Z(`TOOL`,T(``,t,`mode`,[[`none`,`NONE`],[`track`,`TRACK`],[`magnet`,`MAGNET`],[`smear`,`SMEAR`],[`tear`,`TEAR`],[`freeze`,`FREEZE`]],void 0,`wrap`),Y(`MAGNET: 최대 2개, ×나 화면 밖으로 끌어 지우기 · SMEAR: 문지른 만큼 녹아 밀렸다 돌아옴 · TEAR: 그은 높이의 주사선이 찢어짐 · FREEZE: 칠한 곳만 멈춤`)),Z(`BRUSH`,w(`SIZE`,t,`size`,.05,.4,.01),w(`HOLD`,t,`smear`,0,1,.05),X(C(`CLEAR MAGNETS`,{cls:`small`,onPress:()=>(s.magnet.list=[],d())}),C(`CLEAR BRUSH`,{cls:`small`,onPress:()=>e.renderer.setOutput(s.output.aspect,s.output.quality)})),Y(`HOLD: 문지른 흔적이 얼마나 오래 남는지`)),ar(`magnet`,{renderer:e.renderer,openTapes:e.openTapes})]}function yi(e,t,n){let[r,i]=e.split(`:`),a=v(`div`,{class:`scr sheet-${r}`}),o=[];return r===`load`?o=ui(t,+i,n):r===`pad`?o=di(t,+i,n):r===`fx`?o=fi(t,e.slice(3)):r===`objects`?o=gi(t,n):r===`sound`?o=_i():r===`tools`?o=vi(t):r===`setup`&&(o=[ar(`setup`,{renderer:t.renderer,openTapes:t.openTapes}),v(`div`,{class:`sec-t`},`TAPE LOOK`),ar(`tape`,{renderer:t.renderer,openTapes:t.openTapes})]),a.append(...o.filter(Boolean)),a}var bi=[[`clip`,`CLIP`,`클립`],[`chop`,`CHOP`,`조각`],[`fx`,`FX`,`효과`],[`obj`,`OBJ`,`객체`]],xi={clip:2,chop:1,fx:4,obj:1},Si=[[``,``],[``,``],[``,``],[``,``],[`+ PERSON`,`사람`],[`+ LUMA`,`밝기 키`],[`+ CHROMA`,`색 키`],[`+ CIRCLE`,`원 창`],[`+ RING`,`고리 창`],[`+ RECT`,`사각 창`],[`+ DIAMOND`,`마름모`],[`TRACK`,`누른 것 추적`],[`LIST`,`목록`],[`FREEZE`,`모두 멈춤`],[`SYNC`,`배경에 맞춤`],[`CLEAR`,`모두 지움`]],Ci={0:`repeating-linear-gradient(#bbb 0 2px,#666 2px 4px)`,1:`linear-gradient(90deg,#c0c0c0 0 14%,#c0c000 14% 28%,#00c0c0 28% 42%,#00c000 42% 57%,#c000c0 57% 71%,#c00000 71% 85%,#0000c0 85%)`,7:`radial-gradient(circle,#fff 1px,#102 2px)`,9:`repeating-linear-gradient(160deg,#ff8414 0 6px,#1440d8 6px 12px)`,10:`conic-gradient(red,yellow,lime,cyan,blue,magenta,red)`,11:`repeating-linear-gradient(90deg,#c0c0c0 0 2px,#c0c000 2px 4px,#00c0c0 4px 6px,#c000c0 6px 8px)`,12:`linear-gradient(170deg,#3a8 0 30%,#c0c000 30% 40%,#00c0c0 40% 50%,#c000c0 50% 60%,#e8a 60%)`,13:`linear-gradient(135deg,#1830a0 0 40%,#f4f4f4 40% 60%,#c02040 60%)`};function wi(e){return`${Math.floor(e/60)}:${String(Math.floor(e%60)).padStart(2,`0`)}`}function Ti(e){let{renderer:t,scene:n}=e,r=e.pads,i=v(`div`,{class:`marks`}),o=v(`div`,{class:`osd top`}),c=v(`div`,{class:`osd hint`}),u=v(`i`,{class:`beat-lamp`}),f=C(v(`span`,{class:`kf`},v(`i`,{class:`recdot`}),`REC`),{cls:`rec`,lit:()=>e.rec.recording,onPress:()=>void e.toggleRec(),silent:!0}),p=v(`div`,{class:`pgm-screen`},t.canvas,i,o,c,u,v(`div`,{class:`rec-slot`},f)),m=v(`div`,{class:`monitor`},p),h=v(`div`,{class:`qlink`}),g=``;function y(){let e=s.ui.focus,t=s.sound,r=(e,t,n,r,i,a)=>({label:e,get:()=>t[n],set:e=>t[n]=e,min:r,max:i,fmt:a});if(e.startsWith(`fx:`)){let t=br().find(t=>`fx:`+t.id===e)?.params?.()??[];if(t.length)return t.slice(0,4).map(e=>({label:e.label,get:()=>e.obj[e.prop],set:t=>e.obj[e.prop]=e.step>=1?Math.round(t):t,min:e.min,max:e.max}))}if(e.startsWith(`obj:`)){let t=M.find(t=>`obj:`+t.id===e);if(t)return[{label:`TIME`,get:()=>t.offset,set:e=>b(t,e),min:-Math.min(4,t.player.len/2),max:Math.min(4,t.player.len/2),fmt:e=>`${e>=0?`+`:``}${e.toFixed(2)}s`},{label:`SPEED`,get:()=>t.player.speed,set:e=>(t.player.setSpeed(e,N()),t.sound>0&&F.sync(`obj`+t.id,t.player)),min:.25,max:2,fmt:e=>`×${e.toFixed(2)}`},{label:`SIZE`,get:()=>t.scale,set:e=>t.scale=e,min:.2,max:2.5,fmt:e=>`${Math.round(e*100)}%`},{label:`TURN`,get:()=>t.rot,set:e=>t.rot=e,min:-180,max:180,fmt:e=>`${Math.round(e)}°`}]}if(e===`clip`&&n.bg&&n.bgPad>=0){let e=n.bg.s,t=n.bg;if(e.kind===`video`||e.kind===`test`){let n=()=>{t.setLoop(e.loopIn,e.loopOut,N()),t.setSpeed(e.speed,N()),F.sync(`bg`,t)};return[{label:`SPEED`,get:()=>e.speed,set:t=>(e.speed=t,n()),min:.25,max:2,fmt:e=>`×${e.toFixed(2)}`},{label:`LOOP IN`,get:()=>e.loopIn,set:t=>(e.loopIn=Math.min(t,e.loopOut-.1),n()),min:0,max:e.duration,fmt:e=>`${e.toFixed(2)}s`},{label:`LOOP OUT`,get:()=>e.loopOut,set:t=>(e.loopOut=Math.max(t,e.loopIn+.1),n()),min:0,max:e.duration,fmt:e=>`${e.toFixed(2)}s`},{label:`GAIN`,get:()=>e.gain,set:n=>(e.gain=n,F.sync(`bg`,t)),min:0,max:2,fmt:e=>`${Math.round(e*100)}%`}]}}return[r(`GRAIN`,t,`grain`,0,1),r(`GATE`,t,`gate`,0,1),r(`TAPE`,t,`tape`,0,1),r(`RADIO`,t,`radio`,0,1)]}function b(e,t){Yt(e,t,N()),e.sound>0&&F.sync(`obj`+e.id,e.player)}function w(){h.textContent=``;let e=y(),t=s.ui.focus.startsWith(`fx:`)?br().find(e=>`fx:`+e.id===s.ui.focus)?.name:s.ui.focus.startsWith(`obj:`)?M.find(e=>`obj:`+e.id===s.ui.focus)?.name:s.ui.focus===`clip`?n.bg?.s.name:`SOUND`;h.append(v(`b`,{class:`ql-t`},t||`SOUND`));for(let t of e){let e=v(`i`,{class:`fill`}),n=v(`em`),r=v(`div`,{class:`fader`},e,v(`span`,null,t.label),n),i=()=>{let r=t.get();e.style.width=`${(r-t.min)/(t.max-t.min||1)*100}%`,n.textContent=t.fmt?t.fmt(r):r.toFixed(2)},a=0,o=0;r.addEventListener(`pointerdown`,e=>{try{r.setPointerCapture(e.pointerId)}catch{}a=e.clientX,o=t.get(),r.classList.add(`down`)}),r.addEventListener(`pointermove`,e=>{if(!r.hasPointerCapture(e.pointerId))return;let n=r.getBoundingClientRect().width,s=Math.max(t.min,Math.min(t.max,o+(e.clientX-a)/n*(t.max-t.min)));t.set(s),i(),d()});let s=()=>r.classList.remove(`down`);r.addEventListener(`pointerup`,s),r.addEventListener(`pointercancel`,s),S(r,i),h.append(r)}}let T=v(`b`),E=v(`div`,{class:`bpm`},v(`small`,null,`BPM`),T);{let e=0,t=0,n=!1;E.addEventListener(`pointerdown`,r=>{try{E.setPointerCapture(r.pointerId)}catch{}e=r.clientY,t=s.seq.bpm,n=!1}),E.addEventListener(`pointermove`,r=>{if(!E.hasPointerCapture(r.pointerId))return;let i=Math.round((e-r.clientY)/4);Math.abs(i)>0&&(n=!0),s.seq.bpm=Math.max(40,Math.min(200,t+i)),x()}),E.addEventListener(`pointerup`,()=>{if(!n){let e=en();e&&O(`TAP ${e} BPM`,900)}d()}),S(E,()=>T.textContent=String(s.seq.bpm))}let ee=v(`div`,{class:`transport`},C(`▶`,{cls:`small`,lit:()=>I.playing,onPress:()=>I.playing?I.stop():I.play()}),C(v(`span`,{class:`kf`},v(`i`,{class:`seqdot`}),`SEQ`),{cls:`small seqrec`,lit:()=>I.recording,onPress:()=>I.toggleRec()}),C(v(`span`,{class:`kf col`},v(`small`,null,`BAR`),v(`b`,{class:`bars`},`1`)),{cls:`small`,onPress:()=>(s.seq.bars=s.seq.bars%4+1,d())}),E,C(v(`span`,{class:`kf col`},v(`small`,null,`QNT`),v(`b`,null,`1/16`)),{cls:`small`,lit:()=>s.seq.quant,onPress:()=>(s.seq.quant=!s.seq.quant,d())}),C(`UNDO`,{cls:`small`,onPress:()=>I.undoLast()}),C(`CLR`,{cls:`small`,onPress:()=>(I.clear(),O(`패턴을 지웠어요 (UNDO로 되돌리기)`,1400))}));S(ee,()=>{let e=ee.querySelector(`.bars`);e&&(e.textContent=String(s.seq.bars))});let te=v(`div`,{class:`pads`}),ne=[],D=null;for(let e=0;e<16;e++){let t=v(`button`,{class:`pad`,type:`button`});ne.push(t),te.append(t);let n=null;t.addEventListener(`pointerdown`,i=>{i.preventDefault(),_.ensure();try{t.setPointerCapture(i.pointerId)}catch{}let a=s.ui.mode,o=s.ui.bank,c=o*16+e,l=s.ui.edit||a===`clip`&&!j[c];n={t:N(),x:i.clientX,y:i.clientY,mode:a,bank:o,drag:!1,edit:l},t.classList.add(`down`),s.audio.haptics&&navigator.vibrate?.(7),l||(a===`clip`&&(s.ui.focus=`clip`),r.down(a,o,e))}),t.addEventListener(`pointermove`,r=>{if(!n||!t.hasPointerCapture(r.pointerId)||n.mode!==`clip`||n.edit)return;let i=Math.hypot(r.clientX-n.x,r.clientY-n.y);if(!n.drag&&i>18&&j[n.bank*16+e]&&(n.drag=!0,D=v(`div`,{class:`drag-ghost`},Rt(j[n.bank*16+e])),document.querySelector(`.screen`)?.append(D),document.body.classList.add(`dragging`)),D){D.style.left=`${r.clientX}px`,D.style.top=`${r.clientY}px`;let e=document.elementFromPoint(r.clientX,r.clientY);document.querySelectorAll(`.drop-hot`).forEach(e=>e.classList.remove(`drop-hot`)),e?.closest(`.objrow, .obj-chip, .pgm-screen`)?.classList.add(`drop-hot`)}});let i=(i,a)=>{if(t.classList.remove(`down`),!n)return;let o=n;n=null;let s=o.bank*16+e;o.edit?a||ie(o.mode,o.bank,e):o.drag?(D?.remove(),D=null,document.body.classList.remove(`dragging`),document.querySelectorAll(`.drop-hot`).forEach(e=>e.classList.remove(`drop-hot`)),r.up(o.mode,o.bank,e,N(),!1,!0),a||re(s,i.clientX,i.clientY)):r.up(o.mode,o.bank,e)};t.addEventListener(`pointerup`,e=>i(e,!1)),t.addEventListener(`pointercancel`,e=>i(e,!0)),t.addEventListener(`contextmenu`,e=>e.preventDefault())}function re(r,i,a){let o=document.elementFromPoint(i,a),s=o?.closest(`[data-oid]`),c=s?M.find(e=>String(e.id)===s.dataset.oid):null;if(!c&&o?.closest(`.pgm-screen`)){let e=p.getBoundingClientRect();if(c=t.objectAt((i-e.left)/e.width,(a-e.top)/e.height),!c){n.cut(r,N()),O(`배경 ← ${Rt(j[r])}`,1e3);return}}c&&(c.fillIn=r,e.select(c),O(`${c.name} 안쪽 ← ${Rt(j[r])}`,1200),d())}function ie(t,r,i){if(t===`clip`)e.openSheet(j[r*16+i]?`pad:${r*16+i}`:`load:${r*16+i}`);else if(t===`chop`)e.openSheet(n.bgPad>=0?`pad:${n.bgPad}`:`sound`);else if(t===`fx`){let t=vr[r]?.[i];t&&e.openSheet(`fx:`+t.id)}else t===`obj`&&(i<4&&M[i]&&e.select(M[i]),e.openSheet(`objects`))}function ae(e){let t=ne[e],r=s.ui.mode,i=s.ui.bank;t.className=`pad`,t.style.backgroundImage=``,t.style.removeProperty(`--c`),t.textContent=``;let o=e=>v(`span`,{class:`pn`},e),c=e=>v(`small`,{class:`ps`},e);if(r===`clip`){let n=j[i*16+e];if(t.append(v(`i`,{class:`pi`},`${`AB`[i]}${e+1}`)),!n){t.classList.add(`empty`),t.append(o(`+`),c(`LOAD`));return}n.thumb?t.style.backgroundImage=`url(${n.thumb})`:n.kind===`matte`&&Ci[n.matte??-1]&&(t.style.backgroundImage=Ci[n.matte??-1]),t.classList.add(`has-art`),t.append(o(Rt(n)),c(zt(n)+(n.audio?` ♪`:``)))}else if(r===`chop`){let r=n.bg?.s,i=Bt(e),l=a[((i+0)%12+12)%12];t.classList.add(`chop`),t.append(v(`i`,{class:`pi`},`/${e+1}`),o(s.sound.pitch?`${l}${i>=12?`′`:i<0?`,`:``}`:`/${e+1}`),c(r?r.name:`—`))}else if(r===`fx`){let n=vr[i]?.[e];if(!n)return t.classList.add(`empty`);t.classList.add(`fx`),t.append(v(`i`,{class:`pi`},n.no?`#${n.no}`:``),o(n.name),c(n.ko))}else if(t.classList.add(`objp`),e<4){let n=M[e];if(t.append(v(`i`,{class:`pi`},`OBJ ${e+1}`)),!n){t.classList.add(`empty`),t.append(o(`—`),c(`TRACK로 추가`));return}t.style.setProperty(`--c`,n.color),n.thumb&&(t.style.backgroundImage=`url(${n.thumb})`),t.classList.add(`has-art`,`obj`),t.append(o(n.name),c(Qt(n)<1?`${Math.round(Qt(n)*100)}%`:n.visible?`ON`:`OFF`))}else{let[n,r]=Si[e];t.append(o(n),c(r))}}function oe(){for(let e=0;e<16;e++)ae(e)}let se=C(v(`span`,{class:`kf col`},v(`small`,null,`BANK`),v(`b`,{class:`bk`},`A`)),{cls:`side`,onPress:()=>{let e=xi[s.ui.mode];s.ui.bank=(s.ui.bank+1)%e,d()}}),ce=C(v(`span`,{class:`kf col`},v(`small`,null,`REPEAT`),v(`b`,{class:`rr`},`1/16`)),{cls:`side`,lit:()=>s.seq.repeat,hold:e=>{e?le=N():N()-le>.38?(s.seq.rate=s.seq.rate===8?16:s.seq.rate===16?32:8,O(`NOTE REPEAT 1/${s.seq.rate}`,900)):s.seq.repeat=!s.seq.repeat,d()}}),le=0,k=(e,t,n)=>C(v(`span`,{class:`kf col`},v(`b`,null,t),v(`small`,null,n)),{cls:`side`,lit:()=>s.tools.mode===e,onPress:()=>{s.tools.mode=s.tools.mode===e?`none`:e,e===`track`&&s.tools.mode===`track`&&O(`모니터에서 따낼 사람·물건을 누르세요. 바로 목록에 뜹니다.`,2200),d()}}),ue=v(`div`,{class:`side-keys`},...bi.map(([e,t,n])=>C(v(`span`,{class:`kf col`},v(`b`,null,t),v(`small`,null,n)),{cls:`side mode`,lit:()=>s.ui.mode===e,onPress:()=>{r.releaseAll(),s.ui.mode!==e&&(s.ui.bank=0),s.ui.mode=e,d()}})),se,C(v(`span`,{class:`kf col`},v(`b`,null,`EDIT`),v(`small`,null,`패드 편집`)),{cls:`side`,lit:()=>s.ui.edit,onPress:()=>(s.ui.edit=!s.ui.edit,d())}),ce,k(`track`,`TRACK`,`추적`),C(v(`span`,{class:`kf col`},v(`b`,null,`TOOLS`),v(`small`,null,`손 도구`)),{cls:`side`,lit:()=>[`magnet`,`smear`,`tear`,`freeze`].includes(s.tools.mode),onPress:()=>e.openSheet(`tools`)}),C(v(`span`,{class:`kf col`},v(`b`,null,`SOUND`),v(`small`,null,`소리`)),{cls:`side`,lit:()=>s.ui.sheet===`sound`,onPress:()=>e.openSheet(`sound`)}),C(v(`span`,{class:`kf col`},v(`b`,null,`LIST`),v(`small`,null,`객체`)),{cls:`side`,dot:()=>M.length>0,onPress:()=>e.openSheet(`objects`)}),C(v(`span`,{class:`kf col`},v(`b`,null,`SETUP`),v(`small`,null,`설정`)),{cls:`side`,onPress:()=>e.openSheet(`setup`)}));S(ue,()=>{let e=ue.querySelector(`.bk`);e&&(e.textContent=s.ui.mode===`fx`?`ABCD`[s.ui.bank]:s.ui.mode===`clip`?`AB`[s.ui.bank]:`A`);let t=ue.querySelector(`.rr`);t&&(t.textContent=`1/${s.seq.rate}`)});let de=v(`div`,{class:`bank-name`});S(de,()=>de.textContent=s.ui.mode===`fx`?`FX ${`ABCD`[s.ui.bank]} · ${yr[s.ui.bank]}`:s.ui.mode===`clip`?`CLIP ${`AB`[s.ui.bank]}`:s.ui.mode===`chop`?`CHOP · ${n.bg?.s.name??`배경 없음`}`:`OBJECTS`);let fe=v(`div`,{class:`deck`},h,ee,v(`div`,{class:`padzone`},v(`div`,{class:`padcol`},de,te),ue)),A=v(`div`,{class:`sheet-host`}),pe=``;function me(){if(A.textContent=``,pe=s.ui.sheet,!pe){A.hidden=!0,fe.hidden=!1;return}A.hidden=!1,fe.hidden=!0;let t=pe.split(`:`)[0];A.append(v(`div`,{class:`page-head`},C(`◀ PADS`,{cls:`small`,onPress:()=>{s.ui.sheet=``,d()}}),v(`div`,{class:`hdr`},v(`span`,null,`-`+(si[t]||t.toUpperCase())),v(`i`))),yi(pe,e,()=>me())),x()}let he=v(`div`,{class:`view sampler`},m,fe,A);A.hidden=!0;let ge=new Map,_e=null,ve=0,ye=e=>{let t=p.getBoundingClientRect();return[(e.clientX-t.left)/t.width,(e.clientY-t.top)/t.height]},be=()=>({smear:1,tear:2,freeze:3})[s.tools.mode]??0;p.addEventListener(`pointerdown`,n=>{if(n.target.closest(`.key, .mag, .obj-chip`))return;n.preventDefault(),_.ensure();try{p.setPointerCapture(n.pointerId)}catch{}let[r,i]=ye(n);ge.set(n.pointerId,{x:r,y:i,sx:r,sy:i,t:N()});let a=s.tools.mode;if(ge.size===2){let e=M.find(e=>e.id===t.selected);if(e){let[t,n]=[...ge.values()];_e={kind:`pinch`,o:e,d0:Math.hypot(t.x-n.x,t.y-n.y),a0:Math.atan2(n.y-t.y,n.x-t.x),s0:e.scale,r0:e.rot}}return}if(a===`magnet`){let e=s.magnet.list,t=r*2-1,n=1-i*2;e.length>=2&&(e.sort((e,t)=>e.born-t.born),e.shift()),e.push({x:t,y:n,s:s.magnet.strength*(e.length%2?-1:1),r:s.magnet.radius,type:s.magnet.type,born:N()}),_e={kind:`magnet`,i:e.length-1},d();return}if(be()){let e=t.brush;Object.assign(e,{x:r,y:1-i,vx:0,vy:0,active:!0,tool:be(),startHold:be()===3}),_e={kind:`brush`};return}if(a===`track`)return;let o=t.objectAt(r,i);o?(e.select(o),_e={kind:`move`,o,ox:o.x,oy:o.y}):_e={kind:`swipe`}}),p.addEventListener(`pointermove`,e=>{let n=ge.get(e.pointerId);if(!n)return;let[r,i]=ye(e),a=n.x,o=n.y;n.x=r,n.y=i;let c=_e;if(c){if(c.kind===`pinch`&&ge.size>=2){let[e,t]=[...ge.values()],n=Math.hypot(e.x-t.x,e.y-t.y),r=Math.atan2(t.y-e.y,t.x-e.x);c.o.scale=Math.max(.15,Math.min(3,c.s0*n/Math.max(.01,c.d0))),c.o.rot=c.r0+(r-c.a0)*180/Math.PI}else if(c.kind===`move`)c.o.x=c.ox+(r-n.sx)*2,c.o.y=c.oy-(i-n.sy)*2;else if(c.kind===`magnet`){let e=s.magnet.list[c.i];e&&(e.x=r*2-1,e.y=1-i*2)}else if(c.kind===`brush`){let e=t.brush;e.x=r,e.y=1-i,e.vx+=r-a,e.vy+=-(i-o)}}});let xe=r=>{let i=ge.get(r.pointerId);if(ge.delete(r.pointerId),!i)return;let[a,o]=ye(r),c=_e;if(ge.size===0&&(_e=null),c?.kind===`brush`&&(t.brush.active=!1),c?.kind===`magnet`){(a<-.02||a>1.02||o<-.02||o>1.02)&&(s.magnet.list.splice(c.i,1),O(`자석을 지웠어요`,900)),d();return}let l=Math.hypot(a-i.sx,o-i.sy),u=N()-i.t<.35;if(s.tools.mode===`track`&&l<.03&&u){let t=e.addObject(`tap`,a,o);t&&(e.select(t),s.ui.sheet!==`objects`&&e.openSheet(`objects`))}else if(c?.kind===`swipe`){let t=o-i.sy;if(Math.abs(t)>.18&&Math.abs(t)>Math.abs(a-i.sx)){let e=j.map((e,t)=>e?t:-1).filter(e=>e>=0),r=e[(e.indexOf(n.bgPad)+(t<0?1:-1)+e.length)%e.length];r!==void 0&&n.cut(r,N(),{style:24});return}l<.02&&u&&(N()-ve<.3?document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.().catch(()=>{}):e.select(null),ve=N())}};p.addEventListener(`pointerup`,xe),p.addEventListener(`pointercancel`,xe);let Se=new Map;function Ce(e){let t=v(`button`,{class:`mag-x`,type:`button`},`×`),n=v(`div`,{class:`mag`},v(`b`),t);return t.addEventListener(`pointerdown`,t=>{t.stopPropagation(),t.preventDefault(),s.magnet.list.splice(e,1),O(`자석을 지웠어요`,800),d()}),n.addEventListener(`pointerdown`,t=>{if(t.target.closest(`.mag-x`))return;t.stopPropagation();try{p.setPointerCapture(t.pointerId)}catch{}let[n,r]=ye(t);ge.set(t.pointerId,{x:n,y:r,sx:n,sy:r,t:N()}),_e={kind:`magnet`,i:e}}),n}function we(t){let n=v(`button`,{class:`obj-chip`,type:`button`,"data-oid":String(t)});return n.addEventListener(`pointerdown`,n=>{n.stopPropagation();let r=M.find(e=>e.id===t);r&&(e.select(r),e.openSheet(`objects`))}),n}function Te(){let e=new Set;s.magnet.list.forEach((t,n)=>{let r=`m${n}`;e.add(r);let a=Se.get(r);a||(a=Ce(n),Se.set(r,a),i.append(a)),a.style.left=`${(t.x+1)/2*100}%`,a.style.top=`${(1-t.y)/2*100}%`,a.firstElementChild.textContent=t.s<0?`S`:`N`});for(let n of t.visibleObjects()){let r=t.centres.get(n.id);if(!r)continue;let a=`o${n.id}`;e.add(a);let o=Se.get(a);o||(o=we(n.id),Se.set(a,o),i.append(o)),o.style.left=`${r[0]*100}%`,o.style.top=`${(1-r[1])*100}%`,o.style.setProperty(`--c`,n.color),o.textContent!==n.name&&(o.textContent=n.name),o.classList.toggle(`sel`,t.selected===n.id)}for(let[t,n]of Se)e.has(t)||(n.remove(),Se.delete(t))}let Ee=``,De=()=>{let e=[s.ui.mode,s.ui.bank,j.map(e=>e?e.id+e.thumb.length+e.name:`-`).join(`,`),M.map(e=>`${e.id}${e.visible}${e.thumb.length}${Math.round(Qt(e)*10)}`).join(`,`),s.sound.pitch,s.sound.scale,s.sound.root,n.bg?.s.id].join(`|`);e!==Ee&&(Ee=e,oe());let t=s.ui.focus+`|`+M.map(e=>e.id).join(`,`)+`|`+n.bg?.s.id;t!==g&&(g=t,w()),s.ui.sheet!==pe&&me(),he.dataset.tool=s.tools.mode,x()};l(De),De();let Oe=!1;return{root:he,tick(){let t=N(),i=s.ui.mode,a=s.ui.bank;for(let e=0;e<16;e++){let o=ne[e],c=!1;i===`clip`?c=n.bgPad===a*16+e:i===`fx`?c=!!vr[a]?.[e]?.on():i===`obj`&&(c=e<4?!!M[e]?.visible:e===11&&s.tools.mode===`track`||e===12&&s.ui.sheet===`objects`),o.classList.toggle(`lit`,c);let l=r.flash.get(Sr.key(i,a,e));o.classList.toggle(`hit`,l!==void 0&&t-l<.09&&t>=l)}let l=P.stepAt(t),d=Math.floor(l/16)%s.seq.bars,f=Math.floor(l/4)%4,p=n.bg?`${n.bgPad>=0?`${`AB`[Math.floor(n.bgPad/16)]}${n.bgPad%16+1}`:``} ${n.lastName}`:`— 패드를 누르세요 —`,m=n.bg&&!n.bg.live?` ${n.bg.pos(t).toFixed(1)}s`:``;o.textContent=`${p}${m}\n${I.playing?`${d+1}.${f+1}`:`-.-`} ${s.seq.bpm}${I.recording?` ●SEQ`:``}${e.rec.recording?`  ●${wi(e.rec.elapsed)}`:``}`,u.classList.toggle(`on`,l-Math.floor(l/4)*4<.6),u.classList.toggle(`down`,Math.floor(l/4)%4==0);let h=s.tools.mode;c.textContent=h===`track`?`TRACK · 따낼 것을 누르세요`:h===`magnet`?`MAGNET · 눌러서 놓기 (${s.magnet.list.length}/2) · × 또는 밖으로 끌어 지우기`:h===`smear`?`SMEAR · 문지르면 녹아 밀림`:h===`tear`?`TEAR · 가로로 그으면 주사선이 찢어짐`:h===`freeze`?`FREEZE · 칠한 곳만 멈춤`:``,e.rec.recording!==Oe&&(Oe=e.rec.recording,x()),Te(),i===`obj`&&M.some(e=>e.track?.running)&&De()},refresh:De}}var Ei=[`#d8d8d8`,`#b0b0b0`,`#e8e0c8`,`#c8c8d8`,`#e0e0e0`];function Di(e){let t=v(`div`,{class:`shelf`}),n=v(`span`,{class:`count`}),r=v(`div`,{class:`view tapes-view`},v(`div`,{class:`view-head`},C(`◀ BACK`,{cls:`small`,onPress:e}),v(`div`,{class:`hdr`},v(`span`,null,`-TAPE SHELF`),v(`i`)),n),t),i=async()=>{let e=await Cn.all().catch(()=>[]);if(n.textContent=String(e.length).padStart(2,`0`),t.textContent=``,!e.length)t.append(v(`div`,{class:`empty`},v(`div`,{class:`cassette ghost`}),v(`p`,null,`아직 녹화한 테이프가 없어요.`),v(`p`,{class:`hint`},`콘솔에서 ● REC를 눌러 녹화하세요.`)));else for(let n of e)t.append(Oi(n,()=>Ai(n,i)))};return i(),{root:r,reload:i}}function Oi(e,t){let n=new Date(e.created),r=v(`button`,{class:`cassette`,type:`button`,style:`--sticker:${Ei[e.color%Ei.length]}`},v(`span`,{class:`reel l`}),v(`span`,{class:`reel r`}),v(`span`,{class:`label`},v(`span`,{class:`hand`},e.label),v(`span`,{class:`meta`},`${n.getFullYear()}.${n.getMonth()+1}.${n.getDate()}`,v(`b`,null,ki(e.duration)))),e.thumb?v(`img`,{class:`thumb`,src:e.thumb,alt:``}):null,v(`span`,{class:`brand`},`T-120 · SP`));return r.addEventListener(`click`,t),r}function ki(e){return`${Math.floor(e/60)}:${String(Math.floor(e%60)).padStart(2,`0`)}`}function Ai(e,t){let n=URL.createObjectURL(e.blob),r=v(`video`,{src:n,playsinline:!0,loop:!0,autoplay:!0}),i=()=>{r.pause(),URL.revokeObjectURL(n),a.remove()},a=v(`div`,{class:`modal`},v(`div`,{class:`tv-set`},v(`div`,{class:`tv-screen`},r,v(`div`,{class:`glass`})),v(`div`,{class:`tv-controls`},v(`span`,{class:`hand`},e.label),v(`i`,{class:`led on`}))),v(`div`,{class:`key-row player-keys`},C(`▶/❚❚`,{cls:`small`,onPress:()=>r.paused?void r.play():r.pause()}),C(`공유`,{cls:`small`,onPress:()=>void En(e)}),C(`저장`,{cls:`small`,onPress:()=>Dn(e)}),C(`라벨`,{cls:`small`,onPress:()=>o()}),C(`지우기`,{cls:`small danger`,onPress:async()=>{let n=a.querySelector(`.key.danger .key-face`);n.textContent===`정말?`?(await Cn.remove(e.id),O(`테이프를 지웠어요`),i(),t()):(n.textContent=`정말?`,setTimeout(()=>n.isConnected&&(n.textContent=`지우기`),3e3))}}),C(`닫기`,{cls:`small`,onPress:i})));function o(){let n=a.querySelector(`.tv-controls .hand`);if(a.querySelector(`.label-edit`))return;let r=v(`input`,{type:`text`,class:`lcd-input label-edit`,maxlength:`40`});r.value=e.label;let i=async()=>{e.label=r.value.trim().slice(0,40)||e.label,await Cn.put(e),n.textContent=e.label,o.remove(),t()};r.addEventListener(`keydown`,e=>e.key===`Enter`&&void i());let o=v(`div`,{class:`key-row player-keys`},r,C(`확인`,{cls:`small`,onPress:()=>void i()}));a.querySelector(`.tv-set`).after(o),r.focus()}document.querySelector(`.screen`).append(a)}function ji(){return[`video/webm;codecs="vp8,opus"`,`video/webm`,`video/mp4;codecs="avc1.42E01E,mp4a.40.2"`,`video/mp4`].find(e=>typeof MediaRecorder<`u`&&MediaRecorder.isTypeSupported(e))||``}var Mi=class{rec=null;mic=null;chunks=[];started=0;get active(){return!!this.rec}async start(e,t){if(this.rec)return!0;e.want(t);for(let n=0;n<60&&!(e.ready&&e.facing===t);n++)await new Promise(e=>setTimeout(e,100));if(!e.stream)return!1;try{this.mic=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!0}})}catch{this.mic=null}let n=[...e.stream.getVideoTracks(),...this.mic?.getAudioTracks()??[]],r=ji();return this.chunks=[],this.rec=new MediaRecorder(new MediaStream(n),{mimeType:r||void 0,videoBitsPerSecond:6e6}),this.rec.ondataavailable=e=>e.data.size&&this.chunks.push(e.data),this.rec.start(250),this.started=performance.now(),!0}stop(){let e=this.rec;return e?new Promise(t=>{e.onstop=()=>{this.mic?.getTracks().forEach(e=>e.stop()),this.mic=null,this.rec=null;let n=(e.mimeType||`video/webm`).split(`;`)[0],r=new Blob(this.chunks,{type:n});t(r.size?r:null)},e.stop()}):Promise.resolve(null)}};h(),s.ui.sheet=``,s.tools.mode=s.tools.mode===`track`?`none`:s.tools.mode,document.documentElement.setAttribute(`data-crt`,String(s.ui.crt)),ae();var Ni=document.getElementById(`app`),Pi=v(`div`,{class:`screen`});Ni.append(Pi);var Fi=v(`div`,{class:`scanlines`}),Ii=new oe;Ii.onError=()=>O(`카메라를 쓸 수 없어요. 테스트 클립이나 영상 파일로 해 보세요.`,4e3);var Q=new _n(Ii);Lt();var $;try{$=new fn(Q)}catch(e){throw Pi.append(v(`div`,{class:`fatal`},v(`b`,null,`NO VIDEO HARDWARE`),v(`p`,null,`이 브라우저는 WebGL2를 지원하지 않아요. 최신 Chrome에서 열어 주세요.`),v(`pre`,null,String(e.message)))),e}var Li=new yn,Ri=new Mi,zi=-1;function Bi(e,t,n){let r=Q.bg;if(!r||Q.bgPad<0)return O(`먼저 CLIP 패드로 배경을 고르세요`),null;if(e!==`shape`&&(r.s.kind===`matte`||r.s.kind===`beam`))return O(`클립·사진·카메라 배경에서 따낼 수 있어요`),null;let i=Jt(e,Q.bgPad,Ii,r);if(!i)return O(`객체는 4개까지예요. LIST에서 지우고 다시`),null;let a=N();if(i.seed.t=r.pos(a),e===`tap`&&t!==void 0&&n!==void 0){let[e,a]=$.screenToSource(r,t,n);i.seed.x=e,i.seed.y=a}return e===`shape`&&(i.line=2,i.fillIn=Q.history.find(e=>e!==Q.bgPad&&j[e])??-2,i.name=`WINDOW ${M.length}`),e===`luma`&&(i.line=9),(e===`tap`||e===`person`)&&(r.live?e===`tap`?Jr.loadTap():Jr.loadPerson():ei(i,d)),s.ui.focus=`obj:`+i.id,d(),i}function Vi(e){F.stop(`obj`+e.id),Xt(e),$.selected===e.id&&($.selected=-1),e.id===zi&&(zi=-1),s.ui.focus===`obj:`+e.id&&(s.ui.focus=`sound`),d()}function Hi(e){$.selected=e?e.id:-1,s.ui.focus=e?`obj:`+e.id:`sound`,d()}var Ui=new Sr(Q,{toggle:e=>{let t=M[e];t&&(t.visible=!t.visible,Q.resync())},solo:(e,t)=>{let n=M[e];n&&(n.solo=t)},pad:e=>{let t=e=>{let t=Bi(`shape`);t&&(t.shape.type=e)};if(e===4)Bi(`person`);else if(e===5)Bi(`luma`);else if(e===6)Bi(`chroma`);else if(e>=7&&e<=10)t(e-7);else if(e===11)s.tools.mode=s.tools.mode===`track`?`none`:`track`,s.tools.mode===`track`&&O(`모니터에서 따낼 것을 누르세요`,1600);else if(e===12)s.ui.sheet=s.ui.sheet===`objects`?``:`objects`;else if(e===13){let e=N(),t=M.every(e=>e.player.frozen);M.forEach(n=>n.player.freeze(!t,e)),Q.resync(e)}else e===14?(M.forEach(e=>{Q.bg&&e.player.s===Q.bg.s&&e.player.copyTiming(Q.bg),e.offset=0}),Q.resync()):e===15&&[...M].forEach(Vi)}}),Wi=e=>j.findIndex(t=>!!t&&e(t));sr({bg:e=>e>=0?Q.cut(e,N()):s.scene.bgOverride=0,first:()=>{let e=Q.bgPad>=0?j[Q.bgPad]:null;return e&&(e.kind===`video`||e.kind===`test`||e.kind===`image`)?Q.bgPad:Wi(e=>e.kind===`video`||e.kind===`test`)},raster:()=>Wi(e=>e.kind===`matte`&&e.matte===0),beam:()=>Wi(e=>e.kind===`beam`),self:()=>Wi(e=>e.kind===`camera`&&e.facing===`user`),person:e=>{let t=M.find(e=>e.kind===`person`&&e.pad===Q.bgPad)??Bi(`person`);t&&(t.fx=e,t.visible=!0)},window:e=>{if(e){let e=Bi(`shape`);e&&(zi=e.id,e.fillOut=-2)}else{let e=M.find(e=>e.id===zi);e&&Vi(e),zi=-1}},windowOn:()=>M.some(e=>e.id===zi),hasObjects:()=>M.length>0,toast:e=>O(e,2200)});var Gi=`sampler`;async function Ki(){let e=await Li.stop(()=>$.grab());if(!e)return O(`녹화된 내용이 없어요`);await Cn.put(e),O(`TAPE SAVED — ${e.label}`)}var qi={renderer:$,scene:Q,pads:Ui,camera:Ii,rec:Li,sampler:Ri,openTapes:()=>Yi(`tapes`),toggleRec:async()=>{if(Li.recording)await Ki();else{_.ensure();try{Li.start($.canvas,s.output.quality===`hd`?8e6:5e6)}catch(e){O(`이 기기에서는 녹화를 지원하지 않아요`),console.warn(e)}}x()},addObject:Bi,dropObject:Vi,openSheet:e=>{s.ui.sheet=s.ui.sheet===e?``:e,d()},select:Hi},Ji=Ti(qi);function Yi(e){Gi=e,Pi.querySelectorAll(`:scope > .view, :scope > .modal`).forEach(e=>e.remove()),e===`sampler`?Pi.prepend(Ji.root):Pi.prepend(Di(()=>Yi(`sampler`)).root),e===`tapes`&&Ii.want(null),d(),x()}Pi.append(Fi),Yi(`sampler`);var Xi=v(`div`,{class:`boot`},v(`span`,null,`PREPARED TV 2`),v(`small`,null,`VIDEO SAMPLER · ⓒ 1963 — 2026`));Pi.append(Xi),setTimeout(()=>Xi.classList.add(`half`),420),setTimeout(()=>Xi.remove(),640),document.addEventListener(`pointerdown`,()=>_.ensure(),{once:!0}),Q.cut(0,N()),Ar(()=>d());var Zi=0,Qi=0;function $i(){if(requestAnimationFrame($i),document.hidden||window.__voPause||Gi!==`sampler`)return;let e=N();I.poll(e,(e,t)=>Ui.fire(e,t)),Ui.tick(e);let t=Q.frame(e),n=$.playersInUse(t);n.forEach(t=>t.tick(e)),Q.manage(n),ii(e=>e.player.element(),e),F.link=xr(),Qi=Math.max(_.bass(),Qi*.88);let r=s.vhs.roll;Zi=((Zi+r*.35*(1/60))%1+1)%1,$.render(t,{pulse:Qi,roll:Zi,snow:pr?.75:0,jitter:pr?.3:0,trackBoost:0,beat:Math.floor(P.beatAt(e))}),Ji.tick(),s.output.quality===`hd`&&$.fps>0&&$.fps<22?ea?e-ea>5&&(s.output.quality=`sd`,$.setOutput(s.output.aspect,`sd`),O(`기기가 버거워해서 SD로 낮췄어요 (SETUP에서 바꿀 수 있어요)`,3e3),ea=0):ea=e:ea=0}var ea=0;requestAnimationFrame($i),document.addEventListener(`visibilitychange`,()=>{document.hidden&&(Ii.want(null),Ui.releaseAll(),m())}),window.addEventListener(`pagehide`,m),$.canvas.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),O(`그래픽 장치가 재시작됐어요. 새로고침해 주세요.`,6e3)}),document.fonts.ready.then(()=>setTimeout(()=>$.refreshStatic(),300));var ta=[`Digit1`,`Digit2`,`Digit3`,`Digit4`,`KeyQ`,`KeyW`,`KeyE`,`KeyR`,`KeyA`,`KeyS`,`KeyD`,`KeyF`,`KeyZ`,`KeyX`,`KeyC`,`KeyV`],na=new Set;window.addEventListener(`keydown`,e=>{if(Gi!==`sampler`||e.target.closest(`input,textarea`)||na.has(e.code))return;na.add(e.code),_.ensure();let t=ta.indexOf(e.code);t>=0?Ui.down(s.ui.mode,s.ui.bank,t):e.code===`Space`?(e.preventDefault(),I.playing?I.stop():I.play()):e.code===`Enter`&&qi.toggleRec()}),window.addEventListener(`keyup`,e=>{na.delete(e.code);let t=ta.indexOf(e.code);t>=0&&Gi===`sampler`&&Ui.up(s.ui.mode,s.ui.bank,t)}),`serviceWorker`in navigator&&location.protocol===`https:`&&window.addEventListener(`load`,()=>navigator.serviceWorker.register(`./sw.js`).catch(()=>{})),window.__vo={state:s,scene:Q,renderer:$,pads:j,objects:M,seq:I,padCtl:Ui,engine:F,addObject:Bi,select:Hi,changed:d,allFx:br,setMode:Yi};