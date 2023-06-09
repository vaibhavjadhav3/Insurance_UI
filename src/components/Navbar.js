import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navbar = () => {
  return (
    <Nav tabs style={{ backgroundColor: '#f5f5f5', width: '100%', justifyContent: 'center', padding: '0.5rem 0',borderBlockColor :'black'}}>
      <NavItem>
        <NavLink href="/admin" style={{ color: 'black' }}>Home</NavLink>
      </NavItem>
      <NavItem >
        <NavLink href="/admin/policy" style={{ color: '#333' }}>Policy</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/admin/announcements" style={{ color: 'black' }}>Announcements</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" style={{ color: 'black' }}>Users</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/admin/hospital" style={{ color: 'black' }}>Hospital List</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/admin/logout"style={{ color: 'black' }}>Logout</NavLink>
        </NavItem>
    </Nav>
  );
}

export default Navbar;

