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

        firestore.collection("feeds").doc('bangkok').collection('event0').get().then( snapshot => {
            snapshot.forEach(doc => {
            
                console.log(doc.data().title.post);
                let post = doc.data().title.post
                posts = [ post , ...posts ]            
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
        let {post , myPosto} = this.state;
        
        firestore.collection("feeds").doc('bangkok').collection('event0').add({
            title: { post },
        })

        this.setState({
            myPosto: [post , ...myPosto]
        })

    }

    render() {
        let myPosto = this.state.myPosto
        
        return (
        <ScrollView>
            <View style={styles.container}> 
                <Text>Festival</Text>
                <Text>in Bangkok</Text>
                <View>
                    {
                        myPosto.map((post , index) => {
                            return(<Text key={index}>{post}</Text>)
                        })
                    }
                    <TextInput
                    style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({post : text})}
                    value={this.state.post}
                    />
                    <Button
                        title="Post"
                        onPress={this.onPost}
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
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
