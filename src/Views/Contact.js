import React, {useState} from 'react';
import '../Views/Contact.css';
import Phone from '../Shared/Media/Phone.png'
import Gmail from '../Shared/Media/Gmail.png'
import Resume from '../Shared/Media/Resume.png'

const Contact = () => 
{
  const phoneNumber = '7277980200';
  const emailAddress = 'coding812@gmail.com'; 
  const subject = 'Job Opportunity';
  const message = `Hey Steve! How's it going? I wanted to reach out and see if you'd be interested in coming to work with us!.`;

  const [vibrate, setVibrate] = useState(false);

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
      <p>Click below to reach out by Phone, Email<br/>
      or Text (best) <em>any time</em>!<br/>
      Or download my resume which has all my contact information.
      </p>
      <a href={`sms:${phoneNumber}`}>
        <img src={Phone} 
          className={['Phone', vibrate ? 'vibrate' : ''].join(' ')}
          alt='Phone' 
          onClick={openTextMessage} 
          onMouseOver={() => setVibrate(true)} 
          onMouseOut={() => setVibrate(false)}
          />
      </a>
      <a href={`mailto:${emailAddress}`}>
        <img src={Gmail} className='Gmail' alt='Gmail' onClick={openEmail}/>
      </a>
      <a href='https://resume.io/r/nG0Hg8PSw'>
        <img src={Resume} className='Resume' alt='Resume'/>
      </a>
    </div>
  );
};

export default Contact;