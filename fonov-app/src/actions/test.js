import {goBack} from "react-router-redux";
import URLS from '../constant/urls'


const ExitTest = () => {
    return distpath => {
        Promise.all([
            distpath(goBack(URLS.Home)),
            distpath({type: 'CLEAN_MODEL'}),
            distpath({type: 'CLEAN_RATING'}),
            distpath({type: 'CLEAN_SCHEMEOFTEST'})
        ])
    }
};

export {
    ExitTest
}