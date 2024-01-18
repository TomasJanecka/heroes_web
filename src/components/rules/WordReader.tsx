import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

export const WordReader = () => {
  const docs = [
    { uri: require("./pravidlaMoroTest.pdf") }, // Local File
  ];

  return <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />;
};
