import React from 'react';
import './slider.css';
import banner from '../../Images/banner__image__1.png'
import banner2 from '../../Images/banner__image__2.png'

// This is for test 




// const [currImg, setImg] = useState(img[0].imgPath);
// setInterval(slider, 1000);

function slider() {
    const img = [
        {
            imgPath: banner,
            label: 'Mumbai Stock Exchange'
    
        },
        {
            imgPath: banner2,
            label: 'Kolkata Stock Exchange'
        }
    ];
    // if(currImg == img[0].imgPath)
    //     setImg(img[1]);
    // else
    //     setImg(img[0]);
    return(
        <div className='home__container'>
            <img src={img[0].imgPath} alt='Banner'></img>
        </div>
    )
}

export default slider;