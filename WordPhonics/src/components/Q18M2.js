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
import {addGold, addSilver, markQuizDone, markQuizBlank} from "./User"

import Sound from 'react-native-sound';

// list of correct answers
var correctPairs =
  [
    "boy",
    "girl",
    "cardinal",
    "taco",
    "robot",
    "sunglasses",
    "rattlesnake",
    "wasp",
    "mutt",
    "trike",
    "dalmation",
    "wagon",
    "gorilla",
    "mother",
    "parrot",
    "aerialist",
    "bulldozer",
    "chimp",
  ];

// list of incorrect answers
const incorrectPairs =
  [
    "buzz",
    "croak",
    "hiccup",
    "hoot",
    "meow",
    "moo",
    "oink",
    "pop",
    "quack",
    "slurp",
    "tap",
    "thud",
  ];

export default function Q18M2({navigation}) {
  const [answerPair, setAnswerPair] = useState(["null", "null", "null", "null"]);
  const [correctAnswer, setCorrectAnswer] = useState("null");
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [star1, setStar1] = useState(require('../assets/Blank-Star.png'));
  const [star2, setStar2] = useState(require('../assets/Blank-Star.png'));
  const [star3, setStar3] = useState(require('../assets/Blank-Star.png'));
  const [star4, setStar4] = useState(require('../assets/Blank-Star.png'));
  const [star5, setStar5] = useState(require('../assets/Blank-Star.png'));
  const [tries, setTry] = useState(0);
  const [gold, setGold] = useState(false);
  const [silver, setSilver] = useState(false);
  const [right, setRight] = useState(false);

    // question to be asked at top -- maybe we could generalize this
    // quiz screen
    const question = "Which word is NOT a good example of onomatopoeia?";

    React.useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        // The screen is focused
        // Call any action
        generateQuestion();
      });

      // Return the function to unsubscribe from the event so it gets removed on unmount
      return unsubscribe;
    }, [navigation]);


    // runs when you click the question for testing
    const generateQuestion = () => {
      // clears message
      setMessage("");
      setTry(0);
      setGold(false);
      setSilver(false);
      setRight(false);
      if(correctPairs.length == 0) {
        //resets quiz before going to mode 2
        correctPairs =
          [
            "boy",
            "girl",
            "cardinal",
            "taco",
            "robot",
            "sunglasses",
            "rattlesnake",
            "wasp",
            "mutt",
            "trike",
            "dalmation",
            "wagon",
            "gorilla",
            "mother",
            "parrot",
            "aerialist",
            "bulldozer",
            "chimp",
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

      //removes the asked pairs from the array so there arent repeats and the quiz can end
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
      if(right) {return;}
      if (string == correctAnswer) {
        setRight(true);
        if(tries == 0) {
          addGold();
          setGold(true);
          if (star1 != require('../assets/check_mark.png')) {
            if(star5 == require('../assets/Gold-Star-Blank.png')) {
              setStar1(require('../assets/check_mark.png'));
              setStar2(require('../assets/Blank-Star.png'));
              setStar3(require('../assets/Blank-Star.png'));
              setStar4(require('../assets/Blank-Star.png'));
              setStar5(require('../assets/Blank-Star.png'));
              markQuizDone(18, 2);
            }
            else if(star4 == require('../assets/Gold-Star-Blank.png')) {
              setStar5(require('../assets/Gold-Star-Blank.png'));
            }
            else if(star3 == require('../assets/Gold-Star-Blank.png')) {
              setStar4(require('../assets/Gold-Star-Blank.png'));
            }
            else if(star2 == require('../assets/Gold-Star-Blank.png')) {
              setStar3(require('../assets/Gold-Star-Blank.png'));
            }
            else if(star1 == require('../assets/Gold-Star-Blank.png')) {
              setStar2(require('../assets/Gold-Star-Blank.png'));
            } else {
              setStar1(require('../assets/Gold-Star-Blank.png'));
            }
          }
        }
        else if(tries == 1) {
          addSilver();
          setSilver(true);
        }
        if(correctPairs.length == 0) {
          setMessage("Correct! You are done with this quiz! Click to go back to the Main Menu");
        } else {
          if (message != "Correct! Click next to continue!") {
            setScore(score + 1);
          }
          setMessage("Correct! Click next to continue!");
        }

      } else {
        if (star1 == require('../assets/Gold-Star-Blank.png')) {
          setStar1(require('../assets/Silver-Star-Blank.png'));
        }
        if (star2 == require('../assets/Gold-Star-Blank.png')) {
          setStar2(require('../assets/Silver-Star-Blank.png'));
        }
        if (star3 == require('../assets/Gold-Star-Blank.png')) {
          setStar3(require('../assets/Silver-Star-Blank.png'));
        }
        if (star4 == require('../assets/Gold-Star-Blank.png')) {
          setStar4(require('../assets/Silver-Star-Blank.png'));
        }
        if (star5 == require('../assets/Gold-Star-Blank.png')) {
          setStar5(require('../assets/Silver-Star-Blank.png'));
        }
        if (star1 == '') {
          setStar1(require('../assets/Silver-Star-Blank.png'));
        }
        setTry(tries + 1);
        setMessage("Incorrect, please try again.");
      }
    }

    const pickRandom =  (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
        //The maximum is exclusive and the minimum is inclusive
    }

    function Info(props) {
      if (gold == true) {
        return (
          <View style={styles.messageContainer}>
          <TouchableOpacity
            onPress={null}
            style={styles.quizButton}>
              <Text style={styles.message}>{message}</Text>
          </TouchableOpacity>
            <Image source={require("../assets/gold.png")} style={styles.coin}/>
          </View>
        );
      } else if (silver == true) {
        return (
          <View style={styles.messageContainer}>
            <TouchableOpacity
              onPress={null}
              style={styles.quizButton}>
                <Text style={styles.message}>{message}</Text>
            </TouchableOpacity>
            <Image source={require("../assets/silver.png")} style={styles.coin}/>
          </View>
        );
      } else {
        return (
          <View style={styles.messageContainer}>
            <TouchableOpacity
              onPress={null}
              style={styles.quizButton}>
                <Text style={styles.message}>{message}</Text>
            </TouchableOpacity>
          </View>
        );
      }
    }

    return (
        <>
        <View style={styles.starContainer}>
          <Image
            source={star4}
            style={styles.arrow}
          />
          <Image
            source={star2}
            style={styles.arrow}
          />
          <Image
            source={star1}
            style={styles.arrow}
          />
          <Image
            source={star3}
            style={styles.arrow}
          />
          <Image
            source={star5}
            style={styles.arrow}
          />
        </View>
        <View style={styles.startContainer}>
            <TouchableOpacity onPress = {null}>
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

        <Info/>

        </>

        );
}

Q18M2.navigationOptions = () => {(
    title:'Q18M2'
)}

const styles = StyleSheet.create({
  startContainer: {
    justifyContent: 'center',
    flex: 2.5,
    flexDirection: 'row',
    backgroundColor: '#FFFAF0',
  },
  starContainer: {
    paddingTop: 7,
    paddingBottom: 7,
    justifyContent: 'center',
    backgroundColor: '#FFFAF0',
    flexDirection: 'row',
  },
  coin: {
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
  subContainer: {
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flex: 10,
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
    marginHorizontal: 70,
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
    flex: 2.5,
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
