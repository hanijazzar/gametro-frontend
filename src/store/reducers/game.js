import {
  GET_GAMES,
  GAME_ERROR,
  DELETE_GAME,
  ADD_GAME,
  SAVE_GAME,
  GET_GAME,
  SET_LOADING,
  SET_BTN_LOADING
} from '../actions/types';

const initialState = {
  games: [],
  game: null,
  gameLoaded: false,
  pager: {},
  pageOfGames: [],
  loading: false,
  btnLoading: false,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_GAMES:
      return {
        ...state,
        games: payload.data,
        pager: payload.pager,
        pageOfGames: payload.data,
        loading: false
      };
    case GET_GAME:
      return {
        ...state,
        game: payload,
        loading: false,
        gameLoaded: true
      };
    case ADD_GAME:
      return {
        ...state,
        games: [payload, ...state.games],
        loading: false,
        btnLoading: false
      };
      case SAVE_GAME:
      return {
        ...state,
        // games: [payload, ...state.games],
        loading: false,
        btnLoading: false
      };
    case DELETE_GAME:
      return {
        ...state,
        games: state.games.filter(
          game => game._id !== payload
        ),
        loading: false,
        btnLoading: false

      };
    case GAME_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        btnLoading: false

      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
        // games: [],
        gameLoaded: false

      };
      case SET_BTN_LOADING:
      return {
        ...state,
        btnLoading: true
      };
    default:
      return state;
  }
}
