(this["webpackJsonpkihtrak.com"]=this["webpackJsonpkihtrak.com"]||[]).push([[1],{18:function(e,t,a){e.exports=a.p+"static/media/favicon.291eccc8.ico"},26:function(e,t,a){e.exports=a(45)},31:function(e,t,a){},32:function(e,t,a){},36:function(e,t,a){},39:function(e,t,a){e.exports=a.p+"static/media/Karthik.38fe051d.webp"},40:function(e,t,a){e.exports=a.p+"static/media/Karthik-compressed.eaf20dfc.webp"},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),i=a.n(o),l=(a(31),a(2)),c=a(3),s=a(4),m=a(5),b=a(6),d=(a(32),a(18)),u=a.n(d),h=a(19),p=a(20),g=a.n(p),w=(a(36),a(37)),v=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(h.Parallax,{bgImage:window.outerWidth>992?a(39):a(40),bgImageAlt:"A picture of Karthik Sankar",bgImageStyle:window.chrome?{height:"200vh",overflow:"hidden",width:"300vh"}:{},strength:-300},r.a.createElement("div",{style:{height:"100vh"}},r.a.createElement(g.a,{centered:!0,className:"center-vert",percentage:window.outerHeight>700?.1:window.outerHeight>620?.1:.3,speed:-3,style:{fontSize:"10vh",color:"black",fontWeight:"bold"}},r.a.createElement(w,{items:window.outerWidth/window.outerHeight>=.8?["Karthik Sankar","Kihtrak Raknas"]:["Karthik","Kihtrak"]}))))}}]),t}(r.a.Component),E=a(21),f=a.n(E),k=a(22),y=a.n(k),x=a(7),N=a(8),S=(a(44),a(23)),j=a.n(S),A=a(24),C=a.n(A),M=function(e){function t(){var e;Object(l.a)(this,t),e=Object(s.a)(this,Object(m.a)(t).call(this));var a=window.innerHeight;return window.innerWidth<a&&(a=window.innerWidth),e.state={vmin:a},e}return Object(b.a)(t,e),Object(c.a)(t,[{key:"getMin",value:function(){return window.innerWidth<window.innerHeight?window.innerWidth:window.innerHeight}},{key:"updateDimensions",value:function(){var e=this.getMin();this.setState({vmin:e})}},{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions.bind(this))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(f.a,{bottom:!0},r.a.createElement("h1",{className:"text-center display-2"},"About Me")),r.a.createElement(y.a,null),r.a.createElement("div",{className:"row",style:{overflowX:"hidden"}},r.a.createElement("div",{className:"col-md-6 text-center"},r.a.createElement(j.a,{left:!0},r.a.createElement("div",null,r.a.createElement(x.a,{icon:N.i,size:Math.round(this.state.vmin/350)+"x",style:{marginRight:"10px"}}),r.a.createElement("span",{className:"icon-text"},"New Jersey")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(x.a,{icon:N.h,size:Math.round(this.state.vmin/350)+"x",style:{marginRight:"10px"}}),r.a.createElement("span",{className:"icon-text"},"South Brunswick High School")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(x.a,{icon:N.g,size:Math.round(this.state.vmin/350)+"x",style:{marginRight:"10px"}}),r.a.createElement("span",{className:"icon-text"},"Captain of ",r.a.createElement("a",{href:"http://750s.github.io"},"750S"))),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(x.a,{icon:N.a,size:Math.round(this.state.vmin/350)+"x",style:{marginRight:"10px"}}),r.a.createElement("span",{className:"icon-text"},"Teach programming @ Code Ninjas")),r.a.createElement("br",null))),r.a.createElement("div",{className:"col-md-6 text-center"},r.a.createElement(C.a,{right:!0},r.a.createElement(x.a,{icon:N.f,size:Math.round(this.state.vmin/175)+"x",style:{marginRight:"10px"}}),r.a.createElement("p",{className:"about-txt"},"Full-stack developer"),r.a.createElement("p",{className:"about-txt"},"Fluent in HTML, CSS, Javascript, Node.js, Java & C++"),r.a.createElement("p",{className:"about-txt"},"Favorite frameworks: React & React Native"),r.a.createElement("p",{className:"about-txt"},"Favorite editors: Andriod Studio, Visual Studio Code & Xcode")))),r.a.createElement("div",null))}}]),t}(r.a.Component),B=a(13),O=a.n(B),P=r.a.lazy((function(){return Promise.all([a.e(0),a.e(5),a.e(4)]).then(a.bind(null,284))})),z=r.a.lazy((function(){return Promise.all([a.e(0),a.e(6),a.e(7)]).then(a.bind(null,283))})),W=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){window.addEventListener("scroll",a.handleScroll)},a.handleScroll=function(){!a.state.showProjects&&2*window.innerHeight>document.getElementById("Projects").getBoundingClientRect().top&&a.setState({showProjects:!0})};var n=new RegExp("(googlebot/|bot|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)","i"),r=navigator.userAgent;return a.state={showProjects:!1},n.test(r)&&(a.state={showProjects:!0}),a}return Object(b.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.showProjects;return!t&&2*window.innerHeight<window.scrollY&&(t=!0),r.a.createElement("div",null,r.a.createElement(v,{id:"Top"}),r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light sticky-top"},r.a.createElement("a",{className:"navbar-brand",href:"#Top"},r.a.createElement("img",{src:u.a,style:{height:"100%"},alt:"3D K spinning"}),r.a.createElement("span",null,"arthik")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav ml-auto"},r.a.createElement("a",{className:"nav-item nav-link",href:"#About-Me"},"About Me"),r.a.createElement("a",{className:"nav-item nav-link",href:"#Projects"},"Projects"),r.a.createElement("a",{className:"nav-item nav-link",href:"#Around-The-Web"},"Around the Web")))),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("h1",{className:"display-1 text-center"},"Karthik Sankar"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{id:"About-Me"},r.a.createElement(M,null)),r.a.createElement("br",null),r.a.createElement("div",{id:"Projects"},r.a.createElement("br",null),r.a.createElement("br",null),this.state.showProjects?r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:"contain"},r.a.createElement("h1",null,"Loading\u2026"),r.a.createElement(O.a,{type:"bubbles",color:"#000000",height:"20%",width:"20%",className:"text-center"}))},r.a.createElement(P,null)):r.a.createElement("div",{className:"contain"},r.a.createElement("button",{type:"button",className:"btn btn-lg btn-danger",onClick:function(){return e.setState({showProjects:!0})}},"If you see this button, that means something went wrong. Click me to load the content."))),r.a.createElement("br",null),r.a.createElement("div",{id:"Around-The-Web"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:"contain"},r.a.createElement("h1",null,"Still Loading\u2026"),r.a.createElement(O.a,{type:"bubbles",color:"#000000",height:"20%",width:"20%",className:"text-center"}))},r.a.createElement(z,null))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,2,3]]]);
//# sourceMappingURL=main.4599c2b0.chunk.js.map