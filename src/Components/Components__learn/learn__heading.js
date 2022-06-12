import './learn__heading.css'
import React from 'react';

function learn__heading(props){
    return(
        <div className='learn__head__container'>
            <h1>{props.sectionHead}</h1>
        </div>
    )
}


export default learn__heading;