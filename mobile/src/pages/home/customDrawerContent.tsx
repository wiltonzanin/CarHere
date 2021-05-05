import * as React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import styles from "./styles";

function CustomDrawerContent(props: DrawerContentComponentProps) {

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} labelStyle={styles.drawerText} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
