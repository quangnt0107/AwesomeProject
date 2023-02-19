import React, { useEffect, useState } from 'react'
import { Text, View, Alert } from 'react-native';
import InputGroup from '../../components/InputGroup/InputGroup';
import * as styles from './KetQuaHocTap.styles';


const KetQuaHocTap = () => {
  const [rank, setRank] = useState('');
  const [result, setResult] = useState({ k1: 0, k2: 0 });

  const validateInput = (name, value) => {
    if(parseInt(value) > 10) {
      Alert.alert(
        'Title',
        'Điểm <= 10',
        [
          {text: 'Cancel', style: 'cancel'},
          {text: 'OK'}
        ]
      );
      setResult({[name]: 0 });
      return;
    };
  };
  

  useEffect(() => {
    handleRank(result);
  }, [result.k1, result.k2]);

  const handleResultBlur = (e) => {
    console.log(result);
  };

  const handleRank = (result) => {
    if(!result.k1 || !result.k2) {
      setRank('');
      return;
    }

    let rank = '';

    const arrange = (parseInt(result.k1) + parseInt(result.k2)) / 2;

    if(arrange > 7) {
      rank = 'gioi';
    }else if(arrange > 5) {
      rank = 'kha';
    }else if(arrange > 4) {
      rank = 'trung binh';
    }else {
      rank = 'kem';
    }
    setRank(rank);
  };


  const handleResultChangeText = (name, value) => {
    validateInput(name, value);

    setResult({
      ...result,
      [name]: value,
    });
  };

  const handleResultChange = (e, name) => {
    validateInput(e.target.value);

    setResult({
      ...result,
      [name]: e.target.value,
    });
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Xếp loại học tập</Text>
      <InputGroup 
        label='Điểm học kỳ 1' 
        placeholder='Nhập điểm học kỳ 1'
        keyboardType="numeric"
        maxLength={2}
        value={result.k1}
        onBlur={handleResultBlur}
        onChangeText={(value) => handleResultChangeText('k1', value)}
        onChange={(e) => handleResultChange(e, 'k1')}
        />
      <InputGroup 
        label='Điểm học kỳ 2' 
        placeholder='Nhập điểm học kỳ 2'
        keyboardType="numeric"
        maxLength={2}
        value={result.k2}
        onBlur={handleResultBlur}
        onChangeText={(value) => handleResultChangeText('k2', value)}
        onChange={(e) => handleResultChange(e, 'k2')}
        />
      <InputGroup 
        label='Xếp loại' 
        editabe={false}
        value={rank}
        />
    </View>
  )
}

export default KetQuaHocTap;
