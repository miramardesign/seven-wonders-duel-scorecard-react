(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(7),o=a.n(c),l=(a(14),a(15),a(16),a(1)),s=a(2),i=a(4),m=a(3),u=a(5),d=(a(17),a(18),function(e){function t(e){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"scorelist"},this.props.scoreList.map(function(e,t){return n.a.createElement("div",{className:"row input-row",key:e.title},n.a.createElement("div",{className:"col-md"},e.title))}),n.a.createElement("div",{className:"row input-row"},n.a.createElement("div",{className:"col-md"},"Total")))}}]),t}(n.a.Component)),p=(a(19),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleChangeScore=function(e,t){var r=e.target.value,n=a.props.player;n.scores[t]=r,n.totalScore=a.calcTotalScore(n),console.dir(n),a.setState({player:n}),a.forceUpdate()},a.state={hasError:!1,player:a.props.player},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"calcTotalScore",value:function(e){return Object.values(e.scores).reduce(function(e,t){return parseInt(e)+parseInt(t)})}},{key:"render",value:function(){var e=this;return this.state.hasError?n.a.createElement("h1",null,"Something went wrong."):n.a.createElement("section",{id:"scoreinput"},this.props.scoreList.map(function(t,a){return n.a.createElement("div",{className:"row",key:t.title},n.a.createElement("div",{className:"col-md"},n.a.createElement("input",{type:"number",value:e.state.value,onChange:function(a){return e.handleChangeScore(a,t.title)}})))}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md"},n.a.createElement("input",{type:"text",value:this.state.player.totalScore,readOnly:"readOnly"}))))}}]),t}(r.PureComponent)),h=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).perist={set:function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(a){console.error("Error saving to localStorage",a)}},get:function(e){try{return JSON.parse(localStorage.getItem(e))}catch(t){return console.error("Error getting data from localStorage",t),null}},clear:function(){localStorage.clear()}},a.scoreList=[{title:"Blue Card",points:0},{title:"Yellow Card",points:0},{title:"Purple Card",points:0},{title:"Wonders",points:0},{title:"Technology Chips",points:0},{title:"Money",points:0},{title:"Military Points",points:0}],a.state={player1:{name:"One",totalScore:0,scores:{}},player2:{name:"Two",totalScore:0,scores:{}}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{id:"scorecard"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},"Player Name "),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("input",{type:"text"})),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("input",{type:"text"}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement(d,{scoreList:this.scoreList})),n.a.createElement("div",{className:"col-md-4"},n.a.createElement(p,{player:this.state.player1,scoreList:this.scoreList})),n.a.createElement("div",{className:"col-md-4"},n.a.createElement(p,{player:this.state.player2,scoreList:this.scoreList}))))}}]),t}(n.a.Component);var v=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h1",null,"Seven Wonders Duel Scorecard ")),n.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.ff5dba8f.chunk.js.map