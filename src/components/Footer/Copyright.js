import React from 'react'


export const Copyright = ({txt})=>{
  return(
    <div className="copyright flex">
      <span>{`© 2018-${ new Date().getFullYear() } ${txt}`}</span>
    </div>
  )
}