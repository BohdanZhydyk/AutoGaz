import React from 'react'


export const TagLi = ({value})=>{
  return(
    <>
    {
      value.map( (li, index)=>
        <div className="li" key={`rightLi${index}`}>
          {`- ${li}`}
        </div>
      )
    }
    </>
  )
}