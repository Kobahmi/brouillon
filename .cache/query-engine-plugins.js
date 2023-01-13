
import * as pluginGatsbyNode0 from "../node_modules/gatsby-plugin-image/gatsby-node"
import * as pluginGatsbyNode1 from "../node_modules/gatsby-source-filesystem/gatsby-node"
import * as pluginGatsbyNode2 from "../node_modules/gatsby-transformer-sharp/gatsby-node"
import * as pluginGatsbyNode3 from "../node_modules/gatsby-plugin-sharp/gatsby-node"
import * as pluginGatsbyNode4 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyWorker0 from "../node_modules/gatsby-plugin-sharp/gatsby-worker"

export const gatsbyNodes = {
"gatsby-plugin-image": pluginGatsbyNode0,
"gatsby-source-filesystem": pluginGatsbyNode1,
"gatsby-transformer-sharp": pluginGatsbyNode2,
"gatsby-plugin-sharp": pluginGatsbyNode3,
"gatsby-plugin-page-creator": pluginGatsbyNode4,
}

export const gatsbyWorkers = {
"gatsby-plugin-sharp": pluginGatsbyWorker0,
}

export const flattenedPlugins =
  [
  {
    "resolve": "",
    "id": "a9f9c4c1-d74b-569b-a6ec-6093f5d12592",
    "name": "gatsby-plugin-image",
    "version": "3.3.2",
    "pluginOptions": {
      "plugins": []
    },
    "nodeAPIs": [
      "createSchemaCustomization",
      "onCreateBabelConfig",
      "onCreateWebpackConfig",
      "preprocessSource"
    ],
    "browserAPIs": [],
    "ssrAPIs": [
      "onRenderBody"
    ],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "038092bf-bcf4-5438-a1dd-083d753996a3",
    "name": "gatsby-source-filesystem",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": [],
      "name": "images",
      "path": "/home/nobel/work/brouillon/src/images"
    },
    "nodeAPIs": [
      "onPreInit",
      "pluginOptionsSchema",
      "sourceNodes",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "822bdf7b-a95a-5885-9351-158705910ac3",
    "name": "gatsby-transformer-sharp",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": []
    },
    "nodeAPIs": [
      "onPreInit",
      "onCreateNode",
      "shouldOnCreateNode",
      "createSchemaCustomization",
      "createResolvers"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "9e618b1c-a2d0-52b1-86ab-f91016f37381",
    "name": "gatsby-plugin-sharp",
    "version": "5.3.2",
    "pluginOptions": {
      "plugins": [],
      "base64Width": 20,
      "stripMetadata": true,
      "defaultQuality": 50,
      "failOnError": true,
      "failOn": "warning"
    },
    "nodeAPIs": [
      "onCreateDevServer",
      "onPostBootstrap",
      "onPluginInit",
      "onPreBootstrap",
      "pluginOptionsSchema"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "6e57def2-278e-51a8-bac1-d530550bee65",
    "name": "gatsby-plugin-page-creator",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/home/nobel/work/brouillon/node_modules/gatsby/dist/internal-plugins/dev-404-page/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "477ea76e-2bd7-56d4-bc71-e4cb03b8ab0b",
    "name": "gatsby-plugin-page-creator",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/home/nobel/work/brouillon/node_modules/gatsby/dist/internal-plugins/load-babel-config/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "68428833-7a76-5f84-975f-c84a615a918c",
    "name": "gatsby-plugin-page-creator",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/home/nobel/work/brouillon/node_modules/gatsby/dist/internal-plugins/internal-data-bridge/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "1649bff4-0eea-554b-8bae-49b80593e3ad",
    "name": "gatsby-plugin-page-creator",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/home/nobel/work/brouillon/node_modules/gatsby/dist/internal-plugins/prod-404-500/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "657f571d-8459-5e8a-8010-9cf7a26112b4",
    "name": "gatsby-plugin-page-creator",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/home/nobel/work/brouillon/node_modules/gatsby/dist/internal-plugins/webpack-theme-component-shadowing/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "35dedf90-f2ea-5472-b3b6-edb9d0ebb9cf",
    "name": "gatsby-plugin-page-creator",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/home/nobel/work/brouillon/node_modules/gatsby/dist/internal-plugins/bundle-optimisations/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "29496860-3992-5a51-8e14-c6713de8ebbc",
    "name": "gatsby-plugin-page-creator",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/home/nobel/work/brouillon/node_modules/gatsby/dist/internal-plugins/functions/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "e53238a6-b714-5f63-b9ec-3e8d769fa5af",
    "name": "gatsby-plugin-page-creator",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/home/nobel/work/brouillon/node_modules/gatsby-plugin-image/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "913b57d6-c9d3-5455-9001-b73b1e6b2687",
    "name": "gatsby-plugin-page-creator",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/home/nobel/work/brouillon/node_modules/gatsby-plugin-postcss/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "8eaf0c01-b707-500a-882b-c9d9ec40b654",
    "name": "gatsby-plugin-page-creator",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/home/nobel/work/brouillon/node_modules/gatsby-source-filesystem/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "4b8763da-c48c-5c92-9e52-d28a4a6fb560",
    "name": "gatsby-plugin-page-creator",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/home/nobel/work/brouillon/node_modules/gatsby-transformer-sharp/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "b9f24039-17e8-54e7-b22a-ef826fcaf026",
    "name": "gatsby-plugin-page-creator",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/home/nobel/work/brouillon/node_modules/gatsby-plugin-sharp/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "9d74ab62-445c-5a87-b9b4-451a91312180",
    "name": "gatsby-plugin-page-creator",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/home/nobel/work/brouillon/node_modules/gatsby-plugin-manifest/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "e74c16e1-5665-5409-894b-5d6040658af2",
    "name": "gatsby-plugin-page-creator",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/home/nobel/work/brouillon/node_modules/gatsby-plugin-gatsby-cloud/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "3e98491a-f94a-5d07-b8fe-778d10ba5e5e",
    "name": "gatsby-plugin-page-creator",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/home/nobel/work/brouillon/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  }
]
