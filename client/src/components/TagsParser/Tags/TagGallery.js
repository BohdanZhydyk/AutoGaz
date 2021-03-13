import React, { useState } from 'react'


export const TagGallery = ({ props:{ item, index, theme, act, admin } })=>{

  let initialGallery = {
    mode: {
      maximize:false,
      id: 0,
      min: 0,
      max: 6,
    },
    images: item.images
  }

  const [gallery, setGallery] = useState(initialGallery)

  const galleryFn = (action)=>{
    switch(action.type){
      case "MAXIMIZE":
        setGallery({
          ...gallery, mode: {
            ...gallery.mode, maximize: true, id: action.data.id
          }
        })
        break
      case "MINIMIZE":
        setGallery({
          ...gallery, mode: {
            ...gallery.mode, maximize: false, id: action.data.id
          }
        })
        break
      case "SLIDER_BTN_CLICK":

        let len = gallery.images.length
        let id = gallery.mode.id
        let min = gallery.mode.min
        let max = gallery.mode.max
        let dir = action.data.dir

        if(gallery.mode.maximize){

          if(dir === "R") id += 1
          if(dir === "L") id -= 1

          if(id === -1)   id = len - 1
          if(id === len)  id = 0

          setGallery({
            ...gallery, mode: {
              ...gallery.mode, id:id
            }
          })

        }
        else{

          if(dir === "R"){ min += 3; max += 3; }
          if(dir === "L"){ min -= 3; max -= 3; }

          if(min > -1 && max < len + 3){
            setGallery({
              ...gallery, mode: {
                ...gallery.mode, min, max
              }
            })
          }

        }
        break
      default: break
    }
  }
  
  return(
    <div className={`tagGallery tagGallery-${theme} flex wrap`} key={`Gallery${index}`} >
    {
      gallery.mode.maximize
      ? <SliderMax gallery={gallery} galleryFn={galleryFn} />
      : <SliderMin gallery={gallery} galleryFn={galleryFn} />
    }
    </div>
  )
  // {
  //   tag:"gallery",
  //   images: [ string, string, ... ]
  // }
}


const SliderMax = ({gallery, galleryFn})=>{
  return(
    <>

      <SliderBtn dir={`L`} id={gallery.mode.id} galleryFn={galleryFn} />

      <div className="galleryContainer flex wrap" >
        <div
          className="imgMax flex"
          onClick={ ()=> galleryFn({ type:"MINIMIZE", data:{id:gallery.mode.id} }) }
        >
          <img src={gallery.images[gallery.mode.id]} alt="galleryImg" key={`GalleryImg${gallery.mode.id}`} />
        </div>
      </div>
      
      <SliderBtn dir={`R`} id={gallery.mode.id} galleryFn={galleryFn} />

    </>
  )
}

const SliderMin = ({gallery, galleryFn})=>{
  return(
    <>

    <SliderBtn dir={`L`} id={gallery.mode.min} galleryFn={galleryFn} />
    
    <div className="galleryContainer flex wrap">

    {
      gallery.images.map( (img, nr)=>{

        if( nr >= gallery.mode.min && nr < gallery.mode.max ){
          return(
            <div
              className="imgMin flex"
              key={`ImgMin${nr}`}
              onClick={ ()=> galleryFn({ type:"MAXIMIZE", data:{id:nr} }) }
            >
              
              <img src={img} alt="galleryImg" key={`GalleryImg${nr}`} />

            </div>
          )
        }
        else{
          return(
            <div key={`ImgMin${nr}`}></div>
          )
        }
        
      })
    }

    </div>

    <SliderBtn dir={`R`} id={gallery.mode.max} galleryFn={galleryFn} />

    </>
  )
}

const SliderBtn = ({dir, id, display, galleryFn})=>{
  return(
    <div
      className="sliderBtn flex"
      onClick={ ()=> galleryFn({ type:"SLIDER_BTN_CLICK", data:{dir, id} }) }
    >
      <img
        src={`https://autogaz.bzdrive.com/images/slider/sliderBtn${dir}.png`}
        alt={`sliderBtn${dir}`}
      />
    </div>
  )
}
