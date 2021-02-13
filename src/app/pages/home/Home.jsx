import React, {useState} from 'react';

import TabGroup from '../../components/TabGroup';
import Device from '../../components/Device/Device';
import Reservation from '../../components/Reservation/Reservation';

const Home = () => {
  const [isReservation, setReservation] = useState(true);

  return (
    <div className="home">
      <TabGroup isReservation={isReservation} setReservation={setReservation} />
      { 
        !isReservation 
          ? <Device />
          : <Reservation />
      }
    </div>
  );
}

export default Home;