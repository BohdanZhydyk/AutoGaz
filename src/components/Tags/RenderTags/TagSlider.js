import React from 'react'


export const TagSlider = ({ obj:{item, index, theme}, act })=>{
  return(
    <div className={`tagSlider tagSlider-${theme}`} >

      <div className="sliderTop flex">
      {
        item.images.map( (image, id)=>{

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

      <div className="sliderBottom flex">
      {
        item.images.map( (image, id)=>
            <div
              className={ image.active ? `sliderLineItem sliderLineItem-active flex` : `sliderLineItem flex` }
              onClick={ ()=> act({ tag:"slider", type:"SLIDER_BTN_CLICK", data:{dir:'none', id} }) }
              key={`sliderLineItem${id}`}
            ></div>
        )
      }
      </div>

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
      <img src={image.img} alt="sliderImg" />
      <span>{image.txt}</span>
    </div>
  )
}