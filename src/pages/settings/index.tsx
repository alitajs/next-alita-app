import React, { FC, useEffect, useState } from 'react';
import { setPageNavBar, connect, SettingsModelState, ConnectProps, dropByCacheKey } from 'alita';
import { Icon, Button, Modal, WingBlank, WhiteSpace } from 'antd-mobile';
import styles from './index.less';

const alert = Modal.alert;

interface PageProps extends ConnectProps {
  settings: SettingsModelState;
}

const SettingsPage: FC<PageProps> = ({ settings, dispatch, location, history }) => {
  const [state, setstate] = useState('设置页面,你可以点击下方的按钮，设置首页的头部导航');
  const onLeftClick = () => {
    alert('点击了左侧区域', null, [{ text: '确定', onPress: () => {} }]);
  };
  const onRightClick = () => {
    alert('点击了右侧区域', null, [{ text: '确定', onPress: () => {} }]);
  };
  useEffect(() => {
    setPageNavBar({
      pagePath: location.pathname,
      navBar: {
        onLeftClick,
        icon: <Icon key="1" type="ellipsis" />,
        rightContent: [
          <Icon key="0" type="search" style={{ marginRight: '16px' }} onClick={onRightClick} />,
        ],
      },
    });

    // dispatch!({
    //   type: 'settings/query',
    // });
  }, []);
  // const { name } = settings;
  console.log(location.pathname);
  return (
    <div className={styles.center}>
      {state}
      <WhiteSpace size="lg" />
      <WingBlank size="md">
        <Button
          type="primary"
          onClick={() => {
            setPageNavBar({
              pagePath: '/',
              navBar: {
                rightContent: [
                  <Icon
                    key="1"
                    type="ellipsis"
                    onClick={() => {
                      alert(
                        '点击了首页右侧按钮',
                        <div>
                          这个按钮是从“设置页面”设置的，所以响应函数也在设置页面，你最好通过抛事件的方式保证后续操作的正确性
                        </div>,
                        [{ text: '确定', onPress: () => {} }],
                      );
                    }}
                  />,
                ],
              },
            });
            setstate('设置了首页的头部,切换到首页看看吧');
            dispatch!({
              type: 'index/save',
              payload: { name: '头部已经从设置页面修改了，你可以点击右侧按钮试试效果' },
            });
            alert('设置首页导航', <div>设置了首页导航，返回首页，会在右上角增加一个按钮</div>, [
              { text: '取消,留在当前页面', onPress: () => {} },
              { text: '确定', onPress: () => history.push('/') },
            ]);
          }}
        >
          点击修改头部
        </Button>
      </WingBlank>
      可以通过点击下方的按钮，解除列表页面的状态保持
      <Button
        type="primary"
        onClick={() => {
          dropByCacheKey('/list');
          alert('解除KeepAlive', <div>已经解除了keep alive，你可以切换页面看看效果</div>, [
            { text: '确定', onPress: () => console.log('第0个按钮被点击了') },
          ]);
        }}
      >
        点击解除列表页状态保持
      </Button>
    </div>
  );
};

export default connect(({ settings }: { settings: SettingsModelState }) => ({ settings }))(
  SettingsPage,
);
