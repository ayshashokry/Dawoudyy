import { CHANGE_LANG } from './actionTypes';

export const changeLang = lang => dispatch => {
	localStorage.setItem('chosenLanguage', lang)
	dispatch({ type: CHANGE_LANG, payload: lang });
};
