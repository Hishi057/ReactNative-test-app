import React from 'react'
import { StyleSheet, TextInput} from 'react-native'

type Props = {
    placeholder: string;
    value: string;
    onChangeText: () => void;
};

const InputField = ({placeholder, value, onChangeText} : Props) => {
    return(
      <TextInput
      style = {styles.input}
      placeholder = {placeholder}
      value={value}
      onChangeText={onChangeText}
      />
    );
}


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

export default InputField;