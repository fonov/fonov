const fs = require('fs'),
    ignore = ['.DS_Store'];


let base_path = './ButtonsAndVibration';


const arr_for_rename = [ 'iPhone 6, iPhone 6 Plus, iPhone 6s, iPhone 6s Plus',
    'iPhone 7',
    'iPhone 7 Plus',
    'iPhone 8',
    'iPhone 8 Plus'
];

for(let item of arr_for_rename) {
    fs.readdir(base_path+'/'+item, (err, files2) => {
        for(let key2 of files2) {
            if (ignore.indexOf(key2) === -1) {
                fs.readdir(base_path + '/' + item + '/' + key2, (err, files3) => {


                    for(let key3 of files3) {
                        let name = key3.split('.')[0];
                            // type = key3.split('.')[1];

                        // if (name == '_1') {
                        //     fs.rename(base_path+'/'+item+'/'+key2+'/'+key3, base_path+'/'+item+'/'+key2+`/1.${type}`, function(err) {
                        //         if ( err ) console.log('ERROR: ' + err);
                        //     });
                        // }
                        // if (name == '_2') {
                        //     fs.rename(base_path+'/'+item+'/'+key2+'/'+key3, base_path+'/'+item+'/'+key2+`/2.${type}`, function(err) {
                        //         if ( err ) console.log('ERROR: ' + err);
                        //     });
                        // }

                        if (name === 'undefined') {
                            fs.unlink(base_path+'/'+item+'/'+key2+'/'+key3,function(err){

                            })
                        }
                    }
                })
            }
        }
    })
}


// fs.readdir(base_path, (err, files) => {
//
//     let index = 0, arr_for_rename = [];
//
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
//
//     const select_folder = () => {
//         rl.question(`Переименовать файлы в этой папки ${files[index]}\nЕсли Да то 1. Нет 2\n`, (answer) => {
//             if (answer == 1) {
//                 arr_for_rename.push(files[index]);
//
//                 console.log(`Dir ${files[index]} add\n\n`)
//             } else {
//                 console.log(`Dir ${files[index]} pass\n\n`)
//             }
//             index++;
//             // rl.close();
//             if (files.length === index) {
//                 console.log(arr_for_rename)
//                 // console.log(`${arr_for_rename} папки для переименования`)
//
//
//             } else {
//                 select_folder()
//             }
//         });
//     };
//
//     select_folder();
//
//
//
//
//
//         // if (ignore.indexOf(item) === -1){
//         //
//         //
//         //
//         // }
//     // }
// });