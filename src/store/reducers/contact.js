import {
  GET_CONTACTS,
  ADD_CONTACT,
  CONTACT_ERROR,
  SET_LOADING,
  SET_BTN_LOADING
} from '../actions/types';

const initialState = {
  contact: { name: '', email: '', subject: '', message: '' },
  contacts: [],
  loading: false,
  btnLoading: false,
  formSubmitted: false,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: payload,
        loading: false
      };
    case ADD_CONTACT:
      return {
        ...state,
        contact: { name: '', email: '', subject: '', message: '' },
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
      case CONTACT_ERROR:
      return {
        ...state,
        btnLoading: false
      };
    default:
      return state;
  }
}
