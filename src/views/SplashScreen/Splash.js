import React, { PureComponent } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

import * as placesService from '../../services/Places';
import LogoImg from '../../imgs/logo.png';
import HomeScreen from '../HomeScreen/Home';

import { styles } from './style';

class SplashScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      timePassed: false
    };
  }

  componentDidMount() {
    const { savePlaces, getPlaces } = this.props;
    savePlaces();
    getPlaces();
    setTimeout(() => this.setState({ timePassed: true }), 2000);
  }

  render() {
    const { timePassed } = this.state;
    if (timePassed) {
      return <HomeScreen />;
    }
    return (
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image source={LogoImg} style={styles.image} />
        </View>
        <Text style={styles.text}>GeoAccess</Text>
      </View>
    );
  }
}

const mapDispatchToProps = {
  savePlaces: placesService.savePlaces,
  getPlaces: placesService.getPlaces
};

export default connect(
  null,
  mapDispatchToProps
)(SplashScreen);
