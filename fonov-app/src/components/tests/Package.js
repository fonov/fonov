import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BaseTest, BaseCard } from '../../elements/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";


class Package extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    earpods() {

        const { currentModel, image_manager } = this.props;

        switch (currentModel) {
            case 'iPhone':
            case 'iPhone 3G':
            case 'iPhone 3GS':
            case 'iPhone 4':
            case 'iPhone 4S':
                return image_manager(3);
            case 'iPhone 5':
            case 'iPhone 5c':
            case 'iPhone 5s':
            case 'iPhone 6':
            case 'iPhone 6 Plus':
            case 'iPhone SE':
            case 'iPhone 6s':
            case 'iPhone 6s Plus':
            case 'iPhone 7':
            case 'iPhone 7 Plus':
            case 'iPhone 8':
            case 'iPhone 8 Plus':
            case 'iPhone X':
                return image_manager(4);
            default:
                return null
        }
    }

    adapter() {

        const { currentModel, image_manager, _ } = this.props;

        switch (currentModel) {
            case 'iPhone 7':
            case 'iPhone 7 Plus':
            case 'iPhone 8':
            case 'iPhone 8 Plus':
            case 'iPhone X':
                return (
                    <BaseCard
                        cards={[
                            [_('lightning_adapter/3.5_mm_...'), image_manager(8)]
                        ]}
                    />
                );
            default:
                return null
        }
    }

    cable() {

        const { currentModel, image_manager, _ } = this.props;

        switch (currentModel) {
            case 'iPhone':
            case 'iPhone 3G':
            case 'iPhone 3GS':
            case 'iPhone 4':
            case 'iPhone 4S':
                return (
                    <BaseCard
                        cards={[
                            [_('30-pin_cable.'), image_manager(1)]
                        ]}
                    />
                );
            case 'iPhone 5':
            case 'iPhone 5c':
            case 'iPhone 5s':
            case 'iPhone 6':
            case 'iPhone 6 Plus':
            case 'iPhone SE':
            case 'iPhone 6s':
            case 'iPhone 6s Plus':
            case 'iPhone 7':
            case 'iPhone 7 Plus':
            case 'iPhone 8':
            case 'iPhone 8 Plus':
            case 'iPhone X':
                return (
                    <BaseCard
                        cards={[
                            [_('lightning_to_usb_cable.'), image_manager(2)]
                        ]}
                    />
                );
            default:
                return null
        }
    }

    powerAdapter() {
        const { currentModelInfo, image_manager } = this.props;

        switch (currentModelInfo.code_country) {
            //Канада
            case 'A':
                return image_manager(5);
            //ОАЭ, Бахрейн, Кувейт, Катар, Саудовская Аравия
            case 'AE':
                return image_manager(6);
            //Египет, Иордания, Саудовская Аравия, Объединенные Арабские Эмираты
            case 'AB':
                return image_manager(6);
            //Бахрейн, Кувейт
            case 'AH':
                return image_manager(6);
            //Великобритания или Ирландия
            case 'B':
                return image_manager(7);
            //Бразилия (собран в Бразилии)
            case 'BR':
                return image_manager(5);
            //Бразилия (собран в Китае)
            case 'BZ':
                return image_manager(5);
            //Канада
            case 'C':
                return image_manager(5);
            //Канада
            case 'CL':
                return image_manager(5);
            //Китай
            case 'CH':
                return image_manager(5);
            //Чешская Республика
            case 'CZ':
                return image_manager(6);
            //Германия
            case 'D':
                return image_manager(6);
            //Австрия, Германия, Нидерланды
            case 'DN':
                return image_manager(6);
            //Мексика
            case 'E':
                return image_manager(5);
            //Эстония
            case 'EE':
                return image_manager(6);
            //Люксембург
            case 'FB':
                return image_manager(6);
            //Франция
            case 'F':
                return image_manager(6);
            //Лихтенштейн, Австрия, или Швейцария
            case 'FD':
                return image_manager(6);
            //Греция
            case 'GR':
                return image_manager(5);
            //Индия
            case 'HN':
                return image_manager(6);
            //Италия
            case 'IP':
                return image_manager(6);
            //Израиль
            case 'HB':
                return image_manager(6);
            //Япония
            case 'J':
                return image_manager(5);
            //Корея
            case 'KH':
                return image_manager(5);
            //Норвегия
            case 'KN':
                return image_manager(6);
            //Финляндия, Швеция
            case 'KS':
                return image_manager(6);
            //Финляндия
            case 'FS':
                return image_manager(6);
            //Колумбия, Эквадор, Сальвадор, Гватемала, Гондурас, Перу
            case 'LA':
                return image_manager(6);
            //Аргентина
            case 'LE':
                return image_manager(5);
            //США, Канада
            case 'LL':
                return image_manager(5);
            //Чили, Парагвай, Уругвай
            case 'LZ':
                return image_manager(5);
            //Венгрия
            case 'MG':
                return image_manager(5);
            //Макао
            case 'MO':
                return image_manager(5);
            //Малайзия
            case 'MY':
                return image_manager(5);
            //Бельгии, Франции, Люксембурга
            case 'NF':
                return image_manager(6);
            //Польша
            case 'PL':
                return image_manager(6);
            //Польша
            case 'LP':
                return image_manager(6);
            //Португалия
            case 'PO':
                return image_manager(6);
            //Филиппины
            case 'PP':
                return image_manager(5);
            //Румыния
            case 'RO':
                return image_manager(6);
            //Россия
            case 'RS':
                return image_manager(6);
            //Россия
            case 'RR':
                return image_manager(6);
            //Россия
            case 'RU':
                return image_manager(6);
            //Россия
            case 'RP':
                return image_manager(6);
            //Словакия
            case 'SL':
                return image_manager(6);
            //Латвия
            case 'LV':
                return image_manager(6);
            //ЮАР
            case 'SO':
                return image_manager(7);
            //Италия
            case 'T':
                return image_manager(6);
            //Тайвань
            case 'TA':
                return image_manager(5);
            //Турция
            case 'TU':
                return image_manager(5);
            //Италия
            case 'TY':
                return image_manager(6);
            //Канада
            case 'VC':
                return image_manager(5);
            //Австралия, Новая Зеландия
            case 'X':
                return image_manager(9);
            //Испания
            case 'Y':
                return image_manager(6);
            //Сингапур
            case 'ZA':
                return image_manager(5);
            //Гонконг, Макао
            case 'ZP':
                return image_manager(6);
            //Италия, Испания, Португалия
            case 'QL':
                return image_manager(6);
            //Казахстан
            case 'RK':
                return image_manager(6);
            //Украина
            case 'SU':
                return image_manager(6);
            //Украина
            case 'UA':
                return image_manager(6);
            //Словакия
            case 'CN':
                return image_manager(6);
            //Эстония
            case 'ET':
                return image_manager(6);
            //Литва
            case 'LT':
                return image_manager(6);
            //Финляндия, Польша
            case 'PK':
                return image_manager(6);
            //Польша
            case 'PM':
                return image_manager(6);
            //Дания, Норвегия, Швеция, Исландия
            case 'QN':
                return image_manager(6);
            //Россия или Казахстан
            case 'RM':
                return image_manager(6);
            //Сербия
            case 'SE':
                return image_manager(6);
            //Германия, Бельгия, Люксембург, Нидерланды, Австрия, Франция, Швейцария, Монако
            case 'ZD':
                return image_manager(6);
            default:
                return image_manager(5);
        }
    }

    render() {

        const {_} = this.props;

        return (
            <BaseTest
                test='Package'
                Title={_('equipment')}
                rating_check
                rating_question={_('package_contents_iphone_i...')}
            >
                <BaseCard
                    cards={[
                      [_('headphones.'), this.earpods()]
                    ]}
                />
                {this.adapter()}
                <BaseCard
                    cards={[
                        [_('charger.'), this.powerAdapter()]
                    ]}
                />
                {this.cable()}
            </BaseTest>
        )
    }

}

const mapStateToProps = state => {
    return {
        _: getTranslate(state.locale),
        currentLanguage: getActiveLanguage(state.locale).code,
        currentModel: state.current_iphone.model,
        currentModelInfo: state.current_iphone.model_info
    }
};

const mapDispatchToProps = dispatch => {
    return {
        replace: path =>  dispatch(replace(path)),
        image_manager: number => dispatch(image_manager('Package', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Package);