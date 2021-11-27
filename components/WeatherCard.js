import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const WeatherCard = (props) => {
    const goToCity = () => {
        props.navigation.navigate('City', props)
    }
    return(
        <TouchableOpacity onPress={goToCity} style={styles.card}>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    card: {
            height: 60,
            width: '80%',
            backgroundColor: 'white',
            shadowColor: 'black',
            shadowRadius: 2,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 5, //server per le ombreggiautre android
        },
    title:{
        color: 'black',
        fontSize: 22,
    },
  });

export default WeatherCard