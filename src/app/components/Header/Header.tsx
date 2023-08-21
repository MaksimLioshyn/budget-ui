import styles from './Header.module.scss';
import { SideMenu, TSideMenuProps } from './SideMenu/SideMenu';
import { TTopMenuProps, TopMenu } from './TopMenu/TopMenu';

type THeaderProps = {
  topMenuProps: TTopMenuProps;
  sideMenuProps: TSideMenuProps;
};

export const Header = ({
  topMenuProps: { userName, clichHandler },
  sideMenuProps: { isMenuShowed, hideMenuHandler, curentRoute, routesList },
}: THeaderProps) => {
  return (
    <header className={styles.wrapper}>
      <TopMenu userName={userName} clichHandler={clichHandler} />
      <SideMenu
        isMenuShowed={isMenuShowed}
        hideMenuHandler={hideMenuHandler}
        curentRoute={curentRoute}
        routesList={routesList}
      />
    </header>
  );
};
