(this["webpackJsonpanonymous-feedback"]=this["webpackJsonpanonymous-feedback"]||[]).push([[3],{102:function(t,e){},104:function(t,e){},173:function(t,e){},175:function(t,e){},198:function(t,e){},199:function(t,e){},215:function(t,e,n){"use strict";n.r(e);var a=n(96),r=n(49),c=n(50),i=n(95),o=n(94),s=n(0),l=n.n(s),u=(n(97),n(214)),d=(n(98),function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).hoverHandler=function(t){var e=t.target.parentElement.getElementsByClassName("star"),n=t.target.dataset.value;Array.from(e).forEach((function(t){t.style.color=n>=t.dataset.value?"#C1F0FF":"gray"}))},a.setRating=function(t){var e=a.refs.rating.getElementsByClassName("star");Array.from(e).forEach((function(t){t.style.color=a.state.currentRating>=t.dataset.value?"#C1F0FF":"gray"}))},a.starClickHandler=function(t){var e=t.target.dataset.value;a.setState({currentRating:e}),a.props.onClick&&a.props.onClick(e)},a.state={currentRating:a.props.currentRating},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.setRating()}},{key:"render",value:function(){var t=this;return l.a.createElement("div",{className:"rating",ref:"rating","data-rating":this.state.currentRating,onMouseOut:this.setRating},Object(u.a)(Array(+this.props.numberOfStars).keys()).map((function(e){return l.a.createElement("span",{className:"star",key:e+1,"data-value":e+1,onMouseOver:t.hoverHandler,onClick:t.starClickHandler},"\u2605")})))}}]),n}(s.Component)),f=n(99),g=n.n(f),m=n(205),p=n.n(m),h=n(24).readFileSync("/etc/ca-certificates/learning-iot-ca.crt"),v={clientId:p.a,ca:h,rejectUnauthorized:!1},b=g.a.connect("wss://wss.aidanparkinson.xyz:443",v);console.log("connected flag  "+b.connected),b.on("connect",(function(){console.log("connected  "+b.connected)}));var k=function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(t){var c;return Object(r.a)(this,n),(c=e.call(this,t)).handleChange=function(t){c.setState(Object(a.a)({},t.target.name,t.target.value))},c.setRating=function(t){c.setState({rating:t})},c.broadcastFeedback=function(){b.publish("anonymous-feedback/".concat(p.a,"/json"),{likert_score:c.state.rating,description:c.state.description}),c.setState({rating:null,description:null})},c.state={rating:null,description:null},c}return Object(c.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"form-input"},l.a.createElement("div",{className:"form-input-rating"},l.a.createElement(d,{numberOfStars:"5",currentRating:null,onClick:this.setRating})),l.a.createElement("div",{className:"actions"},l.a.createElement("button",{onClick:this.broadcastFeedback},"Submit")),l.a.createElement("textarea",{name:"description",id:"description",onChange:this.handleChange,placeholder:"A description of your experience..."})))}}]),n}(l.a.Component);e.default=k},97:function(t,e,n){},98:function(t,e,n){}}]);
//# sourceMappingURL=3.2bb0f0bb.chunk.js.map