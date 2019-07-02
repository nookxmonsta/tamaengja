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
                    <Text>Please select Bangkok districts</Text>
                    <Button
                        title="Phra Nakhon"
                    />
                    <Button
                        title="Dusit"
                    />
                    <Button
                        title="Nong Chok"
                    />
                    <Button
                        title="Bang Rak"
                    />
                    <Button
                        title="Bang Khen"
                    />
                    <Button
                        title="Bang Kapi"
                    />
                    <Button
                        title="Pathum Wan"
                    />
                    <Button
                        title="Pom Prap Sattru Phai"
                    />
                    <Button
                        title="Phra Khanong"
                    />
                    <Button
                        title="Min Buri"
                    />
                    <Button
                        title="Lat Krabang"
                    />
                    <Button
                        title="Yan Nawa"
                    />
                    <Button
                        title="Samphanthawong"
                    />
                    <Button
                        title="Phaya Thai"
                    />
                    <Button
                        title="Thon Buri"
                    />
                    <Button
                        title="Bangkok Yai"
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
