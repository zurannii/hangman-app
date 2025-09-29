import React from "react";
import { View, Button, StyleSheet } from "react-native";

interface Props {
  onPress: (letter: string) => void;
  disabled: boolean;
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const Keyboard: React.FC<Props> = ({ onPress, disabled }) => {
  return (
    <View style={styles.container}>
      {letters.map((l) => (
        <View key={l} style={styles.button}>
          <Button title={l} onPress={() => onPress(l)} disabled={disabled} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center" },
  button: { margin: 2, width: 40 }
});

export default Keyboard;
