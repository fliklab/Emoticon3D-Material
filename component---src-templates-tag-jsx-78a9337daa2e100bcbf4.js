(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return p}),a.d(t,"pageQuery",function(){return f});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(164),s=a.n(l),d=a(170),c=a(182),m=a(161),u=a.n(m),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext.tag,t=this.props.data.allMarkdownRemark.edges;return o.a.createElement(d.a,{location:this.props.location,title:"Tagged in "+(e.charAt(0).toUpperCase()+e.slice(1))},o.a.createElement("div",{className:"tag-container"},o.a.createElement(s.a,null,o.a.createElement("title",null,'Posts tagged as "'+e+'" | '+u.a.siteTitle),o.a.createElement("link",{rel:"canonical",href:u.a.siteUrl+"/tags/"+e})),o.a.createElement(c.a,{postEdges:t})))},t}(o.a.Component),f="3824571933"},181:function(e,t,a){"use strict";t.__esModule=!0,t.MediaOverlay=t.Media=void 0;var n=i(a(186)),r=i(a(187));function i(e){return e&&e.__esModule?e:{default:e}}t.default=n.default,t.Media=n.default,t.MediaOverlay=r.default},182:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(32),s=a.n(l),d=a(174),c=a.n(d),m=a(176),u=a.n(m),p=a(163),f=a.n(p),h=a(191),g=a.n(h),E=a(173),v=a.n(E),y=a(169),w=a.n(y),b=a(52),R=a(192),x=a.n(R),M=a(181),k=a.n(M),z=a(190),N=a(193),C=a(161),L=a.n(C),T=(a(217),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={mobile:!0},a.handleResize=a.handleResize.bind(s()(a)),a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},a.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},a.handleResize=function(){window.innerWidth>=640?this.setState({mobile:!1}):this.setState({mobile:!0})},a.render=function(){var e=this.props.postInfo,t=this.state.mobile,a=t,n=t?162:225;return o.a.createElement(c.a,{key:e.path,raise:!0,className:"md-grid md-cell md-cell--12"},o.a.createElement(b.Link,{style:{textDecoration:"none"},to:e.path},o.a.createElement(k.a,{style:{height:n,paddingBottom:"0px"}},o.a.createElement(N.a,{postNode:e,coverHeight:n}),o.a.createElement(M.MediaOverlay,null,o.a.createElement(u.a,{title:e.title},o.a.createElement(f.a,{raised:!0,secondary:!0,className:"md-cell--right"},"바로 출력하기"))))),o.a.createElement(u.a,{expander:a,avatar:o.a.createElement(g.a,{icon:o.a.createElement(w.a,{iconClassName:"fa fa-calendar"})}),title:"Published on "+x()(e.date).format(L.a.dateFormat),subtitle:"출력예상시간 : "+e.timeToRead+"시간 이내"}),o.a.createElement(v.a,{expandable:a},e.excerpt,o.a.createElement(z.a,{tags:e.tags})))},t}(i.Component)),P=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},a.render=function(){var e=this.getPostList();return o.a.createElement("div",{className:"md-grid md-grid--no-spacing md-cell--middle"},o.a.createElement("div",{className:"md-grid md-cell--8 mobile-fix"},e.map(function(e){return o.a.createElement(T,{key:e.title,postInfo:e})})))},t}(o.a.Component);t.a=P}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-78a9337daa2e100bcbf4.js.map