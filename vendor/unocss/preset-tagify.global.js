"use strict";(()=>{var a="__TAGIFY__",m=/<([\w\d-:]+)/g;function f(t){let{prefix:r="",excludedTags:i=["b",/^h\d+$/,"table"]}=t;return{name:"tagify",extract({code:n}){return Array.from(n.matchAll(m)).filter(({1:e})=>{for(let o of i)if(typeof o=="string"){if(e===o)return!1}else if(o.test(e))return!1;return e.startsWith(r)}).map(([,e])=>`${a}${e}`)}}}function p(t){let{extraProperties:r}=t,i=`${a}${t.prefix??""}`;return{name:"tagify",match(n){if(!n.startsWith(i))return;let e=n.slice(i.length),o={matcher:e,selector:s=>s.slice(a.length+1)};return r&&(typeof r=="function"?o.body=s=>[...s,...Object.entries(r(e)??{})]:o.body=s=>[...s,...Object.entries(r)]),o}}}var y=(t={})=>{let{defaultExtractor:r=!0}=t,i=[p(t)],n=[f(t)];return{name:"@unocss/preset-tagify",variants:i,extractors:n,extractorDefault:r?void 0:!1}},c=y;window.__unocss_runtime=window.__unocss_runtime??{};window.__unocss_runtime.presets=Object.assign(window.__unocss_runtime?.presets??{},{presetTagify:t=>c(t)});})();