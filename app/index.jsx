import {Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      
        <Text className="text-red-700 text-3xl font-pblack">Aora!!</Text>
        <StatusBar style="auto" />
        <Link
          href="/home"
          style={{color: 'blue'}}
        >
          Go to home
        </Link>
     
    </View>
  );
}

