import { Wrapper, Navigation } from './AdminMenu.styles';
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
            <li>Events list</li>
            <li>Tags</li>
            <li>Configuration</li>
          </ul>
        </Navigation>
      </Wrapper>
    </>
  );
};

export default AdminMenu;
