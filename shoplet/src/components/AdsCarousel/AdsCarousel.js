import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: '20%',
        backgroundColor: 'red'
    }
})


const AdsCarousel = () => {
    return (<View style={styles.container}>
        <Text>Ads</Text>
    </View>)
}

export default AdsCarousel