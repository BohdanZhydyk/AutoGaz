import React from 'react'

import { SubMenuBtn } from './SubMenuBtn'
import TagParser from './../TagParser'


export const SubMenu = ({object, adm})=>{
  return(
    <div className="subMenuPannel">
    {
      object.map( (submenu, index)=>{
        return(
          <div className="subMenuItem" key={`subMenuItem${submenu.to + index}`}>

            <SubMenuBtn submenu={submenu} adm={adm} />

            {
              submenu.active &&
              <>
                <div className="addTag flex">add new tag pannel</div>
                <TagParser object={submenu.content} adm={adm} />
              </>
            }

          </div>
        )
      })
    }
    </div>
  )
}