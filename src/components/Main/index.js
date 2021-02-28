import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './Main.scss'

import { TagsFunction } from './../Tags/TagsFunction'


const Main = ({main, act})=>{
  return(
    <main>

    <Switch>

      <Route exact path="/" component={ ()=> <TagsFunction array={main.services} act={act} /> } />
      {
        main.services.map( (elem, index)=>
          <Route path={`/${elem.name}`} key={`route${elem.name+index}`}
            component={ ()=> <TagsFunction array={[elem]} act={act} /> }
          />
        )
      }

      <Route path="/bmw" component={ ()=> <TagsFunction array={main.bmw} act={act} /> } />
      {
        main.bmw.map( (elem, index)=>
          <Route path={`/${elem.name}`} key={`route${elem.name+index}`}
            component={ ()=> <TagsFunction array={[elem]} act={act} /> }
          />
        )
      }

      <Route path="/gas" component={ ()=> <TagsFunction array={main.gas} act={act} /> } />
      {
        main.gas.map( (elem, index)=>
          <Route path={`/${elem.name}`} key={`route${elem.name+index}`}
            component={ ()=> <TagsFunction array={[elem]} act={act} /> }
          />
        )
      }

      <Route path="/skp" component={ ()=> <TagsFunction array={main.skp} act={act} /> } />

      <Route path="/gallery" component={ ()=> <TagsFunction array={main.gallery} act={act} /> } />

      <Route path="/contacts" component={ ()=> <TagsFunction array={main.contacts} act={act} /> } />

      <Route path="/cookie" component={ ()=> <TagsFunction array={main.cookie} act={act} /> } />

      <Route component={ ()=> <TagsFunction array={main.error} act={act} /> } />

    </Switch>

    </main>
  )
}

export default Main