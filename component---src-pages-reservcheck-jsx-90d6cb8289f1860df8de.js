(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{165:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),o=a(0),i=a.n(o),s=a(185),l=a.n(s),c=a(52),m=a(186),u=a(180),p=a.n(u),f={pay:{display:"flex",direction:"column",justifyContent:"center",width:510,height:750,padding:"8px 25px"}},h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(m.a,{title:"결제"},i.a.createElement("div",{className:"about-container"},i.a.createElement(l.a,null,i.a.createElement("title",null,"reservcheck | "+p.a.siteTitle),i.a.createElement("link",{rel:"canonical",href:p.a.siteUrl+"/reservcheck"})),i.a.createElement(c.Link,{to:"/reservsuccess"},i.a.createElement("img",{style:f.pay,src:"../assets/reservcheck.PNG",alt:"pays"}))))},t}(o.Component);t.default=h},180:function(e,t,a){a(32);var n={siteTitle:"Emoticon - 3DYo",siteTitleShort:"3DYo",siteTitleAlt:"Emoticon - 3DYo",siteLogo:"/logos/logo-1024.png",siteUrl:"https://fliklab.github.io/Emoticon3D-Material",pathPrefix:"/Emoticon3D-Material",fixedFooter:!1,siteDescription:"A GatsbyJS stater with Material design in mind.",siteRss:"/rss.xml",siteFBAppID:"1825356251115265",siteGATrackingID:"UA-47311644-4",disqusShortname:"https-vagr9k-github-io-gatsby-material-starter",postDefaultCategoryID:"추가하기",dateFromFormat:"YYYY-MM-DD",dateFormat:"YYYY/MM/DD",userName:"Emoticon",userEmail:"Emoticon-HCI@emoticon.com",userTwitter:"",userLocation:"CAU, Seoul",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.",userLinks:[{label:"GitHub",url:"https://github.com/fliklab/Emoticon3D-Material",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/",iconClassName:"fa fa-twitter"},{label:"Email",url:"jsh852@gmail.com",iconClassName:"fa fa-envelope"}],copyright:"UI Design Project by Team Emoticon, 2019-2 HCI"};"/"===n.pathPrefix?n.pathPrefix="":n.pathPrefix="/"+n.pathPrefix.replace(/^\/|\/$/g,""),"/"===n.siteUrl.substr(-1)&&(n.siteUrl=n.siteUrl.slice(0,-1)),n.siteRss&&"/"!==n.siteRss[0]&&(n.siteRss="/"+n.siteRss),e.exports=n},182:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(0),i=a.n(o),s=a(181),l=a.n(s),c=(a(194),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getLinkElements=function(){var e=this.props.config.userLinks,t=this.props.labeled;return e.map(function(e){return i.a.createElement(l.a,{icon:!t,flat:t,secondary:!0,key:e.label,iconClassName:e.iconClassName,href:e.url},t?e.label:"")})},a.render=function(){return this.props.config.userLinks?i.a.createElement("div",{className:"user-links"},this.getLinkElements()):null},t}(o.Component));t.a=c},186:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(0),i=a.n(o),s=a(185),l=a.n(s),c=(a(192),a(14),a(184)),m=a(193),u=a.n(m),p=a(182),f=(a(195),o.Component,a(181)),h=a.n(f),d=a(52),E=a(180),b=a.n(E),g=(a(196),o.Component,a(189)),y=a.n(g);var k=function(e){var t=[{primaryText:"Home",leftIcon:i.a.createElement(y.a,null,"home"),component:d.Link,to:"/"},{divider:!0}];return e.userLinks&&e.userLinks.forEach(function(e){t.push({primaryText:e.label,leftIcon:i.a.createElement(y.a,{forceSize:!0,iconClassName:e.iconClassName}),component:"a",href:e.url})}),t.push({divider:!0}),t.push({primaryText:"About",leftIcon:i.a.createElement(y.a,null,"person"),component:d.Link,to:"/about/"}),t},v=(a(197),[i.a.createElement(c.a,{key:"home",icon:!0},"home")]),N=(o.Component,a(198),a(199),a(200),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("footer",{className:"footer footer-fixed"},i.a.createElement("div",{className:"boxes-container"},i.a.createElement(d.Link,{to:"/search"},i.a.createElement("div",{className:"button-group"},i.a.createElement("img",{src:"../assets/main1_64.png",alt:"icon",className:"button1"}),i.a.createElement("p",{className:"button-label"},"모델검색"))),i.a.createElement(d.Link,{to:"/more"},i.a.createElement("div",{className:"button-group"},i.a.createElement("img",{src:"../assets/main2_64.png",alt:"icon",className:"button1"}),i.a.createElement("p",{className:"button-label"},"내3D모델"))),i.a.createElement(d.Link,{to:"/reserv"},i.a.createElement("div",{className:"button-group"},i.a.createElement("img",{src:"../assets/main3_64.png",alt:"icon",className:"button1"}),i.a.createElement("p",{className:"button-label"},"예약하기"))),i.a.createElement(d.Link,{to:"/check_print3"},i.a.createElement("div",{className:"button-group"},i.a.createElement("img",{src:"../assets/main4_64.png",alt:"icon",className:"button1"}),i.a.createElement("p",{className:"button-label"},"출력상태"))),i.a.createElement(d.Link,{to:"/about2"},i.a.createElement("div",{className:"button-group"},i.a.createElement("img",{src:"../assets/main5_64.png",alt:"icon",className:"button1"}),i.a.createElement("p",{className:"button-label"},"더보기")))))},t}(o.Component)),x=(a(201),{fullPage:{display:"flex",flexDirection:"column"},topBlank:{width:"100%"},bottomBlank:{width:"100%"},content:{flex:1,width:"480px"}}),C=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.config,n=e.LocalTitle;return i.a.createElement("div",{className:"outerBox",style:x.fullPage},i.a.createElement("div",{style:x.topBlank}),i.a.createElement("div",{style:x.content},t),i.a.createElement("div",{style:x.bottomBlank}),i.a.createElement("div",{className:"topnav-fixed"},i.a.createElement(h.a,{className:"user-button",icon:"fa-back",secondary:!0,key:"about",iconClassName:"fa fa-arrow-left",href:a.pathPrefix+"/"}),i.a.createElement("p",null,n),i.a.createElement(h.a,{className:"user-button",icon:"fa-home",secondary:!0,key:"about",iconClassName:"fa fa-home",href:"/"})))},t}(o.Component);a.d(t,"a",function(){return w});var D={fullPage:{display:"flex",flexDirection:"column"},topBlank:{width:"100%",height:"80px"},bottomBlank:{width:"100%",height:"70px"},content:{width:"100%",height:"1000px"}},w=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement(C,{config:b.a,LocalTitle:this.props.title},i.a.createElement("div",{style:D.fullPage},i.a.createElement(l.a,null,i.a.createElement("meta",{name:"description",content:b.a.siteDescription})),i.a.createElement("div",{style:D.topBlank}),i.a.createElement("div",{style:D.content},e),i.a.createElement("div",{style:D.bottomBlank}),i.a.createElement(N,null)))},t}(i.a.Component)}}]);
//# sourceMappingURL=component---src-pages-reservcheck-jsx-90d6cb8289f1860df8de.js.map