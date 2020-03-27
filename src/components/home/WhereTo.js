import React from 'react';

const WhereTo = () => {
  return (
    <section>
      <div className='where_togo_area'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-3'>
              <div className='form_area'>
                <h3>Search for your game</h3>
              </div>
            </div>
            <div className='col-lg-9'>
              <div className='search_wrap'>
                <form className='search_form' action='#'>
                  <div className='input_field'>
                    <input type='text' placeholder='Game' />
                  </div>
                  <div className='input_field'>
                    <input type='text' placeholder='Platform' />
                  </div>
                  <div className='input_field'>
                    <input id='datepicker' placeholder='Genre' />
                  </div>
                  
                  <div className='search_btn'>
                    <button className='boxed-btn4 ' type='submit'>
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereTo;
