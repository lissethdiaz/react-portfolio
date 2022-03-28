import React from 'react';
import Nav from '../Nav';

function Header(props) {
  const { currentTab, setCurrentTab } = props;
  return (
    <header>
      <div>
        <h1>Lisseth Diaz</h1>
      </div>
      <Nav>currentTab={currentTab} setCurrentTab={setCurrentTab}</Nav>
    </header>
  )
}

export default Header;