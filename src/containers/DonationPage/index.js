import DonationPage from "./DonationPage";
import { VIEWS } from "../../constants";
import { getPath } from "../../helpers/pathHelpers";
import withSpaRouter from "../../utils/withSpaRouter";
export default withSpaRouter(DonationPage, getPath(VIEWS.DONATE));
