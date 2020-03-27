import React from 'react';
import { Link } from 'react-router-dom';

const Slider = () => {

  // console.log(process.env.REACT_APP_API_URL);
  // console.log(process.env.NODE_ENV);
  
  return (
    <section className="slider_section">
      <div className='slider_area'>
        <div className='slider_active owl-carouselX'>
          <div className='single_slider  d-flex align-items-center banner-3 overlay'>
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-xl-12 col-md-12'>
                  <div className='slider_text text-center'>
                    <h3>Gametro</h3>
                    <p>The Ultimate Gamers Platform</p>
                    <Link to='games' className='boxed-btn3'>
                      View Games
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
