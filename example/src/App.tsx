import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import KeyScanner from 'index';

export default function App() {
  const [result, setResult] = React.useState<string | undefined>();

  React.useEffect(() => {
    // KeyScanner.onBarcodeScanner((cb) => setResult(cb && JSON.stringify(cb)));
    KeyScanner.onKeyDownListener((cb) => setResult(cb && JSON.stringify(cb)));
    // KeyScanner.onKeyUpListener((cb) => setResult(cb && JSON.stringify(cb)));
    // KeyScanner.onKeyMultipleListener((cb) => setResult(cb && JSON.stringify(cb)));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
