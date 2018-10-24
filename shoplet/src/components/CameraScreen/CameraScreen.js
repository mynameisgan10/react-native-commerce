import React from 'react'
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native'
import {CameraKitCamera} from 'react-native-camera-kit'

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

const CameraScreen = () => (
    // <View style={styles.container}>
        <CameraKitCamera
            ref={cam => this.camera = cam}
            style={{
                flex: 1,
                backgroundColor: 'white',
                marginTop: 20
            }}
            hideControls={false}/>
         // <TouchableHighlight style={styles.takePhoto}>
           // <Text>Take photo</Text>
        //</TouchableHighlight>  
    // </View>
)

export default CameraScreen