import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaGithub, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';
import './about.css';

function About() {
  return (
    <div className='universe__about section__padding'>
      <div className='universe__about-content'>
        <h2>We Make Researches</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quas magnam eveniet, incidunt explicabo eligendi voluptate quidem consequuntur totam corrupti eius minus blanditiis perferendis nobis dolorum et optio neque fugiat exercitationem, quae, id quod similique. Dolorem autem deserunt alias mollitia.</p>
        <div className='universe__about-content_detail'>
          <h3>About Our <span>Website</span></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo inventore earum et eaque, maiores quaerat eveniet cupiditate in quisquam amet laudantium nihil aliquam voluptatum necessitatibus! Incidunt quae rerum dolorum perspiciatis ipsum debitis aut adipisci voluptates! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla fugit nihil eum quia cupiditate quidem quaerat autem, excepturi, explicabo eligendi quas saepe. Esse labore cupiditate ex fugiat sequi dignissimos!</p>
          <Link to='/blog'>
            <h4>Blogs</h4>
          </Link>
        </div>
        <div className='universe__about-content_links'>
          <FaTwitter size={27} />
          <FaInstagramSquare size={27} />
          <FaGithub size={27} />
          <FaWhatsappSquare size={27} />
        </div>
      </div>
    </div>
  )
}

export default About;