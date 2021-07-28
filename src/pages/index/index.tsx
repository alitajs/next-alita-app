import React, { FC, useEffect, useState, useRef } from 'react';
import { IndexModelState, ConnectProps, connect } from 'alita';
import { Page, Content, Header, Footer } from '@alita/react';
import { Button } from 'antd';
import styles from './index.less';

interface PageProps extends ConnectProps {
  index: IndexModelState;
}
const IndexPage: FC<PageProps> = ({ index, dispatch }) => {
  return (
    <div className={styles.center}>
      <input />
      <div style={{ height: '3000px' }}>很长的页面</div>
    </div>
  );
};

export default connect(({ index }: { index: IndexModelState }) => ({ index }))(IndexPage);
