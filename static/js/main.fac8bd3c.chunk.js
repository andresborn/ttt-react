(this["webpackJsonpttt-react"]=this["webpackJsonpttt-react"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),l=n(4),c=n.n(l),i=(n(14),n(15),n(7)),r=n(5),u=n(6),h=n(2),o=n(9),j=n(8),d=n(0),b=function(e){return Object(d.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})},x=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).handleName1=s.handleName1.bind(Object(h.a)(s)),s.handleName2=s.handleName2.bind(Object(h.a)(s)),s.restart=s.restart.bind(Object(h.a)(s)),s.state={squares:[null,null,null,null,null,null,null,null,null],xIsNext:!0,name1:"",name2:""},s}return Object(u.a)(n,[{key:"handleClick",value:function(e){if(!this.state.squares[e]&&!m(this.state.squares)){var t=this.state.squares.slice();t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext})}}},{key:"handleName1",value:function(e){this.setState({name1:e.target.value})}},{key:"handleName2",value:function(e){this.setState({name2:e.target.value})}},{key:"restart",value:function(){this.setState({squares:[null,null,null,null,null,null,null,null,null],xIsNext:!0})}},{key:"render",value:function(){var e,t=this,n=m(this.state.squares);return n?e="The winner is ".concat("X"===n?this.state.name1:this.state.name2):""===this.state.name1||""===this.state.name2||(e=this.state.xIsNext?"It is ".concat(this.state.name1,"'s turn"):"It is ".concat(this.state.name2,"'s turn")),Object(d.jsxs)("div",{className:"board",children:[Object(d.jsxs)("div",{className:"banner",children:[Object(d.jsx)("p",{className:"display",children:e}),Object(d.jsxs)("div",{className:"names-row",children:[Object(d.jsx)("input",{className:"name",type:"text",value:this.state.name1,onChange:this.handleName1,placeholder:"Player 1"}),Object(d.jsx)("input",{className:"name",type:"text",value:this.state.name2,onChange:this.handleName2,placeholder:"Player 2"})]})]}),Object(d.jsx)("button",{className:"reset",onClick:this.restart,children:"Play again"}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)(b,{value:this.state.squares[0],onClick:function(){return t.handleClick(0)}}),Object(d.jsx)(b,{value:this.state.squares[1],onClick:function(){return t.handleClick(1)}}),Object(d.jsx)(b,{value:this.state.squares[2],onClick:function(){return t.handleClick(2)}})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)(b,{value:this.state.squares[3],onClick:function(){return t.handleClick(3)}}),Object(d.jsx)(b,{value:this.state.squares[4],onClick:function(){return t.handleClick(4)}}),Object(d.jsx)(b,{value:this.state.squares[5],onClick:function(){return t.handleClick(5)}})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)(b,{value:this.state.squares[6],onClick:function(){return t.handleClick(6)}}),Object(d.jsx)(b,{value:this.state.squares[7],onClick:function(){return t.handleClick(7)}}),Object(d.jsx)(b,{value:this.state.squares[8],onClick:function(){return t.handleClick(8)}})]})]})}}]),n}(s.Component),m=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var s=Object(i.a)(t[n],3),a=s[0],l=s[1],c=s[2];if(e[a]&&e[a]===e[l]&&e[a]===e[c])return e[a]}return null},v=function(e){return Object(d.jsx)("h1",{className:"header",children:"Tic Tac Toe"})};var O=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(v,{}),Object(d.jsx)(x,{})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,l=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),l(e),c(e)}))};c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.fac8bd3c.chunk.js.map