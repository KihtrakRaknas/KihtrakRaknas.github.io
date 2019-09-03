import React from 'react';
import './Homepage.css';
import favicon from './favicon.ico';
import Top from './Sections/Top';
import AboutMe from './Sections/AboutMe';

export default class Homepage extends React.Component {
    render(){
        return (   
            <div>
                <Top/>
                <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                    <a class="navbar-brand" href="#"><img src={favicon} style={{height:"100%"}}></img><span>arthik</span></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ml-auto">
                        <a class="nav-item nav-link" href="#About-Me">About Me</a>
                        <a class="nav-item nav-link" href="#2">Projects</a>
                        <a class="nav-item nav-link" href="#3">Around the Web</a>
                        </div>
                    </div>
                </nav>
                <div class="container-fluid">
                    <div id="About-Me"><AboutMe/></div>

                    
                    <div id="2" style={{height:"10000px"}}></div>

                    <div id="3" style={{height:"10000px"}}></div>
                </div>
            </div>
        );
    }
}