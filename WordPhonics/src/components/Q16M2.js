/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import Sound from 'react-native-sound';

// list of correct answers
var correctPairs =
  [
    'Wreck',
    'Shelf',
    'Freight',
    'Napped',
    'Shelf',
    'Gnat',
    'Collision',
    'Explore',
    'Pixie',
    'Gnome',
    'Vanilla',
    'Kindergarten',
    'Wiggle',
    'Cologne',
    'Kite',
    'Around',
    'Gossip',
    'Machine',
    'Acrobat',
    'Silence',
    'Stick',
    'Android',
  ];

// list of incorrect answers
const incorrectPairs =
  [
    'Bark',
    'Bat',
    'Fly',
    'Gum',
    'Jam',
    'Pen',
    'Pitcher',
    'Rest',
    'Seal',
    'Second',
    'Watch',
  ];

  //keep track of asked questions
  const asked = []

export default function Q16M2({navigation}) {
    const [answerPair, setAnswerPair] = useState(["null", "null", "null", "null"]);
    const [correctAnswer, setCorrectAnswer] = useState("null");
    const [message, setMessage] = useState("");
    const [score, setScore] = useState(0);

    // question to be asked at top -- maybe we could generalize this
    // quiz screen
    const question = "Which word is NOT a homograph?";

    React.useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        // The screen is focused
        // Call any action
        generateQuestion();
      });

      // Return the function to unsubscribe from the event so it gets removed on unmount
      return unsubscribe;
    }, [navigation]);

    var playDef = () => {
      var sound1 = new Sound(
        require("../assets/16/16Q2.mp3"), (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound1.play(() => {
              sound1.release();
          });
        });
    }
    // runs when you click the question for testing
    const generateQuestion = () => {
      // clears message
      setMessage("");

      if(correctPairs.length == 0) {
        //resets quiz before going back to main menu
        correctPairs =
          [
            'sweet sour',
            'ascend descend',
            'sunrise sunset',
            'cold hot',
            'tighten loosen',
            'whisper yell',
            'rise fall',
            'polite rude',
            'big little',
            'boring exciting',
            'day night',
            'naughty nice',
            'young old'
          ];
        navigation.navigate("MainMenu");
      }

      //fills with random incorect
      let currentPairs = [
          incorrectPairs[pickRandom(0, incorrectPairs.length)]
      ];

      //ensures that no duplicates are added to the pairs array
      for (var i = 0; i < 3; i++) {
        const newPair = incorrectPairs[pickRandom(0, incorrectPairs.length)];
        while (currentPairs.includes(newPair)) {
          newPair = incorrectPairs[pickRandom(0, incorrectPairs.length)];
        }
        currentPairs.push(newPair);
      }

      let answer = correctPairs[pickRandom(0, correctPairs.length)];
      var index = correctPairs.indexOf(answer);
      correctPairs.splice(index, 1);

      // randomizes the location of random pair and picks a random answer
      currentPairs[pickRandom(0,4)] = answer;
      setCorrectAnswer(answer);

      setAnswerPair(currentPairs);


      return currentPairs;
    }

    const checkAnswer = (string) => {
        // just sets message for now
        if (string == correctAnswer) {
          if(correctPairs.length == 0) {
            setMessage("Correct! You are done with this quiz! Click to go back to the Main Menu");
          } else {
            if (message != "Correct! Click next to continue!") {
              setScore(score + 1);
            }
            setMessage("Correct! Click next to continue!");
          }

        } else {
          setMessage("Incorrect, please try again.");
        }
    }

    const pickRandom =  (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
        //The maximum is exclusive and the minimum is inclusive
    }

    return (
        <>
        <View style={styles.startContainer}>
            <TouchableOpacity onPress = {() => {
              generateQuestion();
              playDef();
              }}>
                <Text style={styles.subtitle}>
                  {question}
                </Text>
            </TouchableOpacity>
        </View>


        <View style={styles.subContainer}>
            <TouchableOpacity onPress = {() => {
                checkAnswer(answerPair[0]);
              }}>
                <Text style={styles.answer}>
                  {answerPair[0]}
                </Text>
            </TouchableOpacity>


            <TouchableOpacity onPress = {() => {
                checkAnswer(answerPair[1]);
              }}>
                <Text style={styles.answer}>
                  {answerPair[1]}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => {
                checkAnswer(answerPair[2]);
              }}>
                <Text style={styles.answer}>
                  {answerPair[2]}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => {
                checkAnswer(answerPair[3]);
              }}>
                <Text style={styles.answer}>
                  {answerPair[3]}
                </Text>
            </TouchableOpacity>
        </View>

        <View style={styles.scoreContainer}>
            <TouchableOpacity
              onPress={() => {generateQuestion()}}
              style={styles.arrowContainer}
            >
              <Image
                source={require('../assets/arrow-right.png')}
                style={styles.arrow}
              />
            </TouchableOpacity>
        </View>
        <View style={styles.scoreContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Q12M2")} style={styles.quizButton}>
            <Text style={styles.score}>Score: {score}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.messageContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Q12M2")} style={styles.quizButton}>
            <Text style={styles.message}>{message}</Text>
          </TouchableOpacity>
        </View>

        </>

        );
}

Q16M2.navigationOptions = () => {(
    title:'Q16M2'
)}

const styles = StyleSheet.create({
  startContainer: {
    justifyContent: 'center',
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#FFFAF0',
  },
  subContainer: {
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flex: 9,
    flexDirection: 'row',
    backgroundColor: '#FFFAF0',
    flexWrap: 'wrap',
  },
  subtitle: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 25,
    marginHorizontal: 5,
    fontWeight: '800',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  arrowContainer: {
    backgroundColor: 'green',
    borderWidth: 1,
    borderRadius: 35,
    padding: 5,
  },
  arrow: {
    height: 35,
    width: 35,
  },
  picture: {
    height: 250,
    width: 250,
    resizeMode: 'stretch',
  },
  words: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginHorizontal: 70,
    textAlign: 'center',
  },
  answer: {
    fontSize: 30,
    margin: 5,
    marginHorizontal: 60,
    backgroundColor: "#bfe54e",
    borderWidth: 1,
    borderRadius: 30,
    overflow: 'hidden',
    padding: 10,
    color: "black",
    fontWeight: '800',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  messageContainer: {
    flex: 3,
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#FFFAF0',
    paddingBottom: 5,
    flexDirection: 'row',
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 50,
    textAlign: 'center',

  },
  scoreContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFAF0',
    paddingBottom: 10,
    flexDirection: 'row',
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginHorizontal: 50,
    textAlign: 'center',
  },

});