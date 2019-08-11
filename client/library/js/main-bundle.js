/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\\\b'+e(c)+'\\\\b','g'),k[c])}}return p}('g M=O.2v(\\'I\\');g 14=M.3W(\\'2d\\');3C 1m=4;g 1s=0;g 1p=0;g 9=30;g 1k=1;g 3x=\\'./1n/1o/3V.3o\\';g 1C;g U=3;g 2R=2q([\\'./1n/1o/1J-D.3o\\'])[0];g l={20:{x:3*t,y:0*t},29:{x:4*t,y:1*t},2m:{x:4*t,y:0*t},2s:{x:3*t,y:1*t},2h:{x:3*t,y:2*t},2e:{x:4*t,y:3*t},2k:{x:4*t,y:2*t},2i:{x:3*t,y:3*t},D:{x:0*t,y:3*t},2f:{x:1*t,y:0*t},2u:{x:2*t,y:1*t},1W:{x:2*t,y:2*t},1E:{x:0*t,y:1*t},1B:{x:2*t,y:0*t},1A:{x:0*t,y:0*t}};g d={x:5*9,y:5*9,Q:9,R:0,C:[],16:1m};g 3X=0;g D={x:8*9,y:8*9,W:9,X:9};g F={x:-1G,y:-1G,W:9*2,X:9*2};g 3Y=2U 3Z(37,38,39,40);m 2j(){2K(1k){12 2:L 3U;12 3:L 3T;12 4:L 3P;12 5:L 3O;12 6:L 3Q;12 7:L 50;3a:L 3R}}m Z(a,b,c){L a==b&&b==c}m 3g(){L 10*1k}m 1v(26,3s){L E.3S(E.41()*(3s-26))+26}m 28(3D){3C 3v=42($(\"#V-K\").A())+3D;$(\"#V-K\").A(3v.2b())}m 3z(){$(\"#V-K\").A(0)}m 19(){L{1X:1l($(\\'#I\\').X()/9),1z:1l($(\\'#I\\').W()/9)}}m 2c(){D.x=1v(0,19().1z)*9;D.y=1v(0,19().1X)*9}m 3t(){F.x=1v(0,19().1z-1)*9;F.y=1v(0,19().1X-1)*9}m 22(){F.x=-1G;F.y=-1G}m 2w(){d={x:5*9,y:5*9,Q:9,R:0,C:[],16:1m};2c();1C=2q([3x])[0];g 3y=1Y(()=>{14.2Q(0,0,M.W,M.X);d.x+=d.Q;d.y+=d.R;d.C.2I({x:d.x,y:d.y});f(d.C.J>d.16){d.C.2F()}25();27();f((d.C.J==d.16)){1e(3y)}},0)}m 3B(){d.C.2B(m(B,S){P(g i=S+1;i<d.C.J;i++){f(B.x===d.C[i].x&&B.y===d.C[i].y){2w();3z();1b}}});g 1r=3;$(\\'#2D-A\\').A(\\'4c\\');$(\\'#Y-18\\').1x(\\'1L\\');$(\\'.I-3u\\').1x(\\'1L\\');$(\\'#Y-18\\').A((1r).2b());1s=1Y(()=>{1r-=1;f(1r==0){$(\\'#Y-18\\').A();$(\\'.Y-I\\').1V();$(\\'#I\\').2y(\\'M-2g\\');1e(1s);2J()}u{$(\\'#Y-18\\').A((1r).2b())}},49)};m 3m(){1e(1s);1e(1p);2M()}m 2J(){1s=1Y(()=>{14.2Q(0,0,M.W,M.X);d.x+=d.Q;d.y+=d.R;f(d.x<0){d.x=M.W-9}u f(d.x>=M.W){d.x=0}f(d.y<0){d.y=M.X-9}u f(d.y>=M.X){d.y=0}d.C.2I({x:d.x,y:d.y});f(d.C.J>d.16){d.C.2F()}25();33();27()},2j())}g x,i,j,1i,a,b,c;x=O.1O(\"3N-N\");P(i=0;i<x.J;i++){1i=x[i].35(\"N\")[0];a=O.21(\"1Z\");a.2o(\"1a\",\"N-1y\");a.15=1i.2a[1i.36].15;x[i].2n(a);b=O.21(\"1Z\");b.2o(\"1a\",\"N-3j N-1V\");P(j=1;j<1i.J;j++){c=O.21(\"1Z\");c.15=1i.2a[j].15;c.1I(\"T\",m(e){g y,i,k,s,h;s=13.1N.1N.35(\"N\")[0];h=13.1N.44;P(i=0;i<s.J;i++){f(s.2a[i].15==13.15){s.36=i;h.15=13.15;y=13.1N.1O(\"2W-2S-1y\");P(k=0;k<y.J;k++){y[k].47(\"1a\")}13.2o(\"1a\",\"2W-2S-1y\");1b}}h.T()});b.2n(c)}x[i].2n(b);a.1I(\"T\",m(e){e.3K();2C(13);13.3L.1M.34(\"N-1V\");13.1M.34(\"N-3f-3k\")})}m 2C(3G){g x,y,i,2l=[];x=O.1O(\"N-3j\");y=O.1O(\"N-1y\");P(i=0;i<y.J;i++){f(3G==y[i]){2l.3J(i)}u{y[i].1M.3M(\"N-3f-3k\")}}P(i=0;i<x.J;i++){f(2l.3I(i)){x[i].1M.4s(\"N-1V\")}}1k=1l(O.2v(\\'1k-N\\').3q)}m 3h(){g H=23;g 3i=2j();$(\\'.1D-I\\').1u(\\'1P\\',\\'4M\\');1p=1Y(m(){H=H-2;$(\\'[3r=\"3l\"]\\').H(H);$(\\'[3r=\"3l\"]\\').1u(\\'4P\\',\\'4T-4S(-\\'+H+\\'4R)\\');$(\\'#1J-D-K\\').A(1l(H*3g()/23));f(H<=0){1e(1p);22();$(\\'.1D-I\\').1u(\\'1P\\',\\'2A\\')}},3i)};O.1I(\\'4g\\',m(e){f(e.1T===37&&d.Q===0&&d.R!=0){d.Q=-9;d.R=0}u f(e.1T===38&&d.R===0&&d.Q!=0){d.R=-9;d.Q=0}u f(e.1T===39&&d.Q===0&&d.R!=0){d.Q=9;d.R=0}u f(e.1T===40&&d.R===0&&d.Q!=0){d.R=9;d.Q=0}});m 2q(1Q){2t=0;2X=1Q.J;2Y=4L;g 24=[];P(g i=0;i<1Q.J;i++){g 1U=2U 4N();1U.4O=m(){2t++;f(2t==2X){2Y=4W}};1U.1R=1Q[i];24[i]=1U}L 24}m 25(){g U=2;g 1q=U*9;P(g c=0;c<19().1z/U;c++){P(g r=0;r<19().1X/U;r++){14.51=(c+r)%2==0?\"#4X\":\"#52\";14.4Z(c*1q,r*1q,1q,1q)}}}m 33(){14.2r(1C,l.D.x,l.D.y,t,t,D.x,D.y,9,9);f(F.x>=0&&F.y>=0){U=U==3?0:3;14.2r(2R,0,0,3c,3c,F.x+U,F.y+U,F.W-2*U,F.X-2*U)}}m 27(){d.C.2B(m(B,S){B.z={x:B.x+9/2,y:B.y+9/2};g x=B.z.x;g y=B.z.y;g 1c=d.C[S-1],1d=d.C[S+1];g v=l.D;f(S==0&&1d){g o=1d.z.x;g q=1d.z.y;f(y<q){v=q-y==9?l.20:l.29}u f(x>o){v=x-o==9?l.2m:l.2s}u f(y>q){v=y-q==9?l.29:l.20}u f(x<o){v=o-x==9?l.2s:l.2m}}u f(S==d.C.J-1&&1c){g p=1c.z.x;g n=1c.z.y;f(n<y){v=y-n==9?l.2h:l.2e}u f(p>x){v=p-x==9?l.2k:l.2i}u f(n>y){v=n-y==9?l.2e:l.2h}u f(p<x){v=x-p==9?l.2i:l.2k}}u f(1c&&1d){g p=1c.z.x;g n=1c.z.y;g o=1d.z.x;g q=1d.z.y;f(p<x&&o>x||o<x&&p>x){v=l.2f}u f(n<y&&q>y||q<y&&n>y){v=l.2u}u f((p<x&&q>y&&Z(x-p,q-y,9))||(o<x&&n>y&&Z(x-o,n-y,9))){v=l.1B}u f((p<x&&q>y||o<x&&n>y)&&(E.G(n-y)>9||E.G(q-y)>9)){v=l.1W}u f((p<x&&q>y||o<x&&n>y)&&(E.G(x-o)>9||E.G(x-p)>9)){v=l.1A}u f((n<y&&o<x||q<y&&p<x)&&(Z(y-n,x-o,9)||Z(y-q,x-p,9))){v=l.1W}u f((n<y&&o<x||q<y&&p<x)&&(E.G(y-q)>9||E.G(y-n)>9)){v=l.1B}u f((n<y&&o<x||q<y&&p<x)&&(E.G(x-o)>9||E.G(x-p>9))){v=l.1E}u f((p>x&&q<y||o>x&&n<y)&&(Z(p-x,y-q,9)||Z(o-x,y-n,9))){v=l.1E}u f((p>x&&q<y||o>x&&n<y)&&(E.G(p-x)>9||E.G(o-x)>9)){v=l.1W}u f((p>x&&q<y||o>x&&n<y)&&(E.G(y-n)>9||E.G(y-q)>9)){v=l.1A}u f((n>y&&o>x||q>y&&p>x)&&(Z(n-y,o-x,9)||Z(q-y,p-x,9))){v=l.1A}u f((n>y&&o>x||q>y&&p>x)&&(E.G(p-x)>9||E.G(o-x)>9)){v=l.1B}u f((n>y&&o>x||q>y&&p>x)&&(E.G(q-y)>9||E.G(n-y)>9)){v=l.1E}u f(p>o&&o>x||x>p&&p>o||o>p&&p>x||x>o&&o>p){v=l.2f}u f(n>q&&q>y||y>n&&n>q||q>n&&n>y||y>q&&q>n){v=l.2u}}14.2r(1C,v.x,v.y,t,t,B.x,B.y,9,9);f(D.x<=B.z.x&&B.z.x<=D.x+D.W&&D.y<=B.z.y&&B.z.y<=D.y+D.X){d.16++;2c();28(1k);f(((d.16-1m)!=0)&&((d.16-1m)%5==0)){3t();3h()}}f(F.x<=B.z.x&&B.z.x<=F.x+F.W&&F.y<=B.z.y&&B.z.y<=F.y+F.X){22();1e(1p);$(\\'.1D-I\\').1u(\\'1P\\',\\'2A\\');$(\\'#1J-D-4w\\').3q=23;28(1l($(\\'#1J-D-K\\').A()))}f(S==0){P(g i=S+1;i<d.C.J;i++){f(B.z.x===d.C[i].z.x&&B.z.y===d.C[i].z.y){3m();1b}}}})}$(\"#2P-w\").3F(m(1F){1F.3E();f($(\"#1K-w\").H()){g w=$(\"#1K-w\").H().4A(\\' \\')[0];$(\"#1w-4B\").4z(\\'<3e><a 4y=\"#\" 4x=\"3d()\" 4C=\"V-w\">\\'+w+\\'</a></3e>\\');$(\"#1K-w\").H(\"\");2H();L}$(\"#1K-w-2D\").A(\"4D 3w 4I 4H\").3p().4G(4E)});$(\\'#4F-11\\').3F(1F=>{1F.3E();f(($(\\'#11-1S\\').H()!=3H&&$(\\'#11-1S\\').H()!=\"\")&&($(\"#V-w\").A()!=3H&&$(\"#V-w\").A()!=\"\")){$.2N(\\'/11\\',{w:$(\"#V-w\").A(),4v:$(\\'#11-1S\\').H()},2V())}u{3A(\\'3w 2G w 4u 11 4m 4k 11!\\')}});m 32(){f(O.2v(\\'V-w\\')){3B()}u{3d()}}m 2p(1t){$(\"#31-2Z\").4h();4i.4n(1t)[\\'1t\\'].2B((17,S)=>{g 1g=S+1;2K(1g){12 1:1g=\\'<1h 1a=\"1j\" 1R=\"./1n/1o/4o-1j.2z\" 2E=\"\"></1h>\\';$(\"#4t-2x-w\").A(17.w);$(\"#4K-K\").A(17.K);1b;12 2:1g=\\'<1h 1a=\"1j\" 1R=\"./1n/1o/4r-1j.2z\" 2E=\"\"></1h>\\';$(\"#4p-2x-w\").A(17.w);1b;12 3:1g=\\'<1h 1a=\"1j\" 1R=\"./1n/1o/4q-1j.2z\" 2E=\"\"></1h>\\';$(\"#4J-2x-w\").A(17.w);1b;3a:1b}$(\"#31-2Z\").53(\\'<2T> \\'+\\'<1f>\\'+1g+\\'</1f>\\'+\\'<1f>\\'+17.w+\\'</1f>\\'+\\'<1f>\\'+17.K+\\'</1f>\\'+\\'</2T>\")\\')})}m 3b(1t,4V){2p(1t)}m 2V(){3A(\\'4Q 4U P 2G 11 ☺\\');$(\\'#11-1S\\').H(\"\")}m 2M(){$(\\'.Y-I\\').3p();$(\\'#Y-18\\').A(\\'4Y 3n\\');$(\\'#2D-A\\').A(\\'3n 48\\');$(\\'#I\\').1x(\\'M-2g\\');$(\\'.1D-I\\').1u(\\'1P\\',\\'2A\\');$(\\'#Y-18\\').2y(\\'1L\\');$(\\'.I-3u\\').2y(\\'1L\\');$.2N(\\'/V-K\\',{w:$(\\'#V-w\\').A(),K:1l($(\"#V-K\").A())},3b)}m 2L(){$(\\'#2O-4f\\').T(()=>{46()});$(\\'#1w-45\\').T(()=>{43()});$(\\'#Y-18\\').T(()=>{32()});$(\\'#1H-2P-w\\').T(()=>{2H()});$(\\'#1H-2O\\').T(()=>{4e()});$(\\'#1H-4d\\').T(()=>{4a()});$(\\'#1H-1w-K\\').T(()=>{4b()});O.1I(\"T\",2C)}$(O).4l(m(){2L();2w();$(\\'#I\\').1x(\\'M-2g\\');$.4j(\\'/1w-K\\',2p)})',62,314,'|||||||||grid||||snake||if|var|||||partImage|function|prevSegmentY|nextSegmentX|prevSegmentX|nextSegmentY|||64|else|segmentType|name|||center|text|cell|cells|apple|Math|bigApple|abs|val|game|length|score|return|canvas|select|document|for|dx|dy|index|click|scale|user|width|height|start|allEqual||feedback|case|this|context|innerHTML|maxCells|item|button|rowColNumber|class|break|prevSegment|nextSegment|clearInterval|td|rank|img|selElmnt|medal|level|parseInt|defaultLength|library|images|bigAppleTimer|size|time|gameTimer|data|css|getRandomInt|top|addClass|selected|col|botRight|botLeft|snakeImage|option|topRight|event|1000|close|addEventListener|big|input|disabled|classList|parentNode|getElementsByClassName|visibility|imagefiles|src|area|which|image|hide|topLeft|row|setInterval|DIV|headUp|createElement|hideBigApple|100|loadedimages|drawBackground|min|drawSnake|inscreateScore|headDown|options|toString|newApple||tailDown|horiBody|blur|tailUp|tailLeft|speedFromLevel|tailRight|arrNo|headRight|appendChild|setAttribute|fillTopScore|loadImages|drawImage|headLeft|loadcount|vetiBody|getElementById|resetSnake|place|removeClass|svg|hidden|forEach|closeAllSelect|noti|alt|pop|your|closeEnterNameNav|unshift|startGame|switch|addListener|gameOver|post|contact|enter|clearRect|bigAppleImage|as|tr|new|sendFeedback|same|loadtotal|preloaded|body||table|startDidTouch|drawApple|toggle|getElementsByTagName|selectedIndex||||default|postScore|128|openEnterNameNav|li|arrow|bigAppleScoreFromLevel|countDownBigAppleScore|speed|items|active|range|snakeDeath|Game|png|show|value|type|max|newBigApple|control|newScore|Enter|nameImage|resetTimer|resetScore|alert|countDown|const|addingScore|preventDefault|submit|elmnt|null|indexOf|push|stopPropagation|nextSibling|remove|custom|75|90|60|135|floor|105|120|yellow|getContext|count|ar|Array||random|Number|openTopScoreNav|previousSibling|scores|openContactNav|removeAttribute|Over|850|closeLoginNav|closeTopScoreNav|Ready|login|closeContactNav|nav|keydown|empty|JSON|get|send|ready|to|parse|gold|second|brone|silver|add|first|and|content|countdown|onclick|href|prepend|split|navigation|id|Please|3000|form|fadeOut|Name|Your|third|best|false|visible|Image|onload|filter|Thank|deg|rotate|hue|you|status|true|d3eec0|New|fillRect||fillStyle|94dad7|append'.split('|'),0,{}))\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });