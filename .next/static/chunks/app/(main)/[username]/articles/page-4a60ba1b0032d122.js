(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2760],{54287:function(){},50524:function(e,n,t){Promise.resolve().then(t.bind(t,22983))},1300:function(e,n,t){"use strict";var a=t(57437);t(2265),t(45213),t(40222);var i=t(30998),o=t(16463);n.Z=function(e){let{children:n}=e,{data:t}=(0,i.useSession)({required:!0,onUnauthenticated(){(0,o.redirect)("/signup")}});return(0,a.jsx)(a.Fragment,{children:t&&n})}},23141:function(e,n,t){"use strict";var a=t(57437);t(2265),t(69533),n.Z=function(){return(0,a.jsx)("div",{className:"loadingArea"})}},22983:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return y}});var a=t(57437),i=t(1300),o=t(30998);t(30039);var s=t(2265),c=t(57135),r=t.n(c);t(38511);var u=t(54680),d=t(62868),l=t(24625),m=t(87138),p=function(e){let{userArticle:n,deleteArticle:t}=e;return(0,a.jsxs)("div",{className:"userArticleCardContainer",children:[(0,a.jsx)("div",{style:{background:"url(".concat(n.coverImage,")")},className:"articleCover",children:(null==n?void 0:n.coverImage)==""&&"No Cover Image"}),(0,a.jsxs)("div",{className:"articleInformation",children:[(0,a.jsx)("h3",{className:"articleTitle",children:null==n?void 0:n.title}),(0,a.jsx)("p",{className:"articleSummary",children:null==n?void 0:n.summary}),(0,a.jsx)("span",{className:"articleDate",children:(0,l.p6)(null==n?void 0:n.createdAt)})]}),(0,a.jsxs)("div",{className:"articleOptions",children:[(0,a.jsx)(m.default,{href:"/edit/".concat(n.id),children:(0,a.jsx)("span",{className:"editIcon",children:(0,a.jsx)(u.Z,{})})}),(0,a.jsx)("span",{className:"deleteIcon",onClick:()=>t(null==n?void 0:n.id,null==n?void 0:n.content,null==n?void 0:n.coverImage),children:(0,a.jsx)(d.Z,{})})]})]})},D=t(12859),f=t(28644),h=t(65548),j=t(57561),v=t.n(j),C=t(88497);t(7449),t(23141);var w=t(20357),y=function(e){let{params:n}=e,{data:t}=(0,o.useSession)(),[c,u]=(0,s.useState)("drafts"),[d,m]=(0,s.useState)([]),[j,y]=(0,s.useState)([]),[g,x]=(0,s.useState)([]),[F,I]=(0,s.useState)(!1),b=async()=>{var e,t;I(!0);let a=await fetch("/api/posts/actions.php?data=posts_username&username=".concat(n.username)),i=await a.json();console.log(i.data),m(i.data),y(null===(e=i.data)||void 0===e?void 0:e.filter(e=>1==e.isHidden)),x(null==i?void 0:null===(t=i.data)||void 0===t?void 0:t.filter(e=>0==e.isHidden)),I(!1)};(0,s.useEffect)(()=>{(null==n?void 0:n.username)&&b()},[null==n?void 0:n.username]);let A=e=>{let n=e.split("/");return n[n.length-1].split(".")[0]},E=async e=>{let n=w.env.NEXT_PUBLIC_AWS_BUCKET_NAME,t=w.env.NEXT_PUBLIC_AWS_BUCKET_REGION,a=w.env.NEXT_PUBLIC_AWS_ACCESS_KEY,i=w.env.NEXT_PUBLIC_AWS_SECRET_KEY,o=new f.g({region:t,credentials:{accessKeyId:a,secretAccessKey:i}}),s={Bucket:n,Key:"images/".concat(A(e),".jpg")},c=new h.C(s),r=await o.send(c);return console.log(r),r.$metadata},N=async(e,n,a)=>{if(confirm("Are you sure you want to delete this article? this action cannot be undone")){I(!0);let i=v()(n),o=C.ContentState.createFromBlockArray(i.contentBlocks,i.entityMap);Object.values((0,C.convertToRaw)(o).entityMap).map((e,n)=>{"IMAGE"==e.type&&E(e.data.src)}),""!==a&&E(a),await (0,D.fR)(e,null==t?void 0:t.token),I(!1),b()}};return(0,a.jsx)(i.Z,{children:(0,a.jsxs)("div",{className:"userArticlesContainer ".concat(r().className),children:[(0,a.jsx)("h1",{children:"Your Articles"}),(0,a.jsxs)("div",{className:"tabs",children:[(0,a.jsx)("span",{className:"".concat("drafts"==c?"active":""),onClick:()=>u("drafts"),children:"Drafts"}),(0,a.jsx)("span",{className:"".concat("published"==c?"active":""),onClick:()=>u("published"),children:"Published"})]}),"drafts"==c&&(0,a.jsx)("div",{className:"draftsTab",children:(null==j?void 0:j.length)>0?j.map(e=>(0,a.jsxs)("div",{children:[(0,a.jsx)(p,{deleteArticle:N,userArticle:e}),(0,a.jsx)("br",{}),null!==e.previewSlug&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"Preview Details"}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{className:"previewDetails",children:[(0,a.jsx)("span",{className:"previewCode",children:null==e?void 0:e.previewCode})," ",(0,a.jsxs)("span",{className:"previewUrl",onClick:()=>{(0,l.vQ)("myscriblo.com/preview/".concat(null==e?void 0:e.previewSlug)),alert("url copied")},children:["myscriblo.com/preview/",null==e?void 0:e.previewSlug]})," ",(0,a.jsx)("button",{children:"view code"})]})]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]},e.id)):(0,a.jsx)("h3",{children:"No Articles In Draft"})}),"published"==c&&(0,a.jsx)("div",{className:"publishedTab",children:(null==g?void 0:g.length)>0?g.map(e=>(0,a.jsxs)("div",{children:[(0,a.jsx)(p,{deleteArticle:N,userArticle:e}),(0,a.jsx)("br",{})]},e.id)):(0,a.jsx)("h3",{children:"No Published Article"})})]})})}},45213:function(e,n,t){"use strict";t.d(n,{Lz:function(){return u}});var a=t(62175),i=t.n(a),o=t(70763),s=t(60902),c=t(20357);let r=c.env.API_URL,u={session:{strategy:"jwt"},providers:[(0,o.Z)({clientId:c.env.GOOGLE_CLIENT_ID,clientSecret:c.env.GOOGLE_CLIENT_SECRET}),(0,s.Z)({name:"Credentials",async authorize(e){let{email:n,token:t}=e,a=await fetch("".concat(r,"/users/index.php?email=").concat(n,"&with=token"),{method:"GET",headers:{Authorization:"Bearer "+t}}),i=await a.json();return 200==i.status&&i.data?i.data:null}})],callbacks:{async signIn(e){if("google"==e.account.provider){var n,t,a,i;let o=await fetch("".concat(r,"/users/checkIfUserExists.php?email=").concat(null==e?void 0:null===(n=e.user)||void 0===n?void 0:n.email));return!1!==(await o.json()).message||"/signup?continue=true&email=".concat(null==e?void 0:null===(t=e.user)||void 0===t?void 0:t.email,"&name=").concat(null==e?void 0:null===(a=e.user)||void 0===a?void 0:a.name,"&image=").concat(null==e?void 0:null===(i=e.user)||void 0===i?void 0:i.image)}return{hello:"world"}},jwt:async e=>{let{token:n,user:t,trigger:a,session:i}=e;if(t){let e=await fetch("".concat(r,"/users/index.php?email=").concat(null==t?void 0:t.email,"&with=token")),a=await e.json();if(console.log("response: "+a),200!==a.status)return n;n={...n,...a.data}}return"update"===a&&n?{...n,...i}:n},session:async e=>{let{session:n,token:t}=e;return t}}};i()(u)},99274:function(e,n,t){"use strict";t.d(n,{i:function(){return a}});let a=[{id:1,name:"Tech",emoji:"\uD83D\uDCBB"},{id:2,name:"Science",emoji:"\uD83D\uDD2C"},{id:3,name:"Health",emoji:"\uD83C\uDFE5"},{id:4,name:"Travel",emoji:"✈️"},{id:5,name:"Food",emoji:"\uD83C\uDF54"},{id:6,name:"Fashion",emoji:"\uD83D\uDC57"},{id:7,name:"Fitness",emoji:"\uD83D\uDCAA"},{id:8,name:"Decor",emoji:"\uD83C\uDFE0"},{id:9,name:"Finance",emoji:"\uD83D\uDCB0"},{id:10,name:"Parenting",emoji:"\uD83D\uDC6A"},{id:11,name:"Self-Improve",emoji:"\uD83D\uDCDA"},{id:12,name:"Art",emoji:"\uD83C\uDFA8"},{id:13,name:"Books",emoji:"\uD83D\uDCD6"},{id:14,name:"Entertainment",emoji:"\uD83C\uDFA5"},{id:15,name:"Sports",emoji:"⚽"},{id:16,name:"Environment",emoji:"\uD83C\uDF3F"},{id:17,name:"Business",emoji:"\uD83D\uDCCA"},{id:18,name:"Photography",emoji:"\uD83D\uDCF7"},{id:19,name:"Music",emoji:"\uD83C\uDFB5"},{id:20,name:"Lifestyle",emoji:"\uD83C\uDF1F"},{id:21,name:"Gaming",emoji:"\uD83C\uDFAE"},{id:22,name:"Beauty",emoji:"\uD83D\uDC84"},{id:23,name:"Education",emoji:"\uD83C\uDF93"},{id:24,name:"Motivation",emoji:"\uD83D\uDD25"},{id:25,name:"Comedy",emoji:"\uD83D\uDE04"},{id:26,name:"Politics",emoji:"\uD83D\uDDF3️"},{id:27,name:"History",emoji:"\uD83D\uDCDC"},{id:28,name:"Crafts",emoji:"✂️"},{id:29,name:"Gardening",emoji:"\uD83C\uDF31"},{id:30,name:"Pets",emoji:"\uD83D\uDC3E"},{id:31,name:"Relationships",emoji:"\uD83D\uDC91"},{id:32,name:"Technology",emoji:"\uD83D\uDCF1"},{id:33,name:"Design",emoji:"\uD83C\uDFA8"},{id:34,name:"Movies",emoji:"\uD83C\uDFAC"},{id:35,name:"Cooking",emoji:"\uD83C\uDF73"},{id:36,name:"Nature",emoji:"\uD83C\uDF33"},{id:37,name:"Writing",emoji:"✍️"},{id:38,name:"Career",emoji:"\uD83D\uDC54"},{id:39,name:"Fitness",emoji:"\uD83D\uDCAA"},{id:40,name:"Inspiration",emoji:"\uD83C\uDF1F"},{id:41,name:"Spirituality",emoji:"\uD83D\uDE4F"},{id:42,name:"Hobbies",emoji:"\uD83C\uDFAF"},{id:43,name:"Artificial Intelligence",emoji:"\uD83E\uDD16"},{id:44,name:"Travel Tips",emoji:"\uD83C\uDF0D"},{id:45,name:"Parenting Tips",emoji:"\uD83D\uDC76"},{id:46,name:"DIY Projects",emoji:"\uD83D\uDD28"},{id:47,name:"Entrepreneurship",emoji:"\uD83D\uDCBC"},{id:48,name:"Photography Tips",emoji:"\uD83D\uDCF8"}]},12859:function(e,n,t){"use strict";t.d(n,{P_:function(){return r},Tc:function(){return D},YF:function(){return p},fR:function(){return f},fX:function(){return c},hW:function(){return j},li:function(){return d},n9:function(){return s},nN:function(){return l},oE:function(){return m},sc:function(){return h},up:function(){return u}});var a=t(19212),i=t.n(a),o=t(20357);async function s(e,n){let t=i()().format("YYYY-MM-DD HH:mm:ss"),a=new FormData;a.append("action","likepost"),a.append("postId",e),a.append("userId",n),a.append("date",t);let o=await fetch("/api/posts/actions.php",{method:"POST",body:a});return await o.json()}async function c(e,n,t,a){let o=i()().format("YYYY-MM-DD HH:mm:ss"),s=new FormData;s.append("action","commentpost"),s.append("postId",e),s.append("comment",n),s.append("userId",t),s.append("replyId",a),s.append("date",o);let c=await fetch("/api/posts/actions.php",{method:"POST",body:s});return await c.json()}async function r(e,n){let t=i()().format("YYYY-MM-DD HH:mm:ss"),a=new FormData;a.append("action","followuser"),a.append("followId",e),a.append("userId",n),a.append("date",t);let o=await fetch("/api/users/actions.php",{method:"POST",body:a});return await o.json()}async function u(e,n){let t=new FormData;t.append("action","bookmarkpost"),t.append("postId",e),t.append("userId",n),t.append("date",i()().format("YYYY-MM-DD HH:mm:ss"));let a=await fetch("/api/posts/actions.php",{method:"POST",body:t});return await a.json()}async function d(e){let n=await fetch("/api/posts/actions.php?data=comments&postId=".concat(e));return(await n.json()).data}async function l(e){let n=await fetch("".concat(o.env.API_URL,"/posts/actions.php?data=likes&postId=").concat(e));return(await n.json()).data}async function m(e){let n=await fetch("".concat(o.env.API_URL,"/posts/actions.php?data=bookmarks&userId=").concat(e));return(await n.json()).data}async function p(e){let n=new FormData;n.append("action","deletecomment"),n.append("commentId",e);let t=await fetch("/api/posts/actions.php?data=comment&id=".concat(e),{method:"POST",body:n});return await t.json()}async function D(e){let n=new FormData;n.append("action","deleteBookmark"),n.append("bookmarkId",e);let t=await fetch("/api/posts/actions.php",{method:"POST",body:n});await t.json()}async function f(e,n){let t=new FormData;t.append("action","deletePost"),t.append("postId",e),t.append("authToken",n);let a=await fetch("/api/posts/actions.php",{method:"POST",body:t});return await a.json()}async function h(e){let n=new FormData;n.append("action","pinPost"),n.append("postId",e);let t=await fetch("/api/posts/actions.php",{method:"POST",body:n}),a=await t.json();return console.log(a),a}async function j(e){let n=new FormData;n.append("action","unpinPost"),n.append("postId",e);let t=await fetch("/api/posts/actions.php",{method:"POST",body:n}),a=await t.json();return console.log(a),a}},24625:function(e,n,t){"use strict";t.d(n,{WK:function(){return s},p6:function(){return o},vQ:function(){return c}});var a=t(19212),i=t.n(a);function o(e){let n=i()(),t=i().tz(e,function(){let e=new Date().getTimezoneOffset(),n=i().tz.guess();if(e===i().tz(n).utcOffset())return n;{let t=i().tz.names();for(let n=0;n<t.length;n++)if(i().tz(t[n]).utcOffset()===e)return t[n];return n}}()),a=n.diff(t,"seconds"),o=n.diff(t,"minutes"),s=n.diff(t,"hours"),c=n.diff(t,"days"),r=n.diff(t,"months"),u=n.diff(t,"years");return a<60?"".concat(a," seconds ago"):o<60?"".concat(o," minutes ago"):s<24?"".concat(s," hours ago"):c<30?"".concat(c," days ago"):r<12?"".concat(r," months ago"):"".concat(u," years ago")}function s(e,n){let t=e.split(" ");return t.length<=n?e:t.slice(0,n).join(" ")+"..."}t(39053),t(99274);let c=e=>{let n=document.createElement("textarea");n.value=e,n.style.position="fixed",document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n)}},69533:function(){},30039:function(){},38511:function(){}},function(e){e.O(0,[1467,7743,3475,6990,7326,411,8218,8514,3840,998,6300,5632,96,8497,2755,1520,2971,7023,1744],function(){return e(e.s=50524)}),_N_E=e.O()}]);