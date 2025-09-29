import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  guessedLetters: string[];
  word: string;
}

const Attempts: React.FC<Props> = ({ guessedLetters, word }) => {
  const wrongLetters = guessedLetters.filter((l) => !word.includes(l));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>❌ Erradas: {wrongLetters.join(", ")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
  text: { fontSize: 16, color: "red" }
});

export default Attempts;
