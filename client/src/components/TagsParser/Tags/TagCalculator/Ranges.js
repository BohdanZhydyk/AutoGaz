import React from 'react'


export const Ranges = ({ props:{ set, ranges, theme, editing, calcFn } })=>{

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

              <input className="line"
                type="range" min={range.min} max={range.max}
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