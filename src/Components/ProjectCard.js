import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faReact, faNodeJs, faGoogle, faHtml5, faCss3Alt, faJava, faAndroid, faAppStore, faGooglePlay, faPython, faRaspberryPi, faUnity, faSteam, faWordpress} from '@fortawesome/free-brands-svg-icons'
import { faFire, faGlobe, faServer, faLaptopCode, faRobot, faCube, faBriefcase, faDesktop, faVrCardboard} from '@fortawesome/free-solid-svg-icons'
import {Image, Transformation} from 'cloudinary-react';


export default class ProjectCard extends React.Component {
    constructor(props){
        super(props)
        var re = new RegExp("(googlebot\/|bot|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)", 'i');
        var userAgent = navigator.userAgent; 
        this.noCloudImg = re.test(userAgent)
        this.state={}
    }
    
    componentWillMount(){
        if(this.props.RepoName){
            if(!this.props.lastMonth||!this.props.lastYear){
                let lastDateLink = `https://api.github.com/repos/${this.props.GithubUsername?this.props.GithubUsername:"KihtrakRaknas"}/${this.props.RepoName}/branches/${this.props.GithubBranch?this.props.GithubBranch:"master"}`
                fetch(!this.noCloudImg?lastDateLink:'https://wordpress-redirect.herokuapp.com/?url='+encodeURIComponent(lastDateLink)).then(response => {
                    response.json().then(json => {
                        if(!json.message){
                            this.setState({
                                lastMonth: new Date(json.commit.commit.author.date).toLocaleString('default', { month: 'long' }),
                                lastYear: new Date(json.commit.commit.author.date).getFullYear(),
                                end: new Date(json.commit.commit.author.date).getTime()
                            });
                            console.log("setState - github end time - "+this.props.title)
                        }
                    });
                }).catch(error => {console.log(error)})
            }
            if(!this.props.firstMonth||!this.props.firstYear||!this.props.description||!this.props.title||!this.props.code){
                let firstDateLink = `https://api.github.com/repos/${this.props.GithubUsername?this.props.GithubUsername:"KihtrakRaknas"}/${this.props.RepoName}`
                fetch(!this.noCloudImg?firstDateLink:'https://wordpress-redirect.herokuapp.com/?url='+encodeURIComponent(firstDateLink)).then(response => {
                    response.json().then(json => {
                        if(!json.message){
                            this.setState({
                                firstMonth: new Date(json.created_at).toLocaleString('default', { month: 'long' }),
                                firstYear: new Date(json.created_at).getFullYear(),
                                start: new Date(json.created_at).getTime(),
                                description: json.description,
                                title: json.name,
                                code: json.svn_url,
                                language: json.language,
                            });
                            console.log("setState - github general Info - "+this.props.title)
                        }else
                            this.setState({
                                description: "Additional details couldn't be loaded in. Try again tommarrow or use a different network.",
                                title: this.props.RepoName,
                                code: `https://api.github.com/repos/${this.props.GithubUsername?this.props.GithubUsername:"KihtrakRaknas"}/${this.props.RepoName}`,
                            });
                    });
                }).catch(error => {console.log(error)})
            }
        }
    }

