import React from 'react';
import { Header, HeaderLink, HeaderNav } from '../../style/HeaderStyle/HeaderStyle';

const AdminHeader = () => {
  return (
    <Header>
      <HeaderNav>
        <li>
          <HeaderLink to="/admin">Admin</HeaderLink>
        </li>
        <li>
          <HeaderLink to="/shop">Shop</HeaderLink>
        </li>
      </HeaderNav>
    </Header>
  )
}

export default AdminHeader;