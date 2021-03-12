import React from 'react'


export const Logo = ({logo, act, adminObj})=>{

  let clickOnLogo = ()=> act({ addr:"admin", type:"OPEN_ADMIN_PANNEL", payload:true })

  let exit = ()=> act({ addr:"admin", type:"EXIT_ADMIN_MODE", payload:false })

  return(
    <div className="logo flex wrap">

      {
        adminObj.adminMode &&
        <section className="adminMode flex">

          <span>{adminObj.messages[0]}</span>

          <button className="exitBtn flex" onClick={ ()=> exit() } >
            <span>Zachowac dane i wyjdz</span>
          </button>

        </section>
      }

      <span className="logoName" onClick={ ()=> !adminObj.adminMode && clickOnLogo() } >
        {logo.name}
      </span>

      <img className="logoImg" src={logo.image} alt="logo" />

    </div>
  )
}