"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[99],{9099:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var r,a,c,u,o,i=e(5861),s=e(885),p=e(4687),f=e.n(p),l=e(2791),d=e(7689),h=e(1066),g=e(5984),v=e(168),x=e(7691),y=x.default.ul(r||(r=(0,v.Z)(["\n  list-style: none;\n  padding-left: 0px;\n"]))),w=x.default.li(a||(a=(0,v.Z)(["\n  text-align: left;\n"]))),k=x.default.h2(c||(c=(0,v.Z)(["\n  font-size: 18px;\n"]))),m=x.default.p(u||(u=(0,v.Z)(["\n  background-color: rgb(235, 233, 235);\n  padding: 20px;\n"]))),Z=x.default.p(o||(o=(0,v.Z)(["\ntext-align: center;\n"]))),_=e(184),b=function(){var n=(0,l.useState)([]),t=(0,s.Z)(n,2),e=t[0],r=t[1],a=(0,d.UO)().movieId;return(0,l.useEffect)((function(){function n(){return(n=(0,i.Z)(f().mark((function n(){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!a){n.next=12;break}return n.prev=1,n.next=4,(0,h.Bt)(a);case 4:return t=n.sent,r(t.results),n.abrupt("return",t.results);case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0.response.data);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}(a)}),[a]),(0,_.jsx)(_.Fragment,{children:0!==e.length?(0,_.jsx)(y,{children:e.map((function(n){return(0,_.jsxs)(w,{children:[(0,_.jsxs)(k,{children:["Author: ",n.author]}),(0,_.jsx)(m,{children:n.content})]},(0,g.x0)(3))}))}):(0,_.jsx)(Z,{children:"No reviews information."})})}},1066:function(n,t,e){e.d(t,{Bt:function(){return m},LI:function(){return x},Tg:function(){return d},gQ:function(){return g},y:function(){return w}});var r=e(5861),a=e(4687),c=e.n(a),u=e(1044);u.ZP.defaults.baseURL="https://api.themoviedb.org/3";var o="2402629cc235e448b11efcecffc11c17",i="trending/movie/week",s="movie/",p="search/movie",f="/credits",l="/reviews";function d(){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("/".concat(i,"?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n,t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("/".concat(p,"?api_key=").concat(o,"&query=").concat(t,"&language=en-US&page=").concat(e,"&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("/".concat(s).concat(t).concat(f,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("/".concat(s).concat(t).concat(l,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},5984:function(n,t,e){e.d(t,{x0:function(){return r}});var r=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",e=crypto.getRandomValues(new Uint8Array(n));n--;){var r=63&e[n];t+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t}}}]);
//# sourceMappingURL=99.5fd5a1c5.chunk.js.map