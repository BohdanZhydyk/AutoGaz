import React from 'react'

import { Ranges } from './Ranges'
import { ResultsPannel } from './ResultsPannel'


export const Pannel = ({ props: { sets, ranges, theme, editing, calcFn } }) => {

  let set = sets.filter((item) => item.active)[0].set

  return (
    <div className={`pannel pannel-${theme} flex`}>

      <Ranges props={{ set, ranges, theme, editing, calcFn }} />

      <ResultsPannel props={{ set, ranges, theme, editing }} />

    </div>
  )
}