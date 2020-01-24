import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Jump from 'react-reveal/Jump';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool ,faSearchLocation, faBriefcase , faRobot, faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import './AboutMe.css'
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

export default class AboutMe extends React.Component {
    constructor(){
        super();
        var vmin = window.innerHeight
        if(window.innerWidth<vmin)
            vmin = window.innerWidth
        this.state = {
            vmin:  vmin
        }

    }

    getMin() {
        if(window.innerWidth<window.innerHeight)
            return window.innerWidth
        return window.innerHeight
    }

    updateDimensions() {
        var min = this.getMin()
            this.setState({ vmin: min });
    }


    
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    render(){
        return(
            <div>
                <br/>
                <br/>
                <Bounce bottom>
                    <h1 className="text-center display-2">About Me</h1>
                </Bounce>
                <Jump>
                    
                </Jump>
                <div className="row" style={{overflowX:'hidden'}}>
                    <div className="col-md-6 text-center">
                        <Zoom left>
                            <div>
                                <FontAwesomeIcon icon={faSearchLocation} size={Math.round(this.state.vmin/350)+"x"} style={{marginRight:"10px"}}/>
                                <span className="icon-text">New Jersey</span>
                            </div>
                            <br/>
                            <div>
                                <FontAwesomeIcon icon={faSchool} size={Math.round(this.state.vmin/350)+"x"} style={{marginRight:"10px"}}/>
                                <span className="icon-text">South Brunswick High School</span>
                            </div>
                            <br/>
                            <div>
                                <FontAwesomeIcon icon={faRobot} size={Math.round(this.state.vmin/350)+"x"} style={{marginRight:"10px"}}/>
                                <span className="icon-text">Captain of <a href="http://750s.github.io">750S</a></span>
                            </div>
                            <br/>
                            <div>
                                <FontAwesomeIcon icon={faBriefcase} size={Math.round(this.state.vmin/350)+"x"} style={{marginRight:"10px"}}/>
                                <span className="icon-text">Teach programming @ Code Ninjas</span>
                            </div>
                            <br/>
                        </Zoom>
                    </div>
                    <div className="col-md-6 text-center">
                        <Slide right>
                            <FontAwesomeIcon icon={faLaptopCode} size={Math.round(this.state.vmin/175)+"x"} style={{marginRight:"10px"}}/>
                            <p className="about-txt">Full-stack developer</p>
                            <p className="about-txt">Fluent in HTML, CSS, Javascript, Node.js, Java & C++</p>
                            <p className="about-txt">Favorite frameworks: React & React Native</p>
                            <p className="about-txt">Favorite editors: Andriod Studio, Visual Studio Code & Xcode</p>
                        </Slide>
                    </div>
                </div>
                <div>

                </div>
            </div>
        );
    }
}