import React, { Fragment } from 'react';
import Game from '../game/Game';

const GameList = ({games}) => {
 
  return (
    <Fragment>
      {games.map(game => (
        <div className='col-lg-4 col-md-6' key={`${game._id}`}>
          <Game key={game._id} game={game} />
        </div>
      ))}
    </Fragment>
  );
};

export default GameList;
