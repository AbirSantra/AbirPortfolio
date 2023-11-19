import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

const config = defineConfig({
  name: "AbirPortfolio",
  title: "AbirPortfolio",

  projectId: "m1lgynxf",
  dataset: "production",
  apiVersion: "2023-08-15",
  basePath: "/admin",

  plugins: [
    deskTool({
      structure: (S, context) => {
        return S.list()
          .title("Content")
          .items([
            orderableDocumentListDeskItem({ type: "tool", S, context }),
            orderableDocumentListDeskItem({ type: "project", S, context }),
          ]);
      },
    }),
  ],

  schema: { types: schemas },
});

export default config;
