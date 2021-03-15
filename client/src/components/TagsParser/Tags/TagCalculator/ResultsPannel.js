import React from 'react'


export const ResultsPannel = ({ props: { set, ranges, editing } }) => {

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