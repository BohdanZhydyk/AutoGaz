import './Tags.scss'


export const tagsFunction = (item, index, name)=>{
  switch(item.tag){
    case "h1":
      return <TagH1 value={item} key={`${name}TagHeader1${index}`}/>
    case "p":
      return <TagP value={item} key={`${name}Paragraph${index}`}/>
    case "img":
      return <TagImg value={item} key={`${name}Img${index}`}/>
    case "ul":
      return <TagUl value={item} key={`${name}Ul${index}`}/>
    case "theme":
      return <TagTheme value={item} key={`${name}Theme${index}`} />
    case "iframe":
      return <TagIframe value={item} key={`${name}Iframe${index}`} />
    case "table":
      return <TagTable value={item} key={`${name}Table${index}`}/>
    case "wrapper":
      return <TagWrapper value={item} key={`${name}Wrapper${index}`}/>
    default: return <></>
  }
}

const TagH1 = ({value})=>{
  return(
    <h1 className="tagH1 flex">{value.txt}</h1>
  )
  // {
  //   tag:"h1",
  //   txt:string
  // }
}

const TagP = ({value})=>{
  return(
    <p className="tagP">
      {value.txt}
      { value.a && <a href={value.href}>{` ${value.a}`}</a> }
    </p>
  )
  // {
  //   tag:"p",
  //   txt:string,
  //   a:string,
  //   href:string
  // }
}

const TagImg = ({value})=>{
  return(
    <div className="tagImg flex">
      <img style={{width:value.width+"vw"}} src={value.src} alt="tagImg" />
    </div>
  )
  // {
  //   tag:"img",
  //   width:int,
  //   src:string
  // }
}

const TagUl = ({value})=>{
  return(
    <div className="tagUl">
      <p className="ul">{value.txt}</p>
      { value.li.map( (line, index)=> <p className="li">{`- ${line};`}</p> ) }
    </div>
  )
  // {
  //   tag:"ul",
  //   txt:string,
  //   li: [string, string, ...]
  // },
}

const TagTheme = ({value})=>{
  return(
    <h2 className="tagTheme">
      <div className="line"></div>
      <div className="text flex">
        <span>{value.txt}</span>
      </div>
    </h2>
  )
  // {
  //   tag:"theme",
  //   txt:string
  // }
}

const TagIframe = ({value})=>{
  return(
    <div className="TagIframe flex">
      <iframe
        title={value.title}
        style={value.style}
        allowFullScreen={value.allowfullscreen}
        loading={value.loading}
        src={value.src}
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

const TagTable = ({value})=>{

  let width1, width2, width3, width4
  let color = true

  return(
    <div className="tagTable">
    {
      value.lines.map( (line, index)=>{
        
        if(index === 0){

          if(line.col1){ width1 = line.col1.width+"vw" }
          if(line.col2){ width2 = line.col2.width+"vw" }
          if(line.col3){ width3 = line.col3.width+"vw" }
          if(line.col4){ width4 = line.col4.width+"vw" }

          return(
            <div className="title flex" key={`TabTableLine${index}`}>
              { line.col1 && <span className="col flex" style={{width:width1}} >{line.col1.txt.toUpperCase()}</span> }
              { line.col2 && <span className="col flex" style={{width:width2}} >{line.col2.txt.toUpperCase()}</span> }
              { line.col3 && <span className="col flex" style={{width:width3}} >{line.col3.txt.toUpperCase()}</span> }
              { line.col4 && <span className="col flex" style={{width:width4}} >{line.col4.txt.toUpperCase()}</span> }
            </div>
          )
        }
        else{
          color = !color
          return(
            <div className="line flex" key={`TabTableLine${index}`}>
              { line.col1 && <span className={`${color ? `colorOne` : `colorTwo` } col  flex start`} style={{width:width1}} >{line.col1}</span> }
              { line.col2 && <span className={`${color ? `colorOne` : `colorTwo` } col  flex`} style={{width:width2}} >{line.col2}</span> }
              { line.col3 && <span className={`${color ? `colorOne` : `colorTwo` } col  flex`} style={{width:width3}} >{line.col3}</span> }
              { line.col4 && <span className={`${color ? `colorOne` : `colorTwo` } col  flex`} style={{width:width4}} >{line.col4}</span> }
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

const TagWrapper = ({value})=>{
  return(
    <div className="tagWrapper flex wrap stretch">
    {
      value.items.map( (item, index)=>{
        return(
          <div className="wrapperItem flex" style={{width:value.itemWidth+"%"}}>
          { tagsFunction(item, index, "partners") }
          </div>
        )
      })
    }
    </div>
  )
  // {
  //   tag:"wrapper",
  //   itemWidth:int,
  //   items: [...items]
  // }
}