import AlbumPage from "./AlbumPage";
import { VIEWS } from "../../constants";
import { getPath } from "../../helpers/pathHelpers";
import withSpaRouter from "../../utils/withSpaRouter";
export default withSpaRouter(AlbumPage, getPath(VIEWS.ALBUM));
