import React, { useState } from 'react'


export const TagSlider = ({ obj:{item, index, theme}, act })=>{

  let initialSlider = {
    active: 0,
    images: item.images
  }

  const [slider, setSlider] = useState(initialSlider)

  const sliderFn = (action)=>{
    switch(action.type){
      case "SLIDER_BTN_CLICK":
        let len = slider.images.length
        let id = action.data.id
        let dir = action.data.dir

        if(dir === "L")  id -= 1
        if(dir === "R")  id += 1

        if(id === -1)   id = len - 1
        if(id === len)  id = 0

        setSlider({
          ...slider,
          active: id
        })
        break
      default: break
    }
  }

  return(
    <div className={`tagSlider tagSlider-${theme}`} >
      <SliderTop slider={slider} index={index} sliderFn={sliderFn} />
      <SliderBottom slider={slider} sliderFn={sliderFn} />
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


const SliderTop = ({slider, index, sliderFn})=>{
  return(
    <div className="sliderTop flex">
    {
      slider.images.map( (image, id)=>{

        switch(id){
          case slider.active:
            return(
              <div className="flex between" key={`tagSlider${image.txt+index}`}>
                <SliderBtn dir="L" id={id} sliderFn={sliderFn} />
                <SliderImage image={image}/>
                <SliderBtn dir="R" id={id} sliderFn={sliderFn} />
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

const SliderBtn = ({dir, id, sliderFn})=>{
  return(
    <div
      className="sliderBtn flex"
      onClick={ ()=> sliderFn({ type:"SLIDER_BTN_CLICK", data:{dir, id} }) }
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

const SliderBottom = ({slider, sliderFn})=>{
  return(
    <div className="sliderBottom flex">
    {
      slider.images.map( (image, id)=>
        <div
          className={ id === slider.active ? `sliderLineItem sliderLineItem-active flex` : `sliderLineItem flex` }
          onClick={ ()=> sliderFn({ type:"SLIDER_BTN_CLICK", data:{dir:false, id} }) }
          key={`sliderLineItem${id}`}
        ></div>
      )
    }
    </div>
  )
}