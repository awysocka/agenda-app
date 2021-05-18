import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 20px;

  @media ${({ theme }) => theme.device.tablet} {
    align-items: center;
  }
`;

const StyledTagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const TagsListElement = styled.li`
  display: flex;
  align-items: center;
  margin-left: 10px;
  line-height: 1.6;
  min-width: 120px;

  @media ${({ theme }) => theme.device.tablet} {
    min-width: auto;
  }
`;

const TagColor = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  margin: 0 5px;
`;

const TagsList = ({ tagsTitle, tags }) => {
  return (
    <Wrapper>
      <p>{tagsTitle}:</p>
      <StyledTagsList>
        {tags.map((tag) => (
          <TagsListElement key={tag.name}>
            <TagColor style={{ backgroundColor: `${tag.color}` }}></TagColor>
            <p>{tag.name}</p>
          </TagsListElement>
        ))}
      </StyledTagsList>
    </Wrapper>
  );
};

Event.propTypes = {
  tagsTitle: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TagsList;
