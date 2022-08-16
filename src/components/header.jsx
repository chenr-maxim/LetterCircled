import React from 'react';

import '../css/header.scss';

const Header = () => {
  return (
    <div className="header_container">
      <h3>LetterCircld</h3>
      <div className="nav_menu_container">
        <ul>
          <li>
            Account
          </li>
          <li>
            Films
          </li>
          <li>
            Lists
          </li>
          <li>
            Members
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;