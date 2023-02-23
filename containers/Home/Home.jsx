import React from 'react'
import { Button, ScrollView, Text } from 'react-native'
import Flowers from '../Flowers';

const Home = (props) => {
  console.log(props);
  

  return (
    <ScrollView>
      <Text>Home container</Text>
      <Button
        title="Go to Flower Screen"
        onPress={() =>
          props.navigation.navigate('Flower', { name: 'Flower Screen', data: [] })
        }
      />
      <Flowers {...props} />
    </ScrollView>
  )
}

export default Home