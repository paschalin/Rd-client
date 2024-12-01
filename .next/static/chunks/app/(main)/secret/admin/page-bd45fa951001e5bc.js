(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[818],{93072:function(e,n,t){Promise.resolve().then(t.bind(t,46747))},46747:function(e,n,t){"use strict";t.r(n);var s=t(57437);t(1400);var r=t(57135),i=t.n(r),a=t(19212),c=t.n(a),l=t(2265),o=t(20357);n.default=()=>{let[e,n]=(0,l.useState)(!1),[t,r]=(0,l.useState)([]),[a,d]=(0,l.useState)([]),[u,h]=(0,l.useState)(0),[p,f]=(0,l.useState)(0),[x,m]=(0,l.useState)(1);async function j(){let e=await fetch("/api/admin/index.php?action=getUsersCount");h((await e.json()).data[0].total_records)}async function g(){let e=await fetch("/api/admin/index.php?action=getArticlesCount");f((await e.json()).data[0].total_records)}async function v(){let e=await fetch("/api/admin/index.php?action=getFeedbacks"),n=await e.json();r(n.data),d(n.data.filter(e=>"false"==e.solved))}(0,l.useEffect)(()=>{(function(){let e=JSON.parse(localStorage.getItem("admin"));if(!e||new Date().getTime()>e.expiration){let e=prompt("Enter admin password");for(;e!==o.env.NEXT_PUBLIC_ADMIN_PASS;)e=prompt("Enter admin password");let t={auth:!0,expire:new Date().getTime()+864e5};return localStorage.setItem("admin",JSON.stringify(t)),n(!0),!0}return n(!0),!0})()&&(j(),v(),g())},[]);let b=e=>{d(t.filter(n=>n.type==e))},y=async e=>{await fetch("/api/admin/index.php?action=solve&feedbackID=".concat(e)),v()},k=async e=>{await fetch("/api/admin/index.php?action=unsolve&feedbackID=".concat(e)),v()};return(0,s.jsx)(s.Fragment,{children:e&&(0,s.jsxs)("div",{className:"adminContainer ".concat(i().className),children:[(0,s.jsxs)("div",{className:"adminHeader",children:[(0,s.jsx)("span",{onClick:()=>m(1),children:"Dashboard"}),(0,s.jsx)("span",{onClick:()=>m(2),children:"Feedback"}),(0,s.jsx)("span",{onClick:()=>m(2),children:"Verification Request"})]}),1==x&&(0,s.jsxs)("div",{className:"tab",children:[(0,s.jsx)("br",{}),(0,s.jsx)("h1",{children:"Metrics"}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{className:"metric",children:[(0,s.jsx)("h3",{children:"Total Number Of Users"}),(0,s.jsx)("span",{children:u})]}),(0,s.jsxs)("div",{className:"metric",children:[(0,s.jsx)("h3",{children:"Total Number Of Articles Published"}),(0,s.jsx)("span",{children:p})]}),(0,s.jsxs)("div",{onClick:()=>m(2),className:"metric",children:[(0,s.jsx)("h3",{children:"Total Number Of Feedbacks Recived"}),(0,s.jsxs)("div",{className:"subMetric",children:[(0,s.jsxs)("span",{children:["Bug: ",t.filter(e=>"bug"==e.type).length]}),(0,s.jsxs)("span",{children:["Technical:"," ",t.filter(e=>"technical"==e.type).length]}),(0,s.jsxs)("span",{children:["Suggestion:"," ",t.filter(e=>"suggestion"==e.type).length]}),(0,s.jsxs)("span",{children:["SNW:"," ",t.filter(e=>"not working"==e.type).length]}),(0,s.jsxs)("span",{children:["SE:"," ",t.filter(e=>"something else"==e.type).length]})]}),(0,s.jsx)("span",{children:t.length}),(0,s.jsxs)("div",{className:"subMetric",children:[(0,s.jsxs)("span",{style:{background:"red"},children:["Unsolved:"," ",t.filter(e=>"false"==e.solved).length," "]}),(0,s.jsxs)("span",{style:{background:"green"},children:["Solved:"," ",t.filter(e=>"true"==e.solved).length]})]})]})]}),2==x&&(0,s.jsxs)("div",{className:"tab",children:[(0,s.jsx)("h1",{children:"Feedbacks"}),(0,s.jsx)("br",{}),(0,s.jsx)("small",{children:"filters"}),(0,s.jsxs)("div",{className:"feedbackType",children:[(0,s.jsx)("span",{onClick:()=>d(t),children:"All"}),(0,s.jsx)("span",{onClick:()=>b("technical"),children:"Technical"}),(0,s.jsx)("span",{onClick:()=>b("suggestion"),children:"Suggestion"}),(0,s.jsx)("span",{onClick:()=>b("bug"),children:"Bug"}),(0,s.jsx)("span",{onClick:()=>b("not working"),children:"SNW"}),(0,s.jsx)("span",{onClick:()=>b("something else"),children:"SE"})]}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),a.length>0?a.map(e=>(0,s.jsxs)("div",{className:"feedback",children:[(0,s.jsx)("h4",{children:"Problem"}),(0,s.jsx)("p",{children:e.problem}),(0,s.jsx)("br",{}),(0,s.jsx)("h4",{children:"Reproduction"}),(0,s.jsx)("p",{children:e.reproduction}),(0,s.jsx)("br",{}),(0,s.jsxs)("span",{children:["Type: ",e.type," "]}),(0,s.jsxs)("span",{children:["Sender: ",e.email," "]}),(0,s.jsxs)("span",{children:["Page: ",e.page," "]}),(0,s.jsxs)("span",{children:["Date: ",c()(e.created_at).format("MM/DD/YY")]}),(0,s.jsxs)("span",{children:["Solved: \xa0",(0,s.jsx)("span",{style:{background:"false"==e.solved?"red":"green"},className:"circle"})]}),(0,s.jsx)("br",{}),(0,s.jsxs)("button",{onClick:()=>"false"==e.solved?y(e.id):k(e.id),children:[" ","false"==e.solved?"Mark Solved":"Unsolve"]})]},e.id)):(0,s.jsx)("h3",{children:"No Feedback at this time"})]})]})})}},20357:function(e,n,t){"use strict";var s,r;e.exports=(null==(s=t.g.process)?void 0:s.env)&&"object"==typeof(null==(r=t.g.process)?void 0:r.env)?t.g.process:t(88081)},88081:function(e){!function(){var n={229:function(e){var n,t,s,r=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{t="function"==typeof clearTimeout?clearTimeout:a}catch(e){t=a}}();var l=[],o=!1,d=-1;function u(){o&&s&&(o=!1,s.length?l=s.concat(l):d=-1,l.length&&h())}function h(){if(!o){var e=c(u);o=!0;for(var n=l.length;n;){for(s=l,l=[];++d<n;)s&&s[d].run();d=-1,n=l.length}s=null,o=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===a||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(n){try{return t.call(null,e)}catch(n){return t.call(this,e)}}}(e)}}function p(e,n){this.fun=e,this.array=n}function f(){}r.nextTick=function(e){var n=Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];l.push(new p(e,n)),1!==l.length||o||c(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=f,r.addListener=f,r.once=f,r.off=f,r.removeListener=f,r.removeAllListeners=f,r.emit=f,r.prependListener=f,r.prependOnceListener=f,r.listeners=function(e){return[]},r.binding=function(e){throw Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw Error("process.chdir is not supported")},r.umask=function(){return 0}}},t={};function s(e){var r=t[e];if(void 0!==r)return r.exports;var i=t[e]={exports:{}},a=!0;try{n[e](i,i.exports,s),a=!1}finally{a&&delete t[e]}return i.exports}s.ab="//";var r=s(229);e.exports=r}()},1400:function(){},57135:function(e){e.exports={style:{fontFamily:"'__Source_Sans_3_8ac48b', '__Source_Sans_3_Fallback_8ac48b'",fontStyle:"normal"},className:"__className_8ac48b"}}},function(e){e.O(0,[3144,3475,6990,2971,7023,1744],function(){return e(e.s=93072)}),_N_E=e.O()}]);