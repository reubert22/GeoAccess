//@flow
import React, { PureComponent } from "react";
import { StyleSheet, Dimensions, Image } from "react-native";
import MapView from "react-native-maps";

import TubularPin from "../../imgs/tubular-pin.png";
import HollowPin from "../../imgs/hollow-pin.png";

class MapsComponent extends PureComponent {
  render() {
    const {
      latitude,
      longitude,
      handleLocation,
      places,
      handleMarker
    } = this.props;

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
        onPress={e => {
          handleLocation(e.nativeEvent.coordinate);
        }}
      >
        {places &&
          places.map(item => (
            <MapView.Marker
              ref={mark => (this.mark = mark)}
              title={item.localizacao}
              description={item.natureza}
              onCalloutPress={() => handleMarker(item)}
              key={`${item.ponto}-marker`}
              coordinate={{
                latitude: parseFloat(item.latitude_decimal),
                longitude: parseFloat(item.longitude_decimal)
              }}
            >
              {item.natureza.includes("tubular") ? (
                <Image source={TubularPin} style={styles.imageMarker} />
              ) : (
                <Image source={HollowPin} style={styles.imageMarker} />
              )}
            </MapView.Marker>
          ))}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  mapView: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...StyleSheet.absoluteFillObject
  },
  imageMarker: { width: 32, height: 32, resizeMode: "cover" }
});

export default MapsComponent;
