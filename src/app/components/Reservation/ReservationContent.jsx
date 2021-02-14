import React, {useRef} from 'react';
import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';

import ResourceItem from './ResourceItem';
import EventItem, {eventNewDiv} from './EventItem'

const ReservationContent = ({selDate, resources, events, calendarRef}) => {
  return (
    <div className="reservation-content">
      <FullCalendar
        locale='en'
        plugins={[ resourceTimelinePlugin ]}
        defaultView='resourceTimeline'
        defaultDate={selDate}
        schedulerLicenseKey={'GPL-My-Project-Is-Open-Source'}
        header={{ left: '', right: '' }}
        events={events}
        eventRender={eventNewDiv}
        resourceLabelText={'Device/Time'}
        resourceAreaWidth={'15%'}
        resources={resources}
        resourceRender={ResourceItem}
        height={703}
        slotWidth={60}
        slotDuration={'00:30:00'}
        ref={calendarRef} 
      />
    </div>
  );
}

export default ReservationContent;