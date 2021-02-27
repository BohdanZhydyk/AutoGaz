import React from 'react'


export const TagTitle = ({ obj:{item, index, theme}, act })=>{

  const link = `https://autogaz.bzdrive.com/images/logo/`
  const int = Math.floor(Math.random() * Math.floor(3))

  return(
    <div className={`tagTitle tagTitle-${theme} flex between`}>
      <img src={`${link}lineLogo-${`L`}-${theme}-${int}.png`} alt="scrLeft" />
      <span className="flex">{item.txt}</span>
      <img src={`${link}lineLogo-${`R`}-${theme}-${int}.png`} alt="scrRight" />
    </div>
  )
  // {
  //   tag:"h1",
  //   txt:string
  // }
}