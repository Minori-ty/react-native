import {View, Text, Button} from 'react-native';
import React from 'react';
import {IProp} from '../types';

export default function Novel(prop: IProp) {
  return (
    <View>
      <Text>Novel</Text>
      <Button
        title="跳转到作者详情"
        onPress={() => prop.navigation.navigate('author')}
      />
    </View>
  );
}
