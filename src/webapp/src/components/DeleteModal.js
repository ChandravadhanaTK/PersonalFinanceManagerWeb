import React from 'react'
import PropTypes from 'prop-types'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

const DeleteModal = (props) => {
  return (
    <Modal isOpen={props.modalState} toggle={props.modalToggle}>
      <ModalHeader toggle={props.modalToggle}>Delete Income</ModalHeader>
      <ModalBody>
        Are you sure you want to delete?
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={props.modalAction}>Yes</Button>{' '}
        <Button color="secondary" onClick={props.modalToggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  )
}

DeleteModal.propTypes = {
  modalState: PropTypes.bool.isRequired,
  modalToggle: PropTypes.func.isRequired,
  modalAction: PropTypes.func.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalBody: PropTypes.string.isRequired
}

export default DeleteModal