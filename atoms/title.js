function(){return function(){var b=this;
function f(a){var d=typeof a;if("object"==d)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return d;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
d&&"undefined"==typeof a.call)return"object";return d};var g=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function k(a,d){for(var c=0,e=g(String(a)).split("."),h=g(String(d)).split("."),n=Math.max(e.length,h.length),G=0;0==c&&G<n;G++){var ta=e[G]||"",ua=h[G]||"",va=RegExp("(\\d*)(\\D*)","g"),wa=RegExp("(\\d*)(\\D*)","g");do{var y=va.exec(ta)||["","",""],z=wa.exec(ua)||["","",""];if(0==y[0].length&&0==z[0].length)break;c=l(0==y[1].length?0:parseInt(y[1],10),0==z[1].length?0:parseInt(z[1],10))||l(0==y[2].length,0==z[2].length)||l(y[2],z[2])}while(0==c)}return c}function l(a,d){return a<d?-1:a>d?1:0};function aa(a,d){for(var c=a.length,e="string"==typeof a?a.split(""):a,h=0;h<c;h++)h in e&&d.call(void 0,e[h],h,a)};var m;a:{var p=b.navigator;if(p){var q=p.userAgent;if(q){m=q;break a}}m=""}function r(a){return-1!=m.indexOf(a)};function ba(a){var d=arguments.length;if(1==d&&"array"==f(arguments[0]))return ba.apply(null,arguments[0]);for(var c={},e=0;e<d;e++)c[arguments[e]]=!0;return c};function t(){return r("Opera")||r("OPR")}function u(){return r("Edge")||r("Trident")||r("MSIE")}function v(){return(r("Chrome")||r("CriOS"))&&!t()&&!u()};function w(){return r("Edge")};function x(){return r("iPhone")&&!r("iPod")&&!r("iPad")};var ca=t(),A=u(),B=r("Gecko")&&!(-1!=m.toLowerCase().indexOf("webkit")&&!w())&&!(r("Trident")||r("MSIE"))&&!w(),C=-1!=m.toLowerCase().indexOf("webkit")&&!w(),D=r("Macintosh"),E=r("Windows");function da(){var a=m;if(B)return/rv\:([^\);]+)(\)|;)/.exec(a);if(A&&w())return/Edge\/([\d\.]+)/.exec(a);if(A)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(C)return/WebKit\/(\S+)/.exec(a)}function ea(){var a=b.document;return a?a.documentMode:void 0}
var F=function(){if(ca&&b.opera){var a=b.opera.version;return"function"==f(a)?a():a}var a="",d=da();d&&(a=d?d[1]:"");return A&&!w()&&(d=ea(),d>parseFloat(a))?String(d):a}(),fa={};function H(a){return fa[a]||(fa[a]=0<=k(F,a))}var ga=b.document,ha=ea(),ia=!ga||!A||!ha&&w()?void 0:ha||("CSS1Compat"==ga.compatMode?parseInt(F,10):5);!B&&!A||A&&A&&(w()||9<=ia)||B&&H("1.9.1");A&&H("9");ba("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));var ja=r("Firefox"),ka=x()||r("iPod"),la=r("iPad"),I=r("Android")&&!(v()||r("Firefox")||t()||r("Silk")),ma=v(),na=r("Safari")&&!(v()||r("Coast")||t()||u()||r("Silk")||r("Android"))&&!(x()||r("iPad")||r("iPod"));function oa(a){this.f=a}oa.prototype.toString=function(){return this.f};var pa={};function J(a){if(pa.hasOwnProperty(a))throw Error("Binary operator already created: "+a);a=new oa(a);pa[a.toString()]=a}J("div");J("mod");J("*");J("+");J("-");J("<");J(">");J("<=");J(">=");J("=");J("!=");J("and");J("or");function qa(a){this.f=a}qa.prototype.toString=function(){return this.f};var ra={};function K(a){if(ra.hasOwnProperty(a))throw Error("Function already created: "+a+".");ra[a]=new qa(a)}K("boolean");K("ceiling");K("concat");K("contains");K("count");K("false");K("floor");K("id");K("lang");K("last");K("local-name");K("name");K("namespace-uri");K("normalize-space");K("not");K("number");K("position");K("round");K("starts-with");K("string");K("string-length");K("substring");K("substring-after");K("substring-before");
K("sum");K("translate");K("true");function sa(a){this.f=a}sa.prototype.toString=function(){return this.f};var xa={};function L(a){if(xa.hasOwnProperty(a))throw Error("Axis already created: "+a);xa[a]=new sa(a)}L("ancestor");L("ancestor-or-self");L("attribute");L("child");L("descendant");L("descendant-or-self");L("following");L("following-sibling");L("namespace");L("parent");L("preceding");L("preceding-sibling");L("self");function M(a){return(a=a.exec(m))?a[1]:""}var ya=function(){if(ja)return M(/Firefox\/([0-9.]+)/);if(A||ca)return F;if(ma)return M(/Chrome\/([0-9.]+)/);if(na&&!(x()||r("iPad")||r("iPod")))return M(/Version\/([0-9.]+)/);if(ka||la){var a;if(a=/Version\/(\S+).*Mobile\/(\S+)/.exec(m))return a[1]+"."+a[2]}else if(I)return(a=M(/Android\s+([0-9.]+)/))?a:M(/Version\/([0-9.]+)/);return""}();var za,Aa;function N(a){return O?za(a):A?0<=k(ia,a):H(a)}function P(a){O?Aa(a):I?k(Ba,a):k(ya,a)}
var O=function(){if(!B)return!1;var a=b.Components;if(!a)return!1;try{if(!a.classes)return!1}catch(d){return!1}var c=a.classes,a=a.interfaces,e=c["@mozilla.org/xpcom/version-comparator;1"].getService(a.nsIVersionComparator),c=c["@mozilla.org/xre/app-info;1"].getService(a.nsIXULAppInfo),h=c.platformVersion,n=c.version;za=function(a){return 0<=e.compare(h,""+a)};Aa=function(a){e.compare(n,""+a)};return!0}(),Q;if(I){var Ca=/Android\s+([0-9\.]+)/.exec(m);Q=Ca?Ca[1]:"0"}else Q="0";var Ba=Q;I&&P(2.3);
I&&P(4);na&&P(6);A&&H(12);C||O&&P(3.6);A&&N(10);I&&P(4);function R(a,d){this.g={};this.c=[];this.h=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var e=0;e<c;e+=2)S(this,arguments[e],arguments[e+1])}else if(a){var h;if(a instanceof R)for(e=T(a),Da(a),h=[],c=0;c<a.c.length;c++)h.push(a.g[a.c[c]]);else{var c=[],n=0;for(e in a)c[n++]=e;e=c;c=[];n=0;for(h in a)c[n++]=a[h];h=c}for(c=0;c<e.length;c++)S(this,e[c],h[c])}}function T(a){Da(a);return a.c.concat()}
R.prototype.clear=function(){this.g={};this.h=this.f=this.c.length=0};function Da(a){if(a.f!=a.c.length){for(var d=0,c=0;d<a.c.length;){var e=a.c[d];Object.prototype.hasOwnProperty.call(a.g,e)&&(a.c[c++]=e);d++}a.c.length=c}if(a.f!=a.c.length){for(var h={},c=d=0;d<a.c.length;)e=a.c[d],Object.prototype.hasOwnProperty.call(h,e)||(a.c[c++]=e,h[e]=1),d++;a.c.length=c}}R.prototype.get=function(a,d){return Object.prototype.hasOwnProperty.call(this.g,a)?this.g[a]:d};
function S(a,d,c){Object.prototype.hasOwnProperty.call(a.g,d)||(a.f++,a.c.push(d),a.h++);a.g[d]=c}R.prototype.forEach=function(a,d){for(var c=T(this),e=0;e<c.length;e++){var h=c[e],n=this.get(h);a.call(d,n,h,this)}};R.prototype.clone=function(){return new R(this)};var U={};function V(a,d,c){var e=typeof a;("object"==e&&null!=a||"function"==e)&&(a=B?a.a:a.b);a=new Ea(a);!d||d in U&&!c||(U[d]={key:a,shift:!1},c&&(U[c]={key:a,shift:!0}));return a}function Ea(a){this.code=a}V(8);V(9);V(13);var Fa=V(16),Ga=V(17),Ha=V(18);V(19);V(20);V(27);V(32," ");V(33);V(34);V(35);V(36);V(37);V(38);V(39);V(40);V(44);V(45);V(46);V(48,"0",")");V(49,"1","!");V(50,"2","@");V(51,"3","#");V(52,"4","$");V(53,"5","%");V(54,"6","^");V(55,"7","&");V(56,"8","*");V(57,"9","(");V(65,"a","A");
V(66,"b","B");V(67,"c","C");V(68,"d","D");V(69,"e","E");V(70,"f","F");V(71,"g","G");V(72,"h","H");V(73,"i","I");V(74,"j","J");V(75,"k","K");V(76,"l","L");V(77,"m","M");V(78,"n","N");V(79,"o","O");V(80,"p","P");V(81,"q","Q");V(82,"r","R");V(83,"s","S");V(84,"t","T");V(85,"u","U");V(86,"v","V");V(87,"w","W");V(88,"x","X");V(89,"y","Y");V(90,"z","Z");var Ia=V(E?{a:91,b:91}:D?{a:224,b:91}:{a:0,b:91});V(E?{a:92,b:92}:D?{a:224,b:93}:{a:0,b:92});V(E?{a:93,b:93}:D?{a:0,b:0}:{a:93,b:null});V({a:96,b:96},"0");
V({a:97,b:97},"1");V({a:98,b:98},"2");V({a:99,b:99},"3");V({a:100,b:100},"4");V({a:101,b:101},"5");V({a:102,b:102},"6");V({a:103,b:103},"7");V({a:104,b:104},"8");V({a:105,b:105},"9");V({a:106,b:106},"*");V({a:107,b:107},"+");V({a:109,b:109},"-");V({a:110,b:110},".");V({a:111,b:111},"/");V(144);V(112);V(113);V(114);V(115);V(116);V(117);V(118);V(119);V(120);V(121);V(122);V(123);V({a:107,b:187},"=","+");V(108,",");V({a:109,b:189},"-","_");V(188,",","<");V(190,".",">");V(191,"/","?");V(192,"`","~");
V(219,"[","{");V(220,"\\","|");V(221,"]","}");V({a:59,b:186},";",":");V(222,"'",'"');var W=new R;S(W,1,Fa);S(W,2,Ga);S(W,4,Ha);S(W,8,Ia);(function(a){var d=new R;aa(T(a),function(c){S(d,a.get(c).code,c)});return d})(W);B&&N(12);C||B&&N(3.5)||A&&N(8);function Ja(){return JSON.stringify({status:0,value:document.title})}var X=["_"],Y=b;X[0]in Y||!Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===Ja?Y[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=Ja;; return this._.apply(null,arguments);}.apply({navigator:typeof window!=undefined?window.navigator:null,document:typeof window!=undefined?window.document:null}, arguments);}
