import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

ExpandableElement.propTypes = {
  header: PropTypes.node,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default ExpandableElement;
