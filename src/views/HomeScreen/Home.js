import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import * as placesService from '../../services/Places';
// import Tubular from '../../components/details/Tubular';
// import Hollow from '../../components/details/Hollow';
import MapsComponent from '../../components/Maps';
import NewPoint from '../../components/NewPoint';

import { styles } from './style';
import ChooseModal from '../../components/details/ChooseModal';

class HomeScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false,
      showButton: false,
      option: '1',
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
    const { addNewPlace } = this.props;
    const { location } = this.state;

    addNewPlace({
      ...data,
      latitude: location.latitude,
      longitude: location.longitude
    });
    this.setState(prevState => ({
      showButton: !prevState.showButton
    }));
  };

  handleLocation = location => this.setState({ location, showButton: true });

  handleDismiss = () => {
    this.setState(prevState => ({
      showButton: !prevState.showButton
    }));
  };

  handleGettingFirstLocation = () => {
    const { places } = this.props;
    const lat = parseFloat(places.places[0].latitude_decimal);
    const long = parseFloat(places.places[0].longitude_decimal);
    return { lat, long };
  };

  render() {
    const { showDetails, showButton, place } = this.state;
    const { places } = this.props;

    let latitude = 0;
    let longitude = 0;

    if (places.places && places && places.places.length !== 0) {
      const { lat, long } = this.handleGettingFirstLocation();
      latitude = lat;
      longitude = long;
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

        {showButton && <NewPoint handleAdd={this.handleAdd} handleDismiss={this.handleDismiss} />}

        {/* {showDetails && (
          <Modal style={{ flex: 1 }} onRequestClose={() => {}}>
            {!place.natureza.includes('tubular') ? (
              <Hollow item={place} handleModal={this.handleModal} />
            ) : (
              <Tubular item={place} handleModal={this.handleModal} />
            )}
          </Modal>
        )} */}
        {showDetails && (
          <ChooseModal
            typeModal={place.natureza}
            place={place}
            handleModal={this.handleModal}
            onRequestClose={() => {}}
          />
        )}
      </View>
    );
  }
}

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
