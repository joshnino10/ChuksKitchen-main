import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCart } from '../../context/CartContext';

export default function ConfirmOrder() {
  const { cartItems } = useCart();

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={item.image} />

    
      <View style={styles.rightContainer}>
        <Image
          style={styles.icon}
          source={require('../../assets/images/sharp-verified.png')}
        />
        <Text style={styles.deliveryTime}>35-40 mins</Text>
      </View>
      <Text style={styles.orderConfirmed}>Order Confirmed!</Text>





    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    padding: 20,
    alignItems: 'center',
  },
  itemContainer: { 
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  image: {
    width: 280,
    height: 180,
    borderRadius: 12,
    resizeMode: 'contain',
  },
  rightContainer: {
    marginTop:-50,
    marginLeft: 194,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 34,
    height: 34,
    marginBottom: 8,
  },
  deliveryTime: {
    marginTop:-4,
    fontSize: 12,
    marginLeft:40,
    color: '#555',
    fontFamily: 'montserratSemiBold',
    fontWeight:'600',
  },
  orderConfirmed:{
    marginTop:10,
    fontSize:32,
    fontFamily:'montserratSemiBold',
    fontWeight:'600',


  },
});