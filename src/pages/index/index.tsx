import React, { FC } from 'react';
import { IndexModelState, ConnectProps, connect } from 'alita';
import styles from './index.less';

interface PageProps extends ConnectProps {
  index: IndexModelState;
}

const IndexPage: FC<PageProps> = ({ index, dispatch }) => {
  // 这里发起了初始化请求
  // useEffect(() => {
  //   dispatch!({
  //     type: 'index/query',
  //   });
  //   return () => {
  //     // 这里写一些需要消除副作用的代码
  //     // 如: 声明周期中写在 componentWillUnmount
  //   };
  // }, []);
  // 注意，上面这里写空数组，表示初始化，如果需要监听某个字段变化再发起请求，可以在这里写明
  // const { name } = index;
  return (
    <div className={styles.center}>
      Hello Alita
      <br />
      欢迎使用 Alita ，请随意在下方 Tabs 组件中切换页面，
      <br />
      其中列表页包含了状态保持的特性，你可以切换页面体验。
      <br />
      并在点击列表页任意Item 之后，解除一次状态保持。
    </div>
  );
};

export default connect(({ index }: { index: IndexModelState }) => ({ index }))(IndexPage);
