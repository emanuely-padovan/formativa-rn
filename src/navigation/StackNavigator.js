// NOME:  Emanuely Macedo Padovan
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DetalheScreen from "../screens/DetalheScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
      <Stack.Screen name="Detalhe" component={DetalheScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}
