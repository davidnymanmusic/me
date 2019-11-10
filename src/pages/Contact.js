import React from 'react';
import { light } from '../constants';
import { FiMail } from 'react-icons/fi';

function Contact() {
  return (
    <div className="content" style={{ margin: '10em', textAlign: 'center' }}>
      <a
        className="contact"
        style={{ color: light, fontSize: 50 }}
        href="mailto:davenyman@gmail.com?subject=Hello world&body=Hey David,%0D(Got this email started for you)"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiMail style={{ color: light, fontSize: 150 }}></FiMail>
        <p>Email me</p>
      </a>
    </div>
  );
}

export default Contact;
