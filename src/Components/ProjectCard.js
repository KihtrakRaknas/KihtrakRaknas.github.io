import React from 'react';

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

    render(){
        console.log(this.state);
        let firstYear = this.props.firstYear?this.props.firstYear:this.state.firstYear?this.state.firstYear:null
        let firstMonth = this.props.firstMonth?this.props.firstMonth:this.state.firstMonth?this.state.firstMonth:null
        let lastYear = this.props.lastYear?this.props.lastYear:this.state.lastYear?this.state.lastYear:null
        let lastMonth = this.props.lastMonth?this.props.lastMonth:this.state.lastMonth?this.state.lastMonth:null
        return(
            <div className="card">
                <img className="card-img-top" src={this.props.img?this.props.img:this.props.project?`https://api.microlink.io?url=${encodeURIComponent(this.props.project)}&screenshot=true&embed=screenshot.url`:this.props.page?`https://api.microlink.io?url=${encodeURIComponent(this.props.page)}&screenshot=true&embed=screenshot.url`:"https://codyhouse.co/demo/squeezebox-portfolio-template/img/img.png"} alt="Card image"/>
                <div class="card-body">
                    <h4 class="card-title">{this.props.title?this.props.title:this.state.title}</h4>
                    {firstYear||firstMonth||lastYear||lastMonth?<h6 class="card-subtitle mb-2 text-muted">{firstMonth} {firstYear} - {lastMonth} {lastYear}</h6>:null}
                    <p class="card-text">{this.props.description?this.props.description:this.state.description}</p>
                    <div class="d-flex justify-content-around">
                        {this.props.project?<a href={this.props.project} class="btn btn-outline-success">Open Project</a>:null}
                        {this.props.page?<a href={this.props.page} class="btn btn-outline-primary">View Project Page</a>:null}
                        {this.props.code||this.state.code?<a href={this.props.code?this.props.code:this.state.code} class="btn btn-outline-secondary">View Code</a>:null}
                    </div>
                </div>
            </div>
        )
        
    }
}