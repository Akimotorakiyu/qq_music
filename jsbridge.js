!function(a,b,c){c.M||(c.M={}),c.WebViewJavascriptBridge||(c.WebViewJavascriptBridge={}),b(c.M[a]=c.M[a]||{},c)}("client",function(a,b){"use strict";function n(a,b,c){var d;for(d in b)(b.hasOwnProperty(d)&&!(d in a)||c)&&(a[d]=b[d]);return a}function p(b){var c=b.split("."),d=a;return c.forEach(function(a){!d[a]&&(d[a]={}),d=d[a]}),d}function q(a){var b=""+m++;return j[b]=a||function(){},b}function r(b,c,d,e){var g,h,i,f=a.isFunction(b)?b:j[b]||window[b];c=c||[],g=c[0],a.isUndefined(e)&&(e=!0),a.isObject(g)&&("data"in g||(g.data=n({},g)),"code"in g||(g.code=0),g.msg=g.msg||""),a.isFunction(f)?e?setTimeout(function(){f.apply(null,c)},0):f.apply(null,c):console.log("musicapi: not found such callback: "+b),k[b]&&(i=k[b],delete k[b],g&&(void 0!==g.code?h=g.code:/^-?\d+$/.test(String(g))&&(h=g)))}function s(b){var c=e.call(arguments,1);a.android&&c&&c.length&&c.forEach(function(b,d){a.isObject(b)&&"r"in b&&"result"in b&&(c[d]=b.result)}),r(b,c)}function t(){}function u(b,c){var g,d=null,h=b.split("."),i=b.lastIndexOf("."),j=h[h.length-2],k=h[h.length-1],m=p(b.substring(0,i).replace(/^M\.client\./,""));!c.ios&&c.iOS&&(c.ios=c.iOS),c.support&&!c.support.ios&&c.support.iOS&&(c.support.ios=c.support.iOS),(d=a.ios&&c.ios)?g="ios":(d=a.android&&c.android)&&(g="android"),d&&0!=c.supportInvoke&&(l[j+"."+k]=d),m[k]=d?d:t}function v(a){if(null!=a)if("object"==typeof a)for(var b in a)a[b]=v(a[b]);else"function"!=typeof a&&(a=String(a));return a}function w(b,c,d,e){function h(){s(e,{r:-201,result:"error"})}var f,g=document.createElement("iframe");return g.style.cssText="display:none;width:0px;height:0px;",a.ios&&(g.onload=h,g.src=b),(document.body||document.documentElement).appendChild(g),a.android&&(g.onload=h,g.src=b),f=a.__RETURN_VALUE,a.__RETURN_VALUE=void 0,setTimeout(function(){g&&g.parentNode&&g.parentNode.removeChild(g)},0),f}function x(b,c,e,f){if(!b||!c||window!==window.top)return null;var g,h;if(a.isFunction(e)?(f=e,e=null):a.isFunction(e&&e.callback)&&!a.isFunction(f)&&(f=e.callback),h=q(f),g=d+"qq.com/"+encodeURIComponent(b)+"/"+encodeURIComponent(c),e||(e={}),a.isObject(e)){try{e=v(e)}catch(i){}e=JSON.stringify(e)}return g+="?p="+encodeURIComponent(String(e)),g+="#"+h,w(g,b,c),null}function y(b,c){var g=l[b+"."+c];return a.isFunction(g)?g.apply(this,e.call(arguments,2)):x.apply(this,e.call(arguments))}function z(a,b){y("core","support",{apiName:(""+a).replace(/^M\.client\./,"")},function(a){"function"==typeof b&&b(a&&a.data&&1==a.data.isSupport?1:0)})}function A(a,b){var c="evt-"+a;return j[c]?j[c].push(b):(j[c]=[b],x("event","on",{event:a})),!0}function B(a,b){var f,c="evt-"+a,d=j[c],e=!1;if(d)if(b)for(f=d.length-1;f>=0;f--)b===d[f]&&d.splice(f,1);else delete j[c],d=null;return d&&d.length||(x("event","off",{event:a}),e=!0),e}function C(a){var b="evt-"+a,c=j[b],d=e.call(arguments,1);c&&c.forEach(function(a){r(a,d,!1)})}function D(a,b,c){x("event","trigger",{event:a,data:b||{},options:c||{}})}var o,c=navigator.userAgent,d="qqmusic://",e=Array.prototype.slice,f=Object.prototype.toString,g=/\b(iPad|iPhone|iPod)\b/i,h=/Android/,i=/QQMUSIC\/(\d[\.\d]*)/i,j=b.__aCallbacks||{},k=b.__aReports||{},l=b.__aFunctions||{},m=0;return n(a,function(){var a={},b="Object,Function,String,Number,Boolean,Date,Undefined,Null";return b.split(",").forEach(function(b){a["is"+b]=function(a){return f.call(a)==="[object "+b+"]"}}),a}()),a.android=h.test(c),a.ios=a.ios=!a.android&&g.test(c),a.version="20160419001",o=c.match(i),a.clientVersion=o&&o[1]&&parseFloat(o[1].replace("0",".")),a.clientVersion>0||(a.clientVersion="0"),m=function(){var b,a=1;for(b in j)j.hasOwnProperty(b)&&(b=Number(b),isNaN(b)||(a=Math.max(a,b)));return++a}(),b.__aCallbacks=j,b.__aReports=k,b.__aFunctions=l,a.__fireCallback=r,a.__scheme=d,n(a,{invoke:y,invokeClient:x,build:u,support:z,execGlobalCallback:s,on:A,off:B,trigger:D,execEventCallback:C},!0),a},window);