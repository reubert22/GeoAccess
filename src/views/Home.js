//@flow
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  Picker,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import MapView from "react-native-maps";

import Tubular from "../components/details/Tubular";
import Hollow from "../components/details/Hollow";
import TubularPin from "../imgs/tubular-pin.png";
import HollowPin from "../imgs/hollow-pin.png";

const { width } = Dimensions.get("window");

class HomeScreen extends PureComponent {
  state = {
    showDetails: false,
    place: {},
    showButton: false
  };

  handleModal = (place = {}) => {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails,
      place
    }));
  };

  handleAdd = () => {
    this.setState(prevState => ({
      showButton: !prevState.showButton
    }));
  };

  render() {
    const { places } = this.props;
    const { showDetails, showButton, place } = this.state;

    let latitude = 0;
    let longitude = 0;

    if (places.places && places && places.places.length !== 0) {
      latitude = parseFloat(places.places[0].latitude_decimal);
      longitude = parseFloat(places.places[0].longitude_decimal);
    }

    return (
      <View style={styles.container}>
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
            console.log("hey", e.nativeEvent.coordinate);
            this.handleAdd();
          }}
        >
          {places.places &&
            places.places.map(item => (
              <MapView.Marker
                ref={mark => (this.mark = mark)}
                title={item.localizacao}
                description={item.natureza}
                onCalloutPress={() => this.handleModal(item)}
                key={`${item.ponto}-marker`}
                coordinate={{
                  latitude: parseFloat(item.latitude_decimal),
                  longitude: parseFloat(item.longitude_decimal)
                }}
              >
                {item.natureza.contains("tubular") ? (
                  <Image
                    source={TubularPin}
                    style={{ width: 32, height: 32, resizeMode: "cover" }}
                  />
                ) : (
                  <Image
                    source={HollowPin}
                    style={{ width: 32, height: 32, resizeMode: "cover" }}
                  />
                )}
              </MapView.Marker>
            ))}
        </MapView>

        {showButton && (
          <Modal
            style={{
              backgroundColor: "yellow",
              flex: 1,
              margin: 10,
              position: "absolute"
            }}
          >
            <View style={{ flex: 1 }}>
              <View
                style={{
                  width: "100%",
                  flex: 1,
                  padding: 10
                }}
              >
                <Text>Tipo do poço</Text>
                <Picker
                  style={{ height: 50, width: "100%", borderWidth: 0.5 }}
                  onValueChange={(itemValue, itemIndex) => {}}
                >
                  <Picker.Item label="Tubular" value="1" />
                  <Picker.Item label="Escavado" value="2" />
                </Picker>
                <TextInput
                  style={{
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 1,
                    borderRadius: 5
                  }}
                  onChangeText={text => this.setState({ text })}
                  value=""
                  placeholder="Digite x"
                />
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: "blue",
                  width: "95%",
                  bottom: 10,
                  left: 10,
                  right: 10,
                  borderRadius: 30,
                  position: "absolute",
                  height: 60,
                  alignItems: "center",
                  justifyContent: "center"
                }}
                onPress={() => this.handleAdd()}
              >
                <Text>Salvar</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        )}
        {showDetails && (
          <Modal style={{ backgroundColor: "yellow", flex: 1 }}>
            {!place.natureza.includes("tubular") ? (
              <Hollow item={place} handleModal={() => this.handleModal()} />
            ) : (
              <Tubular item={place} handleModal={() => this.handleModal()} />
            )}
          </Modal>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  mapView: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...StyleSheet.absoluteFillObject
  },
  place: {
    width: width - 40,
    maxHeight: 100,
    borderRadius: 4,
    backgroundColor: "#fff",
    marginHorizontal: 20
  }
});

const mapStateToProps = state => ({
  places: state.places
});

export default connect(
  mapStateToProps,
  null
)(HomeScreen);
