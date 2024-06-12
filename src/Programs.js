import React from 'react'
import configs3 from './configs3.json'
export default function Programs() {
    let cardArr=configs3;
    return (
      <div className="container">
        <h3 className="text-center text-info font-weight-normal my-3" id='head'>Our Programs</h3>
      <div className='row px-7 my-5'>
      {cardArr.map((eachCard,index)=>(
        <div className="col-4 p-3 ">
        <div className='container '>
        <div className="card-container ">
        <div className="card text-center clr" id='card'>
          <img src={require('./'+eachCard.img+'.jpeg')} className="card-img-top" id='img' alt="..."/>
          <div className="card-body fnt text-dark">
              <h5 className="card-title">{eachCard.text}</h5>
              {/* <p className="card-text">{eachCard.subtext}
              </p> */}
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
