(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7785],{68915:function(a,s,e){Promise.resolve().then(e.bind(e,15533))},15533:function(a,s,e){"use strict";e.r(s);var n=e(57437),t=e(2265);e(95340);var o=e(73589),c=e(57135),i=e.n(c),r=e(12859),l=e(30998),u=e(50936);s.default=function(){let{data:a}=(0,l.useSession)(),[s,e]=(0,t.useState)([]),c=async()=>{let s=await fetch("/api/posts/actions.php?data=bookmarks&userId=".concat(null==a?void 0:a.id)),n=(await s.json()).data;console.log(n),e(n)};(0,t.useEffect)(()=>{c()},[a]);let d=async a=>{await (0,r.Tc)(a),await c()};return(0,n.jsxs)("div",{className:"".concat(i().className," bookmarksContainer"),children:[(0,n.jsxs)("h1",{children:["Your Bookmarks ",(0,n.jsx)(o.Z,{})]}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(null==s?void 0:s.length)>0?s.map((a,s)=>(0,n.jsxs)("div",{children:[(0,n.jsx)("button",{className:"removeBookmarkBtn",onClick:()=>d(a.bookmarkId),children:"Remove Bookmark"}),(0,n.jsx)(u.default,{article:a}),(0,n.jsx)("br",{})]},s)):(0,n.jsx)("p",{children:"You don't have any saved posts"})]})}},73589:function(a,s,e){"use strict";var n=e(23963);s.Z=void 0;var t=n(e(19118)),o=e(57437),c=(0,t.default)((0,o.jsx)("path",{d:"M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"}),"BookmarkOutlined");s.Z=c},95340:function(){}},function(a){a.O(0,[845,8093,3475,6990,7326,8514,3840,998,8173,472,936,2971,7023,1744],function(){return a(a.s=68915)}),_N_E=a.O()}]);