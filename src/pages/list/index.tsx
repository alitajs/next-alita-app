import React, { FC } from 'react';
import { List } from 'antd-mobile';
import LoadMoreListView from '@alitajs/list-view';
import { ListModelState, ConnectProps, connect, dropByCacheKey } from 'alita';
import Logo from '@/assets/logo.png';

import styles from './index.less';

const { Item } = List;
const { Brief } = Item;

interface PageProps extends ConnectProps {
  list: ListModelState;
}
const dataSource = [
  {
    id: 1,
    title: 'Ant Design Title 1',
  },
  {
    id: 2,
    title: 'Ant Design Title 2',
  },
  {
    id: 3,
    title: 'Ant Design Title 3',
  },
  {
    id: 4,
    title: 'Ant Design Title 4',
  },
  {
    id: 5,
    title: 'Ant Design Title 5',
  },
  {
    id: 6,
    title: 'Ant Design Title 6',
  },
  {
    id: 7,
    title: 'Ant Design Title 7',
  },
  {
    id: 8,
    title: 'Ant Design Title 8',
  },
  {
    id: 9,
    title: 'Ant Design Title 9',
  },
  {
    id: 10,
    title: 'Ant Design Title 10',
  },
  {
    id: 1,
    title: 'Ant Design Title 1',
  },
  {
    id: 2,
    title: 'Ant Design Title 2',
  },
  {
    id: 3,
    title: 'Ant Design Title 3',
  },
  {
    id: 4,
    title: 'Ant Design Title 4',
  },
  {
    id: 5,
    title: 'Ant Design Title 5',
  },
  {
    id: 6,
    title: 'Ant Design Title 6',
  },
  {
    id: 7,
    title: 'Ant Design Title 7',
  },
  {
    id: 8,
    title: 'Ant Design Title 8',
  },
  {
    id: 9,
    title: 'Ant Design Title 9',
  },
  {
    id: 10,
    title: 'Ant Design Title 10',
  },
  {
    id: 1,
    title: 'Ant Design Title 1',
  },
  {
    id: 2,
    title: 'Ant Design Title 2',
  },
  {
    id: 3,
    title: 'Ant Design Title 3',
  },
  {
    id: 4,
    title: 'Ant Design Title 4',
  },
  {
    id: 5,
    title: 'Ant Design Title 5',
  },
  {
    id: 6,
    title: 'Ant Design Title 6',
  },
  {
    id: 7,
    title: 'Ant Design Title 7',
  },
  {
    id: 8,
    title: 'Ant Design Title 8',
  },
  {
    id: 9,
    title: 'Ant Design Title 9',
  },
  {
    id: 10,
    title: 'Ant Design Title 10',
  },
];

const asyncFn = ({ pageSize, offset }): Promise<Result> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        total: dataSource.length,
        data: dataSource.slice(offset, offset + pageSize),
      });
    }, 1000);
  });

const ListPage: FC<PageProps> = ({ list, dispatch }) => {
  // useEffect(() => {
  //   dispatch!({
  //     type: 'list/query',
  //   });
  // }, []);

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
      <LoadMoreListView
        requestFunc={asyncFn}
        renderRow={renderRow}
        requestParams={{
          abc: '123',
          token: 'alita',
          pageSize: 0,
          offset: 0,
        }}
      />
    </>
  );
};

export default connect(({ list }: { list: ListModelState }) => ({ list }))(ListPage);
