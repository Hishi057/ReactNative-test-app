import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

type Props = {
    title: string;
};

const Title = ({ title }: Props) => {
    return (
        <View>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 60
    }
});

export default Title