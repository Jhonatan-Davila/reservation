import React, {useRef} from 'react';
import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';

import ResourceItem from './ResourceItem';

import resources from '../../../@fake-db/db/resources';
import events from '../../../@fake-db/db/events';

const ReservationContent = ({selDate}) => {
  const calendarRef = useRef(null);

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
        resourceLabelText={'Device/Time'}
        resourceAreaWidth={'15%'}
        resources={resources}
        resourceRender={ResourceItem}
        height={600}
        slotWidth={60}
        slotDuration={'00:30:00'}
        ref={calendarRef} 
      />
    </div>
  );
}

export default ReservationContent;