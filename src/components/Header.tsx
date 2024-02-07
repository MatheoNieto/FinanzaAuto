import * as React from 'react';
import { View, Platform, StyleSheet, Text } from 'react-native';
import {
  SafeAreaInsetsContext,
  SafeAreaView,
} from 'react-native-safe-area-context';

const ScreenHeaderBox = () => (
  <SafeAreaInsetsContext.Consumer>
    {insets => (
      <SafeAreaView
        style={[{ flex: 0, backgroundColor: 'white' }, styles.shadow]}>
        <View
          style={{
            marginTop:
              (insets?.top ?? 0) + Platform.select({ ios: -20, default: 24 }),
            paddingVertical: Platform.select({ android: 15, ios: 0 }),
          }}>
          <Text>Header</Text>
        </View>
      </SafeAreaView>
    )}
  </SafeAreaInsetsContext.Consumer>
);
const styles = StyleSheet.create({
  shadow: {
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 16,
    shadowRadius: 10,
    shadowColor: 'rgba(47, 51, 80, 0.12)',
    shadowOpacity: 1,
  },
  container: {
    zIndex: 1,
  },
});

export default ScreenHeaderBox;
