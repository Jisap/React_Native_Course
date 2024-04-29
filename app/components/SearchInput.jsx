import { useState } from "react";
import { router, usePathname } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons } from "../../constants";

const SearchInput = ({ initialQuery }) => {

  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");

  return (
  
    <View className="flex flex-row items-center space-x-4 w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary">
        <TextInput
          className="text-base mt-0.5 text-white flex-1 font-pregular"
          value={query}
          placeholder="Search for a video topic"
          placeholderTextColor="#CDCDE0"
          onChangeText={(e) => setQuery(e)}
          //secureTextEntry={title === "Password" && !showPassword}   // true: se ve la pass // false: no se ve la pass
        />

      <TouchableOpacity
         onPress={() => {
          if (query === "")
            return Alert.alert(
              "Missing Query",
              "Please input something to search results across database"
            );

          if (pathname.startsWith("/search")) router.setParams({ query }); // Si la busqueda se hace desde la página de search se establece el query directamente
          else router.push(`/search/${query}`);                            // Si la busqueda se hace desde la página del home redirect a /search/query  
        }}
      >
        <Image 
          source={icons.search} 
          className="w-5 h-5" 
          resizeMode="contain" 
        />
      </TouchableOpacity>
      </View>
    
  );
};

export default SearchInput;