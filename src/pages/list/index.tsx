import React, { FC, useEffect } from 'react';
import { List } from 'antd-mobile';
import { queryList } from '@/services/api';
import LoadMoreListView from '@alitajs/list-view';
import { ListModelState, ConnectProps, connect, dropByCacheKey } from 'alita';
import Logo from '@/assets/logo.png';

import styles from './index.less';

const { Item } = List;
const { Brief } = Item;

interface PageProps extends ConnectProps {
  list: ListModelState;
}

const ListPage: FC<PageProps> = ({ list, dispatch }) => {
  useEffect(() => {
    dispatch!({
      type: 'list/query',
    });
  }, []);
  const { name } = list;

  const renderRow = (rowData: any, sectionID: string | number, rowID: string | number) => (
    <Item
      arrow="horizontal"
      thumb={<img src={Logo} className={styles.listIcon} />}
      multipleLine
      onClick={() => {
        dropByCacheKey('/list');
      }}
    >
      {rowData.title} <Brief>{rowID}</Brief>
    </Item>
  );
  return (
    <>
      Model Name:{name}
      <LoadMoreListView
        height="11rem"
        isTabsPage
        requestFunc={queryList}
        renderRow={renderRow}
        requestParams={{
          abc: '123',
          token: 'alita',
          pageSize: 10,
          offset: 0,
        }}
      />
      <div style={{ fontSize: '1000px' }}>123123</div>
    </>
  );
};

export default connect(({ list }: { list: ListModelState }) => ({ list }))(ListPage);
