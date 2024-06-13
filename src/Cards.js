import React from 'react';
import Card from 'react-bootstrap/Card';
import './Cards.css';

function Cards({ config }) {
  return (
    <div className='row' style={{ marginTop: '2%', marginLeft: '10%', marginRight: '10%' }}>
      {config.map((eachCard, index) => (
        <div key={index} className='col-md-3'  style={{ marginBottom: '4%' }}>
          <Card id='car' style={{ width: 'auto', height: '50vh' }}>
            <Card.Img 
              style={{ height: '75%' }} 
              variant="top" 
              src={require('./' + (eachCard.img || 'default-image') + '.jpg')} 
              alt={eachCard.title || 'Image'}
            />
            <Card.Body>
              {eachCard.title && <Card.Title>{eachCard.title}</Card.Title>}
              <Card.Text style={{ height: '25%' }}>
                {eachCard.text}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Cards;
