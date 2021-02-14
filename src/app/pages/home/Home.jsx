import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import TabGroup from '../../components/TabGroup';
import Device from '../../components/Device/Device';
import Reservation from '../../components/Reservation/Reservation';
import * as actions from '../../store/actions';

const Home = () => {
  const [isReservation, setReservation] = useState(true);
  
  const resources = useSelector(state => state.resource);
  const events = useSelector(state => state.event);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getEvents());
    dispatch(actions.getResources());
  }, []);

  return (
    <div className="home">
      <TabGroup isReservation={isReservation} setReservation={setReservation} />
      { 
        !isReservation 
          ? <Device />
          : <Reservation resources={resources} events={events}/>
      }
    </div>
  );
}

export default Home;