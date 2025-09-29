import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  word: string;
  guessedLetters: string[];
}

const WordDisplay: React.FC<Props> = ({ word, guessedLetters }) => {
  return (
    <View style={styles.container}>
      {word.split("").map((letter, index) => (
        <Text key={index} style={styles.letter}>
          {guessedLetters.includes(letter) ? letter : "_"}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginBottom: 20 },
  letter: { fontSize: 28, marginHorizontal: 5 }
});

export default WordDisplay;
