import { ROUTE_NAMES } from '../constants/routes';

export const ReplacePath = (path: string) => {
  const currentPath = path.replace('/', '');
  return currentPath
    ? currentPath.toUpperCase()
    : ROUTE_NAMES.HOME.toUpperCase();
};
