import styled from 'styled-components';

export const Form = styled.form`
  background: ${({ theme }) => theme.colors.white};
  margin: 20px auto;
  padding: 20px 40px;
  border-radius: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SubmitButton = styled.input`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  font-size: 2rem;
  padding: 8px 30px;
  margin: 20px 0;
  border: none;
  transition: all 0.2s ease;

  @media ${({ theme }) => theme.device.touchable} {
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.primaryDark};
    }
  }

  @media ${({ theme }) => theme.device.tablet} {
    align-self: flex-end;
  }
`;

export const Main = styled.main`
  max-width: 1024px;
  margin: 0 auto 40px;
  padding: 15px 10px;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 15px 36px;
  }
`;

export const Error = styled.p`
  color: red;
`;
