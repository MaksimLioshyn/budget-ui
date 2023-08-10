import { Table as TableView } from '@/app/components';
import { ENDPOINT_URLS } from '@/app/libs/constants/endpointUrls';
import { formatNumberWithSpaces } from '@/app/libs/helpers/formatNumberData';
import getData from '@/app/libs/helpers/getData';

type TBalanceResponse = {
  id: number;
  debit: number;
  credit: number;
  date: string;
  code: {
    name: string;
    description: string;
  };
};

const cellNames = ['name', 'id', 'debit', 'credit', 'date', 'description'];

const Table = async () => {
  const { result }: { result: Array<TBalanceResponse> } = await getData(
    ENDPOINT_URLS.TURNOVER_BALANCE
  );
  const tableData = result.map((data: TBalanceResponse) => ({
    name: data.code.name,
    id: `${data.id}`,
    debit: formatNumberWithSpaces(data.debit),
    credit: formatNumberWithSpaces(data.credit),
    date: new Date(data.date).toLocaleDateString(),
    description: data.code.description,
  }));

  return <TableView data={tableData} cellNames={cellNames} />;
};

export default Table;
