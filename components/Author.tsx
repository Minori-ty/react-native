import {View, Text, Button} from 'react-native';
import React from 'react';
import {IProp} from '../types';

export default function Author(prop: IProp) {
  return (
    <View>
      <Text>Author</Text>
      <Button
        title="跳转到小说"
        onPress={() => prop.navigation.navigate('novel')}
      />
    </View>
  );
}
