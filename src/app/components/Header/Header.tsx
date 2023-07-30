import styles from './Header.module.scss';

type THeaderProps = {
  userName: string;
};

const PROJECT_NAME = 'Project Balance';

const Header = ({ userName }: THeaderProps) => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.siteName}>{PROJECT_NAME}</div>
      <div className={styles.userBlock}>
        <div className={styles.userAvatar}></div>
        <div className={styles.userName}>{userName}</div>
      </div>
    </header>
  );
};

export default Header;
