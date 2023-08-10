import Table from './containers/Table/Table';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <h1>TurnoverBalances</h1>
      <Table />
    </div>
  );
}
