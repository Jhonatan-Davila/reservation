import React, { useState, useCallback, useMemo } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Modal, ModalBody} from 'react-bootstrap';
import { DropdownList, DateTimePicker } from 'react-widgets';

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

  const handleDevice = useCallback((value) => {
    setDeviceName(value);
  }, []);

  const handleStartTime = useCallback((value) => {
    setStartTime(new Date(value));
  }, []);

  const handleEndTime = useCallback((value) => {
    setEndTime(new Date(value));
  }, []);

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
          <DropdownList
            data={deviceNames}
            defaultValue={deviceNames[0]}
            onChange={value => handleDevice(value)}
          />
        </div>
        <div className="item-container">
          <span>Start Time</span>
          <DateTimePicker
            value={startTime}
            onChange={value => handleStartTime(value)}
          />
        </div>
        <div className="item-container">
          <span>End Time</span>
          <DateTimePicker
            value={endTime}
            onChange={value => handleEndTime(value)}
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