import PropTypes from 'prop-types';
import { Wrapper, Navigation, StyledLink } from './AdminMenu.styles';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const AdminMenu = ({ open, setOpen }) => {
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Wrapper open={open}>
        <BurgerMenu open={open} setOpen={setOpen} handleClick={handleClick} />
        <Navigation>
          <ul>
            <li>
              <StyledLink to='/admin'>Events list</StyledLink>
            </li>
            <li>
              <StyledLink to='/admin/tags'>Tags</StyledLink>
            </li>
            <li>
              <StyledLink to='/admin/config'>Configuration</StyledLink>
            </li>
          </ul>
        </Navigation>
      </Wrapper>
    </>
  );
};

AdminMenu.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default AdminMenu;
