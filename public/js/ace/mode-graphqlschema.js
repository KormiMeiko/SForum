ace.define("ace/mode/graphqlschema_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t){"use strict";var s=e("../lib/oop"),o=e("./text_highlight_rules").TextHighlightRules,n=function(){var e="type|interface|union|enum|schema|input|implements|extends|scalar",t="Int|Float|String|ID|Boolean",n=this.createKeywordMapper({keyword:e,"storage.type":t},"identifier");this.$rules={start:[{token:"comment",regex:"#.*$"},{token:"paren.lparen",regex:/[[({]/,next:"start"},{token:"paren.rparen",regex:/[\])}]/},{token:n,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"}]},this.normalizeRules()};s.inherits(n,o),t.GraphQLSchemaHighlightRules=n}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t){"use strict";var o=e("../../lib/oop"),n=e("../../range").Range,i=e("./fold_mode").FoldMode,s=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};o.inherits(s,i),function(){this.foldingStartMarker=/([{[(])[^}\])]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^[{(]*([}\])])|^[\s*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var o,s=e.getLine(n);return this.singleLineBlockCommentRe.test(s)&&!this.startRegionRe.test(s)&&!this.tripleStarBlockCommentRe.test(s)?"":(o=this._getFoldWidgetBase(e,t,n),!o&&this.startRegionRe.test(s)?"start":o)},this.getFoldWidgetRange=function(e,t,n,s){var o,i,a,r=e.getLine(n);if(this.startRegionRe.test(r))return this.getCommentRegionBlock(e,r,n);if(o=r.match(this.foldingStartMarker),o)return i=o.index,o[1]?this.openingBracketBlock(e,o[1],n,i):(a=e.getCommentFoldRange(n,i+o[0].length,1),a&&!a.isMultiLine()&&(s?a=this.getSectionRange(e,n):t!="all"&&(a=null)),a);if(t==="markbegin")return;if(o=r.match(this.foldingStopMarker),o)return i=o.index+o[0].length,o[1]?this.closingBracketBlock(e,o[1],n,i):e.getCommentFoldRange(n,i,-1)},this.getSectionRange=function(e,t){var s,o,i,r,a=e.getLine(t),c=a.search(/\S/),l=t,d=a.length;for(t=t+1,o=t,r=e.getLength();++t<r;){if(a=e.getLine(t),i=a.search(/\S/),i===-1)continue;if(c>i)break;if(s=this.getFoldWidgetRange(e,"all",t),s){if(s.start.row<=l)break;if(s.isMultiLine())t=s.end.row;else if(c==i)break}o=t}return new n(l,d,o,e.getLine(o).length)},this.getCommentRegionBlock=function(e,t,s){for(var o,i,c=t.search(/\s*$/),l=e.getLength(),r=s,d=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,a=1;++s<l;){if(t=e.getLine(s),o=d.exec(t),!o)continue;if(o[1]?a--:a++,!a)break}if(i=s,i>r)return new n(r,c,i,t.length)}}.call(s.prototype)}),ace.define("ace/mode/graphqlschema",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/graphqlschema_highlight_rules","ace/mode/folding/cstyle"],function(e,t){"use strict";var s=e("../lib/oop"),o=e("./text").Mode,i=e("./graphqlschema_highlight_rules").GraphQLSchemaHighlightRules,a=e("./folding/cstyle").FoldMode,n=function(){this.HighlightRules=i,this.foldingRules=new a};s.inherits(n,o),function(){this.lineCommentStart="#",this.$id="ace/mode/graphqlschema",this.snippetFileId="ace/snippets/graphqlschema"}.call(n.prototype),t.Mode=n}),function(){ace.require(["ace/mode/graphqlschema"],function(e){typeof module=="object"&&typeof exports=="object"&&module&&(module.exports=e)})}()