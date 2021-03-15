import React, { useState } from 'react'
import './TagCalculator.scss'

import { AddTagPannel } from './../../AddTagPannel'

import { calcActions } from './calcActions'

import { CheckFuel } from './CheckFuel'
import { Pannel } from './Pannel'


const TagCalculator = ({ props: { item, index, theme, act, admin } }) => {

  const [target, setTarget] = useState(item)

  let sets = target.content.sets
  let ranges = target.content.ranges
  let inn = target.inn
  let editing = target.editing

  // console.log('TagCalculator', target)

  let calcFn = ({type, payload})=> calcActions(type, payload, target, setTarget)

  let EDIT_TAG = ()=> act({ addr:"admin", type:"EDIT_TAG", payload:{inn} })

  let classes = {
    tagCalculator: `tagCalculator tagCalculator-${theme} ${admin && 'tagCalculator-admin'} flex column`
  }

  return (
    <section className={classes.tagCalculator} onClick={ ()=> admin && EDIT_TAG() } >

      { editing && <AddTagPannel theme={theme} /> }

      <span className="header">Sprawdź opłacalność instalacji gazowej za pomocą naszego kalkulatora</span>

      <div className="content flex column">

        <CheckFuel props={{ sets, editing, calcFn }} />

        <Pannel props={{ sets, ranges, editing, calcFn }} />

      </div>

      { editing && <AddTagPannel theme={theme} /> }

    </section>
  )
// {
//   tag: string,
//   inn: int,
//   content: {
//     sets: [
//       {
//         nr: int,
//         set:[string, string, ...],
//         active: bool
//       }
//     ],
//     ranges: [
//       {
//         name: string,
//         type: string,
//         value: float,
//         units: string,
//         min: int,
//         max: int,
//         multiplier: int,
//         active: bool,
//         txt: string
//       }
//     ]
//   }
// }
}

export default TagCalculator