import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from "react";
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useCart } from '../../context/CartContext';

import { populardishes } from "@/Component/PopularDishes/Populardishes";
import Animated, {
  Extrapolate,
  FadeInLeft,
  interpolate,
  Layout,
  SlideOutLeft,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { useLocalSearchParams, useRouter } from 'expo-router';

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.6;
const SPACING = 20;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export default function SinglePopularDishes() {
  const { addToCart, isInCart, getItemQuantity } = useCart();
  const router = useRouter();
  const { id } = useLocalSearchParams<{id: string}>(); // <-- Get product ID from route

  // Find the product by id
  const product = populardishes.find((p) => String(p.id) === id);
  if (!product) return <View><Text>Product not found</Text></View>;

  const [count, setCount] = useState(0);
  const scrollX = useSharedValue(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const incrementCount = () => setCount(prev => prev + 1);
  const decrementCount = () => setCount(prev => Math.max(prev - 1, 0));

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  const renderItem = ({ item, index }) => (
    <CarouselItem item={item} index={index} scrollX={scrollX} />
  );

  const alreadyInCart = isInCart(product.id);
  const cartQuantity = getItemQuantity(product.id);

  const handleAddToCart = () => {
    if (count === 0) return;
    addToCart({
      id: product.id,
      name: product.Food,
      price: product.Price,
      image: product.SingleImage,
      quantity: count,
    });
    setCount(0);
  };

  const goToCart = () => router.push('/orders');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => router.back()} style={styles.iconButton}>
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={goToCart} style={styles.iconButton}>
            <Image source={require('../../assets/images/cardproduct.png')} style={styles.topIcon} />
          </TouchableOpacity>
        </View>

        {/* Carousel */}
        <AnimatedFlatList
          data={populardishes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          snapToInterval={ITEM_WIDTH + SPACING}
          decelerationRate="fast"
          contentContainerStyle={styles.carouselContainer}
          onMomentumScrollEnd={(event) => {
            const index = Math.round(event.nativeEvent.contentOffset.x / (ITEM_WIDTH + SPACING));
            setActiveIndex(index);
            setCount(0);
          }}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          renderItem={renderItem}
        />
      </View>

      {/* Details */}
      <Animated.View
        key={product.id} // <-- Use product id here
        layout={Layout.springify()}
        entering={FadeInLeft.duration(600)}
        exiting={SlideOutLeft.duration(600)}
        style={styles.detailsContainer}
      >
        {/* Food name and price */}
        <View style={styles.foodHeader}>
          <Text style={styles.foodName}>{product.Food}</Text>
          <Text style={styles.foodPrice}>{product.Price}</Text>
        </View>

        {/* Time and calories */}
        <View style={styles.foodMeta}>
          <View style={styles.metaItem}>
            <Image source={require('../../assets/images/timer icon.png')} style={styles.metaIcon} />
            <Text style={styles.Time}>{product.Time}</Text>
          </View>
          <View style={styles.metaItem}>
            <Image source={require('../../assets/images/cal icon.png')} style={styles.metaIcon} />
            <Text style={styles.kcalText}>{product.Calories || "450 Kcal"}</Text>
          </View>
        </View>

        {/* In Cart Badge */}
        {alreadyInCart && (
          <View style={styles.inCartBadge}>
            <Text style={styles.inCartText}>✓ {cartQuantity} already in cart</Text>
          </View>
        )}

        {/* Description */}
        <View style={styles.DescriptionContainer}>
          <Text style={styles.Label}>Description</Text>
          <Text style={styles.descriptions}>{product.Description}</Text>
        </View>

        <View style={styles.BottomContainer}>
          <View style={styles.CountContainer}>
            <TouchableOpacity onPress={decrementCount}>
              <Image style={styles.countIcon} source={require('../../assets/images/minus.png')} />
            </TouchableOpacity>

            <Text style={styles.countText}>{count}</Text>

            <TouchableOpacity onPress={incrementCount}>
              <Image style={styles.countIcon} source={require('../../assets/images/plus.png')} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[styles.btn, count === 0 && styles.btnDisabled]}
            onPress={handleAddToCart}
            disabled={count === 0}
          >
            <Text style={styles.Addtext}>{alreadyInCart ? 'Add More' : 'Add to Cart'}</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}

// Carousel Item
function CarouselItem({ item, index, scrollX }) {
  const animatedStyle = useAnimatedStyle(() => {
    const position = index * (ITEM_WIDTH + SPACING) - scrollX.value;
    const scale = interpolate(position, [-ITEM_WIDTH, 0, ITEM_WIDTH], [0.8, 1, 0.7], Extrapolate.CLAMP);
    const rotateY = interpolate(position, [-ITEM_WIDTH, 0, ITEM_WIDTH], [30, 0, -30], Extrapolate.CLAMP);

    return {
      transform: [
        { perspective: 190 },
        { scale },
        { rotateY: `${rotateY}deg` },
      ],
      zIndex: scale === 1 ? 1 : 0,
    };
  });

  return (
    <Animated.View style={[styles.carouselItem, animatedStyle]}>
      <Image source={item.SingleImage} style={styles.carouselImage} />
    </Animated.View>
  );
}

// Styles remain exactly the same
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { height: 400, backgroundColor: "#FE8300", borderBottomLeftRadius: 550, borderBottomRightRadius: 550, overflow: "hidden", justifyContent: "flex-start" },
  topBar: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 16, paddingTop: 60, position: "absolute", width: "100%", zIndex: 10 },
  iconButton: { backgroundColor: "white", justifyContent: "center", alignItems: "center", borderRadius: 2000, height: 34, width: 34 },
  topIcon: { width: 24, height: 24 },
  carouselContainer: { paddingHorizontal: (width - ITEM_WIDTH) / 2, paddingTop: 100 },
  carouselItem: { width: ITEM_WIDTH, marginRight: SPACING, alignItems: "center" },
  carouselImage: { width: '100%', marginTop: 100, height: 180, resizeMode: "contain" },
  detailsContainer: { paddingHorizontal: 16, marginTop: 20 },
  foodHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  foodName: { fontFamily: "MontserratSemiBold", fontSize: 18, fontWeight: "600" },
  foodPrice: { fontFamily: "MontserratSemiBold", fontSize: 18, color: "#FE8300" },
  foodMeta: { flexDirection: "row", marginTop: 10, gap: 20 },
  metaItem: { flexDirection: "row", alignItems: "center" },
  metaIcon: { width: 20, height: 20, marginRight: 5 },
  Time: { fontFamily: 'MontserratMedium', fontSize: 10, color: "#333" },
  kcalText: { fontFamily: 'MontserratMedium', fontSize: 10, color: "#000000" },
  inCartBadge: { marginTop: 10, backgroundColor: '#FFF3E0', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20, alignSelf: 'flex-start' },
  inCartText: { fontFamily: 'MontserratMedium', fontSize: 11, color: '#FE8300' },
  DescriptionContainer: { marginTop: 50 },
  Label: { fontFamily: "MontserratSemiBold", fontSize: 18 },
  descriptions: { marginTop: 15, fontFamily: "MontserratMedium", fontSize: 12, color: '#000000', fontWeight: '500', lineHeight: 18 },
  BottomContainer: { marginTop: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  CountContainer: { flexDirection: 'row', gap: 5, padding: 5, borderRadius: 9, alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#D3D3D3' },
  countText: { fontFamily: 'MontserratMedium', fontSize: 14, minWidth: 20, textAlign: 'center' },
  countIcon: { width: 26, height: 26 },
  btn: { backgroundColor: '#FE8300', padding: 20, borderRadius: 12 },
  btnDisabled: { backgroundColor: '#CCCCCC' },
  Addtext: { fontFamily: 'MontserratSemiBold', color: "#FFFFFF", fontSize: 16 },
});