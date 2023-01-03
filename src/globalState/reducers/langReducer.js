import { CHANGE_LANG } from '../actions/actionTypes';

const initialState = {
  language: 'en'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANG:
      return {
        ...state,
        language: action.payload
      };

    default:
      return state;
  }
}
