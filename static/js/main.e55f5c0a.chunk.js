(window.webpackJsonpoutlive=window.webpackJsonpoutlive||[]).push([[0],{153:function(e,t,n){e.exports=n(243)},158:function(e,t,n){},159:function(e,t,n){},243:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),i=n.n(o),c=(n(158),n(53)),l=n(41),s=(n(159),n(82)),u=n(134),d=n(135),f=n(148),m=n(136),p=n(150),h=n(149),g=n(246),v=n(244),E=n(68),b=n.n(E),y=n(104),w="database!A1:M",O="AIzaSyChFa8ete627UC3U9Wlgwffij0QeRdmthc",D="https://sheets.googleapis.com/v4/spreadsheets/".concat("1tLcsXib4I6wYr9EJED5uJj_mMfvDwI8hBJ7-dJWnTMk","/values/").concat(w,"?key=").concat(O),j=function(e){return e.splice(0,1),e.map(function(e){return function(e){return{id:e[0],days:e[1],birthDate:new Date(e[2]),deathDate:new Date(e[3]),firstName:e[4],lastName:e[5],title:e[6],description:e[7],image:e[8],link:e[9],categories:e[10].split(","),exactDates:"TRUE"===e[11],nationality:e[12].split(",")}}(e)}).sort(function(e,t){return e.days-t.days})},k=function(){var e=Object(y.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",window.fetch(D).then(function(e){return e.json().then(function(e){if(e)return j(e.values)})}));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),S=n(12),A=n(105),P=n.n(A),T=function(e){var t=e.children;return r.a.createElement(P.a,{query:"(min-device-width: 1224px)"},t)},N=function(e){return r.a.createElement("div",null,r.a.createElement(c.b,{className:"Header-link",to:e.path,style:{color:e.active?"white":"grey"}},r.a.createElement(S.a,{type:e.icon})," ",r.a.createElement(T,null,e.text)))},C=function(e,t){return function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-header"},r.a.createElement("div",{style:{zIndex:10},className:"flex-container"},r.a.createElement(N,{path:"/",icon:"home",text:"Home",active:"home"===t}),r.a.createElement(N,{path:"/statistics",icon:"bar-chart",text:"Statistics",active:"statistics"===t}),r.a.createElement(N,{path:"/settings",icon:"setting",text:"Settings",active:"settings"===t})),r.a.createElement(e,null)))}},I=function(e){return function(e,t){var n=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()),a=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate());return Math.floor((a-n)/864e5)}(e,new Date)},_=n(33),x=function(e){return r.a.createElement("div",null,r.a.createElement("div",{style:{color:"white"}},e.days," days"),r.a.createElement("div",null,e.categories.map(function(e){return r.a.createElement(h.a,{key:e,color:"purple"},e)})))},R=function(e){return r.a.createElement(g.a.Item,{key:e.id},r.a.createElement(c.b,{style:{width:"100%"},state:e,to:"you"===e.id?"settings":"description/".concat(e.id)},r.a.createElement(g.a.Item.Meta,{avatar:r.a.createElement(v.a,{size:64,src:e.image}),style:{width:"100%"},title:r.a.createElement("a",{style:{color:"white"},href:e.link},e.title),description:r.a.createElement(x,e)})))},B=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(f.a)(this,Object(m.a)(t).call(this,e))).state={people:[]},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;k().then(function(t){return e.props.dispatch({type:"FILL_DATABASE",data:t})})}},{key:"render",value:function(){return r.a.createElement(g.a,{itemLayout:"horizontal",dataSource:this.props.database,renderItem:function(e){return r.a.createElement(R,e)},style:{paddingTop:"100px"}})}}]),t}(a.Component),M=function(e){return{id:"you",title:"You",days:e,image:"http://www.accountingweb.co.uk/sites/all/modules/custom/sm_pp_user_profile/img/default-user.png",categories:[],link:"/settings"}},F=C(Object(_.b)(function(e){var t=I(e.user.birth);return{database:e.database.length>0?[M(t)].concat(Object(s.a)(e.database)):[],age:t}})(B),"home"),z=n(145),W=n(245),Y=n(11),J=n.n(Y),L=function(e){return r.a.createElement("div",null,r.a.createElement("h2",{className:"theme"},"Birthdate"),r.a.createElement(W.a,{onChange:function(t){return e.dispatch({type:"SET_BIRTH_DATE",date:t.toDate()})},defaultValue:J()(e.user.birth)}))},U=n(251),H=n(249),G=function(){Notification.requestPermission().then(function(e){})},V=function(e){return r.a.createElement("div",null,r.a.createElement("h2",{className:"theme"},"Notifications Mode"),r.a.createElement(U.a,{onClick:G},"Allow notification"),r.a.createElement(H.a.Group,{onChange:function(t){return function(e,t){console.log(e),t({type:"SET_NOTIF_PREF",pref:e.target.value})}(t,e.dispatch)},value:e.user.notifPref},r.a.createElement(H.a,{value:"outlive"},"When I outlive"),r.a.createElement(H.a,{value:"never"},"Never")))},q=n(252),Q=["Famous","Actors","Artists","Politics","Science","Singers","Sport"],X=function(e){return r.a.createElement("div",null,r.a.createElement("h2",{className:"theme"},"Categories"),r.a.createElement("div",{style:{width:"100%"}},Q.map(function(t){return r.a.createElement(q.a,{checked:e.user.categories.includes(t),onChange:function(n){return a=n.target.checked,r=t,void(0,e.dispatch)(a?function(e){return{type:"ADD_CATEGORY",category:e}}(r):function(e){return{type:"REMOVE_CATEGORY",category:e}}(r));var a,r},key:t},t)})))},$=C(Object(_.b)(function(e){return{user:e.user}})(function(e){return r.a.createElement("div",{className:"settings"},r.a.createElement("h1",{className:"theme"},"Settings"),r.a.createElement(L,e),r.a.createElement(z.a,{type:"horizontal"}),r.a.createElement(V,e),r.a.createElement(z.a,{type:"horizontal"}),r.a.createElement(X,e))}),"settings"),K=n(248),Z=C(Object(_.b)(function(e){return{age:I(e.user.birth)}})(function(e){return r.a.createElement("div",null,r.a.createElement("h1",{style:{color:"white"}},"Statistics"),r.a.createElement("h3",{style:{color:"white"}},"Survival Time"),r.a.createElement(K.a,{title:"Days",value:e.age}),r.a.createElement(K.a,{title:"Hours",value:24*e.age}),r.a.createElement(K.a,{title:"Minutes",value:24*e.age*60}),r.a.createElement(K.a,{title:"Seconds",value:24*e.age*60*60}))}),"statistics"),ee=n(247),te=n(250);function ne(e){var t="00"+e;return t.substr(t.length-2)}var ae=function(e){return"".concat(e.getFullYear(),"-").concat(ne(e.getMonth()+1),"-").concat(ne(e.getDate()))},re=Object(_.b)(function(e,t){var n=e.database.filter(function(e){return e.id===t.match.params.id})[0];return console.log("description",n),console.log(e.database),console.log(t),{description:n}})(function(e){return r.a.createElement("div",{style:{minHeight:"100vh",backgroundColor:"#282c34"}},r.a.createElement(ee.a,{style:{backgroundColor:"black",color:"white",paddingTop:"1em",paddingBottom:"1em"},title:e.description&&r.a.createElement("div",{style:{color:"white"}},e.description.title),subTitle:e.description&&r.a.createElement("div",{style:{color:"white"}},"".concat(e.description.days," days")),onBack:function(){return e.history.goBack()},backIcon:r.a.createElement(S.a,{style:{color:"white"},type:"arrow-left"})}),e.description?r.a.createElement("div",{style:{backgroundColor:"#282c34",color:"white"}},r.a.createElement(v.a,{size:128,src:e.description.image}),r.a.createElement("p",null,"Birth : ",ae(e.description.birthDate)),r.a.createElement("p",null,"Death : ",ae(e.description.deathDate)),e.description.description&&r.a.createElement("p",null,e.description.description)):r.a.createElement(te.a,null))}),oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ie(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}console.log("checking for notif"),Notification.requestPermission(function(e){"granted"===e&&(console.log("notif Allowed"),navigator.serviceWorker.ready.then(function(e){console.log("Notif !"),e.showNotification("Vibration Sample",{body:"Buzz! Buzz! 2",icon:"../images/touch/chrome-touch-icon-192x192.png",vibrate:[200,100,200,100,200,100,200],tag:"vibration-sample"})}))});n(242);var ce=n(81),le=n(62),se=[],ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILL_DATABASE":return t.data;default:return e}};function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?de(n,!0).forEach(function(t){Object(ce.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var me={categories:["Famous"],birth:new Date("1993-10-12"),notifPref:"never"},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BIRTH_DATE":return fe({},e,{birth:t.date});case"ADD_CATEGORY":return fe({},e,{categories:[].concat(Object(s.a)(e.categories),[t.category])});case"REMOVE_CATEGORY":return fe({},e,{categories:e.categories.filter(function(e){return e===t.ategory})});case"SET_NOTIF_PREF":return fe({},e,{notifPref:t.pref});default:return e}};function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var ge=function(){var e=localStorage.getItem("reduxState")?JSON.parse(localStorage.getItem("reduxState")):{user:me,database:se};return e.database&&(e.database=e.database.map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(n,!0).forEach(function(t){Object(ce.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{birthDate:new Date(e.birthDate),deathDate:new Date(e.deathDate)})})),e.user&&(e.user.birth=new Date(e.user.birth)),e},ve=function(){var e=Object(le.c)(Object(le.b)({database:ue,user:pe}),ge());return e.subscribe(function(){localStorage.setItem("reduxState",JSON.stringify(e.getState()))}),e}(),Ee=r.a.createElement(_.a,{store:ve},r.a.createElement(function(e){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(l.a,{path:"/",exact:!0,component:F}),r.a.createElement(l.a,{path:"/statistics",component:Z}),r.a.createElement(l.a,{path:"/settings",component:$}),r.a.createElement(l.a,{path:"/description/:id",component:re})))},null));i.a.render(Ee,document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");oe?(!function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ie(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):ie(t,e)})}}()}},[[153,1,2]]]);
//# sourceMappingURL=main.e55f5c0a.chunk.js.map