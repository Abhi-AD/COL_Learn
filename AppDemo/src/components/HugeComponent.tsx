import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React from "react";

interface Product {
  image: string;
  name: string;
  rating: number;
  price: number;
}
const HugeComponent = () => {
  const products = [
    {
      image: "https://picsum.photos/536/354",
      name: "Product 1",
      rating: 4.1,
      price: 300,
    },
    {
      image: "https://picsum.photos/id/237/536/354",
      name: "Product 2",
      rating: 3.8,
      price: 250,
    },
    {
      image: "https://picsum.photos/seed/picsum/536/354",
      name: "Product 3",
      rating: 4.5,
      price: 450,
    },
    {
      image: "https://picsum.photos/id/1084/536/354?grayscale",
      name: "Product 4",
      rating: 4.0,
      price: 200,
    },
    {
      image: "https://picsum.photos/id/1060/536/354?blur=2",
      name: "Product 5",
      rating: 4.7,
      price: 500,
    },
  ];

  const renderItem = ({ item }: { item: Product }) => {
    return (
      <View style={styles.productContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.name}>Name: {item.name}</Text>
        <Text style={styles.rating}>Rating: {item.rating}</Text>
        <Text style={styles.price}>Price: Rs{item.price}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  rating: {
    fontSize: 16,
    color: "#888",
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    color: "#000",
    marginTop: 5,
  },
});
export default HugeComponent;
