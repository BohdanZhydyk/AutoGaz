import React from 'react'
import './Footer.scss'


const Footer = ({footer})=>{
  return(
    <footer className="flex wrap">

      <Information info={footer.info} />

      <Photos photos={footer.photos} />

      <Opened opened={footer.opened} />

      <Copyright txt={footer.info[0].name} />

      <Cookie txt={footer.cookie} />

    </footer>
  )
}

const Information = ({info})=>{
  return(
    <div className="information">
    {
      info.map( (line, index)=>{
        return(
          line.href
          ?
          <a className="infoLine" href={line.href} target="_blank" rel="noreferrer">
            {line.name}
          </a>
          :
          <div className="infoLine">{line.name}</div>
        )
      })
    }
    </div>
  )
}

const Photos = ({photos})=>{
  return(
    <div className="photos flex wrap">
    { photos.map( (photo, index)=> <img src={photo} alt="photos" /> ) }
    </div>
  )
}

const Opened = ({opened})=>{
  return(
    <div className="opened">
      <h3>{opened.txt}</h3>
      {
        opened.lines.map( (line, index)=>{
          return(
            <div className="flex between">
              <span>{line.day}</span>
              <span>{line.hours}</span>
            </div>
          )
        })
      }
    </div>
  )
}

const Copyright = ({txt})=>{
  return(
    <div className="copyright flex">
      <span>{`© 2018-${ new Date().getFullYear() } ${txt}`}</span>
    </div>
  )
}

const Cookie = ({cookie})=>{
  return(
    <div className="cookie flex"
        style={{
          position:"fixed",
          bottom:"0",
          width:"100%",
          padding:"0.5vw 0",
          color:"#fff",
          backgroundColor:"#126"
        }}
    >
      <span>Strona korzysta z plików cookies</span>
      <a href="http://www.autogaz-mak.pl/polityka-cookies">Więcej informacji</a>
      <span>OK</span>
    </div>
  )
}

export default Footer