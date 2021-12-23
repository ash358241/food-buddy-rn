import React, { useState } from 'react';
import { Text, View } from 'react-native';
import SearchBox from '../components/SearchBox';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    return (
        <View>
            <SearchBox term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => console.log('Term has submitted')} />
            <Text>Search Screen</Text>
            <Text>{term}</Text>
        </View>
    );
};

export default SearchScreen;