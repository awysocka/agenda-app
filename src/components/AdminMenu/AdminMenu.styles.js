import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.colors.white};
  width: 280px;
  height: 100vh;
  padding: 100px 15px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  z-index: 1;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 100px 36px;
  }
`;

export const Navigation = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 2.8rem;
  color: ${({ theme }) => theme.colors.darkGrey};

  li {
    padding: 30px 0;
  }

  li:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
  }
`;
