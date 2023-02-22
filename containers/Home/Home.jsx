import React from 'react'
import { Button, ScrollView, Text } from 'react-native'

const Home = (props) => {
  console.log(props);
  

  return (
    <ScrollView>
      <Text>Home container</Text>
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          props.navigation.navigate('About', { name: 'Jane' })
        }
      />
    </ScrollView>
  )
}

export default Home