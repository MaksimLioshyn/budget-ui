'use client';

import { useState } from 'react';
import { Header as HeaderView } from '../../components';
import { MOCK_DATA } from '../../libs/constants/mockData';
import { usePathname } from 'next/navigation';
import { ReplacePath } from '@/app/libs/helpers/navigationHandlers';
import { ROUTES } from '@/app/libs/constants/routes';

const getRoutes = (routes: { [key: string]: string }) => {
  return Object.entries(routes);
};

const Header = () => {
  const [isMenuShowed, setIsMenuShowed] = useState(false);
  const pathName = usePathname();

  const togleMenuHandler = () => {
    setIsMenuShowed((prev) => !prev);
  };

  return (
    <HeaderView
      topMenuProps={{
        userName: MOCK_DATA.USER_NAME,
        clichHandler: togleMenuHandler,
      }}
      sideMenuProps={{
        isMenuShowed,
        hideMenuHandler: togleMenuHandler,
        curentRoute: ReplacePath(pathName),
        routesList: getRoutes(ROUTES),
      }}
    />
  );
};

export default Header;
