import React from 'react';
import { StyleSheet, Text, View, Modal, Button, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import RoundButton from '../components/RoundButton';

class AddCityModal extends React.Component {
    state = {
        text: ""
    }
    handleChangeText = (value) => {
        this.setState({
            text: value
        })
    }
    render() {
        return (
            <Modal visible={this.props.visible} animationType={'slide'}>
                <TouchableWithoutFeedback onPress={() => {
                    Keyboard.dismiss()
                }}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Inserimento città</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput value={this.state.text}
                                onChangeText={this.handleChangeText}
                                style={styles.input}
                                placeholder={'Aggiunti città'} />
                            <RoundButton onPress={this.props.addCity.bind(this, this.state.text)} plusButton={true} />
                        </View>
                        <RoundButton style={styles.roundButton} onPress={this.props.closeModal} plusButton={false} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '70%',
        borderBottomWidth: 1,
        paddingVertical: 15
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 20
    },
    roundButton: {
        position: 'absolute',
        bottom: 50,
    }
});

export default AddCityModal;