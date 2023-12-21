import '../Shared/NavBar.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import CodeSymbol from '../Shared/Media/code.png';

function NavBar() 
{
  return (
    <Container className='navbar'>
      <Navbar expand="lg">
        <Container>
          <NavLink to="/" className="link">Home</NavLink>
          <NavLink to="/about" className="link">About</NavLink>
          <img src={CodeSymbol} className='codeSymbol' alt='Self closing HTML Tag' />
          <NavLink to="/contact" className="link">Contact</NavLink>
          <NavLink to="/portfolio" className="link">Work</NavLink>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavBar;
