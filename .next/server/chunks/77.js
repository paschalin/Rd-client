exports.id=77,exports.ids=[77],exports.modules={96943:e=>{e.exports={style:{fontFamily:"'__Inter_c5c437', '__Inter_Fallback_c5c437'",fontStyle:"normal"},className:"__className_c5c437",variable:"__variable_c5c437"}},59077:(e,a,t)=>{"use strict";t.d(a,{default:()=>j});var i=t(10326),n=t(17577),s=t(96943),o=t.n(s),d=t(4964),r=t(31025),c=t(36177),m=t(83491),u=t(45173),l=t(90434),p=t(817),D=t(96193),h=t(68587);let j=function({article:e,fromProfilePage:a=!1,session:t}){let[s,j]=(0,n.useState)(!1),f=(0,h.useRouter)();return(0,i.jsxs)("article",{className:"articleCardContainer",children:[(0,i.jsxs)("div",{className:"articleCardHeader",children:[i.jsx(l.default,{href:`/${e.authorUsername}`,children:i.jsx("div",{style:{background:`url(${e.authorAvatar})`},className:"authorAvatar"})}),(0,i.jsxs)(l.default,{href:`/${e.authorUsername}`,children:[i.jsx("p",{className:"authorName",children:e.authorName})," "]}),"1"==e.authorVerified&&i.jsx(p.Z,{})]}),i.jsx("span",{className:"articleDate",children:(0,u.p6)(e.createdAt)}),(0,i.jsxs)("div",{className:"articleCardBody",children:[(0,i.jsxs)("div",{style:{width:`${""==e.coverImage?"100%":"70%"}`},className:"articleCardContent",children:[i.jsx(l.default,{href:`/${e.authorUsername}/${e.slug}`,children:i.jsx("h1",{className:"articleCardTitle",children:e.title})}),i.jsx("div",{className:"articlecategories",children:e?.tags.split(",").slice(0,3).map((e,a)=>i.jsx(l.default,{href:`/search/?q=${e}&class=articles`,children:i.jsx("span",{children:e},e)},a))}),i.jsx(l.default,{href:`/${e.authorUsername}/${e.slug}`,children:i.jsx("p",{className:`articleCardSummary ${o().className}`,children:(0,u.WK)(e.summary,35)})})]}),""!==e.coverImage&&i.jsx("div",{style:{background:`url(${e.coverImage})`},className:"articleCardCoverImage"})]}),i.jsx("div",{className:"Mobilearticlecategories",children:e?.tags.split(",").slice(0,3).map((e,a)=>i.jsx(l.default,{href:`/search/?q=${e}&class=articles`,children:i.jsx("span",{children:e},e)},a))}),(0,i.jsxs)("div",{className:"articleFooter",children:[(0,i.jsxs)("span",{className:"articleReadTime",children:[e?.readTime," mins read time"]}),(0,i.jsxs)("div",{className:"footerActionBtn",children:[i.jsx("span",{children:i.jsx(d.Z,{className:"ftIcon"})})," ",i.jsx("span",{children:i.jsx(m.Z,{className:"ftIcon"})}),i.jsx("span",{onClick:()=>j(!s),children:i.jsx(c.Z,{className:"ftIcon"})})]})]}),a&&t&&t.id==e.authorId&&s&&i.jsx("div",{className:"moreMenu",children:(0,i.jsxs)("span",{className:"moreMenuItem",onClick:()=>{e?.pinned=="true"?(0,D.hW)(e?.id):(0,D.sc)(e?.id),f.refresh(),j(!1)},children:[i.jsx(r.Z,{className:"pinIcon"})," ",e?.pinned=="true"?"Unpin":"Pin"]})})]})}},817:(e,a,t)=>{"use strict";t.d(a,{Z:()=>o});var i=t(10326),n=t(46226);t(17577);var s=t(71414);let o=function({size:e=20}){return i.jsx(n.default,{title:"This User Is Verified",src:s.default,width:e,height:e})}},4964:(e,a,t)=>{"use strict";var i=t(39618);a.Z=void 0;var n=i(t(71133)),s=t(10326),o=(0,n.default)((0,s.jsx)("path",{d:"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15-5-2.18L7 18V5h10v13z"}),"BookmarkBorder");a.Z=o},36177:(e,a,t)=>{"use strict";var i=t(39618);a.Z=void 0;var n=i(t(71133)),s=t(10326),o=(0,n.default)((0,s.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");a.Z=o},31025:(e,a,t)=>{"use strict";var i=t(39618);a.Z=void 0;var n=i(t(71133)),s=t(10326),o=(0,n.default)((0,s.jsx)("path",{d:"M14 4v5c0 1.12.37 2.16 1 3H9c.65-.86 1-1.9 1-3V4h4m3-2H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3V4h1c.55 0 1-.45 1-1s-.45-1-1-1z"}),"PushPinOutlined");a.Z=o},83491:(e,a,t)=>{"use strict";var i=t(39618);a.Z=void 0;var n=i(t(71133)),s=t(10326),o=(0,n.default)((0,s.jsx)("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}),"Share");a.Z=o},22280:(e,a,t)=>{"use strict";t.d(a,{i:()=>i});let i=[{id:1,name:"Tech",emoji:"\uD83D\uDCBB"},{id:2,name:"Science",emoji:"\uD83D\uDD2C"},{id:3,name:"Health",emoji:"\uD83C\uDFE5"},{id:4,name:"Travel",emoji:"✈️"},{id:5,name:"Food",emoji:"\uD83C\uDF54"},{id:6,name:"Fashion",emoji:"\uD83D\uDC57"},{id:7,name:"Fitness",emoji:"\uD83D\uDCAA"},{id:8,name:"Decor",emoji:"\uD83C\uDFE0"},{id:9,name:"Finance",emoji:"\uD83D\uDCB0"},{id:10,name:"Parenting",emoji:"\uD83D\uDC6A"},{id:11,name:"Self-Improve",emoji:"\uD83D\uDCDA"},{id:12,name:"Art",emoji:"\uD83C\uDFA8"},{id:13,name:"Books",emoji:"\uD83D\uDCD6"},{id:14,name:"Entertainment",emoji:"\uD83C\uDFA5"},{id:15,name:"Sports",emoji:"⚽"},{id:16,name:"Environment",emoji:"\uD83C\uDF3F"},{id:17,name:"Business",emoji:"\uD83D\uDCCA"},{id:18,name:"Photography",emoji:"\uD83D\uDCF7"},{id:19,name:"Music",emoji:"\uD83C\uDFB5"},{id:20,name:"Lifestyle",emoji:"\uD83C\uDF1F"},{id:21,name:"Gaming",emoji:"\uD83C\uDFAE"},{id:22,name:"Beauty",emoji:"\uD83D\uDC84"},{id:23,name:"Education",emoji:"\uD83C\uDF93"},{id:24,name:"Motivation",emoji:"\uD83D\uDD25"},{id:25,name:"Comedy",emoji:"\uD83D\uDE04"},{id:26,name:"Politics",emoji:"\uD83D\uDDF3️"},{id:27,name:"History",emoji:"\uD83D\uDCDC"},{id:28,name:"Crafts",emoji:"✂️"},{id:29,name:"Gardening",emoji:"\uD83C\uDF31"},{id:30,name:"Pets",emoji:"\uD83D\uDC3E"},{id:31,name:"Relationships",emoji:"\uD83D\uDC91"},{id:32,name:"Technology",emoji:"\uD83D\uDCF1"},{id:33,name:"Design",emoji:"\uD83C\uDFA8"},{id:34,name:"Movies",emoji:"\uD83C\uDFAC"},{id:35,name:"Cooking",emoji:"\uD83C\uDF73"},{id:36,name:"Nature",emoji:"\uD83C\uDF33"},{id:37,name:"Writing",emoji:"✍️"},{id:38,name:"Career",emoji:"\uD83D\uDC54"},{id:39,name:"Fitness",emoji:"\uD83D\uDCAA"},{id:40,name:"Inspiration",emoji:"\uD83C\uDF1F"},{id:41,name:"Spirituality",emoji:"\uD83D\uDE4F"},{id:42,name:"Hobbies",emoji:"\uD83C\uDFAF"},{id:43,name:"Artificial Intelligence",emoji:"\uD83E\uDD16"},{id:44,name:"Travel Tips",emoji:"\uD83C\uDF0D"},{id:45,name:"Parenting Tips",emoji:"\uD83D\uDC76"},{id:46,name:"DIY Projects",emoji:"\uD83D\uDD28"},{id:47,name:"Entrepreneurship",emoji:"\uD83D\uDCBC"},{id:48,name:"Photography Tips",emoji:"\uD83D\uDCF8"}]},96193:(e,a,t)=>{"use strict";t.d(a,{P_:()=>d,Tc:()=>p,YF:()=>l,fR:()=>D,fX:()=>o,hW:()=>j,li:()=>c,n9:()=>s,nN:()=>m,oE:()=>u,sc:()=>h,up:()=>r});var i=t(57967),n=t.n(i);async function s(e,a){let t=n()().format("YYYY-MM-DD HH:mm:ss"),i=new FormData;i.append("action","likepost"),i.append("postId",e),i.append("userId",a),i.append("date",t);let s=await fetch("/api/posts/actions.php",{method:"POST",body:i});return await s.json()}async function o(e,a,t,i){let s=n()().format("YYYY-MM-DD HH:mm:ss"),o=new FormData;o.append("action","commentpost"),o.append("postId",e),o.append("comment",a),o.append("userId",t),o.append("replyId",i),o.append("date",s);let d=await fetch("/api/posts/actions.php",{method:"POST",body:o});return await d.json()}async function d(e,a){let t=n()().format("YYYY-MM-DD HH:mm:ss"),i=new FormData;i.append("action","followuser"),i.append("followId",e),i.append("userId",a),i.append("date",t);let s=await fetch("/api/users/actions.php",{method:"POST",body:i});return await s.json()}async function r(e,a){let t=new FormData;t.append("action","bookmarkpost"),t.append("postId",e),t.append("userId",a),t.append("date",n()().format("YYYY-MM-DD HH:mm:ss"));let i=await fetch("/api/posts/actions.php",{method:"POST",body:t});return await i.json()}async function c(e){let a=await fetch(`/api/posts/actions.php?data=comments&postId=${e}`);return(await a.json()).data}async function m(e){let a=await fetch(`${process.env.API_URL}/posts/actions.php?data=likes&postId=${e}`);return(await a.json()).data}async function u(e){let a=await fetch(`${process.env.API_URL}/posts/actions.php?data=bookmarks&userId=${e}`);return(await a.json()).data}async function l(e){let a=new FormData;a.append("action","deletecomment"),a.append("commentId",e);let t=await fetch(`/api/posts/actions.php?data=comment&id=${e}`,{method:"POST",body:a});return await t.json()}async function p(e){let a=new FormData;a.append("action","deleteBookmark"),a.append("bookmarkId",e);let t=await fetch("/api/posts/actions.php",{method:"POST",body:a});await t.json()}async function D(e,a){let t=new FormData;t.append("action","deletePost"),t.append("postId",e),t.append("authToken",a);let i=await fetch("/api/posts/actions.php",{method:"POST",body:t});return await i.json()}async function h(e){let a=new FormData;a.append("action","pinPost"),a.append("postId",e);let t=await fetch("/api/posts/actions.php",{method:"POST",body:a}),i=await t.json();return console.log(i),i}async function j(e){let a=new FormData;a.append("action","unpinPost"),a.append("postId",e);let t=await fetch("/api/posts/actions.php",{method:"POST",body:a}),i=await t.json();return console.log(i),i}},45173:(e,a,t)=>{"use strict";t.d(a,{WK:()=>o,p6:()=>s,vQ:()=>d});var i=t(57967),n=t.n(i);function s(e){let a=n()(),t=n().tz(e,function(){let e=new Date().getTimezoneOffset(),a=n().tz.guess();if(e===n().tz(a).utcOffset())return a;{let t=n().tz.names();for(let a=0;a<t.length;a++)if(n().tz(t[a]).utcOffset()===e)return t[a];return a}}()),i=a.diff(t,"seconds"),s=a.diff(t,"minutes"),o=a.diff(t,"hours"),d=a.diff(t,"days"),r=a.diff(t,"months"),c=a.diff(t,"years");return i<60?`${i} seconds ago`:s<60?`${s} minutes ago`:o<24?`${o} hours ago`:d<30?`${d} days ago`:r<12?`${r} months ago`:`${c} years ago`}function o(e,a){let t=e.split(" ");return t.length<=a?e:t.slice(0,a).join(" ")+"..."}t(74162),t(22280);let d=e=>{let a=document.createElement("textarea");a.value=e,a.style.position="fixed",document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a)}},71414:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>i});let i={src:"/_next/static/media/verified.21253b7c.png",height:2048,width:2048,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEUdm/Ecm/Abm/BMaXEenO4dm/Edm/AenPIdmu/UcogZAAAACXRSTlP+vUAATeOkTWCWFeIkAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nDXLwRHAIBDDQNniSPqvmOHBWyvUVsUVyCcGmEgZ/lDK7obeNJCHl7z9ABRcAI7Rq7XvAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}}};