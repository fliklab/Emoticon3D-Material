(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{156:function(e,t,a){"use strict";a.r(t);var n=a(7),o=a.n(n),r=a(0),l=a.n(r),i=a(171),s=a.n(i),c=a(176),p=a.n(c),d=a(168),u=a.n(d),f=a(166),m=a(170),h=a(164),b=a.n(h),x=(a(632),function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return l.a.createElement(m.a,{location:this.props.location,title:"notAbout"},l.a.createElement("div",{className:"notAbout-container"},l.a.createElement(u.a,null,l.a.createElement("title",null,"notAbout | "+b.a.siteTitle),l.a.createElement("link",{rel:"canonical",href:b.a.siteUrl+"/notAbout/"})),l.a.createElement("div",{className:"notAbout-container md-grid mobile-fix"},l.a.createElement(s.a,{className:"md-grid md-cell--8"},l.a.createElement("div",{className:"notAbout-wrapper"},l.a.createElement("img",{src:b.a.userAvatar,className:"notAbout-img",alt:b.a.userName}),l.a.createElement(p.a,null,l.a.createElement("p",{className:"notAbout-text md-body-1"},"글자글자"),l.a.createElement("p",{className:"notAbout-text md-body-1"},"카드텍스트"),l.a.createElement("p",{className:"notAbout-text md-body-1"},b.a.userDescription)),l.a.createElement(f.a,{labeled:!0,config:b.a}))))))},t}(r.Component));t.default=x},164:function(e,t,a){a(32);var n={siteTitle:"Emoticon - 3DYo",siteTitleShort:"3DYo",siteTitleAlt:"Emoticon - 3DYo",siteLogo:"/logos/logo-1024.png",siteUrl:"https://fliklab.github.io/Emoticon3D-Material",pathPrefix:"/Emoticon3D-Material",fixedFooter:!1,siteDescription:"A GatsbyJS stater with Material design in mind.",siteRss:"/rss.xml",siteFBAppID:"1825356251115265",siteGATrackingID:"UA-47311644-4",disqusShortname:"https-vagr9k-github-io-gatsby-material-starter",postDefaultCategoryID:"추가하기",dateFromFormat:"YYYY-MM-DD",dateFormat:"YYYY/MM/DD",userName:"Emoticon",userEmail:"Emoticon-HCI@emoticon.com",userTwitter:"",userLocation:"CAU, Seoul",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.",userLinks:[{label:"GitHub",url:"https://github.com/fliklab/Emoticon3D-Material",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/",iconClassName:"fa fa-twitter"},{label:"Email",url:"jsh852@gmail.com",iconClassName:"fa fa-envelope"}],copyright:"UI Design Project by Team Emoticon, 2019-2 HCI"};"/"===n.pathPrefix?n.pathPrefix="":n.pathPrefix="/"+n.pathPrefix.replace(/^\/|\/$/g,""),"/"===n.siteUrl.substr(-1)&&(n.siteUrl=n.siteUrl.slice(0,-1)),n.siteRss&&"/"!==n.siteRss[0]&&(n.siteRss="/"+n.siteRss),e.exports=n},166:function(e,t,a){"use strict";var n=a(7),o=a.n(n),r=a(0),l=a.n(r),i=a(165),s=a.n(i),c=(a(190),function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var a=t.prototype;return a.getLinkElements=function(){var e=this.props.config.userLinks,t=this.props.labeled;return e.map(function(e){return l.a.createElement(s.a,{icon:!t,flat:t,secondary:!0,key:e.label,iconClassName:e.iconClassName,href:e.url},t?e.label:"")})},a.render=function(){return this.props.config.userLinks?l.a.createElement("div",{className:"user-links"},this.getLinkElements()):null},t}(r.Component));t.a=c},170:function(e,t,a){"use strict";var n=a(7),o=a.n(n),r=a(0),l=a.n(r),i=a(168),s=a.n(i),c=(a(188),a(14),a(169)),p=a(189),d=a.n(p),u=a(166),f=(a(191),r.Component,a(165)),m=a.n(f),h=a(52),b=a(164),x=a.n(b),y=(a(192),r.Component,a(174)),E=a.n(y);var v=function(e){var t=[{primaryText:"Home",leftIcon:l.a.createElement(E.a,null,"home"),component:h.Link,to:"/"},{divider:!0}];return e.userLinks&&e.userLinks.forEach(function(e){t.push({primaryText:e.label,leftIcon:l.a.createElement(E.a,{forceSize:!0,iconClassName:e.iconClassName}),component:"a",href:e.url})}),t.push({divider:!0}),t.push({primaryText:"About",leftIcon:l.a.createElement(E.a,null,"person"),component:h.Link,to:"/about/"}),t},C=(a(193),[l.a.createElement(c.a,{key:"home",icon:!0},"home")]),g=(r.Component,a(194),a(195),a(196),function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return l.a.createElement("footer",{className:"footer footer-fixed"},l.a.createElement("div",{className:"boxes-container"},l.a.createElement(m.a,{className:"user-button",icon:"fa-home",secondary:!0,key:"about",iconClassName:"fa fa-home",href:""+x.a.pathPrefix},l.a.createElement("p",null,"반갑다")),l.a.createElement(m.a,{className:"user-button",icon:"fa-beer",secondary:!0,key:"menu1",iconClassName:"fa fa-heart",href:x.a.pathPrefix+"/about"},l.a.createElement("p",null,"친구야")),l.a.createElement(m.a,{className:"user-button",icon:"faHome",secondary:!0,key:"variable-md-colors-warn",iconClassName:"fa fa-comment",href:x.a.pathPrefix+"/t3place"},l.a.createElement("p",null,"장소검색")),l.a.createElement(m.a,{className:"user-button",icon:"faHome",secondary:!0,key:"menu3",iconClassName:"fa fa-book",href:x.a.pathPrefix+"/t3place"},l.a.createElement("p",null,"제발좀")),l.a.createElement(m.a,{className:"user-button",icon:"faHome",secondary:!0,key:"menu4",iconClassName:"fa fa-tag",href:x.a.pathPrefix+"/t3place"},l.a.createElement("p",null,"쉬게해줘"))))},t}(r.Component)),N=(a(197),function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.config,n=e.LocalTitle;return l.a.createElement("div",{className:"outerBox"},l.a.createElement("div",{className:"topnav-fixed"},l.a.createElement(m.a,{className:"user-button",icon:"fa-back",secondary:!0,key:"about",iconClassName:"fa fa-arrow-left",href:""+a.pathPrefix}),l.a.createElement("p",null,n),l.a.createElement(m.a,{className:"user-button",icon:"fa-home",secondary:!0,key:"about",iconClassName:"fa fa-home",href:""+a.pathPrefix})),l.a.createElement("div",{className:"topnav-main-container"},t))},t}(r.Component));a.d(t,"a",function(){return T});var k={topBlank:{height:"80px"},bottomBlank:{height:"70px"}},T=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.children;return l.a.createElement(N,{config:x.a,LocalTitle:this.props.title},l.a.createElement("div",null,l.a.createElement(s.a,null,l.a.createElement("meta",{name:"description",content:x.a.siteDescription})),l.a.createElement("div",{style:k.topBlank}),l.a.createElement("div",{style:k.topBlank}),l.a.createElement("div",{style:k.topBlank}),l.a.createElement("div",{style:k.topBlank}),e,l.a.createElement("div",{style:k.bottomBlank}),l.a.createElement(g,null)))},t}(l.a.Component)},171:function(e,t,a){"use strict";t.__esModule=!0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=a(0),r=b(o),l=b(a(161)),i=b(a(162)),s=b(a(163)),c=b(a(181)),p=b(a(172)),d=b(a(177)),u=b(a(185)),f=b(a(173)),m=b(a(186)),h=b(a(205));function b(e){return e&&e.__esModule?e:{default:e}}var x=function(e){function t(a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,a));return n._handleMouseOver=function(e){n.props.onMouseOver&&n.props.onMouseOver(e),n.props.raise&&!n._touched&&n.setState({zDepth:4})},n._handleMouseLeave=function(e){n.props.onMouseLeave&&n.props.onMouseLeave(e),n._touched=!1,n.props.raise&&1!==n.state.zDepth&&n.setState({zDepth:1})},n._handleTouchStart=function(e){n.props.onTouchStart&&n.props.onTouchStart(e),n._touched=!0},n._handleExpandClick=function(e){var t=n.props.onExpanderClick,a=!(0,p.default)(n.props,n.state,"expanded");t&&t(a,e),void 0===n.props.expanded&&n.setState({expanded:a})},n.state={zDepth:1,expanded:void 0!==a.initiallyExpanded?a.initiallyExpanded:!!a.defaultExpanded},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.getChildContext=function(){var e=this.props,t=e.expanderTooltipLabel,a=e.expanderTooltipDelay,n=e.expanderTooltipPosition,o=e.expanderIcon,r=e.iconClassName,l=e.iconChildren,i=e.expanderIconClassName,s=e.expanderIconChildren;return{expanded:void 0!==this.props.isExpanded?this.props.isExpanded:(0,p.default)(this.props,this.state,"expanded"),onExpandClick:this._handleExpandClick,icon:(0,u.default)(l||s,r||i,o),tooltipLabel:t,tooltipDelay:a,tooltipPosition:n}},t.prototype.render=function(){var e=this.state.zDepth,t=this.props,a=t.className,l=t.raise,s=t.tableCard,c=t.children,d=t.animate,u=(t.expanded,t.onExpanderClick,t.defaultExpanded,t.expanderIcon,t.expanderIconChildren,t.expanderIconClassName,t.expanderTooltipLabel,t.expanderTooltipDelay,t.expanderTooltipPosition,t.iconChildren,t.iconClassName,t.isExpanded,t.initiallyExpanded,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","raise","tableCard","children","animate","expanded","onExpanderClick","defaultExpanded","expanderIcon","expanderIconChildren","expanderIconClassName","expanderTooltipLabel","expanderTooltipDelay","expanderTooltipPosition","iconChildren","iconClassName","isExpanded","initiallyExpanded"])),f=void 0!==this.props.isExpanded?this.props.isExpanded:(0,p.default)(this.props,this.state,"expanded"),b=-1,x=o.Children.map(o.Children.toArray(c),function(e,t){if(!e||!e.props)return e;if(b<0&&(e.props.isExpander||e.props.expander)&&(b=t),!e.props.expandable)return e;var a=-1===b||b===t||!f;return r.default.createElement(h.default,{collapsed:a,animate:d},e)});return r.default.createElement(m.default,n({},u,{zDepth:e,className:(0,i.default)("md-card",{"md-card--raise":l,"md-card--table":s},"md-background--card",a),onMouseOver:this._handleMouseOver,onMouseLeave:this._handleMouseLeave,onTouchStart:this._handleTouchStart}),x)},t}(o.PureComponent);x.propTypes={style:l.default.object,className:l.default.string,children:l.default.node,defaultExpanded:l.default.bool,raise:l.default.bool,expanded:(0,c.default)(l.default.bool,"onExpanderClick","defaultExpanded"),onExpanderClick:l.default.func,expanderIcon:l.default.element,expanderTooltipPosition:l.default.oneOf(["top","right","bottom","left"]),expanderTooltipLabel:l.default.node,expanderTooltipDelay:l.default.number,tableCard:l.default.bool,onMouseOver:l.default.func,onMouseLeave:l.default.func,onTouchStart:l.default.func,animate:l.default.bool,expanderIconClassName:(0,s.default)(l.default.string,"Use `expanderIcon` instead"),expanderIconChildren:(0,s.default)(l.default.node,"Use `expanderIcon` instead"),initiallyExpanded:(0,s.default)(l.default.bool,"Use `defaultExpanded` instead"),isExpanded:(0,s.default)(l.default.bool,"Use `expanded` instead"),iconChildren:(0,s.default)(l.default.node,"Use the `expanderIconChildren` prop instead"),iconClassName:(0,s.default)(l.default.string,"Use the `expanderIconClassName` prop instead")},x.defaultProps={animate:!0,expanderIcon:r.default.createElement(f.default,null,"keyboard_arrow_down"),expanderTooltipPosition:"left"},x.childContextTypes=d.default,t.default=x},176:function(e,t,a){"use strict";t.__esModule=!0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=a(0),r=s(o),l=s(a(161)),i=s(a(162));function s(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=e.component,a=e.className,o=(e.expandable,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["component","className","expandable"]));return r.default.createElement(t,n({},o,{className:(0,i.default)("md-card-text",a)}))},t}(o.PureComponent);c.propTypes={style:l.default.object,className:l.default.string,children:l.default.node,component:l.default.oneOfType([l.default.string,l.default.func,l.default.object]).isRequired,expandable:l.default.bool},c.defaultProps={component:"section"},t.default=c},177:function(e,t,a){"use strict";t.__esModule=!0;var n,o=a(161),r=(n=o)&&n.__esModule?n:{default:n};t.default={onExpandClick:r.default.func,expanded:r.default.bool,icon:r.default.element,tooltipPosition:r.default.oneOf(["top","right","bottom","left"]),tooltipLabel:r.default.node,tooltipDelay:r.default.number}}}]);
//# sourceMappingURL=component---src-pages-this-is-not-about-about-2-jsx-5fbed628e310a1e53f50.js.map