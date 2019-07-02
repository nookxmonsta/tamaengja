import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import firebase, { firestore } from './firebase'

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

        firestore.collection("feeds").doc('bangkok').collection('BangKhen').get().then(snapshot => {
            snapshot.forEach(doc => {

                console.log(doc.data().title.post);
                let post = doc.data().title.post
                posts = [post, ...posts]
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
            <View style={{flex: 1}}>
                <ScrollView>
                    <Text style={styles.textCenter} >Festival</Text>
                    <Text >in Bangkok</Text>
                    <View>
                        {
                            myPosto.map((post, index) => {
                                return (<Text key={index}>{post}</Text>)
                            })
                        }

                    </View>
                </ScrollView>
                <View style={"height: 20%"}>
            
                    <TextInput
                        style={styles.PostInput}
                        onChangeText={(text) => this.setState({ post: text })}
                        value={this.state.post}
                    />

                    <Button style={{justifyContent: 'flex-end'}}
                        title="Post"
                        onPress={this.onPost}
                        value={this.post}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    center: {
        alignItems: 'center',

    },
    PostInput: {
        borderRadius: 10,
        borderWidth: 1,
        margin: 12,
        height: 70, 
        width: 350, 
        borderColor: 'gray', 
        borderWidth: 1, 
    },
    textCenter: {
        alignItems: 'center',
    }
});
