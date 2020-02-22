import * as VIEWS from "./views";

export default Object.freeze({
  [VIEWS.MAIN]: { path: "/:view" },
  [VIEWS.HOME]: { path: "/home" },
  [VIEWS.ALBUM]: { path: "/album" },
  [VIEWS.ABOUT]: { path: "/about" },
  [VIEWS.CONTACT]: { path: "/contact" },
  [VIEWS.DONATE]: { path: "/donate" },
  [VIEWS.REDIRECT]: { path: "/" }
});
