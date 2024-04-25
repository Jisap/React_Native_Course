import React from 'react'
import { View, Text, FlatList, Image } from 'react-native'

const Trending = ({ posts }) => {
  return (
    <FlatList 
      data={posts}
      horizontal
      keyExtractor={(item) => item.$id}
      renderItem={({ item, idx }) => (
        <Text className="text-3xl text-white" key={234+idx}>
          {item.id}
        </Text>
      )}
      
    />
  )
}

export default Trending