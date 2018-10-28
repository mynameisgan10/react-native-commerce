import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: 250,
        backgroundColor: 'grey'
    },
    sectionTitle: {
        fontSize: 25,
        paddingLeft: 10,
        paddingTop: 10,
        fontWeight: 'bold'
    }
})


const Suggestions = () => {
    return (<View style={styles.container}>
        <Text style={styles.sectionTitle}>For You</Text>
    </View>)
}

export default Suggestions