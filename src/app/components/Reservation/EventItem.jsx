import React from 'react'
import styled from '@emotion/styled'

// This is only a wrapper so the component reads nicer in React Debugger. It is completely unnecessary.
export const EventOtherDetail = ({...props}) => (
  <StyledOtherEvent>{props.children}</StyledOtherEvent>
)

export const EventMeDetail = ({...props}) => (
  <StyledMeEvent>{props.children}</StyledMeEvent>
)

export const EventContent = ({event}) => {
  // extendedProps is used to access additional event properties.
  return (
    <>
      {
        event._def.extendedProps.userId === 1
          ? <EventMeDetail />
          : <EventOtherDetail />
      }
    </>
  )
}

export default EventContent;

const StyledBaseEvent = styled('div')`
  position: relative;
  height: 80px;
  z-index: 2;
`;

const StyledMeEvent = styled(StyledBaseEvent)`
  background-color: #6845a7;
`;

const StyledOtherEvent = styled(StyledBaseEvent)`
  background-color: #2196f3;
`;
