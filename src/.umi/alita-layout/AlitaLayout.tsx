// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'umi';
import { plugin } from '../core/umiExports';
import Layout from '/Users/xiaohuoni/Desktop/桌面/nextAlitaApp/node_modules/@alitajs/layout/lib/layout/index.js';

export default (props) => {
  const layoutConfig = plugin.applyPlugins({
    key: 'mobileLayout',
    type: ApplyPluginsType.modify,
    initialValue: {},
  }) || {};
  return React.createElement(Layout, {
    layoutConfig,
    hasKeepAlive: true,
    ...props,
    hideNavBar:false,
  })
}
