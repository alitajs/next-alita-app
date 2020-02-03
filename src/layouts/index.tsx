import React from 'react';
import styles from './index.less';

const BasicLayout: React.FC = ({ children }) => {
  return (
    <div className={styles.normal}>
      <h1>Yay! Welcome to Alita! </h1>
      {children}
    </div>
  );
};

export default BasicLayout;
