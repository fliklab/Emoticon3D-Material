(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{154:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),o=a(0),i=a.n(o),s=a(174),l=a.n(s),c=a(173),m=a.n(c),u=a(164),p=a.n(u),f=a(165),h=a(170),d=a(161),b=a.n(d),E=(a(376),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(h.a,{location:this.props.location,title:"notAbout"},i.a.createElement("div",{className:"notAbout-container"},i.a.createElement(p.a,null,i.a.createElement("title",null,"notAbout | "+b.a.siteTitle),i.a.createElement("link",{rel:"canonical",href:b.a.siteUrl+"/notAbout/"})),i.a.createElement("div",{className:"notAbout-container md-grid mobile-fix"},i.a.createElement(l.a,{className:"md-grid md-cell--8"},i.a.createElement("div",{className:"notAbout-wrapper"},i.a.createElement("img",{src:b.a.userAvatar,className:"notAbout-img",alt:b.a.userName}),i.a.createElement(m.a,null,i.a.createElement("p",{className:"notAbout-text md-body-1"},"글자글자"),i.a.createElement("p",{className:"notAbout-text md-body-1"},"카드텍스트"),i.a.createElement("p",{className:"notAbout-text md-body-1"},b.a.userDescription)),i.a.createElement(f.a,{labeled:!0,config:b.a}))))))},t}(o.Component));t.default=E},161:function(e,t,a){var n;a(33);var r=((n={siteTitle:"Emoticon - 3DYo",siteTitleShort:"3DYo",siteTitleAlt:"Emoticon - 3DYo",siteLogo:"/logos/logo-1024.png",siteUrl:"https://fliklab.github.io/Emoticon3D-Material",pathPrefix:"/"}).pathPrefix="Emoticon3D-Material",n.fixedFooter=!1,n.siteDescription="A GatsbyJS stater with Material design in mind.",n.siteRss="/rss.xml",n.siteFBAppID="1825356251115265",n.siteGATrackingID="UA-47311644-4",n.disqusShortname="https-vagr9k-github-io-gatsby-material-starter",n.postDefaultCategoryID="추가하기",n.dateFromFormat="YYYY-MM-DD",n.dateFormat="YYYY/MM/DD",n.userName="Emoticon",n.userEmail="Emoticon-HCI@emoticon.com",n.userTwitter="",n.userLocation="CAU, Seoul",n.userAvatar="https://api.adorable.io/avatars/150/test.png",n.userDescription="Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.",n.userLinks=[{label:"GitHub",url:"https://github.com/fliklab/Emoticon3D-Material",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/",iconClassName:"fa fa-twitter"},{label:"Email",url:"jsh852@gmail.com",iconClassName:"fa fa-envelope"}],n.copyright="UI Design Project by Team Emoticon, 2019-2 HCI",n);"/"===r.pathPrefix?r.pathPrefix="":r.pathPrefix="/"+r.pathPrefix.replace(/^\/|\/$/g,""),"/"===r.siteUrl.substr(-1)&&(r.siteUrl=r.siteUrl.slice(0,-1)),r.siteRss&&"/"!==r.siteRss[0]&&(r.siteRss="/"+r.siteRss),e.exports=r},165:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(0),i=a.n(o),s=a(163),l=a.n(s),c=(a(207),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getLinkElements=function(){var e=this.props.config.userLinks,t=this.props.labeled;return e.map(function(e){return i.a.createElement(l.a,{icon:!t,flat:t,secondary:!0,key:e.label,iconClassName:e.iconClassName,href:e.url},t?e.label:"")})},a.render=function(){return this.props.config.userLinks?i.a.createElement("div",{className:"user-links"},this.getLinkElements()):null},t}(o.Component));t.a=c},170:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(0),i=a.n(o),s=a(164),l=a.n(s),c=(a(204),a(205)),m=a.n(c),u=a(218),p=a(165),f=(a(208),o.Component,a(163)),h=a.n(f),d=a(52),b=a(161),E=a.n(b),y=(a(209),o.Component,a(169)),g=a.n(y);var N=function(e){var t=[{primaryText:"Home",leftIcon:i.a.createElement(g.a,null,"home"),component:d.Link,to:"/"},{divider:!0}];return e.userLinks&&e.userLinks.forEach(function(e){t.push({primaryText:e.label,leftIcon:i.a.createElement(g.a,{forceSize:!0,iconClassName:e.iconClassName}),component:"a",href:e.url})}),t.push({divider:!0}),t.push({primaryText:"About",leftIcon:i.a.createElement(g.a,null,"person"),component:d.Link,to:"/about/"}),t},v=(a(210),[i.a.createElement(u.a,{key:"home",icon:!0},"home")]),k=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.config,n=e.LocalTitle;return i.a.createElement(m.a,{drawerTitle:a.siteTitle,toolbarTitle:n,contentClassName:"main-content",navItems:N(a),mobileDrawerType:m.a.DrawerTypes,tabletDrawerType:m.a.DrawerTypes,desktopDrawerType:m.a.DrawerTypes,toolbarActions:v},i.a.createElement("div",{className:"main-container"},t))},t}(o.Component),D=(a(211),a(212),a(213),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("footer",{className:"footer footer-fixed"},i.a.createElement("div",{className:"boxes-container"},i.a.createElement(h.a,{className:"user-button",icon:"fa-home",secondary:!0,key:"about",iconClassName:"fa fa-home",href:""+E.a.pathPrefix},i.a.createElement("p",null,"반갑다")),i.a.createElement(h.a,{className:"user-button",icon:"fa-beer",secondary:!0,key:"menu1",iconClassName:"fa fa-heart",href:E.a.pathPrefix+"/about"},i.a.createElement("p",null,"친구야")),i.a.createElement(h.a,{className:"user-button",icon:"faHome",secondary:!0,key:"variable-md-colors-warn",iconClassName:"fa fa-comment",href:E.a.pathPrefix+"/ThisIsNotAbout/about2"},i.a.createElement("p",null,"일요일은")),i.a.createElement(h.a,{className:"user-button",icon:"faHome",secondary:!0,key:"menu3",iconClassName:"fa fa-book",href:E.a.pathPrefix+"/the-butterfly-of-the-edge"},i.a.createElement("p",null,"제발좀")),i.a.createElement(h.a,{className:"user-button",icon:"faHome",secondary:!0,key:"menu4",iconClassName:"fa fa-tag",href:E.a.pathPrefix+"/gatsby-material-starter"},i.a.createElement("p",null,"쉬게해줘"))))},t}(o.Component));a.d(t,"a",function(){return C});var C=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement(k,{config:E.a,LocalTitle:this.props.title},i.a.createElement("div",null,i.a.createElement(l.a,null,i.a.createElement("meta",{name:"description",content:E.a.siteDescription})),e,i.a.createElement(D,null)))},t}(i.a.Component)}}]);
//# sourceMappingURL=component---src-pages-this-is-not-about-about-2-jsx-baf681edf80d47207702.js.map