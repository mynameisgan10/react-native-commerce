import React, {Component} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {CameraKitGalleryView} from 'react-native-camera-kit'

import CameraScreen from '../CameraScreen/CameraScreen'



const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

class imageGallery extends Component {
    state = {
        shouldRenderCamera: false
    }

    onCustomButtonPressed = () => {
        this.setState({
            shouldRenderCamera: true
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
                        backgroundColor: 'red'
                    }}
                    onCustomButtonPress={(result) => this.onCustomButtonPressed()}
                    albumName={"All Photos"}
                    onTapImage={event => {
                        // event.nativeEvent.selected - ALL selected images ids
                    }}/>
        )
        if(this.state.shouldRenderCamera){
            output = (<CameraScreen />)
        }
        return (
            <View style={styles.container}>
                {output}
            </View>
        )
    }
}

export default imageGallery