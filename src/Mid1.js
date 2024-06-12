import React from 'react';
import Pic2 from './devendra_sir.jpg';

export default function Mid1() {
  return (
    <>
      <div className="main" style={{ display: 'flex', backgroundColor: '#e6e7e8', padding: '0', margin: '0', height: 'auto', boxSizing: 'border-box', flexWrap: 'wrap', marginBottom: '15px' }}>
  <div className="image" style={{ flexShrink: 0 }}>
    <img src={Pic2} alt="Prof. Devendra Deshmukh" style={{ height: '100%', width: 'auto', display: 'block', margin: '0', padding: '0', maxHeight: '100vh', objectFit: 'contain' }} />
  </div>
  <div className="txt" style={{ padding: '10px', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', color: 'white', boxSizing: 'border-box', overflowY: 'auto', flex: 1 }}>
    <div>
      <h1 style={{ color: 'black', fontSize: '2em', fontWeight: 'bold', margin: '0 10vh 10px 10vh' }}>Communities are our priority!</h1>
      <p style={{ color: '#787276',fontSize: '1em', margin: '0 10vh 20px 10vh' }}>
        The vision of the Education Outreach Department is driven by a deep belief in the transformative power of education 
        to shape lives, build communities, and create a prosperous world. At the core of our mission lies a commitment to
        excellence, equity, and empowerment in education. We believe that education is not merely a pathway to personal
        success but a powerful catalyst for positive change in our communities and beyond.
      </p>
      <p style={{ color: 'black', fontWeight: 'bold', margin: '0 10vh 5px 10vh' }}>Prof. Devendra Deshmukh</p>
      <p style={{ color: 'black', fontStyle: 'italic', margin: '0 10vh 0 10vh' }}>Dean, Education Outreach, IIT Indore</p>
    </div>
  </div>
  <style jsx>{`
    .main {
      display: flex;
      background-color: grey;
      padding: 0;
      margin: 0;
      height: auto;
      box-sizing: border-box;
      flex-wrap: wrap;
      margin-bottom: 15px;
    }
    .image img {
      height: 100%;
      width: auto;
      display: block;
      margin: 0;
      padding: 0;
      max-height: 100vh;
      object-fit: contain;
    }
    .txt {
      margin-left: 10vh;
      margin-bottom: 2%;
      margin-top: 2%;
      padding: 10px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      color: white;
      box-sizing: border-box;
      overflow-y: auto;
      flex: 1;
    }
    @media (max-width: 1024px) {
      .main {
        flex-direction: column;
        align-items: center;
      }
      .txt {
        margin-left: 0;
        margin-top: 10px;
      }
      .txt > div {
        margin: 0 5vw;
      }
      .vision-text {
              font-size: 1rem;
      }
    }
  `}</style>
</div>



          <div style={{ backgroundColor: '#c5eefa', padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'left', fontSize: '1.75rem' }}>
            <div style={{ marginBottom: '1rem' }}>
            <b>Our Vision</b>
            </div>
            <div className="vision-text" style={{ width: '65%' }}>
          Leverage the academic expertise of IIT Indore to develop collaboration with external institutes, industry and society for capacity building, research, and skill development.
        </div>
          </div>
      <hr/>
    </>
  );
}
