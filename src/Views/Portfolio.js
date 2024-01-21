import React from 'react';
import { Button, Card } from 'react-bootstrap';

import '../Views/Portfolio.css';
import MikePage from '../Shared/Media/MikePageSnippet.png'

const Portfolio = () => {
  return (
    <>
      <div className='container flex'>
        <div className='row justify-content-center'>
          <div className='col'>
            <h1>Portfolio</h1>
            <p>On this page You'll find projects, both personal and professional that<br/> I've worked on as they become available or are updated. <br/> Feel Free to check them out!</p>
          </div>
        </div>
        <div className='row justifyContent-center'>
          <div className='col-md-6 col-lg-4'>
            {/* may make background of card transparent in th future with:  , background: 'transparent' ** apply to Card below */}
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
          
        </div>
      </div>
    </>
  );
};

export default Portfolio;