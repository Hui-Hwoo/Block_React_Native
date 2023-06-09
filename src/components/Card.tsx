import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useState} from 'react';

interface CardProps {
  name: string;
  content: {
    text: string;
    imageUrl: string;
    details: string;
  }[];
}

const Card = (props: CardProps) => {
  const {name, content} = props;

  const [showMore, setShowMore] = useState(false);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.ctext}>{content[0].text}</Text>
      <TouchableOpacity onPress={() => setShowMore(!showMore)}>
        <Text style={styles.button}>🧠 Explain in depth</Text>
      </TouchableOpacity>
      <Text style={styles.ctext}>{showMore ? content[0].details.substring(0, 600) : ''}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
    height: 570,
  },
  cimage: {
    marginTop: 30,
    alignSelf: 'center',
    width: 100,
    height: 100,
  },
  title: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  ctext: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 16,
    alignSelf: 'center',
  },
  button: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default Card;
