import React from 'react'
import {Text, View} from 'react-native'
import { Button } from 'react-native'

export default props => {
    return (
        <View style={{flex: 1}}>
            <View style={{
                            flexDirection: 'row',                         
                            justifyContent:'space-around'}}>
                {
                    props.voltar ? 
                    <Button 
                        title='Voltar'
                        onPress={() => {
                            props.navigation.goBack()
                        }}
                    /> : false

                }
                {
                    props.avancar ? 
                    <Button 
                        title='Avançar'
                        onPress={() => {
                            props.navigation.push(props.avancar,{
                                numero: parseInt(Math.random() * 100) || 0
                            })
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