import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import Header from "../Components/Header";
import { Colors } from "../Global/Colors";
import { AntDesign } from "@expo/vector-icons";

const ItemListCategories = () => {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <View style={styles.searchContainer}>
          <TextInput style={styles.input} placeholder="Buscar Producto" />
          <Pressable
            style={styles.searchIcon}
            onPress={() => console.log("Buscar")}
          >
            <AntDesign name="search1" color="black" size={25} />
          </Pressable>
          <Pressable style={styles.closeButton}>
            <Text style={styles.closeButtonText}>X</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default ItemListCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary, // Agrega el color desde el archivo de colores
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.blue1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  searchIcon: {
    padding: 10,
  },
  closeButton: {
    backgroundColor: Colors.blue2,
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: Colors.white,
  },
});
