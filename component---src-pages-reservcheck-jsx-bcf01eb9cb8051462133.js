(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{165:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(185),l=a.n(s),c=a(52),m=a(186),u=a(180),p=a.n(u),f={pay:{display:"flex",direction:"column",justifyContent:"center",width:510,height:750,padding:"8px 25px"}},h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(m.a,{title:"결제"},o.a.createElement("div",{className:"about-container"},o.a.createElement(l.a,null,o.a.createElement("title",null,"reservcheck | "+p.a.siteTitle),o.a.createElement("link",{rel:"canonical",href:p.a.siteUrl+"/reservcheck"})),o.a.createElement(c.Link,{to:"/reservsuccess"},o.a.createElement("img",{style:f.pay,src:"../assets/reservcheck.PNG",alt:"pays"}))))},t}(i.Component);t.default=h},180:function(e,t,a){a(32);var n={siteTitle:"Emoticon - 3DYo",siteTitleShort:"3DYo",siteTitleAlt:"Emoticon - 3DYo",siteLogo:"/logos/logo-1024.png",siteUrl:"https://fliklab.github.io/Emoticon3D-Material",pathPrefix:"/Emoticon3D-Material",fixedFooter:!1,siteDescription:"A GatsbyJS stater with Material design in mind.",siteRss:"/rss.xml",siteFBAppID:"1825356251115265",siteGATrackingID:"UA-47311644-4",disqusShortname:"https-vagr9k-github-io-gatsby-material-starter",postDefaultCategoryID:"추가하기",dateFromFormat:"YYYY-MM-DD",dateFormat:"YYYY/MM/DD",userName:"Emoticon",userEmail:"Emoticon-HCI@emoticon.com",userTwitter:"",userLocation:"CAU, Seoul",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.",userLinks:[{label:"GitHub",url:"https://github.com/fliklab/Emoticon3D-Material",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/",iconClassName:"fa fa-twitter"},{label:"Email",url:"jsh852@gmail.com",iconClassName:"fa fa-envelope"}],copyright:"UI Design Project by Team Emoticon, 2019-2 HCI"};"/"===n.pathPrefix?n.pathPrefix="":n.pathPrefix="/"+n.pathPrefix.replace(/^\/|\/$/g,""),"/"===n.siteUrl.substr(-1)&&(n.siteUrl=n.siteUrl.slice(0,-1)),n.siteRss&&"/"!==n.siteRss[0]&&(n.siteRss="/"+n.siteRss),e.exports=n},182:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(181),l=a.n(s),c=(a(194),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getLinkElements=function(){var e=this.props.config.userLinks,t=this.props.labeled;return e.map(function(e){return o.a.createElement(l.a,{icon:!t,flat:t,secondary:!0,key:e.label,iconClassName:e.iconClassName,href:e.url},t?e.label:"")})},a.render=function(){return this.props.config.userLinks?o.a.createElement("div",{className:"user-links"},this.getLinkElements()):null},t}(i.Component));t.a=c},186:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(185),l=a.n(s),c=(a(192),a(14),a(184)),m=a(193),u=a.n(m),p=a(182),f=(a(195),i.Component,a(181)),h=a.n(f),E=a(52),d=a(180),b=a.n(d),g=(a(196),i.Component,a(189)),y=a.n(g);var v=function(e){var t=[{primaryText:"Home",leftIcon:o.a.createElement(y.a,null,"home"),component:E.Link,to:"/"},{divider:!0}];return e.userLinks&&e.userLinks.forEach(function(e){t.push({primaryText:e.label,leftIcon:o.a.createElement(y.a,{forceSize:!0,iconClassName:e.iconClassName}),component:"a",href:e.url})}),t.push({divider:!0}),t.push({primaryText:"About",leftIcon:o.a.createElement(y.a,null,"person"),component:E.Link,to:"/about/"}),t},k=(a(197),[o.a.createElement(c.a,{key:"home",icon:!0},"home")]),N=(i.Component,a(198),a(199),a(200),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("footer",{className:"footer footer-fixed"},o.a.createElement("div",{className:"boxes-container"},o.a.createElement(E.Link,{to:"/search"},o.a.createElement("div",{className:"button-group"},o.a.createElement("img",{src:"../assets/main1_64.png",alt:"icon",className:"button1"}),o.a.createElement("p",{className:"button-label"},"모델검색"))),o.a.createElement(E.Link,{to:"/more"},o.a.createElement("div",{className:"button-group"},o.a.createElement("img",{src:"../assets/main2_64.png",alt:"icon",className:"button1"}),o.a.createElement("p",{className:"button-label"},"내3D모델"))),o.a.createElement(E.Link,{to:"/reserv"},o.a.createElement("div",{className:"button-group"},o.a.createElement("img",{src:"../assets/main3_64.png",alt:"icon",className:"button1"}),o.a.createElement("p",{className:"button-label"},"예약하기"))),o.a.createElement(E.Link,{to:"/check_print3"},o.a.createElement("div",{className:"button-group"},o.a.createElement("img",{src:"../assets/main4_64.png",alt:"icon",className:"button1"}),o.a.createElement("p",{className:"button-label"},"출력상태"))),o.a.createElement(E.Link,{to:"/about2"},o.a.createElement("div",{className:"button-group"},o.a.createElement("img",{src:"../assets/main5_64.png",alt:"icon",className:"button1"}),o.a.createElement("p",{className:"button-label"},"더보기")))))},t}(i.Component)),x=(a(201),{fullPage:{display:"flex",flexDirection:"column"},topBlank:{width:"100%"},bottomBlank:{width:"100%"},content:{flex:1,width:"480px"}});var C=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.config,n=e.LocalTitle;return o.a.createElement("div",{className:"outerBox",style:x.fullPage},o.a.createElement("div",{style:x.topBlank}),o.a.createElement("div",{style:x.content},t),o.a.createElement("div",{style:x.bottomBlank}),o.a.createElement("div",{className:"topnav-fixed"},o.a.createElement(h.a,{className:"user-button",icon:"fa-back",primary:!0,key:"about",iconClassName:"fa fa-arrow-left",href:a.pathPrefix+"/"}),o.a.createElement("p",null,n),o.a.createElement(h.a,{className:"user-button",icon:"fa-home",primary:!0,key:"about",iconClassName:"fa fa-home",href:"/"})))},t}(i.Component);a.d(t,"a",function(){return w});var D={fullPage:{display:"flex",flexDirection:"column"},topBlank:{width:"100%",height:"80px"},bottomBlank:{width:"100%",height:"70px"},content:{width:"100%",height:"1000px"}},w=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement(C,{config:b.a,LocalTitle:this.props.title},o.a.createElement("div",{style:D.fullPage},o.a.createElement(l.a,null,o.a.createElement("meta",{name:"description",content:b.a.siteDescription})),o.a.createElement("div",{style:D.topBlank}),o.a.createElement("div",{style:D.content},e),o.a.createElement("div",{style:D.bottomBlank}),o.a.createElement(N,null)))},t}(o.a.Component)}}]);
//# sourceMappingURL=component---src-pages-reservcheck-jsx-bcf01eb9cb8051462133.js.map