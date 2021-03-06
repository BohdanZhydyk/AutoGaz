import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './Main.scss'

import { TagsFunction } from './../Tags/TagsFunction'

import { Cookie } from './Cookie'
import { Error } from './Error'

import Admin from './../Admin'


const Main = ({state, act})=>{
  return(
    <main>
    {
      state.map( (element, nr)=>{
        if(element.tag === "menu"){
          return(
            <Switch key={`Switch${nr}`} >

              <Route exact path={element.to} component={ ()=>
                <TagsFunction array={element} nr={nr} act={act} />
              } />

              {
                element.subMenu &&
                element.subMenu.map( (item, index)=>{
                  return(
                    <Route exact path={item.to} key={`route${item.to + index}`} component={ ()=>
                      <TagsFunction array={item} nr={index} act={act} />
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
      
      <Route exact path="/cookie" component={ ()=> <Cookie state={state} act={act} /> } />


      <Route exact path="/admin" component={ ()=> <Admin  state={state} act={act} /> } />


      {/* <Route path='*' component={ ()=> <Error state={state} act={act} /> } /> */}

    </Switch>

    </main>
  )
}

export default Main