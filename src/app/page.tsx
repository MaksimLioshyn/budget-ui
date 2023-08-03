import TableRow from './components/TableRow/TableRow';
import { ENDPOINT_URLS } from './libs/constants/endpointUrls';
import getData from './libs/helpers/getData';
import styles from './page.module.scss';

type RuleType = {
  id: string;
  name: string;
  description: string;
};

type TRuleTypes = {
  result: Array<RuleType>;
};

export default async function Home() {
  const { result }: TRuleTypes = await getData(ENDPOINT_URLS.RULE_TYPES);

  return (
    <div className={styles.wrapper}>
      <h1>Home page</h1>
      <h2>Table for RuleTypes EndPoint</h2>
      {result.map((ruleType) => {
        const rowData = Object.entries(ruleType);

        return <TableRow key={ruleType.id} rowData={rowData} />;
      })}
    </div>
  );
}
