import React from 'react'


export const TagSlider = ({ obj:{item, index, theme} })=>{
  return(
    <div  className={`tagSlider tagSlider-${theme} flex between`}>

      <img className="sliderBtn" src="https://autogaz.bzdrive.com/images/slider/sliderBtnLeft.png" alt="sliderBtnLeft" />
      
      <div className="sliderImage flex">
      {
        item.images.map( (image, index)=>{
          switch(image.active){
            case true:
              return(
                <div key={`sliderImage${image.txt+index}`}>
                  <img src={image.img} alt="sliderImg" />
                  <span>{image.txt}</span>
                </div>
              )
            default: return(<div key={`sliderImage${image.txt+index}`}></div>)
          }
        })
      }
      </div>

      <img className="sliderBtn" src="https://autogaz.bzdrive.com/images/slider/sliderBtnRight.png" alt="sliderBtnRight" />
    
    </div>
  )
  // {
  //   tag:"slider",
  //   images: [
  //     {
  //       active:bool,
  //       txt:string,
  //       img:string
  //     }
  //   ]
  // }
}