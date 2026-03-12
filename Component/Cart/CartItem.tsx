import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  StatusBar,
  Platform
} from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useCart, CartItem } from '../../context/CartContext';

export default function Cartitem() {

  const { cartItems, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart();
  const router = useRouter();

  const deliveryFee = 0;
  const total = totalPrice + deliveryFee;
  
  const gotoCheckout = ()=> {
    router.push('/checkoutorder')
  }

  const handleClearCart = () => {
    Alert.alert(
      'Clear Cart',
      'Are you sure you want to remove all items?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Clear', style: 'destructive', onPress: () => clearCart() }
      ]
    );
  };

  const renderCartItem = ({ item }: { item: CartItem }) => {
    return (
      <View style={styles.cartItem}>
       <View>

        <Image
          source={item.image}
          style={styles.itemImage}
          />
          </View>

        <View style={styles.itemDetails}>

          <View style={styles.rowBetween}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>

          <View style={styles.quantityContainer}>

            {/* Remove */}
            <View style={styles.Removedetails}>
              <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                <Image
                  style={{ width: 16, height: 18 }}
                  source={require('../../assets/images/delete icon.png')}
                />
              </TouchableOpacity>

              <Text style={styles.RemoveText}>Remove</Text>
            </View>

            {/* Counter */}
            <View style={styles.CountContainer}>

              <TouchableOpacity
                onPress={() => {
                  if (item.quantity <= 1) {
                    removeFromCart(item.id);
                  } else {
                    updateQuantity(item.id, item.quantity - 1);
                  }
                }}
              >
                <Image
                  style={styles.counterIcon}
                  source={require('../../assets/images/minus.png')}
                />
              </TouchableOpacity>

              <Text>{item.quantity}</Text>

              <TouchableOpacity
                onPress={() => updateQuantity(item.id, item.quantity + 1)}
              >
                <Image
                  style={styles.counterIcon}
                  source={require('../../assets/images/plus.png')}
                />
              </TouchableOpacity>

            </View>

          </View>

        </View>

      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>

        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>

        {cartItems.length > 0 && (
          <TouchableOpacity onPress={handleClearCart}>
            <Text style={styles.clearButton}>Clear All</Text>
          </TouchableOpacity>
        )}

      </View>

      {/* Empty Cart */}
      {cartItems.length === 0 ? (

        <View style={styles.emptyCartContainer}>

          <Image
            style={{ width: 120, height: 120 }}
            source={require('../../assets/images/emptycart icon.png')}
          />

          <Text style={styles.emptyCartText}>Your cart is empty</Text>

          <Text style={styles.emptyCartSubText}>
            Looks like you haven't added anything
            to your basket yet.
          </Text>

          <TouchableOpacity
            style={styles.shopButton}
            onPress={() => router.push('/home')}
          >
            <Text style={styles.shopButtonText}>Start Shopping</Text>
          </TouchableOpacity>

        </View>

      ) : (

        <>
          {/* Cart Items */}
          <FlatList
            data={cartItems}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.cartList}
            showsVerticalScrollIndicator={false}
          />

          {/* Checkout Section */}
          <View style={styles.checkoutContainer}>

            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Subtotal</Text>
              <Text style={styles.priceValue}>{totalPrice}</Text>
            </View>

            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Delivery Fee</Text>
              <Text style={styles.priceValue}>
                {deliveryFee === 0 ? 'Free' : `#${deliveryFee}`}
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.priceRow}>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.totalAmount}>{total}</Text>
            </View>

            <TouchableOpacity onPress={gotoCheckout}  style={styles.checkoutButton}>
              <Text style={styles.checkoutText}>Checkout</Text>
            </TouchableOpacity>

          </View>
        </>
      )}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12
  },

  clearButton: {
    color: '#ff4757',
    fontSize: 16
  },

  cartList: {
    paddingHorizontal: 16,
    paddingBottom: 200
  },

  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#FE830033',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16
  },

  itemImage: {
    width: 93,
    height: 86,
    resizeMode:'contain',
  },

  itemDetails: {
    flex: 1,
    marginLeft: 4
  },

  rowBetween: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between'
  },

  itemName: {
    fontFamily: 'MontserratSemiBold',
    fontSize: 18,
    fontWeight: '600'
  },

  itemPrice: {
    fontFamily: 'MontserratSemiBold',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000'
  },

  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },

  Removedetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },

  RemoveText: {
    fontFamily: 'MontserratSemiBold',
    fontSize: 16,
    color: '#FF4205'
  },

  CountContainer: {
    flexDirection: 'row',
    gap: 5,
    padding: 5,
    borderRadius: 9,
    alignItems: 'center',
    backgroundColor: '#D3D3D3'
  },

  counterIcon: {
    width: 26,
    height: 26
  },

  checkoutContainer: {
    position: 'absolute',
    bottom: 100,
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#eee'
  },

  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },

  priceLabel: {
    color: '#888',
    fontSize: 16
  },

  priceValue: {
    fontSize: 16,
    color: '#888'
  },

  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10
  },

  totalText: {
    fontSize: 18,
    fontWeight: '600'
  },

  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  checkoutButton: {
    marginHorizontal:25,
    backgroundColor: '#FE8300',
    padding: 16,
    borderRadius: 12,
    marginTop: 15,
    alignItems: 'center'
  },

  checkoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600'
  },

  emptyCartContainer: {
    fontFamily: 'poppinsSemiBold',
    flex: 1,
    paddingHorizontal:20,
    alignSelf:'center',
    justifyContent: 'center',
    alignItems: 'center'
  },

  emptyCartText: {
    fontFamily:'poppinsSemiBold',
    fontWeight:'600',
    fontSize: 24,
    marginTop: 10
  },

  emptyCartSubText: {
    fontFamily:'poppinsMedium',
    fontWeight:"600",
    fontSize:18,
    color: '#9B9A9A',
    marginTop: 10,
    textAlign: 'center'
  },

  shopButton: {
    marginTop: 20,
    fontFamily:'poppinsMedium',
    backgroundColor: '#FE8300',
    padding: 12,
    borderRadius: 10
  },

  shopButtonText: {
    fontFamily:'poppinsSemiBold',
    fontSize:20,
    color: '#fff',
    fontWeight: 'bold'
  }

});