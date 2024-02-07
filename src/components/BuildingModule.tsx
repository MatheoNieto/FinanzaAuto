import React from 'react';
import Lottie from 'lottie-react-native';
import { Lotties } from '@assets/lotties';
import { StyleSheet, Text, View } from 'react-native';

const BuildingModule = () => {
  return (
    <View style={styles.container}>
      <Lottie
        source={Lotties.building}
        autoPlay
        loop
        style={{ width: '90%', marginHorizontal: 5 }}
      />
      <Text style={styles.title}>This Module is in building</Text>
      <Text style={styles.description}>We are working for you</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'bold',
    fontSize: 12,
    marginVertical: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 23,
    textAlign: 'center',
  },
});

export default BuildingModule;
