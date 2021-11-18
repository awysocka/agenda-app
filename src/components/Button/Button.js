import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 5px;
  padding: 5px 10px;
  transition: 0.3s all ease;

  @media ${({ theme }) => theme.device.touchable} {
    &:hover {
      background-color: ${({ theme }) => theme.colors.grey};
      border: 1px solid ${({ theme }) => theme.colors.grey};
    }
  }
`;

const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
