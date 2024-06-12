import React from 'react'
import Pic from './Prof_Suhas_Joshi.png'
export default function Bottom() {
  return (
    <div >
      <div className="container-fluid p-0 my-4 border border-secondary 
                border-start-0 
                border-end-0" id='cont'>
           <div className="row">
                 <div className="col-4 ht" ><img className='img-responsive' src={Pic} alt="" /></div>
                 <div className="col-8 p-3 px-5">
                    <h3 className='font-weight-darker' id='head'>Communities are our priority!</h3>
                    <p className='text-muted'>Aximintia dolupta quatis essiminienit faciam dis utam rest fugitatis
                            solor moditas mo blaborrum apicab illa simolorrunda vendigendus alit
                            vendaerro ium quidendis doluptaerume dolore ium Otatibus
                            andaecte nima nobit la eum dit aut voloraecti dipisin cuptatinum
                            identiates et moluptat
                    </p>
                    <p className='my-1 p-1 font-weight-darker text-body' id='head'>Prof. Suhas S. Joshi <br />
                    Director, IIT Indore</p>
                 </div>
           </div>
      </div>
      <div id='cont' className='my-5'>
      <div className="container overflow-hidden text-center">
            <div className="row gx-5 m-4">
                <div className="col-4">
                <div className="bg-secondary p-3 text-center">partners</div>
                </div>
                <div className="col-4">
                <div className="bg-secondary p-3 text-center">partners</div>
                </div>
                <div className="col-4 ">
                <div className="bg-secondary p-3 text-center">partners</div>
                </div>
            </div>
      </div>
    </div>
    </div>
  )
}
