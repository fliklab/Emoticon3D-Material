(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p}),n.d(t,"pageQuery",function(){return f});var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(164),s=n.n(l),d=n(181),c=n(170),m=n(161),u=n.n(m),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext.category,t=this.props.data.allMarkdownRemark.edges;return o.a.createElement(c.a,{location:this.props.location,title:"MY 콜랙션"},o.a.createElement("div",{className:"category-container"},o.a.createElement(s.a,null,o.a.createElement("title",null,'MY 콜랙션 - "'+e+'" | '+u.a.siteTitle),o.a.createElement("link",{rel:"canonical",href:u.a.siteUrl+"/categories/"+e})),o.a.createElement(d.a,{postEdges:t})))},t}(o.a.Component),f="4191571131"},180:function(e,t,n){"use strict";t.__esModule=!0,t.MediaOverlay=t.Media=void 0;var a=i(n(185)),r=i(n(186));function i(e){return e&&e.__esModule?e:{default:e}}t.default=a.default,t.Media=a.default,t.MediaOverlay=r.default},181:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(32),s=n.n(l),d=n(174),c=n.n(d),m=n(176),u=n.n(m),p=n(163),f=n.n(p),h=n(190),E=n.n(h),g=n(173),v=n.n(g),y=n(169),w=n.n(y),b=n(52),M=n(191),R=n.n(M),x=n(180),k=n.n(x),z=n(189),N=n(192),C=n(161),L=n.n(C),T=(n(217),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={mobile:!0},n.handleResize=n.handleResize.bind(s()(n)),n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},n.handleResize=function(){window.innerWidth>=640?this.setState({mobile:!1}):this.setState({mobile:!0})},n.render=function(){var e=this.props.postInfo,t=this.state.mobile,n=t,a=t?162:225;return o.a.createElement(c.a,{key:e.path,raise:!0,className:"md-grid md-cell md-cell--12"},o.a.createElement(b.Link,{style:{textDecoration:"none"},to:e.path},o.a.createElement(k.a,{style:{height:a,paddingBottom:"0px"}},o.a.createElement(N.a,{postNode:e,coverHeight:a}),o.a.createElement(x.MediaOverlay,null,o.a.createElement(u.a,{title:e.title},o.a.createElement(f.a,{raised:!0,secondary:!0,className:"md-cell--right"},"바로 출력하기"))))),o.a.createElement(u.a,{expander:n,avatar:o.a.createElement(E.a,{icon:o.a.createElement(w.a,{iconClassName:"fa fa-calendar"})}),title:"Published on "+R()(e.date).format(L.a.dateFormat),subtitle:"출력예상시간 : "+e.timeToRead+"시간 이내"}),o.a.createElement(v.a,{expandable:n},e.excerpt,o.a.createElement(z.a,{tags:e.tags})))},t}(i.Component)),_=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},n.render=function(){var e=this.getPostList();return o.a.createElement("div",{className:"md-grid md-grid--no-spacing md-cell--middle"},o.a.createElement("div",{className:"md-grid md-cell--8 mobile-fix"},e.map(function(e){return o.a.createElement(T,{key:e.title,postInfo:e})})))},t}(o.a.Component);t.a=_}}]);
//# sourceMappingURL=component---src-templates-category-jsx-81311e14c133b1b086a8.js.map