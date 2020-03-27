import {
  GET_SUBSCRIBERS,
  ADD_SUBSCRIBER,
  SUBSCRIBE_ERROR,
  SET_LOADING,
  SET_BTN_LOADING,
  FORM_JUST_SUBMITTED,
  FORM_SUBMISSION_SUCCESS,
  FORM_SUBMISSION_FAIL
} from '../actions/types';

const initialState = {
  subscriber: { email: '' },
  subscribers: [],
  loading: false,
  btnLoading: false,
  formSubmitted: false,
  formSubmissionStatus: 'none',
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FORM_JUST_SUBMITTED:
      return {
        ...state,
        formSubmissionStatus: 'loading',
        btnLoading: true
      };
      case FORM_SUBMISSION_SUCCESS:
      return {
        ...state,
        formSubmissionStatus: 'success',
        btnLoading: false
      };
      case FORM_SUBMISSION_FAIL:
        return {
          ...state,
          formSubmissionStatus: 'error',
          btnLoading: false
        };
    case GET_SUBSCRIBERS:
      return {
        ...state,
        contacts: payload,
        loading: false
      };
    case ADD_SUBSCRIBER:
      return {
        ...state,
        subscriber: {  email: '' },
        loading: false,
        formSubmitted: !state.formSubmitted,
        btnLoading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_BTN_LOADING:
      return {
        ...state,
        btnLoading: true
      };
      case SUBSCRIBE_ERROR:
      return {
        ...state,
        btnLoading: false
      };
    default:
      return state;
  }
}
