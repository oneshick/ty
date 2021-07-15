(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var l="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a}; 
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var ca=ba(this),da="function"===typeof Symbol&&"symbol"===typeof Symbol("x"),t={},ea={};function v(a,b){var c=ea[b];if(null==c)return a[b];c=a[c];return void 0!==c?c:a[b]} 
function w(a,b,c){if(b)a:{var d=a.split(".");a=1===d.length;var e=d[0],f;!a&&e in t?f=t:f=ca;for(e=0;e<d.length-1;e++){var g=d[e];if(!(g in f))break a;f=f[g]}d=d[d.length-1];c=da&&"es6"===c?f[d]:null;b=b(c);null!=b&&(a?l(t,d,{configurable:!0,writable:!0,value:b}):b!==c&&(void 0===ea[d]&&(a=1E9*Math.random()>>>0,ea[d]=da?ca.Symbol(d):"$jscp$"+a+"$"+d),l(f,ea[d],{configurable:!0,writable:!0,value:b})))}} 
w("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}function c(f,g){this.g=f;l(this,"description",{configurable:!0,writable:!0,value:g})}if(a)return a;c.prototype.toString=function(){return this.g};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b},"es6"); 
w("Symbol.iterator",function(a){if(a)return a;a=(0,t.Symbol)("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ca[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&l(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a},"es6");function fa(a){a={next:a};a[v(t.Symbol,"iterator")]=function(){return this};return a} 
w("String.prototype.endsWith",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");void 0===c&&(c=this.length);c=Math.max(0,Math.min(c|0,this.length));for(var d=b.length;0<d&&0<c;)if(this[--c]!=b[--d])return!1;return 0>=d}},"es6"); 
function ha(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};e[v(t.Symbol,"iterator")]=function(){return e};return e}w("Array.prototype.values",function(a){return a?a:function(){return ha(this,function(b,c){return c})}},"es8");w("Array.prototype.keys",function(a){return a?a:function(){return ha(this,function(b){return b})}},"es6"); 
w("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push(b[d]);return c}},"es8");var A=this||self;function ia(a){return a};function ja(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a};function ka(a,b){this.i=a===la&&b||"";this.g=ma}var ma={},la={};var na=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},oa=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};var pa;function qa(a,b){this.g=b===ra?a:""}qa.prototype.toString=function(){return this.g+""};var ra={};function sa(a){if(void 0===pa){var b=null;var c=A.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("goog#html",{createHTML:ia,createScript:ia,createScriptURL:ia})}catch(d){A.console&&A.console.error(d.message)}pa=b}else pa=b}a=(b=pa)?b.createScriptURL(a):a;return new qa(a,ra)};var xa;a:{var ya=A.navigator;if(ya){var za=ya.userAgent;if(za){xa=za;break a}}xa=""};function Aa(a,b){a.src=b instanceof qa&&b.constructor===qa?b.g:"type_error:TrustedResourceUrl";var c;b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document;(c=(b=null===(c=b.querySelector)||void 0===c?void 0:c.call(b,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)};function Ba(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};function Ca(a){Ca[" "](a);return a}Ca[" "]=function(){};function Da(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)};var Ea=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Fa(a){var b=a.match(Ea);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}function Ga(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}var Ha=/#|$/; 
function Ia(a,b){var c=a.search(Ha),d=Ga(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}var Ja=/[?&]($|#)/; 
function B(a,b,c){for(var d=a.search(Ha),e=0,f,g=[];0<=(f=Ga(a,e,b,d));)g.push(a.substring(e,f)),e=Math.min(a.indexOf("&",f)+1||d,d);g.push(a.substr(e));a=g.join("").replace(Ja,"$1");c=null!=c?"="+encodeURIComponent(String(c)):"";(b+=c)?(c=a.indexOf("#"),0>c&&(c=a.length),d=a.indexOf("?"),0>d||d>c?(d=c,e=""):e=a.substring(d+1,c),c=[a.substr(0,d),e,a.substr(c)],a=c[1],c[1]=b?a?a+"&"+b:b:a,b=c[0]+(c[1]?"?"+c[1]:"")+c[2]):b=a;return b};function Ka(){if(!A.crypto)return Math.random();try{var a=new Uint32Array(1);A.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}}function La(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}var Na=Ba(function(){return oa(["Google Web Preview","Mediapartners-Google","Google-Read-Aloud","Google-Adwords"],Ma)||1E-4>Math.random()}),Oa=Ba(function(){return-1!=xa.indexOf("MSIE")});function Ma(a){return-1!=xa.indexOf(a)} 
function C(a){return/^true$/.test(a)};var Pa=ja("0.20"),Qa=ja("0.002"),Ra=ja("0.00"),Sa=ja("0.00"),Ta=C("true"),Ua=C("true"),Va=C("true"),Wa=C("true"),Xa=C("true");var Ya=null;function Za(){if(null===Ya){Ya="";try{var a="";try{a=A.top.location.hash}catch(c){a=A.location.hash}if(a){var b=a.match(/\bdeid=([\d,]+)/);Ya=b?b[1]:""}}catch(c){}}return Ya} 
function D(a,b,c){var d=F;if(c?d.g.hasOwnProperty(c)&&""==d.g[c]:1){var e;e=(e=Za())?(e=e.match(new RegExp("\\b("+a.join("|")+")\\b")))?e[0]:null:null;if(e)a=e;else a:{if(!Oa()&&!Na()&&(e=Math.random(),e<b)){e=Ka();a=a[Math.floor(e*a.length)];break a}a=null}a&&""!=a&&(c?d.g.hasOwnProperty(c)&&(d.g[c]=a):d.i[a]=!0)}}function H(a){var b=F;return b.g.hasOwnProperty(a)?b.g[a]:""}function $a(){var a=F,b=[];La(a.i,function(c,d){b.push(d)});La(a.g,function(c){""!=c&&b.push(c)});return b};var ab={K:2,S:13,R:14,N:16,M:17,L:18,J:19},F=null;function bb(){return!!F&&"592230571"==H(16)}function I(){return!!F&&("2505059651"==H(18)||"2505059650"==H(18))};var cb={};function J(a){cb.TAGGING=cb.TAGGING||[];cb.TAGGING[a]=!0};function db(a){return"function"==typeof a}function eb(a){var b="[object Array]"==Object.prototype.toString.call(Object(a));Array.isArray?Array.isArray(a)!==b&&J(4):J(5);return b}function fb(a,b){if(a&&eb(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]}function gb(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])};var hb=new function(a,b){this.g=a;this.defaultValue=void 0===b?!1:b}(1933);var K=window,L=document;function ib(a){var b=L.featurePolicy;return b&&db(b.features)?-1!==b.features().indexOf(a):!1};function M(a){if(a.u&&a.hasOwnProperty("u"))return a.u;var b=new a;return a.u=b};function N(){var a={};this.g=function(){var b=hb.g,c=hb.defaultValue;return null!=a[b]?a[b]:c};this.i=function(b){a[hb.g]=b}};var O=[];function P(){var a={};var b=K.google_tag_data;K.google_tag_data=void 0===b?a:b;a=K.google_tag_data;a.ics||(a.ics={entries:{},set:jb,update:kb,addListener:lb,notifyListeners:mb,active:!1,usedDefault:!1});return a.ics} 
function jb(a,b,c,d,e,f){var g=P();g.active=!0;g.usedDefault=!0;if(void 0!=b){var h=g.entries;g=h[a]||{};var k=g.region;c=c&&"string"==typeof c?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(""===d||c===e||(c===d?k!==e:!c&&!k)){e=!!(f&&0<f&&void 0===g.update);var m={region:c,initial:"granted"===b,update:g.update,quiet:e};if(""!==d||!1!==g.initial)h[a]=m;e&&K.setTimeout(function(){h[a]===m&&m.quiet&&(m.quiet=!1,nb(a),mb(),J(2))},f)}}} 
function kb(a,b){var c=P();c.active=!0;if(void 0!=b){var d=Q(a);c=c.entries;c=c[a]=c[a]||{};c.update="granted"===b;b=Q(a);c.quiet?(c.quiet=!1,nb(a)):b!==d&&nb(a)}}function lb(a,b){O.push({s:a,F:b})}function nb(a){for(var b=0;b<O.length;++b){var c=O[b];eb(c.s)&&-1!==c.s.indexOf(a)&&(c.D=!0)}}function mb(a){for(var b=0;b<O.length;++b){var c=O[b];if(c.D){c.D=!1;try{c.F({T:a})}catch(d){}}}}function Q(a){a=P().entries[a]||{};return void 0!==a.update?a.update:a.initial} 
function ob(a){return!(P().entries[a]||{}).quiet}function pb(a,b){P().addListener(a,b)}function qb(a){function b(){for(var e=0;e<c.length;e++)if(!ob(c[e]))return!0;return!1}var c=["ad_storage"];if(b()){var d=!1;pb(c,function(e){d||b()||(d=!0,a(e))})}else a({})}function rb(a){function b(){for(var e=[],f=0;f<c.length;f++){var g=c[f];!1===Q(g)||d[g]||(e.push(g),d[g]=!0)}return e}var c=["ad_storage"],d={};b().length!==c.length&&pb(c,function(e){var f=b();0<f.length&&(e.s=f,a(e))})};function sb(a,b,c,d){if(tb(d)){d=[];b=String(b||ub()).split(";");for(var e=0;e<b.length;e++){var f=b[e].split("="),g=f[0].replace(/^\s*|\s*$/g,"");g&&g==a&&((f=f.slice(1).join("=").replace(/^\s*|\s*$/g,""))&&c&&(f=decodeURIComponent(f)),d.push(f))}a=d}else a=[];return a}function vb(a,b,c,d){var e=ub(),f=window;"null"!==f.origin&&(f.document.cookie=a);a=ub();return e!=a||void 0!=c&&0<=sb(b,a,!1,d).indexOf(c)} 
function wb(a,b,c){function d(q,p,y){if(null==y)return delete g[p],q;g[p]=y;return q+"; "+p+"="+y}function e(q,p){if(null==p)return delete g[p],q;g[p]=!0;return q+"; "+p}if(tb(c.o)){if(void 0==b)var f=a+"=deleted; expires="+(new Date(0)).toUTCString();else c.encode&&(b=encodeURIComponent(b)),b=xb(b),f=a+"="+b;var g={};f=d(f,"path",c.path);if(c.expires instanceof Date)var h=c.expires.toUTCString();else null!=c.expires&&(h=c.expires);f=d(f,"expires",h);f=d(f,"max-age",c.U);f=d(f,"samesite",c.V);c.W&& 
(f=e(f,"secure"));h=c.domain;if("auto"===h){h=yb();for(var k=0;k<h.length;++k){var m="none"!==h[k]?h[k]:void 0,n=d(f,"domain",m);n=e(n,c.flags);if(!zb(m,c.path)&&vb(n,a,b,c.o))break}}else h&&"none"!==h&&(f=d(f,"domain",h)),f=e(f,c.flags),zb(h,c.path)||vb(f,a,b,c.o)}}function Ab(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");wb(a,b,c)}function xb(a){a&&1200<a.length&&(a=a.substring(0,1200));return a}var Bb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Cb=/(^|\.)doubleclick\.net$/i; 
function zb(a,b){return Cb.test(window.document.location.hostname)||"/"===b&&Bb.test(a)}function ub(){return"null"!==window.origin?window.document.cookie:""}function yb(){var a=[],b=window.document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(c=b.length-2;0<=c;c--)a.push(b.slice(c).join("."));b=window.document.location.hostname;Cb.test(b)||Bb.test(b)||a.push("none");return a} 
function tb(a){if(!(M(N).g()&&a&&M(N).g()&&P().active))return!0;if(!ob(a))return!1;a=Q(a);return null==a?!0:!!a};function Db(a,b){var c,d=Number(null!=a.C?a.C:void 0);0!==d&&(c=new Date((b||(new Date(Date.now())).getTime())+1E3*(d||7776E3)));return{path:a.path,domain:a.domain,flags:a.flags,encode:!0,expires:c}};function Eb(a){var b=[],c=L.cookie.split(";");a=new RegExp("^\\s*"+(a||"_gac")+"_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$");for(var d=0;d<c.length;d++){var e=c[d].match(a);e&&b.push({v:e[1],value:e[2],timestamp:Number(e[2].split(".")[1])||0})}b.sort(function(f,g){return g.timestamp-f.timestamp});return b} 
function R(a,b){a=Eb(a);var c={};if(!a||!a.length)return c;for(var d=0;d<a.length;d++){var e=a[d].value.split(".");if(!("1"!==e[0]||b&&3>e.length||!b&&3!==e.length)&&Number(e[1])){c[a[d].v]||(c[a[d].v]=[]);var f={version:e[0],timestamp:1E3*Number(e[1]),h:e[2]};b&&3<e.length&&(f.labels=e.slice(3));c[a[d].v].push(f)}}return c};var Fb=/:[0-9]+$/;function Gb(a,b){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].split("=");if(decodeURIComponent(d[0]).replace(/\+/g," ")===b)return decodeURIComponent(d.slice(1).join("=")).replace(/\+/g," ")}} 
function Hb(a,b){var c="query";if("protocol"===c||"port"===c)a.protocol=Ib(a.protocol)||Ib(K.location.protocol);"port"===c?a.port=String(Number(a.hostname?a.port:K.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===c&&(a.hostname=(a.hostname||K.location.hostname).replace(Fb,"").toLowerCase());var d=Ib(a.protocol);c&&(c=String(c).toLowerCase());switch(c){case "url_no_fragment":b="";a&&a.href&&(b=a.href.indexOf("#"),b=0>b?a.href:a.href.substr(0,b));a=b;break;case "protocol":a= 
d;break;case "host":a=a.hostname.replace(Fb,"").toLowerCase();break;case "port":a=String(Number(a.port)||("http"==d?80:"https"==d?443:""));break;case "path":a.pathname||a.hostname||J(1);a="/"==a.pathname.charAt(0)?a.pathname:"/"+a.pathname;a=a.split("/");a:if(b=a[a.length-1],c=[],Array.prototype.indexOf)b=c.indexOf(b),b="number"==typeof b?b:-1;else{for(d=0;d<c.length;d++)if(c[d]===b){b=d;break a}b=-1}0<=b&&(a[a.length-1]="");a=a.join("/");break;case "query":a=a.search.replace("?","");b&&(a=Gb(a,b)); 
break;case "extension":a=a.pathname.split(".");a=1<a.length?a[a.length-1]:"";a=a.split("/")[0];break;case "fragment":a=a.hash.replace("#","");break;default:a=a&&a.href}return a}function Ib(a){return a?a.replace(":","").toLowerCase():""};var Jb={};var Kb=/^\w+$/,Lb=/^[\w-]+$/,Mb={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp",gb:"_gb"};function S(){if(!M(N).g()||!M(N).g()||!P().active)return!0;var a=Q("ad_storage");return null==a?!0:!!a}function Nb(a,b){ob("ad_storage")?S()?a():rb(a):b?J(3):qb(function(){Nb(a,!0)})}function Ob(a){return Pb(a).map(function(b){return b.h})} 
function Pb(a){var b=[];if("null"===K.origin||!L.cookie)return b;a=sb(a,L.cookie,void 0,"ad_storage");if(!a||0==a.length)return b;for(var c={},d=0;d<a.length;c={j:c.j},d++){var e=Qb(a[d]);if(null!=e){var f=e;e=f.version;c.j=f.h;var g=f.timestamp;f=f.labels;var h=fb(b,function(k){return function(m){return m.h===k.j}}(c));h?(h.timestamp=Math.max(h.timestamp,g),h.labels=Rb(h.labels,f||[])):b.push({version:e,h:c.j,timestamp:g,labels:f})}}b.sort(function(k,m){return m.timestamp-k.timestamp});return Tb(b)} 
function Rb(a,b){for(var c={},d=[],e=0;e<a.length;e++)c[a[e]]=!0,d.push(a[e]);for(a=0;a<b.length;a++)c[b[a]]||d.push(b[a]);return d}function Ub(a){return a&&"string"==typeof a&&a.match(Kb)?a:"_gcl"} 
function Vb(){var a=K.location.href,b=L.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||J(1),c="/"+c);a=b.hostname.replace(Fb,"");var d={href:b.href,protocol:b.protocol,host:b.host,hostname:a,pathname:c,search:b.search,hash:b.hash,port:b.port};b=Hb(d,"gclid");c=Hb(d,"gclsrc");a=Hb(d,"wbraid");var e=Hb(d,"dclid");b&&c&&a||(d=d.hash.replace("#",""),b=b||Gb(d,"gclid"),c=c||Gb(d,"gclsrc"),a=a||Gb(d,"wbraid"));return Wb(b,c,e,a)} 
function Wb(a,b,c,d){function e(g,h){f[h]||(f[h]=[]);f[h].push(g)}var f={};f.gclid=a;f.gclsrc=b;f.dclid=c;void 0!==d&&Lb.test(d)&&(f.gbraid=d,e(d,"gb"));if(void 0!==a&&a.match(Lb))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return f}function Xb(){var a={},b=Vb();Nb(function(){Yb(b,a)})} 
function Yb(a,b,c,d){function e(n){n=["GCL",m,n];0<d.length&&n.push(d.join("."));return n.join(".")}function f(n,q){if(n=Zb(n,g))Ab(n,q,h),k=!0}b=b||{};d=d||[];var g=Ub(b.prefix);c=c||(new Date(Date.now())).getTime();var h=Db(b,c);h.o="ad_storage";var k=!1,m=Math.round(c/1E3);a.aw&&f("aw",e(a.aw[0]));a.dc&&f("dc",e(a.dc[0]));a.gf&&f("gf",e(a.gf[0]));a.ha&&f("ha",e(a.ha[0]));a.gp&&f("gp",e(a.gp[0]));(void 0==Jb.enable_gbraid_cookie_write?0:Jb.enable_gbraid_cookie_write)&&!k&&a.gb&&f("gb",e(a.gb[0]))} 
function Zb(a,b){a=Mb[a];if(void 0!==a)return b+a}function $b(a){return 0!==ac(a.split(".")).length?1E3*(Number(a.split(".")[1])||0):0}function Qb(a){a=ac(a.split("."));return 0===a.length?null:{version:a[0],h:a[2],timestamp:1E3*(Number(a[1])||0),labels:a.slice(3)}}function ac(a){return 3>a.length||"GCL"!==a[0]&&"1"!==a[0]||!/^\d+$/.test(a[1])||!Lb.test(a[2])?[]:a}function Tb(a){return a.filter(function(b){return Lb.test(b.h)})} 
function bc(){var a=["aw"],b={};if("null"!==K.origin){for(var c=Ub(b.prefix),d={},e=0;e<a.length;e++)Mb[a[e]]&&(d[a[e]]=Mb[a[e]]);Nb(function(){gb(d,function(f,g){g=sb(c+g,L.cookie,void 0,"ad_storage");g.sort(function(n,q){return $b(q)-$b(n)});if(g.length){var h=g[0];g=$b(h);var k=0!==ac(h.split(".")).length?h.split(".").slice(3):[],m={};h=0!==ac(h.split(".")).length?h.split(".")[2]:void 0;m[f]=[h];Yb(m,b,g,k)}})})}} 
function cc(a,b,c,d){var e=[];c=c||{};if(!S())return e;var f=Pb(a);if(!f.length)return e;for(var g=0;g<f.length;g++)-1===(f[g].labels||[]).indexOf(b)?e.push(0):e.push(1);if(d)return e;1!==e[0]&&(d=f[0],f=f[0].timestamp,b=[d.version,Math.round(f/1E3),d.h].concat(d.labels||[],[b]).join("."),c=Db(c,f),c.o="ad_storage",Ab(a,b,c));return e}function dc(a,b){b=Ub(b);a=Zb(a,b);if(!a)return 0;a=Pb(a);for(var c=b=0;c<a.length;c++)b=Math.max(b,a[c].timestamp);return b} 
function ec(a){var b=0,c;for(c in a)for(var d=a[c],e=0;e<d.length;e++)b=Math.max(b,Number(d[e].timestamp));return b};var fc=/^UA-\d+-\d+%3A[\w-]+(?:%2C[\w-]+)*(?:%3BUA-\d+-\d+%3A[\w-]+(?:%2C[\w-]+)*)*$/,gc=/^~?[\w-]+(?:\.~?[\w-]+)*$/,hc=/^\d+\.fls\.doubleclick\.net$/,ic=/;gac=([^;?]+)/,jc=/;gacgb=([^;?]+)/,kc=/;gclaw=([^;?]+)/,lc=/;gclgb=([^;?]+)/; 
function mc(a,b,c){if(hc.test(a.location.host))return(b=a.location.href.match(c))&&2==b.length&&b[1].match(fc)?decodeURIComponent(b[1]):"";a=[];for(var d in b){c=[];for(var e=b[d],f=0;f<e.length;f++)c.push(e[f].h);a.push(d+":"+c.join(","))}return 0<a.length?a.join(";"):""} 
function nc(a,b,c,d){if(!I())return{B:"",A:""};var e=S()?R("_gac_gb",!0):{},f=[],g=!1,h;for(h in e){var k=cc("_gac_gb_"+h,b,c,d);g=g||0!==k.length&&k.some(function(m){return 1===m});f.push(h+":"+k.join(","))}return{B:g?f.join(";"):"",A:mc(a,e,jc)}}function oc(a,b,c,d){if(hc.test(a.location.host)){if((a=a.location.href.match(d))&&2==a.length&&a[1].match(gc))return[{h:a[1]}]}else return Pb((b||"_gcl")+c);return[]}function pc(a,b){return oc(a,b,"_aw",kc).map(function(c){return c.h}).join(".")} 
function qc(a,b){return I()?oc(a,b,"_gb",lc).map(function(c){return c.h}).join("."):""}function rc(a,b){var c=""!==qc(a,b)||0<v(Object,"keys").call(Object,S()?R("_gac_gb",!0):{}).length;a=""!==pc(a,b)||""!==mc(a,S()?R():{},ic);return c&&a}function sc(a){0!==Ob("_gcl_aw").length||a&&0!==Ob(a+"_aw").length||(Xb(),bc())}function tc(a,b,c){if(!I())return"";a=cc((b&&b.prefix||"_gcl")+"_gb",a,b,c);return 0===a.length||a.every(function(d){return 0===d})?"":a.join(".")};function uc(a){var b=A.performance;return b&&b.timing&&b.timing[a]||0};var vc={O:0,G:1,P:2,I:3,H:4};function wc(){this.g={}}function xc(a,b,c){"number"===typeof c&&0<c&&(a.g[b]=Math.round(c))}function yc(a){var b=M(wc);var c=void 0===c?A:c;c=c.performance;xc(b,a,c&&c.now?c.now():null)}function zc(){function a(){return xc(b,0,uc("loadEventStart")-uc("navigationStart"))}var b=M(wc);0!=uc("loadEventStart")?a():window.addEventListener("load",a)}function Ac(a,b){b.google_tag_manager&&b.google_tag_manager._li&&(b=b.google_tag_manager._li,xc(a,4,b.cbt),xc(a,3,b.cst))} 
function Bc(){var a=M(wc);return v(Object,"values").call(Object,vc).map(function(b){return[b,a.g[b]||0]})};function Cc(a,b,c){a=Dc(a,!0);if(a[b])return!1;a[b]=[];a[b][0]=c;return!0}function Dc(a,b){var c=a.GooglebQhCsO;c||(c={},b&&(a.GooglebQhCsO=c));return c};var Ec={},Fc=null; 
function Gc(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}a=4;void 0===a&&(a=0);if(!Fc)for(Fc={},c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Ec[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Fc[h]&&(Fc[h]=g)}}a=Ec[a];c=Array(Math.floor(b.length/3));d=a[64]||"";for(e=f=0;f<b.length-2;f+=3){var k=b[f],m=b[f+1];h=b[f+2];g=a[k>>2];k=a[(k& 
3)<<4|m>>4];m=a[(m&15)<<2|h>>6];h=a[h&63];c[e++]=g+k+m+h}g=0;h=d;switch(b.length-f){case 2:g=b[f+1],h=a[(g&15)<<2]||d;case 1:b=b[f],c[e]=a[b>>2]+a[(b&3)<<4|g>>4]+h+d}return c.join("")};function Hc(a,b,c,d){var e=Ia(c,"fmt");if(d){var f=Ia(c,"random"),g=Ia(c,"label")||"";if(!f)return!1;f=Gc(decodeURIComponent(g.replace(/\+/g," "))+":"+decodeURIComponent(f.replace(/\+/g," ")));if(!Cc(a,f,d))return!1}e&&4!=e&&(c=B(c,"rfmt",e));c=B(c,"fmt",4);e=Da("SCRIPT");Aa(e,sa(c));e.onload=function(){a.google_noFurtherRedirects&&d&&d.call&&(a.google_noFurtherRedirects=null,d())};b.getElementsByTagName("script")[0].parentElement.appendChild(e);return!0};var Ic=C("false");function Jc(){if(db(K.__uspapi)){var a="";try{K.__uspapi("getUSPData",1,function(b,c){c&&b&&(b=b.uspString)&&/^[\da-zA-Z-]{1,20}$/.test(b)&&(a=b)})}catch(b){}return a}};var Kc={id:!0,origin:!0,destination:!0,start_date:!0,end_date:!0,location_id:!0},Lc=/^[a-zA-Z0-9_]+$/,Mc=!1,Nc="google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_gtag_event_data google_remarketing_only google_conversion_linker google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_allow_ad_personalization_signals google_restricted_data_processing google_conversion_items google_conversion_merchant_id google_user_id google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_gtm_url_processor google_conversion_page_url google_conversion_referrer_url google_gtm google_gcl_cookie_prefix google_gcl_cookie_path google_gcl_cookie_flags google_gcl_cookie_domain google_gcl_cookie_max_age_seconds google_read_gcl_cookie_opt_out google_basket_feed_country google_basket_feed_language google_basket_discount google_basket_transaction_type google_additional_conversion_params google_additional_params google_transport_url google_gtm_experiments".split(" "); 
function Oc(a,b){var c=a;return function(){--c;0>=c&&b()}}function T(a){return null!=a?encodeURIComponent(String(a)):""}function Pc(a){if(null!=a){a=String(a).substring(0,512);var b=a.indexOf("#");return-1==b?a:a.substring(0,b)}return""}function U(a,b){b=T(b);return""!=b&&(a=T(a),""!=a)?"&".concat(a,"=",b):""}function Qc(a){var b=typeof a;return null==a||"object"==b||"function"==b?null:String(a).replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/=/g,"\\=")} 
function Rc(a){if(!a||"object"!=typeof a||"function"==typeof a.join)return"";var b=[],c;for(c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=a[c];if(d&&"function"===typeof d.join){for(var e=[],f=0;f<d.length;++f){var g=Qc(d[f]);null!=g&&e.push(g)}d=0==e.length?null:e.join(",")}else d=Qc(d);(e=Qc(c))&&null!=d&&b.push(e+"="+d)}return b.join(";")}function V(a){return"number"!=typeof a&&"string"!=typeof a?"":T(a.toString())} 
function Sc(a,b){if(b.google_read_gcl_cookie_opt_out||b.google_remarketing_only||b.google_conversion_domain&&(!b.google_gcl_cookie_prefix||!/^_ycl/.test(b.google_gcl_cookie_prefix)))return"";var c="",d=Tc(b),e={};b.google_gcl_cookie_domain&&(e.domain=b.google_gcl_cookie_domain);b.google_gcl_cookie_flags&&(e.flags=b.google_gcl_cookie_flags);null!=b.google_gcl_cookie_max_age_seconds&&(e.C=b.google_gcl_cookie_max_age_seconds);b.google_gcl_cookie_path&&(e.path=b.google_gcl_cookie_path);d&&(e.prefix=d); 
if(Uc(b)&&b.l)var f=void 0===b.m;else I()?hc.test(a.location.host)?f=!(kc.test(a.location.href)||ic.test(a.location.href)):(f=Math.max(dc("aw",d),ec(S()?R():{})),f=Math.max(dc("gb",d),ec(S()?R("_gac_gb",!0):{}))>f):f=!1;if(f){if(void 0!==b.m)return b.m;c=qc(a,d||void 0);f=b.google_conversion_label;var g=tc(f,e,b.l);c=U("gclgb",c)+(g?U("mcov",g):"");if(d)return b.m=c;d=nc(a,f,e,b.l);a=d.A;d=d.B;c+=(a?U("gacgb",a):"")+(d?U("gacmcov",d):"");return b.m=c}if(d)return b=pc(a,d),U("gclaw",b);(b=pc(a))&& 
(c=U("gclaw",b));b=mc(a,S()?R():{},ic);return c+(b?U("gac",b):"")}function Vc(a){function b(d){try{return decodeURIComponent(d),!0}catch(e){return!1}}a=a?a.title:"";if(void 0==a||""==a)return"";a=encodeURIComponent(a);for(var c=256;!b(a.substr(0,c));)c--;return"&tiba="+a.substr(0,c)} 
function Wc(a,b,c,d,e,f){var g="https://",h="landing"===d.google_conversion_type?"/extclk":"/";switch(e){default:return"";case 2:case 3:var k="googleads.g.doubleclick.net/";var m="pagead/viewthroughconversion/";break;case 1:k="www.google.com/";m="pagead/1p-conversion/";break;case 0:k=d.google_conversion_domain||"www.googleadservices.com/";m="pagead/conversion/";break;case 4:k="www.google.com/",m="pagead/privacysandbox/conversion/"}Ta&&d.google_transport_url&&(k=d.google_transport_url);"/"!==k[k.length- 
1]&&(k+="/");if(0===k.indexOf("http://")||0===k.indexOf("https://"))g="";g=[g,k,m,T(d.google_conversion_id),h,"?random=",T(d.google_conversion_time)].join("");k=U("cv",d.google_conversion_js_version);m=U("fst",d.google_conversion_first_time);h=U("num",d.google_conversion_snippets);var n=U("fmt",d.google_conversion_format),q=d.google_remarketing_only?U("userId",d.google_user_id):"";var p=d.google_tag_for_child_directed_treatment;p=null==p||0!==p&&1!==p?"":U("tfcd",p);var y=d.google_tag_for_under_age_of_consent; 
y=null==y||0!==y&&1!==y?"":U("tfua",y);var ta=d.google_allow_ad_personalization_signals;ta=!1===ta?U("npa",1):!0===ta?U("npa",0):"";var ua=d.google_restricted_data_processing;ua=Va?!0===ua?U("rdp",1):!1===ua?U("rdp",0):"":"";var dd=U("value",d.google_conversion_value),ed=U("currency_code",d.google_conversion_currency),fd=U("label",d.google_conversion_label),gd=U("oid",d.google_conversion_order_id),hd=U("bg",d.google_conversion_color);a:{var x=d.google_conversion_language;if(null!=x){x=x.toString(); 
if(2==x.length){x=U("hl",x);break a}if(5==x.length){x=U("hl",x.substring(0,2))+U("gl",x.substring(3,5));break a}}x=""}var id=U("guid","ON"),jd=!d.google_conversion_domain&&"GooglemKTybQhCsO"in A&&"function"==typeof A.GooglemKTybQhCsO?U("resp","GooglemKTybQhCsO"):"",kd=U("disvt",d.google_disable_viewthrough),ld=U("eid",$a().join());var X=d.google_conversion_date;var u=[];if(a){var E=a.screen;E&&(u.push(U("u_h",E.height)),u.push(U("u_w",E.width)),u.push(U("u_ah",E.availHeight)),u.push(U("u_aw",E.availWidth)), 
u.push(U("u_cd",E.colorDepth)));a.history&&u.push(U("u_his",a.history.length))}X&&"function"==typeof X.getTimezoneOffset&&u.push(U("u_tz",-X.getTimezoneOffset()));b&&("function"==typeof b.javaEnabled&&u.push(U("u_java",b.javaEnabled())),b.plugins&&u.push(U("u_nplug",b.plugins.length)),b.mimeTypes&&u.push(U("u_nmime",b.mimeTypes.length)));X=u.join("");u=U("gtm",d.google_gtm);b=b&&b.sendBeacon?U("sendb","1"):"";E=Xc();var nd=U("ig",/googleadservices\.com/.test("www.googleadservices.com")?1:0),va=Rc(d.google_custom_params); 
f=Rc(f);f=va.concat(0<va.length&&0<f.length?";":"",f);f=""==f?"":"&".concat("data=",encodeURIComponent(f));va=Sc(c,d);var Sb=d.google_conversion_page_url,od=d.google_conversion_referrer_url,wa="";if(c){if(a.top==a)var r=0;else{var G=a.location.ancestorOrigins;if(G)r=G[G.length-1]==a.location.origin?1:2;else{G=a.top;try{var z;if(z=!!G&&null!=G.location.href)c:{try{Ca(G.foo);z=!0;break c}catch(pd){}z=!1}r=z}catch(pd){r=!1}r=r?1:2}}z=Sb?Sb:1==r?a.top.location.href:a.location.href;wa+=U("frm",r);wa+= 
U("url",Pc(z));wa+=U("ref",Pc(od||c.referrer))}a=[k,m,h,n,q,p,y,ta,ua,dd,ed,fd,gd,hd,x,id,jd,kd,ld,X,u,b,E,nd,f,va,wa,Vc(c),Yc(d.google_additional_params),Yc(d.google_remarketing_only?{}:d.google_additional_conversion_params),"&hn="+T("www.googleadservices.com"),Zc(a)].join("");c=Za();a+=0<c.length?"&debug_experiment_id="+c:"";if(!d.google_remarketing_only&&!d.google_conversion_domain){c=[U("mid",d.google_conversion_merchant_id),U("fcntr",d.google_basket_feed_country),U("flng",d.google_basket_feed_language), 
U("dscnt",d.google_basket_discount),U("bttype",d.google_basket_transaction_type)].join("");if(d)if(r=d.google_conversion_items){z=[];k=0;for(m=r.length;k<m;k++)h=r[k],n=[],h&&(n.push(V(h.value)),n.push(V(h.quantity)),n.push(V(h.item_id)),n.push(V(h.start_date)),n.push(V(h.end_date)),z.push("("+n.join("*")+")"));r=0<z.length?"&item="+z.join(""):""}else r="";else r="";c=[a,c,r].join("");a=4E3<c.length?[a,U("item","elngth")].join(""):c}g+=a;1===e?g+=[U("gcp",1),U("sscte",1),U("ct_cookie_present",1)].join(""): 
3==e&&(g+=U("gcp",1),g+=U("ct_cookie_present",1));Ua&&(e=Jc(),void 0!==e&&(g+=U("us_privacy",e||"error")));Uc(d)&&(g=d.l?g+U("gbcov",1):g+U("gbcov",0));return g}function $c(a){if(!Ic){var b=Da("IFRAME");b.style.display="none";b.src="https://bid.g.doubleclick.net/xbbe/pixel?d=KAE";a.body.appendChild(b)}}function ad(){return new Image} 
function bd(a,b,c,d,e,f){var g=c.onload_callback,h;e&&g&&g.call?h=g:h=function(){};d+=U("async","1");e=c.google_gtm_url_processor;db(e)&&(d=e(d));g=(e=c.opt_image_generator)&&e.call;if(!(f=g||!f)){if(c.google_conversion_domain)var k=!1;else try{k=Hc(a,b,d,h)}catch(m){k=!1}f=!k}f&&(a=ad,g&&(a=e),a=a(),a.src=d,a.onload=h)} 
function cd(a,b){F&&"376635471"==H(2)&&("complete"===b.readyState?$c(b):a.addEventListener?a.addEventListener("load",function(){$c(b)}):a.attachEvent("onload",function(){$c(b)}))} 
function md(a){if("landing"===a.google_conversion_type||!a.google_conversion_id||a.google_remarketing_only&&a.google_disable_viewthrough)return!1;a.google_conversion_date=new Date;a.google_conversion_time=a.google_conversion_date.getTime();a.google_conversion_snippets="number"===typeof a.google_conversion_snippets&&0<a.google_conversion_snippets?a.google_conversion_snippets+1:1;void 0===a.google_conversion_first_time&&(a.google_conversion_first_time=a.google_conversion_time);a.google_conversion_js_version= 
"9";0!=a.google_conversion_format&&1!=a.google_conversion_format&&2!=a.google_conversion_format&&3!=a.google_conversion_format&&(a.google_conversion_format=3);!1!==a.google_enable_display_cookie_match&&(a.google_enable_display_cookie_match=!0);return!0}function qd(a,b){function c(f){d[f]=b&&null!=b[f]?b[f]:a[f]}for(var d={},e=0;e<Nc.length;e++)c(Nc[e]);c("onload_callback");return d} 
function rd(a){for(var b={},c=0;c<a.length;c++){var d=a[c],e=void 0;d.hasOwnProperty("google_business_vertical")?(e=d.google_business_vertical,b[e]=b[e]||{google_business_vertical:e}):(e="",Object.prototype.hasOwnProperty.call(b,e)||(b[e]={}));e=b[e];for(var f=v(Object,"keys").call(Object,d).filter(function(k){return Kc.hasOwnProperty(k)}),g=0;g<f.length;g++){var h=f[g];h in e||(e[h]=[]);e[h].push(d[h])}}return v(Object,"values").call(Object,b)} 
function Xc(){var a="";bb()&&(a=Bc().map(function(b){return b.join("-")}).join("_"));return U("li",a)}function Zc(a){if(!Wa||!a.__gsaExp||!a.__gsaExp.id)return"";a=a.__gsaExp.id;if(!db(a))return"";try{var b=Number(a());return isNaN(b)?"":U("gsaexp",b)}catch(c){return""}}function Yc(a){if(!a)return"";var b="",c;for(c in a)a.hasOwnProperty(c)&&(b+=U(c,a[c]));return b}function Uc(a){return I()?(a=a.google_gtm_experiments)&&a.gbcov?!0:!1:!1} 
function Tc(a){return a.google_gcl_cookie_prefix&&"_gcl"!==a.google_gcl_cookie_prefix&&Lc.test(a.google_gcl_cookie_prefix)?a.google_gcl_cookie_prefix:""} 
function sd(a,b,c,d){var e;if(e=!d.google_remarketing_only)if((e=d.google_gtm_experiments)&&e.capi)if(d.google_transport_url)e=!1;else{if(e=!Mc){e=c;var f=v("www.googleadservices.com","endsWith").call("www.googleadservices.com","google.com")?"":"A7iusd6XVbb7SOF83vXQdziVdvBy4R7Bh2tuVErLbKXxemIjQH20g7jWaz48nG08Cd6zfylzuF+H+1s9S3JodAEAAACOeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGVhZHNlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ\x3d\x3d";e=void 0===e?window.document:e;if(f&&e.head){var g=document.createElement("meta");e.head.appendChild(g);g.httpEquiv="origin-trial";g.content=f;e=g}else e=null;e=!e}e?e=!1:(Mc=!0,e=ib("conversion-measurement")|| 
ib("attribution-reporting"))}else e=!1;e&&(e=d.google_additional_conversion_params||{},e.capi="1",d.google_additional_conversion_params=e,bd(a,c,d,Wc(a,b,c,d,4),!1,!1))};var td=!1,ud=document.currentScript&&document.currentScript.src||""; 
function vd(a,b,c){try{if(!td&&(td=!0,!c.google_gtm)){var d=!1,e=a.location.search.split("?")[1];e&&0<=na(e.split("&"),"gtm_debug=x")&&(d=!0);d||0!==b.referrer.indexOf("https://tagassistant.google.com/")||(d=!0);!d&&0<=na(b.cookie.split("; "),"__TAG_ASSISTANT=x")&&(d=!0);!d&&a.__TAG_ASSISTANT_API&&(d=!0);if(d){if(!a["google.tagmanager.debugui2.queue"]){a["google.tagmanager.debugui2.queue"]=[];var f=new ka(la,"https://www.googletagmanager.com/debug/bootstrap"),g=sa(f instanceof ka&&f.constructor=== 
ka&&f.g===ma?f.i:"type_error:Const"),h=b.createElement("script");Aa(h,g);var k=b.getElementsByTagName("script")[0];k&&k.parentNode&&k.parentNode.insertBefore(h,k)}a["google.tagmanager.debugui2.queue"].push({messageType:"LEGACY_CONTAINER_STARTING",data:{id:"AW-"+(c.google_conversion_id||""),scriptSource:ud}})}}}catch(m){}};function wd(a,b){a.onload_callback&&"function"==typeof a.onload_callback.call?a.onload_callback=Oc(b,a.onload_callback):a.onload_callback=function(){}} 
function xd(a,b,c,d){vd(a,c,d);bb()&&(yc(2),d.google_gtm&&Ac(M(wc),a));var e=!1;if(3!=d.google_conversion_format)return!1;try{if(md(d)){d.google_remarketing_only&&d.google_enable_display_cookie_match&&!Ic&&F&&D(["376635470","376635471"],Pa,2);d.google_remarketing_only&&!d.google_conversion_domain&&F&&D(["759238990","759238991"],Sa,13);!d.google_remarketing_only||d.google_conversion_domain||F&&("759248991"==H(14)||"759248990"==H(14))||F&&D(["759248990","759248991"],Ra,14);!1!==d.google_conversion_linker&& 
(F&&D(["2505059650","2505059651"],Xa?1:0,18),d.google_gtm||sc(d.google_gcl_cookie_prefix));if(1==d.google_remarketing_only&&null!=d.google_gtag_event_data&&null!=d.google_gtag_event_data.items&&d.google_gtag_event_data.items.constructor===Array&&0<d.google_gtag_event_data.items.length)yd(a,b,c,d);else{var f=!1;v("www.googleadservices.com","endsWith").call("www.googleadservices.com","google.com")&&(f=!0);var g=d.google_additional_params;g&&g.dg&&(f="e"===g.dg);g=function(h,k){k=void 0===k?!0:k;bd(a,c,d,Wc(a,b,c,d, 
h),k,!0)};d.google_remarketing_only?g(2):f?(wd(d,2),sd(a,b,c,d),g(1),g(3)):(sd(a,b,c,d),g(0),Uc(d)&&rc(c,Tc(d))&&(d.l=!0,g(0,!1)))}d.google_remarketing_only&&d.google_enable_display_cookie_match&&cd(a,c);e=!0}}catch(h){}return e}function yd(a,b,c,d){var e=rd(d.google_gtag_event_data.items);wd(d,e.length);for(var f=0;f<e.length;f++)bd(a,c,d,Wc(a,b,c,d,2,e[f]),!0,!0),d.google_conversion_time=d.google_conversion_time+1};F=new function(){var a=[],b=0,c;for(c in ab)a[b++]=ab[c];this.i={};this.g={};a=a||[];b=0;for(c=a.length;b<c;++b)this.g[a[b]]=""};D(["592230570","592230571"],Qa,16);bb()&&(yc(1),zc()); 
function zd(a,b,c){function d(m,n){var q=new Image;q.onload=m;q.src=n}function e(){--f;if(0>=f){var m=Dc(a,!1),n=m[b];n&&(delete m[b],(m=n[0])&&m.call&&m())}}var f=c.length+1;if(2==c.length){var g=c[0],h=c[1];0<=Ga(g,0,"rmt_tld",g.search(Ha))&&0<=Ga(g,0,"ipr",g.search(Ha))&&!h.match(Ea)[6]&&(h+=Fa(g),c[1]=B(h,"rmt_tld","1"))}for(g=0;g<c.length;g++){h=c[g];var k=Ia(h,"fmt");switch(parseInt(k,10)){case 1:case 2:(k=a.document.getElementById("goog_conv_iframe"))&&!k.src?(k.onload=e,k.src=h):d(e,h);break; 
case 4:Hc(a,a.document,h,e);break;case 5:if(a.navigator&&a.navigator.sendBeacon)if(a.navigator.sendBeacon(h,"")){e();break}else h=B(h,"sendb",2);h=B(h,"fmt",3);default:d(e,h)}}e()}var W=["GooglemKTybQhCsO"],Y=A;W[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+W[0]);for(var Z;W.length&&(Z=W.shift());)W.length||void 0===zd?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=zd; 
window.google_trackConversion=function(a){var b=window,c=navigator,d=document;a=qd(b,a);a.google_conversion_format=3;var e=!!a.google_gtm;M(N).i(e);return xd(b,c,d,a)};}).call(this);
