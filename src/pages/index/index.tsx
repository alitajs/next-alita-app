import { ConnectProps, IndexModelState } from '@/models/connect';
import React, { Component } from 'react';

import { connect } from 'dva';
import styles from './index.less';

interface PageProps extends ConnectProps {
  index: IndexModelState;
}

interface PageState {}

@connect(({ index }: { index: IndexModelState }) => ({ index }))
class Page extends Component<PageProps, PageState> {
  state: PageState = {};
  render() {
    const {
      index: { name },
    } = this.props;
    return <div className={styles.userCenter}>Hello {name}</div>;
  }
}

export default Page;
