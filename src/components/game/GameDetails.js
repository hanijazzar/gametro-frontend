import React, { useState, useEffect } from 'react';
import { Link, useParams, withRouter } from 'react-router-dom';
import DynamicScrollToTop from '../layout/DynamicScrollToTop';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { getGame } from '../../store/actions/game';
import { deleteGame } from '../../store/actions/game';

const GameDetails = ({
  getGame,
  deleteGame,
  history,
  game: { game, loading, btnLoading }
}) => {
  // let params = useParams();
  // let gameId = params.id;
  const { id } = useParams();
  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);

  const showDeleteModal = (e, id) => {
    console.log('Show delete modal for id: ' + id);
    setIsDeleteModalShown(true);
  };

  const hideDeleteModal = (e, id) => {
    console.log('Hide delete modal for id: ' + id);
    setIsDeleteModalShown(false);
  };

  const deleteGameClicked = (e, id) => {
    console.log('Delete Game with id: ' + id);
    deleteGame(id, history);
  };

  useEffect(() => {
    getGame(id);
  }, [getGame, id]);

  return loading || game === null ? (
    <div style={{ minHeight: '280px', marginTop: '120px' }}>
      <Spinner />
    </div>
  ) : (
    <section className='game-details-section'>
      <DynamicScrollToTop />
      <div
        className='game_banner_wrap overlay'
        style={{ backgroundImage: `url(${game.image})` }}
      >
        <div className='game_text text-center'>
          <h3>{game.name} </h3>
          <p>{game.description}</p>
        </div>
      </div>

      <div className='game_details_info'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 col-md-9'>
              <div className='game_info'>
                <div className='float-right'>
                  <Link
                    to={`/games/edit/${id}`}
                    className='genric-btn info mr-1'
                  >
                    Edit
                  </Link>
                  <button
                    className='genric-btn danger'
                    data-game-id={`${id}`}
                    onClick={e => showDeleteModal(e, id)}
                  >
                    Delete
                  </button>
                </div>

                <h3>Description</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing.
                </p>

                <div className='single_game'>
                  <h4>Day-01</h4>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words.
                  </p>
                </div>
                <div className='single_game'>
                  <h4>Day-02</h4>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words.
                  </p>
                </div>
              </div>
              <div className='bordered_1px'></div>
              <div className='contact_join'>
                <h3>Check Availability</h3>
                <form action='#'>
                  <div className='row'>
                    <div className='col-lg-6 col-md-6'>
                      <div className='single_input'>
                        <input type='text' placeholder='Date' />
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                      <div className='single_input'>
                        <input type='text' placeholder='Category' />
                      </div>
                    </div>

                    <div className='col-lg-12'>
                      <div className='submit_btn'>
                        <button className='boxed-btn4' type='submit'>
                          Check Availability
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`modal fade ${isDeleteModalShown ? 'show' : ''}`}
        id='deleteModal'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title'>Confirm Delete</h4>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                onClick={e => hideDeleteModal(e)}
              >
                &times;
              </button>
            </div>

            <div className='modal-body'>
              Are you sure you want to delete the game {game.name}{' '}
              ?
            </div>

            <div className='modal-footer'>
              <button
                type='button'
                className='genric-btn danger'
                disabled={btnLoading}
                onClick={e => deleteGameClicked(e, game._id)}
              >
                <i
                  className={` ${
                    btnLoading ? 'mr-1 fa fa-circle-o-notch fa-spin' : ''
                  }`}
                ></i>
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default GameDetails;

GameDetails.propTypes = {
  getGame: PropTypes.func.isRequired,
  deleteGame: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps, { getGame, deleteGame })(
  withRouter(GameDetails)
);
