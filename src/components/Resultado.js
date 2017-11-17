import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

const cara = require('../imgs/moeda_cara.png');
const coroa = require('../imgs/moeda_coroa.png');

export default class Resultado extends Component {

    constructor(props) {
        super(props);
        this.state = { resultado: '' }
    }

    componentWillMount() {
        const numAleatorio = Math.floor(Math.random() * 2)
        let caraOuCoroa = '';

        (numAleatorio === 0) ? caraOuCoroa = 'cara' : caraOuCoroa = 'coroa'
        this.setState({ resultado: caraOuCoroa })
    }

    render() {
        if (this.state.resultado === 'cara') {
            return (
                <View style={styles.resultado}>
                    <Image source={cara} />
                </View>
            );
        } else {
            return (
                <View style={styles.resultado}>
                    <Image source={coroa} />
                </View>
            );

        }
    }
}

const styles = StyleSheet.create({
    resultado: {
        backgroundColor: '#61BD8C',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})
