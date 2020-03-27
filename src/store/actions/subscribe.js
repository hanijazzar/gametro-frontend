import axios from 'axios';
import {
  FORM_JUST_SUBMITTED,
  FORM_SUBMISSION_SUCCESS,
  FORM_SUBMISSION_FAIL
} from './types';

import Helpers from '../../utils/Helpers';


// Add subscribe
export const addSubscriber = (formData) => async dispatch => {
  const config = Helpers.setAxiosHeadersConfig();

  try {
    dispatch({
      type: FORM_JUST_SUBMITTED
    });

    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/subscribers`, formData, config);

    dispatch({
      type: FORM_SUBMISSION_SUCCESS,
      payload: res.data
    });

    // dispatch(setAlert('Thank you for subscribeing us! Your message has been received.', 'success'));
   

  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      // errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: FORM_SUBMISSION_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};