import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

type Props = {
    title: string;
    fontSize?: number;
};

const Title = ({ title, fontSize}: Props) => {
    return (
        <View>
            <Text style={[styles.text, {fontSize: (fontSize ?? 30)}]}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
    }
});

export default Title