import React, {Component} from 'react'
import {StyleSheet, View, Platform} from 'react-native'
import {CameraKitGalleryView} from 'react-native-camera-kit'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -40
    }
})

class imageGallery extends Component {
    state = {
        shouldRenderCamera: false
    }

    onCustomButtonPressed = () => {
        // this.setState({shouldRenderCamera: true})
        this.props.navigator.showModal({
            screen: 'shoplet.CameraScreen',
            animationType: 'slide-up'
        })
    }
    render() {
        let output = (
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
        return (
            <View style={styles.container}>
                {output}
            </View>
        )
    }
}

export default imageGallery