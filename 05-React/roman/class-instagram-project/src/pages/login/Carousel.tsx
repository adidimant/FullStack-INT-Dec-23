import React from 'react'
import './Carousel.scss'
import img1 from './images/screenshot1.png'
import img2 from './images/screenshot2.png'
import img3 from './images/screenshot3.png'
import img4 from './images/screenshot4.png'

const images = [img1,img2,img3,img4];

    

function Carousel(){
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentIndex === images.length - 1) {
                setCurrentIndex(0);
            } 
            else {
                 setCurrentIndex(currentIndex + 1);
            }
        }, 4000)
        
        return () => clearInterval(intervalId);
    }, [currentIndex])

    return (
        <div className="carousel">
          <div className="carousel-phone">
           <img className='carousel-phone-img' src={images[currentIndex]}  />
          </div>
            </div>
    )
}



export default Carousel;