(this["webpackJsonppani-frontend"]=this["webpackJsonppani-frontend"]||[]).push([[0],{14:function(e,n,c){},16:function(e,n,c){},17:function(e,n,c){"use strict";c.r(n);var t=c(0),r=c.n(t),i=c(8),l=c.n(i),a=c(2),u=(c(14),c(6)),s=c(9);var d=c(1);function h(e){var n=e.feature,c=n.children,r=n.name,i=n.price,l=e.parentNames,o=e.setParentTotal,j=e.checkedChildren,f=e.setCheckedChildren,b=Object(t.useState)(0),m=Object(a.a)(b,2),p=m[0],O=m[1],v=Object(t.useState)(!1),x=Object(a.a)(v,2),g=x[0],C=x[1],N=Object(t.useState)(i),S=Object(a.a)(N,2),k=S[0],P=S[1],T=Object(t.useState)([]),E=Object(a.a)(T,2),F=E[0],B=E[1],$=function(e){var n=Object(t.useRef)(0);return Object(t.useEffect)((function(){n.current=e})),n.current}(p);Object(t.useEffect)((function(){if(i)if(j.length>0){if(j[0]===r)return P(i);P(i/2)}else P(i)}),[j,g,r,i]),Object(t.useEffect)((function(){!1===g?(O(0),f((function(e){return e.filter((function(e){return e!==r}))}))):(k&&O(k),f((function(e){return[].concat(Object(u.a)(e),[r])})))}),[g,k,r,f]),Object(t.useEffect)((function(){if(p<$){var e=$-p;o((function(n){return n-e}))}else{var n=p-$;o((function(e){return e+n}))}}),[p,$,o]);var w="".concat(l).concat(l.length?"-":"").concat(r),I=0!==p?"$".concat(String(p)):k?"$".concat(k):"-";return Object(d.jsxs)("div",{className:"mx",children:[Object(d.jsxs)(s.a,{checked:g,onChange:function(e){var n=e.target;return C(n.checked)},animation:"smooth",color:"info",children:["".concat(l.length?"Sub-feature ":"Feature "),w,Object(d.jsxs)("span",{children:[" (",I,")"]})]}),!i&&g&&Object(d.jsx)("div",{className:"indentation",children:null===c||void 0===c?void 0:c.map((function(e,n){return Object(d.jsx)(h,{feature:e,parentNames:w,setParentTotal:O,checkedChildren:F,setCheckedChildren:B},w+n)}))})]})}function o(e){var n=e.children;return Object(d.jsx)("div",{className:"content",children:n})}function j(e){var n=e.total;return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"footer-container",children:[Object(d.jsx)("div",{className:"pricing",children:Object(d.jsxs)("strong",{children:["Total: $",n," / mo"]})}),Object(d.jsx)("button",{className:"save-button",children:"Save"})]})]})}function f(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"header",children:Object(d.jsx)("h2",{children:"Subscription Preferences"})}),Object(d.jsx)("hr",{})]})}var b=[{name:"A",price:null,children:[{name:"1",price:null,children:[{name:"1",price:50,children:null}]},{name:"2",price:null,children:[{name:"1",price:50,children:null},{name:"2",price:50,children:null}]},{name:"3",price:null,children:[{name:"1",price:50,children:null}]}]},{name:"B",price:null,children:[{name:"1",price:null,children:[{name:"1",price:50,children:null}]},{name:"2",price:null,children:[{name:"1",price:50,children:null},{name:"2",price:50,children:null}]},{name:"3",price:null,children:[{name:"1",price:50,children:null}]}]},{name:"C",price:null,children:[{name:"1",price:null,children:[{name:"1",price:50,children:null}]},{name:"2",price:null,children:[{name:"1",price:null,children:[{name:"1",price:50,children:null},{name:"2",price:50,children:null}]},{name:"2",price:50,children:null}]},{name:"3",price:null,children:[{name:"1",price:50,children:null}]}]}];function m(){var e=Object(t.useState)(0),n=Object(a.a)(e,2),c=n[0],r=n[1];return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(f,{}),Object(d.jsx)(o,{children:b.map((function(e,n){return Object(d.jsx)(h,{feature:e,parentNames:"",setParentTotal:r,checkedChildren:[],setCheckedChildren:function(){}},"".concat(n))}))}),Object(d.jsx)(j,{total:c})]})}c(16);var p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(n){var c=n.getCLS,t=n.getFID,r=n.getFCP,i=n.getLCP,l=n.getTTFB;c(e),t(e),r(e),i(e),l(e)}))};l.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),p()}},[[17,1,2]]]);
//# sourceMappingURL=main.16f6a757.chunk.js.map