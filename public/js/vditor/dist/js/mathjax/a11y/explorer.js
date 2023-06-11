!function(e){var n={};function t(s){if(n[s])return n[s].exports;var o=n[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:s})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o,s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(o in e)t.d(s,o,function(t){return e[t]}.bind(null,o));return s},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=14)}([function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sreReady=MathJax._.a11y.sre.sreReady},function(e,t,n){"use strict";var o,s=this&&this.__read||function(e,t){if(n="function"==typeof Symbol&&e[Symbol.iterator],!n)return e;var n,s,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(s=i.next()).done;)a.push(s.value)}catch(e){o={error:e}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},a=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(s(arguments[t]));return e},i=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],s=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&s>=e.length&&(e=void 0),{value:e&&e[s++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(t,"__esModule",{value:!0}),t.AbstractExplorer=void 0,n(0),o=function(){function e(e,t,n){for(var o=[],s=3;s<arguments.length;s++)o[s-3]=arguments[s];this.document=e,this.region=t,this.node=n,this.stoppable=!0,this.events=[],this.highlighter=this.getHighlighter(),this._active=!1}return e.stopEvent=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopImmediatePropagation?e.stopImmediatePropagation():e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},e.create=function(e,t,n){for(var o,i=[],s=3;s<arguments.length;s++)i[s-3]=arguments[s];return o=new(this.bind.apply(this,a([void 0,e,t,n],i))),o},e.prototype.Events=function(){return this.events},Object.defineProperty(e.prototype,"active",{get:function(){return this._active},set:function(e){this._active=e},enumerable:!1,configurable:!0}),e.prototype.Attach=function(){this.AddEvents()},e.prototype.Detach=function(){this.RemoveEvents()},e.prototype.Start=function(){this.highlighter=this.getHighlighter(),this.active=!0},e.prototype.Stop=function(){this.active&&(this.region.Clear(),this.region.Hide(),this.active=!1)},e.prototype.AddEvents=function(){try{for(t=i(this.events),e=t.next();!e.done;e=t.next()){var e,t,n,o,a=s(e.value,2),r=a[0],c=a[1];this.node.addEventListener(r,c)}}catch(e){n={error:e}}finally{try{e&&!e.done&&(o=t.return)&&o.call(t)}finally{if(n)throw n.error}}},e.prototype.RemoveEvents=function(){try{for(t=i(this.events),e=t.next();!e.done;e=t.next()){var e,t,n,o,a=s(e.value,2),r=a[0],c=a[1];this.node.removeEventListener(r,c)}}catch(e){n={error:e}}finally{try{e&&!e.done&&(o=t.return)&&o.call(t)}finally{if(n)throw n.error}}},e.prototype.Update=function(e){void 0===e&&(e=!1)},e.prototype.getHighlighter=function(){var e=this.document.options.a11y,t={color:e.foregroundColor.toLowerCase(),alpha:e.foregroundOpacity/100},n={color:e.backgroundColor.toLowerCase(),alpha:e.backgroundOpacity/100};return sre.HighlighterFactory.highlighter(n,t,{renderer:this.document.outputJax.name,browser:"v3"})},e.prototype.stopEvent=function(t){this.stoppable&&e.stopEvent(t)},e}(),t.AbstractExplorer=o},function(e,t,n){"use strict";var s,i,a,r,c,l,d,u,h,m,f,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0}),t.HoverRegion=t.LiveRegion=t.ToolTip=t.StringRegion=t.DummyRegion=t.AbstractRegion=void 0,i=n(13),n(0),s=function(){function e(e){this.document=e,this.CLASS=this.constructor,this.AddStyles(),this.AddElement()}return e.prototype.AddStyles=function(){if(!this.CLASS.styleAdded){var e=this.document.adaptor.node("style");e.innerHTML=this.CLASS.style.cssText,this.document.adaptor.head(this.document.adaptor.document).appendChild(e),this.CLASS.styleAdded=!0}},e.prototype.AddElement=function(){var e=this.document.adaptor.node("div");e.classList.add(this.CLASS.className),e.style.backgroundColor="white",this.div=e,this.inner=this.document.adaptor.node("div"),this.div.appendChild(this.inner),this.document.adaptor.body(this.document.adaptor.document).appendChild(this.div)},e.prototype.Show=function(e,t){this.position(e),this.highlight(t),this.div.classList.add(this.CLASS.className+"_Show")},e.prototype.Hide=function(){this.div.classList.remove(this.CLASS.className+"_Show")},e.prototype.stackRegions=function(e){for(var o,i,a=e.getBoundingClientRect(),s=0,t=Number.POSITIVE_INFINITY,c=this.document.adaptor.document.getElementsByClassName(this.CLASS.className+"_Show"),r=0,n=void 0;n=c[r];r++)n!==this.div&&(s=Math.max(n.getBoundingClientRect().bottom,s),t=Math.min(n.getBoundingClientRect().left,t));o=(s||a.bottom+10)+window.pageYOffset,i=(t<Number.POSITIVE_INFINITY?t:a.left)+window.pageXOffset,this.div.style.top=o+"px",this.div.style.left=i+"px"},e.styleAdded=!1,e}(),t.AbstractRegion=s,u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.Clear=function(){},t.prototype.Update=function(){},t.prototype.Hide=function(){},t.prototype.Show=function(){},t.prototype.AddElement=function(){},t.prototype.AddStyles=function(){},t.prototype.position=function(){},t.prototype.highlight=function(){},t}(s),t.DummyRegion=u,a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.Clear=function(){this.Update(""),this.inner.style.top="",this.inner.style.backgroundColor=""},t.prototype.Update=function(e){this.inner.textContent="",this.inner.textContent=e},t.prototype.position=function(e){this.stackRegions(e)},t.prototype.highlight=function(e){var t=e.colorString();this.inner.style.backgroundColor=t.background,this.inner.style.color=t.foreground},t}(s),t.StringRegion=a,h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.className="MJX_ToolTip",t.style=new i.CssStyles(((c={})["."+t.className]={position:"absolute",display:"inline-block",height:"1px",width:"1px"},c["."+t.className+"_Show"]={width:"auto",height:"auto",opacity:1,"text-align":"center","border-radius":"6px",padding:"0px 0px","border-bottom":"1px dotted black",position:"absolute","z-index":202},c)),t}(a),t.ToolTip=h,m=function(e){function t(t){var n=e.call(this,t)||this;return n.document=t,n.div.setAttribute("aria-live","assertive"),n}return o(t,e),t.className="MJX_LiveRegion",t.style=new i.CssStyles(((l={})["."+t.className]={position:"absolute",top:"0",height:"1px",width:"1px",padding:"1px",overflow:"hidden"},l["."+t.className+"_Show"]={top:"0",position:"absolute",width:"auto",height:"auto",padding:"0px 0px",opacity:1,"z-index":"202",left:0,right:0,margin:"0 auto","background-color":"rgba(0, 0, 255, 0.2)","box-shadow":"0px 10px 20px #888",border:"2px solid #CCCCCC"},l)),t}(a),t.LiveRegion=m,f=function(e){function t(t){var n=e.call(this,t)||this;return n.document=t,n.inner.style.lineHeight="0",n}return o(t,e),t.prototype.position=function(e){var t,n=e.getBoundingClientRect(),o=this.div.getBoundingClientRect(),s=n.left+n.width/2-o.width/2;switch(s=s<0?0:s,s+=window.pageXOffset,this.document.options.a11y.align){case"top":t=n.top-o.height-10;break;case"bottom":t=n.bottom+10;break;case"center":default:t=n.top+n.height/2-o.height/2}t=(t+=window.pageYOffset)<0?0:t,this.div.style.top=t+"px",this.div.style.left=s+"px"},t.prototype.highlight=function(e){if(!this.inner.firstChild||this.inner.firstChild.hasAttribute("sre-highlight")){var t=e.colorString();this.inner.style.backgroundColor=t.background,this.inner.style.color=t.foreground}},t.prototype.Show=function(t,n){this.div.style.fontSize=this.document.options.a11y.magnify,this.Update(t),e.prototype.Show.call(this,t,n)},t.prototype.Clear=function(){this.inner.textContent="",this.inner.style.top="",this.inner.style.backgroundColor=""},t.prototype.Update=function(e){this.Clear();var t=this.cloneNode(e);this.inner.appendChild(t)},t.prototype.cloneNode=function(e){if(t=e.cloneNode(!0),"MJX-CONTAINER"!==t.nodeName){"g"!==t.nodeName&&(t.style.marginLeft=t.style.marginRight="0");for(n=e;n&&"MJX-CONTAINER"!==n.nodeName;)n=n.parentNode;if("MJX-MATH"!==t.nodeName&&"svg"!==t.nodeName&&"svg"===(t=n.firstChild.cloneNode(!1).appendChild(t).parentNode).nodeName){t.firstChild.setAttribute("transform","matrix(1 0 0 -1 0 0)");var t,n,i=parseFloat(t.getAttribute("viewBox").split(/ /)[2]),a=parseFloat(t.getAttribute("width")),s=e.getBBox(),c=s.x,l=s.y,r=s.width,o=s.height;t.setAttribute("viewBox",[c,-(l+o),r,o].join(" ")),t.removeAttribute("style"),t.setAttribute("width",a/i*r+"ex"),t.setAttribute("height",a/i*o+"ex"),n.setAttribute("sre-highlight","false")}(t=n.cloneNode(!1).appendChild(t).parentNode).style.margin="0"}return t},t.className="MJX_HoverRegion",t.style=new i.CssStyles(((d={})["."+t.className]={position:"absolute",height:"1px",width:"1px",padding:"1px",overflow:"hidden"},d["."+t.className+"_Show"]={position:"absolute",width:"max-content",height:"auto",padding:"0px 0px",opacity:1,"z-index":"202",margin:"0 auto","background-color":"rgba(0, 0, 255, 0.2)","box-shadow":"0px 10px 20px #888",border:"2px solid #CCCCCC"},d)),t}(s),t.HoverRegion=f},function(e,t,n){"use strict";var u,b=this&&this.__extends||(u=function(e,t){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}u(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=this&&this.__assign||function(){return(c=Object.assign||function(e){for(var t,n,s=1,o=arguments.length;s<o;s++)for(t in n=arguments[s])Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e}).apply(this,arguments)},s=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],s=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&s>=e.length&&(e=void 0),{value:e&&e[s++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},v=this&&this.__read||function(e,t){if(n="function"==typeof Symbol&&e[Symbol.iterator],!n)return e;var n,s,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(s=i.next()).done;)a.push(s.value)}catch(e){o={error:e}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},a=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(v(arguments[t]));return e};Object.defineProperty(t,"__esModule",{value:!0}),t.setA11yOption=t.setA11yOptions=t.ExplorerHandler=t.ExplorerMathDocumentMixin=t.ExplorerMathItemMixin=void 0;var d,h,f,g,i=n(8),x=n(9),w=n(10),O=n(11),p=n(12),l=n(5),r=n(6),m=n(7),o=n(2);function j(e,t){return function(e){function n(){var t=null!==e&&e.apply(this,arguments)||this;return t.explorers={},t.attached=[],t.restart=!1,t.refocus=!1,t.savedId=null,t}return b(n,e),n.prototype.explorable=function(e,n){if(void 0===n&&(n=!1),!(this.state()>=i.STATE.EXPLORER)){if(!this.isEscaped&&(e.options.enableExplorer||n)){var o=this.typesetRoot,a=t(this.root);this.savedId&&(this.typesetRoot.setAttribute("sre-explorer-id",this.savedId),this.savedId=null),this.explorers=function(e,t,n){r={};try{for(var a,r,c,l,i=s(Object.keys(h)),o=i.next();!o.done;o=i.next())c=o.value,r[c]=h[c](e,t,n)}catch(e){a={error:e}}finally{try{o&&!o.done&&(l=i.return)&&l.call(i)}finally{if(a)throw a.error}}return r}(e,o,a),this.attachExplorers(e)}this.state(i.STATE.EXPLORER)}},n.prototype.attachExplorers=function(e){this.attached=[];try{for(var n,i,a,r,o=s(Object.keys(this.explorers)),t=o.next();!t.done;t=o.next())a=t.value,n=this.explorers[a],e.options.a11y[a]?(n.Attach(),this.attached.push(n)):n.Detach()}catch(e){i={error:e}}finally{try{t&&!t.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}this.addExplorers(this.attached)},n.prototype.rerender=function(t,n){void 0===n&&(n=i.STATE.RERENDER),this.savedId=this.typesetRoot.getAttribute("sre-explorer-id"),this.refocus=window.document.activeElement===this.typesetRoot;try{for(var r,c,l,a=s(this.attached),o=a.next();!o.done;o=a.next())c=o.value,c.active&&(this.restart=!0,c.Stop())}catch(e){r={error:e}}finally{try{o&&!o.done&&(l=a.return)&&l.call(a)}finally{if(r)throw r.error}}e.prototype.rerender.call(this,t,n)},n.prototype.updateDocument=function(t){e.prototype.updateDocument.call(this,t),this.refocus&&this.typesetRoot.focus(),this.restart&&this.attached.forEach(function(e){return e.Start()}),this.refocus=this.restart=!1},n.prototype.addExplorers=function(e){if(!(e.length<=1)){n=null;try{for(var n,o,a,r,i=s(this.attached),t=i.next();!t.done;t=i.next())o=t.value,o instanceof l.AbstractKeyExplorer&&(o.stoppable=!1,n=o)}catch(e){a={error:e}}finally{try{t&&!t.done&&(r=i.return)&&r.call(i)}finally{if(a)throw a.error}}n&&(n.stoppable=!0)}},n}(e)}function y(e){var t;return(t=function(e){function t(){for(var t,s,o,i,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return t=e.apply(this,a(r))||this,s=t.constructor.ProcessBits,s.has("explorer")||s.allocate("explorer"),o=new O.SerializedMmlVisitor(t.mmlFactory),i=function(e){return o.visitTree(e)},t.options.MathItem=j(t.options.MathItem,i),t.explorerRegions=C(t),t}return b(t,e),t.prototype.explorable=function(){if(!this.processed.isSet("explorer")){if(this.options.enableExplorer)try{for(var n,o,t=s(this.math),e=t.next();!e.done;e=t.next())e.value.explorable(this)}catch(e){n={error:e}}finally{try{e&&!e.done&&(o=t.return)&&o.call(t)}finally{if(n)throw n.error}}this.processed.set("explorer")}return this},t.prototype.state=function(t,n){return void 0===n&&(n=!1),e.prototype.state.call(this,t,n),t<i.STATE.EXPLORER&&this.processed.clear("explorer"),this},t}(e)).OPTIONS=c(c({},e.OPTIONS),{enrichSpeech:"shallow",enableExplorer:!0,renderActions:w.expandable(c(c({},e.OPTIONS.renderActions),{explorable:[i.STATE.EXPLORER]})),a11y:{align:"top",backgroundColor:"Blue",backgroundOpacity:20,braille:!1,flame:!1,foregroundColor:"Black",foregroundOpacity:100,highlight:"None",hover:!1,infoPrefix:!1,infoRole:!1,infoType:!1,keyMagnifier:!1,locale:"en",magnification:"None",magnify:"400%",mouseMagnifier:!1,speech:!0,speechRules:"mathspeak-default",subtitles:!0,treeColoring:!1,viewBraille:!1}}),t}function C(e){return{speechRegion:new o.LiveRegion(e),brailleRegion:new o.LiveRegion(e),magnifier:new o.HoverRegion(e),tooltip1:new o.ToolTip(e),tooltip2:new o.ToolTip(e),tooltip3:new o.ToolTip(e)}}i.newState("EXPLORER",160),t.ExplorerMathItemMixin=j,t.ExplorerMathDocumentMixin=y,t.ExplorerHandler=function(e,t){return void 0===t&&(t=null),!e.documentClass.prototype.enrich&&t&&(e=x.EnrichHandler(e,t)),e.documentClass=y(e.documentClass),e},h={speech:function(e,t){for(s=[],n=2;n<arguments.length;n++)s[n-2]=arguments[n];var n,s,i,o=(i=l.SpeechExplorer).create.apply(i,a([e,e.explorerRegions.speechRegion,t],s)),r=v(e.options.a11y.speechRules.split("-"),2),c=r[0],d=r[1];return o.speechGenerator.setOptions({locale:e.options.a11y.locale,domain:c,style:d,modality:"speech",cache:!1}),o.showRegion="subtitles",o},braille:function(e,t){for(var n,o,i=[],s=2;s<arguments.length;s++)i[s-2]=arguments[s];return n=(o=l.SpeechExplorer).create.apply(o,a([e,e.explorerRegions.brailleRegion,t],i)),n.speechGenerator.setOptions({locale:"nemeth",domain:"default",style:"default",modality:"braille"}),n.showRegion="viewBraille",n},keyMagnifier:function(e,t){for(var s,o=[],n=2;n<arguments.length;n++)o[n-2]=arguments[n];return(s=l.Magnifier).create.apply(s,a([e,e.explorerRegions.magnifier,t],o))},mouseMagnifier:function(e,t){for(var s=[],n=2;n<arguments.length;n++)s[n-2]=arguments[n];return r.ContentHoverer.create(e,e.explorerRegions.magnifier,t,function(e){return e.hasAttribute("data-semantic-type")},function(e){return e})},hover:function(e,t){for(var s=[],n=2;n<arguments.length;n++)s[n-2]=arguments[n];return r.FlameHoverer.create(e,null,t)},infoType:function(e,t){for(var s=[],n=2;n<arguments.length;n++)s[n-2]=arguments[n];return r.ValueHoverer.create(e,e.explorerRegions.tooltip1,t,function(e){return e.hasAttribute("data-semantic-type")},function(e){return e.getAttribute("data-semantic-type")})},infoRole:function(e,t){for(var s=[],n=2;n<arguments.length;n++)s[n-2]=arguments[n];return r.ValueHoverer.create(e,e.explorerRegions.tooltip2,t,function(e){return e.hasAttribute("data-semantic-role")},function(e){return e.getAttribute("data-semantic-role")})},infoPrefix:function(e,t){for(var s=[],n=2;n<arguments.length;n++)s[n-2]=arguments[n];return r.ValueHoverer.create(e,e.explorerRegions.tooltip3,t,function(e){return e.hasAttribute("data-semantic-prefix")},function(e){return e.getAttribute("data-semantic-prefix")})},flame:function(e,t){for(var s=[],n=2;n<arguments.length;n++)s[n-2]=arguments[n];return m.FlameColorer.create(e,null,t)},treeColoring:function(e,t){for(var s=[],n=2;n<arguments.length;n++)s[n-2]=arguments[n];return m.TreeColorer.create.apply(m.TreeColorer,a([e,null,t],s))}};function _(e,t,n){switch(t){case"magnification":switch(n){case"None":e.options.a11y.magnification=n,e.options.a11y.keyMagnifier=!1,e.options.a11y.mouseMagnifier=!1;break;case"Keyboard":e.options.a11y.magnification=n,e.options.a11y.keyMagnifier=!0,e.options.a11y.mouseMagnifier=!1;break;case"Mouse":e.options.a11y.magnification=n,e.options.a11y.keyMagnifier=!1,e.options.a11y.mouseMagnifier=!0}break;case"highlight":switch(n){case"None":e.options.a11y.highlight=n,e.options.a11y.hover=!1,e.options.a11y.flame=!1;break;case"Hover":e.options.a11y.highlight=n,e.options.a11y.hover=!0,e.options.a11y.flame=!1;break;case"Flame":e.options.a11y.highlight=n,e.options.a11y.hover=!1,e.options.a11y.flame=!0}break;default:e.options.a11y[t]=n}}t.setA11yOptions=function(e,t){for(o in t)void 0!==e.options.a11y[o]&&_(e,o,t[o]);try{for(var o,a,r,i=s(e.math),n=i.next();!n.done;n=i.next())n.value.attachExplorers(e)}catch(e){a={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(a)throw a.error}}},t.setA11yOption=_,d={},f=function(e,t){if(o=sre.ClearspeakPreferences.getLocalePreferences()[t],!o)return r=e.findID("Accessibility","Speech","Clearspeak"),r&&r.disable(),null;!function(e,t){var n,o,i,a,r=e.pool.lookup("speechRules"),c=function(t){if(d[t])return"continue";e.factory.get("variable")(e.factory,{name:"csprf_"+t,setter:function(e){d[t]=e,r.setValue("clearspeak-"+sre.ClearspeakPreferences.addPreference(sre.Engine.DOMAIN_TO_STYLES.clearspeak,t,e))},getter:function(){return d[t]||"Auto"}},e.pool)};try{for(o=s(t),n=o.next();!n.done;n=o.next())c(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(a=o.return)&&a.call(o)}finally{if(i)throw i.error}}}(e,Object.keys(o));var n,o,i,a,r,c,l,u=[],h=function(e){u.push({title:e,values:o[e].map(function(t){return t.replace(RegExp("^"+e+"_"),"")}),variable:"csprf_"+e})};try{for(i=s(Object.getOwnPropertyNames(o)),n=i.next();!n.done;n=i.next())h(n.value)}catch(e){a={error:e}}finally{try{n&&!n.done&&(c=i.return)&&c.call(i)}finally{if(a)throw a.error}}return l=e.factory.get("selectionBox")(e.factory,{title:"Clearspeak Preferences",signature:"",order:"alphabetic",grid:"square",selections:u},e),{type:"command",id:"ClearspeakPreferences",content:"Select Preferences",action:function(){return l.post(0,0)}}},p.MJContextMenu.DynamicSubmenus.set("Clearspeak",function(e,t){var n=e.pool.lookup("locale").getValue(),s=f(e,n),o=sre.ClearspeakPreferences.smartPreferences(e.mathItem,n);return s&&o.splice(2,0,s),e.factory.get("subMenu")(e.factory,{items:o,id:"Clearspeak"},t)}),g={de:"German",en:"English",es:"Spanish",fr:"French"},p.MJContextMenu.DynamicSubmenus.set("A11yLanguage",function(e,t){i=[];try{for(var n,i,r,c,a=s(sre.Variables.LOCALES),o=a.next();!o.done;o=a.next())n=o.value,"nemeth"!==n&&i.push({type:"radio",id:n,content:g[n]||n,variable:"locale"})}catch(e){r={error:e}}finally{try{o&&!o.done&&(c=a.return)&&c.call(a)}finally{if(r)throw r.error}}return i.sort(function(e,t){return e.content.localeCompare(t.content,"en")}),e.factory.get("subMenu")(e.factory,{items:i,id:"Language"},t)})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isObject=MathJax._.components.global.isObject,t.combineConfig=MathJax._.components.global.combineConfig,t.combineDefaults=MathJax._.components.global.combineDefaults,t.combineWithMathJax=MathJax._.components.global.combineWithMathJax,t.MathJax=MathJax._.components.global.MathJax},function(e,t,n){"use strict";s=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=this&&this.__read||function(e,t){if(n="function"==typeof Symbol&&e[Symbol.iterator],!n)return e;var n,s,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(s=i.next()).done;)a.push(s.value)}catch(e){o={error:e}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},Object.defineProperty(t,"__esModule",{value:!0}),t.Magnifier=t.SpeechExplorer=t.AbstractKeyExplorer=void 0;var s,o,a,r,c,d=n(1),l=n(0),i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.events=e.prototype.Events.call(t).concat([["keydown",t.KeyDown.bind(t)],["focusin",t.FocusIn.bind(t)],["focusout",t.FocusOut.bind(t)]]),t.oldIndex=null,t}return s(t,e),t.prototype.FocusIn=function(){},t.prototype.FocusOut=function(){this.Stop()},t.prototype.Update=function(e){void 0===e&&(e=!1),(this.active||e)&&(this.highlighter.unhighlight(),this.highlighter.highlight(this.walker.getFocus(!0).getNodes()))},t.prototype.Attach=function(){e.prototype.Attach.call(this),this.oldIndex=this.node.tabIndex,this.node.tabIndex=1,this.node.setAttribute("role","application")},t.prototype.Detach=function(){this.node.tabIndex=this.oldIndex,this.oldIndex=null,this.node.removeAttribute("role"),e.prototype.Detach.call(this)},t.prototype.Stop=function(){this.active&&(this.highlighter.unhighlight(),this.walker.deactivate()),e.prototype.Stop.call(this)},t}(d.AbstractExplorer);t.AbstractKeyExplorer=i,r=function(e){function t(t,n,s,o){var i=e.call(this,t,n,s)||this;return i.document=t,i.region=n,i.node=s,i.mml=o,i.showRegion="subtitles",i.init=!1,i.restarted=!1,i.initWalker(),i}return s(t,e),t.prototype.Start=function(){var t=this,n=this.getOptions();if(!this.init)return this.init=!0,void l.sreReady().then(function(){SRE.engineSetup().locale!==n.locale&&SRE.setupEngine({locale:n.locale}),l.sreReady().then(function(){t.Speech(t.walker),t.Start()})}).catch(function(e){return console.log(e.message)});e.prototype.Start.call(this),this.speechGenerator=sre.SpeechGeneratorFactory.generator("Direct"),this.speechGenerator.setOptions(n),this.walker=sre.WalkerFactory.walker("table",this.node,this.speechGenerator,this.highlighter,this.mml),this.walker.activate(),this.Update(),this.document.options.a11y[this.showRegion]&&this.region.Show(this.node,this.highlighter),this.restarted=!0},t.prototype.Update=function(t){void 0===t&&(t=!1),e.prototype.Update.call(this,t),this.region.Update(this.walker.speech());var n=this.speechGenerator.getOptions();"speech"===n.modality&&(this.document.options.a11y.speechRules=n.domain+"-"+n.style)},t.prototype.Speech=function(e){e.speech(),this.node.setAttribute("hasspeech","true"),this.Update(),this.restarted&&this.document.options.a11y[this.showRegion]&&this.region.Show(this.node,this.highlighter)},t.prototype.KeyDown=function(e){var t=e.keyCode;return 27===t?(this.Stop(),void this.stopEvent(e)):this.active?(this.Move(t),void this.stopEvent(e)):void((32===t&&e.shiftKey||13===t)&&(this.Start(),this.stopEvent(e)))},t.prototype.Move=function(e){this.walker.move(e),this.Update()},t.prototype.initWalker=function(){this.speechGenerator=sre.SpeechGeneratorFactory.generator("Tree");var e=sre.WalkerFactory.walker("dummy",this.node,this.speechGenerator,this.highlighter,this.mml);this.walker=e},t.prototype.getOptions=function(){var e=this.speechGenerator.getOptions(),t=a(this.document.options.a11y.speechRules.split("-"),2),n=t[0],s=t[1];return"speech"!==e.modality||e.locale===this.document.options.a11y.locale&&e.domain===n&&e.style===s||(e.domain=n,e.style=s,e.locale=this.document.options.a11y.locale,this.walker.update(e)),e},t}(i),t.SpeechExplorer=r,c=function(e){function t(t,n,s,o){var i=e.call(this,t,n,s)||this;return i.document=t,i.region=n,i.node=s,i.mml=o,i.walker=sre.WalkerFactory.walker("table",i.node,sre.SpeechGeneratorFactory.generator("Dummy"),i.highlighter,i.mml),i}return s(t,e),t.prototype.Update=function(t){void 0===t&&(t=!1),e.prototype.Update.call(this,t),this.showFocus()},t.prototype.Start=function(){e.prototype.Start.call(this),this.region.Show(this.node,this.highlighter),this.walker.activate(),this.Update()},t.prototype.showFocus=function(){var e=this.walker.getFocus().getNodes()[0];this.region.Show(e,this.highlighter)},t.prototype.Move=function(e){this.walker.move(e)&&this.Update()},t.prototype.KeyDown=function(e){var t=e.keyCode;return 27===t?(this.Stop(),void this.stopEvent(e)):this.active&&13!==t?(this.Move(t),void this.stopEvent(e)):void((32===t&&e.shiftKey||13===t)&&(this.Start(),this.stopEvent(e)))},t}(i),t.Magnifier=c},function(e,t,n){"use strict";var s,i,a,r,c,l,d,u,o=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),h=this&&this.__read||function(e,t){if(n="function"==typeof Symbol&&e[Symbol.iterator],!n)return e;var n,s,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(s=i.next()).done;)a.push(s.value)}catch(e){o={error:e}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a};Object.defineProperty(t,"__esModule",{value:!0}),t.FlameHoverer=t.ContentHoverer=t.ValueHoverer=t.Hoverer=t.AbstractMouseExplorer=void 0,r=n(2),c=n(1),n(0),a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.events=e.prototype.Events.call(t).concat([["mouseover",t.MouseOver.bind(t)],["mouseout",t.MouseOut.bind(t)]]),t}return o(t,e),t.prototype.MouseOver=function(){this.Start()},t.prototype.MouseOut=function(){this.Stop()},t}(c.AbstractExplorer),t.AbstractMouseExplorer=a,s=function(e){function t(t,n,s,o,i){var a=e.call(this,t,n,s)||this;return a.document=t,a.region=n,a.node=s,a.nodeQuery=o,a.nodeAccess=i,a}return o(t,e),t.prototype.MouseOut=function(t){t.clientX===this.coord[0]&&t.clientY===this.coord[1]||(this.highlighter.unhighlight(),this.region.Hide(),e.prototype.MouseOut.call(this,t))},t.prototype.MouseOver=function(t){e.prototype.MouseOver.call(this,t),s=t.target,this.coord=[t.clientX,t.clientY];var s,o=h(this.getNode(s),2),n=o[0],i=o[1];n&&(this.highlighter.unhighlight(),this.highlighter.highlight([n]),this.region.Update(i),this.region.Show(n,this.highlighter))},t.prototype.getNode=function(e){for(var t,n=e;e&&e!==this.node;){if(this.nodeQuery(e))return[e,this.nodeAccess(e)];e=e.parentNode}for(e=n;e;){if(this.nodeQuery(e))return[e,this.nodeAccess(e)];t=e.childNodes[0],e=t&&"defs"===t.tagName?e.childNodes[1]:t}return[null,null]},t}(a),t.Hoverer=s,l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t}(s),t.ValueHoverer=l,d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t}(s),t.ContentHoverer=d,u=function(e){function t(t,n,s){var o=e.call(this,t,new r.DummyRegion(t),s,function(e){return o.highlighter.isMactionNode(e)},function(){})||this;return o.document=t,o.node=s,o}return o(t,e),t}(s),t.FlameHoverer=u},function(e,t,n){"use strict";var s,o,a,r,c,i=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0}),t.TreeColorer=t.FlameColorer=t.AbstractTreeExplorer=void 0,a=n(1),n(0),s=function(e){function t(t,n,s,o){var i=e.call(this,t,null,s)||this;return i.document=t,i.region=n,i.node=s,i.mml=o,i.stoppable=!1,i}return i(t,e),t.prototype.Attach=function(){e.prototype.Attach.call(this),this.Start()},t.prototype.Detach=function(){this.Stop(),e.prototype.Detach.call(this)},t}(a.AbstractExplorer),t.AbstractTreeExplorer=s,r=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.Start=function(){this.active||(this.active=!0,this.highlighter.highlightAll(this.node))},t.prototype.Stop=function(){this.active&&this.highlighter.unhighlightAll(this.node),this.active=!1},t}(s),t.FlameColorer=r,c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.Start=function(){if(!this.active){this.active=!0;var e=sre.SpeechGeneratorFactory.generator("Color");this.node.hasAttribute("hasforegroundcolor")||(e.generateSpeech(this.node,this.mml),this.node.setAttribute("hasforegroundcolor","true")),this.highlighter.colorizeAll(this.node)}},t.prototype.Stop=function(){this.active&&this.highlighter.uncolorizeAll(this.node),this.active=!1},t}(s),t.TreeColorer=c},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.protoItem=MathJax._.core.MathItem.protoItem,t.AbstractMathItem=MathJax._.core.MathItem.AbstractMathItem,t.STATE=MathJax._.core.MathItem.STATE,t.newState=MathJax._.core.MathItem.newState},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EnrichedMathItemMixin=MathJax._.a11y["semantic-enrich"].EnrichedMathItemMixin,t.EnrichedMathDocumentMixin=MathJax._.a11y["semantic-enrich"].EnrichedMathDocumentMixin,t.EnrichHandler=MathJax._.a11y["semantic-enrich"].EnrichHandler},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.APPEND=MathJax._.util.Options.APPEND,t.REMOVE=MathJax._.util.Options.REMOVE,t.Expandable=MathJax._.util.Options.Expandable,t.expandable=MathJax._.util.Options.expandable,t.makeArray=MathJax._.util.Options.makeArray,t.keys=MathJax._.util.Options.keys,t.copy=MathJax._.util.Options.copy,t.insert=MathJax._.util.Options.insert,t.defaultOptions=MathJax._.util.Options.defaultOptions,t.userOptions=MathJax._.util.Options.userOptions,t.selectOptions=MathJax._.util.Options.selectOptions,t.selectOptionsFromKeys=MathJax._.util.Options.selectOptionsFromKeys,t.separateOptions=MathJax._.util.Options.separateOptions},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DATAMJX=MathJax._.core.MmlTree.SerializedMmlVisitor.DATAMJX,t.toEntity=MathJax._.core.MmlTree.SerializedMmlVisitor.toEntity,t.SerializedMmlVisitor=MathJax._.core.MmlTree.SerializedMmlVisitor.SerializedMmlVisitor},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MJContextMenu=MathJax._.ui.menu.MJContextMenu.MJContextMenu},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CssStyles=MathJax._.util.StyleList.CssStyles},function(e,t,n){"use strict";n.r(t);var o=n(4),s=n(3),i=n(1),a=n(5),r=n(6),c=n(2),l=n(7),d=n(0);Object(o.combineWithMathJax)({_:{a11y:{explorer_ts:s,explorer:{Explorer:i,KeyExplorer:a,MouseExplorer:r,Region:c,TreeExplorer:l},sre:d}}}),MathJax.startup&&MathJax.startup.extendHandler(function(e){return Object(s.ExplorerHandler)(e)})}])