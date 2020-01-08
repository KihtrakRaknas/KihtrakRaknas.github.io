import React from 'react';
import { Parallax as ImgPara } from 'react-parallax';
import Parallax from 'react-rellax';
import './Top.css';
var ReactRotatingText = require('react-rotating-text');

export default class Top extends React.Component {
    render(){
        return(
            <ImgPara
                bgImage = {window.outerWidth>992?require('../Imgs/Karthik.webp'):require('../Imgs/Karthik-compressed.webp')}
                bgImageAlt="A picture of Karthik Sankar"
                bgImageStyle={window.chrome?{ height: '200vh',overflow: 'hidden', width: 200*5184/3456+'vh'}:{}}
                strength={-300}
            >
                <div style={{ height: '100vh' }} >
                    <Parallax centered={true} className="center-vert" speed={10} style={{fontSize:"10vh",color:"black", fontWeight: "bold"}}><ReactRotatingText items={['Karthik Sankar', 'Kihtrak Raknas']} /></Parallax>
                </div>
            </ImgPara>
        );
    }
}