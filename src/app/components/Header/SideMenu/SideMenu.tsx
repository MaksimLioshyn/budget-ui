import { CSSProperties } from 'react';
import styles from './SideMenu.module.scss';
import Link from 'next/link';

export type TSideMenuProps = {
  isMenuShowed: boolean;
  hideMenuHandler: () => void;
  curentRoute: string;
  routesList: ReadonlyArray<[string, string]>;
};

export const SideMenu = ({
  isMenuShowed,
  hideMenuHandler,
  curentRoute,
  routesList,
}: TSideMenuProps) => {
  const wrapperStyles = {
    '--translate-x': `${isMenuShowed ? 0 : -100}%`,
  } as CSSProperties;

  return (
    <>
      <aside className={styles.wrapper} style={wrapperStyles}>
        <div className={styles.activeRoute}>{curentRoute}</div>
        <nav className={styles.navigaionList}>
          <ul>
            {routesList.map(([routeName, routePath]) => {
              return (
                <li className={styles.listItem} key={routeName}>
                  <Link className={styles.link} href={routePath}>
                    {routeName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
      {isMenuShowed && (
        <div className={styles.backDrop} onClick={hideMenuHandler} />
      )}
    </>
  );
};
