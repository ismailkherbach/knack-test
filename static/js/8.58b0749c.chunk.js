(this.webpackJsonpknacklab=this.webpackJsonpknacklab||[]).push([[8],{70:function(e,t,c){"use strict";t.a=c.p+"static/media/cancel.da5c4222.svg"},73:function(e,t,c){"use strict";c.d(t,"c",(function(){return i})),c.d(t,"d",(function(){return a})),c.d(t,"g",(function(){return n})),c.d(t,"f",(function(){return l})),c.d(t,"e",(function(){return s})),c.d(t,"b",(function(){return r})),c.d(t,"a",(function(){return o}));var i=[{label:"Dubai",value:"Dubai"},{label:"Abu Dhabi",value:"Abu Dhabi"},{label:"Sharjah",value:"Sharjah"},{label:"Umm Al Quwain",value:"Umm Al Quwain"},{label:"Ajman",value:"Ajman"},{label:"Ras Al Khaimah",value:"Ras Al Khaimah"},{label:"Fujairah",value:"Fujairah"},{label:"Alain",value:"Alain"}],a=["Full Time","Part Time","Contract"],n=["UI UX Designer","Backend Developer","Frontend developer"],l=["Tech","Human resource ","Design"],s=["United Arab Emirates","Algeria"],r=["Tech","Human resource ","Design"],o=["Input","Checkbox","Radio"]},85:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return N}));var i=c(65),a=c(66),n=c(68),l=c(67),s=c(2),r=[{id:"0",name:"Ismail kherbach",position:"Frontend developer",department:"Tech",location:"Algiers",country:"Algeria",contract:"Full Time",age:"23",picture:"https://randomuser.me/api/portraits/men/75.jpg",availability:{days:["Sunday","Monday","Tuesday"],time:["09:00","11:00","12:00"]}},{id:"1",name:"Mohammed Lamie",position:"Frontend developer",department:"Tech",location:"Algiers",country:"Algeria",contract:"Full Time",age:"23",picture:"https://randomuser.me/api/portraits/men/40.jpg",availability:{days:["Sunday","Monday","Tuesday"],time:["09:00","11:00","12:00"]}},{id:"2",name:"Jamel Yacine",position:"Frontend developer",department:"Tech",location:"Algiers",country:"Algeria",contract:"Full Time",age:"23",picture:"https://randomuser.me/api/portraits/men/88.jpg",availability:{days:["Sunday","Monday","Tuesday"],time:["09:00","11:00","12:00"]}},{id:"3",name:"Ismail kherbach",position:"Frontend developer",department:"Tech",location:"Algiers",country:"Algeria",contract:"Full Time",picture:"https://randomuser.me/api/portraits/men/75.jpg",age:"23",availability:{days:["Sunday","Monday","Tuesday"],time:["09:00","11:00","12:00"]}},{id:"0",name:"Ismail kherbach",position:"Frontend developer",department:"Tech",location:"Algiers",country:"Algeria",contract:"Full Time",age:"23",picture:"https://randomuser.me/api/portraits/men/75.jpg",availability:{days:["Sunday","Monday","Tuesday"],time:["09:00","11:00","12:00"]}},{id:"0",name:"Ismail kherbach",position:"Frontend developer",department:"Tech",location:"Algiers",country:"Algeria",contract:"Full Time",age:"23",picture:"https://randomuser.me/api/portraits/men/75.jpg",availability:{days:["Sunday","Monday","Tuesday"],time:["09:00","11:00","12:00"]}},{id:"0",name:"Ismail kherbach",position:"Frontend developer",department:"Tech",location:"Algiers",country:"Algeria",contract:"Full Time",age:"23",picture:"https://randomuser.me/api/portraits/men/75.jpg",availability:{days:["Sunday","Monday","Tuesday"],time:["09:00","11:00","12:00"]}}],o=c.p+"static/media/search-interface-symbol.e892f140.svg",d=c.p+"static/media/filter.df398f47.svg",j=c.p+"static/media/department.2b9b5bf0.svg",u=c.p+"static/media/country.1cd270be.svg",h=c.p+"static/media/location.0ba91436.svg",p=c.p+"static/media/contract.cc83c4dd.svg",m=c(70),b=c(12),f=function(e){Object(n.a)(c,e);var t=Object(l.a)(c);function c(e){var a;return Object(i.a)(this,c),(a=t.call(this,e)).state={scheduleMeetingPopup:!1,time:"",day:""},a}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state,c=t.time,i=t.day,a=this.props.availability;return Object(b.jsx)("div",{className:"popup-container flex fdc aic jcc",children:Object(b.jsxs)("div",{className:"schedule-meeting-popup flex fdc aic jcc",children:[Object(b.jsx)("div",{className:"close flex fdr aic jcc",children:Object(b.jsx)("img",{alt:"close",src:m.a,onClick:this.props.closeSchedulePopup})}),Object(b.jsx)("h4",{children:" Ismail kherbach is available on :"}),Object(b.jsx)("div",{className:"wb-100 flex fdr aic jcc",children:a.days.map((function(t,c){return Object(b.jsxs)("div",{className:"date ".concat(i===t?"clicked":""," flex fdr aic jcc"),onClick:function(){return e.setState({day:t})},children:[" ",t]},c)}))}),Object(b.jsx)("div",{className:"wb-100 flex fdr aic jcc",children:a.time.map((function(t,i){return Object(b.jsx)("div",{className:"date ".concat(c===t?"clicked":""," flex fdr aic jcc"),onClick:function(){return e.setState({time:t})},children:t},i)}))}),Object(b.jsx)("div",{onClick:this.props.closeSchedulePopup,className:"scheduleBtn flex fdr aic jcc",children:Object(b.jsx)("h5",{children:"Send invite"})})]})})}}]),c}(s.Component),x=c.p+"static/media/back.a98e70f8.svg",O=function(e){Object(n.a)(c,e);var t=Object(l.a)(c);function c(e){var a;return Object(i.a)(this,c),(a=t.call(this,e)).state={scheduleMeetingPopup:!1},a}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state.scheduleMeetingPopup,c=this.props.employee;return Object(b.jsxs)(s.Fragment,{children:[t&&Object(b.jsx)(f,{availability:this.props.employee.availability,closeSchedulePopup:function(){return e.setState({scheduleMeetingPopup:!1})}}),Object(b.jsxs)("div",{className:"employee flex fdr aic jcc",children:[Object(b.jsx)("div",{onClick:this.props.closeEmployeePopup,className:"goback flex fdr aic jcc",children:Object(b.jsx)("img",{alt:"close",src:x,onClick:this.props.closeEmployee})}),Object(b.jsxs)("div",{className:"employee-picture flex fdc aic jcc",children:[Object(b.jsx)("div",{className:"picture flex fdr aic jcc",children:Object(b.jsx)("img",{alt:"avatar",src:c.picture})}),Object(b.jsx)("h5",{children:c.name}),Object(b.jsxs)("h5",{children:["Age : ",c.age," "]}),Object(b.jsx)("div",{onClick:function(){return e.setState({scheduleMeetingPopup:!0})},className:"schedule-meeting flex fdr aic jcc",children:"Schedule a Meeting"}),Object(b.jsx)("div",{className:"send-survey flex fdr aic jcc",children:"Send Survey"})]}),Object(b.jsxs)("div",{className:"employee-infos flex fdc aic  jcc",children:[Object(b.jsxs)("div",{className:"info-container flex fdr aic jcfs",children:[Object(b.jsx)("div",{className:"info-icon flex fdr aic jcc",children:Object(b.jsx)("img",{alt:"icon",src:j})}),Object(b.jsx)("h5",{children:c.position})]}),Object(b.jsxs)("div",{className:"info-container flex fdr aic jcfs",children:[Object(b.jsx)("div",{className:"info-icon flex fdr aic jcc",children:Object(b.jsx)("img",{alt:"icon",src:j})}),Object(b.jsx)("h5",{children:c.department})]}),Object(b.jsxs)("div",{className:"info-container flex fdr aic jcfs",children:[Object(b.jsx)("div",{className:"info-icon flex fdr aic jcc",children:Object(b.jsx)("img",{alt:"icon",src:h})}),Object(b.jsx)("h5",{children:c.location})]}),Object(b.jsxs)("div",{className:"info-container flex fdr aic jcfs",children:[Object(b.jsx)("div",{className:"info-icon flex fdr aic jcc",children:Object(b.jsx)("img",{alt:"icon",src:u})}),Object(b.jsx)("h5",{children:c.country})]}),Object(b.jsxs)("div",{className:"info-container flex fdr aic jcfs",children:[Object(b.jsx)("div",{className:"info-icon flex fdr aic jcc",children:Object(b.jsx)("img",{alt:"icon",src:p})}),Object(b.jsx)("h5",{children:c.contract})]})]}),Object(b.jsx)("div",{className:"employee-features flex fdc aic jcc"})]})]})}}]),c}(s.Component),v=c(75),y=c(73),g=function(e){Object(n.a)(c,e);var t=Object(l.a)(c);function c(e){var a;return Object(i.a)(this,c),(a=t.call(this,e)).onChangeCity=function(e,t){a.setState({city:e})},a.onChangeContract=function(e,t){a.setState({contract:e})},a.onChangeCountry=function(e,t){a.setState({country:e})},a.onChangeDepartment=function(e,t){a.setState({department:e})},a.onChangePosition=function(e,t){a.setState({position:e})},a.state={},a}return Object(a.a)(c,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"popup-container flex fdc aic jcc",children:Object(b.jsxs)("div",{className:"filter-dropdown flex fdc aic jcc",children:[Object(b.jsx)("div",{className:"close flex fdr aic jcc",children:Object(b.jsx)("img",{alt:"close",src:m.a,onClick:this.props.closeFilter})}),Object(b.jsx)("h4",{children:"Filter Employees By :"}),Object(b.jsx)(v.DropdownMultiple,{name:"Position",title:"Position",titleSingular:"position",list:y.g.map((function(e){return{label:e,value:e}})),onChange:this.onChangePosition.bind(this)}),Object(b.jsx)(v.DropdownMultiple,{name:"Department",title:"Department",titleSingular:"department",list:y.f.map((function(e){return{label:e,value:e}})),onChange:this.onChangeDepartment.bind(this)}),Object(b.jsx)(v.DropdownMultiple,{name:"Location",title:"Location",titleSingular:"location",list:y.c,onChange:this.onChangeCity.bind(this)}),Object(b.jsx)(v.DropdownMultiple,{name:"Country",title:"Country",titleSingular:"country",list:y.e.map((function(e){return{label:e,value:e}})),onChange:this.onChangeCountry.bind(this)}),Object(b.jsx)(v.DropdownMultiple,{name:"Conract",title:"Conract",titleSingular:"conract",list:y.d.map((function(e){return{label:e,value:e}})),onChange:this.onChangeContract.bind(this)}),Object(b.jsx)("div",{onClick:this.props.closeFilter,className:"filterBtn flex fdr aic jcc",children:Object(b.jsx)("h5",{children:"Apply"})})]})})}}]),c}(s.Component),C=function(e){Object(n.a)(c,e);var t=Object(l.a)(c);function c(e){var a;return Object(i.a)(this,c),(a=t.call(this,e)).filterByName=function(e){if(""===e.target.value)a.setState({employees:r});else{var t=r.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())}));a.setState({employees:t})}},a.handleEmployeeClick=function(e){a.setState({employeeClicked:e,employeePopup:!0})},a.state={employees:r,employee:null,searchInput:"",filter:!1,employeeClicked:null,employeePopup:!1},a}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state,c=t.employees,i=t.filter,a=t.employeeClicked,n=t.employeePopup;return Object(b.jsxs)(s.Fragment,{children:[n&&Object(b.jsx)(O,{employee:a,closeEmployeePopup:function(){return e.setState({employeePopup:!1})}}),i&&Object(b.jsx)(g,{closeFilter:function(){return e.setState({filter:!1})}}),!n&&Object(b.jsxs)("div",{className:"table-core flex fdc aifs jcfs",children:[Object(b.jsxs)("div",{className:"filter-container flex fdr aic jcc",children:[Object(b.jsx)("div",{className:"filter-left flex fdr aic jcc",children:Object(b.jsxs)("div",{className:"search-container flex fdr aic jcc",children:[Object(b.jsx)("div",{className:"icon flex fdr aic jcc",children:Object(b.jsx)("img",{alt:"loupe",src:o})}),Object(b.jsx)("input",{placeholder:"Search by name",onChange:this.filterByName})]})}),Object(b.jsx)("div",{className:"filter-right flex fdr aic jcfe",children:Object(b.jsxs)("div",{onClick:function(){return e.setState({filter:!e.state.filter})},className:"filterBtn flex fdr aic jcc",children:[Object(b.jsx)("div",{className:"icon flex fdr aic jcc",children:Object(b.jsx)("img",{alt:"loupe",src:d})}),Object(b.jsx)("h5",{children:"Filter"})]})})]}),Object(b.jsxs)("table",{children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{className:"head disable-select",children:[Object(b.jsx)("th",{children:"Employee"}),Object(b.jsx)("th",{children:"Position"}),Object(b.jsx)("th",{children:"Department"}),Object(b.jsx)("th",{children:"Location"}),Object(b.jsx)("th",{children:"Country"}),Object(b.jsx)("th",{children:"Contract"})]})}),Object(b.jsx)("tbody",{children:c.map((function(t,c){return Object(b.jsxs)("tr",{onClick:function(){return e.handleEmployeeClick(t)},children:[Object(b.jsx)("td",{children:Object(b.jsx)("h3",{children:t.name})}),Object(b.jsx)("td",{children:Object(b.jsx)("h3",{children:t.position})}),Object(b.jsx)("td",{children:Object(b.jsx)("h3",{children:t.department})}),Object(b.jsx)("td",{children:Object(b.jsx)("h3",{children:t.location})}),Object(b.jsx)("td",{children:Object(b.jsx)("h3",{children:t.country})}),Object(b.jsx)("td",{children:Object(b.jsx)("h3",{children:t.contract})})]},c)}))})]}),c.length<=0&&Object(b.jsx)("div",{className:"wb-100 empty-state flex fdr aic jcc",children:"No employees found with this name !"})]})]})}}]),c}(s.Component),N=function(e){Object(n.a)(c,e);var t=Object(l.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"employees flex fdc aic jcfs",children:Object(b.jsx)(C,{})})}}]),c}(s.Component)}}]);
//# sourceMappingURL=8.58b0749c.chunk.js.map