// @ts-nocheck
import React from 'react';
import Layout from './KeepAliveLayout';

const KeepAliveLayout = (props:any) => {
  return React.createElement(Layout, {
    keepalive:['/list'],
    ...props
  })
}
export {KeepAliveLayout}
