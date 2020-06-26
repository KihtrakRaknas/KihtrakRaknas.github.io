import React from 'react';
import Tada from 'react-reveal/Tada';
import './AroundTheWeb.css'
import {Image, Transformation} from 'cloudinary-react';
const randomEmoji = require('random-emoji');

export default class AroundTheWeb extends React.Component {
    constructor(props){
        super(props);
        this.state={
            captcha:false,
            first:null
        }
    }
    checkEmoji = (emojiName) =>{
        if(this.state.first){
            if(this.answer == emojiName)
                this.setState({captcha:true,email:"contact"})
            else
                this.setState({first:false})
        }else{
            if(this.answer == emojiName)
                this.setState({first:true})
            else
                this.setState({first:false})
        }
    }
    render(){
        let emojis = []     
        let emojiNames = []
        while(emojis.length<5){
            let emojii = randomEmoji.random({count: 1})[0]
            let name = emojii.name.replace(/_/g,' ')
            if(!emojiNames.includes(name) && /^[a-zA-Z$@$!%*?&#^-_. +]+$/.test(name)){
                emojiNames.push(name)
                emojis.push(<a onClick={()=>this.checkEmoji(name)}>{emojii.character}</a>)
            }
        }
        this.answer=emojiNames[Math.floor(Math.random()*5)]
        return(
            <div>
                <h1 className="text-center display-3">Karthik Sankar Around The Web</h1>
                <p className="txtAroundWeb text-center">Wait, is this the Karthik Sankar that you're looking for? See if any of these help you identify me:</p>
                <br/>
                <div className="row">
                    <div className="col-md-4 text-center mb-4">
                        <a href="https://www.instagram.com/kihtrakr/">
                            <Image cloudName="kihtrak" publicId={'Instagram_AppIcon'} alt="Instagram Logo" secure="true" dpr="auto" responsive width="50"><Transformation fetchFormat="auto"/></Image>
                            <strong className="id ml-4">@KihtrakR</strong>
                        </a>
                    </div>
                    <div className="col-md-4 text-center mb-4">
                        <a href="https://github.com/kihtrakRaknas">
                            <img style={{width:50}} alt="Github Logo" width="50" loading="lazy" src="https://image.flaticon.com/icons/svg/25/25231.svg"/>
                            <strong className="id ml-4">KihtrakRaknas
                            </strong>
                        </a>
                    </div>
                    <div className="col-md-4 text-center mb-4">
                        <a href="https://linkedin.com/in/karthik-sankar-a5a523178">
                            <Image cloudName="kihtrak" publicId={'LinkedIn_logo2'} dpr="auto" responsive width="50" alt="LinkedIn Logo" secure="true"><Transformation fetchFormat="auto"/></Image>
                            <strong className="id ml-4">Karthik Sankar</strong>
                        </a>
                    </div>
                </div>
                <br/>
                <br/>
                <h1 id="Contact-Me" className="text-center display-4">Contact Me!</h1>
                <br/>
                <p className="txtAroundWeb text-center">Please don't hesitate to contact me. As long as you are a real person.</p>
                <br/>
                {this.state.captcha?null:<div>
                    <p className="text-center txtAroundWeb"><strong>{this.state.first!=null?this.state.first==false?"Your last answer was wrong. Try again.":"Just one more!":null}</strong></p>
                <p className="text-center txtAroundWeb">Select the icon which most closely resembles: <strong>{this.answer}</strong></p>
                    <p className="text-center" style={{fontSize:"10vw"}}>{emojis}</p>
                </div>}
                <div style={{overflowX:"hidden"}}>
                    {this.state.captcha?<Tada><p className="email text-center">Email me at: <a href={"mailto:"+this.state.email+"@kihtrak.com"}>{this.state.email}@kihtrak.com</a></p></Tada>:<p className="email text-center">Please complete this custom captcha to view contact information</p>}
                </div>
            </div>
        );
    }
}