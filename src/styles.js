import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  animationCanvas: {
    backgroundColor: 'black',
    height: 160,
  },
  centerContent: {
    justifyContent: 'center',
  },
  centerItems: {
    alignItems: 'center',
  },
  centerContentAndItems: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  grow1: {
    flexGrow: 1,
  },
  m2: {
    margin: 8,
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
  pcontent: {
    padding: 16,
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
  py1: {
    paddingVertical: 4,
  },
  py2: {
    paddingVertical: 8,
  },
  px4: {
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
  },
  wrap: {
    flexWrap: 'wrap',
  },
  spaceBetweenContent: {
    justifyContent: 'space-between',
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
  fontWeightBold: {
    fontWeight: 'bold',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  muted: {
    color: '#888',
  },
  shadow1: {
    elevation: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  rounded: {
    borderRadius: 4,
  },
  overflowHidden: {
    overflow: 'hidden',
  },
  blue: {
    color: '#0071FF',
  },
});

export default styles;
