
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Rapidd-technologies-assignment-1/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Rapidd-technologies-assignment-1"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 475, hash: 'd90c2fea2a62bd7223d68098deec2071a95b73752d8b2f72d2bb435f13b6d567', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 988, hash: 'e0d6193a84d5bf8749252b2d23aad75f0cccab096403cd55fd22ef9018c62f2d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8059, hash: '183e24b61d5dc5af2a9ce7fd2f33def48d17085cc3afcb78984189e2faa230a6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
