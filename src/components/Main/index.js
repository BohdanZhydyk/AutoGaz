import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './Main.scss'


import { TagsFunction } from './../Tags/TagsFunction'



const Main = ({main})=>{
  return(
    <main>

    <Switch>

      <Route exact path="/" component={ ()=> <TagsFunction object={main.services} /> } />

      <Route exact path="/bmw" component={ ()=> <TagsFunction object={main.bmw} /> } />

      <Route exact path="/gas" component={ ()=> <TagsFunction object={main.gas} /> } />

      <Route exact path="/skp" component={ ()=> <TagsFunction object={main.skp} /> } />

      <Route exact path="/gallery" component={ ()=> <TagsFunction object={main.gallery} /> } />

      <Route exact path="/contacts" component={ ()=> <TagsFunction object={main.contacts} /> } />

    </Switch>

    </main>
  )
}

export default Main