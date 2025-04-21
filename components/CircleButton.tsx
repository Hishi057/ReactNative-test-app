import React from 'react'
import { Pressable, StyleSheet, Text, TouchableOpacity } from 'react-native'

type Props = {
    label?: string;
    radius?: number;
    onPress: () => void;
};

const CircleButton = ({label, radius = 20, onPress} : Props) => {
    return(
        <TouchableOpacity onPress={onPress} style={[styles.button, {width: radius, height: radius, borderRadius: radius/ 2}]}>
            <Text style={styles.text}> {label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#afeeee',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 20
    }
})
export default CircleButton