import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

import React from "react";
import { capitalize } from "lodash";

export default function Header(props) {
  const { name, order, image, type } = props;
  const color = getColorByPokemonType(type);

  const bgStyle = [{ backgroundColor: color, ...styles.bg }];

  return (
    <>
      <View style={bgStyle} />
      <SafeAreaView style={styles.bgContent}>
          <View style= {styles.header} >
              <Text style= {styles.name}> {name} </Text>
              <Text style= {styles.order}> #{`${order}`.padStart(3,0)}</Text>
          </View>
        <View style={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  bgContent: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  header:{
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 40
  },
  name:{
      color:'white',
    textTransform: "capitalize",
    fontWeight: 'bold',
    fontSize: 27
  },order:{
    color: 'white',
    fontWeight: 'bold'
  },
  contentImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: 'contain'
  },
});
