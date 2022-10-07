import React from 'react';
import { Parallax as ImgPara } from 'react-parallax';
import Parallax from 'react-rellax';
import './Top.css';
var ReactRotatingText = require('react-rotating-text');

export default class Top extends React.Component {
    render(){
        return(
            <ImgPara
                bgImage = {require('../Imgs/Karthik-2022.webp')}
                bgImageAlt="A picture of Karthik Sankar"
                bgImageStyle={window.chrome?{ height: '200vh',overflow: 'hidden', width: 200*5184/3456+'vh'}:{}}
                strength={-300}
            >
                <div style={{ height: '100vh' }} >
                    <Parallax centered={true} className="center-vert" percentage={window.outerHeight>700?.1:window.outerHeight>620?.1:.3} speed={-3} style={{fontSize:"10vh",color:"black", fontWeight: "bold"}}><ReactRotatingText items={window.outerWidth/window.outerHeight>=.8?['Karthik Sankar', 'Kihtrak Raknas']:['Karthik', 'Kihtrak']} /></Parallax>
                </div>
            </ImgPara>
        );
    }
}