import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import Card from './Card';

// type Course = {
//   courseId: number;
//   courseName: string;
//   content: {text: string; imageUrl: string; details: string}[];
// }

type ItemData = {
  courseId: number;
  courseName: string;
  content: {
    text: string;
    imageUrl: string;
    details: string;
  }[];
};

interface CardListProps {
  cardList: ItemData[];
}

const CardList = (props: CardListProps) => {
  const {cardList} = props;

  if (cardList && cardList.length > 0) {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={cardList}
          renderItem={({item: course}) => (
            <Card
              key={course['corseId']}
              name={course['courseName']}
              content={course['content']}></Card>
          )}
          keyExtractor={item => item.courseId.toString()}
        />
      </SafeAreaView>
    );
  } else {
    return (
      <View>
        <Text>No cards</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  cardList: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  container: {
    backgroundColor: "#edf0eb",
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CardList;
