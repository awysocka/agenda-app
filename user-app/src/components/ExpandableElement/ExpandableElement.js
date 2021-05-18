import React, { useState } from 'react';
import styled from 'styled-components';
import { IoChevronDownOutline } from 'react-icons/io5';
import { IoChevronUpOutline } from 'react-icons/io5';

const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
`;

const ArrowDown = styled(IoChevronDownOutline)`
  @media ${({ theme }) => theme.device.touchable} {
    &:hover {
      color: ${({ theme }) => theme.colors.grey};
    }
  }
`;

const ArrowUp = styled(IoChevronUpOutline)`
  @media ${({ theme }) => theme.device.touchable} {
    &:hover {
      color: ${({ theme }) => theme.colors.grey};
    }
  }
`;

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
