import React, { Component } from 'react'
import Project from './Project'
import './App.css';

import h from './img/oke.jpg'
import h2 from './img/h.png'
import h3 from './img/h2.png'

class App extends Component {
  render() {
    const projects = [
      {
        company: 'Spectrum, 2019',
        name: 'Motion Design System',
        desc: 'Spearheaded the motion design system at Spectrum during the course of a 10 week internship.',
        url: h,
      },
      {
        company: 'Element, 2019',
        name: 'Cloud Gaming UI Design',
        desc: 'Created initial mockups for a new cloud gaming platform.',
        url: h2,
      },
      {
        company: 'ARTS200, 2019',
        name: 'Pet Adoption App Design',
        desc: 'Worked on designing all screens for an application that would allow pet adopters to find their forever companions.',
        url: h3,
      },
    ]


    return(
      <div className="container">
        <Project projectData={projects} />
      </div>
    )
  }
}

export default App