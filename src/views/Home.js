//@flow
import React, { PureComponent } from "react";
import { StyleSheet, View, Dimensions, Modal } from "react-native";
import { connect } from "react-redux";

import Tubular from "../components/details/Tubular";
import Hollow from "../components/details/Hollow";
import NewPoint from "../components/NewPoint";

import * as placesService from "../services/Places";
import MapsComponent from "../components/Maps";

const { width } = Dimensions.get("window");

class HomeScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false,
      showButton: false,
      option: "1",
      place: {},
      location: {}
    };
  }

  handleModal = (place = {}) => {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails,
      place
    }));
  };

  handleAdd = data => {
    const { location } = this.state;

    this.props.addNewPlace({
      ...data,
      latitude: location.latitude,
      longitude: location.longitude
    });
    this.setState(prevState => ({
      showButton: !prevState.showButton
    }));
  };

  handleLocation = location => {
    this.setState({ location, showButton: true });
  };

  render() {
    const { showDetails, showButton, place } = this.state;
    const { places } = this.props;

    let latitude = 0;
    let longitude = 0;

    if (places.places && places && places.places.length !== 0) {
      latitude = parseFloat(places.places[0].latitude_decimal);
      longitude = parseFloat(places.places[0].longitude_decimal);
    }

    return (
      <View style={styles.container}>
        <MapsComponent
          latitude={latitude}
          longitude={longitude}
          places={places.places || []}
          handleLocation={this.handleLocation}
          handleMarker={this.handleModal}
        />

        {showButton && <NewPoint handleAdd={this.handleAdd} />}

        {showDetails && (
          <Modal style={{ flex: 1 }}>
            {!place.natureza.includes("tubular") ? (
              <Hollow item={place} handleModal={this.handleModal} />
            ) : (
              <Tubular item={place} handleModal={this.handleModal} />
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

const mapDispatchToProps = {
  addNewPlace: placesService.addNewPlace
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
