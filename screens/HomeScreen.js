import React, { useEffect, useState, useLayoutEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/solid";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import client from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  useEffect(() => {
    client
      .fetch(`*[_type == "featuered"]{ ...,restaurants[]->{ ... , dishes[]->}}`)
      .then((data) => setFeaturedCategories(data));
  }, []);

  // console.log(featuredCategories);

  return (
    <SafeAreaView className="bg-white pt-10">
      <View className="flex-row pb-3 items-center justify-between mx-4">
        <View className="flex-row items-center space-x-2 ">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <View>
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon color="#00ccbb" size={20} />
            </Text>
          </View>
        </View>

        <UserIcon size={35} color="#00ccbb" />
      </View>
      {/* search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <SearchIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurant and cuisines"
            keyboardType="default"
          />
        </View>

        <AdjustmentsIcon color="#00ccbb" />
      </View>

      {/* body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* categories */}

        <Categories />
        {/* featuered rows */}
        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
