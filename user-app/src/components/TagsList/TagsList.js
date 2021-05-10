import PropTypes from 'prop-types';
import './TagsList.css';

const TagsList = ({ tagsTitle, tags }) => {
  return (
    <div className='tags-list-wrapper'>
      <p>{tagsTitle}:</p>
      <ul className='tags-list'>
        {tags.map((tag) => (
          <li key={tag.name} className='tags-list-element'>
            <span className='tag-color' style={{ backgroundColor: `${tag.color}` }}></span>
            <p>{tag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

Event.propTypes = {
  tagsTitle: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TagsList;
