import React, { Suspense } from 'react';
import './Homepage.css';
import favicon from './favicon.ico';
import Top from './Sections/Top';
import AboutMe from './Sections/AboutMe';
import ReactLoading from 'react-loading';
import Projects from './Sections/ProjectsPage';
import AroundTheWeb from './Sections/AroundTheWeb';
import { InView } from 'react-intersection-observer'
//const Projects = React.lazy(() => import('./Sections/ProjectsPage'));
//const AroundTheWeb = React.lazy(() => import('./Sections/AroundTheWeb'));

const botPattern = "(googlebot\/|bot|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)";
const re = new RegExp(botPattern, 'i');

export default class Homepage extends React.Component {
    constructor(props){
        super(props)
        this.state = {showProjects:false, showAroundTheWeb:false}
        if (re.test(navigator.userAgent) || true) {
            //Projects = import('./Sections/ProjectsPage');
            //AroundTheWeb = import('./Sections/AroundTheWeb');
            //this.state = {showProjects:true, showAroundTheWeb:true}
        }
    }
    componentWillMount(){
        
    }
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = () =>{
        if(!this.state.showAroundTheWeb && window.innerHeight*2>document.getElementById('Around-The-Web').getBoundingClientRect().top)
            this.setState({showAroundTheWeb:true})
        if(!this.state.showProjects && window.innerHeight*2>document.getElementById('Projects').getBoundingClientRect().top)
            this.setState({showProjects:true})
    }
    render(){
        let showProjects = this.state.showProjects
        if(!showProjects && window.innerHeight*2<window.scrollY)
            showProjects = true;
        return (   
            <div>
                <Top id="Top"/>
                <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                    <a className="navbar-brand" href="#Top">
                        <img src={favicon} style={{height:"100%", position:"relative", top:"-3px"}} alt="3D K spinning"></img><span>arthik's Personal Site</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                        <a className="nav-item nav-link" href="#About-Me">About Me</a>
                        <a className="nav-item nav-link" href="#Projects">Projects</a>
                        <a className="nav-item nav-link" href="#Around-The-Web">Around the Web</a>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid" >
                    {/* <h1 className="display-1 text-center">Karthik Sankar</h1>
                    <br/>
                    <br/> */}
                    <div id="About-Me"><AboutMe/></div>
                    <br/>
                    <div id="Projects">
                        <br/><br/> {/*<Suspense fallback={<div className="contain"><h1>Loading…</h1><ReactLoading type={"bubbles"} color={"#000000"} height={'20%'} width={'20%'} className="text-center" /></div>}>
                            <Projects/>
        </Suspense>*/}
                        <InView style={{margin:0, padding:0}} onChange={(inView, entry) => {console.log(inView); if(inView){this.setState({showProjects:true})}}} triggerOnce={true}>
                            {this.state.showProjects || (re.test(navigator.userAgent) )?<Projects/>:<div className="contain"><button type="button" className="btn btn-lg btn-danger" onClick={()=>this.setState({showProjects:true})}>If you see this button, that means something went wrong. Click me to load the content.</button></div>}
                        </InView>
                        
                    </div>
                    <br/>
                    <div id="Around-The-Web">
                        <br/><br/> {/* <Suspense fallback={<div className="contain"><h1>Still Loading…</h1><ReactLoading type={"bubbles"} color={"#000000"} height={'20%'} width={'20%'} className="text-center" /></div>}></Suspense>*/}
                        <InView style={{margin:0, padding:0}} onChange={(inView, entry) => {console.log(inView); if(inView){this.setState({showAroundTheWeb:true})}}} triggerOnce={true}>
                            {this.state.showAroundTheWeb || (re.test(navigator.userAgent))?<AroundTheWeb/>:<div className="contain"><button type="button" className="btn btn-lg btn-danger" onClick={()=>this.setState({showAroundTheWeb:true})}>If you see this button, that means something went wrong. Click me to load the content.</button></div>}
                        </InView>
                    </div>
                    <br/><br/><br/>
                </div>
            </div>
        );
    }
}