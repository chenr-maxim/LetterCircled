import React from 'react';

import '../css/header.scss';
import { GoPlus } from 'react-icons/go';

const Header = () => {
  


  return (
    <div className="header_container">
      <div className="header-info">
        <h3>LetterCircld</h3>
        <div className="nav_menu_container">
          <ul>
            <li>
              Login
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
            <li>
              <div className="log-movie-button">
                <GoPlus />
                LOG
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;