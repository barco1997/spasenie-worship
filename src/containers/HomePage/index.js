import HomePage from "./HomePage";
import { VIEWS } from "../../constants";
import { getPath } from "../../helpers/pathHelpers";
import withSpaRouter from "../../utils/withSpaRouter";
export default withSpaRouter(HomePage, getPath(VIEWS.HOME));
