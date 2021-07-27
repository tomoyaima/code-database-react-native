// expo install react-native-webview
import React from 'react';
import { StyleSheet,View} from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={styles.container}>
      <WebView source={{uri: 'https://code-database.com/'}}/>
      {/* <WebView source={{uri: 'https://www.youtube.com/'}}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:"10%",
  },
});
