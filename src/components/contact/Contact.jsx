import React from 'react';
import { FaTwitter, FaGithub, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';
import './contact.css';

function Contact() {
  return (
    <div className='universe__contact section__padding'>
      <div className='universe__contact-content'>
        <h5>Contact Us</h5>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat recusandae sint totam ipsa distinctio placeat tempora omnis iusto voluptas perferendis officiis, voluptatibus sunt! Mollitia, autem.</p>
      </div>
      <div className='universe__contact-inputs'>
        <input type="text" placeholder='Name'/>
        <input type="text" placeholder='Surname'/>
        <input type='email' placeholder='Email'/>
        <textarea></textarea>
        <div className='universe__contact-btn'>
          <button type='button'>Send</button>
        </div>
      </div>
      <div className='universe__contact-links'>
        <FaTwitter size={27} />
        <FaInstagramSquare size={27} />
        <FaGithub size={27} />
        <FaWhatsappSquare size={27} />
      </div>
    </div>
  )
}

export default Contact;