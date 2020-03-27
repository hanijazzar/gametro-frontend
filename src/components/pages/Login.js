import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../store/actions/auth';
import Alert from '../layout/Alert';


const Login = ({ login, isAuthenticated, btnLoading }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    console.log(email);
    login(email, password);
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
                <h3>Login</h3>
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
              <h2 className='contact-title'>Sign into your account</h2>
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
                </div>
                <div className='row'>
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
                    {btnLoading ? 'Loading' : 'Login'}
                  </button>
                </div>
              </form>
              <p className='my-1'>
              Don't have an account? <Link to='/register'>Sign Up</Link>

              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { 
  login
 })(Login);