    formatName = (name) =>{
        let icon = null;
        let backgoundColor = "black";
        let color = "white"
        if(name === "JavaScript"){
            icon = <FontAwesomeIcon icon={faJs}/>
            backgoundColor = "#f0db4f"
            color = "black"
        }else if(name && name.includes("React")){
            icon = <FontAwesomeIcon icon={faReact}/>
            backgoundColor = "#61dbfb"
            color = "black"
        }else if(name === "Node.js"){
            icon = <FontAwesomeIcon icon={faNodeJs}/>
            backgoundColor = "#68A063"
            color = "white"
        }else if(name&&name.includes("Google")){
            icon = <FontAwesomeIcon icon={faGoogle}/>
            backgoundColor = "#4285F4"
            color = "white"
        }else if(name&&name.includes("Firebase")){
            icon = <FontAwesomeIcon icon={faFire}/>
            backgoundColor = "#FFCA28"
            color = "black"
        }else if(name&&name.includes("HTML")){
            icon = <FontAwesomeIcon icon={faHtml5}/>
            backgoundColor = "#F16529"
            color = "white"
        }else if(name === "CSS"){
            icon = <FontAwesomeIcon icon={faCss3Alt}/>
            backgoundColor = "#264de4"
            color = "white"
        }else if(name === "Java"){
            icon = <FontAwesomeIcon icon={faJava}/>
            backgoundColor = "#f89820"
            color = "black"//
        }else if(name === "Website"){
            icon = <FontAwesomeIcon icon={faGlobe}/>
        }else if(name === "Server"){
            icon = <FontAwesomeIcon icon={faServer}/>
        }else if(name==="Android App"){
            icon = <FontAwesomeIcon icon={faGooglePlay}/>
            backgoundColor="#3BCCFF"
            color="white"
        }else if(name&&name.includes("Android")){
            icon = <FontAwesomeIcon icon={faAndroid}/>
            backgoundColor="#a4c639"
            color="black"
        }else if(name === "iOS App"){
            icon = <FontAwesomeIcon icon={faAppStore}/>
            backgoundColor = "#007AFF"
            color="white"
        }else if(name === "Python"){
            icon = <FontAwesomeIcon icon={faPython}/>
            backgoundColor = "#306998"
            color="white"
        }else if(name === "Raspberry Pi"){
            icon = <FontAwesomeIcon icon={faRaspberryPi}/>
            backgoundColor = "#C51A4A"
            color="white"
        }else if(name === "Hackathon Project"){
            icon = <FontAwesomeIcon icon={faLaptopCode}/>
            backgoundColor = "#E73427"
            color="white"
        }else if(name.includes("Vex")){
            icon = <FontAwesomeIcon icon={faRobot}/>
            backgoundColor = "#DA262E"
            color="white"
        }else if(name==="Scratch"){
            backgoundColor = "#F0A63F"
            color="white"
        }else if(name==="C++" || name==="C#"){
            backgoundColor = "#6C9BD0"
            color="white"
        }else if(name==="PROS"){
            icon = <FontAwesomeIcon icon={faRobot}/>
            backgoundColor = "#EBC76E"
            color="black"
        }else if(name==="Arduino"){
            backgoundColor = "#03A0A8"
            color="white"
        }else if(name==="3D Printing"){
            icon = <FontAwesomeIcon icon={faCube}/>
            backgoundColor = "red"
            color="white"
        }else if(name&&name.includes("Work")){
            icon = <FontAwesomeIcon icon={faBriefcase}/>
            backgoundColor = "black"
            color="white"
        }else if(name&&name.includes("Unity")){
            icon = <FontAwesomeIcon icon={faUnity}/>
            backgoundColor = "white"
            color="black"
        }else if(name&&name.includes("Steam")){
            icon = <FontAwesomeIcon icon={faSteam}/>
            backgoundColor = "white"
            color="#1b2838"
        }else if(name&&name.includes("PC")){
            icon = <FontAwesomeIcon icon={faDesktop}/>
        }else if((name&&name.includes("VR")) || name=="Virtual Reality" || (name&&name.includes("Cardboard"))){
            icon = <FontAwesomeIcon icon={faVrCardboard}/>
        }else if((name&&name.includes("WordPress"))){
            icon = <FontAwesomeIcon icon={faWordpress}/>
            backgoundColor = "#00749C"
            color="white"
        }
        return(
            <span key={name} className="badge" style={{marginRight:"5px", backgroundColor:backgoundColor, color:color}}>{icon} {name}</span>
        )
    }

    componentDidUpdate = () =>{
        let tags = this.props.languages
        if(tags&&tags.length>0){
            tags = tags.concat(this.props.tools)
        }else{
            tags = this.props.tools
        }
        if(tags&&tags.length>0){
            tags = tags.concat(this.props.types)
        }else{
            tags = this.props.types
        }
        this.props.updateTags(tags)
        if(this.props.update)
            this.props.update()
    }

