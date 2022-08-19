import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 5000);
  }, []);

  return (
    <SafeAreaView className="bg-[#E1D6BA] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/loading.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-80 w-96"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-sm text-dark font-bold text-center p-4"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="#01a296" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
