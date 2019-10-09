import { useNavigation } from 'react-navigation-hooks';

export default () => {
  const navigation = useNavigation();
  return [
    {
      goBack: () => navigation.goBack(),
      navigate: (ROUTE, params) => () => navigation.navigate(ROUTE.key, params),
      push: (ROUTE, params) => () => navigation.push(ROUTE.key, params),
    },
    navigation,
  ];
};
