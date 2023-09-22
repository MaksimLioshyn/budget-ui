import { TableRow } from './TableRow/TableRow';
import styles from './Table.module.scss';

export type TTableProps = {
  data: ReadonlyArray<{ [key: string]: string }>;
  cellNames: { [key: string]: string };
  columnsCount: number;
  isEditable?: boolean;
  // eslint-disable-next-line no-unused-vars
  buttonHandler?: (input: { [key: string]: string }) => void;
};

export const Table = ({
  data,
  cellNames,
  columnsCount,
  isEditable,
  buttonHandler,
}: TTableProps) => {
  return (
    <div className={styles.wrapper}>
      <TableRow isHeader rowData={cellNames} columnsCount={columnsCount} />
      {data.map((balanceData) => {
        return (
          <TableRow
            key={balanceData.name}
            rowData={balanceData}
            columnsCount={columnsCount}
            isEditable={isEditable}
            buttonHandler={buttonHandler}
          />
        );
      })}
    </div>
  );
};
