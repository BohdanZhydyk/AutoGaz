import React from 'react'


export const ColumnEditPannel = ({ props:{ target, tableFn } })=>{

  let align = target.align
  let width = target.width
  let sumWidth = 0
    width.map( (oldWidth)=> sumWidth += oldWidth )

  let alignBtns = ["start", "center", "end"]

  let COLUMN_WIDTH_EDIT = (value, nr)=> tableFn({ type:"COLUMN_WIDTH_EDIT", payload:{ value, nr } })
  let COLUMN_ALIGN_EDIT = (value, nr)=> tableFn({ type:"COLUMN_ALIGN_EDIT", payload:{ value, nr } })

  return(
    <div className="columnEditPannel flex">
    {
      width.map( (oldWidth, nr)=>{
        return(
          <div className="columnEdit flex column" style={{ width: width[nr]+"%" }} key={`columnEdit${nr}`} >

            <div className="editWidthPannel flex between">

              <button onClick={ ()=> oldWidth-5 >= 10 && COLUMN_WIDTH_EDIT( oldWidth-5, nr ) } > - </button>
              
              <span>{`<< ${oldWidth}% >>`}</span>

              <button onClick={ ()=> sumWidth + 5 < 95 && COLUMN_WIDTH_EDIT( oldWidth+5, nr ) } > + </button>
            
            </div>

            <div className="editAlignPannel flex">
            {
              alignBtns.map( (btn, index)=>{
                let classes = { button:`flex ${align[nr] === btn && `active`}` }
                return(
                  <button className={classes.button} key={`newLineBtn${nr+index}`}
                    onClick={ ()=> COLUMN_ALIGN_EDIT( btn, nr ) }
                  >
                    {btn}
                  </button>
                )
              })
            }
            </div>

          </div>
        )
      })
    }
    </div>
  )
}