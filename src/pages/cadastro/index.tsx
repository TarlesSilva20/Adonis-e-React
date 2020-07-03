
  import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Container, Logo, Imput, Button, Button2, ButtonText, ButtonText2 } from './styled';
import AsyncStorage from '@react-native-community/async-storage';


  export default class Cadastro extends Component {

   /* handleEmailChange = (email) => {
        this.setState({email})
    }
    handlePasswordChange = (password) =>{
      this.setState({password})
    }
    handleLCadPress = () => {
      this.props.navigation.navigate('Cadastro')
    }
    handleLoginPress = async() =>{
      if(this.state.email.lenght ==0 || this.state.password.lenght ===0){
        this.setState({error: 'Usuário ou Senha em branco, por favor preencha os campos para Login!'})
      } else{
        const response = await api.post('token', {
          email: this.state.email,
          password: this.state.password
        })
        await AsyncStorage.setItem('@iMob.token', response.data.token)

        const resetAct = DrawerActions.reser({
          index: 0,
          actions: [
            NavigationActions.navigate({routName})
          ]
        })

      }
    }*/
    state ={
          username: "",
          email: "",
          password: ""
    }
    handleLCad = async ()=>{
      
          try{
            await AsyncStorage.setItem('username', this.state.username),
            await AsyncStorage.setItem('email', this.state.email),
            await AsyncStorage.setItem('password', this.state.password)
            Alert.alert(this.state.username +' cadastrado com sucesso!')
            /*if( this.state.val ==null ||  this.state.val ==null ||  this.state.val==null){
              Alert.alert("Algum campo vazio, por favor preencer corretamente!")
            } else{
            }*/
            } catch(e){
              Alert.alert("Ops")
              }
          }
      
    render(){
      return(
        <Container>
          <Logo source={require("../../../src/logo2.png")}/>
          <Imput 
            placeholder="Nome completo"
           // value={this.state.username}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={()=>{}}
            
          ></Imput>
          <Imput 
            placeholder="Email"
           // value={this.state.email}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={()=>{}}
            
          ></Imput>
          <Imput 
            placeholder="Senha"
          //  value={this.state.password}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={()=>{}}

          ></Imput>
          
            <Button2
            onPress={this.handleLCad}>
              <ButtonText2>Cadastrar-se</ButtonText2>
          </Button2>
          
          
        </Container>
      )
    }
  }


