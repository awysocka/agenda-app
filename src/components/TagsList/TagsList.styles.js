import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 20px;

  @media ${({ theme }) => theme.device.tablet} {
    align-items: center;
  }
`;

export const StyledTagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const TagsListElement = styled.li`
  display: flex;
  align-items: center;
  margin-left: 10px;
  line-height: 1.6;
  min-width: 120px;

  @media ${({ theme }) => theme.device.tablet} {
    min-width: auto;
  }
`;

export const TagColor = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  margin: 0 5px;
`;
