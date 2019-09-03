import React from 'react';
import { Parallax as ImgPara } from 'react-parallax';
import Parallax from 'react-rellax';
import Bounce from 'react-reveal/Bounce';
import Jump from 'react-reveal/Jump';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome , faSchool ,faSearchLocation} from '@fortawesome/free-solid-svg-icons'
import './AboutMe.css'
import Zoom from 'react-reveal/Zoom';
var ReactRotatingText = require('react-rotating-text');


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
        console.log(this.state.vmin)
        return(
            <div>
                <br/>
                <Bounce bottom>
                    <h1 className="text-center display-2">About Me</h1>
                </Bounce>
                <Jump>
                    
                </Jump>
                <div class="row">
                    <div class="col-md-6 text-center" style={{backgroundColor:"yellow"}}>
                        <Zoom left>
                            <div>
                                <FontAwesomeIcon icon={faSearchLocation} size={Math.round(this.state.vmin/350)+"x"} style={{marginRight:"10px"}}/>
                                <span className="oi oi-home"></span><span class="icon-text">New Jersery</span>
                            </div>
                            <br/>
                            <div>
                                <FontAwesomeIcon icon={faSchool} size={Math.round(this.state.vmin/350)+"x"} style={{marginRight:"10px"}}/>
                                <span className="oi oi-home"></span><span class="icon-text">South Brunswick High School</span>
                            </div>
                        </Zoom>
                    </div>
                    <div class="col-md-6" style={{backgroundColor:"pink"}}>
                        <p className="text-center about-txt">I'm a full stack developer</p>
                    </div>
                </div>
            </div>
        );
    }
}