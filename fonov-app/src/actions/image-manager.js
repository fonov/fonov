import maps from '../assets/img/maps.json'
import Raven from 'raven-js';
import {getActiveLanguage} from "react-localize-redux/lib/index";


const get_absolut_path = path => require(`../assets/img/${path}`);

const get_default_img = () => ({
    src: get_absolut_path('default.png'),
    width: 365,
    height: 710
});

const get_normal_img = image => ({
    src: get_absolut_path(image.src),
    width: image.width,
    height: image.height
});

const img_with_locate = (obj, number, currentLanguage, error) => {
    if (typeof obj[number] !== 'undefined') {
        return get_normal_img(obj[number])
    } else if (typeof obj[`${number}_${currentLanguage}`] !== 'undefined') {
        return get_normal_img(obj[`${number}_${currentLanguage}`])
    } else {
        Raven.captureException(error);
        console.error(error);
        return get_default_img()
    }
};

const image_manager = (test, number) => {
    return (dispatch, getState) => {
        let { current_iphone, locale } = getState(),
            {model, color} = current_iphone,
            currentLanguage = getActiveLanguage(locale).code;

        test = test.toLowerCase();
        model = model ? model.toLowerCase() : model;
        color = color ? color.toLowerCase(): color;

        if(typeof maps[test] === 'undefined') {
            Raven.captureException(`Test "${test}" not found!`);
            console.error(`Test "${test}" not found!`);
        } else if (typeof maps[test]["default"] !== 'undefined' && typeof maps[test][model] === 'undefined') {
            return img_with_locate(
                maps[test]["default"],
                number,
                currentLanguage,
                `Image ${number} for ${test}/default not found!`
            )
        } else if (typeof maps[test][model] === 'undefined') {
            Raven.captureException(`Model "${model}" for ${test} not found!`);
            console.error(`Model "${model}" for ${test} not found!`);
        } else if (typeof maps[test][model]["default"] !== 'undefined' && typeof maps[test][model][color] === 'undefined') {
            return img_with_locate(
                maps[test][model]["default"],
                number,
                currentLanguage,
                `Image ${number} for ${test}/${model}/default not found!`
            );
        } else if (typeof maps[test][model][color] === 'undefined') {
            Raven.captureException(`Color "${color}" for ${test}/${model} not found!`);
            console.error(`Color "${color}" for ${test}/${model} not found!`)
        } else {
            return img_with_locate(
                maps[test][model][color],
                number,
                currentLanguage,
                `Image ${number} for ${test}/${model}/${color} not found!`
            )
        }

        return get_default_img()
    }
};

export default image_manager