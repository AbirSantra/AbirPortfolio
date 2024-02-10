import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

const config = defineConfig({
  name: "AbirPortfolio",
  title: "AbirPortfolio",

  projectId: "m1lgynxf",
  dataset: "production",
  apiVersion: "2023-02-10",
  basePath: "/admin",

  plugins: [
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title("Content")
          .items([
            orderableDocumentListDeskItem({ type: "tool", S, context }),
            orderableDocumentListDeskItem({ type: "project", S, context }),
            orderableDocumentListDeskItem({ type: "experience", S, context }),
          ]);
      },
    }),
  ],

  schema: { types: schemas },
});

export default config;
