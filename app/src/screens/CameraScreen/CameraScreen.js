import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, Platform} from 'react-native'
import {CameraKitCamera} from 'react-native-camera-kit'
import Icon from 'react-native-vector-icons/FontAwesome5'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    captureButton: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: Platform.OS === 'ios'
            ? 60
            : 40
    },
    backButton: {
        position: 'absolute',
        alignSelf: 'flex-start',
        top: Platform.OS === 'ios'
            ? 40
            : 20,
        left: 25
    },
    flashButton: {
        position: 'absolute',
        alignSelf: 'flex-end',
        top: Platform.OS === 'ios'
            ? 50
            : 25,
        right: 25
    }
})

class CameraScreen extends Component {


   
    onBackButtonPressed = () => {
        this
            .props
            .navigator
            .dismissModal({animationType: 'slide-down'})
    }

    onCaptureButtonPressed = () => {
        const image = this
            .camera
            .capture(true);
    }

    render() {
        return (
            <View style={styles.container}>
                <CameraKitCamera
                    ref={cam => this.camera = cam}
                    style={{
                        flex: 1,
                        alignSelf: 'stretch',
                        backgroundColor: 'black'
                    }}
                    cameraOptions={{
                        flashMode: 'auto', 
                        focusMode: 'on',
                        zoomMode: 'on'
                    }}/>
                <TouchableOpacity
                    style={styles.captureButton}
                    onPress={this.onCaptureButtonPressed}
                    hitSlop={{
                        top: 60,
                        left: 60,
                        bottom: 60,
                        right: 60
                    }}>
                    <Icon name='circle' size={60} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={this.onBackButtonPressed}
                    hitSlop={{
                        top: 60,
                        left: 60,
                        bottom: 60,
                        right: 60
                    }}>
                     <Icon name='angle-left' size={40} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.flashButton}
                    onPress={this.onBackButtonPressed}
                    hitSlop={{
                        top: 60,
                        left: 60,
                        bottom: 60,
                        right: 60
                    }}>
                     <Icon name='bolt' size={20} color="white"/>
                </TouchableOpacity>
            </View>
        )
    }

}

export default CameraScreen