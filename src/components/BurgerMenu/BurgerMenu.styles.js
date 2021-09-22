import styled from 'styled-components';

export const StyledBurgerMenu = styled.button`
  position: absolute;
  top: 100px;
  right: -60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 60px;
  background: ${({ theme }) => theme.colors.white};
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  padding: 10px;
  z-index: 10;

  span {
    width: 40px;
    height: 5px;
    background: ${({ theme }) => theme.colors.darkGrey};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
