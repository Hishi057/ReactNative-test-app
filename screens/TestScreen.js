import React, { useState, Component } from 'react';
import { 
  Text, 
  View,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  TextInput
} from 'react-native';

const TestScreen = ( {navigation} ) =>{
    const [count, setCount] = useState(100);
    const [text, setText] = useState('');
    
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Hello World</Text>
          <Text>{count}</Text>
    
          {/* Button */}
          <Button
            title="Button"
            onPress={() => setCount(count+1)}
          ></Button>
    
          <TouchableOpacity style={styles.button} onPress={showAlert}>
            <Text style={styles.buttonText}>Custom Button</Text>
          </TouchableOpacity>
    
          {/* TextInput */}
          <TextInput
            placeholder = "ここに入力してください"
            value={text}
            onChangeText={(newText) => setText(newText)}
          />
          <Text>{text}</Text>
    
        </View>
      );
    };
    
    const showAlert = () => {
      Alert.alert("カスタムボタンが押されました");
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0f7fa',
      },
      text: {
        fontSize: 32,
        color: 'red',
        fontWeight: 'bold',
      },
      button: {
        backgroundColor: '#6200ee',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10,
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
      }
    }
    
    )
    
export default TestScreen  