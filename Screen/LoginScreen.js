

import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class LoginScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: ""
        }
        this.state = {
            pwd: ""
        }
    }

    onPress = () => {
        const { navigate } = this.props.navigation
        navigate('Home', { name: this.state.name })
    }

    render() {
        return (
            <View style={styles.container}>
              
                <Text style={styles.title}> LIVE </Text>
                <Text style={styles.title2}> Style </Text>
           
              

                <Text> {"\n\n"} Username </Text>
                <TextInput
                    style={styles.textInput}
                    value={this.state.name}
                    onChangeText={(text) => this.setState({ name: text })}
                    placeholder='  Email'
                />
                <Text> Password </Text>
                <TextInput
                    style={styles.textInput}
                    value={this.state.pwd}
                    onChangeText={(text) => this.setState({ pwd: text })}
                    placeholder='  Password'
                    secureTextEntry={true}
                />
                <Button
                    title="Login"
                    onPress={this.onPress}
                />
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
    textInput: {
        borderRadius: 10,
        borderWidth: 1,
        margin: 20,
        height: 25,
        width: 185,
    },
    title: {
        fontSize: 26
    },
    title2: {
        fontSize: 20
    }
    

});