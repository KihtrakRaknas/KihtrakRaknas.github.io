import React from 'react';
import './Homepage.css';
import favicon from './favicon.ico';
import Top from './Sections/Top';
import AboutMe from './Sections/AboutMe';
import Projects from './Sections/Projects';

export default class Homepage extends React.Component {
    render(){
        return (   
            <div>
                <Top/>
                <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                    <a class="navbar-brand" href="#"><img src={favicon} style={{height:"100%"}} alt="3D K spinning"></img><span>arthik</span></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ml-auto">
                        <a class="nav-item nav-link" href="#About-Me">About Me</a>
                        <a class="nav-item nav-link" href="#Projects">Projects</a>
                        <a class="nav-item nav-link" href="#3">Around the Web</a>
                        </div>
                    </div>
                </nav>
                <div class="container-fluid">
                    <div id="About-Me"><AboutMe/></div>
                    <br/><br/><br/>
                    <div id="Projects"><Projects/></div>
                    <h6 class="display-3 text-center"><br/>THIS SITE IS STILL A WORK IN PROGRESS. </h6>
                </div>
            </div>
        );
    }
}