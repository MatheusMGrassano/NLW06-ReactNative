import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import { ButtonAdd } from '../../ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { Profile } from '../../components/Profile'
import { ListHeader } from '../../components/ListHeader'
import { ListDivider } from '../../components/ListDivider'
import { Appointment } from '../../components/Appointment'

import { styles } from './styles'

export function Home(){
    const [category, setCategory] = useState('')

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '04/08 às 20:00h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma da md10 kkkkkk'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: false
            },
            category: '1',
            date: '04/08 às 20:00h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma da md10 kkkkkk'
        },
        {
            id: '3',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: false
            },
            category: '1',
            date: '04/08 às 20:00h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma da md10 kkkkkk'
        },
        {
            id: '4',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '04/08 às 20:00h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma da md10 kkkkkk'
        },
        {
            id: '5',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: false
            },
            category: '1',
            date: '04/08 às 20:00h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma da md10 kkkkkk'
        },
        {
            id: '6',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: false
            },
            category: '1',
            date: '04/08 às 20:00h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma da md10 kkkkkk'
        }
    ]

    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId)
}
    return(
        <View style={styles.container}>
            <View style={styles.header}>                
                <Profile/>
                <ButtonAdd/>
            </View>
        <View>
            <CategorySelect 
                categorySelected={category}
                setCategory={handleCategorySelect}
            />
                <View style={styles.content}>
                    <ListHeader
                    title='Partidas agendadas'
                    subtitle='Total 6'
                    />
                </View>
            </View>

            <FlatList
                data={appointments}
                keyExtractor={item => item.id}
                renderItem={({item})=> (
                <Appointment data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.matches}
                showsVerticalScrollIndicator={false}
            />
        </View>

    )
}