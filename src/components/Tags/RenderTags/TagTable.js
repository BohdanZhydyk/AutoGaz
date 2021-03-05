import React from 'react'


export const TagTable = ({ item, theme, index, act })=>{

  let width1, width2, width3, width4
  let color = false

  return(
    <div className="tagTable" key={`Table${index}`}>
    {
      item.lines.map( (line, index)=>{
        
        if(index === 0){

          if(line.col1){ width1 = line.col1.width+"vw" }
          if(line.col2){ width2 = line.col2.width+"vw" }
          if(line.col3){ width3 = line.col3.width+"vw" }
          if(line.col4){ width4 = line.col4.width+"vw" }

          return(
            <div className="title flex" key={`TabTableLine${index}`}>
              { line.col1 && <span className={`col col-${theme} flex`} style={{width:width1}} >{line.col1.txt.toUpperCase()}</span> }
              { line.col2 && <span className={`col col-${theme} flex`} style={{width:width2}} >{line.col2.txt.toUpperCase()}</span> }
              { line.col3 && <span className={`col col-${theme} flex`} style={{width:width3}} >{line.col3.txt.toUpperCase()}</span> }
              { line.col4 && <span className={`col col-${theme} flex`} style={{width:width4}} >{line.col4.txt.toUpperCase()}</span> }
            </div>
          )
        }
        else{
          color = !color
          return(
            <div className="line flex" key={`TabTableLine${index}`}>
              {
                line.col1 &&
                <span
                  className={`${ color ? `colorOne-${theme}` : `colorTwo-${theme}` } col flex start`}
                  style={{width:width1}}
                >
                  <span>{line.col1}</span>
                </span>
              }
              {
                line.col2 &&
                <span 
                  className={`${color ? `colorOne colorOne-${theme}` : `colorTwo colorTwo-${theme}` } col col-${theme}  flex`}
                  style={{width:width2}}
                >
                  {line.col2}
                </span>
              }
              {
                line.col3 &&
                <span 
                  className={`${color ? `colorOne colorOne-${theme}` : `colorTwo colorTwo-${theme}` } col col-${theme}  flex`}
                  style={{width:width3}}
                >
                  {line.col3}
                </span>
              }
              {
                line.col4 &&
                <span 
                  className={`${color ? `colorOne colorOne-${theme}` : `colorTwo colorTwo-${theme}` } col col-${theme}  flex`}
                  style={{width:width4}}
                >
                  {line.col4}
                </span>
              }
            </div>
          )
        }

      })
    }
    </div>
  )
  // {
  //   tag:"table",
  //   lines: [
  //     {col1:{txt:string, width:int}, col2:{txt:string, width:int}, ...},
  //     {col1:string, col2:string, ...},
  //     {col1:string, col2:string, ...}
  //   ]
  // }
}