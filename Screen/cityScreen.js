import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class HomeScreen extends Component {
    onPress1 = () => {
        const { navigate } = this.props.navigation
        navigate('Feed')
    }
    render() {
        let { name } = this.props.navigation.state.params
        return (
            <View style={styles.container}>
                <View>
                    <Text>Welcome </Text>
                </View>
                <View style={styles.content}>
                    <Text>{name}</Text>
                    <Button
                        title="Go to Feed"
                        onPress={this.onPress1}
                    />
                </View>
                <View>
                    <Text>Please select Bangkok</Text>
                    <Button
                        title="province1"
                    />
                    <Button
                        title="province2"
                    />
                    <Button
                        title="province3"
                    />
                    <Button
                        title="province4"
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 3
    }
});
