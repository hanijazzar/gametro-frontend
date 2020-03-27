import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_GAMES,
  GAME_ERROR,
  DELETE_GAME,
  ADD_GAME,
  SAVE_GAME,

  GET_GAME,
  SET_LOADING,
  SET_BTN_LOADING
} from './types';


// Get games
export const getGames = (page) => async dispatch => {
  try {
    dispatch({
      type: SET_LOADING
    });
    page = page || 1;
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/games?page=${page}`
    );

    dispatch({
      type: GET_GAMES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GAME_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get game
export const getGame = id => async dispatch => {
  try {
    dispatch({
      type: SET_LOADING
    });

    const res = await axios.get(`/api/games/${id}`);

    dispatch({
      type: GET_GAME,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GAME_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add game
export const addGame = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    dispatch({
      type: SET_BTN_LOADING
    });

    const res = await axios.post('/api/games', formData, config);

    dispatch({
      type: ADD_GAME,
      payload: res.data
    });

    dispatch(setAlert('Game Added', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: GAME_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Save game
export const saveGame = (
  formData,
  id,
  history
) => async dispatch => {
  const config = {
    headers: {
      // 'Content-Type': 'application/json'
      'Content-Type': 'multipart/form-data'

    }
  };

  // const config = Helpers.setAxiosHeadersConfig();
  console.log(config);

  try {
    dispatch({
      type: SET_BTN_LOADING
    });

    if (id) {
      // formData = { ...formData, id: id };
      formData.append('id', id);

    }
    console.log(formData);
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/games`,
      formData,
      config
    );

    dispatch({
      type: SAVE_GAME,
      payload: res.data 
    });

    dispatch(
      setAlert(id ? 'Game Updated' : 'Game Added', 'success')
    );   

    history.push('/games');

  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: GAME_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


// delete game
export const deleteGame = (
  id,
  history
) => async dispatch => {

  try {
    dispatch({
      type: SET_BTN_LOADING
    });

    const res = await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/games/${id}`
    );

    dispatch({
      type: DELETE_GAME,
      payload: res.data
    });

    dispatch(
      setAlert('Game Deleted', 'success')
    );

    history.push('/games');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: GAME_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};