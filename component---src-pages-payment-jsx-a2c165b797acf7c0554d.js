(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{160:function(e,t,a){"use strict";a.r(t);var n=a(7),o=a.n(n),i=a(0),r=a.n(i),l=a(185),s=a.n(l),c=a(186),m=a(180),u=a.n(m),p={pay:{display:"flex",direction:"column",justifyContent:"center",width:510,height:750,padding:"8px 25px"}},f=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return r.a.createElement(c.a,{title:"결제"},r.a.createElement("div",{className:"about-container"},r.a.createElement(s.a,null,r.a.createElement("title",null,"payment | "+u.a.siteTitle),r.a.createElement("link",{rel:"canonical",href:u.a.siteUrl+"/payment"})),r.a.createElement("img",{style:p.pay,src:"../assets/cardpage.png",alt:"pays"})))},t}(i.Component);t.default=f},180:function(e,t,a){a(32);var n={siteTitle:"Emoticon - 3DYo",siteTitleShort:"3DYo",siteTitleAlt:"Emoticon - 3DYo",siteLogo:"/logos/logo-1024.png",siteUrl:"https://fliklab.github.io/Emoticon3D-Material",pathPrefix:"/Emoticon3D-Material",fixedFooter:!1,siteDescription:"A GatsbyJS stater with Material design in mind.",siteRss:"/rss.xml",siteFBAppID:"1825356251115265",siteGATrackingID:"UA-47311644-4",disqusShortname:"https-vagr9k-github-io-gatsby-material-starter",postDefaultCategoryID:"추가하기",dateFromFormat:"YYYY-MM-DD",dateFormat:"YYYY/MM/DD",userName:"Emoticon",userEmail:"Emoticon-HCI@emoticon.com",userTwitter:"",userLocation:"CAU, Seoul",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.",userLinks:[{label:"GitHub",url:"https://github.com/fliklab/Emoticon3D-Material",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/",iconClassName:"fa fa-twitter"},{label:"Email",url:"jsh852@gmail.com",iconClassName:"fa fa-envelope"}],copyright:"UI Design Project by Team Emoticon, 2019-2 HCI"};"/"===n.pathPrefix?n.pathPrefix="":n.pathPrefix="/"+n.pathPrefix.replace(/^\/|\/$/g,""),"/"===n.siteUrl.substr(-1)&&(n.siteUrl=n.siteUrl.slice(0,-1)),n.siteRss&&"/"!==n.siteRss[0]&&(n.siteRss="/"+n.siteRss),e.exports=n},182:function(e,t,a){"use strict";var n=a(7),o=a.n(n),i=a(0),r=a.n(i),l=a(181),s=a.n(l),c=(a(194),function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var a=t.prototype;return a.getLinkElements=function(){var e=this.props.config.userLinks,t=this.props.labeled;return e.map(function(e){return r.a.createElement(s.a,{icon:!t,flat:t,secondary:!0,key:e.label,iconClassName:e.iconClassName,href:e.url},t?e.label:"")})},a.render=function(){return this.props.config.userLinks?r.a.createElement("div",{className:"user-links"},this.getLinkElements()):null},t}(i.Component));t.a=c},186:function(e,t,a){"use strict";var n=a(7),o=a.n(n),i=a(0),r=a.n(i),l=a(185),s=a.n(l),c=(a(192),a(14),a(184)),m=a(193),u=a.n(m),p=a(182),f=(a(195),i.Component,a(181)),h=a.n(f),E=a(52),d=a(180),b=a.n(d),g=(a(196),i.Component,a(189)),y=a.n(g);var k=function(e){var t=[{primaryText:"Home",leftIcon:r.a.createElement(y.a,null,"home"),component:E.Link,to:"/"},{divider:!0}];return e.userLinks&&e.userLinks.forEach(function(e){t.push({primaryText:e.label,leftIcon:r.a.createElement(y.a,{forceSize:!0,iconClassName:e.iconClassName}),component:"a",href:e.url})}),t.push({divider:!0}),t.push({primaryText:"About",leftIcon:r.a.createElement(y.a,null,"person"),component:E.Link,to:"/about/"}),t},v=(a(197),[r.a.createElement(c.a,{key:"home",icon:!0},"home")]),N=(i.Component,a(198),a(199),a(200),function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return r.a.createElement("footer",{className:"footer footer-fixed"},r.a.createElement("div",{className:"boxes-container"},r.a.createElement(E.Link,{to:"/search"},r.a.createElement("div",{className:"button-group"},r.a.createElement("img",{src:"Emoticon3D-Material/assets/main1_64.png",alt:"icon",className:"button1"}),r.a.createElement("p",{className:"button-label"},"모델검색"))),r.a.createElement(E.Link,{to:"/more"},r.a.createElement("div",{className:"button-group"},r.a.createElement("img",{src:"Emoticon3D-Material/assets/main2_64.png",alt:"icon",className:"button1"}),r.a.createElement("p",{className:"button-label"},"내3D모델"))),r.a.createElement(E.Link,{to:"/reserv"},r.a.createElement("div",{className:"button-group"},r.a.createElement("img",{src:"Emoticon3D-Material/assets/main3_64.png",alt:"icon",className:"button1"}),r.a.createElement("p",{className:"button-label"},"예약하기"))),r.a.createElement(E.Link,{to:"/check_print3"},r.a.createElement("div",{className:"button-group"},r.a.createElement("img",{src:"Emoticon3D-Material/assets/main4_64.png",alt:"icon",className:"button1"}),r.a.createElement("p",{className:"button-label"},"출력상태"))),r.a.createElement(E.Link,{to:"/about2"},r.a.createElement("div",{className:"button-group"},r.a.createElement("img",{src:"Emoticon3D-Material/assets/main5_64.png",alt:"icon",className:"button1"}),r.a.createElement("p",{className:"button-label"},"더보기")))))},t}(i.Component)),D=(a(201),{fullPage:{display:"flex",flexDirection:"column"},topBlank:{width:"100%"},bottomBlank:{width:"100%"},content:{flex:1,width:"500px"}}),x=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=(e.config,e.LocalTitle);return r.a.createElement("div",{className:"outerBox",style:D.fullPage},r.a.createElement("div",{style:D.topBlank}),r.a.createElement("div",{style:D.content},t),r.a.createElement("div",{style:D.bottomBlank}),r.a.createElement("div",{className:"topnav-fixed"},r.a.createElement(h.a,{className:"user-button",icon:"fa-back",primary:!0,key:"about",iconClassName:"fa fa-arrow-left",href:"/Emoticon3D-Material"}),r.a.createElement("p",null,a),r.a.createElement(h.a,{className:"user-button",icon:"fa-home",primary:!0,key:"about",iconClassName:"fa fa-home",href:"/Emoticon3D-Material"})))},t}(i.Component);a.d(t,"a",function(){return w});var C={fullPage:{display:"flex",flexDirection:"column"},topBlank:{width:"100%",height:"80px"},bottomBlank:{width:"100%",height:"70px"},content:{width:"100%",height:"1000px"}},w=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.children;return r.a.createElement(x,{config:b.a,LocalTitle:this.props.title},r.a.createElement("div",{style:C.fullPage},r.a.createElement(s.a,null,r.a.createElement("meta",{name:"description",content:b.a.siteDescription})),r.a.createElement("div",{style:C.topBlank}),r.a.createElement("div",{style:C.content},e),r.a.createElement("div",{style:C.bottomBlank}),r.a.createElement(N,null)))},t}(r.a.Component)}}]);
//# sourceMappingURL=component---src-pages-payment-jsx-a2c165b797acf7c0554d.js.map