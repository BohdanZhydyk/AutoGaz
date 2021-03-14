import React, { useState } from 'react'
import './TagCalculator.scss'


const TagCalculator = ({ props:{ item, index, theme, act, admin } })=>{

  const [calc, setCalc] = useState({
    ranges:[
      {
        name:"95",
        value:4.98,
        units:"zł/L",
        min:0,
        max:1000,
        multiplier:100,
        active:false,
        txt:"ustaw cene benzyny 95"
      },
      {
        name:"98",
        value:5.10,
        units:"zł/L",
        min:0,
        max:1000,
        multiplier:100,
        active:true,
        txt:"ustaw cene benzyny 98"
      },
      {
        name:"ON",
        value:4.94,
        units:"zł/L",
        min:0,
        max:1000,
        multiplier:100,
        active:false,
        txt:"ustaw cene ON"
      },
      {
        name:"LPG",
        value:2.47,
        units:"zł/L",
        min:0,
        max:1000,
        multiplier:100,
        active:false,
        txt:"ustaw cene LPG"
      },
      {
        name:"95 L/100km",
        value:10,
        units:"L/100km",
        min:0,
        max:400,
        multiplier:10,
        active:false,
        txt:"zużyćie benzyny 95"
      },
      {
        name:"98 L/100km",
        value:10,
        units:"L/100km",
        min:0,
        max:400,
        multiplier:10,
        active:false,
        txt:"zużyćie benzyny 98"
      },
      {
        name:"ON L/100km",
        value:7,
        units:"L/100km",
        min:0,
        max:400,
        multiplier:10,
        active:false,
        txt:"zużyćie ON"
      },
      {
        name:"LPG L/100km",
        value:11.5,
        units:"L/100km",
        min:0,
        max:400,
        multiplier:10,
        active:false,
        txt:"zużyćie LPG"
      },
      {
        name:"przebieg",
        value:3000,
        units:"km",
        min:0,
        max:15000,
        multiplier:1,
        active:false,
        txt:"miesięczny przebieg"
      },
      {
        name:"cena",
        value:4500,
        units:"zł",
        min:0,
        max:150,
        multiplier:1/100,
        active:false,
        txt:"cena instalacji z montażem"
      },
      {
        name:"czas",
        value:4,
        units:"lat",
        min:0,
        max:10,
        multiplier:1,
        active:false,
        txt:"planowany czas eksploatacji auta"
      }
    ]
  })

  const calcFn = ({ type, payload })=>{
    switch(type){
      case "CHANGE_VALUE":
        setCalc({
          ...calc,
          ranges: calc.ranges.map( (item, index)=>
            item.name === payload.name ? { ...item, value:(payload.value/item.multiplier) } : { ...item }
          )
        })
        break
      default: break
    }
  }

  return(
    <section className="tagCalculator flex column">

      <h1>Sprawdź opłacalność instalacji gazowej za pomocą naszego kalkulatora</h1>

      <CheckPetrol props={{ ranges:calc.ranges }} />

      <div className="content flex column">

      <Ranges props={{ ranges:calc.ranges, calcFn }} />
      
      <Garbige />

      </div>

    </section>
  )
}

export default TagCalculator

const CheckPetrol = ({ props:{ ranges } })=>{
  return(
    <div className="checkPetrol flex">

      <span className="petrolBtn flex">{`wybierz typ paliwa >`}</span>

      {
        ranges.map( (item, index)=>{

          let classes = `petrolBtn ${item.active && `petrolBtn-active`} flex`
          
          return(
            <>
            {
              item.name !== "LPG" &&
              <span className={classes} key={`petrolBtn${index}`}>{item.name}</span>
            }
            </>
          )
         
        })
      }

    </div>
  )
}

const Ranges = ({ props:{ ranges, calcFn } })=>{

  let CHANGE_VALUE = (name, value)=> calcFn({ type:"CHANGE_VALUE", payload:{name, value} })

  return(
    <div className="ranges flex column">
    {
      ranges.map( (item, index)=>{
        return(
          <div className="rangeLine flex" key={`rangeLine${index}`} >

            <span className="text">{item.txt}</span>

            <span className="petrolName flex">{item.name}</span>

            <input
              className="line"
              type="range"
              min={item.min}
              max={item.max}
              value={ (item.value*item.multiplier) }
              onChange={ (e)=> CHANGE_VALUE( item.name, e.target.value ) }
            />

            <span className="priceLine flex">
              <span className="price flex end">{item.value}</span>
              <span className="units flex start"><sup>{item.units}</sup></span>
            </span>

          </div>
        )
      })
    }
    </div>
  )
}

const Garbige = ()=>{
  return(
    <>
    {/* <meter id="fuel" min="0" max="100" low="10" high="30" optimum="80" value={value}>f</meter> */}

    {/* <input className="ON" type="range" min="0" max="1000" onChange={ (e)=> chgValue(e.target.value) } /> */}
    </>
  )
}