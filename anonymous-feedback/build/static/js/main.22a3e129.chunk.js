(this["webpackJsonpanonymous-feedback"]=this["webpackJsonpanonymous-feedback"]||[]).push([[0],{165:function(e,t){},167:function(e,t){},190:function(e,t){},191:function(e,t){},197:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(79),c=n.n(o),i=(n(88),n(89),n(80)),s=n(24),l=n(25),u=n(27),d=n(26),m=(n(90),n(82)),f=(n(91),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).hoverHandler=function(e){var t=e.target.parentElement.getElementsByClassName("star"),n=e.target.dataset.value;Array.from(t).forEach((function(e){e.style.color=n>=e.dataset.value?"#C1F0FF":"gray"}))},a.setRating=function(e){var t=a.refs.rating.getElementsByClassName("star");Array.from(t).forEach((function(e){e.style.color=a.state.currentRating>=e.dataset.value?"#C1F0FF":"gray"}))},a.starClickHandler=function(e){var t=e.target.dataset.value;a.setState({currentRating:t}),a.props.onClick&&a.props.onClick(t)},a.state={currentRating:a.props.currentRating},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setRating()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"rating",ref:"rating","data-rating":this.state.currentRating,onMouseOut:this.setRating},Object(m.a)(Array(+this.props.numberOfStars).keys()).map((function(t){return r.a.createElement("span",{className:"star",key:t+1,"data-value":t+1,onMouseOver:e.hoverHandler,onClick:e.starClickHandler},"\u2605")})))}}]),n}(a.Component)),g=n(81),p={retain:!0,qos:1},v=n.n(g).a.connect("ws://wss.aidanparkinson.xyz:9001",{});console.log("connected flag  "+v.connected),v.on("connect",(function(){console.log("connected  "+v.connected)}));var h=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(i.a)({},e.target.name,e.target.value))},a.setRating=function(e){a.setState({rating:e})},a.broadcastFeedback=function(){v.publish("anonymous-feedback/json",JSON.stringify({likert_score:a.state.rating,description:a.state.description}),p),a.setState({rating:null,description:null}),window.location.reload(!1)},a.state={rating:null,description:null},a}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"form-input"},r.a.createElement("div",{className:"form-input-rating"},r.a.createElement(f,{numberOfStars:"5",currentRating:null,onClick:this.setRating})),r.a.createElement("div",{className:"actions"},r.a.createElement("button",{onClick:this.broadcastFeedback},"Submit")),r.a.createElement("textarea",{name:"description",id:"description",onChange:this.handleChange,placeholder:"A description of your experience..."})))}}]),n}(r.a.Component);var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"main-heading"},r.a.createElement("div",{className:"project"},"Learning IoT"),r.a.createElement("div",{className:"application"},"anonymous-feedback")),r.a.createElement("div",{className:"question"},"An impression:"),r.a.createElement(h,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,t,n){e.exports=n(197)},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},94:function(e,t){},96:function(e,t){}},[[83,1,2]]]);
//# sourceMappingURL=main.22a3e129.chunk.js.map