import React, { Component } from 'react';
import { connect } from 'react-redux'
import setCurrentiPhone from '../../actions/current-iphone'
import { Image, BaseTest } from '../../elements/index'
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";
import {iPhoneFl, iPhoneColor, iPhoneCountry, iPhoneModel} from '../../constant/index'
import {
    InputGroup, InputGroupAddon, Input,
    Button, Collapse, Card, CardBody,
    CardHeader, CardTitle
} from 'reactstrap'


export class About extends Component {

    constructor(props) {
        super(props);

        this.defaultState = {
            iPhone: '-',
            capacity: '-',
            color: '-',
            type: '-',
            country_of_purchase: '-',
            input_valid: null
        };

        this.state = {
            find_model_toggle: false,
            ...this.defaultState
        }
    }

    componentWillMount() {
        const {currentModelInfo} = this.props;

        if (currentModelInfo.firstLetter && currentModelInfo.code && currentModelInfo.code_country) {
            this.inputModel(`${currentModelInfo.firstLetter}${currentModelInfo.code}${currentModelInfo.code_country}/A`)
        }
    }

    getInfo(result) {
        const { setCurrentiPhone, _ } = this.props;

        let add_sate = {
            ...this.defaultState,
            input_valid: false
        };

        for (let iPhone in iPhoneModel) {
            for (let color in iPhoneModel[iPhone]) {
                for (let capacity in iPhoneModel[iPhone][color]) {
                    if (iPhoneModel[iPhone][color][capacity].indexOf(result.code) !== -1) {
                        add_sate = {
                            iPhone,
                            color: _(iPhoneColor[color]),
                            capacity,
                            type: _(iPhoneFl[result.firstLetter]) || "-",
                            country_of_purchase: _(iPhoneCountry[result.code_country]) || '-',
                            input_valid: true
                        };
                        setCurrentiPhone(iPhone, color, result);
                        break;
                    }
                }
            }
        }

        this.setState(add_sate)
    }

    getCleanModel(model) {
        return new Promise((resolve, reject) => {
            let model_split = model.split('/');
            if (model_split.length === 2 && (model_split[0].length === 7 || model_split[0].length === 6)
                && model_split[1].length > 0) {
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

    inputModel(rowModel) {

        this.getCleanModel(rowModel)
            .then(result => {
                this.getInfo(result);
            })
            .catch(() => {
                this.setState({...this.defaultState, input_valid: false})
            });
    }

    render() {

        const { iPhone, capacity, color, type, country_of_purchase, input_valid, find_model_toggle } = this.state,
            {image_manager, _} = this.props;

        return (
            <BaseTest
                test={'About'}
                Title={_('о_iphone')}
                rating_check
                rating_question={_('the_stated_information_is...')}
                block_rating={input_valid}
                block_testStatus={input_valid}
            >
                <InputGroup className='my-4'>
                    <InputGroupAddon addonType="prepend">
                        {`${_('enter_the_model')}:`}
                    </InputGroupAddon>
                    <Input
                        placeholder="MQ8M2B/A"
                        onChange={event => this.inputModel(event.target.value)}
                        valid={input_valid}
                    />
                </InputGroup>
                <Button
                    color="primary"
                    block
                    outline
                    onClick={() => this.setState({find_model_toggle: !find_model_toggle})}
                >
                    {_('where_to_find_the_model?')}
                </Button>
                <Collapse isOpen={find_model_toggle} className='mt-4'>
                    <Card>
                        <CardBody>
                            <p>{_('settings_->_master_->_abo...')}</p>
                            <Image {...image_manager(1)}/>
                            <p>{_('on_the_back_side_of_the_b...')}</p>
                            <Image {...image_manager(2)}/>
                        </CardBody>
                    </Card>
                </Collapse>
                {
                    input_valid === true ? [
                        [_('model'), iPhone],
                        [_('amount_of_memory'), capacity],
                        [_('the_color_of_the_device'), color],
                        [_('device_type'), type],
                        [_('the_country_of_purchase'), country_of_purchase]].map((item, i) => (
                            <Card key={i} className='mt-4'>
                                <CardHeader>{item[0]}:</CardHeader>
                                <CardBody>
                                    <CardTitle>
                                        {item[1]}
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        )) : null
                }
            </BaseTest>
        )
    }

}

const mapStateToProps = state => {
    return {
        _: getTranslate(state.locale),
        currentLanguage: getActiveLanguage(state.locale).code,
        currentModelInfo: state.current_iphone.model_info
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setCurrentiPhone: (model, color, model_info) => dispatch(setCurrentiPhone(model, color, model_info)),
        image_manager: number => dispatch(image_manager('About', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
