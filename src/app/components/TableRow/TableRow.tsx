import TableCell from "../TableCell/TableCell";
import styles from "./TableRow.module.scss";

type TRowProps = {
  rowData: ReadonlyArray<[string, string]>;
};

const TableRow = ({ rowData }: TRowProps) => {
  return (
    <div className={styles.row}>
      {rowData.map((cell) => {
        const [key, value] = cell;

        return <TableCell key={key} cellName={key} cellValue={value} />;
      })}
    </div>
  );
};

export default TableRow;
