import ContactPage from "./ContactPage";
import { VIEWS } from "../../constants";
import { getPath } from "../../helpers/pathHelpers";
import withSpaRouter from "../../utils/withSpaRouter";
export default withSpaRouter(ContactPage, getPath(VIEWS.CONTACT));
