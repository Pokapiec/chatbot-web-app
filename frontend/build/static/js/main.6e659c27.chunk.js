(this.webpackJsonpchatbot=this.webpackJsonpchatbot||[]).push([[0],{21:function(e,t,a){e.exports=a(47)},26:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),l=a.n(o),c=(a(26),a(2)),s=a(10),i=a(3),u=a.n(i),g=a(4),m=Object(n.createContext)(null),d=Object(n.createContext)(null);function h(e){var t=e.msg,a=e.side;return r.a.createElement("div",{className:"chat-message "},r.a.createElement("div",{className:"flex items-end ".concat("right"===a?"justify-end":"")},r.a.createElement("div",{className:"flex flex-col space-y-2 text-xs max-w-xs mx-2 ".concat("right"===a?"order-1 items-end":"order-2 items-start"," ")},r.a.createElement("div",null,r.a.createElement("span",{className:"px-4 py-2 rounded-lg inline-block rounded-".concat("right"===a?"br":"bl","-none ").concat("right"===a?"bg-gray-300 text-gray-600":"bg-blue-600 text-white","  ")},t))),r.a.createElement("img",{src:"right"===a?"https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144":"https://cdn.technologyadvice.com/wp-content/uploads/2018/02/friendly-chatbot.jpg",alt:"My profile",className:"w-6 h-6 rounded-full ".concat("right"===a?"order-2":"order-1")})))}function b(e){var t=e.onHideClick,a=Object(n.useState)(!1),o=Object(c.a)(a,2),l=o[0],s=o[1];return r.a.createElement("div",{className:"transition duration-300 ease-in-out flex justify-between border-b border-gray-200 dark:border-gray-900 py-3 px-3"},r.a.createElement("div",{className:"m-0 flex items-center space-x-4"},r.a.createElement("img",{src:"https://cdn.technologyadvice.com/wp-content/uploads/2018/02/friendly-chatbot.jpg",alt:"",className:"w-10 h-10 rounded-full"}),r.a.createElement("div",{className:"flex flex-col leading-tight"},r.a.createElement("div",{className:"text-lg mt-1 flex items-center"},r.a.createElement("span",{className:"text-gray-700 dark:text-gray-200 mr-3"},"Chatbot"),r.a.createElement("span",{className:"text-green-500"},r.a.createElement("svg",{width:"10",height:"10"},r.a.createElement("circle",{cx:"5",cy:"5",r:"5",fill:"currentColor"})))))),r.a.createElement("div",{className:"flex items-center space-x-2"},r.a.createElement("button",{type:"button",className:"classic-btn text-gray-500 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-green-500 h-10 w-10",onClick:function(){for(var e=document.querySelector(".chat-room"),t=document.querySelector("#messages-place"),a=0,n=["w-10/12","md:w-96","bottom-2","right-2","bottom-0","right-0","w-full","rounded-lg","h-screen"];a<n.length;a++){var r=n[a];e.classList.toggle(r)}for(var o=0,c=["h-72"];o<c.length;o++){var i=c[o];t.classList.toggle(i)}s(!l)}},l?r.a.createElement("svg",{className:"h-6 w-6 fill-stroke",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},"  ",r.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),"  ",r.a.createElement("polyline",{points:"5 9 9 9 9 5"}),"  ",r.a.createElement("line",{x1:"3",y1:"3",x2:"9",y2:"9"}),"  ",r.a.createElement("polyline",{points:"5 15 9 15 9 19"}),"  ",r.a.createElement("line",{x1:"3",y1:"21",x2:"9",y2:"15"}),"  ",r.a.createElement("polyline",{points:"19 9 15 9 15 5"}),"  ",r.a.createElement("line",{x1:"15",y1:"9",x2:"21",y2:"3"}),"  ",r.a.createElement("polyline",{points:"19 15 15 15 15 19"}),"  ",r.a.createElement("line",{x1:"15",y1:"15",x2:"21",y2:"21"})):r.a.createElement("svg",{className:"h-6 w-6 fill-stroke",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},"  ",r.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),"  ",r.a.createElement("polyline",{points:"16 4 20 4 20 8"}),"  ",r.a.createElement("line",{x1:"14",y1:"10",x2:"20",y2:"4"}),"  ",r.a.createElement("polyline",{points:"8 20 4 20 4 16"}),"  ",r.a.createElement("line",{x1:"4",y1:"20",x2:"10",y2:"14"}))),r.a.createElement("button",{type:"button",className:"classic-btn text-gray-500 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-green-500 h-10 w-10",onClick:t},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},r.a.createElement("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})))))}function f(e){var t=e.userMessage,a=e.updateInput,n=e.onEnterClick;e.addMessage;return r.a.createElement("div",{className:"border-t border-gray-200 dark:border-gray-900 px-4 pt-4 mb-5 sm:mb-3 text-2lg"},r.a.createElement("div",{className:"relative flex"},r.a.createElement("span",{className:"absolute inset-y-0 flex items-center"},r.a.createElement("button",{type:"button",className:"classic-btn text-gray-500 dark:text-gray-200 dark:hover:text-gray-800 hover:bg-gray-300 h-12 w-12 "},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"h-6 w-6 "},r.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"})))),r.a.createElement("input",{type:"text",placeholder:"Write Something",className:"w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 dark:text-gray-200 placeholder-gray-600 dark:placeholder-gray-300 pl-12 bg-gray-200 dark:bg-gray-600 rounded-full py-3",value:t,onChange:a,onKeyDown:n}),r.a.createElement("div",{className:"absolute right-0 items-center inset-y-0 hidden sm:flex"})))}var p=a(9),v=a.n(p);function x(e){var t=e.onHideClick,a=e.casualQuery,o=Object(n.useContext)(m).language,l=Object(n.useContext)(d).textId,i=Object(n.useState)([]),p=Object(c.a)(i,2),x=p[0],y=p[1];Object(n.useEffect)((function(){y("EN"===o?[[1,"Hey i'm your personal Chatbot, how can i help?","left"]].reverse():[[1,"Hej! Jestem twoim personalnym Chatbotem, jak mog\u0119 pom\xf3c?","left"]].reverse())}),[o]);var w=Object(n.useState)(""),k=Object(c.a)(w,2),E=k[0],N=k[1],C=function(){var e=Object(g.a)(u.a.mark((function e(){var t,n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://127.0.0.1:5000/response?message=".concat(E,"&lang=").concat(o),t+=a||"&textid=".concat(l),console.log(t),e.next=5,v.a.get(t);case 5:if(n=e.sent,r=n.data,console.log(r),"failed"!==(c=r.answer)){e.next=11;break}return e.abrupt("return",!1);case 11:return e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(g.a)(u.a.mark((function e(t){var a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.map((function(e){return e[0]})),e.next=3,C();case 3:(n=e.sent)&&(r=[[Math.max.apply(Math,Object(s.a)(a))+1,n,"left"]].concat(t),y(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(g.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=x.map((function(e){return e[0]})),a=[[Math.max.apply(Math,Object(s.a)(t))+1,E,"right"]].concat(x),y(a),N(""),j(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"chat-room m-0 w-10/12 md:w-96 border-2 rounded-lg fixed bottom-2 right-2 bg-white dark:bg-gray-700 dark:text-gray-100 dark:border-gray-800 transform scale-0 transition duration-300 ease-in-out shadow-lg z-40"},r.a.createElement("div",{id:"messages",className:"flex-1 p:2 justify-between flex flex-col h-full"},r.a.createElement(b,{onHideClick:t}),r.a.createElement("div",{id:"messages-place",className:"h-72 flex content-end flex-col-reverse space-y-4 space-y-reverse p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"},x.map((function(e){return r.a.createElement(h,{key:e[0],msg:e[1],side:e[2]})}))),r.a.createElement(f,{userMessage:E,updateInput:function(e){N(e.target.value)},onEnterClick:function(e){"Enter"===e.key&&(e.preventDefault(),L())},addMessage:L})))}function y(e){var t=e.onHideClick;return r.a.createElement("button",{type:"button",className:"chat-toggler classic-btn bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-200 hover:bg-green-200 dark:hover:bg-green-500 h-12 w-12 fixed bottom-10 right-10 z-1",onClick:t},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"})))}function w(){var e=Object(n.useContext)(m),t=e.language,a=e.setlanguage,o=Object(n.useContext)(d).settextId,l=Object(n.useState)(!1),s=Object(c.a)(l,2),i=s[0],h=s[1],b=Object(n.useState)([]),f=Object(c.a)(b,2),p=f[0],x=f[1],y=function(){var e=document.querySelector("html");e.classList.toggle("dark"),e.classList.contains("dark")?(h(!0),localStorage.setItem("dark",!0)):(h(!1),localStorage.setItem("dark",!1))};return Object(n.useEffect)((function(){var e=localStorage.getItem("dark"),t=localStorage.getItem("lang");console.log(t,e),console.log(typeof e),"PL"===t&&function(){var e=document.querySelector("#lang");console.log(e),e.textContent="EN",a("PL")}(),"true"===e&&y(),function(){var e=Object(g.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("http://127.0.0.1:5000/texts").then((function(e){var t=e.data;x(t.texts),console.log(t)})).catch((function(e){return console.log("Hey")}));case 2:console.log(p);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),r.a.createElement("div",{className:"content-site flex flex-col flex-wrap content-center dark:bg-gray-800 dark:text-gray-200 relative min-h-screen"},r.a.createElement("button",{type:"button",className:"classic-btn  dark:bg-gray-800 text-gray-500 dark:text-gray-200 hover:bg-green-200 dark:hover:bg-green-500 h-12 w-12 z-1 transition duration-300 ease-in-out absolute top-5 right-5",onClick:y},i?r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})):r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}))),r.a.createElement("button",{id:"lang",type:"button",className:"classic-btn  dark:bg-gray-800 text-gray-500 dark:text-gray-200 hover:bg-green-200 dark:hover:bg-green-500 h-12 w-12 z-1 transition duration-300 ease-in-out absolute top-5 right-20",onClick:function(e){"PL"===e.currentTarget.textContent?(e.currentTarget.textContent="EN",a("PL"),localStorage.setItem("lang","PL")):(e.currentTarget.textContent="PL",a("EN"),localStorage.setItem("lang","EN"))}},"PL"),r.a.createElement("div",{className:"text-center text-2xl m-5 mb-16 col-span-3 mt-24 md:mt-10"},"EN"===t?"Warsaw institute of technology information":"Informacje o Politechnice Warszawskiej"),p.length>0?p.map((function(e){return r.a.createElement("div",{className:"content-container max-w-6xl border-2",onClick:function(t){o(e.id)},key:e.id},r.a.createElement("h2",{className:"text-left font-bold border-b-2 border-gray-300 pb-4"},"EN"===t?e.title_en:e.title_pl),r.a.createElement("div",{className:"QA-text mt-5"},"EN"===t?e.text_en:e.text_pl))})):r.a.createElement("div",{className:"content-container max-w-6xl border-2 w-9/12",key:"1"},r.a.createElement("h2",{className:"text-left font-bold border-b-2 border-gray-300 pb-4"},"EN"===t?"There has been a problem":"Wyst\u0105pi\u0142 problem"),r.a.createElement("div",{className:"QA-text mt-5"},"EN"===t?"No article avilable right now":"Nie znaleziono \u017cadnego artyku\u0142u")))}function k(e){var t=e.onHideClick;return r.a.createElement("button",{type:"button",className:"sidebar-toggler classic-btn bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-200 hover:bg-green-200 dark:hover:bg-green-500 h-12 w-12 fixed top-5 left-5 transition duration-300 ease-in-out ",onClick:t},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h7"})))}function E(e){var t=e.onHideClick,a=e.choseMode,o=Object(n.useContext)(m).language;return r.a.createElement("div",{className:"sidebar bg-gray-200 dark:bg-gray-700 h-full w-56 fixed flex flex-col inset-y-0 left-0 transform -translate-x-full transition duration-300 ease-in-out z-40"},r.a.createElement("button",{type:"button",className:" classic-btn bg-gray-300 dark:bg-gray-600 dark:hover:bg-green-600 dark:text-gray-300 text-gray-500 hover:bg-green-100 h-12 w-12 ml-5 mt-5 mb-10",onClick:t},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},r.a.createElement("path",{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"}))),r.a.createElement("div",{className:"sidebar-elem",onClick:function(){a("&casual=true")}},"EN"===o?"Casual conversation":"Smalltalk z chatbotem"),r.a.createElement("div",{className:"sidebar-elem",onClick:function(){a("")}},"EN"===o?"Politechnics Chatbot":"Odpowiadanie na pytania"))}a(46);var N=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)("EN"),s=Object(c.a)(l,2),i=s[0],u=s[1],g=Object(n.useState)(1),h=Object(c.a)(g,2),b=h[0],f=h[1],p=function(){document.querySelector(".sidebar").classList.contains("-translate-x-full")||v();var e=document.querySelector(".chat-room"),t=document.querySelector(".chat-toggler"),a=document.querySelector(".content-site");e.classList.toggle("scale-100"),e.classList.toggle("scale-0"),t.classList.toggle("bottom-10"),t.classList.toggle("-bottom-10"),t.classList.toggle("right-10"),t.classList.toggle("-right-10"),a.classList.toggle("filter"),a.classList.toggle("blur-sm")},v=function(){document.querySelector(".chat-room").classList.contains("scale-100")&&p(),document.querySelector(".sidebar").classList.toggle("-translate-x-full")};return r.a.createElement("div",{className:"m-0"},r.a.createElement(d.Provider,{value:{textId:b,settextId:f}},r.a.createElement(m.Provider,{value:{language:i,setlanguage:u}},r.a.createElement(w,null),r.a.createElement(E,{choseMode:function(e){o(e),v(),p()},onHideClick:v}),r.a.createElement(x,{casualQuery:a,onHideClick:p})),r.a.createElement(k,{onHideClick:v}),r.a.createElement(y,{onHideClick:p})))},C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),o(e),l(e)}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");C?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):j(t,e)}))}}(),L()}},[[21,1,2]]]);
//# sourceMappingURL=main.6e659c27.chunk.js.map