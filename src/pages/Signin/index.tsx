import React from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import { useAuth } from '../../contexts/auth';
import { Container, Logo, Imput, Button, Button2, ButtonText, ButtonText2 } from './styles';
import cad from '../cadastro'
import { useNavigation, NavigationContainer } from '@react-navigation/native';
//import { styles } from './styles';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  async function handleSignIn() {
    signIn();
  }
  function cad(){
      
  }

  return (
    
    <Container>
    <Logo source={require("../../../src/log.png")}/>
    <Imput 
      placeholder="Email"
     // value={this.state.email||""}
      toCapitalize='none'
      autoCorrect={false}
      //onChangeText={}
      
    ></Imput>
    <Imput 
      placeholder="Senha"
      //value={this.state.password||""}
      autoCapitalize='none'
      autoCorrect={false}
      //onChangeText={this.handlePasswordChange}

    ></Imput>
    
    <Button
      onPress={handleSignIn}>
        <ButtonText>Fazer Login</ButtonText>
    </Button>
      <Button2
      onPress={()=>{}}>
        <ButtonText2>Cadastrar-se</ButtonText2>
    </Button2>
    
  </Container>
    /*<View style={styles.container}>
      <Text style={styles.textLogin}>Login</Text>
      <TextInput placeholder="Insert e-mail..." style={styles.input} />
      <TextInput placeholder="Insert password..." style={styles.input} />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
    </View>*/
  );
};

export default SignIn;
