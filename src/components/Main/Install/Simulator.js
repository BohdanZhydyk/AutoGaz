import React from 'react'


export const Simulator = ({value})=>{
  return(
    <div className="simulator flex">
      <span style={{color:'red', fontSize:'2vw'}}>{value.txt}</span>
    </div>
  )
}