import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faReact, faNodeJs, faGoogle, faHtml5, faCss3Alt, faJava, faAndroid, faAppStore, faAppStoreIos, faGooglePlay} from '@fortawesome/free-brands-svg-icons'
import { faFire, faGlobe, faServer} from '@fortawesome/free-solid-svg-icons'

export default class ProjectCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    componentWillMount(){
        if(this.props.RepoName){
            fetch(
                `https://api.github.com/repos/${this.props.GithubUsername?this.props.GithubUsername:"KihtrakRaknas"}/${this.props.RepoName}/branches/${this.props.GithubBranch?this.props.GithubBranch:"master"}`
            )
            .then(response => {
                response.json().then(json => {
                    if(!json.message)
                        this.setState({
                            lastMonth: new Date(json.commit.commit.author.date).toLocaleString('default', { month: 'long' }),
                            lastYear: new Date(json.commit.commit.author.date).getFullYear(),
                            end: new Date(json.commit.commit.author.date).getTime()
                        });
                });
            })
            .catch(error => {
                console.log(error);
            });
            fetch(
                `https://api.github.com/repos/${this.props.GithubUsername?this.props.GithubUsername:"KihtrakRaknas"}/${this.props.RepoName}`
            )
            .then(response => {
                response.json().then(json => {
                    if(!json.message)
                        this.setState({
                            firstMonth: new Date(json.created_at).toLocaleString('default', { month: 'long' }),
                            firstYear: new Date(json.created_at).getFullYear(),
                            start: new Date(json.created_at).getTime(),
                            description: json.description,
                            title: json.name,
                            code: json.svn_url,
                            language: json.language,
                        });
                    else   
                        this.setState({
                            description: "Additional details couldn't be loaded in. Try again tommarrow or use a different network.",
                            title: this.props.RepoName,
                            code: `https://api.github.com/repos/${this.props.GithubUsername?this.props.GithubUsername:"KihtrakRaknas"}/${this.props.RepoName}`,
                        });
                });
            })
            .catch(error => {
                console.log(error);
            });
        }
    }

    formatName = (name) =>{
        let icon = null;
        let backgoundColor = "black";
        let color = "white"
        if(name == "JavaScript"){
            icon = <FontAwesomeIcon icon={faJs}/>
            backgoundColor = "#f0db4f"
            color = "black"
        }else if(name && name.includes("React")){
            icon = <FontAwesomeIcon icon={faReact}/>
            backgoundColor = "#61dbfb"
            color = "black"
        }else if(name == "Node.js"){
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
        }else if(name == "CSS"){
            icon = <FontAwesomeIcon icon={faCss3Alt}/>
            backgoundColor = "#264de4"
            color = "white"
        }else if(name == "Java"){
            icon = <FontAwesomeIcon icon={faJava}/>
            backgoundColor = "#f89820"
            color = "black"//
        }else if(name == "Website"){
            icon = <FontAwesomeIcon icon={faGlobe}/>
        }else if(name == "Server"){
            icon = <FontAwesomeIcon icon={faServer}/>
        }else if(name=="Andriod App"){
            icon = <FontAwesomeIcon icon={faGooglePlay}/>
            backgoundColor="#3BCCFF"
            color="white"
        }else if(name&&name.includes("Andriod")){
            icon = <FontAwesomeIcon icon={faAndroid}/>
            backgoundColor="#a4c639"
            color="black"
        }else if(name == "iOS App"){
            icon = <FontAwesomeIcon icon={faAppStore}/>
            backgoundColor = "#007AFF"
            color="white"
        }
        return(
            <span class="badge" style={{marginRight:"5px", backgroundColor:backgoundColor, color:color}}>{icon} {name}</span>
        )
    }

    componentDidUpdate = () =>{
        let tags = this.props.languages
        if(tags&&tags.length>0){
            tags = tags.concat(this.props.tools)
        }else{
            tags = this.props.tools
        }
        this.props.updateTags(tags)
        if(this.props.update)
            this.props.update()
    }

    render(){
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
        let start = this.props.firstYear?Date.parse(this.props.firstMonth+" "+this.props.firstYear):this.state.start;
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
        let end = this.props.lastYear?Date.parse(this.props.lastMonth+" "+this.props.lastYear):this.state.end;
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
                {imgSrc?<img onLoad={this.componentDidUpdate} onError={this.componentDidUpdate} className="card-img-top" src={imgSrc} alt={`Image depicting ${this.props.title?this.props.title:this.state.title}`}/>:null}
                <div class="card-body">
                    <h4 class="card-title">{this.props.title?this.props.title:this.state.title}</h4>
                    {firstYear||firstMonth||lastYear||lastMonth?firstYear==lastYear&&firstMonth==lastMonth?<h6 class="card-subtitle mb-2 text-muted time" data-start={start} data-end={end}>{firstMonth} {firstYear}</h6>:<h6 class="card-subtitle mb-2 text-muted time" data-start={firstMonth+" "+firstYear} data-end={lastMonth+" "+lastYear}>{firstMonth} {firstYear} - {lastMonth} {lastYear}</h6>:null}
                    <p class="card-text">{this.props.description?this.props.description:this.state.description}</p>
                    <div class="d-flex justify-content-around">
                        {this.props.project?<a href={this.props.project} class={`btn btn-outline-success ${btnSize}`}>Open Project</a>:null}
                        {this.props.page?<a href={this.props.page} class={`btn btn-outline-primary ${btnSize}`}>View Project Page</a>:null}
                        {this.props.code||this.state.code?<a href={this.props.code?this.props.code:this.state.code} class={`btn btn-outline-secondary ${btnSize}`}>View Code</a>:null}
                    </div>
                </div>
                {languages.length>0||tools.length>0||types.length>0?<div class="card-footer">{languages}{languages.length>0?<br/>:null}{tools}{tools.length>0?<br/>:null}{types}</div>:null}
            </div>
        )
        
    }
}