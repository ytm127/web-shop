(this["webpackJsonpweb-shop"]=this["webpackJsonpweb-shop"]||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(50),i=a.n(l),o=(a(76),a(28)),c=a.n(o),s=a(51),u=a(15),d=a(29),m=a.n(d),v=r.a.createContext(),E=v.Provider,f=(v.Consumer,v),p=a(117);var g=a(110),h=a(111),y=a(114),b=a(13);function w(e){var t,a=e.handleMenuClick,l=e.sideBarIsOut,i=Object(n.useContext)(f),o=null===i||void 0===i||null===(t=i.assets)||void 0===t?void 0:t[1].fields.Attachments[0].url;return r.a.createElement(y.a,{pad:"medium",background:"white"},r.a.createElement(y.a,null,r.a.createElement("div",{style:{display:"flex"}},l?r.a.createElement(g.a,{color:"plain",size:"large",style:{marginTop:27},onClick:a}):r.a.createElement(h.a,{color:"plain",size:"large",style:{marginTop:27},onClick:a}),r.a.createElement(b.b,{to:"/"},r.a.createElement("div",{style:{fontSize:"large",fontWeight:"bolder",marginTop:13,width:"87%",textAlign:"center"}},r.a.createElement(p.a,{src:o,style:{width:"inherit"}}))))))}var A=function(e){var t=e.setSideBarIsOut,a=function(){return t(!1)};return r.a.createElement(y.a,{pad:"small"},r.a.createElement("div",null,r.a.createElement(b.b,{to:"/",style:{display:"block"}}," ",r.a.createElement("div",{onClick:a,style:{color:"black",margin:10}},"Home")),r.a.createElement(b.b,{to:"/menu",style:{display:"block"}}," ",r.a.createElement("div",{onClick:a,style:{color:"black",margin:10}},"Menu")),r.a.createElement(b.b,{to:"/how-it-works",style:{display:"block"}}," ",r.a.createElement("div",{onClick:a,style:{color:"black",margin:10}},"How it works"))))},T=a(112),O=a(113);function k(){return r.a.createElement("div",{style:{background:"#276955",textAlign:"center",padding:10}},r.a.createElement("div",{style:{padding:10,color:"lightgrey"}},"Contact"),r.a.createElement("div",{style:{padding:10,color:"lightgrey"}},"FAQs"),r.a.createElement("div",{style:{padding:10,color:"lightgrey"}},"About"),r.a.createElement("div",{style:{margin:10}},r.a.createElement("span",{style:{margin:10}},r.a.createElement(T.a,null)),r.a.createElement("span",{style:{margin:10}},r.a.createElement(O.a,null)),r.a.createElement("span",{style:{margin:10}},r.a.createElement(T.a,null))))}var _=a(6),C=a(116),S=function(e){var t=e.img,a=e.imgPosition,n=void 0===a?"left":a,l=e.headline,i=e.body;return r.a.createElement(y.a,{pad:"large"},r.a.createElement("div",null,"left"===n?r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(p.a,{src:t,style:{width:"40vw",margin:"auto"}}),r.a.createElement("div",{style:{marginLeft:20,textAlign:"center"}},r.a.createElement("h3",null,l),r.a.createElement("p",{style:{color:"grey"}},i))):r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{style:{marginRight:20,textAlign:"center"}},r.a.createElement("h3",null,l),r.a.createElement("p",{style:{color:"grey"}},i)),r.a.createElement(p.a,{src:t,style:{width:"40vw",margin:"auto"}}))))},P=a(66),x=a.n(P),I=a(67),j=a.n(I),B=a(68),R=a.n(B),W=a(69),D=a.n(W),K=function(){var e,t,a,l=r.a.useContext(f),i=r.a.useState([]),o=Object(u.a)(i,2),c=o[0],s=o[1],d=r.a.useState(null),m=Object(u.a)(d,2),v=m[0];return function(e){var t=e.setCurrentImage,a=e.carouselImages;Object(n.useEffect)((function(){if(a){var e=0;if(a[e]){t(a[e]);var n=setInterval((function(){a[e]?t(a[e]):e=-1,e+=1}),2e3);setTimeout((function(){clearInterval(n)}),6e4)}}}),[a])}({setCurrentImage:m[1],carouselImages:c}),function(e,t){Object(n.useEffect)((function(){for(var a=[],n=0;n<(null===e||void 0===e?void 0:e.length);n++)a.push(r.a.createElement(p.a,{fit:"cover",src:"".concat(e[n].url)}));t(a)}),[e])}(null===l||void 0===l||null===(e=l.assets)||void 0===e||null===(t=e[0])||void 0===t||null===(a=t.fields)||void 0===a?void 0:a.Attachments,s),r.a.createElement(y.a,{pad:"medium"},r.a.createElement(y.a,{height:"medium",width:"medium",overflow:"hidden",style:{margin:"auto"}},v),r.a.createElement("br",null),r.a.createElement(b.b,{to:"/menu"},r.a.createElement(C.a,{color:"accent-4",label:"Order Now",style:{width:"-webkit-fill-available"}})),r.a.createElement(D.a,null,r.a.createElement(S,{img:x.a,headline:"Fast and Free Shipping",body:"Just provide your D.C. address and we'll take care of the rest!"}),r.a.createElement(S,{img:R.a,headline:"Premium Quality",body:"We only carry the BEST quality products to ensure complete satisfaction.",imgPosition:"right"}),r.a.createElement(S,{img:j.a,headline:"Top of Class Customer Service",body:"We guarantee an awesome experience with responsive customer service."})))},N=function(){return r.a.createElement(K,null)},z=a(118),H=a(115),L=function(){var e,t,a,l,i=Object(n.useContext)(f),o=function(e){return"I"===e?"#ee6055":"S"===e?"#60d394":"H"===e?"#8093f1":void 0},c=function(e){var t,a,n,l,i,c=null===(t=e.fields)||void 0===t?void 0:t.Name,s=null===(a=e.fields)||void 0===a?void 0:a.Type,u=null===(n=e.fields)||void 0===n?void 0:n.Notes,d=null===(l=e.fields)||void 0===l||null===(i=l.Attachments)||void 0===i?void 0:i[0].url;return r.a.createElement(y.a,{pad:"large",fill:!0,style:{height:400,marginBottom:50}},r.a.createElement(p.a,{src:d,style:{height:360,borderRadius:"50%",border:"".concat(o(s)," thick solid")}}),r.a.createElement("div",{style:{textAlign:"center",fontWeight:"bold",fontSize:20,marginTop:10}},c," (",s,")"),r.a.createElement("div",{style:{textAlign:"center"}},u))};return r.a.createElement(z.a,{style:{marginTop:30}},r.a.createElement(H.a,{title:"Flower"},r.a.createElement(z.a,{style:{marginTop:20}},r.a.createElement(H.a,{title:"Designer"},r.a.createElement("div",null,null===i||void 0===i||null===(e=i.products)||void 0===e?void 0:e.filter((function(e){return"D"===e.fields.Tier})).map((function(e){return c(e)})))),r.a.createElement(H.a,{title:"Tier 1"},r.a.createElement("div",null,null===i||void 0===i||null===(t=i.products)||void 0===t?void 0:t.filter((function(e){return"T1"===e.fields.Tier})).map((function(e){return c(e)})))),r.a.createElement(H.a,{title:"Tier 2"},r.a.createElement("div",null,null===i||void 0===i||null===(a=i.products)||void 0===a?void 0:a.filter((function(e){return"T2"===e.fields.Tier})).map((function(e){return c(e)})))),r.a.createElement(H.a,{title:"Weekly Deals"},r.a.createElement("div",null,null===i||void 0===i||null===(l=i.products)||void 0===l?void 0:l.filter((function(e){return"WD"===e.fields.Tier})).map((function(e){return c(e)})))))),r.a.createElement(H.a,{title:"Edible"},r.a.createElement("div",{style:{textAlign:"center"}})),r.a.createElement(H.a,{title:"Misc."}))},U=function(){return"How It works"},V=function(){return"Oops, we couldn't find the page you are looking for..."};var M=function(){var e=function(){var e=Object(n.useState)({width:void 0,height:void 0}),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a}(),t=Object(n.useState)(),a=Object(u.a)(t,2),l=a[0],i=a[1];Object(n.useEffect)((function(){var t=function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",m.a.get("https://api.airtable.com/v0/appcVmzV8dH0kusPN/Products?maxRecords=50&view=All%20",{headers:{Authorization:"Bearer ".concat(null===(t=Object({NODE_ENV:"production",PUBLIC_URL:"/web-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_AIRTABLE_API_KEY:"key69wK3b34QNruUO"}))||void 0===t?void 0:t.REACT_APP_AIRTABLE_API_KEY)}}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Promise.all([function(){var e;return m.a.get("https://api.airtable.com/v0/appcVmzV8dH0kusPN/Assets?maxRecords=3&view=Grid%20view",{headers:{Authorization:"Bearer ".concat(null===(e=Object({NODE_ENV:"production",PUBLIC_URL:"/web-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_AIRTABLE_API_KEY:"key69wK3b34QNruUO"}))||void 0===e?void 0:e.REACT_APP_AIRTABLE_API_KEY)}})}(),t()]).then((function(t){var a=t[0].data.records,n=t[1].data.records;console.log(n),i({assets:a,products:n,size:e})}))}),[]);var o=Object(n.useState)(!1),d=Object(u.a)(o,2),v=d[0],f=d[1];return r.a.createElement(E,{value:l},r.a.createElement("div",{className:"App"},r.a.createElement(w,{handleMenuClick:function(){return f(!v)},sideBarIsOut:v}),v&&r.a.createElement(A,{setSideBarIsOut:f}),r.a.createElement(_.c,null,r.a.createElement(_.a,{path:"/",component:N,exact:!0}),r.a.createElement(_.a,{path:"/menu",component:L}),r.a.createElement(_.a,{path:"/how-it-works",component:U}),r.a.createElement(_.a,{component:V})),r.a.createElement(k,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b.a,null,r.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},66:function(e,t,a){e.exports=a.p+"static/media/current_location.8d47d155.svg"},67:function(e,t,a){e.exports=a.p+"static/media/chatting.b6bbd4e7.svg"},68:function(e,t,a){e.exports=a.p+"static/media/check.92e483a7.svg"},71:function(e,t,a){e.exports=a(104)},76:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.3c4aaf11.chunk.js.map