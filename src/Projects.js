import React from 'react';
import ProjectCard from './Components/ProjectCard'
export const Projects = [
    <ProjectCard 
        img={require('./Imgs/gradeView.PNG')} 
        cloudImg="gradeView"
        title="GradeView - iOS and Android App"
        description={`An app that provides students with access to their grades, provides notifications when new grades go up, calculates GPA and much more! \nCurrently has over 1000 active users and supports over 3 school districts.`} 
        RepoName="GradeViewApp"
        serverCode="https://github.com/KihtrakRaknas/GradeView"
        page="https://gradeview.kihtrak.com/" 
        iOSDownload="https://apps.apple.com/us/app/sbhs-gradeview/id1463917598?mt=8"
        androidDownload="https://play.google.com/store/apps/details?id=com.kihtrak.REGEN"
        tools={["Firebase Cloud Firestore","Google Cloud Functions","Expo API"]} 
        languages={["JavaScript","React Native","Node.js"]}
        types={["iOS App","Android App","Server"]}
        key="GradeView - iOS and Android App"
    />,
    <ProjectCard 
        img={require('./Imgs/NotiBot.png')} 
        cloudImg="NotiBot"
        title="NotiBot - iOS/Android/Web App"
        description={`An app that allows developers to use it's easy-to-use API to send themselves notifications about anything. Complete with API documentation and code examples.`} 
        RepoName="NotiBot"
        serverCode="https://github.com/KihtrakRaknas/NotiBot-Server"
        page="https://notibotdocs.kihtrak.com/" 
        iOSDownload="https://apps.apple.com/us/app/notibot/id1568618783?mt=8"
        androidDownload="https://play.google.com/store/apps/details?id=com.kihtrak.NOTIBOT"
        tools={["Firebase Cloud Firestore","Expo API"]} 
        languages={["JavaScript","React Native","Node.js"]}
        types={["iOS App","Android App","Server","Website"]}
        key="NotiBot - iOS/Android/Web App"
    />,
    <ProjectCard 
        title="Scoutr - A Robotics Scouting Tool" 
        img={require('./Imgs/scoutr.PNG')} 
        cloudImg="scoutr"
        description={`A mobile-first tool for robotics competitions. Simply enter your name and team number. The app will automatically find the competitions you are signed up for and display them. It will show you all the teams at the competition, and allow you to take notes and sync them accross your team member's devices. The app will also retrive other useful information like a team's "skills" score and past awards. All the data gets saved offline incase the internet at a competition is spotty.`} 
        project="https://kihtrak.com/scoutr/"
        code="https://github.com/KihtrakRaknas/scoutr"
        RepoName="scoutr"
        iOSDownload="https://apps.apple.com/tc/app/robotics-scouting-tool/id1494612234"
        androidDownload="https://play.google.com/store/apps/details?id=com.kihtrak.scouter"
        tools={["Firebase Cloud Firestore","Expo API","VexDB"]} 
        languages={["JavaScript","React Native"]}
        types={["iOS App","Android App","Website"]}
    />,
    <ProjectCard 
        title="Space Shooter - Star Fox Style VR Game" 
        img={require('./Imgs/starFox.PNG')} 
        cloudImg="starFox"
        firstMonth="January"
        firstYear="2020"
        lastMonth="February"
        lastYear="2020"
        description={`You will need a Steam VR compatitable head set and a controller to use this program. This game has you flying through space at ever increasing speeds while firing missles and dodging obsticles.`} 
        download="https://github.com/KihtrakRaknas/Star-Fox-VR/raw/master/PC%20Build.zip"
        code="https://github.com/KihtrakRaknas/Star-Fox-VR"
        RepoName="Star-Fox-VR"
        tools={["Unity","Steam VR"]} 
        languages={["C#"]}
        types={["PC Program", "Virtual Reality"]}
    />,
    <ProjectCard 
        title="Mr. Poot"
        RepoName="Mr.-Poot-App"
        img={require('./Imgs/mrPoot.png')}
        cloudImg="mrPoot"
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
        types={["iOS App","Android App"]}
        key="Mr. Poot"
    />,
    <ProjectCard
        img={require('./Imgs/NHSStaffFeedback.png')} 
        cloudImg="NHSStaffFeedback"
        title="NHS Staff Feedback Form"
        description="A website commissioned by my school's National Honors Society to get feedback about students who are applying. Signing into the site will require a @sbschools.org email (to prove you are a staff member)." 
        firstMonth="December"
        lastMonth="December"
        firstYear="2019"
        lastYear="2019"
        project="https://nhs-staff-feedback.github.io"
        code="https://github.com/nhs-staff-feedback/nhs-staff-feedback.github.io"
        tools={["Firebase Realtime Database"]} 
        languages={["JavaScript","HTML","CSS"]}
        types={["Website"]}
        key="NHSStaffFeedback"
    />,
    <ProjectCard
        title="REDirector"
        img={require('./Imgs/red.PNG')} 
        cloudImg="red"
        RepoName="RED" 
        project="https://red.kihtrak.com"
        tools={["Firebase Realtime Database"]} 
        languages={["JavaScript","HTML","CSS"]}
        lastMonth="February"
        lastYear="2019"
        types={["Website"]}
        key="REDirector"
    />,
    <ProjectCard
        title="Potato Co."
        img={require('./Imgs/potatoes.png')} 
        cloudImg="potatoes"
        RepoName="Potato-co" 
        project="https://potato.kihtrak.com/" 
        languages={["JavaScript","HTML","CSS"]}
        types={["Website"]}
        key="Potato Co."
    />,
    /*<ProjectCard 
        title="Old Homepage"
        img={require('./Imgs/old.PNG')} 
        cloudImg="old"
        description="One of my first experiences with HTML and CSS. It has been mildly vandalized and updated with hyperlinks to help web crawlers."
        RepoName="Old-Homepage"
        firstMonth="November"
        lastMonth="November"
        firstYear="2017"
        lastYear="2017"
        project="http://old.kihtrak.com"
        languages={["JavaScript","HTML","CSS"]}
        types={["Website"]}
        key="Old Homepage"
    />,*/
    <ProjectCard 
        title="Quick Set Up"
        img={require('./Imgs/setup.PNG')} 
        cloudImg="setup"
        RepoName="setup"
        project="https://setup.kihtrak.com/"
        types={["Website"]}
        key="Quick Set Up"
    />,
    <ProjectCard 
        title="A Lack Of Clarity"
        img={require('./Imgs/aLackOfClarity.PNG')} 
        cloudImg="aLackOfClarity"
        RepoName="clarity"
        description="A blog where talented teen writers share original works. This projected started as a fun quarantine challenge but it has become a large library of high quality works."
        project="https://kihtrak.com/clarity/"
        languages={["React","JavaScript","HTML","CSS"]}
        firstMonth="April"
        firstYear="2020"
        tools={["Firebase Realtime Database", "WordPress API"]} 
        types={["Website"]}
        key="A Lack Of Clarity"
    />,
    <ProjectCard 
        title="POPs Informational Website"
        img={require('./Imgs/POPs.PNG')} 
        cloudImg="POPs"
        RepoName="POPs"
        description="POPs are Persistent Organic Pollutants. I was given the responsibily to design a website about POPs as head programmer for the NJIT Chemistry Olympics. The site has some cool custom react components and custom animations."
        project="https://kihtrak.com/POPs/"
        languages={["React","JavaScript","HTML","CSS"]}
        firstMonth="May"
        firstYear="2020"
        lastMonth="May"
        lastYear="2020"
        types={["Website"]}
        key="POPs informational website"
    />,
    <ProjectCard 
        title="cloud_variable"
        //img={require('./Imgs/setup.PNG')} 
        //cloudImg="setup"
        RepoName="cloud_variable"
        project="https://kihtrak.com/cloud_variable/"
        serverCode="https://github.com/KihtrakRaknas/cloud_variable-server/"
        languages={["JavaScript","HTML","CSS","Node.js"]}
        firstMonth="May"
        firstYear="2020"
        lastMonth="May"
        lastYear="2020"
        tools={["Firebase Realtime Database"]} 
        types={["Website","Server"]}
        key="A Lack Of Clarity"
    />,
    <ProjectCard 
        title="Basic Calculator"
        RepoName="Calculator"
        img={require('./Imgs/calculator.png')}
        cloudImg="calculator"
        code="https://github.com/KihtrakRaknas/Calculator"
        androidDownload="https://play.google.com/store/apps/details?id=com.kihtrak.calculator"
        languages={["Java"]}
        tools={["Android Studio"]}
        types={["Android App"]}
        firstMonth="October"
        lastMonth="October"
        firstYear="2018"
        lastYear="2018"
        key="Basic Calculator"
    />,
    <ProjectCard
        title="3D Shooter"
        project="https://kihtrak.com/3d-shooter"
        RepoName="3d-shooter"
        img={require('./Imgs/3dShooter.png')}
        cloudImg="3dShooter"
        languages={["JavaScript","HTML","CSS","THREE.js"]}
        types={["Website"]}
        key="3D Shooter"
    />,
    <ProjectCard
        title="750S Team Website"
        img={require('./Imgs/750SSite.png')}
        cloudImg="750SSite"
        description="A Website for my high school's robotics team. Complete with team bios and a team-only attendance system."
        project="https://750s.github.io/"
        code="https://github.com/750S/750s.github.io"
        firstMonth="August"
        firstYear="2018"
        lastMonth="November"
        lastYear="2019"
        languages={["JavaScript","HTML","CSS"]}
        tools={["Google Sheets API"]}
        types={["Website"]}
        key="750S Team Website"
    />,
    <ProjectCard
        img={require('./Imgs/ninjaEvaluation.PNG')} 
        cloudImg="ninjaEvaluation"
        title="Ninja Evaluator"
        RepoName="Ninja-Evaluation"
        firstMonth="December"
        firstYear="2019"
        lastMonth="January"
        lastYear="2020"
        description="An online tracker for staff use. Tracks each student's belt, projects, age, login information, last belt up and other useful information. (Requires whitelisted email to access)"
        project="https://ninjaeval.kihtrak.com"
        code="https://github.com/KihtrakRaknas/Ninja-Evaluation"
        tools={["Firebase Realtime Database"]} 
        languages={["JavaScript","HTML","CSS"]}
        types={["Website","Work - Code Ninjas"]}
        key="ninjaEvaluation"
    />,
    <ProjectCard 
        title="Cannon Demo" 
        img={require('./Imgs/cannon.PNG')} 
        cloudImg="cannon"
        firstMonth="October"
        firstYear="2019"
        lastMonth="October"
        lastYear="2019"
        description={`A simple Unity project that lets you shoot chairs at tables.`} 
        download="https://github.com/KihtrakRaknas/Cannon-Demo/raw/master/PC%20Build.zip"
        code="https://github.com/KihtrakRaknas/Cannon-Demo"
        RepoName="Cannon-Demo"
        tools={["Unity"]} 
        languages={["C#"]}
        types={["PC Program"]}
    />,
    <ProjectCard
        img={require('./Imgs/oldRoboticsPortfolio.PNG')} 
        cloudImg="oldRoboticsPortfolio"
        title="Robotic's Portfolio from Sophomore year"
        description="My old Robotic's Portfolio from Sophomore year. It features some of the highlights of the code I wrote that season. There is a little easter egg if you have my friend's portfolio open at the same time as mine (which is why firebase was used)." 
        RepoName="Portfolio"
        firstMonth="April"
        firstYear="2018"
        lastMonth="April"
        lastYear="2018"
        project="https://kihtrak.com/Portfolio/"
        code="https://github.com/KihtrakRaknas/Portfolio"
        tools={["Firebase Realtime Database"]} 
        languages={["JavaScript","HTML","CSS"]}
        types={["Website","Portfolio"]}
        key="oldRoboticsPortfolio"
    />,
    <ProjectCard
        img={require('./Imgs/newRoboticsPortfolio.png')} 
        cloudImg="newRoboticsPortfolio"
        title="Robotics Portfolio from Junior year"
        description="My old Robotics Portfolio from Sophomore year. It features some of the highlights of the code I wrote that season. There is a little easter egg if you have my friend's portfolio open at the same time as mine (which is why firebase was used)." 
        RepoName="Robotics-Portfolio-2.0"
        firstMonth="April"
        firstYear="2019"
        lastMonth="April"
        lastYear="2019"
        project="https://roboticsportfolio.kihtrak.com/"
        code="https://github.com/KihtrakRaknas/Robotics-Portfolio-2.0"
        languages={["React","JavaScript","HTML","CSS"]}
        types={["Website","Portfolio"]}
        key="newRoboticsPortfolio"
    />,
    <ProjectCard
        //img={require('./Imgs/newRoboticsPortfolio.png')} 
        title="Sophomore Year Robot Code"
        description="As the co-head programmer for my robotics team, I wrote and maintained most of the code for the robot. The code was written for the Purdue Robotics Operating System (PROS)" 
        RepoName="2017-2018-Robotics-Code"
        firstMonth="December"
        firstYear="2017"
        lastMonth="August"
        lastYear="2018"
        code="https://github.com/KihtrakRaknas/2017-2018-Robotics-Code"
        languages={["C"]}
        tools={["PROS"]}
        types={["Vex EDR Cortex"]}
        key="Sophomore Year Robot Code"
    />,
    <ProjectCard
        //img={require('./Imgs/newRoboticsPortfolio.png')} 
        title="Junior Year Robot Code"
        description="As the head programmer and captain for my robotics team, I wrote and maintained most of the code for the robot. This year, the V5 brain (microcontroller) had just been released so we had no choice but to use the IDE provided by Vex." 
        firstMonth="January"
        firstYear="2019"
        lastMonth="March"
        lastYear="2019"
        code="https://github.com/750S/v5-2018-2019-comp.-code"
        languages={["C++"]}
        tools={["Vex Coding Studio"]}
        types={["Vex V5 Brain"]}
        key="Junior Year Robot Code"
    />,
    <ProjectCard
        //img={require('./Imgs/newRoboticsPortfolio.png')} 
        title="Senior Year Robot Code"
        description="As the head programmer and captain for my robotics team, I wrote and maintained most of the code for the robot. The code was written for the Purdue Robotics Operating System (PROS)" 
        RepoName="Tower-Takeover-X-Drive"
        code="https://github.com/KihtrakRaknas/Tower-Takeover-X-Drive"
        languages={["C++"]}
        tools={["PROS"]}
        types={["Vex V5 Brain"]}
        key="Senior Year Robot Code"
    />,
    <ProjectCard
        title="3D-Maze"
        RepoName="3D-Maze"
        description={`A maze created with Java and the swing library. Uses "fake 3D" like Doom.`}
        project="https://github.com/KihtrakRaknas/3D-Maze/archive/master.zip"
        img={require('./Imgs/maze.png')}
        cloudImg="maze"
        languages={["Java"]}
        key="3D-Maze"
    />,
    <ProjectCard
        img={require('./Imgs/myAwesomeStudio.png')} 
        cloudImg="myAwesomeStudio"
        title="Scratch Projects"
        description="Around middle school, I got super into making Scratch projects. This is a collection of every project I've published on Scratch" 
        project="https://scratch.mit.edu/studios/301189/"
        firstMonth="December"
        firstYear="2013"
        lastMonth="February"
        lastYear="2016"
        languages={["Scratch"]}
        key="myAwesomeStudio"
    />,
    <ProjectCard
        img={require('./Imgs/ActualTrash.png')} 
        cloudImg="ActualTrash"
        title={`"Actual Trash"`}
        firstMonth="May"
        firstYear="2017"
        lastMonth="May"
        lastYear="2017"
        description="A couple of friends and I attended our first hackathon (HackSBPL 2017) together and decided to make the silliest project imaginable" 
        page="https://devpost.com/software/actual-trash"
        project="https://scratch.mit.edu/projects/163450536/"
        languages={["Scratch"]}
        types={["Hackathon Project"]}
        key="ActualTrash"
    />,
    <ProjectCard
        img={require('./Imgs/multiPong.jpg')} 
        cloudImg="multiPong"
        title="MultiPong"
        RepoName="MultiPong"
        firstMonth="April"
        firstYear="2018"
        lastMonth="April"
        lastYear="2018"
        description="A hackathon project from HackSB 2018 created by me and some friends. You open the webpage on 2 phones side by side. Then you play pong with the ball going between the two people's screens. (This project was made as a demo, it has not been updated to handle more than 2 people using it at once)" 
        page="https://kihtrak.com/MultiPong/"
        project="https://devpost.com/software/multi-pong-extras"
        code="https://github.com/KihtrakRaknas/MultiPong"
        tools={["Firebase Realtime Database"]} 
        languages={["JavaScript","HTML","CSS"]}
        types={["Hackathon Project","Website"]}
        key="multiPong"
    />,
    <ProjectCard
        img={require('./Imgs/smartBottle.jpeg')} 
        cloudImg="smartBottle"
        title="Smart Bottle"
        RepoName="SmartBottleApp"
        firstMonth="November"
        firstYear="2019"
        lastMonth="November"
        lastYear="2019"
        description="A hackathon project from HackPHS 2019. It was made from a Raspberry Pi, Arduino, gyroscope and accelerometer attached to a water bottle. It connects to a react native app to display how much water you drank. The app also allows you to manually track water intake and water content of the food you eat." 
        page="https://devpost.com/software/smartbottle-dhg0uk"
        code="https://github.com/KihtrakRaknas/SmartBottleApp"
        additionalCode="https://github.com/evelyn-fu/SmartBottlePi"
        languages={["JavaScript","React Native","Node.js","Python","C++"]}
        types={["Hackathon Project","iOS App","Android App","Arduino","Raspberry Pi"]}
        key="Smart Bottle"
    />,
    <ProjectCard
        img={require('./Imgs/TubeCreation.png')} 
        cloudImg="TubeCreation"
        title="3D Printed Tube"
        firstMonth="August"
        firstYear="2018"
        lastMonth="October"
        lastYear="2018"
        description="One of my first custom 3D prints. It was a tube meant to simulate the exact diameter of an obstacle in that year's robotics competition. It took many attempts because I had to find a way to make it strong enough to hold a robot up yet cheap enough to print it at our public library." 
        page="https://roboticsportfolio.kihtrak.com/CAD/parkingTile"
        types={["Real-World","3D Printing"]}
        key="TubeCreation"
    />,
    <ProjectCard
        img={require('./Imgs/goldbelt.PNG')} 
        cloudImg="goldbelt"
        title="Goldbelt"
        firstMonth="April"
        firstYear="2019"
        lastMonth="May"
        lastYear="2019"
        description="A project meant to ease the transition between White Belt (Scratch projects) and Yellow Belt (Javascript)." 
        project="https://goldbelt.github.io/"
        code="https://github.com/goldbelt/goldbelt.github.io"
        tools={["Firebase Realtime Database"]} 
        languages={["JavaScript","HTML","CSS"]}
        types={["Website","Work - Code Ninjas"]}
        key="goldbelt"
    />,
    <ProjectCard
        img={require('./Imgs/ninjaBucks.PNG')} 
        cloudImg="ninjaBucks"
        title="NinjaBucks"
        RepoName="NinjaBucks"
        firstMonth="December"
        firstYear="2019"
        lastMonth="December"
        lastYear="2019"
        description='A chrome extension to modify the Code Ninjas kiosk to display "NinjaBucks" and a website for staff to add or remove the digital currency.' 
        project="https://nb.kihtrak.com/"
        code="https://github.com/KihtrakRaknas/NinjaBucks"
        additionalCode="https://github.com/KihtrakRaknas/NinjaBucksChromeExtension"
        tools={["Firebase Realtime Database"]} 
        languages={["JavaScript","HTML","CSS"]}
        types={["Website","Work - Code Ninjas"]}
        key="NinjaBucks"
    />,
    <ProjectCard 
        title="Top Down Shooter" 
        img={require('./Imgs/topDownShooter.PNG')} 
        cloudImg="topDownShooter"
        firstMonth="November"
        firstYear="2019"
        lastMonth="November"
        lastYear="2019"
        description={`A top down shooter style game`} 
        download="https://github.com/KihtrakRaknas/Top-Down-Shooter/raw/master/PC%20Build.zip"
        code="https://github.com/KihtrakRaknas/Top-Down-Shooter"
        RepoName="Top-Down-Shooter"
        tools={["Unity"]} 
        languages={["C#"]}
        types={["PC Program"]}
    />,
    <ProjectCard 
        title="Kihtrak.com" 
        img={require('./Imgs/Karthik-compressed.jpg')} 
        cloudImg="Karthik-small"
        description="A compilation of my projects! The website you are viewing right now" 
        project="https://kihtrak.com"
        code="https://github.com/KihtrakRaknas/KihtrakRaknas.github.io"
        RepoName="KihtrakRaknas.github.io"
        GithubBranch="Source"
        languages={["React","JavaScript","HTML","CSS"]}
        types={["Website","Portfolio"]}
        key="Kihtrak.com"
    />,
];
/*
    <ProjectCard
        img={require('./Imgs/Karthik-compressed.jpg')} 
        title="GradeView - iOS and Android App"
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
        types={["iOS App","Android App","Server"]}
    />,
*/
