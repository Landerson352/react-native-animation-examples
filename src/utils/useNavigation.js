import { useNavigation } from 'react-navigation-hooks';

export default () => {
  const navigation = useNavigation();
  return [
    navigation,
    {
      navigate: (ROUTE, params) => () => navigation.navigate(ROUTE.key, params),
      push: (ROUTE, params) => () => navigation.push(ROUTE.key, params),
    },
  ];
};
