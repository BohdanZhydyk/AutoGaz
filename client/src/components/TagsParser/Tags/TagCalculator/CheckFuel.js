import React from 'react'


export const CheckFuel = ({ props: { sets, theme, editing, calcFn } }) => {

  let CHANGE_FUEL = (nr) => calcFn({ type: "CHANGE_FUEL", payload: { nr } })

  return (
    <div className="checkFuel flex">

      <div className="left flex">
        {
          sets.map((item, index) => {

            let classes = `btn btn-${theme} ${item.active && `btn-active btn-active-${theme}`} flex`

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

      <div className="right flex" >
        <span className={`btn btn-${theme} flex`} >Wyniki obliczeń</span>
      </div>

    </div>
  )
}