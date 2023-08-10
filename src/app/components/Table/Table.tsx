import TableRow from './TableRow/TableRow';
import styles from './Table.module.scss';
import TableHeader from './TableHeader/TableHeader';

type TBalanceData = {
  id: string;
  debit: string;
  credit: string;
  date: string;
  name: string;
  description: string;
};

export type TTableProps = {
  data: ReadonlyArray<TBalanceData>;
  cellNames: ReadonlyArray<string>;
};

const Table = ({ data, cellNames }: TTableProps) => {
  return (
    <div className={styles.wrapper}>
      <TableHeader cellData={cellNames} />
      {data.map((balanceData) => {
        const rowData = Object.entries(balanceData);

        return <TableRow key={balanceData.id} rowData={rowData} />;
      })}
    </div>
  );
};

export default Table;
