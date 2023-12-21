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
          <NavLink to="/" className="Active">Home</NavLink>
          <NavLink to="/about" className="active">About</NavLink>
          <img src={CodeSymbol} className='codeSymbol' alt='Code Symbol' />
          {/* <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink> */}
          <NavLink to="/contact" className="active">Contact</NavLink>
          <NavLink to="/portfolio" className="active">Portfolio</NavLink>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavBar;
