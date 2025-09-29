import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  attemptsLeft: number;
}

const HangmanDrawing: React.FC<Props> = ({ attemptsLeft }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tentativas Restantes: {attemptsLeft}</Text>
      {/* Aqui você pode desenhar a forca com SVG ou ASCII */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 15, alignItems: "center" },
  text: { fontSize: 18 }
});

export default HangmanDrawing;
