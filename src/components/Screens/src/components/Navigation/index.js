import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'; 1  
import ChatScreen from "../../../ChatScreen";
import MainTabNavigator from "./MainTabNavigator";
import ContactsScreen from "../../../ContactsScreen";

const Stack = createStackNavigator()
const Navigator = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: 'whitesmoke'}}} >
        <Stack.Screen name={'Home'} components={MainTabNavigator} options={{headerShown: false}} />
        <Stack.Screen name={'Chat'} components={ChatScreen} />
        <Stack.Screen name={'Contacts'} components={ContactsScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default Navigator;
