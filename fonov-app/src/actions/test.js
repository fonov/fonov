import {push} from "react-router-redux";
import URLS from '../constant/urls'


const clean_test = () => {
    return distpath => {
        Promise.all([
            distpath({type: 'CLEAN_IPHONE'}),
            distpath({type: 'CLEAN_RATING'}),
            distpath({type: 'CLEAN_SCHEMEOFTEST'})
        ])
    }
};

export {
    clean_test
}