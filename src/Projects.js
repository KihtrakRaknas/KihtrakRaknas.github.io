import React from 'react';
import ProjectCard from './Components/ProjectCard'
export const Projects = [
    <ProjectCard 
        title="Kihtrak.com" 
        img={require('./Imgs/Karthik-compressed.jpg')} 
        description="A compilation of my projects! The website you are viewing right now" 
        project="http://kihtrak.com"
        code="https://github.com/KihtrakRaknas/KihtrakRaknas.github.io"
        RepoName="KihtrakRaknas.github.io"
        GithubBranch="Source"
        languages={["JavaScript","React"]}
        types={["Website"]}
    />,
    <ProjectCard 
        title="GradeView Server Side Code" 
        RepoName="GradeView"
        languages={["JavaScript","Node.js"]}
        types={["Server"]}
    />,
    <ProjectCard 
        title="GradeView - iOS and Andriod App"
        RepoName="GradeViewApp" 
        page="https://gradeview.kihtrak.com/" 
        tools={["Firebase Cloud Firestore","Google Cloud Functions","Expo API"]} 
        languages={["JavaScript","React Native"]}
        types={["iOS App","Andriod App"]}
    />,
    <ProjectCard
        title="REDirector"
        RepoName="RED" 
        project="http://red.kihtrak.com"
        tools={["Firebase Realtime Database"]} 
        languages={["JavaScript","HTML","CSS"]}
        lastMonth="Febuary"
        lastYear="2019"
        types={["Website"]}
    />,
    <ProjectCard
        title="Potato Co."
        RepoName="Potato-co" 
        project="https://potato.kihtrak.com/" 
        languages={["JavaScript","HTML","CSS"]}
        types={["Website"]}
    />,
    <ProjectCard 
        title="Old Homepage"
        RepoName="Old-Homepage"
        firstMonth="November"
        lastMonth="November"
        firstYear="2017"
        lastYear="2017"
        project="http://old.kihtrak.com"
        languages={["JavaScript","HTML","CSS"]}
        types={["Website"]}
    />,
    <ProjectCard 
        title="Quick Set Up"
        RepoName="setup"
        project="https://setup.kihtrak.com/"
        types={["Website"]}
    />,
    <ProjectCard 
        RepoName="Basic Calculator"
        code="https://github.com/KihtrakRaknas/Calculator"
        project="https://play.google.com/store/apps/details?id=com.kihtrak.calculator"
        languages={["Java"]}
        tools={["Andriod Studio"]}
        types={["Andriod App"]}
        firstMonth="October"
        lastMonth="October"
        firstYear="2018"
        lastYear="2018"
    />,
    <ProjectCard
        title="3D Shooter"
        RepoName="3d-shooter"
    />
    <ProjectCard
        title="750S Team Website"
        //RepoName="3d-shooter"
        project="https://750s.github.io"
    />,
    <ProjectCard
    title="3D-Maze"
    RepoName="3D-Maze"
/>     
];
