import React, {useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet, Alert} from 'react-native';
import {supabase} from '../lib/supabase'
import InputField from '../components/InputField'


const SignupScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('メールアドレスとパスワードを入力してください');

     return (
       <View style={styles.container}>
         <Text> アカウント登録画面 </Text>
         <Text> {message} </Text>
         <View style = {{height: 1, backgroundColor: '#ccc', width: '90%', marginVertical: 10}}/>

         <Text> Mail address </Text>
         <InputField value = {email} onChangeText={(newtext) => setEmail(newtext)}/>
         <Text> Password </Text>
         <InputField value = {password} onChangeText={(newtext) => setPassword(newtext)}/>
         <Button title = "登録" onPress={() => login(email, password)}/>

       </View>
     );
   };

    const login = async (email, password) => {
        try{
            console.log("ログイン情報登録開始！");
            console.log(email);
            console.log(password);
            const {user, session, error} = await supabase.auth.signUp({
                email: email,
                password: password
            })

            if (error){
                console.log("登録失敗")
            }else{
                Alert.alert('アカウントが登録されました', 'OK')
                navigation.navigate('LoginScreen');
            }
        } catch(e){
            console.log("例外発生", e)
        }
    }
   
   const styles = StyleSheet.create({
       container:{
           flex: 1,
           justifyContent: 'center',
           alignItems: 'center'
       },
       image: {
           width: 200,
           height: 200,
       }
   });

export default SignupScreen;