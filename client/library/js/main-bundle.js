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

eval("eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\\\b'+e(c)+'\\\\b','g'),k[c])}}return p}('g L=R.2w(\\'I\\');g 16=L.47(\\'2d\\');2I 1m=4;g 1s=0;g 1p=0;g 9=30;g 1l=1;g 32=\\'./1o/1n/48.2V\\';g 1P;g S=3;g 3j=2u([\\'./1o/1n/1G-D.2V\\'])[0];g l={2t:{x:3*t,y:0*t},20:{x:4*t,y:1*t},2m:{x:4*t,y:0*t},2n:{x:3*t,y:1*t},2i:{x:3*t,y:2*t},2f:{x:4*t,y:3*t},2l:{x:4*t,y:2*t},2j:{x:3*t,y:3*t},D:{x:0*t,y:3*t},2g:{x:1*t,y:0*t},2v:{x:2*t,y:1*t},1N:{x:2*t,y:2*t},1Q:{x:0*t,y:1*t},1B:{x:2*t,y:0*t},1A:{x:0*t,y:0*t}};g d={x:5*9,y:5*9,Q:9,O:0,C:[],15:1m};g 49=0;g D={x:8*9,y:8*9,X:9,W:9};g F={x:-1H,y:-1H,X:9*2,W:9*2};g 4a=2P 46(37,38,39,40);m 2k(){3u(1l){Y 2:M 45;Y 3:M 41;Y 4:M 3Z;Y 5:M 42;Y 6:M 43;Y 7:M 50;2S:M 44}}m Z(a,b,c){M a==b&&b==c}m 2G(){M 10*1l}m 1v(27,2U){M E.4b(E.4c()*(2U-27))+27}m 29(2O){2I 2M=4l($(\"#V-N\").A())+2O;$(\"#V-N\").A(2M.2c())}m 3s(){$(\"#V-N\").A(0)}m 1d(){M{1X:1j($(\\'#I\\').W()/9),1z:1j($(\\'#I\\').X()/9)}}m 2e(){D.x=1v(0,1d().1z)*9;D.y=1v(0,1d().1X)*9}m 3y(){F.x=1v(0,1d().1z-1)*9;F.y=1v(0,1d().1X-1)*9}m 24(){F.x=-1H;F.y=-1H}m 2x(){d={x:5*9,y:5*9,Q:9,O:0,C:[],15:1m};2e();1P=2u([32])[0];g 3q=1U(()=>{16.3f(0,0,L.X,L.W);d.x+=d.Q;d.y+=d.O;d.C.3g({x:d.x,y:d.y});f(d.C.J>d.15){d.C.3c()}26();2a();f((d.C.J==d.15)){1h(3q)}},0)}m 3x(){d.C.2z(m(B,U){P(g i=U+1;i<d.C.J;i++){f(B.x===d.C[i].x&&B.y===d.C[i].y){2x();3s();17}}});g 1r=3;$(\\'#2y-A\\').A(\\'4d\\');$(\\'#13-18\\').1y(\\'1M\\');$(\\'.I-3n\\').1y(\\'1M\\');$(\\'#13-18\\').A((1r).2c());1s=1U(()=>{1r-=1;f(1r==0){$(\\'#13-18\\').A();$(\\'.13-I\\').1Y();$(\\'#I\\').2D(\\'L-2h\\');1h(1s);3d()}u{$(\\'#13-18\\').A((1r).2c())}},4g)};m 3E(){1h(1s);1h(1p);2L()}m 3d(){1s=1U(()=>{16.3f(0,0,L.X,L.W);d.x+=d.Q;d.y+=d.O;f(d.x<0){d.x=L.X-9}u f(d.x>=L.X){d.x=0}f(d.y<0){d.y=L.W-9}u f(d.y>=L.W){d.y=0}d.C.3g({x:d.x,y:d.y});f(d.C.J>d.15){d.C.3c()}26();2T();2a()},2k())}g x,i,j,1i,a,b,c;x=R.1C(\"3M-K\");P(i=0;i<x.J;i++){1i=x[i].36(\"K\")[0];a=R.22(\"21\");a.2p(\"1a\",\"K-1x\");a.14=1i.2b[1i.3a].14;x[i].2o(a);b=R.22(\"21\");b.2p(\"1a\",\"K-3o K-1Y\");P(j=1;j<1i.J;j++){c=R.22(\"21\");c.14=1i.2b[j].14;c.1J(\"T\",m(e){g y,i,k,s,h;s=12.1L.1L.36(\"K\")[0];h=12.1L.3O;P(i=0;i<s.J;i++){f(s.2b[i].14==12.14){s.3a=i;h.14=12.14;y=12.1L.1C(\"3h-3i-1x\");P(k=0;k<y.J;k++){y[k].3X(\"1a\")}12.2p(\"1a\",\"3h-3i-1x\");17}}h.T()});b.2o(c)}x[i].2o(b);a.1J(\"T\",m(e){e.4p();2F(12);12.3J.1Z.3r(\"K-1Y\");12.1Z.3r(\"K-3l-3m\")})}m 2F(3k){g x,y,i,2q=[];x=R.1C(\"K-3o\");y=R.1C(\"K-1x\");P(i=0;i<y.J;i++){f(3k==y[i]){2q.53(i)}u{y[i].1Z.51(\"K-3l-3m\")}}P(i=0;i<x.J;i++){f(2q.4T(i)){x[i].1Z.4W(\"K-1Y\")}}1l=1j(R.2w(\\'1l-K\\').3v)}m 3C(){g H=25;g 3t=2k();$(\\'.1D-I\\').1t(\\'1E\\',\\'4N\\');1p=1U(m(){H=H-2;$(\\'[2Q=\"2K\"]\\').H(H);$(\\'[2Q=\"2K\"]\\').1t(\\'4Y\\',\\'4X-4Z(-\\'+H+\\'4V)\\');$(\\'#1G-D-N\\').A(1j(H*2G()/25));f(H<=0){1h(1p);24();$(\\'.1D-I\\').1t(\\'1E\\',\\'2E\\')}},3t)};R.1J(\\'4w\\',m(e){f(e.1R===37&&d.Q===0&&d.O!=0){d.Q=-9;d.O=0}u f(e.1R===38&&d.O===0&&d.Q!=0){d.O=-9;d.Q=0}u f(e.1R===39&&d.Q===0&&d.O!=0){d.Q=9;d.O=0}u f(e.1R===40&&d.O===0&&d.Q!=0){d.O=9;d.Q=0}});m 2u(1S){23=0;2Y=1S.J;2Z=4v;g 28=[];P(g i=0;i<1S.J;i++){g 1W=2P 4u();1W.4q=m(){23++;f(23==2Y){2Z=4t}};1W.1T=1S[i];28[i]=1W}M 28}m 26(){g S=2;g 1q=S*9;P(g c=0;c<1d().1z/S;c++){P(g r=0;r<1d().1X/S;r++){16.4H=(c+r)%2==0?\"#4G\":\"#4C\";16.4D(c*1q,r*1q,1q,1q)}}}m 2T(){16.2s(1P,l.D.x,l.D.y,t,t,D.x,D.y,9,9);f(F.x>=0&&F.y>=0){S=S==3?0:3;16.2s(3j,0,0,3H,3H,F.x+S,F.y+S,F.X-2*S,F.W-2*S)}}m 2a(){d.C.2z(m(B,U){B.z={x:B.x+9/2,y:B.y+9/2};g x=B.z.x;g y=B.z.y;g 1b=d.C[U-1],1c=d.C[U+1];g v=l.D;f(U==0&&1c){g o=1c.z.x;g q=1c.z.y;f(y<q){v=q-y==9?l.2t:l.20}u f(x>o){v=x-o==9?l.2m:l.2n}u f(y>q){v=y-q==9?l.20:l.2t}u f(x<o){v=o-x==9?l.2n:l.2m}}u f(U==d.C.J-1&&1b){g p=1b.z.x;g n=1b.z.y;f(n<y){v=y-n==9?l.2i:l.2f}u f(p>x){v=p-x==9?l.2l:l.2j}u f(n>y){v=n-y==9?l.2f:l.2i}u f(p<x){v=x-p==9?l.2j:l.2l}}u f(1b&&1c){g p=1b.z.x;g n=1b.z.y;g o=1c.z.x;g q=1c.z.y;f(p<x&&o>x||o<x&&p>x){v=l.2g}u f(n<y&&q>y||q<y&&n>y){v=l.2v}u f((p<x&&q>y&&Z(x-p,q-y,9))||(o<x&&n>y&&Z(x-o,n-y,9))){v=l.1B}u f((p<x&&q>y||o<x&&n>y)&&(E.G(n-y)>9||E.G(q-y)>9)){v=l.1N}u f((p<x&&q>y||o<x&&n>y)&&(E.G(x-o)>9||E.G(x-p)>9)){v=l.1A}u f((n<y&&o<x||q<y&&p<x)&&(Z(y-n,x-o,9)||Z(y-q,x-p,9))){v=l.1N}u f((n<y&&o<x||q<y&&p<x)&&(E.G(y-q)>9||E.G(y-n)>9)){v=l.1B}u f((n<y&&o<x||q<y&&p<x)&&(E.G(x-o)>9||E.G(x-p>9))){v=l.1Q}u f((p>x&&q<y||o>x&&n<y)&&(Z(p-x,y-q,9)||Z(o-x,y-n,9))){v=l.1Q}u f((p>x&&q<y||o>x&&n<y)&&(E.G(p-x)>9||E.G(o-x)>9)){v=l.1N}u f((p>x&&q<y||o>x&&n<y)&&(E.G(y-n)>9||E.G(y-q)>9)){v=l.1A}u f((n>y&&o>x||q>y&&p>x)&&(Z(n-y,o-x,9)||Z(q-y,p-x,9))){v=l.1A}u f((n>y&&o>x||q>y&&p>x)&&(E.G(p-x)>9||E.G(o-x)>9)){v=l.1B}u f((n>y&&o>x||q>y&&p>x)&&(E.G(q-y)>9||E.G(n-y)>9)){v=l.1Q}u f(p>o&&o>x||x>p&&p>o||o>p&&p>x||x>o&&o>p){v=l.2g}u f(n>q&&q>y||y>n&&n>q||q>n&&n>y||y>q&&q>n){v=l.2v}}16.2s(1P,v.x,v.y,t,t,B.x,B.y,9,9);f(D.x<=B.z.x&&B.z.x<=D.x+D.X&&D.y<=B.z.y&&B.z.y<=D.y+D.W){d.15++;2e();29(1l);f(((d.15-1m)!=0)&&((d.15-1m)%5==0)){3y();3C()}}f(F.x<=B.z.x&&B.z.x<=F.x+F.X&&F.y<=B.z.y&&B.z.y<=F.y+F.W){24();1h(1p);$(\\'.1D-I\\').1t(\\'1E\\',\\'2E\\');$(\\'#1G-D-4e\\').3v=25;29(1j($(\\'#1G-D-N\\').A()))}f(U==0){P(g i=U+1;i<d.C.J;i++){f(B.z.x===d.C[i].z.x&&B.z.y===d.C[i].z.y){3E();17}}}})}$(\"#34-w\").3F(m(1F){1F.3G();f($(\"#1K-w\").H()){g w=$(\"#1K-w\").H().4k(\\' \\')[0];$(\"#1w-4m\").4i(\\'<3A><a 4h=\"#\" 4o=\"3w()\" 3P=\"V-w\">\\'+w+\\'</a></3A>\\');$(\"#1K-w\").H(\"\");3b();M}$(\"#1K-w-2y\").A(\"3L 3I 3V 3S\").2N().3T(3N)});$(\\'#3K-11\\').3F(1F=>{1F.3G();f(($(\\'#11-1V\\').H()!=3B&&$(\\'#11-1V\\').H()!=\"\")&&($(\"#V-w\").A()!=3B&&$(\"#V-w\").A()!=\"\")){$.1O(\\'/1O-11\\',{w:$(\"#V-w\").A(),4y:$(\\'#11-1V\\').H()},2R())}u{2J(\\'3I 2H w 4Q 11 4U 4S 11!\\')}});m 35(){f(R.2w(\\'V-w\\')){3x()}u{3w()}}m 2r(1u){$(\"#2W-2X\").4P();4L.4x(1u)[\\'1u\\'].2z((19,U)=>{g 1g=U+1;3u(1g){Y 1:1g=\\'<1e 1a=\"1k\" 1T=\"./1o/1n/4r-1k.2C\" 2B=\"\"></1e>\\';$(\"#4s-2A-w\").A(19.w);$(\"#4B-N\").A(19.N);17;Y 2:1g=\\'<1e 1a=\"1k\" 1T=\"./1o/1n/4J-1k.2C\" 2B=\"\"></1e>\\';$(\"#4K-2A-w\").A(19.w);17;Y 3:1g=\\'<1e 1a=\"1k\" 1T=\"./1o/1n/4F-1k.2C\" 2B=\"\"></1e>\\';$(\"#4E-2A-w\").A(19.w);17;2S:17}$(\"#2W-2X\").4I(\\'<31> \\'+\\'<1f>\\'+1g+\\'</1f>\\'+\\'<1f>\\'+19.w+\\'</1f>\\'+\\'<1f>\\'+19.N+\\'</1f>\\'+\\'</31>\")\\')})}m 3p(1u,4A){2r(1u)}m 2R(){2J(\\'4z 4M P 2H 11 ☺\\');$(\\'#11-1V\\').H(\"\")}m 2L(){$(\\'.13-I\\').2N();$(\\'#13-18\\').A(\\'4R 33\\');$(\\'#2y-A\\').A(\\'33 4O\\');$(\\'#I\\').1y(\\'L-2h\\');$(\\'.1D-I\\').1t(\\'1E\\',\\'2E\\');$(\\'#13-18\\').2D(\\'1M\\');$(\\'.I-3n\\').2D(\\'1M\\');$.1O(\\'/1O-V-N\\',{w:$(\\'#V-w\\').A(),N:1j($(\"#V-N\").A())},3p)}m 3z(){$(\\'#3e-3R\\').T(()=>{3Q()});$(\\'#1w-3W\\').T(()=>{3U()});$(\\'#13-18\\').T(()=>{35()});$(\\'#1I-34-w\\').T(()=>{3b()});$(\\'#1I-3e\\').T(()=>{3Y()});$(\\'#1I-4f\\').T(()=>{4j()});$(\\'#1I-1w-N\\').T(()=>{4n()});R.1J(\"T\",2F)}$(R).52(m(){3z();2x();$(\\'#I\\').1y(\\'L-2h\\');$.3D(\\'/3D-1w-N\\',2r)})',62,314,'|||||||||grid||||snake||if|var|||||partImage|function|prevSegmentY|nextSegmentX|prevSegmentX|nextSegmentY|||64|else|segmentType|name|||center|text|cell|cells|apple|Math|bigApple|abs|val|game|length|select|canvas|return|score|dy|for|dx|document|scale|click|index|user|height|width|case|allEqual||feedback|this|start|innerHTML|maxCells|context|break|button|item|class|prevSegment|nextSegment|rowColNumber|img|td|rank|clearInterval|selElmnt|parseInt|medal|level|defaultLength|images|library|bigAppleTimer|size|time|gameTimer|css|data|getRandomInt|top|selected|addClass|col|botRight|botLeft|getElementsByClassName|option|visibility|event|big|1000|close|addEventListener|input|parentNode|disabled|topLeft|post|snakeImage|topRight|which|imagefiles|src|setInterval|area|image|row|hide|classList|headDown|DIV|createElement|loadcount|hideBigApple|100|drawBackground|min|loadedimages|inscreateScore|drawSnake|options|toString||newApple|tailDown|horiBody|blur|tailUp|tailLeft|speedFromLevel|tailRight|headRight|headLeft|appendChild|setAttribute|arrNo|fillTopScore|drawImage|headUp|loadImages|vetiBody|getElementById|resetSnake|noti|forEach|place|alt|svg|removeClass|hidden|closeAllSelect|bigAppleScoreFromLevel|your|const|alert|range|gameOver|newScore|show|addingScore|new|type|sendFeedback|default|drawApple|max|png|table|body|loadtotal|preloaded||tr|nameImage|Game|enter|startDidTouch|getElementsByTagName||||selectedIndex|closeEnterNameNav|pop|startGame|contact|clearRect|unshift|same|as|bigAppleImage|elmnt|arrow|active|control|items|postScore|resetTimer|toggle|resetScore|speed|switch|value|openEnterNameNav|countDown|newBigApple|addListener|li|null|countDownBigAppleScore|get|snakeDeath|submit|preventDefault|128|Enter|nextSibling|form|Please|custom|3000|previousSibling|id|openContactNav|nav|Name|fadeOut|openTopScoreNav|Your|scores|removeAttribute|closeContactNav|90||105|75|60|135|120|Array|getContext|yellow|count|ar|floor|random|Ready|countdown|login|850|href|prepend|closeLoginNav|split|Number|navigation|closeTopScoreNav|onclick|stopPropagation|onload|gold|first|true|Image|false|keydown|parse|content|Thank|status|best|94dad7|fillRect|third|brone|d3eec0|fillStyle|append|silver|second|JSON|you|visible|Over|empty|and|New|send|indexOf|to|deg|add|hue|filter|rotate||remove|ready|push'.split('|'),0,{}))\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });