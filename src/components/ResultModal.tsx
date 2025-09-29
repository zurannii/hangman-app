import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

interface Props {
  isWinner: boolean;
  word: string;
  onRestart: () => void;
}

const ResultModal: React.FC<Props> = ({ isWinner, word, onRestart }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isWinner ? "🎉 Você venceu!" : "💀 Você perdeu!"}
      </Text>
      <Text style={styles.word}>A palavra era: {word}</Text>
      <Button title="🔄 Jogar novamente" onPress={onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 20, alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  word: { fontSize: 18, marginBottom: 20 }
});

export default ResultModal;
