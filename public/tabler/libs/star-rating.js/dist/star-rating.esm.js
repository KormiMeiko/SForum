function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n,s=0;s<t.length;s++)n=t[s],n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var defaults={classNames:{active:"gl-active",base:"gl-star-rating",selected:"gl-selected"},clearable:!0,maxStars:10,prebuilt:!1,stars:null,tooltip:"Select a Rating"},addRemoveClass=function(t,n,s){t.classList[n?"add":"remove"](s)},createSpanEl=function(t){var s,n=document.createElement("span");t=t||{};for(s in t)n.setAttribute(s,t[s]);return n},inRange=function(t,n,s){return/^\d+$/.test(t)&&n<=t&&t<=s},insertSpanEl=function(t,n,s){var o=createSpanEl(s);return t.parentNode.insertBefore(o,n?t.nextSibling:t),o},merge=function e(){for(var t,o=arguments.length,s=new Array(o),n=0;n<o;n++)s[n]=arguments[n];return t={},s.forEach(function(n){Object.keys(n||{}).forEach(function(o){if(s[0][o]===void 0)return;var i=n[o];if(type(i)==="Object"&&type(t[o])==="Object"){t[o]=e(t[o],i);return}t[o]=i})}),t},type=function(t){return{}.toString.call(t).slice(8,-1)},values=function e(t){var e=[];return[].forEach.call(t.options,function(t){var n=parseInt(t.value,10)||0;n>0&&e.push({index:t.index,text:t.text,value:n})}),e.sort(function(e,t){return e.value-t.value})},Widget=function(){function e(t,n){_classCallCheck(this,e),this.direction=window.getComputedStyle(t,null).getPropertyValue("direction"),this.el=t,this.events={change:this.onChange.bind(this),keydown:this.onKeyDown.bind(this),mousedown:this.onPointerDown.bind(this),mouseleave:this.onPointerLeave.bind(this),mousemove:this.onPointerMove.bind(this),reset:this.onReset.bind(this),touchend:this.onPointerDown.bind(this),touchmove:this.onPointerMove.bind(this)},this.indexActive=null,this.indexSelected=null,this.props=n,this.tick=null,this.ticking=!1,this.values=values(t),this.widgetEl=null,this.el.widget&&this.el.widget.destroy(),inRange(this.values.length,1,this.props.maxStars)?this.build():this.destroy()}return _createClass(e,[{key:"build",value:function(){this.destroy(),this.buildWidget(),this.selectValue(this.indexSelected=this.selected(),!1),this.handleEvents("add"),this.el.widget=this}},{key:"buildWidget",value:function(){var t,n,s=this;this.props.prebuilt?(t=this.el.parentNode,n=t.querySelector("."+this.props.classNames.base+"--stars")):(t=insertSpanEl(this.el,!1,{class:this.props.classNames.base}),t.appendChild(this.el),n=insertSpanEl(this.el,!0,{class:this.props.classNames.base+"--stars"}),this.values.forEach(function(e,t){var o=createSpanEl({"data-index":t,"data-value":e.value});"function"==typeof s.props.stars&&s.props.stars.call(s,o,e,t),[].forEach.call(o.children,function(e){return e.style.pointerEvents="none"}),n.innerHTML+=o.outerHTML})),t.dataset.starRating="",t.classList.add(this.props.classNames.base+"--"+this.direction),this.props.tooltip&&n.setAttribute("role","tooltip"),this.widgetEl=n}},{key:"changeIndexTo",value:function(t,n){var o,i,s=this;(this.indexActive!==t||n)&&([].forEach.call(this.widgetEl.children,function(e,n){addRemoveClass(e,n<=t,s.props.classNames.active),addRemoveClass(e,n===s.indexSelected,s.props.classNames.selected)}),this.widgetEl.setAttribute("data-rating",t+1),"function"!=typeof this.props.stars&&!this.props.prebuilt&&(this.widgetEl.classList.remove("s"+10*(this.indexActive+1)),this.widgetEl.classList.add("s"+10*(t+1))),this.props.tooltip&&(i=t<0?this.props.tooltip:(o=this.values[t])===null||o===void 0?void 0:o.text,this.widgetEl.setAttribute("aria-label",i)),this.indexActive=t),this.ticking=!1}},{key:"destroy",value:function(){this.indexActive=null,this.indexSelected=this.selected();var t=this.el.parentNode;t.classList.contains(this.props.classNames.base)&&(this.props.prebuilt?(this.widgetEl=t.querySelector("."+this.props.classNames.base+"--stars"),t.classList.remove(this.props.classNames.base+"--"+this.direction),delete t.dataset.starRating):t.parentNode.replaceChild(this.el,t),this.handleEvents("remove")),delete this.el.widget}},{key:"eventListener",value:function(t,n,s,o){var i=this;s.forEach(function(e){return t[n+"EventListener"](e,i.events[e],o||!1)})}},{key:"handleEvents",value:function(t){var n=this.el.closest("form");if(n&&n.tagName==="FORM"&&this.eventListener(n,t,["reset"]),this.eventListener(this.el,t,["change"]),"add"===t&&this.el.disabled)return;this.eventListener(this.el,t,["keydown"]),this.eventListener(this.widgetEl,t,["mousedown","mouseleave","mousemove","touchend","touchmove"],!1)}},{key:"indexFromEvent",value:function(t){var n,s,i=((n=t.touches)===null||n===void 0?void 0:n[0])||((s=t.changedTouches)===null||s===void 0?void 0:s[0])||t,o=document.elementFromPoint(i.clientX,i.clientY);return o.parentNode===this.widgetEl?[].slice.call(o.parentNode.children).indexOf(o):this.indexActive}},{key:"onChange",value:function(){this.changeIndexTo(this.selected(),!0)}},{key:"onKeyDown",value:function(t){var n,o,i,a,s=t.key.slice(5);if(!~["Left","Right"].indexOf(s))return;t.preventDefault(),n=s==="Left"?-1:1,this.direction==="rtl"&&(n*=-1),o=this.values.length-1,i=-1,a=Math.min(Math.max(this.selected()+n,i),o),this.selectValue(a,!0)}},{key:"onPointerDown",value:function(t){t.preventDefault();var n=this.indexFromEvent(t);this.props.clearable&&n===this.indexSelected&&(n=-1),this.selectValue(n,!0)}},{key:"onPointerLeave",value:function(t){var n=this;t.preventDefault(),cancelAnimationFrame(this.tick),requestAnimationFrame(function(){return n.changeIndexTo(n.indexSelected)})}},{key:"onPointerMove",value:function(t){var n=this;t.preventDefault(),this.ticking||(this.tick=requestAnimationFrame(function(){return n.changeIndexTo(n.indexFromEvent(t))}),this.ticking=!0)}},{key:"onReset",value:function(){var t,n=this.valueIndex((t=this.el.querySelector("[selected]"))===null||t===void 0?void 0:t.value);this.selectValue(n||-1,!1)}},{key:"selected",value:function(){return this.valueIndex(this.el.value)}},{key:"selectValue",value:function(t,n){var s;this.el.value=((s=this.values[t])===null||s===void 0?void 0:s.value)||"",this.indexSelected=this.selected(),!1===n?this.changeIndexTo(this.selected(),!0):this.el.dispatchEvent(new Event("change"))}},{key:"valueIndex",value:function(t){return this.values.findIndex(function(e){return e.value===+t})}}]),e}(),StarRating=function(){function e(t,n){_classCallCheck(this,e),this.destroy=this.destroy.bind(this),this.props=n,this.rebuild=this.rebuild.bind(this),this.selector=t,this.widgets=[],this.build()}return _createClass(e,[{key:"build",value:function(){var t=this;this.queryElements(this.selector).forEach(function(e){var n=merge(defaults,t.props,JSON.parse(e.getAttribute("data-options")));"SELECT"===e.tagName&&!e.widget&&(!n.prebuilt&&e.parentNode.classList.contains(n.classNames.base)&&t.unwrap(e),t.widgets.push(new Widget(e,n)))})}},{key:"destroy",value:function(){this.widgets.forEach(function(e){return e.destroy()}),this.widgets=[]}},{key:"queryElements",value:function(t){return"HTMLSelectElement"===type(t)?[t]:"NodeList"===type(t)?[].slice.call(t):"String"===type(t)?[].slice.call(document.querySelectorAll(t)):[]}},{key:"rebuild",value:function(){this.destroy(),this.build()}},{key:"unwrap",value:function(t){var n=t.parentNode,s=n.parentNode;s.insertBefore(t,n),s.removeChild(n)}}]),e}();export default StarRating