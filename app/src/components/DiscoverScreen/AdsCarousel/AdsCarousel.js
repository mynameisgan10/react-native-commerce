import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: 150,
        backgroundColor: 'red'
    }
})


const AdsCarousel = () => {
    return (<View style={styles.container}>
        <Text>Ads</Text>
    </View>)
}

export default AdsCarousel