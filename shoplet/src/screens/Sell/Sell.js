import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'

import ImageGallery from '../../components/ImageGallery/ImageGallery'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    }
})

export default class Sell extends Component {

    render() {
        
        return (
            <View style={styles.container}>
                <ImageGallery></ImageGallery>
            </View>
        )
    }
}
