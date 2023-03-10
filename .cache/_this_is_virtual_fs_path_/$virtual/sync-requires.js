
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/home/nobel/work/brouillon/src/pages/404.js")),
  "component---src-pages-demo-js": preferDefault(require("/home/nobel/work/brouillon/src/pages/demo.js")),
  "component---src-pages-index-js": preferDefault(require("/home/nobel/work/brouillon/src/pages/index.js")),
  "component---src-pages-using-ssr-js": preferDefault(require("/home/nobel/work/brouillon/src/pages/using-ssr.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/home/nobel/work/brouillon/src/pages/using-typescript.tsx")),
  "component---src-templates-using-dsg-js": preferDefault(require("/home/nobel/work/brouillon/src/templates/using-dsg.js"))
}

