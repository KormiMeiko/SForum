!function(e){var n={};function t(s){if(n[s])return n[s].exports;var o=n[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:s})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o,s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(o in e)t.d(s,o,function(t){return e[t]}.bind(null,o));return s},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=15)}([function(e,t,n){"use strict";g=this&&this.__read||function(e,t){if(n="function"==typeof Symbol&&e[Symbol.iterator],!n)return e;var n,s,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(s=i.next()).done;)a.push(s.value)}catch(e){o={error:e}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},_=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],s=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&s>=e.length&&(e=void 0),{value:e&&e[s++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},Object.defineProperty(t,"__esModule",{value:!0}),t.clearDocument=t.saveDocument=t.makeBsprAttributes=t.removeProperty=t.getProperty=t.setProperty=t.balanceRules=void 0;var g,v,j,_,s=n(10),i=n(4),r=null,d=null,o=function(e){return d.root=e,r.outputJax.getBBox(d,r).w},l=function(e){for(var t=0;e&&!s.default.isType(e,"mtable");){if(s.default.isType(e,"text"))return null;s.default.isType(e,"mrow")?(e=e.childNodes[0],t=0):(e=e.parent.childNodes[t],t++)}return e},m=function(e,t){return e.childNodes["up"===t?1:0].childNodes[0].childNodes[0].childNodes[0].childNodes[0]},f=function(e,t){return e.childNodes[t].childNodes[0].childNodes[0]},p=function(e){return f(e,0)},w=function(e){return f(e,e.childNodes.length-1)},u=function(e,t){return e.childNodes["up"===t?0:1].childNodes[0].childNodes[0].childNodes[0]},C=function(e){for(;e&&!s.default.isType(e,"mtd");)e=e.parent;return e},O=function(e){return e.parent.childNodes[e.parent.childNodes.indexOf(e)+1]},y=function(e){for(;e&&null==t.getProperty(e,"inference");)e=e.parent;return e},c=function(e,t,n){if(void 0===n&&(n=!1),i=0,e===t)return i;if(e!==t.parent){var i,a,r,c=e.childNodes,l=n?c.length-1:0;s.default.isType(c[l],"mspace")&&(i+=o(c[l])),e=t.parent}return e===t?i:(a=e.childNodes,r=n?a.length-1:0,a[r]!==t&&(i+=o(a[r])),i)},h=function(e,n){void 0===n&&(n=!1);var s=l(e),i=u(s,t.getProperty(s,"inferenceRule"));return c(e,s,n)+(o(s)-o(i))/2},a=function(e,n,o,a){(void 0===a&&(a=!1),t.getProperty(n,"inferenceRule")||t.getProperty(n,"labelledRule"))&&(c=e.nodeFactory.create("node","mrow"),n.parent.replaceChild(c,n),c.setChildren([n]),x(n,c),n=c);var c,l=a?n.childNodes.length-1:0,r=n.childNodes[l];s.default.isType(r,"mspace")?s.default.setAttribute(r,"width",i.default.Em(i.default.dimen2em(s.default.getAttribute(r,"width"))+o)):(r=e.nodeFactory.create("node","mspace",[],{width:i.default.Em(o)}),a?n.appendChild(r):(r.parent=n,n.childNodes.unshift(r)))},x=function(e,n){["inference","proof","maxAdjust","labelledRule"].forEach(function(s){var o=t.getProperty(e,s);o!=null&&(t.setProperty(n,s,o),t.removeProperty(e,s))})},b=function(e,n,s,o,a){var r,c=e.nodeFactory.create("node","mspace",[],{width:i.default.Em(a)});"left"===o?(r=n.childNodes[s].childNodes[0],c.parent=r,r.childNodes.unshift(c)):n.childNodes[s].appendChild(c),t.setProperty(n.parent,"sequentAdjust_"+o,a)},E=function(e,n){for(s=n.pop();n.length;){var s,o=n.pop(),i=g(k(s,o),2),a=i[0],r=i[1];t.getProperty(s.parent,"axiom")&&(b(e,a<0?s:o,0,"left",Math.abs(a)),b(e,r<0?s:o,2,"right",Math.abs(r))),s=o}},k=function(e,t){var n=o(e.childNodes[2]),s=o(t.childNodes[2]);return[o(e.childNodes[0])-o(t.childNodes[0]),n-s]};t.balanceRules=function(e){d=new e.document.options.MathItem("",null,e.math.display),o=e.data,!function(e){if(i=e.nodeLists.sequent,i)for(var n,o,i,a,r,c=i.length-1,s=void 0;s=i[c];c--)if(t.getProperty(s,"sequentProcessed"))t.removeProperty(s,"sequentProcessed");else if(a=[],n=y(s),1===t.getProperty(n,"inference")){for(a.push(s);1===t.getProperty(n,"inference");)n=l(n),o=p(m(n,t.getProperty(n,"inferenceRule"))),r=t.getProperty(o,"inferenceRule")?u(o,t.getProperty(o,"inferenceRule")):o,t.getProperty(r,"sequent")&&(s=r.childNodes[0],a.push(s),t.setProperty(s,"sequentProcessed",!0)),n=o;E(e,a)}}(o),T=o.nodeLists.inference||[];try{for(f=_(T),i=f.next();!i.done;i=f.next()){var s,o,i,r,f,g,v,b,x,k,A,S,F,T,z,D,n=i.value,L=t.getProperty(n,"proof"),j=l(n),N=m(j,t.getProperty(j,"inferenceRule")),M=p(N);t.getProperty(M,"inference")&&(g=h(M),g&&(a(o,M,-g),F=c(n,j,!1),a(o,n,g-F))),b=w(N),null!=t.getProperty(b,"inference")&&(s=h(b,!0),a(o,b,-s,!0),A=c(n,j,!0),x=t.getProperty(n,"maxAdjust"),x!=null&&(s=Math.max(s,x)),v=void 0,!L&&(v=C(n))?(k=O(v),k?(z=o.nodeFactory.create("node","mspace",[],{width:s-A+"em"}),k.appendChild(z),n.removeProperty("maxAdjust")):(r=y(v),r&&(s=t.getProperty(r,"maxAdjust")?Math.max(t.getProperty(r,"maxAdjust"),s):s,t.setProperty(r,"maxAdjust",s)))):a(o,t.getProperty(n,"proof")?n:n.parent,s-A,!0))}}catch(e){S={error:e}}finally{try{i&&!i.done&&(D=f.return)&&D.call(f)}finally{if(S)throw S.error}}},j=((v={}).bspr_maxAdjust=!0,v),t.setProperty=function(e,t,n){s.default.setProperty(e,"bspr_"+t,n)},t.getProperty=function(e,t){return s.default.getProperty(e,"bspr_"+t)},t.removeProperty=function(e,t){e.removeProperty("bspr_"+t)},t.makeBsprAttributes=function(e){e.data.root.walkTree(function(e){var t=[];e.getPropertyNames().forEach(function(n){!j[n]&&n.match(RegExp("^bspr_"))&&t.push(n+":"+e.getProperty(n))}),t.length&&s.default.setAttribute(e,"semantics",t.join(";"))})},t.saveDocument=function(e){if(!("getBBox"in(r=e.document).outputJax))throw Error("The bussproofs extension requires an output jax with a getBBox() method")},t.clearDocument=function(){r=null}},function(e,t,n){"use strict";o=this&&this.__extends||(s=function(e,t){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),Object.defineProperty(t,"__esModule",{value:!0}),t.ProofTreeItem=void 0;var s,o,a=n(3),i=n(8),r=n(9),c=n(0),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.leftLabel=null,t.rigthLabel=null,t.innerStack=new r.default(t.factory,{},!0),t}return o(t,e),Object.defineProperty(t.prototype,"kind",{get:function(){return"proofTree"},enumerable:!1,configurable:!0}),t.prototype.checkItem=function(e){if(e.isKind("end")&&"prooftree"===e.getName()){var t=this.toMml();return c.setProperty(t,"proof",!0),[[this.factory.create("mml",t),e],!0]}if(e.isKind("stop"))throw new a.default("EnvMissingEnd","Missing \\end{%1}",this.getName());return this.innerStack.Push(e),i.BaseItem.fail},t.prototype.toMml=function(){var t,n=e.prototype.toMml.call(this),s=this.innerStack.Top();return s.isKind("start")&&!s.Size()?n:(this.innerStack.Push(this.factory.create("stop")),t=this.innerStack.Top().toMml(),this.create("node","mrow",[t,n],{}))},t}(i.BaseItem);t.ProofTreeItem=l},function(e,t,n){"use strict";a=this&&this.__read||function(e,t){if(n="function"==typeof Symbol&&e[Symbol.iterator],!n)return e;var n,s,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(s=i.next()).done;)a.push(s.value)}catch(e){o={error:e}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},l=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(a(arguments[t]));return e},Object.defineProperty(t,"__esModule",{value:!0});var a,l,s=n(3),r=n(12),c=n(4),o=n(0),i={Prooftree:function(e,t){return e.Push(t),e.itemFactory.create("proofTree").setProperties({name:t.getName(),line:"solid",currentLine:"solid",rootAtTop:!1})},Axiom:function(e,t){var n,i=e.stack.Top();if("proofTree"!==i.kind)throw new s.default("IllegalProofCommand","Proof commands only allowed in prooftree environment.");n=d(e,e.GetArgument(t)),o.setProperty(n,"axiom",!0),i.Push(n)}},d=function(e,t){if(n=c.default.internalMath(e,c.default.trimSpaces(t),0),!n[0].childNodes[0].childNodes.length)return e.create("node","mrow",[]);var n,s=e.create("node","mspace",[],{width:".5ex"}),o=e.create("node","mspace",[],{width:".5ex"});return e.create("node","mrow",l([s],n,[o]))};function u(e,t,n,s,i,a,r){var l,d,u,h,m=e.create("node","mtr",[e.create("node","mtd",[t],{})],{}),f=e.create("node","mtr",[e.create("node","mtd",n,{})],{}),c=e.create("node","mtable",r?[f,m]:[m,f],{align:"top 2",rowlines:a,framespacing:"0 0"});if(o.setProperty(c,"inferenceRule",r?"up":"down"),s&&(l=e.create("node","mpadded",[s],{height:"+.5em",width:"+.5em",voffset:"-.15em"}),o.setProperty(l,"prooflabel","left")),i&&(d=e.create("node","mpadded",[i],{height:"+.5em",width:"+.5em",voffset:"-.15em"}),o.setProperty(d,"prooflabel","right")),s&&i)u=[l,c,d],h="both";else if(s)u=[l,c],h="left";else{if(!i)return c;u=[c,d],h="right"}return c=e.create("node","mrow",u),o.setProperty(c,"labelledRule",h),c}function h(e,t){if("$"!==e.GetNext())throw new s.default("IllegalUseOfCommand","Use of %1 does not match it's definition.",t);if(e.i++,n=e.GetUpTo(t,"$"),-1===n.indexOf("\\fCenter"))throw new s.default("IllegalUseOfCommand","Missing \\fCenter in %1.",t);var n,i=a(n.split("\\fCenter"),2),d=i[0],u=i[1],h=new r.default(d,e.stack.env,e.configuration).mml(),m=new r.default(u,e.stack.env,e.configuration).mml(),f=new r.default("\\fCenter",e.stack.env,e.configuration).mml(),p=e.create("node","mtd",[h],{}),g=e.create("node","mtd",[f],{}),v=e.create("node","mtd",[m],{}),c=e.create("node","mtr",[p,g,v],{}),l=e.create("node","mtable",[c],{columnspacing:".5ex",columnalign:"center 2"});return o.setProperty(l,"sequent",!0),e.configuration.addNode("sequent",c),l}i.Inference=function(e,t,n){if(i=e.stack.Top(),"proofTree"!==i.kind)throw new s.default("IllegalProofCommand","Proof commands only allowed in prooftree environment.");if(i.Size()<n)throw new s.default("BadProofTree","Proof tree badly specified.");var c=i.getProperty("rootAtTop"),h=1!==n||i.Peek()[0].childNodes.length?n:0,a=[];do a.length&&a.unshift(e.create("node","mtd",[],{})),a.unshift(e.create("node","mtd",[i.Pop()],{rowalign:c?"top":"bottom"})),n--;while(n>0)var i,r,m=e.create("node","mtr",a,{}),f=e.create("node","mtable",[m],{framespacing:"0 0"}),p=d(e,e.GetArgument(t)),l=i.getProperty("currentLine");l!==i.getProperty("line")&&i.setProperty("currentLine",i.getProperty("line")),r=u(e,f,[p],i.getProperty("left"),i.getProperty("right"),l,c),i.setProperty("left",null),i.setProperty("right",null),o.setProperty(r,"inference",h),e.configuration.addNode("inference",r),i.Push(r)},i.Label=function(e,t,n){if(o=e.stack.Top(),"proofTree"!==o.kind)throw new s.default("IllegalProofCommand","Proof commands only allowed in prooftree environment.");var o,i=c.default.internalMath(e,e.GetArgument(t),0),a=i.length>1?e.create("node","mrow",i,{}):i[0];o.setProperty(n,a)},i.SetLine=function(e,t,n,o){var i=e.stack.Top();if("proofTree"!==i.kind)throw new s.default("IllegalProofCommand","Proof commands only allowed in prooftree environment.");i.setProperty("currentLine",n),o&&i.setProperty("line",n)},i.RootAtTop=function(e,t,n){var o=e.stack.Top();if("proofTree"!==o.kind)throw new s.default("IllegalProofCommand","Proof commands only allowed in prooftree environment.");o.setProperty("rootAtTop",n)},i.AxiomF=function(e,t){var n,i=e.stack.Top();if("proofTree"!==i.kind)throw new s.default("IllegalProofCommand","Proof commands only allowed in prooftree environment.");n=h(e,t),o.setProperty(n,"axiom",!0),i.Push(n)},i.FCenter=function(){},i.InferenceF=function(e,t,n){if(i=e.stack.Top(),"proofTree"!==i.kind)throw new s.default("IllegalProofCommand","Proof commands only allowed in prooftree environment.");if(i.Size()<n)throw new s.default("BadProofTree","Proof tree badly specified.");var c=i.getProperty("rootAtTop"),d=1!==n||i.Peek()[0].childNodes.length?n:0,a=[];do a.length&&a.unshift(e.create("node","mtd",[],{})),a.unshift(e.create("node","mtd",[i.Pop()],{rowalign:c?"top":"bottom"})),n--;while(n>0)var i,r,m=e.create("node","mtr",a,{}),f=e.create("node","mtable",[m],{framespacing:"0 0"}),p=h(e,t),l=i.getProperty("currentLine");l!==i.getProperty("line")&&i.setProperty("currentLine",i.getProperty("line")),r=u(e,f,[p],i.getProperty("left"),i.getProperty("right"),l,c),i.setProperty("left",null),i.setProperty("right",null),o.setProperty(r,"inference",d),e.configuration.addNode("inference",r),i.Push(r)},t.default=i},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=MathJax._.input.tex.TexError.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=MathJax._.input.tex.ParseUtil.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isObject=MathJax._.components.global.isObject,t.combineConfig=MathJax._.components.global.combineConfig,t.combineDefaults=MathJax._.components.global.combineDefaults,t.combineWithMathJax=MathJax._.components.global.combineWithMathJax,t.MathJax=MathJax._.components.global.MathJax},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BussproofsConfiguration=void 0;var o,a=n(7),i=n(1),s=n(0);n(11),t.BussproofsConfiguration=a.Configuration.create("bussproofs",{handler:{macro:["Bussproofs-macros"],environment:["Bussproofs-environments"]},items:(o={},o[i.ProofTreeItem.prototype.kind]=i.ProofTreeItem,o),preprocessors:[[s.saveDocument,1]],postprocessors:[[s.clearDocument,3],[s.makeBsprAttributes,2],[s.balanceRules,1]]})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Configuration=MathJax._.input.tex.Configuration.Configuration,t.ConfigurationHandler=MathJax._.input.tex.Configuration.ConfigurationHandler,t.ParserConfiguration=MathJax._.input.tex.Configuration.ParserConfiguration},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MmlStack=MathJax._.input.tex.StackItem.MmlStack,t.BaseItem=MathJax._.input.tex.StackItem.BaseItem},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=MathJax._.input.tex.Stack.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=MathJax._.input.tex.NodeUtil.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(2),i=n(13),o=n(14);new o.CommandMap("Bussproofs-macros",{AxiomC:"Axiom",UnaryInfC:["Inference",1],BinaryInfC:["Inference",2],TrinaryInfC:["Inference",3],QuaternaryInfC:["Inference",4],QuinaryInfC:["Inference",5],RightLabel:["Label","right"],LeftLabel:["Label","left"],AXC:"Axiom",UIC:["Inference",1],BIC:["Inference",2],TIC:["Inference",3],RL:["Label","right"],LL:["Label","left"],noLine:["SetLine","none",!1],singleLine:["SetLine","solid",!1],solidLine:["SetLine","solid",!1],dashedLine:["SetLine","dashed",!1],alwaysNoLine:["SetLine","none",!0],alwaysSingleLine:["SetLine","solid",!0],alwaysSolidLine:["SetLine","solid",!0],alwaysDashedLine:["SetLine","dashed",!0],rootAtTop:["RootAtTop",!0],alwaysRootAtTop:["RootAtTop",!0],rootAtBottom:["RootAtTop",!1],alwaysRootAtBottom:["RootAtTop",!1],fCenter:"FCenter",Axiom:"AxiomF",UnaryInf:["InferenceF",1],BinaryInf:["InferenceF",2],TrinaryInf:["InferenceF",3],QuaternaryInf:["InferenceF",4],QuinaryInf:["InferenceF",5]},s.default),new o.EnvironmentMap("Bussproofs-environments",i.default.environment,{prooftree:["Prooftree",null,!1]},s.default)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=MathJax._.input.tex.TexParser.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=MathJax._.input.tex.ParseMethods.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AbstractSymbolMap=MathJax._.input.tex.SymbolMap.AbstractSymbolMap,t.RegExpMap=MathJax._.input.tex.SymbolMap.RegExpMap,t.AbstractParseMap=MathJax._.input.tex.SymbolMap.AbstractParseMap,t.CharacterMap=MathJax._.input.tex.SymbolMap.CharacterMap,t.DelimiterMap=MathJax._.input.tex.SymbolMap.DelimiterMap,t.MacroMap=MathJax._.input.tex.SymbolMap.MacroMap,t.CommandMap=MathJax._.input.tex.SymbolMap.CommandMap,t.EnvironmentMap=MathJax._.input.tex.SymbolMap.EnvironmentMap},function(e,t,n){"use strict";n.r(t);var s=n(5),o=n(6),i=n(1),a=n(2),r=n(0);Object(s.combineWithMathJax)({_:{input:{tex:{bussproofs:{BussproofsConfiguration:o,BussproofsItems:i,BussproofsMethods:a,BussproofsUtil:r}}}}})}])