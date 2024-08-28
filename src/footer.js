import React from 'react'
import logo from './logo.png'; 
import logo2 from './icon.png'
import './Footer.css'


export default function footer() {
  return (
    <div>
        <div className="footer">
            <div className='footergrid container-fluid'>
                <div className="row my-3">
                    <div className="col-lg-3 col-12 my-3">
                        <div className="logo">
                            <a href="https://www.iiti.ac.in/" target='_blank' rel='noreferrer'>
                                   <img src={logo} alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="address col-lg-3 col-12 my-3">
                        <h4 className='font-acme'>
                            Reach &nbsp;Out &nbsp;To &nbsp;Us
                        </h4>
                        <div className="addtext font-ubuntu">
                             <a href="https://www.google.com/maps/place/Indian+Institute+of+Technology+Indore/@22.5203597,75.9207231,17z/data=!3m1!4b1!4m6!3m5!1s0x3962efcccbce7145:0x784e8cb69818596b!8m2!3d22.5203597!4d75.9207231!16s%2Fm%2F04yf6vy?entry=ttu" target='_blank' rel='noreferrer' style={{color: "white"}}>
                             Office of the Educational Outreach <br />
                             8th Floor, West Wing, Abhinandan Bhavan <br />
                             Indian Institute of Technology Indore <br />
                             Khandwa Road, Simrol, Indore 453552 <br />
                             Madhya Pradesh, India 
                             </a>
                             <div className="cont" style={{color: "white"}}>
                                  Tel No:
                                  <a href="tel:+91 07316605593" style={{color: "white"}}>+91 07316605593 / 5179</a>
                                  <br />
                                  Email: 
                                  <a href="mailto:eooffice@iiti.ac.in" style={{color: "white"}}> eooffice@iiti.ac.in</a>
                                  <br />
                             </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12 my-3">
                        <div className="links mt-0 font-ubuntu">
                            <h4 className='font-acme'>
                                Academic &nbsp;And &nbsp;Research
                            </h4>
                            <div className="addtext font-ubuntu">
                            <a href="https://rnd.iiti.ac.in/">Research and Development</a> <br />
                            <a href="https://academic.iiti.ac.in/">Academic Programs</a> <br />
                            <a href="https://www.iiti.ac.in/departments">Departments</a> <br />
                            <a href="https://www.iiti.ac.in/page/centers">Centres</a>
                            </div>
                        </div>
                    </div>
                    <div className="social my-3 col-lg-3 col-12 font-ubuntu">
                        <h4 className='font-acme'>
                            About Us
                        </h4>
                        <h6 style={{color: "grey"}}><u>Facilities</u></h6>
                        <div className="addtext font-ubuntu" >
                        <a href="https://hostel.iiti.ac.in/" >Hostel</a> <br />
                        <a href="https://healthcenter.iiti.ac.in/ ">Health Center</a> <br />
                        <a href="https://www.iiti.ac.in/page/e-payments">E-Payment link</a> <br />
                        <a href="https://vbs.iiti.ac.in/">Transport booking</a>
                        <a href="http://cc.iiti.ac.in/ ">Computer Center and Information Technology Centre</a> <br />
                        </div>
                        <br />
                        <div className="acnt">
                        <h4 className="linkd">
                             Social Media
                        </h4>
                        <a href="https://www.linkedin.com/company/101453191/admin/feed/posts/ " target='_blank'><img src={logo2} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
