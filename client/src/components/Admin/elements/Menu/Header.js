import React from 'react'

import TagParser from './../TagParser'


export const Header = ({object, adm})=>{
  return(
    <div className="header">

      <div className="addTag flex">add new tag pannel</div>

      { object.header && <TagParser object={object.header} adm={adm} /> }

    </div>
  )
}