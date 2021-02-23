import './Tags.scss'


export const tagsFunction = (item, index, theme, name)=>{

  const obj = {item:item, index:index, theme:theme}
  const key = name + index

  switch(item.tag){
    case "h1":
      return <TagTitle obj={obj} key={`TagTitle${key}`}/>
    case "p":
      return <TagP obj={obj} key={`Paragraph${key}`}/>
    case "img":
      return <TagImg obj={obj} key={`Image${key}`}/>
    case "ul":
      return <TagUl obj={obj} key={`Ul${key}`}/>
    case "theme":
      return <TagTheme obj={obj} key={`Theme${key}`} />
    case "iframe":
      return <TagIframe obj={obj} key={`Iframe${key}`} />
    case "table":
      return <TagTable obj={obj} key={`Table${key}`}/>
    case "wrapper":
      return <TagWrapper obj={obj} key={`Wrapper${key}`}/>
    default: return <></>
  }
}

const TagTitle = ({ obj:{item, index, theme} })=>{

  const link = `https://autogaz.bzdrive.com/images/logo/`
  const int = Math.floor(Math.random() * Math.floor(3))

  return(
    <div className={`tagTitle tagTitle-${theme} flex between`}>
      <img src={`${link}lineLogo-${`L`}-${theme}-${int}.png`} alt="scrLeft" />
      <span className="flex">{item.txt}</span>
      <img src={`${link}lineLogo-${`R`}-${theme}-${int}.png`} alt="scrRight" />
    </div>
  )
  // {
  //   tag:"h1",
  //   txt:string
  // }
}

const TagP = ({ obj:{item, index, theme} })=>{
  return(
    <p className={`tagP tagP-${theme}`}>
      {item.txt}
      { item.a && <a href={item.href}>{` ${item.a}`}</a> }
    </p>
  )
  // {
  //   tag:"p",
  //   txt:string,
  //   a:string,
  //   href:string
  // }
}

const TagImg = ({ obj:{item, index, theme} })=>{
  return(
    <div className={`tagImg flex`}>
      <img style={{width:item.width+"vw"}} src={item.src} alt="tagImg" />
    </div>
  )
  // {
  //   tag:"img",
  //   width:int,
  //   src:string
  // }
}

const TagUl = ({ obj:{item, index, theme} })=>{
  return(
    <div className={`tagUl`}>
      <p className="ul">{item.txt}</p>
      { item.li.map( (line, nr)=> <p className="li" key={index+nr+theme}>{`- ${line};`}</p> ) }
    </div>
  )
  // {
  //   tag:"ul",
  //   txt:string,
  //   li: [string, string, ...]
  // },
}

const TagTheme = ({ obj:{item, index, theme} })=>{
  return(
    <h2 className={`tagTheme`}>
      <div className={`line line-${theme}`}></div>
      <div className={`text text-${theme} flex`}>
        <span className={`span span-${theme} flex`}>{item.txt}</span>
      </div>
    </h2>
  )
  // {
  //   tag:"theme",
  //   txt:string
  // }
}

const TagIframe = ({ obj:{item, index, theme} })=>{
  return(
    <div className="TagIframe flex">
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

const TagTable = ({ obj:{item, index, theme} })=>{

  let width1, width2, width3, width4
  let color = false

  return(
    <div className="tagTable">
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

const TagWrapper = ({ obj:{item, index, theme} })=>{
  return(
    <div className="tagWrapper flex wrap stretch">
    {
      item.items.map( (element, nr)=>{
        return(
          <div
            className="wrapperItem flex"
            style={{width:item.itemWidth+"%"}}
            key={`subtagwrapper${index+nr+item.itemWidth}`}
          >
          { tagsFunction(element, nr, theme, `wrapper${element.tag}`) }
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