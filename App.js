import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MeuEstilo from './src/meuestilo';
import Fala from './src/fala';
import Operacao from './src/opm';
import Imc from './src/imc';
import Lista from './src/lista';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function FalaScreen({ navigation }) {
  return (
    <Fala></Fala>
  );
}

function OperacaoScreen({ navigation }) {
  return (
    <Operacao></Operacao>
  );
}

function ImcScreen({ navigation }) {
  return (
    <Imc></Imc>
  );
}

function ListaScreen({ navigation }) {
  return (
    <Lista></Lista>
  );
}


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Speak" component={FalaScreen} />
        <Drawer.Screen name="Operação Matematicas" component={OperacaoScreen} />
        <Drawer.Screen name="IMC" component={ImcScreen} />
        <Drawer.Screen name="Flastlist" component={ListaScreen} />


      </Drawer.Navigator>
    </NavigationContainer>
  );
}
