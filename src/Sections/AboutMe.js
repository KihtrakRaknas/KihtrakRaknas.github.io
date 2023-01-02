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
        this.state = {
            vmax: this.getMin()
        }
    }

    getMin() {
        if(window.innerWidth>window.innerHeight)
            return window.innerWidth
        return window.innerHeight
    }

    updateDimensions() {
        var min = this.getMin()
        this.setState({ vmax: min });
    }


    
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    render(){
        console.log(Math.round(this.state.vmax/350))
        return(
            <div className="row" style={{overflow:'hidden'}}>
                <div className="col-md-6 position-relative">
                    <table>
                        <Bounce left>
                            <tr>
                                <td><FontAwesomeIcon icon={faBriefcase} size={"2x"} style={{marginRight:"10px"}}/></td>
                                <td className="icon-text">Student</td>
                            </tr>
                        </Bounce>
                        <div class="vertical-spacer"/>
                        <Bounce left delay={100}>
                            <tr>
                                <td><FontAwesomeIcon icon={faRobot} size={"2x"} style={{marginRight:"10px"}}/></td>
                                <td className="icon-text">Maker</td>
                            </tr>
                        </Bounce>
                        <div class="vertical-spacer"/>
                        <Bounce left delay={200}>
                            <tr>
                                <td><FontAwesomeIcon icon={faLaptopCode} size={"2x"} style={{marginRight:"10px"}}/></td>
                                <td className="icon-text">Full-stack developer</td>
                            </tr>
                        </Bounce>
                    </table>
                    <div class="vertical-spacer"/>
                </div>
                <div className="col-md-6 position-relative">
                    <table>
                        <Bounce right>
                            <tr>
                                <td><FontAwesomeIcon icon={faSchool} size={"2x"} style={{marginRight:"10px"}}/></td>
                                <td className="icon-text">UMD</td>
                            </tr>
                        </Bounce>
                        <div class="vertical-spacer"/>
                        <Bounce right delay={100}>
                            <tr>
                                <td><FontAwesomeIcon icon={faBook} size={"2x"} style={{marginRight:"10px"}}/></td>
                                <td className="icon-text">Math & CS</td>
                            </tr>
                        </Bounce>
                        <div class="vertical-spacer"/>
                        <Bounce right delay={200}>
                            <tr>
                                <td style={{verticalAlign:"top"}}><FontAwesomeIcon icon={faSearchLocation} size={"2x"} style={{marginRight:"10px"}}/></td>
                                <td className="icon-text">South Brunswick - NJ<br/>College Park - MD</td>
                            </tr>
                        </Bounce>
                    </table>
                </div>
            </div>
        );
    }
}