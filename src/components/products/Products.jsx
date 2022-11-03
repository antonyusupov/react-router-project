import React from 'react';
import itemImage1 from '../../assets/marsBgBig.jpg';
import itemImage2 from '../../assets/worldBgBig.jpg';
import itemImage3 from '../../assets/superNova.jpg';
import itemImage4 from '../../assets/mountSunset.jpg';
import './products.css';

function Products() {
  return (
    <div className='universe__products section__padding'>
      <div className='universe__products-content'>
        <h3>Our Products</h3>
        <div className='universe__products-content_items'>
          <div className='universe__products-item'>
            <div className='universe__products-item_image'>
              <img src={itemImage1} alt='imageworld'/>
            </div>
            <h4>Merch's</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quod saepe placeat vel porro impedit nesciunt ullam neque nostrum ut?</p>
            <button type='button'>Order</button>
          </div>
          <div className='universe__products-item'>
            <div className='universe__products-item_image'>
              <img src={itemImage2} alt='imagegood'/>
            </div>
            <h4>Equipment</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quod saepe placeat vel porro impedit nesciunt ullam neque nostrum ut?</p>
            <button type='button'>Order</button>
          </div>
          <div className='universe__products-item'>
            <div className='universe__products-item_image'>
              <img src={itemImage3} alt='imagebig'/>
            </div>
            <h4>Tools</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quod saepe placeat vel porro impedit nesciunt ullam neque nostrum ut?</p>
            <button type='button'>Order</button>
          </div>
          <div className='universe__products-item'>
            <div className='universe__products-item_image'>
              <img src={itemImage4} alt='imageAstro'/>
            </div>
            <h4>Books</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quod saepe placeat vel porro impedit nesciunt ullam neque nostrum ut?</p>
            <button type='button'>Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products;