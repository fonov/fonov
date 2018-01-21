import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image } from '../../elements/index'
import {RatingCheck} from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import { View, Navbar, Pages, Page, Views, NavCenter,Card, CardContent, CardHeader, NavLeft, NavRight
} from 'framework7-react';
import image_manager from "../../actions/image-manager";


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
                return (
                    <Image src={image_manager(3)} />
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
                    <Image src={image_manager(4)} />
                );
            default:
                return null
        }
    }

    adapter() {

        const { currentModel, image_manager } = this.props;

        switch (currentModel) {
            case 'iPhone 7':
            case 'iPhone 7 Plus':
            case 'iPhone 8':
            case 'iPhone 8 Plus':
            case 'iPhone X':
                return (
                    <Card>
                        <CardHeader>
                            Адаптер Lightning/выход 3,5 мм для наушников.
                        </CardHeader>
                        <CardContent>
                            <Image src={image_manager(8)} />
                        </CardContent>
                    </Card>
                );
            default:
                return null
        }
    }

    cable() {

        const { currentModel, image_manager } = this.props;

        switch (currentModel) {
            case 'iPhone':
            case 'iPhone 3G':
            case 'iPhone 3GS':
            case 'iPhone 4':
            case 'iPhone 4S':
                return (
                    <Card>
                        <CardHeader>
                            30-пиновый кабель.
                        </CardHeader>
                        <CardContent>
                            <Image src={image_manager(1)} />
                        </CardContent>
                    </Card>
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
                    <Card>
                        <CardHeader>
                            Кабель Lightning/USB.
                        </CardHeader>
                        <CardContent>
                            <Image src={image_manager(2)} />
                        </CardContent>
                    </Card>
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
                return <Image src={image_manager(5)} />;
            //ОАЭ, Бахрейн, Кувейт, Катар, Саудовская Аравия
            case 'AE':
                return <Image src={image_manager(6)} />;
            //Египет, Иордания, Саудовская Аравия, Объединенные Арабские Эмираты
            case 'AB':
                return <Image src={image_manager(6)} />;
            //Бахрейн, Кувейт
            case 'AH':
                return <Image src={image_manager(6)} />;
            //Великобритания или Ирландия
            case 'B':
                return <Image src={image_manager(7)} />;
            //Бразилия (собран в Бразилии)
            case 'BR':
                return <Image src={image_manager(5)} />;
            //Бразилия (собран в Китае)
            case 'BZ':
                return <Image src={image_manager(5)} />;
            //Канада
            case 'C':
                return <Image src={image_manager(5)} />;
            //Канада
            case 'CL':
                return <Image src={image_manager(5)} />;
            //Китай
            case 'CH':
                return <Image src={image_manager(5)} />;
            //Чешская Республика
            case 'CZ':
                return <Image src={image_manager(6)} />;
            //Германия
            case 'D':
                return <Image src={image_manager(6)} />;
            //Австрия, Германия, Нидерланды
            case 'DN':
                return <Image src={image_manager(6)} />;
            //Мексика
            case 'E':
                return <Image src={image_manager(5)} />;
            //Эстония
            case 'EE':
                return <Image src={image_manager(6)} />;
            //Люксембург
            case 'FB':
                return <Image src={image_manager(6)} />;
            //Франция
            case 'F':
                return <Image src={image_manager(6)} />;
            //Лихтенштейн, Австрия, или Швейцария
            case 'FD':
                return <Image src={image_manager(6)} />;
            //Греция
            case 'GR':
                return <Image src={image_manager(5)} />;
            //Индия
            case 'HN':
                return <Image src={image_manager(6)} />;
            //Италия
            case 'IP':
                return <Image src={image_manager(6)} />;
            //Израиль
            case 'HB':
                return <Image src={image_manager(6)} />;
            //Япония
            case 'J':
                return <Image src={image_manager(5)} />;
            //Корея
            case 'KH':
                return <Image src={image_manager(5)} />;
            //Норвегия
            case 'KN':
                return <Image src={image_manager(6)} />;
            //Финляндия, Швеция
            case 'KS':
                return <Image src={image_manager(6)} />;
            //Финляндия
            case 'FS':
                return <Image src={image_manager(6)} />;
            //Колумбия, Эквадор, Сальвадор, Гватемала, Гондурас, Перу
            case 'LA':
                return <Image src={image_manager(6)} />;
            //Аргентина
            case 'LE':
                return <Image src={image_manager(5)} />;
            //США, Канада
            case 'LL':
                return <Image src={image_manager(5)} />;
            //Чили, Парагвай, Уругвай
            case 'LZ':
                return <Image src={image_manager(5)} />;
            //Венгрия
            case 'MG':
                return <Image src={image_manager(5)} />;
            //Макао
            case 'MO':
                return <Image src={image_manager(5)} />;
            //Малайзия
            case 'MY':
                return <Image src={image_manager(5)} />;
            //Бельгии, Франции, Люксембурга
            case 'NF':
                return <Image src={image_manager(6)} />;
            //Польша
            case 'PL':
                return <Image src={image_manager(6)} />;
            //Польша
            case 'LP':
                return <Image src={image_manager(6)} />;
            //Португалия
            case 'PO':
                return <Image src={image_manager(6)} />;
            //Филиппины
            case 'PP':
                return <Image src={image_manager(5)} />;
            //Румыния
            case 'RO':
                return <Image src={image_manager(6)} />;
            //Россия
            case 'RS':
                return <Image src={image_manager(6)} />;
            //Россия
            case 'RR':
                return <Image src={image_manager(6)} />;
            //Россия
            case 'RU':
                return <Image src={image_manager(6)} />;
            //Россия
            case 'RP':
                return <Image src={image_manager(6)} />;
            //Словакия
            case 'SL':
                return <Image src={image_manager(6)} />;
            //Латвия
            case 'LV':
                return <Image src={image_manager(6)} />;
            //ЮАР
            case 'SO':
                return <Image src={image_manager(7)} />;
            //Италия
            case 'T':
                return <Image src={image_manager(6)} />;
            //Тайвань
            case 'TA':
                return <Image src={image_manager(5)} />;
            //Турция
            case 'TU':
                return <Image src={image_manager(5)} />;
            //Италия
            case 'TY':
                return <Image src={image_manager(6)} />;
            //Канада
            case 'VC':
                return <Image src={image_manager(5)} />;
            //Австралия, Новая Зеландия
            case 'X':
                return <Image src={image_manager(9)} />;
            //Испания
            case 'Y':
                return <Image src={image_manager(6)} />;
            //Сингапур
            case 'ZA':
                return <Image src={image_manager(5)} />;
            //Гонконг, Макао
            case 'ZP':
                return <Image src={image_manager(6)} />;
            //Италия, Испания, Португалия
            case 'QL':
                return <Image src={image_manager(6)} />;
            //Казахстан
            case 'RK':
                return <Image src={image_manager(6)} />;
            //Украина
            case 'SU':
                return <Image src={image_manager(6)} />;
            //Украина
            case 'UA':
                return <Image src={image_manager(6)} />;
            //Словакия
            case 'CN':
                return <Image src={image_manager(6)} />;
            //Эстония
            case 'ET':
                return <Image src={image_manager(6)} />;
            //Литва
            case 'LT':
                return <Image src={image_manager(6)} />;
            //Финляндия, Польша
            case 'PK':
                return <Image src={image_manager(6)} />;
            //Польша
            case 'PM':
                return <Image src={image_manager(6)} />;
            //Дания, Норвегия, Швеция, Исландия
            case 'QN':
                return <Image src={image_manager(6)} />;
            //Россия или Казахстан
            case 'RM':
                return <Image src={image_manager(6)} />;
            //Сербия
            case 'SE':
                return <Image src={image_manager(6)} />;
            //Германия, Бельгия, Люксембург, Нидерланды, Австрия, Франция, Швейцария, Монако
            case 'ZD':
                return <Image src={image_manager(6)} />;
            default:
                return (
                    <Image src={image_manager(5)} />
                )
        }
    }

    render() {

        return (
            <Views>
                <View navbarThrough>
                    <Navbar>
                        <NavLeft/>
                        <NavCenter>Комплектация</NavCenter>
                        <NavRight/>
                    </Navbar>
                    <Pages>
                        <Page>
                            <Card>
                                <CardHeader>
                                    Наушники.
                                </CardHeader>
                                <CardContent>
                                    {this.earpods()}
                                </CardContent>
                            </Card>
                            {this.adapter()}
                            <Card>
                                <CardHeader>
                                    Зарядное устройство.
                                </CardHeader>
                                <CardContent>
                                    {this.powerAdapter()}
                                </CardContent>
                            </Card>
                            {this.cable()}
                            <RatingCheck testN='Package'>
                                Комплектация iPhone совпадает с заявленной?
                            </RatingCheck>
                        </Page>
                    </Pages>
                </View>
            </Views>
        );
    }

}

const mapStateToProps = state => {
    return {
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