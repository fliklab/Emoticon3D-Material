(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{162:function(e,t,a){"use strict";a.r(t);var n=a(7),l=a.n(n),r=a(0),i=a.n(r),o=a(185),s=a.n(o),c=a(184),m=a(186),p=a(180),u=a.n(p),d={Width:900},E=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){return i.a.createElement(m.a,{title:"장소 검색"},i.a.createElement("div",{className:"about-container"},i.a.createElement(s.a,null,i.a.createElement("title",null,"place | "+u.a.siteTitle),i.a.createElement("link",{rel:"canonical",href:u.a.siteUrl+"/place"})),i.a.createElement("div",{className:"about-container md-grid mobile-fix"},i.a.createElement(c.b,{className:"md-grid md-cell--8"},i.a.createElement(c.c,null,i.a.createElement("div",{className:"md-grid"},i.a.createElement(c.b,{style:d,className:"md-cell md-paper md-paper--1"},i.a.createElement(c.d,{title:"이모티콘 메이커스페이스"}),i.a.createElement("img",{src:"http://upload.wikimedia.org/wikipedia/en/f/f7/The_Phone_%28film%29_poster.jpeg"}),i.a.createElement(c.c,null,i.a.createElement("p",null,"교육 필수,무료 "),i.a.createElement("p",null,"동작구 ")))),i.a.createElement("div",{className:"md-grid"},i.a.createElement(c.b,{style:d,className:"md-cell md-paper md-paper--1"},i.a.createElement(c.d,{title:"중앙대 메이커스페이스"}),i.a.createElement("img",{src:"logos/mainicon_256x256.png",className:"about-img",alt:u.a.userName}),i.a.createElement(c.c,null,i.a.createElement("p",null,"교육 필수 ,학생 및 교직원만 가능, 무료 "),i.a.createElement("p",null,"동작구 ")))),i.a.createElement("div",{className:"md-grid"},i.a.createElement(c.b,{style:d,className:"md-cell md-paper md-paper--1"},i.a.createElement(c.d,{title:"디지털 대장간"}),i.a.createElement(c.c,null,i.a.createElement("p",null,"교육 필수, 무료 "),i.a.createElement("p",null,"용산구 ")))),i.a.createElement("div",{className:"md-grid"},i.a.createElement(c.b,{style:d,className:"md-cell md-paper md-paper--1"},i.a.createElement(c.d,{title:"팹랩 서울"}),i.a.createElement(c.c,null,i.a.createElement("p",null,"교육 필수, 유료 "),i.a.createElement("p",null,"종로구 ")))))))))},t}(r.Component);t.default=E},180:function(e,t,a){a(32);var n={siteTitle:"Emoticon - 3DYo",siteTitleShort:"3DYo",siteTitleAlt:"Emoticon - 3DYo",siteLogo:"/logos/logo-1024.png",siteUrl:"https://fliklab.github.io/Emoticon3D-Material",pathPrefix:"/Emoticon3D-Material",fixedFooter:!1,siteDescription:"A GatsbyJS stater with Material design in mind.",siteRss:"/rss.xml",siteFBAppID:"1825356251115265",siteGATrackingID:"UA-47311644-4",disqusShortname:"https-vagr9k-github-io-gatsby-material-starter",postDefaultCategoryID:"추가하기",dateFromFormat:"YYYY-MM-DD",dateFormat:"YYYY/MM/DD",userName:"Emoticon",userEmail:"Emoticon-HCI@emoticon.com",userTwitter:"",userLocation:"CAU, Seoul",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.",userLinks:[{label:"GitHub",url:"https://github.com/fliklab/Emoticon3D-Material",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/",iconClassName:"fa fa-twitter"},{label:"Email",url:"jsh852@gmail.com",iconClassName:"fa fa-envelope"}],copyright:"UI Design Project by Team Emoticon, 2019-2 HCI"};"/"===n.pathPrefix?n.pathPrefix="":n.pathPrefix="/"+n.pathPrefix.replace(/^\/|\/$/g,""),"/"===n.siteUrl.substr(-1)&&(n.siteUrl=n.siteUrl.slice(0,-1)),n.siteRss&&"/"!==n.siteRss[0]&&(n.siteRss="/"+n.siteRss),e.exports=n},182:function(e,t,a){"use strict";var n=a(7),l=a.n(n),r=a(0),i=a.n(r),o=a(181),s=a.n(o),c=(a(194),function(e){function t(){return e.apply(this,arguments)||this}l()(t,e);var a=t.prototype;return a.getLinkElements=function(){var e=this.props.config.userLinks,t=this.props.labeled;return e.map(function(e){return i.a.createElement(s.a,{icon:!t,flat:t,secondary:!0,key:e.label,iconClassName:e.iconClassName,href:e.url},t?e.label:"")})},a.render=function(){return this.props.config.userLinks?i.a.createElement("div",{className:"user-links"},this.getLinkElements()):null},t}(r.Component));t.a=c},186:function(e,t,a){"use strict";var n=a(7),l=a.n(n),r=a(0),i=a.n(r),o=a(185),s=a.n(o),c=(a(192),a(14),a(184)),m=a(193),p=a.n(m),u=a(182),d=(a(195),r.Component,a(181)),E=a.n(d),f=a(52),h=a(180),b=a.n(h),g=(a(196),r.Component,a(189)),y=a.n(g);var N=function(e){var t=[{primaryText:"Home",leftIcon:i.a.createElement(y.a,null,"home"),component:f.Link,to:"/"},{divider:!0}];return e.userLinks&&e.userLinks.forEach(function(e){t.push({primaryText:e.label,leftIcon:i.a.createElement(y.a,{forceSize:!0,iconClassName:e.iconClassName}),component:"a",href:e.url})}),t.push({divider:!0}),t.push({primaryText:"About",leftIcon:i.a.createElement(y.a,null,"person"),component:f.Link,to:"/about/"}),t},v=(a(197),[i.a.createElement(c.a,{key:"home",icon:!0},"home")]),k=(r.Component,a(198),a(199),a(200),function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){return i.a.createElement("footer",{className:"footer footer-fixed"},i.a.createElement("div",{className:"boxes-container"},i.a.createElement(f.Link,{to:"/search"},i.a.createElement("div",{className:"button-group"},i.a.createElement("img",{src:"../assets/main1_64.png",alt:"icon",className:"button1"}),i.a.createElement("p",{className:"button-label"},"모델검색"))),i.a.createElement(f.Link,{to:"/more"},i.a.createElement("div",{className:"button-group"},i.a.createElement("img",{src:"../assets/main2_64.png",alt:"icon",className:"button1"}),i.a.createElement("p",{className:"button-label"},"내3D모델"))),i.a.createElement(f.Link,{to:"/reserv"},i.a.createElement("div",{className:"button-group"},i.a.createElement("img",{src:"../assets/main3_64.png",alt:"icon",className:"button1"}),i.a.createElement("p",{className:"button-label"},"예약하기"))),i.a.createElement(f.Link,{to:"/check_print3"},i.a.createElement("div",{className:"button-group"},i.a.createElement("img",{src:"../assets/main4_64.png",alt:"icon",className:"button1"}),i.a.createElement("p",{className:"button-label"},"출력상태"))),i.a.createElement(f.Link,{to:"/about2"},i.a.createElement("div",{className:"button-group"},i.a.createElement("img",{src:"../assets/main5_64.png",alt:"icon",className:"button1"}),i.a.createElement("p",{className:"button-label"},"더보기")))))},t}(r.Component)),x=(a(201),{fullPage:{display:"flex",flexDirection:"column"},topBlank:{width:"100%"},bottomBlank:{width:"100%"},content:{flex:1,width:"480px"}}),D=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=(e.config,e.LocalTitle);return i.a.createElement("div",{className:"outerBox",style:x.fullPage},i.a.createElement("div",{style:x.topBlank}),i.a.createElement("div",{style:x.content},t),i.a.createElement("div",{style:x.bottomBlank}),i.a.createElement("div",{className:"topnav-fixed"},i.a.createElement(E.a,{className:"user-button",icon:"fa-back",primary:!0,key:"about",iconClassName:"fa fa-arrow-left",href:"/"}),i.a.createElement("p",null,a),i.a.createElement(E.a,{className:"user-button",icon:"fa-home",primary:!0,key:"about",iconClassName:"fa fa-home",href:"/"})))},t}(r.Component);a.d(t,"a",function(){return w});var C={fullPage:{display:"flex",flexDirection:"column"},topBlank:{width:"100%",height:"80px"},bottomBlank:{width:"100%",height:"70px"},content:{width:"100%",height:"1000px"}},w=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement(D,{config:b.a,LocalTitle:this.props.title},i.a.createElement("div",{style:C.fullPage},i.a.createElement(s.a,null,i.a.createElement("meta",{name:"description",content:b.a.siteDescription})),i.a.createElement("div",{style:C.topBlank}),i.a.createElement("div",{style:C.content},e),i.a.createElement("div",{style:C.bottomBlank}),i.a.createElement(k,null)))},t}(i.a.Component)}}]);
//# sourceMappingURL=component---src-pages-place-jsx-88825129f795d2af9f4a.js.map