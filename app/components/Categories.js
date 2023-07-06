import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import categories from "../../app/config/categories";
import colors from "../config/colors";
import SPACING from "../config/SPACING";
import { useState } from "react";

const Categories = ({ onChange }) => {
  const [activeCategoryId, setactiveCategoryId] = useState(null);

  const handlePress = (id) => {
    setactiveCategoryId(id);
    onChange(id);
  };

  return (
    <FlatList
      horizontal={true}
      data={categories}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ marginVertical: SPACING }}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => handlePress(item.id)}
          style={{ marginRight: SPACING * 2, alignItems: "center" }}
        >
          <Text
            style={[
              { color: colors.secondary, fontSize: SPACING * 2 },
              activeCategoryId === item.id && { color: colors.primary },
            ]}
          >
            {item.name}
          </Text>
          {activeCategoryId === item.id && (
            <View
              style={{
                height: SPACING,
                width: SPACING,
                backgroundColor: colors.primary,
                borderRadius: SPACING / 2,
                marginTop: SPACING / 2,
              }}
            />
          )}
        </TouchableOpacity>
      )}
    />
  );
};

export default Categories;
