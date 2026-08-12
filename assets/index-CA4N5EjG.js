function Jb(e,t){for(var o=0;o<t.length;o++){const s=t[o];if(typeof s!="string"&&!Array.isArray(s)){for(const i in s)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(s,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>s[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function o(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=o(i);fetch(i.href,l)}})();function Gy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yu={exports:{}},Os={},vu={exports:{}},Se={};var Rm;function Gb(){if(Rm)return Se;Rm=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,k={};function C(N,B,Q){this.props=N,this.context=B,this.refs=k,this.updater=Q||w}C.prototype.isReactComponent={},C.prototype.setState=function(N,B){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,B,"setState")},C.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function E(){}E.prototype=C.prototype;function M(N,B,Q){this.props=N,this.context=B,this.refs=k,this.updater=Q||w}var P=M.prototype=new E;P.constructor=M,R(P,C.prototype),P.isPureReactComponent=!0;var D=Array.isArray,I=Object.prototype.hasOwnProperty,H={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function Y(N,B,Q){var ne,pe={},xe=null,ue=null;if(B!=null)for(ne in B.ref!==void 0&&(ue=B.ref),B.key!==void 0&&(xe=""+B.key),B)I.call(B,ne)&&!z.hasOwnProperty(ne)&&(pe[ne]=B[ne]);var ke=arguments.length-2;if(ke===1)pe.children=Q;else if(1<ke){for(var Te=Array(ke),$e=0;$e<ke;$e++)Te[$e]=arguments[$e+2];pe.children=Te}if(N&&N.defaultProps)for(ne in ke=N.defaultProps,ke)pe[ne]===void 0&&(pe[ne]=ke[ne]);return{$$typeof:e,type:N,key:xe,ref:ue,props:pe,_owner:H.current}}function ie(N,B){return{$$typeof:e,type:N.type,key:B,ref:N.ref,props:N.props,_owner:N._owner}}function le(N){return typeof N=="object"&&N!==null&&N.$$typeof===e}function fe(N){var B={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Q){return B[Q]})}var ee=/\/+/g;function ge(N,B){return typeof N=="object"&&N!==null&&N.key!=null?fe(""+N.key):B.toString(36)}function K(N,B,Q,ne,pe){var xe=typeof N;(xe==="undefined"||xe==="boolean")&&(N=null);var ue=!1;if(N===null)ue=!0;else switch(xe){case"string":case"number":ue=!0;break;case"object":switch(N.$$typeof){case e:case t:ue=!0}}if(ue)return ue=N,pe=pe(ue),N=ne===""?"."+ge(ue,0):ne,D(pe)?(Q="",N!=null&&(Q=N.replace(ee,"$&/")+"/"),K(pe,B,Q,"",function($e){return $e})):pe!=null&&(le(pe)&&(pe=ie(pe,Q+(!pe.key||ue&&ue.key===pe.key?"":(""+pe.key).replace(ee,"$&/")+"/")+N)),B.push(pe)),1;if(ue=0,ne=ne===""?".":ne+":",D(N))for(var ke=0;ke<N.length;ke++){xe=N[ke];var Te=ne+ge(xe,ke);ue+=K(xe,B,Q,Te,pe)}else if(Te=S(N),typeof Te=="function")for(N=Te.call(N),ke=0;!(xe=N.next()).done;)xe=xe.value,Te=ne+ge(xe,ke++),ue+=K(xe,B,Q,Te,pe);else if(xe==="object")throw B=String(N),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return ue}function ve(N,B,Q){if(N==null)return N;var ne=[],pe=0;return K(N,ne,"","",function(xe){return B.call(Q,xe,pe++)}),ne}function ce(N){if(N._status===-1){var B=N._result;B=B(),B.then(function(Q){(N._status===0||N._status===-1)&&(N._status=1,N._result=Q)},function(Q){(N._status===0||N._status===-1)&&(N._status=2,N._result=Q)}),N._status===-1&&(N._status=0,N._result=B)}if(N._status===1)return N._result.default;throw N._result}var X={current:null},W={transition:null},U={ReactCurrentDispatcher:X,ReactCurrentBatchConfig:W,ReactCurrentOwner:H};function _(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:ve,forEach:function(N,B,Q){ve(N,function(){B.apply(this,arguments)},Q)},count:function(N){var B=0;return ve(N,function(){B++}),B},toArray:function(N){return ve(N,function(B){return B})||[]},only:function(N){if(!le(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},Se.Component=C,Se.Fragment=o,Se.Profiler=i,Se.PureComponent=M,Se.StrictMode=s,Se.Suspense=f,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,Se.act=_,Se.cloneElement=function(N,B,Q){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var ne=R({},N.props),pe=N.key,xe=N.ref,ue=N._owner;if(B!=null){if(B.ref!==void 0&&(xe=B.ref,ue=H.current),B.key!==void 0&&(pe=""+B.key),N.type&&N.type.defaultProps)var ke=N.type.defaultProps;for(Te in B)I.call(B,Te)&&!z.hasOwnProperty(Te)&&(ne[Te]=B[Te]===void 0&&ke!==void 0?ke[Te]:B[Te])}var Te=arguments.length-2;if(Te===1)ne.children=Q;else if(1<Te){ke=Array(Te);for(var $e=0;$e<Te;$e++)ke[$e]=arguments[$e+2];ne.children=ke}return{$$typeof:e,type:N.type,key:pe,ref:xe,props:ne,_owner:ue}},Se.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},Se.createElement=Y,Se.createFactory=function(N){var B=Y.bind(null,N);return B.type=N,B},Se.createRef=function(){return{current:null}},Se.forwardRef=function(N){return{$$typeof:d,render:N}},Se.isValidElement=le,Se.lazy=function(N){return{$$typeof:y,_payload:{_status:-1,_result:N},_init:ce}},Se.memo=function(N,B){return{$$typeof:m,type:N,compare:B===void 0?null:B}},Se.startTransition=function(N){var B=W.transition;W.transition={};try{N()}finally{W.transition=B}},Se.unstable_act=_,Se.useCallback=function(N,B){return X.current.useCallback(N,B)},Se.useContext=function(N){return X.current.useContext(N)},Se.useDebugValue=function(){},Se.useDeferredValue=function(N){return X.current.useDeferredValue(N)},Se.useEffect=function(N,B){return X.current.useEffect(N,B)},Se.useId=function(){return X.current.useId()},Se.useImperativeHandle=function(N,B,Q){return X.current.useImperativeHandle(N,B,Q)},Se.useInsertionEffect=function(N,B){return X.current.useInsertionEffect(N,B)},Se.useLayoutEffect=function(N,B){return X.current.useLayoutEffect(N,B)},Se.useMemo=function(N,B){return X.current.useMemo(N,B)},Se.useReducer=function(N,B,Q){return X.current.useReducer(N,B,Q)},Se.useRef=function(N){return X.current.useRef(N)},Se.useState=function(N){return X.current.useState(N)},Se.useSyncExternalStore=function(N,B,Q){return X.current.useSyncExternalStore(N,B,Q)},Se.useTransition=function(){return X.current.useTransition()},Se.version="18.3.1",Se}var Tm;function Ud(){return Tm||(Tm=1,vu.exports=Gb()),vu.exports}var Em;function Kb(){if(Em)return Os;Em=1;var e=Ud(),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,m){var y,v={},S=null,w=null;m!==void 0&&(S=""+m),f.key!==void 0&&(S=""+f.key),f.ref!==void 0&&(w=f.ref);for(y in f)s.call(f,y)&&!l.hasOwnProperty(y)&&(v[y]=f[y]);if(d&&d.defaultProps)for(y in f=d.defaultProps,f)v[y]===void 0&&(v[y]=f[y]);return{$$typeof:t,type:d,key:S,ref:w,props:v,_owner:i.current}}return Os.Fragment=o,Os.jsx=u,Os.jsxs=u,Os}var Pm;function Xb(){return Pm||(Pm=1,yu.exports=Kb()),yu.exports}var p=Xb(),Ii={},wu={exports:{}},Et={},xu={exports:{}},bu={};var Mm;function Qb(){return Mm||(Mm=1,(function(e){function t(W,U){var _=W.length;W.push(U);e:for(;0<_;){var N=_-1>>>1,B=W[N];if(0<i(B,U))W[N]=U,W[_]=B,_=N;else break e}}function o(W){return W.length===0?null:W[0]}function s(W){if(W.length===0)return null;var U=W[0],_=W.pop();if(_!==U){W[0]=_;e:for(var N=0,B=W.length,Q=B>>>1;N<Q;){var ne=2*(N+1)-1,pe=W[ne],xe=ne+1,ue=W[xe];if(0>i(pe,_))xe<B&&0>i(ue,pe)?(W[N]=ue,W[xe]=_,N=xe):(W[N]=pe,W[ne]=_,N=ne);else if(xe<B&&0>i(ue,_))W[N]=ue,W[xe]=_,N=xe;else break e}}return U}function i(W,U){var _=W.sortIndex-U.sortIndex;return _!==0?_:W.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();e.unstable_now=function(){return u.now()-d}}var f=[],m=[],y=1,v=null,S=3,w=!1,R=!1,k=!1,C=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(W){for(var U=o(m);U!==null;){if(U.callback===null)s(m);else if(U.startTime<=W)s(m),U.sortIndex=U.expirationTime,t(f,U);else break;U=o(m)}}function D(W){if(k=!1,P(W),!R)if(o(f)!==null)R=!0,ce(I);else{var U=o(m);U!==null&&X(D,U.startTime-W)}}function I(W,U){R=!1,k&&(k=!1,E(Y),Y=-1),w=!0;var _=S;try{for(P(U),v=o(f);v!==null&&(!(v.expirationTime>U)||W&&!fe());){var N=v.callback;if(typeof N=="function"){v.callback=null,S=v.priorityLevel;var B=N(v.expirationTime<=U);U=e.unstable_now(),typeof B=="function"?v.callback=B:v===o(f)&&s(f),P(U)}else s(f);v=o(f)}if(v!==null)var Q=!0;else{var ne=o(m);ne!==null&&X(D,ne.startTime-U),Q=!1}return Q}finally{v=null,S=_,w=!1}}var H=!1,z=null,Y=-1,ie=5,le=-1;function fe(){return!(e.unstable_now()-le<ie)}function ee(){if(z!==null){var W=e.unstable_now();le=W;var U=!0;try{U=z(!0,W)}finally{U?ge():(H=!1,z=null)}}else H=!1}var ge;if(typeof M=="function")ge=function(){M(ee)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,ve=K.port2;K.port1.onmessage=ee,ge=function(){ve.postMessage(null)}}else ge=function(){C(ee,0)};function ce(W){z=W,H||(H=!0,ge())}function X(W,U){Y=C(function(){W(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(W){W.callback=null},e.unstable_continueExecution=function(){R||w||(R=!0,ce(I))},e.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<W?Math.floor(1e3/W):5},e.unstable_getCurrentPriorityLevel=function(){return S},e.unstable_getFirstCallbackNode=function(){return o(f)},e.unstable_next=function(W){switch(S){case 1:case 2:case 3:var U=3;break;default:U=S}var _=S;S=U;try{return W()}finally{S=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(W,U){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var _=S;S=W;try{return U()}finally{S=_}},e.unstable_scheduleCallback=function(W,U,_){var N=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?N+_:N):_=N,W){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=_+B,W={id:y++,callback:U,priorityLevel:W,startTime:_,expirationTime:B,sortIndex:-1},_>N?(W.sortIndex=_,t(m,W),o(f)===null&&W===o(m)&&(k?(E(Y),Y=-1):k=!0,X(D,_-N))):(W.sortIndex=B,t(f,W),R||w||(R=!0,ce(I))),W},e.unstable_shouldYield=fe,e.unstable_wrapCallback=function(W){var U=S;return function(){var _=S;S=U;try{return W.apply(this,arguments)}finally{S=_}}}})(bu)),bu}var Am;function Zb(){return Am||(Am=1,xu.exports=Qb()),xu.exports}var Im;function e2(){if(Im)return Et;Im=1;var e=Ud(),t=Zb();function o(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,i={};function l(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(i[n]=r,n=0;n<r.length;n++)s.add(r[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},v={};function S(n){return f.call(v,n)?!0:f.call(y,n)?!1:m.test(n)?v[n]=!0:(y[n]=!0,!1)}function w(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function R(n,r,a,c){if(r===null||typeof r>"u"||w(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function k(n,r,a,c,h,g,b){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=g,this.removeEmptyString=b}var C={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){C[n]=new k(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];C[r]=new k(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){C[n]=new k(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){C[n]=new k(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){C[n]=new k(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){C[n]=new k(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){C[n]=new k(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){C[n]=new k(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){C[n]=new k(n,5,!1,n.toLowerCase(),null,!1,!1)});var E=/[\-:]([a-z])/g;function M(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(E,M);C[r]=new k(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(E,M);C[r]=new k(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(E,M);C[r]=new k(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){C[n]=new k(n,1,!1,n.toLowerCase(),null,!1,!1)}),C.xlinkHref=new k("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){C[n]=new k(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,r,a,c){var h=C.hasOwnProperty(r)?C[r]:null;(h!==null?h.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(R(r,a,h,c)&&(a=null),c||h===null?S(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(r=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(r):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var D=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),H=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),ie=Symbol.for("react.profiler"),le=Symbol.for("react.provider"),fe=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),ge=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),ve=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),W=Symbol.iterator;function U(n){return n===null||typeof n!="object"?null:(n=W&&n[W]||n["@@iterator"],typeof n=="function"?n:null)}var _=Object.assign,N;function B(n){if(N===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);N=r&&r[1]||""}return`
`+N+n}var Q=!1;function ne(n,r){if(!n||Q)return"";Q=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var c=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){c=F}n.call(r.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var h=F.stack.split(`
`),g=c.stack.split(`
`),b=h.length-1,T=g.length-1;1<=b&&0<=T&&h[b]!==g[T];)T--;for(;1<=b&&0<=T;b--,T--)if(h[b]!==g[T]){if(b!==1||T!==1)do if(b--,T--,0>T||h[b]!==g[T]){var A=`
`+h[b].replace(" at new "," at ");return n.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",n.displayName)),A}while(1<=b&&0<=T);break}}}finally{Q=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?B(n):""}function pe(n){switch(n.tag){case 5:return B(n.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return n=ne(n.type,!1),n;case 11:return n=ne(n.type.render,!1),n;case 1:return n=ne(n.type,!0),n;default:return""}}function xe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case z:return"Fragment";case H:return"Portal";case ie:return"Profiler";case Y:return"StrictMode";case ge:return"Suspense";case K:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case fe:return(n.displayName||"Context")+".Consumer";case le:return(n._context.displayName||"Context")+".Provider";case ee:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ve:return r=n.displayName||null,r!==null?r:xe(n.type)||"Memo";case ce:r=n._payload,n=n._init;try{return xe(n(r))}catch{}}return null}function ue(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(r);case 8:return r===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ke(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Te(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function $e(n){var r=Te(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return h.call(this)},set:function(b){c=""+b,g.call(this,b)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Ot(n){n._valueTracker||(n._valueTracker=$e(n))}function $n(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=Te(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Lt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Gr(n,r){var a=r.checked;return _({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ya(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=ke(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Kr(n,r){r=r.checked,r!=null&&P(n,"checked",r,!1)}function Xr(n,r){Kr(n,r);var a=ke(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Qr(n,r.type,a):r.hasOwnProperty("defaultValue")&&Qr(n,r.type,ke(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Zo(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Qr(n,r,a){(r!=="number"||Lt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Yn=Array.isArray;function Ft(n,r,a,c){if(n=n.options,r){r={};for(var h=0;h<a.length;h++)r["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=r.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+ke(a),r=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}r!==null||n[h].disabled||(r=n[h])}r!==null&&(r.selected=!0)}}function er(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(o(91));return _({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function un(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(o(92));if(Yn(a)){if(1<a.length)throw Error(o(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:ke(a)}}function va(n,r){var a=ke(r.value),c=ke(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function wa(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function ht(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dn(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?ht(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var tr,xa=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,h)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(tr=tr||document.createElement("div"),tr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=tr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function hn(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ba=["Webkit","ms","Moz","O"];Object.keys(Eo).forEach(function(n){ba.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Eo[r]=Eo[n]})});function nr(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Eo.hasOwnProperty(n)&&Eo[n]?(""+r).trim():r+"px"}function An(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=nr(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var Sa=_({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pn(n,r){if(r){if(Sa[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(o(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(o(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(o(61))}if(r.style!=null&&typeof r.style!="object")throw Error(o(62))}}function Zr(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var es=null;function or(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var rr=null,Jn=null,fn=null;function Yt(n){if(n=xs(n)){if(typeof rr!="function")throw Error(o(280));var r=n.stateNode;r&&(r=$a(r),rr(n.stateNode,n.type,r))}}function ka(n){Jn?fn?fn.push(n):fn=[n]:Jn=n}function ye(){if(Jn){var n=Jn,r=fn;if(fn=Jn=null,Yt(n),r)for(n=0;n<r.length;n++)Yt(r[n])}}function Pe(n,r){return n(r)}function Ie(){}var pt=!1;function xt(n,r,a){if(pt)return n(r,a);pt=!0;try{return Pe(n,r,a)}finally{pt=!1,(Jn!==null||fn!==null)&&(Ie(),ye())}}function bt(n,r){var a=n.stateNode;if(a===null)return null;var c=$a(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(o(231,r,typeof a));return a}var Jt=!1;if(d)try{var ot={};Object.defineProperty(ot,"passive",{get:function(){Jt=!0}}),window.addEventListener("test",ot,ot),window.removeEventListener("test",ot,ot)}catch{Jt=!1}function mn(n,r,a,c,h,g,b,T,A){var F=Array.prototype.slice.call(arguments,3);try{r.apply(a,F)}catch(q){this.onError(q)}}var ts=!1,Ca=null,Ra=!1,Ll=null,tx={onError:function(n){ts=!0,Ca=n}};function nx(n,r,a,c,h,g,b,T,A){ts=!1,Ca=null,mn.apply(tx,arguments)}function ox(n,r,a,c,h,g,b,T,A){if(nx.apply(this,arguments),ts){if(ts){var F=Ca;ts=!1,Ca=null}else throw Error(o(198));Ra||(Ra=!0,Ll=F)}}function Po(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Yh(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Jh(n){if(Po(n)!==n)throw Error(o(188))}function rx(n){var r=n.alternate;if(!r){if(r=Po(n),r===null)throw Error(o(188));return r!==n?null:n}for(var a=n,c=r;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return Jh(h),n;if(g===c)return Jh(h),r;g=g.sibling}throw Error(o(188))}if(a.return!==c.return)a=h,c=g;else{for(var b=!1,T=h.child;T;){if(T===a){b=!0,a=h,c=g;break}if(T===c){b=!0,c=h,a=g;break}T=T.sibling}if(!b){for(T=g.child;T;){if(T===a){b=!0,a=g,c=h;break}if(T===c){b=!0,c=g,a=h;break}T=T.sibling}if(!b)throw Error(o(189))}}if(a.alternate!==c)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?n:r}function Gh(n){return n=rx(n),n!==null?Kh(n):null}function Kh(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Kh(n);if(r!==null)return r;n=n.sibling}return null}var Xh=t.unstable_scheduleCallback,Qh=t.unstable_cancelCallback,sx=t.unstable_shouldYield,ax=t.unstable_requestPaint,_e=t.unstable_now,ix=t.unstable_getCurrentPriorityLevel,Fl=t.unstable_ImmediatePriority,Zh=t.unstable_UserBlockingPriority,Ta=t.unstable_NormalPriority,lx=t.unstable_LowPriority,ep=t.unstable_IdlePriority,Ea=null,gn=null;function cx(n){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(Ea,n,void 0,(n.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:hx,ux=Math.log,dx=Math.LN2;function hx(n){return n>>>=0,n===0?32:31-(ux(n)/dx|0)|0}var Pa=64,Ma=4194304;function ns(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Aa(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,g=n.pingedLanes,b=a&268435455;if(b!==0){var T=b&~h;T!==0?c=ns(T):(g&=b,g!==0&&(c=ns(g)))}else b=a&~h,b!==0?c=ns(b):g!==0&&(c=ns(g));if(c===0)return 0;if(r!==0&&r!==c&&(r&h)===0&&(h=c&-c,g=r&-r,h>=g||h===16&&(g&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Gt(r),h=1<<a,c|=n[a],r&=~h;return c}function px(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fx(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var b=31-Gt(g),T=1<<b,A=h[b];A===-1?((T&a)===0||(T&c)!==0)&&(h[b]=px(T,r)):A<=r&&(n.expiredLanes|=T),g&=~T}}function Wl(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function tp(){var n=Pa;return Pa<<=1,(Pa&4194240)===0&&(Pa=64),n}function Bl(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function os(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Gt(r),n[r]=a}function mx(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-Gt(a),g=1<<h;r[h]=0,c[h]=-1,n[h]=-1,a&=~g}}function Hl(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Gt(a),h=1<<c;h&r|n[c]&r&&(n[c]|=r),a&=~h}}var Me=0;function np(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var op,Ul,rp,sp,ap,zl=!1,Ia=[],Gn=null,Kn=null,Xn=null,rs=new Map,ss=new Map,Qn=[],gx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ip(n,r){switch(n){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":Xn=null;break;case"pointerover":case"pointerout":rs.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ss.delete(r.pointerId)}}function as(n,r,a,c,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[h]},r!==null&&(r=xs(r),r!==null&&Ul(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),n)}function yx(n,r,a,c,h){switch(r){case"focusin":return Gn=as(Gn,n,r,a,c,h),!0;case"dragenter":return Kn=as(Kn,n,r,a,c,h),!0;case"mouseover":return Xn=as(Xn,n,r,a,c,h),!0;case"pointerover":var g=h.pointerId;return rs.set(g,as(rs.get(g)||null,n,r,a,c,h)),!0;case"gotpointercapture":return g=h.pointerId,ss.set(g,as(ss.get(g)||null,n,r,a,c,h)),!0}return!1}function lp(n){var r=Mo(n.target);if(r!==null){var a=Po(r);if(a!==null){if(r=a.tag,r===13){if(r=Yh(a),r!==null){n.blockedOn=r,ap(n.priority,function(){rp(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ja(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=_l(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);es=c,a.target.dispatchEvent(c),es=null}else return r=xs(a),r!==null&&Ul(r),n.blockedOn=a,!1;r.shift()}return!0}function cp(n,r,a){ja(n)&&a.delete(r)}function vx(){zl=!1,Gn!==null&&ja(Gn)&&(Gn=null),Kn!==null&&ja(Kn)&&(Kn=null),Xn!==null&&ja(Xn)&&(Xn=null),rs.forEach(cp),ss.forEach(cp)}function is(n,r){n.blockedOn===r&&(n.blockedOn=null,zl||(zl=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,vx)))}function ls(n){function r(h){return is(h,n)}if(0<Ia.length){is(Ia[0],n);for(var a=1;a<Ia.length;a++){var c=Ia[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Gn!==null&&is(Gn,n),Kn!==null&&is(Kn,n),Xn!==null&&is(Xn,n),rs.forEach(r),ss.forEach(r),a=0;a<Qn.length;a++)c=Qn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Qn.length&&(a=Qn[0],a.blockedOn===null);)lp(a),a.blockedOn===null&&Qn.shift()}var sr=D.ReactCurrentBatchConfig,Na=!0;function wx(n,r,a,c){var h=Me,g=sr.transition;sr.transition=null;try{Me=1,Vl(n,r,a,c)}finally{Me=h,sr.transition=g}}function xx(n,r,a,c){var h=Me,g=sr.transition;sr.transition=null;try{Me=4,Vl(n,r,a,c)}finally{Me=h,sr.transition=g}}function Vl(n,r,a,c){if(Na){var h=_l(n,r,a,c);if(h===null)ic(n,r,c,Da,a),ip(n,c);else if(yx(h,n,r,a,c))c.stopPropagation();else if(ip(n,c),r&4&&-1<gx.indexOf(n)){for(;h!==null;){var g=xs(h);if(g!==null&&op(g),g=_l(n,r,a,c),g===null&&ic(n,r,c,Da,a),g===h)break;h=g}h!==null&&c.stopPropagation()}else ic(n,r,c,null,a)}}var Da=null;function _l(n,r,a,c){if(Da=null,n=or(c),n=Mo(n),n!==null)if(r=Po(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Yh(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Da=n,null}function up(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ix()){case Fl:return 1;case Zh:return 4;case Ta:case lx:return 16;case ep:return 536870912;default:return 16}default:return 16}}var Zn=null,ql=null,Oa=null;function dp(){if(Oa)return Oa;var n,r=ql,a=r.length,c,h="value"in Zn?Zn.value:Zn.textContent,g=h.length;for(n=0;n<a&&r[n]===h[n];n++);var b=a-n;for(c=1;c<=b&&r[a-c]===h[g-c];c++);return Oa=h.slice(n,1<c?1-c:void 0)}function La(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Fa(){return!0}function hp(){return!1}function Mt(n){function r(a,c,h,g,b){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=g,this.target=b,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(g):g[T]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Fa:hp,this.isPropagationStopped=hp,this}return _(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Fa)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Fa)},persist:function(){},isPersistent:Fa}),r}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=Mt(ar),cs=_({},ar,{view:0,detail:0}),bx=Mt(cs),Yl,Jl,us,Wa=_({},cs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kl,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==us&&(us&&n.type==="mousemove"?(Yl=n.screenX-us.screenX,Jl=n.screenY-us.screenY):Jl=Yl=0,us=n),Yl)},movementY:function(n){return"movementY"in n?n.movementY:Jl}}),pp=Mt(Wa),Sx=_({},Wa,{dataTransfer:0}),kx=Mt(Sx),Cx=_({},cs,{relatedTarget:0}),Gl=Mt(Cx),Rx=_({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),Tx=Mt(Rx),Ex=_({},ar,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Px=Mt(Ex),Mx=_({},ar,{data:0}),fp=Mt(Mx),Ax={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ix={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nx(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=jx[n])?!!r[n]:!1}function Kl(){return Nx}var Dx=_({},cs,{key:function(n){if(n.key){var r=Ax[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=La(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ix[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kl,charCode:function(n){return n.type==="keypress"?La(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?La(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ox=Mt(Dx),Lx=_({},Wa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mp=Mt(Lx),Fx=_({},cs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kl}),Wx=Mt(Fx),Bx=_({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hx=Mt(Bx),Ux=_({},Wa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),zx=Mt(Ux),Vx=[9,13,27,32],Xl=d&&"CompositionEvent"in window,ds=null;d&&"documentMode"in document&&(ds=document.documentMode);var _x=d&&"TextEvent"in window&&!ds,gp=d&&(!Xl||ds&&8<ds&&11>=ds),yp=" ",vp=!1;function wp(n,r){switch(n){case"keyup":return Vx.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ir=!1;function qx(n,r){switch(n){case"compositionend":return xp(r);case"keypress":return r.which!==32?null:(vp=!0,yp);case"textInput":return n=r.data,n===yp&&vp?null:n;default:return null}}function $x(n,r){if(ir)return n==="compositionend"||!Xl&&wp(n,r)?(n=dp(),Oa=ql=Zn=null,ir=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return gp&&r.locale!=="ko"?null:r.data;default:return null}}var Yx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bp(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Yx[n.type]:r==="textarea"}function Sp(n,r,a,c){ka(c),r=Va(r,"onChange"),0<r.length&&(a=new $l("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var hs=null,ps=null;function Jx(n){Hp(n,0)}function Ba(n){var r=hr(n);if($n(r))return n}function Gx(n,r){if(n==="change")return r}var kp=!1;if(d){var Ql;if(d){var Zl="oninput"in document;if(!Zl){var Cp=document.createElement("div");Cp.setAttribute("oninput","return;"),Zl=typeof Cp.oninput=="function"}Ql=Zl}else Ql=!1;kp=Ql&&(!document.documentMode||9<document.documentMode)}function Rp(){hs&&(hs.detachEvent("onpropertychange",Tp),ps=hs=null)}function Tp(n){if(n.propertyName==="value"&&Ba(ps)){var r=[];Sp(r,ps,n,or(n)),xt(Jx,r)}}function Kx(n,r,a){n==="focusin"?(Rp(),hs=r,ps=a,hs.attachEvent("onpropertychange",Tp)):n==="focusout"&&Rp()}function Xx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ba(ps)}function Qx(n,r){if(n==="click")return Ba(r)}function Zx(n,r){if(n==="input"||n==="change")return Ba(r)}function eb(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Kt=typeof Object.is=="function"?Object.is:eb;function fs(n,r){if(Kt(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!f.call(r,h)||!Kt(n[h],r[h]))return!1}return!0}function Ep(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Pp(n,r){var a=Ep(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ep(a)}}function Mp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Mp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Ap(){for(var n=window,r=Lt();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Lt(n.document)}return r}function ec(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function tb(n){var r=Ap(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Mp(a.ownerDocument.documentElement,a)){if(c!==null&&ec(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,g=Math.min(c.start,h);c=c.end===void 0?g:Math.min(c.end,h),!n.extend&&g>c&&(h=c,c=g,g=h),h=Pp(a,g);var b=Pp(a,c);h&&b&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==b.node||n.focusOffset!==b.offset)&&(r=r.createRange(),r.setStart(h.node,h.offset),n.removeAllRanges(),g>c?(n.addRange(r),n.extend(b.node,b.offset)):(r.setEnd(b.node,b.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var nb=d&&"documentMode"in document&&11>=document.documentMode,lr=null,tc=null,ms=null,nc=!1;function Ip(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nc||lr==null||lr!==Lt(c)||(c=lr,"selectionStart"in c&&ec(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ms&&fs(ms,c)||(ms=c,c=Va(tc,"onSelect"),0<c.length&&(r=new $l("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=lr)))}function Ha(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var cr={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionend:Ha("Transition","TransitionEnd")},oc={},jp={};d&&(jp=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function Ua(n){if(oc[n])return oc[n];if(!cr[n])return n;var r=cr[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in jp)return oc[n]=r[a];return n}var Np=Ua("animationend"),Dp=Ua("animationiteration"),Op=Ua("animationstart"),Lp=Ua("transitionend"),Fp=new Map,Wp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function eo(n,r){Fp.set(n,r),l(r,[n])}for(var rc=0;rc<Wp.length;rc++){var sc=Wp[rc],ob=sc.toLowerCase(),rb=sc[0].toUpperCase()+sc.slice(1);eo(ob,"on"+rb)}eo(Np,"onAnimationEnd"),eo(Dp,"onAnimationIteration"),eo(Op,"onAnimationStart"),eo("dblclick","onDoubleClick"),eo("focusin","onFocus"),eo("focusout","onBlur"),eo(Lp,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sb=new Set("cancel close invalid load scroll toggle".split(" ").concat(gs));function Bp(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,ox(c,r,void 0,n),n.currentTarget=null}function Hp(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var g=void 0;if(r)for(var b=c.length-1;0<=b;b--){var T=c[b],A=T.instance,F=T.currentTarget;if(T=T.listener,A!==g&&h.isPropagationStopped())break e;Bp(h,T,F),g=A}else for(b=0;b<c.length;b++){if(T=c[b],A=T.instance,F=T.currentTarget,T=T.listener,A!==g&&h.isPropagationStopped())break e;Bp(h,T,F),g=A}}}if(Ra)throw n=Ll,Ra=!1,Ll=null,n}function Ne(n,r){var a=r[pc];a===void 0&&(a=r[pc]=new Set);var c=n+"__bubble";a.has(c)||(Up(r,n,2,!1),a.add(c))}function ac(n,r,a){var c=0;r&&(c|=4),Up(a,n,c,r)}var za="_reactListening"+Math.random().toString(36).slice(2);function ys(n){if(!n[za]){n[za]=!0,s.forEach(function(a){a!=="selectionchange"&&(sb.has(a)||ac(a,!1,n),ac(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[za]||(r[za]=!0,ac("selectionchange",!1,r))}}function Up(n,r,a,c){switch(up(r)){case 1:var h=wx;break;case 4:h=xx;break;default:h=Vl}a=h.bind(null,r,a,n),h=void 0,!Jt||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(r,a,{capture:!0,passive:h}):n.addEventListener(r,a,!0):h!==void 0?n.addEventListener(r,a,{passive:h}):n.addEventListener(r,a,!1)}function ic(n,r,a,c,h){var g=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var T=c.stateNode.containerInfo;if(T===h||T.nodeType===8&&T.parentNode===h)break;if(b===4)for(b=c.return;b!==null;){var A=b.tag;if((A===3||A===4)&&(A=b.stateNode.containerInfo,A===h||A.nodeType===8&&A.parentNode===h))return;b=b.return}for(;T!==null;){if(b=Mo(T),b===null)return;if(A=b.tag,A===5||A===6){c=g=b;continue e}T=T.parentNode}}c=c.return}xt(function(){var F=g,q=or(a),$=[];e:{var V=Fp.get(n);if(V!==void 0){var Z=$l,re=n;switch(n){case"keypress":if(La(a)===0)break e;case"keydown":case"keyup":Z=Ox;break;case"focusin":re="focus",Z=Gl;break;case"focusout":re="blur",Z=Gl;break;case"beforeblur":case"afterblur":Z=Gl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=kx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=Wx;break;case Np:case Dp:case Op:Z=Tx;break;case Lp:Z=Hx;break;case"scroll":Z=bx;break;case"wheel":Z=zx;break;case"copy":case"cut":case"paste":Z=Px;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=mp}var se=(r&4)!==0,qe=!se&&n==="scroll",O=se?V!==null?V+"Capture":null:V;se=[];for(var j=F,L;j!==null;){L=j;var G=L.stateNode;if(L.tag===5&&G!==null&&(L=G,O!==null&&(G=bt(j,O),G!=null&&se.push(vs(j,G,L)))),qe)break;j=j.return}0<se.length&&(V=new Z(V,re,null,a,q),$.push({event:V,listeners:se}))}}if((r&7)===0){e:{if(V=n==="mouseover"||n==="pointerover",Z=n==="mouseout"||n==="pointerout",V&&a!==es&&(re=a.relatedTarget||a.fromElement)&&(Mo(re)||re[In]))break e;if((Z||V)&&(V=q.window===q?q:(V=q.ownerDocument)?V.defaultView||V.parentWindow:window,Z?(re=a.relatedTarget||a.toElement,Z=F,re=re?Mo(re):null,re!==null&&(qe=Po(re),re!==qe||re.tag!==5&&re.tag!==6)&&(re=null)):(Z=null,re=F),Z!==re)){if(se=pp,G="onMouseLeave",O="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&(se=mp,G="onPointerLeave",O="onPointerEnter",j="pointer"),qe=Z==null?V:hr(Z),L=re==null?V:hr(re),V=new se(G,j+"leave",Z,a,q),V.target=qe,V.relatedTarget=L,G=null,Mo(q)===F&&(se=new se(O,j+"enter",re,a,q),se.target=L,se.relatedTarget=qe,G=se),qe=G,Z&&re)t:{for(se=Z,O=re,j=0,L=se;L;L=ur(L))j++;for(L=0,G=O;G;G=ur(G))L++;for(;0<j-L;)se=ur(se),j--;for(;0<L-j;)O=ur(O),L--;for(;j--;){if(se===O||O!==null&&se===O.alternate)break t;se=ur(se),O=ur(O)}se=null}else se=null;Z!==null&&zp($,V,Z,se,!1),re!==null&&qe!==null&&zp($,qe,re,se,!0)}}e:{if(V=F?hr(F):window,Z=V.nodeName&&V.nodeName.toLowerCase(),Z==="select"||Z==="input"&&V.type==="file")var ae=Gx;else if(bp(V))if(kp)ae=Zx;else{ae=Xx;var de=Kx}else(Z=V.nodeName)&&Z.toLowerCase()==="input"&&(V.type==="checkbox"||V.type==="radio")&&(ae=Qx);if(ae&&(ae=ae(n,F))){Sp($,ae,a,q);break e}de&&de(n,V,F),n==="focusout"&&(de=V._wrapperState)&&de.controlled&&V.type==="number"&&Qr(V,"number",V.value)}switch(de=F?hr(F):window,n){case"focusin":(bp(de)||de.contentEditable==="true")&&(lr=de,tc=F,ms=null);break;case"focusout":ms=tc=lr=null;break;case"mousedown":nc=!0;break;case"contextmenu":case"mouseup":case"dragend":nc=!1,Ip($,a,q);break;case"selectionchange":if(nb)break;case"keydown":case"keyup":Ip($,a,q)}var he;if(Xl)e:{switch(n){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else ir?wp(n,a)&&(me="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(me="onCompositionStart");me&&(gp&&a.locale!=="ko"&&(ir||me!=="onCompositionStart"?me==="onCompositionEnd"&&ir&&(he=dp()):(Zn=q,ql="value"in Zn?Zn.value:Zn.textContent,ir=!0)),de=Va(F,me),0<de.length&&(me=new fp(me,n,null,a,q),$.push({event:me,listeners:de}),he?me.data=he:(he=xp(a),he!==null&&(me.data=he)))),(he=_x?qx(n,a):$x(n,a))&&(F=Va(F,"onBeforeInput"),0<F.length&&(q=new fp("onBeforeInput","beforeinput",null,a,q),$.push({event:q,listeners:F}),q.data=he))}Hp($,r)})}function vs(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Va(n,r){for(var a=r+"Capture",c=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=bt(n,a),g!=null&&c.unshift(vs(n,g,h)),g=bt(n,r),g!=null&&c.push(vs(n,g,h))),n=n.return}return c}function ur(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function zp(n,r,a,c,h){for(var g=r._reactName,b=[];a!==null&&a!==c;){var T=a,A=T.alternate,F=T.stateNode;if(A!==null&&A===c)break;T.tag===5&&F!==null&&(T=F,h?(A=bt(a,g),A!=null&&b.unshift(vs(a,A,T))):h||(A=bt(a,g),A!=null&&b.push(vs(a,A,T)))),a=a.return}b.length!==0&&n.push({event:r,listeners:b})}var ab=/\r\n?/g,ib=/\u0000|\uFFFD/g;function Vp(n){return(typeof n=="string"?n:""+n).replace(ab,`
`).replace(ib,"")}function _a(n,r,a){if(r=Vp(r),Vp(n)!==r&&a)throw Error(o(425))}function qa(){}var lc=null,cc=null;function uc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var dc=typeof setTimeout=="function"?setTimeout:void 0,lb=typeof clearTimeout=="function"?clearTimeout:void 0,_p=typeof Promise=="function"?Promise:void 0,cb=typeof queueMicrotask=="function"?queueMicrotask:typeof _p<"u"?function(n){return _p.resolve(null).then(n).catch(ub)}:dc;function ub(n){setTimeout(function(){throw n})}function hc(n,r){var a=r,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),ls(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);ls(r)}function to(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function qp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var dr=Math.random().toString(36).slice(2),yn="__reactFiber$"+dr,ws="__reactProps$"+dr,In="__reactContainer$"+dr,pc="__reactEvents$"+dr,db="__reactListeners$"+dr,hb="__reactHandles$"+dr;function Mo(n){var r=n[yn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[In]||a[yn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=qp(n);n!==null;){if(a=n[yn])return a;n=qp(n)}return r}n=a,a=n.parentNode}return null}function xs(n){return n=n[yn]||n[In],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function hr(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(o(33))}function $a(n){return n[ws]||null}var fc=[],pr=-1;function no(n){return{current:n}}function De(n){0>pr||(n.current=fc[pr],fc[pr]=null,pr--)}function je(n,r){pr++,fc[pr]=n.current,n.current=r}var oo={},it=no(oo),St=no(!1),Ao=oo;function fr(n,r){var a=n.type.contextTypes;if(!a)return oo;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=r[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=h),h}function kt(n){return n=n.childContextTypes,n!=null}function Ya(){De(St),De(it)}function $p(n,r,a){if(it.current!==oo)throw Error(o(168));je(it,r),je(St,a)}function Yp(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in r))throw Error(o(108,ue(n)||"Unknown",h));return _({},a,c)}function Ja(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||oo,Ao=it.current,je(it,n),je(St,St.current),!0}function Jp(n,r,a){var c=n.stateNode;if(!c)throw Error(o(169));a?(n=Yp(n,r,Ao),c.__reactInternalMemoizedMergedChildContext=n,De(St),De(it),je(it,n)):De(St),je(St,a)}var jn=null,Ga=!1,mc=!1;function Gp(n){jn===null?jn=[n]:jn.push(n)}function pb(n){Ga=!0,Gp(n)}function ro(){if(!mc&&jn!==null){mc=!0;var n=0,r=Me;try{var a=jn;for(Me=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}jn=null,Ga=!1}catch(h){throw jn!==null&&(jn=jn.slice(n+1)),Xh(Fl,ro),h}finally{Me=r,mc=!1}}return null}var mr=[],gr=0,Ka=null,Xa=0,Wt=[],Bt=0,Io=null,Nn=1,Dn="";function jo(n,r){mr[gr++]=Xa,mr[gr++]=Ka,Ka=n,Xa=r}function Kp(n,r,a){Wt[Bt++]=Nn,Wt[Bt++]=Dn,Wt[Bt++]=Io,Io=n;var c=Nn;n=Dn;var h=32-Gt(c)-1;c&=~(1<<h),a+=1;var g=32-Gt(r)+h;if(30<g){var b=h-h%5;g=(c&(1<<b)-1).toString(32),c>>=b,h-=b,Nn=1<<32-Gt(r)+h|a<<h|c,Dn=g+n}else Nn=1<<g|a<<h|c,Dn=n}function gc(n){n.return!==null&&(jo(n,1),Kp(n,1,0))}function yc(n){for(;n===Ka;)Ka=mr[--gr],mr[gr]=null,Xa=mr[--gr],mr[gr]=null;for(;n===Io;)Io=Wt[--Bt],Wt[Bt]=null,Dn=Wt[--Bt],Wt[Bt]=null,Nn=Wt[--Bt],Wt[Bt]=null}var At=null,It=null,Fe=!1,Xt=null;function Xp(n,r){var a=Vt(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function Qp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,At=n,It=to(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,At=n,It=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Io!==null?{id:Nn,overflow:Dn}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=Vt(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,At=n,It=null,!0):!1;default:return!1}}function vc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function wc(n){if(Fe){var r=It;if(r){var a=r;if(!Qp(n,r)){if(vc(n))throw Error(o(418));r=to(a.nextSibling);var c=At;r&&Qp(n,r)?Xp(c,a):(n.flags=n.flags&-4097|2,Fe=!1,At=n)}}else{if(vc(n))throw Error(o(418));n.flags=n.flags&-4097|2,Fe=!1,At=n}}}function Zp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;At=n}function Qa(n){if(n!==At)return!1;if(!Fe)return Zp(n),Fe=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!uc(n.type,n.memoizedProps)),r&&(r=It)){if(vc(n))throw ef(),Error(o(418));for(;r;)Xp(n,r),r=to(r.nextSibling)}if(Zp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){It=to(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}It=null}}else It=At?to(n.stateNode.nextSibling):null;return!0}function ef(){for(var n=It;n;)n=to(n.nextSibling)}function yr(){It=At=null,Fe=!1}function xc(n){Xt===null?Xt=[n]:Xt.push(n)}var fb=D.ReactCurrentBatchConfig;function bs(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(o(309));var c=a.stateNode}if(!c)throw Error(o(147,n));var h=c,g=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===g?r.ref:(r=function(b){var T=h.refs;b===null?delete T[g]:T[g]=b},r._stringRef=g,r)}if(typeof n!="string")throw Error(o(284));if(!a._owner)throw Error(o(290,n))}return n}function Za(n,r){throw n=Object.prototype.toString.call(r),Error(o(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function tf(n){var r=n._init;return r(n._payload)}function nf(n){function r(O,j){if(n){var L=O.deletions;L===null?(O.deletions=[j],O.flags|=16):L.push(j)}}function a(O,j){if(!n)return null;for(;j!==null;)r(O,j),j=j.sibling;return null}function c(O,j){for(O=new Map;j!==null;)j.key!==null?O.set(j.key,j):O.set(j.index,j),j=j.sibling;return O}function h(O,j){return O=po(O,j),O.index=0,O.sibling=null,O}function g(O,j,L){return O.index=L,n?(L=O.alternate,L!==null?(L=L.index,L<j?(O.flags|=2,j):L):(O.flags|=2,j)):(O.flags|=1048576,j)}function b(O){return n&&O.alternate===null&&(O.flags|=2),O}function T(O,j,L,G){return j===null||j.tag!==6?(j=du(L,O.mode,G),j.return=O,j):(j=h(j,L),j.return=O,j)}function A(O,j,L,G){var ae=L.type;return ae===z?q(O,j,L.props.children,G,L.key):j!==null&&(j.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===ce&&tf(ae)===j.type)?(G=h(j,L.props),G.ref=bs(O,j,L),G.return=O,G):(G=ki(L.type,L.key,L.props,null,O.mode,G),G.ref=bs(O,j,L),G.return=O,G)}function F(O,j,L,G){return j===null||j.tag!==4||j.stateNode.containerInfo!==L.containerInfo||j.stateNode.implementation!==L.implementation?(j=hu(L,O.mode,G),j.return=O,j):(j=h(j,L.children||[]),j.return=O,j)}function q(O,j,L,G,ae){return j===null||j.tag!==7?(j=Ho(L,O.mode,G,ae),j.return=O,j):(j=h(j,L),j.return=O,j)}function $(O,j,L){if(typeof j=="string"&&j!==""||typeof j=="number")return j=du(""+j,O.mode,L),j.return=O,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case I:return L=ki(j.type,j.key,j.props,null,O.mode,L),L.ref=bs(O,null,j),L.return=O,L;case H:return j=hu(j,O.mode,L),j.return=O,j;case ce:var G=j._init;return $(O,G(j._payload),L)}if(Yn(j)||U(j))return j=Ho(j,O.mode,L,null),j.return=O,j;Za(O,j)}return null}function V(O,j,L,G){var ae=j!==null?j.key:null;if(typeof L=="string"&&L!==""||typeof L=="number")return ae!==null?null:T(O,j,""+L,G);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case I:return L.key===ae?A(O,j,L,G):null;case H:return L.key===ae?F(O,j,L,G):null;case ce:return ae=L._init,V(O,j,ae(L._payload),G)}if(Yn(L)||U(L))return ae!==null?null:q(O,j,L,G,null);Za(O,L)}return null}function Z(O,j,L,G,ae){if(typeof G=="string"&&G!==""||typeof G=="number")return O=O.get(L)||null,T(j,O,""+G,ae);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case I:return O=O.get(G.key===null?L:G.key)||null,A(j,O,G,ae);case H:return O=O.get(G.key===null?L:G.key)||null,F(j,O,G,ae);case ce:var de=G._init;return Z(O,j,L,de(G._payload),ae)}if(Yn(G)||U(G))return O=O.get(L)||null,q(j,O,G,ae,null);Za(j,G)}return null}function re(O,j,L,G){for(var ae=null,de=null,he=j,me=j=0,nt=null;he!==null&&me<L.length;me++){he.index>me?(nt=he,he=null):nt=he.sibling;var Ee=V(O,he,L[me],G);if(Ee===null){he===null&&(he=nt);break}n&&he&&Ee.alternate===null&&r(O,he),j=g(Ee,j,me),de===null?ae=Ee:de.sibling=Ee,de=Ee,he=nt}if(me===L.length)return a(O,he),Fe&&jo(O,me),ae;if(he===null){for(;me<L.length;me++)he=$(O,L[me],G),he!==null&&(j=g(he,j,me),de===null?ae=he:de.sibling=he,de=he);return Fe&&jo(O,me),ae}for(he=c(O,he);me<L.length;me++)nt=Z(he,O,me,L[me],G),nt!==null&&(n&&nt.alternate!==null&&he.delete(nt.key===null?me:nt.key),j=g(nt,j,me),de===null?ae=nt:de.sibling=nt,de=nt);return n&&he.forEach(function(fo){return r(O,fo)}),Fe&&jo(O,me),ae}function se(O,j,L,G){var ae=U(L);if(typeof ae!="function")throw Error(o(150));if(L=ae.call(L),L==null)throw Error(o(151));for(var de=ae=null,he=j,me=j=0,nt=null,Ee=L.next();he!==null&&!Ee.done;me++,Ee=L.next()){he.index>me?(nt=he,he=null):nt=he.sibling;var fo=V(O,he,Ee.value,G);if(fo===null){he===null&&(he=nt);break}n&&he&&fo.alternate===null&&r(O,he),j=g(fo,j,me),de===null?ae=fo:de.sibling=fo,de=fo,he=nt}if(Ee.done)return a(O,he),Fe&&jo(O,me),ae;if(he===null){for(;!Ee.done;me++,Ee=L.next())Ee=$(O,Ee.value,G),Ee!==null&&(j=g(Ee,j,me),de===null?ae=Ee:de.sibling=Ee,de=Ee);return Fe&&jo(O,me),ae}for(he=c(O,he);!Ee.done;me++,Ee=L.next())Ee=Z(he,O,me,Ee.value,G),Ee!==null&&(n&&Ee.alternate!==null&&he.delete(Ee.key===null?me:Ee.key),j=g(Ee,j,me),de===null?ae=Ee:de.sibling=Ee,de=Ee);return n&&he.forEach(function(Yb){return r(O,Yb)}),Fe&&jo(O,me),ae}function qe(O,j,L,G){if(typeof L=="object"&&L!==null&&L.type===z&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case I:e:{for(var ae=L.key,de=j;de!==null;){if(de.key===ae){if(ae=L.type,ae===z){if(de.tag===7){a(O,de.sibling),j=h(de,L.props.children),j.return=O,O=j;break e}}else if(de.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===ce&&tf(ae)===de.type){a(O,de.sibling),j=h(de,L.props),j.ref=bs(O,de,L),j.return=O,O=j;break e}a(O,de);break}else r(O,de);de=de.sibling}L.type===z?(j=Ho(L.props.children,O.mode,G,L.key),j.return=O,O=j):(G=ki(L.type,L.key,L.props,null,O.mode,G),G.ref=bs(O,j,L),G.return=O,O=G)}return b(O);case H:e:{for(de=L.key;j!==null;){if(j.key===de)if(j.tag===4&&j.stateNode.containerInfo===L.containerInfo&&j.stateNode.implementation===L.implementation){a(O,j.sibling),j=h(j,L.children||[]),j.return=O,O=j;break e}else{a(O,j);break}else r(O,j);j=j.sibling}j=hu(L,O.mode,G),j.return=O,O=j}return b(O);case ce:return de=L._init,qe(O,j,de(L._payload),G)}if(Yn(L))return re(O,j,L,G);if(U(L))return se(O,j,L,G);Za(O,L)}return typeof L=="string"&&L!==""||typeof L=="number"?(L=""+L,j!==null&&j.tag===6?(a(O,j.sibling),j=h(j,L),j.return=O,O=j):(a(O,j),j=du(L,O.mode,G),j.return=O,O=j),b(O)):a(O,j)}return qe}var vr=nf(!0),of=nf(!1),ei=no(null),ti=null,wr=null,bc=null;function Sc(){bc=wr=ti=null}function kc(n){var r=ei.current;De(ei),n._currentValue=r}function Cc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function xr(n,r){ti=n,bc=wr=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Ct=!0),n.firstContext=null)}function Ht(n){var r=n._currentValue;if(bc!==n)if(n={context:n,memoizedValue:r,next:null},wr===null){if(ti===null)throw Error(o(308));wr=n,ti.dependencies={lanes:0,firstContext:n}}else wr=wr.next=n;return r}var No=null;function Rc(n){No===null?No=[n]:No.push(n)}function rf(n,r,a,c){var h=r.interleaved;return h===null?(a.next=a,Rc(r)):(a.next=h.next,h.next=a),r.interleaved=a,On(n,c)}function On(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var so=!1;function Tc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sf(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ln(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function ao(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Re&2)!==0){var h=c.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),c.pending=r,On(n,a)}return h=c.interleaved,h===null?(r.next=r,Rc(c)):(r.next=h.next,h.next=r),c.interleaved=r,On(n,a)}function ni(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Hl(n,a)}}function af(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=b:g=g.next=b,a=a.next}while(a!==null);g===null?h=g=r:g=g.next=r}else h=g=r;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function oi(n,r,a,c){var h=n.updateQueue;so=!1;var g=h.firstBaseUpdate,b=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var A=T,F=A.next;A.next=null,b===null?g=F:b.next=F,b=A;var q=n.alternate;q!==null&&(q=q.updateQueue,T=q.lastBaseUpdate,T!==b&&(T===null?q.firstBaseUpdate=F:T.next=F,q.lastBaseUpdate=A))}if(g!==null){var $=h.baseState;b=0,q=F=A=null,T=g;do{var V=T.lane,Z=T.eventTime;if((c&V)===V){q!==null&&(q=q.next={eventTime:Z,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var re=n,se=T;switch(V=r,Z=a,se.tag){case 1:if(re=se.payload,typeof re=="function"){$=re.call(Z,$,V);break e}$=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=se.payload,V=typeof re=="function"?re.call(Z,$,V):re,V==null)break e;$=_({},$,V);break e;case 2:so=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,V=h.effects,V===null?h.effects=[T]:V.push(T))}else Z={eventTime:Z,lane:V,tag:T.tag,payload:T.payload,callback:T.callback,next:null},q===null?(F=q=Z,A=$):q=q.next=Z,b|=V;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;V=T,T=V.next,V.next=null,h.lastBaseUpdate=V,h.shared.pending=null}}while(!0);if(q===null&&(A=$),h.baseState=A,h.firstBaseUpdate=F,h.lastBaseUpdate=q,r=h.shared.interleaved,r!==null){h=r;do b|=h.lane,h=h.next;while(h!==r)}else g===null&&(h.shared.lanes=0);Lo|=b,n.lanes=b,n.memoizedState=$}}function lf(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(o(191,h));h.call(c)}}}var Ss={},vn=no(Ss),ks=no(Ss),Cs=no(Ss);function Do(n){if(n===Ss)throw Error(o(174));return n}function Ec(n,r){switch(je(Cs,r),je(ks,n),je(vn,Ss),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:dn(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=dn(r,n)}De(vn),je(vn,r)}function br(){De(vn),De(ks),De(Cs)}function cf(n){Do(Cs.current);var r=Do(vn.current),a=dn(r,n.type);r!==a&&(je(ks,n),je(vn,a))}function Pc(n){ks.current===n&&(De(vn),De(ks))}var Be=no(0);function ri(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Mc=[];function Ac(){for(var n=0;n<Mc.length;n++)Mc[n]._workInProgressVersionPrimary=null;Mc.length=0}var si=D.ReactCurrentDispatcher,Ic=D.ReactCurrentBatchConfig,Oo=0,He=null,Xe=null,et=null,ai=!1,Rs=!1,Ts=0,mb=0;function lt(){throw Error(o(321))}function jc(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Kt(n[a],r[a]))return!1;return!0}function Nc(n,r,a,c,h,g){if(Oo=g,He=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,si.current=n===null||n.memoizedState===null?wb:xb,n=a(c,h),Rs){g=0;do{if(Rs=!1,Ts=0,25<=g)throw Error(o(301));g+=1,et=Xe=null,r.updateQueue=null,si.current=bb,n=a(c,h)}while(Rs)}if(si.current=ci,r=Xe!==null&&Xe.next!==null,Oo=0,et=Xe=He=null,ai=!1,r)throw Error(o(300));return n}function Dc(){var n=Ts!==0;return Ts=0,n}function wn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?He.memoizedState=et=n:et=et.next=n,et}function Ut(){if(Xe===null){var n=He.alternate;n=n!==null?n.memoizedState:null}else n=Xe.next;var r=et===null?He.memoizedState:et.next;if(r!==null)et=r,Xe=n;else{if(n===null)throw Error(o(310));Xe=n,n={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},et===null?He.memoizedState=et=n:et=et.next=n}return et}function Es(n,r){return typeof r=="function"?r(n):r}function Oc(n){var r=Ut(),a=r.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=n;var c=Xe,h=c.baseQueue,g=a.pending;if(g!==null){if(h!==null){var b=h.next;h.next=g.next,g.next=b}c.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,c=c.baseState;var T=b=null,A=null,F=g;do{var q=F.lane;if((Oo&q)===q)A!==null&&(A=A.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var $={lane:q,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};A===null?(T=A=$,b=c):A=A.next=$,He.lanes|=q,Lo|=q}F=F.next}while(F!==null&&F!==g);A===null?b=c:A.next=T,Kt(c,r.memoizedState)||(Ct=!0),r.memoizedState=c,r.baseState=b,r.baseQueue=A,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do g=h.lane,He.lanes|=g,Lo|=g,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Lc(n){var r=Ut(),a=r.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,g=r.memoizedState;if(h!==null){a.pending=null;var b=h=h.next;do g=n(g,b.action),b=b.next;while(b!==h);Kt(g,r.memoizedState)||(Ct=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),a.lastRenderedState=g}return[g,c]}function uf(){}function df(n,r){var a=He,c=Ut(),h=r(),g=!Kt(c.memoizedState,h);if(g&&(c.memoizedState=h,Ct=!0),c=c.queue,Fc(ff.bind(null,a,c,n),[n]),c.getSnapshot!==r||g||et!==null&&et.memoizedState.tag&1){if(a.flags|=2048,Ps(9,pf.bind(null,a,c,h,r),void 0,null),tt===null)throw Error(o(349));(Oo&30)!==0||hf(a,r,h)}return h}function hf(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=He.updateQueue,r===null?(r={lastEffect:null,stores:null},He.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function pf(n,r,a,c){r.value=a,r.getSnapshot=c,mf(r)&&gf(n)}function ff(n,r,a){return a(function(){mf(r)&&gf(n)})}function mf(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Kt(n,a)}catch{return!0}}function gf(n){var r=On(n,1);r!==null&&tn(r,n,1,-1)}function yf(n){var r=wn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Es,lastRenderedState:n},r.queue=n,n=n.dispatch=vb.bind(null,He,n),[r.memoizedState,n]}function Ps(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=He.updateQueue,r===null?(r={lastEffect:null,stores:null},He.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function vf(){return Ut().memoizedState}function ii(n,r,a,c){var h=wn();He.flags|=n,h.memoizedState=Ps(1|r,a,void 0,c===void 0?null:c)}function li(n,r,a,c){var h=Ut();c=c===void 0?null:c;var g=void 0;if(Xe!==null){var b=Xe.memoizedState;if(g=b.destroy,c!==null&&jc(c,b.deps)){h.memoizedState=Ps(r,a,g,c);return}}He.flags|=n,h.memoizedState=Ps(1|r,a,g,c)}function wf(n,r){return ii(8390656,8,n,r)}function Fc(n,r){return li(2048,8,n,r)}function xf(n,r){return li(4,2,n,r)}function bf(n,r){return li(4,4,n,r)}function Sf(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function kf(n,r,a){return a=a!=null?a.concat([n]):null,li(4,4,Sf.bind(null,r,n),a)}function Wc(){}function Cf(n,r){var a=Ut();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&jc(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Rf(n,r){var a=Ut();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&jc(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Tf(n,r,a){return(Oo&21)===0?(n.baseState&&(n.baseState=!1,Ct=!0),n.memoizedState=a):(Kt(a,r)||(a=tp(),He.lanes|=a,Lo|=a,n.baseState=!0),r)}function gb(n,r){var a=Me;Me=a!==0&&4>a?a:4,n(!0);var c=Ic.transition;Ic.transition={};try{n(!1),r()}finally{Me=a,Ic.transition=c}}function Ef(){return Ut().memoizedState}function yb(n,r,a){var c=uo(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Pf(n))Mf(r,a);else if(a=rf(n,r,a,c),a!==null){var h=mt();tn(a,n,c,h),Af(a,r,c)}}function vb(n,r,a){var c=uo(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pf(n))Mf(r,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var b=r.lastRenderedState,T=g(b,a);if(h.hasEagerState=!0,h.eagerState=T,Kt(T,b)){var A=r.interleaved;A===null?(h.next=h,Rc(r)):(h.next=A.next,A.next=h),r.interleaved=h;return}}catch{}a=rf(n,r,h,c),a!==null&&(h=mt(),tn(a,n,c,h),Af(a,r,c))}}function Pf(n){var r=n.alternate;return n===He||r!==null&&r===He}function Mf(n,r){Rs=ai=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Af(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Hl(n,a)}}var ci={readContext:Ht,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},wb={readContext:Ht,useCallback:function(n,r){return wn().memoizedState=[n,r===void 0?null:r],n},useContext:Ht,useEffect:wf,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,ii(4194308,4,Sf.bind(null,r,n),a)},useLayoutEffect:function(n,r){return ii(4194308,4,n,r)},useInsertionEffect:function(n,r){return ii(4,2,n,r)},useMemo:function(n,r){var a=wn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=wn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=yb.bind(null,He,n),[c.memoizedState,n]},useRef:function(n){var r=wn();return n={current:n},r.memoizedState=n},useState:yf,useDebugValue:Wc,useDeferredValue:function(n){return wn().memoizedState=n},useTransition:function(){var n=yf(!1),r=n[0];return n=gb.bind(null,n[1]),wn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=He,h=wn();if(Fe){if(a===void 0)throw Error(o(407));a=a()}else{if(a=r(),tt===null)throw Error(o(349));(Oo&30)!==0||hf(c,r,a)}h.memoizedState=a;var g={value:a,getSnapshot:r};return h.queue=g,wf(ff.bind(null,c,g,n),[n]),c.flags|=2048,Ps(9,pf.bind(null,c,g,a,r),void 0,null),a},useId:function(){var n=wn(),r=tt.identifierPrefix;if(Fe){var a=Dn,c=Nn;a=(c&~(1<<32-Gt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=Ts++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=mb++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},xb={readContext:Ht,useCallback:Cf,useContext:Ht,useEffect:Fc,useImperativeHandle:kf,useInsertionEffect:xf,useLayoutEffect:bf,useMemo:Rf,useReducer:Oc,useRef:vf,useState:function(){return Oc(Es)},useDebugValue:Wc,useDeferredValue:function(n){var r=Ut();return Tf(r,Xe.memoizedState,n)},useTransition:function(){var n=Oc(Es)[0],r=Ut().memoizedState;return[n,r]},useMutableSource:uf,useSyncExternalStore:df,useId:Ef,unstable_isNewReconciler:!1},bb={readContext:Ht,useCallback:Cf,useContext:Ht,useEffect:Fc,useImperativeHandle:kf,useInsertionEffect:xf,useLayoutEffect:bf,useMemo:Rf,useReducer:Lc,useRef:vf,useState:function(){return Lc(Es)},useDebugValue:Wc,useDeferredValue:function(n){var r=Ut();return Xe===null?r.memoizedState=n:Tf(r,Xe.memoizedState,n)},useTransition:function(){var n=Lc(Es)[0],r=Ut().memoizedState;return[n,r]},useMutableSource:uf,useSyncExternalStore:df,useId:Ef,unstable_isNewReconciler:!1};function Qt(n,r){if(n&&n.defaultProps){r=_({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function Bc(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:_({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var ui={isMounted:function(n){return(n=n._reactInternals)?Po(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=mt(),h=uo(n),g=Ln(c,h);g.payload=r,a!=null&&(g.callback=a),r=ao(n,g,h),r!==null&&(tn(r,n,h,c),ni(r,n,h))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=mt(),h=uo(n),g=Ln(c,h);g.tag=1,g.payload=r,a!=null&&(g.callback=a),r=ao(n,g,h),r!==null&&(tn(r,n,h,c),ni(r,n,h))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=mt(),c=uo(n),h=Ln(a,c);h.tag=2,r!=null&&(h.callback=r),r=ao(n,h,c),r!==null&&(tn(r,n,c,a),ni(r,n,c))}};function If(n,r,a,c,h,g,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,b):r.prototype&&r.prototype.isPureReactComponent?!fs(a,c)||!fs(h,g):!0}function jf(n,r,a){var c=!1,h=oo,g=r.contextType;return typeof g=="object"&&g!==null?g=Ht(g):(h=kt(r)?Ao:it.current,c=r.contextTypes,g=(c=c!=null)?fr(n,h):oo),r=new r(a,g),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ui,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),r}function Nf(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&ui.enqueueReplaceState(r,r.state,null)}function Hc(n,r,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},Tc(n);var g=r.contextType;typeof g=="object"&&g!==null?h.context=Ht(g):(g=kt(r)?Ao:it.current,h.context=fr(n,g)),h.state=n.memoizedState,g=r.getDerivedStateFromProps,typeof g=="function"&&(Bc(n,r,g,a),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(r=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),r!==h.state&&ui.enqueueReplaceState(h,h.state,null),oi(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Sr(n,r){try{var a="",c=r;do a+=pe(c),c=c.return;while(c);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:r,stack:h,digest:null}}function Uc(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function zc(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var Sb=typeof WeakMap=="function"?WeakMap:Map;function Df(n,r,a){a=Ln(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){yi||(yi=!0,ou=c),zc(n,r)},a}function Of(n,r,a){a=Ln(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=r.value;a.payload=function(){return c(h)},a.callback=function(){zc(n,r)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){zc(n,r),typeof c!="function"&&(lo===null?lo=new Set([this]):lo.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})}),a}function Lf(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Sb;var h=new Set;c.set(r,h)}else h=c.get(r),h===void 0&&(h=new Set,c.set(r,h));h.has(a)||(h.add(a),n=Lb.bind(null,n,r,a),r.then(n,n))}function Ff(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Wf(n,r,a,c,h){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Ln(-1,1),r.tag=2,ao(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var kb=D.ReactCurrentOwner,Ct=!1;function ft(n,r,a,c){r.child=n===null?of(r,null,a,c):vr(r,n.child,a,c)}function Bf(n,r,a,c,h){a=a.render;var g=r.ref;return xr(r,h),c=Nc(n,r,a,c,g,h),a=Dc(),n!==null&&!Ct?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,Fn(n,r,h)):(Fe&&a&&gc(r),r.flags|=1,ft(n,r,c,h),r.child)}function Hf(n,r,a,c,h){if(n===null){var g=a.type;return typeof g=="function"&&!uu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=g,Uf(n,r,g,c,h)):(n=ki(a.type,null,c,r,r.mode,h),n.ref=r.ref,n.return=r,r.child=n)}if(g=n.child,(n.lanes&h)===0){var b=g.memoizedProps;if(a=a.compare,a=a!==null?a:fs,a(b,c)&&n.ref===r.ref)return Fn(n,r,h)}return r.flags|=1,n=po(g,c),n.ref=r.ref,n.return=r,r.child=n}function Uf(n,r,a,c,h){if(n!==null){var g=n.memoizedProps;if(fs(g,c)&&n.ref===r.ref)if(Ct=!1,r.pendingProps=c=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Ct=!0);else return r.lanes=n.lanes,Fn(n,r,h)}return Vc(n,r,a,c,h)}function zf(n,r,a){var c=r.pendingProps,h=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(Cr,jt),jt|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,je(Cr,jt),jt|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,je(Cr,jt),jt|=c}else g!==null?(c=g.baseLanes|a,r.memoizedState=null):c=a,je(Cr,jt),jt|=c;return ft(n,r,h,a),r.child}function Vf(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Vc(n,r,a,c,h){var g=kt(a)?Ao:it.current;return g=fr(r,g),xr(r,h),a=Nc(n,r,a,c,g,h),c=Dc(),n!==null&&!Ct?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,Fn(n,r,h)):(Fe&&c&&gc(r),r.flags|=1,ft(n,r,a,h),r.child)}function _f(n,r,a,c,h){if(kt(a)){var g=!0;Ja(r)}else g=!1;if(xr(r,h),r.stateNode===null)hi(n,r),jf(r,a,c),Hc(r,a,c,h),c=!0;else if(n===null){var b=r.stateNode,T=r.memoizedProps;b.props=T;var A=b.context,F=a.contextType;typeof F=="object"&&F!==null?F=Ht(F):(F=kt(a)?Ao:it.current,F=fr(r,F));var q=a.getDerivedStateFromProps,$=typeof q=="function"||typeof b.getSnapshotBeforeUpdate=="function";$||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(T!==c||A!==F)&&Nf(r,b,c,F),so=!1;var V=r.memoizedState;b.state=V,oi(r,c,b,h),A=r.memoizedState,T!==c||V!==A||St.current||so?(typeof q=="function"&&(Bc(r,a,q,c),A=r.memoizedState),(T=so||If(r,a,T,c,V,A,F))?($||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(r.flags|=4194308)):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=A),b.props=c,b.state=A,b.context=F,c=T):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{b=r.stateNode,sf(n,r),T=r.memoizedProps,F=r.type===r.elementType?T:Qt(r.type,T),b.props=F,$=r.pendingProps,V=b.context,A=a.contextType,typeof A=="object"&&A!==null?A=Ht(A):(A=kt(a)?Ao:it.current,A=fr(r,A));var Z=a.getDerivedStateFromProps;(q=typeof Z=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(T!==$||V!==A)&&Nf(r,b,c,A),so=!1,V=r.memoizedState,b.state=V,oi(r,c,b,h);var re=r.memoizedState;T!==$||V!==re||St.current||so?(typeof Z=="function"&&(Bc(r,a,Z,c),re=r.memoizedState),(F=so||If(r,a,F,c,V,re,A)||!1)?(q||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,re,A),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,re,A)),typeof b.componentDidUpdate=="function"&&(r.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof b.componentDidUpdate!="function"||T===n.memoizedProps&&V===n.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&V===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=re),b.props=c,b.state=re,b.context=A,c=F):(typeof b.componentDidUpdate!="function"||T===n.memoizedProps&&V===n.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&V===n.memoizedState||(r.flags|=1024),c=!1)}return _c(n,r,a,c,g,h)}function _c(n,r,a,c,h,g){Vf(n,r);var b=(r.flags&128)!==0;if(!c&&!b)return h&&Jp(r,a,!1),Fn(n,r,g);c=r.stateNode,kb.current=r;var T=b&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&b?(r.child=vr(r,n.child,null,g),r.child=vr(r,null,T,g)):ft(n,r,T,g),r.memoizedState=c.state,h&&Jp(r,a,!0),r.child}function qf(n){var r=n.stateNode;r.pendingContext?$p(n,r.pendingContext,r.pendingContext!==r.context):r.context&&$p(n,r.context,!1),Ec(n,r.containerInfo)}function $f(n,r,a,c,h){return yr(),xc(h),r.flags|=256,ft(n,r,a,c),r.child}var qc={dehydrated:null,treeContext:null,retryLane:0};function $c(n){return{baseLanes:n,cachePool:null,transitions:null}}function Yf(n,r,a){var c=r.pendingProps,h=Be.current,g=!1,b=(r.flags&128)!==0,T;if((T=b)||(T=n!==null&&n.memoizedState===null?!1:(h&2)!==0),T?(g=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),je(Be,h&1),n===null)return wc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(b=c.children,n=c.fallback,g?(c=r.mode,g=r.child,b={mode:"hidden",children:b},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=b):g=Ci(b,c,0,null),n=Ho(n,c,a,null),g.return=r,n.return=r,g.sibling=n,r.child=g,r.child.memoizedState=$c(a),r.memoizedState=qc,n):Yc(r,b));if(h=n.memoizedState,h!==null&&(T=h.dehydrated,T!==null))return Cb(n,r,b,c,T,h,a);if(g){g=c.fallback,b=r.mode,h=n.child,T=h.sibling;var A={mode:"hidden",children:c.children};return(b&1)===0&&r.child!==h?(c=r.child,c.childLanes=0,c.pendingProps=A,r.deletions=null):(c=po(h,A),c.subtreeFlags=h.subtreeFlags&14680064),T!==null?g=po(T,g):(g=Ho(g,b,a,null),g.flags|=2),g.return=r,c.return=r,c.sibling=g,r.child=c,c=g,g=r.child,b=n.child.memoizedState,b=b===null?$c(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},g.memoizedState=b,g.childLanes=n.childLanes&~a,r.memoizedState=qc,c}return g=n.child,n=g.sibling,c=po(g,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function Yc(n,r){return r=Ci({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function di(n,r,a,c){return c!==null&&xc(c),vr(r,n.child,null,a),n=Yc(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Cb(n,r,a,c,h,g,b){if(a)return r.flags&256?(r.flags&=-257,c=Uc(Error(o(422))),di(n,r,b,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(g=c.fallback,h=r.mode,c=Ci({mode:"visible",children:c.children},h,0,null),g=Ho(g,h,b,null),g.flags|=2,c.return=r,g.return=r,c.sibling=g,r.child=c,(r.mode&1)!==0&&vr(r,n.child,null,b),r.child.memoizedState=$c(b),r.memoizedState=qc,g);if((r.mode&1)===0)return di(n,r,b,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var T=c.dgst;return c=T,g=Error(o(419)),c=Uc(g,c,void 0),di(n,r,b,c)}if(T=(b&n.childLanes)!==0,Ct||T){if(c=tt,c!==null){switch(b&-b){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|b))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,On(n,h),tn(c,n,h,-1))}return cu(),c=Uc(Error(o(421))),di(n,r,b,c)}return h.data==="$?"?(r.flags|=128,r.child=n.child,r=Fb.bind(null,n),h._reactRetry=r,null):(n=g.treeContext,It=to(h.nextSibling),At=r,Fe=!0,Xt=null,n!==null&&(Wt[Bt++]=Nn,Wt[Bt++]=Dn,Wt[Bt++]=Io,Nn=n.id,Dn=n.overflow,Io=r),r=Yc(r,c.children),r.flags|=4096,r)}function Jf(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Cc(n.return,r,a)}function Jc(n,r,a,c,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=h)}function Gf(n,r,a){var c=r.pendingProps,h=c.revealOrder,g=c.tail;if(ft(n,r,c.children,a),c=Be.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Jf(n,a,r);else if(n.tag===19)Jf(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(je(Be,c),(r.mode&1)===0)r.memoizedState=null;else switch(h){case"forwards":for(a=r.child,h=null;a!==null;)n=a.alternate,n!==null&&ri(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=r.child,r.child=null):(h=a.sibling,a.sibling=null),Jc(r,!1,h,a,g);break;case"backwards":for(a=null,h=r.child,r.child=null;h!==null;){if(n=h.alternate,n!==null&&ri(n)===null){r.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Jc(r,!0,a,null,g);break;case"together":Jc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function hi(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Fn(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Lo|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(o(153));if(r.child!==null){for(n=r.child,a=po(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=po(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function Rb(n,r,a){switch(r.tag){case 3:qf(r),yr();break;case 5:cf(r);break;case 1:kt(r.type)&&Ja(r);break;case 4:Ec(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,h=r.memoizedProps.value;je(ei,c._currentValue),c._currentValue=h;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(je(Be,Be.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?Yf(n,r,a):(je(Be,Be.current&1),n=Fn(n,r,a),n!==null?n.sibling:null);je(Be,Be.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return Gf(n,r,a);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),je(Be,Be.current),c)break;return null;case 22:case 23:return r.lanes=0,zf(n,r,a)}return Fn(n,r,a)}var Kf,Gc,Xf,Qf;Kf=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Gc=function(){},Xf=function(n,r,a,c){var h=n.memoizedProps;if(h!==c){n=r.stateNode,Do(vn.current);var g=null;switch(a){case"input":h=Gr(n,h),c=Gr(n,c),g=[];break;case"select":h=_({},h,{value:void 0}),c=_({},c,{value:void 0}),g=[];break;case"textarea":h=er(n,h),c=er(n,c),g=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=qa)}pn(a,c);var b;a=null;for(F in h)if(!c.hasOwnProperty(F)&&h.hasOwnProperty(F)&&h[F]!=null)if(F==="style"){var T=h[F];for(b in T)T.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(i.hasOwnProperty(F)?g||(g=[]):(g=g||[]).push(F,null));for(F in c){var A=c[F];if(T=h?.[F],c.hasOwnProperty(F)&&A!==T&&(A!=null||T!=null))if(F==="style")if(T){for(b in T)!T.hasOwnProperty(b)||A&&A.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in A)A.hasOwnProperty(b)&&T[b]!==A[b]&&(a||(a={}),a[b]=A[b])}else a||(g||(g=[]),g.push(F,a)),a=A;else F==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,T=T?T.__html:void 0,A!=null&&T!==A&&(g=g||[]).push(F,A)):F==="children"?typeof A!="string"&&typeof A!="number"||(g=g||[]).push(F,""+A):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(i.hasOwnProperty(F)?(A!=null&&F==="onScroll"&&Ne("scroll",n),g||T===A||(g=[])):(g=g||[]).push(F,A))}a&&(g=g||[]).push("style",a);var F=g;(r.updateQueue=F)&&(r.flags|=4)}},Qf=function(n,r,a,c){a!==c&&(r.flags|=4)};function Ms(n,r){if(!Fe)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function ct(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function Tb(n,r,a){var c=r.pendingProps;switch(yc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(r),null;case 1:return kt(r.type)&&Ya(),ct(r),null;case 3:return c=r.stateNode,br(),De(St),De(it),Ac(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Qa(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Xt!==null&&(au(Xt),Xt=null))),Gc(n,r),ct(r),null;case 5:Pc(r);var h=Do(Cs.current);if(a=r.type,n!==null&&r.stateNode!=null)Xf(n,r,a,c,h),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(o(166));return ct(r),null}if(n=Do(vn.current),Qa(r)){c=r.stateNode,a=r.type;var g=r.memoizedProps;switch(c[yn]=r,c[ws]=g,n=(r.mode&1)!==0,a){case"dialog":Ne("cancel",c),Ne("close",c);break;case"iframe":case"object":case"embed":Ne("load",c);break;case"video":case"audio":for(h=0;h<gs.length;h++)Ne(gs[h],c);break;case"source":Ne("error",c);break;case"img":case"image":case"link":Ne("error",c),Ne("load",c);break;case"details":Ne("toggle",c);break;case"input":ya(c,g),Ne("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Ne("invalid",c);break;case"textarea":un(c,g),Ne("invalid",c)}pn(a,g),h=null;for(var b in g)if(g.hasOwnProperty(b)){var T=g[b];b==="children"?typeof T=="string"?c.textContent!==T&&(g.suppressHydrationWarning!==!0&&_a(c.textContent,T,n),h=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(g.suppressHydrationWarning!==!0&&_a(c.textContent,T,n),h=["children",""+T]):i.hasOwnProperty(b)&&T!=null&&b==="onScroll"&&Ne("scroll",c)}switch(a){case"input":Ot(c),Zo(c,g,!0);break;case"textarea":Ot(c),wa(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=qa)}c=h,r.updateQueue=c,c!==null&&(r.flags|=4)}else{b=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ht(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=b.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=b.createElement(a,{is:c.is}):(n=b.createElement(a),a==="select"&&(b=n,c.multiple?b.multiple=!0:c.size&&(b.size=c.size))):n=b.createElementNS(n,a),n[yn]=r,n[ws]=c,Kf(n,r,!1,!1),r.stateNode=n;e:{switch(b=Zr(a,c),a){case"dialog":Ne("cancel",n),Ne("close",n),h=c;break;case"iframe":case"object":case"embed":Ne("load",n),h=c;break;case"video":case"audio":for(h=0;h<gs.length;h++)Ne(gs[h],n);h=c;break;case"source":Ne("error",n),h=c;break;case"img":case"image":case"link":Ne("error",n),Ne("load",n),h=c;break;case"details":Ne("toggle",n),h=c;break;case"input":ya(n,c),h=Gr(n,c),Ne("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=_({},c,{value:void 0}),Ne("invalid",n);break;case"textarea":un(n,c),h=er(n,c),Ne("invalid",n);break;default:h=c}pn(a,h),T=h;for(g in T)if(T.hasOwnProperty(g)){var A=T[g];g==="style"?An(n,A):g==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,A!=null&&xa(n,A)):g==="children"?typeof A=="string"?(a!=="textarea"||A!=="")&&hn(n,A):typeof A=="number"&&hn(n,""+A):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(i.hasOwnProperty(g)?A!=null&&g==="onScroll"&&Ne("scroll",n):A!=null&&P(n,g,A,b))}switch(a){case"input":Ot(n),Zo(n,c,!1);break;case"textarea":Ot(n),wa(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ke(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?Ft(n,!!c.multiple,g,!1):c.defaultValue!=null&&Ft(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=qa)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return ct(r),null;case 6:if(n&&r.stateNode!=null)Qf(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(o(166));if(a=Do(Cs.current),Do(vn.current),Qa(r)){if(c=r.stateNode,a=r.memoizedProps,c[yn]=r,(g=c.nodeValue!==a)&&(n=At,n!==null))switch(n.tag){case 3:_a(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&_a(c.nodeValue,a,(n.mode&1)!==0)}g&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[yn]=r,r.stateNode=c}return ct(r),null;case 13:if(De(Be),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Fe&&It!==null&&(r.mode&1)!==0&&(r.flags&128)===0)ef(),yr(),r.flags|=98560,g=!1;else if(g=Qa(r),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(o(318));if(g=r.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(o(317));g[yn]=r}else yr(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;ct(r),g=!1}else Xt!==null&&(au(Xt),Xt=null),g=!0;if(!g)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Be.current&1)!==0?Qe===0&&(Qe=3):cu())),r.updateQueue!==null&&(r.flags|=4),ct(r),null);case 4:return br(),Gc(n,r),n===null&&ys(r.stateNode.containerInfo),ct(r),null;case 10:return kc(r.type._context),ct(r),null;case 17:return kt(r.type)&&Ya(),ct(r),null;case 19:if(De(Be),g=r.memoizedState,g===null)return ct(r),null;if(c=(r.flags&128)!==0,b=g.rendering,b===null)if(c)Ms(g,!1);else{if(Qe!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(b=ri(n),b!==null){for(r.flags|=128,Ms(g,!1),c=b.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)g=a,n=c,g.flags&=14680066,b=g.alternate,b===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=b.childLanes,g.lanes=b.lanes,g.child=b.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=b.memoizedProps,g.memoizedState=b.memoizedState,g.updateQueue=b.updateQueue,g.type=b.type,n=b.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return je(Be,Be.current&1|2),r.child}n=n.sibling}g.tail!==null&&_e()>Rr&&(r.flags|=128,c=!0,Ms(g,!1),r.lanes=4194304)}else{if(!c)if(n=ri(b),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Ms(g,!0),g.tail===null&&g.tailMode==="hidden"&&!b.alternate&&!Fe)return ct(r),null}else 2*_e()-g.renderingStartTime>Rr&&a!==1073741824&&(r.flags|=128,c=!0,Ms(g,!1),r.lanes=4194304);g.isBackwards?(b.sibling=r.child,r.child=b):(a=g.last,a!==null?a.sibling=b:r.child=b,g.last=b)}return g.tail!==null?(r=g.tail,g.rendering=r,g.tail=r.sibling,g.renderingStartTime=_e(),r.sibling=null,a=Be.current,je(Be,c?a&1|2:a&1),r):(ct(r),null);case 22:case 23:return lu(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(jt&1073741824)!==0&&(ct(r),r.subtreeFlags&6&&(r.flags|=8192)):ct(r),null;case 24:return null;case 25:return null}throw Error(o(156,r.tag))}function Eb(n,r){switch(yc(r),r.tag){case 1:return kt(r.type)&&Ya(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return br(),De(St),De(it),Ac(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Pc(r),null;case 13:if(De(Be),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(o(340));yr()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return De(Be),null;case 4:return br(),null;case 10:return kc(r.type._context),null;case 22:case 23:return lu(),null;case 24:return null;default:return null}}var pi=!1,ut=!1,Pb=typeof WeakSet=="function"?WeakSet:Set,oe=null;function kr(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){ze(n,r,c)}else a.current=null}function Kc(n,r,a){try{a()}catch(c){ze(n,r,c)}}var Zf=!1;function Mb(n,r){if(lc=Na,n=Ap(),ec(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var b=0,T=-1,A=-1,F=0,q=0,$=n,V=null;t:for(;;){for(var Z;$!==a||h!==0&&$.nodeType!==3||(T=b+h),$!==g||c!==0&&$.nodeType!==3||(A=b+c),$.nodeType===3&&(b+=$.nodeValue.length),(Z=$.firstChild)!==null;)V=$,$=Z;for(;;){if($===n)break t;if(V===a&&++F===h&&(T=b),V===g&&++q===c&&(A=b),(Z=$.nextSibling)!==null)break;$=V,V=$.parentNode}$=Z}a=T===-1||A===-1?null:{start:T,end:A}}else a=null}a=a||{start:0,end:0}}else a=null;for(cc={focusedElem:n,selectionRange:a},Na=!1,oe=r;oe!==null;)if(r=oe,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,oe=n;else for(;oe!==null;){r=oe;try{var re=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(re!==null){var se=re.memoizedProps,qe=re.memoizedState,O=r.stateNode,j=O.getSnapshotBeforeUpdate(r.elementType===r.type?se:Qt(r.type,se),qe);O.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var L=r.stateNode.containerInfo;L.nodeType===1?L.textContent="":L.nodeType===9&&L.documentElement&&L.removeChild(L.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(G){ze(r,r.return,G)}if(n=r.sibling,n!==null){n.return=r.return,oe=n;break}oe=r.return}return re=Zf,Zf=!1,re}function As(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&Kc(r,a,g)}h=h.next}while(h!==c)}}function fi(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Xc(n){var r=n.ref;if(r!==null){var a=n.stateNode;n.tag,n=a,typeof r=="function"?r(n):r.current=n}}function em(n){var r=n.alternate;r!==null&&(n.alternate=null,em(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[yn],delete r[ws],delete r[pc],delete r[db],delete r[hb])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function tm(n){return n.tag===5||n.tag===3||n.tag===4}function nm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||tm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Qc(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=qa));else if(c!==4&&(n=n.child,n!==null))for(Qc(n,r,a),n=n.sibling;n!==null;)Qc(n,r,a),n=n.sibling}function Zc(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Zc(n,r,a),n=n.sibling;n!==null;)Zc(n,r,a),n=n.sibling}var rt=null,Zt=!1;function io(n,r,a){for(a=a.child;a!==null;)om(n,r,a),a=a.sibling}function om(n,r,a){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(Ea,a)}catch{}switch(a.tag){case 5:ut||kr(a,r);case 6:var c=rt,h=Zt;rt=null,io(n,r,a),rt=c,Zt=h,rt!==null&&(Zt?(n=rt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):rt.removeChild(a.stateNode));break;case 18:rt!==null&&(Zt?(n=rt,a=a.stateNode,n.nodeType===8?hc(n.parentNode,a):n.nodeType===1&&hc(n,a),ls(n)):hc(rt,a.stateNode));break;case 4:c=rt,h=Zt,rt=a.stateNode.containerInfo,Zt=!0,io(n,r,a),rt=c,Zt=h;break;case 0:case 11:case 14:case 15:if(!ut&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var g=h,b=g.destroy;g=g.tag,b!==void 0&&((g&2)!==0||(g&4)!==0)&&Kc(a,r,b),h=h.next}while(h!==c)}io(n,r,a);break;case 1:if(!ut&&(kr(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){ze(a,r,T)}io(n,r,a);break;case 21:io(n,r,a);break;case 22:a.mode&1?(ut=(c=ut)||a.memoizedState!==null,io(n,r,a),ut=c):io(n,r,a);break;default:io(n,r,a)}}function rm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Pb),r.forEach(function(c){var h=Wb.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function en(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var g=n,b=r,T=b;e:for(;T!==null;){switch(T.tag){case 5:rt=T.stateNode,Zt=!1;break e;case 3:rt=T.stateNode.containerInfo,Zt=!0;break e;case 4:rt=T.stateNode.containerInfo,Zt=!0;break e}T=T.return}if(rt===null)throw Error(o(160));om(g,b,h),rt=null,Zt=!1;var A=h.alternate;A!==null&&(A.return=null),h.return=null}catch(F){ze(h,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)sm(r,n),r=r.sibling}function sm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(en(r,n),xn(n),c&4){try{As(3,n,n.return),fi(3,n)}catch(se){ze(n,n.return,se)}try{As(5,n,n.return)}catch(se){ze(n,n.return,se)}}break;case 1:en(r,n),xn(n),c&512&&a!==null&&kr(a,a.return);break;case 5:if(en(r,n),xn(n),c&512&&a!==null&&kr(a,a.return),n.flags&32){var h=n.stateNode;try{hn(h,"")}catch(se){ze(n,n.return,se)}}if(c&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,b=a!==null?a.memoizedProps:g,T=n.type,A=n.updateQueue;if(n.updateQueue=null,A!==null)try{T==="input"&&g.type==="radio"&&g.name!=null&&Kr(h,g),Zr(T,b);var F=Zr(T,g);for(b=0;b<A.length;b+=2){var q=A[b],$=A[b+1];q==="style"?An(h,$):q==="dangerouslySetInnerHTML"?xa(h,$):q==="children"?hn(h,$):P(h,q,$,F)}switch(T){case"input":Xr(h,g);break;case"textarea":va(h,g);break;case"select":var V=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var Z=g.value;Z!=null?Ft(h,!!g.multiple,Z,!1):V!==!!g.multiple&&(g.defaultValue!=null?Ft(h,!!g.multiple,g.defaultValue,!0):Ft(h,!!g.multiple,g.multiple?[]:"",!1))}h[ws]=g}catch(se){ze(n,n.return,se)}}break;case 6:if(en(r,n),xn(n),c&4){if(n.stateNode===null)throw Error(o(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(se){ze(n,n.return,se)}}break;case 3:if(en(r,n),xn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ls(r.containerInfo)}catch(se){ze(n,n.return,se)}break;case 4:en(r,n),xn(n);break;case 13:en(r,n),xn(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(nu=_e())),c&4&&rm(n);break;case 22:if(q=a!==null&&a.memoizedState!==null,n.mode&1?(ut=(F=ut)||q,en(r,n),ut=F):en(r,n),xn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!q&&(n.mode&1)!==0)for(oe=n,q=n.child;q!==null;){for($=oe=q;oe!==null;){switch(V=oe,Z=V.child,V.tag){case 0:case 11:case 14:case 15:As(4,V,V.return);break;case 1:kr(V,V.return);var re=V.stateNode;if(typeof re.componentWillUnmount=="function"){c=V,a=V.return;try{r=c,re.props=r.memoizedProps,re.state=r.memoizedState,re.componentWillUnmount()}catch(se){ze(c,a,se)}}break;case 5:kr(V,V.return);break;case 22:if(V.memoizedState!==null){lm($);continue}}Z!==null?(Z.return=V,oe=Z):lm($)}q=q.sibling}e:for(q=null,$=n;;){if($.tag===5){if(q===null){q=$;try{h=$.stateNode,F?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(T=$.stateNode,A=$.memoizedProps.style,b=A!=null&&A.hasOwnProperty("display")?A.display:null,T.style.display=nr("display",b))}catch(se){ze(n,n.return,se)}}}else if($.tag===6){if(q===null)try{$.stateNode.nodeValue=F?"":$.memoizedProps}catch(se){ze(n,n.return,se)}}else if(($.tag!==22&&$.tag!==23||$.memoizedState===null||$===n)&&$.child!==null){$.child.return=$,$=$.child;continue}if($===n)break e;for(;$.sibling===null;){if($.return===null||$.return===n)break e;q===$&&(q=null),$=$.return}q===$&&(q=null),$.sibling.return=$.return,$=$.sibling}}break;case 19:en(r,n),xn(n),c&4&&rm(n);break;case 21:break;default:en(r,n),xn(n)}}function xn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(tm(a)){var c=a;break e}a=a.return}throw Error(o(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(hn(h,""),c.flags&=-33);var g=nm(n);Zc(n,g,h);break;case 3:case 4:var b=c.stateNode.containerInfo,T=nm(n);Qc(n,T,b);break;default:throw Error(o(161))}}catch(A){ze(n,n.return,A)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Ab(n,r,a){oe=n,am(n)}function am(n,r,a){for(var c=(n.mode&1)!==0;oe!==null;){var h=oe,g=h.child;if(h.tag===22&&c){var b=h.memoizedState!==null||pi;if(!b){var T=h.alternate,A=T!==null&&T.memoizedState!==null||ut;T=pi;var F=ut;if(pi=b,(ut=A)&&!F)for(oe=h;oe!==null;)b=oe,A=b.child,b.tag===22&&b.memoizedState!==null?cm(h):A!==null?(A.return=b,oe=A):cm(h);for(;g!==null;)oe=g,am(g),g=g.sibling;oe=h,pi=T,ut=F}im(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,oe=g):im(n)}}function im(n){for(;oe!==null;){var r=oe;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:ut||fi(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!ut)if(a===null)c.componentDidMount();else{var h=r.elementType===r.type?a.memoizedProps:Qt(r.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=r.updateQueue;g!==null&&lf(r,g,c);break;case 3:var b=r.updateQueue;if(b!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}lf(r,b,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var A=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":A.autoFocus&&a.focus();break;case"img":A.src&&(a.src=A.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var q=F.memoizedState;if(q!==null){var $=q.dehydrated;$!==null&&ls($)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}ut||r.flags&512&&Xc(r)}catch(V){ze(r,r.return,V)}}if(r===n){oe=null;break}if(a=r.sibling,a!==null){a.return=r.return,oe=a;break}oe=r.return}}function lm(n){for(;oe!==null;){var r=oe;if(r===n){oe=null;break}var a=r.sibling;if(a!==null){a.return=r.return,oe=a;break}oe=r.return}}function cm(n){for(;oe!==null;){var r=oe;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{fi(4,r)}catch(A){ze(r,a,A)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var h=r.return;try{c.componentDidMount()}catch(A){ze(r,h,A)}}var g=r.return;try{Xc(r)}catch(A){ze(r,g,A)}break;case 5:var b=r.return;try{Xc(r)}catch(A){ze(r,b,A)}}}catch(A){ze(r,r.return,A)}if(r===n){oe=null;break}var T=r.sibling;if(T!==null){T.return=r.return,oe=T;break}oe=r.return}}var Ib=Math.ceil,mi=D.ReactCurrentDispatcher,eu=D.ReactCurrentOwner,zt=D.ReactCurrentBatchConfig,Re=0,tt=null,Ye=null,st=0,jt=0,Cr=no(0),Qe=0,Is=null,Lo=0,gi=0,tu=0,js=null,Rt=null,nu=0,Rr=1/0,Wn=null,yi=!1,ou=null,lo=null,vi=!1,co=null,wi=0,Ns=0,ru=null,xi=-1,bi=0;function mt(){return(Re&6)!==0?_e():xi!==-1?xi:xi=_e()}function uo(n){return(n.mode&1)===0?1:(Re&2)!==0&&st!==0?st&-st:fb.transition!==null?(bi===0&&(bi=tp()),bi):(n=Me,n!==0||(n=window.event,n=n===void 0?16:up(n.type)),n)}function tn(n,r,a,c){if(50<Ns)throw Ns=0,ru=null,Error(o(185));os(n,a,c),((Re&2)===0||n!==tt)&&(n===tt&&((Re&2)===0&&(gi|=a),Qe===4&&ho(n,st)),Tt(n,c),a===1&&Re===0&&(r.mode&1)===0&&(Rr=_e()+500,Ga&&ro()))}function Tt(n,r){var a=n.callbackNode;fx(n,r);var c=Aa(n,n===tt?st:0);if(c===0)a!==null&&Qh(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Qh(a),r===1)n.tag===0?pb(dm.bind(null,n)):Gp(dm.bind(null,n)),cb(function(){(Re&6)===0&&ro()}),a=null;else{switch(np(c)){case 1:a=Fl;break;case 4:a=Zh;break;case 16:a=Ta;break;case 536870912:a=ep;break;default:a=Ta}a=wm(a,um.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function um(n,r){if(xi=-1,bi=0,(Re&6)!==0)throw Error(o(327));var a=n.callbackNode;if(Tr()&&n.callbackNode!==a)return null;var c=Aa(n,n===tt?st:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=Si(n,c);else{r=c;var h=Re;Re|=2;var g=pm();(tt!==n||st!==r)&&(Wn=null,Rr=_e()+500,Wo(n,r));do try{Db();break}catch(T){hm(n,T)}while(!0);Sc(),mi.current=g,Re=h,Ye!==null?r=0:(tt=null,st=0,r=Qe)}if(r!==0){if(r===2&&(h=Wl(n),h!==0&&(c=h,r=su(n,h))),r===1)throw a=Is,Wo(n,0),ho(n,c),Tt(n,_e()),a;if(r===6)ho(n,c);else{if(h=n.current.alternate,(c&30)===0&&!jb(h)&&(r=Si(n,c),r===2&&(g=Wl(n),g!==0&&(c=g,r=su(n,g))),r===1))throw a=Is,Wo(n,0),ho(n,c),Tt(n,_e()),a;switch(n.finishedWork=h,n.finishedLanes=c,r){case 0:case 1:throw Error(o(345));case 2:Bo(n,Rt,Wn);break;case 3:if(ho(n,c),(c&130023424)===c&&(r=nu+500-_e(),10<r)){if(Aa(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){mt(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=dc(Bo.bind(null,n,Rt,Wn),r);break}Bo(n,Rt,Wn);break;case 4:if(ho(n,c),(c&4194240)===c)break;for(r=n.eventTimes,h=-1;0<c;){var b=31-Gt(c);g=1<<b,b=r[b],b>h&&(h=b),c&=~g}if(c=h,c=_e()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Ib(c/1960))-c,10<c){n.timeoutHandle=dc(Bo.bind(null,n,Rt,Wn),c);break}Bo(n,Rt,Wn);break;case 5:Bo(n,Rt,Wn);break;default:throw Error(o(329))}}}return Tt(n,_e()),n.callbackNode===a?um.bind(null,n):null}function su(n,r){var a=js;return n.current.memoizedState.isDehydrated&&(Wo(n,r).flags|=256),n=Si(n,r),n!==2&&(r=Rt,Rt=a,r!==null&&au(r)),n}function au(n){Rt===null?Rt=n:Rt.push.apply(Rt,n)}function jb(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],g=h.getSnapshot;h=h.value;try{if(!Kt(g(),h))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ho(n,r){for(r&=~tu,r&=~gi,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Gt(r),c=1<<a;n[a]=-1,r&=~c}}function dm(n){if((Re&6)!==0)throw Error(o(327));Tr();var r=Aa(n,0);if((r&1)===0)return Tt(n,_e()),null;var a=Si(n,r);if(n.tag!==0&&a===2){var c=Wl(n);c!==0&&(r=c,a=su(n,c))}if(a===1)throw a=Is,Wo(n,0),ho(n,r),Tt(n,_e()),a;if(a===6)throw Error(o(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Bo(n,Rt,Wn),Tt(n,_e()),null}function iu(n,r){var a=Re;Re|=1;try{return n(r)}finally{Re=a,Re===0&&(Rr=_e()+500,Ga&&ro())}}function Fo(n){co!==null&&co.tag===0&&(Re&6)===0&&Tr();var r=Re;Re|=1;var a=zt.transition,c=Me;try{if(zt.transition=null,Me=1,n)return n()}finally{Me=c,zt.transition=a,Re=r,(Re&6)===0&&ro()}}function lu(){jt=Cr.current,De(Cr)}function Wo(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,lb(a)),Ye!==null)for(a=Ye.return;a!==null;){var c=a;switch(yc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ya();break;case 3:br(),De(St),De(it),Ac();break;case 5:Pc(c);break;case 4:br();break;case 13:De(Be);break;case 19:De(Be);break;case 10:kc(c.type._context);break;case 22:case 23:lu()}a=a.return}if(tt=n,Ye=n=po(n.current,null),st=jt=r,Qe=0,Is=null,tu=gi=Lo=0,Rt=js=null,No!==null){for(r=0;r<No.length;r++)if(a=No[r],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,g=a.pending;if(g!==null){var b=g.next;g.next=h,c.next=b}a.pending=c}No=null}return n}function hm(n,r){do{var a=Ye;try{if(Sc(),si.current=ci,ai){for(var c=He.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}ai=!1}if(Oo=0,et=Xe=He=null,Rs=!1,Ts=0,eu.current=null,a===null||a.return===null){Qe=1,Is=r,Ye=null;break}e:{var g=n,b=a.return,T=a,A=r;if(r=st,T.flags|=32768,A!==null&&typeof A=="object"&&typeof A.then=="function"){var F=A,q=T,$=q.tag;if((q.mode&1)===0&&($===0||$===11||$===15)){var V=q.alternate;V?(q.updateQueue=V.updateQueue,q.memoizedState=V.memoizedState,q.lanes=V.lanes):(q.updateQueue=null,q.memoizedState=null)}var Z=Ff(b);if(Z!==null){Z.flags&=-257,Wf(Z,b,T,g,r),Z.mode&1&&Lf(g,F,r),r=Z,A=F;var re=r.updateQueue;if(re===null){var se=new Set;se.add(A),r.updateQueue=se}else re.add(A);break e}else{if((r&1)===0){Lf(g,F,r),cu();break e}A=Error(o(426))}}else if(Fe&&T.mode&1){var qe=Ff(b);if(qe!==null){(qe.flags&65536)===0&&(qe.flags|=256),Wf(qe,b,T,g,r),xc(Sr(A,T));break e}}g=A=Sr(A,T),Qe!==4&&(Qe=2),js===null?js=[g]:js.push(g),g=b;do{switch(g.tag){case 3:g.flags|=65536,r&=-r,g.lanes|=r;var O=Df(g,A,r);af(g,O);break e;case 1:T=A;var j=g.type,L=g.stateNode;if((g.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(lo===null||!lo.has(L)))){g.flags|=65536,r&=-r,g.lanes|=r;var G=Of(g,T,r);af(g,G);break e}}g=g.return}while(g!==null)}mm(a)}catch(ae){r=ae,Ye===a&&a!==null&&(Ye=a=a.return);continue}break}while(!0)}function pm(){var n=mi.current;return mi.current=ci,n===null?ci:n}function cu(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),tt===null||(Lo&268435455)===0&&(gi&268435455)===0||ho(tt,st)}function Si(n,r){var a=Re;Re|=2;var c=pm();(tt!==n||st!==r)&&(Wn=null,Wo(n,r));do try{Nb();break}catch(h){hm(n,h)}while(!0);if(Sc(),Re=a,mi.current=c,Ye!==null)throw Error(o(261));return tt=null,st=0,Qe}function Nb(){for(;Ye!==null;)fm(Ye)}function Db(){for(;Ye!==null&&!sx();)fm(Ye)}function fm(n){var r=vm(n.alternate,n,jt);n.memoizedProps=n.pendingProps,r===null?mm(n):Ye=r,eu.current=null}function mm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=Tb(a,r,jt),a!==null){Ye=a;return}}else{if(a=Eb(a,r),a!==null){a.flags&=32767,Ye=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Qe=6,Ye=null;return}}if(r=r.sibling,r!==null){Ye=r;return}Ye=r=n}while(r!==null);Qe===0&&(Qe=5)}function Bo(n,r,a){var c=Me,h=zt.transition;try{zt.transition=null,Me=1,Ob(n,r,a,c)}finally{zt.transition=h,Me=c}return null}function Ob(n,r,a,c){do Tr();while(co!==null);if((Re&6)!==0)throw Error(o(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(o(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(mx(n,g),n===tt&&(Ye=tt=null,st=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||vi||(vi=!0,wm(Ta,function(){return Tr(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=zt.transition,zt.transition=null;var b=Me;Me=1;var T=Re;Re|=4,eu.current=null,Mb(n,a),sm(a,n),tb(cc),Na=!!lc,cc=lc=null,n.current=a,Ab(a),ax(),Re=T,Me=b,zt.transition=g}else n.current=a;if(vi&&(vi=!1,co=n,wi=h),g=n.pendingLanes,g===0&&(lo=null),cx(a.stateNode),Tt(n,_e()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)h=r[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(yi)throw yi=!1,n=ou,ou=null,n;return(wi&1)!==0&&n.tag!==0&&Tr(),g=n.pendingLanes,(g&1)!==0?n===ru?Ns++:(Ns=0,ru=n):Ns=0,ro(),null}function Tr(){if(co!==null){var n=np(wi),r=zt.transition,a=Me;try{if(zt.transition=null,Me=16>n?16:n,co===null)var c=!1;else{if(n=co,co=null,wi=0,(Re&6)!==0)throw Error(o(331));var h=Re;for(Re|=4,oe=n.current;oe!==null;){var g=oe,b=g.child;if((oe.flags&16)!==0){var T=g.deletions;if(T!==null){for(var A=0;A<T.length;A++){var F=T[A];for(oe=F;oe!==null;){var q=oe;switch(q.tag){case 0:case 11:case 15:As(8,q,g)}var $=q.child;if($!==null)$.return=q,oe=$;else for(;oe!==null;){q=oe;var V=q.sibling,Z=q.return;if(em(q),q===F){oe=null;break}if(V!==null){V.return=Z,oe=V;break}oe=Z}}}var re=g.alternate;if(re!==null){var se=re.child;if(se!==null){re.child=null;do{var qe=se.sibling;se.sibling=null,se=qe}while(se!==null)}}oe=g}}if((g.subtreeFlags&2064)!==0&&b!==null)b.return=g,oe=b;else e:for(;oe!==null;){if(g=oe,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:As(9,g,g.return)}var O=g.sibling;if(O!==null){O.return=g.return,oe=O;break e}oe=g.return}}var j=n.current;for(oe=j;oe!==null;){b=oe;var L=b.child;if((b.subtreeFlags&2064)!==0&&L!==null)L.return=b,oe=L;else e:for(b=j;oe!==null;){if(T=oe,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:fi(9,T)}}catch(ae){ze(T,T.return,ae)}if(T===b){oe=null;break e}var G=T.sibling;if(G!==null){G.return=T.return,oe=G;break e}oe=T.return}}if(Re=h,ro(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(Ea,n)}catch{}c=!0}return c}finally{Me=a,zt.transition=r}}return!1}function gm(n,r,a){r=Sr(a,r),r=Df(n,r,1),n=ao(n,r,1),r=mt(),n!==null&&(os(n,1,r),Tt(n,r))}function ze(n,r,a){if(n.tag===3)gm(n,n,a);else for(;r!==null;){if(r.tag===3){gm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(lo===null||!lo.has(c))){n=Sr(a,n),n=Of(r,n,1),r=ao(r,n,1),n=mt(),r!==null&&(os(r,1,n),Tt(r,n));break}}r=r.return}}function Lb(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=mt(),n.pingedLanes|=n.suspendedLanes&a,tt===n&&(st&a)===a&&(Qe===4||Qe===3&&(st&130023424)===st&&500>_e()-nu?Wo(n,0):tu|=a),Tt(n,r)}function ym(n,r){r===0&&((n.mode&1)===0?r=1:(r=Ma,Ma<<=1,(Ma&130023424)===0&&(Ma=4194304)));var a=mt();n=On(n,r),n!==null&&(os(n,r,a),Tt(n,a))}function Fb(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),ym(n,a)}function Wb(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(o(314))}c!==null&&c.delete(r),ym(n,a)}var vm;vm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||St.current)Ct=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Ct=!1,Rb(n,r,a);Ct=(n.flags&131072)!==0}else Ct=!1,Fe&&(r.flags&1048576)!==0&&Kp(r,Xa,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;hi(n,r),n=r.pendingProps;var h=fr(r,it.current);xr(r,a),h=Nc(null,r,c,n,h,a);var g=Dc();return r.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,kt(c)?(g=!0,Ja(r)):g=!1,r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Tc(r),h.updater=ui,r.stateNode=h,h._reactInternals=r,Hc(r,c,n,a),r=_c(null,r,c,!0,g,a)):(r.tag=0,Fe&&g&&gc(r),ft(null,r,h,a),r=r.child),r;case 16:c=r.elementType;e:{switch(hi(n,r),n=r.pendingProps,h=c._init,c=h(c._payload),r.type=c,h=r.tag=Hb(c),n=Qt(c,n),h){case 0:r=Vc(null,r,c,n,a);break e;case 1:r=_f(null,r,c,n,a);break e;case 11:r=Bf(null,r,c,n,a);break e;case 14:r=Hf(null,r,c,Qt(c.type,n),a);break e}throw Error(o(306,c,""))}return r;case 0:return c=r.type,h=r.pendingProps,h=r.elementType===c?h:Qt(c,h),Vc(n,r,c,h,a);case 1:return c=r.type,h=r.pendingProps,h=r.elementType===c?h:Qt(c,h),_f(n,r,c,h,a);case 3:e:{if(qf(r),n===null)throw Error(o(387));c=r.pendingProps,g=r.memoizedState,h=g.element,sf(n,r),oi(r,c,null,a);var b=r.memoizedState;if(c=b.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){h=Sr(Error(o(423)),r),r=$f(n,r,c,a,h);break e}else if(c!==h){h=Sr(Error(o(424)),r),r=$f(n,r,c,a,h);break e}else for(It=to(r.stateNode.containerInfo.firstChild),At=r,Fe=!0,Xt=null,a=of(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(yr(),c===h){r=Fn(n,r,a);break e}ft(n,r,c,a)}r=r.child}return r;case 5:return cf(r),n===null&&wc(r),c=r.type,h=r.pendingProps,g=n!==null?n.memoizedProps:null,b=h.children,uc(c,h)?b=null:g!==null&&uc(c,g)&&(r.flags|=32),Vf(n,r),ft(n,r,b,a),r.child;case 6:return n===null&&wc(r),null;case 13:return Yf(n,r,a);case 4:return Ec(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=vr(r,null,c,a):ft(n,r,c,a),r.child;case 11:return c=r.type,h=r.pendingProps,h=r.elementType===c?h:Qt(c,h),Bf(n,r,c,h,a);case 7:return ft(n,r,r.pendingProps,a),r.child;case 8:return ft(n,r,r.pendingProps.children,a),r.child;case 12:return ft(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,h=r.pendingProps,g=r.memoizedProps,b=h.value,je(ei,c._currentValue),c._currentValue=b,g!==null)if(Kt(g.value,b)){if(g.children===h.children&&!St.current){r=Fn(n,r,a);break e}}else for(g=r.child,g!==null&&(g.return=r);g!==null;){var T=g.dependencies;if(T!==null){b=g.child;for(var A=T.firstContext;A!==null;){if(A.context===c){if(g.tag===1){A=Ln(-1,a&-a),A.tag=2;var F=g.updateQueue;if(F!==null){F=F.shared;var q=F.pending;q===null?A.next=A:(A.next=q.next,q.next=A),F.pending=A}}g.lanes|=a,A=g.alternate,A!==null&&(A.lanes|=a),Cc(g.return,a,r),T.lanes|=a;break}A=A.next}}else if(g.tag===10)b=g.type===r.type?null:g.child;else if(g.tag===18){if(b=g.return,b===null)throw Error(o(341));b.lanes|=a,T=b.alternate,T!==null&&(T.lanes|=a),Cc(b,a,r),b=g.sibling}else b=g.child;if(b!==null)b.return=g;else for(b=g;b!==null;){if(b===r){b=null;break}if(g=b.sibling,g!==null){g.return=b.return,b=g;break}b=b.return}g=b}ft(n,r,h.children,a),r=r.child}return r;case 9:return h=r.type,c=r.pendingProps.children,xr(r,a),h=Ht(h),c=c(h),r.flags|=1,ft(n,r,c,a),r.child;case 14:return c=r.type,h=Qt(c,r.pendingProps),h=Qt(c.type,h),Hf(n,r,c,h,a);case 15:return Uf(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,h=r.pendingProps,h=r.elementType===c?h:Qt(c,h),hi(n,r),r.tag=1,kt(c)?(n=!0,Ja(r)):n=!1,xr(r,a),jf(r,c,h),Hc(r,c,h,a),_c(null,r,c,!0,n,a);case 19:return Gf(n,r,a);case 22:return zf(n,r,a)}throw Error(o(156,r.tag))};function wm(n,r){return Xh(n,r)}function Bb(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(n,r,a,c){return new Bb(n,r,a,c)}function uu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Hb(n){if(typeof n=="function")return uu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ee)return 11;if(n===ve)return 14}return 2}function po(n,r){var a=n.alternate;return a===null?(a=Vt(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ki(n,r,a,c,h,g){var b=2;if(c=n,typeof n=="function")uu(n)&&(b=1);else if(typeof n=="string")b=5;else e:switch(n){case z:return Ho(a.children,h,g,r);case Y:b=8,h|=8;break;case ie:return n=Vt(12,a,r,h|2),n.elementType=ie,n.lanes=g,n;case ge:return n=Vt(13,a,r,h),n.elementType=ge,n.lanes=g,n;case K:return n=Vt(19,a,r,h),n.elementType=K,n.lanes=g,n;case X:return Ci(a,h,g,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case le:b=10;break e;case fe:b=9;break e;case ee:b=11;break e;case ve:b=14;break e;case ce:b=16,c=null;break e}throw Error(o(130,n==null?n:typeof n,""))}return r=Vt(b,a,r,h),r.elementType=n,r.type=c,r.lanes=g,r}function Ho(n,r,a,c){return n=Vt(7,n,c,r),n.lanes=a,n}function Ci(n,r,a,c){return n=Vt(22,n,c,r),n.elementType=X,n.lanes=a,n.stateNode={isHidden:!1},n}function du(n,r,a){return n=Vt(6,n,null,r),n.lanes=a,n}function hu(n,r,a){return r=Vt(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Ub(n,r,a,c,h){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bl(0),this.expirationTimes=Bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bl(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function pu(n,r,a,c,h,g,b,T,A){return n=new Ub(n,r,a,T,A),r===1?(r=1,g===!0&&(r|=8)):r=0,g=Vt(3,null,null,r),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tc(g),n}function zb(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function xm(n){if(!n)return oo;n=n._reactInternals;e:{if(Po(n)!==n||n.tag!==1)throw Error(o(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(kt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(o(171))}if(n.tag===1){var a=n.type;if(kt(a))return Yp(n,a,r)}return r}function bm(n,r,a,c,h,g,b,T,A){return n=pu(a,c,!0,n,h,g,b,T,A),n.context=xm(null),a=n.current,c=mt(),h=uo(a),g=Ln(c,h),g.callback=r??null,ao(a,g,h),n.current.lanes=h,os(n,h,c),Tt(n,c),n}function Ri(n,r,a,c){var h=r.current,g=mt(),b=uo(h);return a=xm(a),r.context===null?r.context=a:r.pendingContext=a,r=Ln(g,b),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=ao(h,r,b),n!==null&&(tn(n,h,b,g),ni(n,h,b)),b}function Ti(n){return n=n.current,n.child?(n.child.tag===5,n.child.stateNode):null}function Sm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function fu(n,r){Sm(n,r),(n=n.alternate)&&Sm(n,r)}function Vb(){return null}var km=typeof reportError=="function"?reportError:function(n){console.error(n)};function mu(n){this._internalRoot=n}Ei.prototype.render=mu.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(o(409));Ri(n,r,null,null)},Ei.prototype.unmount=mu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Fo(function(){Ri(null,n,null,null)}),r[In]=null}};function Ei(n){this._internalRoot=n}Ei.prototype.unstable_scheduleHydration=function(n){if(n){var r=sp();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Qn.length&&r!==0&&r<Qn[a].priority;a++);Qn.splice(a,0,n),a===0&&lp(n)}};function gu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Pi(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Cm(){}function _b(n,r,a,c,h){if(h){if(typeof c=="function"){var g=c;c=function(){var F=Ti(b);g.call(F)}}var b=bm(r,c,n,0,null,!1,!1,"",Cm);return n._reactRootContainer=b,n[In]=b.current,ys(n.nodeType===8?n.parentNode:n),Fo(),b}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var T=c;c=function(){var F=Ti(A);T.call(F)}}var A=pu(n,0,!1,null,null,!1,!1,"",Cm);return n._reactRootContainer=A,n[In]=A.current,ys(n.nodeType===8?n.parentNode:n),Fo(function(){Ri(r,A,a,c)}),A}function Mi(n,r,a,c,h){var g=a._reactRootContainer;if(g){var b=g;if(typeof h=="function"){var T=h;h=function(){var A=Ti(b);T.call(A)}}Ri(r,b,n,h)}else b=_b(a,r,n,h,c);return Ti(b)}op=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=ns(r.pendingLanes);a!==0&&(Hl(r,a|1),Tt(r,_e()),(Re&6)===0&&(Rr=_e()+500,ro()))}break;case 13:Fo(function(){var c=On(n,1);if(c!==null){var h=mt();tn(c,n,1,h)}}),fu(n,1)}},Ul=function(n){if(n.tag===13){var r=On(n,134217728);if(r!==null){var a=mt();tn(r,n,134217728,a)}fu(n,134217728)}},rp=function(n){if(n.tag===13){var r=uo(n),a=On(n,r);if(a!==null){var c=mt();tn(a,n,r,c)}fu(n,r)}},sp=function(){return Me},ap=function(n,r){var a=Me;try{return Me=n,r()}finally{Me=a}},rr=function(n,r,a){switch(r){case"input":if(Xr(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var h=$a(c);if(!h)throw Error(o(90));$n(c),Xr(c,h)}}}break;case"textarea":va(n,a);break;case"select":r=a.value,r!=null&&Ft(n,!!a.multiple,r,!1)}},Pe=iu,Ie=Fo;var qb={usingClientEntryPoint:!1,Events:[xs,hr,$a,ka,ye,iu]},Ds={findFiberByHostInstance:Mo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$b={bundleType:Ds.bundleType,version:Ds.version,rendererPackageName:Ds.rendererPackageName,rendererConfig:Ds.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Gh(n),n===null?null:n.stateNode},findFiberByHostInstance:Ds.findFiberByHostInstance||Vb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ai.isDisabled&&Ai.supportsFiber)try{Ea=Ai.inject($b),gn=Ai}catch{}}return Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qb,Et.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gu(r))throw Error(o(200));return zb(n,r,null,a)},Et.createRoot=function(n,r){if(!gu(n))throw Error(o(299));var a=!1,c="",h=km;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),r=pu(n,1,!1,null,null,a,!1,c,h),n[In]=r.current,ys(n.nodeType===8?n.parentNode:n),new mu(r)},Et.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(o(188)):(n=Object.keys(n).join(","),Error(o(268,n)));return n=Gh(r),n=n===null?null:n.stateNode,n},Et.flushSync=function(n){return Fo(n)},Et.hydrate=function(n,r,a){if(!Pi(r))throw Error(o(200));return Mi(null,n,r,!0,a)},Et.hydrateRoot=function(n,r,a){if(!gu(n))throw Error(o(405));var c=a!=null&&a.hydratedSources||null,h=!1,g="",b=km;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),r=bm(r,null,n,1,a??null,h,!1,g,b),n[In]=r.current,ys(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,h]:r.mutableSourceEagerHydrationData.push(a,h);return new Ei(r)},Et.render=function(n,r,a){if(!Pi(r))throw Error(o(200));return Mi(null,n,r,!1,a)},Et.unmountComponentAtNode=function(n){if(!Pi(n))throw Error(o(40));return n._reactRootContainer?(Fo(function(){Mi(null,null,n,!1,function(){n._reactRootContainer=null,n[In]=null})}),!0):!1},Et.unstable_batchedUpdates=iu,Et.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!Pi(a))throw Error(o(200));if(n==null||n._reactInternals===void 0)throw Error(o(38));return Mi(n,r,a,!1,c)},Et.version="18.3.1-next-f1338f8080-20240426",Et}var jm;function Ky(){if(jm)return wu.exports;jm=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),wu.exports=e2(),wu.exports}var Nm;function t2(){if(Nm)return Ii;Nm=1;var e=Ky();return Ii.createRoot=e.createRoot,Ii.hydrateRoot=e.hydrateRoot,Ii}var n2=t2(),x=Ud();const J=Gy(x),zd=Jb({__proto__:null,default:J},[x]);var vl=Ky();const Xy=Gy(vl);function Gs(){return Gs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s])}return e},Gs.apply(this,arguments)}var wo;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(wo||(wo={}));const Dm="popstate";function o2(e){e===void 0&&(e={});function t(i,l){let{pathname:u="/",search:d="",hash:f=""}=Go(i.location.hash.substr(1));return!u.startsWith("/")&&!u.startsWith(".")&&(u="/"+u),td("",{pathname:u,search:d,hash:f},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function o(i,l){let u=i.document.querySelector("base"),d="";if(u&&u.getAttribute("href")){let f=i.location.href,m=f.indexOf("#");d=m===-1?f:f.slice(0,m)}return d+"#"+(typeof l=="string"?l:nl(l))}function s(i,l){wl(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return s2(t,o,s,e)}function Ge(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function wl(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function r2(){return Math.random().toString(36).substr(2,8)}function Om(e,t){return{usr:e.state,key:e.key,idx:t}}function td(e,t,o,s){return o===void 0&&(o=null),Gs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Go(t):t,{state:o,key:t&&t.key||s||r2()})}function nl(e){let{pathname:t="/",search:o="",hash:s=""}=e;return o&&o!=="?"&&(t+=o.charAt(0)==="?"?o:"?"+o),s&&s!=="#"&&(t+=s.charAt(0)==="#"?s:"#"+s),t}function Go(e){let t={};if(e){let o=e.indexOf("#");o>=0&&(t.hash=e.substr(o),e=e.substr(0,o));let s=e.indexOf("?");s>=0&&(t.search=e.substr(s),e=e.substr(0,s)),e&&(t.pathname=e)}return t}function s2(e,t,o,s){s===void 0&&(s={});let{window:i=document.defaultView,v5Compat:l=!1}=s,u=i.history,d=wo.Pop,f=null,m=y();m==null&&(m=0,u.replaceState(Gs({},u.state,{idx:m}),""));function y(){return(u.state||{idx:null}).idx}function v(){d=wo.Pop;let C=y(),E=C==null?null:C-m;m=C,f&&f({action:d,location:k.location,delta:E})}function S(C,E){d=wo.Push;let M=td(k.location,C,E);o&&o(M,C),m=y()+1;let P=Om(M,m),D=k.createHref(M);try{u.pushState(P,"",D)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(D)}l&&f&&f({action:d,location:k.location,delta:1})}function w(C,E){d=wo.Replace;let M=td(k.location,C,E);o&&o(M,C),m=y();let P=Om(M,m),D=k.createHref(M);u.replaceState(P,"",D),l&&f&&f({action:d,location:k.location,delta:0})}function R(C){let E=i.location.origin!=="null"?i.location.origin:i.location.href,M=typeof C=="string"?C:nl(C);return M=M.replace(/ $/,"%20"),Ge(E,"No window.location.(origin|href) available to create URL for href: "+M),new URL(M,E)}let k={get action(){return d},get location(){return e(i,u)},listen(C){if(f)throw new Error("A history only accepts one active listener");return i.addEventListener(Dm,v),f=C,()=>{i.removeEventListener(Dm,v),f=null}},createHref(C){return t(i,C)},createURL:R,encodeLocation(C){let E=R(C);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:S,replace:w,go(C){return u.go(C)}};return k}var Lm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Lm||(Lm={}));function a2(e,t,o){return o===void 0&&(o="/"),i2(e,t,o)}function i2(e,t,o,s){let i=typeof t=="string"?Go(t):t,l=Vd(i.pathname||"/",o);if(l==null)return null;let u=Qy(e);l2(u);let d=null;for(let f=0;d==null&&f<u.length;++f){let m=x2(l);d=y2(u[f],m)}return d}function Qy(e,t,o,s){t===void 0&&(t=[]),o===void 0&&(o=[]),s===void 0&&(s="");let i=(l,u,d)=>{let f={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};f.relativePath.startsWith("/")&&(Ge(f.relativePath.startsWith(s),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(s.length));let m=bo([s,f.relativePath]),y=o.concat(f);l.children&&l.children.length>0&&(Ge(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+m+'".')),Qy(l.children,t,y,m)),!(l.path==null&&!l.index)&&t.push({path:m,score:m2(m,l.index),routesMeta:y})};return e.forEach((l,u)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))i(l,u);else for(let f of Zy(l.path))i(l,u,f)}),t}function Zy(e){let t=e.split("/");if(t.length===0)return[];let[o,...s]=t,i=o.endsWith("?"),l=o.replace(/\?$/,"");if(s.length===0)return i?[l,""]:[l];let u=Zy(s.join("/")),d=[];return d.push(...u.map(f=>f===""?l:[l,f].join("/"))),i&&d.push(...u),d.map(f=>e.startsWith("/")&&f===""?"/":f)}function l2(e){e.sort((t,o)=>t.score!==o.score?o.score-t.score:g2(t.routesMeta.map(s=>s.childrenIndex),o.routesMeta.map(s=>s.childrenIndex)))}const c2=/^:[\w-]+$/,u2=3,d2=2,h2=1,p2=10,f2=-2,Fm=e=>e==="*";function m2(e,t){let o=e.split("/"),s=o.length;return o.some(Fm)&&(s+=f2),t&&(s+=d2),o.filter(i=>!Fm(i)).reduce((i,l)=>i+(c2.test(l)?u2:l===""?h2:p2),s)}function g2(e,t){return e.length===t.length&&e.slice(0,-1).every((s,i)=>s===t[i])?e[e.length-1]-t[t.length-1]:0}function y2(e,t,o){let{routesMeta:s}=e,i={},l="/",u=[];for(let d=0;d<s.length;++d){let f=s[d],m=d===s.length-1,y=l==="/"?t:t.slice(l.length)||"/",v=v2({path:f.relativePath,caseSensitive:f.caseSensitive,end:m},y),S=f.route;if(!v)return null;Object.assign(i,v.params),u.push({params:i,pathname:bo([l,v.pathname]),pathnameBase:R2(bo([l,v.pathnameBase])),route:S}),v.pathnameBase!=="/"&&(l=bo([l,v.pathnameBase]))}return u}function v2(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[o,s]=w2(e.path,e.caseSensitive,e.end),i=t.match(o);if(!i)return null;let l=i[0],u=l.replace(/(.)\/+$/,"$1"),d=i.slice(1);return{params:s.reduce((m,y,v)=>{let{paramName:S,isOptional:w}=y;if(S==="*"){let k=d[v]||"";u=l.slice(0,l.length-k.length).replace(/(.)\/+$/,"$1")}const R=d[v];return w&&!R?m[S]=void 0:m[S]=(R||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:u,pattern:e}}function w2(e,t,o){t===void 0&&(t=!1),o===void 0&&(o=!0),wl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let s=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,f)=>(s.push({paramName:d,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),s]}function x2(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return wl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Vd(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let o=t.endsWith("/")?t.length-1:t.length,s=e.charAt(o);return s&&s!=="/"?null:e.slice(o)||"/"}const b2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,S2=e=>b2.test(e);function k2(e,t){t===void 0&&(t="/");let{pathname:o,search:s="",hash:i=""}=typeof e=="string"?Go(e):e,l;if(o)if(S2(o))l=o;else{if(o.includes("//")){let u=o;o=o.replace(/\/\/+/g,"/"),wl(!1,"Pathnames cannot have embedded double slashes - normalizing "+(u+" -> "+o))}o.startsWith("/")?l=Wm(o.substring(1),"/"):l=Wm(o,t)}else l=t;return{pathname:l,search:T2(s),hash:E2(i)}}function Wm(e,t){let o=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?o.length>1&&o.pop():i!=="."&&o.push(i)}),o.length>1?o.join("/"):"/"}function Su(e,t,o,s){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function C2(e){return e.filter((t,o)=>o===0||t.route.path&&t.route.path.length>0)}function ev(e,t){let o=C2(e);return t?o.map((s,i)=>i===o.length-1?s.pathname:s.pathnameBase):o.map(s=>s.pathnameBase)}function tv(e,t,o,s){s===void 0&&(s=!1);let i;typeof e=="string"?i=Go(e):(i=Gs({},e),Ge(!i.pathname||!i.pathname.includes("?"),Su("?","pathname","search",i)),Ge(!i.pathname||!i.pathname.includes("#"),Su("#","pathname","hash",i)),Ge(!i.search||!i.search.includes("#"),Su("#","search","hash",i)));let l=e===""||i.pathname==="",u=l?"/":i.pathname,d;if(u==null)d=o;else{let v=t.length-1;if(!s&&u.startsWith("..")){let S=u.split("/");for(;S[0]==="..";)S.shift(),v-=1;i.pathname=S.join("/")}d=v>=0?t[v]:"/"}let f=k2(i,d),m=u&&u!=="/"&&u.endsWith("/"),y=(l||u===".")&&o.endsWith("/");return!f.pathname.endsWith("/")&&(m||y)&&(f.pathname+="/"),f}const bo=e=>e.join("/").replace(/\/\/+/g,"/"),R2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),T2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,E2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function P2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const nv=["post","put","patch","delete"];new Set(nv);const M2=["get",...nv];new Set(M2);function Ks(){return Ks=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s])}return e},Ks.apply(this,arguments)}const _d=x.createContext(null),A2=x.createContext(null),Ko=x.createContext(null),xl=x.createContext(null),Xo=x.createContext({outlet:null,matches:[],isDataRoute:!1}),ov=x.createContext(null);function I2(e,t){let{relative:o}=t===void 0?{}:t;ia()||Ge(!1);let{basename:s,navigator:i}=x.useContext(Ko),{hash:l,pathname:u,search:d}=av(e,{relative:o}),f=u;return s!=="/"&&(f=u==="/"?s:bo([s,u])),i.createHref({pathname:f,search:d,hash:l})}function ia(){return x.useContext(xl)!=null}function la(){return ia()||Ge(!1),x.useContext(xl).location}function rv(e){x.useContext(Ko).static||x.useLayoutEffect(e)}function sv(){let{isDataRoute:e}=x.useContext(Xo);return e?_2():j2()}function j2(){ia()||Ge(!1);let e=x.useContext(_d),{basename:t,future:o,navigator:s}=x.useContext(Ko),{matches:i}=x.useContext(Xo),{pathname:l}=la(),u=JSON.stringify(ev(i,o.v7_relativeSplatPath)),d=x.useRef(!1);return rv(()=>{d.current=!0}),x.useCallback(function(m,y){if(y===void 0&&(y={}),!d.current)return;if(typeof m=="number"){s.go(m);return}let v=tv(m,JSON.parse(u),l,y.relative==="path");e==null&&t!=="/"&&(v.pathname=v.pathname==="/"?t:bo([t,v.pathname])),(y.replace?s.replace:s.push)(v,y.state,y)},[t,s,u,l,e])}function av(e,t){let{relative:o}=t===void 0?{}:t,{future:s}=x.useContext(Ko),{matches:i}=x.useContext(Xo),{pathname:l}=la(),u=JSON.stringify(ev(i,s.v7_relativeSplatPath));return x.useMemo(()=>tv(e,JSON.parse(u),l,o==="path"),[e,u,l,o])}function N2(e,t){return D2(e,t)}function D2(e,t,o,s){ia()||Ge(!1);let{navigator:i}=x.useContext(Ko),{matches:l}=x.useContext(Xo),u=l[l.length-1],d=u?u.params:{};u&&u.pathname;let f=u?u.pathnameBase:"/";u&&u.route;let m=la(),y;if(t){var v;let C=typeof t=="string"?Go(t):t;f==="/"||(v=C.pathname)!=null&&v.startsWith(f)||Ge(!1),y=C}else y=m;let S=y.pathname||"/",w=S;if(f!=="/"){let C=f.replace(/^\//,"").split("/");w="/"+S.replace(/^\//,"").split("/").slice(C.length).join("/")}let R=a2(e,{pathname:w}),k=B2(R&&R.map(C=>Object.assign({},C,{params:Object.assign({},d,C.params),pathname:bo([f,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?f:bo([f,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),l,o,s);return t&&k?x.createElement(xl.Provider,{value:{location:Ks({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:wo.Pop}},k):k}function O2(){let e=V2(),t=P2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),o=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),o?x.createElement("pre",{style:i},o):null,null)}const L2=x.createElement(O2,null);class F2 extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,o){return o.location!==t.location||o.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:o.error,location:o.location,revalidation:t.revalidation||o.revalidation}}componentDidCatch(t,o){console.error("React Router caught the following error during render",t,o)}render(){return this.state.error!==void 0?x.createElement(Xo.Provider,{value:this.props.routeContext},x.createElement(ov.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function W2(e){let{routeContext:t,match:o,children:s}=e,i=x.useContext(_d);return i&&i.static&&i.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=o.route.id),x.createElement(Xo.Provider,{value:t},s)}function B2(e,t,o,s){var i;if(t===void 0&&(t=[]),o===void 0&&(o=null),s===void 0&&(s=null),e==null){var l;if(!o)return null;if(o.errors)e=o.matches;else if((l=s)!=null&&l.v7_partialHydration&&t.length===0&&!o.initialized&&o.matches.length>0)e=o.matches;else return null}let u=e,d=(i=o)==null?void 0:i.errors;if(d!=null){let y=u.findIndex(v=>v.route.id&&d?.[v.route.id]!==void 0);y>=0||Ge(!1),u=u.slice(0,Math.min(u.length,y+1))}let f=!1,m=-1;if(o&&s&&s.v7_partialHydration)for(let y=0;y<u.length;y++){let v=u[y];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(m=y),v.route.id){let{loaderData:S,errors:w}=o,R=v.route.loader&&S[v.route.id]===void 0&&(!w||w[v.route.id]===void 0);if(v.route.lazy||R){f=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((y,v,S)=>{let w,R=!1,k=null,C=null;o&&(w=d&&v.route.id?d[v.route.id]:void 0,k=v.route.errorElement||L2,f&&(m<0&&S===0?(q2("route-fallback"),R=!0,C=null):m===S&&(R=!0,C=v.route.hydrateFallbackElement||null)));let E=t.concat(u.slice(0,S+1)),M=()=>{let P;return w?P=k:R?P=C:v.route.Component?P=x.createElement(v.route.Component,null):v.route.element?P=v.route.element:P=y,x.createElement(W2,{match:v,routeContext:{outlet:y,matches:E,isDataRoute:o!=null},children:P})};return o&&(v.route.ErrorBoundary||v.route.errorElement||S===0)?x.createElement(F2,{location:o.location,revalidation:o.revalidation,component:k,error:w,children:M(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):M()},null)}var iv=(function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e})(iv||{}),lv=(function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e})(lv||{});function H2(e){let t=x.useContext(_d);return t||Ge(!1),t}function U2(e){let t=x.useContext(A2);return t||Ge(!1),t}function z2(e){let t=x.useContext(Xo);return t||Ge(!1),t}function cv(e){let t=z2(),o=t.matches[t.matches.length-1];return o.route.id||Ge(!1),o.route.id}function V2(){var e;let t=x.useContext(ov),o=U2(),s=cv();return t!==void 0?t:(e=o.errors)==null?void 0:e[s]}function _2(){let{router:e}=H2(iv.UseNavigateStable),t=cv(lv.UseNavigateStable),o=x.useRef(!1);return rv(()=>{o.current=!0}),x.useCallback(function(i,l){l===void 0&&(l={}),o.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ks({fromRouteId:t},l)))},[e,t])}const Bm={};function q2(e,t,o){Bm[e]||(Bm[e]=!0)}function $2(e,t){e?.v7_startTransition,e?.v7_relativeSplatPath}function Ar(e){Ge(!1)}function Y2(e){let{basename:t="/",children:o=null,location:s,navigationType:i=wo.Pop,navigator:l,static:u=!1,future:d}=e;ia()&&Ge(!1);let f=t.replace(/^\/*/,"/"),m=x.useMemo(()=>({basename:f,navigator:l,static:u,future:Ks({v7_relativeSplatPath:!1},d)}),[f,d,l,u]);typeof s=="string"&&(s=Go(s));let{pathname:y="/",search:v="",hash:S="",state:w=null,key:R="default"}=s,k=x.useMemo(()=>{let C=Vd(y,f);return C==null?null:{location:{pathname:C,search:v,hash:S,state:w,key:R},navigationType:i}},[f,y,v,S,w,R,i]);return k==null?null:x.createElement(Ko.Provider,{value:m},x.createElement(xl.Provider,{children:o,value:k}))}function J2(e){let{children:t,location:o}=e;return N2(nd(t),o)}new Promise(()=>{});function nd(e,t){t===void 0&&(t=[]);let o=[];return x.Children.forEach(e,(s,i)=>{if(!x.isValidElement(s))return;let l=[...t,i];if(s.type===x.Fragment){o.push.apply(o,nd(s.props.children,l));return}s.type!==Ar&&Ge(!1),!s.props.index||!s.props.children||Ge(!1);let u={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(u.children=nd(s.props.children,l)),o.push(u)}),o}function od(){return od=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s])}return e},od.apply(this,arguments)}function G2(e,t){if(e==null)return{};var o={},s=Object.keys(e),i,l;for(l=0;l<s.length;l++)i=s[l],!(t.indexOf(i)>=0)&&(o[i]=e[i]);return o}function K2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function X2(e,t){return e.button===0&&(!t||t==="_self")&&!K2(e)}const Q2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Z2="6";try{window.__reactRouterVersion=Z2}catch{}const e4="startTransition",Hm=zd[e4];function t4(e){let{basename:t,children:o,future:s,window:i}=e,l=x.useRef();l.current==null&&(l.current=o2({window:i,v5Compat:!0}));let u=l.current,[d,f]=x.useState({action:u.action,location:u.location}),{v7_startTransition:m}=s||{},y=x.useCallback(v=>{m&&Hm?Hm(()=>f(v)):f(v)},[f,m]);return x.useLayoutEffect(()=>u.listen(y),[u,y]),x.useEffect(()=>$2(s),[s]),x.createElement(Y2,{basename:t,children:o,location:d.location,navigationType:d.action,navigator:u,future:s})}const n4=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",o4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vo=x.forwardRef(function(t,o){let{onClick:s,relative:i,reloadDocument:l,replace:u,state:d,target:f,to:m,preventScrollReset:y,viewTransition:v}=t,S=G2(t,Q2),{basename:w}=x.useContext(Ko),R,k=!1;if(typeof m=="string"&&o4.test(m)&&(R=m,n4))try{let P=new URL(window.location.href),D=m.startsWith("//")?new URL(P.protocol+m):new URL(m),I=Vd(D.pathname,w);D.origin===P.origin&&I!=null?m=I+D.search+D.hash:k=!0}catch{}let C=I2(m,{relative:i}),E=r4(m,{replace:u,state:d,target:f,preventScrollReset:y,relative:i,viewTransition:v});function M(P){s&&s(P),P.defaultPrevented||E(P)}return x.createElement("a",od({},S,{href:R||C,onClick:k||l?s:M,ref:o,target:f}))});var Um;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Um||(Um={}));var zm;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(zm||(zm={}));function r4(e,t){let{target:o,replace:s,state:i,preventScrollReset:l,relative:u,viewTransition:d}=t===void 0?{}:t,f=sv(),m=la(),y=av(e,{relative:u});return x.useCallback(v=>{if(X2(v,o)){v.preventDefault();let S=s!==void 0?s:nl(m)===nl(y);f(e,{replace:S,state:i,preventScrollReset:l,relative:u,viewTransition:d})}},[m,f,y,s,i,o,e,l,u,d])}const s4=1,a4=1e6;let ku=0;function i4(){return ku=(ku+1)%Number.MAX_SAFE_INTEGER,ku.toString()}const Cu=new Map,Vm=e=>{if(Cu.has(e))return;const t=setTimeout(()=>{Cu.delete(e),Vs({type:"REMOVE_TOAST",toastId:e})},a4);Cu.set(e,t)},l4=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,s4)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(o=>o.id===t.toast.id?{...o,...t.toast}:o)};case"DISMISS_TOAST":{const{toastId:o}=t;return o?Vm(o):e.toasts.forEach(s=>{Vm(s.id)}),{...e,toasts:e.toasts.map(s=>s.id===o||o===void 0?{...s,open:!1}:s)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(o=>o.id!==t.toastId)}}},$i=[];let Yi={toasts:[]};function Vs(e){Yi=l4(Yi,e),$i.forEach(t=>{t(Yi)})}function c4({...e}){const t=i4(),o=i=>Vs({type:"UPDATE_TOAST",toast:{...i,id:t}}),s=()=>Vs({type:"DISMISS_TOAST",toastId:t});return Vs({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:i=>{i||s()}}}),{id:t,dismiss:s,update:o}}function uv(){const[e,t]=x.useState(Yi);return x.useEffect(()=>($i.push(t),()=>{const o=$i.indexOf(t);o>-1&&$i.splice(o,1)}),[e]),{...e,toast:c4,dismiss:o=>Vs({type:"DISMISS_TOAST",toastId:o})}}function We(e,t,{checkForDefaultPrevented:o=!0}={}){return function(i){if(e?.(i),o===!1||!i.defaultPrevented)return t?.(i)}}function _m(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function dv(...e){return t=>{let o=!1;const s=e.map(i=>{const l=_m(i,t);return!o&&typeof l=="function"&&(o=!0),l});if(o)return()=>{for(let i=0;i<s.length;i++){const l=s[i];typeof l=="function"?l():_m(e[i],null)}}}}function wt(...e){return x.useCallback(dv(...e),e)}function u4(e,t){const o=x.createContext(t),s=l=>{const{children:u,...d}=l,f=x.useMemo(()=>d,Object.values(d));return p.jsx(o.Provider,{value:f,children:u})};s.displayName=e+"Provider";function i(l){const u=x.useContext(o);if(u)return u;if(t!==void 0)return t;throw new Error(`\`${l}\` must be used within \`${e}\``)}return[s,i]}function ca(e,t=[]){let o=[];function s(l,u){const d=x.createContext(u),f=o.length;o=[...o,u];const m=v=>{const{scope:S,children:w,...R}=v,k=S?.[e]?.[f]||d,C=x.useMemo(()=>R,Object.values(R));return p.jsx(k.Provider,{value:C,children:w})};m.displayName=l+"Provider";function y(v,S){const w=S?.[e]?.[f]||d,R=x.useContext(w);if(R)return R;if(u!==void 0)return u;throw new Error(`\`${v}\` must be used within \`${l}\``)}return[m,y]}const i=()=>{const l=o.map(u=>x.createContext(u));return function(d){const f=d?.[e]||l;return x.useMemo(()=>({[`__scope${e}`]:{...d,[e]:f}}),[d,f])}};return i.scopeName=e,[s,d4(i,...t)]}function d4(...e){const t=e[0];if(e.length===1)return t;const o=()=>{const s=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(l){const u=s.reduce((d,{useScope:f,scopeName:m})=>{const v=f(l)[`__scope${m}`];return{...d,...v}},{});return x.useMemo(()=>({[`__scope${t.scopeName}`]:u}),[u])}};return o.scopeName=t.scopeName,o}function Xs(e){const t=p4(e),o=x.forwardRef((s,i)=>{const{children:l,...u}=s,d=x.Children.toArray(l),f=d.find(m4);if(f){const m=f.props.children,y=d.map(v=>v===f?x.Children.count(m)>1?x.Children.only(null):x.isValidElement(m)?m.props.children:null:v);return p.jsx(t,{...u,ref:i,children:x.isValidElement(m)?x.cloneElement(m,void 0,y):null})}return p.jsx(t,{...u,ref:i,children:l})});return o.displayName=`${e}.Slot`,o}var h4=Xs("Slot");function p4(e){const t=x.forwardRef((o,s)=>{const{children:i,...l}=o;if(x.isValidElement(i)){const u=y4(i),d=g4(l,i.props);return i.type!==x.Fragment&&(d.ref=s?dv(s,u):u),x.cloneElement(i,d)}return x.Children.count(i)>1?x.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var hv=Symbol("radix.slottable");function f4(e){const t=({children:o})=>p.jsx(p.Fragment,{children:o});return t.displayName=`${e}.Slottable`,t.__radixId=hv,t}function m4(e){return x.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===hv}function g4(e,t){const o={...t};for(const s in t){const i=e[s],l=t[s];/^on[A-Z]/.test(s)?i&&l?o[s]=(...d)=>{const f=l(...d);return i(...d),f}:i&&(o[s]=i):s==="style"?o[s]={...i,...l}:s==="className"&&(o[s]=[i,l].filter(Boolean).join(" "))}return{...e,...o}}function y4(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,o=t&&"isReactWarning"in t&&t.isReactWarning;return o?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,o=t&&"isReactWarning"in t&&t.isReactWarning,o?e.props.ref:e.props.ref||e.ref)}function v4(e){const t=e+"CollectionProvider",[o,s]=ca(t),[i,l]=o(t,{collectionRef:{current:null},itemMap:new Map}),u=k=>{const{scope:C,children:E}=k,M=J.useRef(null),P=J.useRef(new Map).current;return p.jsx(i,{scope:C,itemMap:P,collectionRef:M,children:E})};u.displayName=t;const d=e+"CollectionSlot",f=Xs(d),m=J.forwardRef((k,C)=>{const{scope:E,children:M}=k,P=l(d,E),D=wt(C,P.collectionRef);return p.jsx(f,{ref:D,children:M})});m.displayName=d;const y=e+"CollectionItemSlot",v="data-radix-collection-item",S=Xs(y),w=J.forwardRef((k,C)=>{const{scope:E,children:M,...P}=k,D=J.useRef(null),I=wt(C,D),H=l(y,E);return J.useEffect(()=>(H.itemMap.set(D,{ref:D,...P}),()=>{H.itemMap.delete(D)})),p.jsx(S,{[v]:"",ref:I,children:M})});w.displayName=y;function R(k){const C=l(e+"CollectionConsumer",k);return J.useCallback(()=>{const M=C.collectionRef.current;if(!M)return[];const P=Array.from(M.querySelectorAll(`[${v}]`));return Array.from(C.itemMap.values()).sort((H,z)=>P.indexOf(H.ref.current)-P.indexOf(z.ref.current))},[C.collectionRef,C.itemMap])}return[{Provider:u,Slot:m,ItemSlot:w},R,s]}var w4=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Ke=w4.reduce((e,t)=>{const o=Xs(`Primitive.${t}`),s=x.forwardRef((i,l)=>{const{asChild:u,...d}=i,f=u?o:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),p.jsx(f,{...d,ref:l})});return s.displayName=`Primitive.${t}`,{...e,[t]:s}},{});function pv(e,t){e&&vl.flushSync(()=>e.dispatchEvent(t))}function Rn(e){const t=x.useRef(e);return x.useEffect(()=>{t.current=e}),x.useMemo(()=>(...o)=>t.current?.(...o),[])}function x4(e,t=globalThis?.document){const o=Rn(e);x.useEffect(()=>{const s=i=>{i.key==="Escape"&&o(i)};return t.addEventListener("keydown",s,{capture:!0}),()=>t.removeEventListener("keydown",s,{capture:!0})},[o,t])}var b4="DismissableLayer",rd="dismissableLayer.update",S4="dismissableLayer.pointerDownOutside",k4="dismissableLayer.focusOutside",qm,fv=x.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),bl=x.forwardRef((e,t)=>{const{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:s,onPointerDownOutside:i,onFocusOutside:l,onInteractOutside:u,onDismiss:d,...f}=e,m=x.useContext(fv),[y,v]=x.useState(null),S=y?.ownerDocument??globalThis?.document,[,w]=x.useState({}),R=wt(t,z=>v(z)),k=Array.from(m.layers),[C]=[...m.layersWithOutsidePointerEventsDisabled].slice(-1),E=k.indexOf(C),M=y?k.indexOf(y):-1,P=m.layersWithOutsidePointerEventsDisabled.size>0,D=M>=E,I=R4(z=>{const Y=z.target,ie=[...m.branches].some(le=>le.contains(Y));!D||ie||(i?.(z),u?.(z),z.defaultPrevented||d?.())},S),H=T4(z=>{const Y=z.target;[...m.branches].some(le=>le.contains(Y))||(l?.(z),u?.(z),z.defaultPrevented||d?.())},S);return x4(z=>{M===m.layers.size-1&&(s?.(z),!z.defaultPrevented&&d&&(z.preventDefault(),d()))},S),x.useEffect(()=>{if(y)return o&&(m.layersWithOutsidePointerEventsDisabled.size===0&&(qm=S.body.style.pointerEvents,S.body.style.pointerEvents="none"),m.layersWithOutsidePointerEventsDisabled.add(y)),m.layers.add(y),$m(),()=>{o&&m.layersWithOutsidePointerEventsDisabled.size===1&&(S.body.style.pointerEvents=qm)}},[y,S,o,m]),x.useEffect(()=>()=>{y&&(m.layers.delete(y),m.layersWithOutsidePointerEventsDisabled.delete(y),$m())},[y,m]),x.useEffect(()=>{const z=()=>w({});return document.addEventListener(rd,z),()=>document.removeEventListener(rd,z)},[]),p.jsx(Ke.div,{...f,ref:R,style:{pointerEvents:P?D?"auto":"none":void 0,...e.style},onFocusCapture:We(e.onFocusCapture,H.onFocusCapture),onBlurCapture:We(e.onBlurCapture,H.onBlurCapture),onPointerDownCapture:We(e.onPointerDownCapture,I.onPointerDownCapture)})});bl.displayName=b4;var C4="DismissableLayerBranch",mv=x.forwardRef((e,t)=>{const o=x.useContext(fv),s=x.useRef(null),i=wt(t,s);return x.useEffect(()=>{const l=s.current;if(l)return o.branches.add(l),()=>{o.branches.delete(l)}},[o.branches]),p.jsx(Ke.div,{...e,ref:i})});mv.displayName=C4;function R4(e,t=globalThis?.document){const o=Rn(e),s=x.useRef(!1),i=x.useRef(()=>{});return x.useEffect(()=>{const l=d=>{if(d.target&&!s.current){let f=function(){gv(S4,o,m,{discrete:!0})};const m={originalEvent:d};d.pointerType==="touch"?(t.removeEventListener("click",i.current),i.current=f,t.addEventListener("click",i.current,{once:!0})):f()}else t.removeEventListener("click",i.current);s.current=!1},u=window.setTimeout(()=>{t.addEventListener("pointerdown",l)},0);return()=>{window.clearTimeout(u),t.removeEventListener("pointerdown",l),t.removeEventListener("click",i.current)}},[t,o]),{onPointerDownCapture:()=>s.current=!0}}function T4(e,t=globalThis?.document){const o=Rn(e),s=x.useRef(!1);return x.useEffect(()=>{const i=l=>{l.target&&!s.current&&gv(k4,o,{originalEvent:l},{discrete:!1})};return t.addEventListener("focusin",i),()=>t.removeEventListener("focusin",i)},[t,o]),{onFocusCapture:()=>s.current=!0,onBlurCapture:()=>s.current=!1}}function $m(){const e=new CustomEvent(rd);document.dispatchEvent(e)}function gv(e,t,o,{discrete:s}){const i=o.originalEvent.target,l=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:o});t&&i.addEventListener(e,t,{once:!0}),s?pv(i,l):i.dispatchEvent(l)}var E4=bl,P4=mv,Un=globalThis?.document?x.useLayoutEffect:()=>{},M4="Portal",qd=x.forwardRef((e,t)=>{const{container:o,...s}=e,[i,l]=x.useState(!1);Un(()=>l(!0),[]);const u=o||i&&globalThis?.document?.body;return u?Xy.createPortal(p.jsx(Ke.div,{...s,ref:t}),u):null});qd.displayName=M4;function A4(e,t){return x.useReducer((o,s)=>t[o][s]??o,e)}var zr=e=>{const{present:t,children:o}=e,s=I4(t),i=typeof o=="function"?o({present:s.isPresent}):x.Children.only(o),l=wt(s.ref,j4(i));return typeof o=="function"||s.isPresent?x.cloneElement(i,{ref:l}):null};zr.displayName="Presence";function I4(e){const[t,o]=x.useState(),s=x.useRef(null),i=x.useRef(e),l=x.useRef("none"),u=e?"mounted":"unmounted",[d,f]=A4(u,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return x.useEffect(()=>{const m=ji(s.current);l.current=d==="mounted"?m:"none"},[d]),Un(()=>{const m=s.current,y=i.current;if(y!==e){const S=l.current,w=ji(m);e?f("MOUNT"):w==="none"||m?.display==="none"?f("UNMOUNT"):f(y&&S!==w?"ANIMATION_OUT":"UNMOUNT"),i.current=e}},[e,f]),Un(()=>{if(t){let m;const y=t.ownerDocument.defaultView??window,v=w=>{const k=ji(s.current).includes(w.animationName);if(w.target===t&&k&&(f("ANIMATION_END"),!i.current)){const C=t.style.animationFillMode;t.style.animationFillMode="forwards",m=y.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=C)})}},S=w=>{w.target===t&&(l.current=ji(s.current))};return t.addEventListener("animationstart",S),t.addEventListener("animationcancel",v),t.addEventListener("animationend",v),()=>{y.clearTimeout(m),t.removeEventListener("animationstart",S),t.removeEventListener("animationcancel",v),t.removeEventListener("animationend",v)}}else f("ANIMATION_END")},[t,f]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:x.useCallback(m=>{s.current=m?getComputedStyle(m):null,o(m)},[])}}function ji(e){return e?.animationName||"none"}function j4(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,o=t&&"isReactWarning"in t&&t.isReactWarning;return o?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,o=t&&"isReactWarning"in t&&t.isReactWarning,o?e.props.ref:e.props.ref||e.ref)}var N4=zd[" useInsertionEffect ".trim().toString()]||Un;function yv({prop:e,defaultProp:t,onChange:o=()=>{},caller:s}){const[i,l,u]=D4({defaultProp:t,onChange:o}),d=e!==void 0,f=d?e:i;{const y=x.useRef(e!==void 0);x.useEffect(()=>{const v=y.current;v!==d&&console.warn(`${s} is changing from ${v?"controlled":"uncontrolled"} to ${d?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),y.current=d},[d,s])}const m=x.useCallback(y=>{if(d){const v=O4(y)?y(e):y;v!==e&&u.current?.(v)}else l(y)},[d,e,l,u]);return[f,m]}function D4({defaultProp:e,onChange:t}){const[o,s]=x.useState(e),i=x.useRef(o),l=x.useRef(t);return N4(()=>{l.current=t},[t]),x.useEffect(()=>{i.current!==o&&(l.current?.(o),i.current=o)},[o,i]),[o,s,l]}function O4(e){return typeof e=="function"}var L4=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),F4="VisuallyHidden",Sl=x.forwardRef((e,t)=>p.jsx(Ke.span,{...e,ref:t,style:{...L4,...e.style}}));Sl.displayName=F4;var W4=Sl,$d="ToastProvider",[Yd,B4,H4]=v4("Toast"),[vv]=ca("Toast",[H4]),[U4,kl]=vv($d),wv=e=>{const{__scopeToast:t,label:o="Notification",duration:s=5e3,swipeDirection:i="right",swipeThreshold:l=50,children:u}=e,[d,f]=x.useState(null),[m,y]=x.useState(0),v=x.useRef(!1),S=x.useRef(!1);return o.trim()||console.error(`Invalid prop \`label\` supplied to \`${$d}\`. Expected non-empty \`string\`.`),p.jsx(Yd.Provider,{scope:t,children:p.jsx(U4,{scope:t,label:o,duration:s,swipeDirection:i,swipeThreshold:l,toastCount:m,viewport:d,onViewportChange:f,onToastAdd:x.useCallback(()=>y(w=>w+1),[]),onToastRemove:x.useCallback(()=>y(w=>w-1),[]),isFocusedToastEscapeKeyDownRef:v,isClosePausedRef:S,children:u})})};wv.displayName=$d;var xv="ToastViewport",z4=["F8"],sd="toast.viewportPause",ad="toast.viewportResume",bv=x.forwardRef((e,t)=>{const{__scopeToast:o,hotkey:s=z4,label:i="Notifications ({hotkey})",...l}=e,u=kl(xv,o),d=B4(o),f=x.useRef(null),m=x.useRef(null),y=x.useRef(null),v=x.useRef(null),S=wt(t,v,u.onViewportChange),w=s.join("+").replace(/Key/g,"").replace(/Digit/g,""),R=u.toastCount>0;x.useEffect(()=>{const C=E=>{s.length!==0&&s.every(P=>E[P]||E.code===P)&&v.current?.focus()};return document.addEventListener("keydown",C),()=>document.removeEventListener("keydown",C)},[s]),x.useEffect(()=>{const C=f.current,E=v.current;if(R&&C&&E){const M=()=>{if(!u.isClosePausedRef.current){const H=new CustomEvent(sd);E.dispatchEvent(H),u.isClosePausedRef.current=!0}},P=()=>{if(u.isClosePausedRef.current){const H=new CustomEvent(ad);E.dispatchEvent(H),u.isClosePausedRef.current=!1}},D=H=>{!C.contains(H.relatedTarget)&&P()},I=()=>{C.contains(document.activeElement)||P()};return C.addEventListener("focusin",M),C.addEventListener("focusout",D),C.addEventListener("pointermove",M),C.addEventListener("pointerleave",I),window.addEventListener("blur",M),window.addEventListener("focus",P),()=>{C.removeEventListener("focusin",M),C.removeEventListener("focusout",D),C.removeEventListener("pointermove",M),C.removeEventListener("pointerleave",I),window.removeEventListener("blur",M),window.removeEventListener("focus",P)}}},[R,u.isClosePausedRef]);const k=x.useCallback(({tabbingDirection:C})=>{const M=d().map(P=>{const D=P.ref.current,I=[D,...tS(D)];return C==="forwards"?I:I.reverse()});return(C==="forwards"?M.reverse():M).flat()},[d]);return x.useEffect(()=>{const C=v.current;if(C){const E=M=>{const P=M.altKey||M.ctrlKey||M.metaKey;if(M.key==="Tab"&&!P){const I=document.activeElement,H=M.shiftKey;if(M.target===C&&H){m.current?.focus();return}const ie=k({tabbingDirection:H?"backwards":"forwards"}),le=ie.findIndex(fe=>fe===I);Ru(ie.slice(le+1))?M.preventDefault():H?m.current?.focus():y.current?.focus()}};return C.addEventListener("keydown",E),()=>C.removeEventListener("keydown",E)}},[d,k]),p.jsxs(P4,{ref:f,role:"region","aria-label":i.replace("{hotkey}",w),tabIndex:-1,style:{pointerEvents:R?void 0:"none"},children:[R&&p.jsx(id,{ref:m,onFocusFromOutsideViewport:()=>{const C=k({tabbingDirection:"forwards"});Ru(C)}}),p.jsx(Yd.Slot,{scope:o,children:p.jsx(Ke.ol,{tabIndex:-1,...l,ref:S})}),R&&p.jsx(id,{ref:y,onFocusFromOutsideViewport:()=>{const C=k({tabbingDirection:"backwards"});Ru(C)}})]})});bv.displayName=xv;var Sv="ToastFocusProxy",id=x.forwardRef((e,t)=>{const{__scopeToast:o,onFocusFromOutsideViewport:s,...i}=e,l=kl(Sv,o);return p.jsx(Sl,{"aria-hidden":!0,tabIndex:0,...i,ref:t,style:{position:"fixed"},onFocus:u=>{const d=u.relatedTarget;!l.viewport?.contains(d)&&s()}})});id.displayName=Sv;var ua="Toast",V4="toast.swipeStart",_4="toast.swipeMove",q4="toast.swipeCancel",$4="toast.swipeEnd",kv=x.forwardRef((e,t)=>{const{forceMount:o,open:s,defaultOpen:i,onOpenChange:l,...u}=e,[d,f]=yv({prop:s,defaultProp:i??!0,onChange:l,caller:ua});return p.jsx(zr,{present:o||d,children:p.jsx(G4,{open:d,...u,ref:t,onClose:()=>f(!1),onPause:Rn(e.onPause),onResume:Rn(e.onResume),onSwipeStart:We(e.onSwipeStart,m=>{m.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:We(e.onSwipeMove,m=>{const{x:y,y:v}=m.detail.delta;m.currentTarget.setAttribute("data-swipe","move"),m.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${y}px`),m.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${v}px`)}),onSwipeCancel:We(e.onSwipeCancel,m=>{m.currentTarget.setAttribute("data-swipe","cancel"),m.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),m.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),m.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),m.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:We(e.onSwipeEnd,m=>{const{x:y,y:v}=m.detail.delta;m.currentTarget.setAttribute("data-swipe","end"),m.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),m.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),m.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${y}px`),m.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${v}px`),f(!1)})})})});kv.displayName=ua;var[Y4,J4]=vv(ua,{onClose(){}}),G4=x.forwardRef((e,t)=>{const{__scopeToast:o,type:s="foreground",duration:i,open:l,onClose:u,onEscapeKeyDown:d,onPause:f,onResume:m,onSwipeStart:y,onSwipeMove:v,onSwipeCancel:S,onSwipeEnd:w,...R}=e,k=kl(ua,o),[C,E]=x.useState(null),M=wt(t,K=>E(K)),P=x.useRef(null),D=x.useRef(null),I=i||k.duration,H=x.useRef(0),z=x.useRef(I),Y=x.useRef(0),{onToastAdd:ie,onToastRemove:le}=k,fe=Rn(()=>{C?.contains(document.activeElement)&&k.viewport?.focus(),u()}),ee=x.useCallback(K=>{!K||K===1/0||(window.clearTimeout(Y.current),H.current=new Date().getTime(),Y.current=window.setTimeout(fe,K))},[fe]);x.useEffect(()=>{const K=k.viewport;if(K){const ve=()=>{ee(z.current),m?.()},ce=()=>{const X=new Date().getTime()-H.current;z.current=z.current-X,window.clearTimeout(Y.current),f?.()};return K.addEventListener(sd,ce),K.addEventListener(ad,ve),()=>{K.removeEventListener(sd,ce),K.removeEventListener(ad,ve)}}},[k.viewport,I,f,m,ee]),x.useEffect(()=>{l&&!k.isClosePausedRef.current&&ee(I)},[l,I,k.isClosePausedRef,ee]),x.useEffect(()=>(ie(),()=>le()),[ie,le]);const ge=x.useMemo(()=>C?Av(C):null,[C]);return k.viewport?p.jsxs(p.Fragment,{children:[ge&&p.jsx(K4,{__scopeToast:o,role:"status","aria-live":s==="foreground"?"assertive":"polite","aria-atomic":!0,children:ge}),p.jsx(Y4,{scope:o,onClose:fe,children:vl.createPortal(p.jsx(Yd.ItemSlot,{scope:o,children:p.jsx(E4,{asChild:!0,onEscapeKeyDown:We(d,()=>{k.isFocusedToastEscapeKeyDownRef.current||fe(),k.isFocusedToastEscapeKeyDownRef.current=!1}),children:p.jsx(Ke.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":l?"open":"closed","data-swipe-direction":k.swipeDirection,...R,ref:M,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:We(e.onKeyDown,K=>{K.key==="Escape"&&(d?.(K.nativeEvent),K.nativeEvent.defaultPrevented||(k.isFocusedToastEscapeKeyDownRef.current=!0,fe()))}),onPointerDown:We(e.onPointerDown,K=>{K.button===0&&(P.current={x:K.clientX,y:K.clientY})}),onPointerMove:We(e.onPointerMove,K=>{if(!P.current)return;const ve=K.clientX-P.current.x,ce=K.clientY-P.current.y,X=!!D.current,W=["left","right"].includes(k.swipeDirection),U=["left","up"].includes(k.swipeDirection)?Math.min:Math.max,_=W?U(0,ve):0,N=W?0:U(0,ce),B=K.pointerType==="touch"?10:2,Q={x:_,y:N},ne={originalEvent:K,delta:Q};X?(D.current=Q,Ni(_4,v,ne,{discrete:!1})):Ym(Q,k.swipeDirection,B)?(D.current=Q,Ni(V4,y,ne,{discrete:!1}),K.target.setPointerCapture(K.pointerId)):(Math.abs(ve)>B||Math.abs(ce)>B)&&(P.current=null)}),onPointerUp:We(e.onPointerUp,K=>{const ve=D.current,ce=K.target;if(ce.hasPointerCapture(K.pointerId)&&ce.releasePointerCapture(K.pointerId),D.current=null,P.current=null,ve){const X=K.currentTarget,W={originalEvent:K,delta:ve};Ym(ve,k.swipeDirection,k.swipeThreshold)?Ni($4,w,W,{discrete:!0}):Ni(q4,S,W,{discrete:!0}),X.addEventListener("click",U=>U.preventDefault(),{once:!0})}})})})}),k.viewport)})]}):null}),K4=e=>{const{__scopeToast:t,children:o,...s}=e,i=kl(ua,t),[l,u]=x.useState(!1),[d,f]=x.useState(!1);return Z4(()=>u(!0)),x.useEffect(()=>{const m=window.setTimeout(()=>f(!0),1e3);return()=>window.clearTimeout(m)},[]),d?null:p.jsx(qd,{asChild:!0,children:p.jsx(Sl,{...s,children:l&&p.jsxs(p.Fragment,{children:[i.label," ",o]})})})},X4="ToastTitle",Cv=x.forwardRef((e,t)=>{const{__scopeToast:o,...s}=e;return p.jsx(Ke.div,{...s,ref:t})});Cv.displayName=X4;var Q4="ToastDescription",Rv=x.forwardRef((e,t)=>{const{__scopeToast:o,...s}=e;return p.jsx(Ke.div,{...s,ref:t})});Rv.displayName=Q4;var Tv="ToastAction",Ev=x.forwardRef((e,t)=>{const{altText:o,...s}=e;return o.trim()?p.jsx(Mv,{altText:o,asChild:!0,children:p.jsx(Jd,{...s,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${Tv}\`. Expected non-empty \`string\`.`),null)});Ev.displayName=Tv;var Pv="ToastClose",Jd=x.forwardRef((e,t)=>{const{__scopeToast:o,...s}=e,i=J4(Pv,o);return p.jsx(Mv,{asChild:!0,children:p.jsx(Ke.button,{type:"button",...s,ref:t,onClick:We(e.onClick,i.onClose)})})});Jd.displayName=Pv;var Mv=x.forwardRef((e,t)=>{const{__scopeToast:o,altText:s,...i}=e;return p.jsx(Ke.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":s||void 0,...i,ref:t})});function Av(e){const t=[];return Array.from(e.childNodes).forEach(s=>{if(s.nodeType===s.TEXT_NODE&&s.textContent&&t.push(s.textContent),eS(s)){const i=s.ariaHidden||s.hidden||s.style.display==="none",l=s.dataset.radixToastAnnounceExclude==="";if(!i)if(l){const u=s.dataset.radixToastAnnounceAlt;u&&t.push(u)}else t.push(...Av(s))}}),t}function Ni(e,t,o,{discrete:s}){const i=o.originalEvent.currentTarget,l=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:o});t&&i.addEventListener(e,t,{once:!0}),s?pv(i,l):i.dispatchEvent(l)}var Ym=(e,t,o=0)=>{const s=Math.abs(e.x),i=Math.abs(e.y),l=s>i;return t==="left"||t==="right"?l&&s>o:!l&&i>o};function Z4(e=()=>{}){const t=Rn(e);Un(()=>{let o=0,s=0;return o=window.requestAnimationFrame(()=>s=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(o),window.cancelAnimationFrame(s)}},[t])}function eS(e){return e.nodeType===e.ELEMENT_NODE}function tS(e){const t=[],o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:s=>{const i=s.tagName==="INPUT"&&s.type==="hidden";return s.disabled||s.hidden||i?NodeFilter.FILTER_SKIP:s.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;o.nextNode();)t.push(o.currentNode);return t}function Ru(e){const t=document.activeElement;return e.some(o=>o===t?!0:(o.focus(),document.activeElement!==t))}var nS=wv,Iv=bv,jv=kv,Nv=Cv,Dv=Rv,Ov=Ev,Lv=Jd;function Fv(e){var t,o,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(o=Fv(e[t]))&&(s&&(s+=" "),s+=o)}else for(o in e)e[o]&&(s&&(s+=" "),s+=o);return s}function Wv(){for(var e,t,o=0,s="",i=arguments.length;o<i;o++)(e=arguments[o])&&(t=Fv(e))&&(s&&(s+=" "),s+=t);return s}const Jm=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Gm=Wv,Bv=(e,t)=>o=>{var s;if(t?.variants==null)return Gm(e,o?.class,o?.className);const{variants:i,defaultVariants:l}=t,u=Object.keys(i).map(m=>{const y=o?.[m],v=l?.[m];if(y===null)return null;const S=Jm(y)||Jm(v);return i[m][S]}),d=o&&Object.entries(o).reduce((m,y)=>{let[v,S]=y;return S===void 0||(m[v]=S),m},{}),f=t==null||(s=t.compoundVariants)===null||s===void 0?void 0:s.reduce((m,y)=>{let{class:v,className:S,...w}=y;return Object.entries(w).every(R=>{let[k,C]=R;return Array.isArray(C)?C.includes({...l,...d}[k]):{...l,...d}[k]===C})?[...m,v,S]:m},[]);return Gm(e,u,f,o?.class,o?.className)};const oS=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Hv=(...e)=>e.filter((t,o,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===o).join(" ").trim();var rS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const sS=x.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:i="",children:l,iconNode:u,...d},f)=>x.createElement("svg",{ref:f,...rS,width:t,height:t,stroke:e,strokeWidth:s?Number(o)*24/Number(t):o,className:Hv("lucide",i),...d},[...u.map(([m,y])=>x.createElement(m,y)),...Array.isArray(l)?l:[l]]));const Ce=(e,t)=>{const o=x.forwardRef(({className:s,...i},l)=>x.createElement(sS,{ref:l,iconNode:t,className:Hv(`lucide-${oS(e)}`,s),...i}));return o.displayName=`${e}`,o};const Ji=Ce("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);const aS=Ce("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);const iS=Ce("BrainCircuit",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]);const lS=Ce("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);const Uv=Ce("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);const cS=Ce("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);const uS=Ce("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);const dS=Ce("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);const hS=Ce("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);const pS=Ce("ClipboardCheck",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);const fS=Ce("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);const zv=Ce("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);const Vv=Ce("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);const mS=Ce("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);const _v=Ce("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);const gS=Ce("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);const Gd=Ce("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);const Kd=Ce("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);const yS=Ce("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);const qv=Ce("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);const $v=Ce("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);const Yv=Ce("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);const Xd=Ce("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);const vS=Ce("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);const wS=Ce("MousePointer2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);const xS=Ce("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);const bS=Ce("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);const SS=Ce("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);const kS=Ce("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);const CS=Ce("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);const Km=Ce("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);const RS=Ce("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);const TS=Ce("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);const ES=Ce("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);const da=Ce("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Qd="-",PS=e=>{const t=AS(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:s}=e;return{getClassGroupId:u=>{const d=u.split(Qd);return d[0]===""&&d.length!==1&&d.shift(),Jv(d,t)||MS(u)},getConflictingClassGroupIds:(u,d)=>{const f=o[u]||[];return d&&s[u]?[...f,...s[u]]:f}}},Jv=(e,t)=>{if(e.length===0)return t.classGroupId;const o=e[0],s=t.nextPart.get(o),i=s?Jv(e.slice(1),s):void 0;if(i)return i;if(t.validators.length===0)return;const l=e.join(Qd);return t.validators.find(({validator:u})=>u(l))?.classGroupId},Xm=/^\[(.+)\]$/,MS=e=>{if(Xm.test(e)){const t=Xm.exec(e)[1],o=t?.substring(0,t.indexOf(":"));if(o)return"arbitrary.."+o}},AS=e=>{const{theme:t,prefix:o}=e,s={nextPart:new Map,validators:[]};return jS(Object.entries(e.classGroups),o).forEach(([l,u])=>{ld(u,s,l,t)}),s},ld=(e,t,o,s)=>{e.forEach(i=>{if(typeof i=="string"){const l=i===""?t:Qm(t,i);l.classGroupId=o;return}if(typeof i=="function"){if(IS(i)){ld(i(s),t,o,s);return}t.validators.push({validator:i,classGroupId:o});return}Object.entries(i).forEach(([l,u])=>{ld(u,Qm(t,l),o,s)})})},Qm=(e,t)=>{let o=e;return t.split(Qd).forEach(s=>{o.nextPart.has(s)||o.nextPart.set(s,{nextPart:new Map,validators:[]}),o=o.nextPart.get(s)}),o},IS=e=>e.isThemeGetter,jS=(e,t)=>t?e.map(([o,s])=>{const i=s.map(l=>typeof l=="string"?t+l:typeof l=="object"?Object.fromEntries(Object.entries(l).map(([u,d])=>[t+u,d])):l);return[o,i]}):e,NS=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,o=new Map,s=new Map;const i=(l,u)=>{o.set(l,u),t++,t>e&&(t=0,s=o,o=new Map)};return{get(l){let u=o.get(l);if(u!==void 0)return u;if((u=s.get(l))!==void 0)return i(l,u),u},set(l,u){o.has(l)?o.set(l,u):i(l,u)}}},Gv="!",DS=e=>{const{separator:t,experimentalParseClassName:o}=e,s=t.length===1,i=t[0],l=t.length,u=d=>{const f=[];let m=0,y=0,v;for(let C=0;C<d.length;C++){let E=d[C];if(m===0){if(E===i&&(s||d.slice(C,C+l)===t)){f.push(d.slice(y,C)),y=C+l;continue}if(E==="/"){v=C;continue}}E==="["?m++:E==="]"&&m--}const S=f.length===0?d:d.substring(y),w=S.startsWith(Gv),R=w?S.substring(1):S,k=v&&v>y?v-y:void 0;return{modifiers:f,hasImportantModifier:w,baseClassName:R,maybePostfixModifierPosition:k}};return o?d=>o({className:d,parseClassName:u}):u},OS=e=>{if(e.length<=1)return e;const t=[];let o=[];return e.forEach(s=>{s[0]==="["?(t.push(...o.sort(),s),o=[]):o.push(s)}),t.push(...o.sort()),t},LS=e=>({cache:NS(e.cacheSize),parseClassName:DS(e),...PS(e)}),FS=/\s+/,WS=(e,t)=>{const{parseClassName:o,getClassGroupId:s,getConflictingClassGroupIds:i}=t,l=[],u=e.trim().split(FS);let d="";for(let f=u.length-1;f>=0;f-=1){const m=u[f],{modifiers:y,hasImportantModifier:v,baseClassName:S,maybePostfixModifierPosition:w}=o(m);let R=!!w,k=s(R?S.substring(0,w):S);if(!k){if(!R){d=m+(d.length>0?" "+d:d);continue}if(k=s(S),!k){d=m+(d.length>0?" "+d:d);continue}R=!1}const C=OS(y).join(":"),E=v?C+Gv:C,M=E+k;if(l.includes(M))continue;l.push(M);const P=i(k,R);for(let D=0;D<P.length;++D){const I=P[D];l.push(E+I)}d=m+(d.length>0?" "+d:d)}return d};function BS(){let e=0,t,o,s="";for(;e<arguments.length;)(t=arguments[e++])&&(o=Kv(t))&&(s&&(s+=" "),s+=o);return s}const Kv=e=>{if(typeof e=="string")return e;let t,o="";for(let s=0;s<e.length;s++)e[s]&&(t=Kv(e[s]))&&(o&&(o+=" "),o+=t);return o};function HS(e,...t){let o,s,i,l=u;function u(f){const m=t.reduce((y,v)=>v(y),e());return o=LS(m),s=o.cache.get,i=o.cache.set,l=d,d(f)}function d(f){const m=s(f);if(m)return m;const y=WS(f,o);return i(f,y),y}return function(){return l(BS.apply(null,arguments))}}const Oe=e=>{const t=o=>o[e]||[];return t.isThemeGetter=!0,t},Xv=/^\[(?:([a-z-]+):)?(.+)\]$/i,US=/^\d+\/\d+$/,zS=new Set(["px","full","screen"]),VS=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,_S=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,qS=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,$S=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,YS=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Bn=e=>Or(e)||zS.has(e)||US.test(e),mo=e=>Vr(e,"length",t3),Or=e=>!!e&&!Number.isNaN(Number(e)),Tu=e=>Vr(e,"number",Or),Ls=e=>!!e&&Number.isInteger(Number(e)),JS=e=>e.endsWith("%")&&Or(e.slice(0,-1)),be=e=>Xv.test(e),go=e=>VS.test(e),GS=new Set(["length","size","percentage"]),KS=e=>Vr(e,GS,Qv),XS=e=>Vr(e,"position",Qv),QS=new Set(["image","url"]),ZS=e=>Vr(e,QS,o3),e3=e=>Vr(e,"",n3),Fs=()=>!0,Vr=(e,t,o)=>{const s=Xv.exec(e);return s?s[1]?typeof t=="string"?s[1]===t:t.has(s[1]):o(s[2]):!1},t3=e=>_S.test(e)&&!qS.test(e),Qv=()=>!1,n3=e=>$S.test(e),o3=e=>YS.test(e),r3=()=>{const e=Oe("colors"),t=Oe("spacing"),o=Oe("blur"),s=Oe("brightness"),i=Oe("borderColor"),l=Oe("borderRadius"),u=Oe("borderSpacing"),d=Oe("borderWidth"),f=Oe("contrast"),m=Oe("grayscale"),y=Oe("hueRotate"),v=Oe("invert"),S=Oe("gap"),w=Oe("gradientColorStops"),R=Oe("gradientColorStopPositions"),k=Oe("inset"),C=Oe("margin"),E=Oe("opacity"),M=Oe("padding"),P=Oe("saturate"),D=Oe("scale"),I=Oe("sepia"),H=Oe("skew"),z=Oe("space"),Y=Oe("translate"),ie=()=>["auto","contain","none"],le=()=>["auto","hidden","clip","visible","scroll"],fe=()=>["auto",be,t],ee=()=>[be,t],ge=()=>["",Bn,mo],K=()=>["auto",Or,be],ve=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],ce=()=>["solid","dashed","dotted","double","none"],X=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],W=()=>["start","end","center","between","around","evenly","stretch"],U=()=>["","0",be],_=()=>["auto","avoid","all","avoid-page","page","left","right","column"],N=()=>[Or,be];return{cacheSize:500,separator:":",theme:{colors:[Fs],spacing:[Bn,mo],blur:["none","",go,be],brightness:N(),borderColor:[e],borderRadius:["none","","full",go,be],borderSpacing:ee(),borderWidth:ge(),contrast:N(),grayscale:U(),hueRotate:N(),invert:U(),gap:ee(),gradientColorStops:[e],gradientColorStopPositions:[JS,mo],inset:fe(),margin:fe(),opacity:N(),padding:ee(),saturate:N(),scale:N(),sepia:U(),skew:N(),space:ee(),translate:ee()},classGroups:{aspect:[{aspect:["auto","square","video",be]}],container:["container"],columns:[{columns:[go]}],"break-after":[{"break-after":_()}],"break-before":[{"break-before":_()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ve(),be]}],overflow:[{overflow:le()}],"overflow-x":[{"overflow-x":le()}],"overflow-y":[{"overflow-y":le()}],overscroll:[{overscroll:ie()}],"overscroll-x":[{"overscroll-x":ie()}],"overscroll-y":[{"overscroll-y":ie()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[k]}],"inset-x":[{"inset-x":[k]}],"inset-y":[{"inset-y":[k]}],start:[{start:[k]}],end:[{end:[k]}],top:[{top:[k]}],right:[{right:[k]}],bottom:[{bottom:[k]}],left:[{left:[k]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Ls,be]}],basis:[{basis:fe()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",be]}],grow:[{grow:U()}],shrink:[{shrink:U()}],order:[{order:["first","last","none",Ls,be]}],"grid-cols":[{"grid-cols":[Fs]}],"col-start-end":[{col:["auto",{span:["full",Ls,be]},be]}],"col-start":[{"col-start":K()}],"col-end":[{"col-end":K()}],"grid-rows":[{"grid-rows":[Fs]}],"row-start-end":[{row:["auto",{span:[Ls,be]},be]}],"row-start":[{"row-start":K()}],"row-end":[{"row-end":K()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",be]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",be]}],gap:[{gap:[S]}],"gap-x":[{"gap-x":[S]}],"gap-y":[{"gap-y":[S]}],"justify-content":[{justify:["normal",...W()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...W(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...W(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[M]}],px:[{px:[M]}],py:[{py:[M]}],ps:[{ps:[M]}],pe:[{pe:[M]}],pt:[{pt:[M]}],pr:[{pr:[M]}],pb:[{pb:[M]}],pl:[{pl:[M]}],m:[{m:[C]}],mx:[{mx:[C]}],my:[{my:[C]}],ms:[{ms:[C]}],me:[{me:[C]}],mt:[{mt:[C]}],mr:[{mr:[C]}],mb:[{mb:[C]}],ml:[{ml:[C]}],"space-x":[{"space-x":[z]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[z]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",be,t]}],"min-w":[{"min-w":[be,t,"min","max","fit"]}],"max-w":[{"max-w":[be,t,"none","full","min","max","fit","prose",{screen:[go]},go]}],h:[{h:[be,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[be,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[be,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[be,t,"auto","min","max","fit"]}],"font-size":[{text:["base",go,mo]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Tu]}],"font-family":[{font:[Fs]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",be]}],"line-clamp":[{"line-clamp":["none",Or,Tu]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Bn,be]}],"list-image":[{"list-image":["none",be]}],"list-style-type":[{list:["none","disc","decimal",be]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[E]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[E]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ce(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Bn,mo]}],"underline-offset":[{"underline-offset":["auto",Bn,be]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:ee()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",be]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",be]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[E]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ve(),XS]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",KS]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},ZS]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[R]}],"gradient-via-pos":[{via:[R]}],"gradient-to-pos":[{to:[R]}],"gradient-from":[{from:[w]}],"gradient-via":[{via:[w]}],"gradient-to":[{to:[w]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[d]}],"border-w-x":[{"border-x":[d]}],"border-w-y":[{"border-y":[d]}],"border-w-s":[{"border-s":[d]}],"border-w-e":[{"border-e":[d]}],"border-w-t":[{"border-t":[d]}],"border-w-r":[{"border-r":[d]}],"border-w-b":[{"border-b":[d]}],"border-w-l":[{"border-l":[d]}],"border-opacity":[{"border-opacity":[E]}],"border-style":[{border:[...ce(),"hidden"]}],"divide-x":[{"divide-x":[d]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[d]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[E]}],"divide-style":[{divide:ce()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...ce()]}],"outline-offset":[{"outline-offset":[Bn,be]}],"outline-w":[{outline:[Bn,mo]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:ge()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[E]}],"ring-offset-w":[{"ring-offset":[Bn,mo]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",go,e3]}],"shadow-color":[{shadow:[Fs]}],opacity:[{opacity:[E]}],"mix-blend":[{"mix-blend":[...X(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":X()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[s]}],contrast:[{contrast:[f]}],"drop-shadow":[{"drop-shadow":["","none",go,be]}],grayscale:[{grayscale:[m]}],"hue-rotate":[{"hue-rotate":[y]}],invert:[{invert:[v]}],saturate:[{saturate:[P]}],sepia:[{sepia:[I]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[s]}],"backdrop-contrast":[{"backdrop-contrast":[f]}],"backdrop-grayscale":[{"backdrop-grayscale":[m]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[y]}],"backdrop-invert":[{"backdrop-invert":[v]}],"backdrop-opacity":[{"backdrop-opacity":[E]}],"backdrop-saturate":[{"backdrop-saturate":[P]}],"backdrop-sepia":[{"backdrop-sepia":[I]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[u]}],"border-spacing-x":[{"border-spacing-x":[u]}],"border-spacing-y":[{"border-spacing-y":[u]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",be]}],duration:[{duration:N()}],ease:[{ease:["linear","in","out","in-out",be]}],delay:[{delay:N()}],animate:[{animate:["none","spin","ping","pulse","bounce",be]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[D]}],"scale-x":[{"scale-x":[D]}],"scale-y":[{"scale-y":[D]}],rotate:[{rotate:[Ls,be]}],"translate-x":[{"translate-x":[Y]}],"translate-y":[{"translate-y":[Y]}],"skew-x":[{"skew-x":[H]}],"skew-y":[{"skew-y":[H]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",be]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",be]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":ee()}],"scroll-mx":[{"scroll-mx":ee()}],"scroll-my":[{"scroll-my":ee()}],"scroll-ms":[{"scroll-ms":ee()}],"scroll-me":[{"scroll-me":ee()}],"scroll-mt":[{"scroll-mt":ee()}],"scroll-mr":[{"scroll-mr":ee()}],"scroll-mb":[{"scroll-mb":ee()}],"scroll-ml":[{"scroll-ml":ee()}],"scroll-p":[{"scroll-p":ee()}],"scroll-px":[{"scroll-px":ee()}],"scroll-py":[{"scroll-py":ee()}],"scroll-ps":[{"scroll-ps":ee()}],"scroll-pe":[{"scroll-pe":ee()}],"scroll-pt":[{"scroll-pt":ee()}],"scroll-pr":[{"scroll-pr":ee()}],"scroll-pb":[{"scroll-pb":ee()}],"scroll-pl":[{"scroll-pl":ee()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",be]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Bn,mo,Tu]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},s3=HS(r3);function Pn(...e){return s3(Wv(e))}const a3=nS,Zv=x.forwardRef(({className:e,...t},o)=>p.jsx(Iv,{ref:o,className:Pn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));Zv.displayName=Iv.displayName;const i3=Bv("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),e0=x.forwardRef(({className:e,variant:t,...o},s)=>p.jsx(jv,{ref:s,className:Pn(i3({variant:t}),e),...o}));e0.displayName=jv.displayName;const l3=x.forwardRef(({className:e,...t},o)=>p.jsx(Ov,{ref:o,className:Pn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",e),...t}));l3.displayName=Ov.displayName;const t0=x.forwardRef(({className:e,...t},o)=>p.jsx(Lv,{ref:o,className:Pn("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:p.jsx(da,{className:"h-4 w-4"})}));t0.displayName=Lv.displayName;const n0=x.forwardRef(({className:e,...t},o)=>p.jsx(Nv,{ref:o,className:Pn("text-sm font-semibold",e),...t}));n0.displayName=Nv.displayName;const o0=x.forwardRef(({className:e,...t},o)=>p.jsx(Dv,{ref:o,className:Pn("text-sm opacity-90",e),...t}));o0.displayName=Dv.displayName;function c3(){const{toasts:e}=uv();return p.jsxs(a3,{children:[e.map(function({id:t,title:o,description:s,action:i,...l}){return p.jsxs(e0,{...l,children:[p.jsxs("div",{className:"grid gap-1",children:[o&&p.jsx(n0,{children:o}),s&&p.jsx(o0,{children:s})]}),i,p.jsx(t0,{})]},t)}),p.jsx(Zv,{})]})}var Zm=["light","dark"],u3="(prefers-color-scheme: dark)",d3=x.createContext(void 0),h3={setTheme:e=>{},themes:[]},p3=()=>{var e;return(e=x.useContext(d3))!=null?e:h3};x.memo(({forcedTheme:e,storageKey:t,attribute:o,enableSystem:s,enableColorScheme:i,defaultTheme:l,value:u,attrs:d,nonce:f})=>{let m=l==="system",y=o==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${d.map(R=>`'${R}'`).join(",")})`};`:`var d=document.documentElement,n='${o}',s='setAttribute';`,v=i?Zm.includes(l)&&l?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",S=(R,k=!1,C=!0)=>{let E=u?u[R]:R,M=k?R+"|| ''":`'${E}'`,P="";return i&&C&&!k&&Zm.includes(R)&&(P+=`d.style.colorScheme = '${R}';`),o==="class"?k||E?P+=`c.add(${M})`:P+="null":E&&(P+=`d[s](n,${M})`),P},w=e?`!function(){${y}${S(e)}}()`:s?`!function(){try{${y}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${m})){var t='${u3}',m=window.matchMedia(t);if(m.media!==t||m.matches){${S("dark")}}else{${S("light")}}}else if(e){${u?`var x=${JSON.stringify(u)};`:""}${S(u?"x[e]":"e",!0)}}${m?"":"else{"+S(l,!1,!1)+"}"}${v}}catch(e){}}()`:`!function(){try{${y}var e=localStorage.getItem('${t}');if(e){${u?`var x=${JSON.stringify(u)};`:""}${S(u?"x[e]":"e",!0)}}else{${S(l,!1,!1)};}${v}}catch(t){}}();`;return x.createElement("script",{nonce:f,dangerouslySetInnerHTML:{__html:w}})});var f3=e=>{switch(e){case"success":return y3;case"info":return w3;case"warning":return v3;case"error":return x3;default:return null}},m3=Array(12).fill(0),g3=({visible:e,className:t})=>J.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":e},J.createElement("div",{className:"sonner-spinner"},m3.map((o,s)=>J.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${s}`})))),y3=J.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},J.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),v3=J.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},J.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),w3=J.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},J.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),x3=J.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},J.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),b3=J.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},J.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),J.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),S3=()=>{let[e,t]=J.useState(document.hidden);return J.useEffect(()=>{let o=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",o),()=>window.removeEventListener("visibilitychange",o)},[]),e},cd=1,k3=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;let{message:o,...s}=e,i=typeof e?.id=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:cd++,l=this.toasts.find(d=>d.id===i),u=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(i)&&this.dismissedToasts.delete(i),l?this.toasts=this.toasts.map(d=>d.id===i?(this.publish({...d,...e,id:i,title:o}),{...d,...e,id:i,dismissible:u,title:o}):d):this.addToast({title:o,...s,dismissible:u,id:i}),i},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(t=>{this.subscribers.forEach(o=>o({id:t.id,dismiss:!0}))}),this.subscribers.forEach(t=>t({id:e,dismiss:!0})),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let o;t.loading!==void 0&&(o=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));let s=e instanceof Promise?e:e(),i=o!==void 0,l,u=s.then(async f=>{if(l=["resolve",f],J.isValidElement(f))i=!1,this.create({id:o,type:"default",message:f});else if(R3(f)&&!f.ok){i=!1;let m=typeof t.error=="function"?await t.error(`HTTP error! status: ${f.status}`):t.error,y=typeof t.description=="function"?await t.description(`HTTP error! status: ${f.status}`):t.description;this.create({id:o,type:"error",message:m,description:y})}else if(t.success!==void 0){i=!1;let m=typeof t.success=="function"?await t.success(f):t.success,y=typeof t.description=="function"?await t.description(f):t.description;this.create({id:o,type:"success",message:m,description:y})}}).catch(async f=>{if(l=["reject",f],t.error!==void 0){i=!1;let m=typeof t.error=="function"?await t.error(f):t.error,y=typeof t.description=="function"?await t.description(f):t.description;this.create({id:o,type:"error",message:m,description:y})}}).finally(()=>{var f;i&&(this.dismiss(o),o=void 0),(f=t.finally)==null||f.call(t)}),d=()=>new Promise((f,m)=>u.then(()=>l[0]==="reject"?m(l[1]):f(l[1])).catch(m));return typeof o!="string"&&typeof o!="number"?{unwrap:d}:Object.assign(o,{unwrap:d})},this.custom=(e,t)=>{let o=t?.id||cd++;return this.create({jsx:e(o),id:o,...t}),o},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},Pt=new k3,C3=(e,t)=>{let o=t?.id||cd++;return Pt.addToast({title:e,...t,id:o}),o},R3=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",T3=C3,E3=()=>Pt.toasts,P3=()=>Pt.getActiveToasts();Object.assign(T3,{success:Pt.success,info:Pt.info,warning:Pt.warning,error:Pt.error,custom:Pt.custom,message:Pt.message,promise:Pt.promise,dismiss:Pt.dismiss,loading:Pt.loading},{getHistory:E3,getToasts:P3});function M3(e,{insertAt:t}={}){if(typeof document>"u")return;let o=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",t==="top"&&o.firstChild?o.insertBefore(s,o.firstChild):o.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}M3(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Di(e){return e.label!==void 0}var A3=3,I3="32px",j3="16px",eg=4e3,N3=356,D3=14,O3=20,L3=200;function nn(...e){return e.filter(Boolean).join(" ")}function F3(e){let[t,o]=e.split("-"),s=[];return t&&s.push(t),o&&s.push(o),s}var W3=e=>{var t,o,s,i,l,u,d,f,m,y,v;let{invert:S,toast:w,unstyled:R,interacting:k,setHeights:C,visibleToasts:E,heights:M,index:P,toasts:D,expanded:I,removeToast:H,defaultRichColors:z,closeButton:Y,style:ie,cancelButtonStyle:le,actionButtonStyle:fe,className:ee="",descriptionClassName:ge="",duration:K,position:ve,gap:ce,loadingIcon:X,expandByDefault:W,classNames:U,icons:_,closeButtonAriaLabel:N="Close toast",pauseWhenPageIsHidden:B}=e,[Q,ne]=J.useState(null),[pe,xe]=J.useState(null),[ue,ke]=J.useState(!1),[Te,$e]=J.useState(!1),[Ot,$n]=J.useState(!1),[Lt,Gr]=J.useState(!1),[ya,Kr]=J.useState(!1),[Xr,Zo]=J.useState(0),[Qr,Yn]=J.useState(0),Ft=J.useRef(w.duration||K||eg),er=J.useRef(null),un=J.useRef(null),va=P===0,wa=P+1<=E,ht=w.type,dn=w.dismissible!==!1,tr=w.className||"",xa=w.descriptionClassName||"",hn=J.useMemo(()=>M.findIndex(ye=>ye.toastId===w.id)||0,[M,w.id]),Eo=J.useMemo(()=>{var ye;return(ye=w.closeButton)!=null?ye:Y},[w.closeButton,Y]),ba=J.useMemo(()=>w.duration||K||eg,[w.duration,K]),nr=J.useRef(0),An=J.useRef(0),Sa=J.useRef(0),pn=J.useRef(null),[Zr,es]=ve.split("-"),or=J.useMemo(()=>M.reduce((ye,Pe,Ie)=>Ie>=hn?ye:ye+Pe.height,0),[M,hn]),rr=S3(),Jn=w.invert||S,fn=ht==="loading";An.current=J.useMemo(()=>hn*ce+or,[hn,or]),J.useEffect(()=>{Ft.current=ba},[ba]),J.useEffect(()=>{ke(!0)},[]),J.useEffect(()=>{let ye=un.current;if(ye){let Pe=ye.getBoundingClientRect().height;return Yn(Pe),C(Ie=>[{toastId:w.id,height:Pe,position:w.position},...Ie]),()=>C(Ie=>Ie.filter(pt=>pt.toastId!==w.id))}},[C,w.id]),J.useLayoutEffect(()=>{if(!ue)return;let ye=un.current,Pe=ye.style.height;ye.style.height="auto";let Ie=ye.getBoundingClientRect().height;ye.style.height=Pe,Yn(Ie),C(pt=>pt.find(xt=>xt.toastId===w.id)?pt.map(xt=>xt.toastId===w.id?{...xt,height:Ie}:xt):[{toastId:w.id,height:Ie,position:w.position},...pt])},[ue,w.title,w.description,C,w.id]);let Yt=J.useCallback(()=>{$e(!0),Zo(An.current),C(ye=>ye.filter(Pe=>Pe.toastId!==w.id)),setTimeout(()=>{H(w)},L3)},[w,H,C,An]);J.useEffect(()=>{if(w.promise&&ht==="loading"||w.duration===1/0||w.type==="loading")return;let ye;return I||k||B&&rr?(()=>{if(Sa.current<nr.current){let Pe=new Date().getTime()-nr.current;Ft.current=Ft.current-Pe}Sa.current=new Date().getTime()})():Ft.current!==1/0&&(nr.current=new Date().getTime(),ye=setTimeout(()=>{var Pe;(Pe=w.onAutoClose)==null||Pe.call(w,w),Yt()},Ft.current)),()=>clearTimeout(ye)},[I,k,w,ht,B,rr,Yt]),J.useEffect(()=>{w.delete&&Yt()},[Yt,w.delete]);function ka(){var ye,Pe,Ie;return _!=null&&_.loading?J.createElement("div",{className:nn(U?.loader,(ye=w?.classNames)==null?void 0:ye.loader,"sonner-loader"),"data-visible":ht==="loading"},_.loading):X?J.createElement("div",{className:nn(U?.loader,(Pe=w?.classNames)==null?void 0:Pe.loader,"sonner-loader"),"data-visible":ht==="loading"},X):J.createElement(g3,{className:nn(U?.loader,(Ie=w?.classNames)==null?void 0:Ie.loader),visible:ht==="loading"})}return J.createElement("li",{tabIndex:0,ref:un,className:nn(ee,tr,U?.toast,(t=w?.classNames)==null?void 0:t.toast,U?.default,U?.[ht],(o=w?.classNames)==null?void 0:o[ht]),"data-sonner-toast":"","data-rich-colors":(s=w.richColors)!=null?s:z,"data-styled":!(w.jsx||w.unstyled||R),"data-mounted":ue,"data-promise":!!w.promise,"data-swiped":ya,"data-removed":Te,"data-visible":wa,"data-y-position":Zr,"data-x-position":es,"data-index":P,"data-front":va,"data-swiping":Ot,"data-dismissible":dn,"data-type":ht,"data-invert":Jn,"data-swipe-out":Lt,"data-swipe-direction":pe,"data-expanded":!!(I||W&&ue),style:{"--index":P,"--toasts-before":P,"--z-index":D.length-P,"--offset":`${Te?Xr:An.current}px`,"--initial-height":W?"auto":`${Qr}px`,...ie,...w.style},onDragEnd:()=>{$n(!1),ne(null),pn.current=null},onPointerDown:ye=>{fn||!dn||(er.current=new Date,Zo(An.current),ye.target.setPointerCapture(ye.pointerId),ye.target.tagName!=="BUTTON"&&($n(!0),pn.current={x:ye.clientX,y:ye.clientY}))},onPointerUp:()=>{var ye,Pe,Ie,pt;if(Lt||!dn)return;pn.current=null;let xt=Number(((ye=un.current)==null?void 0:ye.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),bt=Number(((Pe=un.current)==null?void 0:Pe.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Jt=new Date().getTime()-((Ie=er.current)==null?void 0:Ie.getTime()),ot=Q==="x"?xt:bt,mn=Math.abs(ot)/Jt;if(Math.abs(ot)>=O3||mn>.11){Zo(An.current),(pt=w.onDismiss)==null||pt.call(w,w),xe(Q==="x"?xt>0?"right":"left":bt>0?"down":"up"),Yt(),Gr(!0),Kr(!1);return}$n(!1),ne(null)},onPointerMove:ye=>{var Pe,Ie,pt,xt;if(!pn.current||!dn||((Pe=window.getSelection())==null?void 0:Pe.toString().length)>0)return;let bt=ye.clientY-pn.current.y,Jt=ye.clientX-pn.current.x,ot=(Ie=e.swipeDirections)!=null?Ie:F3(ve);!Q&&(Math.abs(Jt)>1||Math.abs(bt)>1)&&ne(Math.abs(Jt)>Math.abs(bt)?"x":"y");let mn={x:0,y:0};Q==="y"?(ot.includes("top")||ot.includes("bottom"))&&(ot.includes("top")&&bt<0||ot.includes("bottom")&&bt>0)&&(mn.y=bt):Q==="x"&&(ot.includes("left")||ot.includes("right"))&&(ot.includes("left")&&Jt<0||ot.includes("right")&&Jt>0)&&(mn.x=Jt),(Math.abs(mn.x)>0||Math.abs(mn.y)>0)&&Kr(!0),(pt=un.current)==null||pt.style.setProperty("--swipe-amount-x",`${mn.x}px`),(xt=un.current)==null||xt.style.setProperty("--swipe-amount-y",`${mn.y}px`)}},Eo&&!w.jsx?J.createElement("button",{"aria-label":N,"data-disabled":fn,"data-close-button":!0,onClick:fn||!dn?()=>{}:()=>{var ye;Yt(),(ye=w.onDismiss)==null||ye.call(w,w)},className:nn(U?.closeButton,(i=w?.classNames)==null?void 0:i.closeButton)},(l=_?.close)!=null?l:b3):null,w.jsx||x.isValidElement(w.title)?w.jsx?w.jsx:typeof w.title=="function"?w.title():w.title:J.createElement(J.Fragment,null,ht||w.icon||w.promise?J.createElement("div",{"data-icon":"",className:nn(U?.icon,(u=w?.classNames)==null?void 0:u.icon)},w.promise||w.type==="loading"&&!w.icon?w.icon||ka():null,w.type!=="loading"?w.icon||_?.[ht]||f3(ht):null):null,J.createElement("div",{"data-content":"",className:nn(U?.content,(d=w?.classNames)==null?void 0:d.content)},J.createElement("div",{"data-title":"",className:nn(U?.title,(f=w?.classNames)==null?void 0:f.title)},typeof w.title=="function"?w.title():w.title),w.description?J.createElement("div",{"data-description":"",className:nn(ge,xa,U?.description,(m=w?.classNames)==null?void 0:m.description)},typeof w.description=="function"?w.description():w.description):null),x.isValidElement(w.cancel)?w.cancel:w.cancel&&Di(w.cancel)?J.createElement("button",{"data-button":!0,"data-cancel":!0,style:w.cancelButtonStyle||le,onClick:ye=>{var Pe,Ie;Di(w.cancel)&&dn&&((Ie=(Pe=w.cancel).onClick)==null||Ie.call(Pe,ye),Yt())},className:nn(U?.cancelButton,(y=w?.classNames)==null?void 0:y.cancelButton)},w.cancel.label):null,x.isValidElement(w.action)?w.action:w.action&&Di(w.action)?J.createElement("button",{"data-button":!0,"data-action":!0,style:w.actionButtonStyle||fe,onClick:ye=>{var Pe,Ie;Di(w.action)&&((Ie=(Pe=w.action).onClick)==null||Ie.call(Pe,ye),!ye.defaultPrevented&&Yt())},className:nn(U?.actionButton,(v=w?.classNames)==null?void 0:v.actionButton)},w.action.label):null))};function tg(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function B3(e,t){let o={};return[e,t].forEach((s,i)=>{let l=i===1,u=l?"--mobile-offset":"--offset",d=l?j3:I3;function f(m){["top","right","bottom","left"].forEach(y=>{o[`${u}-${y}`]=typeof m=="number"?`${m}px`:m})}typeof s=="number"||typeof s=="string"?f(s):typeof s=="object"?["top","right","bottom","left"].forEach(m=>{s[m]===void 0?o[`${u}-${m}`]=d:o[`${u}-${m}`]=typeof s[m]=="number"?`${s[m]}px`:s[m]}):f(d)}),o}var H3=x.forwardRef(function(e,t){let{invert:o,position:s="bottom-right",hotkey:i=["altKey","KeyT"],expand:l,closeButton:u,className:d,offset:f,mobileOffset:m,theme:y="light",richColors:v,duration:S,style:w,visibleToasts:R=A3,toastOptions:k,dir:C=tg(),gap:E=D3,loadingIcon:M,icons:P,containerAriaLabel:D="Notifications",pauseWhenPageIsHidden:I}=e,[H,z]=J.useState([]),Y=J.useMemo(()=>Array.from(new Set([s].concat(H.filter(B=>B.position).map(B=>B.position)))),[H,s]),[ie,le]=J.useState([]),[fe,ee]=J.useState(!1),[ge,K]=J.useState(!1),[ve,ce]=J.useState(y!=="system"?y:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),X=J.useRef(null),W=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),U=J.useRef(null),_=J.useRef(!1),N=J.useCallback(B=>{z(Q=>{var ne;return(ne=Q.find(pe=>pe.id===B.id))!=null&&ne.delete||Pt.dismiss(B.id),Q.filter(({id:pe})=>pe!==B.id)})},[]);return J.useEffect(()=>Pt.subscribe(B=>{if(B.dismiss){z(Q=>Q.map(ne=>ne.id===B.id?{...ne,delete:!0}:ne));return}setTimeout(()=>{Xy.flushSync(()=>{z(Q=>{let ne=Q.findIndex(pe=>pe.id===B.id);return ne!==-1?[...Q.slice(0,ne),{...Q[ne],...B},...Q.slice(ne+1)]:[B,...Q]})})})}),[]),J.useEffect(()=>{if(y!=="system"){ce(y);return}if(y==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?ce("dark"):ce("light")),typeof window>"u")return;let B=window.matchMedia("(prefers-color-scheme: dark)");try{B.addEventListener("change",({matches:Q})=>{ce(Q?"dark":"light")})}catch{B.addListener(({matches:ne})=>{try{ce(ne?"dark":"light")}catch(pe){console.error(pe)}})}},[y]),J.useEffect(()=>{H.length<=1&&ee(!1)},[H]),J.useEffect(()=>{let B=Q=>{var ne,pe;i.every(xe=>Q[xe]||Q.code===xe)&&(ee(!0),(ne=X.current)==null||ne.focus()),Q.code==="Escape"&&(document.activeElement===X.current||(pe=X.current)!=null&&pe.contains(document.activeElement))&&ee(!1)};return document.addEventListener("keydown",B),()=>document.removeEventListener("keydown",B)},[i]),J.useEffect(()=>{if(X.current)return()=>{U.current&&(U.current.focus({preventScroll:!0}),U.current=null,_.current=!1)}},[X.current]),J.createElement("section",{ref:t,"aria-label":`${D} ${W}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},Y.map((B,Q)=>{var ne;let[pe,xe]=B.split("-");return H.length?J.createElement("ol",{key:B,dir:C==="auto"?tg():C,tabIndex:-1,ref:X,className:d,"data-sonner-toaster":!0,"data-theme":ve,"data-y-position":pe,"data-lifted":fe&&H.length>1&&!l,"data-x-position":xe,style:{"--front-toast-height":`${((ne=ie[0])==null?void 0:ne.height)||0}px`,"--width":`${N3}px`,"--gap":`${E}px`,...w,...B3(f,m)},onBlur:ue=>{_.current&&!ue.currentTarget.contains(ue.relatedTarget)&&(_.current=!1,U.current&&(U.current.focus({preventScroll:!0}),U.current=null))},onFocus:ue=>{ue.target instanceof HTMLElement&&ue.target.dataset.dismissible==="false"||_.current||(_.current=!0,U.current=ue.relatedTarget)},onMouseEnter:()=>ee(!0),onMouseMove:()=>ee(!0),onMouseLeave:()=>{ge||ee(!1)},onDragEnd:()=>ee(!1),onPointerDown:ue=>{ue.target instanceof HTMLElement&&ue.target.dataset.dismissible==="false"||K(!0)},onPointerUp:()=>K(!1)},H.filter(ue=>!ue.position&&Q===0||ue.position===B).map((ue,ke)=>{var Te,$e;return J.createElement(W3,{key:ue.id,icons:P,index:ke,toast:ue,defaultRichColors:v,duration:(Te=k?.duration)!=null?Te:S,className:k?.className,descriptionClassName:k?.descriptionClassName,invert:o,visibleToasts:R,closeButton:($e=k?.closeButton)!=null?$e:u,interacting:ge,position:B,style:k?.style,unstyled:k?.unstyled,classNames:k?.classNames,cancelButtonStyle:k?.cancelButtonStyle,actionButtonStyle:k?.actionButtonStyle,removeToast:N,toasts:H.filter(Ot=>Ot.position==ue.position),heights:ie.filter(Ot=>Ot.position==ue.position),setHeights:le,expandByDefault:l,gap:E,loadingIcon:M,expanded:fe,pauseWhenPageIsHidden:I,swipeDirections:e.swipeDirections})})):null}))});const U3=({...e})=>{const{theme:t="system"}=p3();return p.jsx(H3,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})};var z3=zd[" useId ".trim().toString()]||(()=>{}),V3=0;function Eu(e){const[t,o]=x.useState(z3());return Un(()=>{o(s=>s??String(V3++))},[e]),e||(t?`radix-${t}`:"")}const _3=["top","right","bottom","left"],So=Math.min,Nt=Math.max,ol=Math.round,Oi=Math.floor,kn=e=>({x:e,y:e}),q3={left:"right",right:"left",bottom:"top",top:"bottom"},$3={start:"end",end:"start"};function ud(e,t,o){return Nt(e,So(t,o))}function zn(e,t){return typeof e=="function"?e(t):e}function Vn(e){return e.split("-")[0]}function _r(e){return e.split("-")[1]}function Zd(e){return e==="x"?"y":"x"}function eh(e){return e==="y"?"height":"width"}const Y3=new Set(["top","bottom"]);function Sn(e){return Y3.has(Vn(e))?"y":"x"}function th(e){return Zd(Sn(e))}function J3(e,t,o){o===void 0&&(o=!1);const s=_r(e),i=th(e),l=eh(i);let u=i==="x"?s===(o?"end":"start")?"right":"left":s==="start"?"bottom":"top";return t.reference[l]>t.floating[l]&&(u=rl(u)),[u,rl(u)]}function G3(e){const t=rl(e);return[dd(e),t,dd(t)]}function dd(e){return e.replace(/start|end/g,t=>$3[t])}const ng=["left","right"],og=["right","left"],K3=["top","bottom"],X3=["bottom","top"];function Q3(e,t,o){switch(e){case"top":case"bottom":return o?t?og:ng:t?ng:og;case"left":case"right":return t?K3:X3;default:return[]}}function Z3(e,t,o,s){const i=_r(e);let l=Q3(Vn(e),o==="start",s);return i&&(l=l.map(u=>u+"-"+i),t&&(l=l.concat(l.map(dd)))),l}function rl(e){return e.replace(/left|right|bottom|top/g,t=>q3[t])}function e5(e){return{top:0,right:0,bottom:0,left:0,...e}}function r0(e){return typeof e!="number"?e5(e):{top:e,right:e,bottom:e,left:e}}function sl(e){const{x:t,y:o,width:s,height:i}=e;return{width:s,height:i,top:o,left:t,right:t+s,bottom:o+i,x:t,y:o}}function rg(e,t,o){let{reference:s,floating:i}=e;const l=Sn(t),u=th(t),d=eh(u),f=Vn(t),m=l==="y",y=s.x+s.width/2-i.width/2,v=s.y+s.height/2-i.height/2,S=s[d]/2-i[d]/2;let w;switch(f){case"top":w={x:y,y:s.y-i.height};break;case"bottom":w={x:y,y:s.y+s.height};break;case"right":w={x:s.x+s.width,y:v};break;case"left":w={x:s.x-i.width,y:v};break;default:w={x:s.x,y:s.y}}switch(_r(t)){case"start":w[u]-=S*(o&&m?-1:1);break;case"end":w[u]+=S*(o&&m?-1:1);break}return w}const t5=async(e,t,o)=>{const{placement:s="bottom",strategy:i="absolute",middleware:l=[],platform:u}=o,d=l.filter(Boolean),f=await(u.isRTL==null?void 0:u.isRTL(t));let m=await u.getElementRects({reference:e,floating:t,strategy:i}),{x:y,y:v}=rg(m,s,f),S=s,w={},R=0;for(let k=0;k<d.length;k++){const{name:C,fn:E}=d[k],{x:M,y:P,data:D,reset:I}=await E({x:y,y:v,initialPlacement:s,placement:S,strategy:i,middlewareData:w,rects:m,platform:u,elements:{reference:e,floating:t}});y=M??y,v=P??v,w={...w,[C]:{...w[C],...D}},I&&R<=50&&(R++,typeof I=="object"&&(I.placement&&(S=I.placement),I.rects&&(m=I.rects===!0?await u.getElementRects({reference:e,floating:t,strategy:i}):I.rects),{x:y,y:v}=rg(m,S,f)),k=-1)}return{x:y,y:v,placement:S,strategy:i,middlewareData:w}};async function Qs(e,t){var o;t===void 0&&(t={});const{x:s,y:i,platform:l,rects:u,elements:d,strategy:f}=e,{boundary:m="clippingAncestors",rootBoundary:y="viewport",elementContext:v="floating",altBoundary:S=!1,padding:w=0}=zn(t,e),R=r0(w),C=d[S?v==="floating"?"reference":"floating":v],E=sl(await l.getClippingRect({element:(o=await(l.isElement==null?void 0:l.isElement(C)))==null||o?C:C.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(d.floating)),boundary:m,rootBoundary:y,strategy:f})),M=v==="floating"?{x:s,y:i,width:u.floating.width,height:u.floating.height}:u.reference,P=await(l.getOffsetParent==null?void 0:l.getOffsetParent(d.floating)),D=await(l.isElement==null?void 0:l.isElement(P))?await(l.getScale==null?void 0:l.getScale(P))||{x:1,y:1}:{x:1,y:1},I=sl(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:d,rect:M,offsetParent:P,strategy:f}):M);return{top:(E.top-I.top+R.top)/D.y,bottom:(I.bottom-E.bottom+R.bottom)/D.y,left:(E.left-I.left+R.left)/D.x,right:(I.right-E.right+R.right)/D.x}}const n5=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:s,placement:i,rects:l,platform:u,elements:d,middlewareData:f}=t,{element:m,padding:y=0}=zn(e,t)||{};if(m==null)return{};const v=r0(y),S={x:o,y:s},w=th(i),R=eh(w),k=await u.getDimensions(m),C=w==="y",E=C?"top":"left",M=C?"bottom":"right",P=C?"clientHeight":"clientWidth",D=l.reference[R]+l.reference[w]-S[w]-l.floating[R],I=S[w]-l.reference[w],H=await(u.getOffsetParent==null?void 0:u.getOffsetParent(m));let z=H?H[P]:0;(!z||!await(u.isElement==null?void 0:u.isElement(H)))&&(z=d.floating[P]||l.floating[R]);const Y=D/2-I/2,ie=z/2-k[R]/2-1,le=So(v[E],ie),fe=So(v[M],ie),ee=le,ge=z-k[R]-fe,K=z/2-k[R]/2+Y,ve=ud(ee,K,ge),ce=!f.arrow&&_r(i)!=null&&K!==ve&&l.reference[R]/2-(K<ee?le:fe)-k[R]/2<0,X=ce?K<ee?K-ee:K-ge:0;return{[w]:S[w]+X,data:{[w]:ve,centerOffset:K-ve-X,...ce&&{alignmentOffset:X}},reset:ce}}}),o5=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var o,s;const{placement:i,middlewareData:l,rects:u,initialPlacement:d,platform:f,elements:m}=t,{mainAxis:y=!0,crossAxis:v=!0,fallbackPlacements:S,fallbackStrategy:w="bestFit",fallbackAxisSideDirection:R="none",flipAlignment:k=!0,...C}=zn(e,t);if((o=l.arrow)!=null&&o.alignmentOffset)return{};const E=Vn(i),M=Sn(d),P=Vn(d)===d,D=await(f.isRTL==null?void 0:f.isRTL(m.floating)),I=S||(P||!k?[rl(d)]:G3(d)),H=R!=="none";!S&&H&&I.push(...Z3(d,k,R,D));const z=[d,...I],Y=await Qs(t,C),ie=[];let le=((s=l.flip)==null?void 0:s.overflows)||[];if(y&&ie.push(Y[E]),v){const K=J3(i,u,D);ie.push(Y[K[0]],Y[K[1]])}if(le=[...le,{placement:i,overflows:ie}],!ie.every(K=>K<=0)){var fe,ee;const K=(((fe=l.flip)==null?void 0:fe.index)||0)+1,ve=z[K];if(ve&&(!(v==="alignment"?M!==Sn(ve):!1)||le.every(W=>W.overflows[0]>0&&Sn(W.placement)===M)))return{data:{index:K,overflows:le},reset:{placement:ve}};let ce=(ee=le.filter(X=>X.overflows[0]<=0).sort((X,W)=>X.overflows[1]-W.overflows[1])[0])==null?void 0:ee.placement;if(!ce)switch(w){case"bestFit":{var ge;const X=(ge=le.filter(W=>{if(H){const U=Sn(W.placement);return U===M||U==="y"}return!0}).map(W=>[W.placement,W.overflows.filter(U=>U>0).reduce((U,_)=>U+_,0)]).sort((W,U)=>W[1]-U[1])[0])==null?void 0:ge[0];X&&(ce=X);break}case"initialPlacement":ce=d;break}if(i!==ce)return{reset:{placement:ce}}}return{}}}};function sg(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function ag(e){return _3.some(t=>e[t]>=0)}const r5=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:o}=t,{strategy:s="referenceHidden",...i}=zn(e,t);switch(s){case"referenceHidden":{const l=await Qs(t,{...i,elementContext:"reference"}),u=sg(l,o.reference);return{data:{referenceHiddenOffsets:u,referenceHidden:ag(u)}}}case"escaped":{const l=await Qs(t,{...i,altBoundary:!0}),u=sg(l,o.floating);return{data:{escapedOffsets:u,escaped:ag(u)}}}default:return{}}}}},s0=new Set(["left","top"]);async function s5(e,t){const{placement:o,platform:s,elements:i}=e,l=await(s.isRTL==null?void 0:s.isRTL(i.floating)),u=Vn(o),d=_r(o),f=Sn(o)==="y",m=s0.has(u)?-1:1,y=l&&f?-1:1,v=zn(t,e);let{mainAxis:S,crossAxis:w,alignmentAxis:R}=typeof v=="number"?{mainAxis:v,crossAxis:0,alignmentAxis:null}:{mainAxis:v.mainAxis||0,crossAxis:v.crossAxis||0,alignmentAxis:v.alignmentAxis};return d&&typeof R=="number"&&(w=d==="end"?R*-1:R),f?{x:w*y,y:S*m}:{x:S*m,y:w*y}}const a5=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var o,s;const{x:i,y:l,placement:u,middlewareData:d}=t,f=await s5(t,e);return u===((o=d.offset)==null?void 0:o.placement)&&(s=d.arrow)!=null&&s.alignmentOffset?{}:{x:i+f.x,y:l+f.y,data:{...f,placement:u}}}}},i5=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:s,placement:i}=t,{mainAxis:l=!0,crossAxis:u=!1,limiter:d={fn:C=>{let{x:E,y:M}=C;return{x:E,y:M}}},...f}=zn(e,t),m={x:o,y:s},y=await Qs(t,f),v=Sn(Vn(i)),S=Zd(v);let w=m[S],R=m[v];if(l){const C=S==="y"?"top":"left",E=S==="y"?"bottom":"right",M=w+y[C],P=w-y[E];w=ud(M,w,P)}if(u){const C=v==="y"?"top":"left",E=v==="y"?"bottom":"right",M=R+y[C],P=R-y[E];R=ud(M,R,P)}const k=d.fn({...t,[S]:w,[v]:R});return{...k,data:{x:k.x-o,y:k.y-s,enabled:{[S]:l,[v]:u}}}}}},l5=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:o,y:s,placement:i,rects:l,middlewareData:u}=t,{offset:d=0,mainAxis:f=!0,crossAxis:m=!0}=zn(e,t),y={x:o,y:s},v=Sn(i),S=Zd(v);let w=y[S],R=y[v];const k=zn(d,t),C=typeof k=="number"?{mainAxis:k,crossAxis:0}:{mainAxis:0,crossAxis:0,...k};if(f){const P=S==="y"?"height":"width",D=l.reference[S]-l.floating[P]+C.mainAxis,I=l.reference[S]+l.reference[P]-C.mainAxis;w<D?w=D:w>I&&(w=I)}if(m){var E,M;const P=S==="y"?"width":"height",D=s0.has(Vn(i)),I=l.reference[v]-l.floating[P]+(D&&((E=u.offset)==null?void 0:E[v])||0)+(D?0:C.crossAxis),H=l.reference[v]+l.reference[P]+(D?0:((M=u.offset)==null?void 0:M[v])||0)-(D?C.crossAxis:0);R<I?R=I:R>H&&(R=H)}return{[S]:w,[v]:R}}}},c5=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var o,s;const{placement:i,rects:l,platform:u,elements:d}=t,{apply:f=()=>{},...m}=zn(e,t),y=await Qs(t,m),v=Vn(i),S=_r(i),w=Sn(i)==="y",{width:R,height:k}=l.floating;let C,E;v==="top"||v==="bottom"?(C=v,E=S===(await(u.isRTL==null?void 0:u.isRTL(d.floating))?"start":"end")?"left":"right"):(E=v,C=S==="end"?"top":"bottom");const M=k-y.top-y.bottom,P=R-y.left-y.right,D=So(k-y[C],M),I=So(R-y[E],P),H=!t.middlewareData.shift;let z=D,Y=I;if((o=t.middlewareData.shift)!=null&&o.enabled.x&&(Y=P),(s=t.middlewareData.shift)!=null&&s.enabled.y&&(z=M),H&&!S){const le=Nt(y.left,0),fe=Nt(y.right,0),ee=Nt(y.top,0),ge=Nt(y.bottom,0);w?Y=R-2*(le!==0||fe!==0?le+fe:Nt(y.left,y.right)):z=k-2*(ee!==0||ge!==0?ee+ge:Nt(y.top,y.bottom))}await f({...t,availableWidth:Y,availableHeight:z});const ie=await u.getDimensions(d.floating);return R!==ie.width||k!==ie.height?{reset:{rects:!0}}:{}}}};function Cl(){return typeof window<"u"}function qr(e){return a0(e)?(e.nodeName||"").toLowerCase():"#document"}function Dt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Mn(e){var t;return(t=(a0(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function a0(e){return Cl()?e instanceof Node||e instanceof Dt(e).Node:!1}function an(e){return Cl()?e instanceof Element||e instanceof Dt(e).Element:!1}function Tn(e){return Cl()?e instanceof HTMLElement||e instanceof Dt(e).HTMLElement:!1}function ig(e){return!Cl()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Dt(e).ShadowRoot}const u5=new Set(["inline","contents"]);function ha(e){const{overflow:t,overflowX:o,overflowY:s,display:i}=ln(e);return/auto|scroll|overlay|hidden|clip/.test(t+s+o)&&!u5.has(i)}const d5=new Set(["table","td","th"]);function h5(e){return d5.has(qr(e))}const p5=[":popover-open",":modal"];function Rl(e){return p5.some(t=>{try{return e.matches(t)}catch{return!1}})}const f5=["transform","translate","scale","rotate","perspective"],m5=["transform","translate","scale","rotate","perspective","filter"],g5=["paint","layout","strict","content"];function nh(e){const t=oh(),o=an(e)?ln(e):e;return f5.some(s=>o[s]?o[s]!=="none":!1)||(o.containerType?o.containerType!=="normal":!1)||!t&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!t&&(o.filter?o.filter!=="none":!1)||m5.some(s=>(o.willChange||"").includes(s))||g5.some(s=>(o.contain||"").includes(s))}function y5(e){let t=ko(e);for(;Tn(t)&&!Br(t);){if(nh(t))return t;if(Rl(t))return null;t=ko(t)}return null}function oh(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const v5=new Set(["html","body","#document"]);function Br(e){return v5.has(qr(e))}function ln(e){return Dt(e).getComputedStyle(e)}function Tl(e){return an(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ko(e){if(qr(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ig(e)&&e.host||Mn(e);return ig(t)?t.host:t}function i0(e){const t=ko(e);return Br(t)?e.ownerDocument?e.ownerDocument.body:e.body:Tn(t)&&ha(t)?t:i0(t)}function Zs(e,t,o){var s;t===void 0&&(t=[]),o===void 0&&(o=!0);const i=i0(e),l=i===((s=e.ownerDocument)==null?void 0:s.body),u=Dt(i);if(l){const d=hd(u);return t.concat(u,u.visualViewport||[],ha(i)?i:[],d&&o?Zs(d):[])}return t.concat(i,Zs(i,[],o))}function hd(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function l0(e){const t=ln(e);let o=parseFloat(t.width)||0,s=parseFloat(t.height)||0;const i=Tn(e),l=i?e.offsetWidth:o,u=i?e.offsetHeight:s,d=ol(o)!==l||ol(s)!==u;return d&&(o=l,s=u),{width:o,height:s,$:d}}function rh(e){return an(e)?e:e.contextElement}function Lr(e){const t=rh(e);if(!Tn(t))return kn(1);const o=t.getBoundingClientRect(),{width:s,height:i,$:l}=l0(t);let u=(l?ol(o.width):o.width)/s,d=(l?ol(o.height):o.height)/i;return(!u||!Number.isFinite(u))&&(u=1),(!d||!Number.isFinite(d))&&(d=1),{x:u,y:d}}const w5=kn(0);function c0(e){const t=Dt(e);return!oh()||!t.visualViewport?w5:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function x5(e,t,o){return t===void 0&&(t=!1),!o||t&&o!==Dt(e)?!1:t}function Yo(e,t,o,s){t===void 0&&(t=!1),o===void 0&&(o=!1);const i=e.getBoundingClientRect(),l=rh(e);let u=kn(1);t&&(s?an(s)&&(u=Lr(s)):u=Lr(e));const d=x5(l,o,s)?c0(l):kn(0);let f=(i.left+d.x)/u.x,m=(i.top+d.y)/u.y,y=i.width/u.x,v=i.height/u.y;if(l){const S=Dt(l),w=s&&an(s)?Dt(s):s;let R=S,k=hd(R);for(;k&&s&&w!==R;){const C=Lr(k),E=k.getBoundingClientRect(),M=ln(k),P=E.left+(k.clientLeft+parseFloat(M.paddingLeft))*C.x,D=E.top+(k.clientTop+parseFloat(M.paddingTop))*C.y;f*=C.x,m*=C.y,y*=C.x,v*=C.y,f+=P,m+=D,R=Dt(k),k=hd(R)}}return sl({width:y,height:v,x:f,y:m})}function sh(e,t){const o=Tl(e).scrollLeft;return t?t.left+o:Yo(Mn(e)).left+o}function u0(e,t,o){o===void 0&&(o=!1);const s=e.getBoundingClientRect(),i=s.left+t.scrollLeft-(o?0:sh(e,s)),l=s.top+t.scrollTop;return{x:i,y:l}}function b5(e){let{elements:t,rect:o,offsetParent:s,strategy:i}=e;const l=i==="fixed",u=Mn(s),d=t?Rl(t.floating):!1;if(s===u||d&&l)return o;let f={scrollLeft:0,scrollTop:0},m=kn(1);const y=kn(0),v=Tn(s);if((v||!v&&!l)&&((qr(s)!=="body"||ha(u))&&(f=Tl(s)),Tn(s))){const w=Yo(s);m=Lr(s),y.x=w.x+s.clientLeft,y.y=w.y+s.clientTop}const S=u&&!v&&!l?u0(u,f,!0):kn(0);return{width:o.width*m.x,height:o.height*m.y,x:o.x*m.x-f.scrollLeft*m.x+y.x+S.x,y:o.y*m.y-f.scrollTop*m.y+y.y+S.y}}function S5(e){return Array.from(e.getClientRects())}function k5(e){const t=Mn(e),o=Tl(e),s=e.ownerDocument.body,i=Nt(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),l=Nt(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight);let u=-o.scrollLeft+sh(e);const d=-o.scrollTop;return ln(s).direction==="rtl"&&(u+=Nt(t.clientWidth,s.clientWidth)-i),{width:i,height:l,x:u,y:d}}function C5(e,t){const o=Dt(e),s=Mn(e),i=o.visualViewport;let l=s.clientWidth,u=s.clientHeight,d=0,f=0;if(i){l=i.width,u=i.height;const m=oh();(!m||m&&t==="fixed")&&(d=i.offsetLeft,f=i.offsetTop)}return{width:l,height:u,x:d,y:f}}const R5=new Set(["absolute","fixed"]);function T5(e,t){const o=Yo(e,!0,t==="fixed"),s=o.top+e.clientTop,i=o.left+e.clientLeft,l=Tn(e)?Lr(e):kn(1),u=e.clientWidth*l.x,d=e.clientHeight*l.y,f=i*l.x,m=s*l.y;return{width:u,height:d,x:f,y:m}}function lg(e,t,o){let s;if(t==="viewport")s=C5(e,o);else if(t==="document")s=k5(Mn(e));else if(an(t))s=T5(t,o);else{const i=c0(e);s={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return sl(s)}function d0(e,t){const o=ko(e);return o===t||!an(o)||Br(o)?!1:ln(o).position==="fixed"||d0(o,t)}function E5(e,t){const o=t.get(e);if(o)return o;let s=Zs(e,[],!1).filter(d=>an(d)&&qr(d)!=="body"),i=null;const l=ln(e).position==="fixed";let u=l?ko(e):e;for(;an(u)&&!Br(u);){const d=ln(u),f=nh(u);!f&&d.position==="fixed"&&(i=null),(l?!f&&!i:!f&&d.position==="static"&&!!i&&R5.has(i.position)||ha(u)&&!f&&d0(e,u))?s=s.filter(y=>y!==u):i=d,u=ko(u)}return t.set(e,s),s}function P5(e){let{element:t,boundary:o,rootBoundary:s,strategy:i}=e;const u=[...o==="clippingAncestors"?Rl(t)?[]:E5(t,this._c):[].concat(o),s],d=u[0],f=u.reduce((m,y)=>{const v=lg(t,y,i);return m.top=Nt(v.top,m.top),m.right=So(v.right,m.right),m.bottom=So(v.bottom,m.bottom),m.left=Nt(v.left,m.left),m},lg(t,d,i));return{width:f.right-f.left,height:f.bottom-f.top,x:f.left,y:f.top}}function M5(e){const{width:t,height:o}=l0(e);return{width:t,height:o}}function A5(e,t,o){const s=Tn(t),i=Mn(t),l=o==="fixed",u=Yo(e,!0,l,t);let d={scrollLeft:0,scrollTop:0};const f=kn(0);function m(){f.x=sh(i)}if(s||!s&&!l)if((qr(t)!=="body"||ha(i))&&(d=Tl(t)),s){const w=Yo(t,!0,l,t);f.x=w.x+t.clientLeft,f.y=w.y+t.clientTop}else i&&m();l&&!s&&i&&m();const y=i&&!s&&!l?u0(i,d):kn(0),v=u.left+d.scrollLeft-f.x-y.x,S=u.top+d.scrollTop-f.y-y.y;return{x:v,y:S,width:u.width,height:u.height}}function Pu(e){return ln(e).position==="static"}function cg(e,t){if(!Tn(e)||ln(e).position==="fixed")return null;if(t)return t(e);let o=e.offsetParent;return Mn(e)===o&&(o=o.ownerDocument.body),o}function h0(e,t){const o=Dt(e);if(Rl(e))return o;if(!Tn(e)){let i=ko(e);for(;i&&!Br(i);){if(an(i)&&!Pu(i))return i;i=ko(i)}return o}let s=cg(e,t);for(;s&&h5(s)&&Pu(s);)s=cg(s,t);return s&&Br(s)&&Pu(s)&&!nh(s)?o:s||y5(e)||o}const I5=async function(e){const t=this.getOffsetParent||h0,o=this.getDimensions,s=await o(e.floating);return{reference:A5(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function j5(e){return ln(e).direction==="rtl"}const N5={convertOffsetParentRelativeRectToViewportRelativeRect:b5,getDocumentElement:Mn,getClippingRect:P5,getOffsetParent:h0,getElementRects:I5,getClientRects:S5,getDimensions:M5,getScale:Lr,isElement:an,isRTL:j5};function p0(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function D5(e,t){let o=null,s;const i=Mn(e);function l(){var d;clearTimeout(s),(d=o)==null||d.disconnect(),o=null}function u(d,f){d===void 0&&(d=!1),f===void 0&&(f=1),l();const m=e.getBoundingClientRect(),{left:y,top:v,width:S,height:w}=m;if(d||t(),!S||!w)return;const R=Oi(v),k=Oi(i.clientWidth-(y+S)),C=Oi(i.clientHeight-(v+w)),E=Oi(y),P={rootMargin:-R+"px "+-k+"px "+-C+"px "+-E+"px",threshold:Nt(0,So(1,f))||1};let D=!0;function I(H){const z=H[0].intersectionRatio;if(z!==f){if(!D)return u();z?u(!1,z):s=setTimeout(()=>{u(!1,1e-7)},1e3)}z===1&&!p0(m,e.getBoundingClientRect())&&u(),D=!1}try{o=new IntersectionObserver(I,{...P,root:i.ownerDocument})}catch{o=new IntersectionObserver(I,P)}o.observe(e)}return u(!0),l}function O5(e,t,o,s){s===void 0&&(s={});const{ancestorScroll:i=!0,ancestorResize:l=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:d=typeof IntersectionObserver=="function",animationFrame:f=!1}=s,m=rh(e),y=i||l?[...m?Zs(m):[],...Zs(t)]:[];y.forEach(E=>{i&&E.addEventListener("scroll",o,{passive:!0}),l&&E.addEventListener("resize",o)});const v=m&&d?D5(m,o):null;let S=-1,w=null;u&&(w=new ResizeObserver(E=>{let[M]=E;M&&M.target===m&&w&&(w.unobserve(t),cancelAnimationFrame(S),S=requestAnimationFrame(()=>{var P;(P=w)==null||P.observe(t)})),o()}),m&&!f&&w.observe(m),w.observe(t));let R,k=f?Yo(e):null;f&&C();function C(){const E=Yo(e);k&&!p0(k,E)&&o(),k=E,R=requestAnimationFrame(C)}return o(),()=>{var E;y.forEach(M=>{i&&M.removeEventListener("scroll",o),l&&M.removeEventListener("resize",o)}),v?.(),(E=w)==null||E.disconnect(),w=null,f&&cancelAnimationFrame(R)}}const L5=a5,F5=i5,W5=o5,B5=c5,H5=r5,ug=n5,U5=l5,z5=(e,t,o)=>{const s=new Map,i={platform:N5,...o},l={...i.platform,_c:s};return t5(e,t,{...i,platform:l})};var V5=typeof document<"u",_5=function(){},Gi=V5?x.useLayoutEffect:_5;function al(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let o,s,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(o=e.length,o!==t.length)return!1;for(s=o;s--!==0;)if(!al(e[s],t[s]))return!1;return!0}if(i=Object.keys(e),o=i.length,o!==Object.keys(t).length)return!1;for(s=o;s--!==0;)if(!{}.hasOwnProperty.call(t,i[s]))return!1;for(s=o;s--!==0;){const l=i[s];if(!(l==="_owner"&&e.$$typeof)&&!al(e[l],t[l]))return!1}return!0}return e!==e&&t!==t}function f0(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function dg(e,t){const o=f0(e);return Math.round(t*o)/o}function Mu(e){const t=x.useRef(e);return Gi(()=>{t.current=e}),t}function q5(e){e===void 0&&(e={});const{placement:t="bottom",strategy:o="absolute",middleware:s=[],platform:i,elements:{reference:l,floating:u}={},transform:d=!0,whileElementsMounted:f,open:m}=e,[y,v]=x.useState({x:0,y:0,strategy:o,placement:t,middlewareData:{},isPositioned:!1}),[S,w]=x.useState(s);al(S,s)||w(s);const[R,k]=x.useState(null),[C,E]=x.useState(null),M=x.useCallback(W=>{W!==H.current&&(H.current=W,k(W))},[]),P=x.useCallback(W=>{W!==z.current&&(z.current=W,E(W))},[]),D=l||R,I=u||C,H=x.useRef(null),z=x.useRef(null),Y=x.useRef(y),ie=f!=null,le=Mu(f),fe=Mu(i),ee=Mu(m),ge=x.useCallback(()=>{if(!H.current||!z.current)return;const W={placement:t,strategy:o,middleware:S};fe.current&&(W.platform=fe.current),z5(H.current,z.current,W).then(U=>{const _={...U,isPositioned:ee.current!==!1};K.current&&!al(Y.current,_)&&(Y.current=_,vl.flushSync(()=>{v(_)}))})},[S,t,o,fe,ee]);Gi(()=>{m===!1&&Y.current.isPositioned&&(Y.current.isPositioned=!1,v(W=>({...W,isPositioned:!1})))},[m]);const K=x.useRef(!1);Gi(()=>(K.current=!0,()=>{K.current=!1}),[]),Gi(()=>{if(D&&(H.current=D),I&&(z.current=I),D&&I){if(le.current)return le.current(D,I,ge);ge()}},[D,I,ge,le,ie]);const ve=x.useMemo(()=>({reference:H,floating:z,setReference:M,setFloating:P}),[M,P]),ce=x.useMemo(()=>({reference:D,floating:I}),[D,I]),X=x.useMemo(()=>{const W={position:o,left:0,top:0};if(!ce.floating)return W;const U=dg(ce.floating,y.x),_=dg(ce.floating,y.y);return d?{...W,transform:"translate("+U+"px, "+_+"px)",...f0(ce.floating)>=1.5&&{willChange:"transform"}}:{position:o,left:U,top:_}},[o,d,ce.floating,y.x,y.y]);return x.useMemo(()=>({...y,update:ge,refs:ve,elements:ce,floatingStyles:X}),[y,ge,ve,ce,X])}const $5=e=>{function t(o){return{}.hasOwnProperty.call(o,"current")}return{name:"arrow",options:e,fn(o){const{element:s,padding:i}=typeof e=="function"?e(o):e;return s&&t(s)?s.current!=null?ug({element:s.current,padding:i}).fn(o):{}:s?ug({element:s,padding:i}).fn(o):{}}}},Y5=(e,t)=>({...L5(e),options:[e,t]}),J5=(e,t)=>({...F5(e),options:[e,t]}),G5=(e,t)=>({...U5(e),options:[e,t]}),K5=(e,t)=>({...W5(e),options:[e,t]}),X5=(e,t)=>({...B5(e),options:[e,t]}),Q5=(e,t)=>({...H5(e),options:[e,t]}),Z5=(e,t)=>({...$5(e),options:[e,t]});var ek="Arrow",m0=x.forwardRef((e,t)=>{const{children:o,width:s=10,height:i=5,...l}=e;return p.jsx(Ke.svg,{...l,ref:t,width:s,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?o:p.jsx("polygon",{points:"0,0 30,0 15,10"})})});m0.displayName=ek;var tk=m0;function nk(e){const[t,o]=x.useState(void 0);return Un(()=>{if(e){o({width:e.offsetWidth,height:e.offsetHeight});const s=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const l=i[0];let u,d;if("borderBoxSize"in l){const f=l.borderBoxSize,m=Array.isArray(f)?f[0]:f;u=m.inlineSize,d=m.blockSize}else u=e.offsetWidth,d=e.offsetHeight;o({width:u,height:d})});return s.observe(e,{box:"border-box"}),()=>s.unobserve(e)}else o(void 0)},[e]),t}var g0="Popper",[y0,v0]=ca(g0),[h7,w0]=y0(g0),x0="PopperAnchor",b0=x.forwardRef((e,t)=>{const{__scopePopper:o,virtualRef:s,...i}=e,l=w0(x0,o),u=x.useRef(null),d=wt(t,u);return x.useEffect(()=>{l.onAnchorChange(s?.current||u.current)}),s?null:p.jsx(Ke.div,{...i,ref:d})});b0.displayName=x0;var ah="PopperContent",[ok,rk]=y0(ah),S0=x.forwardRef((e,t)=>{const{__scopePopper:o,side:s="bottom",sideOffset:i=0,align:l="center",alignOffset:u=0,arrowPadding:d=0,avoidCollisions:f=!0,collisionBoundary:m=[],collisionPadding:y=0,sticky:v="partial",hideWhenDetached:S=!1,updatePositionStrategy:w="optimized",onPlaced:R,...k}=e,C=w0(ah,o),[E,M]=x.useState(null),P=wt(t,ue=>M(ue)),[D,I]=x.useState(null),H=nk(D),z=H?.width??0,Y=H?.height??0,ie=s+(l!=="center"?"-"+l:""),le=typeof y=="number"?y:{top:0,right:0,bottom:0,left:0,...y},fe=Array.isArray(m)?m:[m],ee=fe.length>0,ge={padding:le,boundary:fe.filter(ak),altBoundary:ee},{refs:K,floatingStyles:ve,placement:ce,isPositioned:X,middlewareData:W}=q5({strategy:"fixed",placement:ie,whileElementsMounted:(...ue)=>O5(...ue,{animationFrame:w==="always"}),elements:{reference:C.anchor},middleware:[Y5({mainAxis:i+Y,alignmentAxis:u}),f&&J5({mainAxis:!0,crossAxis:!1,limiter:v==="partial"?G5():void 0,...ge}),f&&K5({...ge}),X5({...ge,apply:({elements:ue,rects:ke,availableWidth:Te,availableHeight:$e})=>{const{width:Ot,height:$n}=ke.reference,Lt=ue.floating.style;Lt.setProperty("--radix-popper-available-width",`${Te}px`),Lt.setProperty("--radix-popper-available-height",`${$e}px`),Lt.setProperty("--radix-popper-anchor-width",`${Ot}px`),Lt.setProperty("--radix-popper-anchor-height",`${$n}px`)}}),D&&Z5({element:D,padding:d}),ik({arrowWidth:z,arrowHeight:Y}),S&&Q5({strategy:"referenceHidden",...ge})]}),[U,_]=R0(ce),N=Rn(R);Un(()=>{X&&N?.()},[X,N]);const B=W.arrow?.x,Q=W.arrow?.y,ne=W.arrow?.centerOffset!==0,[pe,xe]=x.useState();return Un(()=>{E&&xe(window.getComputedStyle(E).zIndex)},[E]),p.jsx("div",{ref:K.setFloating,"data-radix-popper-content-wrapper":"",style:{...ve,transform:X?ve.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:pe,"--radix-popper-transform-origin":[W.transformOrigin?.x,W.transformOrigin?.y].join(" "),...W.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:p.jsx(ok,{scope:o,placedSide:U,onArrowChange:I,arrowX:B,arrowY:Q,shouldHideArrow:ne,children:p.jsx(Ke.div,{"data-side":U,"data-align":_,...k,ref:P,style:{...k.style,animation:X?void 0:"none"}})})})});S0.displayName=ah;var k0="PopperArrow",sk={top:"bottom",right:"left",bottom:"top",left:"right"},C0=x.forwardRef(function(t,o){const{__scopePopper:s,...i}=t,l=rk(k0,s),u=sk[l.placedSide];return p.jsx("span",{ref:l.onArrowChange,style:{position:"absolute",left:l.arrowX,top:l.arrowY,[u]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[l.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[l.placedSide],visibility:l.shouldHideArrow?"hidden":void 0},children:p.jsx(tk,{...i,ref:o,style:{...i.style,display:"block"}})})});C0.displayName=k0;function ak(e){return e!==null}var ik=e=>({name:"transformOrigin",options:e,fn(t){const{placement:o,rects:s,middlewareData:i}=t,u=i.arrow?.centerOffset!==0,d=u?0:e.arrowWidth,f=u?0:e.arrowHeight,[m,y]=R0(o),v={start:"0%",center:"50%",end:"100%"}[y],S=(i.arrow?.x??0)+d/2,w=(i.arrow?.y??0)+f/2;let R="",k="";return m==="bottom"?(R=u?v:`${S}px`,k=`${-f}px`):m==="top"?(R=u?v:`${S}px`,k=`${s.floating.height+f}px`):m==="right"?(R=`${-f}px`,k=u?v:`${w}px`):m==="left"&&(R=`${s.floating.width+f}px`,k=u?v:`${w}px`),{data:{x:R,y:k}}}});function R0(e){const[t,o="center"]=e.split("-");return[t,o]}var lk=b0,ck=S0,uk=C0,[El]=ca("Tooltip",[v0]),ih=v0(),T0="TooltipProvider",dk=700,hg="tooltip.open",[hk,E0]=El(T0),P0=e=>{const{__scopeTooltip:t,delayDuration:o=dk,skipDelayDuration:s=300,disableHoverableContent:i=!1,children:l}=e,u=x.useRef(!0),d=x.useRef(!1),f=x.useRef(0);return x.useEffect(()=>{const m=f.current;return()=>window.clearTimeout(m)},[]),p.jsx(hk,{scope:t,isOpenDelayedRef:u,delayDuration:o,onOpen:x.useCallback(()=>{window.clearTimeout(f.current),u.current=!1},[]),onClose:x.useCallback(()=>{window.clearTimeout(f.current),f.current=window.setTimeout(()=>u.current=!0,s)},[s]),isPointerInTransitRef:d,onPointerInTransitChange:x.useCallback(m=>{d.current=m},[]),disableHoverableContent:i,children:l})};P0.displayName=T0;var M0="Tooltip",[p7,Pl]=El(M0),pd="TooltipTrigger",pk=x.forwardRef((e,t)=>{const{__scopeTooltip:o,...s}=e,i=Pl(pd,o),l=E0(pd,o),u=ih(o),d=x.useRef(null),f=wt(t,d,i.onTriggerChange),m=x.useRef(!1),y=x.useRef(!1),v=x.useCallback(()=>m.current=!1,[]);return x.useEffect(()=>()=>document.removeEventListener("pointerup",v),[v]),p.jsx(lk,{asChild:!0,...u,children:p.jsx(Ke.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...s,ref:f,onPointerMove:We(e.onPointerMove,S=>{S.pointerType!=="touch"&&!y.current&&!l.isPointerInTransitRef.current&&(i.onTriggerEnter(),y.current=!0)}),onPointerLeave:We(e.onPointerLeave,()=>{i.onTriggerLeave(),y.current=!1}),onPointerDown:We(e.onPointerDown,()=>{i.open&&i.onClose(),m.current=!0,document.addEventListener("pointerup",v,{once:!0})}),onFocus:We(e.onFocus,()=>{m.current||i.onOpen()}),onBlur:We(e.onBlur,i.onClose),onClick:We(e.onClick,i.onClose)})})});pk.displayName=pd;var fk="TooltipPortal",[f7,mk]=El(fk,{forceMount:void 0}),Hr="TooltipContent",A0=x.forwardRef((e,t)=>{const o=mk(Hr,e.__scopeTooltip),{forceMount:s=o.forceMount,side:i="top",...l}=e,u=Pl(Hr,e.__scopeTooltip);return p.jsx(zr,{present:s||u.open,children:u.disableHoverableContent?p.jsx(I0,{side:i,...l,ref:t}):p.jsx(gk,{side:i,...l,ref:t})})}),gk=x.forwardRef((e,t)=>{const o=Pl(Hr,e.__scopeTooltip),s=E0(Hr,e.__scopeTooltip),i=x.useRef(null),l=wt(t,i),[u,d]=x.useState(null),{trigger:f,onClose:m}=o,y=i.current,{onPointerInTransitChange:v}=s,S=x.useCallback(()=>{d(null),v(!1)},[v]),w=x.useCallback((R,k)=>{const C=R.currentTarget,E={x:R.clientX,y:R.clientY},M=bk(E,C.getBoundingClientRect()),P=Sk(E,M),D=kk(k.getBoundingClientRect()),I=Rk([...P,...D]);d(I),v(!0)},[v]);return x.useEffect(()=>()=>S(),[S]),x.useEffect(()=>{if(f&&y){const R=C=>w(C,y),k=C=>w(C,f);return f.addEventListener("pointerleave",R),y.addEventListener("pointerleave",k),()=>{f.removeEventListener("pointerleave",R),y.removeEventListener("pointerleave",k)}}},[f,y,w,S]),x.useEffect(()=>{if(u){const R=k=>{const C=k.target,E={x:k.clientX,y:k.clientY},M=f?.contains(C)||y?.contains(C),P=!Ck(E,u);M?S():P&&(S(),m())};return document.addEventListener("pointermove",R),()=>document.removeEventListener("pointermove",R)}},[f,y,u,m,S]),p.jsx(I0,{...e,ref:l})}),[yk,vk]=El(M0,{isInside:!1}),wk=f4("TooltipContent"),I0=x.forwardRef((e,t)=>{const{__scopeTooltip:o,children:s,"aria-label":i,onEscapeKeyDown:l,onPointerDownOutside:u,...d}=e,f=Pl(Hr,o),m=ih(o),{onClose:y}=f;return x.useEffect(()=>(document.addEventListener(hg,y),()=>document.removeEventListener(hg,y)),[y]),x.useEffect(()=>{if(f.trigger){const v=S=>{S.target?.contains(f.trigger)&&y()};return window.addEventListener("scroll",v,{capture:!0}),()=>window.removeEventListener("scroll",v,{capture:!0})}},[f.trigger,y]),p.jsx(bl,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:l,onPointerDownOutside:u,onFocusOutside:v=>v.preventDefault(),onDismiss:y,children:p.jsxs(ck,{"data-state":f.stateAttribute,...m,...d,ref:t,style:{...d.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[p.jsx(wk,{children:s}),p.jsx(yk,{scope:o,isInside:!0,children:p.jsx(W4,{id:f.contentId,role:"tooltip",children:i||s})})]})})});A0.displayName=Hr;var j0="TooltipArrow",xk=x.forwardRef((e,t)=>{const{__scopeTooltip:o,...s}=e,i=ih(o);return vk(j0,o).isInside?null:p.jsx(uk,{...i,...s,ref:t})});xk.displayName=j0;function bk(e,t){const o=Math.abs(t.top-e.y),s=Math.abs(t.bottom-e.y),i=Math.abs(t.right-e.x),l=Math.abs(t.left-e.x);switch(Math.min(o,s,i,l)){case l:return"left";case i:return"right";case o:return"top";case s:return"bottom";default:throw new Error("unreachable")}}function Sk(e,t,o=5){const s=[];switch(t){case"top":s.push({x:e.x-o,y:e.y+o},{x:e.x+o,y:e.y+o});break;case"bottom":s.push({x:e.x-o,y:e.y-o},{x:e.x+o,y:e.y-o});break;case"left":s.push({x:e.x+o,y:e.y-o},{x:e.x+o,y:e.y+o});break;case"right":s.push({x:e.x-o,y:e.y-o},{x:e.x-o,y:e.y+o});break}return s}function kk(e){const{top:t,right:o,bottom:s,left:i}=e;return[{x:i,y:t},{x:o,y:t},{x:o,y:s},{x:i,y:s}]}function Ck(e,t){const{x:o,y:s}=e;let i=!1;for(let l=0,u=t.length-1;l<t.length;u=l++){const d=t[l],f=t[u],m=d.x,y=d.y,v=f.x,S=f.y;y>s!=S>s&&o<(v-m)*(s-y)/(S-y)+m&&(i=!i)}return i}function Rk(e){const t=e.slice();return t.sort((o,s)=>o.x<s.x?-1:o.x>s.x?1:o.y<s.y?-1:o.y>s.y?1:0),Tk(t)}function Tk(e){if(e.length<=1)return e.slice();const t=[];for(let s=0;s<e.length;s++){const i=e[s];for(;t.length>=2;){const l=t[t.length-1],u=t[t.length-2];if((l.x-u.x)*(i.y-u.y)>=(l.y-u.y)*(i.x-u.x))t.pop();else break}t.push(i)}t.pop();const o=[];for(let s=e.length-1;s>=0;s--){const i=e[s];for(;o.length>=2;){const l=o[o.length-1],u=o[o.length-2];if((l.x-u.x)*(i.y-u.y)>=(l.y-u.y)*(i.x-u.x))o.pop();else break}o.push(i)}return o.pop(),t.length===1&&o.length===1&&t[0].x===o[0].x&&t[0].y===o[0].y?t:t.concat(o)}var Ek=P0,N0=A0;const Pk=Ek,Mk=x.forwardRef(({className:e,sideOffset:t=4,...o},s)=>p.jsx(N0,{ref:s,sideOffset:t,className:Pn("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...o}));Mk.displayName=N0.displayName;const Ak=()=>{const{pathname:e,hash:t}=la();return x.useEffect(()=>{t?setTimeout(()=>{const o=document.querySelector(t);o&&o.scrollIntoView({behavior:"smooth",block:"start"})},100):window.scrollTo(0,0)},[e,t]),null};var Ml=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Al=typeof window>"u"||"Deno"in globalThis;function sn(){}function Ik(e,t){return typeof e=="function"?e(t):e}function jk(e){return typeof e=="number"&&e>=0&&e!==1/0}function Nk(e,t){return Math.max(e+(t||0)-Date.now(),0)}function fd(e,t){return typeof e=="function"?e(t):e}function Dk(e,t){return typeof e=="function"?e(t):e}function pg(e,t){const{type:o="all",exact:s,fetchStatus:i,predicate:l,queryKey:u,stale:d}=e;if(u){if(s){if(t.queryHash!==lh(u,t.options))return!1}else if(!ta(t.queryKey,u))return!1}if(o!=="all"){const f=t.isActive();if(o==="active"&&!f||o==="inactive"&&f)return!1}return!(typeof d=="boolean"&&t.isStale()!==d||i&&i!==t.state.fetchStatus||l&&!l(t))}function fg(e,t){const{exact:o,status:s,predicate:i,mutationKey:l}=e;if(l){if(!t.options.mutationKey)return!1;if(o){if(ea(t.options.mutationKey)!==ea(l))return!1}else if(!ta(t.options.mutationKey,l))return!1}return!(s&&t.state.status!==s||i&&!i(t))}function lh(e,t){return(t?.queryKeyHashFn||ea)(e)}function ea(e){return JSON.stringify(e,(t,o)=>md(o)?Object.keys(o).sort().reduce((s,i)=>(s[i]=o[i],s),{}):o)}function ta(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(o=>ta(e[o],t[o])):!1}function D0(e,t){if(e===t)return e;const o=mg(e)&&mg(t);if(o||md(e)&&md(t)){const s=o?e:Object.keys(e),i=s.length,l=o?t:Object.keys(t),u=l.length,d=o?[]:{},f=new Set(s);let m=0;for(let y=0;y<u;y++){const v=o?y:l[y];(!o&&f.has(v)||o)&&e[v]===void 0&&t[v]===void 0?(d[v]=void 0,m++):(d[v]=D0(e[v],t[v]),d[v]===e[v]&&e[v]!==void 0&&m++)}return i===u&&m===i?e:d}return t}function mg(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function md(e){if(!gg(e))return!1;const t=e.constructor;if(t===void 0)return!0;const o=t.prototype;return!(!gg(o)||!o.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function gg(e){return Object.prototype.toString.call(e)==="[object Object]"}function Ok(e){return new Promise(t=>{setTimeout(t,e)})}function Lk(e,t,o){return typeof o.structuralSharing=="function"?o.structuralSharing(e,t):o.structuralSharing!==!1?D0(e,t):t}function Fk(e,t,o=0){const s=[...e,t];return o&&s.length>o?s.slice(1):s}function Wk(e,t,o=0){const s=[t,...e];return o&&s.length>o?s.slice(0,-1):s}var ch=Symbol();function O0(e,t){return!e.queryFn&&t?.initialPromise?()=>t.initialPromise:!e.queryFn||e.queryFn===ch?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var Bk=class extends Ml{#e;#t;#n;constructor(){super(),this.#n=e=>{if(!Al&&window.addEventListener){const t=()=>e();return window.addEventListener("visibilitychange",t,!1),()=>{window.removeEventListener("visibilitychange",t)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#n=e,this.#t?.(),this.#t=e(t=>{typeof t=="boolean"?this.setFocused(t):this.onFocus()})}setFocused(e){this.#e!==e&&(this.#e=e,this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(t=>{t(e)})}isFocused(){return typeof this.#e=="boolean"?this.#e:globalThis.document?.visibilityState!=="hidden"}},L0=new Bk,Hk=class extends Ml{#e=!0;#t;#n;constructor(){super(),this.#n=e=>{if(!Al&&window.addEventListener){const t=()=>e(!0),o=()=>e(!1);return window.addEventListener("online",t,!1),window.addEventListener("offline",o,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",o)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#n=e,this.#t?.(),this.#t=e(this.setOnline.bind(this))}setOnline(e){this.#e!==e&&(this.#e=e,this.listeners.forEach(o=>{o(e)}))}isOnline(){return this.#e}},il=new Hk;function Uk(){let e,t;const o=new Promise((i,l)=>{e=i,t=l});o.status="pending",o.catch(()=>{});function s(i){Object.assign(o,i),delete o.resolve,delete o.reject}return o.resolve=i=>{s({status:"fulfilled",value:i}),e(i)},o.reject=i=>{s({status:"rejected",reason:i}),t(i)},o}function zk(e){return Math.min(1e3*2**e,3e4)}function F0(e){return(e??"online")==="online"?il.isOnline():!0}var W0=class extends Error{constructor(e){super("CancelledError"),this.revert=e?.revert,this.silent=e?.silent}};function Au(e){return e instanceof W0}function B0(e){let t=!1,o=0,s=!1,i;const l=Uk(),u=k=>{s||(S(new W0(k)),e.abort?.())},d=()=>{t=!0},f=()=>{t=!1},m=()=>L0.isFocused()&&(e.networkMode==="always"||il.isOnline())&&e.canRun(),y=()=>F0(e.networkMode)&&e.canRun(),v=k=>{s||(s=!0,e.onSuccess?.(k),i?.(),l.resolve(k))},S=k=>{s||(s=!0,e.onError?.(k),i?.(),l.reject(k))},w=()=>new Promise(k=>{i=C=>{(s||m())&&k(C)},e.onPause?.()}).then(()=>{i=void 0,s||e.onContinue?.()}),R=()=>{if(s)return;let k;const C=o===0?e.initialPromise:void 0;try{k=C??e.fn()}catch(E){k=Promise.reject(E)}Promise.resolve(k).then(v).catch(E=>{if(s)return;const M=e.retry??(Al?0:3),P=e.retryDelay??zk,D=typeof P=="function"?P(o,E):P,I=M===!0||typeof M=="number"&&o<M||typeof M=="function"&&M(o,E);if(t||!I){S(E);return}o++,e.onFail?.(o,E),Ok(D).then(()=>m()?void 0:w()).then(()=>{t?S(E):R()})})};return{promise:l,cancel:u,continue:()=>(i?.(),l),cancelRetry:d,continueRetry:f,canStart:y,start:()=>(y()?R():w().then(R),l)}}var Vk=e=>setTimeout(e,0);function _k(){let e=[],t=0,o=d=>{d()},s=d=>{d()},i=Vk;const l=d=>{t?e.push(d):i(()=>{o(d)})},u=()=>{const d=e;e=[],d.length&&i(()=>{s(()=>{d.forEach(f=>{o(f)})})})};return{batch:d=>{let f;t++;try{f=d()}finally{t--,t||u()}return f},batchCalls:d=>(...f)=>{l(()=>{d(...f)})},schedule:l,setNotifyFunction:d=>{o=d},setBatchNotifyFunction:d=>{s=d},setScheduler:d=>{i=d}}}var gt=_k(),H0=class{#e;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),jk(this.gcTime)&&(this.#e=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Al?1/0:300*1e3))}clearGcTimeout(){this.#e&&(clearTimeout(this.#e),this.#e=void 0)}},qk=class extends H0{#e;#t;#n;#r;#o;#a;#i;constructor(e){super(),this.#i=!1,this.#a=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.#r=e.client,this.#n=this.#r.getQueryCache(),this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.#e=Yk(this.options),this.state=e.state??this.#e,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#o?.promise}setOptions(e){this.options={...this.#a,...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.#n.remove(this)}setData(e,t){const o=Lk(this.state.data,e,this.options);return this.#s({data:o,type:"success",dataUpdatedAt:t?.updatedAt,manual:t?.manual}),o}setState(e,t){this.#s({type:"setState",state:e,setStateOptions:t})}cancel(e){const t=this.#o?.promise;return this.#o?.cancel(e),t?t.then(sn).catch(sn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#e)}isActive(){return this.observers.some(e=>Dk(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===ch||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(e=>fd(e.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e==="static"?!1:this.state.isInvalidated?!0:!Nk(this.state.dataUpdatedAt,e)}onFocus(){this.observers.find(t=>t.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#o?.continue()}onOnline(){this.observers.find(t=>t.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#o?.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.#n.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.#o&&(this.#i?this.#o.cancel({revert:!0}):this.#o.cancelRetry()),this.scheduleGc()),this.#n.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#s({type:"invalidate"})}fetch(e,t){if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&t?.cancelRefetch)this.cancel({silent:!0});else if(this.#o)return this.#o.continueRetry(),this.#o.promise}if(e&&this.setOptions(e),!this.options.queryFn){const f=this.observers.find(m=>m.options.queryFn);f&&this.setOptions(f.options)}const o=new AbortController,s=f=>{Object.defineProperty(f,"signal",{enumerable:!0,get:()=>(this.#i=!0,o.signal)})},i=()=>{const f=O0(this.options,t),y=(()=>{const v={client:this.#r,queryKey:this.queryKey,meta:this.meta};return s(v),v})();return this.#i=!1,this.options.persister?this.options.persister(f,y,this):f(y)},u=(()=>{const f={fetchOptions:t,options:this.options,queryKey:this.queryKey,client:this.#r,state:this.state,fetchFn:i};return s(f),f})();this.options.behavior?.onFetch(u,this),this.#t=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==u.fetchOptions?.meta)&&this.#s({type:"fetch",meta:u.fetchOptions?.meta});const d=f=>{Au(f)&&f.silent||this.#s({type:"error",error:f}),Au(f)||(this.#n.config.onError?.(f,this),this.#n.config.onSettled?.(this.state.data,f,this)),this.scheduleGc()};return this.#o=B0({initialPromise:t?.initialPromise,fn:u.fetchFn,abort:o.abort.bind(o),onSuccess:f=>{if(f===void 0){d(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(f)}catch(m){d(m);return}this.#n.config.onSuccess?.(f,this),this.#n.config.onSettled?.(f,this.state.error,this),this.scheduleGc()},onError:d,onFail:(f,m)=>{this.#s({type:"failed",failureCount:f,error:m})},onPause:()=>{this.#s({type:"pause"})},onContinue:()=>{this.#s({type:"continue"})},retry:u.options.retry,retryDelay:u.options.retryDelay,networkMode:u.options.networkMode,canRun:()=>!0}),this.#o.start()}#s(e){const t=o=>{switch(e.type){case"failed":return{...o,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...o,fetchStatus:"paused"};case"continue":return{...o,fetchStatus:"fetching"};case"fetch":return{...o,...$k(o.data,this.options),fetchMeta:e.meta??null};case"success":return this.#t=void 0,{...o,data:e.data,dataUpdateCount:o.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=e.error;return Au(s)&&s.revert&&this.#t?{...this.#t,fetchStatus:"idle"}:{...o,error:s,errorUpdateCount:o.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:o.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...o,isInvalidated:!0};case"setState":return{...o,...e.state}}};this.state=t(this.state),gt.batch(()=>{this.observers.forEach(o=>{o.onQueryUpdate()}),this.#n.notify({query:this,type:"updated",action:e})})}};function $k(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:F0(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function Yk(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,o=t!==void 0,s=o?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:o?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:o?"success":"pending",fetchStatus:"idle"}}var Jk=class extends Ml{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,o){const s=t.queryKey,i=t.queryHash??lh(s,t);let l=this.get(i);return l||(l=new qk({client:e,queryKey:s,queryHash:i,options:e.defaultQueryOptions(t),state:o,defaultOptions:e.getQueryDefaults(s)}),this.add(l)),l}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){gt.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){const t={exact:!0,...e};return this.getAll().find(o=>pg(t,o))}findAll(e={}){const t=this.getAll();return Object.keys(e).length>0?t.filter(o=>pg(e,o)):t}notify(e){gt.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){gt.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){gt.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},Gk=class extends H0{#e;#t;#n;constructor(e){super(),this.mutationId=e.mutationId,this.#t=e.mutationCache,this.#e=[],this.state=e.state||Kk(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#e.includes(e)||(this.#e.push(e),this.clearGcTimeout(),this.#t.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#e=this.#e.filter(t=>t!==e),this.scheduleGc(),this.#t.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#e.length||(this.state.status==="pending"?this.scheduleGc():this.#t.remove(this))}continue(){return this.#n?.continue()??this.execute(this.state.variables)}async execute(e){const t=()=>{this.#r({type:"continue"})};this.#n=B0({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(i,l)=>{this.#r({type:"failed",failureCount:i,error:l})},onPause:()=>{this.#r({type:"pause"})},onContinue:t,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#t.canRun(this)});const o=this.state.status==="pending",s=!this.#n.canStart();try{if(o)t();else{this.#r({type:"pending",variables:e,isPaused:s}),await this.#t.config.onMutate?.(e,this);const l=await this.options.onMutate?.(e);l!==this.state.context&&this.#r({type:"pending",context:l,variables:e,isPaused:s})}const i=await this.#n.start();return await this.#t.config.onSuccess?.(i,e,this.state.context,this),await this.options.onSuccess?.(i,e,this.state.context),await this.#t.config.onSettled?.(i,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(i,null,e,this.state.context),this.#r({type:"success",data:i}),i}catch(i){try{throw await this.#t.config.onError?.(i,e,this.state.context,this),await this.options.onError?.(i,e,this.state.context),await this.#t.config.onSettled?.(void 0,i,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,i,e,this.state.context),i}finally{this.#r({type:"error",error:i})}}finally{this.#t.runNext(this)}}#r(e){const t=o=>{switch(e.type){case"failed":return{...o,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...o,isPaused:!0};case"continue":return{...o,isPaused:!1};case"pending":return{...o,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...o,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...o,data:void 0,error:e.error,failureCount:o.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=t(this.state),gt.batch(()=>{this.#e.forEach(o=>{o.onMutationUpdate(e)}),this.#t.notify({mutation:this,type:"updated",action:e})})}};function Kk(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Xk=class extends Ml{constructor(e={}){super(),this.config=e,this.#e=new Set,this.#t=new Map,this.#n=0}#e;#t;#n;build(e,t,o){const s=new Gk({mutationCache:this,mutationId:++this.#n,options:e.defaultMutationOptions(t),state:o});return this.add(s),s}add(e){this.#e.add(e);const t=Li(e);if(typeof t=="string"){const o=this.#t.get(t);o?o.push(e):this.#t.set(t,[e])}this.notify({type:"added",mutation:e})}remove(e){if(this.#e.delete(e)){const t=Li(e);if(typeof t=="string"){const o=this.#t.get(t);if(o)if(o.length>1){const s=o.indexOf(e);s!==-1&&o.splice(s,1)}else o[0]===e&&this.#t.delete(t)}}this.notify({type:"removed",mutation:e})}canRun(e){const t=Li(e);if(typeof t=="string"){const s=this.#t.get(t)?.find(i=>i.state.status==="pending");return!s||s===e}else return!0}runNext(e){const t=Li(e);return typeof t=="string"?this.#t.get(t)?.find(s=>s!==e&&s.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){gt.batch(()=>{this.#e.forEach(e=>{this.notify({type:"removed",mutation:e})}),this.#e.clear(),this.#t.clear()})}getAll(){return Array.from(this.#e)}find(e){const t={exact:!0,...e};return this.getAll().find(o=>fg(t,o))}findAll(e={}){return this.getAll().filter(t=>fg(e,t))}notify(e){gt.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){const e=this.getAll().filter(t=>t.state.isPaused);return gt.batch(()=>Promise.all(e.map(t=>t.continue().catch(sn))))}};function Li(e){return e.options.scope?.id}function yg(e){return{onFetch:(t,o)=>{const s=t.options,i=t.fetchOptions?.meta?.fetchMore?.direction,l=t.state.data?.pages||[],u=t.state.data?.pageParams||[];let d={pages:[],pageParams:[]},f=0;const m=async()=>{let y=!1;const v=R=>{Object.defineProperty(R,"signal",{enumerable:!0,get:()=>(t.signal.aborted?y=!0:t.signal.addEventListener("abort",()=>{y=!0}),t.signal)})},S=O0(t.options,t.fetchOptions),w=async(R,k,C)=>{if(y)return Promise.reject();if(k==null&&R.pages.length)return Promise.resolve(R);const M=(()=>{const H={client:t.client,queryKey:t.queryKey,pageParam:k,direction:C?"backward":"forward",meta:t.options.meta};return v(H),H})(),P=await S(M),{maxPages:D}=t.options,I=C?Wk:Fk;return{pages:I(R.pages,P,D),pageParams:I(R.pageParams,k,D)}};if(i&&l.length){const R=i==="backward",k=R?Qk:vg,C={pages:l,pageParams:u},E=k(s,C);d=await w(C,E,R)}else{const R=e??l.length;do{const k=f===0?u[0]??s.initialPageParam:vg(s,d);if(f>0&&k==null)break;d=await w(d,k),f++}while(f<R)}return d};t.options.persister?t.fetchFn=()=>t.options.persister?.(m,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},o):t.fetchFn=m}}}function vg(e,{pages:t,pageParams:o}){const s=t.length-1;return t.length>0?e.getNextPageParam(t[s],t,o[s],o):void 0}function Qk(e,{pages:t,pageParams:o}){return t.length>0?e.getPreviousPageParam?.(t[0],t,o[0],o):void 0}var Zk=class{#e;#t;#n;#r;#o;#a;#i;#s;constructor(e={}){this.#e=e.queryCache||new Jk,this.#t=e.mutationCache||new Xk,this.#n=e.defaultOptions||{},this.#r=new Map,this.#o=new Map,this.#a=0}mount(){this.#a++,this.#a===1&&(this.#i=L0.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#s=il.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#a--,this.#a===0&&(this.#i?.(),this.#i=void 0,this.#s?.(),this.#s=void 0)}isFetching(e){return this.#e.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#t.findAll({...e,status:"pending"}).length}getQueryData(e){const t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),o=this.#e.build(this,t),s=o.state.data;return s===void 0?this.fetchQuery(e):(e.revalidateIfStale&&o.isStaleByTime(fd(t.staleTime,o))&&this.prefetchQuery(t),Promise.resolve(s))}getQueriesData(e){return this.#e.findAll(e).map(({queryKey:t,state:o})=>{const s=o.data;return[t,s]})}setQueryData(e,t,o){const s=this.defaultQueryOptions({queryKey:e}),l=this.#e.get(s.queryHash)?.state.data,u=Ik(t,l);if(u!==void 0)return this.#e.build(this,s).setData(u,{...o,manual:!0})}setQueriesData(e,t,o){return gt.batch(()=>this.#e.findAll(e).map(({queryKey:s})=>[s,this.setQueryData(s,t,o)]))}getQueryState(e){const t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state}removeQueries(e){const t=this.#e;gt.batch(()=>{t.findAll(e).forEach(o=>{t.remove(o)})})}resetQueries(e,t){const o=this.#e;return gt.batch(()=>(o.findAll(e).forEach(s=>{s.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const o={revert:!0,...t},s=gt.batch(()=>this.#e.findAll(e).map(i=>i.cancel(o)));return Promise.all(s).then(sn).catch(sn)}invalidateQueries(e,t={}){return gt.batch(()=>(this.#e.findAll(e).forEach(o=>{o.invalidate()}),e?.refetchType==="none"?Promise.resolve():this.refetchQueries({...e,type:e?.refetchType??e?.type??"active"},t)))}refetchQueries(e,t={}){const o={...t,cancelRefetch:t.cancelRefetch??!0},s=gt.batch(()=>this.#e.findAll(e).filter(i=>!i.isDisabled()&&!i.isStatic()).map(i=>{let l=i.fetch(void 0,o);return o.throwOnError||(l=l.catch(sn)),i.state.fetchStatus==="paused"?Promise.resolve():l}));return Promise.all(s).then(sn)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const o=this.#e.build(this,t);return o.isStaleByTime(fd(t.staleTime,o))?o.fetch(t):Promise.resolve(o.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(sn).catch(sn)}fetchInfiniteQuery(e){return e.behavior=yg(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(sn).catch(sn)}ensureInfiniteQueryData(e){return e.behavior=yg(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return il.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#n}setDefaultOptions(e){this.#n=e}setQueryDefaults(e,t){this.#r.set(ea(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...this.#r.values()],o={};return t.forEach(s=>{ta(e,s.queryKey)&&Object.assign(o,s.defaultOptions)}),o}setMutationDefaults(e,t){this.#o.set(ea(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...this.#o.values()],o={};return t.forEach(s=>{ta(e,s.mutationKey)&&Object.assign(o,s.defaultOptions)}),o}defaultQueryOptions(e){if(e._defaulted)return e;const t={...this.#n.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=lh(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===ch&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#n.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}},eC=x.createContext(void 0),tC=({client:e,children:t})=>(x.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),p.jsx(eC.Provider,{value:e,children:t}));const U0=x.createContext({});function nC(e){const t=x.useRef(null);return t.current===null&&(t.current=e()),t.current}const z0=typeof window<"u",oC=z0?x.useLayoutEffect:x.useEffect,uh=x.createContext(null);function dh(e,t){e.indexOf(t)===-1&&e.push(t)}function hh(e,t){const o=e.indexOf(t);o>-1&&e.splice(o,1)}const En=(e,t,o)=>o>t?t:o<e?e:o;let ph=()=>{};const _n={},V0=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function _0(e){return typeof e=="object"&&e!==null}const q0=e=>/^0[^.\s]+$/u.test(e);function fh(e){let t;return()=>(t===void 0&&(t=e()),t)}const $t=e=>e,rC=(e,t)=>o=>t(e(o)),pa=(...e)=>e.reduce(rC),na=(e,t,o)=>{const s=t-e;return s===0?1:(o-e)/s};class mh{constructor(){this.subscriptions=[]}add(t){return dh(this.subscriptions,t),()=>hh(this.subscriptions,t)}notify(t,o,s){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,o,s);else for(let l=0;l<i;l++){const u=this.subscriptions[l];u&&u(t,o,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Hn=e=>e*1e3,qt=e=>e/1e3;function $0(e,t){return t?e*(1e3/t):0}const Y0=(e,t,o)=>(((1-3*o+3*t)*e+(3*o-6*t))*e+3*t)*e,sC=1e-7,aC=12;function iC(e,t,o,s,i){let l,u,d=0;do u=t+(o-t)/2,l=Y0(u,s,i)-e,l>0?o=u:t=u;while(Math.abs(l)>sC&&++d<aC);return u}function fa(e,t,o,s){if(e===t&&o===s)return $t;const i=l=>iC(l,0,1,e,o);return l=>l===0||l===1?l:Y0(i(l),t,s)}const J0=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,G0=e=>t=>1-e(1-t),K0=fa(.33,1.53,.69,.99),gh=G0(K0),X0=J0(gh),Q0=e=>(e*=2)<1?.5*gh(e):.5*(2-Math.pow(2,-10*(e-1))),yh=e=>1-Math.sin(Math.acos(e)),Z0=G0(yh),e1=J0(yh),lC=fa(.42,0,1,1),cC=fa(0,0,.58,1),t1=fa(.42,0,.58,1),uC=e=>Array.isArray(e)&&typeof e[0]!="number",n1=e=>Array.isArray(e)&&typeof e[0]=="number",dC={linear:$t,easeIn:lC,easeInOut:t1,easeOut:cC,circIn:yh,circInOut:e1,circOut:Z0,backIn:gh,backInOut:X0,backOut:K0,anticipate:Q0},hC=e=>typeof e=="string",wg=e=>{if(n1(e)){ph(e.length===4);const[t,o,s,i]=e;return fa(t,o,s,i)}else if(hC(e))return dC[e];return e},Fi=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function pC(e,t){let o=new Set,s=new Set,i=!1,l=!1;const u=new WeakSet;let d={delta:0,timestamp:0,isProcessing:!1};function f(y){u.has(y)&&(m.schedule(y),e()),y(d)}const m={schedule:(y,v=!1,S=!1)=>{const R=S&&i?o:s;return v&&u.add(y),R.has(y)||R.add(y),y},cancel:y=>{s.delete(y),u.delete(y)},process:y=>{if(d=y,i){l=!0;return}i=!0,[o,s]=[s,o],o.forEach(f),o.clear(),i=!1,l&&(l=!1,m.process(y))}};return m}const fC=40;function o1(e,t){let o=!1,s=!0;const i={delta:0,timestamp:0,isProcessing:!1},l=()=>o=!0,u=Fi.reduce((P,D)=>(P[D]=pC(l),P),{}),{setup:d,read:f,resolveKeyframes:m,preUpdate:y,update:v,preRender:S,render:w,postRender:R}=u,k=()=>{const P=_n.useManualTiming?i.timestamp:performance.now();o=!1,_n.useManualTiming||(i.delta=s?1e3/60:Math.max(Math.min(P-i.timestamp,fC),1)),i.timestamp=P,i.isProcessing=!0,d.process(i),f.process(i),m.process(i),y.process(i),v.process(i),S.process(i),w.process(i),R.process(i),i.isProcessing=!1,o&&t&&(s=!1,e(k))},C=()=>{o=!0,s=!0,i.isProcessing||e(k)};return{schedule:Fi.reduce((P,D)=>{const I=u[D];return P[D]=(H,z=!1,Y=!1)=>(o||C(),I.schedule(H,z,Y)),P},{}),cancel:P=>{for(let D=0;D<Fi.length;D++)u[Fi[D]].cancel(P)},state:i,steps:u}}const{schedule:Le,cancel:Co,state:at,steps:Iu}=o1(typeof requestAnimationFrame<"u"?requestAnimationFrame:$t,!0);let Ki;function mC(){Ki=void 0}const yt={now:()=>(Ki===void 0&&yt.set(at.isProcessing||_n.useManualTiming?at.timestamp:performance.now()),Ki),set:e=>{Ki=e,queueMicrotask(mC)}},r1=e=>t=>typeof t=="string"&&t.startsWith(e),s1=r1("--"),gC=r1("var(--"),vh=e=>gC(e)?yC.test(e.split("/*")[0].trim()):!1,yC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function xg(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const $r={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},oa={...$r,transform:e=>En(0,1,e)},Wi={...$r,default:1},_s=e=>Math.round(e*1e5)/1e5,wh=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function vC(e){return e==null}const wC=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,xh=(e,t)=>o=>!!(typeof o=="string"&&wC.test(o)&&o.startsWith(e)||t&&!vC(o)&&Object.prototype.hasOwnProperty.call(o,t)),a1=(e,t,o)=>s=>{if(typeof s!="string")return s;const[i,l,u,d]=s.match(wh);return{[e]:parseFloat(i),[t]:parseFloat(l),[o]:parseFloat(u),alpha:d!==void 0?parseFloat(d):1}},xC=e=>En(0,255,e),ju={...$r,transform:e=>Math.round(xC(e))},_o={test:xh("rgb","red"),parse:a1("red","green","blue"),transform:({red:e,green:t,blue:o,alpha:s=1})=>"rgba("+ju.transform(e)+", "+ju.transform(t)+", "+ju.transform(o)+", "+_s(oa.transform(s))+")"};function bC(e){let t="",o="",s="",i="";return e.length>5?(t=e.substring(1,3),o=e.substring(3,5),s=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),o=e.substring(2,3),s=e.substring(3,4),i=e.substring(4,5),t+=t,o+=o,s+=s,i+=i),{red:parseInt(t,16),green:parseInt(o,16),blue:parseInt(s,16),alpha:i?parseInt(i,16)/255:1}}const gd={test:xh("#"),parse:bC,transform:_o.transform},ma=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),yo=ma("deg"),Cn=ma("%"),te=ma("px"),SC=ma("vh"),kC=ma("vw"),bg={...Cn,parse:e=>Cn.parse(e)/100,transform:e=>Cn.transform(e*100)},Ir={test:xh("hsl","hue"),parse:a1("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:o,alpha:s=1})=>"hsla("+Math.round(e)+", "+Cn.transform(_s(t))+", "+Cn.transform(_s(o))+", "+_s(oa.transform(s))+")"},Je={test:e=>_o.test(e)||gd.test(e)||Ir.test(e),parse:e=>_o.test(e)?_o.parse(e):Ir.test(e)?Ir.parse(e):gd.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?_o.transform(e):Ir.transform(e),getAnimatableNone:e=>{const t=Je.parse(e);return t.alpha=0,Je.transform(t)}},CC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function RC(e){return isNaN(e)&&typeof e=="string"&&(e.match(wh)?.length||0)+(e.match(CC)?.length||0)>0}const i1="number",l1="color",TC="var",EC="var(",Sg="${}",PC=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ra(e){const t=e.toString(),o=[],s={color:[],number:[],var:[]},i=[];let l=0;const d=t.replace(PC,f=>(Je.test(f)?(s.color.push(l),i.push(l1),o.push(Je.parse(f))):f.startsWith(EC)?(s.var.push(l),i.push(TC),o.push(f)):(s.number.push(l),i.push(i1),o.push(parseFloat(f))),++l,Sg)).split(Sg);return{values:o,split:d,indexes:s,types:i}}function c1(e){return ra(e).values}function u1(e){const{split:t,types:o}=ra(e),s=t.length;return i=>{let l="";for(let u=0;u<s;u++)if(l+=t[u],i[u]!==void 0){const d=o[u];d===i1?l+=_s(i[u]):d===l1?l+=Je.transform(i[u]):l+=i[u]}return l}}const MC=e=>typeof e=="number"?0:Je.test(e)?Je.getAnimatableNone(e):e;function AC(e){const t=c1(e);return u1(e)(t.map(MC))}const Ro={test:RC,parse:c1,createTransformer:u1,getAnimatableNone:AC};function Nu(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+(t-e)*6*o:o<1/2?t:o<2/3?e+(t-e)*(2/3-o)*6:e}function IC({hue:e,saturation:t,lightness:o,alpha:s}){e/=360,t/=100,o/=100;let i=0,l=0,u=0;if(!t)i=l=u=o;else{const d=o<.5?o*(1+t):o+t-o*t,f=2*o-d;i=Nu(f,d,e+1/3),l=Nu(f,d,e),u=Nu(f,d,e-1/3)}return{red:Math.round(i*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:s}}function ll(e,t){return o=>o>0?t:e}const Ue=(e,t,o)=>e+(t-e)*o,Du=(e,t,o)=>{const s=e*e,i=o*(t*t-s)+s;return i<0?0:Math.sqrt(i)},jC=[gd,_o,Ir],NC=e=>jC.find(t=>t.test(e));function kg(e){const t=NC(e);if(!t)return!1;let o=t.parse(e);return t===Ir&&(o=IC(o)),o}const Cg=(e,t)=>{const o=kg(e),s=kg(t);if(!o||!s)return ll(e,t);const i={...o};return l=>(i.red=Du(o.red,s.red,l),i.green=Du(o.green,s.green,l),i.blue=Du(o.blue,s.blue,l),i.alpha=Ue(o.alpha,s.alpha,l),_o.transform(i))},yd=new Set(["none","hidden"]);function DC(e,t){return yd.has(e)?o=>o<=0?e:t:o=>o>=1?t:e}function OC(e,t){return o=>Ue(e,t,o)}function bh(e){return typeof e=="number"?OC:typeof e=="string"?vh(e)?ll:Je.test(e)?Cg:WC:Array.isArray(e)?d1:typeof e=="object"?Je.test(e)?Cg:LC:ll}function d1(e,t){const o=[...e],s=o.length,i=e.map((l,u)=>bh(l)(l,t[u]));return l=>{for(let u=0;u<s;u++)o[u]=i[u](l);return o}}function LC(e,t){const o={...e,...t},s={};for(const i in o)e[i]!==void 0&&t[i]!==void 0&&(s[i]=bh(e[i])(e[i],t[i]));return i=>{for(const l in s)o[l]=s[l](i);return o}}function FC(e,t){const o=[],s={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const l=t.types[i],u=e.indexes[l][s[l]],d=e.values[u]??0;o[i]=d,s[l]++}return o}const WC=(e,t)=>{const o=Ro.createTransformer(t),s=ra(e),i=ra(t);return s.indexes.var.length===i.indexes.var.length&&s.indexes.color.length===i.indexes.color.length&&s.indexes.number.length>=i.indexes.number.length?yd.has(e)&&!i.values.length||yd.has(t)&&!s.values.length?DC(e,t):pa(d1(FC(s,i),i.values),o):ll(e,t)};function h1(e,t,o){return typeof e=="number"&&typeof t=="number"&&typeof o=="number"?Ue(e,t,o):bh(e)(e,t)}const BC=e=>{const t=({timestamp:o})=>e(o);return{start:(o=!0)=>Le.update(t,o),stop:()=>Co(t),now:()=>at.isProcessing?at.timestamp:yt.now()}},p1=(e,t,o=10)=>{let s="";const i=Math.max(Math.round(t/o),2);for(let l=0;l<i;l++)s+=Math.round(e(l/(i-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},cl=2e4;function Sh(e){let t=0;const o=50;let s=e.next(t);for(;!s.done&&t<cl;)t+=o,s=e.next(t);return t>=cl?1/0:t}function HC(e,t=100,o){const s=o({...e,keyframes:[0,t]}),i=Math.min(Sh(s),cl);return{type:"keyframes",ease:l=>s.next(i*l).value/t,duration:qt(i)}}const UC=5;function f1(e,t,o){const s=Math.max(t-UC,0);return $0(o-e(s),t-s)}const Ve={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ou=.001;function zC({duration:e=Ve.duration,bounce:t=Ve.bounce,velocity:o=Ve.velocity,mass:s=Ve.mass}){let i,l,u=1-t;u=En(Ve.minDamping,Ve.maxDamping,u),e=En(Ve.minDuration,Ve.maxDuration,qt(e)),u<1?(i=m=>{const y=m*u,v=y*e,S=y-o,w=vd(m,u),R=Math.exp(-v);return Ou-S/w*R},l=m=>{const v=m*u*e,S=v*o+o,w=Math.pow(u,2)*Math.pow(m,2)*e,R=Math.exp(-v),k=vd(Math.pow(m,2),u);return(-i(m)+Ou>0?-1:1)*((S-w)*R)/k}):(i=m=>{const y=Math.exp(-m*e),v=(m-o)*e+1;return-Ou+y*v},l=m=>{const y=Math.exp(-m*e),v=(o-m)*(e*e);return y*v});const d=5/e,f=_C(i,l,d);if(e=Hn(e),isNaN(f))return{stiffness:Ve.stiffness,damping:Ve.damping,duration:e};{const m=Math.pow(f,2)*s;return{stiffness:m,damping:u*2*Math.sqrt(s*m),duration:e}}}const VC=12;function _C(e,t,o){let s=o;for(let i=1;i<VC;i++)s=s-e(s)/t(s);return s}function vd(e,t){return e*Math.sqrt(1-t*t)}const qC=["duration","bounce"],$C=["stiffness","damping","mass"];function Rg(e,t){return t.some(o=>e[o]!==void 0)}function YC(e){let t={velocity:Ve.velocity,stiffness:Ve.stiffness,damping:Ve.damping,mass:Ve.mass,isResolvedFromDuration:!1,...e};if(!Rg(e,$C)&&Rg(e,qC))if(e.visualDuration){const o=e.visualDuration,s=2*Math.PI/(o*1.2),i=s*s,l=2*En(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:Ve.mass,stiffness:i,damping:l}}else{const o=zC(e);t={...t,...o,mass:Ve.mass},t.isResolvedFromDuration=!0}return t}function ul(e=Ve.visualDuration,t=Ve.bounce){const o=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:s,restDelta:i}=o;const l=o.keyframes[0],u=o.keyframes[o.keyframes.length-1],d={done:!1,value:l},{stiffness:f,damping:m,mass:y,duration:v,velocity:S,isResolvedFromDuration:w}=YC({...o,velocity:-qt(o.velocity||0)}),R=S||0,k=m/(2*Math.sqrt(f*y)),C=u-l,E=qt(Math.sqrt(f/y)),M=Math.abs(C)<5;s||(s=M?Ve.restSpeed.granular:Ve.restSpeed.default),i||(i=M?Ve.restDelta.granular:Ve.restDelta.default);let P;if(k<1){const I=vd(E,k);P=H=>{const z=Math.exp(-k*E*H);return u-z*((R+k*E*C)/I*Math.sin(I*H)+C*Math.cos(I*H))}}else if(k===1)P=I=>u-Math.exp(-E*I)*(C+(R+E*C)*I);else{const I=E*Math.sqrt(k*k-1);P=H=>{const z=Math.exp(-k*E*H),Y=Math.min(I*H,300);return u-z*((R+k*E*C)*Math.sinh(Y)+I*C*Math.cosh(Y))/I}}const D={calculatedDuration:w&&v||null,next:I=>{const H=P(I);if(w)d.done=I>=v;else{let z=I===0?R:0;k<1&&(z=I===0?Hn(R):f1(P,I,H));const Y=Math.abs(z)<=s,ie=Math.abs(u-H)<=i;d.done=Y&&ie}return d.value=d.done?u:H,d},toString:()=>{const I=Math.min(Sh(D),cl),H=p1(z=>D.next(I*z).value,I,30);return I+"ms "+H},toTransition:()=>{}};return D}ul.applyToOptions=e=>{const t=HC(e,100,ul);return e.ease=t.ease,e.duration=Hn(t.duration),e.type="keyframes",e};function wd({keyframes:e,velocity:t=0,power:o=.8,timeConstant:s=325,bounceDamping:i=10,bounceStiffness:l=500,modifyTarget:u,min:d,max:f,restDelta:m=.5,restSpeed:y}){const v=e[0],S={done:!1,value:v},w=Y=>d!==void 0&&Y<d||f!==void 0&&Y>f,R=Y=>d===void 0?f:f===void 0||Math.abs(d-Y)<Math.abs(f-Y)?d:f;let k=o*t;const C=v+k,E=u===void 0?C:u(C);E!==C&&(k=E-v);const M=Y=>-k*Math.exp(-Y/s),P=Y=>E+M(Y),D=Y=>{const ie=M(Y),le=P(Y);S.done=Math.abs(ie)<=m,S.value=S.done?E:le};let I,H;const z=Y=>{w(S.value)&&(I=Y,H=ul({keyframes:[S.value,R(S.value)],velocity:f1(P,Y,S.value),damping:i,stiffness:l,restDelta:m,restSpeed:y}))};return z(0),{calculatedDuration:null,next:Y=>{let ie=!1;return!H&&I===void 0&&(ie=!0,D(Y),z(Y)),I!==void 0&&Y>=I?H.next(Y-I):(!ie&&D(Y),S)}}}function JC(e,t,o){const s=[],i=o||_n.mix||h1,l=e.length-1;for(let u=0;u<l;u++){let d=i(e[u],e[u+1]);if(t){const f=Array.isArray(t)?t[u]||$t:t;d=pa(f,d)}s.push(d)}return s}function GC(e,t,{clamp:o=!0,ease:s,mixer:i}={}){const l=e.length;if(ph(l===t.length),l===1)return()=>t[0];if(l===2&&t[0]===t[1])return()=>t[1];const u=e[0]===e[1];e[0]>e[l-1]&&(e=[...e].reverse(),t=[...t].reverse());const d=JC(t,s,i),f=d.length,m=y=>{if(u&&y<e[0])return t[0];let v=0;if(f>1)for(;v<e.length-2&&!(y<e[v+1]);v++);const S=na(e[v],e[v+1],y);return d[v](S)};return o?y=>m(En(e[0],e[l-1],y)):m}function KC(e,t){const o=e[e.length-1];for(let s=1;s<=t;s++){const i=na(0,t,s);e.push(Ue(o,1,i))}}function XC(e){const t=[0];return KC(t,e.length-1),t}function QC(e,t){return e.map(o=>o*t)}function ZC(e,t){return e.map(()=>t||t1).splice(0,e.length-1)}function qs({duration:e=300,keyframes:t,times:o,ease:s="easeInOut"}){const i=uC(s)?s.map(wg):wg(s),l={done:!1,value:t[0]},u=QC(o&&o.length===t.length?o:XC(t),e),d=GC(u,t,{ease:Array.isArray(i)?i:ZC(t,i)});return{calculatedDuration:e,next:f=>(l.value=d(f),l.done=f>=e,l)}}const eR=e=>e!==null;function kh(e,{repeat:t,repeatType:o="loop"},s,i=1){const l=e.filter(eR),d=i<0||t&&o!=="loop"&&t%2===1?0:l.length-1;return!d||s===void 0?l[d]:s}const tR={decay:wd,inertia:wd,tween:qs,keyframes:qs,spring:ul};function m1(e){typeof e.type=="string"&&(e.type=tR[e.type])}class Ch{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,o){return this.finished.then(t,o)}}const nR=e=>e/100;class Rh extends Ch{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:o}=this.options;o&&o.updatedAt!==yt.now()&&this.tick(yt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;m1(t);const{type:o=qs,repeat:s=0,repeatDelay:i=0,repeatType:l,velocity:u=0}=t;let{keyframes:d}=t;const f=o||qs;f!==qs&&typeof d[0]!="number"&&(this.mixKeyframes=pa(nR,h1(d[0],d[1])),d=[0,100]);const m=f({...t,keyframes:d});l==="mirror"&&(this.mirroredGenerator=f({...t,keyframes:[...d].reverse(),velocity:-u})),m.calculatedDuration===null&&(m.calculatedDuration=Sh(m));const{calculatedDuration:y}=m;this.calculatedDuration=y,this.resolvedDuration=y+i,this.totalDuration=this.resolvedDuration*(s+1)-i,this.generator=m}updateTime(t){const o=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=o}tick(t,o=!1){const{generator:s,totalDuration:i,mixKeyframes:l,mirroredGenerator:u,resolvedDuration:d,calculatedDuration:f}=this;if(this.startTime===null)return s.next(0);const{delay:m=0,keyframes:y,repeat:v,repeatType:S,repeatDelay:w,type:R,onUpdate:k,finalKeyframe:C}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),o?this.currentTime=t:this.updateTime(t);const E=this.currentTime-m*(this.playbackSpeed>=0?1:-1),M=this.playbackSpeed>=0?E<0:E>i;this.currentTime=Math.max(E,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let P=this.currentTime,D=s;if(v){const Y=Math.min(this.currentTime,i)/d;let ie=Math.floor(Y),le=Y%1;!le&&Y>=1&&(le=1),le===1&&ie--,ie=Math.min(ie,v+1),ie%2&&(S==="reverse"?(le=1-le,w&&(le-=w/d)):S==="mirror"&&(D=u)),P=En(0,1,le)*d}const I=M?{done:!1,value:y[0]}:D.next(P);l&&(I.value=l(I.value));let{done:H}=I;!M&&f!==null&&(H=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const z=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&H);return z&&R!==wd&&(I.value=kh(y,this.options,C,this.speed)),k&&k(I.value),z&&this.finish(),I}then(t,o){return this.finished.then(t,o)}get duration(){return qt(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+qt(t)}get time(){return qt(this.currentTime)}set time(t){t=Hn(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(yt.now());const o=this.playbackSpeed!==t;this.playbackSpeed=t,o&&(this.time=qt(this.currentTime))}play(){if(this.isStopped)return;const{driver:t=BC,startTime:o}=this.options;this.driver||(this.driver=t(i=>this.tick(i))),this.options.onPlay?.();const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=o??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(yt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),t.observe(this)}}function oR(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const qo=e=>e*180/Math.PI,xd=e=>{const t=qo(Math.atan2(e[1],e[0]));return bd(t)},rR={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:xd,rotateZ:xd,skewX:e=>qo(Math.atan(e[1])),skewY:e=>qo(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},bd=e=>(e=e%360,e<0&&(e+=360),e),Tg=xd,Eg=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Pg=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),sR={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Eg,scaleY:Pg,scale:e=>(Eg(e)+Pg(e))/2,rotateX:e=>bd(qo(Math.atan2(e[6],e[5]))),rotateY:e=>bd(qo(Math.atan2(-e[2],e[0]))),rotateZ:Tg,rotate:Tg,skewX:e=>qo(Math.atan(e[4])),skewY:e=>qo(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Sd(e){return e.includes("scale")?1:0}function kd(e,t){if(!e||e==="none")return Sd(t);const o=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,i;if(o)s=sR,i=o;else{const d=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=rR,i=d}if(!i)return Sd(t);const l=s[t],u=i[1].split(",").map(iR);return typeof l=="function"?l(u):u[l]}const aR=(e,t)=>{const{transform:o="none"}=getComputedStyle(e);return kd(o,t)};function iR(e){return parseFloat(e.trim())}const Yr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Jr=new Set(Yr),Mg=e=>e===$r||e===te,lR=new Set(["x","y","z"]),cR=Yr.filter(e=>!lR.has(e));function uR(e){const t=[];return cR.forEach(o=>{const s=e.getValue(o);s!==void 0&&(t.push([o,s.get()]),s.set(o.startsWith("scale")?1:0))}),t}const xo={width:({x:e},{paddingLeft:t="0",paddingRight:o="0"})=>e.max-e.min-parseFloat(t)-parseFloat(o),height:({y:e},{paddingTop:t="0",paddingBottom:o="0"})=>e.max-e.min-parseFloat(t)-parseFloat(o),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>kd(t,"x"),y:(e,{transform:t})=>kd(t,"y")};xo.translateX=xo.x;xo.translateY=xo.y;const $o=new Set;let Cd=!1,Rd=!1,Td=!1;function g1(){if(Rd){const e=Array.from($o).filter(s=>s.needsMeasurement),t=new Set(e.map(s=>s.element)),o=new Map;t.forEach(s=>{const i=uR(s);i.length&&(o.set(s,i),s.render())}),e.forEach(s=>s.measureInitialState()),t.forEach(s=>{s.render();const i=o.get(s);i&&i.forEach(([l,u])=>{s.getValue(l)?.set(u)})}),e.forEach(s=>s.measureEndState()),e.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}Rd=!1,Cd=!1,$o.forEach(e=>e.complete(Td)),$o.clear()}function y1(){$o.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Rd=!0)})}function dR(){Td=!0,y1(),g1(),Td=!1}class Th{constructor(t,o,s,i,l,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=o,this.name=s,this.motionValue=i,this.element=l,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?($o.add(this),Cd||(Cd=!0,Le.read(y1),Le.resolveKeyframes(g1))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:o,element:s,motionValue:i}=this;if(t[0]===null){const l=i?.get(),u=t[t.length-1];if(l!==void 0)t[0]=l;else if(s&&o){const d=s.readValue(o,u);d!=null&&(t[0]=d)}t[0]===void 0&&(t[0]=u),i&&l===void 0&&i.set(t[0])}oR(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),$o.delete(this)}cancel(){this.state==="scheduled"&&($o.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const hR=e=>e.startsWith("--");function pR(e,t,o){hR(t)?e.style.setProperty(t,o):e.style[t]=o}const fR=fh(()=>window.ScrollTimeline!==void 0),mR={};function gR(e,t){const o=fh(e);return()=>mR[t]??o()}const v1=gR(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Us=([e,t,o,s])=>`cubic-bezier(${e}, ${t}, ${o}, ${s})`,Ag={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Us([0,.65,.55,1]),circOut:Us([.55,0,1,.45]),backIn:Us([.31,.01,.66,-.59]),backOut:Us([.33,1.53,.69,.99])};function w1(e,t){if(e)return typeof e=="function"?v1()?p1(e,t):"ease-out":n1(e)?Us(e):Array.isArray(e)?e.map(o=>w1(o,t)||Ag.easeOut):Ag[e]}function yR(e,t,o,{delay:s=0,duration:i=300,repeat:l=0,repeatType:u="loop",ease:d="easeOut",times:f}={},m=void 0){const y={[t]:o};f&&(y.offset=f);const v=w1(d,i);Array.isArray(v)&&(y.easing=v);const S={delay:s,duration:i,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"};return m&&(S.pseudoElement=m),e.animate(y,S)}function x1(e){return typeof e=="function"&&"applyToOptions"in e}function vR({type:e,...t}){return x1(e)&&v1()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class wR extends Ch{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:o,name:s,keyframes:i,pseudoElement:l,allowFlatten:u=!1,finalKeyframe:d,onComplete:f}=t;this.isPseudoElement=!!l,this.allowFlatten=u,this.options=t,ph(typeof t.type!="string");const m=vR(t);this.animation=yR(o,s,i,m,l),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const y=kh(i,this.options,d,this.speed);this.updateMotionValue?this.updateMotionValue(y):pR(o,s,y),this.animation.cancel()}f?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const t=this.animation.effect?.getComputedTiming?.().duration||0;return qt(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+qt(t)}get time(){return qt(Number(this.animation.currentTime)||0)}set time(t){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Hn(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,observe:o}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,t&&fR()?(this.animation.timeline=t,$t):o(this)}}const b1={anticipate:Q0,backInOut:X0,circInOut:e1};function xR(e){return e in b1}function bR(e){typeof e.ease=="string"&&xR(e.ease)&&(e.ease=b1[e.ease])}const Lu=10;class SR extends wR{constructor(t){bR(t),m1(t),super(t),t.startTime!==void 0&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:o,onUpdate:s,onComplete:i,element:l,...u}=this.options;if(!o)return;if(t!==void 0){o.set(t);return}const d=new Rh({...u,autoplay:!1}),f=Math.max(Lu,yt.now()-this.startTime),m=En(0,Lu,f-Lu);o.setWithVelocity(d.sample(Math.max(0,f-m)).value,d.sample(f).value,m),d.stop()}}const Ig=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Ro.test(e)||e==="0")&&!e.startsWith("url("));function kR(e){const t=e[0];if(e.length===1)return!0;for(let o=0;o<e.length;o++)if(e[o]!==t)return!0}function CR(e,t,o,s){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const l=e[e.length-1],u=Ig(i,t),d=Ig(l,t);return!u||!d?!1:kR(e)||(o==="spring"||x1(o))&&s}function Ed(e){e.duration=0,e.type="keyframes"}const RR=new Set(["opacity","clipPath","filter","transform"]),TR=fh(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function ER(e){const{motionValue:t,name:o,repeatDelay:s,repeatType:i,damping:l,type:u}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:f,transformTemplate:m}=t.owner.getProps();return TR()&&o&&RR.has(o)&&(o!=="transform"||!m)&&!f&&!s&&i!=="mirror"&&l!==0&&u!=="inertia"}const PR=40;class MR extends Ch{constructor({autoplay:t=!0,delay:o=0,type:s="keyframes",repeat:i=0,repeatDelay:l=0,repeatType:u="loop",keyframes:d,name:f,motionValue:m,element:y,...v}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=yt.now();const S={autoplay:t,delay:o,type:s,repeat:i,repeatDelay:l,repeatType:u,name:f,motionValue:m,element:y,...v},w=y?.KeyframeResolver||Th;this.keyframeResolver=new w(d,(R,k,C)=>this.onKeyframesResolved(R,k,S,!C),f,m,y),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(t,o,s,i){this.keyframeResolver=void 0;const{name:l,type:u,velocity:d,delay:f,isHandoff:m,onUpdate:y}=s;this.resolvedAt=yt.now(),CR(t,l,u,d)||((_n.instantAnimations||!f)&&y?.(kh(t,s,o)),t[0]=t[t.length-1],Ed(s),s.repeat=0);const S={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>PR?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:o,...s,keyframes:t},w=!m&&ER(S),R=S.motionValue?.owner?.current,k=w?new SR({...S,element:R}):new Rh(S);k.finished.then(()=>{this.notifyFinished()}).catch($t),this.pendingTimeline&&(this.stopTimeline=k.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=k}get finished(){return this._animation?this.animation.finished:this._finished}then(t,o){return this.finished.finally(t).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),dR()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function S1(e,t,o,s=0,i=1){const l=Array.from(e).sort((m,y)=>m.sortNodePosition(y)).indexOf(t),u=e.size,d=(u-1)*s;return typeof o=="function"?o(l,u):i===1?l*s:d-l*s}const AR=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function IR(e){const t=AR.exec(e);if(!t)return[,];const[,o,s,i]=t;return[`--${o??s}`,i]}function k1(e,t,o=1){const[s,i]=IR(e);if(!s)return;const l=window.getComputedStyle(t).getPropertyValue(s);if(l){const u=l.trim();return V0(u)?parseFloat(u):u}return vh(i)?k1(i,t,o+1):i}const jR={type:"spring",stiffness:500,damping:25,restSpeed:10},NR=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),DR={type:"keyframes",duration:.8},OR={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},LR=(e,{keyframes:t})=>t.length>2?DR:Jr.has(e)?e.startsWith("scale")?NR(t[1]):jR:OR,FR=e=>e!==null;function WR(e,{repeat:t,repeatType:o="loop"},s){const i=e.filter(FR),l=t&&o!=="loop"&&t%2===1?0:i.length-1;return i[l]}function Eh(e,t){return e?.[t]??e?.default??e}function BR({when:e,delay:t,delayChildren:o,staggerChildren:s,staggerDirection:i,repeat:l,repeatType:u,repeatDelay:d,from:f,elapsed:m,...y}){return!!Object.keys(y).length}const Ph=(e,t,o,s={},i,l)=>u=>{const d=Eh(s,e)||{},f=d.delay||s.delay||0;let{elapsed:m=0}=s;m=m-Hn(f);const y={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:t.getVelocity(),...d,delay:-m,onUpdate:S=>{t.set(S),d.onUpdate&&d.onUpdate(S)},onComplete:()=>{u(),d.onComplete&&d.onComplete()},name:e,motionValue:t,element:l?void 0:i};BR(d)||Object.assign(y,LR(e,y)),y.duration&&(y.duration=Hn(y.duration)),y.repeatDelay&&(y.repeatDelay=Hn(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let v=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(Ed(y),y.delay===0&&(v=!0)),(_n.instantAnimations||_n.skipAnimations)&&(v=!0,Ed(y),y.delay=0),y.allowFlatten=!d.type&&!d.ease,v&&!l&&t.get()!==void 0){const S=WR(y.keyframes,d);if(S!==void 0){Le.update(()=>{y.onUpdate(S),y.onComplete()});return}}return d.isSync?new Rh(y):new MR(y)};function jg(e){const t=[{},{}];return e?.values.forEach((o,s)=>{t[0][s]=o.get(),t[1][s]=o.getVelocity()}),t}function Mh(e,t,o,s){if(typeof t=="function"){const[i,l]=jg(s);t=t(o!==void 0?o:e.custom,i,l)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,l]=jg(s);t=t(o!==void 0?o:e.custom,i,l)}return t}function Fr(e,t,o){const s=e.getProps();return Mh(s,t,o!==void 0?o:s.custom,e)}const C1=new Set(["width","height","top","left","right","bottom",...Yr]),Ng=30,HR=e=>!isNaN(parseFloat(e));class UR{constructor(t,o={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{const i=yt.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const l of this.dependents)l.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=o.owner}setCurrent(t){this.current=t,this.updatedAt=yt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=HR(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,o){this.events[t]||(this.events[t]=new mh);const s=this.events[t].add(o);return t==="change"?()=>{s(),Le.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,o){this.passiveEffect=t,this.stopPassiveEffect=o}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,o,s){this.set(o),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-s}jump(t,o=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=yt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Ng)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,Ng);return $0(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(t){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=t(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ur(e,t){return new UR(e,t)}const Pd=e=>Array.isArray(e);function zR(e,t,o){e.hasValue(t)?e.getValue(t).set(o):e.addValue(t,Ur(o))}function VR(e){return Pd(e)?e[e.length-1]||0:e}function _R(e,t){const o=Fr(e,t);let{transitionEnd:s={},transition:i={},...l}=o||{};l={...l,...s};for(const u in l){const d=VR(l[u]);zR(e,u,d)}}const dt=e=>!!(e&&e.getVelocity);function qR(e){return!!(dt(e)&&e.add)}function Md(e,t){const o=e.getValue("willChange");if(qR(o))return o.add(t);if(!o&&_n.WillChange){const s=new _n.WillChange("auto");e.addValue("willChange",s),s.add(t)}}function Ah(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const $R="framerAppearId",R1="data-"+Ah($R);function T1(e){return e.props[R1]}function YR({protectedKeys:e,needsAnimating:t},o){const s=e.hasOwnProperty(o)&&t[o]!==!0;return t[o]=!1,s}function E1(e,t,{delay:o=0,transitionOverride:s,type:i}={}){let{transition:l=e.getDefaultTransition(),transitionEnd:u,...d}=t;s&&(l=s);const f=[],m=i&&e.animationState&&e.animationState.getState()[i];for(const y in d){const v=e.getValue(y,e.latestValues[y]??null),S=d[y];if(S===void 0||m&&YR(m,y))continue;const w={delay:o,...Eh(l||{},y)},R=v.get();if(R!==void 0&&!v.isAnimating&&!Array.isArray(S)&&S===R&&!w.velocity)continue;let k=!1;if(window.MotionHandoffAnimation){const E=T1(e);if(E){const M=window.MotionHandoffAnimation(E,y,Le);M!==null&&(w.startTime=M,k=!0)}}Md(e,y),v.start(Ph(y,v,S,e.shouldReduceMotion&&C1.has(y)?{type:!1}:w,e,k));const C=v.animation;C&&f.push(C)}return u&&Promise.all(f).then(()=>{Le.update(()=>{u&&_R(e,u)})}),f}function Ad(e,t,o={}){const s=Fr(e,t,o.type==="exit"?e.presenceContext?.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=s||{};o.transitionOverride&&(i=o.transitionOverride);const l=s?()=>Promise.all(E1(e,s,o)):()=>Promise.resolve(),u=e.variantChildren&&e.variantChildren.size?(f=0)=>{const{delayChildren:m=0,staggerChildren:y,staggerDirection:v}=i;return JR(e,t,f,m,y,v,o)}:()=>Promise.resolve(),{when:d}=i;if(d){const[f,m]=d==="beforeChildren"?[l,u]:[u,l];return f().then(()=>m())}else return Promise.all([l(),u(o.delay)])}function JR(e,t,o=0,s=0,i=0,l=1,u){const d=[];for(const f of e.variantChildren)f.notify("AnimationStart",t),d.push(Ad(f,t,{...u,delay:o+(typeof s=="function"?0:s)+S1(e.variantChildren,f,s,i,l)}).then(()=>f.notify("AnimationComplete",t)));return Promise.all(d)}function GR(e,t,o={}){e.notify("AnimationStart",t);let s;if(Array.isArray(t)){const i=t.map(l=>Ad(e,l,o));s=Promise.all(i)}else if(typeof t=="string")s=Ad(e,t,o);else{const i=typeof t=="function"?Fr(e,t,o.custom):t;s=Promise.all(E1(e,i,o))}return s.then(()=>{e.notify("AnimationComplete",t)})}const KR={test:e=>e==="auto",parse:e=>e},P1=e=>t=>t.test(e),M1=[$r,te,Cn,yo,kC,SC,KR],Dg=e=>M1.find(P1(e));function XR(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||q0(e):!0}const QR=new Set(["brightness","contrast","saturate","opacity"]);function ZR(e){const[t,o]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[s]=o.match(wh)||[];if(!s)return e;const i=o.replace(s,"");let l=QR.has(t)?1:0;return s!==o&&(l*=100),t+"("+l+i+")"}const e6=/\b([a-z-]*)\(.*?\)/gu,Id={...Ro,getAnimatableNone:e=>{const t=e.match(e6);return t?t.map(ZR).join(" "):e}},Og={...$r,transform:Math.round},t6={rotate:yo,rotateX:yo,rotateY:yo,rotateZ:yo,scale:Wi,scaleX:Wi,scaleY:Wi,scaleZ:Wi,skew:yo,skewX:yo,skewY:yo,distance:te,translateX:te,translateY:te,translateZ:te,x:te,y:te,z:te,perspective:te,transformPerspective:te,opacity:oa,originX:bg,originY:bg,originZ:te},Ih={borderWidth:te,borderTopWidth:te,borderRightWidth:te,borderBottomWidth:te,borderLeftWidth:te,borderRadius:te,radius:te,borderTopLeftRadius:te,borderTopRightRadius:te,borderBottomRightRadius:te,borderBottomLeftRadius:te,width:te,maxWidth:te,height:te,maxHeight:te,top:te,right:te,bottom:te,left:te,inset:te,insetBlock:te,insetBlockStart:te,insetBlockEnd:te,insetInline:te,insetInlineStart:te,insetInlineEnd:te,padding:te,paddingTop:te,paddingRight:te,paddingBottom:te,paddingLeft:te,paddingBlock:te,paddingBlockStart:te,paddingBlockEnd:te,paddingInline:te,paddingInlineStart:te,paddingInlineEnd:te,margin:te,marginTop:te,marginRight:te,marginBottom:te,marginLeft:te,marginBlock:te,marginBlockStart:te,marginBlockEnd:te,marginInline:te,marginInlineStart:te,marginInlineEnd:te,backgroundPositionX:te,backgroundPositionY:te,...t6,zIndex:Og,fillOpacity:oa,strokeOpacity:oa,numOctaves:Og},n6={...Ih,color:Je,backgroundColor:Je,outlineColor:Je,fill:Je,stroke:Je,borderColor:Je,borderTopColor:Je,borderRightColor:Je,borderBottomColor:Je,borderLeftColor:Je,filter:Id,WebkitFilter:Id},A1=e=>n6[e];function I1(e,t){let o=A1(e);return o!==Id&&(o=Ro),o.getAnimatableNone?o.getAnimatableNone(t):void 0}const o6=new Set(["auto","none","0"]);function r6(e,t,o){let s=0,i;for(;s<e.length&&!i;){const l=e[s];typeof l=="string"&&!o6.has(l)&&ra(l).values.length&&(i=e[s]),s++}if(i&&o)for(const l of t)e[l]=I1(o,i)}class s6 extends Th{constructor(t,o,s,i,l){super(t,o,s,i,l,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:o,name:s}=this;if(!o||!o.current)return;super.readKeyframes();for(let y=0;y<t.length;y++){let v=t[y];if(typeof v=="string"&&(v=v.trim(),vh(v))){const S=k1(v,o.current);S!==void 0&&(t[y]=S),y===t.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!C1.has(s)||t.length!==2)return;const[i,l]=t,u=Dg(i),d=Dg(l),f=xg(i),m=xg(l);if(f!==m&&xo[s]){this.needsMeasurement=!0;return}if(u!==d)if(Mg(u)&&Mg(d))for(let y=0;y<t.length;y++){const v=t[y];typeof v=="string"&&(t[y]=parseFloat(v))}else xo[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:o}=this,s=[];for(let i=0;i<t.length;i++)(t[i]===null||XR(t[i]))&&s.push(i);s.length&&r6(t,s,o)}measureInitialState(){const{element:t,unresolvedKeyframes:o,name:s}=this;if(!t||!t.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=xo[s](t.measureViewportBox(),window.getComputedStyle(t.current)),o[0]=this.measuredOrigin;const i=o[o.length-1];i!==void 0&&t.getValue(s,i).jump(i,!1)}measureEndState(){const{element:t,name:o,unresolvedKeyframes:s}=this;if(!t||!t.current)return;const i=t.getValue(o);i&&i.jump(this.measuredOrigin,!1);const l=s.length-1,u=s[l];s[l]=xo[o](t.measureViewportBox(),window.getComputedStyle(t.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),this.removedTransforms?.length&&this.removedTransforms.forEach(([d,f])=>{t.getValue(d).set(f)}),this.resolveNoneKeyframes()}}function j1(e,t,o){if(e instanceof EventTarget)return[e];if(typeof e=="string"){const i=document.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e)}const N1=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function a6(e){return _0(e)&&"offsetHeight"in e}const{schedule:jh}=o1(queueMicrotask,!1),rn={x:!1,y:!1};function D1(){return rn.x||rn.y}function i6(e){return e==="x"||e==="y"?rn[e]?null:(rn[e]=!0,()=>{rn[e]=!1}):rn.x||rn.y?null:(rn.x=rn.y=!0,()=>{rn.x=rn.y=!1})}function O1(e,t){const o=j1(e),s=new AbortController,i={passive:!0,...t,signal:s.signal};return[o,i,()=>s.abort()]}function Lg(e){return!(e.pointerType==="touch"||D1())}function l6(e,t,o={}){const[s,i,l]=O1(e,o),u=d=>{if(!Lg(d))return;const{target:f}=d,m=t(f,d);if(typeof m!="function"||!f)return;const y=v=>{Lg(v)&&(m(v),f.removeEventListener("pointerleave",y))};f.addEventListener("pointerleave",y,i)};return s.forEach(d=>{d.addEventListener("pointerenter",u,i)}),l}const L1=(e,t)=>t?e===t?!0:L1(e,t.parentElement):!1,Nh=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,c6=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function F1(e){return c6.has(e.tagName)||e.isContentEditable===!0}const Xi=new WeakSet;function Fg(e){return t=>{t.key==="Enter"&&e(t)}}function Fu(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const u6=(e,t)=>{const o=e.currentTarget;if(!o)return;const s=Fg(()=>{if(Xi.has(o))return;Fu(o,"down");const i=Fg(()=>{Fu(o,"up")}),l=()=>Fu(o,"cancel");o.addEventListener("keyup",i,t),o.addEventListener("blur",l,t)});o.addEventListener("keydown",s,t),o.addEventListener("blur",()=>o.removeEventListener("keydown",s),t)};function Wg(e){return Nh(e)&&!D1()}function d6(e,t,o={}){const[s,i,l]=O1(e,o),u=d=>{const f=d.currentTarget;if(!Wg(d))return;Xi.add(f);const m=t(f,d),y=(w,R)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",S),Xi.has(f)&&Xi.delete(f),Wg(w)&&typeof m=="function"&&m(w,{success:R})},v=w=>{y(w,f===window||f===document||o.useGlobalTarget||L1(f,w.target))},S=w=>{y(w,!1)};window.addEventListener("pointerup",v,i),window.addEventListener("pointercancel",S,i)};return s.forEach(d=>{(o.useGlobalTarget?window:d).addEventListener("pointerdown",u,i),a6(d)&&(d.addEventListener("focus",m=>u6(m,i)),!F1(d)&&!d.hasAttribute("tabindex")&&(d.tabIndex=0))}),l}function W1(e){return _0(e)&&"ownerSVGElement"in e}function h6(e){return W1(e)&&e.tagName==="svg"}const p6=[...M1,Je,Ro],f6=e=>p6.find(P1(e)),Bg=()=>({translate:0,scale:1,origin:0,originPoint:0}),jr=()=>({x:Bg(),y:Bg()}),Hg=()=>({min:0,max:0}),Ze=()=>({x:Hg(),y:Hg()}),jd={current:null},B1={current:!1},m6=typeof window<"u";function g6(){if(B1.current=!0,!!m6)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>jd.current=e.matches;e.addEventListener("change",t),t()}else jd.current=!1}const y6=new WeakMap;function Il(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function sa(e){return typeof e=="string"||Array.isArray(e)}const Dh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Oh=["initial",...Dh];function jl(e){return Il(e.animate)||Oh.some(t=>sa(e[t]))}function H1(e){return!!(jl(e)||e.variants)}function v6(e,t,o){for(const s in t){const i=t[s],l=o[s];if(dt(i))e.addValue(s,i);else if(dt(l))e.addValue(s,Ur(i,{owner:e}));else if(l!==i)if(e.hasValue(s)){const u=e.getValue(s);u.liveStyle===!0?u.jump(i):u.hasAnimated||u.set(i)}else{const u=e.getStaticValue(s);e.addValue(s,Ur(u!==void 0?u:i,{owner:e}))}}for(const s in o)t[s]===void 0&&e.removeValue(s);return t}const Ug=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let dl={};function U1(e){dl=e}function w6(){return dl}class x6{scrapeMotionValuesFromProps(t,o,s){return{}}constructor({parent:t,props:o,presenceContext:s,reducedMotionConfig:i,blockInitialAnimation:l,visualState:u},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Th,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=yt.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,Le.render(this.render,!1,!0))};const{latestValues:f,renderState:m}=u;this.latestValues=f,this.baseTarget={...f},this.initialValues=o.initial?{...f}:{},this.renderState=m,this.parent=t,this.props=o,this.presenceContext=s,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=d,this.blockInitialAnimation=!!l,this.isControllingVariants=jl(o),this.isVariantNode=H1(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:y,...v}=this.scrapeMotionValuesFromProps(o,{},this);for(const S in v){const w=v[S];f[S]!==void 0&&dt(w)&&w.set(f[S])}}mount(t){this.current=t,y6.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,s)=>this.bindToMotionValue(s,o)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(B1.current||g6(),this.shouldReduceMotion=jd.current),this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Co(this.notifyUpdate),Co(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const o=this.features[t];o&&(o.unmount(),o.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,o){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const s=Jr.has(t);s&&this.onBindTransform&&this.onBindTransform();const i=o.on("change",u=>{this.latestValues[t]=u,this.props.onUpdate&&Le.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let l;typeof window<"u"&&window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,t,o)),this.valueSubscriptions.set(t,()=>{i(),l&&l(),o.owner&&o.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in dl){const o=dl[t];if(!o)continue;const{isEnabled:s,Feature:i}=o;if(!this.features[t]&&i&&s(this.props)&&(this.features[t]=new i(this)),this.features[t]){const l=this.features[t];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ze()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,o){this.latestValues[t]=o}update(t,o){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let s=0;s<Ug.length;s++){const i=Ug[s];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const l="on"+i,u=t[l];u&&(this.propEventSubscriptions[i]=this.on(i,u))}this.prevMotionValues=v6(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(t),()=>o.variantChildren.delete(t)}addValue(t,o){const s=this.values.get(t);o!==s&&(s&&this.removeValue(t),this.bindToMotionValue(t,o),this.values.set(t,o),this.latestValues[t]=o.get())}removeValue(t){this.values.delete(t);const o=this.valueSubscriptions.get(t);o&&(o(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,o){if(this.props.values&&this.props.values[t])return this.props.values[t];let s=this.values.get(t);return s===void 0&&o!==void 0&&(s=Ur(o===null?void 0:o,{owner:this}),this.addValue(t,s)),s}readValue(t,o){let s=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return s!=null&&(typeof s=="string"&&(V0(s)||q0(s))?s=parseFloat(s):!f6(s)&&Ro.test(o)&&(s=I1(t,o)),this.setBaseTarget(t,dt(s)?s.get():s)),dt(s)?s.get():s}setBaseTarget(t,o){this.baseTarget[t]=o}getBaseTarget(t){const{initial:o}=this.props;let s;if(typeof o=="string"||typeof o=="object"){const l=Mh(this.props,o,this.presenceContext?.custom);l&&(s=l[t])}if(o&&s!==void 0)return s;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!dt(i)?i:this.initialValues[t]!==void 0&&s===void 0?void 0:this.baseTarget[t]}on(t,o){return this.events[t]||(this.events[t]=new mh),this.events[t].add(o)}notify(t,...o){this.events[t]&&this.events[t].notify(...o)}scheduleRenderMicrotask(){jh.render(this.render)}}class z1 extends x6{constructor(){super(...arguments),this.KeyframeResolver=s6}sortInstanceNodePosition(t,o){return t.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(t,o){const s=t.style;return s?s[o]:void 0}removeValueFromRenderState(t,{vars:o,style:s}){delete o[t],delete s[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;dt(t)&&(this.childSubscription=t.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}class To{constructor(t){this.isMounted=!1,this.node=t}update(){}}function V1({top:e,left:t,right:o,bottom:s}){return{x:{min:t,max:o},y:{min:e,max:s}}}function b6({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function S6(e,t){if(!t)return e;const o=t({x:e.left,y:e.top}),s=t({x:e.right,y:e.bottom});return{top:o.y,left:o.x,bottom:s.y,right:s.x}}function Wu(e){return e===void 0||e===1}function Nd({scale:e,scaleX:t,scaleY:o}){return!Wu(e)||!Wu(t)||!Wu(o)}function zo(e){return Nd(e)||_1(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function _1(e){return zg(e.x)||zg(e.y)}function zg(e){return e&&e!=="0%"}function hl(e,t,o){const s=e-o,i=t*s;return o+i}function Vg(e,t,o,s,i){return i!==void 0&&(e=hl(e,i,s)),hl(e,o,s)+t}function Dd(e,t=0,o=1,s,i){e.min=Vg(e.min,t,o,s,i),e.max=Vg(e.max,t,o,s,i)}function q1(e,{x:t,y:o}){Dd(e.x,t.translate,t.scale,t.originPoint),Dd(e.y,o.translate,o.scale,o.originPoint)}const _g=.999999999999,qg=1.0000000000001;function k6(e,t,o,s=!1){const i=o.length;if(!i)return;t.x=t.y=1;let l,u;for(let d=0;d<i;d++){l=o[d],u=l.projectionDelta;const{visualElement:f}=l.options;f&&f.props.style&&f.props.style.display==="contents"||(s&&l.options.layoutScroll&&l.scroll&&l!==l.root&&Dr(e,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(t.x*=u.x.scale,t.y*=u.y.scale,q1(e,u)),s&&zo(l.latestValues)&&Dr(e,l.latestValues))}t.x<qg&&t.x>_g&&(t.x=1),t.y<qg&&t.y>_g&&(t.y=1)}function Nr(e,t){e.min=e.min+t,e.max=e.max+t}function $g(e,t,o,s,i=.5){const l=Ue(e.min,e.max,i);Dd(e,t,o,l,s)}function Dr(e,t){$g(e.x,t.x,t.scaleX,t.scale,t.originX),$g(e.y,t.y,t.scaleY,t.scale,t.originY)}function $1(e,t){return V1(S6(e.getBoundingClientRect(),t))}function C6(e,t,o){const s=$1(e,o),{scroll:i}=t;return i&&(Nr(s.x,i.offset.x),Nr(s.y,i.offset.y)),s}const R6={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},T6=Yr.length;function E6(e,t,o){let s="",i=!0;for(let l=0;l<T6;l++){const u=Yr[l],d=e[u];if(d===void 0)continue;let f=!0;if(typeof d=="number"?f=d===(u.startsWith("scale")?1:0):f=parseFloat(d)===0,!f||o){const m=N1(d,Ih[u]);if(!f){i=!1;const y=R6[u]||u;s+=`${y}(${m}) `}o&&(t[u]=m)}}return s=s.trim(),o?s=o(t,i?"":s):i&&(s="none"),s}function Lh(e,t,o){const{style:s,vars:i,transformOrigin:l}=e;let u=!1,d=!1;for(const f in t){const m=t[f];if(Jr.has(f)){u=!0;continue}else if(s1(f)){i[f]=m;continue}else{const y=N1(m,Ih[f]);f.startsWith("origin")?(d=!0,l[f]=y):s[f]=y}}if(t.transform||(u||o?s.transform=E6(t,e.transform,o):s.transform&&(s.transform="none")),d){const{originX:f="50%",originY:m="50%",originZ:y=0}=l;s.transformOrigin=`${f} ${m} ${y}`}}function Y1(e,{style:t,vars:o},s,i){const l=e.style;let u;for(u in t)l[u]=t[u];i?.applyProjectionStyles(l,s);for(u in o)l.setProperty(u,o[u])}function Yg(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Ws={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(te.test(e))e=parseFloat(e);else return e;const o=Yg(e,t.target.x),s=Yg(e,t.target.y);return`${o}% ${s}%`}},P6={correct:(e,{treeScale:t,projectionDelta:o})=>{const s=e,i=Ro.parse(e);if(i.length>5)return s;const l=Ro.createTransformer(e),u=typeof i[0]!="number"?1:0,d=o.x.scale*t.x,f=o.y.scale*t.y;i[0+u]/=d,i[1+u]/=f;const m=Ue(d,f,.5);return typeof i[2+u]=="number"&&(i[2+u]/=m),typeof i[3+u]=="number"&&(i[3+u]/=m),l(i)}},Od={borderRadius:{...Ws,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ws,borderTopRightRadius:Ws,borderBottomLeftRadius:Ws,borderBottomRightRadius:Ws,boxShadow:P6};function J1(e,{layout:t,layoutId:o}){return Jr.has(e)||e.startsWith("origin")||(t||o!==void 0)&&(!!Od[e]||e==="opacity")}function Fh(e,t,o){const s=e.style,i=t?.style,l={};if(!s)return l;for(const u in s)(dt(s[u])||i&&dt(i[u])||J1(u,e)||o?.getValue(u)?.liveStyle!==void 0)&&(l[u]=s[u]);return l}function M6(e){return window.getComputedStyle(e)}class A6 extends z1{constructor(){super(...arguments),this.type="html",this.renderInstance=Y1}readValueFromInstance(t,o){if(Jr.has(o))return this.projection?.isProjecting?Sd(o):aR(t,o);{const s=M6(t),i=(s1(o)?s.getPropertyValue(o):s[o])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:o}){return $1(t,o)}build(t,o,s){Lh(t,o,s.transformTemplate)}scrapeMotionValuesFromProps(t,o,s){return Fh(t,o,s)}}const I6={offset:"stroke-dashoffset",array:"stroke-dasharray"},j6={offset:"strokeDashoffset",array:"strokeDasharray"};function N6(e,t,o=1,s=0,i=!0){e.pathLength=1;const l=i?I6:j6;e[l.offset]=te.transform(-s);const u=te.transform(t),d=te.transform(o);e[l.array]=`${u} ${d}`}const D6=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function G1(e,{attrX:t,attrY:o,attrScale:s,pathLength:i,pathSpacing:l=1,pathOffset:u=0,...d},f,m,y){if(Lh(e,d,m),f){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:v,style:S}=e;v.transform&&(S.transform=v.transform,delete v.transform),(S.transform||v.transformOrigin)&&(S.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),S.transform&&(S.transformBox=y?.transformBox??"fill-box",delete v.transformBox);for(const w of D6)v[w]!==void 0&&(S[w]=v[w],delete v[w]);t!==void 0&&(v.x=t),o!==void 0&&(v.y=o),s!==void 0&&(v.scale=s),i!==void 0&&N6(v,i,l,u,!1)}const K1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),X1=e=>typeof e=="string"&&e.toLowerCase()==="svg";function O6(e,t,o,s){Y1(e,t,void 0,s);for(const i in t.attrs)e.setAttribute(K1.has(i)?i:Ah(i),t.attrs[i])}function Q1(e,t,o){const s=Fh(e,t,o);for(const i in e)if(dt(e[i])||dt(t[i])){const l=Yr.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;s[l]=e[i]}return s}class L6 extends z1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ze}getBaseTargetFromProps(t,o){return t[o]}readValueFromInstance(t,o){if(Jr.has(o)){const s=A1(o);return s&&s.default||0}return o=K1.has(o)?o:Ah(o),t.getAttribute(o)}scrapeMotionValuesFromProps(t,o,s){return Q1(t,o,s)}build(t,o,s){G1(t,o,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(t,o,s,i){O6(t,o,s,i)}mount(t){this.isSVGTag=X1(t.tagName),super.mount(t)}}const F6=Oh.length;function Z1(e){if(!e)return;if(!e.isControllingVariants){const o=e.parent?Z1(e.parent)||{}:{};return e.props.initial!==void 0&&(o.initial=e.props.initial),o}const t={};for(let o=0;o<F6;o++){const s=Oh[o],i=e.props[s];(sa(i)||i===!1)&&(t[s]=i)}return t}function ew(e,t){if(!Array.isArray(t))return!1;const o=t.length;if(o!==e.length)return!1;for(let s=0;s<o;s++)if(t[s]!==e[s])return!1;return!0}const W6=[...Dh].reverse(),B6=Dh.length;function H6(e){return t=>Promise.all(t.map(({animation:o,options:s})=>GR(e,o,s)))}function U6(e){let t=H6(e),o=Jg(),s=!0;const i=f=>(m,y)=>{const v=Fr(e,y,f==="exit"?e.presenceContext?.custom:void 0);if(v){const{transition:S,transitionEnd:w,...R}=v;m={...m,...R,...w}}return m};function l(f){t=f(e)}function u(f){const{props:m}=e,y=Z1(e.parent)||{},v=[],S=new Set;let w={},R=1/0;for(let C=0;C<B6;C++){const E=W6[C],M=o[E],P=m[E]!==void 0?m[E]:y[E],D=sa(P),I=E===f?M.isActive:null;I===!1&&(R=C);let H=P===y[E]&&P!==m[E]&&D;if(H&&s&&e.manuallyAnimateOnMount&&(H=!1),M.protectedKeys={...w},!M.isActive&&I===null||!P&&!M.prevProp||Il(P)||typeof P=="boolean")continue;const z=z6(M.prevProp,P);let Y=z||E===f&&M.isActive&&!H&&D||C>R&&D,ie=!1;const le=Array.isArray(P)?P:[P];let fe=le.reduce(i(E),{});I===!1&&(fe={});const{prevResolvedValues:ee={}}=M,ge={...ee,...fe},K=X=>{Y=!0,S.has(X)&&(ie=!0,S.delete(X)),M.needsAnimating[X]=!0;const W=e.getValue(X);W&&(W.liveStyle=!1)};for(const X in ge){const W=fe[X],U=ee[X];if(w.hasOwnProperty(X))continue;let _=!1;Pd(W)&&Pd(U)?_=!ew(W,U):_=W!==U,_?W!=null?K(X):S.add(X):W!==void 0&&S.has(X)?K(X):M.protectedKeys[X]=!0}M.prevProp=P,M.prevResolvedValues=fe,M.isActive&&(w={...w,...fe}),s&&e.blockInitialAnimation&&(Y=!1);const ve=H&&z;Y&&(!ve||ie)&&v.push(...le.map(X=>{const W={type:E};if(typeof X=="string"&&s&&!ve&&e.manuallyAnimateOnMount&&e.parent){const{parent:U}=e,_=Fr(U,X);if(U.enteringChildren&&_){const{delayChildren:N}=_.transition||{};W.delay=S1(U.enteringChildren,e,N)}}return{animation:X,options:W}}))}if(S.size){const C={};if(typeof m.initial!="boolean"){const E=Fr(e,Array.isArray(m.initial)?m.initial[0]:m.initial);E&&E.transition&&(C.transition=E.transition)}S.forEach(E=>{const M=e.getBaseTarget(E),P=e.getValue(E);P&&(P.liveStyle=!0),C[E]=M??null}),v.push({animation:C})}let k=!!v.length;return s&&(m.initial===!1||m.initial===m.animate)&&!e.manuallyAnimateOnMount&&(k=!1),s=!1,k?t(v):Promise.resolve()}function d(f,m){if(o[f].isActive===m)return Promise.resolve();e.variantChildren?.forEach(v=>v.animationState?.setActive(f,m)),o[f].isActive=m;const y=u(f);for(const v in o)o[v].protectedKeys={};return y}return{animateChanges:u,setActive:d,setAnimateFunction:l,getState:()=>o,reset:()=>{o=Jg()}}}function z6(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!ew(t,e):!1}function Uo(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Jg(){return{animate:Uo(!0),whileInView:Uo(),whileHover:Uo(),whileTap:Uo(),whileDrag:Uo(),whileFocus:Uo(),exit:Uo()}}function Gg(e,t){e.min=t.min,e.max=t.max}function on(e,t){Gg(e.x,t.x),Gg(e.y,t.y)}function Kg(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}const tw=1e-4,V6=1-tw,_6=1+tw,nw=.01,q6=0-nw,$6=0+nw;function vt(e){return e.max-e.min}function Y6(e,t,o){return Math.abs(e-t)<=o}function Xg(e,t,o,s=.5){e.origin=s,e.originPoint=Ue(t.min,t.max,e.origin),e.scale=vt(o)/vt(t),e.translate=Ue(o.min,o.max,e.origin)-e.originPoint,(e.scale>=V6&&e.scale<=_6||isNaN(e.scale))&&(e.scale=1),(e.translate>=q6&&e.translate<=$6||isNaN(e.translate))&&(e.translate=0)}function $s(e,t,o,s){Xg(e.x,t.x,o.x,s?s.originX:void 0),Xg(e.y,t.y,o.y,s?s.originY:void 0)}function Qg(e,t,o){e.min=o.min+t.min,e.max=e.min+vt(t)}function J6(e,t,o){Qg(e.x,t.x,o.x),Qg(e.y,t.y,o.y)}function Zg(e,t,o){e.min=t.min-o.min,e.max=e.min+vt(t)}function pl(e,t,o){Zg(e.x,t.x,o.x),Zg(e.y,t.y,o.y)}function ey(e,t,o,s,i){return e-=t,e=hl(e,1/o,s),i!==void 0&&(e=hl(e,1/i,s)),e}function G6(e,t=0,o=1,s=.5,i,l=e,u=e){if(Cn.test(t)&&(t=parseFloat(t),t=Ue(u.min,u.max,t/100)-u.min),typeof t!="number")return;let d=Ue(l.min,l.max,s);e===l&&(d-=t),e.min=ey(e.min,t,o,d,i),e.max=ey(e.max,t,o,d,i)}function ty(e,t,[o,s,i],l,u){G6(e,t[o],t[s],t[i],t.scale,l,u)}const K6=["x","scaleX","originX"],X6=["y","scaleY","originY"];function ny(e,t,o,s){ty(e.x,t,K6,o?o.x:void 0,s?s.x:void 0),ty(e.y,t,X6,o?o.y:void 0,s?s.y:void 0)}function oy(e){return e.translate===0&&e.scale===1}function ow(e){return oy(e.x)&&oy(e.y)}function ry(e,t){return e.min===t.min&&e.max===t.max}function Q6(e,t){return ry(e.x,t.x)&&ry(e.y,t.y)}function sy(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function rw(e,t){return sy(e.x,t.x)&&sy(e.y,t.y)}function ay(e){return vt(e.x)/vt(e.y)}function iy(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function _t(e){return[e("x"),e("y")]}function Z6(e,t,o){let s="";const i=e.x.translate/t.x,l=e.y.translate/t.y,u=o?.z||0;if((i||l||u)&&(s=`translate3d(${i}px, ${l}px, ${u}px) `),(t.x!==1||t.y!==1)&&(s+=`scale(${1/t.x}, ${1/t.y}) `),o){const{transformPerspective:m,rotate:y,rotateX:v,rotateY:S,skewX:w,skewY:R}=o;m&&(s=`perspective(${m}px) ${s}`),y&&(s+=`rotate(${y}deg) `),v&&(s+=`rotateX(${v}deg) `),S&&(s+=`rotateY(${S}deg) `),w&&(s+=`skewX(${w}deg) `),R&&(s+=`skewY(${R}deg) `)}const d=e.x.scale*t.x,f=e.y.scale*t.y;return(d!==1||f!==1)&&(s+=`scale(${d}, ${f})`),s||"none"}const sw=["TopLeft","TopRight","BottomLeft","BottomRight"],eT=sw.length,ly=e=>typeof e=="string"?parseFloat(e):e,cy=e=>typeof e=="number"||te.test(e);function tT(e,t,o,s,i,l){i?(e.opacity=Ue(0,o.opacity??1,nT(s)),e.opacityExit=Ue(t.opacity??1,0,oT(s))):l&&(e.opacity=Ue(t.opacity??1,o.opacity??1,s));for(let u=0;u<eT;u++){const d=`border${sw[u]}Radius`;let f=uy(t,d),m=uy(o,d);if(f===void 0&&m===void 0)continue;f||(f=0),m||(m=0),f===0||m===0||cy(f)===cy(m)?(e[d]=Math.max(Ue(ly(f),ly(m),s),0),(Cn.test(m)||Cn.test(f))&&(e[d]+="%")):e[d]=m}(t.rotate||o.rotate)&&(e.rotate=Ue(t.rotate||0,o.rotate||0,s))}function uy(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const nT=aw(0,.5,Z0),oT=aw(.5,.95,$t);function aw(e,t,o){return s=>s<e?0:s>t?1:o(na(e,t,s))}function rT(e,t,o){const s=dt(e)?e:Ur(e);return s.start(Ph("",s,t,o)),s.animation}function aa(e,t,o,s={passive:!0}){return e.addEventListener(t,o,s),()=>e.removeEventListener(t,o)}const sT=(e,t)=>e.depth-t.depth;class aT{constructor(){this.children=[],this.isDirty=!1}add(t){dh(this.children,t),this.isDirty=!0}remove(t){hh(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(sT),this.isDirty=!1,this.children.forEach(t)}}function iT(e,t){const o=yt.now(),s=({timestamp:i})=>{const l=i-o;l>=t&&(Co(s),e(l-t))};return Le.setup(s,!0),()=>Co(s)}function Qi(e){return dt(e)?e.get():e}class lT{constructor(){this.members=[]}add(t){dh(this.members,t),t.scheduleRender()}remove(t){if(hh(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(t){const o=this.members.findIndex(i=>t===i);if(o===0)return!1;let s;for(let i=o;i>=0;i--){const l=this.members[i];if(l.isPresent!==!1){s=l;break}}return s?(this.promote(s),!0):!1}promote(t,o){const s=this.lead;if(t!==s&&(this.prevLead=s,this.lead=t,t.show(),s)){s.instance&&s.scheduleRender(),t.scheduleRender(),t.resumeFrom=s,o&&(t.resumeFrom.preserveOpacity=!0),s.snapshot&&(t.snapshot=s.snapshot,t.snapshot.latestValues=s.animationValues||s.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:o,resumingFrom:s}=t;o.onExitComplete&&o.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const Zi={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Bu=["","X","Y","Z"],cT=1e3;let uT=0;function Hu(e,t,o,s){const{latestValues:i}=t;i[e]&&(o[e]=i[e],t.setStaticValue(e,0),s&&(s[e]=0))}function iw(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const o=T1(t);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:i,layoutId:l}=e.options;window.MotionCancelOptimisedAnimation(o,"transform",Le,!(i||l))}const{parent:s}=e;s&&!s.hasCheckedOptimisedAppear&&iw(s)}function lw({attachResizeListener:e,defaultParent:t,measureScroll:o,checkIsScrollRoot:s,resetTransform:i}){return class{constructor(u={},d=t?.()){this.id=uT++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(pT),this.nodes.forEach(yT),this.nodes.forEach(vT),this.nodes.forEach(fT)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=d?d.root||d:this,this.path=d?[...d.path,d]:[],this.parent=d,this.depth=d?d.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new aT)}addEventListener(u,d){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new mh),this.eventHandlers.get(u).add(d)}notifyListeners(u,...d){const f=this.eventHandlers.get(u);f&&f.notify(...d)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=W1(u)&&!h6(u),this.instance=u;const{layoutId:d,layout:f,visualElement:m}=this.options;if(m&&!m.current&&m.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(f||d)&&(this.isLayoutDirty=!0),e){let y,v=0;const S=()=>this.root.updateBlockedByResize=!1;Le.read(()=>{v=window.innerWidth}),e(u,()=>{const w=window.innerWidth;w!==v&&(v=w,this.root.updateBlockedByResize=!0,y&&y(),y=iT(S,250),Zi.hasAnimatedSinceResize&&(Zi.hasAnimatedSinceResize=!1,this.nodes.forEach(py)))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&m&&(d||f)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:v,hasRelativeLayoutChanged:S,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const R=this.options.transition||m.getDefaultTransition()||kT,{onLayoutAnimationStart:k,onLayoutAnimationComplete:C}=m.getProps(),E=!this.targetLayout||!rw(this.targetLayout,w),M=!v&&S;if(this.options.layoutRoot||this.resumeFrom||M||v&&(E||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const P={...Eh(R,"layout"),onPlay:k,onComplete:C};(m.shouldReduceMotion||this.options.layoutRoot)&&(P.delay=0,P.type=!1),this.startAnimation(P),this.setAnimationOrigin(y,M)}else v||py(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Co(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(wT),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&iw(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const v=this.path[y];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:d,layout:f}=this.options;if(d===void 0&&!f)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(dy);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(hy);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(gT),this.nodes.forEach(dT),this.nodes.forEach(hT)):this.nodes.forEach(hy),this.clearAllSnapshots();const d=yt.now();at.delta=En(0,1e3/60,d-at.timestamp),at.timestamp=d,at.isProcessing=!0,Iu.update.process(at),Iu.preRender.process(at),Iu.render.process(at),at.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,jh.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(mT),this.sharedNodes.forEach(xT)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Le.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Le.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!vt(this.snapshot.measuredBox.x)&&!vt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Ze(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:d}=this.options;d&&d.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let d=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(d=!1),d&&this.instance){const f=s(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:f,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!i)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,d=this.projectionDelta&&!ow(this.projectionDelta),f=this.getTransformTemplate(),m=f?f(this.latestValues,""):void 0,y=m!==this.prevTransformTemplateValue;u&&this.instance&&(d||zo(this.latestValues)||y)&&(i(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const d=this.measurePageBox();let f=this.removeElementScroll(d);return u&&(f=this.removeTransform(f)),CT(f),{animationId:this.root.animationId,measuredBox:d,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:u}=this.options;if(!u)return Ze();const d=u.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(RT))){const{scroll:m}=this.root;m&&(Nr(d.x,m.offset.x),Nr(d.y,m.offset.y))}return d}removeElementScroll(u){const d=Ze();if(on(d,u),this.scroll?.wasRoot)return d;for(let f=0;f<this.path.length;f++){const m=this.path[f],{scroll:y,options:v}=m;m!==this.root&&y&&v.layoutScroll&&(y.wasRoot&&on(d,u),Nr(d.x,y.offset.x),Nr(d.y,y.offset.y))}return d}applyTransform(u,d=!1){const f=Ze();on(f,u);for(let m=0;m<this.path.length;m++){const y=this.path[m];!d&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Dr(f,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),zo(y.latestValues)&&Dr(f,y.latestValues)}return zo(this.latestValues)&&Dr(f,this.latestValues),f}removeTransform(u){const d=Ze();on(d,u);for(let f=0;f<this.path.length;f++){const m=this.path[f];if(!m.instance||!zo(m.latestValues))continue;Nd(m.latestValues)&&m.updateSnapshot();const y=Ze(),v=m.measurePageBox();on(y,v),ny(d,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,y)}return zo(this.latestValues)&&ny(d,this.latestValues),d}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==at.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const f=!!this.resumingFrom||this!==d;if(!(u||f&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:v}=this.options;if(!this.layout||!(y||v))return;this.resolvedRelativeTargetAt=at.timestamp;const S=this.getClosestProjectingParent();S&&this.linkedParentVersion!==S.layoutVersion&&!S.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(S&&S.layout?this.createRelativeTarget(S,this.layout.layoutBox,S.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ze(),this.targetWithTransforms=Ze()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),J6(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):on(this.target,this.layout.layoutBox),q1(this.target,this.targetDelta)):on(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?this.createRelativeTarget(S,this.target,S.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Nd(this.parent.latestValues)||_1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(u,d,f){this.relativeParent=u,this.linkedParentVersion=u.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ze(),this.relativeTargetOrigin=Ze(),pl(this.relativeTargetOrigin,d,f),on(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const u=this.getLead(),d=!!this.resumingFrom||this!==u;let f=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(f=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(f=!1),this.resolvedRelativeTargetAt===at.timestamp&&(f=!1),f)return;const{layout:m,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||y))return;on(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,S=this.treeScale.y;k6(this.layoutCorrected,this.treeScale,this.path,d),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=Ze());const{target:w}=u;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Kg(this.prevProjectionDelta.x,this.projectionDelta.x),Kg(this.prevProjectionDelta.y,this.projectionDelta.y)),$s(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==S||!iy(this.projectionDelta.x,this.prevProjectionDelta.x)||!iy(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){if(this.options.visualElement?.scheduleRender(),u){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=jr(),this.projectionDelta=jr(),this.projectionDeltaWithTransform=jr()}setAnimationOrigin(u,d=!1){const f=this.snapshot,m=f?f.latestValues:{},y={...this.latestValues},v=jr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!d;const S=Ze(),w=f?f.source:void 0,R=this.layout?this.layout.source:void 0,k=w!==R,C=this.getStack(),E=!C||C.members.length<=1,M=!!(k&&!E&&this.options.crossfade===!0&&!this.path.some(ST));this.animationProgress=0;let P;this.mixTargetDelta=D=>{const I=D/1e3;fy(v.x,u.x,I),fy(v.y,u.y,I),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(pl(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox),bT(this.relativeTarget,this.relativeTargetOrigin,S,I),P&&Q6(this.relativeTarget,P)&&(this.isProjectionDirty=!1),P||(P=Ze()),on(P,this.relativeTarget)),k&&(this.animationValues=y,tT(y,m,this.latestValues,I,M,E)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=I},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Co(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Le.update(()=>{Zi.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Ur(0)),this.currentAnimation=rT(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:d=>{this.mixTargetDelta(d),u.onUpdate&&u.onUpdate(d)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(cT),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:d,target:f,layout:m,latestValues:y}=u;if(!(!d||!f||!m)){if(this!==u&&this.layout&&m&&cw(this.options.animationType,this.layout.layoutBox,m.layoutBox)){f=this.target||Ze();const v=vt(this.layout.layoutBox.x);f.x.min=u.target.x.min,f.x.max=f.x.min+v;const S=vt(this.layout.layoutBox.y);f.y.min=u.target.y.min,f.y.max=f.y.min+S}on(d,f),Dr(d,y),$s(this.projectionDeltaWithTransform,this.layoutCorrected,d,y)}}registerSharedNode(u,d){this.sharedNodes.has(u)||this.sharedNodes.set(u,new lT),this.sharedNodes.get(u).add(d);const m=d.options.initialPromotionConfig;d.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(d):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){const{layoutId:u}=this.options;return u?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:u}=this.options;return u?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:d,preserveFollowOpacity:f}={}){const m=this.getStack();m&&m.promote(this,f),u&&(this.projectionDelta=void 0,this.needsReset=!0),d&&this.setOptions({transition:d})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let d=!1;const{latestValues:f}=u;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(d=!0),!d)return;const m={};f.z&&Hu("z",u,m,this.animationValues);for(let y=0;y<Bu.length;y++)Hu(`rotate${Bu[y]}`,u,m,this.animationValues),Hu(`skew${Bu[y]}`,u,m,this.animationValues);u.render();for(const y in m)u.setStaticValue(y,m[y]),this.animationValues&&(this.animationValues[y]=m[y]);u.scheduleRender()}applyProjectionStyles(u,d){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const f=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=Qi(d?.pointerEvents)||"",u.transform=f?f(this.latestValues,""):"none";return}const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=Qi(d?.pointerEvents)||""),this.hasProjected&&!zo(this.latestValues)&&(u.transform=f?f({},""):"none",this.hasProjected=!1);return}u.visibility="";const y=m.animationValues||m.latestValues;this.applyTransformsToTarget();let v=Z6(this.projectionDeltaWithTransform,this.treeScale,y);f&&(v=f(y,v)),u.transform=v;const{x:S,y:w}=this.projectionDelta;u.transformOrigin=`${S.origin*100}% ${w.origin*100}% 0`,m.animationValues?u.opacity=m===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:u.opacity=m===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const R in Od){if(y[R]===void 0)continue;const{correct:k,applyTo:C,isCSSVariable:E}=Od[R],M=v==="none"?y[R]:k(y[R],m);if(C){const P=C.length;for(let D=0;D<P;D++)u[C[D]]=M}else E?this.options.visualElement.renderState.vars[R]=M:u[R]=M}this.options.layoutId&&(u.pointerEvents=m===this?Qi(d?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>u.currentAnimation?.stop()),this.root.nodes.forEach(dy),this.root.sharedNodes.clear()}}}function dT(e){e.updateLayout()}function hT(e){const t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:s}=e.layout,{animationType:i}=e.options,l=t.source!==e.layout.source;i==="size"?_t(y=>{const v=l?t.measuredBox[y]:t.layoutBox[y],S=vt(v);v.min=o[y].min,v.max=v.min+S}):cw(i,t.layoutBox,o)&&_t(y=>{const v=l?t.measuredBox[y]:t.layoutBox[y],S=vt(o[y]);v.max=v.min+S,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[y].max=e.relativeTarget[y].min+S)});const u=jr();$s(u,o,t.layoutBox);const d=jr();l?$s(d,e.applyTransform(s,!0),t.measuredBox):$s(d,o,t.layoutBox);const f=!ow(u);let m=!1;if(!e.resumeFrom){const y=e.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:v,layout:S}=y;if(v&&S){const w=Ze();pl(w,t.layoutBox,v.layoutBox);const R=Ze();pl(R,o,S.layoutBox),rw(w,R)||(m=!0),y.options.layoutRoot&&(e.relativeTarget=R,e.relativeTargetOrigin=w,e.relativeParent=y)}}}e.notifyListeners("didUpdate",{layout:o,snapshot:t,delta:d,layoutDelta:u,hasLayoutChanged:f,hasRelativeLayoutChanged:m})}else if(e.isLead()){const{onExitComplete:o}=e.options;o&&o()}e.options.transition=void 0}function pT(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function fT(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function mT(e){e.clearSnapshot()}function dy(e){e.clearMeasurements()}function hy(e){e.isLayoutDirty=!1}function gT(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function py(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function yT(e){e.resolveTargetDelta()}function vT(e){e.calcProjection()}function wT(e){e.resetSkewAndRotation()}function xT(e){e.removeLeadSnapshot()}function fy(e,t,o){e.translate=Ue(t.translate,0,o),e.scale=Ue(t.scale,1,o),e.origin=t.origin,e.originPoint=t.originPoint}function my(e,t,o,s){e.min=Ue(t.min,o.min,s),e.max=Ue(t.max,o.max,s)}function bT(e,t,o,s){my(e.x,t.x,o.x,s),my(e.y,t.y,o.y,s)}function ST(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const kT={duration:.45,ease:[.4,0,.1,1]},gy=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),yy=gy("applewebkit/")&&!gy("chrome/")?Math.round:$t;function vy(e){e.min=yy(e.min),e.max=yy(e.max)}function CT(e){vy(e.x),vy(e.y)}function cw(e,t,o){return e==="position"||e==="preserve-aspect"&&!Y6(ay(t),ay(o),.2)}function RT(e){return e!==e.root&&e.scroll?.wasRoot}const TT=lw({attachResizeListener:(e,t)=>aa(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Uu={current:void 0},uw=lw({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Uu.current){const e=new TT({});e.mount(window),e.setOptions({layoutScroll:!0}),Uu.current=e}return Uu.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),dw=x.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function ET(e=!0){const t=x.useContext(uh);if(t===null)return[!0,null];const{isPresent:o,onExitComplete:s,register:i}=t,l=x.useId();x.useEffect(()=>{if(e)return i(l)},[e]);const u=x.useCallback(()=>e&&s&&s(l),[l,s,e]);return!o&&s?[!1,u]:[!0]}const hw=x.createContext({strict:!1}),wy={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let xy=!1;function PT(){if(xy)return;const e={};for(const t in wy)e[t]={isEnabled:o=>wy[t].some(s=>!!o[s])};U1(e),xy=!0}function pw(){return PT(),w6()}function MT(e){const t=pw();for(const o in e)t[o]={...t[o],...e[o]};U1(t)}const AT=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function fl(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||AT.has(e)}let fw=e=>!fl(e);function IT(e){typeof e=="function"&&(fw=t=>t.startsWith("on")?!fl(t):e(t))}try{IT(require("@emotion/is-prop-valid").default)}catch{}function jT(e,t,o){const s={};for(const i in e)i==="values"&&typeof e.values=="object"||(fw(i)||o===!0&&fl(i)||!t&&!fl(i)||e.draggable&&i.startsWith("onDrag"))&&(s[i]=e[i]);return s}const Nl=x.createContext({});function NT(e,t){if(jl(e)){const{initial:o,animate:s}=e;return{initial:o===!1||sa(o)?o:void 0,animate:sa(s)?s:void 0}}return e.inherit!==!1?t:{}}function DT(e){const{initial:t,animate:o}=NT(e,x.useContext(Nl));return x.useMemo(()=>({initial:t,animate:o}),[by(t),by(o)])}function by(e){return Array.isArray(e)?e.join(" "):e}const Wh=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function mw(e,t,o){for(const s in t)!dt(t[s])&&!J1(s,o)&&(e[s]=t[s])}function OT({transformTemplate:e},t){return x.useMemo(()=>{const o=Wh();return Lh(o,t,e),Object.assign({},o.vars,o.style)},[t])}function LT(e,t){const o=e.style||{},s={};return mw(s,o,e),Object.assign(s,OT(e,t)),s}function FT(e,t){const o={},s=LT(e,t);return e.drag&&e.dragListener!==!1&&(o.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(o.tabIndex=0),o.style=s,o}const gw=()=>({...Wh(),attrs:{}});function WT(e,t,o,s){const i=x.useMemo(()=>{const l=gw();return G1(l,t,X1(s),e.transformTemplate,e.style),{...l.attrs,style:{...l.style}}},[t]);if(e.style){const l={};mw(l,e.style,e),i.style={...l,...i.style}}return i}const BT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Bh(e){return typeof e!="string"||e.includes("-")?!1:!!(BT.indexOf(e)>-1||/[A-Z]/u.test(e))}function HT(e,t,o,{latestValues:s},i,l=!1,u){const f=(u??Bh(e)?WT:FT)(t,s,i,e),m=jT(t,typeof e=="string",l),y=e!==x.Fragment?{...m,...f,ref:o}:{},{children:v}=t,S=x.useMemo(()=>dt(v)?v.get():v,[v]);return x.createElement(e,{...y,children:S})}function UT({scrapeMotionValuesFromProps:e,createRenderState:t},o,s,i){return{latestValues:zT(o,s,i,e),renderState:t()}}function zT(e,t,o,s){const i={},l=s(e,{});for(const S in l)i[S]=Qi(l[S]);let{initial:u,animate:d}=e;const f=jl(e),m=H1(e);t&&m&&!f&&e.inherit!==!1&&(u===void 0&&(u=t.initial),d===void 0&&(d=t.animate));let y=o?o.initial===!1:!1;y=y||u===!1;const v=y?d:u;if(v&&typeof v!="boolean"&&!Il(v)){const S=Array.isArray(v)?v:[v];for(let w=0;w<S.length;w++){const R=Mh(e,S[w]);if(R){const{transitionEnd:k,transition:C,...E}=R;for(const M in E){let P=E[M];if(Array.isArray(P)){const D=y?P.length-1:0;P=P[D]}P!==null&&(i[M]=P)}for(const M in k)i[M]=k[M]}}}return i}const yw=e=>(t,o)=>{const s=x.useContext(Nl),i=x.useContext(uh),l=()=>UT(e,t,s,i);return o?l():nC(l)},VT=yw({scrapeMotionValuesFromProps:Fh,createRenderState:Wh}),_T=yw({scrapeMotionValuesFromProps:Q1,createRenderState:gw}),qT=Symbol.for("motionComponentSymbol");function $T(e,t,o){const s=x.useRef(o);x.useInsertionEffect(()=>{s.current=o});const i=x.useRef(null);return x.useCallback(l=>{l&&e.onMount?.(l),t&&(l?t.mount(l):t.unmount());const u=s.current;if(typeof u=="function")if(l){const d=u(l);typeof d=="function"&&(i.current=d)}else i.current?(i.current(),i.current=null):u(l);else u&&(u.current=l)},[t])}const vw=x.createContext({});function zs(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function YT(e,t,o,s,i,l){const{visualElement:u}=x.useContext(Nl),d=x.useContext(hw),f=x.useContext(uh),m=x.useContext(dw).reducedMotion,y=x.useRef(null);s=s||d.renderer,!y.current&&s&&(y.current=s(e,{visualState:t,parent:u,props:o,presenceContext:f,blockInitialAnimation:f?f.initial===!1:!1,reducedMotionConfig:m,isSVG:l}));const v=y.current,S=x.useContext(vw);v&&!v.projection&&i&&(v.type==="html"||v.type==="svg")&&JT(y.current,o,i,S);const w=x.useRef(!1);x.useInsertionEffect(()=>{v&&w.current&&v.update(o,f)});const R=o[R1],k=x.useRef(!!R&&!window.MotionHandoffIsComplete?.(R)&&window.MotionHasOptimisedAnimation?.(R));return oC(()=>{v&&(w.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),v.scheduleRenderMicrotask(),k.current&&v.animationState&&v.animationState.animateChanges())}),x.useEffect(()=>{v&&(!k.current&&v.animationState&&v.animationState.animateChanges(),k.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(R)}),k.current=!1),v.enteringChildren=void 0)}),v}function JT(e,t,o,s){const{layoutId:i,layout:l,drag:u,dragConstraints:d,layoutScroll:f,layoutRoot:m,layoutCrossfade:y}=t;e.projection=new o(e.latestValues,t["data-framer-portal-id"]?void 0:ww(e.parent)),e.projection.setOptions({layoutId:i,layout:l,alwaysMeasureLayout:!!u||d&&zs(d),visualElement:e,animationType:typeof l=="string"?l:"both",initialPromotionConfig:s,crossfade:y,layoutScroll:f,layoutRoot:m})}function ww(e){if(e)return e.options.allowProjection!==!1?e.projection:ww(e.parent)}function zu(e,{forwardMotionProps:t=!1,type:o}={},s,i){s&&MT(s);const l=o?o==="svg":Bh(e),u=l?_T:VT;function d(m,y){let v;const S={...x.useContext(dw),...m,layoutId:GT(m)},{isStatic:w}=S,R=DT(m),k=u(m,w);if(!w&&z0){KT();const C=XT(S);v=C.MeasureLayout,R.visualElement=YT(e,k,S,i,C.ProjectionNode,l)}return p.jsxs(Nl.Provider,{value:R,children:[v&&R.visualElement?p.jsx(v,{visualElement:R.visualElement,...S}):null,HT(e,m,$T(k,R.visualElement,y),k,w,t,l)]})}d.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const f=x.forwardRef(d);return f[qT]=e,f}function GT({layoutId:e}){const t=x.useContext(U0).id;return t&&e!==void 0?t+"-"+e:e}function KT(e,t){x.useContext(hw).strict}function XT(e){const t=pw(),{drag:o,layout:s}=t;if(!o&&!s)return{};const i={...o,...s};return{MeasureLayout:o?.isEnabled(e)||s?.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function QT(e,t){if(typeof Proxy>"u")return zu;const o=new Map,s=(l,u)=>zu(l,u,e,t),i=(l,u)=>s(l,u);return new Proxy(i,{get:(l,u)=>u==="create"?s:(o.has(u)||o.set(u,zu(u,void 0,e,t)),o.get(u))})}const ZT=(e,t)=>t.isSVG??Bh(e)?new L6(t):new A6(t,{allowProjection:e!==x.Fragment});class e8 extends To{constructor(t){super(t),t.animationState||(t.animationState=U6(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Il(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:o}=this.node.prevProps||{};t!==o&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let t8=0;class n8 extends To{constructor(){super(...arguments),this.id=t8++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:o}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===s)return;const i=this.node.animationState.setActive("exit",!t);o&&!t&&i.then(()=>{o(this.id)})}mount(){const{register:t,onExitComplete:o}=this.node.presenceContext||{};o&&o(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const o8={animation:{Feature:e8},exit:{Feature:n8}};function ga(e){return{point:{x:e.pageX,y:e.pageY}}}const r8=e=>t=>Nh(t)&&e(t,ga(t));function Ys(e,t,o,s){return aa(e,t,r8(o),s)}const xw=({current:e})=>e?e.ownerDocument.defaultView:null,Sy=(e,t)=>Math.abs(e-t);function s8(e,t){const o=Sy(e.x,t.x),s=Sy(e.y,t.y);return Math.sqrt(o**2+s**2)}const ky=new Set(["auto","scroll"]);class bw{constructor(t,o,{transformPagePoint:s,contextWindow:i=window,dragSnapToOrigin:l=!1,distanceThreshold:u=3,element:d}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=w=>{this.handleScroll(w.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=_u(this.lastMoveEventInfo,this.history),R=this.startEvent!==null,k=s8(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!R&&!k)return;const{point:C}=w,{timestamp:E}=at;this.history.push({...C,timestamp:E});const{onStart:M,onMove:P}=this.handlers;R||(M&&M(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),P&&P(this.lastMoveEvent,w)},this.handlePointerMove=(w,R)=>{this.lastMoveEvent=w,this.lastMoveEventInfo=Vu(R,this.transformPagePoint),Le.update(this.updatePoint,!0)},this.handlePointerUp=(w,R)=>{this.end();const{onEnd:k,onSessionEnd:C,resumeAnimation:E}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&E&&E(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const M=_u(w.type==="pointercancel"?this.lastMoveEventInfo:Vu(R,this.transformPagePoint),this.history);this.startEvent&&k&&k(w,M),C&&C(w,M)},!Nh(t))return;this.dragSnapToOrigin=l,this.handlers=o,this.transformPagePoint=s,this.distanceThreshold=u,this.contextWindow=i||window;const f=ga(t),m=Vu(f,this.transformPagePoint),{point:y}=m,{timestamp:v}=at;this.history=[{...y,timestamp:v}];const{onSessionStart:S}=o;S&&S(t,_u(m,this.history)),this.removeListeners=pa(Ys(this.contextWindow,"pointermove",this.handlePointerMove),Ys(this.contextWindow,"pointerup",this.handlePointerUp),Ys(this.contextWindow,"pointercancel",this.handlePointerUp)),d&&this.startScrollTracking(d)}startScrollTracking(t){let o=t.parentElement;for(;o;){const s=getComputedStyle(o);(ky.has(s.overflowX)||ky.has(s.overflowY))&&this.scrollPositions.set(o,{x:o.scrollLeft,y:o.scrollTop}),o=o.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const o=this.scrollPositions.get(t);if(!o)return;const s=t===window,i=s?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},l={x:i.x-o.x,y:i.y-o.y};l.x===0&&l.y===0||(s?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=l.x,this.lastMoveEventInfo.point.y+=l.y):this.history.length>0&&(this.history[0].x-=l.x,this.history[0].y-=l.y),this.scrollPositions.set(t,i),Le.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Co(this.updatePoint)}}function Vu(e,t){return t?{point:t(e.point)}:e}function Cy(e,t){return{x:e.x-t.x,y:e.y-t.y}}function _u({point:e},t){return{point:e,delta:Cy(e,Sw(t)),offset:Cy(e,a8(t)),velocity:i8(t,.1)}}function a8(e){return e[0]}function Sw(e){return e[e.length-1]}function i8(e,t){if(e.length<2)return{x:0,y:0};let o=e.length-1,s=null;const i=Sw(e);for(;o>=0&&(s=e[o],!(i.timestamp-s.timestamp>Hn(t)));)o--;if(!s)return{x:0,y:0};const l=qt(i.timestamp-s.timestamp);if(l===0)return{x:0,y:0};const u={x:(i.x-s.x)/l,y:(i.y-s.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function l8(e,{min:t,max:o},s){return t!==void 0&&e<t?e=s?Ue(t,e,s.min):Math.max(e,t):o!==void 0&&e>o&&(e=s?Ue(o,e,s.max):Math.min(e,o)),e}function Ry(e,t,o){return{min:t!==void 0?e.min+t:void 0,max:o!==void 0?e.max+o-(e.max-e.min):void 0}}function c8(e,{top:t,left:o,bottom:s,right:i}){return{x:Ry(e.x,o,i),y:Ry(e.y,t,s)}}function Ty(e,t){let o=t.min-e.min,s=t.max-e.max;return t.max-t.min<e.max-e.min&&([o,s]=[s,o]),{min:o,max:s}}function u8(e,t){return{x:Ty(e.x,t.x),y:Ty(e.y,t.y)}}function d8(e,t){let o=.5;const s=vt(e),i=vt(t);return i>s?o=na(t.min,t.max-s,e.min):s>i&&(o=na(e.min,e.max-i,t.min)),En(0,1,o)}function h8(e,t){const o={};return t.min!==void 0&&(o.min=t.min-e.min),t.max!==void 0&&(o.max=t.max-e.min),o}const Ld=.35;function p8(e=Ld){return e===!1?e=0:e===!0&&(e=Ld),{x:Ey(e,"left","right"),y:Ey(e,"top","bottom")}}function Ey(e,t,o){return{min:Py(e,t),max:Py(e,o)}}function Py(e,t){return typeof e=="number"?e:e[t]||0}const f8=new WeakMap;class m8{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ze(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:o=!1,distanceThreshold:s}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const l=v=>{o?(this.stopAnimation(),this.snapToCursor(ga(v).point)):this.pauseAnimation()},u=(v,S)=>{this.stopAnimation();const{drag:w,dragPropagation:R,onDragStart:k}=this.getProps();if(w&&!R&&(this.openDragLock&&this.openDragLock(),this.openDragLock=i6(w),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=S,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),_t(E=>{let M=this.getAxisMotionValue(E).get()||0;if(Cn.test(M)){const{projection:P}=this.visualElement;if(P&&P.layout){const D=P.layout.layoutBox[E];D&&(M=vt(D)*(parseFloat(M)/100))}}this.originPoint[E]=M}),k&&Le.postRender(()=>k(v,S)),Md(this.visualElement,"transform");const{animationState:C}=this.visualElement;C&&C.setActive("whileDrag",!0)},d=(v,S)=>{this.latestPointerEvent=v,this.latestPanInfo=S;const{dragPropagation:w,dragDirectionLock:R,onDirectionLock:k,onDrag:C}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:E}=S;if(R&&this.currentDirection===null){this.currentDirection=g8(E),this.currentDirection!==null&&k&&k(this.currentDirection);return}this.updateAxis("x",S.point,E),this.updateAxis("y",S.point,E),this.visualElement.render(),C&&C(v,S)},f=(v,S)=>{this.latestPointerEvent=v,this.latestPanInfo=S,this.stop(v,S),this.latestPointerEvent=null,this.latestPanInfo=null},m=()=>_t(v=>this.getAnimationState(v)==="paused"&&this.getAxisMotionValue(v).animation?.play()),{dragSnapToOrigin:y}=this.getProps();this.panSession=new bw(t,{onSessionStart:l,onStart:u,onMove:d,onSessionEnd:f,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:s,contextWindow:xw(this.visualElement),element:this.visualElement.current})}stop(t,o){const s=t||this.latestPointerEvent,i=o||this.latestPanInfo,l=this.isDragging;if(this.cancel(),!l||!i||!s)return;const{velocity:u}=i;this.startAnimation(u);const{onDragEnd:d}=this.getProps();d&&Le.postRender(()=>d(s,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:o}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}updateAxis(t,o,s){const{drag:i}=this.getProps();if(!s||!Bi(t,i,this.currentDirection))return;const l=this.getAxisMotionValue(t);let u=this.originPoint[t]+s[t];this.constraints&&this.constraints[t]&&(u=l8(u,this.constraints[t],this.elastic[t])),l.set(u)}resolveConstraints(){const{dragConstraints:t,dragElastic:o}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,i=this.constraints;t&&zs(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&s?this.constraints=c8(s.layoutBox,t):this.constraints=!1,this.elastic=p8(o),i!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&_t(l=>{this.constraints!==!1&&this.getAxisMotionValue(l)&&(this.constraints[l]=h8(s.layoutBox[l],this.constraints[l]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:o}=this.getProps();if(!t||!zs(t))return!1;const s=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const l=C6(s,i.root,this.visualElement.getTransformPagePoint());let u=u8(i.layout.layoutBox,l);if(o){const d=o(b6(u));this.hasMutatedConstraints=!!d,d&&(u=V1(d))}return u}startAnimation(t){const{drag:o,dragMomentum:s,dragElastic:i,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:d}=this.getProps(),f=this.constraints||{},m=_t(y=>{if(!Bi(y,o,this.currentDirection))return;let v=f&&f[y]||{};u&&(v={min:0,max:0});const S=i?200:1e6,w=i?40:1e7,R={type:"inertia",velocity:s?t[y]:0,bounceStiffness:S,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...l,...v};return this.startAxisValueAnimation(y,R)});return Promise.all(m).then(d)}startAxisValueAnimation(t,o){const s=this.getAxisMotionValue(t);return Md(this.visualElement,t),s.start(Ph(t,s,0,o,this.visualElement,!1))}stopAnimation(){_t(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){_t(t=>this.getAxisMotionValue(t).animation?.pause())}getAnimationState(t){return this.getAxisMotionValue(t).animation?.state}getAxisMotionValue(t){const o=`_drag${t.toUpperCase()}`,s=this.visualElement.getProps(),i=s[o];return i||this.visualElement.getValue(t,(s.initial?s.initial[t]:void 0)||0)}snapToCursor(t){_t(o=>{const{drag:s}=this.getProps();if(!Bi(o,s,this.currentDirection))return;const{projection:i}=this.visualElement,l=this.getAxisMotionValue(o);if(i&&i.layout){const{min:u,max:d}=i.layout.layoutBox[o],f=l.get()||0;l.set(t[o]-Ue(u,d,.5)+f)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:o}=this.getProps(),{projection:s}=this.visualElement;if(!zs(o)||!s||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};_t(u=>{const d=this.getAxisMotionValue(u);if(d&&this.constraints!==!1){const f=d.get();i[u]=d8({min:f,max:f},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),_t(u=>{if(!Bi(u,t,null))return;const d=this.getAxisMotionValue(u),{min:f,max:m}=this.constraints[u];d.set(Ue(f,m,i[u]))})}addListeners(){if(!this.visualElement.current)return;f8.set(this.visualElement,this);const t=this.visualElement.current,o=Ys(t,"pointerdown",f=>{const{drag:m,dragListener:y=!0}=this.getProps();m&&y&&!F1(f.target)&&this.start(f)}),s=()=>{const{dragConstraints:f}=this.getProps();zs(f)&&f.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,l=i.addEventListener("measure",s);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),Le.read(s);const u=aa(window,"resize",()=>this.scalePositionWithinConstraints()),d=i.addEventListener("didUpdate",(({delta:f,hasLayoutChanged:m})=>{this.isDragging&&m&&(_t(y=>{const v=this.getAxisMotionValue(y);v&&(this.originPoint[y]+=f[y].translate,v.set(v.get()+f[y].translate))}),this.visualElement.render())}));return()=>{u(),o(),l(),d&&d()}}getProps(){const t=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:s=!1,dragPropagation:i=!1,dragConstraints:l=!1,dragElastic:u=Ld,dragMomentum:d=!0}=t;return{...t,drag:o,dragDirectionLock:s,dragPropagation:i,dragConstraints:l,dragElastic:u,dragMomentum:d}}}function Bi(e,t,o){return(t===!0||t===e)&&(o===null||o===e)}function g8(e,t=10){let o=null;return Math.abs(e.y)>t?o="y":Math.abs(e.x)>t&&(o="x"),o}class y8 extends To{constructor(t){super(t),this.removeGroupControls=$t,this.removeListeners=$t,this.controls=new m8(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||$t}update(){const{dragControls:t}=this.node.getProps(),{dragControls:o}=this.node.prevProps||{};t!==o&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners()}}const My=e=>(t,o)=>{e&&Le.postRender(()=>e(t,o))};class v8 extends To{constructor(){super(...arguments),this.removePointerDownListener=$t}onPointerDown(t){this.session=new bw(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:xw(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:o,onPan:s,onPanEnd:i}=this.node.getProps();return{onSessionStart:My(t),onStart:My(o),onMove:s,onEnd:(l,u)=>{delete this.session,i&&Le.postRender(()=>i(l,u))}}}mount(){this.removePointerDownListener=Ys(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let qu=!1;class w8 extends x.Component{componentDidMount(){const{visualElement:t,layoutGroup:o,switchLayoutGroup:s,layoutId:i}=this.props,{projection:l}=t;l&&(o.group&&o.group.add(l),s&&s.register&&i&&s.register(l),qu&&l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),Zi.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:o,visualElement:s,drag:i,isPresent:l}=this.props,{projection:u}=s;return u&&(u.isPresent=l,qu=!0,i||t.layoutDependency!==o||o===void 0||t.isPresent!==l?u.willUpdate():this.safeToRemove(),t.isPresent!==l&&(l?u.promote():u.relegate()||Le.postRender(()=>{const d=u.getStack();(!d||!d.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),jh.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:o,switchLayoutGroup:s}=this.props,{projection:i}=t;qu=!0,i&&(i.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(i),s&&s.deregister&&s.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function kw(e){const[t,o]=ET(),s=x.useContext(U0);return p.jsx(w8,{...e,layoutGroup:s,switchLayoutGroup:x.useContext(vw),isPresent:t,safeToRemove:o})}const x8={pan:{Feature:v8},drag:{Feature:y8,ProjectionNode:uw,MeasureLayout:kw}};function Ay(e,t,o){const{props:s}=e;e.animationState&&s.whileHover&&e.animationState.setActive("whileHover",o==="Start");const i="onHover"+o,l=s[i];l&&Le.postRender(()=>l(t,ga(t)))}class b8 extends To{mount(){const{current:t}=this.node;t&&(this.unmount=l6(t,(o,s)=>(Ay(this.node,s,"Start"),i=>Ay(this.node,i,"End"))))}unmount(){}}class S8 extends To{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=pa(aa(this.node.current,"focus",()=>this.onFocus()),aa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Iy(e,t,o){const{props:s}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&s.whileTap&&e.animationState.setActive("whileTap",o==="Start");const i="onTap"+(o==="End"?"":o),l=s[i];l&&Le.postRender(()=>l(t,ga(t)))}class k8 extends To{mount(){const{current:t}=this.node;t&&(this.unmount=d6(t,(o,s)=>(Iy(this.node,s,"Start"),(i,{success:l})=>Iy(this.node,i,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Fd=new WeakMap,$u=new WeakMap,C8=e=>{const t=Fd.get(e.target);t&&t(e)},R8=e=>{e.forEach(C8)};function T8({root:e,...t}){const o=e||document;$u.has(o)||$u.set(o,{});const s=$u.get(o),i=JSON.stringify(t);return s[i]||(s[i]=new IntersectionObserver(R8,{root:e,...t})),s[i]}function E8(e,t,o){const s=T8(t);return Fd.set(e,o),s.observe(e),()=>{Fd.delete(e),s.unobserve(e)}}const P8={some:0,all:1};class M8 extends To{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:o,margin:s,amount:i="some",once:l}=t,u={root:o?o.current:void 0,rootMargin:s,threshold:typeof i=="number"?i:P8[i]},d=f=>{const{isIntersecting:m}=f;if(this.isInView===m||(this.isInView=m,l&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:y,onViewportLeave:v}=this.node.getProps(),S=m?y:v;S&&S(f)};return E8(this.node.current,u,d)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:o}=this.node;["amount","margin","root"].some(A8(t,o))&&this.startObserver()}unmount(){}}function A8({viewport:e={}},{viewport:t={}}={}){return o=>e[o]!==t[o]}const I8={inView:{Feature:M8},tap:{Feature:k8},focus:{Feature:S8},hover:{Feature:b8}},j8={layout:{ProjectionNode:uw,MeasureLayout:kw}},N8={...o8,...I8,...x8,...j8},we=QT(N8,ZT),D8={some:0,all:1};function O8(e,t,{root:o,margin:s,amount:i="some"}={}){const l=j1(e),u=new WeakMap,d=m=>{m.forEach(y=>{const v=u.get(y.target);if(y.isIntersecting!==!!v)if(y.isIntersecting){const S=t(y.target,y);typeof S=="function"?u.set(y.target,S):f.unobserve(y.target)}else typeof v=="function"&&(v(y),u.delete(y.target))})},f=new IntersectionObserver(d,{root:o,rootMargin:s,threshold:typeof i=="number"?i:D8[i]});return l.forEach(m=>f.observe(m)),()=>f.disconnect()}function Qo(e,{root:t,margin:o,amount:s,once:i=!1,initial:l=!1}={}){const[u,d]=x.useState(l);return x.useEffect(()=>{if(!e.current||i&&u)return;const f=()=>(d(!0),i?void 0:()=>d(!1)),m={root:t&&t.current||void 0,margin:o,amount:s};return O8(e.current,f,m)},[t,e,o,i,s]),u}const L8=Bv("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",hero:"bg-gradient-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",heroOutline:"border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground shadow-md hover:shadow-lg",gradient:"bg-gradient-accent text-white shadow-accent hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",glass:"glass text-foreground hover:bg-white/90 shadow-md hover:shadow-lg"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-12 px-6 text-base",xl:"h-14 px-8 text-lg",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),qn=x.forwardRef(({className:e,variant:t,size:o,asChild:s=!1,...i},l)=>{const u=s?h4:"button";return p.jsx(u,{className:Pn(L8({variant:t,size:o,className:e})),ref:l,...i})});qn.displayName="Button";const Cw="/portfolio/assets/sslogo-CcghngKK.png",jy=[{to:"/",label:"Home"},{to:"/#about",label:"About"},{to:"/#expertise",label:"Expertise"},{to:"/#techstack",label:"Tech Stack"},{to:"/#experience",label:"Experience"},{to:"/#projects",label:"Projects"},{to:"/#contact",label:"Contact"}],Hh=()=>{const[e,t]=x.useState(!1),[o,s]=x.useState(!1),i=sv();x.useEffect(()=>{const u=()=>t(window.scrollY>50);return window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)},[]);const l=()=>{const u=document.querySelector("#contact");u?u.scrollIntoView({behavior:"smooth"}):(i("/"),setTimeout(()=>{const d=document.querySelector("#contact");d&&d.scrollIntoView({behavior:"smooth"})},100)),s(!1)};return p.jsxs(we.header,{initial:{y:-100},animate:{y:0},transition:{duration:.6},className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${e?"glass shadow-md":"bg-transparent"}`,children:[p.jsxs("nav",{className:"container mx-auto px-4 h-20 flex items-center justify-between",children:[p.jsxs(Vo,{to:"/",className:"flex items-center gap-2",children:[p.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center",children:p.jsx("img",{src:Cw,alt:"Logo",className:"p-2"})}),p.jsx("span",{className:"font-bold text-xl text-foreground",children:"SRINUBABU SARA"})]}),p.jsxs("div",{className:"hidden lg:flex items-center gap-8",children:[jy.map(u=>p.jsx(Vo,{to:u.to,className:"text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",children:u.label},u.to)),p.jsx(qn,{variant:"hero",size:"default",onClick:l,children:"Hire Me"})]}),p.jsx("button",{className:"lg:hidden p-2",onClick:()=>s(!o),"aria-label":"Toggle menu",children:o?p.jsx(da,{className:"w-6 h-6 text-foreground"}):p.jsx(vS,{className:"w-6 h-6 text-foreground"})})]}),o&&p.jsx(we.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:"lg:hidden glass border-t border-border",children:p.jsxs("div",{className:"container mx-auto px-4 py-6 space-y-4",children:[jy.map(u=>p.jsx(Vo,{to:u.to,onClick:()=>s(!1),className:"block text-lg font-medium text-foreground hover:text-primary transition-colors",children:u.label},u.to)),p.jsx(qn,{variant:"hero",size:"lg",className:"w-full mt-4",onClick:l,children:"Hire Me"})]})})]})};var Yu="focusScope.autoFocusOnMount",Ju="focusScope.autoFocusOnUnmount",Ny={bubbles:!1,cancelable:!0},F8="FocusScope",Rw=x.forwardRef((e,t)=>{const{loop:o=!1,trapped:s=!1,onMountAutoFocus:i,onUnmountAutoFocus:l,...u}=e,[d,f]=x.useState(null),m=Rn(i),y=Rn(l),v=x.useRef(null),S=wt(t,k=>f(k)),w=x.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;x.useEffect(()=>{if(s){let k=function(P){if(w.paused||!d)return;const D=P.target;d.contains(D)?v.current=D:vo(v.current,{select:!0})},C=function(P){if(w.paused||!d)return;const D=P.relatedTarget;D!==null&&(d.contains(D)||vo(v.current,{select:!0}))},E=function(P){if(document.activeElement===document.body)for(const I of P)I.removedNodes.length>0&&vo(d)};document.addEventListener("focusin",k),document.addEventListener("focusout",C);const M=new MutationObserver(E);return d&&M.observe(d,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",k),document.removeEventListener("focusout",C),M.disconnect()}}},[s,d,w.paused]),x.useEffect(()=>{if(d){Oy.add(w);const k=document.activeElement;if(!d.contains(k)){const E=new CustomEvent(Yu,Ny);d.addEventListener(Yu,m),d.dispatchEvent(E),E.defaultPrevented||(W8(V8(Tw(d)),{select:!0}),document.activeElement===k&&vo(d))}return()=>{d.removeEventListener(Yu,m),setTimeout(()=>{const E=new CustomEvent(Ju,Ny);d.addEventListener(Ju,y),d.dispatchEvent(E),E.defaultPrevented||vo(k??document.body,{select:!0}),d.removeEventListener(Ju,y),Oy.remove(w)},0)}}},[d,m,y,w]);const R=x.useCallback(k=>{if(!o&&!s||w.paused)return;const C=k.key==="Tab"&&!k.altKey&&!k.ctrlKey&&!k.metaKey,E=document.activeElement;if(C&&E){const M=k.currentTarget,[P,D]=B8(M);P&&D?!k.shiftKey&&E===D?(k.preventDefault(),o&&vo(P,{select:!0})):k.shiftKey&&E===P&&(k.preventDefault(),o&&vo(D,{select:!0})):E===M&&k.preventDefault()}},[o,s,w.paused]);return p.jsx(Ke.div,{tabIndex:-1,...u,ref:S,onKeyDown:R})});Rw.displayName=F8;function W8(e,{select:t=!1}={}){const o=document.activeElement;for(const s of e)if(vo(s,{select:t}),document.activeElement!==o)return}function B8(e){const t=Tw(e),o=Dy(t,e),s=Dy(t.reverse(),e);return[o,s]}function Tw(e){const t=[],o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:s=>{const i=s.tagName==="INPUT"&&s.type==="hidden";return s.disabled||s.hidden||i?NodeFilter.FILTER_SKIP:s.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;o.nextNode();)t.push(o.currentNode);return t}function Dy(e,t){for(const o of e)if(!H8(o,{upTo:t}))return o}function H8(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function U8(e){return e instanceof HTMLInputElement&&"select"in e}function vo(e,{select:t=!1}={}){if(e&&e.focus){const o=document.activeElement;e.focus({preventScroll:!0}),e!==o&&U8(e)&&t&&e.select()}}var Oy=z8();function z8(){let e=[];return{add(t){const o=e[0];t!==o&&o?.pause(),e=Ly(e,t),e.unshift(t)},remove(t){e=Ly(e,t),e[0]?.resume()}}}function Ly(e,t){const o=[...e],s=o.indexOf(t);return s!==-1&&o.splice(s,1),o}function V8(e){return e.filter(t=>t.tagName!=="A")}var Gu=0;function _8(){x.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Fy()),document.body.insertAdjacentElement("beforeend",e[1]??Fy()),Gu++,()=>{Gu===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),Gu--}},[])}function Fy(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var bn=function(){return bn=Object.assign||function(t){for(var o,s=1,i=arguments.length;s<i;s++){o=arguments[s];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(t[l]=o[l])}return t},bn.apply(this,arguments)};function Ew(e,t){var o={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(o[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(e);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(o[s[i]]=e[s[i]]);return o}function q8(e,t,o){if(o||arguments.length===2)for(var s=0,i=t.length,l;s<i;s++)(l||!(s in t))&&(l||(l=Array.prototype.slice.call(t,0,s)),l[s]=t[s]);return e.concat(l||Array.prototype.slice.call(t))}var el="right-scroll-bar-position",tl="width-before-scroll-bar",$8="with-scroll-bars-hidden",Y8="--removed-body-scroll-bar-size";function Ku(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function J8(e,t){var o=x.useState(function(){return{value:e,callback:t,facade:{get current(){return o.value},set current(s){var i=o.value;i!==s&&(o.value=s,o.callback(s,i))}}}})[0];return o.callback=t,o.facade}var G8=typeof window<"u"?x.useLayoutEffect:x.useEffect,Wy=new WeakMap;function K8(e,t){var o=J8(null,function(s){return e.forEach(function(i){return Ku(i,s)})});return G8(function(){var s=Wy.get(o);if(s){var i=new Set(s),l=new Set(e),u=o.current;i.forEach(function(d){l.has(d)||Ku(d,null)}),l.forEach(function(d){i.has(d)||Ku(d,u)})}Wy.set(o,e)},[e]),o}function X8(e){return e}function Q8(e,t){t===void 0&&(t=X8);var o=[],s=!1,i={read:function(){if(s)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return o.length?o[o.length-1]:e},useMedium:function(l){var u=t(l,s);return o.push(u),function(){o=o.filter(function(d){return d!==u})}},assignSyncMedium:function(l){for(s=!0;o.length;){var u=o;o=[],u.forEach(l)}o={push:function(d){return l(d)},filter:function(){return o}}},assignMedium:function(l){s=!0;var u=[];if(o.length){var d=o;o=[],d.forEach(l),u=o}var f=function(){var y=u;u=[],y.forEach(l)},m=function(){return Promise.resolve().then(f)};m(),o={push:function(y){u.push(y),m()},filter:function(y){return u=u.filter(y),o}}}};return i}function Z8(e){e===void 0&&(e={});var t=Q8(null);return t.options=bn({async:!0,ssr:!1},e),t}var Pw=function(e){var t=e.sideCar,o=Ew(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var s=t.read();if(!s)throw new Error("Sidecar medium not found");return x.createElement(s,bn({},o))};Pw.isSideCarExport=!0;function eE(e,t){return e.useMedium(t),Pw}var Mw=Z8(),Xu=function(){},Dl=x.forwardRef(function(e,t){var o=x.useRef(null),s=x.useState({onScrollCapture:Xu,onWheelCapture:Xu,onTouchMoveCapture:Xu}),i=s[0],l=s[1],u=e.forwardProps,d=e.children,f=e.className,m=e.removeScrollBar,y=e.enabled,v=e.shards,S=e.sideCar,w=e.noRelative,R=e.noIsolation,k=e.inert,C=e.allowPinchZoom,E=e.as,M=E===void 0?"div":E,P=e.gapMode,D=Ew(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),I=S,H=K8([o,t]),z=bn(bn({},D),i);return x.createElement(x.Fragment,null,y&&x.createElement(I,{sideCar:Mw,removeScrollBar:m,shards:v,noRelative:w,noIsolation:R,inert:k,setCallbacks:l,allowPinchZoom:!!C,lockRef:o,gapMode:P}),u?x.cloneElement(x.Children.only(d),bn(bn({},z),{ref:H})):x.createElement(M,bn({},z,{className:f,ref:H}),d))});Dl.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Dl.classNames={fullWidth:tl,zeroRight:el};var tE=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function nE(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=tE();return t&&e.setAttribute("nonce",t),e}function oE(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function rE(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var sE=function(){var e=0,t=null;return{add:function(o){e==0&&(t=nE())&&(oE(t,o),rE(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},aE=function(){var e=sE();return function(t,o){x.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&o])}},Aw=function(){var e=aE(),t=function(o){var s=o.styles,i=o.dynamic;return e(s,i),null};return t},iE={left:0,top:0,right:0,gap:0},Qu=function(e){return parseInt(e||"",10)||0},lE=function(e){var t=window.getComputedStyle(document.body),o=t[e==="padding"?"paddingLeft":"marginLeft"],s=t[e==="padding"?"paddingTop":"marginTop"],i=t[e==="padding"?"paddingRight":"marginRight"];return[Qu(o),Qu(s),Qu(i)]},cE=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return iE;var t=lE(e),o=document.documentElement.clientWidth,s=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,s-o+t[2]-t[0])}},uE=Aw(),Wr="data-scroll-locked",dE=function(e,t,o,s){var i=e.left,l=e.top,u=e.right,d=e.gap;return o===void 0&&(o="margin"),`
  .`.concat($8,` {
   overflow: hidden `).concat(s,`;
   padding-right: `).concat(d,"px ").concat(s,`;
  }
  body[`).concat(Wr,`] {
    overflow: hidden `).concat(s,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(s,";"),o==="margin"&&`
    padding-left: `.concat(i,`px;
    padding-top: `).concat(l,`px;
    padding-right: `).concat(u,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(d,"px ").concat(s,`;
    `),o==="padding"&&"padding-right: ".concat(d,"px ").concat(s,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(el,` {
    right: `).concat(d,"px ").concat(s,`;
  }
  
  .`).concat(tl,` {
    margin-right: `).concat(d,"px ").concat(s,`;
  }
  
  .`).concat(el," .").concat(el,` {
    right: 0 `).concat(s,`;
  }
  
  .`).concat(tl," .").concat(tl,` {
    margin-right: 0 `).concat(s,`;
  }
  
  body[`).concat(Wr,`] {
    `).concat(Y8,": ").concat(d,`px;
  }
`)},By=function(){var e=parseInt(document.body.getAttribute(Wr)||"0",10);return isFinite(e)?e:0},hE=function(){x.useEffect(function(){return document.body.setAttribute(Wr,(By()+1).toString()),function(){var e=By()-1;e<=0?document.body.removeAttribute(Wr):document.body.setAttribute(Wr,e.toString())}},[])},pE=function(e){var t=e.noRelative,o=e.noImportant,s=e.gapMode,i=s===void 0?"margin":s;hE();var l=x.useMemo(function(){return cE(i)},[i]);return x.createElement(uE,{styles:dE(l,!t,i,o?"":"!important")})},Wd=!1;if(typeof window<"u")try{var Hi=Object.defineProperty({},"passive",{get:function(){return Wd=!0,!0}});window.addEventListener("test",Hi,Hi),window.removeEventListener("test",Hi,Hi)}catch{Wd=!1}var Er=Wd?{passive:!1}:!1,fE=function(e){return e.tagName==="TEXTAREA"},Iw=function(e,t){if(!(e instanceof Element))return!1;var o=window.getComputedStyle(e);return o[t]!=="hidden"&&!(o.overflowY===o.overflowX&&!fE(e)&&o[t]==="visible")},mE=function(e){return Iw(e,"overflowY")},gE=function(e){return Iw(e,"overflowX")},Hy=function(e,t){var o=t.ownerDocument,s=t;do{typeof ShadowRoot<"u"&&s instanceof ShadowRoot&&(s=s.host);var i=jw(e,s);if(i){var l=Nw(e,s),u=l[1],d=l[2];if(u>d)return!0}s=s.parentNode}while(s&&s!==o.body);return!1},yE=function(e){var t=e.scrollTop,o=e.scrollHeight,s=e.clientHeight;return[t,o,s]},vE=function(e){var t=e.scrollLeft,o=e.scrollWidth,s=e.clientWidth;return[t,o,s]},jw=function(e,t){return e==="v"?mE(t):gE(t)},Nw=function(e,t){return e==="v"?yE(t):vE(t)},wE=function(e,t){return e==="h"&&t==="rtl"?-1:1},xE=function(e,t,o,s,i){var l=wE(e,window.getComputedStyle(t).direction),u=l*s,d=o.target,f=t.contains(d),m=!1,y=u>0,v=0,S=0;do{if(!d)break;var w=Nw(e,d),R=w[0],k=w[1],C=w[2],E=k-C-l*R;(R||E)&&jw(e,d)&&(v+=E,S+=R);var M=d.parentNode;d=M&&M.nodeType===Node.DOCUMENT_FRAGMENT_NODE?M.host:M}while(!f&&d!==document.body||f&&(t.contains(d)||t===d));return(y&&Math.abs(v)<1||!y&&Math.abs(S)<1)&&(m=!0),m},Ui=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Uy=function(e){return[e.deltaX,e.deltaY]},zy=function(e){return e&&"current"in e?e.current:e},bE=function(e,t){return e[0]===t[0]&&e[1]===t[1]},SE=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},kE=0,Pr=[];function CE(e){var t=x.useRef([]),o=x.useRef([0,0]),s=x.useRef(),i=x.useState(kE++)[0],l=x.useState(Aw)[0],u=x.useRef(e);x.useEffect(function(){u.current=e},[e]),x.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(i));var k=q8([e.lockRef.current],(e.shards||[]).map(zy),!0).filter(Boolean);return k.forEach(function(C){return C.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),k.forEach(function(C){return C.classList.remove("allow-interactivity-".concat(i))})}}},[e.inert,e.lockRef.current,e.shards]);var d=x.useCallback(function(k,C){if("touches"in k&&k.touches.length===2||k.type==="wheel"&&k.ctrlKey)return!u.current.allowPinchZoom;var E=Ui(k),M=o.current,P="deltaX"in k?k.deltaX:M[0]-E[0],D="deltaY"in k?k.deltaY:M[1]-E[1],I,H=k.target,z=Math.abs(P)>Math.abs(D)?"h":"v";if("touches"in k&&z==="h"&&H.type==="range")return!1;var Y=Hy(z,H);if(!Y)return!0;if(Y?I=z:(I=z==="v"?"h":"v",Y=Hy(z,H)),!Y)return!1;if(!s.current&&"changedTouches"in k&&(P||D)&&(s.current=I),!I)return!0;var ie=s.current||I;return xE(ie,C,k,ie==="h"?P:D)},[]),f=x.useCallback(function(k){var C=k;if(!(!Pr.length||Pr[Pr.length-1]!==l)){var E="deltaY"in C?Uy(C):Ui(C),M=t.current.filter(function(I){return I.name===C.type&&(I.target===C.target||C.target===I.shadowParent)&&bE(I.delta,E)})[0];if(M&&M.should){C.cancelable&&C.preventDefault();return}if(!M){var P=(u.current.shards||[]).map(zy).filter(Boolean).filter(function(I){return I.contains(C.target)}),D=P.length>0?d(C,P[0]):!u.current.noIsolation;D&&C.cancelable&&C.preventDefault()}}},[]),m=x.useCallback(function(k,C,E,M){var P={name:k,delta:C,target:E,should:M,shadowParent:RE(E)};t.current.push(P),setTimeout(function(){t.current=t.current.filter(function(D){return D!==P})},1)},[]),y=x.useCallback(function(k){o.current=Ui(k),s.current=void 0},[]),v=x.useCallback(function(k){m(k.type,Uy(k),k.target,d(k,e.lockRef.current))},[]),S=x.useCallback(function(k){m(k.type,Ui(k),k.target,d(k,e.lockRef.current))},[]);x.useEffect(function(){return Pr.push(l),e.setCallbacks({onScrollCapture:v,onWheelCapture:v,onTouchMoveCapture:S}),document.addEventListener("wheel",f,Er),document.addEventListener("touchmove",f,Er),document.addEventListener("touchstart",y,Er),function(){Pr=Pr.filter(function(k){return k!==l}),document.removeEventListener("wheel",f,Er),document.removeEventListener("touchmove",f,Er),document.removeEventListener("touchstart",y,Er)}},[]);var w=e.removeScrollBar,R=e.inert;return x.createElement(x.Fragment,null,R?x.createElement(l,{styles:SE(i)}):null,w?x.createElement(pE,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function RE(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const TE=eE(Mw,CE);var Dw=x.forwardRef(function(e,t){return x.createElement(Dl,bn({},e,{ref:t,sideCar:TE}))});Dw.classNames=Dl.classNames;var EE=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Mr=new WeakMap,zi=new WeakMap,Vi={},Zu=0,Ow=function(e){return e&&(e.host||Ow(e.parentNode))},PE=function(e,t){return t.map(function(o){if(e.contains(o))return o;var s=Ow(o);return s&&e.contains(s)?s:(console.error("aria-hidden",o,"in not contained inside",e,". Doing nothing"),null)}).filter(function(o){return!!o})},ME=function(e,t,o,s){var i=PE(t,Array.isArray(e)?e:[e]);Vi[o]||(Vi[o]=new WeakMap);var l=Vi[o],u=[],d=new Set,f=new Set(i),m=function(v){!v||d.has(v)||(d.add(v),m(v.parentNode))};i.forEach(m);var y=function(v){!v||f.has(v)||Array.prototype.forEach.call(v.children,function(S){if(d.has(S))y(S);else try{var w=S.getAttribute(s),R=w!==null&&w!=="false",k=(Mr.get(S)||0)+1,C=(l.get(S)||0)+1;Mr.set(S,k),l.set(S,C),u.push(S),k===1&&R&&zi.set(S,!0),C===1&&S.setAttribute(o,"true"),R||S.setAttribute(s,"true")}catch(E){console.error("aria-hidden: cannot operate on ",S,E)}})};return y(t),d.clear(),Zu++,function(){u.forEach(function(v){var S=Mr.get(v)-1,w=l.get(v)-1;Mr.set(v,S),l.set(v,w),S||(zi.has(v)||v.removeAttribute(s),zi.delete(v)),w||v.removeAttribute(o)}),Zu--,Zu||(Mr=new WeakMap,Mr=new WeakMap,zi=new WeakMap,Vi={})}},AE=function(e,t,o){o===void 0&&(o="data-aria-hidden");var s=Array.from(Array.isArray(e)?e:[e]),i=EE(e);return i?(s.push.apply(s,Array.from(i.querySelectorAll("[aria-live]"))),ME(s,i,o,"aria-hidden")):function(){return null}},Ol="Dialog",[Lw]=ca(Ol),[IE,cn]=Lw(Ol),Fw=e=>{const{__scopeDialog:t,children:o,open:s,defaultOpen:i,onOpenChange:l,modal:u=!0}=e,d=x.useRef(null),f=x.useRef(null),[m,y]=yv({prop:s,defaultProp:i??!1,onChange:l,caller:Ol});return p.jsx(IE,{scope:t,triggerRef:d,contentRef:f,contentId:Eu(),titleId:Eu(),descriptionId:Eu(),open:m,onOpenChange:y,onOpenToggle:x.useCallback(()=>y(v=>!v),[y]),modal:u,children:o})};Fw.displayName=Ol;var Ww="DialogTrigger",jE=x.forwardRef((e,t)=>{const{__scopeDialog:o,...s}=e,i=cn(Ww,o),l=wt(t,i.triggerRef);return p.jsx(Ke.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":Vh(i.open),...s,ref:l,onClick:We(e.onClick,i.onOpenToggle)})});jE.displayName=Ww;var Uh="DialogPortal",[NE,Bw]=Lw(Uh,{forceMount:void 0}),Hw=e=>{const{__scopeDialog:t,forceMount:o,children:s,container:i}=e,l=cn(Uh,t);return p.jsx(NE,{scope:t,forceMount:o,children:x.Children.map(s,u=>p.jsx(zr,{present:o||l.open,children:p.jsx(qd,{asChild:!0,container:i,children:u})}))})};Hw.displayName=Uh;var ml="DialogOverlay",Uw=x.forwardRef((e,t)=>{const o=Bw(ml,e.__scopeDialog),{forceMount:s=o.forceMount,...i}=e,l=cn(ml,e.__scopeDialog);return l.modal?p.jsx(zr,{present:s||l.open,children:p.jsx(OE,{...i,ref:t})}):null});Uw.displayName=ml;var DE=Xs("DialogOverlay.RemoveScroll"),OE=x.forwardRef((e,t)=>{const{__scopeDialog:o,...s}=e,i=cn(ml,o);return p.jsx(Dw,{as:DE,allowPinchZoom:!0,shards:[i.contentRef],children:p.jsx(Ke.div,{"data-state":Vh(i.open),...s,ref:t,style:{pointerEvents:"auto",...s.style}})})}),Jo="DialogContent",zw=x.forwardRef((e,t)=>{const o=Bw(Jo,e.__scopeDialog),{forceMount:s=o.forceMount,...i}=e,l=cn(Jo,e.__scopeDialog);return p.jsx(zr,{present:s||l.open,children:l.modal?p.jsx(LE,{...i,ref:t}):p.jsx(FE,{...i,ref:t})})});zw.displayName=Jo;var LE=x.forwardRef((e,t)=>{const o=cn(Jo,e.__scopeDialog),s=x.useRef(null),i=wt(t,o.contentRef,s);return x.useEffect(()=>{const l=s.current;if(l)return AE(l)},[]),p.jsx(Vw,{...e,ref:i,trapFocus:o.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:We(e.onCloseAutoFocus,l=>{l.preventDefault(),o.triggerRef.current?.focus()}),onPointerDownOutside:We(e.onPointerDownOutside,l=>{const u=l.detail.originalEvent,d=u.button===0&&u.ctrlKey===!0;(u.button===2||d)&&l.preventDefault()}),onFocusOutside:We(e.onFocusOutside,l=>l.preventDefault())})}),FE=x.forwardRef((e,t)=>{const o=cn(Jo,e.__scopeDialog),s=x.useRef(!1),i=x.useRef(!1);return p.jsx(Vw,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:l=>{e.onCloseAutoFocus?.(l),l.defaultPrevented||(s.current||o.triggerRef.current?.focus(),l.preventDefault()),s.current=!1,i.current=!1},onInteractOutside:l=>{e.onInteractOutside?.(l),l.defaultPrevented||(s.current=!0,l.detail.originalEvent.type==="pointerdown"&&(i.current=!0));const u=l.target;o.triggerRef.current?.contains(u)&&l.preventDefault(),l.detail.originalEvent.type==="focusin"&&i.current&&l.preventDefault()}})}),Vw=x.forwardRef((e,t)=>{const{__scopeDialog:o,trapFocus:s,onOpenAutoFocus:i,onCloseAutoFocus:l,...u}=e,d=cn(Jo,o),f=x.useRef(null),m=wt(t,f);return _8(),p.jsxs(p.Fragment,{children:[p.jsx(Rw,{asChild:!0,loop:!0,trapped:s,onMountAutoFocus:i,onUnmountAutoFocus:l,children:p.jsx(bl,{role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":Vh(d.open),...u,ref:m,onDismiss:()=>d.onOpenChange(!1)})}),p.jsxs(p.Fragment,{children:[p.jsx(WE,{titleId:d.titleId}),p.jsx(HE,{contentRef:f,descriptionId:d.descriptionId})]})]})}),zh="DialogTitle",_w=x.forwardRef((e,t)=>{const{__scopeDialog:o,...s}=e,i=cn(zh,o);return p.jsx(Ke.h2,{id:i.titleId,...s,ref:t})});_w.displayName=zh;var qw="DialogDescription",$w=x.forwardRef((e,t)=>{const{__scopeDialog:o,...s}=e,i=cn(qw,o);return p.jsx(Ke.p,{id:i.descriptionId,...s,ref:t})});$w.displayName=qw;var Yw="DialogClose",Jw=x.forwardRef((e,t)=>{const{__scopeDialog:o,...s}=e,i=cn(Yw,o);return p.jsx(Ke.button,{type:"button",...s,ref:t,onClick:We(e.onClick,()=>i.onOpenChange(!1))})});Jw.displayName=Yw;function Vh(e){return e?"open":"closed"}var Gw="DialogTitleWarning",[g7,Kw]=u4(Gw,{contentName:Jo,titleName:zh,docsSlug:"dialog"}),WE=({titleId:e})=>{const t=Kw(Gw),o=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return x.useEffect(()=>{e&&(document.getElementById(e)||console.error(o))},[o,e]),null},BE="DialogDescriptionWarning",HE=({contentRef:e,descriptionId:t})=>{const s=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Kw(BE).contentName}}.`;return x.useEffect(()=>{const i=e.current?.getAttribute("aria-describedby");t&&i&&(document.getElementById(t)||console.warn(s))},[s,e,t]),null},UE=Fw,zE=Hw,VE=Uw,_E=zw,qE=_w,$E=$w,YE=Jw;const Vy=["Learning Management System (LMS)","SensuQ","Event Management System","HRMS for TMDCL","Digital Health Services","Pharmacy Council of India","Supply Chain Management","Paperless office management","dAkademy","eLearning","Sakal Jobs","Digiks","Track and Trace","ITArctica","TS Raj Bhavan","Chancellor Connects of Alumni","AIIMS BiBi-Nagar","NIPER Hyderabad","JNTU Hyderabad","Center for Data Governance","Sports Authority of Telangana State","Panchayat Raj","Aarogya Lakshmi","Vidyawaan"],JE=()=>{const[e,t]=x.useState(!1);return p.jsxs("section",{className:"relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero",children:[p.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[p.jsx("div",{className:"absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-float"}),p.jsx("div",{className:"absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-accent/10 to-purple-accent/10 rounded-full blur-3xl animate-float",style:{animationDelay:"2s"}}),p.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"}),p.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"})]}),p.jsx("div",{className:"container relative z-10 px-4 py-20",children:p.jsxs(we.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},className:"text-center max-w-5xl mx-auto",children:[p.jsxs(we.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.2},className:"inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8",children:[p.jsx("span",{className:"w-2 h-2 rounded-full bg-gradient-accent animate-pulse"}),p.jsx("span",{className:"text-sm font-medium text-muted-foreground",children:"Innovative Solutions, Seamless Experiences"})]}),p.jsxs(we.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.3},className:"text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6",children:[p.jsx("span",{className:"text-foreground",children:"Senior Software Developer"}),p.jsx("br",{}),p.jsx("span",{className:"text-gradient",children:"& AI Workflow Designer "})]}),p.jsx(we.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.5},className:"text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed",children:"10+ Years of Experience in Full Stack Development, MERN Stack, Java Spring Boot & Generative AI Integration"}),p.jsx(we.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},className:"text-lg text-slate-muted mb-10 max-w-3xl mx-auto",children:"Specializing in designing and delivering scalable enterprise solutions that combine AI-driven intelligence with exceptional, user-centric interfaces"}),p.jsxs(we.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.7},className:"flex flex-col sm:flex-row gap-4 justify-center items-center",children:[p.jsxs(qn,{variant:"hero",size:"xl",className:"group",onClick:()=>t(!0),children:["View Projects",p.jsx(Ji,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform"})]}),p.jsxs(qn,{variant:"heroOutline",size:"xl",children:[p.jsx(mS,{className:"w-5 h-5"}),"Download Resume"]})]}),p.jsx(we.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.9},className:"grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto",children:[{value:"10+",label:"Years of Hands-on Development Experience"},{value:"50+",label:"Projects Designed, Built, and Deployed"},{value:"20+",label:"Enterprise Clients Collaborated With"},{value:"100%",label:"Client Satisfaction Through Quality Delivery"}].map((o,s)=>p.jsxs("div",{className:"glass-card rounded-2xl p-6 text-center",children:[p.jsx("div",{className:"text-3xl md:text-4xl font-bold text-gradient mb-1",children:o.value}),p.jsx("div",{className:"text-sm text-muted-foreground",children:o.label})]},s))})]})}),p.jsx(GE,{isOpen:e,setIsOpen:t}),p.jsx(we.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.2,duration:.8},className:"absolute bottom-8 left-1/2 -translate-x-1/2",children:p.jsx("div",{className:"w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center p-2",children:p.jsx(we.div,{animate:{y:[0,8,0]},transition:{repeat:1/0,duration:1.5},className:"w-1.5 h-1.5 rounded-full bg-primary"})})})]})},GE=({isOpen:e,setIsOpen:t})=>p.jsx(UE,{open:e,onOpenChange:t,children:p.jsx(zE,{children:p.jsx(VE,{className:"fixed inset-0 z-[100] bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4",children:p.jsx(_E,{asChild:!0,children:p.jsxs("div",{className:`
                relative w-full max-w-5xl max-h-[90vh]
                rounded-3xl bg-white border border-slate-200
                shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]
                flex flex-col overflow-hidden focus:outline-none
              `,children:[p.jsxs("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:[p.jsx("div",{className:"absolute -top-20 -left-20 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl"}),p.jsx("div",{className:"absolute -bottom-20 -right-20 w-80 h-80 bg-purple-100/50 rounded-full blur-3xl"})]}),p.jsxs("div",{className:"flex items-start justify-between px-6 py-5 border-b border-slate-100 bg-white/80 backdrop-blur-md",children:[p.jsxs("div",{children:[p.jsx(qE,{className:"text-2xl font-bold text-slate-900",children:"Project Portfolio"}),p.jsx($E,{className:"text-sm font-medium text-blue-600 uppercase tracking-wider mt-1",children:"Enterprise & Government Solutions"})]}),p.jsx(YE,{asChild:!0,children:p.jsx("button",{className:"p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-red-50 hover:text-red-500 transition-colors","aria-label":"Close",children:p.jsx(da,{className:"w-6 h-6"})})})]}),p.jsx("div",{className:"flex-1 overflow-y-auto px-6 py-6 custom-scrollbar bg-slate-50/30",children:p.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:Vy.map((o,s)=>p.jsxs("div",{className:`
                        group flex items-center gap-4 p-4
                        rounded-2xl border border-slate-200
                        bg-white hover:border-blue-400
                        hover:shadow-md transition-all duration-300
                      `,children:[p.jsx("div",{className:`
                        w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm
                        ${s%3===0?"bg-gradient-to-br from-blue-500 to-cyan-400":s%3===1?"bg-gradient-to-br from-indigo-500 to-purple-500":"bg-gradient-to-br from-emerald-500 to-teal-400"}
                      `,children:s%3===0?p.jsx(aS,{className:"w-6 h-6"}):s%3===1?p.jsx(zv,{className:"w-6 h-6"}):p.jsx(qv,{className:"w-6 h-6"})}),p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsx("h4",{className:"text-slate-900 font-bold truncate group-hover:text-blue-700 transition-colors",children:o}),p.jsx("p",{className:"text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-0.5",children:"Enterprise Implementation"})]}),p.jsx(_v,{className:"w-4 h-4 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:text-blue-500 transition-all"})]},o))})}),p.jsxs("div",{className:"px-8 py-4 border-t border-slate-100 bg-white flex items-center justify-between",children:[p.jsxs("p",{className:"text-xs font-semibold text-slate-500 italic",children:["Total ",Vy.length," Systems Cataloged"]}),p.jsxs("div",{className:"flex gap-1.5",children:[p.jsx("div",{className:"w-2 h-2 rounded-full bg-blue-400 animate-pulse"}),p.jsx("div",{className:"w-2 h-2 rounded-full bg-slate-200"}),p.jsx("div",{className:"w-2 h-2 rounded-full bg-slate-200"})]})]})]})})})})}),KE=()=>{const e=x.useRef(null),t=Qo(e,{once:!0,margin:"-100px"}),o=["10+ years of hands-on full-stack development experience","On-site client engagements in Saudi Arabia","AI & LLM workflow design specialist","Modern frontend & backend architecture expert"];return p.jsxs("section",{id:"about",className:"py-24 bg-background relative overflow-hidden",children:[p.jsx("div",{className:"absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/5 to-cyan-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"}),p.jsx("div",{className:"container px-4",ref:e,children:p.jsxs("div",{className:"grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto",children:[p.jsx(we.div,{initial:{opacity:0,x:-50},animate:t?{opacity:1,x:0}:{},transition:{duration:.8,ease:"easeOut"},className:"relative",children:p.jsxs("div",{className:"relative aspect-square max-w-md mx-auto flex items-center justify-center",children:[p.jsx(we.div,{animate:{rotate:360},transition:{duration:25,repeat:1/0,ease:"linear"},className:"absolute inset-0 rounded-full border-2 border-dashed border-indigo-200/50"}),p.jsx("div",{className:"absolute top-10 left-10 w-32 h-32 bg-blue-400/20 blur-[60px] rounded-full animate-pulse"}),p.jsx("div",{className:"absolute bottom-10 right-10 w-32 h-32 bg-purple-400/20 blur-[60px] rounded-full animate-pulse delay-2000"}),p.jsx(we.div,{animate:{scale:[1,1.1,1],opacity:[.25,.5,.25]},transition:{duration:6,repeat:1/0,ease:"easeInOut"},className:"absolute inset-12 rounded-full bg-gradient-to-tr from-blue-100/20 to-purple-100/20 border border-white/50"}),p.jsxs(we.div,{whileHover:{scale:1.05},className:`\r
        relative z-20\r
        w-56 h-56        /* mobile */\r
        sm:w-80 sm:h-80 /* desktop */\r
        rounded-full\r
        bg-white\r
        shadow-[0_20px_50px_rgba(31,38,135,0.15)]\r
        flex items-center justify-center\r
        border-[6px] border-white\r
        overflow-hidden\r
      `,children:[p.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500"}),p.jsxs("div",{className:"relative z-30 text-center text-white",children:[p.jsxs(we.div,{initial:{scale:0},animate:t?{scale:1}:{},transition:{type:"spring",stiffness:120,delay:.4},className:"text-5xl sm:text-7xl font-black tracking-tight",children:["10",p.jsx("span",{className:"text-2xl sm:text-3xl text-cyan-300",children:"+"})]}),p.jsx("div",{className:"text-[10px] uppercase tracking-[0.35em] opacity-70 mt-1",children:"Years of"}),p.jsx("div",{className:"text-lg sm:text-xl font-extrabold",children:"Excellence"})]}),p.jsx(we.div,{animate:{x:[-150,450]},transition:{duration:3,repeat:1/0,repeatDelay:4},className:"absolute top-0 left-0 w-24 h-full bg-white/20 skew-x-[25deg] blur-sm"})]}),p.jsxs(we.div,{animate:{y:[-8,8,-8]},transition:{repeat:1/0,duration:4,ease:"easeInOut"},className:`\r
        absolute z-[60]\r
        top-2 right-2\r
        sm:top-6 sm:-right-6\r
        bg-white/95 backdrop-blur-md\r
        rounded-2xl px-4 py-2\r
        shadow-lg flex items-center gap-3\r
        border border-orange-100\r
      `,children:[p.jsxs("div",{className:"flex flex-col gap-0.5",children:[p.jsx("div",{className:"w-4 h-1 bg-[#FF9933] rounded-full"}),p.jsx("div",{className:"w-4 h-1 bg-[#138808] rounded-full"})]}),p.jsx(Xd,{className:"w-4 h-4 text-orange-600"}),p.jsx("span",{className:"text-sm font-bold text-slate-800",children:"India"})]}),p.jsxs(we.div,{animate:{y:[8,-8,8]},transition:{repeat:1/0,duration:4,ease:"easeInOut"},className:`\r
        absolute z-[60]\r
        bottom-2 left-2\r
        sm:bottom-6 sm:-left-6\r
        bg-white/95 backdrop-blur-md\r
        rounded-2xl px-4 py-2\r
        shadow-lg flex items-center gap-2\r
        border border-green-100\r
      `,children:[p.jsx("div",{className:"bg-emerald-600 p-1.5 rounded-lg",children:p.jsx(Kd,{className:"w-4 h-4 text-white"})}),p.jsx("span",{className:"text-sm font-bold text-slate-800 whitespace-nowrap",children:"Saudi Arabia"})]})]})}),p.jsxs(we.div,{initial:{opacity:0,x:50},animate:t?{opacity:1,x:0}:{},transition:{duration:.8,ease:"easeOut",delay:.2},children:[p.jsx("span",{className:"inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4",children:"About Me"}),p.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-6 text-foreground",children:["Building Enterprise Solutions with"," ",p.jsx("span",{className:"text-gradient",children:"AI-Powered"})," Intelligence"]}),p.jsx("p",{className:"text-lg text-muted-foreground mb-6 leading-relaxed text-justify",children:"Senior Software Developer with 10+ years of hands-on experience in full-stack development and enterprise-grade applications. Experienced in on-site client engagements in Saudi Arabia, delivering robust, scalable, and secure systems."}),p.jsx("p",{className:"text-lg text-muted-foreground mb-8 leading-relaxed text-justify",children:"Specialized in AI & LLM workflow design, modern frontend engineering, and backend system architecture. I transform complex business requirements into elegant, performant solutions."}),p.jsx("div",{className:"space-y-4",children:o.map((s,i)=>p.jsxs(we.div,{initial:{opacity:0,x:20},animate:t?{opacity:1,x:0}:{},transition:{duration:.5,delay:.4+i*.1},className:"flex items-center gap-3",children:[p.jsx(hS,{className:"w-5 h-5 text-primary flex-shrink-0"}),p.jsx("span",{className:"text-foreground font-medium",children:s})]},i))})]})]})})]})},XE=[{icon:lS,title:"AI & LLM Workflow Integration",items:["LLM prompt engineering & system instruction design","Generative AI API integration","AI-powered assistants, chatbots, auto-document generation","Intelligent UI automation using AI workflows"]},{icon:Kd,title:"Full Stack Development",items:["React.js with reusable components & hooks","Node.js, Express.js, Java Spring Boot","RESTful API design & secure middleware handling","End-to-end client–server architecture"]},{icon:xS,title:"Frontend & UI/UX Engineering",items:["Responsive UI with React, Tailwind, Bootstrap","Advanced form UX, validations & accessibility","Design consistency, UI bug fixing & optimization","Figma & Photoshop driven UI workflows"]},{icon:Vv,title:"Backend & Database Systems",items:["Modular backend service architecture","MongoDB, PostgreSQL & SQL schema design","Multi-layer validation & performance optimization","Secure data management & API security"]}],QE=()=>{const e=x.useRef(null),t=Qo(e,{once:!0,margin:"-100px"});return p.jsxs("section",{id:"expertise",className:"py-24 bg-secondary/30 relative overflow-hidden",children:[p.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.03)_0%,transparent_70%)]"}),p.jsxs("div",{className:"container px-4 relative z-10",ref:e,children:[p.jsxs(we.div,{initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{},transition:{duration:.6},className:"text-center mb-16",children:[p.jsx("span",{className:"inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4",children:"Core Expertise"}),p.jsxs("h2",{className:"text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6",children:["Specialized in Modern"," ",p.jsx("span",{className:"text-gradient",children:"Technologies"})]}),p.jsx("p",{className:"text-lg text-muted-foreground max-w-2xl mx-auto",children:"A comprehensive skill set spanning AI integration, full-stack development, and enterprise-grade architecture."})]}),p.jsx("div",{className:"grid md:grid-cols-2 gap-8 max-w-5xl mx-auto",children:XE.map((o,s)=>p.jsx(we.div,{initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{},transition:{duration:.6,delay:s*.1},className:"group",children:p.jsxs("div",{className:"h-full glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1",children:[p.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[p.jsx("div",{className:"w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300",children:p.jsx(o.icon,{className:"w-7 h-7 text-primary-foreground"})}),p.jsx("h3",{className:"text-xl font-bold text-foreground pt-3",children:o.title})]}),p.jsx("ul",{className:"space-y-3",children:o.items.map((i,l)=>p.jsxs("li",{className:"flex items-start gap-3",children:[p.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-gradient-accent mt-2.5 flex-shrink-0"}),p.jsx("span",{className:"text-muted-foreground leading-relaxed",children:i})]},l))})]})},s))})]})]})};var Xw={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},_y=J.createContext&&J.createContext(Xw),ZE=["attr","size","title"];function eP(e,t){if(e==null)return{};var o=tP(e,t),s,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)s=l[i],!(t.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}function tP(e,t){if(e==null)return{};var o={};for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){if(t.indexOf(s)>=0)continue;o[s]=e[s]}return o}function gl(){return gl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s])}return e},gl.apply(this,arguments)}function qy(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),o.push.apply(o,s)}return o}function yl(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?qy(Object(o),!0).forEach(function(s){nP(e,s,o[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):qy(Object(o)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(o,s))})}return e}function nP(e,t,o){return t=oP(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function oP(e){var t=rP(e,"string");return typeof t=="symbol"?t:t+""}function rP(e,t){if(typeof e!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var s=o.call(e,t);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Qw(e){return e&&e.map((t,o)=>J.createElement(t.tag,yl({key:o},t.attr),Qw(t.child)))}function Ae(e){return t=>J.createElement(sP,gl({attr:yl({},e.attr)},t),Qw(e.child))}function sP(e){var t=o=>{var{attr:s,size:i,title:l}=e,u=eP(e,ZE),d=i||o.size||"1em",f;return o.className&&(f=o.className),e.className&&(f=(f?f+" ":"")+e.className),J.createElement("svg",gl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,s,u,{className:f,style:yl(yl({color:e.color||o.color},o.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&J.createElement("title",null,l),e.children)};return _y!==void 0?J.createElement(_y.Consumer,null,o=>t(o)):t(Xw)}function aP(e){return Ae({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"},child:[]}]})(e)}function $y(e){return Ae({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"},child:[]}]})(e)}function iP(e){return Ae({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"},child:[]}]})(e)}function Yy(e){return Ae({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"},child:[]}]})(e)}function Bd(e){return Ae({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"},child:[]}]})(e)}function _h(e){return Ae({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(e)}function lP(e){return Ae({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(e)}function cP(e){return Ae({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z"},child:[]}]})(e)}function uP(e){return Ae({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(e)}function Zw(e){return Ae({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"},child:[]}]})(e)}function dP(e){return Ae({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"},child:[]}]})(e)}function hP(e){return Ae({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function pP(e){return Ae({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"},child:[]}]})(e)}function qh(e){return Ae({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"},child:[]}]})(e)}function fP(e){return Ae({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01-.2-.01-.34 0-.41.01v3.36c.14.01.27.02.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03.01-.31-.07-.62-.23-.89-.17-.26-.41-.46-.7-.57zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.899c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.391 11.65c-.399.56-.959.98-1.609 1.22-.68.25-1.43.34-2.25.34-.24 0-.4 0-.5-.01s-.24-.01-.43-.01v3.209c.01.07-.04.131-.11.141H5.52c-.08 0-.12-.041-.12-.131V6.42c0-.07.03-.11.1-.11.17 0 .33 0 .56-.01.24-.01.49-.01.76-.02s.56-.01.87-.02c.31-.01.61-.01.91-.01.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.149.42.229.85.229 1.3.001.86-.199 1.57-.6 2.13zm7.091 3.89c-.28.4-.671.709-1.12.891-.49.209-1.09.318-1.811.318-.459 0-.91-.039-1.359-.129-.35-.061-.7-.17-1.02-.32-.07-.039-.121-.109-.111-.189v-1.74c0-.029.011-.07.041-.09.029-.02.06-.01.09.01.39.23.8.391 1.24.49.379.1.779.15 1.18.15.38 0 .65-.051.83-.141.16-.07.27-.24.27-.42 0-.141-.08-.27-.24-.4-.16-.129-.489-.279-.979-.471-.51-.18-.979-.42-1.42-.719-.31-.221-.569-.51-.761-.85-.159-.32-.239-.67-.229-1.021 0-.43.12-.84.341-1.21.25-.4.619-.72 1.049-.92.469-.239 1.059-.349 1.769-.349.41 0 .83.03 1.24.09.3.04.59.12.86.23.039.01.08.05.1.09.01.04.02.08.02.12v1.63c0 .04-.02.08-.05.1-.09.02-.14.02-.18 0-.3-.16-.62-.27-.96-.34-.37-.08-.74-.13-1.12-.13-.2-.01-.41.02-.601.07-.129.03-.24.1-.31.2-.05.08-.08.18-.08.27s.04.18.101.26c.09.11.209.2.34.27.229.12.47.23.709.33.541.18 1.061.43 1.541.73.33.209.6.49.789.83.16.318.24.67.23 1.029.011.471-.129.94-.389 1.331z"},child:[]}]})(e)}function mP(e){return Ae({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M9.456 18.7h1.258v-.865H9.456Zm2.115 0h1.286v-.865h-1.286ZM6.43 1.127.857 3.892v17.19l5.572 1.885Zm.857 5.47v11.238H8.57v.865H7.286v4.868a.434.434 0 0 1-.429.432.425.425 0 0 1-.136-.022L.292 21.804a.432.432 0 0 1-.292-.41V3.623c0-.164.093-.315.24-.388L6.668.045a.424.424 0 0 1 .415.02.433.433 0 0 1 .203.367v5.3H8.57v.865ZM13.714 18.7H15v-.865h-1.286Zm.028-12.103H15v-.864h-1.258Zm-2.143 0h1.258v-.864H11.6Zm-2.143 0h1.258v-.864H9.456Zm13.687-2.705L17.57 1.127v21.84l5.572-1.884ZM24 21.394c0 .186-.117.35-.292.41l-6.429 2.174a.425.425 0 0 1-.386-.06.434.434 0 0 1-.179-.35V18.7h-.829v-.865h.83V6.597h-.83v-.864h.83v-5.3c0-.15.076-.289.202-.368a.424.424 0 0 1 .415-.02l6.428 3.19c.147.073.24.224.24.388ZM13.257 9.346l-.8-.31-2.143 5.618.8.31Zm2.903 2.744a.434.434 0 0 0 0-.612L14.446 9.75l-.606.612 1.411 1.423-1.411 1.423.606.611Zm-6.606 1.728L7.84 12.09a.434.434 0 0 1 0-.612L9.554 9.75l.606.612-1.411 1.423 1.411 1.423Z"},child:[]}]})(e)}function gP(e){return Ae({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.606 20.705v-2.371c-1.263 1.082-3.884 1.795-7.066 1.795-3.184 0-5.805-.714-7.068-1.797v2.369c0 1.168 2.903 2.47 7.068 2.47 4.16 0 7.06-1.3 7.066-2.466zm.001-6.765l.817-.005v.005c0 .517-.258.998-.75 1.441.601.54.75 1.071.75 1.449a1661.7 1661.7 0 0 0 0 3.87c0 1.881-3.389 3.3-7.884 3.3-4.471 0-7.846-1.404-7.88-3.27a583.119 583.119 0 0 1-.003-3.909c.001-.375.15-.9.745-1.437-.592-.538-.743-1.062-.746-1.435v-3.892c.002-.377.153-.903.747-1.438-.593-.54-.744-1.062-.747-1.435 0-1.357-.002-2.735.002-3.897C1.674 1.412 5.056 0 9.54 0c2.159 0 4.233.356 5.689.974l-.315.766c-1.36-.58-3.319-.91-5.374-.91-4.165 0-7.067 1.3-7.067 2.47 0 1.168 2.902 2.47 7.067 2.47.115 0 .222 0 .334-.005l.033.828c-.122.006-.245.006-.367.006-3.184 0-5.805-.714-7.068-1.798v2.38c.005.45.45.843.821 1.093 1.116.736 3.114 1.239 5.34 1.342l-.037.829c-2.254-.105-4.23-.59-5.5-1.332-.318.245-.623.573-.623.952 0 1.168 2.902 2.47 7.067 2.47.411 0 .812-.014 1.203-.042l.06.826c-.41.03-.833.045-1.263.045-3.184 0-5.805-.713-7.068-1.797v2.368c.005.462.449.855.821 1.104 1.275.842 3.67 1.366 6.247 1.366h.182v.83H9.54c-2.62 0-4.99-.507-6.444-1.359-.317.245-.623.574-.623.954 0 1.168 2.902 2.47 7.067 2.47 4.159 0 7.058-1.298 7.066-2.465v-.007c0-.377-.303-.705-.62-.948a5.732 5.732 0 0 1-.662.336l-.316-.764c.3-.128.56-.266.776-.412.376-.254.823-.651.823-1.1zm4.377-6.915h-2.717a.406.406 0 0 1-.332-.173.42.42 0 0 1-.055-.375l1.204-3.597h-5.403l-2.583 4.974h2.623c.128 0 .248.06.325.164a.418.418 0 0 1 .069.36l-2.249 8.365zm1.249-.128l-10.89 11.608a.408.408 0 0 1-.498.075.418.418 0 0 1-.192-.471l2.534-9.426h-2.766a.407.407 0 0 1-.349-.2.418.418 0 0 1-.012-.407l3.014-5.804a.408.408 0 0 1 .36-.222h6.22c.132 0 .256.065.332.174a.422.422 0 0 1 .055.374l-1.204 3.598h3.1c.164 0 .31.099.375.251a.422.422 0 0 1-.08.45zM3.085 20.723a8.107 8.107 0 0 0 1.72.72l.233-.794a7.32 7.32 0 0 1-1.546-.645zm1.72-5.984l.233-.795a7.262 7.262 0 0 1-1.546-.646l-.407.72a8.051 8.051 0 0 0 1.72.72zm-1.72-7.427l.407-.719c.418.244.939.462 1.546.646l-.232.794a8.046 8.046 0 0 1-1.72-.72Z"},child:[]}]})(e)}function yP(e){return Ae({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4.9855 0c-.2941.0031-.5335.2466-.534.5482L4.446 5.456c0 .1451.06.2835.159.3891a.5322.5322 0 0 0 .3806.1562h3.4282l8.197 17.6805a.5365.5365 0 0 0 .4885.3181h5.811c.2969 0 .5426-.2448.5426-.5482V18.544c0-.3035-.2392-.5482-.5425-.5482h-2.0138L12.7394.3153C12.647.124 12.4564 0 12.2452 0h-7.254Zm.5397 1.0907h6.3678l8.16 17.6804a.5365.5365 0 0 0 .4885.3181h1.8178v3.8173H17.437L9.2402 5.226a.536.536 0 0 0-.4885-.318H5.5223Zm2.0137 8.2366c-.2098.0011-.3937.1193-.4857.3096L.6002 23.2133a.5506.5506 0 0 0 .0313.5282.5334.5334 0 0 0 .4544.25h6.169a.5468.5468 0 0 0 .497-.3096l3.38-7.166a.5405.5405 0 0 0-.0029-.4686L8.036 9.637a.5468.5468 0 0 0-.4942-.3096Zm.0057 1.8036 2.488 5.1522-3.1214 6.6206H1.9465Z"},child:[]}]})(e)}function vP(e){return Ae({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"},child:[]}]})(e)}function wP(e){return Ae({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"},child:[]}]})(e)}function xP(e){return Ae({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"},child:[]}]})(e)}function bP(e){return Ae({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10.984 13.836a.5.5 0 0 1-.353-.146l-.745-.743a.5.5 0 1 1 .706-.708l.392.391 1.181-1.18a.5.5 0 0 1 .708.707l-1.535 1.533a.504.504 0 0 1-.354.146zm9.353-.147l1.534-1.532a.5.5 0 0 0-.707-.707l-1.181 1.18-.392-.391a.5.5 0 1 0-.706.708l.746.743a.497.497 0 0 0 .706-.001zM4.527 7.452l2.557-1.585A1 1 0 0 0 7.09 4.17L4.533 2.56A1 1 0 0 0 3 3.406v3.196a1.001 1.001 0 0 0 1.527.85zm2.03-2.436L4 6.602V3.406l2.557 1.61zM24 12.5c0 1.93-1.57 3.5-3.5 3.5a3.503 3.503 0 0 1-3.46-3h-2.08a3.503 3.503 0 0 1-3.46 3 3.502 3.502 0 0 1-3.46-3h-.558c-.972 0-1.85-.399-2.482-1.042V17c0 1.654 1.346 3 3 3h.04c.244-1.693 1.7-3 3.46-3 1.93 0 3.5 1.57 3.5 3.5S13.43 24 11.5 24a3.502 3.502 0 0 1-3.46-3H8c-2.206 0-4-1.794-4-4V9.899A5.008 5.008 0 0 1 0 5c0-2.757 2.243-5 5-5s5 2.243 5 5a5.005 5.005 0 0 1-4.952 4.998A2.482 2.482 0 0 0 7.482 12h.558c.244-1.693 1.7-3 3.46-3a3.502 3.502 0 0 1 3.46 3h2.08a3.503 3.503 0 0 1 3.46-3c1.93 0 3.5 1.57 3.5 3.5zm-15 8c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5S9 19.122 9 20.5zM5 9c2.206 0 4-1.794 4-4S7.206 1 5 1 1 2.794 1 5s1.794 4 4 4zm9 3.5c0-1.378-1.122-2.5-2.5-2.5S9 11.122 9 12.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5zm9 0c0-1.378-1.122-2.5-2.5-2.5S18 11.122 18 12.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5zm-13 8a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm12 0c0 1.93-1.57 3.5-3.5 3.5a3.503 3.503 0 0 1-3.46-3.002c-.007.001-.013.005-.021.005l-.506.017h-.017a.5.5 0 0 1-.016-.999l.506-.017c.018-.002.035.006.052.007A3.503 3.503 0 0 1 20.5 17c1.93 0 3.5 1.57 3.5 3.5zm-1 0c0-1.378-1.122-2.5-2.5-2.5S18 19.122 18 20.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5z"},child:[]}]})(e)}function SP(e){return Ae({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.525 5.87c-2.126 3.054-1.862 7.026-.237 10.269.037.079.078.154.118.229.023.052.049.1.077.15.013.027.031.056.047.082.026.052.054.102.081.152l.157.266c.03.049.057.097.09.146.056.094.12.187.178.281.026.04.05.078.079.117a6.368 6.368 0 00.31.445c.078.107.156.211.24.315.027.038.058.076.086.115l.22.269c.028.03.055.067.084.099.098.118.202.233.306.35l.005.006a3.134 3.134 0 00.425.44c.08.083.16.165.245.245l.101.097c.111.105.223.209.34.309.002 0 .003.002.005.003l.057.05c.102.089.205.178.31.26l.125.105c.085.068.174.133.26.2l.137.105c.093.07.192.139.287.207.035.025.07.05.106.073l.03.023.28.185.12.08c.148.094.294.184.44.272.041.02.084.044.123.068.108.062.22.125.329.183.06.034.122.063.184.094.075.042.153.083.234.125a.324.324 0 01.056.023c.033.015.064.031.096.047.12.06.245.118.375.175.024.01.05.02.076.034.144.063.289.123.438.182.034.01.07.027.105.04.135.051.274.103.411.152l.05.018c.154.052.305.102.46.15.036.01.073.023.111.033.16.048.314.105.474.137 10.273 1.872 13.258-6.177 13.258-6.177-2.508 3.266-6.958 4.127-11.174 3.169-.156-.036-.312-.086-.47-.132a13.539 13.539 0 01-.567-.182l-.062-.024c-.136-.046-.267-.097-.4-.148a1.615 1.615 0 00-.11-.04c-.148-.06-.29-.121-.433-.184-.031-.01-.057-.024-.088-.036a23.44 23.44 0 01-.362-.17 1.485 1.485 0 01-.106-.052c-.094-.044-.188-.095-.28-.143a3.947 3.947 0 01-.187-.096c-.114-.06-.227-.125-.34-.187-.034-.024-.073-.044-.112-.066a15.922 15.922 0 01-.439-.27 2.107 2.107 0 01-.118-.078 6.01 6.01 0 01-.312-.207c-.035-.023-.067-.048-.103-.073a9.553 9.553 0 01-.295-.212c-.042-.034-.087-.066-.132-.1-.088-.07-.177-.135-.265-.208l-.118-.095a10.593 10.593 0 01-.335-.28.258.258 0 00-.037-.031l-.347-.316-.1-.094c-.082-.084-.166-.164-.25-.246l-.098-.1a9.081 9.081 0 01-.309-.323l-.015-.016c-.106-.116-.21-.235-.313-.355-.027-.03-.053-.064-.08-.097l-.227-.277a21.275 21.275 0 01-.34-.449C2.152 11.79 1.306 7.384 3.177 3.771m4.943-.473c-1.54 2.211-1.454 5.169-.254 7.508a9.111 9.111 0 00.678 1.133c.23.33.484.721.793.988.107.122.223.24.344.36l.09.09c.114.11.232.217.35.325l.016.013a9.867 9.867 0 00.414.342c.034.023.063.05.096.073.14.108.282.212.428.316l.015.009c.062.045.128.086.198.13.028.018.06.042.09.06.106.068.21.132.318.197.017.007.032.016.048.023.09.055.188.108.282.157.033.02.065.035.1.054.066.033.132.068.197.102l.032.014c.135.067.273.129.408.19.034.014.063.025.092.039.111.048.224.094.336.137.05.017.097.037.144.052.102.038.21.073.31.108l.14.045c.147.045.295.104.449.13C22.164 17.206 24 11.098 24 11.098c-1.653 2.38-4.852 3.513-8.261 2.628a8.04 8.04 0 01-.449-.13c-.048-.014-.09-.029-.136-.043-.104-.036-.211-.07-.312-.109l-.144-.054c-.113-.045-.227-.087-.336-.135-.034-.015-.065-.025-.091-.04-.14-.063-.281-.125-.418-.192l-.206-.107-.119-.06a5.673 5.673 0 01-.265-.15.62.62 0 01-.062-.035c-.106-.066-.217-.13-.318-.198-.034-.019-.065-.042-.097-.062l-.208-.136c-.144-.1-.285-.208-.428-.313-.032-.029-.063-.053-.094-.079-1.499-1.178-2.681-2.79-3.242-4.613-.59-1.897-.46-4.023.56-5.75m4.292-.147c-.909 1.334-.996 2.99-.37 4.46.665 1.563 2.024 2.79 3.608 3.37.065.025.128.046.196.07l.088.027c.092.03.185.063.28.084 4.381.845 5.567-2.25 5.886-2.704-1.043 1.498-2.792 1.857-4.938 1.335a4.85 4.85 0 01-.516-.16 6.352 6.352 0 01-.618-.254 6.53 6.53 0 01-1.082-.66c-1.922-1.457-3.113-4.236-1.859-6.5"},child:[]}]})(e)}function kP(e){return Ae({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"},child:[]}]})(e)}function CP(e){return Ae({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"},child:[]}]})(e)}function ed(e){return Ae({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z"},child:[]}]})(e)}function RP(e){return Ae({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m23.693 10.7058-4.73-8.1844c-.4094-.7106-1.4166-1.2942-2.2402-1.2942H7.2725c-.819 0-1.8308.5836-2.2402 1.2942L.307 10.7058c-.4095.7106-.4095 1.873 0 2.5837l4.7252 8.189c.4094.7107 1.4166 1.2943 2.2402 1.2943h9.455c.819 0 1.826-.5836 2.2402-1.2942l4.7252-8.189c.4095-.7107.4095-1.8732 0-2.5838zM10.9763 5.7547c0-.5365.4377-.9742.9742-.9742s.9742.4377.9742.9742v5.8217c0 .5366-.4377.9742-.9742.9742s-.9742-.4376-.9742-.9742zm.9742 12.4294c-3.6427 0-6.6077-2.965-6.6077-6.6077.0047-2.0896.993-4.0521 2.6685-5.304a.8657.8657 0 0 1 1.2142.1788.8657.8657 0 0 1-.1788 1.2143c-2.1602 1.6048-2.612 4.6592-1.0072 6.8194 1.6049 2.1603 4.6593 2.612 6.8195 1.0072 1.2378-.9177 1.9673-2.372 1.9673-3.9157a4.8972 4.8972 0 0 0-1.9861-3.925c-.386-.2824-.466-.8284-.1836-1.2143.2824-.386.8283-.466 1.2143-.1835 1.6895 1.2471 2.6826 3.2238 2.6873 5.3228 0 3.6474-2.965 6.6077-6.6077 6.6077z"},child:[]}]})(e)}function TP(e){return Ae({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"},child:[]}]})(e)}function EP(e){return Ae({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"},child:[]}]})(e)}const PP={"React.js":_h,TypeScript:EP,JavaScript:Yy,HTML5:iP,CSS3:aP,"Tailwind CSS":TP,Bootstrap:vP,SCSS:ed,LESS:ed,SASS:ed,jQuery:SP,EJS:Yy,"Node.js":Bd,"Express.js":wP,"Java Spring Boot":RP,"REST APIs":Bd,MongoDB:kP,PostgreSQL:CP,SQL:Zw,Git:$y,SVN:$y,WordPress:qh,Figma:xP,Photoshop:fP,"AWS Lambda":yP,"Amazon API Gateway":mP,"Amazon DynamoDB":gP,"GitHub Actions (CI/CD)":bP},MP=[{title:"Frontend",icon:_h,technologies:["React.js","TypeScript","JavaScript","HTML5","CSS3","Tailwind CSS","Bootstrap","SCSS","LESS","SASS","jQuery","EJS"],gradient:"from-blue-500 via-cyan-500 to-teal-400",iconBg:"bg-blue-500/10",iconColor:"text-blue-500"},{title:"Backend",icon:Bd,technologies:["Node.js","Express.js","Java Spring Boot","REST APIs"],gradient:"from-emerald-500 via-green-500 to-lime-400",iconBg:"bg-emerald-500/10",iconColor:"text-emerald-500"},{title:"AI & Automation",icon:pP,technologies:["LLM Prompt Engineering","Generative AI APIs","AI Workflow Design","Smart Assistants","Auto-Document Generation"],gradient:"from-purple-500 via-pink-500 to-rose-400",iconBg:"bg-purple-500/10",iconColor:"text-purple-500"},{title:"Database",icon:Zw,technologies:["MongoDB","PostgreSQL","SQL"],gradient:"from-orange-500 via-amber-500 to-yellow-400",iconBg:"bg-orange-500/10",iconColor:"text-orange-500"},{title:"Tools & Platforms",icon:qh,technologies:["Git","SVN","WordPress","Figma","Photoshop","Media Queries"],gradient:"from-indigo-500 via-violet-500 to-purple-400",iconBg:"bg-indigo-500/10",iconColor:"text-indigo-500"},{title:"Cloud & Serverless",icon:cP,technologies:["AWS Lambda","Amazon API Gateway","Amazon DynamoDB","GitHub Actions (CI/CD)"],gradient:"from-sky-500 via-blue-500 to-indigo-400",iconBg:"bg-sky-500/10",iconColor:"text-sky-500"}],AP=()=>{const e=x.useRef(null),t=Qo(e,{once:!0,margin:"-100px"});return p.jsxs("section",{id:"techstack",className:"relative py-24 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden",children:[p.jsx("div",{className:"absolute -top-24 -left-24 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl"}),p.jsx("div",{className:"absolute -bottom-32 right-0 w-[600px] h-[600px] bg-purple-100/20 rounded-full blur-3xl"}),p.jsxs("div",{className:"container mx-auto px-6 relative z-10",ref:e,children:[p.jsxs(we.div,{initial:{opacity:0,y:40},animate:t?{opacity:1,y:0}:{},transition:{duration:.7},className:"text-center mb-16",children:[p.jsxs("div",{className:"inline-flex items-center gap-3 px-5 py-2 mb-4 rounded-full bg-gradient-to-r from-blue-100 via-cyan-100 to-teal-100 border border-blue-200",children:[p.jsx(_h,{className:"w-5 h-5 text-blue-600"}),p.jsx("span",{className:"text-sm font-semibold text-blue-600 uppercase tracking-wide",children:"Tech Stack"})]}),p.jsxs("h2",{className:"text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6",children:["Technologies I"," ",p.jsxs("span",{className:"relative",children:[p.jsx("span",{className:"text-gradient",children:"Work With"}),p.jsx(we.span,{className:"absolute -bottom-2 left-0 right-0 h-1 bg-gradient-primary rounded-full",initial:{scaleX:0},animate:t?{scaleX:1}:{},transition:{duration:.8,delay:.3}})]})]}),p.jsxs("p",{className:"text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed",children:["A robust technology stack built over a decade of professional experience,",p.jsx("span",{className:"text-foreground font-medium",children:" powering enterprise-grade solutions worldwide."})]})]}),p.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:MP.map((o,s)=>p.jsxs(we.div,{initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{},whileHover:{y:-10},transition:{delay:s*.1,duration:.5},className:"bg-white/80 backdrop-blur-sm border border-white rounded-3xl p-5 shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-300",children:[p.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[p.jsx("div",{className:`p-3 rounded-2xl ${o.iconBg} ${o.iconColor} shadow-inner`,children:p.jsx(o.icon,{className:"text-2xl"})}),p.jsxs("div",{children:[p.jsx("h3",{className:"text-xl font-bold text-gray-800 tracking-tight",children:o.title}),p.jsx("div",{className:`h-1 w-12 mt-1 rounded-full bg-gradient-to-r ${o.gradient}`})]})]}),p.jsx("div",{className:"grid grid-cols-2 gap-x-1 gap-y-2",children:o.technologies.map((i,l)=>{const u=PP[i]||qh;return p.jsxs(we.div,{whileHover:{x:5},className:"flex items-center gap-2.5 p-2 rounded-xl bg-white shadow-sm transition-all duration-200 group",children:[p.jsx("div",{className:` rounded-lg bg-gray-50 group-hover:bg-white ${o.iconColor} transition-colors`,children:p.jsx(u,{className:"text-base opacity-80 group-hover:opacity-100"})}),p.jsx("span",{className:"text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors",children:i})]},l)})})]},s))})]})]})},IP=[{title:"Senior AI Engineer | LLM Workflow Designer",subtitle:"MERN Stack & Generative AI Integration Expert",company:"Advent Global Solutions Pvt. Ltd.",duration:"Mar 2024 - Present",location:"Hyderabad, Telangana, India",workType:"On-site",highlights:["AI & LLM workflow design with Generative AI integration","Cross-functional collaboration with regional stakeholders","Enterprise-level LMS development"],skills:["Generative AI Integration","Java Spring Boot","React.js","Node.js","Typescript","PostgreSQL","Bootstrap","CSS3"],current:!0},{title:"Senior Software Developer",company:"DIGIKS INFOTECH PRIVATE LIMITED",duration:"Jul 2022 - Feb 2024",location:"Hyderabad, Telangana, India",workType:"On-site",highlights:["Full Stack Development with MERN Stack","React-based dynamic UI development","RESTful API design and implementation","Database management with PostgreSQL"],skills:["React.js","Node.js","Typescript","JavaScript","JQuery","PostgreSQL","Bootstrap","HTML5/CSS3","MediaQueries"],current:!1},{title:"Software Developer",company:"National Informatics Centre, Govt of India",duration:"Mar 2015 - Jun 2022",location:"Hyderabad Area, India",workType:"On-site",highlights:["Enterprise-grade government applications","Frontend development with responsive UI","Database-driven application development","Cross-browser compatibility solutions"],skills:["React.js","Bootstrap","HTML5","jQuery","JavaScript","CSS3","MediaQueries","PostgreSQL","WordPress"],current:!1}],jP=()=>{const e=x.useRef(null),t=Qo(e,{once:!0,margin:"-100px"});return p.jsxs("section",{id:"experience",className:"py-24 bg-secondary/30 relative overflow-hidden",children:[p.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--primary)/0.02)_25%,transparent_25%,transparent_50%,hsl(var(--primary)/0.02)_50%,hsl(var(--primary)/0.02)_75%,transparent_75%,transparent)] bg-[length:40px_40px]"}),p.jsx("div",{className:"absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"}),p.jsx("div",{className:"absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl"}),p.jsxs("div",{className:"container px-4 relative z-10",ref:e,children:[p.jsxs(we.div,{initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{},transition:{duration:.6},className:"text-center mb-16",children:[p.jsxs(we.div,{initial:{opacity:0,scale:.8},animate:t?{opacity:1,scale:1}:{},transition:{duration:.5},className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6",children:[p.jsx(Uv,{className:"w-4 h-4 text-primary"}),p.jsx("span",{className:"text-sm font-semibold text-primary uppercase tracking-wider",children:"Work Experience"})]}),p.jsxs("h2",{className:"text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4",children:["Companies I've"," ",p.jsx("span",{className:"text-gradient",children:"Worked With"})]}),p.jsx("p",{className:"text-xl text-gradient font-semibold mb-4",children:"10+ Years of Professional Excellence"}),p.jsx("p",{className:"text-lg text-muted-foreground max-w-3xl mx-auto",children:"A decade of delivering enterprise solutions across government and private sectors, with international project experience in Saudi Arabia."})]}),p.jsxs("div",{className:"max-w-5xl mx-auto relative",children:[p.jsx("div",{className:"absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"}),p.jsx("div",{className:"space-y-12",children:IP.map((o,s)=>p.jsxs(we.div,{initial:{opacity:0,y:50},animate:t?{opacity:1,y:0}:{},transition:{duration:.6,delay:s*.2},className:`relative flex flex-col md:flex-row gap-8 ${s%2===0?"md:flex-row":"md:flex-row-reverse"}`,children:[p.jsxs("div",{className:"absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 z-20",children:[p.jsx(we.div,{initial:{scale:0},animate:t?{scale:1}:{},transition:{duration:.4,delay:s*.2+.3},className:`w-4 h-4 rounded-full ${o.current?"bg-gradient-primary shadow-glow":"bg-primary/60 border-2 border-background"}`}),o.current&&p.jsx(we.div,{className:"absolute inset-0 rounded-full bg-primary",animate:{scale:[1,1.5,1],opacity:[.5,0,.5]},transition:{duration:2,repeat:1/0}})]}),p.jsx("div",{className:`flex-1 ml-16 md:ml-0 ${s%2===0?"md:pr-12 md:text-right":"md:pl-12 md:text-left"}`,children:p.jsxs(we.div,{whileHover:{y:-5},className:`glass-card rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-500 border ${o.current?"border-primary/30 bg-primary/5":"border-border/50"}`,children:[o.current&&p.jsx("div",{className:`mb-4 ${s%2===0?"md:text-right":"md:text-left"}`,children:p.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-primary text-primary-foreground",children:[p.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-white animate-pulse"}),"Currently Working"]})}),p.jsxs("div",{className:`flex flex-col gap-3 mb-4 ${s%2===0?"md:items-end":"md:items-start"}`,children:[p.jsxs("div",{children:[p.jsx("h3",{className:"text-xl md:text-2xl font-bold text-foreground leading-tight",children:o.title}),o.subtitle&&p.jsx("p",{className:"text-sm text-primary font-medium mt-1",children:o.subtitle})]}),p.jsxs("div",{className:`flex items-center gap-2 ${s%2===0?"md:flex-row-reverse":""}`,children:[p.jsx(cS,{className:"w-5 h-5 text-primary"}),p.jsx("span",{className:"text-lg font-semibold text-foreground",children:o.company})]})]}),p.jsxs("div",{className:`flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground ${s%2===0?"md:justify-end":"md:justify-start"}`,children:[p.jsxs("span",{className:"flex items-center gap-1.5",children:[p.jsx(uS,{className:"w-4 h-4"})," ",o.duration]}),p.jsxs("span",{className:"flex items-center gap-1.5",children:[p.jsx(Xd,{className:"w-4 h-4"}),o.location," · ",o.workType]})]}),p.jsx("div",{className:`space-y-2 mb-4 ${s%2===0?"md:text-right":"md:text-left"}`,children:o.highlights.map((i,l)=>p.jsxs("div",{className:`flex items-center gap-2 text-sm text-foreground ${s%2===0?"md:flex-row-reverse":""}`,children:[p.jsx(dS,{className:"w-4 h-4 text-primary flex-shrink-0"}),p.jsx("span",{children:i})]},l))}),p.jsx("div",{className:`flex flex-wrap gap-2 ${s%2===0?"md:justify-end":"md:justify-start"}`,children:o.skills.map((i,l)=>p.jsx("span",{className:"px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20",children:i},l))})]})}),p.jsx("div",{className:"hidden md:block flex-1"})]},s))})]}),p.jsx(we.div,{initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{},transition:{duration:.6,delay:.8},className:"mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto",children:[{number:"3",label:"Companies"},{number:"10+",label:"Years Experience"},{number:"2",label:"Countries"},{number:"50+",label:"Projects Delivered"}].map((o,s)=>p.jsxs(we.div,{whileHover:{y:-5},className:"glass-card rounded-2xl p-6 text-center",children:[p.jsx("div",{className:"text-3xl md:text-4xl font-bold text-gradient mb-2",children:o.number}),p.jsx("div",{className:"text-sm text-muted-foreground",children:o.label})]},s))})]})]})},NP=[{title:"AI-Powered Document Management System",description:"Enterprise document management with AI auto-classification, intelligent search, and automated summarization for a multinational corporation.",techStack:["React","Node.js","MongoDB","OpenAI API","AWS"],aiFeatures:["Auto-classification","Smart Search","Document Summarization"],featured:!0},{title:"E-Commerce Platform with AI Recommendations",description:"Full-stack e-commerce solution with AI-driven product recommendations, dynamic pricing, and personalized user experiences.",techStack:["React","Spring Boot","PostgreSQL","TensorFlow"],aiFeatures:["Product Recommendations","Dynamic Pricing"],featured:!0},{title:"Healthcare Patient Portal",description:"Secure patient management system with appointment scheduling, telemedicine integration, and automated health insights.",techStack:["React","Express.js","MongoDB","Socket.io"],aiFeatures:["Health Insights","Symptom Analysis"],featured:!1},{title:"Enterprise Resource Planning (ERP) System",description:"Comprehensive ERP solution for Saudi Arabian client featuring inventory, HR, finance modules with Arabic localization.",techStack:["React","Spring Boot","PostgreSQL","Redis"],aiFeatures:null,featured:!1},{title:"AI Chatbot Platform",description:"Multi-tenant chatbot platform with customizable AI agents, knowledge base integration, and analytics dashboard.",techStack:["React","Node.js","MongoDB","LangChain","GPT-4"],aiFeatures:["Custom AI Agents","Knowledge Base","Analytics"],featured:!0},{title:"Real-time Analytics Dashboard",description:"High-performance analytics dashboard with real-time data streaming, interactive visualizations, and automated reporting.",techStack:["React","D3.js","Express.js","PostgreSQL","WebSocket"],aiFeatures:["Predictive Analytics"],featured:!1}],DP=()=>{const e=x.useRef(null),t=Qo(e,{once:!0,margin:"-100px"});return p.jsxs("section",{id:"projects",className:"py-24 bg-background relative overflow-hidden",children:[p.jsx("div",{className:"absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-accent/5 to-transparent rounded-full blur-3xl"}),p.jsx("div",{className:"absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-accent/5 to-transparent rounded-full blur-3xl"}),p.jsxs("div",{className:"container px-4 relative z-10",ref:e,children:[p.jsxs(we.div,{initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{},transition:{duration:.6},className:"text-center mb-16",children:[p.jsx("span",{className:"inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4",children:"Portfolio"}),p.jsxs("h2",{className:"text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4",children:["Featured"," ",p.jsx("span",{className:"text-gradient",children:"Projects"})]}),p.jsx("p",{className:"text-lg text-muted-foreground max-w-2xl mx-auto",children:"Enterprise-grade solutions powered by cutting-edge technology and AI integration."})]}),p.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto",children:NP.map((o,s)=>p.jsx(we.div,{initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{},transition:{duration:.5,delay:s*.1},className:"group relative",children:p.jsxs("div",{className:"h-full glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col",children:[o.featured&&p.jsxs("div",{className:"absolute -top-2 -right-2 px-3 py-1 rounded-full bg-gradient-accent text-white text-xs font-semibold flex items-center gap-1",children:[p.jsx(Km,{className:"w-3 h-3"}),"Featured"]}),p.jsx("h3",{className:"text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors",children:o.title}),p.jsx("p",{className:"text-muted-foreground mb-4 flex-grow leading-relaxed",children:o.description}),p.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:o.techStack.map((i,l)=>p.jsx("span",{className:"px-2 py-1 bg-secondary rounded text-xs font-medium text-foreground",children:i},l))}),o.aiFeatures&&p.jsxs("div",{className:"mb-4 p-3 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10",children:[p.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-primary mb-2",children:[p.jsx(Km,{className:"w-3 h-3"}),"AI Features"]}),p.jsx("div",{className:"flex flex-wrap gap-1",children:o.aiFeatures.map((i,l)=>p.jsx("span",{className:"px-2 py-0.5 bg-primary/10 rounded text-xs text-primary",children:i},l))})]}),p.jsxs("div",{className:"flex gap-2 mt-auto pt-4 border-t border-border",children:[p.jsxs(qn,{variant:"ghost",size:"sm",className:"flex-1",children:[p.jsx(_v,{className:"w-4 h-4 mr-2"}),"Demo"]}),p.jsxs(qn,{variant:"ghost",size:"sm",className:"flex-1",children:[p.jsx(Gd,{className:"w-4 h-4 mr-2"}),"Code"]})]})]})},s))})]})]})},OP=[{icon:dP,title:"Project Proposals",description:"Comprehensive technical and business proposals tailored for stakeholder approval and project kickoff."},{icon:lP,title:"Technical Manuals",description:"Detailed technical documentation, API references, and developer guides for seamless knowledge transfer."},{icon:hP,title:"Presentations & Brochures",description:"High-impact slide decks for executive briefings, project updates, and technical demonstrations."},{icon:uP,title:"User Manuals",description:"User-friendly documentation with step-by-step guides, tutorials, and FAQs for end-users."}],LP=()=>{const e=x.useRef(null),t=Qo(e,{once:!0,margin:"-100px"});return p.jsx("section",{id:"documentation",className:"py-24 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden",children:p.jsxs("div",{className:"container px-6 relative z-10",ref:e,children:[p.jsxs(we.div,{initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{},transition:{duration:.6},className:"text-center mb-16",children:[p.jsx("span",{className:"inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4",children:"Documentation"}),p.jsxs("h2",{className:"text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4",children:["Professional ",p.jsx("span",{className:"text-gradient",children:"Communication"})]}),p.jsx("p",{className:"text-lg text-muted-foreground max-w-2xl mx-auto",children:"Strong expertise in crafting clear, professional documentation for all stakeholders."})]}),p.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto",children:OP.map((o,s)=>p.jsx(we.div,{initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{},transition:{duration:.5,delay:s*.1},className:"group text-center",children:p.jsxs("div",{className:"glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full",children:[p.jsx("div",{className:"w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300",children:p.jsx(o.icon,{className:"w-8 h-8 text-white"})}),p.jsx("h3",{className:"text-lg font-bold text-foreground mb-3",children:o.title}),p.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:o.description})]})},s))})]})})},Hd=x.forwardRef(({className:e,type:t,...o},s)=>p.jsx("input",{type:t,className:Pn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:s,...o}));Hd.displayName="Input";const ex=x.forwardRef(({className:e,...t},o)=>p.jsx("textarea",{className:Pn("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:o,...t}));ex.displayName="Textarea";const FP=()=>{const e=x.useRef(null),t=Qo(e,{once:!0,margin:"-100px"});uv();const[o,s]=x.useState({name:"",email:"",message:""}),[i,l]=x.useState(!1),[u,d]=x.useState(!1),f=async y=>{y.preventDefault(),l(!0),await new Promise(v=>setTimeout(v,1e3)),d(!0),l(!1)},m=y=>{s(v=>({...v,[y.target.name]:y.target.value}))};return p.jsxs("section",{id:"contact",className:"py-24 bg-background relative overflow-hidden",children:[p.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--primary)/0.05)_0%,transparent_60%)]"}),p.jsxs("div",{className:"container px-4 relative z-10",ref:e,children:[p.jsxs(we.div,{initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{},transition:{duration:.6},className:"text-center mb-16",children:[p.jsx("span",{className:"inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4",children:"Get In Touch"}),p.jsxs("h2",{className:"text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4",children:["Let's Build"," ",p.jsx("span",{className:"text-gradient",children:"Intelligent"})," &"," ",p.jsx("span",{className:"text-gradient",children:"Scalable"})," Solutions"]}),p.jsx("p",{className:"text-lg text-muted-foreground max-w-2xl mx-auto",children:"Ready to transform your ideas into powerful, AI-enabled applications? Let's discuss your project."})]}),p.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto",children:[p.jsx(we.div,{initial:{opacity:0,x:-30},animate:t?{opacity:1,x:0}:{},transition:{duration:.6,delay:.2},children:p.jsx("div",{className:"glass-card rounded-2xl p-8",children:p.jsxs("form",{onSubmit:f,className:"space-y-6",children:[p.jsxs("div",{children:[p.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-foreground mb-2",children:"Your Name"}),p.jsx(Hd,{id:"name",name:"name",value:o.name,onChange:m,placeholder:"Sara",required:!0,className:"h-12"})]}),p.jsxs("div",{children:[p.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-foreground mb-2",children:"Email Address"}),p.jsx(Hd,{id:"email",name:"email",type:"email",value:o.email,onChange:m,placeholder:"sara@example.com",required:!0,className:"h-12"})]}),p.jsxs("div",{children:[p.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-foreground mb-2",children:"Your Message"}),p.jsx(ex,{id:"message",name:"message",value:o.message,onChange:m,placeholder:"Tell me about your project...",required:!0,rows:5,className:"resize-none"})]}),p.jsx(qn,{type:"submit",variant:"hero",size:"lg",className:"w-full",disabled:i,children:i?"Sending...":p.jsxs(p.Fragment,{children:["Send Message",p.jsx(SS,{className:"w-4 h-4 ml-2"})]})})]})})}),p.jsx(we.div,{initial:{opacity:0,x:30},animate:t?{opacity:1,x:0}:{},transition:{duration:.6,delay:.3},className:"flex flex-col justify-center",children:p.jsxs("div",{className:"space-y-8",children:[p.jsxs("div",{children:[p.jsx("h3",{className:"text-2xl font-bold text-foreground mb-4",children:"Ready to Start a Project?"}),p.jsx("p",{className:"text-muted-foreground leading-relaxed",children:"Whether you need a full-stack application, AI integration, or enterprise solution, I'm here to help bring your vision to life with cutting-edge technology."})]}),p.jsxs("div",{className:"space-y-4",children:[p.jsx("h4",{className:"text-sm font-semibold text-foreground uppercase tracking-wider",children:"Connect With Me"}),p.jsxs("div",{className:"flex flex-col gap-3",children:[p.jsxs("a",{href:"mailto:srinubabu.sara@gmail.com",className:"flex items-center gap-4 p-4 glass-card rounded-xl hover:shadow-lg transition-all duration-300 group",children:[p.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform",children:p.jsx(Yv,{className:"w-5 h-5 text-primary-foreground"})}),p.jsxs("div",{children:[p.jsx("span",{className:"block font-medium text-foreground",children:"Email"}),p.jsx("span",{className:"text-sm text-muted-foreground",children:"srinubabu.sara@gmail.com"})]}),p.jsx(Ji,{className:"w-5 h-5 text-muted-foreground ml-auto group-hover:text-primary transition-colors"})]}),p.jsxs("a",{href:"https://linkedin.com/in/srinubabusara",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 p-4 glass-card rounded-xl hover:shadow-lg transition-all duration-300 group",children:[p.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform",children:p.jsx($v,{className:"w-5 h-5 text-primary-foreground"})}),p.jsxs("div",{children:[p.jsx("span",{className:"block font-medium text-foreground",children:"LinkedIn"}),p.jsx("span",{className:"text-sm text-muted-foreground",children:"Professional Profile"})]}),p.jsx(Ji,{className:"w-5 h-5 text-muted-foreground ml-auto group-hover:text-primary transition-colors"})]}),p.jsxs("a",{href:"https://github.com/srinubabusara",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 p-4 glass-card rounded-xl hover:shadow-lg transition-all duration-300 group",children:[p.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform",children:p.jsx(Gd,{className:"w-5 h-5 text-primary-foreground"})}),p.jsxs("div",{children:[p.jsx("span",{className:"block font-medium text-foreground",children:"GitHub"}),p.jsx("span",{className:"text-sm text-muted-foreground",children:"Open Source Projects"})]}),p.jsx(Ji,{className:"w-5 h-5 text-muted-foreground ml-auto group-hover:text-primary transition-colors"})]})]})]})]})})]})]}),u&&p.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:p.jsxs(we.div,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.3},className:"bg-white rounded-2xl p-8 w-11/12 max-w-md text-center shadow-xl relative",children:[p.jsx("button",{onClick:()=>d(!1),className:"absolute top-4 right-4 text-muted-foreground hover:text-red-500 transition-colors",children:p.jsx(da,{className:"w-5 h-5"})}),p.jsx("h3",{className:"text-xl font-bold text-red-600 mb-4",children:"Oops!"}),p.jsx("p",{className:"text-muted-foreground mb-6",children:"Unable to send your request right now. Please try again later."}),p.jsx(qn,{onClick:()=>d(!1),className:"w-full",children:"Close"})]})})]})},$h=()=>{const e=new Date().getFullYear();return p.jsx("footer",{className:"bg-foreground py-12",children:p.jsx("div",{className:"container px-4",children:p.jsxs("div",{className:"max-w-5xl mx-auto",children:[p.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start gap-8 mb-8",children:[p.jsxs("div",{className:"flex flex-col items-center md:items-start text-center md:text-left gap-3",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("div",{className:"w-10 h-10 rounded-xl p-2 bg-gradient-accent flex items-center justify-center",children:p.jsx("img",{src:Cw,alt:"Logo",className:"w-8 h-8 object-contain"})}),p.jsx("span",{className:"font-bold text-xl text-background",children:"SrinubabuSara"})]}),p.jsxs("p",{className:"text-sm text-background/60",children:["Hyderabad, Telangana ",p.jsx("br",{}),"India"]})]}),p.jsx("div",{className:"flex flex-col items-start text-sm text-background/70",children:p.jsxs("ul",{className:"list-disc pl-5 space-y-1",children:[p.jsx("li",{children:p.jsx(Vo,{to:"/fresher-guide",className:"hover:text-background transition-colors",children:"New Joiners’ Guide"})}),p.jsx("li",{children:p.jsx(Vo,{to:"/react-question_answers",className:"hover:text-background transition-colors",children:"React FAQ"})}),p.jsx("li",{children:p.jsx(Vo,{to:"/privacy-policy",className:"hover:text-background transition-colors",children:"Privacy Policy"})}),p.jsx("li",{children:p.jsx(Vo,{to:"/",className:"hover:text-background transition-colors",children:"Terms & Conditions"})})]})}),p.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[p.jsx("a",{href:"mailto:srinubabu.sara@gmail.com",className:"w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors","aria-label":"Email",children:p.jsx(Yv,{className:"w-5 h-5 text-background"})}),p.jsx("a",{href:"https://linkedin.com/in/srinubabusara",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors","aria-label":"LinkedIn",children:p.jsx($v,{className:"w-5 h-5 text-background"})}),p.jsx("a",{href:"https://github.com/srinubabusara",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors","aria-label":"GitHub",children:p.jsx(Gd,{className:"w-5 h-5 text-background"})}),p.jsx("a",{href:"https://twitter.com/srinubabusara",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors","aria-label":"Twitter",children:p.jsx(TS,{className:"w-5 h-5 text-background"})}),p.jsx("a",{href:"https://instagram.com/srinubabu_sara",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors","aria-label":"Instagram",children:p.jsx(yS,{className:"w-5 h-5 text-background"})}),p.jsx("a",{href:"https://facebook.com/srinubabusara",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors","aria-label":"Facebook",children:p.jsx(gS,{className:"w-5 h-5 text-background"})})]})]}),p.jsx("div",{className:"border-t border-background/10 pt-8 text-center text-sm text-background/60",children:p.jsxs("p",{children:["© ",e," SrinubabuSara. All rights reserved."]})})]})})})},WP=()=>p.jsxs("div",{className:"min-h-screen bg-background",children:[p.jsx(Hh,{}),p.jsxs("main",{children:[p.jsx(JE,{}),p.jsx(KE,{}),p.jsx(QE,{}),p.jsx(AP,{}),p.jsx(jP,{}),p.jsx(DP,{}),p.jsx(LP,{}),p.jsx(FP,{})]}),p.jsx($h,{})]}),BP="/portfolio/assets/imgFrontend-DBhBWc_6.png",HP="/portfolio/assets/imgBackend-RywADT40.avif",UP="/portfolio/assets/imgFullstack-CY_vRu9W.avif",zP="/portfolio/assets/imgMobile-dIDHm9Wo.avif",VP="/portfolio/assets/imgTesting-BwN2-WHP.avif",_P="/portfolio/assets/imgDevops-DzF6FIU0.avif",qP="/portfolio/assets/imgAI-BzNmGmJP.avif",$P="/portfolio/assets/imgSecurity-C8DXCrvA.avif",YP="/portfolio/assets/imgNetworking-B9szVT5A.avif",JP="/portfolio/assets/imgPega-X6D9lVLx.avif",GP="/portfolio/assets/imgGIS-5MCXNEBy.avif",KP="/portfolio/assets/imgNonIT-BtM6oymc.jpg",XP="/portfolio/assets/sbg1-CWPkZ3yf.png",QP=[{id:1,title:"Frontend Development",icon:p.jsx(bS,{className:"w-8 h-8"}),shortDesc:"Crafting visual experiences using modern JS frameworks and CSS.",image:BP,color:"from-blue-500 to-cyan-400",sections:[{title:"Core Tech",items:["HTML5","CSS3","JavaScript (ES6+)"]},{title:"Styling",items:["Bootstrap","Tailwind CSS","Sass/SCSS","Material UI"]},{title:"Frameworks",items:["React.js","Angular","Vue.js","Next.js","Nuxt.js"]},{title:"Advanced",items:["TypeScript","Vite","GraphQL","WebSockets"]}],salaries:[{level:"Fresher",amount:"₹20,000 – ₹35,000"},{level:"2–4 Years",amount:"₹40,000 – ₹80,000"},{level:"5+ Years",amount:"₹1.2L – ₹3L+"}],note:"🔥 React + TypeScript developers earn significantly more."},{id:2,title:"Backend Development",icon:p.jsx(Vv,{className:"w-8 h-8"}),shortDesc:"Managing server-side logic, databases, and high-scale APIs.",image:HP,color:"from-red-600 to-orange-400",sections:[{title:"Languages",items:["Java (Spring Boot)","Python (Django/FastAPI)","Node.js",".NET","PHP"]},{title:"Databases",items:["MySQL","PostgreSQL","MongoDB","Oracle","PL/SQL","Firebase"]},{title:"Concepts",items:["REST API","Microservices","JWT Auth","API Security","Caching"]}],salaries:[{level:"Fresher",amount:"₹20,000 – ₹35,000"},{level:"Mid-level",amount:"₹50,000 – ₹1L"},{level:"Senior",amount:"₹1.2L – ₹4L+"}],note:"🔥 Java + Spring Boot & Golang experts are in high demand."},{id:3,title:"Full Stack Development",icon:p.jsx(zv,{className:"w-8 h-8"}),shortDesc:"Versatile development handling both Client and Server logic.",image:UP,color:"from-purple-600 to-pink-500",sections:[{title:"Frontend",items:["React.js","Angular","Vue.js","Next.js","Nuxt.js"]},{title:"Backend",items:["MERN (MongoDB, Express, React, Node)","MEAN","Java Spring Boot","Python",".NET"]},{title:"Databases",items:["MySQL","PostgreSQL","MongoDB","Oracle","PL/SQL","Firebase"]},{title:"Concepts",items:["REST API","Microservices","JWT Auth","API Security","Caching"]}],salaries:[{level:"Fresher",amount:"₹25,000 – ₹40,000"},{level:"Mid-level",amount:"₹60,000 – ₹1.2L"},{level:"Senior",amount:"₹1.5L – ₹5L"}],note:"Full stack is best for startups & product-based companies."},{id:4,title:"Mobile App Development",icon:p.jsx(CS,{className:"w-8 h-8"}),shortDesc:"Building native and cross-platform mobile experiences.",image:zP,color:"from-green-500 to-emerald-600",sections:[{title:"Android",items:["Kotlin","Java","Jetpack Compose","Firebase"]},{title:"iOS",items:["Swift","SwiftUI","Objective-C"]},{title:"Cross Platform",items:["Flutter","React Native","Xamarin"]}],salaries:[{level:"Fresher",amount:"₹20,000 – ₹35,000"},{level:"Mid-level",amount:"₹40,000 – ₹80,000"},{level:"Senior",amount:"₹1.2L – ₹3L+"}],note:"Flutter demand is growing fast in 2026."},{id:5,title:"Software Testing",icon:p.jsx(pS,{className:"w-8 h-8"}),shortDesc:"Ensuring application quality through automated scripts.",image:VP,color:"from-amber-400 to-orange-500",sections:[{title:"Manual Testing",items:["Test Cases","Bug Tracking","SDLC"]},{title:"Automation",items:["Selenium","Cypress","Playwright","Appium","Postman (API)"]}],salaries:[{level:"Fresher",amount:"₹20,000 – ₹30,000"},{level:"Mid-level",amount:"₹40,000 – ₹70,000"},{level:"Senior",amount:"₹80,000 – ₹2.5L+"}],note:"Automation testers earn almost equal to developers."},{id:6,title:"DevOps & Cloud",icon:p.jsx(fS,{className:"w-8 h-8"}),shortDesc:"Automating infrastructure and mastering cloud platforms.",image:_P,color:"from-slate-700 to-slate-900",sections:[{title:"Platforms",items:["AWS","Azure","GCP"]},{title:"Tools",items:["Docker","Kubernetes","Jenkins","Terraform","Linux","CI/CD"]}],salaries:[{level:"Fresher",amount:"₹30,000 – ₹40,000"},{level:"Mid-level",amount:"₹60,000 – ₹1L"},{level:"Senior",amount:"₹1.5L – ₹4L+"}],note:"🔥 One of the highest paying domains in 2026."},{id:7,title:"Data Science / AI / ML",icon:p.jsx(iS,{className:"w-8 h-8"}),shortDesc:"Transforming data into intelligence with ML and AI.",image:qP,color:"from-indigo-600 to-blue-700",sections:[{title:"AI/ML",items:["Python","Machine Learning","Deep Learning","NLP"]},{title:"Data Stack",items:["TensorFlow","PyTorch","Pandas","NumPy","SQL"]}],salaries:[{level:"Fresher",amount:"₹50k – ₹1.2L"},{level:"Mid-level",amount:"₹1.5L – ₹3L"},{level:"Senior",amount:"₹4L – ₹6L+"}],note:"AI is currently the top paying field."},{id:8,title:"Cyber Security",icon:p.jsx(kS,{className:"w-8 h-8"}),shortDesc:"Protecting systems through ethical hacking and defense.",image:$P,color:"from-emerald-700 to-green-500",sections:[{title:"Specialization",items:["Ethical Hacking","Penetration Testing","Network Security"]},{title:"Tools",items:["Kali Linux","CEH Certification","SOC Analyst Tools"]}],salaries:[{level:"Fresher",amount:"₹30k – ₹60k"},{level:"Mid-level",amount:"₹80,000 – ₹1.5L"},{level:"Senior",amount:"₹1.5L – ₹3L+"}]},{id:9,title:"Networking",icon:p.jsx(Kd,{className:"w-8 h-8"}),shortDesc:"Managing the world's digital connectivity infrastructure.",image:YP,color:"from-cyan-600 to-blue-500",sections:[{title:"Certifications",items:["CCNA","CCNP","Red Hat","CompTIA"]}],salaries:[{level:"Fresher",amount:"₹20k – ₹40k"},{level:"Mid-level",amount:"₹50,000 – ₹80,000"},{level:"Senior",amount:"₹1L – ₹3L"}]},{id:10,title:"PEGA (Low-Code BPM)",icon:p.jsx(qv,{className:"w-8 h-8"}),shortDesc:"Developing enterprise-level apps with low-code tech.",image:JP,color:"from-orange-600 to-amber-500",sections:[{title:"Used In",items:["Banking","Insurance","MNCs"]},{title:"Career",items:["Pega Developer","System Architect"]}],salaries:[{level:"Fresher",amount:"₹20k – ₹40k"},{level:"Experienced",amount:"₹50,000 – ₹80,000"},{level:"Architect",amount:"₹1L – ₹2L"}]},{id:11,title:"Google Maps / GIS",icon:p.jsx(Xd,{className:"w-8 h-8"}),shortDesc:"Geospatial analysis for urban and logistics tech.",image:GP,color:"from-teal-500 to-emerald-400",sections:[{title:"Tech Stack",items:["GIS","QGIS","ArcGIS","Google Maps API"]},{title:"Sectors",items:["Urban Planning","Delivery Apps","Agriculture Tech"]}],salaries:[{level:"Fresher",amount:"₹15k – ₹30k"},{level:"Mid-level",amount:"₹40,000 – ₹60,000"},{level:"Senior",amount:"₹60,000 – ₹1.5L"}]},{id:12,title:"Non-IT High Growth Roles",icon:p.jsx(ES,{className:"w-8 h-8"}),shortDesc:"Lucrative business and design roles in the IT world.",image:KP,color:"from-rose-500 to-pink-500",sections:[{title:"Consulting",items:["SAP Consultant","Business Analyst","IT Recruiter"]},{title:"Creative",items:["UI/UX Designer","Digital Marketing","Trading"]}],salaries:[{level:"SAP Consultant",amount:"₹40k – ₹2L / mo"},{level:"Business Analyst",amount:"₹30k – ₹2L / mo"},{level:"UI/UX Designer",amount:"₹40k – ₹2L / mo"}]}];function ZP(){const[e,t]=x.useState(null);return p.jsxs("div",{className:"min-h-screen bg-background",children:[p.jsx(Hh,{}),p.jsxs("section",{className:"relative w-full min-h-screen flex items-center overflow-hidden pt-12",children:[p.jsx("div",{className:"absolute inset-0 z-0",children:p.jsx("img",{src:XP,alt:"Srinubabu Sara's Tech Guide",className:"w-full h-full object-cover"})}),p.jsx("div",{className:"relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 pt-1",children:p.jsxs("div",{className:"max-w-2xl text-left text-[black]",children:[p.jsxs("h1",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight",children:["Hello, I’m"," ",p.jsx("span",{className:"mb-10 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-transparent",children:"Srinubabu Sara"}),p.jsx("br",{}),p.jsx("p",{className:"text-[#658DA6] mt-4 text-2xl",children:"Your Personal Guide!"})]}),p.jsxs("p",{className:"mt-6 text-lg sm:text-xl text-black",children:["Welcome to the"," ",p.jsx("span",{className:"font-semibold text-blue-700",children:"Software World.."})]}),p.jsxs("p",{className:"mt-6 text-black text-lg leading-relaxed",children:["Are you a ",p.jsx("span",{className:"font-semibold text-indigo-700",children:"Fresher"}),", feeling confused about which course to choose, what skills to learn, and how to plan your career? Don’t worry — you’re in the right place!"]}),p.jsx("div",{className:"mt-10 max-w-4xl mx-auto",children:p.jsx("h2",{className:"text-2xl font-semibold mb-8 text-[#D25871] text-left",children:"Get a clear roadmap for your career growth..."})})]})}),p.jsxs("div",{className:"absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white animate-bounce",children:[p.jsx("span",{className:"text-[12px] font-bold uppercase tracking-[0.2em]",children:"Explore"}),p.jsx(wS,{className:"w-5 h-5"})]})]}),p.jsxs("div",{className:"bg-gray-50 p-6 md:p-16 font-sans",children:[p.jsx("div",{className:"max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",children:QP.map(o=>p.jsxs("div",{onClick:()=>t(o),className:"p-4 group relative bg-white rounded-[1rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:-translate-y-1",children:[p.jsx("div",{className:`absolute inset-0 bg-gradient-to-t ${o.color} opacity-10`}),p.jsx("div",{className:"h-48 overflow-hidden",children:p.jsx("img",{src:o.image,alt:o.title,className:"w-full rounded-[1rem] h-full object-cover group-hover:scale-110 transition-transform duration-700"})}),p.jsxs("div",{className:"p-8 pt-10 relative ",children:[p.jsx("div",{className:`absolute -top-10 left-8 p-5 rounded-2xl bg-gradient-to-br ${o.color} text-white shadow-xl`,children:o.icon}),p.jsx("h3",{className:"text-xl font-bold text-slate-800 mb-3",children:o.title}),p.jsx("p",{className:"text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2",children:o.shortDesc}),p.jsxs("div",{className:"flex items-center text-blue-800 font-bold text-sm uppercase tracking-wider group-hover:gap-2 transition-all",children:["Explore Roadmap ",p.jsx(RS,{className:"ml-2 w-4 h-4"})]})]})]},o.id))}),e&&p.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md",children:p.jsxs("div",{className:"bg-white w-full max-w-5xl max-h-[95vh] rounded-[1rem] overflow-hidden shadow-2xl relative flex flex-col",children:[p.jsxs("div",{className:`h-40 relative bg-gradient-to-r ${e.color}`,children:[p.jsx("img",{src:e.image,className:"w-full h-full object-cover mix-blend-overlay opacity-50",alt:e.title}),p.jsx("button",{onClick:()=>t(null),className:"absolute top-3 right-3 p-2 bg-white/20 hover:bg-white text-white hover:text-slate-900 rounded-full transition-all z-20",children:p.jsx(da,{className:"w-6 h-6"})}),p.jsxs("div",{className:"absolute bottom-8 left-10 text-white",children:[p.jsx("h2",{className:"text-3xl font-black",children:e.title}),p.jsx("p",{className:"opacity-80",children:"Skillsets & Salary Expectations"})]})]}),p.jsx("div",{className:"p-10 overflow-y-auto flex-1",children:p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[p.jsx("div",{className:"space-y-8",children:e.sections.map((o,s)=>p.jsxs("div",{children:[p.jsx("h4",{className:"text-xs font-black text-blue-600 uppercase tracking-widest mb-4",children:o.title}),p.jsx("div",{className:"flex flex-wrap gap-2",children:o.items.map((i,l)=>p.jsx("span",{className:"px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-700",children:i},l))})]},s))}),p.jsx("div",{className:"relative",children:p.jsx("div",{className:`relative rounded-[2.5rem] p-[1.5px] bg-gradient-to-r ${e.color} shadow-[0_20px_50px_rgba(0,0,0,0.12)]`,children:p.jsxs("div",{className:"relative bg-white/85 backdrop-blur-xl rounded-[2.5rem] p-6 overflow-hidden",children:[p.jsx("div",{className:`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${e.color}`}),p.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[p.jsx("div",{className:`p-4 rounded-2xl bg-gradient-to-r ${e.color} text-white shadow-lg`,children:p.jsx(Uv,{size:20})}),p.jsxs("div",{children:[p.jsx("h4",{className:"text-xl font-bold text-slate-800",children:"Monthly Salaries"}),p.jsx("p",{className:"text-sm text-slate-500",children:"Compensation Structure"})]})]}),p.jsx("div",{className:"space-y-4",children:e.salaries.map((o,s)=>p.jsxs("div",{className:"group relative flex items-center justify-between px-3 py-2 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all duration-300",children:[p.jsx("div",{className:`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 bg-gradient-to-r ${e.color} transition-opacity duration-300`}),p.jsx("span",{className:"relative z-10 font-semibold text-slate-700",children:o.level}),p.jsx("span",{className:`relative z-10 px-5 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r ${e.color}`,children:o.amount})]},s))}),e.note&&p.jsx("div",{className:`mt-5 p-3 rounded-2xl bg-gradient-to-r ${e.color} text-white shadow-inner opacity-90`,children:p.jsx("p",{className:"text-[12px] italic leading-relaxed",children:e.note})})]})})})]})})]})})]}),p.jsx($h,{})]})}const Bs=[{id:1,c:"Core React",q:"What is React?",a:`React (aka React.js or ReactJS) is an open-source front-end JavaScript library for building user interfaces based on components. It's used for handling the view layer in web and mobile applications, and allows developers to create reusable UI components and manage the state of those components efficiently.

React was created by Jordan Walke, a software engineer at Facebook (now Meta). It was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012. The library was open-sourced in May 2013 and has since become one of the most popular JavaScript libraries for building modern user interfaces.`},{id:2,c:"Core React",q:"What is the history behind React evolution?",a:`The history of ReactJS started in 2010 with the creation of XHP. XHP is a PHP extension which improved the syntax of the language such that XML document fragments become valid PHP expressions and the primary purpose was used to create custom and reusable HTML elements.

The main principle of this extension was to make front-end code easier to understand and to help avoid cross-site scripting attacks. The project was successful to prevent the malicious content submitted by the scrubbing user.

But there was a different problem with XHP in which dynamic web applications require many roundtrips to the server, and XHP did not solve this problem. Also, the whole UI was re-rendered for small change in the application. Later, the initial prototype of React is created with the name FaxJ by Jordan inspired from XHP. Finally after sometime React has been introduced as a new library into JavaScript world.

See deep-dive answer
Note: JSX, React's syntax extension, was indeed inspired by XHP's approach of embedding XML-like syntax in code.`},{id:3,c:"Core React",q:"What are the major features of React?",a:`React offers a powerful set of features that have made it one of the most popular JavaScript libraries for building user interfaces:

Core Features:

Component-Based Architecture: React applications are built using components - independent, reusable pieces of code that return HTML via a render function. This modular approach enables better code organization, reusability, and maintenance.

Virtual DOM: React creates an in-memory data structure cache, computes the resulting differences, and efficiently updates only the changed parts in the browser DOM. This approach significantly improves performance compared to direct DOM manipulation.

JSX (JavaScript XML): A syntax extension that allows writing HTML-like code in JavaScript. JSX makes the code more readable and expressive while providing the full power of JavaScript.

Unidirectional Data Flow: React follows a one-way data binding model where data flows from parent to child components. This makes the code more predictable and easier to debug.

Declarative UI: React allows you to describe what your UI should look like for a given state, and it handles the DOM updates when the underlying data changes.

Advanced Features:

React Hooks: Introduced in React 16.8, hooks allow using state and other React features in functional components without writing classes.

Context API: Provides a way to share values between components without explicitly passing props through every level of the component tree.

Error Boundaries: Components that catch JavaScript errors anywhere in their child component tree and display fallback UI instead of crashing.

Server-Side Rendering (SSR): Enables rendering React components on the server before sending HTML to the client, improving performance and SEO.

Concurrent Mode: A set of new features (in development) that help React apps stay responsive and gracefully adjust to the user's device capabilities and network speed.

React Server Components: A new feature that allows components to be rendered entirely on the server, reducing bundle size and improving performance.

Suspense: A feature that lets your components "wait" for something before rendering, supporting code-splitting and data fetching with cleaner code.

These features collectively make React powerful for building everything from small widgets to complex, large-scale web applications.`},{id:4,c:"Core React",q:"What is JSX?",a:`JSX stands for JavaScript XML and it is an XML-like syntax extension to ECMAScript. Basically it just provides the syntactic sugar for the React.createElement(type, props, ...children) function, giving us expressiveness of JavaScript along with HTML like template syntax.

In the example below, the text inside <h1> tag is returned as JavaScript function to the render function.

export default function App() {
  return <h1 className="greeting">{"Hello, this is a JSX Code!"}</h1>;
}
If you don't use JSX syntax then the respective JavaScript code should be written as below,

import { createElement } from "react";

export default function App() {
  return createElement(
    "h1",
    { className: "greeting" },
    "Hello, this is a JSX Code!"
  );
}
See Class
Note: JSX is stricter than HTML`},{id:5,c:"Core React",q:"What is the difference between an Element and a Component?",a:`Element:

A React Element is a plain JavaScript object that describes what you want to see on the UI. It represents a DOM node or a component at a specific point in time.

Elements are immutable: once created, you cannot change their properties. Instead, you create new elements to reflect updates.

Elements can be nested within other elements through their props.

Creating an element is a fast, lightweight operation—it does not create any actual DOM nodes or render anything to the screen directly.

Example (without JSX):

const element = React.createElement("button", { id: "login-btn" }, "Login");
Equivalent JSX syntax:

<button id="login-btn">Login</button>
The object returned by React.createElement:

{
  type: 'button',
  props: {
    id: 'login-btn',
    children: 'Login'
  }
}
Elements are then passed to the React DOM renderer (e.g., ReactDOM.render()), which translates them to actual DOM nodes.

Component:

A Component is a function or class that returns an element (or a tree of elements) to describe part of the UI. Components can accept inputs (called props) and manage their own state (in case of class or function components with hooks).

Components allow you to split the UI into independent, reusable pieces, each isolated and composable.

You can define a component using a function or a class:

Example (Function Component with JSX):

const Button = ({ handleLogin }) => (
  <button id="login-btn" onClick={handleLogin}>
    Login
  </button>
);
When JSX is compiled, it's transformed into a tree of React.createElement calls:

const Button = ({ handleLogin }) =>
  React.createElement(
    "button",
    { id: "login-btn", onClick: handleLogin },
    "Login"
  );
In summary:

Elements are the smallest building blocks in React—objects that describe what you want to see.
Components are functions or classes that return elements and encapsulate logic, structure, and behavior for parts of your UI.
Think of elements as the instructions for creating UI, and components as reusable blueprints that combine logic and structure to generate those instructions.`},{id:6,c:"Core React",q:"How to create components in React?",a:`Components are the building blocks of creating User Interfaces(UI) in React. There are two possible ways to create a component.

Function Components: This is the simplest way to create a component. Those are pure JavaScript functions that accept props object as the one and only one parameter and return React elements to render the output:

function Greeting({ message }) {
  return <h1>{\`Hello, \${message}\`}</h1>;
}
Class Components: You can also use ES6 class to define a component. The above function component can be written as a class component:

class Greeting extends React.Component {
  render() {
    return <h1>{\`Hello, \${this.props.message}\`}</h1>;
  }
}`},{id:7,c:"Core React",q:"When to use a Class Component over a Function Component?",a:`After the addition of Hooks(i.e. React 16.8 onwards) it is always recommended to use Function components over Class components in React. Because you could use state, lifecycle methods and other features that were only available in class component present in function component too.

But even there are two reasons to use Class components over Function components.

If you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries.
In older versions, If the component needs state or lifecycle methods then you need to use class component.
So the summary to this question is as follows:

Use Function Components:

If you don't need state or lifecycle methods, and your component is purely presentational.
For simplicity, readability, and modern code practices, especially with the use of React Hooks for state and side effects.
Use Class Components:

If you need to manage state or use lifecycle methods.
In scenarios where backward compatibility or integration with older code is necessary.
Note: You can also use reusable react error boundary third-party component without writing any class. i.e, No need to use class components for Error boundaries.

The usage of Error boundaries from the above library is quite straight forward.

Note when using react-error-boundary: ErrorBoundary is a client component. You can only pass props to it that are serializable or use it in files that have a "use client"; directive.

"use client";

import { ErrorBoundary } from "react-error-boundary";

<ErrorBoundary fallback={<div>Something went wrong</div>}>
  <ExampleApplication />
</ErrorBoundary>;`},{id:8,c:"Core React",q:"What are Pure Components?",a:`Pure components are the components which render the same output for the same state and props. In function components, you can achieve these pure components through memoized React.memo() API wrapping around the component. This API prevents unnecessary re-renders by comparing the previous props and new props using shallow comparison. So it will be helpful for performance optimizations.

But at the same time, it won't compare the previous state with the current state because function component itself prevents the unnecessary rendering by default when you set the same state again.

The syntactic representation of memoized components looks like below,

const MemoizedComponent = memo(SomeComponent, arePropsEqual?);
Below is the example of how child component(i.e., EmployeeProfile) prevents re-renders for the same props passed by parent component(i.e.,EmployeeRegForm).

import { memo, useState } from "react";

const EmployeeProfile = memo(function EmployeeProfile({ name, email }) {
  return (
    <>
      <p>Name:{name}</p>
      <p>Email: {email}</p>
    </>
  );
});
export default function EmployeeRegForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <label>
        Name:{" "}
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:{" "}
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <hr />
      <EmployeeProfile name={name} />
    </>
  );
}
In the above code, the email prop has not been passed to child component. So there won't be any re-renders for email prop change.

In class components, the components extending React.PureComponent instead of React.Component become the pure components. When props or state changes, PureComponent will do a shallow comparison on both props and state by invoking shouldComponentUpdate() lifecycle method.

Note: React.memo() is a higher-order component.`},{id:9,c:"Core React",q:"What is state in React?",a:`State of a component is an object that holds some information that may change over the lifetime of the component. The important point is whenever the state object changes, the component re-renders. It is always recommended to make our state as simple as possible and minimize the number of stateful components.

state

Let's take an example of User component with message state. Here, useState hook has been used to add state to the User component and it returns an array with current state and function to update it.

import { useState } from "react";

function User() {
  const [message, setMessage] = useState("Welcome to React world");

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}
Whenever React calls your component or access useState hook, it gives you a snapshot of the state for that particular render.

See Class
State is similar to props, but it is private and fully controlled by the component ,i.e., it is not accessible to any other component till the owner component decides to pass it.`},{id:10,c:"Core React",q:"What are props in React?",a:`Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation similar to HTML-tag attributes. Here, the data is passed down from a parent component to a child component.

The primary purpose of props in React is to provide following component functionality:

Pass custom data to your component.
Trigger state changes.
Use via this.props.reactProp inside component's render() method.
For example, let us create an element with reactProp property:

<Element reactProp={"1"} />
This reactProp (or whatever you came up with) attribute name then becomes a property attached to React's native props object which originally already exists on all components created using React library.

props.reactProp;
For example, the usage of props in function component looks like below:

import React from "react";
import ReactDOM from "react-dom";

const ChildComponent = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.gender}</p>
    </div>
  );
};

const ParentComponent = () => {
  return (
    <div>
      <ChildComponent name="John" age="30" gender="male" />
      <ChildComponent name="Mary" age="25" geneder="female" />
    </div>
  );
};
The properties from props object can be accessed directly using destructing feature from ES6 (ECMAScript 2015). It is also possible to fallback to default value when the prop value is not specified. The above child component can be simplified like below.

const ChildComponent = ({ name, age, gender = "male" }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{gender}</p>
    </div>
  );
};
Note: The default value won't be used if you pass null or 0 value. i.e, default value is only used if the prop value is missed or undefined value has been passed.

See Class`},{id:11,c:"Core React",q:"What is the difference between state and props?",a:`In React, both state and props are plain JavaScript objects, but they serve different purposes and have distinct behaviors:

State
Definition:
State is a data structure that is managed within a component. It represents information that can change over the lifetime of the component.
Mutability:
State is mutable, meaning it can be changed using the setter function (setState in class components or the updater function from useState in functional components).
Scope:
State is local to the component where it is defined. Only that component can modify its own state.
Usage:
State is typically used for data that needs to change in response to user actions, network responses, or other dynamic events.
Re-rendering:
Updating the state triggers a re-render of the component and its descendants.
Props
Definition:
Props (short for “properties”) are inputs to a component, provided by its parent component.
Mutability:
Props are read-only. A component cannot modify its own props; they are immutable from the component’s perspective.
Scope:
Props are used to pass data and event handlers down the component tree, enabling parent components to configure or communicate with their children.
Usage:
Props are commonly used to make components reusable and configurable. They allow the same component to be rendered with different data or behavior.
Analogy:
Think of props as arguments to a function, whereas state is like variables declared inside the function.
Summary Table
Feature	State	Props
Managed by	The component itself	Parent component
Mutable	Yes	No (read-only)
Scope	Local to the component	Passed from parent to child
Usage	Manage dynamic data and UI changes	Configure and customize component
Update	Using setState/useState	Cannot be updated by the component`},{id:12,c:"Core React",q:"What is the difference between HTML and React event handling?",a:`Below are some of the main differences between HTML and React event handling,

In HTML, the event name usually represents in lowercase as a convention:

<button onclick="activateLasers()"></button>
Whereas in React it follows camelCase convention:

<button onClick={activateLasers}>
In HTML, you can return false to prevent default behavior:

<a
  href="#"
  onclick='console.log("The link was clicked."); return false;'
/>
Whereas in React you must call preventDefault() explicitly:

function handleClick(event) {
  event.preventDefault();
  console.log("The link was clicked.");
}
In HTML, you need to invoke the function by appending () Whereas in react you should not append () with the function name. (refer "activateLasers" function in the first point for example)`},{id:13,c:"Core React",q:"What are synthetic events in React?",a:`SyntheticEvent is a cross-browser wrapper around the browser's native event. Its API is same as the browser's native event, including stopPropagation() and preventDefault(), except the events work identically across all browsers. The native events can be accessed directly from synthetic events using nativeEvent attribute.

Let's take an example of BookStore title search component with the ability to get all native event properties

function BookStore() {
  function handleTitleChange(e) {
    console.log("The new title is:", e.target.value);
    console.log('Synthetic event:', e); // React SyntheticEvent
    console.log('Native event:', e.nativeEvent); // Browser native event
    e.stopPropagation();
    e.preventDefault();
  }

  return <input name="title" onChange={handleTitleChange} />;
}
List of common synthetic events are:

onClick
onChange
onSubmit
onKeyDown, onKeyUp
onFocus, onBlur
onMouseEnter, onMouseLeave
onTouchStart, onTouchEnd`},{id:14,c:"Core React",q:"What are inline conditional expressions?",a:`You can use either if statements or ternary expressions which are available in JS(and JSX in React) to conditionally execute or render expressions. Apart from these approaches, you can also embed any expressions in JSX by wrapping them in curly braces and then followed by JS logical operator &&. It is helpful to render elements conditionally within a single line and commonly used for concise logic, especially in JSX rendering.

<h1>Hello!</h1>;
{
  messages.length > 0 && !isLogin ? (
    <h2>You have {messages.length} unread messages.</h2>
  ) : (
    <h2>You don't have unread messages.</h2>
  );
}`},{id:15,c:"Core React",q:'What is "key" prop and what is the benefit of using it in arrays of elements?',a:`A key is a special attribute you should include when mapping over arrays to render data. Key prop helps React identify which items have changed, are added, or are removed.

Keys should be unique among its siblings. Most often we use ID from our data as key:

const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
When you don't have stable IDs for rendered items, you may use the item index as a key as a last resort:

const todoItems = todos.map((todo, index) => (
  <li key={index}>{todo.text}</li>
));
Benefits of key:

Enables React to efficiently update and re-render components.
Prevents unnecessary re-renders by reusing components when possible.
Helps maintain internal state of list items correctly.
Note:

Using indexes for keys is not recommended if the order of items may change. This can negatively impact performance and may cause issues with component state.
If you extract list item as separate component then apply keys on list component instead of li tag.
There will be a warning message in the console if the key prop is not present on list items.
The key attribute accepts either string or number and internally convert it as string type.
Don't generate the key on the fly something like key={Math.random()}. Because the keys will never match up between re-renders and DOM created everytime.`},{id:16,c:"Core React",q:"What is Virtual DOM?",a:`The Virtual DOM (VDOM) is a lightweight, in-memory representation of Real DOM used by libraries like React to optimize UI rendering. The representation of a UI is kept in memory and synced with the "real" DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation.`},{id:17,c:"Core React",q:"How Virtual DOM works?",a:`The Virtual DOM works in five simple steps.

1. Initial Render
When a UI component renders for the first time, it returns JSX. React uses this structure to create a Virtual DOM tree, which is a lightweight copy of the actual DOM. This Virtual DOM is then used to build and render the Real DOM in the browser.

2. State or Props Change
When the component's state or props change, React creates a new Virtual DOM reflecting the updated UI. However, it doesn't immediately update the Real DOM; instead, it works in memory to prepare for an efficient update.

vdom

3. Diffing Algorithm
React then compares the new Virtual DOM with the previous one using a process called diffing. It determines what has changed between the two versions and identifies the minimal set of updates needed.

vdom2

4. Reconciliation
Based on the diffing results, React decides which parts of the Real DOM should be updated. It avoids re-rendering the entire DOM and instead updates only the elements that actually changed.

vdom3

5. Efficient DOM Updates
This entire process—working with the Virtual DOM, diffing, and selective updating—makes the UI rendering much faster and more efficient than manipulating the Real DOM directly.`},{id:18,c:"Core React",q:"What is the difference between Shadow DOM and Virtual DOM?",a:`The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The Virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.

The key differences in a table format shown below:

Feature	Shadow DOM	Virtual DOM
Purpose	Encapsulation for Web Components	Efficient UI rendering
Managed by	Browser	JS frameworks (e.g., React)
DOM Type	Part of real DOM (scoped)	In-memory representation
Encapsulation	Yes	No
Use Case	Web Components, scoped styling	UI diffing and minimal DOM updates`},{id:19,c:"Core React",q:"What is React Fiber?",a:"React Fiber is the new reconciliation engine in React, introduced in React 16. It’s a complete rewrite of React’s core algorithm(old stack-based algorithm) for rendering and updating the UI. Fiber enhances React’s ability to handle asynchronous rendering, prioritized updates(assign priority to different types of updates), and interruption(ability to pause, abort, or reuse work) of rendering work, enabling smoother and more responsive user interfaces."},{id:20,c:"Core React",q:"What is the main goal of React Fiber?",a:`The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

Its main goals are:

Incremental Rendering – Breaks work into chunks for smoother updates.
Interruptible Rendering – Pauses and resumes rendering to keep the UI responsive.
Prioritization – Handles high-priority updates (e.g. animations) before low-priority ones.
Concurrency Support – Enables working on multiple UI versions simultaneously.
Better Error Handling – Supports component-level error boundaries.
Suspense Support – Allows waiting for async data before rendering.
Improved DevTools – Enables better debugging and performance tracking.`},{id:21,c:"Core React",q:"What are controlled components?",a:`A controlled component is a React component that fully manages the form element's state(e.g, elements like <input>, <textarea>, or <select>)) using React's internal state mechanism. i.e, The component does not manage its own internal state — instead, React acts as the single source of truth for form data.

The controlled components will be implemented using the below steps,

Initialize the state using useState hooks in function components or inside constructor for class components.
Set the value of the form element to the respective state variable.
Create an event handler(onChange) to handle the user input changes through useState's updater function or setState from class component.
Attach the above event handler to form element's change or click events
Note: React re-renders the component every time the input value changes.

For example, the name input field updates the username using handleChange event handler as below,

import React, { useState } from "react";

function UserProfile() {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <form>
      <label>
        Name:
        <input type="text" value={username} onChange={handleChange} />
      </label>
    </form>
  );
}
In these components, DOM does not hold the actual data instead React does.

Benefits:

Easy to implement validation, conditional formatting, or live feedback.
Full control over form data.
Easier to test and debug because the data is centralized in the component’s state.`},{id:22,c:"Core React",q:"What are uncontrolled components?",a:`The Uncontrolled components are form elements (like <input>, <textarea>, or <select>) that manage their own state internally via the DOM, rather than through React state. You can query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

The uncontrolled components will be implemented using the below steps,

Create a ref using useRef react hook in function component or React.createRef() in class based component.
Attach this ref to the form element.
The form element value can be accessed directly through ref in event handlers or componentDidMount for class components
In the below UserProfile component, the username input is accessed using ref.

import React, { useRef } from "react";

function UserProfile() {
  const usernameRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("The submitted username is: " + usernameRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" ref={usernameRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
Note: Here, DOM is in charge of the value. React only accesses the value when needed (via ref).

Benefits:

Less boilerplate — no need for useState and onChange.
Useful for quick form setups or when integrating with non-React code.
Slightly better performance in very large forms (fewer re-renders).
In most cases, it's recommend to use controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

See Class`},{id:23,c:"Core React",q:"What is the difference between createElement and cloneElement?",a:`Both React.createElement and React.cloneElement are used to work with React elements, but they serve different purposes.

createElement:
Creates a new React element from scratch. JSX elements will be transpiled to React.createElement() functions to create React elements which are going to be used for the object representation of UI. Syntax:

React.createElement(type, props, ...children)
Example:

React.createElement('button', { className: 'btn' }, 'Click Me')
cloneElement:
The cloneElement method is used to clone an existing React element and optionally adds or overrides props.

Syntax:

React.cloneElement(element, newProps, ...children)
Example:

const button = <button className="btn">Click Me</button>;
const cloned = React.cloneElement(button, { className: 'btn-primary' });
// Result: <button className="btn-primary">Click Me</button>`},{id:24,c:"Core React",q:"What is Lifting State Up in React?",a:"When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components."},{id:25,c:"Core React",q:"What are Higher-Order Components?",a:`A higher-order component (HOC) is a function that takes a component and returns a new enhanced component with additional props, behavior, or data. It’s a design pattern based on React’s compositional nature, allowing you to reuse logic across multiple components without modifying their internals.

We consider HOCs pure components because they don’t mutate or copy behavior from the original component—they simply wrap it, enhance it, and pass through the necessary props. The wrapped component remains decoupled and reusable.

const EnhancedComponent = higherOrderComponent(WrappedComponent);
Let's take an example of a withAuth higher-order component (HOC) in React. This HOC will check if a user is authenticated and either render the wrapped component if authenticated or redirect (or show a message) if not.

withAuth HOC Example:

import React from 'react';
import { Navigate } from 'react-router-dom'; // For redirection (assuming React Router v6)

const isAuthenticated = () => {
  // e.g., check for a valid token in localStorage or context
  return !!localStorage.getItem('authToken');
};

function withAuth(WrappedComponent) {
  return function AuthenticatedComponent(props) {
    if (!isAuthenticated()) {
      // User is NOT authenticated, redirect to login page
      return <Navigate to="/login" replace />;
    }

    // User is authenticated, render the wrapped component
    return <WrappedComponent {...props} />;
  };
}

export default withAuth;
Usage

import React from 'react';
import withAuth from './withAuth';

function Dashboard() {
  return <h1>Welcome to the Dashboard!</h1>;
}

// Wrap Dashboard with withAuth HOC
export default withAuth(Dashboard);
HOC can be used for many use cases:

Code reuse, logic and bootstrap abstraction (e.g., fetching data, permissions, theming).
Render hijacking (e.g., conditional rendering or layout changes).
State abstraction and manipulation(e.g., handling form logic).
Props manipulation(e.g., injecting additional props or filtering them).
Some of the real-world examples of HOCs in react eco-system:

connect() from react-redux
withRouter() from React Router v5
withTranslation() from react-i18next
withApollo() from Apollo client
withFormik from Formik library
withTheme from styled components`},{id:26,c:"Core React",q:"What is children prop?",a:`The children prop is a special prop in React used to pass elements between the opening and closing tags of a component. It is commonly used in layout and wrapper componnents.

A simple usage of children prop looks as below,

function MyDiv({ children }){
    return (
      <div>
        {children}
      </div>;
    );
}

export default function Greeting() {
  return (
    <MyDiv>
      <span>{"Hello"}</span>
      <span>{"World"}</span>
    </MyDiv>
  );
}
Here, everything inside <MyDiv>...</MyDiv> is passed as children to the custom div component.

The children can be text, JSX elements, fragments, arrays and functions(for advance use case like render props).

See Class
Note: There are several methods available in the legacy React API to work with this prop. These include React.Children.map, React.Children.forEach, React.Children.count, React.Children.only, React.Children.toArray.`},{id:27,c:"Core React",q:"How to write comments in React?",a:`The comments in React/JSX are similar to JavaScript Multiline comments but are wrapped in curly braces.

Single-line comments:

<div>
  {/* Single-line comments(In vanilla JavaScript, the single-line comments are represented by double slash(//)) */}
  {\`Welcome \${user}, let's play React\`}
</div>
Multi-line comments:

<div>
  {/* Multi-line comments for more than
   one line */}
  {\`Welcome \${user}, let's play React\`}
</div>
You can use // and /* */ in JS logic, hooks, and functions.`},{id:28,c:"Core React",q:"What is reconciliation?",a:"Reconciliation is the process through which React updates the Browser DOM and makes React work faster. React use a diffing algorithm so that component updates are predictable and faster. React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update of components. React stores a copy of Browser DOM which is called Virtual DOM. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. This comparison is done by Diffing Algorithm. Now React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation."},{id:29,c:"Core React",q:"Does the lazy function support named exports?",a:`No, currently React.lazy function supports default exports only. If you would like to import modules which are named exports, you can create an intermediate module that reexports it as the default. It also ensures that tree shaking keeps working and don’t pull unused components. Let's take a component file which exports multiple named components,

// MoreComponents.js
export const SomeComponent = /* ... */;
export const UnusedComponent = /* ... */;
and reexport MoreComponents.js components in an intermediate file IntermediateComponent.js

// IntermediateComponent.js
export { SomeComponent as default } from "./MoreComponents.js";
Now you can import the module using lazy function as below,

import React, { lazy } from "react";
const SomeComponent = lazy(() => import("./IntermediateComponent.js"));`},{id:30,c:"Core React",q:"Why React uses className over class attribute?",a:`React uses className instead of class because of a JavaScript naming conflict with the class keyword.

class is a reserved keyword in JavaScript In JavaScript, class is used to define ES6 classes:

class Person {
  constructor(name) {
    this.name = name;
  }
}
If you try to use class as a variable or property name, it will throw a syntax error. Since JSX is just JavaScript with XML-like syntax, using class directly in JSX would break the parser.

JSX Is JavaScript

When you write JSX like this:

<div class="btn">Click</div>
It will be compiled to:

React.createElement('div', { class: 'btn' }, 'Click');
But class is invalid in this object literal context (since it clashes with the JS keyword), hence React instead uses className.

<div className="btn">Click</div>
which compiles to:

React.createElement('div', { className: 'btn' }, 'Click');
React then translates className to class in the final HTML DOM.

Aligns with DOM APIs In vanilla JavaScript, you interact with element classes using:

element.className = 'my-class';
React follows this convention, staying consistent with the DOM API's property name rather than HTML’s attribute.`},{id:31,c:"Core React",q:"What are fragments?",a:`It's a common pattern or practice in React for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM. You need to use either <Fragment> or a shorter syntax having empty tag (<></>).

Below is the example of how to use fragment inside Story component.

function Story({ title, description, date }) {
  return (
    <Fragment>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{date}</p>
    </Fragment>
  );
}
It is also possible to render list of fragments inside a loop with the mandatory key attribute supplied.

function StoryBook() {
  return stories.map((story) => (
    <Fragment key={story.id}>
      <h2>{story.title}</h2>
      <p>{story.description}</p>
      <p>{story.date}</p>
    </Fragment>
  ));
}
Usually, you don't need to use <Fragment> until there is a need of key attribute. The usage of shorter syntax looks like below.

function Story({ title, description, date }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{date}</p>
    </>
  );
}`},{id:32,c:"Core React",q:"Why fragments are better than container divs?",a:`Below are the list of reasons to prefer fragments over container DOM elements,

Fragments are a bit faster and use less memory by not creating an extra DOM node. This only has a real benefit on very large and deep trees.
Some CSS mechanisms like Flexbox and CSS Grid have a special parent-child relationships, and adding divs in the middle makes it hard to keep the desired layout.
The DOM Inspector is less cluttered.`},{id:33,c:"Core React",q:"What are portals in React?",a:`A Portal is a React feature that enables rendering children into a DOM node that exists outside the parent component's DOM hierarchy, while still preserving the React component hierarchy. Portals help avoid CSS stacking issues—for example, elements with position: fixed may not behave as expected inside a parent with transform. Portals solve this by rendering content (like modals or tooltips) outside such constrained DOM contexts.

ReactDOM.createPortal(child, container);
child: Any valid React node (e.g., JSX, string, fragment).
container: A real DOM node (e.g., document.getElementById('modal-root')).
Even though the content renders elsewhere in the DOM, it still behaves like a normal child in React. It has access to context, state, and event handling.

Example:- Modal:

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.body)
  );
}
The above code will render the modal content into the body element in the HTML, not inside the component's usual location.`},{id:34,c:"Core React",q:"What are stateless components?",a:"If the behaviour of a component is independent of its state then it can be a stateless component. You can use either a function or a class for creating stateless components. But unless you need to use a lifecycle hook in your components, you should go for function components. There are a lot of benefits if you decide to use function components here; they are easy to write, understand, and test, a little faster, and you can avoid the this keyword altogether."},{id:35,c:"Core React",q:"What are stateful components?",a:`If the behaviour of a component is dependent on the state of the component then it can be termed as stateful component. These stateful components are either function components with hooks or class components.

Let's take an example of function stateful component which update the state based on click event,

import React, {useState} from 'react';

const App = (props) => {
const [count, setCount] = useState(0);
handleIncrement() {
  setCount(count+1);
}

return (
  <>
    <button onClick={handleIncrement}>Increment</button>
    <span>Counter: {count}</span>
  </>
  )
}
See Class`},{id:36,c:"Core React",q:"How to apply validation on props in React?",a:`When the application is running in development mode, React will automatically check all props that we set on components to make sure they have correct type. If the type is incorrect, React will generate warning messages in the console. It's disabled in production mode due to performance impact. The mandatory props are defined with isRequired.

The set of predefined prop types:

PropTypes.number
PropTypes.string
PropTypes.array
PropTypes.object
PropTypes.func
PropTypes.node
PropTypes.element
PropTypes.bool
PropTypes.symbol
PropTypes.any
We can define propTypes for User component as below:

import React from "react";
import PropTypes from "prop-types";

class User extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  };

  render() {
    return (
      <>
        <h1>{\`Welcome, \${this.props.name}\`}</h1>
        <h2>{\`Age, \${this.props.age}\`}</h2>
      </>
    );
  }
}
Note: In React v15.5 PropTypes were moved from React.PropTypes to prop-types library.

Modern Recommendation: While PropTypes are still supported, TypeScript is now the industry standard for type checking in React applications. Consider using TypeScript for better type safety, IDE support, and compile-time error detection.

The Equivalent Functional Component

import React from "react";
import PropTypes from "prop-types";

function User({ name, age }) {
  return (
    <>
      <h1>{\`Welcome, \${name}\`}</h1>
      <h2>{\`Age, \${age}\`}</h2>
    </>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
Modern TypeScript Version

import React from "react";

interface UserProps {
  name: string;
  age: number;
}

function User({ name, age }: UserProps) {
  return (
    <>
      <h1>{\`Welcome, \${name}\`}</h1>
      <h2>{\`Age, \${age}\`}</h2>
    </>
  );
}`},{id:37,c:"Core React",q:"What are the advantages of React?",a:`Below are the list of main advantages of React,

Increases the application's performance with Virtual DOM.
JSX makes code easy to read and write.
It renders both on client and server side (SSR).
Easy to integrate with frameworks (Angular, Backbone) since it is only a view library.
Easy to write unit and integration tests with tools such as Jest.`},{id:38,c:"Core React",q:"What are the limitations of React?",a:`Apart from the advantages, there are few limitations of React too,

React is just a view library, not a full framework.
There is a learning curve for beginners who are new to web development.
Integrating React into a traditional MVC framework requires some additional configuration.
The code complexity increases with inline templating and JSX.
Too many smaller components leading to over engineering or boilerplate.`},{id:39,c:"Core React",q:"What are the recommended ways for static type checking?",a:`Modern Recommendation (2026): TypeScript is the industry standard for type checking in React applications.

While PropTypes (React.PropTypes moved to prop-types package since React v15.5) are still available for runtime type checking, they have significant limitations:

Only check types at runtime
No compile-time errors
Limited IDE autocomplete support
No inference for complex types
TypeScript is now the recommended approach because it provides:

Compile-time type checking
Excellent IDE support with IntelliSense
Type inference and generic types
Better refactoring capabilities
Growing ecosystem and community support
Note: Flow (Facebook's type checker) has seen declining adoption and is rarely used in new projects.

Example with TypeScript:

interface UserProps {
  name: string;
  age: number;
  isActive?: boolean;
}

function User({ name, age, isActive = true }: UserProps) {
  return <div>{name} - {age}</div>;
}`},{id:40,c:"Core React",q:"What is the use of react-dom package?",a:`The react-dom package provides DOM-specific methods that can be used at the top level of your app. Most of the components are not required to use this module. Some of the methods of this package are:

render()
hydrate()
unmountComponentAtNode()
findDOMNode()
createPortal()`},{id:41,c:"Core React",q:"What is ReactDOMServer?",a:`The ReactDOMServer object enables you to render components to static markup (typically used on node server). This object is mainly used for server-side rendering (SSR). The following methods can be used in both the server and browser environments:

renderToString()
renderToStaticMarkup()
For example, you generally run a Node-based web server like Express, Hapi, or Koa, and you call renderToString to render your root component to a string, which you then send as response.

// using Express
import { renderToString } from "react-dom/server";
import MyPage from "./MyPage";

app.get("/", (req, res) => {
  res.write(
    "<!DOCTYPE html><html><head><title>My Page</title></head><body>"
  );
  res.write('<div id="content">');
  res.write(renderToString(<MyPage />));
  res.write("</div></body></html>");
  res.end();
});`},{id:42,c:"Core React",q:"How to use innerHTML in React?",a:`The dangerouslySetInnerHTML attribute is React's replacement for using innerHTML in the browser DOM. Just like innerHTML, it is risky to use this attribute considering cross-site scripting (XSS) attacks. You just need to pass a __html object as key and HTML text as value.

In this example MyComponent uses dangerouslySetInnerHTML attribute for setting HTML markup:

function createMarkup() {
  return { __html: "First &middot; Second" };
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}`},{id:43,c:"Core React",q:"How to use styles in React?",a:`The style attribute accepts a JavaScript object with camelCased properties rather than a CSS string. This is consistent with the DOM style JavaScript property, is more efficient, and prevents XSS security holes.

const divStyle = {
  color: "blue",
  backgroundImage: "url(" + imgUrl + ")",
};

function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>;
}
Style keys are camelCased in order to be consistent with accessing the properties on DOM nodes in JavaScript (e.g. node.style.backgroundImage).`},{id:44,c:"Core React",q:"How events are different in React?",a:`Handling events in React elements has some syntactic differences:

React event handlers are named using camelCase, rather than lowercase.
With JSX you pass a function as the event handler, rather than a string.`},{id:45,c:"Core React",q:"What is the impact of indexes as keys?",a:`Keys should be stable, predictable, and unique so that React can keep track of elements.

In the below code snippet each element's key will be based on ordering, rather than tied to the data that is being represented. This limits the optimizations that React can do and creates confusing bugs in the application.

{
  todos.map((todo, index) => <Todo {...todo} key={index} />);
}
If you use element data for unique key, assuming todo.id is unique to this list and stable, React would be able to reorder elements without needing to reevaluate them as much.

{
  todos.map((todo) => <Todo {...todo} key={todo.id} />);
}
Note: If you don't specify key prop at all, React will use index as a key's value while iterating over an array of data.`},{id:46,c:"Core React",q:"How do you conditionally render components?",a:`In some cases you want to render different components depending on some state. JSX does not render false or undefined, so you can use conditional short-circuiting to render a given part of your component only if a certain condition is true.

const MyComponent = ({ name, address }) => (
  <div>
    <h2>{name}</h2>
    {address && <p>{address}</p>}
  </div>
);
If you need an if-else condition then use ternary operator.

const MyComponent = ({ name, address }) => (
  <div>
    <h2>{name}</h2>
    {address ? <p>{address}</p> : <p>{"Address is not available"}</p>}
  </div>
);`},{id:47,c:"Core React",q:"Why we need to be careful when spreading props on DOM elements?",a:`When we spread props we run into the risk of adding unknown HTML attributes, which is a bad practice. Instead we can use prop destructuring with ...rest operator, so it will add only required props.

For example,

const ComponentA = () => (
  <ComponentB isDisplay={true} className={"componentStyle"} />
);

const ComponentB = ({ isDisplay, ...domProps }) => (
  <div {...domProps}>{"ComponentB"}</div>
);`},{id:48,c:"Core React",q:"How do you memoize a component?",a:`There are memoize libraries available which can be used on function components.

For example moize library can memoize the component in another component.

import moize from "moize";
import Component from "./components/Component"; // this module exports a non-memoized component

const MemoizedFoo = moize.react(Component);

const Consumer = () => {
  <div>
    {"I will memoize the following entry:"}
    <MemoizedFoo />
  </div>;
};
Update: Since React v16.6.0, we have a React.memo. It provides a higher order component which memoizes component unless the props change. To use it, simply wrap the component using React.memo before you use it.

const MemoComponent = React.memo(function MemoComponent(props) {
  /* render using props */
});
OR;
export default React.memo(MyFunctionComponent);`},{id:49,c:"Core React",q:"How you implement Server Side Rendering or SSR?",a:`React is already equipped to handle rendering on Node servers. A special version of the DOM renderer is available, which follows the same pattern as on the client side.

import ReactDOMServer from "react-dom/server";
import App from "./App";

ReactDOMServer.renderToString(<App />);
This method will output the regular HTML as a string, which can be then placed inside a page body as part of the server response. On the client side, React detects the pre-rendered content and seamlessly picks up where it left off.`},{id:50,c:"Core React",q:"How to enable production mode in React?",a:"You should use Webpack's DefinePlugin method to set NODE_ENV to production, by which it strip out things like propType validation and extra warnings. Apart from this, if you minify the code, for example, Uglify's dead-code elimination to strip out development only code and comments, it will drastically reduce the size of your bundle."},{id:51,c:"Core React",q:"Do Hooks replace render props and higher order components?",a:"Both render props and higher-order components render only a single child but in most of the cases Hooks are a simpler way to serve this by reducing nesting in your tree."},{id:52,c:"Core React",q:"What is a switching component?",a:`A switching component is a component that renders one of many components. We need to use object to map prop values to components.

For example, a switching component to display different pages based on page prop:

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ServicesPage from "./ServicesPage";
import ContactPage from "./ContactPage";

const PAGES = {
  home: HomePage,
  about: AboutPage,
  services: ServicesPage,
  contact: ContactPage,
};

const Page = (props) => {
  const Handler = PAGES[props.page] || ContactPage;

  return <Handler {...props} />;
};

// The keys of the PAGES object can be used in the prop types to catch dev-time errors.
Page.propTypes = {
  page: PropTypes.oneOf(Object.keys(PAGES)).isRequired,
};`},{id:53,c:"Core React",q:"What are the Pointer Events supported in React?",a:`Pointer Events provide a unified way of handling all input events. In the old days we had a mouse and respective event listeners to handle them but nowadays we have many devices which don't correlate to having a mouse, like phones with touch surface or pens. We need to remember that these events will only work in browsers that support the Pointer Events specification.

The following event types are now available in React DOM:

onPointerDown
onPointerMove
onPointerUp
onPointerCancel
onGotPointerCapture
onLostPointerCapture
onPointerEnter
onPointerLeave
onPointerOver
onPointerOut`},{id:54,c:"Core React",q:"Why should component names start with capital letter?",a:`If you are rendering your component using JSX, the name of that component has to begin with a capital letter otherwise React will throw an error as an unrecognized tag. This convention is because only HTML elements and SVG tags can begin with a lowercase letter.

function SomeComponent {
  // Code goes here
}
You can define function component whose name starts with lowercase letter, but when it's imported it should have a capital letter. Here lowercase is fine:

function myComponent {
  render() {
    return <div />;
  }
}

export default myComponent;
While when imported in another file it should start with capital letter:

import MyComponent from "./myComponent";`},{id:55,c:"Core React",q:"Are custom DOM attributes supported in React v16?",a:`Note: This question references React v16, which is outdated. The information below applies to React 16+, including current versions (React 18/19).

Yes. Starting with React 16, React no longer ignores unknown DOM attributes. If you write JSX with an attribute that React doesn't recognize, React will pass it through to the DOM.

For example, let's take a look at the below attribute:

<div mycustomattribute={"something"} />
In React 15 and earlier, this would render an empty div:

<div />
In React 16 and later (including React 18/19), any unknown attributes will end up in the DOM:

<div mycustomattribute="something" />
This is useful for supplying browser-specific non-standard attributes, trying new DOM APIs, and integrating with opinionated third-party libraries.`},{id:56,c:"Core React",q:"How to loop inside JSX?",a:`You can simply use Array.prototype.map with ES6 arrow function syntax.

For example, the items array of objects is mapped into an array of components:

<tbody>
  {items.map((item) => (
    <SomeComponent key={item.id} name={item.name} />
  ))}
</tbody>
But you can't iterate using for loop:

<tbody>
  for (let i = 0; i < items.length; i++) {
    <SomeComponent key={items[i].id} name={items[i].name} />
  }
</tbody>
This is because JSX tags are transpiled into function calls, and you can't use statements inside expressions. This may change thanks to do expressions which are stage 1 proposal.`},{id:57,c:"Core React",q:"How do you access props in attribute quotes?",a:`React (or JSX) doesn't support variable interpolation inside an attribute value. The below representation won't work:

<img className="image" src="images/{this.props.image}" />
But you can put any JS expression inside curly braces as the entire attribute value. So the below expression works:

<img className="image" src={"images/" + this.props.image} />
Using template strings will also work:

<img className="image" src={\`images/\${this.props.image}\`} />`},{id:58,c:"Core React",q:"What is React proptype array with shape?",a:`If you want to pass an array of objects to a component with a particular shape then use React.PropTypes.shape() as an argument to React.PropTypes.arrayOf().

ReactComponent.propTypes = {
  arrayWithShape: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      color: React.PropTypes.string.isRequired,
      fontSize: React.PropTypes.number.isRequired,
    })
  ).isRequired,
};`},{id:59,c:"Core React",q:"How to conditionally apply class attributes?",a:`You shouldn't use curly braces inside quotes because it is going to be evaluated as a string.

<div className="btn-panel {this.props.visible ? 'show' : 'hidden'}">
Instead you need to move curly braces outside (don't forget to include spaces between class names):

<div className={'btn-panel ' + (this.props.visible ? 'show' : 'hidden')}>
Template strings will also work:

<div className={\`btn-panel \${this.props.visible ? 'show' : 'hidden'}\`}>`},{id:60,c:"Core React",q:"What is the difference between React and ReactDOM?",a:"The react package contains React.createElement(), React.Component, React.Children, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains ReactDOM.render(), and in react-dom/server we have server-side rendering support with ReactDOMServer.renderToString() and ReactDOMServer.renderToStaticMarkup()."},{id:61,c:"Core React",q:"Why ReactDOM is separated from React?",a:`The React team worked on extracting all DOM-related features into a separate library called ReactDOM. React v0.14 is the first release in which the libraries are split. By looking at some of the packages, react-native, react-art, react-canvas, and react-three, it has become clear that the beauty and essence of React has nothing to do with browsers or the DOM.

To build more environments that React can render to, React team planned to split the main React package into two: react and react-dom. This paves the way to writing components that can be shared between the web version of React and React Native.`},{id:62,c:"Core React",q:"How to use React label element?",a:`If you try to render a <label> element bound to a text input using the standard for attribute, then it produces HTML missing that attribute and prints a warning to the console.

<label for={'user'}>{'User'}</label>
<input type={'text'} id={'user'} />
Since for is a reserved keyword in JavaScript, use htmlFor instead.

<label htmlFor={'user'}>{'User'}</label>
<input type={'text'} id={'user'} />`},{id:63,c:"Core React",q:"How to combine multiple inline style objects?",a:`You can use spread operator in regular React:

<button style={{ ...styles.panel.button, ...styles.panel.submitButton }}>
  {"Submit"}
</button>
If you're using React Native then you can use the array notation:

<button style={[styles.panel.button, styles.panel.submitButton]}>
  {"Submit"}
</button>`},{id:64,c:"Core React",q:"How to re-render the view when the browser is resized?",a:`You can use the useState hook to manage the width and height state variables, and the useEffect hook to add and remove the resize event listener. The [] dependency array passed to useEffect ensures that the effect only runs once (on mount) and not on every re-render.

import React, { useState, useEffect } from "react";
function WindowDimensions() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <span>
      {dimensions.width} x {dimensions.height}
    </span>
  );
}
Using Class Component`},{id:65,c:"Core React",q:"How to pretty print JSON with React?",a:`We can use <pre> tag so that the formatting of the JSON.stringify() is retained:

const data = { name: "John", age: 42 };

function User {
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

const container = createRoot(document.getElementById("container"));

container.render(<User />);
See Class`},{id:66,c:"Core React",q:"Why can't you update props in React?",a:"The React philosophy is that props should be immutable(read only) and top-down. This means that a parent can send any prop values to a child, but the child can't modify received props."},{id:67,c:"Core React",q:"How to focus an input element on page load?",a:`You need to use useEffect hook to set focus on input field during page load time for functional component.

import React, { useEffect, useRef } from "react";

const App = () => {
  const inputElRef = useRef(null);

  useEffect(() => {
    inputElRef.current.focus();
  }, []);

  return (
    <div>
      <input defaultValue={"Won't focus"} />
      <input ref={inputElRef} defaultValue={"Will focus"} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
See Class`},{id:68,c:"Core React",q:"How can we find the version of React at runtime in the browser?",a:`You can use React.version to get the version.

const REACT_VERSION = React.version;

ReactDOM.render(
  <div>{\`React version: \${REACT_VERSION}\`}</div>,
  document.getElementById("app")
);`},{id:69,c:"Core React",q:"How to add Google Analytics for React Router?",a:`Add a listener on the history object to record each page view:

history.listen(function (location) {
  window.ga("set", "page", location.pathname + location.search);
  window.ga("send", "pageview", location.pathname + location.search);
});`},{id:70,c:"Core React",q:"How do you apply vendor prefixes to inline styles in React?",a:`React does not apply vendor prefixes automatically. You need to add vendor prefixes manually.

<div
  style={{
    transform: "rotate(90deg)",
    WebkitTransform: "rotate(90deg)", // note the capital 'W' here
    msTransform: "rotate(90deg)", // 'ms' is the only lowercase vendor prefix
  }}
/>`},{id:71,c:"Core React",q:"How to import and export components using React and ES6?",a:`You should use default for exporting the components

import User from "user";

export default function MyProfile {
    return <User type="customer">//...</User>;
}
See Class`},{id:72,c:"Core React",q:"What are the exceptions on React component naming?",a:`The component names should start with an uppercase letter but there are few exceptions to this convention. The lowercase tag names with a dot (property accessors) are still considered as valid component names. For example, the below tag can be compiled to a valid component,

     render() {
          return (
            <obj.component/> // \`React.createElement(obj.component)\`
          )
    }`},{id:73,c:"Core React",q:"Is it possible to use async/await in plain React?",a:`Yes, you can use async/await in plain React, as long as your JavaScript environment supports ES2017+. Nowadays most modern browsers and build tools support ES2017+ version. If you're using Create React App, Next.js, Remix, or any modern React setup, async/await is supported out of the box through Babel.

Example Usage
import { useEffect, useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('/api/user');
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, []);

  return user ? <div>Hello, {user.name}</div> : <div>Loading...</div>;
}
But If you're not using a bundler like Webpack or Babel, you will need Babel and transform-async-to-generator plugin. However, React Native ships with Babel and a set of transforms.`},{id:74,c:"Core React",q:"What are the common folder structures for React?",a:`There are two common practices for React project file structure.

Grouping by features or routes:
One common way to structure projects is locate CSS, JS, and tests together, grouped by feature or route.

common/
├─ Avatar.js
├─ Avatar.css
├─ APIUtils.js
└─ APIUtils.test.js
feed/
├─ index.js
├─ Feed.js
├─ Feed.css
├─ FeedStory.js
├─ FeedStory.test.js
└─ FeedAPI.js
profile/
├─ index.js
├─ Profile.js
├─ ProfileHeader.js
├─ ProfileHeader.css
└─ ProfileAPI.js
Grouping by file type:
Another popular way to structure projects is to group similar files together.

api/
├─ APIUtils.js
├─ APIUtils.test.js
├─ ProfileAPI.js
└─ UserAPI.js
components/
├─ Avatar.js
├─ Avatar.css
├─ Feed.js
├─ Feed.css
├─ FeedStory.js
├─ FeedStory.test.js
├─ Profile.js
├─ ProfileHeader.js
└─ ProfileHeader.css`},{id:75,c:"Core React",q:"What are the popular packages for animation?",a:"React Transition Group and React Motion are popular animation packages in React ecosystem."},{id:76,c:"Core React",q:"What is the benefit of styles modules?",a:`It is recommended to avoid hard coding style values in components. Any values that are likely to be used across different UI components should be extracted into their own modules.

For example, these styles could be extracted into a separate component:

export const colors = {
  white,
  black,
  blue,
};

export const space = [0, 8, 16, 32, 64];
And then imported individually in other components:

import { space, colors } from "./styles";`},{id:77,c:"Core React",q:"What are the popular React-specific linters?",a:`ESLint is a popular JavaScript linter. There are plugins available that analyse specific code styles. One of the most common for React is an npm package called eslint-plugin-react. By default, it will check a number of best practices, with rules checking things from keys in iterators to a complete set of prop types.

Another popular plugin is eslint-plugin-jsx-a11y, which will help fix common issues with accessibility. As JSX offers slightly different syntax to regular HTML, issues with alt text and tabindex, for example, will not be picked up by regular plugins.`},{id:78,c:"Routing",q:"What is React Router?",a:"React Router is a powerful routing library built on top of React that helps you add new screens and flows to your application incredibly quickly, all while keeping the URL in sync with what's being displayed on the page."},{id:79,c:"Routing",q:"How React Router is different from history library?",a:"React Router is a wrapper around the history library which handles interaction with the browser's window.history with its browser and hash histories. It also provides memory history which is useful for environments that don't have global history, such as mobile app development (React Native) and unit testing with Node."},{id:80,c:"Routing",q:"What are the <Router> components of React Router v6?",a:`React Router v6 provides below 4 <Router> components:

<BrowserRouter>:Uses the HTML5 history API for standard web apps.
<HashRouter>:Uses hash-based routing for static servers.
<MemoryRouter>:Uses in-memory routing for testing and non-browser environments.
<StaticRouter>:Provides static routing for server-side rendering (SSR).
The above components will create browser, hash, memory and static history instances. React Router v6 makes the properties and methods of the history instance associated with your router available through the context in the router object.`},{id:81,c:"Routing",q:"What is the purpose of push() and replace() methods of history?",a:`A history instance has two methods for navigation purpose.

push()
replace()
If you think of the history as an array of visited locations, push() will add a new location to the array and replace() will replace the current location in the array with the new one.`},{id:82,c:"Routing",q:"How do you programmatically navigate using React Router v4?",a:`There are three different ways to achieve programmatic routing/navigation within components.

Using the withRouter() higher-order function:

The withRouter() higher-order function will inject the history object as a prop of the component. This object provides push() and replace() methods to avoid the usage of context.

import { withRouter } from "react-router-dom"; // this also works with 'react-router-native'

const Button = withRouter(({ history }) => (
  <button
    type="button"
    onClick={() => {
      history.push("/new-location");
    }}
  >
    {"Click Me!"}
  </button>
));
Using <Route> component and render props pattern:

The <Route> component passes the same props as withRouter(), so you will be able to access the history methods through the history prop.

import { Route } from "react-router-dom";

const Button = () => (
  <Route
    render={({ history }) => (
      <button
        type="button"
        onClick={() => {
          history.push("/new-location");
        }}
      >
        {"Click Me!"}
      </button>
    )}
  />
);
Using context:

This option is not recommended and treated as unstable API.

const Button = (props, context) => (
  <button
    type="button"
    onClick={() => {
      context.history.push("/new-location");
    }}
  >
    {"Click Me!"}
  </button>
);

Button.contextTypes = {
  history: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired,
  }),
};`},{id:83,c:"Routing",q:"How to get query parameters in React Router v4?",a:`The ability to parse query strings was taken out of React Router v4 because there have been user requests over the years to support different implementation. So the decision has been given to users to choose the implementation they like. The recommended approach is to use query strings library.

const queryString = require("query-string");
const parsed = queryString.parse(props.location.search);
You can also use URLSearchParams if you want something native:

const params = new URLSearchParams(props.location.search);
const foo = params.get("name");
You should use a polyfill for IE11.`},{id:84,c:"Routing",q:'Why you get "Router may have only one child element" warning?',a:`You have to wrap your Route's in a <Switch> block because <Switch> is unique in that it renders a route exclusively.

At first you need to add Switch to your imports:

import { Switch, Router, Route } from "react-router";
Then define the routes within <Switch> block:

<Router>
  <Switch>
    <Route {/* ... */} />
    <Route {/* ... */} />
  </Switch>
</Router>`},{id:85,c:"Routing",q:"How to pass params to history.push method in React Router v4?",a:`While navigating you can pass props to the history object:

this.props.history.push({
  pathname: "/template",
  search: "?name=sudheer",
  state: { detail: response.data },
});
The search property is used to pass query params in push() method.`},{id:86,c:"Routing",q:"How to implement default or NotFound page?",a:`A <Switch> renders the first child <Route> that matches. A <Route> with no path always matches. So you just need to simply drop path attribute as below

<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/user" component={User} />
  <Route component={NotFound} />
</Switch>`},{id:87,c:"Routing",q:"How to get history on React Router v4?",a:`Below are the list of steps to get history object on React Router v4,

Create a module that exports a history object and import this module across the project.

For example, create history.js file:

import { createBrowserHistory } from "history";

export default createBrowserHistory({
  /* pass a configuration object here if needed */
});
You should use the <Router> component instead of built-in routers. Import the above history.js inside index.js file:

import { Router } from "react-router-dom";
import history from "./history";
import App from "./App";

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  holder
);
You can also use push method of history object similar to built-in history object:

// some-other-file.js
import history from "./history";

history.push("/go-here");`},{id:88,c:"Routing",q:"How to perform automatic redirect after login?",a:`The react-router package provides <Redirect> component in React Router. Rendering a <Redirect> will navigate to a new location. Like server-side redirects, the new location will override the current location in the history stack.

import { Redirect } from "react-router";

export default function Login {
    if (this.state.isLoggedIn === true) {
      return <Redirect to="/your/redirect/page" />;
    } else {
      return <div>{"Login Please"}</div>;
    }
}
See Class`},{id:89,c:"Internationalization",q:"What is React Intl?",a:"The React Intl library makes internationalization in React straightforward, with off-the-shelf components and an API that can handle everything from formatting strings, dates, and numbers, to pluralization. React Intl is part of FormatJS which provides bindings to React via its components and API."},{id:90,c:"Internationalization",q:"What are the main features of React Intl?",a:`Below are the main features of React Intl,

Display numbers with separators.
Display dates and times correctly.
Display dates relative to "now".
Pluralize labels in strings.
Support for 150+ languages.
Runs in the browser and Node.
Built on standards.`},{id:91,c:"Internationalization",q:"What are the two ways of formatting in React Intl?",a:`The library provides two ways to format strings, numbers, and dates:

Using react components:

<FormattedMessage
  id={"account"}
  defaultMessage={"The amount is less than minimum balance."}
/>
Using an API:

const messages = defineMessages({
  accountMessage: {
    id: "account",
    defaultMessage: "The amount is less than minimum balance.",
  },
});

formatMessage(messages.accountMessage);`},{id:92,c:"Internationalization",q:"How to use <FormattedMessage> as placeholder using React Intl?",a:`The <Formatted... /> components from react-intl return elements, not plain text, so they can't be used for placeholders, alt text, etc. In that case, you should use lower level API formatMessage(). You can inject the intl object into your component using injectIntl() higher-order component and then format the message using formatMessage() available on that object.

import React from "react";
import { injectIntl, intlShape } from "react-intl";

const MyComponent = ({ intl }) => {
  const placeholder = intl.formatMessage({ id: "messageId" });
  return <input placeholder={placeholder} />;
};

MyComponent.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(MyComponent);`},{id:93,c:"Internationalization",q:"How to access current locale with React Intl?",a:`You can get the current locale in any component of your application using injectIntl():

import { injectIntl, intlShape } from "react-intl";

const MyComponent = ({ intl }) => (
  <div>{\`The current locale is \${intl.locale}\`}</div>
);

MyComponent.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(MyComponent);`},{id:94,c:"Internationalization",q:"How to format date using React Intl?",a:`The injectIntl() higher-order component will give you access to the formatDate() method via the props in your component. The method is used internally by instances of FormattedDate and it returns the string representation of the formatted date.

import { injectIntl, intlShape } from "react-intl";

const stringDate = this.props.intl.formatDate(date, {
  year: "numeric",
  month: "numeric",
  day: "numeric",
});

const MyComponent = ({ intl }) => (
  <div>{\`The formatted date is \${stringDate}\`}</div>
);

MyComponent.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(MyComponent);`},{id:95,c:"Testing",q:"What is Shallow Renderer in React testing?",a:`Shallow rendering is useful for writing unit test cases in React. It lets you render a component one level deep and assert facts about what its render method returns, without worrying about the behavior of child components, which are not instantiated or rendered.

For example, if you have the following component:

function MyComponent() {
  return (
    <div>
      <span className={"heading"}>{"Title"}</span>
      <span className={"description"}>{"Description"}</span>
    </div>
  );
}
Then you can assert as follows:

import ShallowRenderer from "react-test-renderer/shallow";

// in your test
const renderer = new ShallowRenderer();
renderer.render(<MyComponent />);

const result = renderer.getRenderOutput();

expect(result.type).toBe("div");
expect(result.props.children).toEqual([
  <span className={"heading"}>{"Title"}</span>,
  <span className={"description"}>{"Description"}</span>,
]);`},{id:96,c:"Testing",q:"What is TestRenderer package in React?",a:`This package provides a renderer that can be used to render components to pure JavaScript objects, without depending on the DOM or a native mobile environment. This package makes it easy to grab a snapshot of the platform view hierarchy (similar to a DOM tree) rendered by a ReactDOM or React Native without using a browser or jsdom.

import TestRenderer from "react-test-renderer";

const Link = ({ page, children }) => <a href={page}>{children}</a>;

const testRenderer = TestRenderer.create(
  <Link page={"https://www.facebook.com/"}>{"Facebook"}</Link>
);

console.log(testRenderer.toJSON());
// {
//   type: 'a',
//   props: { href: 'https://www.facebook.com/' },
//   children: [ 'Facebook' ]
// }`},{id:97,c:"Testing",q:"What is the purpose of ReactTestUtils package?",a:"ReactTestUtils are provided in the with-addons package and allow you to perform actions against a simulated DOM for the purpose of unit testing."},{id:98,c:"Testing",q:"What is Jest?",a:"Jest is a JavaScript unit testing framework created by Facebook based on Jasmine and provides automated mock creation and a jsdom environment. It's often used for testing components."},{id:99,c:"Testing",q:"What are the advantages of Jest over Jasmine?",a:`There are couple of advantages compared to Jasmine:

Automatically finds tests to execute in your source code.
Automatically mocks dependencies when running your tests.
Allows you to test asynchronous code synchronously.
Runs your tests with a fake DOM implementation (via jsdom) so that your tests can be run on the command line.
Runs tests in parallel processes so that they finish sooner.`},{id:100,c:"Testing",q:"Give a simple example of Jest test case",a:`Let's write a test for a function that adds two numbers in sum.js file:

const sum = (a, b) => a + b;

export default sum;
Create a file named sum.test.js which contains actual test:

import sum from "./sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
And then add the following section to your package.json:

{
  "scripts": {
    "test": "jest"
  }
}
Finally, run yarn test or npm test and Jest will print a result:

$ yarn test
PASS ./sum.test.js
✓ adds 1 + 2 to equal 3 (2ms)`},{id:101,c:"Redux",q:"What is flux?",a:`Flux is an application architecture (not a framework or library) designed by Facebook to manage data flow in React applications. It was created as an alternative to the traditional MVC (Model-View-Controller) pattern, and it emphasizes a unidirectional data flow to make state changes more predictable and easier to debug.

Flux complements React by organizing the way data moves through your application, especially in large-scale or complex projects.

Core Concepts of Flux
Flux operates using four key components, each with a specific responsibility:

Actions
Plain JavaScript objects or functions that describe what happened (e.g., user interactions or API responses).
Example: { type: 'ADD_TODO', payload: 'Buy milk' }
Dispatcher
A central hub that receives actions and dispatches them to the appropriate stores.
There is only one dispatcher in a Flux application.
Stores
Hold the application state and business logic.
Respond to actions from the dispatcher and update themselves accordingly.
They emit change events that views can listen to.
Views (React Components)
Subscribe to stores and re-render when the data changes.
They can also trigger new actions (e.g., on user input).
The workflow between dispatcher, stores and views components with distinct inputs and outputs as follows:

flux`},{id:102,c:"Redux",q:"What is Redux?",a:"Redux is a predictable state container for JavaScript applications, most commonly used with React. It helps you manage and centralize your application’s state in a single source of truth, enabling easier debugging, testing, and maintenance—especially in large or complex applications. Redux core is tiny library(about 2.5kB gzipped) and has no dependencies."},{id:103,c:"Redux",q:"What are the core principles of Redux?",a:`Redux follows three fundamental principles:

Single source of truth: The state of your whole application is stored in an object tree within a single store. The single state tree makes it easier to keep track of changes over time and debug or inspect the application.
const store = createStore(reducer);
State is read-only: The only way to change the state is to emit an action, an object describing what happened. This ensures that neither the views nor the network callbacks will ever write directly to the state.
const action = { type: 'INCREMENT' };
store.dispatch(action);
Changes are made with pure functions(Reducers): To specify how the state tree is transformed by actions, you write reducers. Reducers are just pure functions that take the previous state and an action as parameters, and return the next state.
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}`},{id:104,c:"Redux",q:"What are the downsides of Redux compared to Flux?",a:`While Redux offers a powerful and predictable state management solution, it comes with a few trade-offs when compared to Flux. These include:

Immutability is essential
Redux enforces a strict immutability model for state updates, which differs from Flux’s more relaxed approach. This means you must avoid mutating state directly. Many Redux-related libraries assume immutability, so your team must be disciplined in writing pure update logic. You can use tools like redux-immutable-state-invariant, Immer, or Immutable.js to help enforce this practice, especially during development.
Careful selection of complementary packages
Redux is more minimal by design and provides extension points such as middleware and store enhancers. This has led to a large ecosystem, but it also means you must thoughtfully choose and configure additional packages for features like undo/redo, persistence, or form handling—something Flux explicitly leaves out but may be simpler to manage in smaller setups.
Limited static type integration
While Flux has mature support for static type checking with tools like Flow, Redux’s type integration is less seamless. Although TypeScript is commonly used with Redux now, early Flow support was limited, and more boilerplate was required for static type safety. This may affect teams that rely heavily on type systems for large codebases.`},{id:105,c:"Redux",q:"What is the difference between mapStateToProps() and mapDispatchToProps()?",a:`mapStateToProps() is a utility which helps your component get updated state (which is updated by some other components):

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};
mapDispatchToProps() is a utility which will help your component to fire an action event (dispatching action which may cause change of application state):

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
  };
};
It is recommended to always use the “object shorthand” form for the mapDispatchToProps.

Redux wraps it in another function that looks like (…args) => dispatch(onTodoClick(…args)), and pass that wrapper function as a prop to your component.

const mapDispatchToProps = {
  onTodoClick,
};`},{id:106,c:"Redux",q:"Can I dispatch an action in reducer?",a:"Dispatching an action within a reducer is an anti-pattern. Your reducer should be without side effects, simply digesting the action payload and returning a new state object. Adding listeners and dispatching actions within the reducer can lead to chained actions and other side effects."},{id:107,c:"Redux",q:"How to access Redux store outside a component?",a:`You just need to export the store from the module where it created with createStore(). Also, it shouldn't pollute the global window object.

store = createStore(myReducer);

export default store;`},{id:108,c:"Redux",q:"What are the drawbacks of MVW pattern?",a:`DOM manipulation is very expensive which causes applications to behave slow and inefficient.
Due to circular dependencies, a complicated model was created around models and views.
Lot of data changes happens for collaborative applications(like Google Docs).
No way to do undo (travel back in time) easily without adding so much extra code.`},{id:109,c:"Redux",q:"Are there any similarities between Redux and RxJS?",a:`These libraries are very different for very different purposes, but there are some vague similarities.

Redux is a tool for managing state throughout the application. It is usually used as an architecture for UIs. Think of it as an alternative to (half of) Angular. RxJS is a reactive programming library. It is usually used as a tool to accomplish asynchronous tasks in JavaScript. Think of it as an alternative to Promises. Redux uses the Reactive paradigm because the Store is reactive. The Store observes actions from a distance, and changes itself. RxJS also uses the Reactive paradigm, but instead of being an architecture, it gives you basic building blocks, Observables, to accomplish this pattern.`},{id:110,c:"Redux",q:"How to reset state in Redux?",a:`You need to write a root reducer in your application which delegate handling the action to the reducer generated by combineReducers().

For example, let us take rootReducer() to return the initial state after USER_LOGOUT action. As we know, reducers are supposed to return the initial state when they are called with undefined as the first argument, no matter the action.

const appReducer = combineReducers({
  /* your app's top-level reducers */
});

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }

  return appReducer(state, action);
};
In case of using redux-persist, you may also need to clean your storage. redux-persist keeps a copy of your state in a storage engine. First, you need to import the appropriate storage engine and then, to parse the state before setting it to undefined and clean each storage state key.

const appReducer = combineReducers({
  /* your app's top-level reducers */
});

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    Object.keys(state).forEach((key) => {
      storage.removeItem(\`persist:\${key}\`);
    });

    state = undefined;
  }

  return appReducer(state, action);
};`},{id:111,c:"Redux",q:"What is the difference between React context and React Redux?",a:`You can use Context in your application directly and is going to be great for passing down data to deeply nested components which what it was designed for.

Whereas Redux is much more powerful and provides a large number of features that the Context API doesn't provide. Also, React Redux uses context internally but it doesn't expose this fact in the public API.`},{id:112,c:"Redux",q:"Why are Redux state functions called reducers?",a:"Reducers always return the accumulation of the state (based on all previous and current actions). Therefore, they act as a reducer of state. Each time a Redux reducer is called, the state and action are passed as parameters. This state is then reduced (or accumulated) based on the action, and then the next state is returned. You could reduce a collection of actions and an initial state (of the store) on which to perform these actions to get the resulting final state."},{id:113,c:"Redux",q:"How to make AJAX request in Redux?",a:`You can use redux-thunk middleware which allows you to define async actions.

Let's take an example of fetching specific account as an AJAX call using fetch API:

export function fetchAccount(id) {
  return (dispatch) => {
    dispatch(setLoadingAccountState()); // Show a loading spinner
    fetch(\`/account/\${id}\`, (response) => {
      dispatch(doneFetchingAccount()); // Hide loading spinner
      if (response.status === 200) {
        dispatch(setAccount(response.json)); // Use a normal function to set the received state
      } else {
        dispatch(someError);
      }
    });
  };
}

function setAccount(data) {
  return { type: "SET_Account", data: data };
}`},{id:114,c:"Redux",q:"Should I keep all component's state in Redux store?",a:"Keep your data in the Redux store, and the UI related state internally in the component."},{id:115,c:"Redux",q:"What is the proper way to access Redux store?",a:`The best way to access your store in a component is to use the connect() function, that creates a new component that wraps around your existing one. This pattern is called Higher-Order Components, and is generally the preferred way of extending a component's functionality in React. This allows you to map state and action creators to your component, and have them passed in automatically as your store updates.

Let's take an example of <FilterLink> component using connect:

import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
Due to it having quite a few performance optimizations and generally being less likely to cause bugs, the Redux developers almost always recommend using connect() over accessing the store directly (using context API).

function MyComponent {
  someMethod() {
    doSomethingWith(this.context.store);
  }
}`},{id:116,c:"Redux",q:"What is the difference between component and container in React Redux?",a:`Component is a class or function component that describes the presentational part of your application.

Container is an informal term for a component that is connected to a Redux store. Containers subscribe to Redux state updates and dispatch actions, and they usually don't render DOM elements; they delegate rendering to presentational child components.`},{id:117,c:"Redux",q:"What is the purpose of the constants in Redux?",a:`Constants allows you to easily find all usages of that specific functionality across the project when you use an IDE. It also prevents you from introducing silly bugs caused by typos – in which case, you will get a ReferenceError immediately.

Normally we will save them in a single file (constants.js or actionTypes.js).

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const COMPLETE_ALL = "COMPLETE_ALL";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";
In Redux, you use them in two places:

During action creation:

Let's take actions.js:

import { ADD_TODO } from "./actionTypes";

export function addTodo(text) {
  return { type: ADD_TODO, text };
}
In reducers:

Let's create reducer.js:

import { ADD_TODO } from "./actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    default:
      return state;
  }
};`},{id:118,c:"Redux",q:"What are the different ways to write mapDispatchToProps()?",a:`There are a few ways of binding action creators to dispatch() in mapDispatchToProps().

Below are the possible options:

const mapDispatchToProps = (dispatch) => ({
  action: () => dispatch(action()),
});
const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators(action, dispatch),
});
const mapDispatchToProps = { action };
The third option is just a shorthand for the first one.`},{id:119,c:"Redux",q:"What is the use of the ownProps parameter in mapStateToProps() and mapDispatchToProps()?",a:`If the ownProps parameter is specified, React Redux will pass the props that were passed to the component into your connect functions. So, if you use a connected component:

import ConnectedComponent from "./containers/ConnectedComponent";

<ConnectedComponent user={"john"} />;
The ownProps inside your mapStateToProps() and mapDispatchToProps() functions will be an object:

{
  user: "john";
}
You can use this object to decide what to return from those functions.`},{id:120,c:"Redux",q:"How to structure Redux top level directories?",a:`Most of the applications has several top-level directories as below:

Components: Used for dumb components unaware of Redux.
Containers: Used for smart components connected to Redux.
Actions: Used for all action creators, where file names correspond to part of the app.
Reducers: Used for all reducers, where files name correspond to state key.
Store: Used for store initialization.
This structure works well for small and medium size apps.`},{id:121,c:"Redux",q:"What is redux-saga?",a:`redux-saga is a library that aims to make side effects (asynchronous things like data fetching and impure things like accessing the browser cache) in React/Redux applications easier and better.

It is available in NPM:

$ npm install --save redux-saga`},{id:122,c:"Redux",q:"What is the mental model of redux-saga?",a:"Saga is like a separate thread in your application, that's solely responsible for side effects. redux-saga is a redux middleware, which means this thread can be started, paused and cancelled from the main application with normal Redux actions, it has access to the full Redux application state and it can dispatch Redux actions as well."},{id:123,c:"Redux",q:"What are the differences between call() and put() in redux-saga?",a:`Both call() and put() are effect creator functions. call() function is used to create effect description, which instructs middleware to call the promise. put() function creates an effect, which instructs middleware to dispatch an action to the store.

Let's take example of how these effects work for fetching particular user data.

function* fetchUserSaga(action) {
  // \`call\` function accepts rest arguments, which will be passed to \`api.fetchUser\` function.
  // Instructing middleware to call promise, it resolved value will be assigned to \`userData\` variable
  const userData = yield call(api.fetchUser, action.userId);

  // Instructing middleware to dispatch corresponding action.
  yield put({
    type: "FETCH_USER_SUCCESS",
    userData,
  });
}`},{id:124,c:"Redux",q:"What is Redux Thunk?",a:"Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch() and getState() as parameters."},{id:125,c:"Redux",q:"What are the differences between redux-saga and redux-thunk?",a:"Both Redux Thunk and Redux Saga take care of dealing with side effects. In most of the scenarios, Thunk uses Promises to deal with them, whereas Saga uses Generators. Thunk is simple to use and Promises are familiar to many developers, Sagas/Generators are more powerful but you will need to learn them. But both middleware can coexist, so you can start with Thunks and introduce Sagas when/if you need them."},{id:126,c:"Redux",q:"What is Redux DevTools?",a:"Redux DevTools is a live-editing time travel environment for Redux with hot reloading, action replay, and customizable UI. If you don't want to bother with installing Redux DevTools and integrating it into your project, consider using Redux DevTools Extension for Chrome and Firefox."},{id:127,c:"Redux",q:"What are the features of Redux DevTools?",a:`Some of the main features of Redux DevTools are below,

Lets you inspect every state and action payload.
Lets you go back in time by cancelling actions.
If you change the reducer code, each staged action will be re-evaluated.
If the reducers throw, you will see during which action this happened, and what the error was.
With persistState() store enhancer, you can persist debug sessions across page reloads.`},{id:128,c:"Redux",q:"What are Redux selectors and why use them?",a:`Selectors are functions that take Redux state as an argument and return some data to pass to the component.

For example, to get user details from the state:

const getUserData = (state) => state.user.data;
These selectors have two main benefits,

The selector can compute derived data, allowing Redux to store the minimal possible state
The selector is not recomputed unless one of its arguments changes`},{id:129,c:"Redux",q:"What is Redux Form?",a:"Redux Form works with React and Redux to enable a form in React to use Redux to store all of its state. Redux Form can be used with raw HTML5 inputs, but it also works very well with common UI frameworks like Material UI, React Widgets and React Bootstrap."},{id:130,c:"Redux",q:"What are the main features of Redux Form?",a:`Some of the main features of Redux Form are:

Field values persistence via Redux store.
Validation (sync/async) and submission.
Formatting, parsing and normalization of field values.`},{id:131,c:"Redux",q:"How to add multiple middlewares to Redux?",a:`You can use applyMiddleware().

For example, you can add redux-thunk and logger passing them as arguments to applyMiddleware():

import { createStore, applyMiddleware } from "redux";
const createStoreWithMiddleware = applyMiddleware(
  ReduxThunk,
  logger
)(createStore);`},{id:132,c:"Redux",q:"How to set initial state in Redux?",a:`You need to pass initial state as second argument to createStore:

const rootReducer = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter,
});

const initialState = {
  todos: [{ id: 123, name: "example", completed: false }],
};

const store = createStore(rootReducer, initialState);`},{id:133,c:"Redux",q:"How Relay is different from Redux?",a:`Relay is similar to Redux in that they both use a single store. The main difference is that relay only manages state originated from the server, and all access to the state is used via GraphQL queries (for reading data) and mutations (for changing data). Relay caches the data for you and optimizes data fetching for you, by fetching only changed data and nothing more.

What is an action in Redux?
Actions are plain JavaScript objects or payloads of information that send data from your application to your store. They are the only source of information for the store. Actions must have a type property that indicates the type of action being performed.

For example, let's take an action which represents adding a new todo item:

{
  type: ADD_TODO,
  text: 'Add todo item'
}`},{id:134,c:"React Native",q:"What is the difference between React Native and React?",a:`React is a JavaScript library, supporting both front end web and being run on the server, for building user interfaces and web applications.

React Native is a mobile framework that compiles to native app components, allowing you to build native mobile applications (iOS, Android, and Windows) in JavaScript that allows you to use React to build your components, and implements React under the hood.`},{id:135,c:"React Native",q:"How to test React Native apps?",a:"React Native can be tested only in mobile simulators like iOS and Android. You can run the app in your mobile using expo app (https://expo.io) Where it syncs using QR code, your mobile and computer should be in same wireless network."},{id:136,c:"React Native",q:"How to do logging in React Native?",a:`You can use console.log, console.warn, etc. As of React Native v0.29 you can simply run the following to see logs in the console:

$ react-native log-ios
$ react-native log-android`},{id:137,c:"React Native",q:"How to debug your React Native?",a:`Follow the below steps to debug React Native app:

Run your application in the iOS simulator.
Press Command + D and a webpage should open up at http://localhost:8081/debugger-ui.
Enable Pause On Caught Exceptions for a better debugging experience.
Press Command + Option + I to open the Chrome Developer tools, or open it via View -> Developer -> Developer Tools.
You should now be able to debug as you normally would.
React supported libraries & Integration`},{id:138,c:"Libraries & Tools",q:"What is reselect and how it works?",a:`Reselect is a selector library (for Redux) which uses memoization concept. It was originally written to compute derived data from Redux-like applications state, but it can't be tied to any architecture or library.

Reselect keeps a copy of the last inputs/outputs of the last call, and recomputes the result only if one of the inputs changes. If the same inputs are provided twice in a row, Reselect returns the cached output. It's memoization and cache are fully customizable.`},{id:139,c:"Libraries & Tools",q:"What is Flow?",a:"Flow is a static type checker designed to find type errors in JavaScript. Flow types can express much more fine-grained distinctions than traditional type systems. For example, Flow helps you catch errors involving null, unlike most type systems."},{id:140,c:"Libraries & Tools",q:"What is the difference between Flow and PropTypes?",a:`Flow is a static analysis tool (static checker) which uses a superset of the language, allowing you to add type annotations to all of your code and catch an entire class of bugs at compile time.

PropTypes is a basic type checker (runtime checker) which has been patched onto React. It can't check anything other than the types of the props being passed to a given component. If you want more flexible typechecking for your entire project Flow/TypeScript are appropriate choices.`},{id:141,c:"Libraries & Tools",q:"How to use Font Awesome icons in React?",a:`The below steps followed to include Font Awesome in React:

Install font-awesome:

$ npm install --save font-awesome
Import font-awesome in your index.js file:

import "font-awesome/css/font-awesome.min.css";
Add Font Awesome classes in className:

function MyComponent {
  return <div><i className={'fa fa-spinner'} /></div>
}`},{id:142,c:"Libraries & Tools",q:"What is React Dev Tools?",a:`React Developer Tools let you inspect the component hierarchy, including component props and state. It exists both as a browser extension (for Chrome and Firefox), and as a standalone app (works with other environments including Safari, IE, and React Native).

The official extensions available for different browsers or environments.

Chrome extension
Firefox extension
Standalone app (Safari, React Native, etc)`},{id:143,c:"Libraries & Tools",q:"Why is DevTools not loading in Chrome for local files?",a:"If you opened a local HTML file in your browser (file://...) then you must first open Chrome Extensions and check Allow access to file URLs."},{id:144,c:"Libraries & Tools",q:"How to use Polymer in React?",a:`You need to follow below steps to use Polymer in React,

Create a Polymer element:

<link
  rel="import"
  href="../../bower_components/polymer/polymer.html"
/>;
Polymer({
  is: "calendar-element",
  ready: function () {
    this.textContent = "I am a calendar";
  },
});
Create the Polymer component HTML tag by importing it in a HTML document, e.g. import it in the index.html of your React application:

<link
  rel="import"
  href="./src/polymer-components/calendar-element.html"
/>
Use that element in the JSX file:

export default function MyComponent {
  return <calendar-element />;
}`},{id:145,c:"Libraries & Tools",q:"What are the advantages of React over Vue.js?",a:`React has the following advantages over Vue.js:

Gives more flexibility in large apps developing.
Easier to test.
Suitable for mobile apps creating.
More information and solutions available.
Note: The above list of advantages are purely opinionated and it vary based on the professional experience. But they are helpful as base parameters.`},{id:146,c:"Libraries & Tools",q:"What is the difference between React and Angular?",a:`Let's see the difference between React and Angular in a table format.

React	Angular
React is a library and has only the View layer	Angular is a framework and has complete MVC functionality
React handles rendering on the server side	AngularJS renders only on the client side but Angular 2 and above renders on the server side
React uses JSX that looks like HTML in JS which can be confusing	Angular follows the template approach for HTML, which makes code shorter and easy to understand
React Native, which is a React type to build mobile applications are faster and more stable	Ionic, Angular's mobile native app is relatively less stable and slower
In React, data flows only in one way and hence debugging is easy	In Angular, data flows both way i.e it has two-way data binding between children and parent and hence debugging is often difficult
Note: The above list of differences are purely opinionated and it vary based on the professional experience. But they are helpful as base parameters.`},{id:147,c:"Libraries & Tools",q:"Why React tab is not showing up in DevTools?",a:"When the page loads, React DevTools sets a global named __REACT_DEVTOOLS_GLOBAL_HOOK__, then React communicates with that hook during initialization. If the website is not using React or if React fails to communicate with DevTools then it won't show up the tab."},{id:148,c:"Libraries & Tools",q:"What are Styled Components?",a:"styled-components is a JavaScript library for styling React applications. It removes the mapping between styles and components, and lets you write actual CSS augmented with JavaScript."},{id:149,c:"Libraries & Tools",q:"Give an example of Styled Components?",a:`Lets create <Title> and <Wrapper> components with specific styles for each.

import React from "react";
import styled from "styled-components";

// Create a <Title> component that renders an <h1> which is centered, red and sized at 1.5em
const Title = styled.h1\`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
\`;

// Create a <Wrapper> component that renders a <section> with some padding and a papayawhip background
const Wrapper = styled.section\`
  padding: 4em;
  background: papayawhip;
\`;
These two variables, Title and Wrapper, are now components that you can render just like any other react component.

<Wrapper>
  <Title>{"Lets start first styled component!"}</Title>
</Wrapper>`},{id:150,c:"Libraries & Tools",q:"What is Relay?",a:"Relay is a JavaScript framework for providing a data layer and client-server communication to web applications using the React view layer."},{id:151,c:"Redux",q:"What are the main features of Reselect library?",a:`Let's see the main features of Reselect library,

Selectors can compute derived data, allowing Redux to store the minimal possible state.
Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
Selectors are composable. They can be used as input to other selectors.
Give an example of Reselect usage?
Let's take calculations and different amounts of a shipment order with the simplified usage of Reselect:

import { createSelector } from "reselect";

const shopItemsSelector = (state) => state.shop.items;
const taxPercentSelector = (state) => state.shop.taxPercent;

const subtotalSelector = createSelector(shopItemsSelector, (items) =>
  items.reduce((acc, item) => acc + item.value, 0)
);

const taxSelector = createSelector(
  subtotalSelector,
  taxPercentSelector,
  (subtotal, taxPercent) => subtotal * (taxPercent / 100)
);

export const totalSelector = createSelector(
  subtotalSelector,
  taxSelector,
  (subtotal, tax) => ({ total: subtotal + tax })
);

let exampleState = {
  shop: {
    taxPercent: 8,
    items: [
      { name: "apple", value: 1.2 },
      { name: "orange", value: 0.95 },
    ],
  },
};

console.log(subtotalSelector(exampleState)); // 2.15
console.log(taxSelector(exampleState)); // 0.172
console.log(totalSelector(exampleState)); // { total: 2.322 }`},{id:152,c:"Redux",q:"Can Redux only be used with React?",a:"Redux can be used as a data store for any UI layer. The most common usage is with React and React Native, but there are bindings available for Angular, Angular 2, Vue, Mithril, and more. Redux simply provides a subscription mechanism which can be used by any other code."},{id:153,c:"Redux",q:"Do you need to have a particular build tool to use Redux?",a:"Redux is originally written in ES6 and transpiled for production into ES5 with Webpack and Babel. You should be able to use it regardless of your JavaScript build process. Redux also offers a UMD build that can be used directly without any build process at all."},{id:154,c:"Redux",q:"How Redux Form initialValues get updated from state?",a:`You need to add enableReinitialize : true setting.

const InitializeFromStateForm = reduxForm({
  form: "initializeFromState",
  enableReinitialize: true,
})(UserEdit);
If your initialValues prop gets updated, your form will update too.`},{id:155,c:"TypeScript & Flow",q:"How React PropTypes allow different types for one prop?",a:`You can use oneOfType() method of PropTypes.

For example, the height property can be defined with either string or number type as below:

Component.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};`},{id:156,c:"Miscellaneous",q:"Can I import an SVG file as react component?",a:`You can import SVG directly as component instead of loading it as a file. This feature is available with react-scripts@2.0.0 and higher.

import { ReactComponent as Logo } from "./logo.svg";

const App = () => (
  <div>
    {/* Logo is an actual react component */}
    <Logo />
  </div>
);
Note: Don't forget about the curly braces in the import.`},{id:157,c:"Component Patterns",q:"What is render hijacking in react?",a:"The concept of render hijacking is the ability to control what a component will output from another component. It means that you decorate your component by wrapping it into a Higher-Order component. By wrapping, you can inject additional props or make other changes, which can cause changing logic of rendering. It does not actually enable hijacking, but by using HOC you make your component behave differently."},{id:158,c:"Miscellaneous",q:"How to pass numbers to React component?",a:`We can pass numbers as props to React component using curly braces {} where as strings in double quotes "" or single quotes ''

import React from "react";

const ChildComponent = ({ name, age }) => {
  return (
    <>
      My Name is {name} and Age is {age}
    </>
  );
};

const ParentComponent = () => {
  return (
    <>
      <ChildComponent name="Chetan" age={30} />
    </>
  );
};

export default ParentComponent;`},{id:159,c:"Redux",q:"Do I need to keep all my state into Redux? Should I ever use react internal state?",a:`It is up to the developer's decision, i.e., it is developer's job to determine what kinds of state make up your application, and where each piece of state should live. Some users prefer to keep every single piece of data in Redux, to maintain a fully serializable and controlled version of their application at all times. Others prefer to keep non-critical or UI state, such as “is this dropdown currently open”, inside a component's internal state.

Below are the rules of thumb to determine what kind of data should be put into Redux

Do other parts of the application care about this data?
Do you need to be able to create further derived data based on this original data?
Is the same data being used to drive multiple components?
Is there value to you in being able to restore this state to a given point in time (ie, time travel debugging)?
Do you want to cache the data (i.e, use what's in state if it's already there instead of re-requesting it)?`},{id:160,c:"Miscellaneous",q:"What is the purpose of registerServiceWorker in React?",a:`React creates a service worker for you without any configuration by default. The service worker is a web API that helps you cache your assets and other files so that when the user is offline or on a slow network, he/she can still see results on the screen, as such, it helps you build a better user experience, that's what you should know about service worker for now. It's all about adding offline capabilities to your site.

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();`},{id:161,c:"Performance",q:"What is React memo function?",a:`Class components can be restricted from re-rendering when their input props are the same using PureComponent or shouldComponentUpdate. Now you can do the same with function components by wrapping them in React.memo.

const MyComponent = React.memo(function MyComponent(props) {
  /* only rerenders if props change */
});`},{id:162,c:"Performance",q:"What is React lazy function?",a:`The React.lazy function lets you render a dynamic import as a regular component. It will automatically load the bundle containing the OtherComponent when the component gets rendered. This must return a Promise which resolves to a module with a default export containing a React component.

const OtherComponent = React.lazy(() => import("./OtherComponent"));

function MyComponent() {
  return (
    <div>
      <OtherComponent />
    </div>
  );
}
Note: React.lazy and Suspense is not yet available for server-side rendering. If you want to do code-splitting in a server rendered app, we still recommend React Loadable.`},{id:163,c:"Miscellaneous",q:"How to prevent unnecessary updates using setState?",a:`You can compare the current value of the state with an existing state value and decide whether to rerender the page or not. If the values are the same then you need to return null to stop re-rendering otherwise return the latest state value.

For example, the user profile information is conditionally rendered as follows,

getUserProfile = (user) => {
  const latestAddress = user.address;
  this.setState((state) => {
    if (state.address === latestAddress) {
      return null;
    } else {
      return { title: latestAddress };
    }
  });
};`},{id:164,c:"Miscellaneous",q:"How do you render Array, Strings and Numbers in React 16 Version?",a:`Note: This question references React 16. These features remain valid in current React versions (18/19).

Arrays: Starting with React 16, you can return multiple sibling elements without a wrapping element by returning an array or using Fragments.

Array approach:

const ReactJSDevs = () => {
  return [
    <li key="1">John</li>,
    <li key="2">Jackie</li>,
    <li key="3">Jordan</li>,
  ];
};
Fragment approach (preferred):

const ReactJSDevs = () => {
  return (
    <>
      <li>John</li>
      <li>Jackie</li>
      <li>Jordan</li>
    </>
  );
};
You can also merge this array of items in another array component.

const JSDevs = () => {
  return (
    <ul>
      <li>Brad</li>
      <li>Brodge</li>
      <ReactJSDevs />
      <li>Brandon</li>
    </ul>
  );
};
Strings and Numbers: You can also return string and number type from the render method.

render() {
 return 'Welcome to ReactJS questions';
}
// Number
render() {
 return 2018;
}`},{id:165,c:"Hooks",q:"What are hooks?",a:`Hooks is a special JavaScript function that allows you use state and other React features without writing a class. This pattern has been introduced as a new feature in React 16.8 and helped to isolate the stateful logic from the components.

Let's see an example of useState hook:

import { useState } from "react";

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}
Note: Hooks can be used inside an existing function component without rewriting the component.`},{id:166,c:"Hooks",q:"What rules need to be followed for hooks?",a:`You need to follow two rules in order to use hooks,

Call Hooks only at the top level of your react functions: You should always use hooks at the top level of react function before any early returns. i.e, You shouldn’t call Hooks inside loops, conditions, or nested functions. This will ensure that Hooks are called in the same order each time a component renders and it preserves the state of Hooks between multiple re-renders due to useState and useEffect calls.
Let's see the difference using an example, Correct usage::

function UserProfile() {
 // Correct: Hooks called at the top level
 const [name, setName] = useState('John');
 const [country, setCountry] = useState('US');

 return (
   <div>
     <h1>Name: {name}</h1>
     <p>Country: {country}</p>
   </div>
 );
}
Incorrect usage::

function UserProfile() {
 const [name, setName] = useState('John');

 if (name === 'John') {
   // Incorrect: useState is called inside a conditional
   const [country, setCountry] = useState('US'); 
 }

 return (
   <div>
     <h1>Name: {name}</h1>
     <p>Country: {country}</p> {/* This will throw an error if the name condition isn't met */}
   </div>
 );
}
The useState hook for the country field is being called conditionally within an if block. This can lead to inconsistent state behavior and may cause hooks to be called in a different order on each re-render.

Call Hooks from React Functions only: You shouldn’t call Hooks from regular JavaScript functions or class components. Instead, you should call them from either function components or custom hooks.
Let's find the difference of correct and incorrect usage with below examples,

Correct usage::

//Example1:
function Counter() {
 // Correct: useState is used inside a functional component
 const [count, setCount] = useState(0);

 return <div>Counter: {count}</div>;
}
//Example2:
function useFetchData(url) {
 const [data, setData] = useState(null);

 useEffect(() => {
   fetch(url)
     .then((response) => response.json())
     .then((data) => setData(data));
 }, [url]);

 return data;
}

function UserProfile() {
 // Correct: Using a custom hook here
 const user = useFetchData('https://some-api.com/user');

 return (
   <div>
     <h1>{user ? user.name : 'Loading profile...'}</h1>
   </div>
 );
}
Incorrect usage::

 //Example1
 function normalFunction() {
   // Incorrect: Can't call hooks in normal functions
   const [count, setCount] = useState(0); 
 }

 //Example2
 function fetchData(url) {
   // Incorrect: Hooks can't be used in non-React functions
   const [data, setData] = useState(null);

   useEffect(() => {
     fetch(url)
       .then((response) => response.json())
       .then((data) => setData(data));
   }, [url]);

   return data;
 }
In the above incorrect usage example, both useState and useEffect are used in non-React functions(normalFunction and fetchData), which is not allowed.`},{id:167,c:"Hooks",q:"How to ensure hooks followed the rules in your project?",a:`React team released an ESLint plugin called eslint-plugin-react-hooks that enforces Hook's two rules. It is part of Hooks API. You can add this plugin to your project using the below command,

npm install eslint-plugin-react-hooks --save-dev
And apply the below config in your ESLint config file,

// Your ESLint configuration
{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error"
  }
}
This plugin also provide another important rule through react-hooks/exhaustive-deps. It ensures that the dependencies of useEffect, useCallback, and useMemo hooks are correctly listed to avoid potential bugs.

useEffect(() => {
  // Forgetting \`message\` will result in incorrect behavior
  console.log(message);
}, []); // Here \`message\` should be a dependency
The recommended eslint-config-react-app preset already includes the hooks rules of this plugin. For example, the linter enforce proper naming convention for hooks. If you rename your custom hooks which as prefix "use" to something else then linter won't allow you to call built-in hooks such as useState, useEffect etc inside of your custom hook anymore.

Note: This plugin is intended to use in Create React App by default.`},{id:168,c:"Redux",q:"What are the differences between Flux and Redux?",a:`Below are the major differences between Flux and Redux

Flux	Redux
State is mutable	State is immutable
The Store contains both state and change logic	The Store and change logic are separate
There are multiple stores exist	There is only one store exist
All the stores are disconnected and flat	Single store with hierarchical reducers
It has a singleton dispatcher	There is no concept of dispatcher
React components subscribe to the store	Container components uses connect function`},{id:169,c:"Routing",q:"What are the benefits of React Router V4?",a:`Below are the main benefits of React Router V4 module,

In React Router v4(version 4), the API is completely about components. A router can be visualized as a single component(<BrowserRouter>) which wraps specific child router components(<Route>).
You don't need to manually set history. The router module will take care history by wrapping routes with <BrowserRouter> component.
The application size is reduced by adding only the specific router module(Web, core, or native)`},{id:170,c:"Error Handling",q:"Can you describe about componentDidCatch lifecycle method signature?",a:`The componentDidCatch lifecycle method is invoked after an error has been thrown by a descendant component. The method receives two parameters,

error: - The error object which was thrown
info: - An object with a componentStack key contains the information about which component threw the error.
The method structure would be as follows

componentDidCatch(error, info);`},{id:171,c:"Forms & Events",q:"In which scenarios do error boundaries not catch errors?",a:`Below are the cases in which error boundaries don't work,

Inside Event handlers
Asynchronous code using setTimeout or requestAnimationFrame callbacks
During Server side rendering
When errors thrown in the error boundary code itself`},{id:172,c:"Error Handling",q:"What is the behavior of uncaught errors in react 16?",a:`Note: This behavior was introduced in React 16 and continues in React 18/19.

In React 16+, errors that are not caught by any error boundary will result in unmounting of the whole React component tree. The reason behind this decision is that it is worse to leave corrupted UI in place than to completely remove it. For example, it is worse for a payments app to display a wrong amount than to render nothing.

Best Practice: Always wrap your application or critical sections in error boundaries to prevent complete unmounting and provide a better user experience.

<ErrorBoundary fallback={<ErrorPage />}>
  <App />
</ErrorBoundary>`},{id:173,c:"Routing",q:"What is the proper placement for error boundaries?",a:`The granularity of error boundaries usage is up to the developer based on project needs. You can follow either of these approaches,
You can wrap top-level route components to display a generic error message for the entire application.
You can also wrap individual components in an error boundary to protect them from crashing the rest of the application.`},{id:174,c:"Error Handling",q:"What is the benefit of component stack trace from error boundary?",a:`Apart from error messages and javascript stack, React16 will display the component stack trace with file names and line numbers using error boundary concept.

For example, BuggyCounter component displays the component stack trace as below,

stacktrace`},{id:175,c:"Miscellaneous",q:"What are default props?",a:`The defaultProps can be defined as a property on the component to set the default values for the props. These default props are used when props not supplied(i.e., undefined props), but not for null or 0 as props. That means, If you provide null value then it remains null value. It's the same behavior with 0 as well.

For example, let us create color default prop for the button component,

function MyButton {
  // ...
}

MyButton.defaultProps = {
  color: "red",
};
If props.color is not provided then it will set the default value to 'red'. i.e, Whenever you try to access the color prop it uses the default value

function MyButton() {
  return <MyButton />; // props.color will contain red value
}`},{id:176,c:"Styling",q:"What is the purpose of displayName class property?",a:`The displayName string is used in debugging messages. Usually, you don’t need to set it explicitly because it’s inferred from the name of the function or class that defines the component. You might want to set it explicitly if you want to display a different name for debugging purposes or when you create a higher-order component.

For example, To ease debugging, choose a display name that communicates that it’s the result of a withSubscription HOC.

function withSubscription(WrappedComponent) {
  class WithSubscription extends React.Component {
    /* ... */
  }
  WithSubscription.displayName = \`WithSubscription(\${getDisplayName(
    WrappedComponent
  )})\`;
  return WithSubscription;
}
function getDisplayName(WrappedComponent) {
  return (
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  );
}`},{id:177,c:"Miscellaneous",q:"What is the browser support for react applications?",a:"React supports all popular browsers, including Internet Explorer 9 and above, although some polyfills are required for older browsers such as IE 9 and IE 10. If you use es5-shim and es5-sham polyfill then it even support old browsers that doesn't support ES5 methods."},{id:178,c:"Performance",q:"What is code-splitting?",a:`Code-Splitting is a feature supported by bundlers like Webpack and Browserify which can create multiple bundles that can be dynamically loaded at runtime. The react project supports code splitting via dynamic import() feature.

For example, in the below code snippets, it will make moduleA.js and all its unique dependencies as a separate chunk that only loads after the user clicks the 'Load' button.

moduleA.js

const moduleA = "Hello";

export { moduleA };
App.js

export default function App {
  function handleClick() {
    import("./moduleA")
      .then(({ moduleA }) => {
        // Use moduleA
      })
      .catch((err) => {
        // Handle failure
      });
  };

 return (
   <div>
     <button onClick={this.handleClick}>Load</button>
   </div>
 );
}
See Class`},{id:179,c:"Component Patterns",q:"What are Keyed Fragments?",a:`The Fragments declared with the explicit <React.Fragment> syntax may have keys. The general use case is mapping a collection to an array of fragments as below,

function Glossary(props) {
  return (
    <dl>
      {props.items.map((item) => (
        // Without the \`key\`, React will fire a key warning
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
Note: key is the only attribute that can be passed to Fragment. In the future, there might be a support for additional attributes, such as event handlers.`},{id:180,c:"Miscellaneous",q:"Does React support all HTML attributes?",a:`As of React 16, both standard or custom DOM attributes are fully supported. Since React components often take both custom and DOM-related props, React uses the camelCase convention just like the DOM APIs.

Let us take few props with respect to standard HTML attributes,

<div tabIndex="-1" />      // Just like node.tabIndex DOM API
<div className="Button" /> // Just like node.className DOM API
<input readOnly={true} />  // Just like node.readOnly DOM API
These props work similarly to the corresponding HTML attributes, with the exception of the special cases. It also support all SVG attributes.`},{id:181,c:"Miscellaneous",q:"When component props defaults to true?",a:`If you pass no value for a prop, it defaults to true. This behavior is available so that it matches the behavior of HTML.

For example, below expressions are equivalent,

<MyInput autocomplete />

<MyInput autocomplete={true} />
Note: It is not recommended to use this approach because it can be confused with the ES6 object shorthand (example, {name} which is short for {name: name})`},{id:182,c:"Routing",q:"What is NextJS and major features of it?",a:`Next.js is a popular and lightweight framework for static and server‑rendered applications built with React. It also provides styling and routing solutions. Below are the major features provided by NextJS,

Server-rendered by default
Automatic code splitting for faster page loads
Simple client-side routing (page based)
Webpack-based dev environment which supports (HMR)
Able to implement with Express or any other Node.js HTTP server
Customizable with your own Babel and Webpack configurations`},{id:183,c:"Forms & Events",q:"How do you pass an event handler to a component?",a:`You can pass event handlers and other functions as props to child components. The functions can be passed to child component as below,

function Button({ onClick }) {
  return <button onClick={onClick}>Download</button>;
}

export default function downloadExcel() {
  function handleClick() {
    alert("Downloaded");
  }

  return <Button onClick={handleClick}></Button>;
}`},{id:184,c:"Forms & Events",q:"How to prevent a function from being called multiple times?",a:`If you use an event handler such as onClick or onScroll and want to prevent the callback from being fired too quickly, then you can limit the rate at which callback is executed. This can be achieved in the below possible ways,

Throttling: Changes based on a time based frequency. For example, it can be used using _.throttle lodash function
Debouncing: Publish changes after a period of inactivity. For example, it can be used using _.debounce lodash function
RequestAnimationFrame throttling: Changes based on requestAnimationFrame. For example, it can be used using raf-schd lodash function`},{id:185,c:"Miscellaneous",q:"How JSX prevents Injection Attacks?",a:`React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered.

For example, you can embed user input as below,

const name = response.potentiallyMaliciousInput;
const element = <h1>{name}</h1>;
This way you can prevent XSS(Cross-site-scripting) attacks in the application.`},{id:186,c:"Miscellaneous",q:"How do you update rendered elements?",a:`You can update UI(represented by rendered element) by passing the newly created element to ReactDOM's render method.

For example, lets take a ticking clock example, where it updates the time by calling render method multiple times,

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}

setInterval(tick, 1000);`},{id:187,c:"Styling",q:"How do you say that props are readonly?",a:`When you declare a component as a function or a class, it must never modify its own props.

Let us take a below capital function,

function capital(amount, interest) {
  return amount + interest;
}
The above function is called “pure” because it does not attempt to change their inputs, and always return the same result for the same inputs. Hence, React has a single rule saying "All React components must act like pure functions with respect to their props."`},{id:188,c:"Miscellaneous",q:"What are the conditions to safely use the index as a key?",a:`There are three conditions to make sure, it is safe use the index as a key.

The list and items are static– they are not computed and do not change
The items in the list have no ids
The list is never reordered or filtered.`},{id:189,c:"Miscellaneous",q:"Should keys be globally unique?",a:`The keys used within arrays should be unique among their siblings but they don’t need to be globally unique. i.e, You can use the same keys with two different arrays.

For example, the below Book component uses two arrays with different arrays,

function Book(props) {
  const index = (
    <ul>
      {props.pages.map((page) => (
        <li key={page.id}>{page.title}</li>
      ))}
    </ul>
  );
  const content = props.pages.map((page) => (
    <div key={page.id}>
      <h3>{page.title}</h3>
      <p>{page.content}</p>
      <p>{page.pageNumber}</p>
    </div>
  ));
  return (
    <div>
      {index}
      <hr />
      {content}
    </div>
  );
}`},{id:190,c:"Forms & Events",q:"What is the popular choice for form handling?",a:`Formik is a form library for react which provides solutions such as validation, keeping track of the visited fields, and handling form submission.

In detail, You can categorize them as follows,

Getting values in and out of form state
Validation and error messages
Handling form submission
It is used to create a scalable, performant, form helper with a minimal API to solve annoying stuff.`},{id:191,c:"Redux",q:"What are the advantages of formik over redux form library?",a:`Below are the main reasons to recommend formik over redux form library,

The form state is inherently short-term and local, so tracking it in Redux (or any kind of Flux library) is unnecessary.
Redux-Form calls your entire top-level Redux reducer multiple times ON EVERY SINGLE KEYSTROKE. This way it increases input latency for large apps.
Redux-Form is 22.5 kB minified gzipped whereas Formik is 12.7 kB`},{id:192,c:"Miscellaneous",q:"Why are you not required to use inheritance?",a:"In React, it is recommended to use composition over inheritance to reuse code between components. Both Props and composition give you all the flexibility you need to customize a component’s look and behavior explicitly and safely. Whereas, If you want to reuse non-UI functionality between components, it is suggested to extract it into a separate JavaScript module. Later components import it and use that function, object, or class, without extending it."},{id:193,c:"Miscellaneous",q:"Can I use web components in react application?",a:`Yes, you can use web components in a react application. Even though many developers won't use this combination, it may require especially if you are using third-party UI components that are written using Web Components.

For example, let us use Vaadin date picker web component as below,

import "./App.css";
import "@vaadin/vaadin-date-picker";
export default function App() {
  return (
    <div className="App">
      <vaadin-date-picker label="When were you born?"></vaadin-date-picker>
    </div>
  );
}`},{id:194,c:"Performance",q:"What is dynamic import?",a:`You can achieve code-splitting in your app using dynamic import.

Let's take an example of addition,

Normal Import
import { add } from "./math";
console.log(add(10, 20));
Dynamic Import
import("./math").then((math) => {
  console.log(math.add(10, 20));
});`},{id:195,c:"Performance",q:"What are loadable components?",a:`With the release of React 18, React.lazy and Suspense are now available for server-side rendering. However, prior to React 18, it was recommended to use Loadable Components for code-splitting in a server-side rendered app because React.lazy and Suspense were not available for server-side rendering. Loadable Components lets you render a dynamic import as a regular component. For example, you can use Loadable Components to load the OtherComponent in a separate bundle like this:

import loadable from "@loadable/component";

const OtherComponent = loadable(() => import("./OtherComponent"));

function MyComponent() {
  return (
    <div>
      <OtherComponent />
    </div>
  );
}
Now OtherComponent will be loaded in a separated bundle Loadable Components provides additional benefits beyond just code-splitting, such as automatic code reloading, error handling, and preloading. By using Loadable Components, you can ensure that your application loads quickly and efficiently, providing a better user experience for your users.`},{id:196,c:"Miscellaneous",q:"What is suspense component?",a:`React Suspense is a built-in feature that lets you defer rendering part of your component tree until some condition(asynchronous operation) is met—usually, data or code has finished loading. While waiting, Suspense lets you display a fallback UI like a spinner or placeholder.

Lazy loading components uses suspense feature,

If the module containing the dynamic import is not yet loaded by the time parent component renders, you must show some fallback content while you’re waiting for it to load using a loading indicator. This can be done using Suspense component.

const OtherComponent = React.lazy(() => import("./OtherComponent"));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
The above component shows fallback UI instead real component until OtherComponent is fully loaded.

As an another example, suspend until async data(data fetching) is ready

  function UserProfile() {
    const user = use(fetchUser()); // throws a promise internally
    return <div>{user.name}</div>;
  }

  function App() {
    return (
      <Suspense fallback={<div>Loading user...</div>}>
        <UserProfile />
      </Suspense>
    );
  }
\`\`\``},{id:197,c:"Routing",q:"What is route based code splitting?",a:`One of the best place to do code splitting is with routes. The entire page is going to re-render at once so users are unlikely to interact with other elements in the page at the same time. Due to this, the user experience won't be disturbed.

Let us take an example of route based website using libraries like React Router with React.lazy,

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";

const Home = lazy(() => import("./routes/Home"));
const About = lazy(() => import("./routes/About"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Suspense>
  </Router>
);
In the above code, the code splitting will happen at each route level.`},{id:198,c:"Testing",q:"What is the purpose of default value in context?",a:`The defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This can be helpful for testing components in isolation without wrapping them.

Below code snippet provides default theme value as Luna.

const MyContext = React.createContext(defaultValue);`},{id:199,c:"Miscellaneous",q:"What is diffing algorithm?",a:`React needs to use algorithms to find out how to efficiently update the UI to match the most recent tree. The diffing algorithms is generating the minimum number of operations to transform one tree into another. However, the algorithms have a complexity in the order of O(n³) where n is the number of elements in the tree.

In this case, displaying 1000 elements would require in the order of one billion comparisons. This is far too expensive. Instead, React implements a heuristic O(n) algorithm based on two assumptions:

Two elements of different types will produce different trees.
The developer can hint at which child elements may be stable across different renders with a key prop.`},{id:200,c:"Miscellaneous",q:"What are the rules covered by diffing algorithm?",a:`When diffing two trees, React first compares the two root elements. The behavior is different depending on the types of the root elements. It covers the below rules during reconciliation algorithm,

Elements Of Different Types: Whenever the root elements have different types, React will tear down the old tree and build the new tree from scratch. For example, elements to , or from

to of different types lead a full rebuild.
DOM Elements Of The Same Type: When comparing two React DOM elements of the same type, React looks at the attributes of both, keeps the same underlying DOM node, and only updates the changed attributes. Lets take an example with same DOM elements except className attribute,

<div className="show" title="ReactJS" />

<div className="hide" title="ReactJS" />
Component Elements Of The Same Type: When a component updates, the instance stays the same, so that state is maintained across renders. React updates the props of the underlying component instance to match the new element, and calls componentWillReceiveProps() and componentWillUpdate() on the underlying instance. After that, the render() method is called and the diff algorithm recurses on the previous result and the new result.

Recursing On Children: when recursing on the children of a DOM node, React just iterates over both lists of children at the same time and generates a mutation whenever there’s a difference. For example, when adding an element at the end of the children, converting between these two trees works well.

<ul>
  <li>first</li>
  <li>second</li>
</ul>

<ul>
  <li>first</li>
  <li>second</li>
  <li>third</li>
</ul>
Handling keys: React supports a key attribute. When children have keys, React uses the key to match children in the original tree with children in the subsequent tree. For example, adding a key can make the tree conversion efficient,

<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>`},{id:201,c:"Miscellaneous",q:"When do you need to use refs?",a:`There are few use cases to go for refs,

Managing focus, text selection, or media playback.
Triggering imperative animations.
Integrating with third-party DOM libraries.`},{id:202,c:"Component Patterns",q:"Must prop be named as render for render props?",a:`Even though the pattern named render props, you don’t have to use a prop named render to use this pattern. i.e, Any prop that is a function that a component uses to know what to render is technically a “render prop”. Lets take an example with the children prop for render props,

<Mouse
  children={(mouse) => (
    <p>
      The mouse position is {mouse.x}, {mouse.y}
    </p>
  )}
/>
Actually children prop doesn’t need to be named in the list of “attributes” in JSX element. Instead, you can keep it directly inside element,

<Mouse>
  {(mouse) => (
    <p>
      The mouse position is {mouse.x}, {mouse.y}
    </p>
  )}
</Mouse>
While using this above technique(without any name), explicitly state that children should be a function in your propTypes.

Mouse.propTypes = {
  children: PropTypes.func.isRequired,
};`},{id:203,c:"Component Patterns",q:"What are the problems of using render props with pure components?",a:"If you create a function inside a render method, it negates the purpose of pure component. Because the shallow prop comparison will always return false for new props, and each render in this case will generate a new value for the render prop. You can solve this issue by defining the render function as instance method."},{id:204,c:"Miscellaneous",q:"What is windowing technique?",a:"Windowing is a technique that only renders a small subset of your rows at any given time, and can dramatically reduce the time it takes to re-render the components as well as the number of DOM nodes created. If your application renders long lists of data then this technique is recommended. Both react-window and react-virtualized are popular windowing libraries which provides several reusable components for displaying lists, grids, and tabular data."},{id:205,c:"Miscellaneous",q:"How do you print falsy values in JSX?",a:`The falsy values such as false, null, undefined, and true are valid children but they don't render anything. If you still want to display them then you need to convert it to string. Let's take an example on how to convert to a string,

<div>My JavaScript variable is {String(myVariable)}.</div>`},{id:206,c:"Styling",q:"What is the typical use case of portals?",a:`React Portals are primarily used to render UI components such as modals, tooltips, dropdowns, hovercards, and notifications outside of their parent component's DOM tree. This helps avoid common CSS issues caused by parent elements, such as:

**overflow: hidden** on parent elements clipping or hiding child elements like modals or tooltips,
stacking context and **z-index** conflicts created by parent containers that prevent child elements from appearing above other content.
That means, you need to visually “break out” of its container. By rendering these UI elements into a separate DOM node (often directly under <body>), portals ensure they appear above all other content and are not restricted by the parent’s CSS or layout constraints, resulting in correct positioning and visibility regardless of the parent’s styling.`},{id:207,c:"Forms & Events",q:"How do you set default value for uncontrolled component?",a:`In React, the value attribute on form elements will override the value in the DOM. With an uncontrolled component, you might want React to specify the initial value, but leave subsequent updates uncontrolled. To handle this case, you can specify a **defaultValue** attribute instead of **value**.

 \`\`\`javascript
 render() {
   return (
     <form onSubmit={this.handleSubmit}>
       <label>
         User Name:
         <input
           defaultValue="John"
           type="text"
           ref={this.input} />
       </label>
       <input type="submit" value="Submit" />
     </form>
   );
 }
 \`\`\`

 The same applies for \`select\` and \`textArea\` inputs. But you need to use **defaultChecked** for \`checkbox\` and \`radio\` inputs.`},{id:208,c:"Redux",q:"What is your favorite React stack?",a:"Even though the tech stack varies from developer to developer, the most popular stack is used in react boilerplate project code. It mainly uses Redux and redux-saga for state management and asynchronous side-effects, react-router for routing purpose, styled-components for styling react components, axios for invoking REST api, and other supported stack such as webpack, reselect, ESNext, Babel. You can clone the project https://github.com/react-boilerplate/react-boilerplate and start working on any new react project."},{id:209,c:"Miscellaneous",q:"What is the difference between Real DOM and Virtual DOM?",a:`Below are the main differences between Real DOM and Virtual DOM,

Real DOM	Virtual DOM
Updates are slow	Updates are fast
DOM manipulation is very expensive.	DOM manipulation is very easy
You can update HTML directly.	You Can’t directly update HTML
It causes too much of memory wastage	There is no memory wastage
Creates a new DOM if element updates	It updates the JSX if element update`},{id:210,c:"Styling",q:"How to add Bootstrap to a react application?",a:`Bootstrap can be added to your React app in a three possible ways,

Using the Bootstrap CDN: This is the easiest way to add bootstrap. Add both bootstrap CSS and JS resources in a head tag.
Bootstrap as Dependency: If you are using a build tool or a module bundler such as Webpack, then this is the preferred option for adding Bootstrap to your React application
npm install bootstrap
React Bootstrap Package: In this case, you can add Bootstrap to our React app is by using a package that has rebuilt Bootstrap components to work particularly as React components. Below packages are popular in this category,
react-bootstrap
reactstrap`},{id:211,c:"Miscellaneous",q:"Can you list down top websites or applications using react as front end framework?",a:`Below are the top 10 websites using React as their front-end framework,

Facebook
Uber
Instagram
WhatsApp
Khan Academy
Airbnb
Dropbox
Flipboard
Netflix
PayPal`},{id:212,c:"Styling",q:"Is it recommended to use CSS In JS technique in React?",a:"React does not have any opinion about how styles are defined but if you are a beginner then good starting point is to define your styles in a separate *.css file as usual and refer to them using className. This functionality is not part of React but came from third-party libraries. But If you want to try a different approach(CSS-In-JS) then styled-components library is a good option."},{id:213,c:"Hooks",q:"Do I need to rewrite all my class components with hooks?",a:"No. But you can try Hooks in a few components(or new components) without rewriting any existing code. Because there are no plans to remove classes in ReactJS."},{id:214,c:"Hooks",q:"What is useEffect hook? How to fetch data with React Hooks?",a:`The useEffect hook is a React Hook that lets you perform side effects in function components. Side effects are operations that interact with the outside world or system and aren't directly related to rendering UI — such as fetching data, setting up subscriptions, timers, manually manipulating the DOM, etc.

In function components, useEffect replaces the class component lifecycle methods(componentDidMount, componentDidUpdate and componentWillUnmount) with a single, unified API.

Syntax

useEffect(() => {
   // Side effect logic here

   return () => {
   // Cleanup logic (optional)
   };
   }, [dependencies]);
This effect hook can be used to fetch data from an API and to set the data in the local state of the component with the useState hook’s update function.

Here is an example of fetching a list of ReactJS articles from an API using fetch.

import React from "react";

function App() {
  const [data, setData] = React.useState({ hits: [] });

  React.useEffect(() => {
    fetch("http://hn.algolia.com/api/v1/search?query=react")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <ul>
      {data.hits.map((item) => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default App;
A popular way to simplify this is by using the library axios.

We provided an empty array as second argument to the useEffect hook to avoid activating it on component updates. This way, it only fetches on component mount.`},{id:215,c:"Hooks",q:"Is Hooks cover all use cases for classes?",a:"Hooks doesn't cover all use cases of classes but there is a plan to add them soon. Currently there are no Hook equivalents to the uncommon getSnapshotBeforeUpdate and componentDidCatch lifecycles yet."},{id:216,c:"Hooks",q:"What is the stable release for hooks support?",a:`React includes a stable implementation of React Hooks in 16.8 release for below packages

React DOM
React DOM Server
React Test Renderer
React Shallow Renderer`},{id:217,c:"Hooks",q:"Why do we use array destructuring (square brackets notation) in useState?",a:`When we declare a state variable with useState, it returns a pair — an array with two items. The first item is the current value, and the second is a function that updates the value. Using [0] and [1] to access them is a bit confusing because they have a specific meaning. This is why we use array destructuring instead.

For example, the array index access would look as follows:

var userStateVariable = useState("userProfile"); // Returns an array pair
var user = userStateVariable[0]; // Access first item
var setUser = userStateVariable[1]; // Access second item
Whereas with array destructuring the variables can be accessed as follows:

const [user, setUser] = useState("userProfile");`},{id:218,c:"Hooks",q:"What are the sources used for introducing hooks?",a:`Hooks got the ideas from several different sources. Below are some of them,

Previous experiments with functional APIs in the react-future repository
Community experiments with render prop APIs such as Reactions Component
State variables and state cells in DisplayScript.
Subscriptions in Rx.
Reducer components in ReasonReact.`},{id:219,c:"Miscellaneous",q:"How do you access imperative API of web components?",a:"Web Components often expose an imperative API to implement its functions. You will need to use a ref to interact with the DOM node directly if you want to access imperative API of a web component. But if you are using third-party Web Components, the best solution is to write a React component that behaves as a wrapper for your Web Component."},{id:220,c:"Forms & Events",q:"What is formik?",a:`Formik is a small react form library that helps you with the three major problems,

Getting values in and out of form state
Validation and error messages
Handling form submission`},{id:221,c:"Redux",q:"What are typical middleware choices for handling asynchronous calls in Redux?",a:"Some of the popular middleware choices for handling asynchronous calls in Redux eco system are Redux Thunk, Redux Promise, Redux Saga."},{id:222,c:"Miscellaneous",q:"Do browsers understand JSX code?",a:"No, browsers can't understand JSX code. You need a transpiler to convert your JSX to regular Javascript that browsers can understand. The most widely used transpiler right now is Babel."},{id:223,c:"TypeScript & Flow",q:"Describe about data flow in react?",a:"React implements one-way reactive data flow using props which reduce boilerplate and is easier to understand than traditional two-way data binding."},{id:224,c:"Miscellaneous",q:"What is MobX?",a:`MobX is a simple, scalable and battle tested state management solution for applying functional reactive programming (TFRP). For ReactJS application, you need to install below packages,
npm install mobx --save
npm install mobx-react --save`},{id:225,c:"Redux",q:"What are the differences between Redux and MobX?",a:`Below are the main differences between Redux and MobX,

Topic	Redux	MobX
Definition	It is a javascript library for managing the application state	It is a library for reactively managing the state of your applications
Programming	It is mainly written in ES6	It is written in JavaScript(ES5)
Data Store	There is only one large store exist for data storage	There is more than one store for storage
Usage	Mainly used for large and complex applications	Used for simple applications
Performance	Need to be improved	Provides better performance
How it stores	Uses JS Object to store	Uses observable to store the data`},{id:226,c:"Miscellaneous",q:"Should I learn ES6 before learning ReactJS?",a:`No, you don’t have to learn es2015/es6 to learn react. But you may find many resources or React ecosystem uses ES6 extensively. Let's see some of the frequently used ES6 features,

Destructuring: To get props and use them in a component

// in es 5
var someData = this.props.someData;
var dispatch = this.props.dispatch;

// in es6
const { someData, dispatch } = this.props;
Spread operator: Helps in passing props down into a component

// in es 5
<SomeComponent someData={this.props.someData} dispatch={this.props.dispatch} />

// in es6
<SomeComponent {...this.props} />
Arrow functions: Makes compact syntax

// es 5
var users = usersList.map(function (user) {
  return <li>{user.name}</li>;
});
// es 6
const users = usersList.map((user) => <li>{user.name}</li>);`},{id:227,c:"Miscellaneous",q:"What is Concurrent Rendering?",a:`The Concurrent rendering makes React apps to be more responsive by rendering component trees without blocking the main UI thread. It allows React to interrupt a long-running render to handle a high-priority event. i.e, When you enabled concurrent Mode, React will keep an eye on other tasks that need to be done, and if there's something with a higher priority it will pause what it is currently rendering and let the other task finish first. You can enable this in two ways,

// 1. Part of an app by wrapping with ConcurrentMode
<React.unstable_ConcurrentMode>
  <Something />
</React.unstable_ConcurrentMode>;

// 2. Whole app using createRoot
ReactDOM.unstable_createRoot(domNode).render(<App />);`},{id:228,c:"Miscellaneous",q:"What is the difference between async mode and concurrent mode?",a:'Both refers the same thing. Previously concurrent Mode being referred to as "Async Mode" by React team. The name has been changed to highlight React’s ability to perform work on different priority levels. So it avoids the confusion from other approaches to Async Rendering.'},{id:229,c:"Hooks",q:"What is the purpose of eslint plugin for hooks?",a:`The ESLint plugin enforces rules of Hooks to avoid bugs. It assumes that any function starting with ”use” and a capital letter right after it is a Hook. In particular, the rule enforces that,

Calls to Hooks are either inside a PascalCase function (assumed to be a component) or another useSomething function (assumed to be a custom Hook).
Hooks are called in the same order on every render.`},{id:230,c:"Miscellaneous",q:"What is the difference between Imperative and Declarative in React?",a:`Imagine a simple UI component, such as a "Like" button. When you tap it, it turns blue if it was previously grey, and grey if it was previously blue.

The imperative way of doing this would be:

if (user.likes()) {
  if (hasBlue()) {
    removeBlue();
    addGrey();
  } else {
    removeGrey();
    addBlue();
  }
}
Basically, you have to check what is currently on the screen and handle all the changes necessary to redraw it with the current state, including undoing the changes from the previous state. You can imagine how complex this could be in a real-world scenario.

In contrast, the declarative approach would be:

if (this.state.liked) {
  return <blueLike />;
} else {
  return <greyLike />;
}
Because the declarative approach separates concerns, this part of it only needs to handle how the UI should look in a specific state, and is therefore much simpler to understand.`},{id:231,c:"TypeScript & Flow",q:"What are the benefits of using TypeScript with ReactJS?",a:`Below are some of the benefits of using TypeScript with ReactJS,

It is possible to use latest JavaScript features
Use of interfaces for complex type definitions
IDEs such as VS Code was made for TypeScript
Avoid bugs with the ease of readability and Validation`},{id:232,c:"Hooks",q:"How do you make sure that user remains authenticated on page refresh while using Context API State Management?",a:`When a user logs in and reload, to persist the state generally we add the load user action in the useEffect hooks in the main App.js. While using Redux, loadUser action can be easily accessed.

App.js

import { loadUser } from "../actions/auth";
store.dispatch(loadUser());
But while using Context API, to access context in App.js, wrap the AuthState in index.js so that App.js can access the auth context. Now whenever the page reloads, no matter what route you are on, the user will be authenticated as loadUser action will be triggered on each re-render.
index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthState from "./context/auth/AuthState";

ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <App />
    </AuthState>
  </React.StrictMode>,
  document.getElementById("root")
);
App.js

const authContext = useContext(AuthContext);

const { loadUser } = authContext;

useEffect(() => {
  loadUser();
}, []);
loadUser

const loadUser = async () => {
  const token = sessionStorage.getItem("token");

  if (!token) {
    dispatch({
      type: ERROR,
    });
  }
  setAuthToken(token);

  try {
    const res = await axios("/api/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data.data,
    });
  } catch (err) {
    console.error(err);
  }
};`},{id:233,c:"Miscellaneous",q:"What are the benefits of new JSX transform?",a:`There are three major benefits of new JSX transform,

It is possible to use JSX without importing React packages
The compiled output might improve the bundle size in a small amount
The future improvements provides the flexibility to reduce the number of concepts to learn React.`},{id:234,c:"Miscellaneous",q:"How is the new JSX transform different from old transform??",a:`The new JSX transform doesn’t require React to be in scope. i.e, You don't need to import React package for simple scenarios.

Let's take an example to look at the main differences between the old and the new transform,

Old Transform:

import React from "react";

function App() {
  return <h1>Good morning!!</h1>;
}
Now JSX transform convert the above code into regular JavaScript as below,

import React from "react";

function App() {
  return React.createElement("h1", null, "Good morning!!");
}
New Transform:

The new JSX transform doesn't require any React imports

function App() {
  return <h1>Good morning!!</h1>;
}
Under the hood JSX transform compiles to below code

import { jsx as _jsx } from "react/jsx-runtime";

function App() {
  return _jsx("h1", { children: "Good morning!!" });
}
Note: You still need to import React to use Hooks.`},{id:235,c:"Performance",q:"What are React Server components?",a:`React Server Component is a way to write React component that gets rendered in the server-side with the purpose of improving React app performance. These components allow us to load components from the backend.

Note: React Server Components is still under development and not recommended for production yet.`},{id:236,c:"Miscellaneous",q:"What is prop drilling?",a:"Prop Drilling is the process by which you pass data from one component of the React Component tree to another by going through other components that do not need the data but only help in passing it around."},{id:237,c:"Hooks",q:"What is the difference between useState and useRef hook?",a:`useState causes components to re-render after state updates whereas useRef doesn’t cause a component to re-render when the value or state changes. Essentially, useRef is like a “box” that can hold a mutable value in its (.current) property.
useState allows us to update the state inside components. While useRef allows referencing DOM elements and tracking values.`},{id:238,c:"Miscellaneous",q:"What is a wrapper component?",a:`A wrapper in React is a component that wraps or surrounds another component or group of components. It can be used for a variety of purposes such as adding additional functionality, styling, or layout to the wrapped components.

For example, consider a simple component that displays a message:

const Message = ({ text }) => {
  return <p>{text}</p>;
};
We can create a wrapper component that will add a border to the message component:

const MessageWrapper = (props) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <Message {...props} />
    </div>
  );
};
Now we can use the MessageWrapper component instead of the Message component and the message will be displayed with a border:

<MessageWrapper text="Hello World" />
Wrapper component can also accept its own props and pass them down to the wrapped component, for example, we can create a wrapper component that will add a title to the message component:

const MessageWrapperWithTitle = ({ title, ...props }) => {
  return (
    <div>
      <h3>{title}</h3>
      <Message {...props} />
    </div>
  );
};
Now we can use the MessageWrapperWithTitle component and pass title props:

<MessageWrapperWithTitle title="My Message" text="Hello World" />
This way, the wrapper component can add additional functionality, styling, or layout to the wrapped component while keeping the wrapped component simple and reusable.`},{id:239,c:"Hooks",q:"What are the differences between useEffect and useLayoutEffect hooks?",a:`useEffect and useLayoutEffect are both React hooks that can be used to synchronize a component with an external system, such as a browser API or a third-party library. However, there are some key differences between the two:

Timing: useEffect runs after the browser has finished painting, while useLayoutEffect runs synchronously before the browser paints. This means that useLayoutEffect can be used to measure and update layout in a way that feels more synchronous to the user.

Browser Paint: useEffect allows browser to paint the changes before running the effect, hence it may cause some visual flicker. useLayoutEffect synchronously runs the effect before browser paints and hence it will avoid visual flicker.

Execution Order: The order in which multiple useEffect hooks are executed is determined by React and may not be predictable. However, the order in which multiple useLayoutEffect hooks are executed is determined by the order in which they were called.

Error handling: useEffect has a built-in mechanism for handling errors that occur during the execution of the effect, so that it does not crash the entire application. useLayoutEffect does not have this mechanism, and errors that occur during the execution of the effect will crash the entire application.

In general, it's recommended to use useEffect as much as possible, because it is more performant and less prone to errors. useLayoutEffect should only be used when you need to measure or update layout, and you can't achieve the same result using useEffect.`},{id:240,c:"Styling",q:"What are the differences between Functional and Class Components?",a:`There are two different ways to create components in ReactJS. The main differences are listed down as below,

1. Syntax:
The class components uses ES6 classes to create the components. It uses render function to display the HTML content in the webpage.

The syntax for class component looks like as below.

class App extends React.Component {
  render() {
    return <h1>This is a class component</h1>;
  }
}
Note: The Pascal Case is the recommended approach to provide naming to a component.

Functional component has been improved over the years with some added features like Hooks. Here is a syntax for functional component.

function App() {
  return (
    <div className="App">
      <h1>Hello, I'm a function component</h1>
    </div>
  );
}
2. State:
State contains information or data about a component which may change over time.

In class component, you can update the state when a user interacts with it or server updates the data using the setState() method. The initial state is going to be assigned in the Constructor() method using the this.state object and it is possible to assign different data types such as string, boolean, numbers, etc.

A simple example showing how we use the setState() and constructor():

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "This is a class component",
    };
  }
  updateMessage() {
    this.setState({
      message: "Updating the class component",
    });
  }
  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button
          onClick={() => {
            this.updateMessage();
          }}>
          Click!!
        </button>
      </>
    );
  }
}
You didn't use state in functional components because it was only supported in class components. But over the years hooks have been implemented in functional components which enables to use state too.

The useState() hook can used to implement state in functional components. It returns an array with two items: the first item is current state and the next one is a function (setState) that updates the value of the current state.

Let's see an example to demonstrate the state in functional components,

function App() {
  const [message, setMessage] = useState("This is a functional component");
  const updateMessage = () => {
    setMessage("Updating the functional component");
  };
  return (
    <div className="App">
      <h1>{message} </h1>
      <button onClick={updateMessage}>Click me!!</button>
    </div>
  );
}
3. Props:
Props are referred to as "properties". The props are passed into React component just like arguments passed to a function. In other words, they are similar to HTML attributes.

The props are accessible in child class component using this.props as shown in below example,

class Child extends React.Component {
  render() {
    return (
      <h1>
        {" "}
        This is a functional component and component name is {
          this.props.name
        }{" "}
      </h1>
    );
  }
}

class Parent extends React.Component {
  render() {
    return (
      <div className="Parent">
        <Child name="First child component" />
        <Child name="Second child component" />
      </div>
    );
  }
}
Props in functional components are similar to that of the class components but the difference is the absence of 'this' keyword.

function Child(props) {
  return (
    <h1>
      This is a child component and the component name is{props.name}
    </h1>
  );
}

function Parent() {
  return (
    <div className="Parent">
      <Child name="First child component" />
      <Child name="Second child component" />
    </div>
  );
}`},{id:241,c:"Component Patterns",q:"What is strict mode in React?",a:`React.StrictMode is a useful component for highlighting potential problems in an application. Just like <Fragment>, <StrictMode> does not render any extra DOM elements. It activates additional checks and warnings for its descendants. These checks apply for development mode only.

import { StrictMode } from "react";

function App() {
  return (
    <div>
      <Header />
      <StrictMode>
        <div>
          <ComponentOne />
          <ComponentTwo />
        </div>
      </StrictMode>
      <Header />
    </div>
  );
}
In the example above, the strict mode checks apply to <ComponentOne> and <ComponentTwo> components only. i.e., Part of the application only.

Note: Frameworks such as NextJS has this flag enabled by default.`},{id:242,c:"Miscellaneous",q:"What is the benefit of strict mode?",a:`The will be helpful in the below cases,

To find the bugs caused by impure rendering where the components will re-render twice.
To find the bugs caused by missing cleanup of effects where the components will re-run effects one more extra time.
Identifying components with unsafe lifecycle methods.
Warning about legacy string ref API usage.
Detecting unexpected side effects.
Detecting legacy context API.
Warning about deprecated findDOMNode usage`},{id:243,c:"Miscellaneous",q:"Why does strict mode render twice in React?",a:`StrictMode renders components twice in development mode(not production) in order to detect any problems with your code and warn you about those problems. This is used to detect accidental side effects in the render phase. If you used create-react-app development tool then it automatically enables StrictMode by default.

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
If you want to disable this behavior then you can simply remove strict mode.

const root = createRoot(document.getElementById("root"));
root.render(<App />);
To detect side effects the following functions are invoked twice:

Function component bodies, excluding the code inside event handlers.
Functions passed to useState, useMemo, or useReducer (any other Hook)
Class component's constructor, render, and shouldComponentUpdate methods
Class component static getDerivedStateFromProps method
State updater functions`},{id:244,c:"Miscellaneous",q:"What are the rules of JSX?",a:`The below 3 rules needs to be followed while using JSX in a react application.

Return a single root element: If you are returning multiple elements from a component, wrap them in a single parent element. Otherwise you will receive the below error in your browser console.

html Adjacent JSX elements must be wrapped in an enclosing tag.

All the tags needs to be closed: Unlike HTML, all tags needs to closed explicitly with in JSX. This rule applies for self-closing tags(like hr, br and img tags) as well.

Use camelCase naming: It is suggested to use camelCase naming for attributes in JSX. For example, the common attributes of HTML elements such as class, tabindex will be used as className and tabIndex.
Note: There is an exception for aria-* and data-* attributes which should be lower cased all the time.`},{id:245,c:"Miscellaneous",q:"What is the reason behind multiple JSX tags to be wrapped?",a:"Behind the scenes, JSX is transformed into plain javascript objects. It is not possible to return two or more objects from a function without wrapping into an array. This is the reason you can't simply return two or more JSX tags from a function without wrapping them into a single parent tag or a Fragment."},{id:246,c:"Miscellaneous",q:"How do you prevent mutating array variables?",a:`The preexisting variables outside of the function scope including state, props and context leads to a mutation and they result in unpredictable bugs during the rendering stage. The below points should be taken care while working with arrays variables.

You need to take copy of the original array and perform array operations on it for the rendering purpose. This is called local mutation.
Avoid triggering mutation methods such as push, pop, sort and reverse methods on original array. It is safe to use filter, map and slice method because they create a new array.`},{id:247,c:"Forms & Events",q:"What are capture phase events?",a:`The onClickCapture React event is helpful to catch all the events of child elements irrespective of event propagation logic or even if the events propagation stopped. This is useful if you need to log every click events for analytics purpose.

For example, the below code triggers the click event of parent first followed by second level child eventhough leaf child button elements stops the propagation.

<div onClickCapture={() => alert("parent")}>
  <div onClickCapture={() => alert("child")}>
    <button onClick={(e) => e.stopPropagation()} />
    <button onClick={(e) => e.stopPropagation()} />
  </div>
</div>
The event propagation for the above code snippet happens in the following order:

It travels downwards in the DOM tree by calling all onClickCapture event handlers.
It executes onClick event handler on the target element.
It travels upwards in the DOM tree by call all onClick event handlers above to it.
How does React updates screen in an application?
React updates UI in three steps,

Triggering or initiating a render: The component is going to triggered for render in two ways.

Initial render: When the app starts, you can trigger the initial render by calling creatRoot with the target DOM node followed by invoking component's render method. For example, the following code snippet renders App component on root DOM node.
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
Re-render when the state updated: When you update the component state using the state setter function, the componen't state automatically queues for a render.
Rendering components: After triggering a render, React will call your components to display them on the screen. React will call the root component for initial render and call the function component whose state update triggered the render. This is a recursive process for all nested components of the target component.

Commit changes to DOM: After calling components, React will modify the DOM for initial render using appendChild() DOM API and apply minimal necessary DOM updates for re-renders based on differences between rerenders.`},{id:248,c:"Performance",q:"How does React batch multiple state updates?",a:`React prevents component from re-rendering for each and every state update by grouping multiple state updates within an event handler. This strategy improves the application performance and this process known as batching. The older version of React only supported batching for browser events whereas React18 supported for asynchronous actions, timeouts and intervals along with native events. This improved version of batching is called automatic batching.

Let's demonstrate this automatic batching feature with a below example.

import { useState } from "react";

export default function BatchingState() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("batching");

  console.log("Application Rendered");

  const handleAsyncFetch = () => {
    fetch("https://jsonplaceholder.typicode.com/users/1").then(() => {
      // Automatic Batching re-render only once
      setCount(count + 1);
      setMessage("users fetched");
    });
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleAsyncFetch}>Click Me!</button>
    </>
  );
}
The preceding code updated two state variables with in an event handler. However, React will perform automatic batching feature and the component will be re-rendered only once for better performance.`},{id:249,c:"Miscellaneous",q:"Is it possible to prevent automatic batching?",a:`Yes, it is possible to prevent automatic batching default behavior. There might be cases where you need to re-render your component after each state update or updating one state depends on another state variable. Considering this situation, React introduced flushSync method from react-dom API for the usecases where you need to flush state updates to DOM immediately.

The usage of flushSync method within an onClick event handler will be looking like as below,

import { flushSync } from "react-dom";

const handleClick = () => {
  flushSync(() => {
    setClicked(!clicked); //Component will create a re-render here
  });

  setCount(count + 1); // Component will create a re-render again here
};
In the above click handler, React will update DOM at first using flushSync and second time updates DOM because of the counter setter function by avoiding automatic batching.`},{id:250,c:"Server-Side & Next.js",q:"What is React hydration?",a:`React hydration is used to add client-side JavaScript interactivity to pre-rendered static HTML generated by the server. It is used only for server-side rendering(SSR) to enhance the initial rendering time and make it SEO friendly application. This hydration acts as a bridge to reduce the gap between server side and client-side rendering.

After the page loaded with generated static HTML, React will add application state and interactivity by attaching all event handlers for the respective elements. Let's demonstrate this with an example.

Consider that React DOM API(using renderToString) generated HTML for <App> component which contains <button> element to increment the counter.

import {useState} from 'react';
import { renderToString } from 'react-dom/server';

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <h1>Counter</h1>
    <button onClick={() => setCount(prevCount => prevCount + 1)}>
      {count} times
    </button>
    );
}

const html = renderToString(<App />);
The above code generates the below HTML with a header text and button component without any interactivity.

<h1>Counter</h1>
<button>
  <!-- -->0<!-- -->
  times
</button>
At this stage hydrateRoot API can be used to perform hydration by attaching onClick event handler.

import { hydrateRoot } from "react-dom/client";
import App from "./App.js";

hydrateRoot(document.getElementById("root"), <App />);
After this step, you are able to run React application on server-side and hydrating the javascript bundle on client-side for smooth user experience and SEO purposes.`},{id:251,c:"Miscellaneous",q:"How do you update objects inside state?",a:`You cannot update the objects which exists in the state directly. Instead, you should create a fresh new object (or copy from the existing object) and update the latest state using the newly created object. Eventhough JavaScript objects are mutable, you need to treat objects inside state as read-only while updating the state.

Let's see this comparison with an example. The issue with regular object mutation approach can be described by updating the user details fields of Profile component. The properties of Profile component such as firstName, lastName and age details mutated in an event handler as shown below.

import { useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Abraham",
    age: 30,
  });

  function handleFirstNameChange(e) {
    user.firstName = e.target.value;
  }

  function handleLastNameChange(e) {
    user.lastName = e.target.value;
  }

  function handleAgeChange(e) {
    user.age = e.target.value;
  }

  return (
    <>
      <label>
        First name:
        <input value={user.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={user.lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Age:
        <input value={user.age} onChange={handleAgeChange} />
      </label>
      <p>
        Profile:
        {person.firstName} {person.lastName} ({person.age})
      </p>
    </>
  );
}
Once you run the application with above user profile component, you can observe that user profile details won't be update upon entering the input fields. This issue can be fixed by creating a new copy of object which includes existing properties through spread syntax(...obj) and add changed values in a single event handler itself as shown below.

handleProfileChange(e) {
  setUser({
  ...user,
    [e.target.name]: e.target.value
  });
}
The above event handler is concise instead of maintaining separate event handler for each field. Now, UI displays the updated field values as expected without an issue.`},{id:252,c:"Miscellaneous",q:"How do you update nested objects inside state?",a:`You cannot simply use spread syntax for all kinds of objects inside state. Because spread syntax is shallow and it copies properties for one level deep only. If the object has nested object structure, UI doesn't work as expected with regular JavaScript nested property mutation. Let's demonstrate this behavior with an example of User object which has address nested object inside of it.

const user = {
  name: "John",
  age: 32,
  address: {
    country: "Singapore",
    postalCode: 440004,
  },
};
If you try to update the country nested field in a regular javascript fashion(as shown below) then user profile screen won't be updated with latest value.

user.address.country = "Germany";
This issue can be fixed by flattening all the fields into a top-level object or create a new object for each nested object and point it to it's parent object. In this example, first you need to create copy of address object and update it with the latest value. Later, the address object should be linked to parent user object something like below.

setUser({
  ...user,
  address: {
    ...user.address,
    country: "Germany",
  },
});
This approach is bit verbose and not easy for deep hierarchical state updates. But this workaround can be used for few levels of nested objects without much hassle.`},{id:253,c:"Miscellaneous",q:"How do you update arrays inside state?",a:`Eventhough arrays in JavaScript are mutable in nature, you need to treat them as immutable while storing them in a state. That means, similar to objects, the arrays cannot be updated directly inside state. Instead, you need to create a copy of the existing array and then set the state to use newly copied array.

To ensure that arrays are not mutated, the mutation operations like direct direct assignment(arr[1]='one'), push, pop, shift, unshift, splice etc methods should be avoided on original array. Instead, you can create a copy of existing array with help of array operations such as filter, map, slice, spread syntax etc.

For example, the below push operation doesn't add the new todo to the total todo's list in an event handler.

onClick = {
  todos.push({
    id: id+1,
    name: name
  })
}
This issue is fixed by replacing push operation with spread syntax where it will create a new array and the UI updated with new todo.

onClick = {
  [
    ...todos,
    { id: id+1, name: name }
  ]
}`},{id:254,c:"Miscellaneous",q:"How do you use immer library for state updates?",a:`Immer library enforces the immutability of state based on copy-on-write mechanism. It uses JavaScript proxy to keep track of updates to immutable states. Immer has 3 main states as below,

Current state: It refers to actual state
Draft state: All new changes will be applied to this state. In this state, draft is just a proxy of the current state.
Next state: It is formed after all mutations applied to the draft state
Immer can be used by following below instructions,

Install the dependency using npm install use-immer command
Replace useState hook with useImmer hook by importing at the top
The setter function of useImmer hook can be used to update the state.
For example, the mutation syntax of immer library simplifies the nested address object of user state as follows,

import { useImmer } from "use-immer";
const [user, setUser] = useImmer({
  name: "John",
  age: 32,
  address: {
    country: "Singapore",
    postalCode: 440004,
  },
});

//Update user details upon any event
setUser((draft) => {
  draft.address.country = "Germany";
});
The preceding code enables you to update nested objects with a conceise mutation syntax.`},{id:255,c:"Miscellaneous",q:"What are the benefits of preventing the direct state mutations?",a:""},{id:256,c:"Miscellaneous",q:"What are the preferred and non-preferred array operations for updating the state?",a:`The below table represent preferred and non-preferred array operations for updating the component state.

Action	Preferred	Non-preferred
Adding	concat, [...arr]	push, unshift
Removing	filter, slice	pop, shift, splice
Replacing	map	splice, arr[i] = someValue
sorting	copying to new array	reverse, sort
If you use Immer library then you can able to use all array methods without any problem.`},{id:257,c:"Performance",q:"What will happen by defining nested function components?",a:"Technically it is possible to write nested function components but it is not suggested to write nested function definitions. Because it leads to unexpected bugs and performance issues."},{id:258,c:"Miscellaneous",q:"Can I use keys for non-list items?",a:"Keys are primarily used for rendering list items but they are not just for list items. You can also use them React to distinguish components. By default, React uses order of the components in"},{id:259,c:"Redux",q:"What are the guidelines to be followed for writing reducers?",a:`There are two guidelines to be taken care while writing reducers in your code.

Reducers must be pure without mutating the state. That means, same input always returns the same output. These reducers run during rendering time similar to state updater functions. So these functions should not send any requests, schedule time outs and any other side effects.

Each action should describe a single user interaction even though there are multiple changes applied to data. For example, if you "reset" registration form which has many user input fields managed by a reducer, it is suggested to send one "reset" action instead of creating separate action for each fields. The proper ordering of actions should reflect the user interactions in the browser and it helps a lot for debugging purpose.`},{id:260,c:"Miscellaneous",q:"How does ReactJS work behind the scenes?",a:`ReactJS is a powerful JavaScript library for building user interfaces. While it appears simple on the surface, React performs a lot of complex operations behind the scenes to efficiently update the UI. Here's an overview of how it works internally:

1. Virtual DOM & Component Rendering
React doesn't manipulate the real DOM directly. Instead, it uses a Virtual DOM — a lightweight JavaScript representation of the UI.

When a component renders (e.g., <App />):

React executes the component function (e.g., App()).
Hooks like useState are registered and tracked in order.
React builds a Virtual DOM tree from the returned JSX.
This virtual DOM is a plain JS object that describes the desired UI.
This process ensures fast and efficient rendering before React decides how to update the real DOM.

2. React Fiber Architecture
React’s core engine is called Fiber, introduced in React 16. Fiber is a reimplementation of the React reconciliation algorithm with the following capabilities:

Breaks rendering work into units of work (fiber nodes).
Enables interruptible rendering (important for responsiveness).
Supports priority scheduling and concurrent rendering.
Each Fiber node represents a component and stores:

The component type (function/class).
Props, state, and effects.
Links to parent, child, and sibling fibers.
3. Reconciliation (Diffing Algorithm)
When state or props change:

React re-executes the component to produce a new virtual DOM.
It compares the new virtual DOM to the previous one using an efficient diffing algorithm.
React determines the minimal set of DOM changes required.
This process is known as reconciliation.

4. Commit Phase (Real DOM Updates)
Once reconciliation is done:

React enters the commit phase.
It applies calculated changes to the real DOM.
It also runs side effects like useEffect or useLayoutEffect.
This is the only time React interacts directly with the browser DOM.

5. Hooks and State Management
With Hooks (like useState, useEffect):

React keeps an internal list of hooks per component.
Hooks are identified by their order in the function.
When state updates occur, React re-renders the component and re-runs the hooks in the same order.
6. React Scheduler
React uses an internal Scheduler to control how updates are prioritized:

Urgent tasks like clicks and inputs are processed immediately.
Non-urgent tasks (like data fetching) can be delayed or paused.
This improves responsiveness and allows for time slicing in Concurrent Mode.`},{id:261,c:"Hooks",q:"How is useReducer Different from useState?",a:`There are notable differences between useState and useReducer hooks.

Feature	useState	useReducer
State complexity	Simple (one variable or flat object)	Complex, multi-part or deeply nested
Update style	Direct (e.g. setState(x))	Through actions (e.g. dispatch({}))
Update logic	In component	In reducer function
Reusability & testing	Less reusable	Highly reusable & testable`},{id:262,c:"Hooks",q:"What is useContext? What are the steps to follow for useContext?",a:`The useContext hook is a built-in React Hook that lets you access the value of a context inside a functional component without needing to wrap it in a <Context.Consumer> component.

It helps you avoid prop drilling (passing props through multiple levels) by allowing components to access shared data like themes, authentication status, or user preferences.

The usage of useContext involves three main steps:

Step 1 : Create the Context
Use React.createContext() to create a context object.

import React, { createContext } from 'react'; 

const ThemeContext = createContext(); // default value optional
You typically export this so other components can import it.

Step 2: Provide the Context Value
Wrap your component tree (or a part of it) with the Context.Provider and pass a value prop.

function App() {
    return ( 
        <ThemeContext.Provider value="dark">
           <MyComponent />
        </ThemeContext.Provider>
    ); 
}
Now any component inside <ThemeContext.Provider> can access the context value.

Step 3: Consume the Context with **useContext**
In any functional component inside the Provider, use the useContext hook:

import { useContext } from 'react'; 
function MyComponent() {
    const theme = useContext(ThemeContext); // theme = "dark"
    return <p>Current Theme: {theme}</p>; 
}`},{id:263,c:"Hooks",q:"What are the use cases of useContext hook?",a:`The useContext hook in React is used to share data across components without having to pass props manually through each level. Here are some common and effective use cases:

Theme Customization
useContext can be used to manage application-wide themes, such as light and dark modes, ensuring consistent styling and enabling user-driven customization.
Localization and Internationalization
It supports localization by providing translated strings or locale-specific content to components, adapting the application for users in different regions.
User Authentication and Session Management
useContext allows global access to authentication status and user data. This enables conditional rendering of components and helps manage protected routes or user-specific UI elements.
Shared Modal or Sidebar Visibility
It's ideal for managing the visibility of shared UI components like modals, drawers, or sidebars, especially when their state needs to be controlled from various parts of the app.
Combining with **useReducer** for Global State Management
When combined with useReducer, useContext becomes a powerful tool for managing more complex global state logic. This pattern helps maintain cleaner, scalable state logic without introducing external libraries like Redux. Some of the common use cases of useContext are listed below,`},{id:264,c:"Server-Side & Next.js",q:"When to use client and server components?",a:`You can efficiently build nextjs application if you are aware about which part of the application needs to use client components and which other parts needs to use server components. The common cases of both client and server components are listed below:

Client components:

Whenever your need to add interactivity and event listeners such as onClick(), onChange(), etc to the pages
If you need to use State and Lifecycle Effects like useState(), useReducer(), useEffect() etc.
If there is a requirement to use browser-only APIs.
If you need to implement custom hooks that depend on state, effects, or browser-only APIs.
There are React Class components in the pages.
Server components:

If the component logic is about data fetching.
If you need to access backend resources directly.
When you need to keep sensitive information((access tokens, API keys, etc) ) on the server.
If you want reduce client-side JavaScript and placing large dependencies on the server.`},{id:265,c:"Routing",q:"What are the differences between page router and app router in nextjs?",a:`Next.js provides two different routing systems: the Page Router (traditional) and the App Router (introduced in Next.js 13). The App Router is built on React Server Components and offers more powerful features for modern web applications.

Here are the main differences between them:

Feature	Page Router	App Router
Directory	Uses pages/ directory	Uses app/ directory
Routing	File-based routing with files like pages/about.js	File-based routing with folders and special files like app/about/page.js
Components	All components are Client Components by default	All components are Server Components by default
Layouts	Custom _app.js and _document.js for shared layouts	Native nested layouts using layout.js files
Data Fetching	Uses getServerSideProps, getStaticProps, and getInitialProps	Uses async/await in Server Components with native fetch
Loading States	Manual implementation required	Built-in loading.js for streaming and suspense
Error Handling	Custom _error.js page	Built-in error.js for error boundaries at any level
Streaming	Limited support	Built-in support for streaming with Suspense
Server Actions	Not available	Native support for server-side mutations
Metadata	Using Head component from next/head	Native Metadata API with metadata object or generateMetadata function
Rendering	SSR, SSG, ISR, and CSR	SSR, SSG, ISR, CSR plus React Server Components
Example of Page Router structure:

pages/
├── index.js          // Home page (/)
├── about.js          // About page (/about)
├── _app.js           // Custom App component
├── _document.js      // Custom Document
└── posts/
    └── [id].js       // Dynamic route (/posts/:id)
Example of App Router structure:

app/
├── page.js           // Home page (/)
├── layout.js         // Root layout
├── loading.js        // Loading UI
├── error.js          // Error UI
├── about/
│   └── page.js       // About page (/about)
└── posts/
    └── [id]/
        └── page.js   // Dynamic route (/posts/:id)
Note: The App Router is recommended for new Next.js applications as it provides better performance, simpler data fetching patterns, and improved developer experience with React Server Components.`},{id:266,c:"Hooks",q:"Can you describe the useMemo() Hook?",a:`The useMemo() Hook in React is used to optimize performance by memoizing the result of expensive calculations. It ensures that a function is only re-executed when its dependencies change, preventing unnecessary computations on every re-render.

Syntax
 const memoizedValue = useMemo(() => computeExpensiveValue(arg), [dependencies]);
computeExpensiveValue:
A function that returns the computed result.

dependencies:
An array of values that, when changed, will cause the memoized function to re-run.

If the dependencies haven’t changed since the last render, React returns the cached result instead of re-running the function.

Let's exaplain the usage of useMemo hook with an example of user search and its respective filtered users list.

Example: Memoizing a Filtered List
import React, { useState, useMemo } from 'react';

const users = [
  { id: 1, name: 'Sudheer' },
  { id: 2, name: 'Brendon' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'Dary' },
  { id: 5, name: 'Eden' }
];

export default function UserSearch({ users }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [counter, setCounter] = useState(0);

  // Memoize the filtered user list based on the search term
  const filteredUsers = useMemo(() => {
    console.log("Filtering users...");
    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(prev => prev + 1)}>Increment Counter</button>

      <h2>Search Users</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter name"
      />

      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
In the above example:

The filteredUsers list is only recomputed when searchTerm changes.
Pressing the "Increment Counter" button does not trigger the filtering logic again, as it's not a dependency.
The console will only log "Filtering users..." when the search term updates.`},{id:267,c:"Hooks",q:"Can Hooks be used in class components?",a:"No, Hooks cannot be used inside class components. They are specially designed for function components. This is because hooks depend on the sequence in which they are called during a component’s render, something that's only guaranteed in functional components. However, both class and function components can coexist in the same application."},{id:268,c:"Forms & Events",q:"What is an updater function? Should an updater function be used in all cases?",a:`An updater function is a form of setState where you pass a function instead of a direct value. This function receives the previous state as an argument and returns the next state.

The updater function expression looks like below,

setCount(prevCount => prevCount + 1); // Safe and predictable
Here, prevCount => prevCount + 1 is the updater function.

In the React community, there's often a recommendation to use updater functions when updating state that depends on its previous value. This helps prevent unexpected behaviors that can arise from working with outdated or "stale" state.

While using an updater function is a good habit, it's not always necessary. In most cases, React batches updates and ensures that the state is up-to-date at the beginning of the event handler, so you typically don’t run into stale state issues during a single synchronous event. However, if you’re doing multiple updates to the same state variable within a single handler, using the updater form ensures that each update correctly uses the latest state value, rather than a potentially outdated one.

Example: Multiple Updates in One Handler

function handleCount() {
   setCounter(a => a + 1);
   setCounter(a => a + 1);
   setCounter(a => a + 1);
}
In this example, a => a + 1 is an updater function. React queues these updater functions and applies them sequentially, each using the most recent state value. As a result, the counter will correctly increment by 3.

In many cases, such as setting state based on user input or assigning static values, you don’t need the updater function:

setName('Sudheer');`},{id:269,c:"Hooks",q:"Can useState take a function as an initial value?",a:`Yes, useState can take a function as an initial value, and this is a useful feature in React called lazy initialization. This function is also known as initializer function.

When you call useState(initialValue), you normally pass in a value directly:

const [count, setCount] = useState(0);  // initial value is 0
But if calculating that initial value is expensive or involves logic, you can pass a function that returns the value:

   const [count, setCount] = useState(() => {
   // This function only runs once — when the component first renders
   return expensiveComputation();
   });
This function avoids doing heavy computation on every render. If you don't use this function form and invokes it directly, the function will run everytime the component renders and impact the performance. For example, the below usage is not recommended.

const [count, setCount] = useState(expensiveComputation());`},{id:270,c:"Hooks",q:"What types of values can useState hold?",a:`The useState hook accepts different types of values.

Primitives: number, string, boolean
Arrays
Objects
Functions
null or undefined
But you needs to be cautious with reference types (objects/arrays) because React compares old and new values by reference, so direct mutations won't trigger a re-render. For example, the correct and wrong ways of state updates as shown below,

user.name = "Sudheer"; //wrong way
setUser(prev => ({ ...prev, name: 'Sudheer' })); //correct way`},{id:271,c:"Hooks",q:"What happens if you call useState conditionally?",a:`As per rules of React Hooks, hooks must be called unconditionally. For example, if you conditionally call it:

if (someCondition) { 
   const [state, setState] = useState(0); 
}
React will throw a runtime error because it relies on the order of Hook calls, and conditional logic breaks that order.`},{id:272,c:"Hooks",q:"Is useState Synchronous or Asynchronous?",a:`The useState hook is synchronous, but state updates are asynchronous. When you call useState(), it runs synchronously and returns the state variable and setter function as tuple.

const [count, setCount] = useState(0);
This happens immediately during rendering. However, the state update function (setState) is asynchronous in the sense that it doesn't update the state immediately. React batches updates and applies them before the next render. You won’t see the updated value immediately after calling setState.

Example:

const [count, setCount] = useState(0);

function handleClick() {
  setCount(count + 1);
  console.log(count); // ❗️Still logs the old value
}
The > console.log(count) prints the old value, because the update hasn’t happened yet.

To see the updated state value, you can use useEffect() hook. It runs after the component has re-rendered.  By the time useEffect runs:

The component has been updated.
The state contains the new value.
import React, { useState, useEffect } from 'react';

function Counter() {
const [count, setCount] = useState(0);

const handleClick = () => {
setCount(count + 1);
console.log('Clicked count (old):', count); // Old value
};

useEffect(() => {
console.log('Updated count:', count); // New value
}, [count]); // Only runs when \`count\` changes

return <button onClick={handleClick}>Count: {count}</button>;
}`},{id:273,c:"Hooks",q:"Can you explain how useState works internally?",a:`React’s hooks, including useState, rely on some internal machinery that keeps track of state per component and per hook call during rendering. Here's a simplified explanation of the internal mechanics:

1. Hook List / Linked List
React maintains a linked list or array of "hook states" for each component.
When a component renders, React keeps track of which hook it is currently processing via a cursor/index.
Each call to useState() corresponds to one "slot" in this list.
2. State Storage
Each slot stores:
The current state value.
A queue of pending state updates.
3. Initial Render
When the component first renders, React:
Creates a new slot for useState with the initial state (e.g., 0).
Returns [state, updaterFunction].
4. Updater Function
The updater function (setCount) is a closure that, when called:
Enqueues a state update to React's internal queue.
Schedules a re-render of the component.
5. Re-render and State Update
On the next render:
React processes all queued updates for each hook slot.
Updates the stored state value accordingly.
Returns the new state to the component.
6. Important: Hook Order
Hooks must be called in the same order on every render so React can match hook calls to their internal slots.
That’s why you can’t call hooks conditionally.
The pseudocode for internal implementation of useState looks like below,

  let hookIndex = 0;
  const hooks = [];
  
  function useState(initialValue) {
      const currentIndex = hookIndex;
  
      if (!hooks[currentIndex]) {
          // First render: initialize state
          hooks[currentIndex] = {
              state: initialValue,
              queue: [],
          };
      }
  
      const hook = hooks[currentIndex];
  
      // Process queued updates
      hook.queue.forEach(update => {
          hook.state = update(hook.state);
      });
      hook.queue = [];
  
      // Define updater function
      function setState(action) {
          // action can be new state or function(state) => new state
          hook.queue.push(typeof action === 'function' ? action : () => action);
          scheduleRender(); // triggers React re-render
      }
  
      hookIndex++;
      return [hook.state, setState];
  }`},{id:274,c:"Hooks",q:"What is useReducer? Why do you use useReducer?",a:`The useReducer hook is a React hook used to manage complex state logic inside functional components. It is conceptually similar to Redux. i.e, Instead of directly updating state like with useState, you dispatch an action to a reducer function, and the reducer returns the new state.

The useReducer hook takes three arguments:

const [state, dispatch] = useReducer(reducer, initialState, initFunction);
**reducer**: A function (state, action) => newState that handles how state should change based on the action.
**initialState**: The starting state.
**dispatch**: A function you call to trigger an update by passing an action.
The useReducer hook is used when:

The state is complex, such as nested structures or multiple related values.
State updates depend on the previous state and logic.
You want to separate state update logic from UI code to make it cleaner and testable.
You’re managing features like:
Forms
Wizards / Multi-step flows
Undo/Redo functionality
Shopping cart logic
Toggle & conditional UI logic`},{id:275,c:"Hooks",q:"How does useReducer works? Explain with an example",a:`The useReducer hooks works similarly to Redux, where:

You define a reducer function to handle state transitions.
You dispatch actions to update the state.
Counter Example with Increment, Decrement, and Reset:

Reducer function:

Define a counter reducer function that takes the current state and an action object with a type, and returns a new state based on that type.

function counterReducer(state, action) {
   switch (action.type) {
     case 'increment':
       return { count: state.count + 1 };
     case 'decrement':
       return { count: state.count - 1 };
     case 'reset':
       return { count: 0 };
     default:
       return state;
   }
 }
Using useReducer: Invoke useReducer with above reducer function along with initial state. Thereafter, you can attach dispatch actions for respective button handlers.

import React, { useReducer } from 'react';

  function Counter() {
    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Count: {state.count}</h2>
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
    );
  }

export default Counter;
Once the new state has been returned, React re-renders the component with the updated state.count.`},{id:276,c:"Hooks",q:"Can you combine useReducer with useContext?",a:`Yes, it's common to combine useReducer with useContext to build a lightweight state management system similar to Redux:

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}`},{id:277,c:"Hooks",q:"Can you dispatch multiple actions in a row with useReducer?",a:`Yes, you can dispatch multiple actions in a row using useReducer but not directly in one call. You'd have to call dispatch multiple times or create a composite action in your reducer that performs multiple updates based on the action type.

Example: Dispatching Multiple Actions You can define a custom function with dispatching actions one by one.

function handleMultipleActions(dispatch) {
  dispatch({ type: 'increment' });
  dispatch({ type: 'increment' });
  dispatch({ type: 'reset' });
}
After that, you need to invoke it through event handler

<button onClick={() => handleMultipleActions(dispatch)}>
  Run Multiple Actions
</button>
Note: You can also define a custom action type If you want multiple state changes to be handled in one reducer call.

case 'increment_twice':
  return { count: state.count + 2 };
Then dispatch

dispatch({ type: 'increment_twice' });`},{id:278,c:"Hooks",q:"Is dispatch from useReducer asynchronous and does it update state immediately?",a:`The dispatch function returned by useReducer is not asynchronous — it is a synchronous function call. When you call dispatch(action), React synchronously invokes your reducer with the current state and the action, computes the new state, and schedules a re-render. However, the state variable does not update immediately within the same render cycle. The updated state is only available in the next render.

This behavior is similar to useState's setState — React batches state updates for performance optimization, meaning the component does not re-render immediately after each dispatch call. Instead, React processes all dispatched actions and re-renders once with the final state.

Key Points
dispatch is synchronous: The reducer runs immediately when dispatch is called.
State update is not immediate in the current render: The state variable still holds the old value until the next render.
React batches updates: Multiple dispatch calls within the same event handler result in a single re-render.
Reducer is a pure function: It computes the new state without side effects.
Example demonstrating that state does not update immediately
import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleClick = () => {
    dispatch({ type: 'increment' });
    console.log(state.count); // Still logs the OLD value (e.g., 0), not 1
    dispatch({ type: 'increment' });
    console.log(state.count); // Still logs the OLD value (e.g., 0), not 2
  };

  // After re-render, state.count will be 2 (both dispatches are processed)
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={handleClick}>Increment Twice</button>
    </div>
  );
}
In the above example, even though dispatch is called twice, state.count still reflects the previous value inside the event handler. React batches both dispatches and re-renders the component once with count: 2.

How to read updated state after dispatch
If you need the updated value right after dispatching, you have several options:

Use useEffect to react to state changes:

useEffect(() => {
  console.log('Updated count:', state.count);
}, [state.count]);
Compute the next state manually:

const handleClick = () => {
  const nextState = reducer(state, { type: 'increment' });
  console.log('Next state will be:', nextState.count);
  dispatch({ type: 'increment' });
};
Use useRef to track the latest state:

const stateRef = useRef(state);
useEffect(() => {
  stateRef.current = state;
}, [state]);
Note: This behavior is by design in React. The dispatch function itself has a stable identity (it doesn't change between re-renders), which makes it safe to omit from useEffect dependency arrays.`},{id:279,c:"Hooks",q:"How does useContext works? Explain with an example",a:`The useContext hook can be used for authentication state management across multiple components and pages in a React application.

Let's build a simple authentication flow with:

Login and Logout buttons
Global AuthContext to share state
Components that can access and update auth status
1. Create the Auth Context:

You can define AuthProvider which holds and provides user, login(), and logout() via context.

// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username) => setUser({ name: username });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for cleaner usage
export const useAuth = () => useContext(AuthContext);
2. Wrap Your App with the Provider:

Wrap the above created provider in main App.js file

// App.js
import React from 'react';
import { AuthProvider } from './AuthContext';
import HomePage from './HomePage';
import Dashboard from './Dashboard';

function App() {
  return (
    <AuthProvider>
      <HomePage />
      <Dashboard />
    </AuthProvider>
  );
}

export default App;
3. Home page with login: Read or access user and login details through custom useAuth hook and use it inside home page.

 // HomePage.js
 import React from 'react';
 import { useAuth } from './AuthContext';

 function HomePage() {
   const { user, login } = useAuth();

   return (
     <div>
       <h1>Home</h1>
       {user ? (
         <p>Welcome back, {user.name}!</p>
       ) : (
         <button onClick={() => login('Alice')}>Login</button>
       )}
     </div>
   );
 }

 export default HomePage;
4. Dashboard with logout: Read or access user and logout details from useAuth custom hook and use it inside dashboard page.

  // Dashboard.js
  import React from 'react';
  import { useAuth } from './AuthContext';
  
  function Dashboard() {
    const { user, logout } = useAuth();
  
    if (!user) {
      return <p>Please login to view the dashboard.</p>;
    }
  
    return (
      <div>
        <h2>Dashboard</h2>
        <p>Logged in as: {user.name}</p>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }
  
  export default Dashboard;`},{id:280,c:"Hooks",q:"Can You Use Multiple Contexts in One Component?",a:`Yes, it is possible. You can use multiple contexts inside the same component by calling useContext multiple times, once for each context.

It can be achieved with below steps,

Create multiple contexts using createContext().
Wrap your component tree with multiple <Provider>s.
Call useContext() separately for each context in the same component.
Example: Using ThemeContext and UserContext Together

import React, { createContext, useContext } from 'react';

 // Step 1: Create two contexts
 const ThemeContext = createContext();
 const UserContext = createContext();

 function Dashboard() {
   // Step 2: Use both contexts
   const theme = useContext(ThemeContext);
   const user = useContext(UserContext);

   return (
     <div style={{ background: theme === 'dark' ? '#333' : '#fff' }}>
       <h1>Welcome, {user.name}</h1>
       <p>Current theme: {theme}</p>
     </div>
   );
 }

 // Step 3: Provide both contexts
 function App() {
   return (
     <ThemeContext.Provider value="dark">
       <UserContext.Provider value={{ name: 'Sudheer' }}>
         <Dashboard />
       </UserContext.Provider>
     </ThemeContext.Provider>
   );
 }

 export default App;`},{id:281,c:"Hooks",q:"What's a common pitfall when using useContext with objects?",a:`A common pitfall when using useContext with objects is triggering unnecessary re-renders across all consuming components — even when only part of the context value changes.

When you provide an object as the context value, React compares the entire object reference. If the object changes (even slightly), React assumes the whole context has changed, and all components using useContext(MyContext) will re-render, regardless of whether they use the part that changed.

Example:

   const MyContext = React.createContext();

   function MyProvider({ children }) {
     const [user, setUser] = useState(null);
     const [theme, setTheme] = useState('light');

     // This causes all consumers to re-render on any state change
     const contextValue = { user, setUser, theme, setTheme };

     return (
       <MyContext.Provider value={contextValue}>
         {children}
       </MyContext.Provider>
     );
   }
In this case, a change in theme will also trigger a re-render in components that only care about user.

This issue can be fixed in two ways,

1. Split Contexts
Create separate contexts for unrelated pieces of state:

const UserContext = React.createContext(); 
const ThemeContext = React.createContext();
2. Memoize Context Value
Use useMemo to prevent unnecessary re-renders:

  const contextValue = useMemo(() => ({ user, setUser, theme, setTheme }), [user, theme]);
However, this only helps if the object structure and dependencies are well controlled.`},{id:282,c:"Hooks",q:"What would the context value be for no matching provider?",a:`When a component calls useContext(SomeContext) but no matching <SomeContext.Provider> is present higher up in the component tree, the default value passed to React.createContext(defaultValue) is returned.

const ThemeContext = React.createContext('light'); // 'light' is the default value

function ThemedComponent() {
  const theme = useContext(ThemeContext);
  return <div>Current theme: {theme}</div>;
}

// No ThemeContext.Provider anywhere in the tree
In this case, theme will be 'light'. It's the default value you provided when you created the context.

Note: If you don’t specify a default value, the context value will be undefined when used without a provider:

const AuthContext = React.createContext(); // No default

function Profile() {
  const auth = useContext(AuthContext);
  // auth will be undefined if there's no AuthContext.Provider
}`},{id:283,c:"Hooks",q:"How do reactive dependencies in the useEffect dependency array affect its execution behavior?",a:`The useEffect hook accepts an optional dependencies argument that accepts an array of reactive values. The dependency array determines when the effect runs. i.e, It makes useEffect reactive to changes in specified values.

How Dependency Array Affects Behavior
Empty Dependency Array: **[]**
useEffect(() => {
  // runs once after the initial render
}, []);
Effect runs only once (like componentDidMount).
Ignores all state/prop changes.
With Specific Dependencies: **[count, user]**
useEffect(() => {
  // runs after initial render
  // AND whenever \`count\` or \`user\` changes
}, [count, user]);
Effect runs on first render, and
Again every time any dependency value changes.
No Dependency Array (Omitted)

useEffect(() => {
  // runs after **every** render
});
Effect runs after every render, regardless of what changed.
Can lead to performance issues if not used carefully.
React uses shallow comparison of the dependencies. If any value has changed (!==), the effect will re-run.

Note: This hook works well when dependencies are primitives or memoized objects/functions.`},{id:284,c:"Hooks",q:"When and how often does React invoke the setup and cleanup functions inside a useEffect hook?",a:`Setup Function Execution (useEffect)

The setup function (or the main function) you pass to useEffect runs at specific points:

After the component is mounted (if the dependency array is empty [])
After every render (if no dependency array is provided)
After a dependency value changes (if the dependency array contains variables)
Cleanup Function Execution (Returned function from useEffect)

The cleanup function is called before the effect is re-executed and when the component unmounts.`},{id:285,c:"Hooks",q:"What happens if you return a Promise from useEffect??",a:`You should NOT return a Promise from useEffect. React expects the function passed to useEffect to return either nothing (undefined) or a cleanup function (synchronous function). i.e, It does not expect or handle a returned Promise. If you still return a Promise, React will ignore it silently, and it may lead to bugs or warnings in strict mode.

Incorrect:

useEffect(async () => {
  await fetchData(); // ❌ useEffect shouldn't be async
}, []);
Correct:

useEffect(() => {
  const fetchData = async () => {
    const res = await fetch('/api');
    const data = await res.json();
    setData(data);
  };

  fetchData();
}, []);`},{id:286,c:"Hooks",q:"Can you have multiple useEffect hooks in a single component?",a:`Yes, multiple useEffect hooks are allowed and recommended when you want to separate concerns.

useEffect(() => {
  // Handles API fetch
}, []);

useEffect(() => {
  // Handles event listeners
}, []);
Each effect runs independently and helps make code modular and easier to debug.`},{id:287,c:"Hooks",q:"How to prevent infinite loops with useEffect?",a:`Infinite loops happen when the effect updates state that’s listed in its own dependency array, which causes the effect to re-run, updating state again and so on.

Infinite loop scenario:

useEffect(() => {
  setCount(count + 1);
}, [count]); // Triggers again every time count updates
You need to ensure that setState calls do not depend on values that cause the effect to rerun, or isolate them with a guard.

useEffect(() => {
  if (count < 5) {
    setCount(count + 1);
  }
}, [count]);`},{id:288,c:"Styling",q:"What are the usecases of useLayoutEffect?",a:`You need to use useLayoutEffect when your effect must run before the browser paints, such as:

Reading layout measurements (e.g., element size, scroll position)
Synchronously applying DOM styles to prevent visual flicker
Animating layout or transitions
Integrating with third-party libraries that require DOM manipulation
If there's no visual or layout dependency, prefer useEffect — it's more performance-friendly.

useLayoutEffect(() => {
  const width = divRef.current.offsetWidth;
  if (width < 400) {
    divRef.current.style.background = 'blue'; // prevents flicker
  }
}, []);`},{id:289,c:"Hooks",q:"How does useLayoutEffect work during server-side rendering (SSR)?",a:`The useLayoutEffect hook does not run on the server, because there is no DOM. React issues a warning in server environments like Next.js if useLayoutEffect is used directly.

This can be mitigated using a conditional polyfill:

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;
i.e, Use useIsomorphicLayoutEffect in components that render both on client and server.`},{id:290,c:"Performance",q:"What happens if you use useLayoutEffect for non-layout logic?",a:`Using useLayoutEffect for logic unrelated to layout or visual DOM changes (such as logging, data fetching, or analytics) is not recommended. It can lead to performance issues or even unexpected behavior.

Example: Anti-pattern

useLayoutEffect(() => {
  console.log("Tracking analytics");
  fetch('/log-page-view');
}, []);
The above usage delays the paint of the UI just to send a network request, which could (and should) be done after paint using useEffect.`},{id:291,c:"Miscellaneous",q:"How does useLayoutEffect cause layout thrashing?",a:`The useLayoutEffect can cause layout thrashing when you repeatedly read and write to the DOM in ways that force the browser to recalculate layout multiple times per frame. This is because useLayoutEffect runs before the browser paints, these reflows happen synchronously, blocking rendering and degrading performance.

Example:

function ThrashingComponent() {
  const ref = useRef();

  useLayoutEffect(() => {
    const height = ref.current.offsetHeight; //Read
    ref.current.style.height = height + 20 + 'px'; //Write
    const newHeight = ref.current.offsetHeight; //Read again — forces reflow
  }, []);

  return <div ref={ref}>Hello</div>;
}
In the above code, each read/write cycle triggers synchronous reflows, blocking the main thread and delays UI rendering.

This issue can be avoided by batching your DOM reads and writes and prevent unnecessary reads after writes.`},{id:292,c:"Hooks",q:"How Do You Use useRef to Access a DOM Element in React? Give an example.",a:`The useRef hook is commonly used in React to directly reference and interact with DOM elements — like focusing an input, scrolling to a section, or controlling media elements.

When you assign a ref to a DOM element using useRef, React gives you access to the underlying DOM node via the .current property of the ref object.

Example: Focus an input

import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null); // create the ref

  const handleFocus = () => {
    inputRef.current.focus(); // access DOM element and focus it
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>Focus the input</button>
    </div>
  );
}
Note: The DOM reference is only available after the component has mounted — typically accessed in useEffect or event handlers.`},{id:293,c:"Hooks",q:"Can you use useRef to persist values across renders??",a:`Yes, you can use useRef to persist values across renders in React. Unlike useState, changing .current does not cause re-renders, but the value is preserved across renders.

Example:

function Timer() {
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current++;
    console.log("Render count:", renderCount.current);
  });

  return <div>Check console for render count.</div>;
}`},{id:294,c:"Hooks",q:"Can useRef be used to store previous values?",a:`Yes, useRef is a common pattern when you want to compare current and previous props or state without causing re-renders.

Example: Storing previous state value

import { useEffect, useRef, useState } from 'react';

function PreviousValueExample() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const prevCount = prevCountRef.current;

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCount}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}`},{id:295,c:"Component Lifecycle",q:"Is it possible to access a ref in the render method?",a:`Yes, you can access a ref in the render method, but what you get from it depends on how you're using the ref and when in the component lifecycle you're rendering.

For example, when using ref to access a DOM node (e.g., divRef.current), it's not immediately available on the first render.

const divRef = useRef(null);

console.log(divRef.current); // ❌ null on initial render
return <div ref={divRef}>Hello</div>;`},{id:296,c:"Hooks",q:"What are the common usecases of useRef hook?",a:`Some of the common cases are:
Automatically focus an input when a component mounts.
Scroll to a specific element.
Measure element dimensions (offsetWidth, clientHeight).
Control video/audio playback.
Integrate with non-React libraries (like D3 or jQuery).`},{id:297,c:"Hooks",q:"What is useImperativeHandle Hook? Give an example.",a:`useImperativeHandle is a React Hook that allows a child component to expose custom functions or properties to its parent component, when using ref. It is typically used with forwardRef and is very useful in cases like modals, dialogs, custom inputs, etc., where the parent needs to control behavior imperatively (e.g., open, close, reset).

Example: Dialog component

import React, {
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from 'react';
import './Dialog.css'; 

const Dialog = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState('');

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    reset: () => setFormData(''),
  }));

  if (!isOpen) return null;

  return (
    <div className="dialog"> 
      <h2>Dialog</h2>
      <input
        type="text"
        value={formData}
        placeholder="Type something..."
        onChange={(e) => setFormData(e.target.value)}
      />
      <br />
      <button onClick={() => setIsOpen(false)}>Close</button>
    </div>
  );
});

function Parent() {
  const dialogRef = useRef();

  return (
    <div>
      <h1>useImperativeHandle Dialog Example</h1>
      <button onClick={() => dialogRef.current.open()}>Open Dialog</button>
      <button onClick={() => dialogRef.current.reset()}>Reset Dialog</button>
      <button onClick={() => dialogRef.current.close()}>Close Dialog</button>

      <Dialog ref={dialogRef} />
    </div>
  );
}

export default Parent;`},{id:298,c:"Hooks",q:"When should you use useImperativeHandle?",a:`The useImperativeHandler hook will be used in below cases:

You want to expose imperative methods from a child component
Custom input controls exposing focus, clear, or validate methods
Modal components exposing open() and close() methods
Scroll containers exposing scrollToTop() or scrollToBottom() methods
You want to hide internal implementation but provide controlled external access.
You're building reusable component libraries (e.g., inputs, modals, form controls).`},{id:299,c:"Component Patterns",q:"Is that possible to use useImperativeHandle without forwardRef?",a:"No. useImperativeHandle only works when the component is wrapped in forwardRef. It's the combination that allows parent components to use a ref on a function component."},{id:300,c:"Hooks",q:"How is useMemo different from useCallback?",a:`The following table compares both useMemo and useCallback:

Feature	useMemo	useCallback
Purpose	Memoizes the result of a computation	Memoizes a function reference
Returns	A value (e.g., result of a function)	A function
Usage	useMemo(() => computeValue(), [deps])	useCallback(() => doSomething(), [deps])
Primary Use Case	Avoid expensive recalculations	Prevent unnecessary re-creations of functions
Common Scenario	Filtering, sorting, calculating derived data	Passing callbacks to child components
When It's Useful	When the value is expensive to compute	When referential equality matters (e.g., props)
Recomputed When	Dependencies change	Dependencies change
Returned Value Type	Any (number, object, array, etc.)	Always a function
Overhead	Slight (evaluates a function and caches result)	Slight (caches a function reference)`},{id:301,c:"Hooks",q:"Does useMemo prevent re-rendering of child components?",a:`The useMemo hook does not directly prevent re-rendering of child components. Its main purpose is to memoize the result of an expensive computation so that it doesn’t get recalculated unless its dependencies change. While this can improve performance, it doesn’t inherently control whether a child component re-renders.

However, useMemo can help prevent re-renders when the memoized value is passed as a prop to a child component that is wrapped in React.memo. In that case, if the memoized value doesn’t change between renders (i.e., it has the same reference), React.memo can skip re-rendering the child. So, while useMemo doesn’t stop renders on its own, it works in combination with tools like React.memo to optimize rendering behavior.`},{id:302,c:"Hooks",q:"What is useCallback and why is it used?",a:`The useCallback is a React Hook used to memoize function definitions between renders. It returns the same function reference unless its dependencies change. This is especially useful when passing callbacks to optimized child components (e.g. those wrapped in React.memo) to prevent unnecessary re-renders.

Example:

const handleClick = useCallback(() => {
  console.log('Button clicked');
}, []);
Without useCallback, a new function is created on every render, potentially causing child components to re-render unnecessarily.`},{id:303,c:"Hooks",q:"What are Custom React Hooks, and How Can You Develop One?",a:`Custom Hooks in React are JavaScript functions that allow you to extract and reuse component logic using React’s built-in Hooks like useState, useEffect, etc.

They start with the word "use" and let you encapsulate logic that multiple components might share—such as fetching data, handling forms, or managing timers—without repeating code.

Let's explain the custom hook usage with useFetchData example. The useFetchData custom Hook is a reusable function in React that simplifies the process of fetching data from an API. It encapsulates common logic such as initiating the fetch request, managing loading and error states, and storing the fetched data. By using built-in Hooks like useState and useEffect, useFetchData provides a clean interface that returns the data, loading, and error values, which can be directly used in components.

import { useState, useEffect } from 'react';

function useFetchData(url) {
  const [data, setData] = useState(null);     // Holds the response
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);     // Error state

  useEffect(() => {
    let isMounted = true; // Prevent setting state on unmounted component
    setLoading(true);

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((json) => {
        if (isMounted) {
          setData(json);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false; // Clean-up function to avoid memory leaks
    };
  }, [url]);

  return { data, loading, error };
}
The above custom hook can be used to retrieve users data for AuthorList, ReviewerList components.

Example: AuthorList component

function AuthorList() {
  const { data, loading, error } = useFetchData('https://api.example.com/authors');

  if (loading) return <p>Loading authors...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map((author) => (
        <li key={author.id}>{author.name}</li>
      ))}
    </ul>
  );
}
Some of the benefits of custom hooks are:

Promotes code reuse
Keeps components clean and focused
Makes complex logic easier to test and maintain`},{id:304,c:"Miscellaneous",q:"How does React Fiber works? Explain in detail.",a:`React Fiber is the core engine that enables advanced features like concurrent rendering, prioritization, and interruptibility in React. Here's how it works:

1. Fiber Tree Structure
Each component in your app is represented by a Fiber node in a tree structure. A Fiber node contains:

Component type
Props & state
Pointers to parent, child, and sibling nodes
Effect tags to track changes (e.g., update, placement)
This forms the Fiber Tree, a data structure React uses instead of the traditional call stack.
2. Two Phases of Rendering
A. Render Phase (work-in-progress)
React builds a work-in-progress Fiber tree.
It walks through each component (begin phase), calculates what needs to change, and collects side effects (complete phase).
This phase is interruptible—React can pause it and resume later.
B. Commit Phase
React applies changes to the Real DOM.
Runs lifecycle methods (e.g., componentDidMount, useEffect).
This phase is non-interruptible but fast.
3. Work Units and Scheduling
React breaks rendering into units of work (small tasks).
These units are scheduled based on priority using the React Scheduler.
If time runs out (e.g., user starts typing), React can pause and yield control back to the browser.
4. Double Buffering with Two Trees
React maintains two trees:
Current Tree – what's visible on the screen.
Work-In-Progress Tree – the next version being built in memory.
Only after the new tree is fully ready, React commits it, making it the new current tree.
5. Concurrency and Prioritization
React can prepare multiple versions of UI at once (e.g., during slow data loading).
Updates can be assigned priorities, so urgent updates (like clicks) are handled faster than background work.`},{id:305,c:"Hooks",q:"What is the useId hook and when should you use it?",a:`The useId hook is a React hook introduced in React 18 that generates unique IDs that are stable across server and client renders. It's primarily used for accessibility attributes like linking form labels to inputs.

Syntax
const id = useId();
Example: Accessible Form Input
import { useId } from 'react';

function EmailField() {
  const id = useId();
  
  return (
    <div>
      <label htmlFor={id}>Email:</label>
      <input id={id} type="email" />
    </div>
  );
}
When to Use
Generating unique IDs for form elements (htmlFor, aria-describedby, aria-labelledby)
Creating stable IDs in server-side rendering (SSR) applications
Avoiding ID collisions when the same component is rendered multiple times
When NOT to Use
As keys in a list (use data-based keys instead)
As CSS selectors or query selectors
For any purpose that requires the ID to be predictable
Note: The IDs generated by useId contain colons (:) which may not work in CSS selectors. For multiple related IDs, you can use the same id as a prefix: \${id}-firstName, \${id}-lastName.`},{id:306,c:"Hooks",q:"What is the useDeferredValue hook?",a:`The useDeferredValue hook is used to defer updating a part of the UI to keep other parts responsive. It accepts a value and returns a "deferred" version of that value that may lag behind. This is useful for optimizing performance when rendering expensive components.

Syntax
const deferredValue = useDeferredValue(value);
Example: Search with Deferred Results
import { useState, useDeferredValue, useMemo } from 'react';

function SearchResults({ query }) {
  // Expensive computation or large list filtering
  const results = useMemo(() => {
    return largeDataSet.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <ul>
      {results.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  );
}

function SearchPage() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;

  return (
    <div>
      <input 
        value={query} 
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <div style={{ opacity: isStale ? 0.5 : 1 }}>
        <SearchResults query={deferredQuery} />
      </div>
    </div>
  );
}
The input stays responsive while the expensive SearchResults component re-renders with a slight delay using the deferred value.`},{id:307,c:"Hooks",q:"What is the useTransition hook and how does it differ from useDeferredValue?",a:`The useTransition hook allows you to mark certain state updates as non-urgent transitions, keeping the UI responsive during expensive re-renders. It returns a isPending flag and a startTransition function.

Syntax
const [isPending, startTransition] = useTransition();
Example: Tab Switching
import { useState, useTransition } from 'react';

function TabContainer() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('home');

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }

  return (
    <div>
      <button onClick={() => selectTab('home')}>Home</button>
      <button onClick={() => selectTab('posts')}>Posts (slow)</button>
      <button onClick={() => selectTab('contact')}>Contact</button>
      
      {isPending && <Spinner />}
      
      {tab === 'home' && <HomeTab />}
      {tab === 'posts' && <PostsTab />}  {/* Expensive component */}
      {tab === 'contact' && <ContactTab />}
    </div>
  );
}
Differences from useDeferredValue
Feature	useTransition	useDeferredValue
Controls	State updates (wraps setState)	Values (wraps a value)
Use case	When you control the state update	When you receive a value from props or other hooks
Returns	[isPending, startTransition]	Deferred value
Pending state	Built-in isPending flag	Manual comparison needed`},{id:308,c:"Hooks",q:"What is the useSyncExternalStore hook?",a:`The useSyncExternalStore hook is designed to subscribe to external stores (non-React state sources) in a way that's compatible with concurrent rendering. It's primarily used by library authors for state management libraries.

Syntax
const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?);
subscribe: Function to subscribe to the store, returns an unsubscribe function
getSnapshot: Function that returns the current store value
getServerSnapshot: Optional function for SSR that returns the initial server snapshot
Example: Browser Online Status
import { useSyncExternalStore } from 'react';

function getSnapshot() {
  return navigator.onLine;
}

function subscribe(callback) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}

function useOnlineStatus() {
  return useSyncExternalStore(subscribe, getSnapshot, () => true);
}

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}
This hook ensures that when the external store changes, React re-renders consistently without tearing (showing inconsistent data).`},{id:309,c:"Hooks",q:"What is the useInsertionEffect hook?",a:`The useInsertionEffect hook is designed for CSS-in-JS library authors to inject styles into the DOM before any layout effects run. It fires synchronously before DOM mutations.

Syntax
useInsertionEffect(() => {
  // Insert styles here
  return () => {
    // Cleanup
  };
}, [dependencies]);
Execution Order
1. useInsertionEffect  → Inject styles
2. DOM mutations       → React updates DOM
3. useLayoutEffect     → Read layout, synchronously re-render if needed
4. Browser paint       → User sees the result
5. useEffect           → Side effects run
Example: Dynamic Style Injection
import { useInsertionEffect } from 'react';

let isInserted = new Set();

function useCSS(rule) {
  useInsertionEffect(() => {
    if (!isInserted.has(rule)) {
      isInserted.add(rule);
      const style = document.createElement('style');
      style.textContent = rule;
      document.head.appendChild(style);
    }
  }, [rule]);
}

function Button() {
  useCSS('.dynamic-btn { background: blue; color: white; }');
  return <button className="dynamic-btn">Click me</button>;
}
Note: This hook is not intended for application code. It's specifically for CSS-in-JS libraries like styled-components or Emotion to prevent style flickering.`},{id:310,c:"Hooks",q:"How do you share state logic between components using custom hooks?",a:`Custom hooks allow you to extract and share stateful logic between components without changing their hierarchy. The state itself is not shared—each component using the hook gets its own isolated state.

Example: useLocalStorage Hook
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Get stored value or use initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Update localStorage when state changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

// Usage in multiple components
function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Current: {theme}
    </button>
  );
}

function FontSizeSelector() {
  const [fontSize, setFontSize] = useLocalStorage('fontSize', 16);
  return (
    <input 
      type="range" 
      value={fontSize} 
      onChange={(e) => setFontSize(Number(e.target.value))} 
    />
  );
}
Both components use useLocalStorage, but each has its own independent state that persists to localStorage.`},{id:311,c:"Hooks",q:"What is the useDebugValue hook?",a:`The useDebugValue hook is used to display a label for custom hooks in React DevTools. It helps developers debug custom hooks by showing meaningful information.

Syntax
useDebugValue(value);
useDebugValue(value, formatFn); // With optional formatter
Example: Custom Hook with Debug Value
import { useState, useEffect, useDebugValue } from 'react';

function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Shows "OnlineStatus: Online" or "OnlineStatus: Offline" in DevTools
  useDebugValue(isOnline ? 'Online' : 'Offline');

  return isOnline;
}
With Formatting Function (for expensive computations)
function useUser(userId) {
  const [user, setUser] = useState(null);
  
  // The format function only runs when DevTools is open
  useDebugValue(user, (user) => user ? \`User: \${user.name}\` : 'Loading...');
  
  return user;
}
Note: Only use useDebugValue in custom hooks that are part of shared libraries. It's not necessary for every custom hook in application code.`},{id:312,c:"Hooks",q:"How do you handle cleanup in useEffect?",a:`The cleanup function in useEffect is used to clean up side effects before the component unmounts or before the effect runs again. This prevents memory leaks, stale data, and unexpected behavior.

Syntax
useEffect(() => {
  // Setup code
  
  return () => {
    // Cleanup code
  };
}, [dependencies]);
Common Cleanup Scenarios
1. Event Listeners

useEffect(() => {
  const handleResize = () => setWidth(window.innerWidth);
  window.addEventListener('resize', handleResize);
  
  return () => window.removeEventListener('resize', handleResize);
}, []);
2. Timers and Intervals

useEffect(() => {
  const intervalId = setInterval(() => {
    setCount(c => c + 1);
  }, 1000);
  
  return () => clearInterval(intervalId);
}, []);
3. Subscriptions

useEffect(() => {
  const subscription = dataSource.subscribe(handleChange);
  
  return () => subscription.unsubscribe();
}, [dataSource]);
4. Abort Fetch Requests

useEffect(() => {
  const controller = new AbortController();
  
  fetch(url, { signal: controller.signal })
    .then(response => response.json())
    .then(data => setData(data))
    .catch(err => {
      if (err.name !== 'AbortError') {
        setError(err);
      }
    });
  
  return () => controller.abort();
}, [url]);
When Cleanup Runs:

Before the component unmounts
Before re-running the effect when dependencies change`},{id:313,c:"Hooks",q:"What are the differences between useEffect and useEvent (experimental)?",a:`useEvent is an experimental hook (not yet stable in React) designed to solve the problem of creating stable event handlers that always access the latest props and state without causing re-renders or needing to be in dependency arrays.

The Problem useEvent Solves
// Problem: onTick changes on every render, causing interval to reset
function Timer({ onTick }) {
  useEffect(() => {
    const id = setInterval(() => {
      onTick(); // Uses stale closure if onTick is not in deps
    }, 1000);
    return () => clearInterval(id);
  }, [onTick]); // Adding onTick causes interval to reset frequently
}
Solution with useEvent (Experimental)
import { useEvent } from 'react'; // Experimental

function Timer({ onTick }) {
  const stableOnTick = useEvent(onTick);

  useEffect(() => {
    const id = setInterval(() => {
      stableOnTick(); // Always calls latest onTick
    }, 1000);
    return () => clearInterval(id);
  }, []); // No dependency needed!
}
Key Differences
Feature	useEffect	useEvent (experimental)
Purpose	Run side effects	Create stable callbacks
Runs	After render	During render (creates function)
Returns	Cleanup function	Stable event handler
Closure	Captures values at render time	Always accesses latest values
Dependencies	Must list all used values	Not needed in other hooks' deps
Note: Until useEvent is stable, you can use useCallback with useRef as a workaround for stable callbacks.`},{id:314,c:"Hooks",q:"What are the best practices for using React Hooks?",a:`Following best practices ensures your hooks are predictable, maintainable, and bug-free.

1. Follow the Rules of Hooks
Only call hooks at the top level (not inside loops, conditions, or nested functions)
Only call hooks from React functions (components or custom hooks)
2. Use the ESLint Plugin
npm install eslint-plugin-react-hooks --save-dev
{
  "plugins": ["react-hooks"],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
3. Keep Hooks Focused and Simple
// ❌ Bad: One hook doing too much
function useEverything() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [theme, setTheme] = useState('light');
  // ... lots of unrelated logic
}

// ✅ Good: Separate concerns
function useUser() { /* user logic */ }
function usePosts() { /* posts logic */ }
function useTheme() { /* theme logic */ }
4. Use Descriptive Names for Custom Hooks
// ❌ Bad
function useData() { }

// ✅ Good
function useUserAuthentication() { }
function useFetchProducts() { }
function useFormValidation() { }
5. Properly Manage Dependencies
// ❌ Bad: Missing dependency
useEffect(() => {
  fetchUser(userId);
}, []); // userId is missing

// ✅ Good: All dependencies listed
useEffect(() => {
  fetchUser(userId);
}, [userId]);
6. Avoid Inline Object/Function Dependencies
// ❌ Bad: New object on every render
useEffect(() => {
  doSomething(options);
}, [{ page: 1, limit: 10 }]); // Always different reference

// ✅ Good: Memoize or extract
const options = useMemo(() => ({ page: 1, limit: 10 }), []);
useEffect(() => {
  doSomething(options);
}, [options]);
7. Clean Up Side Effects
Always return a cleanup function when subscribing to events, timers, or external data sources.`},{id:315,c:"Performance",q:"Modern React Features (React 18/19)",a:`What are the key features introduced in React 18?
React 18, released in March 2022, introduced several groundbreaking features focused on performance and user experience:

1. Automatic Batching
Batch multiple state updates together (even in async code) to reduce re-renders.

// Before React 18: Only batched in event handlers
// After React 18: Batched everywhere
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // Only 1 re-render in React 18!
}, 1000);
2. Concurrent Features
useTransition: Mark updates as non-urgent
useDeferredValue: Defer expensive re-renders
Suspense on Server: SSR with Suspense support
3. New createRoot API
// Old way (React 17)
ReactDOM.render(<App />, document.getElementById('root'));

// New way (React 18)
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(<App />);
4. Streaming SSR with Suspense
Stream HTML from server and hydrate components as they arrive.

5. New Hooks
useId: Generate unique IDs for accessibility
useSyncExternalStore: Subscribe to external stores
useInsertionEffect: For CSS-in-JS libraries
6. Strict Mode Improvements
Double-invokes effects in development to catch bugs.`},{id:316,c:"Hooks",q:"What are the key features introduced in React 19?",a:`React 19 (released 2024) brings major improvements for full-stack React applications:

1. React Compiler (formerly React Forget)
Automatic memoization - no more manual useMemo, useCallback, or React.memo needed!

// Before: Manual optimization
const memoizedValue = useMemo(() => expensiveCalc(a, b), [a, b]);

// React 19: Compiler does it automatically
const value = expensiveCalc(a, b); // Automatically optimized!
2. Server Actions
Call server functions directly from components:

async function createPost(formData) {
  'use server'
  const post = await db.posts.create({
    title: formData.get('title')
  });
  revalidatePath('/posts');
  return post;
}

function NewPost() {
  return (
    <form action={createPost}>
      <input name="title" />
      <button type="submit">Create</button>
    </form>
  );
}
3. Actions & Form Actions
Automatic handling of pending states, errors, and optimistic updates:

function Form() {
  const [state, formAction] = useFormState(serverAction, initialState);
  const { pending } = useFormStatus();
  
  return (
    <form action={formAction}>
      <input disabled={pending} />
      <button disabled={pending}>
        {pending ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
4. use() Hook
Read resources (Promises, Context) inside render:

function User({ userPromise }) {
  const user = use(userPromise); // Suspends until resolved
  return <div>{user.name}</div>;
}
5. useOptimistic Hook
Implement optimistic UI updates:

function TodoList({ todos }) {
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, newTodo) => [...state, { ...newTodo, pending: true }]
  );

  async function createTodo(title) {
    addOptimisticTodo({ id: Date.now(), title });
    await saveTodo(title);
  }

  return optimisticTodos.map(todo => (
    <Todo key={todo.id} {...todo} />
  ));
}
6. Document Metadata
Built-in support for <title>, <meta>, etc.:

function BlogPost({ post }) {
  return (
    <>
      <title>{post.title}</title>
      <meta name="description" content={post.excerpt} />
      <article>{post.content}</article>
    </>
  );
}
7. Asset Loading APIs
Preload resources for better performance:

import { preload, preinit } from 'react-dom';

preload('/font.woff2', { as: 'font' });
preinit('/script.js', { as: 'script' });`},{id:317,c:"Hooks",q:"What is the use() hook in React 19?",a:`The use() hook allows you to read the value of a resource (Promise or Context) during render, with Suspense integration.

Reading Promises
import { use, Suspense } from 'react';

function UserProfile({ userPromise }) {
  const user = use(userPromise); // Suspends until resolved
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

function App() {
  const userPromise = fetchUser(123);
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserProfile userPromise={userPromise} />
    </Suspense>
  );
}
Reading Context
import { use } from 'react';
import { ThemeContext } from './context';

function Button() {
  const theme = use(ThemeContext);
  return <button className={theme}>Click me</button>;
}
Key Differences from Other Hooks
Feature	use()	useContext()	useState()
Can be called conditionally	✅ Yes	❌ No	❌ No
Can be called in loops	✅ Yes	❌ No	❌ No
Suspends for Promises	✅ Yes	❌ N/A	❌ N/A
Reads Context	✅ Yes	✅ Yes	❌ N/A
Conditional Usage (Unique!)
function Component({ showUser, userPromise }) {
  // ✅ This is allowed with use()!
  const user = showUser ? use(userPromise) : null;
  
  return user ? <div>{user.name}</div> : <div>No user</div>;
}`},{id:318,c:"Server-Side & Next.js",q:"What are Server Actions in React 19?",a:`Server Actions allow you to call server-side functions directly from client components without writing API endpoints.

Basic Server Action
// app/actions.js
'use server'

export async function createPost(formData) {
  const title = formData.get('title');
  const content = formData.get('content');
  
  const post = await db.posts.create({
    title,
    content,
    userId: await getCurrentUser()
  });
  
  revalidatePath('/posts');
  redirect(\`/posts/\${post.id}\`);
}
Using in Forms
// app/new-post.jsx
import { createPost } from './actions';

export default function NewPost() {
  return (
    <form action={createPost}>
      <input name="title" required />
      <textarea name="content" required />
      <button type="submit">Create Post</button>
    </form>
  );
}
With useFormState for Loading States
'use client'
import { useFormState } from 'react-dom';
import { createPost } from './actions';

export default function NewPost() {
  const [state, formAction] = useFormState(createPost, { message: '' });
  
  return (
    <form action={formAction}>
      <input name="title" required />
      <textarea name="content" required />
      <button type="submit">Create Post</button>
      {state.message && <p>{state.message}</p>}
    </form>
  );
}
Progressive Enhancement
Server Actions work even if JavaScript is disabled!

// This form works without JavaScript
<form action={serverAction}>
  <input name="email" type="email" />
  <button>Subscribe</button>
</form>
Security
Automatically CSRF protected
Always run on server (never exposed to client)
Can use server-only packages safely`},{id:319,c:"Hooks",q:"What are useFormState and useFormStatus hooks?",a:`These hooks simplify form handling with Server Actions in React 19.

useFormState
Manages form state and handles server responses:

'use client'
import { useFormState } from 'react-dom';
import { loginAction } from './actions';

export default function LoginForm() {
  const [state, formAction] = useFormState(loginAction, {
    errors: {},
    message: ''
  });

  return (
    <form action={formAction}>
      <input name="email" type="email" />
      {state.errors.email && <p>{state.errors.email}</p>}
      
      <input name="password" type="password" />
      {state.errors.password && <p>{state.errors.password}</p>}
      
      <button type="submit">Login</button>
      {state.message && <p>{state.message}</p>}
    </form>
  );
}
useFormStatus
Get the pending state of parent form:

'use client'
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending, data, method, action } = useFormStatus();
  
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}

// Must be used in a child component of <form>
export default function MyForm() {
  return (
    <form action={serverAction}>
      <input name="email" />
      <SubmitButton />
    </form>
  );
}
Combining Both
'use client'
import { useFormState, useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? '⏳ Saving...' : '💾 Save'}
    </button>
  );
}

export default function EditProfile() {
  const [state, formAction] = useFormState(updateProfile, null);

  return (
    <form action={formAction}>
      <input name="name" defaultValue={user.name} />
      <input name="bio" defaultValue={user.bio} />
      <SubmitButton />
      {state?.success && <p>✅ Profile updated!</p>}
      {state?.error && <p>❌ {state.error}</p>}
    </form>
  );
}
Key Points
useFormState: For managing server responses and errors
useFormStatus: For UI feedback during submission
useFormStatus must be used in a child component of the form
Works seamlessly with Server Actions`},{id:320,c:"Hooks",q:"What is the useOptimistic hook?",a:`useOptimistic enables optimistic UI updates - showing changes immediately before server confirmation.

Basic Usage
import { useOptimistic } from 'react';

function TodoList({ todos, addTodo }) {
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (currentTodos, newTodo) => [...currentTodos, { ...newTodo, pending: true }]
  );

  async function handleSubmit(formData) {
    const title = formData.get('title');
    
    // Immediately show optimistic update
    addOptimisticTodo({ id: Date.now(), title });
    
    // Send to server
    await addTodo(title);
    // Component re-renders with real data when complete
  }

  return (
    <>
      <form action={handleSubmit}>
        <input name="title" />
        <button>Add</button>
      </form>
      
      <ul>
        {optimisticTodos.map(todo => (
          <li key={todo.id} style={{ opacity: todo.pending ? 0.5 : 1 }}>
            {todo.title}
            {todo.pending && ' ⏳'}
          </li>
        ))}
      </ul>
    </>
  );
}
With Server Actions
'use client'
import { useOptimistic } from 'react';
import { likePost } from './actions';

export default function Post({ post, likes }) {
  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    likes,
    (currentLikes, amount) => currentLikes + amount
  );

  async function handleLike() {
    addOptimisticLike(1); // Immediate UI update
    await likePost(post.id); // Server update
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <button onClick={handleLike}>
        ❤️ {optimisticLikes} Likes
      </button>
    </div>
  );
}
Complex Example with Error Handling
function ShoppingCart({ items, removeItem }) {
  const [optimisticItems, removeOptimistic] = useOptimistic(
    items,
    (current, removedId) => current.filter(item => item.id !== removedId)
  );

  async function handleRemove(itemId) {
    removeOptimistic(itemId); // Immediate removal from UI
    
    try {
      await removeItem(itemId);
    } catch (error) {
      // Automatic rollback on error!
      toast.error('Failed to remove item');
    }
  }

  return (
    <ul>
      {optimisticItems.map(item => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}
When to Use
✅ Toggling likes/favorites
✅ Adding/removing items from lists
✅ Sending messages in chat
✅ Any action where immediate feedback improves UX
❌ Financial transactions (wait for confirmation)
❌ Critical operations requiring server validation`},{id:321,c:"Hooks",q:"What is the React Compiler (React Forget)?",a:`The React Compiler (formerly known as React Forget) automatically optimizes your components by adding memoization where needed - eliminating the need for manual useMemo, useCallback, and React.memo.

Before React Compiler
function TodoList({ todos, filter }) {
  // Manual optimization needed
  const filteredTodos = useMemo(() => {
    return todos.filter(todo => todo.status === filter);
  }, [todos, filter]);

  const handleToggle = useCallback((id) => {
    toggleTodo(id);
  }, [toggleTodo]);

  return (
    <div>
      {filteredTodos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onToggle={handleToggle} 
        />
      ))}
    </div>
  );
}

// Need to wrap in React.memo
export default React.memo(TodoList);
With React Compiler
function TodoList({ todos, filter }) {
  // Compiler automatically optimizes this!
  const filteredTodos = todos.filter(todo => todo.status === filter);

  const handleToggle = (id) => {
    toggleTodo(id);
  };

  return (
    <div>
      {filteredTodos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onToggle={handleToggle} 
        />
      ))}
    </div>
  );
}

// No React.memo needed!
export default TodoList;
How It Works
Analyzes code during build time
Identifies expensive calculations and renders
Automatically inserts memoization where beneficial
Preserves React semantics - your code still behaves correctly
Benefits
✅ Simpler code - no manual optimization
✅ Better performance by default
✅ Fewer bugs from incorrect dependencies
✅ Easier to maintain and read
✅ Works with existing code
Enabling React Compiler
// next.config.js (Next.js)
module.exports = {
  experimental: {
    reactCompiler: true
  }
}

// vite.config.js (Vite)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']]
      }
    })
  ]
})
When to Still Use Manual Optimization
// For external libraries without Compiler support
import { expensiveLibFunction } from 'old-library';

function MyComponent() {
  // May still need manual memoization here
  const result = useMemo(() => expensiveLibFunction(), []);
  return <div>{result}</div>;
}
Compatibility
Works with React 18.3+ and React 19
Compatible with TypeScript
Works with all React hooks
Supports Server Components and Client Components`},{id:322,c:"Server-Side & Next.js",q:"What is Streaming SSR and how does React 18+ improve it?",a:`Streaming SSR sends HTML to the browser in chunks as it's generated, rather than waiting for the entire page. React 18+ dramatically improves this with Suspense integration.

Traditional SSR (Pre-React 18)
Server: Wait for ALL data → Generate ALL HTML → Send to client
Client: Receive HTML → Download ALL JS → Hydrate ALL components
Problem: Slow components block entire page!
Streaming SSR (React 18+)
Server: Send HTML as it's ready, wrap slow parts in <Suspense>
Client: Render immediately, hydrate progressively
Benefit: User sees content faster!
Basic Example
import { Suspense } from 'react';

export default function Page() {
  return (
    <html>
      <body>
        {/* Sent immediately */}
        <header>
          <h1>My App</h1>
        </header>

        {/* Sent immediately with fallback */}
        <Suspense fallback={<div>Loading comments...</div>}>
          <Comments /> {/* Streamed when ready */}
        </Suspense>

        {/* Also streamed separately */}
        <Suspense fallback={<div>Loading recommendations...</div>}>
          <Recommendations /> {/* Streamed when ready */}
        </Suspense>

        <footer>© 2026</footer>
      </body>
    </html>
  );
}
Server Component with Data Fetching
// This is a Server Component (async!)
async function Comments() {
  const comments = await db.comments.findMany();
  
  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>{comment.text}</li>
      ))}
    </ul>
  );
}
How It Works
Server starts sending HTML immediately
When it hits <Suspense>, it sends the fallback
Continues streaming rest of the page
When data is ready, sends the actual component
Client replaces fallback with real content
Hydration happens independently per component
Selective Hydration
function App() {
  return (
    <div>
      <header>Header</header> {/* Hydrates first */}
      
      <Suspense fallback={<Spinner />}>
        <HeavyComponent /> {/* Hydrates when user interacts */}
      </Suspense>
      
      <Suspense fallback={<Spinner />}>
        <Comments /> {/* Hydrates independently */}
      </Suspense>
    </div>
  );
}
Benefits
Faster TTFB (Time to First Byte): User sees content sooner
Better UX: Progressive loading instead of blank screen
Prioritized hydration: Interactive elements hydrate first
Resilient: Slow components don't block fast ones
Next.js App Router Example
// app/page.tsx
import { Suspense } from 'react';
import ProductList from './ProductList';
import Reviews from './Reviews';

export default function ProductPage() {
  return (
    <div>
      <h1>Product Page</h1>
      
      {/* Streams product list first */}
      <Suspense fallback={<ProductSkeleton />}>
        <ProductList />
      </Suspense>

      {/* Reviews stream separately */}
      <Suspense fallback={<ReviewSkeleton />}>
        <Reviews />
      </Suspense>
    </div>
  );
}

// These are async Server Components
async function ProductList() {
  const products = await fetchProducts(); // Doesn't block Reviews
  return <div>{/* render products */}</div>;
}

async function Reviews() {
  const reviews = await fetchReviews(); // Doesn't block ProductList
  return <div>{/* render reviews */}</div>;
}
Key Requirements
Use React 18+ with createRoot and hydrateRoot
Wrap slow components in <Suspense>
Use frameworks supporting streaming (Next.js, Remix, etc.)
Server must support streaming responses`},{id:323,c:"Miscellaneous",q:"Old Q&A",a:`Why should we not update the state directly?
If you try to update the state directly then it won't re-render the component.

//Wrong
this.state.message = "Hello world";
Instead use setState() method. It schedules an update to a component's state object. When state changes, the component responds by re-rendering.

//Correct
this.setState({ message: "Hello World" });
Note: You can directly assign to the state object either in constructor or using latest javascript's class field declaration syntax.`},{id:324,c:"Miscellaneous",q:"What is the purpose of callback function as an argument of setState()?",a:`The callback function provided as the second argument to setState is executed after the state has been updated and the component has re-rendered. Because setState() is asynchronous, you cannot reliably perform actions that require the updated state immediately after calling setState. The callback ensures your code runs only after the update and re-render are complete.

Example
this.setState({ name: "Sudheer" }, () => {
  console.log("The name has been updated and the component has re-rendered.");
});
When to use the callback?
Use the setState callback when you need to perform an action immediately after the DOM has been updated in response to a state change. i.e, The callback is a reliable way to perform actions after a state update and re-render, especially when the timing is critical due to the asynchronous nature of state updates in React. For example, if you need to interact with the updated DOM, trigger analytics, or perform further computations that depend on the new state or rendered output.

Note
In modern React (with function components), you can achieve similar effects using the useEffect hook to respond to state changes.
In class components, you can also use lifecycle methods like componentDidUpdate for broader post-update logic.
The setState callback is still useful for one-off actions that directly follow a specific state change.`},{id:325,c:"Forms & Events",q:"How to bind methods or event handlers in JSX callbacks?",a:`There are 3 possible ways to achieve this in class components:

Binding in Constructor: In JavaScript classes, the methods are not bound by default. The same rule applies for React event handlers defined as class methods. Normally we bind them in constructor.

class User extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("SingOut triggered");
  }
  render() {
    return <button onClick={this.handleClick}>SingOut</button>;
  }
}
Public class fields syntax: If you don't like to use bind approach then public class fields syntax can be used to correctly bind callbacks. The Create React App enables this syntax by default.

handleClick = () => {
  console.log("SingOut triggered", this);
};
<button onClick={this.handleClick}>SingOut</button>
Arrow functions in callbacks: It is possible to use arrow functions directly in the callbacks.

handleClick() {
    console.log('SingOut triggered');
}
render() {
    return <button onClick={() => this.handleClick()}>SignOut</button>;
}
Note: If the callback is passed as prop to child components, those components might do an extra re-rendering. In those cases, it is preferred to go with .bind() or public class fields syntax approach considering performance.`},{id:326,c:"Forms & Events",q:"How to pass a parameter to an event handler or callback?",a:`You can use an arrow function to wrap around an event handler and pass parameters:

<button onClick={() => this.handleClick(id)} />
This is an equivalent to calling .bind:

<button onClick={this.handleClick.bind(this, id)} />
Apart from these two approaches, you can also pass arguments to a function which is defined as arrow function

<button onClick={this.handleClick(id)} />;
handleClick = (id) => () => {
  console.log("Hello, your ticket number is", id);
};`},{id:327,c:"Miscellaneous",q:"What is the use of refs?",a:"The ref is used to return a reference to the element. They should be avoided in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component."},{id:328,c:"Miscellaneous",q:"How to create refs?",a:`There are two approaches

This is a recently added approach. Refs are created using React.createRef() method and attached to React elements via the ref attribute. In order to use refs throughout the component, just assign the ref to the instance property within constructor.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
You can also use ref callbacks approach regardless of React version. For example, the search bar component's input element is accessed as follows,

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.txtSearch = null;
    this.state = { term: "" };
    this.setInputSearchRef = (e) => {
      this.txtSearch = e;
    };
  }
  onInputChange(event) {
    this.setState({ term: this.txtSearch.value });
  }
  render() {
    return (
      <input
        value={this.state.term}
        onChange={this.onInputChange.bind(this)}
        ref={this.setInputSearchRef}
      />
    );
  }
}
You can also use refs in function components using closures. Note: You can also use inline ref callbacks even though it is not a recommended approach.`},{id:329,c:"Component Patterns",q:"What are forward refs?",a:`Ref forwarding is a feature that lets some components take a ref they receive, and pass it further down to a child.

const ButtonElement = React.forwardRef((props, ref) => (
  <button ref={ref} className="CustomButton">
    {props.children}
  </button>
));

// Create ref to the DOM button:
const ref = React.createRef();
<ButtonElement ref={ref}>{"Forward Ref"}</ButtonElement>;`},{id:330,c:"Styling",q:"Which is preferred option with in callback refs and findDOMNode()?",a:`It is preferred to use callback refs over findDOMNode() API. Because findDOMNode() prevents certain improvements in React in the future.

The legacy approach of using findDOMNode:

class MyComponent extends Component {
  componentDidMount() {
    findDOMNode(this).scrollIntoView();
  }

  render() {
    return <div />;
  }
}
The recommended approach is:

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.node = createRef();
  }
  componentDidMount() {
    this.node.current.scrollIntoView();
  }

  render() {
    return <div ref={this.node} />;
  }
}`},{id:331,c:"Miscellaneous",q:"Why are String Refs legacy?",a:`If you worked with React before, you might be familiar with an older API where the ref attribute is a string, like ref={'textInput'}, and the DOM node is accessed as this.refs.textInput. We advise against it because string refs have below issues, and are considered legacy. String refs were removed in React v16.

They force React to keep track of currently executing component. This is problematic because it makes react module stateful, and thus causes weird errors when react module is duplicated in the bundle.

They are not composable — if a library puts a ref on the passed child, the user can't put another ref on it. Callback refs are perfectly composable.

They don't work with static analysis like Flow. Flow can't guess the magic that framework does to make the string ref appear on this.refs, as well as its type (which could be different). Callback refs are friendlier to static analysis.

It doesn't work as most people would expect with the "render callback" pattern (e.g. )

class MyComponent extends Component {
  renderRow = (index) => {
    // This won't work. Ref will get attached to DataTable rather than MyComponent:
    return <input ref={"input-" + index} />;

    // This would work though! Callback refs are awesome.
    return <input ref={(input) => (this["input-" + index] = input)} />;
  };

  render() {
    return (
      <DataTable data={this.props.data} renderRow={this.renderRow} />
    );
  }
}`},{id:332,c:"Component Lifecycle",q:"What are the different phases of component lifecycle?",a:`The component lifecycle has three distinct lifecycle phases:

Mounting: The component is ready to mount in the browser DOM. This phase covers initialization from constructor(), getDerivedStateFromProps(), render(), and componentDidMount() lifecycle methods.

Updating: In this phase, the component gets updated in two ways, sending the new props and updating the state either from setState() or forceUpdate(). This phase covers getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate() and componentDidUpdate() lifecycle methods.

Unmounting: In this last phase, the component is not needed and gets unmounted from the browser DOM. This phase includes componentWillUnmount() lifecycle method.

It's worth mentioning that React internally has a concept of phases when applying changes to the DOM. They are separated as follows

Render The component will render without any side effects. This applies to Pure components and in this phase, React can pause, abort, or restart the render.

Pre-commit Before the component actually applies the changes to the DOM, there is a moment that allows React to read from the DOM through the getSnapshotBeforeUpdate().

Commit React works with the DOM and executes the final lifecycles respectively componentDidMount() for mounting, componentDidUpdate() for updating, and componentWillUnmount() for unmounting.

React 16.3+ Phases (or an interactive version)

phases 16.4+

Before React 16.3

phases 16.2`},{id:333,c:"Component Lifecycle",q:"What are the lifecycle methods of React?",a:`Before React 16.3

componentWillMount: Executed before rendering and is used for App level configuration in your root component.
componentDidMount: Executed after first rendering and here all AJAX requests, DOM or state updates, and set up event listeners should occur.
componentWillReceiveProps: Executed when particular prop updates to trigger state transitions.
shouldComponentUpdate: Determines if the component will be updated or not. By default it returns true. If you are sure that the component doesn't need to render after state or props are updated, you can return false value. It is a great place to improve performance as it allows you to prevent a re-render if component receives new prop.
componentWillUpdate: Executed before re-rendering the component when there are props & state changes confirmed by shouldComponentUpdate() which returns true.
componentDidUpdate: Mostly it is used to update the DOM in response to prop or state changes.
componentWillUnmount: It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.
React 16.3+

getDerivedStateFromProps: Invoked right before calling render() and is invoked on every render. This exists for rare use cases where you need a derived state. Worth reading if you need derived state.
componentDidMount: Executed after first rendering and where all AJAX requests, DOM or state updates, and set up event listeners should occur.
shouldComponentUpdate: Determines if the component will be updated or not. By default, it returns true. If you are sure that the component doesn't need to render after the state or props are updated, you can return a false value. It is a great place to improve performance as it allows you to prevent a re-render if component receives a new prop.
getSnapshotBeforeUpdate: Executed right before rendered output is committed to the DOM. Any value returned by this will be passed into componentDidUpdate(). This is useful to capture information from the DOM i.e. scroll position.
componentDidUpdate: Mostly it is used to update the DOM in response to prop or state changes. This will not fire if shouldComponentUpdate() returns false.
componentWillUnmount It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.`},{id:334,c:"Testing",q:"How to create props proxy for HOC component?",a:`You can add/edit props passed to the component using props proxy pattern like this:

function HOC(WrappedComponent) {
  return class Test extends Component {
    render() {
      const newProps = {
        title: "New Header",
        footer: false,
        showFeatureX: false,
        showFeatureY: true,
      };

      return <WrappedComponent {...this.props} {...newProps} />;
    }
  };
}`},{id:335,c:"Internationalization",q:"What is context?",a:`Context provides a way to pass data through the component tree without having to pass props down manually at every level.

For example, authenticated users, locale preferences, UI themes need to be accessed in the application by many components.

const { Provider, Consumer } = React.createContext(defaultValue);`},{id:336,c:"Styling",q:"What is the purpose of using super constructor with props argument?",a:`A child class constructor cannot make use of this reference until the super() method has been called. The same applies to ES6 sub-classes as well. The main reason for passing props parameter to super() call is to access this.props in your child constructors.

Passing props:

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props); // prints { name: 'John', age: 42 }
  }
}
Not passing props:

class MyComponent extends React.Component {
  constructor(props) {
    super();

    console.log(this.props); // prints undefined

    // but props parameter is still available
    console.log(props); // prints { name: 'John', age: 42 }
  }

  render() {
    // no difference outside constructor
    console.log(this.props); // prints { name: 'John', age: 42 }
  }
}
The above code snippets reveals that this.props is different only within the constructor. It would be the same outside the constructor.`},{id:337,c:"Miscellaneous",q:"How to set state with a dynamic key name?",a:`If you are using ES6 or the Babel transpiler to transform your JSX code then you can accomplish this with computed property names.

handleInputChange(event) {
  this.setState({ [event.target.id]: event.target.value })
}`},{id:338,c:"Miscellaneous",q:"What would be the common mistake of function being called every time the component renders?",a:`You need to make sure that function is not being called while passing the function as a parameter.

render() {
  // Wrong: handleClick is called instead of passed as a reference!
  return <button onClick={this.handleClick()}>{'Click Me'}</button>
}
Instead, pass the function itself without parenthesis:

render() {
  // Correct: handleClick is passed as a reference!
  return <button onClick={this.handleClick}>{'Click Me'}</button>
}`},{id:339,c:"Miscellaneous",q:"What are error boundaries in React v16?",a:`Note: Error boundaries were introduced in React 16 and remain valid in current React versions (18/19).

Error boundaries are components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

A class component becomes an error boundary if it defines these lifecycle methods:

static getDerivedStateFromError(error) - for rendering fallback UI
componentDidCatch(error, info) - for logging error information
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log error to an error reporting service
    console.error('Error caught by boundary:', error, info);
    logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // Render custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
Usage:

<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>
Note: Error boundaries currently only work with class components. There is no hook equivalent yet, though use() hook in React 19 provides some error handling capabilities.`},{id:340,c:"Miscellaneous",q:"How are error boundaries handled in React v15?",a:`⚠️ LEGACY: This question is only relevant for historical context. React v15 is extremely outdated (released in 2016).

React v15 provided very basic support for error boundaries using the unstable_handleError method. This was an experimental feature that was later redesigned and renamed to componentDidCatch in React v16.

Modern Error Boundaries (React 16+):

Use static getDerivedStateFromError(error) for UI fallback
Use componentDidCatch(error, info) for logging
Work consistently across server and client rendering`},{id:341,c:"Miscellaneous",q:"What is the purpose of render method of react-dom?",a:`This method is used to render a React element into the DOM in the supplied container and return a reference to the component. If the React element was previously rendered into container, it will perform an update on it and only mutate the DOM as necessary to reflect the latest changes.

ReactDOM.render(element, container, [callback])
If the optional callback is provided, it will be executed after the component is rendered or updated.`},{id:342,c:"Miscellaneous",q:"What will happen if you use setState() in constructor?",a:"When you use setState(), then apart from assigning to the object state React also re-renders the component and all its children. You would get error like this: Can only update a mounted or mounting component. So we need to use this.state to initialize variables inside constructor."},{id:343,c:"Miscellaneous",q:"Is it good to use setState() in componentWillMount() method?",a:`⚠️ DEPRECATED: componentWillMount() has been removed in React 17+. This question is only relevant for legacy React applications.

Historical Context: While it was technically safe to use setState() inside componentWillMount(), this lifecycle method is now deprecated and removed because:

It caused issues with server-side rendering
Created confusion about the right place for async operations
Was problematic with React's concurrent rendering features
Modern Alternative: Use componentDidMount() for side effects and async initialization in class components:

componentDidMount() {
  axios.get(\`api/todos\`)
    .then((result) => {
      this.setState({
        messages: [...result.data]
      })
    })
}`},{id:344,c:"Miscellaneous",q:"What will happen if you use props in initial state?",a:`If the props on the component are changed without the component being refreshed, the new prop value will never be displayed because the constructor function will never update the current state of the component. The initialization of state from props only runs when the component is first created.

The below component won't display the updated input value:

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      records: [],
      inputValue: this.props.inputValue,
    };
  }

  render() {
    return <div>{this.state.inputValue}</div>;
  }
}
Using props inside render method will update the value:

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      record: [],
    };
  }

  render() {
    return <div>{this.props.inputValue}</div>;
  }
}`},{id:345,c:"Styling",q:"How you use decorators in React?",a:`You can decorate your class components, which is the same as passing the component into a function. Decorators are flexible and readable way of modifying component functionality.

@setTitle("Profile")
class Profile extends React.Component {
  //....
}

/*
  title is a string that will be set as a document title
  WrappedComponent is what our decorator will receive when
  put directly above a component class as seen in the example above
*/
const setTitle = (title) => (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      document.title = title;
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
Note: Decorators are a feature that didn't make it into ES7, but are currently a stage 2 proposal.`},{id:346,c:"Server-Side & Next.js",q:"What is CRA and its benefits?",a:`⚠️ OUTDATED: Create React App (CRA) is no longer actively maintained and is not recommended for new projects as of 2024+.

Modern Alternatives: Use Vite (for SPAs) or Next.js (for full-stack/SSR) instead. See recommended setup commands at the end of this answer.

Historical Context:

The create-react-app CLI tool allows you to quickly create & run React applications with no configuration step.

Let's create Todo App using CRA:

# Installation
$ npm install -g create-react-app

# Create new project
$ create-react-app todo-app
$ cd todo-app

# Build, test and run
$ npm run build
$ npm run test
$ npm start
It includes everything we need to build a React app:

React, JSX, ES6, and Flow syntax support.
Language extras beyond ES6 like the object spread operator.
Autoprefixed CSS, so you don’t need -webkit- or other prefixes.
A fast interactive unit test runner with built-in support for coverage reporting.
A live development server that warns about common mistakes.
A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.
Modern Alternatives (Recommended 2026):

1. Vite (Best for SPAs):

npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
Lightning-fast HMR (Hot Module Replacement)
Modern ESM-based development
Optimized production builds with Rollup
2. Next.js (Best for full-stack/SSR):

npx create-next-app@latest my-app
cd my-app
npm run dev
Server-side rendering and App Router
Server Components and Server Actions
Built-in routing, API routes, and optimizations
3. Remix (Alternative for full-stack):

Web fundamentals-first approach
Excellent performance and DX
Progressive enhancement`},{id:347,c:"Component Lifecycle",q:"What is the lifecycle methods order in mounting?",a:`The lifecycle methods are called in the following order when an instance of a component is being created and inserted into the DOM.

constructor()
static getDerivedStateFromProps()
render()
componentDidMount()`},{id:348,c:"Component Lifecycle",q:"What are the lifecycle methods going to be deprecated in React v16?",a:`⚠️ FULLY DEPRECATED: These lifecycle methods have been deprecated and removed from React 17+.

The following lifecycle methods were deprecated due to unsafe coding practices and problems with async rendering:

componentWillMount() - REMOVED in React 17
componentWillReceiveProps() - REMOVED in React 17
componentWillUpdate() - REMOVED in React 17
Timeline:

React 16.3: Methods aliased with UNSAFE_ prefix
React 17+: Unprefixed versions completely removed
Current (React 18/19): Only UNSAFE_ versions exist (not recommended)
Modern Alternatives:

Deprecated Method	Modern Replacement
componentWillMount()	constructor() or componentDidMount()
componentWillReceiveProps()	static getDerivedStateFromProps() or componentDidUpdate()
componentWillUpdate()	getSnapshotBeforeUpdate() + componentDidUpdate()
Best Practice: Use functional components with hooks instead:

useEffect() for side effects
useState() for state management
useMemo()/useCallback() for optimization`},{id:349,c:"Component Lifecycle",q:"What is the purpose of getDerivedStateFromProps() lifecycle method?",a:`The new static getDerivedStateFromProps() lifecycle method is invoked after a component is instantiated as well as before it is re-rendered. It can return an object to update state, or null to indicate that the new props do not require any state updates.

class MyComponent extends React.Component {
  static getDerivedStateFromProps(props, state) {
    // ...
  }
}
This lifecycle method along with componentDidUpdate() covers all the use cases of componentWillReceiveProps().`},{id:350,c:"Styling",q:"What is the purpose of getSnapshotBeforeUpdate() lifecycle method?",a:`The new getSnapshotBeforeUpdate() lifecycle method is called right before DOM updates. The return value from this method will be passed as the third parameter to componentDidUpdate().

class MyComponent extends React.Component {
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // ...
  }
}
This lifecycle method along with componentDidUpdate() covers all the use cases of componentWillUpdate().`},{id:351,c:"Styling",q:"What is the recommended way for naming components?",a:`It is recommended to name the component by reference instead of using displayName.

Using displayName for naming component:

export default React.createClass({
  displayName: "TodoApp",
  // ...
});
The recommended approach:

export default class TodoApp extends React.Component {
  // ...
}
also

const TodoApp = () => {
  //...
};
export default TodoApp;`},{id:352,c:"Styling",q:"What is the recommended ordering of methods in component class?",a:`Recommended ordering of methods from mounting to render stage:

static methods
constructor()
getChildContext()
componentWillMount()
componentDidMount()
componentWillReceiveProps()
shouldComponentUpdate()
componentWillUpdate()
componentDidUpdate()
componentWillUnmount()
click handlers or event handlers like onClickSubmit() or onChangeDescription()
getter methods for render like getSelectReason() or getFooterContent()
optional render methods like renderNavigation() or renderProfilePicture()
render()`},{id:353,c:"Performance",q:"Why we need to pass a function to setState()?",a:`The reason behind for this is that setState() is an asynchronous operation. React batches state changes for performance reasons, so the state may not change immediately after setState() is called. That means you should not rely on the current state when calling setState() since you can't be sure what that state will be. The solution is to pass a function to setState(), with the previous state as an argument. By doing this you can avoid issues with the user getting the old state value on access due to the asynchronous nature of setState().

Let's say the initial count value is zero. After three consecutive increment operations, the value is going to be incremented only by one.

// assuming this.state.count === 0
this.setState({ count: this.state.count + 1 });
this.setState({ count: this.state.count + 1 });
this.setState({ count: this.state.count + 1 });
// this.state.count === 1, not 3
If we pass a function to setState(), the count gets incremented correctly.

this.setState((prevState, props) => ({
  count: prevState.count + props.increment,
}));
// this.state.count === 3 as expected
(OR)

Why function is preferred over object for setState()?
React may batch multiple setState() calls into a single update for performance. Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.

This counter example will fail to update as expected:

// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
The preferred approach is to call setState() with function rather than object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument.

// Correct
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment,
}));`},{id:354,c:"Miscellaneous",q:"Why is isMounted() an anti-pattern and what is the proper solution?",a:`The primary use case for isMounted() is to avoid calling setState() after a component has been unmounted, because it will emit a warning.

if (this.isMounted()) {
  this.setState({...})
}
Checking isMounted() before calling setState() does eliminate the warning, but it also defeats the purpose of the warning. Using isMounted() is a code smell because the only reason you would check is because you think you might be holding a reference after the component has unmounted.

An optimal solution would be to find places where setState() might be called after a component has unmounted, and fix them. Such situations most commonly occur due to callbacks, when a component is waiting for some data and gets unmounted before the data arrives. Ideally, any callbacks should be canceled in componentWillUnmount(), prior to unmounting.`},{id:355,c:"Styling",q:"What is the difference between constructor and getInitialState?",a:`You should initialize state in the constructor when using ES6 classes, and getInitialState() method when using React.createClass().

Using ES6 classes:

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* initial state */
    };
  }
}
Using React.createClass():

const MyComponent = React.createClass({
  getInitialState() {
    return {
      /* initial state */
    };
  },
});
Note: React.createClass() is deprecated and removed in React v16. Use plain JavaScript classes instead.`},{id:356,c:"Miscellaneous",q:"Can you force a component to re-render without calling setState?",a:`By default, when your component's state or props change, your component will re-render. If your render() method depends on some other data, you can tell React that the component needs re-rendering by calling forceUpdate().

component.forceUpdate(callback);
It is recommended to avoid all uses of forceUpdate() and only read from this.props and this.state in render().`},{id:357,c:"Styling",q:"What is the difference between super() and super(props) in React using ES6 classes?",a:`When you want to access this.props in constructor() then you should pass props to super() method.

Using super(props):

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props); // { name: 'John', ... }
  }
}
Using super():

class MyComponent extends React.Component {
  constructor(props) {
    super();
    console.log(this.props); // undefined
  }
}
Outside constructor() both will display same value for this.props.`},{id:358,c:"Miscellaneous",q:"What is the difference between setState() and replaceState() methods?",a:"When you use setState() the current and previous states are merged. replaceState() throws out the current state, and replaces it with only what you provide. Usually setState() is used unless you really need to remove all previous keys for some reason. You can also set state to false/null in setState() instead of using replaceState()."},{id:359,c:"Component Lifecycle",q:"How to listen to state changes?",a:`The componentDidUpdate lifecycle method will be called when state changes. You can compare provided state and props values with current state and props to determine if something meaningful changed.

componentDidUpdate(object prevProps, object prevState)
Note: The previous releases of ReactJS also uses componentWillUpdate(object nextProps, object nextState) for state changes. It has been deprecated in latest releases.`},{id:360,c:"Miscellaneous",q:"What is the recommended approach of removing an array element in React state?",a:`The better approach is to use Array.prototype.filter() method.

For example, let's create a removeItem() method for updating the state.

removeItem(index) {
  this.setState({
    data: this.state.data.filter((item, i) => i !== index)
  })
}`},{id:361,c:"Miscellaneous",q:"Is it possible to use React without rendering HTML?",a:`It is possible. Below are the possible options:

render() {
  return false
}
render() {
  return true
}
render() {
  return null
}
React version >=16.0.0:

render() {
  return []
}
render() {
  return ""
}
React version >=16.2.0:

render() {
  return <React.Fragment></React.Fragment>
}
render() {
  return <></>
}
React version >=18.0.0:

render() {
  return undefined
}`},{id:362,c:"Miscellaneous",q:"What are the possible ways of updating objects in state?",a:`Calling setState() with an object to merge with state:

Using Object.assign() to create a copy of the object:

const user = Object.assign({}, this.state.user, { age: 42 });
this.setState({ user });
Using spread operator:

const user = { ...this.state.user, age: 42 };
this.setState({ user });
Calling setState() with a function:

this.setState((prevState) => ({
  user: {
    ...prevState.user,
    age: 42,
  },
}));`},{id:363,c:"Miscellaneous",q:"What are the approaches to include polyfills in your create-react-app?",a:`There are approaches to include polyfills in create-react-app,

Manual import from core-js:

Create a file called (something like) polyfills.js and import it into root index.js file. Run npm install core-js or yarn add core-js and import your specific required features.

import "core-js/fn/array/find";
import "core-js/fn/array/includes";
import "core-js/fn/number/is-nan";
Using Polyfill service:

Use the polyfill.io CDN to retrieve custom, browser-specific polyfills by adding this line to index.html:

<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.includes"><\/script>
In the above script we had to explicitly request the Array.prototype.includes feature as it is not included in the default feature set.`},{id:364,c:"Miscellaneous",q:"How to use https instead of http in create-react-app?",a:`You just need to use HTTPS=true configuration. You can edit your package.json scripts section:

"scripts": {
  "start": "set HTTPS=true && react-scripts start"
}
or just run set HTTPS=true && npm start`},{id:365,c:"Miscellaneous",q:"How to avoid using relative path imports in create-react-app?",a:`Create a file called .env in the project root and write the import path:

NODE_PATH=src/app
After that restart the development server. Now you should be able to import anything inside src/app without relative paths.`},{id:366,c:"Component Lifecycle",q:"How to update a component every second?",a:`You need to use setInterval() to trigger the change, but you also need to clear the timer when the component unmounts to prevent errors and memory leaks.

componentDidMount() {
  this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000)
}

componentWillUnmount() {
  clearInterval(this.interval)
}`},{id:367,c:"Miscellaneous",q:"Why is a component constructor called only once?",a:"React's reconciliation algorithm assumes that without any information to the contrary, if a custom component appears in the same place on subsequent renders, it's the same component as before, so reuses the previous instance rather than creating a new one."},{id:368,c:"Styling",q:"How to define constants in React?",a:`You can use ES7 static field to define constant.

class MyComponent extends React.Component {
  static DEFAULT_PAGINATION = 10;
}`},{id:369,c:"Styling",q:"How to programmatically trigger click event in React?",a:`You could use the ref prop to acquire a reference to the underlying HTMLInputElement object through a callback, store the reference as a class property, then use that reference to later trigger a click from your event handlers using the HTMLElement.click method.

This can be done in two steps:

Create ref in render method:

<input ref={(input) => (this.inputElement = input)} />
Apply click event in your event handler:

this.inputElement.click();`},{id:370,c:"Component Lifecycle",q:"How to make AJAX call and in which component lifecycle methods should I make an AJAX call?",a:`You can use AJAX libraries such as Axios, jQuery AJAX, and the browser built-in fetch. You should fetch data in the componentDidMount() lifecycle method. This is so you can use setState() to update your component when the data is retrieved.

For example, the employees list fetched from API and set local state:

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      error: null,
    };
  }

  componentDidMount() {
    fetch("https://api.example.com/items")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            employees: result.employees,
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
  }

  render() {
    const { error, employees } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <ul>
          {employees.map((employee) => (
            <li key={employee.name}>
              {employee.name}-{employee.experience}
            </li>
          ))}
        </ul>
      );
    }
  }
}`},{id:371,c:"Component Patterns",q:"What are render props?",a:"Render Props is a simple technique for sharing code between components using a prop whose value is a function. The below component uses render prop which returns a React element.\n\n<DataProvider render={(data) => <h1>{`Hello ${data.target}`}</h1>} />\nLibraries such as React Router and DownShift are using this pattern."},{id:372,c:"Redux",q:"How to dispatch an action on load?",a:`You can dispatch an action in componentDidMount() method and in render() method you can verify the data.

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return this.props.isLoaded ? (
      <div>{"Loaded"}</div>
    ) : (
      <div>{"Not Loaded"}</div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoaded: state.isLoaded,
});

const mapDispatchToProps = { fetchData };

export default connect(mapStateToProps, mapDispatchToProps)(App);`},{id:373,c:"Redux",q:"How to use connect() from React Redux?",a:`You need to follow two steps to use your store in your container:

Use mapStateToProps(): It maps the state variables from your store to the props that you specify.

Connect the above props to your container: The object returned by the mapStateToProps function is connected to the container. You can import connect() from react-redux.

import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return <div>{this.props.containerData}</div>;
  }
}

function mapStateToProps(state) {
  return { containerData: state.data };
}

export default connect(mapStateToProps)(App);`},{id:374,c:"Redux",q:"Whats the purpose of at symbol in the Redux connect decorator?",a:`The @ symbol is in fact a JavaScript expression used to signify decorators. Decorators make it possible to annotate and modify classes and properties at design time.

Let's take an example setting up Redux without and with a decorator.

Without decorator:

import React from "react";
import * as actionCreators from "./actionCreators";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { todos: state.todos };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

class MyApp extends React.Component {
  // ...define your main app here
}

export default connect(mapStateToProps, mapDispatchToProps)(MyApp);
With decorator:

import React from "react";
import * as actionCreators from "./actionCreators";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { todos: state.todos };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class MyApp extends React.Component {
  // ...define your main app here
}
The above examples are almost similar except the usage of decorator. The decorator syntax isn't built into any JavaScript runtimes yet, and is still experimental and subject to change. You can use babel for the decorators support.`},{id:375,c:"TypeScript & Flow",q:"How to use TypeScript in create-react-app application?",a:"Starting from react-scripts@3.3.0+ releases onwards, you can now optionally start a new app from a template by appending `--template [template-name]` to the creation command. If you don't select a template, it will create your project with base template. Remember that templates are always named in the format `cra-template-[template-name]`, here you only need to fill the `[template-name]` section.\n\nThe typeScript can be used in your project by appending `--template typescript` to the creation command.\n\n ```bash\n npx create-react-app my-app --template typescript\n ```\n\nBut if you are using React Scripting between react-scripts@2.1.0 and react-scripts@3.2.x , there is a built-in support for TypeScript. i.e, `create-react-app` now supports TypeScript natively. You can just pass `--typescript` option as below\n\n ```bash\n npx create-react-app my-app --typescript\n\n # or\n\n yarn create react-app my-app --typescript\n ```\n\n Whereas for lower versions of react scripts, just supply `--scripts-version` option as `react-scripts-ts` while you create a new project. `react-scripts-ts` is a set of adjustments to take the standard `create-react-app` project pipeline and bring TypeScript into the mix.\n\n Now the project layout should look like the following:\n\n ```\n my-app/\n ├─ .gitignore\n ├─ images.d.ts\n ├─ node_modules/\n ├─ public/\n ├─ src/\n │  └─ ...\n ├─ package.json\n ├─ tsconfig.json\n ├─ tsconfig.prod.json\n ├─ tsconfig.test.json\n └─ tslint.json\n ```"},{id:376,c:"Styling",q:"Does the statics object work with ES6 classes in React?",a:`No, statics only works with React.createClass():

someComponent = React.createClass({
  statics: {
    someMethod: function () {
      // ..
    },
  },
});
But you can write statics inside ES6+ classes as below,

class Component extends React.Component {
  static propTypes = {
    // ...
  };

  static someMethod() {
    // ...
  }
}
or writing them outside class as below,

class Component extends React.Component {
   ....
}

Component.propTypes = {...}
Component.someMethod = function(){....}`},{id:377,c:"Miscellaneous",q:"Why are inline ref callbacks or functions not recommended?",a:`If the ref callback is defined as an inline function, it will get called twice during updates, first with null and then again with the DOM element. This is because a new instance of the function is created with each render, so React needs to clear the old ref and set up the new one.

class UserForm extends Component {
  handleSubmit = () => {
    console.log("Input Value is: ", this.input.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={(input) => (this.input = input)} /> //
        Access DOM input in handle submit
        <button type="submit">Submit</button>
      </form>
    );
  }
}
But our expectation is for the ref callback to get called once, when the component mounts. One quick fix is to use the ES7 class property syntax to define the function

class UserForm extends Component {
  handleSubmit = () => {
    console.log("Input Value is: ", this.input.value);
  };

  setSearchInput = (input) => {
    this.input = input;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.setSearchInput} /> // Access DOM input
        in handle submit
        <button type="submit">Submit</button>
      </form>
    );
  }
}`},{id:378,c:"Component Patterns",q:"What are HOC factory implementations?",a:`There are two main ways of implementing HOCs in React.

Props Proxy (PP) and
Inheritance Inversion (II).
But they follow different approaches for manipulating the WrappedComponent.

Props Proxy

In this approach, the render method of the HOC returns a React Element of the type of the WrappedComponent. We also pass through the props that the HOC receives, hence the name Props Proxy.

function ppHOC(WrappedComponent) {
  return class PP extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
Inheritance Inversion

In this approach, the returned HOC class (Enhancer) extends the WrappedComponent. It is called Inheritance Inversion because instead of the WrappedComponent extending some Enhancer class, it is passively extended by the Enhancer. In this way the relationship between them seems inverse.

function iiHOC(WrappedComponent) {
  return class Enhancer extends WrappedComponent {
    render() {
      return super.render();
    }
  };
}`},{id:379,c:"Styling",q:"How to use class field declarations syntax in React classes?",a:`React Class Components can be made much more concise using the class field declarations. You can initialize the local state without using the constructor and declare class methods by using arrow functions without the extra need to bind them.

Let's take a counter example to demonstrate class field declarations for state without using constructor and methods without binding,

class Counter extends Component {
  state = { value: 0 };

  handleIncrement = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <div>
        {this.state.value}

        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}`},{id:380,c:"Forms & Events",q:"Why do you not need error boundaries for event handlers?",a:`Error boundaries do not catch errors inside event handlers.

React doesn’t need error boundaries to recover from errors in event handlers. Unlike the render method and lifecycle methods, the event handlers don’t happen during rendering. So if they throw, React still knows what to display on the screen.

If you need to catch an error inside an event handler, use the regular JavaScript try / catch statement:

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    try {
      // Do something that could throw
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    if (this.state.error) {
      return <h1>Caught an error.</h1>;
    }
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}
Note that the above example is demonstrating regular JavaScript behavior and doesn’t use error boundaries.`},{id:381,c:"Miscellaneous",q:"What is the difference between try catch block and error boundaries?",a:`Try catch block works with imperative code whereas error boundaries are meant for declarative code to render on the screen.

For example, the try catch block used for below imperative code

try {
  showButton();
} catch (error) {
  // ...
}
Whereas error boundaries wrap declarative code as below,

<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
So if an error occurs in a componentDidUpdate method caused by a setState somewhere deep in the tree, it will still correctly propagate to the closest error boundary.`},{id:382,c:"Styling",q:"What is the required method to be defined for a class component?",a:"The render() method is the only required method in a class component. i.e, All methods other than render method are optional for a class component."},{id:383,c:"Miscellaneous",q:"What are the possible return types of render method?",a:`Below are the list of following types used and return from render method,

React elements: Elements that instruct React to render a DOM node. It includes html elements such as <div/> and user defined elements.
Arrays and fragments: Return multiple elements to render as Arrays and Fragments to wrap multiple elements
Portals: Render children into a different DOM subtree.
String and numbers: Render both Strings and Numbers as text nodes in the DOM
Booleans or null: Doesn't render anything but these types are used to conditionally render content.`},{id:384,c:"Forms & Events",q:"What is the main purpose of constructor?",a:`The constructor is mainly used for two purposes,

To initialize local state by assigning object to this.state
For binding event handler methods to the instance For example, the below code covers both the above cases,
constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}`},{id:385,c:"Miscellaneous",q:"Is it mandatory to define constructor for React component?",a:"No, it is not mandatory. i.e, If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component."},{id:386,c:"Component Lifecycle",q:"Why should not call setState in componentWillUnmount?",a:"You should not call setState() in componentWillUnmount() because once a component instance is unmounted, it will never be mounted again."},{id:387,c:"Component Lifecycle",q:"What is the purpose of getDerivedStateFromError?",a:`This lifecycle method is invoked after an error has been thrown by a descendant component. It receives the error that was thrown as a parameter and should return a value to update state.

The signature of the lifecycle method is as follows,

static getDerivedStateFromError(error)
Let us take error boundary use case with the above lifecycle method for demonstration purpose,

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}`},{id:388,c:"Miscellaneous",q:"What is the methods order when component re-rendered?",a:`An update can be caused by changes to props or state. The below methods are called in the following order when a component is being re-rendered.

static getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()`},{id:389,c:"Error Handling",q:"What are the methods invoked during error handling?",a:`Below methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

static getDerivedStateFromError()
componentDidCatch()`},{id:390,c:"Forms & Events",q:"What is the purpose of unmountComponentAtNode method?",a:`This method is available from react-dom package and it removes a mounted React component from the DOM and clean up its event handlers and state. If no component was mounted in the container, calling this function does nothing. Returns true if a component was unmounted and false if there was no component to unmount.

The method signature would be as follows,

ReactDOM.unmountComponentAtNode(container);`},{id:391,c:"Component Patterns",q:"What are the limitations with HOCs?",a:`Higher-order components come with a few caveats apart from its benefits. Below are the few listed in an order,

Don’t use HOCs inside the render method: It is not recommended to apply a HOC to a component within the render method of a component.

render() {
  // A new version of EnhancedComponent is created on every render
  // EnhancedComponent1 !== EnhancedComponent2
  const EnhancedComponent = enhance(MyComponent);
  // That causes the entire subtree to unmount/remount each time!
  return <EnhancedComponent />;
}
The above code impacts on performance by remounting a component that causes the state of that component and all of its children to be lost. Instead, apply HOCs outside the component definition so that the resulting component is created only once.

Static methods must be copied over: When you apply a HOC to a component the new component does not have any of the static methods of the original component

// Define a static method
WrappedComponent.staticMethod = function () {
  /*...*/
};
// Now apply a HOC
const EnhancedComponent = enhance(WrappedComponent);

// The enhanced component has no static method
typeof EnhancedComponent.staticMethod === "undefined"; // true
You can overcome this by copying the methods onto the container before returning it,

function enhance(WrappedComponent) {
  class Enhance extends React.Component {
    /*...*/
  }
  // Must know exactly which method(s) to copy :(
  Enhance.staticMethod = WrappedComponent.staticMethod;
  return Enhance;
}
Refs aren’t passed through: For HOCs you need to pass through all props to the wrapped component but this does not work for refs. This is because ref is not really a prop similar to key. In this case you need to use the React.forwardRef API`},{id:392,c:"Component Patterns",q:"How to debug forwardRefs in DevTools?",a:`React.forwardRef accepts a render function as parameter and DevTools uses this function to determine what to display for the ref forwarding component.

For example, If you don't name the render function or not using displayName property then it will appear as ”ForwardRef” in the DevTools,

const WrappedComponent = React.forwardRef((props, ref) => {
  return <LogProps {...props} forwardedRef={ref} />;
});
But If you name the render function then it will appear as ”ForwardRef(myFunction)”

const WrappedComponent = React.forwardRef(function myFunction(props, ref) {
  return <LogProps {...props} forwardedRef={ref} />;
});
As an alternative, You can also set displayName property for forwardRef function,

function logProps(Component) {
  class LogProps extends React.Component {
    // ...
  }

  function forwardRef(props, ref) {
    return <LogProps {...props} forwardedRef={ref} />;
  }

  // Give this component a more helpful display name in DevTools.
  // e.g. "ForwardRef(logProps(MyComponent))"
  const name = Component.displayName || Component.name;
  forwardRef.displayName = \`logProps(\${name})\`;

  return React.forwardRef(forwardRef);
}`},{id:393,c:"Performance",q:"Is it good to use arrow functions in render methods?",a:`Yes, You can use. It is often the easiest way to pass parameters to callback functions. But you need to optimize the performance while using it.

class Foo extends Component {
  handleClick() {
    console.log("Click happened");
  }
  render() {
    return <button onClick={() => this.handleClick()}>Click Me</button>;
  }
}
Note: Using an arrow function in render method creates a new function each time the component renders, which may have performance implications`},{id:394,c:"Miscellaneous",q:"How do you say that state updates are merged?",a:`When you call setState() in the component, React merges the object you provide into the current state.

For example, let us take a facebook user with posts and comments details as state variables,

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }
Now you can update them independently with separate setState() calls as below,

 componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
As mentioned in the above code snippets, this.setState({comments}) updates only comments variable without modifying or replacing posts variable.`},{id:395,c:"Forms & Events",q:"How do you pass arguments to an event handler?",a:`During iterations or loops, it is common to pass an extra parameter to an event handler. This can be achieved through arrow functions or bind method.

Let us take an example of user details updated in a grid,

<button onClick={(e) => this.updateUser(userId, e)}>Update User details</button>
<button onClick={this.updateUser.bind(this, userId)}>Update User details</button>
In the both approaches, the synthetic argument e is passed as a second argument. You need to pass it explicitly for arrow functions and it will be passed automatically for bind method.`},{id:396,c:"Miscellaneous",q:"How to prevent component from rendering?",a:`You can prevent component from rendering by returning null based on specific condition. This way it can conditionally render component.

function Greeting(props) {
  if (!props.loggedIn) {
    return null;
  }

  return <div className="greeting">welcome, {props.name}</div>;
}
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loggedIn: false, name: 'John'};
  }

  render() {
   return (
       <div>
         //Prevent component render if it is not loggedIn
         <Greeting loggedIn={this.state.loggedIn} />
         <UserDetails name={this.state.name}>
       </div>
   );
  }
In the above example, the greeting component skips its rendering section by applying condition and returning null value.`},{id:397,c:"Styling",q:"Give an example on How to use context?",a:`Context is designed to share data that can be considered global for a tree of React components.

For example, in the code below lets manually thread through a “theme” prop in order to style the Button component.

//Lets create a context with a default theme value "luna"
const ThemeContext = React.createContext("luna");
// Create App component where it uses provider to pass theme value in the tree
class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="nova">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}
// A middle component where you don't need to pass theme prop anymore
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}
// Lets read theme value in the button component to use
class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}`},{id:398,c:"Styling",q:"How do you use contextType?",a:`ContextType is used to consume the context object. The contextType property can be used in two ways,

contextType as property of class: The contextType property on a class can be assigned a Context object created by React.createContext(). After that, you can consume the nearest current value of that Context type using this.context in any of the lifecycle methods and render function.

Lets assign contextType property on MyClass as below,

class MyClass extends React.Component {
  componentDidMount() {
    let value = this.context;
    /* perform a side-effect at mount using the value of MyContext */
  }
  componentDidUpdate() {
    let value = this.context;
    /* ... */
  }
  componentWillUnmount() {
    let value = this.context;
    /* ... */
  }
  render() {
    let value = this.context;
    /* render something based on the value of MyContext */
  }
}
MyClass.contextType = MyContext;
Static field You can use a static class field to initialize your contextType using public class field syntax.

class MyClass extends React.Component {
  static contextType = MyContext;
  render() {
    let value = this.context;
    /* render something based on the value */
  }
}`},{id:399,c:"Miscellaneous",q:"What is a consumer?",a:`A Consumer is a React component that subscribes to context changes. It requires a function as a child which receives current context value as argument and returns a react node. The value argument passed to the function will be equal to the value prop of the closest Provider for this context above in the tree.

Lets take a simple example,

<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>`},{id:400,c:"Performance",q:"How do you solve performance corner cases while using context?",a:`The context uses reference identity to determine when to re-render, there are some gotchas that could trigger unintentional renders in consumers when a provider’s parent re-renders.

For example, the code below will re-render all consumers every time the Provider re-renders because a new object is always created for value.

class App extends React.Component {
  render() {
    return (
      <Provider value={{ something: "something" }}>
        <Toolbar />
      </Provider>
    );
  }
}
This can be solved by lifting up the value to parent state,

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: { something: "something" },
    };
  }

  render() {
    return (
      <Provider value={this.state.value}>
        <Toolbar />
      </Provider>
    );
  }
}`},{id:401,c:"Component Patterns",q:"What is the purpose of forward ref in HOCs?",a:`Refs will not get passed through because ref is not a prop. It is handled differently by React just like key. If you add a ref to a HOC, the ref will refer to the outermost container component, not the wrapped component. In this case, you can use Forward Ref API. For example, we can explicitly forward refs to the inner FancyButton component using the React.forwardRef API.

The below HOC logs all props,

function logProps(Component) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log("old props:", prevProps);
      console.log("new props:", this.props);
    }

    render() {
      const { forwardedRef, ...rest } = this.props;

      // Assign the custom prop "forwardedRef" as a ref
      return <Component ref={forwardedRef} {...rest} />;
    }
  }

  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />;
  });
}
Let's use this HOC to log all props that get passed to our “fancy button” component,

class FancyButton extends React.Component {
  focus() {
    // ...
  }

  // ...
}
export default logProps(FancyButton);
Now let's create a ref and pass it to FancyButton component. In this case, you can set focus to button element.

import FancyButton from "./FancyButton";

const ref = React.createRef();
ref.current.focus();
<FancyButton label="Click Me" handleClick={handleClick} ref={ref} />;`},{id:402,c:"Styling",q:"Is ref argument available for all functions or class components?",a:"Regular function or class components don’t receive the ref argument, and ref is not available in props either. The second ref argument only exists when you define a component with React.forwardRef call."},{id:403,c:"Component Patterns",q:"Why do you need additional care for component libraries while using forward refs?",a:"When you start using forwardRef in a component library, you should treat it as a breaking change and release a new major version of your library. This is because your library likely has a different behavior such as what refs get assigned to, and what types are exported. These changes can break apps and other libraries that depend on the old behavior."},{id:404,c:"Styling",q:"How to create react class components without ES6?",a:`If you don’t use ES6 then you may need to use the create-react-class module instead. For default props, you need to define getDefaultProps() as a function on the passed object. Whereas for initial state, you have to provide a separate getInitialState method that returns the initial state.

var Greeting = createReactClass({
  getDefaultProps: function () {
    return {
      name: "Jhohn",
    };
  },
  getInitialState: function () {
    return { message: this.props.message };
  },
  handleClick: function () {
    console.log(this.state.message);
  },
  render: function () {
    return <h1>Hello, {this.props.name}</h1>;
  },
});
Note: If you use createReactClass then auto binding is available for all methods. i.e, You don't need to use .bind(this) with in constructor for event handlers.`},{id:405,c:"Miscellaneous",q:"Is it possible to use react without JSX?",a:`Yes, JSX is not mandatory for using React. Actually it is convenient when you don’t want to set up compilation in your build environment. Each JSX element is just syntactic sugar for calling React.createElement(component, props, ...children).

For example, let us take a greeting example with JSX,

class Greeting extends React.Component {
  render() {
    return <div>Hello {this.props.message}</div>;
  }
}

ReactDOM.render(
  <Greeting message="World" />,
  document.getElementById("root")
);
You can write the same code without JSX as below,

class Greeting extends React.Component {
  render() {
    return React.createElement("div", null, \`Hello \${this.props.message}\`);
  }
}

ReactDOM.render(
  React.createElement(Greeting, { message: "World" }, null),
  document.getElementById("root")
);`},{id:406,c:"Component Patterns",q:"How do you create HOC using render props?",a:`You can implement most higher-order components (HOC) using a regular component with a render prop. For example, if you would prefer to have a withMouse HOC instead of a component, you could easily create one using a regular with a render prop.

function withMouse(Component) {
  return class extends React.Component {
    render() {
      return (
        <Mouse
          render={(mouse) => <Component {...this.props} mouse={mouse} />}
        />
      );
    }
  };
}
This way render props gives the flexibility of using either pattern.`},{id:407,c:"Miscellaneous",q:"What is react scripts?",a:"The react-scripts package is a set of scripts from the create-react-app starter pack which helps you kick off projects without configuring. The react-scripts start command sets up the development environment and starts a server, as well as hot module reloading."},{id:408,c:"TypeScript & Flow",q:"What are the features of create react app?",a:`Below are the list of some of the features provided by create react app.

React, JSX, ES6, Typescript and Flow syntax support.
Autoprefixed CSS
CSS Reset/Normalize
A live development server
A fast interactive unit test runner with built-in support for coverage reporting
A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps
An offline-first service worker and a web app manifest, meeting all the Progressive Web App criteria.`},{id:409,c:"Server-Side & Next.js",q:"What is the purpose of renderToNodeStream method?",a:"The ReactDOMServer#renderToNodeStream method is used to generate HTML on the server and send the markup down on the initial request for faster page loads. It also helps search engines to crawl your pages easily for SEO purposes. Note: Remember this method is not available in the browser but only server."},{id:410,c:"Redux",q:"How do you get redux scaffolding using create-react-app?",a:`Redux team has provided official redux+js or redux+typescript templates for create-react-app project. The generated project setup includes,
Redux Toolkit and React-Redux dependencies
Create and configure Redux store
React-Redux <Provider> passing the store to React components
Small "counter" example to demo how to add redux logic and React-Redux hooks API to interact with the store from components The below commands need to be executed along with template option as below,
Javascript template:
npx create-react-app my-app --template redux
Typescript template:
npx create-react-app my-app --template redux-typescript`},{id:411,c:"Miscellaneous",q:"What is state mutation and how to prevent it?",a:`State mutation happens when you try to update the state of a component without actually using setState function. This can happen when you are trying to do some computations using a state variable and unknowingly save the result in the same state variable. This is the main reason why it is advised to return new instances of state variables from the reducers by using Object.assign({}, ...) or spread syntax.

This can cause unknown issues in the UI as the value of the state variable got updated without telling React to check what all components were being affected from this update and it can cause UI bugs.

Ex:

class A extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
 }

componentDidMount() {
  let { loading } = this.state;
  loading = (() => true)(); // Trying to perform an operation and directly saving in a state variable
}
How to prevent it: Make sure your state variables are immutable by either enforcing immutability by using plugins like Immutable.js, always using setState to make updates, and returning new instances in reducers when sending updated state values.`},{id:412,c:"Styling",q:"What are React Mixins?",a:`⚠️ DEPRECATED: Mixins are considered legacy and should not be used in modern React applications.

Mixins were a way to share common functionality between components using React.createClass(). However, they caused several problems:

Implicit dependencies
Name clashes
Snowballing complexity`}],Hs=20,Jy=["#D16B3B","#3E7C6B","#8A5A44","#4A6C8C","#7A5C8C","#5E7C4A","#8C5C6E","#8C7A2E","#3E7690","#A06A34"];function _i(e,t){const o=t.indexOf(e)%Jy.length;return Jy[o]}function e7(e){const t=e.trim();return t?/^(import |export |const |let |var |function\b|class \w|return\b|if\s*\(|for\s*\(|while\s*\(|<\/?[A-Za-z][\w.]*|=>|^\}|^\{|^\/\/|^\/\*|^\*|npm |npx |yarn )/.test(t)?!0:(t.match(/[{}();=<>]/g)||[]).length/Math.max(t.length,1)>.12&&/[{};=]/.test(t):!1}function t7(e){const t=e.split(/\n\s*\n/).map(s=>s.replace(/\r/g,"")),o=[];for(const s of t){if(!s.trim())continue;const i=s.split(`
`);if(i.filter(e7).length/i.length>.45&&i.length>=1)o.push({type:"code",lines:i});else{const d=i.filter(m=>m.trim());d.length>=2&&d.every(m=>m.trim().length<140)?o.push({type:"list",lines:d}):o.push({type:"text",text:i.join(" ").replace(/\s+/g," ").trim()})}}return o}function Js({text:e}){const t=e.split(/(`[^`]+`)/g);return p.jsx(p.Fragment,{children:t.map((o,s)=>o.startsWith("`")&&o.endsWith("`")&&o.length>1?p.jsx("code",{className:"rounded px-1.5 py-0.5 text-[0.85em] font-mono",style:{background:"#F0EAE1",color:"#B5651D"},children:o.slice(1,-1)},s):p.jsx(J.Fragment,{children:o},s))})}function n7({line:e}){const t=e.match(/^([A-Z][A-Za-z0-9 .()/'"-]{2,42}):\s*(.+)$/);return t?p.jsxs("li",{className:"flex gap-2.5 py-1 leading-relaxed",children:[p.jsx("span",{className:"mt-2 h-1.5 w-1.5 shrink-0 rounded-full",style:{background:"#8FA37D"}}),p.jsxs("span",{children:[p.jsx("span",{className:"font-semibold",style:{color:"#1B2126"},children:p.jsx(Js,{text:t[1]})}),p.jsxs("span",{style:{color:"#4B555C"},children:[": ",p.jsx(Js,{text:t[2]})]})]})]}):p.jsxs("li",{className:"flex gap-2.5 py-1 leading-relaxed",style:{color:"#4B555C"},children:[p.jsx("span",{className:"mt-2 h-1.5 w-1.5 shrink-0 rounded-full",style:{background:"#8FA37D"}}),p.jsx("span",{children:p.jsx(Js,{text:e})})]})}function o7({answer:e}){const t=x.useMemo(()=>t7(e),[e]);return p.jsx("div",{className:"space-y-3.5",children:t.map((o,s)=>o.type==="code"?p.jsx("pre",{className:"overflow-x-auto rounded-lg border px-4 py-3 text-[13px] leading-relaxed font-mono",style:{background:"#F5F3EC",borderColor:"#EDEBE3",color:"#3E4A3F"},children:p.jsx("code",{children:o.lines.join(`
`)})},s):o.type==="list"?p.jsx("ul",{className:"space-y-0.5",children:o.lines.map((i,l)=>p.jsx(n7,{line:i},l))},s):p.jsx("p",{className:"leading-relaxed",style:{color:"#4B555C"},children:p.jsx(Js,{text:o.text})},s))})}function r7({item:e,isOpen:t,onToggle:o,accent:s}){return p.jsxs("div",{className:"group relative rounded-2xl border shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5",style:{background:"#FFFFFF",borderColor:t?s+"55":"#E4E1D8"},children:[p.jsxs("div",{className:"absolute -top-3 left-5 flex h-6 min-w-[3rem] items-center justify-center rounded-full border px-2 font-mono text-[11px] font-medium tracking-wide",style:{background:"#FAF9F6",borderColor:"#E4E1D8",color:s},children:["No. ",String(e.id).padStart(3,"0")]}),p.jsxs("button",{onClick:o,className:"flex w-full items-start justify-between gap-4 rounded-2xl px-5 pt-6 pb-4 text-left sm:px-6",children:[p.jsxs("div",{className:"min-w-0",children:[p.jsx("div",{className:"mb-1.5 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider",style:{background:s+"1c",color:s},children:e.c}),p.jsx("h3",{className:"text-[16px] font-semibold sm:text-[17px]",style:{color:"#1B2126",fontFamily:"'Iowan Old Style','Palatino Linotype',Georgia,serif"},children:p.jsx(Js,{text:e.q})})]}),p.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,className:"mt-1 shrink-0 transition-transform duration-200",style:{color:"#8B959B",transform:t?"rotate(180deg)":"rotate(0deg)"},children:p.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),p.jsx("div",{className:"grid transition-[grid-template-rows] duration-300 ease-out",style:{gridTemplateRows:t?"1fr":"0fr"},children:p.jsx("div",{className:"overflow-hidden",children:p.jsx("div",{className:"mx-5 mb-5 border-t pt-4 sm:mx-6",style:{borderColor:"#E4E1D8",borderTopStyle:"dashed"},children:p.jsx(o7,{answer:e.a})})})})]})}function s7(e,t){const o=[];if(t<=7){for(let s=1;s<=t;s++)o.push(s);return o}o.push(1),e>3&&o.push("…");for(let s=Math.max(2,e-1);s<=Math.min(t-1,e+1);s++)o.push(s);return e<t-2&&o.push("…"),o.push(t),o}function a7({page:e,totalPages:t,setPage:o,total:s,shownFrom:i,shownTo:l}){return p.jsxs("div",{className:"sticky bottom-3 z-20 mx-auto mt-8 flex w-full max-w-2xl flex-col items-center gap-2.5 rounded-2xl border px-4 py-3 shadow-xl backdrop-blur sm:flex-row sm:justify-between sm:px-5",style:{background:"rgba(255,255,255,0.95)",borderColor:"#E4E1D8"},children:[p.jsxs("p",{className:"order-2 font-mono text-[11.5px] tracking-wide sm:order-1",style:{color:"#8B959B"},children:["Showing ",p.jsxs("span",{style:{color:"#D16B3B"},children:[i,"–",l]})," of ",s]}),p.jsxs("div",{className:"order-1 flex items-center gap-1 sm:order-2",children:[p.jsx("button",{onClick:()=>o(u=>Math.max(1,u-1)),disabled:e===1,className:"flex h-8 w-8 items-center justify-center rounded-lg border transition disabled:opacity-30 hover:bg-gray-50",style:{borderColor:"#E4E1D8",color:"#4B555C"},"aria-label":"Previous page",children:p.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,children:p.jsx("polyline",{points:"15 18 9 12 15 6"})})}),s7(e,t).map((u,d)=>u==="…"?p.jsx("span",{className:"px-1.5 font-mono text-[12px]",style:{color:"#8B959B"},children:"…"},"e"+d):p.jsx("button",{onClick:()=>o(u),className:"flex h-8 min-w-8 items-center justify-center rounded-lg px-2 font-mono text-[12.5px] transition hover:bg-gray-100",style:u===e?{background:"#D16B3B",color:"#FFFFFF",fontWeight:700}:{color:"#8B959B"},children:u},u)),p.jsx("button",{onClick:()=>o(u=>Math.min(t,u+1)),disabled:e===t,className:"flex h-8 w-8 items-center justify-center rounded-lg border transition disabled:opacity-30 hover:bg-gray-50",style:{borderColor:"#E4E1D8",color:"#4B555C"},"aria-label":"Next page",children:p.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,children:p.jsx("polyline",{points:"9 18 15 12 9 6"})})})]})]})}function qi({label:e,count:t,active:o,onClick:s,color:i}){return p.jsxs("button",{onClick:s,className:"flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-left text-[13px] transition hover:bg-gray-50",style:{background:o?"#F0EAE1":"transparent",color:o?"#1B2126":"#4B555C"},children:[p.jsxs("span",{className:"flex min-w-0 items-center gap-2",children:[p.jsx("span",{className:"h-1.5 w-1.5 shrink-0 rounded-full",style:{background:i}}),p.jsx("span",{className:"truncate",children:e})]}),p.jsx("span",{className:"shrink-0 font-mono text-[10.5px]",style:{color:"#8B959B"},children:t})]})}function i7(){const[e,t]=x.useState(""),[o,s]=x.useState("All"),[i,l]=x.useState(1),[u,d]=x.useState(()=>new Set),[f,m]=x.useState(!1),y=x.useRef(null),v=x.useMemo(()=>{const I=[];for(const H of Bs)I.includes(H.c)||I.push(H.c);return I},[]),S=x.useMemo(()=>{const I={};for(const H of Bs)I[H.c]=(I[H.c]||0)+1;return I},[]),w=x.useMemo(()=>{const I=e.trim().toLowerCase();return Bs.filter(H=>o!=="All"&&H.c!==o?!1:I?H.q.toLowerCase().includes(I)||H.a.toLowerCase().includes(I):!0)},[e,o]),R=Math.max(1,Math.ceil(w.length/Hs));x.useEffect(()=>{l(1)},[e,o]),x.useEffect(()=>{i>R&&l(R)},[R]);const k=w.slice((i-1)*Hs,i*Hs),C=I=>{l(I),y.current?.scrollIntoView({behavior:"smooth",block:"start"})},E=I=>{d(H=>{const z=new Set(H);return z.has(I)?z.delete(I):z.add(I),z})},M=()=>{d(I=>{const H=new Set(I),z=k.every(Y=>H.has(Y.id));return k.forEach(Y=>{z?H.delete(Y.id):H.add(Y.id)}),H})},P=w.length===0?0:(i-1)*Hs+1,D=Math.min(i*Hs,w.length);return p.jsxs("div",{className:"min-h-screen w-full",style:{background:"#FAF9F6",fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif"},children:[p.jsx("div",{ref:y}),p.jsx(Hh,{}),p.jsxs("div",{className:"mx-auto flex max-w-6xl gap-6 px-4 py-6 sm:px-6 lg:py-8 mt-50",children:[p.jsx("aside",{className:"hidden w-56 shrink-0 lg:block",children:p.jsxs("div",{className:"sticky top-28 space-y-1",children:[p.jsx("p",{className:"mb-2 px-2 font-mono text-[11px] uppercase tracking-wider",style:{color:"#8B959B"},children:"Topics"}),p.jsx(qi,{label:"All questions",count:Bs.length,active:o==="All",onClick:()=>s("All"),color:"#4B555C"}),v.map(I=>p.jsx(qi,{label:I,count:S[I],active:o===I,onClick:()=>s(I),color:_i(I,v)},I))]})}),f&&p.jsxs("div",{className:"fixed inset-0 z-40 lg:hidden",children:[p.jsx("div",{className:"absolute inset-0 bg-black/40",onClick:()=>m(!1)}),p.jsxs("div",{className:"absolute inset-x-0 bottom-0 max-h-[75vh] overflow-y-auto rounded-t-2xl border-t p-4",style:{background:"#FFFFFF",borderColor:"#E4E1D8"},children:[p.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[p.jsx("p",{className:"font-mono text-[11px] uppercase tracking-wider",style:{color:"#8B959B"},children:"Topics"}),p.jsx("button",{onClick:()=>m(!1),children:p.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,style:{color:"#4B555C"},children:[p.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),p.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),p.jsxs("div",{className:"space-y-1 pb-2",children:[p.jsx(qi,{label:"All questions",count:Bs.length,active:o==="All",onClick:()=>{s("All"),m(!1)},color:"#4B555C"}),v.map(I=>p.jsx(qi,{label:I,count:S[I],active:o===I,onClick:()=>{s(I),m(!1)},color:_i(I,v)},I))]})]})]}),p.jsxs("main",{className:"min-w-0 flex-1 pt-10",children:[p.jsxs("div",{className:"mb-4 flex flex-wrap items-center justify-between gap-2",children:[p.jsxs("div",{className:"flex items-center gap-2 font-mono text-[12px]",style:{color:"#8B959B"},children:[p.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,children:[p.jsx("line",{x1:"4",y1:"9",x2:"20",y2:"9"}),p.jsx("line",{x1:"4",y1:"15",x2:"20",y2:"15"}),p.jsx("line",{x1:"10",y1:"3",x2:"8",y2:"21"}),p.jsx("line",{x1:"16",y1:"3",x2:"14",y2:"21"})]}),w.length," result",w.length===1?"":"s",o!=="All"&&p.jsxs("span",{style:{color:_i(o,v)},children:["· ",o]})]}),p.jsx("div",{className:"mx-auto max-w-6xl px-4 pb-3.5 sm:px-6",children:p.jsxs("div",{className:"flex items-center gap-2 rounded-xl border px-3.5",style:{background:"#FFFFFF",borderColor:"#E4E1D8"},children:[p.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,style:{color:"#8B959B"},children:[p.jsx("circle",{cx:"11",cy:"11",r:"8"}),p.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),p.jsx("input",{value:e,onChange:I=>t(I.target.value),placeholder:"Search questions & answers…",className:"h-10 w-full bg-transparent text-[14px] outline-none placeholder:text-[#8B959B]",style:{color:"#1B2126"}}),e&&p.jsx("button",{onClick:()=>t(""),"aria-label":"Clear search",children:p.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,style:{color:"#8B959B"},children:[p.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),p.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]})}),p.jsx("div",{className:"flex text-[12.5px]",children:p.jsx("button",{onClick:M,className:"rounded-md px-2 py-1 font-medium transition hover:bg-gray-100",style:{color:"#D16B3B"},children:k.length>0&&k.every(I=>u.has(I.id))?"Collapse page":"Expand page"})})]}),k.length===0?p.jsxs("div",{className:"flex flex-col items-center justify-center rounded-2xl border py-20 text-center",style:{borderColor:"#E4E1D8",color:"#8B959B"},children:[p.jsx("p",{className:"mb-1 text-[15px] font-medium",style:{color:"#1B2126"},children:"No matches on the shelf"}),p.jsx("p",{className:"text-[13px]",children:"Try a different search term or topic."})]}):p.jsx("div",{className:"space-y-5",children:k.map(I=>p.jsx(r7,{item:I,isOpen:u.has(I.id),onToggle:()=>E(I.id),accent:_i(I.c,v)},I.id))}),w.length>0&&p.jsx(a7,{page:i,totalPages:R,setPage:C,total:w.length,shownFrom:P,shownTo:D}),p.jsx("div",{className:"h-4"})]})]}),p.jsx($h,{})]})}const l7=()=>p.jsx("div",{className:"min-h-screen bg-foreground text-background py-20 px-4",children:p.jsxs("div",{className:"max-w-3xl mx-auto bg-background/5 p-8 rounded-xl shadow-md",children:[p.jsx("h1",{className:"text-3xl font-bold mb-6",children:"Privacy Policy"}),p.jsx("p",{className:"mb-4",children:"Your privacy is important to me. This Privacy Policy explains what information I collect, how it is used, and how I protect it."}),p.jsx("h2",{className:"text-xl font-semibold mt-6 mb-2",children:"Information Collection"}),p.jsx("p",{className:"mb-4",children:"I do not collect personal information unless you voluntarily provide it, such as via email or contact forms."}),p.jsx("h2",{className:"text-xl font-semibold mt-6 mb-2",children:"Use of Information"}),p.jsx("p",{className:"mb-4",children:"Any information provided will only be used to respond to your inquiries or provide requested services."}),p.jsx("h2",{className:"text-xl font-semibold mt-6 mb-2",children:"Third-Party Services"}),p.jsx("p",{className:"mb-4",children:"My website may use third-party tools like analytics, but none of these store personal data directly tied to you."}),p.jsx("h2",{className:"text-xl font-semibold mt-6 mb-2",children:"Contact"}),p.jsxs("p",{children:["If you have questions about this Privacy Policy, feel free to contact me at ",p.jsx("a",{href:"mailto:srinubabu.sara@gmail.com",className:"underline hover:text-accent",children:"srinubabu.sara@gmail.com"}),"."]})]})}),c7=()=>p.jsx("div",{className:"min-h-screen bg-foreground text-background py-20 px-4",children:p.jsxs("div",{className:"max-w-3xl mx-auto bg-background/5 p-8 rounded-xl shadow-md",children:[p.jsx("h1",{className:"text-3xl font-bold mb-6",children:"Terms & Conditions"}),p.jsx("p",{className:"mb-4",children:"By using this website, you agree to the following terms and conditions."}),p.jsx("h2",{className:"text-xl font-semibold mt-6 mb-2",children:"Use of Content"}),p.jsx("p",{className:"mb-4",children:"All content on this site is for personal or informational purposes only. You may not copy or redistribute content without permission."}),p.jsx("h2",{className:"text-xl font-semibold mt-6 mb-2",children:"Links to Other Sites"}),p.jsx("p",{className:"mb-4",children:"This site may contain links to external websites. I am not responsible for the content or privacy practices of these external sites."}),p.jsx("h2",{className:"text-xl font-semibold mt-6 mb-2",children:"Limitation of Liability"}),p.jsx("p",{className:"mb-4",children:"I am not liable for any damages arising from the use of this website or the information contained herein."}),p.jsx("h2",{className:"text-xl font-semibold mt-6 mb-2",children:"Changes"}),p.jsx("p",{className:"mb-4",children:"I may update these terms at any time. Continued use of the website constitutes acceptance of the updated terms."}),p.jsx("h2",{className:"text-xl font-semibold mt-6 mb-2",children:"Contact"}),p.jsxs("p",{children:["For any questions regarding these terms, contact me at",p.jsx("a",{href:"mailto:srinubabu.sara@gmail.com",className:"underline hover:text-accent",children:" srinubabu.sara@gmail.com"}),"."]})]})}),u7=new Zk,d7=()=>p.jsx(tC,{client:u7,children:p.jsxs(Pk,{children:[p.jsx(c3,{}),p.jsx(U3,{}),p.jsx(Ak,{}),p.jsxs(J2,{children:[p.jsx(Ar,{path:"/",element:p.jsx(WP,{})}),p.jsx(Ar,{path:"/fresher-guide",element:p.jsx(ZP,{})}),p.jsx(Ar,{path:"/react-question_answers",element:p.jsx(i7,{})}),p.jsx(Ar,{path:"/privacy-policy",element:p.jsx(l7,{})}),p.jsx(Ar,{path:"/terms-and-conditions",element:p.jsx(c7,{})})]})]})});n2.createRoot(document.getElementById("root")).render(p.jsx(t4,{children:p.jsx(d7,{})}));
