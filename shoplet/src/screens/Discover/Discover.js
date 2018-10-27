import React from 'react'
import {StyleSheet, View, Text} from 'react-native'


import Searchbar from '../../components/Searchbar/Searchbar'
import AdsCarousel from '../../components/AdsCarousel/AdsCarousel'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        fontSize: 20,
        textAlign: 'center'
    }
})

const Discover = () => (
    <View style={styles.container}>
        <Searchbar/>
        <AdsCarousel />
    </View>
)

export default Discover