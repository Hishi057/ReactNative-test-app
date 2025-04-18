import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TitleScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>これはホーム画面です！</Text>
      <Button
        title="TestScreenへ移動"
        onPress={() => navigation.navigate('TestScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, marginBottom: 20 },
});

export default TitleScreen;