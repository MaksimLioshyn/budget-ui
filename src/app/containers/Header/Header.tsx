import { Header as HeaderView } from '../../components';
import { MOCK_DATA } from '../../libs/constants/mockData';

const Header = () => {
  return <HeaderView userName={MOCK_DATA.USER_NAME} />;
};

export default Header;
