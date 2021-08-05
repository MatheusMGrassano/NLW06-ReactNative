import React from 'react'
import { View, Text } from 'react-native'
import { Avatar } from '../Avatar'

import { styles } from './styles'

export function Profile(){
    return(
    <View style={styles.container}>

        <Avatar urlImage="https://avatars.githubusercontent.com/u/47541227?v=4"/>


        <View>
            <View style={styles.user}>
                <Text style={styles.greetings}>
                    Olá,
                </Text>

                <Text style={styles.username}>
                    Jackygm89
                </Text>

            </View>
            <Text style={styles.message}>
                Hoje é dia de vitória
            </Text>
        </View>

    </View>
    )

}