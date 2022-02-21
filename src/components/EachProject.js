import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {Carousel} from '3d-react-carousal';
import { projects } from './Projectlist';
import './EachProject.css';

const EachProject = () => {
  let {id} = useParams();
  const [data,setData] = useState(projects[id]);
  console.log(data);
  var slides = data.screenshot.map((x)=>{
    return(<img src={x}/>)
  })
  console.log(slides)
  return (
    <div className="eachprojectcontainer">
      <div className="logo"><a href="/">Chay</a></div>
      <div className="carousel">
        <Carousel slides={slides}/>
      </div>
      <div className="proTitle">{data.title}</div>
      <div className="projectdescription">
        {data.desc}
      </div>
      <div className='prodetails'>
        <div className='prosourcetitle'>
          Source Code
          <div className="sourcecodelink">{data.sourcecode}</div>
        </div>
      </div>
      <div className="tech">
        Tech Used
        </div>
        <div className="probox">
        {data.tech.map((tec,i)=>{
         console.log(tec)
          return(
            <div className="Hi" style={{color:'white'}}>
                    <div className="skillimage"><img src={`/images/icons/${tec}.svg`}/></div>
                    <div className="skillname">{tec}</div>
                  </div>
          )
        })}
        </div>
    </div>
  )
}

export default EachProject