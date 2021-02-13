import React, {useState, useCallback} from 'react';
import AddReservation from './AddReservation';

const Reservation = () => {
  const [open, setOpen] = useState(false);

  const handleClickAdd = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <div className="reservation">
      <div className="reservation-top">
        <button className="add-reservation" onClick={handleClickAdd}>+Add Reservation</button>
      </div>
      <AddReservation
        open={open}
        onCloseModal={setOpen}
      />
    </div>
  )
}

export default Reservation;