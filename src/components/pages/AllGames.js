import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';

import GameList from '../game/GameList';
import { getGames } from '../../store/actions/game';
import DynamicScrollToTop from '../layout/DynamicScrollToTop';
import Alert from '../layout/Alert';
import Helpers from '../../utils/Helpers';

const AllGames = ({
  getGames,
  game: { games, loading, pager, pageOfGames }
}) => {

  // u can use useSelector and useDispatch to remove connect and mapStateToProps
  // const { games, loading, pager, pageOfGames } = useSelector(state => state.game); alternative
  // const dispatch = useDispatch()
  

  const [page, setPage] = useState(parseInt(Helpers.getUrlParameter('page')) || 1);
  const routeName = '/games';

  const onPageChange = () => {
    const currentPage = parseInt(Helpers.getUrlParameter('page')) || 1;
    setPage(currentPage);
  };

  useEffect(() => {
    // dispatch(getGames(page))
    getGames(page);
  }, [getGames, page]);

  return (
    <section>
      <DynamicScrollToTop />

      <div className='bradcam_area banner-4 bradcam_area_sm'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='bradcam_text text-center'>
                <h3>All Games</h3>
                {/* <p>Travel to the best places in the world</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='popular_places_area popular_places_area_less_padding'>
        <div className='container'>
          <Alert />

          {/* <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section_title text-center mb_70'>
                <h3>Choose your favorite place</h3>
                <p>Travel to the best places in the world</p>
              </div>
            </div>
          </div> */}
          <div className='row'>
            {loading ? (
              <div style={{ minHeight: '251px', marginTop: '110px', marginLeft: 'auto', marginRight: 'auto' }}>
                <Spinner />
              </div>
            ) : (
              <GameList games={pageOfGames} />
            )}
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='more_place_btn text-center'>
                {/* <a className='boxed-btn4' href='#'>
                  Pagination
                </a> */}

                <div className='pagination-div'>
                  {pager.pages && pager.pages.length && (
                    <ul className='pagination justify-content-center'>
                      <li
                        className={`page-item first-item ${
                          pager.currentPage === 1 ? 'disabled' : ''
                        }`}
                        onClick={onPageChange}
                      >
                        <Link to={`${routeName}?page=1`} className='page-link'>
                          First
                        </Link>
                      </li>
                      <li
                        className={`page-item previous-item ${
                          pager.currentPage === 1 ? 'disabled' : ''
                        }`}
                        onClick={onPageChange}
                      >
                        <Link
                          to={`${routeName}?page=${pager.currentPage - 1}`}
                          className='page-link'
                        >
                          Previous
                        </Link>
                      </li>
                      {pager.pages.map(page => (
                        <li
                          key={page}
                          className={`page-item number-item ${
                            pager.currentPage === page ? 'active' : ''
                          }`}
                          onClick={onPageChange}
                        >
                          <Link
                            to={`${routeName}?page=${page}`}
                            className='page-link'
                          >
                            {page}
                          </Link>
                        </li>
                      ))}
                      <li
                        className={`page-item next-item ${
                          pager.currentPage === pager.totalPages
                            ? 'disabled'
                            : ''
                        }`}
                        onClick={onPageChange}
                      >
                        <Link
                          to={`${routeName}?page=${pager.currentPage + 1}`}
                          className='page-link'
                        >
                          Next
                        </Link>
                      </li>
                      <li
                        className={`page-item last-item ${
                          pager.currentPage === pager.totalPages
                            ? 'disabled'
                            : ''
                        }`}
                        onClick={onPageChange}
                      >
                        <Link
                          to={`${routeName}?page=${pager.totalPages}`}
                          className='page-link'
                        >
                          Last
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AllGames.propTypes = {
  getGames: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps, { getGames })(AllGames);
