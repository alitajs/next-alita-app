import React, { FC, useEffect } from 'react';
import { IndexModelState, ConnectProps, connect } from 'umi';
import styles from './index.less';

interface PageProps extends ConnectProps {
  index: IndexModelState;
}

const IndexPage: FC<PageProps> = ({ index, dispatch }) => {
  // 这里发起了初始化请求
  useEffect(() => {
    dispatch?.({
      type: 'index/query',
    });
    return () => {
      // 这里写一些需要消除副作用的代码
      // 如: 声明周期中写在 componentWillUnmount
    };
  }, []);
  // 注意，上面这里写空数组，表示初始化，如果需要监听某个字段变化再发起请求，可以在这里写明
  const { name } = index;
  return <div className={styles.center}>Hello {name}</div>;
};

export default connect(({ index }: { index: IndexModelState }) => ({ index }))(IndexPage);
