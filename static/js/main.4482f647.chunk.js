(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),l=a(7),n=a.n(l),o=(a(14),a(15),a(16),a(1)),s=a(2),i=a(4),m=a(3),u=a(5),p=(a(17),a(18),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"scorelist"},c.a.createElement("div",{className:"row input-row"},c.a.createElement("label",{className:"col-md col-form-label"},c.a.createElement("span",{className:"black i-player"})," Player Name")),this.props.scoreList.map(function(e,t){return c.a.createElement("div",{className:"row input-row",key:e.title},c.a.createElement("label",{className:"col-md col-form-label"},c.a.createElement("span",{className:e.cls})," ",e.title))}),c.a.createElement("div",{className:"row"},c.a.createElement("label",{className:"col-md col-form-label"}," ",c.a.createElement("span",{className:"i-sigma"})," Total")))}}]),t}(c.a.Component)),d=(a(19),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleChangeScore=function(e,t){var r=e.target.value,c=a.props.player;c.scores[t]=r,c.totalScore=a.calcTotalScore(c),console.dir(c),a.setState({player:c}),a.forceUpdate()},a.state={hasError:!1,player:a.props.player},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"calcTotalScore",value:function(e){return Object.values(e.scores).reduce(function(e,t){return parseInt(e)+parseInt(t)})}},{key:"render",value:function(){var e=this;return this.state.hasError?c.a.createElement("h1",null,"Something went wrong."):c.a.createElement("section",{id:"scoreinput"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Player Name"}))),this.props.scoreList.map(function(t,a){return c.a.createElement("div",{className:"row",key:t.title},c.a.createElement("div",{className:"col-md"},c.a.createElement("input",{type:"number",className:"form-control",value:e.state.value,onChange:function(a){return e.handleChangeScore(a,t.title)}})))}),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md"},c.a.createElement("input",{type:"text",className:"form-control",value:this.state.player.totalScore,readOnly:"readOnly"}))))}}]),t}(r.PureComponent)),h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).perist={set:function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(a){console.error("Error saving to localStorage",a)}},get:function(e){try{return JSON.parse(localStorage.getItem(e))}catch(t){return console.error("Error getting data from localStorage",t),null}},clear:function(){localStorage.clear()}},a.scoreList=[{title:"Blue Cards",points:0,cls:"blue i-card"},{title:"Yellow Cards",points:0,cls:"yellow i-card"},{title:"Purple Cards",points:0,cls:"purple i-card"},{title:"Wonders",points:0,cls:"gold i-pyramid"},{title:"Tech Chips",points:0,cls:"green i-chip"},{title:"Money",points:0,cls:"gold i-chip"},{title:"Military Points",points:0,cls:"red i-shield"}],a.state={player1:{name:"One",totalScore:0,scores:{}},player2:{name:"Two",totalScore:0,scores:{}}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{id:"scorecard",className:"form-group "},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-1 offset-md-4"},c.a.createElement(p,{scoreList:this.scoreList})),c.a.createElement("div",{className:"col-md-1"},c.a.createElement(d,{player:this.state.player1,scoreList:this.scoreList})),c.a.createElement("div",{className:"col-md-1"},c.a.createElement(d,{player:this.state.player2,scoreList:this.scoreList}))))}}]),t}(c.a.Component);var f=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",null,"Seven Wonders Duel Scorecard ")),c.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.4482f647.chunk.js.map