import React from 'react';
import { academiesDropdown } from '~/constants/MenuItems';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const Dropdown = () => {
  return (
    <div className={styles.dropdown}>
      <ul className={styles.dropdown__menu}>
        {academiesDropdown.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.path}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
