(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ee26348"],{"10d8":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"shared-header"}},[a("v-row",{attrs:{"no-gutters":"","align-md":"center"}},[a("v-btn",{staticClass:"mx-md-2",attrs:{text:"",fab:"",small:""},on:{click:t.util.routeBack}},[a("v-icon",[t._v("mdi-arrow-left")])],1),a("div",{staticClass:"headline mx-md-auto"},[t._v(t._s(t.title))])],1),a("v-divider")],1)},i=[],s=a("ca00"),r={name:"shared-header",props:{title:String},computed:{util:function(){return s}}},o=r,c=a("2877"),d=a("6544"),l=a.n(d),u=a("8336"),v=a("ce7e"),m=a("132d"),h=a("0fd9"),f=Object(c["a"])(o,n,i,!1,null,null,null),p=f.exports;l()(f,{VBtn:u["a"],VDivider:v["a"],VIcon:m["a"],VRow:h["a"]});e["a"]=p},"8d6e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"recognition-detail"}},[a("shared-header",{attrs:{title:t.title}}),0!==t.persons.length?a("v-card",{staticClass:"mx-md-auto",attrs:{"max-width":"90vw"}},[a("v-row",[a("v-slide-group",{staticClass:"mx-md-0"},[t._l(t.persons,(function(e,n){return[a("v-slide-item",[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var i=n.hover;return[a("person-detail",{attrs:{img:t.util.toAvatarSrc(e.avatar),name:e.alias,time:"未检测"}},[a("v-scale-transition",[i?a("v-overlay",{attrs:{absolute:"",opacity:"0.6"}},[a("v-btn",{attrs:{large:"",outlined:"",color:"deep-orange lighten-3"}},[t._v("手动签到")])],1):t._e()],1)],1)]}}],null,!0)})],1)]}))],2)],1)],1):a("div",{staticClass:"title text-md-center"},[t._v("所有同学已完成签到")]),a("v-card",{staticClass:"mx-md-auto",attrs:{color:"grey lighten-5",width:"99vw",flat:""}},[a("v-row",{staticClass:"my-md-2",attrs:{"justify-md":"center","align-md":"center"}},[a("div",{staticClass:"title"},[t._v("签到人数和检测头像(当前已签到"+t._s(t.totalResult.length)+"人，"+t._s(t.persons.length-t.totalResult.length)+"人)")]),a("v-chip",{staticClass:"mx-md-6",attrs:{"x-large":"",label:"",outlined:"",color:"green"},on:{click:function(e){t.attendanceShow=!t.attendanceShow}}},[a("span",[t._v(t._s(t.attendanceShow?"关闭":"展开")+"详情")]),a("v-icon",[t._v(t._s(t.attendanceShow?"mdi-arrow-down":"mdi-menu"))])],1)],1)],1),a("v-divider"),a("v-scroll-y-transition",[a("v-row",{directives:[{name:"show",rawName:"v-show",value:t.attendanceShow,expression:"attendanceShow"}],attrs:{"justify-md":"center"}},[t._l(t.totalResult,(function(e,n){return[a("person-detail",{key:n,attrs:{img:t.util.toFaceSrc(e.face),name:e.name,time:e.time}})]}))],2)],1)],1)},i=[],s=(a("99af"),a("7db0"),a("4160"),a("c975"),a("a434"),a("159b"),a("ca00")),r=a("e072"),o=a("ceff"),c=a("10d8"),d={name:"recognition-detail",components:{PersonDetail:o["a"],SharedHeader:c["a"]},computed:{util:function(){return s},title:function(){return"历史考勤详情(".concat(this.gatherName," | ").concat(this.attendanceName,")")}},data:function(){return{attendanceShow:!0,attendanceId:-1,gatherId:-1,totalResult:[],persons:[]}},created:function(){var t=this;t.attendanceId=t.$route.params.attendanceId,t.attendanceName=t.$route.params.attendanceName,t.gatherId=t.$route.params.gatherId,t.gatherName=t.$route.params.gatherName,r["l"](t.gatherId).then((function(e){t.persons=e,r["h"](t.attendanceId).then((function(e){e.forEach((function(e){var a=t._.find(t.persons,{id:e.personId});t.totalResult.push({name:a.alias,avatar:a.avatar,face:e.face,scope:e.scope,time:e.modifyTime}),console.log(a),t.persons.splice(t.persons.indexOf(a))}))}))}))},methods:{}},l=d,u=a("2877"),v=a("6544"),m=a.n(v),h=a("8336"),f=a("b0af"),p=a("cc20"),g=a("ce7e"),w=a("ce87"),b=a("132d"),_=a("a797"),S=a("0fd9"),x=a("0789"),y=a("7efd"),V=a("9dbe"),C=Object(u["a"])(l,n,i,!1,null,null,null),I=C.exports;m()(C,{VBtn:h["a"],VCard:f["a"],VChip:p["a"],VDivider:g["a"],VHover:w["a"],VIcon:b["a"],VOverlay:_["a"],VRow:S["a"],VScaleTransition:x["e"],VScrollYTransition:x["f"],VSlideGroup:y["b"],VSlideItem:V["a"]});e["default"]=I},"9dbe":function(t,e,a){"use strict";var n=a("ade3"),i=a("4e82"),s=a("58df"),r=a("d9bd"),o=a("2b0e"),c=o["a"].extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:Object(n["a"])({},this.activeClass,this.isActive)}),t):(Object(r["c"])("v-item should only contain a single element",this),t)):(Object(r["c"])("v-item is missing a default scopedSlot",this),null);var t}});Object(s["a"])(c,Object(i["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),e["a"]=Object(s["a"])(c,Object(i["a"])("slideGroup")).extend({name:"v-slide-item"})}}]);