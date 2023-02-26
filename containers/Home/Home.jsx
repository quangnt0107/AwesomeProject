import React from 'react'
import { Button, View, Text } from 'react-native'
import Flowers from '../Flowers';

const Home = (props) => {
  console.log(props);
  

  return (
    <View>
      <Text>Home container</Text>
      <Button
        title="Go to About Screen"
        onPress={() =>
          props.navigation.navigate('About', { name: 'About Screen', data: [] })
        }
      />
      <Button
        title="Go to Flower Screen"
        onPress={() =>
          props.navigation.navigate('Flower', { name: 'Flower Screen', data: [] })
        }
      />
      <Flowers {...props} />
    </View>
  )
}

export default Home