import { useNavigationState } from 'react-navigation-hooks';

import ROUTE from '../route';

const useRoute = () => {
  const { routeName } = useNavigationState();
  return ROUTE[routeName];
};

export default useRoute;
