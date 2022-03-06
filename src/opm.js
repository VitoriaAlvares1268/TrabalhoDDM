import * as React from 'react';
import {Text,TouchableOpacity, TextInput, View, StyleSheet, StatusBar} from 'react-native';
import MeuEstilo from '../src/meuestilo';

export default class App extends React.Component{

  state =  {
         valor1: 0.0,
         valor2: 0.0,
         resultado: 0.0,
  }
  


  atualizavalor1 = (number)=>{
    this.setState({valor1:number})
    
  }

  atualizavalor2 = (number)=>{
    this.setState({valor2:number})
  }

  soma(){
    this.state.resultado= parseFloat(this.state.valor1) + parseFloat(this.state.valor2);
    alert(this.state.resultado);
  }

  divisao(){
    this.state.resultado= parseFloat(this.state.valor1) / parseFloat(this.state.valor2);
    alert(this.state.resultado);
  }

  Multiplicacao(){

    this.state.resultado= parseFloat(this.state.valor1) * parseFloat(this.state.valor2);
    alert(this.state.resultado);
  }
  Subtracao(){
    this.state.resultado= parseFloat(this.state.valor1) - parseFloat(this.state.valor2);
    alert(this.state.resultado);
  }


  render(){
    return(
      <View style={MeuEstilo.container}>
        <StatusBar backgroundColor="black"/>
        <TextInput style={MeuEstilo.input} underlineColorAndroid="transparent"
         placeholder="digite o valor 1 "
         placeholderTextColor="black"
         autoCapitalize="none"
         onChangeText= {this.atualizavalor1}
         keyboardType='numeric'/>

<TextInput style={MeuEstilo.input} underlineColorAndroid="transparent"
         placeholder="digite o valor 2 "
         placeholderTextColor="black"
         autoCapitalize="none"
         onChangeText= {this.atualizavalor2}
         keyboardType='numeric'/>


         <TouchableOpacity style={MeuEstilo.submitButton} onPress={()=>this.soma(this.state.valor1,this.state.valor2,this.state.resultado)}
    
      >
         <Text style={MeuEstilo.submitButton}>Somar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={MeuEstilo.submitButton} onPress={()=>this.Subtracao(this.state.valor1,this.state.valor2,this.state.resultado)}
      >
        <Text style={MeuEstilo.submitButton}>Subtração</Text>
      </TouchableOpacity>

      <TouchableOpacity style={MeuEstilo.submitButton} onPress={()=>this.Multiplicacao(this.state.valor1,this.state.valor2,this.state.resultado)}
      >
        <Text style={MeuEstilo.submitButton}>Multiplicação</Text>
      </TouchableOpacity>
      <TouchableOpacity style={MeuEstilo.submitButton} onPress={()=>this.divisao(this.state.valor1,this.state.valor2, this.state.resultado)}
      >
        <Text style={MeuEstilo.submitButton}>Divisão</Text>
      </TouchableOpacity>
      </View>
      
    )
    
  }
}