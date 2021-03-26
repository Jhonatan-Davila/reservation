import React, {useCallback} from 'react';

const TabGroup = ({isReservation, setReservation}) => {
  const handleClick = useCallback((e) => {
    if(e.target.value === 'Reservations')
      setReservation(true)
    else
      setReservation(false)
  }, []);

  return (
    <div className="tab-group">
      <button className={isReservation ? 'tab-link' : 'tab-link active'} value="Devices" onClick={handleClick}>Devices</button>
      <button className={!isReservation ? 'tab-link' : 'tab-link active'} value="Reservations" onClick={handleClick}>Reservations</button>
    </div>
  )
}

export default TabGroup;