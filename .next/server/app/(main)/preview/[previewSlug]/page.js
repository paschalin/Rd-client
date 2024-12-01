(()=>{var e={};e.id=151,e.ids=[151],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},63477:e=>{"use strict";e.exports=require("querystring")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},42561:e=>{e.exports={style:{fontFamily:"'__Merriweather_9cb816', '__Merriweather_Fallback_9cb816'",fontStyle:"normal"},className:"__className_9cb816",variable:"__variable_9cb816"}},50525:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>h,tree:()=>c}),r(10341),r(40598),r(68392),r(35866);var t=r(23191),a=r(88716),i=r(37922),n=r.n(i),o=r(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(s,l);let c=["",{children:["(main)",{children:["preview",{children:["[previewSlug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,10341)),"C:\\Users\\MACHI\\Desktop\\machi p\\rd\\scriblo-client\\app\\(main)\\preview\\[previewSlug]\\page.js"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,40598)),"C:\\Users\\MACHI\\Desktop\\machi p\\rd\\scriblo-client\\app\\(main)\\layout.js"],loading:[()=>Promise.resolve().then(r.bind(r,68392)),"C:\\Users\\MACHI\\Desktop\\machi p\\rd\\scriblo-client\\app\\(main)\\loading.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Users\\MACHI\\Desktop\\machi p\\rd\\scriblo-client\\app\\(main)\\preview\\[previewSlug]\\page.js"],u="/(main)/preview/[previewSlug]/page",p={require:r,loadChunk:()=>Promise.resolve()},h=new t.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(main)/preview/[previewSlug]/page",pathname:"/preview/[previewSlug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},22496:(e,s,r)=>{Promise.resolve().then(r.bind(r,24027))},79820:(e,s,r)=>{"use strict";r.d(s,{Z:()=>a});var t=r(10326);r(17577),r(91191);let a=function(){return t.jsx("div",{className:"loadingArea"})}},6905:(e,s,r)=>{"use strict";r.d(s,{Z:()=>i});var t=r(10326);r(17577),r(42897);var a=r(90434);let i=function({reason:e,searchClass:s}){return(0,t.jsxs)("div",{className:"notFoundContainer",children:["no_category"==e&&(0,t.jsxs)(t.Fragment,{children:[t.jsx("div",{className:"notfoundBG",style:{background:"url(https://scriblo.s3.us-east-2.amazonaws.com/branding/empty-box.png)"}}),t.jsx("h3",{children:"Oops! Category Not Found"}),(0,t.jsxs)("p",{children:["Hey lad, we tried but we couldn't find that category you're looking for. ",t.jsx("br",{})," Our team will be working to add that soon, mean while browse these categories"]}),t.jsx("small",{children:"I promise these ones exist \uD83E\uDD7A"}),(0,t.jsxs)("div",{className:"suggestedCategories",children:[t.jsx("span",{children:"category"}),t.jsx("span",{children:"category"}),t.jsx("span",{children:"category"})]})]}),"no_post_for_category"==e&&(0,t.jsxs)(t.Fragment,{children:[t.jsx("div",{className:"notfoundBG",style:{background:"url(https://scriblo.s3.us-east-2.amazonaws.com/branding/sad+man.png)"}}),t.jsx("h3",{children:"Snap! No Post Found For That Category"}),(0,t.jsxs)("p",{children:["Hey lad, we just launched so we do not have any article for that category at the moment ",t.jsx("br",{})," Feeling brave? be the first to write an article."]}),t.jsx("br",{}),t.jsx("small",{children:"C'mon you gat this \uD83D\uDCAA"}),t.jsx(a.default,{href:"/create",children:t.jsx("button",{className:"btn",children:"Write Article"})})]}),"no_search_article"==e&&(0,t.jsxs)(t.Fragment,{children:[t.jsx("div",{className:"notfoundBG",style:{background:`url(${"articles"==s||"tags"==s?"https://scriblo.s3.us-east-2.amazonaws.com/branding/sad+man.png":"https://scriblo.s3.us-east-2.amazonaws.com/branding/no+user.png"})`}}),"articles"==s?t.jsx("h3",{children:"Snap! No Post Found For That Keyword"}):"people"==s?t.jsx("h3",{children:"Snap! No User Found With That Name"}):"tags"==s?t.jsx("h3",{children:"Snap! No Post Found For That Category"}):"","articles"==s||"people"==s?(0,t.jsxs)("p",{children:["Make sure all words are spelled correctly ",t.jsx("br",{})," try searching a more general keyword"]}):"","tags"==s&&(0,t.jsxs)("p",{children:["Make sure all words are spelled correctly ",t.jsx("br",{})," try searching a more general keyword"]}),t.jsx("br",{}),t.jsx(a.default,{href:"/explore",children:t.jsx("button",{className:"btn",children:"Let's try that again"})})]}),"no_post_for_user"==e&&(0,t.jsxs)(t.Fragment,{children:[t.jsx("div",{className:"notfoundBG",style:{background:"url(https://scriblo.s3.us-east-2.amazonaws.com/branding/sad+man.png)"}}),t.jsx("h3",{children:"Snap! This user has not written anything yet"}),(0,t.jsxs)("p",{children:["Try reaching out to them on their social media handles ",t.jsx("br",{})," or check out other users"]}),t.jsx("br",{}),t.jsx(a.default,{href:"/explore",children:t.jsx("button",{className:"btn",children:"Search Users"})}),t.jsx("br",{})]})]})}},24027:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>j});var t=r(10326),a=r(17577);r(42316),r(87230);var i=r(77109);r(16427);var n=r(54620),o=r.n(n),l=r(90434),c=r(817);let d=function({authorAvatar:e,authorUsername:s,authorName:r,authorId:a,articlePublishDate:i,articleReadTime:n,session:d,doesSignedInUserFollowAuthor:u,authorVerified:p}){return(0,t.jsxs)("div",{className:`${o().className} articleInfoCardContainer`,children:[t.jsx("div",{className:"authorAvatar",style:{background:`url(${e})`}}),(0,t.jsxs)("div",{className:"articleAuthorInfo",children:[(0,t.jsxs)("div",{className:"authorNameAndFollowButton",children:[(0,t.jsxs)("p",{className:"authorName",children:[" ",(0,t.jsxs)(l.default,{href:`/${s}`,children:["By ",r," ","1"==p&&t.jsx(c.Z,{})]})," - ",t.jsx(l.default,{href:`/${s}`,children:(0,t.jsxs)("span",{className:"authorUsername",children:["@",s]})})," "]}),d?.email&&!u&&a!==d?.id&&t.jsx("span",{children:"Follow"}),!d?.email&&t.jsx(l.default,{href:"/signup",children:t.jsx("span",{children:"Follow"})})]}),(0,t.jsxs)("div",{className:"publishDateAndReadTime",children:[(0,t.jsxs)("span",{className:"articlePublishedDate",children:["published ",i]})," \xa0 | \xa0 ",(0,t.jsxs)("span",{className:"articleReadTime",children:[n," mins read time"]})]})]})]})};var u=r(39388),p=r(59778),h=r(6905),m=r(45173),x=r(46226),g=r(79820);let j=function({params:e}){let{data:s}=(0,i.useSession)(),[r,n]=(0,a.useState)(!0),[c,j]=(0,a.useState)({}),[v,b]=(0,a.useState)(["","","","",""]),[f,w]=(0,a.useState)(!1),y=(0,a.useRef)([]),_=(e,s)=>{if(s.length<=1){let r=[...v];r[e]=s,b(r),1===s.length&&e<4&&y.current[e+1].focus()}},C=(e,s)=>{"Backspace"===s.key&&!v[e]&&e>0&&y.current[e-1].focus()},N=async()=>{w(!0);let s=await fetch(`/api/posts/actions.php?data=verifyCode&slug=${e.previewSlug}&code=${v.join("")}`),r=await s.json();200==r.status?(b(["","","","",""]),n(!1),console.log(r.data),j(r.data)):alert("Incorect Preview Code"),w(!1)};return f?t.jsx(g.Z,{}):t.jsx("div",{className:`previewContainer ${o().className}`,children:r?(0,t.jsxs)("div",{className:"previewCodeInput",children:[t.jsx("h2",{children:"Enter Preview Code"}),t.jsx("p",{children:"The author of this article requires a code to preview their article, enter the preview code below"}),t.jsx("div",{className:"codeForm",children:v.map((e,s)=>t.jsx("input",{type:"text",value:e,maxLength:1,onChange:e=>_(s,e.target.value),onKeyDown:e=>C(s,e),ref:e=>y.current[s]=e,pattern:"\\d*"},s))}),t.jsx("button",{onClick:()=>N(),className:"btn",children:"Continue"})]}):t.jsx("div",{className:"articleContainer",children:c?(0,t.jsxs)(t.Fragment,{children:[""!==c.coverImage&&t.jsx("div",{className:"mobileCoverImageTop",children:t.jsx(x.default,{className:"mobileCoverImg",src:c?.coverImage,fill:!0})}),t.jsx("h1",{children:c.title}),t.jsx("br",{}),t.jsx(d,{authorAvatar:c.authorAvatar,authorName:c.authorName,authorUsername:c.authorUsername,articlePublishDate:(0,m.p6)(c.createdAt),articleReadTime:"5 mins",authorId:c.authorId,doesSignedInUserFollowAuthor:!1,session:s,preview:!0}),t.jsx("br",{}),t.jsx(u.default,{postId:c.id,userId:s?.id,session:s,preview:!0}),t.jsx("br",{}),t.jsx("article",{dangerouslySetInnerHTML:{__html:c?.content}}),t.jsx("div",{className:`articleTags ${o().className}`,children:c?.tags!==""&&c?.tags?.split(",").map((e,s)=>t.jsx(l.default,{href:"/",children:t.jsx("span",{children:e},s)}))}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(p.default,{author:{id:c.authorId,name:c.authorName,avatar:c.authorAvatar,username:c.authorUsername,bio:c.authorBio},session:s,doesSignedInUserFollowAuthor:!1,preview:!0}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(u.default,{postId:c.id,userId:s?.id,session:s,preview:!0}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{id:"commentScrollHolder"})]}):t.jsx(h.Z,{})})})}},16427:(e,s,r)=>{"use strict";r.d(s,{Lz:()=>l});var t=r(89675),a=r.n(t),i=r(45443),n=r(17456);let o=process.env.API_URL,l={session:{strategy:"jwt"},providers:[(0,i.Z)({clientId:process.env.GOOGLE_CLIENT_ID,clientSecret:process.env.GOOGLE_CLIENT_SECRET}),(0,n.Z)({name:"Credentials",async authorize(e){let{email:s,token:r}=e,t=await fetch(`${o}/users/index.php?email=${s}&with=token`,{method:"GET",headers:{Authorization:"Bearer "+r}}),a=await t.json();return 200==a.status&&a.data?a.data:null}})],callbacks:{async signIn(e){if("google"==e.account.provider){let s=await fetch(`${o}/users/checkIfUserExists.php?email=${e?.user?.email}`);return!1!==(await s.json()).message||`/signup?continue=true&email=${e?.user?.email}&name=${e?.user?.name}&image=${e?.user?.image}`}return{hello:"world"}},jwt:async({token:e,user:s,trigger:r,session:t})=>{if(s){let r=await fetch(`${o}/users/index.php?email=${s?.email}&with=token`),t=await r.json();if(console.log("response: "+t),200!==t.status)return e;e={...e,...t.data}}return"update"===r&&e?{...e,...t}:e},session:async({session:e,token:s})=>s}};a()(l)},5420:(e,s,r)=>{"use strict";var t=r(39618);s.Z=void 0;var a=t(r(71133)),i=r(10326),n=(0,a.default)((0,i.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");s.Z=n},8910:(e,s,r)=>{"use strict";r.d(s,{Z:()=>i});var t=r(87732),a=r(10326);let i=(0,t.Z)((0,a.jsx)("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"}),"Chat")},46226:(e,s,r)=>{"use strict";r.d(s,{default:()=>a.a});var t=r(69029),a=r.n(t)},69029:(e,s,r)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),function(e,s){for(var r in s)Object.defineProperty(e,r,{enumerable:!0,get:s[r]})}(s,{default:function(){return l},getImageProps:function(){return o}});let t=r(91174),a=r(23078),i=r(92481),n=t._(r(86820));function o(e){let{props:s}=(0,a.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(s))void 0===r&&delete s[e];return{props:s}}let l=i.Image},10341:(e,s,r)=>{"use strict";r.r(s),r.d(s,{$$typeof:()=>n,__esModule:()=>i,default:()=>o});var t=r(68570);let a=(0,t.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\scriblo-client\app\(main)\preview\[previewSlug]\page.js`),{__esModule:i,$$typeof:n}=a;a.default;let o=(0,t.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\scriblo-client\app\(main)\preview\[previewSlug]\page.js#default`)},57371:(e,s,r)=>{"use strict";r.d(s,{default:()=>a.a});var t=r(670),a=r.n(t)},670:(e,s,r)=>{"use strict";let{createProxy:t}=r(68570);e.exports=t("C:\\Users\\MACHI\\Desktop\\machi p\\rd\\scriblo-client\\node_modules\\next\\dist\\client\\link.js")},87230:()=>{},91191:()=>{},42897:()=>{},42316:()=>{},49690:(e,s,r)=>{"use strict";r.d(s,{Analytics:()=>t}),r(17577);function t(e){return null}},36674:(e,s,r)=>{"use strict";r.d(s,{c:()=>o});var t=r(68570);let a=(0,t.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\scriblo-client\node_modules\@vercel\analytics\dist\react\index.mjs`),{__esModule:i,$$typeof:n}=a;a.default;let o=(0,t.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\scriblo-client\node_modules\@vercel\analytics\dist\react\index.mjs#Analytics`);(0,t.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\scriblo-client\node_modules\@vercel\analytics\dist\react\index.mjs#track`)}};var s=require("../../../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),t=s.X(0,[276,471,578,162,481,540,123,772],()=>r(50525));module.exports=t})();