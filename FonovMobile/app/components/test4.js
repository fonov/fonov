import React, { Component } from 'react';
import { View, Text, AlertIOS, Linking } from 'react-native'
import { Content, Button, Grid, Col, List, ListItem, Right, Body, Icon } from 'native-base'
import { Actions } from 'react-native-router-flux'
import DeviceInfo from 'react-native-device-info';


export default class Test4 extends Component{

    constructor(props) {
        super(props);

        this.iphoneInfo = {
            firstLetter: {
                F: 'Восстановленный',
                M: 'Для розничной продаже',
                N: 'Подменный iPhone. Выдан в замен не исправного iPhone',
                P: 'Специальный экземпляр'
            },
            modelInfo: {
                'iPhone': {
                    Black: {
                        '4 GB': ['A501'],
                        '8 GB': ['A712'],
                        '16 GB': ['B384']
                    }
                },
                'iPhone 3G': {
                    Black: {
                        '8 GB': ['B046', 'B489', 'B639', 'B702', 'C176', 'B490', 'B757'],
                        '16 GB': ["B048","B496","B497","B704","B631"]
                    },
                    White: {
                        '16 GB': ["B499","B500","B501","B632","B705"]
                    }
                },
                'iPhone 3GS': {
                    Black: {
                        '8 GB': ["C555","C640","C637"],
                        '16 GB': ["B715","B719","B735","C131","C135","C139","C143"],
                        '32 GB': ["B717","B737","C133","C137","C141","C158"]
                    },
                    White: {
                        '16 GB': ["B716","B736","C132","C136","C140","C144"],
                        '32 GB': ["B718","B738","C134","C138","C160"]
                    }
                },
                'iPhone 4': {
                    Black: {
                        '8 GB': ["D126","D127","D128", "D128","E798", "D146","D439","D873","E639"],
                        '16 GB': ["C318","C603","C608", 'C676'],
                        '32 GB': ["C319","C605","C610", 'C678']
                    },
                    White: {
                        '8 GB': ["D196","D197","D198", 'E799', "D200","D440","D874"],
                        '16 GB': ["C604","C536","C607","C609", 'C677'],
                        '32 GB': ["C606","C537","C611", 'C679']
                    }
                },
                'iPhone 4S': {
                    Black: {
                        '8 GB': ["E259","F257","F261","F263","F265","F269","F259","F267"],
                        '16 GB': ["C918","C922","D234","D235","D276","D377","D865","E804","D236","D251","D254"],
                        '32 GB': ["C919","C923","D241","D242","D278","D379","D261","D243"],
                        '64 GB': ["D257","D258","D269","D280","D381","D259","D270"]
                    },
                    White: {
                        '8 GB': ["F258","F260","F262","F264","F266","F270","F268"],
                        '16 GB': ["C920","C924","D237","D239","D277","D378","D866","E805","D240","D920"],
                        '32 GB': ["C921","D244","D279","D380","D246","D245","C925"],
                        '64 GB': ["D260","D271","D272","D281","D382","D262"]
                    }
                },
                'iPhone 5': {
                    Black: {
                        '16 GB': ["D293","D634","D638","E486", "D297","D654","D656","E039","D097","D669","D671"],
                        '32 GB': ["D295","D636","E488","D640", "D299","D658","D660","E041"],
                        '64 GB': ["D642","D644","E490","D646", "D662","D664","D667","E043"]
                    },
                    White: {
                        '16 GB': ["D294","D635","E487","D639", "D298","D655","D657","E040","D105","D672"],
                        '32 GB': ["D296","D637","E489","D641", "D300","D659","D661","E042","D144"],
                        '64 GB': ["D643","D645","E491","D647", "D663","D665","D668","E044"]
                    }
                },
                'iPhone 5c': {
                    Blue: {
                        '8 GB': ["G0T2","G1U2","G902"],
                        '16 GB': ["E507","E531","E543", "E555","E501","E561","F323","F333"],
                        '32 GB': ["F136","F151", 'F156']
                    },
                    Green: {
                        '8 GB': ["G0V2","G1W2","G912"],
                        '16 GB': ["E508","E496","E544","E568", "E556","E502","F324"],
                        '32 GB': ["F137","F152", "F157","F095","F329"]
                    },
                    Pink: {
                        '8 GB': ["G0V2","G1W2","G922"],
                        '16 GB': ["E509","E533","E545", "E557","E503"],
                        '32 GB': ["F138","F133","F153", "F158","F330"]
                    },
                    White: {
                        '8 GB': ["G0Q2","G1Q2","G8X2"],
                        '16 GB': ["E505","E493","E541","E565", "E553","E499","F321"],
                        '32 GB': ["F134","F149", "F154","F326"]
                    },
                    Yellow: {
                        '8 GB': ['GF12', "G0R2","G1R2","G8Y2"],
                        '16 GB': ['E506', "E554","F322"],
                        '32 GB': ['F135', "F155","F327"]
                    }
                },
                'iPhone 5s': {
                    Gold: {
                        '16 GB': ["E298", "E307", "E325", "E343", "E334", "E434","F354","F398","F363"],
                        '32 GB': ["E301", "E310", "E328", "E346", "E337", "E437","F357"],
                        '64 GB': ["E304", "E313", "E331", "E349", "E340", "E440","F360"]
                    },
                    Silver: {
                        '16 GB': ["E297","E306","E324","E333","E342", "E433","F353","F362"],
                        '32 GB': ["E300","E309","E327","E345","E336", "E436","F356"],
                        '64 GB': ["E303","E312","E348","E339","E330","F359", "E439"]
                    },
                    'Space Gray': {
                        '16 GB': ["E296","E305","E323","E341","E332","F797", "E432","F352"],
                        '32 GB': ["E299","E308","E326","E344","E335","F384", "E435","F355"],
                        '64 GB': ["E302","E311","E329","E347","E338", "E438","F358"]
                    }
                },
                'iPhone 6': {
                    Gold: {
                        '16 GB': ["G3D2","G492","G4Q2","G562","G5Y2","G6C2"],
                        '32 GB': [],
                        '64 GB': ["G3L2","G4J2","G502","G652","G6J2","G842"],
                        '128 GB': ["G3G2","G4E2","G4V2","G622"]
                    },
                    Silver: {
                        '16 GB': ["G3C2","G4P2","G482","G5X2","G552","G6A2","G7W2"],
                        '64 GB': ["G3K2","G4H2","G4X2","G5C2","G6H2","G642","G822"],
                        '128 GB': ["G3F2","G4C2"]
                    },
                    'Space Gray': {
                        '16 GB': ["G3A2","G4N2","G472","G5W2","G542","G692"],
                        '32 GB': ['Q3D2'],
                        '64 GB': ["G3H2","G4F2","G4W2","G5A2","G6G2","G632"],
                        '128 GB': ["G3E2","G4A2","G4R2","G602"]
                    }
                },
                'iPhone 6 Plus': {
                    Gold: {
                        '16 GB': ["GAA2","GAN2","GC12","GCM2","GCX2"],
                        '64 GB': ["GAK2","GAW2","GC72"],
                        '128 GB': ["GAF2","GAR2","GC42","GCQ2"]
                    },
                    Silver: {
                        '16 GB': ["GA92","GC92","GAM2","GC02","GCL2"],
                        '64 GB': ["GAJ2","GAV2","GC62"],
                        '128 GB': ["GAE2","GAQ2","GC32"]
                    },
                    'Space Gray': {
                        '16 GB': ["GA82","GAL2","GAX2","GCK2"],
                        '64 GB': ["GAH2","GAU2","GC52","GCR2"],
                        '128 GB': ["GAC2","GAP2","GC22","GCN2"]
                    }
                },
                'iPhone 6s': {
                    Gold: {
                        '16 GB': ["KQL2","KQ72","KR12","KRE2","KRW2","KT92","L7E2"],
                        '32 GB': ["N0P2","N172","N1K2","N1U2","N1Y2"],
                        '64 GB': ["KQC2","KQQ2","KR52","KRJ2","KT12","KTE2","L7J2"],
                        '128 GB': ["KQG2","KQV2","KR92","KRP2","KT52","KTJ2","L7N2"]
                    },
                    'Rose Gold': {
                        '16 GB': ["KQM2","KQ82","KRF2","KRX2","KR22","KTA2","L7F2"],
                        '32 GB': ["N0V2","N192","N1L2","N1V2","N202"],
                        '64 GB': ["KQD2","KQR2","KR62","KRK2","KT22","KTF2","L7K2"],
                        '128 GB': ["KQH2","KQW2","KRA2","KRQ2","KT62","KTK2","L7P2"]
                    },
                    Silver: {
                        '16 GB': ["KQ62","KQK2","KQY2","KRD2","KRT2","KT82","L7D2","KQJ2"],
                        '32 GB': ["N0N2","N162","N1G2","N1Q2","N1X2"],
                        '64 GB': ["KQA2","KQP2","KR42","KRH2","KT02","KTD2","L7H2"],
                        '128 GB': ["KQF2","KQU2","KR82","KRM2","KT42","KTH2","L7M2"]
                    },
                    'Space Gray': {
                        '16 GB': ["KQ52","KQJ2","KQX2","KRC2","KRR2","KT72","L7C2"],
                        '32 GB': ["N0M2","N132","N1E2","N1M2","N1W2"],
                        '64 GB': ["KQN2","KQ92","KR32","KRG2","KRY2","KTC2","L7G2"],
                        '128 GB': ["KQE2","KQT2","KR72","KRL2","KT32","KTG2","L7L2"]
                    }
                },
                'iPhone 6s Plus': {
                    Gold: {
                        '16 GB': ["KTN2","KU32","KUN2","KV62","KVQ2","KW72","L6D2"],
                        '64 GB': ["KTT2","KU82","KUV2","KVD2","KVX2","KWD2","L6H2"],
                        '128 GB': ["KTX2","KUF2","KV12","KVH2","KW22","KWH2","L6M2"]
                    },
                    'Rose Gold': {
                        '16 GB': ["KU52","L6E2","KTP2","KUP2","KV72","KVU2","KW82"],
                        '64 GB': ["KU92","L6J2","KTU2","KUW2","KVE2","KVY2","KWE2"],
                        '128 GB': ["KUG2","KV22","L6N2","KVJ2","KTY2"]
                    },
                    Silver: {
                        '16 GB': ["KTM2","KU22","KUJ2","KV52","KVP2","KW62","L6C2"],
                        '64 GB': ["KTR2","KU72","KUU2","KV92","KVW2","KWC2","L6G2"],
                        '128 GB': ["KTW2","KUE2","KUY2","KVG2","KW12","KWG2","L6L2"]
                    },
                    'Space Gray': {
                        '16 GB': ["KU12","L6A2","KV32","KTL2","KUH2","KVN2","KW52"],
                        '64 GB': ["KU62","L6F2","KTQ2","KUQ2","KV82","KVV2","KW92","L642"],
                        '128 GB': ["KUD2","L6K2","KTV2","KUX2","KVF2","KW02","KWF2"]
                    }
                },
                'iPhone SE': {
                    Gold: {
                        '16 GB': ["LXH2","LXW2","LY12","LY52","LY92","LXM2"],
                        '32 GB': ["P8D2","P8R2","P8H2","P8M2","P7V2","P842"],
                        '64 GB': ["LXK2","LXY2","LY32","LY72","LYC2","LXP2"],
                        '128 GB': ["P952","P9J2","P992","P9E2","P802","P882"],
                    },
                    'Rose Gold': {
                        '16 GB': ["LXJ2","LXX2","LY22","LY62","LYA2","LXN2"],
                        '32 GB': ["P8E2","P8T2","P8J2","P8N2","P7W2","P852"],
                        '64 GB': ["LXL2","LY02","LY42","LY82","LYD2","LXQ2"],
                        '128 GB': ["P962","P9K2","P9A2","P9F2","P812","P892"],
                    },
                    Silver: {
                        '16 GB': ["LLM2","LLV2","LLX2","LM02","LM32","LLP2"],
                        '32 GB': ["P8C2","P8Q2","P8G2","P8L2","P7U2","P832"],
                        '64 GB': ["LM52","LMC2","LME2","LMG2","LMJ2","LM72"],
                        '128 GB': ["P942","P9H2","P982","P9D2","P7Y2","P872"],
                    },
                    'Space Gray': {
                        '16 GB': ["LLL2","LLU2","LLW2","LLY2","LM22","LLN2"],
                        '32 GB': ["P8A2","P8P2","P8F2","P8K2","P7T2","P822"],
                        '64 GB': ["LM42","LM62","LMA2","LMD2","LMF2","LMH2"],
                        '128 GB': ["P932","P9G2","P972","P9C2","P7X2","P862"],
                    }
                },
                'iPhone 7': {
                    Black: {
                        '32 GB': ["N8G2","NAC2","NAY2","NCE2","NGQ2", "N9D2","N9U2","N8X2"],
                        '128 GB': ["N8L2","NAJ2","NC32","NCK2","NGX2", "N9H2","N9Y2","N922"],
                        '256 GB': ["N8R2","NAQ2","NC82","NCQ2", "N9N2","NA62","N972"],
                    },
                    Gold: {
                        '32 GB': ["N8J2","NAE2","NC12","NCG2", "N9F2","N9W2","N902"],
                        '128 GB': ["N8N2","NAL2","NC52","NCM2","NH02", "N9K2","NA32","N942"],
                        '256 GB': ["N8U2","NAV2","NCA2","NCT2", "N9Q2","NA82"],
                    },
                    'Jet Black': {
                        '128 GB': ["N8Q2","NAP2","NC72","NCP2", "N9M2","NA52","N962"],
                        '256 GB': ["N8W2","NAX2","NCD2","NCV2", "N9T2","NAA2","N9C2"],
                    },
                    Red: {
                        '128 GB': ["PRV2","PRT2","PRH2","PRL2", "PRN2","PRQ2"],
                        '256 GB': ["PRW2","PRU2","PRJ2","PRM2", "PRP2","PRR2"],
                    },
                    'Rose Gold': {
                        '32 GB': ["N8K2","NAF2","NC22","NCJ2", "N9G2","N9X2","N912"],
                        '128 GB': ["N8P2","NAM2","NC62","NH12","NCN2", "N9L2","NA42","N952"],
                        '256 GB': ["N8V2","NAW2","NCC2","NCU2", "N9R2","NA92"],
                    },
                    Silver: {
                        '32 GB': ["N8H2","NAD2","NC02","NCF2", "N9E2","N9V2"],
                        '128 GB': ["N8M2","NAK2","NC42","NCL2", "N9J2","NA02"],
                        '256 GB': ["N8T2","NAU2","NC92","NCR2", "N9P2","NA72"],
                    }
                },
                'iPhone 7 Plus': {
                    Black: {
                        '32 GB': ["NQH2","NR12","NR52","NR92","NRJ2", "NQR2","NQW2","NQM2"],
                        '128 GB': ["N482","N5T2","N642","N6F2","NFP2", "N522","N5G2","N4M2"],
                        '256 GB': ["N4E2","N5Y2","N692","N6L2","NFV2", "N592","N5M2","N4W2"],
                    },
                    Gold: {
                        '32 GB': ["NQK2","NR32","NR72","NRC2","NRL2", "NQU2","NQY2","NQP2"],
                        '128 GB': ["N4A2","N5V2","N662","N6H2","NFR2", "N552","N5J2","N4Q2"],
                        '256 GB': ["N4J2","N612","N6C2","N6N2", "N5D2","N5P2","N4Y2"],
                    },
                    'Jet Black': {
                        '128 GB': ["N4D2","N5X2","N682","N6K2", "N572","N5L2","N4V2"],
                        '256 GB': ["N4L2","N632","N6E2","N6Q2", "N5F2","N5R2"],
                    },
                    Red: {
                        '128 GB': ["PR12","PR02","PQV2","PQW2", "PQW2","PQY2"],
                        '256 GB': ["PRA2","PR92","PR52","PR62", "PR72","PR82"],
                    },
                    'Rose Gold': {
                        '32 GB': ["NQL2","NR42","NR82","NRD2","NRM2", "NQV2","NR02","NQQ2"],
                        '128 GB': ["N4C2","N5W2","N672","N6J2","NFT2", "N562","N5K2","N4U2"],
                        '256 GB': ["N4K2","N622","N6D2","N6P2","NFY2", "N5E2","N5Q2"],
                    },
                    Silver: {
                        '32 GB': ["NQJ2","NR22","NR62","NRA2","NRK2", "NQT2","NQX2","NQN2"],
                        '128 GB': ["N492","N5U2","N652","N6G2","NFQ2", "N532","N5H2","N4P2"],
                        '256 GB': ["N4F2","N602","N6A2","N6M2", "N5C2","N5N2","N4X2","N502"],
                    }
                },
                'iPhone 8': {
                    Gold: {
                        '64 GB': ["Q6M2","Q742","Q772", "Q6J2","Q6X2","Q712"],
                        '256 GB': ["Q7H2","Q802","Q832", "Q7E2","Q7T2","Q7W2"],
                    },
                    Silver: {
                        '64 GB': ["Q6L2","Q732","Q762", "Q6H2","Q6W2","Q702"],
                        '256 GB': ["Q7G2","Q7Y2","Q822", "Q7D2","Q7R2","Q7V2"],
                    },
                    'Space Gray': {
                        '64 GB': ["Q6K2","Q722","Q752", "Q6G2","Q6V2","Q6Y2"],
                        '256 GB': ["Q7F2","Q7X2","Q812", "Q7C2","Q7Q2","Q7U2"],
                    }
                },
                'iPhone 8 Plus': {
                    Gold: {
                        '64 GB': ["Q8F2","Q9F2","Q982", "Q8N2","Q8V2","Q922"],
                        '256 GB': ["Q8J2","Q9C2","Q9J2", "Q8R2","Q8Y2","Q952"],
                    },
                    Silver: {
                        '64 GB': ["Q8E2","Q9E2","Q972","Q8M2","Q8U2","Q912"],
                        '256 GB': ["Q8H2","Q9A2","Q9H2","Q8Q2","Q8X2","Q942"],
                    },
                    'Space Gray': {
                        '64 GB': ["Q8D2","Q9D2","Q962","Q8L2","Q8T2","Q902"],
                        '256 GB': ["Q8G2","Q9G2","Q992","Q8P2","Q8W2","Q932"],
                    }
                },
                'iPhone X': {
                    Silver: {
                        '64 GB': ["QCT2","QCL2","QAY2","QA62","QAK2","QAR2","QAD2"],
                        '256 GB': ["QCW2","QCP2","QC22","QA92","QAN2","QAV2","QAG2"],
                    },
                    'Space Gray': {
                        '64 GB': ["QCR2","QCK2","QAX2","QA52","QAJ2","QAQ2","QAC2"],
                        '256 GB': ["QCV2","QCN2","QC12","QA82","QAM2","QAU2","QAF2"],
                    }
                }
            },
            country: {
                A: 'Канада',
                AE: 'ОАЭ, Бахрейн, Кувейт, Катар, Саудовская Аравия',
                AB: 'Египет, Иордания, Саудовская Аравия, Объединенные Арабские Эмираты',
                AH: 'Бахрейн, Кувейт',
                B: 'Великобритания или Ирландия',
                BR: 'Бразилия (собран в Бразилии)',
                BZ: 'Бразилия (собран в Китае)',
                C: 'Канада',
                CL: 'Канада',
                CH: 'Китай',
                CZ: 'Чешская Республика',
                D: 'Германия',
                DN: 'Австрия, Германия, Нидерланды',
                E: 'Мексика',
                EE: 'Эстония',
                FB: 'Люксембург',
                F: 'Франция',
                FD: 'Лихтенштейн, Австрия, или Швейцария',
                GR: 'Греция',
                HN: 'Индия',
                IP: 'Италия',
                HB: 'Израиль',
                J: 'Япония',
                KH: 'Корея',
                KN: 'Норвегия',
                KS: 'Финляндия, Швеция',
                FS: 'Финляндия',
                LA: 'Колумбия, Эквадор, Сальвадор, Гватемала, Гондурас, Перу',
                LE: 'Аргентина',
                LL: 'США, Канада',
                LZ: 'Чили, Парагвай, Уругвай',
                MG: 'Венгрия',
                MO: 'Макао',
                MY: 'Малайзия',
                NF: 'Бельгии, Франции, Люксембурга',
                PL: 'Польша',
                LP: 'Польша',
                PO: 'Португалия',
                PP: 'Филиппины',
                RO: 'Румыния',
                RS: 'Россия',
                RR: 'Россия',
                RU: 'Россия',
                RP: 'Россия',
                SL: 'Словакия',
                LV: 'Латвия',
                SO: 'ЮАР',
                T: 'Италия',
                TA: 'Тайвань',
                TU: 'Турция',
                TY: 'Италия',
                VC: 'Канада',
                X: 'Австралия, Новая Зеландия',
                Y: 'Испания',
                ZA: 'Сингапур',
                ZP: 'Гонконг, Макао',
                QL: 'Италия, Испания, Португалия',
                RK: 'Казахстан',
                SU: 'Украина',
                UA: 'Украина',
                CN: 'Словакия',
                ET: 'Эстония',
                LT: 'Литва',
                PK: 'Финляндия, Польша',
                PM: 'Польша',
                QN: 'Дания, Норвегия, Швеция, Исландия',
                RM: 'Россия или Казахстан',
                SE: 'Сербия',
                ZD: 'Германия, Бельгия, Люксембург, Нидерланды, Австрия, Франция, Швейцария, Монако'
            }
        };

        this.state = {
            iPhone: '-',
            capacity: '-',
            color: '-',
            type: '-',
            country_of_purchase: '-'
        }
    }

