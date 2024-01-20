import React from 'react';
import { Button, Card } from 'react-bootstrap';

import '../Views/Portfolio.css';
import MikePage from '../Shared/Media/MikePageSnippet.png'
import AppVideo from '../Shared/Media/AppVideo.webm'

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
        <div className='row'>
          <div className='col-md-6 col-lg-4'>
            <Card style={{ width: '100%'}}>
              <Card.Img variant="top" src={MikePage} />
              <Card.Body>
                <Card.Title>Site for Michael Mcdowell PhD.</Card.Title>
                <Card.Text style={{fontSize: '1rem'}}>
                  A simple landing page for Dr. Mcdowell, using basic HTML and CSS.
                </Card.Text>
                <Button variant="primary">Check it out</Button>
              </Card.Body>
            </Card>
          </div>
          <div className='col-md-6 col-lg-4'>
            <Card style={{ width: '100%'}}>
              <Card.Img variant="top" src={AppVideo} />
              <Card.Body>
                <Card.Title>Site for Michael Mcdowell PhD.</Card.Title>
                <Card.Text style={{fontSize: '1rem'}}>
                  A simple landing page for Dr. Mcdowell, using basic HTML and CSS.
                </Card.Text>
                <Button variant="primary">Check it out</Button>
              </Card.Body>
            </Card>
          </div>
          <div className='col-md-6 col-lg-4'>
            <Card style={{ width: '100%'}}>
              <Card.Img variant="top" src={MikePage} />
              <Card.Body>
                <Card.Title>Site for Michael Mcdowell PhD.</Card.Title>
                <Card.Text style={{fontSize: '1rem'}}>
                  A simple landing page for Dr. Mcdowell, using basic HTML and CSS.
                </Card.Text>
                <Button variant="primary">Check it out</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;