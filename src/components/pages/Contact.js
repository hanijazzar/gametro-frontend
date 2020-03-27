import React, { Fragment, useState, useEffect } from 'react';
import { withRouter  } from 'react-router-dom';
import { setAlert } from '../../store/actions/alert';
import Alert from '../layout/Alert';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addContact } from '../../store/actions/contact';

const Contact = ({
  setAlert,
  addContact,
  contact: { contact, btnLoading, formSubmitted },
  history
}) => {
  // let success = Helpers.getUrlParameter('success');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { name, email, subject, message } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    if (name === '') {
      setAlert('Name cannot be empty', 'danger');
    } else {
      console.log(formData);
      addContact(formData, history);
    }
  };

  useEffect(() => {
    setFormData({ name: '', email: '', subject: '', message: '' });
  }, [formSubmitted]);

  return (
    <Fragment>
      <div className='bradcam_area banner-4 bradcam_area_sm'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='bradcam_text text-center'>
                <h3>Contact Us</h3>
                {/* <p>Drop us a message</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className='contact-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <Alert />

              <h2 className='contact-title'>Get in Touch</h2>
            </div>
            <div className='col-lg-8'>
              <form
                className='form-contact contact_form'
                id='contactForm'
                onSubmit={e => onSubmit(e)}
              >
                <div className='row'>
                  <div className='col-sm-6'>
                    <div className='form-group'>
                      <input
                        className='form-control valid'
                        name='name'
                        id='name'
                        type='text'
                        placeholder='Enter your name'
                        value={name}
                        onChange={e => onChange(e)}
                      />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='form-group'>
                      <input
                        className='form-control valid'
                        name='email'
                        id='email'
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={e => onChange(e)}
                      />
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='form-group'>
                      <input
                        className='form-control'
                        name='subject'
                        id='subject'
                        type='text'
                        placeholder='Enter Subject'
                        value={subject}
                        onChange={e => onChange(e)}
                      />
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='form-group'>
                      <textarea
                        className='form-control w-100'
                        name='message'
                        id='message'
                        cols='30'
                        rows='9'
                        placeholder=' Enter Message'
                        value={message}
                        onChange={e => onChange(e)}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className='form-group mt-3'>
                  <button
                    type='submit'
                    className='button button-contactForm boxed-btn'
                    disabled={btnLoading}
                  >
                    <i
                      className={` ${
                        btnLoading ? 'mr-1 fa fa-circle-o-notch fa-spin' : ''
                      }`}
                    ></i>
                    {btnLoading ? 'Sending' : 'Send'}
                  </button>
                </div>
              </form>
            </div>
            <div className='col-lg-3 offset-lg-1'>
              <div className='media contact-info'>
                <span className='contact-info__icon'>
                  <i className='ti-home'></i>
                </span>
                <div className='media-body'>
                  <h3>Beirut</h3>
                  <p>Lebanon</p>
                </div>
              </div>
              {/* <div className='media contact-info'>
                <span className='contact-info__icon'>
                  <i className='ti-tablet'></i>
                </span>
                <div className='media-body'>
                  <h3>+1 253 565 2365</h3>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </div> */}
              <div className='media contact-info'>
                <span className='contact-info__icon'>
                  <i className='ti-email'></i>
                </span>
                <div className='media-body'>
                  <h3>info@gametro.com</h3>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

// export default Contact;

Contact.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addContact: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  contact: state.contact
});

export default connect(mapStateToProps, {
  setAlert,
  addContact
})(withRouter(Contact));
