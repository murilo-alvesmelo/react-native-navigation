import React from 'react'
import {Text, SafeAreaView} from 'react-native'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Stack from './Stack'
import Tab from './Tab'

export default props => {
    return(
        <SafeAreaView style={styles.Container}>
            <NavigationContainer>
                <Tab />             
            </NavigationContainer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
    }
}) 