(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{161:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),l=(a(653),a(0)),r=a.n(l),o=a(185),s=a.n(o),c=a(184),m=a(52),p=a(186),u=a(180),f=a.n(u),h={card:{display:"flex",direction:"row",justifyContent:"space-between",padding:"0em 0em 0.8em 0.8em",borderBottom:"1px solid lightgray",margin:"0 0 0 0"},leftBox:{display:"flex",flex:1,flexDirection:"column",justifyContent:"center",alignItems:"baseline"},title:{paddingTop:"0em",paddingBottom:"0em",fontSize:"1.1em",textAlign:"left",textOverflow:"ellipsis",overflow:"hidden",width:"100%",maxHeight:"2.8em",whiteSpace:"normal",boxOrient:"hrizontal",display:"box"},thumbnail:{display:"flex",direction:"row",alignSelf:"center",marginLeft:4,width:84,height:84},info:{display:"flex",direction:"column",textAlign:"left",height:10}},d=function(e){var t=e.name,a=e.info1,n=e.info2,i=e.img;return r.a.createElement("div",{style:h.card},r.a.createElement("div",{style:h.leftBox},r.a.createElement("p",{style:h.title},t),r.a.createElement("div",null,r.a.createElement("p",{style:h.info},a),r.a.createElement("p",{style:h.info},n))),r.a.createElement("img",{style:h.thumbnail,alt:"장소 이미지",src:i}))},E=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return r.a.createElement(p.a,{title:"장소 검색"},r.a.createElement("div",{className:"about-container"},r.a.createElement(s.a,null,r.a.createElement("title",null,"place | "+f.a.siteTitle),r.a.createElement("link",{rel:"canonical",href:f.a.siteUrl+"/place"})),r.a.createElement("div",null,r.a.createElement(c.b,{className:"md-grid md-cell--8"},r.a.createElement(m.Link,{to:"/reservplace"},r.a.createElement(d,{name:"이모티콘3D 메이커스페이스",info1:"유료∙교육 필요",info2:"동작구",img:f.a.siteUrl+"/assets/places/place_cau.png"})),r.a.createElement(d,{name:"중앙대학교 메이커스페이스",info1:"교직원,학생 무료∙교육 필수 ",info2:"동작구",img:f.a.siteUrl+"/assets/places/place_makerspace.PNG"}),r.a.createElement(d,{name:"팹랩 서울",info1:"유료∙교육 필수",info2:"종로구",img:f.a.siteUrl+"/assets/places/place_fablab.png"}),r.a.createElement(d,{name:"디지털대장간",info1:"유료∙교육 필수",info2:"용산구",img:f.a.siteUrl+"/assets/places/place_digital.png"}),r.a.createElement(d,{name:"",info1:"",info2:""}),r.a.createElement(d,{name:"",info1:"",info2:""})))))},t}(l.Component);t.default=E},180:function(e,t,a){a(32);var n={siteTitle:"Emoticon - 3DYo",siteTitleShort:"3DYo",siteTitleAlt:"Emoticon - 3DYo",siteLogo:"/logos/logo-1024.png",siteUrl:"https://fliklab.github.io/Emoticon3D-Material",pathPrefix:"/Emoticon3D-Material",fixedFooter:!1,siteDescription:"A GatsbyJS stater with Material design in mind.",siteRss:"/rss.xml",siteFBAppID:"1825356251115265",siteGATrackingID:"UA-47311644-4",disqusShortname:"https-vagr9k-github-io-gatsby-material-starter",postDefaultCategoryID:"추가하기",dateFromFormat:"YYYY-MM-DD",dateFormat:"YYYY/MM/DD",userName:"Emoticon",userEmail:"Emoticon-HCI@emoticon.com",userTwitter:"",userLocation:"CAU, Seoul",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.",userLinks:[{label:"GitHub",url:"https://github.com/fliklab/Emoticon3D-Material",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/",iconClassName:"fa fa-twitter"},{label:"Email",url:"jsh852@gmail.com",iconClassName:"fa fa-envelope"}],copyright:"UI Design Project by Team Emoticon, 2019-2 HCI"};"/"===n.pathPrefix?n.pathPrefix="":n.pathPrefix="/"+n.pathPrefix.replace(/^\/|\/$/g,""),"/"===n.siteUrl.substr(-1)&&(n.siteUrl=n.siteUrl.slice(0,-1)),n.siteRss&&"/"!==n.siteRss[0]&&(n.siteRss="/"+n.siteRss),e.exports=n},182:function(e,t,a){"use strict";var n=a(7),i=a.n(n),l=a(0),r=a.n(l),o=a(181),s=a.n(o),c=(a(194),function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var a=t.prototype;return a.getLinkElements=function(){var e=this.props.config.userLinks,t=this.props.labeled;return e.map(function(e){return r.a.createElement(s.a,{icon:!t,flat:t,secondary:!0,key:e.label,iconClassName:e.iconClassName,href:e.url},t?e.label:"")})},a.render=function(){return this.props.config.userLinks?r.a.createElement("div",{className:"user-links"},this.getLinkElements()):null},t}(l.Component));t.a=c},186:function(e,t,a){"use strict";var n=a(7),i=a.n(n),l=a(0),r=a.n(l),o=a(185),s=a.n(o),c=(a(192),a(14),a(184)),m=a(193),p=a.n(m),u=a(182),f=(a(195),l.Component,a(181)),h=a.n(f),d=a(52),E=a(180),g=a.n(E),b=(a(196),l.Component,a(189)),y=a.n(b);var v=function(e){var t=[{primaryText:"Home",leftIcon:r.a.createElement(y.a,null,"home"),component:d.Link,to:"/"},{divider:!0}];return e.userLinks&&e.userLinks.forEach(function(e){t.push({primaryText:e.label,leftIcon:r.a.createElement(y.a,{forceSize:!0,iconClassName:e.iconClassName}),component:"a",href:e.url})}),t.push({divider:!0}),t.push({primaryText:"About",leftIcon:r.a.createElement(y.a,null,"person"),component:d.Link,to:"/about/"}),t},k=(a(197),[r.a.createElement(c.a,{key:"home",icon:!0},"home")]),x=(l.Component,a(198),a(199),a(200),function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return r.a.createElement("footer",{className:"footer footer-fixed"},r.a.createElement("div",{className:"boxes-container"},r.a.createElement(d.Link,{to:"/search"},r.a.createElement("div",{className:"button-group"},r.a.createElement("img",{src:g.a.siteUrl+"/assets/main1_64.png",alt:"icon",className:"button1"}),r.a.createElement("p",{className:"button-label"},"모델검색"))),r.a.createElement(d.Link,{to:"/more"},r.a.createElement("div",{className:"button-group"},r.a.createElement("img",{src:g.a.siteUrl+"/assets/main2_64.png",alt:"icon",className:"button1"}),r.a.createElement("p",{className:"button-label"},"내3D모델"))),r.a.createElement(d.Link,{to:"/reserv"},r.a.createElement("div",{className:"button-group"},r.a.createElement("img",{src:g.a.siteUrl+"/assets/main3_64.png",alt:"icon",className:"button1"}),r.a.createElement("p",{className:"button-label"},"예약하기"))),r.a.createElement(d.Link,{to:"/check_print3"},r.a.createElement("div",{className:"button-group"},r.a.createElement("img",{src:g.a.siteUrl+"/assets/main4_64.png",alt:"icon",className:"button1"}),r.a.createElement("p",{className:"button-label"},"출력상태"))),r.a.createElement(d.Link,{to:"/about2"},r.a.createElement("div",{className:"button-group"},r.a.createElement("img",{src:g.a.siteUrl+"/assets/main5_64.png",alt:"icon",className:"button1"}),r.a.createElement("p",{className:"button-label"},"더보기")))))},t}(l.Component)),N=(a(201),{fullPage:{display:"flex",flexDirection:"column"},topBlank:{width:"100%"},bottomBlank:{width:"100%"},content:{flex:1,width:"500px"}}),w=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=(e.config,e.LocalTitle);return r.a.createElement("div",{className:"outerBox",style:N.fullPage},r.a.createElement("div",{style:N.topBlank}),r.a.createElement("div",{style:N.content},t),r.a.createElement("div",{style:N.bottomBlank}),r.a.createElement("div",{className:"topnav-fixed"},r.a.createElement(h.a,{className:"user-button",icon:"fa-back",primary:!0,key:"about",iconClassName:"fa fa-arrow-left",href:"/Emoticon3D-Material"}),r.a.createElement("p",null,a),r.a.createElement(h.a,{className:"user-button",icon:"fa-home",primary:!0,key:"about",iconClassName:"fa fa-home",href:"/Emoticon3D-Material"})))},t}(l.Component);a.d(t,"a",function(){return C});var D={fullPage:{display:"flex",flexDirection:"column"},topBlank:{width:"100%",height:"80px"},bottomBlank:{width:"100%",height:"70px"},content:{width:"100%",height:"1000px"}},C=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.children;return r.a.createElement(w,{config:g.a,LocalTitle:this.props.title},r.a.createElement("div",{style:D.fullPage},r.a.createElement(s.a,null,r.a.createElement("meta",{name:"description",content:g.a.siteDescription})),r.a.createElement("div",{style:D.topBlank}),r.a.createElement("div",{style:D.content},e),r.a.createElement("div",{style:D.bottomBlank}),r.a.createElement(x,null)))},t}(r.a.Component)},653:function(e,t,a){var n=a(24).f,i=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in i||a(18)&&n(i,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-place-jsx-fa709a24837603f4f91f.js.map