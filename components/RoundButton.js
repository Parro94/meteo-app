import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const RoundButton = (props) => {
    const plusImage = require('../assets/plus-button.png');
    const isPlus = props.plusButton
    if(isPlus){
        return(
            <TouchableOpacity onPress={props.onPress}>
                <Image source={plusImage} style={styles.plusImage}></Image>
            </TouchableOpacity>
        )
    }else{
        return(
            <TouchableOpacity onPress={props.onPress}>
                <Image source={plusImage} style={styles.removeImage}></Image>
            </TouchableOpacity>
        )  
    }
}

const styles = StyleSheet.create({
    container: {
            width: 50,
            height: 50,
            backgroundColor: 'green',
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
    plusImage:{
        marginTop: 30,
        width: 30,
        height: 30,
        marginLeft: 20,
    },
    removeImage:{
        marginTop: 30,
        width: 30,
        height: 30,
        transform: [{ rotate: '45deg'}]
    }
  });

export default RoundButton