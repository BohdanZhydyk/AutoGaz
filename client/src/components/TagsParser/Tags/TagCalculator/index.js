import React, { useState } from 'react'
import './TagCalculator.scss'

import initialCalc from './calc.json'


const TagCalculator = ({ props: { item, index, theme, act, admin } }) => {

  const [calc, setCalc] = useState(initialCalc)

  const calcFn = ({ type, payload }) => {
    switch (type) {
      case "CHANGE_VALUE":
        setCalc({
          ...calc,
          ranges: calc.ranges.map((item, index) =>
            item.name === payload.name ? { ...item, value: (payload.value / item.multiplier) } : { ...item }
          )
        })
        break
      case "CHANGE_FUEL":
        setCalc({
          ...calc,
          sets: calc.sets.map((item, index) =>
            item.nr === payload.nr ? { ...item, active: true } : { ...item, active: false }
          )
        })
        break
      default: break
    }
  }

  return (
    <section className="tagCalculator flex column">

      <h1>Sprawdź opłacalność instalacji gazowej za pomocą naszego kalkulatora</h1>



      <div className="content flex column">

        <CheckFuel props={{ sets: calc.sets, calcFn }} />

        <Pannel props={{ sets: calc.sets, ranges: calc.ranges, calcFn }} />

      </div>

    </section>
  )
}

export default TagCalculator






const CheckFuel = ({ props: { sets, calcFn } }) => {

  let CHANGE_FUEL = (nr) => calcFn({ type: "CHANGE_FUEL", payload: { nr } })

  return (
    <div className="checkFuel flex">

      <div className="left flex">
        {
          sets.map((item, index) => {

            let classes = `btn ${item.active && `btn-active`} flex`

            return (
              <span
                className={classes}
                onClick={() => (item.nr !== 0 && item.nr !== 3) && CHANGE_FUEL(item.nr)}
                key={`btn${index}`}
              >
                {item.set[0]}
              </span>
            )

          })
        }
      </div>

      <div className="right flex">
        <span className="flex">Wyniki obliczeń</span>
      </div>

    </div>
  )
}

const Pannel = ({ props: { sets, ranges, calcFn } }) => {

  let set = sets.filter((item) => item.active)[0].set

  return (
    <div className="pannel flex">

      <Ranges props={{ set, ranges, calcFn }} />

      <ResultsPannel props={{ set, ranges }} />

    </div>
  )
}

const Ranges = ({ props:{ set, ranges, calcFn } })=>{

  let CHANGE_VALUE = (name, value) => calcFn({ type: "CHANGE_VALUE", payload: { name, value } })

  return(
    <div className="ranges flex column">
      {
        set.map((el, nr) =>

          ranges.map((range, index) =>

            range.name === el &&
            <div className="rangeLine flex" key={`rangeLine${nr + index}`} >

              <span className="text">{range.txt}</span>

              <span className="name flex">{range.name}</span>

              <input
                className="line"
                type="range"
                min={range.min}
                max={range.max}
                value={(range.value * range.multiplier)}
                onChange={(e) => CHANGE_VALUE(range.name, e.target.value)}
              />

              <span className="valueLine flex">
                <span className="value flex end">{range.value}</span>
                <span className="units flex start"><sup>{range.units}</sup></span>
              </span>

            </div>

          )

        )
      }
    </div>
  )
}

const ResultsPannel = ({ props: { set, ranges } }) => {

  let variables = {}
  set.map((el) =>
    ranges.map((range) => range.name === el ? variables[range.type] = range.value : false)
  )

  let fuel100 = (variables.fuelPrice * variables.fuelСonsumption).toFixed(2)
  let lpg100 = (variables.lpgPrice * variables.lpgСonsumption).toFixed(2)

  let fuelMonth = (fuel100 * variables.course / 100).toFixed(2)
  let lpgMonth = (lpg100 * variables.course / 100).toFixed(2)

  let fuelYear = (fuelMonth * 12).toFixed(2)
  let lpgYear = (lpgMonth * 12).toFixed(2)

  let fuelTime = (fuelYear * variables.time).toFixed(2)
  let lpgTime = (lpgYear * variables.time).toFixed(2)

  return (
    <div className="results flex column">

      <table><tbody>
        <tr>
          <th>Okres</th>
          <th>na benzynie</th>
          <th>na gazie</th>
        </tr>
        <tr>
          <td>Koszt przejazdu 100 km</td>
          <td>{fuel100}</td>
          <td>{lpg100}</td>
        </tr>
        <tr>
          <td>Koszty miesięczne</td>
          <td>{fuelMonth}</td>
          <td>{lpgMonth}</td>
        </tr>
        <tr>
          <td>Koszty roczne</td>
          <td>{fuelYear}</td>
          <td>{lpgYear}</td>
        </tr>
        <tr>
          <td>Koszty w okresie {variables.time} roku</td>
          <td>{fuelTime}</td>
          <td>{lpgTime}</td>
        </tr>
      </tbody></table>

    </div>
  )
}