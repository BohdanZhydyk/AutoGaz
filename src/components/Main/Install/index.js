import React from 'react'
import './Install.scss'

import { Theme } from './Theme'
import { Table } from './Table'
import { Tags } from './Tags'


const Install = ({install})=>{
  return(
    <div className="install">

      <h1 className="header flex">{install.header}</h1>

      {
        install.content.map( (item, index)=>{
          return(
            <div className="content flex wrap">

              <Theme theme={item.theme} />

              <div className="information flex">

                {
                  item.table
                  ?
                  <>
                    <div className="leftInfo">
                      <Table table={item.table} />
                    </div>
                    <div className="rightInfo">
                      <Tags tags={item.section.tags} />
                    </div>
                  </>
                  :
                  <Tags tags={item.section.tags} />
                }

              </div>

            </div>
          )
        })
      }

    </div>
  )
}

export default Install