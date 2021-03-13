import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './Main.scss'

import { HeaderPannel } from './HeaderPannel'
import { SubMenuPannels } from './SubMenuPannels'
import { SubMenuPannel } from './SubMenuPannel'

import { Cookie } from './Cookie'
// import { Error } from './Error'


const Main = ({ props:{ state, act, admin } })=>{
  return(
    <main>
    {
      state.content.map( (element, index)=>{
        if(element.tag === "menu"){
          return(
            <Switch key={`Switch${element.inn}`} >

              <Route exact path={element.to} component={ ()=>
                <>
                  <HeaderPannel element={element} index={index} theme="dark" act={act} admin={admin} />
                  {
                    element.subMenu &&
                    <SubMenuPannels props={{ submenu:element.subMenu, act, admin }} />
                  }
                </>
              } />

              {
                element.subMenu &&
                element.subMenu.map( (el, nr)=>{
                  return(
                    <Route exact path={el.to} key={`Route${el.inn}`} component={ ()=>
                      <SubMenuPannel props={{ el, nr, act, admin }} />
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
      
      <Route exact path="/cookie" component={ ()=> <Cookie props={{ state, act, admin }} /> } />

      {/* <Route path='*' component={ ()=> <Error state={state} act={act} /> } /> */}

    </Switch>

    </main>
  )
}

export default Main