import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faReact, faNodeJs, faGoogle, faHtml5, faCss3Alt} from '@fortawesome/free-brands-svg-icons'
import { faFire} from '@fortawesome/free-solid-svg-icons'

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
                    console.log(json);
                    this.setState({
                        lastMonth: new Date(json.commit.commit.author.date).toLocaleString('default', { month: 'long' }),
                        lastYear: new Date(json.commit.commit.author.date).getFullYear(),
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
                    console.log(json);
                    this.setState({
                        firstMonth: new Date(json.created_at).toLocaleString('default', { month: 'long' }),
                        firstYear: new Date(json.created_at).getFullYear(),
                        description: json.description,
                        title: json.name,
                        code: json.svn_url,
                        language: json.language,
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
        }else if(name == "React"){
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
        }
        return(
            <span class="badge" style={{marginRight:"5px", backgroundColor:backgoundColor, color:color}}>{icon} {name}</span>
        )
    }

    render(){
        console.log(this.state);
        let firstYear = this.props.firstYear?this.props.firstYear:this.state.firstYear?this.state.firstYear:null
        let firstMonth = this.props.firstMonth?this.props.firstMonth:this.state.firstMonth?this.state.firstMonth:null
        let lastYear = this.props.lastYear?this.props.lastYear:this.state.lastYear?this.state.lastYear:null
        let lastMonth = this.props.lastMonth?this.props.lastMonth:this.state.lastMonth?this.state.lastMonth:null
        let languages = []

        console.log(this.props.languages)
        if(this.props.languages){
            if(this.state.language&&!this.props.languages.includes(this.state.language))
                this.props.languages.push(this.state.language)
            for(let lang of this.props.languages){
                languages.push(this.formatName(lang))
            }
        }else if(this.state.language){
            languages.push(this.formatName(this.state.language))
        }
        let tools = []
        if(this.props.tools){
            for(let tool of this.props.tools){
                tools.push(this.formatName(tool))
            }
        }
        let imgSrc = this.props.img?this.props.img:this.props.project?`https://api.microlink.io?url=${encodeURIComponent(this.props.project)}&screenshot=true&embed=screenshot.url`:this.props.page?`https://api.microlink.io?url=${encodeURIComponent(this.props.page)}&screenshot=true&embed=screenshot.url`:null//"https://codyhouse.co/demo/squeezebox-portfolio-template/img/img.png"
        return(
            <div className="card">
                {imgSrc?<img className="card-img-top" src={imgSrc} alt={`Image depicting ${this.props.title?this.props.title:this.state.title}`}/>:null}
                <div class="card-body">
                    <h4 class="card-title">{this.props.title?this.props.title:this.state.title}</h4>
                    {firstYear||firstMonth||lastYear||lastMonth?firstYear==lastYear&&firstMonth==lastMonth?<h6 class="card-subtitle mb-2 text-muted">{firstMonth} {firstYear}</h6>:<h6 class="card-subtitle mb-2 text-muted">{firstMonth} {firstYear} - {lastMonth} {lastYear}</h6>:null}
                    <p class="card-text">{this.props.description?this.props.description:this.state.description}</p>
                    <div class="d-flex justify-content-around">
                        {this.props.project?<a href={this.props.project} class="btn btn-outline-success">Open Project</a>:null}
                        {this.props.page?<a href={this.props.page} class="btn btn-outline-primary">View Project Page</a>:null}
                        {this.props.code||this.state.code?<a href={this.props.code?this.props.code:this.state.code} class="btn btn-outline-secondary">View Code</a>:null}
                    </div>
                </div>
                {languages.length>0||tools.length>0?<div class="card-footer">{languages}<br/>{tools}</div>:null}
            </div>
        )
        
    }
}