(()=>{var e={};e.id=777,e.ids=[777],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},66936:e=>{"use strict";e.exports=require("@aws-sdk/client-s3")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},63477:e=>{"use strict";e.exports=require("querystring")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},42561:e=>{e.exports={style:{fontFamily:"'__Merriweather_9cb816', '__Merriweather_Fallback_9cb816'",fontStyle:"normal"},className:"__className_9cb816",variable:"__variable_9cb816"}},47096:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>o}),t(71648),t(23261),t(47178),t(40598),t(68392),t(35866);var a=t(23191),r=t(88716),n=t(37922),i=t.n(n),l=t(95231),c={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>l[e]);t.d(s,c);let o=["",{children:["(main)",{children:["[username]",{children:["settings",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,71648)),"C:\\Users\\MACHI\\Desktop\\machi p\\rd\\scriblo-client\\app\\(main)\\[username]\\settings\\page.js"]}]},{loading:[()=>Promise.resolve().then(t.bind(t,23261)),"C:\\Users\\MACHI\\Desktop\\machi p\\rd\\scriblo-client\\app\\(main)\\[username]\\settings\\loading.js"]}]},{loading:[()=>Promise.resolve().then(t.bind(t,47178)),"C:\\Users\\MACHI\\Desktop\\machi p\\rd\\scriblo-client\\app\\(main)\\[username]\\loading.js"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,40598)),"C:\\Users\\MACHI\\Desktop\\machi p\\rd\\scriblo-client\\app\\(main)\\layout.js"],loading:[()=>Promise.resolve().then(t.bind(t,68392)),"C:\\Users\\MACHI\\Desktop\\machi p\\rd\\scriblo-client\\app\\(main)\\loading.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"]}]},{"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Users\\MACHI\\Desktop\\machi p\\rd\\scriblo-client\\app\\(main)\\[username]\\settings\\page.js"],u="/(main)/[username]/settings/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/(main)/[username]/settings/page",pathname:"/[username]/settings",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},73607:(e,s,t)=>{Promise.resolve().then(t.bind(t,48947))},15221:(e,s,t)=>{"use strict";t.d(s,{Z:()=>i});var a=t(10326);t(17577),t(16427),t(89048);var r=t(77109),n=t(68587);let i=function({children:e}){let{data:s}=(0,r.useSession)({required:!0,onUnauthenticated(){(0,n.redirect)("/signup")}});return a.jsx(a.Fragment,{children:s&&e})}},95633:(e,s,t)=>{"use strict";t.d(s,{Z:()=>c});var a=t(10326),r=t(17577);t(84973);var n=t(79923),i=t(28444),l=t(90434);let c=function({closePopup:e,popupContent:s,user:t,previewArticleDetails:c,copyPreviewLink:o,updateProfile:d}){let[u,p]=(0,r.useState)(t?.name),[m,h]=(0,r.useState)(t?.username),[x,v]=(0,r.useState)(t?.url),[j,g]=(0,r.useState)(t?.bio),[C,f]=(0,r.useState)(t?.avatar),[_,b]=(0,r.useState)(null),[N,y]=(0,r.useState)(!1),w=(0,r.useRef)(null),P=()=>{d({name:u,bio:j,url:x,username:m,file:_})};return(0,a.jsxs)("div",{className:"popupContainer",style:{height:"followList"==s&&"100%"},children:[a.jsx("div",{className:"popupcloserdiv",onClick:()=>e()}),(0,a.jsxs)("div",{className:"popupContent",children:["editProfile"===s&&(0,a.jsxs)("div",{className:"editProfilePopup",children:[(0,a.jsxs)("div",{className:"popupHeader",children:[a.jsx("h3",{children:"Profile Information"}),a.jsx("span",{onClick:()=>e(),children:a.jsx(n.Z,{})})]}),(0,a.jsxs)("div",{className:"updatePhoto",children:[a.jsx("div",{style:{background:`url(${C})`},className:"currentProfilePhoto"}),(0,a.jsxs)("div",{className:"photoActions",children:[a.jsx("span",{onClick:()=>w.current.click(),children:"Update"})," ",a.jsx("span",{children:"Remove"})]}),N&&a.jsx("span",{style:{cursor:"pointer"},onClick:()=>{f(t?.avatar),y(!1),b(null)},children:"revert"}),a.jsx("input",{type:"file",name:"profilephoto",id:"profilephoto",ref:w,style:{display:"none"},accept:"image/jpeg, image/png",onChange:e=>{let s=e.target.files[0];f(URL.createObjectURL(s)),b(s),y(!0)}})]}),(0,a.jsxs)("div",{className:"updateField",children:[a.jsx("span",{children:"Name"}),a.jsx("input",{type:"text",placeholder:"Enter updated name",value:u,onChange:e=>p(e.target.value)}),a.jsx("small",{children:"Appears on your profile"})]}),(0,a.jsxs)("div",{className:"updateField",children:[a.jsx("span",{children:"username"}),a.jsx("input",{type:"text",placeholder:"Enter updated username",value:m,onChange:e=>h(e.target.value)}),a.jsx("small",{children:"Appears on your profile"})]}),(0,a.jsxs)("div",{className:"updateField",children:[a.jsx("span",{children:"Bio"}),a.jsx("textarea",{type:"text",placeholder:"Enter Bio",value:j,onChange:e=>g(e.target.value)}),a.jsx("small",{children:"Appears on your profile"})]}),(0,a.jsxs)("div",{className:"updateField",children:[a.jsx("span",{children:"Bio URL"}),a.jsx("input",{type:"text",placeholder:"Enter Bio URL (https://example.com)",value:x,onChange:e=>v(e.target.value)}),a.jsx("small",{children:"Appears on your profile"})]}),(0,a.jsxs)("div",{className:"updateProfileBtns",children:[a.jsx("button",{onClick:()=>e(),className:"cancel",children:"Cancel"}),a.jsx("button",{className:"save",onClick:()=>P(),children:"Save"})]})]}),"previewCodeUrl"===s&&(0,a.jsxs)("div",{className:"editProfilePopup previewCodeUrlPopup",children:[a.jsx("h1",{className:"previewCodeUrlTitle",children:"Your Preview Link Is Ready!"}),a.jsx("p",{children:"Share this link with friends/editors to look at your article."}),a.jsx("span",{className:"previewCodeText",children:"Preview Code"}),a.jsx("p",{className:"previewCode",children:c.code}),a.jsx("span",{className:"previewLink",children:c.url}),a.jsx("small",{children:"*You can still access these details in your Drafts page."}),(0,a.jsxs)("div",{className:"previewCodeUrlBtns",children:[(0,a.jsxs)("button",{onClick:()=>o(c.url),children:[" ",a.jsx(i.Z,{})," Copy Url"]}),a.jsx(l.default,{href:"/",children:(0,a.jsxs)("button",{className:"cancelBtn",onClick:()=>e(),children:[" ","Close"]})})]})]}),"followList"===s&&(0,a.jsxs)("div",{className:"followsContainer",children:[(0,a.jsxs)("div",{className:"followsHeader",children:[a.jsx("span",{children:"Followers"}),a.jsx("span",{children:"x"})]}),(0,a.jsxs)("div",{className:"followItem",children:[a.jsx("div",{className:"followAvatar"}),(0,a.jsxs)("div",{className:"followInfo",children:[a.jsx("span",{className:"followName",children:"Demo Name"}),a.jsx("span",{className:"followUsername",children:"@demoUsername"})]}),a.jsx("div",{className:"followActionBtn",children:"Action"})]})]})]})]})}},48947:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>m});var a=t(10326);t(86161);var r=t(17577),n=t(54620),i=t.n(n),l=t(15221),c=t(95633),o=t(66936),d=t(77109),u=t(68587);t(91191);let p=function(){return a.jsx("div",{className:"loadingArea"})},m=function({params:e}){let{data:s,update:t}=(0,d.useSession)(),[n,m]=(0,r.useState)({}),[h,x]=(0,r.useState)("account"),[v,j]=(0,r.useState)(!1),[g,C]=(0,r.useState)(""),[f,_]=(0,r.useState)(!1),b=(0,r.useRef)(null);(0,u.useRouter)();let[N,y]=(0,r.useState)(n?.name),[w,P]=(0,r.useState)(n?.username),[A,S]=(0,r.useState)(n?.url),[E,k]=(0,r.useState)(n?.bio),U=async e=>{let s=process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,t=process.env.NEXT_PUBLIC_AWS_BUCKET_REGION,a=process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,r=process.env.NEXT_PUBLIC_AWS_SECRET_KEY,i=new o.S3Client({region:t,credentials:{accessKeyId:a,secretAccessKey:r}}),l={Bucket:s,Key:`avatars/${n?.email}_avatar.jpg`,Body:e,contentType:"image/jpeg"},c=new o.PutObjectCommand(l);await i.send(c)},I=async e=>{let s=process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,t=process.env.NEXT_PUBLIC_AWS_BUCKET_REGION,a=process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,r=process.env.NEXT_PUBLIC_AWS_SECRET_KEY,n=new o.S3Client({region:t,credentials:{accessKeyId:a,secretAccessKey:r}}),i={Bucket:s,Key:`images/${T(e)}.jpg`},l=new o.DeleteObjectCommand(i),c=await n.send(l);return console.log(c),c.$metadata},T=e=>{let s=e.split("/");return s[s.length-1].split(".")[0]},B=async()=>{let e=await fetch(`/api/users/actions.php?action=getUser&username=${s?.username}`),t=await e.json();m(t=t.data),y(t?.name),P(t?.username),k(t?.bio),S(t?.url)},M=async e=>{let a=new FormData;if(console.log(e),_(!0),b.current=n?.avatar,null!==e.file){var r;await I(n?.avatar),await U(e.file),b.current=(r=`${n?.email}_avatar`,`https://scriblo.s3.us-east-2.amazonaws.com/avatars/${r}.jpg`)}e.username=e.username.replaceAll(" ",""),a.append("action","updateProfile"),a.append("userId",s?.id),a.append("name",e.name),a.append("username",e.username),a.append("bio",e.bio),a.append("url",e.url),a.append("avatar",b.current),a.append("allowEmails",n?.allowEmails);let i=await fetch("/api/users/actions.php",{method:"POST",body:a});console.log(await i.json()),await t({...s,name:e.name,username:e.username,bio:e.bio,url:e.url,avatar:b.current}),_(!1),alert("Profile Updated, refresh page to see changes"),j(!1),B()};return f?a.jsx(p,{}):a.jsx(l.Z,{children:(0,a.jsxs)("div",{className:`settingsContainer ${i().className}`,children:[v&&a.jsx(c.Z,{closePopup:()=>j(!1),popupContent:g,user:n,updateProfile:M,setloading:_,setupdateUsername:P}),(0,a.jsxs)("div",{className:"settingsWrapper",children:[a.jsx("h1",{className:"settingsHeaderText",children:"Settings"}),(0,a.jsxs)("div",{className:"SettingsTabs",children:[a.jsx("span",{className:`settingsTab ${"account"===h?"activeTab":""}`,onClick:()=>x("account"),children:"Account"}),a.jsx("span",{className:`settingsTab ${"publishing"===h?"activeTab":""}`,onClick:()=>x("publishing"),children:"Publishing"}),a.jsx("span",{className:`settingsTab ${"notification"===h?"activeTab":""}`,onClick:()=>x("notification"),children:"Notifications"})]}),(0,a.jsxs)("div",{className:"settingsContent",children:["account"===h&&(0,a.jsxs)(a.Fragment,{children:[a.jsx("button",{onClick:()=>{C("editProfile"),j(!0)},className:"btn",style:{marginBottom:10,width:100},children:"Edit Profile"}),(0,a.jsxs)("div",{onClick:()=>{C("editProfile"),j(!0)},className:"accountField",children:[a.jsx("span",{children:"Email Address"}),a.jsx("span",{children:n?n.email:"..."})]}),(0,a.jsxs)("div",{className:"accountField",children:[a.jsx("span",{children:"Username"}),(0,a.jsxs)("span",{children:["@",n?n.username:"..."]})]}),(0,a.jsxs)("div",{className:"accountField",children:[a.jsx("span",{children:"Bio"}),a.jsx("span",{children:"Edit"})]}),(0,a.jsxs)("div",{className:"deleteAccount",children:[a.jsx("span",{children:"Delete Account"}),a.jsx("small",{children:"Permanently delete you account and all it's content including articles and comments"})]})]}),"publishing"===h&&a.jsx("h4",{children:"Accessibility Feature Coming Soon"}),"notification"===h&&a.jsx("h4",{children:"Accessibility Feature Coming Soon"})]})]})]})})}},16427:(e,s,t)=>{"use strict";t.d(s,{Lz:()=>c});var a=t(89675),r=t.n(a),n=t(45443),i=t(17456);let l=process.env.API_URL,c={session:{strategy:"jwt"},providers:[(0,n.Z)({clientId:process.env.GOOGLE_CLIENT_ID,clientSecret:process.env.GOOGLE_CLIENT_SECRET}),(0,i.Z)({name:"Credentials",async authorize(e){let{email:s,token:t}=e,a=await fetch(`${l}/users/index.php?email=${s}&with=token`,{method:"GET",headers:{Authorization:"Bearer "+t}}),r=await a.json();return 200==r.status&&r.data?r.data:null}})],callbacks:{async signIn(e){if("google"==e.account.provider){let s=await fetch(`${l}/users/checkIfUserExists.php?email=${e?.user?.email}`);return!1!==(await s.json()).message||`/signup?continue=true&email=${e?.user?.email}&name=${e?.user?.name}&image=${e?.user?.image}`}return{hello:"world"}},jwt:async({token:e,user:s,trigger:t,session:a})=>{if(s){let t=await fetch(`${l}/users/index.php?email=${s?.email}&with=token`),a=await t.json();if(console.log("response: "+a),200!==a.status)return e;e={...e,...a.data}}return"update"===t&&e?{...e,...a}:e},session:async({session:e,token:s})=>s}};r()(c)},79923:(e,s,t)=>{"use strict";var a=t(39618);s.Z=void 0;var r=a(t(71133)),n=t(10326),i=(0,r.default)((0,n.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}),"CloseOutlined");s.Z=i},28444:(e,s,t)=>{"use strict";var a=t(39618);s.Z=void 0;var r=a(t(71133)),n=t(10326),i=(0,r.default)((0,n.jsx)("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}),"InsertLink");s.Z=i},5420:(e,s,t)=>{"use strict";var a=t(39618);s.Z=void 0;var r=a(t(71133)),n=t(10326),i=(0,r.default)((0,n.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");s.Z=i},8910:(e,s,t)=>{"use strict";t.d(s,{Z:()=>n});var a=t(87732),r=t(10326);let n=(0,a.Z)((0,r.jsx)("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"}),"Chat")},47178:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});var a=t(19510);t(71159),t(48663);let r=function(){return a.jsx("div",{className:"loadingArea"})}},23261:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});var a=t(19510);t(71159),t(48663);let r=function(){return a.jsx("div",{className:"loadingArea"})}},71648:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>i,__esModule:()=>n,default:()=>l});var a=t(68570);let r=(0,a.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\scriblo-client\app\(main)\[username]\settings\page.js`),{__esModule:n,$$typeof:i}=r;r.default;let l=(0,a.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\scriblo-client\app\(main)\[username]\settings\page.js#default`)},57371:(e,s,t)=>{"use strict";t.d(s,{default:()=>r.a});var a=t(670),r=t.n(a)},670:(e,s,t)=>{"use strict";let{createProxy:a}=t(68570);e.exports=a("C:\\Users\\MACHI\\Desktop\\machi p\\rd\\scriblo-client\\node_modules\\next\\dist\\client\\link.js")},91191:()=>{},84973:()=>{},86161:()=>{},49690:(e,s,t)=>{"use strict";t.d(s,{Analytics:()=>a}),t(17577);function a(e){return null}},36674:(e,s,t)=>{"use strict";t.d(s,{c:()=>l});var a=t(68570);let r=(0,a.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\scriblo-client\node_modules\@vercel\analytics\dist\react\index.mjs`),{__esModule:n,$$typeof:i}=r;r.default;let l=(0,a.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\scriblo-client\node_modules\@vercel\analytics\dist\react\index.mjs#Analytics`);(0,a.createProxy)(String.raw`C:\Users\MACHI\Desktop\machi p\rd\scriblo-client\node_modules\@vercel\analytics\dist\react\index.mjs#track`)}};var s=require("../../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),a=s.X(0,[276,471,578,540,123],()=>t(47096));module.exports=a})();