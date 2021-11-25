import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 15px;
  z-index: 2;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 15px 36px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.4rem;
  font-weight: 500;
`;
