import axios from 'axios';
import { setAlert } from './alert';
import {
  ADD_CONTACT,
  CONTACT_ERROR,
  SET_BTN_LOADING
} from './types';

import Helpers from '../../utils/Helpers';


// Add contact
export const addContact = (formData, history) => async dispatch => {
  const config = Helpers.setAxiosHeadersConfig();

  try {
    dispatch({
      type: SET_BTN_LOADING
    });

    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacts`, formData, config);

    dispatch({
      type: ADD_CONTACT,
      payload: res.data
    });

    dispatch(setAlert('Thank you for contacting us! Your message has been received.', 'success'));
    history.push('/contact');

  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: CONTACT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};