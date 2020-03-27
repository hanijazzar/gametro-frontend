import React, { useState, useEffect } from 'react';
import {
  NotificationManager
} from 'react-notifications';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addSubscriber } from '../../store/actions/subscribe';

const Subscribe = ({
  addSubscriber,
  subscribe: { btnLoading, formSubmissionStatus }
}) => {
  const [formData, setFormData] = useState({
    email: ''
  });

  const { email } = formData;

  const onChange = e => {
    console.log('entered ' + e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    if (email === '') {
      console.log('email cannot be empty');
      NotificationManager.error('Email cannot be empty');

      // setAlert('Email cannot be empty', 'danger');
    } else {
      console.log(formData);
      addSubscriber(formData);
    }
  };

  useEffect(() => {
    if (formSubmissionStatus === 'success') {
      setFormData({ email: '' });

      NotificationManager.success('Thank you for subscribing!', '', 3000);
    } else if (formSubmissionStatus === 'error') {
      NotificationManager.error('Please enter a valid email!');
    }
  }, [formSubmissionStatus]);

  return (
    <section>
      <div className='newletter_area overlay'>
        <div className='container'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-10'>
              <div className='row align-items-center'>
                <div className='col-lg-5'>
                  <div className='newsletter_text'>
                    <h4>Subscribe to our Newsletter</h4>
                    <p>
                      Subscribe newsletter to get the latest updates and events on gametro.
                    </p>
                  </div>
                </div>
                <div className='col-lg-7'>
                  <form onSubmit={e => onSubmit(e)}>
                    <div className='mail_form'>
                      <div className='row no-gutters'>
                        <div className='col-lg-9 col-md-8'>
                          <div className='newsletter_field'>
                            <input
                              type='text'
                              placeholder='Your email'
                              name='email'
                              value={email}
                              onChange={e => onChange(e)}
                            />
                          </div>
                        </div>
                        <div className='col-lg-3 col-md-4'>
                          <div className='newsletter_btn'>
                            <button
                              className='boxed-btn4 '
                              type='submit'
                              disabled={btnLoading}
                            >
                              <i
                                className={` ${
                                  btnLoading
                                    ? 'mr-1 fa fa-circle-o-notch fa-spin'
                                    : ''
                                }`}
                              ></i>
                              Subscribe
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Subscribe.propTypes = {
  addSubscriber: PropTypes.func.isRequired,
  subscribe: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  subscribe: state.subscribe
});

export default connect(mapStateToProps, {
  addSubscriber
})(Subscribe);
