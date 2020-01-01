import React from 'react';
import './Homepage.css';
import favicon from './favicon.ico';
import Top from './Sections/Top';
import AboutMe from './Sections/AboutMe';
import Projects from './Sections/ProjectsPage';
import AroundTheWeb from './Sections/AroundTheWeb';

export default class Homepage extends React.Component {
    render(){
        return (   
            <div>
                <Top/>
                <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                    <a className="navbar-brand" href="#"><img src={favicon} style={{height:"100%"}} alt="3D K spinning"></img><span>arthik</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                        <a className="nav-item nav-link" href="#About-Me">About Me</a>
                        <a className="nav-item nav-link" href="#Projects">Projects</a>
                        <a className="nav-item nav-link" href="#Around-The-Web">Around the Web</a>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid">
                    <h1 className="display-1 text-center">Karthik Sankar</h1>
                    <br/>
                    <br/>
                    <div id="About-Me"><AboutMe/></div>
                    <br/><br/><br/>
                    <div id="Projects"><Projects/></div>
                    <br/><br/><br/>
                    <div id="Around-The-Web"><AroundTheWeb/></div>
                    <br/><br/><br/>
                </div>
            </div>
        );
    }
}