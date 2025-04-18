import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const images = [
    require('../unipictures/uni1.png'),
    require('../unipictures/uni2.png'),
    require('../unipictures/uni3.png'),
    require('../unipictures/uni4.png'),
    require('../unipictures/uni5.png'),
    require('../unipictures/uni6.png'),
    require('../unipictures/uni7.png'),
]

const UniScreen = ({ navigation }) => {
  const [id, setId] = useState(1)

  return (
    <View style={styles.container}>
      <Image 
      style={styles.image}
      source={images[id]}
      />
      <Button
      title = 'ウニお願いします'
      onPress = {() => setId(Math.floor(Math.random() * images.length))}
      />
    </View>
  );
};

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

export default UniScreen;