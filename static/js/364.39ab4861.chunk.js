"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[364],{3174:function(t,e,n){n.d(e,{O:function(){return x}});var r,o,a,i,s,c,u=n(7689),l=n(168),d=n(3237),f=n(6731),p=d.Z.ul(r||(r=(0,l.Z)(["\n display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-gap: 16px;\n  margin-top: 20px;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),m=(d.Z.li(o||(o=(0,l.Z)(["\n\n"]))),d.Z.div(a||(a=(0,l.Z)(["\n  padding: 10px;\n  /* border: 1px solid black; */\n  height: 95%;\n   box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);\n  \n\n  :hover {\n    transition: all 0.2s ease-in-out;\n   \n    scale: 103%;\n  }\n  \n"])))),v=(0,d.Z)(f.rU)(i||(i=(0,l.Z)(["\ntext-decoration: none;"]))),g=d.Z.img(s||(s=(0,l.Z)(["\n  width: 100%;\n"]))),h=d.Z.p(c||(c=(0,l.Z)(["\ntext-transform: uppercase;\ncolor: black;\n"]))),y=n(5063),b=n(184),x=function(t){var e=t.movies,n=(0,u.TH)();return(0,b.jsx)(p,{children:e.map((function(t){var e=t.id,r=t.name,o=t.title,a=t.poster_path;return(0,b.jsx)("div",{children:(0,b.jsx)(v,{to:"/movies/".concat(e),state:{from:n},children:(0,b.jsxs)(m,{children:[(0,b.jsx)(g,{src:a?"https://image.tmdb.org/t/p/w500".concat(a):y,alt:o}),(0,b.jsx)(h,{children:o||r})]})})},e)}))})}},7364:function(t,e,n){n.r(e),n.d(e,{default:function(){return bt}});var r=n(2982),o=n(5861),a=n(885),i=n(4687),s=n.n(i),c=n(6731),u=n(2791);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function m(t){var e,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=m(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}var v=function(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=m(t))&&(r&&(r+=" "),r+=e);return r},g=["theme","type"],h=["delay","staleId"],y=function(t){return"number"==typeof t&&!isNaN(t)},b=function(t){return"string"==typeof t},x=function(t){return"function"==typeof t},E=function(t){return b(t)||x(t)?t:null},T=function(t){return(0,u.isValidElement)(t)||b(t)||x(t)||y(t)};function O(t){var e=t.enter,n=t.exit,o=t.appendPosition,a=void 0!==o&&o,i=t.collapse,s=void 0===i||i,c=t.collapseDuration,l=void 0===c?300:c;return function(t){var o=t.children,i=t.position,c=t.preventExitTransition,d=t.done,f=t.nodeRef,p=t.isIn,m=a?"".concat(e,"--").concat(i):e,v=a?"".concat(n,"--").concat(i):n,g=(0,u.useRef)(0);return(0,u.useLayoutEffect)((function(){var t,e=f.current,n=m.split(" "),o=function t(o){var a;o.target===f.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",t),e.removeEventListener("animationcancel",t),0===g.current&&"animationcancel"!==o.type&&(a=e.classList).remove.apply(a,(0,r.Z)(n)))};(t=e.classList).add.apply(t,(0,r.Z)(n)),e.addEventListener("animationend",o),e.addEventListener("animationcancel",o)}),[]),(0,u.useEffect)((function(){var t=f.current,e=function e(){t.removeEventListener("animationend",e),s?function(t,e,n){void 0===n&&(n=300);var r=t.scrollHeight,o=t.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(e,n)}))}))}(t,d,l):d()};p||(c?e():(g.current=1,t.className+=" ".concat(v),t.addEventListener("animationend",e)))}),[p]),u.createElement(u.Fragment,null,o)}}function w(t,e){return{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}}var C={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t,e){if(e){var n=this.list.get(t).filter((function(t){return t!==e}));return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit:function(t){var e=arguments,n=this;this.list.has(t)&&this.list.get(t).forEach((function(o){var a=setTimeout((function(){o.apply(void 0,(0,r.Z)([].slice.call(e,1)))}),0);n.emitQueue.has(t)||n.emitQueue.set(t,[]),n.emitQueue.get(t).push(a)}))}},_=function(t){var e=t.theme,n=t.type,r=p(t,g);return u.createElement("svg",f({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===e?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},I={info:function(t){return u.createElement(_,f({},t),u.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return u.createElement(_,f({},t),u.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return u.createElement(_,f({},t),u.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return u.createElement(_,f({},t),u.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return u.createElement("div",{className:"Toastify__spinner"})}};function k(t){var e=(0,u.useReducer)((function(t){return t+1}),0),n=(0,a.Z)(e,2)[1],o=(0,u.useState)([]),i=(0,a.Z)(o,2),s=i[0],c=i[1],l=(0,u.useRef)(null),d=(0,u.useRef)(new Map).current,m=function(t){return-1!==s.indexOf(t)},v=(0,u.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:m,getToast:function(t){return d.get(t)}}).current;function g(t){var e=t.containerId;!v.props.limit||e&&v.containerId!==e||(v.count-=v.queue.length,v.queue=[])}function O(t){c((function(e){return null==t?[]:e.filter((function(e){return e!==t}))}))}function _(){var t=v.queue.shift();L(t.toastContent,t.toastProps,t.staleId)}function k(t,e){var r=e.delay,o=e.staleId,a=p(e,h);if(T(t)&&!function(t){return!l.current||v.props.enableMultiContainer&&t.containerId!==v.props.containerId||d.has(t.toastId)&&null==t.updateId}(a)){var i=a.toastId,s=a.updateId,c=a.data,m=v.props,g=function(){return O(i)},k=null==s;k&&v.count++;var P,N,Z=f(f(f({},m),{},{style:m.toastStyle,key:v.toastKey++},a),{},{toastId:i,updateId:s,data:c,closeToast:g,isIn:!1,className:E(a.className||m.toastClassName),bodyClassName:E(a.bodyClassName||m.bodyClassName),progressClassName:E(a.progressClassName||m.progressClassName),autoClose:!a.isLoading&&(P=a.autoClose,N=m.autoClose,!1===P||y(P)&&P>0?P:N),deleteToast:function(){var t=w(d.get(i),"removed");d.delete(i),C.emit(4,t);var e=v.queue.length;if(v.count=null==i?v.count-v.displayedToast:v.count-1,v.count<0&&(v.count=0),e>0){var r=null==i?v.props.limit:1;if(1===e||1===r)v.displayedToast++,_();else{var o=r>e?e:r;v.displayedToast=o;for(var a=0;a<o;a++)_()}}else n()}});Z.iconOut=function(t){var e=t.theme,n=t.type,r=t.isLoading,o=t.icon,a=null,i={theme:e,type:n};return!1===o||(x(o)?a=o(i):(0,u.isValidElement)(o)?a=(0,u.cloneElement)(o,i):b(o)||y(o)?a=o:r?a=I.spinner():function(t){return t in I}(n)&&(a=I[n](i))),a}(Z),x(a.onOpen)&&(Z.onOpen=a.onOpen),x(a.onClose)&&(Z.onClose=a.onClose),Z.closeButton=m.closeButton,!1===a.closeButton||T(a.closeButton)?Z.closeButton=a.closeButton:!0===a.closeButton&&(Z.closeButton=!T(m.closeButton)||m.closeButton);var j=t;(0,u.isValidElement)(t)&&!b(t.type)?j=(0,u.cloneElement)(t,{closeToast:g,toastProps:Z,data:c}):x(t)&&(j=t({closeToast:g,toastProps:Z,data:c})),m.limit&&m.limit>0&&v.count>m.limit&&k?v.queue.push({toastContent:j,toastProps:Z,staleId:o}):y(r)?setTimeout((function(){L(j,Z,o)}),r):L(j,Z,o)}}function L(t,e,n){var o=e.toastId;n&&d.delete(n);var a={content:t,props:e};d.set(o,a),c((function(t){return[].concat((0,r.Z)(t),[o]).filter((function(t){return t!==n}))})),C.emit(4,w(a,null==a.props.updateId?"added":"updated"))}return(0,u.useEffect)((function(){return v.containerId=t.containerId,C.cancelEmit(3).on(0,k).on(1,(function(t){return l.current&&O(t)})).on(5,g).emit(2,v),function(){d.clear(),C.emit(3,v)}}),[]),(0,u.useEffect)((function(){v.props=t,v.isToastActive=m,v.displayedToast=s.length})),{getToastToRender:function(e){var n=new Map,r=Array.from(d.values());return t.newestOnTop&&r.reverse(),r.forEach((function(t){var e=t.props.position;n.has(e)||n.set(e,[]),n.get(e).push(t)})),Array.from(n,(function(t){return e(t[0],t[1])}))},containerRef:l,isToastActive:m}}function L(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function P(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function N(t){var e=(0,u.useState)(!1),n=(0,a.Z)(e,2),r=n[0],o=n[1],i=(0,u.useState)(!1),s=(0,a.Z)(i,2),c=s[0],l=s[1],d=(0,u.useRef)(null),f=(0,u.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,u.useRef)(t),m=t.autoClose,v=t.pauseOnHover,g=t.closeToast,h=t.onClick,y=t.closeOnClick;function b(e){if(t.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",w),document.addEventListener("mouseup",C),document.addEventListener("touchmove",w),document.addEventListener("touchend",C);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=L(e.nativeEvent),f.y=P(e.nativeEvent),"x"===t.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(t.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function E(e){if(f.boundingRect){var n=f.boundingRect,r=n.top,o=n.bottom,a=n.left,i=n.right;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=r&&f.y<=o?O():T()}}function T(){o(!0)}function O(){o(!1)}function w(e){var n=d.current;f.canDrag&&n&&(f.didMove=!0,r&&O(),f.x=L(e),f.y=P(e),f.delta="x"===t.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(t.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function C(){document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",w),document.removeEventListener("touchend",C);var e=d.current;if(f.canDrag&&f.didMove&&e){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform="translate".concat(t.draggableDirection,"(0)"),e.style.opacity="1"}}(0,u.useEffect)((function(){p.current=t})),(0,u.useEffect)((function(){return d.current&&d.current.addEventListener("d",T,{once:!0}),x(t.onOpen)&&t.onOpen((0,u.isValidElement)(t.children)&&t.children.props),function(){var t=p.current;x(t.onClose)&&t.onClose((0,u.isValidElement)(t.children)&&t.children.props)}}),[]),(0,u.useEffect)((function(){return t.pauseOnFocusLoss&&(document.hasFocus()||O(),window.addEventListener("focus",T),window.addEventListener("blur",O)),function(){t.pauseOnFocusLoss&&(window.removeEventListener("focus",T),window.removeEventListener("blur",O))}}),[t.pauseOnFocusLoss]);var _={onMouseDown:b,onTouchStart:b,onMouseUp:E,onTouchEnd:E};return m&&v&&(_.onMouseEnter=O,_.onMouseLeave=T),y&&(_.onClick=function(t){h&&h(t),f.canCloseOnClick&&g()}),{playToast:T,pauseToast:O,isRunning:r,preventExitTransition:c,toastRef:d,eventHandlers:_}}function Z(t){var e=t.closeToast,n=t.theme,r=t.ariaLabel,o=void 0===r?"close":r;return u.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":o},u.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},u.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function j(t){var e=t.delay,n=t.isRunning,r=t.closeToast,o=t.type,a=void 0===o?"default":o,i=t.hide,s=t.className,c=t.style,d=t.controlledProgress,p=t.progress,m=t.rtl,g=t.isIn,h=t.theme,y=i||d&&0===p,b=f(f({},c),{},{animationDuration:"".concat(e,"ms"),animationPlayState:n?"running":"paused",opacity:y?0:1});d&&(b.transform="scaleX(".concat(p,")"));var E=v("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(h),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":m}),T=x(s)?s({rtl:m,type:a,defaultClassName:E}):v(E,s);return u.createElement("div",l({role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:T,style:b},d&&p>=1?"onTransitionEnd":"onAnimationEnd",d&&p<1?null:function(){g&&r()}))}var R=function(t){var e=N(t),n=e.isRunning,r=e.preventExitTransition,o=e.toastRef,a=e.eventHandlers,i=t.closeButton,s=t.children,c=t.autoClose,l=t.onClick,d=t.type,p=t.hideProgressBar,m=t.closeToast,g=t.transition,h=t.position,y=t.className,b=t.style,E=t.bodyClassName,T=t.bodyStyle,O=t.progressClassName,w=t.progressStyle,C=t.updateId,_=t.role,I=t.progress,k=t.rtl,L=t.toastId,P=t.deleteToast,R=t.isIn,M=t.isLoading,S=t.iconOut,D=t.closeOnClick,z=t.theme,B=v("Toastify__toast","Toastify__toast-theme--".concat(z),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":D}),A=x(y)?y({rtl:k,position:h,type:d,defaultClassName:B}):v(B,y),q=!!I||!c,F={closeToast:m,type:d,theme:z},H=null;return!1===i||(H=x(i)?i(F):(0,u.isValidElement)(i)?(0,u.cloneElement)(i,F):Z(F)),u.createElement(g,{isIn:R,done:P,position:h,preventExitTransition:r,nodeRef:o},u.createElement("div",f(f({id:L,onClick:l,className:A},a),{},{style:b,ref:o}),u.createElement("div",f(f({},R&&{role:_}),{},{className:x(E)?E({type:d}):v("Toastify__toast-body",E),style:T}),null!=S&&u.createElement("div",{className:v("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},S),u.createElement("div",null,s)),H,u.createElement(j,f(f({},C&&!q?{key:"pb-".concat(C)}:{}),{},{rtl:k,theme:z,delay:c,isRunning:n,isIn:R,closeToast:m,hide:p,type:d,style:w,className:O,controlledProgress:q,progress:I||0}))))},M=function(t,e){return void 0===e&&(e=!1),{enter:"Toastify--animate Toastify__".concat(t,"-enter"),exit:"Toastify--animate Toastify__".concat(t,"-exit"),appendPosition:e}},S=O(M("bounce",!0)),D=(O(M("slide",!0)),O(M("zoom")),O(M("flip")),(0,u.forwardRef)((function(t,e){var n=k(t),r=n.getToastToRender,o=n.containerRef,a=n.isToastActive,i=t.className,s=t.style,c=t.rtl,l=t.containerId;function d(t){var e=v("Toastify__toast-container","Toastify__toast-container--".concat(t),{"Toastify__toast-container--rtl":c});return x(i)?i({position:t,rtl:c,defaultClassName:e}):v(e,E(i))}return(0,u.useEffect)((function(){e&&(e.current=o.current)}),[]),u.createElement("div",{ref:o,className:"Toastify",id:l},r((function(t,e){var n=e.length?f({},s):f(f({},s),{},{pointerEvents:"none"});return u.createElement("div",{className:d(t),style:n,key:"container-".concat(t)},e.map((function(t,n){var r=t.content,o=t.props;return u.createElement(R,f(f({},o),{},{isIn:a(o.toastId),style:f(f({},o.style),{},{"--nth":n+1,"--len":e.length}),key:"toast-".concat(o.key)}),r)})))})))})));D.displayName="ToastContainer",D.defaultProps={position:"top-right",transition:S,autoClose:5e3,closeButton:Z,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var z,B=new Map,A=[],q=1;function F(){return""+q++}function H(t){return t&&(b(t.toastId)||y(t.toastId))?t.toastId:F()}function U(t,e){return B.size>0?C.emit(0,t,e):A.push({content:t,options:e}),e.toastId}function Q(t,e){return f(f({},e),{},{type:e&&e.type||t,toastId:H(e)})}function V(t){return function(e,n){return U(e,Q(t,n))}}function W(t,e){return U(t,Q("default",e))}W.loading=function(t,e){return U(t,Q("default",f({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},e)))},W.promise=function(t,e,n){var r,o=e.pending,a=e.error,i=e.success;o&&(r=b(o)?W.loading(o,n):W.loading(o.render,f(f({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(t,e,o){if(null!=e){var a=f(f(f({type:t},s),n),{},{data:o}),i=b(e)?{render:e}:e;return r?W.update(r,f(f({},a),i)):W(i.render,f(f({},a),i)),o}W.dismiss(r)},u=x(t)?t():t;return u.then((function(t){return c("success",i,t)})).catch((function(t){return c("error",a,t)})),u},W.success=V("success"),W.info=V("info"),W.error=V("error"),W.warning=V("warning"),W.warn=W.warning,W.dark=function(t,e){return U(t,Q("default",f({theme:"dark"},e)))},W.dismiss=function(t){B.size>0?C.emit(1,t):A=A.filter((function(e){return null!=t&&e.options.toastId!==t}))},W.clearWaitingQueue=function(t){return void 0===t&&(t={}),C.emit(5,t)},W.isActive=function(t){var e=!1;return B.forEach((function(n){n.isToastActive&&n.isToastActive(t)&&(e=!0)})),e},W.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=function(t,e){var n=e.containerId,r=B.get(n||z);return r&&r.getToast(t)}(t,e);if(n){var r=n.props,o=n.content,a=f(f(f({},r),e),{},{toastId:e.toastId||t,updateId:F()});a.toastId!==t&&(a.staleId=t);var i=a.render||o;delete a.render,U(i,a)}}),0)},W.done=function(t){W.update(t,{progress:1})},W.onChange=function(t){return C.on(4,t),function(){C.off(4,t)}},W.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},W.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},C.on(2,(function(t){z=t.containerId||t,B.set(z,t),A.forEach((function(t){C.emit(0,t.content,t.options)})),A=[]})).on(3,(function(t){B.delete(t.containerId||t),0===B.size&&C.off(0).off(1).off(5)}));var Y,G,X,K,J,$,tt=n(3174),et=n(1066),nt=n(168),rt=n(7691),ot={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},at=u.createContext&&u.createContext(ot),it=function(){return it=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},it.apply(this,arguments)},st=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};function ct(t){return t&&t.map((function(t,e){return u.createElement(t.tag,it({key:e},t.attr),ct(t.child))}))}function ut(t){return function(e){return u.createElement(lt,it({attr:it({},t.attr)},e),ct(t.child))}}function lt(t){var e=function(e){var n,r=t.attr,o=t.size,a=t.title,i=st(t,["attr","size","title"]),s=o||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),u.createElement("svg",it({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,r,i,{className:n,style:it(it({color:t.color||e.color},e.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&u.createElement("title",null,a),t.children)};return void 0!==at?u.createElement(at.Consumer,null,(function(t){return e(t)})):e(ot)}var dt=rt.default.div(Y||(Y=(0,nt.Z)(["\nwidth: 295px;\n  margin: 0 auto;\n"]))),ft=rt.default.div(G||(G=(0,nt.Z)(["\n/* width: 300px; */\n  display: inline-flex;\n  position: relative;\n  text-transform: uppercase;\n  justify-content: center;\n"]))),pt=rt.default.input(X||(X=(0,nt.Z)(["\n  padding: 8px 32px 8px 8px;\n  width: 250px;\n  border-radius: 4px;\n  border-width: 2px;\n  font: inherit;\n"]))),mt=(0,rt.default)((function(t){return ut({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"}}]})(t)}))(K||(K=(0,nt.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 20px;\n  bottom: 40px;\n  cursor: pointer;\n"]))),vt=rt.default.button(J||(J=(0,nt.Z)(["\n  background-color: transparent;\n  border: none;\n  height: 30px;\n"]))),gt=rt.default.form($||($=(0,nt.Z)(["\n  display: flex;\n  align-items: center;\n  min-height: 40px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  width: 100%;\n"]))),ht=n(184),yt=function(t){var e=t.value,n=t.onSubmit;return(0,ht.jsx)(dt,{children:(0,ht.jsx)(ft,{children:(0,ht.jsxs)(gt,{onSubmit:n,children:[(0,ht.jsx)(pt,{type:"text",name:"query",defaultValue:e,placeholder:"Search..."}),(0,ht.jsx)(vt,{type:"submit",children:(0,ht.jsx)(mt,{})})]})})})},bt=function(){var t,e,n=(0,c.lr)(),i=(0,a.Z)(n,2),l=i[0],d=i[1],f=null!==(t=l.get("query"))&&void 0!==t?t:"",p=(0,u.useState)([]),m=(0,a.Z)(p,2),v=m[0],g=m[1],h=Number(null!==(e=l.get("page"))&&void 0!==e?e:1);return(0,u.useEffect)((function(){""!==f&&function(){var t=(0,o.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,et.LI)(f,h);case 3:if(e=t.sent,h>1&&g((function(t){return[].concat((0,r.Z)(t),(0,r.Z)(e.results))})),0!==e.results.length){t.next=8;break}return W.error("Write properly"),t.abrupt("return");case 8:g((0,r.Z)(e.results)),d({query:f,page:h}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0.response.data);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}()()}),[f,h,d]),(0,ht.jsxs)("main",{children:[(0,ht.jsx)(yt,{value:f,onSubmit:function(t){t.preventDefault();var e=t.currentTarget.elements.query.value;""!==e?l.get("query")!==e?(d(""!==e?{query:e}:""),g([])):W.error("You're repeating yourself."):W.error("Please fill me ^.~")}}),v&&(0,ht.jsx)(tt.O,{movies:v}),(0,ht.jsx)(D,{autoClose:2e3,position:"top-left"})]})}},1066:function(t,e,n){n.d(e,{Bt:function(){return E},LI:function(){return h},Tg:function(){return p},gQ:function(){return v},y:function(){return b}});var r=n(5861),o=n(4687),a=n.n(o),i=n(1044);i.ZP.defaults.baseURL="https://api.themoviedb.org/3";var s="2402629cc235e448b11efcecffc11c17",c="trending/movie/week",u="movie/",l="search/movie",d="/credits",f="/reviews";function p(){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.ZP.get("/".concat(c,"?api_key=").concat(s));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.ZP.get("/movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.ZP.get("/".concat(l,"?api_key=").concat(s,"&query=").concat(e,"&language=en-US&include_adult=false"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.ZP.get("/".concat(u).concat(e).concat(d,"?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(t){return T.apply(this,arguments)}function T(){return(T=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.ZP.get("/".concat(u).concat(e).concat(f,"?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},5063:function(t,e,n){t.exports=n.p+"static/media/noPoster.e09d07fe87e0633625d2.jpg"}}]);
//# sourceMappingURL=364.39ab4861.chunk.js.map