    getInfo(result) {
        const { firstLetter, modelInfo, country } = this.iphoneInfo;

        info = {
            type: firstLetter[result.firstLetter] || "-",
            country_of_purchase: country[result.code_country] || '-'
        };

        for (let iPhone in modelInfo) {
            for (let color in modelInfo[iPhone]) {
                for (let capacity in modelInfo[iPhone][color]) {
                    if (modelInfo[iPhone][color][capacity].indexOf(result.code) !== -1) {
                        Object.assign(info, {
                            iPhone,
                            color,
                            capacity
                        })
                    }
                }
            }
        }

        this.setState(info)
    }

    getModel() {

        let getCleanModel = model => {
            return new Promise((resolve, reject) => {
                model_split = model.split('/');
                if (model_split.length === 2 && (model_split[0].length === 7 || model_split[0].length === 6)) {
                    model_split[0] = model_split[0].toUpperCase();
                    let result = {
                        firstLetter: model_split[0].slice(0, 1),
                        code: model_split[0].slice(1, 5),
                        code_country: model_split[0].slice(5, model_split[0].length)
                    };
                    resolve(result)
                } else {
                    reject();
                }
            });
        };

        let inputModel = () => AlertIOS.prompt(
            'Модель устройства',
            null,
            rowModel => {
                getCleanModel(rowModel)
                    .then(result => {
                        this.getInfo(result);
                    })
                    .catch(() => {
                        AlertIOS.alert(
                            'Вы ввели не верную модель iPhone',
                            'Попробывать еще?',
                            [
                                {
                                    text: 'Ввести еще раз',
                                    onPress: () => inputModel()
                                },
                                {
                                    text: 'Отмена',
                                    style: 'cancel',
                                    onPress: () => null,
                                },
                            ]
                        )
                    });
            }
        );

        AlertIOS.alert(
            'Введите модель устройства',
            'Настройки -> Основыный об устройстве -> Модель\nПример: MN592LL/A',
            [
                {
                    text: 'Открыть настройки',
                    onPress: () => Promise.all([
                        Linking.openURL('app-settings:root=General&path=About'),
                        inputModel()
                    ])
                },
                {
                    text: 'Ввести',
                    onPress: () => inputModel(),
                    style: 'cancel',
                },

            ]
        );

    }

    render(){

        const { iPhone, capacity, color, type, country_of_purchase } = this.state;

        return(
            <Content>

                <Button block style={{margin: 10}} success onPress={() => this.getModel()}>
                    <Text>Получить подробную информацию</Text>
                </Button>

                <List style={{margin: 10}}>
                    <ListItem>
                        <Body>
                            <Text>Модель</Text>
                        </Body>
                        <Text>{iPhone}</Text>
                    </ListItem>
                    <ListItem>
                        <Body>
                        <Text>Кол-во памати</Text>
                        </Body>
                        <Text>{capacity}</Text>
                    </ListItem>
                    <ListItem>
                        <Body>
                        <Text>Цвет устройства</Text>
                        </Body>
                        <Text>{color}</Text>
                    </ListItem>
                    <ListItem>
                        <Body>
                        <Text>Тип устройства</Text>
                        </Body>
                        <Text>{type}</Text>
                    </ListItem>
                    <ListItem>
                        <Body>
                        <Text>Страна покупки</Text>
                        </Body>
                        <Text>{country_of_purchase}</Text>
                    </ListItem>
                </List>

            </Content>
        )
    }

}