import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import cad from '../pages/cadastro';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Cadastro" component={cad} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
