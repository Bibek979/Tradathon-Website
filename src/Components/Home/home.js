import './home__style.css';
import React from 'react';
import Slider from '../Slider/slider';
import Qoutes from '../Components__qoutes/qoutes';
import LearnHeading from '../Components__learn/learn__heading';
import LearnContent from '../Components__learn/learn__content';
import Section from '../whoAreWeSection/section';
import img1 from '../../Images/research.png';
import img2 from '../../Images/wait.png';
import img3 from '../../Images/target.png';
import img4 from '../../Images/trade.png';


function Home() {

    return(
        <div>
            <Slider />
            <Qoutes />
            <LearnHeading sectionHead='Learn'/>
            <div className='learn__cards'>
                <LearnContent head='Research' currImg={img1} />
                <LearnContent head='Wait' currImg={img2}/>
                <LearnContent head='Target' currImg={img3}/>
                <LearnContent head='Trade' currImg={img4}/>
            </div>
            <LearnHeading sectionHead='Who are we ?' />
            <Section />            
        </div>
    )
}

export default Home;