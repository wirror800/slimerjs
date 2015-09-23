function(){return function(){function f(a){return function(){return a}}var k=this;
function l(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function aa(a){var b=l(a);return"array"==b||"object"==b&&"number"==typeof a.length}function m(a){return"string"==typeof a}function ba(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var ca=Date.now||function(){return+new Date};function p(a,b){for(var c=0,d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),g=Math.max(d.length,e.length),h=0;0==c&&h<g;h++){var n=d[h]||"",v=e[h]||"",P=RegExp("(\\d*)(\\D*)","g"),ja=RegExp("(\\d*)(\\D*)","g");do{var x=P.exec(n)||["","",""],y=ja.exec(v)||["","",""];if(0==x[0].length&&0==y[0].length)break;c=((0==x[1].length?0:parseInt(x[1],10))<(0==y[1].length?0:parseInt(y[1],10))?-1:(0==x[1].length?0:parseInt(x[1],10))>(0==y[1].length?
0:parseInt(y[1],10))?1:0)||((0==x[2].length)<(0==y[2].length)?-1:(0==x[2].length)>(0==y[2].length)?1:0)||(x[2]<y[2]?-1:x[2]>y[2]?1:0)}while(0==c)}return c};var da=Array.prototype;function ea(a,b){if(m(a))return m(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1}function q(a,b){for(var c=a.length,d=m(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)}function fa(a,b){for(var c=a.length,d=[],e=0,g=m(a)?a.split(""):a,h=0;h<c;h++)if(h in g){var n=g[h];b.call(void 0,n,h,a)&&(d[e++]=n)}return d}
function ga(a,b){for(var c=a.length,d=Array(c),e=m(a)?a.split(""):a,g=0;g<c;g++)g in e&&(d[g]=b.call(void 0,e[g],g,a));return d}function ha(a,b){if(a.reduce)return a.reduce(b,"");var c="";q(a,function(d,e){c=b.call(void 0,c,d,e,a)});return c}function ia(a,b){var c;a:{c=a.length;for(var d=m(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:m(a)?a.charAt(c):a[c]}function ka(a,b,c){return 2>=arguments.length?da.slice.call(a,b):da.slice.call(a,b,c)};function r(a,b){this.code=a;this.state=la[a]||ma;this.message=b||"";var c=this.state.replace(/((?:^|\s+)[a-z])/g,function(a){return a.toUpperCase().replace(/^[\s\xa0]+/g,"")}),d=c.length-5;if(0>d||c.indexOf("Error",d)!=d)c+="Error";this.name=c;c=Error(this.message);c.name=this.name;this.stack=c.stack||""}(function(){var a=Error;function b(){}b.prototype=a.prototype;r.O=a.prototype;r.prototype=new b})();
var ma="unknown error",la={15:"element not selectable",11:"element not visible",31:"ime engine activation failed",30:"ime not available",24:"invalid cookie domain",29:"invalid element coordinates",12:"invalid element state",32:"invalid selector",51:"invalid selector",52:"invalid selector",17:"javascript error",405:"unsupported operation",34:"move target out of bounds",27:"no such alert",7:"no such element",8:"no such frame",23:"no such window",28:"script timeout",33:"session not created",10:"stale element reference",
0:"success",21:"timeout",25:"unable to set cookie",26:"unexpected alert open"};la[13]=ma;la[9]="unknown command";r.prototype.toString=function(){return this.name+": "+this.message};var s,na,oa,pa,qa,ra;function t(){return k.navigator?k.navigator.userAgent:null}pa=oa=na=s=!1;var sa;if(sa=t()){var ta=k.navigator;s=0==sa.indexOf("Opera");na=!s&&-1!=sa.indexOf("MSIE");oa=!s&&-1!=sa.indexOf("WebKit");pa=!s&&!oa&&"Gecko"==ta.product}var u=s,w=na,z=pa,ua=oa,va,wa=k.navigator;va=wa&&wa.platform||"";qa=-1!=va.indexOf("Mac");ra=-1!=va.indexOf("Win");var A=-1!=va.indexOf("Linux");function xa(){var a=k.document;return a?a.documentMode:void 0}var B;
a:{var ya="",C;if(u&&k.opera)var za=k.opera.version,ya="function"==typeof za?za():za;else if(z?C=/rv\:([^\);]+)(\)|;)/:w?C=/MSIE\s+([^\);]+)(\)|;)/:ua&&(C=/WebKit\/(\S+)/),C)var Aa=C.exec(t()),ya=Aa?Aa[1]:"";if(w){var Ba=xa();if(Ba>parseFloat(ya)){B=String(Ba);break a}}B=ya}var Ca={};function Da(a){return Ca[a]||(Ca[a]=0<=p(B,a))}var Ea=k.document,D=Ea&&w?xa()||("CSS1Compat"==Ea.compatMode?parseInt(B,10):5):void 0;!z&&!w||w&&w&&9<=D||z&&Da("1.9.1");w&&Da("9");function Fa(a,b){var c={},d;for(d in a)b.call(void 0,a[d],d,a)&&(c[d]=a[d]);return c}function Ga(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function Ha(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return c};function Ia(a){for(;a&&1!=a.nodeType;)a=a.previousSibling;return a}function Ja(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Ka(a,b){if(a==b)return 0;if(a.compareDocumentPosition)return a.compareDocumentPosition(b)&2?1:-1;if(w&&!(w&&9<=D)){if(9==a.nodeType)return-1;if(9==b.nodeType)return 1}if("sourceIndex"in a||a.parentNode&&"sourceIndex"in a.parentNode){var c=1==a.nodeType,d=1==b.nodeType;if(c&&d)return a.sourceIndex-b.sourceIndex;var e=a.parentNode,g=b.parentNode;return e==g?La(a,b):!c&&Ja(e,b)?-1*Ma(a,b):!d&&Ja(g,a)?Ma(b,a):(c?a.sourceIndex:e.sourceIndex)-(d?b.sourceIndex:g.sourceIndex)}d=9==a.nodeType?a:a.ownerDocument||
a.document;c=d.createRange();c.selectNode(a);c.collapse(!0);d=d.createRange();d.selectNode(b);d.collapse(!0);return c.compareBoundaryPoints(k.Range.START_TO_END,d)}function Ma(a,b){var c=a.parentNode;if(c==b)return-1;for(var d=b;d.parentNode!=c;)d=d.parentNode;return La(d,a)}function La(a,b){for(var c=b;c=c.previousSibling;)if(c==a)return-1;return 1}function Na(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null};var Oa,Pa,Qa,Ra,Sa,Ta,Ua;Ua=Ta=Sa=Ra=Qa=Pa=Oa=!1;var E=t();E&&(-1!=E.indexOf("Firefox")?Oa=!0:-1!=E.indexOf("Camino")?Pa=!0:-1!=E.indexOf("iPhone")||-1!=E.indexOf("iPod")?Qa=!0:-1!=E.indexOf("iPad")?Ra=!0:-1!=E.indexOf("Android")?Sa=!0:-1!=E.indexOf("Chrome")?Ta=!0:-1!=E.indexOf("Safari")&&(Ua=!0));var Va=Oa,Wa=Pa,Xa=Qa,Ya=Ra,F=Sa,Za=Ta,$a=Ua;var G=w&&!(w&&9<=D),ab=w&&!(w&&8<=D);function bb(a,b,c,d,e){this.f=a;this.nodeName=c;this.nodeValue=d;this.nodeType=2;this.ownerElement=b;this.K=e;this.parentNode=b}function cb(a,b,c){var d=ab&&"href"==b.nodeName?a.getAttribute(b.nodeName,2):b.nodeValue;return new bb(b,a,b.nodeName,d,c)};function H(a){var b=null,c=a.nodeType;1==c&&(b=a.textContent,b=void 0==b||null==b?a.innerText:b,b=void 0==b||null==b?"":b);if("string"!=typeof b)if(G&&"title"==a.nodeName.toLowerCase()&&1==c)b=a.text;else if(9==c||1==c){a=9==c?a.documentElement:a.firstChild;for(var c=0,d=[],b="";a;){do 1!=a.nodeType&&(b+=a.nodeValue),G&&"title"==a.nodeName.toLowerCase()&&(b+=a.text),d[c++]=a;while(a=a.firstChild);for(;c&&!(a=d[--c].nextSibling););}}else b=a.nodeValue;return""+b}
function I(a,b,c){if(null===b)return!0;try{if(!a.getAttribute)return!1}catch(d){return!1}ab&&"class"==b&&(b="className");return null==c?!!a.getAttribute(b):a.getAttribute(b,2)==c}function db(a,b,c,d,e){return(G?eb:fb).call(null,a,b,m(c)?c:null,m(d)?d:null,e||new J)}
function eb(a,b,c,d,e){if(8==a.h||c&&null===a.h){var g=b.all;if(!g)return e;a=gb(a);if("*"!=a&&(g=b.getElementsByTagName(a),!g))return e;if(c){for(var h=[],n=0;b=g[n++];)I(b,c,d)&&h.push(b);g=h}for(n=0;b=g[n++];)"*"==a&&"!"==b.tagName||e.add(b);return e}hb(a,b,c,d,e);return e}
function fb(a,b,c,d,e){b.getElementsByName&&d&&"name"==c&&!w?(b=b.getElementsByName(d),q(b,function(b){a.matches(b)&&e.add(b)})):b.getElementsByClassName&&d&&"class"==c?(b=b.getElementsByClassName(d),q(b,function(b){b.className==d&&a.matches(b)&&e.add(b)})):b.getElementsByTagName&&(b=b.getElementsByTagName(a.getName()),q(b,function(a){I(a,c,d)&&e.add(a)}));return e}
function ib(a,b,c,d,e){var g;if((8==a.h||c&&null===a.h)&&(g=b.childNodes)){var h=gb(a);if("*"!=h&&(g=fa(g,function(a){return a.tagName&&a.tagName.toLowerCase()==h}),!g))return e;c&&(g=fa(g,function(a){return I(a,c,d)}));q(g,function(a){"*"==h&&("!"==a.tagName||"*"==h&&1!=a.nodeType)||e.add(a)});return e}return jb(a,b,c,d,e)}function jb(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)I(b,c,d)&&a.matches(b)&&e.add(b);return e}
function hb(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)I(b,c,d)&&a.matches(b)&&e.add(b),hb(a,b,c,d,e)}function gb(a){return a.getName()};function J(){this.e=this.d=null;this.i=0}function kb(a){this.p=a;this.next=this.n=null}J.prototype.unshift=function(a){a=new kb(a);a.next=this.d;this.e?this.d.n=a:this.d=this.e=a;this.d=a;this.i++};J.prototype.add=function(a){a=new kb(a);a.n=this.e;this.d?this.e.next=a:this.d=this.e=a;this.e=a;this.i++};function lb(a){return(a=a.d)?a.p:null}function mb(a){return(a=lb(a))?H(a):""}function K(a,b){this.I=a;this.o=(this.q=b)?a.e:a.d;this.v=null}
K.prototype.next=function(){var a=this.o;if(null==a)return null;var b=this.v=a;this.o=this.q?a.n:a.next;return b.p};function L(a,b){var c=a.evaluate(b);return c instanceof J?+mb(c):+c}function M(a,b){var c=a.evaluate(b);return c instanceof J?mb(c):""+c}function N(a,b){var c=a.evaluate(b);return c instanceof J?!!c.i:!!c};function O(a,b,c,d,e){b=b.evaluate(d);c=c.evaluate(d);var g;if(b instanceof J&&c instanceof J){e=new K(b,!1);for(d=e.next();d;d=e.next())for(b=new K(c,!1),g=b.next();g;g=b.next())if(a(H(d),H(g)))return!0;return!1}if(b instanceof J||c instanceof J){b instanceof J?e=b:(e=c,c=b);e=new K(e,!1);b=typeof c;for(d=e.next();d;d=e.next()){switch(b){case "number":d=+H(d);break;case "boolean":d=!!H(d);break;case "string":d=H(d);break;default:throw Error("Illegal primitive type for comparison.");}if(a(d,c))return!0}return!1}return e?
"boolean"==typeof b||"boolean"==typeof c?a(!!b,!!c):"number"==typeof b||"number"==typeof c?a(+b,+c):a(b,c):a(+b,+c)}function nb(a,b,c,d){this.w=a;this.M=b;this.t=c;this.u=d}nb.prototype.toString=function(){return this.w};var ob={};function Q(a,b,c,d){if(ob.hasOwnProperty(a))throw Error("Binary operator already created: "+a);a=new nb(a,b,c,d);ob[a.toString()]=a}Q("div",6,1,function(a,b,c){return L(a,c)/L(b,c)});Q("mod",6,1,function(a,b,c){return L(a,c)%L(b,c)});
Q("*",6,1,function(a,b,c){return L(a,c)*L(b,c)});Q("+",5,1,function(a,b,c){return L(a,c)+L(b,c)});Q("-",5,1,function(a,b,c){return L(a,c)-L(b,c)});Q("<",4,2,function(a,b,c){return O(function(a,b){return a<b},a,b,c)});Q(">",4,2,function(a,b,c){return O(function(a,b){return a>b},a,b,c)});Q("<=",4,2,function(a,b,c){return O(function(a,b){return a<=b},a,b,c)});Q(">=",4,2,function(a,b,c){return O(function(a,b){return a>=b},a,b,c)});Q("=",3,2,function(a,b,c){return O(function(a,b){return a==b},a,b,c,!0)});
Q("!=",3,2,function(a,b,c){return O(function(a,b){return a!=b},a,b,c,!0)});Q("and",2,2,function(a,b,c){return N(a,c)&&N(b,c)});Q("or",1,2,function(a,b,c){return N(a,c)||N(b,c)});function pb(a,b,c,d,e,g,h,n,v){this.l=a;this.t=b;this.H=c;this.G=d;this.F=e;this.u=g;this.D=h;this.C=void 0!==n?n:h;this.J=!!v}pb.prototype.toString=function(){return this.l};var qb={};function R(a,b,c,d,e,g,h,n){if(qb.hasOwnProperty(a))throw Error("Function already created: "+a+".");qb[a]=new pb(a,b,c,d,!1,e,g,h,n)}R("boolean",2,!1,!1,function(a,b){return N(b,a)},1);R("ceiling",1,!1,!1,function(a,b){return Math.ceil(L(b,a))},1);
R("concat",3,!1,!1,function(a,b){var c=ka(arguments,1);return ha(c,function(b,c){return b+M(c,a)})},2,null);R("contains",2,!1,!1,function(a,b,c){b=M(b,a);a=M(c,a);return-1!=b.indexOf(a)},2);R("count",1,!1,!1,function(a,b){return b.evaluate(a).i},1,1,!0);R("false",2,!1,!1,f(!1),0);R("floor",1,!1,!1,function(a,b){return Math.floor(L(b,a))},1);
R("id",4,!1,!1,function(a,b){function c(a){if(G){var b=e.all[a];if(b){if(b.nodeType&&a==b.id)return b;if(b.length)return ia(b,function(b){return a==b.id})}return null}return e.getElementById(a)}var d=a.f,e=9==d.nodeType?d:d.ownerDocument,d=M(b,a).split(/\s+/),g=[];q(d,function(a){a=c(a);!a||0<=ea(g,a)||g.push(a)});g.sort(Ka);var h=new J;q(g,function(a){h.add(a)});return h},1);R("lang",2,!1,!1,f(!1),1);
R("last",1,!0,!1,function(a){if(1!=arguments.length)throw Error("Function last expects ()");return a.e},0);R("local-name",3,!1,!0,function(a,b){var c=b?lb(b.evaluate(a)):a.f;return c?c.nodeName.toLowerCase():""},0,1,!0);R("name",3,!1,!0,function(a,b){var c=b?lb(b.evaluate(a)):a.f;return c?c.nodeName.toLowerCase():""},0,1,!0);R("namespace-uri",3,!0,!1,f(""),0,1,!0);R("normalize-space",3,!1,!0,function(a,b){return(b?M(b,a):H(a.f)).replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")},0,1);
R("not",2,!1,!1,function(a,b){return!N(b,a)},1);R("number",1,!1,!0,function(a,b){return b?L(b,a):+H(a.f)},0,1);R("position",1,!0,!1,function(a){return a.L},0);R("round",1,!1,!1,function(a,b){return Math.round(L(b,a))},1);R("starts-with",2,!1,!1,function(a,b,c){b=M(b,a);a=M(c,a);return 0==b.lastIndexOf(a,0)},2);R("string",3,!1,!0,function(a,b){return b?M(b,a):H(a.f)},0,1);R("string-length",1,!1,!0,function(a,b){return(b?M(b,a):H(a.f)).length},0,1);
R("substring",3,!1,!1,function(a,b,c,d){c=L(c,a);if(isNaN(c)||Infinity==c||-Infinity==c)return"";d=d?L(d,a):Infinity;if(isNaN(d)||-Infinity===d)return"";c=Math.round(c)-1;var e=Math.max(c,0);a=M(b,a);if(Infinity==d)return a.substring(e);b=Math.round(d);return a.substring(e,c+b)},2,3);R("substring-after",3,!1,!1,function(a,b,c){b=M(b,a);a=M(c,a);c=b.indexOf(a);return-1==c?"":b.substring(c+a.length)},2);
R("substring-before",3,!1,!1,function(a,b,c){b=M(b,a);a=M(c,a);a=b.indexOf(a);return-1==a?"":b.substring(0,a)},2);R("sum",1,!1,!1,function(a,b){var c;c=b.evaluate(a);c=new K(c,!1);for(var d=0,e=c.next();e;e=c.next())d+=+H(e);return d},1,1,!0);R("translate",3,!1,!1,function(a,b,c,d){b=M(b,a);c=M(c,a);var e=M(d,a);a=[];for(d=0;d<c.length;d++){var g=c.charAt(d);g in a||(a[g]=e.charAt(d))}c="";for(d=0;d<b.length;d++)g=b.charAt(d),c+=g in a?a[g]:g;return c},3);R("true",2,!1,!1,f(!0),0);function rb(a,b,c,d){this.l=a;this.B=b;this.q=c;this.P=d}rb.prototype.toString=function(){return this.l};var sb={};function S(a,b,c,d){if(sb.hasOwnProperty(a))throw Error("Axis already created: "+a);sb[a]=new rb(a,b,c,!!d)}S("ancestor",function(a,b){for(var c=new J,d=b;d=d.parentNode;)a.matches(d)&&c.unshift(d);return c},!0);S("ancestor-or-self",function(a,b){var c=new J,d=b;do a.matches(d)&&c.unshift(d);while(d=d.parentNode);return c},!0);
S("attribute",function(a,b){var c=new J,d=a.getName();if("style"==d&&b.style&&G)return c.add(new bb(b.style,b,"style",b.style.cssText,b.sourceIndex)),c;var e=b.attributes;if(e)if("*"==d)for(var d=b.sourceIndex,g=0,h;h=e[g];g++)G?h.nodeValue&&c.add(cb(b,h,d)):c.add(h);else(h=e.getNamedItem(d))&&(G?h.nodeValue&&c.add(cb(b,h,b.sourceIndex)):c.add(h));return c},!1);S("child",function(a,b,c,d,e){return(G?ib:jb).call(null,a,b,m(c)?c:null,m(d)?d:null,e||new J)},!1,!0);S("descendant",db,!1,!0);
S("descendant-or-self",function(a,b,c,d){var e=new J;I(b,c,d)&&a.matches(b)&&e.add(b);return db(a,b,c,d,e)},!1,!0);S("following",function(a,b,c,d){var e=new J;do for(var g=b;g=g.nextSibling;)I(g,c,d)&&a.matches(g)&&e.add(g),e=db(a,g,c,d,e);while(b=b.parentNode);return e},!1,!0);S("following-sibling",function(a,b){for(var c=new J,d=b;d=d.nextSibling;)a.matches(d)&&c.add(d);return c},!1);S("namespace",function(){return new J},!1);
S("parent",function(a,b){var c=new J;if(9==b.nodeType)return c;if(2==b.nodeType)return c.add(b.ownerElement),c;var d=b.parentNode;a.matches(d)&&c.add(d);return c},!1);S("preceding",function(a,b,c,d){var e=new J,g=[];do g.unshift(b);while(b=b.parentNode);for(var h=1,n=g.length;h<n;h++){var v=[];for(b=g[h];b=b.previousSibling;)v.unshift(b);for(var P=0,ja=v.length;P<ja;P++)b=v[P],I(b,c,d)&&a.matches(b)&&e.add(b),e=db(a,b,c,d,e)}return e},!0,!0);
S("preceding-sibling",function(a,b){for(var c=new J,d=b;d=d.previousSibling;)a.matches(d)&&c.unshift(d);return c},!0);S("self",function(a,b){var c=new J;a.matches(b)&&c.add(b);return c},!1);function T(a){return(a=a.exec(t()))?a[1]:""}var tb=function(){if(Va)return T(/Firefox\/([0-9.]+)/);if(w||u)return B;if(Za)return T(/Chrome\/([0-9.]+)/);if($a)return T(/Version\/([0-9.]+)/);if(Xa||Ya){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(t());if(a)return a[1]+"."+a[2]}else{if(F)return(a=T(/Android\s+([0-9.]+)/))?a:T(/Version\/([0-9.]+)/);if(Wa)return T(/Camino\/([0-9.]+)/)}return""}();var ub,vb;function wb(a){return xb?ub(a):w?0<=p(D,a):Da(a)}function U(a){xb?vb(a):F?p(yb,a):p(tb,a)}var xb=function(){if(!z)return!1;var a=k.Components;if(!a)return!1;try{if(!a.classes)return!1}catch(b){return!1}var c=a.classes,a=a.interfaces,d=c["@mozilla.org/xpcom/version-comparator;1"].getService(a.nsIVersionComparator),c=c["@mozilla.org/xre/app-info;1"].getService(a.nsIXULAppInfo),e=c.platformVersion,g=c.version;ub=function(a){return 0<=d.s(e,""+a)};vb=function(a){d.s(g,""+a)};return!0}(),zb;
if(F){var Ab=/Android\s+([0-9\.]+)/.exec(t());zb=Ab?Ab[1]:"0"}else zb="0";var yb=zb;F&&U(2.3);F&&U(4);$a&&U(6);function Bb(a,b){return!!a&&1==a.nodeType&&(!b||a.tagName.toUpperCase()==b)}var Cb="BUTTON INPUT OPTGROUP OPTION SELECT TEXTAREA".split(" ");
function Db(a){var b=a.tagName.toUpperCase();return 0<=ea(Cb,b)?a.disabled?!1:a.parentNode&&1==a.parentNode.nodeType&&"OPTGROUP"==b||"OPTION"==b?Db(a.parentNode):!Na(a,function(a){var b=a.parentNode;if(b&&Bb(b,"FIELDSET")&&b.disabled){if(!Bb(a,"LEGEND"))return!0;for(;a=void 0!=a.previousElementSibling?a.previousElementSibling:Ia(a.previousSibling);)if(Bb(a,"LEGEND"))return!0}return!1}):!0};ua||u||xb&&U(3.6);w&&wb(10);F&&U(4);function V(a,b){this.g={};this.c=[];var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){var e;if(a instanceof V)for(d=Eb(a),Fb(a),e=[],c=0;c<a.c.length;c++)e.push(a.g[a.c[c]]);else{var c=[],g=0;for(d in a)c[g++]=d;d=c;c=[];g=0;for(e in a)c[g++]=a[e];e=c}for(c=0;c<d.length;c++)this.set(d[c],e[c])}}V.prototype.k=0;V.prototype.A=0;function Eb(a){Fb(a);return a.c.concat()}
function Fb(a){if(a.k!=a.c.length){for(var b=0,c=0;b<a.c.length;){var d=a.c[b];Object.prototype.hasOwnProperty.call(a.g,d)&&(a.c[c++]=d);b++}a.c.length=c}if(a.k!=a.c.length){for(var e={},c=b=0;b<a.c.length;)d=a.c[b],Object.prototype.hasOwnProperty.call(e,d)||(a.c[c++]=d,e[d]=1),b++;a.c.length=c}}V.prototype.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.g,a)?this.g[a]:b};
V.prototype.set=function(a,b){Object.prototype.hasOwnProperty.call(this.g,a)||(this.k++,this.c.push(a),this.A++);this.g[a]=b};var Gb={};function W(a,b,c){ba(a)&&(a=z?a.a:u?a.opera:a.b);a=new Hb(a,b,c);!b||b in Gb&&!c||(Gb[b]={key:a,shift:!1},c&&(Gb[c]={key:a,shift:!0}));return a}function Hb(a,b,c){this.code=a;this.r=b||null;this.N=c||this.r}W(8);W(9);W(13);var Ib=W(16),Jb=W(17),Kb=W(18);W(19);W(20);W(27);W(32," ");W(33);W(34);W(35);W(36);W(37);W(38);W(39);W(40);W(44);W(45);W(46);W(48,"0",")");W(49,"1","!");W(50,"2","@");W(51,"3","#");W(52,"4","$");W(53,"5","%");W(54,"6","^");W(55,"7","&");W(56,"8","*");W(57,"9","(");
W(65,"a","A");W(66,"b","B");W(67,"c","C");W(68,"d","D");W(69,"e","E");W(70,"f","F");W(71,"g","G");W(72,"h","H");W(73,"i","I");W(74,"j","J");W(75,"k","K");W(76,"l","L");W(77,"m","M");W(78,"n","N");W(79,"o","O");W(80,"p","P");W(81,"q","Q");W(82,"r","R");W(83,"s","S");W(84,"t","T");W(85,"u","U");W(86,"v","V");W(87,"w","W");W(88,"x","X");W(89,"y","Y");W(90,"z","Z");var Lb=W(ra?{a:91,b:91,opera:219}:qa?{a:224,b:91,opera:17}:{a:0,b:91,opera:null});
W(ra?{a:92,b:92,opera:220}:qa?{a:224,b:93,opera:17}:{a:0,b:92,opera:null});W(ra?{a:93,b:93,opera:0}:qa?{a:0,b:0,opera:16}:{a:93,b:null,opera:0});W({a:96,b:96,opera:48},"0");W({a:97,b:97,opera:49},"1");W({a:98,b:98,opera:50},"2");W({a:99,b:99,opera:51},"3");W({a:100,b:100,opera:52},"4");W({a:101,b:101,opera:53},"5");W({a:102,b:102,opera:54},"6");W({a:103,b:103,opera:55},"7");W({a:104,b:104,opera:56},"8");W({a:105,b:105,opera:57},"9");W({a:106,b:106,opera:A?56:42},"*");
W({a:107,b:107,opera:A?61:43},"+");W({a:109,b:109,opera:A?109:45},"-");W({a:110,b:110,opera:A?190:78},".");W({a:111,b:111,opera:A?191:47},"/");W(A&&u?null:144);W(112);W(113);W(114);W(115);W(116);W(117);W(118);W(119);W(120);W(121);W(122);W(123);W({a:107,b:187,opera:61},"=","+");W(108,",");W({a:109,b:189,opera:109},"-","_");W(188,",","<");W(190,".",">");W(191,"/","?");W(192,"`","~");W(219,"[","{");W(220,"\\","|");W(221,"]","}");W({a:59,b:186,opera:59},";",":");W(222,"'",'"');var X=new V;X.set(1,Ib);
X.set(2,Jb);X.set(4,Kb);X.set(8,Lb);(function(a){var b=new V;q(Eb(a),function(c){b.set(a.get(c).code,c)});return b})(X);z&&wb(12);function Mb(){this.j=void 0}
function Nb(a,b,c){switch(typeof b){case "string":Ob(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if("array"==l(b)){var d=b.length;c.push("[");for(var e="",g=0;g<d;g++)c.push(e),e=b[g],Nb(a,a.j?a.j.call(b,String(g),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(g in b)Object.prototype.hasOwnProperty.call(b,g)&&(e=b[g],"function"!=typeof e&&(c.push(d),
Ob(g,c),c.push(":"),Nb(a,a.j?a.j.call(b,g,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var Pb={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Qb=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function Ob(a,b){b.push('"',a.replace(Qb,function(a){if(a in Pb)return Pb[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Pb[a]=e+b.toString(16)}),'"')};ua||u||z&&wb(3.5)||w&&wb(8);function Rb(a){switch(l(a)){case "string":case "number":case "boolean":return a;case "function":return a.toString();case "array":return ga(a,Rb);case "object":if("nodeType"in a&&(1==a.nodeType||9==a.nodeType)){var b={};b.ELEMENT=Sb(a);return b}if("document"in a)return b={},b.WINDOW=Sb(a),b;if(aa(a))return ga(a,Rb);a=Fa(a,function(a,b){return"number"==typeof b||m(b)});return Ga(a,Rb);default:return null}}
function Tb(a,b){return"array"==l(a)?ga(a,function(a){return Tb(a,b)}):ba(a)?"function"==typeof a?a:"ELEMENT"in a?Ub(a.ELEMENT,b):"WINDOW"in a?Ub(a.WINDOW,b):Ga(a,function(a){return Tb(a,b)}):a}function Vb(a){a=a||document;var b=a.$wdc_;b||(b=a.$wdc_={},b.m=ca());b.m||(b.m=ca());return b}function Sb(a){var b=Vb(a.ownerDocument),c=Ha(b,function(b){return b==a});c||(c=":wdc:"+b.m++,b[c]=a);return c}
function Ub(a,b){a=decodeURIComponent(a);var c=b||document,d=Vb(c);if(!(a in d))throw new r(10,"Element does not exist in cache");var e=d[a];if("setInterval"in e){if(e.closed)throw delete d[a],new r(23,"Window has been closed.");return e}for(var g=e;g;){if(g==c.documentElement)return e;g=g.parentNode}delete d[a];throw new r(10,"Element is no longer attached to the DOM");};function Wb(a,b){var c=[a],d=Db,e;try{var g=b?Ub(b.WINDOW):window,h=Tb(c,g.document),n=d.apply(null,h);e={status:0,value:Rb(n)}}catch(v){e={status:"code"in v?v.code:13,value:{message:v.message}}}c=[];Nb(new Mb,e,c);return c.join("")}var Y=["_"],Z=k;Y[0]in Z||!Z.execScript||Z.execScript("var "+Y[0]);for(var $;Y.length&&($=Y.shift());)Y.length||void 0===Wb?Z=Z[$]?Z[$]:Z[$]={}:Z[$]=Wb;; return this._.apply(null,arguments);}.apply({navigator:typeof window!=undefined?window.navigator:null,document:typeof window!=undefined?window.document:null}, arguments);}