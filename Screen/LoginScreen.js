

import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight} from 'react-native';

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


                <View>
                    <Text> {"\n\n"} Username </Text>
                </View>
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
                
                <TouchableHighlight onPress={this.LoginCheck}>
                    <View style={styles.signin}>
                        <Text style={styles.whiteFont}>Sign In</Text>
                    </View>
                </TouchableHighlight>
                {/* <View style={styles.butLog}><Button
                    title="Login"
                    onPress={this.onPress}
                    color='#000000'
                /></View> */}
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
        fontSize: 36,
        fontWeight: 'bold',
    },
    title2: {
        fontSize: 33,
        lineHeight: 32,
        textAlign: 'justify'
    },
    butLog: {
        borderRadius: 10,
        borderWidth: 1,
        margin: 20,
        height: 35,
        width: 80,
        backgroundColor: '#add8e6',
        borderColor: '#ffffff',

    }
});