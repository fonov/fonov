import React, {Component} from 'react'
import {Base} from './index'
import {Navbar, NavbarBrand} from 'reactstrap'
import {APP_NAME} from '../constant/config'


class BasePage extends Component {

    render () {

        const {children, Title = APP_NAME} = this.props;

        return (
            <Base
                nav={(
                    <Navbar light color='light'>
                        <NavbarBrand>
                            {Title}
                        </NavbarBrand>
                    </Navbar>
                )}
            >
                {children}
            </Base>
        )
    }
}

export default BasePage