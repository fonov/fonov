const fs = require('fs'),
    ignore = ['.DS_Store', 'maps.js', 'refactor.js', 'maps.json', 'ls_maps.js'];


let maps = {};

const clean_file_name = name => {
    if (name.split('.').length === 2) {
        return name.split('.')[0];
    } else {
        return name
    }
};

const separate_dir = name => {
    let arr_dir = name.split(',');

    for (let [index, value] of arr_dir.entries()) {
        arr_dir[index] = value.trim()
    }

    return arr_dir
};

const openFolder = (path, init=false) => {
    fs.readdir(path, (err, files) => {
        if (files && files.length) {
            files.forEach((file, index, arr) => {
                if (ignore.indexOf(file) === -1) {
                    const absolut_path = path[path.length-1] === '/' ? `${path}${file}`: `${path}/${file}`,
                        is_dir = fs.lstatSync(absolut_path).isDirectory();

                    let s_path = absolut_path.toLowerCase().slice(2, absolut_path.length),
                        file_path = absolut_path.slice(2, absolut_path.length);

                    if (init) {
                        maps[s_path] = {};
                    } else {
                        let dff = s_path.split('/');

                        if (dff.length === 2) {
                            let s_dir = separate_dir(dff[1]);
                            s_dir.forEach(item => {
                                maps[dff[0]][item] = {}
                            });
                        }
                        if (dff.length === 3) {
                            let s_dir = separate_dir(dff[1]);

                            let clean_name = clean_file_name(dff[2]);
                            s_dir.forEach(item => {
                                maps[dff[0]][item][clean_name] = is_dir ? {} : file_path
                            });
                        }
                        if (dff.length === 4) {
                            let s_dir = separate_dir(dff[1]);

                            let clean_name = clean_file_name(dff[3]);
                            s_dir.forEach(item => {
                                maps[dff[0]][item][dff[2]][clean_name] = is_dir ? {} : file_path
                            });
                        }
                    }

                    if (fs.lstatSync(absolut_path).isDirectory()) {
                        openFolder(absolut_path)
                    }
                }
            });
        }
    });


};

openFolder('./', true);

setTimeout(() => {
    fs.writeFile("./maps.json", JSON.stringify(maps), function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("Maps create\n\n" +
            "=========================\n\n" + JSON.stringify(maps));
    });
}, 500);