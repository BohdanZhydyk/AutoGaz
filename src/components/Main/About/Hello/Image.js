import React from 'react'


export const Image = ({value})=>{
  return(
    <div className="helloImg flex">
      <img src={value} alt="helloImg" />
    </div>
  )
}