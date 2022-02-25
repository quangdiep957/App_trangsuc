import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './screens/login.js';
import register from './screens/register.js';
import trangchu from './screens/trangchu.js';
import chitietsanpham from './screens/chitietsanpham.js';
import lienhe from './screens/lienhe.js';
import watch from './screens/watch.js';
import earring from './screens/earring.js';
import ring from './screens/ring.js';
import cart from './screens/cart.js';
import success from './screens/success.js';
import user from './screens/user.js';
import xacnhandonhang from './screens/xacnhandonhang.js';
import gioithieu from './screens/gioithieu.js';
import infor from './screens/infor.js';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}initialRouteName="login">
      <Stack.Screen name='register' component={register} />
      <Stack.Screen name='lienhe' component={lienhe} />
      <Stack.Screen name='login' component={login} />
      <Stack.Screen name='trangchu' component={trangchu} />
      <Stack.Screen name='chitietsanpham' component={chitietsanpham} />
      <Stack.Screen name='watch' component={watch} />
      <Stack.Screen name='earring' component={earring} />
      <Stack.Screen name='ring' component={ring} />
      <Stack.Screen name='cart' component={cart} />
      <Stack.Screen name='success' component={success} />
      <Stack.Screen name='user' component={user} />
      <Stack.Screen name='infor' component={infor} />
      <Stack.Screen name='gioithieu' component={gioithieu} />
 
      <Stack.Screen name='xacnhandonhang' component={xacnhandonhang} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;