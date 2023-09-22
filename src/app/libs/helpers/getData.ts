import { ENDPOINT_URLS } from '../constants/endpointUrls';

export default async function getData(url: string) {
  const res = await fetch(`${ENDPOINT_URLS.BASE}${url}`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
