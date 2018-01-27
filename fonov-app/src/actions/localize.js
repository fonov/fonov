import {addTranslation, initialize, setActiveLanguage} from "react-localize-redux";
import {LANGUAGES, COOKIE_LANGUAGE, COOKIE_MAXAGE} from "../constant/config";
import locale from 'browser-locale'
import { Cookies } from 'react-cookie';


const init_localize = () => {
    return (dispatch, getState) => {
        const lang_list = Object.keys(LANGUAGES);
        dispatch(initialize(lang_list));
        const json = require('../location/global.locale.json');
        dispatch(addTranslation(json));
        let cookies = new Cookies();
        const cookie_language = cookies.get(COOKIE_LANGUAGE);
        if (cookie_language && lang_list.indexOf(cookie_language) !== -1) {
            dispatch(setActiveLanguage(cookie_language))
        } else {
            let _locale = locale();
            if (_locale && _locale.split('-').length === 2 && lang_list.indexOf(_locale.split('-')[0]) !== -1) {
                dispatch(setActiveLanguage(_locale.split('-')[0]))
            }
        }
    }
};

const set_active_language = code => {
    return (dispatch, getState) => {
        dispatch(setActiveLanguage(code));
        let cookies = new Cookies();
        cookies.set(COOKIE_LANGUAGE, code, { path: '/', maxAge: COOKIE_MAXAGE});
    }
};

export {
    init_localize,
    set_active_language
}