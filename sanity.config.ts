import { defineConfig } from "sanity";
import {deskTool} from 'sanity/desk'
import schemas from "./sanity/schemas";

const config = defineConfig({
  name: 'AbirPortfolio',
  title: 'AbirPortfolio',

  projectId: 'm1lgynxf',
  dataset: 'production',
  apiVersion: '2023-08-15',
  basePath: '/admin',

  plugins: [deskTool()],

  schema: {types: schemas}

})

export default config;