import React from 'react'


export const TagIframe = ({ item, theme, index, act })=>{
  return(
    <div className="TagIframe flex" key={`Iframe${index}`}>
      <iframe
        title={item.title}
        style={item.style}
        allowFullScreen={item.allowfullscreen}
        loading={item.loading}
        src={item.src}
      >
      </iframe>
    </div>
  )
  // {
  //   tag:"iframe",
  //   title:string,
  //   width:int,
  //   height:int,
  //   // style"{border:"0"}}
  //   allowfullscreen:string,
  //   loading:string,
  //   src:string
  // }
}