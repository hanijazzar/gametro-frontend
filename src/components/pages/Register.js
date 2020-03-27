import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../store/actions/alert';
import { register } from '../../store/actions/auth';
import PropTypes from 'prop-types';
import Alert from '../layout/Alert';


const Register = ({ setAlert, register, isAuthenticated, btnLoading }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      console.log({ name, email, password });
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <div className='bradcam_area bradcam_bg_5 bradcam_area_sm'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='bradcam_text text-center'>
                <h3>Sign Up</h3>
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
              <h2 className='contact-title'>Create your account</h2>
            </div>
            <div className='col-lg-8'>
              <form
                className='form-contact contact_form'
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
                        placeholder='Name'
                        value={name}
                        onChange={e => onChange(e)}
                      />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='form-group'>
                      <input
                        className='form-control '
                        name='email'
                        id='email'
                        type='text'
                        placeholder='Email'
                        value={email}
                        onChange={e => onChange(e)}
                      />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='form-group'>
                      <input
                        className='form-control '
                        name='password'
                        id='password'
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={e => onChange(e)}
                      />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='form-group'>
                      <input
                        className='form-control '
                        name='password2'
                        id='password2'
                        type='password'
                        placeholder='Confirm paassword'
                        value={password2}
                        onChange={e => onChange(e)}
                      />
                    </div>
                  </div>
                
                
                
                </div>
                <div className='form-group mt-3'>
                  <button
                    type='submit'
                    className={`button button-contactForm boxed-btn btn-fixed-width `}
                    disabled={btnLoading}
                  >
                    <i
                      className={`mr-1 ${
                        btnLoading ? 'fa fa-circle-o-notch fa-spin' : ''
                      }`}
                    ></i>
                    {btnLoading ? 'Loading' : 'Sign up'}
                  </button>
                </div>
              </form>
              <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, 
    register 
  }
)(Register);
