(this["webpackJsonphw-2"]=this["webpackJsonphw-2"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(4),i=n.n(c),o=(n(15),n(5)),r=n(6),s=n(7),l=n(10),u=n(9),d=(n(16),n(0)),b=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,i=e.positive;return Object(d.jsxs)("div",{className:"Statistics__title",children:[Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:["Good: ",t," "]}),Object(d.jsxs)("li",{children:["Neutral: ",n," "]}),Object(d.jsxs)("li",{children:[" Bad: ",a," "]})]}),Object(d.jsxs)("h3",{children:[" Total: ",c," "]}),Object(d.jsxs)("h3",{children:[" Positive feedback: ",i," % "]})]})},j=n(8),h=n.n(j),v=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(d.jsx)("div",{children:t.map((function(e){return Object(d.jsx)("button",{type:"button",name:e,onClick:n,children:e},h.a.generate())}))})},O=function(e){var t=e.message;return Object(d.jsx)("p",{children:t})},f=(n(26),function(e){var t=e.title,n=e.children;return Object(d.jsxs)("div",{className:"Section",children:[Object(d.jsx)("h2",{children:t}),n]})}),x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){var n=t.target.value;e.setState((function(e){return Object(o.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){return e.state.valueGood+e.state.valueNeutral+e.state.valueBad},e.countPositiveFeedbackPercentage=function(){return Math.round(100/e.countTotalFeedback()*e.state.valueGood)},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=this.countTotalFeedback(),i=this.countPositiveFeedbackPercentage();return Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{title:"Please leave us feedback",children:Object(d.jsx)(v,{options:["good","neutral","bad"],onLeaveFeedback:this.onLeaveFeedback})}),Object(d.jsx)(f,{title:"Statistics",children:c>0?Object(d.jsx)(b,{good:t,neutral:n,bad:a,total:c,positive:i}):Object(d.jsx)(O,{message:"No feedback  given"})})]})}}]),n}(a.Component);i.a.render(Object(d.jsx)(x,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.324fbd66.chunk.js.map