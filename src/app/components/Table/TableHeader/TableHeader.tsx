import TableCell from '../TableCell/TableCell';
import styles from './TableHeader.module.scss';

const TableHeader = ({ cellData }: { cellData: ReadonlyArray<string> }) => {
  return (
    <div className={styles.header}>
      {cellData.map((cellValue) => (
        <TableCell cellValue={cellValue} key={cellValue} />
      ))}
    </div>
  );
};

export default TableHeader;
