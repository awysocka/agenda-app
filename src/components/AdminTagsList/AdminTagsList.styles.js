import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 330px;
  background: ${({ theme }) => theme.colors.white};
  padding: 20px 40px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const ListElement = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  color: ${({ theme }) => theme.colors.darkGrey};

  h3 {
    font-weight: 400;
    margin-right: 10px;
    position: relative;
    margin-left: 30px;
    font-size: 1.8rem;

    ::before {
      background: ${(props) => props.tagColor};
      content: '';
      position: absolute;
      top: 0;
      left: -30px;
      height: 20px;
      width: 20px;
      border-radius: 5px;
    }
  }

  &:not(:last-child) {
    margin-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
`;

export const Icon = styled.span`
  margin-left: 15px;
  padding-left: 5px;
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.grey};
  transition: color 0.3s ease;

  @media ${({ theme }) => theme.device.touchable} {
    &:hover {
      color: ${({ theme }) => theme.colors.darkGrey};
      cursor: pointer;
    }
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
  padding: 6px 12px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  transition: background 0.3s ease;

  @media ${({ theme }) => theme.device.touchable} {
    &:hover {
      background: ${({ theme }) => theme.colors.primaryDark};
    }
  }
`;
