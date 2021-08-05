import React from "react";
import { Image } from 'react-native'

import { styles } from './styles'


export function GuildIcon(){

    const uri = 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/91_Discord_logo_logos-512.png'

    return(
        <Image  
        source={{ uri }}
        style={styles.image}
        resizeMode="cover"

         />

    )
}