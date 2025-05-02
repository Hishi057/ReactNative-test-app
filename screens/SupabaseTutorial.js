import React, {useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet, TextInput, FlatList} from 'react-native';
import Title from '../components/Title'
import {supabase} from '../lib/supabase'



const SupabaseTutorial = ({ navigation }) => {
    const [sendMessage, setSendMessage] = useState('test');
    const [messages, setMessages] = useState([]);
    
    const send = async () =>{
        if (!sendMessage) return;
        const { data, error } = await supabase.from('chat').insert({
            message: sendMessage,
            nickName: 'noName',
            avatarURL: 'noavatarURL'
          });
          
          console.log('---送信結果---');
          console.log('送信するメッセージ', sendMessage)
          console.log('data:', data);
          console.log('error:', JSON.stringify(error, null, 2));
          
        if(!error){
            console.log("送信に成功");
            setSendMessage('');
            fetch();
        }
    }
    
    const fetch = async () => {
        console.log('メッセージを取得します');
        const {data, error} = await supabase.from('chat').select('*');
        console.log('取得するメッセージ: ', data);
        if (!error) setMessages(data);
    };

    useEffect(() => {
      console.log("HELLO CHAT APP");
      console.log("Supabase URL: ", supabase.restUrl);
    
      const testAccess = async () => {
        try {
          const { data, error } = await supabase.from('chat').select('*');
          console.log('📥 取得データ:', data);
          console.log('⚠️ エラー:', error);
        } catch (e) {
          console.error('🚨 例外:', e);
        }
      };
    
      testAccess();
    }, []);

    return (
    <View style={styles.container}>
      <Title title='Supabaseチュートリアル'/>
      <Text>匿名チャット</Text>

      <TextInput
      placeholder = 'Here text'
      value={sendMessage}
      onChangeText={(newText) => setSendMessage(newText)}
      />

      <Button 
      title = "送信"
      onPress={() => send()}
      />

      <FlatList
      data = {messages}
      keyExtractor={(item) => item.id.toString()}
      renderItem= {({item}) => (
        <View>
            <Text>{item.message}</Text>
        </View>
      )}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, marginBottom: 20 },
});

export default SupabaseTutorial;