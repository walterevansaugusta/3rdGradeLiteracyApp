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

export default function L13({navigation}) {
  //counter for the example we are on. 1-13
  const [example, setExample] = useState(1);
  //images for rendering
  const imgs =
    [
      require('../assets/13/ascend_descend.png'),
      require('../assets/13/big_little.png'),
      require('../assets/13/boring_exciting.png'),
      require('../assets/13/cold_hot.png'),
      require('../assets/13/day_night.png'),
      require('../assets/13/naughty_nice.png'),
      require('../assets/13/polite_rude.png'),
      require('../assets/13/rise_fall.png'),
      require('../assets/13/sunrise_sunset.png'),
      require('../assets/13/sweet_sour.png'),
      require('../assets/13/tighten_loosen.png'),
      require('../assets/13/whisper_yell.png'),
      require('../assets/13/young_old.png'),
    ];
  //list of words that come first
  const words1 =
    [
      'ascend',
      'big',
      'boring',
      'cold',
      'day',
      'naughty',
      'polite',
      'rise',
      'sunrise',
      'sweet',
      'tighten',
      'whisper',
      'young',
    ];
  //list of words that come second
  const words2 =
    [
      'descend',
      'little',
      'exciting',
      'hot',
      'night',
      'nice',
      'rude',
      'fall',
      'sunset',
      'sour',
      'loosen',
      'yell',
      'old',
    ];
  //sound variables
  var Sound = require('react-native-sound');
  //Sound.setCategory('Playback');
  var sound0, sound1,sound2,sound3,sound4,sound5,sound6,sound7,sound8,
      sound9,sound10,sound11,sound12,sound13;
  //plays definition of synonym
  const playDef = () => {
    sound0 = new Sound(require("../assets/13/13intro.mp3"),
    (error, sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound0.play(() => {
          //sound0.release();
        });
      });
  }
  //plays the audio associated with each example
  const playEx = (num) => {
    stopSounds();
    switch (num) {
      case 1:
        sound1 = new Sound(require("../assets/13/ascend_descend.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound1.play(() => {
              sound1.release();
            });
          });
        break;
      case 2:
        sound2 = new Sound(require("../assets/13/big_little.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound2.play(() => {
              sound2.release();
            });
          });
        break;
      case 3:
        sound3 = new Sound(require("../assets/13/boring_exciting.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound3.play(() => {
              sound3.release();
            });
          });
        break;
      case 4:
        sound4 = new Sound(require("../assets/13/cold_hot.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound4.play(() => {
              sound4.release();
            });
          });
        break;
      case 5:
        sound5 = new Sound(require("../assets/13/day_night.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound5.play(() => {
              sound5.release();
            });
          });
        break;
      case 6:
        sound6 = new Sound(require("../assets/13/naughty_nice.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound6.play(() => {
             sound6.release();
            });
          });
        break;
      case 7:
        sound7 = new Sound(require("../assets/13/polite_rude.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound7.play(() => {
              sound7.release();
            });
          });
        break;
      case 8:
        sound8 = new Sound(require("../assets/13/rise_fall.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound8.play(() => {
              sound8.release();
            });
          });
        break;
      case 9:
        sound9 = new Sound(require("../assets/13/sunrise_sunset.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound9.play(() => {
              sound9.release();
            });
          });
        break;
      case 10:
        sound10 = new Sound(require("../assets/13/sweet_sour.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound10.play(() => {
              sound10.release();
            });
          });
        break;
      case 11:
        sound11 = new Sound(require("../assets/13/tighten_loosen.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound11.play(() => {
              sound11.release();
            });
          });
        break;
      case 12:
        sound12 = new Sound(require("../assets/13/whisper_yell.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound12.play(() => {
              sound12.release();
            });
          });
        break;
      case 13:
        sound13 = new Sound(require("../assets/13/young_old.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
            sound13.play(() => {
              sound13.release();
            });
          });
        break;
    }
  }
  //stops any sound playing
  const stopSounds = () => {
    if (sound0) {sound0.stop();}
    if (sound1) {sound1.stop();}
    if (sound2) {sound2.stop();}
    if (sound3) {sound3.stop();}
    if (sound4) {sound4.stop();}
    if (sound5) {sound5.stop();}
    if (sound6) {sound6.stop();}
    if (sound7) {sound7.stop();}
    if (sound8) {sound8.stop();}
    if (sound9) {sound9.stop();}
    if (sound10) {sound10.stop();}
    if (sound11) {sound11.stop();}
    if (sound12) {sound12.stop();}
    if (sound13) {sound13.stop();}
  }
    return (
      <>
        <View style={styles.startContainer}>
          <TouchableOpacity onPress={() => {
            stopSounds();
            playDef();
          }}>
            <Text style={styles.subtitle}>
              Antonyms are words which have opposite
              or close to opposite meanings.
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.subContainer}>
          <TouchableOpacity
            onPress={() => {
              setExample(example === 1 ? imgs.length : example - 1);
              playEx(example=== 1 ? imgs.length : example - 1);
              stopSounds();
            }}
            style={styles.arrowContainer}
          >
            <Image
              source={require('../assets/arrow-left.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              stopSounds();
              playEx(example);
            }}
          >
            <Image
              source={imgs[example - 1]}
              style={styles.picture}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setExample(example === imgs.length ? 1 : example + 1);
              playEx(example === imgs.length ? 1 : example + 1);
              stopSounds();
            }}
            style={styles.arrowContainer}
          >
            <Image
              source={require('../assets/arrow-right.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <Text style={styles.words}>{words1[example - 1]}</Text>
          <Text style={styles.words}>{words2[example - 1]}</Text>
        </View>
        <View style={styles.quizContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Q13M1")} style={styles.quizButton}>
          <Text style={styles.quiz}>Q1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Q13M2")} style={styles.quizButton}>
          <Text style={styles.quiz}>Q2</Text>
        </TouchableOpacity>
        </View>
        </>
    );
}

L13.navigationOptions = () => {(
    title:'L13'
)}

const styles = StyleSheet.create({
  startContainer: {
    justifyContent: 'center',
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#FFFAF0',
    paddingVertical: 15,
  },
  subContainer: {
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flex: 10,
    flexDirection: 'row',
    backgroundColor: '#FFFAF0',
    paddingTop: 50,
    flexWrap: 'wrap',
  },
  subtitle: {
    fontSize: 20,
    margin: 5,
    fontWeight: '800',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  arrowContainer: {
    backgroundColor: 'green',
    borderWidth: 1,
    borderRadius: 35,
    padding: 5,
    //marginHorizontal: 5,
    marginTop: 130,
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
    marginHorizontal: 50,
    textAlign: 'center',
  },
  quizContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFFAF0',
    paddingBottom: 70,
    flexDirection: 'row',
  },
  quizButton: {
    backgroundColor: '#bfe54e',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 30,
    width: 50,
    height: 50,
  },
  quiz: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
