import { View, Text, TextInput } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";

import colors from "../config/colors";
import SPACING from "../config/SPACING";

import { Ionicons } from "@expo/vector-icons";

const SearchField = () => {
  return (
    <View style={{ borderRadius: SPACING, overflow: "hidden" }}>
      <BlurView
        intensity={30}
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <TextInput
          style={{
            width: "100%",
            color: colors.light,
            fontSize: SPACING * 1.7,
            padding: SPACING,
            paddingLeft: SPACING * 3.5,
          }}
          placeholder="Find Your Cofee..."
          placeholderTextColor={colors.light}
        />
        <Ionicons
          style={{ position: "absolute", left: SPACING / 2 }}
          name="search"
          color={colors.light}
          size={SPACING * 2}
        />
      </BlurView>
    </View>
  );
};

export default SearchField;
