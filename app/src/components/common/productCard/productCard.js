import React from 'react'
import {View, Text, Image, StyleSheet, Button} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'

const styles = StyleSheet.create({
    container: {
        width: 140,
        height: 220,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'lightgrey'

    },
    image: {
        width: 138,
        height: 140,
        alignSelf: 'center'
    },
    textContainer: {
        flex: 1,
        paddingLeft: 5,
        paddingRight: 5
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center'
    },
    socialButtons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingBottom: 5
    }
})

const productCard = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={{
                        uri: "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?ixlib=rb-0.3.5&ix" +
                                "id=eyJhcHBfaWQiOjEyMDd9&s=138da2df65dd01d6715a76b5ac1b9441&auto=format&fit=cro" +
                                "p&w=1467&q=80"
                    }}/>
            </View>
            <View style={styles.textContainer}>
                <Text>Macbook Pro 2017 with touch..</Text>
            </View>
            <View style={styles.socialButtons}>
                <View style={styles.buttonContainer}>
                    <Icon
                        name='heart'
                        size={20}
                        style={{
                            alignSelf: 'center'
                        }}/>
                </View>
                <View style={styles.buttonContainer}>
                    <Icon name='bookmark' size={20}/>
                </View>
            </View>
        </View>
    )
}

export default productCard