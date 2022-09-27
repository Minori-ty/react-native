import {
  Text,
  Dimensions,
  ScrollView,
  Modal,
  View,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import React, {useState, useEffect} from 'react';
// 图片点击预览
import ImageViewer from 'react-native-image-zoom-viewer';
// 图片自动计算高度
import AutoHeightImage from 'react-native-auto-height-image';
import axios from 'axios';
import {useTailwind} from 'tailwind-rn';

const imgArr = [
  {
    url: 'https://img1.baidu.com/it/u=1965517455,4274424442&fm=253&fmt=auto&app=138&f=PNG?w=499&h=334',
    props: {},
  },
  {
    url: 'https://img0.baidu.com/it/u=3299800986,3600242123&fm=253&fmt=auto&app=138&f=JPEG?w=1000&h=500',
    props: {},
  },
  {
    url: 'https://camo.githubusercontent.com/7ecaf63b4f6b3f3671ccfd426fc28ebee562031638e4b3cffb7e928e02087ea2/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f333834302f312a6266376964736c356a535f61696339746f55565557412e706e67',
    props: {},
  },
  {
    url: 'https://raw.githubusercontent.com/fzyzcjy/flutter_rust_bridge/master/book/logo.png',
    props: {},
  },
  {
    url: 'https://cdn.fs.teachablecdn.com/1bhBbym0Qfq9mKe85cjy',
    props: {},
  },
];

export default function Home(prop) {
  const [imgStatus, setImgStatus] = useState({visible: false, index: 0});
  const tailwind = useTailwind();

  useEffect(() => {
    async function init() {
      const {data} = await axios.get('https://www.baidu.com');
      console.log(data);
    }
    init();
    console.log(88);
  }, []);

  return (
    <ScrollView>
      <Button
        title="跳转到about"
        onPress={() => prop.navigation.navigate('About')}
      />
      <Text style={(tailwind('text-yellow-500'), style.tailwindcss)}>App</Text>
      {imgArr.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            onPress={() => {
              setImgStatus({visible: true, index: index});
            }}>
            <AutoHeightImage
              width={Dimensions.get('window').width}
              source={{uri: item.url}}
            />
          </TouchableOpacity>
        );
      })}
      <View style={style.Container}>
        <Modal
          animationType={'fade'}
          transparent={true}
          visible={imgStatus.visible}
          onRequestClose={() => {
            setImgStatus({visible: false, index: 0});
          }}>
          <ImageViewer
            imageUrls={imgArr}
            index={imgStatus.index} //图片数组下标
            saveToLocalByLongPress={true}
            maxOverflow={0}
            menuContext={{saveToLocal: '保存图片', cancel: '取消'}}
            enableImageZoom={true}
            onClick={() => setImgStatus({visible: false, index: 0})}
          />
        </Modal>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  Container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  tailwindcss: {
    color: 'red',
  },
});
