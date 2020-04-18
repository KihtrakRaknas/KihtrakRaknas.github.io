import React, { Suspense } from 'react';
import './Homepage.css';
import favicon from './favicon.ico';
import Top from './Sections/Top';
import AboutMe from './Sections/AboutMe';
import ReactLoading from 'react-loading';

const Projects = React.lazy(() => import('./Sections/ProjectsPage'));
const AroundTheWeb = React.lazy(() => import('./Sections/AroundTheWeb'));

export default class Homepage extends React.Component {
    state = {showProjects:false}
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = () =>{

        if(!this.state.showProjects && window.innerHeight*2>document.getElementById('Projects').getBoundingClientRect().top)
            this.setState({showProjects:true})
    }
    render(){
        let showProjects = this.state.showProjects
        if(!showProjects && window.innerHeight*2<window.scrollY)
            showProjects = true;
        return (   
            <div>
                <Top id="Top"/>
                <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                    <a className="navbar-brand" href="#Top"><img src={favicon} style={{height:"100%"}} alt="3D K spinning"></img><span>arthik</span></a>
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
                <div className="container-fluid" >
                    <h1 className="display-1 text-center">Karthik Sankar</h1>
                    <br/>
                    <br/>
                    <div id="About-Me"><AboutMe/></div>
                    <br/>
                    <div id="Projects">
                        <br/><br/>
                        {this.state.showProjects?<Suspense fallback={<div className="contain"><h1>Loading…</h1><ReactLoading type={"bubbles"} color={"#000000"} height={'20%'} width={'20%'} className="text-center" /></div>}>
                            <Projects/>
                        </Suspense>:<div className="contain"><button type="button" className="btn btn-lg btn-danger" onClick={()=>this.setState({showProjects:true})}>If you see this button, that means something went wrong. Click me to load the content.</button></div>}
                    </div>
                    <br/>
                    <div id="Around-The-Web">
                        <br/><br/>
                        <Suspense fallback={<div className="contain"><h1>Still Loading…</h1><ReactLoading type={"bubbles"} color={"#000000"} height={'20%'} width={'20%'} className="text-center" /></div>}>
                            <AroundTheWeb/>
                        </Suspense> 
                    </div>
                    <br/><br/><br/>
                </div>
            </div>
        );
    }
}