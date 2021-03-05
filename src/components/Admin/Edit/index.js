import React from 'react'
import './Edit.scss'


const Edit = ({object, chg})=>{
  return(
    <div className="editPannel flex column">
    {
      object.map( (element, index)=>{
        switch(element.tag){
          case "logo":
            return <Logo element={element} chg={chg} />
          case "tagBtns":
            return <TagBtns element={element} chg={chg} />
          case "menu":
            return <MenuBtn element={element} chg={chg} />
          default: return(<div key={`emptyTag${index}`}></div>)
        }
      })
    }
    </div>
  )
}

export default Edit

const Logo = ({element, chg})=>{
  return(
    <div className="element flex column">

      <div className="elemName flex start">Logo</div>

      <input type="text" value={element.name}
        placeholder={`nazwa firmy... ( naprzyklad: Moja Firma )`} />

      <input type="text" value={element.image}
        placeholder={`link do logo... ( naprzyklad: http://google.com/images/myLogo.png )`} />

    </div>
  )
}

const TagBtns = ({element, chg})=>{
  return(
    <div className="tagBtnsPannel element flex">
      <button onClick={ ()=> chg({add:"menu", id:element.id}) } >menuBtn</button>
      <button onClick={ ()=> chg({add:"submenu", id:element.id}) } >subMenuBtn</button>
    </div>
  )
}

const MenuBtn = ({element, chg})=>{
  return(
    <div className="element flex column">

      <div className="elemName flex start">Menu Button</div>

      <input type="text" value={element.to}
        placeholder={`krótka nazwa... ( naprzyklad: firstbutton )`} />

      <input type="text" value={element.txt}
        placeholder={`text przycisku... ( naprzyklad: First Button )`} />

    </div>
  )
}