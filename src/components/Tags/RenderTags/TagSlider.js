import React from 'react'


export const TagSlider = ({ obj:{item, index, theme}, act })=>{
  return(
    <div className={`tagSlider tagSlider-${theme}`} >
      <SliderTop images={item.images} index={index} act={act} />
      <SliderBottom images={item.images} act={act} />
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


const SliderTop = ({images, index, act})=>{
  return(
    <div className="sliderTop flex">
    {
      images.map( (image, id)=>{

        switch(image.active){
          case true:
            return(
              <div className="flex between" key={`tagSlider${image.txt+index}`}>
                <SliderBtn dir="L" id={id} act={act} />
                <SliderImage image={image}/>
                <SliderBtn dir="R" id={id} act={act} />
              </div>
            )
          default:
            return(
              <div key={`tagSlider${image.txt+index}`}></div>
            )
        }

      })
    }
    </div>
  )
}

const SliderBtn = ({dir, id, act})=>{
  return(
    <div
      className="sliderBtn flex"
      onClick={ ()=> act({ tag:"slider", type:"SLIDER_BTN_CLICK", data:{dir, id} }) }
    >
      <img
        src={`https://autogaz.bzdrive.com/images/slider/sliderBtn${dir}.png`}
        alt={`sliderBtn${dir}`}
      />
    </div>
  )
}

const SliderImage = ({image})=>{
  return(
    <div className="sliderImage flex">
      <img src={image.src} alt="sliderImg" />
      <span>{image.txt}</span>
    </div>
  )
}

const SliderBottom = ({images, act})=>{
  return(
    <div className="sliderBottom flex">
    {
      images.map( (image, id)=>
        <div
          className={ image.active ? `sliderLineItem sliderLineItem-active flex` : `sliderLineItem flex` }
          onClick={ ()=> act({ tag:"slider", type:"SLIDER_BTN_CLICK", data:{dir:'none', id} }) }
          key={`sliderLineItem${id}`}
        ></div>
      )
    }
    </div>
  )
}