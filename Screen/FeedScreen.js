import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class FeedScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Festival</Text>
                <Text>in Bangkok</Text>
                <View>
                    <Text>
                        Post1
                    </Text>
                    <Text>
                        Post2
                    </Text>
                    <Text>
                        Post3
                    </Text>
                    <Text>Name of someone</Text>
                    <TextInput/>
                    <Button 
                        title="Post"    
                    />
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
});
