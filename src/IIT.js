import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import im1 from './Hostel_Room.jpg'
import im2 from './iiti.jpg'
import im3 from './iiti3.jpg'
export default function IIT() {
  return (
    <>
        <div class="text" style={{marginLeft: '10vh', marginTop: '5vh', marginRight:'10vh', marginBottom: '10vh', padding:'0'}}>
            <h3 class="clg" style={{color: '#3fc8f1'}}>IIT Indore</h3>
            <div style={{ marginBottom: '3rem' }}> 
        <p>
          Indian Institute of Technology Indore (IIT Indore or IITI) is one of the premier engineering and technology
          institutes in India. Established in 2009, it is one of the eight new Indian Institutes of Technology (IITs)
          established by the Ministry of Education, Government of India.
        </p>
        <p>
          IIT Indore offers undergraduate, graduate, and doctoral programs in engineering and technology. Some
          of the popular programs include Computer Science and Engineering, Electrical Engineering, Mechanical
          Engineering, and Chemical Engineering.
        </p>
        <p>
          The campus of IIT Indore is located in the city of Indore, in the state of Madhya Pradesh, India. It is spread
          over an area of around 501.42 acres and is equipped with state-of-the-art infrastructure and facilities, including
          well-equipped labs, libraries, and sports facilities.
        </p>
        <p>
          IIT Indore is known for its strong research focus and has various research centers such as Center for Energy
          and Environment, Center for Robotics and Intelligent Systems, Center for VLSI and Embedded Systems and
          Center for Nano Science and Technology.
        </p>
        <p>
          The institute is also actively involved in various outreach activities and community service programs. It has
          established a strong network of industry collaborations and partnerships, which provides students with
          opportunities for internships, projects, and placements.
        </p>
        <p>
          Overall, IIT Indore is a premier institution for engineering and technology education in India, providing
          students with a strong foundation in the field and equipping them with the skills and knowledge needed for a
          successful career.
        </p>
      </div>
    </div>
    <div className="container" style={{marginBottom: '5vh'}}>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
              <img src={im1} alt="Image 1" className="img-fluid" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
              <img src={im2} alt="Image 2" className="img-fluid" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
              <img src={im3} alt="Image 3" className="img-fluid" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
