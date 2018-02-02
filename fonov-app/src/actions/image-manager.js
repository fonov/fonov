import maps from '../assets/img/maps.json'
import Raven from 'raven-js';


const get_absolut_path = path => require(`../assets/img/${path}`);

const image_manager = (test, number) => {
    return (dispatch, getState) => {
        let { current_iphone } = getState(),
            {model, color} = current_iphone;

        test = test.toLowerCase();

        if(typeof maps[test] === 'undefined') {
            Raven.captureException(`Test "${test}" not found!`);
            console.error(`Test "${test}" not found!`);
        } else if (typeof maps[test]["default"] !== 'undefined') {
            if (typeof maps[test]["default"][number] === 'undefined') {
                Raven.captureException(`Image ${number} for ${test}/default not found!`);
                console.error(`Image ${number} for ${test}/default not found!`)
            } else {
                return get_absolut_path(maps[test]["default"][number])
            }
        } else {
            if (model && color) {
                model = model.toLowerCase();
                color = color.toLowerCase();

                if (typeof maps[test][model] === 'undefined') {
                    Raven.captureException(`Model "${model}" for ${test} not found!`);
                    console.error(`Model "${model}" for ${test} not found!`);
                } else if (typeof maps[test][model]["default"] !== 'undefined') {
                    if (typeof maps[test][model]["default"][number] === 'undefined') {
                        Raven.captureException(`Image ${number} for ${test}/${model}/default not found!`);
                        console.error(`Image ${number} for ${test}/${model}/default not found!`)
                    } else {
                        return get_absolut_path(maps[test][model]["default"][number])
                    }
                } else if (typeof maps[test][model][color] === 'undefined') {
                    Raven.captureException(`Color "${color}" for ${test}/${model} not found!`);
                    console.error(`Color "${color}" for ${test}/${model} not found!`)
                } else if (typeof maps[test][model][color][number] === 'undefined'){
                    Raven.captureException(`Image ${number} for ${test}/${model}/${color} not found!`);
                    console.error(`Image ${number} for ${test}/${model}/${color} not found!`)
                } else {
                    return get_absolut_path(maps[test][model][color][number])
                }
            }
        }

        return get_absolut_path('default.png')
    }
};

export default image_manager