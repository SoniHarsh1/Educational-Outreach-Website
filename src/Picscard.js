import React from 'react'
import configs2 from './configs2.json'
import './Picscard.css'
export default function Picscard() {
  let cardArr=configs2;
  return (
    <div className="container">
      <h3 className="text-center text-info font-weight-normal my-3" id='head'>Our People</h3>
    <div className='container row px-7 my-3' >
    {cardArr.map((eachCard,index)=>(
      <div className="col-lg-6 col-sm-12 p-3 hw">
      <div className='container ' >
      <div className="card-container "  >
      <div className="card text-center clr" >
        <img src={require('./'+eachCard.img+'.jpg')} className="card-img-top" style={{ height:'40vh'}}  alt="..."/>
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

