//@flow
import React, { PureComponent } from 'react';
import MapView from 'react-native-maps';
import { styles } from './style';

class MapsComponent extends PureComponent {
  render() {
    const { latitude, longitude, handleLocation, places, handleMarker } = this.props;

    return (
      <MapView
        ref={map => (this.mapView = map)}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.02599,
          longitudeDelta: 0.7
        }}
        style={styles.mapView}
        showsPointsOfInterest={false}
        onPress={e => handleLocation(e.nativeEvent.coordinate)}
      >
        {places &&
          places.map(item => (
            <MapView.Marker
              pinColor={item.natureza.includes('tubular') ? '#4285f4' : '#E5454C'}
              ref={mark => (this.mark = mark)}
              title={item.localizacao}
              description={item.natureza}
              onCalloutPress={() => handleMarker(item)}
              key={`${item.ponto}-marker`}
              coordinate={{
                latitude: parseFloat(item.latitude_decimal),
                longitude: parseFloat(item.longitude_decimal)
              }}
            />
          ))}
      </MapView>
    );
  }
}

export default MapsComponent;
