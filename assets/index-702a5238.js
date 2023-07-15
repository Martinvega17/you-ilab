function m1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var $a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function cr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function h1(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var a=Function.bind.apply(t,i);return new a}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Mh={exports:{}},Ll={},zh={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ca=Symbol.for("react.element"),v1=Symbol.for("react.portal"),g1=Symbol.for("react.fragment"),y1=Symbol.for("react.strict_mode"),w1=Symbol.for("react.profiler"),S1=Symbol.for("react.provider"),x1=Symbol.for("react.context"),b1=Symbol.for("react.forward_ref"),k1=Symbol.for("react.suspense"),E1=Symbol.for("react.memo"),C1=Symbol.for("react.lazy"),Zd=Symbol.iterator;function O1(e){return e===null||typeof e!="object"?null:(e=Zd&&e[Zd]||e["@@iterator"],typeof e=="function"?e:null)}var $h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dh=Object.assign,Fh={};function si(e,t,n){this.props=e,this.context=t,this.refs=Fh,this.updater=n||$h}si.prototype.isReactComponent={};si.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};si.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hh(){}Hh.prototype=si.prototype;function gf(e,t,n){this.props=e,this.context=t,this.refs=Fh,this.updater=n||$h}var yf=gf.prototype=new Hh;yf.constructor=gf;Dh(yf,si.prototype);yf.isPureReactComponent=!0;var Jd=Array.isArray,Uh=Object.prototype.hasOwnProperty,wf={current:null},Wh={key:!0,ref:!0,__self:!0,__source:!0};function Yh(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Uh.call(t,r)&&!Wh.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ca,type:e,key:a,ref:o,props:i,_owner:wf.current}}function T1(e,t){return{$$typeof:Ca,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Sf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ca}function P1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ep=/\/+/g;function Rs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?P1(""+e.key):t.toString(36)}function go(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ca:case v1:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Rs(o,0):r,Jd(i)?(n="",e!=null&&(n=e.replace(ep,"$&/")+"/"),go(i,t,n,"",function(u){return u})):i!=null&&(Sf(i)&&(i=T1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ep,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Jd(e))for(var l=0;l<e.length;l++){a=e[l];var s=r+Rs(a,l);o+=go(a,t,n,s,i)}else if(s=O1(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=r+Rs(a,l++),o+=go(a,t,n,s,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Da(e,t,n){if(e==null)return e;var r=[],i=0;return go(e,r,"","",function(a){return t.call(n,a,i++)}),r}function _1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ge={current:null},yo={transition:null},N1={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:yo,ReactCurrentOwner:wf};X.Children={map:Da,forEach:function(e,t,n){Da(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Da(e,function(){t++}),t},toArray:function(e){return Da(e,function(t){return t})||[]},only:function(e){if(!Sf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=si;X.Fragment=g1;X.Profiler=w1;X.PureComponent=gf;X.StrictMode=y1;X.Suspense=k1;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N1;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Dh({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=wf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Uh.call(t,s)&&!Wh.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ca,type:e.type,key:i,ref:a,props:r,_owner:o}};X.createContext=function(e){return e={$$typeof:x1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:S1,_context:e},e.Consumer=e};X.createElement=Yh;X.createFactory=function(e){var t=Yh.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:b1,render:e}};X.isValidElement=Sf;X.lazy=function(e){return{$$typeof:C1,_payload:{_status:-1,_result:e},_init:_1}};X.memo=function(e,t){return{$$typeof:E1,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=yo.transition;yo.transition={};try{e()}finally{yo.transition=t}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(e,t){return Ge.current.useCallback(e,t)};X.useContext=function(e){return Ge.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return Ge.current.useDeferredValue(e)};X.useEffect=function(e,t){return Ge.current.useEffect(e,t)};X.useId=function(){return Ge.current.useId()};X.useImperativeHandle=function(e,t,n){return Ge.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return Ge.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return Ge.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return Ge.current.useMemo(e,t)};X.useReducer=function(e,t,n){return Ge.current.useReducer(e,t,n)};X.useRef=function(e){return Ge.current.useRef(e)};X.useState=function(e){return Ge.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return Ge.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return Ge.current.useTransition()};X.version="18.2.0";zh.exports=X;var O=zh.exports;const we=cr(O),ju=m1({__proto__:null,default:we},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j1=O,L1=Symbol.for("react.element"),A1=Symbol.for("react.fragment"),I1=Object.prototype.hasOwnProperty,R1=j1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M1={key:!0,ref:!0,__self:!0,__source:!0};function Bh(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)I1.call(t,r)&&!M1.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:L1,type:e,key:a,ref:o,props:i,_owner:R1.current}}Ll.Fragment=A1;Ll.jsx=Bh;Ll.jsxs=Bh;Mh.exports=Ll;var y=Mh.exports,Vh={exports:{}},ft={},Xh={exports:{}},Gh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,F){var $=j.length;j.push(F);e:for(;0<$;){var ne=$-1>>>1,K=j[ne];if(0<i(K,F))j[ne]=F,j[$]=K,$=ne;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var F=j[0],$=j.pop();if($!==F){j[0]=$;e:for(var ne=0,K=j.length,Ct=K>>>1;ne<Ct;){var Oe=2*(ne+1)-1,cn=j[Oe],at=Oe+1,vt=j[at];if(0>i(cn,$))at<K&&0>i(vt,cn)?(j[ne]=vt,j[at]=$,ne=at):(j[ne]=cn,j[Oe]=$,ne=Oe);else if(at<K&&0>i(vt,$))j[ne]=vt,j[at]=$,ne=at;else break e}}return F}function i(j,F){var $=j.sortIndex-F.sortIndex;return $!==0?$:j.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],u=[],c=1,f=null,p=3,g=!1,w=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(j){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=j)r(u),F.sortIndex=F.expirationTime,t(s,F);else break;F=n(u)}}function S(j){if(v=!1,h(j),!w)if(n(s)!==null)w=!0,Re(b);else{var F=n(u);F!==null&&Ce(S,F.startTime-j)}}function b(j,F){w=!1,v&&(v=!1,m(C),C=-1),g=!0;var $=p;try{for(h(F),f=n(s);f!==null&&(!(f.expirationTime>F)||j&&!U());){var ne=f.callback;if(typeof ne=="function"){f.callback=null,p=f.priorityLevel;var K=ne(f.expirationTime<=F);F=e.unstable_now(),typeof K=="function"?f.callback=K:f===n(s)&&r(s),h(F)}else r(s);f=n(s)}if(f!==null)var Ct=!0;else{var Oe=n(u);Oe!==null&&Ce(S,Oe.startTime-F),Ct=!1}return Ct}finally{f=null,p=$,g=!1}}var E=!1,k=null,C=-1,P=5,N=-1;function U(){return!(e.unstable_now()-N<P)}function D(){if(k!==null){var j=e.unstable_now();N=j;var F=!0;try{F=k(!0,j)}finally{F?z():(E=!1,k=null)}}else E=!1}var z;if(typeof d=="function")z=function(){d(D)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,Se=ht.port2;ht.port1.onmessage=D,z=function(){Se.postMessage(null)}}else z=function(){x(D,0)};function Re(j){k=j,E||(E=!0,z())}function Ce(j,F){C=x(function(){j(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,Re(b))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(j){switch(p){case 1:case 2:case 3:var F=3;break;default:F=p}var $=p;p=F;try{return j()}finally{p=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,F){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var $=p;p=j;try{return F()}finally{p=$}},e.unstable_scheduleCallback=function(j,F,$){var ne=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ne+$:ne):$=ne,j){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=$+K,j={id:c++,callback:F,priorityLevel:j,startTime:$,expirationTime:K,sortIndex:-1},$>ne?(j.sortIndex=$,t(u,j),n(s)===null&&j===n(u)&&(v?(m(C),C=-1):v=!0,Ce(S,$-ne))):(j.sortIndex=K,t(s,j),w||g||(w=!0,Re(b))),j},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(j){var F=p;return function(){var $=p;p=F;try{return j.apply(this,arguments)}finally{p=$}}}})(Gh);Xh.exports=Gh;var z1=Xh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qh=O,ct=z1;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qh=new Set,Xi={};function fr(e,t){Br(e,t),Br(e+"Capture",t)}function Br(e,t){for(Xi[e]=t,e=0;e<t.length;e++)qh.add(t[e])}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lu=Object.prototype.hasOwnProperty,$1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tp={},np={};function D1(e){return Lu.call(np,e)?!0:Lu.call(tp,e)?!1:$1.test(e)?np[e]=!0:(tp[e]=!0,!1)}function F1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function H1(e,t,n,r){if(t===null||typeof t>"u"||F1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Qe(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var De={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){De[e]=new Qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];De[t]=new Qe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){De[e]=new Qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){De[e]=new Qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){De[e]=new Qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){De[e]=new Qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){De[e]=new Qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){De[e]=new Qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){De[e]=new Qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var xf=/[\-:]([a-z])/g;function bf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(xf,bf);De[t]=new Qe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(xf,bf);De[t]=new Qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(xf,bf);De[t]=new Qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){De[e]=new Qe(e,1,!1,e.toLowerCase(),null,!1,!1)});De.xlinkHref=new Qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){De[e]=new Qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function kf(e,t,n,r){var i=De.hasOwnProperty(t)?De[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(H1(t,n,i,r)&&(n=null),r||i===null?D1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var sn=Qh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fa=Symbol.for("react.element"),wr=Symbol.for("react.portal"),Sr=Symbol.for("react.fragment"),Ef=Symbol.for("react.strict_mode"),Au=Symbol.for("react.profiler"),Kh=Symbol.for("react.provider"),Zh=Symbol.for("react.context"),Cf=Symbol.for("react.forward_ref"),Iu=Symbol.for("react.suspense"),Ru=Symbol.for("react.suspense_list"),Of=Symbol.for("react.memo"),vn=Symbol.for("react.lazy"),Jh=Symbol.for("react.offscreen"),rp=Symbol.iterator;function vi(e){return e===null||typeof e!="object"?null:(e=rp&&e[rp]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,Ms;function Ti(e){if(Ms===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ms=t&&t[1]||""}return`
`+Ms+e}var zs=!1;function $s(e,t){if(!e||zs)return"";zs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==a[l]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{zs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ti(e):""}function U1(e){switch(e.tag){case 5:return Ti(e.type);case 16:return Ti("Lazy");case 13:return Ti("Suspense");case 19:return Ti("SuspenseList");case 0:case 2:case 15:return e=$s(e.type,!1),e;case 11:return e=$s(e.type.render,!1),e;case 1:return e=$s(e.type,!0),e;default:return""}}function Mu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sr:return"Fragment";case wr:return"Portal";case Au:return"Profiler";case Ef:return"StrictMode";case Iu:return"Suspense";case Ru:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zh:return(e.displayName||"Context")+".Consumer";case Kh:return(e._context.displayName||"Context")+".Provider";case Cf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Of:return t=e.displayName||null,t!==null?t:Mu(e.type)||"Memo";case vn:t=e._payload,e=e._init;try{return Mu(e(t))}catch{}}return null}function W1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mu(t);case 8:return t===Ef?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function e0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Y1(e){var t=e0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ha(e){e._valueTracker||(e._valueTracker=Y1(e))}function t0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=e0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Do(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zu(e,t){var n=t.checked;return he({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ip(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Rn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function n0(e,t){t=t.checked,t!=null&&kf(e,"checked",t,!1)}function $u(e,t){n0(e,t);var n=Rn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Du(e,t.type,n):t.hasOwnProperty("defaultValue")&&Du(e,t.type,Rn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ap(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Du(e,t,n){(t!=="number"||Do(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Pi=Array.isArray;function Rr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Rn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Fu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return he({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function op(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(Pi(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Rn(n)}}function r0(e,t){var n=Rn(t.value),r=Rn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function lp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function i0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?i0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ua,a0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ua=Ua||document.createElement("div"),Ua.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ua.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Gi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},B1=["Webkit","ms","Moz","O"];Object.keys(Ii).forEach(function(e){B1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ii[t]=Ii[e]})});function o0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ii.hasOwnProperty(e)&&Ii[e]?(""+t).trim():t+"px"}function l0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=o0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var V1=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uu(e,t){if(t){if(V1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function Wu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yu=null;function Tf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bu=null,Mr=null,zr=null;function sp(e){if(e=Pa(e)){if(typeof Bu!="function")throw Error(T(280));var t=e.stateNode;t&&(t=zl(t),Bu(e.stateNode,e.type,t))}}function s0(e){Mr?zr?zr.push(e):zr=[e]:Mr=e}function u0(){if(Mr){var e=Mr,t=zr;if(zr=Mr=null,sp(e),t)for(e=0;e<t.length;e++)sp(t[e])}}function c0(e,t){return e(t)}function f0(){}var Ds=!1;function d0(e,t,n){if(Ds)return e(t,n);Ds=!0;try{return c0(e,t,n)}finally{Ds=!1,(Mr!==null||zr!==null)&&(f0(),u0())}}function Qi(e,t){var n=e.stateNode;if(n===null)return null;var r=zl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var Vu=!1;if(en)try{var gi={};Object.defineProperty(gi,"passive",{get:function(){Vu=!0}}),window.addEventListener("test",gi,gi),window.removeEventListener("test",gi,gi)}catch{Vu=!1}function X1(e,t,n,r,i,a,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ri=!1,Fo=null,Ho=!1,Xu=null,G1={onError:function(e){Ri=!0,Fo=e}};function Q1(e,t,n,r,i,a,o,l,s){Ri=!1,Fo=null,X1.apply(G1,arguments)}function q1(e,t,n,r,i,a,o,l,s){if(Q1.apply(this,arguments),Ri){if(Ri){var u=Fo;Ri=!1,Fo=null}else throw Error(T(198));Ho||(Ho=!0,Xu=u)}}function dr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function up(e){if(dr(e)!==e)throw Error(T(188))}function K1(e){var t=e.alternate;if(!t){if(t=dr(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return up(i),e;if(a===r)return up(i),t;a=a.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function m0(e){return e=K1(e),e!==null?h0(e):null}function h0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=h0(e);if(t!==null)return t;e=e.sibling}return null}var v0=ct.unstable_scheduleCallback,cp=ct.unstable_cancelCallback,Z1=ct.unstable_shouldYield,J1=ct.unstable_requestPaint,ye=ct.unstable_now,ew=ct.unstable_getCurrentPriorityLevel,Pf=ct.unstable_ImmediatePriority,g0=ct.unstable_UserBlockingPriority,Uo=ct.unstable_NormalPriority,tw=ct.unstable_LowPriority,y0=ct.unstable_IdlePriority,Al=null,Yt=null;function nw(e){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Al,e,void 0,(e.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:aw,rw=Math.log,iw=Math.LN2;function aw(e){return e>>>=0,e===0?32:31-(rw(e)/iw|0)|0}var Wa=64,Ya=4194304;function _i(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=_i(l):(a&=o,a!==0&&(r=_i(a)))}else o=n&~i,o!==0?r=_i(o):a!==0&&(r=_i(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-At(t),i=1<<n,r|=e[n],t&=~i;return r}function ow(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lw(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-At(a),l=1<<o,s=i[o];s===-1?(!(l&n)||l&r)&&(i[o]=ow(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function Gu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function w0(){var e=Wa;return Wa<<=1,!(Wa&4194240)&&(Wa=64),e}function Fs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Oa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-At(t),e[t]=n}function sw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-At(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function _f(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-At(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var J=0;function S0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var x0,Nf,b0,k0,E0,Qu=!1,Ba=[],Cn=null,On=null,Tn=null,qi=new Map,Ki=new Map,wn=[],uw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fp(e,t){switch(e){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":On=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":qi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ki.delete(t.pointerId)}}function yi(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Pa(t),t!==null&&Nf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function cw(e,t,n,r,i){switch(t){case"focusin":return Cn=yi(Cn,e,t,n,r,i),!0;case"dragenter":return On=yi(On,e,t,n,r,i),!0;case"mouseover":return Tn=yi(Tn,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return qi.set(a,yi(qi.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Ki.set(a,yi(Ki.get(a)||null,e,t,n,r,i)),!0}return!1}function C0(e){var t=Bn(e.target);if(t!==null){var n=dr(t);if(n!==null){if(t=n.tag,t===13){if(t=p0(n),t!==null){e.blockedOn=t,E0(e.priority,function(){b0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=qu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Yu=r,n.target.dispatchEvent(r),Yu=null}else return t=Pa(n),t!==null&&Nf(t),e.blockedOn=n,!1;t.shift()}return!0}function dp(e,t,n){wo(e)&&n.delete(t)}function fw(){Qu=!1,Cn!==null&&wo(Cn)&&(Cn=null),On!==null&&wo(On)&&(On=null),Tn!==null&&wo(Tn)&&(Tn=null),qi.forEach(dp),Ki.forEach(dp)}function wi(e,t){e.blockedOn===t&&(e.blockedOn=null,Qu||(Qu=!0,ct.unstable_scheduleCallback(ct.unstable_NormalPriority,fw)))}function Zi(e){function t(i){return wi(i,e)}if(0<Ba.length){wi(Ba[0],e);for(var n=1;n<Ba.length;n++){var r=Ba[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Cn!==null&&wi(Cn,e),On!==null&&wi(On,e),Tn!==null&&wi(Tn,e),qi.forEach(t),Ki.forEach(t),n=0;n<wn.length;n++)r=wn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wn.length&&(n=wn[0],n.blockedOn===null);)C0(n),n.blockedOn===null&&wn.shift()}var $r=sn.ReactCurrentBatchConfig,Yo=!0;function dw(e,t,n,r){var i=J,a=$r.transition;$r.transition=null;try{J=1,jf(e,t,n,r)}finally{J=i,$r.transition=a}}function pw(e,t,n,r){var i=J,a=$r.transition;$r.transition=null;try{J=4,jf(e,t,n,r)}finally{J=i,$r.transition=a}}function jf(e,t,n,r){if(Yo){var i=qu(e,t,n,r);if(i===null)qs(e,t,r,Bo,n),fp(e,r);else if(cw(i,e,t,n,r))r.stopPropagation();else if(fp(e,r),t&4&&-1<uw.indexOf(e)){for(;i!==null;){var a=Pa(i);if(a!==null&&x0(a),a=qu(e,t,n,r),a===null&&qs(e,t,r,Bo,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else qs(e,t,r,null,n)}}var Bo=null;function qu(e,t,n,r){if(Bo=null,e=Tf(r),e=Bn(e),e!==null)if(t=dr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=p0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bo=e,null}function O0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ew()){case Pf:return 1;case g0:return 4;case Uo:case tw:return 16;case y0:return 536870912;default:return 16}default:return 16}}var xn=null,Lf=null,So=null;function T0(){if(So)return So;var e,t=Lf,n=t.length,r,i="value"in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return So=i.slice(e,1<r?1-r:void 0)}function xo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Va(){return!0}function pp(){return!1}function dt(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Va:pp,this.isPropagationStopped=pp,this}return he(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Va)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Va)},persist:function(){},isPersistent:Va}),t}var ui={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Af=dt(ui),Ta=he({},ui,{view:0,detail:0}),mw=dt(Ta),Hs,Us,Si,Il=he({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:If,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Si&&(Si&&e.type==="mousemove"?(Hs=e.screenX-Si.screenX,Us=e.screenY-Si.screenY):Us=Hs=0,Si=e),Hs)},movementY:function(e){return"movementY"in e?e.movementY:Us}}),mp=dt(Il),hw=he({},Il,{dataTransfer:0}),vw=dt(hw),gw=he({},Ta,{relatedTarget:0}),Ws=dt(gw),yw=he({},ui,{animationName:0,elapsedTime:0,pseudoElement:0}),ww=dt(yw),Sw=he({},ui,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xw=dt(Sw),bw=he({},ui,{data:0}),hp=dt(bw),kw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ew={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ow(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cw[e])?!!t[e]:!1}function If(){return Ow}var Tw=he({},Ta,{key:function(e){if(e.key){var t=kw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ew[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:If,charCode:function(e){return e.type==="keypress"?xo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pw=dt(Tw),_w=he({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vp=dt(_w),Nw=he({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:If}),jw=dt(Nw),Lw=he({},ui,{propertyName:0,elapsedTime:0,pseudoElement:0}),Aw=dt(Lw),Iw=he({},Il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rw=dt(Iw),Mw=[9,13,27,32],Rf=en&&"CompositionEvent"in window,Mi=null;en&&"documentMode"in document&&(Mi=document.documentMode);var zw=en&&"TextEvent"in window&&!Mi,P0=en&&(!Rf||Mi&&8<Mi&&11>=Mi),gp=String.fromCharCode(32),yp=!1;function _0(e,t){switch(e){case"keyup":return Mw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function N0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xr=!1;function $w(e,t){switch(e){case"compositionend":return N0(t);case"keypress":return t.which!==32?null:(yp=!0,gp);case"textInput":return e=t.data,e===gp&&yp?null:e;default:return null}}function Dw(e,t){if(xr)return e==="compositionend"||!Rf&&_0(e,t)?(e=T0(),So=Lf=xn=null,xr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return P0&&t.locale!=="ko"?null:t.data;default:return null}}var Fw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fw[e.type]:t==="textarea"}function j0(e,t,n,r){s0(r),t=Vo(t,"onChange"),0<t.length&&(n=new Af("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var zi=null,Ji=null;function Hw(e){U0(e,0)}function Rl(e){var t=Er(e);if(t0(t))return e}function Uw(e,t){if(e==="change")return t}var L0=!1;if(en){var Ys;if(en){var Bs="oninput"in document;if(!Bs){var Sp=document.createElement("div");Sp.setAttribute("oninput","return;"),Bs=typeof Sp.oninput=="function"}Ys=Bs}else Ys=!1;L0=Ys&&(!document.documentMode||9<document.documentMode)}function xp(){zi&&(zi.detachEvent("onpropertychange",A0),Ji=zi=null)}function A0(e){if(e.propertyName==="value"&&Rl(Ji)){var t=[];j0(t,Ji,e,Tf(e)),d0(Hw,t)}}function Ww(e,t,n){e==="focusin"?(xp(),zi=t,Ji=n,zi.attachEvent("onpropertychange",A0)):e==="focusout"&&xp()}function Yw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rl(Ji)}function Bw(e,t){if(e==="click")return Rl(t)}function Vw(e,t){if(e==="input"||e==="change")return Rl(t)}function Xw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mt=typeof Object.is=="function"?Object.is:Xw;function ea(e,t){if(Mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Lu.call(t,i)||!Mt(e[i],t[i]))return!1}return!0}function bp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kp(e,t){var n=bp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bp(n)}}function I0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?I0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function R0(){for(var e=window,t=Do();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Do(e.document)}return t}function Mf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gw(e){var t=R0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&I0(n.ownerDocument.documentElement,n)){if(r!==null&&Mf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=kp(n,a);var o=kp(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qw=en&&"documentMode"in document&&11>=document.documentMode,br=null,Ku=null,$i=null,Zu=!1;function Ep(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zu||br==null||br!==Do(r)||(r=br,"selectionStart"in r&&Mf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$i&&ea($i,r)||($i=r,r=Vo(Ku,"onSelect"),0<r.length&&(t=new Af("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=br)))}function Xa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionend:Xa("Transition","TransitionEnd")},Vs={},M0={};en&&(M0=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function Ml(e){if(Vs[e])return Vs[e];if(!kr[e])return e;var t=kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in M0)return Vs[e]=t[n];return e}var z0=Ml("animationend"),$0=Ml("animationiteration"),D0=Ml("animationstart"),F0=Ml("transitionend"),H0=new Map,Cp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fn(e,t){H0.set(e,t),fr(t,[e])}for(var Xs=0;Xs<Cp.length;Xs++){var Gs=Cp[Xs],qw=Gs.toLowerCase(),Kw=Gs[0].toUpperCase()+Gs.slice(1);Fn(qw,"on"+Kw)}Fn(z0,"onAnimationEnd");Fn($0,"onAnimationIteration");Fn(D0,"onAnimationStart");Fn("dblclick","onDoubleClick");Fn("focusin","onFocus");Fn("focusout","onBlur");Fn(F0,"onTransitionEnd");Br("onMouseEnter",["mouseout","mouseover"]);Br("onMouseLeave",["mouseout","mouseover"]);Br("onPointerEnter",["pointerout","pointerover"]);Br("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ni));function Op(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,q1(r,t,void 0,e),e.currentTarget=null}function U0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&i.isPropagationStopped())break e;Op(i,l,u),a=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,u=l.currentTarget,l=l.listener,s!==a&&i.isPropagationStopped())break e;Op(i,l,u),a=s}}}if(Ho)throw e=Xu,Ho=!1,Xu=null,e}function ie(e,t){var n=t[rc];n===void 0&&(n=t[rc]=new Set);var r=e+"__bubble";n.has(r)||(W0(t,e,2,!1),n.add(r))}function Qs(e,t,n){var r=0;t&&(r|=4),W0(n,e,r,t)}var Ga="_reactListening"+Math.random().toString(36).slice(2);function ta(e){if(!e[Ga]){e[Ga]=!0,qh.forEach(function(n){n!=="selectionchange"&&(Zw.has(n)||Qs(n,!1,e),Qs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ga]||(t[Ga]=!0,Qs("selectionchange",!1,t))}}function W0(e,t,n,r){switch(O0(t)){case 1:var i=dw;break;case 4:i=pw;break;default:i=jf}n=i.bind(null,t,n,e),i=void 0,!Vu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function qs(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Bn(l),o===null)return;if(s=o.tag,s===5||s===6){r=a=o;continue e}l=l.parentNode}}r=r.return}d0(function(){var u=a,c=Tf(n),f=[];e:{var p=H0.get(e);if(p!==void 0){var g=Af,w=e;switch(e){case"keypress":if(xo(n)===0)break e;case"keydown":case"keyup":g=Pw;break;case"focusin":w="focus",g=Ws;break;case"focusout":w="blur",g=Ws;break;case"beforeblur":case"afterblur":g=Ws;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=vw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=jw;break;case z0:case $0:case D0:g=ww;break;case F0:g=Aw;break;case"scroll":g=mw;break;case"wheel":g=Rw;break;case"copy":case"cut":case"paste":g=xw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=vp}var v=(t&4)!==0,x=!v&&e==="scroll",m=v?p!==null?p+"Capture":null:p;v=[];for(var d=u,h;d!==null;){h=d;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,m!==null&&(S=Qi(d,m),S!=null&&v.push(na(d,S,h)))),x)break;d=d.return}0<v.length&&(p=new g(p,w,null,n,c),f.push({event:p,listeners:v}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==Yu&&(w=n.relatedTarget||n.fromElement)&&(Bn(w)||w[tn]))break e;if((g||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=u,w=w?Bn(w):null,w!==null&&(x=dr(w),w!==x||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=u),g!==w)){if(v=mp,S="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=vp,S="onPointerLeave",m="onPointerEnter",d="pointer"),x=g==null?p:Er(g),h=w==null?p:Er(w),p=new v(S,d+"leave",g,n,c),p.target=x,p.relatedTarget=h,S=null,Bn(c)===u&&(v=new v(m,d+"enter",w,n,c),v.target=h,v.relatedTarget=x,S=v),x=S,g&&w)t:{for(v=g,m=w,d=0,h=v;h;h=vr(h))d++;for(h=0,S=m;S;S=vr(S))h++;for(;0<d-h;)v=vr(v),d--;for(;0<h-d;)m=vr(m),h--;for(;d--;){if(v===m||m!==null&&v===m.alternate)break t;v=vr(v),m=vr(m)}v=null}else v=null;g!==null&&Tp(f,p,g,v,!1),w!==null&&x!==null&&Tp(f,x,w,v,!0)}}e:{if(p=u?Er(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var b=Uw;else if(wp(p))if(L0)b=Vw;else{b=Yw;var E=Ww}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(b=Bw);if(b&&(b=b(e,u))){j0(f,b,n,c);break e}E&&E(e,p,u),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&Du(p,"number",p.value)}switch(E=u?Er(u):window,e){case"focusin":(wp(E)||E.contentEditable==="true")&&(br=E,Ku=u,$i=null);break;case"focusout":$i=Ku=br=null;break;case"mousedown":Zu=!0;break;case"contextmenu":case"mouseup":case"dragend":Zu=!1,Ep(f,n,c);break;case"selectionchange":if(Qw)break;case"keydown":case"keyup":Ep(f,n,c)}var k;if(Rf)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else xr?_0(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(P0&&n.locale!=="ko"&&(xr||C!=="onCompositionStart"?C==="onCompositionEnd"&&xr&&(k=T0()):(xn=c,Lf="value"in xn?xn.value:xn.textContent,xr=!0)),E=Vo(u,C),0<E.length&&(C=new hp(C,e,null,n,c),f.push({event:C,listeners:E}),k?C.data=k:(k=N0(n),k!==null&&(C.data=k)))),(k=zw?$w(e,n):Dw(e,n))&&(u=Vo(u,"onBeforeInput"),0<u.length&&(c=new hp("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=k))}U0(f,t)})}function na(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Qi(e,n),a!=null&&r.unshift(na(e,a,i)),a=Qi(e,t),a!=null&&r.push(na(e,a,i))),e=e.return}return r}function vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Tp(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=Qi(n,a),s!=null&&o.unshift(na(n,s,l))):i||(s=Qi(n,a),s!=null&&o.push(na(n,s,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Jw=/\r\n?/g,eS=/\u0000|\uFFFD/g;function Pp(e){return(typeof e=="string"?e:""+e).replace(Jw,`
`).replace(eS,"")}function Qa(e,t,n){if(t=Pp(t),Pp(e)!==t&&n)throw Error(T(425))}function Xo(){}var Ju=null,ec=null;function tc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nc=typeof setTimeout=="function"?setTimeout:void 0,tS=typeof clearTimeout=="function"?clearTimeout:void 0,_p=typeof Promise=="function"?Promise:void 0,nS=typeof queueMicrotask=="function"?queueMicrotask:typeof _p<"u"?function(e){return _p.resolve(null).then(e).catch(rS)}:nc;function rS(e){setTimeout(function(){throw e})}function Ks(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Zi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Zi(t)}function Pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Np(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ci=Math.random().toString(36).slice(2),Ut="__reactFiber$"+ci,ra="__reactProps$"+ci,tn="__reactContainer$"+ci,rc="__reactEvents$"+ci,iS="__reactListeners$"+ci,aS="__reactHandles$"+ci;function Bn(e){var t=e[Ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[tn]||n[Ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Np(e);e!==null;){if(n=e[Ut])return n;e=Np(e)}return t}e=n,n=e.parentNode}return null}function Pa(e){return e=e[Ut]||e[tn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function zl(e){return e[ra]||null}var ic=[],Cr=-1;function Hn(e){return{current:e}}function le(e){0>Cr||(e.current=ic[Cr],ic[Cr]=null,Cr--)}function re(e,t){Cr++,ic[Cr]=e.current,e.current=t}var Mn={},Ye=Hn(Mn),tt=Hn(!1),rr=Mn;function Vr(e,t){var n=e.type.contextTypes;if(!n)return Mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function nt(e){return e=e.childContextTypes,e!=null}function Go(){le(tt),le(Ye)}function jp(e,t,n){if(Ye.current!==Mn)throw Error(T(168));re(Ye,t),re(tt,n)}function Y0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(T(108,W1(e)||"Unknown",i));return he({},n,r)}function Qo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mn,rr=Ye.current,re(Ye,e),re(tt,tt.current),!0}function Lp(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=Y0(e,t,rr),r.__reactInternalMemoizedMergedChildContext=e,le(tt),le(Ye),re(Ye,e)):le(tt),re(tt,n)}var qt=null,$l=!1,Zs=!1;function B0(e){qt===null?qt=[e]:qt.push(e)}function oS(e){$l=!0,B0(e)}function Un(){if(!Zs&&qt!==null){Zs=!0;var e=0,t=J;try{var n=qt;for(J=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}qt=null,$l=!1}catch(i){throw qt!==null&&(qt=qt.slice(e+1)),v0(Pf,Un),i}finally{J=t,Zs=!1}}return null}var Or=[],Tr=0,qo=null,Ko=0,gt=[],yt=0,ir=null,Kt=1,Zt="";function Wn(e,t){Or[Tr++]=Ko,Or[Tr++]=qo,qo=e,Ko=t}function V0(e,t,n){gt[yt++]=Kt,gt[yt++]=Zt,gt[yt++]=ir,ir=e;var r=Kt;e=Zt;var i=32-At(r)-1;r&=~(1<<i),n+=1;var a=32-At(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Kt=1<<32-At(t)+i|n<<i|r,Zt=a+e}else Kt=1<<a|n<<i|r,Zt=e}function zf(e){e.return!==null&&(Wn(e,1),V0(e,1,0))}function $f(e){for(;e===qo;)qo=Or[--Tr],Or[Tr]=null,Ko=Or[--Tr],Or[Tr]=null;for(;e===ir;)ir=gt[--yt],gt[yt]=null,Zt=gt[--yt],gt[yt]=null,Kt=gt[--yt],gt[yt]=null}var st=null,lt=null,fe=!1,Nt=null;function X0(e,t){var n=wt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ap(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,st=e,lt=Pn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,st=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ir!==null?{id:Kt,overflow:Zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=wt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,st=e,lt=null,!0):!1;default:return!1}}function ac(e){return(e.mode&1)!==0&&(e.flags&128)===0}function oc(e){if(fe){var t=lt;if(t){var n=t;if(!Ap(e,t)){if(ac(e))throw Error(T(418));t=Pn(n.nextSibling);var r=st;t&&Ap(e,t)?X0(r,n):(e.flags=e.flags&-4097|2,fe=!1,st=e)}}else{if(ac(e))throw Error(T(418));e.flags=e.flags&-4097|2,fe=!1,st=e}}}function Ip(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;st=e}function qa(e){if(e!==st)return!1;if(!fe)return Ip(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!tc(e.type,e.memoizedProps)),t&&(t=lt)){if(ac(e))throw G0(),Error(T(418));for(;t;)X0(e,t),t=Pn(t.nextSibling)}if(Ip(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){lt=Pn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=st?Pn(e.stateNode.nextSibling):null;return!0}function G0(){for(var e=lt;e;)e=Pn(e.nextSibling)}function Xr(){lt=st=null,fe=!1}function Df(e){Nt===null?Nt=[e]:Nt.push(e)}var lS=sn.ReactCurrentBatchConfig;function Tt(e,t){if(e&&e.defaultProps){t=he({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Zo=Hn(null),Jo=null,Pr=null,Ff=null;function Hf(){Ff=Pr=Jo=null}function Uf(e){var t=Zo.current;le(Zo),e._currentValue=t}function lc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dr(e,t){Jo=e,Ff=Pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Je=!0),e.firstContext=null)}function xt(e){var t=e._currentValue;if(Ff!==e)if(e={context:e,memoizedValue:t,next:null},Pr===null){if(Jo===null)throw Error(T(308));Pr=e,Jo.dependencies={lanes:0,firstContext:e}}else Pr=Pr.next=e;return t}var Vn=null;function Wf(e){Vn===null?Vn=[e]:Vn.push(e)}function Q0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Wf(t)):(n.next=i.next,i.next=n),t.interleaved=n,nn(e,r)}function nn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gn=!1;function Yf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function q0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _n(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,nn(e,n)}return i=r.interleaved,i===null?(t.next=t,Wf(r)):(t.next=i.next,i.next=t),r.interleaved=t,nn(e,n)}function bo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_f(e,n)}}function Rp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function el(e,t,n,r){var i=e.updateQueue;gn=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,o===null?a=u:o.next=u,o=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(a!==null){var f=i.baseState;o=0,c=u=s=null,l=a;do{var p=l.lane,g=l.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,v=l;switch(p=t,g=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){f=w.call(g,f,p);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,p=typeof w=="function"?w.call(g,f,p):w,p==null)break e;f=he({},f,p);break e;case 2:gn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else g={eventTime:g,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=g,s=f):c=c.next=g,o|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(c===null&&(s=f),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);or|=o,e.lanes=o,e.memoizedState=f}}function Mp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var K0=new Qh.Component().refs;function sc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:he({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Dl={isMounted:function(e){return(e=e._reactInternals)?dr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Xe(),i=jn(e),a=Jt(r,i);a.payload=t,n!=null&&(a.callback=n),t=_n(e,a,i),t!==null&&(It(t,e,i,r),bo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Xe(),i=jn(e),a=Jt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=_n(e,a,i),t!==null&&(It(t,e,i,r),bo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Xe(),r=jn(e),i=Jt(n,r);i.tag=2,t!=null&&(i.callback=t),t=_n(e,i,r),t!==null&&(It(t,e,r,n),bo(t,e,r))}};function zp(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!ea(n,r)||!ea(i,a):!0}function Z0(e,t,n){var r=!1,i=Mn,a=t.contextType;return typeof a=="object"&&a!==null?a=xt(a):(i=nt(t)?rr:Ye.current,r=t.contextTypes,a=(r=r!=null)?Vr(e,i):Mn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Dl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function $p(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Dl.enqueueReplaceState(t,t.state,null)}function uc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=K0,Yf(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=xt(a):(a=nt(t)?rr:Ye.current,i.context=Vr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(sc(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Dl.enqueueReplaceState(i,i.state,null),el(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function xi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=i.refs;l===K0&&(l=i.refs={}),o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function Ka(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Dp(e){var t=e._init;return t(e._payload)}function J0(e){function t(m,d){if(e){var h=m.deletions;h===null?(m.deletions=[d],m.flags|=16):h.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function i(m,d){return m=Ln(m,d),m.index=0,m.sibling=null,m}function a(m,d,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<d?(m.flags|=2,d):h):(m.flags|=2,d)):(m.flags|=1048576,d)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,d,h,S){return d===null||d.tag!==6?(d=au(h,m.mode,S),d.return=m,d):(d=i(d,h),d.return=m,d)}function s(m,d,h,S){var b=h.type;return b===Sr?c(m,d,h.props.children,S,h.key):d!==null&&(d.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===vn&&Dp(b)===d.type)?(S=i(d,h.props),S.ref=xi(m,d,h),S.return=m,S):(S=Po(h.type,h.key,h.props,null,m.mode,S),S.ref=xi(m,d,h),S.return=m,S)}function u(m,d,h,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=ou(h,m.mode,S),d.return=m,d):(d=i(d,h.children||[]),d.return=m,d)}function c(m,d,h,S,b){return d===null||d.tag!==7?(d=Zn(h,m.mode,S,b),d.return=m,d):(d=i(d,h),d.return=m,d)}function f(m,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=au(""+d,m.mode,h),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Fa:return h=Po(d.type,d.key,d.props,null,m.mode,h),h.ref=xi(m,null,d),h.return=m,h;case wr:return d=ou(d,m.mode,h),d.return=m,d;case vn:var S=d._init;return f(m,S(d._payload),h)}if(Pi(d)||vi(d))return d=Zn(d,m.mode,h,null),d.return=m,d;Ka(m,d)}return null}function p(m,d,h,S){var b=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return b!==null?null:l(m,d,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Fa:return h.key===b?s(m,d,h,S):null;case wr:return h.key===b?u(m,d,h,S):null;case vn:return b=h._init,p(m,d,b(h._payload),S)}if(Pi(h)||vi(h))return b!==null?null:c(m,d,h,S,null);Ka(m,h)}return null}function g(m,d,h,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(h)||null,l(d,m,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Fa:return m=m.get(S.key===null?h:S.key)||null,s(d,m,S,b);case wr:return m=m.get(S.key===null?h:S.key)||null,u(d,m,S,b);case vn:var E=S._init;return g(m,d,h,E(S._payload),b)}if(Pi(S)||vi(S))return m=m.get(h)||null,c(d,m,S,b,null);Ka(d,S)}return null}function w(m,d,h,S){for(var b=null,E=null,k=d,C=d=0,P=null;k!==null&&C<h.length;C++){k.index>C?(P=k,k=null):P=k.sibling;var N=p(m,k,h[C],S);if(N===null){k===null&&(k=P);break}e&&k&&N.alternate===null&&t(m,k),d=a(N,d,C),E===null?b=N:E.sibling=N,E=N,k=P}if(C===h.length)return n(m,k),fe&&Wn(m,C),b;if(k===null){for(;C<h.length;C++)k=f(m,h[C],S),k!==null&&(d=a(k,d,C),E===null?b=k:E.sibling=k,E=k);return fe&&Wn(m,C),b}for(k=r(m,k);C<h.length;C++)P=g(k,m,C,h[C],S),P!==null&&(e&&P.alternate!==null&&k.delete(P.key===null?C:P.key),d=a(P,d,C),E===null?b=P:E.sibling=P,E=P);return e&&k.forEach(function(U){return t(m,U)}),fe&&Wn(m,C),b}function v(m,d,h,S){var b=vi(h);if(typeof b!="function")throw Error(T(150));if(h=b.call(h),h==null)throw Error(T(151));for(var E=b=null,k=d,C=d=0,P=null,N=h.next();k!==null&&!N.done;C++,N=h.next()){k.index>C?(P=k,k=null):P=k.sibling;var U=p(m,k,N.value,S);if(U===null){k===null&&(k=P);break}e&&k&&U.alternate===null&&t(m,k),d=a(U,d,C),E===null?b=U:E.sibling=U,E=U,k=P}if(N.done)return n(m,k),fe&&Wn(m,C),b;if(k===null){for(;!N.done;C++,N=h.next())N=f(m,N.value,S),N!==null&&(d=a(N,d,C),E===null?b=N:E.sibling=N,E=N);return fe&&Wn(m,C),b}for(k=r(m,k);!N.done;C++,N=h.next())N=g(k,m,C,N.value,S),N!==null&&(e&&N.alternate!==null&&k.delete(N.key===null?C:N.key),d=a(N,d,C),E===null?b=N:E.sibling=N,E=N);return e&&k.forEach(function(D){return t(m,D)}),fe&&Wn(m,C),b}function x(m,d,h,S){if(typeof h=="object"&&h!==null&&h.type===Sr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Fa:e:{for(var b=h.key,E=d;E!==null;){if(E.key===b){if(b=h.type,b===Sr){if(E.tag===7){n(m,E.sibling),d=i(E,h.props.children),d.return=m,m=d;break e}}else if(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===vn&&Dp(b)===E.type){n(m,E.sibling),d=i(E,h.props),d.ref=xi(m,E,h),d.return=m,m=d;break e}n(m,E);break}else t(m,E);E=E.sibling}h.type===Sr?(d=Zn(h.props.children,m.mode,S,h.key),d.return=m,m=d):(S=Po(h.type,h.key,h.props,null,m.mode,S),S.ref=xi(m,d,h),S.return=m,m=S)}return o(m);case wr:e:{for(E=h.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(m,d.sibling),d=i(d,h.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=ou(h,m.mode,S),d.return=m,m=d}return o(m);case vn:return E=h._init,x(m,d,E(h._payload),S)}if(Pi(h))return w(m,d,h,S);if(vi(h))return v(m,d,h,S);Ka(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(m,d.sibling),d=i(d,h),d.return=m,m=d):(n(m,d),d=au(h,m.mode,S),d.return=m,m=d),o(m)):n(m,d)}return x}var Gr=J0(!0),ev=J0(!1),_a={},Bt=Hn(_a),ia=Hn(_a),aa=Hn(_a);function Xn(e){if(e===_a)throw Error(T(174));return e}function Bf(e,t){switch(re(aa,t),re(ia,e),re(Bt,_a),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Hu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Hu(t,e)}le(Bt),re(Bt,t)}function Qr(){le(Bt),le(ia),le(aa)}function tv(e){Xn(aa.current);var t=Xn(Bt.current),n=Hu(t,e.type);t!==n&&(re(ia,e),re(Bt,n))}function Vf(e){ia.current===e&&(le(Bt),le(ia))}var pe=Hn(0);function tl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Js=[];function Xf(){for(var e=0;e<Js.length;e++)Js[e]._workInProgressVersionPrimary=null;Js.length=0}var ko=sn.ReactCurrentDispatcher,eu=sn.ReactCurrentBatchConfig,ar=0,me=null,Te=null,je=null,nl=!1,Di=!1,oa=0,sS=0;function Fe(){throw Error(T(321))}function Gf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mt(e[n],t[n]))return!1;return!0}function Qf(e,t,n,r,i,a){if(ar=a,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ko.current=e===null||e.memoizedState===null?dS:pS,e=n(r,i),Di){a=0;do{if(Di=!1,oa=0,25<=a)throw Error(T(301));a+=1,je=Te=null,t.updateQueue=null,ko.current=mS,e=n(r,i)}while(Di)}if(ko.current=rl,t=Te!==null&&Te.next!==null,ar=0,je=Te=me=null,nl=!1,t)throw Error(T(300));return e}function qf(){var e=oa!==0;return oa=0,e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?me.memoizedState=je=e:je=je.next=e,je}function bt(){if(Te===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=je===null?me.memoizedState:je.next;if(t!==null)je=t,Te=e;else{if(e===null)throw Error(T(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},je===null?me.memoizedState=je=e:je=je.next=e}return je}function la(e,t){return typeof t=="function"?t(e):t}function tu(e){var t=bt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=Te,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=o=null,s=null,u=a;do{var c=u.lane;if((ar&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=f,o=r):s=s.next=f,me.lanes|=c,or|=c}u=u.next}while(u!==null&&u!==a);s===null?o=r:s.next=l,Mt(r,t.memoizedState)||(Je=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,me.lanes|=a,or|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function nu(e){var t=bt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Mt(a,t.memoizedState)||(Je=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function nv(){}function rv(e,t){var n=me,r=bt(),i=t(),a=!Mt(r.memoizedState,i);if(a&&(r.memoizedState=i,Je=!0),r=r.queue,Kf(ov.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,sa(9,av.bind(null,n,r,i,t),void 0,null),Ae===null)throw Error(T(349));ar&30||iv(n,t,i)}return i}function iv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function av(e,t,n,r){t.value=n,t.getSnapshot=r,lv(t)&&sv(e)}function ov(e,t,n){return n(function(){lv(t)&&sv(e)})}function lv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mt(e,n)}catch{return!0}}function sv(e){var t=nn(e,1);t!==null&&It(t,e,1,-1)}function Fp(e){var t=$t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:e},t.queue=e,e=e.dispatch=fS.bind(null,me,e),[t.memoizedState,e]}function sa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function uv(){return bt().memoizedState}function Eo(e,t,n,r){var i=$t();me.flags|=e,i.memoizedState=sa(1|t,n,void 0,r===void 0?null:r)}function Fl(e,t,n,r){var i=bt();r=r===void 0?null:r;var a=void 0;if(Te!==null){var o=Te.memoizedState;if(a=o.destroy,r!==null&&Gf(r,o.deps)){i.memoizedState=sa(t,n,a,r);return}}me.flags|=e,i.memoizedState=sa(1|t,n,a,r)}function Hp(e,t){return Eo(8390656,8,e,t)}function Kf(e,t){return Fl(2048,8,e,t)}function cv(e,t){return Fl(4,2,e,t)}function fv(e,t){return Fl(4,4,e,t)}function dv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pv(e,t,n){return n=n!=null?n.concat([e]):null,Fl(4,4,dv.bind(null,t,e),n)}function Zf(){}function mv(e,t){var n=bt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function hv(e,t){var n=bt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function vv(e,t,n){return ar&21?(Mt(n,t)||(n=w0(),me.lanes|=n,or|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=n)}function uS(e,t){var n=J;J=n!==0&&4>n?n:4,e(!0);var r=eu.transition;eu.transition={};try{e(!1),t()}finally{J=n,eu.transition=r}}function gv(){return bt().memoizedState}function cS(e,t,n){var r=jn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},yv(e))wv(t,n);else if(n=Q0(e,t,n,r),n!==null){var i=Xe();It(n,e,r,i),Sv(n,t,r)}}function fS(e,t,n){var r=jn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(yv(e))wv(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(i.hasEagerState=!0,i.eagerState=l,Mt(l,o)){var s=t.interleaved;s===null?(i.next=i,Wf(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Q0(e,t,i,r),n!==null&&(i=Xe(),It(n,e,r,i),Sv(n,t,r))}}function yv(e){var t=e.alternate;return e===me||t!==null&&t===me}function wv(e,t){Di=nl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Sv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_f(e,n)}}var rl={readContext:xt,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},dS={readContext:xt,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:xt,useEffect:Hp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Eo(4194308,4,dv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Eo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Eo(4,2,e,t)},useMemo:function(e,t){var n=$t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cS.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:Fp,useDebugValue:Zf,useDeferredValue:function(e){return $t().memoizedState=e},useTransition:function(){var e=Fp(!1),t=e[0];return e=uS.bind(null,e[1]),$t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=me,i=$t();if(fe){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),Ae===null)throw Error(T(349));ar&30||iv(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Hp(ov.bind(null,r,a,e),[e]),r.flags|=2048,sa(9,av.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=$t(),t=Ae.identifierPrefix;if(fe){var n=Zt,r=Kt;n=(r&~(1<<32-At(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=oa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=sS++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pS={readContext:xt,useCallback:mv,useContext:xt,useEffect:Kf,useImperativeHandle:pv,useInsertionEffect:cv,useLayoutEffect:fv,useMemo:hv,useReducer:tu,useRef:uv,useState:function(){return tu(la)},useDebugValue:Zf,useDeferredValue:function(e){var t=bt();return vv(t,Te.memoizedState,e)},useTransition:function(){var e=tu(la)[0],t=bt().memoizedState;return[e,t]},useMutableSource:nv,useSyncExternalStore:rv,useId:gv,unstable_isNewReconciler:!1},mS={readContext:xt,useCallback:mv,useContext:xt,useEffect:Kf,useImperativeHandle:pv,useInsertionEffect:cv,useLayoutEffect:fv,useMemo:hv,useReducer:nu,useRef:uv,useState:function(){return nu(la)},useDebugValue:Zf,useDeferredValue:function(e){var t=bt();return Te===null?t.memoizedState=e:vv(t,Te.memoizedState,e)},useTransition:function(){var e=nu(la)[0],t=bt().memoizedState;return[e,t]},useMutableSource:nv,useSyncExternalStore:rv,useId:gv,unstable_isNewReconciler:!1};function qr(e,t){try{var n="",r=t;do n+=U1(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function ru(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function cc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hS=typeof WeakMap=="function"?WeakMap:Map;function xv(e,t,n){n=Jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){al||(al=!0,Sc=r),cc(e,t)},n}function bv(e,t,n){n=Jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){cc(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){cc(e,t),typeof r!="function"&&(Nn===null?Nn=new Set([this]):Nn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Up(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hS;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=_S.bind(null,e,t,n),t.then(e,e))}function Wp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Yp(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Jt(-1,1),t.tag=2,_n(n,t,1))),n.lanes|=1),e)}var vS=sn.ReactCurrentOwner,Je=!1;function Ve(e,t,n,r){t.child=e===null?ev(t,null,n,r):Gr(t,e.child,n,r)}function Bp(e,t,n,r,i){n=n.render;var a=t.ref;return Dr(t,i),r=Qf(e,t,n,r,a,i),n=qf(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rn(e,t,i)):(fe&&n&&zf(t),t.flags|=1,Ve(e,t,r,i),t.child)}function Vp(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!od(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,kv(e,t,a,r,i)):(e=Po(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:ea,n(o,r)&&e.ref===t.ref)return rn(e,t,i)}return t.flags|=1,e=Ln(a,r),e.ref=t.ref,e.return=t,t.child=e}function kv(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(ea(a,r)&&e.ref===t.ref)if(Je=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Je=!0);else return t.lanes=e.lanes,rn(e,t,i)}return fc(e,t,n,r,i)}function Ev(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(Nr,ot),ot|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(Nr,ot),ot|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,re(Nr,ot),ot|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,re(Nr,ot),ot|=r;return Ve(e,t,i,n),t.child}function Cv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function fc(e,t,n,r,i){var a=nt(n)?rr:Ye.current;return a=Vr(t,a),Dr(t,i),n=Qf(e,t,n,r,a,i),r=qf(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rn(e,t,i)):(fe&&r&&zf(t),t.flags|=1,Ve(e,t,n,i),t.child)}function Xp(e,t,n,r,i){if(nt(n)){var a=!0;Qo(t)}else a=!1;if(Dr(t,i),t.stateNode===null)Co(e,t),Z0(t,n,r),uc(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=xt(u):(u=nt(n)?rr:Ye.current,u=Vr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==u)&&$p(t,o,r,u),gn=!1;var p=t.memoizedState;o.state=p,el(t,r,o,i),s=t.memoizedState,l!==r||p!==s||tt.current||gn?(typeof c=="function"&&(sc(t,n,c,r),s=t.memoizedState),(l=gn||zp(t,n,l,r,p,s,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,q0(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Tt(t.type,l),o.props=u,f=t.pendingProps,p=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=xt(s):(s=nt(n)?rr:Ye.current,s=Vr(t,s));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||p!==s)&&$p(t,o,r,s),gn=!1,p=t.memoizedState,o.state=p,el(t,r,o,i);var w=t.memoizedState;l!==f||p!==w||tt.current||gn?(typeof g=="function"&&(sc(t,n,g,r),w=t.memoizedState),(u=gn||zp(t,n,u,r,p,w,s)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return dc(e,t,n,r,a,i)}function dc(e,t,n,r,i,a){Cv(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Lp(t,n,!1),rn(e,t,a);r=t.stateNode,vS.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Gr(t,e.child,null,a),t.child=Gr(t,null,l,a)):Ve(e,t,l,a),t.memoizedState=r.state,i&&Lp(t,n,!0),t.child}function Ov(e){var t=e.stateNode;t.pendingContext?jp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&jp(e,t.context,!1),Bf(e,t.containerInfo)}function Gp(e,t,n,r,i){return Xr(),Df(i),t.flags|=256,Ve(e,t,n,r),t.child}var pc={dehydrated:null,treeContext:null,retryLane:0};function mc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tv(e,t,n){var r=t.pendingProps,i=pe.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),re(pe,i&1),e===null)return oc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Wl(o,r,0,null),e=Zn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=mc(n),t.memoizedState=pc,e):Jf(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return gS(e,t,o,r,l,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Ln(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=Ln(l,a):(a=Zn(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?mc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=pc,r}return a=e.child,e=a.sibling,r=Ln(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Jf(e,t){return t=Wl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Za(e,t,n,r){return r!==null&&Df(r),Gr(t,e.child,null,n),e=Jf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gS(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=ru(Error(T(422))),Za(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Wl({mode:"visible",children:r.children},i,0,null),a=Zn(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Gr(t,e.child,null,o),t.child.memoizedState=mc(o),t.memoizedState=pc,a);if(!(t.mode&1))return Za(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(T(419)),r=ru(a,r,void 0),Za(e,t,o,r)}if(l=(o&e.childLanes)!==0,Je||l){if(r=Ae,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,nn(e,i),It(r,e,i,-1))}return ad(),r=ru(Error(T(421))),Za(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=NS.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,lt=Pn(i.nextSibling),st=t,fe=!0,Nt=null,e!==null&&(gt[yt++]=Kt,gt[yt++]=Zt,gt[yt++]=ir,Kt=e.id,Zt=e.overflow,ir=t),t=Jf(t,r.children),t.flags|=4096,t)}function Qp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),lc(e.return,t,n)}function iu(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Pv(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ve(e,t,r.children,n),r=pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qp(e,n,t);else if(e.tag===19)Qp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(re(pe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&tl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),iu(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&tl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}iu(t,!0,n,null,a);break;case"together":iu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Co(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),or|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=Ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yS(e,t,n){switch(t.tag){case 3:Ov(t),Xr();break;case 5:tv(t);break;case 1:nt(t.type)&&Qo(t);break;case 4:Bf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;re(Zo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(re(pe,pe.current&1),t.flags|=128,null):n&t.child.childLanes?Tv(e,t,n):(re(pe,pe.current&1),e=rn(e,t,n),e!==null?e.sibling:null);re(pe,pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Pv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(pe,pe.current),r)break;return null;case 22:case 23:return t.lanes=0,Ev(e,t,n)}return rn(e,t,n)}var _v,hc,Nv,jv;_v=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hc=function(){};Nv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Xn(Bt.current);var a=null;switch(n){case"input":i=zu(e,i),r=zu(e,r),a=[];break;case"select":i=he({},i,{value:void 0}),r=he({},r,{value:void 0}),a=[];break;case"textarea":i=Fu(e,i),r=Fu(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xo)}Uu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xi.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(a||(a=[]),a.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xi.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ie("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};jv=function(e,t,n,r){n!==r&&(t.flags|=4)};function bi(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wS(e,t,n){var r=t.pendingProps;switch($f(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return nt(t.type)&&Go(),He(t),null;case 3:return r=t.stateNode,Qr(),le(tt),le(Ye),Xf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(qa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Nt!==null&&(kc(Nt),Nt=null))),hc(e,t),He(t),null;case 5:Vf(t);var i=Xn(aa.current);if(n=t.type,e!==null&&t.stateNode!=null)Nv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return He(t),null}if(e=Xn(Bt.current),qa(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Ut]=t,r[ra]=a,e=(t.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(i=0;i<Ni.length;i++)ie(Ni[i],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":ip(r,a),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ie("invalid",r);break;case"textarea":op(r,a),ie("invalid",r)}Uu(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&Qa(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Qa(r.textContent,l,e),i=["children",""+l]):Xi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ie("scroll",r)}switch(n){case"input":Ha(r),ap(r,a,!0);break;case"textarea":Ha(r),lp(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Xo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=i0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ut]=t,e[ra]=r,_v(e,t,!1,!1),t.stateNode=e;e:{switch(o=Wu(n,r),n){case"dialog":ie("cancel",e),ie("close",e),i=r;break;case"iframe":case"object":case"embed":ie("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ni.length;i++)ie(Ni[i],e);i=r;break;case"source":ie("error",e),i=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),i=r;break;case"details":ie("toggle",e),i=r;break;case"input":ip(e,r),i=zu(e,r),ie("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=he({},r,{value:void 0}),ie("invalid",e);break;case"textarea":op(e,r),i=Fu(e,r),ie("invalid",e);break;default:i=r}Uu(n,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?l0(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&a0(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Gi(e,s):typeof s=="number"&&Gi(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Xi.hasOwnProperty(a)?s!=null&&a==="onScroll"&&ie("scroll",e):s!=null&&kf(e,a,s,o))}switch(n){case"input":Ha(e),ap(e,r,!1);break;case"textarea":Ha(e),lp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Rn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Rr(e,!!r.multiple,a,!1):r.defaultValue!=null&&Rr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Xo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return He(t),null;case 6:if(e&&t.stateNode!=null)jv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=Xn(aa.current),Xn(Bt.current),qa(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ut]=t,(a=r.nodeValue!==n)&&(e=st,e!==null))switch(e.tag){case 3:Qa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qa(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ut]=t,t.stateNode=r}return He(t),null;case 13:if(le(pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&lt!==null&&t.mode&1&&!(t.flags&128))G0(),Xr(),t.flags|=98560,a=!1;else if(a=qa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(T(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(T(317));a[Ut]=t}else Xr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;He(t),a=!1}else Nt!==null&&(kc(Nt),Nt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||pe.current&1?Pe===0&&(Pe=3):ad())),t.updateQueue!==null&&(t.flags|=4),He(t),null);case 4:return Qr(),hc(e,t),e===null&&ta(t.stateNode.containerInfo),He(t),null;case 10:return Uf(t.type._context),He(t),null;case 17:return nt(t.type)&&Go(),He(t),null;case 19:if(le(pe),a=t.memoizedState,a===null)return He(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)bi(a,!1);else{if(Pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=tl(e),o!==null){for(t.flags|=128,bi(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return re(pe,pe.current&1|2),t.child}e=e.sibling}a.tail!==null&&ye()>Kr&&(t.flags|=128,r=!0,bi(a,!1),t.lanes=4194304)}else{if(!r)if(e=tl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),bi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!fe)return He(t),null}else 2*ye()-a.renderingStartTime>Kr&&n!==1073741824&&(t.flags|=128,r=!0,bi(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ye(),t.sibling=null,n=pe.current,re(pe,r?n&1|2:n&1),t):(He(t),null);case 22:case 23:return id(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ot&1073741824&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function SS(e,t){switch($f(t),t.tag){case 1:return nt(t.type)&&Go(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qr(),le(tt),le(Ye),Xf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Vf(t),null;case 13:if(le(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));Xr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(pe),null;case 4:return Qr(),null;case 10:return Uf(t.type._context),null;case 22:case 23:return id(),null;case 24:return null;default:return null}}var Ja=!1,We=!1,xS=typeof WeakSet=="function"?WeakSet:Set,I=null;function _r(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(e,t,r)}else n.current=null}function vc(e,t,n){try{n()}catch(r){ve(e,t,r)}}var qp=!1;function bS(e,t){if(Ju=Yo,e=R0(),Mf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,u=0,c=0,f=e,p=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==a||r!==0&&f.nodeType!==3||(s=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===e)break t;if(p===n&&++u===i&&(l=o),p===a&&++c===r&&(s=o),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ec={focusedElem:e,selectionRange:n},Yo=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,x=w.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:Tt(t.type,v),x);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(S){ve(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return w=qp,qp=!1,w}function Fi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&vc(t,n,a)}i=i.next}while(i!==r)}}function Hl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function gc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Lv(e){var t=e.alternate;t!==null&&(e.alternate=null,Lv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ut],delete t[ra],delete t[rc],delete t[iS],delete t[aS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Av(e){return e.tag===5||e.tag===3||e.tag===4}function Kp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Av(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xo));else if(r!==4&&(e=e.child,e!==null))for(yc(e,t,n),e=e.sibling;e!==null;)yc(e,t,n),e=e.sibling}function wc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(wc(e,t,n),e=e.sibling;e!==null;)wc(e,t,n),e=e.sibling}var Me=null,Pt=!1;function dn(e,t,n){for(n=n.child;n!==null;)Iv(e,t,n),n=n.sibling}function Iv(e,t,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Al,n)}catch{}switch(n.tag){case 5:We||_r(n,t);case 6:var r=Me,i=Pt;Me=null,dn(e,t,n),Me=r,Pt=i,Me!==null&&(Pt?(e=Me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(Pt?(e=Me,n=n.stateNode,e.nodeType===8?Ks(e.parentNode,n):e.nodeType===1&&Ks(e,n),Zi(e)):Ks(Me,n.stateNode));break;case 4:r=Me,i=Pt,Me=n.stateNode.containerInfo,Pt=!0,dn(e,t,n),Me=r,Pt=i;break;case 0:case 11:case 14:case 15:if(!We&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&vc(n,t,o),i=i.next}while(i!==r)}dn(e,t,n);break;case 1:if(!We&&(_r(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ve(n,t,l)}dn(e,t,n);break;case 21:dn(e,t,n);break;case 22:n.mode&1?(We=(r=We)||n.memoizedState!==null,dn(e,t,n),We=r):dn(e,t,n);break;default:dn(e,t,n)}}function Zp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xS),t.forEach(function(r){var i=jS.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:Me=l.stateNode,Pt=!1;break e;case 3:Me=l.stateNode.containerInfo,Pt=!0;break e;case 4:Me=l.stateNode.containerInfo,Pt=!0;break e}l=l.return}if(Me===null)throw Error(T(160));Iv(a,o,i),Me=null,Pt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){ve(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Rv(t,e),t=t.sibling}function Rv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ot(t,e),zt(e),r&4){try{Fi(3,e,e.return),Hl(3,e)}catch(v){ve(e,e.return,v)}try{Fi(5,e,e.return)}catch(v){ve(e,e.return,v)}}break;case 1:Ot(t,e),zt(e),r&512&&n!==null&&_r(n,n.return);break;case 5:if(Ot(t,e),zt(e),r&512&&n!==null&&_r(n,n.return),e.flags&32){var i=e.stateNode;try{Gi(i,"")}catch(v){ve(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&n0(i,a),Wu(l,o);var u=Wu(l,a);for(o=0;o<s.length;o+=2){var c=s[o],f=s[o+1];c==="style"?l0(i,f):c==="dangerouslySetInnerHTML"?a0(i,f):c==="children"?Gi(i,f):kf(i,c,f,u)}switch(l){case"input":$u(i,a);break;case"textarea":r0(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?Rr(i,!!a.multiple,g,!1):p!==!!a.multiple&&(a.defaultValue!=null?Rr(i,!!a.multiple,a.defaultValue,!0):Rr(i,!!a.multiple,a.multiple?[]:"",!1))}i[ra]=a}catch(v){ve(e,e.return,v)}}break;case 6:if(Ot(t,e),zt(e),r&4){if(e.stateNode===null)throw Error(T(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(v){ve(e,e.return,v)}}break;case 3:if(Ot(t,e),zt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zi(t.containerInfo)}catch(v){ve(e,e.return,v)}break;case 4:Ot(t,e),zt(e);break;case 13:Ot(t,e),zt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(nd=ye())),r&4&&Zp(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(We=(u=We)||c,Ot(t,e),We=u):Ot(t,e),zt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(I=e,c=e.child;c!==null;){for(f=I=c;I!==null;){switch(p=I,g=p.child,p.tag){case 0:case 11:case 14:case 15:Fi(4,p,p.return);break;case 1:_r(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){ve(r,n,v)}}break;case 5:_r(p,p.return);break;case 22:if(p.memoizedState!==null){em(f);continue}}g!==null?(g.return=p,I=g):em(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=f.stateNode,s=f.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=o0("display",o))}catch(v){ve(e,e.return,v)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){ve(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ot(t,e),zt(e),r&4&&Zp(e);break;case 21:break;default:Ot(t,e),zt(e)}}function zt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Av(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Gi(i,""),r.flags&=-33);var a=Kp(e);wc(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Kp(e);yc(e,l,o);break;default:throw Error(T(161))}}catch(s){ve(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kS(e,t,n){I=e,Mv(e)}function Mv(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var i=I,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ja;if(!o){var l=i.alternate,s=l!==null&&l.memoizedState!==null||We;l=Ja;var u=We;if(Ja=o,(We=s)&&!u)for(I=i;I!==null;)o=I,s=o.child,o.tag===22&&o.memoizedState!==null?tm(i):s!==null?(s.return=o,I=s):tm(i);for(;a!==null;)I=a,Mv(a),a=a.sibling;I=i,Ja=l,We=u}Jp(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,I=a):Jp(e)}}function Jp(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:We||Hl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!We)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Tt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Mp(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Mp(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Zi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}We||t.flags&512&&gc(t)}catch(p){ve(t,t.return,p)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function em(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function tm(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Hl(4,t)}catch(s){ve(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){ve(t,i,s)}}var a=t.return;try{gc(t)}catch(s){ve(t,a,s)}break;case 5:var o=t.return;try{gc(t)}catch(s){ve(t,o,s)}}}catch(s){ve(t,t.return,s)}if(t===e){I=null;break}var l=t.sibling;if(l!==null){l.return=t.return,I=l;break}I=t.return}}var ES=Math.ceil,il=sn.ReactCurrentDispatcher,ed=sn.ReactCurrentOwner,St=sn.ReactCurrentBatchConfig,G=0,Ae=null,ke=null,$e=0,ot=0,Nr=Hn(0),Pe=0,ua=null,or=0,Ul=0,td=0,Hi=null,Ze=null,nd=0,Kr=1/0,Gt=null,al=!1,Sc=null,Nn=null,eo=!1,bn=null,ol=0,Ui=0,xc=null,Oo=-1,To=0;function Xe(){return G&6?ye():Oo!==-1?Oo:Oo=ye()}function jn(e){return e.mode&1?G&2&&$e!==0?$e&-$e:lS.transition!==null?(To===0&&(To=w0()),To):(e=J,e!==0||(e=window.event,e=e===void 0?16:O0(e.type)),e):1}function It(e,t,n,r){if(50<Ui)throw Ui=0,xc=null,Error(T(185));Oa(e,n,r),(!(G&2)||e!==Ae)&&(e===Ae&&(!(G&2)&&(Ul|=n),Pe===4&&Sn(e,$e)),rt(e,r),n===1&&G===0&&!(t.mode&1)&&(Kr=ye()+500,$l&&Un()))}function rt(e,t){var n=e.callbackNode;lw(e,t);var r=Wo(e,e===Ae?$e:0);if(r===0)n!==null&&cp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&cp(n),t===1)e.tag===0?oS(nm.bind(null,e)):B0(nm.bind(null,e)),nS(function(){!(G&6)&&Un()}),n=null;else{switch(S0(r)){case 1:n=Pf;break;case 4:n=g0;break;case 16:n=Uo;break;case 536870912:n=y0;break;default:n=Uo}n=Yv(n,zv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function zv(e,t){if(Oo=-1,To=0,G&6)throw Error(T(327));var n=e.callbackNode;if(Fr()&&e.callbackNode!==n)return null;var r=Wo(e,e===Ae?$e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ll(e,r);else{t=r;var i=G;G|=2;var a=Dv();(Ae!==e||$e!==t)&&(Gt=null,Kr=ye()+500,Kn(e,t));do try{TS();break}catch(l){$v(e,l)}while(1);Hf(),il.current=a,G=i,ke!==null?t=0:(Ae=null,$e=0,t=Pe)}if(t!==0){if(t===2&&(i=Gu(e),i!==0&&(r=i,t=bc(e,i))),t===1)throw n=ua,Kn(e,0),Sn(e,r),rt(e,ye()),n;if(t===6)Sn(e,r);else{if(i=e.current.alternate,!(r&30)&&!CS(i)&&(t=ll(e,r),t===2&&(a=Gu(e),a!==0&&(r=a,t=bc(e,a))),t===1))throw n=ua,Kn(e,0),Sn(e,r),rt(e,ye()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:Yn(e,Ze,Gt);break;case 3:if(Sn(e,r),(r&130023424)===r&&(t=nd+500-ye(),10<t)){if(Wo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=nc(Yn.bind(null,e,Ze,Gt),t);break}Yn(e,Ze,Gt);break;case 4:if(Sn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-At(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ES(r/1960))-r,10<r){e.timeoutHandle=nc(Yn.bind(null,e,Ze,Gt),r);break}Yn(e,Ze,Gt);break;case 5:Yn(e,Ze,Gt);break;default:throw Error(T(329))}}}return rt(e,ye()),e.callbackNode===n?zv.bind(null,e):null}function bc(e,t){var n=Hi;return e.current.memoizedState.isDehydrated&&(Kn(e,t).flags|=256),e=ll(e,t),e!==2&&(t=Ze,Ze=n,t!==null&&kc(t)),e}function kc(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function CS(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Mt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sn(e,t){for(t&=~td,t&=~Ul,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-At(t),r=1<<n;e[n]=-1,t&=~r}}function nm(e){if(G&6)throw Error(T(327));Fr();var t=Wo(e,0);if(!(t&1))return rt(e,ye()),null;var n=ll(e,t);if(e.tag!==0&&n===2){var r=Gu(e);r!==0&&(t=r,n=bc(e,r))}if(n===1)throw n=ua,Kn(e,0),Sn(e,t),rt(e,ye()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yn(e,Ze,Gt),rt(e,ye()),null}function rd(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(Kr=ye()+500,$l&&Un())}}function lr(e){bn!==null&&bn.tag===0&&!(G&6)&&Fr();var t=G;G|=1;var n=St.transition,r=J;try{if(St.transition=null,J=1,e)return e()}finally{J=r,St.transition=n,G=t,!(G&6)&&Un()}}function id(){ot=Nr.current,le(Nr)}function Kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,tS(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch($f(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Go();break;case 3:Qr(),le(tt),le(Ye),Xf();break;case 5:Vf(r);break;case 4:Qr();break;case 13:le(pe);break;case 19:le(pe);break;case 10:Uf(r.type._context);break;case 22:case 23:id()}n=n.return}if(Ae=e,ke=e=Ln(e.current,null),$e=ot=t,Pe=0,ua=null,td=Ul=or=0,Ze=Hi=null,Vn!==null){for(t=0;t<Vn.length;t++)if(n=Vn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Vn=null}return e}function $v(e,t){do{var n=ke;try{if(Hf(),ko.current=rl,nl){for(var r=me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}nl=!1}if(ar=0,je=Te=me=null,Di=!1,oa=0,ed.current=null,n===null||n.return===null){Pe=1,ua=t,ke=null;break}e:{var a=e,o=n.return,l=n,s=t;if(t=$e,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Wp(o);if(g!==null){g.flags&=-257,Yp(g,o,l,a,t),g.mode&1&&Up(a,u,t),t=g,s=u;var w=t.updateQueue;if(w===null){var v=new Set;v.add(s),t.updateQueue=v}else w.add(s);break e}else{if(!(t&1)){Up(a,u,t),ad();break e}s=Error(T(426))}}else if(fe&&l.mode&1){var x=Wp(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Yp(x,o,l,a,t),Df(qr(s,l));break e}}a=s=qr(s,l),Pe!==4&&(Pe=2),Hi===null?Hi=[a]:Hi.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var m=xv(a,s,t);Rp(a,m);break e;case 1:l=s;var d=a.type,h=a.stateNode;if(!(a.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Nn===null||!Nn.has(h)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=bv(a,l,t);Rp(a,S);break e}}a=a.return}while(a!==null)}Hv(n)}catch(b){t=b,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(1)}function Dv(){var e=il.current;return il.current=rl,e===null?rl:e}function ad(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Ae===null||!(or&268435455)&&!(Ul&268435455)||Sn(Ae,$e)}function ll(e,t){var n=G;G|=2;var r=Dv();(Ae!==e||$e!==t)&&(Gt=null,Kn(e,t));do try{OS();break}catch(i){$v(e,i)}while(1);if(Hf(),G=n,il.current=r,ke!==null)throw Error(T(261));return Ae=null,$e=0,Pe}function OS(){for(;ke!==null;)Fv(ke)}function TS(){for(;ke!==null&&!Z1();)Fv(ke)}function Fv(e){var t=Wv(e.alternate,e,ot);e.memoizedProps=e.pendingProps,t===null?Hv(e):ke=t,ed.current=null}function Hv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=SS(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,ke=null;return}}else if(n=wS(n,t,ot),n!==null){ke=n;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);Pe===0&&(Pe=5)}function Yn(e,t,n){var r=J,i=St.transition;try{St.transition=null,J=1,PS(e,t,n,r)}finally{St.transition=i,J=r}return null}function PS(e,t,n,r){do Fr();while(bn!==null);if(G&6)throw Error(T(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(sw(e,a),e===Ae&&(ke=Ae=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||eo||(eo=!0,Yv(Uo,function(){return Fr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=St.transition,St.transition=null;var o=J;J=1;var l=G;G|=4,ed.current=null,bS(e,n),Rv(n,e),Gw(ec),Yo=!!Ju,ec=Ju=null,e.current=n,kS(n),J1(),G=l,J=o,St.transition=a}else e.current=n;if(eo&&(eo=!1,bn=e,ol=i),a=e.pendingLanes,a===0&&(Nn=null),nw(n.stateNode),rt(e,ye()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(al)throw al=!1,e=Sc,Sc=null,e;return ol&1&&e.tag!==0&&Fr(),a=e.pendingLanes,a&1?e===xc?Ui++:(Ui=0,xc=e):Ui=0,Un(),null}function Fr(){if(bn!==null){var e=S0(ol),t=St.transition,n=J;try{if(St.transition=null,J=16>e?16:e,bn===null)var r=!1;else{if(e=bn,bn=null,ol=0,G&6)throw Error(T(331));var i=G;for(G|=4,I=e.current;I!==null;){var a=I,o=a.child;if(I.flags&16){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(I=u;I!==null;){var c=I;switch(c.tag){case 0:case 11:case 15:Fi(8,c,a)}var f=c.child;if(f!==null)f.return=c,I=f;else for(;I!==null;){c=I;var p=c.sibling,g=c.return;if(Lv(c),c===u){I=null;break}if(p!==null){p.return=g,I=p;break}I=g}}}var w=a.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}I=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,I=o;else e:for(;I!==null;){if(a=I,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Fi(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,I=m;break e}I=a.return}}var d=e.current;for(I=d;I!==null;){o=I;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,I=h;else e:for(o=d;I!==null;){if(l=I,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Hl(9,l)}}catch(b){ve(l,l.return,b)}if(l===o){I=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,I=S;break e}I=l.return}}if(G=i,Un(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Al,e)}catch{}r=!0}return r}finally{J=n,St.transition=t}}return!1}function rm(e,t,n){t=qr(n,t),t=xv(e,t,1),e=_n(e,t,1),t=Xe(),e!==null&&(Oa(e,1,t),rt(e,t))}function ve(e,t,n){if(e.tag===3)rm(e,e,n);else for(;t!==null;){if(t.tag===3){rm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nn===null||!Nn.has(r))){e=qr(n,e),e=bv(t,e,1),t=_n(t,e,1),e=Xe(),t!==null&&(Oa(t,1,e),rt(t,e));break}}t=t.return}}function _S(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Xe(),e.pingedLanes|=e.suspendedLanes&n,Ae===e&&($e&n)===n&&(Pe===4||Pe===3&&($e&130023424)===$e&&500>ye()-nd?Kn(e,0):td|=n),rt(e,t)}function Uv(e,t){t===0&&(e.mode&1?(t=Ya,Ya<<=1,!(Ya&130023424)&&(Ya=4194304)):t=1);var n=Xe();e=nn(e,t),e!==null&&(Oa(e,t,n),rt(e,n))}function NS(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Uv(e,n)}function jS(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),Uv(e,n)}var Wv;Wv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||tt.current)Je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Je=!1,yS(e,t,n);Je=!!(e.flags&131072)}else Je=!1,fe&&t.flags&1048576&&V0(t,Ko,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Co(e,t),e=t.pendingProps;var i=Vr(t,Ye.current);Dr(t,n),i=Qf(null,t,r,e,i,n);var a=qf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,nt(r)?(a=!0,Qo(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Yf(t),i.updater=Dl,t.stateNode=i,i._reactInternals=t,uc(t,r,e,n),t=dc(null,t,r,!0,a,n)):(t.tag=0,fe&&a&&zf(t),Ve(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Co(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=AS(r),e=Tt(r,e),i){case 0:t=fc(null,t,r,e,n);break e;case 1:t=Xp(null,t,r,e,n);break e;case 11:t=Bp(null,t,r,e,n);break e;case 14:t=Vp(null,t,r,Tt(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tt(r,i),fc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tt(r,i),Xp(e,t,r,i,n);case 3:e:{if(Ov(t),e===null)throw Error(T(387));r=t.pendingProps,a=t.memoizedState,i=a.element,q0(e,t),el(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=qr(Error(T(423)),t),t=Gp(e,t,r,n,i);break e}else if(r!==i){i=qr(Error(T(424)),t),t=Gp(e,t,r,n,i);break e}else for(lt=Pn(t.stateNode.containerInfo.firstChild),st=t,fe=!0,Nt=null,n=ev(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xr(),r===i){t=rn(e,t,n);break e}Ve(e,t,r,n)}t=t.child}return t;case 5:return tv(t),e===null&&oc(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,tc(r,i)?o=null:a!==null&&tc(r,a)&&(t.flags|=32),Cv(e,t),Ve(e,t,o,n),t.child;case 6:return e===null&&oc(t),null;case 13:return Tv(e,t,n);case 4:return Bf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Gr(t,null,r,n):Ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tt(r,i),Bp(e,t,r,i,n);case 7:return Ve(e,t,t.pendingProps,n),t.child;case 8:return Ve(e,t,t.pendingProps.children,n),t.child;case 12:return Ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,re(Zo,r._currentValue),r._currentValue=o,a!==null)if(Mt(a.value,o)){if(a.children===i.children&&!tt.current){t=rn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=Jt(-1,n&-n),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),lc(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(T(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),lc(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Dr(t,n),i=xt(i),r=r(i),t.flags|=1,Ve(e,t,r,n),t.child;case 14:return r=t.type,i=Tt(r,t.pendingProps),i=Tt(r.type,i),Vp(e,t,r,i,n);case 15:return kv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tt(r,i),Co(e,t),t.tag=1,nt(r)?(e=!0,Qo(t)):e=!1,Dr(t,n),Z0(t,r,i),uc(t,r,i,n),dc(null,t,r,!0,e,n);case 19:return Pv(e,t,n);case 22:return Ev(e,t,n)}throw Error(T(156,t.tag))};function Yv(e,t){return v0(e,t)}function LS(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,n,r){return new LS(e,t,n,r)}function od(e){return e=e.prototype,!(!e||!e.isReactComponent)}function AS(e){if(typeof e=="function")return od(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Cf)return 11;if(e===Of)return 14}return 2}function Ln(e,t){var n=e.alternate;return n===null?(n=wt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Po(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")od(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Sr:return Zn(n.children,i,a,t);case Ef:o=8,i|=8;break;case Au:return e=wt(12,n,t,i|2),e.elementType=Au,e.lanes=a,e;case Iu:return e=wt(13,n,t,i),e.elementType=Iu,e.lanes=a,e;case Ru:return e=wt(19,n,t,i),e.elementType=Ru,e.lanes=a,e;case Jh:return Wl(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Kh:o=10;break e;case Zh:o=9;break e;case Cf:o=11;break e;case Of:o=14;break e;case vn:o=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=wt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Zn(e,t,n,r){return e=wt(7,e,r,t),e.lanes=n,e}function Wl(e,t,n,r){return e=wt(22,e,r,t),e.elementType=Jh,e.lanes=n,e.stateNode={isHidden:!1},e}function au(e,t,n){return e=wt(6,e,null,t),e.lanes=n,e}function ou(e,t,n){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function IS(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fs(0),this.expirationTimes=Fs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ld(e,t,n,r,i,a,o,l,s){return e=new IS(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=wt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yf(a),e}function RS(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Bv(e){if(!e)return Mn;e=e._reactInternals;e:{if(dr(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(nt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(nt(n))return Y0(e,n,t)}return t}function Vv(e,t,n,r,i,a,o,l,s){return e=ld(n,r,!0,e,i,a,o,l,s),e.context=Bv(null),n=e.current,r=Xe(),i=jn(n),a=Jt(r,i),a.callback=t??null,_n(n,a,i),e.current.lanes=i,Oa(e,i,r),rt(e,r),e}function Yl(e,t,n,r){var i=t.current,a=Xe(),o=jn(i);return n=Bv(n),t.context===null?t.context=n:t.pendingContext=n,t=Jt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_n(i,t,o),e!==null&&(It(e,i,o,a),bo(e,i,o)),o}function sl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function im(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function sd(e,t){im(e,t),(e=e.alternate)&&im(e,t)}function MS(){return null}var Xv=typeof reportError=="function"?reportError:function(e){console.error(e)};function ud(e){this._internalRoot=e}Bl.prototype.render=ud.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));Yl(e,t,null,null)};Bl.prototype.unmount=ud.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lr(function(){Yl(null,e,null,null)}),t[tn]=null}};function Bl(e){this._internalRoot=e}Bl.prototype.unstable_scheduleHydration=function(e){if(e){var t=k0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wn.length&&t!==0&&t<wn[n].priority;n++);wn.splice(n,0,e),n===0&&C0(e)}};function cd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function am(){}function zS(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=sl(o);a.call(u)}}var o=Vv(t,r,e,0,null,!1,!1,"",am);return e._reactRootContainer=o,e[tn]=o.current,ta(e.nodeType===8?e.parentNode:e),lr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=sl(s);l.call(u)}}var s=ld(e,0,!1,null,null,!1,!1,"",am);return e._reactRootContainer=s,e[tn]=s.current,ta(e.nodeType===8?e.parentNode:e),lr(function(){Yl(t,s,n,r)}),s}function Xl(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var l=i;i=function(){var s=sl(o);l.call(s)}}Yl(t,o,e,i)}else o=zS(n,t,e,i,r);return sl(o)}x0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_i(t.pendingLanes);n!==0&&(_f(t,n|1),rt(t,ye()),!(G&6)&&(Kr=ye()+500,Un()))}break;case 13:lr(function(){var r=nn(e,1);if(r!==null){var i=Xe();It(r,e,1,i)}}),sd(e,1)}};Nf=function(e){if(e.tag===13){var t=nn(e,134217728);if(t!==null){var n=Xe();It(t,e,134217728,n)}sd(e,134217728)}};b0=function(e){if(e.tag===13){var t=jn(e),n=nn(e,t);if(n!==null){var r=Xe();It(n,e,t,r)}sd(e,t)}};k0=function(){return J};E0=function(e,t){var n=J;try{return J=e,t()}finally{J=n}};Bu=function(e,t,n){switch(t){case"input":if($u(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=zl(r);if(!i)throw Error(T(90));t0(r),$u(r,i)}}}break;case"textarea":r0(e,n);break;case"select":t=n.value,t!=null&&Rr(e,!!n.multiple,t,!1)}};c0=rd;f0=lr;var $S={usingClientEntryPoint:!1,Events:[Pa,Er,zl,s0,u0,rd]},ki={findFiberByHostInstance:Bn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},DS={bundleType:ki.bundleType,version:ki.version,rendererPackageName:ki.rendererPackageName,rendererConfig:ki.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=m0(e),e===null?null:e.stateNode},findFiberByHostInstance:ki.findFiberByHostInstance||MS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var to=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!to.isDisabled&&to.supportsFiber)try{Al=to.inject(DS),Yt=to}catch{}}ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$S;ft.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cd(t))throw Error(T(200));return RS(e,t,null,n)};ft.createRoot=function(e,t){if(!cd(e))throw Error(T(299));var n=!1,r="",i=Xv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ld(e,1,!1,null,null,n,!1,r,i),e[tn]=t.current,ta(e.nodeType===8?e.parentNode:e),new ud(t)};ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=m0(t),e=e===null?null:e.stateNode,e};ft.flushSync=function(e){return lr(e)};ft.hydrate=function(e,t,n){if(!Vl(t))throw Error(T(200));return Xl(null,e,t,!0,n)};ft.hydrateRoot=function(e,t,n){if(!cd(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=Xv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Vv(t,null,e,1,n??null,i,!1,a,o),e[tn]=t.current,ta(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Bl(t)};ft.render=function(e,t,n){if(!Vl(t))throw Error(T(200));return Xl(null,e,t,!1,n)};ft.unmountComponentAtNode=function(e){if(!Vl(e))throw Error(T(40));return e._reactRootContainer?(lr(function(){Xl(null,null,e,!1,function(){e._reactRootContainer=null,e[tn]=null})}),!0):!1};ft.unstable_batchedUpdates=rd;ft.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Vl(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Xl(e,t,n,!1,r)};ft.version="18.2.0-next-9e3b772b8-20220608";function Gv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gv)}catch(e){console.error(e)}}Gv(),Vh.exports=ft;var FS=Vh.exports;const HS=cr(FS);var Qv={exports:{}},US="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",WS=US,YS=WS;function qv(){}function Kv(){}Kv.resetWarningCache=qv;var BS=function(){function e(r,i,a,o,l,s){if(s!==YS){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Kv,resetWarningCache:qv};return n.PropTypes=n,n};Qv.exports=BS();var VS=Qv.exports;const R=cr(VS);function XS(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Zv=O,GS=XS(Zv);function om(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function QS(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var qS=!!(typeof window<"u"&&window.document&&window.document.createElement);function KS(e,t,n){if(typeof e!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof t!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(i){return i.displayName||i.name||"Component"}return function(a){if(typeof a!="function")throw new Error("Expected WrappedComponent to be a React component.");var o=[],l;function s(){l=e(o.map(function(c){return c.props})),u.canUseDOM?t(l):n&&(l=n(l))}var u=function(c){QS(f,c);function f(){return c.apply(this,arguments)||this}f.peek=function(){return l},f.rewind=function(){if(f.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var w=l;return l=void 0,o=[],w};var p=f.prototype;return p.UNSAFE_componentWillMount=function(){o.push(this),s()},p.componentDidUpdate=function(){s()},p.componentWillUnmount=function(){var w=o.indexOf(this);o.splice(w,1),s()},p.render=function(){return GS.createElement(a,this.props)},f}(Zv.PureComponent);return om(u,"displayName","SideEffect("+r(a)+")"),om(u,"canUseDOM",qS),u}}var ZS=KS;const JS=cr(ZS);var ex=typeof Element<"u",tx=typeof Map=="function",nx=typeof Set=="function",rx=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function _o(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,i;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!_o(e[r],t[r]))return!1;return!0}var a;if(tx&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;for(a=e.entries();!(r=a.next()).done;)if(!_o(r.value[1],t.get(r.value[0])))return!1;return!0}if(nx&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(rx&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;if(ex&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&e.$$typeof)&&!_o(e[i[r]],t[i[r]]))return!1;return!0}return e!==e&&t!==t}var ix=function(t,n){try{return _o(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const ax=cr(ix);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var lm=Object.getOwnPropertySymbols,ox=Object.prototype.hasOwnProperty,lx=Object.prototype.propertyIsEnumerable;function sx(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function ux(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(a){return t[a]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(a){i[a]=a}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var cx=ux()?Object.assign:function(e,t){for(var n,r=sx(e),i,a=1;a<arguments.length;a++){n=Object(arguments[a]);for(var o in n)ox.call(n,o)&&(r[o]=n[o]);if(lm){i=lm(n);for(var l=0;l<i.length;l++)lx.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r};const fx=cr(cx);var Jn={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},W={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(W).map(function(e){return W[e]});var ue={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},ul={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},ca={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},dx=Object.keys(ul).reduce(function(e,t){return e[ul[t]]=t,e},{}),px=[W.NOSCRIPT,W.SCRIPT,W.STYLE],jt="data-react-helmet",mx=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},hx=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},vx=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gx=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},sm=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},yx=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e},Ec=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},wx=function(t){var n=Hr(t,W.TITLE),r=Hr(t,ca.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var i=Hr(t,ca.DEFAULT_TITLE);return n||i||void 0},Sx=function(t){return Hr(t,ca.ON_CHANGE_CLIENT_STATE)||function(){}},lu=function(t,n){return n.filter(function(r){return typeof r[t]<"u"}).map(function(r){return r[t]}).reduce(function(r,i){return Ke({},r,i)},{})},xx=function(t,n){return n.filter(function(r){return typeof r[W.BASE]<"u"}).map(function(r){return r[W.BASE]}).reverse().reduce(function(r,i){if(!r.length)for(var a=Object.keys(i),o=0;o<a.length;o++){var l=a[o],s=l.toLowerCase();if(t.indexOf(s)!==-1&&i[s])return r.concat(i)}return r},[])},Ei=function(t,n,r){var i={};return r.filter(function(a){return Array.isArray(a[t])?!0:(typeof a[t]<"u"&&Cx("Helmet: "+t+' should be of type "Array". Instead found type "'+mx(a[t])+'"'),!1)}).map(function(a){return a[t]}).reverse().reduce(function(a,o){var l={};o.filter(function(p){for(var g=void 0,w=Object.keys(p),v=0;v<w.length;v++){var x=w[v],m=x.toLowerCase();n.indexOf(m)!==-1&&!(g===ue.REL&&p[g].toLowerCase()==="canonical")&&!(m===ue.REL&&p[m].toLowerCase()==="stylesheet")&&(g=m),n.indexOf(x)!==-1&&(x===ue.INNER_HTML||x===ue.CSS_TEXT||x===ue.ITEM_PROP)&&(g=x)}if(!g||!p[g])return!1;var d=p[g].toLowerCase();return i[g]||(i[g]={}),l[g]||(l[g]={}),i[g][d]?!1:(l[g][d]=!0,!0)}).reverse().forEach(function(p){return a.push(p)});for(var s=Object.keys(l),u=0;u<s.length;u++){var c=s[u],f=fx({},i[c],l[c]);i[c]=f}return a},[]).reverse()},Hr=function(t,n){for(var r=t.length-1;r>=0;r--){var i=t[r];if(i.hasOwnProperty(n))return i[n]}return null},bx=function(t){return{baseTag:xx([ue.HREF,ue.TARGET],t),bodyAttributes:lu(Jn.BODY,t),defer:Hr(t,ca.DEFER),encode:Hr(t,ca.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:lu(Jn.HTML,t),linkTags:Ei(W.LINK,[ue.REL,ue.HREF],t),metaTags:Ei(W.META,[ue.NAME,ue.CHARSET,ue.HTTPEQUIV,ue.PROPERTY,ue.ITEM_PROP],t),noscriptTags:Ei(W.NOSCRIPT,[ue.INNER_HTML],t),onChangeClientState:Sx(t),scriptTags:Ei(W.SCRIPT,[ue.SRC,ue.INNER_HTML],t),styleTags:Ei(W.STYLE,[ue.CSS_TEXT],t),title:wx(t),titleAttributes:lu(Jn.TITLE,t)}},Cc=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){Cc(t)},0)}}(),um=function(t){return clearTimeout(t)},kx=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Cc:global.requestAnimationFrame||Cc,Ex=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||um:global.cancelAnimationFrame||um,Cx=function(t){return console&&typeof console.warn=="function"&&console.warn(t)},Ci=null,Ox=function(t){Ci&&Ex(Ci),t.defer?Ci=kx(function(){cm(t,function(){Ci=null})}):(cm(t),Ci=null)},cm=function(t,n){var r=t.baseTag,i=t.bodyAttributes,a=t.htmlAttributes,o=t.linkTags,l=t.metaTags,s=t.noscriptTags,u=t.onChangeClientState,c=t.scriptTags,f=t.styleTags,p=t.title,g=t.titleAttributes;Oc(W.BODY,i),Oc(W.HTML,a),Tx(p,g);var w={baseTag:gr(W.BASE,r),linkTags:gr(W.LINK,o),metaTags:gr(W.META,l),noscriptTags:gr(W.NOSCRIPT,s),scriptTags:gr(W.SCRIPT,c),styleTags:gr(W.STYLE,f)},v={},x={};Object.keys(w).forEach(function(m){var d=w[m],h=d.newTags,S=d.oldTags;h.length&&(v[m]=h),S.length&&(x[m]=w[m].oldTags)}),n&&n(),u(t,v,x)},Jv=function(t){return Array.isArray(t)?t.join(""):t},Tx=function(t,n){typeof t<"u"&&document.title!==t&&(document.title=Jv(t)),Oc(W.TITLE,n)},Oc=function(t,n){var r=document.getElementsByTagName(t)[0];if(r){for(var i=r.getAttribute(jt),a=i?i.split(","):[],o=[].concat(a),l=Object.keys(n),s=0;s<l.length;s++){var u=l[s],c=n[u]||"";r.getAttribute(u)!==c&&r.setAttribute(u,c),a.indexOf(u)===-1&&a.push(u);var f=o.indexOf(u);f!==-1&&o.splice(f,1)}for(var p=o.length-1;p>=0;p--)r.removeAttribute(o[p]);a.length===o.length?r.removeAttribute(jt):r.getAttribute(jt)!==l.join(",")&&r.setAttribute(jt,l.join(","))}},gr=function(t,n){var r=document.head||document.querySelector(W.HEAD),i=r.querySelectorAll(t+"["+jt+"]"),a=Array.prototype.slice.call(i),o=[],l=void 0;return n&&n.length&&n.forEach(function(s){var u=document.createElement(t);for(var c in s)if(s.hasOwnProperty(c))if(c===ue.INNER_HTML)u.innerHTML=s.innerHTML;else if(c===ue.CSS_TEXT)u.styleSheet?u.styleSheet.cssText=s.cssText:u.appendChild(document.createTextNode(s.cssText));else{var f=typeof s[c]>"u"?"":s[c];u.setAttribute(c,f)}u.setAttribute(jt,"true"),a.some(function(p,g){return l=g,u.isEqualNode(p)})?a.splice(l,1):o.push(u)}),a.forEach(function(s){return s.parentNode.removeChild(s)}),o.forEach(function(s){return r.appendChild(s)}),{oldTags:a,newTags:o}},eg=function(t){return Object.keys(t).reduce(function(n,r){var i=typeof t[r]<"u"?r+'="'+t[r]+'"':""+r;return n?n+" "+i:i},"")},Px=function(t,n,r,i){var a=eg(r),o=Jv(n);return a?"<"+t+" "+jt+'="true" '+a+">"+Ec(o,i)+"</"+t+">":"<"+t+" "+jt+'="true">'+Ec(o,i)+"</"+t+">"},_x=function(t,n,r){return n.reduce(function(i,a){var o=Object.keys(a).filter(function(u){return!(u===ue.INNER_HTML||u===ue.CSS_TEXT)}).reduce(function(u,c){var f=typeof a[c]>"u"?c:c+'="'+Ec(a[c],r)+'"';return u?u+" "+f:f},""),l=a.innerHTML||a.cssText||"",s=px.indexOf(t)===-1;return i+"<"+t+" "+jt+'="true" '+o+(s?"/>":">"+l+"</"+t+">")},"")},tg=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,i){return r[ul[i]||i]=t[i],r},n)},Nx=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,i){return r[dx[i]||i]=t[i],r},n)},jx=function(t,n,r){var i,a=(i={key:n},i[jt]=!0,i),o=tg(r,a);return[we.createElement(W.TITLE,o,n)]},Lx=function(t,n){return n.map(function(r,i){var a,o=(a={key:i},a[jt]=!0,a);return Object.keys(r).forEach(function(l){var s=ul[l]||l;if(s===ue.INNER_HTML||s===ue.CSS_TEXT){var u=r.innerHTML||r.cssText;o.dangerouslySetInnerHTML={__html:u}}else o[s]=r[l]}),we.createElement(t,o)})},Xt=function(t,n,r){switch(t){case W.TITLE:return{toComponent:function(){return jx(t,n.title,n.titleAttributes)},toString:function(){return Px(t,n.title,n.titleAttributes,r)}};case Jn.BODY:case Jn.HTML:return{toComponent:function(){return tg(n)},toString:function(){return eg(n)}};default:return{toComponent:function(){return Lx(t,n)},toString:function(){return _x(t,n,r)}}}},ng=function(t){var n=t.baseTag,r=t.bodyAttributes,i=t.encode,a=t.htmlAttributes,o=t.linkTags,l=t.metaTags,s=t.noscriptTags,u=t.scriptTags,c=t.styleTags,f=t.title,p=f===void 0?"":f,g=t.titleAttributes;return{base:Xt(W.BASE,n,i),bodyAttributes:Xt(Jn.BODY,r,i),htmlAttributes:Xt(Jn.HTML,a,i),link:Xt(W.LINK,o,i),meta:Xt(W.META,l,i),noscript:Xt(W.NOSCRIPT,s,i),script:Xt(W.SCRIPT,u,i),style:Xt(W.STYLE,c,i),title:Xt(W.TITLE,{title:p,titleAttributes:g},i)}},Ax=function(t){var n,r;return r=n=function(i){gx(a,i);function a(){return hx(this,a),yx(this,i.apply(this,arguments))}return a.prototype.shouldComponentUpdate=function(l){return!ax(this.props,l)},a.prototype.mapNestedChildrenToProps=function(l,s){if(!s)return null;switch(l.type){case W.SCRIPT:case W.NOSCRIPT:return{innerHTML:s};case W.STYLE:return{cssText:s}}throw new Error("<"+l.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},a.prototype.flattenArrayTypeChildren=function(l){var s,u=l.child,c=l.arrayTypeChildren,f=l.newChildProps,p=l.nestedChildren;return Ke({},c,(s={},s[u.type]=[].concat(c[u.type]||[],[Ke({},f,this.mapNestedChildrenToProps(u,p))]),s))},a.prototype.mapObjectTypeChildren=function(l){var s,u,c=l.child,f=l.newProps,p=l.newChildProps,g=l.nestedChildren;switch(c.type){case W.TITLE:return Ke({},f,(s={},s[c.type]=g,s.titleAttributes=Ke({},p),s));case W.BODY:return Ke({},f,{bodyAttributes:Ke({},p)});case W.HTML:return Ke({},f,{htmlAttributes:Ke({},p)})}return Ke({},f,(u={},u[c.type]=Ke({},p),u))},a.prototype.mapArrayTypeChildrenToProps=function(l,s){var u=Ke({},s);return Object.keys(l).forEach(function(c){var f;u=Ke({},u,(f={},f[c]=l[c],f))}),u},a.prototype.warnOnInvalidChildren=function(l,s){return!0},a.prototype.mapChildrenToProps=function(l,s){var u=this,c={};return we.Children.forEach(l,function(f){if(!(!f||!f.props)){var p=f.props,g=p.children,w=sm(p,["children"]),v=Nx(w);switch(u.warnOnInvalidChildren(f,g),f.type){case W.LINK:case W.META:case W.NOSCRIPT:case W.SCRIPT:case W.STYLE:c=u.flattenArrayTypeChildren({child:f,arrayTypeChildren:c,newChildProps:v,nestedChildren:g});break;default:s=u.mapObjectTypeChildren({child:f,newProps:s,newChildProps:v,nestedChildren:g});break}}}),s=this.mapArrayTypeChildrenToProps(c,s),s},a.prototype.render=function(){var l=this.props,s=l.children,u=sm(l,["children"]),c=Ke({},u);return s&&(c=this.mapChildrenToProps(s,c)),we.createElement(t,c)},vx(a,null,[{key:"canUseDOM",set:function(l){t.canUseDOM=l}}]),a}(we.Component),n.propTypes={base:R.object,bodyAttributes:R.object,children:R.oneOfType([R.arrayOf(R.node),R.node]),defaultTitle:R.string,defer:R.bool,encodeSpecialCharacters:R.bool,htmlAttributes:R.object,link:R.arrayOf(R.object),meta:R.arrayOf(R.object),noscript:R.arrayOf(R.object),onChangeClientState:R.func,script:R.arrayOf(R.object),style:R.arrayOf(R.object),title:R.string,titleAttributes:R.object,titleTemplate:R.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=t.peek,n.rewind=function(){var i=t.rewind();return i||(i=ng({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),i},r},Ix=function(){return null},Rx=JS(bx,Ox,ng)(Ix),Zr=Ax(Rx);Zr.renderStatic=Zr.rewind;/**
 * @remix-run/router v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fa(){return fa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fa.apply(this,arguments)}var kn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(kn||(kn={}));const fm="popstate";function Mx(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:l}=r.location;return Tc("",{pathname:a,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:cl(i)}return $x(t,n,null,e)}function Ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function fd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function zx(){return Math.random().toString(36).substr(2,8)}function dm(e,t){return{usr:e.state,key:e.key,idx:t}}function Tc(e,t,n,r){return n===void 0&&(n=null),fa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?fi(t):t,{state:n,key:t&&t.key||r||zx()})}function cl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function fi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function $x(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,l=kn.Pop,s=null,u=c();u==null&&(u=0,o.replaceState(fa({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){l=kn.Pop;let x=c(),m=x==null?null:x-u;u=x,s&&s({action:l,location:v.location,delta:m})}function p(x,m){l=kn.Push;let d=Tc(v.location,x,m);n&&n(d,x),u=c()+1;let h=dm(d,u),S=v.createHref(d);try{o.pushState(h,"",S)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(S)}a&&s&&s({action:l,location:v.location,delta:1})}function g(x,m){l=kn.Replace;let d=Tc(v.location,x,m);n&&n(d,x),u=c();let h=dm(d,u),S=v.createHref(d);o.replaceState(h,"",S),a&&s&&s({action:l,location:v.location,delta:0})}function w(x){let m=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof x=="string"?x:cl(x);return Ee(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let v={get action(){return l},get location(){return e(i,o)},listen(x){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(fm,f),s=x,()=>{i.removeEventListener(fm,f),s=null}},createHref(x){return t(i,x)},createURL:w,encodeLocation(x){let m=w(x);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:p,replace:g,go(x){return o.go(x)}};return v}var pm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(pm||(pm={}));function Dx(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?fi(t):t,i=dd(r.pathname||"/",n);if(i==null)return null;let a=rg(e);Fx(a);let o=null;for(let l=0;o==null&&l<a.length;++l)o=Qx(a[l],Zx(i));return o}function rg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,l)=>{let s={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};s.relativePath.startsWith("/")&&(Ee(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=An([r,s.relativePath]),c=n.concat(s);a.children&&a.children.length>0&&(Ee(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),rg(a.children,t,c,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:Xx(u,a.index),routesMeta:c})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))i(a,o);else for(let s of ig(a.path))i(a,o,s)}),t}function ig(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=ig(r.join("/")),l=[];return l.push(...o.map(s=>s===""?a:[a,s].join("/"))),i&&l.push(...o),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function Fx(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Gx(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Hx=/^:\w+$/,Ux=3,Wx=2,Yx=1,Bx=10,Vx=-2,mm=e=>e==="*";function Xx(e,t){let n=e.split("/"),r=n.length;return n.some(mm)&&(r+=Vx),t&&(r+=Wx),n.filter(i=>!mm(i)).reduce((i,a)=>i+(Hx.test(a)?Ux:a===""?Yx:Bx),r)}function Gx(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Qx(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let o=0;o<n.length;++o){let l=n[o],s=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=qx({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!c)return null;Object.assign(r,c.params);let f=l.route;a.push({params:r,pathname:An([i,c.pathname]),pathnameBase:nb(An([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=An([i,c.pathnameBase]))}return a}function qx(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Kx(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let p=l[f]||"";o=a.slice(0,a.length-p.length).replace(/(.)\/+$/,"$1")}return u[c]=Jx(l[f]||"",c),u},{}),pathname:a,pathnameBase:o,pattern:e}}function Kx(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),fd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Zx(e){try{return decodeURI(e)}catch(t){return fd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Jx(e,t){try{return decodeURIComponent(e)}catch(n){return fd(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function dd(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function eb(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?fi(e):e;return{pathname:n?n.startsWith("/")?n:tb(n,t):t,search:rb(r),hash:ib(i)}}function tb(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function su(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ag(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function og(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=fi(e):(i=fa({},e),Ee(!i.pathname||!i.pathname.includes("?"),su("?","pathname","search",i)),Ee(!i.pathname||!i.pathname.includes("#"),su("#","pathname","hash",i)),Ee(!i.search||!i.search.includes("#"),su("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,l;if(r||o==null)l=n;else{let f=t.length-1;if(o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}l=f>=0?t[f]:"/"}let s=eb(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(a||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const An=e=>e.join("/").replace(/\/\/+/g,"/"),nb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),rb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ib=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ab(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const lg=["post","put","patch","delete"];new Set(lg);const ob=["get",...lg];new Set(ob);/**
 * React Router v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fl(){return fl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fl.apply(this,arguments)}const pd=O.createContext(null),sg=O.createContext(null),pr=O.createContext(null),Gl=O.createContext(null),mr=O.createContext({outlet:null,matches:[],isDataRoute:!1}),ug=O.createContext(null);function lb(e,t){let{relative:n}=t===void 0?{}:t;Na()||Ee(!1);let{basename:r,navigator:i}=O.useContext(pr),{hash:a,pathname:o,search:l}=md(e,{relative:n}),s=o;return r!=="/"&&(s=o==="/"?r:An([r,o])),i.createHref({pathname:s,search:l,hash:a})}function Na(){return O.useContext(Gl)!=null}function di(){return Na()||Ee(!1),O.useContext(Gl).location}function cg(e){O.useContext(pr).static||O.useLayoutEffect(e)}function sb(){let{isDataRoute:e}=O.useContext(mr);return e?xb():ub()}function ub(){Na()||Ee(!1);let e=O.useContext(pd),{basename:t,navigator:n}=O.useContext(pr),{matches:r}=O.useContext(mr),{pathname:i}=di(),a=JSON.stringify(ag(r).map(s=>s.pathnameBase)),o=O.useRef(!1);return cg(()=>{o.current=!0}),O.useCallback(function(s,u){if(u===void 0&&(u={}),!o.current)return;if(typeof s=="number"){n.go(s);return}let c=og(s,JSON.parse(a),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:An([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,a,i,e])}function md(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=O.useContext(mr),{pathname:i}=di(),a=JSON.stringify(ag(r).map(o=>o.pathnameBase));return O.useMemo(()=>og(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function cb(e,t){return fb(e,t)}function fb(e,t,n){Na()||Ee(!1);let{navigator:r}=O.useContext(pr),{matches:i}=O.useContext(mr),a=i[i.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let s=di(),u;if(t){var c;let v=typeof t=="string"?fi(t):t;l==="/"||(c=v.pathname)!=null&&c.startsWith(l)||Ee(!1),u=v}else u=s;let f=u.pathname||"/",p=l==="/"?f:f.slice(l.length)||"/",g=Dx(e,{pathname:p}),w=vb(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:An([l,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:An([l,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return t&&w?O.createElement(Gl.Provider,{value:{location:fl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:kn.Pop}},w):w}function db(){let e=Sb(),t=ab(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},t),n?O.createElement("pre",{style:i},n):null,a)}const pb=O.createElement(db,null);class mb extends O.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?O.createElement(mr.Provider,{value:this.props.routeContext},O.createElement(ug.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hb(e){let{routeContext:t,match:n,children:r}=e,i=O.useContext(pd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(mr.Provider,{value:t},r)}function vb(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let a=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let l=a.findIndex(s=>s.route.id&&(o==null?void 0:o[s.route.id]));l>=0||Ee(!1),a=a.slice(0,Math.min(a.length,l+1))}return a.reduceRight((l,s,u)=>{let c=s.route.id?o==null?void 0:o[s.route.id]:null,f=null;n&&(f=s.route.errorElement||pb);let p=t.concat(a.slice(0,u+1)),g=()=>{let w;return c?w=f:s.route.Component?w=O.createElement(s.route.Component,null):s.route.element?w=s.route.element:w=l,O.createElement(hb,{match:s,routeContext:{outlet:l,matches:p,isDataRoute:n!=null},children:w})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?O.createElement(mb,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:g(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):g()},null)}var Pc;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(Pc||(Pc={}));var da;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(da||(da={}));function gb(e){let t=O.useContext(pd);return t||Ee(!1),t}function yb(e){let t=O.useContext(sg);return t||Ee(!1),t}function wb(e){let t=O.useContext(mr);return t||Ee(!1),t}function fg(e){let t=wb(),n=t.matches[t.matches.length-1];return n.route.id||Ee(!1),n.route.id}function Sb(){var e;let t=O.useContext(ug),n=yb(da.UseRouteError),r=fg(da.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function xb(){let{router:e}=gb(Pc.UseNavigateStable),t=fg(da.UseNavigateStable),n=O.useRef(!1);return cg(()=>{n.current=!0}),O.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,fl({fromRouteId:t},a)))},[e,t])}function ji(e){Ee(!1)}function bb(e){let{basename:t="/",children:n=null,location:r,navigationType:i=kn.Pop,navigator:a,static:o=!1}=e;Na()&&Ee(!1);let l=t.replace(/^\/*/,"/"),s=O.useMemo(()=>({basename:l,navigator:a,static:o}),[l,a,o]);typeof r=="string"&&(r=fi(r));let{pathname:u="/",search:c="",hash:f="",state:p=null,key:g="default"}=r,w=O.useMemo(()=>{let v=dd(u,l);return v==null?null:{location:{pathname:v,search:c,hash:f,state:p,key:g},navigationType:i}},[l,u,c,f,p,g,i]);return w==null?null:O.createElement(pr.Provider,{value:s},O.createElement(Gl.Provider,{children:n,value:w}))}function kb(e){let{children:t,location:n}=e;return cb(_c(t),n)}var hm;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(hm||(hm={}));new Promise(()=>{});function _c(e,t){t===void 0&&(t=[]);let n=[];return O.Children.forEach(e,(r,i)=>{if(!O.isValidElement(r))return;let a=[...t,i];if(r.type===O.Fragment){n.push.apply(n,_c(r.props.children,a));return}r.type!==ji&&Ee(!1),!r.props.index||!r.props.children||Ee(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=_c(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dl(){return dl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dl.apply(this,arguments)}function dg(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Eb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Cb(e,t){return e.button===0&&(!t||t==="_self")&&!Eb(e)}const Ob=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Tb=["aria-current","caseSensitive","className","end","style","to","children"],Pb="startTransition",vm=ju[Pb];function _b(e){let{basename:t,children:n,future:r,window:i}=e,a=O.useRef();a.current==null&&(a.current=Mx({window:i,v5Compat:!0}));let o=a.current,[l,s]=O.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=O.useCallback(f=>{u&&vm?vm(()=>s(f)):s(f)},[s,u]);return O.useLayoutEffect(()=>o.listen(c),[o,c]),O.createElement(bb,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}const Nb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pg=O.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:l,target:s,to:u,preventScrollReset:c}=t,f=dg(t,Ob),{basename:p}=O.useContext(pr),g,w=!1;if(typeof u=="string"&&jb.test(u)&&(g=u,Nb))try{let d=new URL(window.location.href),h=u.startsWith("//")?new URL(d.protocol+u):new URL(u),S=dd(h.pathname,p);h.origin===d.origin&&S!=null?u=S+h.search+h.hash:w=!0}catch{}let v=lb(u,{relative:i}),x=Lb(u,{replace:o,state:l,target:s,preventScrollReset:c,relative:i});function m(d){r&&r(d),d.defaultPrevented||x(d)}return O.createElement("a",dl({},f,{href:g||v,onClick:w||a?r:m,ref:n,target:s}))}),pn=O.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:a="",end:o=!1,style:l,to:s,children:u}=t,c=dg(t,Tb),f=md(s,{relative:c.relative}),p=di(),g=O.useContext(sg),{navigator:w}=O.useContext(pr),v=w.encodeLocation?w.encodeLocation(f).pathname:f.pathname,x=p.pathname,m=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(x=x.toLowerCase(),m=m?m.toLowerCase():null,v=v.toLowerCase());let d=x===v||!o&&x.startsWith(v)&&x.charAt(v.length)==="/",h=m!=null&&(m===v||!o&&m.startsWith(v)&&m.charAt(v.length)==="/"),S=d?r:void 0,b;typeof a=="function"?b=a({isActive:d,isPending:h}):b=[a,d?"active":null,h?"pending":null].filter(Boolean).join(" ");let E=typeof l=="function"?l({isActive:d,isPending:h}):l;return O.createElement(pg,dl({},c,{"aria-current":S,className:b,ref:n,style:E,to:s}),typeof u=="function"?u({isActive:d,isPending:h}):u)});var gm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(gm||(gm={}));var ym;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ym||(ym={}));function Lb(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o}=t===void 0?{}:t,l=sb(),s=di(),u=md(e,{relative:o});return O.useCallback(c=>{if(Cb(c,n)){c.preventDefault();let f=r!==void 0?r:cl(s)===cl(u);l(e,{replace:f,state:i,preventScrollReset:a,relative:o})}},[s,l,u,r,i,n,e,a,o])}var mg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},wm=we.createContext&&we.createContext(mg),In=globalThis&&globalThis.__assign||function(){return In=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},In.apply(this,arguments)},Ab=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function hg(e){return e&&e.map(function(t,n){return we.createElement(t.tag,In({key:n},t.attr),hg(t.child))})}function Ql(e){return function(t){return we.createElement(Ib,In({attr:In({},e.attr)},t),hg(e.child))}}function Ib(e){var t=function(n){var r=e.attr,i=e.size,a=e.title,o=Ab(e,["attr","size","title"]),l=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),we.createElement("svg",In({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:s,style:In(In({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&we.createElement("title",null,a),e.children)};return wm!==void 0?we.createElement(wm.Consumer,null,function(n){return t(n)}):t(mg)}function Rb(e){return Ql({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"}}]})(e)}function Mb(e){return Ql({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"}}]})(e)}const zb="/you-ilab/assets/logo-you-i_lab-dc603e10.png",$b="/you-ilab/assets/logo-cns-e87ff889.png",Db="/you-ilab/assets/logo-ipicyt-fcd900a2.png",Fb=()=>{di();const[e,t]=O.useState(!1),[n,r]=O.useState(!1),i=()=>{t(!e)};return O.useEffect(()=>{const a=()=>{r(window.innerWidth<=768)};return a(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[]),y.jsxs("nav",{className:`relative bg-azul-claro ${e?"bg-white":""}`,children:[y.jsx("div",{className:"mx-auto px-8 py-3 md:py-1",children:y.jsxs("div",{className:"flex items-center justify-center",children:[y.jsx("div",{className:"mr-auto",children:y.jsx(pg,{to:"/you-ilab/",className:"contents",children:y.jsx("img",{className:`text-white text-lg font-semibold h-20 ${e?"":"md:ml-0"}`,src:zb,alt:"Logo",style:{maxWidth:"120px"}})})}),n?y.jsx("div",{children:y.jsx("button",{className:"md:hidden ml-2 text-blue-800 font-bold text-2xl",onClick:i,children:e?y.jsx(Rb,{}):y.jsx(Mb,{})})}):y.jsx("div",{className:"hidden md:flex items-center justify-center flex-grow",children:y.jsxs("ul",{className:"flex justify-center text-right",children:[" ",y.jsx("li",{className:"nav-item mr-8",children:y.jsx(pn,{to:"/you-ilab/",className:({isActive:a})=>a?"text-red-500 font-bold text-lg underline":"text-blue-800 font-bold text-lg",activeClassName:"active",children:"Inicio"})}),y.jsx("li",{className:"nav-item mr-8",children:y.jsx(pn,{to:"/you-ilab/about",className:({isActive:a})=>a?"text-red-500 font-bold text-lg underline":"text-blue-800 font-bold text-lg",activeClassName:"active",children:"Nosotros"})}),y.jsx("li",{className:"nav-item mr-8",children:y.jsx(pn,{to:"/you-ilab/projects",className:({isActive:a})=>a?"text-red-500 font-bold text-lg underline":"text-blue-800 font-bold text-lg",activeClassName:"active",children:"Proyectos"})}),y.jsx("li",{className:"nav-item",children:y.jsx(pn,{to:"/you-ilab/contact",className:({isActive:a})=>a?"text-red-500 font-bold text-lg underline":"text-blue-800 font-bold text-lg",activeClassName:"active",children:"Contacto"})})]})})]})}),e&&n&&y.jsx("div",{className:"bg-white py-4 md:py-0 absolute top-16 left-0 right-0 md:relative md:flex md:items-center md:justify-center md:space-x-8",children:y.jsxs("ul",{className:"md:flex justify-center text-center",children:[y.jsx("li",{className:"nav-item mr-8",children:y.jsx(pn,{to:"/you-ilab/",className:({isActive:a})=>a?"text-red-500 font-bold text-lg underline":"text-blue-800 font-bold text-lg",activeClassName:"active",onClick:i,children:"Inicio"})}),y.jsx("li",{className:"nav-item mr-8",children:y.jsx(pn,{to:"/you-ilab/about",className:({isActive:a})=>a?"text-red-500 font-bold text-lg underline":"text-blue-800 font-bold text-lg",activeClassName:"active",onClick:i,children:"Nosotros"})}),y.jsx("li",{className:"nav-item mr-8",children:y.jsx(pn,{to:"/you-ilab/projects",className:({isActive:a})=>a?"text-red-500 font-bold text-lg underline":"text-blue-800 font-bold text-lg",activeClassName:"active",onClick:i,children:"Proyectos"})}),y.jsx("li",{className:"nav-item mr-5",children:y.jsx(pn,{to:"/you-ilab/contact",className:({isActive:a})=>a?"text-red-500 font-bold text-lg underline":"text-blue-800 font-bold text-lg",activeClassName:"active",onClick:i,children:"Contacto"})})]})}),y.jsx("div",{className:"container mx-auto px-4 py-0 md:py-0",children:y.jsx("div",{className:"absolute top-0 right-0 flex items-end justify-end mt-0 mr-0",children:y.jsxs("div",{className:"contents",children:[y.jsx("img",{src:$b,alt:"logo cns",className:"h-20 ml-2 md:block hidden",id:"cns"}),y.jsx("img",{src:Db,alt:"logo ipicyt",className:"h-20 absolute left-0",id:"logo-ipicyt",style:{marginLeft:"-110px"}})]})})})]})};function Sm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Sm(Object(n),!0).forEach(function(r){_e(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pl(e){"@babel/helpers - typeof";return pl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pl(e)}function Hb(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xm(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ub(e,t,n){return t&&xm(e.prototype,t),n&&xm(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hd(e,t){return Yb(e)||Vb(e,t)||vg(e,t)||Gb()}function ja(e){return Wb(e)||Bb(e)||vg(e)||Xb()}function Wb(e){if(Array.isArray(e))return Nc(e)}function Yb(e){if(Array.isArray(e))return e}function Bb(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Vb(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,l;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(s){a=!0,l=s}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw l}}return r}}function vg(e,t){if(e){if(typeof e=="string")return Nc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nc(e,t)}}function Nc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Xb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var bm=function(){},vd={},gg={},yg=null,wg={mark:bm,measure:bm};try{typeof window<"u"&&(vd=window),typeof document<"u"&&(gg=document),typeof MutationObserver<"u"&&(yg=MutationObserver),typeof performance<"u"&&(wg=performance)}catch{}var Qb=vd.navigator||{},km=Qb.userAgent,Em=km===void 0?"":km,zn=vd,se=gg,Cm=yg,no=wg;zn.document;var un=!!se.documentElement&&!!se.head&&typeof se.addEventListener=="function"&&typeof se.createElement=="function",Sg=~Em.indexOf("MSIE")||~Em.indexOf("Trident/"),ro,io,ao,oo,lo,an="___FONT_AWESOME___",jc=16,xg="fa",bg="svg-inline--fa",sr="data-fa-i2svg",Lc="data-fa-pseudo-element",qb="data-fa-pseudo-element-pending",gd="data-prefix",yd="data-icon",Om="fontawesome-i2svg",Kb="async",Zb=["HTML","HEAD","STYLE","SCRIPT"],kg=function(){try{return!0}catch{return!1}}(),oe="classic",ge="sharp",wd=[oe,ge];function La(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[oe]}})}var pa=La((ro={},_e(ro,oe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),_e(ro,ge,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),ro)),ma=La((io={},_e(io,oe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),_e(io,ge,{solid:"fass",regular:"fasr",light:"fasl"}),io)),ha=La((ao={},_e(ao,oe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),_e(ao,ge,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ao)),Jb=La((oo={},_e(oo,oe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),_e(oo,ge,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),oo)),e2=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Eg="fa-layers-text",t2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,n2=La((lo={},_e(lo,oe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),_e(lo,ge,{900:"fass",400:"fasr",300:"fasl"}),lo)),Cg=[1,2,3,4,5,6,7,8,9,10],r2=Cg.concat([11,12,13,14,15,16,17,18,19,20]),i2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Gn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},va=new Set;Object.keys(ma[oe]).map(va.add.bind(va));Object.keys(ma[ge]).map(va.add.bind(va));var a2=[].concat(wd,ja(va),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Gn.GROUP,Gn.SWAP_OPACITY,Gn.PRIMARY,Gn.SECONDARY]).concat(Cg.map(function(e){return"".concat(e,"x")})).concat(r2.map(function(e){return"w-".concat(e)})),Wi=zn.FontAwesomeConfig||{};function o2(e){var t=se.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function l2(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(se&&typeof se.querySelector=="function"){var s2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];s2.forEach(function(e){var t=hd(e,2),n=t[0],r=t[1],i=l2(o2(n));i!=null&&(Wi[r]=i)})}var Og={styleDefault:"solid",familyDefault:"classic",cssPrefix:xg,replacementClass:bg,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Wi.familyPrefix&&(Wi.cssPrefix=Wi.familyPrefix);var Jr=A(A({},Og),Wi);Jr.autoReplaceSvg||(Jr.observeMutations=!1);var M={};Object.keys(Og).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){Jr[e]=n,Yi.forEach(function(r){return r(M)})},get:function(){return Jr[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){Jr.cssPrefix=t,Yi.forEach(function(n){return n(M)})},get:function(){return Jr.cssPrefix}});zn.FontAwesomeConfig=M;var Yi=[];function u2(e){return Yi.push(e),function(){Yi.splice(Yi.indexOf(e),1)}}var mn=jc,Wt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function c2(e){if(!(!e||!un)){var t=se.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=se.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return se.head.insertBefore(t,r),e}}var f2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ga(){for(var e=12,t="";e-- >0;)t+=f2[Math.random()*62|0];return t}function pi(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Sd(e){return e.classList?pi(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Tg(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function d2(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Tg(e[n]),'" ')},"").trim()}function ql(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function xd(e){return e.size!==Wt.size||e.x!==Wt.x||e.y!==Wt.y||e.rotate!==Wt.rotate||e.flipX||e.flipY}function p2(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(a," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:s,path:u}}function m2(e){var t=e.transform,n=e.width,r=n===void 0?jc:n,i=e.height,a=i===void 0?jc:i,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&Sg?s+="translate(".concat(t.x/mn-r/2,"em, ").concat(t.y/mn-a/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/mn,"em), calc(-50% + ").concat(t.y/mn,"em)) "):s+="translate(".concat(t.x/mn,"em, ").concat(t.y/mn,"em) "),s+="scale(".concat(t.size/mn*(t.flipX?-1:1),", ").concat(t.size/mn*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var h2=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Pg(){var e=xg,t=bg,n=M.cssPrefix,r=M.replacementClass,i=h2;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var Tm=!1;function uu(){M.autoAddCss&&!Tm&&(c2(Pg()),Tm=!0)}var v2={mixout:function(){return{dom:{css:Pg,insertCss:uu}}},hooks:function(){return{beforeDOMElementCreation:function(){uu()},beforeI2svg:function(){uu()}}}},on=zn||{};on[an]||(on[an]={});on[an].styles||(on[an].styles={});on[an].hooks||(on[an].hooks={});on[an].shims||(on[an].shims=[]);var Lt=on[an],_g=[],g2=function e(){se.removeEventListener("DOMContentLoaded",e),ml=1,_g.map(function(t){return t()})},ml=!1;un&&(ml=(se.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(se.readyState),ml||se.addEventListener("DOMContentLoaded",g2));function y2(e){un&&(ml?setTimeout(e,0):_g.push(e))}function Aa(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?Tg(e):"<".concat(t," ").concat(d2(r),">").concat(a.map(Aa).join(""),"</").concat(t,">")}function Pm(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var w2=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},cu=function(t,n,r,i){var a=Object.keys(t),o=a.length,l=i!==void 0?w2(n,i):n,s,u,c;for(r===void 0?(s=1,c=t[a[0]]):(s=0,c=r);s<o;s++)u=a[s],c=l(c,t[u],u,t);return c};function S2(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Ac(e){var t=S2(e);return t.length===1?t[0].toString(16):null}function x2(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function _m(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ic(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=_m(t);typeof Lt.hooks.addPack=="function"&&!i?Lt.hooks.addPack(e,_m(t)):Lt.styles[e]=A(A({},Lt.styles[e]||{}),a),e==="fas"&&Ic("fa",t)}var so,uo,co,jr=Lt.styles,b2=Lt.shims,k2=(so={},_e(so,oe,Object.values(ha[oe])),_e(so,ge,Object.values(ha[ge])),so),bd=null,Ng={},jg={},Lg={},Ag={},Ig={},E2=(uo={},_e(uo,oe,Object.keys(pa[oe])),_e(uo,ge,Object.keys(pa[ge])),uo);function C2(e){return~a2.indexOf(e)}function O2(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!C2(i)?i:null}var Rg=function(){var t=function(a){return cu(jr,function(o,l,s){return o[s]=cu(l,a,{}),o},{})};Ng=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var l=a[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){i[s.toString(16)]=o})}return i}),jg=t(function(i,a,o){if(i[o]=o,a[2]){var l=a[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){i[s]=o})}return i}),Ig=t(function(i,a,o){var l=a[2];return i[o]=o,l.forEach(function(s){i[s]=o}),i});var n="far"in jr||M.autoFetchSvg,r=cu(b2,function(i,a){var o=a[0],l=a[1],s=a[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(i.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:l,iconName:s}),i},{names:{},unicodes:{}});Lg=r.names,Ag=r.unicodes,bd=Kl(M.styleDefault,{family:M.familyDefault})};u2(function(e){bd=Kl(e.styleDefault,{family:M.familyDefault})});Rg();function kd(e,t){return(Ng[e]||{})[t]}function T2(e,t){return(jg[e]||{})[t]}function Qn(e,t){return(Ig[e]||{})[t]}function Mg(e){return Lg[e]||{prefix:null,iconName:null}}function P2(e){var t=Ag[e],n=kd("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function $n(){return bd}var Ed=function(){return{prefix:null,iconName:null,rest:[]}};function Kl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?oe:n,i=pa[r][e],a=ma[r][e]||ma[r][i],o=e in Lt.styles?e:null;return a||o||null}var Nm=(co={},_e(co,oe,Object.keys(ha[oe])),_e(co,ge,Object.keys(ha[ge])),co);function Zl(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},_e(t,oe,"".concat(M.cssPrefix,"-").concat(oe)),_e(t,ge,"".concat(M.cssPrefix,"-").concat(ge)),t),o=null,l=oe;(e.includes(a[oe])||e.some(function(u){return Nm[oe].includes(u)}))&&(l=oe),(e.includes(a[ge])||e.some(function(u){return Nm[ge].includes(u)}))&&(l=ge);var s=e.reduce(function(u,c){var f=O2(M.cssPrefix,c);if(jr[c]?(c=k2[l].includes(c)?Jb[l][c]:c,o=c,u.prefix=c):E2[l].indexOf(c)>-1?(o=c,u.prefix=Kl(c,{family:l})):f?u.iconName=f:c!==M.replacementClass&&c!==a[oe]&&c!==a[ge]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var p=o==="fa"?Mg(u.iconName):{},g=Qn(u.prefix,u.iconName);p.prefix&&(o=null),u.iconName=p.iconName||g||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!jr.far&&jr.fas&&!M.autoFetchSvg&&(u.prefix="fas")}return u},Ed());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===ge&&(jr.fass||M.autoFetchSvg)&&(s.prefix="fass",s.iconName=Qn(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=$n()||"fas"),s}var _2=function(){function e(){Hb(this,e),this.definitions={}}return Ub(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=A(A({},n.definitions[l]||{}),o[l]),Ic(l,o[l]);var s=ha[oe][l];s&&Ic(s,o[l]),Rg()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],l=o.prefix,s=o.iconName,u=o.icon,c=u[2];n[l]||(n[l]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[l][f]=u)}),n[l][s]=u}),n}}]),e}(),jm=[],Lr={},Ur={},N2=Object.keys(Ur);function j2(e,t){var n=t.mixoutsTo;return jm=e,Lr={},Object.keys(Ur).forEach(function(r){N2.indexOf(r)===-1&&delete Ur[r]}),jm.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),pl(i[o])==="object"&&Object.keys(i[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=i[o][l]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){Lr[o]||(Lr[o]=[]),Lr[o].push(a[o])})}r.provides&&r.provides(Ur)}),n}function Rc(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Lr[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ur(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Lr[e]||[];i.forEach(function(a){a.apply(null,n)})}function ln(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ur[e]?Ur[e].apply(null,t):void 0}function Mc(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||$n();if(t)return t=Qn(n,t)||t,Pm(zg.definitions,n,t)||Pm(Lt.styles,n,t)}var zg=new _2,L2=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,ur("noAuto")},A2={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return un?(ur("beforeI2svg",t),ln("pseudoElements2svg",t),ln("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,y2(function(){R2({autoReplaceSvgRoot:n}),ur("watch",t)})}},I2={icon:function(t){if(t===null)return null;if(pl(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Qn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Kl(t[0]);return{prefix:r,iconName:Qn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(e2))){var i=Zl(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||$n(),iconName:Qn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=$n();return{prefix:a,iconName:Qn(a,t)||t}}}},pt={noAuto:L2,config:M,dom:A2,parse:I2,library:zg,findIconDefinition:Mc,toHtml:Aa},R2=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?se:n;(Object.keys(Lt.styles).length>0||M.autoFetchSvg)&&un&&M.autoReplaceSvg&&pt.dom.i2svg({node:r})};function Jl(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Aa(r)})}}),Object.defineProperty(e,"node",{get:function(){if(un){var r=se.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function M2(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(xd(o)&&n.found&&!r.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};i.style=ql(A(A({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function z2(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},i),{},{id:o}),children:r}]}]}function Cd(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,l=e.symbol,s=e.title,u=e.maskId,c=e.titleId,f=e.extra,p=e.watchable,g=p===void 0?!1:p,w=r.found?r:n,v=w.width,x=w.height,m=i==="fak",d=[M.replacementClass,a?"".concat(M.cssPrefix,"-").concat(a):""].filter(function(P){return f.classes.indexOf(P)===-1}).filter(function(P){return P!==""||!!P}).concat(f.classes).join(" "),h={children:[],attributes:A(A({},f.attributes),{},{"data-prefix":i,"data-icon":a,class:d,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(x)})},S=m&&!~f.classes.indexOf("fa-fw")?{width:"".concat(v/x*16*.0625,"em")}:{};g&&(h.attributes[sr]=""),s&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(c||ga())},children:[s]}),delete h.attributes.title);var b=A(A({},h),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:l,styles:A(A({},S),f.styles)}),E=r.found&&n.found?ln("generateAbstractMask",b)||{children:[],attributes:{}}:ln("generateAbstractIcon",b)||{children:[],attributes:{}},k=E.children,C=E.attributes;return b.children=k,b.attributes=C,l?z2(b):M2(b)}function Lm(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,u=A(A(A({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});s&&(u[sr]="");var c=A({},o.styles);xd(i)&&(c.transform=m2({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=ql(c);f.length>0&&(u.style=f);var p=[];return p.push({tag:"span",attributes:u,children:[t]}),a&&p.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),p}function $2(e){var t=e.content,n=e.title,r=e.extra,i=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=ql(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var fu=Lt.styles;function zc(e){var t=e[0],n=e[1],r=e.slice(4),i=hd(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(Gn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Gn.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Gn.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var D2={found:!1,width:512,height:512};function F2(e,t){!kg&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function $c(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=$n()),new Promise(function(r,i){if(ln("missingIconAbstract"),n==="fa"){var a=Mg(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&fu[t]&&fu[t][e]){var o=fu[t][e];return r(zc(o))}F2(e,t),r(A(A({},D2),{},{icon:M.showMissingIcons&&e?ln("missingIconAbstract")||{}:{}}))})}var Am=function(){},Dc=M.measurePerformance&&no&&no.mark&&no.measure?no:{mark:Am,measure:Am},Li='FA "6.4.0"',H2=function(t){return Dc.mark("".concat(Li," ").concat(t," begins")),function(){return $g(t)}},$g=function(t){Dc.mark("".concat(Li," ").concat(t," ends")),Dc.measure("".concat(Li," ").concat(t),"".concat(Li," ").concat(t," begins"),"".concat(Li," ").concat(t," ends"))},Od={begin:H2,end:$g},No=function(){};function Im(e){var t=e.getAttribute?e.getAttribute(sr):null;return typeof t=="string"}function U2(e){var t=e.getAttribute?e.getAttribute(gd):null,n=e.getAttribute?e.getAttribute(yd):null;return t&&n}function W2(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function Y2(){if(M.autoReplaceSvg===!0)return jo.replace;var e=jo[M.autoReplaceSvg];return e||jo.replace}function B2(e){return se.createElementNS("http://www.w3.org/2000/svg",e)}function V2(e){return se.createElement(e)}function Dg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?B2:V2:n;if(typeof e=="string")return se.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(Dg(o,{ceFn:r}))}),i}function X2(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var jo={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Dg(i),n)}),n.getAttribute(sr)===null&&M.keepOriginalSource){var r=se.createComment(X2(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Sd(n).indexOf(M.replacementClass))return jo.replace(t);var i=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(l,s){return s===M.replacementClass||s.match(i)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(l){return Aa(l)}).join(`
`);n.setAttribute(sr,""),n.innerHTML=o}};function Rm(e){e()}function Fg(e,t){var n=typeof t=="function"?t:No;if(e.length===0)n();else{var r=Rm;M.mutateApproach===Kb&&(r=zn.requestAnimationFrame||Rm),r(function(){var i=Y2(),a=Od.begin("mutate");e.map(i),a(),n()})}}var Td=!1;function Hg(){Td=!0}function Fc(){Td=!1}var hl=null;function Mm(e){if(Cm&&M.observeMutations){var t=e.treeCallback,n=t===void 0?No:t,r=e.nodeCallback,i=r===void 0?No:r,a=e.pseudoElementsCallback,o=a===void 0?No:a,l=e.observeMutationsRoot,s=l===void 0?se:l;hl=new Cm(function(u){if(!Td){var c=$n();pi(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Im(f.addedNodes[0])&&(M.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&M.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Im(f.target)&&~i2.indexOf(f.attributeName))if(f.attributeName==="class"&&U2(f.target)){var p=Zl(Sd(f.target)),g=p.prefix,w=p.iconName;f.target.setAttribute(gd,g||c),w&&f.target.setAttribute(yd,w)}else W2(f.target)&&i(f.target)})}}),un&&hl.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function G2(){hl&&hl.disconnect()}function Q2(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],l=a.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function q2(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Zl(Sd(e));return i.prefix||(i.prefix=$n()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=T2(i.prefix,e.innerText)||kd(i.prefix,Ac(e.innerText))),!i.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function K2(e){var t=pi(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||ga()):(t["aria-hidden"]="true",t.focusable="false")),t}function Z2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Wt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function zm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=q2(e),r=n.iconName,i=n.prefix,a=n.rest,o=K2(e),l=Rc("parseNodeAttributes",{},e),s=t.styleParser?Q2(e):[];return A({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Wt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:o}},l)}var J2=Lt.styles;function Ug(e){var t=M.autoReplaceSvg==="nest"?zm(e,{styleParser:!1}):zm(e);return~t.extra.classes.indexOf(Eg)?ln("generateLayersText",e,t):ln("generateSvgReplacementMutation",e,t)}var Dn=new Set;wd.map(function(e){Dn.add("fa-".concat(e))});Object.keys(pa[oe]).map(Dn.add.bind(Dn));Object.keys(pa[ge]).map(Dn.add.bind(Dn));Dn=ja(Dn);function $m(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!un)return Promise.resolve();var n=se.documentElement.classList,r=function(f){return n.add("".concat(Om,"-").concat(f))},i=function(f){return n.remove("".concat(Om,"-").concat(f))},a=M.autoFetchSvg?Dn:wd.map(function(c){return"fa-".concat(c)}).concat(Object.keys(J2));a.includes("fa")||a.push("fa");var o=[".".concat(Eg,":not([").concat(sr,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(sr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=pi(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var s=Od.begin("onTree"),u=l.reduce(function(c,f){try{var p=Ug(f);p&&c.push(p)}catch(g){kg||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(p){Fg(p,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),s(),c()})}).catch(function(p){s(),f(p)})})}function e3(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ug(e).then(function(n){n&&Fg([n],t)})}function t3(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Mc(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Mc(i||{})),e(r,A(A({},n),{},{mask:i}))}}var n3=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Wt:r,a=n.symbol,o=a===void 0?!1:a,l=n.mask,s=l===void 0?null:l,u=n.maskId,c=u===void 0?null:u,f=n.title,p=f===void 0?null:f,g=n.titleId,w=g===void 0?null:g,v=n.classes,x=v===void 0?[]:v,m=n.attributes,d=m===void 0?{}:m,h=n.styles,S=h===void 0?{}:h;if(t){var b=t.prefix,E=t.iconName,k=t.icon;return Jl(A({type:"icon"},t),function(){return ur("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(p?d["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(w||ga()):(d["aria-hidden"]="true",d.focusable="false")),Cd({icons:{main:zc(k),mask:s?zc(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:E,transform:A(A({},Wt),i),symbol:o,title:p,maskId:c,titleId:w,extra:{attributes:d,styles:S,classes:x}})})}},r3={mixout:function(){return{icon:t3(n3)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=$m,n.nodeCallback=e3,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?se:r,a=n.callback,o=a===void 0?function(){}:a;return $m(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,l=r.prefix,s=r.transform,u=r.symbol,c=r.mask,f=r.maskId,p=r.extra;return new Promise(function(g,w){Promise.all([$c(i,l),c.iconName?$c(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var x=hd(v,2),m=x[0],d=x[1];g([n,Cd({icons:{main:m,mask:d},prefix:l,iconName:i,transform:s,symbol:u,maskId:f,title:a,titleId:o,extra:p,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,l=n.styles,s=ql(l);s.length>0&&(i.style=s);var u;return xd(o)&&(u=ln("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},i3={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Jl({type:"layer"},function(){ur("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(ja(a)).join(" ")},children:o}]})}}}},a3={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,l=o===void 0?[]:o,s=r.attributes,u=s===void 0?{}:s,c=r.styles,f=c===void 0?{}:c;return Jl({type:"counter",content:n},function(){return ur("beforeDOMElementCreation",{content:n,params:r}),$2({content:n.toString(),title:a,extra:{attributes:u,styles:f,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(ja(l))}})})}}}},o3={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Wt:i,o=r.title,l=o===void 0?null:o,s=r.classes,u=s===void 0?[]:s,c=r.attributes,f=c===void 0?{}:c,p=r.styles,g=p===void 0?{}:p;return Jl({type:"text",content:n},function(){return ur("beforeDOMElementCreation",{content:n,params:r}),Lm({content:n,transform:A(A({},Wt),a),title:l,extra:{attributes:f,styles:g,classes:["".concat(M.cssPrefix,"-layers-text")].concat(ja(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,l=null,s=null;if(Sg){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();l=c.width/u,s=c.height/u}return M.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Lm({content:n.innerHTML,width:l,height:s,transform:a,title:i,extra:o,watchable:!0})])}}},l3=new RegExp('"',"ug"),Dm=[1105920,1112319];function s3(e){var t=e.replace(l3,""),n=x2(t,0),r=n>=Dm[0]&&n<=Dm[1],i=t.length===2?t[0]===t[1]:!1;return{value:Ac(i?t[0]:t),isSecondary:r||i}}function Fm(e,t){var n="".concat(qb).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=pi(e.children),o=a.filter(function(k){return k.getAttribute(Lc)===t})[0],l=zn.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(t2),u=l.getPropertyValue("font-weight"),c=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&c!=="none"&&c!==""){var f=l.getPropertyValue("content"),p=~["Sharp"].indexOf(s[2])?ge:oe,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?ma[p][s[2].toLowerCase()]:n2[p][u],w=s3(f),v=w.value,x=w.isSecondary,m=s[0].startsWith("FontAwesome"),d=kd(g,v),h=d;if(m){var S=P2(v);S.iconName&&S.prefix&&(d=S.iconName,g=S.prefix)}if(d&&!x&&(!o||o.getAttribute(gd)!==g||o.getAttribute(yd)!==h)){e.setAttribute(n,h),o&&e.removeChild(o);var b=Z2(),E=b.extra;E.attributes[Lc]=t,$c(d,g).then(function(k){var C=Cd(A(A({},b),{},{icons:{main:k,mask:Ed()},prefix:g,iconName:h,extra:E,watchable:!0})),P=se.createElement("svg");t==="::before"?e.insertBefore(P,e.firstChild):e.appendChild(P),P.outerHTML=C.map(function(N){return Aa(N)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function u3(e){return Promise.all([Fm(e,"::before"),Fm(e,"::after")])}function c3(e){return e.parentNode!==document.head&&!~Zb.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Lc)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Hm(e){if(un)return new Promise(function(t,n){var r=pi(e.querySelectorAll("*")).filter(c3).map(u3),i=Od.begin("searchPseudoElements");Hg(),Promise.all(r).then(function(){i(),Fc(),t()}).catch(function(){i(),Fc(),n()})})}var f3={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Hm,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?se:r;M.searchPseudoElements&&Hm(i)}}},Um=!1,d3={mixout:function(){return{dom:{unwatch:function(){Hg(),Um=!0}}}},hooks:function(){return{bootstrap:function(){Mm(Rc("mutationObserverCallbacks",{}))},noAuto:function(){G2()},watch:function(n){var r=n.observeMutationsRoot;Um?Fc():Mm(Rc("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Wm=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],l=a.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},p3={mixout:function(){return{parse:{transform:function(n){return Wm(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Wm(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(s," ").concat(u," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:l,inner:f,path:p};return{tag:"g",attributes:A({},g.outer),children:[{tag:"g",attributes:A({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),g.path)}]}]}}}},du={x:0,y:0,width:"100%",height:"100%"};function Ym(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function m3(e){return e.tag==="g"?e.children:[e]}var h3={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Zl(i.split(" ").map(function(o){return o.trim()})):Ed();return a.prefix||(a.prefix=$n()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,l=n.maskId,s=n.transform,u=a.width,c=a.icon,f=o.width,p=o.icon,g=p2({transform:s,containerWidth:f,iconWidth:u}),w={tag:"rect",attributes:A(A({},du),{},{fill:"white"})},v=c.children?{children:c.children.map(Ym)}:{},x={tag:"g",attributes:A({},g.inner),children:[Ym(A({tag:c.tag,attributes:A(A({},c.attributes),g.path)},v))]},m={tag:"g",attributes:A({},g.outer),children:[x]},d="mask-".concat(l||ga()),h="clip-".concat(l||ga()),S={tag:"mask",attributes:A(A({},du),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,m]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:m3(p)},S]};return r.push(b,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(d,")")},du)}),{children:r,attributes:i}}}},v3={provides:function(t){var n=!1;zn.matchMedia&&(n=zn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},a),{},{attributeName:"opacity"}),l={tag:"circle",attributes:A(A({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:A(A({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:A(A({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},g3={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},y3=[v2,r3,i3,a3,o3,f3,d3,p3,h3,v3,g3];j2(y3,{mixoutsTo:pt});pt.noAuto;pt.config;pt.library;pt.dom;var Hc=pt.parse;pt.findIconDefinition;pt.toHtml;var w3=pt.icon;pt.layer;pt.text;pt.counter;function Bm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function En(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Bm(Object(n),!0).forEach(function(r){Ar(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vl(e){"@babel/helpers - typeof";return vl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vl(e)}function Ar(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S3(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function x3(e,t){if(e==null)return{};var n=S3(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Uc(e){return b3(e)||k3(e)||E3(e)||C3()}function b3(e){if(Array.isArray(e))return Wc(e)}function k3(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function E3(e,t){if(e){if(typeof e=="string")return Wc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wc(e,t)}}function Wc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O3(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,p=e.fixedWidth,g=e.inverse,w=e.border,v=e.listItem,x=e.flip,m=e.size,d=e.rotation,h=e.pull,S=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":p,"fa-inverse":g,"fa-border":w,"fa-li":v,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},Ar(t,"fa-".concat(m),typeof m<"u"&&m!==null),Ar(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),Ar(t,"fa-pull-".concat(h),typeof h<"u"&&h!==null),Ar(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(S).map(function(b){return S[b]?b:null}).filter(function(b){return b})}function T3(e){return e=e-0,e===e}function Wg(e){return T3(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var P3=["style"];function _3(e){return e.charAt(0).toUpperCase()+e.slice(1)}function N3(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Wg(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[_3(i)]=a:t[i]=a,t},{})}function Yg(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return Yg(e,s)}),i=Object.keys(t.attributes||{}).reduce(function(s,u){var c=t.attributes[u];switch(u){case"class":s.attrs.className=c,delete t.attributes.class;break;case"style":s.attrs.style=N3(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=c:s.attrs[Wg(u)]=c}return s},{attrs:{}}),a=n.style,o=a===void 0?{}:a,l=x3(n,P3);return i.attrs.style=En(En({},i.attrs.style),o),e.apply(void 0,[t.tag,En(En({},i.attrs),l)].concat(Uc(r)))}var Bg=!1;try{Bg=!0}catch{}function j3(){if(!Bg&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Vm(e){if(e&&vl(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Hc.icon)return Hc.icon(e);if(e===null)return null;if(e&&vl(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function pu(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ar({},e,t):{}}var _t=we.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,a=e.className,o=e.title,l=e.titleId,s=e.maskId,u=Vm(n),c=pu("classes",[].concat(Uc(O3(e)),Uc(a.split(" ")))),f=pu("transform",typeof e.transform=="string"?Hc.transform(e.transform):e.transform),p=pu("mask",Vm(r)),g=w3(u,En(En(En(En({},c),f),p),{},{symbol:i,title:o,titleId:l,maskId:s}));if(!g)return j3("Could not find icon",u),null;var w=g.abstract,v={ref:t};return Object.keys(e).forEach(function(x){_t.defaultProps.hasOwnProperty(x)||(v[x]=e[x])}),L3(w[0],v)});_t.displayName="FontAwesomeIcon";_t.propTypes={beat:R.bool,border:R.bool,beatFade:R.bool,bounce:R.bool,className:R.string,fade:R.bool,flash:R.bool,mask:R.oneOfType([R.object,R.array,R.string]),maskId:R.string,fixedWidth:R.bool,inverse:R.bool,flip:R.oneOf([!0,!1,"horizontal","vertical","both"]),icon:R.oneOfType([R.object,R.array,R.string]),listItem:R.bool,pull:R.oneOf(["right","left"]),pulse:R.bool,rotation:R.oneOf([0,90,180,270]),shake:R.bool,size:R.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:R.bool,spinPulse:R.bool,spinReverse:R.bool,symbol:R.oneOfType([R.bool,R.string]),title:R.string,titleId:R.string,transform:R.oneOfType([R.string,R.object]),swapOpacity:R.bool};_t.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var L3=Yg.bind(null,we.createElement),A3={prefix:"fas",iconName:"envelope-open",icon:[512,512,[62135],"f2b6","M64 208.1L256 65.9 448 208.1v47.4L289.5 373c-9.7 7.2-21.4 11-33.5 11s-23.8-3.9-33.5-11L64 255.5V208.1zM256 0c-12.1 0-23.8 3.9-33.5 11L25.9 156.7C9.6 168.8 0 187.8 0 208.1V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V208.1c0-20.3-9.6-39.4-25.9-51.4L289.5 11C279.8 3.9 268.1 0 256 0z"]},Xm={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},I3={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},R3={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},M3={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},z3={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};const $3=()=>y.jsx("footer",{id:"sticky-footer",className:"flex-shrink-0 py-8 bg-dark-900 text-white bg-azul-footer h-full w-full",children:y.jsxs("div",{className:"container mx-auto text-center mt-10",children:[y.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 mx-5",children:[y.jsxs("div",{className:"mt-5 lg:ml-40 md:ml-0",children:[y.jsx("h3",{className:"text-lg font-bold mb-5 title-footer",children:"YOUTH INNOVATION LABORATORY"}),y.jsx("p",{className:"mb-5",children:"El You-i Lab está alojado en el Centro Nacional de Supercómputo (CNS) de San Luis Potosí, que es una instalación de investigación HPC de vanguardia que se centra en el desarrollo de proyectos industriales a gran escala. El CNS que está gestionado por el Instituto Potosino de Investigación Científica y Tecnológica (IPICYT)."})]}),y.jsxs("div",{className:"mt-5",children:[y.jsx("h3",{className:"text-lg font-bold mb-5 title-footer",children:"USEFUL LINKS"}),y.jsxs("ul",{className:"navbar-nav",children:[y.jsx("li",{className:"nav-item me-3 mb-4",children:y.jsx("a",{className:"nav-link text-white hover:text-gray-300",href:"https://conahcyt.mx/",target:"_blank",rel:"noopener noreferrer",children:"CONACYT"})}),y.jsx("li",{className:"nav-item me-3 mb-4",children:y.jsx("a",{className:"nav-link text-white hover:text-gray-300",href:"https://www.ipicyt.edu.mx/",target:"_blank",rel:"noopener noreferrer",children:"IPICYT"})}),y.jsx("li",{className:"nav-item me-3 mb-4",children:y.jsx("a",{className:"nav-link text-white hover:text-gray-300",href:"https://cns.ipicyt.edu.mx/",target:"_blank",rel:"noopener noreferrer",children:"CNS"})}),y.jsx("li",{className:"nav-item me-3 mb-4",children:y.jsx("a",{className:"nav-link text-white hover:text-gray-300",href:"https://bit.ly/division-biologia-molecular",target:"_blank",rel:"noopener noreferrer",children:"DBM"})})]})]}),y.jsxs("div",{className:"mt-5 mb-14 lg:text-left md:text-center lg:mr-52 sm:mr-0",children:[y.jsx("h3",{className:"text-lg font-bold mb-5 title-footer ml-12",children:"CONTACTO"}),y.jsxs("p",{children:[y.jsx(_t,{icon:I3}),y.jsx("span",{className:"ml-2",children:"Camino a la Presa de San José 2055, Lomas 4a Sección, 78216 San Luis Potosí, S.L.P., México."})]}),y.jsxs("p",{children:[y.jsx(_t,{icon:Xm}),y.jsx("span",{children:" +52 444 834 2000"})]}),y.jsxs("p",{className:"mb-10",children:[y.jsx(_t,{icon:A3}),y.jsx("span",{className:"ml-2",children:" you-i.lab@ipicyt.edu.mx"})]}),y.jsx("div",{className:"lg:text-left md:text-center",children:y.jsxs("div",{className:"footer-widget opening-hour-widget",children:[y.jsx("h4",{className:"title-footer text-lg font-bold mb-5 ml-12",children:"Redes"}),y.jsxs("div",{className:"social-links",children:[y.jsx("span",{className:"icon-wrapper rounded-full inline-grid border-white border",children:y.jsx("a",{href:"https://www.facebook.com/",children:y.jsx(_t,{icon:M3,size:"2x",className:"icon p-2"})})}),y.jsx("span",{className:"icon-wrapper rounded-full inline-grid border-white border",children:y.jsx("a",{href:"https://twitter.com/",children:y.jsx(_t,{icon:z3,size:"2x",className:"icon p-2"})})}),y.jsx("span",{className:"icon-wrapper rounded-full inline-grid border-white border",children:y.jsx("a",{href:"https://www.linkedin.com/",children:y.jsx(_t,{icon:R3,size:"2x",className:"icon p-2"})})}),y.jsx("span",{className:"icon-wrapper rounded-full inline-grid border-white border md:mt-3 ",children:y.jsx("a",{href:"tel:+524448342000",children:y.jsx(_t,{icon:Xm,size:"2x",className:"icon p-2"})})})]})]})})]})]}),y.jsx("hr",{}),y.jsxs("div",{className:"flex flex-col items-center mt-10",children:[y.jsx("p",{className:"text-center text-md mb-4",children:"© 2023 You i Lab. All rights reserved."}),y.jsxs("p",{className:"text-center text-md",children:["Powered by ",y.jsx("b",{children:"You I Lab"})," - 2023"]})]})]})});var et=function(){return et=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},et.apply(this,arguments)};function gl(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}function D3(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var ae="-ms-",Bi="-moz-",Z="-webkit-",Vg="comm",es="rule",Pd="decl",F3="@import",Xg="@keyframes",H3="@layer",U3=Math.abs,_d=String.fromCharCode,Yc=Object.assign;function W3(e,t){return Le(e,0)^45?(((t<<2^Le(e,0))<<2^Le(e,1))<<2^Le(e,2))<<2^Le(e,3):0}function Gg(e){return e.trim()}function Qt(e,t){return(e=t.exec(e))?e[0]:e}function Y(e,t,n){return e.replace(t,n)}function Lo(e,t){return e.indexOf(t)}function Le(e,t){return e.charCodeAt(t)|0}function ei(e,t,n){return e.slice(t,n)}function Dt(e){return e.length}function Qg(e){return e.length}function Ai(e,t){return t.push(e),e}function Y3(e,t){return e.map(t).join("")}function Gm(e,t){return e.filter(function(n){return!Qt(n,t)})}var ts=1,ti=1,qg=0,kt=0,xe=0,mi="";function ns(e,t,n,r,i,a,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:ts,column:ti,length:o,return:"",siblings:l}}function hn(e,t){return Yc(ns("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function yr(e){for(;e.root;)e=hn(e.root,{children:[e]});Ai(e,e.siblings)}function B3(){return xe}function V3(){return xe=kt>0?Le(mi,--kt):0,ti--,xe===10&&(ti=1,ts--),xe}function Rt(){return xe=kt<qg?Le(mi,kt++):0,ti++,xe===10&&(ti=1,ts++),xe}function er(){return Le(mi,kt)}function Ao(){return kt}function rs(e,t){return ei(mi,e,t)}function Bc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function X3(e){return ts=ti=1,qg=Dt(mi=e),kt=0,[]}function G3(e){return mi="",e}function mu(e){return Gg(rs(kt-1,Vc(e===91?e+2:e===40?e+1:e)))}function Q3(e){for(;(xe=er())&&xe<33;)Rt();return Bc(e)>2||Bc(xe)>3?"":" "}function q3(e,t){for(;--t&&Rt()&&!(xe<48||xe>102||xe>57&&xe<65||xe>70&&xe<97););return rs(e,Ao()+(t<6&&er()==32&&Rt()==32))}function Vc(e){for(;Rt();)switch(xe){case e:return kt;case 34:case 39:e!==34&&e!==39&&Vc(xe);break;case 40:e===41&&Vc(e);break;case 92:Rt();break}return kt}function K3(e,t){for(;Rt()&&e+xe!==47+10;)if(e+xe===42+42&&er()===47)break;return"/*"+rs(t,kt-1)+"*"+_d(e===47?e:Rt())}function Z3(e){for(;!Bc(er());)Rt();return rs(e,kt)}function J3(e){return G3(Io("",null,null,null,[""],e=X3(e),0,[0],e))}function Io(e,t,n,r,i,a,o,l,s){for(var u=0,c=0,f=o,p=0,g=0,w=0,v=1,x=1,m=1,d=0,h="",S=i,b=a,E=r,k=h;x;)switch(w=d,d=Rt()){case 40:if(w!=108&&Le(k,f-1)==58){Lo(k+=Y(mu(d),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:k+=mu(d);break;case 9:case 10:case 13:case 32:k+=Q3(w);break;case 92:k+=q3(Ao()-1,7);continue;case 47:switch(er()){case 42:case 47:Ai(ek(K3(Rt(),Ao()),t,n,s),s);break;default:k+="/"}break;case 123*v:l[u++]=Dt(k)*m;case 125*v:case 59:case 0:switch(d){case 0:case 125:x=0;case 59+c:m==-1&&(k=Y(k,/\f/g,"")),g>0&&Dt(k)-f&&Ai(g>32?qm(k+";",r,n,f-1,s):qm(Y(k," ","")+";",r,n,f-2,s),s);break;case 59:k+=";";default:if(Ai(E=Qm(k,t,n,u,c,i,l,h,S=[],b=[],f,a),a),d===123)if(c===0)Io(k,t,E,E,S,a,f,l,b);else switch(p===99&&Le(k,3)===110?100:p){case 100:case 108:case 109:case 115:Io(e,E,E,r&&Ai(Qm(e,E,E,0,0,i,l,h,i,S=[],f,b),b),i,b,f,l,r?S:b);break;default:Io(k,E,E,E,[""],b,0,l,b)}}u=c=g=0,v=m=1,h=k="",f=o;break;case 58:f=1+Dt(k),g=w;default:if(v<1){if(d==123)--v;else if(d==125&&v++==0&&V3()==125)continue}switch(k+=_d(d),d*v){case 38:m=c>0?1:(k+="\f",-1);break;case 44:l[u++]=(Dt(k)-1)*m,m=1;break;case 64:er()===45&&(k+=mu(Rt())),p=er(),c=f=Dt(h=k+=Z3(Ao())),d++;break;case 45:w===45&&Dt(k)==2&&(v=0)}}return a}function Qm(e,t,n,r,i,a,o,l,s,u,c,f){for(var p=i-1,g=i===0?a:[""],w=Qg(g),v=0,x=0,m=0;v<r;++v)for(var d=0,h=ei(e,p+1,p=U3(x=o[v])),S=e;d<w;++d)(S=Gg(x>0?g[d]+" "+h:Y(h,/&\f/g,g[d])))&&(s[m++]=S);return ns(e,t,n,i===0?es:l,s,u,c,f)}function ek(e,t,n,r){return ns(e,t,n,Vg,_d(B3()),ei(e,2,-2),0,r)}function qm(e,t,n,r,i){return ns(e,t,n,Pd,ei(e,0,r),ei(e,r+1,-1),r,i)}function Kg(e,t,n){switch(W3(e,t)){case 5103:return Z+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Z+e+e;case 4789:return Bi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Z+e+Bi+e+ae+e+e;case 5936:switch(Le(e,t+11)){case 114:return Z+e+ae+Y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Z+e+ae+Y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Z+e+ae+Y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Z+e+ae+e+e;case 6165:return Z+e+ae+"flex-"+e+e;case 5187:return Z+e+Y(e,/(\w+).+(:[^]+)/,Z+"box-$1$2"+ae+"flex-$1$2")+e;case 5443:return Z+e+ae+"flex-item-"+Y(e,/flex-|-self/g,"")+(Qt(e,/flex-|baseline/)?"":ae+"grid-row-"+Y(e,/flex-|-self/g,""))+e;case 4675:return Z+e+ae+"flex-line-pack"+Y(e,/align-content|flex-|-self/g,"")+e;case 5548:return Z+e+ae+Y(e,"shrink","negative")+e;case 5292:return Z+e+ae+Y(e,"basis","preferred-size")+e;case 6060:return Z+"box-"+Y(e,"-grow","")+Z+e+ae+Y(e,"grow","positive")+e;case 4554:return Z+Y(e,/([^-])(transform)/g,"$1"+Z+"$2")+e;case 6187:return Y(Y(Y(e,/(zoom-|grab)/,Z+"$1"),/(image-set)/,Z+"$1"),e,"")+e;case 5495:case 3959:return Y(e,/(image-set\([^]*)/,Z+"$1$`$1");case 4968:return Y(Y(e,/(.+:)(flex-)?(.*)/,Z+"box-pack:$3"+ae+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Z+e+e;case 4200:if(!Qt(e,/flex-|baseline/))return ae+"grid-column-align"+ei(e,t)+e;break;case 2592:case 3360:return ae+Y(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Qt(r.props,/grid-\w+-end/)})?~Lo(e+(n=n[t].value),"span")?e:ae+Y(e,"-start","")+e+ae+"grid-row-span:"+(~Lo(n,"span")?Qt(n,/\d+/):+Qt(n,/\d+/)-+Qt(e,/\d+/))+";":ae+Y(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Qt(r.props,/grid-\w+-start/)})?e:ae+Y(Y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Y(e,/(.+)-inline(.+)/,Z+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dt(e)-1-t>6)switch(Le(e,t+1)){case 109:if(Le(e,t+4)!==45)break;case 102:return Y(e,/(.+:)(.+)-([^]+)/,"$1"+Z+"$2-$3$1"+Bi+(Le(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Lo(e,"stretch")?Kg(Y(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,a,o,l,s,u){return ae+i+":"+a+u+(o?ae+i+"-span:"+(l?s:+s-+a)+u:"")+e});case 4949:if(Le(e,t+6)===121)return Y(e,":",":"+Z)+e;break;case 6444:switch(Le(e,Le(e,14)===45?18:11)){case 120:return Y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Z+(Le(e,14)===45?"inline-":"")+"box$3$1"+Z+"$2$3$1"+ae+"$2box$3")+e;case 100:return Y(e,":",":"+ae)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Y(e,"scroll-","scroll-snap-")+e}return e}function yl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function tk(e,t,n,r){switch(e.type){case H3:if(e.children.length)break;case F3:case Pd:return e.return=e.return||e.value;case Vg:return"";case Xg:return e.return=e.value+"{"+yl(e.children,r)+"}";case es:if(!Dt(e.value=e.props.join(",")))return""}return Dt(n=yl(e.children,r))?e.return=e.value+"{"+n+"}":""}function nk(e){var t=Qg(e);return function(n,r,i,a){for(var o="",l=0;l<t;l++)o+=e[l](n,r,i,a)||"";return o}}function rk(e){return function(t){t.root||(t=t.return)&&e(t)}}function ik(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Pd:e.return=Kg(e.value,e.length,n);return;case Xg:return yl([hn(e,{value:Y(e.value,"@","@"+Z)})],r);case es:if(e.length)return Y3(n=e.props,function(i){switch(Qt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":yr(hn(e,{props:[Y(i,/:(read-\w+)/,":"+Bi+"$1")]})),yr(hn(e,{props:[i]})),Yc(e,{props:Gm(n,r)});break;case"::placeholder":yr(hn(e,{props:[Y(i,/:(plac\w+)/,":"+Z+"input-$1")]})),yr(hn(e,{props:[Y(i,/:(plac\w+)/,":"+Bi+"$1")]})),yr(hn(e,{props:[Y(i,/:(plac\w+)/,ae+"input-$1")]})),yr(hn(e,{props:[i]})),Yc(e,{props:Gm(n,r)});break}return""})}}var Zg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ni=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Nd=typeof window<"u"&&"HTMLElement"in window,ak=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),is=Object.freeze([]),ri=Object.freeze({});function ok(e,t,n){return n===void 0&&(n=ri),e.theme!==n.theme&&e.theme||t||n.theme}var Jg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),lk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,sk=/(^-|-$)/g;function Km(e){return e.replace(lk,"-").replace(sk,"")}var uk=/(a)(d)/gi,Zm=function(e){return String.fromCharCode(e+(e>25?39:97))};function Xc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Zm(t%52)+n;return(Zm(t%52)+n).replace(uk,"$1-$2")}var hu,Ir=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ey=function(e){return Ir(5381,e)};function ck(e){return Xc(ey(e)>>>0)}function fk(e){return e.displayName||e.name||"Component"}function vu(e){return typeof e=="string"&&!0}var ty=typeof Symbol=="function"&&Symbol.for,ny=ty?Symbol.for("react.memo"):60115,dk=ty?Symbol.for("react.forward_ref"):60112,pk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},mk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ry={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},hk=((hu={})[dk]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},hu[ny]=ry,hu);function Jm(e){return("type"in(t=e)&&t.type.$$typeof)===ny?ry:"$$typeof"in e?hk[e.$$typeof]:pk;var t}var vk=Object.defineProperty,gk=Object.getOwnPropertyNames,eh=Object.getOwnPropertySymbols,yk=Object.getOwnPropertyDescriptor,wk=Object.getPrototypeOf,th=Object.prototype;function iy(e,t,n){if(typeof t!="string"){if(th){var r=wk(t);r&&r!==th&&iy(e,r,n)}var i=gk(t);eh&&(i=i.concat(eh(t)));for(var a=Jm(e),o=Jm(t),l=0;l<i.length;++l){var s=i[l];if(!(s in mk||n&&n[s]||o&&s in o||a&&s in a)){var u=yk(t,s);try{vk(e,s,u)}catch{}}}}return e}function ii(e){return typeof e=="function"}function jd(e){return typeof e=="object"&&"styledComponentId"in e}function qn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function nh(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function ya(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Gc(e,t,n){if(n===void 0&&(n=!1),!n&&!ya(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Gc(e[r],t[r]);else if(ya(t))for(var r in t)e[r]=Gc(e[r],t[r]);return e}function Ld(e,t){Object.defineProperty(e,"toString",{value:t})}function Ia(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Sk=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,a=i;t>=a;)if((a<<=1)<0)throw Ia(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var o=i;o<a;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(t+1),s=(o=0,n.length);o<s;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var a=r;a<i;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),a=i+r,o=i;o<a;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),Ro=new Map,wl=new Map,gu=1,fo=function(e){if(Ro.has(e))return Ro.get(e);for(;wl.has(gu);)gu++;var t=gu++;return Ro.set(e,t),wl.set(t,e),t},xk=function(e,t){Ro.set(e,t),wl.set(t,e)},bk="style[".concat(ni,"][").concat("data-styled-version",'="').concat("6.0.3",'"]'),kk=new RegExp("^".concat(ni,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ek=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},Ck=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],a=0,o=r.length;a<o;a++){var l=r[a].trim();if(l){var s=l.match(kk);if(s){var u=0|parseInt(s[1],10),c=s[2];u!==0&&(xk(c,u),Ek(e,c,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}};function Ok(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ay=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(ni,"]")));return s[s.length-1]}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(ni,"active"),r.setAttribute("data-styled-version","6.0.3");var o=Ok();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},Tk=function(){function e(t){this.element=ay(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,a=r.length;i<a;i++){var o=r[i];if(o.ownerNode===n)return o}throw Ia(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Pk=function(){function e(t){this.element=ay(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),_k=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),rh=Nd,Nk={isServer:!Nd,useCSSOMInjection:!ak},oy=function(){function e(t,n,r){t===void 0&&(t=ri),n===void 0&&(n={});var i=this;this.options=et(et({},Nk),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Nd&&rh&&(rh=!1,function(a){for(var o=document.querySelectorAll(bk),l=0,s=o.length;l<s;l++){var u=o[l];u&&u.getAttribute(ni)!=="active"&&(Ck(a,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Ld(this,function(){return function(a){for(var o=a.getTag(),l=o.length,s="",u=function(f){var p=function(m){return wl.get(m)}(f);if(p===void 0)return"continue";var g=a.names.get(p),w=o.getGroup(f);if(g===void 0||w.length===0)return"continue";var v="".concat(ni,".g").concat(f,'[id="').concat(p,'"]'),x="";g!==void 0&&g.forEach(function(m){m.length>0&&(x+="".concat(m,","))}),s+="".concat(w).concat(v,'{content:"').concat(x,'"}').concat(`/*!sc*/
`)},c=0;c<l;c++)u(c);return s}(i)})}return e.registerId=function(t){return fo(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(et(et({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new _k(i):r?new Tk(i):new Pk(i)}(this.options),new Sk(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(fo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(fo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(fo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),jk=/&/g,Lk=/^\s*\/\/.*$/gm;function ly(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=ly(n.children,t)),n})}function Ak(e){var t,n,r,i=e===void 0?ri:e,a=i.options,o=a===void 0?ri:a,l=i.plugins,s=l===void 0?is:l,u=function(p,g,w){return w===n||w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):p},c=s.slice();c.push(function(p){p.type===es&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(jk,n).replace(r,u))}),o.prefix&&c.push(ik),c.push(tk);var f=function(p,g,w,v){g===void 0&&(g=""),w===void 0&&(w=""),v===void 0&&(v="&"),t=v,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var x=p.replace(Lk,""),m=J3(w||g?"".concat(w," ").concat(g," { ").concat(x," }"):x);o.namespace&&(m=ly(m,o.namespace));var d=[];return yl(m,nk(c.concat(rk(function(h){return d.push(h)})))),d};return f.hash=s.length?s.reduce(function(p,g){return g.name||Ia(15),Ir(p,g.name)},5381).toString():"",f}var Ik=new oy,Qc=Ak(),sy=we.createContext({shouldForwardProp:void 0,styleSheet:Ik,stylis:Qc});sy.Consumer;we.createContext(void 0);function ih(){return O.useContext(sy)}var Rk=function(){function e(t,n){var r=this;this.inject=function(i,a){a===void 0&&(a=Qc);var o=r.name+a.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,a(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Ld(this,function(){throw Ia(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Qc),this.name+t.hash},e}(),Mk=function(e){return e>="A"&&e<="Z"};function ah(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Mk(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var uy=function(e){return e==null||e===!1||e===""},cy=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!uy(a)&&(Array.isArray(a)&&a.isCss||ii(a)?r.push("".concat(ah(i),":"),a,";"):ya(a)?r.push.apply(r,gl(gl(["".concat(i," {")],cy(a),!1),["}"],!1)):r.push("".concat(ah(i),": ").concat((t=i,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Zg||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function tr(e,t,n,r){if(uy(e))return[];if(jd(e))return[".".concat(e.styledComponentId)];if(ii(e)){if(!ii(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return tr(i,t,n,r)}var a;return e instanceof Rk?n?(e.inject(n,r),[e.getName(r)]):[e]:ya(e)?cy(e):Array.isArray(e)?Array.prototype.concat.apply(is,e.map(function(o){return tr(o,t,n,r)})):[e.toString()]}function zk(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ii(n)&&!jd(n))return!1}return!0}var $k=ey("6.0.3"),Dk=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&zk(t),this.componentId=n,this.baseHash=Ir($k,n),this.baseStyle=r,oy.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=qn(i,this.staticRulesId);else{var a=nh(tr(this.rules,t,n,r)),o=Xc(Ir(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(a,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}i=qn(i,o),this.staticRulesId=o}else{for(var s=Ir(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var p=nh(tr(f,t,n,r));s=Ir(s,p),u+=p}}if(u){var g=Xc(s>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=qn(i,g)}}return i},e}(),fy=we.createContext(void 0);fy.Consumer;var yu={};function Fk(e,t,n){var r=jd(e),i=e,a=!vu(e),o=t.attrs,l=o===void 0?is:o,s=t.componentId,u=s===void 0?function(h,S){var b=typeof h!="string"?"sc":Km(h);yu[b]=(yu[b]||0)+1;var E="".concat(b,"-").concat(ck("6.0.3"+b+yu[b]));return S?"".concat(S,"-").concat(E):E}(t.displayName,t.parentComponentId):s,c=t.displayName;c===void 0&&function(h){return vu(h)?"styled.".concat(h):"Styled(".concat(fk(h),")")}(e);var f=t.displayName&&t.componentId?"".concat(Km(t.displayName),"-").concat(t.componentId):t.componentId||u,p=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;g=function(h,S){return w(h,S)&&v(h,S)}}else g=w}var x=new Dk(n,f,r?i.componentStyle:void 0);function m(h,S){return function(b,E,k){var C=b.attrs,P=b.componentStyle,N=b.defaultProps,U=b.foldedComponentIds,D=b.styledComponentId,z=b.target,ht=we.useContext(fy),Se=ih(),Re=b.shouldForwardProp||Se.shouldForwardProp,Ce=function(Ct,Oe,cn){for(var at,vt=et(et({},Oe),{className:void 0,theme:cn}),Is=0;Is<Ct.length;Is+=1){var za=ii(at=Ct[Is])?at(vt):at;for(var fn in za)vt[fn]=fn==="className"?qn(vt[fn],za[fn]):fn==="style"?et(et({},vt[fn]),za[fn]):za[fn]}return Oe.className&&(vt.className=qn(vt.className,Oe.className)),vt}(C,E,ok(E,ht,N)||ri),j=Ce.as||z,F={};for(var $ in Ce)Ce[$]===void 0||$[0]==="$"||$==="as"||$==="theme"||($==="forwardedAs"?F.as=Ce.forwardedAs:Re&&!Re($,j)||(F[$]=Ce[$]));var ne=function(Ct,Oe){var cn=ih(),at=Ct.generateAndInjectStyles(Oe,cn.styleSheet,cn.stylis);return at}(P,Ce),K=qn(U,D);return ne&&(K+=" "+ne),Ce.className&&(K+=" "+Ce.className),F[vu(j)&&!Jg.has(j)?"class":"className"]=K,F.ref=k,O.createElement(j,F)}(d,h,S)}var d=we.forwardRef(m);return d.attrs=p,d.componentStyle=x,d.shouldForwardProp=g,d.foldedComponentIds=r?qn(i.foldedComponentIds,i.styledComponentId):"",d.styledComponentId=f,d.target=r?i.target:e,Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(h){this._foldedDefaultProps=r?function(S){for(var b=[],E=1;E<arguments.length;E++)b[E-1]=arguments[E];for(var k=0,C=b;k<C.length;k++)Gc(S,C[k],!0);return S}({},i.defaultProps,h):h}}),Ld(d,function(){return".".concat(d.styledComponentId)}),a&&iy(d,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),d}function oh(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var lh=function(e){return Object.assign(e,{isCss:!0})};function Hk(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ii(e)||ya(e)){var r=e;return lh(tr(oh(is,gl([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?tr(i):lh(tr(oh(i,t)))}function qc(e,t,n){if(n===void 0&&(n=ri),!t)throw Ia(1,t);var r=function(i){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,Hk.apply(void 0,gl([i],a,!1)))};return r.attrs=function(i){return qc(e,t,et(et({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return qc(e,t,et(et({},n),i))},r}var dy=function(e){return qc(Fk,e)},hr=dy;Jg.forEach(function(e){hr[e]=dy(e)});var py={},my={},as={},hy={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=t;e.default=n})(hy);var Uk="Expected a function",sh=0/0,Wk="[object Symbol]",Yk=/^\s+|\s+$/g,Bk=/^[-+]0x[0-9a-f]+$/i,Vk=/^0b[01]+$/i,Xk=/^0o[0-7]+$/i,Gk=parseInt,Qk=typeof $a=="object"&&$a&&$a.Object===Object&&$a,qk=typeof self=="object"&&self&&self.Object===Object&&self,Kk=Qk||qk||Function("return this")(),Zk=Object.prototype,Jk=Zk.toString,eE=Math.max,tE=Math.min,wu=function(){return Kk.Date.now()};function nE(e,t,n){var r,i,a,o,l,s,u=0,c=!1,f=!1,p=!0;if(typeof e!="function")throw new TypeError(Uk);t=uh(t)||0,Kc(n)&&(c=!!n.leading,f="maxWait"in n,a=f?eE(uh(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p);function g(E){var k=r,C=i;return r=i=void 0,u=E,o=e.apply(C,k),o}function w(E){return u=E,l=setTimeout(m,t),c?g(E):o}function v(E){var k=E-s,C=E-u,P=t-k;return f?tE(P,a-C):P}function x(E){var k=E-s,C=E-u;return s===void 0||k>=t||k<0||f&&C>=a}function m(){var E=wu();if(x(E))return d(E);l=setTimeout(m,v(E))}function d(E){return l=void 0,p&&r?g(E):(r=i=void 0,o)}function h(){l!==void 0&&clearTimeout(l),u=0,r=s=i=l=void 0}function S(){return l===void 0?o:d(wu())}function b(){var E=wu(),k=x(E);if(r=arguments,i=this,s=E,k){if(l===void 0)return w(s);if(f)return l=setTimeout(m,t),g(s)}return l===void 0&&(l=setTimeout(m,t)),o}return b.cancel=h,b.flush=S,b}function Kc(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function rE(e){return!!e&&typeof e=="object"}function iE(e){return typeof e=="symbol"||rE(e)&&Jk.call(e)==Wk}function uh(e){if(typeof e=="number")return e;if(iE(e))return sh;if(Kc(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Kc(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Yk,"");var n=Vk.test(e);return n||Xk.test(e)?Gk(e.slice(2),n?2:8):Bk.test(e)?sh:+e}var aE=nE,vy={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var a=arguments[i];if(a){var o=typeof a;if(o==="string"||o==="number")r.push(a);else if(Array.isArray(a)){if(a.length){var l=n.apply(null,a);l&&r.push(l)}}else if(o==="object"){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){r.push(a.toString());continue}for(var s in a)t.call(a,s)&&a[s]&&r.push(s)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(vy);var os=vy.exports,L={};Object.defineProperty(L,"__esModule",{value:!0});L.checkSpecKeys=L.checkNavigable=L.changeSlide=L.canUseDOM=L.canGoNext=void 0;L.clamp=gy;L.swipeStart=L.swipeMove=L.swipeEnd=L.slidesOnRight=L.slidesOnLeft=L.slideHandler=L.siblingDirection=L.safePreventDefault=L.lazyStartIndex=L.lazySlidesOnRight=L.lazySlidesOnLeft=L.lazyEndIndex=L.keyHandler=L.initializedState=L.getWidth=L.getTrackLeft=L.getTrackCSS=L.getTrackAnimateCSS=L.getTotalSlides=L.getSwipeDirection=L.getSlideCount=L.getRequiredLazySlides=L.getPreClones=L.getPostClones=L.getOnDemandLazySlides=L.getNavigableIndexes=L.getHeight=L.extractObject=void 0;var oE=lE(O);function lE(e){return e&&e.__esModule?e:{default:e}}function ch(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ce(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ch(Object(n),!0).forEach(function(r){sE(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ch(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sE(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gy(e,t,n){return Math.max(t,Math.min(e,n))}var nr=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()};L.safePreventDefault=nr;var Ad=function(t){for(var n=[],r=Id(t),i=Rd(t),a=r;a<i;a++)t.lazyLoadedList.indexOf(a)<0&&n.push(a);return n};L.getOnDemandLazySlides=Ad;var uE=function(t){for(var n=[],r=Id(t),i=Rd(t),a=r;a<i;a++)n.push(a);return n};L.getRequiredLazySlides=uE;var Id=function(t){return t.currentSlide-yy(t)};L.lazyStartIndex=Id;var Rd=function(t){return t.currentSlide+wy(t)};L.lazyEndIndex=Rd;var yy=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0};L.lazySlidesOnLeft=yy;var wy=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow};L.lazySlidesOnRight=wy;var Sl=function(t){return t&&t.offsetWidth||0};L.getWidth=Sl;var Md=function(t){return t&&t.offsetHeight||0};L.getHeight=Md;var zd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,a,o;return r=t.startX-t.curX,i=t.startY-t.curY,a=Math.atan2(i,r),o=Math.round(a*180/Math.PI),o<0&&(o=360-Math.abs(o)),o<=45&&o>=0||o<=360&&o>=315?"left":o>=135&&o<=225?"right":n===!0?o>=35&&o<=135?"up":"down":"vertical"};L.getSwipeDirection=zd;var $d=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};L.canGoNext=$d;var cE=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};L.extractObject=cE;var fE=function(t){var n=oE.default.Children.count(t.children),r=t.listRef,i=Math.ceil(Sl(r)),a=t.trackRef&&t.trackRef.node,o=Math.ceil(Sl(a)),l;if(t.vertical)l=i;else{var s=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(s*=i/100),l=Math.ceil((i-s)/t.slidesToShow)}var u=r&&Md(r.querySelector('[data-index="0"]')),c=u*t.slidesToShow,f=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(f=n-1-t.initialSlide);var p=t.lazyLoadedList||[],g=Ad(ce(ce({},t),{},{currentSlide:f,lazyLoadedList:p}));p=p.concat(g);var w={slideCount:n,slideWidth:l,listWidth:i,trackWidth:o,currentSlide:f,slideHeight:u,listHeight:c,lazyLoadedList:p};return t.autoplaying===null&&t.autoplay&&(w.autoplaying="playing"),w};L.initializedState=fE;var dE=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,a=t.infinite,o=t.index,l=t.slideCount,s=t.lazyLoad,u=t.currentSlide,c=t.centerMode,f=t.slidesToScroll,p=t.slidesToShow,g=t.useCSS,w=t.lazyLoadedList;if(n&&r)return{};var v=o,x,m,d,h={},S={},b=a?o:gy(o,0,l-1);if(i){if(!a&&(o<0||o>=l))return{};o<0?v=o+l:o>=l&&(v=o-l),s&&w.indexOf(v)<0&&(w=w.concat(v)),h={animating:!0,currentSlide:v,lazyLoadedList:w,targetSlide:v},S={animating:!1,targetSlide:v}}else x=v,v<0?(x=v+l,a?l%f!==0&&(x=l-l%f):x=0):!$d(t)&&v>u?v=x=u:c&&v>=l?(v=a?l:l-1,x=a?0:l-1):v>=l&&(x=v-l,a?l%f!==0&&(x=0):x=l-p),!a&&v+p>=l&&(x=l-p),m=Sa(ce(ce({},t),{},{slideIndex:v})),d=Sa(ce(ce({},t),{},{slideIndex:x})),a||(m===d&&(v=x),m=d),s&&(w=w.concat(Ad(ce(ce({},t),{},{currentSlide:v})))),g?(h={animating:!0,currentSlide:x,trackStyle:Dd(ce(ce({},t),{},{left:m})),lazyLoadedList:w,targetSlide:b},S={animating:!1,currentSlide:x,trackStyle:wa(ce(ce({},t),{},{left:d})),swipeLeft:null,targetSlide:b}):h={currentSlide:x,trackStyle:wa(ce(ce({},t),{},{left:d})),lazyLoadedList:w,targetSlide:b};return{state:h,nextState:S}};L.slideHandler=dE;var pE=function(t,n){var r,i,a,o,l,s=t.slidesToScroll,u=t.slidesToShow,c=t.slideCount,f=t.currentSlide,p=t.targetSlide,g=t.lazyLoad,w=t.infinite;if(o=c%s!==0,r=o?0:(c-f)%s,n.message==="previous")a=r===0?s:u-r,l=f-a,g&&!w&&(i=f-a,l=i===-1?c-1:i),w||(l=p-s);else if(n.message==="next")a=r===0?s:r,l=f+a,g&&!w&&(l=(f+s)%c+r),w||(l=p+s);else if(n.message==="dots")l=n.index*n.slidesToScroll;else if(n.message==="children"){if(l=n.index,w){var v=ky(ce(ce({},t),{},{targetSlide:l}));l>n.currentSlide&&v==="left"?l=l-c:l<n.currentSlide&&v==="right"&&(l=l+c)}}else n.message==="index"&&(l=Number(n.index));return l};L.changeSlide=pE;var mE=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};L.keyHandler=mE;var hE=function(t,n,r){return t.target.tagName==="IMG"&&nr(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};L.swipeStart=hE;var vE=function(t,n){var r=n.scrolling,i=n.animating,a=n.vertical,o=n.swipeToSlide,l=n.verticalSwiping,s=n.rtl,u=n.currentSlide,c=n.edgeFriction,f=n.edgeDragged,p=n.onEdge,g=n.swiped,w=n.swiping,v=n.slideCount,x=n.slidesToScroll,m=n.infinite,d=n.touchObject,h=n.swipeEvent,S=n.listHeight,b=n.listWidth;if(!r){if(i)return nr(t);a&&o&&l&&nr(t);var E,k={},C=Sa(n);d.curX=t.touches?t.touches[0].pageX:t.clientX,d.curY=t.touches?t.touches[0].pageY:t.clientY,d.swipeLength=Math.round(Math.sqrt(Math.pow(d.curX-d.startX,2)));var P=Math.round(Math.sqrt(Math.pow(d.curY-d.startY,2)));if(!l&&!w&&P>10)return{scrolling:!0};l&&(d.swipeLength=P);var N=(s?-1:1)*(d.curX>d.startX?1:-1);l&&(N=d.curY>d.startY?1:-1);var U=Math.ceil(v/x),D=zd(n.touchObject,l),z=d.swipeLength;return m||(u===0&&(D==="right"||D==="down")||u+1>=U&&(D==="left"||D==="up")||!$d(n)&&(D==="left"||D==="up"))&&(z=d.swipeLength*c,f===!1&&p&&(p(D),k.edgeDragged=!0)),!g&&h&&(h(D),k.swiped=!0),a?E=C+z*(S/b)*N:s?E=C-z*N:E=C+z*N,l&&(E=C+z*N),k=ce(ce({},k),{},{touchObject:d,swipeLeft:E,trackStyle:wa(ce(ce({},n),{},{left:E}))}),Math.abs(d.curX-d.startX)<Math.abs(d.curY-d.startY)*.8||d.swipeLength>10&&(k.swiping=!0,nr(t)),k}};L.swipeMove=vE;var gE=function(t,n){var r=n.dragging,i=n.swipe,a=n.touchObject,o=n.listWidth,l=n.touchThreshold,s=n.verticalSwiping,u=n.listHeight,c=n.swipeToSlide,f=n.scrolling,p=n.onSwipe,g=n.targetSlide,w=n.currentSlide,v=n.infinite;if(!r)return i&&nr(t),{};var x=s?u/l:o/l,m=zd(a,s),d={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(f||!a.swipeLength)return d;if(a.swipeLength>x){nr(t),p&&p(m);var h,S,b=v?w:g;switch(m){case"left":case"up":S=b+Jc(n),h=c?Zc(n,S):S,d.currentDirection=0;break;case"right":case"down":S=b-Jc(n),h=c?Zc(n,S):S,d.currentDirection=1;break;default:h=b}d.triggerSlideHandler=h}else{var E=Sa(n);d.trackStyle=Dd(ce(ce({},n),{},{left:E}))}return d};L.swipeEnd=gE;var Sy=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,a=[];r<n;)a.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return a};L.getNavigableIndexes=Sy;var Zc=function(t,n){var r=Sy(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var a in r){if(n<r[a]){n=i;break}i=r[a]}return n};L.checkNavigable=Zc;var Jc=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,a=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(a).every(function(s){if(t.vertical){if(s.offsetTop+Md(s)/2>t.swipeLeft*-1)return r=s,!1}else if(s.offsetLeft-n+Sl(s)/2>t.swipeLeft*-1)return r=s,!1;return!0}),!r)return 0;var o=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,l=Math.abs(r.dataset.index-o)||1;return l}else return t.slidesToScroll};L.getSlideCount=Jc;var ls=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)};L.checkSpecKeys=ls;var wa=function(t){ls(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=by(t)*t.slideWidth;var a={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var o=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",l=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",s=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";a=ce(ce({},a),{},{WebkitTransform:o,transform:l,msTransform:s})}else t.vertical?a.top=t.left:a.left=t.left;return t.fade&&(a={opacity:1}),n&&(a.width=n),r&&(a.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?a.marginTop=t.left+"px":a.marginLeft=t.left+"px"),a};L.getTrackCSS=wa;var Dd=function(t){ls(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=wa(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n};L.getTrackAnimateCSS=Dd;var Sa=function(t){if(t.unslick)return 0;ls(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,a=t.centerMode,o=t.slideCount,l=t.slidesToShow,s=t.slidesToScroll,u=t.slideWidth,c=t.listWidth,f=t.variableWidth,p=t.slideHeight,g=t.fade,w=t.vertical,v=0,x,m,d=0;if(g||t.slideCount===1)return 0;var h=0;if(i?(h=-Vi(t),o%s!==0&&n+s>o&&(h=-(n>o?l-(n-o):o%s)),a&&(h+=parseInt(l/2))):(o%s!==0&&n+s>o&&(h=l-o%s),a&&(h=parseInt(l/2))),v=h*u,d=h*p,w?x=n*p*-1+d:x=n*u*-1+v,f===!0){var S,b=r&&r.node;if(S=n+Vi(t),m=b&&b.childNodes[S],x=m?m.offsetLeft*-1:0,a===!0){S=i?n+Vi(t):n,m=b&&b.children[S],x=0;for(var E=0;E<S;E++)x-=b&&b.children[E]&&b.children[E].offsetWidth;x-=parseInt(t.centerPadding),x+=m&&(c-m.offsetWidth)/2}}return x};L.getTrackLeft=Sa;var Vi=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)};L.getPreClones=Vi;var xy=function(t){return t.unslick||!t.infinite?0:t.slideCount};L.getPostClones=xy;var by=function(t){return t.slideCount===1?1:Vi(t)+t.slideCount+xy(t)};L.getTotalSlides=by;var ky=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+Ey(t)?"left":"right":t.targetSlide<t.currentSlide-Cy(t)?"right":"left"};L.siblingDirection=ky;var Ey=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,a=t.centerPadding;if(r){var o=(n-1)/2+1;return parseInt(a)>0&&(o+=1),i&&n%2===0&&(o+=1),o}return i?0:n-1};L.slidesOnRight=Ey;var Cy=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,a=t.centerPadding;if(r){var o=(n-1)/2+1;return parseInt(a)>0&&(o+=1),!i&&n%2===0&&(o+=1),o}return i?n-1:0};L.slidesOnLeft=Cy;var yE=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};L.canUseDOM=yE;var ss={};function ef(e){"@babel/helpers - typeof";return ef=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ef(e)}Object.defineProperty(ss,"__esModule",{value:!0});ss.Track=void 0;var yn=Oy(O),Su=Oy(os),xu=L;function Oy(e){return e&&e.__esModule?e:{default:e}}function tf(){return tf=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},tf.apply(this,arguments)}function wE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fh(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function SE(e,t,n){return t&&fh(e.prototype,t),n&&fh(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function xE(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&nf(e,t)}function nf(e,t){return nf=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},nf(e,t)}function bE(e){var t=EE();return function(){var r=xl(e),i;if(t){var a=xl(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return kE(this,i)}}function kE(e,t){if(t&&(ef(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return rf(e)}function rf(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function EE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function xl(e){return xl=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},xl(e)}function dh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function qe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dh(Object(n),!0).forEach(function(r){af(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function af(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var bu=function(t){var n,r,i,a,o;t.rtl?o=t.slideCount-1-t.index:o=t.index,i=o<0||o>=t.slideCount,t.centerMode?(a=Math.floor(t.slidesToShow/2),r=(o-t.currentSlide)%t.slideCount===0,o>t.currentSlide-a-1&&o<=t.currentSlide+a&&(n=!0)):n=t.currentSlide<=o&&o<t.currentSlide+t.slidesToShow;var l;t.targetSlide<0?l=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?l=t.targetSlide-t.slideCount:l=t.targetSlide;var s=o===l;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":s}},CE=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},ku=function(t,n){return t.key||n},OE=function(t){var n,r=[],i=[],a=[],o=yn.default.Children.count(t.children),l=(0,xu.lazyStartIndex)(t),s=(0,xu.lazyEndIndex)(t);return yn.default.Children.forEach(t.children,function(u,c){var f,p={message:"children",index:c,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(c)>=0?f=u:f=yn.default.createElement("div",null);var g=CE(qe(qe({},t),{},{index:c})),w=f.props.className||"",v=bu(qe(qe({},t),{},{index:c}));if(r.push(yn.default.cloneElement(f,{key:"original"+ku(f,c),"data-index":c,className:(0,Su.default)(v,w),tabIndex:"-1","aria-hidden":!v["slick-active"],style:qe(qe({outline:"none"},f.props.style||{}),g),onClick:function(d){f.props&&f.props.onClick&&f.props.onClick(d),t.focusOnSelect&&t.focusOnSelect(p)}})),t.infinite&&t.fade===!1){var x=o-c;x<=(0,xu.getPreClones)(t)&&o!==t.slidesToShow&&(n=-x,n>=l&&(f=u),v=bu(qe(qe({},t),{},{index:n})),i.push(yn.default.cloneElement(f,{key:"precloned"+ku(f,n),"data-index":n,tabIndex:"-1",className:(0,Su.default)(v,w),"aria-hidden":!v["slick-active"],style:qe(qe({},f.props.style||{}),g),onClick:function(d){f.props&&f.props.onClick&&f.props.onClick(d),t.focusOnSelect&&t.focusOnSelect(p)}}))),o!==t.slidesToShow&&(n=o+c,n<s&&(f=u),v=bu(qe(qe({},t),{},{index:n})),a.push(yn.default.cloneElement(f,{key:"postcloned"+ku(f,n),"data-index":n,tabIndex:"-1",className:(0,Su.default)(v,w),"aria-hidden":!v["slick-active"],style:qe(qe({},f.props.style||{}),g),onClick:function(d){f.props&&f.props.onClick&&f.props.onClick(d),t.focusOnSelect&&t.focusOnSelect(p)}})))}}),t.rtl?i.concat(r,a).reverse():i.concat(r,a)},TE=function(e){xE(n,e);var t=bE(n);function n(){var r;wE(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a)),af(rf(r),"node",null),af(rf(r),"handleRef",function(l){r.node=l}),r}return SE(n,[{key:"render",value:function(){var i=OE(this.props),a=this.props,o=a.onMouseEnter,l=a.onMouseOver,s=a.onMouseLeave,u={onMouseEnter:o,onMouseOver:l,onMouseLeave:s};return yn.default.createElement("div",tf({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(yn.default.PureComponent);ss.Track=TE;var us={};function of(e){"@babel/helpers - typeof";return of=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},of(e)}Object.defineProperty(us,"__esModule",{value:!0});us.Dots=void 0;var po=Ty(O),PE=Ty(os),ph=L;function Ty(e){return e&&e.__esModule?e:{default:e}}function mh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function _E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?mh(Object(n),!0).forEach(function(r){NE(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function NE(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function hh(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function LE(e,t,n){return t&&hh(e.prototype,t),n&&hh(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function AE(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&lf(e,t)}function lf(e,t){return lf=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},lf(e,t)}function IE(e){var t=zE();return function(){var r=bl(e),i;if(t){var a=bl(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return RE(this,i)}}function RE(e,t){if(t&&(of(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ME(e)}function ME(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function zE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function bl(e){return bl=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},bl(e)}var $E=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n},DE=function(e){AE(n,e);var t=IE(n);function n(){return jE(this,n),t.apply(this,arguments)}return LE(n,[{key:"clickHandler",value:function(i,a){a.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,a=i.onMouseEnter,o=i.onMouseOver,l=i.onMouseLeave,s=i.infinite,u=i.slidesToScroll,c=i.slidesToShow,f=i.slideCount,p=i.currentSlide,g=$E({slideCount:f,slidesToScroll:u,slidesToShow:c,infinite:s}),w={onMouseEnter:a,onMouseOver:o,onMouseLeave:l},v=[],x=0;x<g;x++){var m=(x+1)*u-1,d=s?m:(0,ph.clamp)(m,0,f-1),h=d-(u-1),S=s?h:(0,ph.clamp)(h,0,f-1),b=(0,PE.default)({"slick-active":s?p>=S&&p<=d:p===S}),E={message:"dots",index:x,slidesToScroll:u,currentSlide:p},k=this.clickHandler.bind(this,E);v=v.concat(po.default.createElement("li",{key:x,className:b},po.default.cloneElement(this.props.customPaging(x),{onClick:k})))}return po.default.cloneElement(this.props.appendDots(v),_E({className:this.props.dotsClass},w))}}]),n}(po.default.PureComponent);us.Dots=DE;var ai={};function sf(e){"@babel/helpers - typeof";return sf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},sf(e)}Object.defineProperty(ai,"__esModule",{value:!0});ai.PrevArrow=ai.NextArrow=void 0;var Wr=_y(O),Py=_y(os),FE=L;function _y(e){return e&&e.__esModule?e:{default:e}}function kl(){return kl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kl.apply(this,arguments)}function vh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function El(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?vh(Object(n),!0).forEach(function(r){HE(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function HE(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ny(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function gh(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function jy(e,t,n){return t&&gh(e.prototype,t),n&&gh(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ly(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&uf(e,t)}function uf(e,t){return uf=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},uf(e,t)}function Ay(e){var t=YE();return function(){var r=Cl(e),i;if(t){var a=Cl(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return UE(this,i)}}function UE(e,t){if(t&&(sf(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return WE(e)}function WE(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function YE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Cl(e){return Cl=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Cl(e)}var BE=function(e){Ly(n,e);var t=Ay(n);function n(){return Ny(this,n),t.apply(this,arguments)}return jy(n,[{key:"clickHandler",value:function(i,a){a&&a.preventDefault(),this.props.clickHandler(i,a)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},a=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,a=null);var o={key:"0","data-role":"none",className:(0,Py.default)(i),style:{display:"block"},onClick:a},l={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.prevArrow?s=Wr.default.cloneElement(this.props.prevArrow,El(El({},o),l)):s=Wr.default.createElement("button",kl({key:"0",type:"button"},o)," ","Previous"),s}}]),n}(Wr.default.PureComponent);ai.PrevArrow=BE;var VE=function(e){Ly(n,e);var t=Ay(n);function n(){return Ny(this,n),t.apply(this,arguments)}return jy(n,[{key:"clickHandler",value:function(i,a){a&&a.preventDefault(),this.props.clickHandler(i,a)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},a=this.clickHandler.bind(this,{message:"next"});(0,FE.canGoNext)(this.props)||(i["slick-disabled"]=!0,a=null);var o={key:"1","data-role":"none",className:(0,Py.default)(i),style:{display:"block"},onClick:a},l={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.nextArrow?s=Wr.default.cloneElement(this.props.nextArrow,El(El({},o),l)):s=Wr.default.createElement("button",kl({key:"1",type:"button"},o)," ","Next"),s}}]),n}(Wr.default.PureComponent);ai.NextArrow=VE;var Iy=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,a){return i[0]===n?(r=a,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,a=this.__entries__;i<a.length;i++){var o=a[i];n.call(r,o[1],o[0])}},t}()}(),cf=typeof window<"u"&&typeof document<"u"&&window.document===document,Ol=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),XE=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Ol):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),GE=2;function QE(e,t){var n=!1,r=!1,i=0;function a(){n&&(n=!1,e()),r&&l()}function o(){XE(a)}function l(){var s=Date.now();if(n){if(s-i<GE)return;r=!0}else n=!0,r=!1,setTimeout(o,t);i=s}return l}var qE=20,KE=["top","right","bottom","left","width","height","size","weight"],ZE=typeof MutationObserver<"u",JE=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=QE(this.refresh.bind(this),qE)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!cf||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),ZE?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!cf||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=KE.some(function(a){return!!~r.indexOf(a)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Ry=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},oi=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||Ol},My=cs(0,0,0,0);function Tl(e){return parseFloat(e)||0}function yh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var a=e["border-"+i+"-width"];return r+Tl(a)},0)}function e5(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var a=i[r],o=e["padding-"+a];n[a]=Tl(o)}return n}function t5(e){var t=e.getBBox();return cs(0,0,t.width,t.height)}function n5(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return My;var r=oi(e).getComputedStyle(e),i=e5(r),a=i.left+i.right,o=i.top+i.bottom,l=Tl(r.width),s=Tl(r.height);if(r.boxSizing==="border-box"&&(Math.round(l+a)!==t&&(l-=yh(r,"left","right")+a),Math.round(s+o)!==n&&(s-=yh(r,"top","bottom")+o)),!i5(e)){var u=Math.round(l+a)-t,c=Math.round(s+o)-n;Math.abs(u)!==1&&(l-=u),Math.abs(c)!==1&&(s-=c)}return cs(i.left,i.top,l,s)}var r5=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof oi(e).SVGGraphicsElement}:function(e){return e instanceof oi(e).SVGElement&&typeof e.getBBox=="function"}}();function i5(e){return e===oi(e).document.documentElement}function a5(e){return cf?r5(e)?t5(e):n5(e):My}function o5(e){var t=e.x,n=e.y,r=e.width,i=e.height,a=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,o=Object.create(a.prototype);return Ry(o,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),o}function cs(e,t,n,r){return{x:e,y:t,width:n,height:r}}var l5=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=cs(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=a5(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),s5=function(){function e(t,n){var r=o5(n);Ry(this,{target:t,contentRect:r})}return e}(),u5=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new Iy,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof oi(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new l5(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof oi(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new s5(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),zy=typeof WeakMap<"u"?new WeakMap:new Iy,$y=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=JE.getInstance(),r=new u5(t,n,this);zy.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){$y.prototype[e]=function(){var t;return(t=zy.get(this))[e].apply(t,arguments)}});var c5=function(){return typeof Ol.ResizeObserver<"u"?Ol.ResizeObserver:$y}();const f5=Object.freeze(Object.defineProperty({__proto__:null,default:c5},Symbol.toStringTag,{value:"Module"})),d5=h1(f5);Object.defineProperty(as,"__esModule",{value:!0});as.InnerSlider=void 0;var Be=Ra(O),p5=Ra(hy),m5=Ra(aE),h5=Ra(os),de=L,v5=ss,g5=us,wh=ai,y5=Ra(d5);function Ra(e){return e&&e.__esModule?e:{default:e}}function Pl(e){"@babel/helpers - typeof";return Pl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pl(e)}function _l(){return _l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_l.apply(this,arguments)}function w5(e,t){if(e==null)return{};var n=S5(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function S5(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Sh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Sh(Object(n),!0).forEach(function(r){V(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function x5(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xh(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b5(e,t,n){return t&&xh(e.prototype,t),n&&xh(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function k5(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ff(e,t)}function ff(e,t){return ff=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},ff(e,t)}function E5(e){var t=O5();return function(){var r=Nl(e),i;if(t){var a=Nl(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return C5(this,i)}}function C5(e,t){if(t&&(Pl(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return B(e)}function B(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O5(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Nl(e){return Nl=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Nl(e)}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T5=function(e){k5(n,e);var t=E5(n);function n(r){var i;x5(this,n),i=t.call(this,r),V(B(i),"listRefHandler",function(o){return i.list=o}),V(B(i),"trackRefHandler",function(o){return i.track=o}),V(B(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var o=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,de.getHeight)(o)+"px"}}),V(B(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var o=(0,de.getOnDemandLazySlides)(H(H({},i.props),i.state));o.length>0&&(i.setState(function(s){return{lazyLoadedList:s.lazyLoadedList.concat(o)}}),i.props.onLazyLoad&&i.props.onLazyLoad(o))}var l=H({listRef:i.list,trackRef:i.track},i.props);i.updateState(l,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new y5.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(s){s.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,s.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),V(B(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(o){return clearTimeout(o)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),V(B(i),"componentDidUpdate",function(o){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var l=(0,de.getOnDemandLazySlides)(H(H({},i.props),i.state));l.length>0&&(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l))}i.adaptHeight();var s=H(H({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(o);u&&i.updateState(s,u,function(){i.state.currentSlide>=Be.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Be.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),V(B(i),"onWindowResized",function(o){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,m5.default)(function(){return i.resizeWindow(o)},50),i.debouncedResize()}),V(B(i),"resizeWindow",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,l=!!(i.track&&i.track.node);if(l){var s=H(H({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(s,o,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),V(B(i),"updateState",function(o,l,s){var u=(0,de.initializedState)(o);o=H(H(H({},o),u),{},{slideIndex:u.currentSlide});var c=(0,de.getTrackLeft)(o);o=H(H({},o),{},{left:c});var f=(0,de.getTrackCSS)(o);(l||Be.default.Children.count(i.props.children)!==Be.default.Children.count(o.children))&&(u.trackStyle=f),i.setState(u,s)}),V(B(i),"ssrInit",function(){if(i.props.variableWidth){var o=0,l=0,s=[],u=(0,de.getPreClones)(H(H(H({},i.props),i.state),{},{slideCount:i.props.children.length})),c=(0,de.getPostClones)(H(H(H({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(k){s.push(k.props.style.width),o+=k.props.style.width});for(var f=0;f<u;f++)l+=s[s.length-1-f],o+=s[s.length-1-f];for(var p=0;p<c;p++)o+=s[p];for(var g=0;g<i.state.currentSlide;g++)l+=s[g];var w={width:o+"px",left:-l+"px"};if(i.props.centerMode){var v="".concat(s[i.state.currentSlide],"px");w.left="calc(".concat(w.left," + (100% - ").concat(v,") / 2 ) ")}return{trackStyle:w}}var x=Be.default.Children.count(i.props.children),m=H(H(H({},i.props),i.state),{},{slideCount:x}),d=(0,de.getPreClones)(m)+(0,de.getPostClones)(m)+x,h=100/i.props.slidesToShow*d,S=100/d,b=-S*((0,de.getPreClones)(m)+i.state.currentSlide)*h/100;i.props.centerMode&&(b+=(100-S*h/100)/2);var E={width:h+"%",left:b+"%"};return{slideWidth:S+"%",trackStyle:E}}),V(B(i),"checkImagesLoad",function(){var o=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],l=o.length,s=0;Array.prototype.forEach.call(o,function(u){var c=function(){return++s&&s>=l&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var f=u.onclick;u.onclick=function(){f(),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=c,u.onerror=function(){c(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),V(B(i),"progressiveLazyLoad",function(){for(var o=[],l=H(H({},i.props),i.state),s=i.state.currentSlide;s<i.state.slideCount+(0,de.getPostClones)(l);s++)if(i.state.lazyLoadedList.indexOf(s)<0){o.push(s);break}for(var u=i.state.currentSlide-1;u>=-(0,de.getPreClones)(l);u--)if(i.state.lazyLoadedList.indexOf(u)<0){o.push(u);break}o.length>0?(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(o)}}),i.props.onLazyLoad&&i.props.onLazyLoad(o)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),V(B(i),"slideHandler",function(o){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=i.props,u=s.asNavFor,c=s.beforeChange,f=s.onLazyLoad,p=s.speed,g=s.afterChange,w=i.state.currentSlide,v=(0,de.slideHandler)(H(H(H({index:o},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!l})),x=v.state,m=v.nextState;if(x){c&&c(w,x.currentSlide);var d=x.lazyLoadedList.filter(function(h){return i.state.lazyLoadedList.indexOf(h)<0});f&&d.length>0&&f(d),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),g&&g(w),delete i.animationEndCallback),i.setState(x,function(){u&&i.asNavForIndex!==o&&(i.asNavForIndex=o,u.innerSlider.slideHandler(o)),m&&(i.animationEndCallback=setTimeout(function(){var h=m.animating,S=w5(m,["animating"]);i.setState(S,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:h})},10)),g&&g(x.currentSlide),delete i.animationEndCallback})},p))})}}),V(B(i),"changeSlide",function(o){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=H(H({},i.props),i.state),u=(0,de.changeSlide)(s,o);if(!(u!==0&&!u)&&(l===!0?i.slideHandler(u,l):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var c=i.list.querySelectorAll(".slick-current");c[0]&&c[0].focus()}}),V(B(i),"clickHandler",function(o){i.clickable===!1&&(o.stopPropagation(),o.preventDefault()),i.clickable=!0}),V(B(i),"keyHandler",function(o){var l=(0,de.keyHandler)(o,i.props.accessibility,i.props.rtl);l!==""&&i.changeSlide({message:l})}),V(B(i),"selectHandler",function(o){i.changeSlide(o)}),V(B(i),"disableBodyScroll",function(){var o=function(s){s=s||window.event,s.preventDefault&&s.preventDefault(),s.returnValue=!1};window.ontouchmove=o}),V(B(i),"enableBodyScroll",function(){window.ontouchmove=null}),V(B(i),"swipeStart",function(o){i.props.verticalSwiping&&i.disableBodyScroll();var l=(0,de.swipeStart)(o,i.props.swipe,i.props.draggable);l!==""&&i.setState(l)}),V(B(i),"swipeMove",function(o){var l=(0,de.swipeMove)(o,H(H(H({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));l&&(l.swiping&&(i.clickable=!1),i.setState(l))}),V(B(i),"swipeEnd",function(o){var l=(0,de.swipeEnd)(o,H(H(H({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(l){var s=l.triggerSlideHandler;delete l.triggerSlideHandler,i.setState(l),s!==void 0&&(i.slideHandler(s),i.props.verticalSwiping&&i.enableBodyScroll())}}),V(B(i),"touchEnd",function(o){i.swipeEnd(o),i.clickable=!0}),V(B(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),V(B(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),V(B(i),"slickGoTo",function(o){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(o=Number(o),isNaN(o))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:o,currentSlide:i.state.currentSlide},l)},0))}),V(B(i),"play",function(){var o;if(i.props.rtl)o=i.state.currentSlide-i.props.slidesToScroll;else if((0,de.canGoNext)(H(H({},i.props),i.state)))o=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(o)}),V(B(i),"autoPlay",function(o){i.autoplayTimer&&clearInterval(i.autoplayTimer);var l=i.state.autoplaying;if(o==="update"){if(l==="hovered"||l==="focused"||l==="paused")return}else if(o==="leave"){if(l==="paused"||l==="focused")return}else if(o==="blur"&&(l==="paused"||l==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),V(B(i),"pause",function(o){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var l=i.state.autoplaying;o==="paused"?i.setState({autoplaying:"paused"}):o==="focused"?(l==="hovered"||l==="playing")&&i.setState({autoplaying:"focused"}):l==="playing"&&i.setState({autoplaying:"hovered"})}),V(B(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),V(B(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),V(B(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),V(B(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),V(B(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),V(B(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),V(B(i),"render",function(){var o=(0,h5.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),l=H(H({},i.props),i.state),s=(0,de.extractObject)(l,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;s=H(H({},s),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var c;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var f=(0,de.extractObject)(l,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),p=i.props.pauseOnDotsHover;f=H(H({},f),{},{clickHandler:i.changeSlide,onMouseEnter:p?i.onDotsLeave:null,onMouseOver:p?i.onDotsOver:null,onMouseLeave:p?i.onDotsLeave:null}),c=Be.default.createElement(g5.Dots,f)}var g,w,v=(0,de.extractObject)(l,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);v.clickHandler=i.changeSlide,i.props.arrows&&(g=Be.default.createElement(wh.PrevArrow,v),w=Be.default.createElement(wh.NextArrow,v));var x=null;i.props.vertical&&(x={height:i.state.listHeight});var m=null;i.props.vertical===!1?i.props.centerMode===!0&&(m={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(m={padding:i.props.centerPadding+" 0px"});var d=H(H({},x),m),h=i.props.touchMove,S={className:"slick-list",style:d,onClick:i.clickHandler,onMouseDown:h?i.swipeStart:null,onMouseMove:i.state.dragging&&h?i.swipeMove:null,onMouseUp:h?i.swipeEnd:null,onMouseLeave:i.state.dragging&&h?i.swipeEnd:null,onTouchStart:h?i.swipeStart:null,onTouchMove:i.state.dragging&&h?i.swipeMove:null,onTouchEnd:h?i.touchEnd:null,onTouchCancel:i.state.dragging&&h?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},b={className:o,dir:"ltr",style:i.props.style};return i.props.unslick&&(S={className:"slick-list"},b={className:o}),Be.default.createElement("div",b,i.props.unslick?"":g,Be.default.createElement("div",_l({ref:i.listRefHandler},S),Be.default.createElement(v5.Track,_l({ref:i.trackRefHandler},s),i.props.children)),i.props.unslick?"":w,i.props.unslick?"":c)}),i.list=null,i.track=null,i.state=H(H({},p5.default),{},{currentSlide:i.props.initialSlide,slideCount:Be.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var a=i.ssrInit();return i.state=H(H({},i.state),a),i}return b5(n,[{key:"didPropsChange",value:function(i){for(var a=!1,o=0,l=Object.keys(this.props);o<l.length;o++){var s=l[o];if(!i.hasOwnProperty(s)){a=!0;break}if(!(Pl(i[s])==="object"||typeof i[s]=="function")&&i[s]!==this.props[s]){a=!0;break}}return a||Be.default.Children.count(this.props.children)!==Be.default.Children.count(i.children)}}]),n}(Be.default.Component);as.InnerSlider=T5;var P5=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},_5=P5,N5=_5,j5=function(e){var t=/[height|width]$/;return t.test(e)},bh=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var a=e[r];r=N5(r),j5(r)&&typeof a=="number"&&(a=a+"px"),a===!0?t+=r:a===!1?t+="not "+r:t+="("+r+": "+a+")",i<n.length-1&&(t+=" and ")}),t},L5=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=bh(n),r<e.length-1&&(t+=", ")}),t):bh(e)},A5=L5,Dy={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(O);function n(a){return a&&a.__esModule?a:{default:a}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(o){return t.default.createElement("ul",{style:{display:"block"}},o)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(o){return t.default.createElement("button",null,o+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;e.default=i})(Dy);var Eu,kh;function I5(){if(kh)return Eu;kh=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},Eu=e,Eu}var Cu,Eh;function Fy(){if(Eh)return Cu;Eh=1;function e(r,i){var a=0,o=r.length,l;for(a;a<o&&(l=i(r[a],a),l!==!1);a++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return Cu={isFunction:n,isArray:t,each:e},Cu}var Ou,Ch;function R5(){if(Ch)return Ou;Ch=1;var e=I5(),t=Fy().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var a=this;this.listener=function(o){a.mql=o.currentTarget||o,a.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(a,o){if(a.equals(r))return a.destroy(),!i.splice(o,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},Ou=n,Ou}var Tu,Oh;function M5(){if(Oh)return Tu;Oh=1;var e=R5(),t=Fy(),n=t.each,r=t.isFunction,i=t.isArray;function a(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return a.prototype={constructor:a,register:function(o,l,s){var u=this.queries,c=s&&this.browserIsIncapable;return u[o]||(u[o]=new e(o,c)),r(l)&&(l={match:l}),i(l)||(l=[l]),n(l,function(f){r(f)&&(f={match:f}),u[o].addHandler(f)}),this},unregister:function(o,l){var s=this.queries[o];return s&&(l?s.removeHandler(l):(s.clear(),delete this.queries[o])),this}},Tu=a,Tu}var Pu,Th;function z5(){if(Th)return Pu;Th=1;var e=M5();return Pu=new e,Pu}(function(e){function t(C){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},t(C)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=l(O),r=as,i=l(A5),a=l(Dy),o=L;function l(C){return C&&C.__esModule?C:{default:C}}function s(){return s=Object.assign||function(C){for(var P=1;P<arguments.length;P++){var N=arguments[P];for(var U in N)Object.prototype.hasOwnProperty.call(N,U)&&(C[U]=N[U])}return C},s.apply(this,arguments)}function u(C,P){var N=Object.keys(C);if(Object.getOwnPropertySymbols){var U=Object.getOwnPropertySymbols(C);P&&(U=U.filter(function(D){return Object.getOwnPropertyDescriptor(C,D).enumerable})),N.push.apply(N,U)}return N}function c(C){for(var P=1;P<arguments.length;P++){var N=arguments[P]!=null?arguments[P]:{};P%2?u(Object(N),!0).forEach(function(U){b(C,U,N[U])}):Object.getOwnPropertyDescriptors?Object.defineProperties(C,Object.getOwnPropertyDescriptors(N)):u(Object(N)).forEach(function(U){Object.defineProperty(C,U,Object.getOwnPropertyDescriptor(N,U))})}return C}function f(C,P){if(!(C instanceof P))throw new TypeError("Cannot call a class as a function")}function p(C,P){for(var N=0;N<P.length;N++){var U=P[N];U.enumerable=U.enumerable||!1,U.configurable=!0,"value"in U&&(U.writable=!0),Object.defineProperty(C,U.key,U)}}function g(C,P,N){return P&&p(C.prototype,P),N&&p(C,N),Object.defineProperty(C,"prototype",{writable:!1}),C}function w(C,P){if(typeof P!="function"&&P!==null)throw new TypeError("Super expression must either be null or a function");C.prototype=Object.create(P&&P.prototype,{constructor:{value:C,writable:!0,configurable:!0}}),Object.defineProperty(C,"prototype",{writable:!1}),P&&v(C,P)}function v(C,P){return v=Object.setPrototypeOf||function(U,D){return U.__proto__=D,U},v(C,P)}function x(C){var P=h();return function(){var U=S(C),D;if(P){var z=S(this).constructor;D=Reflect.construct(U,arguments,z)}else D=U.apply(this,arguments);return m(this,D)}}function m(C,P){if(P&&(t(P)==="object"||typeof P=="function"))return P;if(P!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return d(C)}function d(C){if(C===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return C}function h(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function S(C){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(N){return N.__proto__||Object.getPrototypeOf(N)},S(C)}function b(C,P,N){return P in C?Object.defineProperty(C,P,{value:N,enumerable:!0,configurable:!0,writable:!0}):C[P]=N,C}var E=(0,o.canUseDOM)()&&z5(),k=function(C){w(N,C);var P=x(N);function N(U){var D;return f(this,N),D=P.call(this,U),b(d(D),"innerSliderRefHandler",function(z){return D.innerSlider=z}),b(d(D),"slickPrev",function(){return D.innerSlider.slickPrev()}),b(d(D),"slickNext",function(){return D.innerSlider.slickNext()}),b(d(D),"slickGoTo",function(z){var ht=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return D.innerSlider.slickGoTo(z,ht)}),b(d(D),"slickPause",function(){return D.innerSlider.pause("paused")}),b(d(D),"slickPlay",function(){return D.innerSlider.autoPlay("play")}),D.state={breakpoint:null},D._responsiveMediaHandlers=[],D}return g(N,[{key:"media",value:function(D,z){E.register(D,z),this._responsiveMediaHandlers.push({query:D,handler:z})}},{key:"componentDidMount",value:function(){var D=this;if(this.props.responsive){var z=this.props.responsive.map(function(Se){return Se.breakpoint});z.sort(function(Se,Re){return Se-Re}),z.forEach(function(Se,Re){var Ce;Re===0?Ce=(0,i.default)({minWidth:0,maxWidth:Se}):Ce=(0,i.default)({minWidth:z[Re-1]+1,maxWidth:Se}),(0,o.canUseDOM)()&&D.media(Ce,function(){D.setState({breakpoint:Se})})});var ht=(0,i.default)({minWidth:z.slice(-1)[0]});(0,o.canUseDOM)()&&this.media(ht,function(){D.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(D){E.unregister(D.query,D.handler)})}},{key:"render",value:function(){var D=this,z,ht;this.state.breakpoint?(ht=this.props.responsive.filter(function(Oe){return Oe.breakpoint===D.state.breakpoint}),z=ht[0].settings==="unslick"?"unslick":c(c(c({},a.default),this.props),ht[0].settings)):z=c(c({},a.default),this.props),z.centerMode&&(z.slidesToScroll>1,z.slidesToScroll=1),z.fade&&(z.slidesToShow>1,z.slidesToScroll>1,z.slidesToShow=1,z.slidesToScroll=1);var Se=n.default.Children.toArray(this.props.children);Se=Se.filter(function(Oe){return typeof Oe=="string"?!!Oe.trim():!!Oe}),z.variableWidth&&(z.rows>1||z.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),z.variableWidth=!1);for(var Re=[],Ce=null,j=0;j<Se.length;j+=z.rows*z.slidesPerRow){for(var F=[],$=j;$<j+z.rows*z.slidesPerRow;$+=z.slidesPerRow){for(var ne=[],K=$;K<$+z.slidesPerRow&&(z.variableWidth&&Se[K].props.style&&(Ce=Se[K].props.style.width),!(K>=Se.length));K+=1)ne.push(n.default.cloneElement(Se[K],{key:100*j+10*$+K,tabIndex:-1,style:{width:"".concat(100/z.slidesPerRow,"%"),display:"inline-block"}}));F.push(n.default.createElement("div",{key:10*j+$},ne))}z.variableWidth?Re.push(n.default.createElement("div",{key:j,style:{width:Ce}},F)):Re.push(n.default.createElement("div",{key:j},F))}if(z==="unslick"){var Ct="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:Ct},Se)}else Re.length<=z.slidesToShow&&(z.unslick=!0);return n.default.createElement(r.InnerSlider,s({style:this.props.style,ref:this.innerSliderRefHandler},z),Re)}}]),N}(n.default.Component);e.default=k})(my);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(my);function n(i){return i&&i.__esModule?i:{default:i}}var r=t.default;e.default=r})(py);const Fd=cr(py),$5=e=>{const{img:t,disc:n,src:r,desc:i}=e.item;return y.jsxs(D5,{className:"project",children:[y.jsx("img",{src:t,alt:"project",className:"img"}),y.jsxs("div",{className:"disc",children:[y.jsx("h1",{className:"text-white description",children:i}),y.jsxs("p",{className:"text-white demo",children:[n,y.jsx("a",{href:r,target:"_blanck",children:" Ver mas"})]})]})]})},D5=hr.div`
    height: 10rem;
    background-color: #4e5156;
    margin: 0 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 400ms ease-in-out;
    } 
`;function F5(e){return Ql({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"}}]})(e)}function H5(e){return Ql({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"}}]})(e)}let U5=[{desc:"Centinela del Aire",img:"https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",disc:"Aplicación que brinda una autoevaluación inmediata sobre la enfermedad del COVID-19.",src:"https://www.google.com/"},{desc:"WeNet Mexico",img:"https://res.cloudinary.com/ghazni/image/upload/v1661324074/Yt-portfolio/ui4_jku3ol.png",disc:"WeNet está financiado por el programa H2020 de la UE y cuenta con el apoyo de investigadores de varios países. IPICYT representa a México al albergar WeNet MX.",src:"https://www.google.com/"},{desc:"Centinela de la Salud",img:"https://res.cloudinary.com/ghazni/image/upload/v1661323981/Yt-portfolio/ui2_wtollo.png",disc:"Es una plataforma móvil de salud financiada por el You-i Lab y el Consejo Potosino de Investigación. Su objetivo es proporcionar vigilancia epidemiológica sindrómica para virus transmitidos por el aire o vectores.",src:"https://www.google.com/"},{desc:"C-SEF",img:"https://res.cloudinary.com/ghazni/image/upload/v1661323980/Yt-portfolio/ui3_akynn4.png",disc:"Es un proyecto que busca desarrollar un protocolo automatizado para el uso seguro y eficiente de instalaciones educativas durante COVID-19.",src:"https://www.google.com/"},{desc:"Muframex",img:"https://res.cloudinary.com/ghazni/image/upload/v1661323979/Yt-portfolio/ui1_n3uiaz.png",disc:"El taller busca reunir investigadores multidisciplinarios para discutir el uso de plataformas IoT en la calidad del aire interior y su impacto en la salud humana",src:"https://www.google.com/"},{desc:"Horizonte Saludable",img:"https://res.cloudinary.com/ghazni/image/upload/v1661323979/Yt-portfolio/ui1_n3uiaz.png",disc:"busca crear un marco para que los ciudadanos monitoreen y aborden problemas ambientales en comunidades urbanas mexicanas.",src:"https://www.google.com/"},{desc:"Juventud al Dia",img:"https://res.cloudinary.com/ghazni/image/upload/v1661323979/Yt-portfolio/ui1_n3uiaz.png",disc:"Promover y fortalecer las habilidades tecnológicas en IA de estudiantes de educación media superior en San Luis Potosí",src:"https://www.google.com/"},{desc:"Coincidencia Digital",img:"https://res.cloudinary.com/ghazni/image/upload/v1661323979/Yt-portfolio/ui1_n3uiaz.png",disc:"Este proyecto busca estudiar los patrones de uso de las TIC entre jóvenes en la CDMX para informar políticas públicas y reducir la desigualdad social.",src:"https://www.google.com/"},{desc:"Urbis",img:"https://res.cloudinary.com/ghazni/image/upload/v1661323979/Yt-portfolio/ui1_n3uiaz.png",disc:"UrBis es una plataforma de crowdsourcing desarrollada en el You-i Lab del IPICYT para abordar problemas socio-urbanos en México.",src:"https://www.google.com/"},{desc:"SieNi - PCWO",img:"https://res.cloudinary.com/ghazni/image/upload/v1661323979/Yt-portfolio/ui1_n3uiaz.png",disc:"El objetivo del proyecto liderado por el You-i Lab es desarrollar la plataforma CWO para delimitar cuencas hidrográficas y abordar problemáticas relacionadas con el agua.",src:"https://www.google.com/"},{desc:"Beyond the Street",img:"https://res.cloudinary.com/ghazni/image/upload/v1661323979/Yt-portfolio/ui1_n3uiaz.png",disc:"El objetivo es utilizar el crowdsourcing móvil para motivar a jóvenes marginados a documentar su entorno socio-urbano.",src:"https://www.google.com/"},{desc:"Mi Casa es su Casa",img:"https://res.cloudinary.com/ghazni/image/upload/v1661323979/Yt-portfolio/ui1_n3uiaz.png",disc:"El proyecto busca comprender el uso y percepción de los servicios de alojamiento compartido en países desarrollados y en desarrollo.",src:"https://www.google.com/"},{desc:"Environmental Restoration Perception",img:"https://res.cloudinary.com/ghazni/image/upload/v1661323979/Yt-portfolio/ui1_n3uiaz.png",disc:"Identificar entornos restaurativos en León, Guanajuato y evaluar su efecto en la restauración psicológica a través de evaluaciones móviles.",src:"https://www.google.com/"}];var W5={className:"center",centerMode:!0,dots:!0,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,initialSlide:0,arrows:!1,autoplay:!0,responsive:[{breakpoint:990,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0,dots:!1,centerMode:!1}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2,centerMode:!1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!1}}]};const Y5=()=>{const e=O.useRef(null);let t="";return t=U5.map((n,r)=>y.jsx($5,{item:n},r)),y.jsxs(B5,{children:[y.jsx(Fd,{ref:e,...W5,children:t}),y.jsxs(V5,{children:[y.jsx("button",{onClick:()=>e.current.slickPrev(),className:"back",children:y.jsx(F5,{})}),y.jsx("button",{onClick:()=>e.current.slickNext(),className:"next",children:y.jsx(H5,{})})]})]})},B5=hr.div`
  position: relative;
`,V5=hr.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`;function X5(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function G5(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Q5=function(){function e(n){var r=this;this._insertTag=function(i){var a;r.tags.length===0?r.insertionPoint?a=r.insertionPoint.nextSibling:r.prepend?a=r.container.firstChild:a=r.before:a=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,a),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(G5(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var a=X5(i);try{a.insertRule(r,a.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Ue="-ms-",jl="-moz-",Q="-webkit-",Hy="comm",Hd="rule",Ud="decl",q5="@import",Uy="@keyframes",K5="@layer",Z5=Math.abs,fs=String.fromCharCode,J5=Object.assign;function eC(e,t){return ze(e,0)^45?(((t<<2^ze(e,0))<<2^ze(e,1))<<2^ze(e,2))<<2^ze(e,3):0}function Wy(e){return e.trim()}function tC(e,t){return(e=t.exec(e))?e[0]:e}function q(e,t,n){return e.replace(t,n)}function df(e,t){return e.indexOf(t)}function ze(e,t){return e.charCodeAt(t)|0}function xa(e,t,n){return e.slice(t,n)}function Ft(e){return e.length}function Wd(e){return e.length}function mo(e,t){return t.push(e),e}function nC(e,t){return e.map(t).join("")}var ds=1,li=1,Yy=0,it=0,be=0,hi="";function ps(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:ds,column:li,length:o,return:""}}function Oi(e,t){return J5(ps("",null,null,"",null,null,0),e,{length:-e.length},t)}function rC(){return be}function iC(){return be=it>0?ze(hi,--it):0,li--,be===10&&(li=1,ds--),be}function ut(){return be=it<Yy?ze(hi,it++):0,li++,be===10&&(li=1,ds++),be}function Vt(){return ze(hi,it)}function Mo(){return it}function Ma(e,t){return xa(hi,e,t)}function ba(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function By(e){return ds=li=1,Yy=Ft(hi=e),it=0,[]}function Vy(e){return hi="",e}function zo(e){return Wy(Ma(it-1,pf(e===91?e+2:e===40?e+1:e)))}function aC(e){for(;(be=Vt())&&be<33;)ut();return ba(e)>2||ba(be)>3?"":" "}function oC(e,t){for(;--t&&ut()&&!(be<48||be>102||be>57&&be<65||be>70&&be<97););return Ma(e,Mo()+(t<6&&Vt()==32&&ut()==32))}function pf(e){for(;ut();)switch(be){case e:return it;case 34:case 39:e!==34&&e!==39&&pf(be);break;case 40:e===41&&pf(e);break;case 92:ut();break}return it}function lC(e,t){for(;ut()&&e+be!==47+10;)if(e+be===42+42&&Vt()===47)break;return"/*"+Ma(t,it-1)+"*"+fs(e===47?e:ut())}function sC(e){for(;!ba(Vt());)ut();return Ma(e,it)}function uC(e){return Vy($o("",null,null,null,[""],e=By(e),0,[0],e))}function $o(e,t,n,r,i,a,o,l,s){for(var u=0,c=0,f=o,p=0,g=0,w=0,v=1,x=1,m=1,d=0,h="",S=i,b=a,E=r,k=h;x;)switch(w=d,d=ut()){case 40:if(w!=108&&ze(k,f-1)==58){df(k+=q(zo(d),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:k+=zo(d);break;case 9:case 10:case 13:case 32:k+=aC(w);break;case 92:k+=oC(Mo()-1,7);continue;case 47:switch(Vt()){case 42:case 47:mo(cC(lC(ut(),Mo()),t,n),s);break;default:k+="/"}break;case 123*v:l[u++]=Ft(k)*m;case 125*v:case 59:case 0:switch(d){case 0:case 125:x=0;case 59+c:m==-1&&(k=q(k,/\f/g,"")),g>0&&Ft(k)-f&&mo(g>32?_h(k+";",r,n,f-1):_h(q(k," ","")+";",r,n,f-2),s);break;case 59:k+=";";default:if(mo(E=Ph(k,t,n,u,c,i,l,h,S=[],b=[],f),a),d===123)if(c===0)$o(k,t,E,E,S,a,f,l,b);else switch(p===99&&ze(k,3)===110?100:p){case 100:case 108:case 109:case 115:$o(e,E,E,r&&mo(Ph(e,E,E,0,0,i,l,h,i,S=[],f),b),i,b,f,l,r?S:b);break;default:$o(k,E,E,E,[""],b,0,l,b)}}u=c=g=0,v=m=1,h=k="",f=o;break;case 58:f=1+Ft(k),g=w;default:if(v<1){if(d==123)--v;else if(d==125&&v++==0&&iC()==125)continue}switch(k+=fs(d),d*v){case 38:m=c>0?1:(k+="\f",-1);break;case 44:l[u++]=(Ft(k)-1)*m,m=1;break;case 64:Vt()===45&&(k+=zo(ut())),p=Vt(),c=f=Ft(h=k+=sC(Mo())),d++;break;case 45:w===45&&Ft(k)==2&&(v=0)}}return a}function Ph(e,t,n,r,i,a,o,l,s,u,c){for(var f=i-1,p=i===0?a:[""],g=Wd(p),w=0,v=0,x=0;w<r;++w)for(var m=0,d=xa(e,f+1,f=Z5(v=o[w])),h=e;m<g;++m)(h=Wy(v>0?p[m]+" "+d:q(d,/&\f/g,p[m])))&&(s[x++]=h);return ps(e,t,n,i===0?Hd:l,s,u,c)}function cC(e,t,n){return ps(e,t,n,Hy,fs(rC()),xa(e,2,-2),0)}function _h(e,t,n,r){return ps(e,t,n,Ud,xa(e,0,r),xa(e,r+1,-1),r)}function Yr(e,t){for(var n="",r=Wd(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function fC(e,t,n,r){switch(e.type){case K5:if(e.children.length)break;case q5:case Ud:return e.return=e.return||e.value;case Hy:return"";case Uy:return e.return=e.value+"{"+Yr(e.children,r)+"}";case Hd:e.value=e.props.join(",")}return Ft(n=Yr(e.children,r))?e.return=e.value+"{"+n+"}":""}function dC(e){var t=Wd(e);return function(n,r,i,a){for(var o="",l=0;l<t;l++)o+=e[l](n,r,i,a)||"";return o}}function pC(e){return function(t){t.root||(t=t.return)&&e(t)}}var mC=function(t,n,r){for(var i=0,a=0;i=a,a=Vt(),i===38&&a===12&&(n[r]=1),!ba(a);)ut();return Ma(t,it)},hC=function(t,n){var r=-1,i=44;do switch(ba(i)){case 0:i===38&&Vt()===12&&(n[r]=1),t[r]+=mC(it-1,n,r);break;case 2:t[r]+=zo(i);break;case 4:if(i===44){t[++r]=Vt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=fs(i)}while(i=ut());return t},vC=function(t,n){return Vy(hC(By(t),n))},Nh=new WeakMap,gC=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Nh.get(r))&&!i){Nh.set(t,!0);for(var a=[],o=vC(n,a),l=r.props,s=0,u=0;s<o.length;s++)for(var c=0;c<l.length;c++,u++)t.props[u]=a[s]?o[s].replace(/&\f/g,l[c]):l[c]+" "+o[s]}}},yC=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Xy(e,t){switch(eC(e,t)){case 5103:return Q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Q+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Q+e+jl+e+Ue+e+e;case 6828:case 4268:return Q+e+Ue+e+e;case 6165:return Q+e+Ue+"flex-"+e+e;case 5187:return Q+e+q(e,/(\w+).+(:[^]+)/,Q+"box-$1$2"+Ue+"flex-$1$2")+e;case 5443:return Q+e+Ue+"flex-item-"+q(e,/flex-|-self/,"")+e;case 4675:return Q+e+Ue+"flex-line-pack"+q(e,/align-content|flex-|-self/,"")+e;case 5548:return Q+e+Ue+q(e,"shrink","negative")+e;case 5292:return Q+e+Ue+q(e,"basis","preferred-size")+e;case 6060:return Q+"box-"+q(e,"-grow","")+Q+e+Ue+q(e,"grow","positive")+e;case 4554:return Q+q(e,/([^-])(transform)/g,"$1"+Q+"$2")+e;case 6187:return q(q(q(e,/(zoom-|grab)/,Q+"$1"),/(image-set)/,Q+"$1"),e,"")+e;case 5495:case 3959:return q(e,/(image-set\([^]*)/,Q+"$1$`$1");case 4968:return q(q(e,/(.+:)(flex-)?(.*)/,Q+"box-pack:$3"+Ue+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Q+e+e;case 4095:case 3583:case 4068:case 2532:return q(e,/(.+)-inline(.+)/,Q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ft(e)-1-t>6)switch(ze(e,t+1)){case 109:if(ze(e,t+4)!==45)break;case 102:return q(e,/(.+:)(.+)-([^]+)/,"$1"+Q+"$2-$3$1"+jl+(ze(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~df(e,"stretch")?Xy(q(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ze(e,t+1)!==115)break;case 6444:switch(ze(e,Ft(e)-3-(~df(e,"!important")&&10))){case 107:return q(e,":",":"+Q)+e;case 101:return q(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Q+(ze(e,14)===45?"inline-":"")+"box$3$1"+Q+"$2$3$1"+Ue+"$2box$3")+e}break;case 5936:switch(ze(e,t+11)){case 114:return Q+e+Ue+q(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Q+e+Ue+q(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Q+e+Ue+q(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Q+e+Ue+e+e}return e}var wC=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Ud:t.return=Xy(t.value,t.length);break;case Uy:return Yr([Oi(t,{value:q(t.value,"@","@"+Q)})],i);case Hd:if(t.length)return nC(t.props,function(a){switch(tC(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Yr([Oi(t,{props:[q(a,/:(read-\w+)/,":"+jl+"$1")]})],i);case"::placeholder":return Yr([Oi(t,{props:[q(a,/:(plac\w+)/,":"+Q+"input-$1")]}),Oi(t,{props:[q(a,/:(plac\w+)/,":"+jl+"$1")]}),Oi(t,{props:[q(a,/:(plac\w+)/,Ue+"input-$1")]})],i)}return""})}},SC=[wC],xC=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var x=v.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||SC,a={},o,l=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var x=v.getAttribute("data-emotion").split(" "),m=1;m<x.length;m++)a[x[m]]=!0;l.push(v)});var s,u=[gC,yC];{var c,f=[fC,pC(function(v){c.insert(v)})],p=dC(u.concat(i,f)),g=function(x){return Yr(uC(x),p)};s=function(x,m,d,h){c=d,g(x?x+"{"+m.styles+"}":m.styles),h&&(w.inserted[m.name]=!0)}}var w={key:n,sheet:new Q5({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:s};return w.sheet.hydrate(l),w},Gy={exports:{}},ee={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ie=typeof Symbol=="function"&&Symbol.for,Yd=Ie?Symbol.for("react.element"):60103,Bd=Ie?Symbol.for("react.portal"):60106,ms=Ie?Symbol.for("react.fragment"):60107,hs=Ie?Symbol.for("react.strict_mode"):60108,vs=Ie?Symbol.for("react.profiler"):60114,gs=Ie?Symbol.for("react.provider"):60109,ys=Ie?Symbol.for("react.context"):60110,Vd=Ie?Symbol.for("react.async_mode"):60111,ws=Ie?Symbol.for("react.concurrent_mode"):60111,Ss=Ie?Symbol.for("react.forward_ref"):60112,xs=Ie?Symbol.for("react.suspense"):60113,bC=Ie?Symbol.for("react.suspense_list"):60120,bs=Ie?Symbol.for("react.memo"):60115,ks=Ie?Symbol.for("react.lazy"):60116,kC=Ie?Symbol.for("react.block"):60121,EC=Ie?Symbol.for("react.fundamental"):60117,CC=Ie?Symbol.for("react.responder"):60118,OC=Ie?Symbol.for("react.scope"):60119;function mt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Yd:switch(e=e.type,e){case Vd:case ws:case ms:case vs:case hs:case xs:return e;default:switch(e=e&&e.$$typeof,e){case ys:case Ss:case ks:case bs:case gs:return e;default:return t}}case Bd:return t}}}function Qy(e){return mt(e)===ws}ee.AsyncMode=Vd;ee.ConcurrentMode=ws;ee.ContextConsumer=ys;ee.ContextProvider=gs;ee.Element=Yd;ee.ForwardRef=Ss;ee.Fragment=ms;ee.Lazy=ks;ee.Memo=bs;ee.Portal=Bd;ee.Profiler=vs;ee.StrictMode=hs;ee.Suspense=xs;ee.isAsyncMode=function(e){return Qy(e)||mt(e)===Vd};ee.isConcurrentMode=Qy;ee.isContextConsumer=function(e){return mt(e)===ys};ee.isContextProvider=function(e){return mt(e)===gs};ee.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yd};ee.isForwardRef=function(e){return mt(e)===Ss};ee.isFragment=function(e){return mt(e)===ms};ee.isLazy=function(e){return mt(e)===ks};ee.isMemo=function(e){return mt(e)===bs};ee.isPortal=function(e){return mt(e)===Bd};ee.isProfiler=function(e){return mt(e)===vs};ee.isStrictMode=function(e){return mt(e)===hs};ee.isSuspense=function(e){return mt(e)===xs};ee.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ms||e===ws||e===vs||e===hs||e===xs||e===bC||typeof e=="object"&&e!==null&&(e.$$typeof===ks||e.$$typeof===bs||e.$$typeof===gs||e.$$typeof===ys||e.$$typeof===Ss||e.$$typeof===EC||e.$$typeof===CC||e.$$typeof===OC||e.$$typeof===kC)};ee.typeOf=mt;Gy.exports=ee;var TC=Gy.exports,qy=TC,PC={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_C={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ky={};Ky[qy.ForwardRef]=PC;Ky[qy.Memo]=_C;var NC=!0;function Zy(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Xd=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||NC===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},Jy=function(t,n,r){Xd(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var a=n;do t.insert(n===a?"."+i:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function jC(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var LC=/[A-Z]|^ms/g,AC=/_EMO_([^_]+?)_([^]*?)_EMO_/g,e1=function(t){return t.charCodeAt(1)===45},jh=function(t){return t!=null&&typeof t!="boolean"},_u=D3(function(e){return e1(e)?e:e.replace(LC,"-$&").toLowerCase()}),Lh=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(AC,function(r,i,a){return Ht={name:i,styles:a,next:Ht},i})}return Zg[t]!==1&&!e1(t)&&typeof n=="number"&&n!==0?n+"px":n};function ka(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Ht={name:n.name,styles:n.styles,next:Ht},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Ht={name:r.name,styles:r.styles,next:Ht},r=r.next;var i=n.styles+";";return i}return IC(e,t,n)}case"function":{if(e!==void 0){var a=Ht,o=n(e);return Ht=a,ka(e,t,o)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function IC(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=ka(e,t,n[i])+";";else for(var a in n){var o=n[a];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=a+"{"+t[o]+"}":jh(o)&&(r+=_u(a)+":"+Lh(a,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var l=0;l<o.length;l++)jh(o[l])&&(r+=_u(a)+":"+Lh(a,o[l])+";");else{var s=ka(e,t,o);switch(a){case"animation":case"animationName":{r+=_u(a)+":"+s+";";break}default:r+=a+"{"+s+"}"}}}return r}var Ah=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Ht,Gd=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,a="";Ht=void 0;var o=t[0];o==null||o.raw===void 0?(i=!1,a+=ka(r,n,o)):a+=o[0];for(var l=1;l<t.length;l++)a+=ka(r,n,t[l]),i&&(a+=o[l]);Ah.lastIndex=0;for(var s="",u;(u=Ah.exec(a))!==null;)s+="-"+u[1];var c=jC(a)+s;return{name:c,styles:a,next:Ht}},RC=function(t){return t()},MC=ju["useInsertionEffect"]?ju["useInsertionEffect"]:!1,t1=MC||RC,Qd={}.hasOwnProperty,n1=O.createContext(typeof HTMLElement<"u"?xC({key:"css"}):null);n1.Provider;var r1=function(t){return O.forwardRef(function(n,r){var i=O.useContext(n1);return t(n,i,r)})},i1=O.createContext({}),mf="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",zC=function(t,n){var r={};for(var i in n)Qd.call(n,i)&&(r[i]=n[i]);return r[mf]=t,r},$C=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Xd(n,r,i),t1(function(){return Jy(n,r,i)}),null},DC=r1(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[mf],a=[r],o="";typeof e.className=="string"?o=Zy(t.registered,a,e.className):e.className!=null&&(o=e.className+" ");var l=Gd(a,void 0,O.useContext(i1));o+=t.key+"-"+l.name;var s={};for(var u in e)Qd.call(e,u)&&u!=="css"&&u!==mf&&(s[u]=e[u]);return s.ref=n,s.className=o,O.createElement(O.Fragment,null,O.createElement($C,{cache:t,serialized:l,isStringTag:typeof i=="string"}),O.createElement(i,s))}),FC=DC,HC=y.Fragment;function Ne(e,t,n){return Qd.call(t,"css")?y.jsx(FC,zC(e,t),n):y.jsx(e,t,n)}function a1(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Gd(t)}var _=function(){var t=a1.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},UC=function e(t){for(var n=t.length,r=0,i="";r<n;r++){var a=t[r];if(a!=null){var o=void 0;switch(typeof a){case"boolean":break;case"object":{if(Array.isArray(a))o=e(a);else{o="";for(var l in a)a[l]&&l&&(o&&(o+=" "),o+=l)}break}default:o=a}o&&(i&&(i+=" "),i+=o)}}return i};function WC(e,t,n){var r=[],i=Zy(e,r,n);return r.length<2?n:i+t(r)}var YC=function(t){var n=t.cache,r=t.serializedArr;return t1(function(){for(var i=0;i<r.length;i++)Jy(n,r[i],!1)}),null},Nu=r1(function(e,t){var n=!1,r=[],i=function(){for(var u=arguments.length,c=new Array(u),f=0;f<u;f++)c[f]=arguments[f];var p=Gd(c,t.registered);return r.push(p),Xd(t,p,!1),t.key+"-"+p.name},a=function(){for(var u=arguments.length,c=new Array(u),f=0;f<u;f++)c[f]=arguments[f];return WC(t.registered,i,UC(c))},o={css:i,cx:a,theme:O.useContext(i1)},l=e.children(o);return n=!0,O.createElement(O.Fragment,null,O.createElement(YC,{cache:t,serializedArr:r}),l)}),BC=Object.defineProperty,VC=(e,t,n)=>t in e?BC(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ho=(e,t,n)=>(VC(e,typeof t!="symbol"?t+"":t,n),n),hf=new Map,vo=new WeakMap,Ih=0,XC=void 0;function GC(e){return e?(vo.has(e)||(Ih+=1,vo.set(e,Ih.toString())),vo.get(e)):"0"}function QC(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?GC(e.root):e[t]}`).toString()}function qC(e){let t=QC(e),n=hf.get(t);if(!n){const r=new Map;let i;const a=new IntersectionObserver(o=>{o.forEach(l=>{var s;const u=l.isIntersecting&&i.some(c=>l.intersectionRatio>=c);e.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=u),(s=r.get(l.target))==null||s.forEach(c=>{c(u,l)})})},e);i=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:r},hf.set(t,n)}return n}function o1(e,t,n={},r=XC){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const s=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:i,observer:a,elements:o}=qC(n);let l=o.get(e)||[];return o.has(e)||o.set(e,l),l.push(t),a.observe(e),function(){l.splice(l.indexOf(t),1),l.length===0&&(o.delete(e),a.unobserve(e)),o.size===0&&(a.disconnect(),hf.delete(i))}}function KC(e){return typeof e.children!="function"}var Rh=class extends O.Component{constructor(e){super(e),ho(this,"node",null),ho(this,"_unobserveCb",null),ho(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),ho(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),KC(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i,fallbackInView:a}=this.props;this._unobserveCb=o1(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i},a)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:g,entry:w}=this.state;return e({inView:g,entry:w,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:i,rootMargin:a,onChange:o,skip:l,trackVisibility:s,delay:u,initialInView:c,fallbackInView:f,...p}=this.props;return O.createElement(t||"div",{ref:this.handleNode,...p},e)}};function l1({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:a,skip:o,initialInView:l,fallbackInView:s,onChange:u}={}){var c;const[f,p]=O.useState(null),g=O.useRef(),[w,v]=O.useState({inView:!!l,entry:void 0});g.current=u,O.useEffect(()=>{if(o||!f)return;let h;return h=o1(f,(S,b)=>{v({inView:S,entry:b}),g.current&&g.current(S,b),b.isIntersecting&&a&&h&&(h(),h=void 0)},{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},s),()=>{h&&h()}},[Array.isArray(e)?e.toString():e,f,i,r,a,o,n,s,t]);const x=(c=w.entry)==null?void 0:c.target,m=O.useRef();!f&&x&&!a&&!o&&m.current!==x&&(m.current=x,v({inView:!!l,entry:void 0}));const d=[p,w.inView,w.entry];return d.ref=d[0],d.inView=d[1],d.entry=d[2],d}var s1={exports:{}},te={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd=Symbol.for("react.element"),Kd=Symbol.for("react.portal"),Es=Symbol.for("react.fragment"),Cs=Symbol.for("react.strict_mode"),Os=Symbol.for("react.profiler"),Ts=Symbol.for("react.provider"),Ps=Symbol.for("react.context"),ZC=Symbol.for("react.server_context"),_s=Symbol.for("react.forward_ref"),Ns=Symbol.for("react.suspense"),js=Symbol.for("react.suspense_list"),Ls=Symbol.for("react.memo"),As=Symbol.for("react.lazy"),JC=Symbol.for("react.offscreen"),u1;u1=Symbol.for("react.module.reference");function Et(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case qd:switch(e=e.type,e){case Es:case Os:case Cs:case Ns:case js:return e;default:switch(e=e&&e.$$typeof,e){case ZC:case Ps:case _s:case As:case Ls:case Ts:return e;default:return t}}case Kd:return t}}}te.ContextConsumer=Ps;te.ContextProvider=Ts;te.Element=qd;te.ForwardRef=_s;te.Fragment=Es;te.Lazy=As;te.Memo=Ls;te.Portal=Kd;te.Profiler=Os;te.StrictMode=Cs;te.Suspense=Ns;te.SuspenseList=js;te.isAsyncMode=function(){return!1};te.isConcurrentMode=function(){return!1};te.isContextConsumer=function(e){return Et(e)===Ps};te.isContextProvider=function(e){return Et(e)===Ts};te.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===qd};te.isForwardRef=function(e){return Et(e)===_s};te.isFragment=function(e){return Et(e)===Es};te.isLazy=function(e){return Et(e)===As};te.isMemo=function(e){return Et(e)===Ls};te.isPortal=function(e){return Et(e)===Kd};te.isProfiler=function(e){return Et(e)===Os};te.isStrictMode=function(e){return Et(e)===Cs};te.isSuspense=function(e){return Et(e)===Ns};te.isSuspenseList=function(e){return Et(e)===js};te.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Es||e===Os||e===Cs||e===Ns||e===js||e===JC||typeof e=="object"&&e!==null&&(e.$$typeof===As||e.$$typeof===Ls||e.$$typeof===Ts||e.$$typeof===Ps||e.$$typeof===_s||e.$$typeof===u1||e.getModuleId!==void 0)};te.typeOf=Et;s1.exports=te;var e4=s1.exports;_`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;_`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;_`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;_`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;_`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;_`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;_`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;_`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;_`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;_`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;_`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;_`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;const c1=_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function t4({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=c1,iterationCount:i=1}){return a1`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${i};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function n4(e){return e==null}function r4(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function f1(e,t){return n=>n?e():t()}function Ea(e){return f1(e,()=>null)}function vf(e){return Ea(()=>({opacity:0}))(e)}const d1=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:i=1e3,fraction:a=0,keyframes:o=c1,triggerOnce:l=!1,className:s,style:u,childClassName:c,childStyle:f,children:p,onVisibilityChange:g}=e,w=O.useMemo(()=>t4({keyframes:o,duration:i}),[i,o]);return n4(p)?null:r4(p)?Ne(a4,{...e,animationStyles:w,children:String(p)}):e4.isFragment(p)?Ne(p1,{...e,animationStyles:w}):Ne(HC,{children:O.Children.map(p,(v,x)=>{if(!O.isValidElement(v))return null;const m=r+(t?x*i*n:0);switch(v.type){case"ol":case"ul":return Ne(Nu,{children:({cx:d})=>Ne(v.type,{...v.props,className:d(s,v.props.className),style:Object.assign({},u,v.props.style),children:Ne(d1,{...e,children:v.props.children})})});case"li":return Ne(Rh,{threshold:a,triggerOnce:l,onChange:g,children:({inView:d,ref:h})=>Ne(Nu,{children:({cx:S})=>Ne(v.type,{...v.props,ref:h,className:S(c,v.props.className),css:Ea(()=>w)(d),style:Object.assign({},f,v.props.style,vf(!d),{animationDelay:m+"ms"})})})});default:return Ne(Rh,{threshold:a,triggerOnce:l,onChange:g,children:({inView:d,ref:h})=>Ne("div",{ref:h,className:s,css:Ea(()=>w)(d),style:Object.assign({},u,vf(!d),{animationDelay:m+"ms"}),children:Ne(Nu,{children:({cx:S})=>Ne(v.type,{...v.props,className:S(c,v.props.className),style:Object.assign({},f,v.props.style)})})})})}})})},i4={display:"inline-block",whiteSpace:"pre"},a4=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:i=0,duration:a=1e3,fraction:o=0,triggerOnce:l=!1,className:s,style:u,children:c,onVisibilityChange:f}=e,{ref:p,inView:g}=l1({triggerOnce:l,threshold:o,onChange:f});return f1(()=>Ne("div",{ref:p,className:s,style:Object.assign({},u,i4),children:c.split("").map((w,v)=>Ne("span",{css:Ea(()=>t)(g),style:{animationDelay:i+v*a*r+"ms"},children:w},v))}),()=>Ne(p1,{...e,children:c}))(n)},p1=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:i,style:a,children:o,onVisibilityChange:l}=e,{ref:s,inView:u}=l1({triggerOnce:r,threshold:n,onChange:l});return Ne("div",{ref:s,className:i,css:Ea(()=>t)(u),style:Object.assign({},a,vf(!u)),children:o})};_`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;_`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;_`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;_`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;_`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`;_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`;_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`;_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;_`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;_`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;_`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;_`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;_`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;_`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;_`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;_`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;const o4=_`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,l4=_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,s4=_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,u4=_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,c4=_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,f4=_`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,d4=_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,p4=_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,m4=_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,h4=_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function v4(e,t){switch(t){case"down":return e?d4:l4;case"left":return e?p4:s4;case"right":return e?m4:u4;case"up":return e?h4:c4;default:return e?f4:o4}}const g4=e=>{const{direction:t,reverse:n=!1,...r}=e,i=O.useMemo(()=>v4(n,t),[t,n]);return Ne(d1,{keyframes:i,...r})};const y4=()=>y.jsxs(w4,{id:"project",children:[y.jsxs(g4,{children:[y.jsxs("h1",{className:"green recent",children:["Proyectos ",y.jsx("span",{className:"text-white",children:"Recientes"})]}),y.jsx("p",{className:"text-white des",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto doloremque voluptate excepturi porro sed totam quis animi dolorum rerum earum."})]}),y.jsx(S4,{children:y.jsx(Y5,{})})]}),w4=hr.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    position: relative;
    @media(max-width: 840px){
        width: 90%;
    }
    .recent{
        font-size: 3.6rem;
    }

    .des{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
    
`,S4=hr.div``;const x4="/you-ilab/assets/balvi-8fb583c3.png",b4="/you-ilab/assets/CEMOBILI-409f19a4.png",k4="/you-ilab/assets/CSE-51f2f674.png",E4="/you-ilab/assets/idiap-9dc40942.png",C4="/you-ilab/assets/salud-a0ee33b9.png",O4="/you-ilab/assets/USP-5350bb39.png",T4="/you-ilab/assets/WeNet-b8efc784.png",P4=()=>{const e={dots:!1,infinite:!0,speed:500,slidesToShow:6,slidesToScroll:1,initialSlide:0,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]},t=[{id:1,src:x4,alt:"Balvi",url:"https://www.balvi.io/"},{id:2,src:b4,alt:"Ce Mobili",url:"url-de-la-pagina-2"},{id:3,src:k4,alt:"CSE",url:"https://postgrad.cse.uom.lk/"},{id:4,src:E4,alt:"idiap",url:"https://www.idiap.ch/en"},{id:5,src:C4,alt:"Secretaria de salud",url:"https://slp.gob.mx/ssalud/Paginas/Inicio.aspx"},{id:6,src:O4,alt:"USP",url:"https://www-l2ti.univ-paris13.fr/"},{id:7,src:T4,alt:"WeNet",url:"https://www.internetofus.eu/"}];return y.jsxs("div",{className:"mb-16 ml-2",children:[y.jsx("h2",{className:"text-center text-aliados mb-10 mt-12",children:"Aliados"}),y.jsx(Fd,{...e,children:t.map(n=>y.jsx("div",{children:y.jsx("a",{href:n.url,target:"_blank",rel:"noopener noreferrer",children:y.jsx("img",{src:n.src,alt:n.alt,className:"carousel-image"})})},n.id))})]})},_4="/you-ilab/assets/YOU_I_ LAB_WHITE_LOGO-a55ea267.png",N4="/you-ilab/assets/DBM_WHITE_LOGO-2050160d.png",j4="/you-ilab/assets/IPICYT-07e17331.png",L4="/you-ilab/assets/GCIC-c3968fc2.png",A4=hr.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`,I4=()=>y.jsxs("div",{className:"container-fluid",children:[y.jsx(Zr,{children:y.jsx("title",{children:"Home | You-i Lab"})}),y.jsx(A4,{children:y.jsx(y4,{})}),y.jsx(P4,{}),y.jsx("div",{className:"sponser-area pt-100 pb-100",children:y.jsx("div",{className:"container text-center",children:y.jsxs("div",{className:"flex justify-center",children:[y.jsx("div",{className:"singel-brand-item ml-10",children:y.jsx("a",{href:"",className:"mr-3",children:y.jsx("img",{src:_4,alt:"",className:"w-24 h-auto"})})}),y.jsx("div",{className:"singel-brand-item ml-16",children:y.jsx("a",{href:"",className:"mr-3",children:y.jsx("img",{src:N4,alt:"",className:"w-24 h-auto"})})}),y.jsx("div",{className:"singel-brand-item ml-16",children:y.jsx("a",{href:"",className:"mr-3",children:y.jsx("img",{src:L4,alt:"",className:"w-24 h-auto"})})}),y.jsx("div",{className:"singel-brand-item ml-16",children:y.jsx("a",{href:"",children:y.jsx("img",{src:j4,alt:"",className:"w-24 h-auto"})})})]})})})]}),R4="/you-ilab/assets/team-7ca043f7.jpg",M4="/you-ilab/assets/salvador-6b27ea7b.jpg",z4="/you-ilab/assets/viridiana-20955cfa.jpg",$4="/you-ilab/assets/lourdes-aad042a3.jpg",D4="/you-ilab/assets/miguel-9f8e05c5.jpg",F4="/you-ilab/assets/juanjo-454c853d.jpg",H4=[{id:1,name:"Salvador Ruíz Correa",profession:"Doctor en Ingeniería Eléctrica",text:"Salvador Ruiz-Correa tiene los grados de licenciatura y maestría en Ingeniería Eléctrica de la Universidad Nacional Autónoma de México y el de doctorado de la Universidad de Washington en Seattle. Sus intereses se centran en aplicaciones de inteligencia artificial y computación ubicua para el bien social en el Sur Global, con énfasis en México. En el IPICYT es investigador del Centro Nacional de Supercómputo (CNS), director del You-i Lab, miembro del Grupo de Ciencia e Ingeniería Computacional y Coordinador del Diplomado de Inteligencia Artificial Aplicada del CNS. Participa como responsable en México del consorcio WeNet de la Comunidad Europea y organiza la iniciativa de investigación CeMobili con investigadores del IDIAP Research Institute en Suiza.",showMore:!1,image:M4},{id:2,name:"Viridiana del Carmen Robledo Valero",profession:"Maestra en Salud Pública",text:"Viridiana del Carmen Robledo-Valero es Licenciada en Ciencias Ambientales por la Universidad Autónoma de San Luis Potosí y Maestra en Salud Pública por el Instituto Nacional de Salud Pública (INSP, México). Actualmente es estudiante de doctorado del INSP y directora ejecutiva del You-i Lab. Se enfoca en administrar proyectos de salud pública que abordan problemas de salud ambiental y desarrollar plataformas digitales de vigilancia epidemiológica automatizada para la evaluación integrada de riesgos a la salud en comunidades mexicanas.",showMore:!1,image:z4},{id:3,name:"María de Lourdes Mendoza Flores",profession:"Maestra en Salud Pública",text:"Dedicada a la identificación de la distribución y determinantes de salud mediante metodología epidemiológica para la toma de decisiones.",showMore:!1,image:$4},{id:4,name:"Miguel Ángel Martínez Hernández",profession:"Ingeniero en Telecomunicaciones",text:"Miguel Angel Martinez-Hernandez, Ingeniero en Telecomunicaciones de la Universidad Autónoma de San Luis Potosí, es especialista en desarrollo web y Líder de Software en el Youth Innovation Laboratory (You-i Lab).",showMore:!1,image:D4},{id:5,name:"Juan José Domínguez Pérez",profession:"Ingeniero en Sistemas Inteligentes",text:"Juan José Domínguez Pérez tiene el grado de Ingeniería de Sistemas Inteligentes por la Universidad Autónoma de San Luis Potosí. Es asociado de investigación y programador del You-i Lab del IPICYT.",showMore:!1,image:F4}],U4=()=>{const[e,t]=O.useState(H4),n={dots:!0,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,initialSlide:0,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,dots:!1}}]},r=i=>{t(a=>a.map(o=>o.id===i?{...o,showMore:!o.showMore}:{...o,showMore:!1}))};return y.jsx(Fd,{...n,children:e.map(i=>y.jsxs("div",{className:"w-64 h-56 bg-white border mb-10 mt-2 mr-4",children:[y.jsxs("div",{className:"flex items-start justify-start px-4 pt-10 mb-5",children:[y.jsx("img",{className:"w-32 h-32 mb-3 rounded-full shadow-lg",src:i.image||"viridiana",alt:`${i.name} image`}),y.jsxs("div",{className:"flex flex-col ml-4",children:[y.jsx("h5",{className:"mb-1 text-2xl font-normal text-gray-500 dark:text-gray-400 self-start",children:i.name}),y.jsx("span",{className:"text-lg text-gray-500 dark:text-gray-400 self-start h-full",children:i.profession}),y.jsx("div",{className:"flex justify-start",children:y.jsxs("button",{className:"inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2",onClick:()=>r(i.id),children:[y.jsx("i",{className:`fa ${i.showMore?"fa-chevron-circle-up":"fa-chevron-circle-down"}`}),y.jsx("span",{className:"mr-1 ml-2",children:"More"})]})})]})]}),i.showMore&&y.jsx("div",{className:"p-4 bg-gray-100 dark:bg-gray-800 rounded mt-5",children:y.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:i.text})})]},i.id))})},W4=()=>y.jsxs("div",{className:"about_container",children:[y.jsx(Zr,{children:y.jsx("title",{children:"About us | You-i Lab"})}),y.jsx("div",{className:"about",children:y.jsx("div",{className:"container-fluid p-12 bg-slate-500 w-full h-full",children:y.jsx("h2",{className:"text-right text-5xl text-white nosotros mr-24",children:"Nosotros"})})}),y.jsx("div",{className:"lg:ml-40 ml-10 ",children:y.jsxs("div",{className:"row",children:[y.jsxs("div",{className:"flex flex-col md:flex-row mt-8 mb-5",children:[y.jsxs("div",{className:"about_content md:mr-20",children:[y.jsxs("h2",{className:"section_title text-5xl sm:text-2xl md:text-md lg:text-4xl xl:text-5xl mb-8 lg:mb-10 text-dark-blue",children:["Youth Innovation ",y.jsx("br",{})," Laboratory"]}),y.jsx("div",{className:"about-left",children:y.jsx("p",{className:"max-w-xs sm:max-w-md md:max-w-lg lg:max-h-lg xl:max-w-2xl",children:"El Youth Innovation Laboratory (You-i Lab) es una iniciativa desde el Instituto Potosino de Investigación Científica y Tecnológica (IPICYT) sin precedentes que sienta las bases para una participación de la población joven del país en la resolución de problemas sociales para beneficio de un mejor mañana."})})]}),y.jsx("div",{className:"about_content md:mr-52",children:y.jsx("div",{className:"about-left",children:y.jsx("img",{src:R4,className:"max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl",alt:"Team"})})})]}),y.jsxs("div",{className:"flex flex-col md:flex-row mt-8 mb-5",children:[y.jsxs("div",{className:"about_content2 mr-8",children:[y.jsx("h2",{className:"section mb-8 text-dark-blue",children:"Misión"}),y.jsx("p",{className:"max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl",children:"Empoderar a la juventud a través del uso de las tecnologías de la información y la comunicación en el contexto de proyectos de impacto social."})]}),y.jsxs("div",{className:"about_content3 mr-8 ",children:[y.jsx("h2",{className:"section mb-8 text-dark-blue",children:"Visión"}),y.jsx("p",{className:"max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl",children:"Contar con los mejores talentos y creativos interesados en gestionar y ejecutar proyectos interdisciplinarios innovadores centrados en el bienestar social."})]})]}),y.jsxs("div",{className:"about_content md:mr-52",children:[y.jsx("h2",{className:"section_title text-5xl mb-10 text-dark-blue",children:"Historia"}),y.jsx("div",{className:"about-left",children:y.jsx("p",{className:"mb-4",children:'El laboratorio You+i del IPICYT (Instituto Potosino de Investigación Científica y Tecnológica) se fundó en 2013 con el objetivo de investigar y desarrollar tecnologías relacionadas con la interacción humano-máquina. Su nombre proviene de la combinación de la palabra "you" que hace referencia al usuario y la letra "i" de interfaz, buscando crear una "yuxtaposición" entre los seres humanos y la tecnología, a través del diseño de interfaces intuitivas y eficientes que mejoren la experiencia del usuario. Desde entonces, el laboratorio ha colaborado en diversos proyectos de investigación e innovación en este campo.'})})]}),y.jsxs("div",{className:"content_team md:mr-20 mb-10",children:[y.jsx("div",{className:"content",children:y.jsx("div",{className:"title_team",children:y.jsx("h2",{className:"inherit vertical-align about_us",children:"NUESTRO EQUIPO DE TRABAJO"})})}),y.jsx(U4,{})]})]})})]}),Y4=()=>y.jsxs("div",{className:"projects_container",children:[y.jsx(Zr,{children:y.jsx("title",{children:"Projects | You-i Lab"})}),y.jsx("div",{className:"projects_search",children:y.jsx("div",{className:"container-fluid p-14 bg-slate-500 w-full h-full",children:y.jsx("h2",{className:"text-right text-5xl text-white nosotros mr-24",children:"Proyectos"})})}),y.jsx("div",{className:"projects_title text-center",children:y.jsx("h1",{children:"PROYECTOS"})}),y.jsx("div",{className:"cards text-black"})]});const B4=()=>y.jsxs("div",{className:"contact-container mb-5",children:[y.jsxs("h1",{className:"logo c1",children:["Contact ",y.jsx("span",{children:"Us"})]}),y.jsxs("div",{className:"contact-wrapper animated bounceInUp",children:[y.jsxs("div",{className:"contact-form",children:[y.jsx("h3",{className:"c3",children:"Contact us"}),y.jsxs("form",{action:"",method:"POST",children:[y.jsxs("div",{className:"grid-2-cols",children:[y.jsxs("p",{children:[y.jsx("label",{children:"FullName"}),y.jsx("input",{type:"text",name:"fullname"})]}),y.jsxs("p",{children:[y.jsx("label",{children:"Email Adress"}),y.jsx("input",{type:"email",name:"email"})]})]}),y.jsxs("div",{className:"grid-2-cols",children:[y.jsxs("p",{children:[y.jsx("label",{children:"Phone Number"}),y.jsx("input",{type:"tel",name:"phone"})]}),y.jsxs("p",{children:[y.jsx("label",{children:"Company"}),y.jsx("input",{type:"text",name:"affair"})]})]}),y.jsxs("p",{className:"block",children:[y.jsx("label",{children:"Message"}),y.jsx("textarea",{name:"message",rows:"3"})]}),y.jsx("p",{className:"block",children:y.jsx("button",{children:"Send"})})]})]}),y.jsxs("div",{className:"contact-info",children:[y.jsx("h4",{className:"c4",children:"More Info"}),y.jsxs("ul",{children:[y.jsxs("li",{children:[y.jsx("i",{className:"fas fa-map-marker-alt"})," Camino a la Presa San José 2055, ",y.jsx("br",{}),"Lomas 4 sección San Luis Potosí, 78216 SLP, México"]}),y.jsxs("li",{children:[y.jsx("i",{className:"fas fa-phone"})," (444) 834-2000 ext. 2117"]}),y.jsxs("li",{children:[y.jsx("i",{className:"fas fa-envelope-open-text"})," you-i.lab@ipicyt.edu.mx"]})]}),y.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident ipsam necessitatibus repellendus?"}),y.jsx("p",{children:y.jsx("a",{href:"https://www.ipicyt.edu.mx/",className:"text-white",target:"_blanck",children:"ipicyt.edu.mx"})}),y.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3695.3774471537113!2d-101.03576!3d22.1497!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842a98c8d0777cff%3A0x8ed9d9a98ee5ca91!2sInstituto%20Potosino%20de%20Investigaci%C3%B3n%20Cient%C3%ADfica%20y%20Tecnol%C3%B3gica!5e0!3m2!1sen!2smx!4v1689109636400!5m2!1sen!2smx",width:"500",height:"250"})]})]})]});function V4(){return y.jsx(_b,{children:y.jsxs("div",{className:"App",children:[y.jsx(Zr,{children:y.jsx("title",{children:"You-i Lab | Youth Innovation Laboratory"})}),y.jsx(Fb,{}),y.jsx("div",{className:"content",children:y.jsxs(kb,{children:[y.jsx(ji,{path:"/you-ilab/",element:y.jsx(I4,{})}),y.jsx(ji,{path:"/you-ilab/about",element:y.jsx(W4,{})}),y.jsx(ji,{path:"/you-ilab/projects",element:y.jsx(Y4,{})}),y.jsx(ji,{path:"/you-ilab/contact",element:y.jsx(B4,{})})]})}),y.jsx($3,{})]})})}HS.render(y.jsx(we.StrictMode,{children:y.jsx(V4,{})}),document.getElementById("root"));
