import React, {Component} from 'react'
import {Text,TouchableOpacity, TextInput, View} from 'react-native'
import MeuEstilo from '../src/meuestilo';


export default class App extends React.Component{
  state={
      valor1:0.0,
      valor2:0.0,
      resultado:0.0
  }

  atualizaValor1=(number)=>{
      this.setState({valor1:number})
  }
  atualizaValor2=(number)=>{
      this.setState({valor2:number})
  }
  

  Imc=(valor1, valor2, resultado)=>{
    
     resultado=parseFloat(valor1) / (parseFloat(valor2) * parseFloat(valor2));

     if (resultado<=18 ){
      alert(resultado+' Abaixo do peso!') 
     }else   
   
      alert('Valor 1 digitado: ' + valor1 + '\n Valor 2 Digitado: ' + valor2 +
      '\n Resultado: '+ resultado);

      if (resultado > 18 && resultado < 30 ){
        alert(resultado+' Peso normal') 
      }else
      alert('Valor 1 digitado: ' + valor1 + '\n Valor 2 Digitado: ' + valor2 +
      '\n Resultado: '+ resultado);
      if (resultado>=30 ){
        alert(resultado+' Acima do peso!') 
       }else   
       alert('Valor 1 digitado: ' + valor1 + '\n Valor 2 Digitado: ' + valor2 +
      '\n Resultado: '+ resultado);

  }

  render(){
      return(
          <View style={MeuEstilo.container}>
              <TextInput style={MeuEstilo.input} underlineColorAndroid="transparent"
              placeholder="Digite o seu peso"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={this.atualizaValor1}
              keyboardType='numeric' />

              <TextInput style={MeuEstilo.input} underlineColorAndroid="transparent"
              placeholder="Digite a sua altura"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={this.atualizaValor2}
              keyboardType='numeric' />

              <TouchableOpacity style={MeuEstilo.submitButton}
              onPress={
                  ()=>this.Imc(this.state.valor1, this.state.valor2,this.state.valor2, this.state.resultado)
              }>
                  <Text style={MeuEstilo.submitButtonText}>Calcular IMC</Text>
              </TouchableOpacity>
          </View>
      )
  }
}