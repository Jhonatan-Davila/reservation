import React from "react";
import styled from "@emotion/styled";

const ResourceItem = ({ resource, el }) => {
  // extendedProps is used to access additional event properties.
  const content = (
    <ResourceItemDetail>
      <div>{resource._resource.title}</div>
      <div>{resource._resource.extendedProps.content}</div>
    </ResourceItemDetail>
  );
  return content
};

export default ResourceItem;

// This is only a wrapper so the component reads nicer in React Debugger. It is completely unnecessary.
const ResourceItemDetail = ({ ...props }) => (
  <StyledResourceItem>{props.children}</StyledResourceItem>
);

const StyledResourceItem = styled("div")`
  padding: 4px;
`;
