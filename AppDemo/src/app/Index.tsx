import { FlatList } from "react-native";
import Product from "../components/Product";

const Index = () => {
  const products = [
    {
      productName: "Wireless Headphones",
      productImage: "https://picsum.photos/536/354",
      productPrice: 199.99,
      productDescription:
        "Experience the freedom of wireless sound with our premium noise-canceling headphones.",
      isFeatured: true,
      category: "Electronics",
      ratings: 4.5,
      stock: 50,
    },
    {
      productName: "Smartphone",
      productImage: "https://picsum.photos/536/355",
      productPrice: 599.99,
      productDescription:
        "Stay connected with the latest smartphone featuring a stunning display and powerful performance.",
      isFeatured: false,
      category: "Electronics",
      ratings: 4.7,
      stock: 30,
    },
    {
      productName: "Yoga Mat",
      productImage: "https://picsum.photos/536/356",
      productPrice: 29.99,
      productDescription:
        "Achieve your fitness goals with our eco-friendly, non-slip yoga mat.",
      isFeatured: true,
      category: "Fitness",
      ratings: 4.8,
      stock: 100,
    },
    {
      productName: "Coffee Maker",
      productImage: "https://picsum.photos/536/357",
      productPrice: 89.99,
      productDescription:
        "Brew your perfect cup of coffee every morning with our easy-to-use coffee maker.",
      isFeatured: false,
      category: "Home Appliances",
      ratings: 4.2,
      stock: 20,
    },
    {
      productName: "Gaming Mouse",
      productImage: "https://picsum.photos/536/358",
      productPrice: 49.99,
      productDescription:
        "Enhance your gaming experience with our high-precision gaming mouse.",
      isFeatured: true,
      category: "Accessories",
      ratings: 4.6,
      stock: 75,
    },
  ];

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => {
        return (
          <Product
            name={item.productName}
            image={item.productImage}
            price={item.productPrice}
            description={item.productDescription}
            isFeatured={item.isFeatured}
          />
        );
      }}
    />
  );
};

export default Index;
