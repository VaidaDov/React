import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module';
import { useSelector, useDispatch } from 'react-redux';
import { changeSidebarVisiblity } from '../../features/sidebarSlice';

const cn = classNames.bind(styles);

// Written code inside this component is an example of how redux toolkit works
// Will be removed after first story is started on this component
const AboutUsPage = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((state) => state.sidebar);

  return (
    <div>
      <p>AboutUsPage</p>
      <p>{`Sidebar is ${isSidebarOpen ? 'open' : 'closed'}`}</p>
      <button
        type="button"
        onClick={() => dispatch(changeSidebarVisiblity(!isSidebarOpen))}
      >
        click me
      </button>
    </div>
  );
};

export default AboutUsPage;
