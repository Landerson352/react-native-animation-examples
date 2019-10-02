import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
  },
  animationCanvas: {
    backgroundColor: 'black',
    height: 160,
  },
  blue: {
    color: '#0071FF',
  },
  bgAlmostWhite: {
    backgroundColor: '#eee',
  },
  bgBlack: {
    backgroundColor: '#000',
  },
  bgWhite: {
    backgroundColor: '#fff',
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
  spaceBetweenContent: {
    justifyContent: 'space-between',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  wrap: {
    flexWrap: 'wrap',
  },
});

export default styles;
