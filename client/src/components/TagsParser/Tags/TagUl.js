import React, { useState } from 'react'

import { EditDeletePannel } from './../EditDeletePannel'
import { AddTagPannel } from './../AddTagPannel'


export const TagUl = ({ item, theme, index, act, admin })=>{

  const [target, setTarget] = useState(item)

  let edit = ()=> act({ addr:"admin", type:"EDIT_TAG", payload:{inn:target.inn} })

  let chgLi = (nr, value)=> setTarget({
    ...target,
    li: target.li.map( (el, index)=>{
      if(index === nr){ return value }
      else{ return el }
    })
  })

  return(
    <section className={`tagUl tagUl-${theme} ${admin && 'tagUl-admin'}`} >
    {

      !target.editing

      ?

      <div className="content" onClick={ ()=> admin && edit() } >

        <ul className="ul">

          <span>{target.txt}</span>

          {
            target.li.map( (li, nr)=>
              <li className="li" key={index+nr+theme}>{li}</li>
            )
          }

        </ul>

      </div>

      :

      <div className="content flex column">
        <AddTagPannel theme={theme} />

        <div className="ulArea flex">

          <ul className="ul">

            <input type="text" value={target.txt} placeholder={`heder listy...`}
              onChange={ (e)=> setTarget({...target, txt:e.target.value}) } />
            <button>+</button>

            {
              target.li.map( (li, nr)=>
                <li className="li" key={index+nr+theme} >
                  <input type="text" value={li} placeholder={`punkt listy...`}
                    onChange={ (e)=> chgLi(nr, e.target.value) } />
                  <button>+</button>
                </li>
              )
            }

          </ul>

          <EditDeletePannel props={{ target, theme, act }} />

        </div>
        
        <AddTagPannel theme={theme} />
      </div>
      
    }
    </section>
  )
  // {
  //   tag:"ul",
  //   txt:string,
  //   li: [string, string, ...]
  // },
}