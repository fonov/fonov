import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Image} from '../../elements/index'
import { RatingCheck } from '../rating/index'
import {replace} from "react-router-redux";
import URLS from "../../constant/urls";
import {
    View, Navbar, Pages, Page, Views,
    NavCenter,Card, CardContent,
    NavLeft, NavRight, CardHeader
} from 'framework7-react';
import image_manager from "../../actions/image-manager";


class WaterSensor extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    render() {

        const { currentModel, image_manager } = this.props;

        return (
            <Views>
                <View navbarThrough>
                    <Navbar>
                        <NavLeft/>
                        <NavCenter>Попадание влаги в {currentModel}</NavCenter>
                        <NavRight/>
                    </Navbar>
                    <Pages>
                        <Page>
                            <Card>
                                <CardHeader>
                                    Влага оказывает разрушительное воздействие на элементы iPhone. Чтобы определить было ли попадание влаги, проверьте индикатор влаги согласно рисунку. Если индикатор красного цвета, значит телефон был подвергнут попаданию влаги.
                                </CardHeader>
                                <CardContent>
                                    <Image src={image_manager(1)} />
                                </CardContent>
                            </Card>
                            <RatingCheck testN='WaterSensor'>
                                {currentModel} был подвергнут попаданию влаги?
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
        currentModel: state.current_iphone.model
    }
};

const mapDispatchToProps = dispatch => {
    return {
        replace: path =>  dispatch(replace(path)),
        image_manager: number => dispatch(image_manager('WaterSensor', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WaterSensor);
