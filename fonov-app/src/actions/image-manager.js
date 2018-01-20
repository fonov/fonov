import maps from '../assets/img/maps.json'


const get_absolut_path = path => require(`../assets/img/${path}`);

const image_manager = (test, number) => {
    return (dispatch, getState) => {
        const { current_iphone } = getState(),
            {model, color} = current_iphone;

        // const current_iphone = {model: 'iPhone 6', color: 'Gold'},
        //     {model, color} = current_iphone;

        if(typeof maps[test] === 'undefined') {
            throw new Error(`Test "${test}" not found!`)
        } else if (typeof maps[test]["default"] !== 'undefined') {
            if (typeof maps[test]["default"][number] === 'undefined') {
                throw new Error(`Image ${number} for ${test}/default not found!`)
            } else {
                return get_absolut_path(maps[test]["default"][number])
            }
        } else if (typeof maps[test][model] === 'undefined') {
            throw new Error(`Model "${model}" for ${test} not found!`)
        } else if (typeof maps[test][model][color] === 'undefined') {
            throw new Error(`Color "${color}" for ${test}/${model} not found!`)
        } else if (typeof maps[test][model][color][number] === 'undefined'){
            throw new Error(`Image ${number} for ${test}/${model}/${color} not found!`)
        } else {
            return get_absolut_path(maps[test][model][color][number])
        }
    }
};

export default image_manager