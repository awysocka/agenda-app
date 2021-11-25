import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  max-width: 1024px;
  margin: 170px auto 90px;
  padding: 0 10px;
  z-index: -1;
  width: 100%;
  z-index: 0;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 36px;
  }
`;

export const DarkerLayer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
  transition: opacity 0.3s linear 0.3s;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? '1' : '0')};
`;
