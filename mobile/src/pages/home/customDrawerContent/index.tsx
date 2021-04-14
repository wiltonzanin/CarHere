import * as React from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem, DrawerContentComponentProps, } from '@react-navigation/drawer';
import styles from './styles';


function CustomDrawerContent(props: DrawerContentComponentProps) {

  return (
    <DrawerContentScrollView  {...props} >
      <DrawerItemList {...props} labelStyle={styles.text} />
      <DrawerItem
        label="Fechar menu"
        labelStyle={styles.text}
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;

