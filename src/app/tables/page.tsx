import { CodesTable } from '../containers/CodesTable/CodesTable';
import { ENDPOINT_URLS } from '../libs/constants/endpointUrls';
import getData from '../libs/helpers/getData';

export default async function Tables() {
  const { result } = await getData(ENDPOINT_URLS.CODES_ALL);

  return (
    <div>
      <h1>Tables Page</h1>
      <CodesTable data={result} />
    </div>
  );
}
