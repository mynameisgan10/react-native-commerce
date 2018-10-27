import React from 'react'
import {TextInput, Text, StyleSheet, SafeAreaView, Platform} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignSelf: 'center',
        width: '100%',
        backgroundColor: 'lightblue',
        height: Platform.OS === 'ios' ? 90 : 45
    },
    searchInput: {
        backgroundColor: 'white',
        width: '80%',
        alignSelf: 'center',
        fontSize: 15,
        height: 35,
        paddingBottom: 0,
        paddingTop: 0,
        marginLeft: 10,
        borderRadius: 4
    },
    searchIcon: {
        alignSelf: 'center',
        marginLeft: 20
    }
})

const Searchbar = () => {
    return (<SafeAreaView style={styles.container}>
        <TextInput placeholder={"tasd"} style={styles.searchInput}>
        </TextInput>
        <Icon name="search" size={25} style={styles.searchIcon}/>
    </SafeAreaView>)
}

export default Searchbar