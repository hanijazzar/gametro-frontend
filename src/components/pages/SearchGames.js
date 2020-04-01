import React from 'react';


const SearchGames = () => {
  return (
    <section>
      <div className='bradcam_area banner-4 bradcam_area_sm'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='bradcam_text text-center'>
                <h3>Search Games</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='where_togo_area'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-3'>
              <div className='form_area'>
                <h3>What do you want to play?</h3>
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

      <div className='popular_places_area'>
        <div className='container'>
          <div className='row'>
          <br />
           </div>
        </div>
      </div>
    </section>
  );
};

export default SearchGames;
