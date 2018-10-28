import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'


const styles = StyleSheet.create({
    categoryIconContainer: {
        width: 55,
        height: 55,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 5,
        marginTop: 5,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: 'lightgrey'
    }
})

const CategoryIconContainer = (props) => {
    return (
        <View>
            <View style={styles.categoryIconContainer}>
                <Icon
                    name={props.iconName}
                    size={props.size}
                    style={{
                        alignSelf: 'center'
                    }}/>
            </View>
            <Text style={{
                    textAlign: 'center'
                }}>{props.title}</Text>
        </View>
    )
}

export default CategoryIconContainer