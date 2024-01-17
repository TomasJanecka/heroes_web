import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

export const WordReader = () => {
    const docs = [
        { uri: require("./example-files/pdf.pdf") }, // Local File
    ];

    return <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />;
}