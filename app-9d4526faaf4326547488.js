webpackJsonp([0xd2a57dc1d883],{147:function(n,o,e){"use strict";function t(n,o,e){var t=a.map(function(e){if(e.plugin[n]){var t=e.plugin[n](o,e.options);return t}});return t=t.filter(function(n){return"undefined"!=typeof n}),t.length>0?t:e?[e]:[]}function u(n,o,e){return a.reduce(function(e,t){return t.plugin[n]?e.then(function(){return t.plugin[n](o,t.options)}):e},Promise.resolve())}o.__esModule=!0,o.apiRunner=t,o.apiRunnerAsync=u;var a=[{plugin:e(1696),options:{plugins:[],trackingId:""}},{plugin:e(1703),options:{plugins:[]}}]},1478:function(n,o,e){"use strict";o.components={"component---src-templates-components-jsx":e(1660),"component---src-templates-docs-jsx":e(1661),"component---src-pages-404-js":e(1657),"component---src-pages-index-js":e(1658),"component---src-pages-showcase-jsx":e(1659)},o.json={"layout-index.json":e(1662),"components-data-table.json":e(1668),"components-collapsible.json":e(1666),"components-dropdown.json":e(1670),"components-header.json":e(1672),"components-colour.json":e(1667),"components-button.json":e(1665),"components-date-picker.json":e(1669),"components-footer.json":e(1671),"components-heading.json":e(1673),"components-logo.json":e(1677),"components-layout.json":e(1675),"components-icon.json":e(1674),"components-list.json":e(1676),"components-page-header.json":e(1679),"components-progress-tracker.json":e(1680),"components-nav.json":e(1678),"components-radio-group.json":e(1681),"components-spinner.json":e(1682),"components-switcher.json":e(1683),"components-tooltip.json":e(1686),"components-tabs.json":e(1684),"components-text-field.json":e(1685),"docs-deploy-new-ui-demo.json":e(1689),"components-user-message.json":e(1687),"docs-markdown-test.json":e(1690),"docs-cicd-pipeline.json":e(1688),"docs-new-component.json":e(1691),"docs-react-best-practises.json":e(1692),"docs-react-style-guide.json":e(1693),"404.json":e(1663),"index.json":e(1694),"showcase.json":e(1695),"404-html.json":e(1664)},o.layouts={"layout---index":e(1656)}},1479:function(n,o,e){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function u(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}function a(n,o){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?n:o}function r(n,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);n.prototype=Object.create(o&&o.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(n,o):n.__proto__=o)}o.__esModule=!0;var s=Object.assign||function(n){for(var o=1;o<arguments.length;o++){var e=arguments[o];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}return n},c=e(2),i=t(c),l=e(3),p=t(l),d=e(1409),f=t(d),m=e(108),h=t(m),g=e(147),y=e(1818),x=t(y),j=function(n){var o=n.children;return i.default.createElement("div",null,o())},C=function(n){function o(e){u(this,o);var t=a(this,n.call(this)),r=e.location;return f.default.getPage(r.pathname)||(r=s({},r,{pathname:"/404.html"})),t.state={location:r,pageResources:f.default.getResourcesForPathname(r.pathname)},t}return r(o,n),o.prototype.componentWillReceiveProps=function(n){var o=this;if(this.state.location.pathname!==n.location.pathname){var e=f.default.getResourcesForPathname(n.location.pathname);if(e)this.setState({location:n.location,pageResources:e});else{var t=n.location;f.default.getPage(t.pathname)||(t=s({},t,{pathname:"/404.html"})),f.default.getResourcesForPathname(t.pathname,function(n){o.setState({location:t,pageResources:n})})}}},o.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(o){f.default.getPage(n.state.location.pathname)&&o.page.path===f.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:o.pageResources})})},o.prototype.shouldComponentUpdate=function(n,o){return!o.pageResources||(!(this.state.pageResources||!o.pageResources)||(this.state.pageResources.component!==o.pageResources.component||(this.state.pageResources.json!==o.pageResources.json||(!(this.state.location.key===o.location.key||!o.pageResources.page||!o.pageResources.page.matchPath&&!o.pageResources.page.path)||(0,x.default)(this,n,o)))))},o.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:d.publicLoader}),o=n[0];return this.props.page?this.state.pageResources?o||(0,c.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?o||(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:j,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},o}(i.default.Component);C.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},o.default=C,n.exports=o.default},108:function(n,o,e){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=e(1743),a=t(u),r=(0,a.default)();n.exports=r},1480:function(n,o,e){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=e(52),a=e(1410),r=t(a),s={};n.exports=function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(e){var t=decodeURIComponent(e),a=(0,r.default)(t,o);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),s[a])return s[a];var c=void 0;return n.some(function(n){if(n.matchPath){if((0,u.matchPath)(a,{path:n.path})||(0,u.matchPath)(a,{path:n.matchPath}))return c=n,s[a]=n,!0}else{if((0,u.matchPath)(a,{path:n.path,exact:!0}))return c=n,s[a]=n,!0;if((0,u.matchPath)(a,{path:n.path+"index.html"}))return c=n,s[a]=n,!0}return!1}),c}}},1481:function(n,o,e){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=e(1460),a=t(u),r=e(147),s=(0,r.apiRunner)("replaceHistory"),c=s[0],i=c||(0,a.default)();n.exports=i},1664:function(n,o,e){e(8),n.exports=function(n){return e.e(0xa2868bfb69fc,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1708)})})}},1663:function(n,o,e){e(8),n.exports=function(n){return e.e(0xe70826b53c04,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1709)})})}},1665:function(n,o,e){e(8),n.exports=function(n){return e.e(0x5bd72ab0cf74,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1710)})})}},1666:function(n,o,e){e(8),n.exports=function(n){return e.e(0xd6a1ca51361c,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1711)})})}},1667:function(n,o,e){e(8),n.exports=function(n){return e.e(0xf56aa2881ff,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1712)})})}},1668:function(n,o,e){e(8),n.exports=function(n){return e.e(64362288990216,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1713)})})}},1669:function(n,o,e){e(8),n.exports=function(n){return e.e(0xb268f6c6f7dc,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1714)})})}},1670:function(n,o,e){e(8),n.exports=function(n){return e.e(0xa5f887d6a2cb,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1715)})})}},1671:function(n,o,e){e(8),n.exports=function(n){return e.e(18253473296134,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1716)})})}},1672:function(n,o,e){e(8),n.exports=function(n){return e.e(72723955521295,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1717)})})}},1673:function(n,o,e){e(8),n.exports=function(n){return e.e(0xd7d559d5df76,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1718)})})}},1674:function(n,o,e){e(8),n.exports=function(n){return e.e(76697314046354,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1719)})})}},1675:function(n,o,e){e(8),n.exports=function(n){return e.e(0xf09dc1494abd,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1720)})})}},1676:function(n,o,e){e(8),n.exports=function(n){return e.e(0xa0dac1f57fb9,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1721)})})}},1677:function(n,o,e){e(8),n.exports=function(n){return e.e(63642314372516,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1722)})})}},1678:function(n,o,e){e(8),n.exports=function(n){return e.e(0x6b8d28ef3dba,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1723)})})}},1679:function(n,o,e){e(8),n.exports=function(n){return e.e(0x96fb0b833f91,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1724)})})}},1680:function(n,o,e){e(8),n.exports=function(n){return e.e(0xd968948f53db,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1725)})})}},1681:function(n,o,e){e(8),n.exports=function(n){return e.e(54719159202336,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1726)})})}},1682:function(n,o,e){e(8),n.exports=function(n){return e.e(0x748428d3ebec,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1727)})})}},1683:function(n,o,e){e(8),n.exports=function(n){return e.e(0xe38bb0f47664,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1728)})})}},1684:function(n,o,e){e(8),n.exports=function(n){return e.e(0xacbf08f6de4c,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1729)})})}},1685:function(n,o,e){e(8),n.exports=function(n){return e.e(84220456038094,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1730)})})}},1686:function(n,o,e){e(8),n.exports=function(n){return e.e(0xdc495afab1d1,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1731)})})}},1687:function(n,o,e){e(8),n.exports=function(n){return e.e(54893563154972,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1732)})})}},1688:function(n,o,e){e(8),n.exports=function(n){return e.e(97390447371662,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1733)})})}},1689:function(n,o,e){e(8),n.exports=function(n){return e.e(28919809435412,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1734)})})}},1690:function(n,o,e){e(8),n.exports=function(n){return e.e(0x67163d937046,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1735)})})}},1691:function(n,o,e){e(8),n.exports=function(n){return e.e(88141096984697,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1736)})})}},1692:function(n,o,e){e(8),n.exports=function(n){return e.e(0xe6e975bb04b,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1737)})})}},1693:function(n,o,e){e(8),n.exports=function(n){return e.e(0xaefe78e356a7,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1738)})})}},1694:function(n,o,e){e(8),n.exports=function(n){return e.e(0x81b8806e4260,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1739)})})}},1662:function(n,o,e){e(8),n.exports=function(n){return e.e(60335399758886,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1271)})})}},1695:function(n,o,e){e(8),n.exports=function(n){return e.e(57552020475521,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1740)})})}},1656:function(n,o,e){e(8),n.exports=function(n){return e.e(0x67ef26645b2a,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1482)})})}},1409:function(n,o,e){(function(n){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}o.__esModule=!0,o.publicLoader=void 0;var u=e(2),a=(t(u),e(1480)),r=t(a),s=e(108),c=t(s),i=e(1410),l=t(i),p=void 0,d={},f={},m={},h={},g={},y=[],x=[],j={},C="",N=[],v={},b=function(n){return n&&n.default||n},R=void 0,k=!0,w=[],_={},P={},E=5;R=e(1483)({getNextQueuedResources:function(){return N.slice(-1)[0]},createResourceDownload:function(n){S(n,function(){N=N.filter(function(o){return o!==n}),R.onResourcedFinished(n)})}}),c.default.on("onPreLoadPageResources",function(n){R.onPreLoadPageResources(n)}),c.default.on("onPostLoadPageResources",function(n){R.onPostLoadPageResources(n)});var O=function(n,o){return v[n]>v[o]?1:v[n]<v[o]?-1:0},L=function(n,o){return j[n]>j[o]?1:j[n]<j[o]?-1:0},S=function(o){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[o])n.nextTick(function(){e(null,h[o])});else{var t=void 0;t="component---"===o.slice(0,12)?f.components[o]:"layout---"===o.slice(0,9)?f.layouts[o]:f.json[o],t(function(n,t){h[o]=t,w.push({resource:o,succeeded:!n}),P[o]||(P[o]=n),w=w.slice(-E),e(n,t)})}},A=function(o,e){g[o]?n.nextTick(function(){e(null,g[o])}):P[o]?n.nextTick(function(){e(P[o])}):S(o,function(n,t){if(n)e(n);else{var u=b(t());g[o]=u,e(n,u)}})},T=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var o=w.find(function(n){return n.succeeded});return!!o},D=function(n,o){console.log(o),_[n]||(_[n]=o),T()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},U=1,M={empty:function(){x=[],j={},v={},N=[],y=[],C=""},addPagesArray:function(n){y=n,p=(0,r.default)(n,C)},addDevRequires:function(n){d=n},addProdRequires:function(n){f=n},dequeue:function(){return x.pop()},enqueue:function(n){var o=(0,l.default)(n,C);if(!y.some(function(n){return n.path===o}))return!1;var e=1/U;U+=1,j[o]?j[o]+=1:j[o]=1,M.has(o)||x.unshift(o),x.sort(L);var t=p(o);return t.jsonName&&(v[t.jsonName]?v[t.jsonName]+=1+e:v[t.jsonName]=1+e,N.indexOf(t.jsonName)!==-1||h[t.jsonName]||N.unshift(t.jsonName)),t.componentChunkName&&(v[t.componentChunkName]?v[t.componentChunkName]+=1+e:v[t.componentChunkName]=1+e,N.indexOf(t.componentChunkName)!==-1||h[t.jsonName]||N.unshift(t.componentChunkName)),N.sort(O),R.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:N,resourcesCount:v}},getPages:function(){return{pathArray:x,pathCount:j}},getPage:function(n){return p(n)},has:function(n){return x.some(function(o){return o===n})},getResourcesForPathname:function(o){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};k&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(o)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var o=n,e=Array.isArray(o),t=0,o=e?o:o[Symbol.iterator]();;){var u;if(e){if(t>=o.length)break;u=o[t++]}else{if(t=o.next(),t.done)break;u=t.value}var a=u;a.unregister()}window.location.reload()}})),k=!1;if(_[o])return D(o,'Previously detected load failure for "'+o+'"'),e();var t=p(o);if(!t)return D(o,"A page wasn't found for \""+o+'"'),e();if(o=t.path,m[o])return n.nextTick(function(){e(m[o]),c.default.emit("onPostLoadPageResources",{page:t,pageResources:m[o]})}),m[o];c.default.emit("onPreLoadPageResources",{path:o});var u=void 0,a=void 0,r=void 0,s=function(){if(u&&a&&(!t.layoutComponentChunkName||r)){m[o]={component:u,json:a,layout:r,page:t};var n={component:u,json:a,layout:r,page:t};e(n),c.default.emit("onPostLoadPageResources",{page:t,pageResources:n})}};return A(t.componentChunkName,function(n,o){n&&D(t.path,"Loading the component for "+t.path+" failed"),u=o,s()}),A(t.jsonName,function(n,o){n&&D(t.path,"Loading the JSON for "+t.path+" failed"),a=o,s()}),void(t.layoutComponentChunkName&&A(t.layout,function(n,o){n&&D(t.path,"Loading the Layout for "+t.path+" failed"),r=o,s()}))},peek:function(n){return x.slice(-1)[0]},length:function(){return x.length},indexOf:function(n){return x.length-x.indexOf(n)-1}};o.publicLoader={getResourcesForPathname:M.getResourcesForPathname};o.default=M}).call(o,e(125))},1741:function(n,o){n.exports=[{componentChunkName:"component---src-templates-components-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-data-table.json",path:"/components/data-table"},{componentChunkName:"component---src-templates-components-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-collapsible.json",path:"/components/collapsible"},{componentChunkName:"component---src-templates-components-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-dropdown.json",path:"/components/dropdown"},{componentChunkName:"component---src-templates-components-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-header.json",path:"/components/header"},{componentChunkName:"component---src-templates-components-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-colour.json",path:"/components/colour"},{componentChunkName:"component---src-templates-components-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-button.json",path:"/components/button"},{componentChunkName:"component---src-templates-components-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-date-picker.json",path:"/components/date-picker"},{componentChunkName:"component---src-templates-components-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-footer.json",path:"/components/footer"},{componentChunkName:"component---src-templates-components-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-heading.json",path:"/components/heading"},{componentChunkName:"component---src-templates-components-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-logo.json",path:"/components/logo"},{componentChunkName:"component---src-templates-components-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-layout.json",path:"/components/layout"},{componentChunkName:"component---src-templates-components-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-icon.json",path:"/components/icon"},{componentChunkName:"component---src-templates-components-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-list.json",path:"/components/list"},{componentChunkName:"component---src-templates-components-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-page-header.json",path:"/components/page-header"},{componentChunkName:"component---src-templates-components-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-progress-tracker.json",path:"/components/progress-tracker"},{componentChunkName:"component---src-templates-components-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-nav.json",path:"/components/nav"},{componentChunkName:"component---src-templates-components-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-radio-group.json",path:"/components/radio-group"},{componentChunkName:"component---src-templates-components-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-spinner.json",path:"/components/spinner"},{componentChunkName:"component---src-templates-components-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-switcher.json",path:"/components/switcher"},{componentChunkName:"component---src-templates-components-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-tooltip.json",path:"/components/tooltip"},{componentChunkName:"component---src-templates-components-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-tabs.json",path:"/components/tabs"},{componentChunkName:"component---src-templates-components-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-text-field.json",path:"/components/text-field"},{componentChunkName:"component---src-templates-docs-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-deploy-new-ui-demo.json",path:"/docs/deploy-new-ui-demo"},{componentChunkName:"component---src-templates-components-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-user-message.json",path:"/components/user-message"},{componentChunkName:"component---src-templates-docs-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-markdown-test.json",path:"/docs/markdown-test"},{componentChunkName:"component---src-templates-docs-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-cicd-pipeline.json",path:"/docs/cicd-pipeline"},{componentChunkName:"component---src-templates-docs-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-new-component.json",path:"/docs/new-component"},{componentChunkName:"component---src-templates-docs-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-react-best-practises.json",path:"/docs/react-best-practises"},{componentChunkName:"component---src-templates-docs-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-react-style-guide.json",path:"/docs/react-style-guide"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-showcase-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"showcase.json",path:"/showcase/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},1483:function(n,o){"use strict";n.exports=function(n){var o=n.getNextQueuedResources,e=n.createResourceDownload,t=[],u=[],a=function(){var n=o();n&&(u.push(n),e(n))},r=function(n){switch(n.type){case"RESOURCE_FINISHED":u=u.filter(function(o){return o!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(o){return o!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===u.length&&0===t.length&&a()},0)};return{onResourcedFinished:function(n){r({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){r({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){r({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){r({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:u}},empty:function(){t=[],u=[]}}}},0:function(n,o,e){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=Object.assign||function(n){for(var o=1;o<arguments.length;o++){var e=arguments[o];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}return n},a=e(147),r=e(2),s=t(r),c=e(21),i=t(c),l=e(52),p=e(1702),d=e(1646),f=t(d),m=e(50),h=e(1481),g=t(h),y=e(108),x=t(y),j=e(1741),C=t(j),N=e(1742),v=t(N),b=e(1479),R=t(b),k=e(1478),w=t(k),_=e(1409),P=t(_);e(1502),window.___history=g.default,window.___emitter=x.default,P.default.addPagesArray(C.default),P.default.addProdRequires(w.default),window.asyncRequires=w.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=v.default.reduce(function(n,o){return n[o.fromPath]=o,n},{}),O=function(n){var o=E[n];return null!=o&&(g.default.replace(o.toPath),!0)};O(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&c!==!1||(window.___history=n,c=!0,n.listen(function(n,o){O(n.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:n,action:o})},0)}))}function o(n,o){var e=o.location.pathname,t=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:e});if(t.length>0)return t[0];if(n){var u=n.location.pathname;if(u===e)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&e(1484);var t=function(n,o){function e(n){n.page.path===P.default.getPage(u).path&&(x.default.off("onPostLoadPageResources",e),clearTimeout(c),s(t))}var t=(0,m.createLocation)(n,null,null,g.default.location),u=t.pathname,a=E[u];a&&(u=a.toPath);var r=window.location;if(r.pathname!==t.pathname||r.search!==t.search||r.hash!==t.hash){var s=o?window.___history.replace:window.___history.push,c=setTimeout(function(){x.default.off("onPostLoadPageResources",e),x.default.emit("onDelayedLoadPageResources",{pathname:u}),s(t)},1e3);P.default.getResourcesForPathname(u)?(clearTimeout(c),s(t)):x.default.on("onPostLoadPageResources",e)}};window.___push=function(n){return t(n,!1)},window.___replace=function(n){return t(n,!0)},window.___navigateTo=window.___push,(0,a.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var c=!1,d=(0,a.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(n){var o=n.children;return s.default.createElement(l.Router,{history:g.default},o)},y=(0,l.withRouter)(R.default);P.default.getResourcesForPathname(window.location.pathname,function(){var e=function(){return(0,r.createElement)(d?d:h,null,(0,r.createElement)(p.ScrollContext,{shouldUpdateScroll:o},(0,r.createElement)(y,{layout:!0,children:function(o){return(0,r.createElement)(l.Route,{render:function(e){n(e.history);var t=o?o:e;return P.default.getPage(t.location.pathname)?(0,r.createElement)(R.default,u({page:!0},t)):(0,r.createElement)(R.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},t=(0,a.apiRunner)("wrapRootComponent",{Root:e},e)[0],c=(0,a.apiRunner)("replaceHydrateFunction",void 0,i.default.render)[0];(0,f.default)(function(){return c(s.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},1742:function(n,o){n.exports=[{fromPath:"/components",isPermanent:!0,redirectInBrowser:!0,toPath:"/components/logo"},{fromPath:"/docs",isPermanent:!0,redirectInBrowser:!0,toPath:"/docs/new-component"}]},1484:function(n,o,e){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=e(108),a=t(u),r="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(r+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var o=n.installing;console.log("installingWorker",o),o.addEventListener("statechange",function(){switch(o.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},1410:function(n,o){"use strict";o.__esModule=!0,o.default=function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,o.length)===o?n.slice(o.length):n},n.exports=o.default},77:function(n,o){function e(n){return n&&n.__esModule?n:{default:n}}n.exports=e},1646:function(n,o,e){!function(o,e){n.exports=e()}("domready",function(){var n,o=[],e=document,t=e.documentElement.doScroll,u="DOMContentLoaded",a=(t?/^loaded|^c/:/^loaded|^i|^c/).test(e.readyState);return a||e.addEventListener(u,n=function(){for(e.removeEventListener(u,n),a=1;n=o.shift();)n()}),function(n){a?setTimeout(n,0):o.push(n)}})},8:function(n,o,e){"use strict";function t(){function n(n){var o=t.lastChild;return"SCRIPT"!==o.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",o)):void(o.onload=o.onerror=function(){o.onload=o.onerror=null,setTimeout(n,0)})}var o,t=document.querySelector("head"),u=e.e,a=e.s;e.e=function(t,r){var s=!1,c=!0,i=function(n){r&&(r(e,n),r=null)};return!a&&o&&o[t]?void i(!0):(u(t,function(){s||(s=!0,c?setTimeout(function(){i()}):i())}),void(s||(c=!1,n(function(){s||(s=!0,a?a[t]=void 0:(o||(o={}),o[t]=!0),i(!0))}))))}}t()},1696:function(n,o,e){"use strict";o.onRouteUpdate=function(n){var o=n.location;if("function"==typeof ga){if(o&&"undefined"!=typeof window.excludeGAPaths&&window.excludeGAPaths.some(function(n){return n.test(o.pathname)}))return;window.ga("set","page",o?o.pathname+o.search+o.hash:void 0),window.ga("send","pageview")}}},1703:function(n,o,e){"use strict";var t=function(n){setTimeout(function(){var o=window.decodeURI(window.location.hash.replace("#",""));if(""!==o){var e=document.getElementById(o);if(e){var t=e.offsetTop;window.scrollTo(0,t-n)}}},10)};o.onClientEntry=function(n,o){var e=0;o.offsetY&&(e=o.offsetY)},o.onRouteUpdate=function(n,o){var e=0;o.offsetY&&(e=o.offsetY),t(e)}},1743:function(n,o){function e(n){return n=n||Object.create(null),{on:function(o,e){(n[o]||(n[o]=[])).push(e)},off:function(o,e){n[o]&&n[o].splice(n[o].indexOf(e)>>>0,1)},emit:function(o,e){(n[o]||[]).slice().map(function(n){n(e)}),(n["*"]||[]).slice().map(function(n){n(o,e)})}}}n.exports=e},1818:function(n,o){"use strict";function e(n,o){for(var e in n)if(!(e in o))return!0;for(var t in o)if(n[t]!==o[t])return!0;return!1}o.__esModule=!0,o.default=function(n,o,t){return e(n.props,o)||e(n.state,t)},n.exports=o.default},1657:function(n,o,e){e(8),n.exports=function(n){return e.e(0x9427c64ab85d,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1487)})})}},1658:function(n,o,e){e(8),n.exports=function(n){return e.e(35783957827783,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1488)})})}},1659:function(n,o,e){e(8),n.exports=function(n){return e.e(3668040718168,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1489)})})}},1660:function(n,o,e){e(8),n.exports=function(n){return e.e(0x6ffb7b367a2e,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1490)})})}},1661:function(n,o,e){e(8),n.exports=function(n){return e.e(0x61f8012cc7c6,function(o,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return e(1491)})})}}});
//# sourceMappingURL=app-9d4526faaf4326547488.js.map