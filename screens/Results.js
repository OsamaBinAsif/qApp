import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Results = () => {
  return (
    <View>
      <View>
        <Text>Results</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          resizeMode="contain"
          style={styles.banner}
          source={require("../assets/quiz.png")}
        />
      </View>
      <View>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Results;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
