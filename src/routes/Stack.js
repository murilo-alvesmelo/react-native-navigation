import React from 'react'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import PassoStack from '../components/PassoStack'


const Stack = createNativeStackNavigator()

export default props => {
    return(
    <Stack.Navigator initialRouteName='TelaA'>
        <Stack.Screen 
            name='TelaA' 
            options={{title: 'Tela Inicial'}}>
            {props =>(
                <PassoStack {...props} avancar='TelaB'>
                    <TelaA />
                </PassoStack>
            )}    
        </Stack.Screen>
        <Stack.Screen 
            name='TelaB'
            options={{title: 'Segunda tela'}}> 
            {props =>(
                <PassoStack {...props} avancar='TelaC' voltar>
                    <TelaB/>
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen 
            name='TelaC'
            options={{title: 'Terceira tela'}}>
            {props =>(
                <PassoStack {...props} voltar avancar='TelaC'>
                    <TelaC  {...props}/>
                </PassoStack>
            )}
        </Stack.Screen>

    </Stack.Navigator>
    ) 
}