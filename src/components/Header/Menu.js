import React from 'react'


export const Menu = ({menu})=>{
  return(
    <nav className="navMenu flex">
    {
      menu.map( (btn, index)=>{
        return(
          <div className="menuBtn flex" key={`menuBtn${index}`}>
            {btn.txt}
          </div>
        )
      })
    }
    </nav>
  )
}