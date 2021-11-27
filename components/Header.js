import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = (props) => (
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        backgroundColor: 'darkblue',
        alignItems: 'center',
        paddingTop: 40,
        justifyContent: 'center',
        },
    title:{
        color: 'white',
        fontSize: 22,

    },
  });

export default Header