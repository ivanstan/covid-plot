(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{152:function(t,e,o){"use strict";o.r(e);var r=o(0),n=o.n(r),a=o(41),i=o.n(a),s=(o(54),o(24)),d=o.n(s),u=o(42),l=o(43),c=o(44),p=o(48),b=o(47),h=(o(56),o(45)),g=function(t){Object(p.a)(o,t);var e=Object(b.a)(o);function o(){var t;return Object(l.a)(this,o),(t=e.call(this)).data={},t.options={tooltips:{callbacks:{title:function(){return""},label:function(e,o){var r=o.datasets[e.datasetIndex].label||"",n=r+": "+e.yLabel;if(!r)return"";var a=t.getComment(e.xLabel);return a&&(n+=". "+a),n}}}},t.onChange=function(e){var o=t.getCity(e.target.value);t.getJson(e.target.value+".json").then((function(e){t.setData(e,o)}))},t.state={data:{}},t}return Object(c.a)(o,[{key:"getJson",value:function(){var t=Object(u.a)(d.a.mark((function t(e){var o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return o=t.sent,t.next=5,o.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"setData",value:function(t,e){this.data=t;var o=[],r=[],n=[];for(var a in t)t[a].Date&&"NA"!==t[a].Stringency&&(o.push(t[a].Date),r.push({x:t[a].Date,y:Math.round(t[a].Stringency,2)}),n.push({x:t[a].Date,y:Math.round(t[a][e],2)}));var i=this.getCommentData(t);this.setState({data:{labels:o,datasets:[{label:"Stringency",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:0,pointHitRadius:10,data:r},{label:"NO2",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgb(152,146,213)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgb(152,146,213)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:1,pointHoverBackgroundColor:"rgb(152,146,213)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:1,pointRadius:1,pointHitRadius:10,data:n},{label:"",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.0)",borderColor:"rgba(152,146,213, 0)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"rgba(75,192,192,1)",pointBorderWidth:1,pointHoverRadius:1,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:1,pointRadius:5,pointHitRadius:10,data:i}]}})}},{key:"componentDidMount",value:function(){var t=this;this.getJson("uk.json").then((function(e){t.setData(e,"London")}))}},{key:"getComment",value:function(t){for(var e in this.data)if(this.data[e].Date===t)return this.data[e].Comment;return""}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("select",{onChange:this.onChange},n.a.createElement("option",{value:"uk"},"London, United Kingdom"),n.a.createElement("option",{value:"sweden"},"Stockholm, Sweden"),n.a.createElement("option",{value:"croatia"},"Zagreb, Croatia")),n.a.createElement(h.a,{data:this.state.data,options:this.options}))}},{key:"getCommentData",value:function(t){var e=[];for(var o in t){if(t[o].Date)this.getComment(t[o].Date)&&e.push({x:t[o].Date,y:Math.round(t[o].Stringency,2)})}return e}},{key:"getCity",value:function(t){return{uk:"London",croatia:"Zagreb",sweden:"Stockholm"}[t]}}]),o}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},49:function(t,e,o){t.exports=o(152)},54:function(t,e,o){},56:function(t,e,o){}},[[49,1,2]]]);
//# sourceMappingURL=main.30910112.chunk.js.map