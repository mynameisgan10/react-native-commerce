import React from 'react'
import {StyleSheet, View, ScrollView} from 'react-native'

import Searchbar from '../../components/Searchbar/Searchbar'
import AdsCarousel from '../../components/DiscoverScreen/AdsCarousel/AdsCarousel'
import Categories from '../../components/DiscoverScreen/Categories/Categories'
import Suggestions from '../../components/DiscoverScreen/Suggestions/Suggestions'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey'
    },
    text: {
        fontSize: 20,
        textAlign: 'center'
    }
})

const Discover = () => (
    <View style={styles.container}>
        <Searchbar/>
        <ScrollView>
            <AdsCarousel />
            <Categories categories={[{iconName: 'laptop', title: 'test123'},{iconName: 'laptop', title: 'test123'},{iconName: 'laptop', title: 'test123'},{iconName: 'laptop', title: 'test123'},{iconName: 'laptop', title: 'test123'},{iconName: 'laptop', title: 'test123'},{iconName: 'laptop', title: 'test123'},{iconName: 'laptop', title: 'test123'},{iconName: 'laptop', title: 'test123'},{iconName: 'laptop', title: 'test123'},{iconName: 'laptop', title: 'test123'},]}/>
            <Suggestions />
        </ScrollView>
    </View>
)

export default Discover