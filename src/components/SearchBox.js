import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBox = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather style={styles.iconStyle} name="search" />
            <TextInput style={styles.inputStyle} 
            placeholder="Search"
            value={term}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop: 10,
        height: 50,
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',

    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    }, 
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15,
    }
})

export default SearchBox;