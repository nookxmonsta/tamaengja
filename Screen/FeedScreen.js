import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Image } from 'react-native';
import firebase, { firestore } from './firebase';
import Message from "../Message/Message";

import { KeyboardAvoidingView } from "react-native";


const Postin = (props) => {
    let post = props.post;
    return (
        <View style={styles.postBut}>
            <View>
                <Text key={props.i} style={styles.textTitle1}>
                    {post.user.name} :
                </Text>
                <Text style={{ marginLeft: 20 }} >
                    {post.text}
                </Text>
            </View>

        </View>
    );
};

export default class FeedScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            post: "",
            myPosto: []
        };

    }


    componentWillMount() {

        let posts = []
        // let posts = [
        //     {
        //         user:{
        //             name:"nook"
        //         },
        //         text:"fuck"
        //     },
        //     {
        //         user:{
        //             name:"mewtwo"
        //         },
        //         text:"sudo"
        //     }
        // ]

        firestore.collection("feeds").doc('bangkok').collection('BangKhen').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    if (doc.data().title) {
                        let post = doc.data().title.post
                        posts = [post, ...posts]
                    }
                });
                this.setState({
                    myPosto: posts
                });

            });

    }

    onPost = () => {
        let { post, myPosto } = this.state;
        let { name } = this.props.navigation.state.params;

        let newPost = {
            title: {
                post: {
                    text: post,
                    user: {
                        name
                    }
                }
            }
        };

        firestore.collection("feeds").doc('bangkok').collection('BangKhen').add(newPost);

        this.setState({
            myPosto: [newPost.title.post, ...myPosto],
            post: ""
        });

    };

    render() {
        let myPosto = this.state.myPosto

        return (
            
                <KeyboardAvoidingView
                    style={styles.container}
                    bahavior="padding"
                    enabled
                >
                    <View style={styles.container}>
                        <View style={{ flex: 80, marginTop: 20 }}>
                            <View style={{ marginLeft: 20, marginTop: 5 }}>
                                <Image
                                    style={{ width: 50, height: 50 }}
                                    source={require('./back.png')}
                                />
                                <Text style={styles.textTitle} >Festival</Text>
                            </View>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={styles.subTitle}>in Bang Khen</Text>
                            </View>
                            <ScrollView>
                                <View>
                                    {
                                        myPosto.map((post, index) => {
                                            if (post) {
                                                console.log("have");

                                            } else {
                                                console.log("not have");

                                            }

                                            return (<Postin post={post} key={index} i={index} />);
                                        })
                                    }
                                </View>
                            </ScrollView>
                        </View>
                        <View>
                            <View style={styles.postbg}>
                                <TextInput
                                    style={styles.PostInput}
                                    onChangeText={(text) => this.setState({ post: text })}
                                    value={this.state.post}
                                />
                                <View style={{ alignSelf: 'flex-end' }}>
                                    <View style={styles.butrealPost}>
                                        <Button style={{ fontSize: 14, justifyContent: 'center' }}
                                            title="Post"
                                            onPress={this.onPost}
                                            value={this.post}
                                            color="#000000"
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View >
                </KeyboardAvoidingView>
            


        );
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
        height: 30,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#ffffff'
    },
    textTitle: {
        fontSize: 36,
        fontWeight: 'bold',


    },
    textTitle1: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10


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
        height: 80,
        display: 'flex',
        flexDirection: 'row',
    },
    butrealPost: {
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 30,
        height: 30,
        width: 50,
        backgroundColor: '#add8e6',
        borderColor: '#ffffff',
        fontSize: 14
    },
    textPost: {
        marginLeft: 20,
        fontSize: 20
    }
});
