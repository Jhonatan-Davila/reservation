import React, {useState, useCallback, useEffect} from 'react';

import AddReservationModal from './AddReservationModal';
import ReservationContent from './ReservationContent';
import {getLongDateFormat, handleDays} from '../../../utils/commonFunc';

const Reservation = () => {
  const [open, setOpen] = useState(false);
  const [selDate, setSelDate] = useState(new Date());

  const handleClickAdd = useCallback(() => {
    setOpen(true);
  }, []);

  const setPrevDate = useCallback(() => {
    setSelDate(selDate.decDays(1));
  }, [selDate]);

  const setNextDate = useCallback(() => {
    setSelDate(selDate.incDays(1));
  }, [selDate]);

  useEffect(() => {
    Date.prototype.incDays = function(days) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    }
    Date.prototype.decDays = function(days) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() - days);
      return date;
    }
  }, []);

  return (
    <div className="reservation">
      <div className="reservation-top">
        <div className="select-date">
          <i className="fas fa-chevron-left" onClick={setPrevDate}></i>
          <span className="label-date">{getLongDateFormat(selDate)}</span>
          <i className="fas fa-chevron-right" onClick={setNextDate}></i>
        </div>
        <button className="btn-add" onClick={handleClickAdd}>+Add Reservation</button>
      </div>
      <ReservationContent selDate={selDate}/>
      <AddReservationModal
        open={open}
        onCloseModal={setOpen}
      />
    </div>
  )
}

export default Reservation;