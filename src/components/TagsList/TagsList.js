import PropTypes from 'prop-types';
import { Wrapper, StyledTagsList, TagColor, TagsListElement } from './TagsList.styles';

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
