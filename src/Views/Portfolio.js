import React from 'react';
import { Button, Card } from 'react-bootstrap';

import '../Views/Portfolio.css';
import MikePage from '../Shared/Media/MikePageSnippet.png'

const Portfolio = () => {
  return (
    <>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col'>
            <p>On this page, you'll find projects, both personal and professional, that I've worked on as they become available or are updated. <br/> Feel free to check them out!</p>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-md-6 col-lg-4'>
            <Card style={{ width: '100%'}}> 
              <Card.Img variant="top" src={MikePage} />
              <Card.Body>
                <Card.Title>Site for Michael Mcdowell PhD.</Card.Title>
                <Card.Text style={{fontSize: '1rem'}}>
                  A simple landing page for Dr. Mcdowell, using basic HTML and CSS.
                </Card.Text>
                <Button 
                  variant="primary"
                  href='https://mikemcdowell.online/'
                  >
                    Check it out
                </Button>
              </Card.Body>
            </Card>
          </div>
          {/* INSERT NEXT CARD HERE */}
        </div>
      </div>
    </>
  );
};

export default Portfolio;