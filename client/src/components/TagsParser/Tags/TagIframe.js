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


// <section>
//   <meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="70"></meter>
// </section>

// <script>
//   document.querySelector('input[type="rahge"]').oninput = function(){
//     document.querySelector('meter').value = this.value
//   }
// </script>