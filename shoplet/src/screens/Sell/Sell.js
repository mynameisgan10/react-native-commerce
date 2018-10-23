import React from 'react'
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native'
import {CameraKitCamera} from 'react-native-camera-kit'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    takePhoto: {
        position: 'absolute',
        padding: 16,
        bottom: 25,
        alignItems: 'center',
        right: 20,
        left: 20
        
    }
})


const Sell = () => (
    <View style={styles.container}>
        <CameraKitCamera
            ref={cam => this.camera = cam}
            style={{
                flex: 1,
                backgroundColor: 'white'
            }}
            hideControls={false}/>
            <TouchableHighlight style={styles.takePhoto}>
                <Text>Take photo</Text>
            </TouchableHighlight>
    </View>
)

export default Sell