import React, { useState } from 'react';
import { Link as LinkRoll } from 'react-scroll';
import { Link } from 'react-router-dom';
import Dropdown from './../Dropdown/Dropdown';
import styles from './styles.module.scss';
import DropdownIcon from './../Icon_dropdown/Icon';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);

  const [dropdown, setDropdown] = useState(false);

  const showMenu = () => {
    if (dropdown) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  return (
    <div className={styles.header}>
      <Link to="/" className={styles.header__logo}>
        <img src="assets/Images/Logo.png" alt="Logo" />
      </Link>
      <nav className={styles.navbar}>
        <ul
          className={
            click ? styles['navbar__menu--active'] : styles['navbar__menu']
          }
        >
          <li className={styles.navbar__item}>
            <LinkRoll
              to="/aboutUs"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              About us
            </LinkRoll>
          </li>

          <li className={styles.navbar__item}>
            <Link onClick={showMenu}>
              Academies
              <DropdownIcon />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className={styles.navbar__item}>
            <LinkRoll
              to="/media"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Media
            </LinkRoll>
          </li>

          <li className={styles.navbar__item}>
            <Link to="/register" onClick={closeMenu}>
              Register
            </Link>
          </li>
          <li className={styles.navbar__item}>
            <Link to="/questions" onClick={closeMenu}>
              Questions
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
