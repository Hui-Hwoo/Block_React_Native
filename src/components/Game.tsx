import {View, Text, StyleSheet, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import RandomNumber from './RandomNumber';

const shuffle = (array: Number[]) => {
  // Loop over array backwards
  for (let i = array.length - 1; i >= 0; i--) {
    // Pick random index before current element
    const randomIndex = Math.floor(Math.random() * (i + 1));
    // Swap
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
};

const Game = (props: {randomNumberCount: number; timeInterval: number}) => {
  // Initial state
  const [gameStatus, setGameStatus] = useState('PLAYING');

  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
  // prettier-ignore
  const [selectedNumbers, setSelectedNumbers] = useState([false, false, false]);
  const [target, setTarget] = useState(0);
  // const [remainingSeconds, setRemainingSeconds] = useState(props.timeInterval);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);

  // Initialize target and random numbers
  const initializeState = () => {
    const newRandomNumbers = Array.from({length: props.randomNumberCount}).map(
      () => 1 + Math.floor(10 * Math.random()),
    );
    const newTarget = newRandomNumbers
      .slice(0, props.randomNumberCount - 2)
      .reduce((acc, curr) => acc + curr, 0);
    setTarget(newTarget);
    const shuffledRandomNumbers = shuffle(newRandomNumbers);
    setRandomNumbers(newRandomNumbers);
    setSelectedNumbers(
      Array.from({length: props.randomNumberCount}).map(() => false),
    );
    setScore(0);
    setGameStatus('PLAYING');
    setCount(0);
  };

  useEffect(() => {
    initializeState();
  }, []);

  // Check game status
  useEffect(() => {
    if (count < props.randomNumberCount - 2) {
      return;
    } else if (count === props.randomNumberCount - 2) {
      setGameStatus(score === target ? 'WON' : 'LOST');
    } else {
      setGameStatus('LOST');
    }
  }, [count]);

  // Reset game
  const resetGame = () => {
    initializeState();
    // setRemainingSeconds(props.timeInterval);
  };

  // Update game status
  // useEffect(() => {}, []);

  const handlePress = (index: number, randomNumber: number) => {
    setSelectedNumbers(prevState => {
      const newSelectedNumbers = [...prevState];
      newSelectedNumbers[index] = !newSelectedNumbers[index];
      return newSelectedNumbers;
    });
    setScore(prevState => prevState + randomNumber);
    setCount(prevState => prevState + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.target, styles[`status_${gameStatus}`]]}>
        {target}
      </Text>
      <View style={styles.randomContainer}>
        <Text>
          {randomNumbers.map((randomNumber: number, index: number) => (
            <View key={index}>
              <RandomNumber
                id={index}
                randomNumber={randomNumber}
                isSelected={selectedNumbers[index]}
                handlePress={handlePress}
                isDisabled={gameStatus !== 'PLAYING'}
              />
            </View>
          ))}
        </Text>
      </View>
      <View>
        <Button title="Play Again" onPress={resetGame} />
      </View>
      <Text>Score: {score}</Text>
      <Text>{gameStatus}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1,
    paddingTop: 30,
  },
  target: {
    fontSize: 50,
    marginHorizontal: 50,
    textAlign: 'center',
  },
  randomContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  status_WON: {
    backgroundColor: 'green',
  },
  status_LOST: {
    backgroundColor: 'red',
  },
  status_PLAYING: {
    backgroundColor: '#bbb',
  },
});

export default Game;
