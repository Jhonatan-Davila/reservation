import React from 'react'
import ReactDOM from 'react-dom'
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

const EventItem = ({event, el}) => {
  // This Event is wrapped in the default `el` which is a <a href=""/>
  // This cannot be used with React Router Link which uses it's own <a href=""/>
  ReactDOM.render(<EventContent event={event} />, el)
  return el
}

/*
There is a major necessity to be able to render a React component within the React <App/>.
*/
export const eventNewDiv = ({event, el, view}) => {
  // Creating `div` to replace the default <a href=""/> for event
  const eventDiv = document.createElement('div')
  // Get classes on the default `a.fc-timeline-event`
  const classes = Array.from(el.classList)
  // Add classes to the new `div`
  eventDiv.classList.add(...classes)

  ReactDOM.render(<EventContent event={event} />, eventDiv)

  return eventDiv
}

export default EventItem

const StyledBaseEvent = styled('div')`
  position: relative;
  height: 80px;
  z-index: 2;
`;

const StyledMeEvent = styled(StyledBaseEvent)`
  background-color: #6845a7;
`

const StyledOtherEvent = styled(StyledBaseEvent)`
  background-color: #2196f3;
`
