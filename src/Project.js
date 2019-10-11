import React, { Component } from 'react'
import './Project.css';
import './intro.css';

const ProjectBody = props => {
    const obj = props.projectData.map((row, index) => {
        return (
            <tr key={index} >
                <div class="project-container">
                    <div class="project">
                        <div class="project-content">
                            <div class="project-label">{row.company}</div>
                                <h4 class="project-title">{row.name}</h4>
                                <div class="project-details">
                                    <p>{row.desc}</p>
                                    <ul>
                                        <li>{row.progs}</li>
                                    </ul>
                                </div>
                            </div>
                        
                        <div class="project-img">
                          <img src={row.url} />
                        </div>
                    </div>
                </div>
            </tr>
        )
    })

    return <div className="surrounding">{obj}</div>
}

class Project extends Component{
    render(){
        const { projectData } = this.props
        
        return(
            <ProjectBody projectData={projectData} />
        )
    }
}

export default Project