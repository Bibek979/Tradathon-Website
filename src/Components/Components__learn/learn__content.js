import './learn__content__style.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function learn__content(props) {
    return(
        <div className='card'>
            <img className='myCustomCardImg' alt='Learn some thing new' src={props.currImg}></img>
            <h3 className='myCustomCardTitle card-title py-3'>{props.head}</h3>
            <p className='card-text'>All the content will go in here. And it will be dynamic with props</p>
        </div>
    )
}

export default learn__content;