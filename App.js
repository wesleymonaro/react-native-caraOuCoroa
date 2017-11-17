import React, { Component } from 'react';
import { PropTypes } from 'prop-types'

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene } from "react-native-router-flux";

import Principal from './src/components/Principal'
import SobreJogo from './src/components/SobreJogo'
import OutrosJogos from './src/components/OutrosJogos'
import Resultado from './src/components/Resultado'


export default class App extends Component<{}> {
  render() {
    return (
      <Router>
        <Scene>
          <Scene key='principal' component={Principal} initial title="Cara ou coroa" />
          <Scene key='sobrejogo' component={SobreJogo} title="Sobre o Jogo" />
          <Scene key='outrosjogos' component={OutrosJogos} title="Outros Jogos" />
          <Scene key='resultado' component={Resultado} title="Resultado" />
        </Scene>
      </Router >
    );
  }
}

// Component.propTypes = {
//   text: PropTypes.string.isRequired,
// };
