var Kt=Object.defineProperty;var Ft=(n,t,e)=>t in n?Kt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var y=(n,t,e)=>(Ft(n,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=window,ct=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ut=Symbol(),$t=new WeakMap;let Tt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==ut)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ct&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=$t.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&$t.set(e,t))}return t}toString(){return this.cssText}};const Jt=n=>new Tt(typeof n=="string"?n:n+"",void 0,ut),Mt=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[r+1],n[0]);return new Tt(e,n,ut)},Qt=(n,t)=>{ct?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const s=document.createElement("style"),i=D.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)})},pt=ct?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Jt(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var X;const W=window,vt=W.trustedTypes,Xt=vt?vt.emptyScript:"",_t=W.reactiveElementPolyfillSupport,ot={toAttribute(n,t){switch(t){case Boolean:n=n?Xt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},Ot=(n,t)=>t!==n&&(t==t||n==n),Y={attribute:!0,type:String,converter:ot,reflect:!1,hasChanged:Ot};let H=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,s)=>{const i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=Y){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Y}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(pt(i))}else t!==void 0&&e.push(pt(t));return e}static _$Ep(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Qt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=Y){var i;const r=this.constructor._$Ep(t,s);if(r!==void 0&&s.reflect===!0){const o=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:ot).toAttribute(e,s.type);this._$El=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var s;const i=this.constructor,r=i._$Ev.get(t);if(r!==void 0&&this._$El!==r){const o=i.getPropertyOptions(r),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?o.converter:ot;this._$El=r,this[r]=c.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||Ot)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,r)=>this[r]=i),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdate)===null||r===void 0?void 0:r.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};H.finalized=!0,H.elementProperties=new Map,H.elementStyles=[],H.shadowRootOptions={mode:"open"},_t==null||_t({ReactiveElement:H}),((X=W.reactiveElementVersions)!==null&&X!==void 0?X:W.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var G;const Z=window,N=Z.trustedTypes,At=N?N.createPolicy("lit-html",{createHTML:n=>n}):void 0,rt="$lit$",m=`lit$${(Math.random()+"").slice(9)}$`,Rt="?"+m,Yt=`<${Rt}>`,C=document,q=()=>C.createComment(""),k=n=>n===null||typeof n!="object"&&typeof n!="function",Lt=Array.isArray,Gt=n=>Lt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",tt=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ft=/-->/g,mt=/>/g,x=RegExp(`>|${tt}(?:([^\\s"'>=/]+)(${tt}*=${tt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gt=/'/g,yt=/"/g,kt=/^(?:script|style|textarea|title)$/i,I=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),xt=new WeakMap,E=C.createTreeWalker(C,129,null,!1);function It(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return At!==void 0?At.createHTML(t):t}const te=(n,t)=>{const e=n.length-1,s=[];let i,r=t===2?"<svg>":"",o=R;for(let c=0;c<e;c++){const l=n[c];let h,a,d=-1,u=0;for(;u<l.length&&(o.lastIndex=u,a=o.exec(l),a!==null);)u=o.lastIndex,o===R?a[1]==="!--"?o=ft:a[1]!==void 0?o=mt:a[2]!==void 0?(kt.test(a[2])&&(i=RegExp("</"+a[2],"g")),o=x):a[3]!==void 0&&(o=x):o===x?a[0]===">"?(o=i??R,d=-1):a[1]===void 0?d=-2:(d=o.lastIndex-a[2].length,h=a[1],o=a[3]===void 0?x:a[3]==='"'?yt:gt):o===yt||o===gt?o=x:o===ft||o===mt?o=R:(o=x,i=void 0);const $=o===x&&n[c+1].startsWith("/>")?" ":"";r+=o===R?l+Yt:d>=0?(s.push(h),l.slice(0,d)+rt+l.slice(d)+m+$):l+m+(d===-2?(s.push(void 0),c):$)}return[It(n,r+(n[e]||"<?>")+(t===2?"</svg>":"")),s]};let lt=class Bt{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const c=t.length-1,l=this.parts,[h,a]=te(t,e);if(this.el=Bt.createElement(h,s),E.currentNode=this.el.content,e===2){const d=this.el.content,u=d.firstChild;u.remove(),d.append(...u.childNodes)}for(;(i=E.nextNode())!==null&&l.length<c;){if(i.nodeType===1){if(i.hasAttributes()){const d=[];for(const u of i.getAttributeNames())if(u.endsWith(rt)||u.startsWith(m)){const $=a[o++];if(d.push(u),$!==void 0){const Q=i.getAttribute($.toLowerCase()+rt).split(m),f=/([.?@])?(.*)/.exec($);l.push({type:1,index:r,name:f[2],strings:Q,ctor:f[1]==="."?se:f[1]==="?"?ne:f[1]==="@"?oe:F})}else l.push({type:6,index:r})}for(const u of d)i.removeAttribute(u)}if(kt.test(i.tagName)){const d=i.textContent.split(m),u=d.length-1;if(u>0){i.textContent=N?N.emptyScript:"";for(let $=0;$<u;$++)i.append(d[$],q()),E.nextNode(),l.push({type:2,index:++r});i.append(d[u],q())}}}else if(i.nodeType===8)if(i.data===Rt)l.push({type:2,index:r});else{let d=-1;for(;(d=i.data.indexOf(m,d+1))!==-1;)l.push({type:7,index:r}),d+=m.length-1}r++}}static createElement(t,e){const s=C.createElement("template");return s.innerHTML=t,s}};function P(n,t,e=n,s){var i,r,o,c;if(t===I)return t;let l=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl;const h=k(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,e,s)),s!==void 0?((o=(c=e)._$Co)!==null&&o!==void 0?o:c._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=P(n,l._$AS(n,t.values),l,s)),t}let ee=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:i}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:C).importNode(s,!0);E.currentNode=r;let o=E.nextNode(),c=0,l=0,h=i[0];for(;h!==void 0;){if(c===h.index){let a;h.type===2?a=new jt(o,o.nextSibling,this,t):h.type===1?a=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(a=new re(o,this,t)),this._$AV.push(a),h=i[++l]}c!==(h==null?void 0:h.index)&&(o=E.nextNode(),c++)}return E.currentNode=C,r}v(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},jt=class zt{constructor(t,e,s,i){var r;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),k(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==I&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Gt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==p&&k(this._$AH)?this._$AA.nextSibling.data=t:this.$(C.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=lt.createElement(It(i.h,i.h[0]),this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.v(s);else{const o=new ee(r,this),c=o.u(this.options);o.v(s),this.$(c),this._$AH=o}}_$AC(t){let e=xt.get(t.strings);return e===void 0&&xt.set(t.strings,e=new lt(t)),e}T(t){Lt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new zt(this.k(q()),this.k(q()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},F=class{constructor(t,e,s,i,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(r===void 0)t=P(this,t,e,0),o=!k(t)||t!==this._$AH&&t!==I,o&&(this._$AH=t);else{const c=t;let l,h;for(t=r[0],l=0;l<r.length-1;l++)h=P(this,c[s+l],e,l),h===I&&(h=this._$AH[l]),o||(o=!k(h)||h!==this._$AH[l]),h===p?t=p:t!==p&&(t+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},se=class extends F{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}};const ie=N?N.emptyScript:"";let ne=class extends F{constructor(){super(...arguments),this.type=4}j(t){t&&t!==p?this.element.setAttribute(this.name,ie):this.element.removeAttribute(this.name)}},oe=class extends F{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){var s;if((t=(s=P(this,t,e,0))!==null&&s!==void 0?s:p)===I)return;const i=this._$AH,r=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==p&&(i===p||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}},re=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}};const bt=Z.litHtmlPolyfillSupport;bt==null||bt(lt,jt),((G=Z.litHtmlVersions)!==null&&G!==void 0?G:Z.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var et;const K=window,U=K.trustedTypes,Et=U?U.createPolicy("lit-html",{createHTML:n=>n}):void 0,ht="$lit$",g=`lit$${(Math.random()+"").slice(9)}$`,Vt="?"+g,le=`<${Vt}>`,w=document,B=()=>w.createComment(""),j=n=>n===null||typeof n!="object"&&typeof n!="function",Dt=Array.isArray,he=n=>Dt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",st=`[ 	
\f\r]`,L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,St=/-->/g,Ct=/>/g,b=RegExp(`>|${st}(?:([^\\s"'>=/]+)(${st}*=${st}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wt=/'/g,Ht=/"/g,Wt=/^(?:script|style|textarea|title)$/i,ae=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),A=ae(1),T=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Nt=new WeakMap,S=w.createTreeWalker(w,129,null,!1);function Zt(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Et!==void 0?Et.createHTML(t):t}const de=(n,t)=>{const e=n.length-1,s=[];let i,r=t===2?"<svg>":"",o=L;for(let c=0;c<e;c++){const l=n[c];let h,a,d=-1,u=0;for(;u<l.length&&(o.lastIndex=u,a=o.exec(l),a!==null);)u=o.lastIndex,o===L?a[1]==="!--"?o=St:a[1]!==void 0?o=Ct:a[2]!==void 0?(Wt.test(a[2])&&(i=RegExp("</"+a[2],"g")),o=b):a[3]!==void 0&&(o=b):o===b?a[0]===">"?(o=i??L,d=-1):a[1]===void 0?d=-2:(d=o.lastIndex-a[2].length,h=a[1],o=a[3]===void 0?b:a[3]==='"'?Ht:wt):o===Ht||o===wt?o=b:o===St||o===Ct?o=L:(o=b,i=void 0);const $=o===b&&n[c+1].startsWith("/>")?" ":"";r+=o===L?l+le:d>=0?(s.push(h),l.slice(0,d)+ht+l.slice(d)+g+$):l+g+(d===-2?(s.push(void 0),c):$)}return[Zt(n,r+(n[e]||"<?>")+(t===2?"</svg>":"")),s]};class z{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const c=t.length-1,l=this.parts,[h,a]=de(t,e);if(this.el=z.createElement(h,s),S.currentNode=this.el.content,e===2){const d=this.el.content,u=d.firstChild;u.remove(),d.append(...u.childNodes)}for(;(i=S.nextNode())!==null&&l.length<c;){if(i.nodeType===1){if(i.hasAttributes()){const d=[];for(const u of i.getAttributeNames())if(u.endsWith(ht)||u.startsWith(g)){const $=a[o++];if(d.push(u),$!==void 0){const Q=i.getAttribute($.toLowerCase()+ht).split(g),f=/([.?@])?(.*)/.exec($);l.push({type:1,index:r,name:f[2],strings:Q,ctor:f[1]==="."?ue:f[1]==="?"?pe:f[1]==="@"?ve:J})}else l.push({type:6,index:r})}for(const u of d)i.removeAttribute(u)}if(Wt.test(i.tagName)){const d=i.textContent.split(g),u=d.length-1;if(u>0){i.textContent=U?U.emptyScript:"";for(let $=0;$<u;$++)i.append(d[$],B()),S.nextNode(),l.push({type:2,index:++r});i.append(d[u],B())}}}else if(i.nodeType===8)if(i.data===Vt)l.push({type:2,index:r});else{let d=-1;for(;(d=i.data.indexOf(g,d+1))!==-1;)l.push({type:7,index:r}),d+=g.length-1}r++}}static createElement(t,e){const s=w.createElement("template");return s.innerHTML=t,s}}function M(n,t,e=n,s){var i,r,o,c;if(t===T)return t;let l=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl;const h=j(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,e,s)),s!==void 0?((o=(c=e)._$Co)!==null&&o!==void 0?o:c._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=M(n,l._$AS(n,t.values),l,s)),t}class ce{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:i}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:w).importNode(s,!0);S.currentNode=r;let o=S.nextNode(),c=0,l=0,h=i[0];for(;h!==void 0;){if(c===h.index){let a;h.type===2?a=new V(o,o.nextSibling,this,t):h.type===1?a=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(a=new _e(o,this,t)),this._$AV.push(a),h=i[++l]}c!==(h==null?void 0:h.index)&&(o=S.nextNode(),c++)}return S.currentNode=w,r}v(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class V{constructor(t,e,s,i){var r;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=M(this,t,e),j(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==T&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):he(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==v&&j(this._$AH)?this._$AA.nextSibling.data=t:this.$(w.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=z.createElement(Zt(i.h,i.h[0]),this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.v(s);else{const o=new ce(r,this),c=o.u(this.options);o.v(s),this.$(c),this._$AH=o}}_$AC(t){let e=Nt.get(t.strings);return e===void 0&&Nt.set(t.strings,e=new z(t)),e}T(t){Dt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new V(this.k(B()),this.k(B()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class J{constructor(t,e,s,i,r){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=v}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(r===void 0)t=M(this,t,e,0),o=!j(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else{const c=t;let l,h;for(t=r[0],l=0;l<r.length-1;l++)h=M(this,c[s+l],e,l),h===T&&(h=this._$AH[l]),o||(o=!j(h)||h!==this._$AH[l]),h===v?t=v:t!==v&&(t+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!i&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ue extends J{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}}const $e=U?U.emptyScript:"";class pe extends J{constructor(){super(...arguments),this.type=4}j(t){t&&t!==v?this.element.setAttribute(this.name,$e):this.element.removeAttribute(this.name)}}class ve extends J{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){var s;if((t=(s=M(this,t,e,0))!==null&&s!==void 0?s:v)===T)return;const i=this._$AH,r=t===v&&i!==v||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==v&&(i===v||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class _e{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t)}}const Pt=K.litHtmlPolyfillSupport;Pt==null||Pt(z,V),((et=K.litHtmlVersions)!==null&&et!==void 0?et:K.litHtmlVersions=[]).push("2.7.5");const Ae=(n,t,e)=>{var s,i;const r=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let o=r._$litPart$;if(o===void 0){const c=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;r._$litPart$=o=new V(t.insertBefore(B(),c),c,void 0,e??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var it,nt;class _ extends H{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ae(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return T}}_.finalized=!0,_._$litElement$=!0,(it=globalThis.litElementHydrateSupport)===null||it===void 0||it.call(globalThis,{LitElement:_});const Ut=globalThis.litElementPolyfillSupport;Ut==null||Ut({LitElement:_});((nt=globalThis.litElementVersions)!==null&&nt!==void 0?nt:globalThis.litElementVersions=[]).push("3.3.2");class qt extends _{constructor(){super(),this.class="fa-solid fa-face-smile"}render(){return A`<i class="${this.class}">!</i>`}}y(qt,"properties",{class:{}});customElements.define("fa-i",qt);class at extends _{constructor(){super()}render(){return A`<div class="flex" style="${this.styles}"><slot></slot></div>`}}y(at,"properties",{styles:""}),y(at,"styles",Mt`
          .flex {
            display: flex;
            align-items: center;
            justify-content: space-around;
          }
        `);customElements.define("flex-box",at);class fe extends _{render(){return A`<flex-box styles="flex-direction: column; ${this.styles}"><slot></slot></grid-box>`}}customElements.define("v-box",fe);class me extends _{render(){return A`<flex-box styles="flex-direction: row;"><slot></slot></grid-box>`}}customElements.define("h-box",me);class dt extends _{constructor(){super()}render(){return A`<div class="grid" style="${this.styles}"><slot></slot></div>`}}y(dt,"properties",{styles:""}),y(dt,"styles",Mt`
          .grid {
            display: grid;
            align-items: center;
            gap: 10px;
          }
        `);customElements.define("grid-box",dt);class O extends _{constructor(){super()}}y(O,"properties",{styles:""});class ge extends O{render(){return A`<grid-box styles="grid-template-columns: repeat(2, 1fr); ${this.styles}"><slot></slot></grid-box>`}}customElements.define("columns-2",ge);class ye extends O{render(){return A`<grid-box styles="grid-template-columns: repeat(3, 1fr); ${this.styles}"><slot></slot></grid-box>`}}customElements.define("columns-3",ye);class xe extends O{render(){return A`<grid-box styles="grid-template-columns: repeat(4, 1fr); ${this.styles}"><slot></slot></grid-box>`}}customElements.define("columns-4",xe);class be extends O{render(){return A`<grid-box styles="grid-template-columns: repeat(5, 1fr); ${this.styles}"><slot></slot></grid-box>`}}customElements.define("columns-5",be);class Ee extends O{render(){return A`<grid-box styles="grid-template-columns: repeat(6, 1fr); ${this.styles}"><slot></slot></grid-box>`}}customElements.define("columns-6",Ee);