import React from 'react';
import {Button, Text, View} from 'react-native';

const City = (props) => {
    return (
        <View>
            <Text style={{marginTop: 70}}>{props.route.params.title}</Text>
        </View>
    )
}

// <Button title={'torna indietro completamente'} onPress={() => props.navigation.popToTop()} />
// <Button title={'torna indietro'} onPress={() => props.navigation.goBack()} />
// <Button title={'vai a city'} onPress={() => props.navigation.navigate('City', props.route.params)} />
        

export default City;