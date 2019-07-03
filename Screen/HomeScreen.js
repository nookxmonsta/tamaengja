import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default class HomeScreen extends Component {
    onPress1 = () => {
        const { navigate } = this.props.navigation
        let { name } = this.props.navigation.state.params
        navigate('Feed' , { name })
        
    }
    render() {
        let { name } = this.props.navigation.state.params
        return (
            <ScrollView style={{ marginTop: 20 }}>
                <View style={styles.container}>
                    <View style={styles.sizeText}>
                        <Text>{"\n"}Welcome {name}</Text>
                    </View>
                    
                    <View>
                        <Text>Please select Bangkok districts</Text>
                        <View style={styles.proBut}><Button
                            title="Bang Bon"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Bang Kapi"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Bang Khae"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Bang Khen"
                            color='#000000'
                            onPress={this.onPress1}
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Bang Kho Laem"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Bang Na"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Bang Phlat"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Bang Rak"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Bang Sue"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Bang khun Thian"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Bangkok Noi"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Bangkok Yai"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Bueng Kum"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Chatuchak"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Chom Thong"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Din Daeng"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Don Mueang"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Dusit"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Hhlong Toei"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Huai Khwang"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Khan Na Yao"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Khlong Sam Wa"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Khlong San"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Lak Si"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Lat Krabang"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Lat Phrao"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Min Buri"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Nong Chok"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Nong Kheam"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Pathum Wan"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Phasi Charoen"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Phaya Thai"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Phra Khanong"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Phra Nakhon"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Pom Prap Sattru Phai"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Prawet"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Rat Burana"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Ratchathewi"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Sai Mai"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Samphanthawong"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Saphan Sung"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Sathon"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Suan Luang"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Taling Chan"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Thawi Watthana"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Thon Buri"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Thung khru"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Wang Thonglang"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Watthana"
                            color='#000000'
                        /></View>
                        <View style={styles.proBut}><Button
                            title="Yan Nawa"
                            color='#000000'
                        /></View>
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
        borderRadius: 15,
        borderWidth: 1,
        margin: 18,
        height: 35,
        width: 150,
        fontStyle: 'normal',
        textAlign: "center",
        marginBottom: 10

    },
    sizeText: {
        fontSize: 25
    }
});
