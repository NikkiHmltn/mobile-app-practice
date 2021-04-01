/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import FlipCard from 'react-native-flip-card';
import Swiper from 'react-native-deck-swiper';

const Flashcard = ({question, answer}) => {
  return(
    <FlipCard
      flip={false}
      friction={6}
      perspective={1000}
      flipHorizontal={true}
      flipVertical={false}
      clickable={true}
      style={styles.card}
      alignHeight={true}
      // alignWidth={true}
    >
      {/* Face Side */}
      <View style={styles.face}>
        <Text style={styles.question}>{question}</Text>
      </View>
      {/* Back Side */}
      <View style={styles.back}>
        <Text style={styles.answer}>{answer}</Text>
      </View>
    </FlipCard>
  )
}

const App = () => {
  const cards = [
    {
      question: "What does CORS stand for?",
      answer: "Cross Origin Resource Sharing"
    },
    {
      question: "What is Big O Notation?",
      answer: "Algorithms that descript the complexity of code. "
    },
    {
      question: "What is a stream?",
      answer: "A sequence of data, like I/O"
    },
    {
      question: "What are the four different OOPS principles?",
      answer: "1) encapsulation 2) abstraction 3) inheritance 4) polymorphism"
    },
  ];

  return (
    <View style={styles.container}>
      {/* <Flashcard question="What is your name?" answer="Nikki"/> */}
        <Swiper
            cards={cards}
            renderCard={(card) => {
                return (
                    <Flashcard question={card.question} answer={card.answer} />
                )
            }}
            cardIndex={0}
            backgroundColor={'#ebd8b7'}
            infinite = {true}
            stackSize= {3}>
        </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebd8b7'
  },
  face: {
    flex: 1, 
    backgroundColor: '#9a8194',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#9a8194",
    elevation: 5,
    padding: 30,
  }, 
  back: {
    flex: 1,
    backgroundColor: '#99bbad',
    justifyContent: 'center',
    alignItems: 'center', 
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#99bbad",
    elevation: 5,
    padding: 30,
  }, 
  card: {
    width: '100%',
    flex: 1,
  },
  flashcard: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ebd8b7",
    justifyContent: "center",
    backgroundColor: "#ebd8b7",
    alignItems: "center",
    elevation: 5,
    
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent",
  },
  answer: {
    color: "white",
    fontSize: 22,
  },
  question: {
    color: "white",
    fontSize: 24,
  },
});

export default App;
