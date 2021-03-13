import React from 'react'


export const Logo = ({ props:{ logo, act, adminObj } })=>{

  let OPEN_ADMIN_PANNEL = ()=> act({ addr:"admin", type:"OPEN_ADMIN_PANNEL", payload:true })
  let EXIT_ADMIN_MODE = ()=> act({ addr:"admin", type:"EXIT_ADMIN_MODE", payload:false })

  return(
    <div className="logo flex wrap">

      {
        adminObj.adminMode &&
        <section className="adminMode flex">

          <span>{adminObj.messages[0]}</span>

          <button className="exitBtn flex" onClick={ ()=> EXIT_ADMIN_MODE() } >
            <span>Zachowac dane i wyjdz</span>
          </button>

        </section>
      }

      <span className="logoName" onClick={ ()=> !adminObj.adminMode && OPEN_ADMIN_PANNEL() } >
        {logo.name}
      </span>

      <img className="logoImg" src={logo.image} alt="logo" />

    </div>
  )
}