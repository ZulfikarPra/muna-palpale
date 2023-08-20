import React from 'react'
import { useState } from 'react'

function imageSlider({slides}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentIndex, setCurrentIndex] = useState(0);
    // const [currentIndex,setCurrentUser] = useState(0)
    //   const [email, setEmail] = useState('');
    // console.log(slides.slides[currentIndex].url)
    const slideStyles = {
        width : '100%',
        height: '100%',
        backgroundImage: `url(${slides[currentIndex].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    const sliderStyles= {
        height: '100%',
        position : 'relative'
    }
    const goToPrevious = () =>{
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide? slides.length -1 : currentIndex-1;
      setCurrentIndex(newIndex);
      // console.log
    }
    const goToNext = () =>{
      const isLastSlide = currentIndex === slides.length-1;
      const newIndex = isLastSlide? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }
  return (
    <div className="" style={sliderStyles}>
        <div className="leftArrow" onClick={goToPrevious}>&lsaquo;</div>
        <div className="rightArrow" onClick={goToNext}>&rsaquo;</div>
        <div style={slideStyles} className='imageSlider'>

        <h2>Galeri</h2>
        </div>
    </div>
    
  )
}

export default imageSlider