import React from 'react'
import './Offer.scss'

import { Menu } from './Menu'


const Offer = ({offer})=>{
  return(
    <div className="offer">

      <h1 className="header flex">{offer.header.txt}</h1>
      <div className="flex">{offer.header.value}</div>

      <div className="content flex wrap">

        {
          offer.content.map( (item, index)=>
            <div className="menuItem">
              <Menu menu={item} key={`offerMenu${index}`} />
            </div>
          )
        }

        <div className="menuItem flex">
          <img
            src="http://www.autogaz-mak.pl/wp-content/uploads/860dbc80788dcc103c99-400x258.png"
            alt="computer"
          />
        </div>

      </div>

    </div>
  )
}

export default Offer