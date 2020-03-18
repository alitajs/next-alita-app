import React, { FC, useEffect } from 'react';
import { ItemModelState, ConnectProps, connect } from 'alita';
import { Button } from 'antd-mobile';
import styles from './index.less';

interface PageProps extends ConnectProps {
  item: ItemModelState;
}

const ItemPage: FC<PageProps> = ({ item, dispatch, history }) => {
  return (
    <div className={styles.center}>
      模拟的详情页面，点击返回列表页，注意列表页是状态保持得哦
      <Button onClick={() => history.goBack()}>点击返回</Button>
    </div>
  );
};

export default connect(({ item }: { item: ItemModelState }) => ({ item }))(ItemPage);
