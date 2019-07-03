import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import firebase, { firestore } from './firebase'


const Postin = (props) => {
    return (
        <View style={styles.postBut}>
            <Text key={props.i}>
                {props.post}
            </Text>
        </View>
    )
}

export default class FeedScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            post: "",
            myPosto: []
        }

    }


    componentWillMount() {

        let posts = []

        firestore.collection("feeds").doc('bangkok').collection('BangKhen').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    if (doc.data().title) {
                        console.log(doc.data().title.post);
                        let post = doc.data().title.post
                        posts = [post, ...posts]
                    }
                })
                this.setState({
                    myPosto: posts
                })

            })

        // .then(snapshot => {
        //     snapshot
        //       .docs
        //       .forEach(doc => {
        //         console.log(JSON.parse(doc._document.data.toString()))
        //       });
        //   });

    }

    onPost = () => {
        let { post, myPosto } = this.state;

        firestore.collection("feeds").doc('bangkok').collection('BangKhen').add({
            title: { post },
        })

        this.setState({
            myPosto: [post, ...myPosto],
            post: ""
        })

    }

    render() {
        let myPosto = this.state.myPosto
        
        

        return (
            <View style={styles.container}>

                <View style={{ flex: 80, marginTop: 20 }}>

                    <View style={{marginLeft: 20,marginTop:5}}>
                        <Text style={styles.textTitle} >Festival</Text>
                    </View>
                    <View style={{marginLeft: 20}}>
                        <Text style={styles.subTitle}>in Bang Khen</Text>
                    </View>
                    <ScrollView>
                        <View>
                            {
                                myPosto.map((post, index) => {
                                    return (<Postin post={post} key={index} i={index} />)
                                })
                            }
                        </View>
                    </ScrollView>
                </View>
                <View style={"height: 80%"}>
                    <View style={styles.postbg}>
                        <TextInput
                            style={styles.PostInput}
                            onChangeText={(text) => this.setState({ post: text })}
                            value={this.state.post}
                        />
                        <View style={{alignSelf: 'flex-end'}}>
                            <View style={styles.butrealPost}>
                                <Button style={{ justifyContent: 'flex-end' }}
                                    title="Post"
                                    onPress={this.onPost}
                                    value={this.post}
                                    color= "#000000"
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View >


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

        justifyContent: 'center',
    },

    PostInput: {
        borderRadius: 10,
        borderWidth: 1,
        margin: 12,
        marginTop: 20,
        height: 100,
        width: 350,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#ffffff'
    },
    textTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        

    },
    subTitle: {
        fontSize: 25,
        lineHeight: 32,
        textAlign: 'justify',
        

    },
    show: {
        display: 'flex',
        flex: 1
    },
    postBut: {
        borderRadius: 8,
        borderWidth: 2,
        margin: 12,
        marginBottom: 2,
        marginTop: 4,
        height: 80,
        width: 350,
    },
    postbg: {
        backgroundColor: '#b0c4de',
    },
    butrealPost: {
        borderRadius: 10,
        borderWidth: 1,
        margin: 20,
        height: 40,
        width: 80,
        backgroundColor: '#add8e6',
        borderColor: '#ffffff',
    },
    textPost: {
        marginLeft: 20,
        fontSize: 20
    }
});
