import '../Shared/NavBar.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

import CodeSymbol from '../Shared/Media/code.png';

function NavBar() 
{
  return (
    <Container className='navbar'>
      <Navbar expand="lg">
        <Container>
          {/* <NavLink to="/home" className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink> */}
          <NavLink to="/" className="Active link">Home</NavLink>
          <NavLink to="/about" className="active link">About</NavLink>
          <img src={CodeSymbol} className='codeSymbol' alt='Self closing HTML Tag' />
          {/* <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink> */}
          <NavLink to="/contact" className="active link">Contact</NavLink>
          <NavLink to="/portfolio" className="active link">Work</NavLink>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavBar;
