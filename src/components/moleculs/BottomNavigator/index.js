import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TabItem } from '../../atoms/';
import { color } from '../../../utils';

const BottomNavigator = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.page}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
        <TabItem
        key={index}
        label={label}
        active={isFocused}
        onPress={onPress}
        onLongPress={onLongPress}
        />
        );
      })}
    </View>
    )
}

export default BottomNavigator

const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 53,
        paddingVertical: 12,
        backgroundColor: color.secondary
    }
})
