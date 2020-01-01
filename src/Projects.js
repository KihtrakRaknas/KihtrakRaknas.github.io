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
        title="GradeView - iOS and Andriod App"
        RepoName="GradeViewApp"
        serverCode="https://github.com/KihtrakRaknas/GradeView"
        page="https://gradeview.kihtrak.com/" 
        iOSDownload="https://apps.apple.com/us/app/sbhs-gradeview/id1463917598?mt=8"
        androidDownload="https://play.google.com/store/apps/details?id=com.kihtrak.REGEN"
        tools={["Firebase Cloud Firestore","Google Cloud Functions","Expo API"]} 
        languages={["JavaScript","React Native","Node.js"]}
        types={["iOS App","Andriod App","Server"]}
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
        description="My one of my first experiences with HTML and CSS. It has been mildly vandalized and updated with hyperlinks to help webcrawlers."
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
        title="Basic Calculator"
        RepoName="Calculator"
        img={require('./Imgs/calculator.png')}
        code="https://github.com/KihtrakRaknas/Calculator"
        androidDownload="https://play.google.com/store/apps/details?id=com.kihtrak.calculator"
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
        project="https://kihtrak.com/3d-shooter"
        RepoName="3d-shooter"
        img={require('./Imgs/3dShooter.png')}
        languages={["JavaScript","HTML","CSS","THREE.js"]}
        types={["Website"]}
    />,
    <ProjectCard
        title="750S Team Website"
        description="A Website for my high school's robotic team. Complete with team bios and a team-only attendance system."
        project="https://750s.github.io/"
        code="https://github.com/750S/750s.github.io"
        languages={["JavaScript","HTML","CSS"]}
        types={["Website"]}
    />,
    <ProjectCard
        title="3D-Maze"
        RepoName="3D-Maze"
        project="https://github.com/KihtrakRaknas/3D-Maze/archive/master.zip"
        img={require('./Imgs/maze.png')}
        languages={["Java"]}
    />,
    <ProjectCard 
        title="Mr. Poot"
        RepoName="Mr.-Poot-App"
        img={require('./Imgs/mrPoot.png')}
        description="An app for a chemistry teacher at SBHS. It contains chemistry notes, pictures and videos. (Commissioned by Mr. Poot himself)"
        firstMonth="November"
        lastMonth="December"
        firstYear="2019"
        lastYear="2019"
        code="https://github.com/KihtrakRaknas/Mr.-Poot-App"
        additionalCode="https://github.com/KihtrakRaknas/Mr.-Poot-Scraper"
        iOSDownload="https://apps.apple.com/us/app/mister-poot/id1490529423?mt=8"
        androidDownload="https://play.google.com/store/apps/details?id=com.kihtrak.misterpoot"
        tools={["Expo API"]} 
        languages={["JavaScript","React Native"]}
        types={["iOS App","Andriod App"]}
    />,
    <ProjectCard
        img={require('./Imgs/NHSStaffFeedback.png')} 
        title="NHS Staff Feedback Form"
        description="A website commissioned by my school's National Honors Society to get feedback about students who are applying. Signing into the site will require a @sbschools.org email (to prove you are a staff member)." 
        firstMonth="December"
        lastMonth="December"
        firstYear="2019"
        lastYear="2019"
        project="https://nhs-staff-feedback.github.io"
        code="https://github.com/nhs-staff-feedback/nhs-staff-feedback.github.io"
        tools={["Firebase Realtime Database"]} 
        languages={["JavaScript","HTML","JS"]}
        types={["Website"]}
    />,
];
/*
    <ProjectCard
        img={require('./Imgs/Karthik-compressed.jpg')} 
        title="GradeView - iOS and Andriod App"
        description="A compilation of my projects! The website you are viewing right now" 
        RepoName="GradeViewApp"
        GithubBranch="Source"
        project="http://kihtrak.com"
        code="https://github.com/KihtrakRaknas/KihtrakRaknas.github.io"
        serverCode="https://github.com/KihtrakRaknas/GradeView"
        page="https://gradeview.kihtrak.com/" 
        iOSDownload="https://apps.apple.com/us/app/sbhs-gradeview/id1463917598?mt=8"
        androidDownload="https://play.google.com/store/apps/details?id=com.kihtrak.REGEN"
        tools={["Firebase Cloud Firestore","Google Cloud Functions","Expo API"]} 
        languages={["JavaScript","React Native","Node.js"]}
        types={["iOS App","Andriod App","Server"]}
    />,
*/