import AboutPage from "./AboutPage";
import { VIEWS } from "../../constants";
import { getPath } from "../../helpers/pathHelpers";
import withSpaRouter from "../../utils/withSpaRouter";
export default withSpaRouter(AboutPage, getPath(VIEWS.ABOUT));
