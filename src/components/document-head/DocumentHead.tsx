import { createPortal } from "preact/compat";
import type { DocumentHeadProps } from "./DocumentHeadProps";

const headRoot = document.head;

const DocumentHead = (props: DocumentHeadProps) =>
  createPortal(props.children, headRoot);

export default DocumentHead;
