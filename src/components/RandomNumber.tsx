import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface randomNumberProps {
  id: number;
  randomNumber: number;
  isSelected: boolean;
  handlePress: (index: number, randomNumber: number) => void;
  isDisabled: boolean;
}

const RandomNumber = (props: randomNumberProps) => {
  const {id, randomNumber, isSelected, handlePress, isDisabled} = props;

  return (
    <TouchableOpacity
      onPress={() => handlePress(id, randomNumber)}
      disabled={isDisabled}>
      <Text style={[styles.random, isSelected && styles.selected]}>
        {randomNumber}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  random: {
    backgroundColor: '#999',
    width: 100,
    marginHorizontal: 15,
    marginVertical: 25,
    fontSize: 35,
    textAlign: 'center',
  },
  selected: {
    opacity: 0.3,
  },
});

export default RandomNumber;
