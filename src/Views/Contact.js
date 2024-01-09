import React from 'react';
import '../Views/Contact.css';
import Phone from '../Shared/Media/Phone.png'
import Gmail from '../Shared/Media/Gmail.png'

const Contact = () => 
{
  const phoneNumber = '7277980200';
  const emailAddress = 'coding812@gmail.com'; 
  const subject = 'Job Opportunity';
  const message = `Hey Steve! How's it going? I wanted to reach out and see if you'd be interested in coming to work with us!.`;

  const openTextMessage = () => 
  {
    window.open(`sms:${phoneNumber}?body=${message}`);
  };

  const openEmail = () =>
  {
    window.open(`mailto:${emailAddress}?subject=${subject}&body=${message}`);
  }

  return (
    <div>
      <h1>Contact</h1>
      <p>Click below to reach out by Phone, Email,<br></br> or Text (best) <em>any time!</em> </p>
      <a href={`sms:${phoneNumber}`}>
        <img src={Phone} className='Phone' alt='Phone' onClick={openTextMessage} />
      </a>
      <a href={`mailto:${emailAddress}`}>
        <img src={Gmail} className='Gmail' alt='Gmail' 
        onClick={openEmail}/>
      </a>
    </div>
  );
};

export default Contact;