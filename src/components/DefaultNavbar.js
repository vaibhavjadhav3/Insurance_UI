import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const DefaultNavbar = () => {
  return (
    <Nav tabs style={{ backgroundColor: '#f5f5f5', width: '100%', justifyContent: 'center', padding: '0.5rem 0'  }}>
      <NavItem>
        <NavLink href="/" style={{ color: 'black' }}>Home</NavLink>
      </NavItem>
      {/* <NavItem >
        <NavLink href="/policy" style={{ color: '#333' }}>Policy</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/announcements" style={{ color: 'black' }}>Announcements</NavLink>
      </NavItem>
      
      <NavItem>
        <NavLink href="/hospital" style={{ color: 'black' }}>Hospital List</NavLink>
      </NavItem> */}
      <NavItem>
        <NavLink href="/login" style={{ color: 'black' }}>Login</NavLink>
      </NavItem>
    </Nav>
  );
}

export default DefaultNavbar;

