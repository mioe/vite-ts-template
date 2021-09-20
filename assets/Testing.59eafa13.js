import{g as e,r as t,o as n,c as r,a,F as o,v as s,G as i,t as l,H as u,I as c,y as p,m as d,e as f,h,w as m,i as v,x as g,J as b,j as x,T as y,K as w,L as k,l as j,b as S,M as C}from"./vendor.682f5683.js";import{_ as E,a as A,b as L}from"./index.17fff8ac.js";const M=a("h2",null,"TestingColors",-1),O={class:"flex flex-wrap"},T=a("h2",null,"TestingColors - Text Classes",-1),N=e({setup(e){const u=t(["--document","--primary","--secondary","--default","--success","--danger"]),c=t(["--poor","--common","--uncommon","--rare","--epic","--legendary","--artifact","--heirloom"]);return(e,t)=>(n(),r("div",null,[M,a("div",O,[(n(!0),r(o,null,s(u.value,(e=>(n(),r("div",{key:e,class:"border p-[4px] mr-[16px] mb-[8px]",style:i(`background: var(${e});`)},l(e),5)))),128))]),T,(n(!0),r(o,null,s(c.value,(e=>(n(),r("p",{key:e,style:i(`color: var(${e});`)}," ["+l(e)+"] - Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eius, rerum repellat quam tenetur earum repudiandae iusto enim temporibus libero aliquam adipisci quod. Dolores velit nam itaque ea ullam sed. ",5)))),128))]))}}),B={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},R=[a("path",{d:"M28 6v20H4V6h24m0-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z",fill:"currentColor"},null,-1),a("path",{d:"M6 8h10v2H6z",fill:"currentColor"},null,-1),a("path",{d:"M6 12h10v2H6z",fill:"currentColor"},null,-1),a("path",{d:"M6 16h6v2H6z",fill:"currentColor"},null,-1)];var V={name:"carbon-dicom-overlay",render:function(e,t){return n(),r("svg",B,R)}};const P=a("h2",null,"TestingDefaultClasses",-1),U=a("span",{class:"ml-[10px]"},"set clear class",-1),H={class:"space-y-[10px]"},q={class:"block"},z=a("p",null,"input:",-1),_={class:"block"},D=a("p",null,"textarea:",-1),F={class:"block"},I=a("p",null,"select:",-1),$=[a("option",{value:"1"},"1",-1),a("option",{value:"2"},"2",-1),a("option",{value:"3"},"3",-1)],J={class:"inline-flex flex-wrap"},G=[a("span",null,"My",-1),a("span",null,"button",-1)],X=a("span",null,"Button",-1),Y=e({setup(e){const o=t(!1);return(e,t)=>{const s=V;return n(),r("section",null,[P,a("label",null,[u(a("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.value=e),type:"checkbox"},null,512),[[c,o.value]]),U]),a("div",H,[a("label",q,[z,a("input",{type:"text",class:p({clear:o.value})},null,2)]),a("label",_,[D,a("textarea",{class:p({clear:o.value})},null,2)]),a("label",F,[I,a("select",{class:p({clear:o.value})},$,2)]),a("div",J,[a("button",{class:p({clear:o.value})}," Button ",2),a("button",{class:p({clear:o.value})}," My button ",2),a("button",{class:p({clear:o.value})},G,2),a("button",{class:p({clear:o.value})},[d(s),X],2),a("button",{class:p({clear:o.value})},[d(s)],2),a("button",{class:p([{clear:o.value},"success"])}," My success button ",2),a("button",{class:p([{clear:o.value},"danger"])}," My danger button ",2)])])])}}}),K=["for"],W=["id","type","value","disabled"],Q=e({props:{modelValue:{type:String,default:""},id:{type:String,default:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)},type:{type:String,default:"text"},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const s=e,i=t(!1),u=f((()=>!!s.modelValue&&s.modelValue.length>0)),c=()=>{i.value=!0},d=()=>{i.value=!1},m=e=>{o("update:modelValue",e.target.value)};return(t,o)=>(n(),r("label",{for:e.id,class:p(["relative inline-block w-full border bg-$primary",{"border-$rare":i.value&&!e.disabled}])},[a("input",{id:e.id,type:e.type,value:e.modelValue,disabled:e.disabled,placeholder:"",class:"clear w-full min-h-[34px] px-[10px] pt-[16px] pb-[2px] text-[16px] focus:outline-none bg-transparent",onFocus:c,onBlur:d,onInput:m},null,40,W),a("span",{class:p(["absolute inline-block top-0 left-[10px] text-[16px] transform",i.value||h(u)?"translate-y-[2px] scale-70":"translate-y-[10px] scale-100"]),style:{transition:"transform var(--transition)","transform-origin":"top left"}},l(e.placeholder),3)],10,K))}}),Z=["for"],ee=["id","value","disabled"],te=e({props:{modelValue:{type:String,default:""},id:{type:String,default:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)},type:{type:String,default:"text"},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const s=e,i=t(!1),u=f((()=>!!s.modelValue&&s.modelValue.length>0)),c=()=>{i.value=!0},d=()=>{i.value=!1},m=e=>{o("update:modelValue",e.target.value)};return(t,o)=>(n(),r("label",{for:e.id,class:p(["relative inline-block w-full border bg-$primary",{"border-$rare":i.value&&!e.disabled}])},[a("textarea",{id:e.id,value:e.modelValue,disabled:e.disabled,placeholder:"",class:"clear w-full min-h-[34px] px-[10px] pt-[16px] pb-[2px] text-[16px] focus:outline-none bg-transparent",onFocus:c,onBlur:d,onInput:m},null,40,ee),a("span",{class:p(["absolute inline-block top-0 left-[10px] text-[16px] transform",i.value||h(u)?"translate-y-[2px] scale-70":"translate-y-[10px] scale-100"]),style:{transition:"transform var(--transition)","transform-origin":"top left"}},l(e.placeholder),3)],10,Z))}}),ne=a("h2",null,"TestingForm",-1),re={class:"space-y-[5px]"},ae=e({setup(e){const o=t("");return(e,t)=>{const s=Q,i=te;return n(),r("div",null,[ne,a("div",re,[d(s,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=e=>o.value=e),placeholder:"FormMaterialInput"},null,8,["modelValue"]),d(i,{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=e=>o.value=e),placeholder:"FormMaterialTextarea"},null,8,["modelValue"])])])}}});var oe={exports:{}},se=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},ie=se,le=Object.prototype.toString;function ue(e){return"[object Array]"===le.call(e)}function ce(e){return void 0===e}function pe(e){return null!==e&&"object"==typeof e}function de(e){if("[object Object]"!==le.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function fe(e){return"[object Function]"===le.call(e)}function he(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),ue(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}var me={isArray:ue,isArrayBuffer:function(e){return"[object ArrayBuffer]"===le.call(e)},isBuffer:function(e){return null!==e&&!ce(e)&&null!==e.constructor&&!ce(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:pe,isPlainObject:de,isUndefined:ce,isDate:function(e){return"[object Date]"===le.call(e)},isFile:function(e){return"[object File]"===le.call(e)},isBlob:function(e){return"[object Blob]"===le.call(e)},isFunction:fe,isStream:function(e){return pe(e)&&fe(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:he,merge:function e(){var t={};function n(n,r){de(t[r])&&de(n)?t[r]=e(t[r],n):de(n)?t[r]=e({},n):ue(n)?t[r]=n.slice():t[r]=n}for(var r=0,a=arguments.length;r<a;r++)he(arguments[r],n);return t},extend:function(e,t,n){return he(t,(function(t,r){e[r]=n&&"function"==typeof t?ie(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}},ve=me;function ge(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var be=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(ve.isURLSearchParams(t))r=t.toString();else{var a=[];ve.forEach(t,(function(e,t){null!=e&&(ve.isArray(e)?t+="[]":e=[e],ve.forEach(e,(function(e){ve.isDate(e)?e=e.toISOString():ve.isObject(e)&&(e=JSON.stringify(e)),a.push(ge(t)+"="+ge(e))})))})),r=a.join("&")}if(r){var o=e.indexOf("#");-1!==o&&(e=e.slice(0,o)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e},xe=me;function ye(){this.handlers=[]}ye.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},ye.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},ye.prototype.forEach=function(e){xe.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var we=ye,ke=me,je=function(e,t,n,r,a){return e.config=t,n&&(e.code=n),e.request=r,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},Se=je,Ce=function(e,t,n,r,a){var o=new Error(e);return Se(o,t,n,r,a)},Ee=Ce,Ae=me,Le=Ae.isStandardBrowserEnv()?{write:function(e,t,n,r,a,o){var s=[];s.push(e+"="+encodeURIComponent(t)),Ae.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),Ae.isString(r)&&s.push("path="+r),Ae.isString(a)&&s.push("domain="+a),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},Me=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},Oe=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},Te=me,Ne=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Be=me,Re=Be.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=Be.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0},Ve=me,Pe=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(Ee("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)},Ue=Le,He=be,qe=function(e,t){return e&&!Me(t)?Oe(e,t):t},ze=function(e){var t,n,r,a={};return e?(Te.forEach(e.split("\n"),(function(e){if(r=e.indexOf(":"),t=Te.trim(e.substr(0,r)).toLowerCase(),n=Te.trim(e.substr(r+1)),t){if(a[t]&&Ne.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a},_e=Re,De=Ce,Fe=function(e){return new Promise((function(t,n){var r=e.data,a=e.headers,o=e.responseType;Ve.isFormData(r)&&delete a["Content-Type"];var s=new XMLHttpRequest;if(e.auth){var i=e.auth.username||"",l=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.Authorization="Basic "+btoa(i+":"+l)}var u=qe(e.baseURL,e.url);function c(){if(s){var r="getAllResponseHeaders"in s?ze(s.getAllResponseHeaders()):null,a={data:o&&"text"!==o&&"json"!==o?s.response:s.responseText,status:s.status,statusText:s.statusText,headers:r,config:e,request:s};Pe(t,n,a),s=null}}if(s.open(e.method.toUpperCase(),He(u,e.params,e.paramsSerializer),!0),s.timeout=e.timeout,"onloadend"in s?s.onloadend=c:s.onreadystatechange=function(){s&&4===s.readyState&&(0!==s.status||s.responseURL&&0===s.responseURL.indexOf("file:"))&&setTimeout(c)},s.onabort=function(){s&&(n(De("Request aborted",e,"ECONNABORTED",s)),s=null)},s.onerror=function(){n(De("Network Error",e,null,s)),s=null},s.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(De(t,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",s)),s=null},Ve.isStandardBrowserEnv()){var p=(e.withCredentials||_e(u))&&e.xsrfCookieName?Ue.read(e.xsrfCookieName):void 0;p&&(a[e.xsrfHeaderName]=p)}"setRequestHeader"in s&&Ve.forEach(a,(function(e,t){void 0===r&&"content-type"===t.toLowerCase()?delete a[t]:s.setRequestHeader(t,e)})),Ve.isUndefined(e.withCredentials)||(s.withCredentials=!!e.withCredentials),o&&"json"!==o&&(s.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&s.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&s.upload&&s.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){s&&(s.abort(),n(e),s=null)})),r||(r=null),s.send(r)}))},Ie=me,$e=function(e,t){ke.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},Je=je,Ge={"Content-Type":"application/x-www-form-urlencoded"};function Xe(e,t){!Ie.isUndefined(e)&&Ie.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var Ye,Ke={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(Ye=Fe),Ye),transformRequest:[function(e,t){return $e(t,"Accept"),$e(t,"Content-Type"),Ie.isFormData(e)||Ie.isArrayBuffer(e)||Ie.isBuffer(e)||Ie.isStream(e)||Ie.isFile(e)||Ie.isBlob(e)?e:Ie.isArrayBufferView(e)?e.buffer:Ie.isURLSearchParams(e)?(Xe(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):Ie.isObject(e)||t&&"application/json"===t["Content-Type"]?(Xe(t,"application/json"),function(e,t,n){if(Ie.isString(e))try{return(t||JSON.parse)(e),Ie.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional,n=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,a=!n&&"json"===this.responseType;if(a||r&&Ie.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(a){if("SyntaxError"===o.name)throw Je(o,this,"E_JSON_PARSE");throw o}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};Ke.headers={common:{Accept:"application/json, text/plain, */*"}},Ie.forEach(["delete","get","head"],(function(e){Ke.headers[e]={}})),Ie.forEach(["post","put","patch"],(function(e){Ke.headers[e]=Ie.merge(Ge)}));var We=Ke,Qe=me,Ze=We,et=function(e){return!(!e||!e.__CANCEL__)},tt=me,nt=function(e,t,n){var r=this||Ze;return Qe.forEach(n,(function(n){e=n.call(r,e,t)})),e},rt=et,at=We;function ot(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var st=me,it=function(e,t){t=t||{};var n={},r=["url","method","data"],a=["headers","auth","proxy","params"],o=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function i(e,t){return st.isPlainObject(e)&&st.isPlainObject(t)?st.merge(e,t):st.isPlainObject(t)?st.merge({},t):st.isArray(t)?t.slice():t}function l(r){st.isUndefined(t[r])?st.isUndefined(e[r])||(n[r]=i(void 0,e[r])):n[r]=i(e[r],t[r])}st.forEach(r,(function(e){st.isUndefined(t[e])||(n[e]=i(void 0,t[e]))})),st.forEach(a,l),st.forEach(o,(function(r){st.isUndefined(t[r])?st.isUndefined(e[r])||(n[r]=i(void 0,e[r])):n[r]=i(void 0,t[r])})),st.forEach(s,(function(r){r in t?n[r]=i(e[r],t[r]):r in e&&(n[r]=i(void 0,e[r]))}));var u=r.concat(a).concat(o).concat(s),c=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===u.indexOf(e)}));return st.forEach(c,l),n};var lt={_from:"axios@^0.21.4",_id:"axios@0.21.4",_inBundle:!1,_integrity:"sha512-ut5vewkiu8jjGBdqpM44XxjuCjq9LAKeHVmoVfHVzy8eHgxxq8SbAVQNovDA8mVi05kP0Ea/n/UzcSHcTJQfNg==",_location:"/axios",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"axios@^0.21.4",name:"axios",escapedName:"axios",rawSpec:"^0.21.4",saveSpec:null,fetchSpec:"^0.21.4"},_requiredBy:["/"],_resolved:"https://registry.npmjs.org/axios/-/axios-0.21.4.tgz",_shasum:"c67b90dc0568e5c1cf2b0b858c43ba28e2eda575",_spec:"axios@^0.21.4",_where:"/home/runner/work/vite-ts-template/vite-ts-template",author:{name:"Matt Zabriskie"},browser:{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},bugs:{url:"https://github.com/axios/axios/issues"},bundleDependencies:!1,bundlesize:[{path:"./dist/axios.min.js",threshold:"5kB"}],dependencies:{"follow-redirects":"^1.14.0"},deprecated:!1,description:"Promise based HTTP client for the browser and node.js",devDependencies:{coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},homepage:"https://axios-http.com",jsdelivr:"dist/axios.min.js",keywords:["xhr","http","ajax","promise","node"],license:"MIT",main:"index.js",name:"axios",repository:{type:"git",url:"git+https://github.com/axios/axios.git"},scripts:{build:"NODE_ENV=production grunt build",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",examples:"node ./examples/server.js",fix:"eslint --fix lib/**/*.js",postversion:"git push && git push --tags",preversion:"npm test",start:"node ./sandbox/server.js",test:"grunt test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"},typings:"./index.d.ts",unpkg:"dist/axios.min.js",version:"0.21.4"},ut={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){ut[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var ct={},pt=lt.version.split(".");function dt(e,t){for(var n=t?t.split("."):pt,r=e.split("."),a=0;a<3;a++){if(n[a]>r[a])return!0;if(n[a]<r[a])return!1}return!1}ut.transitional=function(e,t,n){var r=t&&dt(t);function a(e,t){return"[Axios v"+lt.version+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,o,s){if(!1===e)throw new Error(a(o," has been removed in "+t));return r&&!ct[o]&&(ct[o]=!0,console.warn(a(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}};var ft=me,ht=be,mt=we,vt=function(e){return ot(e),e.headers=e.headers||{},e.data=nt.call(e,e.data,e.headers,e.transformRequest),e.headers=tt.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),tt.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||at.adapter)(e).then((function(t){return ot(e),t.data=nt.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return rt(t)||(ot(e),t&&t.response&&(t.response.data=nt.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},gt=it,bt={isOlderVersion:dt,assertOptions:function(e,t,n){if("object"!=typeof e)throw new TypeError("options must be an object");for(var r=Object.keys(e),a=r.length;a-- >0;){var o=r[a],s=t[o];if(s){var i=e[o],l=void 0===i||s(i,o,e);if(!0!==l)throw new TypeError("option "+o+" must be "+l)}else if(!0!==n)throw Error("Unknown option "+o)}},validators:ut},xt=bt.validators;function yt(e){this.defaults=e,this.interceptors={request:new mt,response:new mt}}yt.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=gt(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&bt.assertOptions(t,{silentJSONParsing:xt.transitional(xt.boolean,"1.0.0"),forcedJSONParsing:xt.transitional(xt.boolean,"1.0.0"),clarifyTimeoutError:xt.transitional(xt.boolean,"1.0.0")},!1);var n=[],r=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(r=r&&t.synchronous,n.unshift(t.fulfilled,t.rejected))}));var a,o=[];if(this.interceptors.response.forEach((function(e){o.push(e.fulfilled,e.rejected)})),!r){var s=[vt,void 0];for(Array.prototype.unshift.apply(s,n),s=s.concat(o),a=Promise.resolve(e);s.length;)a=a.then(s.shift(),s.shift());return a}for(var i=e;n.length;){var l=n.shift(),u=n.shift();try{i=l(i)}catch(c){u(c);break}}try{a=vt(i)}catch(c){return Promise.reject(c)}for(;o.length;)a=a.then(o.shift(),o.shift());return a},yt.prototype.getUri=function(e){return e=gt(this.defaults,e),ht(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},ft.forEach(["delete","get","head","options"],(function(e){yt.prototype[e]=function(t,n){return this.request(gt(n||{},{method:e,url:t,data:(n||{}).data}))}})),ft.forEach(["post","put","patch"],(function(e){yt.prototype[e]=function(t,n,r){return this.request(gt(r||{},{method:e,url:t,data:n}))}}));var wt=yt;function kt(e){this.message=e}kt.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},kt.prototype.__CANCEL__=!0;var jt=kt,St=jt;function Ct(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new St(e),t(n.reason))}))}Ct.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},Ct.source=function(){var e;return{token:new Ct((function(t){e=t})),cancel:e}};var Et=Ct,At=me,Lt=se,Mt=wt,Ot=it;function Tt(e){var t=new Mt(e),n=Lt(Mt.prototype.request,t);return At.extend(n,Mt.prototype,t),At.extend(n,t),n}var Nt=Tt(We);Nt.Axios=Mt,Nt.create=function(e){return Tt(Ot(Nt.defaults,e))},Nt.Cancel=jt,Nt.CancelToken=Et,Nt.isCancel=et,Nt.all=function(e){return Promise.all(e)},Nt.spread=function(e){return function(t){return e.apply(null,t)}},Nt.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError},oe.exports=Nt,oe.exports.default=Nt;var Bt=oe.exports.create({headers:{Accept:"application/json"}});const Rt=a("h2",null,"TestingGetData",-1),Vt={key:0},Pt={key:1,class:"relative w-full h-24 overflow-y-auto border bg-$secondary"},Ut=e({setup(e){const i=t(!1),u=t([]),c=async()=>{i.value=!0;try{const e=await Bt.get("https://jsonplaceholder.typicode.com/posts");u.value=e.data,i.value=!1}catch(e){i.value=!1,console.error("🐹 fakeApi",e)}};return(e,t)=>(n(),r("section",null,[a("div",null,[Rt,a("button",{onClick:c}," getData() ")]),i.value?(n(),r("p",Vt," Loading... ")):(n(),r("ul",Pt,[(n(!0),r(o,null,s(u.value,((e,t)=>(n(),r("li",{key:t},l(e),1)))),128))]))]))}}),Ht={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},qt=[a("path",{d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z",fill:"currentColor"},null,-1)];var zt={name:"carbon-close",render:function(e,t){return n(),r("svg",Ht,qt)}};const _t={key:0,class:"fixed z-11 top-0 left-0 w-full h-full bg-[rgba(0,0,0,.9)]"},Dt=a("div",{class:"h-[30px]"},null,-1),Ft=a("div",{class:"h-[30px]"},null,-1),It=e({props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const o=e,s=f((()=>o.modelValue));return m(s,(e=>{e?document.body.classList.add("is-blocked"):document.body.classList.remove("is-blocked")})),(o,s)=>{const i=zt;return n(),v(w,{to:"body"},[d(y,{name:"fade"},{default:g((()=>[e.modelValue?(n(),r("section",_t,[a("button",{class:"absolute top-[2px] right-[2px] w-[50px] h-[50px] p-0 grid place-items-center ring-2 ring-$poor text-[30px] focus:ring-$rare",onClick:s[0]||(s[0]=e=>{t("update:modelValue",!1)})},[d(i)]),Dt,b(o.$slots,"default"),Ft])):x("",!0)])),_:3})])}}}),$t=a("h2",null,"TestingModals",-1),Jt={class:"space-y-[5px]"},Gt=a("section",null," Hello world ",-1),Xt=e({setup(e){const o=t(!1);return(e,t)=>{const s=It;return n(),r("section",null,[$t,a("div",Jt,[a("button",{onClick:t[0]||(t[0]=e=>o.value=!0)}," Open Modal "),d(s,{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=e=>o.value=e)},{default:g((()=>[Gt])),_:1},8,["modelValue"])])])}}}),Yt=k("store",{state:()=>({name:"",hello:"hello"}),getters:{greetings(){return`${this.hello} ${this.name}`}},actions:{changeName(e){this.name=e}}}),Kt=a("h2",null,"TestingPinia",-1),Wt={class:"space-y-[5px]"},Qt={for:"hello"},Zt=j("greetings = "),en=["value"],tn=e({setup(e){const t=Yt(),{changeName:o}=t,s=f((()=>t.name)),i=f((()=>t.greetings)),u=e=>o(e.target.value);return(e,t)=>(n(),r("section",null,[Kt,a("div",Wt,[a("label",Qt,[a("p",null,[Zt,a("b",null,l(h(i)),1)]),a("input",{id:"hello",type:"text",value:h(s),onInput:u},null,40,en)])])]))}}),nn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},rn=[a("path",{d:"M27.562 26L17.17 8.928l2.366-3.888L17.828 4L16 7.005L14.17 4l-1.708 1.04l2.366 3.888L4.438 26H2v2h28v-2zM16 10.85L25.22 26H17v-8h-2v8H6.78z",fill:"currentColor"},null,-1)];var an={name:"carbon-campsite",render:function(e,t){return n(),r("svg",nn,rn)}};const on={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},sn=[S('<path d="M18 19h6v2h-6z" fill="currentColor"></path><path d="M18 15h12v2H18z" fill="currentColor"></path><path d="M18 11h12v2H18z" fill="currentColor"></path><path d="M14 21v-2H9v-2H7v2H2v2h8.215a8.591 8.591 0 0 1-2.216 3.977A9.273 9.273 0 0 1 6.552 23H4.333a10.855 10.855 0 0 0 2.145 3.297A14.658 14.658 0 0 1 3 28.127L3.702 30a16.42 16.42 0 0 0 4.29-2.336A16.488 16.488 0 0 0 12.299 30L13 28.127A14.664 14.664 0 0 1 9.523 26.3a10.313 10.313 0 0 0 2.729-5.3z" fill="currentColor"></path><path d="M11.167 13h2.166L8.75 2H6.583L2 13h2.166L5 11h5.333zM5.833 9l1.833-4.4L9.5 9z" fill="currentColor"></path>',5)];var ln={name:"carbon-language",render:function(e,t){return n(),r("svg",on,sn)}};const un={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},cn=[a("path",{d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2z","fill-rule":"evenodd",fill:"currentColor"},null,-1)];var pn={name:"carbon-logo-github",render:function(e,t){return n(),r("svg",un,cn)}};const dn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},fn=[a("path",{d:"M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z",fill:"currentColor"},null,-1)];var hn={name:"carbon-chevron-down",render:function(e,t){return n(),r("svg",dn,fn)}};const mn={},vn=a("h2",null,"TestingVitePluginIcons",-1);var gn=E(mn,[["render",function(e,t){const a=an,o=A,s=L,i=ln,l=V,u=pn,c=hn;return n(),r("section",null,[vn,d(a),d(o),d(s),d(i),d(l),d(u),d(c)])}]]);const bn=e({setup(e){const{availableLocales:t,locale:a}=C();return(e,o)=>(n(),r("button",{class:"justify-center uppercase",onClick:o[0]||(o[0]=e=>(()=>{const e=t;a.value=e[(e.indexOf(a.value)+1)%e.length],localStorage.setItem("i18n",a.value)})())},l(h(a)),1))}}),xn=a("h2",null,"TestingVueI18n",-1),yn=e({setup(e){const{t:t}=C();return(e,o)=>(n(),r("section",null,[xn,a("p",null,"Hello: "+l(h(t)("hello")),1),d(bn)]))}}),wn={},kn={class:"relative"},jn={class:"container mx-auto pt-[10px] px-[16px]"},Sn=a("h1",{class:"text-xl mb-[20px]"}," Testing ",-1),Cn={class:"space-y-[20px] pb-[40px]"};var En=E(wn,[["render",function(e,t){const o=N,s=Y,i=ae,l=Ut,u=Xt,c=tn,p=gn,f=yn;return n(),r("main",kn,[a("div",jn,[Sn,a("div",Cn,[d(o),d(s),d(i),d(l),d(u),d(c),d(p),d(f)])])])}]]);export{En as default};
