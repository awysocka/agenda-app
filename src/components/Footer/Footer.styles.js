import styled from 'styled-components';

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 60px;
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  z-index: 2;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  white-space: nowrap;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.grey};
  }
`;
