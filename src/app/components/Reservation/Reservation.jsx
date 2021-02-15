import React, {useState, useCallback, useEffect} from 'react';

import AddReservationModal from './AddReservationModal';
import ReservationContent from './ReservationContent';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
import 'primeflex/primeflex.css';

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

  useEffect(() => {
    addLocale('es', {
      firstDayOfWeek: 1,
      dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
      dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
      dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
      monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
      monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
      today: 'Hoy',
      clear: 'Claro'
    });

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
            onChange={e => setSelDate(e.value)}
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