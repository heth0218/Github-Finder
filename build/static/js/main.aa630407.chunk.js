(this["webpackJsonpcreate-react-app-example"]=this["webpackJsonpcreate-react-app-example"]||[]).push([[0],{30:function(e,t){e.exports="data:image/gif;base64,AAUWBwACAABNYWMgT1MgWCAgICAgICAgAAIAAAAJAAAAMgAAAPkAAAACAAABKwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQVRUUgAAAAAAAAErAAAAvAAAAG8AAAAAAAAAAAAAAAAAAAACAAAAvAAAAFMAABdjb20uZHJvcGJveC5hdHRyaWJ1dGVzAAAAAAABDwAAABwAABJjb20uZHJvcGJveC5hdHRycwAAAAB4nKtWSinKL0jKr4hPy8xJzUyJz8lPTsxRslKoVspNTM7IzAOJJZaUFIGFUhJLEoEMpTL/gsIik4yMCL+scsNUd5/ibJOKdEdbW6Xa2loA1A4dCQoUChAL/cVZcAV/cAAAAAAAVAdOEAEQhP/tlgw="},31:function(e,t,a){e.exports=a(61)},36:function(e,t,a){},37:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),c=a.n(l),s=(a(36),a(8)),u=a(1),o=(a(37),function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,"About this app"),r.a.createElement("p",null,"App to search Github User"),r.a.createElement("p",null,"Version 1.0.0"))}),i=function(e){var t=e.icon,a=e.title;return r.a.createElement("nav",{className:"navbar bg-primary"},r.a.createElement("h1",null,r.a.createElement("i",{className:t},a)),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/about"},"About"))))};i.defaultProps={title:"Github Finder ",icon:"fab fa-github"};var A=i,m=a(30),E=a.n(m),p=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("img",{src:E.a,alt:"loading ...",style:{width:"200px",margin:"auto",display:"block"}}))},d=a(9),b=function(e){var t=e.repo;return r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("a",{href:t.html_url},t.name)))};b.prototype={repo:a.n(d).a.object.isRequired};var g,f,h=b,v=function(e){return e.repos.map((function(e){return r.a.createElement(h,{repo:e,key:e.id})}))},_=Object(n.createContext)(),y=function(e){var t=e.match,a=Object(n.useContext)(_),l=a.getUser,c=a.loading,u=a.user,o=a.repos,i=a.getUserRepos;Object(n.useEffect)((function(){l(t.params.login),i(t.params.login)}),[]);var A=u.login,m=u.avatar_url,E=u.location,d=u.bio,b=u.blog,g=u.html_url,f=u.followers,h=u.following,y=u.public_repos,C=u.public_gists,N=u.hireable,O=u.company;return c?r.a.createElement(p,null):r.a.createElement(n.Fragment,null,r.a.createElement(s.b,{to:"/",className:"btn btn-light"},"Back to Search"),"Hireable:"," ",N?r.a.createElement("i",{className:"fas fa-check text-success"}):r.a.createElement("i",{className:"fas fa-times-circle text-danger"}),r.a.createElement("div",{className:"card grid-2"},r.a.createElement("div",{"className-":"all-center"},r.a.createElement("img",{src:m,className:"round-img",alt:"",style:{width:"150px"}}),r.a.createElement("h1",null,A),r.a.createElement("p",null,"location:",E)),r.a.createElement("div",null,d&&r.a.createElement(n.Fragment,null,r.a.createElement("h3",null,"Bio"),r.a.createElement("p",null,d)),r.a.createElement("a",{href:g,className:"btn btn-dark my-1"},"Visit Github Profile"),r.a.createElement("ul",null,r.a.createElement("li",null,A&&r.a.createElement(n.Fragment,null,r.a.createElement("strong",null,"Username:"),A)),r.a.createElement("li",null,b&&r.a.createElement(n.Fragment,null,r.a.createElement("strong",null,"Website: "),b)),r.a.createElement("li",null,O&&r.a.createElement(n.Fragment,null,r.a.createElement("strong",null,"Company:"),O))))),r.a.createElement("div",{classname:"card text-center"},r.a.createElement("div",{className:"badge badge-primary"},"Followers:",f),r.a.createElement("div",{className:"badge badge-success"},"Following:",h),r.a.createElement("div",{className:"badge badge-light"},"Public Repos:",y),r.a.createElement("div",{className:"badge badge-dark"},"Public Gist:",C)),r.a.createElement(v,{repos:o}))},C=Object(n.createContext)(),N=function(){var e=Object(n.useContext)(C).alert;return null!==e&&r.a.createElement("div",{className:"alert alert-".concat(e.type)},r.a.createElement("i",{className:"fas fa-info-circle"},e.msg))},O=a(12),T=function(){var e=Object(n.useContext)(_),t=Object(n.useContext)(C),a=Object(n.useState)(""),l=Object(O.a)(a,2),c=l[0],s=l[1];return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),""===c?t.setAlert("Please enter something","light"):(e.searchUsers(c),s(""))},className:"form"},r.a.createElement("input",{type:"text",name:"text",placeholder:"Search User...",value:c,onChange:function(e){return s(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Search",className:"btn btn-dark btn-block"})),e.users.length>0&&r.a.createElement("button",{className:"btn btn-light btn-block",onClick:e.clearUsers},"Clear"))},R=function(e){var t=e.user,a=t.login,n=t.avatar_url;t.html_url;return r.a.createElement("div",{className:"card text-center"},r.a.createElement("img",{src:n,alt:"",className:"round-img",style:{width:"60px "}}),r.a.createElement("h3",null,a),r.a.createElement("div",null,r.a.createElement(s.b,{to:"/user/".concat(a),className:"btn btn-dark btn-sm my-1"},"More")))},U={display:"grid",gridTemplateColumns:"repeat(3,1fr)",gridGap:"1rem"},j=function(){var e=Object(n.useContext)(_),t=e.loading,a=e.users;return t?r.a.createElement(p,null):r.a.createElement("div",{style:U},a.map((function(e){return r.a.createElement(R,{key:e.id,user:e})})))},x=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(T,null),r.a.createElement(j,null))},S=a(11),I=a.n(S),w=a(13),G=a(14),L=a.n(G),P=a(7),k=function(e,t){switch(t.type){case"SEARCH_USERS":return Object(P.a)(Object(P.a)({},e),{},{users:t.payload,loading:!1});case"SET_LOADING":return Object(P.a)(Object(P.a)({},e),{},{loading:!0});case" CLEAR_USERS ":return Object(P.a)(Object(P.a)({},e),{},{users:[],loading:!1});case" GET_USER ":return Object(P.a)(Object(P.a)({},e),{},{user:t.payload,loading:!1});case"GET_REPOS":return Object(P.a)(Object(P.a)({},e),{},{repos:t.payload,loading:!1});default:return e}};g=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_GITHUB_CLIENT_ID:"f9ea474bb5ba939dff85",REACT_APP_GITHUB_CLIENT_SECRET:"4974eaaba41271fbca1fa163db1ec6d8255a925f"}).GITHUB_CLIENT_ID,f=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_GITHUB_CLIENT_ID:"f9ea474bb5ba939dff85",REACT_APP_GITHUB_CLIENT_SECRET:"4974eaaba41271fbca1fa163db1ec6d8255a925f"}).GITHUB_CLIENT_SECRET;var B=function(e){var t=Object(n.useReducer)(k,{users:[],user:{},repos:[],loading:!1}),a=Object(O.a)(t,2),l=a[0],c=a[1],s=function(){var e=Object(w.a)(I.a.mark((function e(t){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(),e.next=3,L.a.get("https://api.github.com/search/users?q=".concat(t,"&client_id=").concat(g,"&client_secret=").concat(f));case 3:a=e.sent,c({type:"SEARCH_USERS",payload:a.data.items});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(w.a)(I.a.mark((function e(t){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(),e.next=3,L.a.get("https://api.github.com/users/".concat(t,"?client_id=").concat(g,"&client_secret=").concat(f));case 3:a=e.sent,c({type:" GET_USER ",payload:a.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(w.a)(I.a.mark((function e(t){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(),e.next=3,L.a.get("https://api.github.com/users/".concat(t,"/repos?per_page=5&sort=created:asc&client_id=").concat(g,"&client_secret=").concat(f));case 3:a=e.sent,c({type:"GET_REPOS",payload:a.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){return c({type:"SET_LOADING"})};return r.a.createElement(_.Provider,{value:{users:l.users,user:l.user,repos:l.repos,loading:l.loading,searchUsers:s,clearUsers:function(){return c({type:" CLEAR_USERS "})},getUser:u,getUserRepos:o}},e.children)},F=function(e,t){switch(t.type){case"SET_ALERT":return t.payload;case"REMOVE_ALERT":return null;default:return e}},J=function(e){var t=Object(n.useReducer)(F,null),a=Object(O.a)(t,2),l=a[0],c=a[1];return r.a.createElement(C.Provider,{value:{alert:l,setAlert:function(e,t){c({type:"SET_ALERT",payload:{msg:e,type:t}}),setTimeout((function(){return c({type:"REMOVE_ALERT"})}),5e3)}}},e.children)},H=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Not Found "),r.a.createElement("p",{className:"lead"}," The page you are looking for does not exist"))},V=function(){return r.a.createElement(B,null,r.a.createElement(J,null,r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(A,{title:"Github Finder",icon:"fab fa-github"}),r.a.createElement("div",{className:"container"},r.a.createElement(N,{alert:alert}),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:x}),r.a.createElement(u.a,{exact:!0,path:"/about",component:o}),r.a.createElement(u.a,{exact:!0,path:"/user/:login",component:y}),r.a.createElement(u.a,{component:H})))))))};c.a.render(r.a.createElement(V,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.aa630407.chunk.js.map