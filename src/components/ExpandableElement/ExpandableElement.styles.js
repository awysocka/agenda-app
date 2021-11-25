import styled from 'styled-components';
import { IoChevronDownOutline } from 'react-icons/io5';
import { IoChevronUpOutline } from 'react-icons/io5';

export const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
`;

export const ArrowDown = styled(IoChevronDownOutline)`
  transition: color 0.2s ease;
  @media ${({ theme }) => theme.device.touchable} {
    &:hover {
      color: ${({ theme }) => theme.colors.grey};
    }
  }
`;

export const ArrowUp = styled(IoChevronUpOutline)`
  transition: color 0.2s ease;
  @media ${({ theme }) => theme.device.touchable} {
    &:hover {
      color: ${({ theme }) => theme.colors.grey};
    }
  }
`;
