import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {hide_modal} from '../actions/modal'


class FNModal extends Component {

    render() {

        const {modal, hide_modal} = this.props;

        return (
            <Modal isOpen={modal.show} toggle={hide_modal}>
                <ModalHeader toggle={hide_modal}>{modal.title}</ModalHeader>
                <ModalBody>{modal.text}</ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={hide_modal}>Закрыть</Button>
                </ModalFooter>
            </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(FNModal);