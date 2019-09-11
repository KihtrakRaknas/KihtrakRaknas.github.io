import React from 'react';
import ProjectCard from '../Components/ProjectCard'
import './Projects.css';
import MasonryCardDisplay from '../Components/MasonryCardDisplay';

export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.masonry = React.createRef();
        //this.masonry.current.updateFilter()
        this.state = {
            reverseSort:false
        }
      }
    render(){
        return (
            <div>
                <h1 className="text-center display-2">Projects</h1>
                <br/>
                <div class="form-row justify-content-between">
                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                        <label class="btn btn-secondary active" onClick={()=>{this.masonry.current.setSort("original-order",this.state.reverseSort)}}>
                            <input type="radio" name="options" id="option1" autocomplete="off" checked/> Default
                        </label>
                        <label class="btn btn-secondary" onClick={()=>{this.masonry.current.setSort("start",this.state.reverseSort)}}>
                            <input type="radio" name="options" id="option2" autocomplete="off"/> Date Created
                        </label>
                        <label class="btn btn-secondary" onClick={()=>{this.masonry.current.setSort("end",this.state.reverseSort)}}>
                            <input type="radio" name="options" id="option3" autocomplete="off"/> Date Finished
                        </label>
                    </div>
                    <div>
                        <select class="btn btn-mini">
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <span class="caret"></span>
                        <select class="btn btn-mini">
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <span class="caret"></span>
                    </div>
                </div>
                <br/>
                <MasonryCardDisplay ref={this.masonry}>
                <ProjectCard 
                        title="Kihtrak.com" 
                        img={require('../Imgs/Karthik.JPG')} 
                        description="A compilation of my projects! The website you are viewing right now" 
                        project="http://kihtrak.com"
                        code="https://github.com/KihtrakRaknas/KihtrakRaknas.github.io"
                        RepoName="KihtrakRaknas.github.io"
                        GithubBranch="Source"
                        languages={["JavaScript","React"]}
                    />
                    <ProjectCard 
                        title="GradeView Server Side Code" 
                        RepoName="GradeView"
                        languages={["JavaScript","Node.js"]}
                    />
                    <ProjectCard 
                        title="GradeView - iOS and Andriod App"
                        RepoName="GradeViewApp" 
                        page="https://gradeview.kihtrak.com/" 
                        tools={["Firebase Cloud Firestore","Google Cloud Functions","Expo API"]} 
                        languages={["JavaScript","React Native"]}
                    />
                    <ProjectCard
                        title="REDirector"
                        RepoName="RED" 
                        project="http://red.kihtrak.com"
                        tools={["Firebase Realtime Database"]} 
                        languages={["JavaScript","HTML","CSS"]}
                        lastMonth="Febuary"
                        lastYear="2019"
                    />
                    <ProjectCard
                        title="Potato Co."
                        RepoName="Potato-co" 
                        project="https://potato.kihtrak.com/" 
                        languages={["JavaScript","HTML","CSS"]}
                    />
                    <ProjectCard 
                        title="Old Homepage"
                        RepoName="Old-Homepage"
                        firstMonth="November"
                        lastMonth="November"
                        firstYear="2017"
                        lastYear="2017"
                        project="http://old.kihtrak.com"
                        languages={["JavaScript","HTML","CSS"]}
                    />
                    <ProjectCard 
                        title="This page will be populated soon"
                    />
                    <ProjectCard 
                        title="This page will be populated soon"
                    />
                    <ProjectCard 
                        title="This page will be populated soon"
                    />
                    <ProjectCard 
                        title="This page will be populated soon"
                    />
                    <ProjectCard 
                        title="This page will be populated soon"
                    />
                    <ProjectCard 
                        title="This page will be populated soon"
                    />
                    <ProjectCard 
                        title="This page will be populated soon"
                    />
                    <ProjectCard 
                        title="This page will be populated soon"
                    />
                    <ProjectCard 
                        title="This page will be populated soon"
                    />
                    <ProjectCard 
                        title="This page will be populated soon"
                    />
                    <ProjectCard 
                        title="This page will be populated soon"
                    />
                    <ProjectCard 
                        title="This page will be populated soon"
                    />
                </MasonryCardDisplay>
            </div>
        )
    }
}

/*
                <div class="card-columns">
                    <ProjectCard 
                        title="Kihtrak.com" 
                        img={require('../Imgs/Karthik.JPG')} 
                        description="A compilation of my projects! The website you are viewing right now" 
                        project="http://kihtrak.com"
                        code="https://github.com/KihtrakRaknas/KihtrakRaknas.github.io"
                        RepoName="KihtrakRaknas.github.io"
                        GithubBranch="Source"
                        languages={["JavaScript","React"]}
                    />
                    <ProjectCard 
                        title="GradeView Server Side Code" 
                        RepoName="GradeView"
                        languages={["JavaScript","Node.js"]}
                    />
                    <ProjectCard 
                        title="GradeView - iOS and Andriod App"
                        RepoName="GradeViewApp" 
                        page="https://gradeview.kihtrak.com/" 
                        tools={["Firebase Cloud Firestore","Google Cloud Functions","Expo API"]} 
                        languages={["JavaScript","React Native"]}
                    />
                    <ProjectCard
                        title="REDirector"
                        RepoName="RED" 
                        project="http://red.kihtrak.com"
                        tools={["Firebase Realtime Database"]} 
                        languages={["JavaScript","HTML","CSS"]}
                        lastMonth="Febuary"
                        lastYear="2019"
                    />
                    <ProjectCard
                        title="Potato Co."
                        RepoName="Potato-co" 
                        project="https://potato.kihtrak.com/" 
                        languages={["JavaScript","HTML","CSS"]}
                    />
                    <ProjectCard 
                        title="Old Homepage"
                        RepoName="Old-Homepage"
                        firstMonth="November"
                        lastMonth="November"
                        firstYear="2017"
                        lastYear="2017"
                        project="http://old.kihtrak.com"
                        languages={["JavaScript","HTML","CSS"]}
                    />
                    <ProjectCard 
                        title="This page will be populated soon"
                    />
                    <ProjectCard 
                        title="This page will be populated soon"
                    />
                    <ProjectCard 
                        title="This page will be populated soon"
                    />
                    <ProjectCard 
                        title="This page will be populated soon"
                    />
                    <ProjectCard 
                        title="This page will be populated soon"
                    />
                    <ProjectCard 
                        title="This page will be populated soon"
                    />
                    <ProjectCard 
                        title="This page will be populated soon"
                    />
                    <ProjectCard 
                        title="This page will be populated soon"
                    />
                    <ProjectCard 
                        title="This page will be populated soon"
                    />
                    <ProjectCard 
                        title="This page will be populated soon"
                    />
                    <ProjectCard 
                        title="This page will be populated soon"
                    />
                    <ProjectCard 
                        title="This page will be populated soon"
                    />
                    </div>
*/