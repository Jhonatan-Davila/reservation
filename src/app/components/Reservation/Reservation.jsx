import React, {useState, useCallback, useEffect} from 'react';

import AddReservationModal from './AddReservationModal';
import ReservationContent from './ReservationContent';
import { Calendar } from 'primereact/calendar';

const Reservation = ({resources, events}) => {
  const [open, setOpen] = useState(false);
  const [selDate, setSelDate] = useState(new Date());
  const calendarRef = React.createRef();

  const handleClickAdd = useCallback(() => {
    setOpen(true);
  }, []);

  const setPrevDate = useCallback(() => {
    setSelDate(selDate.decDays(1));
    calendarRef.current.getApi().prev();
  }, [selDate, calendarRef]);

  const setNextDate = useCallback(() => {
    setSelDate(selDate.incDays(1));
    calendarRef.current.getApi().next();
  }, [selDate, calendarRef]);

  const handleSelDate = useCallback((value) => {
    setSelDate(value);
    calendarRef.current.getApi().gotoDate(value);
  }, [calendarRef]);

  useEffect(() => {
    Date.prototype.incDays = function(days) {
      let date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    }
    Date.prototype.decDays = function(days) {
      let date = new Date(this.valueOf());
      date.setDate(date.getDate() - days);
      return date;
    }
  }, []);

  return (
    <div className="reservation">
      <div className="reservation-top">
        <div className="select-date">
          <i className="fas fa-chevron-left" onClick={setPrevDate}></i>
          <Calendar
            value={selDate}
            onChange={e => handleSelDate(e.value)}
            readOnlyInput
          />
          <i className="fas fa-chevron-right" onClick={setNextDate}></i>
        </div>
        <button className="btn-add" onClick={handleClickAdd}>+Add Reservation</button>
      </div>
      <ReservationContent 
        selDate={selDate} 
        resources={resources}
        events={events}
        calendarRef={calendarRef}
      />
      <div className="reservation-bottom">
        <div className="reserve-category">
          <div className="reserve-category-circle other" />
          <div>Reserved by others</div>
        </div> | 
        <div className="reserve-category">
          <div className="reserve-category-circle me" />
          <div>Reserved by me</div>
        </div>
      </div>
      <AddReservationModal
        open={open}
        onCloseModal={setOpen}
      />
    </div>
  )
}

export default Reservation;