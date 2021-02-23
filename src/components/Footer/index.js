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
          <a className="infoLine" href={line.href} target="_blank" rel="noreferrer" key={`footerInfo${index}`}>
            {line.name}
          </a>
          :
          <div className="infoLine" key={`footerInfo${index}`}>{line.name}</div>
        )
      })
    }
    </div>
  )
}

const Photos = ({photos})=>{
  return(
    <div className="photos flex wrap">
    { photos.map( (photo, index)=> <img src={photo} alt="photos" key={`footerPhotos${index}`} /> ) }
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
            <div className="flex between" key={`footerOpened${index}`}>
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
    <div className="cookie flex" >
      <span>Strona korzysta z plików cookies</span>
      <a href="http://www.autogaz-mak.pl/polityka-cookies">Więcej informacji</a>
      <span className="okBtn">OK</span>
    </div>
  )
}

export default Footer