import{G as t,H as n,_ as e,m as s,i as r,s as a,o as c,S as o,p as u,e as i,B as f,r as l,d as h,u as p,a as v,b as m,C as d,f as y,g as x,h as g,x as R,D as b,E as D,z as E,A as H}from"./client.11cf6472.js";function j(t){return function(){var n,e=E(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var s=E(this).constructor;n=Reflect.construct(e,arguments,s)}else n=e.apply(this,arguments);return H(this,n)}}function k(t){var n,e,s,r,a,c,o=t[0].title+"",E=t[0].html+"";return document.title=n=t[0].title,{c:function(){e=u(),s=i("h1"),r=f(o),a=u(),c=i("div"),this.h()},l:function(t){l('[data-svelte="svelte-1uty71u"]',document.head).forEach(h),e=p(t),s=v(t,"H1",{});var n=m(s);r=d(n,o),n.forEach(h),a=p(t),c=v(t,"DIV",{class:!0}),m(c).forEach(h),this.h()},h:function(){y(c,"class","content svelte-gnxal1")},m:function(t,n){x(t,e,n),x(t,s,n),g(s,r),x(t,a,n),x(t,c,n),c.innerHTML=E},p:function(t,e){var s=R(e,1)[0];1&s&&n!==(n=t[0].title)&&(document.title=n),1&s&&o!==(o=t[0].title+"")&&b(r,o),1&s&&E!==(E=t[0].html+"")&&(c.innerHTML=E)},i:D,o:D,d:function(t){t&&h(e),t&&h(s),t&&h(a),t&&h(c)}}}function w(t){return L.apply(this,arguments)}function L(){return(L=t(n.mark(function t(e){var s,r,a;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.params,e.query,t.next=3,this.fetch("blog/".concat(s.slug,".json"));case 3:return r=t.sent,t.next=6,r.json();case 6:if(a=t.sent,200!==r.status){t.next=11;break}return t.abrupt("return",{post:a});case 11:this.error(r.status,a.message);case 12:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function M(t,n,e){var s=n.post;return t.$set=function(t){"post"in t&&e(0,s=t.post)},[s]}export default(function(t){e(u,o);var n=j(u);function u(t){var e;return s(this,u),e=n.call(this),r(c(e),t,M,k,a,{post:0}),e}return u}());export{w as preload};