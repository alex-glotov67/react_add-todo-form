(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{24:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var s=a(14),n=a.n(s),i=a(18),o=a(15),r=a(16),c=a(19),l=a(17),d=a(1),u=a.n(d),m=(a(24),a(25),a(33)),h=a(34),b=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],p=a(3),g=a.n(p),j=a(0),y=function(e){var t=e.user,a=t.name,s=t.username,n=t.email;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"user__name",children:a}),Object(j.jsx)("div",{className:"user__username",children:s}),Object(j.jsx)("div",{className:"user__email",children:n})]})},f=(a(27),function(e){var t=e.todo,a=t.user,s=t.title,n=t.completed;return Object(j.jsxs)(j.Fragment,{children:[a&&Object(j.jsx)(y,{user:a}),Object(j.jsx)("div",{className:"todo__title",children:s}),Object(j.jsx)("div",{className:"todo__status",children:n?"Done":"In progress"})]})}),v=(a(28),function(e){var t=e.todos;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("section",{className:"table",children:Object(j.jsx)("ul",{className:"table__body",children:t.map((function(e){return Object(j.jsx)("li",{className:g()("table__item",{table__item_done:e.completed}),children:Object(j.jsx)(f,{todo:e})},e.id)}))})})})}),x=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={id:1,todoTitle:"",currentTodos:[],userId:"0",isUserChoosed:!1,isTodoInclude:!1},e.handleChangeUser=function(t){var a=t.target.value;e.setState({userId:a,isUserChoosed:!1})},e.handleChangeTask=function(t){var a=t.target.value;e.setState({todoTitle:a,isTodoInclude:!1})},e.addTodo=function(){var t=e.state,a=t.id,s=t.userId,n=t.todoTitle;if(0!==n.trim().length)if(e.setState({isTodoInclude:!1}),0!==+s){e.setState({isUserChoosed:!1});var o={user:b.find((function(e){return e.id===+s}))||null,userId:+s,id:a,title:n.toLocaleUpperCase(),completed:!1};e.setState((function(e){return{id:e.id+1,todoTitle:"",currentTodos:[].concat(Object(i.a)(e.currentTodos),[o]),userId:"",isUserChoosed:!1,isTodoInclude:!1}}))}else e.setState({isUserChoosed:!0});else e.setState({isTodoInclude:!0})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.currentTodos,s=t.userId,n=t.todoTitle,i=t.isTodoInclude,o=t.isUserChoosed;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"List of todos"}),Object(j.jsxs)(m.a,{className:"form mb-3",onSubmit:function(t){t.preventDefault(),e.addTodo()},children:[Object(j.jsx)(m.a.Label,{htmlFor:"task",className:"form__label",children:Object(j.jsx)(m.a.Control,{className:"form__todo_input",type:"text",id:"task",placeholder:"Write your task",value:n,onChange:this.handleChangeTask})}),i&&Object(j.jsx)("p",{className:"form__alert",children:"Please, enter todo title"}),Object(j.jsx)(m.a.Label,{htmlFor:"selectedUser",className:"form__label",children:Object(j.jsxs)(m.a.Select,{name:"selectedUser",id:"selectedUser",value:s,onChange:this.handleChangeUser,children:[Object(j.jsx)("option",{value:0,children:"Choose user"}),b.map((function(e){return Object(j.jsx)("option",{value:e.id,children:e.name},e.id)}))]})}),o&&Object(j.jsx)("p",{className:"form__alert",children:"Please, choose user"}),Object(j.jsx)(h.a,{variant:"primary",type:"submit",children:"Add Todo"})]}),Object(j.jsx)(v,{todos:a})]})}}]),a}(u.a.Component);n.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.b6bb7382.chunk.js.map