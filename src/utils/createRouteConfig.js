const createRouteConfig = ({ key, title }, screen) => ({
  [key]: {
    screen,
    navigationOptions: {
      title,
    },
  },
});

export default createRouteConfig;
