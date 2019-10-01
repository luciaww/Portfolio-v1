import React, { Component } from 'react'

const IntroContent = () => {
    const obj = () => {
        return(
            <p>I'm a fourth year CS major @CWRU</p>
        )
    }

    return<div>{obj}</div>
}

class Intro extends Component{
    render(){
        return(
            <IntroContent />
        )
    }
}

export default Intro