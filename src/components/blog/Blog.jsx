import React from 'react';
import blogImage from '../../assets/worldBgBig.jpg';
import './blog.css';

function Blog() {
  return (
    <div className='universe__blog section__padding'>
      <div className='universe__blog-content'>
        <h2>This is <span>Universe</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora incidunt deleniti nobis inventore tempore? Quisquam ratione consequatur, recusandae eum necessitatibus, unde earum maiores pariatur inventore hic incidunt sit itaque quaerat tenetur eligendi dolorum aliquid. Dolorum odit sunt ab, officia eos ad quae quas sint, maiores earum rerum natus voluptates quis.</p>
        <div className='universe__blog-content_image'>
          <img src={blogImage} alt='blogImage'/>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque beatae nihil, quod minima distinctio inventore cum deleniti consectetur voluptatibus illo dolore sit hic nostrum facilis laboriosam minus aliquid saepe sunt illum, ipsam soluta velit corporis vel nobis. Sequi itaque alias blanditiis necessitatibus similique omnis tenetur asperiores sit totam fugiat. Sit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque molestiae adipisci qui, repellat aliquam rem obcaecati impedit commodi, dolorem magni labore dicta? Et officia impedit est vero eveniet quae voluptatibus perspiciatis nisi odit, sapiente error ducimus nostrum tempore molestias debitis incidunt aperiam tenetur ad suscipit ratione aliquid deleniti ab delectus?</p>
      </div>
    </div>
  )
}

export default Blog;