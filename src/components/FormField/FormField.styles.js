import styled from 'styled-components';

export const Label = styled.label`
  margin: 10px 0 3px;
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.darkGrey};
  padding: ${({ type }) => (type === 'color' ? '0px' : '10px 8px')};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 5px;

  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const Textarea = styled.textarea`
  max-width: 100%;
  color: ${({ theme }) => theme.colors.darkGrey};
  padding: 10px 8px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 5px;

  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.primaryLight};
  }
`;
