import { StyleSheet } from 'react-native';

const COLOR = {
  BLUE: '#0071FF',
};

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  alignSelfStart: {
    alignSelf: 'flex-start',
  },
  animationCanvas: {
    backgroundColor: 'black',
    height: 160,
  },
  blue: {
    color: COLOR.BLUE,
  },
  bgAlmostWhite: {
    backgroundColor: '#eee',
  },
  bgBlack: {
    backgroundColor: '#000',
  },
  bgGold: {
    backgroundColor: 'gold',
  },
  bgAqua: {
    backgroundColor: 'aquamarine',
  },
  bgPink: {
    backgroundColor: 'deeppink',
  },
  bgWhite: {
    backgroundColor: '#fff',
  },
  border1: {
    borderWidth: 1,
  },
  borderBlue: {
    borderColor: COLOR.BLUE,
  },
  centerContent: {
    justifyContent: 'center',
  },
  centerContentAndItems: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerItems: {
    alignItems: 'center',
  },
  centerSelf: {
    alignSelf: 'center',
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  grow1: {
    flexGrow: 1,
  },
  m1: {
    margin: 4,
  },
  m2: {
    margin: 8,
  },
  m3: {
    margin: 12,
  },
  m4: {
    margin: 16,
  },
  mb1: {
    marginBottom: 4,
  },
  mb2: {
    marginBottom: 8,
  },
  mb3: {
    marginBottom: 12,
  },
  mb4: {
    marginBottom: 16,
  },
  mt1: {
    marginTop: 4,
  },
  mt2: {
    marginTop: 8,
  },
  mt3: {
    marginTop: 12,
  },
  mt4: {
    marginTop: 16,
  },
  muted: {
    color: '#888',
  },
  overflowHidden: {
    overflow: 'hidden',
  },
  p1: {
    padding: 4,
  },
  p2: {
    padding: 8,
  },
  p3: {
    padding: 12,
  },
  p4: {
    padding: 16,
  },
  pcontent: {
    padding: 16,
  },
  px1: {
    paddingHorizontal: 4,
  },
  px2: {
    paddingHorizontal: 8,
  },
  px3: {
    paddingHorizontal: 12,
  },
  px4: {
    paddingHorizontal: 16,
  },
  py1: {
    paddingVertical: 4,
  },
  py2: {
    paddingVertical: 8,
  },
  py3: {
    paddingVertical: 12,
  },
  py4: {
    paddingVertical: 16,
  },
  relative: {
    position: 'relative',
  },
  rounded: {
    borderRadius: 4,
  },
  row: {
    flexDirection: 'row',
  },
  shadow1: {
    elevation: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  shapeA: {
    width: 80,
    height: 80,
    backgroundColor: 'aquamarine',
    borderRadius: 4,
  },
  shapeB: {
    width: 80,
    height: 80,
    backgroundColor: 'aquamarine',
    borderRadius: 40,
  },
  shapeC: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'aquamarine',
  },
  shapeD: {
    height: 80,
    width: 80,
    backgroundColor: 'deeppink',
    borderRadius: 4,
  },
  shapeE: {
    height: 8,
    width: 24,
    backgroundColor: 'aquamarine',
    borderRadius: 4,
  },
  shapeF: {
    backgroundColor: 'aquamarine',
    flexGrow: 1,
  },
  shapeG: {
    height: 16,
    width: 32,
    backgroundColor: 'aquamarine',
    borderRadius: 4,
  },
  spaceBetweenContent: {
    justifyContent: 'space-between',
  },
  textAqua: {
    color: 'aquamarine',
  },
  textGold: {
    color: 'gold',
  },
  textPink: {
    color: 'deeppink',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  wrap: {
    flexWrap: 'wrap',
  },
});

export default styles;
