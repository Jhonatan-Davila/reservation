import React, { useState, useCallback, useMemo } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Modal, ModalBody} from 'react-bootstrap';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';

import * as actions from '../../store/actions';

const AddReservationModal = ({open, onCloseModal}) => {
  const [deviceName, setDeviceName] = useState('');
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const resources = useSelector(state => state.resource);
  const dispatch = useDispatch();

  const handleClose = useCallback(() => {
    onCloseModal(false);
  }, []);

  const deviceNames = useMemo(() => {
    let result = [];
    resources.forEach(resource => {
      result.push(resource.title);
    });
    return result;
  }, [resources]);

  const handleCreate = useCallback(() => {
    dispatch(actions.addEvent({
      useId: 1,
      resourceId: deviceNames.indexOf(deviceName) + 1,
      start: startTime,
      end: endTime
    }));
    handleClose();
  }, [deviceName, startTime, endTime]);

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
          <Dropdown
            options={deviceNames}
            value={deviceName}
            onChange={value => setDeviceName(value)}
          />
        </div>
        <div className="item-container">
          <span>Start Time</span>
          <Calendar
            value={startTime}
            onChange={value => setStartTime(value)}
          />
        </div>
        <div className="item-container">
          <span>End Time</span>
          <Calendar
            value={endTime}
            onChange={value => setEndTime(value)}
          />
        </div>
        <button 
          className="btn-create"
          onClick={handleCreate}
        >Create</button>
      </ModalBody>
    </Modal>
  );
}

export default AddReservationModal;