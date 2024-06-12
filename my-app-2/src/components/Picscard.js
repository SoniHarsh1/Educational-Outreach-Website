import React from 'react'
import configs from './configs.json'
export default function Picscard() {
  let cardArr=configs;
  return (
    <div className="container">
      <h3 className="text-center text-info font-weight-normal my-3" id='head'>Our People</h3>
    <div className='row px-7 my-3' >
    {cardArr.map((eachCard,index)=>(
      <div className="col-lg-6 col-sm-12 p-3  ">
      <div className='container ' >
      <div className="card-container "  >
      <div className="card text-center clr" id='card'>
        <img src={require('./'+eachCard.img+'.jpg')} className="card-img-top" style={{ height:'80vh'}} id='img' alt="..."/>
        <div className="card-body fnt text-dark ">
            <h5 className="card-title" >{eachCard.text}</h5>
            <p className="card-text" >{eachCard.subtext}
            </p>
        </div>
        </div>
      </div>
      </div>
      </div>
      
  ))} 
  </div>
  </div>
  )
}

