import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navbar = () => {
  return (
    <Nav tabs style={{ backgroundColor: '#f5f5f5', width: '100%', justifyContent: 'center', padding: '0.5rem 0'  }}>
      <NavItem>
        <NavLink href="/" style={{ color: 'black' }}>Home</NavLink>
      </NavItem>
      <NavItem >
        <NavLink href="/policy" style={{ color: '#333' }}>Policy</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/announcements" style={{ color: 'black' }}>Announcements</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" style={{ color: 'black' }}>Users</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/hospital" style={{ color: '' }}>Hospital List</NavLink>
      </NavItem>
    </Nav>
  );
}

export default Navbar;

