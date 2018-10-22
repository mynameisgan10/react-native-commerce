import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
    }
})

const Discover = () => (<View style={styles.container}>
    <Text style={styles.text}>Home Page</Text>
    <Icon name="user" size={30} color="#900"/>
</View>)

export default Discover