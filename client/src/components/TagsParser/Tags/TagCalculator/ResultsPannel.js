import React from 'react'


export const ResultsPannel = ({ props: { set, ranges, theme, editing } }) => {

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

  let economy = (fuelTime - lpgTime).toFixed(2)

  return (
    <div className="results flex column">

      <table><tbody>
        <tr className="flex">
          <th className="col0">Okres</th>
          <th className="col1">na benzynie</th>
          <th className="col2">na gazie</th>
        </tr>
        <tr className="flex">
          <td className="col0">Koszt przejazdu 100 km</td>
          <td className="col1 flex end">{`${fuel100} zł`}</td>
          <td className="col2 flex end">{`${lpg100} zł`}</td>
        </tr>
        <tr className="flex">
          <td className="col0">Koszty miesięczne</td>
          <td className="col1 flex end">{`${fuelMonth} zł`}</td>
          <td className="col2 flex end">{`${lpgMonth} zł`}</td>
        </tr>
        <tr className="flex">
          <td className="col0">Koszty roczne</td>
          <td className="col1 flex end">{`${fuelYear} zł`}</td>
          <td className="col2 flex end">{`${lpgYear} zł`}</td>
        </tr>
        <tr className="flex">
          <td className="col0 flex start">Koszty w okresie {variables.time} roku</td>
          <td className="col1 flex end">{`${fuelTime} zł`}</td>
          <td className="col2 flex end">{`${lpgTime} zł`}</td>
        </tr>
      </tbody></table>

      <table><tbody>
        <tr className="flex">
          <th className="col0"></th>
          <th className="col1"></th>
          <th className="col2"></th>
        </tr>
        <tr className="flex">
          <td className="col0">Cena instalacji gazowej</td>
          <td className="col1 flex end"></td>
          <td className="col2 flex end">{`${variables.price} zł`}</td>
        </tr>
        <tr className="flex">
          <td className="col0 flex start">Koszty serwisu instalacji</td>
          <td className="col1 flex end"></td>
          <td className="col2 flex end">{`00.00 zł`}</td>
        </tr>
      </tbody></table>

      <div className="economy flex">
        <span className="txt">Oszczędzasz</span>
        <span className="value"><span>{economy}</span>{` zł`}</span>
      </div>

      <div className={`remark remark-${theme} flex`}>
        <p>
          W zależności od: konkretnego samochodu, typu i marki instalacji gazowej, ustawień systemu, sposobu eksploatacji przyjęte do obliczeń wartości wyliczone mogą się różnić od rzeczywistych.
        </p>
      </div>

    </div>
  )
}