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

export default function L20({navigation}) {
  //counter for the example we are on. 1-13
  const [example, setExample] = useState(1);
  //images for rendering
  const imgs =
    [
      require('../assets/20/1.png'),
      require('../assets/20/2.png'),
      require('../assets/20/3.png'),
      require('../assets/20/4.png'),
      require('../assets/20/5.png'),
      require('../assets/20/6.png'),
      require('../assets/20/7.png'),
      require('../assets/20/8.png'),
      require('../assets/20/9.png'),
      require('../assets/20/10.png'),
      require('../assets/20/11.png'),
      require('../assets/20/12.png'),
      require('../assets/20/13.png'),
      require('../assets/20/14.png'),
      require('../assets/20/15.png'),
      require('../assets/20/16.png'),
      require('../assets/20/17.png'),
      require('../assets/20/18.png'),
    ];
  //list of words that come first
  const words1 =
    [
      'That cookie is calling my name.',
      "The phone keeps trying to slip out of his hand.",
      "The snowflakes danced across the sky.",
      'Vegetables keep trying to choke me.',
      'The car door groans every time I open it.',
      'She thinks that phone is her best friend.',
      'The glass keeps trying to slip out of his hand.',
      'This math test wants me to fail.',
      'Those balloons keep tempting him to fly high.',
      "The stars winked at the moon all night long.",
      "Those shoes keep trying to trip him.",
      "His ice cream escaped the cone.",
      "No one loves her more than her mirror.",
      "Those cookies keep begging her to eat them.",
      "That skateboard keeps trying to break his other arm.",
      "The money in his pocket keeps nagging him to spend it.",
      "The wind howled at me all night long.",
      "The hot chili bit his tongue.",
    ];
  //sound variables
  var Sound = require('react-native-sound');
  //Sound.setCategory('Playback');
  var sound0,sound1,sound2,sound3,sound4,sound5,sound6,sound7,sound8,
      sound9, sound10,sound11,sound12,sound13,sound14,sound15,sound16,sound17,sound18;
  //plays definition of synonym
  const playDef = () => {
    sound0 = new Sound(require("../assets/20/20intro.mp3"),
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
        sound1 = new Sound(require("../assets/20/1.mp3"),
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
        sound2 = new Sound(require("../assets/20/2.mp3"),
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
        sound3 = new Sound(require("../assets/20/3.mp3"),
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
        sound4 = new Sound(require("../assets/20/4.mp3"),
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
        sound5 = new Sound(require("../assets/20/5.mp3"),
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
        sound6 = new Sound(require("../assets/20/6.mp3"),
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
        sound7 = new Sound(require("../assets/20/7.mp3"),
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
        sound8 = new Sound(require("../assets/20/8.mp3"),
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
        sound9 = new Sound(require("../assets/20/9.mp3"),
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
        sound10 = new Sound(require("../assets/20/10.mp3"),
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
        sound11 = new Sound(require("../assets/20/11.mp3"),
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
      sound12 = new Sound(require("../assets/20/12.mp3"),
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
      sound13 = new Sound(require("../assets/20/13.mp3"),
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
    case 14:
      sound14 = new Sound(require("../assets/20/14.mp3"),
      (error, sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
        sound14.play(() => {
          sound14.release();
        });
      });
      break;
    case 15:
        sound15 = new Sound(require("../assets/20/15.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
          sound15.play(() => {
            sound15.release();
          });
        });
      break;
    case 16:
        sound16 = new Sound(require("../assets/20/16.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
          sound16.play(() => {
            sound16.release();
          });
        });
      break;
    case 17:
        sound17 = new Sound(require("../assets/20/17.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
          sound17.play(() => {
            sound17.release();
          });
        });
      break;
    case 18:
        sound18 = new Sound(require("../assets/20/18.mp3"),
        (error, sound) => {
            if (error) {
              alert('error' + error.message);
              return;
            }
          sound18.play(() => {
            sound18.release();
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
    if (sound14) {sound14.stop();}
    if (sound15) {sound15.stop();}
    if (sound16) {sound16.stop();}
    if (sound17) {sound17.stop();}
    if (sound18) {sound18.stop();}
  }
    return (
      <>
        <View style={styles.startContainer}>
          <TouchableOpacity onPress={() => {
            stopSounds();
            playDef();
          }}>
            <Text style={styles.subtitle}>
              Personification is pretending that
              something is a person or is alive when it isn't.
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
        </View>
        <View style={styles.quizContainer}>
          <TouchableOpacity onPress={() => {navigation.navigate("Q20M1")}} style={styles.quizButton}>
            <Text style={styles.quiz}>?</Text>
          </TouchableOpacity>
        </View>
        </>
    );
}

L20.navigationOptions = () => {(
    title:'L20'
)}

const styles = StyleSheet.create({
  startContainer: {
    justifyContent: 'center',
    flex: 3,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: '#FFFAF0',
    paddingTop: 2,
    paddingBottom: 14,
  },
  subContainer: {
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flex: 10,
    flexDirection: 'row',
    backgroundColor: '#FFFAF0',
    paddingTop: 10,
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
    marginTop: 5,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  quizContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
