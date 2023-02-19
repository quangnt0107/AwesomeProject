import React, { useEffect, useState } from 'react';
import { Alert, Button, Image, Text, View } from 'react-native';
import InputGroup from '../../components/InputGroup/InputGroup';

import * as styles from './YearTransformation.styles';

const year = new Date();
const fullYear = year.getFullYear();


const YearTransformation = () => {
  const [namDuongLich, setNamDuongLich] = useState(fullYear);
  const [namCanChi, setNamCanChi] = useState('');
  const [hinhAnh, setHinhAnh] = useState('');


  useEffect(() => {
    handleNamDuongLichChange(namDuongLich);
  }, [namDuongLich]);


  const can = ["Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
  // const chi = ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"];
  const chi = ["ty", "su", "dan", "mao", "thin", "ti", "ngo", "mui", "than", "dau", "tuat", "hoi"];

  const handleNamDuongLichChange = (value) => {
    setNamDuongLich(value);
  };

  const handleConvertClick = () => {
    if(!namDuongLich) {
      Alert.alert(
        `What's up!`,
        'Nhập năm dương lịch đi bro!',
        [
          {text: 'Cancel', style: 'cancel'},
          {text: 'OK'}
        ]
      );
      setNamCanChi('');
      return;
    }
    if(namDuongLich.length < 4) {
      Alert.alert(
        `What's up!`,
        'Nhập năm dương lịch đi bro!',
        [
          {text: 'Cancel', style: 'cancel'},
          {text: 'OK'}
        ]
      );
      setNamCanChi('');
      return; 
    }

    const canIndex = (parseInt(namDuongLich) - 1900) % 10;
    const chiIndex = (parseInt(namDuongLich) - 1900) % 12;
    // console.log(chiIndex);
    setNamCanChi(can[canIndex] + " " + chi[chiIndex]);
    handleHinhAnh(chiIndex);
  };

  const handleHinhAnh = (chiIndex) => {
    let image = require('./assets/images/_1.jpg');

    switch(chiIndex + 1) {
      case 1:
        setHinhAnh(image);
        break;
      case 2:
        image = require('./assets/images/_2.jpg');
        setHinhAnh(image);
        break;
      case 3:
        image = require('./assets/images/_3.jpg');
        setHinhAnh(image);
        break;
      case 4:
        image = require('./assets/images/_4.jpg');
        setHinhAnh(image);
        break;
      case 5:
        image = require('./assets/images/_5.jpg');
        setHinhAnh(image);
        break;
      case 6:
        image = require('./assets/images/_6.jpg');
        setHinhAnh(image);
        break;
      case 7:
        image = require('./assets/images/_7.jpg');
        setHinhAnh(image);
        break;
      case 8:
        image = require('./assets/images/_8.jpg');
        setHinhAnh(image);
        break;
      case 9:
        image = require('./assets/images/_9.jpg');
        setHinhAnh(image);
        break;
      case 10:
        image = require('./assets/images/_10.jpg');
        setHinhAnh(image);
        break;
      case 11:
        image = require('./assets/images/_11.jpg');
        setHinhAnh(image);
        break;
      case 12:
        image = require('./assets/images/_12.jpg');
        setHinhAnh(image);
        break;
      default:
        setHinhAnh(image);
    }
  }

  return (
    <View>
      <Text style={styles.title}>Chuyển đổi năm dương lịch sáng năm Can Chi</Text>
      
      <InputGroup 
        label='Năm dương lịch:' 
        placeholder='Nhập Năm dương lịch'
        keyboardType="numeric"
        value={namDuongLich + ''} 
        onChangeText={handleNamDuongLichChange}
      />
      <InputGroup 
        label='Năm can chi' 
        placeholder=''
        editabe={false}
        value={namCanChi}
      />

        <Button
          onPress={handleConvertClick}
          title="Transform"
          accessibilityLabel="Learn more about this purple button"
        />

        <Image 
          style={styles.img}
          source={hinhAnh}
        />


    </View>
  )
}

export default YearTransformation;
