import { CSSProperties } from 'react';
import { TableCell } from '../TableCell/TableCell';
import styles from './TableRow.module.scss';

type TRowProps = {
  rowData: {
    [key: string]: string;
  };
  columnsCount: number;
  isHeader?: boolean;
  isEditable?: boolean;
  // eslint-disable-next-line no-unused-vars
  buttonHandler?: (input: { [key: string]: string }) => void;
};

const renderRow = (balanceData: { [key: string]: string }) => {
  const rowData = Object.entries(balanceData);
  return (
    <>
      {rowData.map((cell) => {
        const [key, value] = cell;
        return <TableCell key={key} cellValue={value} />;
      })}
    </>
  );
};

export const TableRow = ({
  rowData,
  columnsCount,
  isHeader,
  isEditable,
  buttonHandler,
}: TRowProps) => {
  const rowStyles = {
    '--columns-count': `${columnsCount}`,
  } as CSSProperties;

  return (
    <div
      className={`${styles.row} ${isHeader ? styles.headerRow : ''}`}
      style={rowStyles}
    >
      {renderRow(rowData)}
      {isEditable && (
        <button onClick={() => buttonHandler && buttonHandler(rowData)}>
          Edit
        </button>
      )}
    </div>
  );
};
