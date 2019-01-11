import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
        height: 300,
        backgroundColor: 'blue'
    }
})

const Suggestions = () => {
    return (
        <View style={styles.container}>
            <Text>New Posts</Text>
        </View>
    )
}

export default Suggestions