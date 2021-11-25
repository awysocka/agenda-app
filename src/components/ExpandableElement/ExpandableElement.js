import React, { useState } from 'react';
import { Button, ArrowDown, ArrowUp } from './ExpandableElement.styles';

const ExpandableElement = ({ header, children }) => {
  const [active, setActive] = useState(false);

  const toggleDetails = () => {
    setActive(!active);
  };
  return (
    <>
      <Button onClick={toggleDetails}>
        {header}
        {active ? <ArrowUp /> : <ArrowDown />}
      </Button>
      {active && <div>{children}</div>}
    </>
  );
};

export default ExpandableElement;
