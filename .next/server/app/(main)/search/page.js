(()=>{var e={};e.id=580,e.ids=[580],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},20918:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>h,tree:()=>c}),r(86149),r(22583),r(40598),r(68392),r(35866);var i=r(23191),a=r(88716),t=r(37922),n=r.n(t),o=r(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(s,l);let c=["",{children:["(main)",{children:["search",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,86149)),"C:\\Users\\MACHI\\Desktop\\machi p\\rd\\reedboss-client\\app\\(main)\\search\\page.js"]}]},{loading:[()=>Promise.resolve().then(r.bind(r,22583)),"C:\\Users\\MACHI\\Desktop\\machi p\\rd\\reedboss-client\\app\\(main)\\search\\loading.js"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,40598)),"C:\\Users\\MACHI\\Desktop\\machi p\\rd\\reedboss-client\\app\\(main)\\layout.js"],loading:[()=>Promise.resolve().then(r.bind(r,68392)),"C:\\Users\\MACHI\\Desktop\\machi p\\rd\\reedboss-client\\app\\(main)\\loading.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Users\\MACHI\\Desktop\\machi p\\rd\\reedboss-client\\app\\(main)\\search\\page.js"],u="/(main)/search/page",m={require:r,loadChunk:()=>Promise.resolve()},h=new i.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(main)/search/page",pathname:"/search",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},74988:(e,s,r)=>{Promise.resolve().then(r.bind(r,59077)),Promise.resolve().then(r.bind(r,42783)),Promise.resolve().then(r.bind(r,42854)),Promise.resolve().then(r.t.bind(r,92481,23)),Promise.resolve().then(r.t.bind(r,79404,23)),Promise.resolve().then(r.bind(r,71414))},42783:(e,s,r)=>{"use strict";r.d(s,{default:()=>l});var i=r(10326),a=r(45173);let t=(0,r(87732).Z)((0,i.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");var n=r(46226),o=r(90434);r(17577);let l=function({article:e}){return(0,i.jsxs)("div",{className:"articleShowcaseContainer",children:[i.jsx("div",{className:"articleCover",children:i.jsx(n.default,{src:e?.coverImage,fill:!0,alt:`IMAGE - ${e?.title}`,className:"img"})}),(0,i.jsxs)("div",{className:"articleAuthorandDate",children:[i.jsx("span",{children:e?.authorName})," • ",i.jsx("span",{children:(0,a.p6)(e.createdAt)})]}),i.jsx(o.default,{href:`/${e?.authorUsername}/${e?.slug}`,children:(0,i.jsxs)("div",{className:"artileContent",children:[(0,i.jsxs)("div",{className:"title-arrow",children:[i.jsx("h1",{children:(0,a.WK)(e.title,18)}),i.jsx(t,{className:"arrowForward"})]}),i.jsx("p",{children:(0,a.WK)(e.summary,20)}),(0,i.jsxs)("span",{children:[e?.readTime," mins read time"]})]})}),i.jsx("div",{className:"articleTags",children:e?.tags?.split(",").length>=1?e?.tags?.split(",").slice(0,3).map((e,s)=>i.jsx("a",{className:`tags ${e?.length>9?"ellipsis":""}`,href:`/search/?q=${e}&class=tags`,children:e},s)):i.jsx("span",{children:"no tag"})})]})}},42854:(e,s,r)=>{"use strict";r.d(s,{default:()=>t});var i=r(10326),a=r(45173);r(17577);let t=function(){return(0,i.jsxs)("div",{className:"promotereedbossContainer",children:[i.jsx("div",{className:"reedbossBanner"}),i.jsx("h3",{children:"Spread the Word, Amplify Your Voice!"}),i.jsx("p",{children:"Help us grow and empower more writers by sharing reedboss with your network. Together, we can build a vibrant community of readers and creators."}),i.jsx("button",{onClick:()=>{(0,a.vQ)("https://myreedboss.com"),alert("Link copied to clipboard")},children:"Share reedboss"})]})}},95752:(e,s,r)=>{"use strict";r.d(s,{ZP:()=>o});var i=r(68570);let a=(0,i.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\reedboss-client\Components\ArticleCard.js`),{__esModule:t,$$typeof:n}=a;a.default;let o=(0,i.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\reedboss-client\Components\ArticleCard.js#default`)},44565:(e,s,r)=>{"use strict";r.d(s,{Z:()=>t});var i=r(19510);r(71159),r(77081);var a=r(57371);let t=function({reason:e,searchClass:s}){return(0,i.jsxs)("div",{className:"notFoundContainer",children:["no_category"==e&&(0,i.jsxs)(i.Fragment,{children:[i.jsx("div",{className:"notfoundBG",style:{background:"url(https://reedboss.s3.us-east-2.amazonaws.com/branding/empty-box.png)"}}),i.jsx("h3",{children:"Oops! Category Not Found"}),(0,i.jsxs)("p",{children:["Hey lad, we tried but we couldn't find that category you're looking for. ",i.jsx("br",{})," Our team will be working to add that soon, mean while browse these categories"]}),i.jsx("small",{children:"I promise these ones exist \uD83E\uDD7A"}),(0,i.jsxs)("div",{className:"suggestedCategories",children:[i.jsx("span",{children:"category"}),i.jsx("span",{children:"category"}),i.jsx("span",{children:"category"})]})]}),"no_post_for_category"==e&&(0,i.jsxs)(i.Fragment,{children:[i.jsx("div",{className:"notfoundBG",style:{background:"url(https://reedboss.s3.us-east-2.amazonaws.com/branding/sad+man.png)"}}),i.jsx("h3",{children:"Snap! No Post Found For That Category"}),(0,i.jsxs)("p",{children:["Hey lad, we just launched so we do not have any article for that category at the moment ",i.jsx("br",{})," Feeling brave? be the first to write an article."]}),i.jsx("br",{}),i.jsx("small",{children:"C'mon you gat this \uD83D\uDCAA"}),i.jsx(a.default,{href:"/create",children:i.jsx("button",{className:"btn",children:"Write Article"})})]}),"no_search_article"==e&&(0,i.jsxs)(i.Fragment,{children:[i.jsx("div",{className:"notfoundBG",style:{background:`url(${"articles"==s||"tags"==s?"https://reedboss.s3.us-east-2.amazonaws.com/branding/sad+man.png":"https://reedboss.s3.us-east-2.amazonaws.com/branding/no+user.png"})`}}),"articles"==s?i.jsx("h3",{children:"Snap! No Post Found For That Keyword"}):"people"==s?i.jsx("h3",{children:"Snap! No User Found With That Name"}):"tags"==s?i.jsx("h3",{children:"Snap! No Post Found For That Category"}):"","articles"==s||"people"==s?(0,i.jsxs)("p",{children:["Make sure all words are spelled correctly ",i.jsx("br",{})," try searching a more general keyword"]}):"","tags"==s&&(0,i.jsxs)("p",{children:["Make sure all words are spelled correctly ",i.jsx("br",{})," try searching a more general keyword"]}),i.jsx("br",{}),i.jsx(a.default,{href:"/explore",children:i.jsx("button",{className:"btn",children:"Let's try that again"})})]}),"no_post_for_user"==e&&(0,i.jsxs)(i.Fragment,{children:[i.jsx("div",{className:"notfoundBG",style:{background:"url(https://reedboss.s3.us-east-2.amazonaws.com/branding/sad+man.png)"}}),i.jsx("h3",{children:"Snap! This user has not written anything yet"}),(0,i.jsxs)("p",{children:["Try reaching out to them on their social media handles ",i.jsx("br",{})," or check out other users"]}),i.jsx("br",{}),i.jsx(a.default,{href:"/explore",children:i.jsx("button",{className:"btn",children:"Search Users"})}),i.jsx("br",{})]})]})}},38446:(e,s,r)=>{"use strict";r.d(s,{ZP:()=>o});var i=r(68570);let a=(0,i.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\reedboss-client\Components\Promotereedboss.js`),{__esModule:t,$$typeof:n}=a;a.default;let o=(0,i.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\reedboss-client\Components\Promotereedboss.js#default`)},63002:(e,s,r)=>{"use strict";r.d(s,{Z:()=>n});var i=r(19510),a=r(17710);r(71159);let t={src:"/_next/static/media/verified.21253b7c.png",height:2048,width:2048,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEUdm/Ecm/Abm/BMaXEenO4dm/Edm/AenPIdmu/UcogZAAAACXRSTlP+vUAATeOkTWCWFeIkAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nDXLwRHAIBDDQNniSPqvmOHBWyvUVsUVyCcGmEgZ/lDK7obeNJCHl7z9ABRcAI7Rq7XvAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},n=function({size:e=20}){return i.jsx(a.default,{title:"This User Is Verified",src:t,width:e,height:e})}},22583:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>a});var i=r(19510);r(71159),r(48663);let a=function(){return i.jsx("div",{className:"loadingArea"})}},86149:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>C});var i=r(19510);r(71159);var a=r(71821),t=r.n(a);r(81897),r(99979);let n=function({options:e,source:s,searchQuery:r}){return(0,i.jsxs)("div",{className:"optionBar",children:["/"==s?e?.length>0&&e?.map((e,s)=>i.jsx("a",{href:`/${0!==s?`?category=${e}`:""}`,className:"option",children:i.jsx("div",{children:e})},s)):"","/search"==s&&e?.map((e,s)=>i.jsx("a",{href:`/search?q=${r}&class=${e.toLowerCase()}`,className:"option",children:i.jsx("div",{children:e})},s))]})};var o=r(38446),l=r(68570);let c=(0,l.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\reedboss-client\Components\ArticleShowcase.js`),{__esModule:d,$$typeof:u}=c;c.default;let m=(0,l.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\reedboss-client\Components\ArticleShowcase.js#default`);var h=r(95752),p=r(44565),j=r(43388),D=r(57371),x=r(63002);let g=function({user:e,page:s}){return(0,i.jsxs)("div",{className:"userCardContainer",children:[i.jsx("div",{className:"userAvatar",style:{background:`url(${e.avatar})`}}),(0,i.jsxs)("div",{className:"userInfo",children:[(0,i.jsxs)(D.default,{href:`/${e.username}`,children:[(0,i.jsxs)("h3",{children:[e.name," ","1"==e.verified&&i.jsx(x.Z,{})]})," "]}),i.jsx("div",{className:"userIntrests",children:e.interests?.split(",").map((e,s)=>i.jsx("span",{children:e},s))}),i.jsx("p",{className:"userBio",children:e?.bio!==""||e?.bio!==null?(0,j.WK)(e?.bio,10):"No bio available"})]})]})},C=async function({searchParams:e}){let s=[],r=e.q,a=e.class;console.log("API_URL: "+process.env.API_URL);let l=await fetch(`${process.env.API_URL}/posts/index.php?search=${r}&class=${a}`,{next:{revalidate:20}}),c=await l.json();return console.log(c.data),s=c.data,(0,i.jsxs)("div",{className:`${t().className} searchContainer`,children:[(0,i.jsxs)("div",{className:"searchResultContainer",children:[(0,i.jsxs)("h1",{children:["Search Results For ",i.jsx("span",{children:r})]}),i.jsx(n,{options:["Articles","People"],source:"/search",searchQuery:r}),i.jsx("br",{}),s?.length>0?"articles"==a||"tags"==a?(0,i.jsxs)(i.Fragment,{children:[i.jsx(m,{article:s[0]}),i.jsx("br",{}),i.jsx("br",{}),s?.map((e,s)=>i.jsxs("div",{children:[i.jsx(h.ZP,{article:e}),i.jsx("br",{})]},s))]}):s.map((e,s)=>(0,i.jsxs)("div",{children:[i.jsx(g,{user:e}),i.jsx("br",{}),i.jsx("br",{}),i.jsx("br",{})]},s)):i.jsx(p.Z,{reason:"no_search_article",searchClass:a})]}),i.jsx("div",{className:"searchSideBar",children:i.jsx(o.ZP,{})})]})}},43388:(e,s,r)=>{"use strict";r.d(s,{p6:()=>n,OL:()=>c,aS:()=>l,WK:()=>o});var i=r(51744),a=r.n(i);r(68068);let t=[{id:1,name:"Tech",emoji:"\uD83D\uDCBB"},{id:2,name:"Science",emoji:"\uD83D\uDD2C"},{id:3,name:"Health",emoji:"\uD83C\uDFE5"},{id:4,name:"Travel",emoji:"✈️"},{id:5,name:"Food",emoji:"\uD83C\uDF54"},{id:6,name:"Fashion",emoji:"\uD83D\uDC57"},{id:7,name:"Fitness",emoji:"\uD83D\uDCAA"},{id:8,name:"Decor",emoji:"\uD83C\uDFE0"},{id:9,name:"Finance",emoji:"\uD83D\uDCB0"},{id:10,name:"Parenting",emoji:"\uD83D\uDC6A"},{id:11,name:"Self-Improve",emoji:"\uD83D\uDCDA"},{id:12,name:"Art",emoji:"\uD83C\uDFA8"},{id:13,name:"Books",emoji:"\uD83D\uDCD6"},{id:14,name:"Entertainment",emoji:"\uD83C\uDFA5"},{id:15,name:"Sports",emoji:"⚽"},{id:16,name:"Environment",emoji:"\uD83C\uDF3F"},{id:17,name:"Business",emoji:"\uD83D\uDCCA"},{id:18,name:"Photography",emoji:"\uD83D\uDCF7"},{id:19,name:"Music",emoji:"\uD83C\uDFB5"},{id:20,name:"Lifestyle",emoji:"\uD83C\uDF1F"},{id:21,name:"Gaming",emoji:"\uD83C\uDFAE"},{id:22,name:"Beauty",emoji:"\uD83D\uDC84"},{id:23,name:"Education",emoji:"\uD83C\uDF93"},{id:24,name:"Motivation",emoji:"\uD83D\uDD25"},{id:25,name:"Comedy",emoji:"\uD83D\uDE04"},{id:26,name:"Politics",emoji:"\uD83D\uDDF3️"},{id:27,name:"History",emoji:"\uD83D\uDCDC"},{id:28,name:"Crafts",emoji:"✂️"},{id:29,name:"Gardening",emoji:"\uD83C\uDF31"},{id:30,name:"Pets",emoji:"\uD83D\uDC3E"},{id:31,name:"Relationships",emoji:"\uD83D\uDC91"},{id:32,name:"Technology",emoji:"\uD83D\uDCF1"},{id:33,name:"Design",emoji:"\uD83C\uDFA8"},{id:34,name:"Movies",emoji:"\uD83C\uDFAC"},{id:35,name:"Cooking",emoji:"\uD83C\uDF73"},{id:36,name:"Nature",emoji:"\uD83C\uDF33"},{id:37,name:"Writing",emoji:"✍️"},{id:38,name:"Career",emoji:"\uD83D\uDC54"},{id:39,name:"Fitness",emoji:"\uD83D\uDCAA"},{id:40,name:"Inspiration",emoji:"\uD83C\uDF1F"},{id:41,name:"Spirituality",emoji:"\uD83D\uDE4F"},{id:42,name:"Hobbies",emoji:"\uD83C\uDFAF"},{id:43,name:"Artificial Intelligence",emoji:"\uD83E\uDD16"},{id:44,name:"Travel Tips",emoji:"\uD83C\uDF0D"},{id:45,name:"Parenting Tips",emoji:"\uD83D\uDC76"},{id:46,name:"DIY Projects",emoji:"\uD83D\uDD28"},{id:47,name:"Entrepreneurship",emoji:"\uD83D\uDCBC"},{id:48,name:"Photography Tips",emoji:"\uD83D\uDCF8"}];function n(e){let s=a()(),r=a().tz(e,function(){let e=new Date().getTimezoneOffset(),s=a().tz.guess();if(e===a().tz(s).utcOffset())return s;{let r=a().tz.names();for(let s=0;s<r.length;s++)if(a().tz(r[s]).utcOffset()===e)return r[s];return s}}()),i=s.diff(r,"seconds"),t=s.diff(r,"minutes"),n=s.diff(r,"hours"),o=s.diff(r,"days"),l=s.diff(r,"months"),c=s.diff(r,"years");return i<60?`${i} seconds ago`:t<60?`${t} minutes ago`:n<24?`${n} hours ago`:o<30?`${o} days ago`:l<12?`${l} months ago`:`${c} years ago`}function o(e,s){let r=e.split(" ");return r.length<=s?e:r.slice(0,s).join(" ")+"..."}function l(e){let s=t.reduce((e,s)=>(e[s.name]=s.id,e),{});return e.split(",").map(e=>s[e]).filter(e=>void 0!==e).join(",")}function c(e){return(function(e){let s=new Map;for(let r of e)s.set(r.name,r.id);return s})(t).get(e)}},81897:()=>{},77081:()=>{},99979:()=>{}};var s=require("../../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),i=s.X(0,[276,471,578,162,481,511,710,123,77],()=>r(20918));module.exports=i})();