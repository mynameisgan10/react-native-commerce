import React, {Component} from 'react'
import {StyleSheet, View, Platform, Alert, Text} from 'react-native'
import {CameraKitGalleryView} from 'react-native-camera-kit'
import Permissions from 'react-native-permissions'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'ios'
            ? 0
            : -40
    }
})

class imageGallery extends Component {
    // componentDidMount () {
    //     this.checkGalleryPermission()
    // }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
      }
      onNavigatorEvent(event) {
          if(event.id === 'willAppear'){
            this.checkGalleryPermission()
          }
      
      }


    state = {
        shouldLoadGallery: false
    }

    onCustomButtonPressed = () => {
        this.checkCameraPermission()
    }
    checkGalleryPermission = () => {
        Permissions.check('photo').then(response => {
            if(response === 'authorized'){
                this.setState({
                    shouldLoadGallery: true
                })
            }else{
                this.alertForGalleryPermission()
            }
        })
    }
    requestGalleryPermission = () => {
        Permissions
            .request('photo')
            .then(response => {
                if (response === 'authorized') {
                    this.setState({
                        shouldLoadGallery: true
                    })
                }
            })
    }
    checkCameraPermission = () => {
        Permissions
            .check('camera')
            .then(response => {
                if (response === 'authorized') {
                    this.openCamera()
                } else {
                    this.alertForCameraPermssion();
                }
            })
    }
    alertForGalleryPermission() {
        if (Platform.OS === 'android') {
            this.requestGalleryPermission()
        } else {
            Alert.alert(
                'Can we access your gallery/photos',
                'We need it so you can select your photos to be used',
                [
                    {
                        text: 'No',
                        onPress: () => console.log('Permission denied'),
                        style: 'cancel'
                    },
                    this.state.photoPermission == 'undetermined'
                        ? {
                            text: 'OK',
                            onPress: this.requestCameraPermission
                        }
                        : {
                            text: 'Enable Access',
                            onPress: Permissions.openSettings
                        }
                ],
            )
        }
    }

    openCamera = () => {
        this
            .props
            .navigator
            .showModal({screen: 'shoplet.CameraScreen', animationType: 'slide-up'})
    }
    requestCameraPermission() { //for android
        Permissions
            .request('camera')
            .then(response => {
                if (response === 'authorized') {
                    this
                        .props
                        .navigator
                        .showModal({screen: 'shoplet.CameraScreen', animationType: 'slide-up'})
                }
            })
    }
    alertForCameraPermssion() {
        if (Platform.OS === 'android') {
            this.requestCameraPermission()
        } else {
            Alert.alert(
                'Can we access your camera',
                'We need access so you can set take a picture',
                [
                    {
                        text: 'No',
                        onPress: () => console.log('Permission denied'),
                        style: 'cancel'
                    },
                    this.state.photoPermission == 'undetermined'
                        ? {
                            text: 'OK',
                            onPress: this.requestCameraPermission
                        }
                        : {
                            text: 'Enable Access',
                            onPress: Permissions.openSettings
                        }
                ],
            )
        }
    }

    render() {
        let output = null;
        if(this.state.shouldLoadGallery){
            output = (
                <CameraKitGalleryView
                    ref={gallery => this.gallery = gallery}
                    style={{
                        flex: 1,
                        marginTop: 20
                    }}
                    minimumInteritemSpacing={10}
                    minimumLineSpacing={10}
                    columnCount={3}
                    customButtonStyle={{
                        image: require('../../images/openCamera.png'),
                        backgroundColor: 'lightgrey'
                    }}
                    onCustomButtonPress={(result) => this.onCustomButtonPressed()}
                    albumName={"All Photos"}
                    onTapImage={event => {
                        // event.nativeEvent.selected - ALL selected images ids
                    }}/>
            )
        }
        return (
            <View style={styles.container}>
                {output}
            </View>
        )
    }
}

export default imageGallery