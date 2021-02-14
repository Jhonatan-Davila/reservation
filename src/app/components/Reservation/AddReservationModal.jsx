import React, { useCallback } from 'react';
import {Modal, ModalBody} from 'react-bootstrap';
import { DropdownList } from 'react-widgets';

const AddReservationModal = ({open, onCloseModal}) => {

  const handleClose = useCallback(() => {
    onCloseModal(false);
  }, []);

  return (
    <Modal
      show={open}
      onHide={handleClose}
      dialogClassName="modal-50w"
      aria-labelledby="add-reservation-modal"
      centered
    >
      <ModalBody>
        <div className="item-container">
          <span>Device</span>
          <DropdownList />
        </div>
        <div className="item-container">
          <span>Start Time</span>
          <DropdownList />
        </div>
        <div className="item-container">
          <span>End Time</span>
          <DropdownList />
        </div>
        <button className="btn-create">Create</button>
      </ModalBody>
    </Modal>
  );
}

export default AddReservationModal;