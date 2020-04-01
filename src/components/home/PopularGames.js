import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';

import GameList from '../game/GameList';
import { getGames } from '../../store/actions/game';

const PopularGames = ({
  getGames,
  game: { games, loading }
}) => {
  useEffect(() => {
    getGames();
  }, [getGames]);

  return (
    <section >
      <div className='popular_places_area'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section_title text-center mb_70'>
                <h3>Latest Games </h3>
                <p>Check out the latest added games</p>
              </div>
            </div>
          </div>
          <div className='row'>
            {loading ? (
              <Spinner />
            ) : (
              <GameList games={games} />
            )}
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='more_place_btn text-center'>
                <Link className='boxed-btn4' to='/games'>
                  More Games
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default PopularGames;

PopularGames.propTypes = {
  getGames: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps, { getGames })(
  PopularGames
);
