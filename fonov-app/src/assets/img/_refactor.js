const fs = require('fs'),
    ignore = ['.DS_Store'];


const openFolder = (path) => {
    fs.readdir(path, (err, files) => {
        if (files && files.length) {
            files.forEach(file => {
                if (ignore.indexOf(file) === -1) {
                    const absolut_path = path[path.length-1] === '/' ? `${path}${file}`: `${path}/${file}`;
                    if (fs.lstatSync(absolut_path).isDirectory() === false && file.split('-').length === 3) {
                        let name = file.split('.')[0],
                            type = file.split('.')[1];

                        if (typeof name.split('-')[2] === 'undefined') {
                            name = name.split('_')
                        } else {
                            name = name.split('-')
                        }
                        name = name[2];
                        if (name === 'front') {
                            name = 1;
                        }
                        if (name === 'back') {
                            name = 2;
                        }
                        if (name === 'side') {
                            name = 3
                        }
                        let full_name = `${name}.${type}`;
                        console.log(file, '=>', full_name);
                        fs.rename(absolut_path, `${path}/${full_name}`, function(err) {
                            if ( err ) console.log('ERROR: ' + err);
                        });
                    }
                    if (fs.lstatSync(absolut_path).isDirectory()) {
                        openFolder(absolut_path)
                    }
                }
            });
        }
    });
};

openFolder('./ButtonsAndVibration/');