(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{153:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return f});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(164),s=a.n(l),c=a(170),m=a(182),p=a(216),d=a(161),u=a.n(d),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return o.a.createElement(c.a,{location:this.props.location,title:"Home"},o.a.createElement("div",{className:"index-container"},o.a.createElement(s.a,null,o.a.createElement("title",null,u.a.siteTitle),o.a.createElement("link",{rel:"canonical",href:""+u.a.siteUrl})),o.a.createElement(p.a,{postEdges:e}),o.a.createElement(m.a,{postEdges:e})))},t}(o.a.Component);t.default=h;var f="1014838814"},181:function(e,t,a){"use strict";t.__esModule=!0,t.MediaOverlay=t.Media=void 0;var n=i(a(186)),r=i(a(187));function i(e){return e&&e.__esModule?e:{default:e}}t.default=n.default,t.Media=n.default,t.MediaOverlay=r.default},182:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(32),s=a.n(l),c=a(174),m=a.n(c),p=a(176),d=a.n(p),u=a(163),h=a.n(u),f=a(191),E=a.n(f),g=a(173),y=a.n(g),v=a(169),w=a.n(v),x=a(52),b=a(192),N=a.n(b),T=a(181),R=a.n(T),L=a(190),M=a(193),k=a(161),z=a.n(k),P=(a(217),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={mobile:!0},a.handleResize=a.handleResize.bind(s()(a)),a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},a.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},a.handleResize=function(){window.innerWidth>=640?this.setState({mobile:!1}):this.setState({mobile:!0})},a.render=function(){var e=this.props.postInfo,t=this.state.mobile,a=t,n=t?162:225;return o.a.createElement(m.a,{key:e.path,raise:!0,className:"md-grid md-cell md-cell--12"},o.a.createElement(x.Link,{style:{textDecoration:"none"},to:e.path},o.a.createElement(R.a,{style:{height:n,paddingBottom:"0px"}},o.a.createElement(M.a,{postNode:e,coverHeight:n}),o.a.createElement(T.MediaOverlay,null,o.a.createElement(d.a,{title:e.title},o.a.createElement(h.a,{raised:!0,secondary:!0,className:"md-cell--right"},"바로 출력하기"))))),o.a.createElement(d.a,{expander:a,avatar:o.a.createElement(E.a,{icon:o.a.createElement(w.a,{iconClassName:"fa fa-calendar"})}),title:"Published on "+N()(e.date).format(z.a.dateFormat),subtitle:"출력예상시간 : "+e.timeToRead+"시간 이내"}),o.a.createElement(y.a,{expandable:a},e.excerpt,o.a.createElement(L.a,{tags:e.tags})))},t}(i.Component)),_=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},a.render=function(){var e=this.getPostList();return o.a.createElement("div",{className:"md-grid md-grid--no-spacing md-cell--middle"},o.a.createElement("div",{className:"md-grid md-cell--8 mobile-fix"},e.map(function(e){return o.a.createElement(P,{key:e.title,postInfo:e})})))},t}(o.a.Component);t.a=_},216:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(164),s=a.n(l),c=a(180),m=a.n(c),p=a(161),d=a.n(p),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,a,n,r=this.props,i=r.postNode,l=r.postPath,c=r.postSEO;if(c){var p=i.frontmatter;e=p.title,t=p.description?p.description:i.excerpt,a=p.cover,n=m()(d.a.siteUrl,d.a.pathPrefix,l)}else e=d.a.siteTitle,t=d.a.siteDescription,a=d.a.siteLogo;a=m()(d.a.siteUrl,d.a.pathPrefix,a);var u=m()(d.a.siteUrl,d.a.pathPrefix),h=[{"@context":"http://schema.org","@type":"WebSite",url:u,name:e,alternateName:d.a.siteTitleAlt?d.a.siteTitleAlt:""}];return c&&h.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:u,name:e,alternateName:d.a.siteTitleAlt?d.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:a},description:t}]),o.a.createElement(s.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:a}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),o.a.createElement("meta",{property:"og:url",content:c?n:u}),c?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:a}),o.a.createElement("meta",{property:"fb:app_id",content:d.a.siteFBAppID?d.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:d.a.userTwitter?d.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:a}))},t}(i.Component);t.a=u}}]);
//# sourceMappingURL=component---src-pages-index-jsx-ccb7a7c24ae5bcd37f17.js.map