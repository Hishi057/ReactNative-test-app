import React, { useState, Component } from 'react';
import { 
  Text, 
  View,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';
import CircleButton from '../components/CircleButton';


const TestScreen = ( {navigation} ) =>{
    const [count, setCount] = useState(100);
    const [text, setText] = useState('');
    const [data, setData] = useState([
      {id: '1', title:'りんご'},
      {id: '2', title:'みかん'},
      {id: '3', title:'バナナ'}
    ]);
    
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Hello World</Text>
          <Text>{count}</Text>
    
          {/* Button */}
          <Button
            title="Button"
            onPress={() => setCount(count+1)}
          ></Button>
          <View style={[{flexDirection: 'row'}]}>
            <CircleButton onPress={() => setCount(count+1) } radius={50} label="" />
            <CircleButton onPress={() => setCount(count+3) } radius={50} label="" />
          </View>
    
          <TouchableOpacity style={styles.button} onPress={showAlert}>
            <Text style={styles.buttonText}>Custom Button</Text>
          </TouchableOpacity>
    
          {/* TextInput */}
          <TextInput
            placeholder = "ここに入力してください"
            value={text}
            onChangeText={(newText) => 
              setText(newText)
            }
          />
          <Text>{text} を追加しました</Text>

          <Button
          title="Button"
          onPress={() =>
            setData([...data, {id: (data.length + 1)+1, title: text}])
          }></Button>

          <FlatList
            data={data}
            renderItem={({item}) => (
              <View>
                <Text>{item.title}</Text>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ccc' }} />}
            keyExtractor={(item) => item.id}
          />
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