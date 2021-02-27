import React from 'react'
import './Tags.scss'

import RenderTags from './RenderTags'


export const TagsFunction = ({array})=>{

  let theme = "light"

  return( 
    <>
    {
      array.map( (component, nr)=>{

        (theme === "light" ? theme = "dark" : theme = "light")
        
        return(
          <div
            className={`navContent navContent-${theme}`}
            key={`navContent${theme+component.name+nr}`}
          >
          {
            component.object.map( (item, index)=>

              <RenderTags
                item={item}
                index={index}
                theme={theme}
                name={component.name}
                key={`RenderTags${theme+component.name+index}`}
              />
              
            )
          }
          </div>
        )
      })
    }
    </>
  )
}