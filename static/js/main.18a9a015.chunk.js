(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{207:function(e,t,a){e.exports=a(368)},212:function(e,t,a){},368:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(41),o=a.n(l),c=(a(212),a(45)),u=a.n(c),i=a(79),m=a(53),s=a(44),d=a(373),f=function(e){return r.a.createElement("header",null,r.a.createElement("h1",{style:{padding:"1rem 0"}},"Search Github Repositories"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a=t.target[0].value.trim();""!==a&&(e.fetchRepos(a),t.target.reset())}},r.a.createElement(d.a,{type:"text",placeholder:"Topic",icon:"search"})))},p=a(54),E=a(382),h=a(379),v=a(176),g=a(380),b=a(376),y=a(177),k=a(377),_=a(381),C=a(374),w=function(){return r.a.createElement(_.a,{active:!0,inverted:!0},r.a.createElement(C.a,{size:"massive"},"Loading"))},j=function(e){return new Date(e).toLocaleString()},x=function(e){if(void 0===e.data||void 0===e.data.commits)return r.a.createElement(w,null);var t=!!e.data.commits.message;return r.a.createElement(k.a,null,t?"No commits were found.":e.data.commits.map(function(e){var t=e.commit,a=null!==e.author;return r.a.createElement(k.a.Event,{key:Math.random()},r.a.createElement(k.a.Label,null,r.a.createElement("img",{src:a?e.author.avatar_url:"",alt:"The person's avatar"})),r.a.createElement(k.a.Content,null,r.a.createElement(k.a.Summary,null,r.a.createElement(k.a.User,{href:a?e.author.html_url:"#",target:a?"blank":""},t.author.name)," committed on",r.a.createElement(k.a.Date,null,j(t.author.date))),r.a.createElement(k.a.Meta,null,t.message)))}))},O=a(383),M=a(378),L=function(e){var t=e.comments;return t.length>0?r.a.createElement(M.a.Group,null,t.map(function(e){return r.a.createElement(M.a,{key:e.id},r.a.createElement(M.a.Avatar,{src:e.user.avatar_url}),r.a.createElement(M.a.Content,null,r.a.createElement(M.a.Author,{as:"a",href:e.user.html_url,target:"blank"},e.user.login,"NONE"!==e.author_association?r.a.createElement(v.a,{style:{marginLeft:"0.5rem"}},e.author_association):null),r.a.createElement(M.a.Metadata,null,r.a.createElement("div",null,j(e.created_at))),r.a.createElement(M.a.Text,null,e.body),r.a.createElement(M.a.Actions,null,r.a.createElement(M.a.Action,{href:e.html_url,target:"blank"},"Reply"))))})):"No issue selected for comments."},A=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),l=a[0],o=a[1];if(void 0===e.data||void 0===e.data.issues)return r.a.createElement(w,null);var c=0===e.data.issues.length;return r.a.createElement(k.a,null,e.data.issues.map(function(e){return r.a.createElement(k.a.Event,{key:e.id},r.a.createElement(k.a.Label,{image:e.user.avatar_url}),r.a.createElement(k.a.Content,null,r.a.createElement(k.a.Summary,null,r.a.createElement("a",{href:e.user.html_url},e.user.login," ",e.user.site_admin?r.a.createElement(v.a,{color:"blue"},"Admin"):null)," posted an issue: ",e.title," \xa0",r.a.createElement(v.a,{color:"open"===e.state?"green":"red"},e.state),e.locked?r.a.createElement(v.a,{color:"red"},"locked"):null,r.a.createElement(k.a.Date,null,"Created: ",j(e.created_at)," | Updated: ",j(e.updated_at))),r.a.createElement(k.a.Extra,{text:!0},function(e){var t=[];return e.split("```").forEach(function(e,a){a%2!==0&&""!==e?t.push(r.a.createElement("pre",{key:a,style:{background:"#f5f5f5",padding:"0.5rem",borderRadius:"7px"}},e)):t.push(r.a.createElement("div",{key:a},e))}),t}(e.body)),r.a.createElement(k.a.Meta,null,void 0!==e.pull_request?r.a.createElement("a",{href:e.pull_request.html_url,target:"blank"},"Pull"):null,r.a.createElement("a",{href:"#comments",onClick:function(){return t=e.comments_url,void fetch(t).then(function(e){return e.json()}).then(function(e){return o(e)});var t}},"Comments (",e.comments,")"))))}),c?"No issues were found.":null,r.a.createElement(O.a,{as:"h1",id:"comments",dividing:!0},"Comments"),r.a.createElement(L,{comments:l}))},T=function(e){return r.a.createElement(b.a,{size:"large",open:e.open,onClose:function(){return e.close()}},r.a.createElement(b.a.Header,null,e.repoName," ",r.a.createElement(y.a,{name:"close",style:{float:"right",cursor:"pointer"},onClick:e.close})),r.a.createElement(b.a.Content,null,function(){switch(e.detail){case"commits":return r.a.createElement(x,{data:e.data});case"issues":return r.a.createElement(A,{data:e.data});default:return null}}()))},N=function(e){var t=e.repo,a=Object(n.useReducer)(function(e,t){return Object(m.a)({},e,t)},{}),l=Object(s.a)(a,2),o=l[0],c=l[1];function d(){return(d=Object(i.a)(u.a.mark(function e(a){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.split("/")[6],void 0!==o[t.full_name]&&void 0!==o[t.full_name][n]){e.next=4;break}return e.next=4,fetch(a).then(function(e){return e.json()}).then(function(e){c(Object(p.a)({},t.full_name,Object(m.a)({},o[t.full_name],Object(p.a)({},n,e))))});case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var f=function(e){b(e),function(e){d.apply(this,arguments)}("".concat(t.url,"/").concat(e))},b=function(e){return c({openModal:!o.openModal,detail:e})};return r.a.createElement(E.a.Column,{mobile:16,computer:5,style:{display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement(h.a,null,r.a.createElement(h.a.Content,null,r.a.createElement(h.a.Header,null,r.a.createElement("a",{href:t.html_url,target:"blank"}," ",t.name," "),r.a.createElement(v.a,{size:"mini",color:"green"},t.private?"private":"public")),r.a.createElement(h.a.Meta,null,t.full_name),r.a.createElement(h.a.Description,null,t.description)),r.a.createElement(h.a.Content,null,r.a.createElement(g.a.Group,{primary:!0},r.a.createElement(g.a,{onClick:function(){return f("commits")}},"Commits"),r.a.createElement(g.a,{onClick:function(){return f("issues")}},"Issues"),r.a.createElement(g.a,{animated:"fade","data-url":t.clone_url,onClick:function(e){var t=document.createElement("input"),a=document.querySelector("body");t.value=e.target.getAttribute("data-url"),a.appendChild(t),t.select(),document.execCommand("copy"),a.removeChild(t);var n=e.target,r=n.innerHTML;n.children[1].innerHTML="Copied!",setTimeout(function(){return n.innerHTML=r},2e3)}},r.a.createElement(g.a.Content,{visible:!0,style:{pointerEvents:"none"}},"Clone"),r.a.createElement(g.a.Content,{hidden:!0,style:{pointerEvents:"none"}},"Copy Link"))),r.a.createElement(T,{open:o.openModal,data:o[t.full_name],repoName:t.full_name,close:b,detail:o.detail}))))},R=a(375),S=function(){var e=Object(n.useReducer)(function(e,t){return Object(m.a)({},e,t)},{repos:[],loading:!1,error:!1}),t=Object(s.a)(e,2),a=t[0],l=t[1];function o(){return(o=Object(i.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l({loading:!0}),e.next=3,fetch("https://api.github.com/search/repositories?q=".concat(t,"&per_page=3")).then(function(e){return e.json()}).then(function(e){l({loading:!1,repos:e.items,error:!1})}).catch(function(e){l({loading:!1,error:!0})});case 3:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}return r.a.createElement(R.a,{textAlign:"center"},r.a.createElement(f,{fetchRepos:function(e){return o.apply(this,arguments)}}),a.loading?r.a.createElement(w,null):null,a.error?r.a.createElement("h1",{style:{textAlign:"center"}},"Error: failed retrieving repositories"):null,r.a.createElement(E.a,{centered:!0,style:{marginTop:"1rem"}},a.repos.map(function(e){return r.a.createElement(N,{repo:e,key:Math.random()})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[207,2,1]]]);
//# sourceMappingURL=main.18a9a015.chunk.js.map