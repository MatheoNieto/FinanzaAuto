import * as React from 'react';
import { View, Platform, StyleSheet, Text } from 'react-native';
import {
  SafeAreaInsetsContext,
  SafeAreaView,
} from 'react-native-safe-area-context';
import { palette } from '@theme/palette';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ScreenHeaderBox = () => (
  <SafeAreaInsetsContext.Consumer>
    {insets => (
      <SafeAreaView
        style={[{ flex: 0, backgroundColor: 'white' }, styles.shadow]}>
        <View
          style={{
            marginTop:
              (insets?.top ?? 0) + Platform.select({ ios: -50, default: 24 }),
            paddingVertical: Platform.select({ android: 15, ios: 0 }),
          }}>
          <Text
            style={{
              marginHorizontal: 15,
              marginBottom: 16,
              fontSize: 30,
              color: palette.primary,
              fontWeight: 'bold',
            }}>
            Finanzaauto
          </Text>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: palette.primary,
              height: 50,
              padding: 10,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Ionicons name="menu-sharp" color="white" size={25} />
          </View>
        </View>
      </SafeAreaView>
    )}
  </SafeAreaInsetsContext.Consumer>
);
const styles = StyleSheet.create({
  shadow: {
    height: 170,
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
