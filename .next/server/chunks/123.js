exports.id=123,exports.ids=[123],exports.modules={11662:()=>{},7292:(e,s,t)=>{Promise.resolve().then(t.bind(t,7605)),Promise.resolve().then(t.bind(t,59526)),Promise.resolve().then(t.bind(t,11929)),Promise.resolve().then(t.bind(t,92676)),Promise.resolve().then(t.bind(t,49690)),Promise.resolve().then(t.t.bind(t,79404,23))},36139:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,12994,23)),Promise.resolve().then(t.t.bind(t,96114,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,79671,23)),Promise.resolve().then(t.t.bind(t,41868,23)),Promise.resolve().then(t.t.bind(t,84759,23))},59526:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>m});var a=t(10326),r=t(17577),i=t(8910);t(22338);var n=t(54620),l=t.n(n),o=t(57967),c=t.n(o),d=t(68587),h=t(77109);let m=()=>{let{data:e}=(0,h.useSession)(),[s,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(1),[m,u]=(0,r.useState)("none"),[p,x]=(0,r.useState)(""),[g,v]=(0,r.useState)(""),[b,j]=(0,r.useState)(!1),f=(0,d.usePathname)(),C=async()=>{if(""==p){alert("Enter your problem / suggestion");return}j(!0);let s=new FormData;s.append("type",m),s.append("problem",p),s.append("reproduction",g),s.append("date",c()().format("YYYY-MM-DD hh:mm:ss")),s.append("page",f),e?s.append("email",e?.email):s.append("email","null");let t=await fetch("http://localhost/scriblo-server/api/utils/Feedback.php",{method:"POST",body:s}),a=await t.json();j(!1),200==a.status?o(3):alert("An error occured, try again")};return(0,a.jsxs)("div",{className:`feedBackContainer ${l().className}`,children:[a.jsx("div",{className:"feedbackBtn",children:(0,a.jsxs)("p",{onClick:()=>t(!s),children:[a.jsx(i.Z,{className:"chatIcon"})," Feedback"]})}),(0,a.jsxs)("div",{className:`feedbackFormContainer ${s?"open":"close"}`,children:[1==n&&(0,a.jsxs)("div",{className:"stageOne",children:[a.jsx("h3",{children:"What's the nature of your feedback?"}),(0,a.jsxs)("div",{className:"feedbackOptions",children:[a.jsx("span",{onClick:()=>{u("technical"),o(2)},children:"Technical"}),a.jsx("span",{onClick:()=>{u("suggestion"),o(2)},children:"Suggestion"}),a.jsx("span",{onClick:()=>{u("bug"),o(2)},children:"Bug"}),a.jsx("span",{onClick:()=>{u("not working"),o(2)},children:"Somethings not working"}),a.jsx("span",{onClick:()=>{u("something else"),o(2)},children:"Something else"})]}),a.jsx("br",{}),a.jsx("span",{onClick:()=>t(!1),className:"close",children:"Close"}),a.jsx("br",{}),a.jsx("small",{children:"NOTE: During development, the feedback button is accessible here. Once the application is stable, it will be relocated to the app's menu."})]}),2==n&&(0,a.jsxs)("div",{className:"stageTwo",children:[a.jsx("div",{className:"stageHeader",children:(0,a.jsxs)("span",{onClick:()=>o(1),children:[" ","<"," back"]})}),"technical"==m||"bug"==m||"not working"==m?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"formField",children:[a.jsx("h3",{children:"What's the problem?"}),a.jsx("textarea",{value:p,onChange:e=>x(e.target.value)})]}),(0,a.jsxs)("div",{className:"formField",children:[a.jsx("h3",{children:"How can we reproduce it?"}),a.jsx("textarea",{value:g,onChange:e=>v(e.target.value)})]})]}):a.jsx(a.Fragment,{children:(0,a.jsxs)("div",{className:"formField",children:[a.jsx("h3",{children:"How can we make Scriblo better?"}),a.jsx("textarea",{value:p,onChange:e=>x(e.target.value)})]})}),a.jsx("button",{className:"submitBtn",onClick:()=>C(),children:b?"loading...":"Submit Feedback"})]}),3==n&&(0,a.jsxs)("div",{className:"stageThree",children:[a.jsx("h3",{children:"Feedback Received ✅"}),a.jsx("p",{children:"Thanks for your contribution to make scriblo better. Our team will use the information provided to make scriblo better."}),a.jsx("button",{onClick:()=>t(!1),className:"closeBtn",children:"Close"})]})]})]})}},11929:(e,s,t)=>{"use strict";t.d(s,{default:()=>m});var a=t(10326),r=t(17577),i=t(77109),n=t(90434),l=t(54620),o=t.n(l);t(62263),t(7605);var c=t(68587),d=t(5420);t(87123);let h=function({size:e}){return a.jsx("div",{class:"loader-container",style:{width:"small"==e&&"30px",height:"small"==e&&"30px"},children:a.jsx("div",{class:"loader"})})},m=function(){let{data:e,update:s}=(0,i.useSession)(),[t,l]=(0,r.useState)(!1),m=(0,c.useRouter)(),u=e=>{13===e.keyCode&&(e.preventDefault(),m.push(`/search?q=${e.target.value}&class=articles`))};return(0,a.jsxs)("div",{className:"navigation",children:[(0,a.jsxs)("div",{className:"logoSearch",children:[a.jsx(n.default,{href:"/",children:a.jsx("div",{className:"navigation__logo"})}),a.jsx("div",{className:"navSearch",children:a.jsx("input",{type:"search",placeholder:"Search Scriblo",onKeyUp:e=>u(e)})})]}),(0,a.jsxs)("div",{className:"navigation__menu",children:[void 0===e&&a.jsx("div",{style:{marginRight:50},children:a.jsx(h,{size:"small"})}),null===e&&(0,a.jsxs)("div",{className:`authButtons ${o().className}`,children:[a.jsx(n.default,{href:"/explore",className:"mobileSearchIcon",children:(0,a.jsxs)("span",{children:[a.jsx(d.Z,{className:"searchIcon"})," "]})}),a.jsx(n.default,{href:"/signup",children:a.jsx("button",{className:"getStartedButton",children:"Get Started"})})]}),e&&(0,a.jsxs)("div",{className:"userProfile",children:[(0,a.jsxs)(n.default,{href:"/create",children:[a.jsx("button",{className:"btn newPostBtn",style:{width:150,height:38},children:"Create Post"})," "]}),a.jsx(n.default,{href:"/explore",className:"mobileSearchIcon",children:(0,a.jsxs)("span",{children:[a.jsx(d.Z,{className:"searchIcon"})," "]})}),a.jsx("div",{style:{background:`url(${e?.avatar})`},className:"userProfile__avatar",onClick:()=>l(!t)}),t&&(0,a.jsxs)("div",{className:`profileMenu ${o().className}`,children:[a.jsx(n.default,{onClick:()=>l(!1),className:"menuItem",href:`/${e?.username}`,children:"View Profile"}),a.jsx(n.default,{onClick:()=>l(!1),className:"menuItem",href:`/${e?.username}/articles`,children:"Articles"}),a.jsx("span",{onClick:()=>alert("coming soon"),className:"menuItem",children:"Stats"}),a.jsx(n.default,{onClick:()=>l(!1),className:"menuItem",href:"/create",children:"Create Post"}),a.jsx(n.default,{onClick:()=>l(!1),className:"menuItem",href:`/${e?.username}/bookmarks`,children:"Saved Post"}),a.jsx(n.default,{onClick:()=>l(!1),className:"menuItem",href:`/${e?.username}/settings`,children:"Settings"}),a.jsx("hr",{}),a.jsx("span",{className:"menuItem",onClick:()=>(0,i.signOut)(),children:"Sign Out"})]})]})]})]})}},92676:(e,s,t)=>{"use strict";t.d(s,{default:()=>i});var a=t(10326),r=t(77109);let i=({children:e})=>a.jsx(r.SessionProvider,{children:e})},7605:(e,s,t)=>{"use strict";t.d(s,{AppContexProvider:()=>n});var a=t(10326),r=t(17577);let i=(0,r.createContext)({}),n=({children:e})=>{let[s,t]=(0,r.useState)("DEMO"),[n,l]=(0,r.useState)("SIDE");return a.jsx(i.Provider,{value:{demo:s,setdemo:t,side:n,setside:l},children:e})}},61795:(e,s,t)=>{"use strict";t.d(s,{ZP:()=>l});var a=t(68570);let r=(0,a.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\scriblo-client\Components\Provider.js`),{__esModule:i,$$typeof:n}=r;r.default;let l=(0,a.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\scriblo-client\Components\Provider.js#default`)},40598:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>j,metadata:()=>b});var a=t(19510),r=t(42561),i=t.n(r),n=t(68570);let l=(0,n.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\scriblo-client\Components\Navigation.js`),{__esModule:o,$$typeof:c}=l;l.default;let d=(0,n.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\scriblo-client\Components\Navigation.js#default`);t(67272);var h=t(61795),m=t(20368);let u=(0,n.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\scriblo-client\Components\FeedBack.js`),{__esModule:p,$$typeof:x}=u;u.default,(0,n.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\scriblo-client\Components\FeedBack.js#default`);var g=t(57371),v=t(36674);let b={title:"Scriblo | Empowering Writers",description:"Discover a powerful and intuitive blogging platform that empowers writers to share their ideas with the world. Our application provides a seamless user experience, advanced collaboration features, and a thriving community. Join our waitlist today and be the first to experience the future of blogging.",alternates:{canonical:`${process.env.APP_URL}`},twitter:{card:"summary_large_image",title:"Scriblo | Empowering Writers",description:"Discover a powerful and intuitive blogging platform that empowers writers to share their ideas with the world. Our application provides a seamless user experience, advanced collaboration features, and a thriving community. Join our waitlist today and be the first to experience the future of blogging.",siteId:"1467726470533754880",creator:"@myscriblo",creatorId:"1467726470533754880",images:[{url:"https://scriblo.s3.us-east-2.amazonaws.com/branding/brand_logo_black.png",alt:"Scriblo | Empowering Writers"}]},openGraph:{title:"Scriblo | Empowering Writers",description:"Discover a powerful and intuitive blogging platform that empowers writers to share their ideas with the world. Our application provides a seamless user experience, advanced collaboration features, and a thriving community. Join our waitlist today and be the first to experience the future of blogging.",url:`${process.env.APP_URL}`,siteName:"Scriblo",images:[{url:"https://scriblo.s3.us-east-2.amazonaws.com/branding/brand_logo_black.png",alt:"Scriblo"}],locale:"en_US",type:"website"}};function j({children:e}){return a.jsx("html",{lang:"en",children:(0,a.jsxs)("body",{style:{position:"relative"},className:i().className,children:[a.jsx(g.default,{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),a.jsx(g.default,{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),a.jsx(g.default,{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),a.jsx(m.v,{children:(0,a.jsxs)(h.ZP,{children:[a.jsx(d,{}),e,a.jsx(v.c,{})]})})]})})}},68392:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});var a=t(19510);t(71159),t(48663);let r=function(){return a.jsx("div",{className:"loadingArea"})}},20368:(e,s,t)=>{"use strict";t.d(s,{v:()=>l});var a=t(68570);let r=(0,a.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\scriblo-client\app\contex\store.js`),{__esModule:i,$$typeof:n}=r;r.default;let l=(0,a.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\scriblo-client\app\contex\store.js#AppContexProvider`);(0,a.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\scriblo-client\app\contex\store.js#useAppContex`)},22338:()=>{},87123:()=>{},48663:()=>{},62263:()=>{},67272:()=>{}};