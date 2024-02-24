import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { PRODUCTS } from "@/utils/data/products";

export default function Product() {
  const { id } = useLocalSearchParams();

  const product = PRODUCTS.filter((item) => item.id === id)[0];

  return (
    <View className="flex-1">
      <Text>Teste</Text>
    </View>
  );
}
