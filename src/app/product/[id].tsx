import { Image, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/formatCurrency";
import { Button } from "@/components/button";
import { Feather } from "@expo/vector-icons";
import { BackButton } from "@/components/backButton";
import { useCartStore } from "@/stores/cartStore";
import { Redirect } from "expo-router";

export default function Product() {
  const cartStore = useCartStore();
  const { id } = useLocalSearchParams();

  const product = PRODUCTS.find((item) => item.id === id);

  function handleAddToCart() {
    cartStore.add(product!);
  }

  if (!product) {
    return <Redirect href="/" />;
  }

  return (
    <View className="flex-1">
      <Image
        source={product.cover}
        className="w-full h-52"
        resizeMode="cover"
      />

      <View className="p-5 mt-8 flex-1">
        <Text className="text-white text-xl font-heading">{product.title}</Text>
        <Text className="text-lime-400 text-2xl font-heading my-2">
          {formatCurrency(product.price)}
        </Text>
        <Text className="text-slate-400 font-body text-base leading-6 mb-6">
          {product.description}
        </Text>
        {product.ingredients.map((ingredient) => (
          <Text
            key={ingredient}
            className="text-slate-400 font-body text-base leading-6"
          >
            {"\u2022"}
            {ingredient}
          </Text>
        ))}
      </View>
      <View className="p-5 pb-8 gap-5">
        <Button onPress={handleAddToCart}>
          <Button.Icon>
            <Feather name="plus-circle" size={20} />
          </Button.Icon>
          <Button.Text>Adicionar ao pedido</Button.Text>
        </Button>

        <BackButton title="Voltar ao cardápio" href="/" />
      </View>
    </View>
  );
}
