import React from 'react'


export const TagImage = ({value})=>{
  return(
    <div className="tagImage flex">
      <img src={value} alt="tagImg" />
    </div>
  )
}