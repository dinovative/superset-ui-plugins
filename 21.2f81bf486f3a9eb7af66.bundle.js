(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1124:function(n,t,e){"use strict";var r=e(116);t.a=function(n){return"string"==typeof n?new r.a([document.querySelectorAll(n)],[document.documentElement]):new r.a([null==n?[]:n],r.c)}},1360:function(n,t,e){var r=e(1361);"string"==typeof r&&(r=[[n.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e(232)(r,a);r.locals&&(n.exports=r.locals)},1361:function(n,t,e){(n.exports=e(231)(!1)).push([n.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n.superset-legacy-chart-treemap text {\n  font-size: 11px;\n  pointer-events: none;\n}\n\n.superset-legacy-chart-treemap tspan:last-child {\n  font-size: 9px;\n  fill-opacity: 0.8;\n}\n\n.superset-legacy-chart-treemap .node rect {\n  shape-rendering: crispEdges;\n}\n\n.superset-legacy-chart-treemap .node--hover rect {\n  stroke: #000;\n}\n',""])},1922:function(n,t,e){"use strict";function r(n){var t=0,e=n.children,r=e&&e.length;if(r)for(;--r>=0;)t+=e[r].value;else t=1;n.value=t}function a(n,t){var e,r,a,o,s,p=new c(n),h=+n.value&&(p.value=n.value),f=[p];for(null==t&&(t=i);e=f.pop();)if(h&&(e.value=+e.data.value),(a=t(e.data))&&(s=a.length))for(e.children=new Array(s),o=s-1;o>=0;--o)f.push(r=e.children[o]=new c(a[o])),r.parent=e,r.depth=e.depth+1;return p.eachBefore(u)}function i(n){return n.children}function o(n){n.data=n.data.data}function u(n){var t=0;do{n.height=t}while((n=n.parent)&&n.height<++t)}function c(n){this.data=n,this.depth=this.height=0,this.parent=null}e.d(t,"a",(function(){return a})),c.prototype=a.prototype={constructor:c,count:function(){return this.eachAfter(r)},each:function(n){var t,e,r,a,i=this,o=[i];do{for(t=o.reverse(),o=[];i=t.pop();)if(n(i),e=i.children)for(r=0,a=e.length;r<a;++r)o.push(e[r])}while(o.length);return this},eachAfter:function(n){for(var t,e,r,a=this,i=[a],o=[];a=i.pop();)if(o.push(a),t=a.children)for(e=0,r=t.length;e<r;++e)i.push(t[e]);for(;a=o.pop();)n(a);return this},eachBefore:function(n){for(var t,e,r=this,a=[r];r=a.pop();)if(n(r),t=r.children)for(e=t.length-1;e>=0;--e)a.push(t[e]);return this},sum:function(n){return this.eachAfter((function(t){for(var e=+n(t.data)||0,r=t.children,a=r&&r.length;--a>=0;)e+=r[a].value;t.value=e}))},sort:function(n){return this.eachBefore((function(t){t.children&&t.children.sort(n)}))},path:function(n){for(var t=this,e=function(n,t){if(n===t)return n;var e=n.ancestors(),r=t.ancestors(),a=null;n=e.pop(),t=r.pop();for(;n===t;)a=n,n=e.pop(),t=r.pop();return a}(t,n),r=[t];t!==e;)t=t.parent,r.push(t);for(var a=r.length;n!==e;)r.splice(a,0,n),n=n.parent;return r},ancestors:function(){for(var n=this,t=[n];n=n.parent;)t.push(n);return t},descendants:function(){var n=[];return this.each((function(t){n.push(t)})),n},leaves:function(){var n=[];return this.eachBefore((function(t){t.children||n.push(t)})),n},links:function(){var n=this,t=[];return n.each((function(e){e!==n&&t.push({source:e.parent,target:e})})),t},copy:function(){return a(this).eachBefore(o)}}},1950:function(n,t,e){"use strict";e.r(t);var r=e(995),a=e(1124),i=e(322),o=function(n){n.x0=Math.round(n.x0),n.y0=Math.round(n.y0),n.x1=Math.round(n.x1),n.y1=Math.round(n.y1)},u=function(n,t,e,r,a){for(var i,o=n.children,u=-1,c=o.length,s=n.value&&(r-t)/n.value;++u<c;)(i=o[u]).y0=e,i.y1=a,i.x0=t,i.x1=t+=i.value*s},c=function(n,t,e,r,a){for(var i,o=n.children,u=-1,c=o.length,s=n.value&&(a-e)/n.value;++u<c;)(i=o[u]).x0=t,i.x1=r,i.y0=e,i.y1=e+=i.value*s},s=(1+Math.sqrt(5))/2;function p(n,t,e,r,a,i){for(var o,s,p,h,f,l,d,g,m,v,y,b=[],x=t.children,w=0,O=0,A=x.length,T=t.value;w<A;){p=a-e,h=i-r;do{f=x[O++].value}while(!f&&O<A);for(l=d=f,y=f*f*(v=Math.max(h/p,p/h)/(T*n)),m=Math.max(d/y,y/l);O<A;++O){if(f+=s=x[O].value,s<l&&(l=s),s>d&&(d=s),y=f*f*v,(g=Math.max(d/y,y/l))>m){f-=s;break}m=g}b.push(o={value:f,dice:p<h,children:x.slice(w,O)}),o.dice?u(o,e,r,a,T?r+=h*f/T:i):c(o,e,r,T?e+=p*f/T:a,i),T-=f,w=O}return b}var h=function n(t){function e(n,e,r,a,i){p(t,n,e,r,a,i)}return e.ratio=function(t){return n((t=+t)>1?t:1)},e}(s);function f(n){if("function"!=typeof n)throw new Error;return n}function l(){return 0}var d=function(n){return function(){return n}},g=function(){var n=h,t=!1,e=1,r=1,a=[0],i=l,u=l,c=l,s=l,p=l;function g(n){return n.x0=n.y0=0,n.x1=e,n.y1=r,n.eachBefore(m),a=[0],t&&n.eachBefore(o),n}function m(t){var e=a[t.depth],r=t.x0+e,o=t.y0+e,h=t.x1-e,f=t.y1-e;h<r&&(r=h=(r+h)/2),f<o&&(o=f=(o+f)/2),t.x0=r,t.y0=o,t.x1=h,t.y1=f,t.children&&(e=a[t.depth+1]=i(t)/2,r+=p(t)-e,o+=u(t)-e,(h-=c(t)-e)<r&&(r=h=(r+h)/2),(f-=s(t)-e)<o&&(o=f=(o+f)/2),n(t,r,o,h,f))}return g.round=function(n){return arguments.length?(t=!!n,g):t},g.size=function(n){return arguments.length?(e=+n[0],r=+n[1],g):[e,r]},g.tile=function(t){return arguments.length?(n=f(t),g):n},g.padding=function(n){return arguments.length?g.paddingInner(n).paddingOuter(n):g.paddingInner()},g.paddingInner=function(n){return arguments.length?(i="function"==typeof n?n:d(+n),g):i},g.paddingOuter=function(n){return arguments.length?g.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n):g.paddingTop()},g.paddingTop=function(n){return arguments.length?(u="function"==typeof n?n:d(+n),g):u},g.paddingRight=function(n){return arguments.length?(c="function"==typeof n?n:d(+n),g):c},g.paddingBottom=function(n){return arguments.length?(s="function"==typeof n?n:d(+n),g):s},g.paddingLeft=function(n){return arguments.length?(p="function"==typeof n?n:d(+n),g):p},g},m=e(1922),v=e(0),y=e.n(v),b=e(92),x=e(230),w=(e(1360),arguments),O=void 0,A=function(n){return function(){return n().apply(O,w)}},T=y.a.shape({name:y.a.string,value:y.a.number.isRequired}),I={name:y.a.string,children:y.a.arrayOf(y.a.oneOfType([y.a.shape(A((function(){return I}))),T]))},S=y.a.oneOfType([y.a.shape(I),T]),N={data:y.a.arrayOf(S),width:y.a.number,height:y.a.number,colorScheme:y.a.string,margin:y.a.shape({top:y.a.number,right:y.a.number,bottom:y.a.number,left:y.a.number}),numberFormat:y.a.string,treemapRatio:y.a.number};function R(n){return function(t){Object(a.a)(t.ancestors().map((function(n){return n.node}))).classed("node--hover",n).select("rect").attr("width",(function(t){return t.x1-t.x0-n})).attr("height",(function(t){return t.y1-t.y0-n}))}}function L(n,t){var e=t.data,r=t.width,a=t.height,o=t.numberFormat,u=t.colorScheme,c=t.treemapRatio,s=Object(i.a)(n);s.classed("superset-legacy-chart-treemap",!0);var p=Object(x.b)(o),f=b.b.getScale(u),l=e;if(s.selectAll("*").remove(),0<l.length){var d=l[0],v=g().size([r,a]).paddingOuter(3).paddingTop(19).paddingInner(1).tile(h.ratio(c)).round(!0)(Object(m.a)(d).sum((function(n){return n.value})).sort((function(n,t){return t.height-n.height||t.value-n.value}))),y=s.append("svg").attr("class","treemap").attr("width",r).attr("height",a).selectAll(".node").data(v.descendants()).enter().append("g").attr("transform",(function(n){return"translate("+n.x0+","+n.y0+")"})).attr("class","node").each((function(n){n.node=this})).on("mouseover",R(!0)).on("mouseout",R(!1));y.append("rect").attr("id",(function(n){return"rect-"+n.data.name})).attr("width",(function(n){return n.x1-n.x0})).attr("height",(function(n){return n.y1-n.y0})).style("fill",(function(n){return f(n.depth)})),y.append("clipPath").attr("id",(function(n){return"clip-"+n.data.name})).append("use").attr("xlink:href",(function(n){return"#rect-"+n.data.name}));var w=y.append("text").attr("clip-path",(function(n){return"url(#clip-"+n.data.name+")"}));w.filter((function(n){return n.children})).selectAll("tspan").data((function(n){return n.data.name.substring(n.data.name.lastIndexOf(".")+1).split(/(?=[A-Z][^A-Z])/g).concat(" "+p(n.value))})).enter().append("tspan").attr("x",(function(n,t){return t?null:4})).attr("y",13).text((function(n){return n})),w.filter((function(n){return!n.children})).selectAll("tspan").data((function(n){return n.data.name.substring(n.data.name.lastIndexOf(".")+1).split(/(?=[A-Z][^A-Z])/g).concat(p(n.value))})).enter().append("tspan").attr("x",4).attr("y",(function(n,t){return 13+10*t})).text((function(n){return n})),y.append("title").text((function(n){return n.data.name+"\n"+p(n.value)}))}}L.displayName="Treemap",L.propTypes=N;var B=L;t.default=Object(r.a)(B)},995:function(n,t,e){"use strict";e.d(t,"a",(function(){return p}));var r=e(0),a=e.n(r),i=e(1),o=e.n(i);function u(){return(u=Object.assign||function(n){for(var t,e=1;e<arguments.length;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}).apply(this,arguments)}function c(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function s(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function p(n,t){var e=function(e){function r(n){var t;return s(c(t=e.call(this,n)||this),"container",void 0),t.setContainerRef=t.setContainerRef.bind(c(t)),t}!function(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}(r,e);var a=r.prototype;return a.componentDidMount=function(){this.execute()},a.componentDidUpdate=function(){this.execute()},a.componentWillUnmount=function(){this.container=void 0,t&&t.componentWillUnmount&&t.componentWillUnmount.bind(this)()},a.setContainerRef=function(n){this.container=n},a.execute=function(){this.container&&n(this.container,this.props)},a.render=function(){var n=this.props,t=n.id,e=n.className;return o.a.createElement("div",{id:t,className:e,ref:this.setContainerRef})},r}(o.a.Component);s(e,"propTypes",{id:a.a.string,className:a.a.string});var r=e;return n.displayName&&(r.displayName=n.displayName),n.propTypes&&(r.propTypes=u({},r.propTypes,{},n.propTypes)),n.defaultProps&&(r.defaultProps=n.defaultProps),e}}}]);