/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-ambientlight-appearance-backdropfilter-backgroundblendmode-backgroundcliptext-backgroundsize-bgpositionshorthand-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-borderimage-borderradius-boxshadow-boxsizing-canvas-canvastext-capture-checked-cssanimations-csscalc-csscolumns-cssescape-cssexunit-cssfilters-cssgradients-cssgrid_cssgridlegacy-csshyphens_softhyphens_softhyphensfind-cssinvalid-cssmask-csspointerevents-csspseudoanimations-csspseudotransitions-cssreflections-cssremunit-cssresize-cssscrollbar-csstransforms-csstransforms3d-csstransitions-directory-display_runin-displaytable-ellipsis-fileinput-flexbox-flexboxlegacy-flexboxtweener-flexwrap-fontface-formattribute-generatedcontent-hairline-hovermq-inputformaction-inputformenctype-inputtypes-lastchild-localizednumber-mediaqueries-multiplebgs-nthchild-objectfit-oninput-opacity-overflowscrolling-placeholder-regions-rgba-sandbox-scriptasync-shapes-siblinggeneral-sizes-smil-stylescoped-supports-svg-svgfilters-target-textalignlast-textshadow-todataurljpeg_todataurlpng_todataurlwebp-webpanimation-xhr2-xhrresponsetype-xhrresponsetypearraybuffer-xhrresponsetypeblob-xhrresponsetypedocument-xhrresponsetypejson-xhrresponsetypetext-setclasses !*/
!function(e,t,n){function i(e,t){return typeof e===t}function r(){var e,t,n,r,o,a,s;for(var d in T)if(T.hasOwnProperty(d)){if(e=[],t=T[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=i(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)a=e[o],s=a.split("."),1===s.length?Modernizr[s[0]]=r:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=r),x.push((r?"":"no-")+s.join("-"))}}function o(e){var t=S.className,n=Modernizr._config.classPrefix||"";if(z&&(t=t.baseVal),Modernizr._config.enableJSClass){var i=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(i,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),z?S.className.baseVal=t:S.className=t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):z?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(){var e=t.body;return e||(e=a(z?"svg":"body"),e.fake=!0),e}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function l(e,n,i,r){var o,d,l,u,c="modernizr",p=a("div"),f=s();if(parseInt(i,10))for(;i--;)l=a("div"),l.id=r?r[i]:c+(i+1),p.appendChild(l);return o=a("style"),o.type="text/css",o.id="s"+c,(f.fake?f:p).appendChild(o),f.appendChild(p),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),p.id=c,f.fake&&(f.style.background="",f.style.overflow="hidden",u=S.style.overflow,S.style.overflow="hidden",S.appendChild(f)),d=n(p,e),f.fake?(f.parentNode.removeChild(f),S.style.overflow=u,S.offsetHeight):p.parentNode.removeChild(p),!!d}function u(e,t){if("object"==typeof e)for(var n in e)W(e,n)&&u(n,e[n]);else{e=e.toLowerCase();var i=e.split("."),r=Modernizr[i[0]];if(2==i.length&&(r=r[i[1]]),"undefined"!=typeof r)return Modernizr;t="function"==typeof t?t():t,1==i.length?Modernizr[i[0]]=t:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=t),o([(t&&0!=t?"":"no-")+i.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function c(e,t){return!!~(""+e).indexOf(t)}function p(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,n){var r;for(var o in e)if(e[o]in t)return n===!1?e[o]:(r=t[e[o]],i(r,"function")?p(r,n||t):r);return!1}function m(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(t,n,i){var r;if("getComputedStyle"in e){r=getComputedStyle.call(e,t,n);var o=e.console;if(null!==r)i&&(r=r.getPropertyValue(i));else if(o){var a=o.error?"error":"log";o[a].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else r=!n&&t.currentStyle&&t.currentStyle[i];return r}function g(t,i){var r=t.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(m(t[r]),i))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];r--;)o.push("("+m(t[r])+":"+i+")");return o=o.join(" or "),l("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==h(e,null,"position")})}return n}function b(e,t,r,o){function s(){u&&(delete G.style,delete G.modElem)}if(o=i(o,"undefined")?!1:o,!i(r,"undefined")){var l=g(e,r);if(!i(l,"undefined"))return l}for(var u,p,f,m,h,b=["modernizr","tspan","samp"];!G.style&&b.length;)u=!0,G.modElem=a(b.shift()),G.style=G.modElem.style;for(f=e.length,p=0;f>p;p++)if(m=e[p],h=G.style[m],c(m,"-")&&(m=d(m)),G.style[m]!==n){if(o||i(r,"undefined"))return s(),"pfx"==t?m:!0;try{G.style[m]=r}catch(v){}if(G.style[m]!=h)return s(),"pfx"==t?m:!0}return s(),!1}function v(e,t,n,r,o){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+U.join(a+" ")+a).split(" ");return i(t,"string")||i(t,"undefined")?b(s,t,r,o):(s=(e+" "+I.join(a+" ")+a).split(" "),f(s,t,n))}function y(e,t,i){return v(e,n,n,t,i)}var x=[],T=[],A={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){T.push({name:e,fn:t,options:n})},addAsyncTest:function(e){T.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=A,Modernizr=new Modernizr,Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var w=e.CSS;Modernizr.addTest("cssescape",w?"function"==typeof w.escape:!1);var C="CSS"in e&&"supports"in e.CSS,k="supportsCSS"in e;Modernizr.addTest("supports",C||k),Modernizr.addTest("target",function(){var t=e.document;if(!("querySelectorAll"in t))return!1;try{return t.querySelectorAll(":target"),!0}catch(n){return!1}}),Modernizr.addTest("xhrresponsetype",function(){if("undefined"==typeof XMLHttpRequest)return!1;var e=new XMLHttpRequest;return e.open("get","/",!0),"response"in e}()),Modernizr.addTest("xhr2","XMLHttpRequest"in e&&"withCredentials"in new XMLHttpRequest),Modernizr.addTest("svgfilters",function(){var t=!1;try{t="SVGFEColorMatrixElement"in e&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(n){}return t});var S=t.documentElement,z="svg"===S.nodeName.toLowerCase();Modernizr.addTest("canvas",function(){var e=a("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof a("canvas").getContext("2d").fillText});var E=a("canvas");Modernizr.addTest("todataurljpeg",function(){return!!Modernizr.canvas&&0===E.toDataURL("image/jpeg").indexOf("data:image/jpeg")}),Modernizr.addTest("todataurlpng",function(){return!!Modernizr.canvas&&0===E.toDataURL("image/png").indexOf("data:image/png")}),Modernizr.addTest("todataurlwebp",function(){var e=!1;try{e=!!Modernizr.canvas&&0===E.toDataURL("image/webp").indexOf("data:image/webp")}catch(t){}return e}),Modernizr.addTest("bgpositionshorthand",function(){var e=a("a"),t=e.style,n="right 10px bottom 10px";return t.cssText="background-position: "+n+";",t.backgroundPosition===n}),Modernizr.addTest("multiplebgs",function(){var e=a("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),Modernizr.addTest("csspointerevents",function(){var e=a("a").style;return e.cssText="pointer-events:auto","auto"===e.pointerEvents}),Modernizr.addTest("cssremunit",function(){var e=a("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)}),Modernizr.addTest("rgba",function(){var e=a("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("capture","capture"in a("input")),Modernizr.addTest("fileinput",function(){if(navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/))return!1;var e=a("input");return e.type="file",!e.disabled}),Modernizr.addTest("formattribute",function(){var e,n=a("form"),i=a("input"),r=a("div"),o="formtest"+(new Date).getTime(),s=!1;n.id=o;try{i.setAttribute("form",o)}catch(d){t.createAttribute&&(e=t.createAttribute("form"),e.nodeValue=o,i.setAttributeNode(e))}return r.appendChild(n),r.appendChild(i),S.appendChild(r),s=n.elements&&1===n.elements.length&&i.form==n,r.parentNode.removeChild(r),s}),Modernizr.addTest("placeholder","placeholder"in a("input")&&"placeholder"in a("textarea")),Modernizr.addTest("sandbox","sandbox"in a("iframe")),Modernizr.addTest("inputformaction",!!("formAction"in a("input")),{aliases:["input-formaction"]}),Modernizr.addTest("inputformenctype",!!("formEnctype"in a("input")),{aliases:["input-formenctype"]}),Modernizr.addTest("scriptasync","async"in a("script")),Modernizr.addTest("stylescoped","scoped"in a("style"));var R=function(){function e(e,t){var r;return e?(t&&"string"!=typeof t||(t=a(t||"div")),e="on"+e,r=e in t,!r&&i&&(t.setAttribute||(t=a("div")),t.setAttribute(e,""),r="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),r):!1}var i=!("onblur"in t.documentElement);return e}();A.hasEvent=R,Modernizr.addTest("ambientlight",R("devicelight",e));var _=a("input"),B="search tel url email datetime date month week time datetime-local number range color".split(" "),L={};Modernizr.inputtypes=function(e){for(var i,r,o,a=e.length,s="1)",d=0;a>d;d++)_.setAttribute("type",i=e[d]),o="text"!==_.type&&"style"in _,o&&(_.value=s,_.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&_.style.WebkitAppearance!==n?(S.appendChild(_),r=t.defaultView,o=r.getComputedStyle&&"textfield"!==r.getComputedStyle(_,null).WebkitAppearance&&0!==_.offsetHeight,S.removeChild(_)):/^(search|tel)$/.test(i)||(o=/^(url|email)$/.test(i)?_.checkValidity&&_.checkValidity()===!1:_.value!=s)),L[e[d]]=!!o;return L}(B);var P=A._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];A._prefixes=P,Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=a("a");return n.style.cssText=e+P.join(t+e),!!n.style.length}),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",i="",r=0,o=P.length-1;o>r;r++)e=0===r?"to ":"",i+=t+P[r]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(i+=t+"-webkit-"+n);var s=a("a"),d=s.style;return d.cssText=i,(""+d.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("opacity",function(){var e=a("a").style;return e.cssText=P.join("opacity:.55;"),/^0.55$/.test(e.opacity)});var j={elem:a("modernizr")};Modernizr._q.push(function(){delete j.elem}),Modernizr.addTest("cssexunit",function(){var e,t=j.elem.style;try{t.fontSize="3ex",e=-1!==t.fontSize.indexOf("ex")}catch(n){e=!1}return e});var q=function(e){if("undefined"==typeof XMLHttpRequest)return!1;var t=new XMLHttpRequest;t.open("get","/",!0);try{t.responseType=e}catch(n){return!1}return"response"in t&&t.responseType==e};Modernizr.addTest("xhrresponsetypearraybuffer",q("arraybuffer")),Modernizr.addTest("xhrresponsetypeblob",q("blob")),Modernizr.addTest("xhrresponsetypedocument",q("document")),Modernizr.addTest("xhrresponsetypejson",q("json")),Modernizr.addTest("xhrresponsetypetext",q("text"));var M={}.toString;Modernizr.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test(M.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))});var O=A.testStyles=l;Modernizr.addTest("checked",function(){return O("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=a("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})}),O("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(e){var t,n=e.childNodes;t=n[0].offsetLeft<n[1].offsetLeft,Modernizr.addTest("displaytable",t,{aliases:["display-table"]})},2);var H=function(){var e=navigator.userAgent,t=e.match(/w(eb)?osbrowser/gi),n=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;return t||n}();H?Modernizr.addTest("fontface",!1):O('@font-face {font-family:"font";src:url("https://")}',function(e,n){var i=t.getElementById("smodernizr"),r=i.sheet||i.styleSheet,o=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"",a=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",a)}),O('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){Modernizr.addTest("generatedcontent",e.offsetHeight>=6)}),Modernizr.addTest("hairline",function(){return O("#modernizr {border:.5px solid transparent}",function(e){return 1===e.offsetHeight})}),Modernizr.addTest("cssinvalid",function(){return O("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}",function(e){var t=a("input");return t.required=!0,e.appendChild(t),t.clientWidth>10})}),O("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),O("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,i=0;5>i;i++)n=n&&t[i].offsetWidth===i%2+1;Modernizr.addTest("nthchild",n)},5),O("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+P.join("scrollbar{width:10px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:10px}",function(e){Modernizr.addTest("cssscrollbar","scrollWidth"in e&&30==e.scrollWidth)}),Modernizr.addTest("siblinggeneral",function(){return O("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}",function(e){return 200==e.lastChild.offsetWidth},2)}),Modernizr.addTest("oninput",function(){var n,i=a("input");if(i.setAttribute("oninput","return"),R("oninput",S)||"function"==typeof i.oninput)return!0;try{var r=t.createEvent("KeyboardEvent");n=!1;var o=function(e){n=!0,e.preventDefault(),e.stopPropagation()};r.initKeyEvent("keypress",!0,!0,e,!1,!1,!1,!1,0,"e".charCodeAt(0)),S.appendChild(i),i.addEventListener("input",o,!1),i.focus(),i.dispatchEvent(r),i.removeEventListener("input",o,!1),S.removeChild(i)}catch(s){n=!1}return n}),Modernizr.addTest("formvalidation",function(){var t=a("form");if(!("checkValidity"in t&&"addEventListener"in t))return!1;if("reportValidity"in t)return!0;var n,i=!1;return Modernizr.formvalidationapi=!0,t.addEventListener("submit",function(t){(!e.opera||e.operamini)&&t.preventDefault(),t.stopPropagation()},!1),t.innerHTML='<input name="modTest" required="required" /><button></button>',O("#modernizr form{position:absolute;top:-99999em}",function(e){e.appendChild(t),n=t.getElementsByTagName("input")[0],n.addEventListener("invalid",function(e){i=!0,e.preventDefault(),e.stopPropagation()},!1),Modernizr.formvalidationmessage=!!n.validationMessage,t.getElementsByTagName("button")[0].click()}),i}),Modernizr.addTest("localizednumber",function(){if(!Modernizr.inputtypes.number)return!1;if(!Modernizr.formvalidation)return!1;var e,n=a("div"),i=s(),r=function(){return S.insertBefore(i,S.firstElementChild||S.firstChild)}();n.innerHTML='<input type="number" value="1.0" step="0.1"/>';var o=n.childNodes[0];r.appendChild(n),o.focus();try{t.execCommand("SelectAll",!1),t.execCommand("InsertText",!1,"1,1")}catch(d){}return e="number"===o.type&&1.1===o.valueAsNumber&&o.checkValidity(),r.removeChild(n),i.fake&&r.parentNode.removeChild(r),e});var N=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return l("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();A.mq=N,Modernizr.addTest("mediaqueries",N("only all"));var W;!function(){var e={}.hasOwnProperty;W=i(e,"undefined")||i(e.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),A._l={},A.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},A._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,i;for(e=0;e<n.length;e++)(i=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){A.addTest=u}),Modernizr.addAsyncTest(function(){var e,t,n,i=a("img"),r="sizes"in i;!r&&"srcset"in i?(t="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",n=function(){u("sizes",2==i.width)},i.onload=n,i.onerror=n,i.setAttribute("sizes","9px"),i.srcset=e+" 1w,"+t+" 8w",i.src=e):u("sizes",r)}),Modernizr.addAsyncTest(function(){var e=new Image;e.onerror=function(){u("webpanimation",!1,{aliases:["webp-animation"]})},e.onload=function(){u("webpanimation",1==e.width,{aliases:["webp-animation"]})},e.src="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"}),Modernizr.addTest("hovermq",N("(hover)"));var V="Moz O ms Webkit",I=A._config.usePrefixes?V.toLowerCase().split(" "):[];A._domPrefixes=I,Modernizr.addTest("fileinputdirectory",function(){var e=a("input"),t="directory";if(e.type="file",t in e)return!0;for(var n=0,i=I.length;i>n;n++)if(I[n]+t in e)return!0;return!1});var U=A._config.usePrefixes?V.split(" "):[];A._cssomPrefixes=U;var D=function(t){var i,r=P.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),i=t.replace(/-/g,"_").toUpperCase()+"_RULE",i in o)return"@"+t;for(var a=0;r>a;a++){var s=P[a],d=s.toUpperCase()+"_"+i;if(d in o)return"@-"+s.toLowerCase()+"-"+t}return!1};A.atRule=D;var G={style:j.elem.style};Modernizr._q.unshift(function(){delete G.style});var X=A.testProp=function(e,t,i){return b([e],n,t,i)};Modernizr.addTest("textshadow",X("textShadow","1px 1px")),A.testAllProps=v,A.testAllProps=y,Modernizr.addTest("cssanimations",y("animationName","a",!0)),Modernizr.addTest("csspseudoanimations",function(){var t=!1;if(!Modernizr.cssanimations||!e.getComputedStyle)return t;var n=["@",Modernizr._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; } }@").replace(/\@$/,""),'#modernizr:before { content:" "; font-size:5px;',Modernizr._prefixes.join("animation:csspseudoanimations 1ms infinite;"),"}"].join("");return Modernizr.testStyles(n,function(n){t="10px"===e.getComputedStyle(n,":before").getPropertyValue("font-size")}),t}),Modernizr.addTest("appearance",y("appearance")),Modernizr.addTest("backdropfilter",y("backdropFilter")),Modernizr.addTest("backgroundcliptext",function(){return y("backgroundClip","text")}),Modernizr.addTest("bgpositionxy",function(){return y("backgroundPositionX","3px",!0)&&y("backgroundPositionY","5px",!0)}),Modernizr.addTest("bgrepeatround",y("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",y("backgroundRepeat","space")),Modernizr.addTest("backgroundsize",y("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",y("backgroundSize","cover")),Modernizr.addTest("borderimage",y("borderImage","url() 1",!0)),Modernizr.addTest("borderradius",y("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",y("boxShadow","1px 1px",!0)),Modernizr.addTest("boxsizing",y("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=y("columnCount");try{e=!!t,e&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],i=0;i<n.length;i++)e=n[i].toLowerCase(),t=y("column"+n[i]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||y(n[i])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("cssgridlegacy",y("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",y("grid-template-rows","none",!0)),Modernizr.addTest("displayrunin",y("display","run-in"),{aliases:["display-runin"]}),Modernizr.addTest("ellipsis",y("textOverflow","ellipsis")),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return y("filter","blur(2px)");var e=a("a");return e.style.cssText=P.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}),Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",y("boxDirection","reverse",!0)),Modernizr.addTest("flexboxtweener",y("flexAlign","end",!0)),Modernizr.addTest("flexwrap",y("flexWrap","wrap",!0)),Modernizr.addAsyncTest(function(){function n(){function r(){try{var e=a("div"),n=a("span"),i=e.style,r=0,o=0,s=!1,d=t.body.firstElementChild||t.body.firstChild;return e.appendChild(n),n.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",t.body.insertBefore(e,d),i.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",r=n.offsetHeight,o=n.offsetWidth,i.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+P.join("hyphens:auto; "),s=n.offsetHeight!=r||n.offsetWidth!=o,t.body.removeChild(e),e.removeChild(n),s}catch(l){return!1}}function o(e,n){try{var i=a("div"),r=a("span"),o=i.style,s=0,d=!1,l=!1,u=!1,c=t.body.firstElementChild||t.body.firstChild;return o.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",i.appendChild(r),t.body.insertBefore(i,c),r.innerHTML="mm",s=r.offsetHeight,r.innerHTML="m"+e+"m",l=r.offsetHeight>s,n?(r.innerHTML="m<br />m",s=r.offsetWidth,r.innerHTML="m"+e+"m",u=r.offsetWidth>s):u=!0,l===!0&&u===!0&&(d=!0),t.body.removeChild(i),i.removeChild(r),d}catch(p){return!1}}function s(n){try{var i,r=a("input"),o=a("div"),s="lebowski",d=!1,l=t.body.firstElementChild||t.body.firstChild;o.innerHTML=s+n+s,t.body.insertBefore(o,l),t.body.insertBefore(r,o),r.setSelectionRange?(r.focus(),r.setSelectionRange(0,0)):r.createTextRange&&(i=r.createTextRange(),i.collapse(!0),i.moveEnd("character",0),i.moveStart("character",0),i.select());try{e.find?d=e.find(s+s):(i=e.self.document.body.createTextRange(),d=i.findText(s+s))}catch(u){d=!1}return t.body.removeChild(o),t.body.removeChild(r),d}catch(u){return!1}}return t.body||t.getElementsByTagName("body")[0]?(u("csshyphens",function(){if(!y("hyphens","auto",!0))return!1;try{return r()}catch(e){return!1}}),u("softhyphens",function(){try{return o("&#173;",!0)&&o("&#8203;",!1)}catch(e){return!1}}),void u("softhyphensfind",function(){try{return s("&#173;")&&s("&#8203;")}catch(e){return!1}})):void setTimeout(n,i)}var i=300;setTimeout(n,i)}),Modernizr.addTest("cssmask",y("maskRepeat","repeat-x",!0)),Modernizr.addTest("overflowscrolling",y("overflowScrolling","touch",!0)),Modernizr.addTest("cssreflections",y("boxReflect","above",!0)),Modernizr.addTest("cssresize",y("resize","both",!0)),Modernizr.addTest("shapes",y("shapeOutside","content-box",!0)),Modernizr.addTest("textalignlast",y("textAlignLast")),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!y("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in S.style)){var n,i="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",O(i+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",y("transition","all",!0)),Modernizr.addTest("csspseudotransitions",function(){var t=!1;if(!Modernizr.csstransitions||!e.getComputedStyle)return t;var n='#modernizr:before { content:" "; font-size:5px;'+Modernizr._prefixes.join("transition:0s 100s;")+"}#modernizr.trigger:before { font-size:10px; }";return Modernizr.testStyles(n,function(n){e.getComputedStyle(n,":before").getPropertyValue("font-size"),n.className+="trigger",t="5px"===e.getComputedStyle(n,":before").getPropertyValue("font-size")}),t});var F=A.prefixed=function(e,t,n){return 0===e.indexOf("@")?D(e):(-1!=e.indexOf("-")&&(e=d(e)),t?v(e,t,n):v(e,"pfx"))};Modernizr.addTest("backgroundblendmode",F("backgroundBlendMode","text")),Modernizr.addTest("objectfit",!!F("objectFit"),{aliases:["object-fit"]}),Modernizr.addTest("regions",function(){if(z)return!1;var e=F("flowFrom"),t=F("flowInto"),i=!1;if(!e||!t)return i;var r=a("iframe"),o=a("div"),s=a("div"),d=a("div"),l="modernizr_flow_for_regions_check";s.innerText="M",o.style.cssText="top: 150px; left: 150px; padding: 0px;",d.style.cssText="width: 50px; height: 50px; padding: 42px;",d.style[e]=l,o.appendChild(s),o.appendChild(d),S.appendChild(o);var u,c,p=s.getBoundingClientRect();return s.style[t]=l,u=s.getBoundingClientRect(),c=parseInt(u.left-p.left,10),S.removeChild(o),42==c?i=!0:(S.appendChild(r),p=r.getBoundingClientRect(),r.style[t]=l,u=r.getBoundingClientRect(),p.height>0&&p.height!==u.height&&0===u.height&&(i=!0)),s=d=o=r=n,i}),r(),o(x),delete A.addTest,delete A.addAsyncTest;for(var $=0;$<Modernizr._q.length;$++)Modernizr._q[$]();e.Modernizr=Modernizr}(window,document);