self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{};var Prism=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{encode:function(e){return e instanceof a?new a(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var a=t.util.type(e);switch(a){case"Object":var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=t.util.clone(e[r]));return n;case"Array":return e.slice()}return e}},languages:{extend:function(e,a){var n=t.util.clone(t.languages[e]);for(var r in a)n[r]=a[r];return n},insertBefore:function(e,a,n,r){r=r||t.languages;var i=r[e];if(2==arguments.length){n=arguments[1];for(var s in n)n.hasOwnProperty(s)&&(i[s]=n[s]);return i}var l={};for(var o in i)if(i.hasOwnProperty(o)){if(o==a)for(var s in n)n.hasOwnProperty(s)&&(l[s]=n[s]);l[o]=i[o]}return t.languages.DFS(t.languages,function(t,a){a===r[e]&&t!=e&&(this[t]=l)}),r[e]=l},DFS:function(e,a,n){for(var r in e)e.hasOwnProperty(r)&&(a.call(e,r,e[r],n||r),"Object"===t.util.type(e[r])?t.languages.DFS(e[r],a):"Array"===t.util.type(e[r])&&t.languages.DFS(e[r],a,r))}},highlightAll:function(e,a){for(var n=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),r=0,i;i=n[r++];)t.highlightElement(i,e===!0,a)},highlightElement:function(n,r,i){for(var s,l,o=n;o&&!e.test(o.className);)o=o.parentNode;if(o&&(s=(o.className.match(e)||[,""])[1],l=t.languages[s]),l){n.className=n.className.replace(e,"").replace(/\s+/g," ")+" language-"+s,o=n.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+s);var g=n.textContent;if(g){var u={element:n,language:s,grammar:l,code:g};if(t.hooks.run("before-highlight",u),r&&self.Worker){var c=new Worker(t.filename);c.onmessage=function(e){u.highlightedCode=a.stringify(JSON.parse(e.data),s),t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,i&&i.call(u.element),t.hooks.run("after-highlight",u)},c.postMessage(JSON.stringify({language:u.language,code:u.code}))}else u.highlightedCode=t.highlight(u.code,u.grammar,u.language),t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,i&&i.call(n),t.hooks.run("after-highlight",u)}}},highlight:function(e,n,r){var i=t.tokenize(e,n);return a.stringify(t.util.encode(i),r)},tokenize:function(e,a,n){var r=t.Token,i=[e],s=a.rest;if(s){for(var l in s)a[l]=s[l];delete a.rest}e:for(var l in a)if(a.hasOwnProperty(l)&&a[l]){var o=a[l];o="Array"===t.util.type(o)?o:[o];for(var g=0;g<o.length;++g){var u=o[g],c=u.inside,p=!!u.lookbehind,d=0,f=u.alias;u=u.pattern||u;for(var m=0;m<i.length;m++){var h=i[m];if(i.length>e.length)break e;if(!(h instanceof r)){u.lastIndex=0;var y=u.exec(h);if(y){p&&(d=y[1].length);var v=y.index-1+d,y=y[0].slice(d),w=y.length,b=v+w,k=h.slice(0,v+1),P=h.slice(b+1),A=[m,1];k&&A.push(k);var N=new r(l,c?t.tokenize(y,c):y,f);A.push(N),P&&A.push(P),Array.prototype.splice.apply(i,A)}}}}}return i},hooks:{all:{},add:function(e,a){var n=t.hooks.all;n[e]=n[e]||[],n[e].push(a)},run:function(e,a){var n=t.hooks.all[e];if(n&&n.length)for(var r=0,i;i=n[r++];)i(a)}}},a=t.Token=function(e,t,a){this.type=e,this.content=t,this.alias=a};if(a.stringify=function(e,n,r){if("string"==typeof e)return e;if("[object Array]"==Object.prototype.toString.call(e))return e.map(function(t){return a.stringify(t,n,e)}).join("");var i={type:e.type,content:a.stringify(e.content,n,r),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:r};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var s="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,s)}t.hooks.run("wrap",i);var l="";for(var o in i.attributes)l+=o+'="'+(i.attributes[o]||"")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'" '+l+">"+i.content+"</"+i.tag+">"},!self.document)return self.addEventListener?(self.addEventListener("message",function(e){var a=JSON.parse(e.data),n=a.language,r=a.code;self.postMessage(JSON.stringify(t.util.encode(t.tokenize(r,t.languages[n])))),self.close()},!1),self.Prism):self.Prism;var n=document.getElementsByTagName("script");return n=n[n.length-1],n&&(t.filename=n.src,document.addEventListener&&!n.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),Prism.languages.markup={comment:/<!--[\w\W]*?-->/g,prolog:/<\?.+?\?>/,doctype:/<!DOCTYPE.+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/gi,inside:{tag:{pattern:/^<\/?[\w:-]+/i,inside:{punctuation:/^<\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|>|"/g}},punctuation:/\/?>/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/\&#?[\da-z]{1,8};/gi},Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.css={comment:/\/\*[\w\W]*?\*\//g,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*{))/gi,inside:{punctuation:/[;:]/g}},url:/url\((["']?).*?\1\)/gi,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/g,property:/(\b|\B)[\w-]+(?=\s*:)/gi,string:/("|')(\\?.)*?\1/g,important:/\B!important\b/gi,punctuation:/[\{\};:]/g,"function":/[-a-z0-9]+(?=\()/gi},Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/gi,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/gi,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css},alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').+?\1/gi,inside:{"attr-name":{pattern:/^\s*style/gi,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/gi,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//g,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*?(\r?\n|$)/g,lookbehind:!0}],string:/("|')(\\?.)*?\1/g,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/gi,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,"function":{pattern:/[a-z0-9_]+\(/gi,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/gi,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/gi,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript},alias:"language-javascript"}}),!function(){function e(e,t){return Array.prototype.slice.call((t||document).querySelectorAll(e))}function t(e,t){return t=" "+t+" ",(" "+e.className+" ").replace(/[\n\t]/g," ").indexOf(t)>-1}function a(e,a,n){for(var r,i=a.replace(/\s+/g,"").split(","),s=+e.getAttribute("data-line-offset")||0,l=parseFloat(getComputedStyle(e).lineHeight),o=0;r=i[o++];){r=r.split("-");var g=+r[0],u=+r[1]||g,c=document.createElement("div");c.textContent=Array(u-g+2).join(" \r\n"),c.className=(n||"")+" line-highlight",t(e,"line-numbers")||(c.setAttribute("data-start",g),u>g&&c.setAttribute("data-end",u)),c.style.top=(g-s-1)*l+"px",t(e,"line-numbers")?e.appendChild(c):(e.querySelector("code")||e).appendChild(c)}}function n(){var t=location.hash.slice(1);e(".temporary.line-highlight").forEach(function(e){e.parentNode.removeChild(e)});var n=(t.match(/\.([\d,-]+)$/)||[,""])[1];if(n&&!document.getElementById(t)){var r=t.slice(0,t.lastIndexOf(".")),i=document.getElementById(r);i&&(i.hasAttribute("data-line")||i.setAttribute("data-line",""),a(i,n,"temporary "),document.querySelector(".temporary.line-highlight").scrollIntoView())}}if(window.Prism){var r=(crlf=/\r?\n|\r/g,0);Prism.hooks.add("after-highlight",function(t){var i=t.element.parentNode,s=i&&i.getAttribute("data-line");i&&s&&/pre/i.test(i.nodeName)&&(clearTimeout(r),e(".line-highlight",i).forEach(function(e){e.parentNode.removeChild(e)}),a(i,s),r=setTimeout(n,1))}),addEventListener("hashchange",n)}}();