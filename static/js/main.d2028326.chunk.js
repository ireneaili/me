(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(68),o=a.n(r),s=a(69),i=a(21),l=a(11),u=a(12),m=a(15),p=a(13),h=a(14),b=a(31),d=(a(77),a(78),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{class:"grid-container"},c.a.createElement("div",{class:"square-box"},c.a.createElement("p",{className:"square-title"},"IRENE")),c.a.createElement("div",{class:"square-box"},c.a.createElement("p",{className:"square-title"},"RESUME")),c.a.createElement("div",{class:"square-box"},c.a.createElement("p",{className:"square-title"},"PROJECTS")),c.a.createElement("div",{class:"square-box"},c.a.createElement("p",{className:"square-title"},"MORE"))))}}]),t}(n.Component)),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={entry:!0},a.switchOverlay=a.switchOverlay.bind(Object(b.a)(Object(b.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"switchOverlay",value:function(){this.setState({entry:!1})}},{key:"render",value:function(){var e,t=this;return e=c.a.createElement("div",{class:"svg-wrapper"},c.a.createElement("svg",{height:"60",width:"320",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("rect",{class:"shape",height:"60",width:"320"})),c.a.createElement("button",{type:"button",className:"text",onClick:function(){return t.switchOverlay()}},"IRENE AI LI")),this.state.entry?e:c.a.createElement(d,null)}}]),t}(n.Component),v=a(39);v.initializeApp({apiKey:"AIzaSyAT7Cx_ingUfmOwcvhNHW5DmDy5G4Yv3VI",authDomain:"my-website-6a297.firebaseapp.com",databaseURL:"https://my-website-6a297.firebaseio.com",projectId:"my-website-6a297",storageBucket:"my-website-6a297.appspot.com",messagingSenderId:"156913653189"});v.database().ref();var w=v.storage().ref().child("my-website.json"),f=function(e){function t(e){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).call(this,e))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){w.getDownloadURL().then(function(e){var t=new XMLHttpRequest;t.responseType="json",t.onload=function(e){console.log(t.response)},t.open("GET",e),t.send()}).catch(function(e){e.code})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Internships"))}}]),t}(c.a.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Projects"))}}]),t}(c.a.Component),j=function(){return c.a.createElement("h1",null,"Not found")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=c.a.createElement(s.a,null,c.a.createElement("div",null,c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:E}),c.a.createElement(i.a,{path:"/internships",component:f}),c.a.createElement(i.a,{path:"/projects",component:O}),c.a.createElement(i.a,{component:j}))));o.a.render(y,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},72:function(e,t,a){e.exports=a(140)},77:function(e,t,a){},78:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.d2028326.chunk.js.map