    render(){
        console.log("rendering card - "+this.props.title)
        let columns = 0;
        if(this.props.width){
            if(this.props.width+30>=16*130)
                columns = 5
            else if(this.props.width+30>=16*100)
                columns = 4
            else if(this.props.width+30>=16*75)
                columns = 3
            else if(this.props.width+30>=16*40)
                columns = 2
            else 
                columns = 1
        }
        let firstYear = this.props.firstYear?this.props.firstYear:this.state.firstYear?this.state.firstYear:null
        let firstMonth = this.props.firstMonth?this.props.firstMonth:this.state.firstMonth?this.state.firstMonth:null
        let start = this.props.firstYear?Date.parse("1 "+this.props.firstMonth+" "+this.props.firstYear):this.state.start;
        let lastYear = this.props.lastYear?this.props.lastYear:this.state.lastYear?this.state.lastYear:null
        let lastMonth = this.props.lastMonth?this.props.lastMonth:this.state.lastMonth?this.state.lastMonth:null
        if(!lastYear&&firstYear)
            lastYear = firstYear
        if(!firstYear&&lastYear)
            firstYear = lastYear
        if(!lastMonth&&firstMonth)
            lastMonth = firstMonth
        if(!firstMonth&&lastMonth)
            firstMonth = lastMonth
        let end = this.props.lastYear?Date.parse("1 "+this.props.lastMonth+" "+this.props.lastYear):this.state.end;

        let filterTerms = [];
        let languages = []
        if(this.props.languages){
            if(this.state.language&&!this.props.languages.includes(this.state.language))
                this.props.languages.push(this.state.language)
            for(let lang of this.props.languages){
                languages.push(this.formatName(lang))
                filterTerms.push(lang)
            }
        }else if(this.state.language){
            languages.push(this.formatName(this.state.language))
            filterTerms.push(this.state.language)
        }
        let tools = []
        if(this.props.tools){
            for(let tool of this.props.tools){
                tools.push(this.formatName(tool))
                filterTerms.push(tool)
            }
        }
        let types = []
        if(this.props.types){
            for(let type of this.props.types){
                types.push(this.formatName(type))
                filterTerms.push(type)
            }
        }
        let imgSrc = this.props.img?this.props.img:this.props.project?`https://api.microlink.io?url=${encodeURIComponent(this.props.project)}&screenshot=true&embed=screenshot.url`:this.props.page?`https://api.microlink.io?url=${encodeURIComponent(this.props.page)}&screenshot=true&embed=screenshot.url`:null//"https://codyhouse.co/demo/squeezebox-portfolio-template/img/img.png"
        let btnSize = !!this.props.project&&!!this.props.page&&(this.props.code||this.state.code)&&window.innerWidth<420?"btn-sm":""
        return(
            <div className="card" data-filter={JSON.stringify(filterTerms)} style={this.props.width?{width:(this.props.width-20*(columns-1))/columns}:null}>
                {this.props.cloudImg&!this.noCloudImg?<Image cloudName="kihtrak" publicId={this.props.cloudImg} secure="true" className="card-img-top" dpr="auto" responsive width="auto" alt={`Thumbnail for ${this.props.title?this.props.title:this.state.title}`} /*this part might not do anything*/onLoad={this.componentDidUpdate} onError={this.componentDidUpdate}><Transformation fetchFormat="auto"/></Image>:imgSrc?<img onLoad={this.componentDidUpdate} onError={this.componentDidUpdate} className="card-img-top" src={imgSrc} alt={`Thumbnail for ${this.props.title?this.props.title:this.state.title}`}/>:null}
                <div className="card-body">
                    <h4 className="card-title">{this.props.title?this.props.title:this.state.title}</h4>
                    {firstYear||firstMonth||lastYear||lastMonth?firstYear===lastYear&&firstMonth===lastMonth?<h6 className="card-subtitle mb-2 text-muted time" data-start={start} data-end={end}>{firstMonth} {firstYear}</h6>:<h6 className="card-subtitle mb-2 text-muted time" data-start={start} data-end={end}>{firstMonth} {firstYear} - {lastMonth} {lastYear}</h6>:null}
                    <p className="card-text">{this.props.description?this.props.description:this.state.description}</p>
                    <div className="d-flex justify-content-around" style={{flexWrap:"wrap"}}>
                        {this.props.iOSDownload?<a target="_blank" style={{marginTop:2,marginBottom:2}} href={this.props.iOSDownload}><img alt='Get it on the Apple App Store' src={require('../Imgs/App_Store_Badge.svg')} style={{height:37.6}}/></a>:null}
                        {this.props.androidDownload?<a target="_blank" style={{marginTop:2,marginBottom:2}} href={this.props.androidDownload}><img alt='Get it on Google Play' src={require('../Imgs/google-play-badge.png')} style={{height:37.6}}/></a>:null}
                        {this.props.project?<a target="_blank" href={this.props.project} className={`btn btn-outline-success ${btnSize}`} style={{marginTop:2,marginBottom:2}}>Open Project</a>:null}
                        {this.props.download?<a target="_blank" href={this.props.download} className={`btn btn-outline-success ${btnSize}`} style={{marginTop:2,marginBottom:2}}>Download Project</a>:null}
                        {this.props.page?<a target="_blank" href={this.props.page} className={`btn btn-outline-primary ${btnSize}`} style={{marginTop:2,marginBottom:2}}>View Project Page</a>:null}
                        {this.props.code||this.state.code?<a target="_blank" href={this.props.code?this.props.code:this.state.code} className={`btn btn-outline-secondary ${btnSize}`} style={{marginTop:2,marginBottom:2}}>View Code</a>:null}
                        {this.props.serverCode?<a target="_blank" href={this.props.serverCode} className={`btn btn-outline-secondary ${btnSize}`} style={{marginTop:2,marginBottom:2}}>View Server Code</a>:null}
                        {this.props.additionalCode?<a target="_blank" href={this.props.additionalCode} className={`btn btn-outline-secondary ${btnSize}`} style={{marginTop:2,marginBottom:2}}>View Additional Code</a>:null}
                    </div>
                </div>
                {languages.length>0||tools.length>0||types.length>0?<div className="card-footer">{languages}{languages.length>0?<br/>:null}{tools}{tools.length>0?<br/>:null}{types}</div>:null}
            </div>
        )
        
    }
}