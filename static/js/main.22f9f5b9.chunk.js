(window.webpackJsonpoutlive=window.webpackJsonpoutlive||[]).push([[0],{148:function(e,t,n){e.exports=n(237)},153:function(e,t,n){},154:function(e,t,n){},237:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(9),c=n.n(i),o=(n(153),n(53)),l=n(39),s=(n(154),n(145)),u=n(50),m=n(51),h=n(56),d=n(52),p=n(57),f=n(146),v=n(245),E=n(240),g=n(67),w=n.n(g),y=n(104),b="database!A1:M",k="AIzaSyChFa8ete627UC3U9Wlgwffij0QeRdmthc",j="https://sheets.googleapis.com/v4/spreadsheets/".concat("1tLcsXib4I6wYr9EJED5uJj_mMfvDwI8hBJ7-dJWnTMk","/values/").concat(b,"?key=").concat(k),N=function(e){return e.splice(0,1),e.map(function(e){return function(e){return{id:e[0],days:e[1],birthDate:new Date(e[2]),deathDate:new Date(e[3]),firstName:e[4],lastName:e[5],title:e[6],description:e[7],image:e[8],link:e[9],categories:e[10].split(","),exactDates:"TRUE"===e[11],nationality:e[12].split(",")}}(e)}).sort(function(e,t){return e.days-t.days})},O=function(){var e=Object(y.a)(w.a.mark(function e(){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",window.fetch(j).then(function(e){return e.json().then(function(e){if(e)return N(e.values)})}));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(y.a)(w.a.mark(function e(t){var n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:return n=e.sent,e.abrupt("return",n.filter(function(e){return e.id===t}));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),S=n(12),x=n(105),C=n.n(x),A=function(e){var t=e.children;return r.a.createElement(C.a,{query:"(min-device-width: 1224px)"},t)},z=function(e){return r.a.createElement("div",null,r.a.createElement(o.b,{className:"Header-link",to:e.path,style:{color:e.active?"white":"grey"}},r.a.createElement(S.a,{type:e.icon})," ",r.a.createElement(A,null,e.text)))},M=function(e,t){return function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-header"},r.a.createElement("div",{style:{zIndex:10},className:"flex-container"},r.a.createElement(z,{path:"/",icon:"home",text:"Home",active:"home"===t}),r.a.createElement(z,{path:"/statistics",icon:"bar-chart",text:"Statistics",active:"statistics"===t}),r.a.createElement(z,{path:"/settings",icon:"setting",text:"Settings",active:"settings"===t})),r.a.createElement(e,null)))}},W=function(e){return function(e,t){var n=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()),a=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate());return Math.floor((a-n)/864e5)}(e,new Date)},I=new Date("1993-10-12"),B=W(I),T={id:"you",title:"You",days:B,image:"http://www.accountingweb.co.uk/sites/all/modules/custom/sm_pp_user_profile/img/default-user.png",categories:[],link:"/settings"},U=function(e){return r.a.createElement("div",null,r.a.createElement("div",{style:{color:"white"}},e.days," days"),r.a.createElement("div",null,e.categories.map(function(e){return r.a.createElement(f.a,{key:e,color:"purple"},e)})))},J=function(e){return r.a.createElement(v.a.Item,{key:e.id},r.a.createElement(o.b,{style:{width:"100%"},state:e,to:"you"===e.id?"settings":"description/".concat(e.id)},r.a.createElement(v.a.Item.Meta,{avatar:r.a.createElement(E.a,{size:64,src:e.image}),style:{width:"100%"},title:r.a.createElement("a",{style:{color:"white"},href:e.link},e.title),description:r.a.createElement(U,e)})))},R=M(function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={people:[]},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;O().then(function(t){return e.setState({people:[T].concat(Object(s.a)(t))})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,B," days"),r.a.createElement(v.a,{itemLayout:"horizontal",dataSource:this.state.people,renderItem:function(e){return r.a.createElement(J,e)}}))}}]),t}(a.Component),"home"),P=n(243),F=n(142),L=n(248),Y=n(247),_=n(249),q=n(241),H=n(242),G=function(){Notification.requestPermission().then(function(e){})},Q=M(function(e){return r.a.createElement("div",{className:"settings"},r.a.createElement("h1",{className:"theme"},"Settings"),r.a.createElement("div",null,r.a.createElement("h2",{className:"theme"},"Birthdate"),r.a.createElement(P.a,{onChange:function(){}})),r.a.createElement(F.a,{type:"horizontal"}),r.a.createElement("div",null,r.a.createElement("h2",{className:"theme"},"Notifications Mode"),r.a.createElement(L.a,{onClick:G},"Allow notification"),r.a.createElement(Y.a.Group,{onChange:function(){},value:1},r.a.createElement(Y.a,{value:1},"When I outlive"),r.a.createElement(Y.a,{value:2},"Recap once a week"),r.a.createElement(Y.a,{value:3},"Never"))),r.a.createElement(F.a,{type:"horizontal"}),r.a.createElement("div",null,r.a.createElement("h2",{className:"theme"},"Categories"),r.a.createElement(_.a.Group,{style:{width:"100%"},onChange:function(){}},r.a.createElement(q.a,null,r.a.createElement(H.a,{span:12},r.a.createElement(_.a,null,"Famous")),r.a.createElement(H.a,{span:12},r.a.createElement(_.a,null,"Actors")),r.a.createElement(H.a,{span:12},r.a.createElement(_.a,null,"Artists")),r.a.createElement(H.a,{span:12},r.a.createElement(_.a,null,"Politics")),r.a.createElement(H.a,{span:12},r.a.createElement(_.a,null,"Science")),r.a.createElement(H.a,{span:12},r.a.createElement(_.a,null,"Singers")),r.a.createElement(H.a,{span:12},r.a.createElement(_.a,null,"Sport"))))))},"settings"),V=n(246),X=M(function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={age:W(new Date("1993-10-12"))},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{style:{color:"white"}},"Statistics"),r.a.createElement("h3",{style:{color:"white"}},"Survival Time"),r.a.createElement(V.a,{title:"Days",value:this.state.age}),r.a.createElement(V.a,{title:"Hours",value:24*this.state.age}),r.a.createElement(V.a,{title:"Minutes",value:24*this.state.age*60}),r.a.createElement(V.a,{title:"Seconds",value:24*this.state.age*60*60}))}}]),t}(a.Component),"statistics"),$=n(244),K=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;D(this.props.match.params.id).then(function(t){return e.setState({description:t[0]})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.description&&r.a.createElement("div",null,r.a.createElement($.a,{title:this.state.description.title,subTitle:"".concat(this.state.description.days," days"),onBack:function(){return e.props.history.goBack()}}),r.a.createElement(E.a,{size:128,src:this.state.description.image})),r.a.createElement("p",null,console.log(this.props)))}}]),t}(a.Component),Z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ee(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}console.log("checking for notif"),Notification.requestPermission(function(e){"granted"===e&&(console.log("notif Allowed"),navigator.serviceWorker.ready.then(function(e){console.log("Notif !"),e.showNotification("Vibration Sample",{body:"Buzz! Buzz! 2",icon:"../images/touch/chrome-touch-icon-192x192.png",vibrate:[200,100,200,100,200,100,200],tag:"vibration-sample"})}))});n(236);c.a.render(r.a.createElement(function(e){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(l.a,{path:"/",exact:!0,component:R}),r.a.createElement(l.a,{path:"/statistics",component:X}),r.a.createElement(l.a,{path:"/settings",component:Q}),r.a.createElement(l.a,{path:"/description/:id",component:K})))},null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");Z?(!function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ee(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):ee(t,e)})}}()}},[[148,1,2]]]);
//# sourceMappingURL=main.22f9f5b9.chunk.js.map