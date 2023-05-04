import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {color} from '../utilities/Colors'

const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';

  return (
    <SafeAreaView style={{flex: 1, backgroundColor:color.gray}}>
      {/*Top Large Image */}
      <View style={{backgroundColor:color.primary, paddingBottom:30, borderBottomEndRadius:10}}> 
      <Image
        source={{uri: BASE_PATH + proileImage}}
        style={styles.sideMenuProfileIcon}
      />
      </View>
     
      <DrawerContentScrollView {...props} >
        <DrawerItemList {...props}  />
        <DrawerItem
          label="Visit Us"
          onPress={() => Linking.openURL('https://ndmc.ephi.gov.et')}
        />
        <View style={styles.customItem}>
          <Text
            onPress={() => {
              Linking.openURL('https://vizhub.ephi.gov.et/');
            }}>
            Rate Us
          </Text>
          <Image
            source={{uri: BASE_PATH + 'star_filled.png'}}
            style={styles.iconStyle}
          />
        </View>
      </DrawerContentScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
    backgroundColor:color.gray,
    margin:20
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;