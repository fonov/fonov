const testForRemove = currentModel => {

    switch (currentModel) {
        case 'iPhone':
        case 'iPhone 3G':
        case 'iPhone 3GS':
            return [
                'Touch3D',
                'Flash',
                'TouchIDorFaceID',
                'Warranty',
                'iCloid'
            ];
        case 'iPhone 4':
        case 'iPhone 4S':
        case 'iPhone 5':
        case 'iPhone 5c':
            return [
                'Touch3D',
                'TouchIDorFaceID',
                'Warranty'
            ];
        case 'iPhone 5s':
        case 'iPhone 6':
        case 'iPhone 6 Plus':
        case 'iPhone SE':
            return [
                'Touch3D'
            ];
        case 'iPhone 6s':
        case 'iPhone 6s Plus':
            return [

            ];
        case 'iPhone 7':
        case 'iPhone 7 Plus':
        case 'iPhone 8':
        case 'iPhone 8 Plus':
            return [
                'HeadphoneJack'
            ];
        case 'iPhone X':
            return [
                'HeadphoneJack'
            ];
        default:
            return [];
    }
};


const schemeOfTests = currentModel => {

    let mainSheme = [
        'About',
        'Appearance',
        'WaterSensor',
        'IMEI',
        'ButtonsAndVibration',
        'Sensor',
        'Touch3D',
        'iCloud',
        'Flash',
        'Speaker',
        'CompassAndGsensor',
        'Camera',
        'HeadphoneJack',
        'TouchIDorFaceID',
        'WiFi',
        'Bluetooth',
        'Microphone',
        'CallAndProximitySensor',
        'Charging',
        'Warranty',
        'Package'
    ];

    let test_for_remove = testForRemove(currentModel);

    for(let item of test_for_remove) {
        mainSheme.splice(mainSheme.indexOf(item), 1);
    }

    return mainSheme
};

export default schemeOfTests