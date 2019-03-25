import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { PieChart } from 'react-native-svg-charts';
import { WebBrowser } from 'expo';

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';

import { MonoText } from '../components/StyledText';
import DataHoraScreen from '../screens/DataHora';
import EmpresaScreen from '../screens/Empresa';

import Dinheiro from '../screens/Dinheiro';
import Cartao from '../screens/Cartao';
import Prazo from '../screens/Prazo';

import TotalGeralScreen from '../screens/TotalGeral';
import TotalDinheiroScreen from '../screens/TotalDinheiro';
import TotalCartaoScreen from '../screens/TotalCartao';
import TotalPrazoScreen from '../screens/TotalPrazo';

const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

const randomColor = () =>
  ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7);

const pieData = data
  .filter(value => value > 0)
  .map((value, index) => ({
    value,
    svg: {
      fill: randomColor(),
      onPress: () => console.log('press', index),
    },
    key: `pie-${index}`,
  }));

class NomeEmpresa extends React.Component {
  render() {
    return (
      <Card style={styles.containerStyle}>
        <EmpresaScreen />
      </Card>
    );
  }
}

class Grafico extends React.PureComponent {
  render() {
    return <PieChart style={{ height: 170 }} data={pieData} />;
  }
}

class TotalDinheiro extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Dinheiro')}>
          <Card style={styles.containerStyle}>
            <TotalDinheiroScreen />
          </Card>
        </TouchableOpacity>
      </View>
    );
  }
}

class TotalCartao extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this._onPressButton}>
          <Card style={styles.containerStyle}>
            <TotalCartaoScreen />
          </Card>
        </TouchableOpacity>
      </View>
    );
  }
}

class TotalPrazo extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this._onPressButton}>
          <Card style={styles.containerStyle}>
            <TotalPrazoScreen />
          </Card>
        </TouchableOpacity>
      </View>
    );
  }
}

class TotalGeral extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this._onPressButton}>
          <Card style={styles.containerStyle}>
            <TotalGeralScreen />
          </Card>
        </TouchableOpacity>
      </View>
    );
  }
}

const renderizarTela = () => {
  return (
    <View style={styles.container}>
      {[
        <NomeEmpresa />,
        <Grafico />,
        <TotalDinheiro />,
        <TotalCartao />,
        <TotalPrazo />,
        <TotalGeral />,
      ]}
    </View>
  );
};

export default class HomeScreen extends React.PureComponent {
  static navigationOptions = {
    header: null,
  };
  render() {
    return renderizarTela();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'white',
    width: null,
    height: null,
  },
  containerStyle: {
    backgroundColor: 'white',
    width: 300,
    height: 50,
    //borderColor: 0,
  },
});
