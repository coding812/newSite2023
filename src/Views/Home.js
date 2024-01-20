import React from 'react';
import ProfileImage from '../Shared/Media/Steve.jpg'
import '../Views/Home.css';

const Home = () => 
{
  return (
    <div className='home'>
        <img src={ProfileImage} className='ProfileImage' alt='Steve Miller' />
        <h1>Steve Miller</h1>
        <h5>Software Developer</h5>
        <h5>Musician</h5>
    </div>
  );
};

export default Home;