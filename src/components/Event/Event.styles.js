import styled from 'styled-components';

export const StyledEventElement = styled.li`
  background: ${({ theme }) => theme.colors.white};
  min-width: 220px;
  flex: 1 1 48%;
  margin: 0 5px 10px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  padding: ${(props) => (props.tagColor ? '10px 20px 10px 44px' : '10px 20px')};

  ::before {
    background: ${(props) => props.tagColor};
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 100%;
    border-radius: 5px 0 0 5px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.darkGrey};
  line-height: 1.6;
`;

export const Paragraph = styled.p`
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'capitalize')};
  font-weight: ${(props) => props.bold && '700'};
  color: ${(props) => props.light && props.theme.colors.grey};
  line-height: 1.4;
`;

export const Description = styled(Paragraph)`
  margin-bottom: 20px;
`;

export const DetailsLabel = styled.span`
  font-weight: 700;
`;

export const DividerLine = styled.hr`
  border: none;
  border-top: 2px solid ${({ theme }) => theme.colors.lightGrey};
  margin: 10px 0 20px;
`;
