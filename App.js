import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TextoCentral from './src/components/TextoCentral';
import TelaA from './src/views/TelaA';
import TelaB from './src/views/TelaB';
import TelaC from './src/views/TelaC';
import Routes from './src/routes/index';
 
export default function App() {
  return (
    <View style={styles.container}>
      <Routes/>
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
