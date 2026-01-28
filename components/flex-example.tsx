import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 1, backgroundColor: 'red'}} >
        <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>Flex 1</Text>
      </View>
      <View style={{flex: 2, backgroundColor: 'darkorange'}} >
        <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>Flex 2</Text>
      </View>
      <View style={{flex: 3, backgroundColor: 'green'}} >
        <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>Flex 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Flex;