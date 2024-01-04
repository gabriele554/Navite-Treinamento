import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "@screens/Home";
import Login from "@screens/Login";
import Cadastro from "@screens/Cadastro";

const AppStack = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
    <AppStack.Navigator>
        <AppStack.Screen name = 'Login'
        component={Login}
        options={{ header: () => <></>}}/>
        <AppStack.Screen name = 'Cadastro'
        component={Cadastro}
        options={{ header: () => <></>}}/>
        <AppStack.Screen name = 'Home'
        component={Home}
        options={{ header: () => <></>}}/>
    </AppStack.Navigator>
    
);

export default AppRoutes;