import React from 'react';
import { StyleSheet,View , TextInput } from 'react-native';
const styles = StyleSheet.create({
    view: {
        height: 50,
        margin: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 4,
        padding: 15,
        fontSize: 18,
    },
})

export default ({placeholder, onChangeText, value}) => {
    return <View style={styles.view}>
            <TextInput 
                onChangeText={onChangeText} 
                style={styles.input} 
                placeholder={placeholder}
                value={value}
            />
          </View> 
}