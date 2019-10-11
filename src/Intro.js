import React, { Component } from 'react';
import './intro.css';

class Intro extends Component{
    render(){
        return(
            <div className="container2">
                <p>Hi there! My name is</p>
                <div className="c3">
                    <b>Lucia Wei :)</b>
                </div>
                <p className="c4">I'm a 4th year computer science major at Case Western Reserve interested in <b>UX</b> and <b>design systems</b>. Currently looking for entry-level full time positions (especially in Denver!).
                <br></br><br></br>
                <a href={"https://www.tinyurl.com/llwresume"}>resume</a> &nbsp;//&nbsp;&nbsp;<a href={"https://www.linkedin.com/in/lucia-wei-278bb5163/"}>linkedin</a> &nbsp;//&nbsp; <a href="">art</a>
                </p>
                <div className="c10">
                    <hr style={{color: 'rbg(255,255,255,.5)', width : '700px', display : 'block'}}></hr>
            
            </div>

            
            </div>
            
        )
    }
}

export default Intro