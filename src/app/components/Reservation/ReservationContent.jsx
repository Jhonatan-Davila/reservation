import React from 'react';
import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';

import ResourceItem from './ResourceItem';
import EventContent from './EventItem'

const ReservationContent = ({selDate, resources, events, calendarRef}) => {
  console.log(selDate.getFullYear(), selDate.getMonth(), selDate.getDate());
  return (
    <div className="reservation-content">
      <FullCalendar
        locale='en'
        plugins={[ resourceTimelinePlugin ]}
        initialView='resourceTimeline'
        initialDate={new Date(selDate.getFullYear(), selDate.getMonth(), selDate.getDate())}
        schedulerLicenseKey={'Reservation-Project'}
        headerToolbar={false}
        events={events}
        eventContent={EventContent}
        resourceAreaHeaderContent={'Device/Time'}
        resourceAreaWidth={'150px'}
        resources={resources}
        resourceLabelContent={ResourceItem}
        height={615}
        slotMinWidth={60}
        slotDuration={'00:30:00'}
        ref={calendarRef} 
      />
    </div>
  );
}

export default ReservationContent;