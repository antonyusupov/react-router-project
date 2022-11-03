import React from 'react';
import './home.css';
import { FaTwitter, FaGithub, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';
import homeImage from '../../assets/astronaut1.jpg';

function Home() {
  return (
    <div className='universe__home section__padding' id='home'>
      <div className='universe__home-content'>
        <div className='universe__home-content_text'>
          <h2>This Website Made With <span> React.js</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nihil veritatis minima atque cum doloribus rem impedit commodi quisquam id.</p>
          <div className='universe__home-content_text-social'>
            <FaTwitter size={27} />
            <FaInstagramSquare size={27} />
            <FaGithub size={27} />
            <FaWhatsappSquare size={27} />
          </div>
          <button type='button'>Explore</button>
        </div>
        <div className='universe__home-content_image'>
          <img src={homeImage} alt='universe'/>
        </div>
      </div>
    </div>
  )
}

export default Home;