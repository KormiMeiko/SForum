!function(e){var n={};function t(s){if(n[s])return n[s].exports;var o=n[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:s})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o,s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(o in e)t.d(s,o,function(t){return e[t]}.bind(null,o));return s},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=18)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NEW_OPS=t.AmsMethods=void 0;var s=n(1),o=n(4),c=n(2),r=n(13),a=n(5),l=n(14),i=n(15),d=n(6);t.AmsMethods={},t.AmsMethods.AmsEqnArray=function(e,t,n,o,a,r,c){var l=e.GetBrackets("\\begin{"+t.getName()+"}"),d=i.default.EqnArray(e,t,n,o,a,r,c);return s.default.setArrayAlign(d,l)},t.AmsMethods.AlignAt=function(e,n,o,i){var r,c,u,h,m,l=n.getName(),d="",f=[];if(i||(h=e.GetBrackets("\\begin{"+l+"}")),(u=e.GetArgument("\\begin{"+l+"}")).match(/[^0-9]/))throw new a.default("PositiveIntegerArg","Argument to %1 must me a positive integer","\\begin{"+l+"}");for(r=parseInt(u,10);r>0;)d+="rl",f.push("0em 0em"),r--;return c=f.join(" "),i?t.AmsMethods.EqnArray(e,n,o,i,d,c):(m=t.AmsMethods.EqnArray(e,n,o,i,d,c),s.default.setArrayAlign(m,h))},t.AmsMethods.Multline=function(e,t,n){e.Push(t),s.default.checkEqnEnv(e);var o=e.itemFactory.create("multline",n,e.stack);return o.arraydef={displaystyle:!0,rowspacing:".5em",columnwidth:"100%",width:e.options.multlineWidth,side:e.options.tagSide,minlabelspacing:e.options.tagIndent},o},t.NEW_OPS="ams-declare-ops",t.AmsMethods.HandleDeclareOp=function(e,n){var o,a=e.GetStar()?"":`\\nolimits\\SkipLimits`,i=s.default.trimSpaces(e.GetArgument(n));"\\"===i.charAt(0)&&(i=i.substr(1)),o=e.GetArgument(n),o.match(/\\text/)||(o=o.replace(/\*/g,"\\text{*}").replace(/-/g,"\\text{-}")),e.configuration.handlers.retrieve(t.NEW_OPS).add(i,new l.Macro(i,t.AmsMethods.Macro,[`\\mathop{\\rm `+o+"}"+a]))},t.AmsMethods.HandleOperatorName=function(e,t){var o=e.GetStar()?"":`\\nolimits\\SkipLimits`,n=s.default.trimSpaces(e.GetArgument(t));n.match(/\\text/)||(n=n.replace(/\*/g,"\\text{*}").replace(/-/g,"\\text{-}")),e.string=`\\mathop{\\rm `+n+"}"+o+" "+e.string.slice(e.i),e.i=0},t.AmsMethods.SkipLimits=function(e){var t=e.GetNext(),n=e.i;"\\"===t&&++e.i&&"limits"!==e.GetCS()&&(e.i=n)},t.AmsMethods.MultiIntegral=function(e,t,n){var o,s=e.GetNext();"\\"===s&&(o=e.i,s=e.GetArgument(t),e.i=o,"\\limits"===s&&(n="\\idotsint"===t?"\\!\\!\\mathop{\\,\\,"+n+"}":"\\!\\!\\!\\mathop{\\,\\,\\,"+n+"}")),e.string=n+" "+e.string.slice(e.i),e.i=0},t.AmsMethods.xArrow=function(e,t,n,i,a){var u,h={width:"+"+s.default.Em((i+a)/18),lspace:s.default.Em(i/18)},m=e.GetBrackets(t),f=e.ParseArg(t),p=e.create("token","mo",{stretchy:!0,texClass:d.TEXCLASS.REL},String.fromCodePoint(n)),c=e.create("node","munderover",[p]),l=e.create("node","mpadded",[f],h);(o.default.setAttribute(l,"voffset",".15em"),o.default.setChild(c,c.over,l),m)&&(u=new r.default(m,e.stack.env,e.configuration).mml(),l=e.create("node","mpadded",[u],h),o.default.setAttribute(l,"voffset","-.24em"),o.default.setChild(c,c.under,l)),o.default.setProperty(c,"subsupOK",!0),e.Push(c)},t.AmsMethods.HandleShove=function(e,t,n){var s=e.stack.Top();if("multline"!==s.kind)throw new a.default("CommandOnlyAllowedInEnv","%1 only allowed in %2 environment",e.currentCS,"multline");if(s.Size())throw new a.default("CommandAtTheBeginingOfLine","%1 must come at the beginning of the line",e.currentCS);s.setProperty("shove",n)},t.AmsMethods.CFrac=function(e,t){var n=s.default.trimSpaces(e.GetBrackets(t,"")),l=e.GetArgument(t),d=e.GetArgument(t),u={l:c.TexConstant.Align.LEFT,r:c.TexConstant.Align.RIGHT,"":""},h=new r.default("\\strut\\textstyle{"+l+"}",e.stack.env,e.configuration).mml(),m=new r.default("\\strut\\textstyle{"+d+"}",e.stack.env,e.configuration).mml(),i=e.create("node","mfrac",[h,m]);if(null==(n=u[n]))throw new a.default("IllegalAlign","Illegal alignment specified in %1",e.currentCS);n&&o.default.setProperties(i,{numalign:n,denomalign:n}),e.Push(i)},t.AmsMethods.Genfrac=function(e,t,n,i,r,c){n==null&&(n=e.GetDelimiterArg(t)),i==null&&(i=e.GetDelimiterArg(t)),r==null&&(r=e.GetArgument(t)),c==null&&(c=s.default.trimSpaces(e.GetArgument(t)));var d,u,h=e.ParseArg(t),m=e.ParseArg(t),l=e.create("node","mfrac",[h,m]);if(""!==r&&o.default.setAttribute(l,"linethickness",r),(n||i)&&(o.default.setProperty(l,"withDelims",!0),l=s.default.fixedFence(e.configuration,n,l,i)),""!==c){if(d=parseInt(c,10),u=["D","T","S","SS"][d],u==null)throw new a.default("BadMathStyleFor","Bad math style for %1",e.currentCS);l=e.create("node","mstyle",[l]),"D"===u?o.default.setProperties(l,{displaystyle:!0,scriptlevel:0}):o.default.setProperties(l,{displaystyle:!1,scriptlevel:d-1})}e.Push(l)},t.AmsMethods.HandleTag=function(e,t){if(!e.tags.currentTag.taggable&&e.tags.env)throw new a.default("CommandNotAllowedInEnv","%1 not allowed in %2 environment",e.currentCS,e.tags.env);if(e.tags.currentTag.tag)throw new a.default("MultipleCommand","Multiple %1",e.currentCS);var n=e.GetStar(),o=s.default.trimSpaces(e.GetArgument(t));e.tags.tag(o,n)},t.AmsMethods.HandleNoTag=i.default.HandleNoTag,t.AmsMethods.HandleRef=i.default.HandleRef,t.AmsMethods.Macro=i.default.Macro,t.AmsMethods.Accent=i.default.Accent,t.AmsMethods.Tilde=i.default.Tilde,t.AmsMethods.Array=i.default.Array,t.AmsMethods.Spacer=i.default.Spacer,t.AmsMethods.NamedOp=i.default.NamedOp,t.AmsMethods.EqnArray=i.default.EqnArray},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=MathJax._.input.tex.ParseUtil.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TexConstant=MathJax._.input.tex.TexConstants.TexConstant},function(e,t,n){"use strict";a=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),Object.defineProperty(t,"__esModule",{value:!0}),t.MultlineItem=void 0;var o,a,r=n(11),c=n(1),s=n(4),l=n(5),i=n(2),d=function(e){function t(t){for(var s,o=[],n=1;n<arguments.length;n++)o[n-1]=arguments[n];return s=e.call(this,t)||this,s.factory.configuration.tags.start("multline",!0,o[0]),s}return a(t,e),Object.defineProperty(t.prototype,"kind",{get:function(){return"multline"},enumerable:!1,configurable:!0}),t.prototype.EndEntry=function(){this.table.length&&c.default.fixInitialMO(this.factory.configuration,this.nodes);var e=this.getProperty("shove"),t=this.create("node","mtd",this.nodes,e?{columnalign:e}:{});this.setProperty("shove",null),this.row.push(t),this.Clear()},t.prototype.EndRow=function(){if(1!==this.row.length)throw new l.default("MultlineRowsOneCol","The rows within the %1 environment must have exactly one column","multline");var e=this.create("node","mtr",this.row);this.table.push(e),this.row=[]},t.prototype.EndTable=function(){if(e.prototype.EndTable.call(this),this.table.length){var t,n,o,r=this.table.length-1,a=-1;s.default.getAttribute(s.default.getChildren(this.table[0])[0],"columnalign")||s.default.setAttribute(s.default.getChildren(this.table[0])[0],"columnalign",i.TexConstant.Align.LEFT),s.default.getAttribute(s.default.getChildren(this.table[r])[0],"columnalign")||s.default.setAttribute(s.default.getChildren(this.table[r])[0],"columnalign",i.TexConstant.Align.RIGHT),t=this.factory.configuration.tags.getTag(),t&&(a=this.arraydef.side===i.TexConstant.Align.LEFT?0:this.table.length-1,n=this.table[a],o=this.create("node","mlabeledtr",[t].concat(s.default.getChildren(n))),s.default.copyAttributes(n,o),this.table[a]=o)}this.factory.configuration.tags.end()},t}(r.ArrayItem);t.MultlineItem=d},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=MathJax._.input.tex.NodeUtil.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=MathJax._.input.tex.TexError.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TEXCLASS=MathJax._.core.MmlTree.MmlNode.TEXCLASS,t.TEXCLASSNAMES=MathJax._.core.MmlTree.MmlNode.TEXCLASSNAMES,t.indentAttributes=MathJax._.core.MmlTree.MmlNode.indentAttributes,t.AbstractMmlNode=MathJax._.core.MmlTree.MmlNode.AbstractMmlNode,t.AbstractMmlTokenNode=MathJax._.core.MmlTree.MmlNode.AbstractMmlTokenNode,t.AbstractMmlLayoutNode=MathJax._.core.MmlTree.MmlNode.AbstractMmlLayoutNode,t.AbstractMmlBaseNode=MathJax._.core.MmlTree.MmlNode.AbstractMmlBaseNode,t.AbstractMmlEmptyNode=MathJax._.core.MmlTree.MmlNode.AbstractMmlEmptyNode,t.TextNode=MathJax._.core.MmlTree.MmlNode.TextNode,t.XMLNode=MathJax._.core.MmlTree.MmlNode.XMLNode},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AbstractSymbolMap=MathJax._.input.tex.SymbolMap.AbstractSymbolMap,t.RegExpMap=MathJax._.input.tex.SymbolMap.RegExpMap,t.AbstractParseMap=MathJax._.input.tex.SymbolMap.AbstractParseMap,t.CharacterMap=MathJax._.input.tex.SymbolMap.CharacterMap,t.DelimiterMap=MathJax._.input.tex.SymbolMap.DelimiterMap,t.MacroMap=MathJax._.input.tex.SymbolMap.MacroMap,t.CommandMap=MathJax._.input.tex.SymbolMap.CommandMap,t.EnvironmentMap=MathJax._.input.tex.SymbolMap.EnvironmentMap},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isObject=MathJax._.components.global.isObject,t.combineConfig=MathJax._.components.global.combineConfig,t.combineDefaults=MathJax._.components.global.combineDefaults,t.combineWithMathJax=MathJax._.components.global.combineWithMathJax,t.MathJax=MathJax._.components.global.MathJax},function(e,t,n){"use strict";a=this&&this.__extends||(s=function(e,t){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),Object.defineProperty(t,"__esModule",{value:!0}),t.AmsConfiguration=t.AmsTags=void 0;var s,o,i,a,r,c=n(10),l=n(3),u=n(12),d=n(0);n(16),r=n(7),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t}(u.AbstractTags),t.AmsTags=i,t.AmsConfiguration=c.Configuration.create("ams",{handler:{delimiter:["AMSsymbols-delimiter","AMSmath-delimiter"],macro:["AMSsymbols-mathchar0mi","AMSsymbols-mathchar0m0","AMSsymbols-delimiter","AMSsymbols-macros","AMSmath-mathchar0mo","AMSmath-macros","AMSmath-delimiter"],environment:["AMSmath-environment"]},items:(o={},o[l.MultlineItem.prototype.kind]=l.MultlineItem,o),tags:{ams:i},init:function(e){new r.CommandMap(d.NEW_OPS,{},{}),e.append(c.Configuration.local({handler:{macro:[d.NEW_OPS]},priority:-1}))}})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Configuration=MathJax._.input.tex.Configuration.Configuration,t.ConfigurationHandler=MathJax._.input.tex.Configuration.ConfigurationHandler,t.ParserConfiguration=MathJax._.input.tex.Configuration.ParserConfiguration},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StartItem=MathJax._.input.tex.base.BaseItems.StartItem,t.StopItem=MathJax._.input.tex.base.BaseItems.StopItem,t.OpenItem=MathJax._.input.tex.base.BaseItems.OpenItem,t.CloseItem=MathJax._.input.tex.base.BaseItems.CloseItem,t.PrimeItem=MathJax._.input.tex.base.BaseItems.PrimeItem,t.SubsupItem=MathJax._.input.tex.base.BaseItems.SubsupItem,t.OverItem=MathJax._.input.tex.base.BaseItems.OverItem,t.LeftItem=MathJax._.input.tex.base.BaseItems.LeftItem,t.RightItem=MathJax._.input.tex.base.BaseItems.RightItem,t.BeginItem=MathJax._.input.tex.base.BaseItems.BeginItem,t.EndItem=MathJax._.input.tex.base.BaseItems.EndItem,t.StyleItem=MathJax._.input.tex.base.BaseItems.StyleItem,t.PositionItem=MathJax._.input.tex.base.BaseItems.PositionItem,t.CellItem=MathJax._.input.tex.base.BaseItems.CellItem,t.MmlItem=MathJax._.input.tex.base.BaseItems.MmlItem,t.FnItem=MathJax._.input.tex.base.BaseItems.FnItem,t.NotItem=MathJax._.input.tex.base.BaseItems.NotItem,t.DotsItem=MathJax._.input.tex.base.BaseItems.DotsItem,t.ArrayItem=MathJax._.input.tex.base.BaseItems.ArrayItem,t.EqnArrayItem=MathJax._.input.tex.base.BaseItems.EqnArrayItem,t.EquationItem=MathJax._.input.tex.base.BaseItems.EquationItem},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Label=MathJax._.input.tex.Tags.Label,t.TagInfo=MathJax._.input.tex.Tags.TagInfo,t.AbstractTags=MathJax._.input.tex.Tags.AbstractTags,t.NoTags=MathJax._.input.tex.Tags.NoTags,t.AllTags=MathJax._.input.tex.Tags.AllTags,t.TagsFactory=MathJax._.input.tex.Tags.TagsFactory},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=MathJax._.input.tex.TexParser.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Symbol=MathJax._.input.tex.Symbol.Symbol,t.Macro=MathJax._.input.tex.Symbol.Macro},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=MathJax._.input.tex.base.BaseMethods.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),o=n(7),s=n(2),i=n(17),l=n(1),r=n(6),a=function(e){for(var n=[],t=0,s=e.length;t<s;t++)n[t]=l.default.Em(e[t]);return n.join(" ")};new o.CharacterMap("AMSmath-mathchar0mo",i.default.mathchar0mo,{iiiint:["⨌",{texClass:r.TEXCLASS.OP}]}),new o.CommandMap("AMSmath-macros",{mathring:["Accent","02DA"],nobreakspace:"Tilde",negmedspace:["Spacer",s.TexConstant.Length.NEGATIVEMEDIUMMATHSPACE],negthickspace:["Spacer",s.TexConstant.Length.NEGATIVETHICKMATHSPACE],idotsint:["MultiIntegral","\\int\\cdots\\int"],dddot:["Accent","20DB"],ddddot:["Accent","20DC"],sideset:["Macro",`\\mathop{\\mathop{\\rlap{\\phantom{#3}}}\\nolimits#1\\!\\mathop{#3}\\nolimits#2}`,3],boxed:["Macro","\\fbox{$\\displaystyle{#1}$}",1],tag:"HandleTag",notag:"HandleNoTag",eqref:["HandleRef",!0],substack:["Macro","\\begin{subarray}{c}#1\\end{subarray}",1],injlim:["NamedOp","inj&thinsp;lim"],projlim:["NamedOp","proj&thinsp;lim"],varliminf:["Macro","\\mathop{\\underline{\\mmlToken{mi}{lim}}}"],varlimsup:["Macro","\\mathop{\\overline{\\mmlToken{mi}{lim}}}"],varinjlim:["Macro","\\mathop{\\underrightarrow{\\mmlToken{mi}{lim}}}"],varprojlim:["Macro","\\mathop{\\underleftarrow{\\mmlToken{mi}{lim}}}"],DeclareMathOperator:"HandleDeclareOp",operatorname:"HandleOperatorName",SkipLimits:"SkipLimits",genfrac:"Genfrac",frac:["Genfrac","","","",""],tfrac:["Genfrac","","","","1"],dfrac:["Genfrac","","","","0"],binom:["Genfrac","(",")","0",""],tbinom:["Genfrac","(",")","0","1"],dbinom:["Genfrac","(",")","0","0"],cfrac:"CFrac",shoveleft:["HandleShove",s.TexConstant.Align.LEFT],shoveright:["HandleShove",s.TexConstant.Align.RIGHT],xrightarrow:["xArrow",8594,5,6],xleftarrow:["xArrow",8592,7,3]},c.AmsMethods),new o.EnvironmentMap("AMSmath-environment",i.default.environment,{"eqnarray*":["EqnArray",null,!1,!0,"rcl","0 "+s.TexConstant.Length.THICKMATHSPACE,".5em"],align:["EqnArray",null,!0,!0,"rlrlrlrlrlrl",a([0,2,0,2,0,2,0,2,0,2,0])],"align*":["EqnArray",null,!1,!0,"rlrlrlrlrlrl",a([0,2,0,2,0,2,0,2,0,2,0])],multline:["Multline",null,!0],"multline*":["Multline",null,!1],split:["EqnArray",null,!1,!1,"rl",a([0])],gather:["EqnArray",null,!0,!0,"c"],"gather*":["EqnArray",null,!1,!0,"c"],alignat:["AlignAt",null,!0,!0],"alignat*":["AlignAt",null,!1,!0],alignedat:["AlignAt",null,!1,!1],aligned:["AmsEqnArray",null,null,null,"rlrlrlrlrlrl",a([0,2,0,2,0,2,0,2,0,2,0]),".5em","D"],gathered:["AmsEqnArray",null,null,null,"c",null,".5em","D"],subarray:["Array",null,null,null,null,a([0]),"0.1em","S",1],smallmatrix:["Array",null,null,null,"c",a([1/3]),".2em","S",1],matrix:["Array",null,null,null,"c"],pmatrix:["Array",null,"(",")","c"],bmatrix:["Array",null,"[","]","c"],Bmatrix:["Array",null,"\\{","\\}","c"],vmatrix:["Array",null,"\\vert","\\vert","c"],Vmatrix:["Array",null,"\\Vert","\\Vert","c"],cases:["Array",null,"\\{",".","ll",null,".2em","T"]},c.AmsMethods),new o.DelimiterMap("AMSmath-delimiter",i.default.delimiter,{"\\lvert":["|",{texClass:r.TEXCLASS.OPEN}],"\\rvert":["|",{texClass:r.TEXCLASS.CLOSE}],"\\lVert":["‖",{texClass:r.TEXCLASS.OPEN}],"\\rVert":["‖",{texClass:r.TEXCLASS.CLOSE}]}),new o.CharacterMap("AMSsymbols-mathchar0mi",i.default.mathchar0mi,{digamma:"ϝ",varkappa:"ϰ",varGamma:["Γ",{mathvariant:s.TexConstant.Variant.ITALIC}],varDelta:["Δ",{mathvariant:s.TexConstant.Variant.ITALIC}],varTheta:["Θ",{mathvariant:s.TexConstant.Variant.ITALIC}],varLambda:["Λ",{mathvariant:s.TexConstant.Variant.ITALIC}],varXi:["Ξ",{mathvariant:s.TexConstant.Variant.ITALIC}],varPi:["Π",{mathvariant:s.TexConstant.Variant.ITALIC}],varSigma:["Σ",{mathvariant:s.TexConstant.Variant.ITALIC}],varUpsilon:["Υ",{mathvariant:s.TexConstant.Variant.ITALIC}],varPhi:["Φ",{mathvariant:s.TexConstant.Variant.ITALIC}],varPsi:["Ψ",{mathvariant:s.TexConstant.Variant.ITALIC}],varOmega:["Ω",{mathvariant:s.TexConstant.Variant.ITALIC}],beth:"ℶ",gimel:"ℷ",daleth:"ℸ",backprime:["‵",{variantForm:!0}],hslash:"ℏ",varnothing:["∅",{variantForm:!0}],blacktriangle:"▴",triangledown:["▽",{variantForm:!0}],blacktriangledown:"▾",square:"◻",Box:"◻",blacksquare:"◼",lozenge:"◊",Diamond:"◊",blacklozenge:"⧫",circledS:["Ⓢ",{mathvariant:s.TexConstant.Variant.NORMAL}],bigstar:"★",sphericalangle:"∢",measuredangle:"∡",nexists:"∄",complement:"∁",mho:"℧",eth:["\xf0",{mathvariant:s.TexConstant.Variant.NORMAL}],Finv:"Ⅎ",diagup:"╱",Game:"⅁",diagdown:"╲",Bbbk:["k",{mathvariant:s.TexConstant.Variant.DOUBLESTRUCK}],yen:"\xa5",circledR:"\xae",checkmark:"✓",maltese:"✠"}),new o.CharacterMap("AMSsymbols-mathchar0m0",i.default.mathchar0mo,{dotplus:"∔",ltimes:"⋉",smallsetminus:["∖",{variantForm:!0}],rtimes:"⋊",Cap:"⋒",doublecap:"⋒",leftthreetimes:"⋋",Cup:"⋓",doublecup:"⋓",rightthreetimes:"⋌",barwedge:"⊼",curlywedge:"⋏",veebar:"⊻",curlyvee:"⋎",doublebarwedge:"⩞",boxminus:"⊟",circleddash:"⊝",boxtimes:"⊠",circledast:"⊛",boxdot:"⊡",circledcirc:"⊚",boxplus:"⊞",centerdot:["⋅",{variantForm:!0}],divideontimes:"⋇",intercal:"⊺",leqq:"≦",geqq:"≧",leqslant:"⩽",geqslant:"⩾",eqslantless:"⪕",eqslantgtr:"⪖",lesssim:"≲",gtrsim:"≳",lessapprox:"⪅",gtrapprox:"⪆",approxeq:"≊",lessdot:"⋖",gtrdot:"⋗",lll:"⋘",llless:"⋘",ggg:"⋙",gggtr:"⋙",lessgtr:"≶",gtrless:"≷",lesseqgtr:"⋚",gtreqless:"⋛",lesseqqgtr:"⪋",gtreqqless:"⪌",doteqdot:"≑",Doteq:"≑",eqcirc:"≖",risingdotseq:"≓",circeq:"≗",fallingdotseq:"≒",triangleq:"≜",backsim:"∽",thicksim:["∼",{variantForm:!0}],backsimeq:"⋍",thickapprox:["≈",{variantForm:!0}],subseteqq:"⫅",supseteqq:"⫆",Subset:"⋐",Supset:"⋑",sqsubset:"⊏",sqsupset:"⊐",preccurlyeq:"≼",succcurlyeq:"≽",curlyeqprec:"⋞",curlyeqsucc:"⋟",precsim:"≾",succsim:"≿",precapprox:"⪷",succapprox:"⪸",vartriangleleft:"⊲",lhd:"⊲",vartriangleright:"⊳",rhd:"⊳",trianglelefteq:"⊴",unlhd:"⊴",trianglerighteq:"⊵",unrhd:"⊵",vDash:["⊨",{variantForm:!0}],Vdash:"⊩",Vvdash:"⊪",smallsmile:["⌣",{variantForm:!0}],shortmid:["∣",{variantForm:!0}],smallfrown:["⌢",{variantForm:!0}],shortparallel:["∥",{variantForm:!0}],bumpeq:"≏",between:"≬",Bumpeq:"≎",pitchfork:"⋔",varpropto:["∝",{variantForm:!0}],backepsilon:"∍",blacktriangleleft:"◂",blacktriangleright:"▸",therefore:"∴",because:"∵",eqsim:"≂",vartriangle:["△",{variantForm:!0}],Join:"⋈",nless:"≮",ngtr:"≯",nleq:"≰",ngeq:"≱",nleqslant:["⪇",{variantForm:!0}],ngeqslant:["⪈",{variantForm:!0}],nleqq:["≰",{variantForm:!0}],ngeqq:["≱",{variantForm:!0}],lneq:"⪇",gneq:"⪈",lneqq:"≨",gneqq:"≩",lvertneqq:["≨",{variantForm:!0}],gvertneqq:["≩",{variantForm:!0}],lnsim:"⋦",gnsim:"⋧",lnapprox:"⪉",gnapprox:"⪊",nprec:"⊀",nsucc:"⊁",npreceq:["⋠",{variantForm:!0}],nsucceq:["⋡",{variantForm:!0}],precneqq:"⪵",succneqq:"⪶",precnsim:"⋨",succnsim:"⋩",precnapprox:"⪹",succnapprox:"⪺",nsim:"≁",ncong:"≇",nshortmid:["∤",{variantForm:!0}],nshortparallel:["∦",{variantForm:!0}],nmid:"∤",nparallel:"∦",nvdash:"⊬",nvDash:"⊭",nVdash:"⊮",nVDash:"⊯",ntriangleleft:"⋪",ntriangleright:"⋫",ntrianglelefteq:"⋬",ntrianglerighteq:"⋭",nsubseteq:"⊈",nsupseteq:"⊉",nsubseteqq:["⊈",{variantForm:!0}],nsupseteqq:["⊉",{variantForm:!0}],subsetneq:"⊊",supsetneq:"⊋",varsubsetneq:["⊊",{variantForm:!0}],varsupsetneq:["⊋",{variantForm:!0}],subsetneqq:"⫋",supsetneqq:"⫌",varsubsetneqq:["⫋",{variantForm:!0}],varsupsetneqq:["⫌",{variantForm:!0}],leftleftarrows:"⇇",rightrightarrows:"⇉",leftrightarrows:"⇆",rightleftarrows:"⇄",Lleftarrow:"⇚",Rrightarrow:"⇛",twoheadleftarrow:"↞",twoheadrightarrow:"↠",leftarrowtail:"↢",rightarrowtail:"↣",looparrowleft:"↫",looparrowright:"↬",leftrightharpoons:"⇋",rightleftharpoons:["⇌",{variantForm:!0}],curvearrowleft:"↶",curvearrowright:"↷",circlearrowleft:"↺",circlearrowright:"↻",Lsh:"↰",Rsh:"↱",upuparrows:"⇈",downdownarrows:"⇊",upharpoonleft:"↿",upharpoonright:"↾",downharpoonleft:"⇃",restriction:"↾",multimap:"⊸",downharpoonright:"⇂",leftrightsquigarrow:"↭",rightsquigarrow:"⇝",leadsto:"⇝",dashrightarrow:"⇢",dashleftarrow:"⇠",nleftarrow:"↚",nrightarrow:"↛",nLeftarrow:"⇍",nRightarrow:"⇏",nleftrightarrow:"↮",nLeftrightarrow:"⇎"}),new o.DelimiterMap("AMSsymbols-delimiter",i.default.delimiter,{"\\ulcorner":"⌜","\\urcorner":"⌝","\\llcorner":"⌞","\\lrcorner":"⌟"}),new o.CommandMap("AMSsymbols-macros",{implies:["Macro","\\;\\Longrightarrow\\;"],impliedby:["Macro","\\;\\Longleftarrow\\;"]},c.AmsMethods)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=MathJax._.input.tex.ParseMethods.default},function(e,t,n){"use strict";n.r(t);var s=n(8),o=n(9),i=n(3),a=n(0);Object(s.combineWithMathJax)({_:{input:{tex:{ams:{AmsConfiguration:o,AmsItems:i,AmsMethods:a}}}}})}])