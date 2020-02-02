import { viewToRouteMapping } from '../constants';

export const getPath = view => viewToRouteMapping[view].path;
