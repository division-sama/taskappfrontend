(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],{11:function(e,t,n){e.exports={backdrop:"ErrorModal_backdrop__3Gb6y",modal:"ErrorModal_modal__XXtR3",header:"ErrorModal_header__1Swlo",content:"ErrorModal_content__2Wl2w",actions:"ErrorModal_actions__1tuc3"}},18:function(e,t,n){e.exports={con:"Users_con__1rNqE",operations:"Users_operations__1RnVx",input:"Users_input__3f_cv"}},23:function(e,t,n){e.exports={card:"Card_card__2Mzso"}},24:function(e,t,n){e.exports={input:"AddUser_input__2riKd"}},25:function(e,t,n){e.exports={button:"Button_button__ctAOa"}},31:function(e,t,n){e.exports={users:"Userlist_users__1vVbC",con:"Userlist_con__1k3Ra"}},42:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(22),c=n.n(a),s=(n(42),n(6)),o=n(9),i=n(32),u=n(7),l=n(23),d=n.n(l),j=n(4),b=function(e){return Object(j.jsx)("div",{className:" ".concat(d.a.card," ").concat(e.className," "),children:e.children})},p=n(24),O=n.n(p),f=n(25),h=n.n(f),x=function(e){return Object(j.jsx)("button",{className:h.a.button,type:e.type||"button",onClick:e.onClick,children:e.children})},v=n(11),m=n.n(v),k=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:m.a.backdrop,onClick:e.onConfirm}),Object(j.jsxs)(b,{className:m.a.modal,children:[Object(j.jsx)("header",{className:m.a.header,children:Object(j.jsx)("h2",{children:e.title})}),Object(j.jsx)("div",{className:m.a.content,children:Object(j.jsx)("p",{children:e.message})}),Object(j.jsx)("footer",{className:m.a.actions,children:Object(j.jsx)(x,{onClick:e.onConfirm,children:"Okay"})})]})]})},_=n(61),g=n(26);n.n(g).a.config();var w="https://taskappbackend-fpnf.onrender.com";console.log(w);var y=function(){var e=Object(o.a)(Object(s.a)().mark((function e(t){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.post("".concat(w,"/add"),t);case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log("Error While calling add user API",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(o.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.get("".concat(w,"/all"));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log("Error while loading data from server");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(Object(s.a)().mark((function e(t,n){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.post("".concat(w,"/edittask"),t,n);case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log("Error while editing data from server");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}(),N=function(){var e=Object(o.a)(Object(s.a)().mark((function e(t){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.next=4,_.a.delete("".concat(w,"/").concat(t));case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e.catch(0),console.log("Error while Deleting data from server");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),S=function(e){var t=Object(r.useState)(""),n=Object(u.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(null),l=Object(u.a)(i,2),d=l[0],p=l[1],f=Object(r.useState)(),h=Object(u.a)(f,2),v=h[0],m=h[1],_=function(){var e=Object(o.a)(Object(s.a)().mark((function e(t){var n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log(d),0!==a.trim().length&&null!==d){e.next=5;break}return m({title:"Invalid input",message:"Please Enter a Valid Task and Date (non-empty values)."}),e.abrupt("return");case 5:return n={task:a,deadline:d.toString()},e.next=8,y(n);case 8:p(null),c("");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{children:[v&&Object(j.jsx)(k,{title:v.title,message:v.message,onConfirm:function(){m(null)}}),Object(j.jsx)(b,{className:O.a.input,children:Object(j.jsxs)("form",{onSubmit:_,children:[Object(j.jsx)("label",{htmlFor:"username",children:" Task"}),Object(j.jsx)("input",{id:"Task",type:"text",value:a,placeholder:"Add Task",onChange:function(e){c(e.target.value)}}),Object(j.jsx)("label",{htmlFor:"age",children:" Deadline (Date) "}),Object(j.jsx)("input",{id:"date",type:"date",onChange:function(e){p(e.target.value)}}),Object(j.jsx)(x,{type:"submit",children:"Add Task"})]})})]})},T=n(33),D=n(21),A=n(20),I=n(18),M=n.n(I),U=n(13),F=function(e){var t=Object(r.useState)(!1),n=Object(u.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(),l=Object(u.a)(i,2),d=l[0],b=l[1],p=Object(r.useState)(e.user_task),O=Object(u.a)(p,2),f=O[0],h=O[1],x=Object(r.useState)(e.user_deadline),v=Object(u.a)(x,2),m=v[0],_=v[1],g=function(){c(!a),console.log(e.id)},w=function(){var t=Object(o.a)(Object(s.a)().mark((function t(){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e.id);case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=Object(o.a)(Object(s.a)().mark((function t(n){var r;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),console.log(m),0!==f.trim().length&&null!==m){t.next=5;break}return b({title:"Invalid input",message:"Please Enter a Valid Task and Date (non-empty values)."}),t.abrupt("return");case 5:return r={_id:e.id,task:f,deadline:m.toString()},t.next=8,E(r,e.id);case 8:t.sent,_(null),h("");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(j.jsxs)("div",{children:[d&&Object(j.jsx)(k,{title:d.title,message:d.message,onConfirm:function(){b(null)}}),Object(j.jsxs)("div",{children:[Object(j.jsx)("li",{children:e.children}),Object(j.jsxs)("div",{className:M.a.operations,children:[Object(j.jsx)("div",{onClick:w,className:M.a.con,children:Object(j.jsx)(D.a,{style:{color:"#474646"},icon:A.b})}),Object(j.jsx)("div",{onClick:g,children:Object(j.jsx)(D.a,{style:{color:"#474646"},icon:A.a})})]}),Object(j.jsxs)(U.b,{isOpen:a,toggle:g,children:[Object(j.jsx)(U.d,{toggle:g,children:"Edit Your Task"}),Object(j.jsx)(U.c,{children:Object(j.jsxs)("form",{className:M.a.input,onSubmit:y,children:[Object(j.jsx)("label",{htmlFor:"username",children:" Task"}),Object(j.jsx)("input",{id:"Task",type:"text",placeholder:"Add Task",value:f,onChange:function(e){h(e.target.value)}}),Object(j.jsx)("label",{htmlFor:"age",children:" Deadline (Date) "}),Object(j.jsx)("input",{id:"date",type:"date",value:m,onChange:function(e){_(e.target.value)}}),Object(j.jsx)(U.a,{onClick:g,type:"submit",children:"Edit Task"})]})})]})]})]})},R=n(31),V=n.n(R),P=function(e){var t=function(t){e.editdata(Object(T.a)({},t))},n=Object(j.jsx)("ul",{children:e.tasks.map((function(n){return Object(j.jsxs)(F,{updatedata:t,id:n._id,onDLT:e.onDelete,user_task:n.task,user_deadline:n.deadline,children:[" ",n.task," (",n.deadline,")"]},n._id)}))});return 0===e.tasks.length&&(n=Object(j.jsx)("div",{})),Object(j.jsx)(b,{className:V.a.users,children:n})};n(52);var B=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),l=Object(u.a)(c,2),d=(l[0],l[1],Object(r.useCallback)(Object(o.a)(Object(s.a)().mark((function e(){var t;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)}))),[]));return Object(r.useEffect)((function(){var e=setInterval((function(){d()}),2e3);return function(){return clearInterval(e)}}),[d]),Object(j.jsxs)("div",{children:[Object(j.jsx)(S,{updatedata:function(e){a((function(){return[].concat(Object(i.a)(n),[e])}))}}),Object(j.jsx)(P,{tasks:n})]})};c.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(B,{}))}},[[53,1,2]]]);
//# sourceMappingURL=main.10322cad.chunk.js.map