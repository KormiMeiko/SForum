(function(e,t){typeof exports=="object"&&typeof module!="undefined"?module.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis!="undefined"?globalThis:e||self,e.jsVectorMap=t())})(this,function(){"use strict";function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,y(e,t)}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},y(e,t)}function M(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function pe(e){throw new TypeError('"'+e+'" is read-only')}function fe(e,t){if(!e)return;if(typeof e=="string")return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(e,t)}function B(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function U(e,t){var s,n=typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=fe(e))||t&&e&&typeof e.length=="number")return n&&(e=n),s=0,function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}};throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;pe("i")>=0&&t.item(n)!==this;);return n>-1}),Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(t){if(t==null)throw new TypeError("Cannot convert first argument to object");i=Object(t);for(s=1;s<arguments.length;s++){if(n=arguments[s],n==null)continue;n=Object(n),a=Object.keys(Object(n));for(var n,s,o,i,a,c,r=0,l=a.length;r<l;r++)o=a[r],c=Object.getOwnPropertyDescriptor(n,o),c!==void 0&&c.enumerable&&(i[o]=n[o])}return i}});var e,t,n,s,o,a,r,c,d,u,h,m,f,p,g,v,b,j,_,O,x,E,k,A,S,F,T,z,D,N,L,R,P,H,I,V,$,W,X=function(t){return Q(t)&&!Z(t)};function Q(e){return!!e&&typeof e=="object"}function Z(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||be(e)||ve(e)}P=typeof Symbol=="function"&&Symbol.for,R=P?Symbol.for("react.element"):60103;function ve(e){return e.$$typeof===R}function be(e){return e instanceof Node}function je(e){return Array.isArray(e)?[]:{}}function l(e,t){return t.clone!==!1&&t.isMergeableObject(e)?u(je(e),e,t):e}function ye(e,t,n){return e.concat(t).map(function(e){return l(e,n)})}function _e(e,t){if(!t.customMerge)return u;var n=t.customMerge(e);return typeof n=="function"?n:u}function we(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return e.propertyIsEnumerable(t)}):[]}function C(e){return Object.keys(e).concat(we(e))}function w(e,t){try{return t in e}catch{return!1}}function Oe(e,t){return w(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function Y(e,t,n){var s={};return n.isMergeableObject(e)&&C(e).forEach(function(t){s[t]=l(e[t],n)}),C(t).forEach(function(o){if(Oe(e,o))return;w(e,o)&&n.isMergeableObject(t[o])?s[o]=_e(o,n)(e[o],t[o],n):s[o]=l(t[o],n)}),s}u=function(t,n,s){s=s||{},s.arrayMerge=s.arrayMerge||ye,s.isMergeableObject=s.isMergeableObject||X,s.cloneUnlessOtherwiseSpecified=l;var o=Array.isArray(n),i=Array.isArray(t),a=o===i;return a?o?s.arrayMerge(t,n,s):Y(t,n,s):l(n,s)},_=function(t){return typeof t=="object"&&typeof t.nodeType!="undefined"?t:typeof t=="string"?document.querySelector(t):null},s=function(t,n,s,o){o===void 0&&(o=!1);var i=document.createElement(t);return s&&(i[o?"innerHTML":"textContent"]=s),n&&(i.className=n),i},E=function(t,n){return Element.prototype.querySelector.call(t,n)},m=function(t){t.parentNode.removeChild(t)},A=function(t){return/\.(jpg|gif|png)$/.test(t)},S=function(t){return t.replace(/[\w]([A-Z])/g,function(e){return e[0]+"-"+e[1]}).toLowerCase()},n=function(t,n,s){return s===void 0&&(s=!1),s?u(t,n):Object.assign(t,n)},h=function(t,n){return t.toLowerCase()+":to:"+n.toLowerCase()},b=function(t,n){Object.assign(t.prototype,n)},a={},D=1,e={on:function(t,n,s,o){o===void 0&&(o={});var i="jvm:"+n+"::"+D++;a[i]={selector:t,handler:s},s._uid=i,t.addEventListener(n,s,o)},delegate:function(n,s,o,i){s=s.split(" "),s.forEach(function(t){e.on(n,t,function(e){var t=e.target;t.matches(o)&&i.call(t,e)})})},off:function(t,n,s){var o=n.split(":")[1];t.removeEventListener(o,s),delete a[s._uid]},flush:function(){Object.keys(a).forEach(function(t){e.off(a[t].selector,t,a[t].handler)})},getEventRegistry:function(){return a}};function ge(){var s,o,i=this,t=this,n=!1;this.params.draggable&&(e.on(this.container,"mousemove",function(e){if(!n)return!1;t.transX-=(s-e.pageX)/t.scale,t.transY-=(o-e.pageY)/t.scale,t._applyTransform(),s=e.pageX,o=e.pageY}),e.on(this.container,"mousedown",function(e){return n=!0,s=e.pageX,o=e.pageY,!1}),e.on(document.body,"mouseup",function(){n=!1})),this.params.zoomOnScroll&&e.on(this.container,"wheel",function(e){var s=((e.deltaY||-e.wheelDelta||e.detail)>>10||1)*75,n=i.container.getBoundingClientRect(),o=e.pageX-n.left-window.pageXOffset,a=e.pageY-n.top-window.pageYOffset,r=Math.pow(1+t.params.zoomOnScrollSpeed/1e3,-1.5*s);t.tooltip&&t._tooltip.hide(),t._setScale(t.scale*r,o,a),e.preventDefault()})}t={onLoaded:"map:loaded",onViewportChange:"viewport:changed",onRegionClick:"region:clicked",onMarkerClick:"marker:clicked",onRegionSelected:"region:selected",onMarkerSelected:"marker:selected",onRegionTooltipShow:"region.tooltip:show",onMarkerTooltipShow:"marker.tooltip:show",onDestroyed:"map:destroyed"},p=function(n,s,o){var r=_(s),c=r.getAttribute("class").indexOf("jvm-region")===-1?"marker":"region",i=c==="region",a=i?r.getAttribute("data-code"):r.getAttribute("data-index"),l=i?t.onRegionSelected:t.onMarkerSelected;return o&&(l=i?t.onRegionTooltipShow:t.onMarkerTooltipShow),{type:c,code:a,event:l,element:i?n.regions[a].element:n._markers[a].element,tooltipText:i?n._mapData.paths[a].name||"":n._markers[a].config.name||""}};function me(){var o,i,a,n=this,s=this.container;e.on(s,"mousemove",function(e){Math.abs(i-e.pageX)+Math.abs(a-e.pageY)>2&&(o=!0)}),e.delegate(s,"mousedown",".jvm-element",function(e){i=e.pageX,a=e.pageY,o=!1}),e.delegate(s,"mouseover mouseout",".jvm-element",function(e){var t=p(n,this,!0),s=n.params.showTooltip;e.type==="mouseover"?(t.element.hover(!0),s&&(n._tooltip.text(t.tooltipText),n._tooltip.show(),n._emit(t.event,[e,n._tooltip,t.code]))):(t.element.hover(!1),s&&n._tooltip.hide())}),e.delegate(s,"mouseup",".jvm-element",function(){var s,t=p(n,this);if(o)return;(t.type==="region"&&n.params.regionsSelectable||t.type==="marker"&&n.params.markersSelectable)&&(s=t.element,n.params[t.type+"sSelectableOne"]&&n._clearSelected(t.type+"s"),t.element.isSelected?s.select(!1):s.select(!0),n._emit(t.event,[t.code,s.isSelected,n._getSelected(t.type+"s")]))}),e.delegate(s,"click",".jvm-element",function(e){var s=p(n,this),o=s.type,i=s.code;n._emit(o==="region"?t.onRegionClick:t.onMarkerClick,[e,i])})}function he(){var n,t=this,o=s("div","jvm-zoom-btn jvm-zoomin","&#43;",!0),i=s("div","jvm-zoom-btn jvm-zoomout","&#x2212",!0);this.container.appendChild(o),this.container.appendChild(i),n=function(n){return n===void 0&&(n=!0),function(){return t._setScale(n?t.scale*t.params.zoomStep:t.scale/t.params.zoomStep,t._width/2,t._height/2,!1,t.params.zoomAnimate)}},e.on(o,"click",n()),e.on(i,"click",n(!1))}function ie(){var n,s,o,i,a,r,c,t=this,l=function(l){var u,h,m,f,p,d=l.touches;l.type=="touchstart"&&(o=0),d.length==1?(o==1&&(f=t.transX,p=t.transY,t.transX-=(r-d[0].pageX)/t.scale,t.transY-=(c-d[0].pageY)/t.scale,t._tooltip.hide(),t._applyTransform(),(f!=t.transX||p!=t.transY)&&l.preventDefault()),r=d[0].pageX,c=d[0].pageY):d.length==2&&(o==2?(m=Math.sqrt(Math.pow(d[0].pageX-d[1].pageX,2)+Math.pow(d[0].pageY-d[1].pageY,2))/a,t._setScale(i*m,n,s),t._tooltip.hide(),l.preventDefault()):(h=t.container.getBoundingClientRect(),u={top:h.top+window.scrollY,left:h.left+window.scrollX},d[0].pageX>d[1].pageX?n=d[1].pageX+(d[0].pageX-d[1].pageX)/2:n=d[0].pageX+(d[1].pageX-d[0].pageX)/2,d[0].pageY>d[1].pageY?s=d[1].pageY+(d[0].pageY-d[1].pageY)/2:s=d[0].pageY+(d[1].pageY-d[0].pageY)/2,n-=u.left,s-=u.top,i=t.scale,a=Math.sqrt(Math.pow(d[0].pageX-d[1].pageX,2)+Math.pow(d[0].pageY-d[1].pageY,2)))),o=d.length};e.on(t.container,"touchstart",l),e.on(t.container,"touchmove",l)}d=function(){function e(){}var t=e.prototype;return t.dispose=function(){this._tooltip?m(this._tooltip):this.shape.remove();for(var t,n,s=U(Object.getOwnPropertyNames(this));!(t=s()).done;)n=t.value,this[n]=null},e}(),g={getLabelText:function(t,n){if(!n)return;if(typeof n.render=="function"){var s=[];return this.config&&this.config.marker&&s.push(this.config.marker),s.push(t),n.render.apply(this,s)}return t},getLabelOffsets:function(t,n){return typeof n.offsets=="function"?n.offsets(t):Array.isArray(n.offsets)?n.offsets[t]:[0,0]},setStyle:function(t,n){this.shape.setStyle(t,n)},remove:function(){this.shape.remove(),this.label&&this.label.remove()},hover:function(t){this._setStatus("isHovered",t)},select:function(t){this._setStatus("isSelected",t)},_setStatus:function(t,n){this.shape[t]=n,this.shape.updateStyle(),this[t]=n,this.label&&(this.label[t]=n,this.label.updateStyle())}},v=function(e){i(t,e);function t(t){var s,a,r,c=t.map,o=t.code,l=t.path,d=t.style,i=t.label,u=t.labelStyle,h=t.labelsGroup,n=e.call(this)||this;return n._map=c,n.shape=n._createRegion(l,o,d),a=n.getLabelText(o,i),i&&a&&(s=n.shape.getBBox(),r=n.getLabelOffsets(o,i),n.labelX=s.x+s.width/2+r[0],n.labelY=s.y+s.height/2+r[1],n.label=n._map.canvas.createText({text:a,textAnchor:"middle",alignmentBaseline:"central",dataCode:o,x:n.labelX,y:n.labelY},u,h),n.label.addClass("jvm-region jvm-element")),n}var n=t.prototype;return n._createRegion=function(t,n,s){return t=this._map.canvas.createPath({d:t,dataCode:n},s),t.addClass("jvm-region jvm-element"),t},n.updateLabelPosition=function(){this.label&&this.label.set({x:this.labelX*this._map.scale+this._map.transX*this._map.scale,y:this.labelY*this._map.scale+this._map.transY*this._map.scale})},t}(d),b(v,g);function ce(){this._regionLabelsGroup=this._regionLabelsGroup||this.canvas.createGroup("jvm-regions-labels-group");for(e in this._mapData.paths){var e,t=new v({map:this,code:e,path:this._mapData.paths[e].path,style:n({},this.params.regionStyle),labelStyle:this.params.regionLabelStyle,labelsGroup:this._regionLabelsGroup,label:this.params.labels&&this.params.labels.regions});this.regions[e]={config:this._mapData.paths[e],element:t}}}O=function(e){i(t,e);function t(t){var s=t.index,o=t.map,i=t.style,a=t.x1,r=t.y1,c=t.x2,l=t.y2,d=t.group,u=t.config,n=e.call(this)||this;return n.config=u,n.shape=o.canvas.createLine({x1:a,y1:r,x2:c,y2:l,dataIndex:s},i,d),n.shape.addClass("jvm-line"),n}var n=t.prototype;return n.setStyle=function(t,n){this.shape.setStyle(t,n)},t}(d);function q(e,t,s){s===void 0&&(s=!1);var o,i,c,l,a=!1,r=!1;this.linesGroup=this.linesGroup||this.canvas.createGroup("jvm-lines-group");for(c in e){o=e[c];for(l in t)i=s?t[l].config:t[l],i.name===o.from&&(a=this.getMarkerPosition(i)),i.name===o.to&&(r=this.getMarkerPosition(i));a!==!1&&r!==!1&&(this._lines[h(o.from,o.to)]=new O({index:c,map:this,style:n({initial:this.params.lineStyle},{initial:o.style||{}},!0),x1:a.x,y1:a.y,x2:r.x,y2:r.y,group:this.linesGroup,config:o}))}}j=function(e){i(t,e);function t(t){var i=t.index,s=t.style,a=t.label,r=t.cx,c=t.cy,o=t.map,l=t.group,n=e.call(this)||this;return n._map=o,n._isImage=!!s.initial.image,n.config=arguments[0],n.shape=o.canvas[n._isImage?"createImage":"createCircle"]({dataIndex:i,cx:r,cy:c},s,l),n.shape.addClass("jvm-marker jvm-element"),n._isImage&&n.updateLabelPosition(),a&&n._createLabel(n.config),n}var n=t.prototype;return n.updateLabelPosition=function(){this.label&&this.label.set({x:this._labelX*this._map.scale+this._offsets[0]+this._map.transX*this._map.scale+5+(this._isImage?(this.shape.width||0)/2:this.shape.node.r.baseVal.value),y:this._labelY*this._map.scale+this._map.transY*this._map.scale+this._offsets[1]})},n._createLabel=function(t){var s=t.index,n=t.map,o=t.label,r=t.labelsGroup,c=t.cx,l=t.cy,i=t.marker,a=t.isRecentlyCreated,d=this.getLabelText(s,o);this._labelX=c/n.scale-n.transX,this._labelY=l/n.scale-n.transY,this._offsets=a&&i.offsets?i.offsets:this.getLabelOffsets(s,o),this.label=n.canvas.createText({text:d,dataIndex:s,x:this._labelX,y:this._labelY,dy:"0.6ex"},n.params.markerLabelStyle,r),this.label.addClass("jvm-marker jvm-element"),a&&this.updateLabelPosition()},t}(d),b(j,g);function G(e,t){var o,i,a,s=this;e===void 0&&(e={}),t===void 0&&(t=!1),this._markersGroup=this._markersGroup||this.canvas.createGroup("jvm-markers-group"),this._markerLabelsGroup=this._markerLabelsGroup||this.canvas.createGroup("jvm-markers-labels-group"),i=function(){var l,a=e[o],r=s.getMarkerPosition(a),c=a.coords.join(":");if(!r)return"continue";if(t){if(Object.keys(s._markers).filter(function(e){return s._markers[e]._uid===c}).length)return"continue";o=Object.keys(s._markers).length}l=new j({index:o,map:s,style:n(s.params.markerStyle,{initial:a.style||{}},!0),label:s.params.labels&&s.params.labels.markers,labelsGroup:s._markerLabelsGroup,cx:r.x,cy:r.y,group:s._markersGroup,marker:a,isRecentlyCreated:t}),s._markers[o]&&s.removeMarkers([o]),s._markers[o]={_uid:c,config:a,element:l}};for(o in e)if(a=i(),a==="continue")continue}W=function(){function e(e){e===void 0&&(e={}),this._options=e,this._map=this._options.map,this._series=this._options.series,this._body=s("div","jvm-legend"),this._options.cssClass&&this._body.setAttribute("class",this._options.cssClass),e.vertical?this._map.legendVertical.appendChild(this._body):this._map.legendHorizontal.appendChild(this._body),this.render()}var t=e.prototype;return t.render=function(){var t,o,i,a,c,l,n=this._series.scale.getTicks(),r=s("div","jvm-legend-inner");this._body.innderHTML="",this._options.title&&(c=s("div","jvm-legend-title",this._options.title),this._body.appendChild(c)),this._body.appendChild(r);for(t=0;t<n.length;t++){switch(i=s("div","jvm-legend-tick"),o=s("div","jvm-legend-tick-sample"),this._series.config.attribute){case"fill":A(n[t].value)?o.style.background="url("+n[t].value+")":o.style.background=n[t].value;break;case"stroke":o.style.background=n[t].value;break;case"image":o.style.background="url("+(typeof n[t].value=="object"?n[t].value.url:n[t].value)+") no-repeat center center",o.style.backgroundSize="cover";break}i.appendChild(o),a=n[t].label,this._options.labelRender&&(a=this._options.labelRender(a)),l=s("div","jvm-legend-tick-text",a),i.appendChild(l),r.appendChild(i)}},e}(),$=function(){function e(e){this._scale=e}var t=e.prototype;return t.getValue=function(t){return this._scale[t]},t.getTicks=function(){var n,t=[];for(n in this._scale)t.push({label:n,value:this._scale[n]});return t},e}(),V=function(){function t(e,t,s){e===void 0&&(e={}),this._map=s,this._elements=t,this._values=e.values||{},this.config=e,this.config.attribute=e.attribute||"fill",e.attributes&&this.setAttributes(e.attributes),typeof e.scale=="object"&&(this.scale=new $(e.scale)),this.config.legend&&(this.legend=new W(n({map:this._map,series:this},this.config.legend))),this.setValues(this._values)}var e=t.prototype;return e.setValues=function(t){var n,s={};for(n in t)t[n]&&(s[n]=this.scale.getValue(t[n]));this.setAttributes(s)},e.setAttributes=function(t){for(var n in t)this._elements[n]&&this._elements[n].element.setStyle(this.config.attribute,t[n])},e.clear=function(){var t,n={};for(t in this._values)this._elements[t]&&(n[t]=this._elements[t].element.shape.style.initial[this.config.attribute]);this.setAttributes(n),this._values={}},t}();function J(){this.series={markers:[],regions:[]};for(e in this.params.series)for(var e,t=0;t<this.params.series[e].length;t++)this.series[e][t]=new V(this.params.series[e][t],e==="markers"?this._markers:this.regions,this)}function ee(){var e,t,n,s;this._defaultWidth*this.scale<=this._width?(e=(this._width-this._defaultWidth*this.scale)/(2*this.scale),n=(this._width-this._defaultWidth*this.scale)/(2*this.scale)):(e=0,n=(this._width-this._defaultWidth*this.scale)/this.scale),this._defaultHeight*this.scale<=this._height?(t=(this._height-this._defaultHeight*this.scale)/(2*this.scale),s=(this._height-this._defaultHeight*this.scale)/(2*this.scale)):(t=0,s=(this._height-this._defaultHeight*this.scale)/this.scale),this.transY>t?this.transY=t:this.transY<s&&(this.transY=s),this.transX>e?this.transX=e:this.transX<n&&(this.transX=n),this.canvas.applyTransformParams(this.scale,this.transX,this.transY),this._markers&&this._repositionMarkers(),this._lines&&this._repositionLines(),this._repositionLabels()}function te(){var e=this._baseScale;this._width/this._height>this._defaultWidth/this._defaultHeight?(this._baseScale=this._height/this._defaultHeight,this._baseTransX=Math.abs(this._width-this._defaultWidth*this._baseScale)/(2*this._baseScale)):(this._baseScale=this._width/this._defaultWidth,this._baseTransY=Math.abs(this._height-this._defaultHeight*this._baseScale)/(2*this._baseScale)),this.scale*=this._baseScale/e,this.transX*=this._baseScale/e,this.transY*=this._baseScale/e}function ne(e,n,s,o,i){var l,d,u,h,m,f,p,g,v,b,a=this,r=0,c=Math.abs(Math.round((e-this.scale)*60/Math.max(e,this.scale)));e>this.params.zoomMax*this._baseScale?e=this.params.zoomMax*this._baseScale:e<this.params.zoomMin*this._baseScale&&(e=this.params.zoomMin*this._baseScale),typeof n!="undefined"&&typeof s!="undefined"&&(f=e/this.scale,o?(d=n+this._defaultWidth*(this._width/(this._defaultWidth*e))/2,l=s+this._defaultHeight*(this._height/(this._defaultHeight*e))/2):(d=this.transX-(f-1)/e*n,l=this.transY-(f-1)/e*s)),i&&c>0?(m=this.scale,p=(e-m)/c,h=this.transX*this.scale,u=this.transY*this.scale,g=(d*e-h)/c,v=(l*e-u)/c,b=setInterval(function(){r+=1,a.scale=m+p*r,a.transX=(h+g*r)/a.scale,a.transY=(u+v*r)/a.scale,a._applyTransform(),r==c&&(clearInterval(b),a._emit(t.onViewportChange,[a.scale,a.transX,a.transY]))},10)):(this.transX=d,this.transY=l,this.scale=e,this._applyTransform(),this._emit(t.onViewportChange,[this.scale,this.transX,this.transY]))}function se(e){var t,n,s,i,a,o=this;if(e===void 0&&(e={}),n=[],e.region?n.push(e.region):e.regions&&(n=e.regions),n.length)return n.forEach(function(e){if(o.regions[e]){var n=o.regions[e].element.shape.getBBox();n&&(typeof t=="undefined"?t=n:t={x:Math.min(t.x,n.x),y:Math.min(t.y,n.y),width:Math.max(t.x+t.width,n.x+n.width)-Math.min(t.x,n.x),height:Math.max(t.y+t.height,n.y+n.height)-Math.min(t.y,n.y)})}}),this._setScale(Math.min(this._width/t.width,this._height/t.height),-(t.x+t.width/2),-(t.y+t.height/2),!0,e.animate);if(e.coords)return s=this.coordsToPoint(e.coords[0],e.coords[1]),i=this.transX-s.x/this.scale,a=this.transY-s.y/this.scale,this._setScale(e.scale*this._baseScale,i,a,!0,e.animate)}function oe(){this._width=this.container.offsetWidth,this._height=this.container.offsetHeight,this._resize(),this.canvas.setSize(this._width,this._height),this._applyTransform()}f={mill:function(t,n,s){return{x:this.radius*(n-s)*this.radDeg,y:-this.radius*Math.log(Math.tan((45+.4*t)*this.radDeg))/.8}},merc:function(t,n,s){return{x:this.radius*(n-s)*this.radDeg,y:-this.radius*Math.log(Math.tan(Math.PI/4+t*Math.PI/360))}},aea:function(t,n,s){var l=0,d=s*this.radDeg,i=29.5*this.radDeg,u=45.5*this.radDeg,h=t*this.radDeg,m=n*this.radDeg,o=(Math.sin(i)+Math.sin(u))/2,a=Math.cos(i)*Math.cos(i)+2*o*Math.sin(i),r=o*(m-d),c=Math.sqrt(a-2*o*Math.sin(h))/o,f=Math.sqrt(a-2*o*Math.sin(l))/o;return{x:c*Math.sin(r)*this.radius,y:-(f-c*Math.cos(r))*this.radius}},lcc:function(t,n,s){var u=0,a=s*this.radDeg,r=n*this.radDeg,i=33*this.radDeg,c=45*this.radDeg,h=t*this.radDeg,o=Math.log(Math.cos(i)*(1/Math.cos(c)))/Math.log(Math.tan(Math.PI/4+c/2)*(1/Math.tan(Math.PI/4+i/2))),l=Math.cos(i)*Math.pow(Math.tan(Math.PI/4+i/2),o)/o,d=l*Math.pow(1/Math.tan(Math.PI/4+h/2),o),m=l*Math.pow(1/Math.tan(Math.PI/4+u/2),o);return{x:d*Math.sin(o*(r-a))*this.radius,y:-(m-d*Math.cos(o*(r-a)))*this.radius}}},f.degRad=180/Math.PI,f.radDeg=Math.PI/180,f.radius=6381372;function ae(e,t){var n,r=o.maps[this.params.map].projection,c=f[r.type](e,t,r.centralMeridian),i=c.x,a=c.y,s=this.getInsetForPoint(i,a);return!!s&&(n=s.bbox,i=(i-n[0].x)/(n[1].x-n[0].x)*s.width*this.scale,a=(a-n[0].y)/(n[1].y-n[0].y)*s.height*this.scale,{x:i+this.transX*this.scale+s.left*this.scale,y:a+this.transY*this.scale+s.top*this.scale})}function re(e,t){s=o.maps[this.params.map].insets;for(n=0;n<s.length;n++){var n,s,i=s[n].bbox,a=i[0],r=i[1];if(e>a.x&&e<r.x&&t>a.y&&t<r.y)return s[n]}}function K(e){var t=e.coords;return o.maps[this.params.map].projection?this.coordsToPoint.apply(this,t):{x:t[0]*this.scale+this.transX*this.scale,y:t[1]*this.scale+this.transY*this.scale}}function le(){var e,s,o,t=!1,n=!1;for(s in this._lines){for(o in this._markers)e=this._markers[o],e.config.name===this._lines[s].config.from&&(t=this.getMarkerPosition(e.config)),e.config.name===this._lines[s].config.to&&(n=this.getMarkerPosition(e.config));t!==!1&&n!==!1&&this._lines[s].setStyle({x1:t.x,y1:t.y,x2:n.x,y2:n.y})}}function de(){for(t in this._markers){var t,e=this.getMarkerPosition(this._markers[t].config);e!==!1&&this._markers[t].element.setStyle({cx:e.x,cy:e.y})}}function ue(){var t,n,e=this.params.labels;if(!e)return;if(e.regions)for(t in this.regions)this.regions[t].element.updateLabelPosition();if(e.markers)for(n in this._markers)this._markers[n].element.updateLabelPosition()}return I={_setupContainerEvents:ge,_setupElementEvents:me,_setupZoomButtons:he,_setupContainerTouchEvents:ie,_createRegions:ce,_createLines:q,_createMarkers:G,_createSeries:J,_applyTransform:ee,_resize:te,_setScale:ne,setFocus:se,updateSize:oe,coordsToPoint:ae,getInsetForPoint:re,getMarkerPosition:K,_repositionLines:le,_repositionMarkers:de,_repositionLabels:ue},H={map:"world",backgroundColor:"transparent",draggable:!0,zoomButtons:!0,zoomOnScroll:!0,zoomOnScrollSpeed:3,zoomMax:12,zoomMin:1,zoomAnimate:!0,showTooltip:!0,zoomStep:1.5,bindTouchEvents:!0,lineStyle:{stroke:"#808080",strokeWidth:1,strokeLinecap:"round"},markersSelectable:!1,markersSelectableOne:!1,markerStyle:{initial:{r:7,fill:"#374151",fillOpacity:1,stroke:"#FFF",strokeWidth:5,strokeOpacity:.5},hover:{fill:"#3cc0ff",cursor:"pointer"},selected:{fill:"blue"},selectedHover:{}},markerLabelStyle:{initial:{fontFamily:"Verdana",fontSize:12,fontWeight:500,cursor:"default",fill:"#374151"},hover:{cursor:"pointer"},selected:{},selectedHover:{}},regionsSelectable:!1,regionsSelectableOne:!1,regionStyle:{initial:{fill:"#dee2e8",fillOpacity:1,stroke:"none",strokeWidth:0},hover:{fillOpacity:.7,cursor:"pointer"},selected:{fill:"#9ca3af"},selectedHover:{}},regionLabelStyle:{initial:{fontFamily:"Verdana",fontSize:"12",fontWeight:"bold",cursor:"default",fill:"#35373e"},hover:{cursor:"pointer"}}},c=function(){function t(e,t){this.node=this._createElement(e),t&&this.set(t)}var e=t.prototype;return e._createElement=function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)},e.addClass=function(t){this.node.setAttribute("class",t)},e.getBBox=function(){return this.node.getBBox()},e.set=function(t,n){if(typeof t=="object")for(var s in t)this.applyAttr(s,t[s]);else this.applyAttr(t,n)},e.get=function(t){return this.style.initial[t]},e.applyAttr=function(t,n){this.node.setAttribute(S(t),n)},e.remove=function(){m(this.node)},t}(),r=function(e){i(t,e);function t(t,n,s){var o;return s===void 0&&(s={}),o=e.call(this,t,n)||this,o.isHovered=!1,o.isSelected=!1,o.style=s,o.style.current={},o.updateStyle(),o}var s=t.prototype;return s.setStyle=function(t,s){if(typeof t=="object")n(this.style.current,t);else{var o;n(this.style.current,(o={},o[t]=s,o))}this.updateStyle()},s.updateStyle=function(){var t={};n(t,this.style.initial),n(t,this.style.current),this.isHovered&&n(t,this.style.hover),this.isSelected&&(n(t,this.style.selected),this.isHovered&&n(t,this.style.selectedHover)),this.set(t)},t}(c),L=function(e){i(t,e);function t(t,n){return e.call(this,"text",t,n)||this}var n=t.prototype;return n.applyAttr=function(n,s){n==="text"?this.node.textContent=s:e.prototype.applyAttr.call(this,n,s)},t}(r),N=function(e){i(t,e);function t(t,n){return e.call(this,"image",t,n)||this}var n=t.prototype;return n.applyAttr=function(n,s){var o;n==="image"?(typeof s=="object"?(o=s.url,this.offset=s.offset||[0,0]):(o=s,this.offset=[0,0]),this.node.setAttributeNS("http://www.w3.org/1999/xlink","href",o),this.width=23,this.height=23,this.applyAttr("width",this.width),this.applyAttr("height",this.height),this.applyAttr("x",this.cx-this.width/2+this.offset[0]),this.applyAttr("y",this.cy-this.height/2+this.offset[1])):n=="cx"?(this.cx=s,this.width&&this.applyAttr("x",s-this.width/2+this.offset[0])):n=="cy"?(this.cy=s,this.height&&this.applyAttr("y",s-this.height/2+this.offset[1])):e.prototype.applyAttr.apply(this,arguments)},t}(r),z=function(e){i(n,e);function n(t){var n=e.call(this,"svg")||this;return n._container=t,n._defsElement=new c("defs"),n._rootElement=new c("g",{id:"jvm-regions-group"}),n.node.appendChild(n._defsElement.node),n.node.appendChild(n._rootElement.node),n._container.appendChild(n.node),n}var t=n.prototype;return t.setSize=function(t,n){this.node.setAttribute("width",t),this.node.setAttribute("height",n)},t.applyTransformParams=function(t,n,s){this._rootElement.node.setAttribute("transform","scale("+t+") translate("+n+", "+s+")")},t.createPath=function(t,n){var s=new r("path",t,n);return s.node.setAttribute("fill-rule","evenodd"),this._add(s)},t.createCircle=function(t,n,s){var o=new r("circle",t,n);return this._add(o,s)},t.createLine=function(t,n,s){var o=new r("line",t,n);return this._add(o,s)},t.createText=function(t,n,s){var o=new L(t,n);return this._add(o,s)},t.createImage=function(t,n,s){var o=new N(t,n);return this._add(o,s)},t.createGroup=function(t){var n=new c("g");return this.node.appendChild(n.node),t&&(n.node.id=t),n.canvas=this,n},t._add=function(t,n){return n=n||this._rootElement,n.node.appendChild(t.node),t},n}(c),T=function(t){i(o,t);function o(e){var n=t.call(this)||this,o=s("div","jvm-tooltip");return n._map=e,n._tooltip=document.body.appendChild(o),n._bindEventListeners(),M(n)||M(n)}var n=o.prototype;return n._bindEventListeners=function(){var n=this;e.on(this._map.container,"mousemove",function(e){if(!n._tooltip.classList.contains("active"))return;var i=E(n._map.container,"#jvm-regions-group").getBoundingClientRect(),t=5,a=n._tooltip.getBoundingClientRect(),o=a.height,r=a.width,c=e.clientY<=i.top+o+t,l=e.pageY-o-t,s=e.pageX-r-t;c&&(l+=o+t,s-=t*2),e.clientX<i.left+r+t&&(s=e.pageX+t+2,c&&(s+=t*2)),n.css({top:l+"px",left:s+"px"})})},n.getElement=function(){return this._tooltip},n.show=function(){this._tooltip.classList.add("active")},n.hide=function(){this._tooltip.classList.remove("active")},n.text=function(t,n){n===void 0&&(n=!1);var s=n?"innerHTML":"textContent";if(!t)return this._tooltip[s];this._tooltip[s]=t},n.css=function(t){for(var n in t)this._tooltip.style[n]=t[n];return this},o}(d),F=function(){function t(e,t){var n=e.scale,s=e.values;this._scale=n,this._values=s,this._fromColor=this.hexToRgb(n[0]),this._toColor=this.hexToRgb(n[1]),this._map=t,this.setMinMaxValues(s),this.visualize()}var e=t.prototype;return e.setMinMaxValues=function(t){this.min=Number.MAX_VALUE,this.max=0;for(var n in t)n=parseFloat(t[n]),n>this.max&&(this.max=n),n<this.min&&(this.min=n)},e.visualize=function(){var t,s,n={};for(s in this._values)t=parseFloat(this._values[s]),isNaN(t)||(n[s]=this.getValue(t));this.setAttributes(n)},e.setAttributes=function(t){for(var n in t)this._map.regions[n]&&this._map.regions[n].element.setStyle("fill",t[n])},e.getValue=function(t){for(var s,o="#",n=0;n<3;n++)s=Math.round(this._fromColor[n]+(this._toColor[n]-this._fromColor[n])*((t-this.min)/(this.max-this.min))).toString(16),o+=(s.length===1?"0":"")+s;return o},e.hexToRgb=function(t){var n=0,s=0,o=0;return t.length==4?(n="0x"+t[1]+t[1],s="0x"+t[2]+t[2],o="0x"+t[3]+t[3]):t.length==7&&(n="0x"+t[1]+t[2],s="0x"+t[3]+t[4],o="0x"+t[5]+t[6]),[parseInt(n),parseInt(s),parseInt(o)]},t}(),o=function(){function i(e){var t=this;if(e===void 0&&(e={}),this.params=n(i.defaults,e,!0),!i.maps[this.params.map])throw new Error("Attempt to use map which was not loaded: "+e.map);this.regions={},this.scale=1,this.transX=0,this.transY=0,this._mapData=i.maps[this.params.map],this._markers={},this._lines={},this._defaultWidth=this._mapData.width,this._defaultHeight=this._mapData.height,this._height=0,this._width=0,this._baseScale=1,this._baseTransX=0,this._baseTransY=0,document.readyState!=="loading"?this._init():window.addEventListener("DOMContentLoaded",function(){return t._init()})}var o=i.prototype;return o._init=function(){var n=this.params;this.container=_(n.selector),this.container.classList.add("jvm-container"),this.canvas=new z(this.container),this.setBackgroundColor(n.backgroundColor),this._createRegions(),this.updateSize(),this._createLines(n.lines||{},n.markers||{}),this._createMarkers(n.markers),this._repositionLabels(),this._setupContainerEvents(),this._setupElementEvents(),n.zoomButtons&&this._setupZoomButtons(),n.showTooltip&&(this._tooltip=new T(this)),n.selectedRegions&&this._setSelected("regions",n.selectedRegions),n.selectedMarkers&&this._setSelected("_markers",n.selectedMarkers),n.focusOn&&this.setFocus(n.focusOn),n.visualizeData&&(this.dataVisualization=new F(n.visualizeData,this)),n.bindTouchEvents&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)&&this._setupContainerTouchEvents(),n.series&&(this.container.appendChild(this.legendHorizontal=s("div","jvm-series-container jvm-series-h")),this.container.appendChild(this.legendVertical=s("div","jvm-series-container jvm-series-v")),this._createSeries()),this._emit(t.onLoaded,[this])},o.setBackgroundColor=function(t){this.container.style.backgroundColor=t},o.getSelectedRegions=function(){return this._getSelected("regions")},o.clearSelectedRegions=function(){this._clearSelected("regions")},o.getSelectedMarkers=function(){return this._getSelected("_markers")},o.clearSelectedMarkers=function(){this._clearSelected("_markers")},o.addMarkers=function(t){if(Array.isArray(t))return this._createMarkers(t,!0);this._createMarkers([t],!0)},o.removeMarkers=function(t){var n=this;t||(t=Object.keys(this._markers)),t.forEach(function(e){n._markers[e].element.remove(),delete n._markers[e]})},o.addLine=function(t,n,s){s===void 0&&(s={}),console.warn("`addLine` method is deprecated, please use `addLines` instead."),this._createLines([{from:t,to:n,style:s}],this._markers,!0)},o.addLines=function(t){var n=this._getLinesAsUids();Array.isArray(t)||(t=[t]),this._createLines(t.filter(function(e){return!(n.indexOf(h(e.from,e.to))>-1)}),this._markers,!0)},o.removeLines=function(t){var n=this;Array.isArray(t)?t=t.map(function(e){return h(e.from,e.to)}):t=this._getLinesAsUids(),t.forEach(function(e){n._lines[e].dispose(),delete n._lines[e]})},o.removeLine=function(t,n){console.warn("`removeLine` method is deprecated, please use `removeLines` instead.");var s=h(t,n);this._lines.hasOwnProperty(s)&&(this._lines[s].element.remove(),delete this._lines[s])},o.reset=function(){for(n in this.series)for(var n,t=0;t<this.series[n].length;t++)this.series[n][t].clear();this.legendHorizontal&&(m(this.legendHorizontal),this.legendHorizontal=null),this.legendVertical&&(m(this.legendVertical),this.legendVertical=null),this.scale=this._baseScale,this.transX=this._baseTransX,this.transY=this._baseTransY,this._applyTransform(),this.clearSelectedMarkers(),this.clearSelectedRegions(),this.removeMarkers()},o.destroy=function(s){var o=this;s===void 0&&(s=!0),e.flush(),this._tooltip.dispose(),this._emit(t.onDestroyed),s&&Object.keys(this).forEach(function(e){try{delete o[e]}catch{}})},o.extend=function(t,n){if(typeof this[t]=="function")throw new Error("The method ["+t+"] does already exist, please use another name.");i.prototype[t]=n},o._emit=function(n,s){for(var o in t)t[o]===n&&typeof this.params[o]=="function"&&this.params[o].apply(this,s)},o._getSelected=function(t){var s,n=[];for(s in this[t])this[t][s].element.isSelected&&n.push(s);return n},o._setSelected=function(t,n){var s=this;n.forEach(function(e){s[t][e]&&s[t][e].element.select(!0)})},o._clearSelected=function(t){var n=this;this._getSelected(t).forEach(function(e){n[t][e].element.select(!1)})},o._getLinesAsUids=function(){return Object.keys(this._lines)},i}(),o.maps={},o.defaults=H,Object.assign(o.prototype,I),k=function(){function e(e){if(e===void 0&&(e={}),!e.selector)throw new Error("Selector is not given.");return new o(e)}return e.addMap=function(t,n){o.maps[t]=n},e}(),x=window.jsVectorMap=k,x})