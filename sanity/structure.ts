import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S, context) => {
  return S.list()
    .title("Content")
    .items([
      // Singleton
      S.listItem()
        .title("Hero Section")
        .child(
          S.document()
            .schemaType("heroContent")
            .documentId("heroContent")
            .title("Hero Content")
        ),

      // Orderable items
      orderableDocumentListDeskItem({ type: "tool", S, context }),
      orderableDocumentListDeskItem({ type: "project", S, context }),
      orderableDocumentListDeskItem({ type: "experience", S, context }),

      // Other document types
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["tool", "project", "experience", "heroContent"].includes(
            listItem.getId() ?? ""
          )
      ),
    ]);
};
