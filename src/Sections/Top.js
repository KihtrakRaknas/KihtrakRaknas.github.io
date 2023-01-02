import React from 'react';
import { Parallax as ImgPara } from 'react-parallax';
import Parallax from 'react-rellax';
import AboutMe from './AboutMe';
import './Top.css';
import isBot from '../Utilities/isBot';
import init from 'dynamic-circuit';
var ReactRotatingText = require('react-rotating-text');

export default class Top extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
        this.canvasParent = React.createRef();
        this.state = {
            scrollDownOp: 1
        }
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
        const primaryColor = Math.floor(Math.random()*3)
        const color = {
            r: Math.random()*255/2 + (primaryColor === 0?255/2:0),
            g: Math.random()*255/2 + (primaryColor === 1?255/2:0),
            b: Math.random()*255/2 + (primaryColor === 2?255/2:0),
        }
        setTimeout(()=>init(this.canvas.current, {
          gridBoxSize: 30,
          lengthPerSecond: 150,
          color,
          initialNumberOfLines:40,
          linesPerSecond:10,
          parent: this.canvasParent.current,
        }), 50);
    }

    handleScroll = () =>{
        this.setState({scrollDownOp: Math.min(this.state.scrollDownOp, 1 - window.scrollY/window.innerHeight*4)})
    }

    render(){
        return(
            <div style={{ height: '100vh', width:'100%', overflow:'hidden', position:"relative"}} ref={this.canvasParent} class="d-flex flex-column justify-content-center p-4">
                <canvas ref={this.canvas} style={{zIndex:-1, position:"absolute", top:0, left:0}}></canvas>
                <Parallax speed={-3}>
                    <div class="d-flex flex-row justify-content-center row">
                        <img src={require('../Imgs/Karthik-headshot-2022.png')} alt="A profile picture of Karthik Sankar" className='rounded-circle profile' style={{padding:0}}/>
                        <div className="p-4 mx-md-5 mx-1 mt-md-1 mt-3" style={{backgroundColor: "#F9F9F9F9", borderRadius: 20, height:"fit-content", boxShadow:"gray 3px 3px 10px", width:"fit-content"}}>
                            <h1 class="display-1 text-center" style={{fontFamily:"Kanit"}}>
                                <p style={{visibility:'hidden', height:0, margin:0}}>Karthik Sankar|</p>
                                {isBot()?"Karthik Sankar":<ReactRotatingText items={['Karthik Sankar', 'Kihtrak Raknas']} />}
                            </h1>
                            <hr/>
                            <AboutMe/>
                        </div>
                    </div>
                
                </Parallax>
                <div style={{position:'absolute', bottom:3, left:0, right:0, width:'auto', opacity:this.state.scrollDownOp}}>
                    <p class="text-center text-muted">⬇️Scroll down⬇️</p>
                </div>
            </div>
        );
    }
}