import compose from "../utils/compose";
import { withPageContent } from "./with-page-content";
import { withPageSettings } from "./with-page-settings";
import { withPreviewState } from "./with-preview-state";

export const withDefaultProps = compose([
  withPreviewState,
  withPageSettings,
  withPageContent,
]);
