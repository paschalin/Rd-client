(()=>{var e={};e.id=516,e.ids=[516],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},63477:e=>{"use strict";e.exports=require("querystring")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},37604:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c}),r(96646),r(47178),r(40598),r(68392),r(35866);var t=r(23191),n=r(88716),a=r(37922),o=r.n(a),i=r(95231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(s,l);let c=["",{children:["(main)",{children:["[username]",{children:["followers",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,96646)),"C:\\Users\\MACHI\\Desktop\\machi p\\rd\\scriblo-client\\app\\(main)\\[username]\\followers\\page.js"]}]},{}]},{loading:[()=>Promise.resolve().then(r.bind(r,47178)),"C:\\Users\\MACHI\\Desktop\\machi p\\rd\\scriblo-client\\app\\(main)\\[username]\\loading.js"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,40598)),"C:\\Users\\MACHI\\Desktop\\machi p\\rd\\scriblo-client\\app\\(main)\\layout.js"],loading:[()=>Promise.resolve().then(r.bind(r,68392)),"C:\\Users\\MACHI\\Desktop\\machi p\\rd\\scriblo-client\\app\\(main)\\loading.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Users\\MACHI\\Desktop\\machi p\\rd\\scriblo-client\\app\\(main)\\[username]\\followers\\page.js"],u="/(main)/[username]/followers/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new t.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/(main)/[username]/followers/page",pathname:"/[username]/followers",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},67757:(e,s,r)=>{Promise.resolve().then(r.bind(r,59077)),Promise.resolve().then(r.bind(r,11491)),Promise.resolve().then(r.bind(r,42019)),Promise.resolve().then(r.bind(r,72809)),Promise.resolve().then(r.t.bind(r,79404,23))},11491:(e,s,r)=>{"use strict";r.d(s,{default:()=>o});var t=r(10326);r(17577);var n=r(817),a=r(90434);let o=function({user:e,profileId:s,userId:r,type:o}){return(0,t.jsxs)("div",{className:"followItem",children:[t.jsx("div",{style:{background:`url(${e.avatar})`},className:"followAvatar"}),t.jsx(a.default,{href:`/${e?.username}`,children:(0,t.jsxs)("div",{className:"followInfo",children:[(0,t.jsxs)("span",{className:"followName",children:[e.name," ","1"==e.verified&&t.jsx(n.Z,{size:20})]}),(0,t.jsxs)("span",{className:"followUsername",children:["@",e.username]})]})}),r==s&&t.jsx("button",{onClick:()=>alert("Currently In Developement"),className:"followActionBtn",children:"following"==o?"unfollow":"remove"})]})}},60209:(e,s,r)=>{"use strict";r.d(s,{ZP:()=>i});var t=r(68570);let n=(0,t.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\scriblo-client\Components\FollowUserCard.js`),{__esModule:a,$$typeof:o}=n;n.default;let i=(0,t.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\scriblo-client\Components\FollowUserCard.js#default`)},96646:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>h,generateMetadata:()=>x});var t=r(19510);r(71159),r(46666);var n=r(7005),a=r(71821),o=r.n(a),i=r(75571),l=r(66291),c=r(89567),d=r(44565),u=r(95752),p=r(57371),m=r(60209);let x=async e=>{let{params:s}=e,r=await fetch(`${process.env.API_URL}/users/actions.php?action=getUser&username=${s.username}`),t=(await r.json()).data;return t?{title:t.name,desciption:""!==t.bio?t.bio:t.name,alternates:{canonical:`${process.env.APP_URL}${s.username}`},twitter:{card:"summary_large_image",title:t.name,description:""!==t.bio?t.bio:t.name,siteId:"1467726470533754880",creator:"@myscriblo",creatorId:"1467726470533754880",images:[{url:t.avatar,alt:t.name}]},openGraph:{title:t.name,description:""!==t.bio?t.bio:t.name,url:`${process.env.APP_URL}${t.authorUsername}`,siteName:"Scriblo",images:[{url:t.avatar,alt:t.name}],locale:"en_US",type:"website"}}:{title:"User Not Found",description:"The user you are looking for was not found"}},h=async function({params:e}){let s=await (0,i.getServerSession)(l.authOptions),r=await fetch(`${process.env.API_URL}/users/actions.php?action=getUser&username=${e.username}`),a=(await r.json()).data,x=await fetch(`${process.env.API_URL}/posts/actions.php?data=posts_username&username=${e.username}`),h=await x.json(),f=h.data?.filter(e=>"1"!==e.isHidden),v=await fetch(`${process.env.API_URL}/users/actions.php?action=getUserFollows&userId=${a?.id}`),j=(await v.json()).data;console.log(j);let g=!1;return s?.id&&console.log(g=j.followers.some(e=>e.user_id==s?.id)),(0,t.jsxs)("div",{className:`profileContainer ${o().className}`,children:[t.jsx(p.default,{href:`/${a?.username}`,children:t.jsx("div",{className:"followsOverlayCloser"})}),(0,t.jsxs)("div",{className:"followsContainer",children:[(0,t.jsxs)("div",{className:"followsHeader",children:[t.jsx("span",{className:"headerText",children:"Followers"}),t.jsx("span",{className:"closeFollows",children:t.jsx(p.default,{href:`/${a?.username}`,children:"x"})})]}),t.jsx("div",{className:"followWrapper",children:j.followers.length>0&&j.followers.map(e=>t.jsx(t.Fragment,{children:t.jsx(m.ZP,{user:e.user_details,profileId:a.id,userId:s?.id,type:"follower"})}))})]}),t.jsx("div",{className:"profileContainerWrapper",children:null!==a?(0,t.jsxs)("div",{children:[t.jsx(n.ZP,{session:s,profile:a,follows:j,ServerdoesSignedInUserFollowProfile:g}),(0,t.jsxs)("div",{style:{padding:40},children:[t.jsx(c.ZP,{pinnedArticles:f?.filter(e=>"true"==e.pinned)}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("h3",{children:"Articles"}),t.jsx("br",{}),t.jsx("br",{}),f?.length>0?f.map((e,s)=>(0,t.jsxs)(t.Fragment,{children:[t.jsx(u.ZP,{article:e},s),t.jsx("br",{})]})):t.jsx(d.Z,{reason:"no_post_for_user"})]})]}):"NO USER FOUND"})]})}}};var s=require("../../../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),t=s.X(0,[276,471,578,162,481,734,123,77,116],()=>r(37604));module.exports=t})();