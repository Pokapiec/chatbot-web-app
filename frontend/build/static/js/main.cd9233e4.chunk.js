(this.webpackJsonpchatbot=this.webpackJsonpchatbot||[]).push([[0],{32:function(e,t,a){},39:function(e,t,a){e.exports=a(77)},52:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(34),o=a.n(r),c=(a(44),a(52),a(3)),s=a(18),i=a(8),m=a.n(i),u=a(13),d=Object(l.createContext)(null),g=Object(l.createContext)(null),h=Object(l.createContext)(null);Object(l.createContext)(null);function b(e){var t=e.msg,a=e.side;return n.a.createElement("div",{className:"chat-message"},n.a.createElement("div",{className:"flex items-end ".concat("right"===a?"justify-end":"")},n.a.createElement("div",{className:"flex flex-col space-y-2 text-xs max-w-xs mx-2 ".concat("right"===a?"order-1 items-end":"order-2 items-start"," ")},n.a.createElement("div",null,n.a.createElement("span",{className:"px-4 py-2 rounded-lg inline-block rounded-".concat("right"===a?"br":"bl","-none ").concat("right"===a?"bg-gray-300 text-gray-600":"bg-blue-600 text-white")},t))),n.a.createElement("img",{src:"right"===a?"https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144":"https://cdn.technologyadvice.com/wp-content/uploads/2018/02/friendly-chatbot.jpg",alt:"My profile",className:"w-6 h-6 rounded-full ".concat("right"===a?"order-2":"order-1")})))}function E(e){var t=e.onHideClick,a=e.modeEn,r=e.modePl,o=Object(l.useState)(!1),s=Object(c.a)(o,2),i=s[0],m=s[1],u=Object(l.useContext)(d).language,g=Object(l.useContext)(h),b=g.casualQuery,E=g.setcasualQuery;return n.a.createElement("div",{className:"transition duration-300 ease-in-out flex justify-between border-b border-gray-200 dark:border-gray-900 py-3 px-3"},n.a.createElement("div",{className:"m-0 flex items-center space-x-4 "},n.a.createElement("img",{src:"https://cdn.technologyadvice.com/wp-content/uploads/2018/02/friendly-chatbot.jpg",alt:"",className:"w-10 h-10 rounded-full hidden md:block"}),n.a.createElement("div",{className:"flex flex-col leading-tight"},n.a.createElement("div",{className:"text-lg mt-1 flex items-center"},n.a.createElement("span",{className:"text-gray-700 dark:text-gray-200 mr-3"},"Chatbot",n.a.createElement("div",{className:"text-sm text-gray-400"},"EN"===u?a:r))))),n.a.createElement("div",{className:"flex items-center space-x-2"},n.a.createElement("button",{type:"button",className:"group classic-btn text-gray-500 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-green-500 h-10 w-10",onClick:function(){E(b?"":"&casual=true")}},n.a.createElement("span",{className:"p-1 rounded border border-gray-200 bg-gray-100 dark:bg-gray-900 dark:text-gray-100 shadow-lg ml-4 text-sm w-28 absolute top-16 right-24 transform scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out"},"EN"===u?"Change mode":"Zmie\u0144 tryb"),n.a.createElement("svg",{className:"h-6 w-6",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},"  ",n.a.createElement("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),"  ",n.a.createElement("circle",{cx:"9",cy:"7",r:"4"}),"  ",n.a.createElement("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),"  ",n.a.createElement("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}))),n.a.createElement("button",{type:"button",className:"classic-btn text-gray-500 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-green-500 h-10 w-10",onClick:function(){for(var e=document.querySelector(".chat-room"),t=document.querySelector("#messages-place"),a=0,l=["w-10/12","md:w-96","bottom-2","right-2","bottom-0","right-0","w-full","rounded-lg","h-screen"];a<l.length;a++){var n=l[a];e.classList.toggle(n)}t.classList.contains("h-72")?t.classList.replace("h-72","h-full"):t.classList.replace("h-full","h-72"),m(!i)}},i?n.a.createElement("svg",{className:"h-6 w-6 fill-stroke",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},"  ",n.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),"  ",n.a.createElement("polyline",{points:"5 9 9 9 9 5"}),"  ",n.a.createElement("line",{x1:"3",y1:"3",x2:"9",y2:"9"}),"  ",n.a.createElement("polyline",{points:"5 15 9 15 9 19"}),"  ",n.a.createElement("line",{x1:"3",y1:"21",x2:"9",y2:"15"}),"  ",n.a.createElement("polyline",{points:"19 9 15 9 15 5"}),"  ",n.a.createElement("line",{x1:"15",y1:"9",x2:"21",y2:"3"}),"  ",n.a.createElement("polyline",{points:"19 15 15 15 15 19"}),"  ",n.a.createElement("line",{x1:"15",y1:"15",x2:"21",y2:"21"})):n.a.createElement("svg",{className:"h-6 w-6 fill-stroke",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},"  ",n.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),"  ",n.a.createElement("polyline",{points:"16 4 20 4 20 8"}),"  ",n.a.createElement("line",{x1:"14",y1:"10",x2:"20",y2:"4"}),"  ",n.a.createElement("polyline",{points:"8 20 4 20 4 16"}),"  ",n.a.createElement("line",{x1:"4",y1:"20",x2:"10",y2:"14"}))),n.a.createElement("button",{type:"button",className:"classic-btn text-gray-500 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-green-500 h-10 w-10",onClick:t},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},n.a.createElement("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})))))}function p(e){var t=e.userMessage,a=e.updateInput,r=e.onEnterClick,o=e.addMessage,c=e.setMessages,s=Object(l.useContext)(d).language;return n.a.createElement("div",{className:"border-t border-gray-200 dark:border-gray-900 px-4 pt-4 mb-5 sm:mb-3 text-2lg"},n.a.createElement("div",{className:"relative flex"},n.a.createElement("span",{className:"absolute inset-y-0 flex items-center"},n.a.createElement("button",{type:"button",className:"classic-btn text-gray-500 dark:text-gray-200 dark:hover:text-gray-800 hover:bg-gray-300  dark:hover:bg-gray-400 h-12 w-12 ",onClick:function(){c("EN"===s?[[1,"Hey i'm your personal Chatbot, how can i help?","left"]].reverse():[[1,"Hej! Jestem twoim personalnym Chatbotem, jak mog\u0119 pom\xf3c?","left"]].reverse())}},n.a.createElement("svg",{className:"h-6 w-6 text-gray-500",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},"  ",n.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),"  ",n.a.createElement("line",{x1:"4",y1:"7",x2:"20",y2:"7"}),"  ",n.a.createElement("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),"  ",n.a.createElement("line",{x1:"14",y1:"11",x2:"14",y2:"17"}),"  ",n.a.createElement("path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"}),"  ",n.a.createElement("path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"})))),n.a.createElement("input",{type:"text",placeholder:"EN"===s?"Write Something":"Napisz co\u015b",className:"w-full border-none focus:outline-none focus:placeholder-gray-400 text-gray-600 dark:text-gray-200 placeholder-gray-600 dark:placeholder-gray-300 pl-12 bg-gray-200 dark:bg-gray-600 rounded-full py-3 ",value:t,onChange:a,onKeyDown:r}),n.a.createElement("div",{className:"absolute right-0 items-center inset-y-0 hidden sm:flex"},n.a.createElement("button",{onClick:o,type:"button",className:"classic-btn text-white bg-blue-500 hover:bg-blue-400 h-12 w-12"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"h-6 w-6 transform rotate-90"},n.a.createElement("path",{d:"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"}))))))}var f=a(14),y=a.n(f);function x(e){var t=e.onHideClick,a=e.casualQuery,r=Object(l.useContext)(d).language,o=Object(l.useContext)(g).textId,i=Object(l.useState)([]),h=Object(c.a)(i,2),f=h[0],x=h[1];Object(l.useEffect)((function(){x("EN"===r?[[1,"Hey i'm your personal Chatbot, how can i help?","left"]].reverse():[[1,"Hej! Jestem twoim personalnym Chatbotem, jak mog\u0119 pom\xf3c?","left"]].reverse())}),[r,a]);var v=Object(l.useState)(""),k=Object(c.a)(v,2),w=k[0],N=k[1],C=function(){var e=Object(u.a)(m.a.mark((function e(){var t,l,n,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/resp/get?message=".concat(w,"&lang=").concat(r),t+=a||"&textid=".concat(o),e.next=4,y.a.get(t);case 4:if(l=e.sent,n=l.data,"failed"!==(c=n.answer)){e.next=9;break}return e.abrupt("return",!1);case 9:return e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(u.a)(m.a.mark((function e(t){var a,l,r,o,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.map((function(e){return e[0]})),l=t,r=[[Math.max.apply(Math,Object(s.a)(a))+1,n.a.createElement("div",{className:"dot-falling mx-1 my-1"}),"left"]].concat(t),x(r),e.next=6,C();case 6:(o=e.sent)?(c=[[Math.max.apply(Math,Object(s.a)(a))+1,o,"left"]].concat(t),x(c)):x(l);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w){e.next=2;break}return e.abrupt("return");case 2:t=f.map((function(e){return e[0]})),a=[[Math.max.apply(Math,Object(s.a)(t))+1,w,"right"]].concat(f),x(a),N(""),j(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"chat-room m-0 w-10/12 md:w-128 border-2 rounded-lg fixed bottom-2 right-2 bg-white dark:bg-gray-700 dark:text-gray-100 dark:border-gray-800 transform scale-0 transition-all duration-300 ease-in-out shadow-lg z-40"},n.a.createElement("div",{id:"messages",className:"flex-1 p:2 justify-between flex flex-col h-full"},a?n.a.createElement(E,{onHideClick:t,modeEn:"Mode: casual talk",modePl:"Tryb: swobodna rozmowa"}):n.a.createElement(E,{onHideClick:t,modeEn:"Mode: q&a, Text: ".concat(o),modePl:"Tryb: q&a, Tekst: ".concat(o)}),n.a.createElement("div",{id:"messages-place",className:"h-72 flex content-end flex-col-reverse space-y-4 space-y-reverse p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"},f.map((function(e){return n.a.createElement(b,{key:e[0],msg:e[1],side:e[2]})}))),n.a.createElement(p,{userMessage:w,updateInput:function(e){N(e.target.value)},onEnterClick:function(e){"Enter"===e.key&&(e.preventDefault(),L())},addMessage:L,setMessages:x})))}function v(e){var t=e.onHideClick;return n.a.createElement("div",{className:"select-none"},n.a.createElement("button",{type:"button",className:"group chat-toggler classic-btn bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-200 hover:bg-green-200 dark:hover:bg-green-500 h-12 w-12 fixed bottom-10 right-10 z-1 ",onClick:t},n.a.createElement("span",{className:"p-1 rounded border border-gray-200 bg-gray-100 dark:bg-gray-900 dark:text-gray-100 shadow-lg ml-4 text-sm w-20 absolute bottom-14 transform scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out"},"Chat a bit"),n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 group-hover:animate-wiggle",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"}))))}var k=a(35),w=(a(32),function(e){var t=e.texts,a=e.language,l=e.setAndUnfoldText;return n.a.createElement("div",{className:"flex flex-col flex-wrap content-center w-full"},t.length>0?t.map((function(e,t){return n.a.createElement("div",{className:"slider relative -left-full group content-container w-11/12 md:w-10/12 lg:max-w-5xl md:max-w-6xl border-2 transform hover:-translate-y-1",onClick:function(t){l(e,t)},key:e.id},n.a.createElement("h2",{className:"text-left font-bold border-b-2 border-gray-300 pb-6 text-xl lg:text-xl lg:pb-10"},t+1,". ","EN"===a?e.title_en:e.title_pl),n.a.createElement("div",{className:"QA-text mt-8 text-left overflow-hidden filter transition-height duration-300 ease-in-out h-10"},"EN"===a?e.text_en:e.text_pl),n.a.createElement("div",{className:"transition-all duration-300 ease-in-out bg-gradient-to-t from-white group-hover:from-gray-100 dark:from-gray-800 dark:group-hover:from-gray-700 h-10 w-full absolute bottom-10 left-0"}))})):n.a.createElement("div",{className:"content-container max-w-6xl border-2 w-9/12",key:"1"},n.a.createElement("h2",{className:"text-left font-bold border-b-2 border-gray-300 pb-4"},"EN"===a?"There has been a problem":"Wyst\u0105pi\u0142 problem"),n.a.createElement("div",{className:"QA-text mt-5"},"EN"===a?"No article avilable right now":"Nie znaleziono \u017cadnego artyku\u0142u")))}),N=function(e){var t=e.title,a=e.triggerDarkMode,l=e.changeLanguage,r=e.language,o=e.dark;return n.a.createElement("header",{className:"w-full"},n.a.createElement("button",{type:"button",className:"group classic-btn dark:bg-gray-800 text-gray-500 dark:text-gray-200 hover:bg-green-200 dark:hover:bg-green-500 h-12 w-12 z-1 transition duration-300 ease-in-out absolute top-5 right-5 select-none",onClick:a},n.a.createElement("span",{className:"p-1 rounded border border-gray-200 bg-gray-100 dark:bg-gray-900 dark:text-gray-100 shadow-lg ml-4 text-sm w-28 absolute top-14 right-2 transform scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out"},"Change theme"),n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 animate-shortspin",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},o?n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"}):n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}))),n.a.createElement("button",{id:"lang",type:"button",className:"group classic-btn  dark:bg-gray-800 text-gray-500 dark:text-gray-200 hover:bg-green-200 dark:hover:bg-green-500 h-12 w-12 z-1 transition duration-300 ease-in-out absolute top-5 right-20 select-none",onClick:l},n.a.createElement("span",{className:"p-1 rounded border border-gray-200 bg-gray-100 dark:bg-gray-900 dark:text-gray-100 shadow-lg ml-4 text-sm w-32 absolute top-14 right-2 transform scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out"},"EN"===r?"Change language":"Zmie\u0144 j\u0119zyk"),"PL"===r?"EN":"PL"),n.a.createElement("div",{className:"hero w-full h-64 flex flex-col mt-24 mb-12 font-bold shadow-lg"},n.a.createElement("h1",{className:"text-center text-2xl lg:text-3xl col-span-3 my-auto"},t)))},C=a(9);function j(e){var t=e.choseMode,a=e.onHideClick,r=Object(l.useContext)(d).language;return n.a.createElement("nav",{className:"sidebar bg-gray-200 dark:bg-gray-700 h-full w-56 fixed  inset-y-0 left-0 transform -translate-x-full transition duration-300 ease-out z-40 "},n.a.createElement("button",{type:"button",className:"absolute top-0 left-0 classic-btn bg-gray-300 dark:bg-gray-600 dark:hover:bg-green-600 dark:text-gray-300 text-gray-500 hover:bg-green-200 h-12 w-12 ml-5 mt-5 mb-10",onClick:a},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},n.a.createElement("path",{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"}))),n.a.createElement("div",{className:"mx-auto mt-28 flex flex-col flex-wrap content-center w-10/12"},n.a.createElement(C.b,{to:"/"},n.a.createElement("button",{className:"sidebar-elem",onClick:a},"EN"===r?"Home":"Strona g\u0142\xf3wna")),n.a.createElement(C.b,{to:"/"},n.a.createElement("button",{className:"sidebar-elem",onClick:function(){t("&casual=true")}},"EN"===r?"Casual conversation":"Smalltalk z chatbotem")),n.a.createElement(C.b,{to:"/"},n.a.createElement("button",{className:"sidebar-elem",onClick:function(){t("")}},"EN"===r?"Politechnics Chatbot":"Odpowiadanie na pytania")),n.a.createElement(C.b,{to:"/about",onClick:a},n.a.createElement("button",{className:"sidebar-elem"},"EN"===r?"About":"Detale"))))}var L=a(1),S=a(37),M=function(e){var t=e.dark,a=e.language,r=Object(l.useState)("Model memory dependence on its score"),o=Object(c.a)(r,2),s=o[0],i=o[1];return Object(l.useEffect)((function(){i("EN"===a?"Model memory dependence on its score":"Zale\u017cno\u015b\u0107 pami\u0119ci zajmowanej przez model do wyniku")}),[a]),n.a.createElement("section",{className:"group w-10/12 md:10/12 md:max-w-6xl mx-auto"},n.a.createElement("h2",{className:"text-left font-bold border-b-2 border-gray-300 pb-6 text-xl lg:text-xl lg:pb-10"},"EN"===a?"Research statistics":"Statystyki"),n.a.createElement("h3",{className:"my-4"},"EN"===a?"Model tested on 1000 questions":"Model testowany dla 1000 pyta\u0144"),n.a.createElement("div",{className:"w-full my-10 overflow-x-auto p-0"},n.a.createElement("table",{border:"1",className:"tab mx-auto text-xs p-2 transform scale-0 shadow-lg border"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\xa0"),n.a.createElement("th",null,"avg"),n.a.createElement("th",null,"std"),n.a.createElement("th",null,"min"),n.a.createElement("th",null,"max"),n.a.createElement("th",null,"median"),n.a.createElement("th",null,"memory"),n.a.createElement("th",null,"perf_ratio"),n.a.createElement("th",null,"avg_ans_len"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",null,"abhilash1910/albert-squad-v2"),n.a.createElement("td",null,"0.3187"),n.a.createElement("td",null,"0.2672"),n.a.createElement("td",null,"-0.0979"),n.a.createElement("td",null,"1.0000"),n.a.createElement("td",null,"0.2324"),n.a.createElement("td",null,"190"),n.a.createElement("td",null,"0.1677"),n.a.createElement("td",null,"3.9610")),n.a.createElement("tr",null,n.a.createElement("th",null,"twmkn9/distilroberta-base-squad2"),n.a.createElement("td",null,"0.3939"),n.a.createElement("td",null,"0.2910"),n.a.createElement("td",null,"-0.1065"),n.a.createElement("td",null,"1.0000"),n.a.createElement("td",null,"0.3102"),n.a.createElement("td",null,"313"),n.a.createElement("td",null,"0.1259"),n.a.createElement("td",null,"2.7060")),n.a.createElement("tr",null,n.a.createElement("th",null,"mrm8488/bert-tiny-5-finetuned-squadv2"),n.a.createElement("td",null,"0.4373"),n.a.createElement("td",null,"0.2926"),n.a.createElement("td",null,"-0.1060"),n.a.createElement("td",null,"1.0000"),n.a.createElement("td",null,"0.3873"),n.a.createElement("td",null,"16"),n.a.createElement("td",null,"2.7334"),n.a.createElement("td",null,"3.8140")),n.a.createElement("tr",null,n.a.createElement("th",null,"a-ware/mobilebert-squadv2"),n.a.createElement("td",null,"0.4522"),n.a.createElement("td",null,"0.2865"),n.a.createElement("td",null,"-0.0952"),n.a.createElement("td",null,"1.0000"),n.a.createElement("td",null,"0.4172"),n.a.createElement("td",null,"100"),n.a.createElement("td",null,"0.4522"),n.a.createElement("td",null,"3.5540")),n.a.createElement("tr",null,n.a.createElement("th",null,"mrm8488/bert-small-finetuned-squadv2"),n.a.createElement("td",null,"0.4653"),n.a.createElement("td",null,"0.2954"),n.a.createElement("td",null,"-0.0802"),n.a.createElement("td",null,"1.0000"),n.a.createElement("td",null,"0.4207"),n.a.createElement("td",null,"110"),n.a.createElement("td",null,"0.4230"),n.a.createElement("td",null,"3.9750")),n.a.createElement("tr",null,n.a.createElement("th",null,"distilbert-base-cased-distilled-squad"),n.a.createElement("td",null,"0.4869"),n.a.createElement("td",null,"0.3004"),n.a.createElement("td",null,"-0.0925"),n.a.createElement("td",null,"1.0000"),n.a.createElement("td",null,"0.4715"),n.a.createElement("td",null,"249"),n.a.createElement("td",null,"0.1955"),n.a.createElement("td",null,"3.8000")),n.a.createElement("tr",null,n.a.createElement("th",null,"deepset/bert-base-cased-squad2"),n.a.createElement("td",null,"0.4941"),n.a.createElement("td",null,"0.2949"),n.a.createElement("td",null,"-0.0925"),n.a.createElement("td",null,"1.0000"),n.a.createElement("td",null,"0.4724"),n.a.createElement("td",null,"413"),n.a.createElement("td",null,"0.1196"),n.a.createElement("td",null,"3.8390")),n.a.createElement("tr",null,n.a.createElement("th",null,"deepset/roberta-base-squad2"),n.a.createElement("td",null,"0.5270"),n.a.createElement("td",null,"0.3023"),n.a.createElement("td",null,"-0.0660"),n.a.createElement("td",null,"1.0000"),n.a.createElement("td",null,"0.5194"),n.a.createElement("td",null,"473"),n.a.createElement("td",null,"0.1114"),n.a.createElement("td",null,"3.7310")),n.a.createElement("tr",null,n.a.createElement("th",null,"twmkn9/albert-base-v2-squad2"),n.a.createElement("td",null,"0.5306"),n.a.createElement("td",null,"0.2986"),n.a.createElement("td",null,"-0.0828"),n.a.createElement("td",null,"1.0000"),n.a.createElement("td",null,"0.5220"),n.a.createElement("td",null,"46"),n.a.createElement("td",null,"1.1535"),n.a.createElement("td",null,"5.1660")),n.a.createElement("tr",null,n.a.createElement("th",null,"ktrapeznikov/albert-xlarge-v2-squad-v2"),n.a.createElement("td",null,"0.5604"),n.a.createElement("td",null,"0.2882"),n.a.createElement("td",null,"-0.0828"),n.a.createElement("td",null,"1.0000"),n.a.createElement("td",null,"0.5606"),n.a.createElement("td",null,"224"),n.a.createElement("td",null,"0.2502"),n.a.createElement("td",null,"4.8520"))))),n.a.createElement("div",{className:"flex justify-center "},n.a.createElement("div",{className:"border rounded px-5 shadow-lg w-11/12 h-min bg-opacity-0"},n.a.createElement(S.a,{chartType:"LineChart",loader:n.a.createElement("div",null,"Loading Chart"),data:[["memory","score"],[16,.4373],[46,.5306],[100,.4522],[110,.4653],[190,.3187],[224,.5604],[249,.4869],[313,.3939],[413,.4941],[473,.527]],options:t?{hAxis:{title:"Memory",color:"#FFF",titleTextStyle:{color:"#FFF"},textStyle:{color:"#FFF"}},vAxis:{title:"Score",color:"#FFF",titleTextStyle:{color:"#FFF"},textStyle:{color:"#FFF"}},backgroundColor:"#1F2937",title:s,titleTextStyle:{color:"#FFF"},legendTextStyle:{color:"#FFF"}}:{hAxis:{title:"Memory"},vAxis:{title:"Score"},title:s},rootProps:{"data-testid":"1"}}))))},O=function(){return n.a.createElement("footer",{className:"mt-10 h-20 border-t-2 w-9/12 mx-auto dark:border-gray-700"},n.a.createElement("h6",{className:"text-gray-300 dark:text-gray-700 text-sm text-center"},"\xae Chatbot made by Pawe\u0142 Okapiec"))};function F(e){var t=e.choseMode,a=e.onClickHideSidebar,r=Object(l.useContext)(d),o=r.language,s=r.setlanguage,i=Object(l.useContext)(g).settextId,h=Object(l.useState)(!1),b=Object(c.a)(h,2),E=b[0],p=b[1],f=Object(l.useState)([]),x=Object(c.a)(f,2),v=x[0],S=x[1],F=function(){var e=document.querySelector("html");e.classList.toggle("dark"),e.classList.contains("dark")?(p(!0),localStorage.setItem("dark",!0)):(p(!1),localStorage.setItem("dark",!1))};Object(l.useEffect)((function(){var e=localStorage.getItem("dark");"PL"===localStorage.getItem("lang")&&s("PL"),"true"===e&&F(),function(){var e=Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/api/texts").then((function(e){var t=e.data;S(t.texts)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]);var H={triggerDarkMode:F,language:o,dark:E,changeLanguage:function(e){"EN"===o?(s("PL"),localStorage.setItem("lang","PL")):(s("EN"),localStorage.setItem("lang","EN"))}};return n.a.createElement("main",{className:"content-site flex flex-col flex-wrap content-center dark:bg-gray-800 dark:text-gray-200 relative min-h-screen"},n.a.createElement(C.a,null,n.a.createElement(j,{choseMode:t,onHideClick:a}),n.a.createElement(L.c,null,n.a.createElement(L.a,{path:"/",exact:!0},n.a.createElement(n.a.Fragment,null,n.a.createElement(N,Object.assign({title:"EN"===o?"Warsaw institute of technology information":"Informacje o Politechnice Warszawskiej"},H)),n.a.createElement(w,{texts:v,language:o,setAndUnfoldText:function(e,t){console.log(e.id),i(e.id);var a,l=t.currentTarget.children[1],n=document.querySelectorAll(".QA-text"),r=Object(k.a)(n);try{for(r.s();!(a=r.n()).done;){var o=a.value;o.classList.contains("h-10")||o===l||(o.classList.toggle("h-10"),o.classList.toggle("h-80"),o.classList.toggle("overflow-auto"),o.classList.toggle("overflow-hidden"),o.nextElementSibling.classList.toggle("invisible"))}}catch(c){r.e(c)}finally{r.f()}l.classList.toggle("h-10"),l.classList.toggle("h-80"),l.classList.toggle("overflow-auto"),l.classList.toggle("overflow-hidden"),l.nextElementSibling.classList.toggle("invisible")}}),n.a.createElement(O,null))),n.a.createElement(L.a,{path:"/about"},n.a.createElement(n.a.Fragment,null,n.a.createElement(N,Object.assign({title:"EN"===o?"Research results":"Wyniki bada\u0144"},H)),n.a.createElement(M,{dark:E,language:o}),n.a.createElement(O,null))))))}function H(e){var t=e.onHideClick;return n.a.createElement("button",{type:"button",className:"group sidebar-toggler classic-btn bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-200 hover:bg-green-200 dark:hover:bg-green-500 h-12 w-12 fixed top-5 left-5 transition duration-300 ease-in-out select-none",onClick:t},n.a.createElement("span",{className:"p-1 rounded border border-gray-200 bg-gray-100 dark:bg-gray-900 dark:text-gray-100 shadow-lg ml-4 text-sm w-36 absolute left-10 transform scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out"},"See chatbot options"),n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"group-hover:animate-wiggle h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h7"})))}var q=function(){var e=Object(l.useState)("&casual=true"),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(l.useState)("EN"),s=Object(c.a)(o,2),i=s[0],m=s[1],u=Object(l.useState)(1),b=Object(c.a)(u,2),E=b[0],p=b[1],f=function(){document.querySelector(".sidebar").classList.contains("-translate-x-full")||y();var e=document.querySelector(".chat-room"),t=document.querySelector(".chat-toggler"),a=document.querySelector(".content-site"),l=document.querySelector("html");e.classList.toggle("scale-100"),e.classList.toggle("scale-0"),t.classList.toggle("bottom-10"),t.classList.toggle("-bottom-10"),t.classList.toggle("right-10"),t.classList.toggle("-right-10"),a.classList.toggle("filter"),a.classList.toggle("blur-sm"),l.classList.contains("dark")||a.classList.toggle("bg-gray-200")},y=function(){document.querySelector(".chat-room").classList.contains("scale-100")&&f(),document.querySelector(".sidebar").classList.toggle("-translate-x-full")};return n.a.createElement("div",{className:"m-0",onKeyUp:function(e){var t=document.querySelector(".chat-room"),a=document.querySelector(".sidebar");27===e.keyCode&&(t.classList.contains("scale-100")?f():a.classList.contains("-translate-x-full")||y())}},n.a.createElement(h.Provider,{value:{casualQuery:a,setcasualQuery:r}},n.a.createElement(g.Provider,{value:{textId:E,settextId:p}},n.a.createElement(d.Provider,{value:{language:i,setlanguage:m}},n.a.createElement(F,{choseMode:function(e){r(e),y(),f()},onClickHideSidebar:y}),n.a.createElement(x,{casualQuery:a,onHideClick:f})),n.a.createElement(H,{onHideClick:y}),n.a.createElement(v,{onHideClick:f}))))},z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,78)).then((function(t){var a=t.getCLS,l=t.getFID,n=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),l(e),n(e),r(e),o(e)}))};o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(q,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");z?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var l=a.headers.get("content-type");404===a.status||null!=l&&-1===l.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):W(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):W(t,e)}))}}(),P()}},[[39,1,2]]]);
//# sourceMappingURL=main.cd9233e4.chunk.js.map