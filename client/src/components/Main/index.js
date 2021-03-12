import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './Main.scss'

import { HeaderPannel } from './HeaderPannel'
import { SubMenuPannels } from './SubMenuPannels'
import { SubMenuPannel } from './SubMenuPannel'

import { Cookie } from './Cookie'
// import { Error } from './Error'


const Main = ({state, act, admin})=>{
  return(
    <main>
    {
      state.content.map( (element, index)=>{
        if(element.tag === "menu"){
          return(
            <Switch key={`Switch${index}`} >

              <Route exact path={element.to} component={ ()=>
                <>
                  <HeaderPannel element={element} index={index} theme="dark" act={act} admin={admin} />
                  {
                    element.subMenu &&
                    <SubMenuPannels submenu={element.subMenu} act={act} admin={admin} />
                  }
                </>
              } />

              {
                element.subMenu &&
                element.subMenu.map( (el, nr)=>{
                  return(
                    <Route exact path={el.to} component={ ()=>
                      <SubMenuPannel el={el} nr={nr} theme="light" act={act} admin={admin} />
                    } />
                  )
                })
              }

            </Switch>
          )
        }
        else{ return }
      })
    }

    <Switch>
      
      <Route exact path="/cookie" component={ ()=> <Cookie state={state} theme="light" act={act} admin={admin} /> } />

      {/* <Route path='*' component={ ()=> <Error state={state} act={act} /> } /> */}

    </Switch>

    </main>
  )
}

export default Main