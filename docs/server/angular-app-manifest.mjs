
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/employee-work-hours/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/employee-work-hours"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 462, hash: '8f2f3438cff4a41aca54795befa15748ee73341fdbe6bc627ce24418b1a3f8a4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 975, hash: '6d03d62a150402d7be46650e2f682f230d2ca0361af56d673c795d5dda135771', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8046, hash: '377c1cbbb1ca5fe953618b7c8f4f4e58aaf51885ad55a10a890cb419408fb032', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
