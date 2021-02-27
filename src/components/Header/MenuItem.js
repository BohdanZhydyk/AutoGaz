import React from 'react'
import { NavLink } from 'react-router-dom'


export const MenuItem = ({btn})=>{
  return(
    <div className="menuItem" >

      {
        btn.map( (subBtn, index)=>{
          switch(index){
            case 0: return(
                <NavLink to={subBtn.to} className="menuBtn flex" key={`menuBtn${subBtn.to}`} >
                  <span>{subBtn.txt}</span>
                </NavLink>
              )
            default: return(<div key={`menuBtn${subBtn.to}`}></div>)
          }
        })
      }

      <div className="subMenu">
      {
        btn.map( (subBtn, index)=>{
          switch(index){
            case 0: return(<div key={`subMenuBtn${subBtn.to}`}></div>)
            default: return(
                <NavLink to={subBtn.to} className="subMenuBtn" key={`subMenuBtn${subBtn.to}`} >
                  <span>{subBtn.txt}</span>
                </NavLink>
              )
          }
        })
      }
      </div>

    </div>
  )
}