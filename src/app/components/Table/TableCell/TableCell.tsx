import styles from './TableCell.module.scss';

type TCellProps = {
  cellValue: string;
};

const TableCell = ({ cellValue }: TCellProps) => {
  return (
    <div className={styles.cell}>
      <div className={styles.cellValue}>{cellValue}</div>
    </div>
  );
};

export default TableCell;
