import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { capitalize } from "lodash";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function Type(props) {
  const { types } = props;

  return (
    <View style={styles.content}>
      {types.map((item, index) => {
        const color = getColorByPokemonType(item.type.name);
        return (
          <View
            key={index}
            style={{
              ...styles.pill,
              backgroundColor: color,
            }}
          >
            <Text style= {{textTransform: "capitalize",}} > {item.type.name} </Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
