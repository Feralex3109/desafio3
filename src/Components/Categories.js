import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import categories from "../Data/categories.json";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        data={categories}
        keyExtractor={(item) => item.id.toString}
        renderItem={({ item }) => <CategoryItem category={item} />}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    flex: 1,
  },
});
