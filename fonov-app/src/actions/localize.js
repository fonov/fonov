import {addTranslation, initialize, setActiveLanguage} from "react-localize-redux";
import {LANGUAGES} from "../constant/config";
import locale from 'browser-locale'


const init_localize = () => {
    return (dispatch, getState) => {
        const lang_list = Object.keys(LANGUAGES);

        dispatch(initialize(lang_list));
        const json = require('../location/global.locale.json');
        dispatch(addTranslation(json));
        let _locale = locale();
        if (_locale && _locale.split('-').length === 2 && lang_list.indexOf(_locale.split('-')[0]) !== -1) {
            dispatch(setActiveLanguage(_locale.split('-')[0]))
        }
    }
};

export {
    init_localize
}