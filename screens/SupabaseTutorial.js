import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Title from '../components/Title'

const SupabaseTutorial = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title title='Supabaseチュートリアル'/>
      <Text>共有メモ帳</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, marginBottom: 20 },
});

export default SupabaseTutorial;