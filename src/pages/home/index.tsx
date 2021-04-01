import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {createDrawerNavigator,DrawerContentScrollView, DrawerItemList, DrawerItem,} from '@react-navigation/drawer';
import styles from '../home/styles';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

function Feed({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <RectButton onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={styles.button} >
          <Feather name="align-justify" size={25} color='#F0EFF4' />
        </RectButton>
      </View>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView  {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <MyDrawer />
  );
}
