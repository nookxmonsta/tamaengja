import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default class HomeScreen extends Component {
    onPress1 = () => {
        const { navigate } = this.props.navigation
        navigate('Feed')
    }
    render() {
        let { name } = this.props.navigation.state.params
        return (
            <ScrollView style={{marginTop: 20 }}>
                <View style={styles.container}>
                    <View>
                        <Text >Welcome </Text>
                    </View>
                    <View style={styles.content}>
                        <Text>{name}</Text>
                    </View>
                    <View>
                        <Text>Please select Bangkok districts</Text>
                        <Button style={styles.proBut}
                            title="Bang Bon"
                        />
                        <Button 
                            title="Bang Kapi"
                        />
                        <Button 
                            title="Bang Khae"
                        />
                        <Button
                            title="Bang Khen"
                            onPress={this.onPress1}
                        />
                        <Button
                            title="Bang Kho Laem"
                        />
                        <Button
                            title="Bang Na"
                        />
                        <Button
                            title="Bang Phlat"
                        />
                        <Button
                            title="Bang Rak"
                        />
                        <Button
                            title="Bang Sue"
                        />
                        <Button
                            title="Bang khun Thian"
                        />
                        <Button
                            title="Bangkok Noi"
                        />
                        <Button
                            title="Bangkok Yai"
                        />
                        <Button
                            title="Bueng Kum"
                        />
                        <Button
                            title="Chatuchak"
                        />
                        <Button
                            title="Chom Thong"
                        />
                        <Button
                            title="Din Daeng"
                        />
                        <Button
                            title="Don Mueang"
                        />
                        <Button
                            title="Dusit"
                        />
                        <Button
                            title="Hhlong Toei"
                        />
                        <Button
                            title="Huai Khwang"
                        />
                        <Button
                            title="Khan Na Yao"
                        />
                        <Button
                            title="Khlong Sam Wa"
                        />
                        <Button
                            title="Khlong San"
                        />
                        <Button
                            title="Lak Si"
                        />
                        <Button
                            title="Lat Krabang"
                        />
                        <Button
                            title="Lat Phrao"
                        />
                        <Button
                            title="Min Buri"
                        />
                        <Button
                            title="Nong Chok"
                        />
                        <Button
                            title="Nong Kheam"
                        />
                        <Button
                            title="Pathum Wan"
                        />
                        <Button
                            title="Phasi Charoen"
                        />
                        <Button
                            title="Phaya Thai"
                        />
                        <Button
                            title="Phra Khanong"
                        />
                        <Button
                            title="Phra Nakhon"
                        />
                        <Button
                            title="Pom Prap Sattru Phai"
                        />
                        <Button
                            title="Prawet"
                        />
                        <Button
                            title="Rat Burana"
                        />
                        <Button
                            title="Ratchathewi"
                        />
                        <Button
                            title="Sai Mai"
                        />
                        <Button
                            title="Samphanthawong"
                        />
                        <Button
                            title="Saphan Sung"
                        />
                        <Button
                            title="Sathon"
                        />
                        <Button
                            title="Suan Luang"
                        />
                        <Button
                            title="Taling Chan"
                        />
                        <Button
                            title="Thawi Watthana"
                        />
                        <Button
                            title="Thon Buri"
                        />
                        <Button
                            title="Thung khru"
                        />
                        <Button
                            title="Wang Thonglang"
                        />
                        <Button
                            title="Watthana"
                        />
                        <Button
                            title="Yan Nawa"
                        />
                    </View>

                </View>
            </ScrollView>
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
    },
    proBut: {
        borderRadius: 10,
        borderWidth: 1,
        margin: 20,
        height: 25,
        width: 200,
    }
});
