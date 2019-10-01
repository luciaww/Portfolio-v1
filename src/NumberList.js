import React, { Component } from 'react'
import './Project.css';

function NumberList(props) {
    const numbers = props.progs;
    const listItems = numbers.map((number) =>
        <li key={index}>
          {number}
        </li>
    );
    return (
        
    );
}

const numbers = [1, 2, 3, 4, 5];
    ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);

class NumberList extends Component{
    render(){
        const { projectData } = this.props
        
        return(
            <ProjectBody projectData={projectData} />
        )
    }
}

export default NumberList;