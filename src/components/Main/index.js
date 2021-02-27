import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './Main.scss'

import { TagsFunction } from './../Tags/TagsFunction'


const Main = ({main})=>{
  return(
    <main>

    <Switch>

      <Route exact path="/" component={ ()=> <TagsFunction array={main.services} /> } />
      {
        main.services.map( (elem, index)=>
          <Route path={`/${elem.name}`} key={`route${elem.name}`}
            component={ ()=> <TagsFunction array={[elem]} /> }
          />
        )
      }

      <Route path="/bmw" component={ ()=> <TagsFunction array={main.bmw} /> } />
      {
        main.bmw.map( (elem, index)=>
          <Route path={`/${elem.name}`} key={`route${elem.name}`}
            component={ ()=> <TagsFunction array={[elem]} /> }
          />
        )
      }

      <Route path="/gas" component={ ()=> <TagsFunction array={main.gas} /> } />
      {
        main.gas.map( (elem, index)=>
          <Route path={`/${elem.name}`} key={`route${elem.name}`}
            component={ ()=> <TagsFunction array={[elem]} /> }
          />
        )
      }

      <Route path="/skp" component={ ()=> <TagsFunction array={main.skp} /> } />

      <Route path="/gallery" component={ ()=> <TagsFunction array={main.gallery} /> } />

      <Route path="/contacts" component={ ()=> <TagsFunction array={main.contacts} /> } />

      <Route component={ ()=> <>{`ERROR!!!`}</> }	/>

    </Switch>

    </main>
  )
}

export default Main