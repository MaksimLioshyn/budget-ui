import styles from './TopMenu.module.scss';

export type TTopMenuProps = {
  userName: string;
  clichHandler: () => void;
};

const PROJECT_NAME = 'Project Balance';

export const TopMenu = ({ userName, clichHandler }: TTopMenuProps) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.menuToggler} onClick={clichHandler}>
        <span className={styles.togglerLine} />
        <span className={styles.togglerLine} />
        <span className={styles.togglerLine} />
      </button>
      <div className={styles.siteName}>{PROJECT_NAME}</div>
      <div className={styles.userBlock}>
        <div className={styles.userAvatar}></div>
        <div className={styles.userName}>{userName}</div>
      </div>
    </div>
  );
};
