import React from 'react'
import {Text, View} from 'react-native'
import { Button } from 'react-native'

export default props => {
    return (
        <View style={{flex: 1}}>
            <View>
                {
                    props.avancar ? 
                    <Button 
                        title='Avançar'
                        onPress={() => {
                            props.navigation.navigate(props.avancar)
                        }}
                    /> : false

                }
            </View>
            
            <View style={{flex: 1}}>
                {props.children}
            </View>
        </View>
    )
}