import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Title from '../components/Title'

const TitleScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title title='タイトル画面'/>

      <Button
        title="TestScreenへ移動"
        onPress={() => navigation.navigate('TestScreen')}
      />
      <Button
        title="ウニ"
        onPress={() => navigation.navigate('UniScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, marginBottom: 20 },
});

export default TitleScreen;