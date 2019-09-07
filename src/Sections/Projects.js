import React from 'react';
import ProjectCard from '../Components/ProjectCard'
import './Projects.css';

export default class Projects extends React.Component {
    render(){
        return (
            <div>
                <h1 className="text-center display-2">Projects</h1>
                <br/>
                <div class="card-columns">
                    <ProjectCard 
                        title="Kihtrak.com" 
                        img={require('../Imgs/Karthik.JPG')} 
                        description="A compilation of my projects! The website you are viewing right now" 
                        project="http://kihtrak.com"
                        code="https://github.com/KihtrakRaknas/KihtrakRaknas.github.io"
                        RepoName="KihtrakRaknas.github.io"
                        GithubBranch="Source"
                    />
                    <ProjectCard 
                        title="GradeView Server Side Code" 
                        RepoName="GradeView"
                        languages={["JavaScript","Node.js"]}
                    />
                    <ProjectCard 
                        title="GradeView - iOS and Andriod App"
                        RepoName="GradeViewApp" 
                        project="https://gradeview.kihtrak.com/" 
                        tools={["Firebase Cloud Firestore","Google Cloud Functions","Expo API"]} 
                        languages={["JavaScript","React"]}
                    />
                    <ProjectCard title="This page will be populated soon"/>
                    <ProjectCard title="This page will be populated soon"/>
                    <ProjectCard title="This page will be populated soon"/>
                    </div>
            </div>
        )
    }
}