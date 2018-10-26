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
    static navigatorStyle = {
        drawUnderNavBar: true,
        navBarTranslucent: true
      };


    render() {
        
        return (
            <View style={styles.container}>
                <ImageGallery navigator={this.props.navigator}></ImageGallery>
            </View>
        )
    }
}
