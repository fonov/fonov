import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Modal as BaseModal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {hide_modal} from '../actions/modal'


class Modal extends Component {

    render() {

        const {modal, hide_modal} = this.props;

        return (
            <BaseModal isOpen={modal.show} toggle={hide_modal}>
                <ModalHeader toggle={hide_modal}>{modal.title}</ModalHeader>
                <ModalBody>{modal.text}</ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={hide_modal}>Закрыть</Button>
                </ModalFooter>
            </BaseModal>
        );
    }
}

const mapStateToProps = state => {
    return {
        modal: state.modal
    }
};

const mapDispatchToProps = dispatch => {
    return {
        hide_modal: () => dispatch(hide_modal())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);