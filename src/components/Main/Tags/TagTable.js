import React from 'react'


export const TagTable = ({value})=>{

  let color = true

  return(
    <div className="tagTable">
    {
      value.map( (line, index)=>{
        color = !color
        return(
          <div className={color ? `line lightGrey flex wrap` : `line darkGrey flex wrap`} key={`tableLine${index}`}>
            <div className="serviceName">{line.service}</div>
            {
              line.subservices
              ?
              <>
                <span className="servicePrice"></span>
                {
                  line.subservices.map( (line, index)=>{
                    return(
                      <div className="line flex" key={`sublinePrice${index}`}>
                        <span className="serviceSubName flex start">{line.service}</span>
                        <span className="servicePrice flex end">{line.price}</span>
                      </div>
                    )
                  })
                }
              </>
              :
              <span className="servicePrice flex end">{line.price}</span>
            }
          </div>
        )
      })
    }
    </div>
  )
}