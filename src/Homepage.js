import React, { Suspense } from 'react';
import './Homepage.css';
import favicon from './favicon.ico';
import Top from './Sections/Top';
import AboutMe from './Sections/AboutMe';
import ReactLoading from 'react-loading';
import Projects from './Sections/ProjectsPage';
import AroundTheWeb from './Sections/AroundTheWeb';
import { InView } from 'react-intersection-observer'
import isBot from './Utilities/isBot';
import init from 'dynamic-circuit';
//const Projects = React.lazy(() => import('./Sections/ProjectsPage'));
//const AroundTheWeb = React.lazy(() => import('./Sections/AroundTheWeb'));



export default class Homepage extends React.Component {
    constructor(props){
        super(props)
        this.state = {showProjects:true, showAroundTheWeb:false}
        this.canvas = React.createRef();
        this.canvasParent = React.createRef();
    }
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll)
        setTimeout(()=>init(this.canvas.current, {
            gridBoxSize: 50,
            color: {r: 240, g: 240, b: 240},
            initialNumberOfLines: 5,
            linesPerSecond:5,
            parent: this.canvasParent.current,
            lengthPerSecond: 30,
            shrink: .25
        }), 5000);
    }

    handleScroll = () =>{
        if(!this.state.showAroundTheWeb && window.innerHeight*2>document.getElementById('Around-The-Web').getBoundingClientRect().top)
            this.setState({showAroundTheWeb:true})
        if(!this.state.showProjects && window.innerHeight*2>document.getElementById('Projects').getBoundingClientRect().top){
            this.setState({showProjects:true})
        }
    }
    render(){
        let showProjects = this.state.showProjects
        if(!showProjects && window.innerHeight*2<window.scrollY)
            showProjects = true;
        return (   
            <div>
                {/* <DynamicCircuit/> */}
                <Top id="Top"/>
                <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
                    <div class="container-fluid">
                        <a className="navbar-brand" href="#Top">
                            <img src={favicon} style={{height:"100%", position:"relative", top:"-2px"}} alt="3D K spinning"></img><span>arthik's Personal Site</span>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-item nav-link" href="#Projects">Projects</a>
                                <a className="nav-item nav-link" href="#Around-The-Web">Around the Web</a>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid" style={{position:"relative"}} ref={this.canvasParent}>
                    <canvas ref={this.canvas} style={{zIndex:-1, position:"absolute", top:0, left:0, filter:"blur(3px)"}}></canvas>
                    <div id="Projects">
                        <br/><br/> {/*<Suspense fallback={<div className="contain"><h1>Loading…</h1><ReactLoading type={"bubbles"} color={"#000000"} height={'20%'} width={'20%'} className="text-center" /></div>}>
                            <Projects/>
        </Suspense>*/}
                        <Projects/>
                        
                    </div>
                    <br/>
                    <hr/>
                    <div id="Around-The-Web">
                        <br/><br/> {/* <Suspense fallback={<div className="contain"><h1>Still Loading…</h1><ReactLoading type={"bubbles"} color={"#000000"} height={'20%'} width={'20%'} className="text-center" /></div>}></Suspense>*/}
                        <InView style={{margin:0, padding:0}} onChange={(inView, entry) => {console.log(inView); if(inView){this.setState({showAroundTheWeb:true})}}} triggerOnce={true}>
                            {this.state.showAroundTheWeb || (isBot())?<AroundTheWeb/>:<div className="contain"><button type="button" className="btn btn-lg btn-danger" onClick={()=>this.setState({showAroundTheWeb:true})}>If you see this button, that means something went wrong. Click me to load the content.</button></div>}
                        </InView>
                    </div>
                    <br/><br/><br/>
                </div>
            </div>
        );
    }
}