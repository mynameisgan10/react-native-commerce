import React, {Component} from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'


import CategoryIconContainer from './CategoryIconContainer/CategoryIconContainer'

const styles = StyleSheet.create({
    container: {
        height: 250,
        backgroundColor: 'white',
        marginTop: 5,
        marginBottom: 5
    },
    sectionTitle: {
        fontSize: 25,
        paddingLeft: 10,
        paddingTop: 10,
        fontWeight: 'bold'
    }
})

class Categories extends Component {

    _renderItem = ({item}) => {
        return (
            <View style={{
                    alignSelf: 'center'
                }}>
                <CategoryIconContainer iconName='laptop' size={25} title={item.title}/>
                <CategoryIconContainer iconName='laptop' size={25} title={item.title}/>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.sectionTitle}>Categories</Text>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={this.props.categories}
                    style={{
                        paddingLeft: 10,
                        paddingTop: 15
                    }}
                    renderItem={this._renderItem}></FlatList>
            </View>
        )
    }
}

export default Categories