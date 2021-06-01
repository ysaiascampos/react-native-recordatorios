import React from 'react';
import { StyleSheet,View , Text } from 'react-native';
const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    item: {
        fontSize: 18,
        height: 60,
        padding: 15,
    }
})

export default ({ item }) => {
    return <View style={styles.container}>
        <Text style={styles.item}>{item.title}</Text>
    </View>
}