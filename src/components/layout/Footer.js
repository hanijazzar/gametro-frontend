import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer_top'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-4 col-md-6 col-lg-4 '>
              <div className='footer_widget'>
                <div className='footer_logo'>
                  <Link to='/'>
                    <img src='/assets/img/footer_logo.png' alt='' className='footer-logo' />
                  </Link>
                </div>
                <p>
                  Beirut, Lebanon 
                  {/* <br /> Lebanon{' '} */}
                  <br />
                  {/* <Link to='/'>+10 367 826 2567</Link> <br /> */}
                  <Link to='/'>info@gametro.com</Link>
                </p>
             
              </div>
            </div>
            <div className='col-xl-2 col-md-6 col-lg-2'>
              <div className='footer_widget'>
                <h3 className='footer_title'>Company</h3>
                <ul className='links'>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <Link to='/games'>Games</Link>
                  </li>
                  <li>
                    <Link to='/about'> About</Link>
                  </li>
                  <li>
                    <Link to='/contact'> Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-xl-3 col-md-6 col-lg-3'>
              <div className='footer_widget'>
                <h3 className='footer_title'>Popular Games</h3>
                <ul className='links double_links'>
                  <li>
                    <Link to='/'>Halo</Link>
                  </li>
                  <li>
                    <Link to='/'>Gears</Link>
                  </li>
                  <li>
                    <Link to='/'>Last of Us</Link>
                  </li>
                  <li>
                    <Link to='/'>Fifa</Link>
                  </li>
                  <li>
                    <Link to='/'>NFS</Link>
                  </li>
                  <li>
                    <Link to='/'>Ruiner</Link>
                  </li>
                  <li>
                    <Link to='/'>NFS</Link>
                  </li>
                  <li>
                    <Link to='/'>Ruiner</Link>
                  </li>
                
                </ul>
              </div>
            </div>

            <div className='col-xl-3 col-md-6 col-lg-3'>
              <div className='footer_widget'>
                <h3 className='footer_title'>Top Games </h3>
                <ul className='links double_links'>
                <li>
                    <Link to='/'>Halo</Link>
                  </li>
                  <li>
                    <Link to='/'>Gears</Link>
                  </li>
                  <li>
                    <Link to='/'>Last of Us</Link>
                  </li>
                  <li>
                    <Link to='/'>Fifa</Link>
                  </li>
                  <li>
                    <Link to='/'>NFS</Link>
                  </li>
                  <li>
                    <Link to='/'>Ruiner</Link>
                  </li>
                  <li>
                    <Link to='/'>NFS</Link>
                  </li>
                  <li>
                    <Link to='/'>Ruiner</Link>
                  </li>
                </ul>
              </div>
            </div>
          
          </div>
        </div>
      </div>
      <div className='copy-right_text'>
        <div className='container'>
          <div className='footer_border'></div>
          <div className='row'>
            <div className='col-xl-12'>
              <p className='copy_right text-center'>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className='modal fade custom_search_pop'
        id='exampleModalCenter'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='exampleModalCenterTitle'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered' role='document'>
          <div className='modal-content'>
            <div className='serch_form'>
              <input type='text' placeholder='Search' />
              <button type='submit'>Search</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
