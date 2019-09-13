import React from 'react';
import Jump from 'react-reveal/Jump';
import Tada from 'react-reveal/Tada';
import './AroundTheWeb.css'
import ReCAPTCHA from "react-google-recaptcha";

export default class AroundTheWeb extends React.Component {
    constructor(props){
        super(props);
        this.state={
            captcha:false,
        }
    }
    render(){
        return(
            <div>
                <h1 class="text-center display-3">Karthik Sankar Around The Web</h1>
                <p class="txtAroundWeb text-center">Wait, is this the Karthik Sankar that I'm thinking of? See if any of these help you identify me:</p>
                <br/>
                <div class="row">
                    <div class="col-md-4 text-center mb-4">
                        <a href="https://www.instagram.com/kihtrakr/">
                            <img class="aroundWebImg" alt="Instagram Logo" loading="lazy" src="https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png?w=300"/>
                            <strong class="id ml-4">@KihtrakR</strong>
                        </a>
                    </div>
                    <div class="col-md-4 text-center mb-4">
                        <a href="https://github.com/kihtrakRaknas">
                            <img class="aroundWebImg" alt="Github Logo" loading="lazy" src="https://image.flaticon.com/icons/svg/25/25231.svg"/>
                            <strong class="id ml-4">KihtrakRaknas
                            </strong>
                        </a>
                    </div>
                    <div class="col-md-4 text-center mb-4">
                        <a href="https://linkedin.com/in/karthik-sankar-a5a523178">
                            <img class="aroundWebImg" alt="LinkedIn Logo" loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"/>
                            <strong class="id ml-4">Karthik Sankar</strong>
                        </a>
                    </div>
                </div>
                <br/>
                <br/>
                <h1 class="text-center display-4">Contact Me!</h1>
                <br/>
                {this.state.captcha?null:<div class="contain">
                    <ReCAPTCHA
                        sitekey="6LfXL7gUAAAAAIdctYLl1yDvN_vS8j2IHqgHbppS"
                        onChange={()=>this.setState({captcha:true,email:"contact"})}
                    />
                </div>}
                {this.state.captcha?<Tada><p class="email text-center">Email me at: <a href={"mailto:"+this.state.email+"@kihtrak.com"}>{this.state.email}@kihtrak.com</a></p></Tada>:<p class="email text-center">Please complete the captcha to view contact information</p>}
            </div>
        );
    }
}