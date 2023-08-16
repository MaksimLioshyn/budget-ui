import { CSSProperties } from 'react';
import { TableCell } from '../TableCell/TableCell';
import styles from './TableRow.module.scss';

type TRowProps = {
  rowData: ReadonlyArray<[string, string]>;
  columnsCount: number;
  isHeader?: boolean;
};

export const TableRow = ({ rowData, columnsCount, isHeader }: TRowProps) => {
  const rowStyles = {
    '--columns-count': `${columnsCount}`,
  } as CSSProperties;

  return (
    <div
      className={`${styles.row} ${isHeader ? styles.headerRow : ''}`}
      style={rowStyles}
    >
      {rowData.map((cell) => {
        const [key, value] = cell;

        return <TableCell key={key} cellValue={value} />;
      })}
    </div>
  );
};
