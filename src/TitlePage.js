import React from 'react'
import './Card.css'
import vdo from './CampusVideo/IIT Indore Campus Tour - 2023 _ Drone View.mp4'
export default function TitlePage() {
  return (
    <div>
         <video height="auto" width="100%" autoPlay loop muted disablePictureInPicture>
               <source src={vdo} />
            </video>
          <div className="container">
            <div className="row">
                <div className="col">
                         <p  className='display-6 text-center text-info font-weight-normal' id='head'>Welcome to Educational Outreach Initiative of IIT Indore!</p>
                         <p className='my-1 text-center font-weight-normal' id='head'><b>Empowering Community to Learn, Grow, and 'Thrive</b></p>
                </div>
            </div>           
         </div>
         <hr size='10' className='my-4'/>
     </div>
  )
}
