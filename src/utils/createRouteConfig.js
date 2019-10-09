const createRouteConfig = ({ key, title }, screen, navigationOptions = null) => ({
  [key]: {
    screen,
    navigationOptions: {
      title,
      ...navigationOptions,
    },
  },
});

export default createRouteConfig;
