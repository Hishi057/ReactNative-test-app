import React, {useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet, TextInput, FlatList} from 'react-native';
import Title from '../components/Title'
import {supabase} from '../lib/supabase'

const MESSAGE_LIMIT = 10;

const SupabaseTutorial = ({ navigation }) => {
    const [sendMessage, setSendMessage] = useState('test');
    const [myNickName, setmyNickName] = useState('');
    const [messages, setMessages] = useState([]);
    
    const send = async () =>{
        if (!sendMessage) return;
        const { data, error } = await supabase.from('chat').insert({
            message: sendMessage,
            nickName: myNickName,
            avatarURL: 'noavatarURL',
          });
          
          console.log('---送信結果---');
          console.log('data:', data);
          console.log('error:', JSON.stringify(error, null, 2));
          
        if(!error){
            console.log("送信に成功");
            setSendMessage('');

            // メッセージ数の上限を超えたら消去
            if(messages.length >= MESSAGE_LIMIT){
              const ids = messages.slice(0, messages.length - MESSAGE_LIMIT).map(msg=> msg.id);
              const {data,error} = await supabase.from('chat').delete().in('id', ids);

              console.log('---消去結果---');
              console.log('data:', data);
              console.log('error:', JSON.stringify(error, null, 2));
            }

            fetch();
        }
    }
    
    const fetch = async () => {
        console.log('メッセージを取得します');
        const {data, error} = await supabase.from('chat').select('*');
        if (!error) setMessages(data);
    };

    useEffect(() => {
        fetch();
        console.log("- HELLO CHAT APP- ");
    }, []);

    return (
    <View style={styles.container}>
      <Title title='Supabaseチュートリアル'/>
      <Text>匿名チャット</Text>

      <View style={{flexDirection: 'row'}}>
        <Text>NAME: </Text>
        <TextInput
        style= {styles.input}
        placeholder='Input Your Name'
        value= {myNickName}
        onChangeText={(newText) => setmyNickName(newText)}
        />
      </View>

      <View style = {{height: 1, backgroundColor: '#ccc', width: '90%', marginVertical: 10}}/>

      <TextInput
      style = {styles.input}
      placeholder = 'Here text'
      value={sendMessage}
      onChangeText={(newText) => setSendMessage(newText)}
      />

      <Button 
      title = "送信"
      onPress={() => send()}
      />

      <FlatList
      data = {[...messages].reverse()}
      keyExtractor={(item) => item.id.toString()}
      renderItem= {({item}) => (
        <View>
            <Text>{item.nickName} : {item.message}</Text>
        </View>
      )}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, marginBottom: 20 },
  input: {
    backgroundColor: '#CCC', // ← 好きな色コードに変えてOK
    padding: 1,
    borderRadius: 1,
    width: 256,
    marginVertical: 0,
  }
});

export default SupabaseTutorial;