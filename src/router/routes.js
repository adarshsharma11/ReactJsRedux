import React from 'react';

const Help = React.lazy(() => import('../components/Help/help'));
const Trade = React.lazy(() => import('../components/Trade/trade'));
const Legal = React.lazy(() => import('../components/Legal/legal'));

const routes = [
  { path: '/help', name: 'Help', component: Help},
  { path: '/trade/:quote/:base', name: 'Trade', component: Trade },
  { path: '/legal', name: 'Legal', component: Legal}
];

export default routes;
