(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{154:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),o=a(0),i=a.n(o),s=a(173),l=a.n(s),c=a(172),m=a.n(c),u=a(163),p=a.n(u),f=a(214),h=a(169),d=a(162),b=a.n(d),E=(a(374),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(h.a,{location:this.props.location,title:"notAbout"},i.a.createElement("div",{className:"notAbout-container"},i.a.createElement(p.a,null,i.a.createElement("title",null,"notAbout | "+b.a.siteTitle),i.a.createElement("link",{rel:"canonical",href:b.a.siteUrl+"/notAbout/"})),i.a.createElement("div",{className:"notAbout-container md-grid mobile-fix"},i.a.createElement(l.a,{className:"md-grid md-cell--8"},i.a.createElement("div",{className:"notAbout-wrapper"},i.a.createElement("img",{src:b.a.userAvatar,className:"notAbout-img",alt:b.a.userName}),i.a.createElement(m.a,null,i.a.createElement("p",{className:"notAbout-text md-body-1"},"글자글자"),i.a.createElement("p",{className:"notAbout-text md-body-1"},"카드텍스트"),i.a.createElement("p",{className:"notAbout-text md-body-1"},b.a.userDescription)),i.a.createElement(f.a,{labeled:!0,config:b.a}))))))},t}(o.Component));t.default=E},162:function(e,t,a){a(33);var n={siteTitle:"Emoticon - 3DYo",siteTitleShort:"3DYo",siteTitleAlt:"Emoticon - 3DYo",siteLogo:"/logos/logo-1024.png",siteUrl:"https://fliklab.github.io/Emoticon3D-Material",pathPrefix:"Emoticon3D-Material",fixedFooter:!1,siteDescription:"A GatsbyJS stater with Material design in mind.",siteRss:"/rss.xml",siteFBAppID:"1825356251115265",siteGATrackingID:"UA-47311644-4",disqusShortname:"https-vagr9k-github-io-gatsby-material-starter",postDefaultCategoryID:"추가하기",dateFromFormat:"YYYY-MM-DD",dateFormat:"YYYY/MM/DD",userName:"Emoticon",userEmail:"Emoticon-HCI@emoticon.com",userTwitter:"",userLocation:"CAU, Seoul",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.",userLinks:[{label:"GitHub",url:"https://github.com/fliklab/Emoticon3D-Material",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/",iconClassName:"fa fa-twitter"},{label:"Email",url:"jsh852@gmail.com",iconClassName:"fa fa-envelope"}],copyright:"UI Design Project by Team Emoticon, 2019-2 HCI"};"/"===n.pathPrefix?n.pathPrefix="":n.pathPrefix="/"+n.pathPrefix.replace(/^\/|\/$/g,""),"/"===n.siteUrl.substr(-1)&&(n.siteUrl=n.siteUrl.slice(0,-1)),n.siteRss&&"/"!==n.siteRss[0]&&(n.siteRss="/"+n.siteRss),e.exports=n},169:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(0),i=a.n(o),s=a(163),l=a.n(s),c=(a(203),a(204)),m=a.n(c),u=a(215),p=a(167),f=a.n(p),h=a(52);var d=function(e){var t=[{primaryText:"Home",leftIcon:i.a.createElement(f.a,null,"home"),component:h.Link,to:"/"},{divider:!0}];return e.userLinks&&e.userLinks.forEach(function(e){t.push({primaryText:e.label,leftIcon:i.a.createElement(f.a,{forceSize:!0,iconClassName:e.iconClassName}),component:"a",href:e.url})}),t.push({divider:!0}),t.push({primaryText:"About",leftIcon:i.a.createElement(f.a,null,"person"),component:h.Link,to:"/about/"}),t},b=(a(206),[i.a.createElement(u.a,{key:"home",icon:!0},"home")]),E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.config,n=e.LocalTitle;return i.a.createElement(m.a,{drawerTitle:a.siteTitle,toolbarTitle:n,contentClassName:"main-content",navItems:d(a),mobileDrawerType:m.a.DrawerTypes,tabletDrawerType:m.a.DrawerTypes,desktopDrawerType:m.a.DrawerTypes,toolbarActions:b},i.a.createElement("div",{className:"main-container"},t))},t}(o.Component),y=a(162),g=a.n(y),N=(a(207),a(208),a(168)),v=a.n(N),k=(a(209),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("footer",{className:"footer footer-fixed"},i.a.createElement("div",{className:"boxes-container"},i.a.createElement(v.a,{className:"user-button",icon:"fa-home",secondary:!0,key:"about",iconClassName:"fa fa-home",href:""+g.a.pathPrefix},i.a.createElement("p",null,"반갑다")),i.a.createElement(v.a,{className:"user-button",icon:"fa-beer",secondary:!0,key:"menu1",iconClassName:"fa fa-heart",href:g.a.pathPrefix+"/about"},i.a.createElement("p",null,"친구야")),i.a.createElement(v.a,{className:"user-button",icon:"faHome",secondary:!0,key:"variable-md-colors-warn",iconClassName:"fa fa-comment",href:g.a.pathPrefix+"/ThisIsNotAbout/about2"},i.a.createElement("p",null,"일요일은")),i.a.createElement(v.a,{className:"user-button",icon:"faHome",secondary:!0,key:"menu3",iconClassName:"fa fa-book",href:g.a.pathPrefix+"/the-butterfly-of-the-edge"},i.a.createElement("p",null,"제발좀")),i.a.createElement(v.a,{className:"user-button",icon:"faHome",secondary:!0,key:"menu4",iconClassName:"fa fa-tag",href:g.a.pathPrefix+"/gatsby-material-starter"},i.a.createElement("p",null,"쉬게해줘"))))},t}(o.Component));a.d(t,"a",function(){return D});var D=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement(E,{config:g.a,LocalTitle:this.props.title},i.a.createElement("div",null,i.a.createElement(l.a,null,i.a.createElement("meta",{name:"description",content:g.a.siteDescription})),e,i.a.createElement(k,null)))},t}(i.a.Component)},214:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(0),i=a.n(o),s=a(168),l=a.n(s),c=(a(252),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getLinkElements=function(){var e=this.props.config.userLinks,t=this.props.labeled;return e.map(function(e){return i.a.createElement(l.a,{icon:!t,flat:t,secondary:!0,key:e.label,iconClassName:e.iconClassName,href:e.url},t?e.label:"")})},a.render=function(){return this.props.config.userLinks?i.a.createElement("div",{className:"user-links"},this.getLinkElements()):null},t}(o.Component));t.a=c}}]);
//# sourceMappingURL=component---src-pages-this-is-not-about-about-2-jsx-4c8cf0062148b122e1a7.js.map