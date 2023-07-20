import styles from "./TableCell.module.scss";

type TCellProps = {
  cellName: string;
  cellValue: string;
};

const TableCell = ({ cellName, cellValue }: TCellProps) => {
  const upperCellName = cellName.toUpperCase();

  return (
    <div className={styles.cell}>
      <div className={styles.cellName}>{upperCellName}</div>
      <div className={styles.cellValue}>{cellValue}</div>
    </div>
  );
};

export default TableCell;
