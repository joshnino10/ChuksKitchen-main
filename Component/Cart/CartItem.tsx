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
import AntDesign from '@expo/vector-icons/AntDesign';
import { useCart, CartItem } from '../../context/CartContext';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Cartitem() {
  const { cartItems, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart();
  const router = useRouter();

  const handleClearCart = () => {
    Alert.alert(
      'Clear Cart',
      'Are you sure you want to remove all items from your cart?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Clear', 
          style: 'destructive',
          onPress: () => clearCart()
        }
      ]
    );
  };

  const renderCartItem = ({ item }: { item: CartItem }) => {
    return (
      <View style={styles.cartItem}>
        <Image 
          source={item.image} 
          style={styles.itemImage} 
          resizeMode="cover"
        />
        
        <View style={styles.itemDetails}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={styles.itemName}>{item.name}</Text>
             <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
          
          <View style={styles.quantityContainer}>
            <TouchableOpacity 
              style={styles.quantityButton}
              onPress={() => updateQuantity(item.id, item.quantity - 1)}
            >
              <AntDesign name="minus" size={16} color="#fff" />
            </TouchableOpacity>
            
            <Text style={styles.quantityText}>{item.quantity}</Text>
            
            <TouchableOpacity 
              style={styles.quantityButton}
              onPress={() => updateQuantity(item.id, item.quantity + 1)}
            >
              <AntDesign name="plus" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        
        <TouchableOpacity 
          style={styles.removeButton}
          onPress={() => removeFromCart(item.id)}
        >
          <AntDesign name="delete" size={20} color="#ff4757" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>

      <Ionicons name="chevron-back" size={24} color="black" />
        {cartItems.length > 0 && (
          <TouchableOpacity onPress={handleClearCart}>
            <Text style={styles.clearButton}>Clear All</Text>
          </TouchableOpacity>
        )}
      </View>

      {cartItems.length === 0 ? (
        <View style={styles.emptyCartContainer}>
         <Image style={{width:120, height:120}} source={require('../../assets/images/emptycart icon.png')}/>
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
          <Text style={styles.emptyCartSubText}>Looks like you haven't added anything
          to your fresh basket yet.</Text>
          <TouchableOpacity 
            style={styles.shopButton}
            onPress={() => router.push('/home')}
          >
            <Text style={styles.shopButtonText}>Start Shopping</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.cartList}
            showsVerticalScrollIndicator={false}
          />
          
        
            
         
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'White',
    paddingTop: Platform.OS === "android"? StatusBar.currentHeight: 0
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
 
  },
  headerTitle: {
    color: '#cef262',
    fontSize: 22,
    fontWeight: 'bold',
  },
  clearButton: {
    color: '#ff4757',
    fontSize: 16,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  emptyCartText: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 24,
    marginTop: 10,
   
  },
  emptyCartSubText:{
    marginTop: 10,
    fontSize: 16,
    color: '#9B9A9A',
    fontFamily: 'PoppinsMedium',
    textAlign:'center',

  },

  shopButton: {
    marginTop:15,
    backgroundColor: '#FE8300',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  shopButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cartList: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 120,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#FE830033',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  itemImage: {
    width: 93,
    height: 86,
    resizeMode:'center',

  },

  itemDetails: {
    flex: 1,
    marginLeft: 12,
  },
  itemName: {
    color:  "#000000",
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  itemPrice: {
    color: '##000000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#3d3d47',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 12,
  },
  removeButton: {
    padding: 10,
  },
  checkoutContainer: {
   
    backgroundColor: '#1e1d24',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  totalText: {
    color: '#9e9e9e',
    fontSize: 18,
  },
  totalAmount: {
    color: '#4cd137',
    fontSize: 20,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#4cd137',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 10,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkoutIcon: {
    marginLeft: 8,
  },
});

