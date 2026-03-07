import React, { useState } from 'react'
import { Image,ScrollView,StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import ActiveRiceMenu from '../ActiveRiceMenu/ActiveRiceMenu'
import ActiveSwallowMenu from '../ActiveSwallowMenu/ActiveSwallowMenu'
import ActiveSoupMenu from '../ActiveSoupMenu/ActiveSoupMenu'
import ActiveSnacks from '../ActiveSnacksMenu/ActiveSnacks'
import ActiveDrinksMenu from '../AcitveDrinksMenu/ActiveDrinksMenu'

export default function ActiveMenu() {

  const [ActiveTab, setActiveTab] = useState('Rice')

  const menuTab = [
    { id:'1', icon: require('../../assets/images/rice icon.png'), food:'Rice' },
    { id:'2', icon: require('../../assets/images/swallow icon.png'), food:'Swallow' },
    { id:'3', icon: require('../../assets/images/soup icon.png'), food:'Soup' },
    { id:'4', icon: require('../../assets/images/snacks.png'), food:'Snacks' },
    { id:'5', icon: require('../../assets/images/drinks icon.png'), food:'Drinks' },
  ]

  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Explore Our Menu</Text>

      <View style={styles.row}>
        {menuTab.map((item)=>{

          const isActive = ActiveTab === item.food

          return(
            <TouchableOpacity
              key={item.id}
              style={styles.menuItem}
              onPress={() => setActiveTab(item.food)}
            >

              <View style={[styles.iconBox, isActive && styles.activeIcon]}>
                <Image style={styles.icon} source={item.icon}/>
              </View>

              <Text style={[styles.foodText, isActive && styles.activeText]}>
                {item.food}
              </Text>

            </TouchableOpacity>
          )
        })}
      </View>

      <View style={styles.ContentContainer}>
        <ScrollView style={styles.scrollContent}>
          {ActiveTab === 'Rice' && <ActiveRiceMenu/>}
          {ActiveTab === 'Swallow' && <ActiveSwallowMenu/>}
          {ActiveTab === 'Soup' && <ActiveSoupMenu/>}
          {ActiveTab === 'Snacks' && <ActiveSnacks/>}
          {ActiveTab === 'Drinks' && <ActiveDrinksMenu/>}
       
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Container:{
    marginTop:20,
    marginBottom:8
  },

  Title:{
    paddingHorizontal:16,
    fontFamily:'MontserratSemiBold',
    fontSize:16,
    fontWeight:'600',
    color:'#000000',
    marginBottom:20
  },

  row:{
    flexDirection:'row',
    justifyContent:'space-between'
  },

  menuItem:{
    
    paddingHorizontal:16,
    marginBottom:20,
    alignItems:'center'
  },

  iconBox:{
    padding:12,
    borderRadius:12,
  },

  activeIcon:{
    backgroundColor:'#FE8300'
  },

  icon:{
    width:28,
    height:28
  },

  foodText:{
    fontFamily: 'MontserratMedium',
    fontSize:12,
    marginTop:6,
    color:'#000'
  },


  activeText:{
    fontFamily: 'MontserratMedium',
    color:'#FE8300',
    fontWeight:'600'
  },

  scrollContent: {
    paddingBottom: 200,
  },

  ContentContainer:{
    marginBottom:80

  }
})