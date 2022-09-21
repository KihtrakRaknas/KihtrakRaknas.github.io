import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Jump from 'react-reveal/Jump';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool ,faSearchLocation, faBriefcase , faRobot, faLaptopCode, faBook } from '@fortawesome/free-solid-svg-icons'
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
                <Bounce bottom>
                    <h1 className="text-center display-2">About Me</h1>
                </Bounce>
                <Jump>
                <br/>
                </Jump>
                <div className="row" style={{overflowX:'hidden'}}>
                    <div className="col-md-6 px-4 px-sm-5">
                        <table>
                            <Zoom left>
                                <tr>
                                    <td><FontAwesomeIcon icon={faSearchLocation} size={Math.round(this.state.vmin/350)+"x"} style={{marginRight:"10px"}}/></td>
                                    <td className="icon-text">New Jersey (South Brunswick)</td>
                                </tr>
                                <br/>
                                <tr>
                                    <td><FontAwesomeIcon icon={faSchool} size={Math.round(this.state.vmin/350)+"x"} style={{marginRight:"10px"}}/></td>
                                    <td className="icon-text">University Of Maryland - College Park</td>
                                </tr>
                                <br/>
                                <tr>
                                    <td><FontAwesomeIcon icon={faBook} size={Math.round(this.state.vmin/350)+"x"} style={{marginRight:"10px"}}/></td>
                                    <td className="icon-text">    Math and Computer Science Major</td>
                                </tr>
                            </Zoom>
                        </table>
                        <br/>
                    </div>
                    
                    <div className="col-md-6 px-4 px-sm-5">
                        <table>
                            <Slide right >
                                    <tr>
                                        <td><FontAwesomeIcon icon={faBriefcase} size={Math.round(this.state.vmin/350)+"x"} style={{marginRight:"10px"}}/></td>
                                        <td className="icon-text">Full Time Student</td>
                                    </tr>
                                    <br/>
                                    <tr>
                                        <td><FontAwesomeIcon icon={faRobot} size={Math.round(this.state.vmin/350)+"x"} style={{marginRight:"10px"}}/></td>
                                        <td className="icon-text">Maker</td>
                                    </tr>
                                    <br/>
                                    <tr>
                                        <td><FontAwesomeIcon icon={faLaptopCode} size={Math.round(this.state.vmin/350)+"x"} style={{marginRight:"10px"}}/></td>
                                        <td className="icon-text">Full-stack developer</td>
                                    </tr>
                            </Slide>
                        </table>
                        <br/>
                    </div>
                </div>
                <div>

                </div>
            </div>
        );
    }
}