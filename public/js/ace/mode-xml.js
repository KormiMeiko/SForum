ace.define("ace/mode/xml_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t){"use strict";var o=e("../lib/oop"),s=e("./text_highlight_rules").TextHighlightRules,n=function(){var e="[_:a-zA-Z\xc0-￿][-_:.a-zA-Z0-9\xc0-￿]*";this.$rules={start:[{token:"string.cdata.xml",regex:"<\\!\\[CDATA\\[",next:"cdata"},{token:["punctuation.instruction.xml","keyword.instruction.xml"],regex:"(<\\?)("+e+")",next:"processing_instruction"},{token:"comment.start.xml",regex:"<\\!--",next:"comment"},{token:["xml-pe.doctype.xml","xml-pe.doctype.xml"],regex:"(<\\!)(DOCTYPE)(?=[\\s])",next:"doctype",caseInsensitive:!0},{include:"tag"},{token:"text.end-tag-open.xml",regex:"</"},{token:"text.tag-open.xml",regex:"<"},{include:"reference"},{defaultToken:"text.xml"}],processing_instruction:[{token:"entity.other.attribute-name.decl-attribute-name.xml",regex:e},{token:"keyword.operator.decl-attribute-equals.xml",regex:"="},{include:"whitespace"},{include:"string"},{token:"punctuation.xml-decl.xml",regex:"\\?>",next:"start"}],doctype:[{include:"whitespace"},{include:"string"},{token:"xml-pe.doctype.xml",regex:">",next:"start"},{token:"xml-pe.xml",regex:"[-_a-zA-Z0-9:]+"},{token:"punctuation.int-subset",regex:"\\[",push:"int_subset"}],int_subset:[{token:"text.xml",regex:"\\s+"},{token:"punctuation.int-subset.xml",regex:"]",next:"pop"},{token:["punctuation.markup-decl.xml","keyword.markup-decl.xml"],regex:"(<\\!)("+e+")",push:[{token:"text",regex:"\\s+"},{token:"punctuation.markup-decl.xml",regex:">",next:"pop"},{include:"string"}]}],cdata:[{token:"string.cdata.xml",regex:"\\]\\]>",next:"start"},{token:"text.xml",regex:"\\s+"},{token:"text.xml",regex:"(?:[^\\]]|\\](?!\\]>))+"}],comment:[{token:"comment.end.xml",regex:"-->",next:"start"},{defaultToken:"comment.xml"}],reference:[{token:"constant.language.escape.reference.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}],attr_reference:[{token:"constant.language.escape.reference.attribute-value.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}],tag:[{token:["meta.tag.punctuation.tag-open.xml","meta.tag.punctuation.end-tag-open.xml","meta.tag.tag-name.xml"],regex:"(?:(<)|(</))((?:"+e+":)?"+e+")",next:[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:"start"}]}],tag_whitespace:[{token:"text.tag-whitespace.xml",regex:"\\s+"}],whitespace:[{token:"text.whitespace.xml",regex:"\\s+"}],string:[{token:"string.xml",regex:"'",push:[{token:"string.xml",regex:"'",next:"pop"},{defaultToken:"string.xml"}]},{token:"string.xml",regex:'"',push:[{token:"string.xml",regex:'"',next:"pop"},{defaultToken:"string.xml"}]}],attributes:[{token:"entity.other.attribute-name.xml",regex:e},{token:"keyword.operator.attribute-equals.xml",regex:"="},{include:"tag_whitespace"},{include:"attribute_value"}],attribute_value:[{token:"string.attribute-value.xml",regex:"'",push:[{token:"string.attribute-value.xml",regex:"'",next:"pop"},{include:"attr_reference"},{defaultToken:"string.attribute-value.xml"}]},{token:"string.attribute-value.xml",regex:'"',push:[{token:"string.attribute-value.xml",regex:'"',next:"pop"},{include:"attr_reference"},{defaultToken:"string.attribute-value.xml"}]}]},this.constructor===n&&this.normalizeRules()};(function(){this.embedTagRules=function(e,t,n){this.$rules.tag.unshift({token:["meta.tag.punctuation.tag-open.xml","meta.tag."+n+".tag-name.xml"],regex:"(<)("+n+"(?=\\s|>|$))",next:[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:t+"start"}]}),this.$rules[n+"-end"]=[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:"start",onMatch:function(e,t,n){return n.splice(0),this.token}}],this.embedRules(e,t,[{token:["meta.tag.punctuation.end-tag-open.xml","meta.tag."+n+".tag-name.xml"],regex:"(</)("+n+"(?=\\s|>|$))",next:n+"-end"},{token:"string.cdata.xml",regex:"<\\!\\[CDATA\\["},{token:"string.cdata.xml",regex:"\\]\\]>"}])}}).call(s.prototype),o.inherits(n,s),t.XmlHighlightRules=n}),ace.define("ace/mode/behaviour/xml",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"],function(e,t){"use strict";var s,i=e("../../lib/oop"),a=e("../behaviour").Behaviour,o=e("../../token_iterator").TokenIterator,r=e("../../lib/lang");function n(e,t){return e&&e.type.lastIndexOf(t+".xml")>-1}s=function(){this.add("string_dquotes","insertion",function(e,t,s,i,a){if(a=='"'||a=="'"){var r,c,l,u,m,f,d=a,h=i.doc.getTextRange(s.getSelectionRange());if(h!==""&&h!=="'"&&h!='"'&&s.getWrapBehavioursEnabled())return{text:d+h+d,selection:!1};if(c=s.getCursorPosition(),f=i.doc.getLine(c.row),l=f.substring(c.column,c.column+1),u=new o(i,c.row,c.column),r=u.getCurrentToken(),l==d&&(n(r,"attribute-value")||n(r,"string")))return{text:"",selection:[1,1]};if(r||(r=u.stepBackward()),!r)return;for(;n(r,"tag-whitespace")||n(r,"whitespace");)r=u.stepBackward();if(m=!l||l.match(/\s/),n(r,"attribute-equals")&&(m||l==">")||n(r,"decl-attribute-equals")&&(m||l=="?"))return{text:d+d,selection:[1,1]}}}),this.add("string_dquotes","deletion",function(e,t,n,s,o){var a,r,i=s.doc.getTextRange(o);if(!o.isMultiLine()&&(i=='"'||i=="'")&&(a=s.doc.getLine(o.start.row),r=a.substring(o.start.column+1,o.start.column+2),r==i))return o.end.column++,o}),this.add("autoclosing","insertion",function(e,t,s,i,a){if(a==">"){var d,u,h,m,f,l=s.getSelectionRange().start,c=new o(i,l.row,l.column),r=c.getCurrentToken()||c.stepBackward();if(!r||!(n(r,"tag-name")||n(r,"tag-whitespace")||n(r,"attribute-name")||n(r,"attribute-equals")||n(r,"attribute-value")))return;if(n(r,"reference.attribute-value"))return;if(n(r,"attribute-value")){if(u=c.getCurrentTokenColumn()+r.value.length,l.column<u)return;if(l.column==u){if(h=c.stepForward(),h&&n(h,"attribute-value"))return;c.stepBackward()}}if(/^\s*>/.test(i.getLine(l.row).slice(l.column)))return;for(;!n(r,"tag-name");)if(r=c.stepBackward(),r.value=="<"){r=c.stepForward();break}if(m=c.getCurrentTokenRow(),f=c.getCurrentTokenColumn(),n(c.stepBackward(),"end-tag-open"))return;if(d=r.value,m==l.row&&(d=d.substring(0,l.column-f)),this.voidElements.hasOwnProperty(d.toLowerCase()))return;return{text:"></"+d+">",selection:[1,1]}}}),this.add("autoindent","insertion",function(e,t,n,s,i){if(i==`
`){var r,d,u,h,m,c=n.getCursorPosition(),f=s.getLine(c.row),l=new o(s,c.row,c.column),a=l.getCurrentToken();if(a&&a.type.indexOf("tag-close")!==-1){if(a.value=="/>")return;for(;a&&a.type.indexOf("tag-name")===-1;)a=l.stepBackward();if(!a)return;if(h=a.value,m=l.getCurrentTokenRow(),a=l.stepBackward(),!a||a.type.indexOf("end-tag")!==-1)return;if(this.voidElements&&!this.voidElements[h])return d=s.getTokenAt(c.row,c.column+1),f=s.getLine(m),u=this.$getIndent(f),r=u+s.getTabString(),d&&d.value==="</"?{text:`
`+r+`
`+u,selection:[1,r.length,1,r.length]}:{text:`
`+r}}}})},i.inherits(s,a),t.XmlBehaviour=s}),ace.define("ace/mode/folding/xml",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/range","ace/mode/folding/fold_mode","ace/token_iterator"],function(e,t){"use strict";var s,i=e("../../lib/oop"),l=e("../../lib/lang"),o=e("../../range").Range,a=e("./fold_mode").FoldMode,r=e("../../token_iterator").TokenIterator,c=t.FoldMode=function(e,t){a.call(this),this.voidElements=e||{},this.optionalEndTags=i.mixin({},this.voidElements),t&&i.mixin(this.optionalEndTags,t)};i.inherits(c,a),s=function(){this.tagName="",this.closing=!1,this.selfClosing=!1,this.start={row:0,column:0},this.end={row:0,column:0}};function n(e,t){return e.type.lastIndexOf(t+".xml")>-1}(function(){this.getFoldWidget=function(e,t,n){var s=this._getFirstTagInLine(e,n);return s?s.closing||!s.tagName&&s.selfClosing?t=="markbeginend"?"end":"":!s.tagName||s.selfClosing||this.voidElements.hasOwnProperty(s.tagName.toLowerCase())?"":this._findEndTagInLine(e,n,s.tagName,s.end.column)?"":"start":this.getCommentFoldWidget(e,n)},this.getCommentFoldWidget=function(e,t){return/comment/.test(e.getState(t))&&/<!-/.test(e.getLine(t))?"start":""},this._getFirstTagInLine=function(e,t){for(var o,r=e.getTokens(t),i=new s,a=0;a<r.length;a++){if(o=r[a],n(o,"tag-open")){if(i.end.column=i.start.column+o.value.length,i.closing=n(o,"end-tag-open"),o=r[++a],!o)return null;i.tagName=o.value,i.end.column+=o.value.length;for(a++;a<r.length;a++)if(o=r[a],i.end.column+=o.value.length,n(o,"tag-close")){i.selfClosing=o.value=="/>";break}return i}if(n(o,"tag-close"))return i.selfClosing=o.value=="/>",i;i.start.column+=o.value.length}return null},this._findEndTagInLine=function(e,t,s,o){for(var i,r=e.getTokens(t),c=0,a=0;a<r.length;a++){if(i=r[a],c+=i.value.length,c<o)continue;if(n(i,"end-tag-open")&&(i=r[a+1],i&&i.value==s))return!0}return!1},this._readTagForward=function(e){var t,o=e.getCurrentToken();if(!o)return null;t=new s;do if(n(o,"tag-open"))t.closing=n(o,"end-tag-open"),t.start.row=e.getCurrentTokenRow(),t.start.column=e.getCurrentTokenColumn();else if(n(o,"tag-name"))t.tagName=o.value;else if(n(o,"tag-close"))return t.selfClosing=o.value=="/>",t.end.row=e.getCurrentTokenRow(),t.end.column=e.getCurrentTokenColumn()+o.value.length,e.stepForward(),t;while(o=e.stepForward())return null},this._readTagBackward=function(e){var t,o=e.getCurrentToken();if(!o)return null;t=new s;do{if(n(o,"tag-open"))return t.closing=n(o,"end-tag-open"),t.start.row=e.getCurrentTokenRow(),t.start.column=e.getCurrentTokenColumn(),e.stepBackward(),t;n(o,"tag-name")?t.tagName=o.value:n(o,"tag-close")&&(t.selfClosing=o.value=="/>",t.end.row=e.getCurrentTokenRow(),t.end.column=e.getCurrentTokenColumn()+o.value.length)}while(o=e.stepBackward())return null},this._pop=function(e,t){for(;e.length;){var n=e[e.length-1];if(!t||n.tagName==t.tagName)return e.pop();if(this.optionalEndTags.hasOwnProperty(n.tagName)){e.pop();continue}return null}},this.getFoldWidgetRange=function(e,t,n){var s,a,c,l,d,u,i=this._getFirstTagInLine(e,n);if(!i)return this.getCommentFoldWidget(e,n)&&e.getCommentFoldRange(n,e.getLine(n).length);if(d=i.closing||i.selfClosing,a=[],d){for(c=new r(e,n,i.end.column),u={row:n,column:i.start.column};s=this._readTagBackward(c);){if(s.selfClosing){if(a.length)continue;return s.start.column+=s.tagName.length+2,s.end.column-=2,o.fromPoints(s.start,s.end)}if(s.closing)a.push(s);else if(this._pop(a,s),a.length==0)return s.start.column+=s.tagName.length+2,s.start.row==s.end.row&&s.start.column<s.end.column&&(s.start.column=s.end.column),o.fromPoints(s.start,u)}}else for(c=new r(e,n,i.start.column),l={row:n,column:i.start.column+i.tagName.length+2},i.start.row==i.end.row&&(l.column=i.end.column);s=this._readTagForward(c);){if(s.selfClosing){if(a.length)continue;return s.start.column+=s.tagName.length+2,s.end.column-=2,o.fromPoints(s.start,s.end)}if(s.closing){if(this._pop(a,s),a.length==0)return o.fromPoints(l,s.start)}else a.push(s)}}}).call(c.prototype)}),ace.define("ace/mode/xml",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text","ace/mode/xml_highlight_rules","ace/mode/behaviour/xml","ace/mode/folding/xml","ace/worker/worker_client"],function(e,t){"use strict";var s=e("../lib/oop"),o=e("../lib/lang"),i=e("./text").Mode,a=e("./xml_highlight_rules").XmlHighlightRules,r=e("./behaviour/xml").XmlBehaviour,c=e("./folding/xml").FoldMode,l=e("../worker/worker_client").WorkerClient,n=function(){this.HighlightRules=a,this.$behaviour=new r,this.foldingRules=new c};s.inherits(n,i),function(){this.voidElements=o.arrayToMap([]),this.blockComment={start:"<!--",end:"-->"},this.createWorker=function(e){var t=new l(["ace"],"ace/mode/xml_worker","Worker");return t.attachToDocument(e.getDocument()),t.on("error",function(t){e.setAnnotations(t.data)}),t.on("terminate",function(){e.clearAnnotations()}),t},this.$id="ace/mode/xml"}.call(n.prototype),t.Mode=n}),function(){ace.require(["ace/mode/xml"],function(e){typeof module=="object"&&typeof exports=="object"&&module&&(module.exports=e)})}()