import React, { } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, Touchable, TouchableHighlight } from 'react-native';
import WeatherCard from '../components/WeatherCard';
import AddCityModal from '../components/AddCityModal';
import RoundButton from '../components/RoundButton';
import {Ionicons} from '@expo/vector-icons'

export default class App extends React.Component {
  addCity = (city) => {
    if (city.trim() == '') {
      alert('Inserire città')
      return
    }
    this.setState(state => {
      return {
        cities: state.cities.concat(city)
      }
    }, this.controlModal())
  }
  state = {
    cities: ['Roma', 'Milano', 'Firenze'],
    visible: false,
  }
  controlModal = () => {
    this.setState({
      visible: !this.state.visible,
    })
  }
  render() {
    const cities = this.state.cities.map((city, index) => {
      return <WeatherCard navigation={this.props.navigation} key={index} title={city} />
    })

    return (
      <View style={styles.container}>
        <AddCityModal addCity={this.addCity} visible={this.state.visible} closeModal={this.controlModal} />
        <ScrollView contentContainerStyle={styles.cardContainer}>
          {cities}
          <RoundButton onPress={this.controlModal} plusButton={true} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    alignItems: 'center',
    marginTop: 20,
    flex: 1,
  }
});
