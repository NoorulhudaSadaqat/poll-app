(this["webpackJsonppoll-app"]=this["webpackJsonppoll-app"]||[]).push([[0],{80:function(e,t,n){},81:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),o=n(9),a=n.n(o),r=(n(80),n(81),n(11)),s=n(64),l=n(92),j=n(123),u=n(128),p=n(129),d=n(130),b=n(126),x=n(2),O=Object(j.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:3},root:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",padding:"2px 2px 2px 2px",margin:" 0px 10px "}}})),h=function(){var e,t=O(),n=Object(r.f)();return"/"===n.location.pathname?e=Object(x.jsxs)("div",{children:[Object(x.jsx)(b.a,{className:t.root,onClick:function(){return n.push("/create-poll")},children:"Create Poll"}),Object(x.jsx)(b.a,{className:t.root,onClick:function(){return n.push("/view-poll")},children:"View Poll"})]}):"/create-poll"===n.location.pathname?e=Object(x.jsxs)("div",{children:[Object(x.jsx)(b.a,{className:t.root,onClick:function(){return n.replace("/")},children:"Home"}),Object(x.jsx)(b.a,{className:t.root,onClick:function(){return n.push("/view-poll")},children:"View Poll"})]}):"/view-poll"===n.location.pathname&&(e=Object(x.jsxs)("div",{children:[Object(x.jsx)(b.a,{className:t.root,onClick:function(){return n.replace("/")},children:"Home"}),Object(x.jsx)(b.a,{className:t.root,onClick:function(){return n.push("/create-poll")},children:"Create Poll"})]})),Object(x.jsx)(u.a,{position:"static",className:t.root,children:Object(x.jsxs)(p.a,{children:[Object(x.jsx)(d.a,{edge:"start",color:"inherit","aria-label":"menu",className:t.menuButton}),Object(x.jsx)(l.a,{variant:"h4",className:t.title,children:"Voting App"}),e]})})},f=n.p+"static/media/polling-hero.77bbdf3a.jpeg",m=Object(j.a)((function(e){return{paperContainer:{backgroundImage:"url(".concat(f,")"),backgroundSize:"cover",height:"90vh"},root:{backdropFilter:"blur(5px)",display:"flex",flexDirection:"column",justifyContent:"center"}}})),v=function(){var e=m();return Object(x.jsxs)("div",{children:[Object(x.jsx)(h,{}),Object(x.jsx)(s.a,{className:e.paperContainer,children:Object(x.jsxs)(l.a,{align:"center",variant:"h2",className:e.root,children:["Voting App",Object(x.jsx)(l.a,{children:"Dhandhli se Paak, Shifaf Voting ka Intazam"})]})})]})},g=n(15),y=n(20),C=Object(y.b)({name:"polls",initialState:{pollsArray:[]},reducers:{addPoll:function(e,t){e.pollsArray.push(t.payload),console.log("after added",e.pollsArray)},deletePoll:function(e,t){var n=t.payload;e.pollsArray.splice(n,1),console.log("Array after deleting : "+e.pollsArray)},vote:function(e,t){var n=t.payload,c=n.index,i=n.option;e.pollsArray[c].options[i].noOfVotes+=1}}}),k=C.actions,w=k.addPoll,N=k.deletePoll,S=k.vote,A=C,P=n(93),q=n(138),z=n(137),V=n(136),F=n(133),I=n(135),D=function(e){return Object(x.jsx)(b.a,{type:"button",variant:"contained",color:"primary",size:"small",onClick:function(){e.updateNoOfOptions(e.option)},children:"Add Option"})},R=n(131),B=n(132),E=Object(y.b)({name:"question",initialState:{question:""},reducers:{setQuestion:function(e,t){e.question=t.payload}}}),Q=E.actions.setQuestion,T=E,H=n(52),J=n.n(H),L=n(60),W=Object(y.b)({name:"options",initialState:{options:[]},reducers:{updateOptions:function(e,t){console.log(" value in action payload :"+t.payload),e.options.push(t.payload)},resetOptions:function(e,t){e.options=[]}}}),G=W.actions,M=(G.updateOptions,G.resetOptions),K=W,U=Object(y.b)({name:"status",initialState:{status:"inactive"},reducers:{updateStatus:function(e,t){e.status=t.payload}}}),X=U.actions.updateStatus,Y=U,Z=Object(y.b)({name:"option",initialState:{option:[]},reducers:{setOption:function(e,t){e.option=t.payload}}}),$=Z.actions.setOption,_=Z,ee=Object(P.a)({root:{borderRadius:3,boxShadow:"0 3px 5px 2px white",padding:"0px 0px 4px 0px",minWidth:370},cardRoot:{borderRadius:3,boxShadow:"0 3px 5px 2px white",padding:"0px 0px 4px 0px",minWidth:370,margin:"30px 0px 0px 0px"}}),te=function(){var e=Object(g.b)(),t=ee(),n=Object(r.f)(),c=Object(g.c)((function(e){return e.question.question})),i=Object(g.c)((function(e){return e.status.status})),o=Object(g.c)((function(e){return e.options.options})),a=Object(g.c)((function(e){return e.option.option}));return Object(x.jsx)("div",{children:Object(x.jsx)(R.a,{variant:"outlined",className:t.cardRoot,children:Object(x.jsx)(B.a,{children:Object(x.jsx)("form",{children:Object(x.jsxs)(q.a,{component:"fieldset",children:[Object(x.jsx)(I.a,{id:"outlined-basic",className:t.root,label:"Question",value:c,required:!0,variant:"outlined",onChange:function(t){return e(Q(t.target.value))}}),Object(x.jsx)(I.a,{id:"outlined-basic",className:t.root,required:!0,label:"Option",value:a,variant:"outlined",onChange:function(t){return e($(t.target.value))}}),Object(x.jsx)(D,{option:a,updateNoOfOptions:function(t){var n={optionDescription:t,noOfVotes:0};console.log(n),e(function(e){return function(){var t=Object(L.a)(J.a.mark((function t(n){return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(W.actions.updateOptions(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(n)),e($(""))}}),Object(x.jsxs)(z.a,{"aria-label":"poll-status",name:"poll-status",value:i,required:!0,onChange:function(t){return e(X(t.target.value))},children:[Object(x.jsx)(F.a,{value:"active",control:Object(x.jsx)(V.a,{}),label:"Active"}),Object(x.jsx)(F.a,{value:"inactive",control:Object(x.jsx)(V.a,{}),label:"In-Active"})]}),Object(x.jsx)(b.a,{type:"submit",variant:"contained",color:"primary",size:"small",onClick:function(){e(w({question:c,options:o,status:i})),n.replace("/view-poll")},disabled:!(c&&o.length>=2),children:"Publish Poll"}),Object(x.jsx)(b.a,{type:"button",variant:"contained",color:"primary",size:"small",onClick:function(){e(Q("")),e($("")),e(M())},children:"Reset"})]})})})})})},ne=n(134),ce=Object(j.a)((function(e){return{root:{margin:"30px 30px 30px 30px"}}})),ie=function(){var e=ce(),t=Object(g.c)((function(e){return e.question.question})),n=(Object(g.c)((function(e){return e.status.status})),Object(g.c)((function(e){return e.options.options})));console.log("options :"+n);Object(g.c)((function(e){return e.option.option}));return Object(x.jsxs)("div",{children:[Object(x.jsx)(h,{}),Object(x.jsxs)(ne.a,{container:!0,spacing:1,children:[Object(x.jsx)(ne.a,{item:!0,xs:1}),Object(x.jsx)(ne.a,{item:!0,xs:4,children:Object(x.jsx)(te,{})}),Object(x.jsx)(ne.a,{item:!0,xs:1}),Object(x.jsx)(ne.a,{container:!0,item:!0,xs:6,children:Object(x.jsx)(R.a,{className:e.root,children:Object(x.jsx)(B.a,{children:Object(x.jsxs)(ne.a,{item:!0,xs:12,children:[Object(x.jsxs)("h2",{children:["Statement : ",t]}),Object(x.jsx)("h3",{children:"Options :"}),n.map((function(e,t){return Object(x.jsx)("div",{children:Object(x.jsx)(ne.a,{container:!0,item:!0,xs:12,children:Object(x.jsx)(ne.a,{item:!0,xs:10,children:Object(x.jsxs)("h5",{children:[t+1," :",e.optionDescription]})})})})}))]})})})})]})]})},oe=function(e){var t=Object(g.b)();return Object(x.jsx)(b.a,{type:"button",variant:"contained",color:"primary",size:"small",onClick:function(){t(N(e.index))},children:"Delete Poll"})},ae=function(e){var t=Object(g.b)();return Object(x.jsx)(b.a,{type:"button",variant:"contained",color:"secondary",size:"small",onClick:function(){t(S({index:e.index,option:e.optionIndex}))},children:"Vote"})},re=function(){var e=Object(g.c)((function(e){return e.poll.pollsArray}));return Object(x.jsx)(ne.a,{container:!0,children:e.map((function(e,t){return Object(x.jsxs)(ne.a,{children:[Object(x.jsx)(R.a,{children:Object(x.jsx)(B.a,{children:Object(x.jsxs)(ne.a,{item:!0,xs:12,children:[Object(x.jsxs)("h2",{children:[" ",e.question]}),e.options.map((function(e,n){return Object(x.jsxs)(ne.a,{container:!0,item:!0,xs:12,children:[Object(x.jsx)(ne.a,{item:!0,xs:8,children:Object(x.jsxs)("h3",{children:[" ",e.optionDescription]})}),Object(x.jsx)(ne.a,{item:!0,xs:2,children:Object(x.jsx)(ae,{index:t,optionIndex:n})}),Object(x.jsx)(ne.a,{item:!0,xs:2,children:Object(x.jsx)(b.a,{color:"secondary",size:"small",children:e.noOfVotes})})]})}))]})})}),Object(x.jsx)(ne.a,{item:!0,xs:4,children:Object(x.jsx)("h2",{children:Object(x.jsx)(oe,{index:t})})})]})}))})},se=Object(j.a)((function(e){return{paperContainer:{backgroundImage:"url(".concat(f,")"),backgroundSize:"cover",height:"100vh",color:"#f5f5f5"}}})),le=function(){var e=se();return Object(x.jsxs)("div",{className:e.paperContainer,children:[Object(x.jsx)(h,{}),Object(x.jsxs)(ne.a,{container:!0,spacing:2,children:[Object(x.jsx)(ne.a,{item:!0,xs:1}),Object(x.jsx)(ne.a,{item:!0,xs:10,children:Object(x.jsx)(re,{})})]})]})};var je=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(r.c,{children:[Object(x.jsx)(r.a,{exact:!0,path:"/",children:Object(x.jsx)(v,{})}),Object(x.jsx)(r.a,{path:"/create-poll",children:Object(x.jsx)(ie,{})}),Object(x.jsx)(r.a,{path:"/view-poll",children:Object(x.jsx)(le,{})})]})})},ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,140)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),o(e),a(e)}))},pe=n(17),de=n(61),be=n.n(de),xe=n(48),Oe=n(43),he=Object(pe.b)({poll:A.reducer,question:T.reducer,status:Y.reducer,options:K.reducer,option:_.reducer}),fe={key:"root",storage:be.a},me=Object(xe.a)(fe,he),ve=Object(y.a)({reducer:me,devTools:!1,middleware:[Oe.a]}),ge=n(44),ye=n(62),Ce=Object(xe.b)(ve);a.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(ye.a,{loading:null,persistor:Ce,children:Object(x.jsx)(g.a,{store:ve,children:Object(x.jsx)(ge.a,{children:Object(x.jsx)(je,{})})})})}),document.getElementById("root")),ue()}},[[91,1,2]]]);
//# sourceMappingURL=main.8058f4e6.chunk.js.map