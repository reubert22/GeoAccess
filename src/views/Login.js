//@flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';
import * as placesService from '../services/Places';

/* Images */
import LogoImg from '../imgs/logo.png';
import HomeScreen from './Home';

class LoginScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      timePassed: false
    };
  }

  componentDidMount() {
    this.props.savePlaces();
    this.props.getPlaces();
    setTimeout(() => {
      this.setTimePassed();
    }, 2000);
  }

  setTimePassed() {
    this.setState({ timePassed: true });
  }

  render() {
    const { timePassed } = this.state;
    if (timePassed) {
      return <HomeScreen />;
    }
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <View style={{ height: 100, width: 100, zIndex: 9 }}>
          <Image
            source={LogoImg}
            style={{ height: 100, width: 100, opacity: 1 }}
          />
        </View>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#000' }}>
          GeoAccess
        </Text>
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
)(LoginScreen);
