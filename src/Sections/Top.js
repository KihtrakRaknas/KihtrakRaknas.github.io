import React from 'react';
import { Parallax as ImgPara } from 'react-parallax';
import Parallax from 'react-rellax';
import './Top.css';
var ReactRotatingText = require('react-rotating-text');

export default class Top extends React.Component {
    render(){
        return(
            <ImgPara
                bgImage = {require('../Imgs/Karthik.JPG')}
                bgImageAlt="A picture of Karthik Sankar"
                strength={-300}
            >
                <div style={{ height: '100vh' }} >
                    <Parallax centered={true} class="center-vert" speed={10} style={{fontSize:"10vh",color:"black", fontWeight: "bold"}}><ReactRotatingText items={['Karthik Sankar', 'Kihtrak Raknas']} /></Parallax>
                </div>
            </ImgPara>
        );
    }
}