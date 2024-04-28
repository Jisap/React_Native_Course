import { useState } from "react";
import { ResizeMode, Video } from "expo-av";
import * as Animatable from "react-native-animatable";
import { View, Text, FlatList, Image, TouchableOpacity, ImageBackground, } from 'react-native'

import { icons } from "../../constants";


const zoomIn = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1,
  },
};

const zoomOut = {
  0: {
    scale: 1,
  },
  1: {
    scale: 0.9,
  },
};

const TrendingItem = ({ activeItem, item }) => {                  // Recibe el activeItem de la lista de los últimos 7 post creados y el item que se renderiza.
  const [play, setPlay] = useState(false);                        // Estado que se usa para controlar si el video está reproduciéndose o no

  return (
    <Animatable.View
      className="mr-5"
      animation={activeItem === item.$id ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
        <Video
          source={{ uri: item.video }}
          className="w-52 h-72 rounded-[33px] mt-3 bg-white/10"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          className="relative flex justify-center items-center"
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <ImageBackground
            source={{
              uri: item.thumbnail,
            }}
            className="w-52 h-72 rounded-[33px] my-5 overflow-hidden shadow-lg shadow-black/40"
            resizeMode="cover"
          />

          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

const Trending = ({ posts }) => {                             // Recibe los últimos 7 post creados

  const [activeItem, setActiveItem] = useState(posts[0]);     // Establece por defecto como activo el primero de la lista

  const viewableItemsChanged = ({ viewableItems }) => {       // A traves de onViewableItemsChanged se llama a viewableItemsChanged
    if (viewableItems.length > 0) {                           // y esta fn detecta que elementos son visibles
      setActiveItem(viewableItems[0].key);                    // Solo el primer elemento se considera como activo -> <TrendingItem />
    }
  };

  return (
    <FlatList 
      data={posts}
      horizontal
      keyExtractor={(item) => item.$id}
      renderItem={({ item, idx }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      onViewableItemsChanged={viewableItemsChanged}           // Se utiliza para detectar qué elementos de la lista son actualmente visibles en la pantalla. 
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70,
      }}
      contentOffset={{ x: 170 }}
    />
  )
}

export default Trending