import React from 'react';
import { Link } from 'react-router-dom';

const Game = ({
  game: {
    _id,
    name,
    country,
    image,
    price,
    stars,
    reviews,
    days,
    description,
    category,
    currency,
    available_from,
    loading
  }
}) => {
  const setStars = () => {
    let starsHtml = [];
    for (let i = 0; i < stars; i++) {
      starsHtml.push(<i className='fa fa-star' key={i}></i>);
    }
    return starsHtml;
  };

  // console.log(Helpers.test1('param1'));


  return (
    <div className='single_place' data-game-id={_id}>
      <div className='thumb'>
        <Link to={`/games/view/${_id}`}>
          {' '}
          <img src={image} alt='' />{' '}
        </Link>
        <Link to={`/games/view/${_id}`} className='prise'>
          {currency}
          {price}
        </Link>
      </div>
      <div className='place_info'>
      <Link to={`/games/edit/${_id}`} className='genric-btn info-border genric-btn-sm float-right '
        >Edit</Link>
        <Link to={`/games/view/${_id}`}>
          <h3>{name}</h3>
        </Link>
        
        <p>{country}</p>
        <div className='rating_days d-flex justify-content-between'>
          <span className='d-flex justify-content-center align-items-center'>
            {setStars()}
            <Link to={`/games/view/${_id}`}>({reviews} Reviews)</Link>
          </span>
          <div className='days'>
            <i className='fa fa-clock-o'></i>
            <Link to={`/games/view/${_id}`}>{days} Days</Link>
          </div>
          
        
        </div>
        
      </div>
    </div>
  );
};

export default Game;
