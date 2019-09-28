import { useContext } from 'react';
import { NavigationContext } from 'react-navigation';
import { get } from 'lodash';

import ROUTE from '../route';

const useNavigation = () => {
  const navigation = useContext(NavigationContext);

  const routeName = get(navigation, 'state.routeName');
  const route = ROUTE[routeName];

  const handleNavigate = (ROUTE, params) => {
    return () => navigation.navigate(ROUTE.key, params);
  };

  return [navigation, route, handleNavigate];
};

export default useNavigation;
