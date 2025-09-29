export interface GameState {
  word: string;
  guessedLetters: string[];
  attemptsLeft: number;
  gameOver: boolean;
  isWinner: boolean;
}
