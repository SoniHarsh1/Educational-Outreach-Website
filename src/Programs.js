import React , {useState} from 'react'
import configs3 from './configs3.json'
import configdetail from './configdetail.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import './Card.css'
export default function Programs() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    let cardArr=configs3;
    let cardArr1=configdetail;
    return (
      <div className="container">
        <h3 className="text-center text-info font-weight-normal my-3" id='head'>Our Programs</h3>
      <div className='row px-7 my-5'>
      {cardArr.map((eachCard,index)=>(
        <div className="col-4 p-3 ">
        <div className='container '>
        <div className="card-container ">
        <div className="card text-center clr hvr" id='card'>
          <img src={require('./'+eachCard.img+'.jpeg')} className="card-img-top" id='img' alt="..."/>
          <div className="card-body fnt text-dark">
              <h5 className="card-title">{eachCard.text}</h5>


                <Button variant="primary" onClick={handleShow}>
                        Know More
                      </Button>

                {cardArr1.map((eCard,idx)=>(
                <Modal
                  show={show}
                  onHide={handleClose}
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Vertically Centered Modal</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>{eCard.text}</p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
                ))}
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
