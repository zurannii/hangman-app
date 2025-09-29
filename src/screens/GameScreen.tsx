import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import WordDisplay from "../components/WordDisplay";
import Keyboard from "../components/Keyboard";
import Attempts from "../components/Attempts";
import HangmanDrawing from "../components/HangmanDrawing";
import ResultModal from "../components/ResultModal";
import { words } from "../utils/words";

const MAX_ATTEMPTS = 6;

export default function GameScreen() {
  const [word, setWord] = useState<string>("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [attemptsLeft, setAttemptsLeft] = useState<number>(MAX_ATTEMPTS);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [isWinner, setIsWinner] = useState<boolean>(false);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord.toUpperCase());
    setGuessedLetters([]);
    setAttemptsLeft(MAX_ATTEMPTS);
    setGameOver(false);
    setIsWinner(false);
  };

  const handleGuess = (letter: string) => {
    if (guessedLetters.includes(letter) || gameOver) return;

    setGuessedLetters((prev) => [...prev, letter]);

    if (!word.includes(letter)) {
      setAttemptsLeft((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const allGuessed = word.split("").every((l) => guessedLetters.includes(l));
    if (allGuessed) {
      setGameOver(true);
      setIsWinner(true);
    } else if (attemptsLeft <= 0) {
      setGameOver(true);
      setIsWinner(false);
    }
  }, [guessedLetters, attemptsLeft]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎯 Jogo da Forca</Text>
      <HangmanDrawing attemptsLeft={attemptsLeft} />
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      <Attempts guessedLetters={guessedLetters} word={word} />
      <Keyboard onPress={handleGuess} disabled={gameOver} />
      {gameOver && (
        <ResultModal
          isWinner={isWinner}
          word={word}
          onRestart={startNewGame}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 20 }
});
