(this["webpackJsonpmath-magicians"]=this["webpackJsonpmath-magicians"]||[]).push([[0],{14:function(t,n,e){},16:function(t,n,e){},17:function(t,n,e){"use strict";e.r(n);var r=e(1),a=e.n(r),o=e(9),c=e.n(o),l=e(2),i=e(3),u=e(5),s=e(4),p=e(6),b=(e(14),e(8)),x=e.n(b);function j(t,n,e){var r=x()(t),a=x()(n);if("+"===e)return r.plus(a).toString();if("-"===e)return r.minus(a).toString();if("x"===e)return r.times(a).toString();if("\xf7"===e)return r.div(a).toString();if("%"===e)return r.mod(a).toString();throw Error("Unknown operation '".concat(e,"'"))}var m=e(0),d=function(t){Object(u.a)(e,t);var n=Object(s.a)(e);function e(){return Object(l.a)(this,e),n.apply(this,arguments)}return Object(i.a)(e,[{key:"render",value:function(){var t=this.props,n=t.number,e=t.clickHandler;return Object(m.jsx)("button",{className:"btn-".concat(n),onClick:e,type:"button",value:n,children:n})}}]),e}(a.a.Component),O=(e(16),function(t){Object(u.a)(e,t);var n=Object(s.a)(e);function e(){var t;Object(l.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=n.call.apply(n,[this].concat(a))).setDisplay=function(t){return t.number.next?t.number.next:t.number.total?t.number.total:0},t}return Object(i.a)(e,[{key:"render",value:function(){var t=this.setDisplay(this.props);return Object(m.jsx)("div",{className:"display-container",value:t,children:t})}}]),e}(a.a.Component)),f=function(t){Object(u.a)(e,t);var n=Object(s.a)(e);function e(t){var r;return Object(l.a)(this,e),(r=n.call(this,t)).clickHandler=function(t){r.setCalculatorResult(t.target.value)},r.setCalculatorResult=function(t){var n,e,a=r.state.currentOp,o=(n=a,"AC"===(e=t)?{total:null,next:null,operation:null}:e.match(/[0-9]+/)?"0"===e&&"0"===n.next?{}:n.operation?n.next?{next:n.next+e}:{next:e}:n.next?{next:n.next+e,total:null}:{next:e,total:null}:"."===e?n.next?n.next.includes(".")?{}:{next:"".concat(n.next,".")}:n.operation?{next:"0."}:n.total?n.total.includes(".")?{}:{total:"".concat(n.total,".")}:{total:"0."}:"="===e?n.next&&n.operation?{total:j(n.total,n.next,n.operation),next:null,operation:null}:{}:"+/-"===e?n.next?{next:(-1*parseFloat(n.next)).toString()}:n.total?{total:(-1*parseFloat(n.total)).toString()}:{}:n.next||n.total?n.next?n.operation?{total:j(n.total,n.next,n.operation),next:null,operation:e}:{total:n.next,next:null,operation:e}:{operation:e}:{});r.setState({currentOp:r.updateCurrentOperation(o)})},r.updateCurrentOperation=function(t){var n=t.next,e=t.total,a=t.operation,o=r.state.currentOp;return(e||null===e)&&(o.total=e),(n||null===n)&&(o.next=n),(a||null===a)&&(o.operation=a),o},r.state={numbers:Array.from(Array(10).keys()).reverse(),special:["AC","+/-","%"],operators:["\xf7","*","-","+","="],decimalDot:".",currentOp:{total:null,next:null,operation:null}},r.clickHandler=r.clickHandler.bind(Object(p.a)(r)),r}return Object(i.a)(e,[{key:"render",value:function(){var t=this,n=this.state,e=n.numbers,r=n.decimalDot,a=n.special,o=n.operators,c=n.currentOp,l=e.map((function(n){return Object(m.jsx)(d,{number:n.toString(),clickHandler:t.clickHandler},n)})),i=a.map((function(n){return Object(m.jsx)(d,{number:n.toString(),clickHandler:t.clickHandler},n)})),u=o.map((function(n){return Object(m.jsx)(d,{number:n.toString(),clickHandler:t.clickHandler},n)}));return Object(m.jsxs)("div",{className:"main-container",children:[Object(m.jsx)(O,{number:c}),Object(m.jsx)("ul",{className:"special-container",children:i}),Object(m.jsxs)("ul",{className:"numbers-container",children:[l,Object(m.jsx)(d,{className:"dot-btn",type:"button",clickHandler:this.clickHandler,number:r})]}),Object(m.jsx)("ul",{className:"operator-container",children:u})]})}}]),e}(a.a.Component),h=function(t){Object(u.a)(e,t);var n=Object(s.a)(e);function e(t){var r;return Object(l.a)(this,e),(r=n.call(this,t)).state={},r}return Object(i.a)(e,[{key:"render",value:function(){return Object(m.jsx)(f,{})}}]),e}(a.a.Component);c.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(h,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.eca2ddd8.chunk.js.map