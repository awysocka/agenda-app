import PropTypes from 'prop-types';
import { StyledBurgerMenu } from './BurgerMenu.styles';

const BurgerMenu = ({ open, handleClick }) => {
  return (
    <StyledBurgerMenu open={open} onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </StyledBurgerMenu>
  );
};

BurgerMenu.propTypes = {
  open: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default BurgerMenu;
