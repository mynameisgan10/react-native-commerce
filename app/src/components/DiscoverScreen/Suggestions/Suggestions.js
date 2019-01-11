import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'

import ProductCard from '../../common/productCard/productCard';

const styles = StyleSheet.create({
    container: {
        height: 300
    },
    productsContainer: {
        marginTop: 10,
        paddingTop: 10
    },
    sectionTitle: {
        fontSize: 25,
        paddingLeft: 10,
        paddingTop: 10,
        fontWeight: 'bold'
    }
})

const Suggestions = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>For You</Text>
            <View style={styles.productsContainer}>
                <FlatList 
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={[1,1,1,1,1,1]}
                renderItem={() => <ProductCard/>}
                />
            </View>
        </View>
    )
}

export default Suggestions