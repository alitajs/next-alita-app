import React, { FC, useState } from 'react';
import { IndexModelState, ConnectProps, connect } from 'alita';
import { Button } from 'antd-mobile';
import styles from './index.less';

interface PageProps extends ConnectProps {
  index: IndexModelState;
}

const IndexPage: FC<PageProps> = ({ index, dispatch }) => {
  const [showImg, setShowImg] = useState('');
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

  return (
    <div className={styles.center}>
      <Button
        onClick={() => {
          window.alita.device.platform().then((data) => console.log(data));
        }}
      >
        获取平台
      </Button>
      <Button
        onClick={() => {
          window.alita.media.chooseImage().then((data) => {
            console.log(data);
            setShowImg(data.files[0].path);
          });
        }}
      >
        获取图片
      </Button>
      <img src={showImg} style={{ width: '100%' }} />
      <p className={styles.title}>Hello Alita003</p>
      <p>
        1、列表页包含了<span>状态保持</span>的特性，你可以切换页面体验。 并在点击列表页任意 Item
        之后，解除一次状态保持
      </p>
      <p>
        2、列表页的数据，是通过<span> 开发mock </span>服务提供的
      </p>
      <p>
        3、列表页的下拉刷新，触底加载更多的逻辑是<span>自动完成</span>的
      </p>
      <p>
        4、页面的头部，做了<span>iphone X </span>适配
      </p>
      <p>
        5、设置页面的头部，是动态设置的，在<span>页面级</span>设置哦。
      </p>
      <p className={styles.listItem}>欢迎使用 Alita，请随意在下方 Tabs 组件中切换页面</p>
    </div>
  );
};

export default connect(({ index }: { index: IndexModelState }) => ({ index }))(IndexPage);
