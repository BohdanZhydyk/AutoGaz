import React from 'react'
import './Tags.scss'

import RenderTags from './RenderTags'


export const TagsFunction = ({array, nr, act})=>{

  let theme = "light"

  return(
    <div>

      {
        array.header &&
        <div className={`navContent navContent-${"dark"}`} key={`Theme${nr}`} >
          {
            array.header.map( (item, index)=>{
              return(
                <RenderTags item={item} theme={"dark"} index={index} act={act} key={`RenderTags${index}`} />
              )
            })
          }
        </div>
      }
      
      {
        array.subMenu &&
        array.subMenu.map( (el, nr)=>{
          switch(el.tag){
            case "theme":
              (theme === "light" ? theme = "dark" : theme = "light")
              return(
                <div className={`navContent navContent-${theme}`} key={`Theme${nr}`} >
                  <RenderTags item={el} theme={theme} index={nr} act={act} />
                  {
                    el.content.map( (item, index)=>
                      <RenderTags item={item} theme={theme} index={index} act={act} key={`TagRender${nr+index}`} />
                    )
                  }
                </div>
              )
            default: return <></>
          }
        })
      }

      {
        array.content &&
        <div className={`navContent navContent-${"dark"}`} key={`Theme${nr}`} >
          <RenderTags item={array} theme={"dark"} index={nr} act={act} />
          {
            array.content.map( (item, index)=>{
              return(
                <RenderTags item={item} theme={theme} index={index} act={act} />
              )
            })
          }
        </div>
      }

      {
        array.object &&
        <div className={`navContent navContent-${"light"}`} key={`Theme${nr}`} >
          {
            array.object.map( (item, index)=>
              <RenderTags item={item} theme={"light"} index={index} act={act} key={`RenderTags${index}`} />
            )
          }
        </div>
      }

    </div>
  )
}