import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";

const ResourceItem = ({ resource, el }) => {
  // extendedProps is used to access additional event properties.
  const content = (
    <ResourceItemDetail>
      <div>{resource._resource.title}</div>
      <div>{resource._resource.extendedProps.content}</div>
    </ResourceItemDetail>
  );
  ReactDOM.render(content, el);
  return el;
};

export default ResourceItem;

// This is only a wrapper so the component reads nicer in React Debugger. It is completely unnecessary.
const ResourceItemDetail = ({ ...props }) => (
  <StyledResourceItem>{props.children}</StyledResourceItem>
);

const StyledResourceItem = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: normal;
  padding: 4px;

  img {
    height: 44px;
    margin-right: 4px;
  }
`;
