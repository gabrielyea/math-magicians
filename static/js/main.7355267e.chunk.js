(this["webpackJsonpmath-magicians"]=this["webpackJsonpmath-magicians"]||[]).push([[0],{13:function(e,n,t){},15:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),a=t(4),i=t.n(a),s=t(5),l=t(6),u=t(2),o=t(8),b=t(7),j=(t(13),t(0));function d(e){var n=e.number,t=e.clickHandler;return Object(j.jsx)("button",{className:"btn-".concat(n),onClick:t,type:"button",value:n,children:n})}t(15);function m(e){var n=e.number;return Object(j.jsx)("div",{className:"display-container",value:n,children:n})}var h=function(e){Object(o.a)(t,e);var n=Object(b.a)(t);function t(e){var c;return Object(s.a)(this,t),(c=n.call(this,e)).clickHandler=function(e){c.setState({currentValue:e.target.value})},c.state={currentValue:"0",numbers:Array.from(Array(10).keys()),special:["AC","+/-","%"],operators:["/","*","-","+","="],decimalDot:"."},c.clickHandler=c.clickHandler.bind(Object(u.a)(c)),c}return Object(l.a)(t,[{key:"render",value:function(){var e=this,n=this.state,t=n.numbers,c=n.decimalDot,r=n.special,a=n.operators,i=n.currentValue,s=t.reverse().map((function(n){return Object(j.jsx)(d,{number:n.toString(),clickHandler:e.clickHandler},n)})),l=r.map((function(n){return Object(j.jsx)(d,{number:n.toString(),clickHandler:e.clickHandler},n)})),u=a.map((function(n){return Object(j.jsx)(d,{number:n.toString(),clickHandler:e.clickHandler},n)}));return Object(j.jsxs)("div",{className:"main-container",children:[Object(j.jsx)(m,{number:i}),Object(j.jsx)("ul",{className:"special-container",children:l}),Object(j.jsxs)("ul",{className:"numbers-container",children:[s,Object(j.jsx)(d,{className:"dot-btn",type:"button",clickHandler:this.clickHandler,number:c})]}),Object(j.jsx)("ul",{className:"operator-container",children:u})]})}}]),t}(r.a.Component);var p=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{className:"App-header"}),Object(j.jsx)(h,{})]})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.7355267e.chunk.js.map