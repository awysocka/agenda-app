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

export default BurgerMenu;
