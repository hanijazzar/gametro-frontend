import React,  { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../store/actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout, history }) => {

  const authLinks = ( <ul>
    <li>
      <Link to='/account'>
        {' '}
        <i className='fa fa-user'></i> Account{' '}
      </Link>
    </li>
    <li>
    <Link to='/' onClick={() => logout(history)}  >
        {' '}
        <i className='fa fa-lock'></i> Logout{' '}
      </Link>
    </li>
  </ul>);
  const guestLinks = ( <ul>
    <li>
      <Link to='/login'>
        {' '}
        <i className='fa fa-lock'></i> Login{' '}
      </Link>
    </li>
    <li>
      <Link to='/register'>
        {' '}
        <i className='fa fa-user'></i> Sign Up{' '}
      </Link>
    </li>
  </ul>);


  return (
    <header>
      <div className='header-area '>
        <div id='sticky-header' className='main-header-area'>
          <div className='container-fluid'>
            <div className='header_bottom_border'>
              <div className='row align-items-center'>
                <div className='col-xl-2 col-lg-2'>
                  <div className='logo'>
                    <Link to='/'>
                      <img src='/assets/img/logo2.png' alt='Logo' className='logo-header' />
                      <span className='logo-text'>Gametro</span>
                    </Link>
                  </div>
                </div>
                <div className='col-xl-6 col-lg-6'>
                  <div className='main-menu  d-none d-lg-block'>
                    <nav>
                      <ul id='navigation'>
                        <li>
                          <Link className='active' to='/'>
                            Home
                          </Link>
                        </li>
                    

                        <li>
    {/* // eslint-disable-next-line */}
                          <Link to='#' href='#'>
                            Games <i className='ti-angle-down'></i>
                          </Link>
                          <ul className='submenu'>
                            <li>
                              <Link to='/games'>
                                All Games
                              </Link>
                            </li>
                            <li>
                              <Link to='/games/search'>
                                Search Games
                              </Link>
                            </li>
                            <li>
                              <Link to='/games/add'>
                                Add Game
                              </Link>
                            </li>
                          </ul>
                        </li>

                    

                        <li>
                          <Link to='/about'>About</Link>
                        </li>

                        {/* <li><a href="#">Auth <i className="ti-angle-down"></i></a>
                                                <ul className="submenu">
                                                        <li><a href="game_details.html">Login</a></li>
                                                        <li><a href="elements.html">Sign up</a></li>
                                                </ul>
                                            </li> */}

                        <li>
                          <Link to='/contact'>Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className='col-xl-4 col-lg-4 d-none d-lg-block'>
                  <div className='social_wrap d-flex align-items-center justify-content-end'>
                    {/* <div className="number">
                                        <p> <i className="fa fa-user"></i> <a href="#">Login</a></p>
                                    </div> */}
                    <div className='social_links d-none d-xl-block'>
                    
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      
                    </div>
                  </div>
                </div>
                {/* <div className="seach_icon">
                                <a data-toggle="modal" data-target="#exampleModalCenter" href="#">
                                    <i className="fa fa-user"></i>
                                </a>
                            </div> */}
                <div className='col-12'>
                  <div className='mobile_menu d-block d-lg-none'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(withRouter(Navbar));

