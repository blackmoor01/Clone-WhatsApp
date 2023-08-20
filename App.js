import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View} from 'react-native';
import Navigator from "./src/components/Screens/src/components/Navigation";


export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />

      <StatusBar style={auto} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center'
  },
});
