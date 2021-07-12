// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/xiaohuoni/Desktop/桌面/nextAlitaApp/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: '.umi__alita-layout__AlitaLayout' */'/Users/xiaohuoni/Desktop/桌面/nextAlitaApp/src/.umi/alita-layout/AlitaLayout.tsx')}),
    "routes": [
      {
        "path": "/",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__index__index' */'@/pages/index/index.tsx')})
      },
      {
        "path": "/list",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__index' */'@/pages/list/index.tsx')})
      },
      {
        "path": "/settings",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__settings__index' */'@/pages/settings/index.tsx')})
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
