import React from "react";
import { TouchableOpacity, Image, Text } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

const CategoryCard = ({ imgUrl, title }) => {
  //   console.log(imgUrl);
  return (
    // <TailwindProvider>
    <TouchableOpacity className="relative mr-2">
      <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded" />

      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
    // </TailwindProvider>
  );
};

export default CategoryCard;
