import React, { Fragment } from 'react';
import GameForm from '../game/GameForm';
import DynamicScrollToTop from '../layout/DynamicScrollToTop';


const AddGame = () => {
  

  return (
    <Fragment>
    <DynamicScrollToTop />
      <GameForm/>
    </Fragment>
   
  );
};

export default AddGame;
