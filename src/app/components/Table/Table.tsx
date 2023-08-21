import { TableRow } from './TableRow/TableRow';
import styles from './Table.module.scss';

export type TTableProps = {
  data: ReadonlyArray<{ [key: string]: string }>;
  cellNames: ReadonlyArray<[string, string]>;
  columnsCount: number;
};

export const Table = ({ data, cellNames, columnsCount }: TTableProps) => {
  return (
    <div className={styles.wrapper}>
      <TableRow isHeader rowData={cellNames} columnsCount={columnsCount} />
      {data.map((balanceData) => {
        const rowData = Object.entries(balanceData);

        return (
          <TableRow
            key={balanceData.name}
            rowData={rowData}
            columnsCount={columnsCount}
          />
        );
      })}
    </div>
  );
};
