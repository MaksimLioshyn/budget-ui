import { Table as TableView } from '@/app/components/Table/Table';
import { ENDPOINT_URLS } from '@/app/libs/constants/endpointUrls';
import { formatNumberWithSpaces } from '@/app/libs/helpers/formatNumberData';
import getData from '@/app/libs/helpers/getData';
import { TTurnoverBalancesSheet } from '@/app/libs/types/response';

const cellNames: ReadonlyArray<[string, string]> = [
  ['', 'статья баланса'],
  ['', 'значение'],
];

const getGroupedData = (input: Array<TTurnoverBalancesSheet>) => {
  const groupedInput = input.reduce(
    (groupedData, currentData) => {
      const groupProperty = currentData.ruleType.name;
      groupedData[groupProperty] = groupedData[groupProperty]
        ? [...groupedData[groupProperty], currentData]
        : [currentData];
      return groupedData;
    },
    {} as { [key: string]: Array<TTurnoverBalancesSheet> }
  );
  const result = [];
  for (let key in groupedInput) {
    result.push({ name: key, value: null }, ...groupedInput[key]);
  }
  return result;
};

export const Table = async () => {
  const columnCount = cellNames.length;

  const { result }: { result: Array<TTurnoverBalancesSheet> } = await getData(
    ENDPOINT_URLS.TURNOVER_SHEET
  );
  const groupedData = getGroupedData(result);
  const tableData = groupedData.map(
    (data: TTurnoverBalancesSheet | { name: string; value: null }) => ({
      name: data.name,
      value: data.value !== null ? formatNumberWithSpaces(data.value) : '',
    })
  );
  return (
    <TableView
      data={tableData}
      cellNames={cellNames}
      columnsCount={columnCount}
    />
  );
};
