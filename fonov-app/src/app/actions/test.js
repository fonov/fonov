import {push} from "react-router-redux";
import URLS from '../constant/urls'


const ExitTest = () => {
    return distpath => {
        Promise.all([
            distpath(push(URLS.Home)),
            distpath({type: 'CLEAN_MODEL'}),
            distpath({type: 'CLEAN_RATING'})
        ])
    }
};

export {
    ExitTest
}