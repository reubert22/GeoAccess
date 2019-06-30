import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mapView: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...StyleSheet.absoluteFillObject
  },
  imageMarker: { width: 32, height: 32, resizeMode: 'cover' }
});
