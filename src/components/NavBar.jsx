import '../assets/css/NavBar.css';
import Button from './Button';

function NavBar({ setPage }) {
  function go(page) {
    setPage(page);
  }

  return (
    <nav className="navbar">
      <ul className='navbar-list'>
        <li className='navbar__item'>
          <Button onClick={() => go("Home")}>
            Home
          </Button>
        </li>
        <li className='navbar__item'>
          <Button onClick={() => go("About")}>
            About
          </Button>
        </li>
        <li className='navbar__item'>
          <Button onClick={() => go("Register")}>
            Register
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
