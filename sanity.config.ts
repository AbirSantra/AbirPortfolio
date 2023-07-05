import { defineConfig } from "sanity";
import {deskTool} from 'sanity/desk'

const config = defineConfig({
  name: 'AbirPortfolio',
  title: 'AbirPortfolio',

  projectId: 'm1lgynxf',
  dataset: 'production',
  apiVersion: '2023-07-05',
  basePath: '/admin',

  plugins: [deskTool()],

})

export default config;